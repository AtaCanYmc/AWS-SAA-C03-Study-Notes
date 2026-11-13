# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 10

> **Soru Aralığı:** 901 - 1000 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #900

Bir şirket, faaliyetlerini yürütmek için Amazon Elastic Container Service'i (Amazon ECS) kullanmak istiyor
Hibrit bir ortamda şirket içi uygulama. Uygulama şu anda konteynerlerde çalışıyor
tesisler.
Şirketin şirket içi, hibrit veya ölçeklenebilir tek bir konteyner çözümüne ihtiyacı var.
bulut ortamı. Şirketin AWS Cloud'da yeni uygulama konteynerleri çalıştırması ve
HTTP trafiği için bir yük dengeleyici kullanmalıdır.
Hangi eylem kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Bulut uygulaması için AWS Fargate başlatma türünü kullanan bir ECS kümesi kurun
konteynerler. Şirket içi uygulama için Amazon ECS Anywhere harici başlatma türünü kullanın
konteynerler.

B. Bulut ECS hizmetleri için bir Application Load Balancer kurun.

C. Bulut ECS hizmetleri için bir Ağ Yük Dengeleyicisi kurun.

D. AWS Fargate başlatma türünü kullanan bir ECS kümesi kurun. Bulut için Fargate'i kullanın
uygulama kapsayıcıları ve şirket içi uygulama kapsayıcıları.

E. Bulut uygulaması için Amazon EC2 başlatma türünü kullanan bir ECS kümesi kurun
konteynerler. Şirket içi için Amazon ECS Anywhere'i AWS Fargate başlatma türüyle kullanın
uygulama kapları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Bulut uygulama kapsayıcıları için AWS Fargate başlatma türünü kullanan bir ECS kümesi kurun. Şirket içi uygulama kapsayıcıları için Amazon ECS Anywhere harici başlatma türünü kullanın. Bulut ECS hizmetleri için bir Application Load Balancer kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 901
Bir şirket iş yüklerini AWS'ye taşıyor. Şirketin hassas ve kritik verileri bulunuyor.
SQL Server örneklerinde çalışan şirket içi ilişkisel veritabanları.
Şirket, güvenliği artırmak ve operasyonel ek yükü azaltmak için AWS Cloud'u kullanmak istiyor
veritabanları için.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanlarını Amazon EC2 bulut sunucularına taşıyın. Bir AWS Anahtar Yönetimi Hizmeti Kullanın
(AWS KMS) Şifreleme için AWS tarafından yönetilen anahtar.

B. Veritabanlarını Multi-AZ Amazon RDS for SQL Server DB örneğine geçirin. AWS kullanın
Anahtar Yönetim Hizmeti (AWS KMS) Şifreleme için AWS tarafından yönetilen anahtar.

C. Verileri bir Amazon S3 klasörüne taşıyın. Veri güvenliğini sağlamak için Amazon Macie'yi kullanın.

D. Veritabanlarını bir Amazon DynamoDB tablosuna taşıyın. Amazon CloudWatch Logs'u kullanarak
veri güvenliğini sağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanlarını Multi-AZ Amazon RDS for SQL Server DB örneğine geçirin. Şifreleme için bir AWS Key Management Service (AWS KMS) AWS yönetilen anahtarı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 902
Bir şirket bir uygulamayı AWS'ye taşımak istiyor. Şirket bu oranı artırmak istiyor
uygulamanın mevcut kullanılabilirliği. Şirket, uygulamada AWS WAF'ı kullanmak istiyor
Mimarlık.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Sunucuyu barındıran birden fazla Amazon EC2 bulut sunucusunu içeren bir Otomatik Ölçeklendirme grubu oluşturun.
iki Erişilebilirlik Alanında uygulama. Bir Uygulama Yük Dengeleyicisini (ALB) yapılandırın ve ayarlayın
Otomatik Ölçeklendirme grubunu hedef olarak seçin. ALB'ye bir WAF bağlayın.

B. Sunucuyu barındıran birden fazla Amazon EC2 bulut sunucusunu içeren bir küme yerleştirme grubu oluşturun.
uygulama. Bir Application Load Balancer yapılandırın ve EC2 örneklerini hedef olarak ayarlayın.
Yerleştirme grubuna bir WAF bağlayın.

C. Uygulamayı iki Erişilebilirlik Alanında barındıran iki Amazon EC2 bulut sunucusu oluşturun.
EC2 örneklerini bir Application Load Balancer'ın (ALB) hedefleri olarak yapılandırın. Bir bağlantı kurun
WAF'tan ALB'ye.

D. Sunucuyu barındıran birden fazla Amazon EC2 bulut sunucusunu içeren bir Otomatik Ölçeklendirme grubu oluşturun.
iki Erişilebilirlik Alanında uygulama. Bir Uygulama Yük Dengeleyicisini (ALB) yapılandırın ve ayarlayın
Otomatik Ölçeklendirme grubunu hedef olarak seçin. Otomatik Ölçeklendirme grubuna bir WAF bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı iki Erişilebilirlik Alanında barındıran birden fazla Amazon EC2 bulut sunucusunu içeren bir Otomatik Ölçeklendirme grubu oluşturun. Bir Application Load Balancer (ALB) yapılandırın ve Otomatik Ölçeklendirme grubunu hedef olarak ayarlayın. ALB'ye bir WAF bağlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Soru 903
Bir şirket, çok sayıda uygulamanın eriştiği bir Amazon S3 klasöründeki veri gölünü yönetiyor.
S3 paketi her uygulama için benzersiz bir önek içerir. Şirket her birini kısıtlamak istiyor
kendi özel önekine uygulama ve her önek altındaki nesnelerin ayrıntılı kontrolüne sahip olmak.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her uygulama için özel S3 erişim noktaları ve erişim noktası politikaları oluşturun.

B. S3 klasöründeki her nesne için ACL izinlerini ayarlamak üzere bir S3 Toplu İşlemler işi oluşturun.

C. S3 klasöründeki nesneleri her uygulama için yeni S3 klasörlerine kopyalayın. Oluştur
önek ile çoğaltma kuralları.

D. S3 klasöründeki nesneleri her uygulama için yeni S3 klasörlerine kopyalayın. Özel oluştur
Her uygulama için S3 erişim noktaları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her uygulama için özel S3 erişim noktaları ve erişim noktası politikaları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 904
Bir şirketin, müşterilerin Amazon S3 klasörüne görsel yüklemek için kullandığı bir uygulaması var.
Şirket her gece, tüm görüntüleri işleyen bir Amazon EC2 Spot Filosunu piyasaya sürüyor.
şirket o gün teslim aldı. Her görüntünün işlenmesi 2 dakika sürer ve
512 MB bellek.
Bir çözüm mimarının, görüntüler işlendiğinde uygulamayı değiştirmesi gerekir.
yüklenir.
Hangi değişiklik bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon Simple Queue'ya görüntü ayrıntılarını içeren bir mesaj yazmak için S3 Olay Bildirimlerini kullanın
Hizmet (Amazon SQS) kuyruğu. Mesajları okumak için bir AWS Lambda işlevi yapılandırın
kuyruk ve görüntüleri işlemek için.

B. Amazon Basit Kuyruğa görüntü ayrıntılarını içeren bir mesaj yazmak için S3 Olay Bildirimlerini kullanın
Hizmet (Amazon SQS) kuyruğu. Mesajları okumak için bir EC2 Rezerve Edilmiş Bulut Sunucusu yapılandırın
kuyruk ve görüntüleri işlemek için.

C. Görüntü ayrıntılarını içeren bir mesajı Amazon Simple'da yayınlamak için S3 Olay Bildirimlerini kullanın
Bildirim Hizmeti (Amazon SNS) konusu. Amazon Elastic'te bir konteyner örneği yapılandırma
Konuya abone olmak ve görüntüleri işlemek için Container Service (Amazon ECS).

D. Görüntü ayrıntılarını içeren bir mesajı Amazon Simple'da yayınlamak için S3 Olay Bildirimlerini kullanın
Bildirim Hizmeti (Amazon SNS) konusu. Bir AWS Elastic Beanstalk uygulamasını yapılandırın
Konuya abone olun ve görüntüleri işleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon Simple Queue Service (Amazon SQS) kuyruğuna görüntü ayrıntılarını içeren bir mesaj yazmak için S3 Olay Bildirimleri'ni kullanın. Kuyruktaki mesajları okumak ve görüntüleri işlemek için bir AWS Lambda işlevi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 905
Bir şirket hibrit uygulamasının kullanılabilirliğini ve performansını artırmak istiyor.
uygulama, Amazon EC2 bulut sunucularında barındırılan durum bilgisi olan TCP tabanlı bir iş yükünden oluşur.
farklı AWS Bölgeleri ve şirket içinde barındırılan durum bilgisiz UDP tabanlı iş yükü.
Bir çözüm mimarının kullanılabilirliği artırmak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
performans? (İki tane seçin.)

A. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun. Yük dengeleyicileri uç noktalar olarak ekleyin.

B. Amazon Route 53'ü kullanan bir kaynağa sahip bir Amazon CloudFront dağıtımı oluşturun
İstekleri yük dengeleyicilere yönlendirmek için gecikmeye dayalı yönlendirme.

C. Her Bölgede iki Application Load Balancer yapılandırın. İlki EC2'ye gidecek
uç noktalar ve ikincisi şirket içi uç noktalara yönlendirecektir.

D. EC2 uç noktalarını adreslemek için her Bölgede bir Ağ Yük Dengeleyici yapılandırın. Bir yapılandırın
Her Bölgede şirket içi uç noktalara yönlendiren Ağ Yük Dengeleyici.

E. EC2 uç noktalarını adreslemek için her Bölgede bir Ağ Yük Dengeleyici yapılandırın. Yapılandır
Her Bölgede şirket içi uç noktalara yönlendiren bir Application Load Balancer.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun. Yük dengeleyicileri uç noktalar olarak ekleyin. EC2 uç noktalarını adreslemek için her Bölgede bir Ağ Yük Dengeleyici yapılandırın. Her Bölgede şirket içi uç noktalara yönlendiren bir Ağ Yük Dengeleyici yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 906
Bir şirket, Amazon EC2 bulut sunucularında ve Amazon'da kendi kendini yöneten bir Microsoft SQL Server çalıştırıyor
Elastik Blok Mağazası (Amazon EBS). EBS birimlerinin günlük anlık görüntüleri alınır.
Son zamanlarda şirketin tüm EBS anlık görüntüleri, anlık görüntü çalıştırılırken yanlışlıkla silindi
Süresi dolmuş tüm EBS anlık görüntülerini silen temizleme komut dosyası. Bir çözüm mimarının
EBS anlık görüntülerini süresiz olarak saklamadan veri kaybını önleyen mimari.
Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. EBS anlık görüntüsünün silinmesini reddetmek için kullanıcının IAM politikasını değiştirin.

B. Anlık yedekleri günlük olarak tamamladıktan sonra EBS anlık yedeklerini başka bir AWS Bölgesine kopyalayın.

C. Geri Dönüşüm Kutusu'nda 7 günlük bir EBS anlık görüntüsü saklama kuralı oluşturun ve kuralı tüm anlık görüntülere uygulayın.

D. EBS anlık yedeklerini Amazon S3 Standard-Infrequent Access'e (S3 Standard-IA) kopyalayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Geri Dönüşüm Kutusu'nda 7 günlük bir EBS anlık görüntü saklama kuralı oluşturun ve kuralı tüm anlık görüntülere uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 907
Bir şirket, test ortamındaki uygulaması için AWS CloudFormation yığınını kullanmak istiyor.
Şirket, CloudFormation şablonunu herkese açık erişimi engelleyen bir Amazon S3 klasöründe saklıyor
erişim. Şirket, CloudFormation'a S3 klasöründeki şablona erişim izni vermek istiyor
test ortamını oluşturmak için belirli kullanıcı isteklerine göre. Çözüm güvenliği takip etmeli
en iyi uygulamalar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Kullanılacak CloudFormation yığınını yapılandırma
S3 nesne URL'si.

B. Hedef olarak S3 paketini içeren bir Amazon API Gateway REST API oluşturun. Yapılandır
API Ağ Geçidi URL'sini kullanmak için CloudFormation yığını.

C. Şablon nesnesi için önceden imzalanmış bir URL oluşturun. CloudFormation yığınını kullanacak şekilde yapılandırın
önceden imzalanmış URL.

D. S3 klasöründeki şablon nesnesine genel erişime izin verin. Şu tarihten sonra genel erişimi engelleyin:
test ortamı oluşturulur.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Şablon nesnesi için önceden imzalanmış bir URL oluşturun. CloudFormation yığınını önceden imzalanmış URL'yi kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 908
Bir şirketin AWS Organizasyonlarındaki bir kuruluşta çalışan uygulamaları vardır. şirket
uygulamaların operasyonel desteğini dış kaynaklardan sağlar. Şirketin erişim sağlaması gerekiyor
güvenlikten ödün vermeden harici destek mühendisleri.
Harici destek mühendislerinin AWS Management Console'a erişmesi gerekiyor. Dış
destek mühendislerinin ayrıca şirketin Amazon EC2 filosuna işletim sistemi erişimine ihtiyacı var
Amazon Linux'u özel alt ağlarda çalıştıran bulut sunucuları.
Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. AWS Systems Manager Agent'ın (SSM Agent) tüm bulut sunucularına yüklendiğini doğrulayın. Bir atayın
Sistem Yöneticisine bağlanmak için gerekli politikayı içeren örnek profili. AWS IAM Identity'yi kullanın
Harici destek mühendislerinin konsol erişimini sağlayacak merkez. Sistem Yöneticisi Oturumunu Kullan
Yöneticinin gerekli izinleri ataması.

B. AWS Systems Manager Agent'ın (SSM Agent) tüm bulut sunucularına yüklendiğini doğrulayın. Bir atayın
Sistem Yöneticisine bağlanmak için gerekli politikaya sahip örnek profili. Sistem Yöneticisini Kullan
Oturum Yöneticisi, her AWS hesabındaki yerel IAM kullanıcı kimlik bilgilerini harici sunucuya sağlamak için
Konsol erişimi için mühendisleri destekleyin.

C. Tüm örneklerin yalnızca harici sunucudan SSH erişimine izin veren bir güvenlik grubuna sahip olduğunu doğrulayın.
mühendislerin kaynak IP adresi aralıklarını destekler. Her AWS'de yerel IAM kullanıcı kimlik bilgilerini sağlayın
Konsol erişimi için harici destek mühendislerine hesap verin. Her harici desteği sağlayın
uygulama örneklerine giriş yapmak için bir SSH anahtar çifti tasarlayın.

D. Genel bir alt ağda bir savunma ana bilgisayarı oluşturun. Erişime izin vermek için savunma ana bilgisayar güvenlik grubunu ayarlayın
yalnızca harici mühendislerin IP adresi aralıklarından. Tüm örneklerin bir güvenliğe sahip olduğundan emin olun
Savunma ana bilgisayarından SSH erişimine izin veren grup. Her harici destek mühendisine bir
Uygulama örneklerine giriş yapmak için SSH anahtar çifti. Yerel hesap IAM kullanıcı kimlik bilgilerini sağlayın
Konsol erişimi için mühendisler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Systems Manager Agent'ın (SSM Agent) tüm bulut sunucularına yüklendiğini doğrulayın. Systems Manager'a bağlanmak için gerekli politikayı içeren bir örnek profili atayın. Harici destek mühendislerine konsol erişimi sağlamak için AWS IAM Identity Center'ı kullanın. Gerekli izinleri atamak için Systems Manager Oturum Yöneticisini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 909
Bir şirket, uygulamalarını us-east-1 Bölgesinde çalıştırmak için PostgreSQL için Amazon RDS'yi kullanıyor.
Şirket ayrıca yıllık geliri tahmin etmek için makine öğrenimi (ML) modellerini kullanıyor.
gerçek zamanlıya yakın raporlar. Raporlar PostgreSQL için aynı RDS kullanılarak oluşturulur
veritabanı. Veritabanı performansı iş saatlerinde yavaşlar. Şirketin ihtiyacı var
veritabanı performansını artırın.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Bölgeler arası bir okuma kopyası oluşturun. Okumadan oluşturulacak raporları yapılandırma
kopya.

B. PostgreSQL için RDS'ye yönelik Multi-AZ veritabanı bulut sunucusu dağıtımını etkinleştirin. Raporları yapılandırın
bekleme veritabanından oluşturulur.

C. Verileri yeni bir veritabanına mantıksal olarak kopyalamak için AWS Data Migration Service'i (AWS DMS) kullanın.
Yeni veritabanından oluşturulacak raporları yapılandırın.

D. us-east-1'de bir okuma kopyası oluşturun. Okuma kopyasından oluşturulacak raporları yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** us-east-1'de bir okuma kopyası oluşturun. Okuma kopyasından oluşturulacak raporları yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 910
Bir şirket, çok katmanlı, genel web uygulamasını AWS Cloud'da barındırır. Web uygulaması
Amazon EC2 bulut sunucularında çalışır ve veritabanı Amazon RDS'de çalışır. Şirket
yaklaşan tatil haftasonunda satışlarda büyük bir artış bekleniyor. Bir çözüm mimarı
Web uygulamasının performansını ayrıntılı bir şekilde analiz etmek için bir çözüm oluşturması gerekiyor
2 dakikadan fazla değil.
Çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Amazon CloudWatch günlüklerini Amazon Redshift'e gönderin. Gerçekleştirmek için Amazon QuickS ght'i kullanın
daha fazla analiz.

B. Tüm EC2 bulut sunucularında ayrıntılı izlemeyi etkinleştirin. Gerçekleştirmek için Amazon CloudWatch ölçümlerini kullanın
daha fazla analiz.

C. Amazon CloudWatch Logs'tan EC2 günlüklerini almak için bir AWS Lambda işlevi oluşturun. Kullanım
Daha fazla analiz gerçekleştirmek için Amazon CloudWatch ölçümleri.

D. EC2 günlüklerini Amazon S3'e gönderin. Günlükleri S3 klasöründen şuraya getirmek için Amazon Redshift'i kullanın:
Amazon QuickSight ile daha fazla analiz için ham verileri işleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tüm EC2 bulut sunucularında ayrıntılı izlemeyi etkinleştirin. Daha fazla analiz gerçekleştirmek için Amazon CloudWatch ölçümlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 911
Bir şirket, fotoğrafları saklayan ve paylaşan bir uygulamayı çalıştırıyor. Kullanıcılar fotoğrafları bir
Amazon S3 kovası. Kullanıcılar her gün yaklaşık 150 fotoğraf yüklüyor. Şirket istiyor
Her yeni fotoğrafın küçük resmini oluşturan ve küçük resmi bir klasörde saklayan bir çözüm tasarlayın
ikinci S3 kovası.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Her dakika bir komut dosyasını çağıracak şekilde bir Amazon EventBridge planlanmış kuralı yapılandırın.
uzun süredir çalışan Amazon EMR kümesi. Komut dosyasını, fotoğraflar için küçük resimler oluşturacak şekilde yapılandırın.
küçük resimleriniz yok. Küçük resimleri ikinci S3 klasörüne yüklemek için komut dosyasını yapılandırın.

B. Bir bilgisayarda her dakika bir komut dosyasını çağıracak şekilde bir Amazon EventBridge planlanmış kuralı yapılandırın.
Her zaman açık olan, belleği optimize edilmiş Amazon EC2 bulut sunucusu. Komut dosyasını oluşturulacak şekilde yapılandırın
Küçük resmi olmayan fotoğraflar için küçük resimler. Komut dosyasını yüklemek için yapılandırın
küçük resimleri ikinci S3 klasörüne taşıyın.

C. Bir kullanıcı her yükleme yaptığında bir AWS Lambda işlevini çağıracak bir S3 olay bildirimi yapılandırın
uygulamaya yeni bir fotoğraf. Küçük resim oluşturmak için Lambda işlevini yapılandırın ve
küçük resmi ikinci S3 klasörüne yükleyin.

