# AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları - Bölüm 02

> **Soru Aralığı:** 101 - 200 / Toplam: 684

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #101

Bir çözüm mimarı genel ve özel alt ağlara sahip bir VPC tasarlıyor. VPC ve alt ağlar IPv4 CIDR bloklarını kullanır. Yüksek kullanılabilirlik için üç Erişilebilirlik Alanının (AZ) her birinde bir genel alt ağ ve bir özel alt ağ bulunur. Genel alt ağlara internet erişimi sağlamak için bir internet ağ geçidi kullanılır. Özel alt ağların, Amazon EC2 bulut sunucularının yazılım güncellemelerini indirmesine izin vermek için internete erişmesi gerekir. Özel alt ağlara İnternet erişimini sağlamak için çözüm mimarı ne yapmalıdır?

A. Her AZ'deki her genel alt ağ için bir tane olmak üzere üç NAT ağ geçidi oluşturun. VPC olmayan trafiği AZ'sindeki NAT ağ geçidine ileten her AZ için özel bir rota tablosu oluşturun.

B. Her AZ'deki her özel alt ağ için bir tane olmak üzere üç NAT örneği oluşturun. VPC olmayan trafiği AZ'sindeki NAT örneğine ileten her AZ için özel bir rota tablosu oluşturun.

C. Özel alt ağlardan birinde ikinci bir internet ağ geçidi oluşturun. VPC olmayan trafiği özel internet ağ geçidine ileten özel alt ağların yönlendirme tablosunu güncelleyin.

D. Genel alt ağlardan birinde yalnızca çıkışa yönelik bir internet ağ geçidi oluşturun. VPC olmayan trafiği yalnızca çıkış İnternet ağ geçidine ileten özel alt ağların yönlendirme tablosunu güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her AZ'deki her genel alt ağ için bir tane olmak üzere üç NAT ağ geçidi oluşturun. VPC olmayan trafiği AZ'sindeki NAT ağ geçidine ileten her AZ için özel bir rota tablosu oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #102

Bir şirket şirket içi veri merkezini AWS'ye taşımak istiyor. Veri merkezi, verilerini NFS tabanlı bir dosya sisteminde saklayan bir SFTP sunucusuna ev sahipliği yapar. Sunucu, aktarılması gereken 200 GB veriyi tutar. Sunucunun, Amazon Elastic File System (Amazon EFS) dosya sistemini kullanan bir Amazon EC2 bulut sunucusunda barındırılması gerekir. Bir çözüm mimarı bu görevi otomatikleştirmek için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. EC2 örneğini EFS dosya sistemiyle aynı Erişilebilirlik Alanında başlatın.

B. Şirket içi veri merkezine bir AWS DataSync aracısı yükleyin.

C. Veriler için EC2 bulut sunucusunda ikincil bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun.

D. Verileri EC2 örneğine göndermek için bir işletim sistemi kopyalama komutunu manuel olarak kullanın.

E. Şirket içi SFTP sunucusu için uygun bir konum yapılandırması oluşturmak amacıyla AWS DataSync'i kullanın.

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

Soru #103

Bir şirketin her gün aynı saatte çalışan bir AWS Glue çıkarma, dönüştürme ve yükleme (ETL) işi var. İş, Amazon S3 klasöründeki XML verilerini işler. S3 klasörüne her gün yeni veriler ekleniyor. Bir çözüm mimarı, AWS Glue'nun her çalıştırma sırasında tüm verileri işlediğini fark eder. AWS Glue'nun eski verileri yeniden işlemesini önlemek için çözüm mimarı ne yapmalıdır?

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

Soru #104

Bir çözüm mimarı, bir web sitesi için yüksek düzeyde kullanılabilir bir altyapı tasarlamalıdır. Web sitesi, Amazon EC2 bulut sunucularında çalışan Windows web sunucuları tarafından desteklenmektedir. Çözüm mimarı, binlerce IP adresinden kaynaklanan büyük ölçekli bir DDoS saldırısını azaltabilecek bir çözüm uygulamalıdır. Web sitesi için kesinti kabul edilemez. Web sitesini bu tür bir saldırıdan korumak için çözüm mimarının hangi eylemleri gerçekleştirmesi gerekir? (İki tane seçin.)

A. DDoS saldırısını durdurmak için AWS Shield Advanced'i kullanın.

B. Saldırganları otomatik olarak engellemek için Amazon GuardDuty'yi yapılandırın.

C. Web sitesini hem statik hem de dinamik içerik için Amazon CloudFront'u kullanacak şekilde yapılandırın.

D. Saldırganın IP adreslerini VPC ağ ACL'lerine otomatik olarak eklemek için bir AWS Lambda işlevini kullanın.

E. EC2 Spot Bulut Sunucularını, %80 CPU kullanımına ayarlanmış hedef izleme ölçeklendirme politikasıyla Otomatik Ölçeklendirme grubunda kullanın.

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

Soru #105

Bir şirket yeni bir sunucusuz iş yükünü dağıtmaya hazırlanıyor. Bir çözüm mimarı, bir AWS Lambda işlevini çalıştırmak için kullanılacak izinleri yapılandırmak için en az ayrıcalık ilkesini kullanmalıdır. Bir Amazon EventBridge (Amazon CloudWatch Events) kuralı, işlevi çağıracaktır. Hangi çözüm bu gereksinimleri karşılıyor?

A. Eylem olarak lambda:InvokeFunction ve asıl olarak * olacak şekilde işleve bir yürütme rolü ekleyin.

B. Eylem olarak lambda:InvokeFunction ve asıl olarak Service: lambda.amazonaws.com olacak şekilde işleve bir yürütme rolü ekleyin.

C. Eylem olarak lambda:* ve asıl olarak Service: events.amazonaws.com ile işleve kaynak tabanlı bir politika ekleyin.

D. Eylem olarak lambda:InvokeFunction ve asıl olarak Service: events.amazonaws.com ile işleve kaynak tabanlı bir politika ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Eylem olarak lambda:InvokeFunction ve asıl olarak Service: events.amazonaws.com ile işleve kaynak tabanlı bir politika ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #106

Bir şirket gizli verileri Amazon S3'te saklamaya hazırlanıyor. Uyumluluk nedeniyle verilerin kullanımda değilken şifrelenmesi gerekir. Denetleme amacıyla şifreleme anahtarı kullanımı günlüğe kaydedilmelidir. Anahtarlar her yıl değiştirilmelidir. Hangi çözüm bu gereksinimleri karşılıyor ve operasyonel açıdan EN verimli olanıdır?

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

Soru #107

Bir bisiklet paylaşım şirketi, yoğun çalışma saatlerinde bisikletlerinin konumunu takip etmek için çok katmanlı bir mimari geliştiriyor. Şirket bu veri noktalarını mevcut analiz platformunda kullanmak istiyor. Bir çözüm mimarı, bu mimariyi destekleyecek en uygun çok katmanlı seçeneği belirlemelidir. Veri noktalarına REST API'sinden erişilebilmelidir. Konum verilerini depolamak ve almak için bu gereksinimleri hangi eylem karşılıyor?

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

Soru #108

Bir şirketin, ilanlarını Amazon RDS'deki bir veritabanında saklayan bir otomobil satış web sitesi var. Bir otomobil satıldığında listelemenin siteden kaldırılması ve verilerin birden fazla hedef sisteme gönderilmesi gerekiyor. Bir çözüm mimarı hangi tasarımı önermelidir?

A. Amazon RDS'deki veritabanı, hedeflerin kullanması için bilgileri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna gönderecek şekilde güncellendiğinde tetiklenen bir AWS Lambda işlevi oluşturun.

B. Amazon RDS'deki veritabanı, hedeflerin kullanması için bilgileri bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna gönderecek şekilde güncellendiğinde tetiklenen bir AWS Lambda işlevi oluşturun.

C. Bir RDS olay bildirimine abone olun ve birden çok Amazon Simple Notification Service (Amazon SNS) konusuna yayılmış bir Amazon Simple Queue Service (Amazon SQS) kuyruğu gönderin. Hedefleri güncellemek için AWS Lambda işlevlerini kullanın.

D. Bir RDS olay bildirimine abone olun ve birden fazla Amazon Simple Queue Service (Amazon SQS) kuyruğuna yayılmış bir Amazon Simple Notification Service (Amazon SNS) konusu gönderin. Hedefleri güncellemek için AWS Lambda işlevlerini kullanın.

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

Soru #109

Bir şirketin verileri Amazon S3'te depolaması ve verilerin değiştirilmesini engellemesi gerekir. Şirket, Amazon S3'e yüklenen yeni nesnelerin, nesneleri değiştirmeye karar verene kadar belirli olmayan bir süre boyunca değiştirilemez kalmasını istiyor. Yalnızca şirketin AWS hesabındaki belirli kullanıcılar nesneleri silme olanağına sahip olabilir. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir S3 Glacier kasası oluşturun. Nesnelere bir kez yaz, çok oku (WORM) kasa kilitleme ilkesi uygulayın.

B. S3 Object Lock etkinleştirilmiş bir S3 klasörü oluşturun. Sürüm oluşturmayı etkinleştirin. 100 yıllık bir saklama süresi belirleyin. Yeni nesneler için S3 grubunun varsayılan saklama modu olarak yönetişim modunu kullanın.

C. Bir S3 klasörü oluşturun. Nesneleri değiştiren tüm S3 API olaylarını izlemek için AWS CloudTrail'i kullanın. Bildirim üzerine, değiştirilen nesneleri şirketin sahip olduğu herhangi bir yedekleme sürümünden geri yükleyin.

D. S3 Object Lock etkinleştirilmiş bir S3 klasörü oluşturun. Sürüm oluşturmayı etkinleştirin. Nesnelere yasal bir muhafaza ekleyin. Nesneleri silmesi gereken kullanıcıların IAM politikalarına s3:PutObjectLegalHold iznini ekleyin.

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

Soru #110

Bir sosyal medya şirketi, kullanıcıların web sitesine resim yüklemesine olanak tanır. Web sitesi Amazon EC2 bulut sunucularında çalışır. Yükleme istekleri sırasında web sitesi, görselleri standart boyuta göre yeniden boyutlandırır ve yeniden boyutlandırılan görselleri Amazon S3'te saklar. Kullanıcılar web sitesine yavaş yükleme istekleri yaşıyor. Şirketin uygulama içindeki eşleşmeyi azaltması ve web sitesi performansını iyileştirmesi gerekiyor. Bir çözüm mimarı, görüntü yüklemeleri için operasyonel açıdan en verimli süreci tasarlamalıdır. Çözüm mimarı bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmelidir? (İki tane seçin.)

A. Uygulamayı, görüntüleri S3 Glacier'a yükleyecek şekilde yapılandırın.

B. Web sunucusunu orijinal görüntüleri Amazon S3'e yükleyecek şekilde yapılandırın.

C. Uygulamayı, görüntüleri önceden imzalanmış bir URL kullanarak her kullanıcının tarayıcısından doğrudan Amazon S3'e yükleyecek şekilde yapılandırın

D. Bir görüntü yüklendiğinde bir AWS Lambda işlevini çağıracak şekilde S3 Olay Bildirimlerini yapılandırın. Resmi yeniden boyutlandırmak için işlevi kullanın.

E. Yüklenen görüntüleri yeniden boyutlandırmak için bir programa göre bir AWS Lambda işlevini çağıran bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun.

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

Soru #111

Bir şirket yakın zamanda bir mesaj işleme sistemini AWS'ye geçirdi. Sistem, mesajları bir Amazon EC2 bulut sunucusu üzerinde çalışan bir ActiveMQ kuyruğuna alır. Mesajlar Amazon EC2'de çalışan bir tüketici uygulaması tarafından işlenir. Tüketici uygulaması mesajları işler ve sonuçları Amazon EC2 üzerinde çalışan bir MySQL veritabanına yazar. Şirket, bu uygulamanın düşük operasyonel karmaşıklıkla yüksek düzeyde kullanılabilir olmasını istiyor. Hangi mimari EN YÜKSEK kullanılabilirliği sunuyor?

A. Başka bir Erişilebilirlik Alanına ikinci bir ActiveMQ sunucusu ekleyin. Başka bir Erişilebilirlik Alanına ek bir tüketici EC2 bulut sunucusu ekleyin. MySQL veritabanını başka bir Erişilebilirlik Alanına çoğaltın.

B. Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. Başka bir Erişilebilirlik Alanına ek bir tüketici EC2 bulut sunucusu ekleyin. MySQL veritabanını başka bir Erişilebilirlik Alanına çoğaltın.

C. Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. Başka bir Erişilebilirlik Alanına ek bir tüketici EC2 bulut sunucusu ekleyin. Multi-AZ etkinken MySQL için Amazon RDS'yi kullanın.

D. Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. İki Erişilebilirlik Alanındaki tüketici EC2 bulut sunucuları için bir Otomatik Ölçeklendirme grubu ekleyin. Multi-AZ etkinken MySQL için Amazon RDS'yi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon MQ'yu iki Erişilebilirlik Alanında yapılandırılmış etkin/yedek aracılarla kullanın. İki Erişilebilirlik Alanındaki tüketici EC2 bulut sunucuları için bir Otomatik Ölçeklendirme grubu ekleyin. Multi-AZ etkinken MySQL için Amazon RDS'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #112

Bir şirket, gelen istekleri işleyen şirket içi sunuculardan oluşan bir filoda konteynerli bir web uygulaması barındırıyor. Taleplerin sayısı hızla artıyor. Şirket içi sunucular artan sayıdaki istekleri işleyemez. Şirket, minimum kod değişikliği ve minimum geliştirme çabasıyla uygulamayı AWS'ye taşımak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Container mimarisine alınmış web uygulamasını Service Auto Scaling ile çalıştırmak için Amazon Elastic Container Service'te (Amazon ECS) AWS Fargate'i kullanın. Gelen istekleri dağıtmak için Application Load Balancer kullanın.

B. Container mimarisine alınmış web uygulamasını barındırmak için iki Amazon EC2 bulut sunucusunu kullanın. Gelen istekleri dağıtmak için Application Load Balancer kullanın.

C. AWS Lambda'yı desteklenen dillerden birini kullanan yeni bir kodla kullanın. Yükü desteklemek için birden fazla Lambda işlevi oluşturun. Amazon API Gateway'i Lambda işlevlerine giriş noktası olarak kullanın.

D. Gelen istekleri uygun ölçekte işleyebilecek bir HPC kümesi oluşturmak için AWS ParallelCluster gibi yüksek performanslı bir bilgi işlem (HPC) çözümü kullanın.

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

Soru #113

Bir şirket raporlama için 50 TB veri kullanıyor. Şirket bu verileri şirket içinden AWS'ye taşımak istiyor. Şirketin veri merkezindeki özel bir uygulama, haftalık veri dönüştürme işini yürütüyor. Şirket, veri aktarımı tamamlanana kadar uygulamayı duraklatmayı planlıyor ve aktarım sürecine mümkün olan en kısa sürede başlaması gerekiyor. Veri merkezinde ek iş yükleri için kullanılabilir ağ bant genişliği yoktur. Bir çözüm mimarının verileri aktarması ve dönüşüm işini AWS Cloud'da çalışmaya devam edecek şekilde yapılandırması gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri taşımak için AWS DataSync'i kullanın. AWS Glue'yu kullanarak özel bir dönüşüm işi oluşturun.

