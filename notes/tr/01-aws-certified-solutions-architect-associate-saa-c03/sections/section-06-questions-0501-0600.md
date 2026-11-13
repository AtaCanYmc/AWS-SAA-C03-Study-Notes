# AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları - Bölüm 06

> **Soru Aralığı:** 501 - 600 / Toplam: 684

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #501

Bir şirket, müşteri ödeme verilerini şirketin Amazon S3'teki veri gölüne almak istiyor. Şirket ortalama olarak her dakika ödeme verilerini alıyor. Şirket, ödeme verilerini gerçek zamanlı olarak analiz etmek istiyor. Daha sonra şirket, verileri veri gölüne almak ister. Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Verileri almak için Amazon Kinesis Data Streams'i kullanın. Verileri gerçek zamanlı analiz etmek için AWS Lambda'yı kullanın.

B. Verileri almak için AWS Glue'yu kullanın. Verileri gerçek zamanlı olarak analiz etmek için Amazon Kinesis Data Analytics'i kullanın.

C. Verileri almak için Amazon Kinesis Data Firehose'u kullanın. Verileri gerçek zamanlı olarak analiz etmek için Amazon Kinesis Data Analytics'i kullanın.

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

Soru #502

Bir şirket, Amazon EC2'de içerik yönetim sistemi (CMS) kullanan bir web sitesi işletiyor. CMS, tek bir EC2 bulut sunucusunda çalışır ve veri katmanı için bir Amazon Aurora MySQL Multi-AZ veritabanı bulut sunucusunu kullanır. Web sitesi görüntüleri, EC2 bulut sunucusunun içine monte edilen bir Amazon Elastic Block Store (Amazon EBS) biriminde depolanır. Bir çözüm mimarı, web sitesinin performansını ve dayanıklılığını artırmak için hangi eylem kombinasyonunu gerçekleştirmelidir? (İki tane seçin.)

A. Web sitesi görüntülerini her EC2 bulut sunucusuna monte edilen bir Amazon S3 klasörüne taşıyın

B. Birincil EC2 örneğinden bir NFS paylaşımı kullanarak web sitesi resimlerini paylaşın. Bu paylaşımı diğer EC2 bulut sunucularına ekleyin.

C. Web sitesi görüntülerini her EC2 bulut sunucusuna bağlanan Amazon Elastic File System (Amazon EFS) dosya sistemine taşıyın.

D. Mevcut EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. Otomatik Ölçeklendirme grubunun parçası olarak Application Load Balancer'ın arkasında yeni örnekler sağlamak için AMI'yı kullanın. Otomatik Ölçeklendirme grubunu en az iki örneği koruyacak şekilde yapılandırın. AWS Global Accelerator'da web sitesi için bir hızlandırıcı yapılandırma

E. Mevcut EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. Otomatik Ölçeklendirme grubunun parçası olarak Application Load Balancer'ın arkasında yeni örnekler sağlamak için AMI'yı kullanın. Otomatik Ölçeklendirme grubunu en az iki örneği koruyacak şekilde yapılandırın. Web sitesi için bir Amazon CloudFront dağıtımı yapılandırın.

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

Soru #503

Bir şirket altyapı izleme hizmeti yürütmektedir. Şirket, hizmetin müşteri AWS hesaplarındaki verileri izlemesini sağlayacak yeni bir özellik geliştiriyor. Yeni özellik, Amazon EC2 bulut sunucularını tanımlamak ve Amazon CloudWatch ölçümlerini okumak için müşteri hesaplarındaki AWS API'lerini çağıracak. Şirket, müşteri hesaplarına EN güvenli şekilde erişim sağlamak için ne yapmalıdır?

A. Müşterilerin, hesaplarında salt okunur EC2 ve CloudWatch izinlerine ve şirket hesabına yönelik bir güven politikasına sahip bir IAM rolü oluşturduklarından emin olun.

B. Salt okunur EC2 ve CloudWatch izinlerine sahip bir rol için geçici AWS kimlik bilgileri sağlamak amacıyla jeton satış makinesi uygulayan sunucusuz bir API oluşturun.

C. Müşterilerin hesaplarında salt okunur EC2 ve CloudWatch izinlerine sahip bir IAM kullanıcısı oluşturduklarından emin olun. Müşteri erişimini ve gizli anahtarları bir sır yönetimi sisteminde şifreleyin ve saklayın.

D. Müşterilerin, salt okunur EC2 ve CloudWatch izinlerine sahip bir IAM rolünü kullanmak için hesaplarında bir Amazon Cognito kullanıcısı oluşturduklarından emin olun. Amazon Cognito kullanıcısını ve parolasını şifreleyin ve bir sır yönetimi sisteminde saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Müşterilerin, hesaplarında salt okunur EC2 ve CloudWatch izinlerine ve şirket hesabına yönelik bir güven politikasına sahip bir IAM rolü oluşturduklarından emin olun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #504

Bir şirketin ABD-Doğu-1 Bölgesinde yüzlerce AWS hesabını kapsayan birkaç VPC'yi bağlaması gerekir. Şirketin ağ ekibinin bulut ağını yönetmek için kendi AWS hesabı var. VPC'leri bağlamak için operasyonel açıdan EN verimli çözüm nedir?

A. Her VPC arasında VPC eşleme bağlantıları kurun. İlgili her alt ağın rota tablosunu güncelleyin

B. Her VPC'yi internet üzerinden bağlamak için her VPC'de bir NAT ağ geçidi ve bir internet ağ geçidi yapılandırın

C. Ağ ekibinin AWS hesabında bir AWS Transit Gateway oluşturun. Her VPC'den statik rotaları yapılandırın.

D. Her VPC'ye VPN ağ geçitleri dağıtın. Her bir VPC'ye bağlanmak için ağ ekibinin AWS hesabında bir geçiş VPC'si oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ağ ekibinin AWS hesabında bir AWS Transit Gateway oluşturun. Her VPC'den statik rotaları yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru #505

Bir şirketin, verileri işlemek için her gece toplu işler çalıştıran Amazon EC2 bulut sunucuları var. EC2 bulut sunucuları, İsteğe Bağlı faturalandırmayı kullanan bir Otomatik Ölçeklendirme grubunda çalışır. Bir iş bir örnekte başarısız olursa, başka bir örnek işi yeniden işleyecektir. Toplu işler her gün yerel saatle 12:00 ile 06:00 arasında gerçekleştirilir. Hangi çözüm EC2 bulut sunucularının bu gereksinimleri EN uygun maliyetle karşılamasını sağlayacak?

A. Toplu işin kullandığı Otomatik Ölçeklendirme grubunun bulut sunucusu ailesini kapsayan Amazon EC2 için 1 yıllık bir Tasarruf Planı satın alın.

B. Toplu işin kullandığı Otomatik Ölçeklendirme grubundaki bulut sunucularının belirli bulut sunucusu türü ve işletim sistemi için 1 yıllık Rezerve Bulut Sunucusu satın alın.

C. Otomatik Ölçeklendirme grubu için yeni bir başlatma şablonu oluşturun. Örnekleri Spot Bulut Sunucuları olarak ayarlayın. CPU kullanımına göre ölçeği genişletecek bir politika ayarlayın.

D. Otomatik Ölçeklendirme grubu için yeni bir başlatma şablonu oluşturun. Örnek boyutunu artırın. CPU kullanımına göre ölçeği genişletecek bir politika ayarlayın.

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

Soru #506

Bir sosyal medya şirketi, web sitesi için bir özellik geliştiriyor. Bu özellik kullanıcılara fotoğraf yükleme olanağı verecek. Şirket, büyük etkinlikler sırasında talepte önemli artışlar bekliyor ve web sitesinin kullanıcılardan gelen yükleme trafiğini karşılayabileceğinden emin olması gerekiyor. Hangi çözüm bu gereksinimleri MOST ölçeklenebilirlikle karşılıyor?

A. Dosyaları kullanıcının tarayıcısından uygulama sunucularına yükleyin. Dosyaları bir Amazon S3 klasörüne aktarın.

B. Bir AWS Storage Gateway dosya ağ geçidi sağlayın. Dosyaları doğrudan kullanıcının tarayıcısından dosya ağ geçidine yükleyin.

C. Uygulamada Amazon S3 önceden imzalanmış URL'ler oluşturun. Dosyaları doğrudan kullanıcının tarayıcısından bir S3 klasörüne yükleyin.

D. Bir Amazon Elastic File System (Amazon EFS) dosya sistemi sağlayın. Dosyaları doğrudan kullanıcının tarayıcısından dosya sistemine yükleyin.

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

Soru #507

Bir şirketin seyahat biletleri için bir web uygulaması var. Uygulama, Kuzey Amerika'daki tek bir veri merkezinde çalışan bir veritabanına dayanmaktadır. Şirket, uygulamayı küresel bir kullanıcı tabanına hizmet edecek şekilde genişletmek istiyor. Şirketin uygulamayı birden fazla AWS Bölgesine dağıtması gerekiyor. Rezervasyon veritabanındaki güncellemelerde ortalama gecikme 1 saniyeden az olmalıdır. Şirket, web platformunun birden fazla Bölgede ayrı dağıtımlarını yapmak istiyor. Ancak şirketin küresel olarak tutarlı tek bir birincil rezervasyon veritabanını sürdürmesi gerekir. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi çözümü önermelidir?

A. Uygulamayı Amazon DynamoDB'yi kullanacak şekilde dönüştürün. Merkez ayırma tablosu için genel bir tablo kullanın. Her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.

B. Veritabanını bir Amazon Aurora MySQL veritabanına taşıyın. Her Bölgede Aurora Read Replikalarını dağıtın. Veritabanına erişim için her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.

C. Veritabanını Amazon RDS for MySQL veritabanına taşıyın. Her Bölgede MySQL okuma kopyalarını dağıtın. Veritabanına erişim için her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.

D. Uygulamayı Amazon Aurora Serverless veritabanına taşıyın. Veritabanının örneklerini her Bölgeye dağıtın. Veritabanına erişmek için her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın. Veritabanlarını senkronize etmek amacıyla her Bölgedeki olay akışlarını işlemek için AWS Lambda işlevlerini kullanın.

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

Soru #508

Bir şirket, birden fazla Microsoft Windows Server iş yükünü us-west-1 Bölgesinde çalışan Amazon EC2 bulut sunucularına taşıdı. Şirket, gerektiğinde bir görüntü oluşturmak için iş yüklerini manuel olarak yedekliyor. Şirket, us-west-1 Bölgesi'nde doğal afet yaşanması durumunda us-west-2 Bölgesi'ndeki iş yüklerini hızlı bir şekilde toparlamak istiyor. Şirket, EC2 bulut sunucularında 24 saatten fazla veri kaybı yaşanmamasını istiyor. Şirket ayrıca EC2 bulut sunucularının yedeklemelerini de otomatikleştirmek istiyor. Bu gereksinimleri EN AZ idari çabayla hangi çözümler karşılayacak? (İki tane seçin.)

A. Etiketlere dayalı bir yedekleme oluşturmak için Amazon EC2 destekli bir Amazon Machine Image (AMI) yaşam döngüsü ilkesi oluşturun. Yedeklemeyi günde iki kez çalışacak şekilde planlayın. İsteğe bağlı olarak görüntüyü kopyalayın.

B. Etiketlere dayalı bir yedekleme oluşturmak için Amazon EC2 destekli bir Amazon Machine Image (AMI) yaşam döngüsü ilkesi oluşturun. Yedeklemeyi günde iki kez çalışacak şekilde planlayın. Kopyayı us-west-2 Bölgesine yapılandırın.

C. AWS Backup'ı kullanarak us-west-1 ve us-west-2'de yedekleme kasaları oluşturun. Etiket değerlerine göre EC2 bulut sunucuları için bir yedekleme planı oluşturun. Yedekleme verilerini us-west-2'ye kopyalamak üzere planlanmış bir iş olarak çalışacak bir AWS Lambda işlevi oluşturun.

D. AWS Backup'ı kullanarak bir yedekleme kasası oluşturun. EC2 bulut sunucuları için etiket değerlerine dayalı bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. Kopyanın hedefini us-west-2 olarak tanımlayın. Yedekleme zamanlamasını günde iki kez çalışacak şekilde belirtin.

E. AWS Backup'ı kullanarak bir yedekleme kasası oluşturun. EC2 bulut sunucuları için etiket değerlerine dayalı bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. Yedekleme zamanlamasını günde iki kez çalışacak şekilde belirtin. Talep üzerine us-west-2'ye kopyalayın.

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

Soru #509

Bir şirket, görüntü işleme için iki katmanlı bir uygulama çalıştırmaktadır. Uygulama, her biri bir genel alt ağa ve bir özel alt ağa sahip iki Erişilebilirlik Alanı kullanır. Web katmanına yönelik bir Uygulama Yük Dengeleyicisi (ALB), genel alt ağları kullanır. Uygulama katmanına yönelik Amazon EC2 bulut sunucuları özel alt ağları kullanır. Kullanıcılar uygulamanın beklenenden daha yavaş çalıştığını bildiriyor. Web sunucusu günlük dosyalarının güvenlik denetimi, uygulamanın az sayıda IP adresinden milyonlarca yasa dışı istek aldığını gösteriyor. Şirket daha kalıcı bir çözüm araştırırken, bir çözüm mimarının acil performans sorununu çözmesi gerekir. Çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

A. Web katmanı için gelen güvenlik grubunu değiştirin. Kaynakları tüketen IP adresleri için bir reddetme kuralı ekleyin.

B. Web katmanı alt ağları için ağ ACL'sini değiştirin. Kaynakları tüketen IP adresleri için gelen reddetme kuralı ekleyin.

C. Uygulama katmanı için gelen güvenlik grubunu değiştirin. Kaynakları tüketen IP adresleri için bir reddetme kuralı ekleyin.

D. Uygulama katmanı alt ağları için ağ ACL'sini değiştirin. Kaynakları tüketen IP adresleri için gelen reddetme kuralı ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web katmanı alt ağları için ağ ACL'sini değiştirin. Kaynakları tüketen IP adresleri için gelen reddetme kuralı ekleyin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #510

