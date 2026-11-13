# AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları - Bölüm 07

> **Soru Aralığı:** 601 - 684 / Toplam: 684

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #601

Bir şirket, kritik veritabanını Amazon RDS for PostgreSQL veritabanı bulut sunucusunda çalıştırıyor. Şirket, minimum kesinti ve veri kaybıyla Amazon Aurora PostgreSQL'e geçmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Yeni bir Aurora PostgreSQL veritabanı kümesini doldurmak için RDS for PostgreSQL veritabanı örneğinin veritabanı anlık görüntüsünü oluşturun.

B. PostgreSQL veritabanı bulut sunucusu için RDS'nin bir Aurora okuma kopyasını oluşturun. Aurora okuma çoğaltmasını yeni bir Aurora PostgreSQL veritabanı kümesine yükseltin.

C. Veritabanını bir Aurora PostgreSQL DB kümesine taşımak için Amazon S3'ten veri içe aktarmayı kullanın.

D. RDS for PostgreSQL veritabanını yedeklemek için pg_dump yardımcı programını kullanın. Yedeği yeni bir Aurora PostgreSQL veritabanı kümesine geri yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** PostgreSQL veritabanı bulut sunucusu için RDS'nin Aurora okuma kopyasını oluşturun. Aurora okuma çoğaltmasını yeni bir Aurora PostgreSQL veritabanı kümesine yükseltin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #602

Bir şirketin altyapısı, Amazon Elastic Block Store (Amazon EBS) depolama alanını kullanan yüzlerce Amazon EC2 bulut sunucusundan oluşur. Bir çözüm mimarı, bir felaketten sonra her EC2 bulut sunucusunun kurtarılabileceğinden emin olmalıdır. Çözüm mimarı bu gereksinimi EN AZ çabayla karşılamak için ne yapmalıdır?

A. Her EC2 bulut sunucusuna bağlı EBS depolama alanının anlık görüntüsünü alın. EBS depolama alanından yeni EC2 bulut sunucularını başlatmak için bir AWS CloudFormation şablonu oluşturun.

B. Her EC2 bulut sunucusuna bağlı EBS depolama alanının anlık görüntüsünü alın. Ortamı EC2 şablonunu temel alarak ayarlamak ve EBS depolama alanını eklemek için AWS Elastic Beanstalk'ı kullanın.

C. EC2 bulut sunucusu grubunun tamamı için bir yedekleme planı oluşturmak üzere AWS Backup'ı kullanın. Birden fazla EC2 bulut sunucusunun geri yükleme sürecini hızlandırmak için AWS Backup API'yi veya AWS CLI'yi kullanın.

