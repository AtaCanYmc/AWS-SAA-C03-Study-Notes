# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 02

> **Soru Aralığı:** 101 - 200 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #100

Bir şirketin kapsayıcıya alınmış uygulaması bir Amazon EC2 bulut sunucusunda çalışır. Uygulamanın ihtiyaçları
diğer iş uygulamalarıyla iletişim kurabilmeden önce güvenlik sertifikalarını indirmek için.
şirket, sertifikaları neredeyse gerçek zamanlı olarak şifrelemek ve şifrelerini çözmek için yüksek düzeyde güvenli bir çözüm istiyor.
Çözümün ayrıca veriler şifrelendikten sonra verileri yüksek kullanılabilirliğe sahip bir depolama alanında depolaması da gerekiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Şifrelenmiş sertifikalar için AWS Secrets Manager gizli dizileri oluşturun. Manuel olarak güncelleyin
gerektiği gibi sertifikalar. Ayrıntılı IAM erişimini kullanarak verilere erişimi kontrol edin.

B. Almak ve göndermek için Python şifreleme kitaplığını kullanan bir AWS Lambda işlevi oluşturun.
şifreleme işlemlerini gerçekleştirin. İşlevi bir Amazon S3 klasöründe saklayın.

C. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. EC2'ye izin ver
Şifreleme işlemleri için KMS anahtarını kullanma rolü. Şifrelenmiş verileri Amazon S3'te saklayın.

D. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. EC2'ye izin ver
Şifreleme işlemleri için KMS anahtarını kullanma rolü. Şifrelenmiş verileri Amazon Elastic'te saklayın
Blok Mağazası (Amazon EBS) birimleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. EC2 rolünün şifreleme işlemleri için KMS anahtarını kullanmasına izin verin. Şifrelenmiş verileri Amazon S3'te saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 101
Bir çözüm mimarı genel ve özel alt ağlara sahip bir VPC tasarlıyor. VPC ve alt ağlar
IPv4 CIDR bloklarını kullanın. Üçünün her birinde bir genel alt ağ ve bir özel alt ağ vardır.
Yüksek kullanılabilirlik için Erişilebilirlik Alanları (AZ'ler). İnternet sağlamak için bir internet ağ geçidi kullanılır
genel alt ağlara erişim. Özel alt ağların izin verebilmesi için internete erişim gerekir.
Yazılım güncellemelerini indirmek için Amazon EC2 bulut sunucuları.
Özel alt ağlara İnternet erişimini sağlamak için çözüm mimarı ne yapmalıdır?

A. Her AZ'deki her genel alt ağ için bir tane olmak üzere üç NAT ağ geçidi oluşturun. Özel bir rota tablosu oluşturun
VPC olmayan trafiği AZ'sindeki NAT ağ geçidine ileten her AZ için.

B. Her AZ'deki her özel alt ağ için bir tane olmak üzere üç NAT örneği oluşturun. Özel bir rota oluşturun
VPC olmayan trafiği AZ'sindeki NAT örneğine ileten her AZ'ye ilişkin tablo.

C. Özel alt ağlardan birinde ikinci bir internet ağ geçidi oluşturun. için rota tablosunu güncelleyin.
VPC olmayan trafiği özel internet ağ geçidine ileten özel alt ağlar.

D. Genel alt ağlardan birinde yalnızca çıkışa yönelik bir internet ağ geçidi oluşturun. için rota tablosunu güncelleyin
VPC olmayan trafiği yalnızca çıkış İnternet ağ geçidine ileten özel alt ağlar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her AZ'deki her genel alt ağ için bir tane olmak üzere üç NAT ağ geçidi oluşturun. VPC olmayan trafiği AZ'sindeki NAT ağ geçidine ileten her AZ için özel bir rota tablosu oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 102
Bir şirket şirket içi veri merkezini AWS'ye taşımak istiyor. Veri merkezi bir
Verilerini NFS tabanlı bir dosya sisteminde saklayan SFTP sunucusu. Sunucu 200 GB veri tutar
bunun aktarılması gerekiyor. Sunucunun, aşağıdakileri kullanan bir Amazon EC2 örneğinde barındırılması gerekir:
Amazon Elastic File System (Amazon EFS) dosya sistemi.
Bir çözüm mimarı bu görevi otomatikleştirmek için hangi adımların birleşimini uygulamalıdır? (Seç
iki.)

A. EC2 örneğini EFS dosya sistemiyle aynı Erişilebilirlik Alanında başlatın.

B. Şirket içi veri merkezine bir AWS DataSync aracısı yükleyin.

C. EC2 bulut sunucusunda ikincil bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun
veriler için.

D. Verileri EC2 örneğine göndermek için bir işletim sistemi kopyalama komutunu manuel olarak kullanın.

E. Şirket içi SFTP için uygun bir konum yapılandırması oluşturmak amacıyla AWS DataSync'i kullanın
sunucu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Şirket içi veri merkezine bir AWS DataSync aracısı yükleyin. Şirket içi SFTP sunucusu için uygun bir konum yapılandırması oluşturmak amacıyla AWS DataSync'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 103
Bir şirketin her gün çalışan bir AWS Glue çıkarma, dönüştürme ve yükleme (ETL) işi var
aynı zamanda. İş, Amazon S3 klasöründeki XML verilerini işler. Yeni veriler eklendi
her gün S3 kovası. Bir çözüm mimarı, AWS Glue'nun tüm verileri işlediğini fark ediyor
her çalıştırma sırasında.
AWS Glue'nun eski verileri yeniden işlemesini önlemek için çözüm mimarı ne yapmalıdır?

A. İş yer imlerini kullanmak için işi düzenleyin.

B. Veriler işlendikten sonra verileri silmek için işi düzenleyin.

C. NumberOfWorkers alanını 1'e ayarlayarak işi düzenleyin.

D. FindMatches makine öğrenimi (ML) dönüşümünü kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İş yer imlerini kullanmak için işi düzenleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 104
Bir çözüm mimarı, bir web sitesi için yüksek düzeyde kullanılabilir bir altyapı tasarlamalıdır. Web sitesi
Amazon EC2 bulut sunucularında çalışan Windows web sunucuları tarafından desteklenmektedir. Çözüm mimarı
kaynaklanan büyük ölçekli bir DDoS saldırısını azaltabilecek bir çözüm uygulamalıdır.
binlerce IP adresi. Web sitesi için kesinti kabul edilemez.
Web sitesini bu tür bir saldırıdan korumak için çözüm mimarının hangi eylemleri gerçekleştirmesi gerekir?
(İki tane seçin.)

A. DDoS saldırısını durdurmak için AWS Shield Advanced'i kullanın.

B. Saldırganları otomatik olarak engellemek için Amazon GuardDuty'yi yapılandırın.

C. Web sitesini hem statik hem de dinamik içerik için Amazon CloudFront'u kullanacak şekilde yapılandırın.

D. Saldırganın IP adreslerini VPC ağına otomatik olarak eklemek için AWS Lambda işlevini kullanın
ACL'ler.

E. EC2 Spot Bulut Sunucularını, belirlenmiş bir hedef izleme ölçeklendirme politikasıyla Otomatik Ölçeklendirme grubunda kullanın
%80'e kadar CPU kullanımı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** DDoS saldırısını durdurmak için AWS Shield Advanced'i kullanın. Web sitesini hem statik hem de dinamik içerik için Amazon CloudFront'u kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 105
Bir şirket yeni bir sunucusuz iş yükünü dağıtmaya hazırlanıyor. Bir çözüm mimarı şunları kullanmalıdır:
AWS Lambda'yı çalıştırmak için kullanılacak izinleri yapılandırmaya yönelik en az ayrıcalık ilkesi
işlevi. Bir Amazon EventBridge (Amazon CloudWatch Events) kuralı, işlevi çağıracaktır.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Eylem olarak lambda:InvokeFunction ve eylem olarak * olacak şekilde işleve bir yürütme rolü ekleyin.
müdür.

B. Eylem ve Hizmet olarak lambda:InvokeFunction ile işleve bir yürütme rolü ekleyin:
lambda.amazonaws.com müdür olarak.

C. Eylem ve Hizmet olarak lambda:* ile işleve kaynak tabanlı bir politika ekleyin:
events.amazonaws.com ana olarak.

D. Eylem olarak lambda:InvokeFunction ile işleve kaynak tabanlı bir politika ekleyin ve
Hizmet: asıl olarak events.amazonaws.com.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Eylem olarak lambda:InvokeFunction ve asıl olarak Service: events.amazonaws.com ile işleve kaynak tabanlı bir politika ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 106
Bir şirket gizli verileri Amazon S3'te saklamaya hazırlanıyor. Uyumluluk nedenleriyle,
veriler kullanımda değilken şifrelenmelidir. Denetleme amacıyla şifreleme anahtarı kullanımı günlüğe kaydedilmelidir.
Anahtarlar her yıl değiştirilmelidir.
Hangi çözüm bu gereksinimleri karşılıyor ve operasyonel açıdan EN verimli olanıdır?

A. Müşteri tarafından sağlanan anahtarlarla sunucu tarafı şifreleme (SSE-C)

B. Amazon S3 yönetilen anahtarlarıyla sunucu tarafı şifreleme (SSE-S3)

C. AWS KMS anahtarlarıyla (SSE-KMS) manuel döndürmeyle sunucu tarafı şifreleme

D. Otomatik rotasyona sahip AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifreleme

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Otomatik rotasyona sahip AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifreleme
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 107
Bir bisiklet paylaşım şirketi, bisikletlerinin konumunu takip etmek için çok katmanlı bir mimari geliştiriyor
Bisikletler yoğun çalışma saatlerinde. Şirket bu veri noktalarını mevcut sistemlerinde kullanmak istiyor
analitik platformu. Bir çözüm mimarı, en uygun çok katmanlı seçeneği belirlemelidir.
Bu mimariyi destekleyin. Veri noktalarına REST API'sinden erişilebilmelidir.
Konum verilerini depolamak ve almak için bu gereksinimleri hangi eylem karşılıyor?

A. Amazon Athena'yı Amazon S3 ile kullanın.

B. Amazon API Gateway'i AWS Lambda ile kullanın.

C. Amazon QuickSight'ı Amazon Redshift ile kullanın.

D. Amazon API Gateway'i Amazon Kinesis Data Analytics ile birlikte kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon API Gateway'i AWS Lambda ile kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 108
Bir şirketin, ilanlarını Amazon'daki bir veritabanında saklayan bir otomobil satış web sitesi var
RDS. Bir otomobil satıldığında listelemenin internet sitesinden kaldırılması ve verilerin
birden fazla hedef sisteme gönderilmelidir.
Bir çözüm mimarı hangi tasarımı önermelidir?

A. Amazon RDS'deki veritabanı şu şekilde güncellendiğinde tetiklenen bir AWS Lambda işlevi oluşturun:
bilgileri hedeflerin kullanacağı Amazon Simple Queue Service (Amazon SQS) kuyruğuna gönderin.
tüketin.

B. Amazon RDS'deki veritabanı şu şekilde güncellendiğinde tetiklenen bir AWS Lambda işlevi oluşturun:
bilgileri bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna gönderin.
tüketmeyi hedefliyor.

C. Bir RDS olay bildirimine abone olun ve bir Amazon Basit Kuyruk Hizmeti (Amazon
SQS) kuyruğu birden fazla Amazon Simple Notification Service (Amazon SNS) konusuna yayıldı.
Hedefleri güncellemek için AWS Lambda işlevlerini kullanın.

D. Bir RDS olay bildirimine abone olun ve bir Amazon Basit Bildirim Hizmeti gönderin
(Amazon SNS) konusu birden fazla Amazon Simple Queue Service'e (Amazon SQS) yayıldı
kuyruklar. Hedefleri güncellemek için AWS Lambda işlevlerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir RDS olay bildirimine abone olun ve birden fazla Amazon Simple Queue Service (Amazon SQS) kuyruğuna yayılan bir Amazon Simple Notification Service (Amazon SNS) konusu gönderin. Hedefleri güncellemek için AWS Lambda işlevlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 109
Bir şirketin verileri Amazon S3'te depolaması ve verilerin değiştirilmesini engellemesi gerekir.
Şirket, Amazon S3'e yüklenen yeni nesnelerin bir süre boyunca değiştirilemez kalmasını istiyor
Şirketin nesneleri değiştirmeye karar vermesine kadar geçen belirli olmayan süre. Yalnızca belirli kullanıcılar
şirketin AWS hesabındaki nesneleri silme yeteneğine sahip olabilir.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir S3 Glacier kasası oluşturun. Bir kez yaz, çok oku (WORM) kasa kilidi ilkesini uygulama
nesneler.

B. S3 Object Lock etkinleştirilmiş bir S3 klasörü oluşturun. Sürüm oluşturmayı etkinleştirin. Saklama süresini şu şekilde ayarlayın:
100 yıl. Yeni nesneler için S3 grubunun varsayılan saklama modu olarak yönetişim modunu kullanın.

C. Bir S3 klasörü oluşturun. Nesneleri değiştiren tüm S3 API olaylarını izlemek için AWS CloudTrail'i kullanın.
Bildirim üzerine, değiştirilen nesneleri şirketin sahip olduğu herhangi bir yedekleme sürümünden geri yükleyin.

D. S3 Object Lock etkinleştirilmiş bir S3 klasörü oluşturun. Sürüm oluşturmayı etkinleştirin. Yasal bir bekletme ekleyin
nesneler. gereken kullanıcıların IAM politikalarına s3:PutObjectLegalHold iznini ekleyin.
nesneleri silin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 Object Lock'un etkin olduğu bir S3 klasörü oluşturun. Sürüm oluşturmayı etkinleştirin. Nesnelere yasal bir muhafaza ekleyin. Nesneleri silmesi gereken kullanıcıların IAM politikalarına s3:PutObjectLegalHold iznini ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.

---

---

Soru 110
Bir sosyal medya şirketi, kullanıcıların web sitesine resim yüklemesine olanak tanır. Web sitesi çalışır durumda
Amazon EC2 bulut sunucuları. Yükleme istekleri sırasında web sitesi, görüntüleri standart bir boyuta yeniden boyutlandırır.
boyutlandırır ve yeniden boyutlandırılan görüntüleri Amazon S3'te saklar. Kullanıcılar yavaş yükleme istekleriyle karşılaşıyor
web sitesine.
Şirketin uygulama içindeki eşleşmeyi azaltması ve web sitesi performansını iyileştirmesi gerekiyor.
Bir çözüm mimarı, görüntü yüklemeleri için operasyonel açıdan en verimli süreci tasarlamalıdır.
Çözüm mimarı bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmelidir?
(İki tane seçin.)

A. Uygulamayı, görüntüleri S3 Glacier'a yükleyecek şekilde yapılandırın.

B. Web sunucusunu orijinal görüntüleri Amazon S3'e yükleyecek şekilde yapılandırın.

C. Uygulamayı, görüntüleri her kullanıcının tarayıcısından doğrudan Amazon S3'e yükleyecek şekilde yapılandırın
önceden imzalanmış bir URL'nin kullanılması yoluyla

D. Bir görüntü aktarıldığında AWS Lambda işlevini çağıracak şekilde S3 Olay Bildirimlerini yapılandırın.
yüklendi. Resmi yeniden boyutlandırmak için işlevi kullanın.

E. Bir AWS'yi çağıran bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun
Yüklenen görüntüleri yeniden boyutlandırmak için bir programa göre Lambda işlevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** Uygulamayı, önceden imzalanmış bir URL kullanarak görüntüleri her kullanıcının tarayıcısından doğrudan Amazon S3'e yükleyecek şekilde yapılandırın. Bir görüntü yüklendiğinde bir AWS Lambda işlevini çağıracak şekilde S3 Olay Bildirimlerini yapılandırın. Resmi yeniden boyutlandırmak için işlevi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 111
Bir şirket yakın zamanda bir mesaj işleme sistemini AWS'ye geçirdi. Sistem alır
mesajları bir Amazon EC2 örneğinde çalışan bir ActiveMQ kuyruğuna aktarın. Mesajlar:
Amazon EC2'de çalışan bir tüketici uygulaması tarafından işlenir. Tüketici uygulaması
mesajları işler ve sonuçları Amazon EC2 üzerinde çalışan bir MySQL veritabanına yazar.
şirket bu uygulamanın düşük operasyonel karmaşıklıkla yüksek düzeyde kullanılabilir olmasını istiyor.
Hangi mimari EN YÜKSEK kullanılabilirliği sunuyor?

A. Başka bir Erişilebilirlik Alanına ikinci bir ActiveMQ sunucusu ekleyin. Ek bir tüketici EC2 ekleyin
örneği başka bir Erişilebilirlik Alanında. MySQL veritabanını başka bir Erişilebilirlik Alanına çoğaltın.

B. Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. Ekle
başka bir Erişilebilirlik Alanında ek tüketici EC2 bulut sunucusu. MySQL veritabanını şuraya kopyalayın:
başka bir Erişilebilirlik Alanı.

C. Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. Ekle
başka bir Erişilebilirlik Alanında ek tüketici EC2 bulut sunucusu. MySQL için Amazon RDS'yi şununla kullanın:
Multi-AZ etkin.

D. Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. Ekle
İki Erişilebilirlik Alanındaki tüketici EC2 bulut sunucuları için Otomatik Ölçeklendirme grubu. Amazon'u kullanın
Multi-AZ etkinleştirilmiş MySQL için RDS.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. İki Erişilebilirlik Alanındaki tüketici EC2 bulut sunucuları için bir Otomatik Ölçeklendirme grubu ekleyin. Multi-AZ etkinken MySQL için Amazon RDS'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 112
Bir şirket, işlem yapan şirket içi sunuculardan oluşan bir filoda konteynerli bir web uygulaması barındırıyor
gelen istekler. Taleplerin sayısı hızla artıyor. Şirket içi sunucular şunları yapamaz:
Artan talep sayısını karşılayın. Şirket uygulamayı AWS'ye taşımak istiyor
minimum kod değişikliği ve minimum geliştirme çabasıyla.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Çalıştırmak için Amazon Elastic Container Service'te (Amazon ECS) AWS Fargate'i kullanın.
Service Auto Scaling ile kapsayıcılı web uygulaması. Bir Application Load Balancer kullanın:
Gelen istekleri dağıtın.

B. Container mimarisine alınmış web uygulamasını barındırmak için iki Amazon EC2 bulut sunucusunu kullanın. Bir Uygulama Kullanın
Gelen istekleri dağıtmak için Yük Dengeleyici.

C. AWS Lambda'yı desteklenen dillerden birini kullanan yeni bir kodla kullanın. Birden fazla oluştur
Lambda yükü desteklemek için çalışır. Amazon API Gateway'i Lambda'ya giriş noktası olarak kullanın
işlevler.

D. Bir ağ oluşturmak için AWS ParallelCluster gibi yüksek performanslı bir bilgi işlem (HPC) çözümü kullanın.
Gelen istekleri uygun ölçekte işleyebilen HPC kümesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Container mimarisine alınmış web uygulamasını Service Auto Scaling ile çalıştırmak için Amazon Elastic Container Service'te (Amazon ECS) AWS Fargate'i kullanın. Gelen istekleri dağıtmak için Application Load Balancer kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 113
Bir şirket raporlama için 50 TB veri kullanıyor. Şirket bu verileri şu tarihten itibaren taşımak istiyor:
AWS'ye tesisler. Şirketin veri merkezindeki özel bir uygulama haftalık verileri çalıştırıyor
dönüşüm işi. Şirket, veri aktarımı gerçekleşene kadar uygulamayı duraklatmayı planlıyor
tamamlandı ve aktarım sürecine mümkün olan en kısa sürede başlaması gerekiyor.
Veri merkezinde ek iş yükleri için kullanılabilir ağ bant genişliği yoktur. bir
çözüm mimarının verileri aktarması ve devam edecek şekilde dönüşüm işini yapılandırması gerekir
AWS Cloud'da çalıştırmak için.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri taşımak için AWS DataSync'i kullanın. AWS Glue'yu kullanarak özel bir dönüşüm işi oluşturun.

B. Verileri taşımak için bir AWS Snowcone cihazı sipariş edin. Dönüşüm uygulamasını şuraya dağıtın:
cihaz.

C. Bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin. Verileri cihaza kopyalayın. Bir oluştur
AWS Glue'yu kullanarak özel dönüşüm işi.

D. Amazon EC2 bilgi işlem içeren bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin.
Verileri cihaza kopyalayın. Dönüşümü çalıştırmak için AWS'de yeni bir EC2 örneği oluşturun
uygulama.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Snowball Edge Storage Optimize Edilmiş bir cihaz sipariş edin. Verileri cihaza kopyalayın. AWS Glue'yu kullanarak özel bir dönüşüm işi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 114
Bir şirket, kullanıcıların fotoğraf yükleyebileceği ve ekleyebileceği bir görüntü analiz uygulaması oluşturdu.
fotoğraf çerçeveleri resimlerine. Kullanıcılar hangi fotoğrafın hangi fotoğraf olduğunu belirtmek için görseller ve meta veriler yüklerler.
resimlerine eklemek istedikleri çerçeveleri seçin. Uygulama tek bir Amazon EC2 bulut sunucusu kullanıyor
ve meta verileri depolamak için Amazon DynamoDB.
Uygulama popüler hale geliyor ve kullanıcı sayısı artıyor. şirket
Eş zamanlı kullanıcı sayısının günün saatine ve saate bağlı olarak önemli ölçüde değişmesini beklemektedir.
haftanın günü. Şirket, uygulamanın müşterilerin ihtiyaçlarını karşılayacak şekilde ölçeklenebildiğinden emin olmalıdır.
kullanıcı tabanı büyüyor.
Bu gereksinimleri hangi çözüm karşılıyor?

A. Fotoğrafları işlemek için AWS Lambda'yı kullanın. Fotoğrafları ve meta verileri DynamoDB'de saklayın.

B. Fotoğrafları işlemek ve depolamak için Amazon Kinesis Data Firehose'u kullanın.
meta veriler.

C. Fotoğrafları işlemek için AWS Lambda'yı kullanın. Fotoğrafları Amazon S3'te saklayın. DynamoDB'yi koruyun
meta verileri depolamak için.

D. EC2 bulut sunucusu sayısını üçe çıkarın. Tedarik Edilmiş IOPS SSD (io2) Amazon'u kullanın
Fotoğrafları ve meta verileri depolamak için Elastic Block Store (Amazon EBS) birimleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Fotoğrafları işlemek için AWS Lambda'yı kullanın. Fotoğrafları Amazon S3'te saklayın. Meta verileri depolamak için DynamoDB'yi saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 115
Bir tıbbi kayıt şirketi, Amazon EC2 bulut sunucularında bir uygulamayı barındırıyor. Uygulama
Amazon S3'te depolanan müşteri veri dosyalarını işler. EC2 bulut sunucuları şurada barındırılır:
genel alt ağlar. EC2 bulut sunucuları Amazon S3'e internet üzerinden erişir ancak
başka herhangi bir ağ erişimi.
Yeni bir gereksinim, dosya aktarımları için ağ trafiğinin özel bir yol izlemesini ve özel bir yol izlemesini zorunlu kılmaktadır.
internet üzerinden gönderilecek.
Bir çözüm mimarının bunu karşılamak için ağ mimarisinde hangi değişikliği önermesi gerekir?
gereksinim?

A. Bir NAT ağ geçidi oluşturun. Trafiğin gönderileceği genel alt ağlara yönelik yönlendirme tablosunu yapılandırın
Amazon S3, NAT ağ geçidi üzerinden.

B. Giden trafiği kısıtlamak için EC2 bulut sunucularına yönelik güvenlik grubunu yapılandırın; böylece yalnızca trafik
S3 önek listesine izin verilir.

C. EC2 bulut sunucularını özel alt ağlara taşıyın. Amazon S3 için bir VPC uç noktası oluşturun ve bağlantı kurun
özel alt ağlar için rota tablosunun uç noktası.

D. İnternet ağ geçidini VPC'den kaldırın. Bir AWS Direct Connect bağlantısı kurun ve
Trafiği Direct Connect bağlantısı üzerinden Amazon S3'e yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucularını özel alt ağlara taşıyın. Amazon S3 için bir VPC uç noktası oluşturun ve uç noktayı özel alt ağların yönlendirme tablosuna bağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 116
Bir şirket, kurumsal web sitesi için popüler bir içerik yönetim sistemi (CMS) kullanıyor.
Ancak gerekli yama ve bakım külfetlidir. Şirket yeniden tasarlanıyor
web sitesi ve yeni bir çözüm istiyor. Web sitesi yılda dört kez güncellenecektir ve
herhangi bir dinamik içeriğin mevcut olması gerekir. Çözüm yüksek ölçeklenebilirlik sağlamalı ve
geliştirilmiş güvenlik.
Hangi değişiklik kombinasyonu bu gereksinimleri EN AZ operasyonel değerle karşılayacaktır?
genel gider mi? (İki tane seçin.)

A. HTTPS işlevselliğini kullanmak için Amazon CloudFront'u web sitesinin önünde yapılandırın.

B. HTTPS işlevselliği sağlamak için web sitesinin önüne bir AWS WAF web ACL dağıtın.

C. Web sitesi içeriğini yönetmek ve sunmak için bir AWS Lambda işlevi oluşturun ve dağıtın.

D. Yeni web sitesini ve bir Amazon S3 paketini oluşturun. Web sitesini S3 klasörüne dağıtın
Statik web sitesi barındırma etkin.

E. Yeni web sitesini oluşturun. Amazon EC2'nin Otomatik Ölçeklendirme grubunu kullanarak web sitesini dağıtın
Application Load Balancer'ın arkasındaki örnekler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** HTTPS işlevselliğini kullanmak için Amazon CloudFront'u web sitesinin önünde yapılandırın. Yeni web sitesini ve bir Amazon S3 paketini oluşturun. Statik web sitesi barındırma etkinken web sitesini S3 klasörüne dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 117
Bir şirket, uygulama günlüklerini bir Amazon CloudWatch Logs günlük grubunda saklar. Yeni bir politika
şirketin tüm uygulama günlüklerini Amazon OpenSearch Service'te (Amazon
Elasticsearch Hizmeti) neredeyse gerçek zamanlı olarak.
Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. Günlükleri Amazon OpenSearch Service'e aktarmak için CloudWatch Logs aboneliğini yapılandırın
(Amazon Elasticsearch Hizmeti).