Küresel bir pazarlama şirketinin ap-southeast-2 Bölgesi ve eu-west-1 Bölgesi'nde çalışan uygulamaları vardır. Eu-west-1'deki bir VPC'de çalışan uygulamaların, ap-southeast-2'deki bir VPC'de çalışan veritabanlarıyla güvenli bir şekilde iletişim kurması gerekir. Hangi ağ tasarımı bu gereksinimleri karşılayacak?

A. eu-west-1 VPC ile ap-southeast-2 VPC arasında bir VPC eşleme bağlantısı oluşturun. Eu-west-1 uygulama güvenlik grubunda, ap-southeast-2 güvenlik grubundaki veritabanı sunucusu IP adreslerinden gelen trafiğe izin veren bir gelen kuralı oluşturun.

B. ap-southeast-2 VPC ile eu-west-1 VPC arasında bir VPC eşleme bağlantısı yapılandırın. Alt ağ yönlendirme tablolarını güncelleyin. Ap-southeast-2 veritabanı güvenlik grubunda, eu-west-1'deki uygulama sunucularının güvenlik grubu kimliğine başvuran bir gelen kuralı oluşturun.

C. ap-southeast-2 VPC ile eu-west-1 VPUpdate arasında bir VPC eşleme bağlantısı yapılandırın. Alt ağ yönlendirme tablolarını güncelleyin. Ap-southeast-2 veritabanı güvenlik grubunda, eu-west-1 uygulama sunucusu IP adreslerinden gelen trafiğe izin veren bir gelen kuralı oluşturun.

D. eu-west-1 VPC ile ap-southeast-2 VPC arasında eşleme eki olan bir geçiş ağ geçidi oluşturun. Geçiş ağ geçitleri düzgün bir şekilde eşleştirildikten ve yönlendirme yapılandırıldıktan sonra, veritabanı güvenlik grubunda eu-west-1'deki uygulama sunucularının güvenlik grubu kimliğine başvuran bir gelen kuralı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ap-southeast-2 VPC ile eu-west-1 VPC arasında bir VPC eşleme bağlantısı yapılandırınAlt ağ yönlendirme tablolarını güncelleyin. Ap-southeast-2 veritabanı güvenlik grubunda, eu-west-1 uygulama sunucusu IP adreslerinden gelen trafiğe izin veren bir gelen kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru #511

Bir şirket PostgreSQL veritabanı şemasını kullanan bir yazılım geliştiriyor. Şirketin, geliştiricileri için birden fazla geliştirme ortamı ve veri tabanı yapılandırması gerekiyor. Ortalama olarak her geliştirme ortamı 8 saatlik iş gününün yarısı kadar kullanılır. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Her geliştirme ortamını kendi Amazon Aurora PostgreSQL veritabanıyla yapılandırın

B. Her geliştirme ortamını PostgreSQL Single-AZ Veritabanı bulut sunucuları için kendi Amazon RDS'siyle yapılandırın

C. Her geliştirme ortamını kendi Amazon Aurora On-Demand PostgreSQL Uyumlu veritabanıyla yapılandırın

D. Amazon S3 Object Select'i kullanarak her geliştirme ortamını kendi Amazon S3 klasörüyle yapılandırın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her geliştirme ortamını kendi Amazon Aurora İsteğe Bağlı PostgreSQL Uyumlu veritabanıyla yapılandırın
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #512

Bir şirket, hesaba göre etiketlenen kaynaklarla AWS Organizasyonlarını kullanıyor. Şirket ayrıca AWS altyapı kaynaklarını yedeklemek için AWS Backup'ı kullanıyor. Şirketin tüm AWS kaynaklarını yedeklemesi gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Etiketlenmemiş tüm kaynakları tanımlamak için AWS Config'i kullanın. Tanımlanan kaynakları programlı olarak etiketleyin. Yedekleme planındaki etiketleri kullanın.

B. Çalışmayan tüm kaynakları belirlemek için AWS Config'i kullanın. Bu kaynakları yedekleme kasasına ekleyin.

C. Yedeklenmesi gereken kaynakları belirlemek için tüm AWS hesap sahiplerinin kaynaklarını incelemesini zorunlu kılın.

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

Soru #513

Bir sosyal medya şirketi, kullanıcılarının AWS Cloud'da barındırılan bir uygulamaya görüntü yüklemesine izin vermek istiyor. Şirketin, görüntülerin birden fazla cihaz türünde görüntülenebilmesi için görüntüleri otomatik olarak yeniden boyutlandıran bir çözüme ihtiyacı var. Uygulama gün boyunca öngörülemeyen trafik düzenleriyle karşılaşıyor. Şirket, ölçeklenebilirliği en üst düzeye çıkaran yüksek kullanılabilirliğe sahip bir çözüm arıyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Amazon S3'te barındırılan ve görüntüleri yeniden boyutlandırmak ve görüntüleri bir Amazon S3 klasöründe depolamak için AWS Lambda işlevlerini çağıran statik bir web sitesi oluşturun.

B. Amazon CloudFront'ta barındırılan ve görüntüleri yeniden boyutlandırmak ve görüntüleri bir Amazon RDS veritabanında depolamak için AWS Step Functions'ı çağıran statik bir web sitesi oluşturun.

C. Amazon EC2 bulut sunucusunda çalışan bir web sunucusunda barındırılan dinamik bir web sitesi oluşturun. Görüntüleri yeniden boyutlandırmak ve görüntüleri bir Amazon S3 klasöründe depolamak için EC2 bulut sunucusunda çalışan bir işlem yapılandırın.

D. Amazon Simple Queue Service'de (Amazon SQS) bir yeniden boyutlandırma işi oluşturan, otomatik olarak ölçeklenen bir Amazon Elastic Container Service (Amazon ECS) kümesinde barındırılan dinamik bir web sitesi oluşturun. Yeniden boyutlandırma işlerini işlemek için Amazon EC2 örneğinde çalışan bir görüntü yeniden boyutlandırma programı kurun.

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

Soru #514

Bir şirket, Amazon EC2 bulut sunucularında bir mikro hizmet uygulaması çalıştırıyor. Şirket, ölçeklenebilirlik için uygulamayı bir Amazon Elastic Kubernetes Service (Amazon EKS) kümesine taşımak istiyor. Şirketin, güvenlik uyumluluğunu sürdürmek için Amazon EKS kontrol düzlemini, uç nokta özel erişimini doğru ve uç nokta genel erişimini yanlış olarak ayarlayacak şekilde yapılandırması gerekir. Şirketin ayrıca veri düzlemini özel alt ağlara koyması gerekir. Ancak düğümün kümeye katılamamasından dolayı şirket hata bildirimleri almıştır. Hangi çözüm düğümün kümeye katılmasına olanak tanır?

A. AWS Identity and Access Management'ta (IAM) gerekli izni AmazonEKSNodeRole IAM rolüne verin.

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

Soru #515

Bir şirket şirket içi bir uygulamayı AWS'ye taşıyor. Şirket çözüm olarak Amazon Redshift'i kullanmak istiyor. Bu senaryoda Amazon Redshift için hangi kullanım durumları uygundur? (Üç tanesini seçin.)

A. Verilere geleneksel, kapsayıcılı ve olay odaklı uygulamalarla erişmek için veri API'lerinin desteklenmesi

B. İstemci tarafı ve sunucu tarafı şifrelemeyi destekleme

C. Belirtilen saatlerde ve uygulamanın aktif olmadığı zamanlarda analitik iş yükleri oluşturma

D. Arka uç veritabanı üzerindeki baskıyı azaltmak için verileri önbelleğe alma