D. Her EC2 bulut sunucusuna bağlı EBS depolama alanının anlık görüntüsünü almak ve Amazon Makine Görüntülerini (AMI'ler) kopyalamak için bir AWS Lambda işlevi oluşturun. Kopyalanan AMI'lerle geri yükleme gerçekleştirmek için başka bir Lambda işlevi oluşturun ve EBS depolama alanını ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucularının tamamına yönelik bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. Birden fazla EC2 bulut sunucusunun geri yükleme sürecini hızlandırmak için AWS Backup API'yi veya AWS CLI'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #603

Bir şirket yakın zamanda AWS Cloud'a geçiş yaptı. Şirket, yarı yapılandırılmış bir veri kümesinin büyük ölçekli paralel isteğe bağlı işlenmesi için sunucusuz bir çözüm istiyor. Veriler, Amazon S3'te depolanan günlüklerden, medya dosyalarından, satış işlemlerinden ve IoT sensör verilerinden oluşur. Şirket, çözümün veri kümesindeki binlerce öğeyi paralel olarak işlemesini istiyor. Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Verileri paralel olarak işlemek için Satır İçi modda AWS Step Functions Harita durumunu kullanın.

B. Verileri paralel olarak işlemek için Dağıtılmış modda AWS Step Functions Harita durumunu kullanın.

C. Verileri paralel olarak işlemek için AWS Glue'yu kullanın.

D. Verileri paralel olarak işlemek için çeşitli AWS Lambda işlevlerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri paralel olarak işlemek için Dağıtılmış modda AWS Step Functions Harita durumunu kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Step Functions Dağıtık İş Akışı Düzenleme:** Mikroservisleri, Lambda fonksiyonlarını ve uzun süreli toplu işleri otomatik yeniden deneme ve durum takibi ile koordine eden görsel iş akışı servisidir.

---

---

Soru #604

Bir şirket 6 haftada 10 PB veriyi Amazon S3'e taşıyacak. Mevcut veri merkezinin internete 500 Mbps uplink'i var. Diğer şirket içi uygulamalar yukarı bağlantıyı paylaşır. Şirket, bu tek seferlik geçiş görevi için internet bant genişliğinin %80'ini kullanabilir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Verileri Amazon S3'e taşımak ve verileri otomatik olarak doğrulamak için AWS DataSync'i yapılandırın.

B. Verileri doğrudan Amazon S3'e aktarmak için rsync'i kullanın.

C. Verileri doğrudan Amazon S3'e göndermek için AWS CLI'yi ve birden fazla kopyalama işlemini kullanın.

D. Birden fazla AWS Snowball cihazı sipariş edin. Verileri cihazlara kopyalayın. Verileri Amazon S3'e kopyalamak için cihazları AWS'ye gönderin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Birden fazla AWS Snowball cihazı sipariş edin. Verileri cihazlara kopyalayın. Verileri Amazon S3'e kopyalamak için cihazları AWS'ye gönderin.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #605

Bir şirketin birkaç şirket içi Internet Küçük Bilgisayar Sistemleri Arayüzü (ISCSI) ağ depolama sunucusu vardır. Şirket, AWS Cloud'a geçerek bu sunucuların sayısını azaltmak istiyor. Bir çözüm mimarı, sık kullanılan verilere düşük gecikme süreli erişim sağlamalı ve minimum sayıda altyapı değişikliği ile şirket içi sunuculara olan bağımlılığı azaltmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 Dosya Ağ Geçidini dağıtın.

B. Yedeklemelerle birlikte Amazon Elastic Block Store (Amazon EBS) depolama alanını Amazon S3'e dağıtın.

C. Depolanan birimlerle yapılandırılmış bir AWS Storage Gateway birim ağ geçidini dağıtın.

D. Önbelleğe alınmış birimlerle yapılandırılmış bir AWS Storage Gateway birim ağ geçidini dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Önbelleğe alınmış birimlerle yapılandırılmış bir AWS Storage Gateway birim ağ geçidini dağıtın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #606

Bir çözüm mimarı, iş kullanıcılarının nesneleri Amazon S3'e yüklemesine olanak tanıyacak bir uygulama tasarlıyor. Çözümün nesne dayanıklılığını en üst düzeye çıkarması gerekiyor. Nesneler ayrıca herhangi bir zamanda ve herhangi bir süre boyunca hazır bulunmalıdır. Kullanıcılar, nesneler yüklendikten sonraki ilk 30 gün içinde nesnelere sıklıkla erişecektir, ancak kullanıcıların 30 günden daha eski nesnelere erişme olasılığı çok daha düşüktür. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Nesneleri 30 gün sonra S3 Glacier'a geçirmek için tüm nesneleri S3 Yaşam Döngüsü kuralıyla S3 Standard'ta saklayın.

B. Nesneleri 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için tüm nesneleri bir S3 Yaşam Döngüsü kuralıyla S3 Standart'ta depolayın.

C. Nesneleri 30 gün sonra S3 Tek Bölge-Seyrek Erişime (S3 Tek Bölge-IA) geçirmek için tüm nesneleri bir S3 Yaşam Döngüsü kuralıyla S3 Standart'ta depolayın.

D. Nesneleri 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için tüm nesneleri S3 Yaşam Döngüsü kuralıyla S3 Akıllı Katmanlama'da depolayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Nesneleri 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için tüm nesneleri bir S3 Yaşam Döngüsü kuralıyla S3 Standart'ta depolayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #607

Bir şirket, iki katmanlı bir uygulamayı şirket içi veri merkezinden AWS Cloud'a taşıdı. Veri katmanı, 12 TB Genel Amaçlı SSD Amazon Elastic Block Store (Amazon EBS) depolama alanına sahip Oracle için Amazon RDS'nin Multi-AZ dağıtımıdır. Uygulama, ortalama belge boyutu 6 MB olan ikili büyük nesneler (bloblar) olarak belgeleri veritabanında işlemek ve depolamak için tasarlanmıştır. Veritabanı boyutu zamanla büyüyerek performansı düşürdü ve depolama maliyetini artırdı. Şirketin veritabanı performansını iyileştirmesi gerekiyor ve yüksek oranda kullanılabilir ve dayanıklı bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. RDS Veritabanı bulut sunucusu boyutunu azaltın. Depolama kapasitesini 24 TiB'ye yükseltin. Depolama türünü Manyetik olarak değiştirin.

B. RDS Veritabanı bulut sunucusu boyutunu artırın. Depolama kapasitesini 24 Ti'ye artırın Depolama türünü Tedarik Edilen IOPS olarak değiştirin.

C. Bir Amazon S3 klasörü oluşturun. Belgeleri S3 klasöründe depolamak için uygulamayı güncelleyin. Nesne meta verilerini mevcut veritabanında saklayın.

D. Bir Amazon DynamoDB tablosu oluşturun. Uygulamayı DynamoDB'yi kullanacak şekilde güncelleyin. Verileri Oracle veritabanından DynamoDB'ye taşımak için AWS Database Migration Service'i (AWS DMS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir Amazon S3 klasörü oluşturun. Belgeleri S3 klasöründe depolamak için uygulamayı güncelleyin. Nesne meta verilerini mevcut veritabanında saklayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #608

Bir şirketin, dünya çapında 20.000'den fazla perakende satış noktasında konuşlandırılmış müşterilere hizmet veren bir uygulaması var. Uygulama, 443 numaralı bağlantı noktasında HTTPS üzerinden kullanıma sunulan arka uç web hizmetlerinden oluşur. Uygulama, bir Application Load Balancer'ın (ALB) arkasındaki Amazon EC2 bulut sunucularında barındırılır. Perakende satış yerleri web uygulamasıyla halka açık internet üzerinden iletişim kurar. Şirket, her perakende satış lokasyonunun, yerel ISP tarafından perakende satış lokasyonuna tahsis edilen IP adresini kaydetmesine izin verir. Şirketin güvenlik ekibi, erişimi yalnızca perakende satış yerleri tarafından kaydedilen IP adresleriyle kısıtlayarak uygulama uç noktasının güvenliğinin artırılmasını öneriyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS WAF web ACL'sini ALB ile ilişkilendirin. Trafiği filtrelemek için ALB'deki IP kural kümelerini kullanın. Kayıtlı IP adreslerini içerecek şekilde kuraldaki IP adreslerini güncelleyin.

B. AL'ye giden trafiği kısıtlamak amacıyla ALConfigure güvenlik duvarı kurallarını yönetmek için AWS Firewall Manager'ı dağıtın. Güvenlik duvarı kurallarını kayıtlı IP adreslerini içerecek şekilde değiştirin.

C. IP adreslerini bir Amazon DynamoDB tablosunda saklayın. Gelen isteklerin kayıtlı IP adreslerinden geldiğini doğrulamak için ALB'de bir AWS Lambda yetkilendirme işlevi yapılandırın.

D. ALB'nin genel arayüzünü içeren alt ağdaki ağ ACL'sini yapılandırın. Ağ ACL'sindeki giriş kurallarını kayıtlı IP adreslerinin her birine ait girişlerle güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir AWS WAF web ACL'sini ALB ile ilişkilendirin. Trafiği filtrelemek için ALB'deki IP kural kümelerini kullanın. Kayıtlı IP adreslerini içerecek şekilde kuraldaki IP adreslerini güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #609

Bir şirket, AWS Lake Formation'ı kullanarak AWS üzerinde bir veri analizi platformu oluşturuyor. Platform, Amazon S3 ve Amazon RDS gibi farklı kaynaklardan veri alacak. Şirketin hassas bilgiler içeren veri bölümlerine erişimi engellemek için güvenli bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Lake Formation tablolarına erişim izinlerini içeren bir IAM rolü oluşturun.

B. Satır düzeyinde güvenlik ve hücre düzeyinde güvenlik uygulamak için veri filtreleri oluşturun.

C. Lake Formation verileri almadan önce hassas bilgileri kaldıran bir AWS Lambda işlevi oluşturun.

D. Düzenli aralıklarla sorgulayan ve hassas bilgileri Lake Formation tablolarından kaldıran bir AWS Lambda işlevi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Satır düzeyinde güvenlik ve hücre düzeyinde güvenlik uygulamak için veri filtreleri oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #610

Bir şirket, VPC'de çalışan Amazon EC2 bulut sunucularını dağıtıyor. EC2 bulut sunucuları, verilerin gelecekte işlenebilmesi için kaynak verilerini Amazon S3 klasörlerine yükler. Uyumluluk yasalarına göre veriler halka açık internet üzerinden aktarılmamalıdır. Şirketin şirket içi veri merkezindeki sunucular, EC2 bulut sunucularında çalışan bir uygulamanın çıktısını tüketecek. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EC2 için bir arayüz VPC uç noktası dağıtın. Şirket ile VPC arasında bir AWS Siteden Siteye VPN bağlantısı oluşturun.

B. Amazon S3 için bir ağ geçidi VPC uç noktası dağıtın. Şirket içi ağ ile VPC arasında bir AWS Direct Connect bağlantısı kurun.

C. VPC'den S3 klasörlerine bir AWS Transit Gateway bağlantısı kurun. Şirket ile VPC arasında bir AWS Siteden Siteye VPN bağlantısı oluşturun.

D. NAT ağ geçitlerine giden yolları olan proxy EC2 örneklerini ayarlayın. S3 verilerini almak ve uygulama örneklerini beslemek için proxy EC2 örneklerini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon S3 için bir ağ geçidi VPC uç noktası dağıtın. Şirket içi ağ ile VPC arasında bir AWS Direct Connect bağlantısı kurun.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru #611

Bir şirket, verilerin üçüncü taraf bir satıcıdan neredeyse gerçek zamanlı olarak alınmasına olanak tanıyan, REST tabanlı arayüze sahip bir uygulamaya sahiptir. Uygulama, alındıktan sonra verileri daha ileri analiz için işler ve saklar. Uygulama Amazon EC2 bulut sunucularında çalışıyor. Üçüncü taraf satıcı, uygulamaya veri gönderirken birçok 503 Hizmet Kullanılamıyor Hatası aldı. Veri hacmi aniden yükseldiğinde işlem kapasitesi maksimum sınırına ulaşır ve uygulama tüm istekleri işleyemez. Bir çözüm mimarı daha ölçeklenebilir bir çözüm sağlamak için hangi tasarımı önermelidir?

A. Verileri almak için Amazon Kinesis Data Streams'i kullanın. AWS Lambda işlevlerini kullanarak verileri işleyin.

B. Mevcut uygulamanın üstünde Amazon API Gateway'i kullanın. Üçüncü taraf satıcı için kota sınırı olan bir kullanım planı oluşturun.

C. Verileri almak için Amazon Simple Notification Service'i (Amazon SNS) kullanın. EC2 örneklerini Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubuna yerleştirin.

D. Uygulamayı bir kap olarak yeniden paketleyin. Uygulamayı, Otomatik Ölçeklendirme grubuyla EC2 başlatma türünü kullanarak Amazon Elastic Container Service'i (Amazon ECS) kullanarak dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Verileri almak için Amazon Kinesis Data Streams'i kullanın. AWS Lambda işlevlerini kullanarak verileri işleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #612

Bir şirketin özel bir alt ağdaki Amazon EC2 bulut sunucularında çalışan bir uygulaması var. Uygulamanın bir Amazon S3 klasöründeki hassas bilgileri işlemesi gerekiyor. Uygulama S3 paketine bağlanmak için interneti kullanmamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir internet ağ geçidini yapılandırın. İnternet ağ geçidinden erişime izin vermek için S3 grup politikasını güncelleyin. Yeni internet ağ geçidini kullanmak için uygulamayı güncelleyin.

B. Bir VPN bağlantısı yapılandırın. VPN bağlantısından erişime izin vermek için S3 grup politikasını güncelleyin. Yeni VPN bağlantısını kullanmak için uygulamayı güncelleyin.

C. Bir NAT ağ geçidini yapılandırın. NAT ağ geçidinden erişime izin vermek için S3 paket politikasını güncelleyin. Yeni NAT ağ geçidini kullanmak için uygulamayı güncelleyin.

D. Bir VPC uç noktası yapılandırın. VPC uç noktasından erişime izin vermek için S3 paket politikasını güncelleyin. Yeni VPC uç noktasını kullanacak şekilde uygulamayı güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir VPC uç noktası yapılandırın. VPC uç noktasından erişime izin vermek için S3 paket politikasını güncelleyin. Yeni VPC uç noktasını kullanacak şekilde uygulamayı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #613

Bir şirket, bir konteyner uygulamasını çalıştırmak için Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanıyor. EKS kümesi, hassas bilgileri Kubernetes gizli dizileri nesnesinde saklar. Şirket bilgilerin şifrelendiğinden emin olmak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS Key Management Service'i (AWS KMS) kullanarak bilgileri şifrelemek için konteyner uygulamasını kullanın.

B. AWS Key Management Service'i (AWS KMS) kullanarak EKS kümesinde gizli dizi şifrelemesini etkinleştirin.

C. AWS Key Management Service'i (AWS KMS) kullanarak bilgileri şifrelemek için bir AWS Lambda işlevi uygulayın.

D. AWS Key Management Service'i (AWS KMS) kullanarak bilgileri şifrelemek için AWS Systems Manager Parametre Deposu'nu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Key Management Service'i (AWS KMS) kullanarak EKS kümesinde gizli dizi şifrelemesini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #614

Bir şirket, aşağıdaki bileşenlerden oluşan yeni bir çok katmanlı web uygulaması tasarlıyor: • Otomatik Ölçeklendirme gruplarının parçası olarak Amazon EC2 bulut sunucularında çalışan web ve uygulama sunucuları • Veri depolama için bir Amazon RDS DB bulut sunucusu Bir çözüm mimarının, uygulama sunucularına erişimi yalnızca web sunucularının erişebileceği şekilde sınırlaması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS PrivateLink'i uygulama sunucularının önüne dağıtın. Ağ ACL'sini yalnızca web sunucularının uygulama sunucularına erişmesine izin verecek şekilde yapılandırın.

B. Uygulama sunucularının önüne bir VPC uç noktası dağıtın. Güvenlik grubunu yalnızca web sunucularının uygulama sunucularına erişmesine izin verecek şekilde yapılandırın.

C. Uygulama sunucularının Otomatik Ölçeklendirme grubunu içeren bir hedef gruba bir Ağ Yük Dengeleyici dağıtın. Ağ ACL'sini yalnızca web sunucularının uygulama sunucularına erişmesine izin verecek şekilde yapılandırın.

D. Uygulama sunucularının Otomatik Ölçeklendirme grubunu içeren bir hedef gruba bir Application Load Balancer dağıtın. Güvenlik grubunu yalnızca web sunucularının uygulama sunucularına erişmesine izin verecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulama sunucularının Otomatik Ölçeklendirme grubunu içeren bir hedef gruba bir Application Load Balancer dağıtın. Güvenlik grubunu yalnızca web sunucularının uygulama sunucularına erişmesine izin verecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru #615

Bir şirket, Amazon Elastic Kubernetes Service (Amazon EKS) üzerinde müşteriye yönelik kritik bir uygulamayı çalıştırıyor. Uygulama bir mikro hizmet mimarisine sahiptir. Şirketin, uygulamadaki ölçümleri ve günlükleri merkezi bir konumda toplayan, bir araya getiren ve özetleyen bir çözüm uygulaması gerekiyor. Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon CloudWatch aracısını mevcut EKS kümesinde çalıştırın. CloudWatch konsolundaki ölçümleri ve günlükleri görüntüleyin.

B. Mevcut EKS kümesinde AWS App Mesh'i çalıştırın. Ölçümleri ve günlükleri App Mesh konsolunda görüntüleyin.

C. Veri olaylarını yakalamak için AWS CloudTrail'i yapılandırın. Amazon OpenSearch Hizmetini kullanarak CloudTrail'i sorgulayın.

D. Mevcut EKS kümesinde Amazon CloudWatch Container Insights'ı yapılandırın. CloudWatch konsolundaki ölçümleri ve günlükleri görüntüleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut EKS kümesinde Amazon CloudWatch Container Insights'ı yapılandırın. CloudWatch konsolundaki ölçümleri ve günlükleri görüntüleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #616

Bir şirket en yeni ürününü AWS'de devreye aldı. Ürün, Ağ Yük Dengeleyicinin arkasındaki Otomatik Ölçeklendirme grubunda çalışır. Şirket, ürünün nesnelerini bir Amazon S3 klasöründe saklıyor. Şirket yakın zamanda sistemlerine yönelik kötü niyetli saldırılarla karşılaştı. Şirketin, AWS hesabındaki kötü amaçlı etkinlikleri, iş yüklerini ve S3 klasörüne erişim düzenlerini sürekli olarak izleyen bir çözüme ihtiyacı var. Çözümün aynı zamanda şüpheli etkinlikleri raporlaması ve bilgileri bir kontrol panelinde görüntülemesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bulguları izleyip AWS Config'e raporlamak için Amazon Macie'yi yapılandırın.

B. Bulguları izleyip AWS CloudTrail'e raporlamak için Amazon Inspector'ı yapılandırın.

C. Bulguları izleyip AWS Security Hub'a raporlamak için Amazon GuardDuty'yi yapılandırın.

D. Bulguları izlemek ve Amazon EventBridge'e raporlamak için AWS Config'i yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bulguları izleyip AWS Security Hub'a raporlamak için Amazon GuardDuty'yi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru #617

Bir şirket şirket içi veri merkezini AWS'ye taşımak istiyor. Veri merkezi, verileri NFS tabanlı bir dosya sisteminde depolayan bir depolama sunucusuna ev sahipliği yapar. Depolama sunucusu 200 GB veri tutar. Şirketin verileri kesintisiz olarak mevcut hizmetlere taşıması gerekiyor. AWS'deki birden fazla kaynağın NFS protokolünü kullanarak verilere erişebilmesi gerekir. Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. Lustre dosya sistemi için bir Amazon FSx oluşturun.

B. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun.

C. Verileri almak için bir Amazon S3 klasörü oluşturun.

D. Verileri AWS hedefine göndermek için manuel olarak bir işletim sistemi kopyalama komutunu kullanın.

E. Şirket içi veri merkezine bir AWS DataSync aracısı yükleyin. Şirket içi konum ile AWS arasında bir DataSync görevi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. Şirket içi veri merkezine bir AWS DataSync aracısı yükleyin. Şirket içi konum ile AWS arasında bir DataSync görevi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #618

Bir şirket, us-east-1 Bölgesinde birim olarak monte edilmiş SMB dosya paylaşımına sahip Amazon EC2 bulut sunucuları için Windows Dosya Sunucusu için Amazon FSx'i kullanmak istiyor. Şirketin planlı sistem bakımı veya plansız hizmet kesintileri için 5 dakikalık bir kurtarma noktası hedefi (RPO) vardır. Şirketin dosya sistemini us-west-2 Bölgesine kopyalaması gerekiyor. Çoğaltılan veriler 5 yıl boyunca hiçbir kullanıcı tarafından silinmemelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. us-east-1'de Single-AZ 2 dağıtım türüne sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun. Yedeklemeyi us-west-2'ye kopyalayan bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. us-west-2'deki bir hedef kasa için AWS Backup Vault Lock'u uyumluluk modunda yapılandırın. Minimum 5 yıllık süreyi yapılandırın.

B. us-east-1'de Multi-AZ dağıtım türüne sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun. Yedeklemeyi us-west-2'ye kopyalayan bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. us-west-2'deki bir hedef kasa için AWS Backup Vault Lock'u yönetişim modunda yapılandırın. Minimum 5 yıllık süreyi yapılandırın.

C. us-east-1'de Multi-AZ dağıtım türüne sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun. Yedeklemeyi us-west-2'ye kopyalayan bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. us-west-2'deki bir hedef kasa için AWS Backup Vault Lock'u uyumluluk modunda yapılandırın. Minimum 5 yıllık süreyi yapılandırın.

D. us-east-1'de Single-AZ 2 dağıtım türüne sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun. Yedeklemeyi us-west-2'ye kopyalayan bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. us-west-2'deki bir hedef kasa için AWS Backup Vault Lock'u yönetişim modunda yapılandırın. Minimum 5 yıllık süreyi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** us-east-1'de Multi-AZ dağıtım türüne sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun. Yedeklemeyi us-west-2'ye kopyalayan bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. us-west-2'deki bir hedef kasa için AWS Backup Vault Lock'u uyumluluk modunda yapılandırın. Minimum 5 yıllık süreyi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #619

Bir çözüm mimarı, geliştiricilere AWS Kuruluşları aracılığıyla bireysel AWS hesapları sağlamanın yanı sıra standart güvenlik kontrollerini de sürdürmek isteyen bir şirket için bir güvenlik çözümü tasarlıyor. Bireysel geliştiriciler, kendi hesaplarına AWS hesabı kök kullanıcı düzeyinde erişime sahip olacağından, çözüm mimarı, yeni geliştirici hesaplarına uygulanan zorunlu AWS CloudTrail yapılandırmasının değiştirilmemesini sağlamak ister. Hangi eylem bu gereksinimleri karşılıyor?

A. CloudTrail'de değişiklik yapılmasını yasaklayan bir IAM politikası oluşturun. ve onu kök kullanıcıya ekleyin.

B. Organizasyon izleri seçeneği etkinken geliştirici hesaplarının içinden CloudTrail'de yeni bir iz oluşturun.

C. CloudTrail'de değişiklik yapılmasını yasaklayan bir hizmet kontrol politikası (SCP) oluşturun ve bunu geliştirici hesaplarına ekleyin.

D. CloudTrail için yalnızca yönetim hesabındaki bir Amazon Kaynak Adından (ARN) değişiklik yapılmasına izin veren bir politika koşuluna sahip hizmet bağlantılı bir rol oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** CloudTrail'de değişiklik yapılmasını yasaklayan bir hizmet kontrol politikası (SCP) oluşturun ve bunu geliştirici hesaplarına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #620

Bir şirket, AWS Cloud'da iş açısından kritik bir uygulamayı devreye almayı planlıyor. Uygulama, tutarlı, düşük gecikme performansına sahip dayanıklı depolama gerektirir. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi tür depolamayı önermelidir?

A. Bulut sunucusu depolama birimi

B. Memcached kümesi için Amazon ElastiCache

C. Sağlanan IOPS SSD Amazon Elastic Block Store (Amazon EBS) birimi

D. Performansı Optimize Edilmiş HDD Amazon Elastic Block Store (Amazon EBS) birimi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tedarik edilen IOPS SSD Amazon Elastic Block Store (Amazon EBS) birimi
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #621

Çevrimiçi bir fotoğraf paylaşım şirketi, fotoğraflarını us-west-1 Bölgesinde bulunan bir Amazon S3 klasöründe saklıyor. Şirketin tüm yeni fotoğrafların bir kopyasını ABD-Doğu-1 Bölgesinde saklaması gerekiyor. Hangi çözüm bu gereksinimi EN AZ operasyonel çabayla karşılayacak?

A. us-east-1'de ikinci bir S3 klasörü oluşturun. Fotoğrafları mevcut S3 klasöründen ikinci S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı kullanın.

B. Mevcut S3 paketinin kaynaklar arası kaynak paylaşımı (CORS) yapılandırmasını oluşturun. CORS kuralının AllowedOrigin öğesinde us-east-1'i belirtin.

C. Us-east-1'de birden fazla Erişilebilirlik Alanında ikinci bir S3 klasörü oluşturun. Fotoğrafları ikinci S3 klasörüne kaydetmek için bir S3 Yaşam Döngüsü kuralı oluşturun.

D. us-east-1'de ikinci bir S3 klasörü oluşturun. Fotoğrafları mevcut S3 klasöründen ikinci S3 klasörüne kopyalamak üzere bir AWS Lambda işlevini çağırmak için nesne oluşturma ve güncelleme olaylarıyla ilgili S3 olay bildirimlerini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** us-east-1'de ikinci bir S3 grubu oluşturun. Fotoğrafları mevcut S3 klasöründen ikinci S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).

