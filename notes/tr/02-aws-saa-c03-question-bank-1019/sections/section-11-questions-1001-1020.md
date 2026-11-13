# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 11

> **Soru Aralığı:** 1001 - 1020 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #1000

Bir şirket şu anda şirket içi blok depolama sistemlerinde 5 TB veri saklıyor. Şirketin
mevcut depolama çözümü ek veriler için sınırlı alan sağlar. Şirket çalışıyor
sık erişilen verileri düşük gecikmeyle alabilmesi gereken şirket içi uygulamalar.
Şirketin bulut tabanlı bir depolama çözümüne ihtiyacı var.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Amazon S3 File Gateway'i kullanın. S3 File Gateway'i şirket içi uygulamalarla entegre ederek
SMB dosya sistemini kullanarak dosyaları depolayın ve doğrudan alın.

B. iSCSI hedefleri olarak önbelleğe alınmış birimlerle bir AWS Storage Gateway Volume Gateway kullanın.

C. iSCSI hedefleri olarak depolanan birimlerle bir AWS Storage Gateway Volume Gateway kullanın.

D. AWS Storage Gateway Teyp Ağ Geçidi kullanın. Tape Gateway'i şirket içi ortamla entegre edin
Amazon S3'te sanal bantları depolamak için uygulamalar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** iSCSI hedefleri olarak önbelleğe alınmış birimlerle bir AWS Storage Gateway Volume Gateway kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 1001
Bir şirket yemek dağıtım hizmeti vermektedir. Son zamanlardaki büyüme nedeniyle şirketin siparişi
işleme sistemi trafiğin yoğun olduğu saatlerde ölçeklendirme sorunları yaşıyor. mevcut
mimari, bir Auto Scaling grubundaki, siparişleri toplayan Amazon EC2 bulut sunucularını içerir.
uygulama. Otomatik Ölçeklendirme grubundaki ikinci bir EC2 bulut sunucusu grubu, siparişleri yerine getirir.
Sipariş toplama süreci hızlı bir şekilde gerçekleşir ancak siparişin karşılanması süreci daha uzun sürebilir.
Ölçeklendirme olayı nedeniyle veriler kaybolmamalıdır.
Bir çözüm mimarı, sipariş toplama sürecinin ve siparişin yerine getirilmesinin sağlanmasını sağlamalıdır.
Sürecin her ikisi de trafiğin yoğun olduğu saatlerde yeterince ölçeklenebilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her bir bulut sunucusunun CPU Kullanımı ölçümünü hem Otomatik hem de Otomatik olarak izlemek için Amazon CloudWatch'u kullanın.
Grupları ölçeklendirme. Her Otomatik Ölçeklendirme grubunun minimum kapasitesini, en yüksek iş yükünü karşılayacak şekilde yapılandırın
değer.

B. Her iki Otomatik Bulut Sunucusunda da her bir bulut sunucusu için CPU Kullanımı ölçümünü izlemek üzere Amazon CloudWatch'u kullanın.
Grupları ölçeklendirme. Amazon Basit Bildirim Hizmetini başlatmak için CloudWatch alarmını yapılandırma
(Amazon SNS) konusunu talep üzerine ek Otomatik Ölçeklendirme grupları oluşturmak için kullanabilirsiniz.

C. İki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın. Şunun için bir SQS kuyruğu kullanın:
sipariş toplama. Siparişin karşılanması için ikinci SQS kuyruğunu kullanın. EC2 örneklerini şu şekilde yapılandırın:
ilgili kuyruklarını yoklayın. Kuyrukların gönderdiği bildirimlere göre Otomatik Ölçeklendirme gruplarını ölçeklendirin
gönder.

D. İki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın. Şunun için bir SQS kuyruğu kullanın:
sipariş toplama. Siparişin karşılanması için ikinci SQS kuyruğunu kullanın. EC2 örneklerini şu şekilde yapılandırın:
ilgili kuyruklarını yoklayın. Otomatik Ölçeklendirme gruplarını mesaj sayısına göre ölçeklendirin
her kuyruk.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın. Sipariş toplama için bir SQS kuyruğu kullanın. Siparişin karşılanması için ikinci SQS kuyruğunu kullanın. EC2 bulut sunucularını ilgili kuyrukları yoklayacak şekilde yapılandırın. Otomatik Ölçeklendirme gruplarını her kuyruktaki ileti sayısına göre ölçeklendirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 1002
Çevrimiçi bir oyun şirketi, kullanıcı veri depolama alanını destek amacıyla Amazon DynamoDB'ye geçiriyor
Şirketin büyüyen kullanıcı tabanı. Mevcut mimari, DynamoDB tablolarını içerir.
kullanıcı profillerini, başarıları ve oyun içi işlemleri içerir.
Şirketin sağlam, sürekli kullanılabilir ve dayanıklı bir DynamoDB tasarlaması gerekiyor
Kullanıcılar için kusursuz bir oyun deneyimi sağlamak için mimari.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Tek bir AWS Bölgesinde DynamoDB tabloları oluşturun. İsteğe bağlı kapasite modunu kullanın. Genel kullan
birden fazla Bölgede verileri çoğaltmak için tablolar.