B. Bir AWS Lambda işlevi oluşturun. Günlükleri yazacak işlevi çağırmak için günlük grubunu kullanın.
Amazon OpenSearch Hizmeti (Amazon Elasticsearch Hizmeti).

C. Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Günlük grubunu şu şekilde yapılandırın:
dağıtım akış kaynakları. Amazon OpenSearch Hizmetini Yapılandırma (Amazon Elasticsearch
Hizmet) teslimat akışının hedefi olarak.

D. Günlükleri teslim etmek için her uygulama sunucusuna Amazon Kinesis Agent'ı yükleyin ve yapılandırın.
Amazon Kinesis Veri Akışları. Günlükleri Amazon'a iletmek için Kinesis Veri Akışlarını yapılandırma
OpenSearch Hizmeti (Amazon Elasticsearch Hizmeti).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Günlükleri Amazon OpenSearch Service'e (Amazon Elasticsearch Service) aktarmak için bir CloudWatch Logs aboneliği yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 118
Bir şirket, Amazon EC2 bulut sunucularında birden çok platformda çalışan web tabanlı bir uygulama geliştiriyor
Erişilebilirlik Alanları. Web uygulaması metin belgeleri deposuna erişim sağlayacak
toplamda yaklaşık 900 TB boyutunda. Şirket, web uygulamasının deneyimleyeceğini öngörüyor
talebin yoğun olduğu dönemler. Bir çözüm mimarı, depolama bileşeninin
metin belgeleri uygulamanın talebini her zaman karşılayacak şekilde ölçeklenebilir. Şirket
çözümün genel maliyeti konusunda endişeli.
Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılıyor?

A. Amazon Elastik Blok Mağazası (Amazon EBS)

B. Amazon Elastik Dosya Sistemi (Amazon EFS)

C. Amazon OpenSearch Hizmeti (Amazon Elasticsearch Hizmeti)

D.Amazon S3

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon S3
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 119
Küresel bir şirket, sadakat kulübü kullanıcılarına yönelik REST API'leri tasarlamak için Amazon API Gateway'i kullanıyor
abd-doğu-1 Bölgesi ve ap-güneydoğu-2 Bölgesi'nde. Bir çözüm mimarı bir çözüm tasarlamalıdır.
Bu API Ağ Geçidi tarafından yönetilen REST API'lerini SQL'den birden fazla hesapta korumaya yönelik çözüm
enjeksiyon ve siteler arası komut dosyası çalıştırma saldırıları.
Hangi çözüm bu gereksinimleri EN AZ miktarda idari çabayla karşılayacak?

A. Her iki Bölgede de AWS WAF'ı kurun. Bölgesel web ACL'lerini bir API aşamasıyla ilişkilendirin.

B. Her iki Bölgede de AWS Firewall Manager'ı kurun. AWS WAF kurallarını merkezi olarak yapılandırın.

C. Bath Bölgelerinde AWS Shield'ı kurun. Bölgesel web ACL'lerini bir API aşamasıyla ilişkilendirin.

D. Bölgelerden birinde AWS Shield'ı kurun. Bölgesel web ACL'lerini bir API aşamasıyla ilişkilendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Her iki Bölgede de AWS Firewall Manager'ı kurun. AWS WAF kurallarını merkezi olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 120
Bir şirket, üç Amazon EC2 bulut sunucusuna kendi kendini yöneten bir DNS çözümü uyguladı
us-west-2 Bölgesinde bir Ağ Yük Dengeleyicisinin (NLB) arkasında. Şirketin kullanıcılarının çoğu
Amerika Birleşik Devletleri ve Avrupa'da bulunmaktadır. Şirket performansını artırmak istiyor
ve çözümün kullanılabilirliği. Şirket, şu anda üç EC2 bulut sunucusunu başlatıp yapılandırıyor:
eu-west-1 Bölgesi ve EC2 bulut sunucularını yeni bir NLB için hedef olarak ekler.
Şirket trafiği tüm EC2 bulut sunucularına yönlendirmek için hangi çözümü kullanabilir?

A. İstekleri ikisinden birine yönlendirmek için bir Amazon Route 53 coğrafi konum yönlendirme politikası oluşturun
NLB'ler. Bir Amazon CloudFront dağıtımı oluşturun. Dağıtımın kaydı olarak Route 53 kaydını kullanın
kökeni.

B. AWS Global Accelerator'da standart bir hızlandırıcı oluşturun. us-west-2'de uç nokta grupları oluşturun
ve ab-batı-1. İki NLB'yi uç nokta grupları için uç noktalar olarak ekleyin.

C. Altı EC2 bulut sunucusuna Elastik IP adresleri ekleyin. Amazon Route 53 coğrafi konumu oluşturma
İstekleri altı EC2 bulut sunucusundan birine yönlendirmek için yönlendirme politikası. Amazon CloudFront oluşturun
dağıtım. Dağıtımın kaynağı olarak Route 53 kaydını kullanın.

D. İki NLB'yi iki Application Load Balancer (ALB) ile değiştirin. Amazon Rotası Oluşturun
İstekleri iki ALB'den birine yönlendirmek için 53 gecikme yönlendirme politikası. Amazon CloudFront oluşturun
dağıtım. Dağıtımın kaynağı olarak Route 53 kaydını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Global Accelerator'da standart bir hızlandırıcı oluşturun. us-west-2 ve eu-west-1'de uç nokta grupları oluşturun. İki NLB'yi uç nokta grupları için uç noktalar olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 121
Bir şirket, AWS'de çevrimiçi işlem işleme (OLTP) iş yükü çalıştırıyor. Bu iş yükü
Multi-AZ dağıtımında şifrelenmemiş bir Amazon RDS DB bulut sunucusu kullanır. Günlük veritabanı
anlık görüntüler bu örnekten alınır.
Veritabanının ve anlık görüntülerin her zaman erişilebilir olmasını sağlamak için bir çözüm mimarı ne yapmalıdır?
ileriye doğru şifreli mi?

A. En son veritabanı anlık görüntüsünün bir kopyasını şifreleyin. Mevcut veritabanı örneğini geri yükleyerek değiştirin
şifrelenmiş anlık görüntü

B. Yeni bir şifrelenmiş Amazon Elastic Block Store (Amazon EBS) birimi oluşturun ve bu birimi kopyalayın.
anlık görüntüler. Veritabanı bulut sunucusunda şifrelemeyi etkinleştirin.

C. Anlık görüntüleri kopyalayın ve AWS Key Management Service'i (AWS KMS) kullanarak şifrelemeyi etkinleştirin
Şifrelenmiş anlık görüntüyü mevcut bir veritabanı örneğine geri yükleyin.

D. Anlık yedekleri, sunucu tarafı şifreleme kullanılarak şifrelenen bir Amazon S3 klasörüne kopyalayın
AWS Key Management Service (AWS KMS) yönetilen anahtarları (SSE-KMS) ile.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** En son veritabanı anlık görüntüsünün bir kopyasını şifreleyin. Şifrelenmiş anlık görüntüyü geri yükleyerek mevcut veritabanı örneğini değiştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 122
Bir şirket, geliştiricileri desteklemek için ölçeklenebilir bir anahtar yönetimi altyapısı oluşturmak istiyor
uygulamalarında verileri şifrelemeleri gerekir.
Bir çözüm mimarı operasyonel yükü azaltmak için ne yapmalıdır?

A. Şifreleme anahtarlarını korumak için çok faktörlü kimlik doğrulamayı (MFA) kullanın.

B. Şifreleme anahtarlarını korumak için AWS Key Management Service'i (AWS KMS) kullanın.

C. Şifreleme anahtarlarını oluşturmak, depolamak ve atamak için AWS Sertifika Yöneticisini (ACM) kullanın.

D. Korumak amacıyla erişim izinlerine sahip kullanıcıların kapsamını sınırlamak için bir IAM politikası kullanın.
şifreleme anahtarları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şifreleme anahtarlarını korumak için AWS Key Management Service'i (AWS KMS) kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 123
Bir şirketin iki Amazon EC2 bulut sunucusunda barındırılan dinamik bir web uygulaması var. şirket
SSL sonlandırma işlemini gerçekleştirmek için her örnekte bulunan kendi SSL sertifikasına sahiptir.
Son zamanlarda trafikte bir artış oldu ve operasyon ekibi SSL'nin geçerli olduğunu belirledi.
şifreleme ve şifre çözme, web sunucularının işlem kapasitesinin kendi sınırlarına ulaşmasına neden oluyor
maksimum sınır.
Bir çözüm mimarı uygulamanın performansını artırmak için ne yapmalıdır?

A. AWS Sertifika Yöneticisini (ACM) kullanarak yeni bir SSL sertifikası oluşturun. ACM sertifikasını yükleyin
her durumda.

B. Amazon S3 klasörü oluşturun SSL sertifikasını S3 klasörüne taşıyın. EC2'yi yapılandırma
SSL sonlandırma için pakete referans verecek örnekler.

C. Proxy sunucusu olarak başka bir EC2 örneği oluşturun. SSL sertifikasını yeni örneğe taşıyın
ve bağlantıları mevcut EC2 bulut sunucularına yönlendirecek şekilde yapılandırın.

D. SSL sertifikasını AWS Sertifika Yöneticisine (ACM) aktarın. Uygulama Yükü Oluşturun
ACM'nin SSL sertifikasını kullanan HTTPS dinleyicisine sahip dengeleyici.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** SSL sertifikasını AWS Sertifika Yöneticisine (ACM) aktarın. ACM'nin SSL sertifikasını kullanan bir HTTPS dinleyicisine sahip bir Application Load Balancer oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 124
Bir şirketin, birçok Amazon EC2 bulut sunucusunu kullanan son derece dinamik bir toplu işleme işi var.
tamamlayın. İş doğası gereği vatansız olup, herhangi bir zamanda herhangi bir izin olmaksızın başlatılabilir ve durdurulabilir.
olumsuz etki yaratır ve tamamlanması genellikle toplamda 60 dakikadan fazla sürer. Şirket
bir çözüm mimarından, gereksinimleri karşılayan ölçeklenebilir ve uygun maliyetli bir çözüm tasarlamasını istedi
işin gereksinimleri.
Çözüm mimarı ne tavsiye etmelidir?

A. EC2 Spot Bulut Sunucularını uygulayın.

B. EC2 Rezerve Edilmiş Bulut Sunucularını satın alın.

