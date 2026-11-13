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

Question 437
A company operates an ecommerce website on Amazon EC2 instances behind an Application
Load Balancer (ALB) in an Auto Scaling group. The site is experiencing performance issues
related to a high request rate from illegitimate external systems with changing IP addresses. The
security team is worried about potential DDoS attacks against the website. The company must
block the illegitimate incoming requests in a way that has a minimal impact on legitimate users.
What should a solutions architect recommend?

A. Deploy Amazon Inspector and associate it with the ALB.

B. Deploy AWS WAF, associate it with the ALB, and configure a rate-limiting rule.

C. Deploy rules to the network ACLs associated with the ALB to block the incomingtraffic.

D. Deploy Amazon GuardDuty and enable rate-limiting protection when configuring GuardDuty.

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

Question 459
A company uses AWS Organizations to run workloads within multiple AWS accounts. A tagging
policy adds department tags to AWS resources when the company creates tags.
An accounting team needs to determine spending on Amazon EC2 consumption. The
accounting team must determine which departments are responsible for the costs regardless
ofAWS account. The accounting team has access to AWS Cost Explorer for all AWS accounts
within the organization and needs to access all reports from Cost Explorer.
Which solution meets these requirements in the MOST operationally efficient way?

A. From the Organizations management account billing console, activate a user-defined cost
allocation tag named department. Create one cost report in Cost Explorer grouping by tag name,
and filter by EC2.

B. From the Organizations management account billing console, activate an AWS-defined cost
allocation tag named department. Create one cost report in Cost Explorer grouping by tag name,
and filter by EC2.

C. From the Organizations member account billing console, activate a user-defined cost allocation
tag named department. Create one cost report in Cost Explorer grouping by the tag name, and
filter by EC2.

D. From the Organizations member account billing console, activate an AWS-defined cost
allocation tag named department. Create one cost report in Cost Explorer grouping by tag name,
and filter by EC2.

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

Question 464
A company hosts an online shopping application that stores all orders in an Amazon RDS for
PostgreSQL Single-AZ DB instance. Management wants to eliminate single points of failure and
has asked a solutions architect to recommend an approach to minimize database downtime
without requiring any changes to the application code.
Which solution meets these requirements?

A. Convert the existing database instance to a Multi-AZ deployment by modifying the database
instance and specifying the Multi-AZ option.

B. Create a new RDS Multi-AZ deployment. Take a snapshot of the current RDS instance and
restore the new Multi-AZ deployment with the snapshot.

C. Create a read-only replica of the PostgreSQL database in another Availability Zone. Use
Amazon Route 53 weighted record sets to distribute requests across the databases.

D. Place the RDS for PostgreSQL database in an Amazon EC2 Auto Scaling group with a
minimum group size of two. Use Amazon Route 53 weighted record sets to distribute requests
across instances.

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

Question 467
A company uses AWS Organizations. A member account has purchased a Compute Savings
Plan. Because of changes in the workloads inside the member account, the account no longer
receives the full benefit of the Compute Savings Plan commitment. The company uses less than
50% of its purchased compute power.

A. Turn on discount sharing from the Billing Preferences section of the account console in the
member account that purchased the Compute Savings Plan.

B. Turn on discount sharing from the Billing Preferences section of the account console in the
company's Organizations management account.

C. Migrate additional compute workloads from another AWS account to the account that has the
Compute Savings Plan.

D. Sell the excess Savings Plan commitment in the Reserved Instance Marketplace.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirketin Kuruluş yönetimi hesabındaki hesap konsolunun Faturalandırma Tercihleri ​​bölümünden indirim paylaşımını açın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 468
A company is developing a microservices application that will provide a search catalog for
customers. The company must use REST APIs to present the frontend of the application to
users. The REST APIs must access the backend services that the company hosts in containers
in private VPC subnets.
Which solution will meet these requirements?

A. Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon
Elastic Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API
Gateway to access Amazon ECS.

B. Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic
Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway
to access Amazon ECS.

C. Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon
Elastic Container Service (Amazon ECS) in a private subnet. Create a security group for API
Gateway to access Amazon ECS.

D. Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic
Container Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to
access Amazon ECS.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon API Gateway'i kullanarak bir REST API tasarlayın. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) özel bir alt ağda barındırın. Amazon ECS'ye erişmek için API Gateway'e yönelik özel bir VPC bağlantısı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Question 469
A company stores raw collected data in an Amazon S3 bucket. The data is used for several
types of analytics on behalf of the company's customers. The type of analytics requested
determines the access pattern on the S3 objects.
The company cannot predict or control the access pattern. The company wants to reduce its S3
costs.
Which solution will meet these requirements?

A. Use S3 replication to transition infrequently accessed objects to S3 Standard-Infrequent Access
(S3 Standard-IA)

B. Use S3 Lifecycle rules to transition objects from S3 Standard to Standard-Infrequent Access
(S3 Standard-IA)

C. Use S3 Lifecycle rules to transition objects from S3 Standard to S3 Intelligent-Tiering

D. Use S3 Inventory to identify and transition objects that have not been accessed from S3
Standard to S3 Intelligent-Tiering

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Nesneleri S3 Standard'tan S3 Intelligent-Tiering'e geçirmek için S3 Yaşam Döngüsü kurallarını kullanın
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Question 470
A company has applications hosted on Amazon EC2 instances with IPv6 addresses. The
applications must initiate communications with other external applications using the internet.
However the company’s security policy states that any external service cannot initiate a
connection to the EC2 instances.
What should a solutions architect recommend to resolve this issue?

A. Create a NAT gateway and make it the destination of the subnet's route table

B. Create an internet gateway and make it the destination of the subnet's route table

C. Create a virtual private gateway and make it the destination of the subnet's route table

D. Create an egress-only internet gateway and make it the destination of the subnet's route table

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yalnızca çıkışa yönelik bir internet ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 471
A company is creating an application that runs on containers in a VPC. The application stores
and accesses data in an Amazon S3 bucket. During the development phase, the application will
store and access 1 TB of data in Amazon S3 each day. The company wants to minimize costs
and wants to prevent traffic from traversing the internet whenever possible.
Which solution will meet these requirements?

A. Enable S3 Intelligent-Tiering for the S3 bucket

B. Enable S3 Transfer Acceleration for the S3 bucket

C. Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all route tables in
the VPC

D. Create an interface endpoint for Amazon S3 in the VPC. Associate this endpoint with all route
tables in the VPC

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

Question 472
A company has a mobile chat application with a data store based in Amazon DynamoDB. Users
would like new messages to be read with as little latency as possible. A solutions architect needs
to design an optimal solution that requires minimal application changes.
Which method should the solutions architect select?

A. Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the
code to use the DAX endpoint.

B. Add DynamoDB read replicas to handle the increased read load. Update the application to
point to the read endpoint for the read replicas.

C. Double the number of read capacity units for the new messages table in DynamoDB. Continue
to use the existing DynamoDB endpoint.

D. Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to
point to the Redis cache endpoint instead of DynamoDB.

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

Question 473
A company hosts a website on Amazon EC2 instances behind an Application Load Balancer
(ALB). The website serves static content. Website traffic is increasing, and the company is
concerned about a potential increase in cost.

A. Create an Amazon CloudFront distribution to cache state files at edge locations

B. Create an Amazon ElastiCache cluster. Connect the ALB to the ElastiCache cluster to serve
cached files

C. Create an AWS WAF web ACL and associate it with the ALB. Add a rule to the web ACL to
cache static files

D. Create a second ALB in an alternative AWS Region. Route user traffic to the closest Region to
minimize data transfer costs

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

Question 474
A company has multiple VPCs across AWS Regions to support and run workloads that are
isolated from workloads in other Regions. Because of a recent application launch requirement,
the company’s VPCs must communicate with all other VPCs across all Regions.
Which solution will meet these requirements with the LEAST amount of administrative effort?

A. Use VPC peering to manage VPC communication in a single Region. Use VPC peering across
Regions to manage VPC communications.