---

---

Soru #622

Bir şirket aboneleri için yeni bir web uygulaması oluşturuyor. Uygulama statik bir tek sayfa ve kalıcı bir veritabanı katmanından oluşacaktır. Uygulamanın sabah 4 saat boyunca milyonlarca kullanıcısı olacak, ancak günün geri kalanında uygulamanın yalnızca birkaç bin kullanıcısı olacak. Şirketin veri mimarları, şemalarını hızlı bir şekilde geliştirme olanağı talep etti. Hangi çözümler bu gereksinimleri karşılayacak ve EN ÇOK ölçeklenebilirliği sağlayacak? (İki tane seçin.)

A. Veritabanı çözümü olarak Amazon DynamoDB'yi dağıtın. Talep üzerine kapasite sağlayın.

B. Veritabanı çözümü olarak Amazon Aurora'yı dağıtın. Sunucusuz veritabanı motoru modunu seçin.

C. Veritabanı çözümü olarak Amazon DynamoDB'yi dağıtın. DynamoDB otomatik ölçeklendirmenin etkinleştirildiğinden emin olun.

D. Statik içeriği bir Amazon S3 klasörüne dağıtın. Kaynak olarak S3 klasörüyle bir Amazon CloudFront dağıtımı sağlayın.

E. Otomatik Ölçeklendirme gruplarında Amazon EC2 bulut sunucularından oluşan bir filo genelinde statik içerik için web sunucularını dağıtın. Örnekleri, bir Amazon Elastic File System (Amazon EFS) birimindeki içeriği düzenli aralıklarla yenileyecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Amazon DynamoDB'yi veritabanı çözümü olarak dağıtın. Talep üzerine kapasite sağlayın. Statik içeriği bir Amazon S3 klasörüne dağıtın. Kaynak olarak S3 klasörüyle bir Amazon CloudFront dağıtımı sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #623

Bir şirket, üçüncü taraf hizmet sağlayıcılarının eriştiği REST API'lerini yönetmek için Amazon API Gateway'i kullanıyor. Şirket, REST API'lerini SQL enjeksiyonundan ve siteler arası komut dosyası çalıştırma saldırılarından korumalıdır. Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. AWS Shield'ı yapılandırın.

B. AWS WAF'ı yapılandırın.

C. API Gateway'i Amazon CloudFront dağıtımıyla kurun. AWS Shield'ı CloudFront'ta yapılandırın.

D. API Gateway'i Amazon CloudFront dağıtımıyla kurun. AWS WAF'ı CloudFront'ta yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS WAF'ı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru #624

Bir şirket, kullanıcılara AWS kaynaklarına erişim sağlamak istiyor. Şirketin 1.500 kullanıcısı var ve bunların şirket içi kaynaklara erişimlerini kurumsal ağdaki Active Directory kullanıcı grupları aracılığıyla yönetiyor. Ancak şirket, kullanıcıların kaynaklara erişmek için başka bir kimliğe sahip olmalarını istemiyor. Bir çözüm mimarı, şirket içi kaynaklara erişimi korurken, AWS kaynaklarına kullanıcı erişimini yönetmelidir. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Şirketteki her kullanıcı için bir IAM kullanıcısı oluşturun. Her kullanıcıya uygun politikaları ekleyin.

B. Amazon Cognito'yu bir Active Directory kullanıcı havuzuyla kullanın. Uygun ilkelerin eklendiği roller oluşturun.

C. Hesaplar arası rolleri uygun politikalarla birlikte tanımlayın. Rolleri Active Directory gruplarıyla eşleyin.

D. Güvenlik Onayı Biçimlendirme Dilini (SAML) 2 0 tabanlı federasyonu yapılandırın. Uygun ilkelerin eklendiği roller oluşturun. Rolleri Active Directory gruplarıyla eşleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Güvenlik Onayı Biçimlendirme Dilini (SAML) 2 0 tabanlı federasyonu yapılandırma. Uygun ilkelerin eklendiği roller oluşturun. Rolleri Active Directory gruplarıyla eşleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #625

Bir şirket, birden fazla Application Load Balancer'ın arkasında bir web sitesi barındırıyor. Şirket, içeriğinin dünya çapında farklı dağıtım haklarına sahiptir. Bir çözüm mimarının, dağıtım haklarını ihlal etmeden kullanıcılara doğru içeriğin sunulmasını sağlaması gerekir. Çözüm mimarı bu gereksinimleri karşılamak için hangi konfigürasyonu seçmelidir?

A. Amazon CloudFront'u AWS WAF ile yapılandırın.

B. AWS WAF ile Uygulama Yük Dengeleyicilerini Yapılandırma

C. Amazon Route 53'ü bir coğrafi konum politikasıyla yapılandırma

D. Amazon Route 53'ü coğrafi yakınlık yönlendirme politikasıyla yapılandırma

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Route 53'ü coğrafi konum politikasıyla yapılandırma
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #626

Bir şirket verilerini kendi tesislerinde saklar. Veri miktarı şirketin mevcut kapasitesinin ötesinde artıyor. Şirket, verilerini şirket içi konumdan bir Amazon S3 klasörüne taşımak istiyor. Şirketin, aktarım sonrasında verilerin bütünlüğünü otomatik olarak doğrulayacak bir çözüme ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir AWS Snowball Edge cihazı sipariş edin. Snowball Edge cihazını bir S3 klasörüne çevrimiçi veri aktarımını gerçekleştirecek şekilde yapılandırın

B. Şirket içinde bir AWS DataSync aracısı dağıtın. DataSync aracısını bir S3 klasörüne çevrimiçi veri aktarımını gerçekleştirecek şekilde yapılandırın.

C. Şirket içinde bir Amazon S3 Dosya Ağ Geçidi oluşturun Bir S3 klasörüne çevrimiçi veri aktarımı gerçekleştirmek için S3 Dosya Ağ Geçidini yapılandırın

D. Şirket içi Amazon S3 Transfer Acceleration'da bir hızlandırıcı yapılandırın. Hızlandırıcıyı bir S3 klasörüne çevrimiçi veri aktarımını gerçekleştirecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirket içinde bir AWS DataSync aracısı dağıtın. DataSync aracısını bir S3 klasörüne çevrimiçi veri aktarımını gerçekleştirecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #627

Bir şirket iki DNS sunucusunu AWS'ye taşımak istiyor. Sunucular toplamda yaklaşık 200 bölgeye ev sahipliği yapmakta ve her gün ortalama 1 milyon istek almaktadır. Şirket, iki sunucunun yönetimiyle ilgili operasyonel ek yükü en aza indirirken kullanılabilirliği en üst düzeye çıkarmak istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Amazon Route 53 konsolunda 200 yeni barındırılan bölge oluşturun. Bölge dosyalarını içe aktarın.

B. Tek bir büyük Amazon EC2 bulut sunucusu İçe aktarma bölgesi kutucuklarını başlatın. Şirketi herhangi bir kesinti konusunda uyarmak için Amazon CloudWatch alarmlarını ve bildirimlerini yapılandırın.

C. AWS Server Migration Service'i (AWS SMS) kullanarak sunucuları AWS'ye geçirin. Şirketi herhangi bir kesinti konusunda uyarmak için Amazon CloudWatch alarmlarını ve bildirimlerini yapılandırın.

D. İki Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubunda bir Amazon EC2 bulut sunucusu başlatın. Bölge dosyalarını içe aktarın. Otomatik Ölçeklendirme grubu için istenen kapasiteyi 1'e ve maksimum kapasiteyi 3'e ayarlayın. Ölçeklendirme alarmlarını CPU kullanımına göre ölçeklenecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon Route 53 konsolunda 200 yeni barındırılan bölge oluşturun. Bölge dosyalarını içe aktarın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #628

Küresel bir şirket, uygulamalarını AWS Kuruluşlarındaki birden fazla AWS hesabında çalıştırıyor. Şirketin uygulamaları, verileri AWS Bölgelerindeki birden fazla Amazon S3 klasörüne yüklemek için çok parçalı yüklemeleri kullanıyor. Şirket, maliyet uyumluluğu amacıyla tamamlanmamış çok parçalı yüklemeleri raporlamak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Eksik çok parçalı yükleme nesnesi sayısını bildirmek için AWS Config'i bir kuralla yapılandırın.

B. Eksik çok parçalı yükleme nesnesi sayısını raporlamak için bir hizmet kontrol ilkesi (SCP) oluşturun.

C. Eksik çok parçalı yükleme nesnesi sayısını bildirmek için S3 Depolama Lensini yapılandırın.

D. Eksik çok parçalı yükleme nesnesi sayısını bildirmek için bir S3 Çok Bölgeli Erişim Noktası oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Eksik çok parçalı yükleme nesnesi sayısını bildirmek için S3 Depolama Lensini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Multipart Upload (Çok Parçalı Yükleme):** Büyük dosya yüklemelerini paralel parçalara ayırarak gerçekleştirir. 100 MB üzerindeki nesneler için önerilir, 5 GB üzerindeki nesneler için zorunludur. Ağ kesintilerinde yalnızca başarısız olan parçanın tekrar yüklenmesini sağlar.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #629

Bir şirket MySQL için Amazon RDS'de bir üretim veritabanı çalıştırıyor. Şirket, güvenlik uyumluluğu nedeniyle veritabanı sürümünü yükseltmek istiyor. Veritabanı kritik veriler içerdiğinden şirket, herhangi bir veri kaybı olmadan işlevselliği yükseltmek ve test etmek için hızlı bir çözüm istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bir RDS manuel anlık görüntüsü oluşturun. Amazon RDS for MySQL'in yeni sürümüne yükseltin.

B. Yerel yedeklemeyi kullanın ve geri yükleyin. Verileri Amazon RDS for MySQL'in yükseltilmiş yeni sürümüne geri yükleyin.

C. Verileri Amazon RDS for MySQL'in yükseltilmiş yeni sürümüne kopyalamak için AWS Database Migration Service'i (AWS DMS) kullanın.

D. Üretim değişikliklerini dağıtmak ve test etmek için Amazon RDS Mavi/Yeşil Dağıtımları kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Üretim değişikliklerini dağıtmak ve test etmek için Amazon RDS Mavi/Yeşil Dağıtımları kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #630

Bir çözüm mimarı, günde bir kez çalıştırılan ve tamamlanması 2 saate kadar sürebilen bir veri işleme işi oluşturuyor. İşin kesintiye uğraması durumunda baştan yeniden başlatılması gerekir. Çözüm mimarı bu konuyu EN uygun maliyetle nasıl ele almalıdır?

A. Bir cron işi tarafından tetiklenen, Amazon EC2 Rezerve Edilmiş Bulut Sunucusunda yerel olarak çalışan bir komut dosyası oluşturun.

B. Amazon EventBridge planlanmış bir olayı tarafından tetiklenen bir AWS Lambda işlevi oluşturun.

C. Amazon EventBridge planlanmış bir olayı tarafından tetiklenen bir Amazon Elastic Container Service (Amazon ECS) Fargate görevini kullanın.

D. Amazon EC2 üzerinde çalışan ve Amazon EventBridge planlanmış bir etkinliği tarafından tetiklenen bir Amazon Elastic Container Service (Amazon ECS) görevini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon EventBridge planlanmış bir etkinliği tarafından tetiklenen bir Amazon Elastic Container Service (Amazon ECS) Fargate görevini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #631

Bir sosyal medya şirketi, kullanıcı profilleri, ilişkiler ve etkileşimlerden oluşan veritabanını AWS Cloud'da depolamak istiyor. Şirketin veritabanındaki değişiklikleri izlemek için bir uygulamaya ihtiyacı var. Uygulamanın veri varlıkları arasındaki ilişkileri analiz etmesi ve kullanıcılara öneriler sunması gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bilgileri depolamak için Amazon Neptune'ü kullanın. Veritabanındaki değişiklikleri işlemek için Amazon Kinesis Data Streams'i kullanın.

B. Bilgileri depolamak için Amazon Neptune'ü kullanın. Veritabanındaki değişiklikleri işlemek için Neptune Streams'i kullanın.

C. Bilgileri depolamak için Amazon Quantum Ledger Database'i (Amazon QLDB) kullanın. Veritabanındaki değişiklikleri işlemek için Amazon Kinesis Data Streams'i kullanın.

D. Bilgileri depolamak için Amazon Quantum Ledger Database'i (Amazon QLDB) kullanın. Veritabanındaki değişiklikleri işlemek için Neptune Streams'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bilgileri depolamak için Amazon Neptune'ü kullanın. Veritabanındaki değişiklikleri işlemek için Neptune Streams'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru #632

Bir şirket büyük miktarda veriyi depolayacak yeni bir uygulama yaratıyor. Veriler saatlik olarak analiz edilecek ve birden fazla Erişilebilirlik Alanına dağıtılan çeşitli Amazon EC2 Linux bulut sunucuları tarafından değiştirilecektir. İhtiyaç duyulan depolama alanı miktarı önümüzdeki 6 ay boyunca artmaya devam edecek. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi depolama çözümünü önermelidir?

A. Verileri Amazon S3 Glacier'da saklayın. Uygulama örneklerine erişime izin vermek için S3 Glacier kasa ilkesini güncelleyin.

B. Verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde saklayın. EBS birimini uygulama örneklerine bağlayın.

C. Verileri bir Amazon Elastic File System (Amazon EFS) dosya sisteminde saklayın. Dosya sistemini uygulama örneklerine bağlayın.

