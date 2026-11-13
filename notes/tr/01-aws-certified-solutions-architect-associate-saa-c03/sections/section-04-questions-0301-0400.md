# AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları - Bölüm 04

> **Soru Aralığı:** 301 - 400 / Toplam: 684

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #301

Bir üniversite araştırma laboratuvarının, şirket içi Windows dosya sunucusundan Amazon FSx for Windows Dosya Sunucusu'na 30 TB veri taşıması gerekiyor. Laboratuvar, üniversitedeki birçok bölümün paylaştığı 1 Gbps ağ bağlantısına sahiptir. Laboratuvar, veri aktarım performansını en üst düzeye çıkaracak bir veri taşıma hizmetini uygulamak istiyor. Ancak laboratuvarın, diğer departmanlar üzerindeki etkiyi en aza indirmek için hizmetin kullandığı bant genişliği miktarını kontrol edebilmesi gerekir. Veri taşıma işlemi önümüzdeki 5 gün içinde gerçekleşmelidir. Bu gereksinimleri hangi AWS çözümü karşılayacak?

A. AWS Snowcone

B. Amazon FSx Dosya Ağ Geçidi

C. AWS DataSync

D. AWS Transfer Ailesi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Veri Eşitleme
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #302

Bir şirket, kullanıcıların mobil cihazlarında ağır çekim video klipleri yayınlamasına olanak tanıyan bir mobil uygulama oluşturmak istiyor. Şu anda uygulama video klipler çekiyor ve video klipleri ham formatta bir Amazon S3 klasörüne yüklüyor. Uygulama bu video klipleri doğrudan S3 klasöründen alır. Ancak videolar ham formatta büyüktür. Kullanıcılar mobil cihazlarda ara belleğe alma ve oynatmayla ilgili sorunlar yaşıyor. Şirket, operasyonel yükü en aza indirirken uygulamanın performansını ve ölçeklenebilirliğini en üst düzeye çıkaracak çözümler uygulamak istiyor. Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (İki tane seçin.)

A. İçerik teslimi ve önbelleğe alma için Amazon CloudFront'u dağıtın.

B. Video dosyalarını diğer S3 klasörlerindeki AW Bölgeleri genelinde çoğaltmak için AWS DataSync'i kullanın.

C. Video dosyalarını daha uygun formatlara dönüştürmek için Amazon Elastic Transcoder'ı kullanın.

D. İçerik teslimi ve önbelleğe alma için Yerel Bölgelerde Amazon EC2 bulut sunucularından oluşan bir Otomatik Mühürleme grubu dağıtın.

E. Video dosyalarını daha uygun formatlara dönüştürmek için Amazon EC2 bulut sunucularından oluşan Otomatik Ölçeklendirme grubunu dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İçerik teslimi ve önbelleğe alma için Amazon CloudFront'u dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #303

Bir şirket, Amazon Elastic Container Service (Amazon ECS) kümesinde dağıtılan yeni bir uygulamayı başlatıyor ve ECS görevleri için Fargate başlatma türünü kullanıyor. Şirket, uygulamanın başlatılması üzerine yoğun trafik beklendiğinden CPU ve bellek kullanımını izliyor. Ancak şirket, kullanım azaldığında maliyetleri düşürmek istiyor. Bir çözüm mimarı ne tavsiye etmelidir?

C. Önceki trafik modellerine göre belirli aralıklarla ölçeklendirmek için Amazon EC2 Auto Scaling'i kullanın.

B. Amazon CloudWatch alarmını tetikleyen ölçüm ihlallerine göre Amazon ECS'yi ölçeklendirmek için bir AWS Lambda işlevini kullanın.

C. ECS ölçüm ihlalleri bir Amazon CloudWatch alarmını tetiklediğinde ölçeklendirmek için basit ölçeklendirme politikalarıyla Amazon EC2 Auto Scaling'i kullanın.

D. ECS ölçüm ihlalleri bir Amazon CloudWatch alarmını tetiklediğinde ölçeklendirmek için hedef izleme politikalarıyla birlikte AWS Application Auto Scaling'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** ECS ölçüm ihlalleri bir Amazon CloudWatch alarmını tetiklediğinde ölçeklendirmek için hedef izleme politikalarıyla birlikte AWS Application Auto Scaling'i kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #304

Bir şirket yakın zamanda farklı bir AWS Bölgesinde bir olağanüstü durum kurtarma sitesi oluşturdu. Şirketin, iki Bölgedeki NFS dosya sistemleri arasında periyodik olarak büyük miktarda veriyi ileri geri aktarması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS DataSync'i kullanın.

B. AWS Snowball cihazlarını kullanın.

C. Amazon EC2'de bir SFTP sunucusu kurun.

D. AWS Database Migration Service'i (AWS DMS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS DataSync'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #305

Bir şirket, AWS Cloud'da barındırılan bir oyun uygulaması için paylaşılan depolama çözümü tasarlıyor. Şirketin verilere erişmek için KOBİ istemcilerini kullanma becerisine ihtiyacı var. Çözümün tam olarak yönetilmesi gerekir. Hangi AWS çözümü bu gereksinimleri karşılıyor?

A. Verileri takılabilir bir dosya sistemi olarak paylaşan bir AWS DataSync görevi oluşturun. Dosya sistemini uygulama sunucusuna bağlayın.

B. Bir Amazon EC2 Windows örneği oluşturun. Örneğe bir Windows dosya paylaşım rolü yükleyin ve yapılandırın. Uygulama sunucusunu dosya paylaşımına bağlayın.

C. Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.

D. Bir Amazon S3 klasörü oluşturun. S3 paketine erişim izni vermek için uygulamaya bir IAM rolü atayın. S3 grubunu uygulama sunucusuna bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #306

Bir şirket, Amazon EC2 bulut sunucularında çalışan gecikmeye duyarlı bir uygulama için bellek içi veritabanı çalıştırmak istiyor. Uygulama dakikada 100.000'den fazla işlem gerçekleştiriyor ve yüksek ağ verimi gerektiriyor. Bir çözüm mimarının, veri aktarım ücretlerini en aza indiren, uygun maliyetli bir ağ tasarımı sağlaması gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Aynı AWS Bölgesi içindeki aynı Erişilebilirlik Alanındaki tüm EC2 bulut sunucularını başlatın. EC2 bulut sunucularını başlatırken küme stratejisine sahip bir yerleşim grubu belirtin.

B. Tüm EC2 bulut sunucularını aynı AWS Bölgesi içindeki farklı Erişilebilirlik Alanlarında başlatın. EC2 bulut sunucularını başlatırken bölümleme stratejisine sahip bir yerleşim grubu belirtin.

C. Bir ağ kullanım hedefine göre farklı Erişilebilirlik Alanlarında EC2 bulut sunucularını başlatmak için bir Otomatik Ölçeklendirme grubu dağıtın.

D. Farklı Erişilebilirlik Alanlarında EC2 bulut sunucularını başlatmak için adımlı ölçeklendirme ilkesine sahip bir Otomatik Ölçeklendirme grubu dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Tüm EC2 bulut sunucularını aynı AWS Bölgesi içindeki aynı Erişilebilirlik Alanında başlatın. EC2 bulut sunucularını başlatırken küme stratejisine sahip bir yerleşim grubu belirtin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Soru #307

Uygulama sunucularını öncelikli olarak şirket içinde çalıştıran bir şirket, AWS'ye geçmeye karar verdi. Şirket, şirket içi İnternet Küçük Bilgisayar Sistemleri Arayüzü (iSCSI) depolama alanını ölçeklendirme ihtiyacını en aza indirmek istiyor. Şirket, yalnızca yakın zamanda erişilen verilerinin yerel olarak saklanmasını istiyor. Şirket bu gereksinimleri karşılamak için hangi AWS çözümünü kullanmalıdır?

A. Amazon S3 Dosya Ağ Geçidi

B. AWS Depolama Ağ Geçidi Bant Ağ Geçidi

C. AWS Storage Gateway Volume Gateway'de depolanan birimler

D. AWS Storage Gateway Birim Ağ Geçidi önbelleğe alınan birimler

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Storage Gateway Birim Ağ Geçidi önbelleğe alınmış birimler
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #308

Bir şirketin birleştirilmiş faturalandırmayı kullanan birden fazla AWS hesabı vardır. Şirket, 90 gün boyunca Oracle On-Demand DB bulut sunucuları için birçok aktif yüksek performanslı Amazon RDS çalıştırıyor. Şirketin finans ekibi, birleştirilmiş faturalandırma hesabında ve diğer tüm AWS hesaplarında AWS Trusted Advisor'a erişebilir. Finans ekibinin, RDS için Trusted Advisor kontrol önerilerine erişmek için uygun AWS hesabını kullanması gerekir. Finans ekibinin, RDS maliyetlerini azaltmak için uygun Güvenilir Danışman kontrolünü incelemesi gerekir. Finans ekibi bu gereklilikleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. RDS örneklerinin çalıştığı hesaptaki Trusted Advisor önerilerini kullanın.

B. Tüm RDS örnek kontrollerini aynı anda görmek için birleştirilmiş faturalandırma hesabındaki Güvenilir Danışman önerilerini kullanın.

C. Amazon RDS Rezerve Edilmiş Bulut Sunucusu Optimizasyonu için Trusted Advisor kontrolünü inceleyin.

D. Amazon RDS Idle Veritabanı Bulut Sunucuları için Trusted Advisor denetimini inceleyin.

E. Amazon Redshift Ayrılmış Düğüm Optimizasyonu için Trusted Advisor denetimini inceleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Tüm RDS örnek kontrollerini aynı anda görmek için birleştirilmiş faturalandırma hesabındaki Güvenilir Danışman önerilerini kullanın. Amazon RDS Idle Veritabanı Bulut Sunucuları için Trusted Advisor denetimini inceleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #309

Bir çözüm mimarının depolama maliyetlerini optimize etmesi gerekir. Çözüm mimarı, artık erişilmeyen veya nadiren erişilen Amazon S3 klasörlerini tanımlamalıdır. Hangi çözüm bu hedefi EN AZ operasyonel giderle gerçekleştirecek?

A. Gelişmiş etkinlik ölçümleri için S3 Depolama Lensi kontrol panelini kullanarak paket erişim modellerini analiz edin.

B. AWS Management Console'daki S3 kontrol panelini kullanarak paket erişim modellerini analiz edin.

C. Paketler için Amazon CloudWatch BucketSizeBytes ölçümünü açın. Amazon Athena ile ölçüm verilerini kullanarak paket erişim modellerini analiz edin.

D. S3 nesne izleme için AWS CloudTrail'i açın. Amazon CloudWatch Logs ile entegre CloudTrail günlüklerini kullanarak paket erişim modellerini analiz edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Gelişmiş etkinlik ölçümleri için S3 Depolama Lensi kontrol panelini kullanarak paket erişim modellerini analiz edin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #310

Bir şirket, yapay zeka ve makine öğrenimi (AI/ML) alanında araştırma yapan müşterilere veri kümeleri satıyor. Veri kümeleri, us-east-1 Bölgesindeki bir Amazon S3 klasöründe depolanan büyük, biçimlendirilmiş dosyalardır. Şirket, müşterilerin belirli bir veri kümesine erişim satın almak için kullandıkları bir web uygulamasına ev sahipliği yapıyor. Web uygulaması, Application Load Balancer'ın arkasında birden fazla Amazon EC2 bulut sunucusuna dağıtılır. Bir satın alma işlemi gerçekleştirildikten sonra müşterilere, dosyalara erişime izin veren S3 imzalı bir URL gönderilir. Müşteriler Kuzey Amerika ve Avrupa'ya dağılmıştır. Şirket, veri aktarımlarıyla ilgili maliyetleri azaltmak ve performansı korumak veya geliştirmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Mevcut S3 klasöründe S3 Transfer Acceleration'ı yapılandırın. Müşteri isteklerini S3 Transfer Acceleration uç noktasına yönlendirin. Erişim kontrolü için S3 imzalı URL'leri kullanmaya devam edin.

B. Kaynak olarak mevcut S3 klasörüyle bir Amazon CloudFront dağıtımı dağıtın. Müşteri isteklerini CloudFront URL'sine yönlendirin. Erişim kontrolü için CloudFront imzalı URL'lere geçin.

C. AB-central-1 Bölgesi'nde, paketler arasında S3 Bölgeler Arası Çoğaltma ile ikinci bir S3 paketi oluşturun. Müşteri taleplerini en yakın Bölgeye yönlendirin. Erişim kontrolü için S3 imzalı URL'leri kullanmaya devam edin.

D. Veri kümelerinin son kullanıcılara akışını sağlamak için web uygulamasını değiştirin. Web uygulamasını mevcut S3 klasöründeki verileri okuyacak şekilde yapılandırın. Erişim kontrolünü doğrudan uygulamada uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kaynak olarak mevcut S3 klasörüyle bir Amazon CloudFront dağıtımı dağıtın. Müşteri isteklerini CloudFront URL'sine yönlendirin. Erişim kontrolü için CloudFront imzalı URL'lere geçin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).

---

---

Soru #311

Bir şirket, sigorta tekliflerini işleyecek bir web uygulaması tasarlamak için AWS'yi kullanıyor. Kullanıcılar uygulamadan fiyat teklifi isteyecektir. Teklifler teklif türüne göre ayrılmalı, 24 saat içinde yanıtlanmalı ve kaybolmamalıdır. Çözüm, operasyonel verimliliği en üst düzeye çıkarmalı ve bakımı en aza indirmelidir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Teklif türüne göre birden fazla Amazon Kinesis veri akışı oluşturun. Web uygulamasını, mesajları uygun veri akışına gönderecek şekilde yapılandırın. Her arka uç uygulama sunucusu grubunu, kendi veri akışındaki mesajları bir havuzda toplamak için Kinesis İstemci Kitaplığı'nı (KCL) kullanacak şekilde yapılandırın.

B. Her fiyat teklifi türü için bir AWS Lambda işlevi ve bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Lambda işlevini ilgili SNS konusuna abone olun. Uygulamayı, teklif isteklerini uygun SNS konusuna yayınlayacak şekilde yapılandırın.

C. Tek bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Amazon Simple Queue Service (Amazon SQS) kuyruklarına SNS konusuna abone olun. Teklif türüne göre mesajları uygun SQS kuyruğunda yayınlamak için SNS mesajı filtrelemeyi yapılandırın. Her arka uç uygulama sunucusunu kendi SQS kuyruğunu kullanacak şekilde yapılandırın.

D. Veri akışlarını bir Amazon OpenSearch Service kümesine iletmek için teklif türüne göre birden fazla Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Uygulamayı, mesajları uygun dağıtım akışına gönderecek şekilde yapılandırın. Uygulama sunucularının her bir arka uç grubunu, OpenSearch Hizmetinden gelen mesajları arayacak ve bunları uygun şekilde işleyecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tek bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Amazon Simple Queue Service (Amazon SQS) kuyruklarına SNS konusuna abone olun. Teklif türüne göre mesajları uygun SQS kuyruğunda yayınlamak için SNS mesajı filtrelemeyi yapılandırın. Her arka uç uygulama sunucusunu kendi SQS kuyruğunu kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #312

Bir şirketin çeşitli Amazon EC2 bulut sunucularında çalışan bir uygulaması var. Her EC2 bulut sunucusuna bağlı birden fazla Amazon Elastic Block Store (Amazon EBS) veri birimi bulunur. Uygulamanın EC2 bulut sunucusu yapılandırmasının ve verilerinin her gece yedeklenmesi gerekir. Uygulamanın ayrıca farklı bir AWS Bölgesinde kurtarılabilir olması gerekir. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Uygulamanın EBS birimlerinin gecelik anlık görüntülerini planlayan ve anlık görüntüleri farklı bir Bölgeye kopyalayan bir AWS Lambda işlevi yazın.

B. Gecelik yedeklemeler gerçekleştirmek için AWS Backup'ı kullanarak bir yedekleme planı oluşturun. Yedeklemeleri başka bir Bölgeye kopyalayın. Uygulamanın EC2 bulut sunucularını kaynak olarak ekleyin.

C. Gecelik yedeklemeler gerçekleştirmek için AWS Backup'ı kullanarak bir yedekleme planı oluşturun. Yedeklemeleri başka bir Bölgeye kopyalayın. Uygulamanın EBS birimlerini kaynak olarak ekleyin.

D. Uygulamanın EBS birimlerinin gecelik anlık görüntülerini planlayan ve anlık görüntüleri farklı bir Erişilebilirlik Alanına kopyalayan bir AWS Lambda işlevi yazın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Gecelik yedeklemeler gerçekleştirmek için AWS Backup'ı kullanarak bir yedekleme planı oluşturun. Yedeklemeleri başka bir Bölgeye kopyalayın. Uygulamanın EC2 bulut sunucularını kaynak olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #313

Bir şirket AWS'de bir mobil uygulama geliştiriyor. Şirket, erişimini milyonlarca kullanıcıya genişletmek istiyor. Yetkili kullanıcıların şirket içeriklerini mobil cihazlarında izleyebilmeleri için şirketin bir platform oluşturması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. İçeriği genel bir Amazon S3 klasöründe yayınlayın. İçerik akışı sağlamak için AWS Key Management Service (AWS KMS) anahtarlarını kullanın.

B. İçerik akışı sağlamak için mobil uygulama ile AWS ortamı arasında IPsec VPN kurun.

C. Amazon CloudFront'u kullanın. İçerik akışı için imzalı URL'ler sağlayın.

D. İçerik akışı sağlamak için mobil uygulama ile AWS ortamı arasında AWS Client VPN'i kurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon CloudFront'u kullanın. İçerik akışı için imzalı URL'ler sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru #314

Bir şirketin, küresel satış ekibi tarafından kullanılan, seyrek erişim modellerine sahip, şirket içi bir MySQL veritabanı vardır. Satış ekibi veritabanının minimum kesinti süresine sahip olmasını gerektirir. Bir veritabanı yöneticisi, gelecekte daha fazla kullanıcının olacağını öngörerek belirli bir bulut sunucusu tipini seçmeden bu veritabanını AWS'ye taşımak istiyor. Bir çözüm mimarı hangi hizmeti önermelidir?

A. Amazon Aurora MySQL

B. MySQL için Amazon Aurora Sunucusuz

C. Amazon Kırmızıya Kayma Spektrumu

D. MySQL için Amazon RDS

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** MySQL için Amazon Aurora Sunucusuz
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #315