B. Use AWS Direct Connect gateways across all Regions to connect VPCs across regions and
manage VPC communications.

C. Use AWS Transit Gateway to manage VPC communication in a single Region and Transit
Gateway peering across Regions to manage VPC communications.

D. Use AWS PrivateLink across all Regions to connect VPCs across Regions and manage VPC
communications

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

Question 475
A company is designing a containerized application that will use Amazon Elastic Container
Service (Amazon ECS). The application needs to access a shared file system that is highly
durable and can recover data to another AWS Region with a recovery point objective (RPO) of 8
hours. The file system needs to provide a mount target m each Availability Zone within a Region.
A solutions architect wants to use AWS Backup to manage the replication to another Region.
Which solution will meet these requirements?

A. Amazon FSx for Windows File Server with a Multi-AZ deployment

B. Amazon FSx for NetApp ONTAP with a Multi-AZ deployment

C. Amazon Elastic File System (Amazon EFS) with the Standard storage class

D. Amazon FSx for OpenZFS

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

Question 476
A company is expecting rapid growth in the near future. A solutions architect needs to configure
existing users and grant permissions to new users on AWS. The solutions architect has decided
to create IAM groups. The solutions architect will add the new users to IAM groups based on
department.
Which additional action is the MOST secure way to grant permissions to the new users?

A. Apply service control policies (SCPs) to manage access permissions

B. Create IAM roles that have least privilege permission. Attach the roles to the IAM groups

C. Create an IAM policy that grants least privilege permission. Attach the policy to the IAM groups

D. Create IAM roles. Associate the roles with a permissions boundary that defines the maximum
permissions

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** En az ayrıcalık izni veren bir IAM politikası oluşturun. Politikayı IAM gruplarına ekleyin
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 477
A group requires permissions to list an Amazon S3 bucket and delete objects from that bucket.
An administrator has created the following IAM policy to provide access to the bucket and
applied that policy to the group. The group is not able to delete objects in the bucket. The
company follows least-privilege access rules.
Which statement should a solutions architect add to the policy to correct bucket access?

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

Question 478
A law firm needs to share information with the public. The information includes hundreds of files
that must be publicly readable. Modifications or deletions of the files by anyone before a
designated future date are prohibited.
Which solution will meet these requirements in the MOST secure way?

A. Upload all files to an Amazon S3 bucket that is configured for static website hosting. Grant
read-only IAM permissions to any AWS principals that access the S3 bucket until the designated
date.

B. Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a
retention period in accordance with the designated date. Configure the S3 bucket for static website
hosting. Set an S3 bucket policy to allow read-only access to the objects.

C. Create a new Amazon S3 bucket with S3 Versioning enabled. Configure an event trigger to run
an AWS Lambda function in case of object modification or deletion. Configure the Lambda
function to replace the objects with the original versions from a private S3 bucket.

D. Upload all files to an Amazon S3 bucket that is configured for static website hosting. Select the
folder that contains the files. Use S3 Object Lock with a retention period in accordance with the
designated date. Grant read-only IAM permissions to any AWS principals that access the S3
bucket.

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

Question 479
A company is making a prototype of the infrastructure for its new website by manually
provisioning the necessary infrastructure. This infrastructure includes an Auto Scaling group, an
Application Load Balancer and an Amazon RDS database. After the configuration has been
thoroughly validated, the company wants the capability to immediately deploy the infrastructure
for development and production use in two Availability Zones in an automated fashion.
What should a solutions architect recommend to meet these requirements?

A. Use AWS Systems Manager to replicate and provision the prototype infrastructure in two
Availability Zones

B. Define the infrastructure as a template by using the prototype infrastructure as a guide. Deploy
the infrastructure with AWS CloudFormation.

C. Use AWS Config to record the inventory of resources that are used in the prototype
infrastructure. Use AWS Config to deploy the prototype infrastructure into two Availability Zones.

D. Use AWS Elastic Beanstalk and configure it to use an automated reference to the prototype
infrastructure to automatically deploy new environments in two Availability Zones.

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