D. Verileri, uygulama bulut sunucuları arasında paylaşılan bir Amazon Elastic Block Store (Amazon EBS) Tedarik Edilen IOPS biriminde depolayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri bir Amazon Elastic File System (Amazon EFS) dosya sisteminde depolayın. Dosya sistemini uygulama örneklerine bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru #633

Bir şirket, verileri Amazon RDS for PostgreSQL Multi-AZ veritabanı bulut sunucusunda depolayan bir uygulamayı yönetmektedir. Trafikteki artışlar performans sorunlarına neden oluyor. Şirket, yavaş performansın temel nedeninin veritabanı sorguları olduğunu tespit ediyor. Bir çözüm mimarı uygulamanın performansını artırmak için ne yapmalıdır?

A. Multi-AZ yedek replikadan okuma trafiği sunun.

B. Veritabanı bulut sunucusunu Aktarım Hızlandırmayı kullanacak şekilde yapılandırın.

C. Kaynak veritabanı bulut sunucusundan bir okuma kopyası oluşturun. Okuma kopyasından okuma trafiğini sunun.

D. Veritabanı isteklerinin eş zamanlılığını artırmak için uygulama ile Amazon RDS arasında Amazon Kinesis Data Firehose'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kaynak veritabanı bulut sunucusundan bir okuma kopyası oluşturun. Okuma kopyasından okuma trafiğini sunun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #634

Bir şirket çeşitli makinelerden günde 10 GB telemetri verisi topluyor. Şirket, verileri kaynak veri hesabındaki bir Amazon S3 klasöründe saklıyor. Şirket, bu verileri analiz amacıyla kullanmak üzere birkaç danışmanlık ajansı kiraladı. Her kurumun analistleri için verilere okuma erişimine ihtiyacı vardır. Şirket, güvenliği ve operasyonel verimliliği en üst düzeye çıkaran bir çözüm seçerek kaynak veri hesabındaki verileri paylaşmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Her kurum için verileri çoğaltmak amacıyla S3 genel tablolarını yapılandırın.

B. S3 grubunu sınırlı bir süre için herkese açık hale getirin. Sadece acentelere bilgi veriniz.

C. Ajansların sahip olduğu hesaplara yönelik S3 grubu için hesaplar arası erişimi yapılandırın.

D. Kaynak veri hesabındaki her analist için bir IAM kullanıcısı oluşturun. Her kullanıcıya S3 klasörüne erişim izni verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ajansların sahip olduğu hesaplara S3 paketi için hesaplar arası erişimi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #635

Bir şirket, CIFS ve NFS dosya paylaşımları için birincil AWS Bölgesinde NetApp ONTAP için Amazon FSx kullanıyor. Amazon EC2 bulut sunucularında çalışan uygulamalar dosya paylaşımlarına erişir. Şirketin ikincil bir Bölgede depolama felaket kurtarma (DR) çözümüne ihtiyacı var. İkincil Bölgede çoğaltılan verilere, birincil Bölgeyle aynı protokoller kullanılarak erişilmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri bir Amazon S3 klasörüne kopyalamak için bir AWS Lambda işlevi oluşturun. S3 paketini ikincil Bölgeye kopyalayın.

B. AWS Backup'ı kullanarak ONTAP birimleri için FSx'in bir yedeğini oluşturun. Birimleri ikincil Bölgeye kopyalayın. Yedekten ONTAP örneği için yeni bir FSx oluşturun.

C. İkincil Bölgede ONTAP örneği için bir FSx oluşturun. Verileri birincil Bölgeden ikincil Bölgeye kopyalamak için NetApp SnapMirror'ı kullanın.

D. Bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. Geçerli verileri birime taşıyın. Birimi ikincil Bölgeye çoğaltın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İkincil Bölgede ONTAP örneği için bir FSx oluşturun. Verileri birincil Bölgeden ikincil Bölgeye kopyalamak için NetApp SnapMirror'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #636

Bir geliştirme ekibi, AWS Lambda işlevlerini kullanan olay tabanlı bir uygulama oluşturuyor. Dosyalar bir Amazon S3 klasörüne eklendiğinde etkinlikler oluşturulacaktır. Geliştirme ekibi şu anda Amazon S3'ten olay hedefi olarak yapılandırılmış Amazon Simple Notification Service'e (Amazon SNS) sahiptir. Bir çözüm mimarı Amazon S3'teki olayları ölçeklenebilir bir şekilde işlemek için ne yapmalıdır?

A. Olay Lambda'da çalıştırılmadan önce olayı Amazon Elastic Container Service'de (Amazon ECS) işleyen bir SNS aboneliği oluşturun.

B. Etkinlik Lambda'da çalıştırılmadan önce Amazon Elastic Kubernetes Service'te (Amazon EKS) olayı işleyen bir SNS aboneliği oluşturun

C. Etkinliği Amazon Simple Queue Service'e (Amazon SQS) gönderen bir SNS aboneliği oluşturun. Lambda işlevini tetiklemek için SOS kuyruğunu yapılandırın.

D. Olayı AWS Server Migration Service'e (AWS SMS) gönderen bir SNS aboneliği oluşturun. SMS olayından anket yapmak için Lambda işlevini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Etkinliği Amazon Simple Queue Service'e (Amazon SQS) gönderen bir SNS aboneliği oluşturun. Lambda işlevini tetiklemek için SOS kuyruğunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #637

Bir çözüm mimarı, Amazon API Gateway'in arkasında yeni bir hizmet tasarlıyor. Hizmetin istek kalıpları öngörülemez olacak ve saniyede 0 istekten 500'ün üzerine aniden değişebilecektir. Bir arka uç veritabanında tutulması gereken verilerin toplam boyutu şu anda 1 GB'tan azdır ve gelecekte öngörülemeyen bir büyüme söz konusudur. Veriler basit anahtar/değer istekleri kullanılarak sorgulanabilir. Hangi AWS hizmetleri kombinasyonu bu gereksinimleri karşılar? (İki tane seçin.)

A. AWS Fargate

B. AWS Lambda

C. Amazon DynamoDB

D. Amazon EC2 Otomatik Ölçeklendirme

E. MySQL uyumlu Amazon Aurora

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** AWS Lambda Amazon DynamoDB
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #638

Bir şirket araştırma verilerini toplar ve dünyanın her yerindeki şirket çalışanlarıyla paylaşır. Şirket, verileri bir Amazon S3 klasöründe toplayıp depolamak ve verileri AWS Cloud'da işlemek istiyor. Şirket, verileri şirket çalışanlarıyla paylaşacak. Şirketin AWS Cloud'da operasyonel ek yükü en aza indirecek güvenli bir çözüme ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 tarafından önceden imzalanmış bir URL oluşturmak için AWS Lambda işlevini kullanın. Çalışanlara URL'yi kullanma talimatını verin.

B. Her çalışan için bir IAM kullanıcısı oluşturun. Her çalışanın S3 erişimine izin vermesi için bir IAM politikası oluşturun. Çalışanlara AWS Management Console'u kullanma talimatını verin.

C. Bir S3 Dosya Ağ Geçidi oluşturun. Yüklemek için bir paylaşım ve indirmek için bir paylaşım oluşturun. Çalışanların S3 Dosya Ağ Geçidini kullanabilmeleri için yerel bilgisayarlarına paylaşımlar eklemelerine izin verin.

D. AWS Transfer Ailesi SFTP uç noktalarını yapılandırın. Özel kimlik sağlayıcı seçeneklerini seçin. Kullanıcı kimlik bilgilerini yönetmek için AWS Secrets Manager'ı kullanın. Çalışanlara Aileyi Aktar'ı kullanma talimatı verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 tarafından önceden imzalanmış bir URL oluşturmak için AWS Lambda işlevini kullanın. Çalışanlara URL'yi kullanma talimatını verin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #639

Bir şirket yeni bir mobilya envanter uygulaması geliştiriyor. Şirket, uygulamayı birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularından oluşan bir filoya dağıttı. EC2 bulut sunucuları, VPC'lerinde bir Application Load Balancer'ın (ALB) arkasında çalışır. Bir çözüm mimarı, gelen trafiğin bir EC2 örneğini tercih ettiğini ve bunun bazı isteklerde gecikmeye yol açtığını gözlemledi. Çözüm mimarı bu sorunu çözmek için ne yapmalıdır?

A. ALB'de oturum benzeşimini (yapışkan oturumlar) devre dışı bırakın

B. ALB'yi bir Ağ Yük Dengeleyiciyle değiştirin

C. Her Erişilebilirlik Alanındaki EC2 bulut sunucusu sayısını artırın

D. ALB'nin hedef grubu üzerindeki sağlık kontrollerinin sıklığını ayarlayın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** ALB'de oturum benzeşimini (yapışkan oturumlar) devre dışı bırakın
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru #640

Bir şirket, Amazon S3'teki dosyaları indirmek ve şifrelerini çözmek için AWS Lambda işlevini kullanan bir uygulama iş akışına sahiptir. Bu dosyalar AWS Key Management Service (AWS KMS) anahtarları kullanılarak şifrelenir. Bir çözüm mimarının gerekli izinlerin doğru şekilde ayarlanmasını sağlayacak bir çözüm tasarlaması gerekir. Hangi eylem kombinasyonu bunu başarıyor? (İki tane seçin.)

A. Lambda işlevinin kaynak politikasına kms:decrypt iznini ekleyin

B. KMS anahtarının politikasında Lambda IAM rolü için şifre çözme izni verin

C. KMS anahtarının politikasında Lambda kaynak politikası için şifre çözme izni verin.

D. kms:decrypt izniyle yeni bir IAM politikası oluşturun ve politikayı Lambda işlevine ekleyin.

E. kms:decrypt izniyle yeni bir IAM rolü oluşturun ve yürütme rolünü Lambda işlevine ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** KMS anahtarının politikasında Lambda IAM rolü için şifre çözme izni verin kms:decrypt izniyle yeni bir IAM rolü oluşturun ve yürütme rolünü Lambda işlevine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #641

Bir şirket, mali inceleme için AWS maliyetlerini izlemek istiyor. Bulut operasyonları ekibi, tüm üye hesapları için AWS Maliyet ve Kullanım Raporlarını sorgulamak amacıyla AWS Organizasyon yönetim hesabında bir mimari tasarlıyor. Ekibin bu sorguyu ayda bir çalıştırması ve faturanın ayrıntılı bir analizini sunması gerekir. Bu gereksinimleri karşılamanın EN ölçeklenebilir ve uygun maliyetli yolu hangi çözümdür?

A. Yönetim hesabında Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon Kinesis'e iletin. Analiz için Amazon EMR'yi kullanın.

B. Yönetim hesabında Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon S3'e iletin Analiz için Amazon Athena'yı kullanın.

C. Üye hesapları için Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon S3'e iletin Analiz için Amazon Redshift'i kullanın.

D. Üye hesapları için Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon Kinesis'e teslim edin. Amazon QuickSight tor analizini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yönetim hesabında Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon S3'e iletin Analiz için Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #642

Bir şirket, AWS Cloud'daki Otomatik Ölçeklendirme grubunun parçası olan Amazon EC2 bulut sunucularında bir oyun uygulaması çalıştırmak istiyor. Uygulama verileri UDP paketlerini kullanarak iletecektir. Şirket, trafik arttıkça ve azaldıkça uygulamanın ölçeğinin genişletilip genişletilebilmesini sağlamak istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Otomatik Ölçeklendirme grubuna bir Ağ Yük Dengeleyici ekleyin.

B. Otomatik Ölçeklendirme grubuna bir Application Load Balancer ekleyin.

C. Trafiği uygun şekilde yönlendirmek için ağırlıklı bir politikayla bir Amazon Route 53 kayıt kümesi dağıtın.

D. Otomatik Ölçeklendirme grubundaki EC2 örneklerine bağlantı noktası yönlendirmeyle yapılandırılmış bir NAT örneğini dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubuna bir Ağ Yük Dengeleyici ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #643

Bir şirket, farklı markaları için AWS'de çeşitli web siteleri işletiyor. Her web sitesi, her gün onlarca gigabaytlık web trafiği günlüğü oluşturur. Bir çözüm mimarının, şirketin geliştiricilerine şirketin tüm web sitelerindeki trafik düzenlerini analiz etme yeteneği verecek ölçeklenebilir bir çözüm tasarlaması gerekir. Geliştiriciler tarafından yapılan bu analiz, talep üzerine birkaç ay boyunca haftada bir kez gerçekleştirilecektir. Çözümün standart SQL ile sorguları desteklemesi gerekir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Günlükleri Amazon S3'te saklayın. Amazon Athena tor analizini kullanın.

B. Günlükleri Amazon RDS'de saklayın. Analiz için bir veritabanı istemcisi kullanın.

C. Günlükleri Amazon OpenSearch Hizmetinde saklayın. Analiz için OpenSearch Hizmetini kullanın.

D. Günlükleri bir Amazon EMR kümesinde saklayın SQL tabanlı analiz için desteklenen bir açık kaynak çerçevesini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Günlükleri Amazon S3'te saklayın. Amazon Athena tor analizini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #644

Uluslararası bir şirketin faaliyet gösterdiği her ülke için bir alt alan adı vardır. Alt alanlar example.com, country1.example.com ve country2.example.com olarak biçimlendirilir. Şirketin iş yükleri Application Load Balancer'ın arkasındadır. Şirket, aktarılan web sitesi verilerini şifrelemek istiyor. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Apex üst alan adı example com için genel sertifika ve *.example.com için joker karakter sertifikası istemek üzere AWS Sertifika Yöneticisi (ACM) konsolunu kullanın.

B. Apeks üst etki alanı example.com için özel bir sertifika ve *.example.com için joker karakter sertifikası istemek üzere AWS Sertifika Yöneticisi (ACM) konsolunu kullanın.

C. Apex üst etki alanı example.com için genel ve özel bir sertifika istemek üzere AWS Sertifika Yöneticisi (ACM) konsolunu kullanın.

D. Etki alanı sahipliğini e-posta adresine göre doğrulayın. Gerekli DNS kayıtlarını DNS sağlayıcısına ekleyerek DNS doğrulamaya geçin.

