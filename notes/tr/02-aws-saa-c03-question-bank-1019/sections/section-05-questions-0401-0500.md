# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 05

> **Soru Aralığı:** 401 - 500 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #400

Yeni kurulan bir meteoroloji şirketi, kullanıcılarına hava durumu verilerini satmak için özel bir web uygulamasına sahip
çevrimiçi. Şirket, verilerini depolamak için Amazon DynamoDB'yi kullanıyor ve yeni bir hizmet oluşturmak istiyor
Her yeni hava durumu olayında dört dahili ekibin yöneticilerine bir uyarı gönderen sistem
kaydedildi. Şirket bu yeni hizmetin mevcut hizmetin performansını etkilemesini istemiyor
uygulama.
Bir çözüm mimarı bu gereksinimleri EN AZ miktarda maliyetle karşılamak için ne yapmalıdır?
operasyonel yük?

A. Tabloya yeni olay verilerini yazmak için DynamoDB işlemlerini kullanın. İşlemleri yapılandırın
dahili ekiplere haber verin.

B. Mevcut uygulamanın dört Amazon Basit Bildirim Hizmetine bir mesaj yayınlamasını sağlayın
(Amazon SNS) konuları. Her takımın bir konuya abone olmasını sağlayın.

C. Tabloda Amazon DynamoDB Akışlarını etkinleştirin. Tek bir Amazon'a yazmak için tetikleyicileri kullanın
Ekiplerin abone olabileceği Basit Bildirim Hizmeti (Amazon SNS) konusu.

D. Yeni öğeleri işaretlemek için her kayda özel bir özellik ekleyin. Tabloyu tarayan bir cron işi yazın
Yeni öğeler için her dakika ve Amazon Basit Kuyruk Hizmetine (Amazon SQS) bildirimde bulunur
Takımların abone olabileceği kuyruk.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tabloda Amazon DynamoDB Akışlarını etkinleştirin. Ekiplerin abone olabileceği tek bir Amazon Simple Notification Service (Amazon SNS) konusuna yazmak için tetikleyicileri kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 401
Bir şirket, mevcut bir uygulamayı yüksek düzeyde kullanılabilir hale getirmek için AWS Cloud'u kullanmak istiyor ve
dayanıklı. Uygulamanın güncel sürümü şirketin veri merkezinde bulunmaktadır.
Uygulama yakın zamanda bir veritabanı sunucusunun çökmesi nedeniyle veri kaybı yaşadı.
beklenmedik elektrik kesintisi.
Şirketin tek bir arıza noktasını ortadan kaldıracak bir çözüme ihtiyacı var. Çözüm şunu sağlamalıdır:
Uygulamanın kullanıcı talebini karşılayacak şekilde ölçeklendirme yeteneği.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulama sunucularını bir Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın
birden fazla Erişilebilirlik Alanında. Multi-AZ yapılandırmasında bir Amazon RDS veritabanı bulut sunucusu kullanın.

B. Uygulama sunucularını, bir Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularını kullanarak dağıtın.
tek Erişilebilirlik Alanı. Veritabanını bir EC2 bulut sunucusuna dağıtın. EC2 Otomatik Kurtarmayı etkinleştirin.

C. Uygulama sunucularını bir Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın
birden fazla Erişilebilirlik Alanında. Tek bir sunucuda okuma replikasıyla bir Amazon RDS DB bulut sunucusu kullanın
Erişilebilirlik Alanı. Birincil DB'nin birincil DB örneğini değiştirmesi için okuma replikasını yükseltin
örnek başarısız olur.

D. Uygulama sunucularını bir Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın
birden fazla Erişilebilirlik Alanında. Birincil ve ikincil veritabanı sunucularını EC2'de dağıtın
birden fazla Erişilebilirlik Alanındaki bulut sunucuları. Amazon Elastic Block Store'u (Amazon EBS) kullanın
Örnekler arasında paylaşılan depolama alanı oluşturmak için Multi-Attach.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulama sunucularını birden fazla Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın. Multi-AZ yapılandırmasında bir Amazon RDS veritabanı bulut sunucusu kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 402
Bir şirketin, uygulamasının gerektirdiği büyük miktarlardaki akış verilerini alıp işlemesi gerekir.
üretir. Uygulama Amazon EC2 bulut sunucularında çalışır ve verileri Amazon Kinesis'e gönderir
Varsayılan ayarlarla yapılandırılmış Veri Akışları. Uygulama her gün
verileri tüketir ve verileri iş zekası (BI) için bir Amazon S3 klasörüne yazar
işleme. Şirket, Amazon S3'ün aldığı tüm verileri almadığını gözlemliyor
uygulama Kinesis Data Streams'e gönderilir.
Bir çözüm mimarı bu sorunu çözmek için ne yapmalıdır?

A. Veri saklama süresini değiştirerek Kinesis Veri Akışları varsayılan ayarlarını güncelleyin.

B. Verileri Kinesis'e göndermek için Kinesis Yapımcı Kitaplığı'nı (KPL) kullanacak şekilde uygulamayı güncelleyin
Veri Akışları.

C. Kinesis'e gönderilen verilerin verimini karşılamak için Kinesis kırıklarının sayısını güncelleyin
Veri Akışları.

D. Mevcut her nesnenin her versiyonunu korumak için S3 klasöründe S3 Sürüm Oluşturmayı açın.
S3 kovasına yutuldu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veri saklama süresini değiştirerek Kinesis Veri Akışları varsayılan ayarlarını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 403
Bir geliştiricinin Amazon S3'e dosya yüklemek için AWS Lambda işlevini kullanan bir uygulaması var
ve görevi gerçekleştirmek için gerekli izinlere ihtiyacı var. Geliştiricinin zaten bir IAM kullanıcısı var
Amazon S3 için geçerli IAM kimlik bilgileri gereklidir.
Bir çözüm mimarı izinleri vermek için ne yapmalıdır?

A. Lambda işlevinin kaynak politikasına gerekli IAM izinlerini ekleyin.

B. Lambda işlevindeki mevcut IAM kimlik bilgilerini kullanarak imzalı bir istek oluşturun.

C. Yeni bir IAM kullanıcısı oluşturun ve mevcut IAM kimlik bilgilerini Lambda işlevinde kullanın.

D. Gerekli izinlere sahip bir IAM yürütme rolü oluşturun ve IAM rolünü
Lambda fonksiyonu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Gerekli izinlere sahip bir IAM yürütme rolü oluşturun ve IAM rolünü Lambda işlevine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 404
Bir şirket, aşağıdaki durumlarda AWS Lambda işlevini çağıran sunucusuz bir uygulama dağıttı:
yeni belgeler bir Amazon S3 klasörüne yüklenir. Uygulama Lambda'yı kullanıyor
belgeleri işleme işlevi. Yakın zamanda yapılan bir pazarlama kampanyasından sonra şirket şunu fark etti:
uygulama belgelerin çoğunu işlemedi.
Bir çözüm mimarı bu uygulamanın mimarisini geliştirmek için ne yapmalıdır?

A. Lambda fonksiyonunun çalışma süresi zaman aşımı değerini 15 dakikaya ayarlayın.

B. Bir S3 grubu çoğaltma ilkesini yapılandırın. Belgeleri daha sonra kullanmak üzere S3 klasörüne yerleştirin
işleme.

C. Ek bir Lambda işlevi dağıtın. Belgelerin işlenmesinde yük dengelemesi
iki Lambda fonksiyonu.

D. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Talepleri şu adrese gönderin:
kuyruk. Kuyruğu Lambda için bir olay kaynağı olarak yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. İstekleri kuyruğa gönderin. Kuyruğu Lambda için bir olay kaynağı olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 405
Bir çözüm mimarı, bir yazılım gösterim ortamı için mimariyi tasarlıyor.
ortamı, bir Uygulamanın arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında çalışacaktır
Yük Dengeleyici (ALB). Sistemin çalışması sırasında trafikte önemli artışlar yaşanacak
saat ancak hafta sonları çalışma zorunluluğu yoktur.
Sistemin çalışabilmesini sağlamak için çözüm mimarı hangi eylem kombinasyonunu gerçekleştirmelidir?
talebi karşılayacak ölçek? (İki tane seçin.)

A. ALB kapasitesini istek oranına göre ayarlamak için AWS Otomatik Ölçeklendirmeyi kullanın.

B. VPC internet ağ geçidinin kapasitesini ölçeklendirmek için AWS Auto Scaling'i kullanın.

C. Yükü Bölgeler arasında dağıtmak için EC2 bulut sunucularını birden fazla AWS Bölgesinde başlatın.

D. Otomatik Ölçeklendirme grubunu örnek CPU'ya göre ölçeklendirmek için bir hedef izleme ölçeklendirme politikası kullanın
kullanım.

E. Otomatik Ölçeklendirme grubunun minimum, maksimum ve istenilen değerlerini değiştirmek için zamanlanmış ölçeklendirmeyi kullanın
hafta sonları kapasite sıfıra indirilir. Hafta başında varsayılan değerlere dönün.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunu örnek CPU kullanımına göre ölçeklendirmek için bir hedef izleme ölçeklendirme ilkesi kullanın. Hafta sonları Otomatik Ölçeklendirme grubunun minimum, maksimum ve istenen kapasitesini sıfıra değiştirmek için zamanlanmış ölçeklendirmeyi kullanın. Hafta başında varsayılan değerlere dönün.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 406
Bir çözüm mimarı, genel bir alt ağ ve bir ağ içeren iki katmanlı bir mimari tasarlıyor.
veritabanı alt ağı. Genel alt ağdaki web sunucuları 443 numaralı bağlantı noktasında internete açık olmalıdır.
Veritabanı alt ağındaki Amazon RDS for MySQL veritabanı bulut sunucusuna yalnızca
3306 numaralı bağlantı noktasındaki web sunucuları.
Çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Genel alt ağ için bir ağ ACL'si oluşturun. 0.0.0.0/0'a giden trafiği reddetmek için bir kural ekleyin
bağlantı noktası 3306.

B. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. Genel alt ağdan gelen trafiğe izin vermek için bir kural ekleyin
3306 numaralı bağlantı noktasındaki CIDR bloğu.

C. Genel alt ağdaki web sunucuları için bir güvenlik grubu oluşturun. Trafiğe izin vermek için bir kural ekleyin
443 numaralı bağlantı noktasında 0.0.0.0/0.

D. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. Web sunucularından gelen trafiğe izin vermek için bir kural ekleyin
3306 numaralı bağlantı noktasındaki güvenlik grubu.

E. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. Gelen trafik dışındaki tüm trafiği reddetmek için bir kural ekleyin
web sunucularının güvenlik grubu 3306 numaralı bağlantı noktasındadır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** Genel alt ağdaki web sunucuları için bir güvenlik grubu oluşturun. 443 numaralı bağlantı noktasında 0.0.0.0/0'dan gelen trafiğe izin vermek için bir kural ekleyin. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. 3306 numaralı bağlantı noktasında web sunucularının güvenlik grubundan gelen trafiğe izin vermek için bir kural ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 407
Bir şirket, barındırılan bir oyun uygulaması için paylaşılan bir depolama çözümü uyguluyor.
AWS Bulutu. Şirketin verilere erişmek için Luster istemcilerini kullanma becerisine ihtiyacı var. Çözüm
tamamen yönetilmesi gerekir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Verileri takılabilir bir dosya sistemi olarak paylaşan bir AWS DataSync görevi oluşturun. Dosyayı bağlayın
sistemi uygulama sunucusuna aktarın.

B. Bir AWS Storage Gateway dosya ağ geçidi oluşturun. Gerekli istemciyi kullanan bir dosya paylaşımı oluşturun
protokol. Uygulama sunucusunu dosya paylaşımına bağlayın.

C. Bir Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun ve bunu destekleyecek şekilde yapılandırın
Parlaklık. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.

D. Lustre dosya sistemi için bir Amazon FSx oluşturun. Dosya sistemini orijinal sunucuya ekleyin.
Uygulama sunucusunu dosya sistemine bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Lustre dosya sistemi için bir Amazon FSx oluşturun. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 408
Bir şirket, coğrafi olarak dağılmış binlerce kişiden veri alan bir uygulamayı çalıştırıyor.
UDP kullanan uzak cihazlar. Uygulama verileri anında işler ve bir
Gerekirse cihaza mesaj gönderin. Hiçbir veri saklanmaz.
Şirketin cihazlardan veri aktarımında gecikmeyi en aza indirecek bir çözüme ihtiyacı var.
Çözüm ayrıca başka bir AWS Bölgesine hızlı bir şekilde yük devretme olanağı sağlamalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Route 53 yük devretme yönlendirme politikasını yapılandırın. Ağ Yük Dengeleyicisi (NLB) oluşturma
iki Bölgenin her birinde. NLB'yi, verileri işlemek için bir AWS Lambda işlevini çağıracak şekilde yapılandırın.
veri.

B. AWS Global Accelerator'ı kullanın. Her ikisinde de bir Ağ Yük Dengeleyici (NLB) oluşturun
Uç nokta olarak bölgeler. Şununla bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun:
Fargate fırlatma türü. Kümede bir ECS hizmeti oluşturun. ECS hizmetini hedef olarak ayarlayın
NL için verileri Amazon ECS'de işleyin.

C. AWS Global Accelerator'ı kullanın. Her ikisinde de bir Uygulama Yük Dengeleyicisi (ALB) oluşturun
Uç nokta olarak bölgeler. Şununla bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun:
Fargate fırlatma türü. Kümede bir ECS hizmeti oluşturun. ECS hizmetini hedef olarak ayarlayın
ALB için. Verileri Amazon ECS'de işleyin.

D. Amazon Route 53 yük devretme yönlendirme politikasını yapılandırın. Uygulama Yük Dengeleyici Oluşturma
(ALB) iki Bölgenin her birinde. Amazon Elastic Container Service (Amazon ECS) oluşturun
Fargate başlatma türüne sahip küme. Kümede bir ECS hizmeti oluşturun. ECS hizmetini şu şekilde ayarlayın:
ALB'nin hedefi. Verileri Amazon ECS'de işleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Global Accelerator'ı kullanın. İki Bölgenin her birinde uç nokta olarak bir Ağ Yük Dengeleyicisi (NLB) oluşturun. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. Kümede bir ECS hizmeti oluşturun. ECS hizmetini, Amazon ECS'deki verileri NLişlemesi için hedef olarak ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 409
Bir çözüm mimarının Windows Internet Information Services (IIS) web uygulamasını taşıması gerekir
AWS'ye. Uygulama şu anda kullanıcının şirket içinde barındırılan bir dosya paylaşımına güveniyor
ağa bağlı depolama (NAS). Çözüm mimarı IIS webinin taşınmasını önerdi
depolamaya bağlı birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularına sunucular
çözümü ve örneklere eklenen bir Elastic Load Balancer’ı yapılandırmak.
Şirket içi dosya paylaşımına alternatif olarak hangisi EN dayanıklı ve dayanıklıdır?

A. Dosya paylaşımını Amazon RDS'ye taşıyın.

B. Dosya paylaşımını AWS Storage Gateway'e taşıyın.

C. Dosya paylaşımını Windows Dosya Sunucusu için Amazon FSx'e taşıyın.

D. Dosya paylaşımını Amazon Elastic File System'e (Amazon EFS) taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Dosya paylaşımını Windows Dosya Sunucusu için Amazon FSx'e taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 410
Bir şirket, Amazon EC2 bulut sunucularında yeni bir uygulamayı dağıtıyor. Uygulama yazıyor
verileri Amazon Elastic Block Store (Amazon EBS) birimlerine aktarır. Şirketin bunu sağlaması gerekiyor
EBS birimlerine yazılan tüm veriler kullanımda değilken şifrelenir.
Bu gereksinimi hangi çözüm karşılayacak?

A. EBS şifrelemesini belirten bir IAM rolü oluşturun. Rolü EC2 bulut sunucularına ekleyin.

B. EBS birimlerini şifrelenmiş birimler olarak oluşturun. EBS birimlerini EC2 bulut sunucularına ekleyin.

C. Encrypt anahtarına ve True değerine sahip bir EC2 bulut sunucusu etiketi oluşturun. Tüm örnekleri etiketleyin
EBS düzeyinde şifreleme gerektiren.

D. EBS şifrelemesini zorunlu kılan bir AWS Key Management Service (AWS KMS) anahtar politikası oluşturun
hesapta. Anahtar ilkesinin etkin olduğundan emin olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EBS birimlerini şifrelenmiş birimler olarak oluşturun. EBS birimlerini EC2 bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 411
Bir şirketin ara sıra kullanım kalıplarına sahip bir web uygulaması var. Yoğun kullanım var
Her ayın başında, her haftanın başında orta düzeyde kullanım ve öngörülemeyen kullanım
hafta boyunca. Uygulama bir web sunucusu ve çalışan bir MySQL veritabanı sunucusundan oluşur.
veri merkezinin içinde. Şirket, uygulamayı AWS Cloud'a taşımak istiyor ve
Veritabanı değişiklikleri gerektirmeyecek, uygun maliyetli bir veritabanı platformu seçilmelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon DynamoDB

B. MySQL için Amazon RDS

C. MySQL uyumlu Amazon Aurora Serverless

D. MySQL, Amazon EC2'de Otomatik Ölçeklendirme grubunda dağıtıldı

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** MySQL uyumlu Amazon Aurora Serverless
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 412
Bir görüntü barındırma şirketi, nesnelerini Amazon S3 klasörlerinde saklıyor. Şirket istiyor
S3 kovalarındaki nesnelerin kazara halkın eline geçmesini önleyin. Tüm S3 nesneleri
AWS hesabının tamamının özel kalması gerekir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 paket politikalarını izlemek için Amazon GuardDuty'yi kullanın. Otomatik düzeltme eylemi oluşturma
Nesneleri herkese açık hale getiren herhangi bir değişikliği düzeltmek için bir AWS Lambda işlevini kullanan kural.

B. Herkese açık S3 klasörlerini bulmak için AWS Trusted Advisor'ı kullanın. E-posta bildirimlerini yapılandırma
Bir değişiklik algılandığında Trusted Advisor'da. İzin veriyorsa S3 grup politikasını manuel olarak değiştirin
kamu erişimi.