B. Sık erişilen verileri önbelleğe almak için DynamoDB Accelerator'ı (DAX) kullanın. Tabloları bir ortamda dağıtın
tek bir AWS Bölgesi oluşturun ve otomatik ölçeklendirmeyi etkinleştirin. Bölgeler Arası Çoğaltmayı manuel olarak yapılandırmak
ek Bölgeler.

C. Birden fazla AWS Bölgesinde DynamoDB tabloları oluşturun. İsteğe bağlı kapasite modunu kullanın. Kullanım
Bölgeler arasında Bölgeler Arası Çoğaltma için DynamoDB Akışları.

D. Otomatik çoklu Bölge çoğaltması için DynamoDB global tablolarını kullanın. Tabloları birden çok şekilde dağıtın
AWS Bölgeleri. Sağlanan kapasite modunu kullanın. Otomatik ölçeklendirmeyi etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Otomatik çoklu Bölge çoğaltması için DynamoDB global tablolarını kullanın. Tabloları birden fazla AWS Bölgesine dağıtın. Sağlanan kapasite modunu kullanın. Otomatik ölçeklendirmeyi etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 1003
Bir şirket, medya işleme uygulamasını kendi tesislerinde çalıştırıyor. Şirket azaltmak istiyor
depolama maliyetlerini düşürdü ve tüm verileri Amazon S3'e taşıdı. Şirket içi işleme uygulaması
depolamaya düşük gecikmeli erişime ihtiyaç duyar.
Şirketin uygulama için bir depolama çözümü tasarlaması gerekiyor. Depolama çözümü
İstenilen uygulama performansını koruyun.
Hangi depolama çözümü bu gereksinimleri EN uygun maliyetli şekilde karşılayacak?

A. Şirket içi Amazon S3'teki verilere erişmek için Mountpoint for Amazon S3'ü kullanın
uygulama.

B. Şirket içi uygulamaya depolama sağlamak için bir Amazon S3 Dosya Ağ Geçidi yapılandırın.

C. Verileri Amazon S3'ten Windows Dosya Sunucusu için Amazon FSx'e kopyalayın. Amazon'u yapılandırın
Şirket içi uygulama için depolama sağlamak için FSx Dosya Ağ Geçidi.

D. Şirket içi bir dosya sunucusu yapılandırın. S3 depolama alanına bağlanmak için Amazon S3 API'sini kullanın.
Uygulamayı şirket içi dosya sunucusundan depolama alanına erişecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirket içi uygulamaya depolama sağlamak için bir Amazon S3 Dosya Ağ Geçidi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 1004
Bir şirket, kurumsal kaynak planlama (ERP) sistemini ABD-Doğu-1 Bölgesi'nde barındırıyor.
sistem Amazon EC2 bulut sunucularında çalışır. Müşteriler EC2'de barındırılan genel bir API kullanır
ERP sistemi ile bilgi alışverişi için örnekler. Uluslararası müşteriler API'nin yavaş olduğunu bildiriyor
veri merkezlerinden yanıt süreleri.
Hangi çözüm uluslararası müşterilerin yanıt sürelerini EN ÇOK iyileştirecek?
uygun maliyetli mi?

A. Genel bir sanal arayüze (VIF) sahip bir AWS Direct Connect bağlantısı oluşturun.
her müşterinin veri merkezinden us-east-1'e bağlantı. Müşteri API isteklerini kullanarak yönlendirin
ERP sistemi API'sine bir Direct Connect ağ geçidi.

B. API'nin önünde bir Amazon CloudFront dağıtımı kurun. CachingOptimized'i yapılandırma
Gelişmiş önbellek verimliliği sağlamak için yönetilen önbellek ilkesi.

C. AWS Global Accelerator'ı kurun. Gerekli bağlantı noktaları için dinleyicileri yapılandırın. Uç noktayı yapılandır
Trafiği dağıtmak için uygun Bölgelere yönelik gruplar. API için grupta bir uç nokta oluşturun.

D. Bölgeler ve müşteri arasında özel VPN tünelleri oluşturmak için AWS Siteden Siteye VPN'i kullanın
ağlar. Trafiği VPN bağlantıları üzerinden API'ye yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Global Accelerator'ı kurun. Gerekli bağlantı noktaları için dinleyicileri yapılandırın. Trafiği dağıtmak amacıyla uygun Bölgeler için uç nokta gruplarını yapılandırın. API için grupta bir uç nokta oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 1005
Bir şirket, web sitesinde barındırdığı anketleri kullanarak müşteri memnuniyetini takip eder.
Anketler bazen her saat başı binlerce müşteriye ulaşıyor. Anket sonuçları şu anda
Şirket çalışanlarının sonuçları manuel olarak inceleyebilmesi için şirkete e-posta mesajları gönderilir ve
Müşteri duyarlılığını değerlendirin.
Şirket müşteri anketi sürecini otomatikleştirmek istiyor. Anket sonuçları mevcut olmalıdır
önceki 12 ay için.
Hangi çözüm bu gereksinimleri EN ölçeklenebilir şekilde karşılayacak?