C. EC2 İsteğe Bağlı Bulut Sunucularını uygulayın.

D. İşlemeyi AWS Lambda'da uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 Spot Bulut Sunucularını uygulayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 125
Bir şirket iki katmanlı e-ticaret web sitesini AWS'de işletiyor. Web katmanı bir yükten oluşur
Amazon EC2 bulut sunucularına trafik gönderen dengeleyici. Veritabanı katmanı bir Amazon RDS kullanıyor
Veritabanı örneği. EC2 bulut sunucuları ve RDS DB bulut sunucusu halka açıklanmamalıdır
internet. EC2 bulut sunucuları, siparişlerin ödeme işlemlerini tamamlamak için internet erişimi gerektirir
üçüncü taraf bir web hizmeti aracılığıyla. Uygulamanın yüksek düzeyde kullanılabilir olması gerekir.
Hangi konfigürasyon seçenekleri kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. EC2 bulut sunucularını özel alt ağlarda başlatmak için Otomatik Ölçeklendirme grubunu kullanın. RDS dağıtma
Özel alt ağlarda Multi-AZ veritabanı bulut sunucusu.

B. İki Kullanılabilirlik genelinde iki özel alt ağ ve iki NAT ağ geçidi ile bir VPC yapılandırın
Bölgeler. Özel alt ağlara bir Application Load Balancer dağıtın.

C. EC2 bulut sunucularını iki genel alt ağda başlatmak için bir Otomatik Ölçeklendirme grubu kullanın
Erişilebilirlik Alanları. Özel alt ağlarda bir RDS Multi-AZ Veritabanı bulut sunucusunu dağıtın.

D. Bir genel alt ağ, bir özel alt ağ ve iki ağ üzerinde iki NAT ağ geçidi ile bir VPC yapılandırın
Erişilebilirlik Alanları. Genel alt ağda bir Application Load Balancer dağıtın.D. VPC'yi yapılandırma
iki Kullanılabilirlik genelinde iki genel alt ağ, iki özel alt ağ ve iki NAT ağ geçidi ile
Bölgeler. Genel alt ağlara bir Application Load Balancer dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** EC2 bulut sunucularını özel alt ağlarda başlatmak için Otomatik Ölçeklendirme grubunu kullanın. Özel alt ağlarda bir RDS Multi-AZ Veritabanı bulut sunucusunu dağıtın. İki Erişilebilirlik Alanında bir genel alt ağ, bir özel alt ağ ve iki NAT ağ geçidiyle bir VPC yapılandırın. Genel alt ağda bir Application Load Balancer dağıtın.D. İki Erişilebilirlik Alanında iki genel alt ağ, iki özel alt ağ ve iki NAT ağ geçidi ile bir VPC yapılandırın. Genel alt ağlara bir Application Load Balancer dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 126
Bir çözüm mimarının, bir şirketin depolama maliyetlerini azaltacak bir çözümü uygulaması gerekir. hepsi
şirketin verileri Amazon S3 Standard depolama sınıfındadır. Şirket tüm verileri saklamalıdır
en az 25 yıl boyunca. En son 2 yıla ait veriler yüksek oranda kullanılabilir olmalı ve
hemen geri alınabilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Nesneleri hemen S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü politikası oluşturun.

B. Nesneleri 2 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü politikası oluşturun.

C. S3 Intelligent-Tiering'i kullanın. Verilerin S3'te arşivlendiğinden emin olmak için arşivleme seçeneğini etkinleştirin
Buzul Derin Arşivi.

D. Nesneleri S3 One Zone-Infrequent Access'e (S3 One) geçirmek için bir S3 Yaşam Döngüsü politikası oluşturun
Zone-IA) hemen ve 2 yıl sonra S3 Glacier Deep Archive'a.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Nesneleri 2 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 127
Bir medya şirketi, sistemlerini AWS Cloud'a taşıma olasılığını değerlendiriyor.
Şirketin video için mümkün olan maksimum G/Ç performansıyla en az 10 TB depolama alanına ihtiyacı var
işleme, medya içeriğini depolamak için 300 TB çok dayanıklı depolama ve
Artık kullanılmayan arşiv ortamlarının gereksinimlerini karşılar.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi hizmetleri önermelidir?

A. Maksimum performans için Amazon EBS, dayanıklı veri depolama için Amazon S3 ve Amazon S3
Arşiv depolama için buzul

B. Maksimum performans için Amazon EBS, dayanıklı veri depolama için Amazon EFS ve Amazon
Arşiv depolama için S3 Glacier

C. Maksimum performans için Amazon EC2 bulut sunucusu deposu, dayanıklı veri depolama için Amazon EFS,
ve arşiv depolama için Amazon S3

D. Maksimum performans için Amazon EC2 bulut sunucusu deposu, dayanıklı veri depolama için Amazon S3,
ve arşiv depolama için Amazon S3 Glacier

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Maksimum performans için Amazon EC2 bulut sunucusu deposu, dayanıklı veri depolama için Amazon S3 ve arşiv depolama için Amazon S3 Glacier
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 128
Bir şirket, uygulamaları AWS Cloud'daki konteynerlerde çalıştırmak istiyor. Bu uygulamalar
vatansızdır ve temel altyapıdaki aksaklıkları tolere edebilir. Şirketin bir ihtiyacı var
Maliyeti ve operasyonel yükü en aza indiren çözüm.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygulama kapsayıcılarını çalıştırmak için Amazon EC2 Auto Scaling grubundaki Spot Bulut Sunucularını kullanın.

B. Spot Bulut Sunucularını Amazon Elastic Kubernetes Service (Amazon EKS) tarafından yönetilen bir düğümde kullanın
grup.

C. Uygulamayı çalıştırmak için Amazon EC2 Auto Scaling grubundaki İsteğe Bağlı Bulut Sunucularını kullanın
konteynerler.

D. Amazon Elastic Kubernetes Hizmetinde (Amazon EKS) yönetilen İsteğe Bağlı Bulut Sunucularını kullanın
düğüm grubu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Elastic Kubernetes Service (Amazon EKS) tarafından yönetilen bir düğüm grubunda Spot Bulut Sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 129
Bir şirket, tesislerinde çok katmanlı bir web uygulaması çalıştırıyor. Web uygulaması
kapsayıcıya alınmış ve PostgreSQL veritabanına bağlı bir dizi Linux ana bilgisayarında çalışır.
Kullanıcı kayıtlarını içerir. Altyapı ve kapasiteyi korumanın operasyonel yükü
Planlama şirketin büyümesini sınırlıyor. Bir çözüm mimarı uygulamanın performansını iyileştirmelidir.
altyapı.
Çözüm mimarının bunu başarmak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (Seç
iki.)

A. PostgreSQL veritabanını Amazon Aurora'ya taşıyın.

B. Web uygulamasını Amazon EC2 bulut sunucularında barındırılacak şekilde taşıyın.

C. Web uygulaması içeriği için bir Amazon CloudFront dağıtımı kurun.

D. Web uygulaması ile PostgreSQL veritabanı arasında Amazon ElastiCache'i kurun.

E. Web uygulamasını Amazon Elastic Container ile AWS Fargate'te barındırılacak şekilde taşıyın
Hizmet (Amazon ECS).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** PostgreSQL veritabanını Amazon Aurora'ya taşıyın. Amazon Elastic Container Service (Amazon ECS) ile web uygulamasını AWS Fargate'te barındırılacak şekilde taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 130
Bir uygulama, birden fazla Erişilebilirlik Alanında Amazon EC2 bulut sunucularında çalışır. Örnekler
Application Load Balancer'ın arkasında bir Amazon EC2 Auto Scaling grubunda çalıştırın. Uygulama
EC2 bulut sunucularının CPU kullanımı %40 veya buna yakın olduğunda en iyi performansı gösterir.
Bir çözüm mimarı, tüm örneklerde istenen performansı korumak için ne yapmalıdır?
grup mu?

A. Otomatik Ölçeklendirme grubunu dinamik olarak ölçeklendirmek için basit bir ölçeklendirme ilkesi kullanın.

B. Otomatik Ölçeklendirme grubunu dinamik olarak ölçeklendirmek için bir hedef izleme ilkesi kullanın.

C. İstenilen Otomatik Ölçeklendirme grubu kapasitesini güncellemek için bir AWS Lambda işlevini kullanın.

D. Otomatik Ölçeklendirme grubunun ölçeğini büyütmek ve küçültmek için zamanlanmış ölçeklendirme eylemlerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunu dinamik olarak ölçeklendirmek için bir hedef izleme ilkesi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 131
Bir şirket, Amazon S3 klasörünü kullanacak bir dosya paylaşım uygulaması geliştiriyor
depolama. Şirket, tüm dosyaları bir Amazon CloudFront dağıtımı aracılığıyla sunmak istiyor.
Şirket, dosyalara doğrudan S3 URL'sine gidilerek erişilmesini istemiyor.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Yalnızca CloudFront'a okuma izni vermek amacıyla her S3 grubu için ayrı politikalar yazın
erişim.

B. Bir IAM kullanıcısı oluşturun. Kullanıcıya S3 klasöründeki nesnelere okuma izni verin. Ata
kullanıcıyı CloudFront'a.

C. CloudFront dağıtım kimliğini Asıl olarak atayan bir S3 grup ilkesi yazın ve
hedef S3 paketini Amazon Kaynak Adı (ARN) olarak atar.

D. Bir kaynak erişim kimliği (OAI) oluşturun. OAI'yi CloudFront dağıtımına atayın. Yapılandır
S3 grup izinlerini yalnızca OAI'nin okuma iznine sahip olması için ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir kaynak erişim kimliği (OAI) oluşturun. OAI'yi CloudFront dağıtımına atayın. S3 grup izinlerini yalnızca OAI'nin okuma iznine sahip olacağı şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 132
Bir şirketin web sitesi kullanıcılara indirilebilir geçmiş performans raporları sağlar.
web sitesi, şirketin web sitesi taleplerini küresel olarak karşılayacak şekilde ölçeklenecek bir çözüme ihtiyaç duyuyor.
Çözüm uygun maliyetli olmalı, altyapı kaynaklarının sağlanmasını sınırlamalı ve
Mümkün olan en hızlı tepki süresi.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi kombinasyonu önermelidir?

A. Amazon CloudFront ve Amazon S3

B. AWS Lambda ve Amazon DynamoDB

C. Amazon EC2 Auto Scaling özellikli Application Load Balancer

D. Dahili Uygulama Yük Dengeleyicileriyle Amazon Route 53

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon CloudFront ve Amazon S3
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 133
Bir şirket kendi bünyesinde Oracle veritabanı çalıştırmaktadır. Şirketin AWS'ye geçişinin bir parçası olarak,
şirket veritabanını mevcut en yeni sürüme yükseltmek istiyor. şirket
ayrıca veritabanı için olağanüstü durum kurtarmayı (DR) ayarlamak istiyor. Şirketin en aza indirmesi gerekiyor
normal işlemler ve DR kurulumu için operasyonel ek yük. Şirketin ayrıca ihtiyacı var
veritabanının temel işletim sistemine erişimi sürdürün.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Oracle veritabanını bir Amazon EC2 bulut sunucusuna taşıyın. Veritabanı çoğaltmasını bir
farklı AWS Bölgesi.

B. Oracle veritabanını Amazon RDS for Oracle'a taşıyın. Bölgeler Arası otomatikleştirmeyi etkinleştir
anlık görüntüleri başka bir AWS Bölgesine kopyalamak için yedekler.

C. Oracle veritabanını Amazon RDS Custom for Oracle'a taşıyın. için bir okuma kopyası oluşturun.
başka bir AWS Bölgesindeki veritabanı.

D. Oracle veritabanını Amazon RDS for Oracle'a taşıyın. Başka bir yerde bekleme veritabanı oluşturun
Erişilebilirlik Alanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Oracle veritabanını Amazon RDS Custom for Oracle'a taşıyın. Başka bir AWS Bölgesindeki veritabanı için bir okuma kopyası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 134
Bir şirket, uygulamasını sunucusuz bir çözüme taşımak istiyor. Sunucusuz çözüm ihtiyaçları
SL kullanarak mevcut ve yeni verileri analiz etmek. Şirket verileri bir Amazon S3'te saklıyor
kova. Veriler şifreleme gerektirir ve farklı bir AWS Bölgesine kopyalanmalıdır.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Yeni bir S3 klasörü oluşturun. Verileri yeni S3 klasörüne yükleyin. S3 Bölgeler Arası Kullanımı
Şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne kopyalamak için Çoğaltma (CRR). Kullanım
AWS KMS çoklu Bölge kays (SSE-KMS) ile sunucu tarafı şifreleme. Amazon Athena'yı kullanarak
verileri sorgulayın.

B. Yeni bir S3 klasörü oluşturun. Verileri yeni S3 klasörüne yükleyin. S3 Bölgeler Arası Kullanımı
Şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne kopyalamak için Çoğaltma (CRR). Kullanım
AWS KMS çoklu Bölge anahtarlarıyla (SSE-KMS) sunucu tarafı şifreleme. Sorgulamak için Amazon RDS'yi kullanın
veriler.

C. Verileri mevcut S3 klasörüne yükleyin. Çoğaltma için S3 Bölgeler Arası Çoğaltma'yı (CRR) kullanma
şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne aktarın. Amazon S3 ile sunucu tarafı şifrelemeyi kullanın
yönetilen şifreleme anahtarları (SSE-S3). Verileri sorgulamak için Amazon Athena'yı kullanın.

D. Verileri mevcut S3 klasörüne yükleyin. Çoğaltma için S3 Bölgeler Arası Çoğaltma'yı (CRR) kullanma
şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne aktarın. Amazon S3 ile sunucu tarafı şifrelemeyi kullanın
yönetilen şifreleme anahtarları (SSE-S3). Verileri sorgulamak için Amazon RDS'yi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Yeni bir S3 paketi oluşturun. Verileri yeni S3 klasörüne yükleyin. Şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı (CRR) kullanın. AWS KMS çoklu Bölge kays (SSE-KMS) ile sunucu tarafı şifrelemeyi kullanın. Verileri sorgulamak için Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 135
Bir şirket iş yüklerini AWS'de çalıştırıyor. Şirketin bir hizmete bağlanması gerekiyor
harici sağlayıcı. Hizmet, sağlayıcının VPC'sinde barındırılır. Şirketin açıklamasına göre
güvenlik ekibi için bağlantı özel olmalı ve hedef hizmetle sınırlı olmalıdır.
bağlantı yalnızca şirketin VPC'sinden başlatılmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin VPC'si ile sağlayıcının VPC'si arasında bir VPC eşleme bağlantısı oluşturun. Güncelleme
hedef hizmete bağlanmak için rota tablosu.

B. Sağlayıcıdan VPC'sinde sanal bir özel ağ geçidi oluşturmasını isteyin. Bağlanmak için AWS PrivateLink'i kullanın
hedef hizmete.

C. Şirketin VP'sinin genel alt ağında bir NAT ağ geçidi oluşturunYol tablosunu güncelleyin
hedef hizmete bağlanın.

D. Sağlayıcıdan hedef hizmet için bir VPC uç noktası oluşturmasını isteyin. AWS PrivateLink'i kullanarak
hedef hizmete bağlanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Sağlayıcıdan hedef hizmet için bir VPC uç noktası oluşturmasını isteyin. Hedef hizmete bağlanmak için AWS PrivateLink'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 136
Bir şirket şirket içi PostgreSQL veritabanını Amazon Aurora PostgreSQL'e taşıyor.
Şirket içi veritabanının geçiş sırasında çevrimiçi ve erişilebilir kalması gerekir. Aurora
veritabanının şirket içi veritabanıyla senkronize kalması gerekir.
Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
(İki tane seçin.)

A. Devam eden bir çoğaltma görevi oluşturun.

B. Şirket içi veritabanının veritabanı yedeğini oluşturun.

C. Bir AWS Database Migration Service (AWS DMS) çoğaltma sunucusu oluşturun.

D. AWS Şema Dönüştürme Aracı'nı (AWS SCT) kullanarak veritabanı şemasını dönüştürün.

E. Veritabanını izlemek için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun
senkronizasyon.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Devam eden bir çoğaltma görevi oluşturun. Bir AWS Database Migration Service (AWS DMS) çoğaltma sunucusu oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 137
Bir şirket, her iş birimi için özel AWS hesapları oluşturmak amacıyla AWS Organizasyonlarını kullanıyor
talep üzerine her iş biriminin hesabını bağımsız olarak yönetmek. Kök e-posta alıcısı
bir hesabın kök kullanıcı e-posta adresine gönderilen bir bildirimi kaçırdınız. şirket
gelecekteki tüm bildirimlerin kaçırılmamasını sağlamak istiyor. Gelecekteki bildirimler aşağıdakilerle sınırlı olmalıdır:
hesap yöneticileri.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin e-posta sunucusunu, kendisine gönderilen bildirim e-posta mesajlarını iletecek şekilde yapılandırın.
AWS hesabı kök kullanıcı e-posta adresini kuruluştaki tüm kullanıcılara iletir.

B. Tüm AWS hesabı kök kullanıcı e-posta adreslerini, birkaç adrese giden dağıtım listeleri olarak yapılandırın.
Uyarılara yanıt verebilecek yöneticiler. AWS'de AWS hesabı alternatif kişilerini yapılandırma
Kuruluşlar konsol veya programlı olarak.

C. Tüm AWS hesabı kök kullanıcısı e-posta iletilerini, yönetici olan tek bir yöneticiye gönderilecek şekilde yapılandırın.
Uyarıların izlenmesinden ve bu uyarıların uygun gruplara iletilmesinden sorumludur.

