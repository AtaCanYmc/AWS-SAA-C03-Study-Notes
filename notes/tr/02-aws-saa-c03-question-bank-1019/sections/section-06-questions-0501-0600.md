# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 06

> **Soru Aralığı:** 501 - 600 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #500

Bir şirketin bünyesinde birden fazla Windows dosya sunucusu vardır. Şirket geçiş yapmak istiyor ve
dosyalarını bir Amazon FSx for Windows Dosya Sunucusu dosya sisteminde birleştirin. Dosya izinleri
erişim haklarının değişmemesini sağlamak için korunmalıdır.
Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. AWS DataSync aracılarını şirket içinde dağıtın. Verileri aktarmak için DataSync görevlerini zamanlayın
Windows Dosya Sunucusu dosya sistemi için FSx.

B. AWS CLI'yi kullanarak her dosya sunucusundaki paylaşımları Amazon S3 klasörlerine kopyalayın. Program
AWS DataSync, verileri Windows Dosya Sunucusu için FSx dosya sistemine aktarma görevlerini yerine getirir.

C. Her dosya sunucusundan sürücüleri çıkarın. Sürücüleri Amazon S3'e aktarılmak üzere AWS'ye gönderin.
Verileri Windows Dosya Sunucusu için FSx dosya sistemine aktarmak üzere AWS DataSync görevlerini planlayın.

D. Bir AWS Snowcone cihazı sipariş edin. Cihazı şirket içi ağa bağlayın. Başlat
Cihazdaki AWS DataSync aracıları. Verileri FSx'e aktarmak için DataSync görevlerini zamanlayın.
Windows Dosya Sunucusu dosya sistemi.

E. Bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin. Cihazı şuraya bağlayın:
şirket içi ağ. AWS CLI'yi kullanarak verileri cihaza kopyalayın. Cihazı şu adrese geri gönderin:
Amazon S3'e aktarma için AWS. Verileri FSx'e aktarmak için AWS DataSync görevlerini planlayın
Windows Dosya Sunucusu dosya sistemi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** AWS DataSync aracılarını şirket içinde dağıtın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın. Bir AWS Snowcone cihazı sipariş edin. Cihazı şirket içi ağa bağlayın. Cihazda AWS DataSync aracılarını başlatın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 501
Bir şirket, müşteri ödeme verilerini şirketin Amazon S3'teki veri gölüne almak istiyor.
Şirket ortalama olarak her dakika ödeme verilerini alıyor. Şirket analiz etmek istiyor
ödeme verilerini gerçek zamanlı olarak Daha sonra şirket, verileri veri gölüne almak ister.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Verileri almak için Amazon Kinesis Data Streams'i kullanın. Verileri analiz etmek için AWS Lambda'yı kullanın
gerçek zamanlı.

B. Verileri almak için AWS Glue'yu kullanın. Verileri gerçek anlamda analiz etmek için Amazon Kinesis Data Analytics'i kullanın
zaman.

C. Verileri almak için Amazon Kinesis Data Firehose'u kullanın. Amazon Kinesis Data Analytics'i kullanarak şunları yapın:
Verileri gerçek zamanlı olarak analiz edin.

D. Verileri almak için Amazon API Gateway'i kullanın. Verileri gerçek zamanlı analiz etmek için AWS Lambda'yı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri almak için Amazon Kinesis Data Firehose'u kullanın. Verileri gerçek zamanlı olarak analiz etmek için Amazon Kinesis Data Analytics'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 502
Bir şirket, Amazon EC2'de içerik yönetim sistemi (CMS) kullanan bir web sitesi işletiyor.
CMS, tek bir EC2 bulut sunucusunda çalışır ve Amazon Aurora MySQL Multi-AZ DB'yi kullanır
veri katmanı için örnek. Web sitesi görselleri bir Amazon Elastic Block Store'da (Amazon
EC2 bulut sunucusunun içine monte edilen EBS) birimi.
Bir çözüm mimarının performansı geliştirmek için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
web sitesinin dayanıklılığı? (İki tane seçin.)

A. Web sitesi görüntülerini her EC2 bulut sunucusuna monte edilen bir Amazon S3 klasörüne taşıyın

B. Birincil EC2 örneğinden bir NFS paylaşımı kullanarak web sitesi resimlerini paylaşın. Bunu monte et
diğer EC2 bulut sunucularında paylaşın.

C. Web sitesi görsellerini, Amazon Elastic File System (Amazon EFS) dosya sistemine taşıyın.
her EC2 örneğine monte edilmiştir.

D. Mevcut EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. AMI'yi kullanarak
Otomatik Ölçeklendirme grubunun bir parçası olarak Application Load Balancer'ın arkasında yeni örnekler sağlayın.
Otomatik Ölçeklendirme grubunu en az iki örneği koruyacak şekilde yapılandırın. Bir yapılandırma
web sitesi için AWS Global Accelerator'daki hızlandırıcı

E. Mevcut EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. AMI'yi kullanarak
Otomatik Ölçeklendirme grubunun bir parçası olarak Application Load Balancer'ın arkasında yeni örnekler sağlayın.
Otomatik Ölçeklendirme grubunu en az iki örneği koruyacak şekilde yapılandırın. Amazon'u yapılandırın
Web sitesi için CloudFront dağıtımı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Web sitesi görüntülerini her EC2 bulut sunucusuna bağlanan bir Amazon Elastic File System (Amazon EFS) dosya sistemine taşıyın. Mevcut EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. Otomatik Ölçeklendirme grubunun parçası olarak Application Load Balancer'ın arkasında yeni örnekler sağlamak için AMI'yı kullanın. Otomatik Ölçeklendirme grubunu en az iki örneği koruyacak şekilde yapılandırın. Web sitesi için bir Amazon CloudFront dağıtımı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 503
Bir şirket altyapı izleme hizmeti yürütmektedir. Şirket yeni bir özellik geliştiriyor
hizmetin müşteri AWS hesaplarındaki verileri izlemesine olanak tanıyacaktır. Yeni özellik AWS'yi arayacak
Amazon EC2 bulut sunucularını tanımlamak ve Amazon CloudWatch'u okumak için müşteri hesaplarındaki API'ler
Metrikler.
Şirket, müşteri hesaplarına EN güvenli şekilde erişim sağlamak için ne yapmalıdır?

A. Müşterilerin hesaplarında salt okunur EC2 ile bir IAM rolü oluşturduklarından emin olun ve
CloudWatch izinleri ve şirketin hesabına yönelik bir güven politikası.

B. Geçici AWS sağlamak için jeton satış makinesi uygulayan sunucusuz bir API oluşturun
salt okunur EC2 ve CloudWatch izinlerine sahip bir rol için kimlik bilgileri.

C. Müşterilerin hesaplarında salt okunur EC2 ile bir IAM kullanıcısı oluşturduklarından emin olun ve
CloudWatch izinleri. Müşteri erişimini ve gizli anahtarları şifreleyin ve bir sırda saklayın
yönetim sistemi.

D. Müşterilerin, IAM rolünü kullanmak için hesaplarında bir Amazon Cognito kullanıcısı oluşturduklarından emin olun
salt okunur EC2 ve CloudWatch izinleriyle. Amazon Cognito kullanıcısını şifreleyin ve saklayın
ve bir sır yönetim sisteminde şifre.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Müşterilerin, hesaplarında salt okunur EC2 ve CloudWatch izinlerine ve şirket hesabına yönelik bir güven politikasına sahip bir IAM rolü oluşturduklarından emin olun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 504
Bir şirketin ABD-Doğu-1 Bölgesinde yüzlerce AWS'yi kapsayan birkaç VPC'yi bağlaması gerekiyor
hesaplar. Şirketin ağ ekibinin bulutu yönetmek için kendi AWS hesabı var
ağ.
VPC'leri bağlamak için operasyonel açıdan EN verimli çözüm nedir?

A. Her VPC arasında VPC eşleme bağlantıları kurun. İlgili her alt ağın rotasını güncelleyin
masa

B. Her VPC'yi ağ üzerinden bağlamak için her VPC'de bir NAT ağ geçidi ve bir internet ağ geçidi yapılandırın.
internet

C. Ağ ekibinin AWS hesabında bir AWS Transit Gateway oluşturun. Statiği yapılandır
her VPC'den rotalar.

D. Her VPC'ye VPN ağ geçitleri dağıtın. Ağ ekibinin AWS'sinde bir geçiş VPC'si oluşturun
Her VPC'ye bağlanmak için hesap.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ağ ekibinin AWS hesabında bir AWS Transit Gateway oluşturun. Her VPC'den statik rotaları yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru 505
Bir şirketin, verileri işlemek için her gece toplu işler çalıştıran Amazon EC2 bulut sunucuları var. EC2
örnekler İsteğe Bağlı faturalandırmayı kullanan bir Otomatik Ölçeklendirme grubunda çalışır. Bir iş bir tanesinde başarısız olursa
örneğin, başka bir örnek işi yeniden işleyecektir. Toplu işler sabah 12:00 ile
Her gün yerel saatle 06:00.
Hangi çözüm EC2 bulut sunucularının bu gereksinimleri EN uygun maliyetle karşılamasını sağlayacak?

A. Amazon EC2 için Auto bulut sunucusu ailesini kapsayan 1 yıllık bir Tasarruf Planı satın alın
Toplu işin kullandığı ölçeklendirme grubu.

B. Belirli bulut sunucusu türü ve işletim sistemi için 1 yıllık Rezerve Edilmiş Bulut Sunucusu satın alın
Toplu işin kullandığı Otomatik Ölçeklendirme grubundaki örnekler.

C. Otomatik Ölçeklendirme grubu için yeni bir başlatma şablonu oluşturun. Örnekleri Spot Bulut Sunucuları olarak ayarlayın.
CPU kullanımına göre ölçeği genişletecek bir politika ayarlayın.

D. Otomatik Ölçeklendirme grubu için yeni bir başlatma şablonu oluşturun. Örnek boyutunu artırın. Bir ayarla
CPU kullanımına göre ölçeği genişletme politikası.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubu için yeni bir başlatma şablonu oluşturun. Örnekleri Spot Bulut Sunucuları olarak ayarlayın. CPU kullanımına göre ölçeği genişletecek bir politika ayarlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 506
Bir sosyal medya şirketi, web sitesi için bir özellik geliştiriyor. Bu özellik kullanıcılara şu olanağı sağlayacak:
Fotoğraf yüklemek için. Şirket, büyük etkinlikler sırasında talepte önemli artışlar bekliyor ve
web sitesinin kullanıcılardan gelen yükleme trafiğini işleyebildiğinden emin olmalıdır.
Hangi çözüm bu gereksinimleri MOST ölçeklenebilirlikle karşılıyor?

A. Dosyaları kullanıcının tarayıcısından uygulama sunucularına yükleyin. Dosyaları bir Amazon'a aktarın
S3 kovası.

B. Bir AWS Storage Gateway dosya ağ geçidi sağlayın. Dosyaları doğrudan kullanıcının tarayıcısından yükleyin
dosya ağ geçidine.

C. Uygulamada Amazon S3 önceden imzalanmış URL'ler oluşturun. Dosyaları doğrudan kullanıcının sitesinden yükleyin
tarayıcıyı bir S3 klasörüne aktarın.

D. Bir Amazon Elastic File System (Amazon EFS) dosya sistemi sağlayın. Dosyaları doğrudan şuradan yükleyin:
kullanıcının tarayıcısından dosya sistemine.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulamada Amazon S3 önceden imzalanmış URL'ler oluşturun. Dosyaları doğrudan kullanıcının tarayıcısından bir S3 klasörüne yükleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 507
Bir şirketin seyahat biletleri için bir web uygulaması var. Uygulama bir veritabanına dayanmaktadır.
Kuzey Amerika'da tek bir veri merkezinde çalışır. Şirket uygulamayı genişletmek istiyor
küresel bir kullanıcı tabanına hizmet edin. Şirketin uygulamayı birden fazla AWS'ye dağıtması gerekiyor
Bölgeler. Rezervasyon veritabanındaki güncellemelerde ortalama gecikme 1 saniyeden az olmalıdır.
Şirket, web platformunun birden fazla Bölgede ayrı dağıtımlarını yapmak istiyor.
Ancak şirketin küresel olarak tek bir birincil rezervasyon veritabanını sürdürmesi gerekir.
tutarlı.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi çözümü önermelidir?

A. Uygulamayı Amazon DynamoDB'yi kullanacak şekilde dönüştürün. Merkez için genel bir tablo kullanın
rezervasyon masası. Her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.

B. Veritabanını bir Amazon Aurora MySQL veritabanına taşıyın. Aurora Okuma Kopyalarını Dağıtın
her Bölge. Erişim için her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.
veritabanı.

C. Veritabanını Amazon RDS for MySQL veritabanına taşıyın. MySQL okuma kopyalarını şuralarda dağıtın:
her Bölge. Erişim için her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.
veritabanı.

D. Uygulamayı Amazon Aurora Serverless veritabanına taşıyın. Örneklerini dağıtın
Her Bölgeye veri tabanı. Her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanarak
veritabanına erişin. Her Bölgedeki olay akışlarını işlemek için AWS Lambda işlevlerini kullanın.
veritabanlarını senkronize edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı Amazon DynamoDB'yi kullanacak şekilde dönüştürün. Merkez ayırma tablosu için genel bir tablo kullanın. Her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 508
Bir şirket birden fazla Microsoft Windows Server iş yükünü Amazon EC2'ye taşıdı
us-west-1 Bölgesinde çalışan bulut sunucuları. Şirket iş yüklerini manuel olarak yedekliyor
gerektiği gibi bir görüntü oluşturun.
Şirket, ABD-Batı-1 Bölgesi'nde yaşanacak bir doğal afet durumunda toparlanmayı istiyor
us-west-2 Bölgesinde iş yüklerini hızlı bir şekilde yönetin. Şirket 24 saatten fazla veri istemiyor
EC2 bulut sunucularında kayıp. Şirket ayrıca EC2'nin yedeklemelerini de otomatikleştirmek istiyor
örnekler.
Bu gereksinimleri EN AZ idari çabayla hangi çözümler karşılayacak? (Seç
iki.)

A. Amazon EC2 destekli bir Amazon Machine Image (AMI) yaşam döngüsü politikası oluşturarak
Etiketlere dayalı yedekleme. Yedeklemeyi günde iki kez çalışacak şekilde planlayın. İsteğe bağlı olarak görüntüyü kopyalayın.

B. Bir Amazon EC2 destekli Amazon Machine Image (AMI) yaşam döngüsü politikası oluşturarak
Etiketlere dayalı yedekleme. Yedeklemeyi günde iki kez çalışacak şekilde planlayın. Kopyayı şu şekilde yapılandırın:
us-batı-2 Bölgesi.

C. AWS Backup'ı kullanarak us-west-1 ve us-west-2'de yedekleme kasaları oluşturun. Yedek oluştur
EC2 bulut sunucularını etiket değerlerine göre planlayın. Olarak çalışacak bir AWS Lambda işlevi oluşturun
yedekleme verilerini us-west-2'ye kopyalamak için zamanlanmış iş.

D. AWS Backup'ı kullanarak bir yedekleme kasası oluşturun. AWS Backup'ı kullanarak bir yedekleme planı oluşturun.
Etiket değerlerine dayalı EC2 örnekleri. Kopyanın hedefini us-west-2 olarak tanımlayın. Belirtin
Yedekleme zamanlaması günde iki kez çalışacak şekilde ayarlanmıştır.

E. AWS Backup'ı kullanarak bir yedekleme kasası oluşturun. AWS Backup'ı kullanarak bir yedekleme planı oluşturun.
Etiket değerlerine dayalı EC2 örnekleri. Yedekleme zamanlamasını günde iki kez çalışacak şekilde belirtin. Kopyala
us-west-2'ye talep var.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Etiketlere dayalı bir yedekleme oluşturmak için Amazon EC2 destekli bir Amazon Machine Image (AMI) yaşam döngüsü ilkesi oluşturun. Yedeklemeyi günde iki kez çalışacak şekilde planlayın. Kopyayı us-west-2 Bölgesine yapılandırın. AWS Backup'ı kullanarak bir yedekleme kasası oluşturun. EC2 bulut sunucuları için etiket değerlerine dayalı bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. Kopyanın hedefini us-west-2 olarak tanımlayın. Yedekleme zamanlamasını günde iki kez çalışacak şekilde belirtin.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 509
Bir şirket, görüntü işleme için iki katmanlı bir uygulama çalıştırmaktadır. Uygulama iki tane kullanıyor
Her biri bir genel alt ağa ve bir özel alt ağa sahip Erişilebilirlik Alanları. Bir Uygulama Yükü
Web katmanı için Dengeleyici (ALB), genel alt ağları kullanır. Amazon EC2 bulut sunucuları
uygulama katmanı özel alt ağları kullanır.
Kullanıcılar uygulamanın beklenenden daha yavaş çalıştığını bildiriyor. Bir güvenlik denetimi
web sunucusu günlük dosyaları, uygulamanın bir uygulamadan milyonlarca yasa dışı istek aldığını gösteriyor
az sayıda IP adresi. Bir çözüm mimarının acil performansı çözmesi gerekiyor
Şirket daha kalıcı bir çözüm araştırırken soruna çözüm arıyor.
Çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

A. Web katmanı için gelen güvenlik grubunu değiştirin. IP adresleri için bir reddetme kuralı ekleyin
kaynakları tüketiyor.

B. Web katmanı alt ağları için ağ ACL'sini değiştirin. IP için gelen reddetme kuralı ekleyin
kaynakları tüketen adresler.

