# AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları - Bölüm 01

> **Soru Aralığı:** 1 - 100 / Toplam: 684

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #1

Bir şirket, birden fazla kıtadaki şehirlerdeki sıcaklık, nem ve atmosfer basıncına ilişkin verileri topluyor. Şirketin her siteden günlük olarak topladığı veri hacmi ortalama 500 GB'tır. Her sitenin yüksek hızlı internet bağlantısı vardır. Şirket, tüm bu küresel sitelerden gelen verileri mümkün olduğunca hızlı bir şekilde tek bir Amazon S3 klasöründe toplamak istiyor. Çözüm operasyonel karmaşıklığı en aza indirmelidir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Hedef S3 klasöründe S3 Aktarım Hızlandırmasını açın. Site verilerini doğrudan hedef S3 klasörüne yüklemek için çok parçalı yüklemeleri kullanın.

B. Her sitedeki verileri en yakın Bölgedeki bir S3 klasörüne yükleyin. Nesneleri hedef S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı kullanın. Ardından verileri Origin S3 paketinden kaldırın.

C. Her siteden en yakın Bölgeye veri aktarmak için AWS Snowball Edge Storage Optimize Edilmiş cihaz işlerini günlük olarak planlayın. Nesneleri hedef S3 klasörüne kopyalamak için S3 Bölgeler Arası Çoğaltma'yı kullanın.

D. Her sitedeki verileri en yakın Bölgedeki Amazon EC2 bulut sunucusuna yükleyin. Verileri bir Amazon Elastic Block Store (Amazon EBS) biriminde depolayın. Düzenli aralıklarla bir EBS anlık görüntüsü alın ve bunu hedef S3 paketini içeren Bölgeye kopyalayın. O Bölgedeki EBS birimini geri yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Hedef S3 klasöründe S3 Transfer Acceleration'ı açın. Site verilerini doğrudan hedef S3 klasörüne yüklemek için çok parçalı yüklemeleri kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **S3 Multipart Upload (Çok Parçalı Yükleme):** Büyük dosya yüklemelerini paralel parçalara ayırarak gerçekleştirir. 100 MB üzerindeki nesneler için önerilir, 5 GB üzerindeki nesneler için zorunludur. Ağ kesintilerinde yalnızca başarısız olan parçanın tekrar yüklenmesini sağlar.

---

---

Soru #2

Bir şirketin kendi tescilli uygulamasının günlük dosyalarını analiz edebilme becerisine ihtiyacı vardır. Günlükler bir Amazon S3 klasöründe JSON biçiminde depolanır. Sorgular basit olacak ve isteğe bağlı olarak çalışacaktır. Bir çözüm mimarının, analizi mevcut mimaride minimum değişiklik yaparak gerçekleştirmesi gerekir. Çözüm mimarı bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılamak için ne yapmalıdır?

C. Tüm içeriği tek bir yere yüklemek ve gerektiğinde SQL sorgularını çalıştırmak için Amazon Redshift'i kullanın.

B. Günlükleri depolamak için Amazon CloudWatch Logs'u kullanın. Gerektiğinde Amazon CloudWatch konsolundan SQL sorguları çalıştırın.

C. Sorguları gerektiği gibi çalıştırmak için Amazon Athena'yı doğrudan Amazon S3 ile kullanın.

D. Günlükleri kataloglamak için AWS Glue'yu kullanın. Gerektiğinde SQL sorgularını çalıştırmak için Amazon EMR'de geçici bir Apache Spark kümesi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Sorguları gerektiği gibi çalıştırmak için Amazon Athena'yı doğrudan Amazon S3 ile kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #3

Bir şirket, farklı departmanlara ait birden fazla AWS hesabını yönetmek için AWS Organizasyonlarını kullanıyor. Yönetim hesabında proje raporlarını içeren bir Amazon S3 klasörü bulunur. Şirket, bu S3 klasörüne erişimi yalnızca AWS Organizasyonlarındaki kuruluş içindeki hesapların kullanıcılarıyla sınırlamak istiyor. Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılıyor?

A. awsPrincipalOrgID genel koşul anahtarını, kuruluş kimliğine referansla birlikte S3 paket politikasına ekleyin.

B. Her departman için bir organizasyon birimi (OU) oluşturun. aws:PrincipalOrgPaths genel koşul anahtarını S3 paket politikasına ekleyin.

C. CreateAccount, InviteAccountToOrganization, LeaveOrganization ve RemoveAccountFromOrganization olaylarını izlemek için AWS CloudTrail'i kullanın. S3 paket politikasını buna göre güncelleyin.

D. S3 klasörüne erişmesi gereken her kullanıcıyı etiketleyin. aws:PrincipalTag genel koşul anahtarını S3 paket politikasına ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** awsPrincipalOrgID genel koşul anahtarını, kuruluş kimliğine referansla birlikte S3 paket politikasına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #4

Bir uygulama, VPC'deki bir Amazon EC2 örneğinde çalışır. Uygulama, bir Amazon S3 klasöründe depolanan günlükleri işler. EC2 bulut sunucusunun internet bağlantısı olmadan S3 klasörüne erişmesi gerekiyor. Hangi çözüm Amazon S3'e özel ağ bağlantısı sağlayacak?

A. S3 klasörüne bir ağ geçidi VPC uç noktası oluşturun.

B. Günlükleri Amazon CloudWatch Logs'a aktarın. Günlükleri S3 klasörüne aktarın.

C. S3 erişimine izin vermek için Amazon EC2'de bir bulut sunucusu profili oluşturun.

D. S3 uç noktasına erişmek için özel bağlantıya sahip bir Amazon API Gateway API oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 paketine bir ağ geçidi VPC uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #5

Bir şirket, kullanıcı tarafından yüklenen belgeleri bir Amazon EBS biriminde depolayan tek bir Amazon EC2 örneğini kullanarak AWS'de bir web uygulaması barındırıyor. Şirket, daha iyi ölçeklenebilirlik ve kullanılabilirlik için mimariyi kopyaladı ve başka bir Erişilebilirlik Alanında ikinci bir EC2 bulut sunucusu ve EBS birimi oluşturarak her ikisini de bir Application Load Balancer'ın arkasına yerleştirdi. Bu değişikliği tamamladıktan sonra kullanıcılar, web sitesini her yenilediklerinde belgelerinin bir alt kümesini veya diğerini görebildiklerini, ancak belgelerin tümünü aynı anda göremediklerini bildirdi. Kullanıcıların tüm belgelerini aynı anda görmesini sağlamak için bir çözüm mimarı ne önermelidir?

A. Her iki EBS cildinin de tüm belgeleri içermesi için verileri kopyalayın

B. Kullanıcıyı belgelerle birlikte sunucuya yönlendirmek için Application Load Balancer'ı yapılandırın

C. Her iki EBS birimindeki verileri Amazon EFS'ye kopyalayın. Yeni belgeleri Amazon EFS'ye kaydetmek için uygulamayı değiştirin

D. İsteği her iki sunucuya da göndermek için Application Load Balancer'ı yapılandırın. Her belgeyi doğru sunucudan döndürün

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her iki EBS birimindeki verileri Amazon EFS'ye kopyalayın. Yeni belgeleri Amazon EFS'ye kaydetmek için uygulamayı değiştirin
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #6

Bir şirket, büyük video dosyalarını şirket içi ağa bağlı depolama alanında depolamak için NFS'yi kullanıyor. Her video dosyasının boyutu 1 MB ile 500 GB arasında değişmektedir. Toplam depolama alanı 70 TB'dir ve artık artmamaktadır. Şirket, video dosyalarını Amazon S3'e taşımaya karar verir. Şirketin mümkün olan en az ağ bant genişliğini kullanarak video dosyalarını mümkün olan en kısa sürede taşıması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir S3 klasörü oluşturun. S3 paketine yazma izinlerine sahip bir IAM rolü oluşturun. Tüm dosyaları yerel olarak S3 klasörüne kopyalamak için AWS CLI'yi kullanın.

B. Bir AWS Snowball Edge işi oluşturun. Tesisinizde bir Snowball Edge cihazı alın. Verileri cihaza aktarmak için Snowball Edge istemcisini kullanın. AWS'nin verileri Amazon S3'e aktarabilmesi için cihazı iade edin.

C. Şirket içinde bir S3 Dosya Ağ Geçidini dağıtın. S3 Dosya Ağ Geçidine bağlanmak için bir kamu hizmeti uç noktası oluşturun. Bir S3 paketi oluşturun. S3 Dosya Ağ Geçidinde yeni bir NFS dosya paylaşımı oluşturun. Yeni dosya paylaşımını S3 klasörüne yönlendirin. Verileri mevcut NFS dosya paylaşımından S3 Dosya Ağ Geçidine aktarın.

D. Şirket içi ağ ile AWS arasında bir AWS Direct Connect bağlantısı kurun. Şirket içinde bir S3 Dosya Ağ Geçidi dağıtın. S3 Dosya Ağ Geçidine bağlanmak için genel bir sanal arayüz (VIF) oluşturun. Bir S3 paketi oluşturun. S3 Dosya Ağ Geçidinde yeni bir NFS dosya paylaşımı oluşturun. Yeni dosya paylaşımını S3 klasörüne yönlendirin. Verileri mevcut NFS dosya paylaşımından S3 Dosya Ağ Geçidine aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir AWS Snowball Edge işi oluşturun. Tesisinizde bir Snowball Edge cihazı alın. Verileri cihaza aktarmak için Snowball Edge istemcisini kullanın. AWS'nin verileri Amazon S3'e aktarabilmesi için cihazı iade edin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #7

Bir şirketin gelen mesajları alan bir uygulaması var. Daha sonra düzinelerce başka uygulama ve mikro hizmet bu mesajları hızla tüketir. Mesaj sayısı büyük ölçüde değişiklik gösteriyor ve bazen saniyede aniden 100.000'e çıkıyor. Şirket, çözümü ayrıştırmak ve ölçeklenebilirliği artırmak istiyor. Hangi çözüm bu gereksinimleri karşılıyor?

A. Mesajları Amazon Kinesis Data Analytics'e iletin. Mesajları okumak ve işlemek için tüketici uygulamalarını yapılandırın.

B. EC2 bulut sunucularının sayısını CPU ölçümlerine göre ölçeklendirmek için alım uygulamasını bir Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularına dağıtın.

C. Mesajları tek bir parçayla Amazon Kinesis Data Streams'e yazın. Mesajları önceden işlemek ve bunları Amazon DynamoDB'de depolamak için bir AWS Lambda işlevini kullanın. Mesajları işlemek için tüketici uygulamalarını DynamoDB'den okuyacak şekilde yapılandırın.

D. Mesajları birden fazla Amazon Simple Queue Service (Amazon SOS) aboneliğiyle bir Amazon Simple Notification Service (Amazon SNS) konusuna yayınlayın. Kuyruklardan gelen mesajları işlemek için tüketici uygulamalarını yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mesajları birden fazla Amazon Simple Queue Service (Amazon SOS) aboneliğiyle bir Amazon Simple Notification Service (Amazon SNS) konusuna yayınlayın. Kuyruklardan gelen mesajları işlemek için tüketici uygulamalarını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #8

Bir şirket, dağıtılmış bir uygulamayı AWS'ye taşıyor. Uygulama değişken iş yüklerine hizmet eder. Eski platform, işleri birden fazla bilgi işlem düğümünde koordine eden bir birincil sunucudan oluşur. Şirket, dayanıklılığı ve ölçeklenebilirliği en üst düzeye çıkaran bir çözümle uygulamayı modernleştirmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılayacak mimariyi nasıl tasarlamalıdır?

A. İşlerin hedefi olarak bir Amazon Simple Queue Service (Amazon SQS) kuyruğu yapılandırın. İşlem düğümlerini, Otomatik Ölçeklendirme grubunda yönetilen Amazon EC2 bulut sunucularıyla uygulayın. Zamanlanmış ölçeklendirmeyi kullanmak için EC2 Otomatik Ölçeklendirmeyi yapılandırın.

B. İşlerin hedefi olarak bir Amazon Simple Queue Service (Amazon SQS) kuyruğu yapılandırın. İşlem düğümlerini, Otomatik Ölçeklendirme grubunda yönetilen Amazon EC2 bulut sunucularıyla uygulayın. EC2 Otomatik Ölçeklendirmeyi kuyruğun boyutuna göre yapılandırın.

C. Birincil sunucuyu ve işlem düğümlerini, Otomatik Ölçeklendirme grubunda yönetilen Amazon EC2 bulut sunucularıyla uygulayın. AWS CloudTrail'i işler için hedef olarak yapılandırın. EC2 Otomatik Ölçeklendirmeyi birincil sunucudaki yüke göre yapılandırın.

D. Birincil sunucuyu ve işlem düğümlerini, Otomatik Ölçeklendirme grubunda yönetilen Amazon EC2 bulut sunucularıyla uygulayın. Amazon EventBridge'i (Amazon CloudWatch Events) işlerin hedefi olarak yapılandırın. İşlem düğümlerindeki yüke göre EC2 Otomatik Ölçeklendirmeyi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İşlerin hedefi olarak bir Amazon Simple Queue Service (Amazon SQS) kuyruğu yapılandırın. İşlem düğümlerini, Otomatik Ölçeklendirme grubunda yönetilen Amazon EC2 bulut sunucularıyla uygulayın. EC2 Otomatik Ölçeklendirmeyi kuyruğun boyutuna göre yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #9

Bir şirket, veri merkezinde bir SMB dosya sunucusu çalıştırıyor. Dosya sunucusu, dosyalar oluşturulduktan sonraki ilk birkaç gün boyunca sıklıkla erişilen büyük dosyaları depolar. 7 günden sonra dosyalara nadiren erişilir. Toplam veri boyutu giderek artıyor ve şirketin toplam depolama kapasitesine yaklaşıyor. Bir çözüm mimarı, en son erişilen dosyalara düşük gecikmeli erişimi kaybetmeden şirketin kullanılabilir depolama alanını artırmalıdır. Çözüm mimarı ayrıca gelecekteki depolama sorunlarından kaçınmak için dosya yaşam döngüsü yönetimini de sağlamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

C. 7 günden eski verileri SMB dosya sunucusundan AWS'ye kopyalamak için AWS DataSync'i kullanın.

B. Şirketin depolama alanını genişletmek için bir Amazon S3 Dosya Ağ Geçidi oluşturun. Verileri 7 gün sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

C. Şirketin depolama alanını genişletmek için bir Windows Dosya Sunucusu için Amazon FSx dosya sistemi oluşturun.

D. Amazon S3'e erişmek için her kullanıcının bilgisayarına bir yardımcı program yükleyin. Verileri 7 gün sonra S3 Glacier Esnek Alma'ya geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirketin depolama alanını genişletmek için bir Amazon S3 Dosya Ağ Geçidi oluşturun. Verileri 7 gün sonra S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #10

Bir şirket AWS'de bir e-ticaret web uygulaması geliştiriyor. Uygulama, yeni siparişlerle ilgili bilgileri işlenmek üzere bir Amazon API Gateway REST API'sine gönderir. Şirket, siparişlerin alındıkları sıraya göre işlenmesini sağlamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulama bir sipariş aldığında Amazon Simple Notification Service (Amazon SNS) konusuna bir mesaj yayınlamak için API Gateway entegrasyonunu kullanın. İşlemeyi gerçekleştirmek için konuya bir AWS Lambda işlevi abone olun.

B. Uygulama bir sipariş aldığında Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna mesaj göndermek için API Gateway entegrasyonunu kullanın. İşleme için bir AWS Lambda işlevini çağırmak üzere SQS FIFO kuyruğunu yapılandırın.

C. Uygulama bir siparişi işlerken tüm istekleri engellemek için bir API Ağ Geçidi yetkilendiricisi kullanın.

D. Uygulama bir sipariş aldığında Amazon Simple Queue Service (Amazon SQS) standart kuyruğuna mesaj göndermek için API Gateway entegrasyonunu kullanın. İşleme için bir AWS Lambda işlevini çağırmak üzere SQS standart kuyruğunu yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Uygulama bir sipariş aldığında Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna mesaj göndermek için API Gateway entegrasyonunu kullanın. İşleme için bir AWS Lambda işlevini çağırmak üzere SQS FIFO kuyruğunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #11

Bir şirketin Amazon EC2 bulut sunucularında çalışan ve Amazon Aurora veritabanını kullanan bir uygulaması var. EC2 bulut sunucuları, bir dosyada yerel olarak depolanan kullanıcı adlarını ve parolaları kullanarak veritabanına bağlanır. Şirket, kimlik bilgisi yönetiminin operasyonel yükünü en aza indirmek istiyor. Bir çözüm mimarı bu hedefe ulaşmak için ne yapmalıdır?

A. AWS Secrets Manager'ı kullanın. Otomatik döndürmeyi açın.

B. AWS Systems Manager Parametre Deposunu kullanın. Otomatik döndürmeyi açın.

C. AWS Key Management Service (AWS KMS) şifreleme anahtarıyla şifrelenen nesneleri depolamak için bir Amazon S3 klasörü oluşturun. Kimlik bilgisi dosyasını S3 klasörüne taşıyın. Uygulamayı S3 klasörüne yönlendirin.

D. Her EC2 bulut sunucusu için şifrelenmiş bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun. Yeni EBS birimini her EC2 bulut sunucusuna ekleyin. Kimlik bilgisi dosyasını yeni EBS birimine taşıyın. Uygulamayı yeni EBS birimine yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Secrets Manager'ı kullanın. Otomatik döndürmeyi açın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #12

Küresel bir şirket, web uygulamasını bir Application Load Balancer (ALB) arkasında Amazon EC2 bulut sunucularında barındırıyor. Web uygulamasında statik veriler ve dinamik veriler bulunur. Şirket statik verilerini bir Amazon S3 klasöründe saklıyor. Şirket, statik veriler ve dinamik veriler için performansı artırmak ve gecikmeyi azaltmak istiyor. Şirket, Amazon Route 53'e kayıtlı kendi alan adını kullanıyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Kaynak olarak S3 klasörüne ve ALB'ye sahip bir Amazon CloudFront dağıtımı oluşturun. Trafiği CloudFront dağıtımına yönlendirmek için Route 53'ü yapılandırın.

B. Kaynağı ALB olan bir Amazon CloudFront dağıtımı oluşturun. Uç nokta olarak S3 klasörüne sahip bir AWS Global Accelerator standart hızlandırıcı oluşturun Trafiği CloudFront dağıtımına yönlendirmek için Route 53'ü yapılandırın.

C. Başlangıç ​​noktası olarak S3 klasörüne sahip bir Amazon CloudFront dağıtımı oluşturun. Uç nokta olarak ALB ve CloudFront dağıtımına sahip bir AWS Global Accelerator standart hızlandırıcı oluşturun. Hızlandırıcı DNS adına işaret eden özel bir alan adı oluşturun. Özel etki alanı adını web uygulaması için uç nokta olarak kullanın.

D. Kaynağı ALB olan bir Amazon CloudFront dağıtımı oluşturun. Uç nokta olarak S3 klasörüne sahip bir AWS Global Accelerator standart hızlandırıcı oluşturun. İki alan adı oluşturun. Dinamik içerik için bir alan adını CloudFront DNS adına yönlendirin. Statik içerik için diğer alan adını hızlandırıcı DNS adına yönlendirin. Alan adlarını web uygulaması için uç noktalar olarak kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kaynak olarak S3 klasörüne ve ALB'ye sahip bir Amazon CloudFront dağıtımı oluşturun. Trafiği CloudFront dağıtımına yönlendirmek için Route 53'ü yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #13

