# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 04

> **Soru Aralığı:** 301 - 400 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #300

Bir şirketin eski bir uygulamayı şirket içi veri merkezinden AWS'ye taşıması gerekiyor
Donanım kapasitesi kısıtlamaları nedeniyle bulut. Uygulama 7 gün 24 saat çalışıyor
hafta. Uygulamanın veritabanı depolama alanı zamanla büyümeye devam ediyor.
Bir çözüm mimarı bu gereksinimleri EN uygun maliyetle karşılamak için ne yapmalıdır?

A. Uygulama katmanını Amazon EC2 Spot Bulut Sunucularına taşıyın. Veri depolama katmanını şuraya taşıyın:
Amazon S3.

B. Uygulama katmanını Amazon EC2 Rezerve Edilmiş Bulut Sunucularına taşıyın. Veri depolama alanını taşıyın
Amazon RDS İsteğe Bağlı Bulut Sunucularına katman.

C. Uygulama katmanını Amazon EC2 Rezerve Edilmiş Bulut Sunucularına taşıyın. Veri depolama alanını taşıyın
Amazon Aurora Rezerve Edilmiş Bulut Sunucularına katman.

D. Uygulama katmanını Amazon EC2 İsteğe Bağlı Bulut Sunucularına taşıyın. Veri depolama alanını taşıyın
Amazon RDS Rezerve Edilmiş Bulut Sunucularına katman.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulama katmanını Amazon EC2 Rezerve Edilmiş Bulut Sunucularına taşıyın. Veri depolama katmanını Amazon Aurora Rezerve Edilmiş Bulut Sunucularına taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 301
Bir üniversite araştırma laboratuvarının şirket içi bir Windows'tan 30 TB veri taşıması gerekiyor
dosya sunucusunu Windows Dosya Sunucusu için Amazon FSx'e aktarın. Laboratuvarın 1 Gbps ağ bağlantısı bulunmaktadır.
üniversitedeki diğer birçok bölümün paylaştığı şey.
Laboratuvar, performansı en üst düzeye çıkaracak bir veri taşıma hizmetini uygulamak istiyor
veri aktarımından. Ancak laboratuvarın bant genişliği miktarını kontrol edebilmesi gerekir.
Hizmetin diğer departmanlar üzerindeki etkiyi en aza indirmek için kullandığı. Veri geçişinin sürmesi gerekiyor
önümüzdeki 5 gün içinde gerçekleşecek.
Bu gereksinimleri hangi AWS çözümü karşılayacak?

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

Soru 302
Bir şirket, kullanıcıların ağır çekim video klipleri internet üzerinden yayınlamasına olanak tanıyan bir mobil uygulama oluşturmak istiyor
mobil cihazları. Şu anda uygulama video klipler çekiyor ve video klipleri ham olarak yüklüyor
Amazon S3 klasörüne biçimlendirin. Uygulama bu video klipleri doğrudan S3'ten alır
kova. Ancak videolar ham formatta büyüktür.
Kullanıcılar mobil cihazlarda ara belleğe alma ve oynatmayla ilgili sorunlar yaşıyor. şirket
uygulamanın performansını ve ölçeklenebilirliğini en üst düzeye çıkaracak çözümler uygulamak istiyor
operasyonel yükün en aza indirilmesi.
Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (İki tane seçin.)

A. İçerik teslimi ve önbelleğe alma için Amazon CloudFront'u dağıtın.

B. Video dosyalarını diğer S3 klasörlerindeki AW Bölgeleri genelinde çoğaltmak için AWS DataSync'i kullanın.

C. Video dosyalarını daha uygun formatlara dönüştürmek için Amazon Elastic Transcoder'ı kullanın.

D. İçerik dağıtımı için Yerel Alanlarda Amazon EC2 bulut sunucularından oluşan bir Otomatik Mühürleme grubu dağıtın
ve önbelleğe alma.

E. Video dosyalarını daha fazlasına dönüştürmek için Otomatik Ölçeklendirme Amazon EC2 bulut sunucuları grubunu dağıtın
uygun formatlar.

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

Soru 303
Bir şirket, Amazon Elastic Container Service üzerinde konuşlandırılan yeni bir uygulamayı kullanıma sunuyor
(Amazon ECS) kümesidir ve ECS görevleri için Fargate başlatma türünü kullanır. Şirket
Uygulamaya yüksek trafik beklendiğinden CPU ve bellek kullanımının izlenmesi
Başlat. Ancak şirket, kullanım azaldığında maliyetleri düşürmek istiyor.
Bir çözüm mimarı ne tavsiye etmelidir?

C. Önceki trafik modellerine göre belirli aralıklarla ölçeklendirmek için Amazon EC2 Auto Scaling'i kullanın.

B. Amazon ECS'yi, bir kriz tetikleyen ölçüm ihlallerine göre ölçeklendirmek için bir AWS Lambda işlevini kullanın.
Amazon CloudWatch alarmı.

C. ECS metriği ihlal edildiğinde ölçeklendirmek için basit ölçeklendirme politikalarıyla Amazon EC2 Auto Scaling'i kullanın
Amazon CloudWatch alarmını tetikleyin.

D. ECS metriği belirlendiğinde ölçeklendirmek için AWS Uygulama Otomatik Ölçeklendirmesini hedef izleme politikalarıyla birlikte kullanın.
ihlaller bir Amazon CloudWatch alarmını tetikler.

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

Soru 304
Bir şirket yakın zamanda farklı bir AWS Bölgesinde bir olağanüstü durum kurtarma sitesi oluşturdu. şirket
iki NFS dosya sistemi arasında büyük miktarda verinin ileri geri aktarılması gerekiyor
Bölgeler periyodik olarak
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

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

Soru 305
Bir şirket, barındırılan bir oyun uygulaması için paylaşılan bir depolama çözümü tasarlıyor.
AWS Bulut. Şirketin verilere erişmek için KOBİ istemcilerini kullanma becerisine ihtiyacı var. Çözüm
tamamen yönetilmesi gerekir.
Hangi AWS çözümü bu gereksinimleri karşılıyor?

A. Verileri takılabilir bir dosya sistemi olarak paylaşan bir AWS DataSync görevi oluşturun. Dosyayı bağlayın
sistemi uygulama sunucusuna aktarın.

B. Bir Amazon EC2 Windows örneği oluşturun. Windows dosya paylaşım rolünü yükleyin ve yapılandırın
örnek. Uygulama sunucusunu dosya paylaşımına bağlayın.

C. Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Dosya sistemini orijine ekleyin
sunucu. Uygulama sunucusunu dosya sistemine bağlayın.

D. Bir Amazon S3 klasörü oluşturun. S3'e erişim izni vermek için uygulamaya bir IAM rolü atayın
kova. S3 grubunu uygulama sunucusuna bağlayın.

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

Soru 306
Bir şirket, gecikmeye duyarlı bir uygulama için bellek içi bir veritabanı çalıştırmak istiyor
Amazon EC2 bulut sunucuları. Uygulama dakikada 100.000'den fazla işlem gerçekleştiriyor
ve yüksek ağ verimi gerektirir. Bir çözüm mimarının uygun maliyetli bir çözüm sunması gerekir.
Veri aktarım ücretlerini en aza indiren ağ tasarımı.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Aynı AWS Bölgesi içindeki aynı Erişilebilirlik Alanındaki tüm EC2 bulut sunucularını başlatın. Bir belirtin
EC2 bulut sunucularını başlatırken küme stratejisine sahip yerleştirme grubu.

B. Tüm EC2 bulut sunucularını aynı AWS Bölgesi içindeki farklı Erişilebilirlik Alanlarında başlatın. Bir belirtin
EC2 bulut sunucularını başlatırken bölümleme stratejisine sahip yerleştirme grubu.

C. EC2 bulut sunucularını farklı Erişilebilirlik Alanlarında başlatmak için bir Otomatik Ölçeklendirme grubu dağıtın
bir ağ kullanım hedefi.

D. EC2 bulut sunucularını farklı sürümlerde başlatmak için adımlı ölçeklendirme politikasıyla bir Otomatik Ölçeklendirme grubu dağıtın
Erişilebilirlik Alanları.

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

Soru 307
Uygulama sunucularını öncelikli olarak şirket içinde çalıştıran bir şirket,
AWS. Şirket, İnternet Küçük Bilgisayar Sistemlerini ölçeklendirme ihtiyacını en aza indirmek istiyor
Şirket içi arayüz (iSCSI) depolama. Şirket yalnızca yakın zamanda erişilen verilerinin kullanılmasını istiyor
yerel olarak depolanmaya devam eder.
Şirket bu gereksinimleri karşılamak için hangi AWS çözümünü kullanmalıdır?

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

Soru 308
Bir şirketin birleştirilmiş faturalandırmayı kullanan birden fazla AWS hesabı vardır. Şirket birden fazla işletiyor
90 gün boyunca Oracle On-Demand DB bulut sunucuları için aktif yüksek performanslı Amazon RDS.
Şirketin finans ekibinin, birleştirilmiş faturalandırma hesabında AWS Trusted Advisor'a erişimi var
ve diğer tüm AWS hesapları.
Finans ekibinin Trusted Advisor'a erişmek için uygun AWS hesabını kullanması gerekiyor
RDS önerilerini kontrol edin. Finans ekibinin uygun Güvenilir Danışmanı incelemesi gerekir
RDS maliyetlerini azaltmak için kontrol edin.
Finans ekibi bu gereklilikleri karşılamak için hangi adımların birleşimini uygulamalıdır? (Seç
iki.)

A. RDS örneklerinin bulunduğu hesaptaki Trusted Advisor önerilerini kullanın
koşuyor.

B. Tüm RDS'leri görmek için birleştirilmiş faturalandırma hesabındaki Güvenilir Danışman önerilerini kullanın
örnek aynı anda kontrol edilir.

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

Soru 309
Bir çözüm mimarının depolama maliyetlerini optimize etmesi gerekir. Çözüm mimarı herhangi bir şeyi tanımlamalıdır.
Artık erişilmeyen veya nadiren erişilen Amazon S3 klasörleri.
Hangi çözüm bu hedefi EN AZ operasyonel giderle gerçekleştirecek?

A. Gelişmiş etkinlik için S3 Depolama Lensi kontrol panelini kullanarak paket erişim modellerini analiz edin
Metrikler.

B. AWS Management Console'daki S3 kontrol panelini kullanarak paket erişim modellerini analiz edin.

C. Paketler için Amazon CloudWatch BucketSizeBytes ölçümünü açın. Paket erişimini analiz edin
Amazon Athena ile ölçüm verilerini kullanarak kalıpları oluşturun.

D. S3 nesne izleme için AWS CloudTrail'i açın. Şunu kullanarak paket erişim modellerini analiz edin:
Amazon CloudWatch Logs ile entegre olan CloudTrail günlükleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Gelişmiş etkinlik ölçümleri için S3 Depolama Lensi kontrol panelini kullanarak paket erişim modellerini analiz edin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 310
Bir şirket yapay zeka ve makine alanında araştırma yapan müşterilere veri kümeleri satıyor
öğrenme (AI/ML). Veri kümeleri, bir Amazon S3 klasöründe depolanan büyük, biçimlendirilmiş dosyalardır
ABD-Doğu-1 Bölgesi'nde. Şirket, müşterilerin kullandığı bir web uygulamasına ev sahipliği yapıyor
Belirli bir veri kümesine erişim satın alın. Web uygulaması birden fazla Amazon EC2'de dağıtılır
Application Load Balancer'ın arkasındaki örnekler. Bir satın alma işlemi gerçekleştirildikten sonra müşterilere bir
Dosyalara erişime izin veren S3 imzalı URL.
Müşteriler Kuzey Amerika ve Avrupa'ya dağılmıştır. Şirket azaltmak istiyor
Veri aktarımlarıyla ilişkili olan ve performansı korumak veya iyileştirmek isteyen maliyet.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Mevcut S3 klasöründe S3 Transfer Acceleration'ı yapılandırın. Müşteri taleplerini doğrudan
S3 Transfer Hızlandırma uç noktası. Erişim kontrolü için S3 imzalı URL'leri kullanmaya devam edin.

B. Kaynak olarak mevcut S3 klasörüyle bir Amazon CloudFront dağıtımı dağıtın. Doğrudan
CloudFront URL'sine müşteri istekleri. Erişim kontrolü için CloudFront imzalı URL'lere geçin.

C. S3 Bölgeler Arası Çoğaltma ile eu-central-1 Bölgesinde ikinci bir S3 paketi oluşturun
kovalar arasında. Müşteri taleplerini en yakın Bölgeye yönlendirin. S3 imzalıyı kullanmaya devam et
Erişim kontrolü için URL'ler.

D. Veri kümelerinin son kullanıcılara akışını sağlamak için web uygulamasını değiştirin. Web'i yapılandırma
mevcut S3 klasöründeki verileri okumak için uygulama. Erişim kontrolünü doğrudan uygulamaya uygulayın
uygulama.

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

Soru 311
Bir şirket, sigorta tekliflerini işleyecek bir web uygulaması tasarlamak için AWS'yi kullanıyor. Kullanıcılar
uygulamadan fiyat teklifi isteyecektir. Teklifler teklif türüne göre ayrılmalı,
24 saat içinde yanıt verilir ve kaybolmamalıdır. Çözüm operasyonel durumu en üst düzeye çıkarmalı
Verimlilik sağlamalı ve bakımı en aza indirmelidir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Teklif türüne göre birden fazla Amazon Kinesis veri akışı oluşturun. Web'i yapılandırma
Mesajları uygun veri akışına göndermek için uygulama. Her bir arka uç grubunu yapılandırın
uygulama sunucuları, kendi verilerinden mesajları bir havuzda toplamak için Kinesis Client Library'yi (KCL) kullanacak
akış.

B. Bir AWS Lambda işlevi ve bir Amazon Basit Bildirim Hizmeti (Amazon SNS) oluşturun
Her teklif türü için konu. Lambda işlevini ilgili SNS konusuna abone olun. Yapılandır
Fiyat teklifi isteklerini uygun SNS konusuna yayınlamak için uygulama.

C. Tek bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Amazon'a abone olun
Basit Kuyruk Hizmeti (Amazon SQS) SNS konusuna sıralanır. SNS mesaj filtrelemesini yapılandırma
teklif türüne göre mesajları uygun SQS kuyruğunda yayınlamak için. Her arka ucu yapılandırın
uygulama sunucusunun kendi SQS kuyruğunu kullanması.

D. Teklif türüne göre birden fazla Amazon Kinesis Data Firehose dağıtım akışı oluşturun.
Veri akışlarını bir Amazon OpenSearch Service kümesine iletin. Gönderilecek uygulamayı yapılandırın
mesajları uygun dağıtım akışına aktarın. Uygulama sunucularının her bir arka uç grubunu,
OpenSearch Hizmeti'ndeki mesajları arayın ve bunları uygun şekilde işleyin.

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

Soru 312
Bir şirketin çeşitli Amazon EC2 bulut sunucularında çalışan bir uygulaması var. Her EC2 örneği
kendisine bağlı birden fazla Amazon Elastic Block Store (Amazon EBS) veri birimi vardır.
uygulamanın EC2 bulut sunucusu yapılandırmasının ve verilerinin her gece yedeklenmesi gerekir. Uygulama
ayrıca farklı bir AWS Bölgesinde kurtarılabilir olması gerekir.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Uygulamanın EBS'sinin gecelik anlık görüntülerini planlayan bir AWS Lambda işlevi yazın
birimleri oluşturur ve anlık görüntüleri farklı bir Bölgeye kopyalar.

B. Gecelik yedeklemeler gerçekleştirmek için AWS Backup'ı kullanarak bir yedekleme planı oluşturun. Yedeklemeleri şuraya kopyalayın:
başka bir Bölge. Uygulamanın EC2 bulut sunucularını kaynak olarak ekleyin.

C. Gecelik yedeklemeler gerçekleştirmek için AWS Backup'ı kullanarak bir yedekleme planı oluşturun. Yedeklemeleri şuraya kopyalayın:
başka bir Bölge. Uygulamanın EBS birimlerini kaynak olarak ekleyin.