C. Uygulama katmanı için gelen güvenlik grubunu değiştirin. IP adresleri için reddetme kuralı ekleyin
bunlar kaynakları tüketiyor.

D. Uygulama katmanı alt ağları için ağ ACL'sini değiştirin. IP için gelen reddetme kuralı ekleyin
kaynakları tüketen adresler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web katmanı alt ağları için ağ ACL'sini değiştirin. Kaynakları tüketen IP adresleri için gelen reddetme kuralı ekleyin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 510
Küresel bir pazarlama şirketinin ap-güneydoğu-2 Bölgesinde ve
ab-batı-1 Bölgesi. Eu-west-1'de bir VPC'de çalışan uygulamaların güvenli bir şekilde iletişim kurması gerekir
ap-southeast-2'deki bir VPC'de çalışan veritabanlarıyla.
Hangi ağ tasarımı bu gereksinimleri karşılayacak?

A. eu-west-1 VPC ile ap-southeast-2 VPC arasında bir VPC eşleme bağlantısı oluşturun.
Eu-west-1 uygulama güvenlik grubunda, gelen trafiğe izin veren bir gelen kuralı oluşturun.
ap-southeast-2 güvenlik grubundaki veritabanı sunucusu IP adresleri.

B. ap-southeast-2 VPC ile eu-west-1 VPC arasında bir VPC eşleme bağlantısı yapılandırın.
Alt ağ yönlendirme tablolarını güncelleyin. Ap-southeast-2 veritabanı güvenliğinde bir gelen kuralı oluşturun
eu-west-1'deki uygulama sunucularının güvenlik grubu kimliğine başvuran grup.

C. ap-southeast-2 VPC ile eu-west-1 arasında bir VPC eşleme bağlantısı yapılandırın
VPAlt ağ yönlendirme tablolarını güncelleyin. Ap-southeast-2 veritabanı güvenliğinde bir gelen kuralı oluşturun
eu-west-1 uygulama sunucusu IP adreslerinden gelen trafiğe izin veren grup.

D. eu-west-1 VPC ile eu-west-1 VPC arasında eşleme eki olan bir geçiş ağ geçidi oluşturun
ap-güneydoğu-2 VPC. Geçiş ağ geçitleri düzgün bir şekilde eşlendikten ve yönlendirme yapılandırıldıktan sonra,
veritabanı güvenlik grubunda, veritabanı güvenlik grubu kimliğine başvuran bir gelen kuralı oluşturun.
eu-west-1'deki uygulama sunucuları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ap-southeast-2 VPC ile eu-west-1 VPC arasında bir VPC eşleme bağlantısı yapılandırınAlt ağ yönlendirme tablolarını güncelleyin. Ap-southeast-2 veritabanı güvenlik grubunda, eu-west-1 uygulama sunucusu IP adreslerinden gelen trafiğe izin veren bir gelen kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru 511
Bir şirket PostgreSQL veritabanı şemasını kullanan bir yazılım geliştiriyor. şirket
şirketin ihtiyaçları için birden fazla geliştirme ortamı ve veri tabanı yapılandırması gerekiyor
geliştiriciler. Ortalama olarak her geliştirme ortamı 8 saatlik iş gününün yarısı kadar kullanılır.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Her geliştirme ortamını kendi Amazon Aurora PostgreSQL veritabanıyla yapılandırın

B. Her geliştirme ortamını kendi Amazon RDS for PostgreSQL Single-AZ ile yapılandırın
Veritabanı bulut sunucuları

C. Her geliştirme ortamını kendi Amazon Aurora On-Demand ile yapılandırın
PostgreSQL uyumlu veritabanı

D. Amazon S3'ü kullanarak her geliştirme ortamını kendi Amazon S3 klasörüyle yapılandırın
Nesne Seçimi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her geliştirme ortamını kendi Amazon Aurora İsteğe Bağlı PostgreSQL Uyumlu veritabanıyla yapılandırın
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 512
Bir şirket, hesaba göre etiketlenen kaynaklarla AWS Organizasyonlarını kullanıyor. Şirket ayrıca kullanıyor
AWS altyapı kaynaklarını yedeklemek için AWS Backup. Şirketin tümünü yedeklemesi gerekiyor
AWS kaynakları.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Etiketlenmemiş tüm kaynakları tanımlamak için AWS Config'i kullanın. Tanımlanan kaynakları etiketleyin
programlı olarak. Yedekleme planındaki etiketleri kullanın.

B. Çalışmayan tüm kaynakları belirlemek için AWS Config'i kullanın. Bu kaynakları şuraya ekleyin:
yedekleme kasası.

C. Tüm AWS hesap sahiplerinin, ihtiyaç duyulan kaynakları belirlemek için kaynaklarını incelemesini zorunlu kılın
yedeklenmelidir.

D. Uyumlu olmayan tüm kaynakları belirlemek için Amazon Inspector'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Etiketlenmemiş tüm kaynakları tanımlamak için AWS Config'i kullanın. Tanımlanan kaynakları programlı olarak etiketleyin. Yedekleme planındaki etiketleri kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 513
Bir sosyal medya şirketi, kullanıcılarının bir uygulamaya resim yüklemesine izin vermek istiyor
AWS Cloud'da barındırılır. Şirketin görselleri otomatik olarak yeniden boyutlandıracak bir çözüme ihtiyacı var
böylece görüntüler birden fazla cihaz türünde görüntülenebilmektedir. Uygulama deneyimleri
gün boyunca öngörülemeyen trafik düzenleri. Şirket yüksek oranda kullanılabilirlik arıyor
ölçeklenebilirliği en üst düzeye çıkaran çözüm.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Amazon S3'te barındırılan ve yeniden boyutlandırmak için AWS Lambda işlevlerini çağıran statik bir web sitesi oluşturun.
görüntüleri alın ve görüntüleri bir Amazon S3 klasöründe saklayın.

B. Amazon CloudFront'ta barındırılan ve AWS Step Functions'ı çağıran statik bir web sitesi oluşturun.
görüntüleri yeniden boyutlandırın ve görüntüleri bir Amazon RDS veritabanında saklayın.

C. Amazon EC2 bulut sunucusunda çalışan bir web sunucusunda barındırılan dinamik bir web sitesi oluşturun.
Görüntüleri yeniden boyutlandırmak ve görüntüleri depolamak için EC2 örneğinde çalışan bir işlem yapılandırın
bir Amazon S3 kovası.

D. Otomatik olarak ölçeklenen bir Amazon Elastic Container'da barındırılan dinamik bir web sitesi oluşturun
Amazon Simple Queue Service'te yeniden boyutlandırma işi oluşturan hizmet (Amazon ECS) kümesi
(Amazon SQS). Amazon EC2 örneğinde çalışan bir görüntü yeniden boyutlandırma programı kurun.
yeniden boyutlandırma işlerini işleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3'te barındırılan ve görüntüleri yeniden boyutlandırmak ve görüntüleri bir Amazon S3 klasöründe depolamak için AWS Lambda işlevlerini çağıran statik bir web sitesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 514
Bir şirket, Amazon EC2 bulut sunucularında bir mikro hizmet uygulaması çalıştırıyor. şirket
uygulamayı bir Amazon Elastic Kubernetes Service (Amazon EKS) kümesine taşımak istiyor
ölçeklenebilirlik için. Şirketin Amazon EKS kontrol düzlemini uç nokta özel ile yapılandırması gerekir
Güvenlik uyumluluğunu sürdürmek için erişim doğru olarak ayarlandı ve uç nokta genel erişimi yanlış olarak ayarlandı.
Şirketin ayrıca veri düzlemini özel alt ağlara koyması gerekir. Ancak şirket aldığı
Düğümün kümeye katılamamasından dolayı hata bildirimleri.
Hangi çözüm düğümün kümeye katılmasına olanak tanır?

A. AWS Identity and Access Management'ta (IAM) gerekli izni şu kişilere verin:
AmazonEKSNodeRole IAM rolü.

B. Düğümlerin kontrol düzlemine erişmesine izin vermek için arayüz VPC uç noktaları oluşturun.

C. Genel alt ağdaki düğümleri yeniden oluşturun. EC2 düğümleri için güvenlik gruplarını kısıtlayın.

D. Düğümlerin güvenlik grubunda giden trafiğe izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Düğümlerin kontrol düzlemine erişmesine izin vermek için arayüz VPC uç noktaları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 515
Bir şirket şirket içi bir uygulamayı AWS'ye taşıyor. Şirket Amazon'u kullanmak istiyor
Çözüm olarak kırmızıya kayma.
Bu senaryoda Amazon Redshift için hangi kullanım durumları uygundur? (Üç tanesini seçin.)

A. Verilere geleneksel, kapsayıcılı ve olay odaklı erişim için veri API'lerinin desteklenmesi
uygulamalar

B. İstemci tarafı ve sunucu tarafı şifrelemeyi destekleme

C. Belirtilen saatlerde ve uygulamanın aktif olmadığı zamanlarda analitik iş yükleri oluşturma

D. Arka uç veritabanı üzerindeki baskıyı azaltmak için verileri önbelleğe alma

E. Petabaytlarca veriyi ve dakikada on milyonlarca isteği desteklemek için küresel ölçeklendirme