B. Verileri taşımak için bir AWS Snowcone cihazı sipariş edin. Dönüşüm uygulamasını cihaza dağıtın.

C. Bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin. Verileri cihaza kopyalayın. AWS Glue'yu kullanarak özel bir dönüşüm işi oluşturun.

D. Amazon EC2 bilgi işlem içeren bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin. Verileri cihaza kopyalayın. Dönüşüm uygulamasını çalıştırmak için AWS'de yeni bir EC2 bulut sunucusu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Snowball Edge Storage Optimize Edilmiş bir cihaz sipariş edin. Verileri cihaza kopyalayın. AWS Glue'yu kullanarak özel bir dönüşüm işi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #114

Bir şirket, kullanıcıların fotoğraf yükleyebileceği ve görüntülerine fotoğraf çerçeveleri ekleyebileceği bir görüntü analiz uygulaması oluşturdu. Kullanıcılar, resimlerine hangi fotoğraf çerçevelerini eklemek istediklerini belirtmek için resimler ve meta veriler yükler. Uygulama, meta verileri depolamak için tek bir Amazon EC2 bulut sunucusu ve Amazon DynamoDB kullanır. Uygulama popüler hale geliyor ve kullanıcı sayısı artıyor. Şirket, eşzamanlı kullanıcı sayısının günün saatine ve haftanın gününe bağlı olarak önemli ölçüde değişmesini bekliyor. Şirket, uygulamanın büyüyen kullanıcı tabanının ihtiyaçlarını karşılayacak şekilde ölçeklenebilmesini sağlamalıdır. Bu gereksinimleri hangi çözüm karşılıyor?

A. Fotoğrafları işlemek için AWS Lambda'yı kullanın. Fotoğrafları ve meta verileri DynamoDB'de saklayın.

B. Fotoğrafları işlemek ve fotoğrafları ve meta verileri depolamak için Amazon Kinesis Data Firehose'u kullanın.

C. Fotoğrafları işlemek için AWS Lambda'yı kullanın. Fotoğrafları Amazon S3'te saklayın. Meta verileri depolamak için DynamoDB'yi saklayın.

D. EC2 bulut sunucusu sayısını üçe çıkarın. Fotoğrafları ve meta verileri depolamak için Tedarik Edilen IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) birimlerini kullanın.

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

Soru #115

Bir tıbbi kayıt şirketi, Amazon EC2 bulut sunucularında bir uygulamayı barındırıyor. Uygulama, Amazon S3'te depolanan müşteri veri dosyalarını işler. EC2 bulut sunucuları genel alt ağlarda barındırılır. EC2 bulut sunucuları Amazon S3'e internet üzerinden erişir ancak başka herhangi bir ağ erişimine ihtiyaç duymazlar. Yeni bir gereksinim, dosya aktarımları için ağ trafiğinin özel bir rota izlemesini ve internet üzerinden gönderilmemesini zorunlu kılmaktadır. Bir çözüm mimarı bu gereksinimi karşılamak için ağ mimarisinde hangi değişikliği önermelidir?

A. Bir NAT ağ geçidi oluşturun. NAT ağ geçidi aracılığıyla Amazon S3'e trafik göndermek için genel alt ağlara yönelik yönlendirme tablosunu yapılandırın.

B. EC2 bulut sunucuları için güvenlik grubunu, yalnızca S3 önek listesine giden trafiğe izin verilecek şekilde giden trafiği kısıtlamak üzere yapılandırın.

C. EC2 bulut sunucularını özel alt ağlara taşıyın. Amazon S3 için bir VPC uç noktası oluşturun ve uç noktayı özel alt ağların yönlendirme tablosuna bağlayın.

D. İnternet ağ geçidini VPC'den kaldırın. Bir AWS Direct Connect bağlantısı kurun ve trafiği Direct Connect bağlantısı üzerinden Amazon S3'e yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucularını özel alt ağlara taşıyın. Amazon S3 için bir VPC uç noktası oluşturun ve uç noktayı özel alt ağların yönlendirme tablosuna bağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #116

Bir şirket, kurumsal web sitesi için popüler bir içerik yönetim sistemi (CMS) kullanıyor. Ancak gerekli yama ve bakım külfetlidir. Şirket web sitesini yeniden tasarlıyor ve yeni bir çözüm istiyor. Web sitesi yılda dört kez güncellenecektir ve herhangi bir dinamik içeriğe sahip olmasına gerek yoktur. Çözümün yüksek ölçeklenebilirlik ve gelişmiş güvenlik sağlaması gerekir. Hangi değişiklik kombinasyonu bu gereksinimleri EN AZ operasyonel giderle karşılayacaktır? (İki tane seçin.)

A. HTTPS işlevselliğini kullanmak için Amazon CloudFront'u web sitesinin önünde yapılandırın.

B. HTTPS işlevselliği sağlamak için web sitesinin önüne bir AWS WAF web ACL dağıtın.

C. Web sitesi içeriğini yönetmek ve sunmak için bir AWS Lambda işlevi oluşturun ve dağıtın.

D. Yeni web sitesini ve bir Amazon S3 paketini oluşturun. Statik web sitesi barındırma etkinken web sitesini S3 klasörüne dağıtın.

E. Yeni web sitesini oluşturun. Web sitesini, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularından oluşan Otomatik Ölçeklendirme grubunu kullanarak dağıtın.

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

Soru #117

Bir şirket, uygulama günlüklerini bir Amazon CloudWatch Logs günlük grubunda saklar. Yeni bir politika, şirketin tüm uygulama günlüklerini Amazon OpenSearch Service'te (Amazon Elasticsearch Service) neredeyse gerçek zamanlı olarak saklamasını gerektiriyor. Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. Günlükleri Amazon OpenSearch Service'e (Amazon Elasticsearch Service) aktarmak için bir CloudWatch Logs aboneliği yapılandırın.

B. Bir AWS Lambda işlevi oluşturun. Günlükleri Amazon OpenSearch Service'e (Amazon Elasticsearch Service) yazma işlevini çağırmak için günlük grubunu kullanın.

C. Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Günlük grubunu dağıtım akışları kaynakları olarak yapılandırın. Teslimat akışının hedefi olarak Amazon OpenSearch Service'i (Amazon Elasticsearch Service) yapılandırın.

D. Günlükleri Amazon Kinesis Data Streams'e iletmek için her uygulama sunucusuna Amazon Kinesis Agent'ı yükleyin ve yapılandırın. Günlükleri Amazon OpenSearch Service'e (Amazon Elasticsearch Service) iletmek için Kinesis Veri Akışlarını yapılandırın.

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

Soru #118

Bir şirket, birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucuları üzerinde çalışan web tabanlı bir uygulama geliştiriyor. Web uygulaması, yaklaşık 900 TB boyutunda bir metin belgesi deposuna erişim sağlayacak. Şirket, web uygulamasının yoğun talep göreceği dönemler yaşayacağını öngörüyor. Bir çözüm mimarı, metin belgelerine yönelik depolama bileşeninin, uygulamanın talebini her zaman karşılayacak şekilde ölçeklenebilmesini sağlamalıdır. Şirket, çözümün genel maliyeti konusunda endişeli. Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılıyor?

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

Soru #119

Küresel bir şirket, us-east-1 Bölgesi ve ap-southeast-2 Bölgesindeki sadakat kulübü kullanıcıları için REST API'leri tasarlamak amacıyla Amazon API Gateway'i kullanıyor. Bir çözüm mimarı, birden fazla hesaptaki bu API Ağ Geçidi tarafından yönetilen REST API'lerini SQL ekleme ve siteler arası komut dosyası çalıştırma saldırılarından korumak için bir çözüm tasarlamalıdır. Hangi çözüm bu gereksinimleri EN AZ miktarda idari çabayla karşılayacak?

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

Soru #120

Bir şirket, us-west-2 Bölgesi'ndeki bir Network Load Balancer'ın (NLB) arkasındaki üç Amazon EC2 örneğine kendi kendini yöneten bir DNS çözümü uyguladı. Şirketin kullanıcılarının çoğu Amerika Birleşik Devletleri ve Avrupa'da bulunmaktadır. Şirket, çözümün performansını ve kullanılabilirliğini artırmak istiyor. Şirket, ab-batı-1 Bölgesi'nde üç EC2 bulut sunucusunu başlatıp yapılandırıyor ve EC2 bulut sunucularını yeni bir NLB için hedefler olarak ekliyor. Şirket trafiği tüm EC2 bulut sunucularına yönlendirmek için hangi çözümü kullanabilir?

A. İstekleri iki NLB'den birine yönlendirmek için bir Amazon Route 53 coğrafi konum yönlendirme politikası oluşturun. Bir Amazon CloudFront dağıtımı oluşturun. Dağıtımın kaynağı olarak Route 53 kaydını kullanın.

B. AWS Global Accelerator'da standart bir hızlandırıcı oluşturun. us-west-2 ve eu-west-1'de uç nokta grupları oluşturun. İki NLB'yi uç nokta grupları için uç noktalar olarak ekleyin.

C. Altı EC2 bulut sunucusuna Elastik IP adresleri ekleyin. İstekleri altı EC2 bulut sunucusundan birine yönlendirmek için bir Amazon Route 53 coğrafi konum yönlendirme politikası oluşturun. Bir Amazon CloudFront dağıtımı oluşturun. Dağıtımın kaynağı olarak Route 53 kaydını kullanın.

D. İki NLB'yi iki Application Load Balancer (ALB) ile değiştirin. İstekleri iki ALB'den birine yönlendirmek için bir Amazon Route 53 gecikme yönlendirme politikası oluşturun. Bir Amazon CloudFront dağıtımı oluşturun. Dağıtımın kaynağı olarak Route 53 kaydını kullanın.

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

Soru #121

Bir şirket, AWS'de çevrimiçi işlem işleme (OLTP) iş yükü çalıştırıyor. Bu iş yükü, Multi-AZ dağıtımında şifrelenmemiş bir Amazon RDS veritabanı bulut sunucusunu kullanır. Günlük veritabanı anlık görüntüleri bu örnekten alınır. Bir çözüm mimarı, veritabanının ve anlık görüntülerin ileriye doğru her zaman şifrelendiğinden emin olmak için ne yapmalıdır?

A. En son veritabanı anlık görüntüsünün bir kopyasını şifreleyin. Şifrelenmiş anlık görüntüyü geri yükleyerek mevcut veritabanı örneğini değiştirin.

B. Yeni bir şifrelenmiş Amazon Elastic Block Store (Amazon EBS) birimi oluşturun ve anlık görüntüleri buraya kopyalayın. Veritabanı bulut sunucusunda şifrelemeyi etkinleştirin.

C. Anlık görüntüleri kopyalayın ve AWS Key Management Service (AWS KMS) kullanarak şifrelemeyi etkinleştirin. Şifrelenmiş anlık görüntüyü mevcut bir veritabanı bulut sunucusuna geri yükleyin.

D. Anlık yedekleri, AWS Key Management Service (AWS KMS) yönetilen anahtarları (SSE-KMS) ile sunucu tarafı şifreleme kullanılarak şifrelenen bir Amazon S3 klasörüne kopyalayın.

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

Soru #122

Bir şirket, uygulamalarındaki verileri şifrelemesi gereken geliştiricileri desteklemek için ölçeklenebilir bir anahtar yönetimi altyapısı oluşturmak istiyor. Bir çözüm mimarı operasyonel yükü azaltmak için ne yapmalıdır?

A. Şifreleme anahtarlarını korumak için çok faktörlü kimlik doğrulamayı (MFA) kullanın.

B. Şifreleme anahtarlarını korumak için AWS Key Management Service'i (AWS KMS) kullanın.

C. Şifreleme anahtarlarını oluşturmak, depolamak ve atamak için AWS Sertifika Yöneticisini (ACM) kullanın.

D. Şifreleme anahtarlarını korumak amacıyla erişim izinlerine sahip kullanıcıların kapsamını sınırlamak için bir IAM politikası kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şifreleme anahtarlarını korumak için AWS Key Management Service'i (AWS KMS) kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #123

Bir şirketin iki Amazon EC2 bulut sunucusunda barındırılan dinamik bir web uygulaması var. Şirketin, her durumda SSL sonlandırma işlemini gerçekleştiren kendi SSL sertifikası vardır. Son zamanlarda trafikte bir artış oldu ve operasyon ekibi, SSL şifreleme ve şifre çözme işleminin web sunucularının bilgi işlem kapasitesinin maksimum sınırına ulaşmasına neden olduğunu belirledi. Bir çözüm mimarı uygulamanın performansını artırmak için ne yapmalıdır?

A. AWS Sertifika Yöneticisini (ACM) kullanarak yeni bir SSL sertifikası oluşturun. ACM sertifikasını her bir örneğe yükleyin.

B. Amazon S3 klasörü oluşturun SSL sertifikasını S3 klasörüne taşıyın. EC2 bulut sunucularını, SSL sonlandırma paketine referans verecek şekilde yapılandırın.

C. Proxy sunucusu olarak başka bir EC2 örneği oluşturun. SSL sertifikasını yeni örneğe taşıyın ve bağlantıları mevcut EC2 örneklerine yönlendirecek şekilde yapılandırın.

D. SSL sertifikasını AWS Sertifika Yöneticisine (ACM) aktarın. ACM'nin SSL sertifikasını kullanan bir HTTPS dinleyicisine sahip bir Application Load Balancer oluşturun.

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

Soru #124

Bir şirketin, bunu tamamlamak için birçok Amazon EC2 bulut sunucusunu kullanan son derece dinamik bir toplu işleme işi var. İşin doğası gereği vatansızlıktır, herhangi bir olumsuz etki olmaksızın herhangi bir zamanda başlatılabilir ve durdurulabilir ve genellikle tamamlanması toplamda 60 dakikadan fazla sürer. Şirket, bir çözüm mimarından işin gereksinimlerini karşılayan, ölçeklenebilir ve uygun maliyetli bir çözüm tasarlamasını istedi. Çözüm mimarı ne tavsiye etmelidir?

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

Soru #125

Bir şirket iki katmanlı e-ticaret web sitesini AWS'de işletiyor. Web katmanı, Amazon EC2 bulut sunucularına trafik gönderen bir yük dengeleyiciden oluşur. Veritabanı katmanı bir Amazon RDS DB bulut sunucusunu kullanır. EC2 bulut sunucuları ve RDS DB bulut sunucusu genel internete açık olmamalıdır. EC2 bulut sunucuları, siparişlerin ödeme işlemlerini üçüncü taraf bir web hizmeti aracılığıyla tamamlamak için internet erişimi gerektirir. Uygulamanın yüksek düzeyde kullanılabilir olması gerekir. Hangi konfigürasyon seçenekleri kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. EC2 bulut sunucularını özel alt ağlarda başlatmak için Otomatik Ölçeklendirme grubunu kullanın. Özel alt ağlarda bir RDS Multi-AZ Veritabanı bulut sunucusunu dağıtın.

B. İki Erişilebilirlik Alanında iki özel alt ağa ve iki NAT ağ geçidine sahip bir VPC yapılandırın. Özel alt ağlara bir Application Load Balancer dağıtın.

