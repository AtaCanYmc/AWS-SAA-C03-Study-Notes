#!/usr/bin/env python3
"""
AWS SAA-C03 Notes Turkish Translator & Synchronizer
Translates questions, options, concept summaries, and module documentation
from English (notes/en) to Turkish (notes/tr) with persistent caching.
"""

import concurrent.futures
import hashlib
import json
import re
import threading
import time
import urllib.parse
import urllib.request
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
EN_DIR = BASE_DIR / "notes" / "en"
TR_DIR = BASE_DIR / "notes" / "tr"
CACHE_FILE = BASE_DIR / "scripts" / "translation_cache.json"

cache_lock = threading.Lock()

# Turkish Concept Rules Dictionary
TURKISH_CONCEPTS = {
    "Amazon S3 Transfer Acceleration": (
        "Amazon S3 Transfer Acceleration (Aktarım Hızlandırma)",
        "Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır."
    ),
    "S3 Multipart Upload": (
        "S3 Multipart Upload (Çok Parçalı Yükleme)",
        "Büyük dosya yüklemelerini paralel parçalara ayırarak gerçekleştirir. 100 MB üzerindeki nesneler için önerilir, 5 GB üzerindeki nesneler için zorunludur. Ağ kesintilerinde yalnızca başarısız olan parçanın tekrar yüklenmesini sağlar."
    ),
    "Amazon S3 Glacier Storage Classes": (
        "Amazon S3 Glacier Depolama Sınıfları",
        "Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür."
    ),
    "S3 Lifecycle Management": (
        "S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules)",
        "Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar."
    ),
    "S3 Object Lock (WORM)": (
        "S3 Object Lock (WORM - Bir Kez Yaz Çok Oku)",
        "Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir."
    ),
    "S3 Cross-Region Replication (CRR)": (
        "S3 Bölgeler Arası Çoğaltma (CRR)",
        "Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur)."
    ),
    "Amazon Athena Serverless Analytics": (
        "Amazon Athena Sunucusuz Analitik",
        "Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar."
    ),
    "Amazon EFS Shared File Storage": (
        "Amazon EFS Paylaşımlı Dosya Sistemi",
        "Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir."
    ),
    "Amazon FSx Managed File Systems": (
        "Amazon FSx Yönetilen Dosya Sistemleri",
        "FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar."
    ),
    "AWS Storage Gateway": (
        "AWS Storage Gateway",
        "Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar."
    ),
    "EC2 Auto Scaling & Target Tracking": (
        "EC2 Auto Scaling & Hedef İzleme Politikaları",
        "Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar."
    ),
    "Amazon EC2 Spot Instances": (
        "Amazon EC2 Spot Bulut Sunucuları",
        "Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir."
    ),
    "EC2 Placement Groups": (
        "EC2 Yerleşim Grupları (Placement Groups)",
        "Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır."
    ),
    "AWS Lambda Serverless Execution": (
        "AWS Lambda Sunucusuz Kod Yürütme",
        "Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır."
    ),
    "AWS Fargate Serverless Containers": (
        "AWS Fargate Sunucusuz Konteyner Motoru",
        "EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır."
    ),
    "Amazon RDS Multi-AZ High Availability": (
        "Amazon RDS Multi-AZ Yüksek Erişilebilirlik",
        "Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez."
    ),
    "Amazon RDS Read Replicas": (
        "Amazon RDS Okuma Replikaları (Read Replicas)",
        "Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir)."
    ),
    "Amazon Aurora High Availability & Global DB": (
        "Amazon Aurora Yüksek Erişilebilirlik ve Global DB",
        "Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar."
    ),
    "Amazon DynamoDB NoSQL": (
        "Amazon DynamoDB NoSQL Veritabanı",
        "Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler."
    ),
    "Amazon DynamoDB Accelerator (DAX)": (
        "Amazon DynamoDB Hızlandırıcı (DAX)",
        "DynamoDB için özel geliştirilmiş bellek içi önbellek kümesidir; yoğun okuma yapan uygulamalarda yanıt süresini milisaniyelerden mikrosaniyelere indirir."
    ),
    "Amazon ElastiCache In-Memory Caching": (
        "Amazon ElastiCache Bellek İçi Önbellekleme",
        "ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar."
    ),
    "VPC Gateway Endpoints": (
        "VPC Gateway Uç Noktaları (Gateway Endpoints)",
        "VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar."
    ),
    "AWS PrivateLink & Interface Endpoints": (
        "AWS PrivateLink & Arayüz Uç Noktaları",
        "Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar."
    ),
    "AWS Transit Gateway Hub-and-Spoke": (
        "AWS Transit Gateway Merkezi Ağ Yönlendiricisi",
        "Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler."
    ),
    "AWS Direct Connect (DX)": (
        "AWS Direct Connect (Özel Fiziksel Bağlantı)",
        "Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar."
    ),
    "Amazon Route 53 Intelligent Routing": (
        "Amazon Route 53 Akıllı DNS Yönlendirme",
        "Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar."
    ),
    "Amazon CloudFront & Origin Access Control": (
        "Amazon CloudFront & Menşe Erişim Kontrolü (OAC)",
        "İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar."
    ),
    "CloudFront Signed URLs vs Signed Cookies": (
        "CloudFront İmzalı URL'ler ve İmzalı Çerezler",
        "İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar."
    ),
    "Application Load Balancer (ALB Layer 7)": (
        "Application Load Balancer (ALB - Katman 7 Yük Dengeleyici)",
        "Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler."
    ),
    "Network Load Balancer (NLB Layer 4)": (
        "Network Load Balancer (NLB - Katman 4 Yük Dengeleyici)",
        "Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır."
    ),
    "AWS Organizations & Service Control Policies (SCPs)": (
        "AWS Organizations & Hizmet Kontrol Politikaları (SCP)",
        "Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler."
    ),
    "AWS Key Management Service (KMS)": (
        "AWS Anahtar Yönetim Hizmeti (KMS)",
        "Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir."
    ),
    "AWS Secrets Manager": (
        "AWS Secrets Manager",
        "Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation)."
    ),
    "AWS Systems Manager Parameter Store": (
        "AWS Systems Manager Parameter Store",
        "Yapılandırma parametreleri, ortam değişkenleri ve şifreli dizgiler için hiyerarşik depolama sunar; standart (ücretsiz) ve gelişmiş katman seçenekleri bulunur."
    ),
    "AWS WAF Web Application Protection": (
        "AWS WAF Web Uygulama Güvenlik Duvarı",
        "CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller."
    ),
    "Amazon SQS Queuing Architecture": (
        "Amazon SQS Mesaj Kuyruklama Mimarisi",
        "Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar."
    ),
    "Amazon SNS Pub/Sub & Fanout Pattern": (
        "Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni",
        "Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar."
    ),
    "Amazon Kinesis Real-Time Streaming": (
        "Amazon Kinesis Gerçek Zamanlı Veri Akışı",
        "Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır."
    ),
    "AWS Step Functions Distributed Orchestration": (
        "AWS Step Functions Dağıtık İş Akışı Düzenleme",
        "Mikroservisleri, Lambda fonksiyonlarını ve uzun süreli toplu işleri otomatik yeniden deneme ve durum takibi ile koordine eden görsel iş akışı servisidir."
    ),
    "AWS DataSync Accelerated Migration": (
        "AWS DataSync Hızlandırılmış Veri Taşıma",
        "Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar."
    ),
    "AWS Architecture Best Practice": (
        "AWS Mimari En İyi Uygulamaları (Well-Architected)",
        "Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin."
    ),
}