E. Petabaytlarca veriyi ve dakikada on milyonlarca isteği desteklemek için küresel olarak ölçeklendirme F. AWS Management Console'u kullanarak kümenin ikincil bir kopyasını oluşturma

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C, E`
> - **Önerilen Çözüm:** İstemci tarafı ve sunucu tarafı şifrelemeyi destekleme Belirli saatlerde ve uygulama etkin olmadığında analitik iş yükleri oluşturma Petabaytlarca veriyi ve dakika başına on milyonlarca isteği desteklemek için küresel olarak ölçeklendirme
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #516

Bir şirket, müşterilerinin finansal bilgilerini alabilmeleri için müşterilere bir API arayüzü sağlar. Şirket, yılın en yoğun kullanım zamanlarında daha fazla sayıda talep bekliyor. Şirket, müşteri memnuniyetini sağlamak için API'nin düşük gecikmeyle tutarlı bir şekilde yanıt vermesini gerektiriyor. Şirketin API için bir bilgi işlem ana bilgisayarı sağlaması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Application Load Balancer ve Amazon Elastic Container Service (Amazon ECS) kullanın.

B. Amazon API Gateway ve AWS Lambda işlevlerini sağlanan eş zamanlılıkla kullanın.

C. Application Load Balancer ve Amazon Elastic Kubernetes Service (Amazon EKS) kümesini kullanın.

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

Soru #517

Bir şirket, tüm AWS Systems Manager Session Manager günlüklerini arşivleme amacıyla bir Amazon S3 klasörüne göndermek istiyor. Hangi çözüm bu gereksinimi MOST operasyonel verimlilikle karşılayacak?

A. Systems Manager konsolunda S3 günlüğünü etkinleştirin. Oturum verilerinin gönderileceği bir S3 paketi seçin.

B. Amazon CloudWatch aracısını yükleyin. Tüm günlükleri bir CloudWatch günlük grubuna aktarın. Günlükleri arşivleme amacıyla gruptan bir S3 klasörüne aktarın.

C. Tüm sunucu günlüklerini merkezi bir S3 klasörüne yüklemek için bir Sistem Yöneticisi belgesi oluşturun. Systems Manager belgesini günlük olarak hesapta bulunan tüm sunucularda çalıştırmak için Amazon EventBridge'i kullanın.

D. Bir Amazon CloudWatch aracısı yükleyin. Tüm günlükleri bir CloudWatch günlük grubuna aktarın. Gelen günlük olaylarını Amazon Kinesis Data Firehose dağıtım akışına aktaran bir CloudWatch günlük aboneliği oluşturun. Amazon S3'ü hedef olarak ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Systems Manager konsolunda S3 günlüğünü etkinleştirin. Oturum verilerinin gönderileceği bir S3 paketi seçin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #518

Bir uygulama Amazon RDS MySQL veritabanı bulut sunucusunu kullanıyor. RDS veritabanının disk alanı azalıyor. Bir çözüm mimarı, kesinti olmadan disk alanını artırmak istiyor. Hangi çözüm bu gereksinimleri EN AZ çabayla karşılıyor?

A. RDS'de depolama otomatik ölçeklendirmesini etkinleştirin

B. RDS veritabanı bulut sunucusu boyutunu artırın

C. RDS veritabanı bulut sunucusu depolama türünü Tedarik Edilen IOPS olarak değiştirin

D. RDS veritabanını yedekleyin, depolama kapasitesini artırın, veritabanını geri yükleyin ve önceki örneği durdurun

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** RDS'de depolama otomatik ölçeklendirmesini etkinleştirin
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #519

Bir danışmanlık şirketi dünya çapındaki müşterilerine profesyonel hizmetler sunmaktadır. Şirket, müşterilere AWS'de veri toplamayı ve analiz etmeyi hızlandıracak çözümler ve araçlar sağlıyor. Şirketin, müşterilerin self-servis amaçlarla kullanabileceği ortak bir çözüm ve araç kümesini merkezi olarak yönetmesi ve dağıtması gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru #520

Bir şirket, Amazon EC2 Bulut Sunucuları üzerinde çalışacak yeni bir web uygulaması tasarlıyor. Uygulama, arka uç veri depolaması için Amazon DynamoDB'yi kullanacak. Uygulama trafiği tahmin edilemez olacaktır. Şirket, uygulamanın veritabanına okuma ve yazma veriminin orta ila yüksek arasında olmasını bekliyor. Şirketin uygulama trafiğine yanıt olarak ölçeklendirme yapması gerekiyor. Hangi DynamoDB tabla konfigürasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. DynamoDB Standard tablo sınıfını kullanarak DynamoDB'yi sağlanan okuma ve yazma ile yapılandırın. DynamoDB otomatik ölçeklendirmeyi tanımlanmış maksimum kapasiteye ayarlayın.

B. DynamoDB Standard tablo sınıfını kullanarak DynamoDB'yi isteğe bağlı modda yapılandırın.

C. DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) tablo sınıfını kullanarak DynamoDB'yi sağlanan okuma ve yazma ile yapılandırın. DynamoDB otomatik ölçeklendirmeyi tanımlanmış maksimum kapasiteye ayarlayın.

D. DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) tablo sınıfını kullanarak DynamoDB'yi isteğe bağlı modda yapılandırın.

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

Soru #521

Bir perakende şirketinin birden fazla işletmesi vardır. Her işletmenin BT ekibi kendi AWS hesabını yönetir. Her ekip hesabı, AWS Organizasyonlarındaki bir kuruluşun parçasıdır. Her ekip, ürün envanter düzeylerini ekibin kendi AWS hesabındaki bir Amazon DynamoDB tablosundan izler. Şirket, paylaşılan bir AWS hesabına merkezi bir envanter raporlama uygulaması dağıtıyor. Uygulama, tüm ekiplerin DynamoDB tablolarındaki öğeleri okuyabilmelidir. Hangi kimlik doğrulama seçeneği bu gereksinimleri EN güvenli şekilde karşılayacaktır?

A. DynamoDB'yi envanter uygulaması hesabında AWS Secrets Manager ile entegre edin. Uygulamayı, DynamoDB tablosunun kimliğini doğrulamak ve okumak için Secrets Manager'dan doğru gizli bilgiyi kullanacak şekilde yapılandırın. Her 30 günde bir gizli rotasyon planlayın.

B. Her işletme hesabında programatik erişimi olan bir IAM kullanıcısı oluşturun. Uygulamayı, DynamoDB tablosunun kimliğini doğrulamak ve okumak için doğru IAM kullanıcı erişim anahtarı kimliğini ve gizli erişim anahtarını kullanacak şekilde yapılandırın. IAM erişim anahtarlarını her 30 günde bir manuel olarak değiştirin.

C. Her işletme hesabında, rolün DynamoDB tablosuna erişmesini sağlayan bir politikaya ve envanter uygulama hesabındaki belirli bir role güvenmek için bir güven politikasına sahip BU_ROLE adında bir IAM rolü oluşturun. Envanter hesabında, STS AssumeRole API işlemine erişime izin veren APP_ROLE adlı bir rol oluşturun. Uygulamayı APP_ROLE kullanacak şekilde yapılandırın ve DynamoDB tablosunu okumak için hesaplar arası BU_ROLE rolünü üstlenin.

D. DynamoDB'yi AWS Sertifika Yöneticisi (ACM) ile entegre edin. DynamoDB'nin kimliğini doğrulamak için kimlik sertifikaları oluşturun. Uygulamayı, DynamoDB tablosunun kimliğini doğrulamak ve okumak için doğru sertifikayı kullanacak şekilde yapılandırın.

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

Soru #522

Bir şirket, Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanarak konteyner uygulamalarını çalıştırıyor. Şirketin iş yükü gün boyu tutarlı değildir. Şirket, Amazon EKS'nin iş yüküne göre ölçeklendirilmesini ve genişletilmesini istiyor. Hangi adım kombinasyonu bu gereksinimleri EN AZ operasyonel giderle karşılayacaktır? (İki tane seçin.)

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

Soru #523

Bir şirket, mikro hizmet tabanlı sunucusuz bir web uygulaması çalıştırmaktadır. Uygulamanın birden çok Amazon DynamoDB tablosundan veri alabilmesi gerekir Bir çözüm mimarının, uygulamaya, uygulamanın temel performansını etkilemeden verileri alma becerisini vermesi gerekir. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

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

Soru #524

Bir şirket, IAM izinleriyle ilgili Erişim Reddedildi hatalarını ve Yetkisiz hataları analiz etmek ve sorunlarını gidermek istiyor. Şirkette AWS CloudTrail açık. Hangi çözüm bu gereksinimleri EN AZ çabayla karşılayacak?

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

Soru #525

Bir şirket, mevcut AWS kullanım maliyetini operasyon maliyeti kontrol paneline eklemek istiyor. Bir çözüm mimarının, şirketin kullanım maliyetine programlı olarak erişmesini sağlayacak bir çözüm önermesi gerekir. Şirketin cari yılın maliyet verilerine erişebilmesi ve gelecek 12 aya ilişkin maliyetleri tahmin edebilmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS Cost Explorer API'sini sayfalandırmayla kullanarak kullanım maliyetiyle ilgili verilere erişin.

B. İndirilebilir AWS Maliyet Gezgini raporu .csv dosyalarını kullanarak kullanım maliyetiyle ilgili verilere erişin.

C. Kullanım maliyeti verilerini FTP aracılığıyla şirkete göndermek için AWS Budgets eylemlerini yapılandırın.

D. Kullanım maliyeti verileri için AWS Budgets raporları oluşturun. Verileri SMTP aracılığıyla şirkete gönderin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Cost Explorer API'sini sayfalandırmayla kullanarak kullanım maliyetiyle ilgili verilere erişin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #526

Bir çözüm mimarı bir uygulamanın dayanıklılığını inceliyor. Çözüm mimarı, bir veritabanı yöneticisinin yakın zamanda ölçeklendirme uygulamasının bir parçası olarak uygulamanın Amazon Aurora PostgreSQL veritabanı yazıcı örneğini devre dışı bıraktığını fark eder. Yük devretme, uygulama için 3 dakikalık kesintiye neden oldu. Hangi çözüm, EN AZ operasyonel ek yük ile ölçeklendirme çalışmaları için kesinti süresini azaltacaktır?

A. Yük devretme sırasında yükü işlemek için kümede daha fazla Aurora PostgreSQL okuma kopyası oluşturun.

B. Aynı AWS Bölgesinde ikincil bir Aurora PostgreSQL kümesi kurun. Yük devretme sırasında uygulamayı ikincil kümenin yazıcı uç noktasını kullanacak şekilde güncelleyin.

C. Yük devretme sırasında yükü işlemek için bir Amazon ElastiCache for Memcached kümesi oluşturun.

D. Veritabanı için bir Amazon RDS proxy'si kurun. Proxy uç noktasını kullanmak için uygulamayı güncelleyin.

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

Soru #527

Bir şirketin, tek bir AWS Bölgesinde çalışan bölgesel aboneliğe dayalı bir akış hizmeti vardır. Mimari, Amazon EC2 bulut sunucularındaki web sunucularından ve uygulama sunucularından oluşur. EC2 bulut sunucuları, Elastic Load Balancer'ların arkasındaki Otomatik Ölçeklendirme gruplarındadır. Mimari, birden fazla Erişilebilirlik Alanına yayılan bir Amazon Aurora küresel veritabanı kümesi içerir. Şirket küresel olarak genişlemek ve uygulamasının minimum kesinti süresine sahip olmasını sağlamak istiyor. EN ÇOK hata toleransını hangi çözüm sağlayacak?

A. Bulut sunucularını ikinci bir Bölgedeki Erişilebilirlik Alanlarına dağıtmak için web katmanı ve uygulama katmanı için Otomatik Ölçeklendirme gruplarını genişletin. Veritabanını birincil Bölgeye ve ikinci Bölgeye dağıtmak için Aurora global veritabanını kullanın. İkinci Bölgeye yük devretme yönlendirme politikasıyla Amazon Route 53 durum denetimlerini kullanın.

B. Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. İkinci Bölgeye bir Aurora PostgreSQL Bölgeler arası Aurora Replikası ekleyin. İkinci Bölgeye yük devretme yönlendirme politikasıyla Amazon Route 53 durum denetimlerini kullanın. Gerektiğinde ikincilden birincilliğe terfi edin.

C. Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. İkinci Bölgede bir Aurora PostgreSQL veritabanı oluşturun. Birincil veritabanını ikinci Bölgeye kopyalamak için AWS Database Migration Service'i (AWS DMS) kullanın. İkinci Bölgeye yük devretme yönlendirme politikasıyla Amazon Route 53 durum denetimlerini kullanın.

D. Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. Veritabanını birincil Bölgeye ve ikinci Bölgeye dağıtmak için Amazon Aurora global veritabanını kullanın. İkinci Bölgeye yük devretme yönlendirme politikasıyla Amazon Route 53 durum denetimlerini kullanın. Gerektiğinde ikincilden birincilliğe terfi edin.

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

Soru #528

Bir veri analizi şirketi, toplu işleme sistemini AWS'ye taşımak istiyor. Şirket, FTP aracılığıyla gün içinde periyodik olarak binlerce küçük veri dosyası alıyor. Şirket içi toplu iş, veri dosyalarını gece boyunca işler. Ancak toplu işin çalışmasının tamamlanması saatler alır. Şirket, AWS çözümünün, dosyaları gönderen FTP istemcilerinde minimum değişiklikle, gelen veri dosyalarını mümkün olan en kısa sürede işlemesini istiyor. Çözüm, dosyalar başarıyla işlendikten sonra gelen veri dosyalarını silmelidir. Her dosyanın işlenmesi 3-8 dakika sürer. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Gelen dosyaları Amazon S3 Glacier Esnek Alma'da nesneler olarak depolamak için FTP sunucusu çalıştıran bir Amazon EC2 bulut sunucusu kullanın. AWS Batch'te bir iş kuyruğu yapılandırın. S3 Glacier Esnek Alma'dan nesneleri her gece işlemek üzere işi çağırmak için Amazon EventBridge kurallarını kullanın. İş nesneleri işledikten sonra nesneleri silin.

B. Gelen dosyaları bir Amazon Elastic Block Store (Amazon EBS) biriminde depolamak için FTP sunucusu çalıştıran bir Amazon EC2 bulut sunucusu kullanın. AWS Batch'te bir iş kuyruğu yapılandırın. EBS birimindeki dosyaları her gece işlemek üzere işi çağırmak için Amazon EventBridge kurallarını kullanın. İş dosyaları işledikten sonra dosyaları silin.

C. Gelen dosyaları bir Amazon Elastic Block Store (Amazon EBS) biriminde depolamak üzere bir FTP sunucusu oluşturmak için AWS Transfer Family'yi kullanın. AWS Batch'te bir iş kuyruğu yapılandırın. AWS Batch'te işi çağırmak için her dosya geldiğinde bir Amazon S3 olay bildirimi kullanın. İş dosyaları işledikten sonra dosyaları silin.

D. Gelen dosyaları Amazon S3 Standard'ta depolamak üzere bir FTP sunucusu oluşturmak için AWS Transfer Family'yi kullanın. Dosyaları işlemek ve işlendikten sonra dosyaları silmek için bir AWS Lambda işlevi oluşturun. Dosyalar geldiğinde Lambda işlevini çağırmak için bir S3 olay bildirimi kullanın.

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

Soru #529

Bir şirket iş yüklerini AWS'ye taşıyor. Şirketin veritabanlarında işlemsel ve hassas veriler bulunmaktadır. Şirket, güvenliği artırmak ve veritabanlarının operasyonel yükünü azaltmak için AWS Cloud çözümlerini kullanmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanlarını Amazon EC2'ye taşıyın. Şifreleme için bir AWS Key Management Service (AWS KMS) AWS yönetilen anahtarı kullanın.

B. Veritabanlarını Amazon RDS'ye taşıyın Kullanımda olmayan şifrelemeyi yapılandırın.

C. Verileri Amazon S3'e taşıyın Veri güvenliği ve koruması için Amazon Macie'yi kullanın

D. Veritabanını Amazon RDS'ye taşıyın. Veri güvenliği ve koruması için Amazon CloudWatch Logs'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanlarını Amazon RDS'ye taşıyın Kullanımda olmayan şifrelemeyi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #530

Bir şirketin, TCP ve UDP çok oyunculu oyun yeteneklerine sahip bir çevrimiçi oyun uygulaması vardır. Şirket, uygulama trafiğini farklı AWS Bölgelerindeki birden fazla Ağ Yük Dengeleyicisine (NLB) yönlendirmek için Amazon Route 53'ü kullanıyor. Kullanıcı büyümesine hazırlık olarak şirketin uygulama performansını iyileştirmesi ve çevrimiçi oyundaki gecikmeyi azaltması gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. NLB'lerin önüne bir Amazon CloudFront dağıtımı ekleyin. Önbellek Kontrolü maksimum yaş parametresini artırın.

B. NLB'leri Uygulama Yük Dengeleyicileri (ALB'ler) ile değiştirin. Gecikme tabanlı yönlendirmeyi kullanmak için Route 53'ü yapılandırın.

C. NLB'lerin önüne AWS Global Accelerator'ı ekleyin. Doğru dinleyici bağlantı noktalarını kullanmak için bir Global Accelerator uç noktası yapılandırın.

D. NLB'lerin arkasına bir Amazon API Gateway uç noktası ekleyin. API önbelleğe almayı etkinleştirin. Farklı aşamalar için yöntem önbelleğe almayı geçersiz kılın.

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

Soru #531

Bir şirketin üçüncü taraf bir veri akışıyla entegre olması gerekir. Veri akışı, yeni veriler tüketime hazır olduğunda harici bir hizmeti bilgilendirmek için bir web kancası gönderir. Bir geliştirici, şirket bir webhook geri çağrısı aldığında verileri almak için bir AWS Lambda işlevi yazdı. Geliştiricinin Lambda işlevini üçüncü tarafın araması için kullanılabilir hale getirmesi gerekir. Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Lambda işlevi için bir işlev URL'si oluşturun. Web kancası için Lambda işlevi URL'sini üçüncü tarafa sağlayın.

B. Lambda işlevinin önüne bir Uygulama Yük Dengeleyicisi (ALB) dağıtın. Web kancası için ALB URL'sini üçüncü tarafa sağlayın.

C. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Konuyu Lambda işlevine ekleyin. SNS konusunun genel ana makine adını web kancası için üçüncü tarafa sağlayın.

D. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Kuyruğu Lambda işlevine ekleyin. Web kancası için SQS kuyruğunun genel ana bilgisayar adını üçüncü tarafa sağlayın.

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

Soru #532

Bir şirketin AWS Bölgesinde bir iş yükü var. Müşteriler bir Amazon API Gateway REST API kullanarak iş yüküne bağlanır ve iş yüküne erişebilir. Şirket, DNS sağlayıcısı olarak Amazon Route 53'ü kullanıyor. Şirket, tüm müşterilere bireysel ve güvenli URL'ler sağlamak istiyor. Hangi adım kombinasyonu bu gereksinimleri MOST operasyonel verimlilikle karşılayacaktır? (Üç tanesini seçin.)

A. Gerekli alan adını bir kayıt kuruluşuna kaydedin. Route 53'te barındırılan bir bölgede joker karakterli özel alan adı oluşturun ve API Ağ Geçidi uç noktasını işaret eden bölgeye kayıt yapın.

B. Farklı bir Bölgedeki AWS Sertifika Yöneticisi'ndeki (ACM) alan adlarıyla eşleşen bir joker karakter sertifikası isteyin.

C. Route 53'te gerektiği gibi her müşteri için barındırılan bölgeler oluşturun. API Ağ Geçidi uç noktasına işaret eden bölge kayıtları oluşturun.

D. Aynı Bölgedeki AWS Sertifika Yöneticisi'ndeki (ACM) özel alan adıyla eşleşen bir joker karakter sertifikası isteyin.

E. API Gateway'de her müşteri için birden fazla API uç noktası oluşturun. F. REST API için API Ağ Geçidinde özel bir alan adı oluşturun. Sertifikayı AWS Sertifika Yöneticisinden (ACM) içe aktarın.

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

Soru #533

Bir şirket verileri Amazon S3'te saklıyor. Düzenlemelere göre veriler, kişisel olarak tanımlanabilir bilgiler (PII) içermemelidir. Şirket yakın zamanda S3 klasörlerinin PII içeren bazı nesnelere sahip olduğunu keşfetti. Şirketin S3 klasörlerindeki kişisel bilgileri otomatik olarak tespit etmesi ve şirketin güvenlik ekibine bilgi vermesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Macie'yi kullanın. SensitiveData olay türünü Macie bulgularından filtrelemek ve güvenlik ekibine bir Amazon Simple Notification Service (Amazon SNS) bildirimi göndermek için bir Amazon EventBridge kuralı oluşturun.

B. Amazon GuardDuty'yi kullanın. GuardDuty bulgularından KRİTİK olay türünü filtrelemek ve güvenlik ekibine bir Amazon Simple Notification Service (Amazon SNS) bildirimi göndermek için bir Amazon EventBridge kuralı oluşturun.

C. Amazon Macie'yi kullanın. SensitiveData:S3Object/Personal olay türünü Macie bulgularından filtrelemek ve güvenlik ekibine bir Amazon Simple Queue Service (Amazon SQS) bildirimi göndermek için bir Amazon EventBridge kuralı oluşturun.

D. Amazon GuardDuty'yi kullanın. GuardDuty bulgularından KRİTİK olay türünü filtrelemek ve güvenlik ekibine bir Amazon Simple Queue Service (Amazon SQS) bildirimi göndermek için bir Amazon EventBridge kuralı oluşturun.

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

Soru #534

Bir şirket, birden fazla AWS hesabı için bir günlük kaydı çözümü oluşturmak istiyor. Şirket şu anda tüm hesaplardaki günlükleri merkezi bir hesapta saklıyor. Şirket, VPC akış günlüklerini ve AWS CloudTrail günlüklerini depolamak için merkezi hesapta bir Amazon S3 klasörü oluşturdu. Tüm günlükler sık ​​analiz için 30 gün boyunca yüksek oranda kullanılabilir olmalı, yedekleme amacıyla ek 60 gün boyunca saklanmalı ve oluşturulduktan 90 gün sonra silinmelidir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Geçiş, oluşturulduktan 30 gün sonra S3 Standart depolama sınıfına itiraz eder. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.

B. S3 Standard-Infrequent Access (S3 Standard-IA) depolama sınıfına geçiş nesneleri, oluşturulduktan 30 gün sonra. 90 gün sonra tüm nesneleri S3 Glacier Esnek Alma depolama sınıfına taşıyın. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.

C. Nesnelerin oluşturulduktan 30 gün sonra S3 Glacier Esnek Alma depolama sınıfına geçişi. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.

D. S3 Tek Bölge-İnfrekant Erişim (S3 Tek Bölge-IA) depolama sınıfına geçiş nesneleri, oluşturulduktan 30 gün sonra. 90 gün sonra tüm nesneleri S3 Glacier Esnek Alma depolama sınıfına taşıyın. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Nesneleri oluşturulduktan 30 gün sonra S3 Glacier Esnek Alma depolama sınıfına geçirin. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru #535

Bir şirket, iş yükleri için bir Amazon Elastic Kubernetes Service (Amazon EKS) kümesi oluşturuyor. Amazon EKS'de depolanan tüm gizli dizilerin Kubernetes etcd anahtar/değer deposunda şifrelenmesi gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Amazon EKS'deki tüm gizli dizileri yönetmek, döndürmek ve depolamak için AWS Secrets Manager'ı kullanın.

B. Yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Amazon EKS kümesinde Amazon EKS KMS gizli dizilerinin şifrelemesini etkinleştirin.

C. Amazon EKS kümesini varsayılan seçeneklerle oluşturun. Eklenti olarak Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) sürücüsünü kullanın.

D. takma ad/aws/ebs takma adı ile yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Hesap için varsayılan Amazon Elastic Block Store (Amazon EBS) birim şifrelemesini etkinleştirin.

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

Soru #536

Bir şirket, veri bilimcilerine şirketin üretim Amazon RDS for PostgreSQL veritabanına neredeyse gerçek zamanlı salt okunur erişim sağlamak istiyor. Veritabanı şu anda Single-AZ veritabanı olarak yapılandırılmıştır. Veri bilimcileri, üretim veritabanını etkilemeyecek karmaşık sorgular kullanır. Şirketin yüksek kullanılabilirliğe sahip bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Veri bilimcilere yeterli gücü sağlamak için mevcut üretim veritabanını bir bakım penceresinde ölçeklendirin.

B. Kurulumu Single-AZ'den daha büyük bir ikincil yedek bulut sunucusuna sahip Multi-AZ bulut sunucusu dağıtımına değiştirin. Veri bilimcilerinin ikincil örneğe erişmesini sağlayın.

C. Kurulumu Single-AZ'den Multi-AZ bulut sunucusu dağıtımına değiştirin. Veri bilimcilere iki ek okuma kopyası sağlayın.

D. Kurulumu Single-AZ'den iki okunabilir bekleme bulut sunucusuna sahip Multi-AZ küme dağıtımına değiştirin. Veri bilimcilerine okuma uç noktaları sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kurulumu Single-AZ'den iki okunabilir bekleme bulut sunucusuyla Multi-AZ küme dağıtımına değiştirin. Veri bilimcilerine okuma uç noktaları sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #537

Bir şirket, AWS Cloud'da üç Erişilebilirlik Alanında çalışan üç katmanlı bir web uygulaması çalıştırıyor. Uygulama mimarisinde bir Application Load Balancer, kullanıcı oturum durumlarını barındıran bir Amazon EC2 web sunucusu ve bir EC2 bulut sunucusu üzerinde çalışan bir MySQL veritabanı bulunur. Şirket, uygulama trafiğinde ani artışlar bekliyor. Şirket, gelecekteki uygulama kapasitesi taleplerini karşılamak ve üç Erişilebilirlik Alanının tamamında yüksek kullanılabilirlik sağlamak için ölçeklendirme yapabilmek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Multi-AZ Veritabanı kümesi dağıtımıyla MySQL veritabanını MySQL için Amazon RDS'ye taşıyın. Oturum verilerini depolamak ve okumaları önbelleğe almak için yüksek kullanılabilirliğe sahip Amazon ElastiCache for Redis'i kullanın. Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.

B. Multi-AZ Veritabanı kümesi dağıtımıyla MySQL veritabanını Amazon RDS for MySQL'e taşıyın. Oturum verilerini depolamak ve okumaları önbelleğe almak için yüksek kullanılabilirliğe sahip Amazon ElastiCache for Memcached'i kullanın. Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.

C. MySQL veritabanını Amazon DynamoDB'ye geçirin Okumaları önbelleğe almak için DynamoDB Accelerator'ı (DAX) kullanın. Oturum verilerini DynamoDB'de saklayın. Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.

D. MySQL veritabanını tek bir Erişilebilirlik Alanında Amazon RDS for MySQL'e taşıyın. Oturum verilerini depolamak ve okumaları önbelleğe almak için yüksek kullanılabilirliğe sahip Amazon ElastiCache for Redis'i kullanın. Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.

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

Soru #538

Küresel bir video akışı şirketi, içerik dağıtım ağı (CDN) olarak Amazon CloudFront'u kullanıyor. Şirket, içeriği birden fazla ülkede aşamalı olarak yayınlamak istiyor. Şirketin, içeriğin kullanıma sunulduğu ülkeler dışındaki izleyicilerin içeriği görüntüleyememesini sağlaması gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. İzin verilenler listesini kullanarak CloudFront'taki içeriğe coğrafi kısıtlamalar ekleyin. Özel bir hata mesajı ayarlayın.

B. Kısıtlanmış içerik için yeni bir URL ayarlayın. İmzalı bir URL ve çerezler kullanarak erişimi yetkilendirin. Özel bir hata mesajı ayarlayın.

C. Şirketin dağıttığı içeriğe ilişkin verileri şifreleyin. Özel bir hata mesajı ayarlayın.

D. Kısıtlanmış içerik için yeni bir URL oluşturun. İmzalı URL'ler için zaman kısıtlamalı bir erişim politikası ayarlayın.

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

Soru #539

Bir şirket, şirket içi felaket kurtarma (DR) yapılandırmasını iyileştirmek için AWS Cloud'u kullanmak istiyor. Şirketin temel üretim iş uygulaması, sanal makinede (VM) çalışan Microsoft SQL Server Standard'ı kullanıyor. Uygulamanın 30 saniye veya daha kısa bir kurtarma noktası hedefi (RPO) ve 60 dakikalık bir kurtarma süresi hedefi (RTO) vardır. DR çözümünün mümkün olan her yerde maliyetleri en aza indirmesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Microsoft SQL Server Enterprise'ı Always On kullanılabilirlik gruplarıyla kullanarak şirket içi sunucu ile AWS arasında çok siteli etkin/etkin kurulumu yapılandırın.

B. AWS'de SQL Server veritabanı için hazır beklemede bir Amazon RDS yapılandırın. AWS Database Migration Service'i (AWS DMS) değişiklik verilerini yakalamayı (CDC) kullanacak şekilde yapılandırın.

C. Disk değişikliklerini AWS'ye pilot ışık olarak kopyalamak için yapılandırılmış AWS Elastic Disaster Recovery'yi kullanın.

D. Her gece yedeklemeleri yakalamak için üçüncü taraf yedekleme yazılımını kullanın. İkincil bir yedekleme kümesini Amazon S3'te depolayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Disk değişikliklerini AWS'ye pilot ışık olarak çoğaltmak için yapılandırılmış AWS Elastic Disaster Recovery'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #540

Bir şirketin, müşteri bilgilerini işlemek ve depolamak için Oracle veritabanını kullanan şirket içi bir sunucusu vardır. Şirket, daha yüksek kullanılabilirlik elde etmek ve uygulama performansını artırmak için bir AWS veritabanı hizmeti kullanmak istiyor. Şirket ayrıca birincil veritabanı sisteminden raporlama yükünü de almak istiyor. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Birden fazla AWS Bölgesinde bir Amazon RDS DB bulut sunucusu oluşturmak için AWS Database Migration Service'i (AWS DMS) kullanın. Raporlama işlevlerini birincil veritabanı bulut sunucusundan ayrı bir veritabanı bulut sunucusuna yönlendirin.

B. Oracle veritabanı oluşturmak için Amazon RDS'yi Single-AZ dağıtımında kullanın. Birincil veritabanı bulut sunucusuyla aynı bölgede bir okuma kopyası oluşturun. Raporlama işlevlerini okuma kopyasına yönlendirin.

C. Oracle veritabanı oluşturmak için Multi-AZ küme dağıtımında dağıtılan Amazon RDS'yi kullanın. Raporlama işlevlerini küme dağıtımında okuyucu örneğini kullanacak şekilde yönlendirin.

D. Amazon Aurora veritabanı oluşturmak için Multi-AZ bulut sunucusu dağıtımında dağıtılan Amazon RDS'yi kullanın. Raporlama işlevlerini okuyucu örneklerine yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon Aurora veritabanı oluşturmak için Multi-AZ bulut sunucusu dağıtımında dağıtılan Amazon RDS'yi kullanın. Raporlama işlevlerini okuyucu örneklerine yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #541

Bir şirket AWS üzerinde bir web uygulaması oluşturmak istiyor. Müşterinin web sitesine erişim talepleri tahmin edilemez ve uzun süre boşta kalabilir. Yalnızca abonelik ücreti ödemiş olan müşteriler oturum açabilir ve web uygulamasını kullanabilir. Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (Üç tanesini seçin.)

A. Amazon DynamoDB'den kullanıcı bilgilerini almak için bir AWS Lambda işlevi oluşturun. RESTful API'leri kabul etmek için bir Amazon API Gateway uç noktası oluşturun. API çağrılarını Lambda işlevine gönderin.

B. Amazon RDS'den kullanıcı bilgilerini almak için Application Load Balancer'ın arkasında bir Amazon Elastic Container Service (Amazon ECS) hizmeti oluşturun. RESTful API'leri kabul etmek için bir Amazon API Gateway uç noktası oluşturun. API çağrılarını Lambda işlevine gönderin.

C. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito kullanıcı havuzu oluşturun.

D. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito kimlik havuzu oluşturun.

E. Ön uç web içeriğini HTML, CSS ve JS ile sunmak için AWS Amplify'ı kullanın. Entegre bir Amazon CloudFront yapılandırması kullanın. F. PHP, CSS ve JS ile Amazon S3 statik web barındırma özelliğini kullanın. Ön uç web içeriğini sunmak için Amazon CloudFront'u kullanın.

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

Soru #542

Bir medya şirketi, internet üzerinden içerik sunmak için Amazon CloudFront dağıtımını kullanıyor. Şirket, yalnızca premium müşterilerin medya akışlarına ve dosya içeriğine erişmesini istiyor. Şirket, tüm içeriği bir Amazon S3 klasöründe saklıyor. Şirket ayrıca müşterilere film kiralama veya müzik indirme gibi belirli bir amaç için talep üzerine içerik de sunuyor. Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru #543

Bir şirket, Amazon EC2 bulut sunucularını, ayrı ayrı alınan birden fazla AWS hesabında çalıştırıyor. Şirket yakın zamanda bir Tasarruf Piyanı satın aldı. Şirketin iş gereksinimlerindeki değişiklikler nedeniyle şirket çok sayıda EC2 bulut sunucusunu kullanımdan kaldırdı. Şirket, Tasarruf Planı indirimlerini diğer AWS hesaplarında kullanmak istiyor. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Yönetim hesabının AWS Hesap Yönetimi Konsolu'ndaki faturalandırma tercihleri bölümünden indirim paylaşımını açın.

B. Mevcut Birikim Planını satın alan hesabın AWS Hesap Yönetimi Konsolu'ndaki faturalandırma tercihleri ​​bölümünden indirim paylaşımını açın. Tüm hesapları dahil edin.

C. Tasarruf Planını diğer hesaplarla paylaşmak için AWS Organizasyon yönetim hesabından AWS Resource Access Manager'ı (AWS RAM) kullanın.

D. AWS Organizasyonlarında yeni bir ödeyen hesabında bir kuruluş oluşturun. Diğer AWS hesaplarını yönetim hesabından kuruluşa katılmaya davet edin.

E. Mevcut AWS hesabında, mevcut EC2 bulut sunucuları ve Tasarruf Planıyla AWS Organizasyonlarında bir kuruluş oluşturun. Diğer AWS hesaplarını yönetim hesabından kuruluşa katılmaya davet edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Yönetim hesabının AWS Hesap Yönetimi Konsolu'ndaki faturalandırma tercihleri ​​bölümünden indirim paylaşımını açın. AWS Organizasyonlarında yeni bir ödeyen hesabında bir kuruluş oluşturun. Diğer AWS hesaplarını yönetim hesabından kuruluşa katılmaya davet edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #544

Bir perakende şirketi, genel REST API'leri için bölgesel bir Amazon API Gateway API'si kullanıyor. API Gateway uç noktası, Amazon Route 53 takma ad kaydına işaret eden özel bir alan adıdır. Bir çözüm mimarının, API'lerin yeni sürümünü yayınlamak için müşteriler üzerinde minimum etkiye sahip ve minimum veri kaybı olan bir çözüm oluşturması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. API Ağ Geçidi için bir canary sürüm dağıtım aşaması oluşturun. En son API sürümünü dağıtın. Kanarya sahnesine uygun bir trafik yüzdesini yönlendirin. API doğrulamasının ardından kanarya aşamasını üretim aşamasına yükseltin.

B. OpenAPI YAML dosya biçimindeki yeni API sürümüyle yeni bir API Ağ Geçidi uç noktası oluşturun. API Gateway'deki API'ye birleştirme modunda güncelleme için içe aktarma işlemini kullanın. API'nin yeni sürümünü üretim aşamasına dağıtın.

C. API'nin OpenAPI JSON dosya biçiminde yeni bir sürümüyle yeni bir API Ağ Geçidi uç noktası oluşturun. API Gateway'deki API'ye üzerine yazma modunda güncelleme için içe aktarma işlemini kullanın. API'nin yeni sürümünü üretim aşamasına dağıtın.

D. API tanımlarının yeni sürümleriyle yeni bir API Ağ Geçidi uç noktası oluşturun. Yeni API Ağ Geçidi API'si için özel bir alan adı oluşturun. Route 53 takma ad kaydını yeni API Gateway API özel alan adına yönlendirin.

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

Soru #545

Bir şirket, ana web sitesinin kullanılamaması durumunda kullanıcılarını yedek bir statik hata sayfasına yönlendirmek ister. Birincil web sitesinin DNS kayıtları Amazon Route 53'te barındırılmaktadır. Etki alanı bir Application Load Balancer'ı (ALB) işaret etmektedir. Şirketin değişiklikleri ve altyapı yükünü en aza indirecek bir çözüme ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. Gecikme yönlendirme politikasını kullanmak için Route 53 kayıtlarını güncelleyin. Trafiğin en duyarlı uç noktalara gönderilmesi için kayıtlara bir Amazon S3 klasöründe barındırılan statik bir hata sayfası ekleyin.

B. Route 53 aktif-pasif yük devretme yapılandırmasını ayarlayın. Route 53 durum kontrolleri ALB uç noktasının sağlıksız olduğunu belirlediğinde trafiği Amazon S3 klasöründe barındırılan statik bir hata sayfasına yönlendirin.

C. ALB ve uç nokta olarak statik bir hata sayfası barındıran bir Amazon EC2 bulut sunucusu ile Route 53 aktif-aktif yapılandırması ayarlayın. Route 53'ü, yalnızca ALB için durum denetimlerinin başarısız olması durumunda örneğe istek gönderecek şekilde yapılandırın.

D. Çok değerli yanıt yönlendirme politikasını kullanmak için Route 53 kayıtlarını güncelleyin. Bir sağlık kontrolü oluşturun. Sağlık kontrolünden geçerse trafiği web sitesine yönlendirin. Durum denetimi geçemezse trafiği Amazon S3'te barındırılan statik bir hata sayfasına yönlendirin.

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

Soru #546

Bir şirketin BT harcamalarına ilişkin yakın zamanda yapılan bir analiz, yedekleme maliyetlerini azaltma ihtiyacını vurguluyor. Şirketin bilişim sorumlusu, şirket içi yedekleme altyapısını basitleştirmek ve fiziksel yedekleme bantlarının kullanımını ortadan kaldırarak maliyetleri düşürmek istiyor. Şirket, şirket içi yedekleme uygulamalarına ve iş akışlarına yapılan mevcut yatırımı korumalıdır. Bir çözüm mimarı ne tavsiye etmelidir?

A. NFS arayüzünü kullanarak yedekleme uygulamalarına bağlanmak için AWS Storage Gateway'i kurun.

B. NFS arayüzünü kullanarak yedekleme uygulamalarına bağlanan bir Amazon EFS dosya sistemi kurun.

C. iSCSI arayüzünü kullanarak yedekleme uygulamalarına bağlanan bir Amazon EFS dosya sistemi kurun.

D. iSCSI sanal bant kitaplığı (VTL) arayüzünü kullanarak yedekleme uygulamalarına bağlanmak için AWS Storage Gateway'i kurun.

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

Soru #547

Bir şirketin farklı lokasyonlarda veri toplama sensörleri vardır. Veri toplama sensörleri şirkete yüksek miktarda veri akışı sağlar. Şirket, yüksek hacimli akış verilerini alıp işlemek için AWS üzerinde bir platform tasarlamak istiyor. Çözüm ölçeklenebilir olmalı ve neredeyse gerçek zamanlı veri toplamayı desteklemelidir. Şirketin gelecekteki raporlama için verileri Amazon S3'te saklaması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

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

Soru #548

Bir şirketin finans, veri analizi ve geliştirme departmanları için ayrı AWS hesapları vardır. Maliyetler ve güvenlik endişeleri nedeniyle şirket, her AWS hesabının hangi hizmetleri kullanabileceğini kontrol etmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her departmanın hangi AWS hizmetlerini kullanabileceğini kontrol etmek için AWS Systems Manager şablonlarını kullanın.

B. AWS Organizasyonlarındaki her departman için organizasyon birimleri (OU'lar) oluşturun. Hizmet kontrol politikalarını (SCP'ler) kuruluş birimlerine ekleyin.

C. Yalnızca her departmanın kullanabileceği AWS hizmetlerini otomatik olarak sağlamak için AWS CloudFormation'ı kullanın.

D. Belirli AWS hizmetlerinin kullanımını yönetmek ve kontrol etmek için AWS hesaplarındaki AWS Hizmet Kataloğu'ndaki ürünlerin bir listesini oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Organizasyonlarındaki her departman için organizasyon birimleri (OU'lar) oluşturun. Hizmet kontrol politikalarını (SCP'ler) kuruluş birimlerine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #549

Bir şirket, e-ticaret web sitesi için çok katmanlı bir uygulama oluşturdu. Web sitesi, genel alt ağlarda bulunan bir Application Load Balancer, genel alt ağlarda bir web katmanı ve özel alt ağlarda Amazon EC2 bulut sunucularında barındırılan bir MySQL kümesi kullanır. MySQL veritabanının, internette üçüncü taraf bir sağlayıcı tarafından barındırılan ürün kataloğunu ve fiyatlandırma bilgilerini alması gerekir. Bir çözüm mimarı, operasyonel yükü artırmadan güvenliği en üst düzeye çıkaran bir strateji tasarlamalıdır. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. VPC'de bir NAT örneği dağıtın. Tüm internet tabanlı trafiği NAT örneği üzerinden yönlendirin.

B. Genel alt ağlara bir NAT ağ geçidi dağıtın. İnternete bağlı tüm trafiği NAT ağ geçidine yönlendirmek için özel alt ağ yönlendirme tablosunu değiştirin.

C. Bir internet ağ geçidi yapılandırın ve internete bağlı trafiği internet ağ geçidine yönlendirmek için bunu VPModify özel alt ağ yönlendirme tablosuna ekleyin.

D. Sanal bir özel ağ geçidi yapılandırın ve bunu VPC'ye ekleyin. İnternete bağlı trafiği sanal özel ağ geçidine yönlendirmek için özel alt ağ yönlendirme tablosunu değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Genel alt ağlara bir NAT ağ geçidi dağıtın. İnternete bağlı tüm trafiği NAT ağ geçidine yönlendirmek için özel alt ağ yönlendirme tablosunu değiştirin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #550

Bir şirket, AWS Lambda ortam değişkenlerini şifrelemek için AWS Key Management Service (AWS KMS) anahtarlarını kullanıyor. Bir çözüm mimarının, ortam değişkenlerinin şifresini çözmek ve kullanmak için gerekli izinlerin mevcut olduğundan emin olması gerekir. Çözüm mimarının doğru izinleri uygulamak için hangi adımları atması gerekir? (İki tane seçin.)

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

Soru #551

Bir şirketin rapor üreten bir finansal uygulaması vardır. Raporlar ortalama 50 KB boyutundadır ve Amazon S3'te depolanır. Raporlara sıklıkla üretimden sonraki ilk hafta içinde erişilir ve birkaç yıl boyunca saklanması gerekir. Raporlar 6 saat içinde alınabilmelidir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. S3 Standardını kullanın. Raporları 7 gün sonra S3 Glacier'a geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın.

B. S3 Standardını kullanın. Raporları 7 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın.

C. S3 Intelligent-Tiering'i kullanın. Raporları S3 Standart-Nadir Erişime (S3 Standart-IA) ve S3 Glacier'a geçirmek için S3 Akıllı Katmanlamayı yapılandırın.

D. S3 Standardını kullanın. Raporları 7 gün sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın.

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

Soru #552

Bir şirketin Amazon EC2 bulut sunucularının maliyetini optimize etmesi gerekiyor. Şirketin ayrıca EC2 bulut sunucularının türünü ve ailesini 2-3 ayda bir değiştirmesi gerekiyor. Şirket bu gereksinimleri karşılamak için ne yapmalı?

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

Soru #553

Bir çözüm mimarının, kişisel olarak tanımlanabilir bilgileri (PII) keşfetmek için bir şirketin Amazon S3 paketlerini incelemesi gerekir. Şirket, PII verilerini us-east-1 Bölgesi ve us-west-2 Bölgesinde saklıyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her Bölgede Amazon Macie'yi yapılandırın. Amazon S3'teki verileri analiz etmek için bir iş oluşturun.

B. AWS Security Hub'ı tüm Bölgeler için yapılandırın. Amazon S3'teki verileri analiz etmek için bir AWS Config kuralı oluşturun.

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

Soru #554

Bir şirketin SAP uygulamasının şirket içi ortamda bir arka uç SQL Server veritabanı vardır. Şirket, şirket içi uygulamasını ve veritabanı sunucusunu AWS'ye taşımak istiyor. Şirketin SAP veritabanının yüksek taleplerini karşılayan bir bulut sunucusu tipine ihtiyacı var. Şirket içi performans verileri, hem SAP uygulamasının hem de veritabanının yüksek bellek kullanımına sahip olduğunu göstermektedir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulama için işlem açısından optimize edilmiş örnek ailesini kullanın. Veritabanı için belleği optimize edilmiş bulut sunucusu ailesini kullanın.

B. Hem uygulama hem de veritabanı için depolama açısından optimize edilmiş bulut sunucusu ailesini kullanın.

C. Hem uygulama hem de veritabanı için belleği optimize edilmiş bulut sunucusu ailesini kullanın.

D. Uygulama için yüksek performanslı bilgi işlem (HPC) için optimize edilmiş örnek ailesini kullanın. Veritabanı için belleği optimize edilmiş bulut sunucusu ailesini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Hem uygulama hem de veritabanı için belleği optimize edilmiş bulut sunucusu ailesini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #555

Bir şirket, bir uygulamayı genel ve özel alt ağlara sahip bir VPC'de çalıştırır. VPC birden fazla Erişilebilirlik Alanına yayılır. Uygulama, özel alt ağlardaki Amazon EC2 bulut sunucularında çalışır. Uygulama bir Amazon Simple Queue Service (Amazon SQS) kuyruğunu kullanıyor. Bir çözüm mimarının EC2 bulut sunucuları ile SQS kuyruğu arasında bağlantı kurmak için güvenli bir çözüm tasarlaması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı özel alt ağları kullanacak şekilde yapılandırın. Uç noktaya, özel alt ağlardaki EC2 bulut sunucularından gelen trafiğe izin veren bir gelen erişim kuralına sahip bir güvenlik grubu ekleyin.

B. Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı genel alt ağları kullanacak şekilde yapılandırın. Arayüz uç noktasına, özel alt ağlardaki EC2 bulut sunucularından erişime izin veren bir VPC uç nokta politikası ekleyin.

C. Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı genel alt ağları kullanacak şekilde yapılandırın. Yalnızca belirli bir VPC uç noktasından gelen isteklere izin veren arayüz VPC uç noktasına bir Amazon SQS erişim politikası ekleyin.

D. Amazon SQS için bir ağ geçidi uç noktası uygulayın. Özel alt ağlara bir NAT ağ geçidi ekleyin. EC2 bulut sunucularına, SQS kuyruğuna erişime izin veren bir IAM rolü ekleyin.

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

Soru #556

Bir çözüm mimarı, üç katmanlı bir web uygulamasını dağıtmak için AWS CloudFormation şablonunu kullanıyor. Web uygulaması, kullanıcı verilerini Amazon DynamoDB tablolarında depolayan ve alan bir web katmanı ve bir uygulama katmanından oluşur. Web ve uygulama katmanları Amazon EC2 bulut sunucularında barındırılır ve veritabanı katmanına herkesin erişimi yoktur. Uygulama EC2 bulut sunucularının, şablondaki API kimlik bilgilerini açığa çıkarmadan DynamoDB tablolarına erişmesi gerekir. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. DynamoDB tablolarını okumak için bir IAM rolü oluşturun. Bir örnek profiline başvurarak rolü uygulama örnekleriyle ilişkilendirin.

B. DynamoDB tablolarından okuma ve yazma için gerekli izinlere sahip bir IAM rolü oluşturun. Rolü EC2 bulut sunucusu profiline ekleyin ve bulut sunucusu profilini uygulama bulut sunucularıyla ilişkilendirin.

C. DynamoDB tablolarından okuma ve yazma için gerekli izinlere sahip, önceden oluşturulmuş bir IAM kullanıcısından kullanıcı giriş erişimine ve gizli anahtarlara sahip olmak için AWS CloudFormation şablonundaki parametre bölümünü kullanın.

D. AWS CloudFormation şablonunda, DynamoDB tablolarından okuma ve yazma için gerekli izinlere sahip bir IAM kullanıcısı oluşturun. Erişim ve gizli anahtarları almak ve bunları kullanıcı verileri aracılığıyla uygulama örneklerine aktarmak için GetAtt işlevini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** DynamoDB tablolarından okuma ve yazma için gerekli izinlere sahip bir IAM rolü oluşturun. Rolü EC2 bulut sunucusu profiline ekleyin ve bulut sunucusu profilini uygulama bulut sunucularıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #557

Çözüm mimarı bir analiz uygulamasını yönetir. Uygulama, büyük miktarda yarı yapılandırılmış veriyi bir Amazon S3 klasöründe depolar. Çözüm mimarı, verileri daha hızlı işlemek için paralel veri işlemeyi kullanmak istiyor. Çözüm mimarı ayrıca verileri zenginleştirmek için Amazon Redshift veritabanında depolanan bilgileri kullanmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 verilerini işlemek için Amazon Athena'yı kullanın. S3 verilerini zenginleştirmek için AWS Glue'yu Amazon Redshift verileriyle birlikte kullanın.

B. S3 verilerini işlemek için Amazon EMR'yi kullanın. S3 verilerini zenginleştirmek için Amazon EMR'yi Amazon Redshift verileriyle birlikte kullanın.

C. S3 verilerini işlemek için Amazon EMR'yi kullanın. Verilerin zenginleştirilebilmesi amacıyla S3 verilerini Amazon Redshift'e taşımak için Amazon Kinesis Data Streams'i kullanın.

D. S3 verilerini işlemek için AWS Glue'yu kullanın. S3 verilerini zenginleştirmek için AWS Lake Formation'ı Amazon Redshift verileriyle birlikte kullanın.

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

Soru #558

Bir şirketin aynı AWS hesabında us-west-2 Bölgesinde bulunan iki VPC'si var. Şirketin bu VPC'ler arasındaki ağ trafiğine izin vermesi gerekiyor. VPC'ler arasında her ay yaklaşık 500 GB veri aktarımı gerçekleşecektir. Bu VPC'leri bağlamak için EN uygun maliyetli çözüm nedir?

A. VPC'leri bağlamak için AWS Transit Gateway'i uygulayın. VPC'ler arası iletişim için geçiş ağ geçidini kullanmak üzere her VPC'nin rota tablolarını güncelleyin.

B. VPC'ler arasında bir AWS Siteden Siteye VPN tüneli uygulayın. VPC'ler arası iletişim için VPN tünelini kullanmak üzere her VPC'nin rota tablolarını güncelleyin.

C. VPC'ler arasında bir VPC eşleme bağlantısı kurun. VPC'ler arası iletişim için VPC eşleme bağlantısını kullanmak üzere her VPC'nin yönlendirme tablolarını güncelleyin.

D. VPC'ler arasında 1 GB'lık bir AWS Direct Connect bağlantısı kurun. VPC'ler arası iletişim için Direct Connect bağlantısını kullanmak üzere her VPC'nin yönlendirme tablolarını güncelleyin.

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

Soru #559

Bir şirket, farklı ürün grupları için AWS'de birden fazla uygulamayı barındırıyor. Uygulamalar, Amazon EC2 bulut sunucuları ve Application Load Balancer'lar dahil olmak üzere farklı bilgi işlem kaynaklarını kullanır. Uygulamalar, birden fazla AWS Bölgesindeki AWS Kuruluşlarında aynı kuruluş altındaki farklı AWS hesaplarında çalışır. Her ürün grubunun ekipleri, her bir bilgi işlem kaynağını bireysel hesaplarda etiketledi. Şirket, Kuruluşlardaki birleştirilmiş faturalandırma özelliğinden her ürün grubunun maliyeti hakkında daha fazla ayrıntı istiyor. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

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

Soru #560

Bir şirketin çözüm mimarı, AWS Organizasyonlarını kullanan bir AWS çoklu hesap çözümü tasarlıyor. Çözüm mimarı, şirketin hesaplarını organizasyon birimleri (OU'lar) halinde organize etti. Çözüm mimarının, kuruluş birimi hiyerarşisindeki değişiklikleri tanımlayacak bir çözüme ihtiyacı vardır. Çözümün aynı zamanda herhangi bir değişiklik konusunda şirketin operasyon ekibini bilgilendirmesi gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS Control Tower'ı kullanarak AWS hesaplarının temel hazırlığını yapın. Kuruluş birimi hiyerarşisindeki değişiklikleri belirlemek için hesap kayması bildirimlerini kullanın.

B. AWS Control Tower'ı kullanarak AWS hesaplarının temel hazırlığını yapın. Kuruluş birimi hiyerarşisindeki değişiklikleri belirlemek için AWS Config toplu kurallarını kullanın.

C. Kuruluşlarda hesap oluşturmak için AWS Service Catalog'u kullanın. Kuruluş birimi hiyerarşisindeki değişiklikleri belirlemek için bir AWS CloudTrail kuruluş takibi kullanın.

D. Kuruluşlarda hesap oluşturmak için AWS CloudFormation şablonlarını kullanın. Kuruluş birimi hiyerarşisindeki değişiklikleri tanımlamak için yığın üzerinde sürüklenme algılama işlemini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Control Tower'ı kullanarak AWS hesaplarının temel hazırlığını yapın. Kuruluş birimi hiyerarşisindeki değişiklikleri belirlemek için hesap kayması bildirimlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #561

Bir şirketin web sitesi her gün milyonlarca talebi ele alıyor ve taleplerin sayısı artmaya devam ediyor. Bir çözüm mimarının web uygulamasının yanıt süresini iyileştirmesi gerekir. Çözüm mimarı, uygulamanın Amazon DynamoDB tablosundan ürün ayrıntılarını alırken gecikmeyi azaltması gerektiğini belirler. Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılayacak?

A. Bir DynamoDB Hızlandırıcı (DAX) kümesi kurun. Tüm okuma isteklerini DAX aracılığıyla yönlendirin.

B. DynamoDB tablosu ile web uygulaması arasında Amazon ElastiCache for Redis'i kurun. Tüm okuma isteklerini Redis aracılığıyla yönlendirin.

C. DynamoDB tablosu ile web uygulaması arasında Memcached için Amazon ElastiCache'i kurun. Tüm okuma isteklerini Memcached aracılığıyla yönlendirin.

D. Tabloda Amazon DynamoDB Streams'i kurun ve AWS Lambda'nın tablodan okumasını ve Amazon ElastiCache'i doldurmasını sağlayın. Tüm okuma isteklerini ElastiCache aracılığıyla yönlendirin.

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

Soru #562

Bir çözüm mimarının, bir VPC'deki Amazon EC2 bulut sunucularından Amazon DynamoDB'ye yapılan API çağrılarının internet üzerinden seyahat etmediğinden emin olması gerekir. Çözüm mimarı bu gereksinimi karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

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

Soru #563

Bir şirket, uygulamalarını hem Amazon Elastic Kubernetes Service (Amazon EKS) kümelerinde hem de şirket içi Kubernetes kümelerinde çalıştırır. Şirket, tüm kümeleri ve iş yüklerini merkezi bir konumdan görüntülemek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Küme bilgilerini toplamak ve gruplandırmak için Amazon CloudWatch Container Insights'ı kullanın.

B. Tüm Kubernetes kümelerini kaydetmek ve bağlamak için Amazon EKS Connector'ı kullanın.

C. Küme bilgilerini toplamak ve görüntülemek için AWS Systems Manager'ı kullanın.

D. Diğer kümeleri yerel Kubernetes komutlarıyla görüntülemek için Amazon EKS Anywhere'i birincil küme olarak kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tüm Kubernetes kümelerini kaydetmek ve bağlamak için Amazon EKS Connector'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #564

Bir şirket bir e-ticaret uygulaması geliştiriyor ve hassas müşteri bilgilerini depolaması gerekiyor. Şirketin müşterilere web sitesinde satın alma işlemlerini tamamlama olanağı vermesi gerekiyor. Şirketin ayrıca hassas müşteri verilerinin veritabanı yöneticilerinden bile korunduğundan emin olması gerekiyor. Hangi çözüm bu gereksinimleri karşılıyor?

A. Hassas verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde depolayın. Verileri şifrelemek için EBS şifrelemesini kullanın. Erişimi kısıtlamak için bir IAM örneği rolü kullanın.

B. Hassas verileri MySQL için Amazon RDS'de depolayın. Verileri şifrelemek için AWS Key Management Service (AWS KMS) istemci tarafı şifrelemesini kullanın.

C. Hassas verileri Amazon S3'te saklayın. Verileri şifrelemek için AWS Key Management Service (AWS KMS) sunucu tarafı şifrelemesini kullanın. Erişimi kısıtlamak için S3 paket politikalarını kullanın.

D. Hassas verileri Windows Server için Amazon FSx'te saklayın. Dosya paylaşımını uygulama sunucularına bağlayın. Erişimi kısıtlamak için Windows dosya izinlerini kullanın.

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

Soru #565

Bir şirketin, işlem verilerini işleyen şirket içi bir MySQL veritabanı vardır. Şirket, veritabanını AWS Cloud'a taşıyor. Taşınan veritabanının, şirketin veritabanını kullanan uygulamalarıyla uyumluluğu sürdürmesi gerekir. Taşınan veritabanının talebin arttığı dönemlerde de otomatik olarak ölçeklendirilmesi gerekir. Bu gereksinimleri hangi geçiş çözümü karşılayacak?

C. Veritabanını Amazon RDS for MySQL'e taşımak için yerel MySQL araçlarını kullanın. Elastik depolama ölçeklendirmesini yapılandırın.

B. mysqldump yardımcı programını kullanarak veritabanını Amazon Redshift'e taşıyın. Amazon Redshift kümesi için Otomatik Ölçeklendirmeyi açın.

C. Veritabanını Amazon Aurora'ya taşımak için AWS Database Migration Service'i (AWS DMS) kullanın. Aurora Otomatik Ölçeklendirmeyi açın.

D. Veritabanını Amazon DynamoDB'ye taşımak için AWS Database Migration Service'i (AWS DMS) kullanın. Otomatik Ölçeklendirme ilkesini yapılandırın.

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

Soru #566

Bir şirket, iki Erişilebilirlik Alanındaki bir VPC'de birden fazla Amazon EC2 Linux örneğini çalıştırıyor. Örnekler, hiyerarşik bir dizin yapısı kullanan uygulamaları barındırır. Uygulamaların paylaşılan depolama alanına hızlı ve eş zamanlı olarak okuması ve yazması gerekir. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir Amazon S3 klasörü oluşturun. VPC'deki tüm EC2 bulut sunucularından erişime izin verin.

B. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini her EC2 örneğinden bağlayın.

C. Tedarik Edilen IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) biriminde bir dosya sistemi oluşturun. EBS birimini tüm EC2 bulut sunucularına ekleyin.

D. Her EC2 bulut sunucusuna eklenen Amazon Elastic Block Store (Amazon EBS) birimlerinde dosya sistemleri oluşturun. EBS birimlerini farklı EC2 bulut sunucuları arasında senkronize edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini her EC2 örneğinden bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru #567

Bir çözüm mimarı, bir binadaki işletme kiracılarının saatlik enerji tüketimini depolayacak bir iş yükü tasarlıyor. Sensörler, her kiracı için kullanımı artıracak HTTP istekleri aracılığıyla bir veritabanını besleyecek. Çözüm mimarı mümkün olduğunda yönetilen hizmetleri kullanmalıdır. Çözüm mimarı bağımsız bileşenler ekledikçe iş yükü gelecekte daha fazla özellik alacaktır. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Sensörlerden veri almak, verileri işlemek ve verileri bir Amazon DynamoDB tablosunda depolamak için Amazon API Gateway'i AWS Lambda işlevleriyle birlikte kullanın.

B. Sensörlerden veri almak ve işlemek için Amazon EC2 bulut sunucularının Otomatik Ölçeklendirme grubu tarafından desteklenen bir Elastic Load Balancer kullanın. İşlenen verileri depolamak için bir Amazon S3 klasörü kullanın.

C. Sensörlerden veri almak, verileri işlemek ve verileri bir Amazon EC2 bulut sunucusundaki Microsoft SQL Server Express veritabanında depolamak için Amazon API Gateway'i AWS Lambda işlevleriyle birlikte kullanın.

D. Sensörlerden veri almak ve işlemek için Amazon EC2 bulut sunucularından oluşan Otomatik Ölçeklendirme grubu tarafından desteklenen bir Elastic Load Balancer kullanın. İşlenen verileri depolamak için Amazon Elastic File System (Amazon EFS) paylaşılan dosya sistemini kullanın.

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

Soru #568

Bir çözüm mimarı, mühendislik çizimlerini depolamak ve görüntülemek için kullanılan yeni bir web uygulaması için depolama mimarisini tasarlıyor. Tüm uygulama bileşenleri AWS altyapısına dağıtılacaktır. Uygulama tasarımı, kullanıcıların mühendislik çizimlerinin yüklenmesini beklediği süreyi en aza indirmek için önbelleğe almayı desteklemelidir. Uygulama petabaytlarca veri depolayabilmelidir. Çözüm mimarı hangi depolama ve önbellekleme kombinasyonunu kullanmalıdır?

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

Soru #569

Amazon EventBridge kuralı üçüncü taraf bir API'yi hedefler. Üçüncü taraf API herhangi bir gelen trafik almadı. Bir çözüm mimarının, kural koşullarının karşılanıp karşılanmadığını ve kuralın hedefinin çağrılıp çağrılmadığını belirlemesi gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru #570

Bir şirketin her Cuma akşamı çalışan büyük bir iş yükü var. İş yükü, us-east-1 Bölgesindeki iki Erişilebilirlik Alanında bulunan Amazon EC2 bulut sunucularında çalışır. Normalde şirketin her zaman ikiden fazla bulut sunucusu çalıştırmaması gerekir. Ancak şirket, düzenli olarak tekrarlanan artan iş yükünün üstesinden gelmek için her Cuma günü altı bulut sunucusuna kadar ölçeklendirmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

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

Soru #571

Bir şirket REST API oluşturuyor. Şirketin TLS kullanımına yönelik katı gereksinimleri vardır. Şirket, API uç noktalarında TLSv1.3'e ihtiyaç duyuyor. Şirket ayrıca TLS sertifikasını imzalamak için belirli bir genel üçüncü taraf sertifika yetkilisine (CA) ihtiyaç duyuyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Üçüncü taraf tarafından imzalanan bir sertifika oluşturmak için yerel bir makine kullanın. Sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın. Amazon API Gateway'de özel bir etki alanıyla bir HTTP API oluşturun. Sertifikayı kullanmak için özel etki alanını yapılandırın.

B. AWS Sertifika Yöneticisi'nde (ACM) üçüncü taraf CA tarafından imzalanan bir sertifika oluşturun. Amazon API Gateway'de özel bir etki alanıyla bir HTTP API oluşturun. Sertifikayı kullanmak için özel etki alanını yapılandırın.

C. Üçüncü taraf CA tarafından imzalanan bir sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın. Lambda işlevi URL'si ile bir AWS Lambda işlevi oluşturun. Sertifikayı kullanmak için Lambda işlevi URL'sini yapılandırın.

D. AWS Sertifika Yöneticisi'nde (ACM) üçüncü taraf CA tarafından imzalanan bir sertifika oluşturun. Lambda işlevi URL'si ile bir AWS Lambda işlevi oluşturun. Sertifikayı kullanmak için Lambda işlevi URL'sini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Üçüncü taraf tarafından imzalanan bir sertifika oluşturmak için yerel bir makine kullanın. Sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın. Amazon API Gateway'de özel bir etki alanıyla bir HTTP API oluşturun. Sertifikayı kullanmak için özel etki alanını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #572

Bir şirket AWS'de bir uygulama çalıştırıyor. Uygulama tutarsız miktarlarda kullanım alıyor. Uygulama, şirket içi MySQL uyumlu bir veritabanına bağlanmak için AWS Direct Connect'i kullanır. Şirket içi veritabanı sürekli olarak en az 2 GiB bellek kullanır. Şirket, şirket içi veritabanını yönetilen bir AWS hizmetine taşımak istiyor. Şirket, beklenmedik iş yükü artışlarını yönetmek için otomatik ölçeklendirme özelliklerini kullanmak istiyor. Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Varsayılan okuma ve yazma kapasitesi ayarlarıyla bir Amazon DynamoDB veritabanı sağlayın.

B. Minimum 1 Aurora kapasite birimi (ACU) kapasiteli bir Amazon Aurora veritabanı sağlayın.

C. Minimum 1 Aurora kapasite birimi (ACU) kapasiteli bir Amazon Aurora Serverless v2 veritabanı sağlayın.

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

Soru #573

Bir şirket, AWS Lambda ile olay odaklı programlama modeli kullanmak istiyor. Şirket, Java 11'de çalışan Lambda işlevleri için başlatma gecikmesini azaltmak istiyor. Şirketin uygulamalar için katı gecikme gereksinimleri yok. Şirket, bir işlevin ölçeği büyüdüğünde soğuk başlatmaları ve aykırı gecikmeleri azaltmak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

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

Soru #574

Bir finansal hizmetler şirketi, Amazon RDS for MySQL veritabanını kullanan yeni bir uygulamayı başlattı. Şirket, uygulamayı borsa trendlerini takip etmek için kullanıyor. Şirketin uygulamayı her hafta sonunda sadece 2 saat çalıştırması gerekiyor. Şirketin veritabanını çalıştırma maliyetini optimize etmesi gerekiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Mevcut RDS for MySQL veritabanını Aurora Serverless v2 MySQL veritabanı kümesine taşıyın.

B. Mevcut RDS for MySQL veritabanını bir Aurora MySQL veritabanı kümesine taşıyın.

C. Mevcut RDS for MySQL veritabanını MySQL çalıştıran bir Amazon EC2 bulut sunucusuna taşıyın. EC2 bulut sunucusu için bir bulut sunucusu rezervasyonu satın alın.

D. Mevcut RDS for MySQL veritabanını, görevleri çalıştırmak için MySQL konteyner görüntülerini kullanan bir Amazon Elastic Container Service (Amazon ECS) kümesine taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mevcut RDS for MySQL veritabanını Aurora Serverless v2 MySQL veritabanı kümesine taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #575

Bir şirket, uygulamalarını bir AWS Bölgesindeki Application Load Balancer'ın arkasında Amazon Elastic Kubernetes Service (Amazon EKS) üzerinde dağıtıyor. Uygulamanın verileri PostgreSQL veritabanı motorunda depolaması gerekiyor. Şirket, veritabanındaki verilerin yüksek oranda kullanılabilir olmasını istiyor. Şirketin ayrıca okuma iş yükleri için daha fazla kapasiteye ihtiyacı var. Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

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

Soru #576

Bir şirket, Amazon API Gateway ve AWS Lambda'yı kullanarak AWS üzerinde RESTful sunucusuz bir web uygulaması geliştiriyor. Bu web uygulamasının kullanıcıları coğrafi olarak dağıtılacak ve şirket, bu kullanıcılara yönelik API isteklerinin gecikmesini azaltmak istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi uç nokta türünü kullanmalıdır?

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

Soru #577

Bir şirket, web sitesinin içerik sayfalarını sunmak için Amazon CloudFront dağıtımını kullanıyor. Şirketin, müşterilerin şirketin web sitesine erişirken TLS sertifikası kullandığından emin olması gerekiyor. Şirket, TLS sertifikalarının oluşturulmasını ve yenilenmesini otomatikleştirmek istiyor. Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Sertifika oluşturmak için CloudFront güvenlik politikasını kullanın.

B. Sertifika oluşturmak için CloudFront kaynak erişim kontrolünü (OAC) kullanın.

C. Sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Etki alanı için DNS doğrulamasını kullanın.

D. Sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Alan adı için e-posta doğrulamasını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Etki alanı için DNS doğrulamasını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #578

Bir şirket, veritabanı katmanı olarak Amazon DynamoDB'yi kullanan sunucusuz bir uygulama dağıttı. Uygulamanın kullanıcı sayısında büyük bir artış yaşandı. Şirket, veritabanı yanıt süresini milisaniyeden mikrosaniyeye çıkarmak ve veritabanına yönelik istekleri önbelleğe almak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

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

Soru #579

Bir şirket, PostgreSQL için Amazon RDS'yi kullanan bir uygulamayı çalıştırıyor. Uygulama sadece hafta içi mesai saatleri içerisinde trafik almaktadır. Şirket, bu kullanıma bağlı olarak maliyetleri optimize etmek ve operasyonel ek yükü azaltmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Başlatma ve durdurma programlarını yapılandırmak için AWS'deki Örnek Zamanlayıcıyı kullanın.

B. Otomatik yedeklemeleri kapatın. Veritabanının haftalık manuel anlık görüntülerini oluşturun.

C. Veritabanını minimum CPU kullanımına göre başlatmak ve durdurmak için özel bir AWS Lambda işlevi oluşturun.

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

Soru #580

Bir şirket, gecikmeye duyarlı bir uygulamayı şirket içinde çalıştırmak için yerel olarak bağlı depolamayı kullanıyor. Şirket, uygulamayı AWS Cloud'a taşımak için kaldır ve kaydır yöntemini kullanıyor. Şirket uygulama mimarisini değiştirmek istemiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon EC2 bulut sunucusuyla Otomatik Ölçeklendirme grubunu yapılandırın. Uygulamayı çalıştırmak için Amazon FSx for Lustre dosya sistemini kullanın.

B. Uygulamayı bir Amazon EC2 bulut sunucusunda barındırın. Uygulamayı çalıştırmak için bir Amazon Elastic Block Store (Amazon EBS) GP2 birimi kullanın.

C. Amazon EC2 bulut sunucusuyla Otomatik Ölçeklendirme grubunu yapılandırın. Uygulamayı çalıştırmak için Amazon FSx for OpenZFS dosya sistemini kullanın.

D. Uygulamayı bir Amazon EC2 bulut sunucusunda barındırın. Uygulamayı çalıştırmak için bir Amazon Elastic Block Store (Amazon EBS) GP3 birimi kullanın.

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

Soru #581

Bir şirket, Amazon EC2 bulut sunucularında durum bilgisi olan bir üretim uygulaması çalıştırıyor. Uygulama en az iki EC2 bulut sunucusunun her zaman çalışmasını gerektirir. Bir çözüm mimarının, uygulama için yüksek düzeyde kullanılabilir ve hataya dayanıklı bir mimari tasarlaması gerekir. Çözüm mimarı, EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu oluşturur. Çözüm mimarının bu gereksinimleri karşılamak için hangi ek adımları atması gerekir?

A. Otomatik Ölçeklendirme grubunun minimum kapasitesini ikiye ayarlayın. Bir Erişilebilirlik Alanında bir İsteğe Bağlı Bulut Sunucusunu ve ikinci bir Erişilebilirlik Alanında bir İsteğe Bağlı Bulut Sunucusunu dağıtın.

B. Otomatik Ölçeklendirme grubunun minimum kapasitesini dörde ayarlayın. Bir Erişilebilirlik Alanında iki İsteğe Bağlı Bulut Sunucusunu ve ikinci bir Erişilebilirlik Alanında iki İsteğe Bağlı Bulut Sunucusunu dağıtın.

C. Otomatik Ölçeklendirme grubunun minimum kapasitesini ikiye ayarlayın. Tek bir Erişilebilirlik Alanında dört Spot Bulut Sunucusu dağıtın.

D. Otomatik Ölçeklendirme grubunun minimum kapasitesini dörde ayarlayın. Bir Erişilebilirlik Alanında iki İsteğe Bağlı Bulut Sunucusunu ve ikinci bir Erişilebilirlik Alanında iki Spot Bulut Sunucusunu devreye alın.

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

Soru #582

Bir e-ticaret şirketi, DNS sağlayıcısı olarak Amazon Route 53'ü kullanıyor. Şirket, web sitesini tesislerinde ve AWS Cloud'da barındırıyor. Şirketin şirket içi veri merkezi us-west-1 Bölgesi'nin yakınındadır. Şirket, web sitesini barındırmak için eu-central-1 Bölgesini kullanıyor. Şirket, web sitesinin yükleme süresini mümkün olduğunca en aza indirmek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir coğrafi konum yönlendirme politikası oluşturun. Us-west-1 yakınındaki trafiği şirket içi veri merkezine gönderin. Eu-central-1 yakınındaki trafiği eu-central-1'e gönderin.

B. eu-central-1 yakınındaki tüm trafiği eu-central-1'e ve şirket içi veri merkezi yakınındaki tüm trafiği şirket içi veri merkezine yönlendiren basit bir yönlendirme ilkesi oluşturun.

C. Gecikme yönlendirme politikası oluşturun. Politikayı us-west-1 ile ilişkilendirin.

D. Ağırlıklı bir yönlendirme politikası oluşturun. Trafiği eu-central-1 ile şirket içi veri merkezi arasında eşit şekilde bölün.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir coğrafi konum yönlendirme politikası ayarlayın. Us-west-1 yakınındaki trafiği şirket içi veri merkezine gönderin. eu-central-1 yakınındaki trafiği eu-central-1'e gönderin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #583

Bir şirketin fiziksel bantlarda 5 PB arşivlenmiş verisi var. Şirketin uyumluluk amacıyla bantlardaki verileri 10 yıl daha saklaması gerekiyor. Şirket önümüzdeki 6 ay içinde AWS'ye geçmek istiyor. Bantları saklayan veri merkezi 1 Gbps uplink internet bağlantısına sahiptir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Tesislerdeki bantlardaki verileri okuyun. Verileri yerel bir NFS depolama alanına yerleştirin. Verileri Amazon S3 Glacier Esnek Alma'ya taşımak için AWS DataSync'i kullanın.

B. Verileri bantlardan okumak ve doğrudan Amazon S3 Glacier Deep Archive'a yazmak için şirket içi bir yedekleme uygulaması kullanın.

C. Teyp Ağ Geçidine sahip birden fazla AWS Snowball cihazı sipariş edin. Fiziksel bantları Snowball'daki sanal bantlara kopyalayın. Snowball cihazlarını AWS'ye gönderin. Bantları Amazon S3 Glacier Deep Archive'a taşımak için bir yaşam döngüsü ilkesi oluşturun.

D. Şirket içi bir Bant Ağ Geçidini yapılandırın. AWS Cloud'da sanal bantlar oluşturun. Fiziksel bandı sanal banda kopyalamak için yedekleme yazılımını kullanın.

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

Soru #584

Bir şirket, büyük miktarda veriyi paralel olarak işleyen bir uygulamayı devreye alıyor. Şirket, iş yükü için Amazon EC2 bulut sunucularını kullanmayı planlıyor. Ağ mimarisi, düğüm gruplarının aynı temel donanımı paylaşmasını önleyecek şekilde yapılandırılabilir olmalıdır. Hangi ağ çözümü bu gereksinimleri karşılıyor?

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

Soru #585

Bir çözüm mimarı, yük devretme AWS Bölgesinde Amazon EC2 kapasitesi sağlamak için bir olağanüstü durum kurtarma (DR) stratejisi tasarlıyor. İş gereksinimleri, DR stratejisinin yük devretme Bölgesindeki kapasiteyi karşılaması gerektiğini belirtir. Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru #586

Bir şirketin, AWS Organizasyonlarındaki organizasyonunun bir parçası olarak beş organizasyonel birimi (OU) vardır. Her bir kuruluş birimi, şirketin sahip olduğu beş işletmeyle ilişkilidir. Şirketin araştırma ve geliştirme (Ar-Ge) işi şirketten ayrılıyor ve kendi organizasyonuna ihtiyaç duyacak. Çözüm mimarı bu amaç için ayrı bir yeni yönetim hesabı oluşturur. Çözüm mimarı yeni yönetim hesabında bundan sonra ne yapmalıdır?

A. Geçiş sırasında Ar-Ge AWS hesabının her iki kuruluşun da parçası olmasını sağlayın.

B. Ar-Ge AWS hesabı önceki kuruluştan ayrıldıktan sonra, Ar-Ge AWS hesabını yeni kuruluşun parçası olmaya davet edin.

C. Yeni kuruluşta yeni bir Ar-Ge AWS hesabı oluşturun. Kaynakları önceki Ar-Ge AWS hesabından yeni Ar-Ge AWS hesabına taşıyın.

D. Ar-Ge AWS hesabının yeni kuruluşa katılmasını sağlayın. Yeni yönetim hesabını önceki kuruluşun üyesi yapın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ar-Ge AWS hesabı önceki kuruluştan ayrıldıktan sonra Ar-Ge AWS hesabını yeni kuruluşun parçası olmaya davet edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #587

Bir şirket, analitiği işlemek ve tahminlerde bulunmak amacıyla farklı web uygulamalarındaki müşteri etkinliğini yakalamak için bir çözüm tasarlıyor. Web uygulamalarındaki müşteri etkinliği öngörülemez ve aniden artabilir. Şirketin diğer web uygulamalarıyla entegre olabilen bir çözüme ihtiyacı var. Çözüm, güvenlik amacıyla bir yetkilendirme adımı içermelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin Amazon Elastic File System (Amazon EFS) dosya sisteminde aldığı bilgileri depolayan bir Amazon Elastic Container Service (Amazon ECS) konteyner örneğinin önünde bir Gateway Load Balancer (GWLB) yapılandırın. Yetkilendirme GWLB'de çözülür.

B. Şirketin bir Amazon S3 klasöründe aldığı bilgileri depolayan bir Amazon Kinesis veri akışının önünde bir Amazon API Ağ Geçidi uç noktası yapılandırın. Yetkilendirmeyi çözümlemek için bir AWS Lambda işlevini kullanın.

C. Şirketin aldığı bilgileri bir Amazon S3 klasöründe saklayan bir Amazon Kinesis Data Firehose'un önünde bir Amazon API Gateway uç noktası yapılandırın. Yetkilendirmeyi çözümlemek için bir API Ağ Geçidi Lambda yetkilendiricisi kullanın.

D. Şirketin Amazon Elastic File System (Amazon EFS) dosya sisteminde aldığı bilgileri depolayan bir Amazon Elastic Container Service (Amazon ECS) konteyner örneğinin önünde bir Gateway Load Balancer (GWLB) yapılandırın. Yetkilendirmeyi çözümlemek için bir AWS Lambda işlevini kullanın.

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

Soru #588

Bir e-ticaret şirketi, Microsoft SQL Server Enterprise Edition'ı çalıştıran Amazon RDS DB bulut sunucuları için olağanüstü durum kurtarma çözümü istiyor. Şirketin mevcut kurtarma noktası hedefi (RPO) ve kurtarma süresi hedefi (RTO) 24 saattir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

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

Soru #589

Bir şirket, yapışkan oturumların etkin olduğu bir Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor. Web sunucusu şu anda kullanıcı oturum durumunu barındırmaktadır. Şirket, yüksek düzeyde kullanılabilirlik sağlamak ve bir web sunucusu kesintisi durumunda kullanıcı oturum durumu kaybını önlemek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Oturum verilerini depolamak için bir Amazon ElastiCache for Memcached örneğini kullanın. Oturum durumunu depolamak amacıyla Memcached için ElastiCache'i kullanacak şekilde uygulamayı güncelleyin.

B. Oturum durumunu depolamak için Amazon ElastiCache for Redis'i kullanın. Oturum durumunu depolamak amacıyla Redis için ElastiCache'i kullanacak şekilde uygulamayı güncelleyin.

C. Oturum verilerini depolamak için AWS Storage Gateway önbelleğe alınmış birimi kullanın. Oturum durumunu depolamak için AWS Storage Gateway önbelleğe alınmış birimi kullanacak şekilde uygulamayı güncelleyin.

D. Oturum durumunu depolamak için Amazon RDS'yi kullanın. Oturum durumunu depolamak için Amazon RDS'yi kullanacak şekilde uygulamayı güncelleyin.

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

Soru #590

Bir şirket, MySQL veritabanını şirketin şirket içi veri merkezinden Amazon RDS for MySQL DB bulut sunucusuna taşıdı. Şirket, RDS Veritabanı bulut sunucusunu şirketin ortalama günlük iş yükünü karşılayacak şekilde boyutlandırdı. Ayda bir kez, şirket bir rapor için sorgu çalıştırdığında veritabanı yavaş çalışıyor. Şirket, raporları çalıştırma ve günlük iş yüklerinin performansını sürdürme becerisine sahip olmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanının okuma kopyasını oluşturun. Sorguları okuma kopyasına yönlendirin.

B. Veritabanının bir yedeğini oluşturun. Yedeği başka bir veritabanı bulut sunucusuna geri yükleyin. Sorguları yeni veritabanına yönlendirin.

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

Soru #591

Bir şirket, Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanarak bir konteyner uygulaması çalıştırıyor. Uygulama, müşterileri yöneten ve sipariş veren mikro hizmetleri içerir. Şirketin gelen talepleri uygun mikro hizmetlere yönlendirmesi gerekiyor. Hangi çözüm bu gereksinimi EN uygun maliyetle karşılayacaktır?

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

Soru #592

Bir şirket AWS kullanıyor ve telif hakkıyla korunan görsellere erişim satıyor. Şirketin küresel müşteri tabanının bu görüntülere hızlı bir şekilde erişebilmesi gerekiyor. Şirketin belirli ülkelerdeki kullanıcılara erişimi reddetmesi gerekir. Şirket maliyetleri mümkün olduğu kadar en aza indirmek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Görüntüleri depolamak için Amazon S3'ü kullanın. Çok faktörlü kimlik doğrulamayı (MFA) ve genel paket erişimini açın. Müşterilere S3 paketine bir bağlantı sağlayın.

B. Görüntüleri depolamak için Amazon S3'ü kullanın. Her müşteri için bir IAM kullanıcısı oluşturun. Kullanıcıları S3 klasörüne erişim izni olan bir gruba ekleyin.

C. Görüntüleri depolamak için Application Load Balancer'ların (ALB'ler) arkasında bulunan Amazon EC2 bulut sunucularını kullanın. Bulut sunucularını yalnızca şirketin hizmet verdiği ülkelerde dağıtın. Müşterilere, kendi ülkelerindeki örnekler için ALB'lere bağlantılar sağlayın.

D. Görüntüleri depolamak için Amazon S3'ü kullanın. Görüntüleri coğrafi kısıtlamalarla dağıtmak için Amazon CloudFront'u kullanın. Her müşterinin CloudFront'taki verilere erişmesi için imzalı bir URL sağlayın.

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

Soru #593

Bir çözüm mimarı, Redis için yüksek düzeyde kullanılabilir bir Amazon ElastiCache tabanlı çözüm tasarlıyor. Çözüm mimarının, arızaların yerel olarak ve bir AWS Bölgesi içinde performansın düşmesine veya veri kaybına yol açmamasını sağlaması gerekir. Çözümün düğüm düzeyinde ve Bölge düzeyinde yüksek kullanılabilirlik sağlaması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru #594

Bir şirket AWS'ye geçmeyi ve uygulaması için Amazon EC2 İsteğe Bağlı Bulut Sunucularını kullanmayı planlıyor. Geçiş testi aşamasında teknik bir ekip, uygulamanın başlatılmasının ve belleğin tamamen üretken hale gelmesi için yüklenmesinin uzun zaman aldığını gözlemliyor. Hangi çözüm bir sonraki test aşamasında uygulamanın başlama süresini kısaltacaktır?

A. İki veya daha fazla EC2 İsteğe Bağlı Bulut Sunucusunu başlatın. Otomatik ölçeklendirme özelliklerini açın ve EC2 İsteğe Bağlı Bulut Sunucularını bir sonraki test aşamasında kullanılabilir hale getirin.

B. Uygulamayı desteklemek ve uygulamayı bir sonraki test aşamasında kullanılabilir olacak şekilde ölçeklendirmek için EC2 Spot Bulut Sunucularını başlatın.

C. Hazırda bekletme modu açıkken EC2 İsteğe Bağlı Bulut Sunucularını başlatın. Bir sonraki test aşamasında EC2 Otomatik Ölçeklendirme ılık havuzlarını yapılandırın.

D. Kapasite Rezervasyonlarıyla EC2 İsteğe Bağlı Bulut Sunucularını Başlatın. Bir sonraki test aşamasında ek EC2 bulut sunucularını başlatın.

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

Soru #595

Bir şirketin uygulamaları Otomatik Ölçeklendirme gruplarındaki Amazon EC2 bulut sunucularında çalışır. Şirket, uygulamalarında haftanın rastgele günlerinde ani trafik artışları yaşandığını fark ediyor. Şirket, ani trafik artışları sırasında uygulama performansını korumak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

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

Soru #596

Bir e-ticaret uygulaması, Amazon EC2 örneğinde çalışan bir PostgreSQL veritabanını kullanır. Aylık satış etkinliği sırasında veritabanı kullanımı artar ve uygulama için veritabanı bağlantısı sorunlarına neden olur. Sonraki aylık satış etkinlikleri için trafik tahmin edilemez ve bu da satış tahminini etkiler. Trafikte öngörülemeyen bir artış olduğunda şirketin performansını sürdürmesi gerekiyor. Hangi çözüm bu sorunu EN uygun maliyetli şekilde çözer?

A. PostgreSQL veritabanını Amazon Aurora Serverless v2'ye taşıyın.

B. Artan kullanıma uyum sağlamak amacıyla EC2 örneğindeki PostgreSQL veritabanı için otomatik ölçeklendirmeyi etkinleştirin.

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

Soru #597

Bir şirket, Amazon API Gateway ve AWS Lambda'yı kullanarak AWS'de dahili sunucusuz bir uygulamayı barındırıyor. Şirketin çalışanları her gün uygulamayı kullanmaya başladıklarında yüksek gecikmeli sorunlar bildiriyor. Şirket gecikmeyi azaltmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. API Ağ Geçidi azaltma sınırını artırın.

B. Çalışanlar uygulamayı her gün kullanmaya başlamadan önce Lambda tarafından sağlanan eşzamanlılığı artırmak için planlanmış bir ölçeklendirme ayarlayın.

C. Her günün başında alarmın hedefi olarak Lambda işlevini başlatmak için bir Amazon CloudWatch alarmı oluşturun.

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

Soru #598

Bir araştırma şirketi, analiz için veri oluşturmak amacıyla şirket içi cihazları kullanıyor. Şirket, verileri analiz etmek için AWS Cloud'u kullanmak istiyor. Cihazlar .csv dosyaları oluşturur ve verilerin bir SMB dosya paylaşımına yazılmasını destekler. Şirket analistlerinin verileri sorgulamak için SQL komutlarını kullanabilmesi gerekir. Analistler gün boyunca periyodik olarak sorgular yürütecek. Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (Üç tanesini seçin.)

A. Amazon S3 Dosya Ağ Geçidi modunda şirket içinde bir AWS Storage Gateway dağıtın.

B. Amazon FSx File Gateway'de şirket içinde bir AWS Storage Gateway dağıtın.

C. Amazon S3'teki verilere dayalı bir tablo oluşturmak için bir AWS Glue tarayıcısı kurun.

D. Amazon S3'teki verileri sorgulamak için EMR Dosya Sistemi (EMRFS) ile bir Amazon EMR kümesi kurun. Analistlere erişim sağlayın.

E. Amazon S3'teki verileri sorgulamak için bir Amazon Redshift kümesi kurun. Analistlere erişim sağlayın. F. Amazon S3'teki verileri sorgulamak için Amazon Athena'yı kurun. Analistlere erişim sağlayın.

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

Soru #599

Bir şirket, bir ödeme işleme uygulaması oluşturmak ve çalıştırmak için Amazon Elastic Container Service (Amazon ECS) kümelerini ve Amazon RDS DB bulut sunucularını kullanmak istiyor. Şirket, uyumluluk amacıyla uygulamayı şirket içi veri merkezinde çalıştıracak. Bir çözüm mimarı, çözümün bir parçası olarak AWS Outposts'u kullanmak istiyor. Çözüm mimarı, uygulamayı oluşturmak için şirketin operasyonel ekibiyle birlikte çalışıyor. Şirketin operasyonel ekibi hangi faaliyetlerden sorumludur? (Üç tanesini seçin.)

A. Outposts raflarına esnek güç ve ağ bağlantısı sağlama

B. Sanallaştırma hipervizörünü, depolama sistemlerini ve Outposts'ta çalışan AWS hizmetlerini yönetme

C. Veri merkezi ortamının fiziksel güvenliği ve erişim kontrolleri

D. Outposts raflarındaki güç kaynakları, sunucular ve ağ ekipmanı dahil olmak üzere Outposts altyapısının kullanılabilirliği

E. Outposts bileşenlerinin fiziksel bakımı F. Sunucu arızalarını ve bakım olaylarını azaltmak amacıyla Amazon ECS kümelerine ekstra kapasite sağlanması

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C,`
> - **Önerilen Çözüm:** Outposts raflarına esnek güç ve ağ bağlantısı sağlanması Veri merkezi ortamının fiziksel güvenliği ve erişim kontrolleri Sunucu arızalarını ve bakım olaylarını azaltmak için Amazon ECS kümelerine ekstra kapasite sağlanması
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #600