A. Anket sonuçları verilerini, bir Amazon API Gateway uç noktasına bağlı bir Amazon API Gateway uç noktasına gönderin.
Amazon Simple Queue Service (Amazon SQS) kuyruğu. Anket yapmak için bir AWS Lambda işlevi oluşturun
SQS kuyruğuna girin, duyarlılık analizi için Amazon Comprehend'i arayın ve sonuçları bir
Amazon DynamoDB tablosu. Tüm kayıtlar için TTL'yi gelecekte 365 güne ayarlayın.

B. Anket sonuçları verilerini Amazon EC2 örneğinde çalışan bir API'ye gönderin. Yapılandır
Anket sonuçlarını bir Amazon DynamoDB tablosunda yeni bir kayıt olarak depolamak için API, Amazon'u arayın
Duygu analizini anlayın ve sonuçları ikinci bir DynamoDB tablosuna kaydedin. Ayarla
Gelecekteki 365 güne kadar tüm kayıtlar için TTL.

C. Anket sonuçları verilerini bir Amazon S3 klasörüne yazın. Bir çağrıyı başlatmak için S3 Olay Bildirimlerini kullanın.
Verileri okumak ve duyarlılık analizi için Amazon Rekognition'ı çağırmak için AWS Lambda işlevi. Mağaza
duyarlılık analizi ikinci bir S3 grubuyla sonuçlanır. Her grupta S3 yaşam döngüsü ilkelerini kullanarak
Nesnelerin geçerliliği 365 gün sonra sona erer.

D. Anket sonuçları verilerini bir Amazon API Gateway uç noktasına bağlı bir Amazon API Gateway uç noktasına gönderin.
Amazon Simple Queue Service (Amazon SQS) kuyruğu. Bir çağrıyı çağırmak için SQS kuyruğunu yapılandırın
Duyarlılık analizi için Amazon Lex'i çağıran ve sonuçları bir dosyaya kaydeden AWS Lambda işlevi
Amazon DynamoDB tablosu. Tüm kayıtlar için TTL'yi gelecekte 365 güne ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Anket sonuçları verilerini bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna bağlı bir Amazon API Gateway uç noktasına gönderin. SQS kuyruğunu yoklamak için bir AWS Lambda işlevi oluşturun, duyarlılık analizi için Amazon Comprehend'i çağırın ve sonuçları bir Amazon DynamoDB tablosuna kaydedin. Tüm kayıtlar için TTL'yi gelecekte 365 güne ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 1006
Bir şirket, Amazon EC2'nin rutin yönetimi ve yama uygulaması için AWS Systems Manager'ı kullanıyor
örnekler. EC2 bulut sunucuları, Uygulama Yükünün arkasındaki IP adresi türü hedef grubundadır
Dengeleyici (ALB).
Yeni güvenlik protokolleri, şirketin EC2 bulut sunucularını belirli bir süre boyunca hizmetten kaldırmasını gerektiriyor.
yama. Şirket bir sonraki yama sırasında güvenlik protokolünü izlemeye çalıştığında,
şirket yama penceresi sırasında hatalar alıyor.
Hangi çözüm kombinasyonu hataları çözecektir? (İki tane seçin.)

A. Hedef grubun hedef türünü IP adresi türünden örnek türüne değiştirin.

B. Zaten mevcut olduğundan, mevcut Sistem Yöneticisi belgesini değişiklik yapmadan kullanmaya devam edin.
Bir ALB'nin arkasındaki IP adresi türü hedef grubundaki örnekleri işlemek için optimize edilmiştir.

C. AWSEC2-PatchLoadBalanacerInstance Sistem Yöneticisi Otomasyonunu Uygulama
yama işlemini yönetmek için belge.

D. Örnekleri otomatik olarak kaldırmak için Systems Manager Maintenance Windows'u kullanın.
örnekleri yamama hizmeti.

E. Örnekleri hizmetten kaldırmak ve yönetmek için Systems Manager State Manager'ı yapılandırın
yama programı. Trafiği yeniden yönlendirmek için ALB durum kontrollerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** Yama işlemini yönetmek için AWSEC2-PatchLoadBalanacerInstance Systems Manager Automation belgesini uygulayın. Örneklere yama uygulamak üzere örnekleri hizmetten otomatik olarak kaldırmak için Sistem Yöneticisi Bakım Windows'unu kullanın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 1007
Bir tıbbi şirket, büyük miktarda klinik araştırma verisi üzerinde dönüşümler gerçekleştirmek istiyor.
birkaç müşteriden geliyor. Şirketin verileri ilişkisel bir veritabanından alması gerekir
Müşteri verilerini içerir. Daha sonra şirket bir dizi yöntem kullanarak verileri dönüştürecek
karmaşık kurallar. Şirket, dönüşümler tamamlandığında verileri Amazon S3'e yükleyecek
tamamlandı.
Şirket verileri Amazon'da saklamadan önce tüm veriler işlendiği yerde şifrelenmelidir
S3. Tüm veriler müşteriye özel anahtarlar kullanılarak şifrelenmelidir.
Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel çabayla karşılayacak?