# In-memory translation cache loaded from disk
translation_cache = {}


def load_cache():
    global translation_cache
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, "r", encoding="utf-8") as f:
                translation_cache = json.load(f)
            print(f"Loaded {len(translation_cache):,} cached translations.")
        except Exception as e:
            print(f"Warning loading cache: {e}")
            translation_cache = {}


def save_cache():
    with cache_lock:
        try:
            with open(CACHE_FILE, "w", encoding="utf-8") as f:
                json.dump(translation_cache, f, ensure_ascii=False, indent=2)
        except Exception as e:
            print(f"Warning saving cache: {e}")


def get_cache_key(text: str) -> str:
    return hashlib.sha256(text.strip().encode("utf-8")).hexdigest()


def translate_text(text: str, retries: int = 5) -> str:
    """Translates text from English to Turkish with retries, multi-endpoint fallback, and caching."""
    clean = text.strip()
    if not clean:
        return text

    cache_key = get_cache_key(clean)
    with cache_lock:
        if cache_key in translation_cache:
            return translation_cache[cache_key]

    endpoints = [
        # Endpoint 1: Chrome Extension dictionary endpoint (high limits, no 429)
        ("https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=tr&q=", "dict"),
        # Endpoint 2: Single translate client at
        ("https://translate.googleapis.com/translate_a/single?client=at&sl=en&tl=tr&dt=t&q=", "at"),
        # Endpoint 3: Single translate client gtx
        ("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=", "gtx"),
    ]

    for attempt in range(retries):
        base_url, mode = endpoints[attempt % len(endpoints)]
        try:
            url = base_url + urllib.parse.quote(clean)
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
                },
            )
            time.sleep(0.25)  # Polite pacing to prevent bursts
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                if mode == "dict":
                    translated = data[0] if isinstance(data, list) and data else str(data)
                else:
                    translated = "".join([part[0] for part in data[0] if part[0]])

                if translated and translated.strip():
                    with cache_lock:
                        translation_cache[cache_key] = translated
                    return translated
        except Exception as err:
            err_str = str(err)
            if "429" in err_str:
                sleep_time = 4.0 + attempt * 2.0
                print(f"[Rate-limit 429] Backing off {sleep_time:.1f}s and rotating endpoint...")
                time.sleep(sleep_time)
            else:
                time.sleep(1.0)
            if attempt == retries - 1:
                print(f"Translation failed for '{clean[:40]}...': {err}")
                return clean
    return clean