Bir şirket, AWS altyapısında aylık bakım gerçekleştiriyor. Bu bakım etkinlikleri sırasında şirketin Amazon RDS for MySQL veritabanlarına ilişkin kimlik bilgilerini birden fazla AWS Bölgesinde dönüşümlü olarak kullanması gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Kimlik bilgilerini AWS Secrets Manager'da gizli diziler olarak saklayın. Gerekli Bölgeler için çoklu Bölge gizli çoğaltmasını kullanın. Gizli dizileri bir zamanlamaya göre döndürecek şekilde Gizli Diziler Yöneticisi'ni yapılandırın.

B. Güvenli bir dize parametresi oluşturarak kimlik bilgilerini AWS Systems Manager'da gizli diziler olarak saklayın. Gerekli Bölgeler için çoklu Bölge gizli çoğaltmasını kullanın. Sistem Yöneticisini gizli dizileri bir zamanlamaya göre döndürecek şekilde yapılandırın.

C. Kimlik bilgilerini sunucu tarafı şifrelemenin (SSE) etkin olduğu bir Amazon S3 klasöründe saklayın. Kimlik bilgilerini döndürmek amacıyla bir AWS Lambda işlevini çağırmak için Amazon EventBridge'i (Amazon CloudWatch Events) kullanın.

D. AWS Key Management Service (AWS KMS) çoklu Bölge müşteri tarafından yönetilen anahtarları kullanarak kimlik bilgilerini gizli diziler olarak şifreleyin. Gizli dizileri bir Amazon DynamoDB global tablosunda saklayın. DynamoDB'den gizli dizileri almak için bir AWS Lambda işlevini kullanın. Gizli dizileri döndürmek için RDS API'sini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kimlik bilgilerini AWS Secrets Manager'da gizli diziler olarak saklayın. Gerekli Bölgeler için çoklu Bölge gizli çoğaltmasını kullanın. Gizli dizileri bir zamanlamaya göre döndürecek şekilde Gizli Diziler Yöneticisi'ni yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #14

Bir şirket, bir Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında bir e-ticaret uygulaması çalıştırıyor. Bulut sunucuları birden fazla Erişilebilirlik Alanında bir Amazon EC2 Auto Scaling grubunda çalışır. Otomatik Ölçeklendirme grubu, CPU kullanım ölçümlerine göre ölçeklenir. E-ticaret uygulaması, işlem verilerini büyük bir EC2 örneğinde barındırılan MySQL 8.0 veritabanında saklar. Uygulama yükü arttıkça veritabanının performansı hızla düşer. Uygulama, yazma işlemlerinden daha fazla okuma isteğini işler. Şirket, yüksek kullanılabilirliği korurken öngörülemeyen okuma iş yükü taleplerini karşılamak için veritabanını otomatik olarak ölçeklendirecek bir çözüm istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

C. Lider ve bilgi işlem işlevleri için Amazon Redshift'i tek bir düğümle kullanın.

B. Amazon RDS'yi Single-AZ dağıtımıyla kullanın Farklı bir Erişilebilirlik Alanına okuyucu bulut sunucuları eklemek için Amazon RDS'yi yapılandırın.

C. Amazon Aurora'yı Multi-AZ dağıtımıyla kullanın. Aurora Otomatik Ölçeklendirmeyi Aurora Replikalarıyla Yapılandırın.

D. EC2 Spot Bulut Sunucularıyla Memcached için Amazon ElastiCache'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Aurora'yı Multi-AZ dağıtımıyla kullanın. Aurora Otomatik Ölçeklendirmeyi Aurora Replikalarıyla Yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru #15

Yakın zamanda AWS'ye geçiş yapan bir şirket, üretim VPC'sine giren ve çıkan trafiği korumak için bir çözüm uygulamak istiyor. Şirketin şirket içi veri merkezinde bir inceleme sunucusu vardı. İnceleme sunucusu, trafik akışı denetimi ve trafik filtreleme gibi belirli işlemleri gerçekleştirdi. Şirket, AWS Cloud'da da aynı işlevlere sahip olmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Üretim VPC'sinde trafik denetimi ve trafik filtreleme için Amazon GuardDuty'yi kullanın.

B. Trafik denetimi ve filtreleme amacıyla üretim VPC'sinden gelen trafiği yansıtmak için Trafik Yansıtma'yı kullanın.

C. Üretim VPC'sine yönelik trafik denetimi ve trafik filtrelemeye yönelik gerekli kuralları oluşturmak için AWS Ağ Güvenlik Duvarı'nı kullanın.

D. Üretim VPC'sine yönelik trafik denetimi ve trafik filtrelemeye yönelik gerekli kuralları oluşturmak için AWS Firewall Manager'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Üretim VPC'sine yönelik trafik denetimi ve trafik filtrelemeye yönelik gerekli kuralları oluşturmak için AWS Ağ Güvenlik Duvarı'nı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #16

Bir şirket AWS'de bir veri gölü barındırıyor. Veri gölü, Amazon S3 ve Amazon RDS for PostgreSQL'deki verilerden oluşur. Şirketin veri görselleştirmesini sağlayan ve veri gölü içerisindeki tüm veri kaynaklarını içeren bir raporlama çözümüne ihtiyacı var. Yalnızca şirketin yönetim ekibinin tüm görselleştirmelere tam erişimi olmalıdır. Şirketin geri kalanı yalnızca sınırlı erişime sahip olmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon QuickSight'ta bir analiz oluşturun. Tüm veri kaynaklarını bağlayın ve yeni veri kümeleri oluşturun. Verileri görselleştirmek için kontrol panellerini yayınlayın. Kontrol panellerini uygun IAM rolleriyle paylaşın.

B. Amazon QuickSight'ta bir analiz oluşturun. Tüm veri kaynaklarını bağlayın ve yeni veri kümeleri oluşturun. Verileri görselleştirmek için kontrol panellerini yayınlayın. Kontrol panellerini uygun kullanıcılar ve gruplarla paylaşın.

C. Amazon S3'teki veriler için bir AWS Glue tablosu ve tarayıcısı oluşturun. Raporlar oluşturmak için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. Raporları Amazon S3'te yayınlayın. Raporlara erişimi sınırlamak için S3 paket politikalarını kullanın.

D. Amazon S3'teki veriler için bir AWS Glue tablosu ve tarayıcısı oluşturun. Amazon RDS for PostgreSQL içindeki verilere erişmek için Amazon Athena Federated Query'yi kullanın. Amazon Athena'yı kullanarak raporlar oluşturun. Raporları Amazon S3'te yayınlayın. Raporlara erişimi sınırlamak için S3 paket politikalarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon QuickSight'ta bir analiz oluşturun. Tüm veri kaynaklarını bağlayın ve yeni veri kümeleri oluşturun. Verileri görselleştirmek için kontrol panellerini yayınlayın. Kontrol panellerini uygun kullanıcılar ve gruplarla paylaşın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #17

Bir şirket yeni bir iş uygulamasını hayata geçiriyor. Uygulama iki Amazon EC2 bulut sunucusunda çalışır ve belge depolama için bir Amazon S3 klasörü kullanır. Bir çözüm mimarının EC2 bulut sunucularının S3 klasörüne erişebildiğinden emin olması gerekir. Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. S3 paketine erişim izni veren bir IAM rolü oluşturun. Rolü EC2 bulut sunucularına ekleyin.

B. S3 klasörüne erişim izni veren bir IAM politikası oluşturun. Politikayı EC2 bulut sunucularına ekleyin.

C. S3 paketine erişim izni veren bir IAM grubu oluşturun. Grubu EC2 bulut sunucularına ekleyin.

D. S3 klasörüne erişim izni veren bir IAM kullanıcısı oluşturun. Kullanıcı hesabını EC2 bulut sunucularına ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 paketine erişim izni veren bir IAM rolü oluşturun. Rolü EC2 bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #18

Bir uygulama geliştirme ekibi, büyük görüntüleri daha küçük, sıkıştırılmış görüntülere dönüştürecek bir mikro hizmet tasarlıyor. Bir kullanıcı web arayüzü aracılığıyla bir görüntü yüklediğinde, mikro hizmet görüntüyü bir Amazon S3 klasöründe saklamalı, görüntüyü bir AWS Lambda işleviyle işleyip sıkıştırmalı ve görüntüyü sıkıştırılmış biçiminde farklı bir S3 klasöründe saklamalıdır. Bir çözüm mimarının, görüntüleri otomatik olarak işlemek için dayanıklı, durum bilgisi olmayan bileşenler kullanan bir çözüm tasarlaması gerekir. Hangi eylem kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. S3 kümesine bir görüntü yüklendiğinde SQS kuyruğuna bildirim gönderecek şekilde S3 kümesini yapılandırın.

B. Lambda işlevini, Amazon Simple Queue Service (Amazon SQS) kuyruğunu çağırma kaynağı olarak kullanacak şekilde yapılandırın. SQS mesajı başarıyla işlendiğinde kuyruktaki mesajı silin.

C. Yeni yüklemeler için S3 klasörünü izlemek üzere Lambda işlevini yapılandırın. Yüklenen bir görüntü algılandığında, dosya adını bellekteki bir metin dosyasına yazın ve işlenen görüntüleri takip etmek için metin dosyasını kullanın.

D. Amazon Simple Queue Service (Amazon SQS) kuyruğunu izlemek için bir Amazon EC2 bulut sunucusu başlatın. Öğeler kuyruğa eklendiğinde, dosya adını EC2 örneğindeki bir metin dosyasına kaydedin ve Lambda işlevini çağırın.

E. S3 grubunu izlemek için bir Amazon EventBridge (Amazon CloudWatch Events) olayı yapılandırın. Bir görüntü yüklendiğinde, daha ileri işlemler için uygulama sahibinin e-posta adresini içeren bir Amazon geniş Bildirim Hizmeti (Amazon SNS) konusuna bir uyarı gönderin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. S3 kümesine bir görüntü yüklendiğinde SQS kuyruğuna bildirim gönderecek şekilde S3 kümesini yapılandırın. Lambda işlevini, Amazon Simple Queue Service (Amazon SQS) kuyruğunu çağırma kaynağı olarak kullanacak şekilde yapılandırın. SQS mesajı başarıyla işlendiğinde kuyruktaki mesajı silin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #19

Bir şirketin AWS'de dağıtılan üç katmanlı bir web uygulaması var. Web sunucuları bir VPC'deki genel bir alt ağda dağıtılır. Uygulama sunucuları ve veritabanı sunucuları aynı VPC'deki özel alt ağlara dağıtılır. Şirket, bir inceleme VPC'sinde AWS Marketplace'ten üçüncü taraf bir sanal güvenlik duvarı cihazı dağıttı. Cihaz, IP paketlerini kabul edebilecek bir IP arayüzü ile yapılandırılmıştır. Bir çözüm mimarının, trafik web sunucusuna ulaşmadan önce uygulamaya gelen tüm trafiği denetlemek için web uygulamasını cihazla entegre etmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Trafiği paket incelemesi için cihaza yönlendirmek üzere uygulamanın VPC'sinin genel alt ağında bir Ağ Yük Dengeleyici oluşturun.

B. Trafiği paket incelemesi için cihaza yönlendirmek üzere uygulamanın VPC'sinin genel alt ağında bir Uygulama Yük Dengeleyici oluşturun.

C. Gelen paketleri transit ağ geçidi üzerinden yönlendirmek için inceleme VPConfigure rota tablolarında bir transit ağ geçidi dağıtın.

D. İnceleme VPC'sine bir Ağ Geçidi Yük Dengeleyici dağıtın. Gelen paketleri almak ve paketleri cihaza iletmek için bir Gateway Load Balancer uç noktası oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İnceleme VPC'sine bir Ağ Geçidi Yük Dengeleyici dağıtın. Gelen paketleri almak ve paketleri cihaza iletmek için bir Gateway Load Balancer uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #20

Bir şirket, büyük miktarda üretim verisini aynı AWS Bölgesindeki bir test ortamına kopyalama yeteneğini geliştirmek istiyor. Veriler, Amazon Elastic Block Store (Amazon EBS) birimlerindeki Amazon EC2 bulut sunucularında depolanır. Klonlanmış verilerde yapılan değişiklikler üretim ortamını etkilememelidir. Bu verilere erişen yazılım, sürekli olarak yüksek I/O performansı gerektirir. Bir çözüm mimarının, üretim verilerini test ortamına kopyalamak için gereken süreyi en aza indirmesi gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Üretim EBS hacimlerinin EBS anlık görüntülerini alın. Anlık görüntüleri test ortamındaki EC2 bulut sunucusu depolama birimlerine geri yükleyin.

B. Üretim EBS birimlerini, EBS Çoklu Ekleme özelliğini kullanacak şekilde yapılandırın. Üretim EBS hacimlerinin EBS anlık görüntülerini alın. Üretim EBS birimlerini test ortamındaki EC2 bulut sunucularına ekleyin.

C. Üretim EBS hacimlerinin EBS anlık görüntülerini alın. Yeni EBS birimleri oluşturun ve başlatın. Üretim EBS anlık yedeklerinden birimleri geri yüklemeden önce yeni EBS birimlerini test ortamındaki EC2 bulut sunucularına ekleyin.

D. Üretim EBS hacimlerinin EBS anlık görüntülerini alın. EBS anlık görüntüleri üzerinde EBS hızlı anlık görüntü geri yükleme özelliğini açın. Anlık görüntüleri yeni EBS birimlerine geri yükleyin. Yeni EBS birimlerini test ortamındaki EC2 bulut sunucularına ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Üretim EBS hacimlerinin EBS anlık görüntülerini alın. EBS anlık görüntüleri üzerinde EBS hızlı anlık görüntü geri yükleme özelliğini açın. Anlık görüntüleri yeni EBS birimlerine geri yükleyin. Yeni EBS birimlerini test ortamındaki EC2 bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #21

Bir e-ticaret şirketi, AWS'de günde tek fırsat sunan bir web sitesi başlatmak istiyor. Her gün tam olarak bir ürün 24 saat boyunca indirimde olacak. Şirket, yoğun saatlerde her saat başı milyonlarca isteği milisaniyelik bir gecikmeyle karşılayabilmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

C. Web sitesinin tamamını farklı S3 klasörlerinde barındırmak için Amazon S3'ü kullanın. Amazon CloudFront dağıtımlarını ekleyin. S3 paketlerini dağıtımlar için başlangıç ​​noktası olarak ayarlayın. Sipariş verilerini Amazon S3'te saklayın.

B. Web sitesinin tamamını birden fazla Erişilebilirlik Alanında Otomatik Ölçeklendirme gruplarında çalışan Amazon EC2 bulut sunucularına dağıtın. Web sitesi trafiğini dağıtmak için bir Uygulama Yük Dengeleyicisi (ALB) ekleyin. Arka uç API'leri için başka bir ALB ekleyin. Verileri Amazon RDS for MySQL'de saklayın.

C. Uygulamanın tamamını kapsayıcılarda çalışacak şekilde taşıyın. Container'ları Amazon Elastic Kubernetes Service'te (Amazon EKS) barındırın. Trafikteki patlamaları işleyecek kapsül sayısını artırmak ve azaltmak için Kubernetes Cluster Autoscaler'ı kullanın. Verileri Amazon RDS for MySQL'de saklayın.

D. Web sitesinin statik içeriğini barındırmak için bir Amazon S3 klasörü kullanın. Bir Amazon CloudFront dağıtımı dağıtın. S3 kovasını başlangıç ​​noktası olarak ayarlayın. Arka uç API'leri için Amazon API Gateway ve AWS Lambda işlevlerini kullanın. Verileri Amazon DynamoDB'de saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Web sitesinin statik içeriğini barındırmak için bir Amazon S3 klasörü kullanın. Bir Amazon CloudFront dağıtımı dağıtın. S3 kovasını başlangıç ​​noktası olarak ayarlayın. Arka uç API'leri için Amazon API Gateway ve AWS Lambda işlevlerini kullanın. Verileri Amazon DynamoDB'de saklayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #22

Bir çözüm mimarı, yeni bir dijital medya uygulamasının depolama mimarisini tasarlamak için Amazon S3'ü kullanıyor. Medya dosyalarının Erişilebilirlik Alanı kaybına karşı dayanıklı olması gerekir. Bazı dosyalara sıklıkla erişilirken, diğer dosyalara öngörülemeyen bir düzende nadiren erişilir. Çözüm mimarı, medya dosyalarını saklama ve alma maliyetlerini en aza indirmelidir. Hangi depolama seçeneği bu gereksinimleri karşılıyor?

A.S3 Standardı

B. S3 Akıllı Katmanlama

C. S3 Standart-Sıklıksız Erişim (S3 Standart-IA)

D. S3 Tek Bölge-Sıklıksız Erişim (S3 Tek Bölge-IA)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 Akıllı Katmanlama
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #23

Bir şirket, yedekleme dosyalarını Amazon S3 Standart depolamayı kullanarak depoluyor. Dosyalara 1 ay boyunca sıklıkla erişilmektedir. Ancak 1 ay geçmesine rağmen dosyalara erişilemiyor. Şirketin dosyaları süresiz olarak saklaması gerekmektedir. Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Nesneleri otomatik olarak taşımak için S3 Intelligent-Tiering'i yapılandırın.

B. Nesneleri 1 ay sonra S3 Standard'tan S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun.

C. 1 ay sonra nesneleri S3 Standard'tan S3 Standard-Infrequent Access'e (S3 Standard-IA) geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun.

D. Nesneleri 1 ay sonra S3 Standart'tan S3 Tek Bölgeli Sık Olmayan Erişime (S3 Tek Bölge-IA) geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Nesneleri 1 ay sonra S3 Standard'tan S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #24

Bir şirket, son faturasında Amazon EC2 maliyetlerinde artış gözlemliyor. Faturalandırma ekibi, birkaç EC2 bulut sunucusu için bulut sunucusu türlerinin istenmeyen dikey ölçeklendirmesini fark etti. Bir çözüm mimarının, son 2 aylık EC2 maliyetlerini karşılaştıran bir grafik oluşturması ve dikey ölçeklendirmenin temel nedenini belirlemek için derinlemesine bir analiz yapması gerekir. Çözüm mimarı bilgiyi EN AZ operasyonel ek yük ile nasıl oluşturmalıdır?

A. Bir bütçe raporu oluşturmak ve EC2 maliyetlerini bulut sunucusu türlerine göre karşılaştırmak için AWS Budgets'ı kullanın.

B. Bulut sunucusu türlerine göre EC2 maliyetlerinin derinlemesine analizini gerçekleştirmek için Cost Explorer'ın ayrıntılı filtreleme özelliğini kullanın.

C. Son 2 aydaki bulut sunucusu türlerine göre EC2 maliyetlerini karşılaştırmak için AWS Faturalandırma ve Maliyet Yönetimi panosundaki grafikleri kullanın.

D. Bir rapor oluşturmak ve bunu bir Amazon S3 klasörüne göndermek için AWS Maliyet ve Kullanım Raporlarını kullanın. Bulut sunucusu türlerine dayalı etkileşimli bir grafik oluşturmak için kaynak olarak Amazon QuickSight'ı Amazon S3 ile kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bulut sunucusu türlerine göre EC2 maliyetlerinin derinlemesine analizini gerçekleştirmek için Cost Explorer'ın ayrıntılı filtreleme özelliğini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #25