C. Herkese açık S3 klasörlerini bulmak için AWS Resource Access Manager'ı kullanın. Amazon'u kullanın
Bir değişiklik yapıldığında AWS Lambda işlevini çağırmak için Basit Bildirim Hizmeti (Amazon SNS)
tespit edildi. Değişikliği programlı olarak düzelten bir Lambda işlevi dağıtın.

D. Hesap düzeyinde S3 Block Public Access özelliğini kullanın. AWS Organizasyonlarını kullanarak oluşturun
IAM kullanıcılarının ayarı değiştirmesini engelleyen bir hizmet kontrol politikası (SCP). SCP'yi şuraya uygula:
hesap.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hesap düzeyinde S3 Block Public Access özelliğini kullanın. IAM kullanıcılarının ayarı değiştirmesini önleyen bir hizmet kontrol politikası (SCP) oluşturmak için AWS Organizasyonlarını kullanın. SCP'yi hesaba uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 413
Bir e-ticaret şirketi kullanıcı trafiğinde bir artış yaşıyor. Şirketin mağazası
Amazon EC2 bulut sunucularına, bir web katmanı ve bir web katmanından oluşan iki katmanlı bir web uygulaması olarak dağıtıldı.
ayrı veritabanı katmanı. Trafik arttıkça şirket, mimarinin sorun yarattığını fark ediyor
kullanıcılara pazarlama ve sipariş onayı e-postasının zamanında gönderilmesinde önemli gecikmeler.
şirket, karmaşık e-posta teslimi sorunlarını çözmek için harcadığı zamanı azaltmak istiyor ve
Operasyonel ek yükü en aza indirin.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. E-posta işlemeye ayrılmış EC2 bulut sunucularını kullanarak ayrı bir uygulama katmanı oluşturun.

B. Web örneğini Amazon Simple Email Service (Amazon) aracılığıyla e-posta gönderecek şekilde yapılandırın
SES).

