# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 01

> **Soru Aralığı:** 1 - 100 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

1019 soru · kazınmış 2026-09-11 14:04:09

AWS-SAA-C03

---

---

Soru 1
Bir şirket, şehirlerdeki sıcaklık, nem ve atmosfer basıncına ilişkin verileri topluyor
birden fazla kıta. Şirketin her siteden günlük olarak topladığı ortalama veri hacmi:
500GB. Her sitenin yüksek hızlı internet bağlantısı vardır.
Şirket, tüm bu küresel sitelerden gelen verileri mümkün olan en kısa sürede bir araya getirmek istiyor.
tek Amazon S3 kovası. Çözüm operasyonel karmaşıklığı en aza indirmelidir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Hedef S3 klasöründe S3 Aktarım Hızlandırmasını açın. Çok parçalı yüklemeleri şuraya kullanın:
site verilerini doğrudan hedef S3 klasörüne yükleyin.

B. Her sitedeki verileri en yakın Bölgedeki bir S3 klasörüne yükleyin. S3 Bölgeler Arası Kullanımı
Nesneleri hedef S3 klasörüne kopyalamak için çoğaltma. Ardından verileri S3 kaynağından kaldırın
kova.

C. Her bir cihazdan veri aktarmak için AWS Snowball Edge Storage Optimize Edilmiş cihaz işlerini günlük olarak planlayın
Siteyi en yakın bölgeye. Nesneleri hedef S3'e kopyalamak için S3 Bölgeler Arası Çoğaltma'yı kullanın
kova.

D. Her sitedeki verileri en yakın Bölgedeki Amazon EC2 bulut sunucusuna yükleyin. Sakla
Amazon Elastic Block Store (Amazon EBS) birimindeki veriler. Düzenli aralıklarla EBS alın
anlık görüntüyü alın ve hedef S3 paketini içeren Bölgeye kopyalayın. EBS'yi geri yükleyin
o Bölgedeki hacim.

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

Soru 2
Bir şirketin kendi tescilli uygulamasının günlük dosyalarını analiz edebilme becerisine ihtiyacı vardır. Günlükler:
JSON biçiminde bir Amazon S3 klasöründe depolanır. Sorgular basit olacak ve isteğe bağlı olarak çalışacaktır.
Bir çözüm mimarının, mevcut çözümde minimum değişiklik yaparak analizi gerçekleştirmesi gerekir.
Mimarlık.
Çözüm mimarı bu gereksinimleri EN AZ miktarda maliyetle karşılamak için ne yapmalıdır?
operasyonel yük?

C. Tüm içeriği tek bir yere yüklemek ve gerektiğinde SQL sorgularını çalıştırmak için Amazon Redshift'i kullanın.

B. Günlükleri depolamak için Amazon CloudWatch Logs'u kullanın. Gerektiğinde Amazon'dan SQL sorguları çalıştırın
CloudWatch konsolu.

C. Sorguları gerektiği gibi çalıştırmak için Amazon Athena'yı doğrudan Amazon S3 ile kullanın.

D. Günlükleri kataloglamak için AWS Glue'yu kullanın. Amazon EMR'de geçici bir Apache Spark kümesi kullanarak
Gerektiğinde SQL sorgularını çalıştırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Sorguları gerektiği gibi çalıştırmak için Amazon Athena'yı doğrudan Amazon S3 ile kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 3
Bir şirket, farklı amaçlar için birden fazla AWS hesabını yönetmek amacıyla AWS Kuruluşlarını kullanıyor
departmanlar. Yönetim hesabında proje raporlarını içeren bir Amazon S3 klasörü bulunur.
Şirket, bu S3 paketine erişimi yalnızca S3 kapsamındaki hesapların kullanıcılarıyla sınırlamak istiyor.
AWS Organizasyonlarındaki organizasyon.
Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılıyor?

A. awsPrincipalOrgID genel koşul anahtarını kuruluş kimliğine referansla birlikte ekleyin.
S3 kova politikası.

B. Her departman için bir organizasyon birimi (OU) oluşturun. Aws:PrincipalOrgPaths global'i ekleyin
S3 kova politikasının koşul anahtarı.

C. CreateAccount, InviteAccountToOrganization'ı izlemek için AWS CloudTrail'i kullanın.
LeaveOrganization ve RemoveAccountFromOrganization olayları. S3 paketi politikasını güncelleyin
buna göre.

D. S3 klasörüne erişmesi gereken her kullanıcıyı etiketleyin. aws:PrincipalTag genel koşulunu ekleyin
S3 kova politikasının anahtarı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** awsPrincipalOrgID genel koşul anahtarını, kuruluş kimliğine referansla birlikte S3 paket politikasına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 4
Bir uygulama, VPC'deki bir Amazon EC2 örneğinde çalışır. Uygulama işlemleri günlükleri
bir Amazon S3 klasöründe depolanır. EC2 bulut sunucusunun S3 klasörüne erişmesi gerekiyor
internete bağlantı.
Hangi çözüm Amazon S3'e özel ağ bağlantısı sağlayacak?

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

Soru 5
Bir şirket, tek bir Amazon EC2 örneğini kullanarak AWS'de bir web uygulaması barındırıyor.
Kullanıcı tarafından yüklenen belgeleri bir Amazon EBS biriminde saklar. Daha iyi ölçeklenebilirlik ve
kullanılabilirliği sağlamak için şirket mimariyi kopyaladı ve ikinci bir EC2 bulut sunucusu oluşturdu ve
Başka bir Erişilebilirlik Alanındaki EBS birimi, her ikisini de bir Application Load Balancer'ın arkasına yerleştirir.
Bu değişikliği tamamladıktan sonra kullanıcılar, web sitesini her yenilediğinde
belgelerinin bir alt kümesini veya diğerini görebiliyordu ancak hiçbir zaman tüm belgeleri aynı anda göremiyordu
zaman.
Kullanıcıların tüm belgelerini aynı anda görmesini sağlamak için bir çözüm mimarı ne önermelidir?

A. Her iki EBS cildinin de tüm belgeleri içermesi için verileri kopyalayın

B. Kullanıcıyı belgelerle birlikte sunucuya yönlendirmek için Application Load Balancer'ı yapılandırın

C. Her iki EBS birimindeki verileri Amazon EFS'ye kopyalayın. Yeniyi kaydetmek için uygulamayı değiştirin
Amazon EFS'ye gönderilen belgeler

D. İsteği her iki sunucuya da göndermek için Application Load Balancer'ı yapılandırın. Her birini iade et
doğru sunucudan belge

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

Soru 6
Bir şirket, büyük video dosyalarını şirket içi ağa bağlı depolama alanında depolamak için NFS'yi kullanıyor. Her biri
video dosyasının boyutu 1 MB ile 500 GB arasında değişmektedir. Toplam depolama alanı 70 TB'tır ve artık
Büyüyor. Şirket, video dosyalarını Amazon S3'e taşımaya karar verir. Şirket şunları yapmalıdır:
Mümkün olan en az ağ bant genişliğini kullanarak video dosyalarını mümkün olan en kısa sürede taşıyın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir S3 klasörü oluşturun. S3 paketine yazma izinlerine sahip bir IAM rolü oluşturun. Kullanım
tüm dosyaları yerel olarak S3 klasörüne kopyalamak için AWS CLI.

B. Bir AWS Snowball Edge işi oluşturun. Tesisinizde bir Snowball Edge cihazı alın. Şunu kullanın:
Cihaza veri aktarmak için Snowball Edge istemcisi. AWS'nin içe aktarabilmesi için cihazı iade edin
verileri Amazon S3'e aktarın.

C. Şirket içinde bir S3 Dosya Ağ Geçidini dağıtın. S3'e bağlanmak için bir kamu hizmeti uç noktası oluşturun
Dosya Ağ Geçidi. Bir S3 paketi oluşturun. S3 Dosya Ağ Geçidinde yeni bir NFS dosya paylaşımı oluşturun. Nokta
yeni dosya paylaşımını S3 klasörüne aktarın. Verileri mevcut NFS dosya paylaşımından S3'e aktarın
Dosya Ağ Geçidi.

D. Şirket içi ağ ile AWS arasında bir AWS Direct Connect bağlantısı kurun. Dağıt
şirket içinde bir S3 Dosya Ağ Geçidi. S3 Dosyasına bağlanmak için genel bir sanal arayüz (VIF) oluşturun
Ağ geçidi. Bir S3 paketi oluşturun. S3 Dosya Ağ Geçidinde yeni bir NFS dosya paylaşımı oluşturun. Noktayı göster
S3 klasörüne yeni dosya paylaşımı. Verileri mevcut NFS dosya paylaşımından S3 Dosyasına aktarın
Ağ geçidi.

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

Soru 7
Bir şirketin gelen mesajları alan bir uygulaması var. Onlarca başka uygulama
ve mikro hizmetler daha sonra bu mesajları hızla tüketir. Mesaj sayısı değişiyor
büyük ölçüde ve bazen saniyede 100.000'e kadar aniden artar. Şirket istiyor
çözümü ayırın ve ölçeklenebilirliği artırın.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Mesajları Amazon Kinesis Data Analytics'e iletin. Tüketici uygulamalarını yapılandırma
mesajları okumak ve işlemek için.

B. Ölçeklendirmek için alım uygulamasını bir Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularına dağıtın
CPU ölçümlerine göre EC2 bulut sunucularının sayısı.

C. Mesajları tek bir parçayla Amazon Kinesis Data Streams'e yazın. AWS kullanın
Mesajları önceden işlemek ve bunları Amazon DynamoDB'de depolamak için Lambda işlevi. Yapılandır
mesajları işlemek için DynamoDB'den okunacak tüketici uygulamaları.

D. Mesajları bir Amazon Simple Notification Service (Amazon SNS) konusuna yayınlayın.
birden fazla Amazon Simple Queue Service (Amazon SOS) aboneliği. Tüketiciyi yapılandırma
kuyruklardan gelen mesajları işlemek için uygulamalar.

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

Soru 8
Bir şirket, dağıtılmış bir uygulamayı AWS'ye taşıyor. Uygulama değişkene hizmet ediyor
iş yükleri. Eski platform, işleri birden fazla platformda koordine eden bir birincil sunucudan oluşur.
düğümleri hesapla. Şirket, uygulamayı maksimuma çıkaran bir çözümle modernize etmek istiyor
esneklik ve ölçeklenebilirlik.
Bir çözüm mimarı bu gereksinimleri karşılayacak mimariyi nasıl tasarlamalıdır?

A. Amazon Simple Queue Service (Amazon SQS) kuyruğunu hedef olarak yapılandırın.
işler. İşlem düğümlerini Otomatik olarak yönetilen Amazon EC2 bulut sunucularıyla uygulayın
Ölçeklendirme grubu. Zamanlanmış ölçeklendirmeyi kullanmak için EC2 Otomatik Ölçeklendirmeyi yapılandırın.

B. Amazon Simple Queue Service (Amazon SQS) kuyruğunu hedef olarak yapılandırın.
işler. İşlem düğümlerini Otomatik olarak yönetilen Amazon EC2 bulut sunucularıyla uygulayın
Ölçeklendirme grubu. EC2 Otomatik Ölçeklendirmeyi kuyruğun boyutuna göre yapılandırın.

C. Birincil sunucuyu ve işlem düğümlerini Amazon EC2 bulut sunucularıyla uygulayın.
Otomatik Ölçeklendirme grubunda yönetilir. AWS CloudTrail'i işler için hedef olarak yapılandırın.
EC2 Otomatik Ölçeklendirmeyi birincil sunucudaki yüke göre yapılandırın.

D. Birincil sunucuyu ve işlem düğümlerini Amazon EC2 bulut sunucularıyla uygulayın.
Otomatik Ölçeklendirme grubunda yönetilir. Amazon EventBridge'i yapılandırma (Amazon CloudWatch
Etkinlikler) işler için bir varış noktası olarak. EC2 Otomatik Ölçeklendirmeyi ağdaki yüke göre yapılandırın
düğümleri hesapla.

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

Soru 9
Bir şirket, veri merkezinde bir SMB dosya sunucusu çalıştırıyor. Dosya sunucusu büyük dosyaları saklar.
dosyalar oluşturulduktan sonraki ilk birkaç gün boyunca sıklıkla erişilir. 7 gün sonra dosyalar
nadiren erişilir.
Toplam veri boyutu giderek artıyor ve şirketin toplam depolama kapasitesine yaklaşıyor. bir çözüm
Mimar, düşük gecikmeli erişimi kaybetmeden şirketin kullanılabilir depolama alanını artırmalı
en son erişilen dosyalara. Çözüm mimarı aynı zamanda dosya yaşam döngüsünü de sağlamalıdır
Gelecekteki depolama sorunlarını önlemek için yönetim.
Bu gereksinimleri hangi çözüm karşılayacak?

C. 7 günden eski verileri SMB dosya sunucusundan AWS'ye kopyalamak için AWS DataSync'i kullanın.

B. Şirketin depolama alanını genişletmek için bir Amazon S3 Dosya Ağ Geçidi oluşturun. Bir S3 oluşturun
Verileri 7 gün sonra S3 Glacier Deep Archive'a geçirmeye yönelik yaşam döngüsü politikası.

C. Şirketin depolama alanını genişletmek için bir Amazon FSx for Windows Dosya Sunucusu dosya sistemi oluşturun
uzay.

D. Amazon S3'e erişmek için her kullanıcının bilgisayarına bir yardımcı program yükleyin. Bir S3 Yaşam Döngüsü ilkesi oluşturun
verileri 7 gün sonra S3 Glacier Esnek Erişime aktarın.

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

Soru 10
Bir şirket AWS'de bir e-ticaret web uygulaması geliştiriyor. Uygulama gönderilir
işlenecek bir Amazon API Gateway REST API'sine yeni siparişler hakkında bilgi. şirket
siparişlerin alındıkları sıraya göre işlenmesini sağlamak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Simple Notification'a mesaj yayınlamak için API Gateway entegrasyonunu kullanın
Uygulama bir sipariş aldığında Hizmet (Amazon SNS) konusu. Bir AWS Lambda'ya abone olun
İşlemi gerçekleştirmek için konuya ilişkin işlev.

B. Amazon Simple Queue Service'e mesaj göndermek için API Gateway entegrasyonunu kullanın
(Amazon SQS) Uygulama bir sipariş aldığında FIFO kuyruğu. SQS FIFO'yu yapılandırma
işlenmek üzere bir AWS Lambda işlevini çağırmak için sıraya girin.

C. Uygulama bir siparişi işlerken tüm istekleri engellemek için bir API Ağ Geçidi yetkilendiricisi kullanın.

D. Amazon Simple Queue Service'e mesaj göndermek için API Ağ Geçidi entegrasyonunu kullanın
Uygulama bir sipariş aldığında (Amazon SQS) standart kuyruk. SQS'yi yapılandırma
İşleme için bir AWS Lambda işlevini çağırmak için standart kuyruk.

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

Soru 11
Bir şirketin Amazon EC2 bulut sunucularında çalışan ve Amazon Aurora kullanan bir uygulaması var
veritabanı. EC2 bulut sunucuları, veritabanına kullanıcı adlarını ve parolaları kullanarak bağlanır.
yerel olarak bir dosyada saklanır. Şirket, kimlik bilgilerinin operasyonel yükünü en aza indirmek istiyor
yönetim.
Bir çözüm mimarı bu hedefe ulaşmak için ne yapmalıdır?

A. AWS Secrets Manager'ı kullanın. Otomatik döndürmeyi açın.

B. AWS Systems Manager Parametre Deposunu kullanın. Otomatik döndürmeyi açın.

C. AWS Anahtarıyla şifrelenmiş nesneleri depolamak için bir Amazon S3 klasörü oluşturun
Yönetim Hizmeti (AWS KMS) şifreleme anahtarı. Kimlik bilgisi dosyasını S3 klasörüne taşıyın.
Uygulamayı S3 klasörüne yönlendirin.

D. Her EC2 için şifrelenmiş bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun
örnek. Yeni EBS birimini her EC2 bulut sunucusuna ekleyin. Kimlik bilgisi dosyasını yeniye taşıyın
EBS hacmi. Uygulamayı yeni EBS birimine yönlendirin.

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

Soru 12
Küresel bir şirket, web uygulamasını bir Uygulamanın arkasında Amazon EC2 bulut sunucularında barındırıyor
Yük Dengeleyici (ALB). Web uygulamasında statik veriler ve dinamik veriler bulunur. şirket
statik verilerini bir Amazon S3 klasöründe saklar. Şirket performansı artırmak istiyor ve
Statik veriler ve dinamik veriler için gecikmeyi azaltın. Şirket kendi alan adını kullanıyor
Amazon Route 53'e kayıtlı.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Kaynak olarak S3 klasörüne ve ALB'ye sahip bir Amazon CloudFront dağıtımı oluşturun.
Trafiği CloudFront dağıtımına yönlendirmek için Route 53'ü yapılandırın.

B. Kaynağı ALB olan bir Amazon CloudFront dağıtımı oluşturun. Bir AWS oluşturun
Rotayı Yapılandırma uç noktası olarak S3 klasörüne sahip Global Accelerator standart hızlandırıcı
Trafiği CloudFront dağıtımına yönlendirmek için 53.

C. Başlangıç ​​noktası olarak S3 klasörüne sahip bir Amazon CloudFront dağıtımı oluşturun. Bir AWS oluşturun
ALB ve CloudFront dağıtımına sahip Global Accelerator standart hızlandırıcısı
uç noktalar. Hızlandırıcı DNS adına işaret eden özel bir alan adı oluşturun. Şunu kullanın:
web uygulaması için uç nokta olarak özel alan adı.