C. EC2 bulut sunucularını iki Erişilebilirlik Alanındaki genel alt ağlarda başlatmak için bir Otomatik Ölçeklendirme grubu kullanın. Özel alt ağlarda bir RDS Multi-AZ Veritabanı bulut sunucusunu dağıtın.

D. İki Erişilebilirlik Alanında bir genel alt ağ, bir özel alt ağ ve iki NAT ağ geçidiyle bir VPC yapılandırın. Genel alt ağda bir Application Load Balancer dağıtın.

D. İki Erişilebilirlik Alanında iki genel alt ağ, iki özel alt ağ ve iki NAT ağ geçidi ile bir VPC yapılandırın. Genel alt ağlara bir Application Load Balancer dağıtın.

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

Soru #126

Bir çözüm mimarının, bir şirketin depolama maliyetlerini azaltacak bir çözümü uygulaması gerekir. Şirketin tüm verileri Amazon S3 Standard depolama sınıfındadır. Şirketin tüm verileri en az 25 yıl süreyle saklaması gerekmektedir. En son 2 yıla ait veriler yüksek düzeyde kullanılabilir ve anında geri alınabilir olmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Nesneleri hemen S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü politikası oluşturun.

B. Nesneleri 2 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü politikası oluşturun.

C. S3 Intelligent-Tiering'i kullanın. Verilerin S3 Glacier Deep Archive'da arşivlendiğinden emin olmak için arşivleme seçeneğini etkinleştirin.

D. Nesneleri hemen S3 One Zone-Infrequent Access'e (S3 One Zone-IA) ve 2 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü politikası oluşturun.

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

Soru #127

Bir medya şirketi, sistemlerini AWS Cloud'a taşıma olasılığını değerlendiriyor. Şirketin, video işleme için mümkün olan maksimum I/O performansıyla en az 10 TB depolamaya, medya içeriğini depolamak için 300 TB çok dayanıklı depolamaya ve artık kullanılmayan arşiv ortamı gereksinimlerini karşılamak için 900 TB depolamaya ihtiyacı var. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi hizmetleri önermelidir?

A. Maksimum performans için Amazon EBS, dayanıklı veri depolama için Amazon S3 ve arşiv depolama için Amazon S3 Glacier

B. Maksimum performans için Amazon EBS, dayanıklı veri depolama için Amazon EFS ve arşiv depolama için Amazon S3 Glacier

C. Maksimum performans için Amazon EC2 bulut sunucusu deposu, dayanıklı veri depolama için Amazon EFS ve arşiv depolama için Amazon S3

D. Maksimum performans için Amazon EC2 bulut sunucusu deposu, dayanıklı veri depolama için Amazon S3 ve arşiv depolama için Amazon S3 Glacier

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

Soru #128

Bir şirket, uygulamaları AWS Cloud'daki konteynerlerde çalıştırmak istiyor. Bu uygulamalar durum bilgisine sahip değildir ve temel altyapıdaki kesintileri tolere edebilir. Şirketin maliyeti ve operasyonel ek yükü en aza indirecek bir çözüme ihtiyacı var. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygulama kapsayıcılarını çalıştırmak için Amazon EC2 Auto Scaling grubundaki Spot Bulut Sunucularını kullanın.

B. Spot Bulut Sunucularını Amazon Elastic Kubernetes Service (Amazon EKS) tarafından yönetilen bir düğüm grubunda kullanın.

C. Uygulama kapsayıcılarını çalıştırmak için Amazon EC2 Auto Scaling grubundaki İsteğe Bağlı Bulut Sunucularını kullanın.

D. Amazon Elastic Kubernetes Service (Amazon EKS) tarafından yönetilen bir düğüm grubunda İsteğe Bağlı Bulut Sunucularını kullanın.

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

Soru #129

Bir şirket, tesislerinde çok katmanlı bir web uygulaması çalıştırıyor. Web uygulaması kapsayıcıya alınmıştır ve kullanıcı kayıtlarını içeren PostgreSQL veritabanına bağlı bir dizi Linux ana bilgisayarında çalışır. Altyapının bakımı ve kapasite planlamasının operasyonel yükü şirketin büyümesini sınırlıyor. Bir çözüm mimarı uygulamanın altyapısını geliştirmelidir. Çözüm mimarının bunu başarmak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. PostgreSQL veritabanını Amazon Aurora'ya taşıyın.

B. Web uygulamasını Amazon EC2 bulut sunucularında barındırılacak şekilde taşıyın.

C. Web uygulaması içeriği için bir Amazon CloudFront dağıtımı kurun.

D. Web uygulaması ile PostgreSQL veritabanı arasında Amazon ElastiCache'i kurun.

E. Web uygulamasını Amazon Elastic Container Service (Amazon ECS) ile AWS Fargate'te barındırılacak şekilde taşıyın.

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

Soru #130

Bir uygulama, birden fazla Erişilebilirlik Alanında Amazon EC2 bulut sunucularında çalışır. Bulut sunucuları, Application Load Balancer'ın arkasında bir Amazon EC2 Auto Scaling grubunda çalışır. Uygulama, EC2 bulut sunucularının CPU kullanımı %40 veya buna yakın olduğunda en iyi performansı gösterir. Bir çözüm mimarı gruptaki tüm örneklerde istenen performansı korumak için ne yapmalıdır?

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

Soru #131

Bir şirket, depolama için Amazon S3 klasörünü kullanacak bir dosya paylaşım uygulaması geliştiriyor. Şirket, tüm dosyaları bir Amazon CloudFront dağıtımı aracılığıyla sunmak istiyor. Şirket, dosyalara doğrudan S3 URL'sine gidilerek erişilmesini istemiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Yalnızca CloudFront erişimine okuma izni vermek amacıyla her S3 grubu için ayrı politikalar yazın.

B. Bir IAM kullanıcısı oluşturun. Kullanıcıya S3 klasöründeki nesnelere okuma izni verin. Kullanıcıyı CloudFront'a atayın.

C. CloudFront dağıtım kimliğini Asıl olarak atayan ve hedef S3 kümesini Amazon Kaynak Adı (ARN) olarak atayan bir S3 grubu politikası yazın.

D. Bir kaynak erişim kimliği (OAI) oluşturun. OAI'yi CloudFront dağıtımına atayın. S3 grup izinlerini yalnızca OAI'nin okuma iznine sahip olacağı şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir kaynak erişim kimliği (OAI) oluşturun. OAI'yi CloudFront dağıtımına atayın. S3 grup izinlerini yalnızca OAI'nin okuma iznine sahip olacağı şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #132

Bir şirketin web sitesi kullanıcılara indirilebilir geçmiş performans raporları sağlar. Web sitesinin, şirketin web sitesi taleplerini küresel olarak karşılayacak şekilde ölçeklenecek bir çözüme ihtiyacı var. Çözüm uygun maliyetli olmalı, altyapı kaynaklarının tedarikini sınırlamalı ve mümkün olan en hızlı yanıt süresini sağlamalıdır. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi kombinasyonu önermelidir?

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

Soru #133

Bir şirket kendi bünyesinde Oracle veritabanı çalıştırmaktadır. Şirketin AWS'ye geçişinin bir parçası olarak şirket, veritabanını mevcut en yeni sürüme yükseltmek istiyor. Şirket ayrıca veritabanı için olağanüstü durum kurtarma (DR) kurmak istiyor. Şirketin normal operasyonlar ve DR kurulumu için operasyonel ek yükü en aza indirmesi gerekiyor. Şirketin ayrıca veritabanının temelindeki işletim sistemine erişimi sürdürmesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Oracle veritabanını bir Amazon EC2 bulut sunucusuna taşıyın. Veritabanı çoğaltmasını farklı bir AWS Bölgesine ayarlayın.

B. Oracle veritabanını Amazon RDS for Oracle'a taşıyın. Anlık yedekleri başka bir AWS Bölgesine kopyalamak için Bölgeler Arası otomatik yedeklemeleri etkinleştirin.

C. Oracle veritabanını Amazon RDS Custom for Oracle'a taşıyın. Başka bir AWS Bölgesindeki veritabanı için bir okuma kopyası oluşturun.

D. Oracle veritabanını Amazon RDS for Oracle'a taşıyın. Başka bir Erişilebilirlik Alanında yedek bir veritabanı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Oracle veritabanını Amazon RDS Custom for Oracle'a taşıyın. Başka bir AWS Bölgesindeki veritabanı için bir okuma kopyası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #134

Bir şirket, uygulamasını sunucusuz bir çözüme taşımak istiyor. Sunucusuz çözümün mevcut ve yeni verileri SL kullanarak analiz etmesi gerekir. Şirket, verileri bir Amazon S3 klasöründe saklıyor. Veriler şifreleme gerektirir ve farklı bir AWS Bölgesine kopyalanmalıdır. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Yeni bir S3 klasörü oluşturun. Verileri yeni S3 klasörüne yükleyin. Şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı (CRR) kullanın. AWS KMS çoklu Bölge kays (SSE-KMS) ile sunucu tarafı şifrelemeyi kullanın. Verileri sorgulamak için Amazon Athena'yı kullanın.

B. Yeni bir S3 klasörü oluşturun. Verileri yeni S3 klasörüne yükleyin. Şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı (CRR) kullanın. AWS KMS çoklu Bölge anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanın. Verileri sorgulamak için Amazon RDS'yi kullanın.

C. Verileri mevcut S3 klasörüne yükleyin. Şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı (CRR) kullanın. Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın. Verileri sorgulamak için Amazon Athena'yı kullanın.

D. Verileri mevcut S3 klasörüne yükleyin. Şifrelenmiş nesneleri başka bir Bölgedeki bir S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı (CRR) kullanın. Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın. Verileri sorgulamak için Amazon RDS'yi kullanın.

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

Soru #135

Bir şirket iş yüklerini AWS'de çalıştırıyor. Şirketin harici bir sağlayıcıdan gelen bir hizmete bağlanması gerekiyor. Hizmet, sağlayıcının VPC'sinde barındırılır. Şirketin güvenlik ekibine göre bağlantının özel olması ve hedef hizmetle sınırlı olması gerekiyor. Bağlantı yalnızca şirketin VPC'sinden başlatılmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin VPC'si ile sağlayıcının VPC'si arasında bir VPC eşleme bağlantısı oluşturun. Hedef hizmete bağlanmak için rota tablosunu güncelleyin.

B. Sağlayıcıdan VPC'sinde sanal bir özel ağ geçidi oluşturmasını isteyin. Hedef hizmete bağlanmak için AWS PrivateLink'i kullanın.

C. Şirketin VP'sinin genel alt ağında bir NAT ağ geçidi oluşturun. Hedef hizmete bağlanmak için rota tablosunu güncelleyin.

D. Sağlayıcıdan hedef hizmet için bir VPC uç noktası oluşturmasını isteyin. Hedef hizmete bağlanmak için AWS PrivateLink'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Sağlayıcıdan hedef hizmet için bir VPC uç noktası oluşturmasını isteyin. Hedef hizmete bağlanmak için AWS PrivateLink'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru #136

Bir şirket şirket içi PostgreSQL veritabanını Amazon Aurora PostgreSQL'e taşıyor. Şirket içi veritabanının geçiş sırasında çevrimiçi ve erişilebilir kalması gerekir. Aurora veritabanının şirket içi veritabanıyla senkronize kalması gerekir. Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. Devam eden bir çoğaltma görevi oluşturun.

B. Şirket içi veritabanının veritabanı yedeğini oluşturun.

C. Bir AWS Database Migration Service (AWS DMS) çoğaltma sunucusu oluşturun.

D. AWS Şema Dönüştürme Aracı'nı (AWS SCT) kullanarak veritabanı şemasını dönüştürün.

E. Veritabanı senkronizasyonunu izlemek için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Devam eden bir çoğaltma görevi oluşturun. Bir AWS Database Migration Service (AWS DMS) çoğaltma sunucusu oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #137

Bir şirket, istek üzerine her iş biriminin hesabını bağımsız olarak yönetmek amacıyla her iş birimi için özel AWS hesapları oluşturmak amacıyla AWS Organizasyonlarını kullanır. Kök e-posta alıcısı, bir hesabın kök kullanıcı e-posta adresine gönderilen bir bildirimi kaçırdı. Şirket, gelecekteki tüm bildirimlerin kaçırılmamasını sağlamak istiyor. Gelecekteki bildirimler hesap yöneticileriyle sınırlı olmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin e-posta sunucusunu, AWS hesabının kök kullanıcı e-posta adresine gönderilen bildirim e-posta mesajlarını kuruluştaki tüm kullanıcılara iletecek şekilde yapılandırın.

B. Tüm AWS hesabı kök kullanıcı e-posta adreslerini, uyarılara yanıt verebilecek birkaç yöneticiye giden dağıtım listeleri olarak yapılandırın. AWS hesabı alternatif kişilerini AWS Kuruluşları konsolunda veya program aracılığıyla yapılandırın.

C. Tüm AWS hesabı kök kullanıcısı e-posta iletilerini, uyarıları izlemekten ve bu uyarıları uygun gruplara iletmekten sorumlu olan bir yöneticiye gönderilecek şekilde yapılandırın.

D. Mevcut tüm AWS hesaplarını ve yeni oluşturulan tüm hesapları aynı kök kullanıcı e-posta adresini kullanacak şekilde yapılandırın. AWS hesabı alternatif kişilerini AWS Kuruluşları konsolunda veya program aracılığıyla yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tüm AWS hesabı kök kullanıcı e-posta adreslerini, uyarılara yanıt verebilecek birkaç yöneticiye giden dağıtım listeleri olarak yapılandırın. AWS hesabı alternatif kişilerini AWS Kuruluşları konsolunda veya program aracılığıyla yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #138

Bir şirket, e-ticaret uygulamasını AWS'de çalıştırıyor. Her yeni sipariş, tek bir Erişilebilirlik Alanındaki Amazon EC2 bulut sunucusunda çalışan RabbitMQ kuyruğunda bir mesaj olarak yayınlanır. Bu mesajlar, ayrı bir EC2 örneğinde çalışan farklı bir uygulama tarafından işlenir. Bu uygulama, ayrıntıları başka bir EC2 örneğindeki PostgreSQL veritabanında saklar. Tüm EC2 bulut sunucuları aynı Erişilebilirlik Alanındadır. Şirketin, en az operasyonel ek yük ile en yüksek kullanılabilirliği sağlayacak şekilde mimarisini yeniden tasarlaması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Sırayı Amazon MQ'daki yedek bir RabbitMQ bulut sunucusu çiftine (etkin/yedek) taşıyın. Uygulamayı barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. PostgreSQL veritabanını barındıran EC2 bulut sunucuları için başka bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun.

B. Sırayı Amazon MQ'daki yedek bir RabbitMQ bulut sunucusu çiftine (etkin/yedek) taşıyın. Uygulamayı barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Veritabanını Amazon RDS for PostgreSQL'in Multi-AZ dağıtımında çalışacak şekilde taşıyın.

C. RabbitMQ kuyruğunu barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Uygulamayı barındıran EC2 bulut sunucuları için başka bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Veritabanını Amazon RDS for PostgreSQL'in Multi-AZ dağıtımında çalışacak şekilde taşıyın.