Bir şirket bir uygulama tasarlıyor. Uygulama, Amazon API Gateway aracılığıyla bilgi almak ve bilgileri bir Amazon Aurora PostgreSQL veritabanında depolamak için bir AWS Lambda işlevini kullanır. Konsept kanıtlama aşamasında şirketin, veritabanına yüklemesi gereken yüksek hacimli verileri yönetebilmek için Lambda kotalarını önemli ölçüde artırması gerekiyor. Bir çözüm mimarı, ölçeklenebilirliği artırmak ve yapılandırma çabasını en aza indirmek için yeni bir tasarım önermelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlev kodunu Amazon EC2 bulut sunucularında çalışan Apache Tomcat koduna yeniden düzenleyin. Yerel Java Veritabanı Bağlantısı (JDBC) sürücülerini kullanarak veritabanını bağlayın.

B. Platformu Aurora'dan Amazon DynamoDProvision ve DynamoDB Accelerator (DAX) kümesine değiştirin. Mevcut DynamoDB API çağrılarını DAX kümesine yönlendirmek için DAX istemci SDK'sını kullanın.

C. İki Lambda fonksiyonunu ayarlayın. Bilgileri almak için bir işlevi yapılandırın. Bilgileri veritabanına yüklemek için diğer işlevi yapılandırın. Amazon Simple Notification Service'ı (Amazon SNS) kullanarak Lambda işlevlerini entegre edin.

D. İki Lambda fonksiyonunu ayarlayın. Bilgileri almak için bir işlevi yapılandırın. Bilgileri veritabanına yüklemek için diğer işlevi yapılandırın. Amazon Simple Queue Service (Amazon SQS) kuyruğunu kullanarak Lambda işlevlerini entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İki Lambda işlevini ayarlayın. Bilgileri almak için bir işlevi yapılandırın. Bilgileri veritabanına yüklemek için diğer işlevi yapılandırın. Amazon Simple Queue Service (Amazon SQS) kuyruğunu kullanarak Lambda işlevlerini entegre edin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #26

Bir şirketin, Amazon S3 klasörlerinde yetkisiz yapılandırma değişiklikleri olmadığından emin olmak için AWS Bulut dağıtımını gözden geçirmesi gerekir. Bir çözüm mimarı bu hedefe ulaşmak için ne yapmalıdır?

A. AWS Config'i uygun kurallarla açın.

B. Uygun kontrollerle AWS Trusted Advisor'ı açın.

C. Uygun değerlendirme şablonuyla Amazon Inspector'ı açın.

D. Amazon S3 sunucusu erişim günlüğünü açın. Amazon EventBridge'i (Amazon Cloud Watch Etkinlikleri) yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Config'i uygun kurallarla açın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #27

Bir şirket yeni bir uygulama başlatıyor ve uygulama ölçümlerini Amazon CloudWatch kontrol panelinde görüntüleyecek. Şirketin ürün yöneticisinin bu kontrol paneline periyodik olarak erişmesi gerekiyor. Ürün yöneticisinin bir AWS hesabı yok. Bir çözüm mimarı, en az ayrıcalık ilkesini izleyerek ürün yöneticisine erişim sağlamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Kontrol panelini CloudWatch konsolundan paylaşın. Ürün yöneticisinin e-posta adresini girin ve paylaşım adımlarını tamamlayın. Kontrol paneli için ürün yöneticisine paylaşılabilir bir bağlantı sağlayın.

B. Ürün yöneticisi için özel olarak bir IAM kullanıcısı oluşturun. CloudWatchReadOnlyAccess AWS yönetilen politikasını kullanıcıya ekleyin. Yeni oturum açma kimlik bilgilerini ürün yöneticisiyle paylaşın. Doğru kontrol panelinin tarayıcı URL'sini ürün yöneticisiyle paylaşın.

C. Şirketin çalışanları için bir IAM kullanıcısı oluşturun. ViewOnlyAccess AWS yönetilen politikasını IAM kullanıcısına ekleyin. Yeni oturum açma kimlik bilgilerini ürün yöneticisiyle paylaşın. Ürün yöneticisinden CloudWatch konsoluna gitmesini ve Kontrol Panelleri bölümünde kontrol panelini ada göre bulmasını isteyin.

D. Genel bir alt ağda bir savunma sunucusunu konuşlandırın. Ürün yöneticisinin kontrol paneline erişmesi gerektiğinde sunucuyu başlatın ve RDP kimlik bilgilerini paylaşın. Savunma sunucusunda, tarayıcının, kontrol paneli URL'sini kontrol panelini görüntülemek için uygun izinlere sahip, önbelleğe alınmış AWS kimlik bilgileriyle açacak şekilde yapılandırıldığından emin olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kontrol panelini CloudWatch konsolundan paylaşın. Ürün yöneticisinin e-posta adresini girin ve paylaşım adımlarını tamamlayın. Kontrol paneli için ürün yöneticisine paylaşılabilir bir bağlantı sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #28

Bir şirket uygulamaları AWS'ye taşıyor. Uygulamalar farklı hesaplara dağıtılır. Şirket, hesapları AWS Organizasyonlarını kullanarak merkezi olarak yönetir. Şirketin güvenlik ekibinin, şirketin tüm hesaplarında tek oturum açma (SSO) çözümüne ihtiyacı var. Şirket, şirket içi kendi kendini yöneten Microsoft Active Directory'deki kullanıcıları ve grupları yönetmeye devam etmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS SSO konsolundan AWS Tek Oturum Açmayı (AWS SSO) etkinleştirin. Microsoft Active Directory için AWS Directory Service'i kullanarak şirketin kendi kendini yöneten Microsoft Active Directory'sini AWS SSO'ya bağlamak için tek yönlü bir orman güveni veya tek yönlü etki alanı güveni oluşturun.

B. AWS SSO konsolundan AWS Tek Oturum Açmayı (AWS SSO) etkinleştirin. Microsoft Active Directory için AWS Directory Service'i kullanarak şirketin kendi kendini yöneten Microsoft Active Directory'sini AWS SSO'ya bağlamak için iki yönlü bir orman güveni oluşturun.

C. AWS Dizin Hizmetini kullanın. Şirketin kendi kendini yöneten Microsoft Active Directory'si ile iki yönlü bir güven ilişkisi oluşturun.

D. Şirket içinde bir kimlik sağlayıcı (IdP) dağıtın. AWS SSO konsolundan AWS Tek Oturum Açmayı (AWS SSO) etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS SSO konsolundan AWS Tek Oturum Açmayı (AWS SSO) etkinleştirin. Microsoft Active Directory için AWS Directory Service'i kullanarak şirketin kendi kendini yöneten Microsoft Active Directory'sini AWS SSO'ya bağlamak için iki yönlü bir orman güveni oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #29

Bir şirket, UDP bağlantılarını kullanan bir İnternet Protokolü Üzerinden Ses (VoIP) hizmeti sağlıyor. Hizmet, Otomatik Ölçeklendirme grubunda çalışan Amazon EC2 bulut sunucularından oluşur. Şirketin birden fazla AWS Bölgesinde dağıtımı bulunmaktadır. Şirketin kullanıcıları en düşük gecikme süresine sahip Bölgeye yönlendirmesi gerekiyor. Şirketin ayrıca Bölgeler arasında otomatik yük devretmeye ihtiyacı var. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir Ağ Yük Dengeleyicisini (NLB) ve ilişkili bir hedef grubu dağıtın. Hedef grubu Otomatik Ölçeklendirme grubuyla ilişkilendirin. NLB'yi her Bölgede AWS Global Accelerator uç noktası olarak kullanın.

B. Bir Application Load Balancer'ı (ALB) ve ilişkili bir hedef grubu dağıtın. Hedef grubu Otomatik Ölçeklendirme grubuyla ilişkilendirin. ALB'yi her Bölgede AWS Global Accelerator uç noktası olarak kullanın.

C. Bir Ağ Yük Dengeleyicisini (NLB) ve ilişkili bir hedef grubu dağıtın. Hedef grubu Otomatik Ölçeklendirme grubuyla ilişkilendirin. Her NLB için takma adlara işaret eden bir Amazon Route 53 gecikme kaydı oluşturun. Gecikme kaydını kaynak olarak kullanan bir Amazon CloudFront dağıtımı oluşturun.

D. Bir Application Load Balancer'ı (ALB) ve ilişkili bir hedef grubu dağıtın. Hedef grubu Otomatik Ölçeklendirme grubuyla ilişkilendirin. Her ALB için takma adlara işaret eden bir Amazon Route 53 ağırlıklı kayıt oluşturun. Ağırlıklı kaydı kaynak olarak kullanan bir Amazon CloudFront dağıtımı dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Ağ Yük Dengeleyicisi (NLB) ve ilişkili bir hedef grubu dağıtın. Hedef grubu Otomatik Ölçeklendirme grubuyla ilişkilendirin. NLB'yi her Bölgede AWS Global Accelerator uç noktası olarak kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #30

Bir geliştirme ekibi, Performance Insights etkinken genel amaçlı Amazon RDS for MySQL veritabanı bulut sunucusu üzerinde aylık kaynak yoğunluklu testler yürütüyor. Test ayda bir kez 48 saat sürer ve veritabanını kullanan tek işlemdir. Ekip, veritabanı bulut sunucusunun işlem ve bellek özelliklerini azaltmadan testleri çalıştırma maliyetini azaltmak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Testler tamamlandığında veritabanı bulut sunucusunu durdurun. Gerektiğinde veritabanı örneğini yeniden başlatın.

B. Testler tamamlandığında otomatik olarak ölçeklendirmek için veritabanı bulut sunucusuyla Otomatik Ölçeklendirme ilkesini kullanın.

C. Testler tamamlandığında anlık görüntü oluşturun. Veritabanı örneğini sonlandırın ve gerektiğinde anlık görüntüyü geri yükleyin.

D. Testler tamamlandığında veritabanı bulut sunucusunu düşük kapasiteli bir bulut sunucusuyla değiştirin. Gerektiğinde veritabanı örneğini yeniden değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Testler tamamlandığında anlık görüntü oluşturun. Veritabanı örneğini sonlandırın ve gerektiğinde anlık görüntüyü geri yükleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #31

Web uygulamasını AWS'de barındıran bir şirket, tüm Amazon EC2 bulut sunucularının güvence altına alınmasını istiyor. Amazon RDS Veritabanı bulut sunucuları. ve Amazon Redshift kümeleri etiketlerle yapılandırılır. Şirket, bu kontrolü yapılandırma ve çalıştırma çabasını en aza indirmek istiyor. Bir çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Düzgün etiketlenmemiş kaynakları tanımlamak ve tespit etmek için AWS Config kurallarını kullanın.

B. Düzgün etiketlenmemiş kaynakları görüntülemek için Maliyet Gezgini'ni kullanın. Bu kaynakları manuel olarak etiketleyin.

C. Tüm kaynakların uygun etiket tahsisi açısından kontrol edilmesi için API çağrıları yazın. Kodu düzenli olarak bir EC2 örneğinde çalıştırın.

D. Tüm kaynakların uygun etiket tahsisi açısından kontrol edilmesi için API çağrıları yazın. Kodu düzenli aralıklarla çalıştırmak için Amazon CloudWatch aracılığıyla bir AWS Lambda işlevi planlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Düzgün etiketlenmemiş kaynakları tanımlamak ve tespit etmek için AWS Config kurallarını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #32

Bir geliştirme ekibinin, diğer ekiplerin erişebileceği bir web sitesini barındırması gerekir. Web sitesi içerikleri HTML, CSS, istemci tarafı JavaScript ve resimlerden oluşur. Web sitesini barındırmak için EN uygun maliyetli yöntem hangisidir?

A. Web sitesini kapsayıcı hale getirin ve AWS Fargate'te barındırın.

B. Bir Amazon S3 klasörü oluşturun ve web sitesini orada barındırın.

C. Web sitesini barındırmak için bir Amazon EC2 örneğine bir web sunucusu dağıtın.

D. Express.js çerçevesini kullanan bir AWS Lambda hedefiyle bir Application Load Balancer yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir Amazon S3 klasörü oluşturun ve web sitesini orada barındırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #33

Bir şirket, AWS'de bir çevrimiçi pazaryeri web uygulaması çalıştırıyor. Uygulama yoğun saatlerde yüz binlerce kullanıcıya hizmet veriyor. Şirketin, milyonlarca finansal işlemin ayrıntılarını diğer birkaç dahili uygulamayla paylaşmak için ölçeklenebilir, neredeyse gerçek zamanlı bir çözüme ihtiyacı var. Düşük gecikmeli erişim için bir belge veritabanında saklanmadan önce hassas verilerin kaldırılması için işlemlerin de işlenmesi gerekir. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. İşlem verilerini Amazon DynamoDB'de saklayın. Yazma sonrasında hassas verileri her işlemden kaldırmak için DynamoDB'de bir kural ayarlayın. İşlem verilerini diğer uygulamalarla paylaşmak için DynamoDB Streams'i kullanın.

B. Verileri Amazon DynamoDB ve Amazon S3'te depolamak için işlem verilerini Amazon Kinesis Data Firehose'a aktarın. Hassas verileri kaldırmak için Kinesis Data Firehose ile AWS Lambda entegrasyonunu kullanın. Diğer uygulamalar Amazon S3'te depolanan verileri tüketebilir.

C. İşlem verilerini Amazon Kinesis Data Streams'e aktarın. Her işlemden hassas verileri kaldırmak ve ardından işlem verilerini Amazon DynamoDB'de depolamak için AWS Lambda entegrasyonunu kullanın. Diğer uygulamalar, işlem verilerini Kinesis veri akışından tüketebilir.

D. Toplu işlem verilerini Amazon S3'te dosyalar olarak saklayın. Amazon S3'teki dosyaları güncellemeden önce her dosyayı işlemek ve hassas verileri kaldırmak için AWS Lambda'yı kullanın. Lambda işlevi daha sonra verileri Amazon DynamoDB'de saklar. Diğer uygulamalar Amazon S3'te depolanan işlem dosyalarını kullanabilir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İşlem verilerini Amazon Kinesis Data Streams'e aktarın. Her işlemden hassas verileri kaldırmak ve ardından işlem verilerini Amazon DynamoDB'de depolamak için AWS Lambda entegrasyonunu kullanın. Diğer uygulamalar, işlem verilerini Kinesis veri akışından tüketebilir.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #34

Bir şirket, çok katmanlı uygulamalarını AWS'de barındırıyor. Uyumluluk, yönetişim, denetim ve güvenlik için şirketin AWS kaynaklarındaki yapılandırma değişikliklerini izlemesi ve bu kaynaklara yapılan API çağrılarının geçmişini kaydetmesi gerekir. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Yapılandırma değişikliklerini izlemek için AWS CloudTrail'i ve API çağrılarını kaydetmek için AWS Config'i kullanın.

B. Yapılandırma değişikliklerini izlemek için AWS Config'i ve API çağrılarını kaydetmek için AWS CloudTrail'i kullanın.

C. Yapılandırma değişikliklerini izlemek için AWS Config'i ve API çağrılarını kaydetmek için Amazon CloudWatch'u kullanın.

D. Yapılandırma değişikliklerini izlemek için AWS CloudTrail'i ve API çağrılarını kaydetmek için Amazon CloudWatch'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yapılandırma değişikliklerini izlemek için AWS Config'i ve API çağrılarını kaydetmek için AWS CloudTrail'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #35

Bir şirket, AWS Cloud'da halka açık bir web uygulamasını kullanıma sunmaya hazırlanıyor. Mimari, Elastic Load Balancer'ın (ELB) arkasındaki bir VPC içindeki Amazon EC2 bulut sunucularından oluşur. DNS için üçüncü taraf bir hizmet kullanılır. Şirketin çözüm mimarı, büyük ölçekli DDoS saldırılarını tespit etmek ve bunlara karşı koruma sağlamak için bir çözüm önermelidir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Hesapta Amazon GuardDuty'yi etkinleştirin.

B. EC2 bulut sunucularında Amazon Inspector'ı etkinleştirin.

C. AWS Shield'ı etkinleştirin ve buna Amazon Route 53'ü atayın.

D. AWS Shield Advanced'i etkinleştirin ve ELB'yi buna atayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Shield Advanced'i etkinleştirin ve ELB'yi buna atayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #36

Bir şirket AWS Cloud'da bir uygulama geliştiriyor. Uygulama, verileri iki AWS Bölgesindeki Amazon S3 klasörlerinde depolayacaktır. Şirketin, S3 klasörlerinde depolanan tüm verileri şifrelemek için AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar kullanması gerekir. Her iki S3 klasöründeki veriler aynı KMS anahtarıyla şifrelenmeli ve şifresi çözülmelidir. Veriler ve anahtar iki Bölgenin her birinde saklanmalıdır. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her Bölgede bir S3 klasörü oluşturun. Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanacak şekilde S3 paketlerini yapılandırın. S3 klasörleri arasındaki çoğaltmayı yapılandırın.

B. Müşteri tarafından yönetilen bir çoklu Bölge KMS anahtarı oluşturun. Her Bölgede bir S3 klasörü oluşturun. S3 klasörleri arasındaki çoğaltmayı yapılandırın. Uygulamayı, istemci tarafı şifrelemeli KMS anahtarını kullanacak şekilde yapılandırın.

C. Her Bölgede müşteri tarafından yönetilen bir KMS anahtarı ve bir S3 klasörü oluşturun. Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanacak şekilde S3 paketlerini yapılandırın. S3 klasörleri arasındaki çoğaltmayı yapılandırın.

D. Her Bölgede müşteri tarafından yönetilen bir KMS anahtarı ve bir S3 klasörü oluşturun. S3 klasörlerini AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanacak şekilde yapılandırın. S3 klasörleri arasındaki çoğaltmayı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Müşteri tarafından yönetilen çok Bölgeli bir KMS anahtarı oluşturun. Her Bölgede bir S3 klasörü oluşturun. S3 klasörleri arasındaki çoğaltmayı yapılandırın. Uygulamayı, istemci tarafı şifrelemeli KMS anahtarını kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #37

Bir şirket yakın zamanda AWS hesabındaki Amazon EC2 bulut sunucularında çeşitli yeni iş yükleri başlattı. Şirketin bulut sunucularına uzaktan ve güvenli bir şekilde erişmek ve bunları yönetmek için bir strateji oluşturması gerekiyor. Şirketin yerel AWS hizmetleriyle çalışan ve AWS Well-Architected Framework'ü izleyen tekrarlanabilir bir süreç uygulaması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Yönetim amacıyla her bir örneğin terminal arayüzüne doğrudan erişmek için EC2 seri konsolunu kullanın.

B. Mevcut her örneğe ve yeni örneğe uygun IAM rolünü ekleyin. Uzak bir SSH oturumu oluşturmak için AWS Systems Manager Session Manager'ı kullanın.

C. Bir yönetimsel SSH anahtar çifti oluşturun. Genel anahtarı her EC2 örneğine yükleyin. Her örneğin yönetimi için bir tünel sağlamak üzere genel bir alt ağda bir savunma ana bilgisayarı dağıtın.