Bir şirket, şirket içi veri merkezindeki çeşitli uygulamaları etkileyen bir ihlalle karşılaştı. Saldırgan, sunucularda çalışan özel uygulamalardaki güvenlik açıklarından yararlandı. Şirket artık uygulamalarını Amazon EC2 bulut sunucularında çalışacak şekilde taşıyor. Şirket, EC2 bulut sunucularındaki güvenlik açıklarını aktif olarak tarayan ve bulguların ayrıntılarını içeren bir rapor gönderen bir çözüm uygulamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucularını güvenlik açıklarına karşı taramak için AWS Shield'ı dağıtın. Bulguları AWS CloudTrail'e kaydetmek için bir AWS Lambda işlevi oluşturun.

B. EC2 bulut sunucularını güvenlik açıklarına karşı taramak için Amazon Macie ve AWS Lambda işlevlerini dağıtın. Tüm bulguları AWS CloudTrail'e kaydedin.

C. Amazon GuardDuty'yi açın. GuardDuty aracılarını EC2 bulut sunucularına dağıtın. Bulguların ayrıntılarını veren raporların oluşturulmasını ve dağıtımını otomatikleştirmek için bir AWS Lambda işlevi yapılandırın.

D. Amazon Inspector'ı açın. Amazon Inspector aracısını EC2 bulut sunucularına dağıtın. Bulguların ayrıntılarını veren raporların oluşturulmasını ve dağıtımını otomatikleştirmek için bir AWS Lambda işlevi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon Inspector'ı açın. Amazon Inspector aracısını EC2 bulut sunucularına dağıtın. Bulguların ayrıntılarını veren raporların oluşturulmasını ve dağıtımını otomatikleştirmek için bir AWS Lambda işlevi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #316

Bir şirket, Amazon Simple Queue Service (Amazon SQS) kuyruğundaki mesajları yoklamak ve işlemek amacıyla bir komut dosyası çalıştırmak için bir Amazon EC2 bulut sunucusunu kullanıyor. Şirket, kuyruğa eklenen giderek artan sayıda mesajı işleme yeteneğini korurken operasyonel maliyetleri azaltmak istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. İletileri daha hızlı işlemek için EC2 bulut sunucusunun boyutunu artırın.

B. Bulut sunucusu yeterince kullanılmadığında EC2 bulut sunucusunu kapatmak için Amazon EventBridge'i kullanın.

C. EC2 bulut sunucusundaki betiği, uygun çalışma zamanına sahip bir AWS Lambda işlevine taşıyın.

D. Komut dosyasını isteğe bağlı olarak çalıştırmak için AWS Systems Manager Run Komutunu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucusundaki betiği, uygun çalışma zamanına sahip bir AWS Lambda işlevine taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #317

Bir şirket, CSV formatında veri üretmek için eski bir uygulama kullanıyor. Eski uygulama, çıktı verilerini Amazon S3'te depolar. Şirket, yalnızca Amazon Redshift ve Amazon S3'te depolanan verileri analiz etmek için karmaşık SQL sorguları gerçekleştirebilen yeni bir ticari kullanıma hazır (COTS) uygulama dağıtıyor. Ancak COTS uygulaması, eski uygulamanın ürettiği .csv dosyalarını işleyemiyor. Şirket, eski uygulamayı başka bir formatta veri üretecek şekilde güncelleyemez. COTS uygulamasının eski uygulamanın ürettiği verileri kullanabilmesi için şirketin bir çözüm uygulaması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Belirli bir programa göre çalışan bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. .csv dosyalarını işlemek ve işlenen verileri Amazon Redshift'te depolamak için ETL işini yapılandırın.

B. .csv dosyalarını .sql dosyalarına dönüştürmek için Amazon EC2 bulut sunucularında çalışan bir Python betiği geliştirin. Çıktı dosyalarını Amazon S3'te depolamak için Python betiğini bir cron planına göre çağırın.

C. Bir AWS Lambda işlevi ve bir Amazon DynamoDB tablosu oluşturun. Lambda işlevini çağırmak için bir S3 olayı kullanın. .csv dosyalarını işlemek ve işlenen verileri DynamoDB tablosunda depolamak amacıyla bir çıkarma, dönüştürme ve yükleme (ETL) işi gerçekleştirmek için Lambda işlevini yapılandırın.

D. Haftalık bir programa göre bir Amazon EMR kümesi başlatmak için Amazon EventBridge'i kullanın. EMR kümesini, .csv dosyalarını işlemek ve işlenen verileri bir Amazon Redshift tablosunda depolamak amacıyla bir ayıklama, dönüştürme ve yükleme (ETL) işi gerçekleştirecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Belirli bir programa göre çalışan bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. .csv dosyalarını işlemek ve işlenen verileri Amazon Redshift'te depolamak için ETL işini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #318

Bir şirket yakın zamanda tüm BT ortamını AWS Cloud'a taşıdı. Şirket, kullanıcıların büyük boyutlu Amazon EC2 bulut sunucularını sağladığını ve uygun değişiklik kontrol sürecini kullanmadan güvenlik grubu kurallarını değiştirdiğini keşfeder. Bir çözüm mimarı, bu envanter ve konfigürasyon değişikliklerini takip etmek ve denetlemek için bir strateji geliştirmelidir. Çözüm mimarının bu gereksinimleri karşılamak için hangi eylemleri gerçekleştirmesi gerekir? (İki tane seçin.)

A. AWS CloudTrail'i etkinleştirin ve denetim için kullanın.

B. Amazon EC2 bulut sunucuları için veri yaşam döngüsü politikalarını kullanın.

C. AWS Trusted Advisor'ı etkinleştirin ve güvenlik kontrol paneline başvurun.

D. AWS Config'i etkinleştirin ve denetim ve uyumluluk amaçlarına yönelik kurallar oluşturun.

E. Bir AWS CloudFormation şablonuyla önceki kaynak yapılandırmalarını geri yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** AWS CloudTrail'i etkinleştirin ve denetim için kullanın. AWS Config'i etkinleştirin ve denetim ve uyumluluk amaçlarına yönelik kurallar oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #319

Bir şirketin AWS Cloud'da yüzlerce Amazon EC2 Linux tabanlı bulut sunucusu var. Sistem yöneticileri örnekleri yönetmek için paylaşılan SSH anahtarlarını kullandı. Yakın zamanda yapılan bir denetimin ardından şirketin güvenlik ekibi, tüm paylaşılan anahtarların kaldırılmasını zorunlu kılıyor. Bir çözüm mimarı, EC2 bulut sunucularına güvenli erişim sağlayan bir çözüm tasarlamalıdır. Hangi çözüm bu gereksinimi EN AZ miktarda idari giderle karşılayacaktır?

A. EC2 bulut sunucularına bağlanmak için AWS Systems Manager Session Manager'ı kullanın.

B. Talep üzerine tek seferlik SSH anahtarları oluşturmak için AWS Security Token Service'i (AWS STS) kullanın.

C. Bir dizi savunma bulut sunucusuna paylaşılan SSH erişimine izin verin. Diğer tüm örnekleri yalnızca savunma örneklerinden SSH erişimine izin verecek şekilde yapılandırın.

D. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito özel yetkilendirici kullanın. Geçici bir SSH anahtarı oluşturmak için bir AWS Lambda işlevini çağırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 bulut sunucularına bağlanmak için AWS Systems Manager Session Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #320

Bir şirket, şirket içi veri kaynaklarından veri almak için Amazon EC2 bulut sunucularından oluşan bir filo kullanıyor. Veriler JSON biçimindedir ve alım hızları 1 MB/s'ye kadar çıkabilir. Bir EC2 bulut sunucusu yeniden başlatıldığında, hareket halindeki veriler kaybolur. Şirketin veri bilimi ekibi, alınan verileri neredeyse gerçek zamanlı olarak sorgulamak istiyor. Hangi çözüm, minimum veri kaybıyla ölçeklenebilir, gerçek zamanlıya yakın veri sorgulama sağlar?

A. Verileri Amazon Kinesis Data Streams'te yayınlayın, verileri sorgulamak için Kinesis Data Analytics'i kullanın.

B. Hedef olarak Amazon Redshift ile verileri Amazon Kinesis Data Firehose'da yayınlayın. Verileri sorgulamak için Amazon Redshift'i kullanın.

C. Alınan verileri bir EC2 bulut sunucusu deposunda saklayın. Hedef olarak Amazon S3 ile verileri Amazon Kinesis Data Firehose'a yayınlayın. Verileri sorgulamak için Amazon Athena'yı kullanın.

D. Alınan verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde depolayın. Verileri Redis için Amazon ElastiCache'e yayınlayın. Verileri sorgulamak için Redis kanalına abone olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Verileri Amazon Kinesis Data Streams'te yayınlayın, verileri sorgulamak için Kinesis Data Analytics'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #321

Bir çözüm mimarı, Amazon S3 klasörüne yüklenen tüm nesnelerin şifrelendiğinden emin olmak için ne yapmalıdır?

A. PutObject'in s3:x-amz-acl başlık seti yoksa reddetmek için paket politikasını güncelleyin.

B. PutObject'in özel olarak ayarlanmış bir s3:x-amz-acl başlığı yoksa reddetmek için paket politikasını güncelleyin.

C. PutObject'in aws:SecureTransport üstbilgisi true olarak ayarlanmamışsa reddetmek için paket politikasını güncelleyin.

D. PutObject'in bir x-amz-sunucu tarafı şifreleme başlık setine sahip olup olmadığını reddetmek için paket politikasını güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** PutObject'in bir x-amz-sunucu tarafı şifreleme başlık kümesine sahip olup olmadığını reddetmek için paket politikasını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #322

Bir çözüm mimarı, bir şirket için çok katmanlı bir uygulama tasarlıyor. Uygulamanın kullanıcıları görüntüleri bir mobil cihazdan yükler. Uygulama, her görselin küçük resmini oluşturur ve görselin başarıyla yüklendiğini onaylamak için kullanıcıya bir mesaj gönderir. Küçük resmin oluşturulması 60 saniyeye kadar sürebilir ancak şirket, kullanıcılarına orijinal görüntünün alındığını bildirmek için daha hızlı yanıt süresi sağlamak istiyor. Çözüm mimarı, uygulamayı, istekleri farklı uygulama katmanlarına eşzamansız olarak gönderecek şekilde tasarlamalıdır. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Küçük resmi oluşturmak ve kullanıcıyı uyarmak için özel bir AWS Lambda işlevi yazın. Lambda işlevini çağırmak için görüntü yükleme işlemini bir olay kaynağı olarak kullanın.

B. Bir AWS Step Functions iş akışı oluşturun. Uygulama katmanları arasındaki orkestrasyonu yönetmek ve küçük resim oluşturma tamamlandığında kullanıcıyı uyarmak için Adım İşlevlerini yapılandırın.

C. Bir Amazon Simple Queue Service (Amazon SQS) mesaj kuyruğu oluşturun. Görüntüler yüklenirken küçük resim oluşturmak için SQS kuyruğuna bir mesaj yerleştirin. Kullanıcıyı, görüntünün alındığına dair bir uygulama mesajı aracılığıyla uyarır.

D. Amazon Simple Notification Service (Amazon SNS) bildirim konularını ve aboneliklerini oluşturun. Resim yükleme tamamlandıktan sonra küçük resmi oluşturmak için uygulamayla birlikte bir abonelik kullanın. Küçük resim oluşturma işlemi tamamlandıktan sonra kullanıcının mobil uygulamasına anlık bildirim yoluyla mesaj göndermek için ikinci bir abonelik kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Simple Queue Service (Amazon SQS) mesaj kuyruğu oluşturun. Görüntüler yüklenirken küçük resim oluşturmak için SQS kuyruğuna bir mesaj yerleştirin. Kullanıcıyı, görüntünün alındığına dair bir uygulama mesajı aracılığıyla uyarır.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #323

Bir şirketin tesisinin, binanın her girişinde yaka kartı okuyucuları vardır. Kimlik kartları tarandığında okuyucular, söz konusu girişe kimin erişmeye çalıştığını belirtmek için HTTPS üzerinden bir mesaj gönderir. Bir çözüm mimarı, sensörlerden gelen bu mesajları işleyecek bir sistem tasarlamalıdır. Çözümün yüksek oranda kullanılabilir olması ve sonuçların şirketin güvenlik ekibinin analiz edebilmesi için sunulması gerekir. Çözüm mimarı hangi sistem mimarisini önermelidir?

A. HTTPS uç noktası olarak hizmet vermek ve mesajları işlemek için bir Amazon EC2 bulut sunucusu başlatın. Sonuçları bir Amazon S3 klasörüne kaydetmek için EC2 örneğini yapılandırın.

B. Amazon API Gateway'de bir HTTPS uç noktası oluşturun. Mesajları işlemek ve sonuçları bir Amazon DynamoDB tablosuna kaydetmek için bir AWS Lambda işlevini çağıracak şekilde API Gateway uç noktasını yapılandırın.

C. Gelen sensör mesajlarını bir AWS Lambda işlevine yönlendirmek için Amazon Route 53'ü kullanın. Mesajları işlemek ve sonuçları bir Amazon DynamoDB tablosuna kaydetmek için Lambda işlevini yapılandırın.

D. Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Sensör verilerinin VPC uç noktası aracılığıyla doğrudan bir S3 klasörüne yazılabilmesi için tesis ağından VPC'ye bir Siteden Siteye VPN bağlantısı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon API Gateway'de bir HTTPS uç noktası oluşturun. Mesajları işlemek ve sonuçları bir Amazon DynamoDB tablosuna kaydetmek için bir AWS Lambda işlevini çağıracak şekilde API Gateway uç noktasını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #324

Bir şirket, birincil şirket içi dosya depolama birimi için bir olağanüstü durum kurtarma planı uygulamak istiyor. Dosya depolama birimi, yerel bir depolama sunucusundaki bir İnternet Küçük Bilgisayar Sistemleri Arayüzü (iSCSI) aygıtından bağlanır. Dosya depolama birimi yüzlerce terabayt (TB) veri tutar. Şirket, son kullanıcıların gecikme yaşamadan şirket içi sistemlerden tüm dosya türlerine anında erişmesini sağlamak istiyor. Şirketin mevcut altyapısında EN AZ miktarda değişiklikle bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 Dosya Ağ Geçidini şirket içinde barındırılan bir sanal makine (VM) olarak sağlayın. Yerel önbelleği 10 TB'a ayarlayın. Dosyalara NFS protokolü aracılığıyla erişmek için mevcut uygulamaları değiştirin. Bir felaketten kurtulmak için bir Amazon EC2 bulut sunucusu sağlayın ve dosyaları içeren S3 klasörünü bağlayın.

B. Bir AWS Storage Gateway teyp ağ geçidi sağlayın. Mevcut tüm verileri sanal bir teyp kitaplığına yedeklemek için bir veri yedekleme çözümü kullanın. Veri yedekleme çözümünü, ilk yedekleme tamamlandıktan sonra her gece çalışacak şekilde yapılandırın. Bir felaketten kurtulmak için bir Amazon EC2 bulut sunucusu sağlayın ve verileri sanal bant kitaplığındaki birimlerden bir Amazon Elastic Block Store (Amazon EBS) birimine geri yükleyin.

C. Bir AWS Storage Gateway Volume Gateway önbelleğe alınmış birimi sağlayın. Yerel önbelleği 10 TB'a ayarlayın. Birim Ağ Geçidi önbelleğe alınmış birimi iSCSI kullanarak mevcut dosya sunucusuna bağlayın ve tüm dosyaları depolama birimine kopyalayın. Depolama biriminin planlanmış anlık görüntülerini yapılandırın. Bir felaketten kurtulmak için anlık görüntüyü bir Amazon Elastic Block Store (Amazon EBS) birimine geri yükleyin ve EBS birimini bir Amazon EC2 bulut sunucusuna ekleyin.

D. Mevcut dosya depolama birimiyle aynı miktarda disk alanına sahip bir AWS Storage Gateway Volume Gateway depolanan birimi sağlayın. Birim Ağ Geçidi depolanan birimini iSCSI kullanarak mevcut dosya sunucusuna bağlayın ve tüm dosyaları depolama birimine kopyalayın. Depolama biriminin planlanmış anlık görüntülerini yapılandırın. Bir felaketten kurtulmak için anlık görüntüyü bir Amazon Elastic Block Store (Amazon EBS) birimine geri yükleyin ve EBS birimini bir Amazon EC2 bulut sunucusuna ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut dosya depolama birimiyle aynı miktarda disk alanına sahip bir AWS Storage Gateway Volume Gateway depolanan birimi sağlayın. Birim Ağ Geçidi depolanan birimini iSCSI kullanarak mevcut dosya sunucusuna bağlayın ve tüm dosyaları depolama birimine kopyalayın. Depolama biriminin planlanmış anlık görüntülerini yapılandırın. Bir felaketten kurtulmak için anlık görüntüyü bir Amazon Elastic Block Store (Amazon EBS) birimine geri yükleyin ve EBS birimini bir Amazon EC2 bulut sunucusuna ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #325

Bir şirket, Amazon S3 klasöründen bir web uygulaması barındırıyor. Uygulama, kullanıcıların kimliğini doğrulamak ve başka bir S3 klasöründe depolanan korunan kaynaklara erişim sağlayan bir JSON Web Token'ı (JWT) döndürmek için kimlik sağlayıcı olarak Amazon Cognito'yu kullanır. Uygulamanın dağıtımının ardından kullanıcılar hataları bildirir ve korunan içeriğe erişemezler. Çözüm mimarının, kullanıcıların korunan içeriğe erişebilmesi için uygun izinleri sağlayarak bu sorunu çözmesi gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Korunan içeriğe erişim için uygun IAM rolünü üstlenmek amacıyla Amazon Cognito kimlik havuzunu güncelleyin.

B. Uygulamanın korunan içeriğe erişmesine izin vermek için S3 ACL'yi güncelleyin.

C. S3 klasöründeki tutarlı okumaların kullanıcıların korunan içeriğe erişim yeteneğini etkilemesini önlemek için uygulamayı Amazon S3'e yeniden dağıtın.

D. Amazon Cognito havuzunu, kimlik havuzu içindeki özel öznitelik eşlemelerini kullanacak ve kullanıcılara korunan içeriğe erişmeleri için uygun izinleri verecek şekilde güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Korunan içeriğe erişim için uygun IAM rolünü üstlenmek amacıyla Amazon Cognito kimlik havuzunu güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #326