def translate_question_block(q_block: str) -> str:
    """
    Parses a question block (Question text + Options + Callout),
    translates question body and options into Turkish, and formats
    the callout using Turkish concept definitions.
    """
    # 1. Identify Callout (> [!NOTE] ...)
    callout_match = re.search(r"(> \[!NOTE\].*?\Z)", q_block, re.DOTALL)
    body_part = q_block[:callout_match.start()].strip() if callout_match else q_block.strip()
    callout_part = callout_match.group(1).strip() if callout_match else ""

    # 2. Extract Question header (e.g., "Question #1\n\nTopic 1", "Question 1", "Soru 1 / 63 ...")
    hdr_m = re.match(r"^(Question\s*#?\d+(?:\s+Topic\s+\d+)?|Soru\s+\d+\s*/\s*\d+[^A-Z\n]*\n?)", body_part, re.IGNORECASE)
    if hdr_m:
        header_text = hdr_m.group(1).strip()
        body_without_hdr = body_part[hdr_m.end():].strip()
        # Turkish header
        tr_header = re.sub(r"Question\s*#?(\d+)", r"Soru #\1", header_text, flags=re.IGNORECASE)
    else:
        tr_header = ""
        body_without_hdr = body_part

    # 3. Translate body (Question scenario + Options)
    # We translate body_without_hdr
    tr_body = translate_text(body_without_hdr)

    # 4. Process Callout into Turkish
    tr_callout = ""
    if callout_part:
        # Check if already Module 03 style (already Turkish)
        if "💡 Sınav Konusu & Detaylı Çözüm Açıklaması" in callout_part:
            tr_callout = callout_part
        else:
            # Extract Answer
            ans_m = re.search(r"\*\*Correct Answer:\*\*\s*`?([A-E,\s]+)`?", callout_part)
            correct_ans = ans_m.group(1).strip() if ans_m else ""

            # Extract Recommended Solution
            rec_m = re.search(r"\*\*Recommended Solution:\*\*\s*(.*?)(?=\n>|\Z)", callout_part, re.DOTALL)
            rec_text = rec_m.group(1).strip() if rec_m else ""
            tr_rec = translate_text(rec_text) if rec_text else ""

            # Build Turkish callout lines
            lines = [
                "> [!NOTE]",
                "> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması",
            ]
            if correct_ans:
                lines.append(f"> - **Doğru Seçenek:** `{correct_ans}`")
            if tr_rec:
                lines.append(f"> - **Önerilen Çözüm:** {tr_rec}")

            # Check matching concept summaries
            concept_lines = []
            for en_concept, (tr_title, tr_desc) in TURKISH_CONCEPTS.items():
                if en_concept in callout_part:
                    concept_lines.append(f"> - **{tr_title}:** {tr_desc}")

            if concept_lines:
                lines.append(">")
                lines.append("> **Sınav Konu Özeti:**")
                lines.extend(concept_lines)

            tr_callout = "\n".join(lines)

    res = ""
    if tr_header:
        res += tr_header + "\n\n"
    res += tr_body
    if tr_callout:
        res += "\n\n" + tr_callout

    return res