D. RabbitMQ kuyruğunu barındıran EC2 bulut sunucuları için bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. Uygulamayı barındıran EC2 bulut sunucuları için başka bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun. PostgreSQL veritabanını barındıran EC2 bulut sunucuları için üçüncü bir Multi-AZ Otomatik Ölçeklendirme grubu oluşturun

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

Soru #139

Bir raporlama ekibi her gün bir Amazon S3 klasöründeki dosyaları alır. Raporlama ekibi, Amazon QuickSight ile kullanmak üzere dosyaları her gün aynı saatte manuel olarak inceler ve bu ilk S3 klasöründeki analiz S3 klasörüne kopyalar. Ek ekipler, ilk S3 paketine daha büyük boyutlarda daha fazla dosya göndermeye başlıyor. Raporlama ekibi, dosyalar ilk S3 klasörüne girerken S3 paketini analiz ederek dosyaları otomatik olarak taşımak istiyor. Raporlama ekibi ayrıca kopyalanan veriler üzerinde model eşleştirme kodunu çalıştırmak için AWS Lambda işlevlerini kullanmak istiyor. Ayrıca raporlama ekibi veri dosyalarını Amazon SageMaker Pipelines'taki bir işlem hattına göndermek istiyor. Bir çözüm mimarı bu gereksinimleri EN AZ operasyonel giderle karşılamak için ne yapmalıdır?

A. Dosyaları analiz S3 klasörüne kopyalamak için bir Lambda işlevi oluşturun. Analiz S3 grubu için bir S3 olay bildirimi oluşturun. Lambda ve SageMaker Pipelines'ı olay bildiriminin hedefleri olarak yapılandırın. Olay türü olarak s3:ObjectCreated:Put öğesini yapılandırın.

B. Dosyaları analiz S3 klasörüne kopyalamak için bir Lambda işlevi oluşturun. Amazon EventBridge'e (Amazon CloudWatch Events) olay bildirimleri göndermek için analiz S3 klasörünü yapılandırın. EventBridge'de (CloudWatch Events) bir ObjectCreated kuralı yapılandırın. Lambda ve SageMaker İşlem Hatlarını kuralın hedefleri olarak yapılandırın.

C. S3 klasörleri arasında S3 çoğaltmasını yapılandırın. Analiz S3 grubu için bir S3 olay bildirimi oluşturun. Lambda ve SageMaker Pipelines'ı olay bildiriminin hedefleri olarak yapılandırın. Olay türü olarak s3:ObjectCreated:Put öğesini yapılandırın.

D. S3 klasörleri arasında S3 çoğaltmasını yapılandırın. Amazon EventBridge'e (Amazon CloudWatch Events) olay bildirimleri göndermek için analiz S3 klasörünü yapılandırın. EventBridge'de (CloudWatch Events) bir ObjectCreated kuralı yapılandırın. Lambda ve SageMaker İşlem Hatlarını kuralın hedefleri olarak yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 klasörleri arasında S3 çoğaltmasını yapılandırın. Amazon EventBridge'e (Amazon CloudWatch Events) olay bildirimleri göndermek için analiz S3 klasörünü yapılandırın. EventBridge'de (CloudWatch Events) bir ObjectCreated kuralı yapılandırın. Lambda ve SageMaker İşlem Hatlarını kuralın hedefleri olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #140

Bir çözüm mimarının, bir şirketin AWS'de bir uygulamayı çalıştırma maliyetini optimize etmesine yardımcı olması gerekir. Uygulama, mimari içindeki işlemler için Amazon EC2 bulut sunucularını, AWS Fargate ve AWS Lambda'yı kullanacak. EC2 bulut sunucuları, uygulamanın veri alımı katmanını çalıştıracaktır. EC2 kullanımı düzensiz ve öngörülemez olacaktır. EC2 bulut sunucularında çalışan iş yükleri herhangi bir zamanda kesintiye uğratılabilir. Uygulama ön ucu Fargate üzerinde çalışacak ve Lambda, API katmanına hizmet edecek. Ön uç kullanımı ve API katmanı kullanımı gelecek yıl boyunca tahmin edilebilir olacaktır. Bu uygulamayı barındırmak için EN uygun maliyetli çözümü hangi satın alma seçeneği kombinasyonu sağlayacaktır? (İki tane seçin.)

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

Soru #141

Bir şirket, kullanıcılara küresel son dakika haberlerini, yerel uyarıları ve hava durumu güncellemelerini sağlayan web tabanlı bir portal işletiyor. Portal, statik ve dinamik içeriğin bir karışımını kullanarak her kullanıcıya kişiselleştirilmiş bir görünüm sunar. İçerik, Application Load Balancer'ın (ALB) arkasındaki Amazon EC2 örneğinde çalışan bir API sunucusu aracılığıyla HTTPS üzerinden sunulur. Şirket, portalın bu içeriği dünya çapındaki kullanıcılarına mümkün olan en kısa sürede sunmasını istiyor. Bir çözüm mimarı, tüm kullanıcılar için EN AZ miktarda gecikmeyi sağlayacak şekilde uygulamayı nasıl tasarlamalıdır?

A. Uygulama yığınını tek bir AWS Bölgesinde dağıtın. ALB'yi kaynak olarak belirterek tüm statik ve dinamik içeriği sunmak için Amazon CloudFront'u kullanın.

B. Uygulama yığınını iki AWS Bölgesinde dağıtın. En yakın Bölgedeki ALB'deki tüm içeriği sunmak için Amazon Route 53 gecikme yönlendirme politikasını kullanın.

C. Uygulama yığınını tek bir AWS Bölgesinde dağıtın. Statik içeriği sunmak için Amazon CloudFront'u kullanın. Dinamik içeriği doğrudan ALB'den sunun.

D. Uygulama yığınını iki AWS Bölgesinde dağıtın. En yakın Bölgedeki ALB'deki tüm içeriği sunmak için Amazon Route 53 coğrafi konum yönlendirme politikasını kullanın.

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

Soru #142

Bir oyun şirketi yüksek düzeyde kullanılabilir bir mimari tasarlıyor. Uygulama, değiştirilmiş bir Linux çekirdeği üzerinde çalışır ve yalnızca UDP tabanlı trafiği destekler. Şirketin mümkün olan en iyi kullanıcı deneyimini sağlamak için ön uç katmanına ihtiyacı var. Bu katmanın gecikme süresi düşük olmalı, trafiği en yakın uç konuma yönlendirmeli ve uygulama uç noktalarına giriş için statik IP adresleri sağlamalıdır. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. İstekleri bir Application Load Balancer'a iletmek için Amazon Route 53'ü yapılandırın. AWS Application Auto Scaling'deki uygulama için AWS Lambda'yı kullanın.

B. Amazon CloudFront'u istekleri bir Network Load Balancer'a iletecek şekilde yapılandırın. AWS Uygulama Otomatik Ölçeklendirme grubundaki uygulama için AWS Lambda'yı kullanın.

C. AWS Global Accelerator'ı, istekleri bir Network Load Balancer'a iletecek şekilde yapılandırın. Bir EC2 Auto Scaling grubundaki uygulama için Amazon EC2 bulut sunucularını kullanın.

D. İstekleri bir Application Load Balancer'a iletmek için Amazon API Gateway'i yapılandırın. Bir EC2 Auto Scaling grubundaki uygulama için Amazon EC2 bulut sunucularını kullanın.

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

Soru #143

Bir şirket mevcut şirket içi monolitik uygulamasını AWS'ye geçirmek istiyor. Şirket, ön uç kodunun ve arka uç kodunun mümkün olduğunca çoğunu saklamak istiyor. Ancak şirket uygulamayı daha küçük uygulamalara bölmek istiyor. Her başvuruyu farklı bir ekip yönetecek. Şirketin operasyonel ek yükü en aza indirecek yüksek düzeyde ölçeklenebilir bir çözüme ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamayı AWS Lambda'da barındırın. Uygulamayı Amazon API Gateway ile entegre edin.

B. Uygulamayı AWS Amplify ile barındırın. Uygulamayı AWS Lambda ile entegre olan bir Amazon API Gateway API'sine bağlayın.

C. Uygulamayı Amazon EC2 bulut sunucularında barındırın. Hedef olarak bir Otomatik Ölçeklendirme grubundaki EC2 örnekleriyle bir Application Load Balancer kurun.

D. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) barındırın. Hedef olarak Amazon ECS ile bir Application Load Balancer kurun.

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

Soru #144

Bir şirket yakın zamanda küresel e-ticaret uygulamasının veri deposu olarak Amazon Aurora'yı kullanmaya başladı. Büyük raporlar çalıştırıldığında geliştiriciler, e-ticaret uygulamasının kötü performans gösterdiğini bildiriyor. Bir çözüm mimarı, Amazon CloudWatch'taki ölçümleri inceledikten sonra, aylık raporlar çalıştırıldığında ReadIOPS ve CPUUtilizalion ölçümlerinin hızla arttığını fark etti. EN uygun maliyetli çözüm nedir?

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

Soru #145

Bir şirket, tek bir Amazon EC2 İsteğe Bağlı Bulut Sunucusunda bir web sitesi analitiği uygulaması barındırıyor. Analitik yazılımı PHP ile yazılmıştır ve MySQL veritabanını kullanır. Analitik yazılımı, PHP sağlayan web sunucusu ve veritabanı sunucusunun tümü EC2 örneğinde barındırılmaktadır. Uygulama yoğun zamanlarda performans düşüşü belirtileri gösteriyor ve 5xx hataları veriyor. Firmanın uygulama ölçeğini sorunsuz bir şekilde yapması gerekiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Veritabanını Amazon RDS for MySQL Veritabanı bulut sunucusuna taşıyın. Web uygulamasının bir AMI'sini oluşturun. İkinci bir EC2 İsteğe Bağlı Bulut Sunucusunu başlatmak için AMI'yi kullanın. Yükü her EC2 bulut sunucusuna dağıtmak için bir Application Load Balancer kullanın.

B. Veritabanını Amazon RDS for MySQL Veritabanı bulut sunucusuna taşıyın. Web uygulamasının bir AMI'sini oluşturun. İkinci bir EC2 İsteğe Bağlı Bulut Sunucusunu başlatmak için AMI'yi kullanın. Yükü iki EC2 bulut sunucusuna dağıtmak için Amazon Route 53 ağırlıklı yönlendirmeyi kullanın.

C. Veritabanını bir Amazon Aurora MySQL Veritabanı bulut sunucusuna taşıyın. EC2 bulut sunucusunu durdurmak ve bulut sunucusu türünü değiştirmek için bir AWS Lambda işlevi oluşturun. CPU kullanımı %75'i aştığında Lambda işlevini çağırmak için bir Amazon CloudWatch alarmı oluşturun.

D. Veritabanını bir Amazon Aurora MySQL Veritabanı bulut sunucusuna taşıyın. Web uygulamasının bir AMI'sini oluşturun. AMI'yi bir başlatma şablonuna uygulayın. Başlatma şablonuyla Otomatik Ölçeklendirme grubu oluşturma Başlatma şablonunu Spot Filo kullanacak şekilde yapılandırın. Otomatik Ölçeklendirme grubuna bir Application Load Balancer ekleyin.

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

Soru #146

Bir şirket, Application Load Balancer'ın arkasında bir grup Amazon EC2 İsteğe Bağlı Bulut Sunucusu üzerinde üretim aşamasında durum bilgisiz bir web uygulaması çalıştırıyor. Uygulama, her iş gününde 8 saatlik bir süre boyunca yoğun kullanımla karşılaşmaktadır. Uygulama kullanımı gece boyunca orta düzeyde ve sabittir. Hafta sonları uygulama kullanımı düşüktür. Şirket, uygulamanın kullanılabilirliğini etkilemeden EC2 maliyetlerini en aza indirmek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. İş yükünün tamamı için Spot Bulut Sunucularını kullanın.

B. Temel kullanım düzeyi için Rezerve Edilmiş Bulut Sunucularını kullanın. Uygulamanın ihtiyaç duyduğu ek kapasite için Spot bulut sunucularını kullanın.

C. Temel kullanım düzeyi için İsteğe Bağlı Bulut Sunucularını kullanın. Uygulamanın ihtiyaç duyduğu ek kapasite için Spot Bulut Sunucularını kullanın.

D. Temel kullanım düzeyi için Tahsis Edilmiş Bulut Sunucularını kullanın. Uygulamanın ihtiyaç duyduğu ek kapasite için İsteğe Bağlı Bulut Sunucularını kullanın.

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

Soru #147

Bir şirketin kritik bir uygulamaya ait uygulama günlük dosyalarını 10 yıl boyunca saklaması gerekir. Uygulama ekibi sorun giderme amacıyla geçen aya ait günlüklere düzenli olarak erişiyor ancak 1 aydan eski günlüklere nadiren erişiliyor. Uygulama ayda 10 TB'tan fazla günlük oluşturuyor. Hangi depolama seçeneği bu gereksinimleri EN uygun maliyetle karşılar?

A. Günlükleri Amazon S3'te saklayın. 1 aydan eski günlükleri S3 Glacier Deep Archive'a taşımak için AWS Backup'ı kullanın.

B. Günlükleri Amazon S3'te saklayın. 1 aydan eski günlükleri S3 Glacier Deep Archive'a taşımak için S3 Yaşam Döngüsü politikalarını kullanın.

C. Günlükleri Amazon CloudWatch Logs'ta saklayın. 1 aydan eski günlükleri S3 Glacier Deep Archive'a taşımak için AWS Backup'ı kullanın.

D. Günlükleri Amazon CloudWatch Logs'ta saklayın. 1 aydan eski günlükleri S3 Glacier Deep Archive'a taşımak için Amazon S3 Yaşam Döngüsü politikalarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Günlükleri Amazon S3'te saklayın. 1 aydan eski günlükleri S3 Glacier Deep Archive'a taşımak için S3 Yaşam Döngüsü politikalarını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru #148

Bir şirketin aşağıdaki bileşenleri içeren bir veri alımı iş akışı vardır: Yeni veri dağıtımlarıyla ilgili bildirimleri alan bir Amazon Simple Notification Service (Amazon SNS) konusu Verileri işleyen ve depolayan bir AWS Lambda işlevi Besleme iş akışı, ağ bağlantısı sorunları nedeniyle zaman zaman başarısız olur. Arıza meydana geldiğinde, şirket işi manuel olarak yeniden çalıştırmadığı sürece ilgili veriler alınmaz. Tüm bildirimlerin eninde sonunda işlenmesini sağlamak için bir çözüm mimarı ne yapmalıdır?

A. Lambda işlevini birden çok Erişilebilirlik Alanında dağıtım için yapılandırın.

B. İşlev için CPU ve bellek ayırmalarını artırmak için Lambda işlevinin yapılandırmasını değiştirin.

C. Hem yeniden deneme sayısını hem de yeniden denemeler arasındaki bekleme süresini artırmak için SNS konusunun yeniden deneme stratejisini yapılandırın.

D. Arıza durumunda hedef olarak bir Amazon Simple Queue Service (Amazon SQS) kuyruğu yapılandırın. Kuyruktaki mesajları işlemek için Lambda işlevini değiştirin.

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

Soru #149