Bir görüntü barındırma şirketi, büyük varlıklarını Amazon S3 Standard paketlerine yüklüyor. Şirket, S3 API'lerini kullanarak çok parçalı yüklemeyi paralel olarak kullanıyor ve aynı nesnenin tekrar yüklenmesi durumunda üzerine yazıyor. Yüklemeden sonraki ilk 30 gün boyunca nesnelere sıklıkla erişilecektir. Nesneler 30 gün sonra daha az sıklıkla kullanılacaktır ancak her nesnenin erişim düzenleri tutarsız olacaktır. Şirketin, depolanan varlıkların yüksek kullanılabilirliğini ve esnekliğini korurken S3 depolama maliyetlerini optimize etmesi gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi eylem kombinasyonunu önermelidir? (İki tane seçin.)

A. Varlıkları 30 gün sonra S3 Intelligent-Tiering'e taşıyın.

B. Tamamlanmamış çok parçalı yüklemeleri temizlemek için bir S3 Yaşam Döngüsü ilkesi yapılandırın.

C. Süresi dolmuş nesne silme işaretçilerini temizlemek için bir S3 Yaşam Döngüsü ilkesi yapılandırın.

D. Varlıkları 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) taşıyın.

E. Varlıkları 30 gün sonra S3 Tek Bölge-Sık Olmayan Erişim'e (S3 Bir Bölge-IA) taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Varlıkları 30 gün sonra S3 Intelligent-Tiering'e taşıyın. Tamamlanmamış çok parçalı yüklemeleri temizlemek için bir S3 Yaşam Döngüsü ilkesi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Multipart Upload (Çok Parçalı Yükleme):** Büyük dosya yüklemelerini paralel parçalara ayırarak gerçekleştirir. 100 MB üzerindeki nesneler için önerilir, 5 GB üzerindeki nesneler için zorunludur. Ağ kesintilerinde yalnızca başarısız olan parçanın tekrar yüklenmesini sağlar.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #327

Bir çözüm mimarının Amazon EC2 bulut sunucularını barındıran bir VPC ağının güvenliğini sağlaması gerekir. EC2 bulut sunucuları son derece hassas veriler içerir ve özel bir alt ağda çalışır. Şirket politikasına göre, VPC'de çalışan EC2 bulut sunucuları, üçüncü tarafın URL'sini kullanan yazılım ürünü güncellemeleri için yalnızca internetteki onaylı üçüncü taraf yazılım havuzlarına erişebilir. Diğer internet trafiği engellenmelidir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Giden trafiği bir AWS Ağ Güvenlik Duvarı güvenlik duvarına yönlendirmek için özel alt ağın yönlendirme tablosunu güncelleyin. Etki alanı listesi kural gruplarını yapılandırın.

B. Bir AWS WAF web ACL'si kurun. Kaynak ve hedef IP adresi aralığı kümelerine göre trafik isteklerini filtreleyen özel bir kurallar kümesi oluşturun.

C. Gelen güvenlik grubu kurallarını katı bir şekilde uygulayın. URL'leri belirterek, yalnızca internetteki yetkili yazılım havuzlarına trafiğe izin veren bir giden kuralı yapılandırın.

D. EC2 bulut sunucularının önünde bir Application Load Balancer (ALB) yapılandırın. Tüm giden trafiği ALB'ye yönlendirin. İnternete giden erişim için ALB'nin hedef grubunda URL tabanlı bir kural dinleyicisi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Giden trafiği bir AWS Ağ Güvenlik Duvarı güvenlik duvarına yönlendirmek için özel alt ağın yönlendirme tablosunu güncelleyin. Etki alanı listesi kural gruplarını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru #328

Bir şirket, AWS Cloud'da üç katmanlı bir e-ticaret uygulamasına ev sahipliği yapıyor. Şirket, web sitesini Amazon S3'te barındırıyor ve web sitesini satış taleplerini karşılayan bir API ile entegre ediyor. Şirket, API'yi bir Application Load Balancer'ın (ALB) arkasındaki üç Amazon EC2 örneğinde barındırıyor. API, satış isteklerini eşzamansız olarak işleyen arka uç çalışanlarının yanı sıra statik ve dinamik ön uç içeriğinden oluşur. Şirket, yeni ürünlerin lansmanına yönelik etkinlikler sırasında satış taleplerinin sayısında önemli ve ani bir artış bekliyor. Bir çözüm mimarı tüm isteklerin başarılı bir şekilde işlenmesini sağlamak için ne önermelidir?

A. Dinamik içerik için bir Amazon CloudFront dağıtımı ekleyin. Trafikteki artışın üstesinden gelmek için EC2 bulut sunucularının sayısını artırın.

B. Statik içerik için bir Amazon CloudFront dağıtımı ekleyin. Ağ trafiğine göre yeni bulut sunucularını başlatmak için EC2 bulut sunucularını bir Otomatik Ölçeklendirme grubuna yerleştirin.

C. Dinamik içerik için bir Amazon CloudFront dağıtımı ekleyin. API'nin işleyeceği trafiği azaltmak için ALB'nin önüne bir Amazon ElastiCache örneği ekleyin.

D. Statik içerik için bir Amazon CloudFront dağıtımı ekleyin. EC2 bulut sunucuları tarafından daha sonra işlenmek üzere web sitesinden gelen istekleri almak için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Statik içerik için bir Amazon CloudFront dağıtımı ekleyin. EC2 bulut sunucuları tarafından daha sonra işlenmek üzere web sitesinden gelen istekleri almak için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #329

Bir güvenlik denetimi, Amazon EC2 bulut sunucularına düzenli olarak yama uygulanmadığını ortaya koyuyor. Bir çözüm mimarının, geniş bir EC2 bulut sunucusu filosunda düzenli güvenlik taramaları gerçekleştirecek bir çözüm sağlaması gerekir. Çözüm ayrıca EC2 bulut sunucularına düzenli aralıklarla yama eklemeli ve her bulut sunucusunun yama durumuna ilişkin bir rapor sağlamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucularını yazılım açıklarına karşı taramak için Amazon Macie'yi kurun. Örneğe düzenli bir programla yama uygulamak için her EC2 bulut sunucusunda bir cron işi ayarlayın.

B. Hesapta Amazon GuardDuty'yi açın. EC2 bulut sunucularını yazılım açıklarına karşı tarayacak şekilde GuardDuty'yi yapılandırın. EC2 bulut sunucularına düzenli aralıklarla yama uygulamak için AWS Systems Manager Session Manager'ı kurun.

C. EC2 bulut sunucularını yazılım açıklarına karşı taramak için Amazon Detective'i kurun. EC2 bulut sunucularına düzenli bir programa göre yama uygulamak için bir Amazon EventBridge planlanmış kuralı ayarlayın.

D. Hesapta Amazon Inspector'ı açın. EC2 bulut sunucularını yazılım açıklarına karşı tarayacak şekilde Amazon Inspector'ı yapılandırın. EC2 bulut sunucularına düzenli aralıklarla yama uygulamak için AWS Systems Manager Patch Manager'ı kurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hesapta Amazon Inspector'ı açın. EC2 bulut sunucularını yazılım açıklarına karşı tarayacak şekilde Amazon Inspector'ı yapılandırın. EC2 bulut sunucularına düzenli aralıklarla yama uygulamak için AWS Systems Manager Patch Manager'ı kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #330

Bir şirket, verileri Amazon RDS DB bulut sunucularında depolamayı planlıyor. Şirket, kullanımda olmayan verileri şifrelemelidir. Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. AWS Key Management Service'de (AWS KMS) bir anahtar oluşturun. Veritabanı bulut sunucuları için şifrelemeyi etkinleştirin.

B. Bir şifreleme anahtarı oluşturun. Anahtarı AWS Secrets Manager'da saklayın. Veritabanı bulut sunucularını şifrelemek için anahtarı kullanın.

C. AWS Sertifika Yöneticisi'nde (ACM) bir sertifika oluşturun. Sertifikayı kullanarak veritabanı bulut sunucularında SSL/TLS'yi etkinleştirin.

D. AWS Identity and Access Management'ta (IAM) bir sertifika oluşturun. Sertifikayı kullanarak veritabanı bulut sunucularında SSL/TLS'yi etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Key Management Service'de (AWS KMS) bir anahtar oluşturun. Veritabanı bulut sunucuları için şifrelemeyi etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #331

Bir şirketin 30 gün içinde 20 TB veriyi veri merkezinden AWS Cloud'a taşıması gerekir. Şirketin ağ bant genişliği 15 Mbps ile sınırlıdır ve %70 kullanımı aşamaz. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS Snowball'u kullanın.

B. AWS DataSync'i kullanın.

C. Güvenli bir VPN bağlantısı kullanın.

D. Amazon S3 Transfer Acceleration'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Snowball'u kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #332

Bir şirketin çalışanlarına gizli ve hassas dosyalara güvenli erişim sağlaması gerekir. Şirket, dosyalara yalnızca yetkili kullanıcıların erişebilmesini sağlamak istiyor. Dosyalar çalışanların cihazlarına güvenli bir şekilde indirilmelidir. Dosyalar şirket içi bir Windows dosya sunucusunda depolanır. Ancak uzaktan kullanımın artması nedeniyle dosya sunucusunun kapasitesi doluyor. . Bu gereksinimleri hangi çözüm karşılayacak?

A. Dosya sunucusunu genel alt ağdaki bir Amazon EC2 bulut sunucusuna taşıyın. Çalışanların IP adreslerine gelen trafiği sınırlamak için güvenlik grubunu yapılandırın.

B. Dosyaları Amazon FSx for Windows Dosya Sunucusu dosya sistemine taşıyın. Amazon FSx dosya sistemini şirket içi Active Directory ile entegre edin. AWS İstemci VPN'ini yapılandırın.

C. Dosyaları Amazon S3'e taşıyın ve özel bir VPC uç noktası oluşturun. İndirmeye izin vermek için imzalı bir URL oluşturun.

D. Dosyaları Amazon S3'e taşıyın ve genel bir VPC uç noktası oluşturun. Çalışanların AWS IAM Identity Center (AWS Tek Oturum Açma) ile oturum açmasına izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Dosyaları Amazon FSx for Windows Dosya Sunucusu dosya sistemine taşıyın. Amazon FSx dosya sistemini şirket içi Active Directory ile entegre edin. AWS İstemci VPN'ini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru #333

Bir şirketin uygulaması, Application Load Balancer'ın (ALB) arkasındaki Amazon EC2 bulut sunucularında çalışır. Bulut sunucuları birden fazla Erişilebilirlik Alanında bir Amazon EC2 Auto Scaling grubunda çalışır. Her ayın ilk günü gece yarısı, ay sonu mali hesaplama toplu işlemi çalıştırıldığında uygulama çok daha yavaşlar. Bu, EC2 bulut sunucularının CPU kullanımının anında %100'e yükselmesine neden olur ve bu da uygulamayı kesintiye uğratır. Uygulamanın iş yükünü kaldırabilmesini ve kesinti süresini önleyebilmesini sağlamak için bir çözüm mimarı ne önermelidir?

A. ALB'nin önünde bir Amazon CloudFront dağıtımı yapılandırın.

B. CPU kullanımına dayalı bir EC2 Otomatik Ölçeklendirme basit ölçeklendirme ilkesini yapılandırın.

C. Aylık programa dayalı olarak EC2 Otomatik Ölçeklendirme planlı ölçeklendirme ilkesini yapılandırın.

D. İş yükünün bir kısmını EC2 bulut sunucularından kaldırmak için Amazon ElastiCache'i yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Aylık programa göre EC2 Otomatik Ölçeklendirme planlı ölçeklendirme ilkesini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #334

Bir şirket, müşteriye Amazon S3'te depolanan dosyaları indirmek için şirket içi Microsoft Active Directory'yi kullanma olanağı vermek istiyor. Müşterinin uygulaması, dosyaları indirmek için bir SFTP istemcisi kullanır. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile ve müşterinin uygulamasında değişiklik yapmadan karşılayacaktır?

A. Amazon S3 için SFTP ile AWS Transfer Ailesini kurun. Entegre Active Directory kimlik doğrulamasını yapılandırın.

B. Şirket içi istemciyi Amazon S3 ile senkronize etmek için AWS Database Migration Service'i (AWS DMS) kurun. Entegre Active Directory kimlik doğrulamasını yapılandırın.

C. AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kullanarak şirket içi konum ile S3 konumu arasında senkronizasyon yapmak için AWS DataSync'i kurun.

D. Şirket içi istemciyi Amazon S3'e bağlamak için SFTP ile bir Windows Amazon EC2 bulut sunucusu kurun. AWS Identity and Access Management'ı (IAM) entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3 için SFTP ile AWS Transfer Family'yi kurun. Entegre Active Directory kimlik doğrulamasını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #335

Bir firmada ani talep artışları yaşanıyor. Şirketin büyük Amazon EC2 bulut sunucularını bir Amazon Machine Image'dan (AMI) sağlaması gerekiyor. Örnekler bir Otomatik Ölçeklendirme grubunda çalıştırılacaktır. Şirketin talebi karşılamak için minimum başlatma gecikmesi sağlayan bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri karşılıyor?

A. Anlık görüntüden AMI oluşturmak için aws ec2 Register-image komutunu kullanın. Otomatik Ölçeklendirme grubundaki AMI'yi değiştirmek için AWS Step Functions'ı kullanın.

B. Bir anlık görüntüde Amazon Elastic Block Store (Amazon EBS) hızlı anlık görüntü geri yüklemesini etkinleştirin. Anlık görüntüyü kullanarak bir AMI sağlayın. Otomatik Ölçeklendirme grubundaki AMI'yi yeni AMI ile değiştirin.

C. Amazon Data Lifecycle Manager'da (Amazon DLM) AMI oluşturmayı etkinleştirin ve yaşam döngüsü kurallarını tanımlayın. Otomatik Ölçeklendirme grubunda AMI'yi değiştiren bir AWS Lambda işlevi oluşturun.

D. AMI'leri sağlayan AWS Backup yaşam döngüsü politikalarını çağırmak için Amazon EventBridge'i kullanın. EventBridge'de Otomatik Ölçeklendirme grubu kapasite sınırlarını olay kaynağı olarak yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir anlık görüntüde Amazon Elastic Block Store (Amazon EBS) hızlı anlık görüntü geri yüklemesini etkinleştirin. Anlık görüntüyü kullanarak bir AMI sağlayın. Otomatik Ölçeklendirme grubundaki AMI'yi yeni AMI ile değiştirin.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #336

Bir şirket, depolama için Amazon Aurora MySQL Veritabanı kümesini kullanan çok katmanlı bir web uygulamasına ev sahipliği yapıyor. Uygulama katmanı Amazon EC2 bulut sunucularında barındırılır. Şirketin BT güvenlik yönergeleri, veritabanı kimlik bilgilerinin her 14 günde bir şifrelenmesini ve değiştirilmesini zorunlu kılmaktadır. Bir çözüm mimarı bu gereksinimi EN AZ operasyonel çabayla karşılamak için ne yapmalıdır?

A. Yeni bir AWS Key Management Service (AWS KMS) şifreleme anahtarı oluşturun. Uygun kimlik bilgileriyle KMS anahtarını kullanan yeni bir gizli dizi oluşturmak için AWS Secrets Manager'ı kullanın. Gizli anahtarı Aurora DB kümesiyle ilişkilendirin. 14 günlük özel bir rotasyon dönemi yapılandırın.

B. AWS Systems Manager Parametre Deposu'nda iki parametre oluşturun: biri dize parametresi olarak kullanıcı adı için, diğeri ise parola için SecureString türünü kullanan. Parola parametresi için AWS Key Management Service (AWS KMS) şifrelemesini seçin ve bu parametreleri uygulama katmanına yükleyin. Parolayı 14 günde bir değiştiren bir AWS Lambda işlevi uygulayın.

C. Kimlik bilgilerini içeren bir dosyayı AWS Key Management Service (AWS KMS) ile şifrelenmiş Amazon Elastic File System (Amazon EFS) dosya sisteminde saklayın. EFS dosya sistemini uygulama katmanının tüm EC2 bulut sunucularına bağlayın. Uygulamanın dosyayı okuyabilmesi ve yalnızca süper kullanıcıların dosyayı değiştirebilmesi için dosya sistemindeki dosyaya erişimi kısıtlayın. Aurora'daki anahtarı her 14 günde bir döndüren ve dosyaya yeni kimlik bilgileri yazan bir AWS Lambda işlevi uygulayın.

D. Kimlik bilgilerini içeren bir dosyayı, uygulamanın kimlik bilgilerini yüklemek için kullandığı AWS Key Management Service (AWS KMS) şifreli Amazon S3 klasöründe saklayın. Doğru kimlik bilgilerinin kullanıldığından emin olmak için dosyayı uygulamaya düzenli olarak indirin. Aurora kimlik bilgilerini her 14 günde bir değiştiren ve bu kimlik bilgilerini S3 klasöründeki dosyaya yükleyen bir AWS Lambda işlevi uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Yeni bir AWS Key Management Service (AWS KMS) şifreleme anahtarı oluşturun. Uygun kimlik bilgileriyle KMS anahtarını kullanan yeni bir gizli dizi oluşturmak için AWS Secrets Manager'ı kullanın. Gizli anahtarı Aurora DB kümesiyle ilişkilendirin. 14 günlük özel bir rotasyon dönemi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #337

Bir şirket AWS'de bir web uygulaması dağıttı. Şirket, ölçeklendirme ihtiyaçlarını desteklemek için arka uç veritabanını Amazon RDS for MySQL'de birincil bir veritabanı bulut sunucusu ve beş okuma replikası ile barındırıyor. Okuma replikaları, birincil veritabanı bulut sunucusunun 1 saniyeden fazla gerisinde kalmamalıdır. Veritabanı rutin olarak planlanmış saklı yordamları çalıştırır. Web sitesindeki trafik arttıkça kopyalar, yükün en yüksek olduğu dönemlerde ek gecikmeler yaşar. Bir çözüm mimarı çoğaltma gecikmesini mümkün olduğu kadar azaltmalıdır. Çözüm mimarı, uygulama kodundaki değişiklikleri en aza indirmeli ve devam eden operasyonel ek yükü en aza indirmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanını Amazon Aurora MySQL'e taşıyın. Okuma replikalarını Aurora Replikalarıyla değiştirin ve Aurora Auto Scaling'i yapılandırın. Saklı prosedürleri Aurora MySQL yerel işlevleriyle değiştirin.

