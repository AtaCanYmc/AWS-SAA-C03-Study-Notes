# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 07

> **Soru Aralığı:** 601 - 700 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #600

Bir şirket, TCP tabanlı bir uygulamayı şirketin VPC'sine taşımayı planlıyor.
Uygulamaya, standart olmayan bir TCP bağlantı noktasındaki bir donanım aygıtı aracılığıyla genel olarak erişilebilir.
şirketin veri merkezi. Bu genel uç nokta saniyede 3 milyona kadar isteği işleyebilir
düşük gecikme süresiyle. Şirket, yeni hedef kitle için de aynı seviyede performans talep ediyor
AWS'de uç nokta.
Bir çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

A. Ağ Yük Dengeleyicisini (NLB) dağıtın. NLB'yi genel erişime açık olacak şekilde yapılandırın
Uygulamanın gerektirdiği TCP bağlantı noktası.

B. Bir Uygulama Yük Dengeleyicisini (ALB) dağıtın. ALB'yi genel erişime açık olacak şekilde yapılandırın
uygulamanın gerektirdiği TCP bağlantı noktası.

C. Uygulamanın bağladığı TCP bağlantı noktasını dinleyen bir Amazon CloudFront dağıtımı dağıtın
gerektirir. Kaynak olarak bir Application Load Balancer kullanın.

D. Uygulamanın kullandığı TCP bağlantı noktasıyla yapılandırılmış bir Amazon API Gateway API dağıtın
gerektirir. İstekleri işlemek için AWS Lambda işlevlerini sağlanan eş zamanlılıkla yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Ağ Yük Dengeleyicisi (NLB) dağıtın. NLB'yi, uygulamanın gerektirdiği TCP bağlantı noktası üzerinden genel olarak erişilebilecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 601
Bir şirket, kritik veritabanını Amazon RDS for PostgreSQL veritabanı bulut sunucusunda çalıştırıyor.
şirket, minimum kesinti süresi ve veri kaybıyla Amazon Aurora PostgreSQL'e geçmek istiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Yeni bir Aurora'yı doldurmak için PostgreSQL Veritabanı bulut sunucusunun RDS veritabanı anlık görüntüsünü oluşturun
PostgreSQL Veritabanı kümesi.

B. PostgreSQL veritabanı bulut sunucusu için RDS'nin bir Aurora okuma kopyasını oluşturun. Aurora'yı tanıtın
yeni bir Aurora PostgreSQL veritabanı kümesine okuma kopyası.

C. Veritabanını bir Aurora PostgreSQL DB kümesine taşımak için Amazon S3'ten veri içe aktarmayı kullanın.

D. RDS for PostgreSQL veritabanını yedeklemek için pg_dump yardımcı programını kullanın. Yedeği bir yere geri yükleyin
yeni Aurora PostgreSQL Veritabanı kümesi.

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

Soru 602
Bir şirketin altyapısı, Amazon'u kullanan yüzlerce Amazon EC2 bulut sunucusundan oluşur
Elastik Blok Mağazası (Amazon EBS) depolama. Bir çözüm mimarı her EC2'nin
örnek bir felaketten sonra kurtarılabilir.
Çözüm mimarı bu gereksinimi EN AZ miktarda maliyetle karşılamak için ne yapmalıdır?
çaba mı?

A. Her EC2 bulut sunucusuna bağlı EBS depolama alanının anlık görüntüsünü alın. Bir AWS oluşturun
EBS depolama alanından yeni EC2 bulut sunucularını başlatmak için CloudFormation şablonu.

B. Her EC2 bulut sunucusuna bağlı EBS depolama alanının anlık görüntüsünü alın. AWS Elastic'i kullanın
Ortamı EC2 şablonuna göre ayarlamak ve EBS depolama alanını eklemek için Beanstalk'ı kullanın.

C. EC2 bulut sunucusu grubunun tamamı için bir yedekleme planı oluşturmak üzere AWS Backup'ı kullanın. AWS'yi kullanın
Birden fazla EC2 bulut sunucusu için geri yükleme sürecini hızlandırmak amacıyla API'yi veya AWS CLI'yi yedekleyin.

D. Her birine bağlı EBS depolama alanının anlık görüntüsünü almak için bir AWS Lambda işlevi oluşturun
EC2 örneğini açın ve Amazon Machine Images'ı (AMI'ler) kopyalayın. Başka bir Lambda işlevi oluşturun
geri yüklemeleri kopyalanan AMI'lerle gerçekleştirin ve EBS depolama alanını ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucularının tamamına yönelik bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. Birden fazla EC2 bulut sunucusunun geri yükleme sürecini hızlandırmak için AWS Backup API'yi veya AWS CLI'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 603
Bir şirket yakın zamanda AWS Cloud'a geçiş yaptı. Şirket, sunucusuz bir çözüm istiyor
yarı yapılandırılmış bir veri kümesinin büyük ölçekli paralel isteğe bağlı işlenmesi. Veriler şunlardan oluşur:
Amazon S3'te depolanan günlükler, medya dosyaları, satış işlemleri ve IoT sensör verileri.
şirket, çözümün veri kümesindeki binlerce öğeyi paralel olarak işlemesini istiyor.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

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

Soru 604
Bir şirket 6 haftada 10 PB veriyi Amazon S3'e taşıyacak. Mevcut veri merkezi bir
İnternete 500 Mbps uplink. Diğer şirket içi uygulamalar yukarı bağlantıyı paylaşır. şirket
Bu tek seferlik geçiş görevi için internet bant genişliğinin %80'ini kullanabilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Verileri Amazon S3'e taşımak ve verileri otomatik olarak doğrulamak için AWS DataSync'i yapılandırın.
veri.

B. Verileri doğrudan Amazon S3'e aktarmak için rsync'i kullanın.

C. Verileri doğrudan Amazon S3'e göndermek için AWS CLI'yi ve birden fazla kopyalama işlemini kullanın.

D. Birden fazla AWS Snowball cihazı sipariş edin. Verileri cihazlara kopyalayın. Cihazları AWS'ye gönderin
Verileri Amazon S3'e kopyalamak için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Birden fazla AWS Snowball cihazı sipariş edin. Verileri cihazlara kopyalayın. Verileri Amazon S3'e kopyalamak için cihazları AWS'ye gönderin.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 605
Bir şirketin birkaç şirket içi İnternet Küçük Bilgisayar Sistemi Arayüzü (ISCSI) vardır
ağ depolama sunucuları. Şirket, bu sunucuların sayısını değiştirerek bu sunucuların sayısını azaltmak istiyor.
AWS Cloud'a. Bir çözüm mimarı, sık kullanılan verilere düşük gecikmeli erişim sağlamalıdır
ve minimum sayıda altyapıyla şirket içi sunuculara olan bağımlılığı azaltın
değişiklikler.
Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru 606
Bir çözüm mimarı, iş kullanıcılarının nesneleri yüklemesine olanak tanıyacak bir uygulama tasarlıyor
Amazon S3'e. Çözümün nesne dayanıklılığını en üst düzeye çıkarması gerekiyor. Nesneler ayrıca kolayca bulunmalıdır
herhangi bir zamanda ve herhangi bir süre boyunca kullanılabilir. Kullanıcılar, içindeki nesnelere sıklıkla erişecektir.
Nesnelerin yüklenmesinden sonraki ilk 30 gün içinde, ancak kullanıcıların bu nesnelere erişme olasılığı çok daha düşüktür.
30 günden eskidir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Nesneleri S3'e geçirmek için tüm nesneleri S3 Yaşam Döngüsü kuralıyla S3 Standard'ta saklayın
30 gün sonra buzul.

B. Nesneleri S3'e geçirmek için tüm nesneleri S3 Yaşam Döngüsü kuralıyla S3 Standard'ta saklayın
30 gün sonra Standart-Sıklık Erişimi (S3 Standart-IA).

C. Nesneleri S3 One'a geçirmek için tüm nesneleri S3 Yaşam Döngüsü kuralıyla S3 Standard'ta saklayın
30 gün sonra Bölge Sık Erişimi (S3 Bir Bölge-IA).

D. Nesneleri bir S3 Yaşam Döngüsü kuralıyla S3 Intelligent-Tiering'de depolayarak nesneleri
30 gün sonra S3 Standart-Sıklık Erişimi (S3 Standart-IA).

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

Soru 607
Bir şirket, iki katmanlı bir uygulamayı şirket içi veri merkezinden AWS'ye geçirdi
Bulut. Veri katmanı, 12 TB Genel veri içeren Amazon RDS for Oracle'ın Multi-AZ dağıtımıdır
Amaçlı SSD Amazon Elastic Block Store (Amazon EBS) depolama. Uygulama tasarlandı
Belgeleri veritabanında ortalama bir değere sahip ikili büyük nesneler (bloblar) olarak işlemek ve depolamak için
belge boyutu 6 MB.
Veritabanı boyutu zamanla büyüyerek performansı düşürdü ve maliyeti artırdı.
depolama. Şirketin veritabanı performansını iyileştirmesi gerekiyor ve bunun için bir çözüme ihtiyacı var.
oldukça kullanılabilir ve dayanıklıdır.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. RDS Veritabanı bulut sunucusu boyutunu azaltın. Depolama kapasitesini 24 TiB'ye yükseltin. Değiştir
depolama tipini Manyetik olarak değiştirin.

B. RDS Veritabanı bulut sunucusu boyutunu artırın. Depolama kapasitesini 24 Ti'ye çıkarın
Tedarik Edilen IOPS'ye yazın.

C. Bir Amazon S3 klasörü oluşturun. Belgeleri S3 klasöründe depolamak için uygulamayı güncelleyin.
Nesne meta verilerini mevcut veritabanında saklayın.

D. Bir Amazon DynamoDB tablosu oluşturun. Uygulamayı DynamoDB'yi kullanacak şekilde güncelleyin. AWS'yi kullanın
Oracle veritabanından DynamoDB'ye veri taşımak için Veritabanı Geçiş Hizmeti (AWS DMS).

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

Soru 608
Bir şirketin 20.000'den fazla perakende satış noktasında konuşlandırılmış müşterilere hizmet veren bir uygulaması var
dünyanın her yerindeki mağaza vitrinleri. Uygulama, arka uç web hizmetlerinden oluşur.
443 numaralı bağlantı noktasında HTTPS üzerinden kullanıma sunulur. Uygulama, 443 numaralı bağlantı noktasının arkasındaki Amazon EC2 bulut sunucularında barındırılır.
bir Uygulama Yük Dengeleyicisi (ALB). Perakende satış yerleri web uygulamasıyla iletişim kurar
halka açık internet üzerinden. Şirket, her perakende satış noktasının IP adresini kaydetmesine izin verir.
perakende satış yeri yerel İSS'si tarafından tahsis edilmiştir.
Şirketin güvenlik ekibi, uygulama uç noktasının güvenliğinin şu şekilde artırılmasını öneriyor:
erişimi yalnızca perakende satış yerleri tarafından kaydedilen IP adresleriyle sınırlandırmak.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS WAF web ACL'sini ALB ile ilişkilendirin. Trafiği filtrelemek için ALB'deki IP kural kümelerini kullanın.
Kayıtlı IP adreslerini içerecek şekilde kuraldaki IP adreslerini güncelleyin.

B. Trafiği kısıtlamak amacıyla ALConfigure güvenlik duvarı kurallarını yönetmek için AWS Firewall Manager'ı dağıtın.
ALKayıtlı IP adreslerini içerecek şekilde güvenlik duvarı kurallarını değiştirin.

C. IP adreslerini bir Amazon DynamoDB tablosunda saklayın. AWS Lambda'yı yapılandırma
Gelen isteklerin kayıtlı IP'den geldiğini doğrulamak için ALB'deki yetkilendirme işlevi
adresler.

D. ALB'nin genel arayüzünü içeren alt ağdaki ağ ACL'sini yapılandırın. Güncelleme
kayıtlı IP adreslerinin her biri için girişlerle birlikte ağ ACL'sindeki giriş kuralları.

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

Soru 609
Bir şirket, AWS Lake Formation'ı kullanarak AWS üzerinde bir veri analizi platformu oluşturuyor.
platform, Amazon S3 ve Amazon RDS gibi farklı kaynaklardan veri alacaktır.
Şirketin hassas içerikli veri bölümlerine erişimi engellemek için güvenli bir çözüme ihtiyacı var
bilgi.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Lake Formation tablolarına erişim izinlerini içeren bir IAM rolü oluşturun.

B. Satır düzeyinde güvenlik ve hücre düzeyinde güvenlik uygulamak için veri filtreleri oluşturun.

C. Göl Oluşumundan önce hassas bilgileri kaldıran bir AWS Lambda işlevi oluşturun
verileri alır.

D. Hassas bilgileri düzenli olarak sorgulayan ve kaldıran bir AWS Lambda işlevi oluşturun
Göl Oluşumu tablolarından.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Satır düzeyinde güvenlik ve hücre düzeyinde güvenlik uygulamak için veri filtreleri oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 610
Bir şirket, VPC'de çalışan Amazon EC2 bulut sunucularını dağıtıyor. EC2 bulut sunucularının yük kaynağı
Verilerin gelecekte işlenebilmesi için verileri Amazon S3 klasörlerine aktarın. Göre
uyumluluk yasalarına göre veriler halka açık internet üzerinden iletilmemelidir. Sunucular
Şirketin şirket içi veri merkezi, üzerinde çalışan bir uygulamanın çıktısını tüketecektir.
EC2 örnekleri.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EC2 için bir arayüz VPC uç noktası dağıtın. AWS Siteden Siteye VPN oluşturun
şirket ile VPC arasındaki bağlantı.

B. Amazon S3 için bir ağ geçidi VPC uç noktası dağıtın. AWS Direct Connect bağlantısı kurun
şirket içi ağ ile VPC arasında.

C. VPC'den S3 klasörlerine bir AWS Transit Gateway bağlantısı kurun. Bir AWS oluşturun
Şirket ile VPC arasında Siteden Siteye VPN bağlantısı.

D. NAT ağ geçitlerine giden yolları olan proxy EC2 örneklerini ayarlayın. Proxy EC2'yi yapılandırma
S3 verilerini almak ve uygulama örneklerini beslemek için örnekler.

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

Soru 611
Bir şirketin REST tabanlı arayüze sahip, veri alınmasını sağlayan bir uygulaması var.
üçüncü taraf bir satıcıdan neredeyse gerçek zamanlı. Uygulama, alındıktan sonra verileri işler ve saklar.
Daha fazla analiz için veriler. Uygulama Amazon EC2 bulut sunucularında çalışıyor.
Üçüncü taraf satıcı, verileri gönderirken birçok 503 Hizmet Kullanılamıyor Hatası aldı
Uygulama. Veri hacmi arttığında işlem kapasitesi maksimum sınırına ulaşır
ve uygulama tüm istekleri işleyemiyor.
Bir çözüm mimarı daha ölçeklenebilir bir çözüm sağlamak için hangi tasarımı önermelidir?

A. Verileri almak için Amazon Kinesis Data Streams'i kullanın. AWS Lambda'yı kullanarak verileri işleyin
işlevler.

B. Mevcut uygulamanın üstünde Amazon API Gateway'i kullanın. Kotalı bir kullanım planı oluşturun
üçüncü taraf satıcı için sınır.

C. Verileri almak için Amazon Simple Notification Service'i (Amazon SNS) kullanın. EC2'yi koyun
Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki örnekler.

D. Uygulamayı bir kap olarak yeniden paketleyin. Uygulamayı Amazon Elastic kullanarak dağıtın
Otomatik Ölçeklendirme grubuyla EC2 başlatma türünü kullanan Konteyner Hizmeti (Amazon ECS).

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