A. Her müşteri için bir AWS Glue işi oluşturun. Her işe bir güvenlik yapılandırması ekleyin.
verileri şifrelemek için Amazon S3 yönetilen anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemesini kullanır.

B. Her müşteri için bir Amazon EMR kümesi oluşturun. Her birine bir güvenlik yapılandırması ekleyin
şifrelemek için özel bir istemci tarafı kök anahtarıyla (CSE-Özel) istemci tarafı şifrelemesini kullanan küme
veriler.

C. Her müşteri için bir AWS Glue işi oluşturun. Her işe bir güvenlik yapılandırması ekleyin.
verileri şifrelemek için AWS KMS yönetilen anahtarlarıyla (CSE-KMS) istemci tarafı şifrelemeyi kullanır.

D. Her müşteri için bir Amazon EMR kümesi oluşturun. Her birine bir güvenlik yapılandırması ekleyin
Verileri şifrelemek için AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanan küme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her müşteri için bir AWS Glue işi oluşturun. Verileri şifrelemek için her işe AWS KMS yönetilen anahtarlarıyla (CSE-KMS) istemci tarafı şifreleme kullanan bir güvenlik yapılandırması ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 1008
Bir şirket, tek bir Amazon EC2 İsteğe Bağlı Bulut Sunucusunda bir web sitesi analitiği uygulaması barındırıyor.
Analitik uygulaması son derece dayanıklıdır ve durum bilgisi olmayan modda çalışacak şekilde tasarlanmıştır.
Şirket, uygulamanın şu sıralar performans düşüşü belirtileri gösterdiğini fark eder:
yoğun zamanlar ve 5xx hataları sunuyor. Şirketin uygulama ölçeğini yapması gerekiyor
Sorunsuz bir şekilde.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Web uygulamasının bir Amazon Machine Image'ını (AMI) oluşturun. Bir başlatmak için AMI'yi kullanın.
ikinci EC2 İsteğe Bağlı Bulut Sunucusu. Yükü dağıtmak için bir Application Load Balancer kullanın.
iki EC2 örneği.

B. Web uygulamasının bir Amazon Machine Image'ını (AMI) oluşturun. Bir başlatmak için AMI'yi kullanın.
ikinci EC2 İsteğe Bağlı Bulut Sunucusu. Yükü dağıtmak için Amazon Route 53 ağırlıklı yönlendirmeyi kullanın
iki EC2 örneğinde.

C. EC2 bulut sunucusunu durdurmak ve bulut sunucusu türünü değiştirmek için bir AWS Lambda işlevi oluşturun.
CPU kullanımı daha fazla olduğunda Lambda işlevini çağırmak için bir Amazon CloudWatch alarmı oluşturun
%75'ten fazla.

D. Web uygulamasının bir Amazon Machine Image'ını (AMI) oluşturun. AMI'yi lansmana uygulama
şablon. Başlatma şablonunu içeren bir Otomatik Ölçeklendirme grubu oluşturun. Başlatmayı yapılandır
Spot Filosunu kullanmak için şablon. Otomatik Ölçeklendirme grubuna bir Application Load Balancer ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Web uygulamasının bir Amazon Machine Image'ını (AMI) oluşturun. AMI'yi bir başlatma şablonuna uygulayın. Başlatma şablonunu içeren bir Otomatik Ölçeklendirme grubu oluşturun. Lansman şablonunu Spot Filo kullanacak şekilde yapılandırın. Otomatik Ölçeklendirme grubuna bir Application Load Balancer ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 1009
Bir şirket, verilerin bir Amazon S3 klasöründe depolandığı bir ortam işletiyor. Nesneler
gün içerisinde sıklıkla erişilmektedir. Şirketin sıkı veri şifreleme gereksinimleri var
S3 klasöründe depolanan veriler için. Şirket şu anda AWS Key Management kullanıyor
Şifreleme hizmeti (AWS KMS).
Şirket, S3 nesnelerinin şifrelenmesiyle ilgili maliyetleri,
AWS KMS'ye ek çağrılar.
Bu gereksinimleri hangi çözüm karşılayacak?

C. Amazon S3 yönetilen anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın.

B. Yeni sunucuda AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemesi için bir S3 Bucket Key kullanın.
nesneler.

C. AWS KMS müşteri tarafından yönetilen anahtarlarla istemci tarafı şifrelemeyi kullanın.