Bir şirketin olay verilerini üreten bir hizmeti var. Şirket, olay verilerini alındığı anda işlemek için AWS'yi kullanmak istiyor. Veriler, işlem boyunca korunması gereken belirli bir sırayla yazılır. Şirket, operasyonel ek yükü en aza indirecek bir çözüm uygulamak istiyor. Bir çözüm mimarı bunu nasıl başarmalıdır?

A. Mesajları tutmak için bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğu oluşturun. Kuyruktaki mesajları işlemek için bir AWS Lambda işlevi kurun.

B. İşlenecek yükleri içeren bildirimleri iletmek için bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Abone olarak bir AWS Lambda işlevini yapılandırın.

C. Mesajları tutmak için bir Amazon Simple Queue Service (Amazon SQS) standart kuyruğu oluşturun. Sıradaki mesajları bağımsız olarak işlemek için bir AWS Lambda işlevi kurun.

D. İşlenecek yükleri içeren bildirimleri iletmek için bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Abone olarak bir Amazon Simple Queue Service (Amazon SQS) kuyruğu yapılandırın.

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

Soru #150

Bir şirket, bir uygulamayı şirket içi sunuculardan Amazon EC2 bulut sunucularına taşıyor. Geçiş tasarımı gereksinimlerinin bir parçası olarak, bir çözüm mimarının altyapı ölçüm alarmlarını uygulaması gerekir. CPU kullanımının kısa bir süre için %50'nin üzerine çıkması durumunda şirketin herhangi bir işlem yapmasına gerek yoktur. Ancak CPU kullanımının %50'nin üzerine çıkması ve aynı zamanda diskteki okunan IOPS'nin yüksek olması durumunda firmanın bir an önce harekete geçmesi gerekmektedir. Çözüm mimarı aynı zamanda yanlış alarmları da azaltmalıdır. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Mümkün olduğunda Amazon CloudWatch bileşik alarmları oluşturun.

B. Ölçümleri görselleştirmek ve sorunlara hızla yanıt vermek için Amazon CloudWatch kontrol panelleri oluşturun.

C. Uygulamayı izlemek ve alarm vermek için Amazon CloudWatch Synthetics kanaryaları oluşturun.

D. Mümkün olduğunda birden fazla ölçüm eşiğine sahip tek Amazon CloudWatch ölçüm alarmları oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mümkün olduğunda Amazon CloudWatch bileşik alarmları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #151

Bir şirket şirket içi veri merkezini AWS'ye taşımak istiyor. Şirketin uyumluluk gereksinimlerine göre şirket yalnızca ap-kuzeydoğu-3 Bölgesini kullanabilmektedir. Şirket yöneticilerinin VPC'leri internete bağlamasına izin verilmez. Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. İnternet erişimini engellemek ve kuzeydoğu-3 dışındaki tüm AWS Bölgelerine erişimi reddetmek amacıyla veri yerleşimi korkuluklarını uygulamak için AWS Control Tower'ı kullanın.

B. İnternet erişimini engellemek için AWS WAF'taki kuralları kullanın. AWS hesap ayarlarında ap-northeast-3 dışındaki tüm AWS Bölgelerine erişimi reddedin.

C. VPC'lerin internet erişimi kazanmasını engelleyen hizmet kontrol politikalarını (SCPS) yapılandırmak için AWS Organizasyonlarını kullanın. Ap-northeast-3 dışındaki tüm AWS Bölgelerine erişimi reddedin.

D. 0.0.0.0/0'dan gelen tüm trafiği reddetmek amacıyla her VPC'de ağ ACL'si için bir giden kural oluşturun. ap-northeast-3 dışındaki herhangi bir AWS Bölgesinin kullanımını önlemek amacıyla her kullanıcı için bir IAM politikası oluşturun.

E. İnternet ağ geçitlerini tespit edip uyarmak ve ap-northeast-3 dışında dağıtılan yeni kaynakları tespit edip uyarmak amacıyla yönetilen kuralları etkinleştirmek için AWS Config'i kullanın.

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

Soru #152

Bir şirket, yeni çalışanlara eğitim sağlamak için üç katmanlı bir web uygulaması kullanıyor. Uygulamaya her gün yalnızca 12 saat erişim sağlanmaktadır. Şirket, bilgileri depolamak için Amazon RDS for MySQL Veritabanı bulut sunucusunu kullanıyor ve maliyetleri en aza indirmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS Systems Manager Session Manager için bir IAM politikası yapılandırın. Politika için bir IAM rolü oluşturun. Rolün güven ilişkisini güncelleyin. Veritabanı bulut sunucusu için otomatik başlatma ve durdurmayı ayarlayın.

B. Veritabanı bulut sunucusu durdurulduğunda kullanıcılara önbellekteki verilere erişme olanağı sağlayan bir Amazon ElastiCache for Redis önbellek kümesi oluşturun. Veritabanı bulut sunucusu başlatıldıktan sonra önbelleği geçersiz kılın.

C. Bir Amazon EC2 bulut sunucusunu başlatın. Amazon RDS'ye erişim izni veren bir IAM rolü oluşturun. Rolü EC2 örneğine ekleyin. EC2 örneğini istenen zamanlamaya göre başlatmak ve durdurmak için bir cron işi yapılandırın.

D. Veritabanı bulut sunucusunu başlatmak ve durdurmak için AWS Lambda işlevleri oluşturun. Lambda işlevlerini çağırmak için Amazon EventBridge (Amazon CloudWatch Events) planlanmış kuralları oluşturun. Lambda işlevlerini kurallar için olay hedefleri olarak yapılandırın.

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

Soru #153

Bir şirket, popüler şarkıların kliplerinden oluşturulan zil seslerini satıyor. Zil seslerini içeren dosyalar Amazon S3 Standard'ta saklanır ve boyutu en az 128 KB'dir. Şirketin milyonlarca dosyası var, ancak 90 günden eski zil sesleri için indirme işlemi nadirdir. Şirketin, en çok erişilen dosyaları kullanıcıların kullanımına hazır tutarken depolama alanından tasarruf etmesi gerekiyor. Şirket bu gereklilikleri EN uygun maliyetle karşılamak için hangi eylemi gerçekleştirmelidir?

A. Nesnelerin ilk depolama katmanı için S3 Standart-Nadir Erişimli (S3 Standart-IA) depolamayı yapılandırın.

B. Dosyaları S3 Intelligent-Tiering'e taşıyın ve nesneleri 90 gün sonra daha ucuz bir depolama katmanına taşıyacak şekilde yapılandırın.

C. Nesneleri yönetmek için S3 envanterini yapılandırın ve 90 gün sonra bunları S3 Standart-Nadir Erişime (S3 Standart-1A) taşıyın.

D. Nesneleri 90 gün sonra S3 Standard'tan S3 Standard-Infrequent Access'e (S3 Standard-1A) taşıyan bir S3 Yaşam Döngüsü politikası uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Nesneleri 90 gün sonra S3 Standard'tan S3 Standard-Infrequent Access'e (S3 Standard-1A) taşıyan bir S3 Yaşam Döngüsü ilkesi uygulayın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #154

Bir şirketin tıbbi bir deneyin sonuçlarını Amazon S3 deposuna kaydetmesi gerekiyor. Depo, birkaç bilim insanının yeni dosyalar eklemesine izin vermeli ve diğer tüm kullanıcıları salt okunur erişimle kısıtlamalıdır. Hiçbir kullanıcı, depodaki herhangi bir dosyayı değiştirme veya silme olanağına sahip değildir. Şirket, her dosyayı oluşturulduğu tarihten itibaren en az 1 yıl süreyle veri deposunda tutmak zorundadır. Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 Object Lock'u 1 yıllık yasal bekletmeyle yönetişim modunda kullanın.

B. S3 Object Lock'u 365 günlük saklama süresiyle uyumluluk modunda kullanın.

C. Tüm kullanıcıların S3 klasöründeki nesneleri silmesini veya değiştirmesini kısıtlamak için bir IAM rolü kullanın. Yalnızca IAM rolüne izin vermek için bir S3 grubu politikası kullanın.

D. S3 klasörünü, her nesne eklendiğinde bir AWS Lambda işlevini çağıracak şekilde yapılandırın. Değiştirilen nesnelerin uygun şekilde işaretlenebilmesi için kaydedilen nesnenin karma değerini izleyecek işlevi yapılandırın.

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

Soru #155

Büyük bir medya şirketi AWS'de bir web uygulaması barındırıyor. Şirket, dünya çapındaki kullanıcıların dosyalara güvenilir şekilde erişebilmesi için gizli medya dosyalarını önbelleğe almaya başlamak istiyor. İçerik Amazon S3 klasörlerinde depolanır. Şirket, taleplerin coğrafi olarak nereden kaynaklandığına bakılmaksızın içeriği hızlı bir şekilde teslim etmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 klasörlerini web uygulamasına bağlamak için AWS DataSync'i kullanın.

B. S3 klasörlerini web uygulamasına bağlamak için AWS Global Accelerator'ı dağıtın.

C. S3 paketlerini CloudFront uç sunucularına bağlamak için Amazon CloudFront'u dağıtın.

D. S3 klasörlerini web uygulamasına bağlamak için Amazon Simple Queue Service'i (Amazon SQS) kullanın.

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

Soru #156

Bir şirket farklı veritabanlarından gelen toplu veriler üretir. Şirket ayrıca ağ sensörlerinden ve uygulama API'lerinden canlı akış verileri de üretiyor. Şirketin iş analitiği için tüm verileri tek bir yerde birleştirmesi gerekiyor. Şirketin gelen verileri işlemesi ve ardından verileri farklı Amazon S3 klasörlerine yerleştirmesi gerekiyor. Ekipler daha sonra tek seferlik sorgular çalıştıracak ve temel performans göstergelerini (KPI'ler) göstermek için verileri bir iş zekası aracına aktaracak. Hangi adım kombinasyonu bu gereksinimleri EN AZ operasyonel giderle karşılayacaktır? (İki tane seçin.)

C. Tek seferlik sorgular için Amazon Athena'yı kullanın. KPI'lara yönelik kontrol panelleri oluşturmak için Amazon QuickSight'ı kullanın.

B. Tek seferlik sorgular için Amazon Kinesis Data Analytics'i kullanın. KPI'lara yönelik kontrol panelleri oluşturmak için Amazon QuickSight'ı kullanın.

C. Bireysel kayıtları veritabanlarından bir Amazon Redshift kümesine taşımak için özel AWS Lambda işlevleri oluşturun.

D. Verileri JSON formatına dönüştürmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi kullanın. Verileri birden fazla Amazon OpenSearch Service (Amazon Elasticsearch Service) kümesine yükleyin.

E. Bir veri gölüne alınabilecek verileri belirlemek için AWS Lake Formation'daki planları kullanın. Kaynağı taramak, verileri çıkarmak ve verileri Amazon S3'e Apache Parquet formatında yüklemek için AWS Glue'yu kullanın.

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

Soru #157

Bir şirket, verileri Amazon Aurora PostgreSQL veritabanı kümesinde depoluyor. Şirketin tüm verileri 5 yıl boyunca saklaması ve 5 yıl sonra tüm verileri silmesi gerekmektedir. Şirketin ayrıca veritabanında gerçekleştirilen eylemlerin denetim kayıtlarını süresiz olarak tutması gerekir. Şu anda şirketin Aurora için yapılandırılmış otomatik yedeklemeleri var. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

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

Soru #158

Bir çözüm mimarı, yaklaşan bir müzik etkinliği için web sitesini optimize ediyor. Performansların videoları gerçek zamanlı olarak yayınlanacak ve daha sonra talep üzerine sunulacak. Etkinliğin küresel bir çevrimiçi izleyici kitlesini çekmesi bekleniyor. Hangi hizmet hem gerçek zamanlı hem de isteğe bağlı akışın performansını artıracak?

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

Soru #159

Bir şirket, Amazon API Gateway ve AWS Lambda'yı kullanan, herkese açık, sunucusuz bir uygulama çalıştırıyor. Uygulamanın trafiği son zamanlarda botnet'lerden gelen sahte istekler nedeniyle artış gösterdi. Yetkisiz kullanıcılardan gelen istekleri engellemek için bir çözüm mimarının hangi adımları atması gerekir? (İki tane seçin.)

A. Yalnızca gerçek kullanıcılarla paylaşılan bir API anahtarıyla bir kullanım planı oluşturun.

B. Sahte IP adreslerinden gelen istekleri yok saymak için mantığı Lambda işlevine entegre edin.

C. Kötü amaçlı istekleri hedeflemek ve bunları filtrelemek için eylemleri tetiklemek için bir AWS WAF kuralı uygulayın.

D. Mevcut genel API'yi özel bir API'ye dönüştürün. Kullanıcıları yeni API uç noktasına yönlendirmek için DNS kayıtlarını güncelleyin.

E. API'ye erişmeye çalışan her kullanıcı için bir IAM rolü oluşturun. API çağrısını yaparken rolü bir kullanıcı üstlenecektir.

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

Soru #160

Bir e-ticaret şirketi, analiz uygulamasını AWS Cloud'da barındırıyor. Uygulama her ay yaklaşık 300 MB veri üretiyor. Veriler JSON formatında saklanır. Şirket, verileri yedeklemek için bir felaket kurtarma çözümü değerlendiriyor. Verilere ihtiyaç duyulması halinde milisaniyeler içerisinde ulaşılabilir olmalı ve veriler 30 gün süreyle saklanmalıdır. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

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

Soru #161

Bir şirketin, JSON belgelerini işleyen ve sonuçları şirket içi bir SQL veritabanına çıkaran küçük bir Python uygulaması vardır. Uygulama her gün binlerce kez çalıştırılıyor. Şirket, uygulamayı AWS Cloud'a taşımak istiyor. Şirketin ölçeklenebilirliği en üst düzeye çıkaran ve operasyonel ek yükü en aza indiren yüksek düzeyde kullanılabilir bir çözüme ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. JSON belgelerini bir Amazon S3 klasörüne yerleştirin. Belgeleri işlemek için Python kodunu birden çok Amazon EC2 bulut sunucusunda çalıştırın. Sonuçları bir Amazon Aurora DB kümesinde saklayın.

B. JSON belgelerini bir Amazon S3 klasörüne yerleştirin. Belgeleri S3 klasörüne ulaştıklarında işlemek için Python kodunu çalıştıran bir AWS Lambda işlevi oluşturun. Sonuçları bir Amazon Aurora DB kümesinde saklayın.

C. JSON belgelerini bir Amazon Elastic Block Store (Amazon EBS) birimine yerleştirin. Birimi birden fazla Amazon EC2 bulut sunucusuna eklemek için EBS Multi-Attach özelliğini kullanın. Belgeleri işlemek için EC2 bulut sunucularında Python kodunu çalıştırın. Sonuçları bir Amazon RDS DB örneğinde saklayın.

D. JSON belgelerini mesaj olarak bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yerleştirin. Python kodunu, Amazon EC2 başlatma türüyle yapılandırılmış bir Amazon Elastic Container Service (Amazon ECS) kümesinde kapsayıcı olarak dağıtın. SQS mesajlarını işlemek için kapsayıcıyı kullanın. Sonuçları bir Amazon RDS DB örneğinde saklayın.

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

Soru #162