D. S3 Depolama Lensini, kullanıcı her yeni veri yüklediğinde bir AWS Lambda işlevini çağıracak şekilde yapılandırın.
Uygulamaya fotoğraf. Küçük resim oluşturmak ve dosyayı yüklemek için Lambda işlevini yapılandırın.
küçük resmi ikinci bir S3 klasörüne taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir kullanıcı uygulamaya her yeni fotoğraf yüklediğinde bir AWS Lambda işlevini çağıracak bir S3 olay bildirimi yapılandırın. Küçük resim oluşturmak ve küçük resmi ikinci S3 klasörüne yüklemek için Lambda işlevini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 912
Bir şirket, Amazon S3 klasöründe birden çok ön ekte milyonlarca nesneyi şu şekilde depoladı:
Amazon S3 Glacier Deep Archive depolama sınıfını kullanarak. Şirketin tüm verileri silmesi gerekiyor
Saklanması gereken bir veri alt kümesi hariç 3 yıldan daha eski. Şirket belirledi
Saklanması gereken veriler ve sunucusuz bir çözüm uygulamak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Tüm nesneleri listelemek için S3 Envanterini kullanın. Amazon'da çalışan bir komut dosyası oluşturmak için AWS CLI'yi kullanın
Envanter listesinden nesneleri silen EC2 örneği.

B. Saklanması gereken veriler dışındaki 3 yıldan eski nesneleri silmek için AWS Batch'i kullanın.

C. 3 yıldan eski nesneleri sorgulamak için bir AWS Glue tarayıcısı sağlayın. manifest dosyasını kaydedin
eski nesneler. Bildirimdeki nesneleri silmek için bir komut dosyası oluşturun.

D. S3 Envanterini etkinleştirin. Nesneleri filtrelemek ve silmek için bir AWS Lambda işlevi oluşturun. Çağır
Envanter raporlarını kullanarak nesneleri silmek için S3 Toplu İşlemlerle Lambda işlevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 Envanterini etkinleştirin. Nesneleri filtrelemek ve silmek için bir AWS Lambda işlevi oluşturun. Envanter raporlarını kullanarak nesneleri silmek için S3 Batch Operations ile Lambda işlevini çağırın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 913
Bir şirket AWS'de bir uygulama geliştiriyor. Uygulama birden fazla AWS Lambda kullanıyor
hassas verileri işlenmek üzere tek bir Amazon S3 klasöründen alma işlevlerine sahiptir.
şirket, verilere yalnızca yetkili Lambda işlevlerinin erişebildiğinden emin olmalıdır. Çözüm
En az ayrıcalık ilkesine uymak zorundadır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Paylaşılan bir IAM rolü aracılığıyla tüm Lambda işlevlerine tam S3 paketi erişimi verin.

B. Lambda işlevlerini bir VPC içinde çalışacak şekilde yapılandırın. Erişim izni vermek için bir paket politikası yapılandırma
Lambda işlevlerinin VPC uç noktası IP adreslerine dayalıdır.

C. Her Lambda işlevi için ayrı IAM rolleri oluşturun. IAM rollerine S3'e erişim izni verin
kova. Her IAM rolünü, karşılık gelen Lambda için Lambda yürütme rolü olarak atayın
işlevi.

D. Lambda işlevlerine işlevlerine göre erişim izni veren bir paket politikası yapılandırın
ARN'ler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her Lambda işlevi için ayrı IAM rolleri oluşturun. IAM rollerine S3 paketine erişim izni verin. Her IAM rolünü, karşılık gelen Lambda işlevi için Lambda yürütme rolü olarak atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 914
Bir şirket birden fazla uygulamadan oluşan üretim dışı bir uygulama geliştirmiştir.
Şirketin iş birimlerinin her biri için mikro hizmetler. Tek bir geliştirme ekibi her şeyin bakımını yapıyor
mikro hizmetler.
Mevcut mimari, statik bir web ön ucu ve aşağıdakileri içeren Java tabanlı bir arka uç kullanır:
uygulama mantığı. Mimari ayrıca şirketin bir sunucuda barındırdığı MySQL veritabanını da kullanıyor.
Amazon EC2 örneği.
Şirketin uygulamanın güvenli ve dünya çapında kullanılabilir olduğundan emin olması gerekiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Statik web ön ucunu barındırmak için Amazon CloudFront ve AWS Amplify'ı kullanın. Yeniden düzenleme
Mikro hizmetlerin Amazon API'yi kullanarak eriştiği AWS Lambda işlevlerini kullanmak için mikro hizmetler
Ağ geçidi. MySQL veritabanını bir Amazon EC2 Rezerve Edilmiş Bulut Sunucusuna taşıyın.

B. Statik web ön ucunu barındırmak için Amazon CloudFront ve Amazon S3'ü kullanın. Yeniden düzenleme
Mikro hizmetlerin Amazon API'yi kullanarak eriştiği AWS Lambda işlevlerini kullanmak için mikro hizmetler
Ağ geçidi. MySQL veritabanını MySQL için Amazon RDS'ye taşıyın.

C. Statik web ön ucunu barındırmak için Amazon CloudFront ve Amazon S3'ü kullanın. Yeniden düzenleme
Ağ Yükünün arkasında hedef grupta yer alan AWS Lambda işlevlerini kullanmak için mikro hizmetler
Dengeleyici. MySQL veritabanını MySQL için Amazon RDS'ye taşıyın.

D. Statik web ön ucunu barındırmak için Amazon S3'ü kullanın. AWS'yi kullanmak için mikro hizmetleri yeniden düzenleyin
Application Load Balancer'ın arkasındaki hedef grupta yer alan Lambda işlevleri. Taşı
MySQL veritabanını bir Amazon EC2 Rezerve Edilmiş Örneğine aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Statik web ön ucunu barındırmak için Amazon CloudFront ve Amazon S3'ü kullanın. Mikro hizmetlerin Amazon API Gateway'i kullanarak eriştiği AWS Lambda işlevlerini kullanacak şekilde mikro hizmetleri yeniden düzenleyin. MySQL veritabanını MySQL için Amazon RDS'ye taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 915
Bir video oyunu şirketi, küresel kullanıcılarına yeni bir oyun uygulaması dağıtıyor. şirket
oyuncuların neredeyse gerçek zamanlı incelemelerini ve sıralamalarını sağlayacak bir çözüm gerektirir.
Bir çözüm mimarı, verilere hızlı erişim sağlayacak bir çözüm tasarlamalıdır. Çözüm mutlaka
ayrıca şirketin uygulamayı yeniden başlatması durumunda verilerin disklerde kalmasını sağlayın.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon S3 klasörünü kaynak olarak kullanarak bir Amazon CloudFront dağıtımını yapılandırın. Mağaza
S3 klasöründeki oynatıcı verileri.

B. Birden fazla AWS Bölgesinde Amazon EC2 bulut sunucuları oluşturun. Oynatıcı verilerini EC2'de saklayın
örnekler. Kullanıcıları en yakın EC2'ye yönlendirmek için Amazon Route 53'ü coğrafi konum kayıtlarıyla yapılandırın
örnek.

C. Redis silici için bir Amazon ElastiCache dağıtın. Oynatıcı verilerini ElastiCache'te saklayın
küme.

D. Memcached silgi için bir Amazon ElastiCache dağıtın. Oynatıcı verilerini
ElastiCache kümesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Redis silici için bir Amazon ElastiCache dağıtın. Oynatıcı verilerini ElastiCache kümesinde saklayın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 916
Bir şirket, AWS üzerinde hassas verileri işleyen bir uygulama tasarlıyor. Uygulama
birden fazla müşterinin finansal verilerini saklar ve işler.
Uyumluluk gereksinimlerini karşılamak için her müşterinin verilerinin ayrı ayrı şifrelenmesi gerekir.
Güvenli, merkezi bir anahtar yönetimi çözümü kullanarak dinlenin. Şirket AWS'yi kullanmak istiyor
Şifrelemeyi uygulamak için Anahtar Yönetim Hizmeti (AWS KMS).
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her müşteri için benzersiz bir şifreleme anahtarı oluşturun. Anahtarları bir Amazon S3 klasöründe saklayın.
Sunucu tarafı şifrelemeyi etkinleştirin.

B. AWS ortamında güvenli bir şekilde depolayan bir donanım güvenlik cihazı dağıtın
müşteri tarafından sağlanan şifreleme anahtarları. Şifrelemek için güvenlik cihazını AWS KMS ile entegre edin.
Uygulamadaki hassas veriler.

C. Uygulamadaki tüm hassas verileri şifrelemek için tek bir AWS KMS anahtarı oluşturun.

D. Her müşterinin verileri için ayrıntılı erişim kontrolüne sahip ayrı AWS KMS anahtarları oluşturun
ve günlük kaydı etkinleştirildi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Her müşterinin verileri için ayrıntılı erişim kontrolü ve günlük kaydının etkinleştirildiği ayrı AWS KMS anahtarları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 917
Bir şirketin müşteri siparişlerini işlemek için dayanıklı bir web uygulaması tasarlaması gerekir. İnternet
uygulama, web trafiğindeki ve uygulama kullanımındaki artışları otomatik olarak ele almalıdır.
müşteri deneyimini etkilemek veya müşteri siparişlerini kaybetmek.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Web trafiğini yönetmek için bir NAT ağ geçidi kullanın. Aşağıdakileri almak için Amazon EC2 Auto Scaling gruplarını kullanın:
İşlenen müşteri siparişlerini işleyin ve saklayın. Yakalamak ve kaydetmek için bir AWS Lambda işlevini kullanın.
işlenmemiş siparişleri saklayın.

B. Web trafiğini yönetmek için bir Ağ Yük Dengeleyicisi (NLB) kullanın. Application Load Balancer kullanma
Mağazaya Multi-AZ dağıtımıyla NLUse Amazon Redshift'ten müşteri siparişleri almak için
işlenmemiş ve işlenmiş müşteri siparişleri.

C. Web trafiğini yönetmek için bir Ağ Geçidi Yük Dengeleyicisi (GWLB) kullanın. Amazon Elastic Container'ı kullanın
Müşteri siparişlerini almaya ve işlemeye yönelik hizmet (Amazon ECS). Yakalamak için GWLB'yi kullanın ve
işlenmemiş siparişleri saklayın. İşlenen müşteri siparişlerini depolamak için Amazon DynamoDB'yi kullanın.

D. Web trafiğini yönetmek için Application Load Balancer kullanın. Amazon EC2 Otomatik Ölçeklendirmeyi Kullanın
Müşteri siparişlerini almak ve işlemek için gruplar. Amazon Simple Queue Service'i kullanın (Amazon
İşlenmemiş siparişleri saklamak için SQS). Depolamak için Amazon RDS'yi Multi-AZ dağıtımıyla kullanın
müşteri siparişlerini işleme koyduk.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Web trafiğini yönetmek için Application Load Balancer kullanın. Müşteri siparişlerini almak ve işlemek için Amazon EC2 Auto Scaling gruplarını kullanın. İşlenmemiş siparişleri depolamak için Amazon Simple Queue Service'i (Amazon SQS) kullanın. İşlenen müşteri siparişlerini depolamak için Amazon RDS'yi Multi-AZ dağıtımıyla birlikte kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 918
Bir şirket, milyonlarca dosyayı şirket içi bir sistemden başka bir şirkete taşımak için AWS DataSync'i kullanıyor
AWS. Dosyalar ortalama 10 KB boyutundadır.
Şirket, dosya depolama için Amazon S3'ü kullanmak istiyor. Göçten sonraki ilk yıl,
dosyalara bir veya iki kez erişilecektir ve hemen kullanılabilir olmalıdır. 1 yıl sonra dosyalar
en az 7 yıl boyunca arşivlenmesi gerekmektedir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Dosyaları büyük nesneler halinde gruplamak için bir arşiv aracı kullanın. Nesneleri taşımak için DataSync'i kullanın.
Nesneleri ilk yıl S3 Glacier Instant Retrieval'da saklayın. Yaşam döngüsü yapılandırmasını kullanarak
dosyaları 1 yıl sonra 7 yıllık saklama süresiyle S3 Glacier Deep Archive'a aktarın.

B. Dosyaları büyük nesneler halinde gruplamak için bir arşiv aracı kullanın. Nesneleri S3'e kopyalamak için DataSync'i kullanın
Standart-Sıklıksız Erişim (S3 Standart-IA). Dosyaları aktarmak için bir yaşam döngüsü yapılandırması kullanın.
S3 Glacier Anında Geri Alma, 7 yıllık saklama süresiyle 1 yıl sonra.

C. Dosyalar için hedef depolama sınıfını S3 Glacier Instant Retrieval olarak yapılandırın. Bir kullanın
dosyaları 1 yıl saklama süresiyle S3 Glacier Esnek Geri Alma'ya geçirmeye yönelik yaşam döngüsü politikası
7 yıllık süre.

D. Dosyaları S3 Standart-Nadir Erişime (S3) aktarmak için bir DataSync görevi yapılandırın
Standart-IA). Dosyaları 1 yıl sonra S3 Deep Archive'a geçirmek için yaşam döngüsü yapılandırmasını kullanın
7 yıllık saklama süresi ile.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Dosyaları büyük nesneler halinde gruplamak için bir arşiv aracı kullanın. Nesneleri taşımak için DataSync'i kullanın. Nesneleri ilk yıl S3 Glacier Instant Retrieval'da saklayın. Dosyaları 1 yıl sonra, 7 yıllık saklama süresiyle S3 Glacier Deep Archive'a geçirmek için bir yaşam döngüsü yapılandırması kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 919
Bir şirket kısa süre önce şirket içi Oracle veritabanında kaldır ve kaydır geçişini gerçekleştirdi
Amazon EC2 belleği optimize edilmiş bir Linux örneğinde çalışacak iş yükü. EC2 Linux örneği
64.000 IOPS'ye sahip 1 TB Tedarik Edilmiş IOPS SSD (io1) EBS birimi kullanır.
Geçişten sonraki veritabanı depolama performansı, geçişin performansından daha yavaştır.
şirket içi veritabanı.
Hangi çözüm depolama performansını artıracak?

A. Daha fazla Tedarik Edilmiş IOPS SSD (io1) EBS birimi ekleyin. Mantıksal oluşturmak için işletim sistemi komutlarını kullanın
Birim Yönetimi (LVM) şeridi.

B. Tedarik Edilen IOPS SSD (io1) EBS birimini 64.000 IOPS'nin üzerine çıkarın.

C. Tedarik Edilen IOPS SSD (io1) EBS biriminin boyutunu 2 TB'a yükseltin.

D. EC2 Linux örneğini, depolama açısından optimize edilmiş bir bulut sunucusu türüyle değiştirin. Değiştirmeyin
Sağlanan IOPS SSD (io1) EBS birimi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Daha fazla Tedarik Edilmiş IOPS SSD (io1) EBS birimi ekleyin. Mantıksal Birim Yönetimi (LVM) şeridi oluşturmak için işletim sistemi komutlarını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 920
Bir şirket, üzerinde barındırılan bir web uygulaması için monolitik bir mimariden geçiş yapıyor
Amazon EC2'den sunucusuz bir mikro hizmet mimarisine geçiş. Şirket AWS'yi kullanmak istiyor
olay odaklı, gevşek bağlı bir mimariyi destekleyen hizmetler. Şirket kullanmak istiyor
yayınlama/abone olma (pub/sub) modeli.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Bir AWS Lambda işlevini çağırmak için bir Amazon API Gateway REST API yapılandırın.
olayları bir Amazon Simple Queue Service (Amazon SQS) kuyruğunda yayınlar. Birini yapılandırın veya
SQS kuyruğundaki etkinlikleri okumak için daha fazla abone.

B. Bir AWS Lambda işlevini çağırmak için bir Amazon API Gateway REST API yapılandırın.
olayları bir Amazon Simple Notification Service (Amazon SNS) konusuna yayınlar. Birini yapılandırın veya
SNS konusundan etkinlik almak için daha fazla abone.

C. Amazon'daki bir veri akışına yazmak için bir Amazon API Gateway WebSocket API'sini yapılandırma
Geliştirilmiş yayılım özelliğine sahip Kinesis Veri Akışları. Etkinlikleri almak için bir veya daha fazla aboneyi yapılandırma
veri akışından.

D. Bir AWS Lambda işlevini çağırmak için bir Amazon API Gateway HTTP API'sini yapılandırın.
olayları bir Amazon Simple Notification Service (Amazon SNS) konusuna yayınlar. Birini yapılandırın veya
Konuyla ilgili etkinlikleri almak için daha fazla abone.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Olayları bir Amazon Simple Notification Service (Amazon SNS) konusuna yayınlayan bir AWS Lambda işlevini çağırmak için bir Amazon API Gateway HTTP API'si yapılandırın. Konuyla ilgili etkinlikleri almak için bir veya daha fazla aboneyi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 921
Bir şirket kısa süre önce monolitik bir uygulamayı Amazon EC2 bulut sunucusuna ve Amazon'a geçirdi
RDS. Uygulama sıkı bir şekilde bağlanmış modüllere sahiptir. Uygulamanın mevcut tasarımı şunları sağlar:
uygulamanın yalnızca tek bir EC2 örneğinde çalışabilmesi.
Şirket, kullanımın yoğun olduğu zamanlarda EC2 bulut sunucusunda yüksek CPU kullanımı fark etti.
Yüksek CPU kullanımı, okuma için Amazon RDS'deki düşük performansa karşılık gelir
istekler. Şirket, yüksek CPU kullanımını azaltmak ve okuma isteğini iyileştirmek istiyor
performans.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucusunu daha fazla CPU kapasitesine sahip bir EC2 bulut sunucusu tipine göre yeniden boyutlandırın. Bir yapılandırma
Minimum ve maksimum boyutu 1 olan Otomatik Ölçeklendirme grubu. Şunun için bir RDS okuma kopyası yapılandırın:
istekleri okuyun.

B. EC2 bulut sunucusunu, daha fazla CPU kapasitesine sahip bir EC2 bulut sunucusu tipine göre yeniden boyutlandırın. Bir yapılandırma
Minimum ve maksimum boyutu 1 olan Otomatik Ölçeklendirme grubu. Bir RDS okuma kopyası ekleyin ve yeniden yönlendirin
kopyaya yönelik tüm okuma/yazma trafiği.

C. Minimum boyutu 1 ve maksimum boyutu 2 olan bir Otomatik Ölçeklendirme grubu yapılandırın.
RDS DB örneğini daha fazla CPU kapasitesine sahip bir bulut sunucusu tipine aktarın.

D. EC2 bulut sunucusunu, daha fazla CPU kapasitesine sahip bir EC2 bulut sunucusu tipine göre yeniden boyutlandırın. Bir yapılandırma
Minimum ve maksimum boyutu 1 olan Otomatik Ölçeklendirme grubu. RDS Veritabanı örneğini,
daha fazla CPU kapasitesine sahip örnek türü.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 bulut sunucusunu, daha fazla CPU kapasitesine sahip bir EC2 bulut sunucusu tipine göre yeniden boyutlandırın. Minimum ve maksimum boyutu 1 olan bir Otomatik Ölçeklendirme grubu yapılandırın. Okuma istekleri için bir RDS okuma kopyası yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 922
Bir şirketin, geliştiricilerden oluşan bir ekibe şirketin AWS kaynaklarına erişmesine izin vermesi gerekir.
Şirket, kaynaklar için yüksek düzeyde güvenlik sağlamalıdır.
Şirket, yetkisiz erişimi önleyecek bir erişim kontrolü çözümüne ihtiyaç duyuyor
hassas veriler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her bir geliştirme ekibi üyesinin IAM kullanıcı kimlik bilgilerini ekibin geri kalanıyla paylaşın.
Erişim yönetimini basitleştirin ve geliştirme iş akışlarını kolaylaştırın.

B. En az ayrıcalık ilkesine dayalı olarak ayrıntılı izinlere sahip IAM rollerini tanımlayın.
Her geliştiriciye bir IAM rolü atayın.

C. AWS kaynaklarına programlı erişim vermek için IAM erişim anahtarları oluşturun. Yalnızca izin ver
geliştiricilerin erişim anahtarlarını kullanarak API çağrıları aracılığıyla AWS kaynaklarıyla etkileşim kurmasını sağlar.

D. Bir AWS Cognito kullanıcı havuzu oluşturun. Şunu kullanarak geliştiricilere AWS kaynaklarına erişim izni verin:
kullanıcı havuzu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** En az ayrıcalık ilkesine dayalı olarak ayrıntılı izinlere sahip IAM rollerini tanımlayın. Her geliştiriciye bir IAM rolü atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 923
Bir şirket, Amazon EC2 örneğinde monolitik bir web uygulaması barındırıyor. Uygulama kullanıcıları
yakın zamanda belirli zamanlarda düşük performans bildirdiler. Amazon CloudWatch'un analizi
ölçümler performansın düşük olduğu dönemlerde CPU kullanımının %100 olduğunu göstermektedir.
Şirket bu performans sorununu çözmek ve uygulama kullanılabilirliğini iyileştirmek istiyor.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. Ölçeklenecek bulut sunucusu tipine ilişkin öneri almak için AWS Compute Optimizer'ı kullanın
dikey olarak.