D. AWS KMS'de depolanan, müşteri tarafından sağlanan anahtarlarla (SSE-C) sunucu tarafı şifrelemeyi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yeni nesnelerde AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemek için bir S3 Bucket Key kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 1010
Bir şirket, şirket içi veri merkezindeki sanal makinelerde (VM'ler) birden fazla iş yükü çalıştırır.
Şirket hızla genişliyor. Şirket içi veri merkezi yeterince hızlı ölçeklenemiyor
iş ihtiyaçlarını karşılamak için. Şirket iş yüklerini AWS'ye taşımak istiyor.
Geçiş zamana duyarlıdır. Şirket, kritik olmayan işler için kaldır ve kaydır stratejisini kullanmak istiyor
iş yükleri.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (Üç tanesini seçin.)

A. VM'ler hakkında veri toplamak için AWS Schema Conversion Tool'u (AWS SCT) kullanın.

B. AWS Uygulama Geçiş Hizmetini kullanın. AWS Replication Agent'ı VM'lere yükleyin.

C. VM'lerin ilk çoğaltmasını tamamlayın. Kabul testlerini gerçekleştirmek için test örneklerini başlatın
VM'lerde.

D. VM'lerdeki tüm işlemleri durdurun. Bir geçiş örneği başlatın.

E. VM'ler hakkında veri toplamak için AWS App2Container'ı (A2C) kullanın.

F. VM'leri taşımak için AWS Database Migration Service'i (AWS DMS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C, D`
> - **Önerilen Çözüm:** AWS Uygulama Geçiş Hizmetini kullanın. AWS Replication Agent'ı VM'lere yükleyin. VM'lerin ilk çoğaltmasını tamamlayın. VM'lerde kabul testleri gerçekleştirmek için test örneklerini başlatın. VM'lerdeki tüm işlemleri durdurun. Bir geçiş örneği başlatın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 1011
Bir şirket, bir uygulamayı özel bir alt ağda barındırır. Şirket zaten entegre etti
Amazon Cognito ile uygulama. Şirket, Amazon Cognito kullanıcı havuzunu kullanarak
kullanıcıların kimliğini doğrulayın.
Uygulamanın kullanıcıyı güvenli bir şekilde depolayabilmesi için şirketin uygulamayı değiştirmesi gerekiyor
Amazon S3 klasöründeki belgeler.
Hangi adım kombinasyonu Amazon S3'ü uygulamayla güvenli bir şekilde entegre edecektir? (Seç
iki.)

A. Güvenli Amazon S3 erişim belirteçleri oluşturmak için bir Amazon Cognito kimlik havuzu oluşturun.
Kullanıcılar başarıyla oturum açtıklarında.

B. Kullanıcılar için Amazon S3 erişim belirteçleri oluşturmak amacıyla mevcut Amazon Cognito kullanıcı havuzunu kullanın
Başarılı bir şekilde oturum açtıklarında.

C. Şirketin barındırdığı VPC'de bir Amazon S3 VPC uç noktası oluşturun.
uygulama.

D. Şirketin uygulamayı barındırdığı VPC'de bir NAT ağ geçidi oluşturun. Şuna bir politika atayın:
Amazon Cognito'dan başlatılmayan herhangi bir isteği reddetmek için S3 klasörü.

E. S3 klasörüne yalnızca kullanıcıların IP adreslerinden erişime izin veren bir politika ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Başarılı bir şekilde oturum açan kullanıcılar için güvenli Amazon S3 erişim belirteçleri oluşturmak üzere bir Amazon Cognito kimlik havuzu oluşturun. Şirketin uygulamayı barındırdığı VPC'de bir Amazon S3 VPC uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 1012
Bir şirketin müşterilerden gelen siparişleri işleyen üç katmanlı bir web uygulaması vardır. Web katmanı
Application Load Balancer'ın arkasındaki Amazon EC2 bulut sunucularından oluşur. İşleme katmanı
EC2 bulut sunucularından oluşur. Şirket, web katmanını ve işlem katmanını şu şekilde ayırdı:
Amazon Basit Kuyruk Hizmeti (Amazon SQS). Depolama katmanı Amazon DynamoDB'yi kullanır.
Yoğun zamanlarda, bazı kullanıcılar sipariş işlemede gecikmeler ve beklemeler olduğunu bildiriyor. Şirket fark etti
bu gecikmeler sırasında EC2 bulut sunucularının %100 CPU kullanımında çalıştığını ve SQS'nin
sıra doluyor. Yoğun zamanlar değişkendir ve tahmin edilemez.
Şirketin uygulamanın performansını iyileştirmesi gerekiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İşleme katmanı bulut sunucularının ölçeğini genişletmek için Amazon EC2 Auto Scaling için planlanmış ölçeklendirmeyi kullanın
yoğun kullanım süreleri boyunca. Ne zaman ölçekleneceğini belirlemek için CPU Kullanımı ölçümünü kullanın.

B. Amazon ElastiCache for Redis'i DynamoDB arka uç katmanının önünde kullanın. Hedefi kullan
ne zaman ölçekleneceğini belirlemek için bir ölçüm olarak kullanım.

C. Web katmanına yönelik yanıtları önbelleğe almak için bir Amazon CloudFront dağıtımı ekleyin. HTTP'yi kullan
Ne zaman ölçekleneceğini belirlemek için bir ölçüm olarak gecikme.

D. İşleme katmanının ölçeğini genişletmek için Amazon EC2 Auto Scaling hedef izleme politikasını kullanın
örnekler. Ne zaman ölçekleneceğini belirlemek için ApproximateNumberOfMessages özniteliğini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İşleme katmanı bulut sunucularının ölçeğini genişletmek için Amazon EC2 Auto Scaling hedef izleme politikasını kullanın. Ne zaman ölçekleneceğini belirlemek için ApproximateNumberOfMessages özniteliğini kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 1013
Bir şirketin üretim ortamı, çalıştırılan Amazon EC2 İsteğe Bağlı Bulut Sunucularından oluşur
Pazartesi ve Cumartesi günleri arasında sürekli olarak. Örnekler Pazar günü yalnızca 12 saat çalışmalıdır
ve kesintilere tahammül edemez. Şirket üretimi maliyet açısından optimize etmek istiyor
çevre.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Yalnızca 12 saat boyunca çalışan EC2 bulut sunucuları için Planlanmış Rezerve Edilmiş Bulut Sunucularını satın alın
Pazar. Sürekli çalışan EC2 bulut sunucuları için Standart Rezerve Bulut Sunucuları satın alın
pazartesi ve cumartesi arası.

B. Yalnızca 12 saat boyunca çalışan EC2 bulut sunucuları için Dönüştürülebilir Rezerve Edilmiş Bulut Sunucuları satın alın
Pazar. Sürekli çalışan EC2 bulut sunucuları için Standart Rezerve Bulut Sunucuları satın alın
pazartesi ve cumartesi arası.

C. Pazar günü yalnızca 12 saat çalışan EC2 bulut sunucuları için Spot Bulut Sunucularını kullanın. Satın alma
Pazartesi ile Pazartesi arasında sürekli olarak çalışan EC2 bulut sunucuları için Standart Rezerve Edilmiş Bulut Sunucuları
Cumartesi.

D. Pazar günü yalnızca 12 saat çalışan EC2 bulut sunucuları için Spot Bulut Sunucularını kullanın. Satın alma
Pazartesi ile Pazartesi arasında sürekli olarak çalışan EC2 bulut sunucuları için Dönüştürülebilir Rezerve Bulut Sunucuları
Cumartesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Pazar günü yalnızca 12 saat çalışan EC2 bulut sunucuları için Planlanmış Rezerve Bulut Sunucuları satın alın. Pazartesi ile Cumartesi günleri arasında sürekli olarak çalışan EC2 bulut sunucuları için Standart Rezerve Bulut Sunucuları satın alın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 1014
Bir dijital görüntü işleme şirketi, şirket içi monolitik uygulamasını
AWS Bulutu. Şirket binlerce görüntüyü işliyor ve bunun bir parçası olarak büyük dosyalar oluşturuyor
işleme iş akışının.
Şirketin artan sayıdaki görüntü işleme işlerini yönetmek için bir çözüme ihtiyacı var.
Çözüm aynı zamanda görüntü işleme iş akışındaki manuel görevleri de azaltmalıdır. şirket
çözümün altında yatan altyapıyı yönetmek istemiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon EC2 Spot Bulut Sunucuları ile Amazon Elastic Container Service'i (Amazon ECS) kullanın:
görüntüleri işleyin. Amazon Simple Queue Service'i (Amazon SQS) düzenleyecek şekilde yapılandırın
iş akışı. İşlenen dosyaları Amazon Elastic File System'de (Amazon EFS) saklayın.

B. Görüntüleri işlemek için AWS Batch işlerini kullanın. Düzenlemek için AWS Step Functions'ı kullanın
iş akışı. İşlenen dosyaları bir Amazon S3 klasöründe saklayın.

C. Görüntüleri işlemek için AWS Lambda işlevlerini ve Amazon EC2 Spot Bulut Sunucularını kullanın. Sakla
Amazon FSx'te işlenmiş dosyalar.

D. Görüntüleri işlemek için bir grup Amazon EC2 bulut sunucusunu dağıtın. AWS Step Functions'ı kullanarak şunları yapın:
iş akışını düzenleyin. İşlenen dosyaları bir Amazon Elastic Block Store'da (Amazon
EBS) hacmi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Görüntüleri işlemek için AWS Batch işlerini kullanın. İş akışını düzenlemek için AWS Step Functions'ı kullanın. İşlenen dosyaları bir Amazon S3 klasöründe saklayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 1015
Bir şirketin resim barındıran web sitesi, dünyanın her yerindeki kullanıcılara yükleme, görüntüleme,
ve mobil cihazlarından görseller indirin. Şirket şu anda statik web sitesini barındırıyor
bir Amazon S3 kovasında.
Web sitesinin artan popülaritesi nedeniyle web sitesinin performansı düştü. Kullanıcılar
görselleri yüklerken ve indirirken gecikme sorunları yaşadıklarını bildirdiler.
Şirket web sitesinin performansını iyileştirmelidir.
EN AZ uygulama çabasıyla bu gereksinimleri hangi çözüm karşılayacak?

A. İndirmeyi iyileştirmek amacıyla S3 klasörü için bir Amazon CloudFront dağıtımı yapılandırın
performans. Yükleme performansını iyileştirmek için S3 Transfer Acceleration'ı etkinleştirin.

B. Birden fazla AWS Bölgesinde Amazon EC2 bulut sunucularını doğru boyutlarda yapılandırın. Taşı
EC2 örneklerine uygulama. Web sitesi trafiğini dağıtmak için Application Load Balancer kullanın
EC2 örnekleri arasında eşit olarak. AWS Global Accelerator'ı küresel talebi karşılayacak şekilde yapılandırın
düşük gecikme süresiyle.

C. Geliştirmek için S3 klasörünü başlangıç noktası olarak kullanan bir Amazon CloudFront dağıtımı yapılandırın
indirme performansı. Uygulamayı, görüntüleri yüklemek için CloudFront'u kullanacak şekilde yapılandırın
yükleme performansını iyileştirin. Birden fazla AWS Bölgesinde S3 klasörleri oluşturun. Yapılandır
Kullanıcıların konumunu temel alarak kullanıcıların verilerini çoğaltmak için paketlere yönelik çoğaltma kuralları. Yönlendir
her kullanıcının konumuna en yakın olan S3 klasörüne indirilir.

D. Ağ performansını iyileştirmek amacıyla S3 klasörü için AWS Global Accelerator'ı yapılandırın. Oluştur
uygulamanın S3 klasörü yerine Global Accelerator'ı kullanabileceği bir uç nokta.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İndirme performansını artırmak amacıyla S3 klasörü için bir Amazon CloudFront dağıtımı yapılandırın. Yükleme performansını iyileştirmek için S3 Transfer Acceleration'ı etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 1016
Bir şirket, bir uygulamayı Application Load Balancer'ın (ALB) arkasındaki özel bir alt ağda çalıştırır.
bir VPC. VPC'de bir NAT ağ geçidi ve bir internet ağ geçidi bulunur. Uygulama Amazon'u çağırıyor
Nesneleri depolamak için S3 API'si.
Şirketin güvenlik politikasına göre uygulamadan gelen trafik,
internet.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Bir S3 arayüzü uç noktası yapılandırın. Giden trafiğe izin veren bir güvenlik grubu oluşturun
Amazon S3.

B. Bir S3 ağ geçidi uç noktası yapılandırın. Uç noktayı kullanmak için VPC rota tablosunu güncelleyin.

C. Atanan Esnek IP adresinden gelen trafiğe izin vermek için bir S3 grup politikası yapılandırın.
NAT ağ geçidi.

D. Eski uygulamanın dağıtıldığı aynı alt ağda ikinci bir NAT ağ geçidi oluşturun.
İkinci NAT ağ geçidini kullanmak için VPC rota tablosunu güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir S3 ağ geçidi uç noktası yapılandırın. Uç noktayı kullanmak için VPC rota tablosunu güncelleyin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 1017
Bir şirketin Amazon Elastic Kubernetes Service (Amazon) üzerinde çalışan bir uygulaması var
EKS) Amazon EC2 bulut sunucularında kümelenir. Uygulamanın Amazon DynamoDB'yi kullanan bir kullanıcı arayüzü var
ve uygulama dağıtımının bir parçası olarak Amazon S3'ü kullanan veri hizmetleri.
Şirket, kullanıcı arayüzüne yönelik EKS Pod'larının yalnızca Amazon DynamoDB'ye erişebildiğinden emin olmalıdır
ve veri hizmetlerine yönelik EKS Pod'ların yalnızca Amazon S3'e erişebildiğini. Şirket kullanıyor
AWS Kimlik ve Erişim Yönetimi (IAM).
Bu gereksinimleri hangi çözüm karşılıyor?

A. Gerekli bilgilerle Amazon S3 ve DynamoDB erişimi için ayrı IAM politikaları oluşturun
izinler. Her iki IAM politikasını da EC2 örnek profiline ekleyin. Rol tabanlı erişim kontrolünü kullanın
(RBAC), ilgili EKS Pod'ları için Amazon S3 veya DynamoDB'ye erişimi kontrol etmek için.

B. Amazon S3 ve DynamoDB erişimi için gerekli olan ayrı IAM politikaları oluşturun
izinler. Veri hizmetleri için Amazon S3 IAM politikasını doğrudan EKS Kapsüllerine ekleyin ve
DynamoDB politikasını kullanıcı arayüzü için EKS Pod'larına aktarın.

C. Bir IAM üstlenmek üzere kullanıcı arayüzü ve veri hizmetleri için ayrı Kubernetes hizmet hesapları oluşturun
rol. AmazonS3FullAccess politikasını veri hizmetleri hesabına ekleyin ve
Kullanıcı arayüzü hizmet hesabına AmazonDynamoDBFullAccess politikası.

D. Bir IAM üstlenmek üzere kullanıcı arayüzü ve veri hizmetleri için ayrı Kubernetes hizmet hesapları oluşturun
rol. Kullanıcı arayüzünün EKS Pod'larına erişim sağlamak amacıyla Hizmet Hesapları için IAM Rolünü (IRSA) kullanın.
DynamoDB'ye veri hizmetleri için Amazon S3 ve EKS Pod'ları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir IAM rolünü üstlenmek üzere kullanıcı arayüzü ve veri hizmetleri için ayrı Kubernetes hizmet hesapları oluşturun. AmazonS3FullAccess ilkesini veri hizmetleri hesabına ve AmazonDynamoDBFullAccess ilkesini UI hizmet hesabına ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 1018
Bir şirketin küresel olarak dağıtılmış bir geliştirme ekibine güvenli erişim sağlaması gerekir.
Şirketin AWS kaynaklarını güvenlik politikalarına uygun olacak şekilde kullanın.
Şirket şu anda dahili kimlik doğrulama için şirket içi bir Active Directory kullanıyor.
şirket, birden fazla desteği destekleyen birden fazla AWS hesabını yönetmek için AWS Organizasyonlarını kullanıyor
projeler.
Şirketin merkezileştirilmiş hizmet sağlamak için mevcut altyapıyla entegre olacak bir çözüme ihtiyacı var
kimlik yönetimi ve erişim kontrolü.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS'de AWS tarafından yönetilen bir Microsoft Active Directory oluşturmak için AWS Directory Service'i kurun.
Şirket içi Active Directory ile bir güven ilişkisi kurun. Şu IAM rotalarını kullanın:
Şirketin AWS'sindeki AWS kaynaklarına erişmek için Active Directory gruplarına atanır
hesaplar.

B. Her geliştirici için bir IAM kullanıcısı oluşturun. Her IAM kullanıcısı için izinleri manuel olarak yönetin
her kullanıcının her projeye katılımına dayalıdır. Çok faktörlü kimlik doğrulamayı (MFA) şu şekilde zorunlu kılın:
ek bir güvenlik katmanı.

C. Şirket içi Active Directory'ye bağlanmak için AWS Directory Service'teki AD Connector'ı kullanın.
AD Connector'ı AWS IAM Identity Center ile entegre edin. Her birine vermek için izin kümelerini yapılandırın
Belirli AWS hesaplarına ve kaynaklarına AD grubu erişimi.

D. Bir kimlik birleştirme çözümünü dağıtmak için Amazon Cognito'yu kullanın. Kimlik federasyonunu entegre edin
şirket içi Active Directory ile çözüm. Erişim belirteçleri sağlamak için Amazon Cognito'yu kullanın.
geliştiricilerin AWS hesaplarına ve kaynaklarına erişmesini sağlar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Şirket içi Active Directory'ye bağlanmak için AWS Directory Service'teki AD Connector'ı kullanın. AD Connector'ı AWS IAM Identity Center ile entegre edin. Her AD grubuna belirli AWS hesaplarına ve kaynaklarına erişim vermek için izin kümelerini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 1019
Bir şirket AWS Cloud'da bir uygulama geliştiriyor. Uygulamanın HTTP API'si şunları içerir:
Amazon API Gateway'de yayınlanan kritik bilgiler. Kritik bilgiler şu şekilde olmalıdır:
yalnızca şirketin dahili IP adreslerine ait sınırlı sayıda güvenilir IP adresinden erişilebilir
ağ.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Önceden tanımlanmış bir IP kümesine erişimi kısıtlamak için bir API Ağ Geçidi özel entegrasyonu ayarlayın
adresler.

B. Özel olarak belirtilmeyen herhangi bir IP adresine erişimi reddeden API için bir kaynak politikası oluşturun.
izin verildi.

C. API'yi doğrudan özel bir alt ağa dağıtın. Bir ağ ACL'si oluşturun. İzin vermek için kurallar belirleyin
belirli IP adreslerinden gelen trafik.

D. Yalnızca API Gateway'den gelen trafiğe izin vermek için API Ağ Geçidine bağlı güvenlik grubunu değiştirin.
güvenilir IP adresleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B


A`
> - **Önerilen Çözüm:** API için, özel olarak izin verilmeyen herhangi bir IP adresine erişimi reddeden bir kaynak ilkesi oluşturun. Önceden tanımlanmış bir IP adresi kümesine erişimi kısıtlamak için bir API Ağ Geçidi özel entegrasyonu ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.