D. Kaynağı ALB olan bir Amazon CloudFront dağıtımı oluşturun. Bir AWS oluşturun
Uç nokta olarak S3 paketine sahip Global Accelerator standart hızlandırıcı. İki tane oluştur
alan adları. Dinamik içerik için bir alan adını CloudFront DNS adına yönlendirin. Nokta
Statik içerik için diğer alan adını hızlandırıcı DNS adına değiştirin. Alan adlarını şu şekilde kullanın:
Web uygulaması için uç noktalar.

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

Soru 13
Bir şirket, AWS altyapısında aylık bakım gerçekleştiriyor. Bu bakımlar sırasında
etkinlikler için şirketin Amazon RDS for MySQL veritabanlarına ilişkin kimlik bilgilerini döndürmesi gerekiyor
birden fazla AWS Bölgesinde.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Kimlik bilgilerini AWS Secrets Manager'da gizli diziler olarak saklayın. Çok Bölgeli gizli çoğaltmayı kullan
Gerekli Bölgeler için. Gizli dizileri bir zamanlamaya göre döndürecek şekilde Gizli Diziler Yöneticisi'ni yapılandırın.

B. Güvenli bir dize oluşturarak kimlik bilgilerini AWS Systems Manager'da gizli dizi olarak saklayın
parametre. Gerekli Bölgeler için çoklu Bölge gizli çoğaltmasını kullanın. Sistemleri Yapılandırma
Yöneticinin sırları bir programa göre döndürmesi.

C. Kimlik bilgilerini sunucu tarafı şifrelemenin (SSE) etkin olduğu bir Amazon S3 klasöründe saklayın.
Bir AWS Lambda işlevini çağırmak için Amazon EventBridge'i (Amazon CloudWatch Events) kullanın.
kimlik bilgilerini döndürün.

D. AWS Key Management Service'i (AWS KMS) kullanarak kimlik bilgilerini gizli dizi olarak şifreleyin
çok Bölgeli müşteri tarafından yönetilen anahtarlar. Gizli dizileri bir Amazon DynamoDB global tablosunda saklayın.
DynamoDB'den gizli dizileri almak için bir AWS Lambda işlevini kullanın. Döndürmek için RDS API'sini kullanın
sırlar.

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

Soru 14
Bir şirket, bir Uygulamanın arkasında Amazon EC2 bulut sunucularında bir e-ticaret uygulaması çalıştırıyor
Yük Dengeleyici. Bulut sunucuları birden fazla platformda bir Amazon EC2 Auto Scaling grubunda çalışır
Erişilebilirlik Alanları. Otomatik Ölçeklendirme grubu, CPU kullanım ölçümlerine göre ölçeklenir.
e-ticaret uygulaması, işlem verilerini bir sunucuda barındırılan MySQL 8.0 veritabanında saklar.
büyük EC2 örneği.
Uygulama yükü arttıkça veritabanının performansı hızla düşer. Uygulama
yazma işlemlerinden daha fazla okuma isteğini işler. Şirket bunu sağlayacak bir çözüm istiyor
tahmin edilemeyen okuma iş yüklerinin taleplerini karşılamak için veritabanını otomatik olarak ölçeklendirirken
yüksek kullanılabilirliğin sürdürülmesi.
Bu gereksinimleri hangi çözüm karşılayacak?

C. Lider ve bilgi işlem işlevleri için Amazon Redshift'i tek bir düğümle kullanın.

B. Amazon RDS'yi Single-AZ dağıtımıyla kullanın Okuyucu eklemek için Amazon RDS'yi yapılandırın
farklı bir Erişilebilirlik Alanındaki örnekler.

C. Amazon Aurora'yı Multi-AZ dağıtımıyla kullanın. Aurora Otomatik Ölçeklendirmeyi Aurora ile Yapılandırma
Kopyalar.

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

Soru 15
Yakın zamanda AWS'ye geçiş yapan bir şirket, trafiği korumak için bir çözüm uygulamak istiyor.
üretim VPC'sine girip çıkar. Şirketin kendi bünyesinde bir inceleme sunucusu vardı
veri merkezi. İnceleme sunucusu, trafik akışı denetimi gibi belirli işlemleri gerçekleştirdi
ve trafik filtreleme. Şirket, AWS Cloud'da da aynı işlevlere sahip olmak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Üretim VPC'sinde trafik denetimi ve trafik filtreleme için Amazon GuardDuty'yi kullanın.

B. Trafik denetimi ve filtreleme amacıyla üretim VPC'sinden gelen trafiği yansıtmak için Trafik Yansıtma'yı kullanın.

C. Trafik denetimi ve trafik filtreleme için gerekli kuralları oluşturmak üzere AWS Ağ Güvenlik Duvarı'nı kullanın
üretim VPC'si için.

D. Trafik denetimi ve trafik filtreleme için gerekli kuralları oluşturmak üzere AWS Firewall Manager'ı kullanın
üretim VPC'si için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Üretim VPC'sine yönelik trafik denetimi ve trafik filtrelemeye yönelik gerekli kuralları oluşturmak için AWS Ağ Güvenlik Duvarı'nı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 16
Bir şirket AWS'de bir veri gölü barındırıyor. Veri gölü Amazon S3'teki verilerden oluşur ve
PostgreSQL için Amazon RDS. Şirketin veri sağlayan bir raporlama çözümüne ihtiyacı var
görselleştirme ve veri gölü içindeki tüm veri kaynaklarını içerir. Yalnızca şirketin
yönetim ekibinin tüm görselleştirmelere tam erişimi olmalıdır. Şirketin geri kalanı
yalnızca sınırlı erişime sahip olmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon QuickSight'ta bir analiz oluşturun. Tüm veri kaynaklarını bağlayın ve yenilerini oluşturun
veri kümeleri. Verileri görselleştirmek için kontrol panellerini yayınlayın. Kontrol panellerini uygun kişilerle paylaşın
IAM rolleri.

B. Amazon QuickSight'ta bir analiz oluşturun. Tüm veri kaynaklarını bağlayın ve yenilerini oluşturun
veri kümeleri. Verileri görselleştirmek için kontrol panellerini yayınlayın. Kontrol panellerini uygun kişilerle paylaşın
kullanıcılar ve gruplar.

C. Amazon S3'teki veriler için bir AWS Glue tablosu ve tarayıcısı oluşturun. Bir AWS Glue oluşturun
Raporlar oluşturmak için işi çıkarın, dönüştürün ve yükleyin (ETL). Raporları Amazon S3'te yayınlayın. Kullanım
Raporlara erişimi sınırlamak için S3 paket politikaları.

D. Amazon S3'teki veriler için bir AWS Glue tablosu ve tarayıcısı oluşturun. Amazon Athena'yı kullanın
Amazon RDS for PostgreSQL içindeki verilere erişmeye yönelik Birleşik Sorgu. Kullanarak raporlar oluşturun
Amazon Athena. Raporları Amazon S3'te yayınlayın. Erişimi sınırlamak için S3 paket politikalarını kullanın.
raporlar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon QuickSight'ta bir analiz oluşturun. Tüm veri kaynaklarını bağlayın ve yeni veri kümeleri oluşturun. Verileri görselleştirmek için kontrol panellerini yayınlayın. Kontrol panellerini uygun kullanıcılar ve gruplarla paylaşın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 17
Bir şirket yeni bir iş uygulamasını hayata geçiriyor. Uygulama iki Amazon'da çalışıyor
EC2 bulut sunucuları ve belge depolama için bir Amazon S3 klasörü kullanır. Bir çözüm mimarı
EC2 bulut sunucularının S3 klasörüne erişebildiğinden emin olması gerekir.
Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. S3 paketine erişim izni veren bir IAM rolü oluşturun. Rolü EC2 bulut sunucularına ekleyin.

B. S3 klasörüne erişim izni veren bir IAM politikası oluşturun. Politikayı EC2'ye ekleyin
örnekler.

C. S3 paketine erişim izni veren bir IAM grubu oluşturun. Grubu EC2'ye ekleyin
örnekler.

D. S3 klasörüne erişim izni veren bir IAM kullanıcısı oluşturun. Kullanıcı hesabını EC2'ye ekleyin
örnekler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 paketine erişim izni veren bir IAM rolü oluşturun. Rolü EC2 bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 18
Bir uygulama geliştirme ekibi, büyük görüntüleri görüntüye dönüştürecek bir mikro hizmet tasarlıyor.
daha küçük, sıkıştırılmış görüntüler. Bir kullanıcı web arayüzü aracılığıyla bir görsel yüklediğinde,
mikro hizmet, görüntüyü bir Amazon S3 klasöründe saklamalı, görüntüyü işlemeli ve sıkıştırmalıdır
AWS Lambda işleviyle görüntüyü sıkıştırılmış biçimde farklı bir S3'te saklayın
kova.
Bir çözüm mimarının, dayanıklı, durum bilgisi olmayan bileşenler kullanan bir çözüm tasarlaması gerekir.
görüntüleri otomatik olarak işleyin.
Hangi eylem kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. S3 paketini şu şekilde yapılandırın:
S3 klasörüne bir görüntü yüklendiğinde SQS kuyruğuna bildirim gönderin.

B. Lambda işlevini Amazon Simple Queue Service'i (Amazon SQS) kullanacak şekilde yapılandırın
çağrı kaynağı olarak sıraya girin. SQS mesajı başarıyla işlendiğinde,
kuyruktaki mesaj.

C. Yeni yüklemeler için S3 klasörünü izlemek üzere Lambda işlevini yapılandırın. Yüklendiğinde
görüntü algılanırsa, dosya adını bellekteki bir metin dosyasına yazın ve metin dosyasını takip etmek için kullanın.
işlenen görüntüler.

D. Amazon Simple Queue Service'i (Amazon SQS) izlemek için bir Amazon EC2 bulut sunucusu başlatın
kuyruk. Öğeler kuyruğa eklendiğinde, dosya adını EC2 örneğindeki bir metin dosyasına kaydedin ve
Lambda işlevini çağırın.

E. S3'ü izlemek için bir Amazon EventBridge (Amazon CloudWatch Events) olayı yapılandırın
kova. Bir görsel yüklendiğinde Amazon geniş Bildirim Hizmetine bir uyarı gönderin
(Amazon SNS) konusu, daha ileri işlemler için uygulama sahibinin e-posta adresini içerir.

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

Soru 19
Bir şirketin AWS'de dağıtılan üç katmanlı bir web uygulaması var. Web sunucuları
bir VPC'deki genel bir alt ağda konuşlandırılır. Uygulama sunucuları ve veritabanı sunucuları
aynı VPC'deki özel alt ağlara dağıtılır. Şirket, üçüncü taraf bir sanal
Bir inceleme VPC'sinde AWS Marketplace'ten güvenlik duvarı cihazı. Cihaz şu şekilde yapılandırılmıştır:
IP paketlerini kabul edebilen bir IP arayüzü.
Bir çözüm mimarının tüm trafiği denetlemek için web uygulamasını cihazla entegre etmesi gerekir
trafik web sunucusuna ulaşmadan önce uygulamaya.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Trafiği yönlendirmek için uygulamanın VPC'sinin genel alt ağında bir Ağ Yük Dengeleyici oluşturun
Paket incelemesi için cihaza.

B. Uygulamanın VPC'sinin genel alt ağında bir Application Load Balancer oluşturun.
Paket incelemesi için cihaza giden trafik.

C. Gelenleri yönlendirmek için inceleme VPConfigure rota tablolarına bir transit ağ geçidi dağıtın
Paketler transit ağ geçidi üzerinden.

D. İnceleme VPC'sine bir Ağ Geçidi Yük Dengeleyici dağıtın. Ağ Geçidi Yük Dengeleyici Oluşturma
Gelen paketleri almak ve paketleri cihaza iletmek için uç nokta.

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

Soru 20
Bir şirket, büyük miktarda üretim verisini bir teste kopyalama yeteneğini geliştirmek istiyor
aynı AWS Bölgesindeki ortam. Veriler Amazon'daki Amazon EC2 bulut sunucularında depolanır
Elastic Block Store (Amazon EBS) birimleri. Klonlanmış verilerde yapılan değişiklikler,
üretim ortamı. Bu verilere erişen yazılım sürekli olarak yüksek I/O gerektirir
performans.
Bir çözüm mimarının üretim verilerini kopyalamak için gereken süreyi en aza indirmesi gerekir.
test ortamı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Üretim EBS hacimlerinin EBS anlık görüntülerini alın. Anlık görüntüleri EC2'ye geri yükleyin
test ortamındaki örnek depolama birimleri.

B. Üretim EBS birimlerini, EBS Çoklu Ekleme özelliğini kullanacak şekilde yapılandırın. EBS'yi alın
üretim EBS hacimlerinin anlık görüntüleri. Üretim EBS hacimlerini EC2'ye ekleyin
Test ortamındaki örnekler.

C. Üretim EBS hacimlerinin EBS anlık görüntülerini alın. Yeni EBS birimleri oluşturun ve başlatın.
Geri yüklemeden önce yeni EBS birimlerini test ortamındaki EC2 bulut sunucularına ekleyin.
üretim EBS anlık görüntülerinden hacimler.

D. Üretim EBS hacimlerinin EBS anlık görüntülerini alın. EBS hızlı anlık görüntü geri yüklemesini açın
EBS anlık görüntüleri özelliği. Anlık görüntüleri yeni EBS birimlerine geri yükleyin. Yeni EBS'yi takın
test ortamındaki EC2 bulut sunucularına hacimler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Üretim EBS hacimlerinin EBS anlık görüntülerini alın. EBS anlık görüntüleri üzerinde EBS hızlı anlık görüntü geri yükleme özelliğini açın. Anlık görüntüleri yeni EBS birimlerine geri yükleyin. Yeni EBS birimlerini test ortamındaki EC2 bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 21
Bir e-ticaret şirketi, AWS'de günde tek fırsat sunan bir web sitesi başlatmak istiyor. Her gün
Tam olarak tek bir ürünü 24 saat boyunca indirime sokun. Şirket bunu yapabilmek istiyor
Yoğun saatlerde her saat başı milyonlarca isteği milisaniyelik bir gecikmeyle işleyin.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

C. Web sitesinin tamamını farklı S3 klasörlerinde barındırmak için Amazon S3'ü kullanın. Amazon CloudFront'u ekleyin
dağıtımlar. S3 paketlerini dağıtımlar için başlangıç ​​noktası olarak ayarlayın. Sipariş verilerini Amazon'da saklayın
S3.

B. Web sitesinin tamamını, Otomatik Ölçeklendirme gruplarında çalışan Amazon EC2 bulut sunucularına dağıtın
birden fazla Erişilebilirlik Alanı. Web sitesini dağıtmak için bir Application Load Balancer (ALB) ekleyin
trafik. Arka uç API'leri için başka bir ALB ekleyin. Verileri Amazon RDS for MySQL'de saklayın.

C. Uygulamanın tamamını kapsayıcılarda çalışacak şekilde taşıyın. Container'ları Amazon Elastic'te barındırın
Kubernetes Hizmeti (Amazon EKS). Artırmak ve artırmak için Kubernetes Cluster Autoscaler'ı kullanın.
trafikteki patlamaları işlemek için bölme sayısını azaltın. Verileri Amazon RDS'de saklayın
MySQL.

D. Web sitesinin statik içeriğini barındırmak için bir Amazon S3 klasörü kullanın. Amazon CloudFront'u dağıtın
dağıtım. S3 kovasını başlangıç ​​noktası olarak ayarlayın. Amazon API Gateway ve AWS Lambda'yı kullanın
arka uç API'leri için işlevler. Verileri Amazon DynamoDB'de saklayın.

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

Soru 22
Bir çözüm mimarı, yeni bir dijital ortamın depolama mimarisini tasarlamak için Amazon S3'ü kullanıyor
medya uygulaması. Medya dosyalarının Erişilebilirlik Alanı kaybına karşı dayanıklı olması gerekir. Bazı dosyalar
sık sık erişilirken diğer dosyalara öngörülemeyen bir düzende nadiren erişilir.
çözüm mimarı, medya dosyalarını saklama ve alma maliyetlerini en aza indirmelidir.
Hangi depolama seçeneği bu gereksinimleri karşılıyor?

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

Soru 23
Bir şirket, yedekleme dosyalarını Amazon S3 Standart depolamayı kullanarak depoluyor. Dosyalara erişildi
1 ay boyunca sık sık. Ancak 1 ay geçmesine rağmen dosyalara erişilemiyor. Şirket şunları yapmalıdır:
dosyaları süresiz olarak saklayın.
Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Nesneleri otomatik olarak taşımak için S3 Intelligent-Tiering'i yapılandırın.

B. Nesneleri S3 Standard'tan S3 Glacier Deep'e geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun
1 ay sonra arşivleyin.

C. Nesneleri S3 Standard'tan S3'e geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun
1 ay sonra Standart-Sıklık Erişimi (S3 Standart-IA).

D. Nesneleri S3 Standard'tan S3 One'a geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun
1 ay sonra Bölge-Sık Olmayan Erişim (S3 Bir Bölge-IA).

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

Soru 24
Bir şirket, son faturasında Amazon EC2 maliyetlerinde artış gözlemliyor. Faturalandırma ekibi
birkaç EC2 bulut sunucusu için bulut sunucusu türlerinin istenmeyen dikey ölçeklendirmesini fark etti. bir çözüm
mimarın son 2 aylık EC2 maliyetlerini karşılaştıran bir grafik oluşturması ve
Dikey ölçeklendirmenin temel nedenini belirlemek için derinlemesine analiz.
Çözüm mimarı, EN AZ operasyonel yaklaşımla bilgiyi nasıl oluşturmalıdır?
genel gider mi?

A. Bir bütçe raporu oluşturmak ve EC2 maliyetlerini bulut sunucusu türlerine göre karşılaştırmak için AWS Budgets'ı kullanın.

B. EC2 maliyetlerinin derinlemesine analizini gerçekleştirmek için Cost Explorer'ın ayrıntılı filtreleme özelliğini kullanın
örnek türlerine göre.