D. Bir AWS Siteden Siteye VPN bağlantısı kurun. Yöneticilere, VPN tüneli üzerinden SSH anahtarlarını kullanarak örneklere doğrudan bağlanmak için yerel şirket içi makinelerini kullanmalarını söyleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Mevcut her örneğe ve yeni örneğe uygun IAM rolünü ekleyin. Uzak bir SSH oturumu oluşturmak için AWS Systems Manager Session Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #38

Bir şirket Amazon S3'te statik bir web sitesi barındırıyor ve DNS için Amazon Route 53'ü kullanıyor. Web sitesi dünyanın dört bir yanından artan talep görüyor. Şirket, web sitesine erişen kullanıcılar için gecikmeyi azaltmalıdır. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Web sitesini içeren S3 klasörünü tüm AWS Bölgelerine kopyalayın. Route 53 coğrafi konum yönlendirme girişlerini ekleyin.

B. AWS Global Accelerator'da hızlandırıcıların sağlanması. Sağlanan IP adreslerini S3 grubuyla ilişkilendirin. Hızlandırıcıların IP adreslerini işaret edecek şekilde Route 53 girişlerini düzenleyin.

C. S3 klasörünün önüne bir Amazon CloudFront dağıtımı ekleyin. Route 53 girişlerini CloudFront dağıtımını işaret edecek şekilde düzenleyin.

D. Pakette S3 Transfer Hızlandırmayı etkinleştirin. Yeni uç noktaya işaret edecek şekilde Route 53 girişlerini düzenleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** S3 klasörünün önüne bir Amazon CloudFront dağıtımı ekleyin. Route 53 girişlerini CloudFront dağıtımını işaret edecek şekilde düzenleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #39

Bir şirket, web sitesinde aranabilir bir öğe deposu tutar. Veriler, 10 milyondan fazla satır içeren Amazon RDS for MySQL veritabanı tablosunda depolanır. Veritabanında 2 TB Genel Amaçlı SSD depolama alanı bulunmaktadır. Şirketin web sitesi aracılığıyla her gün bu verilere karşı milyonlarca güncelleme yapılıyor. Şirket, bazı ekleme işlemlerinin 10 saniye veya daha uzun sürdüğünü fark etti. Şirket, sorunun veritabanı depolama performansından kaynaklandığını belirledi. Bu performans sorununu hangi çözüm çözer?

A. Depolama türünü Tedarik Edilen IOPS SSD olarak değiştirin.

B. Veritabanı bulut sunucusunu, belleği optimize edilmiş bir bulut sunucusu sınıfıyla değiştirin.

C. Veritabanı bulut sunucusunu, artırılabilir performans bulut sunucusu sınıfına değiştirin.

D. MySQL yerel eşzamansız çoğaltmayla Multi-AZ RDS okuma kopyalarını etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Depolama türünü Tedarik Edilen IOPS SSD olarak değiştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #40

Bir şirketin her gün toplu olarak 1 TB durum uyarısı üreten binlerce uç cihazı vardır. Her uyarı yaklaşık 2 KB boyutundadır. Bir çözüm mimarının, gelecekteki analizler için uyarıları alıp depolamak için bir çözüm uygulaması gerekir. Şirket yüksek kullanılabilirliğe sahip bir çözüm istiyor. Ancak şirketin maliyetleri minimuma indirmesi gerekiyor ve ek altyapı yönetmek istemiyor. Ayrıca şirket, anında analiz için 14 günlük veriyi mevcut tutmak ve 14 günden daha eski verileri arşivlemek istiyor. Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. Uyarıları almak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Uyarıları bir Amazon S3 klasörüne iletmek için Kinesis Data Firehose akışını yapılandırın. Verileri 14 gün sonra Amazon S3 Glacier'a aktarmak için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

B. İki Erişilebilirlik Alanında Amazon EC2 bulut sunucularını başlatın ve uyarıları almak için bunları bir Elastic Load Balancer'ın arkasına yerleştirin. EC2 bulut sunucularında, uyarıları bir Amazon S3 klasöründe depolayacak bir komut dosyası oluşturun. Verileri 14 gün sonra Amazon S3 Glacier'a aktarmak için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

C. Uyarıları almak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Uyarıları bir Amazon OpenSearch Service (Amazon Elasticsearch Service) kümesine iletmek için Kinesis Data Firehose akışını yapılandırın. Amazon OpenSearch Service (Amazon Elasticsearch Service) kümesini, her gün manuel anlık görüntüler alacak ve kümedeki 14 günden eski verileri silecek şekilde ayarlayın.

D. Uyarıları almak için bir Amazon Simple Queue Service (Amazon SQS) standart kuyruğu oluşturun ve mesaj saklama süresini 14 gün olarak ayarlayın. Tüketicileri SQS kuyruğunu yoklayacak, mesajın yaşını kontrol edecek ve mesaj verilerini gerektiği gibi analiz edecek şekilde yapılandırın. Mesaj 14 günlükse tüketici mesajı bir Amazon S3 klasörüne kopyalamalı ve mesajı SQS kuyruğundan silmelidir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uyarıları almak için bir Amazon Kinesis Data Firehose teslim akışı oluşturun. Uyarıları bir Amazon S3 klasörüne iletmek için Kinesis Data Firehose akışını yapılandırın. Verileri 14 gün sonra Amazon S3 Glacier'a aktarmak için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #41

Bir şirketin uygulaması, veri toplama için birden fazla hizmet olarak yazılım (SaaS) kaynağıyla bütünleşir. Şirket, verileri almak ve verileri analiz için bir Amazon S3 klasörüne yüklemek için Amazon EC2 bulut sunucularını çalıştırıyor. Verileri alan ve yükleyen aynı EC2 bulut sunucusu, yükleme tamamlandığında kullanıcıya bir bildirim de gönderir. Şirket, uygulama performansının yavaş olduğunu fark etti ve performansı mümkün olduğunca artırmak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. EC2 bulut sunucularının ölçeğinin genişletilebilmesi için bir Otomatik Ölçeklendirme grubu oluşturun. S3 klasörüne yükleme tamamlandığında olayları bir Amazon Simple Notification Service (Amazon SNS) konusuna göndermek için bir S3 olay bildirimi yapılandırın.

B. Her bir SaaS kaynağı ile S3 klasörü arasında veri aktarmak için bir Amazon AppFlow akışı oluşturun. S3 klasörüne yükleme tamamlandığında olayları bir Amazon Simple Notification Service (Amazon SNS) konusuna göndermek için bir S3 olay bildirimi yapılandırın.

C. Çıkış verilerini göndermek üzere her SaaS kaynağı için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun. S3 paketini kuralın hedefi olarak yapılandırın. S3 klasörüne yükleme tamamlandığında etkinlikleri göndermek için ikinci bir EventBridge (Bulut İzleme Etkinlikleri) kuralı oluşturun. İkinci kuralın hedefi olarak bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın.

D. EC2 bulut sunucusu yerine kullanılacak bir Docker kapsayıcısı oluşturun. Container mimarisine alınmış uygulamayı Amazon Elastic Container Service'te (Amazon ECS) barındırın. Amazon CloudWatch Container Insights'ı, S3 klasörüne yükleme tamamlandığında olayları bir Amazon Simple Notification Service (Amazon SNS) konusuna gönderecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Her SaaS kaynağı ile S3 klasörü arasında veri aktarmak için bir Amazon AppFlow akışı oluşturun. S3 klasörüne yükleme tamamlandığında olayları bir Amazon Simple Notification Service (Amazon SNS) konusuna göndermek için bir S3 olay bildirimi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #42

Bir şirket, tek bir VPC'de Amazon EC2 bulut sunucularında yüksek düzeyde kullanılabilir bir görüntü işleme uygulaması çalıştırıyor. EC2 bulut sunucuları, birden çok Erişilebilirlik Alanındaki çeşitli alt ağlarda çalışır. EC2 bulut sunucuları birbirleriyle iletişim kurmaz. Ancak EC2 bulut sunucuları, görüntüleri Amazon S3'ten indirir ve görüntüleri tek bir NAT ağ geçidi aracılığıyla Amazon S3'e yükler. Şirket veri aktarım ücretleri konusunda endişeli. Şirketin Bölgesel veri aktarım ücretlerinden kaçınmasının EN uygun maliyetli yolu nedir?

A. Her Erişilebilirlik Alanında NAT ağ geçidini başlatın.

B. NAT ağ geçidini bir NAT örneğiyle değiştirin.

C. Amazon S3 için bir ağ geçidi VPC uç noktası dağıtın.

D. EC2 bulut sunucularını çalıştırmak için bir EC2 Tahsis Edilmiş Ana Bilgisayar sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon S3 için bir ağ geçidi VPC uç noktası dağıtın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #43

Bir şirketin, Amazon S3'e yedeklenen, zamana duyarlı büyük miktarda veri üreten bir şirket içi uygulaması var. Uygulama büyüdü ve internet bant genişliği sınırlamalarıyla ilgili kullanıcı şikayetleri var. Bir çözüm mimarının, hem Amazon S3'e zamanında yedekleme yapılmasına hem de dahili kullanıcıların internet bağlantısı üzerinde minimum etkiye sahip olmasına olanak tanıyan uzun vadeli bir çözüm tasarlaması gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. AWS VPN bağlantıları kurun ve tüm trafiği bir VPC ağ geçidi uç noktası üzerinden proxy yapın.

B. Yeni bir AWS Direct Connect bağlantısı kurun ve yedekleme trafiğini bu yeni bağlantı üzerinden yönlendirin.

C. Günlük AWS Snowball cihazlarını sipariş edin. Verileri Snowball cihazlarına yükleyin ve cihazları her gün AWS'ye geri gönderin.

D. AWS Management Console aracılığıyla bir destek bildirimi gönderin. Hesaptan S3 hizmet limitlerinin kaldırılmasını talep edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yeni bir AWS Direct Connect bağlantısı kurun ve yedekleme trafiğini bu yeni bağlantı üzerinden yönlendirin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #44

Bir şirketin kritik verileri içeren bir Amazon S3 klasörü var. Şirket, verileri yanlışlıkla silinmeye karşı korumalıdır. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. S3 grubunda sürüm oluşturmayı etkinleştirin.

B. S3 klasöründe MFA Silmeyi etkinleştirin.

C. S3 klasöründe bir paket politikası oluşturun.

D. S3 klasöründe varsayılan şifrelemeyi etkinleştirin.

E. S3 klasöründeki nesneler için bir yaşam döngüsü ilkesi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** S3 grubunda sürüm oluşturmayı etkinleştirin. S3 paketinde MFA Silmeyi etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #45

Bir şirketin aşağıdakilerden oluşan bir veri alımı iş akışı vardır: • Yeni veri teslimatlarıyla ilgili bildirimler için bir Amazon Simple Notification Service (Amazon SNS) konusu • Verileri işlemek ve meta verileri kaydetmek için bir AWS Lambda işlevi Şirket, ağ bağlantısı sorunları nedeniyle alım iş akışının zaman zaman başarısız olduğunu gözlemliyor. Böyle bir arıza meydana geldiğinde, şirket işi manuel olarak yeniden çalıştırmadığı sürece Lambda işlevi ilgili verileri almaz. Bir çözüm mimarının Lambda işlevinin gelecekte tüm verileri almasını sağlamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. Lambda işlevini birden fazla Erişilebilirlik Alanında dağıtın.

B. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun ve bunu SNS konusuna abone olun.

C. Lambda işlevine ayrılan CPU'yu ve belleği artırın.

D. Lambda işlevi için sağlanan verimi artırın.

E. Amazon Simple Queue Service (Amazon SQS) kuyruğundan okumak için Lambda işlevini değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun ve bunu SNS konusuna abone olun. Amazon Simple Queue Service (Amazon SQS) kuyruğundan okumak için Lambda işlevini değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #46

Bir şirketin mağazalara pazarlama hizmetleri sağlayan bir uygulaması var. Hizmetler, mağaza müşterilerinin önceki satın alımlarına dayanmaktadır. Mağazalar, işlem verilerini SFTP aracılığıyla şirkete yüklüyor ve veriler, yeni pazarlama teklifleri oluşturmak için işlenip analiz ediliyor. Bazı dosyaların boyutu 200 GB'ı aşabilir. Şirket yakın zamanda bazı mağazaların, dahil edilmemesi gereken kişisel olarak tanımlanabilir bilgiler (PII) içeren dosyalar yüklediğini keşfetti. Şirket, kişisel bilgilerin tekrar paylaşılması durumunda yöneticilerin uyarılmasını istiyor. Şirket ayrıca iyileştirmeyi otomatikleştirmek istiyor. Bir çözüm mimarı bu gereksinimleri EN AZ geliştirme çabasıyla karşılamak için ne yapmalıdır?

A. Güvenli aktarım noktası olarak Amazon S3 klasörünü kullanın. Paketteki nesneleri taramak için Amazon Inspector'ı kullanın. Nesneler PII içeriyorsa PII içeren nesneleri kaldırmak için bir S3 Yaşam Döngüsü ilkesini tetikleyin.

B. Güvenli aktarım noktası olarak Amazon S3 klasörünü kullanın. Kovadaki nesneleri taramak için Amazon Macie'yi kullanın. Nesneler PII içeriyorsa yöneticilere PII içeren nesnelerin kaldırılmasına yönelik bir bildirim tetiklemek için Amazon Simple Notification Service'ı (Amazon SNS) kullanın.

C. AWS Lambda işlevinde özel tarama algoritmaları uygulayın. Nesneler pakete yüklendiğinde işlevi tetikleyin. Nesneler PII içeriyorsa yöneticilere PII içeren nesnelerin kaldırılmasına yönelik bir bildirim tetiklemek için Amazon Simple Notification Service'ı (Amazon SNS) kullanın.

D. AWS Lambda işlevinde özel tarama algoritmaları uygulayın. Nesneler pakete yüklendiğinde işlevi tetikleyin. Nesneler PII içeriyorsa yöneticilere bir bildirim tetiklemek ve PII içeren etleri kaldırmak için bir S3 Yaşam Döngüsü politikasını tetiklemek için Amazon Simple Email Service'i (Amazon SES) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Güvenli aktarım noktası olarak Amazon S3 paketini kullanın. Kovadaki nesneleri taramak için Amazon Macie'yi kullanın. Nesneler PII içeriyorsa yöneticilere PII içeren nesnelerin kaldırılmasına yönelik bir bildirim tetiklemek için Amazon Simple Notification Service'ı (Amazon SNS) kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #47

Bir şirketin, 1 hafta sürecek yaklaşan bir etkinlik için belirli bir AWS Bölgesindeki üç belirli Erişilebilirlik Alanında garantili Amazon EC2 kapasitesine ihtiyacı vardır. Şirket EC2 kapasitesini garanti altına almak için ne yapmalıdır?

A. İhtiyaç duyulan Bölgeyi belirten Rezerve Edilmiş Bulut Sunucularını satın alın.

B. İhtiyaç duyulan Bölgeyi belirten bir İsteğe Bağlı Kapasite Rezervasyonu oluşturun.

C. İhtiyaç duyulan Bölgeyi ve üç Erişilebilirlik Alanını belirten Rezerve Bulut Sunucularını satın alın.

D. İhtiyaç duyulan Bölgeyi ve üç Erişilebilirlik Alanını belirten bir İsteğe Bağlı Kapasite Rezervasyonu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İhtiyaç duyulan Bölgeyi ve üç Erişilebilirlik Alanını belirten bir İsteğe Bağlı Kapasite Rezervasyonu oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #48

Bir şirketin web sitesi, ürün kataloğu için bir Amazon EC2 bulut sunucusu deposunu kullanıyor. Şirket, kataloğun yüksek düzeyde kullanılabilir olduğundan ve kataloğun dayanıklı bir konumda saklandığından emin olmak istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Kataloğu Amazon ElastiCache for Redis'e taşıyın.

B. Daha büyük bir bulut sunucusu deposuyla daha büyük bir EC2 bulut sunucusunu dağıtın.

C. Kataloğu bulut sunucusu deposundan Amazon S3 Glacier Deep Archive'a taşıyın.

D. Kataloğu bir Amazon Elastic File System (Amazon EFS) dosya sistemine taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kataloğu bir Amazon Elastic File System (Amazon EFS) dosya sistemine taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru #49

Bir şirket, çağrı transkript dosyalarını aylık olarak saklar. Kullanıcılar, çağrıdan sonraki 1 yıl içerisinde dosyalara rastgele erişirken, 1 yıl sonrasında kullanıcılar dosyalara nadiren erişmektedir. Şirket, kullanıcılara 1 yıldan daha eski dosyaları mümkün olduğunca çabuk sorgulama ve alma olanağı vererek çözümünü optimize etmek istiyor. Eski dosyaların alınmasında gecikme kabul edilebilir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Bireysel dosyaları Amazon S3 Glacier Instant Retrieval'da etiketlerle saklayın. Dosyaları S3 Glacier Instant Retrieval'dan almak için etiketleri sorgulayın.

B. Dosyaları tek tek Amazon S3 Intelligent-Tiering'de depolayın. Dosyaları 1 yıl sonra S3 Glacier Esnek Erişimine taşımak için S3 Yaşam Döngüsü ilkelerini kullanın. Amazon Athena'yı kullanarak Amazon S3'teki dosyaları sorgulayın ve alın. S3 Glacier Select'i kullanarak S3 Glacier'deki dosyaları sorgulayın ve alın.

C. Bireysel dosyaları etiketlerle birlikte Amazon S3 Standard depolama alanında saklayın. Her arşiv için arama meta verilerini Amazon S3 Standard depolama alanında saklayın. Dosyaları 1 yıl sonra S3 Glacier Instant Retrieval'a taşımak için S3 Yaşam Döngüsü ilkelerini kullanın. Amazon S3'ten meta veri arayarak dosyaları sorgulayın ve alın.

D. Tek tek dosyaları Amazon S3 Standard depolama alanında saklayın. Dosyaları 1 yıl sonra S3 Glacier Deep Archive'a taşımak için S3 Yaşam Döngüsü politikalarını kullanın. Arama meta verilerini Amazon RDS'de saklayın. Amazon RDS'deki dosyaları sorgulayın. Dosyaları S3 Glacier Deep Archive'dan alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Dosyaları tek tek Amazon S3 Intelligent-Tiering'de depolayın. Dosyaları 1 yıl sonra S3 Glacier Esnek Erişimine taşımak için S3 Yaşam Döngüsü ilkelerini kullanın. Amazon Athena'yı kullanarak Amazon S3'teki dosyaları sorgulayın ve alın. S3 Glacier Select'i kullanarak S3 Glacier'deki dosyaları sorgulayın ve alın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #50

Bir şirketin 1.000 Amazon EC2 Linux bulut sunucusunda çalışan bir üretim iş yükü var. İş yükü üçüncü taraf yazılım tarafından desteklenmektedir. Kritik bir güvenlik açığını gidermek için şirketin üçüncü taraf yazılımlarını tüm EC2 bulut sunucularına mümkün olduğunca hızlı bir şekilde yamalaması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Yamayı tüm EC2 bulut sunucularına uygulamak için bir AWS Lambda işlevi oluşturun.

B. Yamayı tüm EC2 bulut sunucularına uygulamak için AWS Systems Manager Patch Manager'ı yapılandırın.

C. Yamayı tüm EC2 bulut sunucularına uygulamak için bir AWS Systems Manager bakım penceresi planlayın.

D. Yamayı tüm EC2 bulut sunucularına uygulayan özel bir komut çalıştırmak için AWS Systems Manager Run Komutunu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yamayı tüm EC2 bulut sunucularına uygulayan özel bir komut çalıştırmak için AWS Systems Manager Run Command'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #51