Soru 612
Bir şirketin özel bir alt ağdaki Amazon EC2 bulut sunucularında çalışan bir uygulaması var.
uygulamanın bir Amazon S3 klasöründeki hassas bilgileri işlemesi gerekiyor. Uygulama
S3 paketine bağlanmak için interneti kullanmamalısınız.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir internet ağ geçidini yapılandırın. İnternetten erişime izin vermek için S3 paket politikasını güncelleyin
ağ geçidi. Yeni internet ağ geçidini kullanmak için uygulamayı güncelleyin.

B. Bir VPN bağlantısı yapılandırın. VPN'den erişime izin vermek için S3 grup politikasını güncelleyin
bağlantı. Yeni VPN bağlantısını kullanmak için uygulamayı güncelleyin.

C. Bir NAT ağ geçidini yapılandırın. NAT ağ geçidinden erişime izin vermek için S3 paket politikasını güncelleyin.
Yeni NAT ağ geçidini kullanmak için uygulamayı güncelleyin.

D. Bir VPC uç noktası yapılandırın. VPC uç noktasından erişime izin vermek için S3 paket politikasını güncelleyin.
Yeni VPC uç noktasını kullanacak şekilde uygulamayı güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir VPC uç noktası yapılandırın. VPC uç noktasından erişime izin vermek için S3 paket politikasını güncelleyin. Yeni VPC uç noktasını kullanacak şekilde uygulamayı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 613
Bir şirket, bir konteyneri çalıştırmak için Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanıyor
uygulama. EKS kümesi, hassas bilgileri Kubernetes gizli dizileri nesnesinde saklar.
şirket bilgilerin şifrelendiğinden emin olmak istiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS Key Management'ı kullanarak bilgileri şifrelemek için konteyner uygulamasını kullanın.
Hizmet (AWS KMS).

B. AWS Key Management Service'i (AWS) kullanarak EKS kümesinde gizli dizi şifrelemesini etkinleştirin
KMS).

C. AWS Key'i kullanarak bilgileri şifrelemek için bir AWS Lambda işlevi uygulayın
Yönetim Hizmeti (AWS KMS).

D. AWS Key'i kullanarak bilgileri şifrelemek için AWS Systems Manager Parameter Store'u kullanın
Yönetim Hizmeti (AWS KMS).

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

Soru 614
Bir şirket aşağıdakilerden oluşan yeni bir çok katmanlı web uygulaması tasarlıyor
bileşenler:
(cid:127) Otomatik Ölçeklendirme gruplarının parçası olarak Amazon EC2 bulut sunucularında çalışan web ve uygulama sunucuları
(cid:127) Veri depolamaya yönelik bir Amazon RDS veritabanı bulut sunucusu
Bir çözüm mimarının, uygulama sunucularına erişimi yalnızca web sunucularının erişebileceği şekilde sınırlaması gerekir.
onlara erişebilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS PrivateLink'i uygulama sunucularının önüne dağıtın. Ağ ACL'sini izin verecek şekilde yapılandırın
uygulama sunucularına erişmek için yalnızca web sunucuları.

B. Uygulama sunucularının önüne bir VPC uç noktası dağıtın. Güvenlik grubunu izin verecek şekilde yapılandırın
uygulama sunucularına erişmek için yalnızca web sunucuları.

C. Uygulama sunucularının Otomatik'ini içeren bir hedef gruba bir Ağ Yük Dengeleyici dağıtın.
Ölçeklendirme grubu. Ağ ACL'sini yalnızca web sunucularının uygulamaya erişmesine izin verecek şekilde yapılandırın
sunucular.

D. Uygulama sunucularını içeren bir hedef gruba bir Application Load Balancer dağıtın.
Otomatik Ölçeklendirme grubu. Güvenlik grubunu yalnızca web sunucularının erişmesine izin verecek şekilde yapılandırın.
uygulama sunucuları.

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

Soru 615
Bir şirket, Amazon Elastic Kubernetes Service üzerinde müşteriye yönelik kritik bir uygulamayı çalıştırıyor
(Amazon EKS). Uygulama bir mikro hizmet mimarisine sahiptir. Şirketin ihtiyacı var
ölçümleri ve günlükleri toplayan, bir araya getiren ve özetleyen bir çözüm uygulayın.
Merkezi bir yerde uygulama.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon CloudWatch aracısını mevcut EKS kümesinde çalıştırın. Metrikleri görüntüleyin ve giriş yapın
CloudWatch konsolu.

B. Mevcut EKS kümesinde AWS App Mesh'i çalıştırın. Uygulama Ağı'ndaki ölçümleri ve günlükleri görüntüleyin
konsol.

C. Veri olaylarını yakalamak için AWS CloudTrail'i yapılandırın. Amazon'u kullanarak CloudTrail'i sorgulama
Açık Arama Hizmeti.

D. Mevcut EKS kümesinde Amazon CloudWatch Container Insights'ı yapılandırın. Metrikleri görüntüle
ve CloudWatch konsolunda oturum açar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut EKS kümesinde Amazon CloudWatch Container Insights'ı yapılandırın. CloudWatch konsolundaki ölçümleri ve günlükleri görüntüleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 616
Bir şirket en yeni ürününü AWS'de devreye aldı. Ürün bir Otomatik Ölçeklendirme grubunda çalışır
Ağ Yük Dengeleyicinin arkasında. Şirket, ürünün nesnelerini bir Amazon S3'te saklıyor
kova.
Şirket yakın zamanda sistemlerine yönelik kötü niyetli saldırılarla karşılaştı. Şirketin bir ihtiyacı var
AWS hesabındaki, iş yüklerindeki ve iş yüklerindeki kötü amaçlı etkinlikleri sürekli olarak izleyen çözüm
S3 klasörüne erişim kalıpları. Çözüm ayrıca şüpheli etkinliği raporlamalı ve görüntülemelidir.
bir gösterge panosundaki bilgiler.
Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru 617
Bir şirket şirket içi veri merkezini AWS'ye taşımak istiyor. Veri merkezi bir
Verileri NFS tabanlı bir dosya sisteminde depolayan depolama sunucusu. Depolama sunucusu 200 GB'lık depolama alanı tutar
veri. Şirketin verileri kesintisiz olarak mevcut hizmetlere taşıması gerekiyor. Çoklu
AWS'deki kaynakların NFS protokolünü kullanarak verilere erişebilmesi gerekir.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. Lustre dosya sistemi için bir Amazon FSx oluşturun.

B. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun.

C. Verileri almak için bir Amazon S3 klasörü oluşturun.

D. Verileri AWS hedefine göndermek için manuel olarak bir işletim sistemi kopyalama komutunu kullanın.

E. Şirket içi veri merkezine bir AWS DataSync aracısı yükleyin. arasında bir DataSync görevi kullanma
şirket içi konum ve AWS.

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

Soru 618
Bir şirket, Amazon EC2 bulut sunucuları için Windows Dosya Sunucusu için Amazon FSx'i kullanmak istiyor
us-east-1 Bölgesinde birim olarak monte edilmiş bir SMB dosya paylaşımına sahip olan. Şirketin bir
Planlı sistem bakımı veya planlanmamış sistem bakımı için 5 dakikalık kurtarma noktası hedefi (RPO)
hizmet kesintileri. Şirketin dosya sistemini us-west-2 Bölgesine kopyalaması gerekiyor.
kopyalanan veriler 5 yıl boyunca hiçbir kullanıcı tarafından silinmemelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. us-east-1'de Single-AZ 2'ye sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun
dağıtım türü. Bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın.
yedeği us-west-2'ye kopyalar. AWS Backup Vault Lock'u uyumluluk modunda yapılandırın
us-west-2'deki hedef kasa. Minimum 5 yıllık süreyi yapılandırın.

B. us-east-1'de Multi-AZ dağıtımına sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun
yazın. kopyalayan bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın.
us-west-2'ye yedekleyin. AWS Backup Vault Lock'u bir hedef kasa için yönetişim modunda yapılandırma
abd-batı-2. Minimum 5 yıllık süreyi yapılandırın.

C. us-east-1'de Multi-AZ dağıtımına sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun
yazın. kopyalayan bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın.
us-west-2'ye yedekleyin. AWS Backup Vault Lock'u bir hedef kasa için uyumluluk modunda yapılandırın
abd-batı-2. Minimum 5 yıllık süreyi yapılandırın.

D. us-east-1'de Single-AZ 2'ye sahip bir Windows Dosya Sunucusu dosya sistemi için FSx oluşturun
dağıtım türü. Bir yedekleme kuralı içeren günlük bir yedekleme planı oluşturmak için AWS Backup'ı kullanın.
yedeği us-west-2'ye kopyalar. AWS Backup Vault Lock'u yönetişim modunda yapılandırma
us-west-2'deki hedef kasa. Minimum 5 yıllık süreyi yapılandırın.

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

Soru 619
Bir çözüm mimarı, sağlamak isteyen bir şirket için bir güvenlik çözümü tasarlıyor
AWS Kuruluşları aracılığıyla bireysel AWS hesaplarına sahip geliştiriciler, aynı zamanda
standart güvenlik kontrolleri. Çünkü bireysel geliştiriciler AWS hesap köküne sahip olacak
Çözüm mimarı, kendi hesaplarına kullanıcı düzeyinde erişim sağlamak istiyor.
yeni geliştirici hesaplarına uygulanan zorunlu AWS CloudTrail yapılandırması geçerli değildir
değiştirildi.
Hangi eylem bu gereksinimleri karşılıyor?

A. CloudTrail'de değişiklik yapılmasını yasaklayan bir IAM politikası oluşturun. ve onu kök kullanıcıya ekleyin.

B. CloudTrail'de geliştirici hesaplarının içinden kuruluş kayıtlarıyla yeni bir kayıt oluşturun
seçeneği etkinleştirildi.

C. CloudTrail'de değişiklik yapılmasını yasaklayan bir hizmet kontrol politikası (SCP) oluşturun ve bunu
geliştirici hesapları.

D. CloudTrail için yalnızca şuradan değişiklik yapılmasına izin veren bir politika koşuluyla hizmet bağlantılı bir rol oluşturun:
yönetim hesabında bir Amazon Kaynak Adı (ARN).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** CloudTrail'de değişiklik yapılmasını yasaklayan bir hizmet kontrol politikası (SCP) oluşturun ve bunu geliştirici hesaplarına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 620
Bir şirket, AWS Cloud'da iş açısından kritik bir uygulamayı devreye almayı planlıyor.
uygulama tutarlı, düşük gecikme performansına sahip dayanıklı depolama gerektirir.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi tür depolamayı önermelidir?

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

Soru 621
Çevrimiçi bir fotoğraf paylaşım şirketi, fotoğraflarını Amazon S3 klasöründe saklıyor.
us-batı-1 Bölgesi. Şirketin tüm yeni fotoğrafların bir kopyasını ABD-Doğu-1 Bölgesinde saklaması gerekiyor.
Hangi çözüm bu gereksinimi EN AZ operasyonel çabayla karşılayacak?

A. us-east-1'de ikinci bir S3 klasörü oluşturun. Fotoğrafları kopyalamak için S3 Bölgeler Arası Çoğaltma'yı kullanın.
mevcut S3 klasörünü ikinci S3 klasörüne aktarın.

B. Mevcut S3 paketinin kaynaklar arası kaynak paylaşımı (CORS) yapılandırmasını oluşturun. Belirt
CORS kuralının AllowedOrigin öğesinde us-east-1.

C. Us-east-1'de birden fazla Erişilebilirlik Alanında ikinci bir S3 klasörü oluşturun. Bir S3 oluşturun
Fotoğrafları ikinci S3 klasörüne kaydetmek için yaşam döngüsü kuralı.

D. us-east-1'de ikinci bir S3 klasörü oluşturun. Nesne oluşturmada S3 olay bildirimlerini yapılandırma
ve mevcut S3 klasöründeki fotoğrafları kopyalamak amacıyla bir AWS Lambda işlevini çağırmak için etkinlikleri güncelleyin
ikinci S3 kovasına.

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

Soru 622
Bir şirket aboneleri için yeni bir web uygulaması oluşturuyor. Başvuru aşağıdakilerden oluşacaktır:
statik tek sayfa ve kalıcı bir veritabanı katmanı. Uygulamanın milyonlarca kullanıcısı olacak
Sabah 4 saat, ancak uygulamanın geri kalanında yalnızca birkaç bin kullanıcısı olacak
gün. Şirketin veri mimarları, şemalarını hızlı bir şekilde geliştirme olanağı talep etti.
Hangi çözümler bu gereksinimleri karşılayacak ve EN ÇOK ölçeklenebilirliği sağlayacak? (İki tane seçin.)

A. Veritabanı çözümü olarak Amazon DynamoDB'yi dağıtın. Talep üzerine kapasite sağlayın.

B. Veritabanı çözümü olarak Amazon Aurora'yı dağıtın. Sunucusuz veritabanı motoru modunu seçin.

C. Veritabanı çözümü olarak Amazon DynamoDB'yi dağıtın. DynamoDB otomatik ölçeklendirmenin etkinleştirildiğinden emin olun.
etkinleştirildi.

D. Statik içeriği bir Amazon S3 klasörüne dağıtın. Amazon CloudFront sağlayın
başlangıç noktası olarak S3 paketiyle dağıtım.

E. Auto'da Amazon EC2 bulut sunucularından oluşan bir filo genelinde statik içerik için web sunucularını dağıtın
Grupları ölçeklendirme. Örnekleri bir Amazon Elastic'teki içeriği düzenli aralıklarla yenileyecek şekilde yapılandırın
Dosya Sistemi (Amazon EFS) birimi.

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

Soru 623
Bir şirket, üçüncü taraf hizmeti olan REST API'lerini yönetmek için Amazon API Gateway'i kullanıyor
sağlayıcıların erişimi. Şirket, REST API'lerini SQL enjeksiyonundan ve siteler arası korumadan korumalıdır
komut dosyası saldırıları.
Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. AWS Shield'ı yapılandırın.

B. AWS WAF'ı yapılandırın.

C. API Gateway'i Amazon CloudFront dağıtımıyla kurun. AWS Shield'ı şurada yapılandırın
CloudFront.

D. API Gateway'i Amazon CloudFront dağıtımıyla kurun. AWS WAF'ı şurada yapılandırın
CloudFront.

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

Soru 624
Bir şirket, kullanıcılara AWS kaynaklarına erişim sağlamak istiyor. Şirketin 1.500
kullanıcıları Active Directory kullanıcı grupları aracılığıyla şirket içi kaynaklara erişimlerini yönetir
kurumsal ağda. Ancak şirket, kullanıcıların
kaynaklara erişmek için başka bir kimlik. Bir çözüm mimarı, kullanıcı erişimini yönetmelidir.
AWS kaynakları şirket içi kaynaklara erişimi korurken.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Şirketteki her kullanıcı için bir IAM kullanıcısı oluşturun. Her kullanıcıya uygun politikaları ekleyin.

B. Amazon Cognito'yu bir Active Directory kullanıcı havuzuyla kullanın. Uygun olanlarla roller oluşturun
politikalar eklenmiştir.

C. Hesaplar arası rolleri uygun politikalarla birlikte tanımlayın. Rolleri Etkin ile eşleyin
Dizin grupları.