B. Web sunucusundan bir Amazon Machine Image (AMI) oluşturun. AMI'yi yeni bir şekilde referans alın
şablonu başlatın.

C. Dikey olarak ölçeklendirmek için Otomatik Ölçeklendirme grubu ve Application Load Balancer oluşturun.

D. Ölçeklenecek bulut sunucusu tipine ilişkin öneri almak için AWS Compute Optimizer'ı kullanın
yatay olarak.

E. Yatay olarak ölçeklendirmek için Otomatik Ölçeklendirme grubu ve Uygulama Yük Dengeleyici oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Web sunucusundan bir Amazon Machine Image (AMI) oluşturun. Yeni lansman şablonunda AMI'ye başvurun. Yatay olarak ölçeklendirmek için Otomatik Ölçeklendirme grubu ve Application Load Balancer oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 924
Bir şirket tüm iş uygulamalarını AWS Cloud'da çalıştırır. Şirket AWS kullanıyor
Birden fazla AWS hesabını yönetecek kuruluşlar.
Bir çözüm mimarının, IAM kullanıcılarına verilen tüm izinleri incelemesi gerekir.
hangi IAM kullanıcılarının gerekenden daha fazla izne sahip olduğu.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Şirketin AWS'sindeki tüm erişim izinlerini incelemek için Ağ Erişimi Analiz Aracı'nı kullanın
hesaplar.

B. Bir IAM kullanıcısı oluşturduğunda veya değiştirdiğinde etkinleşen bir AWS CloudWatch alarmı oluşturun
AWS hesabındaki kaynaklar.

C. Şirketin tüm verilerini incelemek için AWS Identity and Access Management (IAM) Erişim Analiz Aracını kullanın.
kaynaklar ve hesaplar.

D. Mevcut IAM politikalarındaki güvenlik açıklarını bulmak için Amazon Inspector'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Şirketin tüm kaynaklarını ve hesaplarını incelemek için AWS Identity and Access Management (IAM) Erişim Analiz Aracı'nı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 925
Bir şirketin mevzuata uyum için yeni bir veri saklama politikası uygulaması gerekiyor. Bir parçası olarak
Bu politikaya göre, bir Amazon S3 klasöründe depolanan hassas belgeler,
belirli bir süre için silinmesi veya değiştirilmesi.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Gerekli nesnelerde S3 Nesne Kilidini etkinleştirin ve yönetişim modunu etkinleştirin.

B. Gerekli nesnelerde S3 Nesne Kilidini etkinleştirin ve uyumluluk modunu etkinleştirin.

C. S3 grubunda sürüm oluşturmayı etkinleştirin. Belirtilen süre sonunda nesneleri silmek için bir yaşam döngüsü ilkesi ayarlayın.
dönem.

D. Nesneleri S3 Glacier Esnek Alma'ya geçirmek için bir S3 Yaşam Döngüsü politikası yapılandırın.
saklama süresi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Gerekli nesnelerde S3 Nesne Kilidini etkinleştirin ve uyumluluk modunu etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 926
Bir şirket müşteriye yönelik web uygulamasını konteynerler üzerinde çalıştırıyor. İş yükü Amazon'u kullanıyor
AWS Fargate'te Elastik Konteyner Hizmeti (Amazon ECS). Web uygulaması kaynaktır
yoğun.
Web uygulamasının müşterilerin kullanımına 7 gün 24 saat açık olması gerekmektedir.
Şirket, uygulamanın kısa süreli yüksek trafik patlamaları yaşamasını bekliyor. İş yükü olmalı
oldukça mevcuttur.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Fargate ile bir ECS kapasite sağlayıcısını yapılandırın. Üçüncü taraf kullanarak yük testi yapın
aracı. Amazon CloudWatch'ta Fargate görevlerini doğru boyutlandırın.

B. Sabit durum için Fargate ve patlama için Fargate Spot ile bir ECS kapasite sağlayıcısı yapılandırın
trafik.

C. Kararlı durum için Fargate Spot ve patlama için Fargate ile bir ECS kapasite sağlayıcısını yapılandırın
trafik.

D. Fargate ile bir ECS kapasite sağlayıcısını yapılandırın. Doğru boyutlandırmak için AWS Compute Optimizer'ı kullanın
Fargate görevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kararlı durum için Fargate ve patlama trafiği için Fargate Spot ile bir ECS kapasite sağlayıcısı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 927
Bir şirket AWS Cloud'da bir uygulama geliştiriyor. Uygulama Amazon'da barındırılıyor
Application Load Balancer'ın (ALB) arkasındaki EC2 örnekleri. Şirket Amazon Route'u kullanıyor
DNS için 53.
Şirketin DDoS'u tespit etmek için proaktif etkileşime sahip yönetilen bir çözüme ihtiyacı var
saldırılar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Config'i etkinleştirin. DDoS saldırılarını algılayan bir AWS Config yönetilen kuralı yapılandırın.

B. ALC'de AWS WAF'ı etkinleştirin Algılanacak ve engellenecek kuralları içeren bir AWS WAF web ACL oluşturun
DDoS saldırıları. Web ACL'yi ALB ile ilişkilendirin.

C. ALB erişim günlüklerini bir Amazon S3 klasöründe saklayın. Amazon GuardDuty'yi tespit edecek şekilde yapılandırın
ve DDoS saldırılarına karşı otomatik önleyici eylemler gerçekleştirin.

D. AWS Shield Advanced'e abone olun. Route 53'te barındırılan bölgeleri yapılandırın. ALB kaynaklarını ekleyin
korunan kaynaklar olarak

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Shield Advanced'e abone olun. Route 53'te barındırılan bölgeleri yapılandırın. ALB kaynaklarını korumalı kaynaklar olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 928
Bir şirket, bir VPC'de video akışı web uygulaması barındırıyor. Şirket bir Ağ kullanıyor
Gerçek zamanlı veri işleme için TCP trafiğini yönetmek üzere Yük Dengeleyici (NLB). Vardı
uygulamaya yetkisiz erişim girişimleri.
Şirket, uygulama güvenliğini minimum mimari değişiklikle artırmak istiyor.
uygulamaya yetkisiz erişim girişimleri.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Yetkisiz trafiği filtrelemek için bir dizi AWS WAF kuralını doğrudan NLB'ye uygulayın.

B. Yalnızca güvenilir IP adreslerine izin vermek için NLB'yi bir güvenlik grubuyla yeniden oluşturun.

C. Katı bir IP adresiyle yapılandırılmış mevcut NLB'ye paralel olarak ikinci bir NLB dağıtın
liste.

D. Gelişmiş DDoS koruması sağlamak ve yetkisiz kişileri önlemek için AWS Shield Advanced'i kullanın
erişim girişimleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yalnızca güvenilir IP adreslerine izin vermek için NLB'yi bir güvenlik grubuyla yeniden oluşturun.
>
> **Sınav Konu Özeti:**
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 929
Bir sağlık şirketi, bildirimleri bir kullanıcıya yayınlayan bir AWS Lambda işlevi geliştiriyor
şifrelenmiş Amazon Simple Notification Service (Amazon SNS) konusu. Bildirimler şunları içerir:
korunan sağlık bilgileri (PHI).
SNS konusu, aşağıdakiler için AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtarları kullanır:
şifreleme. Şirket, uygulamanın gerekli izinlere sahip olduğundan emin olmalıdır.
Mesajları SNS konusuna güvenli bir şekilde yayınlayın.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (Üç tanesini seçin.)

A. SNS konusu için Lambda işlevinin yayınlanmasına izin veren bir kaynak politikası oluşturun
konuya mesajlar.

B. SNS konusu için AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanın.
müşteri tarafından yönetilen anahtarlar.

C. SNS konusunun kullandığı şifreleme anahtarı için gerekli olan bir kaynak politikası oluşturun.
AWS KMS izinleri.

D. SNS konusunun kaynağında Lambda işlevinin Amazon Kaynak Adını (ARN) belirtin
politika.

E. Konuya erişimi kontrol etmek için bir Amazon API Gateway HTTP API'sini SNS konusuyla ilişkilendirin
API Ağ Geçidi kaynak politikalarını kullanarak.

F. Bir müşteriyi kullanmak için gerekli IAM izinlerine sahip bir Lambda yürütme rolünü yapılandırın
AWS KMS'de yönetilen anahtar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C,`
> - **Önerilen Çözüm:** SNS konusu için Lambda işlevinin konuya mesaj yayınlamasına izin veren bir kaynak politikası oluşturun. SNS konusunun kullandığı şifreleme anahtarı için gerekli AWS KMS izinlerine sahip bir kaynak politikası oluşturun. AWS KMS'de müşteri tarafından yönetilen bir anahtarı kullanmak için gerekli IAM izinlerine sahip bir Lambda yürütme rolü yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 930
Bir şirketin bir çalışan web portalı vardır. Çalışanlar bordro ayrıntılarını görüntülemek için portala giriş yapar.
Şirket, çalışanlarına taranmış belgeleri yükleme olanağı sağlayacak yeni bir sistem geliştiriyor
geri ödemeye ilişkin belgeler. Şirket, metin tabanlı verileri bilgisayardan çıkarmak için bir program çalıştırıyor.
belgeleri alın ve çıkarılan bilgileri her çalışanın geri ödeme kimliklerine ekleyin.
işleme.
Çalışan web portalı %100 çalışma süresi gerektirir. Belge ayıklama programı çalışır
nadiren gün boyunca talep üzerine. Şirket ölçeklenebilir bir yapı oluşturmak istiyor
ve mevcut web portalında minimum düzeyde değişiklik gerektirecek uygun maliyetli yeni sistem.
firma herhangi bir kod değişikliği yapmak istemiyor.
EN AZ uygulama çabasıyla bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EC2 İsteğe Bağlı Bulut Sunucularını web portalı için bir Otomatik Ölçeklendirme grubunda çalıştırın. Bir kullanın
Belge ayıklama programını çalıştırmak için AWS Lambda işlevi. Aşağıdaki durumlarda Lambda işlevini çağırın:
çalışan yeni bir geri ödeme belgesi yükler.

B. Web portalı için bir Otomatik Ölçeklendirme grubunda Amazon EC2 Spot Bulut Sunucularını çalıştırın. Çalıştır
EC2 Spot Bulut Sunucularındaki belge ayıklama programı. Belge ayıklama programı örneklerini başlatın
Bir çalışan yeni bir geri ödeme belgesi yüklediğinde.

C. Web portalını ve belge ayıklama programını çalıştırmak için bir Tasarruf Planı satın alın. Web'i çalıştırın
Portalı ve belge ayıklama programını Otomatik Ölçeklendirme grubunda kullanın.

D. Web portalını barındırmak için bir Amazon S3 klasörü oluşturun. Amazon API Gateway ve AWS kullanın
Mevcut işlevler için Lambda işlevi. Belgeyi çalıştırmak için Lambda işlevini kullanın
programı çıkartın. Yeni bir API ile ilişkilendirildiğinde Lambda işlevini çağırın
belge yükleme adı verilir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon EC2 İsteğe Bağlı Bulut Sunucularını web portalı için bir Otomatik Ölçeklendirme grubunda çalıştırın. Belge ayıklama programını çalıştırmak için AWS Lambda işlevini kullanın. Bir çalışan yeni bir geri ödeme belgesi yüklediğinde Lambda işlevini çağırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 931
Bir medya şirketinin us-east-1 Bölgesi'nde çok hesaplı bir AWS ortamı var. şirket
bir üretim hesabında bir Amazon Simple Notification Service (Amazon SNS) konusu var
performans ölçümlerini yayınlar. Şirketin bir yöneticide AWS Lambda işlevi var
Günlük verilerini işlemek ve analiz etmek için hesap.
Yönetici hesabındaki Lambda işlevi,
Önemli ölçümler raporlandığında üretim hesabında yer alan SNS konusu.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Lambda işlevi için Amazon SNS'nin IAM kaynak politikasını çağırmasına olanak tanıyan bir IAM kaynak politikası oluşturun.
işlevi.

B. Yöneticide bir Amazon Simple Queue Service (Amazon SQS) kuyruğu uygulayın
Üretim hesabındaki SNS konusundan gelen mesajları ara belleğe almak için hesap. Yapılandır
Lambda işlevini çağırmak için SQS kuyruğu.

C. SNS konusu için Lambda işlevinin abone olmasına olanak tanıyan bir IAM politikası oluşturun.
konu.

D. SNS konusunu yakalamak için üretim hesabında bir Amazon EventBridge kuralı kullanın
bildirimler. Bildirimleri Lambda işlevine iletmek için EventBridge kuralını yapılandırın.
yönetici hesabında.

E. Performans ölçümlerini üretim hesabındaki bir Amazon S3 klasöründe saklayın. Amazon'u kullanın
Athena, yönetici hesabındaki ölçümleri analiz edecek.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Lambda işlevi için Amazon SNS'nin işlevi çağırmasına olanak tanıyan bir IAM kaynak politikası oluşturun. Lambda işlevinin konuya abone olmasına olanak tanıyan SNS konusu için bir IAM politikası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 932
Bir şirket, bir uygulamayı şirket içi bir konumdan Amazon Elastic'e taşıyor
Kubernetes Hizmeti (Amazon EKS). Şirketin, içinde bulunan bölmeler için özel bir alt ağ kullanması gerekir.
Şirketin VPC'sinin gerekliliklere uyması. Şirketin ayrıca şunları sağlaması gerekir:
bölmeler, bölmelerin VPC'si içinde güvenli bir şekilde iletişim kurabilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bölmeler için özel alt ağ yapılandırmalarını doğrudan yönetmek için AWS Transit Gateway'i yapılandırın
Amazon EKS'de.

B. Şirketin şirket içi IP adresi aralıklarından bir AWS Direct Connect bağlantısı oluşturun
EKS bölmelerine.

C. Kubernetes için Amazon VPC CNI eklentisini kullanın. VPC kümesinde özel alt ağlar tanımlayın
kullanılacak bölmeler.

D. Pod yerleştirmeyi kısıtlamak için kapsül benzeşim karşıtı kurallara sahip bir Kubernetes ağ politikası uygulayın
özel alt ağlardaki belirli düğümlere.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kubernetes için Amazon VPC CNI eklentisini kullanın. Pod'ların kullanması için VPC kümesinde özel alt ağlar tanımlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 933
Bir şirket, tüm verileri tek bir Amazon RDS'de depolayan bir e-ticaret uygulamasına ev sahipliği yapıyor.
Tamamen AWS tarafından yönetilen MySQL veritabanı örneği. Şirketin riskleri azaltması gerekiyor
tek başarısızlık noktası.
EN AZ uygulama çabasıyla bu gereksinimleri hangi çözüm karşılayacak?

A. Multi-AZ dağıtımını kullanmak için RDS Veritabanı örneğini değiştirin. Bir sonraki adımda değişiklikleri uygulayın
bakım penceresi.

B. Mevcut veritabanını yeni bir Amazon DynamoDB Multi-AZ dağıtımına taşıyın. AWS'yi kullanın
Veritabanını taşımak için heterojen bir geçiş stratejisine sahip Veritabanı Geçiş Hizmeti (AWS DMS)
geçerli RDS DB örneğini DynamoDB tablolarına aktarın.

C. Multi-AZ dağıtımında yeni bir RDS Veritabanı bulut sunucusu oluşturun. Verileri manuel olarak geri yükleyin
En son anlık görüntüden mevcut RDS Veritabanı örneği.

D. Veritabanı bulut sunucusunu bir Amazon EC2 Auto Scaling grubunda minimum grup boyutuyla yapılandırın
üç. İstekleri tüm veritabanı bulut sunucularına dağıtmak için Amazon Route 53 basit yönlendirmeyi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Multi-AZ dağıtımını kullanmak için RDS veritabanı örneğini değiştirin. Bir sonraki bakım penceresinde değişiklikleri uygulayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 934
Bir şirketin dosya için birden fazla Microsoft Windows SMB dosya sunucusu ve Linux NFS dosya sunucusu vardır.
şirket içi ortamda paylaşma. Şirketin AWS geçiş planının bir parçası olarak,
şirket dosya sunucularını AWS Cloud'da birleştirmek istiyor.
Şirketin hem NFS hem de SMB erişimini destekleyen, yönetilen bir AWS depolama hizmetine ihtiyacı var.
Çözümün protokoller arasında paylaşım yapabilmesi gerekir. Çözümün yedekliliği olmalıdır.
Erişilebilirlik Alanı düzeyi.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Depolama amacıyla NetApp ONTAP için Amazon FSx'i kullanın. Çoklu protokol erişimini yapılandırın.

B. İki Amazon EC2 bulut sunucusu oluşturun. Windows SMB dosya sunucusu erişimi için bir EC2 örneğini kullanın
ve Linux NFS dosya sunucusu erişimi için bir EC2 örneği.

C. KOBİ erişimine yönelik NetApp ONTAP için Amazon FSx'i kullanın. NFS için Lustre için Amazon FSx'i kullanın
erişim.

D. Amazon S3 depolama alanını kullanın. Amazon S3 Dosya Ağ Geçidi aracılığıyla Amazon S3'e erişin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Depolama için NetApp ONTAP için Amazon FSx'i kullanın. Çoklu protokol erişimini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 935
Bir yazılım şirketinin kritik bir web uygulamasını yükseltmesi gerekiyor. Uygulama şu anda çalışıyor
Şirketin genel bir alt ağda barındırdığı tek bir Amazon EC2 örneğinde. EC2 örneği
MySQL veritabanını çalıştırır. Uygulamanın DNS kayıtları Amazon Route 53'te yayınlanır
bölge.
Bir çözüm mimarının uygulamayı ölçeklenebilir ve yüksek düzeyde kullanılabilir olacak şekilde yeniden yapılandırması gerekir.
çözüm mimarı aynı zamanda MySQL okuma gecikmesini de azaltmalıdır.
Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (İki tane seçin.)

A. İkinci bir AWS Bölgesinde ikinci bir EC2 bulut sunucusu başlatın. Route 53 yük devretme yönlendirmesi kullanın
trafiği ikinci EC2 örneğine yönlendirme politikası.

B. Özel EC2 bulut sunucularını birden fazla sunucuda başlatmak için bir Otomatik Ölçeklendirme grubu oluşturun ve yapılandırın
Erişilebilirlik Alanları. Örnekleri yeni bir Application Load Balancer'ın arkasındaki hedef gruba ekleyin.

C. Veritabanını bir Amazon Aurora MySQL kümesine taşıyın. Birincil veritabanı örneğini oluşturun
ve ayrı Erişilebilirlik Alanlarında okuyucu veritabanı bulut sunucusu.

D. Birden fazla AWS'de özel EC2 bulut sunucularını başlatmak için bir Otomatik Ölçeklendirme grubu oluşturun ve yapılandırın
Bölgeler. Örnekleri yeni bir Application Load Balancer'ın arkasındaki hedef gruba ekleyin.

E. Veritabanını Bölgeler arası okuma replikalarına sahip bir Amazon Aurora MySQL kümesine taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** Birden fazla Erişilebilirlik Alanında özel EC2 bulut sunucularını başlatmak için bir Otomatik Ölçeklendirme grubu oluşturun ve yapılandırın. Örnekleri yeni bir Application Load Balancer'ın arkasındaki hedef gruba ekleyin. Veritabanını bir Amazon Aurora MySQL kümesine taşıyın. Birincil veritabanı bulut sunucusunu ve okuyucu veritabanı bulut sunucusunu ayrı Erişilebilirlik Alanlarında oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 936
Bir şirket binlerce AWS Lambda işlevini çalıştırıyor. Şirketin bir çözüme ihtiyacı var
Tüm Lambda işlevlerinin kullandığı hassas bilgileri güvenli bir şekilde saklayın. Çözüm de olmalı
hassas bilgilerin otomatik rotasyonunu yönetin.
Hangi adım kombinasyonu bu gereksinimleri EN AZ operasyonel giderle karşılayacaktır?
(İki tane seçin.)

A. Hassas verileri almak ve oluşturmak için Lambda@Edge'i kullanarak HTTP güvenlik üstbilgileri oluşturun
bilgi

B. Hassas bilgileri alan bir Lambda katmanı oluşturun

C. Hassas bilgileri AWS Secrets Manager'da saklayın

D. Hassas bilgileri AWS Systems Manager Parameter Store'da saklayın