D. Mevcut tüm AWS hesaplarını ve yeni oluşturulan tüm hesapları aynı kök kullanıcıyı kullanacak şekilde yapılandırın
e-posta adresi. AWS Kuruluşları konsolunda AWS hesabı alternatif kişilerini yapılandırın veya
programlı olarak.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tüm AWS hesabı kök kullanıcı e-posta adreslerini, uyarılara yanıt verebilecek birkaç yöneticiye giden dağıtım listeleri olarak yapılandırın. AWS hesabı alternatif kişilerini AWS Kuruluşları konsolunda veya program aracılığıyla yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 138
Bir şirket, e-ticaret uygulamasını AWS'de çalıştırıyor. Her yeni sipariş masaj olarak yayınlanmaktadır.
Tek bir Erişilebilirlik Alanındaki bir Amazon EC2 bulut sunucusunda çalışan bir RabbitMQ kuyruğunda. Bunlar
mesajlar, ayrı bir EC2 örneğinde çalışan farklı bir uygulama tarafından işlenir. Bu
uygulama, ayrıntıları başka bir EC2 örneğindeki PostgreSQL veritabanında saklar. Tüm EC2
bulut sunucuları aynı Erişilebilirlik Alanındadır.
Şirketin mimarisini en az maliyetle en yüksek kullanılabilirliği sağlayacak şekilde yeniden tasarlaması gerekiyor
operasyonel ek yük.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Sırayı Amazon MQ'daki yedek bir RabbitMQ bulut sunucusu çiftine (etkin/yedek) taşıyın.
Uygulamayı barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Başka bir tane oluştur
PostgreSQL veritabanını barındıran EC2 bulut sunucuları için Multi-AZ Otomatik Ölçeklendirme grubu.

B. Sırayı Amazon MQ'daki yedek bir RabbitMQ bulut sunucusu çiftine (etkin/yedek) taşıyın.
Uygulamayı barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Taşı
Amazon RDS for PostgreSQL'in Multi-AZ dağıtımında çalışacak veritabanı.

C. RabbitMQ kuyruğunu barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Oluştur
uygulamayı barındıran EC2 bulut sunucuları için başka bir Multi-AZ Otomatik Ölçeklendirme grubu. Taşı
Amazon RDS for PostgreSQL'in Multi-AZ dağıtımında çalışacak veritabanı.

D. RabbitMQ kuyruğunu barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Oluştur
uygulamayı barındıran EC2 bulut sunucuları için başka bir Multi-AZ Otomatik Ölçeklendirme grubu. Üçüncüyü oluştur
PostgreSQL veritabanını barındıran EC2 bulut sunucuları için Multi-AZ Otomatik Ölçeklendirme grubu

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kuyruğu Amazon MQ'daki yedek bir RabbitMQ bulut sunucusu çiftine (etkin/yedek) taşıyın. Uygulamayı barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Veritabanını Amazon RDS for PostgreSQL'in Multi-AZ dağıtımında çalışacak şekilde taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 139
Bir raporlama ekibi her gün bir Amazon S3 klasöründeki dosyaları alır. Raporlama ekibi manuel olarak
dosyaları her gün bu ilk S3 klasöründen inceler ve bir analiz S3 klasörüne kopyalar.
Amazon QuickSight ile aynı anda kullanın. Ek ekipler daha fazla dosya göndermeye başlıyor
ilk S3 paketine daha büyük boyutlar.
Raporlama ekibi, dosyalar S3 klasörüne girerken analiz dosyalarını otomatik olarak taşımak istiyor
ilk S3 paketi. Raporlama ekibi aynı zamanda AWS Lambda işlevlerini çalıştırmak için de kullanmak istiyor
kopyalanan verilerde desen eşleştirme kodu. Ayrıca raporlama ekibi verileri göndermek istiyor
dosyaları Amazon SageMaker Pipelines'taki bir ardışık düzene aktarın.
Bir çözüm mimarı bu gereksinimleri EN AZ operasyonel düzeyde karşılamak için ne yapmalıdır?
genel gider mi?

A. Dosyaları analiz S3 klasörüne kopyalamak için bir Lambda işlevi oluşturun. S3 etkinliği oluşturma
analiz S3 paketi için bildirim. Lambda ve SageMaker İşlem Hatlarını şu şekilde yapılandırın:
etkinlik bildiriminin hedefleri. Olay türü olarak s3:ObjectCreated:Put öğesini yapılandırın.

B. Dosyaları analiz S3 klasörüne kopyalamak için bir Lambda işlevi oluşturun. S3 analizini yapılandırma
Amazon EventBridge'e (Amazon CloudWatch Events) etkinlik bildirimleri göndermek için paket.
EventBridge'de (CloudWatch Events) bir ObjectCreated kuralı yapılandırın. Lambda'yı yapılandırın ve
Kuralın hedefleri olarak SageMaker İşlem Hatları.

C. S3 klasörleri arasında S3 çoğaltmasını yapılandırın. için bir S3 olay bildirimi oluşturun.
analiz S3 paketi. Etkinliğin hedefleri olarak Lambda ve SageMaker İşlem Hatlarını yapılandırma
bildirim. Olay türü olarak s3:ObjectCreated:Put öğesini yapılandırın.

D. S3 klasörleri arasında S3 çoğaltmasını yapılandırın. Gönderilecek analiz S3 paketini yapılandırma
Amazon EventBridge'e (Amazon CloudWatch Events) olay bildirimleri. Bir yapılandırma
EventBridge'de ObjectCreated kuralı (CloudWatch Events). Lambda ve SageMaker'ı yapılandırma
Kuralın hedefleri olarak işlem hatları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 klasörleri arasında S3 çoğaltmasını yapılandırın. Amazon EventBridge'e (Amazon CloudWatch Events) olay bildirimleri göndermek için analiz S3 klasörünü yapılandırın. EventBridge'de (CloudWatch Events) bir ObjectCreated kuralı yapılandırın. Lambda ve SageMaker İşlem Hatlarını kuralın hedefleri olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 140
Bir çözüm mimarının, bir şirketin bir uygulamayı çalıştırma maliyetini optimize etmesine yardımcı olması gerekir.
AWS. Uygulama, Amazon EC2 bulut sunucularını, AWS Fargate ve AWS Lambda'yı kullanacak.
mimari içinde hesaplayın.
EC2 bulut sunucuları, uygulamanın veri alımı katmanını çalıştıracaktır. EC2 kullanımı ara sıra olacaktır
ve tahmin edilemez. EC2 bulut sunucularında çalışan iş yükleri herhangi bir zamanda kesintiye uğratılabilir.
uygulama ön ucu Fargate üzerinde çalışacak ve Lambda, API katmanına hizmet edecek. Ön uç
kullanımı ve API katmanı kullanımı önümüzdeki yıl boyunca tahmin edilebilir olacaktır.
Hangi satın alma seçenekleri kombinasyonu EN uygun maliyetli çözümü sağlayacaktır?
Bu uygulamayı barındırıyor musunuz? (İki tane seçin.)

A. Veri alımı katmanı için Spot Bulut Sunucularını kullanın

B. Veri alımı katmanı için İsteğe Bağlı Bulut Sunucularını kullanın

C. Ön uç ve API katmanı için 1 yıllık Bilgi İşlem Tasarruf Planı satın alın.

D. Veri alımı katmanı için 1 yıllık Tamamı Peşinat Rezerve bulut sunucuları satın alın.

E. Ön uç ve API katmanı için 1 yıllık EC2 bulut sunucusu Tasarruf Planı satın alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Veri alımı katmanı için Spot Bulut Sunucularını kullanın Ön uç ve API katmanı için 1 yıllık Bilgi İşlem Tasarruf Planı satın alın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 141
Bir şirket, kullanıcılara küresel son dakika haberlerini, yerel uyarıları,
ve hava durumu güncellemeleri. Portal, her kullanıcıya aşağıdakilerin karışımını kullanarak kişiselleştirilmiş bir görünüm sunar:
Statik ve dinamik içerik. İçerik, bir sunucu üzerinde çalışan bir API sunucusu aracılığıyla HTTPS üzerinden sunulur.
Application Load Balancer'ın (ALB) arkasındaki Amazon EC2 örneği. Şirket şunu istiyor
portalın bu içeriği dünya çapındaki kullanıcılarına mümkün olan en hızlı şekilde sunmasını hedefliyoruz.
Bir çözüm mimarı, EN AZ gecikme miktarını sağlayacak şekilde uygulamayı nasıl tasarlamalıdır?
tüm kullanıcılar için mi?

A. Uygulama yığınını tek bir AWS Bölgesinde dağıtın. Herkese hizmet vermek için Amazon CloudFront'u kullanın
ALB'yi kaynak olarak belirterek statik ve dinamik içerik.

B. Uygulama yığınını iki AWS Bölgesinde dağıtın. Amazon Route 53 gecikmeli yönlendirme kullanın
ALB'den gelen tüm içeriği en yakın Bölgede sunma politikası.

C. Uygulama yığınını tek bir AWS Bölgesinde dağıtın. Hizmet vermek için Amazon CloudFront'u kullanın
statik içerik. Dinamik içeriği doğrudan ALB'den sunun.

D. Uygulama yığınını iki AWS Bölgesinde dağıtın. Amazon Route 53 coğrafi konumunu kullanma
ALB'den gelen tüm içeriğin en yakın Bölgede sunulmasına yönelik yönlendirme politikası.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulama yığınını tek bir AWS Bölgesinde dağıtın. ALB'yi kaynak olarak belirterek tüm statik ve dinamik içeriği sunmak için Amazon CloudFront'u kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 142
Bir oyun şirketi yüksek düzeyde kullanılabilir bir mimari tasarlıyor. Uygulama bir üzerinde çalışır
değiştirilmiş Linux çekirdeği ve yalnızca UDP tabanlı trafiği destekler. Şirketin ön uca ihtiyacı var
Mümkün olan en iyi kullanıcı deneyimini sağlamak için katman. Bu katmanın gecikme süresi düşük olmalı ve trafiği şuraya yönlendirmelidir:
en yakın uç konumu ve uygulamaya giriş için statik IP adresleri sağlayın
uç noktalar.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. İstekleri bir Application Load Balancer'a iletmek için Amazon Route 53'ü yapılandırın. AWS'yi kullanın
AWS Uygulama Otomatik Ölçeklendirmesindeki uygulama için Lambda.

B. Amazon CloudFront'u istekleri bir Network Load Balancer'a iletecek şekilde yapılandırın. AWS'yi kullanın
AWS Uygulama Otomatik Ölçeklendirme grubundaki uygulama için Lambda.

C. AWS Global Accelerator'ı, istekleri bir Network Load Balancer'a iletecek şekilde yapılandırın. Kullanım
EC2 Auto Scaling grubundaki uygulama için Amazon EC2 bulut sunucuları.

D. İstekleri bir Application Load Balancer'a iletmek için Amazon API Gateway'i yapılandırın. Kullanım
EC2 Auto Scaling grubundaki uygulama için Amazon EC2 bulut sunucuları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İstekleri bir Network Load Balancer'a iletmek için AWS Global Accelerator'ı yapılandırın. Bir EC2 Auto Scaling grubundaki uygulama için Amazon EC2 bulut sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 143
Bir şirket mevcut şirket içi monolitik uygulamasını AWS'ye geçirmek istiyor.
şirket, ön uç kodunun ve arka uç kodunun mümkün olduğunca çoğunu saklamak istiyor.
Ancak şirket uygulamayı daha küçük uygulamalara bölmek istiyor. Farklı bir takım
her uygulamayı yönetecek. Şirketin minimum düzeyde ölçeklenebilir bir çözüme ihtiyacı var
operasyonel ek yük.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamayı AWS Lambda'da barındırın. Uygulamayı Amazon API Gateway ile entegre edin.

B. Uygulamayı AWS Amplify ile barındırın. Uygulamayı bir Amazon API Ağ Geçidine bağlayın
AWS Lambda ile entegre API.

C. Uygulamayı Amazon EC2 bulut sunucularında barındırın. EC2 ile Application Load Balancer kurma
Otomatik Ölçeklendirme grubundaki örnekleri hedef olarak kullanın.

D. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) barındırın. Bir kurulum yapın
Hedef olarak Amazon ECS'yi içeren Application Load Balancer.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) barındırın. Hedef olarak Amazon ECS ile bir Application Load Balancer kurun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 144
Bir şirket yakın zamanda küresel e-ticareti için veri deposu olarak Amazon Aurora'yı kullanmaya başladı
uygulama. Büyük raporlar çalıştırıldığında geliştiriciler, e-ticaret uygulamasının
kötü performans gösteriyor. Bir çözüm mimarı, Amazon CloudWatch'taki ölçümleri inceledikten sonra şunu buluyor:
Aylık raporlar çalıştırıldığında ReadIOPS ve CPUUtilizalion ölçümlerinin hızla arttığını görüyoruz.
EN uygun maliyetli çözüm nedir?

A. Aylık raporlamayı Amazon Redshift'e taşıyın.

B. Aylık raporlamayı bir Aurora Replika'ya taşıyın.

C. Aurora veritabanını daha büyük bir örnek sınıfına taşıyın.

D. Aurora örneğinde Tedarik Edilen IOPS'yi artırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Aylık raporlamayı bir Aurora Replika'ya taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 145
Bir şirket, tek bir Amazon EC2 İsteğe Bağlı Bulut Sunucusunda bir web sitesi analitiği uygulaması barındırıyor.
Analitik yazılımı PHP ile yazılmıştır ve MySQL veritabanını kullanır. Analitik yazılımı,
PHP sağlayan web sunucusu ve veritabanı sunucusunun tümü EC2 örneğinde barındırılmaktadır.
Uygulama yoğun zamanlarda performans düşüşü belirtileri gösteriyor ve
5xx hataları gösteriliyor. Firmanın uygulama ölçeğini sorunsuz bir şekilde yapması gerekiyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Veritabanını Amazon RDS for MySQL Veritabanı bulut sunucusuna taşıyın. Web'in bir AMI'sini oluşturun
uygulama. İkinci bir EC2 İsteğe Bağlı Bulut Sunucusunu başlatmak için AMI'yi kullanın. Uygulama Yükü Kullan
Yükü her EC2 örneğine dağıtmak için dengeleyici.

B. Veritabanını Amazon RDS for MySQL Veritabanı bulut sunucusuna taşıyın. Web'in bir AMI'sini oluşturun
uygulama. İkinci bir EC2 İsteğe Bağlı Bulut Sunucusunu başlatmak için AMI'yi kullanın. Amazon Route 53'ü kullanın
yükü iki EC2 bulut sunucusuna dağıtmak için ağırlıklı yönlendirme.

C. Veritabanını bir Amazon Aurora MySQL Veritabanı bulut sunucusuna taşıyın. Bir AWS Lambda oluşturun
EC2 bulut sunucusunu durdurma ve bulut sunucusu tipini değiştirme işlevi. Amazon CloudWatch oluşturun
CPU kullanımı %75'i aştığında Lambda işlevini çağıran alarm.

D. Veritabanını bir Amazon Aurora MySQL Veritabanı bulut sunucusuna taşıyın. Web'in bir AMI'sini oluşturun
uygulama. AMI'yi bir başlatma şablonuna uygulayın. Lansmanla birlikte bir Otomatik Ölçeklendirme grubu oluşturun
şablon Lansman şablonunu Spot Filo kullanacak şekilde yapılandırın. Uygulama Yük Dengeleyicisi ekleme
Otomatik Ölçeklendirme grubuna.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanını bir Amazon Aurora MySQL Veritabanı bulut sunucusuna taşıyın. Web uygulamasının bir AMI'sini oluşturun. AMI'yi bir başlatma şablonuna uygulayın. Başlatma şablonuyla Otomatik Ölçeklendirme grubu oluşturma Başlatma şablonunu Spot Filo kullanacak şekilde yapılandırın. Otomatik Ölçeklendirme grubuna bir Application Load Balancer ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 146
Bir şirket, bir grup Amazon EC2 üzerinde üretim aşamasında durum bilgisiz bir web uygulaması çalıştırıyor
Application Load Balancer'ın arkasındaki İsteğe Bağlı Bulut Sunucuları. Uygulama ağır deneyimler yaşıyor
her iş gününde 8 saatlik bir süre boyunca kullanım. Uygulama kullanımı orta düzeyde ve istikrarlı
bir gecede. Hafta sonları uygulama kullanımı düşüktür.
Şirket, uygulamanın kullanılabilirliğini etkilemeden EC2 maliyetlerini en aza indirmek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İş yükünün tamamı için Spot Bulut Sunucularını kullanın.

B. Temel kullanım düzeyi için Rezerve Edilmiş Bulut Sunucularını kullanın. Ek bilgiler için Spot bulut sunucularını kullanın
uygulamanın ihtiyaç duyduğu kapasite.

C. Temel kullanım düzeyi için İsteğe Bağlı Bulut Sunucularını kullanın. Spot Bulut Sunucularını herhangi biri için kullanın
uygulamanın ihtiyaç duyduğu ek kapasite.

D. Temel kullanım düzeyi için Tahsis Edilmiş Bulut Sunucularını kullanın. Herhangi biri için İsteğe Bağlı Bulut Sunucularını kullanın
uygulamanın ihtiyaç duyduğu ek kapasite.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Temel kullanım düzeyi için Rezerve Edilmiş Bulut Sunucularını kullanın. Uygulamanın ihtiyaç duyduğu ek kapasite için Spot bulut sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 147
Bir şirketin kritik bir uygulamaya ait uygulama günlük dosyalarını 10 yıl boyunca saklaması gerekir.
uygulama ekibi sorun giderme amacıyla düzenli olarak geçen aya ait günlüklere erişiyor ancak daha eski olan günlükler
1 aydan daha uzun sürelere nadiren erişilir. Uygulama ayda 10 TB'tan fazla günlük oluşturuyor.
Hangi depolama seçeneği bu gereksinimleri EN uygun maliyetle karşılar?

A. Günlükleri Amazon S3'te saklayın. 1 aydan eski günlükleri S3'e taşımak için AWS Backup'ı kullanın
Buzul Derin Arşivi.

B. Günlükleri Amazon S3'te saklayın. 1 aydan eski günlükleri taşımak için S3 Yaşam Döngüsü politikalarını kullanın.
S3 Glacier Derin Arşivi.

C. Günlükleri Amazon CloudWatch Logs'ta saklayın. 1'den fazla günlükleri taşımak için AWS Backup'ı kullanın
aylık S3 Glacier Deep Archive'a.

D. Günlükleri Amazon CloudWatch Logs'ta saklayın. Günlükleri taşımak için Amazon S3 Yaşam Döngüsü politikalarını kullanın
S3 Glacier Deep Archive'a 1 aydan daha eski.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Günlükleri Amazon S3'te saklayın. 1 aydan eski günlükleri S3 Glacier Deep Archive'a taşımak için S3 Yaşam Döngüsü politikalarını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 148
Bir şirketin aşağıdaki bileşenleri içeren bir veri alımı iş akışı vardır:
Hakkında bildirim alan bir Amazon Basit Bildirim Hizmeti (Amazon SNS) konusu
yeni veri dağıtımları
Verileri işleyen ve saklayan bir AWS Lambda işlevi
Besleme iş akışı, ağ bağlantısı sorunları nedeniyle zaman zaman başarısız oluyor. Başarısızlık olduğunda
meydana gelirse, şirket işi manuel olarak yeniden çalıştırmadığı sürece ilgili veriler alınmaz.
Tüm bildirimlerin eninde sonunda işlenmesini sağlamak için bir çözüm mimarı ne yapmalıdır?