C. EC2 maliyetlerini karşılaştırmak için AWS Faturalandırma ve Maliyet Yönetimi panosundaki grafikleri kullanın
son 2 aydaki bulut sunucusu türlerine dayanmaktadır.

D. Bir rapor oluşturmak ve bunu bir Amazon S3 klasörüne göndermek için AWS Maliyet ve Kullanım Raporlarını kullanın. Kullanım
dayalı etkileşimli bir grafik oluşturmak için kaynak olarak Amazon S3 ile Amazon QuickSight
örnek türleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bulut sunucusu türlerine göre EC2 maliyetlerinin derinlemesine analizini gerçekleştirmek için Cost Explorer'ın ayrıntılı filtreleme özelliğini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 25
Bir şirket bir uygulama tasarlıyor. Uygulama, aşağıdakileri gerçekleştirmek için bir AWS Lambda işlevini kullanır:
Amazon API Gateway aracılığıyla bilgi almak ve bilgileri bir Amazon'da saklamak
Aurora PostgreSQL veritabanı.
Konsept kanıtlama aşamasında şirketin Lambda kotalarını önemli ölçüde artırması gerekiyor
Şirketin veritabanına yüklemesi gereken yüksek hacimli verileri işlemek için. bir çözüm
mimarın ölçeklenebilirliği artırmak ve konfigürasyonu en aza indirmek için yeni bir tasarım önermesi gerekir
çaba.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlev kodunu Amazon EC2'de çalışan Apache Tomcat koduna yeniden düzenleyin
örnekler. Yerel Java Veritabanı Bağlantısı (JDBC) sürücülerini kullanarak veritabanını bağlayın.

B. Platformu Aurora'dan Amazon DynamoDProvision ve DynamoDB Accelerator'a değiştirin
(DAX) kümesi. Mevcut DynamoDB API çağrılarını DAX'a yönlendirmek için DAX istemci SDK'sını kullanın
küme.

C. İki Lambda fonksiyonunu ayarlayın. Bilgileri almak için bir işlevi yapılandırın. Yapılandır
bilgileri veritabanına yüklemek için başka bir işlev. Lambda işlevlerini kullanarak entegre edin
Amazon Basit Bildirim Hizmeti (Amazon SNS).

D. İki Lambda fonksiyonunu ayarlayın. Bilgileri almak için bir işlevi yapılandırın. Yapılandır
bilgileri veritabanına yüklemek için başka bir işlev. Lambda işlevlerini kullanarak entegre edin
bir Amazon Simple Queue Service (Amazon SQS) kuyruğu.

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

Soru 26
Bir şirketin Amazon S3 klasörlerinin uyumlu olduğundan emin olmak için AWS Cloud dağıtımını gözden geçirmesi gerekiyor
yetkisiz yapılandırma değişiklikleri olmamalıdır.
Bir çözüm mimarı bu hedefe ulaşmak için ne yapmalıdır?

A. AWS Config'i uygun kurallarla açın.

B. Uygun kontrollerle AWS Trusted Advisor'ı açın.

C. Uygun değerlendirme şablonuyla Amazon Inspector'ı açın.

D. Amazon S3 sunucusu erişim günlüğünü açın. Amazon EventBridge'i (Amazon Cloud) Yapılandırma
Etkinlikleri İzle).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Config'i uygun kurallarla açın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 27
Bir şirket yeni bir uygulama başlatıyor ve uygulama metriklerini Amazon'da görüntüleyecek
CloudWatch kontrol paneli. Şirketin ürün yöneticisinin bu kontrol paneline erişmesi gerekiyor
periyodik olarak. Ürün yöneticisinin bir AWS hesabı yok. Bir çözüm mimarının yapması gerekenler
En az ayrıcalık ilkesini takip ederek ürün yöneticisine erişim sağlayın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Kontrol panelini CloudWatch konsolundan paylaşın. Ürün yöneticisinin e-postasını girin
adresine gidin ve paylaşım adımlarını tamamlayın. Kontrol paneli için paylaşılabilir bir bağlantı sağlayın
ürün yöneticisi.

B. Ürün yöneticisi için özel olarak bir IAM kullanıcısı oluşturun. Ekle
CloudWatchReadOnlyAWS tarafından yönetilen politikaya kullanıcıya erişin. Yeni oturum açma kimlik bilgilerini paylaşın
ürün yöneticisi ile. Doğru kontrol panelinin tarayıcı URL'sini ürünle paylaşın
yönetici.

C. Şirketin çalışanları için bir IAM kullanıcısı oluşturun. ViewOnlyAccess AWS yönetimini ekleyin
IAM kullanıcısına yönelik politika. Yeni oturum açma kimlik bilgilerini ürün yöneticisiyle paylaşın. Ürünü sorun
yöneticisinin CloudWatch konsoluna gitmesini ve kontrol panelini ada göre bulmasını sağlar.
Gösterge tabloları bölümü.

D. Genel bir alt ağda bir savunma sunucusunu konuşlandırın. Ürün yöneticisinin erişime ihtiyacı olduğunda
kontrol panelini açın, sunucuyu başlatın ve RDP kimlik bilgilerini paylaşın. Kale sunucusunda,
Tarayıcı, önbelleğe alınmış AWS kimlik bilgileriyle kontrol paneli URL'sini açacak şekilde yapılandırılmıştır.
kontrol panelini görüntülemek için uygun izinler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kontrol panelini CloudWatch konsolundan paylaşın. Ürün yöneticisinin e-posta adresini girin ve paylaşım adımlarını tamamlayın. Kontrol paneli için ürün yöneticisine paylaşılabilir bir bağlantı sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 28
Bir şirket uygulamaları AWS'ye taşıyor. Uygulamalar farklı konumlarda yer alıyor
hesaplar. Şirket, hesapları AWS Organizasyonlarını kullanarak merkezi olarak yönetir.
Şirketin güvenlik ekibinin, şirketin tüm birimlerinde tek oturum açma (SSO) çözümüne ihtiyacı var
hesaplar. Şirketin şirket içindeki kullanıcıları ve grupları yönetmeye devam etmesi gerekiyor
kendi kendini yöneten Microsoft Active Directory.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS SSO konsolundan AWS Tek Oturum Açmayı (AWS SSO) etkinleştirin. Tek yönlü bir orman oluşturun
şirketin kendi kendini yöneten Microsoft Active Directory'sine bağlanmak için güven veya tek yönlü etki alanı güveni
AWS SSO ile Microsoft Active Directory için AWS Directory Service'i kullanarak.

B. AWS SSO konsolundan AWS Tek Oturum Açmayı (AWS SSO) etkinleştirin. İki yönlü bir orman oluşturun
kullanarak şirketin kendi kendini yöneten Microsoft Active Directory'sini AWS SSO'ya bağlama güveni
Microsoft Active Directory için AWS Dizin Hizmeti.

C. AWS Dizin Hizmetini kullanın. Şirketle iki yönlü bir güven ilişkisi oluşturun
kendi kendini yöneten Microsoft Active Directory.

D. Şirket içinde bir kimlik sağlayıcı (IdP) dağıtın. AWS Tek Oturum Açmayı (AWS SSO) şu adresten etkinleştirin:
AWS SSO konsolu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS SSO konsolundan AWS Tek Oturum Açmayı (AWS SSO) etkinleştirin. Microsoft Active Directory için AWS Directory Service'i kullanarak şirketin kendi kendini yöneten Microsoft Active Directory'sini AWS SSO'ya bağlamak için iki yönlü bir orman güveni oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 29
Bir şirket, UDP bağlantılarını kullanan bir İnternet Protokolü Üzerinden Ses (VoIP) hizmeti sağlıyor.
Hizmet, Otomatik Ölçeklendirme grubunda çalışan Amazon EC2 bulut sunucularından oluşur. şirket
birden fazla AWS Bölgesinde dağıtımları vardır.
Şirketin kullanıcıları en düşük gecikme süresine sahip Bölgeye yönlendirmesi gerekiyor. Şirket aynı zamanda
Bölgeler arasında otomatik yük devretme ihtiyacı var.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir Ağ Yük Dengeleyicisini (NLB) ve ilişkili bir hedef grubu dağıtın. Hedefi ilişkilendirin
Otomatik Ölçeklendirme grubuyla gruplandırın. NLB'yi her birinde AWS Global Accelerator uç noktası olarak kullanın
Bölge.

B. Bir Application Load Balancer'ı (ALB) ve ilişkili bir hedef grubu dağıtın. İlişkilendir
Otomatik Ölçeklendirme grubuyla hedef grup. ALB'yi AWS Global Accelerator uç noktası olarak kullanın
her Bölge.

C. Bir Ağ Yük Dengeleyicisini (NLB) ve ilişkili bir hedef grubu dağıtın. Hedefi ilişkilendirin
Otomatik Ölçeklendirme grubuyla gruplandırın. Şunu işaret eden bir Amazon Route 53 gecikme kaydı oluşturun:
her NLB için takma adlar. Gecikme kaydını şu şekilde kullanan bir Amazon CloudFront dağıtımı oluşturun:
bir köken.

D. Bir Application Load Balancer'ı (ALB) ve ilişkili bir hedef grubu dağıtın. İlişkilendir
Otomatik Ölçeklendirme grubuyla hedef grup. işaret eden bir Amazon Route 53 ağırlıklı kayıt oluşturun.
her ALB için takma adlara. Ağırlıklı kaydı kullanan bir Amazon CloudFront dağıtımı dağıtın
bir köken olarak.

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

Soru 30
Bir geliştirme ekibi, genel amaçlı Amazon RDS'sinde aylık kaynak yoğun testler yürütüyor
Performance Insights'ın etkin olduğu MySQL veritabanı örneği için. Test her yıl 48 saat sürüyor
ay ve veritabanını kullanan tek işlemdir. Ekip maliyetleri düşürmek istiyor
Veritabanı bulut sunucusunun işlem ve bellek niteliklerini azaltmadan testleri çalıştırma.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Testler tamamlandığında veritabanı bulut sunucusunu durdurun. Gerektiğinde veritabanı örneğini yeniden başlatın.

B. Testler gerçekleştirilirken otomatik olarak ölçeklendirmek için veritabanı bulut sunucusuyla Otomatik Ölçeklendirme ilkesini kullanın.
tamamlandı.

C. Testler tamamlandığında anlık görüntü oluşturun. Veritabanı örneğini sonlandırın ve geri yükleyin
gerektiğinde anlık görüntü.

D. Testler tamamlandığında veritabanı bulut sunucusunu düşük kapasiteli bir bulut sunucusuyla değiştirin. DB'yi değiştirin
Gerektiğinde tekrar örnek.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Testler tamamlandığında anlık görüntü oluşturun. Veritabanı örneğini sonlandırın ve gerektiğinde anlık görüntüyü geri yükleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 31
Web uygulamasını AWS'de barındıran bir şirket, tüm Amazon EC2 bulut sunucularının güvence altına alınmasını istiyor.
Amazon RDS Veritabanı bulut sunucuları. ve Amazon Redshift kümeleri etiketlerle yapılandırılır.
şirket bu kontrolü yapılandırma ve çalıştırma çabasını en aza indirmek istiyor.
Bir çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Düzgün etiketlenmemiş kaynakları tanımlamak ve tespit etmek için AWS Config kurallarını kullanın.

B. Düzgün etiketlenmemiş kaynakları görüntülemek için Maliyet Gezgini'ni kullanın. Bu kaynakları etiketleyin
manuel olarak.

C. Tüm kaynakların uygun etiket tahsisi açısından kontrol edilmesi için API çağrıları yazın. Kodu periyodik olarak bir
EC2 örneği.

D. Tüm kaynakların uygun etiket tahsisi açısından kontrol edilmesi için API çağrıları yazın. Bir AWS Lambda planlayın
Kodu düzenli aralıklarla çalıştırmak için Amazon CloudWatch aracılığıyla çalışır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Düzgün etiketlenmemiş kaynakları tanımlamak ve tespit etmek için AWS Config kurallarını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 32
Bir geliştirme ekibinin, diğer ekiplerin erişebileceği bir web sitesini barındırması gerekir. Web sitesi
içerikler HTML, CSS, istemci tarafı JavaScript ve resimlerden oluşur.
Web sitesini barındırmak için EN uygun maliyetli yöntem hangisidir?

A. Web sitesini kapsayıcı hale getirin ve AWS Fargate'te barındırın.

B. Bir Amazon S3 klasörü oluşturun ve web sitesini orada barındırın.

C. Web sitesini barındırmak için bir Amazon EC2 örneğine bir web sunucusu dağıtın.

D. Express.js'yi kullanan bir AWS Lambda hedefiyle bir Application Load Balancer yapılandırın
çerçeve.

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

Soru 33
Bir şirket, AWS'de bir çevrimiçi pazaryeri web uygulaması çalıştırıyor. Uygulama hizmet vermektedir
Yoğun saatlerde yüz binlerce kullanıcı. Şirketin ölçeklenebilir bir yapıya ihtiyacı var
Milyonlarca finansal işlemin ayrıntılarını diğer birkaç kişiyle paylaşmak için neredeyse gerçek zamanlı çözüm
dahili uygulamalar. Daha önce hassas verilerin kaldırılması için işlemlerin de işlenmesi gerekir.
düşük gecikmeli erişim için bir belge veritabanında saklanıyor.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. İşlem verilerini Amazon DynamoDB'de saklayın. Kaldırmak için DynamoDB'de bir kural ayarlayın
Yazma sırasında her işlemden gelen hassas veriler. Paylaşmak için DynamoDB Streams'i kullanın.
diğer uygulamalarla işlem verileri.

B. Verileri Amazon'da depolamak için işlem verilerini Amazon Kinesis Data Firehose'a aktarın
DynamoDB ve Amazon S3. Kaldırmak için Kinesis Data Firehose ile AWS Lambda entegrasyonunu kullanın
hassas veriler. Diğer uygulamalar Amazon S3'te depolanan verileri tüketebilir.

C. İşlem verilerini Amazon Kinesis Data Streams'e aktarın. AWS Lambda entegrasyonunu kullanın
hassas verileri her işlemden kaldırmak ve ardından işlem verilerini Amazon'da depolamak
DinamoDB. Diğer uygulamalar, işlem verilerini Kinesis veri akışından tüketebilir.

D. Toplu işlem verilerini Amazon S3'te dosyalar olarak saklayın. Her şeyi işlemek için AWS Lambda'yı kullanın
Amazon S3'teki dosyaları güncellemeden önce hassas verileri dosyalayın ve kaldırın. Lambda işlevi o zaman
verileri Amazon DynamoDB'de saklar. Diğer uygulamalar, içinde depolanan işlem dosyalarını kullanabilir.
Amazon S3.

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

Soru 34
Bir şirket, çok katmanlı uygulamalarını AWS'de barındırıyor. Uyumluluk, yönetişim, denetim ve
güvenliği sağlamak için şirketin AWS kaynaklarındaki yapılandırma değişikliklerini izlemesi ve bir kayıt tutması gerekir.
bu kaynaklara yapılan API çağrılarının geçmişi.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Yapılandırma değişikliklerini izlemek için AWS CloudTrail'i ve API çağrılarını kaydetmek için AWS Config'i kullanın.

B. Yapılandırma değişikliklerini izlemek için AWS Config'i ve API çağrılarını kaydetmek için AWS CloudTrail'i kullanın.

C. Yapılandırma değişikliklerini izlemek için AWS Config'i ve API çağrılarını kaydetmek için Amazon CloudWatch'u kullanın.

D. Yapılandırma değişikliklerini izlemek için AWS CloudTrail'i ve API'yi kaydetmek için Amazon CloudWatch'u kullanın
Aramalar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yapılandırma değişikliklerini izlemek için AWS Config'i ve API çağrılarını kaydetmek için AWS CloudTrail'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 35
Bir şirket, AWS Cloud'da halka açık bir web uygulamasını kullanıma sunmaya hazırlanıyor.
mimari, Elastic Load Balancer'ın arkasındaki VPC içindeki Amazon EC2 bulut sunucularından oluşur
(ELB). DNS için üçüncü taraf bir hizmet kullanılır. Şirketin çözüm mimarı,
Büyük ölçekli DDoS saldırılarını tespit etmek ve bunlara karşı korunmak için bir çözüm öneriyoruz.
Hangi çözüm bu gereksinimleri karşılıyor?

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

Soru 36
Bir şirket AWS Cloud'da bir uygulama geliştiriyor. Uygulama verileri depolayacak
İki AWS Bölgesinde Amazon S3 paketleri. Şirketin bir AWS Key Management kullanması gerekir
S3 klasörlerinde depolanan tüm verileri şifrelemek için hizmet (AWS KMS) müşteri tarafından yönetilen anahtar.
Her iki S3 klasöründeki veriler aynı KMS anahtarıyla şifrelenmeli ve şifresi çözülmelidir. Veriler
ve anahtarın iki Bölgenin her birinde saklanması gerekir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her Bölgede bir S3 klasörü oluşturun. S3 paketlerini sunucu tarafı şifrelemeyi kullanacak şekilde yapılandırma
Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3). S3 arasında çoğaltmayı yapılandırma
kovalar.

B. Müşteri tarafından yönetilen bir çoklu Bölge KMS anahtarı oluşturun. Her Bölgede bir S3 klasörü oluşturun.
S3 klasörleri arasındaki çoğaltmayı yapılandırın. Uygulamayı KMS anahtarını kullanacak şekilde yapılandırın
istemci tarafı şifreleme.

C. Her Bölgede müşteri tarafından yönetilen bir KMS anahtarı ve bir S3 klasörü oluşturun. S3'ü yapılandırma
Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanmak için paketler.
S3 klasörleri arasındaki çoğaltmayı yapılandırın.