F. AWS Management Console'u kullanarak kümenin ikincil bir kopyasını oluşturma

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C, E`
> - **Önerilen Çözüm:** İstemci tarafı ve sunucu tarafı şifrelemeyi destekleme Belirli saatlerde ve uygulama etkin olmadığında analitik iş yükleri oluşturma Petabaytlarca veriyi ve dakika başına on milyonlarca isteği desteklemek için küresel olarak ölçeklendirme
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 516
Bir şirket, müşterilerinin finansal bilgilerini alabilmeleri için müşterilere bir API arayüzü sağlar.
bilgi. Şirket, kullanımın yoğun olduğu zamanlarda daha fazla sayıda talep beklemektedir.
yıl.
Şirket, müşterinin güvenli olmasını sağlamak için API'nin düşük gecikmeyle tutarlı bir şekilde yanıt vermesini gerektiriyor
Memnuniyet. Şirketin API için bir bilgi işlem ana bilgisayarı sağlaması gerekiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Application Load Balancer ve Amazon Elastic Container Service (Amazon ECS) kullanın.

B. Amazon API Gateway ve AWS Lambda işlevlerini sağlanan eş zamanlılıkla kullanın.

C. Application Load Balancer ve Amazon Elastic Kubernetes Service (Amazon EKS) kullanın
küme.

D. Amazon API Gateway ve AWS Lambda işlevlerini ayrılmış eş zamanlılıkla kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tedarik edilen eşzamanlılıkla Amazon API Gateway ve AWS Lambda işlevlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 517
Bir şirket, tüm AWS Systems Manager Session Manager günlüklerini bir Amazon S3'e göndermek istiyor
arşiv amaçlı kova.
Hangi çözüm bu gereksinimi MOST operasyonel verimlilikle karşılayacak?

A. Systems Manager konsolunda S3 günlüğünü etkinleştirin. Oturumu göndermek için bir S3 paketi seçin
veri.

B. Amazon CloudWatch aracısını yükleyin. Tüm günlükleri bir CloudWatch günlük grubuna aktarın. Günlükleri dışa aktar
arşivleme amacıyla gruptan bir S3 klasörüne.

C. Tüm sunucu günlüklerini merkezi bir S3 klasörüne yüklemek için bir Sistem Yöneticisi belgesi oluşturun. Kullanım
Amazon EventBridge, Sistem Yöneticisi belgesini sistemdeki tüm sunucularda çalıştırmak için
günlük hesap.

D. Bir Amazon CloudWatch aracısı yükleyin. Tüm günlükleri bir CloudWatch günlük grubuna aktarın. Bir oluştur
CloudWatch, gelen günlük olaylarını Amazon Kinesis Data'ya aktaran aboneliği kaydeder
Yangın hortumu dağıtım akışı. Amazon S3'ü hedef olarak ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Systems Manager konsolunda S3 günlüğünü etkinleştirin. Oturum verilerinin gönderileceği bir S3 paketi seçin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 518
Bir uygulama Amazon RDS MySQL veritabanı bulut sunucusunu kullanıyor. RDS veritabanı azalıyor
disk alanında. Bir çözüm mimarı, kesinti olmadan disk alanını artırmak istiyor.
Hangi çözüm bu gereksinimleri EN AZ çabayla karşılıyor?

A. RDS'de depolama otomatik ölçeklendirmesini etkinleştirin

B. RDS veritabanı bulut sunucusu boyutunu artırın

C. RDS veritabanı bulut sunucusu depolama türünü Tedarik Edilen IOPS olarak değiştirin

D. RDS veritabanını yedekleyin, depolama kapasitesini artırın, veritabanını geri yükleyin ve
önceki örnek

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** RDS'de depolama otomatik ölçeklendirmesini etkinleştirin
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 519
Bir danışmanlık şirketi dünya çapındaki müşterilerine profesyonel hizmetler sunmaktadır. şirket
Müşterilerin AWS'de veri toplayıp analiz etmesini hızlandıracak çözümler ve araçlar sağlar.
Şirketin ortak bir dizi çözümü ve aracı merkezi olarak yönetmesi ve dağıtması gerekiyor.
Müşterilerin self-servis amaçlarla kullanmaları.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Müşteriler için AWS CloudFormation şablonları oluşturun.

B. Müşteriler için AWS Hizmet Kataloğu ürünleri oluşturun.

C. Müşteriler için AWS Systems Manager şablonları oluşturun.

D. Müşteriler için AWS Config öğeleri oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Müşteriler için AWS Hizmet Kataloğu ürünleri oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 520
Bir şirket, Amazon EC2 Bulut Sunucuları üzerinde çalışacak yeni bir web uygulaması tasarlıyor.
uygulama, arka uç veri depolaması için Amazon DynamoDB'yi kullanacak. Uygulama trafiği
tahmin edilemez. Şirket, uygulamanın okuma ve yazma verimini beklemektedir.
veritabanı orta ila yüksek arasında olacaktır. Şirketin uygulama trafiğine yanıt olarak ölçeklendirme yapması gerekiyor.
Hangi DynamoDB tabla konfigürasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. DynamoDB Standart tablosunu kullanarak DynamoDB'yi sağlanan okuma ve yazma ile yapılandırma
sınıf. DynamoDB otomatik ölçeklendirmeyi tanımlanmış maksimum kapasiteye ayarlayın.

B. DynamoDB Standard tablo sınıfını kullanarak DynamoDB'yi isteğe bağlı modda yapılandırın.

C. DynamoDB Standardını kullanarak DynamoDB'yi sağlanan okuma ve yazma ile yapılandırma
Seyrek Erişim (DynamoDB Standard-IA) tablo sınıfı. DynamoDB otomatik ölçeklendirmeyi bir
Maksimum tanımlanmış kapasite.

D. DynamoDB Standard Infrequent'i kullanarak DynamoDB'yi isteğe bağlı modda yapılandırın
Erişim (DynamoDB Standard-IA) tablo sınıfı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** DynamoDB Standard tablo sınıfını kullanarak DynamoDB'yi isteğe bağlı modda yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 521
Bir perakende şirketinin birden fazla işletmesi vardır. Her işletmenin BT ekibi kendi AWS'sini yönetir
hesap. Her ekip hesabı, AWS Organizasyonlarındaki bir kuruluşun parçasıdır. Her takım
ürün envanter düzeylerini ekibin kendi AWS'sindeki Amazon DynamoDB tablosunda izler
hesap.
Şirket, paylaşılan bir AWS hesabına merkezi bir envanter raporlama uygulaması dağıtıyor.
Uygulama, tüm ekiplerin DynamoDB tablolarındaki öğeleri okuyabilmelidir.
Hangi kimlik doğrulama seçeneği bu gereksinimleri EN güvenli şekilde karşılayacaktır?

A. DynamoDB'yi envanter uygulaması hesabında AWS Secrets Manager ile entegre edin.
Uygulamayı, kimlik doğrulaması ve okuma için Secrets Manager'dan doğru gizli bilgiyi kullanacak şekilde yapılandırın
DynamoDB tablosu. Her 30 günde bir gizli rotasyon planlayın.

B. Her işletme hesabında programatik erişimi olan bir IAM kullanıcısı oluşturun. Yapılandır
kimlik doğrulaması yapmak için doğru IAM kullanıcı erişim anahtarı kimliğini ve gizli erişim anahtarını kullanacak ve
DynamoDB tablosunu okuyun. IAM erişim anahtarlarını her 30 günde bir manuel olarak değiştirin.

C. Her işletme hesabında, aşağıdakileri sağlayan bir politikaya sahip BU_ROLE adında bir IAM rolü oluşturun:
DynamoDB tablosuna rol erişimi ve envanterdeki belirli bir role güvenmek için bir güven politikası
uygulama hesabı. Envanter hesabında erişime izin veren APP_ROLE adında bir rol oluşturun
STS AssumeRole API işlemine. Uygulamayı APP_ROLE kullanacak şekilde yapılandırın ve varsayalım
DynamoDB tablosunu okumak için hesaplar arası rolü BU_ROLE.

D. DynamoDB'yi AWS Sertifika Yöneticisi (ACM) ile entegre edin. Kimlik sertifikaları oluşturun
DynamoDB'nin kimliğini doğrulayın. Uygulamayı, kimlik doğrulaması için doğru sertifikayı kullanacak şekilde yapılandırın
ve DynamoDB tablosunu okuyun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her işletme hesabında, rolün DynamoDB tablosuna erişmesini sağlayan bir politikaya ve envanter uygulama hesabındaki belirli bir role güvenmek için bir güven politikasına sahip BU_ROLE adında bir IAM rolü oluşturun. Envanter hesabında, STS AssumeRole API işlemine erişime izin veren APP_ROLE adlı bir rol oluşturun. Uygulamayı APP_ROLE kullanacak şekilde yapılandırın ve DynamoDB tablosunu okumak için hesaplar arası BU_ROLE rolünü üstlenin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 522
Bir şirket, Amazon Elastic Kubernetes Service'i (Amazon
EKS). Şirketin iş yükü gün boyu tutarlı değildir. Şirket istiyor
Amazon EKS'nin ölçeği iş yüküne göre genişletilebilir ve genişletilebilir.
Hangi adım kombinasyonu bu gereksinimleri EN AZ operasyonel giderle karşılayacaktır?
(İki tane seçin.)

A. EKS kümesini yeniden boyutlandırmak için bir AWS Lambda işlevini kullanın.

B. Yatay bölme otomatik ölçeklendirmesini etkinleştirmek için Kubernetes Metrics Sunucusunu kullanın.

C. Kümedeki düğüm sayısını yönetmek için Kubernetes Cluster Autoscaler'ı kullanın.

D. Amazon API Gateway'i kullanın ve Amazon EKS'ye bağlayın.

E. Ağ etkinliğini gözlemlemek için AWS App Mesh'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** Yatay bölme otomatik ölçeklendirmesini etkinleştirmek için Kubernetes Metrics Sunucusunu kullanın. Kümedeki düğüm sayısını yönetmek için Kubernetes Cluster Autoscaler'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 523
Bir şirket, mikro hizmet tabanlı sunucusuz bir web uygulaması çalıştırmaktadır. Uygulama mümkün olmalıdır
birden çok Amazon DynamoDB tablosundan veri almak için Bir çözüm mimarının şunları sağlaması gerekir:
uygulamanın temel performansını etkilemeden verileri alma yeteneği
uygulama.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. AWS AppSync işlem hattı çözümleyicileri

B. Lambda@Edge işlevlerine sahip Amazon CloudFront

C. AWS Lambda işlevlerine sahip, uç açısından optimize edilmiş Amazon API Gateway

D. DynamoDB bağlayıcıyla Amazon Athena Federasyon Sorgusu

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS AppSync işlem hattı çözümleyicileri
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 524
Bir şirket, Erişim Reddedildi hatalarını ve Yetkisiz hataları analiz etmek ve sorunlarını gidermek istiyor
bunlar IAM izinleriyle ilgilidir. Şirkette AWS CloudTrail açık.
Hangi çözüm bu gereksinimleri EN AZ çabayla karşılayacak?

A. CloudTrail günlüklerini hatalara karşı sorgulamak için AWS Glue kullanın ve özel komut dosyaları yazın.

B. AWS Batch'i kullanın ve CloudTrail günlüklerini hatalara karşı sorgulamak için özel komut dosyaları yazın.

C. Hataları belirlemek için CloudTrail günlüklerini Amazon Athena sorgularıyla arayın.

D. Amazon QuickSight ile CloudTrail günlüklerini arayın. Hataları tanımlamak için bir kontrol paneli oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Hataları belirlemek için CloudTrail günlüklerini Amazon Athena sorgularıyla arayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 525
Bir şirket, mevcut AWS kullanım maliyetini operasyon maliyeti kontrol paneline eklemek istiyor. bir
çözüm mimarının şirketin kullanımına erişim sağlayacak bir çözüm önermesi gerekiyor
programlı olarak maliyet. Şirketin cari yıla ait maliyet verilerine ulaşabilmesi ve
Gelecek 12 ay için maliyetleri tahmin edin.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS Cost Explorer API'sini sayfalandırmayla kullanarak kullanım maliyetiyle ilgili verilere erişin.

B. İndirilebilir AWS Maliyet Gezgini raporu .csv dosyalarını kullanarak kullanım maliyetiyle ilgili verilere erişin.

C. Kullanım maliyeti verilerini FTP aracılığıyla şirkete göndermek için AWS Budgets eylemlerini yapılandırın.

D. Kullanım maliyeti verileri için AWS Budgets raporları oluşturun. Verileri şirkete gönderin
SMTP.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Cost Explorer API'sini sayfalandırmayla kullanarak kullanım maliyetiyle ilgili verilere erişin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 526
Bir çözüm mimarı bir uygulamanın dayanıklılığını inceliyor. Çözüm mimarı dikkat çekiyor
bir veritabanı yöneticisinin yakın zamanda uygulamanın Amazon Aurora PostgreSQL'inde hata yaptığı
ölçeklendirme uygulamasının bir parçası olarak veritabanı yazıcısı örneği. Yük devretme işlemi 3 dakika sürdü
uygulama için kesinti süresi.
EN AZ operasyonel ile ölçeklendirme çalışmaları için kesinti süresini hangi çözüm azaltacak?
genel gider mi?

A. Yük devretme sırasında yükü işlemek için kümede daha fazla Aurora PostgreSQL okuma kopyası oluşturun.

B. Aynı AWS Bölgesinde ikincil bir Aurora PostgreSQL kümesi kurun. Yük devretme sırasında,
uygulamayı ikincil kümenin yazar uç noktasını kullanacak şekilde güncelleyin.

C. Yük devretme sırasında yükü işlemek için bir Amazon ElastiCache for Memcached kümesi oluşturun.

D. Veritabanı için bir Amazon RDS proxy'si kurun. Proxy'yi kullanmak için uygulamayı güncelleyin
uç nokta.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanı için bir Amazon RDS proxy'si ayarlayın. Proxy uç noktasını kullanmak için uygulamayı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 527
Bir şirketin tek bir AWS'de çalışan bölgesel aboneliğe dayalı bir akış hizmeti var
Bölge. Mimari, Amazon EC2'deki web sunucularından ve uygulama sunucularından oluşur
örnekler. EC2 bulut sunucuları, Elastic Load Balancer'ların arkasındaki Otomatik Ölçeklendirme gruplarındadır.
mimari, birden fazla alana yayılan bir Amazon Aurora küresel veritabanı kümesi içerir
Erişilebilirlik Alanları.
Şirket küresel olarak genişlemek ve uygulamasının minimum kesinti süresine sahip olmasını sağlamak istiyor.
EN ÇOK hata toleransını hangi çözüm sağlayacak?

A. Örnekleri dağıtmak için web katmanı ve uygulama katmanı için Otomatik Ölçeklendirme gruplarını genişletin
İkinci bir Bölgedeki Erişilebilirlik Alanları. Veritabanını dağıtmak için bir Aurora global veritabanı kullanın
Birincil Bölge ve İkinci Bölge. Yük devretmeyle Amazon Route 53 durum denetimlerini kullanma
İkinci Bölgeye yönlendirme politikası.

B. Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. Aurora PostgreSQL ekleyin
İkinci Bölgedeki Bölgeler arası Aurora Kopyası. Amazon Route 53 durum kontrollerini aşağıdakilerle kullanın:
İkinci Bölgeye yük devretme yönlendirme politikası. Gerektiğinde ikincilden birincilliğe terfi edin.

C. Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. Aurora PostgreSQL oluşturun
İkinci Bölgedeki veritabanı. Çoğaltma için AWS Database Migration Service'i (AWS DMS) kullanın
birincil veritabanını ikinci Bölgeye aktarır. Yük devretmeyle Amazon Route 53 durum denetimlerini kullanma
İkinci Bölgeye yönlendirme politikası.

D. Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. Amazon Aurora globalini kullanın
Veritabanını birincil Bölgede ve ikinci Bölgede dağıtmak için veritabanı. Amazon'u kullanın
Yük devretme yönlendirme politikasıyla 53 durum denetimlerini ikinci Bölgeye yönlendirin. Tanıtın
gerektiğinde birincilden ikincil.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. Veritabanını birincil Bölgeye ve ikinci Bölgeye dağıtmak için Amazon Aurora global veritabanını kullanın. İkinci Bölgeye yük devretme yönlendirme politikasıyla Amazon Route 53 durum denetimlerini kullanın. Gerektiğinde ikincilden birincilliğe terfi edin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 528
Bir veri analizi şirketi, toplu işleme sistemini AWS'ye taşımak istiyor. şirket
FTP yoluyla gün içerisinde periyodik olarak binlerce küçük veri dosyası alır. Şirket içi bir
toplu iş, veri dosyalarını gece boyunca işler. Ancak toplu işin tamamlanması saatler sürüyor
koşuyor.
Şirket, AWS çözümünün gelen veri dosyalarını mümkün olan en kısa sürede işlemesini istiyor
Dosyaları gönderen FTP istemcilerinde minimum değişiklik. Çözüm gelenleri silmeli
Veri dosyaları, dosyalar başarıyla işlendikten sonra. Her dosya için işlem yapılması gerekir
3-8 dakika.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Gelen dosyaları nesneler olarak depolamak için FTP sunucusu çalıştıran bir Amazon EC2 bulut sunucusu kullanın.
Amazon S3 Glacier Esnek Erişim. AWS Batch'te bir iş kuyruğu yapılandırın. Amazon'u kullanın
EventBridge, S3 Glacier Esnek'teki nesneleri her gece işlemek için işi çağırma kurallarını kullanıyor
Geri alma. İş nesneleri işledikten sonra nesneleri silin.

B. Gelen dosyaları bir Amazon'da depolamak için FTP sunucusu çalıştıran bir Amazon EC2 bulut sunucusu kullanın
Elastik Blok Mağazası (Amazon EBS) hacmi. AWS Batch'te bir iş kuyruğu yapılandırın. Amazon'u kullanın
EventBridge, dosyaları her gece EBS biriminden işlemek için işi çağırma kurallarını belirler. Sil
iş dosyaları işledikten sonra dosyalar.

C. Gelen dosyaları Amazon Elastic'te depolamak üzere bir FTP sunucusu oluşturmak için AWS Transfer Family'yi kullanın
Blok Mağazası (Amazon EBS) birimi. AWS Batch'te bir iş kuyruğu yapılandırın. Amazon S3 kullanın
AWS Batch'te işi çağırmak için her dosya geldiğinde olay bildirimi. İşlemden sonra dosyaları silin
iş dosyaları işledi.

D. Gelen dosyaları Amazon S3'te depolamak üzere bir FTP sunucusu oluşturmak için AWS Transfer Family'yi kullanın
Standart. Dosyaları işlemek ve tamamlandıktan sonra silmek için bir AWS Lambda işlevi oluşturun.
işlenir. Dosyalar geldiğinde Lambda işlevini çağırmak için bir S3 olay bildirimi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Gelen dosyaları Amazon S3 Standard'ta depolamak üzere bir FTP sunucusu oluşturmak için AWS Transfer Family'yi kullanın. Dosyaları işlemek ve işlendikten sonra dosyaları silmek için bir AWS Lambda işlevi oluşturun. Dosyalar geldiğinde Lambda işlevini çağırmak için bir S3 olay bildirimi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 529
Bir şirket iş yüklerini AWS'ye taşıyor. Şirketin işlemsel ve hassas verileri var
kendi veritabanlarında. Şirket, güvenliği artırmak için AWS Bulut çözümlerini kullanmak istiyor ve
veritabanlarının operasyonel yükünü azaltın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanlarını Amazon EC2'ye taşıyın. Bir AWS Anahtar Yönetimi Hizmeti (AWS KMS) kullanın
AWS tarafından yönetilen şifreleme anahtarı.

B. Veritabanlarını Amazon RDS'ye taşıyın Kullanımda olmayan şifrelemeyi yapılandırın.

C. Verileri Amazon S3'e taşıyın Veri güvenliği ve koruması için Amazon Macie'yi kullanın

D. Veritabanını Amazon RDS'ye taşıyın. Veri güvenliği için Amazon CloudWatch Logs'u kullanın ve
koruma.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanlarını Amazon RDS'ye taşıyın Kullanımda olmayan şifrelemeyi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 530
Bir şirketin TCP ve UDP çok oyunculu oyun özelliğine sahip bir çevrimiçi oyun uygulaması var
Yetenekler. Şirket, uygulama trafiğini birden fazla noktaya yönlendirmek için Amazon Route 53'ü kullanıyor
Farklı AWS Bölgelerindeki Ağ Yük Dengeleyicileri (NLB'ler). Şirketin iyileştirilmesi gerekiyor
kullanıcı için hazırlık aşamasında uygulama performansı ve çevrimiçi oyun için gecikmenin azaltılması
büyüme.
Bu gereksinimleri hangi çözüm karşılayacak?

A. NLB'lerin önüne bir Amazon CloudFront dağıtımı ekleyin. Önbellek Kontrolünü Artırın
maksimum yaş parametresi.

B. NLB'leri Uygulama Yük Dengeleyicileri (ALB'ler) ile değiştirin. Route 53'ü kullanacak şekilde yapılandırın
gecikmeye dayalı yönlendirme.

C. NLB'lerin önüne AWS Global Accelerator'ı ekleyin. Global Accelerator uç noktasını yapılandırın
doğru dinleyici bağlantı noktalarını kullanın.

D. NLB'lerin arkasına bir Amazon API Gateway uç noktası ekleyin. API önbelleğe almayı etkinleştirin. Geçersiz kılma yöntemi
farklı aşamalar için önbelleğe alma.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** NLB'lerin önüne AWS Global Accelerator'ı ekleyin. Doğru dinleyici bağlantı noktalarını kullanmak için bir Global Accelerator uç noktası yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 531
Bir şirketin üçüncü taraf bir veri akışıyla entegre olması gerekir. Veri akışı şuraya bir web kancası gönderir:
yeni veriler tüketime hazır olduğunda harici bir hizmete haber verin. Bir geliştirici bir AWS yazdı
Şirket bir webhook geri araması aldığında verileri almaya yönelik Lambda işlevi.
geliştiricinin Lambda işlevini üçüncü tarafın araması için kullanılabilir hale getirmesi gerekir.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Lambda işlevi için bir işlev URL'si oluşturun. Üçüncü kişiye Lambda işlevi URL'sini sağlayın
webhook partisi.

B. Lambda işlevinin önüne bir Uygulama Yük Dengeleyicisi (ALB) dağıtın. ALB'yi sağlayın
Web kancası için üçüncü tarafın URL'si.

C. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Konuyu konuya ekleyin
Lambda fonksiyonu. SNS konusunun genel ana makine adını web kancası için üçüncü tarafa sağlayın.

D. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Sırayı şuraya ekleyin:
Lambda fonksiyonu. SQS kuyruğunun genel ana bilgisayar adını üçüncü tarafa sağlayın.
web kancası.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Lambda işlevi için bir işlev URL'si oluşturun. Web kancası için Lambda işlevi URL'sini üçüncü tarafa sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 532
Bir şirketin AWS Bölgesinde bir iş yükü var. Müşteriler iş yüküne bağlanır ve erişebilir
Amazon API Gateway REST API'sini kullanarak. Şirket, DNS olarak Amazon Route 53'ü kullanıyor
sağlayıcı. Şirket, tüm müşterilere bireysel ve güvenli URL'ler sağlamak istiyor.
Hangi adım kombinasyonu bu gereksinimleri MOST operasyonel verimlilikle karşılayacaktır?
(Üç tanesini seçin.)

A. Gerekli alan adını bir kayıt kuruluşuna kaydedin. Rotada joker karakterli özel alan adı oluşturma
53 barındırılan bölge ve bölgedeki API Ağ Geçidi uç noktasına işaret eden kayıt.

B. AWS Sertifika Yöneticisi'ndeki (ACM) etki alanlarıyla eşleşen bir joker karakter sertifikası isteyin.
farklı bir Bölge.

C. Rota 53'te gerektiği gibi her müşteri için barındırılan bölgeler oluşturun.
API Ağ Geçidi uç noktasına.

D. AWS Sertifikasındaki özel alan adıyla eşleşen bir joker karakter sertifikası isteyin
Aynı Bölgedeki Yönetici (ACM).

E. API Gateway'de her müşteri için birden fazla API uç noktası oluşturun.

F. REST API için API Ağ Geçidinde özel bir alan adı oluşturun. Sertifikayı şuradan içe aktarın:
AWS Sertifika Yöneticisi (ACM).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D,`
> - **Önerilen Çözüm:** Gerekli alan adını bir kayıt kuruluşuna kaydedin. Route 53'te barındırılan bir bölgede joker karakterli özel alan adı oluşturun ve API Ağ Geçidi uç noktasını işaret eden bölgeye kayıt yapın. Aynı Bölgedeki AWS Sertifika Yöneticisi'ndeki (ACM) özel alan adıyla eşleşen bir joker karakter sertifikası isteyin. REST API için API Gateway'de özel bir alan adı oluşturun. Sertifikayı AWS Sertifika Yöneticisinden (ACM) içe aktarın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 533
Bir şirket verileri Amazon S3'te saklıyor. Yönetmeliklere göre veriler şunları içermemelidir:
kişisel olarak tanımlanabilir bilgiler (PII). Şirket yakın zamanda S3 kovalarının
PII içeren bazı nesneler. Şirketin S3 klasörlerindeki kişisel bilgileri otomatik olarak tespit etmesi gerekiyor ve
Şirketin güvenlik ekibini bilgilendirmek için.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Macie'yi kullanın. SensitiveData olay türünü filtrelemek için bir Amazon EventBridge kuralı oluşturun
Macie bulgularından faydalanmak ve bir Amazon Basit Bildirim Hizmeti (Amazon SNS) göndermek için
güvenlik ekibine bildirimde bulunulur.