Question 480
A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object
storage. The chief information security officer has directed that no application traffic between the
two services should traverse the public internet.
Which capability should the solutions architect use to meet the compliance requirements?

A. AWS Key Management Service (AWS KMS)

B. VPC endpoint

C. Private subnet

D. Virtual private gateway

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** VPC uç noktası
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Question 481
A company hosts a three-tier web application in the AWS Cloud. A Multi-AZAmazon RDS for
MySQL server forms the database layer Amazon ElastiCache forms the cache layer. The
company wants a caching strategy that adds or updates data in the cache when a customer
adds an item to the database. The data in the cache must always match the data in the
database.
Which solution will meet these requirements?

A. Implement the lazy loading caching strategy

B. Implement the write-through caching strategy

C. Implement the adding TTL caching strategy

D. Implement the AWS AppConfig caching strategy

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İçe yazma önbelleğe alma stratejisini uygulama
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Question 482
A company wants to migrate 100 GB of historical data from an on-premises location to an
Amazon S3 bucket. The company has a 100 megabits per second (Mbps) internet connection on
premises. The company needs to encrypt the data in transit to the S3 bucket. The company will
store new data directly in Amazon S3.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use the s3 sync command in the AWS CLI to move the data directly to an S3 bucket

B. Use AWS DataSync to migrate the data from the on-premises location to an S3 bucket

C. Use AWS Snowball to move the data to an S3 bucket

D. Set up an IPsec VPN from the on-premises location to AWS. Use the s3 cp command in the
AWS CLI to move the data directly to an S3 bucket

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri şirket içi konumdan bir S3 klasörüne taşımak için AWS DataSync'i kullanın
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Question 483
A company containerized a Windows job that runs on .NET 6 Framework under a Windows
container. The company wants to run this job in the AWS Cloud. The job runs every 10 minutes.
The job’s runtime varies between 1 minute and 3 minutes.
Which solution will meet these requirements MOST cost-effectively?

A. Create an AWS Lambda function based on the container image of the job. Configure Amazon
EventBridge to invoke the function every 10 minutes.

B. Use AWS Batch to create a job that uses AWS Fargate resources. Configure the job scheduling
to run every 10 minutes.

C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a
scheduled task based on the container image of the job to run every 10 minutes.

D. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a
standalone task based on the container image of the job. Use Windows task scheduler to run the
job every10 minutes.

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

Question 484
A company wants to move from many standalone AWS accounts to a consolidated,
multi-account architecture. The company plans to create many new AWS accounts for different
business units. The company needs to authenticate access to these AWS accounts by using a
centralized corporate directory service.
Which combination of actions should a solutions architect recommend to meet these
requirements? (Choose two.)

A. Create a new organization in AWS Organizations with all features turned on. Create the new
AWS accounts in the organization.

B. Set up an Amazon Cognito identity pool. Configure AWS IAM Identity Center (AWS Single
Sign-On) to accept Amazon Cognito authentication.

C. Configure a service control policy (SCP) to manage the AWS accounts. Add AWS IAM Identity
Center (AWS Single Sign-On) to AWS Directory Service.

D. Create a new organization in AWS Organizations. Configure the organization's authentication
mechanism to use AWS Directory Service directly.

E. Set up AWS IAM Identity Center (AWS Single Sign-On) in the organization. Configure IAM
Identity Center, and integrate it with the company's corporate directory service.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** AWS Organizasyonlarında tüm özelliklerin açık olduğu yeni bir kuruluş oluşturun. Kuruluşta yeni AWS hesaplarını oluşturun. Kuruluşta AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kurun. IAM Identity Center'ı yapılandırın ve şirketin kurumsal dizin hizmetiyle entegre edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 485
A company is looking for a solution that can store video archives in AWS from old news footage.
The company needs to minimize costs and will rarely need to restore these files. When the files
are needed, they must be available in a maximum of five minutes.
What is the MOST cost-effective solution?

A. Store the video archives in Amazon S3 Glacier and use Expedited retrievals.