E. Hassas bilgileri almak için özel aktarım hızına sahip bir Lambda tüketicisi oluşturun ve
çevresel değişkenler yarat

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** Hassas bilgileri alan bir Lambda katmanı oluşturun Hassas bilgileri AWS Secrets Manager'da saklayın
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru 937
Bir şirketin, Otomatik Ölçeklendirmede Amazon EC2 bulut sunucularında çalışan dahili bir uygulaması var
grup. EC2 bulut sunucuları işlem açısından optimize edilmiştir ve Amazon Elastic Block Store'u (Amazon) kullanır
EBS) hacimleri.
Şirket, EC2 bulut sunucuları (Otomatik Ölçeklendirme) genelinde maliyet optimizasyonlarını belirlemek istiyor
grup ve EBS birimleri.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Yeni bir AWS Maliyet ve Kullanım Raporu oluşturun. Şunun için maliyet önerileri için raporda arama yapın:
EC2, Otomatik Ölçeklendirme grubunu ve EBS birimlerini oluşturur.

B. Yeni Amazon CloudWatch faturalandırma uyarıları oluşturun. Maliyet için uyarı durumlarını kontrol edin
EC2 bulut sunucuları, Otomatik Ölçeklendirme grubu ve EBS birimleri için öneriler.

C. EC2 bulut sunucuları, Auto için maliyet önerileri için AWS Compute Optimizer'ı yapılandırın
Ölçeklendirme grubu ve EBS birimleri.

D. EC2 bulut sunucularına yönelik maliyet önerileri için AWS Compute Optimizer'ı yapılandırın. Bir oluştur
yeni AWS Maliyet ve Kullanım Raporu. Otomatik için maliyet önerileri için raporda arama yapın
Ölçeklendirme grubu ve EBS birimleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucuları, Otomatik Ölçeklendirme grubu ve EBS birimlerine yönelik maliyet önerileri için AWS Compute Optimizer'ı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 938
Bir şirket, genel olarak dağıtılmış birden fazla Amazon EC2 bulut sunucusunda bir medya mağazası işletiyor
tek bir VPC'de birden fazla Erişilebilirlik Alanı. Şirket, yüksek performanslı bir çözüm istiyor
verileri tüm EC2 bulut sunucuları arasında paylaşır ve verileri yalnızca VPC içinde tutmayı tercih eder.
Bir çözüm mimarı ne tavsiye etmelidir?

A. Bir Amazon S3 klasörü oluşturun ve her bulut sunucusunun uygulamasından hizmet API'lerini çağırın

B. Bir Amazon S3 klasörü oluşturun ve tüm bulut sunucularını buna bağlı birim olarak erişecek şekilde yapılandırın

C. Bir Amazon Elastic Block Store (Amazon EBS) birimi yapılandırın ve bunu tüm birimlere bağlayın
örnekler

D. Bir Amazon Elastic File System (Amazon EFS) dosya sistemi yapılandırın ve bunu tüm platformlara bağlayın
örnekler

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir Amazon Elastic File System (Amazon EFS) dosya sistemi yapılandırın ve bunu tüm bulut sunucularına bağlayın
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 939
Bir şirket MySQL için Amazon RDS örneğini kullanıyor. Yıl sonu işlemlerine hazırlanmak için,
şirket, şirketin sunucularından gelen ekstra salt okunur sorguları karşılamak için bir okuma kopyası ekledi
raporlama aracı. Okuma replikası CPU kullanımı %60 ve birincil örnek CPU kullanımı şuydu:
%60.
Yıl sonu etkinlikleri tamamlandıktan sonra okuma kopyası sabit %25 CPU kullanımına sahip olur.
birincil örnek hâlâ sabit %60 CPU kullanımına sahip. Şirket, doğru boyutlandırmak istiyor
veritabanına sahiptir ve gelecekteki büyüme için hala yeterli performansı sağlar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Okuma kopyasını silin Birincil örnekte değişiklik yapmayın

B. Okuma replikasını daha küçük bir örnek boyutuna yeniden boyutlandırın Birincil örnekte değişiklik yapmayın

C. Okuma replikasını daha büyük bir örnek boyutuna yeniden boyutlandırın Birincil örneği daha küçük bir örnek boyutuna yeniden boyutlandırın
örnek boyutu

D. Okuma kopyasını silin Birincil örneği daha büyük bir örnek olarak yeniden boyutlandırın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Okuma replikasını daha küçük bir örnek boyutuna yeniden boyutlandırın Birincil örnekte değişiklik yapmayın
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 940
Bir şirket veritabanlarını PostgreSQL için Amazon RDS'ye taşıyor. Şirket
uygulamalarını Amazon EC2 bulut sunucularına taşıyor. Şirket maliyetleri optimize etmek istiyor
uzun süren iş yükleri.
Hangi çözüm bu gereksinimi EN uygun maliyetle karşılayacaktır?

A. Amazon RDS for PostgreSQL iş yükleri için İsteğe Bağlı Bulut Sunucularını kullanın. 1 yıllık satın al
EC2 bulut sunucuları için Peşin Ödemesiz seçeneğiyle Tasarruf Planını Hesaplayın.

B. Amazon RDS için Peşinatsız seçeneğiyle 1 yıllık bir süre için Rezerve Edilmiş Bulut Sunucuları satın alın
PostgreSQL iş yükleri için. Peşin Ödemeden 1 yıllık EC2 Bulut Sunucusu Tasarruf Planı satın alın
EC2 bulut sunucuları için seçenek.

C. Amazon için Kısmi Peşinat seçeneğiyle 1 yıllık bir süre için Rezerve Edilmiş Bulut Sunucuları satın alın
PostgreSQL iş yükleri için RDS. Kısmi ile 1 yıllık EC2 Bulut Sunucusu Tasarruf Planı satın alın
EC2 bulut sunucuları için ön ödeme seçeneği.

D. Amazon RDS için Tamamı Peşinat seçeneğiyle 3 yıllık bir süre için Rezerve Edilmiş Bulut Sunucuları satın alın
PostgreSQL iş yükleri için. Tamamı Peşin Ödemeyle 3 yıllık EC2 Bulut Sunucusu Tasarruf Planı satın alın
EC2 bulut sunucuları için seçenek.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon RDS for PostgreSQL iş yükleri için Tamamı Peşinat seçeneğiyle 3 yıllık bir süre için Rezerve Edilmiş Bulut Sunucuları satın alın. EC2 bulut sunucuları için Tamamı Peşinat seçeneğiyle 3 yıllık bir EC2 Bulut Sunucusu Tasarruf Planı satın alın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 941
Bir şirket Amazon Elastic Kubernetes Service (Amazon EKS) kümesini kullanıyor.
Şirket, EKS kümesindeki Kubernetes hizmet hesaplarının güvenli ve
Hizmet hesapları (IRSA) için IAM rollerini kullanarak belirli AWS kaynaklarına ayrıntılı erişim.
Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (İki tane seçin.)

A. Gerekli izinleri tanımlayan bir IAM politikası oluşturun Politikayı doğrudan IAM'ye ekleyin
EKS düğümlerinin rolü.

B. Kubernetes hizmet hesaplarının devre dışı bırakılmasını önlemek için EKS kümesi içinde ağ politikaları uygulayın.
belirli AWS hizmetlerine erişme.

C. EKS kümesinin IAM rolünü, her Kubernetes hizmet hesabına yönelik izinleri içerecek şekilde değiştirin.
IAM rolleri ile Kubernetes rolleri arasında bire bir eşleme sağlayın.

D. Gerekli izinleri içeren bir IAM rolünü tanımlayın. Kubernetes hizmetine açıklama ekleyin
IAM rolünün Amazon ResourceName'ine (ARN) sahip hesaplar.