def translate_section_file(en_file: Path, tr_file: Path, module_title: str):
    """Reads an English section file, translates all questions, and writes Turkish version."""
    content = en_file.read_text(encoding="utf-8")

    # Match section metadata
    range_m = re.search(r"> \*\*Question Range:\*\* (\d+) - (\d+) of (\d+)", content)
    sec_num_m = re.search(r"section-(\d+)", en_file.name)
    sec_num = sec_num_m.group(1) if sec_num_m else "01"

    if range_m:
        start_q, end_q, total_q = range_m.group(1), range_m.group(2), range_m.group(3)
        tr_range_line = f"> **Soru Aralığı:** {start_q} - {end_q} / Toplam: {total_q}"
    else:
        tr_range_line = "> **Soru Aralığı:** Çalışma Bölümü"

    # Split questions by separator
    q_blocks = re.split(r"\n\n---\n\n", content)
    # The first item is usually the header block
    questions = q_blocks[1:]

    valid_questions = [(i, q.strip()) for i, q in enumerate(questions) if q.strip() and q.strip() != "---"]
    tr_questions = [None] * len(questions)

    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        future_to_idx = {
            executor.submit(translate_question_block, q_text): i
            for i, q_text in valid_questions
        }
        for future in concurrent.futures.as_completed(future_to_idx):
            idx = future_to_idx[future]
            try:
                tr_questions[idx] = future.result()
            except Exception as e:
                print(f"Error translating question in {en_file.name}: {e}")
                tr_questions[idx] = questions[idx]

    tr_questions = [q for q in tr_questions if q]

    # Reconstruct Turkish section file
    tr_header = (
        f"# {module_title} - Bölüm {sec_num}\n\n"
        f"{tr_range_line}\n\n"
        f"[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)\n\n"
        f"---\n\n"
    )

    tr_content = tr_header + "\n\n---\n\n".join(tr_questions) + "\n"
    tr_file.parent.mkdir(parents=True, exist_ok=True)
    tr_file.write_text(tr_content, encoding="utf-8")
    print(f"  -> Generated {tr_file.name} ({len(tr_questions)} questions).")
    return tr_questions