B. Veritabanının önünde bir Amazon ElastiCache for Redis kümesi dağıtın. Uygulama veritabanını sorgulamadan önce önbelleği kontrol edecek şekilde uygulamayı değiştirin. Saklı prosedürleri AWS Lambda işlevleriyle değiştirin.

C. Veritabanını Amazon EC2 bulut sunucularında çalışan bir MySQL veritabanına taşıyın. Tüm replika düğümleri için büyük, işlem açısından optimize edilmiş EC2 bulut sunucularını seçin. EC2 bulut sunucularındaki saklı prosedürleri koruyun.

D. Veritabanını Amazon DynamoDB'ye taşıyın. Gerekli verimi desteklemek için çok sayıda okuma kapasitesi birimi (RCU) sağlayın ve isteğe bağlı kapasite ölçeklendirmesini yapılandırın. Saklı prosedürleri DynamoDB akışlarıyla değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanını Amazon Aurora MySQL'e taşıyın. Okuma replikalarını Aurora Replikalarıyla değiştirin ve Aurora Auto Scaling'i yapılandırın. Saklı prosedürleri Aurora MySQL yerel işlevleriyle değiştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #338

Bir çözüm mimarı, yüksek hacimli bir hizmet olarak yazılım (SaaS) platformu için bir olağanüstü durum kurtarma (DR) planı oluşturmalıdır. Platforma ilişkin tüm veriler bir Amazon Aurora MySQL DB kümesinde depolanır. DR planının verileri ikincil bir AWS Bölgesine çoğaltması gerekir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İkincil Bölgedeki bir Aurora kümesine MySQL ikili günlük çoğaltmasını kullanın. İkincil Bölgedeki Aurora kümesi için bir veritabanı bulut sunucusu sağlayın.

B. Veritabanı kümesi için bir Aurora global veritabanı oluşturun. Kurulum tamamlandığında veritabanı bulut sunucusunu ikincil Bölgeden kaldırın.

C. Verileri ikincil Bölgedeki bir Aurora kümesine sürekli olarak kopyalamak için AWS Database Migration Service'i (AWS DMS) kullanın. Veritabanı örneğini ikincil Bölgeden kaldırın.

D. Veritabanı kümesi için bir Aurora global veritabanı kurun. İkincil Bölgede en az bir veritabanı bulut sunucusu belirtin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanı kümesi için bir Aurora global veritabanı oluşturun. İkincil Bölgede en az bir veritabanı bulut sunucusu belirtin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #339

Bir şirketin, Amazon RDS MySQL veritabanı bulut sunucusundan bilgi alan, yerleşik kimlik bilgilerine sahip özel bir uygulaması vardır. Yönetim, uygulamanın en az programlama çabasıyla daha güvenli hale getirilmesi gerektiğini söylüyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Anahtarlar oluşturmak için AWS Key Management Service'i (AWS KMS) kullanın. Uygulamayı AWS KMS'den veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırın. Otomatik anahtar yönlendirmeyi etkinleştirin.

B. Uygulama kullanıcısı için RDS for MySQL veritabanında kimlik bilgileri oluşturun ve kimlik bilgilerini AWS Secrets Manager'da saklayın. Uygulamayı Secrets Manager'dan veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırın. Secret Manager'da kimlik bilgilerini döndüren bir AWS Lambda işlevi oluşturun.

C. Uygulama kullanıcısı için RDS for MySQL veritabanında kimlik bilgileri oluşturun ve kimlik bilgilerini AWS Secrets Manager'da saklayın. Uygulamayı Secrets Manager'dan veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırın. Secrets Manager'ı kullanarak RDS for MySQL veritabanındaki uygulama kullanıcısı için bir kimlik bilgileri rotasyon planı ayarlayın.

D. Uygulama kullanıcısı için RDS for MySQL veritabanında kimlik bilgileri oluşturun ve kimlik bilgilerini AWS Systems Manager Parametre Deposu'nda saklayın. Uygulamayı, Parametre Deposu'ndan veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırın. Parameter Store'u kullanarak RDS for MySQL veritabanındaki uygulama kullanıcısı için bir kimlik bilgileri rotasyon planı ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulama kullanıcısı için RDS for MySQL veritabanında kimlik bilgileri oluşturun ve kimlik bilgilerini AWS Secrets Manager'da saklayın. Uygulamayı Secrets Manager'dan veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırın. Secrets Manager'ı kullanarak RDS for MySQL veritabanındaki uygulama kullanıcısı için bir kimlik bilgileri rotasyon planı ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #340

Bir medya şirketi web sitesini AWS'de barındırıyor. Web sitesi uygulamasının mimarisi, Application Load Balancer'ın (ALB) arkasında Amazon EC2 bulut sunucularından oluşan bir filo ve Amazon Aurora'da barındırılan bir veritabanı içerir. Şirketin siber güvenlik ekibi, uygulamanın SQL enjeksiyonuna karşı savunmasız olduğunu bildirdi. Şirket bu sorunu nasıl çözmeli?

A. ALB'nin önünde AWS WAF'ı kullanın. Uygun web ACL'lerini AWS WAF ile ilişkilendirin.

B. SQL enjeksiyonlarına sabit bir yanıtla yanıt vermek için bir ALB dinleyici kuralı oluşturun.

C. Tüm SQL ekleme girişimlerini otomatik olarak engellemek için AWS Shield Advanced'e abone olun.

D. Tüm SQL ekleme girişimlerini otomatik olarak engellemek için Amazon Inspector'ı kurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** ALB'nin önünde AWS WAF'ı kullanın. Uygun web ACL'lerini AWS WAF ile ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #341

Bir şirketin, AWS Lake Formation tarafından yönetilen bir Amazon S3 veri gölü vardır. Şirket, veri gölündeki verileri Amazon Aurora MySQL veritabanında depolanan operasyonel verilerle birleştirerek Amazon QuickSight'ta bir görselleştirme oluşturmak istiyor. Şirket, pazarlama ekibinin veritabanındaki sütunların yalnızca bir alt kümesine erişebilmesi için sütun düzeyinde yetkilendirmeyi zorunlu kılmak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

C. Verileri doğrudan veritabanından QuickSight SPICE motoruna almak için Amazon EMR'yi kullanın. Yalnızca gerekli sütunları ekleyin.

B. Verileri veritabanından S3 data lake'e almak için AWS Glue Studio'yu kullanın. Sütun düzeyinde erişim kontrolünü zorunlu kılmak için QuickSight kullanıcılarına bir IAM politikası ekleyin. QuickSight'ta veri kaynağı olarak Amazon S3'ü kullanın.

C. Amazon S3'teki veritabanı için gerçekleştirilmiş bir görünüm oluşturmak amacıyla AWS Glue Elastic Views'ı kullanın. QuickSight kullanıcıları için sütun düzeyinde erişim kontrolünü zorunlu kılmak üzere bir S3 grup ilkesi oluşturun. QuickSight'ta veri kaynağı olarak Amazon S3'ü kullanın.

D. Verileri veritabanından S3 veri gölüne almak için bir Göl Oluşumu planı kullanın. QuickSight kullanıcıları için sütun düzeyinde erişim kontrolünü zorunlu kılmak amacıyla Lake Formation'ı kullanın. QuickSight'ta veri kaynağı olarak Amazon Athena'yı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Verileri veritabanından S3 veri gölüne almak için Göl Oluşumu planını kullanın. QuickSight kullanıcıları için sütun düzeyinde erişim kontrolünü zorunlu kılmak amacıyla Lake Formation'ı kullanın. QuickSight'ta veri kaynağı olarak Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #342

Bir işlem işleme şirketinin, Amazon EC2 bulut sunucularında çalışan haftalık komut dosyası içeren toplu işleri vardır. EC2 bulut sunucuları Otomatik Ölçeklendirme grubundadır. İşlem sayısı değişebilir ancak her çalıştırmada kaydedilen temel CPU kullanımı en az %60'tır. Şirketin, işler çalıştırılmadan 30 dakika önce kapasiteyi sağlaması gerekiyor. Şu anda mühendisler bu görevi Otomatik Ölçeklendirme grubu parametrelerini manuel olarak değiştirerek tamamlıyorlar. Şirket, Otomatik Ölçeklendirme grup sayımları için gerekli kapasite eğilimlerini analiz edecek kaynaklara sahip değil. Şirketin, Otomatik Ölçeklendirme grubunun istenen kapasitesini değiştirmek için otomatikleştirilmiş bir yola ihtiyacı var. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Otomatik Ölçeklendirme grubu için dinamik bir ölçeklendirme ilkesi oluşturun. Politikayı CPU kullanımı ölçümüne göre ölçeklenecek şekilde yapılandırın. Metriğin hedef değerini %60'a ayarlayın.

B. Otomatik Ölçeklendirme grubu için zamanlanmış bir ölçeklendirme ilkesi oluşturun. İstenilen uygun kapasiteyi, minimum kapasiteyi ve maksimum kapasiteyi ayarlayın. Tekrarlamayı haftalık olarak ayarlayın. Toplu işlerin çalıştırılmasından önceki başlangıç ​​zamanını 30 dakikaya ayarlayın.

C. Otomatik Ölçeklendirme grubu için tahmine dayalı bir ölçeklendirme ilkesi oluşturun. Politikayı tahmine dayalı olarak ölçeklendirecek şekilde yapılandırın. Ölçeklendirme ölçüsünü CPU kullanımına göre ayarlayın. Metriğin hedef değerini %60'a ayarlayın. Politikada örnekleri, işler çalıştırılmadan 30 dakika önce başlatılacak şekilde ayarlayın.

D. Otomatik Ölçeklendirme grubu için CPU kullanımı ölçüm değeri %60'a ulaştığında bir AWS Lambda işlevini çağırmak için bir Amazon EventBridge olayı oluşturun. Otomatik Ölçeklendirme grubunun istenen kapasitesini ve maksimum kapasitesini %20 artırmak için Lambda işlevini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubu için tahmine dayalı bir ölçeklendirme ilkesi oluşturun. Politikayı tahmine dayalı olarak ölçeklendirecek şekilde yapılandırın. Ölçeklendirme ölçüsünü CPU kullanımına göre ayarlayın. Metriğin hedef değerini %60'a ayarlayın. Politikada örnekleri, işler çalıştırılmadan 30 dakika önce başlatılacak şekilde ayarlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #343

Bir çözüm mimarı, bir şirketin olağanüstü durum kurtarma (DR) mimarisini tasarlıyor. Şirketin, özel bir alt ağdaki Amazon EC2 örneğinde planlı yedeklemeyle çalışan bir MySQL veritabanı var. DR tasarımının birden fazla AWS Bölgesi içermesi gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. MySQL veritabanını birden çok EC2 örneğine taşıyın. DR Bölgesinde beklemedeki bir EC2 örneğini yapılandırın. Çoğaltmayı açın.

B. MySQL veritabanını Amazon RDS'ye taşıyın. Multi-AZ dağıtımı kullanın. Farklı Erişilebilirlik Alanlarındaki birincil veritabanı bulut sunucusu için okuma çoğaltmayı açın.

C. MySQL veritabanını Amazon Aurora global veritabanına taşıyın. Birincil Veritabanı kümesini birincil Bölgede barındırın. İkincil veritabanı kümesini DR Bölgesinde barındırın.

D. MySQL veritabanının planlanmış yedeklemesini S3 Bölgeler Arası Çoğaltma (CRR) için yapılandırılmış bir Amazon S3 klasöründe saklayın. DR Bölgesindeki veritabanını geri yüklemek için veri yedeklemeyi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** MySQL veritabanını Amazon Aurora global veritabanına taşıyın. Birincil Veritabanı kümesini birincil Bölgede barındırın. İkincil veritabanı kümesini DR Bölgesinde barındırın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #344

Bir şirketin, mesajları ayrıştırmak için Amazon Simple Queue Service'i (Amazon SQS) kullanan bir Java uygulaması var. Uygulama, boyutu 256 KB'tan büyük olan iletileri ayrıştıramaz. Şirket, uygulamaya 50 MB'a kadar büyük mesajları ayrıştırma yeteneği verecek bir çözüm uygulamak istiyor. Kodda yapılacak EN AZ değişiklikle bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3'te 256 KB'tan büyük mesajları barındırmak için Amazon SQS Extended Client Library for Java'yı kullanın.

B. Uygulamadan büyük mesajlar göndermek için Amazon SQS yerine Amazon EventBridge'i kullanın.

C. 256 KB'tan büyük iletileri işlemek için Amazon SQS'teki sınırı değiştirin.

D. 256 KB'tan büyük mesajları Amazon Elastic File System'de (Amazon EFS) saklayın. Amazon SQS'yi mesajlarda bu konuma referans verecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3'te 256 KB'tan büyük mesajları barındırmak için Amazon SQS Extended Client Library for Java'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #345

Bir şirket, ana web uygulamalarından birinin içeriğine erişimi kısıtlamak ve AWS'de mevcut olan yetkilendirme tekniklerini kullanarak içeriği korumak istiyor. Şirket, 100'den az kullanıcı için sunucusuz bir mimari ve kimlik doğrulama çözümü uygulamak istiyor. Çözümün ana web uygulamasıyla entegre olması ve web içeriğini küresel olarak sunması gerekiyor. Çözümün aynı zamanda şirketin kullanıcı tabanı büyüdükçe ölçeklenmesi ve mümkün olan en düşük oturum açma gecikmesini sağlaması gerekiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Kimlik doğrulama için Amazon Cognito'yu kullanın. Yetkilendirme için Lambda@Edge'i kullanın. Web uygulamasını küresel olarak sunmak için Amazon CloudFront'u kullanın.

B. Kimlik doğrulama için Microsoft Active Directory için AWS Directory Service'i kullanın. Yetkilendirme için AWS Lambda'yı kullanın. Web uygulamasını küresel olarak sunmak için bir Application Load Balancer kullanın.

C. Kimlik doğrulama için Amazon Cognito'yu kullanın. Yetkilendirme için AWS Lambda'yı kullanın. Web uygulamasını küresel olarak sunmak için Amazon S3 Transfer Acceleration'ı kullanın.

D. Kimlik doğrulama için Microsoft Active Directory için AWS Directory Service'i kullanın. Yetkilendirme için Lambda@Edge'i kullanın. Web uygulamasını global olarak sunmak için AWS Elastic Beanstalk'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kimlik doğrulama için Amazon Cognito'yu kullanın. Yetkilendirme için Lambda@Edge'i kullanın. Web uygulamasını küresel olarak sunmak için Amazon CloudFront'u kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #346

Bir şirketin veri merkezinde eskiyen bir ağa bağlı depolama (NAS) dizisi var. NAS dizisi, SMB paylaşımlarını ve NFS paylaşımlarını istemci iş istasyonlarına sunar. Şirket yeni bir NAS dizisi satın almak istemiyor. Şirket ayrıca NAS dizisinin destek sözleşmesinin yenilenmesi masrafına da katlanmak istemiyor. Verilerin bir kısmına sıklıkla erişiliyor ancak verilerin çoğu aktif değil. Bir çözüm mimarının, verileri Amazon S3'e geçiren, S3 Yaşam Döngüsü politikalarını kullanan ve istemci iş istasyonları için aynı görünüm ve hissi koruyan bir çözümü uygulaması gerekir. Çözüm mimarı, çözümün bir parçası olarak AWS Storage Gateway'i belirledi. Çözüm mimarı bu gereksinimleri karşılamak için hangi tür depolama ağ geçidini sağlamalıdır?

A. Birim Ağ Geçidi

B. Bant Ağ Geçidi

C. Amazon FSx Dosya Ağ Geçidi

D. Amazon S3 Dosya Ağ Geçidi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon S3 Dosya Ağ Geçidi
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #347

Bir şirketin Amazon EC2 bulut sunucuları üzerinde çalışan bir uygulaması var. Bir çözüm mimarı, şirketin mevcut ihtiyaçlarına göre şirketi belirli bir bulut sunucusu ailesi ve çeşitli bulut sunucusu boyutlarına göre standartlaştırdı. Şirket, önümüzdeki 3 yıl boyunca uygulama için maliyet tasarrufunu en üst düzeye çıkarmak istiyor. Şirketin önümüzdeki 6 ay içinde uygulamanın popülerliğine ve kullanımına bağlı olarak bulut sunucusu ailesini ve boyutlarını değiştirebilmesi gerekiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Hesaplama Tasarruf Planı

B. EC2 Bulut Sunucusu Tasarruf Planı

C. Bölgesel Rezerve Edilmiş Bulut Sunucuları

D. Standart Rezerve Edilmiş Bulut Sunucuları

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Hesaplama Tasarruf Planı
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #348

Bir şirket, giyilebilir cihaz kullanan çok sayıda katılımcıdan veri topluyor. Şirket, verileri bir Amazon DynamoDB tablosunda saklıyor ve verileri analiz etmek için uygulamalar kullanıyor. Veri iş yükü sabit ve öngörülebilirdir. Şirket, DynamoDB için öngörülen bütçesinde veya bunun altında kalmak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Hazırlanan modu ve DynamoDB Standard-Infrequent Access'i (DynamoDB Standard-IA) kullanın. Tahmini iş yükü için yedek kapasite.