E. Hizmet hesaplarının IAM rolleri ile OpenID arasında bir güven ilişkisi kurun
Connect (OIDC) kimlik sağlayıcısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E`
> - **Önerilen Çözüm:** Gerekli izinleri içeren bir IAM rolü tanımlayın. Kubernetes hizmet hesaplarına IAM rolünün Amazon ResourceName (ARN) değerini ekleyin. Hizmet hesaplarının IAM rolleri ile OpenID Connect (OIDC) kimlik sağlayıcısı arasında bir güven ilişkisi kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 942
Bir şirket, gizli verileri analiz için düzenli olarak Amazon S3 klasörlerine yüklüyor.
Şirketin güvenlik politikaları, nesnelerin kullanımda değilken şifrelenmesi gerektiğini zorunlu kılmaktadır.
Şirketin şifreleme anahtarını her yıl otomatik olarak döndürmesi gerekir. Şirketin şunları yapabilmesi gerekir:
AWS CloudTrail'i kullanarak anahtar rotasyonunu izleyin. Şirket ayrıca maliyetleri en aza indirmelidir.
şifreleme anahtarı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Müşteri tarafından sağlanan anahtarlarla (SSE-C) sunucu tarafı şifrelemeyi kullanın

B. Amazon S3 yönetilen anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın

C. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanın

D. Müşteri tarafından yönetilen AWS KMS anahtarlarıyla sunucu tarafı şifrelemeyi kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanın
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 943
Bir şirket son 3 ay içinde birçok uygulamayı AWS'ye taşıdı. Şirket istiyor
Bu uygulamaların her biri için maliyetlerin dökümünü bilmek. Şirket bir teklif almak istiyor
Bu bilgiyi içeren düzenli rapor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Son 3 aya ait verileri bir .csv dosyasına indirmek için AWS Budgets'ı kullanın. İstediğinizi arayın
bilgi.

B. AWS Maliyet ve Kullanım Raporlarını bir Amazon RDS DB bulut sunucusuna yükleyin. Almak için SQL sorgularını çalıştırın
istenilen bilgi.

C. Tüm AWS kaynaklarını bir maliyet anahtarı ve uygulama adının değeriyle etiketleyin. Etkinleştir
maliyet tahsisi etiketleri. İstediğiniz bilgiyi almak için Maliyet Gezgini'ni kullanın.

D. Tüm AWS kaynaklarını bir maliyet anahtarı ve uygulama adının değeriyle etiketleyin. Şunu kullanın:
Son 3 aya ait faturaları indirmek için AWS Faturalandırma ve Maliyet Yönetimi konsolu. Yukarıya bak
istenilen bilgi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tüm AWS kaynaklarını bir maliyet anahtarı ve uygulama adının değeriyle etiketleyin. Maliyet tahsis etiketlerini etkinleştirin. İstediğiniz bilgiyi almak için Maliyet Gezgini'ni kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 944
Bir e-ticaret şirketi, sürekliliği sağlamak için AWS'de bir web uygulaması dağıtmaya hazırlanıyor
müşteriler için hizmet. Mimari, şirketin barındırdığı bir web uygulamasını içerir
Amazon EC2 bulut sunucuları, Amazon RDS'deki ilişkisel bir veritabanı ve statik varlıklar
Amazon S3'teki şirket mağazaları.
Şirket, uygulama için sağlam ve dayanıklı bir mimari tasarlamak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EC2 bulut sunucularını tek bir Erişilebilirlik Alanında dağıtın. Bir RDS Veritabanı örneğini dağıtın
aynı Erişilebilirlik Alanı. Statik varlıkları depolamak için Amazon S3'ü sürüm oluşturma etkinleştirilmiş olarak kullanın.

B. Amazon EC2 bulut sunucularını birden çok Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda dağıtın.
Multi-AZ RDS Veritabanı bulut sunucusunu dağıtın. Statik varlıkları dağıtmak için Amazon CloudFront'u kullanın.

C. Amazon EC2 bulut sunucularını tek bir Erişilebilirlik Alanında dağıtın. Bir RDS Veritabanı örneğini bir
AZ'ler arası yedeklilik için ikinci Erişilebilirlik Alanı. Statik varlıkları doğrudan EC2'den sunma
örnekler.

D. Web uygulamasını sunmak için AWS Lambda işlevlerini kullanın. Amazon Aurora Serverless v2'yi kullanın
veritabanı için. Statik varlıkları Amazon Elastic File System (Amazon EFS) One'da depolayın
Bölge-Sıklıksız Erişim (Tek Bölge-IA).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon EC2 bulut sunucularını birden çok Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda dağıtın. Multi-AZ RDS Veritabanı bulut sunucusunu dağıtın. Statik varlıkları dağıtmak için Amazon CloudFront'u kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 945
Bir e-ticaret şirketi, birden fazla AWS hesabında birden fazla dahili uygulama çalıştırır.
şirket, AWS hesaplarını yönetmek için AWS Organizasyonlarını kullanıyor.
Şirketin ağ hesabındaki bir güvenlik cihazı, aralarındaki etkileşimleri incelemelidir.
AWS hesaplarındaki uygulamalar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Trafiği güvenliğe göndermek için ağ hesabına bir Ağ Yük Dengeleyicisi (NLB) dağıtın
cihaz. Bir arayüz VPC'si kullanarak uygulama hesaplarını NLB'ye trafik gönderecek şekilde yapılandırma
uygulama hesaplarındaki uç nokta.

B. Trafiği doğrudan uygulama hesaplarına göndermek için uygulama hesaplarına bir Uygulama Yük Dengeleyicisi (ALB) dağıtın.
güvenlik cihazı.

C. Trafiği ağ hesabına göndermek için ağ hesabına bir Ağ Geçidi Yük Dengeleyicisi (GWLB) dağıtın.
güvenlik cihazı. Uygulama hesaplarını, bir ağ kullanarak GWLB'ye trafik gönderecek şekilde yapılandırın.
uygulama hesaplarındaki arayüz GWLB uç noktası.

D. Trafiği doğrudan uygulamaya göndermek için uygulama hesaplarına bir arayüz VPC uç noktası dağıtın.
güvenlik cihazı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Güvenlik cihazına trafik göndermek için ağ hesabına bir Ağ Geçidi Yük Dengeleyicisi (GWLB) dağıtın. Uygulama hesaplarındaki bir arayüz GWLB uç noktasını kullanarak GWLB'ye trafik gönderecek şekilde uygulama hesaplarını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 946
Bir şirket, üretim iş yükünü aşağıdakileri içeren bir Amazon Aurora MySQL Veritabanı kümesinde çalıştırıyor:
altı Aurora kopyası. Şirket, birinden gerçek zamanlıya yakın raporlama sorguları istiyor
departmanlar Aurora Replikalarının üçüne otomatik olarak dağıtılacak. Bu üç
replikalar, veritabanı kümesinin geri kalanından farklı bir işlem ve bellek spesifikasyonuna sahiptir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. İş yükü için özel bir uç nokta oluşturun ve kullanın

B. Üç düğümlü küme klonu oluşturun ve okuyucu uç noktasını kullanın

C. Seçilen üç düğüm için örnek uç noktalarından herhangi birini kullanın

D. Salt okunur iş yükünü otomatik olarak dağıtmak için okuyucu uç noktasını kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İş yükü için özel bir uç nokta oluşturun ve kullanın
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 947
Bir şirket, şirket içi veri merkezindeki bir sunucuda Node js işlevini çalıştırır. Veri merkezi
verileri PostgreSQL veritabanında saklar. Şirket kimlik bilgilerini bir bağlantıda saklıyor
sunucudaki bir ortam değişkenindeki dize. Şirket, uygulamasını şuraya taşımak istiyor:
AWS ve Node.js uygulama sunucusunu AWS Lambda ile değiştirmek. Şirket de istiyor
Amazon RDS for PostgreSQL'e geçiş yapmak ve veritabanı kimlik bilgilerinin doğrulandığından emin olmak için
güvenli bir şekilde yönetilir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Veritabanı kimlik bilgilerini AWS Systems Manager Parametre Deposu'nda bir parametre olarak saklayın
Parametre Deposunu, gizli dizileri her 30 günde bir otomatik olarak döndürecek şekilde yapılandırın. Lambda'yı güncelleyin
parametreden kimlik bilgilerini alma işlevi.

B. Veritabanı kimlik bilgilerini AWS Secrets Manager'da gizli bilgi olarak saklayın. Gizli Dizileri Yapılandır
Yöneticinin kimlik bilgilerini her 30 günde bir otomatik olarak döndürmesi. Lambda işlevini şu şekilde güncelleyin:
kimlik bilgilerini sırdan alın.

C. Veritabanı kimlik bilgilerini şifrelenmiş bir Lambda ortam değişkeni olarak saklayın. Özel bir yazı yaz
Kimlik bilgilerini döndürmek için Lambda işlevi. Lambda işlevini her 30 günde bir çalışacak şekilde planlayın.

D. Veritabanı kimlik bilgilerini AWS Key Management Service'te (AWS KMS) anahtar olarak saklayın.
Anahtar için otomatik döndürmeyi yapılandırın. Kimlik bilgilerini geri almak için Lambda işlevini güncelleyin
KMS anahtarından.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanı kimlik bilgilerini AWS Secrets Manager'da gizli bilgi olarak saklayın. Kimlik bilgilerini her 30 günde bir otomatik olarak döndürecek şekilde Secrets Manager'ı yapılandırın. Gizli dizideki kimlik bilgilerini almak için Lambda işlevini güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru 948
Bir şirket, mevcut ve devam eden veri değişikliklerini şirket içi Oracle'dan kopyalamak istiyor
veritabanını Amazon RDS for Oracle'a aktarın. Çoğaltılacak veri miktarı her bir üründe değişiklik gösterir.
gün. Şirket, veriler için AWS Database Migration Service'i (AWS DMS) kullanmak istiyor
çoğaltma. Çözüm yalnızca çoğaltma örneğinin gerektirdiği kapasiteyi tahsis etmelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Örnekleri sağlamak için AWS DMS çoğaltma örneğini Multi-AZ dağıtımıyla yapılandırın
birden fazla Erişilebilirlik Alanında.

B. Verileri analiz etmek ve çoğaltmak için bir AWS DMS Sunucusuz çoğaltma görevi oluşturun.
gerekli kapasiteyi sağlamak.

C. AWS DMS çoğaltma örneğinin boyutunu büyütmek veya büyütmek için Amazon EC2 Auto Scaling'i kullanın.
çoğaltılacak veri miktarına göre aşağı.

D. Amazon Elastic Container Service'i (Amazon) kullanarak AWS DMS çoğaltma kapasitesi sağlayın
ECS), tedarik sırasında verileri analiz etmek ve çoğaltmak için AWS Fargate başlatma türüne sahip
gerekli kapasite.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Gerekli kapasiteyi sağlarken verileri analiz etmek ve çoğaltmak için bir AWS DMS Sunucusuz çoğaltma görevi oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 949
Bir şirketin çok katmanlı bir web uygulaması var. Uygulamanın dahili hizmet bileşenleri şunlardır:
Amazon EC2 bulut sunucularına dağıtıldı. Dahili hizmet bileşenlerinin erişmesi gerekiyor
AWS'de barındırılan üçüncü taraf hizmet olarak yazılım (SaaS) API'leri.
Şirketin, uygulamanın dahili kısmından güvenli ve özel bağlantı sağlaması gerekiyor
üçüncü taraf SaaS uygulamasına yönelik hizmetler. Şirketin minimum düzeyde olduğundan emin olması gerekiyor
kamuya açık internete maruz kalma.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Üçüncü taraf SaaS ile güvenli bir bağlantı kurmak için AWS Siteden Siteye VPN uygulayın
sağlayıcı.

B. Uygulamanın VPC'si ile uygulamanın VPC'si arasındaki trafiği yönetmek ve yönlendirmek için AWS Transit Gateway'i dağıtın.
üçüncü taraf SaaS sağlayıcısı.

C. AWS PrivateLink'i, yalnızca VPC'den giden trafiğe izin verecek şekilde yapılandırın;
üçüncü taraf SaaS sağlayıcısının kurulması.

D. Uygulamanın VPC'si ile uygulamanın VPC'si arasında özel bir bağlantı oluşturmak için AWS PrivateLink'i kullanın.
üçüncü taraf SaaS sağlayıcısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulamanın VPC'si ile üçüncü taraf SaaS sağlayıcısı arasında özel bir bağlantı oluşturmak için AWS PrivateLink'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru 950
Bir çözüm mimarının, bir şirketin kurumsal ağını VPC'sine bağlaması gerekir.
AWS kaynaklarına şirket içi erişim. Çözüm tüm trafiğin şifrelenmesini sağlamalıdır
ağ katmanında ve oturum katmanında kurumsal ağ ile VPC arasında.
çözüm aynı zamanda AWS ile AWS arasında sınırsız erişimi önlemek için güvenlik kontrolleri de sağlamalıdır.
şirket içi sistemler.
Hangi çözüm bu gereksinimleri karşılıyor?

A. VPC'ye bağlanmak için AWS Direct Connect'i yapılandırın. İzin vermek için VPC rota tablolarını yapılandırın
ve AWS ile şirket içi arasındaki trafiği gerektiği gibi reddedin.

B. AWS Management Console'a yalnızca tanımlı bir kümeden erişime izin vermek için bir IAM politikası oluşturun
kurumsal IP adresleri. Bir IAM politikası kullanarak kullanıcı erişimini iş sorumluluğuna göre kısıtlayın
ve roller.

C. AWS Siteden Siteye VPN'i, yönlendirmek için VPConfigure rota tablosu girişlerine bağlanacak şekilde yapılandırın
izin vermek için şirket içinden VPConfigure örnek güvenlik gruplarına ve ağ ACL'lerine giden trafik
yalnızca tesis içinden gerekli trafik.

D. VPC'ye bağlanmak için AWS Transit Gateway'i yapılandırın. Yönlendirmek için rota tablosu girişlerini yapılandırma
şirket içinden VPC'ye giden trafik. Örnek güvenlik gruplarını ve ağ ACL'lerini yapılandırın
yalnızca tesis içinden gerekli trafiğe izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Site-to-Site VPN'i, şirket içinden yalnızca gerekli trafiğe izin vermek amacıyla trafiği şirket içinden VPConfigure örnek güvenlik gruplarına ve ağ ACL'lerine yönlendirmek için VPConfigure rota tablosu girişlerine bağlanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 951
Bir şirketin, bir bilgisayardan bilgi alan, yerleşik kimlik bilgilerine sahip özel bir uygulaması vardır.
Amazon RDS for MySQL Veritabanı kümesindeki veritabanı. Şirketin şunları yapması gerekiyor:
Minimum programlama çabasıyla uygulama daha güvenli. Şirket kimlik bilgileri oluşturdu
uygulama kullanıcısı için RDS for MySQL veritabanında.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Kimlik bilgilerini AWS Key Management Service'de (AWS KMS) saklayın. AWS'de anahtarlar oluşturun
KMS. Uygulamayı AWS KMS'den veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırın. Etkinleştir
otomatik anahtar döndürme

B. Kimlik bilgilerini şifrelenmiş yerel depolamada saklayın. Uygulamayı veritabanını yükleyecek şekilde yapılandırma
yerel depolamadaki kimlik bilgileri. Bir cron işi oluşturarak bir kimlik bilgileri rotasyon planı ayarlayın.

C. Kimlik bilgilerini AWS Secrets Manager'da saklayın. Uygulamayı veritabanını yükleyecek şekilde yapılandırma
Secrets Manager'dan kimlik bilgileri. Bir AWS oluşturarak kimlik bilgileri rotasyon planı ayarlayın
Sırlar Yöneticisi için Lambda işlevi.

D. Kimlik bilgilerini AWS Systems Manager Parameter Store'da saklayın. Uygulamayı şu şekilde yapılandırın:
Veritabanı kimlik bilgilerini Parametre Deposu'ndan yükleyin. Kimlik bilgileri rotasyon programını ayarlayın.
Parametre Deposu'nu kullanarak MySQL veritabanı için RDS.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kimlik bilgilerini AWS Secrets Manager'da saklayın. Uygulamayı Secrets Manager'dan veritabanı kimlik bilgilerini yükleyecek şekilde yapılandırın. Secrets Manager için bir AWS Lambda işlevi oluşturarak bir kimlik bilgileri rotasyon planı ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru 952
Bir şirket, uygulamasını sunucusuz bir çözüme taşımak istiyor. Sunucusuz çözüm ihtiyaçları
SQL kullanarak mevcut verileri ve yeni verileri analiz etmek. Şirket verileri bir Amazon'da saklıyor
S3 kovası. Verilerin kullanımda değilken şifrelenmesi ve farklı bir AWS Bölgesine kopyalanması gerekir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS KMS çoklu Bölge anahtarlarıyla sunucu tarafı şifrelemeyi kullanan yeni bir S3 klasörü oluşturun
(SSE-KMS). Bölgeler Arası Çoğaltma'yı (CRR) yapılandırın. Verileri yeni S3 klasörüne yükleyin.
Verileri sorgulamak için Amazon Athena'yı kullanın.

B. Amazon S3 yönetilen anahtarlarıyla sunucu tarafı şifrelemeyi kullanan yeni bir S3 klasörü oluşturun
(SSE-S3). Bölgeler Arası Çoğaltma'yı (CRR) yapılandırın. Verileri yeni S3 klasörüne yükleyin. Kullanım
Verileri sorgulamak için Amazon RDS.

C. Mevcut S3 klasöründe Bölgeler Arası Çoğaltmayı (CRR) yapılandırın. Sunucu tarafı kullan
Amazon S3 yönetilen anahtarlarıyla (SSE-S3) şifreleme. Verileri sorgulamak için Amazon Athena'yı kullanın.

D. Mevcut S3 klasöründe S3 Bölgeler Arası Çoğaltmayı (CRR) yapılandırın. Sunucu tarafı kullan
AWS KMS çoklu Bölge anahtarlarıyla (SSE-KMS) şifreleme. Verileri sorgulamak için Amazon RDS'yi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Mevcut S3 klasöründe Bölgeler Arası Çoğaltmayı (CRR) yapılandırın. Amazon S3 yönetilen anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın. Verileri sorgulamak için Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 953
Bir şirketin binlerce kullanıcısı olan bir web uygulaması var. Uygulama 8-10 kullanıyor
AI görüntüleri oluşturmak için kullanıcı tarafından yüklenen görüntüler. Kullanıcılar oluşturulan AI görüntülerini indirebilir
her 6 saatte bir. Şirket ayrıca kullanıcılara şunları yapma olanağı sağlayan premium bir kullanıcı seçeneğine de sahiptir:
oluşturulan AI görüntülerini istediğiniz zaman indirin.
Şirket, yılda iki kez yapay zeka modeli eğitimi yürütmek için kullanıcı tarafından yüklenen görüntüleri kullanıyor.
Şirketin görüntüleri depolamak için bir depolama çözümüne ihtiyacı var.
Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılıyor?

A. Yüklenen görüntüleri Amazon S3 Glacier Deep Archive'a taşıyın. Kullanıcı tarafından oluşturulan birinci sınıf yapay zekayı taşıyın
görüntüleri S3 Standard'a aktarın. Premium olmayan kullanıcı tarafından oluşturulan AI görüntülerini S3 Standard-Infrequent'e taşıyın
Erişim (S3 Standart-IA).

B. Yüklenen görüntüleri Amazon S3 Glacier Deep Archive'a taşıyın Oluşturulan tüm AI görüntülerini şuraya taşıyın:
S3 Buzulu Esnek Geri Alma.

C. Yüklenen görüntüleri Amazon S3 One Zone-Infrequent Access'e (S3 One Zone-IA) taşıyın. Taşı
S3 Standard'a uygun, kullanıcı tarafından oluşturulan birinci sınıf AI görüntüleri. Premium olmayan kullanıcı tarafından oluşturulan yapay zekayı taşıyın
görüntüleri S3 Standart-Nadir Erişime (S3 Standart-IA) aktarın.

D. Yüklenen görüntüleri Amazon S3 One Zone-Infrequent Access'e (S3 One Zone-IA) taşıyın. Taşı
oluşturulan tüm AI görüntüleri S3 Glacier Esnek Erişime aktarılır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Yüklenen görüntüleri Amazon S3 Glacier Deep Archive'a taşıyın. Kullanıcı tarafından oluşturulan birinci sınıf AI görüntülerini S3 Standard'a taşıyın. Premium olmayan, kullanıcı tarafından oluşturulan AI görüntülerini S3 Standart-İnfrequent Access'e (S3 Standart-IA) taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 954
Bir şirket, AWS'de makine öğrenimi (ML) modelleri geliştiriyor. Şirket gelişiyor
bağımsız mikro hizmetler olarak ML modelleri. Mikro hizmetler yaklaşık 1 GB getiriyor
Başlangıçta Amazon S3'teki verileri modelleyin ve verileri belleğe yükleyin. Kullanıcılar ML'ye erişir
Eşzamansız bir API aracılığıyla modeller. Kullanıcılar bir istek veya bir grup istek gönderebilir.
Şirket, ML modellerini yüzlerce kullanıcıya sunuyor. Modellerin kullanım şekilleri
düzensizdir. Bazı modeller günlerce, haftalarca kullanılmaz. Diğer modeller toplu olarak alınır
Aynı anda binlerce istek.
Bu gereksinimleri hangi çözüm karşılayacak?

A. API'den gelen istekleri bir Ağ Yük Dengeleyicisine (NLB) yönlendirin. ML modellerini şu şekilde dağıtın:
AWS Lambda, NLB'nin çağıracağı işlevler. Lambda işlevlerini ölçeklendirmek için otomatik ölçeklendirmeyi kullanın
NLB'nin aldığı trafiğe göre.

B. API'den gelen istekleri bir Uygulama Yük Dengeleyicisine (ALB) yönlendirin. ML modellerini dağıtma
ALB'nin çağıracağı Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak. Otomatik kullan
ALB'nin aldığı trafiğe göre ECS kümesi örneklerini ölçeklendirmek için ölçeklendirme.

C. API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin.
ML modellerini, SQS olaylarının çağıracağı AWS Lambda işlevleri olarak dağıtın. Otomatik ölçeklendirmeyi kullanarak
SQS kuyruğunun boyutuna bağlı olarak Lambda işlevleri için vCPU sayısını artırın.

D. API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin.
ML modellerini okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak dağıtın
kuyruktan. Hem küme kapasitesini hem de sayıyı ölçeklendirmek için Amazon ECS için otomatik ölçeklendirmeyi kullanın
SQS kuyruğunun boyutuna göre hizmetlerin sayısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin. ML modellerini kuyruktan okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak dağıtın. SQS kuyruğunun boyutuna göre hem küme kapasitesini hem de hizmet sayısını ölçeklendirmek için Amazon ECS için otomatik ölçeklendirmeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 955
Bir şirket, arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor
bir Uygulama Yük Dengeleyicisi (ALB). Uygulama, verileri Amazon Aurora MySQL'de saklar
Veritabanı kümesi.
Şirketin bir olağanüstü durum kurtarma (DR) çözümü oluşturması gerekiyor. Kabul edilebilir iyileşme süresi
DR çözümü için bu süre 30 dakikaya kadardır. DR çözümünün müşteriyi desteklemesi gerekmez
Birincil altyapı sağlıklı olduğunda kullanım.
Bu gereksinimleri hangi çözüm karşılayacak?

A. DR altyapısını bir ALB ve Otomatik Ölçeklendirme grubuyla ikinci bir AWS Bölgesinde dağıtın.
Otomatik Ölçeklendirme grubunun istenen kapasitesini ve maksimum kapasitesini minimum değere ayarlayın.
Aurora MySQL Veritabanı kümesini Aurora global veritabanına dönüştürün. Amazon Route 53'ü yapılandırma
ALB uç noktalarıyla aktif-pasif yük devretme için.

B. Otomatik Ölçeklendirmeyi ALUpdate ile DR altyapısını ikinci bir AWS Bölgesinde dağıtın
grup, ikinci Bölgeden EC2 bulut sunucularını içerecektir. Yapılandırmak için Amazon Route 53'ü kullanın
aktif-aktif yük devretme. Aurora MySQL Veritabanı kümesini Aurora global veritabanına dönüştürün.

C. AWS Backup'ı kullanarak Aurora MySQL DB kümesi verilerini yedekleyin. DR'yi dağıtın
ALB ile ikinci bir AWS Bölgesindeki altyapı. Otomatik Ölçeklendirme grubunu içerecek şekilde güncelleyin
İkinci Bölgeden EC2 bulut sunucuları. Aktif-aktif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın.
İkinci Bölgede bir Aurora MySQL Veritabanı kümesi oluşturun Verileri yedekten geri yükleyin.

D. AWS Backup'ı kullanarak altyapı yapılandırmasını yedekleyin. Oluşturmak için yedeği kullanın
ikinci bir AWS Bölgesinde gerekli altyapı. Otomatik Ölçeklendirme grubunun istenen kapasitesini şu şekilde ayarlayın:
sıfır. Aktif-pasif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın. Aurora MySQL DB'yi dönüştürün
Aurora global veritabanına küme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** DR altyapısını bir ALB ve Otomatik Ölçeklendirme grubuyla ikinci bir AWS Bölgesinde dağıtın. Otomatik Ölçeklendirme grubunun istenen kapasitesini ve maksimum kapasitesini minimum değere ayarlayın. Aurora MySQL Veritabanı kümesini Aurora global veritabanına dönüştürün. ALB uç noktalarıyla aktif-pasif yük devretme için Amazon Route 53'ü yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 956
Bir şirket veri işleme uygulamasını AWS Cloud'a taşıyor. Uygulama
kesintiye uğramayan birkaç kısa ömürlü toplu işi işler. Veriler her birinden sonra oluşturulur
toplu iş tamamlandı. Verilere 30 gün süreyle erişilir ve 2 yıl süreyle saklanır.
Şirket, uygulamayı AWS Cloud'da çalıştırmanın maliyetini mümkün olduğunca düşük tutmak istiyor
mümkün.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veri işleme uygulamasını Amazon EC2 Spot Bulut Sunucularına taşıyın. Verileri içinde saklayın
Amazon S3 Standardı. Verileri Amazon S3 Glacier Instant'a taşıyın. 30 gün sonra geri alma. Ayarla
2 yıl sonra verilerin silinmesi için bir son kullanma tarihi.

B. Veri işleme uygulamasını Amazon EC2 İsteğe Bağlı Bulut Sunucularına taşıyın. Verileri saklayın
Amazon S3 Glacier Anında Alma'da. Verileri 30 gün sonra S3 Glacier Deep Archive'a taşıyın.
Verileri 2 yıl sonra silmek için bir son kullanma tarihi ayarlayın.

C. Toplu işleri çalıştırmak için Amazon EC2 Spot Bulut Sunucularını dağıtın. Verileri Amazon S3'te saklayın
Standart. Verileri 30 gün sonra Amazon S3 Glacier Esnek Alma'ya taşıyın. Bir son kullanma tarihi belirleyin
2 yıl sonra verileri silmek için.

D. Toplu işleri çalıştırmak için Amazon EC2 İsteğe Bağlı Bulut Sunucularını dağıtın. Verileri Amazon S3'te saklayın
Standart. Verileri 30 gün sonra Amazon S3 Glacier Deep Archive'a taşıyın. Bir son kullanma tarihi ayarlayın
2 yıl sonra verileri silin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Toplu işleri çalıştırmak için Amazon EC2 İsteğe Bağlı Bulut Sunucularını dağıtın. Verileri Amazon S3 Standard'ta saklayın. Verileri 30 gün sonra Amazon S3 Glacier Deep Archive'a taşıyın. Verileri 2 yıl sonra silmek için bir son kullanma tarihi ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 957
Bir şirketin hibrit bir ağ mimarisi tasarlaması gerekiyor. Şirketin iş yükleri
şu anda AWS Cloud'da ve şirket içi veri merkezlerinde depolanıyor. İş yükleri gerektirir
iletişim için tek haneli gecikmeler. Şirket, AWS Transit Gateway geçişini kullanıyor
birden fazla VPC'yi bağlamak için ağ geçidi.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. Her VPC'ye bir AWS Siteden Siteye VPN bağlantısı kurun.

B. Bir AWS Direct Connect ağ geçidini, bağlı olan geçiş ağ geçidiyle ilişkilendirin.
VPC'ler.

C. AWS Direct Connect ağ geçidine bir AWS Siteden Siteye VPN bağlantısı kurun.

D. Bir AWS Direct Connect bağlantısı kurun. Doğrudan bir aktarım sanal arabirimi (VIF) oluşturma
Ağ geçidini bağlayın.

E. AWS Siteden Siteye VPN bağlantılarını, sunucuya bağlı geçiş ağ geçidiyle ilişkilendirin.
VPC'ler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Bir AWS Direct Connect ağ geçidini VPC'lere bağlı geçiş ağ geçidiyle ilişkilendirin. Bir AWS Direct Connect bağlantısı kurun. Direct Connect ağ geçidine bir geçiş sanal arabirimi (VIF) oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 958
Küresel bir e-ticaret şirketi, kritik iş yüklerini AWS'de çalıştırıyor. İş yükleri bir
Multi-AZ dağıtımı için yapılandırılmış Amazon RDS for PostgreSQL veritabanı örneği.
Müşteriler, şirket veritabanı yük devretme işlemine maruz kaldığında uygulamanın zaman aşımına uğradığını bildirdi.
Şirketin yük devretme süresini azaltmak için esnek bir çözüme ihtiyacı var.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon RDS Proxy'si oluşturun. Proxy'yi veritabanı bulut sunucusuna atayın.

B. Veritabanı bulut sunucusu için bir okuma kopyası oluşturun. Okuma trafiğini okuma kopyasına taşıyın.

C. Performance Insights'ı etkinleştirin. Zaman aşımlarını belirlemek için CPU yükünü izleyin.

D. Düzenli olarak otomatik anlık fotoğraflar çekin. Otomatik anlık görüntüleri birden fazla AWS Bölgesine kopyalayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon RDS Proxy'si oluşturun. Proxy'yi veritabanı bulut sunucusuna atayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 959
Bir şirketin, bir geliştirme AWS hesabında çalışan birden fazla Amazon RDS DB bulut sunucusu vardır. Hepsi
örneklerde onları geliştirme kaynakları olarak tanımlayan etiketler bulunur. Şirketin ihtiyacı var
geliştirme veritabanı bulut sunucularının yalnızca iş saatleri içinde belirli bir programa göre çalıştırılmasını sağlar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Durdurulması gereken RDS bulut sunucularını belirlemek için bir Amazon CloudWatch alarmı oluşturun.
RDS bulut sunucularını başlatmak ve durdurmak için bir AWS Lambda işlevi oluşturun.

B. Başlatılacak ve durdurulacak RDS bulut sunucularını belirlemek için bir AWS Trusted Advisor raporu oluşturun.
RDS bulut sunucularını başlatmak ve durdurmak için bir AWS Lambda işlevi oluşturun.

C. RDS'yi başlatmak ve durdurmak için AWS Systems Manager Durum Yöneticisi ilişkileri oluşturun
örnekler.

D. Etkinliği başlatmak ve durdurmak için AWS Lambda işlevlerini çağıran bir Amazon EventBridge kuralı oluşturun.
RDS örnekleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** RDS bulut sunucularını başlatmak ve durdurmak için AWS Lambda işlevlerini çağıran bir Amazon EventBridge kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 960
Bir tüketici anketi şirketi, belirli bir coğrafi bölgeden birkaç yıldır veri topluyor
bölge. Şirket bu verileri bir AWS Bölgesindeki bir Amazon S3 klasöründe saklıyor.
Şirket bu verileri yeni bir coğrafi bölgedeki bir pazarlama firmasıyla paylaşmaya başladı.
Şirket, firmanın AWS hesabına S3 klasörüne erişim izni verdi. Şirket istiyor
Pazarlama firması S3 grubundan veri talep ettiğinde veri aktarım maliyetlerini en aza indirmek için.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin S3 klasöründe Talep Eden Ödemeler özelliğini yapılandırın.

B. Şirketin S3 klasöründen S3 Bölgeler Arası Çoğaltma'yı (CRR) yapılandırın.
pazarlama firmasının S3 kovaları.

C. AWS Resource Access Manager'ı S3 klasörünü pazarlama firmasıyla paylaşacak şekilde yapılandırın
AWS hesabı.

D. Şirketin S3 klasörünü, S3 Akıllı Katmanlamayı kullanacak şekilde yapılandırın. S3 klasörünü şunlardan birine senkronize edin:
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

Soru 961
Bir şirket, herkese açık e-ticaret web sitesini barındırmak için AWS'yi kullanıyor. Web sitesi bir AWS Global kullanıyor
İnternet trafiği için hızlandırıcı hızlandırıcı. Küresel Hızlandırıcı hızlandırıcısı ileriye doğru
Otomatik Ölçeklendirme grubunun giriş noktası olan Application Load Balancer'a (ALB) giden trafik.
Şirket yakın zamanda web sitesinde bir DDoS saldırısı tespit etti. Şirketin bir çözüme ihtiyacı var
Gelecekteki saldırıları azaltın.
EN AZ uygulama çabasıyla bu gereksinimleri hangi çözüm karşılayacak?

A. Global Accelerator hızlandırıcının trafiği engellemesi için bir AWS WAF web ACL'si yapılandırın.
oran bazlı kurallar kullanma

B. Bir AWS Lambda işlevini güncelleyerek saldırıları engellemek amacıyla ALB ölçümlerini okumak için bir AWS Lambda işlevi yapılandırın.
VPC ağ EKL'si

C. Hıza dayalı kurallar kullanarak trafiği engellemek için ALB'de bir AWS WAF web ACL'si yapılandırın

D. Global Accelerator hızlandırıcısının önünde bir Amazon CloudFront dağıtımı yapılandırın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Hıza dayalı kurallar kullanarak trafiği engellemek için ALB'de bir AWS WAF web ACL'si yapılandırın
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 962
Bir şirket, aldığı verileri depolamak için bir Amazon DynamoDB tablosu kullanıyor
cihazlar. DynamoDB tablosu, son etkinlikleri görüntülemek için müşteriye yönelik bir web sitesini destekler.
müşteri cihazları. Şirket, tabloyu yazma ve yazma işlemleri için sağlanan aktarım hızıyla yapılandırdı.
okur.
Şirket, müşteri cihaz verilerine ilişkin performans ölçümlerini günlük olarak hesaplamak istiyor.
Çözümün, tablonun sağlanan okuma ve yazma kapasitesi üzerinde minimum etkisi olmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Hesaplamak için Amazon Athena DynamoDB bağlayıcıyla bir Amazon Athena SQL sorgusu kullanın.
yinelenen bir programa göre performans ölçümleri.

B. Hesaplamak için AWS Glue DynamoDB dışa aktarma bağlayıcısıyla bir AWS Glue işi kullanın.
yinelenen bir programa göre performans ölçümleri.

C. Yinelenen bir performans metriklerini hesaplamak için Amazon Redshift COPY komutunu kullanın.
zamanlama.

D. Performans ölçümlerini hesaplamak için Apache Hive harici tablosuyla bir Amazon EMR işi kullanın
yinelenen bir programa göre.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yinelenen bir programa göre performans ölçümlerini hesaplamak için AWS Glue DynamoDB dışa aktarma bağlayıcısıyla bir AWS Glue işi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 963
Bir çözüm mimarı, bulut mimarisini yeni bir durum bilgisi olmayan uygulama için tasarlıyor.
AWS'de dağıtılacak. Çözüm mimarı bir Amazon Machine Image (AMI) oluşturdu ve
uygulama için şablonu başlatın.
İşlenmesi gereken işlerin sayısına bağlı olarak, işleme paralel olarak yürütülmelidir
Gerektiğinde uygulama Amazon EC2 bulut sunucularını eklerken ve kaldırırken. Başvuru zorunludur
gevşek bir şekilde bağlanmış olmalıdır. İş öğeleri dayanıklı bir şekilde saklanmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İhtiyaç duyulan işleri göndermek için bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun.
işlenecek. Ölçeklendirmeyle birlikte başlatma şablonunu kullanarak Otomatik Ölçeklendirme grubu oluşturun
CPU kullanımına bağlı olarak EC2 bulut sunucularını ekleyip kaldıracak politika seti.

B. Gerekli işleri tutmak için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun.
işlenecek. Ölçeklendirme ilkesiyle birlikte başlatma şablonunu kullanarak Otomatik Ölçeklendirme grubu oluşturma
Ağ kullanımına bağlı olarak EC2 bulut sunucularını ekleyip kaldıracak şekilde ayarlayın.

C. Gerekli işleri tutmak için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun
işlenecek. Ölçeklendirme ilkesiyle birlikte başlatma şablonunu kullanarak Otomatik Ölçeklendirme grubu oluşturma
SQS kuyruğundaki öğe sayısına göre EC2 bulut sunucularını ekleyecek ve kaldıracak şekilde ayarlayın.

D. İhtiyaç duyulan işleri göndermek için bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun
işlenecek. Ölçeklendirmeyle birlikte başlatma şablonunu kullanarak Otomatik Ölçeklendirme grubu oluşturun
yayınlanan mesaj sayısına göre EC2 bulut sunucularını eklemek ve kaldırmak için ayarlanan politika
SNS konusu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İşlenmesi gereken işleri tutmak için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. SQS kuyruğundaki öğe sayısına göre EC2 bulut sunucularını eklemek ve kaldırmak için ölçeklendirme ilkesi ayarlanmış başlatma şablonunu kullanarak bir Otomatik Ölçeklendirme grubu oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 964
Küresel bir e-ticaret şirketi monolitik bir mimari kullanıyor. Şirketin bir çözüme ihtiyacı var
Artan ürün verisi hacmini yönetin. Çözüm ölçeklenebilir olmalı ve
modüler hizmet mimarisi. Şirketin yapılandırılmış veritabanı şemalarını koruması gerekiyor.
Şirketin ayrıca ürün verilerini ve ürün görsellerini depolamak için bir depolama çözümüne ihtiyacı var.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Container mimarisine alınmış bir uygulamayı dağıtmak için Otomatik Ölçeklendirme grubundaki bir Amazon EC2 bulut sunucusunu kullanın.
Web trafiğini dağıtmak için Application Load Balancer kullanın. Amazon RDS Veritabanı bulut sunucusunu kullanarak
ürün verilerini ve ürün resimlerini saklayın.

B. Mevcut monolitik uygulamayı yönetmek için AWS Lambda işlevlerini kullanın. Amazon'u kullanın
Ürün verilerini ve ürün resimlerini depolamak için DynamoDB. Amazon Basit Bildirim Hizmetini Kullanın
(Amazon SNS) Lambda işlevleri arasında olaya dayalı iletişim için.

C. Amazon Elastic Kubernetes Service'i (Amazon EKS) Amazon EC2 dağıtımıyla birlikte kullanarak
Container mimarisine alınmış bir uygulamayı dağıtın. Ürün verilerini depolamak için bir Amazon Aurora kümesi kullanın. Kullanım
İş akışlarını yönetmek için AWS Step Functions. Ürün görsellerini Amazon S3 Glacier Deep'te saklayın
Arşivle.

D. AWS Fargate'i dağıtmak için Amazon Elastic Container Service'i (Amazon ECS) kullanın.
konteynerli uygulama. Ürün verilerini depolamak için Amazon RDS'yi Multi-AZ dağıtımıyla kullanın.
Ürün görsellerini bir Amazon S3 klasöründe saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Container mimarisine alınmış bir uygulamayı dağıtmak için Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate ile birlikte kullanın. Ürün verilerini depolamak için Amazon RDS'yi Multi-AZ dağıtımıyla kullanın. Ürün görsellerini bir Amazon S3 klasöründe saklayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 965
Bir şirket, bir uygulamayı şirket içi ortamdan AWS'ye taşıyor.
uygulama hassas verileri Amazon S3'te depolayacak. Şirketin önce verileri şifrelemesi gerekiyor
verileri Amazon S3'te depolamak.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Müşteri tarafından yönetilen anahtarlarla istemci tarafı şifrelemeyi kullanarak verileri şifreleyin.

B. AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanarak verileri şifreleyin.

C. Müşteri tarafından sağlanan anahtarlarla (SSE-C) sunucu tarafı şifrelemeyi kullanarak verileri şifreleyin.

D. Amazon S3 yönetilen anahtarlarıyla istemci tarafı şifrelemeyi kullanarak verileri şifreleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Müşteri tarafından yönetilen anahtarlarla istemci tarafı şifrelemeyi kullanarak verileri şifreleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 966
Bir şirket, birden fazla ekibin kullanacağı bir Amazon EMR kümesi oluşturmak istiyor. şirket
her ekibin büyük veri iş yüklerinin yalnızca AWS hizmetlerine erişebilmesini sağlamak istiyor
Her takımın etkileşime girmesi gerekiyor. Şirket iş yüklerinin erişime sahip olmasını istemiyor
Kümenin temel EC2 bulut sunucularında Örnek Meta Veri Hizmeti Sürüm 2 (IMDSv2).
Bu gereksinimleri hangi çözüm karşılayacak?

A. Ekiplerin ihtiyaç duyduğu her AWS hizmeti için arayüz VPC uç noktalarını yapılandırın. Şunu kullanın:
büyük veri iş yüklerini göndermek için gerekli arayüz VPC uç noktaları.

B. EMR çalışma zamanı rollerini oluşturun. Kümeyi çalışma zamanı rollerini kullanacak şekilde yapılandırın. Çalışma zamanı rollerini kullanma
büyük veri iş yüklerini göndermek için.

C. Her ekip için gerekli izinlere sahip bir EC2 IAM örneği profili oluşturun. Şunu kullanın:
Büyük veri iş yüklerini göndermek için örnek profili.

D. EnableApplicationScopedIAMRole seçenek kümesine sahip bir EMR güvenlik yapılandırması oluşturun
yanlış yapmak. Büyük veri iş yüklerini göndermek için güvenlik yapılandırmasını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EMR çalışma zamanı rolleri oluşturun. Kümeyi çalışma zamanı rollerini kullanacak şekilde yapılandırın. Büyük veri iş yüklerini göndermek için çalışma zamanı rollerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 967
Bir çözüm mimarı, kullanıcıların kayıt formunu doldurmasına ve göndermesine yardımcı olan bir uygulama tasarlıyor
formlar. Çözüm mimarı, bir web uygulaması içeren iki katmanlı bir mimari kullanmayı planlıyor
sunucu katmanı ve bir çalışan katmanı.
Uygulamanın gönderilen formları hızlı bir şekilde işlemesi gerekiyor. Başvurunun işlenmesi gerekiyor
her biri tam olarak bir kez oluşur. Çözüm hiçbir verinin kaybolmamasını sağlamalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Web arasında bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğu kullanın
form verilerini depolamak ve iletmek için uygulama sunucusu katmanı ve çalışan katmanı.

B. Web uygulaması sunucusu katmanı ile sunucu katmanı arasında bir Amazon API Gateway HTTP API kullanın.
Form verilerini depolamak ve iletmek için çalışan katmanı.

C. Web arasında Amazon Simple Queue Service (Amazon SQS) standart kuyruğunu kullanın
form verilerini depolamak ve iletmek için uygulama sunucusu katmanı ve çalışan katmanı.

D. AWS Step Functions iş akışını kullanın. Web arasında senkronize bir iş akışı oluşturun
uygulama sunucusu katmanı ve form verilerini depolayan ve ileten çalışan katmanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Form verilerini depolamak ve iletmek için web uygulaması sunucusu katmanı ile çalışan katmanı arasında bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğu kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.
> - **AWS Step Functions Dağıtık İş Akışı Düzenleme:** Mikroservisleri, Lambda fonksiyonlarını ve uzun süreli toplu işleri otomatik yeniden deneme ve durum takibi ile koordine eden görsel iş akışı servisidir.

---

---

Soru 968
Bir finans şirketi, akış verilerini toplamak için şirket içi bir arama uygulaması kullanıyor
çeşitli üreticiler. Uygulama, arama ve görselleştirme için gerçek zamanlı güncellemeler sağlar
Özellikler.
Şirket, AWS'ye geçmeyi planlıyor ve AWS yerel çözümünü kullanmak istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 klasörlerine veri akışlarını almak ve işlemek için Amazon EC2 bulut sunucularını kullanın.
depolama. Verileri aramak için Amazon Athena'yı kullanın. Oluşturmak için Amazon Tarafından Yönetilen Grafana'yı kullanın
görselleştirmeler.

B. Veri akışlarını depolama amacıyla Amazon Redshift'e almak ve işlemek için Amazon EMR'yi kullanın. Kullanım
Verileri aramak için Amazon Redshift Spectrum. Görselleştirmeler oluşturmak için Amazon QuickSight'ı kullanın.

C. Verileri almak ve işlemek için Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanın
depolama için Amazon DynamoDB'ye akış sağlar. Grafik oluşturmak için Amazon CloudWatch'u kullanın
Verileri aramak ve görselleştirmek için kontrol panelleri.

D. Amazon'a veri akışlarını almak ve işlemek için Amazon Kinesis Data Streams'i kullanın
Açık Arama Hizmeti. Verileri aramak için OpenSearch Hizmetini kullanın. Amazon QuickSight'ı kullanarak
görselleştirmeler oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon OpenSearch Service'e veri akışlarını almak ve işlemek için Amazon Kinesis Data Streams'i kullanın. Verileri aramak için OpenSearch Hizmetini kullanın. Görselleştirmeler oluşturmak için Amazon QuickSight'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 969
Bir şirket şu anda Linux makinelerinde ASP.NET kullanan bir şirket içi uygulama çalıştırıyor.
Uygulama kaynak yoğundur ve müşterilere doğrudan hizmet eder.
Şirket uygulamayı .NET'e modernize etmek istiyor. Şirket işletmeyi istiyor
kapsayıcılarda uygulama ve Amazon CloudWatch ölçümlerine göre ölçeklendirme. şirket
aynı zamanda operasyonel bakım faaliyetlerine harcanan zamanı da azaltmak istiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Uygulamayı kapsayıcıya almak için AWS App2Container'ı kullanın. AWS CloudFormation kullanın
uygulamayı AWS'deki Amazon Elastic Container Service'e (Amazon ECS) dağıtmak için şablon
Fargate.

B. Uygulamayı kapsayıcıya almak için AWS App2Container'ı kullanın. AWS CloudFormation kullanın
uygulamayı Amazon Elastic Container Service'e (Amazon ECS) dağıtmak için şablon
Amazon EC2 bulut sunucuları.

C. Uygulamayı konteynerleştirmek için AWS App Runner'ı kullanın. Dağıtmak için App Runner'ı kullanın
AWS Fargate'te Amazon Elastic Container Service'e (Amazon ECS) başvuru.

D. Uygulamayı konteynerleştirmek için AWS App Runner'ı kullanın. Dağıtmak için App Runner'ı kullanın
Amazon EC2 bulut sunucularında Amazon Elastic Kubernetes Service'e (Amazon EKS) uygulama.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı kapsayıcıya almak için AWS App2Container'ı kullanın. Uygulamayı AWS Fargate'teki Amazon Elastic Container Service'e (Amazon ECS) dağıtmak için bir AWS CloudFormation şablonu kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 970
Bir şirket, AWS Cloud'da yeni bir dahili web uygulaması tasarlıyor. Yeni uygulama
birden fazla çalışanın kullanıcı adını ve parolasını bir AWS'den güvenli bir şekilde almalı ve saklamalıdır
yönetilen hizmet.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Çalışan kimlik bilgilerini AWS Systems Manager Parametre Deposu'nda saklayın. AWS'yi kullanın
Kullanıcı adlarını ve şifreleri almak için CloudFormation ve BatchGetSecretValue API'si
Parametre Deposu.

B. Çalışan kimlik bilgilerini AWS Secrets Manager'da saklayın. AWS CloudFormation ve AWS'yi kullanın
Secrets'tan kullanıcı adlarını ve şifreleri almak için BatchGetSecretValue API'sini kullanarak toplu işlem yapın
Yönetici.

C. Çalışan kimlik bilgilerini AWS Systems Manager Parametre Deposu'nda saklayın. AWS'yi kullanın
Kullanıcı adlarını almak için BatchGetSecretValue API'sine sahip CloudFormation ve AWS Batch ve
Parameter Store'dan şifreler.

D. Çalışan kimlik bilgilerini AWS Secrets Manager'da saklayın. AWS CloudFormation'ı kullanın ve
Kullanıcı adlarını ve şifreleri Secrets Manager'dan almak için BatchGetSecretValue API'si.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Çalışan kimlik bilgilerini AWS Secrets Manager'da saklayın. Kullanıcı adlarını ve şifreleri Secrets Manager'dan almak için AWS CloudFormation ve BatchGetSecretValue API'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).
> - **AWS Systems Manager Parameter Store:** Yapılandırma parametreleri, ortam değişkenleri ve şifreli dizgiler için hiyerarşik depolama sunar; standart (ücretsiz) ve gelişmiş katman seçenekleri bulunur.

---

---

Soru 971
Ap-Kuzeydoğu-1 Bölgesinde bulunan bir şirketin binlerce AWS Karakolundan oluşan bir filosu var
sunucular. Şirket, sunucuları dünya çapında uzak konumlara yerleştirdi. hepsi
sunucular düzenli olarak 100 dosyadan oluşan yeni yazılım sürümlerini indirir. Önemli var
tüm sunucular yeni yazılım sürümlerini çalıştırmadan önce gecikme süresi.
Şirketin yeni yazılım sürümleri için dağıtım gecikmesini azaltması gerekiyor.
Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. ap-northeast-1'de bir Amazon S3 klasörü oluşturun. Amazon CloudFront dağıtımını şurada kurun:
CachingDisabled önbellek politikasını içeren ap-northeast-1. S3 paketini şu şekilde yapılandırın:
kökeni. İmzalı URL'leri kullanarak yazılımı indirin.

B. ap-northeast-1'de bir Amazon S3 klasörü oluşturun. us-east-1'de ikinci bir S3 grubu oluşturun
Bölge. Paketler arasında çoğaltmayı yapılandırın. Aşağıdakileri sağlayan bir Amazon CloudFront dağıtımı kurun:
birincil köken olarak ap-northeast-1'i ve ikincil köken olarak us-east-1'i kullanır. İndir
imzalı URL'ler kullanarak yazılım.

C. ap-northeast-1'de bir Amazon S3 klasörü oluşturun. Amazon S3 Aktarım Hızlandırmasını yapılandırın.
Yazılımı S3 Transfer Acceleration uç noktasını kullanarak indirin.

D. ap-northeast-1'de bir Amazon S3 klasörü oluşturun. Bir Amazon CloudFront dağıtımı kurun.
S3 paketini başlangıç ​​noktası olarak yapılandırın. İmzalı URL'leri kullanarak yazılımı indirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** ap-northeast-1'de bir Amazon S3 klasörü oluşturun. Bir Amazon CloudFront dağıtımı kurun. S3 paketini başlangıç ​​noktası olarak yapılandırın. İmzalı URL'leri kullanarak yazılımı indirin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 972
Bir şirket şu anda Microsoft Windows'u kullanarak şirket içi bir hisse senedi alım satım uygulaması çalıştırıyor
Sunucu. Şirket, uygulamayı AWS Cloud'a taşımak istiyor.
Şirketin düşük gecikmeli erişim sağlayan yüksek kullanılabilirliğe sahip bir çözüm tasarlaması gerekiyor.
birden fazla Erişilebilirlik Alanında depolamayı engelleyin.
EN AZ uygulama çabasıyla bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon EC2'de iki Erişilebilirlik Alanını kapsayan bir Windows Server kümesi yapılandırın
örnekler. Uygulamayı her iki küme düğümüne de yükleyin. Windows Dosya Sunucusu için Amazon FSx'i kullanın
iki küme düğümü arasında paylaşılan depolama alanı olarak.

B. Amazon EC2'de iki Erişilebilirlik Alanını kapsayan bir Windows Server kümesi yapılandırın
örnekler. Uygulamayı her iki küme düğümüne de yükleyin. Amazon Elastic Block Store'u kullanın (Amazon
EC2 bulut sunucularına eklenen depolama alanı olarak EBS) Genel Amaçlı SSD (gp3) birimleri. Kurulum
Verileri bir Erişilebilirlik Alanındaki bir EBS biriminden diğerine senkronize etmek için uygulama düzeyinde çoğaltma
İkinci Erişilebilirlik Alanındaki EBS birimi.

C. Uygulamayı iki Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularına dağıtın. Bir EC2'yi yapılandırın
örneğini etkin olarak ve ikinci EC2 örneğini bekleme modunda. Şunlar için Amazon FSx kullanın:
İnternet Küçük Bilgisayarını kullanarak verilere erişmek için NetApp ONTAP Multi-AZ dosya sistemi
Sistem Arayüzü (iSCSI) protokolü.

D. Uygulamayı iki Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularına dağıtın. Bir EC2'yi yapılandırın
örneğini etkin olarak ve ikinci EC2 örneğini bekleme modunda. Amazon Elastic Block'u kullanın
EC2'ye bağlı depolama olarak Depo (Amazon EBS) Tedarik Edilen IOPS SSD (io2) birimleri
örnekler. Verileri tek bir io2 biriminde senkronize etmek için Amazon EBS düzeyinde çoğaltmayı ayarlayın
Erişilebilirlik Alanından ikinci Erişilebilirlik Alanındaki başka bir io2 birimine.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulamayı iki Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularına dağıtın. Bir EC2 örneğini etkin olarak ve ikinci EC2 örneğini bekleme modunda yapılandırın. İnternet Küçük Bilgisayar Sistemleri Arayüzü (iSCSI) protokolünü kullanarak verilere erişmek için Amazon FSx for NetApp ONTAP Multi-AZ dosya sistemini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 973
Bir şirket, internete yönelik bir Application Load Balancer içeren bir web uygulaması tasarlıyor
(ALB).
Şirketin genel internetten HTTPS web trafiği alabilmesi için ALB'ye ihtiyacı var. ALB
Amazon EC2'de barındırılan web uygulaması sunucularına yalnızca HTTPS trafiği gönderilmelidir
443 numaralı bağlantı noktasındaki örnekler. ALB, web uygulaması sunucularının sağlık kontrolünü gerçekleştirmelidir.
8443 numaralı bağlantı noktasında HTTPS.
ALB ile ilişkili güvenlik grubunun hangi konfigürasyon kombinasyonu
bu gereksinimleri karşılıyor mu? (Üç tanesini seçin.)

A. 443 numaralı bağlantı noktası için 0.0.0.0/0'dan gelen HTTPS trafiğine izin verin.

B. 443 numaralı bağlantı noktası için tüm giden trafiğin 0.0.0.0/0'a izin verin.

C. 443 numaralı bağlantı noktası için web uygulaması örneklerine giden HTTPS trafiğine izin verin.

D. Bağlantı noktası 443 için web uygulaması örneklerinden gelen HTTPS trafiğine izin verin.

E. Bağlantı noktasındaki durum denetimi için web uygulaması örneklerine HTTPS giden trafiğine izin verin
8443.

F. Bağlantı noktasındaki durum denetimi için web uygulaması örneklerinden gelen HTTPS trafiğine izin verin
8443.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C, E`
> - **Önerilen Çözüm:** 443 numaralı bağlantı noktası için 0.0.0.0/0'dan gelen HTTPS gelen trafiğine izin verin. 443 numaralı bağlantı noktası için web uygulaması örneklerine HTTPS giden trafiğine izin verin. 8443 numaralı bağlantı noktasındaki durum denetimi için web uygulaması örneklerine giden HTTPS giden trafiğine izin verin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 974
Bir şirket AWS'de bir uygulamayı barındırıyor. Uygulama kullanıcılara fotoğraf yükleme yeteneği veriyor
ve fotoğrafları bir Amazon S3 klasöründe saklayın. Şirket Amazon CloudFront'u kullanmak istiyor
ve fotoğraf dosyalarını eu-west-1 Bölgesindeki S3 klasörüne yüklemek için özel bir alan adı.
Bu gereksinimleri hangi çözüm karşılayacak? (İki tane seçin.)