D. Uygulamanın EBS'sinin gecelik anlık görüntülerini planlayan bir AWS Lambda işlevi yazın
birimleri oluşturur ve anlık görüntüleri farklı bir Erişilebilirlik Alanına kopyalar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Gecelik yedeklemeler gerçekleştirmek için AWS Backup'ı kullanarak bir yedekleme planı oluşturun. Yedeklemeleri başka bir Bölgeye kopyalayın. Uygulamanın EC2 bulut sunucularını kaynak olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 313
Bir şirket AWS'de bir mobil uygulama geliştiriyor. Şirket, erişimini milyonlara genişletmek istiyor
kullanıcıların. Şirketin yetkili kullanıcıların izleyebileceği bir platform oluşturması gerekiyor
Şirketin içeriği mobil cihazlarında.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. İçeriği genel bir Amazon S3 klasöründe yayınlayın. AWS Anahtar Yönetimi Hizmetini (AWS) kullanın
İçerik akışı için KMS) anahtarları.

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

Soru 314
Bir şirketin, küresel satış ekibi tarafından nadiren kullanılan şirket içi bir MySQL veritabanı vardır.
erişim kalıpları. Satış ekibi veritabanının minimum kesinti süresine sahip olmasını gerektirir. Bir veritabanı
yönetici belirli bir bulut sunucusu türünü seçmeden bu veritabanını AWS'ye taşımak istiyor
gelecekte daha fazla kullanıcının olması bekleniyor.
Bir çözüm mimarı hangi hizmeti önermelidir?

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

Soru 315
Bir şirket, şirket içi verilerinde birçok uygulamayı etkileyen bir ihlalle karşılaştı
merkez. Saldırgan, özel uygulamalardaki güvenlik açıklarından yararlandı.
sunucularda çalışıyor. Şirket artık uygulamalarını Amazon EC2'de çalışacak şekilde taşıyor
örnekler. Şirket, güvenlik açıklarını aktif olarak tarayan bir çözüm uygulamak istiyor
EC2 örneklerini kullanır ve bulguların ayrıntılarını içeren bir rapor gönderir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucularını güvenlik açıklarına karşı taramak için AWS Shield'ı dağıtın. Bir AWS Lambda oluşturun
bulguları AWS CloudTrail'e kaydetme işlevi.

B. EC2 bulut sunucularını taramak için Amazon Macie ve AWS Lambda işlevlerini dağıtın.
güvenlik açıkları. Tüm bulguları AWS CloudTrail'e kaydedin.

C. Amazon GuardDuty'yi açın. GuardDuty aracılarını EC2 bulut sunucularına dağıtın. Bir yapılandırma
AWS Lambda işlevi, ayrıntıları veren raporların oluşturulmasını ve dağıtımını otomatikleştirir.
bulgular.

D. Amazon Inspector'ı açın. Amazon Inspector aracısını EC2 bulut sunucularına dağıtın.
Raporların oluşturulmasını ve dağıtımını otomatikleştirmek için bir AWS Lambda işlevi yapılandırın
bulguları detaylandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon Inspector'ı açın. Amazon Inspector aracısını EC2 bulut sunucularına dağıtın. Bulguların ayrıntılarını veren raporların oluşturulmasını ve dağıtımını otomatikleştirmek için bir AWS Lambda işlevi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 316
Bir şirket, bir sunucudaki mesajları yoklamak ve işlemek amacıyla bir komut dosyası çalıştırmak için Amazon EC2 bulut sunucusunu kullanıyor.
Amazon Simple Queue Service (Amazon SQS) kuyruğu. Şirket azaltmak istiyor
artan sayıda mesajı işleme yeteneğini korurken operasyonel maliyetler
sıraya eklendi.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. İletileri daha hızlı işlemek için EC2 bulut sunucusunun boyutunu artırın.

B. Bulut sunucusu yeterince kullanılmadığında EC2 bulut sunucusunu kapatmak için Amazon EventBridge'i kullanın.

C. EC2 bulut sunucusundaki betiği uygun sürümle bir AWS Lambda işlevine taşıyın.
çalışma zamanı.

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

Soru 317
Bir şirket, CSV formatında veri üretmek için eski bir uygulama kullanıyor. Eski uygulama
çıktı verilerini Amazon S3'te saklar. Şirket, kullanıma hazır yeni bir ticari ürünü devreye alıyor
(COTS) depolanan verileri analiz etmek için karmaşık SQL sorguları gerçekleştirebilen uygulama
Yalnızca Amazon Redshift ve Amazon S3. Ancak COTS uygulaması .csv dosyasını işleyemiyor
eski uygulamanın ürettiği dosyalar.
Şirket, eski uygulamayı başka bir formatta veri üretecek şekilde güncelleyemez.
COTS uygulamasının, şirketin sağladığı verileri kullanabilmesi için şirketin bir çözüm uygulaması gerekiyor.
eski uygulama üretir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Belirli bir programa göre çalışan bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. Yapılandır
.csv dosyalarını işlemek ve işlenen verileri Amazon Redshift'te depolamak için ETL işi.

B. .csv dosyalarını .sql'ye dönüştürmek için Amazon EC2 bulut sunucularında çalışan bir Python betiği geliştirin
dosyalar. Çıktı dosyalarını Amazon S3'te depolamak için Python betiğini bir cron planına göre çağırın.

C. Bir AWS Lambda işlevi ve bir Amazon DynamoDB tablosu oluşturun. Çağırmak için bir S3 olayı kullanın
Lambda işlevi. Çıkarma, dönüştürme ve yükleme gerçekleştirmek için Lambda işlevini yapılandırma
(ETL) işi, .csv dosyalarını işlemek ve işlenen verileri DynamoDB tablosunda depolamaktır.

D. Haftalık bir programa göre bir Amazon EMR kümesi başlatmak için Amazon EventBridge'i kullanın. Yapılandır
.csv dosyalarını işlemek için bir ayıklama, dönüştürme ve yükleme (ETL) işi gerçekleştirmek üzere EMR kümesi ve
işlenen verileri bir Amazon Redshift tablosunda depolayın.

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

Soru 318
Bir şirket yakın zamanda tüm BT ortamını AWS Cloud'a taşıdı. şirket
kullanıcıların büyük boyutlu Amazon EC2 bulut sunucularını tedarik ettiğini ve güvenliği değiştirdiğini keşfeder
uygun değişiklik kontrol sürecini kullanmadan kuralları gruplandırın. Bir çözüm mimarının yapması gerekenler
Bu envanter ve konfigürasyon değişikliklerini takip etmek ve denetlemek için bir strateji geliştirin.
Çözüm mimarının bu gereksinimleri karşılamak için hangi eylemleri gerçekleştirmesi gerekir? (İki tane seçin.)

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

Soru 319
Bir şirketin AWS Cloud'da yüzlerce Amazon EC2 Linux tabanlı bulut sunucusu var. Sistemler
yöneticiler örnekleri yönetmek için paylaşılan SSH anahtarlarını kullandı. Yakın zamanda yapılan bir denetimden sonra,
Şirketin güvenlik ekibi tüm paylaşılan anahtarların kaldırılmasını zorunlu kılıyor. Bir çözüm mimarının yapması gerekenler
EC2 bulut sunucularına güvenli erişim sağlayan bir çözüm tasarlayın.
Hangi çözüm bu gereksinimi EN AZ miktarda idari giderle karşılayacaktır?

A. EC2 bulut sunucularına bağlanmak için AWS Systems Manager Session Manager'ı kullanın.

B. Talep üzerine tek seferlik SSH anahtarları oluşturmak için AWS Security Token Service'i (AWS STS) kullanın.

C. Bir dizi savunma bulut sunucusuna paylaşılan SSH erişimine izin verin. Diğer tüm örnekleri izin verecek şekilde yapılandırın
yalnızca kale örneklerinden SSH erişimi.

D. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito özel yetkilendirici kullanın. Bir AWS Lambda'yı çağırma
geçici bir SSH anahtarı oluşturma işlevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 bulut sunucularına bağlanmak için AWS Systems Manager Session Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 320
Bir şirket, şirket içi verilerden veri almak için Amazon EC2 bulut sunucularından oluşan bir filo kullanıyor
kaynaklar. Veriler JSON biçimindedir ve alım hızları 1 MB/s'ye kadar çıkabilir. ne zaman bir
EC2 örneği yeniden başlatılır ve hareket halindeki veriler kaybolur. Şirketin veri bilimi ekibi şunu istiyor:
Alınan verileri neredeyse gerçek zamanlı olarak sorgulayın.
Hangi çözüm, minimum veri kaybıyla ölçeklenebilir, gerçek zamanlıya yakın veri sorgulama sağlar?

A. Verileri Amazon Kinesis Data Streams'te yayınlayın, verileri sorgulamak için Kinesis Data Analytics'i kullanın.

B. Hedef olarak Amazon Redshift ile verileri Amazon Kinesis Data Firehose'da yayınlayın. Kullanım
Verileri sorgulamak için Amazon Redshift.

C. Alınan verileri bir EC2 bulut sunucusu deposunda saklayın. Verileri Amazon Kinesis Data Firehose'a yayınlayın
Hedef olarak Amazon S3 ile. Verileri sorgulamak için Amazon Athena'yı kullanın.

D. Alınan verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde depolayın. Verileri şuraya yayınla:
Redis için Amazon ElastiCache. Verileri sorgulamak için Redis kanalına abone olun.

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

Soru 321
Bir çözüm mimarı, tüm nesnelerin bir Amazon S3 klasörüne yüklendiğinden emin olmak için ne yapmalıdır?
şifrelenmiş mi?

A. PutObject'in s3:x-amz-acl başlık seti yoksa reddetmek için paket politikasını güncelleyin.

B. PutObject'in s3:x-amz-acl başlığı şu şekilde ayarlanmamışsa reddetmek için paket politikasını güncelleyin:
özel.

C. PutObject'in aws:SecureTransport'u yoksa reddetmek için paket politikasını güncelleyin
başlık true olarak ayarlandı.

D. PutObject'in bir özelliği yoksa reddetmek için paket politikasını güncelleyin.
x-amz-sunucu tarafı şifreleme başlık seti.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** PutObject'in bir x-amz-sunucu tarafı şifreleme başlık kümesine sahip olup olmadığını reddetmek için paket politikasını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 322
Bir çözüm mimarı, bir şirket için çok katmanlı bir uygulama tasarlıyor. Uygulamanın kullanıcıları
mobil cihazdan resim yükleyin. Uygulama her görüntünün küçük resmini oluşturur ve
görselin başarıyla yüklendiğini onaylamak için kullanıcıya bir mesaj döndürür.
Küçük resmin oluşturulması 60 saniyeye kadar sürebilir ancak şirket daha hızlı bir çözüm sunmak istiyor
kullanıcılarına orijinal görüntünün alındığını bildirmek için yanıt süresi. Çözümler
mimar, uygulamayı farklı yerlere eşzamansız olarak istek gönderecek şekilde tasarlamalıdır.
uygulama katmanları.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Küçük resmi oluşturmak ve kullanıcıyı uyarmak için özel bir AWS Lambda işlevi yazın. Şunu kullanın:
Lambda işlevini çağırmak için görüntü yükleme işlemini bir olay kaynağı olarak kullanın.

B. Bir AWS Step Functions iş akışı oluşturun. Düzenlemeyi yönetmek için Adım İşlevlerini yapılandırma
uygulama katmanları arasında geçiş yapın ve küçük resim oluşturma işlemi tamamlandığında kullanıcıyı uyarın.

C. Bir Amazon Simple Queue Service (Amazon SQS) mesaj kuyruğu oluşturun. Resimler olduğu gibi
yüklendiğinde, küçük resim oluşturmak için SQS kuyruğuna bir mesaj yerleştirin. Kullanıcıyı bir mesaj yoluyla uyarın
görüntünün alındığını bildiren uygulama mesajı.

D. Amazon Simple Notification Service (Amazon SNS) bildirim konularını oluşturun ve
abonelikler. Resimden sonra küçük resim oluşturmak için uygulamayla birlikte bir abonelik kullanın
yükleme tamamlandı. Kullanıcının mobil uygulamasına anında mesaj göndermek için ikinci bir abonelik kullanın
Küçük resim oluşturma işlemi tamamlandıktan sonra bildirim.

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

Soru 323
Bir şirketin tesisinin, binanın her girişinde yaka kartı okuyucuları vardır. Rozetler ne zaman
Tarandığında okuyucular, buna kimin erişmeye çalıştığını belirtmek için HTTPS üzerinden bir mesaj gönderir.
özel giriş.
Bir çözüm mimarı, sensörlerden gelen bu mesajları işleyecek bir sistem tasarlamalıdır.
Çözüm yüksek oranda kullanılabilir olmalı ve sonuçlar şirketin kullanımına sunulmalıdır.
Güvenlik ekibi analiz edecek.
Çözüm mimarı hangi sistem mimarisini önermelidir?

A. HTTPS uç noktası olarak hizmet vermek ve verileri işlemek için bir Amazon EC2 bulut sunucusu başlatın.
mesajlar. Sonuçları bir Amazon S3 klasörüne kaydetmek için EC2 örneğini yapılandırın.

B. Amazon API Gateway'de bir HTTPS uç noktası oluşturun. API Ağ Geçidi uç noktasını şu şekilde yapılandırın:
mesajları işlemek ve sonuçları bir Amazon'a kaydetmek için bir AWS Lambda işlevini çağırın
DynamoDB tablosu.

C. Gelen sensör mesajlarını bir AWS Lambda işlevine yönlendirmek için Amazon Route 53'ü kullanın.
Mesajları işlemek ve sonuçları bir Amazon'a kaydetmek için Lambda işlevini yapılandırın
DynamoDB tablosu.

D. Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Siteden Siteye VPN bağlantısını yapılandırma
sensör verilerinin doğrudan bir S3 klasörüne yazılabilmesi için tesis ağından VPC'ye
VPC uç noktasının.

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

Soru 324
Bir şirket, birincil şirket içi dosya depolaması için bir olağanüstü durum kurtarma planı uygulamak istiyor
hacim. Dosya depolama birimi bir İnternet Küçük Bilgisayar Sistemleri Arayüzünden bağlanır
(iSCSI) cihazını yerel bir depolama sunucusuna bağlayın. Dosya depolama birimi yüzlerce terabayt tutar
(TB) veri.
Şirket, son kullanıcıların tüm dosya türlerine anında erişmesini sağlamak istiyor.
gecikme yaşamadan şirket içi sistemler.
Hangi çözüm şirketin gereksinimlerinde EN AZ miktarda değişiklikle bu gereksinimleri karşılayacak?
mevcut altyapı?

A. Amazon S3 Dosya Ağ Geçidini şirket içinde barındırılan bir sanal makine (VM) olarak sağlayın.
Yerel önbelleği 10 TB'a ayarlayın. Dosyalara NFS aracılığıyla erişmek için mevcut uygulamaları değiştirin
protokol. Felaketten kurtulmak için bir Amazon EC2 bulut sunucusu sağlayın ve S3 klasörünü bağlayın
dosyaları içerir.

B. Bir AWS Storage Gateway teyp ağ geçidi sağlayın. Tümünü yedeklemek için bir veri yedekleme çözümü kullanın
mevcut verileri sanal bir bant kitaplığına aktarır. Veri yedekleme çözümünü, yedekleme tamamlandıktan sonra her gece çalışacak şekilde yapılandırın.
ilk yedekleme tamamlandı. Felaketten kurtulmak için bir Amazon EC2 bulut sunucusu sağlayın ve
verileri bir Amazon Elastic Block Store (Amazon EBS) birimine birimdeki birimlerden geri yükleyin.
sanal bant kütüphanesi.

C. Bir AWS Storage Gateway Volume Gateway önbelleğe alınmış birimi sağlayın. Yerel önbelleği şu şekilde ayarlayın:
10TB. Birim Ağ Geçidi önbelleğe alınmış birimi iSCSI kullanarak mevcut dosya sunucusuna bağlayın ve
tüm dosyaları depolama birimine kopyalayın. Depolama biriminin planlanmış anlık görüntülerini yapılandırın. Kime
Bir felaketten kurtulma, anlık görüntüyü Amazon Elastic Block Store'a (Amazon EBS) geri yükleme
birimini oluşturun ve EBS birimini bir Amazon EC2 bulut sunucusuna ekleyin.