B. Hazırlanan modu kullanın. Okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini (WCU'lar) belirtin.

C. İsteğe bağlı modu kullanın. Okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini (WCU'lar) iş yükündeki değişikliklere uyum sağlayacak kadar yüksek ayarlayın.

D. İsteğe bağlı modu kullanın. Ayrılmış kapasiteye sahip okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini (WCU'lar) belirtin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Hazırlanan modu kullanın. Okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini (WCU'lar) belirtin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #349

Bir şirket, gizli verileri ap-southeast-3 Bölgesindeki bir Amazon Aurora PostgreSQL veritabanında saklıyor. Veritabanı, AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtarla şifrelenir. Şirket yakın zamanda satın alındı ​​ve veritabanının bir yedeğini, satın alan şirketin ap-southeast-3'teki AWS hesabıyla güvenli bir şekilde paylaşması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir veritabanı anlık görüntüsü oluşturun. Anlık görüntüyü yeni, şifrelenmemiş bir anlık görüntüye kopyalayın. Yeni anlık görüntüyü satın alan şirketin AWS hesabıyla paylaşın.

B. Bir veritabanı anlık görüntüsü oluşturun. Satın alan şirketin AWS hesabını KMS anahtar politikasına ekleyin. Anlık görüntüyü satın alan şirketin AWS hesabıyla paylaşın.

C. Farklı bir AWS tarafından yönetilen KMS anahtarı kullanan bir veritabanı anlık görüntüsü oluşturun. Satın alan şirketin AWS hesabını KMS anahtar takma adına ekleyin. Anlık görüntüyü satın alan şirketin AWS hesabıyla paylaşın.

D. Bir veritabanı anlık görüntüsü oluşturun. Veritabanı anlık görüntüsünü indirin. Veritabanı anlık görüntüsünü bir Amazon S3 klasörüne yükleyin. Alıcı şirketin AWS hesabından erişime izin vermek için S3 grubu politikasını güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir veritabanı anlık görüntüsü oluşturun. Satın alan şirketin AWS hesabını KMS anahtar politikasına ekleyin. Anlık görüntüyü satın alan şirketin AWS hesabıyla paylaşın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #350

Bir şirket, müşteri işlemlerini depolamak için us-east-1 Bölgesindeki Microsoft SQL Server Single-AZ Veritabanı bulut sunucusu için 100 GB Amazon RDS kullanıyor. Şirketin veritabanı bulut sunucusu için yüksek düzeyde kullanılabilirliğe ve otomatik kurtarmaya ihtiyacı var. Şirketin ayrıca yılda birkaç kez RDS veritabanına ilişkin raporlar çalıştırması gerekiyor. Rapor süreci, işlemlerin müşterilerin hesaplarına gönderilmesinin normalden daha uzun sürmesine neden oluyor. Şirketin raporlama sürecinin performansını artıracak bir çözüme ihtiyacı var. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Veritabanı bulut sunucusunu Single-AZ veritabanı bulut sunucusundan Multi-AZ dağıtımına değiştirin.

B. Geçerli veritabanı bulut sunucusunun anlık görüntüsünü alın. Anlık görüntüyü başka bir Erişilebilirlik Alanındaki yeni bir RDS dağıtımına geri yükleyin.

C. Farklı bir Erişilebilirlik Alanında veritabanı bulut sunucusunun okuma kopyasını oluşturun. Raporlara yönelik tüm istekleri okuma kopyasına yönlendirin.

D. Veritabanını RDS Custom'a taşıyın.

E. Raporlama isteklerini bakım penceresiyle sınırlandırmak için RDS Proxy'sini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Veritabanı bulut sunucusunu Single-AZ veritabanı bulut sunucusundan Multi-AZ dağıtımına değiştirin. Farklı bir Erişilebilirlik Alanında veritabanı bulut sunucusunun okuma kopyasını oluşturun. Raporlara yönelik tüm istekleri okuma kopyasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #351

Bir şirket veri yönetimi uygulamasını AWS'ye taşıyor. Şirket, olay odaklı bir mimariye geçiş yapmak istiyor. Mimarinin daha fazla dağıtılması ve iş akışının farklı yönlerini gerçekleştirirken sunucusuz kavramların kullanılması gerekiyor. Şirket ayrıca operasyonel giderleri en aza indirmek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Glue'da iş akışını oluşturun. İş akışı adımlarını işlemek amacıyla AWS Lambda işlevlerini çağırmak için AWS Glue'yu kullanın.

B. AWS Step Functions'ta iş akışını oluşturun. Uygulamayı Amazon EC2 bulut sunucularına dağıtın. EC2 bulut sunucularında iş akışı adımlarını çağırmak için Step Functions'ı kullanın.

C. Amazon EventBridge'de iş akışını oluşturun. İş akışı adımlarını işlemek amacıyla AWS Lambda işlevlerini bir programa göre çağırmak için EventBridge'i kullanın.

D. AWS Step Functions'ta iş akışını oluşturun. Bir durum makinesi oluşturmak için Step Functions'ı kullanın. İş akışı adımlarını işlemek amacıyla AWS Lambda işlevlerini çağırmak için durum makinesini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Step Functions'ta iş akışını oluşturun. Bir durum makinesi oluşturmak için Step Functions'ı kullanın. İş akışı adımlarını işlemek amacıyla AWS Lambda işlevlerini çağırmak için durum makinesini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Step Functions Dağıtık İş Akışı Düzenleme:** Mikroservisleri, Lambda fonksiyonlarını ve uzun süreli toplu işleri otomatik yeniden deneme ve durum takibi ile koordine eden görsel iş akışı servisidir.

---

---

Soru #352

Bir şirket, çevrimiçi çok oyunculu bir oyun için ağ tasarlıyor. Oyun, UDP ağ protokolünü kullanıyor ve sekiz AWS Bölgesinde dağıtılacak. Son kullanıcılara yüksek kaliteli bir oyun deneyimi sunmak için ağ mimarisinin gecikmeyi ve paket kaybını en aza indirmesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Her Bölgede bir transit ağ geçidi kurun. Her geçiş ağ geçidi arasında Bölgeler arası eşleme ekleri oluşturun.

B. Her Bölgede UDP dinleyicileri ve uç nokta gruplarıyla AWS Global Accelerator'ı kurun.

C. Amazon CloudFront'u UDP açık olarak kurun. Her Bölgede bir başlangıç ​​noktası yapılandırın.

D. Her Bölge arasında bir VPC eşleme ağı oluşturun. Her VPC için UDP'yi açın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Her Bölgede UDP dinleyicileri ve uç nokta gruplarıyla AWS Global Accelerator'ı kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #353

Bir şirket, tek bir Erişilebilirlik Alanında Amazon EC2 bulut sunucularında üç katmanlı bir web uygulaması barındırıyor. Web uygulaması, verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde depolamak için EC2 bulut sunucusunda barındırılan, kendi kendini yöneten bir MySQL veritabanını kullanır. MySQL veritabanı şu anda 1 TB Tedarik Edilmiş IOPS SSD (io2) EBS birimi kullanıyor. Şirket, trafiğin en yoğun olduğu saatlerde hem okuma hem de yazma için 1.000 IOPS trafik bekliyor. Şirket, IOPS kapasitesini iki katına çıkarırken herhangi bir kesintiyi en aza indirmek, performansı istikrara kavuşturmak ve maliyetleri düşürmek istiyor. Şirket, veritabanı katmanını yüksek düzeyde kullanılabilir ve hataya dayanıklı, tam olarak yönetilen bir çözüme taşımak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. io2 Block Express EBS birimiyle Amazon RDS for MySQL veritabanı bulut sunucusunun Multi-AZ dağıtımını kullanın.

B. Genel Amaçlı SSD (gp2) EBS birimiyle Amazon RDS for MySQL veritabanı bulut sunucusunun Multi-AZ dağıtımını kullanın.

C. Amazon S3 Intelligent-Tiering erişim katmanlarını kullanın.

D. Veritabanını aktif-pasif modda barındırmak için iki büyük EC2 bulut sunucusu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Genel Amaçlı SSD (gp2) EBS birimiyle Amazon RDS for MySQL veritabanı bulut sunucusunun Multi-AZ dağıtımını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #354

Bir şirket AWS'de sunucusuz bir uygulama barındırıyor. Uygulama Amazon API Gateway, AWS Lambda ve Amazon RDS for PostgreSQL veritabanını kullanır. Şirket, trafiğin yoğun olduğu veya öngörülemeyen trafik zamanlarında veritabanı bağlantısı zaman aşımlarından kaynaklanan uygulama hatalarında bir artış olduğunu fark ediyor. Şirketin, kodda en az değişiklikle uygulama hatalarını azaltacak bir çözüme ihtiyacı var. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Lambda eşzamanlılık oranını azaltın.

B. RDS Veritabanı bulut sunucusunda RDS Proxy'sini etkinleştirin.

C. Daha fazla bağlantıyı kabul etmek için RDS Veritabanı bulut sunucusu sınıfını yeniden boyutlandırın.

D. İsteğe bağlı ölçeklendirmeyle veritabanını Amazon DynamoDB'ye taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** RDS Veritabanı örneğinde RDS Proxy'sini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #355

Bir şirket eski bir uygulamayı AWS'ye taşıyor. Uygulama her saat başı bir toplu iş çalıştırır ve CPU yoğundur. Toplu iş, şirket içi bir sunucuyla ortalama 15 dakika sürer. Sunucuda 64 sanal CPU (vCPU) ve 512 GiB bellek bulunur. Hangi çözüm toplu işi EN AZ operasyonel ek yük ile 15 dakika içinde çalıştıracak?

A. İşlevsel ölçeklendirmeyle AWS Lambda'yı kullanın.

B. Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate ile kullanın.

C. Amazon Lightsail'i AWS Auto Scaling ile kullanın.

D. Amazon EC2'de AWS Batch'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon EC2'de AWS Batch'i kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #356

Bir şirket, veri nesnelerini Amazon S3 Standard depolama alanında saklar. Bir çözüm mimarı, verilerin %75'ine 30 gün sonra nadiren erişildiğini tespit etti. Şirketin tüm verilere aynı yüksek kullanılabilirlik ve esneklikle anında erişilebilmesi gerekiyor ancak şirket depolama maliyetlerini en aza indirmek istiyor. Hangi depolama çözümü bu gereksinimleri karşılayacak?

A. Veri nesnelerini 30 gün sonra S3 Glacier Deep Archive'a taşıyın.

B. Veri nesnelerini 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) taşıyın.

C. Veri nesnelerini 30 gün sonra S3 Bir Bölge-İnfrekans Erişimine (S3 Bir Bölge-IA) taşıyın.

D. Veri nesnelerini derhal S3 Tek Bölge-İnfrekant Erişimine (S3 Tek Bölge-IA) taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veri nesnelerini 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru #357

Bir oyun şirketi, genel puan tablosunu veri merkezinden AWS Cloud'a taşıyor. Şirket, dinamik uygulamasını barındırmak için Application Load Balancer'ın arkasında Amazon EC2 Windows Server örneklerini kullanıyor. Şirketin uygulama için yüksek düzeyde kullanılabilir bir depolama çözümüne ihtiyacı var. Uygulama statik dosyalardan ve dinamik sunucu tarafı kodundan oluşur. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Statik dosyaları Amazon S3'te saklayın. Uçtaki nesneleri önbelleğe almak için Amazon CloudFront'u kullanın.

B. Statik dosyaları Amazon S3'te saklayın. Uçtaki nesneleri önbelleğe almak için Amazon ElastiCache'i kullanın.

C. Sunucu tarafı kodunu Amazon Elastic File System'de (Amazon EFS) saklayın. Dosyaları paylaşmak için EFS birimini her EC2 bulut sunucusuna bağlayın.

D. Sunucu tarafı kodunu Windows Dosya Sunucusu için Amazon FSx'te saklayın. Dosyaları paylaşmak için Windows Dosya Sunucusu için FSx birimini her EC2 örneğine bağlayın.

E. Sunucu tarafı kodunu Genel Amaçlı SSD (gp2) Amazon Elastic Block Store (Amazon EBS) biriminde saklayın. Dosyaları paylaşmak için EBS birimini her EC2 bulut sunucusuna bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Statik dosyaları Amazon S3'te saklayın. Uçtaki nesneleri önbelleğe almak için Amazon CloudFront'u kullanın. Sunucu tarafı kodunu Windows Dosya Sunucusu için Amazon FSx'te saklayın. Dosyaları paylaşmak için Windows Dosya Sunucusu için FSx birimini her EC2 örneğine bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #358

Bir sosyal medya şirketi, uygulamasını bir Application Load Balancer (ALB) arkasında Amazon EC2 bulut sunucularında çalıştırıyor. ALB, Amazon CloudFront dağıtımının kaynağıdır. Uygulama, bir Amazon S3 klasöründe depolanan bir milyardan fazla görüntüye sahiptir ve her saniye binlerce görüntüyü işler. Şirket, görselleri dinamik olarak yeniden boyutlandırmak ve müşterilere uygun formatları sunmak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. EC2 bulut sunucusuna harici bir görüntü yönetimi kitaplığı yükleyin. Görüntüleri işlemek için görüntü yönetimi kitaplığını kullanın.

B. CloudFront kaynak istek politikası oluşturun. Görüntüleri otomatik olarak yeniden boyutlandırmak ve istekteki Kullanıcı Aracısı HTTP üstbilgisine göre uygun biçimi sunmak için bu politikayı kullanın.

C. Harici bir görüntü yönetimi kitaplığıyla Lambda@Edge işlevini kullanın. Lambda@Edge işlevini görüntülere hizmet veren CloudFront davranışlarıyla ilişkilendirin.

D. CloudFront yanıt başlıkları ilkesi oluşturun. Görüntüleri otomatik olarak yeniden boyutlandırmak ve istekteki Kullanıcı Aracısı HTTP üstbilgisine göre uygun biçimi sunmak için bu politikayı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Harici bir görüntü yönetimi kitaplığıyla Lambda@Edge işlevini kullanın. Lambda@Edge işlevini görüntülere hizmet veren CloudFront davranışlarıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #359

Bir hastanenin hasta kayıtlarını bir Amazon S3 klasöründe saklaması gerekir. Hastanenin uyumluluk ekibi, korunan tüm sağlık bilgilerinin (PHI) aktarım sırasında ve kullanım sırasında şifrelendiğinden emin olmalıdır. Uyumluluk ekibinin, kullanımda olmayan veriler için şifreleme anahtarını yönetmesi gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Sertifika Yöneticisi'nde (ACM) genel bir SSL/TLS sertifikası oluşturun. Sertifikayı Amazon S3 ile ilişkilendirin. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanmak için her S3 klasörü için varsayılan şifrelemeyi yapılandırın. KMS anahtarlarını yönetmek için uyumluluk ekibini atayın.

B. Yalnızca HTTPS (TLS) üzerinden şifrelenmiş bağlantılara izin vermek için S3 paket ilkelerinde aws:SecureTransport koşulunu kullanın. S3 tarafından yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanmak üzere her S3 grubu için varsayılan şifrelemeyi yapılandırın. SSE-S3 anahtarlarını yönetmek için uyumluluk ekibini atayın.

C. Yalnızca HTTPS (TLS) üzerinden şifrelenmiş bağlantılara izin vermek için S3 paket ilkelerinde aws:SecureTransport koşulunu kullanın. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanmak için her S3 klasörü için varsayılan şifrelemeyi yapılandırın. KMS anahtarlarını yönetmek için uyumluluk ekibini atayın.

D. Yalnızca HTTPS (TLS) üzerinden şifrelenmiş bağlantılara izin vermek için S3 klasör ilkelerinde aws:SecureTransport koşulunu kullanın. Amazon S3'te depolanan hassas verileri korumak için Amazon Macie'yi kullanın. Uyumluluk ekibini Macie'yi yönetmesi için atayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Yalnızca HTTPS (TLS) üzerinden şifrelenmiş bağlantılara izin vermek için S3 paket ilkelerinde aws:SecureTransport koşulunu kullanın. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanmak için her S3 klasörü için varsayılan şifrelemeyi yapılandırın. KMS anahtarlarını yönetmek için uyumluluk ekibini atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #360

Bir şirket, aynı VPC'de iki REST API içeren özel bir ağ geçidini çalıştırmak için Amazon API Gateway'i kullanıyor. BuyStock RESTful web hizmeti, bir hisse senedi satın alınmadan önce yeterli fonun mevcut olduğundan emin olmak için CheckFunds RESTful web hizmetini çağırır. Şirket, VPC akış günlüklerinde BuyStock RESTful web hizmetinin CheckFunds RESTful web hizmetini VPC yerine internet üzerinden çağırdığını fark etti. Bir çözüm mimarının, API'lerin VPC aracılığıyla iletişim kurabilmesi için bir çözüm uygulaması gerekir. Kodda yapılacak EN AZ değişiklikle bu gereksinimleri hangi çözüm karşılayacak?

A. Yetkilendirme için HTTP başlığına bir X-API-Key başlığı ekleyin.

B. Bir arayüz uç noktası kullanın.

C. Bir ağ geçidi uç noktası kullanın.

D. İki REST API'si arasına bir Amazon Simple Queue Service (Amazon SQS) kuyruğu ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir arayüz uç noktası kullanın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru #361

Bir şirket, AWS'de çok oyunculu bir oyun uygulamasına ev sahipliği yapıyor. Şirket, uygulamanın verileri milisaniyenin altında bir gecikmeyle okumasını ve geçmiş veriler üzerinde tek seferlik sorgular çalıştırmasını istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Sık erişilen veriler için Amazon RDS'yi kullanın. Verileri bir Amazon S3 klasörüne aktarmak için periyodik bir özel komut dosyası çalıştırın.

B. Verileri doğrudan bir Amazon S3 klasöründe saklayın. Eski verileri uzun vadeli depolama amacıyla S3 Glacier Deep Archive'a taşımak için bir S3 Yaşam Döngüsü ilkesi uygulayın. Amazon Athena'yı kullanarak Amazon S3'teki veriler üzerinde tek seferlik sorgular çalıştırın.

C. Sık erişilen veriler için Amazon DynamoDB'yi DynamoDB Accelerator (DAX) ile birlikte kullanın. DynamoDB tablo dışa aktarımını kullanarak verileri bir Amazon S3 klasörüne aktarın. Amazon Athena'yı kullanarak Amazon S3'teki veriler üzerinde tek seferlik sorgular çalıştırın.

D. Sık erişilen veriler için Amazon DynamoDB'yi kullanın. Amazon Kinesis Data Streams'e akışı açın. Kinesis Data Streams'teki verileri okumak için Amazon Kinesis Data Firehose'u kullanın. Kayıtları bir Amazon S3 klasöründe saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Sık erişilen veriler için Amazon DynamoDB'yi DynamoDB Accelerator (DAX) ile birlikte kullanın. DynamoDB tablo dışa aktarımını kullanarak verileri bir Amazon S3 klasörüne aktarın. Amazon Athena'yı kullanarak Amazon S3'teki veriler üzerinde tek seferlik sorgular çalıştırın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #362

Bir şirket, belirli bir ödeme kimliğine ilişkin mesajların gönderildikleri sırayla alınmasını gerektiren bir ödeme işleme sistemi kullanıyor. Aksi halde ödemeler hatalı işleme alınabilir. Bir çözüm mimarının bu gereksinimi karşılamak için hangi eylemleri gerçekleştirmesi gerekir? (İki tane seçin.)

A. Mesajları, bölüm anahtarı olarak ödeme kimliğini kullanarak bir Amazon DynamoDB tablosuna yazın.

B. Bölüm anahtarı olarak ödeme kimliğini kullanarak mesajları bir Amazon Kinesis veri akışına yazın.

C. Ödeme kimliğini anahtar olarak kullanarak mesajları bir Amazon ElastiCache for Memcached kümesine yazın.

D. Mesajları bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın. Ödeme kimliğini kullanmak için mesaj özelliğini ayarlayın.

E. Mesajları bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna yazın. Mesaj grubunu ödeme kimliğini kullanacak şekilde ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Bölüm anahtarı olarak ödeme kimliğini kullanarak mesajları bir Amazon Kinesis veri akışına yazın. Mesajları bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna yazın. Mesaj grubunu ödeme kimliğini kullanacak şekilde ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #363

Bir şirket, ayrı skor tablosu, eşleştirme ve kimlik doğrulama hizmetlerine aynı anda benzersiz etkinlikler göndermesi gereken bir oyun sistemi inşa ediyor. Şirketin, olayların sırasını garanti eden bir AWS olay odaklı sisteme ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EventBridge olay veri yolu

B. Amazon Simple Notification Service (Amazon SNS) FIFO konuları

C. Amazon Simple Notification Service (Amazon SNS) standart konuları

D. Amazon Simple Queue Service (Amazon SQS) FIFO kuyrukları

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Simple Notification Service (Amazon SNS) FIFO konuları
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru #364

Bir hastane hastalardan semptomları toplayan yeni bir uygulama tasarlıyor. Hastane, mimaride Amazon Simple Queue Service (Amazon SQS) ve Amazon Simple Notification Service (Amazon SNS) kullanmaya karar verdi. Bir çözüm mimarı altyapı tasarımını inceliyor. Verilerin beklemede ve aktarım sırasında şifrelenmesi gerekir. Verilere yalnızca hastanenin yetkili personeli erişebilmelidir. Çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. SQS bileşenlerinde sunucu tarafı şifrelemeyi açın. Anahtar kullanımını bir dizi yetkili sorumluyla sınırlamak için varsayılan anahtar ilkesini güncelleyin.

B. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar kullanarak SNS bileşenlerinde sunucu tarafı şifrelemeyi açın. Anahtar kullanımını bir dizi yetkili sorumluyla sınırlamak için bir anahtar ilkesi uygulayın.

C. SNS bileşenlerinde şifrelemeyi açın. Anahtar kullanımını bir dizi yetkili sorumluyla sınırlamak için varsayılan anahtar ilkesini güncelleyin. TLS üzerinden yalnızca şifreli bağlantılara izin vermek için konu politikasında bir koşul ayarlayın.

D. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar kullanarak SQS bileşenlerinde sunucu tarafı şifrelemeyi açın. Anahtar kullanımını bir dizi yetkili sorumluyla sınırlamak için bir anahtar ilkesi uygulayın. TLS üzerinden yalnızca şifrelenmiş bağlantılara izin vermek için kuyruk ilkesinde bir koşul ayarlayın.

E. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar kullanarak SQS bileşenlerinde sunucu tarafı şifrelemeyi açın. Anahtar kullanımını bir dizi yetkili sorumluyla sınırlamak için bir IAM politikası uygulayın. TLS üzerinden yalnızca şifrelenmiş bağlantılara izin vermek için kuyruk ilkesinde bir koşul ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar kullanarak SNS bileşenlerinde sunucu tarafı şifrelemeyi açın. Anahtar kullanımını bir dizi yetkili sorumluyla sınırlamak için bir anahtar ilkesi uygulayın. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar kullanarak SQS bileşenlerinde sunucu tarafı şifrelemeyi açın. Anahtar kullanımını bir dizi yetkili sorumluyla sınırlamak için bir anahtar ilkesi uygulayın. TLS üzerinden yalnızca şifrelenmiş bağlantılara izin vermek için kuyruk ilkesinde bir koşul ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #365

Bir şirket Amazon RDS tarafından desteklenen bir web uygulaması çalıştırıyor. Yeni bir veritabanı yöneticisi, veritabanı tablosundaki bilgileri yanlışlıkla düzenleyerek veri kaybına neden oldu. Bu tür bir olaydan kurtulmaya yardımcı olmak için şirket, veritabanını son 30 gün içindeki herhangi bir değişiklikten 5 dakika önceki durumuna geri yükleme olanağı istiyor. Çözüm mimarı bu gereksinimi karşılamak için tasarıma hangi özelliği dahil etmelidir?

A. Replikaları okuyun

B. Manuel anlık görüntüler

C. Otomatik yedeklemeler

D. Multi-AZ dağıtımları

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Otomatik yedeklemeler
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #366

Bir şirketin web uygulaması, AWS Lambda işlevinin önündeki bir Amazon API Gateway API'sinden ve bir Amazon DynamoDB veritabanından oluşur. Lambda işlevi iş mantığını yönetir ve DynamoDB tablosu verileri barındırır. Uygulama, uygulamanın bireysel kullanıcılarını tanımlamak için Amazon Cognito kullanıcı havuzlarını kullanır. Bir çözüm mimarının, yalnızca aboneliği olan kullanıcıların premium içeriğe erişebilmesi için uygulamayı güncellemesi gerekir. Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. API Ağ Geçidi API'sinde API önbelleğe almayı ve azaltmayı etkinleştirin.

B. API Gateway API'sinde AWS WAF'ı kurun. Aboneliği olan kullanıcıları filtrelemek için bir kural oluşturun.

C. DynamoDB tablosundaki premium içeriğe ayrıntılı IAM izinleri uygulayın.

D. Aboneliği olmayan kullanıcıların erişimini sınırlamak için API kullanım planlarını ve API anahtarlarını uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Aboneliği olmayan kullanıcıların erişimini sınırlamak için API kullanım planları ve API anahtarları uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #367

Bir şirket, istekleri dünya çapındaki kullanıcılara yönelik UDP tabanlı uygulamasına yönlendirmek için Amazon Route 53 gecikme tabanlı yönlendirmeyi kullanıyor. Uygulama, şirketin Amerika Birleşik Devletleri, Asya ve Avrupa'daki şirket içi veri merkezlerinde bulunan yedek sunucularda barındırılmaktadır. Şirketin uyumluluk gereklilikleri, uygulamanın şirket içinde barındırılması gerektiğini belirtmektedir. Şirket, uygulamanın performansını ve kullanılabilirliğini artırmak istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Şirket içi uç noktaları adreslemek için üç AWS Bölgesinde üç Ağ Yük Dengeleyicisini (NLB) yapılandırın. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve NLB'leri uç noktaları olarak kaydedin. Hızlandırıcı DNS'sini işaret eden bir CNAME kullanarak uygulamaya erişim sağlayın.

B. Şirket içi uç noktaları adreslemek için üç AWS Bölgesinde üç Uygulama Yük Dengeleyicisini (ALB) yapılandırın. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve ALB'leri uç noktaları olarak kaydedin. Hızlandırıcı DNS'sini işaret eden bir CNAME kullanarak uygulamaya erişim sağlayın.

C. Şirket içi uç noktaları adreslemek için üç AWS Bölgesinde üç Ağ Yük Dengeleyicisini (NLB) yapılandırın. Route 53'te, üç NLB'ye işaret eden gecikmeye dayalı bir kayıt oluşturun ve bunu bir Amazon CloudFront dağıtımı için kaynak olarak kullanın. CloudFront DNS'ye işaret eden bir CNAME kullanarak uygulamaya erişim sağlayın.

D. Şirket içi uç noktaları adreslemek için üç AWS Bölgesinde üç Uygulama Yük Dengeleyicisini (ALB) yapılandırın. Route 53'te, üç ALB'ye işaret eden gecikmeye dayalı bir kayıt oluşturun ve bunu bir Amazon CloudFront dağıtımı için kaynak olarak kullanın. CloudFront DNS'ye işaret eden bir CNAME kullanarak uygulamaya erişim sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Şirket içi uç noktaları adreslemek için üç AWS Bölgesinde üç Ağ Yük Dengeleyicisini (NLB) yapılandırın. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve NLB'leri uç noktaları olarak kaydedin. Hızlandırıcı DNS'sini işaret eden bir CNAME kullanarak uygulamaya erişim sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #368

Bir çözüm mimarı, tüm yeni kullanıcıların IAM kullanıcı şifreleri için belirli karmaşıklık gereksinimlerine ve zorunlu rotasyon sürelerine sahip olmasını ister. Çözüm mimarı bunu başarmak için ne yapmalıdır?

A. AWS hesabının tamamı için genel bir şifre politikası belirleyin.

B. AWS hesabındaki her IAM kullanıcısı için bir şifre politikası belirleyin.

C. Parola gereksinimlerini ayarlamak için üçüncü taraf satıcı yazılımını kullanın.

D. Parolayı uygun gereksinimlerle ayarlamak için Create_newuser olayına bir Amazon CloudWatch kuralı ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS hesabının tamamı için genel bir şifre politikası belirleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #369

Bir şirket, bir uygulamayı Amazon EC2 Linux bulut sunucularına taşıdı. Bu EC2 bulut sunucularından biri, bir zamanlamaya göre 1 saatlik birden fazla görevi çalıştırır. Bu görevler farklı ekipler tarafından yazılmıştır ve ortak bir programlama dili yoktur. Şirket, bu görevlerin tek bir örnekte yürütülmesi sırasında performans ve ölçeklenebilirlik konusunda endişeleniyor. Bir çözüm mimarının bu endişeleri çözecek bir çözüm uygulaması gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Görevleri iş olarak çalıştırmak için AWS Batch'i kullanın. Amazon EventBridge'i (Amazon CloudWatch Events) kullanarak işleri planlayın.

B. EC2 örneğini bir konteynere dönüştürün. Görevleri iş olarak çalıştırmak üzere isteğe bağlı kapsayıcıyı oluşturmak için AWS App Runner'ı kullanın.

C. Görevleri AWS Lambda işlevlerine kopyalayın. Amazon EventBridge'i (Amazon CloudWatch Events) kullanarak Lambda işlevlerini zamanlayın.

D. Görevleri çalıştıran EC2 bulut sunucusunun bir Amazon Machine Image'ını (AMI) oluşturun. Örneğin birden fazla kopyasını çalıştırmak için AMI ile bir Otomatik Ölçeklendirme grubu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Görevleri iş olarak çalıştırmak için AWS Batch'i kullanın. Amazon EventBridge'i (Amazon CloudWatch Events) kullanarak işleri planlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #370

Bir şirket, VPC'de halka açık üç katmanlı bir web uygulaması çalıştırıyor. Uygulama, birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularında çalışır. Özel alt ağlarda çalışan EC2 bulut sunucularının internet üzerinden bir lisans sunucusuyla iletişim kurması gerekir. Şirketin operasyonel bakımı en aza indirecek yönetilen bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri karşılıyor?

A. Genel bir alt ağda bir NAT örneği sağlayın. Her özel alt ağın rota tablosunu, NAT örneğine işaret eden varsayılan bir rota ile değiştirin.

B. Özel bir alt ağda bir NAT örneği sağlayın. Her özel alt ağın rota tablosunu, NAT örneğine işaret eden varsayılan bir rota ile değiştirin.

C. Genel bir alt ağda bir NAT ağ geçidi sağlayın. Her özel alt ağın rota tablosunu, NAT ağ geçidine işaret eden varsayılan bir rota ile değiştirin.

D. Özel bir alt ağda bir NAT ağ geçidi sağlayın. Her özel alt ağın rota tablosunu, NAT ağ geçidine işaret eden varsayılan bir rota ile değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Genel bir alt ağda bir NAT ağ geçidi sağlayın. Her özel alt ağın rota tablosunu, NAT ağ geçidine işaret eden varsayılan bir rota ile değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #371

Bir şirketin dijital medya akışı uygulamasını barındırmak için bir Amazon Elastic Kubernetes Service (Amazon EKS) kümesi oluşturması gerekir. EKS kümesi, depolama için Amazon Elastic Block Store (Amazon EBS) birimleri tarafından desteklenen bir yönetilen düğüm grubu kullanacaktır. Şirketin, AWS Key Management Service'de (AWS KMS) depolanan, müşteri tarafından yönetilen bir anahtarı kullanarak aktif olmayan tüm verileri şifrelemesi gerekir. Hangi eylem kombinasyonu bu gereksinimi EN AZ operasyonel giderle karşılayacaktır? (İki tane seçin.)

C. Veri şifrelemeyi gerçekleştirmek için müşteri tarafından yönetilen anahtarı kullanan bir Kubernetes eklentisi kullanın.

B. EKS kümesini oluşturduktan sonra EBS birimlerini bulun. Müşteri tarafından yönetilen anahtarı kullanarak şifrelemeyi etkinleştirin.

C. EKS kümesinin oluşturulacağı AWS Bölgesinde EBS şifrelemesini varsayılan olarak etkinleştirin. Müşteri tarafından yönetilen anahtarı varsayılan anahtar olarak seçin.

D. EKS kümesini oluşturun. Müşteri tarafından yönetilen anahtara izin veren bir politikaya sahip bir IAM rolü oluşturun. Rolü EKS kümesiyle ilişkilendirin.

E. Müşteri tarafından yönetilen anahtarı EKS kümesinde Kubernetes sırrı olarak saklayın. EBS birimlerini şifrelemek için müşteri tarafından yönetilen anahtarı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** EKS kümesinin oluşturulacağı AWS Bölgesinde EBS şifrelemesini varsayılan olarak etkinleştirin. Müşteri tarafından yönetilen anahtarı varsayılan anahtar olarak seçin. EKS kümesini oluşturun. Müşteri tarafından yönetilen anahtara izin veren bir politikaya sahip bir IAM rolü oluşturun. Rolü EKS kümesiyle ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #372

Bir şirket Oracle veritabanını AWS'ye taşımak istiyor. Veritabanı, yüksek çözünürlüklü ve coğrafi kodla tanımlanan milyonlarca coğrafi bilgi sistemi (GIS) görüntüsünü içeren tek bir tablodan oluşur. Bir doğal afet meydana geldiğinde her birkaç dakikada bir on binlerce görüntü güncellenir. Her coğrafi kodun kendisiyle ilişkilendirilmiş tek bir resmi veya satırı vardır. Şirket, bu tür etkinlikler sırasında kullanılabilirliği yüksek ve ölçeklenebilir bir çözüm istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Görüntüleri ve coğrafi kodları bir veritabanı tablosunda saklayın. Amazon RDS Multi-AZ veritabanı bulut sunucusunda çalışan Oracle'ı kullanın.

B. Görüntüleri Amazon S3 klasörlerinde saklayın. Anahtar olarak coğrafi kod ve değer olarak görüntü S3 URL'si ile Amazon DynamoDB'yi kullanın.

C. Görüntüleri ve coğrafi kodları bir Amazon DynamoDB tablosunda saklayın. Yüksek yük zamanlarında DynamoDB Accelerator'ı (DAX) yapılandırın.

D. Görüntüleri Amazon S3 klasörlerinde saklayın. Coğrafi kodları ve görüntü S3 URL'lerini bir veritabanı tablosunda saklayın. Amazon RDS Multi-AZ veritabanı bulut sunucusunda çalışan Oracle'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Görüntüleri Amazon S3 klasörlerinde saklayın. Anahtar olarak coğrafi kod ve değer olarak görüntü S3 URL'si ile Amazon DynamoDB'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #373

Bir şirketin otomobillerdeki IoT sensörlerinden veri toplayan bir uygulaması var. Veriler Amazon Kinesis Data Firehose aracılığıyla Amazon S3'e aktarılır ve depolanır. Veriler her yıl trilyonlarca S3 nesnesi üretiyor. Şirket her sabah, bir dizi makine öğrenimi (ML) modelini yeniden eğitmek için önceki 30 günün verilerini kullanıyor. Şirket, analiz yapmak ve diğer makine öğrenimi modellerini eğitmek için yılda dört kez önceki 12 aya ait verileri kullanıyor. Veriler 1 yıla kadar minimum gecikmeyle mevcut olmalıdır. 1 yıl sonra verilerin arşiv amaçlı saklanması gerekir. Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılıyor?

A. S3 Intelligent-Tiering depolama sınıfını kullanın. Nesneleri 1 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

B. S3 Intelligent-Tiering depolama sınıfını kullanın. Nesneleri 1 yıl sonra otomatik olarak S3 Glacier Deep Archive'a taşımak için S3 Intelligent-Tiering'i yapılandırın.

C. S3 Standart-Seyrek Erişim (S3 Standart-IA) depolama sınıfını kullanın. Nesneleri 1 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

D. S3 Standart depolama sınıfını kullanın. Nesneleri 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) ve ardından 1 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 Standart depolama sınıfını kullanın. Nesneleri 30 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) ve ardından 1 yıl sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #374