E. Gerekli DNS kayıtlarını DNS sağlayıcısına ekleyerek etki alanı sahipliğini doğrulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** Apex üst alan adı example com için genel sertifika ve *.example.com için joker karakter sertifikası istemek üzere AWS Sertifika Yöneticisi (ACM) konsolunu kullanın. Gerekli DNS kayıtlarını DNS sağlayıcısına ekleyerek alanın alan adı sahipliğini doğrulayın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #645

Bir şirketin şirket içi anahtar yöneticisinde şifreleme anahtarları kullanması gerekir. Kilit yönetici, düzenleme ve uyumluluk gereklilikleri nedeniyle AWS Cloud'un dışındadır. Şirket, AWS Cloud dışında tutulan ve farklı satıcılardan çeşitli harici anahtar yöneticilerini destekleyen şifreleme anahtarlarını kullanarak şifrelemeyi ve şifre çözmeyi yönetmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. CloudHSM kümesi tarafından desteklenen AWS CloudHSM anahtar deposunu kullanın.

B. Harici bir anahtar yöneticisi tarafından desteklenen bir AWS Key Management Service (AWS KMS) harici anahtar deposunu kullanın.

C. Varsayılan AWS Key Management Service (AWS KMS) yönetilen anahtar deposunu kullanın.

D. AWS CloudHSM kümesi tarafından desteklenen özel bir anahtar deposu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Harici bir anahtar yöneticisi tarafından desteklenen bir AWS Key Management Service (AWS KMS) harici anahtar deposunu kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #646

Bir çözüm mimarının, AWS Cloud'da yüksek performanslı bilgi işlem (HPC) iş yükünü barındırması gerekir. İş yükü yüzlerce Amazon EC2 bulut sunucusunda çalışacak ve büyük veri kümelerinin dağıtılmış şekilde işlenmesini sağlamak için paylaşılan bir dosya sistemine paralel erişim gerektirecektir. Veri kümelerine aynı anda birden fazla örnek üzerinden erişilecektir. İş yükü 1 ms içinde erişim gecikmesi gerektiriyor. İşleme tamamlandıktan sonra mühendislerin, manuel son işleme için veri kümesine erişmeleri gerekecektir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Elastic File System'i (Amazon EFS) paylaşılan bir dosya sistemi olarak kullanın. Veri kümesine Amazon EFS'den erişin.

B. Paylaşılan dosya sistemi olarak hizmet verecek bir Amazon S3 klasörü ekleyin. Son işlemeyi doğrudan S3 klasöründen gerçekleştirin.

C. Amazon FSx for Luster'ı paylaşılan bir dosya sistemi olarak kullanın. Dosya sistemini sonradan işleme için bir Amazon S3 klasörüne bağlayın.

D. AWS Resource Access Manager'ı bir Amazon S3 kümesini paylaşacak şekilde yapılandırın, böylece işleme ve son işleme için tüm bulut sunucularına bağlanabilecektir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon FSx for Luster'ı paylaşılan bir dosya sistemi olarak kullanın. Dosya sistemini sonradan işleme için bir Amazon S3 klasörüne bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #647

Bir oyun şirketi IP üzerinden Ses özelliklerine sahip bir uygulama geliştiriyor. Uygulama dünya çapındaki kullanıcılara trafik sunacak. Uygulamanın, AWS Bölgelerinde otomatik yük devretme özelliğiyle yüksek düzeyde kullanılabilir olması gerekir. Şirket, kullanıcı cihazlarında IP adresinin önbelleğe alınmasına gerek kalmadan kullanıcıların gecikmesini en aza indirmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS Global Accelerator'ı durum kontrolleriyle birlikte kullanın.

B. Amazon Route 53'ü coğrafi konum yönlendirme politikasıyla kullanın.

C. Birden fazla kaynak içeren bir Amazon CloudFront dağıtımı oluşturun.

D. Yol tabanlı yönlendirmeyi kullanan bir Application Load Balancer oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Global Accelerator'ı durum kontrolleriyle birlikte kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #648

Bir hava tahmin şirketinin yüzlerce gigabayt veriyi milisaniyenin altında bir gecikmeyle işlemesi gerekiyor. Şirketin veri merkezinde yüksek performanslı bilgi işlem (HPC) ortamı bulunuyor ve tahmin yeteneklerini genişletmek istiyor. Bir çözüm mimarı, büyük miktarlarda sürekli iş hacmini yönetebilecek, yüksek düzeyde kullanılabilir bir bulut depolama çözümü belirlemelidir. Çözümde depolanan dosyalar, veri kümesinin tamamına aynı anda erişip bunları işleyecek binlerce bilgi işlem örneğinin erişimine açık olmalıdır. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Luster karalama dosya sistemleri için Amazon FSx'i kullanın.

B. Luster kalıcı dosya sistemleri için Amazon FSx'i kullanın.

C. Ani Verim Moduyla Amazon Elastic File System'i (Amazon EFS) kullanın.

D. Tedarik Edilen Performans moduyla Amazon Elastic File System'i (Amazon EFS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Lustre kalıcı dosya sistemleri için Amazon FSx'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #649

Bir e-ticaret şirketi kendi bünyesinde bir PostgreSQL veritabanı çalıştırıyor. Veritabanı, verileri yüksek IOPS Amazon Elastic Block Store (Amazon EBS) blok depolamayı kullanarak depolar. Saniyedeki günlük en yüksek G/Ç işlemleri 15.000 IOPS'yi aşmaz. Şirket, veritabanını PostgreSQL için Amazon RDS'ye geçirmek ve disk depolama kapasitesinden bağımsız olarak disk IOPS performansını sağlamak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Genel Amaçlı SSD (gp2) EBS birim depolama türünü yapılandırın ve 15.000 IOPS sağlayın.

B. Tedarik Edilen IOPS SSD (io1) EBS birim depolama türünü yapılandırın ve 15.000 IOPS sağlayın.

C. Genel Amaçlı SSD (gp3) EBS birim depolama türünü yapılandırın ve 15.000 IOPS sağlayın.

D. Maksimum IOPS'ye ulaşmak için EBS manyetik hacim tipini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Genel Amaçlı SSD (gp3) EBS birim depolama türünü yapılandırın ve 15.000 IOPS sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #650

Bir şirket, şirket içi Microsoft SQL Server Enterprise sürümü veritabanını AWS'ye taşımak istiyor. Şirketin çevrimiçi uygulaması, işlemleri gerçekleştirmek için veritabanını kullanıyor. Veri analizi ekibi, analitik işlemeye yönelik raporları çalıştırmak için aynı üretim veritabanını kullanıyor. Şirket, mümkün olan her yerde yönetilen hizmetlere geçerek operasyonel ek yükü azaltmak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Microsoft SOL Sunucusu için Amazon RDS'ye geçiş yapın. Raporlama amacıyla okuma kopyalarını kullanın

B. Amazon EC2'de Microsoft SQL Server'a geçiş yapın. Raporlama amacıyla Her Zaman Açık okuma kopyalarını kullanın

C. Amazon DynamoDB'ye geçiş yapın. Raporlama amacıyla DynamoDB isteğe bağlı kopyalarını kullanın

D. Amazon Aurora MySQL'e geçiş yapın. Aurora okuma replikalarını raporlama amacıyla kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Microsoft SOL Sunucusu için Amazon RDS'ye geçiş yapın. Raporlama amacıyla okuma kopyalarını kullanın
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #651

Bir şirket büyük miktarda görüntü dosyasını bir Amazon S3 klasöründe saklıyor. Görüntülerin ilk 180 gün boyunca kullanıma hazır olması gerekir. Görüntülere önümüzdeki 180 gün boyunca nadiren erişilir. 360 gün sonra görüntülerin arşivlenmesi gerekir ancak talep üzerine anında kullanıma sunulmalıdır. 5 yıl sonra görüntülere yalnızca denetçiler erişebilir. Denetleyicilerin görüntüleri 12 saat içinde alabilmeleri gerekir. Bu işlem sırasında görüntüler kaybolamaz. Bir geliştirici ilk 180 gün boyunca S3 Standart depolama alanını kullanacaktır. Geliştiricinin bir S3 Yaşam Döngüsü kuralı yapılandırması gerekiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Nesneleri 180 gün sonra S3 Tek Bölge-Sık Olmayan Erişime (S3 Tek Bölge-IA) geçirin. 360 gün sonra S3 Glacier Anında Erişim ve 5 yıl sonra S3 Glacier Deep Archive.

B. Nesneleri 180 gün sonra S3 Tek Bölge-Sık Olmayan Erişime (S3 Tek Bölge-IA) geçirin. 360 gün sonra S3 Glacier Esnek Erişim ve 5 yıl sonra S3 Glacier Deep Archive.

C. Nesneleri 180 gün sonra S3 Standard-Infrequent Access'e (S3 Standard-IA), 360 gün sonra S3 Glacier Instant Retrieval'a ve 5 yıl sonra S3 Glacier Deep Archive'a geçirin.

D. Nesneleri 180 gün sonra S3 Standard-Infrequent Access'e (S3 Standard-IA), 360 gün sonra S3 Glacier Esnek Erişime ve 5 yıl sonra S3 Glacier Deep Archive'a geçirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Nesneleri 180 gün sonra S3 Standard-Infrequent Access'e (S3 Standard-IA), 360 gün sonra S3 Glacier Instant Retrieval'a ve 5 yıl sonra S3 Glacier Deep Archive'a geçirin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #652

Bir şirketin her gün 6 saat çalışan büyük bir veri iş yükü vardır. Süreç devam ederken şirket hiçbir veriyi kaybedemez. Bir çözüm mimarı, bu kritik veri iş yükünü desteklemek için bir Amazon EMR kümesi yapılandırması tasarlıyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İsteğe Bağlı Bulut Sunucularındaki birincil düğümü ve çekirdek düğümleri ve Spot Bulut Sunucularındaki görev düğümlerini çalıştıran uzun süre çalışan bir küme yapılandırın.

B. İsteğe Bağlı Bulut Sunucularındaki birincil düğümü ve çekirdek düğümleri ve Spot Bulut Sunucularındaki görev düğümlerini çalıştıran geçici bir küme yapılandırın.

C. İsteğe Bağlı Bulut Sunucusundaki birincil düğümü ve Spot Bulut Sunucularındaki çekirdek düğümleri ve görev düğümlerini çalıştıran geçici bir küme yapılandırın.

D. İsteğe Bağlı Bulut Sunucusundaki birincil düğümü, Spot Bulut Sunucularındaki çekirdek düğümleri ve Spot Bulut Sunucularındaki görev düğümlerini çalıştıran uzun süre çalışan bir küme yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İsteğe Bağlı Bulut Sunucularındaki birincil düğümü ve çekirdek düğümleri ve Spot Bulut Sunucularındaki görev düğümlerini çalıştıran geçici bir küme yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru #653

Bir şirket, kullanıcıları maliyet merkezleriyle eşleştiren bir Amazon RDS veritabanına sahiptir. Şirketin AWS Organizasyonlarındaki bir kuruluşta hesapları var. Şirketin, kuruluştaki belirli bir AWS hesabında oluşturulan tüm kaynakları etiketleyecek bir çözüme ihtiyacı var. Çözüm, her kaynağı, kaynağı oluşturan kullanıcının maliyet merkezi kimliğiyle etiketlemelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Belirli AWS hesabını, yönetim hesabından Kuruluşlar'daki yeni bir kuruluş birimine (OU) taşıyın. Kaynaklar oluşturulmadan önce mevcut tüm kaynakların doğru maliyet merkezi etiketine sahip olmasını gerektiren bir hizmet kontrol ilkesi (SCP) oluşturun. SCP'yi yeni kuruluş birimine uygulayın.

B. Lambda işlevi RDS veritabanından uygun maliyet merkezini aradıktan sonra kaynakları etiketlemek için bir AWS Lambda işlevi oluşturun. Lambda işlevini çağırmak için AWS CloudTrail olaylarına tepki veren bir Amazon EventBridge kuralı yapılandırın.

C. Bir AWS Lambda işlevini dağıtmak için bir AWS CloudFormation yığını oluşturun. RDS veritabanından uygun maliyet merkezini aramak ve kaynakları etiketlemek için Lambda işlevini yapılandırın. CloudFormation yığınını çağırmak için bir Amazon EventBridge planlanmış kuralı oluşturun.

D. Kaynakları varsayılan bir değerle etiketlemek için bir AWS Lambda işlevi oluşturun. Bir kaynakta maliyet merkezi etiketi eksik olduğunda Lambda işlevini çağırmak için AWS CloudTrail olaylarına tepki veren bir Amazon EventBridge kuralı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Lambda işlevi RDS veritabanından uygun maliyet merkezini aradıktan sonra kaynakları etiketlemek için bir AWS Lambda işlevi oluşturun. Lambda işlevini çağırmak için AWS CloudTrail olaylarına tepki veren bir Amazon EventBridge kuralı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #654

Bir şirket yakın zamanda web uygulamasını AWS Cloud'a taşıdı. Şirket, uygulamayı barındırmak amacıyla birden fazla işlemi çalıştırmak için bir Amazon EC2 örneğini kullanıyor. Süreçler, statik içerik sunan bir Apache web sunucusunu içerir. Apache web sunucusu, kullanıcı oturumları için yerel Redis sunucusunu kullanan bir PHP uygulamasına istekte bulunur. Şirket, mimariyi yüksek oranda kullanılabilir olacak ve AWS tarafından yönetilen çözümleri kullanacak şekilde yeniden tasarlamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Statik içeriği ve PHP uygulamasını barındırmak için AWS Elastic Beanstalk'ı kullanın. Elastic Beanstalk'ı EC2 örneğini genel bir alt ağa dağıtacak şekilde yapılandırın. Genel bir IP adresi atayın.

B. Statik içeriği ve PHP uygulamasını barındırmak için AWS Lambda'yı kullanın. Lambda işlevine yönelik istekleri proxy olarak göndermek için bir Amazon API Gateway REST API kullanın. Etki alanı adına yanıt vermek için API Ağ Geçidi CORS yapılandırmasını ayarlayın. Oturum bilgilerini işleyecek şekilde Amazon ElastiCache for Redis'i yapılandırın.