D. Güvenlik Onayı Biçimlendirme Dilini (SAML) 2 0 tabanlı federasyonu yapılandırın. Şununla roller oluşturun:
uygun ilkeler eklenmiştir Rolleri Active Directory gruplarıyla eşleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Güvenlik Onayı Biçimlendirme Dilini (SAML) 2 0 tabanlı federasyonu yapılandırma. Uygun ilkelerin eklendiği roller oluşturun. Rolleri Active Directory gruplarıyla eşleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 625
Bir şirket, birden fazla Application Load Balancer'ın arkasında bir web sitesi barındırıyor. Şirket
İçeriği için dünya çapında farklı dağıtım haklarına sahiptir. Bir çözüm mimarının şunları sağlaması gerekir:
kullanıcılara dağıtım haklarını ihlal etmeden doğru içeriğin sunulması.
Çözüm mimarı bu gereksinimleri karşılamak için hangi konfigürasyonu seçmelidir?

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

Soru 626
Bir şirket verilerini kendi tesislerinde saklar. Veri miktarı şirketin sınırlarını aşıyor
mevcut kapasite.
Şirket, verilerini şirket içi konumdan bir Amazon S3 klasörüne taşımak istiyor.
Şirketin, verinin bütünlüğünü otomatik olarak doğrulayacak bir çözüme ihtiyacı var.
transferi.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir AWS Snowball Edge cihazı sipariş edin. Snowball Edge cihazını aşağıdaki işlemleri gerçekleştirecek şekilde yapılandırın:
S3 klasörüne çevrimiçi veri aktarımı

B. Şirket içinde bir AWS DataSync aracısı dağıtın. DataSync aracısını aşağıdaki işlemleri gerçekleştirecek şekilde yapılandırın:
S3 klasörüne çevrimiçi veri aktarımı.

C. Şirket içinde bir Amazon S3 Dosya Ağ Geçidi oluşturun
S3 klasörüne çevrimiçi veri aktarımı

D. Şirket içi Amazon S3 Transfer Acceleration'da bir hızlandırıcı yapılandırın. Yapılandır
S3 klasörüne çevrimiçi veri aktarımını gerçekleştirmek için hızlandırıcı.

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

Soru 627
Bir şirket iki DNS sunucusunu AWS'ye taşımak istiyor. Sunucular toplamda yaklaşık olarak
200 bölge ve her gün ortalama 1 milyon talep alıyoruz. Şirket maksimuma ulaşmak istiyor
yönetimi ile ilgili operasyonel ek yükü en aza indirirken kullanılabilirlik
iki sunucu.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Amazon Route 53 konsolunda 200 yeni barındırılan bölge oluşturun. Bölge dosyalarını içe aktarın.

B. Tek bir büyük Amazon EC2 bulut sunucusu İçe aktarma bölgesi kutucuklarını başlatın. Amazon CloudWatch'u yapılandırın
Şirketi herhangi bir kesinti konusunda uyarmak için alarmlar ve bildirimler.

C. AWS Server Migration Service'i (AWS SMS) kullanarak sunucuları AWS'ye geçirin. Yapılandır
Şirketi herhangi bir kesinti konusunda uyarmak için Amazon CloudWatch alarmları ve bildirimleri.

D. İki Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubunda bir Amazon EC2 bulut sunucusu başlatın.
Bölge dosyalarını içe aktarın. Otomatik Ölçeklendirme için istenen kapasiteyi 1'e ve maksimum kapasiteyi 3'e ayarlayın.
grup. Ölçeklendirme alarmlarını CPU kullanımına göre ölçeklenecek şekilde yapılandırın.

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

Soru 628
Küresel bir şirket, uygulamalarını AWS Kuruluşlarındaki birden fazla AWS hesabında çalıştırıyor.
Şirketin uygulamaları, verileri birden fazla Amazon S3 klasörüne yüklemek için çok parçalı yüklemeleri kullanıyor
AWS Bölgeleri genelinde. Şirket, maliyet açısından tamamlanmamış çok parçalı yüklemeleri raporlamak istiyor
uyumluluk amaçları.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

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

Soru 629
Bir şirket MySQL için Amazon RDS'de bir üretim veritabanı çalıştırıyor. Şirket istiyor
güvenlik uyumluluğu nedeniyle veritabanı sürümünü yükseltin. Çünkü veritabanı şunları içeriyor
kritik veriler, şirket işlevselliği kaybetmeden yükseltme ve test etmek için hızlı bir çözüm istiyor
herhangi bir veri.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bir RDS manuel anlık görüntüsü oluşturun. Amazon RDS for MySQL'in yeni sürümüne yükseltin.

B. Yerel yedeklemeyi kullanın ve geri yükleyin. Verileri Amazon RDS'nin yükseltilmiş yeni sürümüne geri yükleyin
MySQL için.

C. Verileri yükseltilen yeni sunucuya kopyalamak için AWS Database Migration Service'i (AWS DMS) kullanın.
Amazon RDS for MySQL sürümü.

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

Soru 630
Bir çözüm mimarı, günde bir kez çalışan ve en fazla 2 gün sürebilen bir veri işleme işi yaratıyor.
tamamlanmasına saatler kaldı. İşin kesintiye uğraması durumunda baştan yeniden başlatılması gerekir.
Çözüm mimarı bu konuyu EN uygun maliyetle nasıl ele almalıdır?

A. Bir Amazon EC2 Rezerve Edilmiş Bulut Sunucusu üzerinde yerel olarak çalışan ve bir tetikleyici tarafından tetiklenen bir komut dosyası oluşturun.
cron işi.

B. Amazon EventBridge planlanmış bir olayı tarafından tetiklenen bir AWS Lambda işlevi oluşturun.

C. Bir Amazon tarafından tetiklenen bir Amazon Elastic Container Service (Amazon ECS) Fargate görevini kullanın
EventBridge planlanmış etkinlik.

D. Amazon EC2'de çalışan bir Amazon Elastic Container Service (Amazon ECS) görevini kullanın
Amazon EventBridge planlanmış bir etkinliği tarafından tetiklenir.

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

Soru 631
Bir sosyal medya şirketi, kullanıcı profilleri, ilişkiler ve
AWS Cloud'daki etkileşimler. Şirketin, herhangi bir değişikliği izlemek için bir uygulamaya ihtiyacı var.
veritabanı. Uygulamanın veri varlıkları arasındaki ilişkileri analiz etmesi ve
kullanıcılara öneriler sunmak.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bilgileri depolamak için Amazon Neptune'ü kullanın. İşleme için Amazon Kinesis Data Streams'i kullanın
veritabanındaki değişiklikler.

B. Bilgileri depolamak için Amazon Neptune'ü kullanın. Değişiklikleri işlemek için Neptune Streams'i kullanın
veritabanı.

C. Bilgileri depolamak için Amazon Quantum Ledger Database'i (Amazon QLDB) kullanın. Kullanım
Veritabanındaki değişiklikleri işlemek için Amazon Kinesis Data Streams.

D. Bilgileri depolamak için Amazon Quantum Ledger Database'i (Amazon QLDB) kullanın. Kullanım
Veritabanındaki değişiklikleri işlemek için Neptune Streams.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bilgileri depolamak için Amazon Neptune'ü kullanın. Veritabanındaki değişiklikleri işlemek için Neptune Streams'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 632
Bir şirket büyük miktarda veriyi depolayacak yeni bir uygulama yaratıyor. Veriler olacak
saatlik olarak analiz edilir ve dağıtılan çeşitli Amazon EC2 Linux bulut sunucuları tarafından değiştirilecektir
birden fazla Erişilebilirlik Alanında. İhtiyaç duyulan depolama alanı miktarı artmaya devam edecek
önümüzdeki 6 ay.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi depolama çözümünü önermelidir?

A. Verileri Amazon S3 Glacier'da saklayın. Erişime izin vermek için S3 Glacier kasa politikasını güncelleyin.
uygulama örnekleri.

B. Verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde saklayın. EBS'yi monte edin
uygulama örneklerinde hacim.

C. Verileri bir Amazon Elastic File System (Amazon EFS) dosya sisteminde saklayın. Dosyayı bağlayın
uygulama örneklerinde sistem.

D. Verileri Amazon Elastic Block Store (Amazon EBS) Tedarik Edilen IOPS biriminde saklayın
uygulama örnekleri arasında paylaşılır.

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

Soru 633
Bir şirket, verileri Amazon RDS for PostgreSQL'de depolayan bir uygulamayı yönetiyor
Multi-AZ Veritabanı bulut sunucusu. Trafikteki artışlar performans sorunlarına neden oluyor. şirket
yavaş performansın temel nedeninin veritabanı sorguları olduğunu belirler.
Bir çözüm mimarı uygulamanın performansını artırmak için ne yapmalıdır?

A. Multi-AZ yedek replikadan okuma trafiği sunun.

B. Veritabanı bulut sunucusunu Aktarım Hızlandırmayı kullanacak şekilde yapılandırın.

C. Kaynak veritabanı bulut sunucusundan bir okuma kopyası oluşturun. Okuma kopyasından okuma trafiğini sunun.

D. Uygulama ile Amazon RDS arasında Amazon Kinesis Data Firehose'u kullanarak
veritabanı isteklerinin eşzamanlılığı.

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

Soru 634
Bir şirket çeşitli makinelerden günde 10 GB telemetri verisi topluyor. Şirket mağazaları
kaynak veri hesabındaki Amazon S3 klasöründeki veriler.
Şirket, bu verileri analiz amacıyla kullanmak üzere birkaç danışmanlık ajansı kiraladı. Her ajans
analistleri için verilere okuma erişimi gerekiyor. Şirketin verileri paylaşması gerekiyor
Güvenliği ve operasyonel verimliliği en üst düzeye çıkaran bir çözüm seçerek kaynak veri hesabını yönetin.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her kurum için verileri çoğaltmak amacıyla S3 genel tablolarını yapılandırın.

B. S3 grubunu sınırlı bir süre için herkese açık hale getirin. Sadece acentelere bilgi veriniz.

C. Ajansların sahip olduğu hesaplara yönelik S3 grubu için hesaplar arası erişimi yapılandırın.

D. Kaynak veri hesabındaki her analist için bir IAM kullanıcısı oluşturun. Her kullanıcıya erişim izni verin
S3 kovası.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ajansların sahip olduğu hesaplara S3 paketi için hesaplar arası erişimi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 635
Bir şirket, CIFS ve NFS için birincil AWS Bölgesinde NetApp ONTAP için Amazon FSx kullanıyor
dosya paylaşımları. Amazon EC2 bulut sunucularında çalışan uygulamalar dosya paylaşımlarına erişir. şirket
ikincil bir Bölgede depolama felaket kurtarma (DR) çözümüne ihtiyaç duyuyor. Veriler
İkincil Bölgede çoğaltılanlara, aynı protokoller kullanılarak erişilmesi gerekir.
birincil Bölge.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri bir Amazon S3 klasörüne kopyalamak için bir AWS Lambda işlevi oluşturun. S3'ü çoğaltın
İkincil Bölgeye kova.

B. AWS Backup'ı kullanarak ONTAP birimleri için FSx'in bir yedeğini oluşturun. Birimleri şuraya kopyalayın:
ikincil Bölge. Yedekten ONTAP örneği için yeni bir FSx oluşturun.

C. İkincil Bölgede ONTAP örneği için bir FSx oluşturun. NetApp SnapMirror'ı kullanarak
Verileri birincil Bölgeden ikincil Bölgeye çoğaltın.

D. Bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. Mevcut verileri şuraya taşı:
hacim. Birimi ikincil Bölgeye çoğaltın.

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

Soru 636
Bir geliştirme ekibi, AWS Lambda işlevlerini kullanan olay tabanlı bir uygulama oluşturuyor.
Dosyalar bir Amazon S3 klasörüne eklendiğinde etkinlikler oluşturulacaktır. Geliştirme ekibi
şu anda etkinlik hedefi olarak yapılandırılmış Amazon Simple Notification Service (Amazon SNS) var
Amazon S3'ten.
Bir çözüm mimarı Amazon S3'teki olayları ölçeklenebilir bir şekilde işlemek için ne yapmalıdır?

A. Amazon Elastic Container Service'te olayı işleyen bir SNS aboneliği oluşturun
(Amazon ECS) Lambda'da etkinlik yapılmadan önce.

B. Amazon Elastic Kubernetes Service'te olayı işleyen bir SNS aboneliği oluşturun
(Amazon EKS) Lambda'da etkinlik yapılmadan önce

C. Etkinliği Amazon Simple Queue Service'e (Amazon) gönderen bir SNS aboneliği oluşturun
SQS). Lambda işlevini tetiklemek için SOS kuyruğunu yapılandırın.

D. Olayı AWS Server Migration Service'e (AWS) gönderen bir SNS aboneliği oluşturun
SMS). SMS olayından anket yapmak için Lambda işlevini yapılandırın.

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

Soru 637
Bir çözüm mimarı, Amazon API Gateway'in arkasında yeni bir hizmet tasarlıyor. istek
Hizmetin kalıpları öngörülemez olacak ve aniden 0 istekten daha fazlasına kadar değişebilecektir
Saniyede 500. Bir arka uç veritabanında kalıcı olması gereken verilerin toplam boyutu:
şu anda 1 GB'tan az ve öngörülemeyen gelecekteki büyüme. Veriler basit bir şekilde sorgulanabilir
anahtar/değer istekleri.
Hangi AWS hizmetleri kombinasyonu bu gereksinimleri karşılar? (İki tane seçin.)

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

Soru 638
Bir şirket araştırma verilerini toplar ve dünyanın her yerindeki şirket çalışanlarıyla paylaşır.
Şirket, verileri bir Amazon S3 klasöründe toplayıp depolamak ve verileri işlemek istiyor
AWS Cloud'da. Şirket, verileri şirket çalışanlarıyla paylaşacak.
şirketin AWS Cloud'da operasyonel ek yükü en aza indiren güvenli bir çözüme ihtiyacı var.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 tarafından önceden imzalanmış bir URL oluşturmak için AWS Lambda işlevini kullanın. Çalışanlara bu aracı kullanmaları talimatını verin
URL'si.

B. Her çalışan için bir IAM kullanıcısı oluşturun. Her çalışanın S3'e izin vermesi için bir IAM politikası oluşturun
erişim. Çalışanlara AWS Management Console'u kullanma talimatını verin.

C. Bir S3 Dosya Ağ Geçidi oluşturun. Yüklemek için bir paylaşım ve indirmek için bir paylaşım oluşturun. İzin ver
çalışanların S3 Dosya Ağ Geçidini kullanmak için yerel bilgisayarlarına paylaşımlar eklemesini sağlayın.

D. AWS Transfer Ailesi SFTP uç noktalarını yapılandırın. Özel kimlik sağlayıcı seçeneklerini seçin.
Kullanıcı kimlik bilgilerini yönetmek için AWS Secrets Manager'ı kullanın Çalışanlara Aktarımı kullanma talimatı verin
Aile.

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

Soru 639
Bir şirket yeni bir mobilya envanter uygulaması geliştiriyor. Şirket,
birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularından oluşan bir filodaki uygulama. EC2
örnekler VPC'lerinde bir Application Load Balancer'ın (ALB) arkasında çalışır.
Bir çözüm mimarı, gelen trafiğin bir EC2 örneğini tercih ettiğini gözlemledi.
bazı isteklerde gecikmeye neden olur.
Çözüm mimarı bu sorunu çözmek için ne yapmalıdır?

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

Soru 640
Bir şirket, indirme ve indirme işlemleri için AWS Lambda işlevini kullanan bir uygulama iş akışına sahiptir.
Amazon S3'teki dosyaların şifresini çözün. Bu dosyalar AWS Key Management Service kullanılarak şifrelenir
(AWS KMS) anahtarları. Bir çözüm mimarının gerekli özellikleri sağlayacak bir çözüm tasarlaması gerekir.
izinler doğru ayarlanmış.
Hangi eylem kombinasyonu bunu başarıyor? (İki tane seçin.)