Bir şirket, us-east-1 Bölgesi'ndeki üç ayrı VPC'de çeşitli iş uygulamaları çalıştırıyor. Uygulamaların VPC'ler arasında iletişim kurabilmesi gerekir. Uygulamaların ayrıca, şirket içi tek bir veri merkezinde çalışan gecikmeye duyarlı bir uygulamaya her gün yüzlerce gigabayt veriyi tutarlı bir şekilde gönderebilmesi gerekir. Bir çözüm mimarının, maliyet etkinliğini en üst düzeye çıkaran bir ağ bağlantısı çözümü tasarlaması gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Veri merkezinden AWS'ye üç AWS Siteden Siteye VPN bağlantısı yapılandırın. Her VPC için bir VPN bağlantısı yapılandırarak bağlantı kurun.

B. Her VPC'de bir üçüncü taraf sanal ağ cihazını başlatın. Veri merkezi ile her sanal cihaz arasında bir IPsec VPN tüneli oluşturun.

C. Veri merkezinden us-east-1'deki bir Direct Connect ağ geçidine üç AWS Direct Connect bağlantısı kurun. Her VPC'yi Direct Connect bağlantılarından birini kullanacak şekilde yapılandırarak bağlantı kurun.

D. Veri merkezinden AWS'ye bir AWS Direct Connect bağlantısı kurun. Bir geçiş ağ geçidi oluşturun ve her VPC'yi geçiş ağ geçidine ekleyin. Direct Connect bağlantısı ile toplu taşıma ağ geçidi arasında bağlantı kurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veri merkezinden AWS'ye bir AWS Direct Connect bağlantısı kurun. Bir geçiş ağ geçidi oluşturun ve her VPC'yi geçiş ağ geçidine ekleyin. Direct Connect bağlantısı ile toplu taşıma ağ geçidi arasında bağlantı kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #375