A. Lambda işlevini birden çok Erişilebilirlik Alanında dağıtım için yapılandırın.

B. Lambda işlevinin yapılandırmasını, CPU ve bellek ayırmalarını artıracak şekilde değiştirin.
işlevi.

C. Hem yeniden deneme sayısını hem de bekleme süresini artırmak için SNS konusunun yeniden deneme stratejisini yapılandırın
yeniden denemeler arasında.

D. Arıza durumunda bir Amazon Simple Queue Service (Amazon SQS) kuyruğunu yapılandırın
hedef. Kuyruktaki mesajları işlemek için Lambda işlevini değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Arıza durumunda hedef olarak bir Amazon Simple Queue Service (Amazon SQS) kuyruğu yapılandırın. Kuyruktaki mesajları işlemek için Lambda işlevini değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 149
Bir şirketin olay verilerini üreten bir hizmeti var. Şirket, işlemleri gerçekleştirmek için AWS'yi kullanmak istiyor
olay verileri alındığı şekliyle. Veriler, korunması gereken belirli bir sırayla yazılır
İşleme boyunca. Şirket, operasyonel maliyetleri en aza indiren bir çözüm uygulamak istiyor
yükü.
Bir çözüm mimarı bunu nasıl başarmalıdır?

A. Mesajları tutmak için bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğu oluşturun. Ayarla
kuyruktaki mesajları işlemek için bir AWS Lambda işlevi oluşturun.

B. Bildirimleri iletmek için bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun
işlenecek yükleri içerir. Abone olarak bir AWS Lambda işlevini yapılandırın.

C. Mesajları tutmak için bir Amazon Simple Queue Service (Amazon SQS) standart kuyruğu oluşturun.
Sıradaki mesajları bağımsız olarak işlemek için bir AWS Lambda işlevi kurun.

D. Bildirimleri iletmek için bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun
işlenecek yükleri içerir. Amazon Simple Queue Service'i (Amazon SQS) Yapılandırma
Abone olarak sıraya girin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İletileri tutmak için bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğu oluşturun. Kuyruktaki mesajları işlemek için bir AWS Lambda işlevi kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 150
Bir şirket, bir uygulamayı şirket içi sunuculardan Amazon EC2 bulut sunucularına taşıyor. olarak
Geçiş tasarımı gereksinimlerinin bir parçası olarak bir çözüm mimarının altyapıyı uygulaması gerekir
metrik alarmlar. CPU kullanımı daha da artarsa şirketin herhangi bir işlem yapmasına gerek kalmaz
Kısa bir süre için %50'den fazla. Ancak CPU kullanımı %50'nin üzerine çıkarsa
ve diskteki okunan IOPS aynı zamanda yüksekse firmanın bir an önce harekete geçmesi gerekiyor
mümkün. Çözüm mimarı aynı zamanda yanlış alarmları da azaltmalıdır.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Mümkün olduğunda Amazon CloudWatch bileşik alarmları oluşturun.

B. Ölçümleri görselleştirmek ve sorunlara hızla yanıt vermek için Amazon CloudWatch kontrol panelleri oluşturun.

C. Uygulamayı izlemek ve alarm vermek için Amazon CloudWatch Synthetics kanaryaları oluşturun.

D. Birden fazla ölçüm eşiğine sahip tek Amazon CloudWatch ölçüm alarmları oluşturun;
mümkün.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mümkün olduğunda Amazon CloudWatch bileşik alarmları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 151
Bir şirket şirket içi veri merkezini AWS'ye taşımak istiyor. Şirketin açıklamasına göre
uyumluluk gereksinimleri nedeniyle şirket yalnızca ap-kuzeydoğu-3 Bölgesini kullanabilir. Şirket
yöneticilerin VPC'leri internete bağlamasına izin verilmez.
Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. İnternet erişimini engellemek ve veri yerleşimi korumalarını uygulamak için AWS Control Tower'ı kullanın.
ap-northeast-3 dışındaki tüm AWS Bölgelerine erişimi reddedin.

B. İnternet erişimini engellemek için AWS WAF'taki kuralları kullanın. Aşağıdakiler hariç tüm AWS Bölgelerine erişimi reddet:
AWS hesap ayarlarında ap-northeast-3.

C. VPC'lerin çalışmasını engelleyen hizmet kontrol politikalarını (SCPS) yapılandırmak için AWS Organizasyonlarını kullanın.
internet erişimi kazanmak. Ap-northeast-3 dışındaki tüm AWS Bölgelerine erişimi reddedin.

D. 0.0.0.0/0'dan gelen tüm trafiği reddetmek amacıyla her VPC'de ağ ACL'si için bir giden kural oluşturun.
Aşağıdakiler dışındaki herhangi bir AWS Bölgesinin kullanımını önlemek amacıyla her kullanıcı için bir IAM politikası oluşturun:
ap-kuzeydoğu-3.

E. İnternet ağ geçitlerini tespit edip uyarmak ve yönetilen kuralları etkinleştirmek için AWS Config'i kullanın.
ap-northeast-3 dışında konuşlandırılan yeni kaynakları tespit edin ve uyarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** İnternet erişimini engellemek ve ap-northeast-3 hariç tüm AWS Bölgelerine erişimi reddetmek amacıyla veri yerleşimi korkuluklarını uygulamak için AWS Control Tower'ı kullanın. VPC'lerin internet erişimi kazanmasını engelleyen hizmet kontrol politikalarını (SCPS) yapılandırmak için AWS Organizasyonlarını kullanın. Ap-northeast-3 dışındaki tüm AWS Bölgelerine erişimi reddedin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 152
Bir şirket, yeni çalışanlara eğitim sağlamak için üç katmanlı bir web uygulaması kullanıyor.
Uygulamaya her gün yalnızca 12 saat erişim sağlanmaktadır. Şirket şu amaçlarla Amazon RDS kullanıyor:
MySQL DB örneği bilgileri depolamak ve maliyetleri en aza indirmek istiyor.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS Systems Manager Session Manager için bir IAM politikası yapılandırın. Şunun için bir IAM rolü oluşturun:
politika. Rolün güven ilişkisini güncelleyin. DB için otomatik başlatma ve durdurmayı ayarlayın
örnek.

B. Kullanıcılara, Redis'e erişme olanağı sağlayan bir Amazon ElastiCache for Redis önbellek kümesi oluşturun.
Veritabanı bulut sunucusu durdurulduğunda önbellekten alınan veriler. Veritabanı örneğinden sonra önbelleği geçersiz kılın
başlatıldı.

C. Bir Amazon EC2 bulut sunucusunu başlatın. Amazon RDS'ye erişim izni veren bir IAM rolü oluşturun.
Rolü EC2 örneğine ekleyin. EC2 örneğini başlatmak ve durdurmak için bir cron işi yapılandırın
İstenilen zamanlama.

D. Veritabanı bulut sunucusunu başlatmak ve durdurmak için AWS Lambda işlevleri oluşturun. Amazon EventBridge'i oluşturun
(Amazon CloudWatch Events) Lambda işlevlerini çağırmak için planlanmış kurallar. Yapılandır
Lambda, kurallar için olay hedefleri olarak işlev görür.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanı bulut sunucusunu başlatmak ve durdurmak için AWS Lambda işlevleri oluşturun. Lambda işlevlerini çağırmak için Amazon EventBridge (Amazon CloudWatch Events) planlanmış kuralları oluşturun. Lambda işlevlerini kurallar için olay hedefleri olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 153
Bir şirket, popüler şarkıların kliplerinden oluşturulan zil seslerini satıyor. Zil seslerini içeren dosyalar
Amazon S3 Standard'ta depolanır ve boyutu en az 128 KB'dir. Şirketin milyonlarca
ancak 90 günden eski zil sesleri için indirme işlemi nadirdir. Şirketin tasarruf etmesi gerekiyor
En çok erişilen dosyaları kullanıcıları için hazır halde tutarken, depolama alanından tasarruf etmenizi sağlar.
Şirket bu gereklilikleri EN uygun maliyetle karşılamak için hangi eylemi gerçekleştirmelidir?

A. Başlangıç depolama katmanı için S3 Standart-Sıklıksız Erişim (S3 Standart-IA) depolamayı yapılandırın
nesneler.

B. Dosyaları S3 Intelligent-Tiering'e taşıyın ve nesneleri daha ucuz bir konuma taşıyacak şekilde yapılandırın.
90 gün sonra depolama katmanı.

C. Nesneleri yönetmek ve bunları S3 Standart-Nadir Erişime taşımak için S3 envanterini yapılandırın
(S3 Standart-1A) 90 gün sonra.

D. Nesneleri S3 Standard'tan S3'e taşıyan bir S3 Yaşam Döngüsü politikası uygulayın
90 gün sonra Standart-Sıklık Erişimi (S3 Standart-1A).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Nesneleri 90 gün sonra S3 Standard'tan S3 Standard-Infrequent Access'e (S3 Standard-1A) taşıyan bir S3 Yaşam Döngüsü ilkesi uygulayın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 154
Bir şirketin tıbbi bir deneyin sonuçlarını Amazon S3 deposuna kaydetmesi gerekiyor.
veri havuzu birkaç bilim insanının yeni dosyalar eklemesine izin vermeli ve diğer tüm kullanıcıların
salt okunur erişim. Hiçbir kullanıcı, depodaki herhangi bir dosyayı değiştirme veya silme olanağına sahip değildir.
Şirket, her dosyayı oluşturulduktan sonra en az 1 yıl süreyle veri deposunda tutmalıdır.
tarih.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 Object Lock'u 1 yıllık yasal bekletmeyle yönetişim modunda kullanın.

B. S3 Object Lock'u 365 günlük saklama süresiyle uyumluluk modunda kullanın.

C. Tüm kullanıcıların S3 klasöründeki nesneleri silmesini veya değiştirmesini kısıtlamak için bir IAM rolü kullanın. Bir kullanın
Yalnızca IAM rolüne izin veren S3 paket politikası.

D. S3 klasörünü, her nesne eklendiğinde bir AWS Lambda işlevini çağıracak şekilde yapılandırın.
Değiştirilen nesnelerin kaydedilebilmesi için kaydedilen nesnenin karma değerini izleyecek işlevi yapılandırın
buna göre işaretlenmiştir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 Object Lock'u 365 günlük saklama süresiyle uyumluluk modunda kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 155
Büyük bir medya şirketi AWS'de bir web uygulaması barındırıyor. Şirket önbelleğe almaya başlamak istiyor
gizli medya dosyaları, böylece dünyanın her yerindeki kullanıcılar dosyalara güvenilir erişime sahip olacak.
içerik Amazon S3 klasörlerinde depolanır. Şirketin içeriği hızlı bir şekilde teslim etmesi,
Taleplerin coğrafi olarak nereden kaynaklandığına bakılmaksızın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 klasörlerini web uygulamasına bağlamak için AWS DataSync'i kullanın.

B. S3 klasörlerini web uygulamasına bağlamak için AWS Global Accelerator'ı dağıtın.

C. S3 paketlerini CloudFront uç sunucularına bağlamak için Amazon CloudFront'u dağıtın.