A. Lambda işlevinin kaynak politikasına kms:decrypt iznini ekleyin

B. KMS anahtarının politikasında Lambda IAM rolü için şifre çözme izni verin

C. KMS anahtarının politikasında Lambda kaynak politikası için şifre çözme izni verin.

D. kms:decrypt izniyle yeni bir IAM politikası oluşturun ve politikayı Lambda'ya ekleyin
işlevi.

E. kms:decrypt izniyle yeni bir IAM rolü oluşturun ve yürütme rolünü
Lambda fonksiyonu.

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

Soru 641
Bir şirket, mali inceleme için AWS maliyetlerini izlemek istiyor. Bulut operasyon ekibi
AWS Maliyetini sorgulamak için AWS Organizasyonları yönetim hesabında bir mimari tasarlama
ve tüm üye hesapları için Kullanım Raporları. Ekip bu sorguyu ayda bir çalıştırmalı ve
Tasarının ayrıntılı bir analizini sağlayın.
Bu gereksinimleri karşılamanın EN ölçeklenebilir ve uygun maliyetli yolu hangi çözümdür?

A. Yönetim hesabında Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon'a iletin
Kinesis. Analiz için Amazon EMR'yi kullanın.

B. Yönetim hesabında Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon S3'e teslim edin
Analiz için Amazon Athena'yı kullanın.

C. Üye hesapları için Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon S3 Use'a iletin
Analiz için Amazon Redshift.

D. Üye hesapları için Maliyet ve Kullanım Raporlarını etkinleştirin. Raporları Amazon Kinesis'e teslim edin.
Amazon QuickSight tor analizini kullanın.

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

Soru 642
Bir şirket, Auto'nun parçası olan Amazon EC2 bulut sunucularında bir oyun uygulaması çalıştırmak istiyor
AWS Cloud'daki ölçeklendirme grubu. Uygulama verileri UDP paketlerini kullanarak iletecektir.
şirket, trafik arttıkça uygulamanın ölçeğinin genişletilip genişletilebilmesini sağlamak istiyor ve
azalır.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Otomatik Ölçeklendirme grubuna bir Ağ Yük Dengeleyici ekleyin.

B. Otomatik Ölçeklendirme grubuna bir Application Load Balancer ekleyin.

C. Trafiği uygun şekilde yönlendirmek için ağırlıklı bir politikayla bir Amazon Route 53 kayıt kümesi dağıtın.

D. Auto'daki EC2 bulut sunucularına bağlantı noktası yönlendirmeyle yapılandırılmış bir NAT örneğini dağıtın.
Ölçeklendirme grubu.

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

Soru 643
Bir şirket, farklı markaları için AWS'de çeşitli web siteleri işletiyor. Her web sitesi onlarca üretir
Her gün gigabaytlarca web trafiği kaydı. Bir çözüm mimarının ölçeklenebilir bir çözüm tasarlaması gerekir
Şirketin geliştiricilerine tüm dünyadaki trafik modellerini analiz etme yeteneği veren çözüm
şirketin web siteleri. Geliştiriciler tarafından yapılan bu analiz talep üzerine haftada bir kez gerçekleştirilecektir.
birkaç ay süren bir kurs. Çözümün standart SQL ile sorguları desteklemesi gerekir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Günlükleri Amazon S3'te saklayın. Amazon Athena tor analizini kullanın.

B. Günlükleri Amazon RDS'de saklayın. Analiz için bir veritabanı istemcisi kullanın.

C. Günlükleri Amazon OpenSearch Hizmetinde saklayın. Analiz için OpenSearch Hizmetini kullanın.

D. Günlükleri bir Amazon EMR kümesinde saklayın Desteklenen bir açık kaynak çerçevesini kullanın.
SQL tabanlı analiz.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Günlükleri Amazon S3'te saklayın. Amazon Athena tor analizini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 644
Uluslararası bir şirketin faaliyet gösterdiği her ülke için bir alt alan adı vardır.
alt alan adları example.com, country1.example.com ve country2.example.com olarak biçimlendirilir.
Şirketin iş yükleri Application Load Balancer'ın arkasındadır. Şirket istiyor
Aktarılan web sitesi verilerini şifreleyin.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Apex top için genel sertifika istemek üzere AWS Sertifika Yöneticisi (ACM) konsolunu kullanın
alan adı example com ve *.example.com için joker karakter sertifikası.

B. Apeks için özel bir sertifika istemek üzere AWS Sertifika Yöneticisi (ACM) konsolunu kullanın
top alan adı example.com ve *.example.com için joker karakter sertifikası.

C. Genel ve özel bir sertifika istemek için AWS Sertifika Yöneticisi (ACM) konsolunu kullanın.
apex üst alan adı example.com.

D. Etki alanı sahipliğini e-posta adresine göre doğrulayın. Gerekli olanı ekleyerek DNS doğrulamaya geçin
DNS sağlayıcıya DNS kayıtları.

E. Gerekli DNS kayıtlarını DNS'ye ekleyerek alanın alan adı sahipliğini doğrulayın
sağlayıcı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** Apex üst alan adı example com için genel sertifika ve *.example.com için joker karakter sertifikası istemek üzere AWS Sertifika Yöneticisi (ACM) konsolunu kullanın. Gerekli DNS kayıtlarını DNS sağlayıcısına ekleyerek alanın alan adı sahipliğini doğrulayın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 645
Bir şirketin şirket içi anahtar yöneticisinde şifreleme anahtarları kullanması gerekir. Anahtar
yönetici, düzenleme ve uyumluluk gereklilikleri nedeniyle AWS Cloud'un dışındadır.
şirket, şifreleme anahtarlarını kullanarak şifrelemeyi ve şifre çözmeyi yönetmek istiyor
AWS Cloud dışında tutulan ve çeşitli harici anahtar yöneticileri destekleyen
farklı satıcılar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. CloudHSM kümesi tarafından desteklenen AWS CloudHSM anahtar deposunu kullanın.

B. Harici bir sunucu tarafından desteklenen bir AWS Key Management Service (AWS KMS) harici anahtar deposu kullanın.
kilit yönetici.

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

Soru 646
Bir çözüm mimarının AWS'de yüksek performanslı bilgi işlem (HPC) iş yükünü barındırması gerekir
Bulut. İş yükü yüzlerce Amazon EC2 bulut sunucusunda çalışacak ve paralel kurulum gerektirecek
Büyük veri kümelerinin dağıtılmış şekilde işlenmesini sağlamak için paylaşılan bir dosya sistemine erişim. Veri kümeleri
Aynı anda birden fazla örnek üzerinden erişilebilir. İş yükü erişim gecikmesi gerektiriyor
1 ms içinde. İşleme tamamlandıktan sonra mühendislerin veri kümesine erişmesi gerekecektir.
manuel son işleme.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Elastic File System'i (Amazon EFS) paylaşılan bir dosya sistemi olarak kullanın. Veri kümesine erişme
Amazon EFS'den.

B. Paylaşılan dosya sistemi olarak hizmet verecek bir Amazon S3 klasörü ekleyin. Son işlemeyi gerçekleştir
doğrudan S3 kovasından.

C. Amazon FSx for Luster'ı paylaşılan bir dosya sistemi olarak kullanın. Dosya sistemini bir Amazon S3'e bağlayın
işlem sonrası için kova.

D. AWS Resource Access Manager'ı bir Amazon S3 klasörünü paylaşacak şekilde yapılandırın;
işleme ve son işleme için tüm örneklere bağlanır.

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

Soru 647
Bir oyun şirketi IP üzerinden Ses özelliklerine sahip bir uygulama geliştiriyor. Uygulama
dünyanın her yerindeki kullanıcılara trafik hizmeti sunar. Uygulamanın yüksek düzeyde kullanılabilir olması gerekiyor
AWS Bölgeleri genelinde otomatik yük devretme. Şirket kullanıcıların gecikmesini en aza indirmek istiyor
kullanıcı cihazlarında IP adresinin önbelleğe alınmasına gerek kalmadan.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

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

Soru 648
Bir hava tahmin şirketinin yüzlerce gigabayt veriyi işlemesi gerekiyor.
milisaniyenin altındaki gecikme. Şirket, yüksek performanslı bilgi işlem (HPC) ortamına sahiptir.
veri merkezi ve tahmin yeteneklerini genişletmek istiyor.
Bir çözüm mimarı, büyük verileri yönetebilecek, yüksek düzeyde kullanılabilir bir bulut depolama çözümü belirlemelidir.
miktarda sürekli üretim sağlanır. Çözümde saklanan dosyalara erişilebilir olmalıdır
Veri kümesinin tamamına aynı anda erişip onu işleyecek binlerce bilgi işlem örneği.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

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

Soru 649
Bir e-ticaret şirketi kendi bünyesinde bir PostgreSQL veritabanı çalıştırıyor. Veritabanı verileri saklar
yüksek IOPS Amazon Elastic Block Store (Amazon EBS) blok depolamayı kullanarak. Günlük en yüksek G/Ç
Saniyedeki işlemler 15.000 IOPS'yi aşmaz. Şirket taşınmak istiyor
veritabanını Amazon RDS for PostgreSQL'e aktarın ve disk IOPS performansını şunlardan bağımsız olarak sağlayın:
disk depolama kapasitesi.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Genel Amaçlı SSD (gp2) EBS birim depolama türünü yapılandırın ve 15.000 adet sağlayın
IOPS.

B. Tedarik Edilen IOPS SSD (io1) EBS birim depolama türünü yapılandırın ve 15.000 adet tedarik edin
IOPS.

C. Genel Amaçlı SSD (gp3) EBS birim depolama türünü yapılandırın ve 15.000 adet sağlayın
IOPS.

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

Soru 650
Bir şirket şirket içi Microsoft SQL Server Enterprise sürümü veritabanını taşımak istiyor
AWS'ye. Şirketin çevrimiçi uygulaması, işlemleri gerçekleştirmek için veritabanını kullanıyor. Veriler
analiz ekibi analitik işleme yönelik raporları çalıştırmak için aynı üretim veritabanını kullanır.
Şirket, nerede olursa olsun yönetilen hizmetlere geçerek operasyonel ek yükü azaltmak istiyor
mümkün.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Microsoft SOL Sunucusu için Amazon RDS'ye geçiş yapın. Raporlama amacıyla okuma kopyalarını kullanın

B. Amazon EC2'de Microsoft SQL Server'a geçiş yapın. Raporlama için Her Zaman Açık okuma kopyalarını kullanın
amaçlar

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

Soru 651
Bir şirket büyük miktarda görüntü dosyasını bir Amazon S3 klasöründe saklıyor. Görsellerin olması gerekiyor
İlk 180 gün boyunca kullanıma hazır. Sonraki 180 yıl boyunca görüntülere nadiren erişiliyor
günler. 360 gün sonra görüntülerin arşivlenmesi gerekir ancak anında kullanılabilir olması gerekir.
istek. 5 yıl sonra görüntülere yalnızca denetçiler erişebilir. Denetçiler şunları yapabilmelidir:
görüntüleri 12 saat içinde alın. Bu işlem sırasında görüntüler kaybolamaz.
Bir geliştirici ilk 180 gün boyunca S3 Standart depolama alanını kullanacaktır. Geliştiricinin yapması gereken
bir S3 Yaşam Döngüsü kuralı yapılandırın.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Nesneleri 180 gün sonra S3 Tek Bölge-Sık Olmayan Erişime (S3 Tek Bölge-IA) geçirin. S3
360 gün sonra Glacier Anında Erişim ve 5 yıl sonra S3 Glacier Deep Archive.

B. Nesneleri 180 gün sonra S3 Tek Bölge-Sık Olmayan Erişime (S3 Tek Bölge-IA) geçirin. S3
360 gün sonra Glacier Esnek Erişim ve 5 yıl sonra S3 Glacier Deep Archive.

C. Nesneleri 180 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirme, S3
360 gün sonra Glacier Anında Erişim ve 5 yıl sonra S3 Glacier Deep Archive.

D. Nesneleri 180 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirme, S3
360 gün sonra Glacier Esnek Erişim ve 5 yıl sonra S3 Glacier Deep Archive.

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

Soru 652
Bir şirketin her gün 6 saat çalışan büyük bir veri iş yükü vardır. Şirket kaybedemez
İşlem çalışırken herhangi bir veri. Bir çözüm mimarı bir Amazon EMR kümesi tasarlıyor
Bu kritik veri iş yükünü destekleyecek yapılandırma.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İsteğe Bağlı olarak birincil düğümü ve çekirdek düğümleri çalıştıran uzun süre çalışan bir küme yapılandırın
Bulut Sunucuları ve Spot Bulut Sunucularındaki görev düğümleri.

B. İsteğe Bağlı olarak birincil düğümü ve çekirdek düğümleri çalıştıran geçici bir küme yapılandırın
Bulut Sunucuları ve Spot Bulut Sunucularındaki görev düğümleri.

C. İsteğe Bağlı Bulut Sunucusunda birincil düğümü çalıştıran geçici bir küme yapılandırın ve
Spot Bulut Sunucularındaki çekirdek düğümler ve görev düğümleri.

D. İsteğe Bağlı Bulut Sunucusundaki birincil düğümü çalıştıran uzun süre çalışan bir küme yapılandırın.
Spot Bulut Sunucularındaki çekirdek düğümler ve Spot Bulut Sunucularındaki görev düğümleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İsteğe Bağlı Bulut Sunucularındaki birincil düğümü ve çekirdek düğümleri ve Spot Bulut Sunucularındaki görev düğümlerini çalıştıran geçici bir küme yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 653
Bir şirket, kullanıcıları maliyet merkezleriyle eşleştiren bir Amazon RDS veritabanına sahiptir. şirket
AWS Organizasyonlarındaki bir kuruluşta hesapları var. Şirketin bunu sağlayacak bir çözüme ihtiyacı var
kuruluştaki belirli bir AWS hesabında oluşturulan tüm kaynakları etiketleyin. Çözüm
her kaynağı, kaynağı oluşturan kullanıcının maliyet merkezi kimliğiyle etiketlemelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Belirli AWS hesabını Kuruluşlar'daki yeni bir kuruluş birimine (OU) taşıyın.
yönetim hesabı. Mevcut tüm kaynakların kullanılmasını gerektiren bir hizmet kontrol ilkesi (SCP) oluşturun.
Kaynaklar oluşturulmadan önce doğru maliyet merkezi etiketine sahip olun. SCP'yi yeni kuruluş birimine uygulayın.

B. Lambda işlevi kaynakları aradıktan sonra kaynakları etiketlemek için bir AWS Lambda işlevi oluşturun.
RDS veri tabanından uygun maliyet merkezi. Bir Amazon EventBridge kuralı yapılandırın:
Lambda işlevini çağırmak için AWS CloudTrail olaylarına tepki verir.

C. Bir AWS Lambda işlevini dağıtmak için bir AWS CloudFormation yığını oluşturun. Yapılandır
RDS veritabanından uygun maliyet merkezini aramak ve etiketlemek için Lambda işlevi
kaynaklar. CloudFormation yığınını çağırmak için bir Amazon EventBridge planlanmış kuralı oluşturun.

D. Kaynakları varsayılan bir değerle etiketlemek için bir AWS Lambda işlevi oluşturun. Bir yapılandırma
AWS CloudTrail olaylarına tepki vererek Lambda işlevini çağıran Amazon EventBridge kuralı
bir kaynağın maliyet merkezi etiketi eksik olduğunda.

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