D. Her Bölgede müşteri tarafından yönetilen bir KMS anahtarı ve bir S3 klasörü oluşturun. S3'ü yapılandırma
AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanmak için paketler. Çoğaltmayı yapılandırma
S3 kovaları arasında.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Müşteri tarafından yönetilen çok Bölgeli bir KMS anahtarı oluşturun. Her Bölgede bir S3 klasörü oluşturun. S3 klasörleri arasındaki çoğaltmayı yapılandırın. Uygulamayı, istemci tarafı şifrelemeli KMS anahtarını kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 37
Bir şirket kısa süre önce AWS'sindeki Amazon EC2 bulut sunucularında çeşitli yeni iş yükleri başlattı
hesap. Şirketin örneklere erişmek ve bunları yönetmek için bir strateji oluşturması gerekiyor
uzaktan ve güvenli bir şekilde. Şirketin aşağıdakilerle çalışan tekrarlanabilir bir süreç uygulaması gerekiyor:
yerel AWS hizmetleri sunar ve AWS Well-Architected Çerçevesini takip eder.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her örneğin terminal arayüzüne doğrudan erişmek için EC2 seri konsolunu kullanın.
yönetim.

B. Mevcut her örneğe ve yeni örneğe uygun IAM rolünü ekleyin. AWS Sistemlerini Kullanın
Yönetici Oturum Yöneticisi uzak bir SSH oturumu oluşturmak için.

C. Bir yönetimsel SSH anahtar çifti oluşturun. Genel anahtarı her EC2 örneğine yükleyin. Dağıt
Her örneğin yönetimi için bir tünel sağlamak üzere genel bir alt ağdaki bastion ana bilgisayarı.

D. Bir AWS Siteden Siteye VPN bağlantısı kurun. Yöneticilere yerel bilgilerini kullanma talimatı verin
VPN genelinde SSH anahtarlarını kullanarak doğrudan örneklere bağlanmak için şirket içi makineler
tünel.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Mevcut her örneğe ve yeni örneğe uygun IAM rolünü ekleyin. Uzak bir SSH oturumu oluşturmak için AWS Systems Manager Session Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 38
Bir şirket Amazon S3'te statik bir web sitesi barındırıyor ve DNS için Amazon Route 53'ü kullanıyor.
Web sitesi dünyanın dört bir yanından artan talep görüyor. Şirket şunları yapmalıdır:
web sitesine erişen kullanıcılar için gecikmeyi azaltır.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. Web sitesini içeren S3 klasörünü tüm AWS Bölgelerine kopyalayın. Rota 53 Ekle
coğrafi konum yönlendirme girişleri.

B. AWS Global Accelerator'da hızlandırıcıların sağlanması. Sağlanan IP adreslerini aşağıdakilerle ilişkilendirin
S3 kovası. Hızlandırıcıların IP adreslerini işaret edecek şekilde Route 53 girişlerini düzenleyin.

C. S3 klasörünün önüne bir Amazon CloudFront dağıtımı ekleyin. Route 53 girişlerini şu şekilde düzenleyin:
CloudFront dağıtımını işaret edin.

D. Pakette S3 Transfer Hızlandırmayı etkinleştirin. Route 53 girişlerini yeniyi işaret edecek şekilde düzenleyin
uç nokta.

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

Soru 39
Bir şirket, web sitesinde aranabilir bir öğe deposu tutar. Veriler bir yerde saklanır
10 milyondan fazla satır içeren Amazon RDS for MySQL veritabanı tablosu. Veritabanı
2 TB Genel Amaçlı SSD depolama alanına sahiptir. Her gün bu verilere karşı milyonlarca güncelleme var
Şirketin web sitesi aracılığıyla gün boyunca.
Şirket, bazı ekleme işlemlerinin 10 saniye veya daha uzun sürdüğünü fark etti.
şirket, sorunun veritabanı depolama performansından kaynaklandığını belirlemiştir.
Bu performans sorununu hangi çözüm çözer?

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

Soru 40
Bir şirketin her biri toplu olarak 1 TB durum uyarısı üreten binlerce uç cihazı vardır
gün. Her uyarı yaklaşık 2 KB boyutundadır. Bir çözüm mimarının bir çözümü uygulaması gerekir
Gelecekteki analizler için uyarıları almak ve saklamak.
Şirket yüksek kullanılabilirliğe sahip bir çözüm istiyor. Ancak şirketin maliyetleri en aza indirmesi gerekiyor
ve ek altyapıyı yönetmek istemiyor. Ayrıca şirket,
Anında analiz için 14 günlük veri mevcuttur ve 14 günden daha eski tüm veriler arşivlenir.
Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. Uyarıları almak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Yapılandır
Uyarıları bir Amazon S3 klasörüne iletmek için Kinesis Data Firehose akışı. S3 Yaşam Döngüsü ayarlama
14 gün sonra verileri Amazon S3 Glacier'a aktaracak yapılandırma.

B. Amazon EC2 bulut sunucularını iki Erişilebilirlik Alanında başlatın ve bunları bir Elastic'in arkasına yerleştirin
Uyarıları almak için Yük Dengeleyici. EC2 bulut sunucularında uyarıları depolayacak bir komut dosyası oluşturun
bir Amazon S3 kovası. Verileri Amazon S3'e aktarmak için bir S3 Yaşam Döngüsü yapılandırması ayarlayın
14 gün sonra buzul.

C. Uyarıları almak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Yapılandır
Uyarıları bir Amazon OpenSearch Hizmetine (Amazon) iletmek için Kinesis Data Firehose akışı
Elasticsearch Hizmeti) kümesi. Amazon OpenSearch Hizmetini Ayarlayın (Amazon Elasticsearch
Service) kümesinin her gün manuel anlık görüntüler alması ve daha eski olan kümedeki verileri silmesi
14 günden fazla.

D. Uyarıları almak için bir Amazon Simple Queue Service (Amazon SQS) standart kuyruğu oluşturun,
ve mesaj saklama süresini 14 gün olarak ayarlayın. Tüketicileri SQS kuyruğunu yoklayacak şekilde yapılandırın,
mesajın yaşını kontrol edin ve mesaj verilerini gerektiği gibi analiz edin. Mesaj 14 ise
gün eskiyse, tüketici mesajı bir Amazon S3 klasörüne kopyalamalı ve
SQS kuyruğundan mesaj.

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

Soru 41
Bir şirketin uygulaması, veriler için birden fazla hizmet olarak yazılım (SaaS) kaynağıyla bütünleşir
koleksiyon. Şirket, verileri almak ve verileri yüklemek için Amazon EC2 bulut sunucularını çalıştırıyor
analiz için bir Amazon S3 klasörüne aktarın. Alıp yükleyen aynı EC2 bulut sunucusu
Veriler ayrıca yükleme tamamlandığında kullanıcıya bir bildirim gönderir. Şirket fark etti
uygulama performansını yavaşlatır ve performansı mümkün olduğunca artırmak ister.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. EC2 bulut sunucularının ölçeğinin genişletilebilmesi için bir Otomatik Ölçeklendirme grubu oluşturun. Bir S3 etkinliğini yapılandırma
etkinlikleri bir Amazon Simple Notification Service (Amazon SNS) konusuna göndermek için bildirim
S3 klasörüne yükleme tamamlandı.

B. Her SaaS kaynağı ile S3 arasında veri aktarımı için bir Amazon AppFlow akışı oluşturun
kova. Olayları bir Amazon Simple Notification'a göndermek için bir S3 olay bildirimi yapılandırma
S3 paketine yükleme tamamlandığında Hizmet (Amazon SNS) konusu.

C. Her SaaS kaynağı için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun.
çıkış verilerini gönderin. S3 paketini kuralın hedefi olarak yapılandırın. İkinci bir EventBridge oluşturun
(Bulut İzleme Etkinlikleri) kuralı, S3 klasörüne yükleme tamamlandığında etkinlikleri göndermeye yöneliktir.
İkinci kuralın hedefi olarak bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın.

D. EC2 bulut sunucusu yerine kullanılacak bir Docker kapsayıcısı oluşturun. Container mimarisine alınmış olanı barındırın
Amazon Elastic Container Service (Amazon ECS) üzerindeki uygulama. Amazon CloudWatch'u yapılandırın
Amazon Simple Notification Service (Amazon SNS) konusuna etkinlik göndermek için Container Insights
S3 paketine yükleme tamamlandığında.

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

Soru 42
Bir şirket, Amazon EC2 bulut sunucularında yüksek düzeyde kullanılabilir bir görüntü işleme uygulaması çalıştırıyor.
tek VPC. EC2 bulut sunucuları, birden çok Erişilebilirlik Alanındaki çeşitli alt ağlarda çalışır.
EC2 bulut sunucuları birbirleriyle iletişim kurmaz. Ancak EC2 bulut sunucularının indirilmesi
Amazon S3'teki görüntüleri tek bir NAT ağ geçidi aracılığıyla Amazon S3'e yükleyin.
şirket veri aktarım ücretleri konusunda endişeli.
Şirketin Bölgesel veri aktarım ücretlerinden kaçınmasının EN uygun maliyetli yolu nedir?

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

Soru 43
Bir şirketin zamana duyarlı büyük miktarda veri üreten bir şirket içi uygulaması var
Amazon S3'e yedeklenir. Uygulama büyüdü ve hakkında kullanıcı şikayetleri var
internet bant genişliği sınırlamaları. Bir çözüm mimarının uzun vadeli bir çözüm tasarlaması gerekir.
hem Amazon S3'e zamanında yedekleme yapılmasına hem de internet bağlantısı üzerinde en az etkiye sahip olmasına olanak tanır
dahili kullanıcılar.
Hangi çözüm bu gereksinimleri karşılıyor?

A. AWS VPN bağlantıları kurun ve tüm trafiği bir VPC ağ geçidi uç noktası üzerinden proxy yapın.

B. Yeni bir AWS Direct Connect bağlantısı kurun ve yedekleme trafiğini bu yeni üzerinden yönlendirin
bağlantı.

C. Günlük AWS Snowball cihazlarını sipariş edin. Verileri Snowball cihazlarına yükleyin ve
cihazları her gün AWS'ye aktarır.

D. AWS Management Console aracılığıyla bir destek bildirimi gönderin. S3'ün kaldırılmasını talep edin
hesaptan hizmet limitleri.

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

Soru 44
Bir şirketin kritik verileri içeren bir Amazon S3 klasörü var. Şirketin korunması gerekiyor
yanlışlıkla silinen veriler.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

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

Soru 45
Bir şirketin aşağıdakilerden oluşan bir veri alımı iş akışı vardır:
(cid:127) Yeni verilerle ilgili bildirimlere yönelik bir Amazon Basit Bildirim Hizmeti (Amazon SNS) konusu
teslimatlar
(cid:127) Verileri işlemek ve meta verileri kaydetmek için bir AWS Lambda işlevi
Şirket, ağ kullanımı nedeniyle alım iş akışının ara sıra başarısız olduğunu gözlemliyor
bağlantı sorunları. Böyle bir hata meydana geldiğinde Lambda işlevi,
şirket işi manuel olarak yeniden çalıştırmadığı sürece ilgili veriler.
Bir çözüm mimarının Lambda'nın uyumlu olmasını sağlamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
işlev gelecekte tüm verileri alır mı? (İki tane seçin.)

A. Lambda işlevini birden fazla Erişilebilirlik Alanında dağıtın.

B. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun ve bunu SNS'ye abone olun
konu.

C. Lambda işlevine ayrılan CPU'yu ve belleği artırın.

D. Lambda işlevi için sağlanan verimi artırın.

E. Amazon Simple Queue Service'den (Amazon SQS) okumak için Lambda işlevini değiştirin
kuyruk.

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

Soru 46
Bir şirketin mağazalara pazarlama hizmetleri sağlayan bir uygulaması var. Hizmetler
mağaza müşterilerinin önceki satın alımlarına dayanmaktadır. Mağazalar işlem verilerini
SFTP aracılığıyla şirkete aktarılır ve veriler yeni pazarlama oluşturmak için işlenir ve analiz edilir
teklifler. Bazı dosyaların boyutu 200 GB'ı aşabilir.
Son zamanlarda şirket, bazı mağazaların aşağıdakileri içeren dosyalar yüklediğini keşfetti:
dahil edilmemesi gereken kişisel olarak tanımlanabilir bilgiler (PII). Şirket istiyor
Kimlik bilgilerinin tekrar paylaşılması durumunda yöneticilerin uyarılması. Şirket aynı zamanda otomasyonu da istiyor
iyileştirme.
Bir çözüm mimarı bu gereksinimleri EN AZ geliştirmeyle karşılamak için ne yapmalıdır?
çaba mı?

A. Güvenli aktarım noktası olarak Amazon S3 klasörünü kullanın. Taramak için Amazon Inspector'ı kullanın
Kovadaki nesneler. Nesneler PII içeriyorsa nesneleri kaldırmak için bir S3 Yaşam Döngüsü ilkesini tetikleyin
PII içerenler.

B. Güvenli aktarım noktası olarak Amazon S3 klasörünü kullanın. Nesneleri taramak için Amazon Macie'yi kullanın
kova. Nesneler PII içeriyorsa Amazon Simple Notification Service'ı (Amazon SNS) kullanın.
PII içeren nesnelerin kaldırılması için yöneticilere bir bildirim tetikleyin.

C. AWS Lambda işlevinde özel tarama algoritmaları uygulayın. Şu durumlarda işlevi tetikleyin:
nesneler kovaya yüklenir. Nesneler PII içeriyorsa Amazon Simple Notification Service'ı kullanın
(Amazon SNS) yöneticilere PII içeren nesneleri kaldırmaları için bir bildirim tetikleyecek.

D. AWS Lambda işlevinde özel tarama algoritmaları uygulayın. Şu durumlarda işlevi tetikleyin:
nesneler kovaya yüklenir. Nesneler PII içeriyorsa Amazon Simple Email Service'i kullanın
(Amazon SES) yöneticilere bir bildirim tetiklemek ve bir S3 Yaşam Döngüsü politikasını tetiklemek için
PII içeren etleri çıkarın.

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

Soru 47
Bir şirketin üç belirli Erişilebilirlik Alanında garantili Amazon EC2 kapasitesine ihtiyacı vardır.
1 hafta sürecek yaklaşan bir etkinlik için belirli bir AWS Bölgesi.
Şirket EC2 kapasitesini garanti altına almak için ne yapmalıdır?

A. İhtiyaç duyulan Bölgeyi belirten Rezerve Edilmiş Bulut Sunucularını satın alın.

B. İhtiyaç duyulan Bölgeyi belirten bir İsteğe Bağlı Kapasite Rezervasyonu oluşturun.

C. İhtiyaç duyulan Bölgeyi ve üç Erişilebilirlik Alanını belirten Rezerve Bulut Sunucularını satın alın.

D. Bölgeyi ve üç Kullanılabilirliği belirten bir İsteğe Bağlı Kapasite Rezervasyonu oluşturun
İhtiyaç duyulan bölgeler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İhtiyaç duyulan Bölgeyi ve üç Erişilebilirlik Alanını belirten bir İsteğe Bağlı Kapasite Rezervasyonu oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 48
Bir şirketin web sitesi, ürün kataloğu için bir Amazon EC2 bulut sunucusu deposunu kullanıyor. şirket
kataloğun yüksek düzeyde kullanılabilir olduğundan ve kataloğun dayanıklı bir ortamda saklandığından emin olmak istiyor
konum.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

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

Soru 49
Bir şirket, çağrı transkript dosyalarını aylık olarak saklar. Kullanıcılar dosyalara rastgele olarak erişir
Aramanın üzerinden 1 yıl geçti ancak kullanıcılar 1 yıldan sonra dosyalara nadiren erişiyor. Şirket istiyor
Kullanıcılara daha küçük dosyaları sorgulama ve alma yeteneği vererek çözümünü optimize edin.
1 yaşına mümkün olan en kısa sürede. Eski dosyaların alınmasında gecikme kabul edilebilir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Bireysel dosyaları Amazon S3 Glacier Instant Retrieval'da etiketlerle saklayın. Etiketleri sorgula
dosyaları S3 Glacier Instant Retrieval'dan alın.

B. Dosyaları tek tek Amazon S3 Intelligent-Tiering'de depolayın. Taşımak için S3 Yaşam Döngüsü ilkelerini kullanın
dosyalar 1 yıl sonra S3 Glacier Esnek Erişime aktarılır. Amazon'daki dosyaları sorgulayın ve alın
Amazon Athena'yı kullanarak S3. S3'ü kullanarak S3 Glacier'deki dosyaları sorgulayın ve alın
Buzul Seçin.

C. Bireysel dosyaları etiketlerle birlikte Amazon S3 Standard depolama alanında saklayın. Her biri için arama meta verilerini saklayın
Amazon S3 Standart depolama alanında arşivleyin. Dosyaları S3 Glacier'a taşımak için S3 Yaşam Döngüsü ilkelerini kullanın
1 yıl sonra anında geri alma. Amazon'dan meta veri arayarak dosyaları sorgulayın ve alın
S3.

D. Tek tek dosyaları Amazon S3 Standard depolama alanında saklayın. Taşımak için S3 Yaşam Döngüsü ilkelerini kullanın
dosyalar 1 yıl sonra S3 Glacier Deep Archive'a aktarılır. Arama meta verilerini Amazon RDS'de saklayın. Sorgula
Amazon RDS'den dosyalar. Dosyaları S3 Glacier Deep Archive'dan alın.

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

Soru 50
Bir şirketin 1.000 Amazon EC2 Linux bulut sunucusunda çalışan bir üretim iş yükü var.
iş yükü üçüncü taraf yazılım tarafından desteklenmektedir. Şirketin üçüncü tarafa yama yapması gerekiyor
Kritik bir güvenlik açığını düzeltmek için tüm EC2 bulut sunucularındaki yazılımları mümkün olan en kısa sürede kullanın.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Yamayı tüm EC2 bulut sunucularına uygulamak için bir AWS Lambda işlevi oluşturun.

B. Yamayı tüm EC2 bulut sunucularına uygulamak için AWS Systems Manager Patch Manager'ı yapılandırın.