C. Arka uç kodunu EC2 örneğinde tutun. Multi-AZ'nin etkin olduğu bir Amazon ElastiCache for Redis kümesi oluşturun. Redis kümesi için ElastiCache'i küme modunda yapılandırın. Ön uç kaynaklarını Amazon S3'e kopyalayın. EC2 örneğine referans verecek şekilde arka uç kodunu yapılandırın.

D. Statik içeriği barındıracak şekilde yapılandırılmış bir S3 klasörüne Amazon S3 uç noktasıyla bir Amazon CloudFront dağıtımı yapılandırın. PHP uygulaması için AWS Fargate görevlerini çalıştıran bir Amazon Elastic Container Service (Amazon ECS) hizmetini hedefleyen bir Application Load Balancer yapılandırın. PHP uygulamasını, birden fazla Erişilebilirlik Alanında çalışan bir Amazon ElastiCache for Redis kümesini kullanacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Statik içeriği barındıracak şekilde yapılandırılmış bir S3 klasörüne Amazon S3 uç noktasıyla bir Amazon CloudFront dağıtımı yapılandırın. PHP uygulaması için AWS Fargate görevlerini çalıştıran bir Amazon Elastic Container Service (Amazon ECS) hizmetini hedefleyen bir Application Load Balancer yapılandırın. PHP uygulamasını, birden fazla Erişilebilirlik Alanında çalışan bir Amazon ElastiCache for Redis kümesini kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #655

Bir şirket, hedef grubu olan bir Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor. Şirket, uygulamayı daha iyi bir kullanıcı deneyimi için oturum benzeşimiyle (yapışkan oturumlar) çalışacak şekilde tasarladı. Uygulamanın uç nokta olarak internet üzerinden herkese açık olması gerekir. Ek güvenlik için uç noktaya bir WAF uygulanmalıdır. Oturum benzeşimi (yapışkan oturumlar) uç noktada yapılandırılmalıdır. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Genel bir Ağ Yük Dengeleyici oluşturun. Uygulama hedef grubunu belirtin.

B. Ağ Geçidi Yük Dengeleyicisi oluşturun. Uygulama hedef grubunu belirtin.

C. Genel bir Application Load Balancer oluşturun. Uygulama hedef grubunu belirtin.

D. İkinci bir hedef grup oluşturun. EC2 bulut sunucularına Elastik IP adresleri ekleyin.

E. AWS WAF'ta bir web ACL oluşturun. Web ACL'yi uç noktayla ilişkilendirin

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Genel bir Uygulama Yük Dengeleyici oluşturun. Uygulama hedef grubunu belirtin. AWS WAF'ta bir web ACL oluşturun. Web ACL'yi uç noktayla ilişkilendirin
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #656

Bir şirket, tarihi olayların görsellerini saklayan bir web sitesi işletiyor. Web sitesi kullanıcılarının, görseldeki olayın meydana geldiği yıla göre görselleri arama ve görüntüleme yeteneğine ihtiyacı vardır. Ortalama olarak kullanıcılar her görseli yılda yalnızca bir veya iki kez talep ediyor. Şirket, görüntüleri depolamak ve kullanıcılara sunmak için yüksek düzeyde kullanılabilir bir çözüm istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Görüntüleri Amazon Elastic Block Store'da (Amazon EBS) saklayın. Amazon EC2'de çalışan bir web sunucusu kullanın.

B. Görüntüleri Amazon Elastic File System'de (Amazon EFS) saklayın. Amazon EC2'de çalışan bir web sunucusu kullanın.

C. Görüntüleri Amazon S3 Standard'ta saklayın. Statik bir web sitesi kullanarak görüntüleri doğrudan sunmak için S3 Standard'ı kullanın.

D. Görüntüleri Amazon S3 Standard-Infrequent Access'te (S3 Standard-IA) saklayın. Statik bir web sitesi kullanarak görüntüleri doğrudan sunmak için S3 Standard-IA'yı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Görüntüleri Amazon S3 Standard-Infrequent Access'te (S3 Standard-IA) depolayın. Statik bir web sitesi kullanarak görüntüleri doğrudan sunmak için S3 Standard-IA'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru #657

Bir şirketin, AWS Kuruluşlarındaki bir kuruluşta, farklı iş birimlerinin kullandığı birden fazla AWS hesabı vardır. Şirketin dünya çapında birden fazla ofisi bulunmaktadır. Şirketin, yeni ofis CIDR aralıklarına izin vermek veya kuruluş genelinde eski CIDR aralıklarını kaldırmak için güvenlik grubu kurallarını güncellemesi gerekiyor. Şirket, CIDR aralıklarının güncellenmesinin gerektirdiği yönetim yükünü en aza indirmek için güvenlik grubu kurallarının yönetimini merkezileştirmek istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Kuruluşun yönetim hesabında VPC güvenlik grupları oluşturun. CIDR aralığı güncellemesi gerektiğinde güvenlik gruplarını güncelleyin.

B. CIDR'lerin listesini içeren bir VPC müşterisi tarafından yönetilen önek listesi oluşturun. Önek listesini kuruluş genelinde paylaşmak için AWS Resource Access Manager'ı (AWS RAM) kullanın. Kuruluş genelindeki güvenlik gruplarında önek listesini kullanın.

C. AWS tarafından yönetilen bir önek listesi oluşturun. Kuruluş genelinde güvenlik grubu güncellemesini zorunlu kılmak için bir AWS Security Hub politikası kullanın. CIDR aralıkları değiştiğinde önek listesini otomatik olarak güncellemek için bir AWS Lambda işlevini kullanın.

D. Merkezi bir yönetim AWS hesabında güvenlik grupları oluşturun. Kuruluşun tamamı için bir AWS Firewall Manager ortak güvenlik grubu ilkesi oluşturun. Daha önce oluşturulan güvenlik gruplarını politikada birincil gruplar olarak seçin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** CIDR'lerin listesini içeren bir VPC müşterisi tarafından yönetilen önek listesi oluşturun. Önek listesini kuruluş genelinde paylaşmak için AWS Resource Access Manager'ı (AWS RAM) kullanın. Kuruluş genelindeki güvenlik gruplarında önek listesini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #658

Bir şirket, yüksek performanslı bilgi işlem (HPC) iş yüklerine dosya paylaşımları sağlamak için şirket içi ağa bağlı depolama (NAS) sistemi kullanıyor. Şirket, gecikmeye duyarlı HPC iş yüklerini ve depolama alanını AWS Cloud'a taşımak istiyor. Şirketin dosya sisteminden NFS ve SMB çoklu protokol erişimini sağlayabilmesi gerekiyor. Hangi çözüm bu gereksinimleri EN AZ gecikmeyle karşılayacak? (İki tane seçin.)

A. İşlem için optimize edilmiş EC2 bulut sunucularını bir küme yerleştirme grubuna dağıtın.

B. İşlem için optimize edilmiş EC2 bulut sunucularını bir bölüm yerleştirme grubuna dağıtın.

C. EC2 bulut sunucularını Amazon FSx for Lustre dosya sistemine ekleyin.

D. EC2 bulut sunucularını Amazon FSx for OpenZFS dosya sistemine ekleyin.

E. EC2 bulut sunucularını bir Amazon FSx for NetApp ONTAP dosya sistemine ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** İşlem için optimize edilmiş EC2 bulut sunucularını bir küme yerleştirme grubuna dağıtın. EC2 bulut sunucularını bir Amazon FSx for NetApp ONTAP dosya sistemine ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Soru #659

Bir şirket veri merkezinin yerini değiştiriyor ve 50 TB veriyi 2 hafta içinde güvenli bir şekilde AWS'ye aktarmak istiyor. Mevcut veri merkezinin AWS'ye Siteden Siteye VPN bağlantısı %90 oranında kullanılıyor. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi AWS hizmetini kullanmalıdır?

A. VPC uç noktasıyla AWS DataSync

B. AWS Doğrudan Bağlantı

C. AWS Snowball Edge Depolama Optimize Edildi

D. AWS Depolama Ağ Geçidi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Snowball Edge Depolama Optimize Edildi
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #660

Bir şirket, Otomatik Ölçeklendirme grubundaki Amazon EC2 İsteğe Bağlı Bulut Sunucularında bir uygulamayı barındırıyor. Uygulamanın yoğun olduğu saatler her gün aynı saatte gerçekleşir. Uygulama kullanıcıları yoğun saatlerin başında uygulama performansının yavaş olduğunu bildiriyor. Uygulama yoğun saatlerin başlamasından 2-3 saat sonra normal olarak çalışır. Şirket, uygulamanın yoğun saatlerin başlangıcında düzgün çalıştığından emin olmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Trafiği örneklere doğru şekilde dağıtmak için bir Application Load Balancer yapılandırın.

B. Bellek kullanımına dayalı olarak yeni örnekleri başlatmak üzere Otomatik Ölçeklendirme grubu için dinamik bir ölçeklendirme ilkesi yapılandırın.

C. Otomatik Ölçeklendirme grubunun CPU kullanımına dayalı olarak yeni örnekler başlatması için dinamik bir ölçeklendirme ilkesi yapılandırın.

D. Otomatik Ölçeklendirme grubunun yeni örnekleri yoğun saatlerden önce başlatması için planlanmış bir ölçeklendirme ilkesi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunun yeni örnekleri yoğun saatlerden önce başlatması için zamanlanmış bir ölçeklendirme ilkesi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #661

Bir şirket, AWS'de şirketin Amazon RDS veritabanına bağlanan uygulamaları çalıştırıyor. Başvurular hafta sonları ve yılın yoğun zamanlarında ölçeklenmektedir. Şirket, veritabanına bağlanan uygulamaları için veritabanını daha etkili bir şekilde ölçeklendirmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon DynamoDB'yi, veritabanı için bir hedef grup yapılandırmasıyla bağlantı havuzu oluşturmayla birlikte kullanın. Uygulamaları DynamoDB uç noktasını kullanacak şekilde değiştirin.

B. Veritabanı için bir hedef grupla Amazon RDS Proxy'yi kullanın. Uygulamaları RDS Proxy uç noktasını kullanacak şekilde değiştirin.

C. Veritabanına aracı olarak Amazon EC2 üzerinde çalışan özel bir proxy kullanın. Özel proxy uç noktasını kullanacak uygulamaları değiştirin.

D. Veritabanına yönelik bir hedef grup yapılandırmasıyla bağlantı havuzu oluşturmak için AWS Lambda işlevini kullanın. Lambda işlevini kullanacak uygulamaları değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanı için bir hedef grupla Amazon RDS Proxy'yi kullanın. Uygulamaları RDS Proxy uç noktasını kullanacak şekilde değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #662

Bir şirket, AWS maliyetlerini izlemek için AWS Cost Explorer'ı kullanıyor. Şirket, Amazon Elastic Block Store (Amazon EBS) depolama ve anlık görüntü maliyetlerinin her ay arttığını fark ediyor. Ancak şirket her ay ek EBS depolama alanı satın almıyor. Şirket, mevcut depolama kullanımına ilişkin aylık maliyetleri optimize etmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon EBS'nin depolama kullanımını izlemek için Amazon CloudWatch Logs'daki günlükleri kullanın. EBS birimlerinin boyutunu azaltmak için Amazon EBS Elastic Volumes'u kullanın.

B. Alan kullanımını izlemek için özel bir komut dosyası kullanın. EBS birimlerinin boyutunu azaltmak için Amazon EBS Elastic Volumes'u kullanın.

C. Anlık görüntü maliyetlerini azaltmak için süresi dolmuş ve kullanılmamış tüm anlık görüntüleri silin.

D. Gerekli olmayan tüm anlık görüntüleri silin. Anlık yedekleri şirketin anlık yedek politikası gereksinimlerine göre oluşturmak ve yönetmek için Amazon Data Lifecycle Manager'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Gerekli olmayan tüm anlık görüntüleri silin. Anlık yedekleri şirketin anlık yedek politikası gereksinimlerine göre oluşturmak ve yönetmek için Amazon Data Lifecycle Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #663

Bir şirket AWS üzerinde yeni bir uygulama geliştiriyor. Uygulama, bir Amazon Elastic Container Service (Amazon ECS) kümesinden, uygulamaya yönelik varlıkları içeren bir Amazon S3 klasöründen ve uygulamaya ilişkin veri kümesini içeren bir Amazon RDS for MySQL veritabanından oluşur. Veri kümesi hassas bilgiler içeriyor. Şirket, RDS for MySQL veritabanındaki verilere ve S3 klasöründeki verilere yalnızca ECS kümesinin erişebildiğinden emin olmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Hem S3 klasörünü hem de RDS for MySQL veritabanını şifrelemek için yeni bir AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtar oluşturun. KMS anahtar ilkesinin, ECS görev yürütme rolü için şifreleme ve şifre çözme izinlerini içerdiğinden emin olun.

B. Hem S3 klasörünü hem de RDS for MySQL veritabanını şifrelemek için bir AWS Key Management Service (AWS KMS) AWS yönetilen anahtarı oluşturun. S3 grup ilkesinin, kullanıcı olarak ECS görev yürütme rolünü belirttiğinden emin olun.

C. ECS görev yürütme rolüne paket erişimini kısıtlayan bir S3 klasör ilkesi oluşturun. MySQL için Amazon RDS'ye yönelik bir VPC uç noktası oluşturun. Yalnızca ECS kümesinin görev oluşturacağı alt ağlardan erişime izin vermek için RDS for MySQL güvenlik grubunu güncelleyin.

D. Amazon RDS for MySQL için bir VPC uç noktası oluşturun. Yalnızca ECS kümesinin görev oluşturacağı alt ağlardan erişime izin vermek için MySQL için RDS güvenlik grubunu güncelleyin. Amazon S3 için bir VPC uç noktası oluşturun. Yalnızca S3 VPC uç noktasından erişime izin vermek için S3 paket politikasını güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Hem S3 klasörünü hem de RDS for MySQL veritabanını şifrelemek için yeni bir AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtar oluşturun. KMS anahtar ilkesinin, ECS görev yürütme rolü için şifreleme ve şifre çözme izinlerini içerdiğinden emin olun.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #664