A. us-east-1 Bölgesinde genel bir sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Kullanım
CloudFront'taki sertifika.

B. eu-west-1'de genel bir sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Şunu kullanın:
CloudFront'ta sertifika.

C. Amazon S3'ü CloudFront'tan yüklemelere izin verecek şekilde yapılandırın. S3 Aktarım Hızlandırmasını yapılandırın.

D. Amazon S3'ü CloudFront kaynak erişim kontrolünden (OAC) yüklemelere izin verecek şekilde yapılandırın.

E. Amazon S3'ü CloudFront'tan yüklemelere izin verecek şekilde yapılandırın. Amazon S3 web sitesini yapılandırma
uç nokta.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** us-east-1 Bölgesinde genel bir sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Sertifikayı CloudFront'ta kullanın. Amazon S3'ü CloudFront kaynak erişim kontrolünden (OAC) yüklemelere izin verecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 975
Bir hava tahmin şirketi, çeşitli sensörlerden sıcaklık değerlerini topluyor.
sürekli temel. Mevcut bir veri alma süreci, okumaları toplar ve bir araya getirir.
daha büyük Apache Parke dosyalarına okumalar. Daha sonra işlem, istemci tarafını kullanarak dosyaları şifreler.
KMS tarafından yönetilen anahtarlarla (CSE-KMS) şifreleme. Son olarak süreç, dosyaları bir
Her takvim günü için ayrı öneklere sahip Amazon S3 klasörü.
Şirket, örnek hareketli ortalamalar almak için veriler üzerinde ara sıra SQL sorguları çalıştırmak istiyor
belirli bir takvim günü için.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon Athena'yı şifrelenmiş dosyaları okuyacak şekilde yapılandırın. Veriler üzerinde SQL sorgularını doğrudan çalıştırın
Amazon S3.