C. Yamayı tüm EC2'ye uygulamak için bir AWS Systems Manager bakım penceresi planlayın
örnekler.

D. Yamayı uygulayan özel bir komut çalıştırmak için AWS Systems Manager Run Komutunu kullanın
tüm EC2 bulut sunucularına.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yamayı tüm EC2 bulut sunucularına uygulayan özel bir komut çalıştırmak için AWS Systems Manager Run Command'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 51
Bir şirket, sipariş gönderim istatistiklerinin bir kişi tarafından alınmasını sağlayan bir uygulama geliştirmektedir.
REST API'si. Şirket nakliye istatistiklerini çıkarmak, verileri bir
okunması kolay HTML biçimi ve raporu aynı anda birden fazla e-posta adresine gönderin
her sabah.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Verileri Amazon Kinesis Data Firehose'a gönderecek şekilde uygulamayı yapılandırın.

B. Verileri biçimlendirmek ve raporu e-posta yoluyla göndermek için Amazon Simple Email Service'i (Amazon SES) kullanın.
e-posta.

C. Bir etkinlik başlatan, planlanmış bir Amazon EventBridge (Amazon CloudWatch Events) etkinliği oluşturun.
Veriler için uygulamanın API'sini sorgulamaya yönelik AWS Glue işi.

D. Bir etkinlik başlatan, planlanmış bir Amazon EventBridge (Amazon CloudWatch Events) etkinliği oluşturun.
Veriler için uygulamanın API'sini sorgulamaya yönelik AWS Lambda işlevi.

E. Uygulama verilerini Amazon S3'te saklayın. Amazon Basit Bildirim Hizmeti Oluşturun
(Amazon SNS) konusunu, raporu e-postayla göndermek için S3 olay hedefi olarak kullanın.

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

Soru 52
Bir şirket şirket içi uygulamasını AWS'ye geçirmek istiyor. Uygulama üretir
Boyutları onlarca gigabayttan yüzlerce terabayta kadar değişen çıktı dosyaları. Uygulama verileri
standart bir dosya sistemi yapısında saklanmalıdır. Şirket ölçeklenebilir bir çözüm istiyor
otomatik olarak. Yüksek oranda kullanılabilir ve minimum operasyonel ek yük gerektirir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamayı Amazon Elastic Container Service'te (Amazon) konteyner olarak çalışacak şekilde taşıyın
ECS). Depolama için Amazon S3'ü kullanın.

B. Uygulamayı Amazon Elastic Kubernetes Service'te (Amazon) konteyner olarak çalışacak şekilde taşıyın
EKS). Depolama için Amazon Elastic Block Store'u (Amazon EBS) kullanın.

C. Uygulamayı Multi-AZ Auto Scaling grubundaki Amazon EC2 bulut sunucularına taşıyın. Kullanım
Depolama için Amazon Elastic File System (Amazon EFS).

D. Uygulamayı Multi-AZ Auto Scaling grubundaki Amazon EC2 bulut sunucularına taşıyın. Kullanım
Depolama için Amazon Elastic Block Store (Amazon EBS).

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

Soru 53
Bir şirketin muhasebe kayıtlarını Amazon S3'te saklaması gerekiyor. Kayıtlar şöyle olmalı
1 yıl süreyle anında erişilebilir, daha sonra 9 yıl daha arşivlenmesi gerekir. Hiç kimse
yönetici kullanıcılar ve kök kullanıcılar da dahil olmak üzere şirket kayıtları silebilir
10 yıllık sürenin tamamı boyunca. Kayıtlar maksimum esneklikle saklanmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Kayıtları 10 yıllık dönemin tamamı boyunca S3 Glacier'da saklayın. Bir erişim kontrolü ilkesi kullanın
10 yıl süreyle kayıtların silinmesini reddedebilir.

B. Kayıtları S3 Intelligent-Tiering'i kullanarak saklayın. Silinmesini reddetmek için bir IAM politikası kullanın
kayıtları. 10 yıl sonra IAM politikasını silmeye izin verecek şekilde değiştirin.

C. Kayıtları S3 Standard'tan S3 Glacier Deep'e geçirmek için bir S3 Yaşam Döngüsü politikası kullanın
1 yıl sonra arşivleyin. S3 Object Lock'u 10 yıl boyunca uyumluluk modunda kullanın.

D. Kayıtları S3 Standard'tan S3 One'a geçirmek için bir S3 Yaşam Döngüsü politikası kullanın
1 yıl sonra Bölge Sık Erişimi (S3 Bir Bölge-IA). Yönetişim modunda S3 Object Lock'u kullanma
10 yıllık bir süre için.

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

Soru 54
Bir şirket, AWS'de birden fazla Windows iş yükü çalıştırıyor. Şirketin çalışanları Windows kullanıyor
iki Amazon EC2 bulut sunucusunda barındırılan dosya paylaşımları. Dosya paylaşımları verileri senkronize eder
kendi aralarında ve kopya kopyaları bulundururlar. Şirket yüksek düzeyde kullanılabilirlik istiyor ve
Kullanıcıların o anda dosyalara erişme biçimini koruyan dayanıklı depolama çözümü.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Tüm verileri Amazon S3'e taşıyın. Kullanıcıların dosyalara erişmesi için IAM kimlik doğrulamasını ayarlayın.

B. Bir Amazon S3 Dosya Ağ Geçidi kurun. S3 Dosya Ağ Geçidini mevcut EC2 bulut sunucularına bağlayın.

C. Dosya paylaşım ortamını Multi-AZ ile Windows Dosya Sunucusu için Amazon FSx'e genişletin
konfigürasyon. Tüm verileri Windows Dosya Sunucusu için FSx'e taşıyın.

D. Dosya paylaşım ortamını Amazon Elastic File System'e (Amazon EFS) genişletin
Çoklu AZ yapılandırması. Tüm verileri Amazon EFS'ye taşıyın.

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

Soru 55
Bir çözüm mimarı, birden çok alt ağ içeren bir VPC mimarisi geliştiriyor.
mimari, Amazon EC2 bulut sunucularını ve Amazon RDS DB'yi kullanan uygulamaları barındıracak
örnekler. Mimari, iki Erişilebilirlik Alanındaki altı alt ağdan oluşur. Her Kullanılabilirlik
Zone, genel bir alt ağ, özel bir alt ağ ve veritabanları için ayrılmış bir alt ağ içerir. Yalnızca
Özel alt ağlarda çalışan EC2 bulut sunucuları, RDS veritabanlarına erişebilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Genel alt ağların CIDR bloklarına giden yolu hariç tutan yeni bir yol tablosu oluşturun. Ortak
veritabanı alt ağlarını içeren rota tablosu.

B. Kendisine atanan güvenlik grubundan gelen trafiği reddeden bir güvenlik grubu oluşturun.
genel alt ağlardaki örnekler. Güvenlik grubunu veritabanı bulut sunucularına ekleyin.

C. Atanan güvenlik grubundan gelen trafiğe izin veren bir güvenlik grubu oluşturun.
özel alt ağlardaki örnekler. Güvenlik grubunu veritabanı bulut sunucularına ekleyin.

D. Genel alt ağlar ile özel alt ağlar arasında yeni bir eşleme bağlantısı oluşturun. Bir oluştur
özel alt ağlar ile veritabanı alt ağları arasında farklı eşleme bağlantısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Özel alt ağlardaki örneklere atanan güvenlik grubundan gelen trafiğe izin veren bir güvenlik grubu oluşturun. Güvenlik grubunu veritabanı bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 56
Bir şirket alan adını Amazon Route 53'e kaydettirdi. Şirket, Amazon'u kullanıyor
Arka uç mikro hizmet API'leri için genel bir arayüz olarak ca-central-1 Bölgesindeki API Ağ Geçidi.
Üçüncü taraf hizmetler API'leri güvenli bir şekilde kullanır. Şirket API Ağ Geçidini tasarlamak istiyor
Üçüncü tarafın kullanabilmesi için şirketin alan adını ve ilgili sertifikayı içeren URL
hizmetler HTTPS kullanabilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. API Gateway'de Name="Endpoint-URL" ve Value="Company" ile aşama değişkenleri oluşturun
Varsayılan URL'nin üzerine yazmak için Etki Alanı Adı". İlgili genel sertifikayı içe aktarın
şirketinin alan adını AWS Sertifika Yöneticisine (ACM) aktarın.

B. Şirketin alan adıyla Route 53 DNS kayıtlarını oluşturun. Takma ad kaydını şuraya yönlendirin:
Bölgesel API Ağ Geçidi aşaması uç noktası. Şirketin genel sertifikasını içe aktarın
alan adını us-east-1 Bölgesindeki AWS Sertifika Yöneticisine (ACM) aktarın.

C. Bölgesel API Ağ Geçidi uç noktası oluşturun. API Ağ Geçidi uç noktasını aşağıdakilerle ilişkilendirin:
şirketin alan adı. Şirketin etki alanıyla ilişkili genel sertifikayı içe aktarın
adını aynı Bölgedeki AWS Sertifika Yöneticisine (ACM) aktarın. Sertifikayı API'ye ekleyin
Ağ geçidi uç noktası. Trafiği API Ağ Geçidi uç noktasına yönlendirmek için Route 53'ü yapılandırın.

D. Bölgesel API Ağ Geçidi uç noktası oluşturun. API Ağ Geçidi uç noktasını aşağıdakilerle ilişkilendirin:
şirketin alan adı. Şirketin etki alanıyla ilişkili genel sertifikayı içe aktarın
adını us-east-1 Bölgesindeki AWS Sertifika Yöneticisine (ACM) aktarın. Sertifikayı dosyaya ekleyin
API Ağ Geçidi API'leri. Şirketin alan adıyla Route 53 DNS kayıtları oluşturun. A'yı işaret edin
şirketin alan adına kaydedin.

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

Soru 57
Bir şirket popüler bir sosyal medya web sitesi işletiyor. Web sitesi kullanıcılara şunları yapma olanağı sağlar:
diğer kullanıcılarla paylaşmak için resimler yükleyin. Şirket, görüntülerin doğru olduğundan emin olmak istiyor
uygunsuz içerik barındırmamalıdır. Şirketin gelişimi en aza indirecek bir çözüme ihtiyacı var
çaba.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygunsuz içeriği tespit etmek için Amazon Comprehend'i kullanın. Gerçek kişi tarafından yapılan incelemeyi şunun için kullanın:
güven düzeyi düşük tahminler

B. Uygunsuz içeriği tespit etmek için Amazon Rekognition'ı kullanın. Düşük güven için gerçek kişiler tarafından yapılan incelemeyi kullanın
tahminler.

C. Uygunsuz içeriği tespit etmek için Amazon SageMaker'ı kullanın. Etiketlemek için temel gerçeği kullanın
güven düzeyi düşük tahminler

D. Uygunsuz içeriği tespit etmek amacıyla özel bir makine öğrenimi modeli dağıtmak için AWS Fargate'i kullanın.
Güvenilirliği düşük tahminleri etiketlemek için temel gerçeği kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Uygunsuz içeriği tespit etmek için Amazon Rekognition'ı kullanın. Güvenilirliği düşük tahminler için gerçek kişi tarafından yapılan incelemeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 58
Bir şirket, ölçeklenebilirlik gereksinimlerini karşılamak için kritik uygulamalarını konteynerlerde çalıştırmak istiyor
ve kullanılabilirlik. Şirket, kritik uygulamaların bakımına odaklanmayı tercih ediyor.
şirket, temel kaynakların sağlanmasından ve yönetilmesinden sorumlu olmak istemiyor
Konteynerli iş yükünü çalıştıran altyapı.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Amazon EC2 bulut sunucularını kullanın ve bulut sunucularına Docker'ı yükleyin.

B. Amazon EC2 çalışan düğümlerinde Amazon Elastic Container Service'i (Amazon ECS) kullanın.

C. AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın.

D. Bir Amazon Elastic Container Service'den (Amazon) Amazon EC2 bulut sunucularını kullanın
ECS) optimize edilmiş Amazon Machine Image (AMI).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 59
Bir şirket 300'den fazla küresel web sitesine ve uygulamaya ev sahipliği yapıyor. Şirket bir
Her gün 30 TB'tan fazla tıklama akışı verisini analiz edecek platform.
Bir çözüm mimarı tıklama akışı verilerini iletmek ve işlemek için ne yapmalıdır?

A. Verileri bir Amazon S3 klasörüne arşivlemek ve bir Amazon çalıştırmak için bir AWS Veri Hattı tasarlayın
Analitik oluşturmak için verileri içeren EMR kümesi.

B. Verileri işlemek ve bir sunucuya göndermek için Amazon EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu oluşturun.
Amazon Redshift'in analiz için kullanması için Amazon S3 veri gölü.

C. Verileri Amazon CloudFront'ta önbelleğe alın. Verileri bir Amazon S3 klasöründe saklayın. ne zaman bir
nesne S3 klasörüne eklenir. Verileri analiz amacıyla işlemek için bir AWS Lambda işlevi çalıştırın.

D. Verileri Amazon Kinesis Data Streams'ten toplayın. Amazon Kinesis Data Firehose'u kullanarak
verileri bir Amazon S3 veri gölüne iletin. Analiz için verileri Amazon Redshift'e yükleyin.

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

Soru 60
Bir şirketin AWS'de barındırılan bir web sitesi var. Web sitesi bir Application Load Balancer'ın arkasındadır
(ALB), HTTP ve HTTPS'yi ayrı ayrı işleyecek şekilde yapılandırılmıştır. Şirket iletmek istiyor
İsteklerin HTTPS kullanması için web sitesine yapılan tüm istekler.
Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. ALB'nin ağ ACL'sini yalnızca HTTPS trafiğini kabul edecek şekilde güncelleyin.

B. URL'deki HTTP'yi HTTPS ile değiştiren bir kural oluşturun.

C. HTTP trafiğini HTTPS'ye yönlendirmek için ALB'de bir dinleyici kuralı oluşturun.

D. ALB'yi, Sunucu Adı Gösterimini kullanacak şekilde yapılandırılmış bir Ağ Yük Dengeleyici ile değiştirin
(SNI).

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

Soru 61
Bir şirket AWS'de iki katmanlı bir web uygulaması geliştiriyor. Şirketin geliştiricileri
uygulamayı doğrudan bir arka uca bağlanan bir Amazon EC2 bulut sunucusuna dağıttı
Amazon RDS veritabanı. Şirket, veritabanı kimlik bilgilerini doğrudan
uygulama. Şirketin ayrıca veritabanını otomatik olarak döndürmek için bir çözüm uygulaması gerekiyor
kimlik bilgileri düzenli olarak.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Veritabanı kimlik bilgilerini örnek meta verilerinde saklayın. Amazon EventBridge'i kullanın (Amazon
CloudWatch Events) RDS'yi güncelleyen planlanmış bir AWS Lambda işlevini çalıştırma kuralları
kimlik bilgileri ve örnek meta verileri aynı anda.

B. Veritabanı kimlik bilgilerini şifrelenmiş bir Amazon S3 klasöründeki bir yapılandırma dosyasında saklayın. Kullanım
Planlanmış bir AWS Lambda'yı çalıştırmak için Amazon EventBridge (Amazon CloudWatch Events) kuralları
Yapılandırma dosyasındaki RDS kimlik bilgilerini ve kimlik bilgilerini aynı anda güncelleyen işlev
zaman. Önceki değerlere geri dönülebilmesini sağlamak için S3 Sürüm Oluşturmayı kullanın.

C. Veritabanı kimlik bilgilerini AWS Secrets Manager'da gizli bilgi olarak saklayın. Otomatik aç
sır için rotasyon. Gizli diziye erişim izni vermek için gerekli izni EC2 rolüne ekleyin.

D. Veritabanı kimlik bilgilerini AWS Systems Manager Parameter'da şifrelenmiş parametreler olarak saklayın
Mağaza. Şifrelenmiş parametreler için otomatik döndürmeyi açın. Gerekli izni ekleyin
şifrelenmiş parametrelere erişim izni vermek için EC2 rolü.

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

Soru 62
Bir şirket, AWS'ye yeni bir genel web uygulaması dağıtıyor. Uygulama bir arka planda çalışacak
Uygulama Yük Dengeleyici (ALB). Uygulamanın uçta şifrelenmesi gerekiyor
Harici bir sertifika yetkilisi (CA) tarafından verilen SSL/TLS sertifikası. Sertifika olmalıdır
Sertifikanın süresi dolmadan önce her yıl rotasyon yapılır.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. SSL/TLS sertifikası düzenlemek için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı şuraya uygula:
ALB. Sertifikayı otomatik olarak döndürmek için yönetilen yenileme özelliğini kullanın.

B. SSL/TLS sertifikası düzenlemek için AWS Sertifika Yöneticisini (ACM) kullanın. Anahtar malzemeyi içe aktar
sertifikadan. Sertifikayı ALU'ya uygulayın Yönetilen yenileme özelliğini kullanarak
sertifikayı otomatik olarak döndürün.

C. SSL/TLS düzenlemek için AWS Sertifika Yöneticisi (ACM) Özel Sertifika Yetkilisini kullanın
kök CA'dan sertifika. Sertifikayı ALB'ye uygulayın. Yönetilen yenileme özelliğini kullanarak
sertifikayı otomatik olarak döndürün.