Bir şirketin kendi bünyesinde çalışan bir web uygulaması vardır. Uygulama yoğun saatlerde gecikme sorunları yaşıyor. Gecikme sorunları ayda iki kez ortaya çıkar. Gecikme sorununun başlangıcında uygulamanın CPU kullanımı hemen normal miktarının 10 katına çıkar. Şirket, gecikmeyi iyileştirmek için uygulamayı AWS'ye taşımak istiyor. Şirket ayrıca uygulama talebi arttığında uygulamayı otomatik olarak ölçeklendirmek istiyor. Şirket, uygulama dağıtımı için AWS Elastic Beanstalk'ı kullanacak. Bu gereksinimleri hangi çözüm karşılayacak?

A. Sınırsız modda artırılabilir performans örneklerini kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Ortamı isteklere göre ölçeklenecek şekilde yapılandırın.

B. İşlem için optimize edilmiş örnekleri kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Ortamı isteklere göre ölçeklenecek şekilde yapılandırın.

C. İşlem için optimize edilmiş örnekleri kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Ortamı bir zamanlamaya göre ölçeklenecek şekilde yapılandırın.

D. Arttırılabilir performans örneklerini sınırsız modda kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Ortamı, tahmine dayalı ölçümlere göre ölçeklenecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Arttırılabilir performans örneklerini sınırsız modda kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Ortamı isteklere göre ölçeklenecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #665

Bir şirketin dünyanın her yerinde müşterileri vardır. Şirket, sistemlerini ve ağ altyapısını güvence altına almak için otomasyonu kullanmak istiyor. Şirketin güvenlik ekibi altyapıdaki tüm artımlı değişiklikleri izleyebilmeli ve denetleyebilmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Altyapıyı kurmak için AWS Organizasyonlarını kullanın. Değişiklikleri izlemek için AWS Config'i kullanın.

B. Altyapıyı kurmak için AWS CloudFormation'ı kullanın. Değişiklikleri izlemek için AWS Config'i kullanın.

C. Altyapıyı kurmak için AWS Organizasyonlarını kullanın. Değişiklikleri izlemek için AWS Service Catalog'u kullanın.

D. Altyapıyı kurmak için AWS CloudFormation'ı kullanın. Değişiklikleri izlemek için AWS Service Catalog'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Altyapıyı kurmak için AWS CloudFormation'ı kullanın. Değişiklikleri izlemek için AWS Config'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #666

Yeni kurulan bir şirket, müşterileri için bir Amazon EC2 örneğinde bir web sitesi barındırıyor. Web sitesi durum bilgisi olmayan bir Python uygulamasından ve bir MySQL veritabanından oluşur. Web sitesi yalnızca küçük miktarda trafiğe hizmet ediyor. Şirket, örneğin güvenilirliği konusunda endişeli ve yüksek düzeyde kullanılabilir bir mimariye geçiş yapması gerekiyor. Şirket başvuru kodunu değiştiremez. Bir çözüm mimarının web sitesinde yüksek kullanılabilirlik elde etmek için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. Kullanılan her Erişilebilirlik Alanında bir internet ağ geçidi sağlayın.

B. Veritabanını Amazon RDS for MySQL Multi-AZ veritabanı bulut sunucusuna taşıyın.

C. Veritabanını Amazon DynamoDB'ye taşıyın ve DynamoDB otomatik ölçeklendirmeyi etkinleştirin.

D. Veritabanı verilerini birden fazla EC2 bulut sunucusunda senkronize etmek için AWS DataSync'i kullanın.

E. Trafiği, iki Erişilebilirlik Alanına dağıtılan EC2 bulut sunucularının Otomatik Ölçeklendirme grubuna dağıtmak için bir Application Load Balancer oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Veritabanını Amazon RDS for MySQL Multi-AZ veritabanı bulut sunucusuna taşıyın. Trafiği, iki Erişilebilirlik Alanına dağıtılan EC2 bulut sunucularının Otomatik Ölçeklendirme grubuna dağıtmak için bir Application Load Balancer oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #667

Bir şirket, çok yıllı bir geçiş projesi sırasında verilerini ve uygulamalarını AWS'ye taşıyor. Şirket, Amazon S3'teki verilere şirketin AWS Bölgesinden ve şirket içi konumundan güvenli bir şekilde erişmek istiyor. Veriler internet üzerinden geçmemelidir. Şirket, Bölgesi ile şirket içi konumu arasında bir AWS Direct Connect bağlantısı kurdu. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 için ağ geçidi uç noktaları oluşturun. Bölgeden ve şirket içi konumdan verilere güvenli bir şekilde erişmek için ağ geçidi uç noktalarını kullanın.

B. Amazon S3'e Bölgeden ve şirket içi konumdan güvenli bir şekilde erişmek için AWS Transit Gateway'de bir ağ geçidi oluşturun.

C. Amazon S3 için arayüz uç noktaları oluşturun. Bölgeden ve şirket içi konumdan verilere güvenli bir şekilde erişmek için arayüz uç noktalarını kullanın.

D. Bölgeden ve şirket içi konumdan verilere güvenli bir şekilde erişmek için bir AWS Key Management Service (AWS KMS) anahtarı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon S3 için arayüz uç noktaları oluşturun. Bölgeden ve şirket içi konumdan verilere güvenli bir şekilde erişmek için arayüz uç noktalarını kullanın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru #668

Bir şirket AWS Organizasyonlarında yeni bir organizasyon oluşturdu. Kuruluşun şirketin geliştirme ekipleri için birden fazla hesabı var. Geliştirme ekibi üyeleri, hesaplara erişmek için AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kullanır. Şirketin uygulamalarının her biri için, geliştirme ekipleri, oluşturulan kaynakları etiketlemek amacıyla önceden tanımlanmış bir uygulama adı kullanmalıdır. Bir çözüm mimarının, geliştirme ekibine yalnızca uygulama ad etiketinin onaylanmış bir değere sahip olması durumunda kaynak oluşturma olanağı veren bir çözüm tasarlaması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Oluşturulacak kaynaklar için uygulama adı etiketinin belirtilmesini gerektiren koşullu İzin Verme politikasına sahip bir IAM grubu oluşturun.

B. Uygulama adı etiketine sahip herhangi bir kaynak için Reddetme ilkesine sahip bir hesaplar arası rol oluşturun.

C. Etiketlerin tüm hesaplardaki tüm kaynaklara uygulandığını doğrulamak için AWS Kaynak Gruplarında bir kaynak grubu oluşturun.

D. Kuruluşlarda, izin verilen uygulama adlarının listesini içeren bir etiket ilkesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İzin verilen uygulama adlarının listesini içeren Kuruluşlarda bir etiket ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #669

Bir şirket veritabanlarını PostgreSQL için Amazon RDS'de çalıştırıyor. Şirket, ana kullanıcı şifresini 30 günde bir değiştirerek yönetmek için güvenli bir çözüm istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

C. Şifreyi 30 günde bir değiştirecek özel bir AWS Lambda işlevi planlamak için Amazon EventBridge'i kullanın.

B. Parolayı değiştirmek için AWS CLI'deki change-db-instance komutunu kullanın.

C. Parola rotasyonunu otomatikleştirmek için AWS Secrets Manager'ı Amazon RDS for PostgreSQL ile entegre edin.

D. Parola rotasyonunu otomatikleştirmek için AWS Systems Manager Parameter Store'u Amazon RDS for PostgreSQL ile entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Parola rotasyonunu otomatikleştirmek için AWS Secrets Manager'ı Amazon RDS for PostgreSQL ile entegre edin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #670

Bir şirket, Amazon DynamoDB tablosunu kullanan bir uygulama üzerinde testler gerçekleştiriyor. Testler haftada bir kez 4 saat yapılır. Şirket, testler sırasında uygulamanın tabloya saniyede kaç okuma ve yazma işlemi gerçekleştirdiğini biliyor. Şirket şu anda DynamoDB'yi başka herhangi bir kullanım durumu için kullanmamaktadır. Bir çözüm mimarının tablonun maliyetlerini optimize etmesi gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. İsteğe bağlı modu seçin. Okuma ve yazma kapasitesi birimlerini uygun şekilde güncelleyin.

B. Hazırlama modunu seçin. Okuma ve yazma kapasitesi birimlerini uygun şekilde güncelleyin.

C. DynamoDB'nin ayrılmış kapasitesini 1 yıllık bir süre için satın alın.

D. DynamoDB'nin ayrılmış kapasitesini 3 yıllık bir dönem için satın alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Sağlanan modu seçin. Okuma ve yazma kapasitesi birimlerini uygun şekilde güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #671

Bir şirket, uygulamalarını Amazon EC2 bulut sunucularında çalıştırıyor. Şirket, AWS maliyetlerine ilişkin periyodik mali değerlendirmeler gerçekleştirmektedir. Şirket yakın zamanda olağandışı harcamalar tespit etti. Şirketin olağandışı harcamaları önlemek için bir çözüme ihtiyacı var. Çözüm, maliyetleri izlemeli ve olağandışı harcama durumunda sorumlu paydaşları bilgilendirmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Sıfır harcama bütçesi oluşturmak için bir AWS Bütçe şablonu kullanın.

B. AWS Faturalandırma ve Maliyet Yönetimi konsolunda bir AWS Maliyet Anormalliği Tespiti izleyicisi oluşturun.

C. Mevcut çalışan iş yükü fiyatlandırma ayrıntıları için AWS Fiyatlandırma Hesaplayıcı tahminleri oluşturun.

D. Maliyetleri izlemek ve olağandışı harcamaları belirlemek için Amazon CloudWatch'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Faturalandırma ve Maliyet Yönetimi konsolunda bir AWS Maliyet Anormalliği Tespiti izleyicisi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #672

Bir pazarlama şirketi, bir pazarlama kampanyasından Amazon S3'te büyük miktarda yeni tıklama akışı verisi alıyor. Şirketin Amazon S3'teki tıklama akışı verilerini hızlı bir şekilde analiz etmesi gerekiyor. Daha sonra şirketin, verileri veri hattında daha fazla işleyip işlemeyeceğini belirlemesi gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Spark kataloğunda harici tablolar oluşturun. Verileri sorgulamak için AWS Glue'da işleri yapılandırın.

B. Verileri taramak için bir AWS Glue tarayıcısını yapılandırın. Verileri sorgulamak için Amazon Athena'yı yapılandırın.

C. Hive meta deposunda harici tablolar oluşturun. Verileri sorgulamak için Amazon EMR'de Spark işlerini yapılandırın.

D. Verileri taramak için bir AWS Glue tarayıcısını yapılandırın. Verileri sorgulamak için SQL kullanacak şekilde Amazon Kinesis Data Analytics'i yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri taramak için bir AWS Glue tarayıcısını yapılandırın. Verileri sorgulamak için Amazon Athena'yı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #673

Bir şirket, veri merkezinde bir SMB dosya sunucusu çalıştırıyor. Dosya sunucusu, şirketin sıklıkla eriştiği büyük dosyaları, dosya oluşturma tarihinden itibaren 7 güne kadar saklar. 7 günün sonunda şirketin dosyalara maksimum 24 saat alma süresiyle erişebilmesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

C. 7 günden eski verileri SMB dosya sunucusundan AWS'ye kopyalamak için AWS DataSync'i kullanın.

B. Şirketin depolama alanını artırmak için bir Amazon S3 Dosya Ağ Geçidi oluşturun. Verileri 7 gün sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

C. Şirketin depolama alanını artırmak için bir Amazon FSx Dosya Ağ Geçidi oluşturun. Verileri 7 gün sonra aktarmak için bir Amazon S3 Yaşam Döngüsü politikası oluşturun.

D. Her kullanıcı için Amazon S3'e erişimi yapılandırın. Verileri 7 gün sonra S3 Glacier Esnek Alma'ya geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirketin depolama alanını artırmak için bir Amazon S3 Dosya Ağ Geçidi oluşturun. Verileri 7 gün sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #674

Bir şirket, Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor. Uygulama, Amazon RDS for PostgreSQL veritabanı bulut sunucusunda çalışan bir veritabanı kullanır. Trafik arttığında uygulama yavaş çalışır. Veritabanı, trafiğin yoğun olduğu dönemlerde yoğun bir okuma yüküyle karşılaşır. Bir çözüm mimarının bu performans sorunlarını çözmek için hangi eylemleri gerçekleştirmesi gerekir? (İki tane seçin.)

A. Veritabanı bulut sunucusu için otomatik ölçeklendirmeyi açın.

B. Veritabanı bulut sunucusu için bir okuma kopyası oluşturun. Uygulamayı, okuma trafiğini okuma kopyasına gönderecek şekilde yapılandırın.

C. Veritabanı bulut sunucusunu Multi-AZ Veritabanı bulut sunucusu dağıtımına dönüştürün. Uygulamayı, beklemedeki veritabanı bulut sunucusuna okuma trafiği gönderecek şekilde yapılandırın.

D. Bir Amazon ElastiCache kümesi oluşturun. Uygulamayı, sorgu sonuçlarını ElastiCache kümesinde önbelleğe alacak şekilde yapılandırın.

E. EC2 bulut sunucularının veritabanı bulut sunucusuyla aynı Erişilebilirlik Alanında sağlanmasını sağlamak için Otomatik Ölçeklendirme grubu alt ağlarını yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Veritabanı bulut sunucusu için bir okuma kopyası oluşturun. Uygulamayı, okuma trafiğini okuma kopyasına gönderecek şekilde yapılandırın. Bir Amazon ElastiCache kümesi oluşturun. Uygulamayı, sorgu sonuçlarını ElastiCache kümesinde önbelleğe alacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #675