Bir şirket, REST API tarafından alınmak üzere sipariş gönderim istatistiklerini sağlayan bir uygulama geliştiriyor. Şirket, nakliye istatistiklerini çıkarmak, verileri okunması kolay bir HTML formatında düzenlemek ve raporu her sabah aynı anda birden fazla e-posta adresine göndermek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Verileri Amazon Kinesis Data Firehose'a gönderecek şekilde uygulamayı yapılandırın.

B. Verileri biçimlendirmek ve raporu e-postayla göndermek için Amazon Simple Email Service'i (Amazon SES) kullanın.

C. Veriler için uygulamanın API'sini sorgulamak üzere bir AWS Glue işini çağıran, planlanmış bir Amazon EventBridge (Amazon CloudWatch Events) etkinliği oluşturun.

D. Uygulamanın veriler için API'sini sorgulamak üzere bir AWS Lambda işlevini çağıran, planlanmış bir Amazon EventBridge (Amazon CloudWatch Events) etkinliği oluşturun.

E. Uygulama verilerini Amazon S3'te saklayın. Raporu e-postayla göndermek için S3 olay hedefi olarak bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Verileri biçimlendirmek ve raporu e-postayla göndermek için Amazon Simple Email Service'i (Amazon SES) kullanın. Veriler için uygulamanın API'sini sorgulamak üzere bir AWS Lambda işlevini çağıran, planlanmış bir Amazon EventBridge (Amazon CloudWatch Events) etkinliği oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru #52

Bir şirket şirket içi uygulamasını AWS'ye geçirmek istiyor. Uygulama, boyutları onlarca gigabayttan yüzlerce terabayta kadar değişen çıktı dosyaları üretir. Uygulama verileri standart bir dosya sistemi yapısında saklanmalıdır. Şirket otomatik olarak ölçeklenen bir çözüm istiyor. Yüksek oranda kullanılabilir ve minimum operasyonel ek yük gerektirir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamayı Amazon Elastic Container Service (Amazon ECS) üzerinde kapsayıcı olarak çalışacak şekilde taşıyın. Depolama için Amazon S3'ü kullanın.

B. Uygulamayı Amazon Elastic Kubernetes Service'te (Amazon EKS) kapsayıcı olarak çalışacak şekilde taşıyın. Depolama için Amazon Elastic Block Store'u (Amazon EBS) kullanın.

C. Uygulamayı Multi-AZ Auto Scaling grubundaki Amazon EC2 bulut sunucularına taşıyın. Depolama için Amazon Elastic File System'i (Amazon EFS) kullanın.

D. Uygulamayı Multi-AZ Auto Scaling grubundaki Amazon EC2 bulut sunucularına taşıyın. Depolama için Amazon Elastic Block Store'u (Amazon EBS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulamayı Multi-AZ Auto Scaling grubundaki Amazon EC2 bulut sunucularına taşıyın. Depolama için Amazon Elastic File System'i (Amazon EFS) kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #53

Bir şirketin muhasebe kayıtlarını Amazon S3'te saklaması gerekiyor. Kayıtların 1 yıl süreyle anında erişilebilir olması, ardından 9 yıl daha arşivlenmesi gerekiyor. Yönetici kullanıcılar ve kök kullanıcılar da dahil olmak üzere şirketteki hiç kimse, 10 yıllık süre boyunca kayıtları silemez. Kayıtlar maksimum esneklikle saklanmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Kayıtları 10 yıllık dönemin tamamı boyunca S3 Glacier'da saklayın. Kayıtların silinmesini 10 yıllık bir süre boyunca reddetmek için bir erişim kontrol politikası kullanın.

B. Kayıtları S3 Intelligent-Tiering'i kullanarak saklayın. Kayıtların silinmesini reddetmek için bir IAM politikası kullanın. 10 yıl sonra IAM politikasını silmeye izin verecek şekilde değiştirin.

C. Kayıtları 1 yıl sonra S3 Standard'tan S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü politikası kullanın. S3 Object Lock'u 10 yıl boyunca uyumluluk modunda kullanın.

D. Kayıtları 1 yıl sonra S3 Standard'tan S3 Tek Bölge-İnfrekant Erişime (S3 Tek Bölge-IA) geçirmek için bir S3 Yaşam Döngüsü ilkesi kullanın. S3 Object Lock'u 10 yıllık bir süre boyunca yönetişim modunda kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kayıtları 1 yıl sonra S3 Standard'tan S3 Glacier Deep Archive'a geçirmek için bir S3 Yaşam Döngüsü politikası kullanın. S3 Object Lock'u 10 yıl boyunca uyumluluk modunda kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #54

Bir şirket, AWS'de birden fazla Windows iş yükü çalıştırıyor. Şirketin çalışanları, iki Amazon EC2 bulut sunucusunda barındırılan Windows dosya paylaşımlarını kullanıyor. Dosya paylaşımları verileri kendi aralarında senkronize eder ve kopya kopyaları korur. Şirket, kullanıcıların mevcut dosyalara erişme şeklini koruyan, yüksek düzeyde kullanılabilir ve dayanıklı bir depolama çözümü istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Tüm verileri Amazon S3'e taşıyın. Kullanıcıların dosyalara erişmesi için IAM kimlik doğrulamasını ayarlayın.

B. Bir Amazon S3 Dosya Ağ Geçidi kurun. S3 Dosya Ağ Geçidini mevcut EC2 bulut sunucularına bağlayın.

C. Dosya paylaşım ortamını Multi-AZ yapılandırmasıyla Windows Dosya Sunucusu için Amazon FSx'e genişletin. Tüm verileri Windows Dosya Sunucusu için FSx'e taşıyın.

D. Dosya paylaşım ortamını Multi-AZ yapılandırmasıyla Amazon Elastic File System'e (Amazon EFS) genişletin. Tüm verileri Amazon EFS'ye taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Dosya paylaşım ortamını Multi-AZ yapılandırmasıyla Windows Dosya Sunucusu için Amazon FSx'e genişletin. Tüm verileri Windows Dosya Sunucusu için FSx'e taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #55

Bir çözüm mimarı, birden çok alt ağ içeren bir VPC mimarisi geliştiriyor. Mimari, Amazon EC2 bulut sunucularını ve Amazon RDS DB bulut sunucularını kullanan uygulamaları barındıracak. Mimari, iki Erişilebilirlik Alanındaki altı alt ağdan oluşur. Her Erişilebilirlik Alanı, bir genel alt ağ, bir özel alt ağ ve veritabanları için ayrılmış bir alt ağ içerir. Yalnızca özel alt ağlarda çalışan EC2 bulut sunucuları RDS veritabanlarına erişebilir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Genel alt ağların CIDR bloklarına giden yolu hariç tutan yeni bir yol tablosu oluşturun. Rota tablosunu veritabanı alt ağlarıyla ilişkilendirin.

B. Genel alt ağlardaki örneklere atanan güvenlik grubundan gelen trafiği reddeden bir güvenlik grubu oluşturun. Güvenlik grubunu veritabanı bulut sunucularına ekleyin.

C. Özel alt ağlardaki örneklere atanan güvenlik grubundan gelen trafiğe izin veren bir güvenlik grubu oluşturun. Güvenlik grubunu veritabanı bulut sunucularına ekleyin.

D. Genel alt ağlar ile özel alt ağlar arasında yeni bir eşleme bağlantısı oluşturun. Özel alt ağlar ile veritabanı alt ağları arasında farklı bir eşleme bağlantısı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Özel alt ağlardaki örneklere atanan güvenlik grubundan gelen trafiğe izin veren bir güvenlik grubu oluşturun. Güvenlik grubunu veritabanı bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #56

Bir şirket, alan adını Amazon Route 53'e kaydettirdi. Şirket, arka uç mikro hizmet API'leri için genel arayüz olarak ca-central-1 Bölgesindeki Amazon API Gateway'i kullanıyor. Üçüncü taraf hizmetler API'leri güvenli bir şekilde kullanır. Şirket, üçüncü taraf hizmetlerinin HTTPS'yi kullanabilmesi için API Ağ Geçidi URL'sini şirketin alan adı ve ilgili sertifikayla tasarlamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Varsayılan URL'nin üzerine yazmak için API Gateway'de Name="Endpoint-URL" ve Value="Company Domain Name" ile aşama değişkenleri oluşturun. Şirketin alan adıyla ilişkili genel sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın.

B. Şirketin alan adıyla Route 53 DNS kayıtlarını oluşturun. Takma ad kaydını Bölgesel API Ağ Geçidi aşaması uç noktasına yönlendirin. Şirketin alan adıyla ilişkili genel sertifikayı us-east-1 Bölgesindeki AWS Sertifika Yöneticisine (ACM) aktarın.

C. Bölgesel API Ağ Geçidi uç noktası oluşturun. API Ağ Geçidi uç noktasını şirketin alan adıyla ilişkilendirin. Şirketin alan adıyla ilişkili genel sertifikayı aynı Bölgedeki AWS Sertifika Yöneticisine (ACM) aktarın. Sertifikayı API Ağ Geçidi uç noktasına ekleyin. Trafiği API Ağ Geçidi uç noktasına yönlendirmek için Route 53'ü yapılandırın.

D. Bölgesel API Ağ Geçidi uç noktası oluşturun. API Ağ Geçidi uç noktasını şirketin alan adıyla ilişkilendirin. Şirketin alan adıyla ilişkili genel sertifikayı us-east-1 Bölgesindeki AWS Sertifika Yöneticisine (ACM) aktarın. Sertifikayı API Ağ Geçidi API'lerine ekleyin. Şirketin alan adıyla Route 53 DNS kayıtları oluşturun. A kaydını şirketin alan adına yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bölgesel API Ağ Geçidi uç noktası oluşturun. API Ağ Geçidi uç noktasını şirketin alan adıyla ilişkilendirin. Şirketin alan adıyla ilişkili genel sertifikayı aynı Bölgedeki AWS Sertifika Yöneticisine (ACM) aktarın. Sertifikayı API Ağ Geçidi uç noktasına ekleyin. Trafiği API Ağ Geçidi uç noktasına yönlendirmek için Route 53'ü yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #57

Bir şirket popüler bir sosyal medya web sitesi işletiyor. Web sitesi, kullanıcılara diğer kullanıcılarla paylaşmak üzere resim yükleme olanağı sağlar. Şirket, görsellerin uygunsuz içerik içermediğinden emin olmak istiyor. Şirketin geliştirme çabalarını en aza indirecek bir çözüme ihtiyacı var. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygunsuz içeriği tespit etmek için Amazon Comprehend'i kullanın. Güvenilirliği düşük tahminler için gerçek kişi tarafından yapılan incelemeyi kullanın.

B. Uygunsuz içeriği tespit etmek için Amazon Rekognition'ı kullanın. Güvenilirliği düşük tahminler için gerçek kişi tarafından yapılan incelemeyi kullanın.

C. Uygunsuz içeriği tespit etmek için Amazon SageMaker'ı kullanın. Güvenilirliği düşük tahminleri etiketlemek için temel gerçeği kullanın.

D. Uygunsuz içeriği tespit etmek amacıyla özel bir makine öğrenimi modeli dağıtmak için AWS Fargate'i kullanın. Güvenilirliği düşük tahminleri etiketlemek için temel gerçeği kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Uygunsuz içeriği tespit etmek için Amazon Rekognition'ı kullanın. Güvenilirliği düşük tahminler için gerçek kişi tarafından yapılan incelemeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #58

Bir şirket, ölçeklenebilirlik ve kullanılabilirlik gereksinimlerini karşılamak için kritik uygulamalarını konteynerlerde çalıştırmak istiyor. Şirket, kritik uygulamaların bakımına odaklanmayı tercih ediyor. Şirket, konteynerli iş yükünü çalıştıran temel altyapının sağlanmasından ve yönetilmesinden sorumlu olmak istemiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Amazon EC2 bulut sunucularını kullanın ve bulut sunucularına Docker'ı yükleyin.

B. Amazon EC2 çalışan düğümlerinde Amazon Elastic Container Service'i (Amazon ECS) kullanın.

C. AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın.

D. Amazon Elastic Container Service (Amazon ECS) için optimize edilmiş Amazon Machine Image'dan (AMI) Amazon EC2 bulut sunucularını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #59

Bir şirket 300'den fazla küresel web sitesine ve uygulamaya ev sahipliği yapıyor. Şirket, her gün 30 TB'tan fazla tıklama akışı verisini analiz edecek bir platforma ihtiyaç duyuyor. Bir çözüm mimarı tıklama akışı verilerini iletmek ve işlemek için ne yapmalıdır?

A. Verileri bir Amazon S3 klasörüne arşivlemek için bir AWS Veri Hattı tasarlayın ve analitik oluşturmak için verilerle bir Amazon EMR kümesi çalıştırın.

B. Verileri işlemek ve analiz amacıyla kullanmak üzere Amazon Redshift'in Amazon S3 veri gölüne göndermek için Amazon EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu oluşturun.

C. Verileri Amazon CloudFront'ta önbelleğe alın. Verileri bir Amazon S3 klasöründe saklayın. S3 klasörüne bir nesne eklendiğinde. Verileri analiz amacıyla işlemek için bir AWS Lambda işlevi çalıştırın.

D. Verileri Amazon Kinesis Data Streams'ten toplayın. Verileri bir Amazon S3 data lake'e aktarmak için Amazon Kinesis Data Firehose'u kullanın. Analiz için verileri Amazon Redshift'e yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Verileri Amazon Kinesis Data Streams'den toplayın. Verileri bir Amazon S3 data lake'e aktarmak için Amazon Kinesis Data Firehose'u kullanın. Analiz için verileri Amazon Redshift'e yükleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #60

Bir şirketin AWS'de barındırılan bir web sitesi var. Web sitesi, HTTP ve HTTPS'yi ayrı ayrı işleyecek şekilde yapılandırılmış bir Uygulama Yük Dengeleyicisinin (ALB) arkasındadır. Şirket, isteklerin HTTPS kullanması için tüm istekleri web sitesine iletmek istiyor. Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. ALB'nin ağ ACL'sini yalnızca HTTPS trafiğini kabul edecek şekilde güncelleyin.

B. URL'deki HTTP'yi HTTPS ile değiştiren bir kural oluşturun.

C. HTTP trafiğini HTTPS'ye yönlendirmek için ALB'de bir dinleyici kuralı oluşturun.

D. ALB'yi, Sunucu Adı Göstergesini (SNI) kullanacak şekilde yapılandırılmış bir Ağ Yük Dengeleyici ile değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** HTTP trafiğini HTTPS'ye yönlendirmek için ALB'de bir dinleyici kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru #61

Bir şirket AWS'de iki katmanlı bir web uygulaması geliştiriyor. Şirketin geliştiricileri, uygulamayı doğrudan bir arka uç Amazon RDS veritabanına bağlanan bir Amazon EC2 örneğine dağıttı. Şirket, veritabanı kimlik bilgilerini uygulamada sabit kodlamamalıdır. Şirketin ayrıca veritabanı kimlik bilgilerini düzenli aralıklarla otomatik olarak döndürmek için bir çözüm uygulaması gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Veritabanı kimlik bilgilerini örnek meta verilerinde saklayın. RDS kimlik bilgilerini ve örnek meta verilerini aynı anda güncelleyen planlanmış bir AWS Lambda işlevini çalıştırmak için Amazon EventBridge (Amazon CloudWatch Events) kurallarını kullanın.

B. Veritabanı kimlik bilgilerini şifrelenmiş bir Amazon S3 klasöründeki bir yapılandırma dosyasında saklayın. RDS kimlik bilgilerini ve yapılandırma dosyasındaki kimlik bilgilerini aynı anda güncelleyen planlanmış bir AWS Lambda işlevini çalıştırmak için Amazon EventBridge (Amazon CloudWatch Events) kurallarını kullanın. Önceki değerlere geri dönülebilmesini sağlamak için S3 Sürüm Oluşturmayı kullanın.

C. Veritabanı kimlik bilgilerini AWS Secrets Manager'da gizli bilgi olarak saklayın. Gizli anahtar için otomatik döndürmeyi açın. Gizli diziye erişim izni vermek için gerekli izni EC2 rolüne ekleyin.

D. Veritabanı kimlik bilgilerini AWS Systems Manager Parametre Deposu'nda şifrelenmiş parametreler olarak saklayın. Şifrelenmiş parametreler için otomatik döndürmeyi açın. Şifrelenmiş parametrelere erişim izni vermek için gerekli izni EC2 rolüne ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Veritabanı kimlik bilgilerini AWS Secrets Manager'da gizli bilgi olarak saklayın. Gizli anahtar için otomatik döndürmeyi açın. Gizli diziye erişim izni vermek için gerekli izni EC2 rolüne ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #62

Bir şirket, AWS'ye yeni bir genel web uygulaması dağıtıyor. Uygulama bir Application Load Balancer (ALB) arkasında çalışacaktır. Uygulamanın, harici bir sertifika yetkilisi (CA) tarafından verilen bir SSL/TLS sertifikasıyla uçta şifrelenmesi gerekir. Sertifikanın süresi dolmadan önce sertifikanın her yıl dönüşümlü olarak değiştirilmesi gerekir. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. SSL/TLS sertifikası düzenlemek için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı ALB'ye uygulayın. Sertifikayı otomatik olarak döndürmek için yönetilen yenileme özelliğini kullanın.

B. SSL/TLS sertifikası düzenlemek için AWS Sertifika Yöneticisini (ACM) kullanın. Anahtar malzemeyi sertifikadan içe aktarın. Sertifikayı ALU'ya uygulayın Sertifikayı otomatik olarak döndürmek için yönetilen yenileme özelliğini kullanın.

C. Kök CA'dan bir SSL/TLS sertifikası düzenlemek için AWS Sertifika Yöneticisi (ACM) Özel Sertifika Yetkilisini kullanın. Sertifikayı ALB'ye uygulayın. Sertifikayı otomatik olarak döndürmek için yönetilen yenileme özelliğini kullanın.

D. SSL/TLS sertifikasını içe aktarmak için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı ALB'ye uygulayın. Sertifikanın süresi dolmaya yaklaştığında bildirim göndermek için Amazon EventBridge'i (Amazon CloudWatch Events) kullanın. Sertifikayı manuel olarak döndürün.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir SSL/TLS sertifikasını içe aktarmak için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı ALB'ye uygulayın. Sertifikanın süresi dolmaya yaklaştığında bildirim göndermek için Amazon EventBridge'i (Amazon CloudWatch Events) kullanın. Sertifikayı manuel olarak döndürün.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #63

Bir şirket, altyapısını AWS üzerinde çalıştırıyor ve belge yönetimi uygulaması için 700.000 kayıtlı kullanıcı tabanına sahip. Şirket, büyük .pdf dosyalarını .jpg resim dosyalarına dönüştüren bir ürün yaratmayı planlıyor. .pdf dosyalarının boyutu ortalama 5 MB'tır. Şirketin orijinal dosyaları ve dönüştürülen dosyaları saklaması gerekiyor. Bir çözüm mimarı, zaman içinde hızla artacak talebi karşılamak için ölçeklenebilir bir çözüm tasarlamalıdır. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. .pdf dosyalarını Amazon S3'e kaydedin. Dosyaları .jpg biçimine dönüştürmek ve bunları Amazon S3'te geri depolamak amacıyla bir AWS Lambda işlevini çağırmak için bir S3 PUT olayı yapılandırın.