D. Aynı miktarda AWS Storage Gateway Volume Gateway depolanan birimi sağlayın
mevcut dosya depolama birimi olarak disk alanı. Birim Ağ Geçidi depolanan birimini
iSCSI'yi kullanarak mevcut dosya sunucusunu seçin ve tüm dosyaları depolama birimine kopyalayın. Planlananı yapılandır
depolama biriminin anlık görüntüleri. Bir felaketten kurtulmak için anlık görüntüyü Amazon'a geri yükleyin
Elastic Block Store (Amazon EBS) birimini açın ve EBS birimini bir Amazon EC2'ye ekleyin
örnek.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut dosya depolama birimiyle aynı miktarda disk alanına sahip bir AWS Storage Gateway Volume Gateway depolanan birimi sağlayın. Birim Ağ Geçidi depolanan birimini iSCSI kullanarak mevcut dosya sunucusuna bağlayın ve tüm dosyaları depolama birimine kopyalayın. Depolama biriminin planlanmış anlık görüntülerini yapılandırın. Bir felaketten kurtulmak için anlık görüntüyü bir Amazon Elastic Block Store (Amazon EBS) birimine geri yükleyin ve EBS birimini bir Amazon EC2 bulut sunucusuna ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 325
Bir şirket, Amazon S3 klasöründen bir web uygulaması barındırıyor. Uygulamanın kullandığı
Kullanıcıların kimliğini doğrulamak ve JSON Web Token'ı döndürmek için bir kimlik sağlayıcı olarak Amazon Cognito
(JWT), başka bir S3 klasöründe depolanan korumalı kaynaklara erişim sağlar.
Uygulamanın dağıtımı üzerine kullanıcılar hataları bildirir ve korunan içeriğe erişemezler.
içerik. Bir çözüm mimarı bu sorunu uygun izinleri sağlayarak çözmelidir.
kullanıcılar korunan içeriğe erişebilir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon Cognito kimlik havuzunu, erişim için uygun IAM rolünü üstlenecek şekilde güncelleyin.
korumalı içerik.

B. Uygulamanın korunan içeriğe erişmesine izin vermek için S3 ACL'yi güncelleyin.

C. S3 klasöründe sonuçta tutarlı okumaların yapılmasını önlemek için uygulamayı Amazon S3'e yeniden dağıtın
Kullanıcıların korunan içeriğe erişim yeteneğini etkilememesi.

D. Kimlik havuzu içindeki özel öznitelik eşlemelerini kullanmak için Amazon Cognito havuzunu güncelleyin ve
kullanıcılara korunan içeriğe erişmeleri için uygun izinleri verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Korunan içeriğe erişim için uygun IAM rolünü üstlenmek amacıyla Amazon Cognito kimlik havuzunu güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 326
Bir görüntü barındırma şirketi, büyük varlıklarını Amazon S3 Standard paketlerine yüklüyor.
şirket, S3 API'lerini kullanarak çok parçalı yüklemeyi paralel olarak kullanıyor ve aynı nesnenin üzerine yazıyorsa
tekrar yüklendi. Yüklemeden sonraki ilk 30 gün boyunca nesnelere sıklıkla erişilecektir.
nesneler 30 gün sonra daha az sıklıkla kullanılacaktır ancak her nesnenin erişim düzenleri farklılaşacaktır.
tutarsız. Şirketin yüksek kullanılabilirliği korurken S3 depolama maliyetlerini de optimize etmesi gerekiyor
ve depolanan varlıkların esnekliği.
Bir çözüm mimarı bunları karşılamak için hangi eylem kombinasyonunu önermelidir?
gereksinimler? (İki tane seçin.)

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

Soru 327
Bir çözüm mimarının Amazon EC2 bulut sunucularını barındıran bir VPC ağının güvenliğini sağlaması gerekir. EC2
örnekler son derece hassas veriler içerir ve özel bir alt ağda çalışır. Şirket politikasına göre,
VPC'de çalışan EC2 bulut sunucuları yalnızca onaylı üçüncü taraf yazılımlara erişebilir
Üçüncü tarafın URL'sini kullanan yazılım ürünü güncellemeleri için internetteki depolar. Diğer
internet trafiği engellenmelidir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Giden trafiği bir AWS Ağına yönlendirmek için özel alt ağın yönlendirme tablosunu güncelleyin
Güvenlik duvarı güvenlik duvarı. Etki alanı listesi kural gruplarını yapılandırın.

B. Bir AWS WAF web ACL'si kurun. Trafik isteklerini aşağıdakilere göre filtreleyen özel bir kurallar kümesi oluşturun:
kaynak ve hedef IP adresi aralığı kümeleri.

C. Gelen güvenlik grubu kurallarını katı bir şekilde uygulayın. Trafiğe izin veren bir giden kuralı yapılandırma
URL'leri belirterek yalnızca internetteki yetkili yazılım depolarına.

D. EC2 bulut sunucularının önünde bir Application Load Balancer (ALB) yapılandırın. Tüm gidenleri yönlendir
ALB'ye giden trafik. Giden erişim için ALB'nin hedef grubunda URL tabanlı bir kural dinleyicisi kullanın.
internet.

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

Soru 328
Bir şirket, AWS Cloud'da üç katmanlı bir e-ticaret uygulamasına ev sahipliği yapıyor. Şirket ev sahipliği yapıyor
Web sitesini Amazon S3'te kullanır ve web sitesini satış taleplerini işleyen bir API ile entegre eder.
Şirket, API'yi bir Uygulama Yükü arkasında üç Amazon EC2 örneğinde barındırıyor
Dengeleyici (ALB). API, arka uçla birlikte statik ve dinamik ön uç içeriğinden oluşur
Satış isteklerini eşzamansız olarak işleyen çalışanlar.
Şirket, satış taleplerinin sayısında önemli ve ani bir artış bekliyor
yeni ürünlerin lansmanı için düzenlenen etkinlikler sırasında.
Tüm isteklerin işlenmesini sağlamak için bir çözüm mimarı ne önermelidir?
başarıyla mı?

A. Dinamik içerik için bir Amazon CloudFront dağıtımı ekleyin. EC2 sayısını artırın
Trafikteki artışın üstesinden gelmek için örnekler.

B. Statik içerik için bir Amazon CloudFront dağıtımı ekleyin. EC2 örneklerini bir
Ağ trafiğine göre yeni örnekleri başlatmak için Otomatik Ölçeklendirme grubu.

C. Dinamik içerik için bir Amazon CloudFront dağıtımı ekleyin. Amazon ElastiCache ekleyin
API'nin işleyeceği trafiği azaltmak için ALB'nin önündeki örnek.

D. Statik içerik için bir Amazon CloudFront dağıtımı ekleyin. Amazon Basit Kuyruğu Ekleme
Daha sonra işlenmek üzere web sitesinden istekleri almak için hizmet (Amazon SQS) kuyruğu
EC2 örnekleri.

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

Soru 329
Bir güvenlik denetimi, Amazon EC2 bulut sunucularına düzenli olarak yama uygulanmadığını ortaya koyuyor. bir çözüm
Mimarın geniş bir veri filosunda düzenli güvenlik taramaları gerçekleştirecek bir çözüm sunması gerekiyor.
EC2 örnekleri. Çözüm aynı zamanda EC2 bulut sunucularına düzenli aralıklarla yama eki uygulamalı ve
her örneğin yama durumuna ilişkin bir rapor sağlayın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucularını yazılım açıklarına karşı taramak için Amazon Macie'yi kurun. Bir cron işi ayarlama
örneği düzenli bir programa göre yamamak için her EC2 bulut sunucusunda.

B. Hesapta Amazon GuardDuty'yi açın. EC2 bulut sunucularını taramak için GuardDuty'yi yapılandırın
yazılım açıkları için. EC2'ye yama uygulamak için AWS Systems Manager Session Manager'ı kurun
düzenli bir programda örnekler.

C. EC2 bulut sunucularını yazılım açıklarına karşı taramak için Amazon Detective'i kurun. Bir kurulum yapın
Amazon EventBridge, EC2 bulut sunucularına düzenli bir programa göre yama uygulamak için planlanmış bir kuraldır.

D. Hesapta Amazon Inspector'ı açın. Amazon Inspector'ı EC2'yi tarayacak şekilde yapılandırma
yazılım güvenlik açıklarına örnekler. Düzeltme ekini uygulamak için AWS Systems Manager Patch Manager'ı kurun
EC2 bulut sunucuları düzenli bir programa göre.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hesapta Amazon Inspector'ı açın. EC2 bulut sunucularını yazılım açıklarına karşı tarayacak şekilde Amazon Inspector'ı yapılandırın. EC2 bulut sunucularına düzenli aralıklarla yama uygulamak için AWS Systems Manager Patch Manager'ı kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 330
Bir şirket, verileri Amazon RDS DB bulut sunucularında depolamayı planlıyor. Şirketin şifrelemesi gerekiyor
veriler hareketsiz durumda.
Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. AWS Key Management Service'de (AWS KMS) bir anahtar oluşturun. Veritabanı için şifrelemeyi etkinleştir
örnekler.

B. Bir şifreleme anahtarı oluşturun. Anahtarı AWS Secrets Manager'da saklayın. Şifrelemek için anahtarı kullanın
Veritabanı örnekleri.

C. AWS Sertifika Yöneticisi'nde (ACM) bir sertifika oluşturun. Veritabanında SSL/TLS'yi etkinleştirin
sertifikayı kullanarak örnekler.

D. AWS Identity and Access Management'ta (IAM) bir sertifika oluşturun. SSL/TLS'yi etkinleştirin
Sertifikayı kullanarak veritabanı örnekleri.

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

Soru 331
Bir şirketin 30 gün içinde 20 TB veriyi veri merkezinden AWS Cloud'a taşıması gerekir.
Şirketin ağ bant genişliği 15 Mbps ile sınırlıdır ve %70 kullanımı aşamaz.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

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

Soru 332
Bir şirketin çalışanlarına gizli ve hassas dosyalara güvenli erişim sağlaması gerekir.
Şirket, dosyalara yalnızca yetkili kullanıcıların erişebilmesini sağlamak istiyor. Dosyalar
çalışanların cihazlarına güvenli bir şekilde indirilmesi gerekmektedir.
Dosyalar şirket içi bir Windows dosya sunucusunda depolanır. Ancak artış nedeniyle
uzaktan kullanım, dosya sunucusunun kapasitesi tükeniyor.
.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Dosya sunucusunu genel alt ağdaki bir Amazon EC2 bulut sunucusuna taşıyın. Güvenliği yapılandırma
gelen trafiği çalışanların IP adreslerine sınırlamak için grup.

B. Dosyaları Amazon FSx for Windows Dosya Sunucusu dosya sistemine taşıyın. Amazon'u entegre edin
Şirket içi Active Directory ile FSx dosya sistemi. AWS İstemci VPN'ini yapılandırın.

C. Dosyaları Amazon S3'e taşıyın ve özel bir VPC uç noktası oluşturun. İmzalı bir URL oluşturun
indirmeye izin ver.

D. Dosyaları Amazon S3'e taşıyın ve genel bir VPC uç noktası oluşturun. Çalışanların oturum açmasına izin ver
AWS IAM Identity Center (AWS Tek Oturum Açma) ile.

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

Soru 333
Bir şirketin uygulaması, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında çalışıyor
(ALB). Bulut sunucuları, birden fazla Erişilebilirlik genelinde bir Amazon EC2 Auto Scaling grubunda çalışır
Bölgeler. Her ayın ilk günü gece yarısı, uygulama çok daha yavaşlar.
ay sonu mali hesaplama grubu çalıştırılır. Bu EC2'nin CPU kullanımına neden olur
örneklerin hemen %100'e yükselmesi, bu da uygulamayı kesintiye uğratır.
Uygulamanın aşağıdaki sorunları yönetebilmesini sağlamak için bir çözüm mimarı ne önermelidir?
iş yükü ve kesintilerden kaçınmak mı istiyorsunuz?

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

Soru 334
Bir şirket, müşteriye şirket içi Microsoft Active Directory'yi kullanma olanağı vermek istiyor
Amazon S3'te depolanan dosyaları indirin. Müşterinin uygulaması şunları yapmak için bir SFTP istemcisi kullanır:
dosyaları indirin.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile ve hiçbir maliyet olmadan karşılayacaktır?
müşterinin uygulamasında değişiklik var mı?

A. Amazon S3 için SFTP ile AWS Transfer Ailesini kurun. Entegre Active Directory'yi yapılandırma
kimlik doğrulama.

B. Şirket içi istemciyi senkronize etmek için AWS Database Migration Service'i (AWS DMS) kurun
Amazon S3 ile. Entegre Active Directory kimlik doğrulamasını yapılandırın.

C. Şirket içi konum ile S3 konumu arasında senkronizasyon sağlamak için AWS DataSync'i kurun.
AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kullanma.

D. Şirket içi istemciyi SFTP ile bağlamak için bir Windows Amazon EC2 örneği kurun.
Amazon S3. AWS Identity and Access Management'ı (IAM) entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3 için SFTP ile AWS Transfer Family'yi kurun. Entegre Active Directory kimlik doğrulamasını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 335
Bir firmada ani talep artışları yaşanıyor. Şirketin büyük miktarda tedarik yapması gerekiyor
Amazon Machine Image'dan (AMI) Amazon EC2 bulut sunucuları. Örnekler Otomatik olarak çalıştırılacak
Ölçeklendirme grubu. Şirketin minimum başlatma gecikmesini sağlayacak bir çözüme ihtiyacı var
talebi karşılamak.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Anlık görüntüden AMI oluşturmak için aws ec2 Register-image komutunu kullanın. AWS Step'i kullanın
Otomatik Ölçeklendirme grubundaki AMI'yi değiştirme işlevleri.

B. Bir anlık görüntüde Amazon Elastic Block Store (Amazon EBS) hızlı anlık görüntü geri yüklemesini etkinleştirin.
Anlık görüntüyü kullanarak bir AMI sağlayın. Otomatik Ölçeklendirme grubundaki AMI'yi yenisiyle değiştirin
AMI.

C. Amazon Data Lifecycle Manager'da (Amazon) AMI oluşturmayı etkinleştirin ve yaşam döngüsü kurallarını tanımlayın
DLM). Otomatik Ölçeklendirme grubunda AMI'yi değiştiren bir AWS Lambda işlevi oluşturun.

D. AMI'leri sağlayan AWS Backup yaşam döngüsü politikalarını çağırmak için Amazon EventBridge'i kullanın.
EventBridge'de Otomatik Ölçeklendirme grubu kapasite sınırlarını olay kaynağı olarak yapılandırın.

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

Soru 336
Bir şirket, Amazon Aurora MySQL Veritabanı kümesini kullanan çok katmanlı bir web uygulamasına ev sahipliği yapıyor.
depolama. Uygulama katmanı Amazon EC2 bulut sunucularında barındırılır. Şirketin BT güvenliği
yönergeler, veritabanı kimlik bilgilerinin her 14 günde bir şifrelenmesini ve döndürülmesini zorunlu kılar.
Bir çözüm mimarı bu gereksinimi EN AZ operasyonel çabayla karşılamak için ne yapmalıdır?

A. Yeni bir AWS Key Management Service (AWS KMS) şifreleme anahtarı oluşturun. AWS Secrets'ı kullanın
Yöneticinin uygun kimlik bilgileriyle KMS anahtarını kullanan yeni bir gizli dizi oluşturmasını sağlayın. Ortak
Aurora DB kümesinin sırrı. 14 günlük özel bir rotasyon dönemi yapılandırın.

B. AWS Systems Manager Parametre Deposu'nda iki parametre oluşturun: biri kullanıcı adı için
string parametresi ve parola için SecureString türünü kullanan bir parametre. AWS Anahtarını Seçin
Parola parametresi için Yönetim Hizmeti (AWS KMS) şifrelemesi ve bunları yükleme
uygulama katmanındaki parametreler. Parolayı döndüren bir AWS Lambda işlevi uygulayın
her 14 günde bir.

C. Kimlik bilgilerini içeren bir dosyayı AWS Key Management Service'de (AWS KMS) saklayın
şifrelenmiş Amazon Elastic File System (Amazon EFS) dosya sistemi. EFS dosya sistemini tümüyle bağlayın
Uygulama katmanının EC2 örnekleri. Dosya sistemindeki dosyaya erişimi kısıtlayın, böylece
uygulamanın dosyayı okuyabildiğini ve yalnızca süper kullanıcıların dosyayı değiştirebileceğini. Bir AWS uygulayın
Aurora'daki anahtarı her 14 günde bir döndüren ve anahtara yeni kimlik bilgileri yazan Lambda işlevi
dosya.

D. Kimlik bilgilerini içeren bir dosyayı AWS Key Management Service'de (AWS KMS) saklayın
uygulamanın kimlik bilgilerini yüklemek için kullandığı şifrelenmiş Amazon S3 klasörü. Dosyayı şu adrese indirin:
Doğru kimlik bilgilerinin kullanıldığından emin olmak için uygulamayı düzenli olarak kontrol edin. Bir AWS uygulayın
Aurora kimlik bilgilerini 14 günde bir değiştiren ve bu kimlik bilgilerini yükleyen Lambda işlevi
S3 kovasındaki dosyaya.

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