Soru 654
Bir şirket yakın zamanda web uygulamasını AWS Cloud'a taşıdı. Şirket bir
Uygulamayı barındırmak amacıyla birden fazla işlemi çalıştırmak için Amazon EC2 örneği. Süreçler şunları içerir:
Statik içerik sunan bir Apache web sunucusu. Apache web sunucusu bir istekte bulunur.
Kullanıcı oturumları için yerel Redis sunucusunu kullanan PHP uygulaması.
Şirket, mimariyi yüksek oranda kullanılabilir olacak ve AWS tarafından yönetilen kullanacak şekilde yeniden tasarlamak istiyor
çözümler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Statik içeriği ve PHP uygulamasını barındırmak için AWS Elastic Beanstalk'ı kullanın. Yapılandır
Elastic Beanstalk, EC2 örneğini genel bir alt ağa dağıtacak. Genel bir IP adresi atayın.

B. Statik içeriği ve PHP uygulamasını barındırmak için AWS Lambda'yı kullanın. Amazon API'si kullanın
Lambda işlevine proxy isteklerini göndermek için Ağ Geçidi REST API'si. API Ağ Geçidi CORS'unu ayarlayın
Alan adına yanıt verecek şekilde yapılandırma. Redis'in işlemesi için Amazon ElastiCache'i yapılandırma
oturum bilgileri.

C. Arka uç kodunu EC2 örneğinde tutun. Redis kümesi için Amazon ElastiCache oluşturma
Multi-AZ'nin etkin olduğu. Redis kümesi için ElastiCache'i küme modunda yapılandırın. Kopyala
Amazon S3'e ön uç kaynakları. EC2 örneğine referans verecek şekilde arka uç kodunu yapılandırın.

D. Amazon S3 uç noktasıyla bir Amazon CloudFront dağıtımını bir S3 klasörüne yapılandırın.
statik içeriği barındıracak şekilde yapılandırılmıştır. Hedefleyen bir Application Load Balancer yapılandırma
AWS Fargate görevlerini çalıştıran Amazon Elastic Container Service (Amazon ECS) hizmeti
PHP uygulaması. PHP uygulamasını Redis kümesi için Amazon ElastiCache kullanacak şekilde yapılandırma
birden çok Erişilebilirlik Alanında çalışır.

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

Soru 655
Bir şirket, Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor.
bir hedef grup. Şirket, uygulamayı oturum benzeşimi (yapışkan) ile çalışacak şekilde tasarladı
oturumları) daha iyi bir kullanıcı deneyimi için.
Uygulamanın uç nokta olarak internet üzerinden herkese açık olması gerekir. Bir WAF olmalıdır
ek güvenlik için uç noktaya uygulanır. Oturum benzeşimi (yapışkan oturumlar)
uç noktada yapılandırılmıştır.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

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

Soru 656
Bir şirket, tarihi olayların görsellerini saklayan bir web sitesi işletiyor. Web sitesi kullanıcılarının bu yeteneğe ihtiyacı var
Resimdeki olayın meydana geldiği yıla göre resimleri aramak ve görüntülemek için. Ortalama olarak,
kullanıcılar her görseli yılda yalnızca bir veya iki kez talep eder. Şirket yüksek düzeyde kullanılabilirlik istiyor
görüntüleri depolamak ve kullanıcılara sunmak için bir çözüm.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Görüntüleri Amazon Elastic Block Store'da (Amazon EBS) saklayın. Üzerinde çalışan bir web sunucusu kullanın
Amazon EC2.

B. Görüntüleri Amazon Elastic File System'de (Amazon EFS) saklayın. Üzerinde çalışan bir web sunucusu kullanın
Amazon EC2.

C. Görüntüleri Amazon S3 Standard'ta saklayın. Görüntüleri doğrudan iletmek için S3 Standard'ı kullanın.
statik web sitesi.

D. Görüntüleri Amazon S3 Standard-Infrequent Access'te (S3 Standard-IA) saklayın. S3 Standart-IA'yı kullanın
Statik bir web sitesi kullanarak görüntüleri doğrudan sunmak için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Görüntüleri Amazon S3 Standard-Infrequent Access'te (S3 Standard-IA) depolayın. Statik bir web sitesi kullanarak görüntüleri doğrudan sunmak için S3 Standard-IA'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 657
Bir şirketin, AWS Kuruluşlarındaki bir kuruluşta birbirinden farklı birden fazla AWS hesabı vardır.
iş birimleri kullanıyor. Şirketin dünya çapında birden fazla ofisi bulunmaktadır. Şirketin ihtiyacı var
yeni ofis CIDR aralıklarına izin vermek veya eski CIDR aralıklarını kaldırmak için güvenlik grubu kurallarını güncelleyin
organizasyon genelinde. Şirket güvenlik grubunun yönetimini merkezileştirmek istiyor
CIDR aralıklarının güncellenmesinin gerektirdiği yönetim yükünü en aza indirecek kurallar.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Kuruluşun yönetim hesabında VPC güvenlik grupları oluşturun. Güvenliği güncelleyin
CIDR aralığı güncellemesi gerektiğinde gruplar.

B. CIDR'lerin listesini içeren bir VPC müşterisi tarafından yönetilen önek listesi oluşturun. AWS Kaynağını Kullanın
Önek listesini kuruluş genelinde paylaşmak için Erişim Yöneticisi (AWS RAM). Önek listesini kullanın
Kuruluş genelindeki güvenlik grupları.

C. AWS tarafından yönetilen bir önek listesi oluşturun. Güvenliği uygulamak için bir AWS Security Hub politikası kullanın
kuruluş genelinde grup güncellemesi. Önek listesini güncellemek için bir AWS Lambda işlevi kullanın
CIDR aralıkları değiştiğinde otomatik olarak.

D. Merkezi bir yönetim AWS hesabında güvenlik grupları oluşturun. AWS Güvenlik Duvarı oluşturun
Tüm kuruluş için ortak güvenlik grubu ilkesini yönetin. Daha önce oluşturulanları seçin
güvenlik gruplarını politikada birincil gruplar olarak kullanın.

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

Soru 658
Bir şirket, dosya paylaşımları sağlamak için şirket içi ağa bağlı depolama (NAS) sistemini kullanıyor
yüksek performanslı bilgi işlem (HPC) iş yüklerine. Şirket, şirketini taşımak istiyor
gecikmeye duyarlı HPC iş yüklerini ve bunların depolanmasını AWS Cloud'a aktarın. Şirketin yapabilmesi gerekiyor
dosya sisteminden NFS ve SMB çoklu protokol erişimi sağlamak.
Hangi çözüm bu gereksinimleri EN AZ gecikmeyle karşılayacak? (İki tane seçin.)

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

Soru 659
Bir şirket veri merkezinin yerini değiştiriyor ve 50 TB veriyi güvenli bir şekilde AWS'ye aktarmak istiyor
2 hafta içinde. Mevcut veri merkezinin AWS'ye %90 oranında Siteden Siteye VPN bağlantısı var
kullanıldı.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi AWS hizmetini kullanmalıdır?

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

Soru 660
Bir şirket, Otomatik Ölçeklendirmede Amazon EC2 İsteğe Bağlı Bulut Sunucularında bir uygulamayı barındırıyor
grup. Uygulamanın yoğun olduğu saatler her gün aynı saatte gerçekleşir. Uygulama kullanıcıları yavaşlık bildiriyor
yoğun saatlerin başında uygulama performansı. Uygulama normalde 2-3 saat sürmektedir.
yoğun saatlerden sonra başlıyor. Şirket, uygulamanın şu anda düzgün çalıştığından emin olmak istiyor:
yoğun saatlerin başlangıcı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Trafiği örneklere doğru şekilde dağıtmak için bir Application Load Balancer yapılandırın.

B. Otomatik Ölçeklendirme grubunun yeni bulut sunucularını temel alarak başlatması için dinamik bir ölçeklendirme ilkesi yapılandırın.
Bellek kullanımıyla ilgili.

C. Otomatik Ölçeklendirme grubunun yeni bulut sunucularını temel alarak başlatması için dinamik bir ölçeklendirme ilkesi yapılandırın.
CPU kullanımı hakkında.

D. Otomatik Ölçeklendirme grubunun daha önce yeni örnekler başlatması için zamanlanmış bir ölçeklendirme ilkesi yapılandırın.
yoğun saatler.

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

Soru 661
Bir şirket, AWS'de şirketin Amazon RDS veritabanına bağlanan uygulamaları çalıştırıyor.
Başvurular hafta sonları ve yılın yoğun zamanlarında ölçeklenmektedir. Şirket ölçeklendirmek istiyor
Veritabanına bağlanan uygulamalar için veritabanını daha etkili bir şekilde kullanın.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon DynamoDB'yi hedef grup yapılandırmasıyla bağlantı havuzu oluşturmayla birlikte kullanın.
veritabanı. Uygulamaları DynamoDB uç noktasını kullanacak şekilde değiştirin.

B. Veritabanı için bir hedef grupla Amazon RDS Proxy'yi kullanın. Kullanılacak uygulamaları değiştirin
RDS Proxy uç noktası.

C. Veritabanına aracı olarak Amazon EC2 üzerinde çalışan özel bir proxy kullanın. Değiştir
özel proxy uç noktasını kullanacak uygulamalar.

D. Hedef grup yapılandırmasıyla bağlantı havuzu oluşturmak için AWS Lambda işlevini kullanın
veritabanı için. Lambda işlevini kullanacak uygulamaları değiştirin.

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

Soru 662
Bir şirket, AWS maliyetlerini izlemek için AWS Cost Explorer'ı kullanıyor. Şirket bunu fark ediyor
Amazon Elastic Block Store (Amazon EBS) depolama ve anlık yedek maliyetleri her ay artıyor.
Ancak şirket her ay ek EBS depolama alanı satın almıyor. şirket
mevcut depolama kullanımına ilişkin aylık maliyetleri optimize etmek istiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon EBS'nin depolama kullanımını izlemek için Amazon CloudWatch Logs'daki günlükleri kullanın. Kullanım
EBS birimlerinin boyutunu azaltmak için Amazon EBS Elastic Volumes.

B. Alan kullanımını izlemek için özel bir komut dosyası kullanın. azaltmak için Amazon EBS Elastic Volumes'u kullanın.
EBS birimlerinin boyutu.

C. Anlık görüntü maliyetlerini azaltmak için süresi dolmuş ve kullanılmamış tüm anlık görüntüleri silin.

D. Gerekli olmayan tüm anlık görüntüleri silin. Oluşturmak ve yönetmek için Amazon Data Lifecycle Manager'ı kullanın
anlık görüntüleri şirketin anlık görüntü politikası gereksinimlerine göre.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Gerekli olmayan tüm anlık görüntüleri silin. Anlık yedekleri şirketin anlık yedek politikası gereksinimlerine göre oluşturmak ve yönetmek için Amazon Data Lifecycle Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 663
Bir şirket AWS üzerinde yeni bir uygulama geliştiriyor. Uygulama bir Amazon'dan oluşur
Elastic Container Service (Amazon ECS) kümesi, aşağıdakilere yönelik varlıkları içeren bir Amazon S3 kümesidir:
uygulama ve uygulamanın veri kümesini içeren bir Amazon RDS for MySQL veritabanı
uygulama. Veri kümesi hassas bilgiler içeriyor. Şirket yalnızca bunu sağlamak istiyor
ECS kümesi MySQL için RDS veritabanındaki verilere ve S3'teki verilere erişebilir
kova.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şifrelemek için yeni bir AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtar oluşturun
hem S3 paketi hem de MySQL veritabanı için RDS. KMS anahtar politikasının aşağıdakileri içerdiğinden emin olun:
ECS görev yürütme rolüne ilişkin izinleri şifreleme ve şifre çözme.

B. Her ikisini de şifrelemek için bir AWS Anahtar Yönetimi Hizmeti (AWS KMS) AWS yönetilen anahtarı oluşturun.
S3 paketi ve MySQL veritabanı için RDS. S3 grubu politikasının ECS'yi belirttiğinden emin olun
Kullanıcı olarak görev yürütme rolü.

C. ECS görev yürütme rolüne paket erişimini kısıtlayan bir S3 klasör ilkesi oluşturun. Oluştur
MySQL için Amazon RDS'ye yönelik bir VPC uç noktası. İzin vermek için MySQL için RDS güvenlik grubunu güncelleyin
yalnızca ECS kümesinin görevleri oluşturacağı alt ağlardan erişim.

D. Amazon RDS for MySQL için bir VPC uç noktası oluşturun. MySQL güvenliği için RDS'yi güncelleyin
Yalnızca ECS kümesinin görevler oluşturacağı alt ağlardan erişime izin vermek için bir grup oluşturun.
Amazon S3 için VPC uç noktası. Yalnızca S3 VPC'den erişime izin vermek için S3 grubu politikasını güncelleyin
uç nokta.

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

Soru 664
Bir şirketin kendi bünyesinde çalışan bir web uygulaması vardır. Uygulamada gecikme yaşanıyor
Yoğun saatlerde sorunlar. Gecikme sorunları ayda iki kez ortaya çıkar. Bir gecikmenin başlangıcında
Bu sorunla karşılaştığınızda uygulamanın CPU kullanımı anında normal miktarının 10 katına çıkar.
Şirket, gecikmeyi iyileştirmek için uygulamayı AWS'ye taşımak istiyor. Şirket aynı zamanda
uygulama talebi arttığında uygulamayı otomatik olarak ölçeklendirmek istiyor. şirket
uygulama dağıtımı için AWS Elastic Beanstalk'ı kullanacak.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Arttırılabilir performans örneklerini kullanmak için bir Elastic Beanstalk ortamını yapılandırın.
sınırsız mod Ortamı isteklere göre ölçeklenecek şekilde yapılandırın.

B. İşlem için optimize edilmiş örnekleri kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Yapılandır
isteklere göre ölçeklenecek ortam.

C. İşlem için optimize edilmiş örnekleri kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Yapılandır
bir zamanlamaya göre ölçeklenecek ortam.

D. Arttırılabilir performans örneklerini kullanmak için bir Elastic Beanstalk ortamını yapılandırın.
sınırsız mod Ortamı, tahmine dayalı ölçümlere göre ölçeklenecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Arttırılabilir performans örneklerini sınırsız modda kullanmak için bir Elastic Beanstalk ortamı yapılandırın. Ortamı isteklere göre ölçeklenecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 665
Bir şirketin dünyanın her yerinde müşterileri vardır. Şirket otomasyonu kullanmak istiyor
sistemlerini ve ağ altyapısını güvence altına alıyor. Şirketin güvenlik ekibi şunları yapabilmelidir:
Altyapıdaki tüm artımlı değişiklikleri takip edin ve denetleyin.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Altyapıyı kurmak için AWS Organizasyonlarını kullanın. Değişiklikleri izlemek için AWS Config'i kullanın.

B. Altyapıyı kurmak için AWS CloudFormation'ı kullanın. Değişiklikleri izlemek için AWS Config'i kullanın.

C. Altyapıyı kurmak için AWS Organizasyonlarını kullanın. İzlemek için AWS Service Catalog'u kullanın
değişiklikler.