Bir şirket, TCP tabanlı bir uygulamayı şirketin VPC'sine taşımayı planlıyor. Uygulamaya, şirketin veri merkezindeki bir donanım cihazı aracılığıyla standart olmayan bir TCP bağlantı noktasından herkesin erişimine açıktır. Bu genel uç nokta, düşük gecikmeyle saniyede 3 milyona kadar isteği işleyebilir. Şirket, AWS'deki yeni genel uç nokta için aynı düzeyde performansa ihtiyaç duyuyor. Bir çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

A. Ağ Yük Dengeleyicisini (NLB) dağıtın. NLB'yi, uygulamanın gerektirdiği TCP bağlantı noktası üzerinden genel olarak erişilebilecek şekilde yapılandırın.

B. Bir Uygulama Yük Dengeleyicisini (ALB) dağıtın. ALB'yi, uygulamanın gerektirdiği TCP bağlantı noktası üzerinden genel olarak erişilebilecek şekilde yapılandırın.

C. Uygulamanın gerektirdiği TCP bağlantı noktasını dinleyen bir Amazon CloudFront dağıtımı dağıtın. Kaynak olarak bir Application Load Balancer kullanın.

D. Uygulamanın gerektirdiği TCP bağlantı noktasıyla yapılandırılmış bir Amazon API Gateway API'sini dağıtın. İstekleri işlemek için AWS Lambda işlevlerini sağlanan eş zamanlılıkla yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Ağ Yük Dengeleyicisi (NLB) dağıtın. NLB'yi, uygulamanın gerektirdiği TCP bağlantı noktası üzerinden genel olarak erişilebilecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