Bir e-ticaret şirketi, sipariş işleme görevlerini tamamlamak için çeşitli sunucusuz işlevleri ve AWS hizmetlerini içeren dağıtılmış bir uygulama geliştiriyor. Bu görevler, iş akışının bir parçası olarak manuel onaylar gerektirir. Bir çözüm mimarının sipariş işleme uygulaması için bir mimari tasarlaması gerekir. Çözümün birden fazla AWS Lambda işlevini duyarlı sunucusuz uygulamalarda birleştirebilmesi gerekir. Çözüm ayrıca Amazon EC2 bulut sunucularında, konteynerlerde veya şirket içi sunucularda çalışan veri ve hizmetleri de düzenlemelidir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Uygulamayı oluşturmak için AWS Step Functions'ı kullanın.

B. Tüm uygulama bileşenlerini bir AWS Glue işine entegre edin.

C. Uygulamayı oluşturmak için Amazon Simple Queue Service'i (Amazon SQS) kullanın.

D. Uygulamayı oluşturmak için AWS Lambda işlevlerini ve Amazon EventBridge olaylarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı oluşturmak için AWS Step Functions'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #376

Bir şirket MySQL Veritabanı bulut sunucusu için Amazon RDS'yi başlattı. Veritabanına olan bağlantıların çoğu sunucusuz uygulamalardan geliyor. Veritabanına gelen uygulama trafiği rastgele aralıklarla önemli ölçüde değişir. Talebin yoğun olduğu zamanlarda kullanıcılar, uygulamalarında veritabanı bağlantısı reddi hatalarıyla karşılaşıldığını bildiriyor. Hangi çözüm bu sorunu EN AZ operasyonel ek yük ile çözecektir?

A. RDS Proxy'sinde bir proxy oluşturun. Kullanıcı uygulamalarını RDS Proxy aracılığıyla veritabanı bulut sunucusunu kullanacak şekilde yapılandırın.

B. Kullanıcı uygulamaları ile veritabanı bulut sunucusu arasında Amazon ElastiCache for Memcached'i dağıtın.

C. Veritabanı bulut sunucusunu daha yüksek G/Ç kapasitesine sahip farklı bir bulut sunucusu sınıfına taşıyın. Kullanıcıların uygulamalarını yeni veritabanı bulut sunucusunu kullanacak şekilde yapılandırın.

D. Veritabanı bulut sunucusu için Multi-AZ'yi yapılandırın. Kullanıcıların uygulamalarını veritabanı bulut sunucuları arasında geçiş yapacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** RDS Proxy'sinde bir proxy oluşturun. Kullanıcı uygulamalarını RDS Proxy aracılığıyla veritabanı bulut sunucusunu kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #377

Bir şirket yakın zamanda Amazon EC2 bulut sunucuları için işletim sistemi sürümleri, düzeltme ekleri ve yüklü yazılımlar hakkındaki bilgileri merkezileştirmek amacıyla yeni bir denetim sistemi kurdu. Bir çözüm mimarı, EC2 Otomatik Ölçeklendirme grupları aracılığıyla sağlanan tüm bulut sunucularının başlatılıp sonlandırıldığı anda raporları denetim sistemine başarılı bir şekilde göndermesini sağlamalıdır. Hangi çözüm bu hedeflere EN verimli şekilde ulaşır?

C. Denetim sistemine veri göndermek için planlanmış bir AWS Lambda işlevini kullanın ve tüm EC2 bulut sunucularında uzaktan bir komut dosyası çalıştırın.

B. Bulut sunucuları başlatıldığında ve sonlandırıldığında denetim sistemine veri göndermek üzere özel bir komut dosyası çalıştırmak için EC2 Otomatik Ölçeklendirme yaşam döngüsü kancalarını kullanın.

C. Örnekler başlatıldığında ve sonlandırıldığında denetim sistemine veri göndermek amacıyla kullanıcı verileri aracılığıyla özel bir komut dosyası çalıştırmak için EC2 Otomatik Ölçeklendirme başlatma yapılandırmasını kullanın.

D. Denetim sistemine veri göndermek için örnek işletim sisteminde özel bir komut dosyası çalıştırın. Bulut sunucusu başlatıldığında ve sonlandırıldığında EC2 Otomatik Ölçeklendirme grubu tarafından çağrılacak komut dosyasını yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bulut sunucuları başlatıldığında ve sonlandırıldığında denetim sistemine veri göndermek üzere özel bir komut dosyası çalıştırmak için EC2 Otomatik Ölçeklendirme yaşam döngüsü kancalarını kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #378

Bir şirket, Otomatik Ölçeklendirme grubundaki istemci ve sunucular arasındaki iletişim için UDP'yi kullanan, gerçek zamanlı çok oyunculu bir oyun geliştiriyor. Gün içinde talepte ani artışlar bekleniyor, bu nedenle oyun sunucusu platformunun buna göre uyum sağlaması gerekiyor. Geliştiriciler, oyuncu puanlarını ve diğer ilişkisel olmayan verileri, müdahaleye gerek kalmadan ölçeklenebilecek bir veritabanı çözümünde depolamak istiyor. Bir çözüm mimarı hangi çözümü önermelidir?

C. Trafik dağıtımı için Amazon Route 53'ü ve veri depolama için Amazon Aurora Serverless'ı kullanın.

B. Trafik dağıtımı için bir Network Load Balancer ve veri depolama için isteğe bağlı Amazon DynamoDB kullanın.

C. Trafik dağıtımı için bir Network Load Balancer ve veri depolama için Amazon Aurora Global Database kullanın.

D. Trafik dağıtımı için Application Load Balancer'ı ve veri depolama için Amazon DynamoDB global tablolarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Trafik dağıtımı için Network Load Balancer'ı ve veri depolama için isteğe bağlı Amazon DynamoDB'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #379

Bir şirket, AWS Lambda ile entegre bir Amazon API Gateway API arka ucunu kullanan bir ön uç uygulamasını barındırıyor. API istek aldığında Lambda işlevi birçok kitaplığı yükler. Daha sonra Lambda işlevi bir Amazon RDS veritabanına bağlanır, verileri işler ve verileri ön uç uygulamaya geri gönderir. Şirket, operasyonlarında en az sayıda değişiklikle tüm kullanıcıları için yanıt gecikmesinin mümkün olduğunca düşük olmasını sağlamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. API'yi atlayarak sorguları daha hızlı hale getirmek için ön uç uygulaması ile veritabanı arasında bir bağlantı kurun.

B. İstekleri işleyen Lambda işlevi için sağlanan eşzamanlılığı yapılandırın.

C. Benzer veri kümelerinin daha hızlı alınması için sorgu sonuçlarını Amazon S3'te önbelleğe alın.

D. Lambda'nın aynı anda kurabileceği bağlantı sayısını artırmak için veritabanının boyutunu artırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İstekleri işleyen Lambda işlevi için sağlanan eşzamanlılığı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #380

Bir şirket şirket içi iş yükünü AWS Cloud'a taşıyor. Şirket halihazırda birkaç Amazon EC2 bulut sunucusu ve Amazon RDS DB bulut sunucusu kullanıyor. Şirket, EC2 bulut sunucularını ve veritabanı bulut sunucularını iş saatleri dışında otomatik olarak başlatıp durduran bir çözüm istiyor. Çözüm, maliyeti ve altyapı bakımını en aza indirmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Elastik yeniden boyutlandırmayı kullanarak EC2 örneklerini ölçeklendirin. Veritabanı bulut sunucularını iş saatleri dışında sıfıra ölçeklendirin.

B. EC2 bulut sunucularını ve veritabanı bulut sunucularını belirli bir programa göre otomatik olarak başlatacak ve durduracak iş ortağı çözümleri için AWS Marketplace'i keşfedin.

C. Başka bir EC2 bulut sunucusunu başlatın. Mevcut EC2 bulut sunucularını ve veritabanı bulut sunucularını bir zamanlamaya göre başlatacak ve durduracak kabuk komut dosyalarını çalıştırmak için bir crontab zamanlaması yapılandırın.

D. EC2 bulut sunucularını ve veritabanı bulut sunucularını başlatacak ve durduracak bir AWS Lambda işlevi oluşturun. Amazon EventBridge'i Lambda işlevini belirli bir programa göre çağıracak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** EC2 bulut sunucularını ve veritabanı bulut sunucularını başlatacak ve durduracak bir AWS Lambda işlevi oluşturun. Amazon EventBridge'i Lambda işlevini belirli bir programa göre çağıracak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #381

Bir şirket, PostgreSQL veritabanı içeren üç katmanlı bir web uygulamasına ev sahipliği yapıyor. Veritabanı belgelerdeki meta verileri saklar. Şirket, her ay bir raporda incelediği belgeleri almak için meta verilerde anahtar terimleri arar. Belgeler Amazon S3'te depolanır. Belgeler genellikle yalnızca bir kez yazılır, ancak sıklıkla güncellenirler. İlişkisel sorguların kullanılmasıyla raporlama süreci birkaç saat sürer. Raporlama süreci herhangi bir belge değişikliğini veya yeni belge eklenmesini engellememelidir. Bir çözüm mimarının raporlama sürecini hızlandıracak bir çözüm uygulaması gerekir. Uygulama kodunda EN AZ miktarda değişiklik yaparak bu gereksinimleri hangi çözüm karşılayacaktır?

A. Okuma replikası içeren yeni bir Amazon DocumentDB (MongoDB uyumluluğuyla) kümesi kurun. Raporları oluşturmak için okuma kopyasını ölçeklendirin.

B. Aurora Replikası içeren yeni bir Amazon Aurora PostgreSQL Veritabanı kümesi kurun. Raporları oluşturmak için Aurora Replikasına sorgular gönderin.

C. PostgreSQL Multi-AZ Veritabanı bulut sunucusu için yeni bir Amazon RDS ayarlayın. Raporlama modülünün birincil düğümü etkilememesi için raporlama modülünü ikincil RDS düğümünü sorgulayacak şekilde yapılandırın.

D. Belgeleri depolamak için yeni bir Amazon DynamoDB tablosu oluşturun. Yeni belge girişlerini desteklemek için sabit bir yazma kapasitesi kullanın. Raporları desteklemek için okuma kapasitesini otomatik olarak ölçeklendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Aurora Replikası içeren yeni bir Amazon Aurora PostgreSQL Veritabanı kümesi kurun. Raporları oluşturmak için Aurora Replikasına sorgular gönderin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #382

Bir şirketin AWS'de kullanıcı cihazlarından sensör verilerini alan üç katmanlı bir uygulaması var. Trafik bir Ağ Yük Dengeleyicisi (NLB) üzerinden, ardından web katmanı için Amazon EC2 bulut sunucularına ve son olarak uygulama katmanı için EC2 bulut sunucularına akar. Uygulama katmanı bir veritabanına çağrı yapar. Bir çözüm mimarı aktarım halindeki verilerin güvenliğini artırmak için ne yapmalıdır?

A. TLS dinleyicisini yapılandırın. Sunucu sertifikasını NLB'ye dağıtın.

B. AWS Shield Advanced'i yapılandırın. NLB'de AWS WAF'ı etkinleştirin.

C. Yük dengeleyiciyi Application Load Balancer (ALB) olarak değiştirin. ALB'de AWS WAF'ı etkinleştirin.

D. AWS Key Management Service'i (AWS KMS) kullanarak EC2 bulut sunucularındaki Amazon Elastic Block Store (Amazon EBS) birimini şifreleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** TLS dinleyicisini yapılandırın. Sunucu sertifikasını NLB'ye dağıtın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru #383

Bir şirket, kullanıma hazır ticari bir uygulamayı şirket içi veri merkezinden AWS'ye geçirmeyi planlıyor. Yazılım, öngörülebilir kapasite ve çalışma süresi gereksinimlerine sahip soketleri ve çekirdekleri kullanan bir yazılım lisanslama modeline sahiptir. Şirket, bu yılın başlarında satın aldığı mevcut lisanslarını kullanmak istiyor. Hangi Amazon EC2 fiyatlandırma seçeneği EN uygun maliyetlidir?

A. Tahsis Edilmiş Rezerve Ana Bilgisayarlar

B. Özel İsteğe Bağlı Ana Bilgisayarlar

C. Tahsis Edilmiş Rezerve Bulut Sunucuları

D. Özel İsteğe Bağlı Bulut Sunucuları

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Özel Ayrılmış Ana Bilgisayarlar
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #384

Bir şirket, birden fazla Erişilebilirlik Alanında Amazon EC2 Linux bulut sunucularında bir uygulama çalıştırıyor. Uygulamanın yüksek oranda kullanılabilir ve Taşınabilir İşletim Sistemi Arayüzü (POSIX) uyumlu bir depolama katmanına ihtiyacı vardır. Depolama katmanı maksimum veri dayanıklılığı sağlamalı ve EC2 bulut sunucuları arasında paylaşılabilir olmalıdır. Depolama katmanındaki verilere ilk 30 gün boyunca sıklıkla erişilecek, bu süreden sonra ise seyrek olarak erişilecektir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon S3 Standard depolama sınıfını kullanın. Sık erişilmeyen verileri S3 Glacier'a taşımak için bir S3 Yaşam Döngüsü ilkesi oluşturun.

B. Amazon S3 Standard depolama sınıfını kullanın. Sık erişilmeyen verileri S3 Standart-Seyrek Erişime (S3 Standart-IA) taşımak için bir S3 Yaşam Döngüsü ilkesi oluşturun.

C. Amazon Elastic File System (Amazon EFS) Standard depolama sınıfını kullanın. Sık erişilmeyen verileri EFS Standart-Nadir Erişime (EFS Standart-IA) taşımak için bir yaşam döngüsü yönetimi ilkesi oluşturun.

D. Amazon Elastic File System (Amazon EFS) Tek Bölge depolama sınıfını kullanın. Sık erişilmeyen verileri EFS Tek Bölge-İnfrequent Access'e (EFS Tek Bölge-IA) taşımak için bir yaşam döngüsü yönetimi ilkesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) Standard depolama sınıfını kullanın. Sık erişilmeyen verileri EFS Standart-Nadir Erişime (EFS Standart-IA) taşımak için bir yaşam döngüsü yönetimi ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru #385

Bir çözüm mimarı yeni bir VPC tasarımı oluşturuyor. Yük dengeleyici için iki genel alt ağ, web sunucuları için iki özel alt ağ ve MySQL için iki özel alt ağ vardır. Web sunucuları yalnızca HTTPS kullanır. Çözüm mimarı, yük dengeleyici için 0.0.0.0/0'dan 443 numaralı bağlantı noktasına izin veren bir güvenlik grubu oluşturdu. Şirket politikası, her kaynağın görevlerini yerine getirebilmesi için gereken en az erişime sahip olmasını gerektirir. Çözüm mimarı bu gereksinimleri karşılamak için hangi ek yapılandırma stratejisini kullanmalıdır?

A. Web sunucuları için bir güvenlik grubu oluşturun ve 0.0.0.0/0'dan 443 numaralı bağlantı noktasına izin verin. MySQL sunucuları için bir güvenlik grubu oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

B. Web sunucuları için bir ağ ACL'si oluşturun ve 0.0.0.0/0'dan 443 numaralı bağlantı noktasına izin verin. MySQL sunucuları için bir ağ ACL'si oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

C. Web sunucuları için bir güvenlik grubu oluşturun ve yük dengeleyiciden 443 numaralı bağlantı noktasına izin verin. MySQL sunucuları için bir güvenlik grubu oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

D. Web sunucuları için bir ağ ACL'si oluşturun ve yük dengeleyiciden 443 numaralı bağlantı noktasına izin verin. MySQL sunucuları için bir ağ ACL'si oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Web sunucuları için bir güvenlik grubu oluşturun ve yük dengeleyiciden 443 numaralı bağlantı noktasına izin verin. MySQL sunucuları için bir güvenlik grubu oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #386

Bir e-ticaret şirketi AWS'de çok katmanlı bir uygulama çalıştırıyor. Hem ön uç hem de arka uç katmanları Amazon EC2'de çalışır ve veritabanı Amazon RDS for MySQL'de çalışır. Arka uç katmanı, RDS örneğiyle iletişim kurar. Veritabanından aynı veri kümelerini döndürmek için sık sık yapılan çağrılar performans yavaşlamalarına neden oluyor. Arka ucun performansını artırmak için hangi eylem gerçekleştirilmelidir?

A. Veritabanı çağrılarını depolamak için Amazon SNS'yi uygulayın.

B. Büyük veri kümelerini önbelleğe almak için Amazon ElastiCache'i uygulayın.

C. Veritabanı çağrılarını önbelleğe almak için MySQL için bir RDS okuma kopyası uygulayın.

D. Çağrıların veritabanına akışını sağlamak için Amazon Kinesis Data Firehose'u uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Büyük veri kümelerini önbelleğe almak için Amazon ElastiCache'i uygulayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #387

Yeni bir çalışan, dağıtım mühendisi olarak bir şirkete katıldı. Dağıtım mühendisi, birden fazla AWS kaynağı oluşturmak için AWS CloudFormation şablonlarını kullanacak. Bir çözüm mimarı, dağıtım mühendisinin iş faaliyetlerini en az ayrıcalık ilkesine uyarak gerçekleştirmesini ister. Çözüm mimarı bu hedefe ulaşmak için hangi eylem kombinasyonunu gerçekleştirmelidir? (İki tane seçin.)

A. Dağıtım mühendisinin, AWS CloudFormation yığın işlemlerini gerçekleştirmek için AWS hesabı kök kullanıcı kimlik bilgilerini kullanmasını sağlayın.

B. Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını PowerUsers IAM politikasının eklendiği bir gruba ekleyin.

C. Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını, AdministratorAccess IAM politikasının eklendiği bir gruba ekleyin.

D. Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını yalnızca AWS CloudFormation eylemlerine izin veren bir IAM politikasına sahip bir gruba ekleyin.