Soru 337
Bir şirket AWS'de bir web uygulaması dağıttı. Şirket arka uç veritabanını barındırıyor
ölçeklendirmeyi desteklemek için birincil veritabanı bulut sunucusu ve beş okuma replikası ile MySQL için Amazon RDS'de
ihtiyaçlar. Okuma replikaları, birincil veritabanı bulut sunucusunun 1 saniyeden fazla gerisinde kalmamalıdır.
veritabanı rutin olarak planlanmış saklı yordamları çalıştırır.
Web sitesindeki trafik arttıkça kopyalar yoğun dönemlerde ek gecikmelerle karşılaşıyor
yük. Bir çözüm mimarı çoğaltma gecikmesini mümkün olduğu kadar azaltmalıdır. Çözümler
mimar uygulama kodundaki değişiklikleri en aza indirmeli ve devam eden operasyonel işlemleri en aza indirmelidir
yükü.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanını Amazon Aurora MySQL'e taşıyın. Okuma kopyalarını Aurora ile değiştirin
Kopyaları oluşturun ve Aurora Otomatik Ölçeklendirmeyi yapılandırın. Saklı prosedürleri Aurora MySQL ile değiştirin
yerel işlevler.

B. Veritabanının önünde bir Amazon ElastiCache for Redis kümesi dağıtın. Uygulamayı değiştirin
uygulama veritabanını sorgulamadan önce önbelleği kontrol etmek için. Saklı yordamları değiştirin
AWS Lambda işlevleriyle.

C. Veritabanını Amazon EC2 bulut sunucularında çalışan bir MySQL veritabanına taşıyın. Seç
Tüm replika düğümleri için büyük, işlem açısından optimize edilmiş EC2 bulut sunucuları. Saklı prosedürlerin bakımını yapın
EC2 örnekleri.