B. Store the video archives in Amazon S3 Glacier and use Standard retrievals.

C. Store the video archives in Amazon S3 Standard-Infrequent Access (S3 Standard-IA).

D. Store the video archives in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Video arşivlerini Amazon S3 Glacier'da saklayın ve Hızlandırılmış alımları kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Question 486
A company is building a three-tier application on AWS. The presentation tier will serve a static
website The logic tier is a containerized application. This application will store data in a relational
database. The company wants to simplify deployment and to reduce operational costs.
Which solution will meet these requirements?

A. Use Amazon S3 to host static content. Use Amazon Elastic Container Service (Amazon ECS)
with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.

B. Use Amazon CloudFront to host static content. Use Amazon Elastic Container Service
(Amazon ECS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for
the database.

C. Use Amazon S3 to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS)
with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.

D. Use Amazon EC2 Reserved Instances to host static content. Use Amazon Elastic Kubernetes
Service (Amazon EKS) with Amazon EC2 for compute power. Use a managed Amazon RDS
cluster for the database.

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

Question 487
A company seeks a storage solution for its application. The solution must be highly available and
scalable. The solution also must function as a file system be mountable by multiple Linux
instances in AWS and on premises through native protocols, and have no minimum size
requirements. The company has set up a Site-to-Site VPN for access from its on-premises
network to its VPC.
Which storage solution meets these requirements?

A. Amazon FSx Multi-AZ deployments

B. Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes

C. Amazon Elastic File System (Amazon EFS) with multiple mount targets

D. Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access
points

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

Question 488
A 4-year-old media company is using the AWS Organizations all features feature set to organize
its AWS accounts. According to the company's finance team, the billing information on the
member accounts must not be accessible to anyone, including the root user of the member
accounts.
Which solution will meet these requirements?

A. Add all finance team users to an IAM group. Attach an AWS managed policy named Billing to
the group.

B. Attach an identity-based policy to deny access to the billing information to all users, including
the root user.

C. Create a service control policy (SCP) to deny access to the billing information. Attach the SCP
to the root organizational unit (OU).

D. Convert from the Organizations all features feature set to the Organizations consolidated billing
feature set.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Fatura bilgilerine erişimi reddetmek için bir hizmet kontrol ilkesi (SCP) oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 489
An ecommerce company runs an application in the AWS Cloud that is integrated with an
on-premises warehouse solution. The company uses Amazon Simple Notification Service
(Amazon SNS) to send order messages to an on-premises HTTPS endpoint so the warehouse
application can process the orders. The local data center team has detected that some of the
order messages were not received.
A solutions architect needs to retain messages that are not delivered and analyze the messages
for up to 14 days.
Which solution will meet these requirements with the LEAST development effort?

A. Configure an Amazon SNS dead letter queue that has an Amazon Kinesis Data Stream target
with a retention period of 14 days.

B. Add an Amazon Simple Queue Service (Amazon SQS) queue with a retention period of 14
days between the application and Amazon SNS.

C. Configure an Amazon SNS dead letter queue that has an Amazon Simple Queue Service
(Amazon SQS) target with a retention period of 14 days.

D. Configure an Amazon SNS dead letter queue that has an Amazon DynamoDB target with a
TTL attribute set for a retention period of 14 days.

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

Question 490
A gaming company uses Amazon DynamoDB to store user information such as geographic
location, player data, and leaderboards. The company needs to configure continuous backups to
an Amazon S3 bucket with a minimal amount of coding. The backups must not affect availability
of the application and must not affect the read capacity units (RCUs) that are defined for the
table.
Which solution meets these requirements?

A. Use an Amazon EMR cluster. Create an Apache Hive job to back up the data to Amazon S3.

B. Export the data directly from DynamoDB to Amazon S3 with continuous backups. Turn on
point-in-time recovery for the table.

C. Configure Amazon DynamoDB Streams. Create an AWS Lambda function to consume the
stream and export the data to an Amazon S3 bucket.