B. Doğrudan Amazon S3'teki veriler üzerinde SQL sorguları çalıştırmak için Amazon S3 Select'i kullanın.

C. Şifrelenmiş dosyaları okumak için Amazon Redshift'i yapılandırın. Kırmızıya Kayma Spektrumu ve Kırmızıya Kayma'yı kullanma
Veriler üzerinde SQL sorgularını doğrudan Amazon S3'te çalıştırmak için sorgu düzenleyici v2.

D. Şifrelenmiş dosyaları okumak için Amazon EMR Serverless'ı yapılandırın. Çalıştırmak için Apache SparkSQL'i kullanın
Doğrudan Amazon S3'teki veriler üzerinde SQL sorguları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon Athena'yı şifrelenmiş dosyaları okuyacak şekilde yapılandırın. Doğrudan Amazon S3'teki veriler üzerinde SQL sorguları çalıştırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 976
Bir şirket AWS üzerinde yeni bir uygulamayı hayata geçiriyor. Şirket uygulamayı şu tarihte çalıştıracak:
birden fazla AWS Bölgesindeki birden fazla Erişilebilirlik Alanında birden fazla Amazon EC2 bulut sunucusu.
Uygulama internet üzerinden yapılabilecek. Kullanıcılar uygulamaya şuradan erişecek:
dünya çapında.
Şirket, uygulamaya erişen her kullanıcının EC2'ye gönderilmesini sağlamak istiyor
kullanıcının konumuna en yakın örnekler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Route 53 coğrafi konum yönlendirme politikasını uygulayın. İnternete yönelik bir Uygulama kullanın
Trafiği aynı Bölgedeki tüm Erişilebilirlik Alanlarına dağıtmak için Yük Dengeleyici.

B. Amazon Route 53 coğrafi yakınlık yönlendirme politikasını uygulayın. İnternete bakan bir Ağ kullanın
Trafiği aynı Bölgedeki tüm Erişilebilirlik Alanlarına dağıtmak için Yük Dengeleyici.

C. Amazon Route 53 çoklu değer yanıt yönlendirme politikasını uygulayın. İnternete bakan bir cihaz kullanın
Trafiği aynı Erişilebilirlik Alanlarına dağıtmak için Application Load Balancer
Bölge.

D. Amazon Route 53 ağırlıklı bir yönlendirme politikası uygulayın. İnternete yönelik bir Ağ Yükü kullanın
Trafiği aynı Bölgedeki tüm Erişilebilirlik Alanlarına dağıtmak için dengeleyici.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Route 53 coğrafi yakınlık yönlendirme politikasını uygulayın. Trafiği aynı Bölgedeki tüm Erişilebilirlik Alanlarına dağıtmak için internete yönelik bir Ağ Yük Dengeleyici kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 977
Bir finansal hizmetler şirketi, hassas işlemleri yönetmek için AWS'de yeni bir uygulama başlatmayı planlıyor
mali işlemler. Şirket, uygulamayı Amazon EC2 bulut sunucularına dağıtacak.
şirket veritabanı olarak Amazon RDS for MySQL'i kullanacak. Şirketin güvenlik politikaları
Verilerin kullanımda değilken ve aktarılırken şifrelenmesi gerektiğini zorunlu kılar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS KMS yönetilen anahtarlarını kullanarak Amazon RDS for MySQL için kullanımda olmayan şifrelemeyi yapılandırın.
Aktarım sırasında şifreleme için AWS Sertifika Yöneticisi (ACM) SSL/TLS sertifikalarını yapılandırın.

B. AWS KMS yönetilen anahtarlarını kullanarak Amazon RDS for MySQL için kullanımda olmayan şifrelemeyi yapılandırın.
Aktarım sırasında şifreleme için IPsec tünellerini yapılandırın.

C. Verileri Amazon RDS'de depolamadan önce üçüncü taraf uygulama düzeyinde veri şifrelemeyi uygulayın.
MySQL. Aktarım sırasında şifreleme için AWS Sertifika Yöneticisi (ACM) SSL/TLS sertifikalarını yapılandırın.

D. AWS KMS yönetilen anahtarlarını kullanarak Amazon RDS for MySQL için kullanımda olmayan şifrelemeyi yapılandırın.
Aktarılan verileri şifrelemek amacıyla özel bağlantıyı etkinleştirmek için bir VPN bağlantısı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS KMS yönetilen anahtarlarını kullanarak Amazon RDS for MySQL için kullanımda olmayan şifrelemeyi yapılandırın. Aktarım sırasında şifreleme için AWS Sertifika Yöneticisi (ACM) SSL/TLS sertifikalarını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 978
Bir şirket şirket içi Oracle veritabanını Amazon RDS for Oracle'a taşıyor
veritabanı. Şirketin yasal gereklilikleri karşılamak için verileri 90 gün boyunca saklaması gerekiyor.
Şirketin ayrıca veritabanını 14 güne kadar belirli bir zamana geri yükleyebilmesi gerekir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon RDS otomatik yedeklemeleri oluşturun. Saklama süresini 90 gün olarak ayarlayın.

B. Her gün bir Amazon RDS manuel anlık görüntüsü oluşturun. Daha eski olan manuel anlık görüntüleri silin
90 günden fazla.

C. Belirli bir noktaya geri yükleme oluşturmak için Oracle için Amazon Aurora Clone özelliğini kullanın. Sil
90 günden eski klonlar.

D. AWS Backup for Amazon'u kullanarak 90 günlük saklama süresine sahip bir yedekleme planı oluşturun
RDS.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Backup for Amazon RDS'yi kullanarak 90 günlük saklama süresine sahip bir yedekleme planı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 979
Bir şirket, kullanıcı verilerini depolamak için ilişkisel veritabanı kullanan yeni bir uygulama geliştiriyor
ve uygulama yapılandırmaları. Şirket, uygulamanın istikrarlı bir kullanıcı artışına sahip olmasını bekliyor.
Şirket, veritabanı kullanımının değişken olmasını ve ara sıra yazma işlemleriyle birlikte okuma ağırlıklı olmasını bekliyor.
Şirket, veritabanı çözümünün maliyetini optimize etmek istiyor. Şirket bir AWS kullanmak istiyor
Gerekli performansı sağlayacak yönetilen veritabanı çözümü.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Veritabanını Amazon RDS'de dağıtın. Aşağıdakilerden emin olmak için Tedarik Edilmiş IOPS SSD depolamayı kullanın:
Okuma ve yazma işlemleri için tutarlı performans.

B. Veritabanını otomatik olarak ölçeklendirmek için veritabanını Amazon Aurora Serverless'ta dağıtın
iş yükünü karşılamak için fiili kullanıma dayalı kapasite.

C. Veritabanını Amazon DynamoDB'ye dağıtın. Otomatik olarak isteğe bağlı kapasite modunu kullanın
iş yükünü karşılamak için verimi ölçeklendirin.

D. Veritabanını Amazon RDS'de dağıtın. Manyetik depolamayı kullanın ve okuma kopyalarını kullanın.
iş yükünü karşılayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İş yükünü karşılamak amacıyla veritabanı kapasitesini fiili kullanıma göre otomatik olarak ölçeklendirmek için veritabanını Amazon Aurora Serverless'ta dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 980
Bir şirket, uygulamasını bir VPC içindeki çeşitli Amazon EC2 bulut sunucularında barındırıyor. şirket
her müşterinin ilgili bilgilerini depolayacağı özel bir Amazon S3 klasörü oluşturur
Amazon S3.
Şirket, EC2 bulut sunucularında çalışan uygulamanın güvenli bir şekilde çalışmasını sağlamak istiyor
yalnızca şirketin AWS hesabına ait olan S3 klasörlerine erişin.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon S3 için VPC'ye bağlı bir ağ geçidi uç noktası oluşturun. IAM'yi güncelleyin
yalnızca uygulamanın ihtiyaç duyduğu belirli paketlere erişim sağlamak için örnek profil ilkesi.

B. Genel bir alt ağda, yalnızca erişime izin veren bir güvenlik grubuyla bir NAT ağ geçidi oluşturun.
Amazon S3. NAT Ağ Geçidini kullanmak için rota tablolarını güncelleyin.

C. IAM örneğinin VPUpdate'ine eklenen Amazon S3 için bir ağ geçidi uç noktası oluşturun
Reddet eylemi ve aşağıdaki koşul anahtarı içeren profil ilkesi:

D. Genel bir alt ağda bir NAT Ağ Geçidi oluşturun. NAT Ağ Geçidini kullanmak için rota tablolarını güncelleyin.
Bir Reddet eylemi ve aşağıdaki koşul anahtarıyla tüm paketler için paket ilkeleri atayın:

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon S3 için IAM bulut sunucusu profil politikasını VPUpdate'e bir Reddet eylemiyle ve aşağıdaki koşul anahtarıyla güncelleyen bir ağ geçidi uç noktası oluşturun:
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 981
Bir şirket, AWS'de hassas müşteri işlemlerini yürütecek bulut tabanlı bir uygulama geliştiriyor
veri. Uygulama, veritabanı için Amazon RDS'yi, nesne depolama için Amazon S3'ü ve
Sunucusuz işleme için AWS Lambda'yı çağıran S3 Olay Bildirimleri.
Şirket, kullanıcı kimlik bilgilerini yönetmek için AWS IAM Identity Center'ı kullanıyor. Gelişme,
test ve operasyon ekiplerinin Amazon RDS ve Amazon S3'e güvenli erişime ihtiyacı var.
hassas müşteri verilerinin gizliliğinin sağlanması. Çözüm aşağıdakilere uygun olmalıdır:
en az ayrıcalık ilkesi.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılıyor?

A. Tüm ekiplere erişim izni vermek için en az ayrıcalığa sahip IAM rollerini kullanın. Her ekibe IAM rolleri atayın
Amazon RDS ve S3 nesne erişimi için özel izni tanımlayan özelleştirilmiş IAM politikalarıyla
ekibin sorumluluklarına dayanmaktadır.

B. IAM Identity Center'ı bir Identity Center dizini ile etkinleştirin. İzin oluşturma ve yapılandırma
Amazon RDS ve Amazon S3'e ayrıntılı erişime sahip setler. Tüm ekipleri aşağıdaki gruplara atayın:
izin kümeleriyle özel erişime sahip olun.

C. Rol tabanlı izinlere sahip tüm ekiplerdeki her üye için ayrı IAM kullanıcıları oluşturun.
Kullanıcıya dayalı olarak her kullanıcıya RDS ve S3 erişimi için önceden tanımlanmış politikalarla IAM rollerini atayın
ihtiyaçlar. Kimlik bilgilerinin periyodik olarak değerlendirilmesi için IAM Erişim Analiz Aracı'nı uygulayın.

D. Her ekip için ayrı hesaplar oluşturmak amacıyla AWS Organizasyonlarını kullanın. Hesaplar arası uygulama
En az ayrıcalığa sahip IAM rolleri. Ekibe dayalı olarak RDS ve S3 erişimi için özel izin verin
roller ve sorumluluklar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** IAM Identity Center'ı bir Identity Center dizini ile etkinleştirin. Amazon RDS ve Amazon S3'e ayrıntılı erişimle izin kümeleri oluşturun ve yapılandırın. İzin kümeleriyle tüm ekipleri belirli erişime sahip gruplara atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 982
Bir şirketin hassas veri dosyalarını içeren bir Amazon S3 klasörü var. Şirketin bir
şirket içi veri merkezindeki sanal makinelerde çalışan uygulama. Şirket şu anda
AWS IAM Identity Center'ı kullanır.
Uygulama, S3 klasöründeki dosyalara geçici erişim gerektiriyor. Şirket hibe istiyor
uygulama S3 klasöründeki dosyalara güvenli erişim sağlar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Genel IP adresi aralığından pakete erişime izin veren bir S3 paket politikası oluşturun
Şirketin şirket içi veri merkezi.

B. IAM Identity Center'da erişim izni veren güvenlik kimlik bilgilerini edinmek için IAM Roles Anywhere'i kullanın
S3 kovasına. AWS CLI'yi kullanarak sanal makineleri rolü üstlenecek şekilde yapılandırın.

C. AWS CLI'yi sanal makineye yükleyin. AWS CLI'yi bir erişim anahtarlarıyla yapılandırın
Pakete erişimi olan IAM kullanıcısı.

D. Pakete erişim izni veren bir IAM kullanıcısı ve politikası oluşturun. Erişim anahtarını saklayın ve
AWS Secrets Manager'daki IAM kullanıcısı için gizli anahtar. Almak için uygulamayı yapılandırın
başlangıçta erişim anahtarı ve gizli anahtar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** IAM Identity Center'da S3 klasörüne erişim izni veren güvenlik kimlik bilgilerini edinmek için IAM Roles Anywhere'i kullanın. AWS CLI'yi kullanarak sanal makineleri rolü üstlenecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru 983
Bir şirket, dizin hizmetleri ve DNS dahil olmak üzere temel ağ hizmetlerini kendi bünyesinde barındırır.
şirket içi veri merkezi. Veri merkezi, AWS Direct kullanılarak AWS Cloud'a bağlanır
(DX)'i bağlayın. Hızlı, uygun maliyetli ve
bu ağ hizmetlerine tutarlı erişim.
Bir çözüm mimarı bu gereksinimleri EN AZ miktarla karşılamak için neleri uygulamalıdır?
operasyonel masraflar?

A. Her yeni hesapta bir DX bağlantısı oluşturun. Ağ trafiğini şirket içine yönlendirin
sunucular.

B. Gerekli tüm hizmetler için DX VPC'de VPC uç noktalarını yapılandırın. Ağ trafiğini şuraya yönlendirin:
şirket içi sunucular.

C. Her yeni hesap ile DX VPRoute ağ trafiği arasında bir VPN bağlantısı oluşturun
şirket içi sunuculara.

D. Hesaplar arasında AWS Transit Gateway'i yapılandırın. DX'i transit ağ geçidine atayın ve
Ağ trafiğini şirket içi sunuculara yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hesaplar arasında AWS Transit Gateway'i yapılandırın. DX'i geçiş ağ geçidine atayın ve ağ trafiğini şirket içi sunuculara yönlendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru 984
Bir şirket, ana genel web uygulamasını tek bir AWS Bölgesinde birden fazla Erişilebilirlik genelinde barındırır
Bölgeler. Uygulama bir Amazon EC2 Auto Scaling grubu ve bir Uygulama Yükü kullanır
Dengeleyici (ALB).
Bir web geliştirme ekibinin şirketin performansını iyileştirmek için maliyeti optimize edilmiş bir bilgi işlem çözümüne ihtiyacı var
Milyonlarca müşteriye küresel olarak dinamik içerik sunma yeteneği.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir Amazon CloudFront dağıtımı oluşturun. Mevcut ALB'yi kaynak olarak yapılandırın.

B. Coğrafi konuma göre ALB ve EC2 bulut sunucularına trafik sunmak için Amazon Route 53'ü kullanın
her müşterinin konumu.

C. Genel okuma erişiminin etkin olduğu bir Amazon S3 klasörü oluşturun. Web uygulamasını şuraya taşıyın:
S3 kovası. Web sitesi barındırma için S3 paketini yapılandırın.

D. İçeriği doğrudan web uygulamasından konuma sunmak için AWS Direct Connect'i kullanın.
her müşteri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Amazon CloudFront dağıtımı oluşturun. Mevcut ALB'yi kaynak olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 985
Bir şirket, kullanıcı verilerini AWS'de saklar. Veriler, en yüksek kullanım sırasında sürekli olarak kullanılır.
iş saatleri. Erişim kalıpları değişiklik gösterir; bazı veriler aylarca kullanılmaz. bir
çözüm mimarı, en yüksek düzeyde verimliliği koruyan, uygun maliyetli bir çözüm seçmelidir.
Yüksek kullanılabilirliği korurken dayanıklılık.
Hangi depolama çözümü bu gereksinimleri karşılıyor?

A. Amazon S3 Standardı

B. Amazon S3 Akıllı Katmanlama

C. Amazon S3 Glacier Derin Arşivi