def generate_tr_module(mod_dir_name: str, tr_title: str, tr_desc: str):
    """Processes an entire module into Turkish."""
    print(f"\n==========================================")
    print(f"Processing Module: {mod_dir_name} -> TR")
    print(f"==========================================")

    en_mod = EN_DIR / mod_dir_name
    tr_mod = TR_DIR / mod_dir_name
    tr_sections_dir = tr_mod / "sections"
    tr_sections_dir.mkdir(parents=True, exist_ok=True)

    en_sections = sorted((en_mod / "sections").glob("section-*.md"))
    all_translated_questions = []

    for en_sec in en_sections:
        tr_sec = tr_sections_dir / en_sec.name
        tr_qs = translate_section_file(en_sec, tr_sec, tr_title)
        all_translated_questions.extend(tr_qs)
        save_cache()

    # Generate consolidated notes.md
    consolidated_path = tr_mod / "notes.md"
    consolidated_content = (
        f"# {tr_title} - Tam Notlar\n\n"
        f"> {tr_desc}\n\n"
        f"[← Modül Ana Sayfası](./README.md) | [← Ana Depoya Dön](../../../README.md)\n\n"
        f"---\n\n"
        + "\n\n---\n\n".join(all_translated_questions)
        + "\n"
    )
    consolidated_path.write_text(consolidated_content, encoding="utf-8")
    print(f"  -> Created consolidated notes at {consolidated_path.name}")

    # Generate module README.md
    readme_lines = [
        "[← Ana Depoya Dön](../../../README.md)",
        "",
        f"# {tr_title}",
        "",
        tr_desc,
        "",
        "## Genel Bilgiler",
        "",
        "| Özellik | Değer |",
        "| :--- | :--- |",
        f"| Toplam Soru Sayısı | {len(all_translated_questions):,} |",
        "| Birleştirilmiş Tek Dosya | [`notes.md`](./notes.md) |",
        "| Bölüm Sayısı | " + str(len(en_sections)) + " Bölüm |",
        "",
        "## Çalışma Bölümleri ve İlerleme Takibi",
        "",
        "Tamamladığınız bölümleri kutucukları işaretleyerek (`- [x]`) takip edebilirsiniz:",
        "",
    ]

    for en_sec in en_sections:
        sec_name = en_sec.name
        m_range = re.search(r"questions-(\d+)-(\d+)", sec_name)
        sec_num = re.search(r"section-(\d+)", sec_name).group(1)
        if m_range:
            start_q, end_q = int(m_range.group(1)), int(m_range.group(2))
            label = f"Bölüm {sec_num} (Soru {start_q} - {end_q})"
        else:
            label = f"Bölüm {sec_num}"

        readme_lines.append(f"- [ ] **{label}** ➔ [`sections/{sec_name}`](./sections/{sec_name})")

    readme_lines.append("")
    (tr_mod / "README.md").write_text("\n".join(readme_lines), encoding="utf-8")
    print(f"  -> Created {tr_mod / 'README.md'}")


def main():
    load_cache()

    # Module 01
    generate_tr_module(
        "01-aws-certified-solutions-architect-associate-saa-c03",
        "AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları",
        "AWS SAA-C03 sertifika sınavına yönelik mimari senaryolar, pratik sorular ve detaylı kavram analizleri.",
    )

    # Module 02
    generate_tr_module(
        "02-aws-saa-c03-question-bank-1019",
        "AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap)",
        "Onaylanmış doğru cevap anahtarları ve mimari kavram özetleri içeren 1019 soruluk kapsamlı soru havuzu.",
    )

    # Module 03
    generate_tr_module(
        "03-caa-exam-questions-explained",
        "CAA Sınav Soruları - Resmi Referanslı ve Açıklamalı",
        "63 temel sınav senaryosu, detaylı Türkçe çözüm gerekçeleri ve doğrudan resmi AWS dokümantasyon bağlantıları.",
    )

    save_cache()
    print("\n🎉 Tüm Türkçe notlar (notes/tr/) başarıyla üretildi!")


if __name__ == "__main__":
    main()