B. .pdf dosyalarını Amazon DynamoD'ye kaydedin Dosyaları .jpg biçimine dönüştürmek ve tekrar DynamoDB'de depolamak amacıyla bir AWS Lambda işlevini çağırmak için DynamoDB Streams özelliğini kullanın.

C. .pdf dosyalarını Amazon EC2 bulut sunucularını, Amazon Elastic Block Store (Amazon EBS) depolama alanını ve Otomatik Ölçeklendirme grubunu içeren bir AWS Elastic Beanstalk uygulamasına yükleyin. Dosyaları .jpg biçimine dönüştürmek için EC2 bulut sunucularındaki bir programı kullanın. .pdf dosyalarını ve .jpg dosyalarını EBS mağazasına kaydedin.

D. .pdf dosyalarını Amazon EC2 bulut sunucularını, Amazon Elastic File System (Amazon EFS) depolama alanını ve Otomatik Ölçeklendirme grubunu içeren bir AWS Elastic Beanstalk uygulamasına yükleyin. Dosyayı .jpg biçimine dönüştürmek için EC2 bulut sunucularındaki bir programı kullanın. .pdf dosyalarını ve .jpg dosyalarını EBS mağazasına kaydedin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** .pdf dosyalarını Amazon S3'e kaydedin. Dosyaları .jpg biçimine dönüştürmek ve bunları Amazon S3'te geri depolamak amacıyla bir AWS Lambda işlevini çağırmak için bir S3 PUT olayı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #64

Bir şirketin, şirket içinde çalışan Windows dosya sunucularında 5 TB'tan fazla dosya verisi vardır. Kullanıcılar ve uygulamalar her gün verilerle etkileşime girer. Şirket, Windows iş yüklerini AWS'ye taşıyor. Şirket bu süreci sürdürürken, minimum gecikmeyle AWS'ye ve şirket içi dosya depolamaya erişime ihtiyaç duyuyor. Şirketin operasyonel ek yükü en aza indirecek ve mevcut dosya erişim modellerinde önemli değişiklikler gerektirmeyecek bir çözüme ihtiyacı var. Şirket, AWS'ye bağlantı için AWS Siteden Siteye VPN bağlantısı kullanıyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS'de Windows Dosya Sunucusu için Amazon FSx'i dağıtın ve yapılandırın. Şirket içi dosya verilerini Windows Dosya Sunucusu için FSx'e taşıyın. AWS'de Windows Dosya Sunucusu için FSx'i kullanacak şekilde iş yüklerini yeniden yapılandırın.

B. Şirket içinde bir Amazon S3 Dosya Ağ Geçidi dağıtın ve yapılandırın. Şirket içi dosya verilerini S3 Dosya Ağ Geçidine taşıyın. S3 Dosya Ağ Geçidini kullanmak için şirket içi iş yüklerini ve bulut iş yüklerini yeniden yapılandırın.

C. Şirket içinde bir Amazon S3 Dosya Ağ Geçidi dağıtın ve yapılandırın. Şirket içi dosya verilerini Amazon S3'e taşıyın. İş yüklerini doğrudan Amazon S3'ü veya S3 Dosya Ağ Geçidini kullanacak şekilde yeniden yapılandırın. her iş yükünün konumuna bağlı olarak.

D. AWS'de Windows Dosya Sunucusu için Amazon FSx'i dağıtın ve yapılandırın. Şirket içinde bir Amazon FSx Dosya Ağ Geçidi dağıtın ve yapılandırın. Şirket içi dosya verilerini FSx Dosya Ağ Geçidine taşıyın. Bulut iş yüklerini, AWS'de Windows Dosya Sunucusu için FSx'i kullanacak şekilde yapılandırın. FSx Dosya Ağ Geçidini kullanmak için şirket içi iş yüklerini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS'de Windows Dosya Sunucusu için Amazon FSx'i dağıtın ve yapılandırın. Şirket içinde bir Amazon FSx Dosya Ağ Geçidi dağıtın ve yapılandırın. Şirket içi dosya verilerini FSx Dosya Ağ Geçidine taşıyın. Bulut iş yüklerini, AWS'de Windows Dosya Sunucusu için FSx'i kullanacak şekilde yapılandırın. Şirket içi iş yüklerini FSx Dosya Ağ Geçidini kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #65

Bir hastane yakın zamanda Amazon API Gateway ve AWS Lambda ile bir RESTful API dağıttı. Hastane, PDF formatında ve JPEG formatındaki raporları yüklemek için API Gateway ve Lambda'yı kullanıyor. Hastanenin, raporlarda korunan sağlık bilgilerini (PHI) tanımlamak için Lambda kodunu değiştirmesi gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Raporlardan metin çıkarmak ve çıkarılan metinden PHI'yi belirlemek için mevcut Python kitaplıklarını kullanın.

B. Metni raporlardan çıkarmak için Amazon Textract'ı kullanın. Çıkarılan metinden PHI'yı tanımlamak için Amazon SageMaker'ı kullanın.

C. Metni raporlardan çıkarmak için Amazon Textract'ı kullanın. Çıkarılan metinden PHI'yı tanımlamak için Amazon Comprehen Medical'ı kullanın.

D. Metni raporlardan çıkarmak için Amazon Rekognition'ı kullanın. Çıkarılan metinden PHI'yı tanımlamak için Amazon Comprehen Medical'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Metni raporlardan çıkarmak için Amazon Textract'ı kullanın. Çıkarılan metinden PHI'yı tanımlamak için Amazon Comprehen Medical'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #66

Bir şirketin, her biri yaklaşık 5 MB boyutunda çok sayıda dosya oluşturan bir uygulaması vardır. Dosyalar Amazon S3'te depolanır. Şirket politikası, dosyaların silinmeden önce 4 yıl süreyle saklanmasını gerektirmektedir. Dosyalar, yeniden üretilmesi kolay olmayan kritik iş verilerini içerdiğinden, anında erişilebilirlik her zaman gereklidir. Dosyalara nesne oluşturulduktan sonraki ilk 30 günde sıklıkla erişilir, ancak ilk 30 günden sonra nadiren erişilir. Hangi depolama çözümü EN uygun maliyetlidir?

A. Dosyaları nesne oluşturulduktan 30 gün sonra S3 Standard'tan S3 Glacier'e taşımak için bir S3 klasör yaşam döngüsü ilkesi oluşturun. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.

B. Dosyaları, nesnenin oluşturulmasından 30 gün sonra S3 Standart'tan S3 Tek Bölgeli Sık Olmayan Erişime (S3 Tek Bölge-IA) taşımak için bir S3 klasör yaşam döngüsü politikası oluşturun. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.

C. Dosyaları, nesnenin oluşturulmasından itibaren 30 gün içinde S3 Standart'tan S3 Standart-Nadir Erişime (S3 Standart-IA) taşımak için bir S3 klasör yaşam döngüsü ilkesi oluşturun. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.

D. Dosyaları, nesnenin oluşturulmasından itibaren 30 gün içinde S3 Standart'tan S3 Standart-Nadir Erişime (S3 Standart-IA) taşımak için bir S3 klasör yaşam döngüsü politikası oluşturun. Dosyaları, nesne oluşturulduktan 4 yıl sonra S3 Glacier'a taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Dosyaları, nesnenin oluşturulmasından itibaren 30 gün içinde S3 Standart'tan S3 Standart-Seyrek Erişime (S3 Standart-IA) taşımak için bir S3 klasör yaşam döngüsü ilkesi oluşturun. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #67

Bir şirket, bir uygulamayı birden fazla Amazon EC2 bulut sunucusunda barındırıyor. Uygulama, bir Amazon SQS kuyruğundaki mesajları işler, bir Amazon RDS tablosuna yazar ve mesajı kuyruktan siler. RDS tablosunda ara sıra yinelenen kayıtlar bulunur. SQS kuyruğu herhangi bir yinelenen ileti içermiyor. Bir çözüm mimarı mesajların yalnızca bir kez işlenmesini sağlamak için ne yapmalıdır?

A. Yeni bir kuyruk oluşturmak için CreateQueue API çağrısını kullanın.

B. Uygun izinleri eklemek için AddPermission API çağrısını kullanın.

C. Uygun bir bekleme süresi ayarlamak için ReceiveMessage API çağrısını kullanın.

D. Görünürlük zaman aşımını artırmak için ChangeMessageVisibility API çağrısını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Görünürlük zaman aşımını artırmak için ChangeMessageVisibility API çağrısını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #68

Bir çözüm mimarı, bir şirketin şirket içi altyapısını AWS'ye genişletmek için yeni bir hibrit mimari tasarlıyor. Şirket, bir AWS Bölgesiyle tutarlı olarak düşük gecikme süresine sahip, yüksek düzeyde erişilebilir bir bağlantıya ihtiyaç duyuyor. Şirketin maliyetleri en aza indirmesi gerekiyor ve birincil bağlantı başarısız olursa daha yavaş trafiği kabul etmeye hazır. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. Birincil Doğrudan Bağlantı bağlantısı başarısız olursa yedek olarak bir VPN bağlantısı sağlayın.

B. Özel bağlantı için bir Bölgeye VPN tünel bağlantısı sağlayın. Özel bağlantı için ve birincil VPN bağlantısı başarısız olursa yedek olarak ikinci bir VPN tüneli sağlayın.

C. Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. Birincil Doğrudan Bağlantı bağlantısı başarısız olursa aynı Bölgeye yedek olarak ikinci bir Doğrudan Bağlantı bağlantısı sağlayın.

D. Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. Birincil Direct Connect bağlantısının başarısız olması durumunda otomatik olarak bir yedek bağlantı oluşturmak için AWS CLI'deki Direct Connect yük devretme özelliğini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. Birincil Doğrudan Bağlantı bağlantısı başarısız olursa yedek olarak bir VPN bağlantısı sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #69

Bir şirket, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında iş açısından kritik bir web uygulaması çalıştırıyor. EC2 bulut sunucuları Otomatik Ölçeklendirme grubundadır. Uygulama, tek bir Erişilebilirlik Alanında dağıtılan bir Amazon Aurora PostgreSQL veritabanını kullanır. Şirket, uygulamanın minimum kesinti süresi ve minimum veri kaybıyla yüksek düzeyde kullanılabilir olmasını istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel çabayla karşılayacak?

A. EC2 bulut sunucularını farklı AWS Bölgelerine yerleştirin. Trafiği yönlendirmek için Amazon Route 53 durum kontrollerini kullanın. Aurora PostgreSQL Bölgeler Arası Çoğaltma'yı kullanın.

B. Otomatik Ölçeklendirme grubunu birden çok Erişilebilirlik Alanını kullanacak şekilde yapılandırın. Veritabanını Multi-AZ olarak yapılandırın. Veritabanı için bir Amazon RDS Proxy örneği yapılandırın.

C. Otomatik Ölçeklendirme grubunu tek bir Erişilebilirlik Alanı kullanacak şekilde yapılandırın. Veritabanının saatlik anlık görüntülerini oluşturun. Arıza durumunda veritabanını anlık görüntülerden kurtarın.

D. Otomatik Ölçeklendirme grubunu birden çok AWS Bölgesini kullanacak şekilde yapılandırın. Uygulamadaki verileri Amazon S3'e yazın. Verileri veritabanına yazmak üzere bir AWS Lambda işlevini başlatmak için S3 Olay Bildirimlerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunu birden çok Erişilebilirlik Alanını kullanacak şekilde yapılandırın. Veritabanını Multi-AZ olarak yapılandırın. Veritabanı için bir Amazon RDS Proxy örneği yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #70

Bir şirketin HTTP uygulaması bir Ağ Yük Dengeleyicisinin (NLB) arkasındadır. NLB'nin hedef grubu, web hizmetini çalıştıran birden fazla EC2 bulut sunucusuna sahip bir Amazon EC2 Auto Scaling grubunu kullanacak şekilde yapılandırılmıştır. Şirket, NLB'nin uygulama için HTTP hatalarını algılamadığını fark eder. Bu hatalar, web hizmetini çalıştıran EC2 bulut sunucularının manuel olarak yeniden başlatılmasını gerektirir. Şirketin, özel komut dosyaları veya kodlar yazmadan uygulamanın kullanılabilirliğini iyileştirmesi gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Şirketin uygulamasının URL'sini sağlayarak NLB'de HTTP durum kontrollerini etkinleştirin.

B. Yerel uygulamanın günlüklerini dakikada bir kontrol etmek için EC2 örneklerine bir cron işi ekleyin. HTTP hataları tespit edilirse. uygulama yeniden başlatılacaktır.

C. NLB'yi bir Application Load Balancer ile değiştirin. Şirketin uygulamasının URL'sini sağlayarak HTTP durum kontrollerini etkinleştirin. Sağlıksız örnekleri değiştirmek için bir Otomatik Ölçeklendirme eylemi yapılandırın.

D. NLB için UnhealthyHostCount ölçümünü izleyen bir Amazon Cloud Watch alarmı oluşturun. Alarm ALARM durumundayken sağlıksız örnekleri değiştirmek için bir Otomatik Ölçeklendirme eylemi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** NLB'yi bir Application Load Balancer ile değiştirin. Şirketin uygulamasının URL'sini sağlayarak HTTP durum kontrollerini etkinleştirin. Sağlıksız örnekleri değiştirmek için bir Otomatik Ölçeklendirme eylemi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #71

Bir şirket, müşteri bilgilerini depolamak için Amazon DynamoDB'yi kullanan bir alışveriş uygulaması çalıştırıyor. Verilerin bozulması durumunda, çözüm mimarının 15 dakikalık kurtarma noktası hedefini (RPO) ve 1 saatlik kurtarma süresi hedefini (RTO) karşılayan bir çözüm tasarlaması gerekir. Çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. DynamoDB global tablolarını yapılandırın. RPO kurtarma için uygulamayı farklı bir AWS Bölgesine yönlendirin.

B. DynamoDB belirli bir noktaya kurtarmayı yapılandırın. RPO kurtarma için, zamanda istenilen noktaya geri yükleme yapın.

C. DynamoDB verilerini günlük olarak Amazon S3 Glacier'a aktarın. RPO kurtarma için verileri S3 Glacier'dan DynamoDB'ye aktarın.

D. DynamoDB tablosu için Amazon Elastic Block Store (Amazon EBS) anlık yedeklerini her 15 dakikada bir planlayın. RPO kurtarma için EBS anlık görüntüsünü kullanarak DynamoDB tablosunu geri yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** DynamoDB belirli bir noktaya kurtarmayı yapılandırın. RPO kurtarma için, zamanda istenilen noktaya geri yükleme yapın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #72

Bir şirket, aynı AWS Bölgesinde bulunan Amazon S3 klasörlerinden resimleri sık sık yüklemesi ve indirmesi gereken bir fotoğraf işleme uygulaması çalıştırıyor. Bir çözüm mimarı, veri aktarım ücretlerinde maliyetin arttığını fark etti ve bu maliyetleri azaltacak bir çözüm uygulaması gerekiyor. Çözüm mimarı bu gereksinimi nasıl karşılayabilir?

A. Amazon API Gateway'i genel bir alt ağa dağıtın ve yönlendirme tablosunu S3 çağrılarını bu alt ağ üzerinden yönlendirecek şekilde ayarlayın.

B. Genel bir alt ağa bir NAT ağ geçidi dağıtın ve S3 klasörlerine erişime izin veren bir uç nokta politikası ekleyin.

C. Uygulamayı genel bir alt ağa dağıtın ve S3 klasörlerine erişmek için bir internet ağ geçidi üzerinden yönlendirmesine izin verin.

D. VPC'ye bir S3 VPC ağ geçidi uç noktası dağıtın ve S3 klasörlerine erişime izin veren bir uç nokta politikası ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** VPC'ye bir S3 VPC ağ geçidi uç noktası dağıtın ve S3 paketlerine erişime izin veren bir uç nokta politikası ekleyin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #73

Bir şirket yakın zamanda özel bir alt ağda Amazon EC2'de Linux tabanlı uygulama bulut sunucularını başlattı ve bir VPC'nin genel alt ağında yer alan bir Amazon EC2 bulut sunucusunda Linux tabanlı bir kale ana bilgisayarı başlattı. Bir çözüm mimarının şirket içi ağdan şirketin internet bağlantısı aracılığıyla savunma ana bilgisayarına ve uygulama sunucularına bağlanması gerekir. Çözüm mimarı, tüm EC2 bulut sunucularının güvenlik gruplarının bu erişime izin vereceğinden emin olmalıdır. Çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Savunma ana bilgisayarının mevcut güvenlik grubunu, yalnızca uygulama örneklerinden gelen erişime izin veren bir grupla değiştirin.

B. Savunma ana bilgisayarının mevcut güvenlik grubunu, yalnızca şirketin dahili IP aralığından gelen erişime izin veren bir grupla değiştirin.

C. Savunma ana bilgisayarının mevcut güvenlik grubunu, yalnızca şirket için harici IP aralığından gelen erişime izin veren bir grupla değiştirin.

D. Uygulama örneklerinin mevcut güvenlik grubunu, yalnızca savunma ana bilgisayarının özel IP adresinden gelen SSH erişimine izin veren bir grupla değiştirin.

E. Uygulama örneklerinin mevcut güvenlik grubunu, yalnızca savunma ana bilgisayarının genel IP adresinden gelen SSH erişimine izin veren bir grupla değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** Savunma ana bilgisayarının mevcut güvenlik grubunu, yalnızca şirket için harici IP aralığından gelen erişime izin veren bir grupla değiştirin. Uygulama örneklerinin mevcut güvenlik grubunu, yalnızca savunma ana bilgisayarının özel IP adresinden gelen SSH erişimine izin veren bir grupla değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #74

Bir çözüm mimarı iki katmanlı bir web uygulaması tasarlıyor. Uygulama, Amazon EC2'de genel alt ağlarda barındırılan, herkese açık bir web katmanından oluşur. Veritabanı katmanı, özel bir alt ağda Amazon EC2 üzerinde çalışan Microsoft SQL Server'dan oluşur. Güvenlik şirket için yüksek bir önceliktir. Bu durumda güvenlik grupları nasıl yapılandırılmalıdır? (İki tane seçin.)

A. Web katmanı için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın.

B. Web katmanı için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan giden trafiğe izin verecek şekilde yapılandırın.

C. Web katmanı güvenlik grubundan 1433 numaralı bağlantı noktasında gelen trafiğe izin vermek için veritabanı katmanı güvenlik grubunu yapılandırın.

D. Veritabanı katmanı güvenlik grubunu, 443 ve 1433 numaralı bağlantı noktalarından web katmanı güvenlik grubuna giden trafiğe izin verecek şekilde yapılandırın.

E. Web katmanı güvenlik grubundan 443 ve 1433 numaralı bağlantı noktalarına gelen trafiğe izin vermek için veritabanı katmanı güvenlik grubunu yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Web katmanı için güvenlik grubunu, 443 numaralı bağlantı noktasında 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın. Web katmanı güvenlik grubundan 1433 numaralı bağlantı noktasında gelen trafiğe izin vermek için veritabanı katmanı güvenlik grubunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #75