D. Altyapıyı kurmak için AWS CloudFormation'ı kullanın. İzlemek için AWS Service Catalog'u kullanın
değişiklikler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Altyapıyı kurmak için AWS CloudFormation'ı kullanın. Değişiklikleri izlemek için AWS Config'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 666
Yeni kurulan bir şirket, müşterileri için bir Amazon EC2 örneğinde bir web sitesi barındırıyor.
Web sitesi durum bilgisi olmayan bir Python uygulamasından ve bir MySQL veritabanından oluşur. Web sitesi hizmet vermektedir
sadece az miktarda trafik. Şirket, örneğin güvenilirliği konusunda endişe duymaktadır ve
Yüksek düzeyde kullanılabilir bir mimariye geçiş yapılması gerekiyor. Şirket başvuruyu değiştiremez
kod.
Bir çözüm mimarının yüksek kullanılabilirlik elde etmek için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
web sitesi? (İki tane seçin.)

A. Kullanılan her Erişilebilirlik Alanında bir internet ağ geçidi sağlayın.

B. Veritabanını Amazon RDS for MySQL Multi-AZ veritabanı bulut sunucusuna taşıyın.

C. Veritabanını Amazon DynamoDB'ye taşıyın ve DynamoDB otomatik ölçeklendirmeyi etkinleştirin.

D. Veritabanı verilerini birden fazla EC2 bulut sunucusunda senkronize etmek için AWS DataSync'i kullanın.

E. Trafiği EC2'nin Otomatik Ölçeklendirme grubuna dağıtmak için bir Application Load Balancer oluşturun
iki Erişilebilirlik Alanına dağıtılan bulut sunucuları.

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

Soru 667
Bir şirket, çok yıllı bir geçiş projesi sırasında verilerini ve uygulamalarını AWS'ye taşıyor.
şirket, Amazon S3'teki verilere şirketin AWS Bölgesinden güvenli bir şekilde erişmek istiyor ve
şirketin şirket içi konumundan. Veriler internet üzerinden geçmemelidir. şirket
Bölgesi ile şirket içi arasında bir AWS Direct Connect bağlantısı kurmuştur
konum.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 için ağ geçidi uç noktaları oluşturun. Güvenli bir şekilde erişmek için ağ geçidi uç noktalarını kullanın.
Bölgeden ve şirket içi konumdan veriler.

B. Amazon S3'e Bölgeden güvenli bir şekilde erişmek için AWS Transit Gateway'de bir ağ geçidi oluşturun ve
şirket içi konum.

C. Amazon S3 için arayüz uç noktaları oluşturun. Güvenli bir şekilde erişmek için arayüz uç noktalarını kullanın.
Bölgeden ve şirket içi konumdan veriler.

D. Verilere güvenli bir şekilde erişmek için bir AWS Key Management Service (AWS KMS) anahtarı kullanın.
Bölge ve şirket içi konum.

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

Soru 668
Bir şirket AWS Organizasyonlarında yeni bir organizasyon oluşturdu. Organizasyonun birden fazla
şirketin geliştirme ekiplerinden sorumludur. Geliştirme ekibi üyeleri AWS IAM kullanıyor
Hesaplara erişmek için Kimlik Merkezi (AWS Tek Oturum Açma). Şirketin her biri için
uygulamalarda, geliştirme ekiplerinin kaynakları etiketlemek için önceden tanımlanmış bir uygulama adı kullanması gerekir
yaratılmışlardır.
Bir çözüm mimarının, geliştirme ekibine aşağıdaki becerileri kazandıracak bir çözüm tasarlaması gerekir:
kaynakları yalnızca uygulama adı etiketinin onaylanmış bir değere sahip olması durumunda oluşturun.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulama adı etiketini gerektiren koşullu İzin Verme politikasına sahip bir IAM grubu oluşturun
Oluşturulacak kaynaklar için belirtilmelidir.

B. Uygulamanın bulunduğu herhangi bir kaynak için Reddetme ilkesine sahip bir hesaplar arası rol oluşturun
isim etiketi.

C. Etiketlerin tüm kaynaklara uygulandığını doğrulamak için AWS Kaynak Gruplarında bir kaynak grubu oluşturun.
tüm hesaplardaki kaynaklar.

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

Soru 669
Bir şirket veritabanlarını PostgreSQL için Amazon RDS'de çalıştırıyor. Şirket güvenlik istiyor
Şifreyi her 30 günde bir değiştirerek ana kullanıcı şifresini yönetme çözümü.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Parolayı döndürmek amacıyla özel bir AWS Lambda işlevi planlamak için Amazon EventBridge'i kullanın
her 30 günde bir.

B. Parolayı değiştirmek için AWS CLI'deki change-db-instance komutunu kullanın.

C. Parolayı otomatikleştirmek için AWS Secrets Manager'ı Amazon RDS for PostgreSQL ile entegre edin
rotasyon.

D. AWS Systems Manager Parameter Store'u PostgreSQL için Amazon RDS ile entegre edin.
şifre rotasyonunu otomatikleştirin.

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

Soru 670
Bir şirket, Amazon DynamoDB tablosunu kullanan bir uygulama üzerinde testler gerçekleştiriyor. Testler
haftada bir kez 4 saat koşun. Şirket, kaç okuma ve yazma işleminin gerçekleştirildiğini biliyor.
Uygulama testler sırasında her saniye tabloya gerçekleştirilir. Şirket şu anda
DynamoDB'yi diğer kullanım durumları için kullanın. Bir çözüm mimarının maliyetleri optimize etmesi gerekir.
masa.
Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru 671
Bir şirket, uygulamalarını Amazon EC2 bulut sunucularında çalıştırıyor. Şirket periyodik olarak
AWS maliyetlerinin finansal değerlendirmeleri. Şirket yakın zamanda olağandışı harcamalar tespit etti.
Şirketin olağandışı harcamaları önlemek için bir çözüme ihtiyacı var. Çözüm maliyetleri izlemelidir
ve olağandışı harcamalar durumunda sorumlu paydaşları bilgilendirin.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Sıfır harcama bütçesi oluşturmak için bir AWS Bütçe şablonu kullanın.

B. AWS Faturalandırma ve Maliyet Yönetimi'nde bir AWS Maliyet Anomalisi Tespiti izleyicisi oluşturun
konsol.

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

Soru 672
Bir pazarlama şirketi, Amazon S3'te büyük miktarda yeni tıklama akışı verisini bir
pazarlama kampanyası. Şirketin Amazon S3'teki tıklama akışı verilerini hızlı bir şekilde analiz etmesi gerekiyor.
Daha sonra şirketin, verileri veri hattında daha fazla işleyip işlemeyeceğini belirlemesi gerekiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Spark kataloğunda harici tablolar oluşturun. Verileri sorgulamak için AWS Glue'da işleri yapılandırın.

B. Verileri taramak için bir AWS Glue tarayıcısını yapılandırın. Verileri sorgulamak için Amazon Athena'yı yapılandırın.

C. Hive meta deposunda harici tablolar oluşturun. Sorgulamak için Amazon EMR'de Spark işlerini yapılandırın
veri.

D. Verileri taramak için bir AWS Glue tarayıcısını yapılandırın. Amazon Kinesis Data Analytics'i şu şekilde yapılandırın:
Verileri sorgulamak için SQL'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri taramak için bir AWS Glue tarayıcısını yapılandırın. Verileri sorgulamak için Amazon Athena'yı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 673
Bir şirket, veri merkezinde bir SMB dosya sunucusu çalıştırıyor. Dosya sunucusu büyük dosyaları saklar.
şirket sıklıkla dosya oluşturma tarihinden itibaren 7 güne kadar erişim sağlar. 7 gün sonra,
Şirketin dosyalara maksimum 24 saat alma süresiyle erişebilmesi gerekiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

C. 7 günden eski verileri SMB dosya sunucusundan AWS'ye kopyalamak için AWS DataSync'i kullanın.

B. Şirketin depolama alanını artırmak için bir Amazon S3 Dosya Ağ Geçidi oluşturun. Bir S3 oluşturun
Verileri 7 gün sonra S3 Glacier Deep Archive'a geçirmeye yönelik yaşam döngüsü politikası.

C. Şirketin depolama alanını artırmak için bir Amazon FSx Dosya Ağ Geçidi oluşturun. Bir oluştur
Verilerin 7 gün sonra aktarılmasına yönelik Amazon S3 Yaşam Döngüsü politikası.

D. Her kullanıcı için Amazon S3'e erişimi yapılandırın. Geçiş yapmak için bir S3 Yaşam Döngüsü ilkesi oluşturun
veriler 7 gün sonra S3 Glacier Esnek Alma'ya aktarılır.

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

Soru 674
Bir şirket, Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor.
uygulama, Amazon RDS for PostgreSQL veritabanı bulut sunucusunda çalışan bir veritabanı kullanır.
trafik arttığında uygulama yavaş çalışır. Veritabanında ağır bir okuma yükü yaşanıyor
trafiğin yoğun olduğu dönemlerde.
Bir çözüm mimarının bu performans sorunlarını çözmek için hangi eylemleri gerçekleştirmesi gerekir? (Seç
iki.)

A. Veritabanı bulut sunucusu için otomatik ölçeklendirmeyi açın.

B. Veritabanı bulut sunucusu için bir okuma kopyası oluşturun. Uygulamayı okuma trafiğini gönderecek şekilde yapılandırın.
replika oku.

C. Veritabanı bulut sunucusunu Multi-AZ Veritabanı bulut sunucusu dağıtımına dönüştürün. Uygulamayı şu şekilde yapılandırın:
beklemedeki veritabanı bulut sunucusuna okuma trafiği gönderin.

D. Bir Amazon ElastiCache kümesi oluşturun. Uygulamayı, sorgu sonuçlarını önbelleğe alacak şekilde yapılandırma
ElastiCache kümesi.

E. EC2 bulut sunucularının temel hazırlığının yapıldığından emin olmak için Otomatik Ölçeklendirme grubu alt ağlarını yapılandırın
Veritabanı bulut sunucusuyla aynı Erişilebilirlik Alanı.

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

Soru 675
Bir şirket Amazon EC2 bulut sunucularını ve Amazon Elastic Block Store'u (Amazon EBS) kullanıyor
Bir uygulamayı çalıştırmak için hacimler. Şirket, her EBS biriminin bir anlık görüntüsünü her
uyumluluk gereksinimlerini karşılamak için bir gün. Şirket şöyle bir mimari uygulamak istiyor:
EBS birim anlık görüntülerinin yanlışlıkla silinmesini önler. Çözüm durumu değiştirmemeli
depolama yöneticisi kullanıcısının yönetici hakları.
Hangi çözüm bu gereksinimleri EN AZ idari çabayla karşılayacak?

A. Anlık görüntüleri silme iznine sahip bir IAM rolü oluşturun. Rolü yeni bir EC2'ye ekleyin
örnek. Anlık görüntüleri silmek için yeni EC2 örneğindeki AWS CLI'yi kullanın.

B. Anlık görüntünün silinmesini reddeden bir IAM politikası oluşturun. Politikayı depolama alanına ekleyin
yönetici kullanıcı.

C. Anlık görüntülere etiketler ekleyin. EBS anlık görüntüleri için Geri Dönüşüm Kutusu'nda saklama kuralları oluşturun.
Etiketler.

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

Soru 676
Bir şirketin uygulaması Ağ Yük Dengeleyicileri, Otomatik Ölçeklendirme gruplarını ve Amazon EC2'yi kullanıyor
bulut sunucuları ve bir Amazon VPC'de dağıtılan veritabanları. Şirket yakalamak istiyor
Amazon VPC'sinde ağ arayüzlerine giden ve ağ arayüzlerinden gelen trafik hakkında neredeyse gerçek zamanlı bilgiler.
Şirket, bilgileri analiz için Amazon OpenSearch Service'e göndermek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon CloudWatch Logs'da bir günlük grubu oluşturun. Günlüğü göndermek için VPC Akış Günlüklerini yapılandırma
verileri günlük grubuna aktarın. Günlükleri günlük grubundan diğerine aktarmak için Amazon Kinesis Data Streams'i kullanın.
Açık Arama Hizmeti.

B. Amazon CloudWatch Logs'ta bir günlük grubu oluşturun. Günlüğü göndermek için VPC Akış Günlüklerini yapılandırma
verileri günlük grubuna aktarın. Günlükleri günlük grubundan şuraya aktarmak için Amazon Kinesis Data Firehose'u kullanın:
Açık Arama Hizmeti.

C. AWS CloudTrail'de bir iz oluşturun. Günlük verilerini ize göndermek için VPC Akış Günlüklerini yapılandırın. Kullanım
Günlüklerin izden OpenSearch Hizmetine akışını sağlamak için Amazon Kinesis Data Streams.

D. AWS CloudTrail'de bir iz oluşturun. Günlük verilerini ize göndermek için VPC Akış Günlüklerini yapılandırın. Kullanım
Günlüklerin izden OpenSearch Hizmetine akışını sağlamak için Amazon Kinesis Data Firehose.

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

Soru 677
Bir şirket, üretim Amazon Elastic Kubernetes üzerinde çalışacak bir uygulama geliştiriyor
Hizmet (Amazon EKS) kümesi. EKS kümesi, temel hazırlığı yapılan yönetilen düğüm gruplarına sahiptir
İsteğe Bağlı Bulut Sunucuları ile.
Şirketin geliştirme çalışmaları için özel bir EKS kümesine ihtiyacı var. Şirket bunu kullanacak
Uygulamanın dayanıklılığını test etmek için nadiren geliştirme kümesi. EKS kümesinin
tüm düğümleri yönetin.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Yalnızca Spot Bulut Sunucularını içeren yönetilen bir düğüm grubu oluşturun.

B. İki yönetilen düğüm grubu oluşturun. İsteğe Bağlı Bulut Sunucularıyla bir düğüm grubu sağlayın.
İkinci düğüm grubuna Spot Bulut Sunucularını sağlayın.

C. Spot Bulut Sunucularını kullanan başlatma yapılandırmasına sahip bir Otomatik Ölçeklendirme grubu oluşturun.
Düğümleri EKS kümesine eklemek için kullanıcı verilerini yapılandırın.

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

Soru 678
Bir şirket hassas verileri Amazon S3'te saklıyor. Bir çözüm mimarının bir çözüm yaratması gerekir.
şifreleme çözümü. Şirketin, kullanıcıların oluşturma, döndürme ve değiştirme yeteneklerini tam olarak kontrol etmesi gerekiyor.
Şifrelenmesi gereken veriler için şifreleme anahtarlarını minimum çabayla devre dışı bırakın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) varsayılan sunucu tarafı şifrelemeyi kullanarak
hassas verileri saklayın.

B. AWS Key Management Service'i (AWS KMS) kullanarak müşteri tarafından yönetilen bir anahtar oluşturun. Kullanım
AWS KMS anahtarlarıyla sunucu tarafı şifrelemeyi kullanarak S3 nesnelerini şifrelemeye yönelik yeni anahtar
(SSE-KMS).

C. AWS Key Management Service'i (AWS KMS) kullanarak bir AWS tarafından yönetilen anahtar oluşturun. Şunu kullanın:
AWS KMS anahtarlarıyla sunucu tarafı şifrelemeyi kullanarak S3 nesnelerini şifrelemek için yeni anahtar
(SSE-KMS).