D. Veritabanını Amazon DynamoDB'ye taşıyın. Çok sayıda okuma kapasitesi birimi sağlayın
(RCU'lar) gerekli verimi desteklemek ve isteğe bağlı kapasite ölçeklendirmesini yapılandırmak için. Değiştir
DynamoDB akışlarıyla saklı prosedürler.

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

Soru 338
Bir çözüm mimarı, yüksek hacimli bir yazılım için olağanüstü durum kurtarma (DR) planı oluşturmalıdır.
hizmet (SaaS) platformu. Platforma ilişkin tüm veriler Amazon Aurora MySQL veritabanında depolanır
küme.
DR planının verileri ikincil bir AWS Bölgesine çoğaltması gerekir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İkincil Bölgedeki bir Aurora kümesine MySQL ikili günlük çoğaltmasını kullanın. Birinci hüküm
İkincil Bölgedeki Aurora kümesi için veritabanı bulut sunucusu.

B. Veritabanı kümesi için bir Aurora global veritabanı oluşturun. Kurulum tamamlandığında DB'yi kaldırın
İkincil Bölgeden örnek.

C. Verileri sürekli olarak bir Aurora'ya kopyalamak için AWS Database Migration Service'i (AWS DMS) kullanın
İkincil Bölgedeki küme. Veritabanı örneğini ikincil Bölgeden kaldırın.

D. Veritabanı kümesi için bir Aurora global veritabanı kurun. En az bir veritabanı örneği belirtin
ikincil Bölge.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanı kümesi için bir Aurora global veritabanı oluşturun. İkincil Bölgede en az bir veritabanı bulut sunucusu belirtin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 339
Bir şirketin, bilgileri alan yerleşik kimlik bilgilerine sahip özel bir uygulaması vardır.
bir Amazon RDS MySQL Veritabanı bulut sunucusu. Yönetim başvurunun daha sık yapılması gerektiğini söylüyor
Minimum programlama çabasıyla güvenliği sağlayın.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Anahtarlar oluşturmak için AWS Key Management Service'i (AWS KMS) kullanın. Uygulamayı şu şekilde yapılandırın:
AWS KMS'den veritabanı kimlik bilgilerini yükleyin. Otomatik anahtar yönlendirmeyi etkinleştirin.

B. Uygulama kullanıcısı için RDS for MySQL veritabanında kimlik bilgileri oluşturun ve
AWS Secrets Manager'daki kimlik bilgileri. Uygulamayı veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırma
Secrets Manager'dan. Gizli'deki kimlik bilgilerini döndüren bir AWS Lambda işlevi oluşturun
Yönetici.

C. Uygulama kullanıcısı için RDS for MySQL veritabanında kimlik bilgileri oluşturun ve
AWS Secrets Manager'daki kimlik bilgileri. Uygulamayı veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırma
Secrets Manager'dan. RDS'de uygulama kullanıcısı için bir kimlik bilgileri rotasyon planı ayarlayın
Secrets Manager'ı kullanarak MySQL veritabanı için.

D. Uygulama kullanıcısı için RDS for MySQL veritabanında kimlik bilgileri oluşturun ve
AWS Systems Manager Parametre Deposu'ndaki kimlik bilgileri. Uygulamayı yükleyecek şekilde yapılandırın
Parameter Store'dan veritabanı kimlik bilgileri. Şunlar için bir kimlik bilgisi rotasyon planı ayarlayın:
Parameter Store'u kullanarak RDS for MySQL veritabanındaki uygulama kullanıcısı.

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

Soru 340
Bir medya şirketi web sitesini AWS'de barındırıyor. Web sitesi uygulamasının mimarisi şunları içerir:
Application Load Balancer (ALB) ve bir veritabanının arkasında Amazon EC2 bulut sunucularından oluşan filo
Amazon Aurora'da barındırılıyor. Şirketin siber güvenlik ekibi, uygulamanın
SQL enjeksiyonuna karşı savunmasız.
Şirket bu sorunu nasıl çözmeli?

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

Soru 341
Bir şirketin, AWS Lake Formation tarafından yönetilen bir Amazon S3 veri gölü vardır.
şirket, verilerdeki verileri birleştirerek Amazon QuickSight'ta bir görselleştirme oluşturmak istiyor
Amazon Aurora MySQL veritabanında depolanan operasyonel verileri içeren lake. şirket
Şirketin pazarlama ekibinin erişebilmesi için sütun düzeyinde yetkilendirmeyi zorunlu kılmak istiyor
veritabanındaki sütunların yalnızca bir alt kümesi.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri doğrudan veritabanından QuickSight SPICE'a almak için Amazon EMR'yi kullanın
motor. Yalnızca gerekli sütunları ekleyin.

B. Verileri veritabanından S3 data lake'e almak için AWS Glue Studio'yu kullanın. Bir IAM ekleyin
Sütun düzeyinde erişim kontrolünü zorunlu kılmak için QuickSight kullanıcılarına yönelik politika. Veri olarak Amazon S3'ü kullanın
QuickSight'taki kaynak.

C. Amazon S3'teki veritabanı için gerçekleştirilmiş bir görünüm oluşturmak amacıyla AWS Glue Elastic Views'ı kullanın.
QuickSight kullanıcıları için sütun düzeyinde erişim kontrolünü zorunlu kılmak amacıyla bir S3 grup ilkesi oluşturun. Kullanım
QuickSight'ta veri kaynağı olarak Amazon S3.

D. Verileri veritabanından S3 veri gölüne almak için bir Göl Oluşumu planı kullanın. Kullanım
QuickSight kullanıcıları için sütun düzeyinde erişim kontrolünü zorunlu kılan Lake Formation. Amazon'u kullanın
QuickSight'ta veri kaynağı olarak Athena.

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

Soru 342
Bir işlem işleme şirketinin Amazon EC2'de çalışan haftalık komut dosyası içeren toplu işleri var
örnekler. EC2 bulut sunucuları Otomatik Ölçeklendirme grubundadır. İşlem sayısı
değişebilir ancak her çalıştırmada not edilen temel CPU kullanımı en az %60'tır. şirket
kapasiteyi işler çalıştırılmadan 30 dakika önce sağlamalıdır.
Şu anda mühendisler bu görevi Otomatik Ölçeklendirme grubunu manuel olarak değiştirerek tamamlıyorlar
parametreler. Şirketin gerekli kapasite eğilimlerini analiz edecek kaynakları yok
Otomatik Ölçeklendirme grup sayıları için. Şirketin Otomatik değişiklik yapmak için otomatik bir yola ihtiyacı var
Grubun istenilen kapasitesinin ölçeklendirilmesi.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Otomatik Ölçeklendirme grubu için dinamik bir ölçeklendirme ilkesi oluşturun. Politikayı ölçeklendirmeye dayalı olarak yapılandırma
CPU kullanımı metriğine göre. Metriğin hedef değerini %60'a ayarlayın.

B. Otomatik Ölçeklendirme grubu için zamanlanmış bir ölçeklendirme ilkesi oluşturun. İstediğiniz uygun ayarı yapın
kapasite, minimum kapasite ve maksimum kapasite. Tekrarlamayı haftalık olarak ayarlayın. Başlangıcı ayarla
Toplu işler çalıştırılmadan önce süre 30 dakikaya kadardır.

C. Otomatik Ölçeklendirme grubu için tahmine dayalı bir ölçeklendirme ilkesi oluşturun. Politikayı ölçeklendirecek şekilde yapılandırma
tahmine dayanmaktadır. Ölçeklendirme ölçüsünü CPU kullanımına göre ayarlayın. Metriğin hedef değerini şu şekilde ayarlayın:
%60. Politikada örnekleri, işler çalıştırılmadan 30 dakika önce başlatılacak şekilde ayarlayın.

D. CPU çalıştırıldığında bir AWS Lambda işlevini çağırmak için bir Amazon EventBridge olayı oluşturun.
Otomatik Ölçeklendirme grubu için kullanım metriği değeri %60'a ulaşır. Lambda işlevini şu şekilde yapılandırın:
Otomatik Ölçeklendirme grubunun istenen kapasitesini ve maksimum kapasitesini %20 artırın.

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

Soru 343
Bir çözüm mimarı, bir şirketin olağanüstü durum kurtarma (DR) mimarisini tasarlıyor. şirket
özel bir alt ağdaki Amazon EC2 örneğinde planlanmış şekilde çalışan bir MySQL veritabanına sahiptir
Yedekleme. DR tasarımının birden fazla AWS Bölgesi içermesi gerekir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. MySQL veritabanını birden çok EC2 örneğine taşıyın. Beklemedeki bir EC2 örneğini yapılandırın
DR Bölgesi. Çoğaltmayı açın.

B. MySQL veritabanını Amazon RDS'ye taşıyın. Multi-AZ dağıtımı kullanın. Okumayı aç
farklı Erişilebilirlik Alanlarındaki birincil veritabanı bulut sunucusunun çoğaltılması.

C. MySQL veritabanını Amazon Aurora global veritabanına taşıyın. Birincil veritabanını barındırın
Birincil Bölgedeki küme. İkincil veritabanı kümesini DR Bölgesinde barındırın.

D. MySQL veritabanının planlanmış yedeklemesini yapılandırılmış bir Amazon S3 klasöründe saklayın
S3 Bölgeler Arası Çoğaltma (CRR) için. DR'deki veritabanını geri yüklemek için veri yedeklemeyi kullanın
Bölge.

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

Soru 344
Bir şirketin Amazon Simple Queue Service'i (Amazon SQS) kullanan bir Java uygulaması var.
mesajları ayrıştırın. Uygulama, boyutu 256 KB'tan büyük olan iletileri ayrıştıramaz.
Şirket, uygulamaya mesajları ayrıştırma yeteneği verecek bir çözüm uygulamak istiyor
50 MB kadar büyük.
Kodda yapılacak EN AZ değişiklikle bu gereksinimleri hangi çözüm karşılayacak?

A. Şu boyuttan daha büyük mesajları barındırmak için Amazon SQS Extended Client Library for Java'yı kullanın:
Amazon S3'te 256 KB.

B. Uygulamadan büyük mesajlar göndermek için Amazon SQS yerine Amazon EventBridge'i kullanın.

C. 256 KB'tan büyük iletileri işlemek için Amazon SQS'teki sınırı değiştirin.

D. 256 KB'tan büyük mesajları Amazon Elastic File System'de (Amazon EFS) saklayın.
Amazon SQS'yi mesajlarda bu konuma referans verecek şekilde yapılandırın.

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

Soru 345
Bir şirket, ana web uygulamalarından birinin içeriğine erişimi kısıtlamak istiyor ve
AWS'de bulunan yetkilendirme tekniklerini kullanarak içeriği koruyun. Şirket istiyor
100'den az kullanıcı için sunucusuz bir mimari ve kimlik doğrulama çözümü uygulayın.
çözümün ana web uygulamasıyla entegre olması ve web içeriğini küresel olarak sunması gerekiyor.
Çözüm aynı zamanda şirketin kullanıcı tabanı büyüdükçe ölçeklendirilmeli ve en düşük oturum açma olanağı sağlanmalıdır
gecikme mümkündür.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Kimlik doğrulama için Amazon Cognito'yu kullanın. Yetkilendirme için Lambda@Edge'i kullanın. Amazon'u kullanın
CloudFront, web uygulamasına küresel olarak hizmet verecek.

B. Kimlik doğrulama için Microsoft Active Directory için AWS Directory Service'i kullanın. AWS Lambda'yı kullanın
yetkilendirme için. Web uygulamasını küresel olarak sunmak için bir Application Load Balancer kullanın.

C. Kimlik doğrulama için Amazon Cognito'yu kullanın. Yetkilendirme için AWS Lambda'yı kullanın. Amazon S3'ü kullanın
Web uygulamasını global olarak sunmak için Aktarım Hızlandırma.

D. Kimlik doğrulama için Microsoft Active Directory için AWS Directory Service'i kullanın. Kullanım
Yetkilendirme için Lambda@Edge. Web uygulamasını sunmak için AWS Elastic Beanstalk'ı kullanın
küresel olarak.

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

Soru 346
Bir şirketin veri merkezinde eskiyen bir ağa bağlı depolama (NAS) dizisi var. NAS dizisi
SMB paylaşımlarını ve NFS paylaşımlarını istemci iş istasyonlarına sunar. Şirket istemiyor
yeni bir NAS dizisi satın alın. Şirket ayrıca yenileme maliyetine de katlanmak istemiyor.
NAS dizisinin destek sözleşmesi. Verilerin bir kısmına sıklıkla erişiliyor ancak verilerin çoğu
aktif değil.
Bir çözüm mimarının, verileri Amazon S3'e aktaran bir çözümü uygulaması gerekir.
S3 Lifecycle politikaları ve müşteri iş istasyonları için aynı görünümü ve hissi korur.
çözüm mimarı, çözümün bir parçası olarak AWS Storage Gateway'i belirledi.
Çözüm mimarı bunları karşılamak için hangi tür depolama ağ geçidini sağlamalıdır?
gereksinimler?

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

Soru 347
Bir şirketin Amazon EC2 bulut sunucuları üzerinde çalışan bir uygulaması var. Bir çözüm mimarı
şirketi belirli bir bulut sunucusu ailesi ve çeşitli bulut sunucusu boyutlarına göre standartlaştırdı
Şirketin mevcut ihtiyaçları hakkında.
Şirket, önümüzdeki 3 yıl boyunca uygulama için maliyet tasarrufunu en üst düzeye çıkarmak istiyor.
şirketin önümüzdeki 6 ay içinde bulut sunucusu ailesini ve boyutlarını değiştirebilmesi gerekiyor
Uygulamanın popülerliği ve kullanımına ilişkin.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

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

Soru 348
Bir şirket, giyilebilir cihaz kullanan çok sayıda katılımcıdan veri topluyor.
şirket verileri bir Amazon DynamoDB tablosunda saklıyor ve verileri analiz etmek için uygulamaları kullanıyor.
veri. Veri iş yükü sabit ve öngörülebilirdir. Şirket bu seviyede veya altında kalmak istiyor
DynamoDB için tahmini bütçe.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Hazırlanan modu ve DynamoDB Standard-Infrequent Access'i (DynamoDB Standard-IA) kullanın.
Tahmini iş yükü için yedek kapasite.

B. Hazırlanan modu kullanın. Okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini belirtme
(WCU'lar).

C. İsteğe bağlı modu kullanın. Okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini (WCU'lar) ayarlayın
İş yükündeki değişiklikleri karşılayacak kadar yüksek.

D. İsteğe bağlı modu kullanın. Okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini (WCU'lar) belirtin
ayrılmış kapasiteye sahip.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Hazırlanan modu kullanın. Okuma kapasitesi birimlerini (RCU'lar) ve yazma kapasitesi birimlerini (WCU'lar) belirtin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 349
Bir şirket, gizli verileri Amazon Aurora PostgreSQL veritabanında saklıyor.
ap-güneydoğu-3 Bölgesi. Veritabanı bir AWS Key Management Service ile şifrelenmiştir
(AWS KMS) müşteri tarafından yönetilen anahtar. Şirket yakın zamanda satın alındı ve güvenli bir şekilde
veritabanının bir yedeğini satın alan şirketin ap-southeast-3'teki AWS hesabıyla paylaşın.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir veritabanı anlık görüntüsü oluşturun. Anlık görüntüyü yeni, şifrelenmemiş bir anlık görüntüye kopyalayın. Paylaş
satın alan şirketin AWS hesabının yeni anlık görüntüsü.

B. Bir veritabanı anlık görüntüsü oluşturun. Satın alan şirketin AWS hesabını KMS anahtarına ekleyin
politika. Anlık görüntüyü satın alan şirketin AWS hesabıyla paylaşın.

C. Farklı bir AWS tarafından yönetilen KMS anahtarı kullanan bir veritabanı anlık görüntüsü oluşturun. Edinmeyi ekle
şirketin AWS hesabını KMS anahtar takma adına değiştirin. Anlık görüntüyü satın alan şirketle paylaşın
AWS hesabı.

D. Bir veritabanı anlık görüntüsü oluşturun. Veritabanı anlık görüntüsünü indirin. Veritabanı anlık görüntüsünü yükleyin
bir Amazon S3 klasörüne. Edinme kaynağından erişime izin vermek için S3 paket politikasını güncelleyin
şirketin AWS hesabı.

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

Soru 350
Bir şirket, Microsoft SQL Server Single-AZ Veritabanı bulut sunucusu için 100 GB Amazon RDS kullanıyor
Müşteri işlemlerini depolamak için us-east-1 Bölgesi. Şirketin yüksek kullanılabilirliğe ihtiyacı var ve
Veritabanı bulut sunucusu için otomatik kurtarma.
Şirketin ayrıca yılda birkaç kez RDS veritabanına ilişkin raporlar çalıştırması gerekiyor. Rapor
süreç, işlemlerin müşterilerin hesaplarına gönderilmesinin normalden daha uzun sürmesine neden olur.
Şirketin raporlama sürecinin performansını artıracak bir çözüme ihtiyacı var.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Veritabanı bulut sunucusunu Single-AZ veritabanı bulut sunucusundan Multi-AZ dağıtımına değiştirin.

B. Geçerli veritabanı bulut sunucusunun anlık görüntüsünü alın. Anlık görüntüyü yeni bir RDS dağıtımına geri yükleyin.
başka bir Erişilebilirlik Alanı.

C. Farklı bir Erişilebilirlik Alanında veritabanı bulut sunucusunun okuma kopyasını oluşturun. Tüm istekleri yönlendir
okuma kopyasına rapor verir.

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

Soru 351
Bir şirket veri yönetimi uygulamasını AWS'ye taşıyor. Şirket geçiş yapmak istiyor
olay odaklı bir mimariye. Mimarinin daha fazla dağıtılması ve kullanılması gerekiyor
iş akışının farklı yönlerini gerçekleştirirken sunucusuz konseptler. Şirket aynı zamanda
Operasyonel ek yükü en aza indirmek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Glue'da iş akışını oluşturun. AWS Lambda işlevlerini çağırmak için AWS Glue'yu kullanın.
iş akışı adımlarını işleyin.

B. AWS Step Functions'ta iş akışını oluşturun. Uygulamayı Amazon EC2'de dağıtın
örnekler. EC2 bulut sunucularında iş akışı adımlarını çağırmak için Step Functions'ı kullanın.

C. Amazon EventBridge'de iş akışını oluşturun. AWS Lambda'yı çağırmak için EventBridge'i kullanın
iş akışı adımlarını işlemek için bir zamanlamaya göre çalışır.

D. AWS Step Functions'ta iş akışını oluşturun. Bir durum makinesi oluşturmak için Step Functions'ı kullanın.
İş akışı adımlarını işlemek amacıyla AWS Lambda işlevlerini çağırmak için durum makinesini kullanın.

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

Soru 352
Bir şirket, çevrimiçi çok oyunculu bir oyun için ağ tasarlıyor. Oyun UDP'yi kullanıyor
ağ protokolü ve sekiz AWS Bölgesinde dağıtılacak. Ağ mimarisinin ihtiyaçları
Son kullanıcılara yüksek kaliteli bir oyun deneyimi sunmak için gecikmeyi ve paket kaybını en aza indirmek.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her Bölgede bir transit ağ geçidi kurun. Bölgeler arası eşleme ekleri oluşturun
her bir transit ağ geçidi.

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

Soru 353
Bir şirket, tek bir Erişilebilirlik ile Amazon EC2 bulut sunucularında üç katmanlı bir web uygulaması barındırıyor
Bölge. Web uygulaması, EC2'de barındırılan, kendi kendini yöneten bir MySQL veritabanını kullanır.
verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde depolamak için örnek. MySQL
veritabanı şu anda 1 TB Tedarik Edilmiş IOPS SSD (io2) EBS birimi kullanıyor. Şirket bekliyor
trafiğin en yoğun olduğu zamanlarda hem okuma hem de yazma için 1.000 IOPS trafik.
Şirket, kesintileri en aza indirmek, performansı istikrara kavuşturmak ve maliyetleri düşürmek istiyor.
IOPS'yi iki katına çıkarma kapasitesini korur. Şirket veritabanı katmanını bir
Yüksek oranda kullanılabilir ve hataya dayanıklı, tam olarak yönetilen bir çözüm.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. io2 Block ile Amazon RDS for MySQL veritabanı bulut sunucusunun Multi-AZ dağıtımını kullanın
EBS hacmini ifade edin.

B. Amazon RDS for MySQL veritabanı bulut sunucusunun Multi-AZ dağıtımını Genel Amaçlı olarak kullanın
SSD (gp2) EBS birimi.

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

Soru 354
Bir şirket AWS'de sunucusuz bir uygulama barındırıyor. Uygulama Amazon API Gateway'i kullanıyor,
AWS Lambda ve PostgreSQL için Amazon RDS veritabanı. Şirket bir durumu fark eder
yoğun zamanlarda veritabanı bağlantısı zaman aşımlarından kaynaklanan uygulama hatalarında artış
trafik veya öngörülemeyen trafik. Şirketin uygulama hatalarını azaltacak bir çözüme ihtiyacı var
kodda en az değişiklikle.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

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

Soru 355
Bir şirket eski bir uygulamayı AWS'ye taşıyor. Uygulama her saat başı toplu iş çalıştırıyor
ve CPU yoğundur. Toplu iş, şirket içi bir sunucuyla ortalama 15 dakika sürer.
Sunucuda 64 sanal CPU (vCPU) ve 512 GiB bellek bulunur.
Hangi çözüm toplu işi EN AZ operasyonel ek yük ile 15 dakika içinde çalıştıracak?

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

Soru 356
Bir şirket, veri nesnelerini Amazon S3 Standard depolama alanında saklar. Bir çözüm mimarının sahip olduğu
verilerin %75'ine 30 gün sonra nadiren erişildiğini buldu. Şirketin tüm verilere ihtiyacı var
aynı yüksek kullanılabilirlik ve esneklikle anında erişilebilir olmaya devam ediyor, ancak şirket
depolama maliyetlerini en aza indirmek istiyor.
Hangi depolama çözümü bu gereksinimleri karşılayacak?

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

Soru 357
Bir oyun şirketi, genel puan tablosunu veri merkezinden AWS Cloud'a taşıyor.
şirket, Application Load Balancer'ın arkasında Amazon EC2 Windows Server örneklerini kullanıyor.
dinamik uygulamasını barındırın. Şirketin yüksek kullanılabilirliğe sahip bir depolama çözümüne ihtiyacı var.
uygulama. Uygulama statik dosyalardan ve dinamik sunucu tarafı kodundan oluşur.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Statik dosyaları Amazon S3'te saklayın. Uçtaki nesneleri önbelleğe almak için Amazon CloudFront'u kullanın.

B. Statik dosyaları Amazon S3'te saklayın. Uçtaki nesneleri önbelleğe almak için Amazon ElastiCache'i kullanın.

C. Sunucu tarafı kodunu Amazon Elastic File System'de (Amazon EFS) saklayın. EFS'yi monte edin
Dosyaları paylaşmak için her EC2 bulut sunucusunda birim.

D. Sunucu tarafı kodunu Windows Dosya Sunucusu için Amazon FSx'te saklayın. FSx'i aşağıdakiler için monte edin:
Dosyaları paylaşmak için her EC2 örneğindeki Windows Dosya Sunucusu birimi.

E. Sunucu tarafı kodunu Genel Amaçlı SSD (gp2) Amazon Elastic Block Store'da saklayın
(Amazon EBS) hacmi. Dosyaları paylaşmak için EBS birimini her EC2 bulut sunucusuna bağlayın.

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

Soru 358
Bir sosyal medya şirketi, uygulamasını bir Uygulamanın arkasında Amazon EC2 bulut sunucularında çalıştırıyor
Yük Dengeleyici (ALB). ALB, Amazon CloudFront dağıtımının kaynağıdır.
uygulamanın bir Amazon S3 klasöründe depolanan bir milyardan fazla görüntüsü var ve işlemler
saniyede binlerce görüntü. Şirket, görüntüleri dinamik olarak yeniden boyutlandırmak istiyor ve
Müşterilere uygun formatları sunar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. EC2 bulut sunucusuna harici bir görüntü yönetimi kitaplığı yükleyin. Görüntü yönetimini kullanın
görüntüleri işlemek için kütüphane.

B. CloudFront kaynak istek politikası oluşturun. Görüntüleri otomatik olarak yeniden boyutlandırmak ve
istekteki Kullanıcı Aracısı HTTP başlığına göre uygun formatı sunar.

C. Harici bir görüntü yönetimi kitaplığıyla Lambda@Edge işlevini kullanın. İlişkilendir
Görüntüleri sunan CloudFront davranışlarıyla Lambda@Edge işlevi.

D. CloudFront yanıt başlıkları ilkesi oluşturun. Resimleri otomatik olarak yeniden boyutlandırmak için politikayı kullanın
ve istekteki Kullanıcı Aracısı HTTP başlığına göre uygun formatı sunmak.

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

Soru 359
Bir hastanenin hasta kayıtlarını bir Amazon S3 klasöründe saklaması gerekir. Hastanenin uyumluluğu
Ekip, korunan tüm sağlık bilgilerinin (PHI) aktarım sırasında ve kullanım sırasında şifrelendiğinden emin olmalıdır.
Uyumluluk ekibinin, kullanımda olmayan veriler için şifreleme anahtarını yönetmesi gerekir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Sertifika Yöneticisi'nde (ACM) genel bir SSL/TLS sertifikası oluşturun. İlişkilendir
Amazon S3 ile sertifika. Sunucu tarafını kullanmak üzere her S3 grubu için varsayılan şifrelemeyi yapılandırın
AWS KMS anahtarlarıyla (SSE-KMS) şifreleme. KMS'yi yönetmek için uyumluluk ekibini atayın
anahtarlar.

B. Yalnızca şifrelenmiş izin vermek için S3 klasör ilkelerinde aws:SecureTransport koşulunu kullanın
HTTPS (TLS) üzerinden bağlantılar. Kullanılacak her S3 grubu için varsayılan şifrelemeyi yapılandırın
S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifreleme. Uyumluluk ekibini atayın
SSE-S3 anahtarlarını yönetmek için.

C. Yalnızca şifrelenmiş izin vermek için S3 klasör ilkelerinde aws:SecureTransport koşulunu kullanın
HTTPS (TLS) üzerinden bağlantılar. Kullanılacak her S3 grubu için varsayılan şifrelemeyi yapılandırın
AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifreleme. Yönetmek için uyumluluk ekibini atayın
KMS anahtarları.

D. Yalnızca şifrelenmiş izin vermek için S3 klasör ilkelerinde aws:SecureTransport koşulunu kullanın
HTTPS (TLS) üzerinden bağlantılar. Depolanan hassas verileri korumak için Amazon Macie'yi kullanın
Amazon S3. Uyumluluk ekibini Macie'yi yönetmesi için atayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Yalnızca HTTPS (TLS) üzerinden şifrelenmiş bağlantılara izin vermek için S3 paket ilkelerinde aws:SecureTransport koşulunu kullanın. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanmak için her S3 klasörü için varsayılan şifrelemeyi yapılandırın. KMS anahtarlarını yönetmek için uyumluluk ekibini atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 360
Bir şirket, iki REST API içeren özel bir ağ geçidini çalıştırmak için Amazon API Gateway'i kullanıyor.
aynı VPC'dir. BuyStock RESTful web hizmeti, CheckFunds RESTful web hizmetini çağırarak
Bir hisse senedi satın alınmadan önce yeterli fonun mevcut olduğundan emin olun. Şirket
VPC akış günlüklerinde BuyStock RESTful web hizmetinin CheckFunds'u çağırdığını fark ettim
VPC yerine internet üzerinden RESTful web hizmeti. Bir çözüm mimarının yapması gerekenler
API'lerin VPC aracılığıyla iletişim kurmasını sağlayacak bir çözüm uygulayın.
Kodda yapılacak EN AZ değişiklikle bu gereksinimleri hangi çözüm karşılayacak?

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

Soru 361
Bir şirket, AWS'de çok oyunculu bir oyun uygulamasına ev sahipliği yapıyor. Şirket başvuruyu istiyor
verileri milisaniyenin altında bir gecikmeyle okumak ve geçmiş veriler üzerinde tek seferlik sorgular çalıştırmak için.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Sık erişilen veriler için Amazon RDS'yi kullanın. Dışa aktarmak için periyodik bir özel komut dosyası çalıştırın
verileri bir Amazon S3 klasörüne aktarın.

B. Verileri doğrudan bir Amazon S3 klasöründe saklayın. Daha eskiye geçmek için bir S3 Yaşam Döngüsü politikası uygulayın
verileri uzun süreli depolama için S3 Glacier Deep Archive'a aktarın. Veriler üzerinde tek seferlik sorgular çalıştırın
Amazon Athena'yı kullanarak Amazon S3.

C. Sıklıkla kullanılan veriler için Amazon DynamoDB'yi DynamoDB Accelerator (DAX) ile birlikte kullanın.
erişildi. DynamoDB tablo dışa aktarımını kullanarak verileri bir Amazon S3 klasörüne aktarın. Çalıştır
Amazon Athena'yı kullanarak Amazon S3'teki veriler üzerinde tek seferlik sorgular.

D. Sık erişilen veriler için Amazon DynamoDB'yi kullanın. Amazon'a akışı açın
Kinesis Veri Akışları. Kinesis Data'daki verileri okumak için Amazon Kinesis Data Firehose'u kullanın
Akışlar. Kayıtları bir Amazon S3 klasöründe saklayın.

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

Soru 362
Bir şirket, belirli bir ödeme için mesaj gerektiren bir ödeme işleme sistemi kullanıyor
Kimlik gönderilme sırasına göre alınacaktır. Aksi takdirde ödemeler
yanlış işlenmiş.
Bir çözüm mimarının bu gereksinimi karşılamak için hangi eylemleri gerçekleştirmesi gerekir? (İki tane seçin.)

A. Mesajları, bölüm anahtarı olarak ödeme kimliğini kullanarak bir Amazon DynamoDB tablosuna yazın.

B. Bölüm olarak ödeme kimliğini kullanarak mesajları bir Amazon Kinesis veri akışına yazın
anahtar.

C. Mesajları, ödeme kimliğiyle birlikte bir Amazon ElastiCache for Memcached kümesine yazın:
anahtar.

D. Mesajları bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın. Ayarla
ödeme kimliğini kullanmak için message özelliğini kullanın.

E. Mesajları bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna yazın. Ayarla
ödeme kimliğini kullanmak için mesaj grubunu seçin.

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

Soru 363
Bir şirket, farklı kullanıcılara benzersiz etkinlikler göndermesi gereken bir oyun sistemi inşa ediyor.
Liderlik tablosu, çöpçatanlık ve kimlik doğrulama hizmetleri aynı anda. Şirketin bir ihtiyacı var
Olayların sırasını garanti eden AWS olay odaklı sistem.
Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru 364
Bir hastane hastalardan semptomları toplayan yeni bir uygulama tasarlıyor. Hastane var
Amazon Simple Queue Service'i (Amazon SQS) ve Amazon Simple Notification'ı kullanmaya karar verdim
Mimaride hizmet (Amazon SNS).
Bir çözüm mimarı altyapı tasarımını inceliyor. Veriler kullanımda değilken şifrelenmelidir
transit. Verilere yalnızca hastanenin yetkili personeli erişebilmelidir.
Çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. SQS bileşenlerinde sunucu tarafı şifrelemeyi açın. Varsayılan anahtar politikasını şu şekilde güncelleyin:
Anahtar kullanımını bir dizi yetkili sorumluyla sınırlandırın.

B. AWS Key Management kullanarak SNS bileşenlerinde sunucu tarafı şifrelemeyi açın
Hizmet (AWS KMS) müşteri tarafından yönetilen anahtar. Anahtar kullanımını belirli bir grupla sınırlamak için bir anahtar ilkesi uygulayın.
yetkili müdürler.

C. SNS bileşenlerinde şifrelemeyi açın. Anahtar kullanımını kısıtlamak için varsayılan anahtar politikasını güncelleyin
bir dizi yetkili müdüre. Konu politikasında yalnızca şifrelenmeye izin verecek bir koşul belirleyin
TLS üzerinden bağlantılar.

D. AWS Key Management kullanarak SQS bileşenlerinde sunucu tarafı şifrelemeyi açın
Hizmet (AWS KMS) müşteri tarafından yönetilen anahtar. Anahtar kullanımını belirli bir grupla sınırlamak için bir anahtar ilkesi uygulayın.
yetkili müdürler. Yalnızca şifreli bağlantılara izin vermek için kuyruk ilkesinde bir koşul ayarlayın
TLS.

E. AWS Key Management kullanarak SQS bileşenlerinde sunucu tarafı şifrelemeyi açın
Hizmet (AWS KMS) müşteri tarafından yönetilen anahtar. Anahtar kullanımını belirli bir grupla sınırlamak için bir IAM politikası uygulayın.
yetkili müdürler. Yalnızca şifreli bağlantılara izin vermek için kuyruk ilkesinde bir koşul ayarlayın
TLS.

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

Soru 365
Bir şirket Amazon RDS tarafından desteklenen bir web uygulaması çalıştırıyor. Yeni bir veritabanı
Yönetici, veritabanı tablosundaki bilgileri yanlışlıkla düzenleyerek veri kaybına neden oldu. Yardım etmek
Bu tür bir olaydan kurtulmak için şirket, veritabanını kendi sistemine geri yükleme olanağı istiyor
son 30 gün içindeki herhangi bir değişiklikten 5 dakika öncesine ait durum.
Çözüm mimarı bu gereksinimi karşılamak için tasarıma hangi özelliği dahil etmelidir?

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

Soru 366
Bir şirketin web uygulaması, AWS'nin önündeki bir Amazon API Gateway API'sinden oluşur
Lambda işlevi ve bir Amazon DynamoDB veritabanı. Lambda işlevi şunları yönetir:
iş mantığı ve DynamoDB tablosu verileri barındırır. Uygulama Amazon Cognito'yu kullanıyor
uygulamanın bireysel kullanıcılarını tanımlamak için kullanıcı havuzları. Bir çözüm mimarının güncellenmesi gerekiyor
Uygulamayı yalnızca aboneliği olan kullanıcıların premium içeriğe erişebilmesi için kullanın.
Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. API Ağ Geçidi API'sinde API önbelleğe almayı ve azaltmayı etkinleştirin.

B. API Gateway API'sinde AWS WAF'ı kurun. Kullanıcıları filtrelemek için bir kural oluşturun.
abonelik.

C. DynamoDB tablosundaki premium içeriğe ayrıntılı IAM izinleri uygulayın.

D. API'si olmayan kullanıcıların erişimini sınırlamak için API kullanım planlarını ve API anahtarlarını uygulayın.
abonelik.

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

Soru 367
Bir şirket, istekleri UDP tabanlı adresine yönlendirmek için Amazon Route 53 gecikme tabanlı yönlendirmeyi kullanıyor
dünya çapındaki kullanıcılar için uygulama. Uygulama yedekli sunucularda barındırılmaktadır.
Şirketin Amerika Birleşik Devletleri, Asya ve Avrupa'daki şirket içi veri merkezleri. Şirketin
uyumluluk gereksinimleri, uygulamanın şirket içinde barındırılması gerektiğini belirtir. şirket
uygulamanın performansını ve kullanılabilirliğini artırmak istiyor.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Sorunları gidermek için üç AWS Bölgesinde üç Ağ Yük Dengeleyicisini (NLB) yapılandırın
şirket içi uç noktalar. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve
Uç noktaları olarak NLB'ler. Şunu işaret eden bir CNAME kullanarak uygulamaya erişim sağlayın:
hızlandırıcı DNS.

B. Üç AWS Bölgesinde üç Uygulama Yük Dengeleyicisini (ALB) yapılandırın.
şirket içi uç noktalar. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve
Uç noktaları olarak ALB'ler. Şunu işaret eden bir CNAME kullanarak uygulamaya erişim sağlayın:
hızlandırıcı DNS.

C. Sorunları gidermek için üç AWS Bölgesinde üç Ağ Yük Dengeleyicisini (NLB) yapılandırın
şirket içi uç noktalar. Route 53'te, üç NLB'ye işaret eden gecikmeye dayalı bir kayıt oluşturun,
ve bunu bir Amazon CloudFront dağıtımı için kaynak olarak kullanın. Uygulamaya erişim sağlayın:
CloudFront DNS'ye işaret eden bir CNAME kullanarak.

D. Sorunları gidermek için üç AWS Bölgesinde üç Uygulama Yük Dengeleyicisini (ALB) yapılandırın
şirket içi uç noktalar. Route 53'te, üç ALB'ye işaret eden gecikmeye dayalı bir kayıt oluşturun,
ve bunu bir Amazon CloudFront dağıtımı için kaynak olarak kullanın. Uygulamaya erişim sağlayın:
CloudFront DNS'ye işaret eden bir CNAME kullanarak.

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

Soru 368
Bir çözüm mimarı, tüm yeni kullanıcıların belirli karmaşıklık gereksinimlerine sahip olmasını ve
IAM kullanıcı şifreleri için zorunlu rotasyon süreleri.
Çözüm mimarı bunu başarmak için ne yapmalıdır?

A. AWS hesabının tamamı için genel bir şifre politikası belirleyin.

B. AWS hesabındaki her IAM kullanıcısı için bir şifre politikası belirleyin.

C. Parola gereksinimlerini ayarlamak için üçüncü taraf satıcı yazılımını kullanın.

D. Şifreyi ayarlamak için Create_newuser olayına bir Amazon CloudWatch kuralı ekleyin.
uygun gereksinimler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS hesabının tamamı için genel bir şifre politikası belirleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 369
Bir şirket, bir uygulamayı Amazon EC2 Linux bulut sunucularına taşıdı. Bunlardan biri EC2
örnekler bir zamanlamaya göre 1 saatlik birkaç görevi çalıştırır. Bu görevler farklı ekipler tarafından yazılmıştır.
ve ortak bir programlama dili yoktur. Şirket performans konusunda endişeli
ve bu görevler tek bir örnek üzerinde çalışırken ölçeklenebilirlik. Bir çözüm mimarının yapması gerekenler
Bu endişeleri gidermek için bir çözüm uygulayın.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Görevleri iş olarak çalıştırmak için AWS Batch'i kullanın. Amazon EventBridge'i kullanarak işleri planlayın
(Amazon CloudWatch Etkinlikleri).

B. EC2 örneğini bir konteynere dönüştürün. Kapsayıcıyı oluşturmak için AWS App Runner'ı kullanın
görevleri iş olarak çalıştırmayı talep edin.

C. Görevleri AWS Lambda işlevlerine kopyalayın. Amazon'u kullanarak Lambda işlevlerini zamanlayın
EventBridge (Amazon CloudWatch Etkinlikleri).

D. Görevleri çalıştıran EC2 bulut sunucusunun bir Amazon Machine Image'ını (AMI) oluşturun. Bir oluştur
Örneğin birden fazla kopyasını çalıştırmak için AMI ile Otomatik Ölçeklendirme grubu.

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

Soru 370
Bir şirket, VPC'de halka açık üç katmanlı bir web uygulaması çalıştırıyor. Uygulama Amazon'da çalışıyor
Birden fazla Erişilebilirlik Alanındaki EC2 bulut sunucuları. Özel alt ağlarda çalışan EC2 bulut sunucuları
İnternet üzerinden bir lisans sunucusuyla iletişim kurmanız gerekir. Şirketin yönetilen bir yöneticiye ihtiyacı var
Operasyonel bakımı en aza indiren çözüm.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Genel bir alt ağda bir NAT örneği sağlayın. Her özel alt ağın rota tablosunu bir
NAT örneğine işaret eden varsayılan rota.

B. Özel bir alt ağda bir NAT örneği sağlayın. Her özel alt ağın rota tablosunu bir
NAT örneğine işaret eden varsayılan rota.

C. Genel bir alt ağda bir NAT ağ geçidi sağlayın. Her özel alt ağın rota tablosunu bir
NAT ağ geçidine işaret eden varsayılan rota.

D. Özel bir alt ağda bir NAT ağ geçidi sağlayın. Her özel alt ağın rota tablosunu bir
NAT ağ geçidine işaret eden varsayılan rota.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Genel bir alt ağda bir NAT ağ geçidi sağlayın. Her özel alt ağın rota tablosunu, NAT ağ geçidine işaret eden varsayılan bir rota ile değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 371
Bir şirketin Amazon Elastic Kubernetes Service (Amazon EKS) kümesi oluşturması gerekir.
bir dijital medya akışı uygulamasına ev sahipliği yapın. EKS kümesi, yönetilen bir düğüm grubu kullanacaktır.
depolama için Amazon Elastic Block Store (Amazon EBS) birimleri tarafından desteklenir. şirket
AWS Key'de depolanan, müşteri tarafından yönetilen bir anahtarı kullanarak aktif olmayan tüm verileri şifrelemelidir
Yönetim Hizmeti (AWS KMS).
Hangi eylem kombinasyonu bu gereksinimi EN AZ operasyonel giderle karşılayacaktır?
(İki tane seçin.)

C. Veri şifrelemeyi gerçekleştirmek için müşteri tarafından yönetilen anahtarı kullanan bir Kubernetes eklentisi kullanın.

B. EKS kümesini oluşturduktan sonra EBS birimlerini bulun. kullanarak şifrelemeyi etkinleştirin.
müşteri tarafından yönetilen anahtar.

C. EKS kümesinin oluşturulacağı AWS Bölgesinde EBS şifrelemesini varsayılan olarak etkinleştirin.
Müşteri tarafından yönetilen anahtarı varsayılan anahtar olarak seçin.

D. EKS kümesini oluşturun. İzin veren bir politikaya sahip bir IAM rolü oluşturun
müşteri tarafından yönetilen anahtar. Rolü EKS kümesiyle ilişkilendirin.

E. Müşteri tarafından yönetilen anahtarı EKS kümesinde Kubernetes sırrı olarak saklayın. Müşteriyi kullanın
EBS birimlerini şifrelemek için yönetilen anahtar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** EKS kümesinin oluşturulacağı AWS Bölgesinde EBS şifrelemesini varsayılan olarak etkinleştirin. Müşteri tarafından yönetilen anahtarı varsayılan anahtar olarak seçin. EKS kümesini oluşturun. Müşteri tarafından yönetilen anahtara izin veren bir politikaya sahip bir IAM rolü oluşturun. Rolü EKS kümesiyle ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 372
Bir şirket Oracle veritabanını AWS'ye taşımak istiyor. Veritabanı tek bir dosyadan oluşur
milyonlarca coğrafi bilgi sistemi (GIS) görüntüsünü içeren tablo
çözünürlüktedir ve coğrafi kodla tanımlanır.
Bir doğal afet meydana geldiğinde her birkaç dakikada bir on binlerce görüntü güncellenir.
Her coğrafi kodun kendisiyle ilişkilendirilmiş tek bir resmi veya satırı vardır. Şirket istiyor
Bu tür etkinlikler sırasında yüksek oranda kullanılabilir ve ölçeklenebilir bir çözüm.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Görüntüleri ve coğrafi kodları bir veritabanı tablosunda saklayın. Amazon'da çalışan Oracle'ı kullanma
RDS Multi-AZ Veritabanı bulut sunucusu.

B. Görüntüleri Amazon S3 klasörlerinde saklayın. Amazon DynamoDB'yi aşağıdaki coğrafi kodla kullanın:
değer olarak anahtar ve resim S3 URL'si.

C. Görüntüleri ve coğrafi kodları bir Amazon DynamoDB tablosunda saklayın. DynamoDB'yi yapılandırma
Yüksek yük zamanlarında Hızlandırıcı (DAX).

D. Görüntüleri Amazon S3 klasörlerinde saklayın. Coğrafi kodları ve görüntü S3 URL'lerini bir
veritabanı tablosu. Amazon RDS Multi-AZ veritabanı bulut sunucusunda çalışan Oracle'ı kullanın.

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

Soru 373
Bir şirketin otomobillerdeki IoT sensörlerinden veri toplayan bir uygulaması var. Veriler
Amazon Kinesis Data Firehose aracılığıyla Amazon S3'te akışa alınır ve depolanır. Veriler üretir
her yıl trilyonlarca S3 nesnesi. Şirket her sabah önceki 30 günün verilerini kullanıyor.
Bir dizi makine öğrenimi (ML) modelini yeniden eğitmek için günler.
Şirket, her yıl dört kez önceki 12 aya ait verileri kullanarak
diğer makine öğrenimi modellerini analiz edin ve eğitin. Veriler 1 saate kadar minimum gecikmeyle mevcut olmalıdır.
yıl. 1 yıl sonra verilerin arşiv amaçlı saklanması gerekir.
Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılıyor?

A. S3 Intelligent-Tiering depolama sınıfını kullanın. Nesnelerin geçişine yönelik bir S3 Yaşam Döngüsü ilkesi oluşturma
1 yıl sonra S3 Glacier Deep Archive'a.

B. S3 Intelligent-Tiering depolama sınıfını kullanın. S3 Intelligent-Tiering'i otomatik olarak yapılandırın
nesneleri 1 yıl sonra S3 Glacier Deep Archive'a taşıyın.

C. S3 Standart-Seyrek Erişim (S3 Standart-IA) depolama sınıfını kullanın. S3 Yaşam Döngüsü Oluşturun
nesneleri 1 yıl sonra S3 Glacier Deep Archive'a geçirme politikası.

D. S3 Standart depolama sınıfını kullanın. Nesneleri S3'e geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun
30 gün sonra Standart-Nadir Erişim (S3 Standart-IA) ve ardından S3 Glacier Deep Archive'a
1 yıl sonra.

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

Soru 374
Bir şirket, ABD-Doğu-1'deki üç ayrı VPC'de birden fazla iş uygulaması çalıştırıyor
Bölge. Uygulamaların VPC'ler arasında iletişim kurabilmesi gerekir. Başvurular aynı zamanda
Her gün yüzlerce gigabayt veriyi gecikmeye duyarlı bir bilgisayara tutarlı bir şekilde gönderebilmelidir.
Tek bir şirket içi veri merkezinde çalışan uygulama.
Bir çözüm mimarının, ağ bağlantı çözümünü en üst düzeye çıkaracak şekilde tasarlaması gerekir.
maliyet etkinliği.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Veri merkezinden AWS'ye üç AWS Siteden Siteye VPN bağlantısı yapılandırın. Kurmak
Her VPC için bir VPN bağlantısı yapılandırarak bağlantı kurabilirsiniz.

B. Her VPC'de bir üçüncü taraf sanal ağ cihazını başlatın. Bir IPsec VPN tüneli oluşturun
veri merkezi ile her sanal cihaz arasında.

C. Veri merkezinden Direct Connect'e üç AWS Direct Connect bağlantısı kurun
us-doğu-1'deki ağ geçidi. Her VPC'yi Direct'ten birini kullanacak şekilde yapılandırarak bağlantı kurun.
Bağlantıları bağlayın.

D. Veri merkezinden AWS'ye bir AWS Direct Connect bağlantısı kurun. Toplu taşıma oluştur
ağ geçidini oluşturun ve her VPC'yi geçiş ağ geçidine ekleyin. Direct arasında bağlantı kurun
Bağlantıyı ve transit ağ geçidini bağlayın.

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

Soru 375
Bir e-ticaret şirketi, birden fazla sunucusuz ürün içeren dağıtılmış bir uygulama geliştiriyor
Sipariş işleme görevlerini tamamlamak için işlevler ve AWS hizmetleri. Bu görevler manuel gerektirir
iş akışının bir parçası olarak onaylar. Bir çözüm mimarının aşağıdakilere yönelik bir mimari tasarlaması gerekir:
sipariş işleme uygulaması. Çözüm birden fazla AWS Lambda'yı birleştirebilmelidir
duyarlı sunucusuz uygulamalara dönüştürülür. Çözüm aynı zamanda verileri düzenlemeli ve
Amazon EC2 bulut sunucularında, konteynerlerde veya şirket içi sunucularda çalışan hizmetler.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

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

Soru 376
Bir şirket MySQL Veritabanı bulut sunucusu için Amazon RDS'yi başlattı. Bağlantıların çoğu
veritabanı sunucusuz uygulamalardan geliyor. Veritabanına yönelik uygulama trafiği değişir
önemli ölçüde rastgele aralıklarla. Talebin yoğun olduğu zamanlarda kullanıcılar, uygulamalarının
veritabanı bağlantısı reddetme hatalarıyla karşılaşabilirsiniz.
Hangi çözüm bu sorunu EN AZ operasyonel ek yük ile çözecektir?

A. RDS Proxy'sinde bir proxy oluşturun. Kullanıcıların uygulamalarını veritabanı bulut sunucusunu kullanacak şekilde yapılandırın
RDS Proxy'si.

B. Kullanıcı uygulamaları ile veritabanı arasında Amazon ElastiCache for Memcached'i dağıtın
örnek.

C. Veritabanı bulut sunucusunu daha yüksek G/Ç kapasitesine sahip farklı bir bulut sunucusu sınıfına taşıyın. Yapılandır
Kullanıcıların uygulamalarının yeni veritabanı bulut sunucusunu kullanmasına izin verin.

D. Veritabanı bulut sunucusu için Multi-AZ'yi yapılandırın. Kullanıcıların uygulamalarını arasında geçiş yapacak şekilde yapılandırın.
Veritabanı örnekleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** RDS Proxy'sinde bir proxy oluşturun. Kullanıcı uygulamalarını RDS Proxy aracılığıyla veritabanı bulut sunucusunu kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 377
Bir şirket yakın zamanda işletimle ilgili bilgileri merkezileştirmek için yeni bir denetim sistemi kurdu.
Amazon EC2 bulut sunucuları için sistem sürümleri, düzeltme ekleri ve yüklü yazılımlar. bir çözüm
mimar, EC2 Otomatik Ölçeklendirme grupları aracılığıyla tüm örneklerin başarıyla sağlanmasını sağlamalıdır
Raporları başlatıldığı ve sonlandırıldığı anda denetim sistemine gönderin.
Hangi çözüm bu hedeflere EN verimli şekilde ulaşır?

A. Planlanmış bir AWS Lambda işlevini kullanın ve göndermek için tüm EC2 bulut sunucularında uzaktan bir komut dosyası çalıştırın.
Verilerin denetim sistemine aktarılması.

B. Denetim sistemine veri göndermek amacıyla özel bir komut dosyası çalıştırmak için EC2 Otomatik Ölçeklendirme yaşam döngüsü kancalarını kullanın
bulut sunucuları ne zaman başlatılır ve sonlandırılır.

C. Gönderilecek kullanıcı verileri aracılığıyla özel bir komut dosyası çalıştırmak için EC2 Otomatik Ölçeklendirme başlatma yapılandırmasını kullanın.
Örnekler başlatıldığında ve sonlandırıldığında verileri denetim sistemine gönderir.

D. Denetim sistemine veri göndermek için örnek işletim sisteminde özel bir komut dosyası çalıştırın.
Bulut sunucusu başlatıldığında ve başlatıldığında EC2 Otomatik Ölçeklendirme grubu tarafından çağrılacak komut dosyasını yapılandırın
sonlandırıldı.

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

Soru 378
Bir şirket, iletişim için UDP kullanan gerçek zamanlı çok oyunculu bir oyun geliştiriyor
Otomatik Ölçeklendirme grubundaki istemci ve sunucular arasında. Talepte artış bekleniyor
gün boyunca bu nedenle oyun sunucusu platformunun buna göre uyum sağlaması gerekir. Geliştiriciler depolamak istiyor
oyuncu puanları ve diğer ilişkisel olmayan veriler, herhangi bir değişiklik olmadan ölçeklenebilecek bir veritabanı çözümünde
müdahale.
Bir çözüm mimarı hangi çözümü önermelidir?

C. Trafik dağıtımı için Amazon Route 53'ü ve veri depolama için Amazon Aurora Serverless'ı kullanın.

B. Trafik dağıtımı için bir Network Load Balancer ve isteğe bağlı olarak Amazon DynamoDB kullanın.
veri depolama.

C. Trafik dağıtımı için bir Network Load Balancer ve dağıtım için Amazon Aurora Global Database kullanın.
veri depolama.

D. Trafik dağıtımı ve Amazon DynamoDB global tabloları için Application Load Balancer kullanın
veri depolama için.

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

Soru 379
Bir şirket, Amazon API Gateway API arka ucunu kullanan bir ön uç uygulamasını barındırıyor.
AWS Lambda ile entegre edilmiştir. API istek aldığında Lambda işlevi birçok isteği yükler.
kütüphaneler. Daha sonra Lambda işlevi bir Amazon RDS veritabanına bağlanır, verileri işler,
ve verileri ön uç uygulamaya döndürür. Şirket bu yanıtı sağlamak istiyor
Şirketin ayarlarında en az sayıda değişiklikle tüm kullanıcılar için gecikme mümkün olduğu kadar düşük olur
operasyonlar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Sorgulama yapmak için ön uç uygulaması ile veritabanı arasında bağlantı kurun
API'yi atlayarak daha hızlı.

B. İstekleri işleyen Lambda işlevi için sağlanan eşzamanlılığı yapılandırın.

C. Benzer veri kümelerinin daha hızlı alınması için sorgu sonuçlarını Amazon S3'te önbelleğe alın.

D. Lambda'nın kurabileceği bağlantı sayısını artırmak için veritabanının boyutunu artırın
bir kerede.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İstekleri işleyen Lambda işlevi için sağlanan eşzamanlılığı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 380
Bir şirket şirket içi iş yükünü AWS Cloud'a taşıyor. Şirket zaten kullanıyor
çeşitli Amazon EC2 bulut sunucuları ve Amazon RDS DB bulut sunucuları. Şirket çözüm istiyor
EC2 bulut sunucularını ve veritabanı bulut sunucularını iş dışında otomatik olarak başlatıp durduran
saatler. Çözüm, maliyeti ve altyapı bakımını en aza indirmelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Elastik yeniden boyutlandırmayı kullanarak EC2 örneklerini ölçeklendirin. Veritabanı bulut sunucularını aşağıdakiler dışında sıfıra ölçeklendirin:
iş saatleri.

B. EC2'yi otomatik olarak başlatacak ve durduracak iş ortağı çözümleri için AWS Marketplace'i keşfedin
bulut sunucuları ve veritabanı bulut sunucuları bir zamanlamaya göre.

C. Başka bir EC2 bulut sunucusunu başlatın. Başlayacak kabuk komut dosyalarını çalıştırmak için bir crontab zamanlaması yapılandırın
ve mevcut EC2 bulut sunucularını ve veritabanı bulut sunucularını bir plan doğrultusunda durdurun.

D. EC2 bulut sunucularını ve veritabanı bulut sunucularını başlatacak ve durduracak bir AWS Lambda işlevi oluşturun.
Amazon EventBridge'i Lambda işlevini belirli bir programa göre çağıracak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** EC2 bulut sunucularını ve veritabanı bulut sunucularını başlatacak ve durduracak bir AWS Lambda işlevi oluşturun. Amazon EventBridge'i Lambda işlevini belirli bir programa göre çağıracak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 381
Bir şirket, PostgreSQL veritabanı içeren üç katmanlı bir web uygulamasına ev sahipliği yapıyor.
veritabanı belgelerdeki meta verileri saklar. Şirket meta verilerde anahtar arıyor
Şirketin her ay bir raporda incelediği belgeleri alma koşulları. Belgeler
Amazon S3'te depolanır. Belgeler genellikle yalnızca bir kez yazılır ancak güncellenir
sık sık.
İlişkisel sorguların kullanılmasıyla raporlama süreci birkaç saat sürer. Raporlama süreci
herhangi bir belge değişikliğini veya yeni belge eklenmesini engellememelidir. bir çözüm
Mimarın raporlama sürecini hızlandıracak bir çözüm uygulaması gerekiyor.
Uygulamada EN AZ miktarda değişiklikle bu gereksinimleri hangi çözüm karşılayacak?
kod?

A. Okuma dosyası içeren yeni bir Amazon DocumentDB (MongoDB uyumluluğuyla) kümesi kurun.
kopya. Raporları oluşturmak için okuma kopyasını ölçeklendirin.

B. Aurora Replikası içeren yeni bir Amazon Aurora PostgreSQL Veritabanı kümesi kurun. Sorun
Raporları oluşturmak için Aurora Replika'ya yapılan sorgular.

C. PostgreSQL Multi-AZ Veritabanı bulut sunucusu için yeni bir Amazon RDS ayarlayın. Raporlamayı yapılandırma
Raporlama modülünün birincil RDS düğümünü etkilememesi için ikincil RDS düğümünü sorgulamak için modül
düğüm.

D. Belgeleri depolamak için yeni bir Amazon DynamoDB tablosu oluşturun. Sabit bir yazma kapasitesi kullanın
yeni belge girişlerini destekleyin. Raporları desteklemek için okuma kapasitesini otomatik olarak ölçeklendirin.

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

Soru 382
Bir şirketin AWS'de kullanıcı cihazlarından sensör verilerini alan üç katmanlı bir uygulaması var.
Trafik bir Ağ Yük Dengeleyicisi (NLB) üzerinden ve ardından Amazon EC2 bulut sunucularına akar.
web katmanına ve son olarak uygulama katmanı için EC2 bulut sunucularına. Uygulama katmanı bir çağrı yapar
veritabanı.
Bir çözüm mimarı aktarım halindeki verilerin güvenliğini artırmak için ne yapmalıdır?

A. TLS dinleyicisini yapılandırın. Sunucu sertifikasını NLB'ye dağıtın.

B. AWS Shield Advanced'i yapılandırın. NLB'de AWS WAF'ı etkinleştirin.

C. Yük dengeleyiciyi Application Load Balancer (ALB) olarak değiştirin. AWS WAF'ı etkinleştirin
ALB.

D. EC2 bulut sunucularındaki Amazon Elastic Block Store (Amazon EBS) birimini şunu kullanarak şifreleyin:
AWS Anahtar Yönetimi Hizmeti (AWS KMS).

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

Soru 383
Bir şirket kullanıma hazır ticari bir uygulamayı şirket içinden taşımayı planlıyor
AWS'ye veri merkezi. Yazılım, soketleri ve çekirdekleri kullanan bir yazılım lisanslama modeline sahiptir.
öngörülebilir kapasite ve çalışma süresi gereksinimleri. Şirketin mevcut lisanslarını kullanmak istemesi,
bu yılın başında satın alınanlar.
Hangi Amazon EC2 fiyatlandırma seçeneği EN uygun maliyetlidir?

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

Soru 384
Bir şirket, birden fazla Erişilebilirlik genelinde Amazon EC2 Linux bulut sunucularında bir uygulama çalıştırıyor
Bölgeler. Uygulamanın yüksek oranda kullanılabilir ve Taşınabilir İşletime sahip bir depolama katmanına ihtiyacı var
Sistem Arayüzü (POSIX) uyumlu. Depolama katmanı maksimum veri dayanıklılığı sağlamalıdır
ve EC2 bulut sunucuları arasında paylaşılabilir olmalıdır. Depolama katmanındaki verilere erişilecek
ilk 30 gün boyunca sıklıkla, bu süreden sonra ise seyrek olarak erişilecektir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon S3 Standard depolama sınıfını kullanın. Nadiren hareket etmek için bir S3 Yaşam Döngüsü ilkesi oluşturun
S3 Glacier'a erişilen verilere.

B. Amazon S3 Standard depolama sınıfını kullanın. Nadiren hareket etmek için bir S3 Yaşam Döngüsü ilkesi oluşturun
S3 Standart-Seyrek Erişime (S3 Standart-IA) erişilen veriler.

C. Amazon Elastic File System (Amazon EFS) Standard depolama sınıfını kullanın. Bir yaşam döngüsü oluşturun
seyrek erişilen verileri EFS Standart-Seyrek Erişim'e (EFS) taşımak için yönetim ilkesi
Standart-IA).

D. Amazon Elastic File System (Amazon EFS) Tek Bölge depolama sınıfını kullanın. Bir yaşam döngüsü oluşturun
seyrek erişilen verileri EFS Tek Bölge-Seyrek Erişim'e taşımaya yönelik yönetim ilkesi
(EFS Tek Bölge-IA).

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

Soru 385
Bir çözüm mimarı yeni bir VPC tasarımı oluşturuyor. Yük için iki genel alt ağ var
dengeleyici, web sunucuları için iki özel alt ağ ve MySQL için iki özel alt ağ. İnternet
sunucular yalnızca HTTPS kullanır. Çözüm mimarı halihazırda bir güvenlik grubu oluşturmuştur.
0.0.0.0/0'dan 443 numaralı bağlantı noktasına izin veren yük dengeleyici. Şirket politikası, her kaynağın
Görevlerini yerine getirebilmek için gereken en az erişim.
Çözüm mimarının bunları karşılamak için hangi ek konfigürasyon stratejisini kullanması gerekir?
gereksinimler?

A. Web sunucuları için bir güvenlik grubu oluşturun ve 0.0.0.0/0'dan 443 numaralı bağlantı noktasına izin verin. Bir güvenlik oluşturun
MySQL sunucuları için grup oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

B. Web sunucuları için bir ağ ACL'si oluşturun ve 0.0.0.0/0'dan 443 numaralı bağlantı noktasına izin verin. Ağ oluştur
MySQL sunucuları için ACL'yi kullanın ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

C. Web sunucuları için bir güvenlik grubu oluşturun ve yük dengeleyiciden 443 numaralı bağlantı noktasına izin verin. Bir oluştur
MySQL sunucuları için güvenlik grubu oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

D. Web sunucuları için bir ağ ACL'si oluşturun ve yük dengeleyiciden 443 numaralı bağlantı noktasına izin verin. Bir oluştur
MySQL sunucuları için ağ ACL'sini kullanın ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Web sunucuları için bir güvenlik grubu oluşturun ve yük dengeleyiciden 443 numaralı bağlantı noktasına izin verin. MySQL sunucuları için bir güvenlik grubu oluşturun ve web sunucuları güvenlik grubundan 3306 numaralı bağlantı noktasına izin verin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 386
Bir e-ticaret şirketi AWS'de çok katmanlı bir uygulama çalıştırıyor. Ön uç ve arka uç
katmanların her ikisi de Amazon EC2'de çalışır ve veritabanı Amazon RDS for MySQL'de çalışır.
arka uç katmanı RDS örneğiyle iletişim kurar. Aynısını döndürmek için sık sık aramalar yapılıyor
Veritabanındaki performans yavaşlamalarına neden olan veri kümeleri.
Arka ucun performansını artırmak için hangi eylem gerçekleştirilmelidir?

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

Soru 387
Yeni bir çalışan, dağıtım mühendisi olarak bir şirkete katıldı. Dağıtım mühendisi şunları yapacaktır:
birden fazla AWS kaynağı oluşturmak için AWS CloudFormation şablonlarını kullanıyor olabilirsiniz. bir çözüm
mimar, dağıtım mühendisinin iş faaliyetlerini gerçekleştirme ilkesini takip ederek gerçekleştirmesini istiyor
en az ayrıcalık.
Çözüm mimarı bu hedefe ulaşmak için hangi eylem kombinasyonunu gerçekleştirmelidir?
(İki tane seçin.)

A. Dağıtım mühendisinin AWS gerçekleştirmek için AWS hesabı kök kullanıcı kimlik bilgilerini kullanmasını sağlayın
CloudFormation yığın işlemleri.

B. Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını,
PowerUsers IAM politikası ektedir.

C. Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını,
AdministratorAccess IAM politikası ektedir.

D. Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını,
yalnızca AWS CloudFormation eylemlerine izin veren bir IAM politikası.

E. Dağıtım mühendisinin belirli izinleri açıkça tanımlaması için bir IAM rolü oluşturun
AWS CloudFormation yığınını oluşturun ve bu IAM rolünü kullanarak yığınları başlatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E`
> - **Önerilen Çözüm:** Dağıtım mühendisi için yeni bir IAM kullanıcısı oluşturun ve IAM kullanıcısını yalnızca AWS CloudFormation eylemlerine izin veren bir IAM politikasına sahip bir gruba ekleyin. Dağıtım mühendisinin AWS CloudFormation yığınına özel izinleri açıkça tanımlaması ve bu IAM rolünü kullanarak yığınları başlatması için bir IAM rolü oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 388
Bir şirket, VPC'de iki katmanlı bir web uygulaması dağıtıyor. Web katmanı bir Amazon kullanıyor
Birden fazla Erişilebilirlik Alanını kapsayan genel alt ağlara sahip EC2 Otomatik Ölçeklendirme grubu. Veritabanı
katman, ayrı özel alt ağlardaki bir Amazon RDS for MySQL Veritabanı bulut sunucusundan oluşur. İnternet
katman, ürün bilgilerini almak için veritabanına erişim gerektirir.
Web uygulaması amaçlandığı gibi çalışmıyor. Web uygulaması yapılamayacağını bildiriyor
veritabanına bağlanın. Veritabanının çalışır durumda olduğu onaylanır. için tüm konfigürasyonlar
ağ ACL'leri, güvenlik grupları ve rota tabloları hâlâ varsayılan durumlarındadır.
Bir çözüm mimarı uygulamayı düzeltmek için ne önermelidir?

A. Web katmanının EC2'sinden gelen trafiğe izin vermek için özel alt ağın ağ ACL'sine açık bir kural ekleyin
örnekler.

B. Web katmanının EC2 bulut sunucuları ile sunucu arasındaki trafiğe izin vermek için VPC rota tablosuna bir rota ekleyin.
veritabanı katmanı.

C. Web katmanının EC2 bulut sunucularını ve veritabanı katmanının RDS örneğini iki ayrı sunucuya dağıtın
VPC'ler ve VPC eşlemesini yapılandırın.

D. Trafiğe izin vermek için veritabanı katmanının RDS örneğinin güvenlik grubuna bir gelen kuralı ekleyin
web katmanları güvenlik grubundan.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Web katmanları güvenlik grubundan gelen trafiğe izin vermek için veritabanı katmanının RDS örneğinin güvenlik grubuna bir gelen kuralı ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 389
Bir şirketin çevrimiçi reklamcılık işi için Amazon RDS'de depolanan büyük bir veri kümesi vardır.
Tek bir Erişilebilirlik Alanındaki MySQL veritabanı örneği. Şirket iş raporlama sorguları istiyor
Üretim veritabanı bulut sunucusuna yazma işlemlerini etkilemeden çalıştırmak için.
Hangi çözüm bu gereksinimleri karşılıyor?

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

Soru 390
Bir şirket, Amazon EC2 bulut sunucularından oluşan bir filoda üç katmanlı bir e-ticaret uygulamasına ev sahipliği yapıyor.
örnekler bir Application Load Balancer'ın (ALB) arkasındaki Otomatik Ölçeklendirme grubunda çalışır. Hepsi
e-ticaret verileri, Amazon RDS for MariaDB Multi-AZ DB bulut sunucusunda depolanır.
Şirket, işlemler sırasında müşteri oturumu yönetimini optimize etmek istiyor.
uygulamanın oturum verilerini kalıcı olarak saklaması gerekir.
Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. ALB'de yapışkan oturumlar özelliğini (oturum benzeşimi) açın.

B. Müşteri oturumu bilgilerini depolamak için bir Amazon DynamoDB tablosu kullanın.

C. Kullanıcı oturumu bilgilerini yönetmek için bir Amazon Cognito kullanıcı havuzu dağıtın.

D. Müşteri oturumu bilgilerini depolamak için bir Amazon ElastiCache for Redis kümesini dağıtın.

E. Kullanıcı oturumunu yönetmek için uygulamada AWS Systems Manager Uygulama Yöneticisini kullanın
bilgi.

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

Soru 391
Bir şirketin üç katmanlı durum bilgisi olmayan web uygulaması için bir yedekleme stratejisine ihtiyacı vardır. İnternet
uygulama, dinamik ölçeklendirmeye sahip bir Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında çalışır
ölçeklendirme olaylarına yanıt verecek şekilde yapılandırılmış ilke. Veritabanı katmanı Amazon RDS'de çalışır.
PostgreSQL. Web uygulaması EC2'de geçici yerel depolama gerektirmez
örnekler. Şirketin kurtarma noktası hedefi (RPO) 2 saattir.
Bunun için yedekleme stratejisi ölçeklenebilirliği en üst düzeye çıkarmalı ve kaynak kullanımını optimize etmelidir.
çevre.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucularının Amazon Elastic Block Store (Amazon EBS) birimlerinin anlık görüntülerini alın
ve RPO'yu karşılamak için her 2 saatte bir veritabanı.

B. Amazon Elastic Block Store'u (Amazon EBS) almak için bir anlık görüntü yaşam döngüsü politikası yapılandırın
anlık görüntüler. RPO'yu karşılamak için Amazon RDS'de otomatik yedeklemeleri etkinleştirin.

C. Web ve uygulama katmanlarının en son Amazon Makine Görüntülerini (AMI'ler) saklayın. Etkinleştir
Amazon RDS'de otomatik yedeklemeler yapın ve RPO'yu karşılamak için belirli bir noktaya kurtarmayı kullanın.

D. EC2 bulut sunucularının Amazon Elastic Block Store (Amazon EBS) birimlerinin anlık görüntülerini alın
her 2 saatte bir. Amazon RDS'de otomatik yedeklemeleri etkinleştirin ve belirli bir noktaya kurtarmayı kullanarak
RPO.

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

Soru 392
Bir şirket, AWS'de yeni bir genel web uygulamasını devreye almak istiyor. Uygulama şunları içerir:
Amazon EC2 bulut sunucularını kullanan web sunucusu katmanı. Uygulama ayrıca bir veritabanı katmanı içerir
MySQL Veritabanı bulut sunucusu için Amazon RDS'yi kullanan.
Uygulama, dinamik IP'ye sahip küresel müşteriler için güvenli ve erişilebilir olmalıdır
adresler.
Bir çözüm mimarı güvenlik gruplarını bu gereksinimleri karşılayacak şekilde nasıl yapılandırmalıdır?

A. Web sunucuları için güvenlik grubunu, 443 numaralı bağlantı noktasından gelen trafiğe izin verecek şekilde yapılandırın.
0.0.0.0/0. Veritabanı bulut sunucusunun güvenlik grubunu, 3306 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın
web sunucularının güvenlik grubundan.

B. Web sunucuları için güvenlik grubunu, IP'den 443 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın
müşterilerin adresleri. Veritabanı bulut sunucusunun güvenlik grubunu gelen bağlantılara izin verecek şekilde yapılandırın
web sunucularının güvenlik grubundan 3306 numaralı bağlantı noktasındaki trafik.

C. Web sunucuları için güvenlik grubunu, IP'den 443 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın
müşterilerin adresleri. Veritabanı bulut sunucusunun güvenlik grubunu gelen bağlantılara izin verecek şekilde yapılandırın
müşterilerin IP adreslerinden 3306 numaralı bağlantı noktasındaki trafik.

D. Web sunucuları için güvenlik grubunu, 443 numaralı bağlantı noktasından gelen trafiğe izin verecek şekilde yapılandırın.
0.0.0.0/0. Veritabanı bulut sunucusunun güvenlik grubunu, 3306 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın
0.0.0.0/0'dan itibaren.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Web sunucuları için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın. Veritabanı bulut sunucusunun güvenlik grubunu, web sunucularının güvenlik grubundan 3306 numaralı bağlantı noktasında gelen trafiğe izin verecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 393
Bir ödeme işleme şirketi, müşterileri ve mağazalarıyla olan tüm sesli iletişimi kaydeder
Amazon S3 klasöründeki ses dosyaları. Şirketin sesteki metni yakalaması gerekiyor
dosyalar. Şirket, metinden kişisel olarak tanımlanabilir bilgileri (PII) çıkarmalıdır.
müşterilere aittir.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Ses dosyalarını Amazon Kinesis Video Streams'i kullanarak işleyin. AWS Lambda işlevini kullanın
Bilinen PII modellerini taramak için.

B. S3 klasörüne bir ses dosyası yüklendiğinde, bir AWS Lambda işlevini çağırarak bir ses dosyası başlatın.
Arama kayıtlarını analiz etmek için Amazon Textract görevi.

C. Bir Amazon Transcribe transkripsiyon işini PII redaksiyonu açık olarak yapılandırın. Ne zaman bir ses
dosya S3 klasörüne yüklendiğinde, transkripsiyon işini başlatmak için bir AWS Lambda işlevini çağırın.
Çıktıyı ayrı bir S3 klasöründe saklayın.

D. Ses dosyalarını transkripsiyon açıkken alan bir Amazon Connect iletişim akışı oluşturun.
Bilinen PII modellerini taramak için bir AWS Lambda işlevi ekleyin. Amazon EventBridge'i kullanarak
S3 klasörüne bir ses dosyası yüklendiğinde iletişim akışını başlatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kişisel Bilgilerin düzenlenmesi açıkken bir Amazon Transcribe transkripsiyon işi yapılandırın. S3 klasörüne bir ses dosyası yüklendiğinde, transkripsiyon işini başlatmak için bir AWS Lambda işlevini çağırın. Çıktıyı ayrı bir S3 klasöründe saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 394
Bir şirket, AWS Cloud'da çok katmanlı bir e-ticaret web uygulaması çalıştırıyor. Uygulama
Amazon RDS for MySQL Multi-AZ veritabanı bulut sunucusuyla Amazon EC2 bulut sunucularında çalışır. Amazon
RDS, Genel olarak 2.000 GB depolama alanına sahip en yeni nesil veritabanı bulut sunucusuyla yapılandırılmıştır.
Amaç SSD (gp3) Amazon Elastic Block Store (Amazon EBS) birimi. Veritabanı
Performans, talebin yüksek olduğu dönemlerde uygulamayı etkiler.
Bir veritabanı yöneticisi, Amazon CloudWatch Logs'daki günlükleri analiz eder ve
Okuma ve yazma IOPS sayısı yüksek olduğunda uygulama performansı her zaman düşer
20.000'den fazla.
Bir çözüm mimarı uygulama performansını artırmak için ne yapmalıdır?

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

Soru 395
Bir IAM kullanıcısı, şirketlerinin hesabındaki AWS kaynaklarında birkaç yapılandırma değişikliği yaptı
geçen hafta bir üretim dağıtımı sırasında. Bir çözüm mimarı birkaç güvenlik
grup kuralları istendiği gibi yapılandırılmamış. Çözüm mimarı hangi IAM'in olduğunu doğrulamak istiyor
Kullanıcı değişiklik yapmaktan sorumluydu.
Çözüm mimarı istenen bilgiyi bulmak için hangi hizmeti kullanmalıdır?

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

Soru 396
Bir şirket, AWS'de kendi kendini yöneten bir DNS hizmetini uygulamaya koydu. Çözüm aşağıdakilerden oluşur:
aşağıdaki:
(cid:127) Farklı AWS Bölgelerindeki Amazon EC2 bulut sunucuları
(cid:127) AWS Global Accelerator'da standart bir hızlandırıcının uç noktaları
Şirket, çözümü DDoS saldırılarına karşı korumak istiyor.
Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. AWS Shield Advanced'e abone olun. Hızlandırıcıyı korunacak bir kaynak olarak ekleyin.

B. AWS Shield Advanced'e abone olun. EC2 örneklerini korunacak kaynaklar olarak ekleyin.

C. Hıza dayalı bir kural içeren bir AWS WAF web ACL'si oluşturun. Web ACL'sini aşağıdakilerle ilişkilendirin:
hızlandırıcı.

D. Hıza dayalı bir kural içeren bir AWS WAF web ACL'si oluşturun. Web ACL'sini aşağıdakilerle ilişkilendirin:
EC2 örnekleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Shield Advanced'e abone olun. Hızlandırıcıyı korunacak bir kaynak olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 397
Bir e-ticaret şirketinin satış kayıtlarını toplamak ve filtrelemek için planlanmış bir günlük işi yürütmesi gerekir
analiz için. Şirket, satış kayıtlarını bir Amazon S3 klasöründe saklıyor. Her nesne
boyutu 10 GB'a kadar olmalıdır. Satış etkinliklerinin sayısına bağlı olarak işin tamamlanması bir saat kadar sürebilir.
tamamlandı. İşin CPU ve bellek kullanımı sabittir ve önceden bilinir.
Bir çözüm mimarının iş için gereken operasyonel çaba miktarını en aza indirmesi gerekir
koşmak.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon EventBridge bildirimine sahip bir AWS Lambda işlevi oluşturun. Zamanlamayı planla
EventBridge etkinliği günde bir kez çalışacak.

B. Bir AWS Lambda işlevi oluşturun. Amazon API Gateway HTTP API'si oluşturun ve entegre edin
işlevi içeren API. API'yi çağıran ve planlanmış bir Amazon EventBridge etkinliği oluşturun ve
işlevi çağırır.

C. AWS Fargate ile bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun
başlatma türü. Bir ECS görevini başlatan, planlanmış bir Amazon EventBridge etkinliği oluşturun.
işi çalıştırmak için küme.

D. Amazon EC2 ile bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun
başlatma türü ve en az bir EC2 örneğine sahip bir Otomatik Ölçeklendirme grubu. Bir Amazon oluşturun
İşin çalıştırılması için kümede bir ECS görevi başlatan EventBridge zamanlanmış olayı.

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

Soru 398
Bir şirketin şirket içi ağa bağlı depolama alanından 600 TB veri aktarması gerekiyor
(NAS) sistemini AWS Cloud'a aktarın. Veri aktarımının 2 hafta içinde tamamlanması gerekmektedir. Veriler
hassastır ve aktarım sırasında şifrelenmesi gerekir. Şirketin internet bağlantısı,
100 Mbps yükleme hızı.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

C. Dosyaları HTTPS üzerinden aktarmak için Amazon S3 çok parçalı yükleme işlevini kullanın.

B. Şirket içi NAS sistemi ile en yakın AWS Bölgesi arasında bir VPN bağlantısı oluşturun.
Verileri VPN bağlantısı üzerinden aktarın.

C. Birkaç adet Optimize Edilmiş AWS Snowball Edge Storage siparişi vermek için AWS Snow Family konsolunu kullanın
cihazlar. Verileri Amazon S3'e aktarmak için cihazları kullanın.

D. Şirket lokasyonu ile şirket lokasyonu arasında 10 Gbps AWS Direct Connect bağlantısı kurun.
en yakın AWS Bölgesi. Verileri depolamak için verileri bir VPN bağlantısı üzerinden Bölgeye aktarın
Amazon S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birkaç AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş etmek için AWS Snow Family konsolunu kullanın. Verileri Amazon S3'e aktarmak için cihazları kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 399
Bir finans şirketi AWS'de bir web uygulaması barındırıyor. Uygulama bir Amazon API kullanıyor
Kullanıcılara mevcut hisse senedi fiyatlarını alma olanağı sağlayan Gateway Regional API uç noktası.
Şirketin güvenlik ekibi API isteklerinin sayısında bir artış fark etti. Güvenlik
Ekip, HTTP saldırılarının uygulamayı çevrimdışına alabileceğinden endişe ediyor.
Bir çözüm mimarının, uygulamayı bu tür saldırılardan koruyacak bir çözüm tasarlaması gerekir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılıyor?

A. API Gateway Bölgesel API uç noktasının önünde bir Amazon CloudFront dağıtımı oluşturun
maksimum 24 saatlik TTL ile.

B. Hıza dayalı bir kuralla Bölgesel AWS WAF web ACL'si oluşturun. Web ACL'sini aşağıdakilerle ilişkilendirin:
API Ağ Geçidi aşaması.

C. Sayım metriğini izlemek ve güvenlik ekibini uyarmak için Amazon CloudWatch metriklerini kullanın.
önceden belirlenen hıza ulaşılır.

D. API Gateway'in önünde Lambda@Edge ile bir Amazon CloudFront dağıtımı oluşturun
Bölgesel API uç noktası. IP adreslerinden gelen istekleri engellemek için bir AWS Lambda işlevi oluşturun.
önceden belirlenen oranı aşmayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Orana dayalı bir kuralla Bölgesel AWS WAF web ACL'si oluşturun. Web ACL'yi API Ağ Geçidi aşamasıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