C. Web örneğini Amazon Simple Notification Service aracılığıyla e-posta gönderecek şekilde yapılandırın
(Amazon SNS'de).

D. E-posta işlemeye ayrılmış EC2 bulut sunucularını kullanarak ayrı bir uygulama katmanı oluşturun. Yer
Otomatik Ölçeklendirme grubundaki örnekler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web örneğini Amazon Simple Email Service (Amazon SES) aracılığıyla e-posta gönderecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru 414
Bir şirketin her gün yüzlerce rapor üreten bir iş sistemi vardır. iş
sistem raporları CSV formatında bir ağ paylaşımına kaydeder. Şirketin bunu saklaması gerekiyor
Analiz için AWS Cloud'daki verileri neredeyse gerçek zamanlı olarak.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Dosyaları Amazon S3'e aktarmak için AWS DataSync'i kullanın. Şu anda çalışan zamanlanmış bir görev oluşturun
her günün sonu.

B. Bir Amazon S3 Dosya Ağ Geçidi oluşturun. Yeni bir ağ paylaşımı kullanmak için iş sistemini güncelleyin
S3 Dosya Ağ Geçidinden.

C. Dosyaları Amazon S3'e aktarmak için AWS DataSync'i kullanın. kullanan bir uygulama oluşturun.
Otomasyon iş akışındaki DataSync API'si.

D. SFTP uç noktası için bir AWS Transfer dağıtın. Yeni dosyaları kontrol eden bir komut dosyası oluşturun.
ağ paylaşımı ve yeni dosyaları SFTP kullanarak yükler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon S3 Dosya Ağ Geçidi oluşturun. S3 Dosya Ağ Geçidinden yeni bir ağ paylaşımı kullanmak için iş sistemini güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 415
Bir şirket petabaytlarca veriyi Amazon S3 Standard'ta depoluyor. Veriler birden fazla S3'te saklanır
kovalar ve değişen sıklıkta erişilir. Şirket erişim kalıplarını bilmiyor
tüm veriler için. Şirketin optimize etmek için her S3 klasörü için bir çözüm uygulaması gerekiyor.
S3 kullanım maliyeti.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. S3 klasöründeki nesneleri S3'e geçirmek için bir kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun
Akıllı Katmanlama.

B. S3'teki her nesne için doğru katmanı belirlemek amacıyla S3 depolama sınıfı analiz aracını kullanın.
kova. Her nesneyi belirlenen depolama katmanına taşıyın.

C. S3 klasöründeki nesneleri S3'e geçirmek için bir kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun
Buzul Anında Erişim.

D. S3 klasöründeki nesneleri S3'e geçirmek için bir kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun
Tek Bölge-Sık Olmayan Erişim (S3 Bir Bölge-IA).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 klasöründeki nesneleri S3 Intelligent-Tiering'e geçirmek için kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 416
Hızla büyüyen küresel bir e-ticaret şirketi, web uygulamasını AWS'de barındırıyor. İnternet
Uygulama statik içerik ve dinamik içerik içerir. Web sitesi çevrimiçi işlemleri saklar
Amazon RDS veritabanındaki verilerin işlenmesi (OLTP) Web sitesinin kullanıcıları yavaşlama sorunu yaşıyor
sayfa yüklenir.
Bir çözüm mimarının bu sorunu çözmek için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (Seç
iki.)

A. Bir Amazon Redshift kümesi yapılandırın.

B. Bir Amazon CloudFront dağıtımı kurun.

C. Dinamik web içeriğini Amazon S3'te barındırın.

D. RDS Veritabanı bulut sunucusu için bir okuma kopyası oluşturun.

E. RDS Veritabanı bulut sunucusu için bir Multi-AZ dağıtımı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Bir Amazon CloudFront dağıtımı kurun. RDS Veritabanı bulut sunucusu için bir okuma kopyası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 417
Bir şirket, uygulamasını çalıştırmak için Amazon EC2 bulut sunucularını ve AWS Lambda işlevlerini kullanıyor.
şirketin AWS hesabında genel alt ağlara ve özel alt ağlara sahip VPC'ler bulunmaktadır. EC2
örnekler VPC'lerden birindeki özel bir alt ağda çalışır. Lambda fonksiyonlarının doğrudan ağa ihtiyacı var
uygulamanın çalışması için EC2 bulut sunucularına erişim.
Uygulama en az 1 yıl süreyle geçerli olacaktır. Şirket Lambda sayısını bekliyor
uygulamanın bu süre zarfında artırmak için kullandığı işlevler. Şirket maksimuma ulaşmak istiyor
tüm uygulama kaynaklarından tasarruf edilmesini ve hizmetler arasındaki ağ gecikmesinin düşük tutulmasını sağlar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir EC2 Bulut Sunucusu Tasarruf Planı satın alın Lambda işlevlerinin süresini ve belleğini optimize edin
kullanım ve çağrı sayısı. Lambda işlevlerini özel alt ağa bağlayın
EC2 örneklerini içerir.

B. Bir EC2 Bulut Sunucusu Tasarruf Planı satın alın Lambda işlevlerinin süresini ve belleğini optimize edin
kullanım, çağrı sayısı ve aktarılan veri miktarı. Lambda'yı bağlayın
EC2 bulut sunucularının çalıştığı aynı VPC'deki genel bir alt ağda çalışır.

C. Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerinin süresini ve belleğini optimize edin
kullanım, çağrı sayısı ve aktarılan veri miktarı. Lambda'yı bağlayın
EC2 bulut sunucularını içeren özel alt ağa yönelik işlevler.

D. Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerinin süresini ve belleğini optimize edin
kullanım, çağrı sayısı ve aktarılan veri miktarı. Lambda'yı koruyun
Lambda hizmeti VPC'sinde çalışır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerinin süresini ve bellek kullanımını, çağrı sayısını ve aktarılan veri miktarını optimize edin. Lambda işlevlerini EC2 bulut sunucularını içeren özel alt ağa bağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 418
Bir çözüm mimarının ekip üyelerinin Amazon S3 klasörlerine iki adımda erişmesine izin vermesi gerekiyor
farklı AWS hesapları: bir geliştirme hesabı ve bir üretim hesabı. Ekip şu anda
benzersiz IAM kullanıcılarını kullanarak geliştirme hesabındaki S3 paketlerine erişebilir
hesapta uygun izinlere sahip bir IAM grubuna atanmıştır.
Çözüm mimarı, üretim hesabında bir IAM rolü oluşturdu. Rolün bir politikası var
bu, üretim hesabındaki bir S3 klasörüne erişim sağlar.
En az ayrıcalık ilkesine uyarken bu gereksinimleri hangi çözüm karşılayacak?

A. Yönetici Erişimi ilkesini geliştirme hesabı kullanıcılarına ekleyin.

B. Üretimdeki rolün güven politikasına geliştirme hesabını prensip olarak ekleyin
hesap.

C. Üretim hesabındaki S3 klasöründeki S3 Blok Genel Erişim özelliğini kapatın.

D. Üretim hesabında her ekip üyesi için benzersiz kimlik bilgilerine sahip bir kullanıcı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Üretim hesabındaki rolün güven ilkesine geliştirme hesabını sorumlu olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 419
Bir şirket, tüm özelliklerin etkin olduğu AWS Organizasyonlarını kullanıyor ve birden fazla Amazon EC2 çalıştırıyor
ap-southeast-2 Bölgesindeki iş yükleri. Şirketin bir hizmet kontrol politikası (SCP) vardır.
başka bir Bölgede kaynak yaratılmasını engeller. Bir güvenlik politikası şunları gerektirir:
Şirket, kullanımda olmayan tüm verileri şifrelemelidir.
Bir denetim, çalışanların Amazon Elastic Block Store'u (Amazon EBS) oluşturduğunu ortaya çıkarır
Birimleri şifrelemeden EC2 bulut sunucuları için birimler. Şirket yeni bir EC2 istiyor
herhangi bir IAM kullanıcısının veya root kullanıcısının şifreli EBS'yi kullanmak için ap-southeast-2'de başlattığı örnekler
hacimler. Şirket, yaratıcı çalışanlar üzerinde minimum etki yaratacak bir çözüm istiyor
EBS hacimleri.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Amazon EC2 konsolunda EBS şifreleme hesabı özelliğini seçin ve bir varsayılan tanımlayın
şifreleme anahtarı.

B. Bir IAM izin sınırı oluşturun. İzin sınırını kök kuruluşa ekleyin
birim (OU). ec2:Encrypted olduğunda ec2:CreateVolume eylemini reddetmek için sınırı tanımlayın
koşul yanlışa eşittir.

C. Bir SCP oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin. Reddedilecek SCP'yi tanımlayın
ec2:CreateVolume eylemi, ec2:Encrypted koşulu false değerine eşit olduğunda.

D. ec2:CreateVolume eylemini reddetmek için her hesap için IAM politikalarını güncelleyin.
ec2:Şifrelenmiş koşul, false'a eşittir.

E. Kuruluş yönetimi hesabında, Varsayılan EBS birim şifreleme ayarını belirtin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Bir SCP oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin. Ec2:Encrypted koşulu false değerine eşit olduğunda ec2:CreateVolume eylemini reddedecek SCP'yi tanımlayın. Kuruluş yönetimi hesabında Varsayılan EBS birim şifreleme ayarını belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 420
Bir şirket, zaman alıcı işlemleri basitleştirmek için Amazon RDS for PostgreSQL Veritabanı kümesini kullanmak istiyor
üretim veritabanı iş yükleri için veritabanı yönetim görevleri. Şirket güvence altına almak istiyor
veritabanının yüksek oranda kullanılabilir olduğunu ve çoğu senaryoda otomatik yük devretme desteği sağlayacağını
40 saniyeden kısa sürede. Şirket, birincil örneğin okuma yükünü boşaltmak istiyor ve
maliyetleri mümkün olduğunca düşük tutun.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon RDS Multi-AZ veritabanı bulut sunucusu dağıtımını kullanın. Bir okuma kopyası oluşturun ve
Okuma iş yükünü okuma kopyasına aktarın.

B. Amazon RDS Multi-AZ DB silgi dağıtımı kullanın İki okuma replikası oluşturun ve
Okuma iş yükünü okuma kopyalarına aktarın.

C. Amazon RDS Multi-AZ veritabanı bulut sunucusu dağıtımını kullanın. Okuma iş yükünü şuraya yönlendirin:
Multi-AZ çiftindeki ikincil örnekler.

D. Amazon RDS Multi-AZ veritabanı kümesi dağıtımı kullanın Okuma iş yükünü okuyucuya yönlendirin
uç nokta.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon RDS Multi-AZ veritabanı kümesi dağıtımı kullanın Okuma iş yükünü okuyucu uç noktasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 421
Bir şirket yüksek oranda kullanılabilir bir SFTP hizmeti yürütmektedir. SFTP hizmeti iki Amazon EC2 kullanıyor
Güvenilir IP kaynaklarından gelen trafiği kabul etmek için elastik IP adresleriyle çalışan Linux örnekleri
internet. SFTP hizmeti, bulut sunucularına eklenen paylaşılan depolama alanı tarafından desteklenir. Kullanıcı
hesaplar SFTP sunucularında Linux kullanıcıları olarak oluşturulur ve yönetilir.
Şirket, yüksek IOPS performansı ve yüksek düzeyde performans sağlayan sunucusuz bir seçenek istiyor
yapılandırılabilir güvenlik Şirket ayrıca kullanıcı izinleri üzerindeki kontrolü de elinde tutmak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şifrelenmiş bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun. Bir AWS oluşturun
Aile SFTP hizmetini yalnızca güvenilir IP adreslerine izin veren genel bir uç noktayla aktarın. Ekle
EBS birimini SFTP hizmeti uç noktasına. Kullanıcılara SFTP hizmetine erişim izni verin.

B. Şifrelenmiş bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. Bir AWS oluşturun
Aile SFTP hizmetini elastik IP adresleri ve VPC uç noktasıyla aktarın
internete bakan erişim. Yalnızca güvenilir IP'ye izin veren uç noktaya bir güvenlik grubu ekleyin
adresler. EFS birimini SFTP hizmeti uç noktasına ekleyin. Kullanıcılara SFTP'ye erişim izni verin
hizmet.

C. Varsayılan şifrelemenin etkin olduğu bir Amazon S3 klasörü oluşturun. Bir AWS Transfer Ailesi Oluşturun
Yalnızca güvenilir IP adreslerine izin veren genel uç noktaya sahip SFTP hizmeti. S3 kovasını takın
SFTP hizmeti uç noktası. Kullanıcılara SFTP hizmetine erişim izni verin.

D. Varsayılan şifrelemenin etkin olduğu bir Amazon S3 klasörü oluşturun. Bir AWS Transfer Ailesi Oluşturun
Özel bir alt ağda dahili erişime sahip bir VPC uç noktasına sahip SFTP hizmeti. Bir güvenlik ekleyin
yalnızca güvenilir IP adreslerine izin veren grup. S3 paketini SFTP hizmeti uç noktasına ekleyin.
Kullanıcılara SFTP hizmetine erişim izni verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şifrelenmiş bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. Elastik IP adreslerine ve internete yönelik erişime sahip bir VPC uç noktasına sahip bir AWS Transfer Ailesi SFTP hizmeti oluşturun. Uç noktaya yalnızca güvenilen IP adreslerine izin veren bir güvenlik grubu ekleyin. EFS birimini SFTP hizmeti uç noktasına ekleyin. Kullanıcılara SFTP hizmetine erişim izni verin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 422
Bir şirket, AWS'de yeni bir makine öğrenimi (ML) modeli çözümü geliştiriyor. Modeller:
yaklaşık 1 GB model verisini alan bağımsız mikro hizmetler olarak geliştirildi
Başlangıçta Amazon S3'ü çalıştırın ve verileri belleğe yükleyin. Kullanıcılar modellere bir
eşzamansız API. Kullanıcılar bir istek veya bir grup istek gönderebilir ve bunların nerede olduğunu belirtebilir.
sonuçlar gönderilmelidir.
Şirket yüzlerce kullanıcıya model sağlıyor. Modellerin kullanım şekilleri şöyledir:
düzensiz. Bazı modeller günlerce veya haftalarca kullanılmayabilir. Diğer modeller parti alabilir
Aynı anda binlerce istek.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi tasarımı önermelidir?

A. API'den gelen istekleri bir Ağ Yük Dengeleyicisine (NLB) yönlendirin. Modelleri şu şekilde dağıtın:
NLB tarafından çağrılan AWS Lambda işlevleri.

B. API'den gelen istekleri bir Uygulama Yük Dengeleyicisine (ALB) yönlendirin. Modelleri şu şekilde dağıtın:
Amazon Simple'dan okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri
Kuyruk Hizmeti (Amazon SQS) kuyruğu. ECS örneklerini ölçeklendirmek için AWS App Mesh'i kullanın
SQS kuyruk boyutuna göre küme.

C. API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin.
Modelleri, SQS olayları tarafından çağrılan AWS Lambda işlevleri olarak dağıtın. AWS Auto'yu kullanın
SQS kuyruk boyutuna bağlı olarak Lambda işlevlerine ilişkin vCPU sayısını artırmak için ölçeklendirme.

D. API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin.
Modelleri, aşağıdaki kaynaklardan okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak dağıtın.
kuyruk. Hem küme hem de kopyalar için Amazon ECS'de AWS Otomatik Ölçeklendirmeyi etkinleştirin
Kuyruk boyutuna göre hizmet.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin. Modelleri kuyruktan okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak dağıtın. Kuyruk boyutuna göre hizmetin hem kümesi hem de kopyaları için Amazon ECS'de AWS Otomatik Ölçeklendirmeyi etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 423
Bir çözüm mimarı, aşağıdaki JSON metnini kimlik tabanlı bir politika olarak kullanmak istiyor
özel izinler:
Çözüm mimarı bu politikayı hangi IAM ilkelerine ekleyebilir? (İki tane seçin.)

A. Rol

B.Grup

C. Organizasyon

D. Amazon Elastic Container Service (Amazon ECS) kaynağı

E. Amazon EC2 kaynağı

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Rol Grubu
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 424
Bir şirket, Amazon EC2 İsteğe Bağlı Bulut Sunucularında özel bir uygulama çalıştırıyor.
Uygulamanın, günde 24 saat, haftanın 7 günü ve arka uçta çalışması gereken ön uç düğümleri var
iş yüküne bağlı olarak yalnızca kısa bir süre çalışması gereken düğümler. Arka uç düğümlerinin sayısı
gün içerisinde değişiklik göstermektedir.
Şirketin iş yüküne bağlı olarak ölçeğini genişletmesi ve daha fazla örneği ölçeklendirmesi gerekiyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Ön uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın. Arka uç düğümleri için AWS Fargate'i kullanın.

B. Ön uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın. Arka uç düğümleri için Spot Bulut Sunucularını kullanın.

C. Ön uç düğümleri için Spot Bulut Sunucularını kullanın. Arka uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın.

D. Ön uç düğümleri için Spot Bulut Sunucularını kullanın. Arka uç düğümleri için AWS Fargate'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ön uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın. Arka uç düğümleri için Spot Bulut Sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 425
Bir şirket, iş yüklerini şirket içinde yürütmek için yüksek blok depolama kapasitesi kullanıyor. Şirketin
Saniyede günlük en yüksek giriş ve çıkış işlemleri 15.000 IOPS'den fazla değildir.
şirket iş yüklerini Amazon EC2'ye taşımak ve disk performansını sağlamak istiyor
depolama kapasitesinden bağımsızdır.
Bu gereksinimleri hangi Amazon Elastic Block Store (Amazon EBS) birim türü karşılayacaktır?
EN uygun maliyetli mi?

A. GP2 birim türü

B. io2 birim türü

C. GP3 birim türü

D. io1 birim türü

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** GP3 birim türü
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 426
Bir şirketin sağlık hizmeti uygulamasından veri depolaması gerekir. Uygulamanın verileri sıklıkla
değişiklikler. Yeni bir düzenleme, saklanan verilerin tüm düzeylerinde denetim erişimini zorunlu kılmaktadır.
Şirket, uygulamayı, tükenmekte olan bir şirket içi altyapıda barındırıyor
depolama kapasitesi. Bir çözüm mimarının mevcut verileri güvenli bir şekilde AWS'ye taşıması gerekir.
yeni düzenlemeyi karşılıyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Mevcut verileri Amazon S3'e taşımak için AWS DataSync'i kullanın. Verileri günlüğe kaydetmek için AWS CloudTrail'i kullanın
olaylar.

B. Mevcut verileri Amazon S3'e taşımak için AWS Snowcone'u kullanın. Oturum açmak için AWS CloudTrail'i kullanın
yönetim olayları.

C. Mevcut verileri Amazon S3'e taşımak için Amazon S3 Transfer Acceleration'ı kullanın. AWS'yi kullanın
Veri olaylarını günlüğe kaydetmek için CloudTrail.

D. Mevcut verileri Amazon S3'e taşımak için AWS Storage Gateway'i kullanın. AWS CloudTrail'i kullanarak
günlük yönetimi olayları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mevcut verileri Amazon S3'e taşımak için AWS DataSync'i kullanın. Veri olaylarını günlüğe kaydetmek için AWS CloudTrail'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 427
Bir çözüm mimarı, MySQL veritabanıyla karmaşık bir Java uygulamasını hayata geçiriyor.
Java uygulaması Apache Tomcat'te konuşlandırılmalı ve yüksek düzeyde kullanılabilir olmalıdır.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygulamayı AWS Lambda'da dağıtın. Bağlanmak için bir Amazon API Gateway API'yi yapılandırın
Lambda fonksiyonları ile.

B. Uygulamayı AWS Elastic Beanstalk'ı kullanarak dağıtın. Yük dengeli yapılandırma
ortamı ve sürekli dağıtım politikası.

C. Veritabanını Amazon ElastiCache'e taşıyın. ElastiCache güvenlik grubunu şu şekilde yapılandırın:
uygulamadan erişime izin verin.

D. Bir Amazon EC2 bulut sunucusu başlatın. EC2 örneğine bir MySQL sunucusu yükleyin. Yapılandır
sunucudaki uygulama. Bir AMI oluşturun. Otomatik bir başlatma şablonu oluşturmak için AMI'yi kullanın.
Ölçeklendirme grubu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Uygulamayı AWS Elastic Beanstalk'ı kullanarak dağıtın. Yük dengeli bir ortam ve sürekli dağıtım ilkesi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 428
Sunucusuz bir uygulama Amazon API Gateway, AWS Lambda ve Amazon DynamoDB'yi kullanır.
Lambda işlevinin DynamoDB tablosunu okuma ve yazma izinlerine ihtiyacı var.
Hangi çözüm Lambda fonksiyonunun DynamoDB tablosuna EN güvenli şekilde erişmesini sağlayacaktır?

A. Lambda işlevine programlı erişimi olan bir IAM kullanıcısı oluşturun. Şuraya bir politika ekleyin:
DynamoDB tablosuna okuma ve yazma erişimine izin veren kullanıcı. Access_key_id'yi saklayın ve
Secret_access_key parametreleri Lambda ortam değişkenlerinin bir parçası olarak kullanılır. Diğerlerinden emin olun
AWS kullanıcılarının Lambda işlevi yapılandırmasına okuma ve yazma erişimi yoktur.

B. Lambda'yı güvenilir bir hizmet olarak içeren bir IAM rolü oluşturun. Role bir politika ekleyin
DynamoDB tablosuna okuma ve yazma erişimi sağlar. Lambda'nın yapılandırmasını güncelleyin
Yeni rolü yürütme rolü olarak kullanma işlevi.

C. Lambda işlevine programlı erişimi olan bir IAM kullanıcısı oluşturun. Şuraya bir politika ekleyin:
DynamoDB tablosuna okuma ve yazma erişimine izin veren kullanıcı. Access_key_id'yi saklayın ve
AWS Systems Manager Parameter Store'daki secret_access_key parametreleri güvenli dize olarak
parametreler. Güvenli dize parametrelerini almak için Lambda işlev kodunu güncelleyin.
DynamoDB tablosuna bağlanılıyor.

D. Güvenilir bir hizmet olarak DynamoDB'yi içeren bir IAM rolü oluşturun. Role bir politika ekleyin
Lambda işlevinden okuma ve yazma erişimine izin verir. Lambda işlevinin kodunu güncelleyin
yeni role bir yürütme rolü olarak eklemek için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Güvenilir bir hizmet olarak Lambda'yı içeren bir IAM rolü oluşturun. Role, DynamoDB tablosuna okuma ve yazma erişimine izin veren bir politika ekleyin. Yeni rolü yürütme rolü olarak kullanmak için Lambda işlevinin yapılandırmasını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 429
Aşağıdaki IAM politikası bir IAM grubuna eklenmiştir. Gruba uygulanan tek politika budur.
Bu politikanın grup üyeleri için etkili IAM izinleri nelerdir?

A. Grup üyelerinin us-east-1 Bölgesinde herhangi bir Amazon EC2 işlemi yapmasına izin verilir.
İzin Ver izninden sonraki ifadeler uygulanmaz.

B. Grup üyelerinin us-east-1 Bölgesindeki Amazon EC2 izinleri, aksi takdirde reddedilir.
çok faktörlü kimlik doğrulama (MFA) ile oturum açtığınızda.

C. Grup üyelerine ec2:StopInstances ve ec2:TerminateInstances izinleri verilir
çok faktörlü kimlik doğrulama (MFA) ile oturum açtığınızda tüm Bölgeler için. Grup üyeleri
başka herhangi bir Amazon EC2 işlemine izin verildi.

D. Grup üyelerine ec2:StopInstances ve ec2:TerminateInstances izinleri verilir
us-east-1 Bölgesi için yalnızca çok faktörlü kimlik doğrulama (MFA) ile oturum açıldığında. Grup
Üyelerin us-east-1 Bölgesinde diğer Amazon EC2 işlemlerine izinleri vardır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Grup üyelerinin us-east-1 Bölgesi için ec2:StopInstances ve ec2:TerminateInstances izinlerine yalnızca çok faktörlü kimlik doğrulama (MFA) ile oturum açtıklarında izin verilir. Grup üyelerinin us-east-1 Bölgesi'nde herhangi başka bir Amazon EC2 işlemi yapmasına izin verilir.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 430
Bir üretim şirketi, .csv dosyalarını bir Amazon S3 klasörüne yükleyen makine sensörlerine sahiptir.
Bu .csv dosyaları resimlere dönüştürülmeli ve mümkün olan en kısa sürede kullanıma sunulmalıdır
Grafiksel raporların otomatik olarak oluşturulması için.
Resimler 1 ay sonra geçerliliğini yitirir ancak makineyi eğitmek için .csv dosyalarının saklanması gerekir
Yılda iki kez öğrenme (ML) modelleri. ML eğitimleri ve denetimleri haftalar önceden planlanır.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. .csv dosyalarını her saat başı indiren bir Amazon EC2 Spot Bulut Sunucusu başlatın.
görüntü dosyalarını oluşturur ve görüntüleri S3 klasörüne yükler.

B. .csv dosyalarını görüntülere dönüştüren ve görüntüleri depolayan bir AWS Lambda işlevi tasarlayın
S3 kovasında. Bir .csv dosyası yüklendiğinde Lambda işlevini çağırın.

C. S3 klasöründeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını aktarma
Yüklendikten 1 gün sonra S3 Standard'tan S3 Glacier'a. Görüntü dosyalarının geçerlilik süresi 30 gün sonra dolacaktır.

D. S3 klasöründeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını aktarma
S3 Standart'tan S3 Tek Bölge Seyrek Erişime (S3 Tek Bölge-IA) geçişten 1 gün sonra
yüklendi. Görüntü dosyalarının geçerlilik süresi 30 gün sonra dolacaktır.

E. S3 klasöründeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını aktarma
S3 Standart'tan S3 Standart-Nadir Erişime (S3 Standart-IA) geçişten 1 gün sonra
yüklendi. Görüntü dosyalarını Azaltılmış Artıklık Depolamasında (RRS) saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** .csv dosyalarını görüntülere dönüştüren ve görüntüleri S3 klasöründe saklayan bir AWS Lambda işlevi tasarlayın. Bir .csv dosyası yüklendiğinde Lambda işlevini çağırın. S3 paketindeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını, yüklendikten 1 gün sonra S3 Standard'tan S3 Glacier'e aktarın. Görüntü dosyalarının geçerlilik süresi 30 gün sonra dolacaktır.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 431
Bir şirket web uygulaması olarak yeni bir video oyunu geliştirdi. Uygulama bir
Veritabanı katmanında Amazon RDS for MySQL içeren bir VPC'de üç katmanlı mimari. birkaç
Oyuncular aynı anda çevrimiçi olarak yarışacak. Oyunun geliştiricileri ilk 10'u göstermek istiyor
neredeyse gerçek zamanlı puan tablosu ve oyunu korurken durdurma ve geri yükleme yeteneği sunar
mevcut puanlar.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Puanları web için önbelleğe almak üzere bir Amazon ElastiCache for Memcached kümesi oluşturun
görüntülenecek uygulama.

B. Web puanlarını hesaplamak ve önbelleğe almak için bir Amazon ElastiCache for Redis kümesi oluşturun
görüntülenecek uygulama.

C. Önbelleğe almak için web uygulamasının önüne bir Amazon CloudFront dağıtımı yerleştirin.
Uygulamanın bir bölümünde puan tablosu.

D. Puan tablosunu hesaplamak amacıyla sorguları çalıştırmak için Amazon RDS for MySQL'de bir okuma kopyası oluşturun
ve okuma trafiğini web uygulamasına sunar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web uygulamasının görüntüleyeceği puanları hesaplamak ve önbelleğe almak için bir Amazon ElastiCache for Redis kümesi kurun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 432
Bir e-ticaret şirketi, makine öğrenimi (ML) algoritmalarını oluşturmak ve eğitmek için kullanmak istiyor
modeller. Şirket, modelleri karmaşık senaryoları görselleştirmek ve trendleri tespit etmek için kullanacak.
müşteri verileri. Mimarlık ekibi, makine öğrenimi modellerini bir raporlama platformuyla entegre etmek istiyor
artırılmış verileri analiz etmek ve verileri doğrudan iş zekası kontrol panellerinde kullanmak.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Modelleri oluşturmak ve eğitmek amacıyla bir makine öğrenimi dönüşümü oluşturmak için AWS Glue'yu kullanın. Amazon OpenSearch'ü kullanın
Verileri görselleştirmeye yönelik hizmet.

B. Model oluşturmak ve eğitmek için Amazon SageMaker'ı kullanın. Görselleştirmek için Amazon QuickSight'ı kullanın.
veri.

C. Derlemek ve eğitmek için AWS Marketplace'ten önceden oluşturulmuş bir ML Amazon Machine Image (AMI) kullanın
modeller. Verileri görselleştirmek için Amazon OpenSearch Service'i kullanın.

D. Hesaplanan alanları kullanarak modeller oluşturmak ve eğitmek için Amazon QuickSight'ı kullanın. Amazon'u kullanın
Verileri görselleştirmek için QuickSight.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Modelleri oluşturmak ve eğitmek için Amazon SageMaker'ı kullanın. Verileri görselleştirmek için Amazon QuickSight'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 433
Bir şirket, üretim ve üretim dışı ortam iş yüklerini birden fazla AWS'de çalıştırıyor
hesaplar. Hesaplar AWS Organizasyonlarındaki bir kuruluştadır. Şirketin ihtiyacı var
Maliyet kullanım etiketlerinin değiştirilmesini engelleyecek bir çözüm tasarlayın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Yetkili sorumlular dışında etiketin değiştirilmesini önlemek için özel bir AWS Config kuralı oluşturun.

B. Etiket değişikliğini önlemek için AWS CloudTrail'de özel bir iz oluşturun.

C. Yetkili kişiler dışında etiket değişikliğini önlemek için bir hizmet kontrol politikası (SCP) oluşturun
müdürler.

D. Etiket değişikliğini önlemek için özel Amazon CloudWatch günlükleri oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Yetkili sorumlular dışında etiketin değiştirilmesini önlemek için bir hizmet kontrol ilkesi (SCP) oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 434
Bir şirket, uygulamasını AWS Cloud'da barındırır. Uygulama Amazon EC2'de çalışıyor
Otomatik Ölçeklendirme grubundaki ve Amazon'daki Elastic Load Balancer'ın arkasındaki örnekler
DynamoDB tablosu. Şirket, uygulamanın şu tarihte kullanıma sunulabilmesini sağlamak istiyor:
minimum kesinti süresine sahip başka bir AWS Bölgesi.
Bir çözüm mimarı bu gereksinimleri EN AZ miktarda maliyetle karşılamak için ne yapmalıdır?
aksama süresi?

A. Olağanüstü durum kurtarma Bölgesinde bir Otomatik Ölçeklendirme grubu ve yük dengeleyici oluşturun. Yapılandır
DynamoDB tablosunu global bir tablo olarak kullanın. Yeni felakete işaret edecek şekilde DNS yük devretmeyi yapılandırma
kurtarma Bölgesinin yük dengeleyicisi.

B. EC2 bulut sunucuları, yük dengeleyiciler ve yük dengeleyiciler oluşturmak için bir AWS CloudFormation şablonu oluşturun.
Gerektiğinde başlatılacak DynamoDB tabloları Yeniyi işaret edecek şekilde DNS yük devretmeyi yapılandırın
olağanüstü durum kurtarma Bölgenin yük dengeleyicisi.

C. EC2 bulut sunucuları ve yük dengeleyici oluşturmak için bir AWS CloudFormation şablonu oluşturun.
ihtiyaç duyulduğunda devreye alınır. DynamoDB tablosunu global tablo olarak yapılandırın. DNS yük devretmeyi yapılandırma
yeni olağanüstü durum kurtarma Bölgesinin yük dengeleyicisine işaret etmek için.

D. Olağanüstü durum kurtarma Bölgesinde bir Otomatik Ölçeklendirme grubu ve yük dengeleyici oluşturun. Yapılandır
Global bir tablo olarak DynamoDB tablosu. AWS'yi tetiklemek için bir Amazon CloudWatch alarmı oluşturun
Olağanüstü durum kurtarma yük dengeleyicisine işaret ederek Amazon Route 53'ü güncelleyen Lambda işlevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Olağanüstü durum kurtarma Bölgesinde bir Otomatik Ölçeklendirme grubu ve yük dengeleyici oluşturun. DynamoDB tablosunu global tablo olarak yapılandırın. Yeni olağanüstü durum kurtarma Bölgesinin yük dengeleyicisini işaret edecek şekilde DNS yük devretmesini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 435
Bir şirketin MySQL veritabanını şirket içi veri merkezinden AWS'ye taşıması gerekiyor
2 hafta. Veritabanının boyutu 20 TB'tır. Şirket, geçişi şu şekilde tamamlamak istiyor:
minimum aksama süresi.
Hangi çözüm veritabanını EN uygun maliyetle taşıyacak?

A. Bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin. AWS Database Migration'ı kullanın
Veritabanını taşımak için AWS Şema Dönüştürme Aracı (AWS SCT) içeren Hizmet (AWS DMS)
devam eden değişikliklerin kopyalanması. Geçişi tamamlamak için Snowball Edge cihazını AWS'ye gönderin
ve devam eden çoğaltmaya devam edin.

B. Bir AWS Kar Araci aracı sipariş edin. AWS Database Migration Service'i (AWS DMS) aşağıdakilerle kullanın:
Devam eden değişikliklerle veritabanını taşımak için AWS Şema Dönüştürme Aracı (AWS SCT). Gönder
Snowmobile aracının geçişi tamamlamak ve devam eden çoğaltmaya devam etmek için AWS'ye geri dönmesini sağlayın.

C. GPU cihazıyla Optimize Edilmiş bir AWS Snowball Edge Compute'u sipariş edin. AWS Veritabanını Kullanın
Geçiş Hizmeti (AWS DMS) ile AWS Şema Dönüştürme Aracı (AWS SCT)
Devam eden değişikliklerle veritabanı. Geçişi tamamlamak için Snowball cihazını AWS'ye gönderin ve
devam eden çoğaltmaya devam et

D. Verilerle bağlantı kurmak için 1 GB'lık özel bir AWS Direct Connect bağlantısı sipariş edin
merkez. AWS Database Migration Service'i (AWS DMS) AWS Şema Dönüştürme Aracıyla Kullanın
(AWS SCT) devam eden değişikliklerin çoğaltılmasıyla veritabanını taşımak için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Snowball Edge Storage Optimize Edilmiş bir cihaz sipariş edin. Devam eden değişikliklerin çoğaltılmasıyla veritabanını taşımak için AWS Database Migration Service'i (AWS DMS) AWS Schema Conversion Tool (AWS SCT) ile birlikte kullanın. Geçişi tamamlamak ve devam eden çoğaltmaya devam etmek için Snowball Edge cihazını AWS'ye gönderin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 436
Bir şirket şirket içi PostgreSQL veritabanını Amazon RDS for PostgreSQL'e taşıdı
Veritabanı örneği. Şirket yeni bir ürünü başarıyla piyasaya sürdü. Veritabanındaki iş yükü
arttı. Şirket, daha büyük iş yükünü eklemeden karşılamak istiyor
altyapı.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Toplam iş yükü için ayrılmış veritabanı bulut sunucularını satın alın. Amazon RDS for PostgreSQL DB'yi oluşturma
örnek daha büyük.

B. Amazon RDS for PostgreSQL Veritabanı bulut sunucusunu Multi-AZ Veritabanı bulut sunucusu haline getirin.

C. Toplam iş yükü için ayrılmış veritabanı bulut sunucularını satın alın. PostgreSQL için başka bir Amazon RDS ekleyin
Veritabanı örneği.

D. Amazon RDS for PostgreSQL veritabanı bulut sunucusunu isteğe bağlı veritabanı bulut sunucusu haline getirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Toplam iş yükü için ayrılmış veritabanı bulut sunucuları satın alın. Amazon RDS for PostgreSQL veritabanı bulut sunucusunu büyütün.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 437
Bir şirket, bir Uygulamanın arkasında Amazon EC2 bulut sunucularında bir e-ticaret web sitesi işletiyor
Otomatik Ölçeklendirme grubunda Yük Dengeleyici (ALB). Sitede performans sorunları yaşanıyor
değişen IP adreslerine sahip gayri meşru harici sistemlerden gelen yüksek talep oranıyla ilgilidir.
güvenlik ekibi web sitesine yönelik olası DDoS saldırılarından endişe duymaktadır. Şirket şunları yapmalıdır:
Yasadışı gelen istekleri, meşru kullanıcılar üzerinde minimum etki yaratacak şekilde engelleyin.
Bir çözüm mimarı ne tavsiye etmelidir?

A. Amazon Inspector'ı dağıtın ve ALB ile ilişkilendirin.

B. AWS WAF'ı dağıtın, ALB ile ilişkilendirin ve bir hız sınırlama kuralı yapılandırın.

C. Gelen trafiği engellemek için ALB ile ilişkili ağ ACL'lerine kurallar dağıtın.

D. Amazon GuardDuty'yi dağıtın ve GuardDuty'yi yapılandırırken hız sınırlayıcı korumayı etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS WAF'ı dağıtın, ALB ile ilişkilendirin ve hız sınırlama kuralı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 438
Bir şirket muhasebe verilerini harici bir denetçiyle paylaşmak istiyor. Veriler bir yerde saklanır
Özel bir alt ağda bulunan Amazon RDS DB bulut sunucusu. Denetçinin kendi AWS hesabı vardır
ve veritabanının kendi kopyasını gerektirir.
Şirketin veritabanını denetçiyle paylaşmanın EN güvenli yolu nedir?

A. Veritabanının okuma kopyasını oluşturun. Verilecek IAM standart veritabanı kimlik doğrulamasını yapılandırın
denetçi erişimi.

B. Veritabanı içeriklerini metin dosyalarına aktarın. Dosyaları bir Amazon S3 klasöründe saklayın. Yeni bir tane oluştur
Denetçi için IAM kullanıcısı. Kullanıcıya S3 klasörüne erişim izni verin.

C. Veritabanının anlık görüntüsünü bir Amazon S3 klasörüne kopyalayın. Bir IAM kullanıcısı oluşturun. Paylaş
S3 klasöründeki nesneye erişim izni vermek için kullanıcının anahtarlarını denetçiyle birlikte kullanın.

D. Veritabanının şifrelenmiş bir anlık görüntüsünü oluşturun. Anlık görüntüyü denetçiyle paylaşın. İzin ver
AWS Key Management Service (AWS KMS) şifreleme anahtarına erişim.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanının şifrelenmiş bir anlık görüntüsünü oluşturun. Anlık görüntüyü denetçiyle paylaşın. AWS Key Management Service (AWS KMS) şifreleme anahtarına erişime izin verin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 439
Bir çözüm mimarı, küçük bir IP adresi aralığına sahip bir VPC'yi yapılandırdı. sayısı
VPC'de bulunan Amazon EC2 bulut sunucuları artıyor ve yetersiz sayıda
Gelecekteki iş yükleri için IP adresleri.
Hangi çözüm bu sorunu EN AZ operasyonel ek yük ile çözer?

A. IP adreslerinin sayısını artırmak ve yeni IP adresleri oluşturmak için ek bir IPv4 CIDR bloğu ekleyin.
VPC'deki ek alt ağlar. Yeni CIDR'yi kullanarak yeni alt ağlarda yeni kaynaklar oluşturun.

B. Ek alt ağlara sahip ikinci bir VPC oluşturun. İkinciyi bağlamak için bir eşleme bağlantısı kullanın
İlk VPC ile VPC İkincinin alt ağlarında rotaları güncelleyin ve yeni kaynaklar oluşturun
VPC.

C. Bir geçiş ağ geçidi eklemek ve ikinci bir VPC'yi ilkine bağlamak için AWS Transit Gateway'i kullanın
VPTransit ağ geçidinin ve VPC'lerin rotalarını güncelleyin. Alt ağlarda yeni kaynaklar oluşturun
ikinci VPC.

D. İkinci bir VPC oluşturun. İlk VPC ile ilk VPC arasında Siteden Siteye VPN bağlantısı oluşturun
Amazon EC2'de VPN tarafından barındırılan bir çözüm ve sanal bir özel ağ geçidi kullanarak ikinci VPC.
VPC'ler arasındaki rotayı VPN üzerinden trafiğe güncelleyin. Yeni kaynaklar oluşturun
ikinci VPC'nin alt ağları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** IP adreslerinin sayısını artırmak ve VPC'de ek alt ağlar oluşturmak için ek bir IPv4 CIDR bloğu ekleyin. Yeni CIDR'yi kullanarak yeni alt ağlarda yeni kaynaklar oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru 440
Bir şirket, uygulama testi sırasında MySQL Veritabanı bulut sunucusu için Amazon RDS'yi kullandı. önce
Test döngüsünün sonunda veritabanı bulut sunucusunu sonlandıran bir çözüm mimarı, iki
yedekler. Çözüm mimarı, mysqldump yardımcı programını kullanarak ilk yedeği oluşturdu.
bir veritabanı dökümü. Çözüm mimarı, son veritabanını etkinleştirerek ikinci yedeği oluşturdu
RDS sonlandırmada anlık görüntü seçeneği.
Şirket şimdi yeni bir test döngüsü planlıyor ve yeni bir veritabanı bulut sunucusu oluşturmak istiyor.
en son yedekleme. Şirket, Amazon'un MySQL uyumlu bir sürümünü seçti
Aurora veritabanı bulut sunucusunu barındıracak.
Yeni veritabanı örneğini hangi çözümler oluşturacak? (İki tane seçin.)

A. RDS anlık görüntüsünü doğrudan Aurora'ya aktarın.

B. RDS anlık görüntüsünü Amazon S3'e yükleyin. Ardından RDS anlık görüntüsünü Aurora'ya aktarın.

C. Veritabanı dökümünü Amazon S3'e yükleyin. Daha sonra veritabanı dökümünü Aurora'ya aktarın.

D. RDS anlık görüntüsünü Aurora'ya aktarmak için AWS Database Migration Service'i (AWS DMS) kullanın.

E. Veritabanı dökümünü Amazon S3'e yükleyin. Ardından AWS Database Migration Service'i (AWS
DMS) veritabanı dökümünü Aurora'ya aktarmak için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** RDS anlık görüntüsünü doğrudan Aurora'ya aktarın. Veritabanı dökümünü Amazon S3'e yükleyin. Daha sonra veritabanı dökümünü Aurora'ya aktarın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 441
Bir şirket, arkasında Amazon Linux Amazon EC2 bulut sunucularında çok katmanlı bir web uygulaması barındırıyor
Uygulama Yük Dengeleyici. Örnekler birden çok platformda Otomatik Ölçeklendirme grubunda çalışır
Erişilebilirlik Alanları. Şirket, Otomatik Ölçeklendirme grubunun daha fazlasını başlattığını gözlemliyor
Uygulamanın son kullanıcıları yüksek hacimli statik web'e eriştiğinde İsteğe Bağlı Örnekler
içerik. Şirket maliyeti optimize etmek istiyor.
Bir çözüm mimarı, uygulamayı EN uygun maliyetle yeniden tasarlamak için ne yapmalıdır?

A. Otomatik Ölçeklendirme grubunu, İsteğe Bağlı Bulut Sunucuları yerine Rezerve Bulut Sunucularını kullanacak şekilde güncelleyin.

B. İsteğe Bağlı Bulut Sunucuları yerine Spot Bulut Sunucularını başlatarak Otomatik Ölçeklendirme grubunu ölçeklenecek şekilde güncelleyin
Örnekler.

C. Statik web içeriklerini Amazon S3'ten barındırmak için bir Amazon CloudFront dağıtımı oluşturun
kova.

D. Statiği barındırmak için Amazon API Gateway API'sinin arkasında bir AWS Lambda işlevi oluşturun
web sitesi içerikleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Statik web içeriklerini bir Amazon S3 klasöründen barındırmak için bir Amazon CloudFront dağıtımı oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 442
Bir şirket, birden fazla AWS hesabında birkaç petabayt veri depolar. Şirket kullanıyor
Veri gölünü yönetmek için AWS Lake Formation. Şirketin veri bilimi ekibi şunu istiyor:
hesaplarından seçilen verileri şirketin mühendislik ekibiyle güvenli bir şekilde paylaşın
analitik amaçlar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Gerekli verileri ortak bir hesaba kopyalayın. Bu hesapta bir IAM erişim rolü oluşturun. Hibe
mühendislik ekibi hesaplarındaki kullanıcıları içeren bir izin politikası belirleyerek erişim
güvenilir varlıklar olarak.

B. Verilerin depolandığı her hesapta Göl Oluşumu izinleri Ver komutunu kullanın
gerekli mühendislik ekibi kullanıcılarının verilere erişmesine izin vermek.

C. Gerekli verileri gerekli mühendislik birimine özel olarak yayınlamak için AWS Data Exchange'i kullanın
takım hesapları.

D. Hesaplar arası yetkilendirme ve izin vermek için Lake Formation etiket tabanlı erişim kontrolünü kullanın
mühendislik ekibi hesaplarına gerekli veriler için izinler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mühendislik ekibi hesaplarına gerekli veriler için hesaplar arası izinleri yetkilendirmek ve vermek için Lake Formation etiket tabanlı erişim kontrolünü kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 443
Bir şirket AWS'de ölçeklenebilir bir web uygulaması barındırmak istiyor. Uygulamaya erişilecek
Dünyanın farklı coğrafi bölgelerindeki kullanıcılar tarafından. Uygulama kullanıcıları şunları yapabilecektir:
Boyutu gigabayta kadar olan benzersiz verileri indirin ve yükleyin. Geliştirme ekibi istiyor
Yükleme ve indirme gecikmesini en aza indirmek ve performansı en üst düzeye çıkarmak için uygun maliyetli bir çözüm.
Bir çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Uygulamayı barındırmak için Amazon S3'ü Transfer Hızlandırma ile birlikte kullanın.

B. Uygulamayı barındırmak için Amazon S3'ü CacheControl üstbilgileriyle birlikte kullanın.

C. Uygulamayı barındırmak için Otomatik Ölçeklendirme özellikli Amazon EC2'yi ve Amazon CloudFront'u kullanın.

D. Uygulamayı barındırmak için Amazon EC2'yi Otomatik Ölçeklendirme ve Amazon ElastiCache ile kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı barındırmak için Amazon S3'ü Transfer Hızlandırma ile kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 444
Bir şirket, uygulaması için güvenilir bir mimari tasarlamak üzere bir çözüm mimarı tuttu.
uygulama bir Amazon RDS DB bulut sunucusundan ve manuel olarak sağlanan iki Amazon sunucusundan oluşur
Web sunucularını çalıştıran EC2 bulut sunucuları. EC2 bulut sunucuları tek bir Erişilebilirlik Alanında bulunur.
Bir çalışan yakın zamanda veritabanı bulut sunucusunu sildi ve uygulama 24 saat boyunca kullanılamadı
sonuç olarak. Şirket, ortamının genel güvenilirliğiyle ilgilenmektedir.
Uygulamanın altyapısının güvenilirliğini en üst düzeye çıkarmak için çözüm mimarı ne yapmalıdır?

A. Bir EC2 örneğini silin ve diğer EC2 örneğinde sonlandırma korumasını etkinleştirin. Güncelleme
Veritabanı bulut sunucusunun Multi-AZ olmasını ve silme korumasını etkinleştirmesini sağlayın.

B. Veritabanı bulut sunucusunu Multi-AZ olacak şekilde güncelleyin ve silme korumasını etkinleştirin. EC2'yi yerleştirin
Application Load Balancer'ın arkasındaki örneklere erişme ve bunları bir EC2 Otomatik Ölçeklendirme grubunda çalıştırma
birden fazla Erişilebilirlik Alanında.

C. Amazon API Gateway ve AWS Lambda ile birlikte ek bir veritabanı bulut sunucusu oluşturun
işlevi. Uygulamayı API Ağ Geçidi aracılığıyla Lambda işlevini çağıracak şekilde yapılandırın. sahip olmak
Lambda işlevi, verileri iki veritabanı örneğine yazar.

D. EC2 örneklerini, birden fazla alt ağa sahip bir EC2 Otomatik Ölçeklendirme grubuna yerleştirin.
birden fazla Erişilebilirlik Alanı. İsteğe Bağlı Bulut Sunucuları yerine Spot Bulut Sunucularını kullanın. Amazon'u kurun
Bulut sunucularının durumunu izlemek için CloudWatch alarmları Veritabanı bulut sunucusunu Multi-AZ olacak şekilde güncelleyin,
ve silme korumasını etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanı bulut sunucusunu Multi-AZ olacak şekilde güncelleyin ve silme korumasını etkinleştirin. EC2 bulut sunucularını bir Application Load Balancer'ın arkasına yerleştirin ve bunları birden fazla Erişilebilirlik Alanında bir EC2 Otomatik Ölçeklendirme grubunda çalıştırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 445
Bir şirket, büyük bir ağa bağlı depolama (NAS) sisteminde 700 terabayt veri depoluyor.
kurumsal veri merkezi. Şirket, 10 Gbps AWS Direct ile hibrit bir ortama sahip
Bağlantıyı bağlayın.
Bir düzenleyici tarafından yapılan denetimin ardından şirketin verileri buluta taşımak için 90 günü var.
Şirketin verileri verimli ve kesintisiz bir şekilde taşıması gerekiyor. Şirketin hâlâ ihtiyacı var
Aktarım penceresi sırasında verilere erişebilecek ve bunları güncelleyebileceksiniz.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Kurumsal veri merkezinde bir AWS DataSync aracısı oluşturun. Veri aktarım görevi oluşturma Başlat
Amazon S3 klasörüne aktarım.

B. Verileri AWS Snowball Edge Storage Optimized cihazlarına yedekleyin. Cihazları bir yere gönderin
AWS veri merkezi. Şirket içi dosya sistemine hedef bir Amazon S3 klasörü ekleyin.

C. Verileri doğrudan yerel depolama alanından belirlenmiş bir Amazon S3 klasörüne kopyalamak için rsync'i kullanın
Doğrudan Bağlantı bağlantısı.

D. Verileri kasetlere yedekleyin. Bantları bir AWS veri merkezine gönderin. Hedef Amazon S3'ü bağlayın
şirket içi dosya sisteminde paket.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kurumsal veri merkezinde bir AWS DataSync aracısı oluşturun. Veri aktarım görevi oluşturma Amazon S3 klasörüne aktarımı başlatın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 446
Bir şirket, verileri PDF formatında bir Amazon S3 klasöründe saklıyor. Şirketin yasal bir yol izlemesi gerekiyor
tüm yeni ve mevcut verileri Amazon S3'te 7 yıl boyunca saklama zorunluluğu.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. S3 grubu için S3 Sürüm Oluşturma özelliğini açın. Verileri silmek için S3 Lifecycle'ı yapılandırma
7 yıl sonra. Tüm S3 nesneleri için çok faktörlü kimlik doğrulama (MFA) silme işlemini yapılandırın.

B. S3 grubu için yönetim saklama moduyla S3 Object Lock'u açın. Tutmayı ayarlayın
süre 7 yıl sonra dolacaktır. Mevcut verileri aktarmak için mevcut tüm nesneleri yeniden kopyalayın.
uyumluluk.

C. S3 klasörü için uyumluluk saklama moduyla S3 Nesne Kilidini açın. Tutmayı ayarlayın
süre 7 yıl sonra dolacaktır. Mevcut verileri aktarmak için mevcut tüm nesneleri yeniden kopyalayın.
uyumluluk.

D. S3 grubu için uyumluluk saklama moduyla S3 Nesne Kilidini açın. Tutmayı ayarlayın
süre 7 yıl sonra dolacaktır. Mevcut verileri uyumlu hale getirmek için S3 Batch Operations'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 grubu için uyumluluk saklama moduyla S3 Object Lock'u açın. Saklama süresini 7 yıl sonra sona erecek şekilde ayarlayın. Mevcut verileri uyumlu hale getirmek için S3 Batch Operations'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.

---

---

Soru 447
Bir şirketin, çağrılan AWS Lambda işlevleri üzerinde çalışan, durum bilgisi olmayan bir web uygulaması var
Amazon API Gateway tarafından. Şirket, uygulamayı birden fazla AWS'ye dağıtmak istiyor
Bölgesel yük devretme yetenekleri sağlayacak bölgeler.
Trafiği birden çok Bölgeye yönlendirmek için bir çözüm mimarı ne yapmalıdır?

A. Her Bölge için Amazon Route 53 durum kontrolleri oluşturun. Aktif-aktif yük devretme kullanma
konfigürasyon.

B. Her Bölge için bir kaynak içeren bir Amazon CloudFront dağıtımı oluşturun. CloudFront'u kullanın
Trafiği yönlendirmek için sağlık kontrolleri.

C. Bir transit ağ geçidi oluşturun. Geçiş ağ geçidini her birindeki API Ağ Geçidi uç noktasına ekleyin.
Bölge. İstekleri yönlendirmek için transit ağ geçidini yapılandırın.

D. Birincil Bölgede bir Application Load Balancer oluşturun. Hedef grubu işaret edecek şekilde ayarlayın
Her Bölgedeki API Ağ Geçidi uç noktası ana bilgisayar adları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her Bölge için Amazon Route 53 durum kontrolleri oluşturun. Aktif-aktif yük devretme yapılandırmasını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 448
Bir şirketin Yönetim ve Üretim adında iki VPC'si vardır. Yönetim VPC'sinin kullanım alanları
Veri merkezindeki tek bir cihaza bağlanmak için müşteri ağ geçidi üzerinden VPN'ler.
Üretim VPC'si, iki bağlı AWS Direct Connect ile sanal bir özel ağ geçidi kullanır
bağlantılar. Yönetim ve Üretim VPC'lerinin her ikisi de tek bir VPC eşleme bağlantısı kullanır
uygulamalar arasında iletişime izin vermek için.
Bir çözüm mimarı bu mimarideki herhangi bir başarısızlık noktasını azaltmak için ne yapmalıdır?

A. Yönetim ve Üretim VPC'leri arasına bir dizi VPN ekleyin.

B. İkinci bir sanal özel ağ geçidi ekleyin ve bunu Yönetim VPC'sine ekleyin.

C. İkinci bir müşteri ağ geçidi cihazından Yönetim VPC'sine ikinci bir VPN kümesi ekleyin.

D. Yönetim VPC'si ile Üretim arasına ikinci bir VPC eşleme bağlantısı ekleyin
VPC.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İkinci bir müşteri ağ geçidi cihazından Yönetim VPC'sine ikinci bir VPN kümesi ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 449
Bir şirket, uygulamasını Oracle veritabanı üzerinde çalıştırır. Şirket hızlı bir şekilde Türkiye'ye geçmeyi planlıyor
Veritabanı, yedekleme yönetimi ve veri merkezi kaynaklarının sınırlı olması nedeniyle AWS
bakım. Uygulama, ayrıcalıklı erişim gerektiren üçüncü taraf veritabanı özelliklerini kullanır.
Hangi çözüm şirketin veritabanını AWS'ye EN uygun maliyetle taşımasına yardımcı olacak?

A. Veritabanını Amazon RDS for Oracle'a taşıyın. Üçüncü taraf özelliklerini bulutla değiştirin
hizmetler.

B. Veritabanını Amazon RDS Custom for Oracle'a taşıyın. Veritabanı ayarlarını özelleştirin
üçüncü taraf özelliklerini destekler.

C. Veritabanını Oracle için Amazon EC2 Amazon Machine Image'a (AMI) taşıyın. Özelleştir
üçüncü taraf özelliklerini desteklemek için veritabanı ayarları.

D. Uygulama kodunu yeniden yazarak veritabanını Amazon RDS for PostgreSQL'e taşıyın.
Oracle APEX'e bağımlılığı ortadan kaldırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanını Amazon RDS Custom for Oracle'a taşıyın. Üçüncü taraf özelliklerini desteklemek için veritabanı ayarlarını özelleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 450
Bir şirketin tek bir sunucuda bulunan üç katmanlı bir web uygulaması vardır. Şirket istiyor
uygulamayı AWS Cloud'a taşıyın. Şirket ayrıca uygulamanın aşağıdakilerle uyumlu olmasını da istiyor:
AWS Well-Architected Framework ve önerilen en iyi AWS ile tutarlılık
güvenlik, ölçeklenebilirlik ve dayanıklılık uygulamaları.
Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (Üç tanesini seçin.)

A. Uygulamanın mevcut mimarisiyle iki Erişilebilirlik Alanında bir VPC oluşturun. Ev sahipliği yap
her birinde özel bir alt ağda bulunan bir Amazon EC2 örneğinde mevcut mimariye sahip uygulama
EC2 Otomatik Ölçeklendirme gruplarına sahip Erişilebilirlik Alanı. EC2 örneğini güvenlik gruplarıyla koruyun ve
ağ erişim kontrol listeleri (ağ ACL'leri).

B. Erişimi kontrol etmek için güvenlik grupları ve ağ erişim kontrol listeleri (ağ ACL'leri) kurun.
veritabanı katmanı. Özel bir alt ağda tek bir Amazon RDS veritabanı kurun.

C. İki Erişilebilirlik Alanında bir VPC oluşturun. Web katmanını barındırmak için uygulamayı yeniden düzenleyin,
uygulama katmanı ve veritabanı katmanı. Otomatik Ölçeklendirme ile her katmanı kendi özel alt ağında barındırın
web katmanı ve uygulama katmanı için gruplar.

D. Tek bir Amazon RDS veritabanı kullanın. Veritabanı erişimine yalnızca uygulama katmanından izin ver
güvenlik grubu.

E. Web katmanının önünde Elastik Yük Dengeleyicileri kullanın. Güvenlik gruplarını kullanarak erişimi denetleme
her katmanın güvenlik gruplarına referanslar içerir.

F. Özel alt ağlarda Amazon RDS veritabanı Multi-AZ kümesi dağıtımını kullanın. Veritabanına izin ver
yalnızca uygulama katmanı güvenlik gruplarından erişim.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E,`
> - **Önerilen Çözüm:** İki Erişilebilirlik Alanında bir VPC oluşturun. Uygulamayı web katmanını, uygulama katmanını ve veritabanı katmanını barındıracak şekilde yeniden düzenleyin. Web katmanı ve uygulama katmanı için Otomatik Ölçeklendirme gruplarıyla her katmanı kendi özel alt ağında barındırın. Web katmanının önünde Elastik Yük Dengeleyicileri kullanın. Her katmanın güvenlik gruplarına referanslar içeren güvenlik gruplarını kullanarak erişimi kontrol edin. Özel alt ağlarda Amazon RDS veritabanı Multi-AZ kümesi dağıtımını kullanın. Yalnızca uygulama katmanı güvenlik gruplarından veritabanı erişimine izin verin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 451
Bir şirket, uygulamalarını ve veritabanlarını AWS Cloud'a taşıyor. Şirket kullanacak
Amazon Elastic Container Service (Amazon ECS), AWS Direct Connect ve Amazon RDS.
Hangi faaliyetler şirketin operasyonel ekibi tarafından yönetilecek? (Üç tanesini seçin.)

A. Amazon RDS altyapı katmanının, işletim sisteminin ve platformlarının yönetimi

B. Amazon RDS Veritabanı bulut sunucusunun oluşturulması ve planlı bakım aralığının yapılandırılması

C. Amazon ECS'de izleme ve yama için ek yazılım bileşenlerinin yapılandırılması
yönetimi, günlük yönetimi ve ana bilgisayara izinsiz giriş tespiti

D. Amazon RDS için tüm küçük ve ana veritabanı sürümlerine yönelik yamaların kurulumu

E. Veri merkezinde Amazon RDS altyapısının fiziksel güvenliğinin sağlanması

F. Direct Connect aracılığıyla aktarım sırasında hareket eden verilerin şifrelenmesi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C,`
> - **Önerilen Çözüm:** Amazon RDS DB bulut sunucusunun oluşturulması ve planlı bakım penceresinin yapılandırılması İzleme, yama yönetimi, günlük yönetimi ve ana bilgisayara izinsiz giriş tespiti için Amazon ECS'de ek yazılım bileşenlerinin yapılandırılması Direct Connect aracılığıyla aktarım sırasında hareket eden verilerin şifrelenmesi
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 452
Bir şirket, Amazon EC2 örneğinde Java tabanlı bir iş çalıştırıyor. İş her saat başı çalışır ve
koşması 10 saniye sürüyor. İş, zamanlanmış bir aralıkta çalışır ve 1 GB bellek tüketir.
Örneğin CPU kullanımı, işin işlemciyi kullandığı kısa dalgalanmalar dışında düşüktür.
maksimum CPU kullanılabilir. Şirket işi yürütmek için maliyetleri optimize etmek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İşi kapsayıcıya almak için AWS App2Container'ı (A2C) kullanın. İşi Amazon Elastic olarak çalıştırın
AWS Fargate'te 0,5 sanal CPU (vCPU) ve 1 GB depolama alanına sahip Konteyner Hizmeti (Amazon ECS) görevi
hafıza.

B. Kodu, 1 GB belleğe sahip bir AWS Lambda işlevine kopyalayın. Bir Amazon oluşturun
EventBridge, kodu her saat başı çalıştıracak şekilde zamanlanmış kuraldır.

C. İşi kapsayıcıya almak için AWS App2Container'ı (A2C) kullanın. Konteyneri mevcut olana takın
Amazon Makine Görüntüsü (AMI). Görev tamamlandığında zamanlamanın kapsayıcıyı durdurduğundan emin olun.
bitirir.

D. İşin bitiminde EC2 örneğini durdurmak için mevcut planı yapılandırın ve
sonraki iş başladığında EC2 örneğini yeniden başlatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kodu, 1 GB belleğe sahip bir AWS Lambda işlevine kopyalayın. Kodu her saat başı çalıştırmak için bir Amazon EventBridge planlanmış kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 453
Bir şirket, Amazon EC2 verileri ve birden fazla Amazon için bir yedekleme stratejisi uygulamak istiyor
S3 kovaları. Mevzuat gereklilikleri nedeniyle şirketin yedek dosyaları bir süre saklaması gerekir.
belirli bir zaman dilimi. Şirket, saklama süresi boyunca dosyalar üzerinde değişiklik yapmamalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Yönetişim modunda kasa kilidine sahip bir yedekleme kasası oluşturmak için AWS Backup'ı kullanın. Oluştur
gerekli yedekleme planı.

B. Gerekli otomatik anlık yedek politikasını oluşturmak için Amazon Data Lifecycle Manager'ı kullanın.

C. Yedeklemeyi oluşturmak için Amazon S3 File Gateway'i kullanın. Uygun S3 Yaşam Döngüsünü yapılandırın
yönetim.

D. Uyumluluk modunda kasa kilidine sahip bir yedekleme kasası oluşturmak için AWS Backup'ı kullanın. Oluştur
gerekli yedekleme planı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uyumluluk modunda kasa kilidine sahip bir yedekleme kasası oluşturmak için AWS Backup'ı kullanın. Gerekli yedekleme planını oluşturun.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 454
Bir şirketin birden fazla AWS Bölgesinde ve hesabında kaynakları vardır. Yeni işe alınan çözümler
Mimar, önceki bir çalışanın kaynak envanteri hakkında ayrıntılı bilgi vermediğini keşfeder.
Çözüm mimarının çeşitli iş yüklerinin ilişki ayrıntılarını oluşturması ve haritalandırması gerekiyor
tüm hesaplarda.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Ayrıntılı görünüm raporundan bir harita görünümü oluşturmak için AWS Systems Manager Envanterini kullanın.

B. İş yükü ayrıntılarını toplamak için AWS Step Functions'ı kullanın. Mimari diyagramlarını oluşturun
iş yüklerini manuel olarak

C. İş yüklerinin mimari diyagramlarını oluşturmak için AWS'de Workload Discovery'yi kullanın.

D. İş yükü ayrıntılarını görüntülemek için AWS X-Ray'i kullanın. İlişkilerle mimari diyagramlar oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İş yüklerinin mimari diyagramlarını oluşturmak için AWS'de Workload Discovery'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Step Functions Dağıtık İş Akışı Düzenleme:** Mikroservisleri, Lambda fonksiyonlarını ve uzun süreli toplu işleri otomatik yeniden deneme ve durum takibi ile koordine eden görsel iş akışı servisidir.

---

---

Soru 455
Bir şirket AWS Organizasyonlarını kullanıyor. Şirket, AWS hesaplarından bazılarını işletmek istiyor
farklı bütçelerle. Şirket uyarı almak ve otomatik olarak önlemek istiyor
tahsis edilen bütçe eşiği aşıldığında AWS hesaplarına ek kaynakların sağlanması
belirli bir dönemde buluştu.
Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (Üç tanesini seçin.)

A. Bütçe oluşturmak için AWS Budgets'ı kullanın. Bütçe tutarını Maliyet ve Kullanım altında ayarlayın
Gerekli AWS hesaplarının raporlar bölümü.

B. Bütçe oluşturmak için AWS Budgets'ı kullanın. Bütçe tutarını Faturalandırma kontrol panelleri altında ayarlayın.
gerekli AWS hesapları.

C. Gerekli izinlerle bütçe işlemlerini yürütmek üzere AWS Budgets için bir IAM kullanıcısı oluşturun.

D. AWS Budgets'ın bütçe işlemlerini gerekli izinlerle yürütmesi için bir IAM rolü oluşturun.

E. Her hesap bütçe eşiğine ulaştığında şirketi bilgilendirmek için bir uyarı ekleyin. Ekle
önlemek için uygun yapılandırma kuralıyla oluşturulan IAM kimliğini seçen bütçe eylemi
ek kaynakların sağlanması.

F. Her hesap bütçe eşiğine ulaştığında şirketi bilgilendirmek için bir uyarı ekleyin. Ekle
Uygun hizmet kontrol politikasıyla oluşturulan IAM kimliğini seçen bütçe eylemi
(SCP) ek kaynakların sağlanmasını önlemek için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D,`
> - **Önerilen Çözüm:** Bütçe oluşturmak için AWS Budgets'ı kullanın. Bütçe tutarını gerekli AWS hesaplarının Faturalandırma kontrol panelleri altında ayarlayın. AWS Budgets'ın gerekli izinlerle bütçe işlemlerini yürütmesi için bir IAM rolü oluşturun. Her hesap bütçe eşiğine ulaştığında şirketi bilgilendirmek için bir uyarı ekleyin. Ek kaynakların sağlanmasını önlemek için uygun hizmet kontrol politikasıyla (SCP) oluşturulan IAM kimliğini seçen bir bütçe eylemi ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 456
Bir şirket, bir AWS Bölgesindeki Amazon EC2 bulut sunucularında uygulamalar çalıştırıyor. şirket
EC2 bulut sunucularını ikinci bir Bölgeye yedeklemek istiyor. Şirket aynı zamanda provizyon da istiyor
İkinci Bölgedeki EC2 kaynakları ve EC2 bulut sunucularını merkezi olarak tek bir AWS'den yönetin
hesap.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İkincisinde benzer sayıda EC2 bulut sunucusuna sahip bir olağanüstü durum kurtarma (DR) planı oluşturun
Bölge. Veri çoğaltmayı yapılandırın.

B. EC2'nin anlık Amazon Elastic Block Store (Amazon EBS) anlık görüntülerini oluşturun
örnekler. Anlık görüntüleri periyodik olarak ikinci Bölgeye kopyalayın.

C. AWS Backup'ı kullanarak bir yedekleme planı oluşturun. Bölgeler arası yedeklemeyi ikinciye yapılandırma
EC2 bulut sunucuları için bölge.

D. İkinci Bölgede benzer sayıda EC2 bulut sunucusunu dağıtın. AWS DataSync'i kullanarak şunları yapın:
Verileri kaynak Bölgeden ikinci Bölgeye aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Backup'ı kullanarak bir yedekleme planı oluşturun. EC2 bulut sunucuları için Bölgeler arası yedeklemeyi ikinci Bölgeye yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 457
AWS kullanan bir şirket, verileri bir ürün üreticisine aktarmak için bir uygulama geliştiriyor.
Şirketin kendi kimlik sağlayıcısı (IDP) vardır. Şirket IdP'nin kimlik doğrulamasını istiyor
kullanıcılar uygulamayı veri aktarmak için kullanırken uygulama kullanıcıları. Şirketin kullanması gerekiyor
Uygulanabilirlik Bildirimi 2 (AS2) protokolü.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Verileri aktarmak için AWS DataSync'i kullanın. IdP için bir AWS Lambda işlevi oluşturun
kimlik doğrulama.

B. Verileri aktarmak için Amazon AppFlow akışlarını kullanın. Amazon Elastic Container Service oluşturma
IdP kimlik doğrulaması için (Amazon ECS) görevi.

C. Verileri aktarmak için AWS Transfer Family'yi kullanın. IdP için bir AWS Lambda işlevi oluşturun
kimlik doğrulama.

D. Verileri aktarmak için AWS Storage Gateway'i kullanın. Şunun için bir Amazon Cognito kimlik havuzu oluşturun:
IdP kimlik doğrulaması.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri aktarmak için AWS Transfer Family'yi kullanın. IdP kimlik doğrulaması için bir AWS Lambda işlevi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 458
Bir çözüm mimarı, nakit geri ödemesi için Amazon API Gateway'de bir RESTAPI tasarlıyor
hizmet. Uygulama, hesaplama için 1 GB bellek ve 2 GB depolama alanı gerektirir
kaynaklar. Uygulama, verilerin ilişkisel formatta olmasını gerektirecektir.
Hangi ek AWS hizmetleri kombinasyonu bu gereksinimleri EN AZ ile karşılayacaktır?
idari çaba? (İki tane seçin.)

A. Amazon EC2

B. AWS Lambda

C. Amazon RDS

D. Amazon DynamoDB

E. Amazon Elastic Kubernetes Hizmetleri (Amazon EKS)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** AWS Lambda Amazon RDS
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 459
Bir şirket, birden fazla AWS hesabındaki iş yüklerini çalıştırmak için AWS Organizasyonlarını kullanıyor. Bir etiketleme
politika, şirket etiketler oluşturduğunda AWS kaynaklarına departman etiketleri ekler.
Bir muhasebe ekibinin Amazon EC2 tüketimine ilişkin harcamaları belirlemesi gerekir.
muhasebe ekibi, maliyetlerden hangi departmanların sorumlu olduğunu belirlemelidir.
AWS hesabının. Muhasebe ekibinin tüm AWS hesapları için AWS Cost Explorer'a erişimi var
kuruluş içinde ve Cost Explorer'dan tüm raporlara erişmesi gerekiyor.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılıyor?

A. Kuruluş yönetim hesabı faturalandırma konsolundan kullanıcı tanımlı bir maliyeti etkinleştirin
departman adlı tahsis etiketi. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun,
ve EC2'ye göre filtreleyin.

B. Kuruluşun yönetim hesabı faturalandırma konsolundan AWS tanımlı bir maliyeti etkinleştirin
departman adlı tahsis etiketi. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun,
ve EC2'ye göre filtreleyin.

C. Kuruluşun üye hesabı faturalandırma konsolundan kullanıcı tanımlı bir maliyet tahsisini etkinleştirin
departman adı verilen etiket. Maliyet Gezgini'nde etiket adına göre gruplandırılan bir maliyet raporu oluşturun ve
EC2'ye göre filtreleyin.

D. Kuruluşun üye hesabı faturalandırma konsolundan AWS tanımlı bir maliyeti etkinleştirin
departman adlı tahsis etiketi. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun,
ve EC2'ye göre filtreleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kuruluş yönetimi hesabı faturalandırma konsolundan, departman adlı kullanıcı tanımlı bir maliyet tahsis etiketini etkinleştirin. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun ve EC2'ye göre filtreleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 460
Bir şirket, hizmet olarak yazılımı (SaaS) arasında güvenli bir şekilde veri alışverişi yapmak istiyor
uygulama Salesforce hesabı ve Amazon S3. Şirket, kullanımda olmayan verileri şu şekilde şifrelemelidir:
AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtarları (CMK'ler) kullanarak.
Şirketin aynı zamanda aktarılan verileri de şifrelemesi gerekir. Şirket, aşağıdakiler için API erişimini etkinleştirdi:
Salesforce hesabı.

A. Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarmak için AWS Lambda işlevleri oluşturun.

B. Bir AWS Step Functions iş akışı oluşturun. Verileri güvenli bir şekilde aktarma görevini tanımlayın
Salesforce'tan Amazon S3'e.

C. Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarmak için Amazon AppFlow akışları oluşturun.

D. Verileri Salesforce'tan Salesforce'a güvenli bir şekilde aktarmak için Salesforce'a özel bir bağlayıcı oluşturun.
Amazon S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarmak için Amazon AppFlow akışları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 461
Bir şirket, tek bir AWS Bölgesinde mobil oyun uygulaması geliştiriyor. Uygulama çalışıyor
Otomatik Ölçeklendirme grubunda birden fazla Amazon EC2 bulut sunucusu. Şirket, uygulama verilerini
Amazon DynamoDB. Uygulama, TCP trafiğini ve UDP trafiğini kullanarak iletişim kurar.
kullanıcılar ve sunucular. Uygulama global olarak kullanılacak. Şirket şunları sağlamak istiyor:
tüm kullanıcılar için mümkün olan en düşük gecikme.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir hızlandırıcı oluşturmak için AWS Global Accelerator'ı kullanın. Uygulama Yük Dengeleyici Oluşturma
(ALB), Global Accelerator entegrasyonunu kullanan ve dinlemeyi kullanan bir hızlandırıcı uç noktasının arkasında
TCP ve UDP bağlantı noktaları. Örnekleri ALB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin.

B. Bir hızlandırıcı oluşturmak için AWS Global Accelerator'ı kullanın. Ağ Yük Dengeleyicisi (NLB) oluşturma
Global Accelerator entegrasyonunu kullanan ve TCP'yi dinleyen bir hızlandırıcı uç noktasının arkasında
ve UDP bağlantı noktaları. Örnekleri NLB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin.

C. Bir Amazon CloudFront içerik dağıtım ağı (CDN) uç noktası oluşturun. Ağ Oluştur
Uç noktanın arkasındaki Yük Dengeleyici (NLB) ve TCP ve UDP bağlantı noktalarını dinleme. Güncelleme
Örnekleri NLB'ye kaydetmek için Otomatik Ölçeklendirme grubu. NLB'yi sunucu olarak kullanmak için CloudFront'u güncelleyin.
kökeni.

D. Bir Amazon CloudFront içerik dağıtım ağı (CDN) uç noktası oluşturun. Uygulama Oluştur
Uç noktanın arkasındaki Yük Dengeleyici (ALB) ve TCP ve UDP bağlantı noktalarını dinleme. Güncelleme
Örnekleri ALB'ye kaydetmek için Otomatik Ölçeklendirme grubu. ALB'yi sunucu olarak kullanmak için CloudFront'u güncelleyin.
kökeni.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir hızlandırıcı oluşturmak için AWS Global Accelerator'ı kullanın. Global Accelerator entegrasyonunu kullanan ve TCP ve UDP bağlantı noktalarını dinleyen bir hızlandırıcı uç noktasının arkasında bir Ağ Yük Dengeleyici (NLB) oluşturun. Örnekleri NLB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 462
Bir şirketin müşteri siparişlerini işleyen bir uygulaması var. Şirket ev sahipliği yapıyor
Siparişleri bir Amazon Aurora veritabanına kaydeden bir Amazon EC2 bulut sunucusundaki uygulama.
Bazen trafiğin yoğun olduğu durumlarda iş yükü siparişleri yeterince hızlı işlemez.
Bir çözüm mimarı, siparişleri güvenilir bir şekilde veritabanına mümkün olan en kısa sürede yazmak için ne yapmalıdır?
mümkün mü?

A. Trafik yüksek olduğunda EC2 bulut sunucusunun bulut sunucusu boyutunu artırın. Siparişleri Amazon'a yaz
Basit Bildirim Hizmeti (Amazon SNS). Veritabanı uç noktasını SNS konusuna abone olun.

B. Siparişleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın. EC2 örneklerini kullanın
SQS kuyruğundan okumak için Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubu ve
Siparişleri veritabanına işlemek.

C. Siparişleri Amazon Simple Notification Service'e (Amazon SNS) yazın. Veritabanına abone olun
SNS konusunun uç noktası. Bir Uygulamanın arkasındaki Otomatik Ölçeklendirme grubunda EC2 bulut sunucularını kullanma
SNS konusundan okumak için Yük Dengeleyici.

D. EC2 olduğunda siparişleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın.
örnek CPU eşik sınırlarına ulaşır. EC2 bulut sunucularının planlanmış ölçeklendirmesini Otomatik olarak kullanın
SQS kuyruğundan okumak ve işlem yapmak için Application Load Balancer'ın arkasındaki ölçeklendirme grubu
veritabanına siparişler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Siparişleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın. SQS kuyruğundan okumak ve siparişleri veritabanına işlemek için Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki EC2 bulut sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 463
Bir IoT şirketi, kullanıcının uykusu hakkında veri toplayacak sensörlere sahip bir yatak piyasaya sürüyor.
Sensörler verileri bir Amazon S3 klasörüne gönderecek. Sensörler yaklaşık 2 MB veri topluyor
Her yatak için her gece veri. Şirket, her biri için verileri işlemeli ve özetlemelidir.
yatak. Sonuçların mümkün olan en kısa sürede elde edilmesi gerekiyor. Veri işleme 1 gerektirecektir
GB hafıza ve 30 saniye içinde bitecek.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. AWS Glue'yu bir Scala işiyle kullanın

B. Amazon EMR'yi Apache Spark betiğiyle kullanma

C. AWS Lambda'yı Python betiğiyle kullanın

D. AWS Glue'yu bir PySpark işiyle kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Lambda'yı Python betiğiyle kullanma
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 464
Bir şirket, tüm siparişleri Amazon RDS'de saklayan bir çevrimiçi alışveriş uygulamasına ev sahipliği yapıyor.
PostgreSQL Single-AZ Veritabanı örneği. Yönetim tek başarısızlık noktalarını ortadan kaldırmak istiyor ve
bir çözüm mimarından veritabanı kesinti süresini en aza indirecek bir yaklaşım önermesini istedi
uygulama kodunda herhangi bir değişiklik yapılmasına gerek kalmadan.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanını değiştirerek mevcut veritabanı örneğini Multi-AZ dağıtımına dönüştürün
örneği ve Multi-AZ seçeneğinin belirtilmesi.

B. Yeni bir RDS Multi-AZ dağıtımı oluşturun. Geçerli RDS örneğinin anlık görüntüsünü alın ve
anlık görüntüyle yeni Multi-AZ dağıtımını geri yükleyin.

C. Başka bir Erişilebilirlik Alanında PostgreSQL veritabanının salt okunur bir kopyasını oluşturun. Kullanım
İstekleri veritabanları arasında dağıtmak için Amazon Route 53 ağırlıklı kayıt kümeleri.

D. RDS for PostgreSQL veritabanını bir Amazon EC2 Auto Scaling grubuna yerleştirin.
minimum grup büyüklüğü iki kişiliktir. İstekleri dağıtmak için Amazon Route 53 ağırlıklı kayıt kümelerini kullanın
örnekler arasında.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanı örneğini değiştirerek ve Multi-AZ seçeneğini belirterek mevcut veritabanı örneğini Multi-AZ dağıtımına dönüştürün.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 465
Bir şirket müşteri taleplerini destekleyecek bir uygulama geliştiriyor. Şirket istiyor
uygulamayı aynı içindeki birden fazla Amazon EC2 Nitro tabanlı bulut sunucusuna dağıtın
Erişilebilirlik Alanı. Şirket ayrıca uygulamaya birden fazla dosyaya yazma yeteneği vermek istiyor.
daha yüksek değerlere ulaşmak için birden fazla EC2 Nitro tabanlı örnekte depolama birimlerini aynı anda bloke edin
uygulama kullanılabilirliği.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Elastic Block Store (Amazon) ile Genel Amaçlı SSD (gp3) EBS birimlerini kullanın
EBS) Çoklu Bağlantı

B. Amazon Elastic Block Store (Amazon) ile Performansı Optimize Edilmiş HDD (st1) EBS birimlerini kullanın
EBS) Çoklu Bağlantı

C. Amazon Elastic Block Store (Amazon) ile Tedarik Edilen IOPS SSD (io2) EBS birimlerini kullanın
EBS) Çoklu Bağlantı

D. Amazon Elastic Block Store (Amazon) ile Genel Amaçlı SSD (gp2) EBS birimlerini kullanın
EBS) Çoklu Bağlantı

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Elastic Block Store (Amazon EBS) Multi-Attach ile Tedarik Edilen IOPS SSD (io2) EBS birimlerini kullanın
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 466
Bir şirket, Amazon EC2'yi tek bir platformda kullanan, durum bilgisi olmayan, iki katmanlı bir uygulama tasarladı
Erişilebilirlik Alanı ve bir Amazon RDS Multi-AZ Veritabanı bulut sunucusu. Yeni şirket yönetimi istiyor
Uygulamanın yüksek düzeyde kullanılabilir olmasını sağlamak için.
Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Uygulamayı Multi-AZ EC2 Otomatik Ölçeklendirmeyi kullanacak şekilde yapılandırın ve bir Uygulama Yükü oluşturun
Dengeleyici

B. Uygulamayı, EC2 bulut sunucularının anlık görüntülerini alacak ve bunları farklı bir sunucuya gönderecek şekilde yapılandırın.
AWS Bölgesi

C. Uygulamayı, istekleri beslemek için Amazon Route 53 gecikmeye dayalı yönlendirmeyi kullanacak şekilde yapılandırın.
uygulama

D. Gelen istekleri işlemek ve bir Multi-AZ oluşturmak için Amazon Route 53 kurallarını yapılandırın
Uygulama Yük Dengeleyici

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı Multi-AZ EC2 Otomatik Ölçeklendirmeyi kullanacak şekilde yapılandırın ve bir Application Load Balancer oluşturun
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 467
Bir şirket AWS Organizasyonlarını kullanıyor. Bir üye hesabı Hesaplama Tasarrufu satın aldı
Planla. Üye hesabındaki iş yüklerindeki değişiklikler nedeniyle hesap artık
Bilgi İşlem Tasarruf Planı taahhüdünün tüm avantajlarından yararlanır. Şirket şundan daha azını kullanıyor:
Satın alınan bilgi işlem gücünün %50'si.

A. Hesap konsolunun Faturalandırma Tercihleri bölümünden indirim paylaşımını açın.
Hesaplama Tasarruf Planı'nı satın alan üye hesabı.

B. Hesap konsolunun Faturalandırma Tercihleri bölümünden indirim paylaşımını açın.
Şirketin Organizasyon yönetimi hesabı.

C. Ek bilgi işlem iş yüklerini başka bir AWS hesabından aşağıdaki özelliklere sahip hesaba taşıyın:
Tasarruf Planını Hesaplayın.

D. Fazla Tasarruf Planı taahhüdünü Rezerve Edilmiş Bulut Sunucusu Pazarında satabilirsiniz.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirketin Kuruluş yönetimi hesabındaki hesap konsolunun Faturalandırma Tercihleri ​​bölümünden indirim paylaşımını açın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 468
Bir şirket, arama kataloğu sağlayacak bir mikro hizmet uygulaması geliştiriyor
müşteriler. Şirket, uygulamanın ön ucunu sunmak için REST API'lerini kullanmalıdır.
kullanıcılar. REST API'leri, şirketin kapsayıcılarda barındırdığı arka uç hizmetlerine erişmelidir
özel VPC alt ağlarında.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon API Gateway'i kullanarak bir WebSocket API tasarlayın. Uygulamayı Amazon'da barındırın
Özel bir alt ağda Elastic Container Service (Amazon ECS). API için özel bir VPC bağlantısı oluşturun
Amazon ECS'ye erişim için ağ geçidi.

B. Amazon API Gateway'i kullanarak bir REST API tasarlayın. Uygulamayı Amazon Elastic'te barındırın
Özel bir alt ağda Konteyner Hizmeti (Amazon ECS). API Ağ Geçidi için özel bir VPC bağlantısı oluşturun
Amazon ECS'ye erişmek için.

C. Amazon API Gateway'i kullanarak bir WebSocket API tasarlayın. Uygulamayı Amazon'da barındırın
Özel bir alt ağda Elastic Container Service (Amazon ECS). API için bir güvenlik grubu oluşturun
Amazon ECS'ye erişim için ağ geçidi.

D. Amazon API Gateway'i kullanarak bir REST API tasarlayın. Uygulamayı Amazon Elastic'te barındırın
Özel bir alt ağda Konteyner Hizmeti (Amazon ECS). API Ağ Geçidi için bir güvenlik grubu oluşturun
Amazon ECS'ye erişin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon API Gateway'i kullanarak bir REST API tasarlayın. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) özel bir alt ağda barındırın. Amazon ECS'ye erişmek için API Gateway'e yönelik özel bir VPC bağlantısı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 469
Bir şirket, toplanan ham verileri bir Amazon S3 klasöründe saklıyor. Veriler birkaç amaçla kullanılıyor
Şirketin müşterileri adına analiz türleri. Talep edilen analiz türü
S3 nesnelerindeki erişim modelini belirler.
Şirket erişim modelini tahmin edemez veya kontrol edemez. Şirket S3'ü azaltmak istiyor
maliyetler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Sık erişilmeyen nesneleri S3 Standart-Nadir Erişime geçirmek için S3 çoğaltmayı kullanın
(S3 Standardı-IA)

B. Nesneleri S3 Standart'tan Standart Seyrek Erişime geçirmek için S3 Yaşam Döngüsü kurallarını kullanın
(S3 Standardı-IA)

C. Nesneleri S3 Standard'tan S3 Intelligent-Tiering'e geçirmek için S3 Yaşam Döngüsü kurallarını kullanın

D. S3'ten erişilmeyen nesneleri tanımlamak ve geçiş yapmak için S3 Envanterini kullanın
Standarttan S3'e Akıllı Katmanlama

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Nesneleri S3 Standard'tan S3 Intelligent-Tiering'e geçirmek için S3 Yaşam Döngüsü kurallarını kullanın
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 470
Bir şirketin Amazon EC2 bulut sunucularında IPv6 adresleriyle barındırılan uygulamaları var.
uygulamaların interneti kullanarak diğer harici uygulamalarla iletişim başlatması gerekir.
Ancak şirketin güvenlik politikası, herhangi bir harici hizmetin bir sorun başlatamayacağını belirtiyor.
EC2 bulut sunucularına bağlantı.
Bir çözüm mimarı bu sorunu çözmek için ne önermelidir?

A. Bir NAT ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

B. Bir internet ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

C. Sanal bir özel ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

D. Yalnızca çıkışa yönelik bir internet ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yalnızca çıkışa yönelik bir internet ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 471
Bir şirket, VPC'deki konteynerler üzerinde çalışan bir uygulama oluşturuyor. Uygulama depoları
ve bir Amazon S3 klasöründeki verilere erişir. Uygulama geliştirme aşamasında,
Amazon S3'te her gün 1 TB veri depolayın ve bu verilere erişin. Şirket maliyetleri en aza indirmek istiyor
ve mümkün olduğunca trafiğin internet üzerinden geçmesini engellemek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 grubu için S3 Akıllı Katmanlamayı etkinleştirin

B. S3 grubu için S3 Aktarım Hızlandırmasını etkinleştirin

C. Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Bu uç noktayı içindeki tüm rota tablolarıyla ilişkilendirin
VPC

D. VPC'de Amazon S3 için bir arayüz uç noktası oluşturun. Bu uç noktayı tüm rotayla ilişkilendirin
VPC'deki tablolar

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Bu uç noktayı VPC'deki tüm rota tablolarıyla ilişkilendirin
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 472
Bir şirketin Amazon DynamoDB tabanlı veri deposuna sahip bir mobil sohbet uygulaması vardır. Kullanıcılar
yeni mesajların mümkün olduğunca az gecikmeyle okunmasını istiyor. Bir çözüm mimarının ihtiyacı var
Minimum uygulama değişikliği gerektiren en uygun çözümü tasarlamak.
Çözüm mimarı hangi yöntemi seçmelidir?

A. Yeni mesajlar tablosu için Amazon DynamoDB Accelerator'ı (DAX) yapılandırın. Güncelleme
DAX uç noktasını kullanmak için kod.

B. Artan okuma yükünü karşılamak için DynamoDB okuma replikalarını ekleyin. Uygulamayı şu şekilde güncelleyin:
okuma kopyaları için okuma uç noktasını işaret edin.

C. DynamoDB'deki yeni mesajlar tablosu için okuma kapasitesi birimlerinin sayısını iki katına çıkarın. Devam et
Mevcut DynamoDB uç noktasını kullanmak için.

D. Uygulama yığınına bir Amazon ElastiCache for Redis önbelleği ekleyin. Uygulamayı şu şekilde güncelleyin:
DynamoDB yerine Redis önbellek uç noktasını işaretleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Yeni mesajlar tablosu için Amazon DynamoDB Accelerator'ı (DAX) yapılandırın. DAX uç noktasını kullanmak için kodu güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon DynamoDB Hızlandırıcı (DAX):** DynamoDB için özel geliştirilmiş bellek içi önbellek kümesidir; yoğun okuma yapan uygulamalarda yanıt süresini milisaniyelerden mikrosaniyelere indirir.

---

---

Soru 473
Bir şirket, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında bir web sitesi barındırıyor
(ALB). Web sitesi statik içerik sunmaktadır. Web sitesi trafiği artıyor ve şirket
maliyette olası bir artıştan endişe duyuyor.

A. Durum dosyalarını uç konumlarda önbelleğe almak için bir Amazon CloudFront dağıtımı oluşturun

B. Bir Amazon ElastiCache kümesi oluşturun. Hizmet vermek için ALB'yi ElastiCache kümesine bağlayın
önbelleğe alınmış dosyalar

C. Bir AWS WAF web ACL'si oluşturun ve bunu ALB ile ilişkilendirin. Web ACL'sine bir kural ekleyin
statik dosyaları önbelleğe al

D. Alternatif bir AWS Bölgesinde ikinci bir ALB oluşturun. Kullanıcı trafiğini en yakın Bölgeye yönlendirin
veri aktarım maliyetlerini en aza indirin

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Durum dosyalarını uç konumlarda önbelleğe almak için bir Amazon CloudFront dağıtımı oluşturun
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 474
Bir şirketin AWS Bölgelerinde aşağıdaki iş yüklerini desteklemek ve çalıştırmak için birden fazla VPC'si vardır:
diğer Bölgelerdeki iş yüklerinden izole edilmiştir. Yakın zamanda ortaya çıkan bir uygulama başlatma gereksinimi nedeniyle,
şirketin VPC'leri tüm Bölgelerdeki diğer tüm VPC'lerle iletişim kurmalıdır.
Hangi çözüm bu gereksinimleri EN AZ miktarda idari çabayla karşılayacak?

A. Tek bir Bölgede VPC iletişimini yönetmek için VPC eşlemeyi kullanın. Karşılıklı VPC eşlemeyi kullanın
VPC iletişimlerini yönetecek bölgeler.

B. VPC'leri bölgeler arasında bağlamak için tüm Bölgelerde AWS Direct Connect ağ geçitlerini kullanın ve
VPC iletişimlerini yönetin.

C. Tek bir Bölge ve Transit'te VPC iletişimini yönetmek için AWS Transit Gateway'i kullanın
VPC iletişimlerini yönetmek için Bölgeler arasında ağ geçidi eşlemesi.

D. VPC'leri Bölgeler arasında bağlamak ve VPC'yi yönetmek için tüm Bölgelerde AWS PrivateLink'i kullanın
iletişim

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tek bir Bölgedeki VPC iletişimini yönetmek için AWS Transit Gateway'i ve VPC iletişimlerini yönetmek için Bölgeler arasında geçiş yapan Transit Gateway'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru 475
Bir şirket, Amazon Elastic Container'ı kullanacak konteynerli bir uygulama tasarlıyor
Hizmet (Amazon ECS). Uygulamanın yüksek düzeyde paylaşılan bir dosya sistemine erişmesi gerekiyor.
dayanıklıdır ve 8 kurtarma noktası hedefi (RPO) ile verileri başka bir AWS Bölgesine kurtarabilir
saatler. Dosya sisteminin bir Bölge içindeki her Erişilebilirlik Alanı için bir bağlama hedefi sağlaması gerekir.
Bir çözüm mimarı, başka bir Bölgeye kopyalamayı yönetmek için AWS Backup'ı kullanmak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Multi-AZ dağıtımıyla Windows Dosya Sunucusu için Amazon FSx

B. Multi-AZ dağıtımıyla NetApp ONTAP için Amazon FSx

C. Standart depolama sınıfına sahip Amazon Elastic File System (Amazon EFS)

D. OpenZFS için Amazon FSx

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Standart depolama sınıfına sahip Amazon Elastic File System (Amazon EFS)
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 476
Bir şirket yakın gelecekte hızlı bir büyüme bekliyor. Bir çözüm mimarının yapılandırması gerekiyor
AWS'de mevcut kullanıcılara izin verin ve yeni kullanıcılara izin verin. Çözüm mimarı karar verdi
IAM grupları oluşturmak için. Çözüm mimarı, yeni kullanıcıları IAM gruplarına ekleyecektir.
departman.
Yeni kullanıcılara izin vermenin EN güvenli yolu hangi ek eylemdir?

A. Erişim izinlerini yönetmek için hizmet kontrol politikalarını (SCP'ler) uygulayın

B. En az ayrıcalık iznine sahip IAM rolleri oluşturun. Rolleri IAM gruplarına ekleyin

C. En az ayrıcalık izni veren bir IAM politikası oluşturun. Politikayı IAM gruplarına ekleyin

D. IAM rolleri oluşturun. Rolleri, maksimum izin sınırını tanımlayan bir izin sınırıyla ilişkilendirin.
izinler

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** En az ayrıcalık izni veren bir IAM politikası oluşturun. Politikayı IAM gruplarına ekleyin
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 477
Bir grup, bir Amazon S3 klasörünü listelemek ve bu paketteki nesneleri silmek için izinlere ihtiyaç duyar.
Bir yönetici, pakete erişim sağlamak için aşağıdaki IAM politikasını oluşturdu ve
bu politikayı gruba uyguladı. Grup, paketteki nesneleri silemez.
şirket en az ayrıcalıklı erişim kurallarına uyuyor.
Bir çözüm mimarı paket erişimini düzeltmek için politikaya hangi ifadeyi eklemelidir?

A.

B.


C.

D.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Sorunun Doğru Cevabı : D
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 478
Bir hukuk firmasının kamuoyuyla bilgi paylaşması gerekir. Bilgiler yüzlerce dosya içeriyor
herkesin okuyabileceği şekilde olmalıdır. Dosyaların herhangi bir kişi tarafından değiştirilmesi veya silinmesi
Gelecekteki belirlenmiş tarihler yasaktır.
Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. Tüm dosyaları statik web sitesi barındırma için yapılandırılmış bir Amazon S3 klasörüne yükleyin. Hibe
belirlenene kadar S3 klasörüne erişen tüm AWS sorumlularına yönelik salt okunur IAM izinleri
tarih.

B. S3 Sürümü Etkinleştirmenin etkin olduğu yeni bir Amazon S3 klasörü oluşturun. S3 Object Lock'u bir
belirlenen tarihe göre saklama süresi. Statik web sitesi için S3 paketini yapılandırma
ev sahipliği yapıyor. Nesnelere salt okunur erişime izin vermek için bir S3 grup ilkesi ayarlayın.

C. S3 Sürümü Oluşturma etkinleştirilmiş yeni bir Amazon S3 klasörü oluşturun. Çalıştırılacak bir olay tetikleyicisini yapılandırma
Nesnenin değiştirilmesi veya silinmesi durumunda bir AWS Lambda işlevi. Lambda'yı yapılandırma
nesneleri özel bir S3 klasöründeki orijinal sürümlerle değiştirme işlevi.

D. Tüm dosyaları statik web sitesi barındırma için yapılandırılmış bir Amazon S3 klasörüne yükleyin. Şunu seçin:
dosyaları içeren klasör. S3 Object Lock'u saklama süresiyle birlikte kullanın.
belirlenen tarih. S3'e erişen tüm AWS sorumlularına salt okunur IAM izinleri verin
kova.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 Sürüm Oluşturma'nın etkin olduğu yeni bir Amazon S3 klasörü oluşturun. S3 Object Lock'u belirlenen tarihe uygun bir saklama süresiyle kullanın. Statik web sitesi barındırma için S3 paketini yapılandırın. Nesnelere salt okunur erişime izin vermek için bir S3 grup ilkesi ayarlayın.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 479
Bir şirket yeni web sitesi için altyapının prototipini manuel olarak yapıyor
gerekli altyapıyı sağlamak. Bu altyapı bir Otomatik Ölçeklendirme grubunu içerir.
Application Load Balancer ve Amazon RDS veritabanı. Yapılandırma tamamlandıktan sonra
Tamamen doğrulanmış olan şirket, altyapıyı hemen devreye alma yeteneği istiyor
iki Erişilebilirlik Alanında otomatikleştirilmiş bir şekilde geliştirme ve üretim kullanımı için.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Prototip altyapısını iki adımda çoğaltmak ve tedarik etmek için AWS Systems Manager'ı kullanın.
Erişilebilirlik Alanları

B. Prototip altyapısını kılavuz olarak kullanarak altyapıyı şablon olarak tanımlayın. Dağıt
AWS CloudFormation ile altyapı.

C. Prototipte kullanılan kaynakların envanterini kaydetmek için AWS Config'i kullanın
altyapı. Prototip altyapısını iki Erişilebilirlik Alanına dağıtmak için AWS Config'i kullanın.

D. AWS Elastic Beanstalk'ı kullanın ve prototipe otomatik bir referans kullanacak şekilde yapılandırın
Yeni ortamların iki Erişilebilirlik Alanında otomatik olarak dağıtılmasına yönelik altyapı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Prototip altyapısını kılavuz olarak kullanarak altyapıyı şablon olarak tanımlayın. Altyapıyı AWS CloudFormation ile dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 480
Bir iş uygulaması Amazon EC2'de barındırılıyor ve şifrelenmiş nesneler için Amazon S3'ü kullanıyor
depolama. Baş bilgi güvenliği sorumlusu, kullanıcılar arasında uygulama trafiğinin olmaması talimatını verdi.
iki hizmetin halka açık internet üzerinden geçmesi gerekir.
Çözüm mimarı uyumluluk gereksinimlerini karşılamak için hangi yeteneği kullanmalıdır?

A. AWS Anahtar Yönetimi Hizmeti (AWS KMS)

B. VPC uç noktası

C. Özel alt ağ

D. Sanal özel ağ geçidi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** VPC uç noktası
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 481
Bir şirket, AWS Cloud'da üç katmanlı bir web uygulaması barındırıyor. Çoklu AZAmazon RDS'si
MySQL sunucusu veritabanı katmanını oluşturur Amazon ElastiCache, önbellek katmanını oluşturur.
şirket, bir müşteri gerektiğinde önbelleğe veri ekleyen veya güncelleyen bir önbellekleme stratejisi istiyor
Veritabanına bir öğe ekler. Önbellekteki veriler her zaman önbellekteki verilerle eşleşmelidir.
veritabanı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Tembel yükleme önbelleğe alma stratejisini uygulayın

B. İçe yazma önbelleğe alma stratejisini uygulama

C. Ekleme TTL önbelleğe alma stratejisini uygulayın

D. AWS AppConfig önbelleğe alma stratejisini uygulayın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İçe yazma önbelleğe alma stratejisini uygulama
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 482
Bir şirket, 100 GB'lık geçmiş verilerini şirket içi bir konumdan başka bir yere taşımak istiyor
Amazon S3 kovası. Şirketin saniyede 100 megabit (Mbps) internet bağlantısı bulunmaktadır.
tesisler. Şirketin S3 klasörüne aktarılan verileri şifrelemesi gerekiyor. Şirket
yeni verileri doğrudan Amazon S3'te depolayın.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri doğrudan bir S3 klasörüne taşımak için AWS CLI'deki s3 senkronizasyon komutunu kullanın

B. Verileri şirket içi konumdan bir S3 klasörüne taşımak için AWS DataSync'i kullanın

C. Verileri bir S3 klasörüne taşımak için AWS Snowball'u kullanın

D. Şirket içi konumdan AWS'ye bir IPsec VPN kurun. s3 cp komutunu kullanın.
Verileri doğrudan bir S3 klasörüne taşımak için AWS CLI

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri şirket içi konumdan bir S3 klasörüne taşımak için AWS DataSync'i kullanın
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 483
Bir şirket, Windows altında .NET 6 Framework üzerinde çalışan bir Windows işini kapsayıcıya aldı.
konteyner. Şirket bu işi AWS Cloud'da yürütmek istiyor. İş her 10 dakikada bir çalışır.
İşin çalışma süresi 1 dakika ile 3 dakika arasında değişmektedir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İşin kapsayıcı görüntüsünü temel alarak bir AWS Lambda işlevi oluşturun. Amazon'u yapılandırın
EventBridge işlevi her 10 dakikada bir çağırır.

B. AWS Fargate kaynaklarını kullanan bir iş oluşturmak için AWS Batch'i kullanın. İş zamanlamasını yapılandırma
her 10 dakikada bir çalıştırmak için.

C. İşi çalıştırmak için AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın. Bir oluştur
zamanlanmış görev, işin kapsayıcı görüntüsüne göre her 10 dakikada bir çalıştırılacak.

D. İşi yürütmek için AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın. Bir oluştur
işin kapsayıcı görüntüsüne dayalı bağımsız görev. Çalıştırmak için Windows görev zamanlayıcısını kullanın
her 10 dakikada bir iş.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İşi çalıştırmak için AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın. Her 10 dakikada bir çalıştırılacak işin kapsayıcı görüntüsüne dayalı olarak zamanlanmış bir görev oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 484
Bir şirket birçok bağımsız AWS hesabından birleştirilmiş,
çoklu hesap mimarisi. Şirket, farklı amaçlar için birçok yeni AWS hesabı oluşturmayı planlıyor
iş birimleri. Şirketin bu AWS hesaplarına erişimi bir kimlik doğrulaması kullanarak doğrulaması gerekiyor.
merkezi kurumsal dizin hizmeti.
Bir çözüm mimarı bunları karşılamak için hangi eylem kombinasyonunu önermelidir?
gereksinimler? (İki tane seçin.)

A. AWS Organizasyonlarında tüm özelliklerin açık olduğu yeni bir kuruluş oluşturun. Yeniyi oluştur
Kuruluştaki AWS hesapları.

B. Bir Amazon Cognito kimlik havuzu oluşturun. AWS IAM Identity Center'ı (AWS Single) Yapılandırma
Amazon Cognito kimlik doğrulamasını kabul etmek için Oturum Açın).

C. AWS hesaplarını yönetmek için bir hizmet kontrol politikası (SCP) yapılandırın. AWS IAM Kimliği Ekle
(AWS Tek Oturum Açma) AWS Dizin Hizmetine merkezleyin.

D. AWS Organizasyonlarında yeni bir organizasyon oluşturun. Kuruluşun kimlik doğrulamasını yapılandırma
AWS Directory Service'i doğrudan kullanma mekanizması.

E. Kuruluşta AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kurun. IAM'yi yapılandır
Kimlik Merkezi'ni oluşturun ve bunu şirketin kurumsal dizin hizmetiyle entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** AWS Organizasyonlarında tüm özelliklerin açık olduğu yeni bir kuruluş oluşturun. Kuruluşta yeni AWS hesaplarını oluşturun. Kuruluşta AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kurun. IAM Identity Center'ı yapılandırın ve şirketin kurumsal dizin hizmetiyle entegre edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 485
Bir şirket, eski haber görüntülerinden video arşivlerini AWS'de depolayabilecek bir çözüm arıyor.
Şirketin maliyetleri en aza indirmesi gerekiyor ve bu dosyaları nadiren geri yüklemesi gerekecek. Dosyalar ne zaman
ihtiyaç duyulduğunda en fazla beş dakika içinde hazır olmaları gerekir.
EN uygun maliyetli çözüm nedir?

A. Video arşivlerini Amazon S3 Glacier'da saklayın ve Hızlandırılmış alımları kullanın.

B. Video arşivlerini Amazon S3 Glacier'da saklayın ve Standart alımları kullanın.

C. Video arşivlerini Amazon S3 Standard-Infrequent Access'te (S3 Standard-IA) saklayın.

D. Video arşivlerini Amazon S3 One Zone-Infrequent Access'te (S3 One Zone-IA) saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Video arşivlerini Amazon S3 Glacier'da saklayın ve Hızlandırılmış alımları kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 486
Bir şirket AWS'de üç katmanlı bir uygulama geliştiriyor. Sunum katmanı statik bir hizmet sunacak
web sitesi Mantık katmanı kapsayıcıya alınmış bir uygulamadır. Bu uygulama verileri ilişkisel bir biçimde saklayacak
veritabanı. Şirket, dağıtımı basitleştirmek ve operasyonel maliyetleri azaltmak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Statik içeriği barındırmak için Amazon S3'ü kullanın. Amazon Elastic Container Service'i (Amazon ECS) kullanın
bilgi işlem gücü için AWS Fargate ile. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.

B. Statik içeriği barındırmak için Amazon CloudFront'u kullanın. Amazon Elastic Container Service'i kullanın
(Amazon ECS) bilgi işlem gücü için Amazon EC2 ile. Şunlar için yönetilen bir Amazon RDS kümesi kullanın:
veritabanı.

C. Statik içeriği barındırmak için Amazon S3'ü kullanın. Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanın
bilgi işlem gücü için AWS Fargate ile. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.

D. Statik içeriği barındırmak için Amazon EC2 Rezerve Edilmiş Bulut Sunucularını kullanın. Amazon Elastic Kubernetes'i kullanın
Bilgi işlem gücü için Amazon EC2 ile hizmet (Amazon EKS). Yönetilen bir Amazon RDS kullanın
veritabanı için küme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Statik içeriği barındırmak için Amazon S3'ü kullanın. Bilgi işlem gücü için Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate ile birlikte kullanın. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 487
Bir şirket, uygulaması için bir depolama çözümü arıyor. Çözüm yüksek oranda kullanılabilir olmalı ve
ölçeklenebilir. Çözüm aynı zamanda birden fazla Linux tarafından bağlanabilen bir dosya sistemi olarak da çalışmalıdır.
Yerel protokoller aracılığıyla AWS'deki ve şirket içi örneklerdir ve minimum boyuta sahip değildir
gereksinimleri. Şirket, şirket içinden erişim için Siteden Siteye VPN kurmuştur
ağ üzerinden VPC'sine bağlanın.
Hangi depolama çözümü bu gereksinimleri karşılıyor?

A. Amazon FSx Multi-AZ dağıtımları

B. Amazon Elastic Block Store (Amazon EBS) Çoklu Ekli birimler

C. Birden fazla bağlama hedefine sahip Amazon Elastic File System (Amazon EFS)

D. Tek bir bağlama hedefine ve çoklu erişime sahip Amazon Elastic File System (Amazon EFS)
puan

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birden fazla bağlama hedefine sahip Amazon Elastic File System (Amazon EFS)
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 488
4 yaşındaki bir medya şirketi, organizasyon yapmak için AWS Organizasyonlarının tüm özellik setini kullanıyor
AWS hesapları. Şirketin finans ekibine göre, fatura bilgileri
Üye hesaplarına, üyenin root kullanıcısı da dahil olmak üzere hiç kimse erişememelidir.
hesaplar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Tüm finans ekibi kullanıcılarını bir IAM grubuna ekleyin. Faturalandırma adlı bir AWS tarafından yönetilen politikayı şu adrese ekleyin:
grup.

B. Aşağıdakiler de dahil olmak üzere tüm kullanıcıların fatura bilgilerine erişimini engellemek için kimlik tabanlı bir politika ekleyin:
kök kullanıcı.

C. Faturalama bilgilerine erişimi reddetmek için bir hizmet kontrol ilkesi (SCP) oluşturun. SCP'yi takın
kök kuruluş birimine (OU).

D. Kuruluşun tüm özelliklerini dönüştürme özelliği, Kuruluşun birleştirilmiş faturalandırmasına ayarlandı
özellik seti.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Fatura bilgilerine erişimi reddetmek için bir hizmet kontrol ilkesi (SCP) oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 489
Bir e-ticaret şirketi, AWS Cloud'da bir uygulamayla entegre olan bir uygulamayı çalıştırır.
şirket içi depo çözümü. Şirket Amazon Basit Bildirim Hizmetini kullanıyor
(Amazon SNS) sipariş mesajlarını şirket içi bir HTTPS uç noktasına göndererek deponun
uygulama siparişleri işleyebilir. Yerel veri merkezi ekibi, bazı
sipariş mesajları gelmedi.
Bir çözüm mimarının teslim edilmeyen mesajları saklaması ve mesajları analiz etmesi gerekir.
14 güne kadar.
Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. Amazon Kinesis Data Stream hedefine sahip bir Amazon SNS teslim edilemeyen ileti kuyruğunu yapılandırın
14 günlük saklama süresi ile.

B. Saklama süresi 14 olan bir Amazon Simple Queue Service (Amazon SQS) kuyruğu ekleyin
uygulama ile Amazon SNS arasındaki günler.

C. Amazon Simple Queue Service'e sahip bir Amazon SNS teslim edilemeyen ileti kuyruğunu yapılandırma
(Amazon SQS) 14 günlük saklama süresine sahip hedef.

D. Amazon DynamoDB hedefine sahip bir Amazon SNS teslim edilemeyen ileti kuyruğunu yapılandırın.
TTL özelliği 14 günlük bir saklama süresi için ayarlandı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** 14 günlük saklama süresine sahip bir Amazon Simple Queue Service (Amazon SQS) hedefine sahip bir Amazon SNS teslim edilemeyen ileti kuyruğu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 490
Bir oyun şirketi, coğrafi konum gibi kullanıcı bilgilerini depolamak için Amazon DynamoDB'yi kullanıyor
konum, oyuncu verileri ve skor tabloları. Şirketin sürekli yedeklemeleri yapılandırması gerekiyor
Minimum miktarda kodlama içeren bir Amazon S3 klasörü. Yedeklemeler kullanılabilirliği etkilememelidir
uygulama için tanımlanan okuma kapasitesi birimlerini (RCU'lar) etkilememelidir.
masa.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon EMR kümesini kullanın. Verileri Amazon S3'e yedeklemek için bir Apache Hive işi oluşturun.

B. Verileri sürekli yedeklemelerle doğrudan DynamoDB'den Amazon S3'e aktarın. Aç
tablo için belirli bir noktaya kurtarma.

C. Amazon DynamoDB Akışlarını Yapılandırın. Tüketmek için bir AWS Lambda işlevi oluşturun
Verileri bir Amazon S3 klasörüne aktarın ve dışarı aktarın.

D. Verileri veritabanı tablolarından Amazon S3'e aktarmak için bir AWS Lambda işlevi oluşturun
düzenli olarak. Tablo için belirli bir noktaya kurtarmayı açın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Sürekli yedeklemelerle verileri doğrudan DynamoDB'den Amazon S3'e aktarın. Tablo için belirli bir noktaya kurtarmayı açın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 491
Bir çözüm mimarı, kredi kartı verilerini işlemek için eşzamansız bir uygulama tasarlıyor
Bir banka için doğrulama talepleri. Uygulama güvenli olmalı ve her birini işleyebilmelidir.
en az bir kez talep edin.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service'i (Amazon SQS) Ayarlama
olay kaynağı olarak standart kuyruklar. Aşağıdakiler için AWS Key Management Service'i (SSE-KMS) kullanın:
şifreleme. Lambda yürütme rolü için kms:Decrypt iznini ekleyin.

B. AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service'i (Amazon SQS) kullanın
FIFO, olay kaynağı olarak sıraya girer. Şifreleme için SQS tarafından yönetilen şifreleme anahtarlarını (SSE-SQS) kullanın.
Lambda işlevi için şifreleme anahtarı çağırma iznini ekleyin.

C. AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service'i Ayarlama (Amazon
SQS) FIFO, olay kaynağı olarak sıraya girer. AWS KMS anahtarlarını (SSE-KMS) kullanın. Km'yi ekleyin:Şifreyi çöz
Lambda yürütme rolü için izin.

D. AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service'i Ayarlama (Amazon
Olay kaynağı olarak SQS) standart kuyruklar. Şifreleme için AWS KMS anahtarlarını (SSE-KMS) kullanın. Ekle
Lambda işlevi için şifreleme anahtarı çağırma izni.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service (Amazon SQS) standart kuyruklarını olay kaynağı olarak ayarlayın. Şifreleme için AWS Key Management Service'i (SSE-KMS) kullanın. Lambda yürütme rolü için kms:Decrypt iznini ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 492
Bir şirketin geliştirme çalışmaları için birden fazla AWS hesabı vardır. Bazı personel sürekli olarak kullanıyor
Amazon EC2 bulut sunucularının büyük boyutu, şirketin yıllık bütçesini aşmasına neden oluyor
kalkınma hesapları. Şirket, AWS'nin oluşturulmasını merkezi olarak kısıtlamak istiyor
Bu hesaplardaki kaynaklar.
Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. Onaylanmış bir EC2 oluşturma sürecini kullanan AWS Systems Manager şablonları geliştirin. Kullanım
EC2 bulut sunucularını sağlamak için onaylanmış Sistem Yöneticisi şablonları.

B. Hesapları kuruluş birimleri (OU'lar) halinde düzenlemek için AWS Organizasyonlarını kullanın. Tanımla ve
EC2 bulut sunucusu türlerinin kullanımını denetlemek için bir hizmet denetim ilkesi (SCP) ekleyin.

C. EC2 olduğunda AWS Lambda işlevini çağıran bir Amazon EventBridge kuralı yapılandırın.
örneği oluşturulur. İzin verilmeyen EC2 bulut sunucusu türlerini durdurun.

D. Personelin izin verilen EC2 bulut sunucusu türlerini oluşturması için AWS Hizmet Kataloğu ürünlerini ayarlayın.
Personelin EC2 bulut sunucularını yalnızca Hizmet Kataloğu ürünlerini kullanarak dağıtabildiğinden emin olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Hesapları kuruluş birimleri (OU'lar) halinde düzenlemek için AWS Organizasyonlarını kullanın. EC2 bulut sunucusu türlerinin kullanımını denetlemek için bir hizmet denetim ilkesi (SCP) tanımlayın ve ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 493
Bir şirket, müşteri hizmetlerinin kalitesini belirlemek için yapay zekayı (AI) kullanmak istiyor
Aramalar. Şirket şu anda aramaları İngilizce dahil dört farklı dilde yönetiyor.
şirket gelecekte yeni diller sunacak. Şirketin kaynakları yok
Makine öğrenimi (ML) modellerini düzenli olarak sürdürün.
Şirketin müşteri hizmetleri çağrısından yazılı duyarlılık analizi raporları oluşturması gerekiyor
Kayıtlar. Müşteri hizmetleri çağrı kayıt metninin İngilizce'ye çevrilmesi gerekmektedir.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (Üç tanesini seçin.)

A. Ses kayıtlarını İngilizceye çevirmek için Amazon Comprehend'i kullanın.

B. Yazılı duyarlılık analizi raporları oluşturmak için Amazon Lex'i kullanın.

C. Ses kayıtlarını metne dönüştürmek için Amazon Polly'yi kullanın.

D. Herhangi bir dildeki ses kayıtlarını metne dönüştürmek için Amazon Transcribe'ı kullanın.

E. Herhangi bir dildeki metni İngilizceye çevirmek için Amazon Translate'i kullanın.

F. Duygu analizi raporlarını oluşturmak için Amazon Comprehend'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E,`
> - **Önerilen Çözüm:** Herhangi bir dildeki ses kayıtlarını metne dönüştürmek için Amazon Transcribe'ı kullanın. Herhangi bir dildeki metni İngilizceye çevirmek için Amazon Translate'i kullanın. Duygu analizi raporlarını oluşturmak için Amazon Comprehend'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 494
Bir şirket, dahili sistemlerini barındırmak için Amazon EC2 bulut sunucularını kullanıyor. Dağıtımın bir parçası olarak
işleminde bir yönetici, bir EC2 örneğini sonlandırmak için AWS CLI'yi kullanmaya çalışır. Ancak,
yönetici 403 (Erişim Reddedildi) hata mesajı alıyor.
Yönetici, aşağıdaki IAM politikasının eklendiği bir IAM rolünü kullanıyor:
Başarısız talebin nedeni nedir?

C. EC2 bulut sunucusunun Deny deyimine sahip kaynak tabanlı bir politikası vardır.

B. Poliçe beyanında anapara belirtilmemiş.

C. "Eylem" alanı, EC2 örneğini sonlandırmak için gereken eylemleri sağlamaz.

D. EC2 örneğini sonlandırma isteği CIDR bloklarından kaynaklanmıyor
192.0.2.0/24 veya 203.0.113.0/24.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** EC2 örneğini sonlandırma isteği 192.0.2.0/24 veya 203.0.113.0/24 CIDR bloklarından kaynaklanmıyor.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 495
Bir şirket iç denetim yapıyor. Şirket, verilerin bir
Şirketin AWS Lake Formation veri gölüyle ilişkili Amazon S3 klasörü,
hassas müşteri veya çalışan verileri içermemelidir. Şirket kişisel olarak keşfetmek istiyor
pasaport numaraları ve kredi kartı dahil olmak üzere tanımlanabilir bilgiler (PII) veya mali bilgiler
sayılar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Hesapta AWS Audit Manager'ı yapılandırın. Ödeme Kartı Sektörü Veri Güvenliğini Seçin
Denetim için standartlar (PCI DSS).

B. Amazon S3 Envanterini S3 klasöründe yapılandırın Amazon Athena'yı sorgulamak için yapılandırın
envanter.

C. Amazon Macie'yi, yönetilen tanımlayıcıları kullanan bir veri bulma işi çalıştıracak şekilde yapılandırın.
gerekli veri türleri.

D. S3 klasöründe bir rapor çalıştırmak için Amazon S3 Select'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Macie'yi, gerekli veri türleri için yönetilen tanımlayıcıları kullanan bir veri bulma işi çalıştıracak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 496
Bir şirket, uygulamalarını barındırmak için şirket içi sunucuları kullanır. Şirket tükeniyor
depolama kapasitesi. Uygulamalar hem blok depolamayı hem de NFS depolamayı kullanır. şirket
mevcut mimarisini yeniden tasarlamadan yerel önbelleğe almayı destekleyen yüksek performanslı bir çözüme ihtiyaç duyuyor
uygulamalar.
Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
(İki tane seçin.)

A. Amazon S3'ü şirket içi sunuculara dosya sistemi olarak bağlayın.

B. NFS depolamayı değiştirmek için bir AWS Storage Gateway dosya ağ geçidi dağıtın.

C. Şirket içi sunuculara NFS bağlantıları sağlamak için AWS Snowball Edge'i dağıtın.

D. Blok depolamayı değiştirmek için bir AWS Storage Gateway birim ağ geçidi dağıtın.

E. Amazon Elastic File System (Amazon EFS) birimlerini dağıtın ve bunları şirket içine bağlayın
sunucular.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** NFS depolamayı değiştirmek için bir AWS Storage Gateway dosya ağ geçidi dağıtın. Blok depolamayı değiştirmek için bir AWS Storage Gateway birim ağ geçidi dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 497
Bir şirketin Amazon S3'ten büyük miktarda veri okuyup yazan bir hizmeti var
aynı AWS Bölgesindeki paket. Hizmet, Amazon EC2 bulut sunucularına dağıtılır.
bir VPC'nin özel alt ağı. Hizmet, Amazon S3 ile bir NAT ağ geçidi üzerinden iletişim kurar.
genel alt ağ. Ancak şirket veri çıkış maliyetlerini azaltacak bir çözüm istiyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Genel alt ağda özel bir EC2 NAT örneği sağlayın. için rota tablosunu yapılandırın.
Bu örneğin elastik ağ arayüzünü tüm S3 için hedef olarak kullanmak için özel alt ağ
trafik.

B. Özel alt ağda özel bir EC2 NAT örneği sağlayın. için rota tablosunu yapılandırın.
Bu örneğin elastik ağ arayüzünü tüm S3 için hedef olarak kullanacak genel alt ağ
trafik.

C. Bir VPC ağ geçidi uç noktası sağlayın. Özel alt ağın yönlendirme tablosunu kullanacak şekilde yapılandırın.
tüm S3 trafiğinin rotası olarak ağ geçidi uç noktası.

D. İkinci bir NAT ağ geçidi sağlayın. Özel alt ağın bunu kullanması için yönlendirme tablosunu yapılandırın
Tüm S3 trafiğinin hedefi olarak NAT ağ geçidi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir VPC ağ geçidi uç noktası sağlayın. Özel alt ağın rota tablosunu, ağ geçidi uç noktasını tüm S3 trafiği için rota olarak kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 498
Bir şirket, yüksek çözünürlüklü resimleri bir S3 klasöründe depolamak için Amazon S3'ü kullanıyor. En aza indirmek için
uygulama değişiklikleri, şirket resimleri bir S3 nesnesinin en son sürümü olarak saklar.
Şirketin resimlerin yalnızca en yeni iki versiyonunu saklaması gerekiyor.
Şirket maliyetleri düşürmek istiyor. Şirket, S3 kovasını büyük bir parça olarak tanımladı
masraf.
Hangi çözüm EN AZ operasyonel ek yük ile S3 maliyetlerini azaltacaktır?

A. Süresi dolmuş nesne sürümlerini silmek ve en yeni iki sürümü korumak için S3 Yaşam Döngüsü'nü kullanın.

B. Eski sürümleri kontrol etmek ve en yeni ikisi dışında tümünü silmek için bir AWS Lambda işlevini kullanın
versiyonları.

C. Güncel olmayan nesne sürümlerini silmek ve yalnızca en çok ikisini korumak için S3 Toplu İşlemlerini kullanın.
son sürümler.

D. S3 grubundaki sürüm oluşturmayı devre dışı bırakın ve en yeni iki sürümü koruyun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Süresi dolmuş nesne sürümlerini silmek ve en yeni iki sürümü korumak için S3 Lifecycle'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 499
Bir şirketin 1 Gbps AWS Direct Connect bağlantısının maliyetini en aza indirmesi gerekiyor.
Şirketin ortalama bağlantı kullanımı %10'un altındadır. Bir çözüm mimarının yapması gerekenler
Güvenlikten ödün vermeden maliyeti azaltacak bir çözüm öneriyoruz.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Yeni bir 1 Gbps Doğrudan Bağlantı bağlantısı kurun. Bağlantıyı başka bir AWS ile paylaşın
hesap.

B. AWS Management Console'da yeni bir 200 Mbps Direct Connect bağlantısı kurun.

C. 1 Gbps bağlantı siparişi vermek için bir AWS Direct Connect Çözüm Ortağıyla iletişime geçin. Bağlantıyı paylaşın
başka bir AWS hesabıyla.

D. Mevcut bir ağ için 200 Mb/sn barındırılan bağlantı sipariş etmek için bir AWS Direct Connect Çözüm Ortağıyla iletişime geçin.
AWS hesabı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut bir AWS hesabı için 200 Mb/sn barındırılan bağlantı sipariş etmek için bir AWS Direct Connect Çözüm Ortağıyla iletişime geçin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