D. Create an AWS Lambda function to export the data from the database tables to Amazon S3 on
a regular basis. Turn on point-in-time recovery for the table.

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

Question 491
A solutions architect is designing an asynchronous application to process credit card data
validation requests for a bank. The application must be secure and be able to process each
request at least once.
Which solution will meet these requirements MOST cost-effectively?

A. Use AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS)
standard queues as the event source. Use AWS Key Management Service (SSE-KMS) for
encryption. Add the kms:Decrypt permission for the Lambda execution role.

B. Use AWS Lambda event source mapping. Use Amazon Simple Queue Service (Amazon SQS)
FIFO queues as the event source. Use SQS managed encryption keys (SSE-SQS) for encryption.
Add the encryption key invocation permission for the Lambda function.

C. Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon
SQS) FIFO queues as the event source. Use AWS KMS keys (SSE-KMS). Add the kms:Decrypt
permission for the Lambda execution role.

D. Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon
SQS) standard queues as the event source. Use AWS KMS keys (SSE-KMS) for encryption. Add
the encryption key invocation permission for the Lambda function.

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

Question 492
A company has multiple AWS accounts for development work. Some staff consistently use
oversized Amazon EC2 instances, which causes the company to exceed the yearly budget for
the development accounts. The company wants to centrally restrict the creation of AWS
resources in these accounts.
Which solution will meet these requirements with the LEAST development effort?

A. Develop AWS Systems Manager templates that use an approved EC2 creation process. Use
the approved Systems Manager templates to provision EC2 instances.

B. Use AWS Organizations to organize the accounts into organizational units (OUs). Define and
attach a service control policy (SCP) to control the usage of EC2 instance types.

C. Configure an Amazon EventBridge rule that invokes an AWS Lambda function when an EC2
instance is created. Stop disallowed EC2 instance types.

D. Set up AWS Service Catalog products for the staff to create the allowed EC2 instance types.
Ensure that staff can deploy EC2 instances only by using the Service Catalog products.

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

Question 493
A company wants to use artificial intelligence (AI) to determine the quality of its customer service
calls. The company currently manages calls in four different languages, including English. The
company will offer new languages in the future. The company does not have the resources to
regularly maintain machine learning (ML) models.
The company needs to create written sentiment analysis reports from the customer service call
recordings. The customer service call recording text must be translated into English.
Which combination of steps will meet these requirements? (Choose three.)

A. Use Amazon Comprehend to translate the audio recordings into English.

B. Use Amazon Lex to create the written sentiment analysis reports.

C. Use Amazon Polly to convert the audio recordings into text.

D. Use Amazon Transcribe to convert the audio recordings in any language into text.

E. Use Amazon Translate to translate text in any language to English.