Bir şirket, bir uygulamayı çalıştırmak için Amazon EC2 bulut sunucularını ve Amazon Elastic Block Store (Amazon EBS) birimlerini kullanıyor. Şirket, uyumluluk gereksinimlerini karşılamak için her gün her EBS biriminin bir anlık görüntüsünü oluşturuyor. Şirket, EBS birim anlık görüntülerinin yanlışlıkla silinmesini önleyen bir mimari uygulamak istiyor. Çözüm, depolama yöneticisi kullanıcısının yönetici haklarını değiştirmemelidir. Hangi çözüm bu gereksinimleri EN AZ idari çabayla karşılayacak?

A. Anlık görüntüleri silme iznine sahip bir IAM rolü oluşturun. Rolü yeni bir EC2 örneğine ekleyin. Anlık görüntüleri silmek için yeni EC2 örneğindeki AWS CLI'yi kullanın.

B. Anlık görüntünün silinmesini reddeden bir IAM politikası oluşturun. İlkeyi depolama yöneticisi kullanıcısına ekleyin.

C. Anlık görüntülere etiketler ekleyin. Etiketleri içeren EBS anlık görüntüleri için Geri Dönüşüm Kutusu'nda saklama kuralları oluşturun.

D. Silmeyi önlemek için EBS anlık görüntülerini kilitleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Silmeyi önlemek için EBS anlık görüntülerini kilitleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #676

Bir şirketin uygulaması, Amazon VPC'de dağıtılan Ağ Yük Dengeleyicilerini, Otomatik Ölçeklendirme gruplarını, Amazon EC2 bulut sunucularını ve veritabanlarını kullanır. Şirket, Amazon VPC'sinde ağ arayüzlerine giden ve ağ arayüzlerinden gelen trafikle ilgili bilgileri neredeyse gerçek zamanlı olarak yakalamak istiyor. Şirket, bilgileri analiz için Amazon OpenSearch Service'e göndermek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon CloudWatch Logs'da bir günlük grubu oluşturun. Günlük verilerini günlük grubuna göndermek için VPC Akış Günlüklerini yapılandırın. Günlükleri günlük grubundan OpenSearch Hizmetine aktarmak için Amazon Kinesis Data Streams'i kullanın.

B. Amazon CloudWatch Logs'ta bir günlük grubu oluşturun. Günlük verilerini günlük grubuna göndermek için VPC Akış Günlüklerini yapılandırın. Günlükleri günlük grubundan OpenSearch Service'e aktarmak için Amazon Kinesis Data Firehose'u kullanın.

C. AWS CloudTrail'de bir iz oluşturun. Günlük verilerini ize göndermek için VPC Akış Günlüklerini yapılandırın. Günlükleri izden OpenSearch Hizmetine aktarmak için Amazon Kinesis Data Streams'i kullanın.

D. AWS CloudTrail'de bir iz oluşturun. Günlük verilerini ize göndermek için VPC Akış Günlüklerini yapılandırın. Günlükleri izden OpenSearch Hizmetine aktarmak için Amazon Kinesis Data Firehose'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon CloudWatch Logs'da bir günlük grubu oluşturun. Günlük verilerini günlük grubuna göndermek için VPC Akış Günlüklerini yapılandırın. Günlükleri günlük grubundan OpenSearch Service'e aktarmak için Amazon Kinesis Data Firehose'u kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru #677

Bir şirket, üretim Amazon Elastic Kubernetes Service (Amazon EKS) kümesinde çalışacak bir uygulama geliştiriyor. EKS kümesi, İsteğe Bağlı Bulut Sunucuları ile sağlanan yönetilen düğüm gruplarına sahiptir. Şirketin geliştirme çalışmaları için özel bir EKS kümesine ihtiyacı var. Şirket, uygulamanın dayanıklılığını test etmek için geliştirme kümesini nadiren kullanacak. EKS kümesinin tüm düğümleri yönetmesi gerekir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Yalnızca Spot Bulut Sunucularını içeren yönetilen bir düğüm grubu oluşturun.

B. İki yönetilen düğüm grubu oluşturun. İsteğe Bağlı Bulut Sunucularıyla bir düğüm grubu sağlayın. İkinci düğüm grubuna Spot Bulut Sunucularını sağlayın.

C. Spot Bulut Sunucularını kullanan başlatma yapılandırmasına sahip bir Otomatik Ölçeklendirme grubu oluşturun. Düğümleri EKS kümesine eklemek için kullanıcı verilerini yapılandırın.

D. Yalnızca İsteğe Bağlı Bulut Sunucularını içeren yönetilen bir düğüm grubu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İki yönetilen düğüm grubu oluşturun. İsteğe Bağlı Bulut Sunucularıyla bir düğüm grubu sağlayın. İkinci düğüm grubuna Spot Bulut Sunucularını sağlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru #678

Bir şirket hassas verileri Amazon S3'te saklıyor. Bir çözüm mimarının bir şifreleme çözümü oluşturması gerekir. Şirketin, kullanıcıların şifrelenmesi gereken veriler için minimum çabayla şifreleme anahtarları oluşturma, döndürme ve devre dışı bırakma yeteneğini tam olarak kontrol etmesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

C. Hassas verileri depolamak için Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) varsayılan sunucu tarafı şifrelemeyi kullanın.

B. AWS Key Management Service'i (AWS KMS) kullanarak müşteri tarafından yönetilen bir anahtar oluşturun. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanarak S3 nesnelerini şifrelemek için yeni anahtarı kullanın.

C. AWS Key Management Service'i (AWS KMS) kullanarak bir AWS tarafından yönetilen anahtar oluşturun. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanarak S3 nesnelerini şifrelemek için yeni anahtarı kullanın.

D. S3 nesnelerini bir Amazon EC2 bulut sunucusuna indirin. Müşteri tarafından yönetilen anahtarları kullanarak nesneleri şifreleyin. Şifrelenmiş nesneleri Amazon S3'e geri yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Key Management Service'i (AWS KMS) kullanarak müşteri tarafından yönetilen bir anahtar oluşturun. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanarak S3 nesnelerini şifrelemek için yeni anahtarı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #679

Bir şirket şirket içi sanal makinelerini (VM'ler) AWS'ye yedeklemek istiyor. Şirketin yedekleme çözümü, şirket içi yedeklemeleri nesneler olarak bir Amazon S3 klasörüne aktarıyor. S3 yedekleri 30 gün boyunca saklanmalı ve 30 gün sonra otomatik olarak silinmelidir. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (Üç tanesini seçin.)

A. S3 Object Lock'un etkin olduğu bir S3 klasörü oluşturun.

B. Nesne sürümü oluşturmanın etkin olduğu bir S3 grubu oluşturun.

C. Nesneler için 30 günlük varsayılan saklama süresini yapılandırın.

D. Nesneleri 30 gün boyunca korumak için bir S3 Yaşam Döngüsü ilkesi yapılandırın.

E. Nesnelerin süresinin 30 gün sonra dolmasını sağlayacak bir S3 Yaşam Döngüsü ilkesi yapılandırın. F. Nesneleri 30 günlük saklama süresiyle etiketlemek için yedekleme çözümünü yapılandırın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C, E`
> - **Önerilen Çözüm:** S3 Object Lock'un etkin olduğu bir S3 grubu oluşturun. Nesneler için 30 günlük varsayılan saklama süresini yapılandırın. Nesnelerin süresinin 30 gün sonra dolmasını sağlayacak bir S3 Yaşam Döngüsü ilkesi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.

---

---

Soru #680

Bir çözüm mimarının, dosyaları bir Amazon S3 klasöründen bir Amazon Elastic File System (Amazon EFS) dosya sistemine ve başka bir S3 klasörüne kopyalaması gerekir. Dosyaların sürekli olarak kopyalanması gerekir. Orijinal S3 klasörüne sürekli olarak yeni dosyalar eklenir. Kopyalanan dosyaların üzerine yalnızca kaynak dosya değiştiğinde yazılmalıdır. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Hem hedef S3 klasörü hem de EFS dosya sistemi için bir AWS DataSync konumu oluşturun. Hedef S3 klasörü ve EFS dosya sistemi için bir görev oluşturun. Aktarım modunu yalnızca değişen verileri aktaracak şekilde ayarlayın.

B. Bir AWS Lambda işlevi oluşturun. Dosya sistemini fonksiyona bağlayın. Amazon S3'te dosyalar oluşturulduğunda ve değiştirildiğinde işlevi çağırmak için bir S3 olay bildirimi ayarlayın. Dosyaları dosya sistemine ve hedef S3 klasörüne kopyalamak için işlevi yapılandırın.

C. Hem hedef S3 klasörü hem de EFS dosya sistemi için bir AWS DataSync konumu oluşturun. Hedef S3 klasörü ve EFS dosya sistemi için bir görev oluşturun. Tüm verileri aktarmak için aktarım modunu ayarlayın.

D. Dosya sistemiyle aynı VPC'de bir Amazon EC2 bulut sunucusu başlatın. Dosya sistemini bağlayın. Kaynak S3 klasöründe değişen tüm nesneleri hedef S3 klasörü ve bağlanan dosya sistemiyle rutin olarak senkronize etmek için bir komut dosyası oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Hem hedef S3 klasörü hem de EFS dosya sistemi için bir AWS DataSync konumu oluşturun. Hedef S3 klasörü ve EFS dosya sistemi için bir görev oluşturun. Aktarım modunu yalnızca değişen verileri aktaracak şekilde ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #681

Bir şirket, Amazon EC2 bulut sunucularını kullanıyor ve verileri Amazon Elastic Block Store (Amazon EBS) birimlerinde depoluyor. Şirket, AWS Key Management Service'i (AWS KMS) kullanarak tüm verilerin kullanımda değilken şifrelendiğinden emin olmalıdır. Şirketin şifreleme anahtarlarının rotasyonunu kontrol edebilmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Müşteri tarafından yönetilen bir anahtar oluşturun. EBS birimlerini şifrelemek için anahtarı kullanın.

B. EBS birimlerini şifrelemek için AWS tarafından yönetilen bir anahtar kullanın. Otomatik anahtar yönlendirmeyi yapılandırmak için tuşunu kullanın.

C. İçe aktarılan anahtar malzemesiyle harici bir KMS anahtarı oluşturun. EBS birimlerini şifrelemek için anahtarı kullanın.

D. EBS birimlerini şifrelemek için AWS'ye ait bir anahtar kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Müşteri tarafından yönetilen bir anahtar oluşturun. EBS birimlerini şifrelemek için anahtarı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #682

Bir şirketin Amazon EC2 bulut sunucularında kullanımda olmayan veri şifrelemeyi zorunlu kılacak bir çözüme ihtiyacı var. Çözüm, uyumlu olmayan kaynakları otomatik olarak tanımlamalı ve bulgulara ilişkin uyumluluk politikalarını uygulamalıdır. Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

C. Kullanıcıların yalnızca şifrelenmiş Amazon Elastic Block Store (Amazon EBS) birimleri oluşturmasına olanak tanıyan bir IAM politikası kullanın. Şifrelenmemiş EBS birimlerinin algılanmasını ve iyileştirilmesini otomatikleştirmek için AWS Config ve AWS Systems Manager'ı kullanın.

B. Şifrelenmiş Amazon Elastic Block Store (Amazon EBS) birimlerine erişimi yönetmek için AWS Key Management Service'i (AWS KMS) kullanın. Şifrelenmemiş EBS birimlerinin algılanmasını ve iyileştirilmesini otomatikleştirmek için AWS Lambda ve Amazon EventBridge'i kullanın.

C. Şifrelenmemiş Amazon Elastic Block Store (Amazon EBS) birimlerini tespit etmek için Amazon Macie'yi kullanın. Mevcut ve yeni EBS birimlerini otomatik olarak şifrelemek için AWS Systems Manager Automation kurallarını kullanın.

D. Şifrelenmemiş Amazon Elastic Block Store (Amazon EBS) birimlerini tespit etmek için Amazon denetçisini kullanın. Mevcut ve yeni EBS birimlerini otomatik olarak şifrelemek için AWS Systems Manager Automation kurallarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kullanıcıların yalnızca şifrelenmiş Amazon Elastic Block Store (Amazon EBS) birimleri oluşturmasına olanak tanıyan bir IAM politikası kullanın. Şifrelenmemiş EBS birimlerinin algılanmasını ve iyileştirilmesini otomatikleştirmek için AWS Config ve AWS Systems Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #683

Bir şirket, çok katmanlı şirket içi uygulamasını AWS'ye taşıyor. Uygulama, tek düğümlü bir MySQL veritabanından ve çok düğümlü bir web katmanından oluşur. Şirket, geçiş sırasında uygulamadaki değişiklikleri en aza indirmelidir. Şirket, geçişten sonra uygulama dayanıklılığını artırmak istiyor. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Web katmanını, Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularına taşıyın.

B. Veritabanını, Network Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularına taşıyın.

C. Veritabanını bir Amazon RDS Multi-AZ dağıtımına taşıyın.

D. Web katmanını bir AWS Lambda işlevine taşıyın.

E. Veritabanını bir Amazon DynamoDB tablosuna taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Web katmanını, Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularına taşıyın. Veritabanını bir Amazon RDS Multi-AZ dağıtımına taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #684

Bir şirket web uygulamalarını şirket içinden AWS'ye taşımak istiyor. Şirket, ab-merkez-1 bölgesine yakın bir konumdadır. Düzenlemeler nedeniyle şirket bazı uygulamalarını eu-central-1'de başlatamıyor. Şirket, milisaniyelik tek haneli gecikme süresine ulaşmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamaları eu-central-1'de dağıtın. Şirketin VPC'sini eu-central-1'den Amazon CloudFront'taki bir uç konuma genişletin.

B. Şirketin VPC'sini eu-central-1'den seçilen Yerel Bölgeye genişleterek uygulamaları AWS Yerel Bölgelerinde dağıtın.

C. Uygulamaları eu-central-1'de dağıtın. Şirketin VPC'sini eu-central-1'den Amazon CloudFront'taki bölgesel uç önbelleklere kadar genişletin.

D. Şirketin VPC'sini eu-central-1'den seçilen Dalga Boyu Bölgesine genişleterek uygulamaları AWS Dalga Boyu Bölgelerinde dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirketin VPC'sini eu-central-1'den seçilen Yerel Bölgeye genişleterek uygulamaları AWS Yerel Bölgelerinde dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