Bir şirket, finansal risk modellemesi için AWS'de yüksek performanslı bilgi işlem (HPC) altyapısını kullanmak istiyor. Şirketin HPC iş yükleri Linux üzerinde çalışıyor. Her HPC iş akışı yüzlerce Amazon EC2 Spot Bulut Sunucusu üzerinde çalışır, kısa ömürlüdür ve analizler ve gelecekte uzun vadeli kullanım için kalıcı depolamada depolanan binlerce çıktı dosyası oluşturur. Şirket, verilerin tüm EC2 bulut sunucuları tarafından işlenmeye hazır hale getirilmesi için şirket içi verilerin uzun vadeli kalıcı depolamaya kopyalanmasına olanak tanıyan bir bulut depolama çözümü arıyor. Çözüm aynı zamanda veri kümelerini ve çıktı dosyalarını okumak ve yazmak için kalıcı depolamayla entegre edilmiş yüksek performanslı bir dosya sistemi olmalıdır. AWS hizmetlerinin hangi kombinasyonu bu gereksinimleri karşılıyor?

A. Amazon S3 ile entegre Lustre için Amazon FSx

B. Amazon S3 ile entegre Windows Dosya Sunucusu için Amazon FSx

C. Amazon S3 Glacier, Amazon Elastic Block Store (Amazon EBS) ile entegre edildi

D. Amazon Elastic Block Store (Amazon EBS) Genel Amaçlı SSD (gp2) birimiyle entegre edilmiş VPC uç noktasına sahip Amazon S3 klasörü

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

Soru #163

Bir şirket, tesislerinde konteynerli bir uygulama geliştiriyor ve uygulamayı AWS'ye taşımaya karar veriyor. Uygulama, kullanıma sunulduktan kısa süre sonra binlerce kullanıcıya sahip olacak. Şirket, konteynerlerin dağıtımını geniş ölçekte nasıl yöneteceğinden emin değil. Şirketin konteynerli uygulamayı, operasyonel ek yükü en aza indiren, yüksek düzeyde kullanılabilir bir mimaride devreye alması gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Container görüntülerini bir Amazon Elastic Container Registry (Amazon ECR) deposunda saklayın. Konteynerleri çalıştırmak için AWS Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi kullanın. Talebe göre otomatik olarak ölçeklendirmek için hedef izlemeyi kullanın.

B. Container görüntülerini bir Amazon Elastic Container Registry (Amazon ECR) deposunda saklayın. Container'ları çalıştırmak için Amazon EC2 başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi kullanın. Talebe göre otomatik olarak ölçeklendirmek için hedef izlemeyi kullanın.

C. Container görüntülerini Amazon EC2 bulut sunucusunda çalışan bir depoda saklayın. Container'ları birden fazla Erişilebilirlik Alanına yayılmış EC2 bulut sunucularında çalıştırın. Amazon CloudWatch'ta ortalama CPU kullanımını izleyin. Gerektiğinde yeni EC2 bulut sunucularını başlatın.

D. Container görüntüsünü içeren bir Amazon EC2 Amazon Machine Image (AMI) oluşturun. Birden fazla Erişilebilirlik Alanında Otomatik Ölçeklendirme grubunda EC2 bulut sunucularını başlatın. Ortalama CPU kullanım eşiği aşıldığında EC2 bulut sunucularının ölçeğini genişletmek için bir Amazon CloudWatch alarmı kullanın.

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

Soru #164

Bir şirketin iki uygulaması vardır: işlenecek verilerle mesajlar gönderen bir gönderen uygulaması ve verilerle birlikte mesajları almayı amaçlayan bir işleme uygulaması. Şirket, iki uygulama arasındaki mesajları yönetmek için bir AWS hizmeti uygulamak istiyor. Gönderen uygulaması saatte yaklaşık 1.000 mesaj gönderebilmektedir. Mesajların işlenmesi 2 gün kadar sürebilir: Mesajlar işlenemezse, kalan mesajların işlenmesini etkilememeleri için saklanmaları gerekir. Hangi çözüm bu gereksinimleri karşılıyor ve operasyonel açıdan EN verimli olanıdır?

A. Redis veritabanını çalıştıran bir Amazon EC2 bulut sunucusu kurun. Her iki uygulamayı da örneği kullanacak şekilde yapılandırın. İletileri sırasıyla saklayın, işleyin ve silin.

B. Gönderen uygulamadan mesajları almak için Amazon Kinesis veri akışını kullanın. İşleme uygulamasını Kinesis Client Library (KCL) ile entegre edin.

C. Gönderen ve işlemci uygulamalarını bir Amazon Simple Queue Service (Amazon SQS) kuyruğuyla entegre edin. İşlenemeyen iletileri toplamak için bir teslim edilmeyen ileti kuyruğu yapılandırın.

D. İşlenecek bildirimleri almak için işleme uygulamasını bir Amazon Simple Notification Service (Amazon SNS) konusuna abone olun. SNS konusuna yazmak için gönderen uygulamasını entegre edin.

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

Soru #165

Bir çözüm mimarı, statik bir web sitesini depolamak için Amazon S3 kaynağına sahip Amazon CloudFront'u kullanan bir çözüm tasarlamalıdır. Şirketin güvenlik politikası, tüm web sitesi trafiğinin AWS WAF tarafından denetlenmesini gerektirmektedir. Çözüm mimarı bu gereksinimlere nasıl uymalıdır?

A. Yalnızca AWS WAF Amazon Kaynak Adından (ARN) gelen istekleri kabul edecek bir S3 klasör politikası yapılandırın.

B. Amazon CloudFront'u, S3 kaynağından içerik istemeden önce gelen tüm istekleri AWS WAF'a iletecek şekilde yapılandırın.

C. Amazon CloudFront IP adreslerinin yalnızca Amazon S3'e erişmesine izin veren bir güvenlik grubu yapılandırın. AWS WAF'ı CloudFront ile ilişkilendirin.

D. Amazon CloudFront ve Amazon S3'ü, S3 klasörüne erişimi kısıtlamak amacıyla bir kaynak erişim kimliği (OAI) kullanacak şekilde yapılandırın. Dağıtımda AWS WAF'ı etkinleştirin.

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

Soru #166

Küresel bir etkinliğin organizatörleri, günlük raporları statik HTML sayfaları olarak çevrimiçi hale getirmek istiyor. Sayfaların dünya çapındaki kullanıcılardan milyonlarca görüntüleme alması bekleniyor. Dosyalar bir Amazon S3 klasöründe depolanır. Bir çözüm mimarından verimli ve etkili bir çözüm tasarlaması istendi. Çözüm mimarının bunu başarmak için hangi eylemi gerçekleştirmesi gerekir?

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

Soru #167

Bir şirket, Amazon EC2 bulut sunucularından oluşan bir filo üzerinde bir üretim uygulaması çalıştırıyor. Uygulama, verileri bir Amazon SQS kuyruğundan okur ve mesajları paralel olarak işler. Mesaj hacmi tahmin edilemez ve sıklıkla aralıklı trafiğe sahiptir. Bu uygulama, mesajları herhangi bir kesinti olmadan sürekli olarak işlemelidir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Gereken maksimum kapasiteyi karşılamak için Spot Bulut Sunucularını özel olarak kullanın.

B. Gereken maksimum kapasiteyi karşılamak için yalnızca Rezerve Edilmiş Bulut Sunucularını kullanın.

C. Temel kapasite için Rezerve Bulut Sunucularını kullanın ve ek kapasiteyi yönetmek için Spot Bulut Sunucularını kullanın.

D. Temel kapasite için Rezerve Edilmiş Bulut Sunucularını kullanın ve ek kapasiteyi yönetmek için İsteğe Bağlı Bulut Sunucularını kullanın.

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

Soru #168

Bir güvenlik ekibi, ekibin tüm AWS hesaplarındaki belirli hizmetlere veya eylemlere erişimi sınırlamak istiyor. AWS Organizasyonlarındaki tüm hesaplar büyük bir kuruluşa aittir. Çözüm ölçeklenebilir olmalı ve izinlerin korunabileceği tek bir nokta bulunmalıdır. Bir çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Hizmetlere veya eylemlere erişim sağlamak için bir ACL oluşturun.

B. Hesaplara izin vermek ve bunu kullanıcı gruplarına eklemek için bir güvenlik grubu oluşturun.

C. Hizmetlere veya eylemlere erişimi reddetmek için her hesapta hesaplar arası roller oluşturun.

D. Hizmetlere veya eylemlere erişimi reddetmek için kök kuruluş biriminde bir hizmet kontrol ilkesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hizmetlere veya eylemlere erişimi reddetmek için kök kuruluş biriminde bir hizmet kontrol ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #169

Bir şirket, son zamanlarda gerçekleşen web saldırıları nedeniyle genel web uygulamasının güvenliği konusunda endişe duymaktadır. Uygulama bir Uygulama Yük Dengeleyicisi (ALB) kullanır. Bir çözüm mimarının uygulamaya yönelik DDoS saldırıları riskini azaltması gerekir. Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

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

Soru #170

Bir şirketin web uygulaması, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında çalışıyor. Şirket yakın zamanda uygulamaya yalnızca belirli bir ülkeden erişilmesini gerektiren politikasını değiştirdi. Bu gereksinimi hangi konfigürasyon karşılayacak?

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

Soru #171

Bir şirket, kullanıcılarına, ürün fiyatlarına dayalı olarak vergi hesaplamalarına yönelik sorguları otomatikleştiren bir API sağlar. Şirket, tatil sezonunda yalnızca daha yavaş yanıt sürelerine neden olan daha fazla sayıda sorguyla karşılaşıyor. Bir çözüm mimarının ölçeklenebilir ve esnek bir çözüm tasarlaması gerekir. Çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Amazon EC2 bulut sunucusunda barındırılan bir API sağlayın. EC2 bulut sunucusu, API isteği yapıldığında gerekli hesaplamaları gerçekleştirir.

B. Amazon API Gateway'i kullanarak öğe adlarını kabul eden bir REST API tasarlayın. API Gateway, vergi hesaplamaları için öğe adlarını AWS Lambda'ya aktarır.

C. Arkasında iki Amazon EC2 bulut sunucusu bulunan bir Application Load Balancer oluşturun. EC2 bulut sunucuları, alınan öğe adlarına ilişkin vergiyi hesaplayacaktır.

D. Amazon EC2 bulut sunucusunda barındırılan bir API'ye bağlanan Amazon API Gateway'i kullanarak bir REST API tasarlayın. API Gateway, vergi hesaplamaları için öğe adlarını kabul eder ve EC2 örneğine iletir.

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

Soru #172

Bir çözüm mimarı, bir uygulama için yeni bir Amazon CloudFront dağıtımı oluşturuyor. Kullanıcılar tarafından gönderilen bilgilerin bazıları hassastır. Uygulama HTTPS kullanıyor ancak başka bir güvenlik katmanına ihtiyaç duyuyor. Hassas bilgiler tüm uygulama yığını boyunca korunmalı ve bilgilere erişim belirli uygulamalarla sınırlandırılmalıdır. Çözüm mimarı hangi eylemi gerçekleştirmelidir?

A. CloudFront imzalı bir URL yapılandırın.

B. CloudFront imzalı bir çerez yapılandırın.

C. CloudFront alan düzeyinde şifreleme profilini yapılandırın.

D. CloudFront'u yapılandırın ve Görüntüleyici Protokol Politikası için Origin Protokol Politikası ayarını Yalnızca HTTPS olarak ayarlayın.

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

Soru #173

Bir oyun şirketi, AWS'de tarayıcı tabanlı bir uygulamaya ev sahipliği yapıyor. Uygulamanın kullanıcıları Amazon S3'te depolanan çok sayıda video ve görseli tüketiyor. Bu içerik tüm kullanıcılar için aynıdır. Uygulamanın popülaritesi arttı ve dünya çapında milyonlarca kullanıcı bu medya dosyalarına erişiyor. Şirket, kaynak üzerindeki yükü azaltırken dosyaları kullanıcılara sunmak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

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

Soru #174

Bir şirketin, Application Load Balancer'ın (ALB) arkasında tek bir Erişilebilirlik Alanında yer alan Amazon EC2 Auto Scaling grubundaki altı ön uç web sunucusunu çalıştıran çok katmanlı bir uygulaması vardır. Bir çözüm mimarının, uygulamayı değiştirmeden altyapıyı yüksek düzeyde kullanılabilir olacak şekilde değiştirmesi gerekir. Çözüm mimarı yüksek kullanılabilirlik sağlayan hangi mimariyi seçmelidir?

A. İki Bölgenin her birinde üç örnek kullanan bir Otomatik Ölçeklendirme grubu oluşturun.

B. Otomatik Ölçeklendirme grubunu, iki Erişilebilirlik Alanının her birinde üç bulut sunucusu kullanacak şekilde değiştirin.

C. Başka bir Bölgede hızla daha fazla örnek oluşturmak için kullanılabilecek bir Otomatik Ölçeklendirme şablonu oluşturun.

D. Web katmanına giden trafiği dengelemek için Amazon EC2 bulut sunucularının önündeki ALB'yi bir kez deneme yapılandırmasında değiştirin.

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

Soru #175

Bir e-ticaret şirketinin Amazon API Gateway'i ve AWS Lambda işlevini kullanan bir sipariş işleme uygulaması var. Uygulama, verileri bir Amazon Aurora PostgreSQL veritabanında depolar. Yakın zamanda gerçekleşen bir satış etkinliği sırasında müşteri siparişlerinde ani bir artış meydana geldi. Bazı müşteriler zaman aşımına uğradı ve uygulama bu müşterilerin siparişlerini işleme koymadı. Bir çözüm mimarı, çok sayıda açık bağlantı nedeniyle veritabanında CPU ve bellek kullanımının yüksek olduğunu belirledi. Çözüm mimarının uygulamada mümkün olan en az değişikliği yaparken zaman aşımı hatalarını önlemesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevi için sağlanan eşzamanlılığı yapılandırın. Veritabanını birden fazla AWS Bölgesinde global bir veritabanı olacak şekilde değiştirin.

B. Veritabanına yönelik bir proxy oluşturmak için Amazon RDS Proxy'yi kullanın. Lambda işlevini, veritabanı uç noktası yerine RDS Proxy uç noktasını kullanacak şekilde değiştirin.

C. Farklı bir AWS Bölgesindeki veritabanı için bir okuma kopyası oluşturun. Trafiği okuma kopyasına yönlendirmek için API Ağ Geçidi'ndeki sorgu dizesi parametrelerini kullanın.

D. AWS Database Migration Service'i (AWS DMS) kullanarak verileri Aurora PostgreSQL'den Amazon DynamoDB'ye taşıyın. DynamoDB tablosunu kullanmak için Lambda işlevini değiştirin.

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

Soru #176

Bir uygulama, özel alt ağlardaki Amazon EC2 bulut sunucularında çalışır. Uygulamanın bir Amazon DynamoDB tablosuna erişmesi gerekiyor. Trafiğin AWS ağından ayrılmamasını sağlarken tabloya erişmenin EN güvenli yolu nedir?

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

Soru #177