D. Amazon S3 Tek Bölge-Sık Olmayan Erişim (S3 Tek Bölge-IA)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon S3 Akıllı Katmanlama
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 986
Bir şirket, Amazon EC2 Linux örneğinde çalışan bir uygulamayı test ediyor. Tek bir 500
GB Amazon Elastic Block Store (Amazon EBS) Genel Amaçlı SSO (gp2) birimi eklenmiştir
EC2 örneğine.
Şirket, uygulamayı bir Otomatik Ölçeklendirme grubundaki birden fazla EC2 örneğine dağıtacak. Hepsi
örnekler, EBS biriminde depolanan verilere erişim gerektirir. Şirketin bir ihtiyacı var
önemli değişiklikler getirmeyen, yüksek düzeyde kullanılabilir ve dayanıklı bir çözüm
uygulamanın kodu.
Bu gereksinimleri hangi çözüm karşılayacak?

A. NFS sunucu yazılımını kullanan bir EC2 bulut sunucusu sağlayın. Tek bir 500 GB gp2 EBS ekleyin
örneğin hacmi.

B. Windows Dosya Sunucusu dosya sistemi için bir Amazon FSx sağlayın. Dosya sistemini şu şekilde yapılandırın:
Tek bir Erişilebilirlik Alanında SMB dosya deposu.

C. İki adet 250 GB Tedarik Edilmiş IOPS SSD EBS birimi ile bir EC2 bulut sunucusu sağlayın.

D. Bir Amazon Elastic File System (Amazon EFS) dosya sistemi sağlayın. Dosya sistemini yapılandırma
Genel Amaçlı performans modunu kullanmak için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir Amazon Elastic File System (Amazon EFS) dosya sistemi sağlayın. Dosya sistemini Genel Amaçlı performans modunu kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 987
Bir şirket yakın zamanda müşterileri için yeni bir uygulama başlattı. Uygulama çalışır durumda
iki Erişilebilirlik Alanında birden fazla Amazon EC2 bulut sunucusu. Son kullanıcılar TCP'yi kullanarak
uygulamayla iletişim kurun.
Uygulama yüksek oranda kullanılabilir olmalı ve kullanıcı sayısına göre otomatik olarak ölçeklendirilmelidir.
artar.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. EC2 bulut sunucularının önüne bir Ağ Yük Dengeleyici ekleyin.

B. EC2 bulut sunucuları için bir Otomatik Ölçeklendirme grubu yapılandırın.

C. EC2 bulut sunucularının önüne bir Application Load Balancer ekleyin.

D. Uygulama için daha fazla EC2 bulut sunucusunu manuel olarak ekleyin.

E. EC2 bulut sunucularının önüne bir Ağ Geçidi Yük Dengeleyici ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** EC2 bulut sunucularının önüne bir Ağ Yük Dengeleyici ekleyin. EC2 bulut sunucuları için bir Otomatik Ölçeklendirme grubu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 988
Bir şirket, AWS Cloud'u kullanan yeni bir mobil uygulamanın mimarisini tasarlıyor.
şirket, hesaplarını yönetmek için AWS Kuruluşlarındaki kuruluş birimlerini (OU'lar) kullanır.
şirket, hassas değerleri kullanarak Amazon EC2 bulut sunucularını veri hassasiyetiyle etiketlemek istiyor
ve duyarsız. IAM kimlikleri, bir etiketi silemez veya kimlik bilgisi olmadan örnekler oluşturamaz.
etiketi.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Kuruluşlar'da, veri duyarlılığı etiketi anahtarını ve
gerekli değerler. EC2 bulut sunucuları için etiket değerlerini zorunlu kılın. Etiket politikasını şuraya ekleyin:
uygun kuruluş birimi.

B. Kuruluşlar'da veri hassasiyetini belirten yeni bir hizmet kontrol ilkesi (SCP) oluşturun
etiket anahtarı ve gerekli etiket değerleri. EC2 bulut sunucuları için etiket değerlerini zorunlu kılın. SCP'yi takın
uygun kuruluş birimine.

C. Bir etiket anahtarı belirtilmediğinde çalışan örnekleri reddetmek için bir etiket politikası oluşturun. Başka bir tane oluştur
kimliklerin etiketleri silmesini engelleyen etiket politikası. Etiket politikalarını uygun kuruluş birimine ekleyin.

D. Etiket anahtarı olmadığında örneklerin oluşturulmasını reddetmek için bir hizmet kontrol politikası (SCP) oluşturun.
belirtildi. Kimliklerin etiketleri silmesini önleyen başka bir SCP oluşturun. SCP'leri şuraya ekleyin:
uygun kuruluş birimi.

E. EC2 bulut sunucularının veri hassasiyeti etiketini kullanıp kullanmadığını kontrol etmek için bir AWS Config kuralı oluşturun.
belirtilen değerler. Uyumlu olmayan bir kaynak olması durumunda kaynağı silmek için bir AWS Lambda işlevi yapılandırın
kaynak bulunur.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Kuruluşlar'da veri duyarlılığı etiketi anahtarını ve gerekli değerleri belirten yeni bir etiket ilkesi oluşturun. EC2 bulut sunucuları için etiket değerlerini zorunlu kılın. Etiket politikasını uygun kuruluş birimine ekleyin. Etiket anahtarı belirtilmediğinde örneklerin oluşturulmasını reddetmek için bir hizmet kontrol ilkesi (SCP) oluşturun. Kimliklerin etiketleri silmesini önleyen başka bir SCP oluşturun. SCP'leri uygun kuruluş birimine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 989
Bir şirket, müşterisi için arka uç olan veritabanı iş yüklerini AWS'de çalıştırıyor
portallar. Şirket, PostgreSQL için Amazon RDS'de bir Multi-AZ veritabanı kümesi çalıştırıyor.
Şirketin 30 günlük bir yedek saklama politikası uygulaması gerekiyor. Şirket şu anda
hem otomatik RDS yedeklemeleri hem de manuel RDS yedeklemeleri. Şirket ikisini de korumak istiyor
30 günden daha eski olan mevcut RDS yedekleme türleri.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. AWS'yi kullanarak otomatik yedeklemeler için RDS yedekleme saklama ilkesini 30 gün olarak yapılandırın
Yedekleme. 30 günden eski manuel yedeklemeleri manuel olarak silin.

B. RDS otomatik yedeklemelerini devre dışı bırakın. Otomatik yedeklemeleri ve manuel yedeklemeleri silin.
30 günden eski. Otomatik yedeklemeler için RDS yedekleme saklama politikasını 30 gün olarak yapılandırın.

C. Otomatik yedeklemeler için RDS yedekleme saklama politikasını 30 gün olarak yapılandırın. Manuel olarak sil
30 günden eski manuel yedeklemeler.

D. RDS otomatik yedeklemelerini devre dışı bırakın. Otomatik yedeklemeleri ve manuel yedeklemeleri silin.
AWS CloudFormation kullanılarak otomatik olarak 30 günden eski. RDS yedeklemesini yapılandırma
otomatik yedeklemeler için saklama politikasını 30 güne kadar uzatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Otomatik yedeklemeler için RDS yedekleme saklama politikasını 30 gün olarak yapılandırın. 30 günden eski manuel yedeklemeleri manuel olarak silin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 990
Bir şirket eski bir uygulamayı AWS'ye geçirmeyi planlıyor. Uygulama şu anda kullanıyor
Uygulama verilerini depolamak amacıyla şirket içi depolama çözümüyle iletişim kurmak için NFS.
uygulama bunun için NFS dışında başka herhangi bir iletişim protokolünü kullanacak şekilde değiştirilemez
amaç.
Bir çözüm mimarı geçişten sonra hangi depolama çözümünü önermelidir?

A. AWS DataSync

B. Amazon Elastik Blok Mağazası (Amazon EBS)

C. Amazon Elastik Dosya Sistemi (Amazon EFS)

D. Amazon EMR Dosya Sistemi (Amazon EMRFS)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Elastik Dosya Sistemi (Amazon EFS)
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 991
Bir şirket, binlerce deniz kaplumbağasının göç şekillerini belgelemek için GPS izleyicileri kullanıyor.
İzleyiciler her 5 dakikada bir kaplumbağanın 100 metreden (91,4 metre) fazla hareket edip etmediğini kontrol ediyor.
metre). Kaplumbağa hareket etmişse takipçisi yeni koordinatları çalışan bir web uygulamasına gönderir.
bir AWS Bölgesindeki birden fazla Erişilebilirlik Alanında bulunan üç Amazon EC2 bulut sunucusunda.
Son zamanlarda web uygulaması beklenmedik miktarda veri işlerken aşırı yüklendi.
izci verileri. Olayları yeniden oynatmanın hiçbir yolu olmadığından veriler kaybedildi. Bir çözüm mimarının önlemesi gerekir
bu sorunun tekrar yaşanmasını önlemek için en az işletme masrafına sahip bir çözüme ihtiyaç duyulmaktadır.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Verileri depolamak için bir Amazon S3 klasörü oluşturun. Uygulamayı yeni verileri tarayacak şekilde yapılandırma
işlenmek üzere kovada.

B. İletilen konum koordinatlarını yönetmek için bir Amazon API Gateway uç noktası oluşturun. Bir kullanın
AWS Lambda işlevi, her öğeyi aynı anda işlemek için kullanılır.

C. Gelen verileri depolamak için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun.
Uygulamayı, işlenecek yeni mesajları yoklayacak şekilde yapılandırın.

D. İletilen konum koordinatlarını depolamak için bir Amazon DynamoDB tablosu oluşturun. Yapılandır
işlenecek yeni veriler için tabloyu sorgulamak için uygulama. Verileri kaldırmak için TTL'yi kullanın
işlendi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Gelen verileri depolamak için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Uygulamayı, işlenecek yeni mesajları yoklayacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 992
Bir şirketin yazılım geliştirme ekibinin bir Amazon RDS Multi-AZ kümesine ihtiyacı vardır. RDS
küme, şirket içinde dağıtılan bir masaüstü istemcisi için arka uç görevi görecektir. Masaüstü
istemci, RDS kümesine doğrudan bağlantı gerektirir.
Şirket, geliştirme ekibine aşağıdakileri kullanarak kümeye bağlanma yeteneği vermelidir:
Ekip ofisteyken müşteri.
Hangi çözüm gerekli bağlantıyı EN güvenli şekilde sağlar?

A. Bir VPC ve iki genel alt ağ oluşturun. Genel alt ağlarda RDS kümesini oluşturun. AWS'yi kullanın
Şirketin ofisinde müşteri ağ geçidine sahip Siteden Siteye VPN.

B. Bir VPC ve iki özel alt ağ oluşturun. Özel alt ağlarda RDS kümesini oluşturun. Kullanım
Şirketin ofisinde bir müşteri ağ geçidine sahip AWS Siteden Siteye VPN.

C. Bir VPC ve iki özel alt ağ oluşturun. Özel alt ağlarda RDS kümesini oluşturun. RDS'yi kullan
Şirketin ofis IP aralıklarının kümeye erişmesine izin vermek için güvenlik grupları.

D. Bir VPC ve iki genel alt ağ oluşturun. Genel alt ağlarda RDS kümesini oluşturun. Bir oluştur
Her geliştirici için küme kullanıcısı. Kullanıcıların kümeye erişmesine izin vermek için RDS güvenlik gruplarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir VPC ve iki özel alt ağ oluşturun. Özel alt ağlarda RDS kümesini oluşturun. AWS Siteden Siteye VPN'yi şirketin ofisindeki bir müşteri ağ geçidiyle kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 993
Bir çözüm mimarı, büyük miktarlardaki toplu işlemleri gerçekleştirecek bir uygulama yaratıyor
veri. Giriş verileri Amazon S3'te tutulacak ve çıkış verileri farklı bir yerde depolanacak
S3 kovası. İşleme için uygulama, verileri ağ üzerinden aşağıdakiler arasında aktaracaktır:
birden fazla Amazon EC2 örneği.
Çözüm mimarı genel veri aktarım maliyetlerini azaltmak için ne yapmalıdır?

A. Tüm EC2 bulut sunucularını bir Otomatik Ölçeklendirme grubuna yerleştirin.

B. Tüm EC2 bulut sunucularını aynı AWS Bölgesine yerleştirin.

C. Tüm EC2 bulut sunucularını aynı Erişilebilirlik Alanına yerleştirin.

D. Tüm EC2 bulut sunucularını birden fazla Erişilebilirlik Alanındaki özel alt ağlara yerleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tüm EC2 bulut sunucularını aynı Erişilebilirlik Alanına yerleştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 994
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

Soru 995
Bir yayın medya şirketi artan talebi karşılamak için altyapısını yeniden inşa ediyor
kullanıcıların günlük olarak tükettiği video içeriği için.
Şirketin, videolardaki bazı içerikleri engellemek için terabayt boyutunda videoları işlemesi gerekiyor. video
işlem 20 dakika kadar sürebilir.
Şirketin talebe göre ölçeklenebilecek ve uygun maliyetli kalacak bir çözüme ihtiyacı var.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Videoları işlemek için AWS Lambda işlevlerini kullanın. Video meta verilerini Amazon DynamoDB'de depolayın.
Video içeriğini Amazon S3 Intelligent-Tiering'de depolayın.

B. Uygulamak için Amazon Elastic Container Service (Amazon ECS) ve AWS Fargate'i kullanın
videoları işlemek için mikro hizmetler. Video meta verilerini Amazon Aurora'da saklayın. Video içeriğini şurada saklayın
Amazon S3 Akıllı Katmanlama.

C. Amazon EC2 bulut sunucularını Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubunda kullanın
(ALB) videoları işlemek için. Video içeriğini Amazon S3 Standard'ta saklayın. Amazon Basit Kuyruğunu Kullan
Kuyruklama ve işleme görevlerini ayırmaya yönelik hizmet (Amazon SQS).

D. Amazon Elastic Kubernetes Service'te konteynerli bir video işleme uygulaması dağıtın
(Amazon EKS) Amazon EC2'de. Video meta verilerini Amazon RDS'de tek bir Erişilebilirlik'te depolayın
Bölge. Video içeriğini Amazon S3 Glacier Deep Archive'da saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Videoları işlemek amacıyla mikro hizmetleri uygulamak için Amazon Elastic Container Service (Amazon ECS) ve AWS Fargate'i kullanın. Video meta verilerini Amazon Aurora'da saklayın. Video içeriğini Amazon S3 Intelligent-Tiering'de depolayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 996
Bir şirket, Kubernetes kümesinde şirket içi bir uygulama çalıştırıyor. Şirket yakın zamanda
milyonlarca yeni müşteri ekledi. Şirketin mevcut şirket içi altyapısı,
Çok sayıda yeni müşteriyle ilgilenin. Şirketin şirket içi ortamı taşıması gerekiyor
AWS Cloud'a başvuru.
Şirket, Amazon Elastic Kubernetes Service (Amazon EKS) kümesine geçiş yapacak.
şirket yeni sürüm için temel bilgi işlem altyapısını yönetmek istemiyor
AWS'de mimari.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bilgi işlem kapasitesi sağlamak için kendi kendini yöneten bir düğüm kullanın. Uygulamayı yeni EKS'ye dağıtın
küme.

B. Bilgi işlem kapasitesi sağlamak için yönetilen düğüm gruplarını kullanın. Uygulamayı yeni EKS'ye dağıtın
küme.

C. İşlem kapasitesi sağlamak için AWS Fargate'i kullanın. Bir Fargate profili oluşturun. Fargate profilini kullanın
uygulamayı dağıtmak için.

D. Bilgi işlem kapasitesi sağlamak için Karpenter ile yönetilen düğüm gruplarını kullanın. Uygulamayı dağıtın
yeni EKS kümesine.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İşlem kapasitesi sağlamak için AWS Fargate'i kullanın. Bir Fargate profili oluşturun. Uygulamayı dağıtmak için Fargate profilini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 997
Bir şirket, kullanıcı bilgilerini depolamak için yapılandırılmış bir veritabanı gerektiren yeni bir uygulamayı başlatıyor
profiller, uygulama ayarları ve işlem verileri. Veritabanı ölçeklenebilir olmalıdır
uygulama trafiği ve yedekleme sunmalıdır.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Açık kaynaklı yazılım kullanarak Amazon EC2 bulut sunucularına kendi kendine yönetilen bir veritabanı dağıtın.
Maliyet optimizasyonu için Spot Bulut Sunucularını kullanın. Otomatik yedeklemeleri Amazon S3'e yapılandırın.

B. Amazon RDS'yi kullanın. Genel Amaçlı SSD ile veritabanı için isteğe bağlı kapasite modunu kullanın
depolama. Otomatik yedeklemeleri 7 günlük saklama süresiyle yapılandırın.

C. Veritabanı için Amazon Aurora Serverless'ı kullanın. Sunucusuz kapasite ölçeklendirmeyi kullanın. Yapılandır
Amazon S3'e otomatik yedeklemeler.

D. Amazon EC2 bulut sunucularında kendi kendini yöneten bir NoSQL veritabanı dağıtın. Rezerve Edilmiş Bulut Sunucularını Kullan
maliyet optimizasyonu için. Otomatik yedeklemeleri doğrudan Amazon S3 Glacier Esnek'te yapılandırın
Geri alma.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Veritabanı için Amazon Aurora Serverless'ı kullanın. Sunucusuz kapasite ölçeklendirmeyi kullanın. Otomatik yedeklemeleri Amazon S3'e yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 998
Bir şirket eski web uygulamasını AWS'de çalıştırıyor. Web uygulama sunucusu bir bilgisayar üzerinde çalışır.
Bir VPC'nin genel alt ağındaki Amazon EC2 örneği. Web uygulaması sunucusu görüntüleri toplar
müşterilerden alır ve görüntü dosyalarını yerel olarak bağlı bir Amazon Elastic Block Store'da saklar
(Amazon EBS) hacmi. Görüntü dosyaları her gece bir Amazon S3 klasörüne yüklenir.
Yedekleme.
Bir çözüm mimarı, görüntü dosyalarının Amazon S3'e
genel uç nokta. Çözüm mimarının Amazon S3'e giden trafiğin kullanılmadığından emin olması gerekiyor
halka açık uç nokta.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 paketi için gerekli izinlere sahip bir ağ geçidi VPC uç noktası oluşturun.
VPC. Ağ geçidi VPC uç noktasını kullanmak için alt ağ yönlendirme tablosunu yapılandırın.

B. S3 klasörünü VPC'nin içine taşıyın. S3 klasörüne erişmek için alt ağ yönlendirme tablosunu yapılandırın
özel IP adresleri aracılığıyla.

C. VPConfigure içinde Amazon EC2 bulut sunucusu için bir Amazon S3 erişim noktası oluşturun
Amazon S3 erişim noktasını kullanarak yüklenecek web uygulaması.

D. Amazon EC2'ye sahip VPC arasında bir AWS Direct Connect bağlantısı yapılandırın
özel bir ağ yolu sağlamak için bulut sunucusu ve Amazon S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 paketi için VPC için gerekli izinlere sahip bir ağ geçidi VPC uç noktası oluşturun. Ağ geçidi VPC uç noktasını kullanmak için alt ağ yönlendirme tablosunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 999
Bir şirket, AWS'de bir e-ticaret web sitesinin prototipini oluşturuyor. Web sitesi şunlardan oluşur:
Web sunucuları için Amazon EC2 bulut sunucularının Otomatik Ölçeklendirme grubu olan Application Load Balancer,
ve Single-AZ yapılandırmasıyla çalışan bir Amazon RDS for MySQL DB bulut sunucusu.
Ürün kataloğu aramaları sırasında web sitesi yavaş yanıt veriyor. Ürün kataloğu bir
MySQL veritabanında şirketin sıklıkla güncellemediği tablolar grubu. bir çözüm
mimar, ürün kullanıldığında veritabanı bulut sunucusundaki CPU kullanımının yüksek olduğunu belirledi
katalog aramaları gerçekleşir.
Çözüm mimarı web sitesinin performansını artırmak için ne önermeli?
ürün kataloğu aramaları sırasında?

A. Ürün kataloğunu Amazon Redshift veritabanına taşıyın. Yüklemek için COPY komutunu kullanın
ürün kataloğu tabloları.

B. Ürün kataloğunu önbelleğe almak için bir Amazon ElastiCache for Redis kümesi uygulayın. Tembelliği kullan
önbelleği doldurmak için yükleniyor.

C. Ek EC2 bulut sunucularını başlatmak için Otomatik Ölçeklendirme grubuna ek bir ölçeklendirme ilkesi ekleyin
veritabanı yanıtı yavaş olduğunda.

D. Veritabanı bulut sunucusu için Multi-AZ yapılandırmasını açın. EC2 bulut sunucularını kısıtlamaya göre yapılandırma
Veritabanına gönderilen ürün kataloğu sorguları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ürün kataloğunu önbelleğe almak için bir Amazon ElastiCache for Redis kümesi uygulayın. Önbelleği doldurmak için yavaş yüklemeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