D. S3 klasörlerini web'e bağlamak için Amazon Simple Queue Service'i (Amazon SQS) kullanın
uygulama.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** S3 paketlerini CloudFront uç sunucularına bağlamak için Amazon CloudFront'u dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 156
Bir şirket farklı veritabanlarından gelen toplu veriler üretir. Şirket aynı zamanda
ağ sensörlerinden ve uygulama API'lerinden canlı akış verileri üretir. Şirketin ihtiyacı var
iş analitiği için tüm verileri tek bir yerde birleştirin. Şirketin işlemleri yapması gerekiyor
gelen verileri toplayın ve ardından verileri farklı Amazon S3 klasörlerine yerleştirin. Takımlar daha sonra yarışacak
Tek seferlik sorgular yapın ve temel performansı göstermek için verileri bir iş zekası aracına aktarın
göstergeler (KPI'lar).
Hangi adım kombinasyonu bu gereksinimleri EN AZ operasyonel giderle karşılayacaktır?
(İki tane seçin.)

C. Tek seferlik sorgular için Amazon Athena'yı kullanın. Kontrol panelleri oluşturmak için Amazon QuickSight'ı kullanın.
KPI'lar.

B. Tek seferlik sorgular için Amazon Kinesis Data Analytics'i kullanın. Oluşturmak için Amazon QuickSight'ı kullanın
KPI'lar için kontrol panelleri.

C. Bireysel kayıtları veritabanlarından bir yere taşımak için özel AWS Lambda işlevleri oluşturun.
Amazon Redshift kümesi.

D. Verileri JSON formatına dönüştürmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi kullanın.
Verileri birden çok Amazon OpenSearch Hizmetine (Amazon Elasticsearch Hizmeti) yükleyin
kümeler.

E. Bir veri gölüne alınabilecek verileri belirlemek için AWS Lake Formation'daki planları kullanın.
Kaynağı taramak, verileri çıkarmak ve verileri Apache'deki Amazon S3'e yüklemek için AWS Glue'yu kullanın
Parke formatı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** Tek seferlik sorgular için Amazon Athena'yı kullanın. KPI'lara yönelik kontrol panelleri oluşturmak için Amazon QuickSight'ı kullanın. Bir veri gölüne alınabilecek verileri belirlemek için AWS Lake Formation'daki planları kullanın. Kaynağı taramak, verileri çıkarmak ve verileri Amazon S3'e Apache Parquet formatında yüklemek için AWS Glue'yu kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 157
Bir şirket, verileri Amazon Aurora PostgreSQL veritabanı kümesinde depoluyor. Şirketin saklaması gerekiyor
tüm veriler 5 yıl süreyle saklanmalı ve 5 yıl sonra tüm veriler silinmelidir. Şirketin ayrıca
Veritabanında gerçekleştirilen eylemlerin denetim günlüklerini süresiz olarak saklayın. Şu anda,
şirketin Aurora için yapılandırılmış otomatik yedeklemeleri var.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Veritabanı kümesinin manuel anlık görüntüsünü alın.

B. Otomatik yedeklemeler için bir yaşam döngüsü politikası oluşturun.

C. Otomatik yedekleme saklamayı 5 yıl boyunca yapılandırın.

D. Veritabanı kümesi için bir Amazon CloudWatch Logs dışa aktarımını yapılandırın.

E. Yedeklemeleri almak ve yedekleri 5 yıl boyunca saklamak için AWS Backup'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E`
> - **Önerilen Çözüm:** Veritabanı kümesi için bir Amazon CloudWatch Logs dışa aktarımını yapılandırın. Yedeklemeleri almak ve yedekleri 5 yıl boyunca saklamak için AWS Backup'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 158
Bir çözüm mimarı, yaklaşan bir müzik etkinliği için web sitesini optimize ediyor. Videoları
performanslar gerçek zamanlı olarak yayınlanacak ve daha sonra talep üzerine sunulacak. Olay
küresel bir çevrimiçi kitleyi çekmesi bekleniyor.
Hangi hizmet hem gerçek zamanlı hem de isteğe bağlı akışın performansını artıracak?

A. Amazon CloudFront

B. AWS Küresel Hızlandırıcı

C. Amazon Rotası 53

D. Amazon S3 Aktarım Hızlandırması

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon CloudFront
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 159
Bir şirket, Amazon API kullanan, herkese açık, sunucusuz bir uygulama çalıştırıyor
Ağ Geçidi ve AWS Lambda. Sahte istekler nedeniyle uygulamanın trafiği yakın zamanda arttı
botnet'lerden.
Yetkisiz kullanıcılardan gelen istekleri engellemek için bir çözüm mimarının hangi adımları atması gerekir?
(İki tane seçin.)

A. Yalnızca gerçek kullanıcılarla paylaşılan bir API anahtarıyla bir kullanım planı oluşturun.

B. Sahte IP adreslerinden gelen istekleri yok saymak için mantığı Lambda işlevine entegre edin.

C. Kötü amaçlı istekleri hedeflemek ve bunları filtrelemek için eylemleri tetiklemek için bir AWS WAF kuralı uygulayın.

D. Mevcut genel API'yi özel bir API'ye dönüştürün. Kullanıcıları yönlendirmek için DNS kayıtlarını güncelleyin
yeni API uç noktası.

E. API'ye erişmeye çalışan her kullanıcı için bir IAM rolü oluşturun. Bir kullanıcı rolü üstlenecek
API çağrısı yaparken.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Yalnızca gerçek kullanıcılarla paylaşılan bir API anahtarıyla bir kullanım planı oluşturun. Kötü amaçlı istekleri hedeflemek ve bunları filtrelemek için eylemleri tetiklemek için bir AWS WAF kuralı uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 160
Bir e-ticaret şirketi, analiz uygulamasını AWS Cloud'da barındırıyor. Uygulama
her ay yaklaşık 300 MB veri üretir. Veriler JSON formatında saklanır. şirket
verileri yedeklemek için bir olağanüstü durum kurtarma çözümü değerlendiriyor. Veriler erişilebilir olmalıdır
gerekiyorsa milisaniye kadar saklanmalı ve veriler 30 gün süreyle saklanmalıdır.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Amazon OpenSearch Hizmeti (Amazon Elasticsearch Hizmeti)

B. Amazon S3 Buzulu

C. Amazon S3 Standardı

D. PostgreSQL için Amazon RDS

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon S3 Standardı
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 161
Bir şirketin JSON belgelerini işleyen ve çıktısını veren küçük bir Python uygulaması vardır.
sonuçları şirket içi bir SQL veritabanına aktarır. Uygulama her gün binlerce kez çalıştırılıyor.
şirket uygulamayı AWS Cloud'a taşımak istiyor. Şirketin son derece ihtiyacı var
ölçeklenebilirliği en üst düzeye çıkaran ve operasyonel ek yükü en aza indiren mevcut çözüm.
Bu gereksinimleri hangi çözüm karşılayacak?

A. JSON belgelerini bir Amazon S3 klasörüne yerleştirin. Python kodunu birden fazla Amazon'da çalıştırın
Belgeleri işlemek için EC2 bulut sunucuları. Sonuçları bir Amazon Aurora DB kümesinde saklayın.

B. JSON belgelerini bir Amazon S3 klasörüne yerleştirin. Aşağıdakileri sağlayan bir AWS Lambda işlevi oluşturun:
belgeleri S3 klasörüne ulaştıklarında işlemek için Python kodunu çalıştırır. Sonuçları saklayın
Amazon Aurora DB kümesinde.

C. JSON belgelerini bir Amazon Elastic Block Store (Amazon EBS) birimine yerleştirin. Şunu kullanın:
Birimi birden fazla Amazon EC2 bulut sunucusuna eklemek için EBS Multi-Attach özelliği. Python'u çalıştırın
Belgeleri işlemek için EC2 bulut sunucularındaki kodu kullanın. Sonuçları bir Amazon RDS veritabanında saklayın
örnek.

D. JSON belgelerini bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna şu şekilde yerleştirin:
mesajlar. Python kodunu bir Amazon Elastic Container Service'te konteyner olarak dağıtma
Amazon EC2 başlatma türüyle yapılandırılmış (Amazon ECS) kümesi. Konteyneri şunun için kullanın:
SQS mesajlarını işleyin. Sonuçları bir Amazon RDS DB örneğinde saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** JSON belgelerini bir Amazon S3 klasörüne yerleştirin. Belgeleri S3 klasörüne ulaştıklarında işlemek için Python kodunu çalıştıran bir AWS Lambda işlevi oluşturun. Sonuçları bir Amazon Aurora DB kümesinde saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 162
Bir şirket, finansal amaçlar için AWS'deki yüksek performanslı bilgi işlem (HPC) altyapısını kullanmak istiyor
risk modellemesi. Şirketin HPC iş yükleri Linux üzerinde çalışıyor. Her HPC iş akışı şu şekilde çalışır:
yüzlerce Amazon EC2 Spot Bulut Sunucusu kısa ömürlüdür ve binlerce çıktı dosyası oluşturur
bunlar sonuçta analizler ve gelecekte uzun vadeli kullanım için kalıcı depolamada depolanır.
Şirket, şirket içi verilerin kopyalanmasına izin veren bir bulut depolama çözümü arıyor
Verilerin tüm EC2 bulut sunucuları tarafından işlenmeye hazır hale getirilmesi için uzun vadeli kalıcı depolama.
Çözüm aynı zamanda kalıcı depolamayla entegre edilmiş yüksek performanslı bir dosya sistemi olmalıdır.
veri kümelerini ve çıktı dosyalarını okumak ve yazmak için.
AWS hizmetlerinin hangi kombinasyonu bu gereksinimleri karşılıyor?

A. Amazon S3 ile entegre Lustre için Amazon FSx

B. Amazon S3 ile entegre Windows Dosya Sunucusu için Amazon FSx

C. Amazon S3 Glacier, Amazon Elastic Block Store (Amazon EBS) ile entegre edildi

D. Amazon Elastic Block Store ile entegre edilmiş VPC uç noktasına sahip Amazon S3 klasörü
(Amazon EBS) Genel Amaçlı SSD (gp2) birimi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3 ile entegre Lustre için Amazon FSx
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 163
Bir şirket tesislerinde konteynerli bir uygulama geliştiriyor ve uygulamayı taşımaya karar veriyor.
AWS'ye başvuru. Uygulama, kullanıma sunulduktan kısa süre sonra binlerce kullanıcıya sahip olacak.
Şirket, konteynerlerin dağıtımını geniş ölçekte nasıl yöneteceğinden emin değil. Şirketin ihtiyacı var
konteynerli uygulamayı en aza indiren yüksek düzeyde kullanılabilir bir mimaride dağıtmak için
operasyonel ek yük.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Container görüntülerini bir Amazon Elastic Container Registry (Amazon ECR) deposunda saklayın.
AWS Fargate lansmanıyla birlikte bir Amazon Elastic Container Service (Amazon ECS) kümesi kullanın
kapsayıcıları çalıştırmak için yazın. Talebe göre otomatik olarak ölçeklendirmek için hedef izlemeyi kullanın.

B. Container görüntülerini bir Amazon Elastic Container Registry (Amazon ECR) deposunda saklayın.
Amazon EC2 lansmanıyla birlikte bir Amazon Elastic Container Service (Amazon ECS) kümesi kullanın
kapsayıcıları çalıştırmak için yazın. Talebe göre otomatik olarak ölçeklendirmek için hedef izlemeyi kullanın.

C. Container görüntülerini Amazon EC2 bulut sunucusunda çalışan bir depoda saklayın. Çalıştır
Birden fazla Erişilebilirlik Alanına yayılmış EC2 bulut sunucularındaki kapsayıcılar. Şunu izleyin:
Amazon CloudWatch'ta ortalama CPU kullanımı. Gerektiğinde yeni EC2 bulut sunucularını başlatın.

D. Container görüntüsünü içeren bir Amazon EC2 Amazon Machine Image (AMI) oluşturun.
Birden fazla Erişilebilirlik Alanında Otomatik Ölçeklendirme grubunda EC2 bulut sunucularını başlatın. Bir kullanın
Ortalama CPU kullanımı azaldığında EC2 bulut sunucularının ölçeğini genişletmek için Amazon CloudWatch alarmı
eşik ihlal edildi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Container görüntülerini bir Amazon Elastic Container Registry (Amazon ECR) deposunda saklayın. Konteynerleri çalıştırmak için AWS Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi kullanın. Talebe göre otomatik olarak ölçeklendirmek için hedef izlemeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 164
Bir şirketin iki uygulaması vardır: yüklenecek mesajları gönderen bir gönderen uygulaması
işlenen ve yük içeren mesajları almayı amaçlayan bir işleme uygulaması.
şirket, ikisi arasındaki mesajları yönetmek için bir AWS hizmeti uygulamak istiyor
uygulamalar. Gönderen uygulaması saatte yaklaşık 1.000 mesaj gönderebilmektedir. Mesajlar
İşleme alınması 2 gün kadar sürebilir: İletiler işlenemezse, saklanmaları gerekir.
kalan mesajların işlenmesini etkilemeyeceklerini.
Hangi çözüm bu gereksinimleri karşılıyor ve operasyonel açıdan EN verimli olanıdır?

A. Redis veritabanını çalıştıran bir Amazon EC2 bulut sunucusu kurun. Her iki uygulamayı da kullanılacak şekilde yapılandırın
örnek. İletileri sırasıyla saklayın, işleyin ve silin.

B. Gönderen uygulamadan mesajları almak için Amazon Kinesis veri akışını kullanın.
İşleme uygulamasını Kinesis Client Library (KCL) ile entegre edin.

C. Gönderen ve işlemci uygulamalarını Amazon Simple Queue Service ile entegre edin
(Amazon SQS) kuyruğu. Başarısız olan iletileri toplamak için bir teslim edilmeyen ileti kuyruğu yapılandırın
süreç.

D. İşleme uygulamasını bir Amazon Basit Bildirim Hizmetine (Amazon SNS) abone olun
İşlenecek bildirimlerin alınacağı konu. SNS konusuna yazmak için gönderen uygulamasını entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Gönderen ve işlemci uygulamalarını bir Amazon Simple Queue Service (Amazon SQS) kuyruğuyla entegre edin. İşlenemeyen iletileri toplamak için bir teslim edilmeyen ileti kuyruğu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 165
Bir çözüm mimarı, Amazon S3 ile Amazon CloudFront'u kullanan bir çözüm tasarlamalıdır
Statik bir web sitesini depolamak için Origin. Şirketin güvenlik politikası, tüm web sitesi trafiğinin
AWS WAF tarafından denetlendi.
Çözüm mimarı bu gereksinimlere nasıl uymalıdır?

A. AWS WAF Amazon'dan gelen istekleri kabul etmek için bir S3 grubu politikası yapılandırın
Yalnızca Kaynak Adı (ARN).

B. Amazon CloudFront'u, gelen tüm istekleri talep etmeden önce AWS WAF'a iletecek şekilde yapılandırın
S3 kaynağından içerik.

C. Amazon CloudFront IP adreslerinin Amazon S3'e erişmesine izin veren bir güvenlik grubu yapılandırın
sadece. AWS WAF'ı CloudFront ile ilişkilendirin.

D. Amazon CloudFront ve Amazon S3'ü kısıtlamak için bir kaynak erişim kimliği (OAI) kullanacak şekilde yapılandırın
S3 klasörüne erişim. Dağıtımda AWS WAF'ı etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon CloudFront ve Amazon S3'ü, S3 klasörüne erişimi kısıtlamak amacıyla bir kaynak erişim kimliği (OAI) kullanacak şekilde yapılandırın. Dağıtımda AWS WAF'ı etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 166
Küresel bir etkinliğin organizatörleri, günlük raporları statik HTML sayfaları olarak çevrimiçi hale getirmek istiyor. Sayfalar
dünya çapındaki kullanıcılardan milyonlarca görüntüleme alması bekleniyor. Dosyalar bir yerde saklanır
Amazon S3 kovası. Bir çözüm mimarından verimli ve etkili bir çözüm tasarlaması istendi.
çözüm.
Çözüm mimarının bunu başarmak için hangi eylemi gerçekleştirmesi gerekir?

A. Dosyalar için önceden imzalanmış URL'ler oluşturun.

B. Bölgeler arası çoğaltmayı tüm Bölgelere kullanın.

C. Amazon Route 53'ün coğrafi yakınlık özelliğini kullanın.

D. Amazon CloudFront'u S3 klasörüyle birlikte kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon CloudFront'u S3 paketini başlangıç ​​noktası olarak kullanarak kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 167
Bir şirket, Amazon EC2 bulut sunucularından oluşan bir filo üzerinde bir üretim uygulaması çalıştırıyor. Uygulama
Amazon SQS kuyruğundaki verileri okur ve mesajları paralel olarak işler.
mesaj hacmi tahmin edilemez ve sıklıkla aralıklı trafiğe sahiptir. Bu uygulama
Mesajları herhangi bir kesinti olmadan sürekli olarak işleyin.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Gereken maksimum kapasiteyi karşılamak için Spot Bulut Sunucularını özel olarak kullanın.

B. Gereken maksimum kapasiteyi karşılamak için yalnızca Rezerve Edilmiş Bulut Sunucularını kullanın.

C. Temel kapasite için Rezerve Bulut Sunucularını kullanın ve ek işlemleri gerçekleştirmek için Spot Bulut Sunucularını kullanın
kapasite.

D. Temel kapasite için Rezerve Edilmiş Bulut Sunucularını kullanın ve işlemek için İsteğe Bağlı Bulut Sunucularını kullanın
ek kapasite.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Temel kapasite için Rezerve Bulut Sunucularını kullanın ve ek kapasiteyi yönetmek için Spot Bulut Sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 168
Bir güvenlik ekibi, ekibin tüm AWS'sindeki belirli hizmetlere veya eylemlere erişimi sınırlamak istiyor
hesaplar. AWS Organizasyonlarındaki tüm hesaplar büyük bir kuruluşa aittir. Çözüm mutlaka
ölçeklenebilir olmalı ve izinlerin korunabileceği tek bir nokta bulunmalıdır.
Bir çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Hizmetlere veya eylemlere erişim sağlamak için bir ACL oluşturun.

B. Hesaplara izin vermek ve bunu kullanıcı gruplarına eklemek için bir güvenlik grubu oluşturun.

C. Hizmetlere veya eylemlere erişimi reddetmek için her hesapta hesaplar arası roller oluşturun.

D. Hizmetlere erişimi reddetmek için kök kuruluş biriminde bir hizmet kontrol politikası oluşturun veya
eylemler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hizmetlere veya eylemlere erişimi reddetmek için kök kuruluş biriminde bir hizmet kontrol ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 169
Bir şirket, son dönemdeki web uygulamaları nedeniyle halka açık web uygulamasının güvenliği konusunda endişe duymaktadır.
saldırılar. Uygulama bir Uygulama Yük Dengeleyicisi (ALB) kullanır. Bir çözüm mimarının yapması gerekenler
uygulamaya yönelik DDoS saldırıları riskini azaltır.
Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. ALB'ye bir Amazon Inspector temsilcisi ekleyin.

B. Saldırıları önlemek için Amazon Macie'yi yapılandırın.

C. Saldırıları önlemek için AWS Shield Advanced'i etkinleştirin.

D. ALB'yi izlemek için Amazon GuardDuty'yi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Saldırıları önlemek için AWS Shield Advanced'i etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 170
Bir şirketin web uygulaması Amazon EC2 bulut sunucularında Uygulama Yükü arkasında çalışıyor
Dengeleyici. Şirket yakın zamanda politikasını değiştirdi; bu da artık uygulamanın güncellenmesini gerektiriyor.
yalnızca belirli bir ülkeden erişilir.
Bu gereksinimi hangi konfigürasyon karşılayacak?

A. EC2 bulut sunucuları için güvenlik grubunu yapılandırın.

B. Application Load Balancer'da güvenlik grubunu yapılandırın.

C. Bir VPC'deki Application Load Balancer'da AWS WAF'ı yapılandırın.

D. EC2 bulut sunucularını içeren alt ağ için ağ ACL'sini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS WAF'ı bir VPC'deki Application Load Balancer'da yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 171
Bir şirket, kullanıcılarına vergi hesaplamalarına ilişkin sorguları otomatik hale getiren bir API sağlar.
ürün fiyatları. Şirket tatil sezonunda daha fazla sayıda sorguyla karşılaşıyor
yalnızca bu daha yavaş yanıt sürelerine neden olur. Bir çözüm mimarının aşağıdaki özelliklere sahip bir çözüm tasarlaması gerekir:
ölçeklenebilir ve elastik.
Çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Amazon EC2 bulut sunucusunda barındırılan bir API sağlayın. EC2 örneği gerekli işlemi gerçekleştirir
API isteği yapıldığında hesaplamalar.

B. Amazon API Gateway'i kullanarak öğe adlarını kabul eden bir REST API tasarlayın. API Ağ Geçidi
vergi hesaplamaları için öğe adlarını AWS Lambda'ya aktarır.

C. Arkasında iki Amazon EC2 bulut sunucusu bulunan bir Application Load Balancer oluşturun. EC2
örnekler alınan öğe adlarına göre vergiyi hesaplayacaktır.

D. Amazon API Gateway'i kullanarak, bir sunucuda barındırılan API'ye bağlanan bir REST API tasarlayın.
Amazon EC2 örneği. API Gateway, öğe adlarını kabul eder ve EC2 örneğine iletir.
vergi hesaplamaları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Öğe adlarını kabul eden Amazon API Gateway'i kullanarak bir REST API tasarlayın. API Gateway, vergi hesaplamaları için öğe adlarını AWS Lambda'ya aktarır.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 172
Bir çözüm mimarı, bir uygulama için yeni bir Amazon CloudFront dağıtımı oluşturuyor. Bazıları
Kullanıcılar tarafından gönderilen bilgilerin tamamı hassastır. Uygulama HTTPS kullanıyor ancak
başka bir güvenlik katmanı. Hassas bilgiler tüm süreç boyunca korunmalıdır.
uygulama yığını ve bilgilere erişim belirli uygulamalarla sınırlandırılmalıdır.
Çözüm mimarı hangi eylemi gerçekleştirmelidir?

A. CloudFront imzalı bir URL yapılandırın.

B. CloudFront imzalı bir çerez yapılandırın.

C. CloudFront alan düzeyinde şifreleme profilini yapılandırın.

D. CloudFront'u yapılandırın ve Origin Protokol Politikası ayarını Görüntüleyici için Yalnızca HTTPS olarak ayarlayın
Protokol Politikası.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** CloudFront alan düzeyinde şifreleme profili yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 173
Bir oyun şirketi, AWS'de tarayıcı tabanlı bir uygulamaya ev sahipliği yapıyor. Uygulamayı kullananlar
Amazon S3'te depolanan çok sayıda video ve görseli tüketin. Bu içerik şu
tüm kullanıcılar için aynıdır.
Uygulamanın popülaritesi arttı ve dünya çapında milyonlarca kullanıcı bunlara erişiyor
medya dosyaları. Şirket, bilgisayardaki yükü azaltırken dosyaları da kullanıcılara sunmak istiyor.
kökeni.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Web sunucularının önüne bir AWS Global Accelerator hızlandırıcısı dağıtın.

B. S3 kümesinin önüne bir Amazon CloudFront web dağıtımı dağıtın.

C. Web sunucularının önünde bir Amazon ElastiCache for Redis örneğini dağıtın.

D. Web sunucularının önünde bir Amazon ElastiCache for Memcached örneğini dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 klasörünün önünde bir Amazon CloudFront web dağıtımı dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 174
Bir şirketin Amazon EC2'de altı ön uç web sunucusunu çalıştıran çok katmanlı bir uygulaması var
Application Load Balancer'ın (ALB) arkasında tek bir Erişilebilirlik Alanında yer alan Otomatik Ölçeklendirme grubu. bir
Çözüm mimarının, altyapıyı değiştirmeden yüksek düzeyde kullanılabilir olacak şekilde değiştirmesi gerekiyor.
uygulama.
Çözüm mimarı yüksek kullanılabilirlik sağlayan hangi mimariyi seçmelidir?

A. İki Bölgenin her birinde üç örnek kullanan bir Otomatik Ölçeklendirme grubu oluşturun.

B. Otomatik Ölçeklendirme grubunu, iki Erişilebilirlik Alanının her birinde üç bulut sunucusu kullanacak şekilde değiştirin.

C. Başka bir platformda hızlı bir şekilde daha fazla örnek oluşturmak için kullanılabilecek bir Otomatik Ölçeklendirme şablonu oluşturun.
Bölge.

D. Dengeyi sağlamak için ALB'yi Amazon EC2 bulut sunucularının önünde bir kez deneme yapılandırmasında değiştirin
web katmanına gelen trafik.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunu, iki Erişilebilirlik Alanının her birinde üç örnek kullanacak şekilde değiştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 175
Bir e-ticaret şirketinin Amazon API Gateway'i kullanan bir sipariş işleme uygulaması var
ve bir AWS Lambda işlevi. Uygulama, verileri Amazon Aurora PostgreSQL'de depolar
veritabanı. Yakın zamanda gerçekleşen bir satış etkinliği sırasında müşteri siparişlerinde ani bir artış meydana geldi. Bazıları
müşteriler zaman aşımları yaşadı ve uygulama bu müşterilerin siparişlerini işleme koymadı
müşteriler.
Bir çözüm mimarı, CPU kullanımı ve bellek kullanımının yüksek olduğunu belirledi.
Çok sayıda açık bağlantı nedeniyle veritabanı. Çözüm mimarının ihtiyaç duyduğu çözüm
uygulamada mümkün olan en az değişikliği yaparken zaman aşımı hatalarını önleyin.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevi için sağlanan eşzamanlılığı yapılandırın. Veritabanını global olacak şekilde değiştirin
birden fazla AWS Bölgesindeki veritabanı.

B. Veritabanına yönelik bir proxy oluşturmak için Amazon RDS Proxy'yi kullanın. Kullanılacak Lambda işlevini değiştirin
veritabanı uç noktası yerine RDS Proxy uç noktası.

C. Farklı bir AWS Bölgesindeki veritabanı için bir okuma kopyası oluşturun. Sorgu dizesi parametrelerini kullanma
Trafiği okuma kopyasına yönlendirmek için API Ağ Geçidinde.

D. AWS Veritabanını kullanarak verileri Aurora PostgreSQL'den Amazon DynamoDB'ye taşıyın
Geçiş Hizmeti (AWS DMS). DynamoDB tablosunu kullanmak için Lambda işlevini değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanına yönelik bir proxy oluşturmak için Amazon RDS Proxy'yi kullanın. Lambda işlevini, veritabanı uç noktası yerine RDS Proxy uç noktasını kullanacak şekilde değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 176
Bir uygulama, özel alt ağlardaki Amazon EC2 bulut sunucularında çalışır. Uygulamanın ihtiyacı var
bir Amazon DynamoDB tablosuna erişin.
Trafiğin ayrılmamasını sağlarken tabloya erişmenin EN güvenli yolu nedir?
AWS ağı mı?

A. DynamoDB için bir VPC uç noktası kullanın.

B. Genel bir alt ağda bir NAT ağ geçidi kullanın.

C. Özel bir alt ağda bir NAT örneği kullanın.

D. VPC'ye bağlı internet ağ geçidini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** DynamoDB için bir VPC uç noktası kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 177
Bir eğlence şirketi, medya meta verilerini depolamak için Amazon DynamoDB'yi kullanıyor.
uygulama yoğun olarak okunuyor ve gecikmeler yaşanıyor. Şirketin çalışacak personeli yok
ek operasyonel yükü ele almak ve performans verimliliğini artırmak için ihtiyaç duymak
Uygulamayı yeniden yapılandırmadan DynamoDB.
Bir çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

A. Redis için Amazon ElastiCache'i kullanın.

B. Amazon DynamoDB Accelerator'ı (DAX) kullanın.

C. DynamoDB global tablolarını kullanarak verileri çoğaltın.

D. Otomatik Bulma etkinken Memcached için Amazon ElastiCache'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon DynamoDB Accelerator'ı (DAX) kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon DynamoDB Hızlandırıcı (DAX):** DynamoDB için özel geliştirilmiş bellek içi önbellek kümesidir; yoğun okuma yapan uygulamalarda yanıt süresini milisaniyelerden mikrosaniyelere indirir.

---

---

Soru 178
Bir şirketin altyapısı Amazon EC2 bulut sunucularından ve bir Amazon RDS DB bulut sunucusundan oluşur
tek bir AWS Bölgesinde. Şirket, verilerini ayrı bir Bölgede yedeklemek istiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. EC2 yedeklerini ve RDS yedeklerini ayrı Bölgeye kopyalamak için AWS Backup'ı kullanın.

B. EC2 yedeklerini ve RDS yedeklerini kopyalamak için Amazon Data Lifecycle Manager'ı (Amazon DLM) kullanın
ayrı Bölgeye.

C. EC2 bulut sunucularının Amazon Machine Image'larını (AMI'ler) oluşturun. AMI'leri ayrı bir yere kopyalayın
Bölge. Ayrı Bölgede RDS Veritabanı bulut sunucusu için bir okuma kopyası oluşturun.