B. Amazon GuardDuty'yi kullanın. KRİTİK olay türünü filtrelemek için bir Amazon EventBridge kuralı oluşturun
GuardDuty bulgularından faydalanmak ve bir Amazon Basit Bildirim Hizmeti (Amazon SNS) göndermek için
güvenlik ekibine bildirimde bulunulur.

C. Amazon Macie'yi kullanın. Filtrelemek için bir Amazon EventBridge kuralı oluşturun
SensitiveData: Macie bulgularından S3Object/Personal olay türü ve bir Amazon Simple göndermek için
Güvenlik ekibine Kuyruk Hizmeti (Amazon SQS) bildirimi.

D. Amazon GuardDuty'yi kullanın. KRİTİK olay türünü filtrelemek için bir Amazon EventBridge kuralı oluşturun
GuardDuty bulgularından faydalanmak ve bir Amazon Basit Kuyruk Hizmeti (Amazon SQS) göndermek için
güvenlik ekibine bildirimde bulunulur.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon Macie'yi kullanın. SensitiveData olay türünü Macie bulgularından filtrelemek ve güvenlik ekibine bir Amazon Simple Notification Service (Amazon SNS) bildirimi göndermek için bir Amazon EventBridge kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru 534
Bir şirket, birden fazla AWS hesabı için bir günlük kaydı çözümü oluşturmak istiyor. şirket
şu anda tüm hesaplardaki günlükleri merkezi bir hesapta saklıyor. Şirket bir
VPC akış günlüklerini ve AWS CloudTrail'i depolamak için merkezi hesaptaki Amazon S3 klasörü
günlükler. Tüm günlükler, sık analiz için 30 gün boyunca yüksek oranda kullanılabilir olmalı ve ek bir süre boyunca saklanmalıdır.
Yedekleme amacıyla 60 gün süreyle kullanıldı ve oluşturulduktan 90 gün sonra silindi.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Geçiş, oluşturulduktan 30 gün sonra S3 Standart depolama sınıfına itiraz eder. Bir son kullanma tarihi yazın
Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren eylem.

B. Nesneleri S3 Standart-Seyrek Erişim (S3 Standart-IA) depolama sınıfı 30'a geçiş
Yaratılıştan sonraki günler. 90'dan sonra tüm nesneleri S3 Glacier Esnek Alma depolama sınıfına taşıyın
günler. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.

C. Nesnelerin oluşturulduktan 30 gün sonra S3 Glacier Esnek Alma depolama sınıfına geçişi.
Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.

D. S3 Tek Bölge-Seyrek Erişim (S3 Tek Bölge-IA) depolama sınıfı 30'a geçiş nesneleri
Yaratılıştan sonraki günler. 90'dan sonra tüm nesneleri S3 Glacier Esnek Alma depolama sınıfına taşıyın
günler. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Nesneleri oluşturulduktan 30 gün sonra S3 Glacier Esnek Alma depolama sınıfına geçirin. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 535
Bir şirket, kendi için bir Amazon Elastic Kubernetes Service (Amazon EKS) kümesi oluşturuyor
iş yükleri. Amazon EKS'de depolanan tüm gizli diziler Kubernetes vb.'de şifrelenmelidir
anahtar-değer deposu.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. AWS Secrets Manager'ı kullanarak şunları yapın:
Amazon EKS'deki tüm gizli dizileri yönetin, döndürün ve saklayın.

B. Yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Amazon EKS KMS'yi etkinleştirin
Amazon EKS kümesinde gizli şifreleme.

C. Amazon EKS kümesini varsayılan seçeneklerle oluşturun. Amazon Elastic Block Store'u kullanın
(Amazon EBS) Eklenti olarak Konteyner Depolama Arayüzü (CSI) sürücüsü.

D. takma ad/aws/ebs takma adı ile yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun.
Hesap için varsayılan Amazon Elastic Block Store (Amazon EBS) birim şifrelemesini etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Amazon EKS kümesinde Amazon EKS KMS gizli dizilerinin şifrelemesini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru 536
Bir şirket, veri bilimcilerine gerçek zamanlıya yakın salt okunur erişim sağlamak istiyor
şirketin üretimi Amazon RDS for PostgreSQL veritabanı. Veritabanı şu anda
Single-AZ veritabanı olarak yapılandırılmıştır. Veri bilimcileri, verileri etkilemeyecek karmaşık sorgular kullanır.
üretim veritabanı. Şirketin yüksek kullanılabilirliğe sahip bir çözüme ihtiyacı var.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Mevcut üretim veritabanını, bakım penceresinde yeterli güç sağlayacak şekilde ölçeklendirin.
veri bilimcileri.

B. Kurulumu Single-AZ'den daha büyük bir ikincil sunucuya sahip Multi-AZ bulut sunucusu dağıtımına değiştirin
bekleme örneği. Veri bilimcilerinin ikincil örneğe erişmesini sağlayın.

C. Kurulumu Single-AZ'den Multi-AZ bulut sunucusu dağıtımına değiştirin. İki tane daha ver
Veri bilimcileri için kopyaları okuyun.

D. Kurulumu Single-AZ'den iki okunabilir yedekli Multi-AZ küme dağıtımına değiştirin
örnekler. Veri bilimcilerine okuma uç noktaları sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kurulumu Single-AZ'den iki okunabilir bekleme bulut sunucusuyla Multi-AZ küme dağıtımına değiştirin. Veri bilimcilerine okuma uç noktaları sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 537
Bir şirket, AWS Cloud'da üç platformda çalışan üç katmanlı bir web uygulaması çalıştırıyor
Erişilebilirlik Alanları. Uygulama mimarisinde bir Amazon Uygulama Yük Dengeleyicisi bulunur
Kullanıcı oturum durumlarını barındıran EC2 web sunucusu ve EC2 üzerinde çalışan bir MySQL veritabanı
örnek. Şirket, uygulama trafiğinde ani artışlar bekliyor. Şirket istiyor
Gelecekteki uygulama kapasitesi taleplerini karşılamak ve yüksek kullanılabilirlik sağlamak için ölçeklenebilme
üç Erişilebilirlik Alanının tamamında.
Bu gereksinimleri hangi çözüm karşılayacak?

A. MySQL veritabanını Multi-AZ veritabanı kümesiyle Amazon RDS for MySQL'e taşıyın
dağıtım. Oturum verilerini depolamak ve oturum verilerini depolamak için yüksek kullanılabilirliğe sahip Amazon ElastiCache for Redis'i kullanın.
önbellek okur. Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.

B. MySQL veritabanını Multi-AZ Veritabanı kümesiyle MySQL için Amazon RDS'ye taşıyın
dağıtım. Oturum verilerini depolamak için yüksek kullanılabilirliğe sahip Memcached için Amazon ElastiCache'i kullanın
ve okumaları önbelleğe almak için. Web sunucusunu üç Kullanılabilirlik düzeyindeki Otomatik Ölçeklendirme grubuna taşıyın
Bölgeler.

C. MySQL veritabanını Amazon DynamoDB'ye taşıyın. DynamoDB Accelerator'ı (DAX) kullanın.
önbellek okur. Oturum verilerini DynamoDB'de saklayın. Web sunucusunu Otomatik Ölçeklendirmeye geçirme
üç Erişilebilirlik Alanında bulunan grup.

D. MySQL veritabanını tek bir Erişilebilirlik Alanında Amazon RDS for MySQL'e taşıyın. Kullanım
Oturum verilerini depolamak ve okumaları önbelleğe almak için yüksek kullanılabilirliğe sahip Amazon ElastiCache for Redis.
Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Multi-AZ Veritabanı kümesi dağıtımıyla MySQL veritabanını MySQL için Amazon RDS'ye taşıyın. Oturum verilerini depolamak ve okumaları önbelleğe almak için yüksek kullanılabilirliğe sahip Amazon ElastiCache for Redis'i kullanın. Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 538
Küresel bir video akışı şirketi, içerik dağıtım ağı olarak Amazon CloudFront'u kullanıyor
(CDN). Şirket, içeriği birden fazla ülkede aşamalı olarak yayınlamak istiyor.
Şirketin, şirketin ziyaret ettiği ülkeler dışındaki izleyicilerin de
kullanıma sunulan içerik içeriği görüntüleyemiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İzin verilenler listesini kullanarak CloudFront'taki içeriğe coğrafi kısıtlamalar ekleyin. Özel bir ayarlama yapın
hata mesajı.

B. Kısıtlanmış içerik için yeni bir URL ayarlayın. İmzalı bir URL ve çerezler kullanarak erişimi yetkilendirin.
Özel bir hata mesajı ayarlayın.

C. Şirketin dağıttığı içeriğe ilişkin verileri şifreleyin. Özel bir hata mesajı ayarlayın.

D. Kısıtlanmış içerik için yeni bir URL oluşturun. İmzalı kullanıcılar için zaman kısıtlamalı erişim politikası ayarlama
URL'ler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İzin verilenler listesini kullanarak CloudFront'taki içeriğe coğrafi kısıtlamalar ekleyin. Özel bir hata mesajı ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 539
Bir şirket, şirket içi felaket kurtarmayı (DR) iyileştirmek için AWS Cloud'u kullanmak istiyor
konfigürasyon. Şirketin temel üretim iş uygulaması Microsoft SQL Server'ı kullanıyor
Bir sanal makinede (VM) çalışan standart. Uygulamanın bir kurtarma noktası hedefi var
(RPO) 30 saniye veya daha az ve iyileşme süresi hedefi (RTO) 60 dakikadır. DR
Çözümün mümkün olan her yerde maliyetleri en aza indirmesi gerekiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. kullanarak şirket içi sunucu ile AWS arasında çok siteli etkin/etkin kurulumu yapılandırın.
Her Zaman Açık kullanılabilirlik gruplarına sahip Microsoft SQL Server Enterprise.

B. AWS'de SQL Server veritabanı için hazır beklemede bir Amazon RDS yapılandırın. AWS'yi yapılandırın
Değişiklik verilerini yakalamayı (CDC) kullanmak için Veritabanı Geçiş Hizmeti (AWS DMS).

C. Disk değişikliklerini pilot olarak AWS'ye kopyalamak için yapılandırılmış AWS Elastic Disaster Recovery'yi kullanın
hafif.

D. Her gece yedeklemeleri yakalamak için üçüncü taraf yedekleme yazılımını kullanın. İkincil bir dizi depolayın
Amazon S3'teki yedeklemeler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Disk değişikliklerini AWS'ye pilot ışık olarak çoğaltmak için yapılandırılmış AWS Elastic Disaster Recovery'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 540
Bir şirketin, işlemek ve depolamak için Oracle veritabanını kullanan şirket içi bir sunucusu var
müşteri bilgileri. Şirket daha yüksek hedeflere ulaşmak için bir AWS veritabanı hizmeti kullanmak istiyor
Kullanılabilirliği artırmak ve uygulama performansını artırmak için. Şirket ayrıca raporlamayı da boşaltmak istiyor
birincil veritabanı sisteminden.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Amazon RDS DB bulut sunucusu oluşturmak için AWS Database Migration Service'i (AWS DMS) kullanın.
birden fazla AWS Bölgesi. Raporlama işlevlerini ayrı bir veritabanı bulut sunucusuna yönlendirin.
birincil veritabanı örneği.

B. Oracle veritabanı oluşturmak için Amazon RDS'yi Single-AZ dağıtımında kullanın. Bir okuma oluştur
kopya, birincil veritabanı bulut sunucusuyla aynı bölgede yer alır. Raporlama fonksiyonlarını okumaya yönlendirin
kopya.

C. Oracle veritabanı oluşturmak için Multi-AZ küme dağıtımında dağıtılan Amazon RDS'yi kullanın.
Raporlama işlevlerini küme dağıtımında okuyucu örneğini kullanacak şekilde yönlendirin.

D. Amazon Aurora oluşturmak için Multi-AZ bulut sunucusu dağıtımında dağıtılan Amazon RDS'yi kullanın
veritabanı. Raporlama işlevlerini okuyucu örneklerine yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon Aurora veritabanı oluşturmak için Multi-AZ bulut sunucusu dağıtımında dağıtılan Amazon RDS'yi kullanın. Raporlama işlevlerini okuyucu örneklerine yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 541
Bir şirket AWS üzerinde bir web uygulaması oluşturmak istiyor. Müşterinin web sitesine erişim talepleri
tahmin edilemez ve uzun süre boşta kalabilir. Yalnızca abonelik ücreti ödemiş olan müşteriler
web uygulamasına giriş yapma ve kullanma olanağına sahip olabilir.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (Seç
üç.)

A. Amazon DynamoDB'den kullanıcı bilgilerini almak için bir AWS Lambda işlevi oluşturun. Oluştur
RESTful API'leri kabul edecek bir Amazon API Gateway uç noktası. API çağrılarını Lambda'ya gönderin
işlevi.

B. Bir Uygulamanın arkasında bir Amazon Elastic Container Service (Amazon ECS) hizmeti oluşturun
Amazon RDS'den kullanıcı bilgilerini almak için Yük Dengeleyici. Amazon API Ağ Geçidi oluşturun
RESTful API'lerini kabul edecek uç nokta. API çağrılarını Lambda işlevine gönderin.

C. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito kullanıcı havuzu oluşturun.

D. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito kimlik havuzu oluşturun.

E. Ön uç web içeriğini HTML, CSS ve JS ile sunmak için AWS Amplify'ı kullanın. Bir kullanın
entegre Amazon CloudFront yapılandırması.