E. Dağıtım mühendisinin AWS CloudFormation yığınına özel izinleri açıkça tanımlaması ve bu IAM rolünü kullanarak yığınları başlatması için bir IAM rolü oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E`
> - **Önerilen Çözüm:** Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını yalnızca AWS CloudFormation eylemlerine izin veren bir IAM politikasına sahip bir gruba ekleyin. Dağıtım mühendisinin AWS CloudFormation yığınına özel izinleri açıkça tanımlaması ve bu IAM rolünü kullanarak yığınları başlatması için bir IAM rolü oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #388

Bir şirket, VPC'de iki katmanlı bir web uygulaması dağıtıyor. Web katmanı, birden fazla Erişilebilirlik Alanını kapsayan genel alt ağlara sahip bir Amazon EC2 Auto Scaling grubu kullanıyor. Veritabanı katmanı, ayrı özel alt ağlardaki bir Amazon RDS for MySQL veritabanı örneğinden oluşur. Web katmanı, ürün bilgilerini almak için veritabanına erişim gerektirir. Web uygulaması amaçlandığı gibi çalışmıyor. Web uygulaması veritabanına bağlanamadığını bildiriyor. Veritabanının çalışır durumda olduğu onaylanır. Ağ ACL'lerine, güvenlik gruplarına ve yönlendirme tablolarına ilişkin tüm yapılandırmalar hâlâ varsayılan durumlarındadır. Bir çözüm mimarı uygulamayı düzeltmek için ne önermelidir?

A. Web katmanının EC2 bulut sunucularından gelen trafiğe izin vermek için özel alt ağın ağ ACL'sine açık bir kural ekleyin.

B. Web katmanının EC2 bulut sunucuları ile veritabanı katmanı arasındaki trafiğe izin vermek için VPC rota tablosuna bir rota ekleyin.

C. Web katmanının EC2 örneklerini ve veritabanı katmanının RDS örneğini iki ayrı VPC'ye dağıtın ve VPC eşlemesini yapılandırın.

D. Web katmanları güvenlik grubundan gelen trafiğe izin vermek için veritabanı katmanının RDS örneğinin güvenlik grubuna bir gelen kuralı ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Web katmanları güvenlik grubundan gelen trafiğe izin vermek için veritabanı katmanının RDS örneğinin güvenlik grubuna bir gelen kuralı ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #389

Bir şirketin, tek bir Erişilebilirlik Alanındaki Amazon RDS for MySQL veritabanı örneğinde depolanan, çevrimiçi reklamcılık işine yönelik büyük bir veri kümesi vardır. Şirket, iş raporlama sorgularının üretim veritabanı bulut sunucusuna yazma işlemlerini etkilemeden çalışmasını istiyor. Hangi çözüm bu gereksinimleri karşılıyor?

A. İş raporlama sorgularını işlemek için RDS okuma kopyalarını dağıtın.

B. Veritabanı örneğini bir Elastic Load Balancer'ın arkasına yerleştirerek yatay olarak ölçeklendirin.

C. Yazma işlemlerini ve sorguları gerçekleştirmek için veritabanı bulut sunucusunun ölçeğini daha büyük bir bulut sunucusu tipine yükseltin.

D. İş raporlama sorgularını işlemek için veritabanı bulut sunucusunu birden fazla Erişilebilirlik Alanına dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İş raporlama sorgularını işlemek için RDS okuma kopyalarını dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #390

Bir şirket, Amazon EC2 bulut sunucularından oluşan bir filoda üç katmanlı bir e-ticaret uygulamasına ev sahipliği yapıyor. Örnekler, Application Load Balancer'ın (ALB) arkasındaki Otomatik Ölçeklendirme grubunda çalışır. Tüm e-ticaret verileri Amazon RDS for MariaDB Multi-AZ DB bulut sunucusunda depolanır. Şirket, işlemler sırasında müşteri oturumu yönetimini optimize etmek istiyor. Uygulamanın oturum verilerini kalıcı olarak saklaması gerekir. Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. ALB'de yapışkan oturumlar özelliğini (oturum benzeşimi) açın.

B. Müşteri oturumu bilgilerini depolamak için bir Amazon DynamoDB tablosu kullanın.

C. Kullanıcı oturumu bilgilerini yönetmek için bir Amazon Cognito kullanıcı havuzu dağıtın.

D. Müşteri oturumu bilgilerini depolamak için bir Amazon ElastiCache for Redis kümesini dağıtın.

E. Kullanıcı oturumu bilgilerini yönetmek için uygulamada AWS Systems Manager Uygulama Yöneticisini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** ALB'de yapışkan oturumlar özelliğini (oturum benzeşimi) açın. Müşteri oturumu bilgilerini depolamak için bir Amazon ElastiCache for Redis kümesini dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #391

Bir şirketin üç katmanlı durum bilgisi olmayan web uygulaması için bir yedekleme stratejisine ihtiyacı vardır. Web uygulaması, ölçeklendirme olaylarına yanıt verecek şekilde yapılandırılmış dinamik bir ölçeklendirme ilkesiyle bir Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında çalışır. Veritabanı katmanı Amazon RDS for PostgreSQL'de çalışır. Web uygulaması EC2 bulut sunucularında geçici yerel depolama gerektirmez. Şirketin kurtarma noktası hedefi (RPO) 2 saattir. Yedekleme stratejisi, bu ortam için ölçeklenebilirliği en üst düzeye çıkarmalı ve kaynak kullanımını optimize etmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. RPO'yu karşılamak için her 2 saatte bir EC2 bulut sunucularının ve veritabanının Amazon Elastic Block Store (Amazon EBS) birimlerinin anlık görüntülerini alın.

B. Amazon Elastic Block Store (Amazon EBS) anlık yedeklerini almak için bir anlık görüntü yaşam döngüsü politikası yapılandırın. RPO'yu karşılamak için Amazon RDS'de otomatik yedeklemeleri etkinleştirin.

C. Web ve uygulama katmanlarının en son Amazon Makine Görüntülerini (AMI'ler) saklayın. Amazon RDS'de otomatik yedeklemeleri etkinleştirin ve RPO'yu karşılamak için belirli bir noktaya kurtarmayı kullanın.

D. Her 2 saatte bir EC2 bulut sunucularının Amazon Elastic Block Store (Amazon EBS) birimlerinin anlık görüntülerini alın. Amazon RDS'de otomatik yedeklemeleri etkinleştirin ve RPO'yu karşılamak için belirli bir noktaya kurtarmayı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Web ve uygulama katmanlarının en son Amazon Machine Image'larını (AMI'ler) saklayın. Amazon RDS'de otomatik yedeklemeleri etkinleştirin ve RPO'yu karşılamak için belirli bir noktaya kurtarmayı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #392

Bir şirket, AWS'de yeni bir genel web uygulamasını devreye almak istiyor. Uygulama, Amazon EC2 bulut sunucularını kullanan bir web sunucusu katmanı içerir. Uygulama ayrıca Amazon RDS for MySQL DB bulut sunucusunu kullanan bir veritabanı katmanını da içerir. Uygulama, dinamik IP adreslerine sahip küresel müşteriler için güvenli ve erişilebilir olmalıdır. Bir çözüm mimarı güvenlik gruplarını bu gereksinimleri karşılayacak şekilde nasıl yapılandırmalıdır?

A. Web sunucuları için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın. Veritabanı bulut sunucusunun güvenlik grubunu, web sunucularının güvenlik grubundan 3306 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın.

B. Web sunucuları için güvenlik grubunu, müşterilerin IP adreslerinden 443 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın. Veritabanı bulut sunucusunun güvenlik grubunu, web sunucularının güvenlik grubundan 3306 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın.

C. Web sunucuları için güvenlik grubunu, müşterilerin IP adreslerinden 443 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın. Müşterilerin IP adreslerinden 3306 numaralı bağlantı noktasında gelen trafiğe izin vermek için veritabanı bulut sunucusunun güvenlik grubunu yapılandırın.

D. Web sunucuları için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın. Veritabanı bulut sunucusunun güvenlik grubunu, 3306 numaralı bağlantı noktasında 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Web sunucuları için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın. Veritabanı bulut sunucusunun güvenlik grubunu, web sunucularının güvenlik grubundan 3306 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #393

Bir ödeme işleme şirketi, müşterileriyle olan tüm sesli iletişimi kaydeder ve ses dosyalarını bir Amazon S3 klasöründe saklar. Şirketin metni ses dosyalarından yakalaması gerekiyor. Şirket, müşterilere ait her türlü kişisel bilgileri (PII) metinden çıkarmalıdır. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Ses dosyalarını Amazon Kinesis Video Streams'i kullanarak işleyin. Bilinen PII kalıplarını taramak için bir AWS Lambda işlevini kullanın.

B. S3 klasörüne bir ses dosyası yüklendiğinde, çağrı kayıtlarını analiz etmek amacıyla bir Amazon Textract görevi başlatmak için bir AWS Lambda işlevini çağırın.

C. Bir Amazon Transcribe transkripsiyon işini PII redaksiyonu açık olarak yapılandırın. S3 klasörüne bir ses dosyası yüklendiğinde, transkripsiyon işini başlatmak için bir AWS Lambda işlevini çağırın. Çıktıyı ayrı bir S3 klasöründe saklayın.

D. Ses dosyalarını transkripsiyon açıkken alan bir Amazon Connect iletişim akışı oluşturun. Bilinen PII modellerini taramak için bir AWS Lambda işlevi ekleyin. S3 klasörüne bir ses dosyası yüklendiğinde iletişim akışını başlatmak için Amazon EventBridge'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kişisel Bilgilerin düzenlenmesi açıkken bir Amazon Transcribe transkripsiyon işi yapılandırın. S3 klasörüne bir ses dosyası yüklendiğinde, transkripsiyon işini başlatmak için bir AWS Lambda işlevini çağırın. Çıktıyı ayrı bir S3 klasöründe saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #394

Bir şirket, AWS Cloud'da çok katmanlı bir e-ticaret web uygulaması çalıştırıyor. Uygulama, Amazon RDS for MySQL Multi-AZ veritabanı bulut sunucusuna sahip Amazon EC2 bulut sunucularında çalışır. Amazon RDS, Genel Amaçlı SSD (gp3) Amazon Elastic Block Store (Amazon EBS) biriminde 2.000 GB depolama alanına sahip en yeni nesil veritabanı bulut sunucusuyla yapılandırılmıştır. Veritabanı performansı, talebin yüksek olduğu dönemlerde uygulamayı etkiler. Bir veritabanı yöneticisi, Amazon CloudWatch Logs'daki günlükleri analiz eder ve okuma ve yazma IOPS sayısı 20.000'den yüksek olduğunda uygulama performansının her zaman düştüğünü keşfeder. Bir çözüm mimarı uygulama performansını artırmak için ne yapmalıdır?

A. Hacmi manyetik bir hacimle değiştirin.

B. GP3 birimindeki IOPS sayısını artırın.

C. Birimi Tedarik Edilmiş IOPS SSD (io2) birimiyle değiştirin.

D. 2.000 GB gp3 birimini iki adet 1.000 GB gp3 birimiyle değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birimi Tedarik Edilmiş IOPS SSD (io2) birimiyle değiştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #395

Bir IAM kullanıcısı, geçen hafta üretim dağıtımı sırasında şirketlerinin hesabındaki AWS kaynaklarında birkaç yapılandırma değişikliği yaptı. Bir çözüm mimarı, birkaç güvenlik grubu kuralının istendiği gibi yapılandırılmadığını öğrendi. Çözüm mimarı, değişiklik yapmaktan hangi IAM kullanıcısının sorumlu olduğunu doğrulamak istiyor. Çözüm mimarı istenen bilgiyi bulmak için hangi hizmeti kullanmalıdır?

A. Amazon Koruma Görevi

B. Amazon Müfettişi

C. AWS CloudTrail

D. AWS Yapılandırması

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS CloudTrail
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #396

Bir şirket, AWS'de kendi kendini yöneten bir DNS hizmetini uygulamaya koydu. Çözüm aşağıdakilerden oluşur: • Farklı AWS Bölgelerindeki Amazon EC2 bulut sunucuları • AWS Global Accelerator'daki standart bir hızlandırıcının uç noktaları Şirket, çözümü DDoS saldırılarına karşı korumak istiyor. Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. AWS Shield Advanced'e abone olun. Hızlandırıcıyı korunacak bir kaynak olarak ekleyin.

B. AWS Shield Advanced'e abone olun. EC2 örneklerini korunacak kaynaklar olarak ekleyin.

C. Hıza dayalı bir kural içeren bir AWS WAF web ACL'si oluşturun. Web ACL'yi hızlandırıcıyla ilişkilendirin.

D. Hıza dayalı bir kural içeren bir AWS WAF web ACL'si oluşturun. Web ACL'yi EC2 bulut sunucularıyla ilişkilendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Shield Advanced'e abone olun. Hızlandırıcıyı korunacak bir kaynak olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru #397

Bir e-ticaret şirketinin, analiz amacıyla satış kayıtlarını toplamak ve filtrelemek için planlanmış bir günlük işi yürütmesi gerekir. Şirket, satış kayıtlarını bir Amazon S3 klasöründe saklıyor. Her nesnenin boyutu en fazla 10 GB olabilir. Satış etkinliklerinin sayısına bağlı olarak işin tamamlanması bir saat kadar sürebilir. İşin CPU ve bellek kullanımı sabittir ve önceden bilinir. Bir çözüm mimarının, işin yürütülmesi için gereken operasyonel çaba miktarını en aza indirmesi gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon EventBridge bildirimine sahip bir AWS Lambda işlevi oluşturun. EventBridge etkinliğini günde bir kez çalışacak şekilde planlayın.

B. Bir AWS Lambda işlevi oluşturun. Bir Amazon API Gateway HTTP API'si oluşturun ve API'yi işlevle entegre edin. API'yi çağıran ve işlevi çağıran, planlanmış bir Amazon EventBridge etkinliği oluşturun.

C. AWS Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. İşi çalıştırmak için kümede bir ECS görevi başlatan, planlanmış bir Amazon EventBridge etkinliği oluşturun.

D. Amazon EC2 başlatma türüne ve en az bir EC2 bulut sunucusuna sahip bir Otomatik Ölçeklendirme grubuna sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. İşi çalıştırmak için kümede bir ECS görevi başlatan, planlanmış bir Amazon EventBridge etkinliği oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Fargate başlatma türüne sahip bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. İşi çalıştırmak için kümede bir ECS görevi başlatan, planlanmış bir Amazon EventBridge etkinliği oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #398

Bir şirketin şirket içi ağa bağlı depolama (NAS) sisteminden AWS Cloud'a 600 TB veri aktarması gerekiyor. Veri aktarımının 2 hafta içinde tamamlanması gerekmektedir. Veriler hassastır ve aktarım sırasında şifrelenmelidir. Şirketin internet bağlantısı 100 Mbps yükleme hızını destekleyebiliyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

C. Dosyaları HTTPS üzerinden aktarmak için Amazon S3 çok parçalı yükleme işlevini kullanın.

B. Şirket içi NAS sistemi ile en yakın AWS Bölgesi arasında bir VPN bağlantısı oluşturun. Verileri VPN bağlantısı üzerinden aktarın.

C. Birkaç AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş etmek için AWS Snow Family konsolunu kullanın. Verileri Amazon S3'e aktarmak için cihazları kullanın.

D. Şirket konumu ile en yakın AWS Bölgesi arasında 10 Gbps AWS Direct Connect bağlantısı kurun. Verileri Amazon S3'te depolamak için verileri bir VPN bağlantısı üzerinden Bölgeye aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birkaç AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş etmek için AWS Snow Family konsolunu kullanın. Verileri Amazon S3'e aktarmak için cihazları kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #399

Bir finans şirketi AWS'de bir web uygulaması barındırıyor. Uygulama, kullanıcılara mevcut hisse senedi fiyatlarını alma olanağı sağlamak için bir Amazon API Gateway Bölgesel API uç noktası kullanıyor. Şirketin güvenlik ekibi API isteklerinin sayısında bir artış fark etti. Güvenlik ekibi, HTTP saldırılarının uygulamayı çevrimdışı duruma getirebileceğinden endişe ediyor. Bir çözüm mimarının, uygulamayı bu tür saldırılardan koruyacak bir çözüm tasarlaması gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılıyor?

A. API Gateway Bölgesel API uç noktasının önünde maksimum 24 saatlik TTL'ye sahip bir Amazon CloudFront dağıtımı oluşturun.

B. Hıza dayalı bir kuralla Bölgesel AWS WAF web ACL'si oluşturun. Web ACL'yi API Ağ Geçidi aşamasıyla ilişkilendirin.

C. Sayım ölçüsünü izlemek ve önceden tanımlanan orana ulaşıldığında güvenlik ekibini uyarmak için Amazon CloudWatch ölçümlerini kullanın.

D. API Gateway Bölgesel API uç noktasının önünde Lambda@Edge ile bir Amazon CloudFront dağıtımı oluşturun. Önceden tanımlanmış hızı aşan IP adreslerinden gelen istekleri engellemek için bir AWS Lambda işlevi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Orana dayalı bir kuralla Bölgesel AWS WAF web ACL'si oluşturun. Web ACL'yi API Ağ Geçidi aşamasıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #400

Yeni kurulan bir meteoroloji şirketi, hava durumu verilerini kullanıcılarına çevrimiçi olarak satmak için özel bir web uygulamasına sahiptir. Şirket, verilerini depolamak için Amazon DynamoDB'yi kullanıyor ve her yeni hava durumu olayı kaydedildiğinde dört dahili ekibin yöneticilerine uyarı gönderen yeni bir hizmet oluşturmak istiyor. Şirket, bu yeni hizmetin mevcut uygulamanın performansını etkilemesini istemiyor. Bir çözüm mimarı bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılamak için ne yapmalıdır?

A. Tabloya yeni olay verilerini yazmak için DynamoDB işlemlerini kullanın. Dahili ekipleri bilgilendirmek için işlemleri yapılandırın.

B. Mevcut uygulamanın dört Amazon Simple Notification Service (Amazon SNS) konusuna bir mesaj yayınlamasını sağlayın. Her takımın bir konuya abone olmasını sağlayın.

C. Tabloda Amazon DynamoDB Akışlarını etkinleştirin. Ekiplerin abone olabileceği tek bir Amazon Simple Notification Service (Amazon SNS) konusuna yazmak için tetikleyicileri kullanın.

D. Yeni öğeleri işaretlemek için her kayda özel bir özellik ekleyin. Yeni öğeler için tabloyu her dakika tarayan ve ekiplerin abone olabileceği bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna bildirimde bulunan bir cron işi yazın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tabloda Amazon DynamoDB Akışlarını etkinleştirin. Ekiplerin abone olabileceği tek bir Amazon Simple Notification Service (Amazon SNS) konusuna yazmak için tetikleyicileri kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.