D. Amazon Elastic Block Store (Amazon EBS) anlık yedeklerini oluşturun. EBS anlık görüntülerini şuraya kopyalayın:
ayrı Bölge. RDS anlık görüntüleri oluşturun. RDS anlık yedeklerini Amazon S3'e aktarın. S3'ü yapılandırın
Ayrı Bölgeye Bölgeler Arası Çoğaltma (CRR).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 yedeklerini ve RDS yedeklerini ayrı Bölgeye kopyalamak için AWS Backup'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 179
Bir çözüm mimarının, veritabanı kullanıcı adını ve parolasını güvenli bir şekilde saklaması gerekir.
uygulama bir Amazon RDS DB bulut sunucusuna erişmek için kullanır. Erişim sağlayan uygulama
veritabanı bir Amazon EC2 örneğinde çalışır. Çözüm mimarı güvenli bir ortam yaratmak istiyor
AWS Systems Manager Parametre Deposu'ndaki parametre.
Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Parametre Deposu parametresine okuma erişimi olan bir IAM rolü oluşturun. Şifre Çözmeye İzin Ver
şifrelemek için kullanılan bir AWS Key Management Service (AWS KMS) anahtarına erişim
parametre. Bu IAM rolünü EC2 örneğine atayın.

B. Parametre Deposu parametresine okuma erişimine izin veren bir IAM politikası oluşturun. Şifre Çözmeye İzin Ver
şifrelemek için kullanılan bir AWS Key Management Service (AWS KMS) anahtarına erişim
parametre. Bu IAM politikasını EC2 örneğine atayın.

C. Parametre Deposu parametresi ile EC2 arasında bir IAM güven ilişkisi oluşturun
örnek. Güven politikasında Amazon RDS'yi sorumlu olarak belirtin.

D. Veritabanı bulut sunucusu ile EC2 bulut sunucusu arasında bir IAM güven ilişkisi oluşturun. Belirt
Güven politikasında prensip olarak Sistem Yöneticisi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Parametre Deposu parametresine okuma erişimi olan bir IAM rolü oluşturun. Parametreyi şifrelemek için kullanılan bir AWS Key Management Service (AWS KMS) anahtarına Şifre Çözme erişimine izin verin. Bu IAM rolünü EC2 örneğine atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Systems Manager Parameter Store:** Yapılandırma parametreleri, ortam değişkenleri ve şifreli dizgiler için hiyerarşik depolama sunar; standart (ücretsiz) ve gelişmiş katman seçenekleri bulunur.

---

---

Soru 180
Bir şirket, API'ler tarafından desteklenen bir bulut iletişim platformu tasarlıyor. Uygulama
Amazon EC2 bulut sunucularında bir Ağ Yük Dengeleyicisinin (NLB) arkasında barındırılır. Şirket kullanıyor
Amazon API Gateway, harici kullanıcılara API'ler aracılığıyla uygulamaya erişim olanağı sağlar.
şirket, platformu SQL enjeksiyonu gibi web istismarlarına karşı korumak istiyor ve aynı zamanda
Büyük, karmaşık DDoS saldırılarını tespit edin ve azaltın.
Hangi çözüm kombinasyonu EN ÇOK korumayı sağlar? (İki tane seçin.)

A. NLB'yi korumak için AWS WAF'ı kullanın.

B. NLB ile AWS Shield Advanced'i kullanın.

C. Amazon API Gateway'i korumak için AWS WAF'ı kullanın.

D. Amazon GuardDuty'yi AWS Shield Standard ile kullanın

E. AWS Shield Standard'ı Amazon API Gateway ile kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** AWS Shield Advanced'i NLB ile kullanın. Amazon API Gateway'i korumak için AWS WAF'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 181
Bir şirketin Amazon EC2 bulut sunucularında çalışan eski bir veri işleme uygulaması var. Veri
sırayla işlenir, ancak sonuçların sırası önemli değildir. Uygulama bir kullanır
monolitik mimari. Şirketin uygulamayı gereksinimleri karşılayacak şekilde ölçeklendirmesinin tek yolu
talebin artması örneklerin boyutunun artmasıdır.
Şirketin geliştiricileri, uygulamayı bir mikro hizmet kullanacak şekilde yeniden yazmaya karar verdi
Amazon Elastic Container Service (Amazon ECS) üzerindeki mimari.
Bir çözüm mimarı mikro hizmetler arasındaki iletişim için ne önermelidir?

A. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Verilere kod ekleme
üreticiler ve kuyruğa veri gönderir. Veri tüketicilerine veriyi işlemek için kod ekleyin
kuyruk.

B. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Verilere kod ekleme
üreticiler ve konuya ilişkin bildirimler yayınlayın. Abone olunacak veri tüketicilerine kod ekleyin
konu.

C. Mesajları iletmek için bir AWS Lambda işlevi oluşturun. Aramak için veri üreticilerine kod ekleyin
Bir veri nesnesiyle Lambda işlevi. Bir veri nesnesi almak için veri tüketicilerine kod ekleyin.
Lambda fonksiyonundan geçirilir.

D. Bir Amazon DynamoDB tablosu oluşturun. DynamoDB Akışlarını etkinleştirin. Verilere kod ekleme
üreticilerin tabloya veri eklemesi. DynamoDB'yi kullanmak için veri tüketicilerine kod ekleyin
Yeni tablo girişlerini algılamak ve verileri almak için Streams API'si.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Veri üreticilerine kod ekleyin ve verileri kuyruğa gönderin. Kuyruktaki verileri işlemek için veri tüketicilerine kod ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 182
Bir şirket MySQL veritabanını şirket içinden AWS'ye taşımak istiyor. şirket
yakın zamanda işi önemli ölçüde etkileyen bir veritabanı kesintisi yaşadı. Bunu sağlamak için
bir daha gerçekleşmezse şirket, AWS'de veri tabanını en aza indiren güvenilir bir veritabanı çözümü istiyor
veri kaybı ve her işlemin en az iki düğümde saklanması.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Üç düğümdeki üç düğüme eşzamanlı çoğaltmayla bir Amazon RDS veritabanı bulut sunucusu oluşturun
Erişilebilirlik Alanları.

B. Multi-AZ işlevselliği etkinleştirilmiş bir Amazon RDS MySQL Veritabanı bulut sunucusu oluşturun.
verileri eşzamanlı olarak çoğaltın.

C. Bir Amazon RDS MySQL Veritabanı bulut sunucusu oluşturun ve ardından ayrı bir AWS'de bir okuma kopyası oluşturun
Verileri eşzamanlı olarak çoğaltan bölge.

D. AWS Lambda'yı tetikleyen MySQL motoru yüklü bir Amazon EC2 bulut sunucusu oluşturun
verileri bir Amazon RDS MySQL veritabanı bulut sunucusuna eşzamanlı olarak kopyalama işlevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri eşzamanlı olarak çoğaltmak için Multi-AZ işlevselliği etkinleştirilmiş bir Amazon RDS MySQL veritabanı örneği oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 183
Bir şirket yeni bir dinamik sipariş sitesi oluşturuyor. Şirket sunucuyu küçültmek istiyor
bakım ve yama. Web sitesi yüksek düzeyde kullanılabilir olmalı ve okuma ve yazma ölçeklendirilmelidir
Kullanıcı talebindeki değişiklikleri karşılamak için mümkün olan en kısa sürede kapasite.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Statik içeriği Amazon S3'te barındırın. Amazon API Gateway'i kullanarak dinamik içerik barındırın ve
AWS Lambda. Veritabanı için isteğe bağlı kapasiteye sahip Amazon DynamoDB'yi kullanın. Yapılandır
Amazon CloudFront web sitesi içeriğini sunacak.

B. Statik içeriği Amazon S3'te barındırın. Amazon API Gateway'i kullanarak dinamik içerik barındırın ve
AWS Lambda. Veritabanı için Amazon Aurora'yı Aurora Auto Scaling ile birlikte kullanın. Amazon'u yapılandırın
Web sitesi içeriğini sunmak için CloudFront.

C. Tüm web sitesi içeriğini Amazon EC2 bulut sunucularında barındırın. Ölçeklemek için Otomatik Ölçeklendirme grubu oluşturun
EC2 örnekleri. Trafiği dağıtmak için Application Load Balancer kullanın. Amazon DynamoDB'yi kullanın
veritabanı için sağlanan yazma kapasitesi ile.

D. Tüm web sitesi içeriğini Amazon EC2 bulut sunucularında barındırın. Ölçeklemek için Otomatik Ölçeklendirme grubu oluşturun
EC2 örnekleri. Trafiği dağıtmak için Application Load Balancer kullanın. Amazon Aurora'yı şununla kullanın:
Veritabanı için Aurora Otomatik Ölçeklendirme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3'te statik içerik barındırın. Amazon API Gateway ve AWS Lambda'yı kullanarak dinamik içerik barındırın. Veritabanı için isteğe bağlı kapasiteye sahip Amazon DynamoDB'yi kullanın. Web sitesi içeriğini sunmak için Amazon CloudFront'u yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 184
Bir şirketin yazılım mühendisliği için kullanılan bir AWS hesabı var. AWS hesabının erişimi var
bir çift AWS Direct Connect bağlantısı aracılığıyla şirketin şirket içi veri merkezine. Hepsi
VPC olmayan trafik sanal özel ağ geçidine yönlendirilir.
Bir geliştirme ekibi yakın zamanda konsol aracılığıyla bir AWS Lambda işlevi oluşturdu.
geliştirme ekibinin, işlevin özel bir alt ağda çalışan bir veritabanına erişmesine izin vermesi gerekir
Şirketin veri merkezinde.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevini uygun güvenlik grubuyla VPC'de çalışacak şekilde yapılandırın.

B. AWS'den veri merkezine bir VPN bağlantısı kurun. Trafiği Lambda'dan yönlendirin
VPN aracılığıyla çalışır.

C. Lambda işlevinin şirket içi erişime erişmesine izin vermek için VPC'deki rota tablolarını güncelleyin
Direct Connect aracılığıyla veri merkezi.

D. Esnek bir IP adresi oluşturun. Trafiği Elastic aracılığıyla göndermek için Lambda işlevini yapılandırın
Elastik ağ arayüzü olmayan IP adresi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Lambda işlevini uygun güvenlik grubuyla VPC'de çalışacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 185
Bir şirket, Amazon ECS'yi kullanarak bir uygulama çalıştırıyor. Uygulama, yeniden boyutlandırılmış sürümler oluşturur
orijinal bir görüntü oluşturur ve ardından yeniden boyutlandırılan görüntüleri Amazon'da depolamak için Amazon S3 API çağrıları yapar
S3.
Bir çözüm mimarı, uygulamanın Amazon S3'e erişim iznine sahip olduğundan nasıl emin olabilir?

A. Amazon ECS'den okuma/yazma erişimine izin vermek için AWS IAM'deki S3 rolünü güncelleyin ve ardından
konteyneri yeniden başlatın.

B. S3 izinlerine sahip bir IAM rolü oluşturun ve ardından bu rolü, görevRoleArn olarak belirtin.
görev tanımı.

C. Amazon ECS'den Amazon S3'e erişime izin veren bir güvenlik grubu oluşturun ve
ECS kümesi tarafından kullanılan yapılandırmayı başlatın.

D. S3 izinlerine sahip bir IAM kullanıcısı oluşturun ve ardından Amazon EC2 bulut sunucularını yeniden başlatın.
Bu hesapla oturum açtığınızda ECS kümesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 izinlerine sahip bir IAM rolü oluşturun ve ardından bu rolü, görev tanımında TaskRoleArn olarak belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 186
Bir şirketin AWS'ye taşınması gereken Windows tabanlı bir uygulaması var. Uygulama
birden fazla Amazon EC2 Windows'a bağlı paylaşılan bir Windows dosya sisteminin kullanılmasını gerektirir
birden fazla Erişilebilirlik Alanında dağıtılan örnekler:
Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. AWS Storage Gateway'i birim ağ geçidi modunda yapılandırın. Sesi her birine bağlayın
Windows örneği.

B. Amazon FSx'i Windows Dosya Sunucusu için yapılandırın. Amazon FSx dosya sistemini her birine bağlayın
Windows örneği.

C. Amazon Elastic File System'i (Amazon EFS) kullanarak bir dosya sistemi yapılandırın. EFS'yi monte edin
her Windows örneğine dosya sistemi.

D. Gerekli boyutta bir Amazon Elastic Block Store (Amazon EBS) birimi yapılandırın. Ekle
her EC2 örneğini birime aktarır. Birim içindeki dosya sistemini her Windows'a bağlayın
örnek.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon FSx'i Windows Dosya Sunucusu için yapılandırın. Amazon FSx dosya sistemini her Windows örneğine bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 187
Bir şirket, yük dengeli bir ön cepheden oluşacak bir e-ticaret uygulaması geliştiriyor
end, konteyner tabanlı bir uygulama ve ilişkisel bir veritabanı. Bir çözüm mimarının yapması gerekenler
Mümkün olduğu kadar az manuel müdahaleyle çalışan, yüksek kullanılabilirliğe sahip bir çözüm yaratın.
Bu gereksinimleri hangi çözümler karşılıyor? (İki tane seçin.)

A. Multi-AZ modunda bir Amazon RDS DB bulut sunucusu oluşturun.

B. Başka bir Erişilebilirlik Alanında bir Amazon RDS DB bulut sunucusu ve bir veya daha fazla replika oluşturun.

C. Dinamik uygulama yükünü işlemek için Amazon EC2 bulut sunucusu tabanlı bir Docker kümesi oluşturun.

D. Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun
Dinamik uygulama yükünü işlemek için.

E. Amazon EC2 ile bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun
Dinamik uygulama yükünü işlemek için başlatma türü.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Multi-AZ modunda bir Amazon RDS DB bulut sunucusu oluşturun. Dinamik uygulama yükünü işlemek için Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 188
Bir şirket veri gölü olarak Amazon S3'ü kullanıyor. Şirketin kullanması gereken yeni bir ortağı var
Veri dosyalarını yüklemek için SFTP. Bir çözüm mimarının yüksek düzeyde kullanılabilir bir SFTP uygulaması gerekir
Operasyonel yükü en aza indiren çözüm.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Herkese açık olarak erişilebilen bir SFTP özellikli sunucuyu yapılandırmak için AWS Transfer Family'yi kullanın.
uç nokta. Hedef olarak S3 veri gölünü seçin.