Bir şirket, uygulamanın performansını artırmak için çok katmanlı bir uygulamayı şirket içinden AWS Cloud'a taşımak istiyor. Uygulama, RESTful servisleri aracılığıyla birbirleriyle iletişim kuran uygulama katmanlarından oluşur. Bir katman aşırı yüklendiğinde işlemler iptal edilir. Bir çözüm mimarı, bu sorunları çözen ve uygulamayı modernleştiren bir çözüm tasarlamalıdır. Hangi çözüm bu gereksinimleri karşılıyor ve operasyonel açıdan EN verimli olanıdır?

A. Amazon API Gateway'i kullanın ve işlemleri uygulama katmanı olarak AWS Lambda işlevlerine yönlendirin. Uygulama hizmetleri arasındaki iletişim katmanı olarak Amazon Simple Queue Service'i (Amazon SQS) kullanın.

B. Performans arızaları sırasında sunucuların en yüksek kullanımını belirlemek amacıyla uygulama performans geçmişini analiz etmek için Amazon CloudWatch ölçümlerini kullanın. En yüksek gereksinimleri karşılamak için uygulama sunucusunun Amazon EC2 bulut sunucularının boyutunu artırın.

C. Bir Otomatik Ölçeklendirme grubunda Amazon EC2 üzerinde çalışan uygulama sunucuları arasındaki mesajlaşmayı yönetmek için Amazon Simple Notification Service'i (Amazon SNS) kullanın. SNS kuyruğu uzunluğunu izlemek ve ölçeği gerektiği gibi artırmak ve azaltmak için Amazon CloudWatch'u kullanın.

D. Bir Otomatik Ölçeklendirme grubunda Amazon EC2 üzerinde çalışan uygulama sunucuları arasındaki mesajlaşmayı yönetmek için Amazon Simple Queue Service'i (Amazon SQS) kullanın. SQS kuyruk uzunluğunu izlemek ve iletişim hataları tespit edildiğinde ölçeği büyütmek için Amazon CloudWatch'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon API Gateway'i kullanın ve işlemleri uygulama katmanı olarak AWS Lambda işlevlerine yönlendirin. Uygulama hizmetleri arasındaki iletişim katmanı olarak Amazon Simple Queue Service'i (Amazon SQS) kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #76

Bir şirket, tek bir fabrikada bulunan çeşitli makinelerden her gün 10 TB enstrümantasyon verisi alıyor. Veriler, fabrikada bulunan şirket içi bir veri merkezindeki depolama alanı ağında (SAN) depolanan JSON dosyalarından oluşur. Şirket, bu verileri, gerçek zamanlıya yakın kritik analizler sağlayan birkaç ek sistem tarafından erişilebileceği Amazon S3'e göndermek istiyor. Veriler hassas kabul edildiğinden güvenli bir aktarım önemlidir. Hangi çözüm EN güvenilir veri aktarımını sunar?

A. Genel internet üzerinden AWS DataSync

B. AWS Direct Connect üzerinden AWS DataSync

C. Herkese açık internet üzerinden AWS Database Migration Service (AWS DMS)

D. AWS Direct Connect üzerinden AWS Veritabanı Geçiş Hizmeti (AWS DMS)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Direct Connect üzerinden AWS DataSync
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #77

Bir şirketin uygulaması için gerçek zamanlı bir veri alma mimarisi yapılandırması gerekir. Şirketin bir API'ye, veri akışı sırasında verileri dönüştüren bir sürece ve veriler için bir depolama çözümüne ihtiyacı var. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon Kinesis veri akışına veri gönderen bir API'yi barındırmak için bir Amazon EC2 bulut sunucusu dağıtın. Veri kaynağı olarak Kinesis veri akışını kullanan bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri dönüştürmek için AWS Lambda işlevlerini kullanın. Verileri Amazon S3'e göndermek için Kinesis Data Firehose dağıtım akışını kullanın.

B. AWS Glue'ya veri gönderen bir API'yi barındırmak için bir Amazon EC2 bulut sunucusu dağıtın. EC2 örneğinde kaynak/hedef kontrolünü durdurun. Verileri dönüştürmek ve verileri Amazon S3'e göndermek için AWS Glue'yu kullanın.

C. Amazon Kinesis veri akışına veri göndermek için bir Amazon API Gateway API'yi yapılandırın. Veri kaynağı olarak Kinesis veri akışını kullanan bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri dönüştürmek için AWS Lambda işlevlerini kullanın. Verileri Amazon S3'e göndermek için Kinesis Data Firehose dağıtım akışını kullanın.

D. AWS Glue'ya veri göndermek için bir Amazon API Gateway API'si yapılandırın. Verileri dönüştürmek için AWS Lambda işlevlerini kullanın. Verileri Amazon S3'e göndermek için AWS Glue'yu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Kinesis veri akışına veri göndermek için bir Amazon API Gateway API'yi yapılandırın. Veri kaynağı olarak Kinesis veri akışını kullanan bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri dönüştürmek için AWS Lambda işlevlerini kullanın. Verileri Amazon S3'e göndermek için Kinesis Data Firehose dağıtım akışını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #78

Bir şirketin kullanıcı işlem verilerini bir Amazon DynamoDB tablosunda tutması gerekir. Şirketin verileri 7 yıl boyunca saklaması gerekiyor. Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. Tabloyu sürekli olarak yedeklemek için DynamoDB belirli bir noktaya kurtarmayı kullanın.

B. Tabloya yönelik yedekleme planları ve saklama politikaları oluşturmak için AWS Backup'ı kullanın.

C. DynamoDB konsolunu kullanarak tablonun isteğe bağlı yedeğini oluşturun. Yedeği bir Amazon S3 klasöründe saklayın. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

D. Bir AWS Lambda işlevini çağırmak için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun. Tabloyu yedeklemek ve yedeği bir Amazon S3 klasöründe depolamak için Lambda işlevini yapılandırın. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tabloya yönelik yedekleme programları ve saklama politikaları oluşturmak için AWS Backup'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #79

Bir şirket veri depolama için Amazon DynamoDB tablosu kullanmayı planlıyor. Şirket maliyet optimizasyonu konusunda endişeli. Masa çoğu sabah kullanılmayacak. Akşamları okuma ve yazma trafiği genellikle tahmin edilemez olacaktır. Trafikte ani artışlar meydana geldiğinde, bunlar çok hızlı bir şekilde gerçekleşecektir. Bir çözüm mimarı ne tavsiye etmelidir?

A. İsteğe bağlı kapasite modunda bir DynamoDB tablosu oluşturun.

B. Global ikincil dizine sahip bir DynamoDB tablosu oluşturun.

C. Sağlanan kapasiteye ve otomatik ölçeklendirmeye sahip bir DynamoDB tablosu oluşturun.

D. Sağlanan kapasite modunda bir DynamoDB tablosu oluşturun ve bunu genel bir tablo olarak yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İsteğe bağlı kapasite modunda bir DynamoDB tablosu oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #80

Bir şirket yakın zamanda bir uygulama geçişi girişimine yardımcı olmak için bir AWS Yönetilen Hizmet Sağlayıcısı (MSP) İş Ortağıyla bir sözleşme imzaladı. Çözüm mimarının mevcut bir AWS hesabındaki Amazon Machine Image'ı (AMI) MSP İş Ortağının AWS hesabıyla paylaşması gerekir. AMI, Amazon Elastic Block Store (Amazon EBS) tarafından desteklenir ve EBS birim anlık yedeklerini şifrelemek için AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar kullanır. Çözüm mimarının AMI'yi MSP İş Ortağının AWS hesabıyla paylaşmasının EN güvenli yolu nedir?

A. Şifrelenmiş AMI'yi ve anlık görüntüleri herkesin kullanımına açık hale getirin. MSP İş Ortağının AWS hesabının anahtarı kullanmasına izin vermek için anahtar politikasını değiştirin.

B. AMI'nin launchPermission özelliğini değiştirin. AMI'yi yalnızca MSP İş Ortağının AWS hesabıyla paylaşın. MSP İş Ortağının AWS hesabının anahtarı kullanmasına izin vermek için anahtar politikasını değiştirin.

C. AMI'nin launchPermission özelliğini değiştirin. AMI'yi yalnızca MSP İş Ortağının AWS hesabıyla paylaşın. Şifreleme için MSP Ortağının sahip olduğu yeni bir KMS anahtarına güvenmek için anahtar ilkesini değiştirin.

D. AMI'yi kaynak hesaptan MSP İş Ortağının AWS hesabındaki bir Amazon S3 klasörüne aktarın, S3 klasörünü MSP İş Ortağına ait olan yeni bir KMS anahtarıyla şifreleyin. AMI'yi MSP İş Ortağının AWS hesabına kopyalayıp başlatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AMI'nin launchPermission özelliğini değiştirin. AMI'yi yalnızca MSP İş Ortağının AWS hesabıyla paylaşın. MSP İş Ortağının AWS hesabının anahtarı kullanmasına izin vermek için anahtar politikasını değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #81

Bir çözüm mimarı, AWS'de dağıtılan yeni bir uygulama için bulut mimarisini tasarlıyor. İşlenecek işlerin sayısına bağlı olarak gerektiği şekilde uygulama düğümleri eklenirken ve kaldırılırken süreç paralel olarak çalışmalıdır. İşlemci uygulaması durum bilgisine sahip değildir. Çözüm mimarı, uygulamanın gevşek bir şekilde bağlandığından ve iş öğelerinin dayanıklı bir şekilde depolandığından emin olmalıdır. Çözüm mimarı hangi tasarımı kullanmalıdır?

A. İşlenmesi gereken işleri göndermek için bir Amazon SNS konusu oluşturun. İşlemci uygulamasından oluşan bir Amazon Machine Image (AMI) oluşturun. AMI'yi kullanan bir başlatma yapılandırması oluşturun. Başlatma yapılandırmasını kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. CPU kullanımına göre düğüm eklemek ve kaldırmak için Otomatik Ölçeklendirme grubunun ölçeklendirme ilkesini ayarlayın.

B. İşlenmesi gereken işleri tutmak için bir Amazon SQS kuyruğu oluşturun. İşlemci uygulamasından oluşan bir Amazon Machine Image (AMI) oluşturun. AMI'yi kullanan bir başlatma yapılandırması oluşturun. Başlatma yapılandırmasını kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Ağ kullanımına göre düğüm eklemek ve kaldırmak için Otomatik Ölçeklendirme grubunun ölçeklendirme ilkesini ayarlayın.

C. İşlenmesi gereken işleri tutmak için bir Amazon SQS kuyruğu oluşturun. İşlemci uygulamasından oluşan bir Amazon Machine Image (AMI) oluşturun. AMI'yi kullanan bir başlatma şablonu oluşturun. Başlatma şablonunu kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Otomatik Ölçeklendirme grubunun ölçeklendirme ilkesini, SQS kuyruğundaki öğe sayısına göre düğüm ekleyip kaldıracak şekilde ayarlayın.

D. İşlenmesi gereken işleri göndermek için bir Amazon SNS konusu oluşturun. İşlemci uygulamasından oluşan bir Amazon Machine Image (AMI) oluşturun. AMI'yi kullanan bir başlatma şablonu oluşturun. Başlatma şablonunu kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Otomatik Ölçeklendirme grubu için ölçeklendirme ilkesini, SNS konusuna yayınlanan mesaj sayısına göre düğüm ekleyip kaldıracak şekilde ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İşlenmesi gereken işleri tutmak için bir Amazon SQS kuyruğu oluşturun. İşlemci uygulamasından oluşan bir Amazon Machine Image (AMI) oluşturun. AMI'yi kullanan bir başlatma şablonu oluşturun. Başlatma şablonunu kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Otomatik Ölçeklendirme grubunun ölçeklendirme ilkesini, SQS kuyruğundaki öğe sayısına göre düğüm ekleyip kaldıracak şekilde ayarlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #82

Bir şirket web uygulamalarını AWS Cloud'da barındırır. Şirket, Elastic Load Balancer'ları AWS Sertifika Yöneticisine (ACM) aktarılan sertifikaları kullanacak şekilde yapılandırıyor. Her sertifikanın geçerlilik süresi dolmadan 30 gün önce şirketin güvenlik ekibine bilgi verilmesi gerekmektedir. Bir çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

A. Herhangi bir sertifikanın süresinin dolmasından 30 gün önce başlayarak her gün bir Amazon Simple Notification Service (Amazon SNS) konusuna özel bir mesaj yayınlamak için ACM'ye bir kural ekleyin.

B. Süresi 30 gün içinde dolacak sertifikaları kontrol eden bir AWS Config kuralı oluşturun. AWS Config uyumlu olmayan bir kaynak bildirdiğinde Amazon Simple Notification Service (Amazon SNS) yoluyla özel bir uyarı çağıracak şekilde Amazon EventBridge'i (Amazon CloudWatch Events) yapılandırın.

C. Süresi 30 gün içinde dolacak sertifikaları kontrol etmek için AWS Trusted Advisor'ı kullanın. Durum değişikliklerini kontrol etmek için Trusted Advisor ölçümlerini temel alan bir Amazon CloudWatch alarmı oluşturun. Alarmı, Amazon Simple Notification Service (Amazon SNS) yoluyla özel bir uyarı gönderecek şekilde yapılandırın.

D. Süresi 30 gün içinde dolacak sertifikaları tespit etmek için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun. Kuralı bir AWS Lambda işlevini çağıracak şekilde yapılandırın. Lambda işlevini, Amazon Simple Notification Service (Amazon SNS) yoluyla özel bir uyarı gönderecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Süresi 30 gün içinde dolacak sertifikaları kontrol eden bir AWS Config kuralı oluşturun. AWS Config uyumlu olmayan bir kaynak bildirdiğinde Amazon Simple Notification Service (Amazon SNS) yoluyla özel bir uyarı çağıracak şekilde Amazon EventBridge'i (Amazon CloudWatch Events) yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru #83

Bir şirketin dinamik web sitesi, Amerika Birleşik Devletleri'ndeki şirket içi sunucular kullanılarak barındırılmaktadır. Şirket, ürününü Avrupa'da piyasaya sürüyor ve yeni Avrupalı ​​kullanıcılar için site yükleme sürelerini optimize etmek istiyor. Sitenin arka ucu Amerika Birleşik Devletleri'nde kalmalıdır. Ürün birkaç gün içinde piyasaya sürülecek ve acil bir çözüme ihtiyaç var. Çözüm mimarı ne tavsiye etmelidir?

A. us-east-1'de bir Amazon EC2 bulut sunucusu başlatın ve siteyi buraya taşıyın.

B. Web sitesini Amazon S3'e taşıyın. Bölgeler arasında Bölgeler Arası Çoğaltma kullanın.

C. Amazon CloudFront'u şirket içi sunuculara işaret eden özel bir kaynakla kullanın.

D. Şirket içi sunuculara işaret eden bir Amazon Route 53 coğrafi yakınlık yönlendirme politikası kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon CloudFront'u şirket içi sunuculara işaret eden özel bir kaynakla kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #84

Bir şirket mevcut üç katmanlı web mimarisinin maliyetini azaltmak istiyor. Web, uygulama ve veritabanı sunucuları, geliştirme, test ve üretim ortamları için Amazon EC2 bulut sunucularında çalışır. EC2 bulut sunucuları yoğun saatlerde ortalama %30 CPU kullanımına ve yoğun olmayan saatlerde ise %10 CPU kullanımına sahiptir. Üretim EC2 bulut sunucuları günde 24 saat çalışır. EC2 geliştirme ve test bulut sunucuları her gün en az 8 saat çalışır. Şirket, EC2 bulut sunucularının kullanılmadığı zamanlarda geliştirilmesini durdurmak ve test etmek için otomasyon uygulamayı planlıyor. Hangi EC2 bulut sunucusu satın alma çözümü şirketin gereksinimlerini EN uygun maliyetle karşılayacaktır?

A. Üretim EC2 bulut sunucuları için Spot Bulut Sunucularını kullanın. EC2 bulut sunucularını geliştirmek ve test etmek için Rezerve Bulut Sunucularını kullanın.

B. Üretim EC2 bulut sunucuları için Rezerve Bulut Sunucularını kullanın. EC2 bulut sunucularını geliştirmek ve test etmek için İsteğe Bağlı Bulut Sunucularını kullanın.

C. Üretim EC2 bulut sunucuları için Spot blokları kullanın. EC2 bulut sunucularını geliştirmek ve test etmek için Rezerve Bulut Sunucularını kullanın.

D. Üretim EC2 bulut sunucuları için İsteğe Bağlı Bulut Sunucularını kullanın. EC2 bulut sunucularını geliştirmek ve test etmek için Spot blokları kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Üretim EC2 bulut sunucuları için Rezerve Bulut Sunucularını kullanın. EC2 bulut sunucularını geliştirmek ve test etmek için İsteğe Bağlı Bulut Sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru #85

Bir şirketin, kullanıcıların belgeleri bir web arayüzü veya mobil uygulama aracılığıyla yüklediği bir üretim web uygulaması vardır. Yeni yönetmelik gereği. yeni belgeler kaydedildikten sonra değiştirilemez veya silinemez. Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Yüklenen belgeleri, S3 Sürüm Oluşturma ve S3 Object Lock etkinleştirilmiş bir Amazon S3 klasöründe saklayın.

B. Yüklenen belgeleri bir Amazon S3 klasöründe saklayın. Belgeleri düzenli aralıklarla arşivlemek için bir S3 Yaşam Döngüsü ilkesi yapılandırın.

C. Yüklenen belgeleri S3 Sürüm Oluşturma etkinleştirilmiş bir Amazon S3 klasöründe saklayın. Tüm erişimi salt okunur olarak kısıtlamak için bir ACL yapılandırın.

D. Yüklenen belgeleri bir Amazon Elastic File System (Amazon EFS) biriminde saklayın. Birimi salt okunur modda bağlayarak verilere erişin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Yüklenen belgeleri S3 Sürüm Oluşturma ve S3 Object Lock etkinleştirilmiş bir Amazon S3 klasöründe saklayın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.

---

---

Soru #86

Bir şirketin, sık sık ortak bir Amazon RDS MySQL Multi-AZ veritabanı bulut sunucusuna erişmesi gereken birkaç web sunucusu vardır. Şirket, web sunucularının veritabanına bağlanması için güvenli bir yöntem isterken aynı zamanda kullanıcı kimlik bilgilerinin sık sık değiştirilmesine yönelik güvenlik gereksinimini de karşılamak istiyor. Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanı kullanıcısı kimlik bilgilerini AWS Secrets Manager'da saklayın. Web sunucularının AWS Secrets Manager'a erişmesine izin vermek için gerekli IAM izinlerini verin.

B. Veritabanı kullanıcısı kimlik bilgilerini AWS Systems Manager OpsCenter'da saklayın. Web sunucularının OpsCenter'a erişmesine izin vermek için gerekli IAM izinlerini verin.

C. Veritabanı kullanıcısı kimlik bilgilerini güvenli bir Amazon S3 klasöründe saklayın. Web sunucularının kimlik bilgilerini almasına ve veritabanına erişmesine izin vermek için gerekli IAM izinlerini verin.

D. Veritabanı kullanıcısı kimlik bilgilerini, web sunucusu dosya sistemindeki AWS Key Management Service (AWS KMS) ile şifrelenmiş dosyalarda saklayın. Web sunucusu dosyaların şifresini çözebilmeli ve veritabanına erişebilmelidir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanı kullanıcısı kimlik bilgilerini AWS Secrets Manager'da saklayın. Web sunucularının AWS Secrets Manager'a erişmesine izin vermek için gerekli IAM izinlerini verin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru #87