D. S3 nesnelerini bir Amazon EC2 bulut sunucusuna indirin. Müşteriyi kullanarak nesneleri şifreleyin
yönetilen anahtarlar. Şifrelenmiş nesneleri Amazon S3'e geri yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Key Management Service'i (AWS KMS) kullanarak müşteri tarafından yönetilen bir anahtar oluşturun. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanarak S3 nesnelerini şifrelemek için yeni anahtarı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 679
Bir şirket şirket içi sanal makinelerini (VM'ler) AWS'ye yedeklemek istiyor. Şirketin
yedekleme çözümü, şirket içi yedeklemeleri nesneler olarak bir Amazon S3 klasörüne aktarır. S3
Yedeklemeler 30 gün boyunca saklanmalı ve 30 gün sonra otomatik olarak silinmelidir.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (Üç tanesini seçin.)

A. S3 Object Lock'un etkin olduğu bir S3 klasörü oluşturun.

B. Nesne sürümü oluşturmanın etkin olduğu bir S3 grubu oluşturun.

C. Nesneler için 30 günlük varsayılan saklama süresini yapılandırın.

D. Nesneleri 30 gün boyunca korumak için bir S3 Yaşam Döngüsü ilkesi yapılandırın.

E. Nesnelerin süresinin 30 gün sonra dolmasını sağlayacak bir S3 Yaşam Döngüsü ilkesi yapılandırın.

F. Nesneleri 30 günlük saklama süresiyle etiketlemek için yedekleme çözümünü yapılandırın

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

Soru 680
Bir çözüm mimarının dosyaları bir Amazon S3 klasöründen bir Amazon Elastic File'a kopyalaması gerekiyor
Sistem (Amazon EFS) dosya sistemi ve başka bir S3 klasörü. Dosyalar kopyalanmalıdır
sürekli. Orijinal S3 klasörüne sürekli olarak yeni dosyalar eklenir. Kopyalanan dosyalar
yalnızca kaynak dosya değiştiğinde üzerine yazılabilir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Hem hedef S3 klasörü hem de EFS dosya sistemi için bir AWS DataSync konumu oluşturun.
Hedef S3 klasörü ve EFS dosya sistemi için bir görev oluşturun. Aktarım modunu şu şekilde ayarlayın:
yalnızca değişen verileri aktarın.

B. Bir AWS Lambda işlevi oluşturun. Dosya sistemini fonksiyona bağlayın. S3 etkinliği ayarlama
Amazon S3'te dosyalar oluşturulduğunda ve değiştirildiğinde işlevi çağırmak için bildirim. Yapılandır
dosyaları dosya sistemine ve hedef S3 klasörüne kopyalama işlevi.

C. Hem hedef S3 klasörü hem de EFS dosya sistemi için bir AWS DataSync konumu oluşturun.
Hedef S3 klasörü ve EFS dosya sistemi için bir görev oluşturun. Aktarım modunu şu şekilde ayarlayın:
tüm verileri aktarın.

D. Dosya sistemiyle aynı VPC'de bir Amazon EC2 bulut sunucusu başlatın. Dosya sistemini bağlayın.
Origin S3 klasöründe değişen tüm nesneleri düzenli olarak senkronize etmek için bir komut dosyası oluşturun.
hedef S3 klasörü ve takılı dosya sistemi.

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

Soru 681
Bir şirket Amazon EC2 bulut sunucularını kullanıyor ve verileri Amazon Elastic Block Store'da saklıyor
(Amazon EBS) ciltleri. Şirket, tüm verilerin kullanımda değilken şifrelendiğinden emin olmalıdır.
AWS Anahtar Yönetimi Hizmeti (AWS KMS). Şirket rotasyonu kontrol edebilmelidir.
şifreleme anahtarları.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Müşteri tarafından yönetilen bir anahtar oluşturun. EBS birimlerini şifrelemek için anahtarı kullanın.

B. EBS birimlerini şifrelemek için AWS tarafından yönetilen bir anahtar kullanın. Otomatik yapılandırmak için tuşunu kullanın
anahtar döndürme.

C. İçe aktarılan anahtar malzemesiyle harici bir KMS anahtarı oluşturun. EBS'yi şifrelemek için anahtarı kullanın
hacimler.

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

Soru 682
Bir şirketin Amazon EC2 bulut sunucularında kullanımda olmayan veri şifrelemeyi zorunlu kılacak bir çözüme ihtiyacı var.
çözüm, uyumlu olmayan kaynakları otomatik olarak tanımlamalı ve uyumluluk politikalarını uygulamalıdır.
bulgular.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Kullanıcıların yalnızca şifrelenmiş Amazon Elastic Block Store oluşturmasına olanak tanıyan bir IAM politikası kullanın
(Amazon EBS) ciltleri. Algılamayı otomatikleştirmek için AWS Config ve AWS Systems Manager'ı kullanın
ve şifrelenmemiş EBS birimlerinin iyileştirilmesi.

B. Şifrelenmiş Amazon'a erişimi yönetmek için AWS Key Management Service'i (AWS KMS) kullanın
Elastic Block Store (Amazon EBS) birimleri. AWS Lambda ve Amazon EventBridge'i kullanarak
şifrelenmemiş EBS birimlerinin algılanmasını ve iyileştirilmesini otomatikleştirin.

C. Şifrelenmemiş Amazon Elastic Block Store (Amazon EBS) birimlerini tespit etmek için Amazon Macie'yi kullanın.
Mevcut ve yeni EBS'yi otomatik olarak şifrelemek için AWS Systems Manager Automation kurallarını kullanın
hacimler.

D. Şifrelenmemiş Amazon Elastic Block Store'u (Amazon EBS) tespit etmek için Amazon denetçisini kullanın
hacimler. Mevcut ve yeniyi otomatik olarak şifrelemek için AWS Systems Manager Automation kurallarını kullanın
EBS hacimleri.

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

Soru 683
Bir şirket, çok katmanlı şirket içi uygulamasını AWS'ye taşıyor. Uygulama aşağıdakilerden oluşur:
tek düğümlü bir MySQL veritabanı ve çok düğümlü bir web katmanı. Şirket değişiklikleri en aza indirmelidir
Geçiş sırasında uygulamaya. Şirket uygulama esnekliğini artırmak istiyor
göçten sonra.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Web katmanını, bir Uygulamanın arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularına taşıyın
Yük Dengeleyici.

B. Veritabanını bir Ağın arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularına taşıyın
Yük Dengeleyici.

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

Soru 684
Bir şirket web uygulamalarını şirket içinden AWS'ye taşımak istiyor. Şirket
ab-merkez-1 bölgesine yakın konumdadır. Düzenlemeler nedeniyle şirket faaliyete geçemiyor
eu-central-1'deki bazı uygulamalar. Şirket milisaniyenin tek haneli rakamına ulaşmak istiyor
gecikme.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamaları eu-central-1'de dağıtın. Şirketin VPC'sini eu-central-1'den
Amazon CloudFront'ta uç konumu.

B. Şirketin VPC'sini genişleterek uygulamaları AWS Yerel Bölgelerine dağıtın.
eu-central-1'den seçilen Yerel Bölgeye.

C. Uygulamaları eu-central-1'de dağıtın. Şirketin VPC'sini eu-central-1'den
Amazon CloudFront'taki bölgesel uç önbellekler.

D. Şirketin VPC'sini genişleterek uygulamaları AWS Dalgaboyu Bölgelerinde dağıtın.
eu-central-1'den seçilen Dalga Boyu Bölgesine.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirketin VPC'sini eu-central-1'den seçilen Yerel Bölgeye genişleterek uygulamaları AWS Yerel Bölgelerinde dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 685
Bir şirketin e-ticaret web sitesi öngörülemeyen trafiğe sahip ve aşağıdakileri gerçekleştirmek için AWS Lambda işlevlerini kullanıyor:
özel bir Amazon RDS for PostgreSQL veritabanı bulut sunucusuna doğrudan erişin. Şirket istiyor
öngörülebilir veritabanı performansını koruyun ve Lambda çağrılarının yapılmadığından emin olun
Veritabanını çok fazla bağlantıyla aşırı yükleyin.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. İstemci sürücüsünü bir RDS özel uç noktasına yönlendirin. Lambda işlevlerini bir VPC'nin içine dağıtın.

B. İstemci sürücüsünü bir RDS proxy uç noktasına yönlendirin. Lambda işlevlerini bir VPC'nin içine dağıtın.

C. İstemci sürücüsünü bir RDS özel uç noktasına yönlendirin. Lambda işlevlerini bir VPC'nin dışına dağıtın.

D. İstemci sürücüsünü bir RDS proxy uç noktasına yönlendirin. Lambda işlevlerini bir VPC'nin dışına dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İstemci sürücüsünü bir RDS proxy uç noktasına yönlendirin. Lambda işlevlerini bir VPC'nin içine dağıtın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 686
Bir şirket bir uygulama oluşturuyor. Şirket, uygulamanın testlerinden elde edilen verileri
birden fazla şirket içi konum.
Şirketin şirket içi konumları bir AWS Bölgesindeki VPC'lere bağlaması gerekiyor.
AWS Bulut. Hesapların ve VPC'lerin sayısı önümüzdeki yıl artacaktır. ağ
mimari yeni bağlantıların yönetimini basitleştirmeli ve
ölçek.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. VPC'ler arasında bir eşleme bağlantısı oluşturun. VPC'ler arasında bir VPN bağlantısı oluşturun
ve şirket içi konumlar.

B. Bir Amazon EC2 bulut sunucusu başlatın. Örneğin, VPN kullanan VPN yazılımını ekleyin
tüm VPC'leri ve şirket içi konumları bağlamak için bağlantı.

C. Bir transit ağ geçidi oluşturun. VPC bağlantıları için VPC ekleri oluşturun. VPN oluştur
şirket içi bağlantılar için ekler.

D. Şirket içi konumlar ile merkezi arasında bir AWS Direct Connect bağlantısı oluşturun
VPC. Eşleme bağlantılarını kullanarak merkezi VPC'yi diğer VPC'lere bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir geçiş ağ geçidi oluşturun. VPC bağlantıları için VPC ekleri oluşturun. Şirket içi bağlantılar için VPN ekleri oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 687
AWS kullanan bir şirketin üretim için gerekli kaynakları tahmin edecek bir çözüme ihtiyacı var
her ay işlemler yapılır. Çözüm, halihazırda bir dosyada saklanan geçmiş değerleri kullanmalıdır.
Amazon S3 kovası. Şirketin makine öğrenimi (ML) deneyimi yok ve bir makine öğrenimi kullanmak istiyor
eğitim ve tahminler için yönetilen hizmet.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Bir Amazon SageMaker modelini dağıtın. Çıkarım için bir SageMaker uç noktası oluşturun.

B. S3 klasöründeki geçmiş verileri kullanarak bir modeli eğitmek için Amazon SageMaker'ı kullanın.

C. Amazon SageMaker'ı kullanan bir işlev URL'si ile bir AWS Lambda işlevini yapılandırın
Girdilere dayalı tahminler oluşturmak için uç noktalar.

D. Amazon Tahmini kullanan bir işlev URL'si ile bir AWS Lambda işlevini yapılandırın
Girdilere dayalı bir tahmin oluşturmak için tahminci.

E. S3 klasöründeki geçmiş verileri kullanarak bir Amazon Forsecast tahmincisini eğitin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E`
> - **Önerilen Çözüm:** Girişlere dayalı bir tahmin oluşturmak için Amazon Forecast tahmin aracını kullanan bir işlev URL'si ile bir AWS Lambda işlevini yapılandırın. S3 klasöründeki geçmiş verileri kullanarak bir Amazon Forsecast tahmincisini eğitin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 688
Bir şirket, AWS Kuruluşlarındaki AWS hesaplarını yönetir. AWS IAM Kimlik Merkezi (AWS
Hesaplar için Tek Oturum Açma) ve AWS Control Tower yapılandırılmıştır. Şirket istiyor
tüm hesaplarda birden fazla kullanıcı iznini yönetin.
İzinler birden fazla IAM kullanıcısı tarafından kullanılacaktır ve geliştirici ile geliştirici arasında paylaştırılmalıdır.
yönetici ekipleri. Her takım farklı izinler gerektirir. Şirket çözüm istiyor
Buna her iki takımda da işe alınan yeni kullanıcılar dahildir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. IAM Identity Center'da her hesap için ayrı kullanıcılar oluşturun. Ayrı geliştirici oluşturun ve
IAM Identity Center'daki yönetici grupları. Kullanıcıları uygun gruplara atayın. Bir oluştur
ayrıntılı izinler ayarlamak için her grup için özel IAM politikası.

B. IAM Identity Center'da her hesap için ayrı kullanıcılar oluşturun. Ayrı geliştirici oluşturun ve
IAM Identity Center'daki yönetici grupları. Kullanıcıları uygun gruplara atayın. Ekle
AWS, ayrıntılı izinler için gerektiği şekilde her kullanıcı için IAM politikalarını yönetti.

C. IAM Identity Center'da bireysel kullanıcılar oluşturun. Yeni geliştirici ve yönetici grupları oluşturun
IAM Kimlik Merkezi'nde. Aşağıdakiler için uygun IAM politikalarını içeren yeni izin kümeleri oluşturun:
her grup. Yeni grupları uygun hesaplara atayın. Yeni izin kümelerini atayın
yeni gruplara. Yeni kullanıcılar işe alındığında onları uygun gruba ekleyin.

D. IAM Identity Center'da bireysel kullanıcılar oluşturun. Aşağıdakileri içeren yeni izin kümeleri oluşturun:
her kullanıcı için uygun IAM politikaları. Kullanıcıları uygun hesaplara atayın. Hibe
belirli hesaplardan kullanıcılara ek IAM izinleri. Yeni kullanıcılar işe alındığında,
bunları IAM Identity Center'a ekleyin ve hesaplara atayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** IAM Identity Center'da bireysel kullanıcılar oluşturun. IAM Identity Center'da yeni geliştirici ve yönetici grupları oluşturun. Her grup için uygun IAM politikalarını içeren yeni izin kümeleri oluşturun. Yeni grupları uygun hesaplara atayın. Yeni izin kümelerini yeni gruplara atayın. Yeni kullanıcılar işe alındığında onları uygun gruba ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 689
Bir şirket Amazon Elastic Block Store (Amazon EBS) hacmini standartlaştırmak istiyor
şifreleme stratejisi. Şirket ayrıca maliyeti ve konfigürasyon çabasını en aza indirmek istiyor
birim şifreleme kontrolünü çalıştırmak için gereklidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EBS birimlerini açıklamak ve EBS birimlerinin şifrelendiğini doğrulamak için API çağrıları yazın.
API çağrılarını çalıştıracak bir AWS Lambda işlevi planlamak için Amazon EventBridge'i kullanın.

B. EBS birimlerini açıklamak ve EBS birimlerinin şifrelendiğini doğrulamak için API çağrıları yazın.
API çağrılarını bir AWS Fargate görevinde çalıştırın.

C. Etiketlerin kullanılmasını gerektiren bir AWS Identity and Access Management (IAM) politikası oluşturun.
EBS hacimleri. Düzgün etiketlenmemiş kaynakları görüntülemek için AWS Cost Explorer'ı kullanın. Şifrele
etiketlenmemiş kaynakları manuel olarak

D. Bir birimin şifrelenip şifrelenmediğini değerlendirmek ve birimi işaretlemek için Amazon EBS'ye yönelik bir AWS Config kuralı oluşturun.
şifrelenmemişse birim.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir birimin şifrelenip şifrelenmediğini değerlendirmek ve şifrelenmemişse birimi işaretlemek için Amazon EBS'ye yönelik bir AWS Config kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 690
Bir şirket düzenli olarak GB boyutunda dosyaları Amazon S3'e yüklüyor. Şirket dosyaları yükledikten sonra,
şirket, dosya formatının kodunu dönüştürmek için Amazon EC2 Spot Bulut Sunucularından oluşan bir filo kullanıyor.
Şirket, şirket içi verilerden veri yüklediğinde şirketin verimi ölçeklendirmesi gerekiyor
merkezi Amazon S3'e ve şirketin Amazon S3'ten EC2'ye veri indirmesi
örnekler.
Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. S3 klasörüne doğrudan erişmek yerine S3 klasörü erişim noktasını kullanın.

B. Dosyaları birden fazla S3 klasörüne yükleyin.

C. S3 çok parçalı yüklemeleri kullanın.

D. Bir nesnenin birden çok bayt aralığını paralel olarak getirin.

E. Dosyaları yüklerken her nesneye rastgele bir önek ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** S3 çok parçalı yüklemeleri kullanın. Bir nesnenin birden çok bayt aralığını paralel olarak getirin.
>
> **Sınav Konu Özeti:**
> - **S3 Multipart Upload (Çok Parçalı Yükleme):** Büyük dosya yüklemelerini paralel parçalara ayırarak gerçekleştirir. 100 MB üzerindeki nesneler için önerilir, 5 GB üzerindeki nesneler için zorunludur. Ağ kesintilerinde yalnızca başarısız olan parçanın tekrar yüklenmesini sağlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 691
Bir çözüm mimarı, dağıtılan bir web uygulaması için paylaşılan bir depolama çözümü tasarlıyor
birden fazla Erişilebilirlik Alanında. Web uygulaması Amazon EC2 bulut sunucularında çalışır.
Otomatik Ölçeklendirme grubunda. Şirket içerikte sık sık değişiklik yapmayı planlıyor.
Çözümün, değişiklikler olur olmaz yeni içeriği geri döndürme konusunda güçlü bir tutarlılığa sahip olması gerekir
meydana gelir.
Bu gereksinimleri hangi çözümler karşılıyor? (İki tane seçin.)

A. AWS Storage Gateway Birim Ağ Geçidi İnternet Küçük Bilgisayar Sistemleri Arayüzünü Kullanın
Bireysel EC2 bulut sunucularına bağlanan (iSCSI) blok depolama.

B. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini bağlayın
bireysel EC2 bulut sunucularında.

C. Paylaşılan bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun. EBS birimini bağlayın
bireysel EC2 örnekleri.

D. EC2 ana bilgisayarları arasında sürekli veri senkronizasyonu gerçekleştirmek için AWS DataSync'i kullanın.
Otomatik Ölçeklendirme grubu.

E. Web içeriğini depolamak için bir Amazon S3 klasörü oluşturun. Önbellek Kontrolü için meta verileri ayarlayın
önbelleksiz başlığı. İçeriği sunmak için Amazon CloudFront'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini ayrı EC2 bulut sunucularına bağlayın. Web içeriğini depolamak için bir Amazon S3 klasörü oluşturun. Cache-Control başlığının meta verilerini önbellek yok olarak ayarlayın. İçeriği sunmak için Amazon CloudFront'u kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 692
Bir şirket, Uygulama Yükü kullanarak üç AWS Bölgesinde bir uygulamayı dağıtıyor
Dengeleyici. Amazon Route 53, trafiği bu Bölgeler arasında dağıtmak için kullanılacaktır.
Bir çözüm mimarının MOST'u sağlamak için hangi Route 53 konfigürasyonunu kullanması gerekir?
yüksek performanslı deneyim?

A. Gecikme politikasına sahip bir A kaydı oluşturun.

B. Coğrafi konum ilkesiyle bir A kaydı oluşturun.

C. Yük devretme ilkesiyle bir CNAME kaydı oluşturun.

D. Coğrafi yakınlık politikasıyla bir CNAME kaydı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Gecikme ilkesine sahip bir A kaydı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 693
Bir şirketin yerleşik bir NoSQL veritabanı içeren bir web uygulaması vardır. Uygulama
Amazon EC2 bulut sunucularında bir Application Load Balancer (ALB) arkasında çalışır. Örnekler çalıştırılır
tek bir Erişilebilirlik Alanındaki bir Amazon EC2 Auto Scaling grubunda.
Son zamanlarda trafikte yaşanan bir artış, uygulamanın yüksek düzeyde kullanılabilir olmasını ve veritabanının
sonunda tutarlı olun.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. ALB'yi bir Ağ Yük Dengeleyiciyle değiştirin. Yerleşik NoSQL veritabanını aşağıdakilerle koruyun:
EC2 bulut sunucularındaki çoğaltma hizmeti.

B. ALB'yi bir Ağ Yük Dengeleyiciyle değiştirin. Katıştırılmış NoSQL veritabanını şuraya taşıyın:
AWS Database Migration Service'i (AWS DMS) kullanarak Amazon DynamoDB.

C. Otomatik Ölçeklendirme grubunu, üç Erişilebilirlik Alanında EC2 bulut sunucularını kullanacak şekilde değiştirin. Bakım
EC2 bulut sunucularındaki çoğaltma hizmetiyle birlikte yerleşik NoSQL veritabanı.

D. Otomatik Ölçeklendirme grubunu, üç Erişilebilirlik Alanında EC2 bulut sunucularını kullanacak şekilde değiştirin. Taşı
AWS Database Migration'ı kullanarak yerleşik NoSQL veritabanını Amazon DynamoDB'ye aktarma
Hizmet (AWS DMS).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Üç Erişilebilirlik Alanında EC2 bulut sunucularını kullanacak şekilde Otomatik Ölçeklendirme grubunu değiştirin. AWS Database Migration Service'i (AWS DMS) kullanarak yerleşik NoSQL veritabanını Amazon DynamoDB'ye taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 694
Bir şirket AWS'de bir alışveriş uygulaması geliştiriyor. Uygulama bir katalog sunuyor
ayda bir kez değişir ve trafik hacmine göre ölçeklendirilmesi gerekir. Şirket şunu istiyor
uygulamadan mümkün olan en düşük gecikme. Her kullanıcının alışveriş sepetindeki verilerin
oldukça mevcuttur. Kullanıcının bağlantısı kesilse bile kullanıcı oturumu verileri mevcut olmalıdır ve
yeniden bağlanır.
Alışveriş sepeti verilerinin korunmasını sağlamak için bir çözüm mimarı ne yapmalıdır?
kez?

A. Yapışkan oturumlar özelliğini (oturum benzeşimi) etkinleştirmek için bir Application Load Balancer yapılandırın
Amazon Aurora'daki kataloğa erişim için.

B. Katalog verilerini Amazon DynamoDB'den önbelleğe almak için Amazon ElastiCache for Redis'i yapılandırın ve
kullanıcının oturumundan alışveriş sepeti verileri.

C. Katalog verilerini Amazon DynamoDB'den önbelleğe almak için Amazon OpenSearch Service'i yapılandırın ve
kullanıcının oturumundan alışveriş sepeti verileri.

D. Amazon Elastic Block Store (Amazon EBS) depolama alanıyla bir Amazon EC2 örneğini yapılandırma
katalog ve alışveriş sepeti için. Otomatik anlık görüntüleri yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon DynamoDB'deki katalog verilerini ve kullanıcı oturumundaki alışveriş sepeti verilerini önbelleğe almak için Amazon ElastiCache for Redis'i yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 695
Bir şirket, Amazon'da dağıtılacak mikro hizmet tabanlı bir uygulama geliştiriyor
Elastik Kubernetes Hizmeti (Amazon EKS). Mikro hizmetler birbirleriyle etkileşime girecektir.
şirket, uygulamadaki performans sorunlarını belirlemek için uygulamanın gözlemlenebilir olmasını sağlamak istiyor
gelecek.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamayı, gönderilen isteklerin sayısını azaltmak için Amazon ElastiCache'i kullanacak şekilde yapılandırın.
mikro hizmetlere gönderilir.

B. EKS kümelerinden ölçüm toplamak için Amazon CloudWatch Container Insights'ı yapılandırın.
Mikro hizmetler arasındaki istekleri izlemek için AWS X-Ray'i yapılandırın.

C. API çağrılarını incelemek için AWS CloudTrail'i yapılandırın. Bir Amazon QuickSight kontrol paneli oluşturun
Mikro hizmet etkileşimlerini gözlemleyin.

D. Uygulamanın performansını anlamak için AWS Trusted Advisor'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EKS kümelerinden ölçüm toplamak için Amazon CloudWatch Container Insights'ı yapılandırın. Mikro hizmetler arasındaki istekleri izlemek için AWS X-Ray'i yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 696
Bir şirketin müşterilerine verilerine güvenli erişim sağlaması gerekir. Şirket süreçleri
müşteri verilerini ve sonuçları bir Amazon S3 klasöründe saklar.
Tüm veriler güçlü düzenlemelere ve güvenlik gereksinimlerine tabidir. Veriler olmalıdır
dinlenme sırasında şifrelenir. Her müşterinin AWS hesabından yalnızca kendi verilerine erişebilmesi gerekir.
Şirket çalışanlarının verilere erişmemesi gerekmektedir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her müşteri için bir AWS Sertifika Yöneticisi (ACM) sertifikası sağlayın. Verileri şifrele
müşteri tarafı. Özel sertifika ilkesinde, bir sorumlu dışındaki tüm sorumluların sertifikaya erişimini reddedin.
Müşterinin sağladığı IAM rolü.

B. Her müşteri için ayrı bir AWS Key Management Service (AWS KMS) anahtarı sağlayın.
Veri sunucusu tarafını şifreleyin. S3 grup politikasında, tüm sorumlular için verilerin şifresinin çözülmesini reddedin
müşterinin sağladığı IAM rolü hariç.

C. Her müşteri için ayrı bir AWS Key Management Service (AWS KMS) anahtarı sağlayın.
Veri sunucusu tarafını şifreleyin. Her KMS anahtar politikasında, tüm sorumlular için verilerin şifresinin çözülmesini reddedin
müşterinin sağladığı IAM rolü hariç.

D. Her müşteri için bir AWS Sertifika Yöneticisi (ACM) sertifikası sağlayın. Verileri şifrele
müşteri tarafı. Genel sertifika ilkesinde, bir sorumlu dışındaki tüm sorumluların sertifikaya erişimini reddedin.
Müşterinin sağladığı IAM rolü.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her müşteri için ayrı bir AWS Key Management Service (AWS KMS) anahtarı sağlayın. Veri sunucusu tarafını şifreleyin. Her KMS anahtar politikasında, müşterinin sağladığı IAM rolü dışındaki tüm sorumlular için verilerin şifresinin çözülmesini reddedin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 697
Bir çözüm mimarı, iki genel alt ağ ve iki özel alt ağ içeren bir VPC oluşturur. bir
kurumsal güvenlik talimatı, çözüm mimarının tüm Amazon EC2 bulut sunucularını başlatmasını gerektirir
özel bir alt ağda. Ancak çözüm mimarı, çalıştıran bir EC2 bulut sunucusunu başlattığında
özel bir alt ağdaki 80 ve 443 numaralı bağlantı noktalarında bulunan web sunucusuna hiçbir harici internet trafiği bağlanamaz
sunucu.
Çözüm mimarı bu sorunu çözmek için ne yapmalıdır?

A. EC2 örneğini özel bir alt ağdaki Otomatik Ölçeklendirme grubuna ekleyin. DNS'nin olduğundan emin olun
web sitesi kaydı Otomatik Ölçeklendirme grup tanımlayıcısına çözümlenir.

B. Genel bir alt ağda internete yönelik bir Uygulama Yük Dengeleyicisi (ALB) sağlayın. EC2'yi ekleyin
örneği AL ile ilişkili hedef gruba kopyalayın. DNS kaydının AL ile ilişkili olduğundan emin olun.
web sitesi ALB'ye çözümlenir.

C. Özel bir alt ağda bir NAT ağ geçidi başlatın. Özel alt ağların rota tablosunu şu şekilde güncelleyin:
NAT ağ geçidine varsayılan bir rota ekleyin. NAT ağ geçidine genel bir Elastik IP adresi ekleyin.

D. EC2 örneğine bağlı güvenlik grubunun bağlantı noktasında HTTP trafiğine izin verdiğinden emin olun
80 ve 443 numaralı bağlantı noktasındaki HTTPS trafiği. Web sitesinin DNS kaydının, 443 numaralı bağlantı noktasına çözümlendiğinden emin olun.
EC2 örneğinin genel IP adresi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Genel bir alt ağda internete yönelik bir Application Load Balancer (ALB) sağlayın. EC2 örneğini AL ile ilişkili hedef gruba ekleyin Web sitesinin DNS kaydının ALB'ye çözümlendiğinden emin olun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 698
Bir şirket Amazon Elastic Kubernetes Service'e (Amazon EKS) yeni bir uygulama dağıtıyor
AWS Fargate kümesiyle. Uygulamanın veri kalıcılığı için bir depolama çözümüne ihtiyacı var.
Çözümün yüksek oranda kullanılabilir ve hataya dayanıklı olması gerekir. Çözüm aynı zamanda taraflar arasında da paylaşılmalıdır.
çoklu uygulama kapsayıcıları.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Aynı Erişilebilirlik Alanlarında Amazon Elastic Block Store (Amazon EBS) birimleri oluşturun
EKS çalışan düğümlerinin yerleştirildiği yer. Birimleri EKS'deki StorageClass nesnesine kaydetme
küme. Verileri kapsayıcılar arasında paylaşmak için EBS Multi-Attach'ı kullanın.

B. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. Dosya sistemini bir
Bir EKS kümesindeki StorageClass nesnesi. Tüm kapsayıcılar için aynı dosya sistemini kullanın.

C. Bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun. Sesi bir dosyaya kaydedin
Bir EKS kümesindeki StorageClass nesnesi. Tüm kaplar için aynı hacmi kullanın.

D. Aynı Erişilebilirlik Alanlarında Amazon Elastic File System (Amazon EFS) dosya sistemleri oluşturun
EKS çalışan düğümlerinin yerleştirildiği yer. Dosya sistemlerini bir StorageClass nesnesine kaydedin.
EKS kümesi. Verileri dosya sistemleri arasında senkronize etmek için bir AWS Lambda işlevi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. Dosya sistemini bir EKS kümesindeki StorageClass nesnesine kaydedin. Tüm kapsayıcılar için aynı dosya sistemini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 699
Bir şirketin yerel veri merkezinde Docker konteynerlerini kullanan bir uygulaması var.
uygulama, kalıcı verileri ana bilgisayardaki bir birimde depolayan bir konteyner ana bilgisayarında çalışır.
kapsayıcı örnekleri depolanan kalıcı verileri kullanır.
Şirket, uygulamayı tam olarak yönetilen bir hizmete taşımak istiyor çünkü şirket
herhangi bir sunucuyu veya depolama altyapısını yönetmek istemez.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Elastic Kubernetes Service'i (Amazon EKS) kendi kendine yönetilen düğümlerle kullanın. Bir oluştur
Amazon EC2 bulut sunucusuna eklenen Amazon Elastic Block Store (Amazon EBS) birimi. Şunu kullanın:
Konteynerlere monte edilmiş kalıcı bir birim olarak EBS birimi.

B. Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate başlatma türüyle kullanın.
Bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. EFS birimini şu şekilde ekleyin:
kaplara monte edilmiş kalıcı depolama birimi.

C. Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate başlatma türüyle kullanın.
Bir Amazon S3 klasörü oluşturun. S3 klasörünü, sunucuya monte edilmiş kalıcı bir depolama birimi olarak eşleyin.
konteynerler.

D. Amazon Elastic Container Service'i (Amazon ECS) Amazon EC2 başlatma türüyle kullanın.
Bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. EFS birimini şu şekilde ekleyin:
kaplara monte edilmiş kalıcı depolama birimi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate başlatma türüyle kullanın. Bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. EFS birimini kapsayıcılara takılı kalıcı bir depolama birimi olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