D. SSL/TLS sertifikasını içe aktarmak için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı şuraya uygula:
ALB. Bir bildirim göndermek için Amazon EventBridge'i (Amazon CloudWatch Events) kullanın.
sertifikanın geçerlilik süresi yaklaşıyor. Sertifikayı manuel olarak döndürün.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir SSL/TLS sertifikasını içe aktarmak için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı ALB'ye uygulayın. Sertifikanın süresi dolmaya yaklaştığında bildirim göndermek için Amazon EventBridge'i (Amazon CloudWatch Events) kullanın. Sertifikayı manuel olarak döndürün.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 63
Bir şirket, altyapısını AWS'de çalıştırıyor ve 700.000 kayıtlı kullanıcı tabanına sahip.
belge yönetimi uygulaması. Şirket büyükleri dönüştüren bir ürün yaratmayı amaçlıyor.
.pdf dosyalarından .jpg resim dosyalarına. .pdf dosyalarının boyutu ortalama 5 MB'tır. Şirketin saklaması gerekiyor
orijinal dosyalar ve dönüştürülen dosyalar. Bir çözüm mimarı ölçeklenebilir bir çözüm tasarlamalıdır.
Zamanla hızla artacak talebi karşılayın.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılar?

A. .pdf dosyalarını Amazon S3'e kaydedin. AWS Lambda'yı çağırmak için bir S3 PUT olayı yapılandırma
dosyaları .jpg biçimine dönüştürme ve Amazon S3'te geri saklama işlevi.

B. .pdf dosyalarını Amazon DynamoD'a kaydedin. Bir AWS'yi çağırmak için DynamoDB Akışları özelliğini kullanın
Dosyaları .jpg formatına dönüştürmek ve bunları tekrar DynamoDB'de depolamak için Lambda işlevi.

C. .pdf dosyalarını Amazon EC2'yi içeren bir AWS Elastic Beanstalk uygulamasına yükleyin
bulut sunucuları, Amazon Elastic Block Store (Amazon EBS) depolama alanı ve bir Otomatik Ölçeklendirme grubu. Bir kullanın
Dosyaları .jpg formatına dönüştürmek için EC2 örneklerinde program. .pdf dosyalarını ve .jpg dosyasını kaydedin
EBS mağazasındaki dosyalar.

D. .pdf dosyalarını Amazon EC2'yi içeren bir AWS Elastic Beanstalk uygulamasına yükleyin
bulut sunucuları, Amazon Elastic File System (Amazon EFS) depolama alanı ve bir Otomatik Ölçeklendirme grubu. Bir kullanın
dosyayı .jpg formatına dönüştürmek için EC2 örneklerinde program. .pdf dosyalarını ve .jpg dosyalarını kaydedin
EBS mağazasında.

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

Soru 64
Bir şirketin, şirket içinde çalışan Windows dosya sunucularında 5 TB'tan fazla dosya verisi vardır. Kullanıcılar
ve uygulamalar her gün verilerle etkileşime girer.
Şirket, Windows iş yüklerini AWS'ye taşıyor. Şirket bu süreci sürdürürken,
şirketin minimum gecikmeyle AWS'ye ve şirket içi dosya depolama alanına erişmesi gerekiyor.
şirketin operasyonel ek yükü en aza indiren ve önemli bir maliyet gerektirmeyen bir çözüme ihtiyacı var
mevcut dosya erişim düzenlerinde değişiklikler. Şirket, AWS Siteden Siteye VPN kullanıyor
AWS'ye bağlantı için bağlantı.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. AWS'de Windows Dosya Sunucusu için Amazon FSx'i dağıtın ve yapılandırın. Şirket içi dosyayı taşıyın
verileri Windows Dosya Sunucusu için FSx'e aktarır. İş yüklerini Windows Dosyası için FSx'i kullanacak şekilde yeniden yapılandırın
AWS'deki sunucu.

B. Şirket içinde bir Amazon S3 Dosya Ağ Geçidi dağıtın ve yapılandırın. Şirket içi dosyayı taşıyın
verileri S3 Dosya Ağ Geçidine aktarın. Şirket içi iş yüklerini ve bulut iş yüklerini yeniden yapılandırın
S3 Dosya Ağ Geçidini kullanın.

C. Şirket içinde bir Amazon S3 Dosya Ağ Geçidi dağıtın ve yapılandırın. Şirket içi dosyayı taşıyın
verileri Amazon S3'e aktarın. İş yüklerini doğrudan Amazon S3'ü veya S3 Dosyasını kullanacak şekilde yeniden yapılandırın
Ağ geçidi. her iş yükünün konumuna bağlı olarak.

D. AWS'de Windows Dosya Sunucusu için Amazon FSx'i dağıtın ve yapılandırın. Bir aracı dağıtın ve yapılandırın
Şirket içi Amazon FSx Dosya Ağ Geçidi. Şirket içi dosya verilerini FSx Dosya Ağ Geçidine taşıyın.
Bulut iş yüklerini, AWS'de Windows Dosya Sunucusu için FSx'i kullanacak şekilde yapılandırın. Yapılandır
FSx Dosya Ağ Geçidini kullanmak için şirket içi iş yükleri.

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

Soru 65
Bir hastane yakın zamanda Amazon API Gateway ve AWS Lambda ile bir RESTful API dağıttı.
Hastane, PDF formatında ve JPEG formatındaki raporları yüklemek için API Gateway ve Lambda'yı kullanıyor
biçimi. Hastanenin, korunan sağlık bilgilerini tanımlamak için Lambda kodunu değiştirmesi gerekiyor
(PHI) raporlarda.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Raporlardan metni çıkarmak ve PHI'yi raporlardan tanımlamak için mevcut Python kitaplıklarını kullanın.
çıkarılan metin.

B. Metni raporlardan çıkarmak için Amazon Textract'ı kullanın. Tanımlamak için Amazon SageMaker'ı kullanın
çıkarılan metinden PHI.

C. Metni raporlardan çıkarmak için Amazon Textract'ı kullanın. Amazon Comprehend Medical'ı kullanarak
Çıkarılan metinden PHI'yi tanımlayın.

D. Metni raporlardan çıkarmak için Amazon Rekognition'ı kullanın. Amazon Comprehend'i kullanın
Çıkarılan metinden PHI'yi tanımlamak için tıbbi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Metni raporlardan çıkarmak için Amazon Textract'ı kullanın. Çıkarılan metinden PHI'yı tanımlamak için Amazon Comprehen Medical'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 66
Bir şirketin her biri yaklaşık 5 MB boyutunda çok sayıda dosya oluşturan bir uygulaması var
boyutta. Dosyalar Amazon S3'te depolanır. Şirket politikası, dosyaların 4 gün saklanmasını gerektiriyor
yıllar önce silinebilirler. Dosyalar aşağıdakileri içerdiğinden anında erişilebilirlik her zaman gereklidir:
Yeniden üretilmesi kolay olmayan kritik iş verileri. Dosyalara ilk başta sıklıkla erişiliyor
Nesne oluşturulduktan sonra 30 gün sürer ancak ilk 30 günden sonra nadiren erişilir.
Hangi depolama çözümü EN uygun maliyetlidir?

A. Dosyaları S3 Standard'tan S3 Glacier'e 30 gün içinde taşımak için bir S3 klasör yaşam döngüsü politikası oluşturun.
nesne oluşturma. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.

B. Dosyaları S3 Standard'tan S3 One Zone-Infrequent'e taşımak için bir S3 klasör yaşam döngüsü politikası oluşturun
Erişim (S3 Bir Bölge-IA) Nesnenin oluşturulmasından itibaren 30 gün. Dosyaları nesneden 4 yıl sonra silin
Yaratılış.

C. Dosyaları S3 Standard'tan S3 Standard-Nadir'e taşımak için bir S3 klasör yaşam döngüsü politikası oluşturun
Erişim (S3 Standart-IA) Nesnenin oluşturulmasından itibaren 30 gün. Dosyaları nesneden 4 yıl sonra silin
Yaratılış.

D. Dosyaları S3 Standard'tan S3 Standard-Nadiren'e taşımak için bir S3 klasör yaşam döngüsü politikası oluşturun
Erişim (S3 Standart-IA) Nesnenin oluşturulmasından itibaren 30 gün. Dosyaları 4 yıl sonra S3 Glacier'a taşıyın
nesne oluşturma.

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

Soru 67
Bir şirket, bir uygulamayı birden fazla Amazon EC2 bulut sunucusunda barındırıyor. Başvuru süreçleri
Amazon SQS kuyruğundaki mesajları bir Amazon RDS tablosuna yazar ve
kuyruktan mesaj. RDS tablosunda ara sıra yinelenen kayıtlar bulunur. SQS
kuyrukta yinelenen iletiler bulunmuyor.
Bir çözüm mimarı mesajların yalnızca bir kez işlenmesini sağlamak için ne yapmalıdır?

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

Soru 68
Bir çözüm mimarı, bir şirketin şirket içi kapsamını genişletmek için yeni bir hibrit mimari tasarlıyor
AWS'ye altyapı. Şirket, tutarlı düşük bağlantı değerlerine sahip, yüksek düzeyde kullanılabilir bir bağlantıya ihtiyaç duyuyor
bir AWS Bölgesine gecikme. Şirketin maliyetleri en aza indirmesi gerekiyor ve daha yavaş olanı kabul etmeye hazır
Birincil bağlantı başarısız olursa trafik.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. Bir VPN bağlantısını şu şekilde sağlayın:
birincil Doğrudan Bağlantı bağlantısı başarısız olursa yedekleme.

B. Özel bağlantı için bir Bölgeye VPN tünel bağlantısı sağlayın. Bir saniye ayırın
Özel bağlantı için ve birincil VPN bağlantısı başarısız olursa yedek olarak VPN tüneli.

C. Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. İkinci bir Doğrudan Bağlantı sağlayın
Birincil Doğrudan Bağlantı bağlantısı başarısız olursa aynı Bölgeye yedek olarak bağlantı.

D. Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. Direct Connect yük devretmeyi kullanın
Birincil Direct'in otomatik olarak yedek bağlantı oluşturmasını sağlayan AWS CLI özelliği
Bağlantı bağlantısı başarısız oluyor.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Bölgeye AWS Direct Connect bağlantısı sağlayın. Birincil Doğrudan Bağlantı bağlantısı başarısız olursa yedek olarak bir VPN bağlantısı sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 69
Bir şirket, Amazon EC2 bulut sunucularında iş açısından kritik bir web uygulamasını bir
Uygulama Yük Dengeleyici. EC2 bulut sunucuları Otomatik Ölçeklendirme grubundadır. Uygulama
tek bir Erişilebilirlik Alanında dağıtılan bir Amazon Aurora PostgreSQL veritabanını kullanır.
şirket, uygulamanın minimum kesinti ve minimum kayıpla yüksek düzeyde kullanılabilir olmasını istiyor
veri.
Hangi çözüm bu gereksinimleri EN AZ operasyonel çabayla karşılayacak?

A. EC2 bulut sunucularını farklı AWS Bölgelerine yerleştirin. Amazon Route 53 durum kontrollerini kullanarak
trafiği yeniden yönlendirin. Aurora PostgreSQL Bölgeler Arası Çoğaltma'yı kullanın.

B. Otomatik Ölçeklendirme grubunu birden çok Erişilebilirlik Alanını kullanacak şekilde yapılandırın. Veritabanını şu şekilde yapılandırın
Çoklu AZ. Veritabanı için bir Amazon RDS Proxy örneği yapılandırın.

C. Otomatik Ölçeklendirme grubunu tek bir Erişilebilirlik Alanı kullanacak şekilde yapılandırın. Saatlik anlık görüntüler oluşturun
veritabanı. Arıza durumunda veritabanını anlık görüntülerden kurtarın.

D. Otomatik Ölçeklendirme grubunu birden çok AWS Bölgesini kullanacak şekilde yapılandırın. Verileri şuradan yazın:
Amazon S3'e uygulama. Yazmak üzere bir AWS Lambda işlevini başlatmak için S3 Olay Bildirimlerini kullanın
verileri veritabanına aktarır.

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

Soru 70
Bir şirketin HTTP uygulaması bir Ağ Yük Dengeleyicisinin (NLB) arkasındadır. NLB'nin hedefi
grup, birden fazla EC2 bulut sunucusuna sahip bir Amazon EC2 Auto Scaling grubunu kullanacak şekilde yapılandırılmıştır.
web hizmetini çalıştırın.
Şirket, NLB'nin uygulama için HTTP hatalarını algılamadığını fark eder. Bu hatalar
web hizmetini çalıştıran EC2 bulut sunucularının manuel olarak yeniden başlatılmasını gerektirir. Şirketin ihtiyacı var
özel komut dosyaları veya kod yazmaya gerek kalmadan uygulamanın kullanılabilirliğini iyileştirin.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Şirketin uygulamasının URL'sini sağlayarak NLB'de HTTP durum kontrollerini etkinleştirin.

B. Yerel uygulamanın günlüklerini dakikada bir kontrol etmek için EC2 örneklerine bir cron işi ekleyin. Eğer
HTTP hataları algılandı. uygulama yeniden başlatılacaktır.

C. NLB'yi bir Application Load Balancer ile değiştirin. Sağlayarak HTTP durum kontrollerini etkinleştirin
şirketin uygulamasının URL'si. Sağlıksız olanı değiştirmek için bir Otomatik Ölçeklendirme eylemi yapılandırın
örnekler.

D. UnhealthyHostCount ölçümünü izleyen bir Amazon Cloud Watch alarmı oluşturun.
NLB. Alarm açıkken sağlıksız örnekleri değiştirmek için bir Otomatik Ölçeklendirme eylemi yapılandırın.
ALARM durumu.

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

Soru 71
Bir şirket, müşteri depolamak için Amazon DynamoDB'yi kullanan bir alışveriş uygulaması çalıştırıyor
bilgi. Veri bozulması durumunda, bir çözüm mimarının aşağıdakileri sağlayacak bir çözüm tasarlaması gerekir:
15 dakikalık kurtarma noktası hedefini (RPO) ve 1 kurtarma süresi hedefini (RTO) karşılar
saat.
Çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. DynamoDB global tablolarını yapılandırın. RPO kurtarma için uygulamayı farklı bir AWS'ye yönlendirin
Bölge.

B. DynamoDB belirli bir noktaya kurtarmayı yapılandırın. RPO kurtarma için istediğiniz noktaya geri yükleyin.
zaman.

C. DynamoDB verilerini günlük olarak Amazon S3 Glacier'a aktarın. RPO kurtarma için içe aktarın
S3 Glacier'den DynamoDB'ye veriler.

D. DynamoDB tablosu için Amazon Elastic Block Store (Amazon EBS) anlık yedeklerini her
15 dakika. RPO kurtarma için EBS anlık görüntüsünü kullanarak DynamoDB tablosunu geri yükleyin.

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

Soru 72
Bir şirket, sık sık yükleme ve indirme yapması gereken bir fotoğraf işleme uygulaması çalıştırıyor
aynı AWS Bölgesinde bulunan Amazon S3 klasörlerinden resimler. bir çözüm
mimar, veri aktarım ücretlerinde artan bir maliyet olduğunu ve bir çözüm uygulaması gerektiğini fark etti
Bu maliyetleri azaltmak için.
Çözüm mimarı bu gereksinimi nasıl karşılayabilir?

A. Amazon API Gateway'i genel bir alt ağa dağıtın ve yönlendirme tablosunu S3 çağrılarını yönlendirecek şekilde ayarlayın
onun aracılığıyla.

B. Genel bir alt ağa bir NAT ağ geçidi dağıtın ve erişime izin veren bir uç nokta ilkesi ekleyin.
S3 kovaları.

C. Uygulamayı genel bir alt ağa dağıtın ve bir internet ağ geçidi üzerinden yönlendirme yapmasına izin verin.
S3 paketlerine erişin.

D. VPC'ye bir S3 VPC ağ geçidi uç noktası dağıtın ve izin veren bir uç nokta politikası ekleyin.
S3 kovalarına erişim.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** VPC'ye bir S3 VPC ağ geçidi uç noktası dağıtın ve S3 paketlerine erişime izin veren bir uç nokta politikası ekleyin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 73
Bir şirket yakın zamanda Amazon EC2'de Linux tabanlı uygulama örneklerini özel bir platformda başlattı
alt ağ ve genel bir alt ağdaki Amazon EC2 örneğinde Linux tabanlı bir kale ana bilgisayarı başlattı
bir VPC'nin. Bir çözüm mimarının şirket içi ağdan aşağıdaki ağ üzerinden bağlanması gerekir:
şirketin internet bağlantısına, kale ana bilgisayarına ve uygulama sunucularına. Çözümler
mimar, tüm EC2 bulut sunucularının güvenlik gruplarının bu erişime izin vereceğinden emin olmalıdır.
Çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Savunma ana bilgisayarının mevcut güvenlik grubunu yalnızca gelen erişime izin veren bir grupla değiştirin
uygulama örneklerinden.

B. Savunma ana bilgisayarının mevcut güvenlik grubunu yalnızca gelen erişime izin veren bir grupla değiştirin
şirketin dahili IP aralığından.

C. Savunma ana bilgisayarının mevcut güvenlik grubunu yalnızca gelen erişime izin veren bir grupla değiştirin
Şirketin harici IP aralığından.

D. Uygulama örneklerinin mevcut güvenlik grubunu, gelen bağlantılara izin veren bir grupla değiştirin.
Yalnızca savunma ana bilgisayarının özel IP adresinden SSH erişimi.

E. Uygulama örneklerinin geçerli güvenlik grubunu, gelen bağlantılara izin veren bir grupla değiştirin
Yalnızca savunma ana bilgisayarının genel IP adresinden SSH erişimi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** Savunma ana bilgisayarının mevcut güvenlik grubunu, yalnızca şirket için harici IP aralığından gelen erişime izin veren bir grupla değiştirin. Uygulama örneklerinin mevcut güvenlik grubunu, yalnızca savunma ana bilgisayarının özel IP adresinden gelen SSH erişimine izin veren bir grupla değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 74
Bir çözüm mimarı iki katmanlı bir web uygulaması tasarlıyor. Uygulama aşağıdakilerden oluşur:
Amazon EC2'de genel alt ağlarda barındırılan, herkese açık web katmanı. Veritabanı katmanı şunlardan oluşur:
Amazon EC2 üzerinde özel bir alt ağda çalışan Microsoft SQL Server. Güvenlik bizim için yüksek bir önceliktir
şirket.
Bu durumda güvenlik grupları nasıl yapılandırılmalıdır? (İki tane seçin.)