F. PHP, CSS ve JS ile Amazon S3 statik web barındırma özelliğini kullanın. Hizmet vermek için Amazon CloudFront'u kullanın
ön uç web içeriği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C, E`
> - **Önerilen Çözüm:** Amazon DynamoDB'den kullanıcı bilgilerini almak için bir AWS Lambda işlevi oluşturun. RESTful API'leri kabul etmek için bir Amazon API Gateway uç noktası oluşturun. API çağrılarını Lambda işlevine gönderin. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito kullanıcı havuzu oluşturun. Ön uç web içeriğini HTML, CSS ve JS ile sunmak için AWS Amplify'ı kullanın. Entegre bir Amazon CloudFront yapılandırması kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 542
Bir medya şirketi, internet üzerinden içerik sunmak için Amazon CloudFront dağıtımını kullanıyor.
Şirket, yalnızca premium müşterilerin medya akışlarına ve dosyalara erişmesini istiyor
içerik. Şirket, tüm içeriği bir Amazon S3 klasöründe saklıyor. Şirket ayrıca teslimat yapıyor
film kiralama veya müzik gibi belirli bir amaç için müşterilere talep üzerine içerik
indirmeler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Premium müşterilere S3 imzalı çerezler oluşturun ve sağlayın.

B. Premium müşterilere CloudFront imzalı URL'ler oluşturun ve sağlayın.

C. Premium olmayan müşterilerin erişimini sınırlamak için kaynak erişim kontrolünü (OAC) kullanın.

D. Premium olmayan müşterileri engellemek için alan düzeyinde şifreleme oluşturun ve etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Premium müşterilere CloudFront imzalı URL'ler oluşturun ve sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 543
Bir şirket, Amazon EC2 bulut sunucularını, ayrı ayrı alınan birden fazla AWS hesabında çalıştırıyor.
şirket yakın zamanda bir Tasarruf Piyanı satın aldı. Şirketin işindeki değişiklikler nedeniyle
Şirket, gereksinimleri karşılamak için çok sayıda EC2 örneğini kullanımdan kaldırdı.
şirket, Tasarruf Planı indirimlerini diğer AWS hesaplarında kullanmak istiyor.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Yönetim hesabının AWS Hesap Yönetimi Konsolundan indirimi açın
faturalandırma tercihleri bölümünden paylaşabilirsiniz.

B. Mevcut hesabı satın alan hesabın AWS Hesap Yönetimi Konsolundan
Birikim Planı'nda fatura tercihleri bölümünden indirim paylaşımını açın. Tüm hesapları dahil edin.

C. AWS Organizasyonları yönetim hesabından AWS Resource Access Manager'ı kullanın
(AWS RAM) Tasarruf Planını diğer hesaplarla paylaşmak için.

D. AWS Organizasyonlarında yeni bir ödeyen hesabında bir kuruluş oluşturun. Diğer AWS'yi davet edin
yönetim hesabından kuruluşa katılmak için hesaplar.

E. Mevcut AWS hesabında AWS Organizasyonlarında mevcut kuruluşla bir kuruluş oluşturun
EC2 bulut sunucuları ve Tasarruf Planı. Diğer AWS hesaplarını kuruluşa katılmaya davet edin
yönetim hesabı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Yönetim hesabının AWS Hesap Yönetimi Konsolu'ndaki faturalandırma tercihleri ​​bölümünden indirim paylaşımını açın. AWS Organizasyonlarında yeni bir ödeyen hesabında bir kuruluş oluşturun. Diğer AWS hesaplarını yönetim hesabından kuruluşa katılmaya davet edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 544
Bir perakende şirketi, genel REST API'leri için bölgesel bir Amazon API Gateway API'si kullanıyor. API
Ağ Geçidi uç noktası, Amazon Route 53 takma ad kaydına işaret eden özel bir alan adıdır. bir
çözüm mimarının müşteriler üzerinde minimum etkiye sahip ve minimum düzeyde etki yaratan bir çözüm yaratması gerekiyor.
API'lerin yeni sürümünün yayınlanması için veri kaybı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. API Ağ Geçidi için bir canary sürüm dağıtım aşaması oluşturun. En son API sürümünü dağıtın.
Kanarya sahnesine uygun bir trafik yüzdesini yönlendirin. API doğrulamasından sonra tanıtımını yapın
Kanarya aşamasından üretim aşamasına kadar.

B. OpenAPI YAML dosyasında API'nin yeni bir sürümüyle yeni bir API Ağ Geçidi uç noktası oluşturun
biçimi. API Gateway'deki API'ye birleştirme modunda güncelleme için içe aktarma işlemini kullanın. Dağıt
API'nin yeni versiyonunu üretim aşamasına getirdik.

C. OpenAPI JSON dosyasında API'nin yeni bir sürümüyle yeni bir API Ağ Geçidi uç noktası oluşturun
biçimi. API Gateway'deki API'ye üzerine yazma modunda güncelleme için içe aktarma işlemini kullanın. Dağıt
API'nin yeni versiyonunu üretim aşamasına getirdik.

D. API tanımlarının yeni sürümleriyle yeni bir API Ağ Geçidi uç noktası oluşturun. Özel oluştur
yeni API Ağ Geçidi API'si için alan adı. Route 53 takma ad kaydını yeni API'ye yönlendirin
Ağ Geçidi API'si özel alan adı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** API Ağ Geçidi için bir canary sürüm dağıtım aşaması oluşturun. En son API sürümünü dağıtın. Kanarya sahnesine uygun bir trafik yüzdesini yönlendirin. API doğrulamasının ardından kanarya aşamasını üretim aşamasına yükseltin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 545
Bir şirket, şirketin birincil hatası durumunda kullanıcılarını bir yedek statik hata sayfasına yönlendirmek ister.
web sitesi kullanılamıyor. Birincil web sitesinin DNS kayıtları Amazon Route 53'te barındırılır.
etki alanı bir Application Load Balancer'a (ALB) işaret ediyor. Şirketin bir çözüme ihtiyacı var
Değişiklikleri ve altyapı yükünü en aza indirir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Gecikme yönlendirme politikasını kullanmak için Route 53 kayıtlarını güncelleyin. Statik bir hata sayfası ekleyin:
Trafiğin en hızlı yanıt verenlere gönderilmesi için kayıtlara bir Amazon S3 klasöründe barındırılır
uç noktalar.

B. Route 53 aktif-pasif yük devretme yapılandırmasını ayarlayın. Trafiği statik bir hata sayfasına yönlendirin.
Route 53 durum kontrolleri ALB uç noktasının ALB uç noktası olduğunu belirlediğinde bir Amazon S3 klasöründe barındırılır
sağlıksızdır.

C. ALB ve bir Amazon EC2 bulut sunucusuyla bir Route 53 aktif-aktif yapılandırması kurun.
Uç noktalar olarak statik bir hata sayfası barındırır. Route 53'ü yalnızca aşağıdaki durumlarda örneğe istek gönderecek şekilde yapılandırın:
ALB için durum kontrolleri başarısız oluyor.

D. Çok değerli yanıt yönlendirme politikasını kullanmak için Route 53 kayıtlarını güncelleyin. Bir sağlık kontrolü oluşturun.
Sağlık kontrolünden geçerse trafiği web sitesine yönlendirin. Trafiği statik bir hata sayfasına yönlendirin.
durum denetimi geçemezse Amazon S3'te barındırılır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Route 53 aktif-pasif yük devretme yapılandırmasını ayarlayın. Route 53 durum kontrolleri ALB uç noktasının sağlıksız olduğunu belirlediğinde trafiği Amazon S3 klasöründe barındırılan statik bir hata sayfasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 546
Bir şirketin BT harcamalarına ilişkin yakın zamanda yapılan bir analiz, yedekleme maliyetlerini azaltma ihtiyacını vurguluyor.
şirketin bilişim sorumlusu şirket içi yedekleme altyapısını basitleştirmek istiyor ve
Fiziksel yedekleme bantlarının kullanımını ortadan kaldırarak maliyetleri azaltın. Şirket bunu korumalıdır
şirket içi yedekleme uygulamalarına ve iş akışlarına yapılan mevcut yatırım.
Bir çözüm mimarı ne tavsiye etmelidir?

A. NFS arayüzünü kullanarak yedekleme uygulamalarına bağlanmak için AWS Storage Gateway'i kurun.

B. NFS'yi kullanarak yedekleme uygulamalarına bağlanan bir Amazon EFS dosya sistemi kurun
arayüz.

C. iSCSI'yi kullanarak yedekleme uygulamalarına bağlanan bir Amazon EFS dosya sistemi kurun
arayüz.

D. iSCSI-virtual'ı kullanarak yedekleme uygulamalarına bağlanmak için AWS Storage Gateway'i kurun.
teyp kitaplığı (VTL) arayüzü.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** iSCSI sanal bant kitaplığı (VTL) arayüzünü kullanarak yedekleme uygulamalarına bağlanmak için AWS Storage Gateway'i kurun.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 547
Bir şirketin farklı lokasyonlarda veri toplama sensörleri vardır. Veri toplama sensörleri akışı
Şirkete yüksek miktarda veri. Şirket, AWS'de bir platform tasarlamak istiyor
Yüksek hacimli akış verilerini alın ve işleyin. Çözüm ölçeklenebilir olmalı ve verileri desteklemelidir
neredeyse gerçek zamanlı olarak toplanıyor. Şirketin gelecekteki raporlama için verileri Amazon S3'te saklaması gerekiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon S3'e akış verileri iletmek için Amazon Kinesis Data Firehose'u kullanın.

B. Amazon S3'e akış verileri sunmak için AWS Glue'yu kullanın.

C. Akış verilerini sunmak ve verileri Amazon S3'te depolamak için AWS Lambda'yı kullanın.

D. Amazon S3'e akış verileri sunmak için AWS Database Migration Service'i (AWS DMS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3'e akış verileri iletmek için Amazon Kinesis Data Firehose'u kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 548
Bir şirketin finans, veri analizi ve geliştirme faaliyetleri için ayrı AWS hesapları vardır
departmanlar. Maliyetler ve güvenlik endişeleri nedeniyle şirket hangisini kontrol etmek istiyor?
her AWS hesabının kullanabileceği hizmetler.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her departmanın hangi AWS hizmetlerini kullanabileceğini kontrol etmek için AWS Systems Manager şablonlarını kullanın.
kullanın.

B. AWS Organizasyonlarındaki her departman için organizasyon birimleri (OU'lar) oluşturun. Hizmet ekle
OU'lara kontrol politikaları (SCP'ler).

C. Yalnızca her birinin sağladığı AWS hizmetlerini otomatik olarak sağlamak için AWS CloudFormation'ı kullanın.
departman kullanabilir.

D. Yönetmek ve kontrol etmek için AWS hesaplarındaki AWS Hizmet Kataloğu'ndaki ürünlerin bir listesini oluşturun
belirli AWS hizmetlerinin kullanımı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Organizasyonlarındaki her departman için organizasyon birimleri (OU'lar) oluşturun. Hizmet kontrol politikalarını (SCP'ler) kuruluş birimlerine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 549
Bir şirket, e-ticaret web sitesi için çok katmanlı bir uygulama oluşturdu. Web sitesi bir
Genel alt ağlarda bulunan Application Load Balancer, genel alt ağlarda bir web katmanı,
ve özel alt ağlardaki Amazon EC2 bulut sunucularında barındırılan bir MySQL kümesi. MySQL
veritabanının internette barındırılan ürün kataloğunu ve fiyatlandırma bilgilerini alması gerekiyor
üçüncü taraf bir sağlayıcı tarafından. Bir çözüm mimarı güvenliği en üst düzeye çıkaracak bir strateji tasarlamalıdır
operasyonel yükü artırmadan.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. VPC'de bir NAT örneği dağıtın. Tüm internet tabanlı trafiği NAT üzerinden yönlendirin
örnek.

B. Genel alt ağlara bir NAT ağ geçidi dağıtın. Tümünü yönlendirmek için özel alt ağ yönlendirme tablosunu değiştirin
NAT ağ geçidine internete bağlı trafik.

C. Bir internet ağ geçidi yapılandırın ve bunu VP'ye ekleyin. Özel alt ağ yönlendirme tablosunu değiştirerek
İnternete bağlı trafiği internet ağ geçidine yönlendirin.

D. Sanal bir özel ağ geçidi yapılandırın ve bunu VPC'ye ekleyin. Özel alt ağ yolunu değiştirin
İnternete bağlı trafiği sanal özel ağ geçidine yönlendirmek için tablo.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Genel alt ağlara bir NAT ağ geçidi dağıtın. İnternete bağlı tüm trafiği NAT ağ geçidine yönlendirmek için özel alt ağ yönlendirme tablosunu değiştirin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 550
Bir şirket, AWS Lambda'yı şifrelemek için AWS Key Management Service (AWS KMS) anahtarlarını kullanıyor
ortam değişkenleri. Bir çözüm mimarının gerekli izinlerin alındığından emin olması gerekir.
Ortam değişkenlerinin şifresini çözebileceğiniz ve kullanacağınız yer.
Çözüm mimarının doğru izinleri uygulamak için hangi adımları atması gerekir? (Seç
iki.)

A. Lambda kaynak politikasına AWS KMS izinlerini ekleyin.

B. Lambda yürütme rolüne AWS KMS izinlerini ekleyin.

C. Lambda işlev ilkesine AWS KMS izinlerini ekleyin.

D. AWS KMS anahtar politikasında Lambda yürütme rolüne izin verin.

E. AWS KMS anahtar politikasında Lambda kaynak politikasına izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Lambda yürütme rolüne AWS KMS izinlerini ekleyin. AWS KMS anahtar politikasında Lambda yürütme rolüne izin verin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 551
Bir şirketin rapor üreten bir finansal uygulaması vardır. Raporların boyutu ortalama 50 KB'dir
ve Amazon S3'te depolanır. Raporlara sıklıkla takip eden ilk hafta içinde erişilir.
üretilmeli ve birkaç yıl saklanmalıdır. Raporlar 6 saat içinde alınabilmelidir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. S3 Standardını kullanın. Raporları 7 gün sonra S3 Glacier'a geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın.

B. S3 Standardını kullanın. Raporları S3 Standart-Nadir'e geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın
7 gün sonra erişim (S3 Standart-IA).

C. S3 Intelligent-Tiering'i kullanın. Raporları S3'e geçirmek için S3 Intelligent-Tiering'i yapılandırın
Standart-Nadir Erişim (S3 Standart-IA) ve S3 Glacier.

D. S3 Standardını kullanın. Raporları S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın
7 gün sonra.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 Standardını kullanın. Raporları 7 gün sonra S3 Glacier'a geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 552
Bir şirketin Amazon EC2 bulut sunucularının maliyetini optimize etmesi gerekiyor. Şirketin ayrıca ihtiyacı var
EC2 bulut sunucularının türünü ve ailesini 2-3 ayda bir değiştirin.
Şirket bu gereksinimleri karşılamak için ne yapmalı?

A. 3 yıllık bir süre için Kısmi Peşin Rezerve Edilmiş Bulut Sunucuları satın alın.

B. 1 yıllık bir dönem için Peşin Olmayan Bilgi İşlem Tasarruf Planı satın alın.

C. Tüm Peşin Olarak Rezerve Edilmiş Bulut Sunucularını 1 yıllık bir süre için satın alın.

D. 1 yıllık bir dönem için Tamamı Peşin EC2 Bulut Sunucusu Tasarruf Planı satın alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** 1 yıllık bir dönem için Peşin Olmayan Bilgi İşlem Tasarruf Planı satın alın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 553
Bir çözüm mimarının kişisel olarak keşfetmesi için bir şirketin Amazon S3 paketlerini incelemesi gerekiyor
tanımlanabilir bilgiler (PII). Şirket, PII verilerini ABD-Doğu-1 Bölgesinde saklıyor ve
us-batı-2 Bölgesi.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her Bölgede Amazon Macie'yi yapılandırın. Amazon'daki verileri analiz etmek için bir iş oluşturun
S3.

B. AWS Security Hub'ı tüm Bölgeler için yapılandırın. Verileri analiz etmek için bir AWS Config kuralı oluşturun
yani Amazon S3'te.

C. Amazon S3'teki verileri analiz etmek için Amazon Inspector'ı yapılandırın.

D. Amazon S3'teki verileri analiz etmek için Amazon GuardDuty'yi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her Bölgede Amazon Macie'yi yapılandırın. Amazon S3'teki verileri analiz etmek için bir iş oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 554
Bir şirketin SAP uygulamasının şirket içi bir arka uç SQL Server veritabanı var
çevre. Şirket, şirket içi uygulamasını ve veritabanı sunucusunu
AWS. Şirketin SAP veritabanının yüksek taleplerini karşılayan bir bulut sunucusu tipine ihtiyacı var.
Şirket içi performans verileri, hem SAP uygulamasının hem de veritabanının yüksek performansa sahip olduğunu gösteriyor
Bellek kullanımı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulama için işlem açısından optimize edilmiş örnek ailesini kullanın. Optimize edilmiş belleği kullanın
veritabanı için örnek ailesi.

B. Hem uygulama hem de veritabanı için depolama açısından optimize edilmiş bulut sunucusu ailesini kullanın.

C. Hem uygulama hem de veritabanı için belleği optimize edilmiş bulut sunucusu ailesini kullanın.

D. Uygulama için yüksek performanslı bilgi işlem (HPC) için optimize edilmiş örnek ailesini kullanın. Kullanım
veritabanı için belleği optimize edilmiş bulut sunucusu ailesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Hem uygulama hem de veritabanı için belleği optimize edilmiş bulut sunucusu ailesini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 555
Bir şirket, bir uygulamayı genel ve özel alt ağlara sahip bir VPC'de çalıştırır. VPC genişliyor
birden fazla Erişilebilirlik Alanında. Uygulama Amazon EC2 bulut sunucularında özel olarak çalışır
alt ağlar. Uygulama bir Amazon Simple Queue Service (Amazon SQS) kuyruğunu kullanıyor.
Bir çözüm mimarının, çözümler arasında bağlantı kurmak için güvenli bir çözüm tasarlaması gerekir.
EC2 bulut sunucuları ve SQS kuyruğu.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı kullanacak şekilde yapılandırın
özel alt ağlar. İzin veren bir gelen erişim kuralına sahip bir güvenlik grubunu uç noktaya ekleyin.
özel alt ağlardaki EC2 bulut sunucularından gelen trafik.

B. Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı kullanacak şekilde yapılandırın
genel alt ağlar. Arayüz uç noktasına erişime izin veren bir VPC uç nokta politikası ekleyin.
Özel alt ağlardaki EC2 bulut sunucuları.

C. Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı kullanacak şekilde yapılandırın
genel alt ağlar. İzin veren arayüz VPC uç noktasına bir Amazon SQS erişim politikası ekleyin.
yalnızca belirli bir VPC uç noktasından gelen istekler.

D. Amazon SQS için bir ağ geçidi uç noktası uygulayın. Özel alt ağlara bir NAT ağ geçidi ekleyin.
EC2 bulut sunucularına, SQS kuyruğuna erişime izin veren bir IAM rolü ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı özel alt ağları kullanacak şekilde yapılandırın. Uç noktaya, özel alt ağlardaki EC2 bulut sunucularından gelen trafiğe izin veren bir gelen erişim kuralına sahip bir güvenlik grubu ekleyin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 556
Bir çözüm mimarı, üç katmanlı bir web dağıtmak için AWS CloudFormation şablonunu kullanıyor
uygulama. Web uygulaması bir web katmanından ve depolayan ve depolayan bir uygulama katmanından oluşur.
Amazon DynamoDB tablolarındaki kullanıcı verilerini alır. Web ve uygulama katmanları şu adreste barındırılır:
Amazon EC2 bulut sunucuları ve veritabanı katmanı genel erişime açık değildir. Uygulama EC2
örneklerin API kimlik bilgilerini açığa çıkarmadan DynamoDB tablolarına erişmesi gerekir.
şablon.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. DynamoDB tablolarını okumak için bir IAM rolü oluşturun. Rolü uygulamayla ilişkilendirin
bir örnek profiline başvurarak örnekler.

B. DynamoDB'den okuma ve yazma için gerekli izinlere sahip bir IAM rolü oluşturun
tablolar. Rolü EC2 bulut sunucusu profiline ekleyin ve bulut sunucusu profilini
uygulama örnekleri.

C. Kullanıcı giriş erişimine sahip olmak için AWS CloudFormation şablonundaki parametre bölümünü kullanın
ve gerekli okuma izinlerine sahip, önceden oluşturulmuş bir IAM kullanıcısının gizli anahtarları ve
DynamoDB tablolarından yazın.

D. AWS CloudFormation şablonunda gerekli izinlere sahip bir IAM kullanıcısı oluşturun.
DynamoDB tablolarından okuma ve yazma. Erişimi geri almak için GetAtt işlevini kullanın ve
gizli anahtarlar ve bunları kullanıcı verileri aracılığıyla uygulama örneklerine iletin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** DynamoDB tablolarından okuma ve yazma için gerekli izinlere sahip bir IAM rolü oluşturun. Rolü EC2 bulut sunucusu profiline ekleyin ve bulut sunucusu profilini uygulama bulut sunucularıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 557
Çözüm mimarı bir analiz uygulamasını yönetir. Uygulama büyük miktarlarda depolar
Amazon S3 klasöründeki yarı yapılandırılmış veriler. Çözüm mimarı paralel verileri kullanmak istiyor
Verileri daha hızlı işlemek için işleme. Çözüm mimarı da kullanmak istiyor
Verileri zenginleştirmek için Amazon Redshift veritabanında saklanan bilgiler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 verilerini işlemek için Amazon Athena'yı kullanın. AWS Glue'yu Amazon Redshift verileriyle birlikte kullanarak
S3 verilerini zenginleştirin.

B. S3 verilerini işlemek için Amazon EMR'yi kullanın. Amazon EMR'yi Amazon Redshift verileriyle birlikte kullanarak
S3 verilerini zenginleştirin.

C. S3 verilerini işlemek için Amazon EMR'yi kullanın. S3'ü taşımak için Amazon Kinesis Data Streams'i kullanın
Verilerin zenginleştirilebilmesi için verileri Amazon Redshift'e aktarın.

D. S3 verilerini işlemek için AWS Glue'yu kullanın. AWS Lake Formation'ı Amazon Redshift ile kullanın
S3 verilerini zenginleştirmek için veriler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 verilerini işlemek için Amazon EMR'yi kullanın. S3 verilerini zenginleştirmek için Amazon EMR'yi Amazon Redshift verileriyle birlikte kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 558
Bir şirketin aynı AWS içerisinde us-west-2 Bölgesinde bulunan iki VPC'si var
hesap. Şirketin bu VPC'ler arasındaki ağ trafiğine izin vermesi gerekiyor. Yaklaşık 500
Her ay VPC'ler arasında GB veri aktarımı gerçekleşecektir.
Bu VPC'leri bağlamak için EN uygun maliyetli çözüm nedir?

A. VPC'leri bağlamak için AWS Transit Gateway'i uygulayın. Her VPC'nin rota tablolarını şu şekilde güncelleyin:
VPC'ler arası iletişim için transit ağ geçidini kullanın.

B. VPC'ler arasında bir AWS Siteden Siteye VPN tüneli uygulayın. Her birinin rota tablolarını güncelleyin
VPC'ler arası iletişim için VPN tünelini kullanmak üzere VPC.

C. VPC'ler arasında bir VPC eşleme bağlantısı kurun. Her VPC'nin rota tablolarını şu şekilde güncelleyin:
VPC'ler arası iletişim için VPC eşleme bağlantısını kullanın.

D. VPC'ler arasında 1 GB'lık bir AWS Direct Connect bağlantısı kurun. Rota tablolarını güncelleyin
VPC'ler arası iletişim için her VPC'nin Doğrudan Bağlantı bağlantısını kullanması.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** VPC'ler arasında bir VPC eşleme bağlantısı kurun. VPC'ler arası iletişim için VPC eşleme bağlantısını kullanmak üzere her VPC'nin yönlendirme tablolarını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 559
Bir şirket, farklı ürün grupları için AWS'de birden fazla uygulamayı barındırıyor. Uygulamaların kullandığı
Amazon EC2 bulut sunucuları ve Application Load Balancer'lar dahil olmak üzere farklı bilgi işlem kaynakları.
AWS'de uygulamalar aynı kuruluş altında farklı AWS hesaplarında çalışır
Birden fazla AWS Bölgesindeki kuruluşlar. Her ürün grubu için ekipler her birini etiketledi
bireysel hesaplardaki bilgi işlem kaynağı.
Şirket, konsolidasyondan her bir ürün grubunun maliyeti hakkında daha fazla ayrıntı istiyor
Kuruluşlarda faturalandırma özelliği.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. AWS Faturalandırma konsolunda AWS tarafından oluşturulan belirli bir etiketi seçin.

B. AWS Faturalandırma konsolunda kullanıcı tanımlı belirli bir etiket seçin.

C. AWS Kaynak Grupları konsolunda kullanıcı tanımlı belirli bir etiket seçin.

D. Seçilen etiketi her AWS hesabından etkinleştirin.

E. Seçilen etiketi Kuruluş yönetimi hesabından etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** AWS Faturalandırma konsolunda kullanıcı tanımlı belirli bir etiket seçin. Seçilen etiketi Kuruluş yönetimi hesabından etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 560
Bir şirketin çözüm mimarı, AWS'yi kullanan bir AWS çoklu hesap çözümü tasarlıyor
Organizasyonlar. Çözüm mimarı şirketin hesaplarını organizasyonel olarak organize etti
birimler (OU'lar).
Çözüm mimarının, kuruluş birimi hiyerarşisindeki değişiklikleri tanımlayacak bir çözüme ihtiyacı vardır.
Çözümün aynı zamanda herhangi bir değişiklik konusunda şirketin operasyon ekibini bilgilendirmesi gerekiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS Control Tower'ı kullanarak AWS hesaplarının temel hazırlığını yapın. Hesap kayması bildirimlerini kullanarak
Kuruluş birimi hiyerarşisindeki değişiklikleri tanımlayın.

B. AWS Control Tower'ı kullanarak AWS hesaplarının temel hazırlığını yapın. AWS Config toplu kurallarını kullanın
Kuruluş birimi hiyerarşisindeki değişiklikleri tanımlamak için.

C. Kuruluşlarda hesap oluşturmak için AWS Service Catalog'u kullanın. AWS CloudTrail kullanın
Kuruluş birimi hiyerarşisindeki değişiklikleri belirlemek için organizasyon takibi.

D. Kuruluşlarda hesap oluşturmak için AWS CloudFormation şablonlarını kullanın. Drift'i kullanın
OU hiyerarşisindeki değişiklikleri tanımlamak için bir yığın üzerinde algılama işlemi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Control Tower'ı kullanarak AWS hesaplarının temel hazırlığını yapın. Kuruluş birimi hiyerarşisindeki değişiklikleri belirlemek için hesap kayması bildirimlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 561
Bir şirketin web sitesi her gün milyonlarca isteği işler ve bu isteklerin sayısı
artmaya devam ediyor. Bir çözüm mimarının web'in yanıt süresini iyileştirmesi gerekiyor
uygulama. Çözüm mimarı, uygulamanın gecikmeyi azaltması gerektiğine karar verir
Amazon DynamoDB tablosundan ürün ayrıntılarını alırken.
Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılayacak?

A. Bir DynamoDB Hızlandırıcı (DAX) kümesi kurun. Tüm okuma isteklerini DAX aracılığıyla yönlendirin.

B. DynamoDB tablosu ile web uygulaması arasında Amazon ElastiCache for Redis'i kurun.
Tüm okuma isteklerini Redis aracılığıyla yönlendirin.

C. DynamoDB tablosu ile web arasında Memcached için Amazon ElastiCache'i kurun
uygulama. Tüm okuma isteklerini Memcached aracılığıyla yönlendirin.

D. Tabloda Amazon DynamoDB Streams'i kurun ve AWS Lambda'nın tablodan okunmasını sağlayın
ve Amazon ElastiCache'i doldurun. Tüm okuma isteklerini ElastiCache aracılığıyla yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir DynamoDB Hızlandırıcı (DAX) kümesi kurun. Tüm okuma isteklerini DAX aracılığıyla yönlendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 562
Bir çözüm mimarının, API'nin Amazon EC2'den Amazon DynamoDB'ye çağrı yapmasını sağlaması gerekir
VPC'deki örnekler internette dolaşmaz.
Çözüm mimarı bu gereksinimi karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Uç nokta için bir rota tablosu girişi oluşturun.

B. DynamoDB için bir ağ geçidi uç noktası oluşturun.

C. Amazon EC2 için bir arayüz uç noktası oluşturun.

D. VPC'nin alt ağlarının her birindeki uç nokta için elastik bir ağ arayüzü oluşturun.

E. Erişim sağlamak için uç noktanın güvenlik grubunda bir güvenlik grubu girişi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Uç nokta için bir rota tablosu girişi oluşturun. DynamoDB için bir ağ geçidi uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 563
Bir şirket, uygulamalarını hem Amazon Elastic Kubernetes Service'te (Amazon EKS) çalıştırıyor
kümeler ve şirket içi Kubernetes kümeleri. Şirket tüm kümeleri görüntülemek istiyor ve
İş yüklerini merkezi bir konumdan yönetin.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Küme bilgilerini toplamak ve gruplandırmak için Amazon CloudWatch Container Insights'ı kullanın.

B. Tüm Kubernetes kümelerini kaydetmek ve bağlamak için Amazon EKS Connector'ı kullanın.

C. Küme bilgilerini toplamak ve görüntülemek için AWS Systems Manager'ı kullanın.

D. Yerel ağlara sahip diğer kümeleri görüntülemek için Amazon EKS Anywhere'i birincil küme olarak kullanın.
Kubernetes komutları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tüm Kubernetes kümelerini kaydetmek ve bağlamak için Amazon EKS Connector'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 564
Bir şirket bir e-ticaret uygulaması geliştiriyor ve hassas müşteri verilerini depolaması gerekiyor
bilgi. Şirketin müşterilere satın alma işlemlerini tamamlama yeteneği vermesi gerekiyor
web sitesinde. Şirketin ayrıca hassas müşteri verilerinin korunduğundan emin olması gerekiyor.
veritabanı yöneticilerinden bile.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Hassas verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde depolayın. EBS'yi kullanın
Verileri şifrelemek için şifreleme. Erişimi kısıtlamak için bir IAM örneği rolü kullanın.

B. Hassas verileri MySQL için Amazon RDS'de depolayın. AWS Anahtar Yönetimi Hizmetini (AWS) kullanın
KMS) verileri şifrelemek için istemci tarafı şifreleme.

C. Hassas verileri Amazon S3'te saklayın. AWS Key Management Service'i (AWS KMS) kullanın
Verileri şifrelemek için sunucu tarafı şifreleme. Erişimi kısıtlamak için S3 paket politikalarını kullanın.

D. Hassas verileri Windows Server için Amazon FSx'te saklayın. Dosya paylaşımını uygulamaya bağlayın
sunucular. Erişimi kısıtlamak için Windows dosya izinlerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Hassas verileri MySQL için Amazon RDS'de depolayın. Verileri şifrelemek için AWS Key Management Service (AWS KMS) istemci tarafı şifrelemesini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 565
Bir şirketin, işlem verilerini işleyen şirket içi bir MySQL veritabanı vardır. şirket
veritabanını AWS Cloud'a taşıyor. Taşınan veritabanı uyumluluğu korumalıdır
Şirketin veritabanını kullanan uygulamalarıyla. Taşınan veritabanının da ölçeklendirilmesi gerekir
talebin arttığı dönemlerde otomatik olarak.
Bu gereksinimleri hangi geçiş çözümü karşılayacak?

C. Veritabanını Amazon RDS for MySQL'e taşımak için yerel MySQL araçlarını kullanın. Elastiki yapılandır
depolama ölçeklendirmesi.

B. mysqldump yardımcı programını kullanarak veritabanını Amazon Redshift'e taşıyın. Otomatik Ölçeklendirmeyi aç
Amazon Redshift kümesi için.

C. Veritabanını Amazon Aurora'ya taşımak için AWS Database Migration Service'i (AWS DMS) kullanın.
Aurora Otomatik Ölçeklendirmeyi açın.

D. Veritabanını Amazon'a taşımak için AWS Database Migration Service'i (AWS DMS) kullanın
DinamoDB. Otomatik Ölçeklendirme ilkesini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Veritabanını Amazon Aurora'ya taşımak için AWS Database Migration Service'i (AWS DMS) kullanın. Aurora Otomatik Ölçeklendirmeyi açın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 566
Bir şirket, iki Erişilebilirlik Alanındaki bir VPC'de birden fazla Amazon EC2 Linux örneğini çalıştırıyor.
Örnekler, hiyerarşik bir dizin yapısı kullanan uygulamaları barındırır. Uygulamaların ihtiyaç duyduğu
Paylaşılan depolama alanına hızlı ve eş zamanlı olarak okuma ve yazma olanağı sağlar.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir Amazon S3 klasörü oluşturun. VPC'deki tüm EC2 bulut sunucularından erişime izin verin.

B. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini bağlayın
her EC2 örneğinden.

C. Tedarik Edilen IOPS SSD (io2) Amazon Elastic Block Store'da (Amazon) bir dosya sistemi oluşturun
EBS) hacmi. EBS birimini tüm EC2 bulut sunucularına ekleyin.

D. Amazon Elastic Block Store (Amazon EBS) birimlerine eklenen dosya sistemleri oluşturun.
her EC2 örneği. EBS birimlerini farklı EC2 bulut sunucuları arasında senkronize edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini her EC2 örneğinden bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 567
Bir çözüm mimarı, saatlik enerji tüketimini şu şekilde depolayacak bir iş yükü tasarlıyor:
bir binadaki iş kiracıları. Sensörler, bir veritabanını HTTP istekleri aracılığıyla besleyecek ve
her kiracı için kullanımı toplayın. Çözüm mimarı aşağıdaki durumlarda yönetilen hizmetleri kullanmalıdır:
mümkün. Çözüm mimarı ekledikçe iş yükü gelecekte daha fazla özellik kazanacak
bağımsız bileşenler.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Sensörlerden veri almak için Amazon API Gateway'i AWS Lambda işlevleriyle birlikte kullanın,
verileri işleyin ve verileri bir Amazon DynamoDB tablosunda saklayın.

B. Amazon EC2'nin Otomatik Ölçeklendirme grubu tarafından desteklenen bir Elastic Load Balancer kullanın
sensörlerden veri almak ve işlemek için örnekler. Depolamak için bir Amazon S3 klasörü kullanın
işlenmiş veriler.

C. Sensörlerden veri almak için Amazon API Gateway'i AWS Lambda işlevleriyle birlikte kullanın,
verileri işleyin ve verileri bir Amazon'daki Microsoft SQL Server Express veritabanında saklayın
EC2 örneği.

D. Amazon EC2'nin Otomatik Ölçeklendirme grubu tarafından desteklenen bir Elastic Load Balancer kullanın
sensörlerden veri almak ve işlemek için örnekler. Amazon Elastic Dosya Sistemini Kullanın
(Amazon EFS) işlenen verileri depolamak için paylaşımlı dosya sistemi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Sensörlerden veri almak, verileri işlemek ve verileri bir Amazon DynamoDB tablosunda depolamak için Amazon API Gateway'i AWS Lambda işlevleriyle birlikte kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 568
Bir çözüm mimarı, yeni bir web uygulaması için depolama mimarisini tasarlıyor.
mühendislik çizimlerinin saklanması ve görüntülenmesi. Tüm uygulama bileşenleri şu adrese dağıtılacaktır:
AWS altyapısı.
Uygulama tasarımı, kullanıcıların beklediği süreyi en aza indirmek için önbelleğe almayı desteklemelidir.
Yüklenecek mühendislik çizimleri. Uygulama petabaytlarca veri depolayabilmelidir.
Çözüm mimarı hangi depolama ve önbellekleme kombinasyonunu kullanmalıdır?

A. Amazon CloudFront'lu Amazon S3

B. Amazon ElastiCache ile Amazon S3 Glacier

C. Amazon CloudFront ile Amazon Elastic Block Store (Amazon EBS) birimleri

D. Amazon ElastiCache ile AWS Depolama Ağ Geçidi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon CloudFront ile Amazon S3
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 569
Amazon EventBridge kuralı üçüncü taraf bir API'yi hedefler. Üçüncü taraf API herhangi bir bilgi almadı
gelen trafik. Bir çözüm mimarının kural koşullarının yerine getirilip getirilmediğini belirlemesi gerekir.
karşılanıp karşılanmadığı ve kuralın hedefinin çağrılıp çağrılmadığı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon CloudWatch'ta AWS/Events ad alanındaki ölçümleri kontrol edin.

B. Amazon Simple Queue Service (Amazon SQS) teslim edilmeyen ileti kuyruğundaki olayları inceleyin.

C. Amazon CloudWatch Günlüklerindeki olayları kontrol edin.

D. EventBridge olayları için AWS CloudTrail'deki izleri kontrol edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS/Events ad alanındaki Amazon CloudWatch'taki ölçümleri kontrol edin.
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 570
Bir şirketin her Cuma akşamı çalışan büyük bir iş yükü var. İş yükü Amazon'da çalışıyor
us-east-1 Bölgesindeki iki Erişilebilirlik Alanında bulunan EC2 bulut sunucuları. Normalde şirket
her zaman ikiden fazla örnek çalıştırılmamalıdır. Ancak şirket altıya kadar ölçeklendirmek istiyor
Düzenli olarak tekrarlanan artan iş yükünün üstesinden gelmek için her Cuma örnekler.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bulut sunucularını ölçeklendirmek için Amazon EventBridge'de bir hatırlatıcı oluşturun.

B. Zamanlanmış eylemi olan bir Otomatik Ölçeklendirme grubu oluşturun.

C. Manuel ölçeklendirmeyi kullanan bir Otomatik Ölçeklendirme grubu oluşturun.

D. Otomatik ölçeklendirmeyi kullanan bir Otomatik Ölçeklendirme grubu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Zamanlanmış bir eylemi olan bir Otomatik Ölçeklendirme grubu oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 571
Bir şirket REST API oluşturuyor. Şirketin TLS kullanımına yönelik katı gereksinimleri vardır.
Şirket, API uç noktalarında TLSv1.3'e ihtiyaç duyuyor. Şirketin ayrıca belirli bir
TLS sertifikasını imzalamak için genel üçüncü taraf sertifika yetkilisi (CA).
Bu gereksinimleri hangi çözüm karşılayacak?

A. Üçüncü taraf tarafından imzalanan bir sertifika oluşturmak için yerel bir makine kullanın.
sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın. Amazon API Gateway'de bir HTTP API oluşturma
özel bir alan adı ile. Sertifikayı kullanmak için özel etki alanını yapılandırın.

B. AWS Sertifika Yöneticisi'nde (ACM) üçüncü taraf CA tarafından imzalanan bir sertifika oluşturun.
Amazon API Gateway'de özel bir etki alanıyla bir HTTP API oluşturun. Özelliği yapılandırma
Sertifikayı kullanmak için etki alanı.

C. Üçüncü taraf CA tarafından imzalanan bir sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın.
Sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın. Şununla bir AWS Lambda işlevi oluşturun:
Lambda işlevi URL'si. Sertifikayı kullanmak için Lambda işlevi URL'sini yapılandırın.

D. AWS Sertifika Yöneticisi'nde (ACM) üçüncü taraf CA tarafından imzalanan bir sertifika oluşturun.
Lambda işlevi URL'si ile bir AWS Lambda işlevi oluşturun. Lambda işlevini yapılandırma
Sertifikanın kullanılacağı URL.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Üçüncü taraf tarafından imzalanan bir sertifika oluşturmak için yerel bir makine kullanın. Sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın. Amazon API Gateway'de özel bir etki alanıyla bir HTTP API oluşturun. Sertifikayı kullanmak için özel etki alanını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 572
Bir şirket AWS'de bir uygulama çalıştırıyor. Uygulama tutarsız miktarlarda alıyor
kullanım. Uygulama, şirket içi bir ağ bağlantısına bağlanmak için AWS Direct Connect'i kullanıyor
MySQL uyumlu veritabanı. Şirket içi veritabanı sürekli olarak en az 2 GiB kullanır
hafıza.
Şirket, şirket içi veritabanını yönetilen bir AWS hizmetine taşımak istiyor.
şirket, beklenmedik iş yükü artışlarını yönetmek için otomatik ölçeklendirme özelliklerini kullanmak istiyor.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Varsayılan okuma ve yazma kapasitesi ayarlarıyla bir Amazon DynamoDB veritabanı sağlayın.

B. Minimum 1 Aurora kapasite birimi kapasiteli bir Amazon Aurora veritabanı sağlayın
(ACU).

C. Minimum 1 Aurora kapasiteli bir Amazon Aurora Serverless v2 veritabanı sağlayın
kapasite ünitesi (ACU).

D. 2 GiB belleğe sahip bir Amazon RDS for MySQL veritabanı sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Minimum 1 Aurora kapasite birimi (ACU) kapasiteli bir Amazon Aurora Serverless v2 veritabanı sağlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 573
Bir şirket, AWS Lambda ile olay odaklı programlama modeli kullanmak istiyor. şirket
Java 11'de çalışan Lambda işlevlerinin başlatma gecikmesini azaltmak istiyor. Şirket,
uygulamalar için katı gecikme gereksinimleri yoktur. Şirket soğuğu azaltmak istiyor
bir işlevin ölçeği büyüdüğünde başlar ve aykırı gecikmeler.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Lambda tarafından sağlanan eşzamanlılığı yapılandırın.

B. Lambda işlevlerinin zaman aşımını artırın.

C. Lambda fonksiyonlarının hafızasını artırın.

D. Lambda SnapStart'ı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Lambda SnapStart'ı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 574
Bir finansal hizmetler şirketi, MySQL için Amazon RDS'yi kullanan yeni bir uygulamayı başlattı
veritabanı. Şirket, uygulamayı borsa trendlerini takip etmek için kullanıyor. Şirketin ihtiyacı var
Uygulamanın her hafta sonunda sadece 2 saat çalıştırılması. Şirketin ihtiyacı var
veritabanını çalıştırma maliyetini optimize edin.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Mevcut RDS for MySQL veritabanını Aurora Serverless v2 MySQL veritabanına taşıyın
küme.

B. Mevcut RDS for MySQL veritabanını bir Aurora MySQL veritabanı kümesine taşıyın.

C. Mevcut RDS for MySQL veritabanını MySQL çalıştıran bir Amazon EC2 bulut sunucusuna taşıyın.
EC2 bulut sunucusu için bir bulut sunucusu rezervasyonu satın alın.

D. Mevcut RDS for MySQL veritabanını bir Amazon Elastic Container Service'e taşıyın
Görevleri çalıştırmak için MySQL kapsayıcı görüntülerini kullanan (Amazon ECS) kümesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mevcut RDS for MySQL veritabanını Aurora Serverless v2 MySQL veritabanı kümesine taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 575
Bir şirket, uygulamalarını Amazon Elastic Kubernetes Service'te (Amazon EKS) dağıtıyor
AWS Bölgesinde bir Application Load Balancer'ın arkasında. Uygulamanın verileri bir yerde saklaması gerekiyor
PostgreSQL veritabanı motoru. Şirket, veritabanındaki verilerin yüksek düzeyde olmasını istiyor
mevcut. Şirketin ayrıca okuma iş yükleri için daha fazla kapasiteye ihtiyacı var.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Global tablolarla yapılandırılmış bir Amazon DynamoDB veritabanı tablosu oluşturun.

B. Multi-AZ dağıtımlarıyla bir Amazon RDS veritabanı oluşturun.

C. Multi-AZ DB kümesi dağıtımıyla bir Amazon RDS veritabanı oluşturun.

D. Bölgeler arası okuma replikalarıyla yapılandırılmış bir Amazon RDS veritabanı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Multi-AZ DB kümesi dağıtımıyla bir Amazon RDS veritabanı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 576
Bir şirket Amazon API kullanarak AWS üzerinde RESTful sunucusuz bir web uygulaması geliştiriyor
Ağ Geçidi ve AWS Lambda. Bu web uygulamasının kullanıcıları coğrafi olarak dağıtılacak,
ve şirket bu kullanıcılara yönelik API isteklerinin gecikmesini azaltmak istiyor.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi uç nokta türünü kullanmalıdır?

A. Özel uç nokta

B. Bölgesel son nokta

C. Arayüz VPC uç noktası

D. Kenar için optimize edilmiş uç nokta

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kenar için optimize edilmiş uç nokta
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 577
Bir şirket, web sitesinin içerik sayfalarını sunmak için Amazon CloudFront dağıtımını kullanıyor.
şirketin, müşterilerin şirket bilgilerine erişirken TLS sertifikası kullandığından emin olması gerekir.
web sitesi. Şirket, TLS sertifikalarının oluşturulmasını ve yenilenmesini otomatikleştirmek istiyor.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Sertifika oluşturmak için CloudFront güvenlik politikasını kullanın.

B. Sertifika oluşturmak için CloudFront kaynak erişim kontrolünü (OAC) kullanın.

C. Sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Etki alanı için DNS doğrulamasını kullanın.

D. Sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Şunlar için e-posta doğrulamayı kullanın:
etki alanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Etki alanı için DNS doğrulamasını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 578
Bir şirket, Amazon DynamoDB'yi veritabanı olarak kullanan sunucusuz bir uygulama dağıttı
katman. Uygulamanın kullanıcı sayısında büyük bir artış yaşandı. Şirket gelişmek istiyor
Milisaniyelerden mikrosaniyelere kadar veritabanı yanıt süresi ve isteklerin önbelleğe alınması
veritabanı.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. DynamoDB Hızlandırıcıyı (DAX) kullanın.

B. Veritabanını Amazon Redshift'e taşıyın.

C. Veritabanını Amazon RDS'ye taşıyın.

D. Redis için Amazon ElastiCache'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** DynamoDB Hızlandırıcıyı (DAX) kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon DynamoDB Hızlandırıcı (DAX):** DynamoDB için özel geliştirilmiş bellek içi önbellek kümesidir; yoğun okuma yapan uygulamalarda yanıt süresini milisaniyelerden mikrosaniyelere indirir.

---

---

Soru 579
Bir şirket, PostgreSQL için Amazon RDS'yi kullanan bir uygulamayı çalıştırıyor. Başvuru alınır
trafik sadece hafta içi mesai saatleri içerisinde. Şirket maliyetleri optimize etmek istiyor ve
bu kullanıma bağlı olarak operasyonel ek yükü azaltın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Başlatma ve durdurma programlarını yapılandırmak için AWS'deki Örnek Zamanlayıcıyı kullanın.

B. Otomatik yedeklemeleri kapatın. Veritabanının haftalık manuel anlık görüntülerini oluşturun.

C. Minimum CPU'ya göre veritabanını başlatmak ve durdurmak için özel bir AWS Lambda işlevi oluşturun
kullanım.

D. Tüm Ön Ödemeli ayrılmış Veritabanı bulut sunucularını satın alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Başlatma ve durdurma programlarını yapılandırmak için AWS'deki Örnek Zamanlayıcı'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 580
Bir şirket, gecikmeye duyarlı bir uygulamayı şirket içinde çalıştırmak için yerel olarak bağlı depolamayı kullanıyor.
şirket, uygulamayı AWS Cloud'a taşımak için kaldır ve kaydır yöntemini kullanıyor. şirket
uygulama mimarisini değiştirmek istemiyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon EC2 bulut sunucusuyla Otomatik Ölçeklendirme grubunu yapılandırın. Parlaklık için Amazon FSx kullanın
Uygulamayı çalıştırmak için dosya sistemi.

B. Uygulamayı bir Amazon EC2 bulut sunucusunda barındırın. Amazon Elastic Block Store'u kullanın (Amazon
Uygulamayı çalıştırmak için EBS) GP2 birimi.

C. Amazon EC2 bulut sunucusuyla Otomatik Ölçeklendirme grubunu yapılandırın. Şunlar için Amazon FSx kullanın:
Uygulamayı çalıştırmak için OpenZFS dosya sistemi.

D. Uygulamayı bir Amazon EC2 bulut sunucusunda barındırın. Amazon Elastic Block Store'u kullanın (Amazon
Uygulamayı çalıştırmak için EBS) GP3 birimi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulamayı bir Amazon EC2 örneğinde barındırın. Uygulamayı çalıştırmak için bir Amazon Elastic Block Store (Amazon EBS) GP3 birimi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 581
Bir şirket, Amazon EC2 bulut sunucularında durum bilgisi olan bir üretim uygulaması çalıştırıyor. Uygulama
en az iki EC2 bulut sunucusunun her zaman çalışır durumda olmasını gerektirir.
Bir çözüm mimarının, yüksek düzeyde kullanılabilir ve hataya dayanıklı bir mimari tasarlaması gerekir.
uygulama. Çözüm mimarı, EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu oluşturur.
Çözüm mimarının bu gereksinimleri karşılamak için hangi ek adımları atması gerekir?

A. Otomatik Ölçeklendirme grubunun minimum kapasitesini ikiye ayarlayın. Tek bir İsteğe Bağlı Bulut Sunucusunu dağıtın
Erişilebilirlik Alanı ve ikinci bir Erişilebilirlik Alanında bir İsteğe Bağlı Bulut Sunucusu.

B. Otomatik Ölçeklendirme grubunun minimum kapasitesini dörde ayarlayın. İki İsteğe Bağlı Bulut Sunucusunu dağıtın
ikinci bir Erişilebilirlik Alanında bir Erişilebilirlik Alanı ve iki İsteğe Bağlı Bulut Sunucusu.

C. Otomatik Ölçeklendirme grubunun minimum kapasitesini ikiye ayarlayın. Tek seferde dört Spot Bulut Sunucusu dağıtın
Erişilebilirlik Alanı.

D. Otomatik Ölçeklendirme grubunun minimum kapasitesini dörde ayarlayın. İki İsteğe Bağlı Bulut Sunucusunu dağıtın
ikinci bir Erişilebilirlik Alanında bir Erişilebilirlik Alanı ve iki Spot Bulut Sunucusu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunun minimum kapasitesini dörde ayarlayın. Bir Erişilebilirlik Alanında iki İsteğe Bağlı Bulut Sunucusunu ve ikinci bir Erişilebilirlik Alanında iki İsteğe Bağlı Bulut Sunucusunu dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 582
Bir e-ticaret şirketi, DNS sağlayıcısı olarak Amazon Route 53'ü kullanıyor. Şirket ev sahipliği yapıyor
web sitesinde ve AWS Cloud'da. Şirketin şirket içi veri merkezi,
us-batı-1 Bölgesi. Şirket, web sitesini barındırmak için eu-central-1 Bölgesini kullanıyor. şirket
web sitesinin yükleme süresini mümkün olduğunca en aza indirmek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir coğrafi konum yönlendirme politikası oluşturun. Us-west-1 yakınındaki trafiği şirket içine gönderme
veri merkezi. eu-central-1 yakınındaki trafiği eu-central-1'e gönderin.

B. eu-central-1 yakınındaki tüm trafiği eu-central-1'e yönlendiren basit bir yönlendirme politikası oluşturun ve
şirket içi veri merkezi yakınındaki tüm trafiği şirket içi veri merkezine yönlendirir.

C. Gecikme yönlendirme politikası oluşturun. Politikayı us-west-1 ile ilişkilendirin.

D. Ağırlıklı bir yönlendirme politikası oluşturun. Trafiği eu-central-1 ile eu-central-1 arasında eşit olarak bölün
şirket içi veri merkezi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir coğrafi konum yönlendirme politikası ayarlayın. Us-west-1 yakınındaki trafiği şirket içi veri merkezine gönderin. eu-central-1 yakınındaki trafiği eu-central-1'e gönderin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 583
Bir şirketin fiziksel bantlarda 5 PB arşivlenmiş verisi var. Şirketin korunması gerekiyor
bantlardaki veriler uyumluluk amacıyla 10 yıl daha saklanacaktır. Şirket geçiş yapmak istiyor
önümüzdeki 6 ay içinde AWS'ye. Kasetleri saklayan veri merkezinde 1 Gbps uplink internet var
bağlantı.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Tesislerdeki bantlardaki verileri okuyun. Verileri yerel bir NFS depolama alanına yerleştirin. AWS'yi kullanın
Verileri Amazon S3 Glacier Esnek Alma'ya taşımak için DataSync.

B. Verileri bantlardan okumak ve doğrudan bantlara yazmak için şirket içi bir yedekleme uygulaması kullanın.
Amazon S3 Glacier Derin Arşivi.

C. Teyp Ağ Geçidine sahip birden fazla AWS Snowball cihazı sipariş edin. Fiziksel bantları şuraya kopyalayın:
Snowball'da sanal kasetler. Snowball cihazlarını AWS'ye gönderin. Taşımak için bir yaşam döngüsü ilkesi oluşturun
Amazon S3 Glacier Deep Archive'a bantlar.

D. Şirket içi bir Bant Ağ Geçidini yapılandırın. AWS Cloud'da sanal bantlar oluşturun. Yedeği kullan
Fiziksel bandı sanal banda kopyalamak için yazılım.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Teyp Ağ Geçidine sahip birden fazla AWS Snowball cihazı sipariş edin. Fiziksel bantları Snowball'daki sanal bantlara kopyalayın. Snowball cihazlarını AWS'ye gönderin. Bantları Amazon S3 Glacier Deep Archive'a taşımak için bir yaşam döngüsü ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 584
Bir şirket, büyük miktarda veriyi paralel olarak işleyen bir uygulamayı devreye alıyor.
şirket iş yükü için Amazon EC2 bulut sunucularını kullanmayı planlıyor. Ağ mimarisi mutlaka
Düğüm gruplarının aynı temel donanımı paylaşmasını önleyecek şekilde yapılandırılabilir.
Hangi ağ çözümü bu gereksinimleri karşılıyor?

A. EC2 örneklerini bir forma yerleştirme grubunda çalıştırın.

B. EC2 bulut sunucularını ayrı hesaplarda gruplayın.

C. EC2 bulut sunucularını ayrılmış kiracılıkla yapılandırın.

D. EC2 bulut sunucularını paylaşılan kiracılıkla yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 örneklerini bir forma yerleştirme grubunda çalıştırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Soru 585
Bir çözüm mimarı, Amazon EC2'yi sağlamak için bir olağanüstü durum kurtarma (DR) stratejisi tasarlıyor
yük devretme AWS Bölgesindeki kapasite. İş gereksinimleri, DR stratejisinin karşılanması gerektiğini belirtiyor
yük devretme Bölgesindeki kapasite.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Yük devretme Bölgesinde İsteğe Bağlı Bulut Sunucuları satın alın.

B. Yük devretme Bölgesinde bir EC2 Tasarruf Planı satın alın.

C. Yük devretme Bölgesinde bölgesel Rezerve Edilmiş Bulut Sunucuları satın alın.

D. Yük Devretme Bölgesinde Kapasite Rezervasyonu satın alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yük Devretme Bölgesinde Kapasite Rezervasyonu satın alın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 586
Bir şirketin, AWS Organizasyonlarındaki organizasyonunun bir parçası olarak beş organizasyonel birimi (OU) vardır.
Her bir kuruluş birimi, şirketin sahip olduğu beş işletmeyle ilişkilidir. Şirketin araştırma ve
geliştirme (Ar-Ge) işi şirketten ayrılıyor ve kendi organizasyonuna ihtiyaç duyacak.
Çözüm mimarı bu amaç için ayrı bir yeni yönetim hesabı oluşturur.
Çözüm mimarı yeni yönetim hesabında bundan sonra ne yapmalıdır?

A. Geçiş sırasında Ar-Ge AWS hesabının her iki kuruluşun da parçası olmasını sağlayın.

B. Ar-Ge AWS hesabından sonra Ar-Ge AWS hesabını yeni organizasyonun parçası olmaya davet edin
Önceki organizasyondan ayrıldı.

C. Yeni kuruluşta yeni bir Ar-Ge AWS hesabı oluşturun. Kaynakları öncekinden taşıyın
Ar-Ge AWS hesabını yeni Ar-Ge AWS hesabına aktarın.

D. Ar-Ge AWS hesabının yeni kuruluşa katılmasını sağlayın. Yeni yönetim hesabını bir
önceki örgütün üyesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ar-Ge AWS hesabı önceki kuruluştan ayrıldıktan sonra Ar-Ge AWS hesabını yeni kuruluşun parçası olmaya davet edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 587
Bir şirket, farklı web uygulamalarındaki müşteri etkinliklerini yakalamak için bir çözüm tasarlıyor
süreç analitiğini yapın ve tahminler yapın. Web uygulamalarında müşteri etkinliği
öngörülemez ve aniden artabilir. Şirketin entegre bir çözüme ihtiyacı var
diğer web uygulamaları. Çözüm, güvenlik amacıyla bir yetkilendirme adımı içermelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Elastic Container Service'in önünde bir Gateway Load Balancer'ı (GWLB) yapılandırma
(Amazon ECS) şirketin aldığı bilgileri bir depoda saklayan konteyner örneği
Amazon Elastic File System (Amazon EFS) dosya sistemi. Yetkilendirme GWLB'de çözülür.

B. Amazon Kinesis veri akışının önünde bir Amazon API Gateway uç noktası yapılandırın.
şirketin aldığı bilgileri bir Amazon S3 klasöründe saklar. AWS Lambda'yı kullanın
Yetkilendirmeyi çözme işlevi.

C. Amazon Kinesis Data Firehose'un önünde bir Amazon API Gateway uç noktası yapılandırın.
şirketin aldığı bilgileri bir Amazon S3 klasöründe saklar. API Ağ Geçidi kullanın
Yetkilendirmeyi çözümlemek için Lambda yetkilendiricisi.

D. Amazon Elastic Container Service'in önünde bir Ağ Geçidi Yük Dengeleyicisini (GWLB) yapılandırma
(Amazon ECS) şirketin aldığı bilgileri bir sunucuda saklayan konteyner örneği
Amazon Elastic File System (Amazon EFS) dosya sistemi. Sorunu çözmek için bir AWS Lambda işlevi kullanın
yetkilendirme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Şirketin aldığı bilgileri bir Amazon S3 klasöründe saklayan bir Amazon Kinesis Data Firehose'un önünde bir Amazon API Gateway uç noktası yapılandırın. Yetkilendirmeyi çözümlemek için bir API Ağ Geçidi Lambda yetkilendiricisi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 588
Bir e-ticaret şirketi, Amazon RDS DB bulut sunucuları için olağanüstü durum kurtarma çözümü istiyor
Microsoft SQL Server Enterprise Edition'ı çalıştıran. Şirketin mevcut kurtarma noktası hedefi
(RPO) ve kurtarma süresi hedefi (RTO) 24 saattir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Bölgeler arası bir okuma replikası oluşturun ve okuma replikasını birincil örneğe yükseltin.

B. RDS Bölgeler arası çoğaltma oluşturmak için AWS Database Migration Service'i (AWS DMS) kullanın.

C. Yerel yedekleri bir Amazon S3 klasörüne kopyalamak için her 24 saatte bir Bölgeler arası çoğaltmayı kullanın.

D. Otomatik anlık görüntüleri her 24 saatte bir başka bir Bölgeye kopyalayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Otomatik anlık görüntüleri her 24 saatte bir başka bir Bölgeye kopyalayın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 589
Bir şirket, arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor
Yapışkan oturumların etkin olduğu bir Application Load Balancer. Web sunucusu şu anda barındırılıyor
Kullanıcı oturumu durumu. Şirket yüksek kullanılabilirlik sağlamak ve kullanıcı oturumunu önlemek istiyor
Bir web sunucusu kesintisi durumunda durum kaybı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Oturum verilerini depolamak için bir Amazon ElastiCache for Memcached örneğini kullanın. Güncelleme
Oturum durumunu depolamak amacıyla Memcached için ElastiCache'i kullanacak uygulama.

B. Oturum durumunu depolamak için Amazon ElastiCache for Redis'i kullanın. Kullanılacak uygulamayı güncelleyin
Oturum durumunu depolamak için Redis için ElastiCache.

C. Oturum verilerini depolamak için AWS Storage Gateway önbelleğe alınmış birimi kullanın. Uygulamayı şu şekilde güncelleyin:
oturum durumunu depolamak için AWS Storage Gateway önbelleğe alınmış birimi kullanın.

D. Oturum durumunu depolamak için Amazon RDS'yi kullanın. Uygulamayı Amazon RDS'yi kullanacak şekilde güncelleyin
oturum durumunu saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Oturum durumunu depolamak için Amazon ElastiCache for Redis'i kullanın. Oturum durumunu depolamak amacıyla Redis için ElastiCache'i kullanacak şekilde uygulamayı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 590
Bir şirket, MySQL veritabanını şirketin şirket içi veri merkezinden bir
MySQL Veritabanı bulut sunucusu için Amazon RDS. Şirket, RDS Veritabanı örneğini şu gereksinimleri karşılayacak şekilde boyutlandırdı:
Şirketin ortalama günlük iş yükü. Ayda bir kez, veritabanı yavaş çalışıyor
şirket bir rapor için sorgular çalıştırır. Şirket, raporları çalıştırma yeteneğine sahip olmak istiyor ve
Günlük iş yüklerinin performansını koruyun.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanının okuma kopyasını oluşturun. Sorguları okuma kopyasına yönlendirin.

B. Veritabanının bir yedeğini oluşturun. Yedeği başka bir veritabanı bulut sunucusuna geri yükleyin. Yönlendir
yeni veritabanına sorgular.

C. Verileri Amazon S3'e aktarın. S3 klasörünü sorgulamak için Amazon Athena'yı kullanın.

D. Ek iş yükünü karşılamak için veritabanı bulut sunucusunu yeniden boyutlandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanının okuma kopyasını oluşturun. Sorguları okuma kopyasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 591
Bir şirket, Amazon Elastic Kubernetes Service'i (Amazon) kullanarak bir konteyner uygulaması çalıştırıyor
EKS). Uygulama, müşterileri yöneten ve sipariş veren mikro hizmetleri içerir.
şirketin gelen talepleri uygun mikro hizmetlere yönlendirmesi gerekir.
Hangi çözüm bu gereksinimi EN uygun maliyetle karşılayacaktır?

A. Bir Ağ Yük Dengeleyici sağlamak için AWS Yük Dengeleyici Denetleyicisini kullanın.

B. Bir Application Load Balancer sağlamak için AWS Load Balancer Controller’ı kullanın.

C. İstekleri Amazon EKS'ye bağlamak için bir AWS Lambda işlevini kullanın.

D. İstekleri Amazon EKS'ye bağlamak için Amazon API Gateway'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir Application Load Balancer sağlamak için AWS Load Balancer Controller’ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 592
Bir şirket AWS kullanıyor ve telif hakkıyla korunan görsellere erişim satıyor. Şirketin küresel müşterisi
Base'in bu görüntülere hızlı bir şekilde erişebilmesi gerekiyor. Şirket kullanıcılara erişimi reddetmelidir
belirli ülkelerden. Şirket maliyetleri mümkün olduğu kadar en aza indirmek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Görüntüleri depolamak için Amazon S3'ü kullanın. Çok faktörlü kimlik doğrulamayı (MFA) ve herkese açık olarak açın
kova erişimi. Müşterilere S3 paketine bir bağlantı sağlayın.

B. Görüntüleri depolamak için Amazon S3'ü kullanın. Her müşteri için bir IAM kullanıcısı oluşturun. Kullanıcıları bir
S3 klasörüne erişim izni olan grup.

C. Uygulama Yük Dengeleyicilerinin (ALB'ler) arkasında bulunan Amazon EC2 bulut sunucularını kullanarak
görüntüler. Bulut sunucularını yalnızca şirketin hizmet verdiği ülkelerde dağıtın. Müşterilere şunları sağlayın
kendi ülkelerindeki örnekler için ALB'lere bağlantılar.

D. Görüntüleri depolamak için Amazon S3'ü kullanın. Görüntüleri dağıtmak için Amazon CloudFront'u kullanın
coğrafi kısıtlamalar. Her müşterinin CloudFront'taki verilere erişmesi için imzalı bir URL sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Görüntüleri depolamak için Amazon S3'ü kullanın. Görüntüleri coğrafi kısıtlamalarla dağıtmak için Amazon CloudFront'u kullanın. Her müşterinin CloudFront'taki verilere erişmesi için imzalı bir URL sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 593
Bir çözüm mimarı, Redis tabanlı, yüksek düzeyde kullanılabilir bir Amazon ElastiCache tasarlıyor
çözüm. Çözüm mimarının, hataların performansla sonuçlanmamasını sağlaması gerekir
Yerel olarak ve bir AWS Bölgesi içinde verilerin bozulması veya kaybı. Çözümün yüksek sağlaması gerekiyor
düğüm düzeyinde ve Bölge düzeyinde kullanılabilirlik.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Multi-AZ Redis çoğaltma gruplarını birden çok düğüm içeren parçalarla kullanın.

B. Redis yalnızca ekleme dosyaları (AOF) açıkken birden çok düğüm içeren Redis parçalarını kullanın.

C. Çoğaltma grubunda birden fazla okuma replikası bulunan bir Multi-AZ Redis kümesi kullanın.

D. Otomatik Ölçeklendirme açıkken birden çok düğüm içeren Redis parçalarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Birden fazla düğüm içeren parçalarla Multi-AZ Redis çoğaltma gruplarını kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 594
Bir şirket AWS'ye geçmeyi ve Amazon EC2 İsteğe Bağlı Bulut Sunucularını kullanmayı planlıyor
uygulama. Geçiş testi aşamasında teknik bir ekip, uygulamanın
Tam üretkenliğe ulaşmak için belleğin başlatılması ve yüklenmesi uzun zaman alır.
Hangi çözüm bir sonraki test aşamasında uygulamanın başlama süresini kısaltacaktır?

A. İki veya daha fazla EC2 İsteğe Bağlı Bulut Sunucusunu başlatın. Otomatik ölçeklendirme özelliklerini açın ve
EC2 İsteğe Bağlı Bulut Sunucuları bir sonraki test aşamasında kullanıma sunulacaktır.

B. Uygulamayı desteklemek ve uygulamayı bu şekilde ölçeklendirmek için EC2 Spot Bulut Sunucularını başlatın.
bir sonraki test aşamasında kullanılabilir.

C. Hazırda bekletme modu açıkken EC2 İsteğe Bağlı Bulut Sunucularını başlatın. EC2 Otomatik Ölçeklendirmeyi Yapılandırma
Bir sonraki test aşamasında sıcak havuzlar.

D. Kapasite Rezervasyonlarıyla EC2 İsteğe Bağlı Bulut Sunucularını Başlatın. Ek EC2 bulut sunucularını başlatın
bir sonraki test aşamasında.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 İsteğe Bağlı Bulut Sunucularını hazırda bekletme modu açıkken başlatın. Bir sonraki test aşamasında EC2 Otomatik Ölçeklendirme ılık havuzlarını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 595
Bir şirketin uygulamaları Otomatik Ölçeklendirme gruplarındaki Amazon EC2 bulut sunucularında çalışır. şirket
uygulamalarında haftanın rastgele günlerinde ani trafik artışları yaşandığını fark ediyor.
Şirket, ani trafik artışları sırasında uygulama performansını korumak istiyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Otomatik Ölçeklendirme grubunun boyutunu değiştirmek için manuel ölçeklendirmeyi kullanın.

B. Otomatik Ölçeklendirme grubunun boyutunu değiştirmek için tahmine dayalı ölçeklendirmeyi kullanın.

C. Otomatik Ölçeklendirme grubunun boyutunu değiştirmek için dinamik ölçeklendirmeyi kullanın.

D. Otomatik Ölçeklendirme grubunun boyutunu değiştirmek için zamanlama ölçeklendirmeyi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunun boyutunu değiştirmek için dinamik ölçeklendirmeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 596
Bir e-ticaret uygulaması, Amazon EC2 örneğinde çalışan bir PostgreSQL veritabanını kullanır.
Aylık bir satış etkinliği sırasında veritabanı kullanımı artar ve veritabanı bağlantısına neden olur
uygulama için sorunlar. Sonraki aylık satış etkinlikleri için trafik tahmin edilemez,
bu da satış tahminlerini etkiliyor. Şirketin performansını sürdürmesi gerekiyor
Trafikte öngörülemeyen artış.
Hangi çözüm bu sorunu EN uygun maliyetli şekilde çözer?

A. PostgreSQL veritabanını Amazon Aurora Serverless v2'ye taşıyın.

B. EC2 örneğindeki PostgreSQL veritabanı için otomatik ölçeklendirmeyi etkinleştirin
kullanımın artması.

C. PostgreSQL veritabanını daha büyük bir bulut sunucusu türüyle Amazon RDS for PostgreSQL'e taşıyın.

D. Artan kullanıma uyum sağlamak için PostgreSQL veritabanını Amazon Redshift'e taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** PostgreSQL veritabanını Amazon Aurora Serverless v2'ye taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 597
Bir şirket, Amazon API Gateway'i kullanarak AWS'de dahili sunucusuz bir uygulama barındırıyor ve
AWS Lambda. Şirketin çalışanları, kullanmaya başladıklarında yüksek gecikmeli sorunlar bildiriyor
Uygulama her gün. Şirket gecikmeyi azaltmak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. API Ağ Geçidi azaltma sınırını artırın.

B. Çalışanlardan önce Lambda tarafından sağlanan eşzamanlılığı artırmak için planlanmış bir ölçeklendirme ayarlayın
Uygulamayı her gün kullanmaya başlayın.

C. Şu adresteki alarm için hedef olarak Lambda işlevini başlatmak üzere bir Amazon CloudWatch alarmı oluşturun:
her günün başlangıcı.

D. Lambda işlevi belleğini artırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Çalışanlar uygulamayı her gün kullanmaya başlamadan önce Lambda tarafından sağlanan eşzamanlılığı artırmak için planlanmış bir ölçeklendirme ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 598
Bir araştırma şirketi, analiz için veri oluşturmak amacıyla şirket içi cihazları kullanıyor. şirket
verileri analiz etmek için AWS Cloud'u kullanmak istiyor. Cihazlar .csv dosyaları oluşturur ve destekler
verileri bir SMB dosya paylaşımına yazma. Şirket analistleri SQL komutlarını kullanabilmelidir.
verileri sorgulayın. Analistler gün boyunca periyodik olarak sorgular yürütecek.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (Seç
üç.)

A. Amazon S3 Dosya Ağ Geçidi modunda şirket içinde bir AWS Storage Gateway dağıtın.

B. Amazon FSx File Gateway'de şirket içinde bir AWS Storage Gateway dağıtın.

C. Amazon S3'teki verilere dayalı bir tablo oluşturmak için bir AWS Glue tarayıcısı kurun.

D. Verileri sorgulamak için EMR Dosya Sistemi (EMRFS) ile bir Amazon EMR kümesi kurun.
Amazon S3. Analistlere erişim sağlayın.

E. Amazon S3'teki verileri sorgulamak için bir Amazon Redshift kümesi kurun. Erişim sağlayın
analistler.

F. Amazon S3'teki verileri sorgulamak için Amazon Athena'yı kurun. Analistlere erişim sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C,`
> - **Önerilen Çözüm:** Amazon S3 Dosya Ağ Geçidi modunda şirket içinde bir AWS Storage Gateway dağıtın. Amazon S3'teki verilere dayalı bir tablo oluşturmak için bir AWS Glue tarayıcısı kurun. Amazon S3'teki verileri sorgulamak için Amazon Athena'yı kurun. Analistlere erişim sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 599
Bir şirket Amazon Elastic Container Service (Amazon ECS) kümelerini ve Amazon'u kullanmak istiyor
Bir ödeme işleme uygulaması oluşturmak ve çalıştırmak için RDS Veritabanı bulut sunucuları. Şirket, işi yürütecek
uyumluluk amacıyla şirket içi veri merkezinde uygulama.
Bir çözüm mimarı, çözümün bir parçası olarak AWS Outposts'u kullanmak istiyor. Çözüm mimarı
uygulamayı oluşturmak için şirketin operasyonel ekibiyle birlikte çalışıyor.
Şirketin operasyonel ekibi hangi faaliyetlerden sorumludur? (Üç tanesini seçin.)

A. Outposts raflarına esnek güç ve ağ bağlantısı sağlama

B. Sanallaştırma hipervizörünü, depolama sistemlerini ve üzerinde çalışan AWS hizmetlerini yönetmek
Karakollar

C. Veri merkezi ortamının fiziksel güvenliği ve erişim kontrolleri

D. Güç kaynakları, sunucular ve ağ iletişimi de dahil olmak üzere Outposts altyapısının kullanılabilirliği
Karakol raflarındaki ekipmanlar

E. Karakol bileşenlerinin fiziksel bakımı

F. Sunucu arızalarını ve bakımı azaltmak amacıyla Amazon ECS kümelerine ekstra kapasite sağlamak
olaylar

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C,`
> - **Önerilen Çözüm:** Outposts raflarına esnek güç ve ağ bağlantısı sağlanması Veri merkezi ortamının fiziksel güvenliği ve erişim kontrolleri Sunucu arızalarını ve bakım olaylarını azaltmak için Amazon ECS kümelerine ekstra kapasite sağlanması
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