Bir eğlence şirketi, medya meta verilerini depolamak için Amazon DynamoDB'yi kullanıyor. Uygulama yoğun okunuyor ve gecikmeler yaşanıyor. Şirketin ek operasyonel yükü karşılayacak personeli bulunmuyor ve uygulamayı yeniden yapılandırmadan DynamoDB'nin performans verimliliğini artırması gerekiyor. Bir çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

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

Soru #178

Bir şirketin altyapısı, tek bir AWS Bölgesindeki Amazon EC2 bulut sunucularından ve bir Amazon RDS DB bulut sunucusundan oluşur. Şirket, verilerini ayrı bir Bölgede yedeklemek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. EC2 yedeklerini ve RDS yedeklerini ayrı Bölgeye kopyalamak için AWS Backup'ı kullanın.

B. EC2 yedeklerini ve RDS yedeklerini ayrı Bölgeye kopyalamak için Amazon Data Lifecycle Manager'ı (Amazon DLM) kullanın.

C. EC2 bulut sunucularının Amazon Machine Image'larını (AMI'ler) oluşturun. AMI'leri ayrı Bölgeye kopyalayın. Ayrı Bölgede RDS Veritabanı bulut sunucusu için bir okuma kopyası oluşturun.

D. Amazon Elastic Block Store (Amazon EBS) anlık yedeklerini oluşturun. EBS anlık görüntülerini ayrı Bölgeye kopyalayın. RDS anlık görüntüleri oluşturun. RDS anlık yedeklerini Amazon S3'e aktarın. S3 Bölgeler Arası Çoğaltmayı (CRR) ayrı Bölgeye yapılandırın.

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

Soru #179

Çözüm mimarının, bir uygulamanın Amazon RDS DB bulut sunucusuna erişmek için kullandığı veritabanı kullanıcı adını ve parolasını güvenli bir şekilde saklaması gerekir. Veritabanına erişen uygulama bir Amazon EC2 bulut sunucusunda çalışır. Çözüm mimarı, AWS Systems Manager Parameter Store'da güvenli bir parametre oluşturmak istiyor. Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Parametre Deposu parametresine okuma erişimi olan bir IAM rolü oluşturun. Parametreyi şifrelemek için kullanılan bir AWS Key Management Service (AWS KMS) anahtarına Şifre Çözme erişimine izin verin. Bu IAM rolünü EC2 örneğine atayın.

B. Parametre Deposu parametresine okuma erişimine izin veren bir IAM politikası oluşturun. Parametreyi şifrelemek için kullanılan bir AWS Key Management Service (AWS KMS) anahtarına Şifre Çözme erişimine izin verin. Bu IAM politikasını EC2 örneğine atayın.

C. Parametre Deposu parametresi ile EC2 örneği arasında bir IAM güven ilişkisi oluşturun. Güven politikasında Amazon RDS'yi sorumlu olarak belirtin.

D. Veritabanı bulut sunucusu ile EC2 bulut sunucusu arasında bir IAM güven ilişkisi oluşturun. Güven ilkesinde Sistem Yöneticisini sorumlu olarak belirtin.

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

Soru #180

Bir şirket, API'ler tarafından desteklenen bir bulut iletişim platformu tasarlıyor. Uygulama, bir Ağ Yük Dengeleyicisinin (NLB) arkasındaki Amazon EC2 bulut sunucularında barındırılır. Şirket, harici kullanıcıların uygulamaya API'ler aracılığıyla erişmesini sağlamak için Amazon API Gateway'i kullanıyor. Şirket, platformu SQL enjeksiyonu gibi web istismarlarına karşı korumak istiyor ve aynı zamanda büyük, karmaşık DDoS saldırılarını tespit edip azaltmak istiyor. Hangi çözüm kombinasyonu EN ÇOK korumayı sağlar? (İki tane seçin.)

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

Soru #181

Bir şirketin Amazon EC2 bulut sunucularında çalışan eski bir veri işleme uygulaması var. Veriler sırayla işlenir ancak sonuçların sırası önemli değildir. Uygulama monolitik bir mimari kullanıyor. Şirketin artan talebi karşılayacak şekilde uygulamayı ölçeklendirmesinin tek yolu örneklerin boyutunu artırmaktır. Şirketin geliştiricileri, uygulamayı Amazon Elastic Container Service (Amazon ECS) üzerinde bir mikro hizmet mimarisini kullanacak şekilde yeniden yazmaya karar verdi. Bir çözüm mimarı mikro hizmetler arasındaki iletişim için ne önermelidir?

A. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Veri üreticilerine kod ekleyin ve verileri kuyruğa gönderin. Kuyruktaki verileri işlemek için veri tüketicilerine kod ekleyin.

B. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Veri üreticilerine kod ekleyin ve konuya ilişkin bildirimler yayınlayın. Konuya abone olmak için veri tüketicilerine kod ekleyin.

C. Mesajları iletmek için bir AWS Lambda işlevi oluşturun. Lambda işlevini bir veri nesnesiyle çağırmak için veri üreticilerine kod ekleyin. Lambda işlevinden iletilen bir veri nesnesini almak için veri tüketicilerine kod ekleyin.

D. Bir Amazon DynamoDB tablosu oluşturun. DynamoDB Akışlarını etkinleştirin. Tabloya veri eklemek için veri üreticilerine kod ekleyin. Yeni tablo girişlerini tespit etmek ve verileri almak amacıyla DynamoDB Streams API'yi kullanmak için veri tüketicilerine kod ekleyin.

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

Soru #182

Bir şirket MySQL veritabanını şirket içinden AWS'ye taşımak istiyor. Şirket yakın zamanda işi önemli ölçüde etkileyen bir veritabanı kesintisi yaşadı. Bunun bir daha yaşanmamasını sağlamak için şirket, AWS'de veri kaybını en aza indiren ve her işlemi en az iki düğümde depolayan güvenilir bir veritabanı çözümü istiyor. Hangi çözüm bu gereksinimleri karşılıyor?

A. Üç Erişilebilirlik Alanındaki üç düğüme eşzamanlı çoğaltma ile bir Amazon RDS DB bulut sunucusu oluşturun.

B. Verileri eşzamanlı olarak çoğaltmak için Multi-AZ işlevselliği etkinleştirilmiş bir Amazon RDS MySQL Veritabanı bulut sunucusu oluşturun.

C. Bir Amazon RDS MySQL Veritabanı bulut sunucusu oluşturun ve ardından ayrı bir AWS Bölgesinde verileri eşzamanlı olarak çoğaltan bir okuma kopyası oluşturun.

D. Verileri eşzamanlı olarak bir Amazon RDS MySQL veritabanı bulut sunucusuna kopyalamak için bir AWS Lambda işlevini tetikleyen MySQL motoru yüklü bir Amazon EC2 bulut sunucusu oluşturun.

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

Soru #183

Bir şirket yeni bir dinamik sipariş sitesi oluşturuyor. Şirket, sunucu bakımı ve yama uygulamasını en aza indirmek istiyor. Web sitesi yüksek düzeyde erişilebilir olmalı ve kullanıcı talebindeki değişiklikleri karşılamak için okuma ve yazma kapasitesini mümkün olduğunca hızlı bir şekilde ölçeklendirmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Statik içeriği Amazon S3'te barındırın. Amazon API Gateway ve AWS Lambda'yı kullanarak dinamik içerik barındırın. Veritabanı için isteğe bağlı kapasiteye sahip Amazon DynamoDB'yi kullanın. Web sitesi içeriğini sunmak için Amazon CloudFront'u yapılandırın.

B. Statik içeriği Amazon S3'te barındırın. Amazon API Gateway ve AWS Lambda'yı kullanarak dinamik içerik barındırın. Veritabanı için Amazon Aurora'yı Aurora Auto Scaling ile birlikte kullanın. Web sitesi içeriğini sunmak için Amazon CloudFront'u yapılandırın.

C. Tüm web sitesi içeriğini Amazon EC2 bulut sunucularında barındırın. EC2 bulut sunucularını ölçeklendirmek için bir Otomatik Ölçeklendirme grubu oluşturun. Trafiği dağıtmak için Application Load Balancer kullanın. Veritabanı için tedarik edilmiş yazma kapasitesiyle Amazon DynamoDB'yi kullanın.

D. Tüm web sitesi içeriğini Amazon EC2 bulut sunucularında barındırın. EC2 bulut sunucularını ölçeklendirmek için bir Otomatik Ölçeklendirme grubu oluşturun. Trafiği dağıtmak için Application Load Balancer kullanın. Veritabanı için Amazon Aurora'yı Aurora Auto Scaling ile birlikte kullanın.

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

Soru #184

Bir şirketin yazılım mühendisliği için kullanılan bir AWS hesabı var. AWS hesabının, bir çift AWS Direct Connect bağlantısı aracılığıyla şirketin şirket içi veri merkezine erişimi vardır. VPC olmayan tüm trafik, sanal özel ağ geçidine yönlendirilir. Bir geliştirme ekibi yakın zamanda konsol aracılığıyla bir AWS Lambda işlevi oluşturdu. Geliştirme ekibinin, fonksiyonun şirketin veri merkezindeki özel bir alt ağda çalışan bir veritabanına erişmesine izin vermesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevini uygun güvenlik grubuyla VPC'de çalışacak şekilde yapılandırın.

B. AWS'den veri merkezine bir VPN bağlantısı kurun. Trafiği Lambda işlevinden VPN aracılığıyla yönlendirin.

C. Lambda işlevinin Direct Connect aracılığıyla şirket içi veri merkezine erişmesine izin vermek için VPC'deki rota tablolarını güncelleyin.

D. Esnek bir IP adresi oluşturun. Lambda işlevini, trafiği elastik bir ağ arayüzü olmadan Elastik IP adresi üzerinden gönderecek şekilde yapılandırın.

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

Soru #185

Bir şirket, Amazon ECS'yi kullanarak bir uygulama çalıştırıyor. Uygulama, orijinal görüntünün yeniden boyutlandırılmış sürümlerini oluşturur ve ardından yeniden boyutlandırılan görüntüleri Amazon S3'te depolamak için Amazon S3 API çağrıları yapar. Bir çözüm mimarı, uygulamanın Amazon S3'e erişim iznine sahip olduğundan nasıl emin olabilir?

A. Amazon ECS'den okuma/yazma erişimine izin vermek için AWS IAM'deki S3 rolünü güncelleyin ve ardından konteyneri yeniden başlatın.

B. S3 izinlerine sahip bir IAM rolü oluşturun ve ardından bu rolü, görev tanımında görevRoleArn olarak belirtin.

C. Amazon ECS'den Amazon S3'e erişime izin veren bir güvenlik grubu oluşturun ve ECS kümesi tarafından kullanılan başlatma yapılandırmasını güncelleyin.

D. S3 izinlerine sahip bir IAM kullanıcısı oluşturun ve ardından bu hesapla oturum açmışken ECS kümesi için Amazon EC2 bulut sunucularını yeniden başlatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 izinlerine sahip bir IAM rolü oluşturun ve ardından bu rolü, görev tanımında TaskRoleArn olarak belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #186

Bir şirketin AWS'ye taşınması gereken Windows tabanlı bir uygulaması var. Uygulama, birden fazla Erişilebilirlik Alanında dağıtılan birden fazla Amazon EC2 Windows örneğine bağlı, paylaşılan bir Windows dosya sisteminin kullanılmasını gerektirir: Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. AWS Storage Gateway'i birim ağ geçidi modunda yapılandırın. Birimi her Windows örneğine bağlayın.

B. Amazon FSx'i Windows Dosya Sunucusu için yapılandırın. Amazon FSx dosya sistemini her Windows örneğine bağlayın.

C. Amazon Elastic File System'i (Amazon EFS) kullanarak bir dosya sistemi yapılandırın. EFS dosya sistemini her Windows örneğine bağlayın.

D. Gerekli boyutta bir Amazon Elastic Block Store (Amazon EBS) birimi yapılandırın. Her EC2 örneğini birime ekleyin. Birim içindeki dosya sistemini her Windows örneğine bağlayın.

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

Soru #187

Bir şirket, yük dengeli bir ön uç, konteyner tabanlı bir uygulama ve ilişkisel bir veritabanından oluşacak bir e-ticaret uygulaması geliştiriyor. Bir çözüm mimarının mümkün olduğunca az manuel müdahaleyle çalışan, yüksek kullanılabilirliğe sahip bir çözüm yaratması gerekir. Bu gereksinimleri hangi çözümler karşılıyor? (İki tane seçin.)

A. Multi-AZ modunda bir Amazon RDS DB bulut sunucusu oluşturun.

B. Başka bir Erişilebilirlik Alanında bir Amazon RDS DB bulut sunucusu ve bir veya daha fazla replika oluşturun.

C. Dinamik uygulama yükünü işlemek için Amazon EC2 bulut sunucusu tabanlı bir Docker kümesi oluşturun.

D. Dinamik uygulama yükünü işlemek için Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun.

E. Dinamik uygulama yükünü işlemek için Amazon EC2 başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Multi-AZ modunda bir Amazon RDS DB bulut sunucusu oluşturun. Dinamik uygulama yükünü işlemek için Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #188

Bir şirket veri gölü olarak Amazon S3'ü kullanıyor. Şirketin, veri dosyalarını yüklemek için SFTP kullanması gereken yeni bir ortağı var. Bir çözüm mimarının, operasyonel ek yükü en aza indiren, yüksek oranda kullanılabilir bir SFTP çözümü uygulaması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Herkese açık bir uç noktaya sahip SFTP özellikli bir sunucuyu yapılandırmak için AWS Transfer Family'yi kullanın. Hedef olarak S3 veri gölünü seçin.

B. Amazon S3 File Gateway'i SFTP sunucusu olarak kullanın. S3 Dosya Ağ Geçidi uç noktası URL'sini yeni ortağa gösterin. S3 Dosya Ağ Geçidi uç noktasını yeni iş ortağıyla paylaşın.

C. Bir VPI'deki özel bir alt ağda bir Amazon EC2 bulut sunucusu başlatın. Yeni ortağa, bir VPN kullanarak EC2 bulut sunucusuna dosya yüklemesi talimatını verin. Dosyaları S3 veri gölüne yüklemek için EC2 örneğinde bir cron iş komut dosyası çalıştırın.

D. Amazon EC2 bulut sunucularını VPC'deki özel bir alt ağda başlatın. EC2 bulut sunucularının önüne bir Ağ Yük Dengeleyicisi (NLB) yerleştirin. NLB için bir SFTP dinleyici bağlantı noktası oluşturun. NLB ana bilgisayar adını yeni iş ortağıyla paylaşın. Dosyaları S3 veri gölüne yüklemek için EC2 bulut sunucularında bir cron iş betiği çalıştırın.

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

Soru #189

Bir şirketin sözleşme belgelerini saklaması gerekir. Bir sözleşme 5 yıl süreyle geçerlidir. 5 yıllık süre boyunca şirket, belgelerin üzerine yazılamamasını veya silinmemesini sağlamalıdır. Şirketin, kullanımda olmayan belgeleri şifrelemesi ve şifreleme anahtarlarını her yıl otomatik olarak döndürmesi gerekiyor. Bir çözüm mimarı bu gereksinimleri EN AZ operasyonel giderle karşılamak için hangi adım kombinasyonunu uygulamalıdır? (İki tane seçin.)

A. Belgeleri Amazon S3'te saklayın. Yönetişim modunda S3 Object Lock'u kullanın.