Bir şirket, Amazon API Gateway API'si tarafından çağrılan AWS Lambda işlevlerinde bir uygulamayı barındırıyor. Lambda işlevleri, müşteri verilerini bir Amazon Aurora MySQL veritabanına kaydeder. Şirket veritabanını her yükselttiğinde Lambda işlevleri, yükseltme tamamlanana kadar veritabanı bağlantıları kuramıyor. Sonuç olarak bazı etkinlikler için müşteri verileri kaydedilmemektedir. Bir çözüm mimarının, veritabanı yükseltmeleri sırasında oluşturulan müşteri verilerini depolayan bir çözüm tasarlaması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevleri ile veritabanı arasında yer alacak bir Amazon RDS proxy'si sağlayın. RDS proxy'sine bağlanmak için Lambda işlevlerini yapılandırın.

B. Lambda fonksiyonlarının çalışma süresini maksimuma çıkarın. Müşteri verilerini veritabanında saklayan kodda bir yeniden deneme mekanizması oluşturun.

C. Müşteri verilerini Lambda yerel depolama alanında kalıcı hale getirin. Müşteri verilerini veritabanına kaydetmek amacıyla yerel depolamayı tarayacak yeni Lambda işlevlerini yapılandırın.

D. Müşteri verilerini bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğunda saklayın. Kuyruğu yoklayan ve müşteri verilerini veritabanında saklayan yeni bir Lambda işlevi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Müşteri verilerini bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğunda depolayın. Kuyruğu yoklayan ve müşteri verilerini veritabanında saklayan yeni bir Lambda işlevi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #88

Bir araştırma şirketi birkaç yıldır Amerika Birleşik Devletleri'ndeki bölgelerden veri topluyor. Şirket, verileri 3 TB boyutunda ve giderek büyüyen bir Amazon S3 klasöründe barındırıyor. Şirket, verileri S3 paketlerine sahip Avrupalı ​​bir pazarlama firmasıyla paylaşmaya başladı. Şirket, veri aktarım maliyetlerinin mümkün olduğunca düşük kalmasını sağlamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin S3 klasöründe Talep Eden Ödemeler özelliğini yapılandırın.

B. S3 Bölgeler Arası Çoğaltmayı şirketin S3 klasöründen pazarlama firmasının S3 klasörlerinden birine yapılandırın.

C. Pazarlama firmasının şirketin S3 grubuna erişebilmesi için pazarlama firmasının hesaplar arası erişimini yapılandırın.

D. Şirketin S3 grubunu S3 Akıllı Katmanlamayı kullanacak şekilde yapılandırın. S3 grubunu pazarlama firmasının S3 gruplarından biriyle senkronize edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Şirketin S3 klasöründe Talep Eden Ödemeler özelliğini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).

---

---

Soru #89

Bir şirket, gizli denetim belgelerini depolamak için Amazon S3'ü kullanıyor. S3 grubu, denetim ekibinin IAM kullanıcı kimlik bilgilerine erişimi en az ayrıcalık ilkesine göre kısıtlamak için grup politikalarını kullanır. Şirket yöneticileri, S3 klasöründeki belgelerin yanlışlıkla silinmesinden endişe ediyor ve daha güvenli bir çözüm istiyor. Bir çözüm mimarı denetim belgelerinin güvenliğini sağlamak için ne yapmalıdır?

A. S3 grubundaki sürüm oluşturma ve MFA Silme özelliklerini etkinleştirin.

B. Her denetim ekibi IAM kullanıcı hesabı için IAM kullanıcı kimlik bilgilerinde çok faktörlü kimlik doğrulamayı (MFA) etkinleştirin.

C. Denetim tarihleri ​​sırasında s3:DeleteObject eylemini reddetmek için denetim ekibinin IAM kullanıcı hesaplarına bir S3 Yaşam Döngüsü politikası ekleyin.

D. S3 klasörünü şifrelemek ve denetim ekibi IAM kullanıcı hesaplarının KMS anahtarına erişimini kısıtlamak için AWS Key Management Service'i (AWS KMS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 grubundaki sürüm oluşturma ve MFA Silme özelliklerini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #90

Bir şirket, herkesin erişebileceği film verilerini depolamak için bir SQL veritabanı kullanıyor. Veritabanı bir Amazon RDS Single-AZ veritabanı bulut sunucusunda çalışır. Bir komut dosyası, veritabanına eklenen yeni filmlerin sayısını kaydetmek için her gün rastgele aralıklarla sorgular çalıştırır. Komut dosyası, iş saatleri içinde nihai bir toplamı rapor etmelidir. Şirketin geliştirme ekibi, komut dosyası çalışırken veritabanı performansının geliştirme görevleri için yetersiz olduğunu fark eder. Bir çözüm mimarının bu sorunu çözecek bir çözüm önermesi gerekir. Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. Veritabanı bulut sunucusunu Multi-AZ dağıtımı olacak şekilde değiştirin.

B. Veritabanının okuma kopyasını oluşturun. Komut dosyasını yalnızca okuma çoğaltmasını sorgulayacak şekilde yapılandırın.

C. Geliştirme ekibine, her günün sonunda veritabanındaki girişleri manuel olarak dışarı aktarması talimatını verin.

D. Komut dosyasının veritabanında çalıştırdığı ortak sorguları önbelleğe almak için Amazon ElastiCache'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanının okuma kopyasını oluşturun. Komut dosyasını yalnızca okuma çoğaltmasını sorgulayacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #91

Bir şirketin bir VPC'deki Amazon EC2 bulut sunucularında çalışan uygulamaları var. Uygulamalardan birinin nesneleri depolamak ve okumak için Amazon S3 API'sini çağırması gerekiyor. Şirketin güvenlik düzenlemelerine göre uygulamalardan gelen trafiğin internet üzerinden dolaşmasına izin verilmiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir S3 ağ geçidi uç noktası yapılandırın.

B. Özel bir alt ağda bir S3 klasörü oluşturun.

C. EC2 bulut sunucularıyla aynı AWS Bölgesinde bir S3 klasörü oluşturun.

D. EC2 bulut sunucularıyla aynı alt ağda bir NAT ağ geçidi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir S3 ağ geçidi uç noktası yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #92

Bir şirket, hassas kullanıcı bilgilerini bir Amazon S3 klasöründe saklıyor. Şirket, bir VPC içindeki Amazon EC2 bulut sunucularında çalışan uygulama katmanından bu pakete güvenli erişim sağlamak istiyor. Bir çözüm mimarı bunu başarmak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Amazon S3 için VPC içinde bir VPC ağ geçidi uç noktası yapılandırın.

B. S3 klasöründeki nesneleri herkese açık hale getirmek için bir paket politikası oluşturun.

C. Erişimi yalnızca VPC'de çalışan uygulama katmanıyla sınırlayan bir paket politikası oluşturun.

D. S3 erişim politikasına sahip bir IAM kullanıcısı oluşturun ve IAM kimlik bilgilerini EC2 örneğine kopyalayın.

E. Bir NAT örneği oluşturun ve EC2 örneklerinin S3 klasörüne erişmek için NAT örneğini kullanmasını sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Amazon S3 için VPC içinde bir VPC ağ geçidi uç noktası yapılandırın. Erişimi yalnızca VPC'de çalışan uygulama katmanıyla sınırlayan bir paket politikası oluşturun.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #93

Bir şirket, MySQL veritabanı tarafından desteklenen bir şirket içi uygulamayı çalıştırıyor. Şirket, uygulamanın esnekliğini ve kullanılabilirliğini artırmak için uygulamayı AWS'ye taşıyor. Mevcut mimari, normal çalışma zamanlarında veritabanında yoğun okuma etkinliği göstermektedir. Her 4 saatte bir şirketin geliştirme ekibi, hazırlama ortamındaki bir veritabanını doldurmak için üretim veritabanının tamamını dışarı aktarıyor. Bu süre zarfında kullanıcılar kabul edilemez uygulama gecikmesi yaşarlar. Geliştirme ekibi, prosedür tamamlanana kadar hazırlama ortamını kullanamaz. Bir çözüm mimarı, uygulama gecikme sorununu hafifleten yedek mimari önermelidir. Değiştirme mimarisi aynı zamanda geliştirme ekibine hazırlama ortamını gecikmeden kullanmaya devam etme olanağını da vermelidir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Üretim için Amazon Aurora MySQL'i Multi-AZ Aurora Replikalarıyla birlikte kullanın. Mysqldump yardımcı programını kullanan bir yedekleme ve geri yükleme işlemi uygulayarak hazırlama veritabanını doldurun.

B. Üretim için Amazon Aurora MySQL'i Multi-AZ Aurora Replikalarıyla birlikte kullanın. İsteğe bağlı olarak hazırlama veritabanını oluşturmak için veritabanı klonlamayı kullanın.

C. Multi-AZ dağıtımıyla Amazon RDS for MySQL'i kullanın ve üretim için replikaları okuyun. Hazırlama veritabanı için bekleme örneğini kullanın.

D. Multi-AZ dağıtımıyla Amazon RDS for MySQL'i kullanın ve üretim için replikaları okuyun. Mysqldump yardımcı programını kullanan bir yedekleme ve geri yükleme işlemi uygulayarak hazırlama veritabanını doldurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Üretim için Amazon Aurora MySQL'i Multi-AZ Aurora Replikalarıyla birlikte kullanın. İsteğe bağlı olarak hazırlama veritabanını oluşturmak için veritabanı klonlamayı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #94

Bir şirket, kullanıcıların Amazon S3'e küçük dosyalar yükleyebileceği bir uygulama tasarlıyor. Kullanıcı bir dosyayı yükledikten sonra, dosyanın verileri dönüştürmek ve daha sonraki analiz için JSON formatında kaydetmek için tek seferlik basit bir işlem yapması gerekir. Her dosya yüklendikten sonra mümkün olan en kısa sürede işlenmelidir. Talep değişecektir. Bazı günlerde kullanıcılar çok sayıda dosya yükleyecektir. Diğer günlerde kullanıcılar birkaç dosya yükler veya hiç dosya yüklemez. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılıyor?

A. Amazon EMR'yi Amazon S3'teki metin dosyalarını okuyacak şekilde yapılandırın. Verileri dönüştürmek için işleme komut dosyalarını çalıştırın. Ortaya çıkan JSON dosyasını bir Amazon Aurora DB kümesinde saklayın.

B. Amazon S3'ü, Amazon Simple Queue Service (Amazon SQS) kuyruğuna olay bildirimi gönderecek şekilde yapılandırın. Kuyruktan okumak ve verileri işlemek için Amazon EC2 bulut sunucularını kullanın. Ortaya çıkan JSON dosyasını Amazon DynamoDB'de saklayın.

C. Amazon S3'ü, Amazon Simple Queue Service (Amazon SQS) kuyruğuna olay bildirimi gönderecek şekilde yapılandırın. Kuyruktan okumak ve verileri işlemek için bir AWS Lambda işlevini kullanın. Ortaya çıkan JSON dosyasını Amazon DynamoDB'de saklayın.

D. Amazon EventBridge'i (Amazon CloudWatch Events), yeni bir dosya yüklendiğinde Amazon Kinesis Data Streams'e etkinlik gönderecek şekilde yapılandırın. Olayı akıştan tüketmek ve verileri işlemek için bir AWS Lambda işlevini kullanın. Ortaya çıkan JSON dosyasını bir Amazon Aurora DB kümesinde saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon S3'ü, Amazon Simple Queue Service (Amazon SQS) kuyruğuna olay bildirimi gönderecek şekilde yapılandırın. Kuyruktan okumak ve verileri işlemek için bir AWS Lambda işlevini kullanın. Ortaya çıkan JSON dosyasını Amazon DynamoDB'de saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #95

Bir uygulama, bir şirketin genel merkezindeki kullanıcıların ürün verilerine erişmesine olanak tanır. Ürün verileri bir Amazon RDS MySQL veritabanı örneğinde depolanır. Operasyon ekibi uygulama performansında bir yavaşlamayı tespit etti ve okuma trafiğini yazma trafiğinden ayırmak istiyor. Bir çözüm mimarının uygulamanın performansını hızlı bir şekilde optimize etmesi gerekir. Çözüm mimarı ne tavsiye etmelidir?

A. Mevcut veritabanını Multi-AZ dağıtımına değiştirin. Okuma isteklerini birincil Erişilebilirlik Alanından yayınlayın.

B. Mevcut veritabanını Multi-AZ dağıtımına değiştirin. Okuma isteklerini ikincil Erişilebilirlik Alanından yayınlayın.

C. Veritabanı için okuma kopyaları oluşturun. Okuma replikalarını, kaynak veritabanı olarak işlem ve depolama kaynaklarının yarısıyla yapılandırın.

D. Veritabanı için okuma kopyaları oluşturun. Okuma replikalarını kaynak veritabanıyla aynı işlem ve depolama kaynaklarıyla yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanı için okuma kopyaları oluşturun. Okuma replikalarını kaynak veritabanıyla aynı işlem ve depolama kaynaklarıyla yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #96

Bir Amazon EC2 yöneticisi, birden fazla kullanıcı içeren bir IAM grubuyla ilişkili aşağıdaki politikayı oluşturdu: Bu politikanın etkisi nedir?

C. Kullanıcılar us-east-1 hariç herhangi bir AWS Bölgesinde EC2 bulut sunucusunu sonlandırabilir.

B. Kullanıcılar us-east-1 Bölgesinde 10.100.100.1 IP adresine sahip bir EC2 örneğini sonlandırabilir.

C. Kullanıcının kaynak IP'si 10.100.100.254 olduğunda kullanıcılar us-east-1 Bölgesindeki bir EC2 örneğini sonlandırabilir.

D. Kullanıcının kaynak IP'si 10.100.100.254 olduğunda kullanıcılar us-east-1 Bölgesindeki bir EC2 örneğini sonlandıramaz.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kullanıcılar, kullanıcının kaynak IP'si 10.100.100.254 olduğunda us-east-1 Bölgesindeki bir EC2 örneğini sonlandırabilir.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #97

Bir şirketin şirket içinde çalışan ve Microsoft Windows paylaşılan dosya depolama alanı gerektiren büyük bir Microsoft SharePoint dağıtımı vardır. Şirket bu iş yükünü AWS Cloud'a taşımak istiyor ve çeşitli depolama seçeneklerini değerlendiriyor. Depolama çözümünün yüksek oranda kullanılabilir olması ve erişim kontrolü için Active Directory ile entegre olması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EFS depolama alanını yapılandırın ve kimlik doğrulama için Active Directory etki alanını ayarlayın.

B. İki Erişilebilirlik Alanındaki AWS Storage Gateway dosya ağ geçidinde bir SMB dosya paylaşımı oluşturun.

C. Bir Amazon S3 klasörü oluşturun ve Microsoft Windows Server'ı bunu bir birim olarak bağlayacak şekilde yapılandırın.

D. AWS'de bir Amazon FSx for Windows Dosya Sunucusu dosya sistemi oluşturun ve kimlik doğrulama için Active Directory etki alanını ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS'de bir Amazon FSx for Windows Dosya Sunucusu dosya sistemi oluşturun ve kimlik doğrulama için Active Directory etki alanını ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #98

Bir görüntü işleme şirketi, kullanıcıların görüntüleri yüklemek için kullandıkları bir web uygulamasına sahiptir. Uygulama, görüntüleri bir Amazon S3 klasörüne yükler. Şirket, nesne oluşturma olaylarını Amazon Simple Queue Service (Amazon SQS) standart kuyruğunda yayınlamak için S3 olay bildirimlerini ayarladı. SQS kuyruğu, görüntüleri işleyen ve sonuçları e-posta yoluyla kullanıcılara gönderen bir AWS Lambda işlevi için olay kaynağı görevi görür. Kullanıcılar, yüklenen her görsel için birden fazla e-posta mesajı aldıklarını bildiriyor. Bir çözüm mimarı, SQS mesajlarının Lambda işlevini birden fazla kez çağırdığını ve bunun birden fazla e-posta mesajıyla sonuçlandığını tespit ediyor. Çözüm mimarı bu sorunu EN AZ operasyonel giderle çözmek için ne yapmalıdır?

A. ReceiveMessage bekleme süresini 30 saniyeye çıkararak SQS kuyruğunda uzun yoklama ayarlayın.

B. SQS standart kuyruğunu SQS FIFO kuyruğuna değiştirin. Yinelenen iletileri atmak için ileti tekilleştirme kimliğini kullanın.

C. SQS kuyruğundaki görünürlük zaman aşımını, işlev zaman aşımı ve toplu iş penceresi zaman aşımı toplamından daha büyük bir değere artırın.

D. Her mesajı, işlenmeden önce okunduktan hemen sonra SQS kuyruğundan silmek için Lambda işlevini değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** SQS kuyruğundaki görünürlük zaman aşımını, işlev zaman aşımı ve toplu iş penceresi zaman aşımı toplamından daha büyük bir değere artırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #99

Bir şirket, şirket içi veri merkezinde barındırılan bir oyun uygulaması için paylaşılan bir depolama çözümü uyguluyor. Şirketin verilere erişmek için Luster istemcilerini kullanma becerisine ihtiyacı var. Çözümün tam olarak yönetilmesi gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Bir AWS Storage Gateway dosya ağ geçidi oluşturun. Gerekli istemci protokolünü kullanan bir dosya paylaşımı oluşturun. Uygulama sunucusunu dosya paylaşımına bağlayın.

B. Bir Amazon EC2 Windows örneği oluşturun. Örneğe bir Windows dosya paylaşım rolü yükleyin ve yapılandırın. Uygulama sunucusunu dosya paylaşımına bağlayın.

C. Bir Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun ve bunu Lustre'u destekleyecek şekilde yapılandırın. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.

D. Lustre dosya sistemi için bir Amazon FSx oluşturun. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.

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

Soru #100

Bir şirketin kapsayıcıya alınmış uygulaması bir Amazon EC2 bulut sunucusunda çalışır. Uygulamanın diğer iş uygulamalarıyla iletişim kurabilmesi için güvenlik sertifikalarını indirmesi gerekir. Şirket, sertifikaları neredeyse gerçek zamanlı olarak şifrelemek ve şifrelerini çözmek için son derece güvenli bir çözüm istiyor. Çözümün ayrıca veriler şifrelendikten sonra verileri yüksek kullanılabilirliğe sahip bir depolama alanında depolaması da gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Şifrelenmiş sertifikalar için AWS Secrets Manager gizli dizileri oluşturun. Sertifikaları gerektiği gibi manuel olarak güncelleyin. Ayrıntılı IAM erişimini kullanarak verilere erişimi kontrol edin.

B. Şifreleme işlemlerini almak ve gerçekleştirmek için Python şifreleme kitaplığını kullanan bir AWS Lambda işlevi oluşturun. İşlevi bir Amazon S3 klasöründe saklayın.

C. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. EC2 rolünün şifreleme işlemleri için KMS anahtarını kullanmasına izin verin. Şifrelenmiş verileri Amazon S3'te saklayın.

D. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. EC2 rolünün şifreleme işlemleri için KMS anahtarını kullanmasına izin verin. Şifrelenmiş verileri Amazon Elastic Block Store (Amazon EBS) birimlerinde depolayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. EC2 rolünün şifreleme işlemleri için KMS anahtarını kullanmasına izin verin. Şifrelenmiş verileri Amazon S3'te saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