A. Web katmanı için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın.

B. Web katmanı için güvenlik grubunu, 443 numaralı bağlantı noktasından 0.0.0.0/0'dan giden trafiğe izin verecek şekilde yapılandırın.

C. Veritabanı katmanı için güvenlik grubunu, 1433 numaralı bağlantı noktasından gelen trafiğe izin verecek şekilde yapılandırın.
web katmanı için güvenlik grubu.

D. 443 ve 443 numaralı bağlantı noktalarında giden trafiğe izin vermek için veritabanı katmanının güvenlik grubunu yapılandırın.
Web katmanı için güvenlik grubuna 1433.

E. 443 ve 1433 numaralı bağlantı noktalarında gelen trafiğe izin vermek için veritabanı katmanının güvenlik grubunu yapılandırın
web katmanının güvenlik grubundan.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Web katmanı için güvenlik grubunu, 443 numaralı bağlantı noktasında 0.0.0.0/0'dan gelen trafiğe izin verecek şekilde yapılandırın. Web katmanı güvenlik grubundan 1433 numaralı bağlantı noktasında gelen trafiğe izin vermek için veritabanı katmanı güvenlik grubunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 75
Bir şirket, çok katmanlı bir uygulamayı şirket içinden AWS Cloud'a taşımak istiyor
uygulamanın performansını artırın. Uygulama, uygulama katmanlarından oluşur.
RESTful hizmetleri aracılığıyla birbirleriyle iletişim kurarlar. İşlemler bir kez durdurulur
katman aşırı yüklenmiş olur. Bir çözüm mimarı bu sorunları çözecek bir çözüm tasarlamalıdır
ve uygulamayı modernleştirir.
Hangi çözüm bu gereksinimleri karşılıyor ve operasyonel açıdan EN verimli olanıdır?

A. Amazon API Gateway'i kullanın ve işlemleri AWS Lambda işlevlerine yönlendirin.
uygulama katmanı İletişim katmanı olarak Amazon Simple Queue Service'i (Amazon SQS) kullanın
Uygulama hizmetleri arasında.

B. Uygulama performans geçmişini analiz ederek Amazon CloudWatch ölçümlerini kullanın.
performans arızaları sırasında sunucuların en yüksek düzeyde kullanımı. Uygulamanın boyutunu artırın
Sunucunun Amazon EC2 bulut sunucularının en yüksek gereksinimleri karşılamasını sağlar.

C. Aralarındaki mesajlaşmayı yönetmek için Amazon Simple Notification Service'i (Amazon SNS) kullanın.
Otomatik Ölçeklendirme grubunda Amazon EC2 üzerinde çalışan uygulama sunucuları. Amazon CloudWatch'u kullanın
SNS kuyruğunun uzunluğunu izlemek ve gerektiği gibi ölçeklendirmek ve azaltmak için.

D. Aralarındaki mesajlaşmayı yönetmek için Amazon Simple Queue Service'i (Amazon SQS) kullanın.
Otomatik Ölçeklendirme grubunda Amazon EC2 üzerinde çalışan uygulama sunucuları. Amazon CloudWatch'u kullanın
SQS kuyruk uzunluğunu izlemek ve iletişim arızaları tespit edildiğinde ölçeği büyütmek için.

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

Soru 76
Bir şirket, aynı yerde bulunan çeşitli makinelerden her gün 10 TB enstrümantasyon verisi alıyor.
tek fabrika. Veriler, bir depolama alanı ağında (SAN) depolanan JSON dosyalarından oluşur.
Fabrika içinde bulunan şirket içi veri merkezi. Şirket bu verileri şu adrese göndermek istiyor:
Amazon S3'e kritik öneme sahip çeşitli ek sistemler tarafından erişilebilmektedir.
neredeyse gerçek zamanlı analizler. Veriler hassas kabul edildiğinden güvenli bir aktarım önemlidir.
Hangi çözüm EN güvenilir veri aktarımını sunar?

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

Soru 77
Bir şirketin uygulaması için gerçek zamanlı bir veri alma mimarisi yapılandırması gerekir.
şirketin bir API'ye, veri akışı sırasında verileri dönüştüren bir sürece ve bir depolama birimine ihtiyacı var
Veriler için çözüm.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon Kinesis verilerine veri gönderen bir API'yi barındırmak için bir Amazon EC2 bulut sunucusu dağıtın
akış. Kinesis verilerini kullanan bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun
Veri kaynağı olarak akış. Verileri dönüştürmek için AWS Lambda işlevlerini kullanın. Kinesis Verilerini Kullanın
Verileri Amazon S3'e göndermek için Firehose dağıtım akışı.

B. AWS Glue'ya veri gönderen bir API'yi barındırmak için bir Amazon EC2 bulut sunucusu dağıtın. Durdur
EC2 örneğinde kaynak/hedef kontrolü. Verileri dönüştürmek ve
verileri Amazon S3'e gönderin.

C. Amazon Kinesis veri akışına veri göndermek için bir Amazon API Gateway API'yi yapılandırın.
Kinesis veri akışını bir veri akışı olarak kullanan bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun.
veri kaynağı. Verileri dönüştürmek için AWS Lambda işlevlerini kullanın. Kinesis Data Firehose'u kullanın
Verileri Amazon S3'e göndermek için teslimat akışı.

D. AWS Glue'ya veri göndermek için bir Amazon API Gateway API'si yapılandırın. AWS Lambda'yı kullanın
Verileri dönüştürmek için işlevler. Verileri Amazon S3'e göndermek için AWS Glue'yu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Kinesis veri akışına veri göndermek için bir Amazon API Gateway API'yi yapılandırın. Veri kaynağı olarak Kinesis veri akışını kullanan bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri dönüştürmek için AWS Lambda işlevlerini kullanın. Verileri Amazon S3'e göndermek için Kinesis Data Firehose dağıtım akışını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 78
Bir şirketin kullanıcı işlem verilerini bir Amazon DynamoDB tablosunda tutması gerekir. şirket
verileri 7 yıl süreyle saklamalıdır.
Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. Tabloyu sürekli olarak yedeklemek için DynamoDB belirli bir noktaya kurtarmayı kullanın.

B. Tabloya yönelik yedekleme planları ve saklama politikaları oluşturmak için AWS Backup'ı kullanın.

C. DynamoDB konsolunu kullanarak tablonun isteğe bağlı yedeğini oluşturun. Yedeklemeyi saklayın
bir Amazon S3 kovasında. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

D. Bir AWS Lambda'yı çağırmak için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun
işlevi. Tabloyu yedeklemek ve yedeği bir klasörde saklamak için Lambda işlevini yapılandırın.
Amazon S3 kovası. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

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

Soru 79
Bir şirket veri depolama için Amazon DynamoDB tablosu kullanmayı planlıyor. Şirket
maliyet optimizasyonu konusunda endişeli. Masa çoğu sabah kullanılmayacak. Akşamları,
okuma ve yazma trafiği genellikle tahmin edilemez. Trafikte ani artışlar meydana geldiğinde bunlar gerçekleşecektir
çok hızlı.
Bir çözüm mimarı ne tavsiye etmelidir?

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

Soru 80
Bir şirket yakın zamanda bir AWS Yönetilen Hizmet Sağlayıcısı (MSP) İş Ortağı ile bir sözleşme imzaladı.
bir uygulama geçişi girişimine yardımcı olun. Bir çözüm mimarının bir Amazon'u paylaşması gerekiyor
MSP İş Ortağının AWS hesabıyla mevcut bir AWS hesabından Makine Görüntüsü (AMI).
AMI, Amazon Elastic Block Store (Amazon EBS) tarafından desteklenir ve bir AWS Anahtarı kullanır
EBS birim anlık görüntülerini şifrelemek için Yönetim Hizmeti (AWS KMS) müşteri tarafından yönetilen anahtar.
Çözüm mimarının AMI'yi MSP Ortağının bilgileriyle paylaşmasının EN güvenli yolu nedir?
AWS hesabı mı?

A. Şifrelenmiş AMI'yi ve anlık görüntüleri herkesin kullanımına açık hale getirin. İzin vermek için anahtar politikasını değiştirin
Anahtarı kullanmak için MSP İş Ortağının AWS hesabı.

B. AMI'nin launchPermission özelliğini değiştirin. AMI'yi MSP İş Ortağının AWS'siyle paylaşın
yalnızca hesap. MSP İş Ortağının AWS hesabının anahtarı kullanmasına izin vermek için anahtar politikasını değiştirin.

C. AMI'nin launchPermission özelliğini değiştirin. AMI'yi MSP İş Ortağının AWS'siyle paylaşın
yalnızca hesap. MSP Ortağının sahip olduğu yeni bir KMS anahtarına güvenmek için anahtar ilkesini değiştirin.
şifreleme.

D. AMI'yi kaynak hesaptan MSP İş Ortağının AWS'sindeki bir Amazon S3 klasörüne aktarın
hesabı, S3 paketini MSP İş Ortağına ait olan yeni bir KMS anahtarıyla şifreleyin. Kopyala ve
AMI'yi MSP İş Ortağının AWS hesabında başlatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AMI'nin launchPermission özelliğini değiştirin. AMI'yi yalnızca MSP İş Ortağının AWS hesabıyla paylaşın. MSP İş Ortağının AWS hesabının anahtarı kullanmasına izin vermek için anahtar politikasını değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 81
Bir çözüm mimarı, dağıtılan yeni bir uygulama için bulut mimarisini tasarlıyor
AWS. Uygulama düğümlerini eklerken ve kaldırırken süreç paralel olarak çalışmalıdır.
işlenecek işlerin sayısına bağlı olarak ihtiyaç duyulur. İşlemci uygulaması durum bilgisine sahip değildir.
Çözüm mimarı, uygulamanın gevşek bir şekilde bağlandığından ve iş öğelerinin birbirine bağlı olduğundan emin olmalıdır.
dayanıklı bir şekilde saklanır.
Çözüm mimarı hangi tasarımı kullanmalıdır?

A. İşlenmesi gereken işleri göndermek için bir Amazon SNS konusu oluşturun. Bir Amazon oluşturun
İşlemci uygulamasından oluşan Makine Görüntüsü (AMI). Aşağıdakileri sağlayan bir başlatma yapılandırması oluşturun:
AMI'yi kullanır. Başlatma yapılandırmasını kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Ölçeklendirme ilkesini ayarlama
Otomatik Ölçeklendirme grubunun CPU kullanımına göre düğüm eklemesi ve kaldırması için.

B. İşlenmesi gereken işleri tutmak için bir Amazon SQS kuyruğu oluşturun. Bir Amazon oluşturun
İşlemci uygulamasından oluşan Makine Görüntüsü (AMI). Aşağıdakileri sağlayan bir başlatma yapılandırması oluşturun:
AMI'yi kullanır. Başlatma yapılandırmasını kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Ölçeklendirme ilkesini ayarlama
Otomatik Ölçeklendirme grubunun ağ kullanımına göre düğüm eklemesi ve kaldırması için.

C. İşlenmesi gereken işleri tutmak için bir Amazon SQS kuyruğu oluşturun. Bir Amazon oluşturun
İşlemci uygulamasından oluşan Makine Görüntüsü (AMI). Bir lansman şablonu oluşturun
AMI'yi kullanır. Başlatma şablonunu kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Şunun için ölçeklendirme politikasını ayarlayın:
SQS'deki öğe sayısına göre düğüm eklemek ve kaldırmak için Otomatik Ölçeklendirme grubu
kuyruk.

D. İşlenmesi gereken işleri göndermek için bir Amazon SNS konusu oluşturun. Bir Amazon oluşturun
İşlemci uygulamasından oluşan Makine Görüntüsü (AMI). Bir lansman şablonu oluşturun
AMI'yi kullanır. Başlatma şablonunu kullanarak bir Otomatik Ölçeklendirme grubu oluşturun. Şunun için ölçeklendirme politikasını ayarlayın:
yayınlanan mesaj sayısına göre düğüm eklemek ve kaldırmak için Otomatik Ölçeklendirme grubu
SNS konusu.

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

Soru 82
Bir şirket web uygulamalarını AWS Cloud'da barındırır. Şirket, Elastic Load'ı yapılandırıyor
Dengeleyiciler, AWS Sertifika Yöneticisine (ACM) aktarılan sertifikaları kullanır.
Her sertifikanın geçerlilik süresinin dolmasından 30 gün önce şirketin güvenlik ekibine bilgi verilmesi gerekir.
Bir çözüm mimarı bu gereksinimi karşılamak için ne önermelidir?

A. Amazon Simple Notification Service'a özel bir mesaj yayınlamak için ACM'ye bir kural ekleyin
(Amazon SNS) konusu, herhangi bir sertifikanın süresinin dolmasından 30 gün önce başlamak üzere her gün.

B. Süresi 30 gün içinde dolacak sertifikaları kontrol eden bir AWS Config kuralı oluşturun. Yapılandır
Amazon EventBridge (Amazon CloudWatch Events), Amazon aracılığıyla özel bir uyarı çağırmak için
AWS Config uyumlu olmayan bir kaynak bildirdiğinde Basit Bildirim Hizmeti (Amazon SNS).