B. Amazon S3 File Gateway'i SFTP sunucusu olarak kullanın. S3 Dosya Ağ Geçidi uç noktası URL'sini gösterin
yeni ortağa. S3 Dosya Ağ Geçidi uç noktasını yeni iş ortağıyla paylaşın.

C. Bir VPI'deki özel bir alt ağda bir Amazon EC2 bulut sunucusu başlatın. Yeni iş ortağına yükleme yapması talimatını verin
dosyaları bir VPN kullanarak EC2 örneğine aktarın. Dosyaları yüklemek için EC2 örneğinde bir cron iş komut dosyası çalıştırın
S3 veri gölüne.

D. Amazon EC2 bulut sunucularını VPC'deki özel bir alt ağda başlatın. Ağ Yük Dengeleyici Yerleştirme
(NLB) EC2 bulut sunucularının önünde. NLB için bir SFTP dinleyici bağlantı noktası oluşturun. NLB'yi paylaşın
yeni iş ortağıyla ana bilgisayar adı. Dosyaları sunucuya yüklemek için EC2 bulut sunucularında bir cron iş komut dosyası çalıştırın.
S3 veri gölü.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Herkese açık bir uç noktaya sahip SFTP özellikli bir sunucuyu yapılandırmak için AWS Transfer Family'yi kullanın. Hedef olarak S3 veri gölünü seçin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 189
Bir şirketin sözleşme belgelerini saklaması gerekir. Bir sözleşme 5 yıl süreyle geçerlidir. 5 yıl boyunca
Şirket, belgelerin üzerine yazılamamasını veya silinmemesini sağlamalıdır.
şirketin beklemedeki belgeleri şifrelemesi ve şifreleme anahtarlarını otomatik olarak döndürmesi gerekiyor
her yıl.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
EN AZ işletme gideri? (İki tane seçin.)

A. Belgeleri Amazon S3'te saklayın. Yönetişim modunda S3 Object Lock'u kullanın.

B. Belgeleri Amazon S3'te saklayın. S3 Object Lock'u uyumluluk modunda kullanın.

C. Amazon S3 tarafından yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın. Anahtarı yapılandır
rotasyon.

D. AWS Key Management Service (AWS KMS) müşterisiyle sunucu tarafı şifrelemeyi kullanın
yönetilen anahtarlar. Anahtar rotasyonunu yapılandırın.

E. AWS Key Management Service (AWS KMS) müşterisiyle sunucu tarafı şifrelemeyi kullanın
sağlanan (içe aktarılan) anahtarlar. Anahtar rotasyonunu yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Belgeleri Amazon S3'te saklayın. S3 Object Lock'u uyumluluk modunda kullanın. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtarlarla sunucu tarafı şifrelemeyi kullanın. Anahtar rotasyonunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 190
Bir şirketin Java ve PHP tabanlı bir web uygulaması var. Şirket taşınmayı planlıyor
uygulamayı şirket içinden AWS'ye aktarın. Şirketin yeni siteyi test etme becerisine ihtiyacı var
sıklıkla özellikler bulunur. Şirketin ayrıca yüksek düzeyde kullanılabilir ve yönetilen bir çözüme ihtiyacı var.
minimum operasyonel ek yük gerektirir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir Amazon S3 klasörü oluşturun. S3 paketinde statik web barındırmayı etkinleştirin. Statiği yükle
içeriği S3 kovasına aktarın. Tüm dinamik içeriği işlemek için AWS Lambda'yı kullanın.

B. Web uygulamasını bir AWS Elastic Beanstalk ortamına dağıtın. URL değiştirmeyi kullanın
Özellik testi için birden fazla Elastic Beanstalk ortamı arasında geçiş yapın.

C. Web uygulamasını Java ve PHP ile yapılandırılmış Amazon EC2 bulut sunucularına dağıtın.
Web sitesinin kullanılabilirliğini yönetmek için Otomatik Ölçeklendirme gruplarını ve Application Load Balancer'ı kullanın.

D. Web uygulamasını kapsayıcı hale getirin. Web uygulamasını Amazon EC2 bulut sunucularına dağıtın. Kullanım
içeren konteynerler arasındaki trafiği dinamik olarak yönlendirmek için AWS Yük Dengeleyici Denetleyicisi
test için yeni site özellikleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web uygulamasını bir AWS Elastic Beanstalk ortamına dağıtın. Özellik testi amacıyla birden fazla Elastic Beanstalk ortamı arasında geçiş yapmak için URL değiştirmeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 191
Bir şirketin müşteri bilgilerini Amazon RDS'de saklayan bir sipariş uygulaması vardır.
MySQL. Normal iş saatleri sırasında çalışanlar raporlama amacıyla tek seferlik sorgular çalıştırır.
Raporlama sorgularının uzun sürmesi nedeniyle sipariş işleme sırasında zaman aşımları yaşanıyor
koşma zamanı. Şirketin, çalışanları engellemeden molaları ortadan kaldırması gerekiyor.
sorguları gerçekleştirmek.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Okuma kopyası oluşturun. Raporlama sorgularını okuma kopyasına taşıyın.

B. Bir okuma kopyası oluşturun. Sipariş uygulamasını birincil veritabanı bulut sunucusuna ve
replika oku.

C. Sipariş uygulamasını isteğe bağlı kapasiteyle Amazon DynamoDB'ye taşıyın.

D. Raporlama sorgularını yoğun olmayan saatlere planlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir okuma kopyası oluşturun. Raporlama sorgularını okuma kopyasına taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 192
Bir hastane, geniş tarihi yazılı kayıt koleksiyonunun dijital kopyalarını oluşturmak istiyor.
Hastane her gün yüzlerce yeni belge eklemeye devam edecek. Hastanenin veri ekibi
belgeleri tarayacak ve belgeleri AWS Cloud'a yükleyecektir.
Bir çözüm mimarı, belgeleri analiz etmek, tıbbi verileri çıkarmak için bir çözüm uygulamalıdır.
bilgileri saklayabilir ve bir uygulamanın veriler üzerinde SQL sorguları çalıştırabilmesi için belgeleri saklayabilirsiniz.
Çözüm, ölçeklenebilirliği ve operasyonel verimliliği en üst düzeye çıkarmalıdır.
Çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Belge bilgilerini MySQL veritabanını çalıştıran bir Amazon EC2 bulut sunucusuna yazın.

B. Belge bilgilerini bir Amazon S3 klasörüne yazın. Sorgulamak için Amazon Athena'yı kullanın
veri.

C. Özel bir uygulamayı çalıştırmak için Amazon EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu oluşturun.
taranan dosyaları işler ve tıbbi bilgileri çıkarır.

D. Yeni belgeler yüklendiğinde çalışacak bir AWS Lambda işlevi oluşturun. Amazon'u kullanın
Belgeleri ham metne dönüştürmek için tanıma. Tespit etmek ve tespit etmek için Amazon Transcribe Medical'ı kullanın.
Metinden ilgili tıbbi bilgileri çıkarın.

E. Yeni belgeler yüklendiğinde çalışacak bir AWS Lambda işlevi oluşturun. Amazon'u kullanın
Belgeleri ham metne dönüştürmek için metin. Tespit etmek ve gerçekleştirmek için Amazon Comprehen Medical'ı kullanın.
Metinden ilgili tıbbi bilgileri çıkarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Belge bilgilerini bir Amazon S3 klasörüne yazın. Verileri sorgulamak için Amazon Athena'yı kullanın. Yeni belgeler yüklendiğinde çalışacak bir AWS Lambda işlevi oluşturun. Belgeleri ham metne dönüştürmek için Amazon Texttract'ı kullanın. Metinden ilgili tıbbi bilgileri tespit etmek ve çıkarmak için Amazon Comprehend Medical'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 193
Bir şirket Amazon EC2 bulut sunucularında toplu uygulama çalıştırıyor. Uygulama aşağıdakilerden oluşur:
birden fazla Amazon RDS veri tabanına sahip bir arka uç. Uygulama çok sayıda soruna neden oluyor
veritabanlarında okur. Bir çözüm mimarı veri tabanı okuma sayısını azaltmalıdır.
yüksek kullanılabilirlik sağlamak.
Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Amazon RDS okuma replikalarını ekleyin.

B. Redis için Amazon ElastiCache'i kullanın.

C. Amazon Route 53 DNS önbelleğe almayı kullanın

D. Memcached için Amazon ElastiCache'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon RDS okuma replikalarını ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 194
Bir şirketin AWS'de kritik bir uygulamayı çalıştırması gerekiyor. Şirketin Amazon EC2 kullanması gerekiyor
uygulamanın veritabanı için. Veritabanının yüksek oranda kullanılabilir olması ve yük devretmesi gerekir
rahatsız edici bir olay meydana gelirse otomatik olarak.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her biri aynı AWS Bölgesinde farklı bir Erişilebilirlik Alanında bulunan iki EC2 bulut sunucusunu başlatın.
Veritabanını her iki EC2 bulut sunucusuna yükleyin. EC2 bulut sunucularını küme olarak yapılandırın. Kurulum
veritabanı çoğaltma.

B. Erişilebilirlik Alanında bir EC2 bulut sunucusu başlatın. Veritabanını EC2 örneğine yükleyin. Kullanım
Verileri yedeklemek için bir Amazon Machine Image (AMI). Otomatikleştirmek için AWS CloudFormation'ı kullanın
Kesintiye yol açan bir olay meydana gelirse EC2 bulut sunucusunun sağlanması.

C. Her biri farklı bir AWS Bölgesinde bulunan iki EC2 bulut sunucusunu başlatın. Veritabanını her iki EC2'ye de yükleyin
örnekler. Veritabanı çoğaltmasını ayarlayın. Veritabanını ikinci bir Bölgeye devredin.

D. Erişilebilirlik Alanında bir EC2 bulut sunucusu başlatın. Veritabanını EC2 örneğine yükleyin. Kullanım
Verileri yedeklemek için bir Amazon Machine Image (AMI). Kurtarmak için EC2 otomatik kurtarmayı kullanın
örneğin yıkıcı bir olay meydana gelirse.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her biri aynı AWS Bölgesinde farklı bir Erişilebilirlik Alanında bulunan iki EC2 bulut sunucusunu başlatın. Veritabanını her iki EC2 bulut sunucusuna yükleyin. EC2 bulut sunucularını küme olarak yapılandırın. Veritabanı çoğaltmasını ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 195
Bir şirketin sipariş sistemi, müşterilerden gelen istekleri Amazon EC2 bulut sunucularına gönderir. EC2
bulut sunucuları siparişleri işler ve ardından siparişleri Amazon RDS'deki bir veritabanında saklar. Kullanıcılar
Sistem arızalandığında siparişleri yeniden işlemeleri gerektiğini bildiriyorlar. Şirket dayanıklı istiyor
Sistemde bir kesinti olması durumunda siparişleri otomatik olarak işleyebilen bir çözüm.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. EC2 örneklerini bir Otomatik Ölçeklendirme grubuna taşıyın. Bir Amazon EventBridge oluşturun (Amazon
CloudWatch Events) kuralının bir Amazon Elastic Container Service (Amazon ECS) görevini hedeflemesini sağlar.

B. EC2 örneklerini Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubuna taşıyın
(ALB). ALB uç noktasına mesaj göndermek için sipariş sistemini güncelleyin.

C. EC2 örneklerini bir Otomatik Ölçeklendirme grubuna taşıyın. Gönderilecek sipariş sistemini yapılandırın
Amazon Simple Queue Service (Amazon SQS) kuyruğuna iletiler. EC2'yi yapılandırma
kuyruktaki mesajları tüketmek için örnekler.

D. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Bir AWS Lambda oluşturun
işlevi seçin ve işlevi SNS konusuna abone olun. Gönderilecek sipariş sistemini yapılandırın
SNS konusuna gönderilen mesajlar. İletileri işlemek için EC2 bulut sunucularına bir komut gönderin.
AWS Systems Manager Çalıştır Komutunu kullanarak.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 örneklerini bir Otomatik Ölçeklendirme grubuna taşıyın. Sipariş sistemini, Amazon Simple Queue Service (Amazon SQS) kuyruğuna mesaj gönderecek şekilde yapılandırın. EC2 bulut sunucularını kuyruktaki mesajları tüketecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 196
Bir şirket, Amazon EC2 bulut sunucularından oluşan geniş bir filoda bir uygulama çalıştırıyor. Uygulama okur
ve girişleri bir Amazon DynamoDB tablosuna yazar. DynamoDB tablosunun boyutu
sürekli büyüyor ancak uygulamanın yalnızca son 30 güne ait verilere ihtiyacı var. şirket
Maliyeti ve geliştirme çabasını en aza indirecek bir çözüme ihtiyaç duyuyor.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Çözümün tamamını dağıtmak için bir AWS CloudFormation şablonu kullanın. Yeniden dağıt
CloudFormation yığınını her 30 günde bir oluşturun ve orijinal yığını silin.

B. AWS Marketplace'ten bir izleme uygulaması çalıştıran bir EC2 bulut sunucusu kullanın. Yapılandır
Yeni bir bağlantı kurulduğunda zaman damgasını depolamak için Amazon DynamoDB Streams'i kullanmak üzere izleme uygulaması
öğe tabloda oluşturulur. Özelliği olan öğeleri silmek için EC2 örneğinde çalışan bir komut dosyası kullanın.
30 günden eski zaman damgası.

C. Amazon DynamoDB Streams'i, yeni bir öğe gönderildiğinde AWS Lambda işlevini çağıracak şekilde yapılandırın.
tabloda oluşturulur. Tablodaki daha eski öğeleri silmek için Lambda işlevini yapılandırın
30 günden fazla.

D. Geçerli zaman damgası artı 30 değerine sahip bir öznitelik eklemek için uygulamayı genişletin
Tabloda oluşturulan her yeni öğeye gün. Özniteliği öznitelik olarak kullanmak için DynamoDB'yi yapılandırın.
TTL özelliği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulamayı, tabloda oluşturulan her yeni öğeye geçerli zaman damgası artı 30 gün değerine sahip bir öznitelik ekleyecek şekilde genişletin. Özniteliği TTL özniteliği olarak kullanacak şekilde DynamoDB'yi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 197
Bir şirketin şirket içi Windows Server'da çalışan bir Microsoft .NET uygulaması var.
uygulama, verileri Oracle Database Standard Edition sunucusunu kullanarak depolar. Şirket
AWS'ye geçiş yapmayı planlıyor ve taşırken geliştirme değişikliklerini en aza indirmek istiyor
uygulama. AWS uygulama ortamı yüksek düzeyde kullanılabilir olmalıdır.
Şirketin bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (Seç
iki.)

A. .NET Core çalıştıran AWS Lambda işlevleriyle uygulamayı sunucusuz olarak yeniden düzenleyin.

B. Uygulamayı Multi-AZ'deki .NET platformuyla AWS Elastic Beanstalk'ta yeniden barındırın
dağıtım.

C. Uygulamayı Amazon Linux Amazon Machine ile Amazon EC2'de çalışacak şekilde yeniden platformlayın
Resim (AMI).

D. Oracle veritabanından Oracle veritabanına geçiş yapmak için AWS Database Migration Service'i (AWS DMS) kullanın.
Multi-AZ dağıtımında Amazon DynamoDB.

E. Oracle veritabanından Oracle veritabanına geçiş yapmak için AWS Database Migration Service'i (AWS DMS) kullanın.
Multi-AZ dağıtımında Amazon RDS'de Oracle.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Multi-AZ dağıtımında uygulamayı .NET platformuyla AWS Elastic Beanstalk'ta yeniden barındırın. Multi-AZ dağıtımında Oracle veritabanından Amazon RDS'deki Oracle'a geçiş yapmak için AWS Database Migration Service'i (AWS DMS) kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 198
Bir şirket, şirket içi verilerdeki Kubernetes kümesinde kapsayıcıya alınmış bir uygulama çalıştırıyor
merkez. Şirket, veri depolama için MongoDB veritabanını kullanıyor. Şirket istiyor
bu ortamlardan bazılarını AWS'ye taşıyın ancak kod değişikliği veya dağıtım yöntemi yok
şu anda değişiklikler mümkündür. Şirketin operasyonel maliyetleri en aza indirecek bir çözüme ihtiyacı var
yükü.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon Elastic Container Service'i (Amazon ECS) Amazon EC2 çalışan düğümleriyle birlikte kullanın.
veri depolama için EC2'de bilgi işlem ve MongoDB.

B. Bilgi işlem için Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate ile kullanın ve
Veri depolama için Amazon DynamoDB

C. Amazon Elastic Kubernetes Service'i (Amazon EKS) Amazon EC2 çalışan düğümleriyle birlikte kullanın.
veri depolama için bilgi işlem ve Amazon DynamoDB.

D. Bilgi işlem için Amazon Elastic Kubernetes Service'i (Amazon EKS) AWS Fargate ile kullanın ve
Veri depolama için Amazon DocumentDB (MongoDB uyumluluğuyla).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İşlem için Amazon Elastic Kubernetes Service'i (Amazon EKS) AWS Fargate ile ve veri depolama için Amazon DocumentDB'yi (MongoDB uyumluluğuyla) kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 199
Bir telefonla pazarlama şirketi, müşteri çağrı merkezi işlevselliğini AWS'de tasarlıyor.
şirketin birden fazla konuşmacıyı tanımayı sağlayan ve transkript oluşturan bir çözüme ihtiyacı var
dosyalar. Şirket, iş modellerini analiz etmek için transkript dosyalarını sorgulamak istiyor.
Transkript dosyaları denetim amacıyla 7 yıl süreyle saklanmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Birden fazla konuşmacıyı tanımak için Amazon Rekognition'ı kullanın. Transkript dosyalarını Amazon'da saklayın
S3. Transkript dosya analizi için makine öğrenimi modellerini kullanın.

B. Birden fazla konuşmacıyı tanımak için Amazon Transcribe'ı kullanın. Transkript dosyası için Amazon Athena'yı kullanın
analiz.

C. Birden fazla konuşmacıyı tanımak için Amazon Translate'i kullanın. Transkript dosyalarını Amazon'da saklayın
Kırmızıya kayma. Transkript dosya analizi için SQL sorgularını kullanın.

D. Birden fazla konuşmacıyı tanımak için Amazon Rekognition'ı kullanın. Transkript dosyalarını Amazon'da saklayın
S3. Transkript dosya analizi için Amazon Texttract'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Birden fazla konuşmacıyı tanımak için Amazon Transcribe'ı kullanın. Transkript dosya analizi için Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