F. Use Amazon Comprehend to create the sentiment analysis reports.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E,`
> - **Önerilen Çözüm:** Herhangi bir dildeki ses kayıtlarını metne dönüştürmek için Amazon Transcribe'ı kullanın. Herhangi bir dildeki metni İngilizceye çevirmek için Amazon Translate'i kullanın. Duygu analizi raporlarını oluşturmak için Amazon Comprehend'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 494
A company uses Amazon EC2 instances to host its internal systems. As part of a deployment
operation, an administrator tries to use the AWS CLI to terminate an EC2 instance. However, the
administrator receives a 403 (Access Denied) error message.
The administrator is using an IAM role that has the following IAM policy attached:
What is the cause of the unsuccessful request?

A. The EC2 instance has a resource-based policy with a Deny statement.

B. The principal has not been specified in the policy statement.

C. The "Action" field does not grant the actions that are required to terminate the EC2 instance.

D. The request to terminate the EC2 instance does not originate from the CIDR blocks
192.0.2.0/24 or 203.0.113.0/24.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** EC2 örneğini sonlandırma isteği 192.0.2.0/24 veya 203.0.113.0/24 CIDR bloklarından kaynaklanmıyor.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 495
A company is conducting an internal audit. The company wants to ensure that the data in an
Amazon S3 bucket that is associated with the company’s AWS Lake Formation data lake does
not contain sensitive customer or employee data. The company wants to discover personally
identifiable information (PII) or financial information, including passport numbers and credit card
numbers.
Which solution will meet these requirements?

A. Configure AWS Audit Manager on the account. Select the Payment Card Industry Data Security
Standards (PCI DSS) for auditing.

B. Configure Amazon S3 Inventory on the S3 bucket Configure Amazon Athena to query the
inventory.

C. Configure Amazon Macie to run a data discovery job that uses managed identifiers for the
required data types.

D. Use Amazon S3 Select to run a report across the S3 bucket.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Macie'yi, gerekli veri türleri için yönetilen tanımlayıcıları kullanan bir veri bulma işi çalıştıracak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Question 496
A company uses on-premises servers to host its applications. The company is running out of
storage capacity. The applications use both block storage and NFS storage. The company
needs a high-performing solution that supports local caching without re-architecting its existing
applications.
Which combination of actions should a solutions architect take to meet these requirements?
(Choose two.)

A. Mount Amazon S3 as a file system to the on-premises servers.

B. Deploy an AWS Storage Gateway file gateway to replace NFS storage.

C. Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.

D. Deploy an AWS Storage Gateway volume gateway to replace the block storage.

E. Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises
servers.

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

Question 497
A company has a service that reads and writes large amounts of data from an Amazon S3
bucket in the same AWS Region. The service is deployed on Amazon EC2 instances within the
private subnet of a VPC. The service communicates with Amazon S3 over a NAT gateway in the
public subnet. However, the company wants a solution that will reduce the data output costs.
Which solution will meet these requirements MOST cost-effectively?

A. Provision a dedicated EC2 NAT instance in the public subnet. Configure the route table for the
private subnet to use the elastic network interface of this instance as the destination for all S3
traffic.

B. Provision a dedicated EC2 NAT instance in the private subnet. Configure the route table for the
public subnet to use the elastic network interface of this instance as the destination for all S3
traffic.

C. Provision a VPC gateway endpoint. Configure the route table for the private subnet to use the
gateway endpoint as the route for all S3 traffic.

D. Provision a second NAT gateway. Configure the route table for the private subnet to use this
NAT gateway as the destination for all S3 traffic.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir VPC ağ geçidi uç noktası sağlayın. Özel alt ağın rota tablosunu, ağ geçidi uç noktasını tüm S3 trafiği için rota olarak kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Question 498
A company uses Amazon S3 to store high-resolution pictures in an S3 bucket. To minimize
application changes, the company stores the pictures as the latest version of an S3 object. The
company needs to retain only the two most recent versions of the pictures.
The company wants to reduce costs. The company has identified the S3 bucket as a large
expense.
Which solution will reduce the S3 costs with the LEAST operational overhead?

A. Use S3 Lifecycle to delete expired object versions and retain the two most recent versions.

B. Use an AWS Lambda function to check for older versions and delete all but the two most recent
versions.

C. Use S3 Batch Operations to delete noncurrent object versions and retain only the two most
recent versions.

D. Deactivate versioning on the S3 bucket and retain the two most recent versions.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Süresi dolmuş nesne sürümlerini silmek ve en yeni iki sürümü korumak için S3 Lifecycle'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 499
A company needs to minimize the cost of its 1 Gbps AWS Direct Connect connection. The
company's average connection utilization is less than 10%. A solutions architect must
recommend a solution that will reduce the cost without compromising security.
Which solution will meet these requirements?

A. Set up a new 1 Gbps Direct Connect connection. Share the connection with another AWS
account.

B. Set up a new 200 Mbps Direct Connect connection in the AWS Management Console.

C. Contact an AWS Direct Connect Partner to order a 1 Gbps connection. Share the connection
with another AWS account.

D. Contact an AWS Direct Connect Partner to order a 200 Mbps hosted connection for an existing
AWS account.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut bir AWS hesabı için 200 Mb/sn barındırılan bağlantı sipariş etmek için bir AWS Direct Connect Çözüm Ortağıyla iletişime geçin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