C. Süresi 30 gün içinde dolacak sertifikaları kontrol etmek için AWS Trusted Advisor'ı kullanın. Bir oluştur
Durum değişikliklerini kontrol etmek için Trusted Advisor ölçümlerini temel alan Amazon CloudWatch alarmı.
Alarmı, Amazon Simple Notification Service aracılığıyla özel bir uyarı gönderecek şekilde yapılandırın
(Amazon SNS'de).

D. Sertifikaları algılamak için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun
bu süre 30 gün içinde dolacaktır. Kuralı bir AWS Lambda işlevini çağıracak şekilde yapılandırın. Yapılandır
Amazon Basit Bildirim Hizmeti yoluyla özel bir uyarı göndermek için Lambda işlevi
(Amazon SNS'de).

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

Soru 83
Bir şirketin dinamik web sitesi, Amerika Birleşik Devletleri'ndeki şirket içi sunucular kullanılarak barındırılmaktadır.
şirket, ürününü Avrupa'da piyasaya sürüyor ve yeni ürünler için site yükleme sürelerini optimize etmek istiyor
Avrupalı kullanıcılar Sitenin arka ucu Amerika Birleşik Devletleri'nde kalmalıdır. Ürün şu anda
Birkaç gün içinde kullanıma sunulacaktır ve acil bir çözüme ihtiyaç vardır.
Çözüm mimarı ne tavsiye etmelidir?

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

Soru 84
Bir şirket mevcut üç katmanlı web mimarisinin maliyetini azaltmak istiyor. İnternet,
uygulamanın ve veritabanı sunucularının geliştirme için Amazon EC2 bulut sunucularında çalıştırılması,
test ve üretim ortamları. EC2 bulut sunucuları zirve sırasında ortalama %30 CPU kullanımı gösteriyor
yoğun olmayan saatlerde ise %10 CPU kullanımı.
Üretim EC2 bulut sunucuları günde 24 saat çalışır. Geliştirme ve test EC2 bulut sunucuları çalıştırılır
her gün en az 8 saat. Şirket, bu durumu durdurmak için otomasyonu uygulamayı planlıyor
EC2 bulut sunucularını kullanılmadıklarında geliştirin ve test edin.
Hangi EC2 bulut sunucusu satın alma çözümü şirketin gereksinimlerini EN ÇOK karşılayacaktır?
uygun maliyetli mi?

A. Üretim EC2 bulut sunucuları için Spot Bulut Sunucularını kullanın. Şunun için Rezerve Edilmiş Bulut Sunucularını kullanın:
EC2 bulut sunucularını geliştirme ve test etme.

B. Üretim EC2 bulut sunucuları için Rezerve Bulut Sunucularını kullanın. Şunun için İsteğe Bağlı Bulut Sunucularını kullanın:
EC2 bulut sunucularını geliştirme ve test etme.

C. Üretim EC2 bulut sunucuları için Spot blokları kullanın. Şunun için Rezerve Edilmiş Bulut Sunucularını kullanın:
EC2 bulut sunucularını geliştirme ve test etme.

D. Üretim EC2 bulut sunucuları için İsteğe Bağlı Bulut Sunucularını kullanın. Şunlar için Spot blokları kullanın:
EC2 bulut sunucularını geliştirme ve test etme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Üretim EC2 bulut sunucuları için Rezerve Bulut Sunucularını kullanın. EC2 bulut sunucularını geliştirmek ve test etmek için İsteğe Bağlı Bulut Sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 85
Bir şirketin, kullanıcıların belgeleri bir web aracılığıyla yüklediği bir üretim web uygulaması vardır.
arayüz veya mobil uygulama. Yeni yönetmelik gereği. yeni belgeler olamaz
saklandıktan sonra değiştirilir veya silinir.
Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Yüklenen belgeleri S3 Sürüm Oluşturma ve S3 Object Lock ile bir Amazon S3 klasöründe saklayın
etkinleştirildi.

B. Yüklenen belgeleri bir Amazon S3 klasöründe saklayın. Bir S3 Yaşam Döngüsü politikasını yapılandırın
Belgeleri periyodik olarak arşivleyin.

C. Yüklenen belgeleri S3 Sürüm Oluşturma etkinleştirilmiş bir Amazon S3 klasöründe saklayın. Yapılandır
Tüm erişimi salt okunur olarak kısıtlayan bir ACL.

D. Yüklenen belgeleri bir Amazon Elastic File System (Amazon EFS) biriminde saklayın.
Birimi salt okunur modda bağlayarak verilere erişin.

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

Soru 86
Bir şirketin sık sık ortak bir Amazon RDS'ye erişmesi gereken birkaç web sunucusu var
MySQL Multi-AZ Veritabanı örneği. Şirket web sunucuları için güvenli bir yöntem istiyor
Kullanıcı kimlik bilgilerini döndürmek için bir güvenlik gereksinimini karşılarken veritabanına bağlanın
sık sık.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanı kullanıcısı kimlik bilgilerini AWS Secrets Manager'da saklayın. Gerekli IAM'yi verin
web sunucularının AWS Secrets Manager'a erişmesine izin veren izinler.

B. Veritabanı kullanıcısı kimlik bilgilerini AWS Systems Manager OpsCenter'da saklayın. Ver
web sunucularının OpsCenter'a erişmesine izin vermek için gerekli IAM izinleri.

C. Veritabanı kullanıcısı kimlik bilgilerini güvenli bir Amazon S3 klasöründe saklayın. Gerekli IAM'yi verin
Web sunucularının kimlik bilgilerini almasına ve veritabanına erişmesine izin veren izinler.

D. Veritabanı kullanıcısı kimlik bilgilerini AWS Key Management Service ile şifrelenmiş dosyalarda saklayın
(AWS KMS) web sunucusu dosya sisteminde. Web sunucusu dosyaların şifresini çözebilmeli ve
veritabanına erişin.

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

Soru 87
Bir şirket, Amazon API'si tarafından çağrılan AWS Lambda işlevlerinde bir uygulamayı barındırıyor
Ağ Geçidi API'si. Lambda işlevleri müşteri verilerini Amazon Aurora MySQL'e kaydeder
veritabanı. Şirket veritabanını her yükselttiğinde Lambda işlevleri kurulamıyor
Yükseltme tamamlanana kadar veritabanı bağlantıları. Sonuç olarak müşteri verileri
bazı etkinlikler için kaydedildi.
Bir çözüm mimarının, süreç boyunca oluşturulan müşteri verilerini depolayan bir çözüm tasarlaması gerekir.
veritabanı yükseltmeleri.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevleri ile veritabanı arasında yer alacak bir Amazon RDS proxy'si sağlayın.
RDS proxy'sine bağlanmak için Lambda işlevlerini yapılandırın.

B. Lambda fonksiyonlarının çalışma süresini maksimuma çıkarın. Bir yeniden deneme mekanizması oluşturun
Müşteri verilerini veritabanında saklayan kod.

C. Müşteri verilerini Lambda yerel depolama alanında kalıcı hale getirin. Taranacak yeni Lambda işlevlerini yapılandırma
Müşteri verilerini veritabanına kaydetmek için yerel depolama.

D. Müşteri verilerini bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğunda saklayın.
Kuyruğu yoklayan ve müşteri verilerini veritabanında saklayan yeni bir Lambda işlevi oluşturun.

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

Soru 88
Bir araştırma şirketi birkaç yıldır Amerika Birleşik Devletleri'ndeki bölgelerden veri topluyor.
şirket, verileri 3 TB boyutunda ve giderek büyüyen bir Amazon S3 klasöründe barındırıyor. şirket
verileri S3 paketlerine sahip Avrupalı bir pazarlama firmasıyla paylaşmaya başladı. şirket
veri aktarım maliyetlerinin mümkün olduğunca düşük kalmasını sağlamak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin S3 klasöründe Talep Eden Ödemeler özelliğini yapılandırın.

B. S3 Bölgeler Arası Çoğaltmayı şirketin S3 klasöründen pazarlama paketlerinden birine yapılandırın
firmanın S3 kovaları.

C. Pazarlama firmasının hesaplar arası erişimini, pazarlama firmasının aşağıdakilere erişebilmesini sağlayacak şekilde yapılandırın:
şirketin S3 kovası.

D. Şirketin S3 grubunu S3 Akıllı Katmanlamayı kullanacak şekilde yapılandırın. S3 grubunu şunlardan biriyle senkronize edin:
pazarlama firmasının S3 kovaları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Şirketin S3 klasöründe Talep Eden Ödemeler özelliğini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).

---

---

Soru 89
Bir şirket, gizli denetim belgelerini depolamak için Amazon S3'ü kullanıyor. S3 kovasının kullanım alanları
ilkesine göre denetim ekibi IAM kullanıcı kimlik bilgilerine erişimi kısıtlamak için paket politikaları
en az ayrıcalık. Şirket yöneticileri S3'teki belgelerin yanlışlıkla silinmesinden endişe ediyor
kovalayın ve daha güvenli bir çözüm isteyin.
Bir çözüm mimarı denetim belgelerinin güvenliğini sağlamak için ne yapmalıdır?

A. S3 grubundaki sürüm oluşturma ve MFA Silme özelliklerini etkinleştirin.

B. Her denetim ekibi IAM'i için IAM kullanıcı kimlik bilgilerinde çok faktörlü kimlik doğrulamayı (MFA) etkinleştirin
kullanıcı hesabı.

C. s3:DeleteObject'i reddetmek için denetim ekibinin IAM kullanıcı hesaplarına bir S3 Yaşam Döngüsü politikası ekleyin
Denetim tarihleri sırasında yapılacak işlemler.

D. S3 klasörünü şifrelemek ve denetimi kısıtlamak için AWS Key Management Service'i (AWS KMS) kullanın
ekip IAM kullanıcı hesaplarının KMS anahtarına erişmesini engeller.

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

Soru 90
Bir şirket, herkesin erişebileceği film verilerini depolamak için bir SQL veritabanı kullanıyor.
veritabanı bir Amazon RDS Single-AZ veritabanı bulut sunucusunda çalışır. Bir komut dosyası sorguları rastgele çalıştırır
Veritabanına eklenen yeni filmlerin sayısını kaydetmek için her gün aralıklarla.
Komut dosyası, iş saatleri içinde nihai bir toplamı rapor etmelidir.
Şirketin geliştirme ekibi veritabanı performansının yetersiz olduğunu fark ediyor
betik çalışırken geliştirme görevleri. Bir çözüm mimarı bir çözüm önermelidir
Bu sorunu çözmek için.
Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. Veritabanı bulut sunucusunu Multi-AZ dağıtımı olacak şekilde değiştirin.

B. Veritabanının okuma kopyasını oluşturun. Komut dosyasını yalnızca okuma çoğaltmasını sorgulayacak şekilde yapılandırın.

C. Geliştirme ekibine, her bir işlemin sonunda veritabanındaki girişleri manuel olarak dışarı aktarması talimatını verin.
gün.

D. Komut dosyasının çalıştırdığı ortak sorguları önbelleğe almak için Amazon ElastiCache'i kullanın.
veritabanı.

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

Soru 91
Bir şirketin bir VPC'deki Amazon EC2 bulut sunucularında çalışan uygulamaları var. Bunlardan biri
uygulamaların nesneleri depolamak ve okumak için Amazon S3 API'sini çağırması gerekir. göre
Şirketin güvenlik düzenlemeleri uyarınca, uygulamalardan gelen trafiğin şirket genelinde dolaşmasına izin verilmez.
internet.
Bu gereksinimleri hangi çözüm karşılayacak?

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

Soru 92
Bir şirket, hassas kullanıcı bilgilerini bir Amazon S3 klasöründe saklıyor. Şirket istiyor
Amazon EC2 bulut sunucularında çalışan uygulama katmanından bu pakete güvenli erişim sağlayın
bir VPC'nin içinde.
Bir çözüm mimarı bunu başarmak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Amazon S3 için VPC içinde bir VPC ağ geçidi uç noktası yapılandırın.

B. S3 klasöründeki nesneleri herkese açık hale getirmek için bir paket politikası oluşturun.

C. Erişimi yalnızca VPC'de çalışan uygulama katmanıyla sınırlayan bir paket politikası oluşturun.

D. S3 erişim politikasına sahip bir IAM kullanıcısı oluşturun ve IAM kimlik bilgilerini EC2 örneğine kopyalayın.

E. Bir NAT örneği oluşturun ve EC2 örneklerinin S3'e erişmek için NAT örneğini kullanmasını sağlayın
kova.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Amazon S3 için VPC içinde bir VPC ağ geçidi uç noktası yapılandırın. Erişimi yalnızca VPC'de çalışan uygulama katmanıyla sınırlayan bir paket politikası oluşturun.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 93
Bir şirket, MySQL veritabanı tarafından desteklenen bir şirket içi uygulamayı çalıştırıyor.
şirket, uygulamanın esnekliğini artırmak için uygulamayı AWS'ye taşıyor ve
kullanılabilirlik.
Mevcut mimari, normal zamanlarda veritabanında yoğun okuma etkinliği gösteriyor
operasyon. Şirketin geliştirme ekibi her 4 saatte bir üretimin tamamını ihraç ediyor
hazırlama ortamında bir veritabanını doldurmak için veritabanı. Bu dönemde kullanıcılar
kabul edilemez uygulama gecikmesi yaşayabilirsiniz. Geliştirme ekibi hazırlamayı kullanamıyor
prosedür tamamlanıncaya kadar ortam.
Bir çözüm mimarı, uygulamayı kolaylaştıran yedek mimariyi önermelidir
gecikme sorunu. Değiştirme mimarisi aynı zamanda geliştirme ekibine şu yeteneği vermelidir:
hazırlama ortamını gecikmeden kullanmaya devam edin.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Üretim için Amazon Aurora MySQL'i Multi-AZ Aurora Replikalarıyla birlikte kullanın. Aşamayı doldurun
mysqldump yardımcı programını kullanan bir yedekleme ve geri yükleme işlemi uygulayarak veritabanını kurtarın.

B. Üretim için Amazon Aurora MySQL'i Multi-AZ Aurora Replikalarıyla birlikte kullanın. Veritabanını kullan
isteğe bağlı olarak hazırlama veritabanını oluşturmak için klonlama.

C. Multi-AZ dağıtımıyla Amazon RDS for MySQL'i kullanın ve üretim için replikaları okuyun. Kullanım
hazırlama veritabanı için bekleme örneği.

D. Multi-AZ dağıtımıyla Amazon RDS for MySQL'i kullanın ve üretim için replikaları okuyun.
Kullanan bir yedekleme ve geri yükleme işlemi uygulayarak hazırlama veritabanını doldurun.
mysqldump yardımcı programı.

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

Soru 94
Bir şirket, kullanıcıların Amazon S3'e küçük dosyalar yükleyebileceği bir uygulama tasarlıyor. bir süre sonra
kullanıcı bir dosya yükler, dosyanın verileri dönüştürmek ve kaydetmek için tek seferlik basit bir işlem yapması gerekir
Daha sonra analiz için JSON formatındaki veriler.
Her dosya yüklendikten sonra mümkün olan en kısa sürede işlenmelidir. Talep değişecektir. Açık
Bazı günler kullanıcılar çok sayıda dosya yükleyecektir. Diğer günlerde kullanıcılar birkaç dosya yükleyecek
veya dosya yok.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılıyor?

A. Amazon EMR'yi Amazon S3'teki metin dosyalarını okuyacak şekilde yapılandırın. Dönüştürmek için işleme komut dosyalarını çalıştırın
veriler. Ortaya çıkan JSON dosyasını bir Amazon Aurora DB kümesinde saklayın.

B. Amazon S3'ü bir Amazon Simple Queue Service'e olay bildirimi gönderecek şekilde yapılandırın
(Amazon SQS) kuyruğu. Kuyruktan okumak ve verileri işlemek için Amazon EC2 bulut sunucularını kullanın.
Ortaya çıkan JSON dosyasını Amazon DynamoDB'de saklayın.

C. Amazon S3'ü bir Amazon Simple Queue Service'e olay bildirimi gönderecek şekilde yapılandırma
(Amazon SQS) kuyruğu. Kuyruktan okumak ve verileri işlemek için bir AWS Lambda işlevini kullanın.
veri. Ortaya çıkan JSON dosyasını Amazon DynamoDB'de saklayın.

D. Amazon'a bir etkinlik göndermek için Amazon EventBridge'i (Amazon CloudWatch Events) yapılandırma
Yeni bir dosya yüklendiğinde Kinesis Veri Akışları. Tüketmek için bir AWS Lambda işlevini kullanın.
Olayı akıştan çıkarın ve verileri işleyin. Ortaya çıkan JSON dosyasını bir Amazon Aurora'da saklayın
Veritabanı kümesi.

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

Soru 95
Bir uygulama, bir şirketin genel merkezindeki kullanıcıların ürün verilerine erişmesine olanak tanır. Ürün
veriler bir Amazon RDS MySQL veritabanı örneğinde depolanır. Operasyon ekibi bir kişiyi izole etti
uygulama performansı yavaşlıyor ve okuma trafiğini yazma trafiğinden ayırmak istiyor. bir
çözüm mimarının uygulamanın performansını hızlı bir şekilde optimize etmesi gerekiyor.
Çözüm mimarı ne tavsiye etmelidir?

A. Mevcut veritabanını Multi-AZ dağıtımına değiştirin. Okuma isteklerini yerine getirin
birincil Erişilebilirlik Alanı.

B. Mevcut veritabanını Multi-AZ dağıtımına değiştirin. Okuma isteklerini yerine getirin
ikincil Erişilebilirlik Alanı.

C. Veritabanı için okuma kopyaları oluşturun. Okuma kopyalarını işlemin yarısıyla yapılandırın ve
Kaynak veritabanı olarak depolama kaynakları.

D. Veritabanı için okuma kopyaları oluşturun. Okuma kopyalarını aynı işlemle yapılandırın ve
Kaynak veritabanı olarak depolama kaynakları.

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

Soru 96
Bir Amazon EC2 yöneticisi, bir IAM grubuyla ilişkili aşağıdaki politikayı oluşturdu
birkaç kullanıcı içeren:
Bu politikanın etkisi nedir?

C. Kullanıcılar us-east-1 hariç herhangi bir AWS Bölgesinde EC2 bulut sunucusunu sonlandırabilir.

B. Kullanıcılar us-east-1'de 10.100.100.1 IP adresiyle bir EC2 örneğini sonlandırabilir
Bölge.

C. Kullanıcılar, kullanıcının kaynak IP'si şu şekilde olduğunda us-east-1 Bölgesindeki bir EC2 örneğini sonlandırabilir:
10.100.100.254.

D. Kullanıcının kaynak IP'si şu şekilde olduğunda, kullanıcılar us-east-1 Bölgesindeki bir EC2 örneğini sonlandıramaz.
10.100.100.254.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kullanıcılar, kullanıcının kaynak IP'si 10.100.100.254 olduğunda us-east-1 Bölgesindeki bir EC2 örneğini sonlandırabilir.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 97
Bir şirketin şirket içinde çalışan büyük bir Microsoft SharePoint dağıtımı vardır.
Microsoft Windows paylaşılan dosya depolama alanı. Şirket bu iş yükünü AWS'ye taşımak istiyor
Bulut ve çeşitli depolama seçeneklerini değerlendiriyor. Depolama çözümü yüksek oranda kullanılabilir olmalıdır
ve erişim kontrolü için Active Directory ile entegre edilmiştir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EFS depolama alanını yapılandırın ve kimlik doğrulama için Active Directory etki alanını ayarlayın.

B. İki Erişilebilirlik Alanındaki AWS Storage Gateway dosya ağ geçidinde bir SMB dosya paylaşımı oluşturun.

C. Bir Amazon S3 klasörü oluşturun ve Microsoft Windows Server'ı bunu bir birim olarak bağlayacak şekilde yapılandırın.

D. AWS'de bir Amazon FSx for Windows Dosya Sunucusu dosya sistemi oluşturun ve Etkin Dosya Sistemini ayarlayın.
Kimlik doğrulama için dizin alanı.

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

Soru 98
Bir görüntü işleme şirketi, kullanıcıların görüntüleri yüklemek için kullandıkları bir web uygulamasına sahiptir.
uygulama görüntüleri bir Amazon S3 klasörüne yükler. Şirket S3 etkinliği düzenledi
nesne oluşturma olaylarını bir Amazon Simple Queue Service'e (Amazon) yayınlamak için bildirimler
SQS) standart kuyruk. SQS kuyruğu, bir AWS Lambda işlevi için olay kaynağı görevi görür
görüntüleri işleyen ve sonuçları e-posta yoluyla kullanıcılara gönderen.
Kullanıcılar, yüklenen her görsel için birden fazla e-posta mesajı aldıklarını bildiriyor. bir
çözüm mimarı, SQS mesajlarının Lambda işlevini daha fazla çağırdığını belirler
bir kez, birden fazla e-posta mesajıyla sonuçlanır.
Çözüm mimarı bu sorunu EN AZ operasyonel çözümle çözmek için ne yapmalıdır?
genel gider mi?

A. ReceiveMessage bekleme süresini 30'a çıkararak SQS kuyruğunda uzun yoklama ayarlayın
saniye.

B. SQS standart kuyruğunu SQS FIFO kuyruğuna değiştirin. İleti tekilleştirme kimliğini kullanarak
yinelenen mesajları atın.

C. SQS kuyruğundaki görünürlük zaman aşımını, toplam sürenin toplamından daha büyük bir değere artırın.
işlev zaman aşımı ve toplu pencere zaman aşımı.

D. Her mesajı SQS kuyruğundan hemen sonra silmek için Lambda işlevini değiştirin.
mesaj işlenmeden önce okunur.

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

Soru 99
Bir şirket, barındırılan bir oyun uygulaması için paylaşılan bir depolama çözümü uyguluyor.
şirket içi bir veri merkezi. Şirketin verilere erişmek için Luster istemcilerini kullanma becerisine ihtiyacı var.
Çözümün tam olarak yönetilmesi gerekir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Bir AWS Storage Gateway dosya ağ geçidi oluşturun. Gerekli istemciyi kullanan bir dosya paylaşımı oluşturun
protokol. Uygulama sunucusunu dosya paylaşımına bağlayın.

B. Bir Amazon EC2 Windows örneği oluşturun. Windows dosya paylaşım rolünü yükleyin ve yapılandırın
örnek. Uygulama sunucusunu dosya paylaşımına bağlayın.

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