B. Belgeleri Amazon S3'te saklayın. S3 Object Lock'u uyumluluk modunda kullanın.

C. Amazon S3 tarafından yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın. Anahtar rotasyonunu yapılandırın.

D. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtarlarla sunucu tarafı şifrelemeyi kullanın. Anahtar rotasyonunu yapılandırın.

E. AWS Key Management Service (AWS KMS) müşterisi tarafından sağlanan (içe aktarılan) anahtarlarla sunucu tarafı şifrelemeyi kullanın. Anahtar rotasyonunu yapılandırın.

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

Soru #190

Bir şirketin Java ve PHP tabanlı bir web uygulaması var. Şirket, uygulamayı şirket içinden AWS'ye taşımayı planlıyor. Şirketin yeni site özelliklerini sık sık test etme becerisine ihtiyacı var. Şirketin ayrıca minimum operasyonel ek yük gerektiren, yüksek oranda kullanılabilir ve yönetilen bir çözüme ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir Amazon S3 klasörü oluşturun. S3 paketinde statik web barındırmayı etkinleştirin. Statik içeriği S3 klasörüne yükleyin. Tüm dinamik içeriği işlemek için AWS Lambda'yı kullanın.

B. Web uygulamasını bir AWS Elastic Beanstalk ortamına dağıtın. Özellik testi amacıyla birden fazla Elastic Beanstalk ortamı arasında geçiş yapmak için URL değiştirmeyi kullanın.

C. Web uygulamasını Java ve PHP ile yapılandırılmış Amazon EC2 bulut sunucularına dağıtın. Web sitesinin kullanılabilirliğini yönetmek için Otomatik Ölçeklendirme gruplarını ve Application Load Balancer'ı kullanın.

D. Web uygulamasını kapsayıcı hale getirin. Web uygulamasını Amazon EC2 bulut sunucularına dağıtın. Test amacıyla yeni site özelliklerini içeren konteynerler arasındaki trafiği dinamik olarak yönlendirmek için AWS Load Balancer Controller'ı kullanın.

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

Soru #191

Bir şirketin müşteri bilgilerini Amazon RDS for MySQL'de saklayan bir sipariş uygulaması var. Normal iş saatleri sırasında çalışanlar raporlama amacıyla tek seferlik sorgular çalıştırır. Raporlama sorgularının çalıştırılması uzun zaman aldığından sipariş işleme sırasında zaman aşımları yaşanıyor. Şirketin, çalışanların sorgulama yapmasını engellemeden zaman aşımlarını ortadan kaldırması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Okuma kopyası oluşturun. Raporlama sorgularını okuma kopyasına taşıyın.

B. Bir okuma kopyası oluşturun. Sipariş uygulamasını birincil veritabanı bulut sunucusuna ve okuma replikasına dağıtın.

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

Soru #192

Bir hastane, geniş tarihi yazılı kayıt koleksiyonunun dijital kopyalarını oluşturmak istiyor. Hastane her gün yüzlerce yeni belge eklemeye devam edecek. Hastanenin veri ekibi belgeleri tarayacak ve belgeleri AWS Cloud'a yükleyecektir. Bir çözüm mimarı, bir uygulamanın veriler üzerinde SQL sorguları çalıştırabilmesi için belgeleri analiz etmek, tıbbi bilgileri çıkarmak ve belgeleri depolamak için bir çözüm uygulamalıdır. Çözüm, ölçeklenebilirliği ve operasyonel verimliliği en üst düzeye çıkarmalıdır. Çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Belge bilgilerini MySQL veritabanını çalıştıran bir Amazon EC2 bulut sunucusuna yazın.

B. Belge bilgilerini bir Amazon S3 klasörüne yazın. Verileri sorgulamak için Amazon Athena'yı kullanın.

C. Taranan dosyaları işleyen ve tıbbi bilgileri çıkaran özel bir uygulamayı çalıştırmak için Amazon EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu oluşturun.

D. Yeni belgeler yüklendiğinde çalışacak bir AWS Lambda işlevi oluşturun. Belgeleri ham metne dönüştürmek için Amazon Rekognition'ı kullanın. Metinden ilgili tıbbi bilgileri tespit etmek ve çıkarmak için Amazon Transcribe Medical'ı kullanın.

E. Yeni belgeler yüklendiğinde çalışacak bir AWS Lambda işlevi oluşturun. Belgeleri ham metne dönüştürmek için Amazon Texttract'ı kullanın. Metinden ilgili tıbbi bilgileri tespit etmek ve çıkarmak için Amazon Comprehend Medical'ı kullanın.

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

Soru #193

Bir şirket Amazon EC2 bulut sunucularında toplu uygulama çalıştırıyor. Uygulama, birden fazla Amazon RDS veritabanına sahip bir arka uçtan oluşur. Uygulama veritabanlarında yüksek sayıda okumaya neden oluyor. Bir çözüm mimarı, yüksek kullanılabilirliği sağlarken veritabanı okuma sayısını da azaltmalıdır. Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

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

Soru #194

Bir şirketin AWS'de kritik bir uygulamayı çalıştırması gerekiyor. Şirketin uygulamanın veritabanı için Amazon EC2 kullanması gerekiyor. Veritabanının yüksek oranda kullanılabilir olması ve aksatıcı bir olay meydana gelmesi durumunda otomatik olarak yük devretmesi gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Her biri aynı AWS Bölgesinde farklı bir Erişilebilirlik Alanında bulunan iki EC2 bulut sunucusunu başlatın. Veritabanını her iki EC2 bulut sunucusuna yükleyin. EC2 bulut sunucularını küme olarak yapılandırın. Veritabanı çoğaltmasını ayarlayın.

B. Erişilebilirlik Alanında bir EC2 bulut sunucusu başlatın. Veritabanını EC2 örneğine yükleyin. Verileri yedeklemek için bir Amazon Machine Image (AMI) kullanın. Kesintiye yol açan bir olay meydana gelirse EC2 bulut sunucusunun provizyonunu otomatikleştirmek için AWS CloudFormation'ı kullanın.

C. Her biri farklı bir AWS Bölgesinde bulunan iki EC2 bulut sunucusunu başlatın. Veritabanını her iki EC2 bulut sunucusuna yükleyin. Veritabanı çoğaltmasını ayarlayın. Veritabanını ikinci bir Bölgeye devredin.

D. Erişilebilirlik Alanında bir EC2 bulut sunucusu başlatın. Veritabanını EC2 örneğine yükleyin. Verileri yedeklemek için bir Amazon Machine Image (AMI) kullanın. Yıkıcı bir olay meydana gelirse örneği kurtarmak için EC2 otomatik kurtarmayı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her biri aynı AWS Bölgesinde farklı bir Erişilebilirlik Alanında bulunan iki EC2 bulut sunucusunu başlatın. Veritabanını her iki EC2 bulut sunucusuna yükleyin. EC2 bulut sunucularını küme olarak yapılandırın. Veritabanı çoğaltmasını ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #195

Bir şirketin sipariş sistemi, müşterilerden gelen istekleri Amazon EC2 bulut sunucularına gönderir. EC2 bulut sunucuları siparişleri işler ve ardından siparişleri Amazon RDS'deki bir veritabanında saklar. Kullanıcılar, sistem arızalandığında siparişleri yeniden işleme koymaları gerektiğini bildiriyor. Şirket, sistemde bir kesinti olması durumunda siparişleri otomatik olarak işleyebilecek esnek bir çözüm istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. EC2 örneklerini bir Otomatik Ölçeklendirme grubuna taşıyın. Bir Amazon Elastic Container Service (Amazon ECS) görevini hedeflemek için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun.

B. EC2 örneklerini Application Load Balancer'ın (ALB) arkasındaki Otomatik Ölçeklendirme grubuna taşıyın. ALB uç noktasına mesaj göndermek için sipariş sistemini güncelleyin.

C. EC2 örneklerini bir Otomatik Ölçeklendirme grubuna taşıyın. Sipariş sistemini, Amazon Simple Queue Service (Amazon SQS) kuyruğuna mesaj gönderecek şekilde yapılandırın. EC2 bulut sunucularını kuyruktaki mesajları tüketecek şekilde yapılandırın.

D. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Bir AWS Lambda işlevi oluşturun ve işlevi SNS konusuna abone olun. Sipariş sistemini SNS konusuna mesaj gönderecek şekilde yapılandırın. AWS Systems Manager Çalıştırma Komutunu kullanarak mesajları işlemek için EC2 bulut sunucularına bir komut gönderin.

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

Soru #196

Bir şirket, Amazon EC2 bulut sunucularından oluşan geniş bir filoda bir uygulama çalıştırıyor. Uygulama, girişleri bir Amazon DynamoDB tablosuna okur ve yazar. DynamoDB tablosunun boyutu sürekli olarak büyüyor ancak uygulamanın yalnızca son 30 güne ait verilere ihtiyacı var. Şirketin maliyeti ve geliştirme çabasını en aza indirecek bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri karşılıyor?

A. Çözümün tamamını dağıtmak için bir AWS CloudFormation şablonu kullanın. CloudFormation yığınını her 30 günde bir yeniden konuşlandırın ve orijinal yığını silin.

B. AWS Marketplace'ten bir izleme uygulaması çalıştıran bir EC2 bulut sunucusu kullanın. İzleme uygulamasını, tabloda yeni bir öğe oluşturulduğunda zaman damgasını depolamak için Amazon DynamoDB Streams'i kullanacak şekilde yapılandırın. 30 günden daha eski bir zaman damgasına sahip öğeleri silmek için EC2 örneğinde çalışan bir komut dosyası kullanın.

C. Amazon DynamoDB Streams'i, tabloda yeni bir öğe oluşturulduğunda bir AWS Lambda işlevini çağıracak şekilde yapılandırın. Tablodaki 30 günden eski öğeleri silmek için Lambda işlevini yapılandırın.

D. Uygulamayı, tabloda oluşturulan her yeni öğeye geçerli zaman damgası artı 30 gün değerine sahip bir öznitelik ekleyecek şekilde genişletin. Özniteliği TTL özniteliği olarak kullanacak şekilde DynamoDB'yi yapılandırın.

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

Soru #197

Bir şirketin şirket içi Windows Server'da çalışan bir Microsoft .NET uygulaması var. Uygulama, verileri Oracle Database Standard Edition sunucusunu kullanarak depolar. Şirket, AWS'ye geçiş yapmayı planlıyor ve uygulamayı taşırken geliştirme değişikliklerini en aza indirmek istiyor. AWS uygulama ortamı yüksek düzeyde kullanılabilir olmalıdır. Şirketin bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. .NET Core çalıştıran AWS Lambda işlevleriyle uygulamayı sunucusuz olarak yeniden düzenleyin.

B. Multi-AZ dağıtımında uygulamayı .NET platformuyla AWS Elastic Beanstalk'ta yeniden barındırın.

C. Uygulamayı Amazon EC2'de çalışacak şekilde Amazon Linux Amazon Machine Image (AMI) ile yeniden platformlayın.

D. Multi-AZ dağıtımında Oracle veritabanından Amazon DynamoDB'ye geçiş yapmak için AWS Database Migration Service'i (AWS DMS) kullanın.

E. Multi-AZ dağıtımında Oracle veritabanından Amazon RDS'deki Oracle'a geçiş yapmak için AWS Database Migration Service'i (AWS DMS) kullanın.

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

Soru #198

Bir şirket, şirket içi veri merkezindeki Kubernetes kümesinde konteynerli bir uygulama çalıştırıyor. Şirket, veri depolama için MongoDB veritabanını kullanıyor. Şirket bu ortamlardan bazılarını AWS'ye taşımak istiyor ancak şu anda herhangi bir kod değişikliği veya dağıtım yöntemi değişikliği mümkün değil. Şirketin operasyonel ek yükü en aza indirecek bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri karşılıyor?

A. İşlem için Amazon EC2 çalışan düğümleriyle Amazon Elastic Container Service'i (Amazon ECS) ve veri depolama için EC2'de MongoDB'yi kullanın.

B. İşlem için AWS Fargate ve veri depolama için Amazon DynamoDB ile Amazon Elastic Container Service'i (Amazon ECS) kullanın

C. İşlem için Amazon EC2 çalışan düğümleriyle ve veri depolama için Amazon DynamoDB ile Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanın.

D. İşlem için Amazon Elastic Kubernetes Service'i (Amazon EKS) AWS Fargate ile ve veri depolama için Amazon DocumentDB'yi (MongoDB uyumluluğuyla) kullanın.

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

Soru #199

Bir telefonla pazarlama şirketi, müşteri çağrı merkezi işlevselliğini AWS'de tasarlıyor. Şirketin birden fazla konuşmacıyı tanımayı sağlayan ve transkript dosyaları oluşturan bir çözüme ihtiyacı var. Şirket, iş modellerini analiz etmek için transkript dosyalarını sorgulamak istiyor. Transkript dosyaları denetim amacıyla 7 yıl süreyle saklanmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Birden fazla konuşmacıyı tanımak için Amazon Rekognition'ı kullanın. Transkript dosyalarını Amazon S3'te saklayın. Transkript dosya analizi için makine öğrenimi modellerini kullanın.

B. Birden fazla konuşmacıyı tanımak için Amazon Transcribe'ı kullanın. Transkript dosya analizi için Amazon Athena'yı kullanın.

C. Birden fazla konuşmacıyı tanımak için Amazon Translate'i kullanın. Transkript dosyalarını Amazon Redshift'te saklayın. Transkript dosya analizi için SQL sorgularını kullanın.

D. Birden fazla konuşmacıyı tanımak için Amazon Rekognition'ı kullanın. Transkript dosyalarını Amazon S3'te saklayın. Transkript dosya analizi için Amazon Texttract'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Birden fazla konuşmacıyı tanımak için Amazon Transcribe'ı kullanın. Transkript dosya analizi için Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #200

Bir şirket, uygulamasını AWS'de barındırıyor. Şirket, kullanıcıları yönetmek için Amazon Cognito'yu kullanıyor. Kullanıcılar uygulamada oturum açtığında uygulama, Amazon API Gateway'de barındırılan bir REST API'yi kullanarak gerekli verileri Amazon DynamoDB'den alır. Şirket, geliştirme çabalarını azaltmak için REST API'ye erişimi kontrol edecek, AWS tarafından yönetilen bir çözüm istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Hangi kullanıcının istekte bulunduğunu doğrulamak için bir AWS Lambda işlevini API Gateway'de yetkilendirici olacak şekilde yapılandırın.

B. Her kullanıcı için, her istekle birlikte gönderilmesi gereken bir API anahtarı oluşturun ve atayın. AWS Lambda işlevini kullanarak anahtarı doğrulayın.

C. Her istekte kullanıcının e-posta adresini başlıkta gönderin. Bu e-posta adresine sahip kullanıcının uygun erişime sahip olduğunu doğrulamak için bir AWS Lambda işlevini çağırın.

D. Amazon Cognito'nun her isteği doğrulamasına izin vermek için API Gateway'de bir Amazon Cognito kullanıcı havuzu yetkilendiricisini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon Cognito'nun her isteği doğrulamasına izin vermek için API Gateway'de bir Amazon Cognito kullanıcı havuzu yetkilendiricisini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
