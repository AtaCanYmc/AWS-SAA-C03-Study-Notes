# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 09

> **Soru Aralığı:** 801 - 900 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #800

Bir şirketin, şirketindeki bir VPC'de çalışacak bir AWS Lambda işlevi oluşturması gerekir.
birincil AWS hesabı. Lambda işlevinin şirketin bir sunucuda sakladığı dosyalara erişmesi gerekiyor.
Amazon Elastic File System (Amazon EFS) dosya sistemi. EFS dosya sistemi bir yerde bulunur
ikincil AWS hesabı. Şirket dosya sistemine dosya ekledikçe çözümün de ölçeklendirilmesi gerekir.
talebi karşılamak.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Birincil hesapta yeni bir EFS dosya sistemi oluşturun. İçeriği kopyalamak için AWS DataSync'i kullanın
orijinal EFS dosya sisteminden yeni EFS dosya sistemine.

B. Birincil hesaptaki VPC'ler ile birincil hesaptaki VPC'ler arasında bir VPC eşleme bağlantısı oluşturun.
ikincil hesap.

C. Yapılandırılmış bir bağlantıya sahip ikincil hesapta ikinci bir Lambda işlevi oluşturun
dosya sistemi için. İkincil hesabı çağırmak için birincil hesabın Lambda işlevini kullanın.
Lambda fonksiyonu.

D. Dosya sisteminin içeriğini Lambda katmanına taşıyın. Lambda katmanının yapılandırılması
Şirketin ikincil hesabının Lambda katmanını kullanmasına izin veren izinler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Birincil hesaptaki ve ikincil hesaptaki VPC'ler arasında bir VPC eşleme bağlantısı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 801
Bir finans şirketinin son derece hassas verileri işlemesi gerekir. Şirket, verileri bir
Amazon S3 kovası. Şirketin, verilerin aktarım sırasında ve anında şifrelendiğinden emin olması gerekir.
dinlenme. Şirketin şifreleme anahtarlarını AWS Cloud dışında yönetmesi gerekir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 klasöründeki verileri, AWS Anahtarı kullanan sunucu tarafı şifrelemeyle (SSE) şifreleyin
Yönetim Hizmeti (AWS KMS) müşteri tarafından yönetilen anahtar.

B. S3 klasöründeki verileri, AWS Anahtarı kullanan sunucu tarafı şifrelemeyle (SSE) şifreleyin
Yönetim Hizmeti (AWS KMS) AWS yönetilen anahtarı.

C. S3 klasöründeki verileri varsayılan sunucu tarafı şifrelemeyle (SSE) şifreleyin.

D. Verileri S3 klasöründe saklamadan önce verileri şirketin veri merkezinde şifreleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Verileri S3 klasöründe saklamadan önce verileri şirketin veri merkezinde şifreleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 802
Bir şirket ödeme uygulamasını AWS'de çalıştırmak istiyor. Başvuru ödeme alıyor
mobil cihazlardan gelen bildirimler. Ödeme bildirimleri gönderilmeden önce temel bir doğrulama gerektirir
ileri işlemler için gönderilir.
Arka uç işleme uygulaması uzun süre çalışıyor ve işlem ve belleğin
ayarlandı. Şirket altyapıyı yönetmek istemiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Kuyruğu bir ile entegre edin
Mobil cihazlardan ödeme bildirimlerini almaya yönelik Amazon EventBridge kuralı. Kuralı yapılandırma
ödeme bildirimlerini doğrulamak ve bildirimleri arka uç uygulamasına göndermek için. Dağıt
Amazon Elastic Kubernetes Service (Amazon EKS) Anywhere'de arka uç uygulaması. Bir oluştur
bağımsız küme.

B. Bir Amazon API Ağ Geçidi API'si oluşturun. API'yi bir AWS Step Functions durumuyla entegre edin
mobil cihazlardan ödeme bildirimleri almak için makine. Durum makinesini çağırın
ödeme bildirimlerini doğrulayın ve bildirimleri arka uç uygulamasına gönderin. Dağıt
Amazon Elastic Kubernetes Service'te (Amazon EKS) arka uç uygulaması. EKS'yi yapılandırma
kendi kendini yöneten düğümlere sahip küme.

C. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Kuyruğu bir ile entegre edin
Mobil cihazlardan ödeme bildirimlerini almaya yönelik Amazon EventBridge kuralı. Kuralı yapılandırma
ödeme bildirimlerini doğrulamak ve bildirimleri arka uç uygulamasına göndermek için. Dağıt
Amazon EC2 Spot Bulut Sunucularında arka uç uygulaması. Varsayılan bir Spot Filosu yapılandırma
tahsis stratejisi.

D. Bir Amazon API Ağ Geçidi API'si oluşturun. Ödeme almak için API'yi AWS Lambda ile entegre edin
mobil cihazlardan gelen bildirimler. Ödeme bildirimlerini doğrulamak için bir Lambda işlevini çağırın ve
bildirimleri arka uç uygulamasına gönderin. Arka uç uygulamasını Amazon'da dağıtın
Elastik Konteyner Hizmeti (Amazon ECS). Amazon ECS'yi AWS Fargate lansmanıyla yapılandırma
yazın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir Amazon API Ağ Geçidi API'si oluşturun. Mobil cihazlardan ödeme bildirimleri almak için API'yi AWS Lambda ile entegre edin. Ödeme bildirimlerini doğrulamak ve bildirimleri arka uç uygulamasına göndermek için bir Lambda işlevini çağırın. Arka uç uygulamasını Amazon Elastic Container Service (Amazon ECS) üzerinde dağıtın. Amazon ECS'yi AWS Fargate başlatma türüyle yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 803
Bir çözüm mimarı, bir şirket için kullanıcı kimlik doğrulama çözümü tasarlıyor. Çözüm mutlaka
Tutarsız coğrafi konumlardan (IP) oturum açan kullanıcılar için iki faktörlü kimlik doğrulamayı etkinleştirin
adresler veya cihazlar. Çözüm aynı zamanda milyonlarca kullanıcıyı barındıracak şekilde ölçeklendirilebilmelidir.
kullanıcılar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Kullanıcı kimlik doğrulaması için Amazon Cognito kullanıcı havuzlarını yapılandırın. Risk tabanlı uyarlanabilirliği etkinleştirin
çok faktörlü kimlik doğrulama (MFA) ile kimlik doğrulama özelliği.

B. Kullanıcı kimlik doğrulaması için Amazon Cognito kimlik havuzlarını yapılandırın. Çok faktörü etkinleştir
kimlik doğrulama (MFA).

C. Kullanıcı kimlik doğrulaması için AWS Identity and Access Management (IAM) kullanıcılarını yapılandırın. Ekle
AllowManageOwnUserMFA eylemine izin veren bir IAM politikası.

D. Kullanıcı için AWS IAM Identity Center (AWS Tek Oturum Açma) kimlik doğrulamasını yapılandırma
kimlik doğrulama. İzin kümelerini çok faktörlü kimlik doğrulama (MFA) gerektirecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kullanıcı kimlik doğrulaması için Amazon Cognito kullanıcı havuzlarını yapılandırın. Çok faktörlü kimlik doğrulama (MFA) ile risk tabanlı uyarlanabilir kimlik doğrulama özelliğini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 804
Bir şirketin Amazon S3 veri gölü vardır. Şirketin, durumu dönüştürecek bir çözüme ihtiyacı var
verileri veri gölünden alır ve verileri her gün bir veri ambarına yükler. Veriler
Deponun büyük ölçüde paralel işleme (MPP) yeteneklerine sahip olması gerekir.
Veri analistlerinin daha sonra SQL kullanarak makine öğrenimi (ML) modelleri oluşturması ve eğitmesi gerekir.
verilerle ilgili komutlar. Çözüm, mümkün olan her yerde sunucusuz AWS hizmetlerini kullanmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Verileri dönüştürmek ve verileri Amazon Redshift'e yüklemek için günlük bir Amazon EMR işi çalıştırın.
ML modellerini oluşturmak ve eğitmek için Amazon Redshift ML'yi kullanın.

B. Verileri dönüştürmek ve verileri Amazon Aurora'ya yüklemek için günlük bir Amazon EMR işi çalıştırın
Sunucusuz. ML modellerini oluşturmak ve eğitmek için Amazon Aurora ML'yi kullanın.

C. Verileri dönüştürmek ve verileri Amazon Redshift'e yüklemek için günlük bir AWS Glue işi çalıştırın
Sunucusuz. ML modellerini oluşturmak ve eğitmek için Amazon Redshift ML'yi kullanın.

D. Verileri dönüştürmek ve verileri Amazon Athena tablolarına yüklemek için günlük bir AWS Glue işi çalıştırın.
ML modellerini oluşturmak ve eğitmek için Amazon Athena ML'yi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri dönüştürmek ve verileri Amazon Redshift Serverless'a yüklemek için günlük bir AWS Glue işi çalıştırın. ML modellerini oluşturmak ve eğitmek için Amazon Redshift ML'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 805
Bir şirket, konteynerleri şirketin yerel veri merkezindeki Kubernetes ortamında çalıştırıyor.
şirket Amazon Elastic Kubernetes Service'i (Amazon EKS) ve diğer AWS'yi kullanmak istiyor
yönetilen hizmetler. Veriler yerel olarak şirketin veri merkezinde kalmalı ve saklanamaz
Uyumluluğu korumak için herhangi bir uzak sitede veya bulutta.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Yerel Bölgelerini şirketin veri merkezinde dağıtın.

B. Şirketin veri merkezinde bir AWS Kar Motosikleti kullanın.

C. Şirketin veri merkezine bir AWS Outposts rafı kurun.

D. Veri merkezine bir AWS Snowball Edge Storage Optimize Edilmiş düğüm yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Şirketin veri merkezine bir AWS Outposts rafı kurun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 806
Bir sosyal medya şirketinin veri toplayan ve işleyen iş yükleri vardır. İş yükleri şunları depolar:
şirket içi NFS depolama alanındaki veriler. Veri deposu, gereksinimleri karşılayacak kadar hızlı ölçeklenemiyor
Şirketin genişleyen iş ihtiyaçları. Şirket mevcut veri deposunu şuraya taşımak istiyor:
AWS.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Bir AWS Storage Gateway Volume Gateway kurun. Amazon S3 Yaşam Döngüsü politikasını kullanarak
verileri uygun depolama sınıfına aktarın.

B. Bir AWS Storage Gateway Amazon S3 File Gateway kurun. Amazon S3 Yaşam Döngüsü kullanın
verileri uygun depolama sınıfına geçirme politikası.

C. Amazon Elastic File System (Amazon EFS) Standart Sıklık Erişimini (Standart-IA) kullanın
depolama sınıfı. Sık olmayan erişim yaşam döngüsü ilkesini etkinleştirin.

D. Amazon Elastic File System (Amazon EFS) Tek Bölgeli Seyrek Erişimi (Bir Bölge) kullanın
Bölge-IA) depolama sınıfı. Sık olmayan erişim yaşam döngüsü ilkesini etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir AWS Storage Gateway Amazon S3 File Gateway kurun. Verileri uygun depolama sınıfına geçirmek için bir Amazon S3 Yaşam Döngüsü politikası kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 807
Bir şirket, sürekli artan bir veriyi işlemek için yüksek eş zamanlı AWS Lambda işlevlerini kullanıyor
Pazarlama etkinlikleri sırasında mesaj kuyruğundaki mesaj sayısı. Lambda fonksiyonlarının kullanımı
Mesajları işlemek için CPU yoğun kod. Şirket bilgi işlem maliyetlerini azaltmak istiyor
ve müşterileri için hizmet gecikmesini sürdürmek.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevleri için ayrılmış eşzamanlılığı yapılandırın. Ayrılan belleği azaltın
Lambda fonksiyonları.

B. Lambda işlevleri için ayrılmış eşzamanlılığı yapılandırın. Belleği buna göre artırın
AWS Compute Optimizer önerileri.

C. Lambda işlevleri için sağlanan eşzamanlılığı yapılandırın. Ayrılan belleği azaltın
Lambda fonksiyonlarına.

D. Lambda işlevleri için sağlanan eşzamanlılığı yapılandırın. Belleği buna göre artırın
AWS Compute Optimizer tavsiyelerine.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Lambda işlevleri için sağlanan eşzamanlılığı yapılandırın. Belleği AWS Compute Optimizer önerilerine göre artırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 808
Bir şirket iş yüklerini Amazon Elastic Container Service (Amazon ECS) üzerinde çalıştırıyor.
ECS görev tanımının kullandığı kapsayıcı görüntülerinin Ortak olarak taranması gerekir
Güvenlik Açıkları ve Etkilenmeler (CVE'ler). Oluşturulan yeni kapsayıcı görsellerinin de
tarandı.
İş yüklerinde EN AZ değişiklikle bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Elastic Container Registry'yi (Amazon ECR) depolamak için özel bir görüntü deposu olarak kullanın
konteyner görselleri ECR temel taraması için itme filtrelerinde taramayı belirtin.

B. Container görüntülerini bir Amazon S3 klasöründe saklayın. Görüntüleri taramak için Amazon Macie'yi kullanın.
s3:ObjectCreated:Put içeren her olay için bir Macie taraması başlatmak üzere bir S3 Olay Bildirimi kullanın
olay türü.

C. İş yüklerini Amazon Elastic Kubernetes Service'e (Amazon EKS) dağıtın. Amazon'u kullanın
Özel bir görüntü deposu olarak Elastic Container Registry (Amazon ECR). Basıldığında taramayı belirtin
ECR gelişmiş tarama için filtreler.

D. Container görüntülerini sürüm oluşturmanın etkin olduğu bir Amazon S3 klasöründe saklayın. Bir yapılandırma
Bir AWS Lambda işlevini çağırmak için s3:ObjectCreated:* olayları için S3 Olay Bildirimi. Yapılandır
Amazon Inspector taramasını başlatmak için Lambda işlevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Container görüntülerini depolamak için özel görüntü deposu olarak Amazon Elastic Container Registry'yi (Amazon ECR) kullanın. ECR temel taraması için itme filtrelerinde taramayı belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 809
Bir şirket, gün sonu satış sürecini yürütmek için bir AWS Batch işini kullanıyor. Şirketin bir ihtiyacı var
AWS Batch işi gerçekleştirildiğinde üçüncü taraf raporlama uygulamasını çağıracak sunucusuz çözüm
Başarılı. Raporlama uygulamasının kullanıcı adı ve kullanıcı adını kullanan bir HTTP API arayüzü vardır.
şifre kimlik doğrulaması.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Gelen AWS Batch işiyle eşleşecek bir Amazon EventBridge kuralı yapılandırın BAŞARILI
olaylar. Üçüncü taraf API'yi bir kullanıcı adı ve e-posta adresiyle EventBridge API hedefi olarak yapılandırın.
şifre. API hedefini EventBridge kural hedefi olarak ayarlayın.

B. Amazon EventBridge Planlayıcı'yı gelen AWS Batch işiyle eşleşecek şekilde yapılandırma BAŞARILI oldu
olaylar. Bir kullanıcı adı kullanarak üçüncü taraf API'yi çağıracak bir AWS Lambda işlevi yapılandırın ve
şifre. Lambda işlevini EventBridge kural hedefi olarak ayarlayın.

C. SUCCEEDED işi olaylarını bir Amazon API Gateway'de yayınlamak için bir AWS Batch işini yapılandırın
REST API'si. Çağırmak için API Ağ Geçidi REST API'sinde bir HTTP proxy entegrasyonu yapılandırın
Bir kullanıcı adı ve şifre kullanarak üçüncü taraf API.

D. BAŞARILI iş olaylarını bir Amazon API Gateway'de yayınlamak için bir AWS Batch işi yapılandırın
REST API'si. API Gateway REST API'sinde AWS Lambda'ya proxy entegrasyonu yapılandırma
işlevi. Lambda işlevini, bir kullanıcı adı kullanarak üçüncü taraf API'yi çağıracak şekilde yapılandırın ve
şifre.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Gelen AWS Batch işi BAŞARILI olaylarını eşleştirmek için bir Amazon EventBridge kuralı yapılandırın. Üçüncü taraf API'yi, kullanıcı adı ve parolayla EventBridge API hedefi olarak yapılandırın. API hedefini EventBridge kural hedefi olarak ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 810
Bir şirket bir satıcıdan veri toplar ve işler. Satıcı verilerini bir Amazon'da saklıyor
Satıcının kendi AWS hesabındaki MySQL veritabanı için RDS. Şirketin VPC'si
internet ağ geçidiniz, AWS Direct Connect bağlantınız veya AWS Siteden Siteye VPN'iniz varsa
bağlantı. Şirketin satıcı veritabanındaki verilere erişmesi gerekiyor.
Bu gereksinimi hangi çözüm karşılayacak?

A. Satıcıya AWS Barındırılan Bağlantı Doğrudan Bağlantı Programına kaydolmasını söyleyin. Kullanım
Şirketin VPC'sini ve satıcının VPC'sini bağlamak için VPC eşlemesi.

B. Şirketin VPC'si ile satıcının VPC'si arasında bir istemci VPN bağlantısı yapılandırın. Kullanım
Şirketin VPC'sini ve satıcının VPC'sini bağlamak için VPC eşlemesi.

C. Satıcıya bir Ağ Yük Dengeleyicisi (NLB) oluşturmasını söyleyin. NLB'yi ön tarafa yerleştirin
MySQL veritabanı için Amazon RDS. Şirketin VPC'sini ve
satıcının VPC'si.

D. Şirketin VPC'si ile satıcının VPC'sini entegre etmek için AWS Transit Gateway'i kullanın. VPC'yi kullanın
şirketin VPC'si ile satıcının VPC'sini birbirine bağlamak için eşleme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Satıcıya bir Ağ Yük Dengeleyicisi (NLB) oluşturmasını söyleyin. NLB'yi Amazon RDS for MySQL veritabanının önüne yerleştirin. Şirketin VPC'sini ve satıcının VPC'sini entegre etmek için AWS PrivateLink'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru 811
Bir şirket, görselleştirme aracı olarak Amazon Managed Grafana'yı kurmak istiyor. şirket
Amazon RDS veritabanındaki verileri tek bir veri kaynağı olarak görselleştirmek istiyor. Şirketin ihtiyacı var
Verileri internet üzerinden açığa çıkarmayacak güvenli bir çözüm.
Bu gereksinimleri hangi çözüm karşılayacak?

A. VPC olmadan Amazon Yönetilen Grafana çalışma alanı oluşturun. için genel bir uç nokta oluşturun
RDS veritabanı. Amazon Managed Grafana'da genel uç noktayı veri kaynağı olarak yapılandırın.

B. VPC'de Amazon Yönetilen Grafana çalışma alanı oluşturun. için özel bir uç nokta oluşturun.
RDS veritabanı. Amazon Managed Grafana'da özel uç noktayı veri kaynağı olarak yapılandırın.

C. VPC'siz bir Amazon Yönetilen Grafana çalışma alanı oluşturunBir AWS PrivateLink oluşturun
Amazon Managed Grafana ile Amazon RDS arasında bağlantı kurmak için uç nokta. Kurulum
Amazon Managed Grafana'da veri kaynağı olarak Amazon RDS.

D. VPC'de Amazon Yönetilen Grafana çalışma alanı oluşturun. için genel bir uç nokta oluşturun.
RDS veritabanı. Amazon Managed Grafana'da genel uç noktayı veri kaynağı olarak yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir VPC'de Amazon Yönetilen Grafana çalışma alanı oluşturun. RDS veritabanı için özel bir uç nokta oluşturun. Amazon Managed Grafana'da özel uç noktayı veri kaynağı olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 812
Bir şirket Amazon S3'te bir veri gölü barındırıyor. Veri gölü Apache Parquet'teki verileri alıyor
Çeşitli veri kaynaklarından format. Şirket, hazırlanmak için birden fazla dönüşüm adımı kullanıyor
alınan veriler. Bu adımlar anormalliklerin filtrelenmesini, verilerin standart tarihe göre normalleştirilmesini içerir
ve zaman değerleri ve analizler için toplamların oluşturulması.
Şirketin dönüştürülen verileri, veri analistlerinin erişebildiği S3 klasörlerinde depolaması gerekiyor.
Şirketin veri dönüşümü için kod gerektirmeyen önceden oluşturulmuş bir çözüme ihtiyacı var.
Çözüm, veri kökeni ve veri profili oluşturmayı sağlamalıdır. Şirketin verileri paylaşması gerekiyor
Şirket genelindeki çalışanlarla dönüşüm adımları.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Verileri dönüştürmek için bir AWS Glue Studio görsel tuvali yapılandırın. Dönüşümü paylaşın
AWS Glue işlerini kullanarak çalışanlarla birlikte adımlar atın.

B. Verileri dönüştürmek için Amazon EMR Serverless'ı yapılandırın. Dönüşüm adımlarını şununla paylaşın:
EMR Sunucusuz işleri kullanarak çalışanlar.

C. Verileri dönüştürmek için AWS Glue DataBrew'u yapılandırın. Dönüşüm adımlarını şununla paylaşın:
DataBrew tariflerini kullanarak çalışanlar.

D. Veriler için Amazon Athena tabloları oluşturun. Verileri dönüştürmek için Athena SQL sorguları yazın.
Athena SQL sorgularını çalışanlarla paylaşın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri dönüştürmek için AWS Glue DataBrew'u yapılandırın. DataBrew tariflerini kullanarak dönüşüm adımlarını çalışanlarla paylaşın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 813
Bir çözüm mimarı, bir web uygulamasını birden çok Amazon EC2 bulut sunucusunda çalıştırır.
Application Load Balancer'ın (ALB) arkasındaki bireysel hedef gruplar. Kullanıcılar şu adrese ulaşabilir:
kamuya açık bir web sitesi aracılığıyla başvuru.
Çözüm mimarı, mühendislerin web sitesinin geliştirme sürümünü kullanmasına izin vermek istiyor
uygulamanın yeni özelliklerini test etmek için belirli bir geliştirme EC2 örneğine erişin.
çözüm mimarı, mühendislere erişim sağlamak için Amazon Route 53 barındırılan bölgeyi kullanmak istiyor
geliştirme örneğine. Çözümün otomatik olarak geliştirme örneğine yönlendirilmesi gerekir
geliştirme örneği değiştirilse bile.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Geliştirme web sitesi için ALB değerine ayarlanmış bir A Kaydı oluşturun. Bir oluştur
ALB'de geliştirme web sitesi isteklerini hedef gruba ileten dinleyici kuralı
geliştirme örneğini içerir.

B. Geliştirme örneğini genel bir IP adresiyle yeniden oluşturun. için bir A Kaydı oluşturun.
Geliştirme örneğinin genel IP adresine ayarlanmış değere sahip geliştirme web sitesi.

C. Geliştirme web sitesi için ALB değerine ayarlanmış bir A Kaydı oluşturun. Bir oluştur
Geliştirme web sitesine yönelik istekleri genel IP adresine yönlendirmek için ALB'deki dinleyici kuralı
geliştirme örneğinin.

D. Tüm örnekleri aynı hedef gruba yerleştirin. Geliştirme için bir A Kaydı oluşturun
web sitesi. Değeri ALB olarak ayarlayın. ALB'de istekleri ileten bir dinleyici kuralı oluşturun.
hedef gruba geliştirme web sitesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** ALB olarak ayarlanmış değere sahip geliştirme web sitesi için bir A Kaydı oluşturun. ALB'de, geliştirme web sitesine yönelik istekleri, geliştirme örneğini içeren hedef gruba ileten bir dinleyici kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 814
Bir şirket, şirketin veri merkezindeki Kubernetes kümesinde bir konteyner uygulaması çalıştırıyor.
Uygulama, bir kullanıcıyla iletişim kurmak için Gelişmiş Mesaj Sıralama Protokolü'nü (AMQP) kullanır.
mesaj kuyruğu. Veri merkezi, şirketin genişleyen ihtiyaçlarını karşılayacak kadar hızlı ölçeklenemiyor
iş ihtiyaçları. Şirket iş yüklerini AWS'ye taşımak istiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Container uygulamasını Amazon Elastic Container Service'e (Amazon ECS) taşıyın. Kullanım
Mesajları almak için Amazon Simple Queue Service (Amazon SQS).

B. Container uygulamasını Amazon Elastic Kubernetes Service'e (Amazon EKS) taşıyın. Kullanım
Mesajları almak için Amazon MQ.

C. Uygulamayı çalıştırmak için yüksek oranda kullanılabilir Amazon EC2 bulut sunucularını kullanın. Almak için Amazon MQ'yu kullanın
mesajlar.

D. Uygulamayı çalıştırmak için AWS Lambda işlevlerini kullanın. Amazon Simple Queue Service'i kullanın
(Amazon SQS) mesajları almak için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Container uygulamasını Amazon Elastic Kubernetes Service'e (Amazon EKS) taşıyın. Mesajları almak için Amazon MQ'yu kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 815
Çevrimiçi bir oyun şirketi, platformunu Network Load'ın arkasındaki Amazon EC2 bulut sunucularında barındırıyor
Birden fazla AWS Bölgesinde Dengeleyiciler (NLB'ler). NLB'ler istekleri aşağıdaki hedeflere yönlendirebilir:
internet. Şirket, müşteri oyun deneyimini azaltarak daha iyi hale getirmek istiyor.
küresel müşteri tabanı için uçtan uca yükleme süresi.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her Bölgede mevcut NLB'lerin yerine Uygulama Yük Dengeleyicileri (ALB'ler) oluşturun.
Mevcut EC2 bulut sunucularını her Bölgedeki ALB'ler için hedef olarak kaydedin.

B. Amazon Route 53'ü, her Bölgedeki NLB'lere eşit ağırlıklı trafiği yönlendirecek şekilde yapılandırın.

C. Şirketin büyük miktarda sahip olduğu diğer Bölgelerde ek NLB'ler ve EC2 bulut sunucuları oluşturun
müşteri tabanları.

D. AWS Global Accelerator'da standart bir hızlandırıcı oluşturun. Mevcut NLB'leri şu şekilde yapılandırın:
uç noktaları hedefleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Global Accelerator'da standart bir hızlandırıcı oluşturun. Mevcut NLB'leri hedef uç noktalar olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 816
Bir şirketin birden fazla şirketten mali veri toplamak için SFTP kullanan bir şirket içi uygulaması vardır.
Satıcılar. Şirket AWS Cloud'a geçiş yapıyor. Şirket bir uygulama oluşturdu
Satıcılardan dosya yüklemek için Amazon S3 API'lerini kullanan.
Bazı satıcılar sistemlerini S3 API'lerini desteklemeyen eski uygulamalarda çalıştırır.
Satıcılar veri yüklemek için SFTP tabanlı uygulamaları kullanmaya devam etmek istiyor. Şirket istiyor
eski uygulamaları kullanan satıcıların ihtiyaçları için yönetilen hizmetleri kullanın.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri sunucudan çoğaltmak için bir AWS Database Migration Service (AWS DMS) örneği oluşturun.
Eski uygulamaları kullanan satıcıların Amazon S3'te depolanması. Satıcılara şunları sağlayın:
AWS DMS örneğine erişmek için kimlik bilgileri.

B. Eski uygulamaları kullanan satıcılar için bir AWS Transfer Ailesi uç noktası oluşturun.

C. Bir SFTP sunucusunu çalıştıracak bir Amazon EC2 örneğini yapılandırın. Eski sürümü kullanan satıcılara talimat verin
Verileri yüklemek için SFTP sunucusunu kullanacak uygulamalar.

D. Dosya yüklemek için eski uygulamaları kullanan satıcılar için bir Amazon S3 Dosya Ağ Geçidi yapılandırın
bir SMB dosya paylaşımına.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Eski uygulamaları kullanan satıcılar için bir AWS Transfer Ailesi uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 817
Bir pazarlama ekibi, yaklaşan çok sporlu bir etkinlik için bir kampanya oluşturmak istiyor. Takım var
PDF formatında son beş yılın haber raporları. Ekibin çıkarmak için bir çözüme ihtiyacı var
haber raporlarının içeriği ve hissiyatına ilişkin bilgiler. Çözüm Amazon'u kullanmalı
Haber raporlarını işlemek için metin.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Çıkarılan öngörüleri analiz için Amazon Athena'ya sağlayın. Çıkarılan öngörüleri saklayın ve
Amazon S3 klasöründeki analiz.

B. Çıkarılan öngörüleri bir Amazon DynamoDB tablosunda saklayın. Derlemek için Amazon SageMaker'ı kullanın
bir duygu modeli.

C. Çıkarılan bilgileri analiz için Amazon Comprehend'e sağlayın. Analizi bir yere kaydedin
Amazon S3 kovası.

D. Çıkarılan öngörüleri bir Amazon S3 klasöründe saklayın. Amazon QuickSight'ı kullanarak görselleştirin ve
verileri analiz edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Çıkarılan öngörüleri analiz için Amazon Comprehen'e sağlayın. Analizi bir Amazon S3 klasörüne kaydedin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 818
Bir şirketin uygulaması, birden fazla Erişilebilirlik Alanında bulunan Amazon EC2 bulut sunucularında çalışır.
Uygulamanın üçüncü taraf uygulamalardan gerçek zamanlı verileri alması gerekiyor.
Şirketin, alınan ham verileri bir Amazon'a yerleştirecek bir veri alma çözümüne ihtiyacı var
S3 kovası.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veri alımı için Amazon Kinesis veri akışları oluşturun. Amazon Kinesis Data Firehose'u oluşturun
Kinesis veri akışlarını tüketmek için dağıtım akışları. S3 klasörünü hedef olarak belirtin
teslimat akışları.

B. AWS Database Migration Service'de (AWS DMS) veritabanı taşıma görevleri oluşturun. Belirt
kaynak uç noktaları olarak EC2 örneklerinin çoğaltma örnekleri. S3 paketini şu şekilde belirtin:
hedef uç noktası. Mevcut verileri taşımak ve devam eden değişiklikleri çoğaltmak için taşıma türünü ayarlayın.

C. EC2 bulut sunucularında AWS DataSync aracılarını oluşturun ve yapılandırın. DataSync görevlerini yapılandırma
EC2 bulut sunucularından S3 klasörüne veri aktarmak için.

D. Veri alımı için uygulamaya bir AWS Direct Connect bağlantısı oluşturun. Amazon'u oluştur
Uygulamadan doğrudan PUT işlemlerini kullanmak için Kinesis Data Firehose dağıtım akışları.
Teslimat akışlarının hedefi olarak S3 paketini belirtin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veri alımı için Amazon Kinesis veri akışları oluşturun. Kinesis veri akışlarını kullanmak için Amazon Kinesis Data Firehose dağıtım akışları oluşturun. Teslimat akışlarının hedefi olarak S3 paketini belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 819
Bir şirketin uygulaması birden fazla veri kaynağından veri alıyor. Verilerin boyutu değişiklik gösteriyor
ve zamanla artması bekleniyor. Mevcut maksimum boyut 700 KB'tır. Veri hacmi
ve daha fazla veri kaynağı eklendikçe veri boyutu büyümeye devam ediyor.
Şirket, uygulamanın birincil veritabanı olarak Amazon DynamoDB'yi kullanmaya karar verir. bir
çözüm mimarının büyük veri boyutlarını ele alan bir çözüm tanımlaması gerekiyor.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. DynamoDB öğe boyutu sınırlarını aşan verileri filtrelemek için bir AWS Lambda işlevi oluşturun.
Daha büyük verileri bir Amazon DocumentDB (MongoDB uyumluluğuyla) veritabanında depolayın.

B. Büyük verileri bir Amazon S3 klasöründe nesneler olarak depolayın. DynamoDB tablosunda bir öğe oluşturun
Verinin S3 URL'sine işaret eden bir özniteliğe sahip olan.

C. Gelen tüm büyük verileri aynı bölüm anahtarına sahip öğeler koleksiyonuna bölün. Yaz
BatchWriteItem API işlemini kullanarak verileri tek bir işlemle DynamoDB tablosuna aktarın.

D. Büyük nesneleri şu şekilde sıkıştırmak için gzip sıkıştırmasını kullanan bir AWS Lambda işlevi oluşturun:
bir DynamoDB tablosuna yazılırlar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Büyük verileri bir Amazon S3 klasöründe nesneler olarak depolayın. Bir DynamoDB tablosunda, verilerin S3 URL'sine işaret eden bir özniteliğe sahip bir öğe oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 820
Bir şirket, eski bir uygulamayı şirket içi veri merkezinden AWS'ye taşıyor.
uygulama, farklı platformlarda 1 ila 20 dakika arasında çalışan yüzlerce cron işine dayanır.
gün boyunca tekrarlanan programlar.
Şirket, AWS'de cron işlerini minimum maliyetle planlamak ve yürütmek için bir çözüm istiyor
yeniden düzenleme. Çözüm, gelecekteki bir olaya yanıt olarak cron işlerini çalıştırmayı desteklemelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Cron işleri için bir kapsayıcı görüntüsü oluşturun. Bir etkinlik oluşturmak için Amazon EventBridge Planlayıcı'yı kullanın.
yinelenen program. Cron işi görevlerini AWS Lambda işlevleri olarak çalıştırın.

B. Cron işleri için bir kapsayıcı görüntüsü oluşturun. Amazon Elastic Container'da AWS Batch'i kullanın
Cron işlerini çalıştırmak için zamanlama politikasına sahip hizmet (Amazon ECS).

C. Cron işleri için bir kapsayıcı görüntüsü oluşturun. Bir etkinlik oluşturmak için Amazon EventBridge Planlayıcı'yı kullanın.
yinelenen program. AWS Fargate'te cron işi görevlerini çalıştırın.

D. Cron işleri için bir kapsayıcı görüntüsü oluşturun. AWS Step Functions'ta şunu kullanan bir iş akışı oluşturun:
Cron işlerini belirli bir zamanda çalıştırmak için bir Bekleme durumu. Cron işini çalıştırmak için Görevi Çalıştır eylemini kullanın
AWS Fargate'teki görevler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Cron işleri için bir kapsayıcı görüntüsü oluşturun. Yinelenen bir program oluşturmak için Amazon EventBridge Planlayıcı'yı kullanın. AWS Fargate'te cron işi görevlerini çalıştırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 821
Bir şirket Salesforce'u kullanıyor. Şirketin mevcut verileri ve devam eden verileri yüklemesi gerekiyor
Analiz için Salesforce'tan Amazon Redshift'e geçiş. Şirket verileri istemiyor
halka açık internet üzerinden seyahat etmek.
Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. VPC'den Salesforce'a bir VPN bağlantısı kurun. Aktarmak için AWS Glue DataBrew'u kullanın
veri.

B. VPC'den Salesforce'a bir AWS Direct Connect bağlantısı kurun. AWS Glue'yu kullanın
Verileri aktarmak için DataBrew.

C. VPC'de Salesforce'a bir AWS PrivateLink bağlantısı oluşturun. Amazon AppFlow'u kullanarak
verileri aktarın.

D. Salesforce'a bir VPC eşleme bağlantısı oluşturun. Verileri aktarmak için Amazon AppFlow'u kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** VPC'de Salesforce'a bir AWS PrivateLink bağlantısı oluşturun. Verileri aktarmak için Amazon AppFlow'u kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 822
Bir şirket yakın zamanda uygulamasını AWS'ye taşıdı. Uygulama Amazon EC2 Linux'ta çalışır
birden fazla Erişilebilirlik Alanında Otomatik Ölçeklendirme grubundaki bulut sunucuları. Uygulama depoları
EFS kullanan bir Amazon Elastic File System (Amazon EFS) dosya sistemindeki veriler
Standart-Seyrek Erişimli depolama. Uygulama şirketin dosyalarını indeksler. Endeks
Amazon RDS veritabanında depolanır.
Şirketin bazı uygulama ve hizmet değişiklikleriyle depolama maliyetlerini optimize etmesi gerekiyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Akıllı Katmanlama yaşam döngüsü politikasını kullanan bir Amazon S3 klasörü oluşturun. Tüm dosyaları şuraya kopyala:
S3 kovası. Dosyaları depolamak ve almak için Amazon S3 API'yi kullanacak şekilde uygulamayı güncelleyin.

B. Windows Dosya Sunucusu dosya paylaşımları için Amazon FSx'i dağıtın. Uygulamayı CIFS'yi kullanacak şekilde güncelleyin
Dosyaları depolamak ve almak için protokol.

C. OpenZFS dosya sistemi paylaşımları için Amazon FSx'i dağıtın. Yeniyi kullanmak için uygulamayı güncelleyin
Dosyaları depolamak ve almak için bağlama noktası.

D. S3 Glacier Esnek Alma özelliğini kullanan bir Amazon S3 klasörü oluşturun. Tüm dosyaları S3'e kopyalayın
kova. Dosyaları standart olarak depolamak ve almak için Amazon S3 API'yi kullanacak şekilde uygulamayı güncelleyin
geri almalar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Akıllı Katmanlama yaşam döngüsü politikasını kullanan bir Amazon S3 klasörü oluşturun. Tüm dosyaları S3 klasörüne kopyalayın. Dosyaları depolamak ve almak için Amazon S3 API'yi kullanacak şekilde uygulamayı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 823
Bir robotik şirketi tıbbi cerrahi için bir çözüm tasarlıyor. Robotlar gelişmiş teknolojiler kullanacak
Ortamlarını algılamak ve ameliyatları tamamlamak için sensörler, kameralar ve yapay zeka algoritmaları.
Şirketin AWS Cloud'da kesintisiz hizmet sunacak bir genel yük dengeleyiciye ihtiyacı var
arka uç hizmetleriyle iletişim. Yük dengeleyici trafiği yönlendirebilmelidir
sorgu dizelerine göre farklı hedef gruplara. Trafiğin de şifrelenmesi gerekir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Sertifika Yöneticisinden (ACM) sertifika eklenmiş bir Ağ Yük Dengeleyici kullanın.
Sorgu parametresi tabanlı yönlendirmeyi kullanın.

B. Ağ Geçidi Yük Dengeleyici kullanın. Oluşturulan bir sertifikayı AWS Identity and Access'e aktarın
Yönetim (IAM). Sertifikayı yük dengeleyiciye ekleyin. HTTP yol tabanlı yönlendirmeyi kullanın.

C. AWS Sertifika Yöneticisinden bir sertifika eklenmiş bir Application Load Balancer kullanın
(ACM). Sorgu parametresi tabanlı yönlendirmeyi kullanın.

D. Ağ Yük Dengeleyici kullanın. Oluşturulan bir sertifikayı AWS Identity and Access'e aktarın
Yönetim (IAM). Sertifikayı yük dengeleyiciye ekleyin. Sorgu parametresi tabanlı kullan
yönlendirme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Sertifika Yöneticisinden (ACM) bir sertifika eklenmiş bir Application Load Balancer kullanın. Sorgu parametresi tabanlı yönlendirmeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru 824
Bir şirketin tek bir Amazon EC2 bulut sunucusunda çalışan bir uygulaması var. Uygulamanın kullandığı
aynı EC2 örneğinde çalışan bir MySQL veritabanı. Şirketin yüksek düzeyde kullanılabilirliğe ihtiyacı var
Artan trafiğin üstesinden gelmek için otomatik olarak ölçeklenebilir bir çözüm.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamayı, bir Uygulamanın arkasındaki Otomatik Ölçeklendirme grubunda çalışan EC2 bulut sunucularına dağıtın
Yük Dengeleyici. Birden fazla MySQL uyumlu düğüme sahip bir Amazon Redshift kümesi oluşturun.

B. Uygulamayı, bir hedef grup olarak yapılandırılmış EC2 bulut sunucularına dağıtın.
Uygulama Yük Dengeleyici. Birden çok örneğe sahip bir Amazon RDS for MySQL kümesi oluşturun.

C. Uygulamayı, bir Uygulamanın arkasındaki Otomatik Ölçeklendirme grubunda çalışan EC2 bulut sunucularına dağıtın
Yük Dengeleyici. Veritabanı katmanı için bir Amazon Aurora Sunucusuz MySQL kümesi oluşturun.

D. Uygulamayı, bir hedef grup olarak yapılandırılmış EC2 bulut sunucularına dağıtın.
Uygulama Yük Dengeleyici. MySQL'i kullanan bir Amazon ElastiCache for Redis kümesi oluşturun
bağlayıcı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulamayı, Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubunda çalışan EC2 bulut sunucularına dağıtın. Veritabanı katmanı için bir Amazon Aurora Sunucusuz MySQL kümesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 825
Bir şirket, verileri bir Amazon S3 klasörüne taşımayı planlıyor. Veriler şu adreste şifrelenmelidir:
S3 kovasının içinde dinlenin. Şifreleme anahtarının her yıl otomatik olarak döndürülmesi gerekir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri S3 klasörüne taşıyın. Amazon S3 yönetilen anahtarlarıyla sunucu tarafı şifrelemeyi kullanın
(SSE-S3). SSE-S3 şifreleme anahtarlarının yerleşik anahtar döndürme davranışını kullanın.

B. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Etkinleştir
otomatik anahtar döndürme. Müşteriyi kullanmak için S3 grubunun varsayılan şifreleme davranışını ayarlayın
yönetilen KMS anahtarı. Verileri S3 klasörüne taşıyın.

C. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. S3'ü ayarlayın
Müşteri tarafından yönetilen KMS anahtarını kullanmak için paketin varsayılan şifreleme davranışı. Verileri şuraya taşı:
S3 kovası. KMS anahtarını her yıl manuel olarak döndürün.

D. Verileri şifrelemek için müşteri anahtarı materyalini kullanın. Verileri S3 klasörüne taşıyın. Bir oluştur
Anahtar malzemesi olmayan AWS Key Management Service (AWS KMS) anahtarı. Müşteri anahtarını içe aktarın
materyali KMS anahtarına girin. Otomatik anahtar yönlendirmeyi etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Otomatik anahtar yönlendirmeyi etkinleştirin. Müşteri tarafından yönetilen KMS anahtarını kullanmak için S3 paketinin varsayılan şifreleme davranışını ayarlayın. Verileri S3 klasörüne taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 826
Bir şirket, uygulamaları şirket içi bir Microsoft Active Directory'den geçiriyor.
şirket AWS'yi yönetiyor. Şirket, uygulamaları birden fazla AWS hesabında dağıtıyor.
Şirket, hesapları merkezi olarak yönetmek için AWS Organizasyonlarını kullanıyor.
Şirketin güvenlik ekibinin şirketin tüm AWS'sinde tek oturum açma çözümüne ihtiyacı var
hesaplar. Şirketin şirket içi kullanıcıları ve grupları yönetmeye devam etmesi gerekir
Aktif Dizin.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Microsoft Active için AWS Directory Service'te Enterprise Edition Active Directory oluşturun
Dizin. Active Directory'yi AWS IAM Identity Center'ın kimlik kaynağı olacak şekilde yapılandırın.

B. AWS IAM Identity Center'ı etkinleştirin. Bağlanmak için iki yönlü bir orman güven ilişkisi yapılandırın
AWS Directory'yi kullanarak şirketin IAM Identity Center ile kendi kendini yöneten Active Directory'si
Microsoft Active Directory için hizmet.

C. AWS Directory Service'i kullanın ve şirketin yöneticileriyle iki yönlü bir güven ilişkisi oluşturun.
kendi kendini yöneten Active Directory.

D. Amazon EC2'de bir kimlik sağlayıcı (IdP) dağıtın. IdP'yi bir kimlik kaynağı olarak bağlayın
AWS IAM Kimlik Merkezi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS IAM Identity Center'ı etkinleştirin. Microsoft Active Directory için AWS Directory Service'i kullanarak şirketin kendi kendine yönetilen Active Directory'sini IAM Identity Center'a bağlamak için iki yönlü bir orman güven ilişkisi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 827
Bir şirket, uygulamasını Amazon Aurora PostgreSQL Serverless v2'de dağıtmayı planlıyor
küme. Uygulama büyük miktarda trafik alacaktır. Şirket optimize etmek istiyor
Uygulama üzerindeki yük arttıkça kümenin depolama performansı artar.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Kümeyi Aurora Standart depolama yapılandırmasını kullanacak şekilde yapılandırın.

B. Küme depolama türünü Tedarik Edilen IOPS olarak yapılandırın.

C. Küme depolama türünü Genel Amaçlı olarak yapılandırın.

D. Kümeyi, Aurora I/O için Optimize Edilmiş depolama yapılandırmasını kullanacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kümeyi Aurora G/Ç için Optimize Edilmiş depolama yapılandırmasını kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 828
AWS'de çalışan bir finansal hizmetler şirketi, güvenlik kontrollerini gereksinimleri karşılayacak şekilde tasarladı
endüstri standartları. Endüstri standartları arasında Ulusal Standartlar Enstitüsü ve
Teknoloji (NIST) ve Ödeme Kartı Endüstrisi Veri Güvenliği Standardı (PCI DSS).
Şirketin üçüncü taraf denetçilerinin tasarlanan kontrollerin uygulandığına dair kanıta ihtiyacı var
uygulanmakta ve doğru şekilde çalışmaktadır. Şirketin tek bir platformda yüzlerce AWS hesabı var
AWS Kuruluşlarında tek kuruluş. Şirketin mevcut durumunu izlemesi gerekiyor
hesaplar arasındaki kontroller.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir hesabı, Amazon Inspector'ın yetkilendirdiği yönetici hesabı olarak atayın.
Kuruluşların yönetim hesabı. Keşfetmek ve taramak için Inspector'ı Kuruluşlarla entegre edin
tüm AWS hesaplarındaki kaynaklar. NIST ve PCI DSS için Inspector endüstri standartlarını etkinleştirin.

B. Bir hesabı Amazon GuardDuty tarafından yetkilendirilmiş yönetici hesabı olarak atayın.
Kuruluşların yönetim hesabı. Belirlenen GuardDuty yönetici hesabında etkinleştirin
GuardDuty tüm üye hesaplarını korur. NIST için GuardDuty endüstri standartlarını etkinleştirin ve
PCI DSS.

C. Kuruluşun yönetim hesabında bir AWS CloudTrail kuruluş takibi yapılandırın.
Bir hesabı uyumluluk hesabı olarak atayın. NIST için CloudTrail güvenlik standartlarını etkinleştirin
ve uyumluluk hesabında PCI DSS.

D. Bir hesabı, AWS Security Hub tarafından atanan yönetici hesabı olarak atayın.
Kuruluşların yönetim hesabı. Belirlenen Security Hub yönetici hesabında,
tüm üye hesapları için Security Hub'ı etkinleştirin. NIST ve PCI için Security Hub standartlarını etkinleştirin
DSS.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir hesabı, Kuruluşun yönetim hesabından AWS Security Hub tarafından atanan yönetici hesabı olarak atayın. Belirlenen Security Hub yönetici hesabında, tüm üye hesapları için Security Hub'ı etkinleştirin. NIST ve PCI DSS için Security Hub standartlarını etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 829
Bir şirket, veri gölü depolama platformu olarak Amazon S3 klasörünü kullanıyor. S3 paketi şunları içerir:
birden fazla ekip ve yüzlerce kişi tarafından rastgele erişilen çok büyük miktarda veri
uygulamalar. Şirket, S3 depolama maliyetlerini azaltmak ve anında
Sık erişilen nesnelerin kullanılabilirliği.
Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. Nesneleri S3 Akıllı Katmanlama depolama sınıfına geçirmek için bir S3 Yaşam Döngüsü kuralı oluşturun.

B. Nesneleri Amazon S3 Glacier'da saklayın. Uygulamalara erişim sağlamak için S3 Select'i kullanın.
veri.

C. Otomatik olarak geçiş yapmak üzere S3 Yaşam Döngüsü kuralları oluşturmak için S3 depolama sınıfı analizinden elde edilen verileri kullanın
S3 Standart-Seyrek Erişim (S3 Standart-IA) depolama sınıfına itiraz eder.

D. S3 Standard-Infrequent Access (S3 Standard-IA) depolama sınıfına geçiş nesneleri. Oluştur
nesneleri S3 Standard depolama sınıfına geçirmek için bir AWS Lambda işlevi
bir uygulama tarafından erişilir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Nesneleri S3 Akıllı Katmanlama depolama sınıfına geçirmek için bir S3 Yaşam Döngüsü kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 830
Bir şirketin 5 TB veri seti vardır. Veri kümeleri 1 milyon kullanıcı profilinden ve 10 milyon
bağlantılar. Kullanıcı profilleri çoktan çoğa ilişkiler şeklinde bağlantılara sahiptir. şirket
beş seviyeye kadar karşılıklı bağlantıları bulmak için performans açısından verimli bir yola ihtiyaç duyar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veri kümelerini depolamak için bir Amazon S3 klasörü kullanın. SQL JOIN gerçekleştirmek için Amazon Athena'yı kullanın
Bağlantıları bulmak için sorgular.

B. Veri kümelerini kenarları ve köşeleri ile depolamak için Amazon Neptune'ü kullanın. Bulmak için verileri sorgulayın
bağlantılar.

C. Veri kümelerini depolamak için bir Amazon S3 klasörü kullanın. Görselleştirmek için Amazon QuickSight'ı kullanın
bağlantılar.

D. Veri kümelerini birden çok tabloyla depolamak için Amazon RDS'yi kullanın. Bulmak için SQL JOIN sorguları gerçekleştirin
bağlantılar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kenarları ve köşeleri olan veri kümelerini depolamak için Amazon Neptune'ü kullanın. Bağlantıları bulmak için verileri sorgulayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 831
Bir şirketin şirket içi ortamı ile AWS arasında güvenli bir bağlantıya ihtiyacı vardır. Bu
bağlantının yüksek bant genişliğine ihtiyacı yoktur ve az miktarda trafiği idare eder.
Bağlantı hızlı bir şekilde kurulmalıdır.
Bu tür bir bağlantı kurmanın EN uygun maliyetli yöntemi nedir?

A. Bir istemci VPN'i uygulayın.

B. AWS Direct Connect'i uygulayın.

C. Amazon EC2'de bir savunma ana bilgisayarı uygulayın.

D. Bir AWS Siteden Siteye VPN bağlantısı uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir AWS Siteden Siteye VPN bağlantısı uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 832
Bir şirketin şirket içi bir SFTP dosya aktarım çözümü var. Şirket bölgeye taşınıyor
Amazon S3'ü kullanarak dosya aktarımı çözümünü ölçeklendirmek ve maliyetleri optimize etmek için AWS Cloud.
Şirketin çalışanları kimlik bilgilerini şirket içi Microsoft Active Directory için kullanacak
(AD) yeni çözüme erişmek için. Şirket mevcut kimlik doğrulamasını ve dosyayı saklamak istiyor
erişim mekanizmaları.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bir S3 Dosya Ağ Geçidini yapılandırın. Dosya ağ geçidinde mevcut SMB dosya paylaşımlarını kullanan SMB dosya paylaşımları oluşturun.
Kimlik doğrulaması için Active Directory.

B. Bir SFTP çözümü çalıştırmak için Amazon EC2 bulut sunucularıyla bir Otomatik Ölçeklendirme grubu yapılandırın.
Grubu %60 CPU kullanımına ölçeklendirecek şekilde yapılandırın.

C. SFTP uç noktalarına sahip bir AWS Transfer Ailesi sunucusu oluşturun. AWS Dizini'ni seçin
Kimlik sağlayıcı olarak hizmet seçeneği. Şirket içi Active'e bağlanmak için AD Bağlayıcısını kullanın
Dizin.

D. Bir AWS Transfer Ailesi SFTP uç noktası oluşturun. Uç noktayı AWS'yi kullanacak şekilde yapılandırma
Mevcut Active Directory'ye bağlanmak için kimlik sağlayıcı olarak Dizin Hizmeti seçeneği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** SFTP uç noktalarına sahip bir AWS Transfer Ailesi sunucusu oluşturun. Kimlik sağlayıcı olarak AWS Directory Service seçeneğini seçin. Şirket içi Active Directory'ye bağlanmak için AD Bağlayıcısını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 833
Bir şirket olaya dayalı bir sipariş işleme sistemi tasarlıyor. Her sipariş birden fazla gerektirir
Sipariş oluşturulduktan sonraki doğrulama adımları. Her birini bağımsız bir AWS Lambda işlevi gerçekleştirir
doğrulama adımı. Her doğrulama adımı diğer doğrulama adımlarından bağımsızdır. Bireysel
doğrulama adımları, sipariş olayı bilgilerinin yalnızca bir alt kümesine ihtiyaç duyar.
Şirket, her doğrulama adımı Lambda fonksiyonunun yalnızca
fonksiyonun gerektirdiği sipariş olayından gelen bilgiler. Siparişin bileşenleri
işleme sistemi gelecekteki iş değişikliklerine uyum sağlamak için gevşek bir şekilde bağlanmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her doğrulama adımı için bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun.
Sipariş verilerini her doğrulama adımının formatına dönüştürmek için yeni bir Lambda işlevi oluşturun
mesajların uygun SQS kuyruklarında yayınlanmasını gerektirir. Her doğrulamaya abone olun
Lambda fonksiyonunu karşılık gelen SQS kuyruğuna adımlayın.

B. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Doğrulamaya abone olun
Lambda işlevlerini SNS konusuna taşıyın. Yalnızca gerekli olanı göndermek için mesaj gövdesi filtrelemeyi kullanın
Abone olunan her Lambda işlevine veri.

C. Bir Amazon EventBridge olay veri yolu oluşturun. Her doğrulama adımı için bir olay kuralı oluşturun.
Giriş transformatörünü, her hedef doğrulama adımına yalnızca gerekli verileri gönderecek şekilde yapılandırın
Lambda fonksiyonu.

D. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. Yeni bir Lambda oluştur
SQS kuyruğuna abone olma ve sipariş verilerini her birinin belirlediği formata dönüştürme işlevi
doğrulama adımı gerektirir. Eş zamanlı çağrıları gerçekleştirmek için yeni Lambda işlevini kullanın.
doğrulama adımı Lambda ayrı iş parçacıklarında paralel olarak çalışır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon EventBridge olay veri yolu oluşturun. Her doğrulama adımı için bir olay kuralı oluşturun. Giriş transformatörünü, her hedef doğrulama adımı Lambda işlevine yalnızca gerekli verileri gönderecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 834
Bir şirket üç katmanlı bir uygulamayı AWS'ye taşıyor. Uygulama MySQL gerektiriyor
veritabanı. Geçmişte, uygulama kullanıcıları oluştururken uygulama performansının düşük olduğunu bildiriyordu.
yeni girişler. Bu performans sorunları, kullanıcıların farklı gerçek zamanlı veriler oluşturmasından kaynaklanıyordu.
mesai saatleri içerisinde uygulamadan gelen raporlar.
Uygulama AWS'ye taşındığında hangi çözüm performansı artıracak?

A. Verileri, tedarik edilen kapasiteye sahip bir Amazon DynamoDB tablosuna aktarın. Yeniden düzenleme
Raporlar için DynamoDB'yi kullanacak uygulama.

B. Veritabanını, işlem açısından optimize edilmiş bir Amazon EC2 bulut sunucusunda oluşturun. Bilgi işlem sağlayın
kaynaklar şirket içi veritabanını aşıyor.

C. Birden fazla okuma replikasına sahip bir Amazon Aurora MySQL Multi-AZ Veritabanı kümesi oluşturun. Yapılandır
Raporlar için okuyucu uç noktasını kullanacak uygulama.

D. Amazon Aurora MySQL Multi-AZ Veritabanı kümesi oluşturun. Uygulamayı kullanacak şekilde yapılandırın
Raporlar için uç nokta olarak kümenin yedek örneğini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birden fazla okuma replikasına sahip bir Amazon Aurora MySQL Multi-AZ Veritabanı kümesi oluşturun. Uygulamayı, raporlar için okuyucu uç noktasını kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 835
Bir şirket, AWS kullanarak güvenli şirket içi ağını AWS Cloud'a genişletiyor
Doğrudan Bağlantı bağlantısı. Şirket içi ağın doğrudan internet erişimi yoktur. bir
şirket içi ağda çalışan uygulamanın bir Amazon S3 klasörü kullanması gerekir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Genel bir sanal arayüz (VIF) oluşturun. AWS trafiğini genel VIF üzerinden yönlendirin.

B. Bir VPC ve bir NAT ağ geçidi oluşturun. AWS trafiğini şirket içi ağdan
NAT ağ geçidi.

C. Bir VPC ve Amazon S3 arayüzü uç noktası oluşturun. AWS trafiğini şu adresten yönlendirin:
şirket içi ağdan S3 arayüzü uç noktasına.

D. Şirket içi ağ ile Direct Connect arasında bir VPC eşleme bağlantısı oluşturun. Rota
Eşleme bağlantısı üzerinden AWS trafiği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir VPC ve Amazon S3 arayüzü uç noktası oluşturun. AWS trafiğini şirket içi ağdan S3 arayüzü uç noktasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 836
Bir şirket, web sitesine Amazon EC2 bulut sunucularından oluşan Otomatik Ölçeklendirme grubunu kullanarak hizmet vermektedir.
tek AWS Bölgesi. Web sitesi bir veritabanı gerektirmez.
Şirket genişliyor ve şirketin mühendislik ekibi web sitesini
ikinci Bölge. Şirket, trafiği her iki Bölgeye de dağıtmak istiyor
büyüme ve felaket kurtarma amaçları için. Çözüm, bir Bölgeden gelen trafiğe hizmet vermemelidir.
bu web sitesi sağlıksız.
Şirket bu gereksinimleri karşılamak için hangi politikayı veya kaynağı kullanmalıdır?

A. Amazon Route 53 basit yönlendirme politikası

B. Amazon Route 53 çoklu değer yanıt yönlendirme politikası

C. EC2 örneğini belirten bir hedef gruba sahip, bir Bölgedeki Application Load Balancer
Her iki Bölgeden kimlikler

D. IP adreslerini belirten bir hedef gruba sahip, bir Bölgedeki Application Load Balancer
Her iki Bölgedeki EC2 örneklerinin

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Route 53 çok değerli yanıt yönlendirme politikası
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 837
Bir şirket, uygulamalarını Amazon Elastic tarafından desteklenen Amazon EC2 bulut sunucularında çalıştırıyor
Blok Mağazası (Amazon EBS). EC2 bulut sunucuları en son Amazon Linux sürümünü çalıştırır.
Şirket çalışanları depolama ve depolama yaparken uygulamalarda kullanılabilirlik sorunları yaşanıyor
25 GB veya daha büyük dosyaları alın. Şirketin gerektirmeyen bir çözüme ihtiyacı var
EC2 bulut sunucuları arasında dosya aktarımı yapacak şirket. Dosyalar birçok EC2'de mevcut olmalıdır
bulut sunucularında ve birden fazla Erişilebilirlik Alanında.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Tüm dosyaları bir Amazon S3 klasörüne taşıyın. Çalışanlara dosyalara erişmeleri talimatını verin.
S3 kovası.

B. Mevcut EBS biriminin anlık görüntüsünü alın. Anlık görüntüyü EBS birimi olarak
EC2 örnekleri. Çalışanlara EC2 bulut sunucularındaki dosyalara erişme talimatını verin.

C. Tüm EC2 bulut sunucularına bir Amazon Elastic File System (Amazon EFS) dosya sistemi ekleyin.
Çalışanlara EC2 bulut sunucularındaki dosyalara erişme talimatını verin.

D. EC2 bulut sunucularından bir Amazon Machine Image (AMI) oluşturun. Yeni EC2'yi yapılandırın
AMI'den bir örnek depolama birimi kullanan örnekler. Çalışanlara erişmeleri talimatını verin
EC2 örneklerinden dosyalar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tüm EC2 bulut sunucularına bir Amazon Elastic File System (Amazon EFS) dosya sistemi ekleyin. Çalışanlara EC2 bulut sunucularındaki dosyalara erişme talimatını verin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 838
Bir şirket, Amazon EC2'de Amazon RDS tarafından desteklenen son derece hassas bir uygulama çalıştırıyor
veritabanı. Uyumluluk düzenlemeleri, kişisel olarak tanımlanabilir tüm bilgilerin (PII)
dinlenme sırasında şifrelenir.
Bir çözüm mimarı bu gereksinimi EN AZ ile karşılamak için hangi çözümü önermelidir?
Altyapıda ne kadar değişiklik var?

A. Sertifika oluşturmak için AWS Sertifika Yöneticisini dağıtın. Şifrelemek için sertifikaları kullanın
veritabanı hacmi.

B. AWS CloudHSM'yi dağıtın, şifreleme anahtarları oluşturun ve anahtarları veritabanını şifrelemek için kullanın
hacimler.

C. Şifrelemek için AWS Key Management Service (AWS KMS) anahtarlarını kullanarak SSL şifrelemesini yapılandırın
veritabanı hacimleri.

D. Amazon Elastic Block Store (Amazon EBS) şifrelemesini ve Amazon RDS şifrelemesini yapılandırma
Bulut sunucusu ve veritabanı birimlerini şifrelemek için AWS Key Management Service (AWS KMS) anahtarlarıyla.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bulut sunucusunu ve veritabanı birimlerini şifrelemek için Amazon Elastic Block Store (Amazon EBS) şifrelemesini ve Amazon RDS şifrelemesini AWS Key Management Service (AWS KMS) anahtarlarıyla yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 839
Bir şirket, bir VPC'deki özel alt ağlarda AWS Lambda işlevini çalıştırıyor. Alt ağların bir
Amazon EC2 NAT örneği aracılığıyla internete varsayılan rota. Lambda işlevi
giriş verilerini işler ve çıktısını bir nesne olarak Amazon S3'e kaydeder.
Nesneyi yüklemeye çalışırken Lambda işlevi zaman zaman zaman aşımına uğruyor.
NAT örneğinin ağındaki doymuş trafik. Şirket Amazon S3'e erişmek istiyor
interneti dolaşmadan.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 NAT örneğini AWS tarafından yönetilen bir NAT ağ geçidiyle değiştirin.

B. VPC'deki EC2 NAT örneğinin boyutunu, ağ için optimize edilmiş bir örnek türüne yükseltin.

C. VP'de Amazon S3 için bir ağ geçidi uç noktası sağlayınAlt ağların rota tablolarını güncelleyin
buna göre.

D. Bir transit ağ geçidi sağlayın. Toplu taşıma ağ geçidi eklerini, özel alt ağlara yerleştirin.
Lambda işlevi çalışıyor.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** VP'de Amazon S3 için bir ağ geçidi uç noktası sağlayınAlt ağların rota tablolarını buna göre güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 840
Dünyanın her yerinde muhabirleri bulunan bir haber şirketi, yayın sistemini AWS'de barındırıyor.
Muhabirler yayın sistemine canlı yayın göndermektedir. Muhabirler kendi yazılımlarını kullanıyor
Gerçek Zamanlı Mesajlaşma Protokolü (RTMP) aracılığıyla canlı yayınlar göndermek için telefonlar.
Bir çözüm mimarı, muhabirlere en yüksek mesajı gönderme olanağı veren bir çözüm tasarlamalıdır.
kaliteli akışlar. Çözüm, yayına geri hızlandırılmış TCP bağlantıları sağlamalıdır
sistem.
Çözüm mimarı bu gereksinimleri karşılamak için ne kullanmalıdır?

A. Amazon CloudFront

B. AWS Küresel Hızlandırıcı

C. AWS İstemci VPN'i

D. Amazon EC2 bulut sunucuları ve AWS Elastic IP adresleri

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Küresel Hızlandırıcı
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 841
Bir şirket çalıştırmak için Amazon EC2 bulut sunucularını ve Amazon Elastic Block Store'u (Amazon EBS) kullanıyor
kendi kendini yöneten veritabanı. Şirketin tüm EBS hacimlerine yayılmış 350 TB verisi var.
Şirket günlük EBS anlık görüntülerini alıyor ve anlık görüntüleri 1 ay boyunca saklıyor. Günlük
değişim oranı EBS hacimlerinin %5'idir.
Yeni düzenlemeler nedeniyle şirketin aylık anlık görüntüleri 7 yıl boyunca saklaması gerekiyor.
Şirketin yeni düzenlemelere uymak ve güvenliği sağlamak için yedekleme stratejisini değiştirmesi gerekiyor
Bu veriler minimum idari çabayla kullanılabilir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Günlük anlık görüntüyü 1 ay boyunca EBS anlık yedek standart katmanında tutun. Aylık kopyalayın
7 yıllık saklama süresiyle Amazon S3 Glacier Deep Archive'ın anlık görüntüsü.

B. Mevcut EBS anlık görüntü politikasına devam edin. Aylık anlık görüntüyü taşımak için yeni bir politika ekleyin
7 yıllık saklama süresiyle Amazon EBS Snapshots Arşivi'ne.

C. Günlük anlık görüntüyü 1 ay boyunca EBS anlık görüntü standart katmanında tutun. Aylık tutmak
7 yıl boyunca standart katmanda anlık görüntü. Artımlı anlık görüntüleri kullanın.

D. Günlük anlık görüntüyü EBS anlık görüntü standart katmanında tutun. Almak için EBS doğrudan API'lerini kullanın
her ay tüm EBS hacimlerinin anlık görüntüleri. Anlık görüntüleri bir Amazon S3 klasöründe saklayın.
7 yıl boyunca Seyrek Erişim katmanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Mevcut EBS anlık görüntü politikasıyla devam edin. Aylık anlık yedekleri 7 yıllık saklama süresiyle Amazon EBS Snapshots Arşivi'ne taşımak için yeni bir politika ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 842
Bir şirket, kalıcı verileri depolayan çeşitli Amazon EC2 bulut sunucularında bir uygulama çalıştırıyor
Amazon Elastic File System (Amazon EFS) dosya sistemi. Şirketin bunu çoğaltması gerekiyor
AWS yönetilen hizmet çözümünü kullanarak verileri başka bir AWS Bölgesine aktarın.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Verileri başka bir EFS dosya sistemine kopyalamak için EFS'den EFS'ye yedekleme çözümünü kullanın.
Bölge.

B. Verileri EFS dosya sisteminden bir Amazon S3 klasörüne kopyalamak için her gece bir komut dosyası çalıştırın. S3'ü etkinleştir
S3 klasöründe Bölgeler Arası Çoğaltma.

C. Başka bir Bölgede VPC oluşturun. Bölgeler arası bir VPC eşi oluşturun. Her gece bir rsync çalıştırın
verileri orijinal Bölgeden yeni Bölgeye kopyalayın.

D. Günlük yedekleme alan ve bunu çoğaltan bir kurala sahip bir yedekleme planı oluşturmak için AWS Backup'ı kullanın
başka bir Bölgeye. EFS dosya sistemi kaynağını yedekleme planına atayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Günlük yedekleme alan ve bunu başka bir Bölgeye kopyalayan bir kurala sahip bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. EFS dosya sistemi kaynağını yedekleme planına atayın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 843
Bir e-ticaret şirketi şirket içi iş yükünü AWS Cloud'a taşıyor. iş yükü
şu anda bir web uygulaması ve depolama için bir arka uç Microsoft SQL veritabanından oluşmaktadır.
Şirket, tanıtım etkinliği sırasında yüksek miktarda müşteri bekliyor. Yeni
AWS Cloud'daki altyapının yüksek oranda erişilebilir ve ölçeklenebilir olması gerekir.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Web uygulamasını arkadaki iki Erişilebilirlik Alanındaki iki Amazon EC2 bulut sunucusuna taşıyın
Uygulama Yük Dengeleyici. Veritabanını Microsoft SQL Server için Amazon RDS'ye taşıyın
her iki Erişilebilirlik Alanında da okuma replikalarıyla.

B. Web uygulamasını Otomatik Ölçeklendirme grubunda çalışan bir Amazon EC2 bulut sunucusuna taşıyın
Application Load Balancer'ın arkasındaki iki Erişilebilirlik Alanında. Veritabanını ikiye taşıyın
Veritabanı çoğaltmayla ayrı AWS Bölgelerindeki EC2 bulut sunucuları.

C. Web uygulamasını, bir Otomatik Ölçeklendirme grubunda çalışan Amazon EC2 bulut sunucularına taşıyın
Application Load Balancer'ın arkasında iki Erişilebilirlik Alanı. Veritabanını Amazon RDS'ye taşıyın
Multi-AZ dağıtımıyla.

D. Web uygulamasını üç Erişilebilirlik Alanındaki üç Amazon EC2 bulut sunucusuna taşıyın
Application Load Balancer'ın arkasında. Veritabanını üç farklı EC2 örneğine taşıyın
Erişilebilirlik Alanları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Web uygulamasını, Application Load Balancer arkasında iki Erişilebilirlik Alanında Otomatik Ölçeklendirme grubunda çalışan Amazon EC2 bulut sunucularına taşıyın. Veritabanını Multi-AZ dağıtımıyla Amazon RDS'ye taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 844
Bir şirketin her gün yüzlerce dosya oluşturan şirket içi bir iş uygulaması vardır.
Bu dosyalar bir SMB dosya paylaşımında depolanır ve düşük gecikmeli bir bağlantı gerektirir.
uygulama sunucuları. Yeni bir şirket politikası, uygulama tarafından oluşturulan tüm dosyaların kopyalanması gerektiğini belirtiyor
AWS'ye. AWS'ye zaten bir VPN bağlantısı var.
Uygulama geliştirme ekibinin gerekli kodu yapacak zamanı yok
uygulamayı AWS'ye taşımak için değişiklikler.
Uygulamanın dosyaları kopyalamasına izin vermek için bir çözüm mimarı hangi hizmeti önermelidir?
AWS'mi?

A. Amazon Elastik Dosya Sistemi (Amazon EFS)

B. Windows Dosya Sunucusu için Amazon FSx

C. AWS Kartopu

D. AWS Depolama Ağ Geçidi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Depolama Ağ Geçidi
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 845
Bir şirketin 15 çalışanı vardır. Şirket, çalışanların başlangıç tarihlerini bir Amazon'da saklıyor
DynamoDB tablosu. Şirket, her çalışana aynı gün bir e-posta mesajı göndermek istiyor
çalışanın çalışma yıldönümü.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. DynamoDB tablosunu tarayan ve Amazon Simple Notification Service'ı kullanan bir komut dosyası oluşturun
(Amazon SNS) gerektiğinde çalışanlara e-posta mesajları göndermek. Bunu çalıştırmak için bir cron işi kullanın
bir Amazon EC2 örneğinde her gün komut dosyası oluşturun.

B. DynamoDB tablosunu tarayan ve Amazon Simple Queue Service'i kullanan bir komut dosyası oluşturun
(Amazon SQS) gerektiğinde çalışanlara e-posta mesajları göndermek. Bunu çalıştırmak için bir cron işi kullanın
bir Amazon EC2 örneğinde her gün komut dosyası oluşturun.

C. DynamoDB tablosunu tarayan ve Amazon Simple'ı kullanan bir AWS Lambda işlevi oluşturun
Gerektiğinde çalışanlara e-posta mesajları göndermek için Bildirim Hizmeti (Amazon SNS).
Bu Lambda işlevini her gün çalışacak şekilde planlayın.

D. DynamoDB tablosunu tarayan ve Amazon Simple'ı kullanan bir AWS Lambda işlevi oluşturun
Gerektiğinde çalışanlara e-posta mesajları göndermek için Kuyruk Hizmeti (Amazon SQS). Program
Bu Lambda işlevi her gün çalışacak.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** DynamoDB tablosunu tarayan ve gerektiğinde çalışanlara e-posta mesajları göndermek için Amazon Simple Notification Service'ı (Amazon SNS) kullanan bir AWS Lambda işlevi oluşturun. Bu Lambda işlevini her gün çalışacak şekilde planlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 846
Bir şirketin uygulaması, Otomatik Ölçeklendirme grubu içindeki Amazon EC2 bulut sunucularında çalışıyor
Elastik Yük Dengeleme (ELB) yük dengeleyicinin arkasında. Uygulamanın geçmişine dayanarak,
Şirket her yıl tatil sırasında trafikte bir artış olacağını öngörüyor. Bir çözüm mimarının yapması gerekenler
Otomatik Ölçeklendirme grubunun kapasitesini proaktif olarak artırmasını sağlayacak bir strateji tasarlayın
Uygulama kullanıcıları üzerindeki performans etkisini en aza indirin.
Bu gereksinimleri hangi çözüm karşılayacak?

A. CPU kullanımı sırasında EC2 bulut sunucularının ölçeğini artırmak için bir Amazon CloudWatch alarmı oluşturun
%90'ı aşıyor.

B. Otomatik Ölçeklendirme grubunun ölçeğini beklenenden önce büyütmek için yinelenen bir planlanmış eylem oluşturun
Talebin en yüksek olduğu dönem.

C. Otomatik Ölçeklendirme grubundaki minimum ve maksimum EC2 bulut sunucusu sayısını artırın
talebin en yüksek olduğu dönemde.

D. Uyarı göndermek için bir Amazon Simple Notification Service (Amazon SNS) bildirimi yapılandırın
otomatik ölçeklendirme olduğunda:EC2_INSTANCE_LAUNCH olayları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Talebin beklenen yoğun dönemden önce Otomatik Ölçeklendirme grubunun ölçeğini büyütmek için yinelenen, planlanmış bir eylem oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 847
Bir şirket, veri katmanı olarak PostgreSQL veritabanları için Amazon RDS'yi kullanıyor. Şirket şunları yapmalıdır:
veritabanları için şifre rotasyonu uygulayın.
Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılar?

A. Parolayı AWS Secrets Manager'da saklayın. Gizli dizide otomatik rotasyonu etkinleştirin.

B. Parolayı AWS Systems Manager Parametre Deposu'nda saklayın. Otomatik döndürmeyi etkinleştir
parametre.

C. Parolayı AWS Systems Manager Parametre Deposu'nda saklayın. Bir AWS Lambda yazın
parolayı döndüren işlev.

D. Parolayı AWS Key Management Service'te (AWS KMS) saklayın. Otomatik döndürmeyi etkinleştir
AWS KMS anahtarında.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Parolayı AWS Secrets Manager'da saklayın. Gizli dizide otomatik rotasyonu etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru 848
Bir şirket, uygulamasını Oracle Database Enterprise Edition'da çalıştırıyor. Şirketin ihtiyacı var
uygulamayı ve veritabanını AWS'ye taşıyın. Şirket, Kendini Getir seçeneğini kullanabilir
AWS'ye geçiş sırasında lisans (BYOL) modeli. Uygulama üçüncü taraf veritabanını kullanıyor
ayrıcalıklı erişim gerektiren özellikler.
Bir çözüm mimarı, veritabanı geçişi için bir çözüm tasarlamalıdır.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Yerel araçları kullanarak veritabanını Amazon RDS for Oracle'a taşıyın. Üçüncü tarafı değiştirin
AWS Lambda'nın özellikleri.

B. Yerel araçları kullanarak veritabanını Amazon RDS Custom for Oracle'a taşıyın. Özelleştirin
üçüncü taraf özelliklerini desteklemek için yeni veritabanı ayarları.

C. AWS Database Migration Service'i (AWS) kullanarak veritabanını Amazon DynamoDB'ye taşıyın
DMS). Üçüncü taraf özelliklerini desteklemek için yeni veritabanı ayarlarını özelleştirin.

D. AWS Database Migration'ı kullanarak veritabanını Amazon RDS for PostgreSQL'e geçirin
Hizmet (AWS DMS). Üçüncü tarafa bağımlılığı ortadan kaldırmak için uygulama kodunu yeniden yazın
Özellikler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yerel araçları kullanarak veritabanını Amazon RDS Custom for Oracle'a taşıyın. Üçüncü taraf özelliklerini desteklemek için yeni veritabanı ayarlarını özelleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 849
Büyük bir uluslararası üniversite, tüm bilgi işlem hizmetlerini AWS Cloud'a dağıttı. Bunlar
hizmetler Amazon EC2, Amazon RDS ve Amazon DynamoDB'yi içerir. Şu anda üniversite
altyapısını yedeklemek için birçok özel komut dosyasına güvenir. Ancak üniversite istiyor
AWS yerelini kullanarak yönetimi merkezileştirin ve veri yedeklemelerini mümkün olduğunca otomatikleştirin
seçenekler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Storage Gateway bant ağ geçidi sanal bandıyla üçüncü taraf yedekleme yazılımını kullanın
kütüphane.

B. Kullanılan hizmetlere ilişkin tüm yedeklemeleri yapılandırmak ve izlemek için AWS Backup'ı kullanın.

C. Yaşam döngüsü yönetimini bir ağdaki tüm veri kaynaklarının anlık görüntülerini alacak şekilde ayarlamak için AWS Config'i kullanın.
zamanlama.

D. Yapılandırmayı ve izlemeyi yönetmek için AWS Systems Manager State Manager'ı kullanın.
yedekleme görevleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kullanılan hizmetlere ilişkin tüm yedeklemeleri yapılandırmak ve izlemek için AWS Backup'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 850
Bir şirket, politikaları belirlemek ve uygulamak için BT altyapısının bir haritasını oluşturmak istiyor
Güvenlik riski oluşturan kaynaklar. Şirketin güvenlik ekibi verileri sorgulayabilmelidir.
BT altyapısının haritasını çıkarın ve güvenlik risklerini hızlı bir şekilde tanımlayın.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri depolamak için Amazon RDS'yi kullanın. Güvenlik risklerini belirlemek amacıyla verileri sorgulamak için SQL kullanın.

B. Verileri depolamak için Amazon Neptune'ü kullanın. Güvenliği belirlemek amacıyla verileri sorgulamak için SPARQL kullanın
riskler.

C. Verileri depolamak için Amazon Redshift'i kullanın. Güvenlik risklerini belirlemek amacıyla verileri sorgulamak için SQL kullanın.

D. Verileri depolamak için Amazon DynamoDB'yi kullanın. Güvenliği belirlemek amacıyla verileri sorgulamak için PartiQL'i kullanın
riskler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri depolamak için Amazon Neptune'ü kullanın. Güvenlik risklerini belirlemek amacıyla verileri sorgulamak için SPARQL'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 851
Büyük bir şirket, dünya çapındaki geliştiricilerine ayrı, sınırlı boyutta,
PostgreSQL veritabanlarını geliştirme amacıyla yönetir. Veritabanları düşük hacimli olacaktır.
Geliştiriciler veritabanlarına yalnızca aktif olarak çalışırken ihtiyaç duyarlar.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

C. Geliştiricilere ayrı Amazon Aurora bulut sunucularını başlatma olanağı verin. Bir süreç ayarlama
Aurora bulut sunucularını iş gününün sonunda kapatmak ve Aurora bulut sunucularını iş gününde başlatmak
bir sonraki iş gününün başlangıcı.

B. Amazon'u başlatırken boyut kısıtlamalarını zorunlu kılan bir AWS Hizmet Kataloğu ürünü geliştirin
Aurora örnekleri. Geliştiricilere, ihtiyaç duyduklarında ürünü başlatmaları için erişim izni verin
geliştirme veritabanı.

C. Bir Amazon Aurora Serverless kümesi oluşturun. Bir AWS Hizmet Kataloğu ürünü geliştirerek
kümedeki veritabanlarını varsayılan kapasite ayarlarıyla başlatın. Geliştiricilere erişim izni verin
ürün.

D. AWS Trusted Advisor'ı izleyin, boşta kalan Amazon RDS veritabanlarını kontrol eder. için bir süreç oluşturun
Tanımlanan boştaki RDS veritabanlarını sonlandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Aurora Serverless kümesi oluşturun. Kümedeki veritabanlarını varsayılan kapasite ayarlarıyla başlatmak için bir AWS Hizmet Kataloğu ürünü geliştirin. Geliştiricilere ürüne erişim izni verin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 852
Bir şirket, içerik yönetim sistemine hizmet eden bir web uygulaması geliştiriyor. içerik
yönetim sistemi bir Application Load Balancer arkasında Amazon EC2 bulut sunucularında çalışır
(ALB). EC2 bulut sunucuları birden çok Erişilebilirlik Alanında Otomatik Ölçeklendirme grubunda çalışır. Kullanıcılar
içeriğe sürekli olarak dosyalar, bloglar ve diğer web sitesi varlıklarını ekliyor ve güncelliyorlar
yönetim sistemi.
Bir çözüm mimarı, tüm EC2 bulut sunucularının güncel bilgileri paylaştığı bir çözümü uygulamalıdır
web sitesi içeriğinin mümkün olan en az gecikme süresine sahip olmasını sağlar.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Web sitesi varlıklarını kopyalamak için Otomatik Ölçeklendirme grubu yaşam döngüsü ilkesindeki EC2 kullanıcı verilerini güncelleyin
en son başlatılan EC2 bulut sunucusundan. ALB'yi değişiklik yapacak şekilde yapılandırın
web sitesi varlıkları yalnızca en yeni EC2 örneğinde bulunur.

B. Web sitesi varlıklarını bir Amazon Elastic File System (Amazon EFS) dosya sistemine kopyalayın.
Her EC2 örneğini EFS dosya sistemini yerel olarak bağlayacak şekilde yapılandırın. Web sitesi barındırmayı yapılandırma
EFS dosya sisteminde depolanan web sitesi varlıklarına referans veren uygulama.

C. Web sitesi varlıklarını bir Amazon S3 klasörüne kopyalayın. Her EC2 bulut sunucusunun indirildiğinden emin olun
web sitesi varlıklarını S3 klasöründen ekli Amazon Elastic Block Store'a (Amazon EBS)
hacim. Dosyaları güncel tutmak için S3 senkronizasyon komutunu saatte bir kez çalıştırın.

D. Web sitesi varlıklarıyla bir Amazon Elastic Block Store (Amazon EBS) anlık görüntüsünü geri yükleyin.
Yeni bir EC2 bulut sunucusu başlatıldığında EBS anlık görüntüsünü ikincil EBS birimi olarak ekleyin.
Web sitesi barındırma uygulamasını, depolanan web sitesi varlıklarına referans verecek şekilde yapılandırın.
ikincil EBS hacmi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web sitesi varlıklarını bir Amazon Elastic File System (Amazon EFS) dosya sistemine kopyalayın. Her EC2 örneğini EFS dosya sistemini yerel olarak bağlayacak şekilde yapılandırın. Web sitesi barındırma uygulamasını, EFS dosya sisteminde depolanan web sitesi varlıklarına referans verecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 853
Bir şirketin web uygulaması, bir sunucunun arkasında çalışan birden çok Amazon EC2 örneğinden oluşur.
VPC'deki Uygulama Yük Dengeleyicisi. Amazon RDS for MySQL veritabanı bulut sunucusu verileri içerir.
Şirketin şüpheli veya beklenmedik durumları otomatik olarak tespit etme ve yanıt verme yeteneğine ihtiyacı var
AWS ortamındaki davranış. Şirket zaten mimarisine AWS WAF'ı ekledi.
Bir çözüm mimarı tehditlere karşı korunmak için bundan sonra ne yapmalıdır?

A. Tehdit algılamayı gerçekleştirmek için Amazon GuardDuty'yi kullanın. Amazon EventBridge'i filtrelemek için yapılandırma
GuardDuty bulgularını bulma ve AWS WAF kurallarını ayarlamak için bir AWS Lambda işlevini çağırma.

B. Tehdit algılamayı gerçekleştirmek için AWS Firewall Manager'ı kullanın. Amazon EventBridge'i filtrelemek için yapılandırma
Firewall Manager bulguları için ve AWS WAF web'ini ayarlamak üzere bir AWS Lambda işlevini çağırmak için
ACL.

C. Tehdit algılamayı gerçekleştirmek ve AWS WAF kurallarını güncellemek için Amazon Inspector'ı kullanın. Bir oluştur
Web uygulamasına erişimi sınırlamak için VPC ağ ACL'si.

D. Tehdit algılamayı gerçekleştirmek ve AWS WAF kurallarını güncellemek için Amazon Macie'yi kullanın. Bir oluştur
Web uygulamasına erişimi sınırlamak için VPC ağ ACL'si.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Tehdit algılamayı gerçekleştirmek için Amazon GuardDuty'yi kullanın. GuardDuty bulgularını filtrelemek ve AWS WAF kurallarını ayarlamak için bir AWS Lambda işlevini çağırmak üzere Amazon EventBridge'i yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 854
Bir şirket, bir Amazon'a bağlanan bir grup Amazon EC2 bulut sunucusu çalıştırmayı planlıyor
Aurora veritabanı. Şirket, EC2'yi dağıtmak için bir AWS CloudFormation şablonu oluşturdu
bulut sunucuları ve Aurora DB kümesi. Şirket, örneklerin kimlik doğrulamasına izin vermek istiyor
Veritabanına güvenli bir şekilde. Şirket statik veritabanını korumak istemiyor
kimlik bilgileri.
Hangi çözüm bu gereksinimleri EN AZ operasyonel çabayla karşılıyor?

A. Kullanıcı adı ve parolayla bir veritabanı kullanıcısı oluşturun. Veritabanı kullanıcısı için parametreler ekleyin
CloudFormation şablonuna ad ve şifre. Parametreleri EC2 örneklerine iletin
örnekler başlatıldığında.

B. Kullanıcı adı ve parolayla bir veritabanı kullanıcısı oluşturun. Kullanıcı adını ve şifreyi şuraya kaydedin:
AWS Systems Manager Parametre Deposu. Veritabanını almak için EC2 bulut sunucularını yapılandırma
Parameter Store'dan kimlik bilgileri.

C. Veritabanı kümesini IAM veritabanı kimlik doğrulamasını kullanacak şekilde yapılandırın. Kullanılacak bir veritabanı kullanıcısı oluşturun
IAM kimlik doğrulaması ile. Uygulamalara izin vermek için EC2 bulut sunucularıyla bir rolü ilişkilendirin
Veritabanına erişmek için örnekler.

D. Veritabanı kümesini, bir IAM kullanıcısı ile IAM veritabanı kimlik doğrulamasını kullanacak şekilde yapılandırın. Bir oluştur
IAM kullanıcısıyla eşleşen bir ada sahip veritabanı kullanıcısı. IAM kullanıcısını EC2 ile ilişkilendirin
Örneklerdeki uygulamaların veritabanına erişmesine izin vermek için örnekler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Veritabanı kümesini IAM veritabanı kimlik doğrulamasını kullanacak şekilde yapılandırın. IAM kimlik doğrulamasıyla kullanılacak bir veritabanı kullanıcısı oluşturun. Bulut sunucularındaki uygulamaların veritabanına erişmesine izin vermek için bir rolü EC2 bulut sunucularıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Systems Manager Parameter Store:** Yapılandırma parametreleri, ortam değişkenleri ve şifreli dizgiler için hiyerarşik depolama sunar; standart (ücretsiz) ve gelişmiş katman seçenekleri bulunur.

---

---

Soru 855
Bir şirket Amazon CloudFront dağıtımını SSL/TLS sertifikalarını kullanacak şekilde yapılandırmak istiyor.
Şirket, dağıtım için varsayılan alan adını kullanmak istemiyor. Bunun yerine,
şirket dağıtım için farklı bir alan adı kullanmak istiyor.
Sertifikayı herhangi bir ek maliyete yol açmadan dağıtacak çözüm hangisidir?

A. AWS Sertifika Yöneticisinden (ACM) Amazon tarafından verilen özel bir sertifika talep edin.
us-doğu-1 Bölgesi.

B. AWS Sertifika Yöneticisinden (ACM) Amazon tarafından verilen özel bir sertifika talep edin.
us-batı-1 Bölgesi.

C. AWS Sertifika Yöneticisinden (ACM) Amazon tarafından verilen genel sertifikayı talep edin.
us-doğu-1 Bölgesi.

D. AWS Sertifika Yöneticisinden (ACM) Amazon tarafından verilen genel sertifikayı talep edin.
us-batı-1 Bölgesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** us-east-1 Bölgesindeki AWS Sertifika Yöneticisinden (ACM) Amazon tarafından verilen genel sertifikayı talep edin.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 856
Bir şirket, operasyon verilerini oluşturur ve verileri bir Amazon S3 klasöründe saklar. için
Şirketin yıllık denetimi için harici bir danışmanın saklanan yıllık rapora erişmesi gerekir
S3 kovasında. Harici danışmanın 7 gün boyunca rapora erişmesi gerekiyor.
Şirket, harici danışmanın yalnızca
rapor et.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Genel bir statik web sitesini barındıracak şekilde yapılandırılmış yeni bir S3 grubu oluşturun. İşlemleri taşı
verileri yeni S3 klasörüne aktarın. S3 web sitesi URL'sini harici danışmanla paylaşın.

B. 7 gün boyunca S3 klasörüne genel erişimi etkinleştirin. S3 klasörüne erişimi şu durumlarda kaldırın:
Dış danışman denetimi tamamlar.

C. S3 klasöründeki rapora erişimi olan yeni bir IAM kullanıcısı oluşturun. Erişim anahtarlarını sağlayın
harici danışmana. Erişim anahtarlarını 7 gün sonra iptal edin.

D. S3'teki raporun konumuna gerekli erişime sahip önceden imzalanmış bir URL oluşturun
kova. Önceden imzalanan URL'yi harici danışmanla paylaşın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Raporun S3 klasöründeki konumuna gerekli erişime sahip önceden imzalanmış bir URL oluşturun. Önceden imzalanan URL'yi harici danışmanla paylaşın.
>
> **Sınav Konu Özeti:**
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 857
Bir şirket Amazon EC2'de yüksek performanslı bilgi işlem (HPC) iş yükü çalıştırmayı planlıyor
Örnekler. İş yükü, düşük gecikme süreli ağ performansı ve yüksek ağ verimi gerektirir
sıkı bir şekilde bağlanmış düğümden düğüme iletişim ile.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucularını bir küme yerleştirme grubunun parçası olacak şekilde yapılandırın.

B. EC2 bulut sunucularını Tahsis Edilmiş Bulut Sunucusu kiracılığıyla başlatın.

C. EC2 bulut sunucularını Spot Bulut Sunucuları olarak başlatın.

D. EC2 bulut sunucuları başlatıldığında İsteğe Bağlı Kapasite Rezervasyonunu yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 bulut sunucularını bir küme yerleştirme grubunun parçası olacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Soru 858
Bir şirketin birbirinden 500 mil (804,7 km) uzakta olan birincil ve ikincil veri merkezleri vardır ve
yüksek hızlı fiber optik kabloyla birbirine bağlanır. Şirketin yüksek düzeyde kullanılabilirliğe ihtiyacı var ve
Kritik bir görev için veri merkezleri ile AWS'deki bir VPC arasında güvenli ağ bağlantısı
iş yükü. Bir çözüm mimarı maksimum sağlayan bir bağlantı çözümü seçmelidir.
esneklik.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Birincil veri merkezinden iki Direct'te sonlandırılan iki AWS Direct Connect bağlantısı
İki ayrı cihazdaki konumları bağlayın

B. Birincil ve ikincil veri merkezlerinin her birinden tek bir AWS Direct Connect bağlantısı
aynı cihazdaki bir Direct Connect konumunda sonlandırılıyor

C. Birincil ve ikincil veri merkezlerinin her birinden iki AWS Direct Connect bağlantısı
iki ayrı cihazda iki Direct Connect konumunda sonlandırılıyor

D. Birincil ve ikincil veri merkezlerinin her birinden tek bir AWS Direct Connect bağlantısı
iki ayrı cihazda tek bir Direct Connect konumunda sonlandırılıyor

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birincil ve ikincil veri merkezlerinin her birinden iki ayrı cihazdaki iki Direct Connect konumunda sonlanan iki AWS Direct Connect bağlantısı
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 859
Bir şirket, Oracle On-Demand DB bulut sunucuları için yüksek performansa sahip birden fazla Amazon RDS çalıştırıyor
kullanım. RDS Veritabanı bulut sunucuları, AWS'deki bir kuruluştaki üye hesaplarında çalışır
Organizasyonlar.
Şirketin finans ekibinin kuruluşun yönetim hesabına erişimi vardır ve
üye hesapları. Finans ekibi AWS Trusted'i kullanarak maliyetleri optimize etmenin yollarını bulmak istiyor
Danışman.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Yönetim hesabındaki Trusted Advisor önerilerini kullanın.

B. RDS DB'nin bulunduğu üye hesaplarında Güvenilir Danışman önerilerini kullanın.
örnekler çalışıyor.

C. Amazon RDS Rezerve Edilmiş Bulut Sunucusu Optimizasyonu için Trusted Advisor kontrollerini inceleyin.

D. Amazon RDS Boşta Veritabanı Bulut Sunucuları için Trusted Advisor kontrollerini inceleyin.

E. Bilgi işlem optimizasyonu için Trusted Advisor kontrollerini gözden geçirin. kullanarak sonuçları çapraz kontrol edin.
AWS Bilgi İşlem Optimize Edici.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Yönetim hesabındaki Trusted Advisor önerilerini kullanın. Amazon RDS Rezerve Edilmiş Bulut Sunucusu Optimizasyonu için Trusted Advisor kontrollerini inceleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 860
Bir çözüm mimarı bir uygulama yaratıyor. Uygulama Amazon EC2'de çalışacak
bir VPC'deki birden fazla Erişilebilirlik Alanındaki özel alt ağlardaki örnekler. EC2 bulut sunucuları
gizli bilgiler içeren büyük dosyalara sıklıkla erişin. Bu dosyalar içinde saklanır
İşleme için Amazon S3 klasörleri. Çözüm mimarı ağı optimize etmelidir
Veri aktarım maliyetlerini en aza indirecek mimari.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. VPC'de Amazon S3 için bir ağ geçidi uç noktası oluşturun. Özel rota tablolarında
alt ağlarda, ağ geçidi uç noktası için bir giriş ekleyin.

B. Genel bir alt ağda tek bir NAT ağ geçidi oluşturun. Özel alt ağların yönlendirme tablolarına şunu ekleyin:
NAT ağ geçidine işaret eden varsayılan bir rota.

C. Yönlendirme tablolarındaki VPI'de Amazon S3 için bir AWS PrivateLink arayüzü uç noktası oluşturun.
özel alt ağlara arayüz uç noktası için bir giriş ekleyin.

D. Genel alt ağlardaki her Erişilebilirlik Alanı için bir NAT ağ geçidi oluşturun. Rotanın her birinde
özel alt ağlar için aynı NAT ağ geçidine işaret eden varsayılan bir rota ekleyin.
Erişilebilirlik Alanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** VPC'de Amazon S3 için bir ağ geçidi uç noktası oluşturun. Özel alt ağların yönlendirme tablolarına ağ geçidi uç noktası için bir giriş ekleyin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 861
Bir şirket şirket içi MySQL veritabanını AWS'ye taşımak istiyor. Veritabanı kabul ediyor
İstemciye yönelik bir uygulamadan düzenli içe aktarmalar, bu da yüksek miktarda yazma işlemine neden olur.
Şirket, trafik miktarının performans sorunlarına neden olabileceğinden endişe ediyor
Uygulama.
Bir çözüm mimarı AWS'deki mimariyi nasıl tasarlamalıdır?

A. Tedarik Edilmiş IOPS SSD depolama alanıyla bir Amazon RDS for MySQL veritabanı bulut sunucusu sağlayın.
Amazon CloudWatch'u kullanarak yazma işlemi ölçümlerini izleyin. Aşağıdaki durumlarda sağlanan IOPS'yi ayarlayın:
gerekli.

B. Genel Amaçlı SSD depolamaya sahip bir Amazon RDS for MySQL veritabanı bulut sunucusu sağlayın. Yer
Veritabanı bulut sunucusunun önünde bir Amazon ElastiCache kümesi. Uygulamayı sorgulamak için yapılandırma
Bunun yerine ElastiCache.

C. Bellek ile bir Amazon DocumentDB (MongoDB uyumluluğu ile) örneğini sağlayın
optimize edilmiş örnek türü. Performansla ilgili sorunlar için Amazon CloudWatch'u izleyin. Değiştir
gerekirse örnek sınıf.

D. Genel Amaçlı olarak bir Amazon Elastic File System (Amazon EFS) dosya sistemi sağlayın
performans modu. Amazon CloudWatch'u IOPS darboğazlarına karşı izleyin. Tedarik Edildi olarak değiştir
Gerekirse aktarım performansı modu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Tedarik Edilmiş IOPS SSD depolama alanıyla bir Amazon RDS for MySQL veritabanı bulut sunucusu sağlayın. Amazon CloudWatch'u kullanarak yazma işlemi ölçümlerini izleyin. Gerekirse sağlanan IOPS'yi ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 862
Bir şirket, AWS Cloud'da hassas arşiv veri dosyaları oluşturan bir uygulamayı çalıştırıyor.
Şirket, uygulamanın veri depolama alanını yeniden tasarlamak istiyor. Şirket şifrelemek istiyor
veri dosyalarının işlenmesi ve veriler aktarılmadan önce üçüncü kişilerin verilere erişiminin engellenmesi
şifrelenir ve AWS'ye gönderilir. Şirket zaten bir Amazon S3 klasörü oluşturdu.
Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 klasörünü, Amazon S3 tarafından yönetilen şifrelemeyle istemci tarafı şifrelemeyi kullanacak şekilde yapılandırın
anahtar. Uygulamayı, arşiv dosyalarını depolamak için S3 klasörünü kullanacak şekilde yapılandırın.

B. S3 grubunu AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanacak şekilde yapılandırın.
Uygulamayı, arşiv dosyalarını depolamak için S3 klasörünü kullanacak şekilde yapılandırın.

C. S3 grubunu AWS KMS anahtarlarıyla çift katmanlı sunucu tarafı şifrelemeyi kullanacak şekilde yapılandırın
(SSE-KMS). Uygulamayı, arşiv dosyalarını depolamak için S3 klasörünü kullanacak şekilde yapılandırın.

D. Uygulamayı, AWS Key'de depolanan bir anahtarla istemci tarafı şifrelemeyi kullanacak şekilde yapılandırın
Yönetim Hizmeti (AWS KMS). Uygulamayı arşiv dosyalarını S3'te saklayacak şekilde yapılandırın
kova.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulamayı, AWS Key Management Service'de (AWS KMS) depolanan bir anahtarla istemci tarafı şifrelemeyi kullanacak şekilde yapılandırın. Uygulamayı, arşiv dosyalarını S3 klasöründe depolayacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 863
Bir şirket, veritabanı katmanı için varsayılan yedekleme ayarlarıyla Amazon RDS'yi kullanıyor. şirket
Mevzuat gerekliliklerini karşılamak için veritabanının günlük yedeğini alması gerekir. şirket
Yedeklemeleri 30 gün boyunca saklamanız gerekir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her gün bir RDS anlık görüntüsü oluşturmak için bir AWS Lambda işlevi yazın.

B. RDS veritabanını, otomatik yedeklemeler için 30 günlük bir saklama süresine sahip olacak şekilde değiştirin.

C. RDS yedekleme saklamayı değiştirmek için AWS Systems Manager Bakım Windows'unu kullanın
dönem.

D. AWS CLI'yi kullanarak her gün manuel bir anlık görüntü oluşturun. RDS yedekleme saklamayı değiştirin
dönem.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** RDS veritabanını, otomatik yedeklemeler için 30 günlük bir saklama süresine sahip olacak şekilde değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 864
Uygulamasını AWS'de çalıştıran bir şirket, veritabanı olarak Amazon Aurora DB kümesini kullanıyor.
Birden fazla kullanıcının verilere eriştiği ve verileri okuduğu yoğun kullanım saatlerinde izleme sistemi
yazma sorguları için veritabanı performansının düştüğünü gösterir. Şirket istiyor
Yoğun kullanım taleplerini karşılamak için uygulamanın ölçeklenebilirliğini artırın.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İkinci bir Aurora DB kümesi oluşturun. Kullanıcıların verilerini yeni bilgisayara kopyalamak için bir kopyalama işi yapılandırın
veritabanı. Verileri okumak için ikinci veritabanını kullanacak şekilde uygulamayı güncelleyin.

B. Mevcut Aurora DB'nin önünde bir Amazon DynamoDB Accelerator (DAX) kümesi oluşturun
küme. Uygulamayı salt okunur sorgular için DAX kümesini kullanacak şekilde güncelleyin. Verileri doğrudan yaz
Aurora DB kümesi.

C. Mevcut Aurora DB kümesinde bir Aurora okuma kopyası oluşturun. Kullanılacak uygulamayı güncelleyin
salt okunur sorgular için çoğaltma uç noktasını ve yazma sorguları için küme uç noktasını kullanmak.

D. Bir Amazon Redshift kümesi oluşturun. Kullanıcıların verilerini Redshift kümesine kopyalayın. Güncelleme
Redshift kümesine bağlanmak ve Redshift'te salt okunur sorgular gerçekleştirmek için kullanılan uygulama
küme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Mevcut Aurora DB kümesinde bir Aurora okuma replikası oluşturun. Salt okunur sorgular için çoğaltma uç noktasını kullanacak ve yazma sorguları için küme uç noktasını kullanacak şekilde uygulamayı güncelleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 865
Bir şirketin neredeyse gerçek zamanlı akış uygulaması AWS'de çalışıyor. Veriler alındıkça,
iş veriler üzerinde çalışır ve tamamlanması 30 dakika sürer. İş yükü sıklıkla yaşanır
Büyük miktarlarda gelen veri nedeniyle yüksek gecikme. Bir çözüm mimarının bir çözüm tasarlaması gerekir.
Performansı artırmak için ölçeklenebilir ve sunucusuz bir çözüm.
Çözüm mimarı hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Verileri almak için Amazon Kinesis Data Firehose'u kullanın.

B. Verileri işlemek için AWS Step Functions ile AWS Lambda'yı kullanın.

C. Verileri almak için AWS Database Migration Service'i (AWS DMS) kullanın.

D. Verileri işlemek için Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularını kullanın.

E. Verileri işlemek için AWS Fargate'i Amazon Elastic Container Service (Amazon ECS) ile birlikte kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** Verileri almak için Amazon Kinesis Data Firehose'u kullanın. Verileri işlemek için AWS Fargate'i Amazon Elastic Container Service (Amazon ECS) ile birlikte kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 866
Bir şirket, bir VPC'deki birden fazla Amazon EC2 örneğinde bir web uygulaması çalıştırıyor. Uygulama
hassas verileri bir Amazon S3 klasörüne yazması gerekiyor. Veriler herkese açık olarak gönderilemez
internet.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. VPC rota tablosunda şuraya bir rota oluşturun:
uç nokta.

B. Hedef olarak S3 paketini içeren dahili bir Ağ Yük Dengeleyici oluşturun.

C. S3 klasörünü VPC'nin içine dağıtın. VPC rota tablosunda pakete bir rota oluşturun.

D. VPC ile S3 bölgesel uç noktası arasında bir AWS Direct Connect bağlantısı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. VPC rota tablosunda uç noktaya giden bir rota oluşturun.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 867
Bir şirket, üretim iş yükünü Amazon Elastic Block ile Amazon EC2 bulut sunucularında çalıştırıyor
(Amazon EBS) birimlerini depolayın. Bir çözüm mimarının mevcut EBS hacmini analiz etmesi gerekiyor
maliyet ve optimizasyon önerilerinde bulunmak. Önerilerin aylık tahmini içermesi gerekir
tasarruf fırsatları.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Optimizasyona yönelik EBS birim önerileri oluşturmak için Amazon Inspector raporlamasını kullanın.

B. EBS birim önerilerini belirlemek için AWS Systems Manager raporlamasını kullanın.
optimizasyon.

C. EBS hacim önerilerini belirlemek için Amazon CloudWatch ölçüm raporlamasını kullanın.
optimizasyon.

D. Optimizasyona yönelik EBS birim önerileri oluşturmak için AWS Compute Optimizer'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Optimizasyona yönelik EBS birim önerileri oluşturmak için AWS Compute Optimizer'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 868
Küresel bir şirket iş yüklerini AWS'de çalıştırıyor. Şirketin uygulaması Amazon S3'ü kullanıyor
Hassas veri depolama ve analiz için AWS Bölgelerindeki paketler. Şirket mağazaları
Her gün birden fazla S3 klasöründe milyonlarca nesne. Şirket, tüm S3 paketlerini tanımlamak istiyor
sürüm oluşturma etkin değil.
Bu gereksinimleri hangi çözüm karşılayacak?

B. Sürüm oluşturma özelliği etkin olmayan tüm S3 klasörlerini belirlemek için Amazon S3 Storage Lens'i kullanın.
Bölgeler.

C. Sürüm oluşturma özelliği etkin olmayan tüm S3 klasörlerini belirlemek için S3 için IAM Erişim Analiz Aracı'nı etkinleştirin
Bölgeler genelinde.

D. Olmayan tüm S3 klasörlerini tanımlamak için bir S3 Çok Bölgeli Erişim Noktası oluşturun.
Bölgeler arasında sürüm oluşturma etkin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bölgeler genelinde sürüm oluşturma özelliği etkin olmayan tüm S3 klasörlerini belirlemek için Amazon S3 Storage Lens'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 869
Bir şirket, üzerinde konuşlandırılan e-ticaret sipariş işleme uygulamasını geliştirmek istiyor
AWS. Uygulama, müşteriyi etkilemeden her siparişi tam olarak bir kez işlemelidir
öngörülemeyen trafik dalgalanmaları sırasında deneyim.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğu oluşturun. Tüm siparişleri içine koy
SQS kuyruğu. Siparişleri işlemek için hedef olarak bir AWS Lambda işlevini yapılandırın.

B. Amazon Simple Notification Service (Amazon SNS) standart konusu oluşturun. Hepsini yayınla
SNS standart konusuna yönelik siparişler. Uygulamayı bildirim hedefi olarak yapılandırın.

C. Amazon AppFlow'u kullanarak bir akış oluşturun. Siparişleri akışa gönderin. AWS'yi yapılandırma
Lambda, siparişleri işlemek için hedef işlevi görür.

D. Sipariş isteklerini takip etmek için uygulamada AWS X-Ray'i yapılandırın. Uygulamayı yapılandırın
Siparişleri Amazon CloudWatch'tan alarak işlemek için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğu oluşturun. Tüm siparişleri SQS kuyruğuna koyun. Siparişleri işlemek için hedef olarak bir AWS Lambda işlevini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 870
Bir şirketin iki AWS hesabı vardır: Üretim ve Geliştirme. Şirketin baskı yapması gerekiyor
Geliştirme hesabındaki kod değişikliklerini Üretim hesabına aktarın. Alfa aşamasında yalnızca
Geliştirme ekibindeki iki kıdemli geliştiricinin Üretim hesabına erişmesi gerekiyor. içinde
Beta aşamasında, daha fazla geliştiricinin testi gerçekleştirmek için erişime ihtiyacı olacak.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her hesapta AWS Management Console'u kullanarak iki politika belgesi oluşturun. Ata
erişime ihtiyacı olan geliştiricilere yönelik politika.

B. Geliştirme hesabında bir IAM rolü oluşturun. IAM rolünün Üretime erişmesine izin verin
hesap. Geliştiricilerin rolü üstlenmesine izin verin.

C. Üretim hesabında bir IAM rolü oluşturun. belirten bir güven politikası tanımlayın.
Geliştirme hesabı. Geliştiricilerin rolü üstlenmesine izin verin.

D. Üretim hesabında bir IAM grubu oluşturun. Grubu bir güven ilkesine sorumlu olarak ekleme
Üretim hesabını belirtir. Geliştiricileri gruba ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Üretim hesabında bir IAM rolü oluşturun. Geliştirme hesabını belirten bir güven politikası tanımlayın. Geliştiricilerin rolü üstlenmesine izin verin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 871
Bir şirket, web uygulamasının içeriğine erişimi kısıtlamak istiyor. Şirketin ihtiyacı var
AWS'de bulunan yetkilendirme tekniklerini kullanarak içeriği koruyun. şirket
ayrıca yetkilendirme ve kimlik doğrulama için sunucusuz bir mimari uygulamak istiyor
düşük giriş gecikmesi.
Çözümün web uygulamasıyla entegre olması ve web içeriğini küresel olarak sunması gerekir.
uygulamanın şu anda küçük bir kullanıcı tabanı var, ancak şirket uygulamanın kullanıcı tabanını bekliyor
artırmak.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Kimlik doğrulama için Amazon Cognito'yu yapılandırın. Yetkilendirme için Lambda@Edge'i uygulayın.
Amazon CloudFront'u web uygulamasına küresel olarak hizmet verecek şekilde yapılandırın.

B. Kimlik doğrulama amacıyla Microsoft Active Directory için AWS Directory Service'i yapılandırın. Uygula
Yetkilendirme için AWS Lambda. Web uygulamasını sunmak için Application Load Balancer kullanın
küresel olarak.

C. Kimlik doğrulama için Amazon Cognito'yu yapılandırın. Yetkilendirme için AWS Lambda'yı uygulayın. Kullanım
Amazon S3 Transfer Acceleration, web uygulamasına dünya çapında hizmet vermek için.

D. Kimlik doğrulama amacıyla Microsoft Active Directory için AWS Directory Service'i yapılandırın. Uygula
Yetkilendirme için Lambda@Edge. Web uygulamasını sunmak için AWS Elastic Beanstalk'ı kullanın
küresel olarak.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kimlik doğrulama için Amazon Cognito'yu yapılandırın. Yetkilendirme için Lambda@Edge'i uygulayın. Amazon CloudFront'u web uygulamasına küresel olarak hizmet verecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 872
Bir geliştirme ekibi geliştirme, hazırlama ve üretim için birden fazla AWS hesabı kullanıyor
ortamlar. Ekip üyeleri büyük Amazon EC2 bulut sunucularını başlatıyor
az kullanılmış. Bir çözüm mimarının büyük örneklerin başlatılmasını engellemesi gerekir
hesaplar.
Çözüm mimarı bu gereksinimi EN AZ operasyonel giderle nasıl karşılayabilir?

A. Büyük EC2 bulut sunucularının başlatılmasını reddetmek için IAM politikalarını güncelleyin. Politikaları herkese uygulayın
kullanıcılar.

B. AWS Resource Access Manager'da büyük EC2'nin başlatılmasını önleyen bir kaynak tanımlayın
örnekler.

C. Her hesapta büyük EC2 bulut sunucularının başlatılmasını reddeden bir IAM rolü oluşturun. Ver
geliştiricilerin role IAM grubu erişimi.

D. AWS Organizasyonlarında, yönetim hesabında varsayılan olarak bir kuruluş oluşturun
politika. Büyük EC2 bulut sunucularının başlatılmasını reddeden bir hizmet kontrol ilkesi (SCP) oluşturun ve
bunu AWS hesaplarına uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Organizasyonlarında, yönetim hesabında varsayılan politikayla bir kuruluş oluşturun. Büyük EC2 bulut sunucularının başlatılmasını reddeden bir hizmet kontrol ilkesi (SCP) oluşturun ve bunu AWS hesaplarına uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 873
Bir şirket yüzlerce şirket içi sanal makineden (VM) oluşan filosunu Amazon'a taşıdı
EC2 örnekleri. Örnekler, çeşitli sürümlerle birlikte çeşitli Windows Server sürümlerinden oluşan bir filoyu çalıştırır.
Linux dağıtımları. Şirket, envanter ve güncellemeleri otomatikleştirecek bir çözüm istiyor
işletim sistemleri. Şirketin ayrıca her birinin ortak güvenlik açıklarının bir özetine ihtiyacı var.
Örneğin düzenli aylık incelemeler için.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Tüm EC2 bulut sunucularını yönetmek için AWS Systems Manager Patch Manager'ı kurun. Yapılandır
AWS Security Hub aylık raporlar üretecek.

B. Tüm EC2 bulut sunucularını yönetmek için AWS Systems Manager Patch Manager'ı kurun. Dağıt
Amazon Inspector'ı kullanın ve aylık raporları yapılandırın.

C. AWS Shield Advanced'i kurun ve aylık raporları yapılandırın. Otomatikleştirmek için AWS Config'i dağıtın
EC2 bulut sunucularında yama kurulumları.

D. Tüm EC2 bulut sunucularını izlemek için hesapta Amazon GuardDuty'yi kurun. AWS Config'i şuraya dağıtın:
EC2 bulut sunucularında yama kurulumlarını otomatikleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tüm EC2 bulut sunucularını yönetmek için AWS Systems Manager Patch Manager'ı kurun. Amazon Inspector'ı dağıtın ve aylık raporları yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 874
Bir şirket, uygulamasını AWS Cloud'da barındırır. Uygulama Amazon EC2'de çalışıyor
Elastik Yük Dengeleme (ELB) yük dengeleyicisinin arkasındaki Otomatik Ölçeklendirme grubundaki örnekler.
uygulama bir Amazon DynamoDB tablosuna bağlanır.
Felaket kurtarma (DR) amacıyla şirket, uygulamanın
minimum kesinti süresiyle başka bir AWS Bölgesinden edinilebilir.
Hangi çözüm bu gereksinimleri EN AZ kesinti süresiyle karşılayacak?

A. DR Bölgesinde bir Otomatik Ölçeklendirme grubu ve bir ELB oluşturun. DynamoDB tablosunu şu şekilde yapılandırın:
küresel bir tablo. Yeni DR Bölgesinin ELB'sini işaret edecek şekilde DNS yük devretmesini yapılandırın.

B. EC2 bulut sunucuları, ELB'ler ve DynamoDB oluşturmak için bir AWS CloudFormation şablonu oluşturun
Gerektiğinde başlatılacak tablolar. Yeni DR Bölgesini işaret edecek şekilde DNS yük devretmeyi yapılandırın
ELB.

C. EC2 bulut sunucuları ve başlatılacak bir ELB oluşturmak için bir AWS CloudFormation şablonu oluşturun
gerektiğinde. DynamoDB tablosunu global tablo olarak yapılandırın. Noktaya DNS yük devretmeyi yapılandırma
yeni DR Bölgesinin ELB'sine.

D. DR Bölgesinde bir Otomatik Ölçeklendirme grubu ve bir ELB oluşturun. DynamoDB tablosunu şu şekilde yapılandırın:
küresel bir tablo. Değerlendirme süresi 10 dakika olan bir Amazon CloudWatch alarmı oluşturun.
Amazon Route 53'ü DR Bölgesinin ELB'sine işaret edecek şekilde güncelleyen bir AWS Lambda işlevini çağırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** DR Bölgesinde bir Otomatik Ölçeklendirme grubu ve bir ELB oluşturun. DynamoDB tablosunu global tablo olarak yapılandırın. Yeni DR Bölgesinin ELB'sini işaret edecek şekilde DNS yük devretmesini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 875
Bir şirket, özel bir alt ağdaki Amazon EC2 bulut sunucularında bir uygulama çalıştırıyor. Uygulama
Amazon S3 klasörlerinde veri depolaması ve alması gerekiyor. Düzenleyici gerekliliklere göre,
veriler halka açık internet üzerinden seyahat etmemelidir.
Bir çözüm mimarı bu gereksinimleri EN uygun maliyetle karşılamak için ne yapmalıdır?

A. S3 klasörlerine erişmek için bir NAT ağ geçidi dağıtın.

B. S3 klasörlerine erişmek için AWS Storage Gateway'i dağıtın.

C. S3 klasörlerine erişmek için bir S3 arayüzü uç noktası dağıtın.

D. S3 klasörlerine erişmek için bir S3 ağ geçidi uç noktası dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 klasörlerine erişmek için bir S3 ağ geçidi uç noktası dağıtın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 876
Bir şirket, tek bir Erişilebilirlik Alanında çalışan Amazon EC2 bulut sunucularında bir uygulamayı barındırıyor.
Uygulamaya Açık Sistemler Ara Bağlantısının taşıma katmanı kullanılarak erişilebilir
(OSI) modeli. Şirketin yüksek kullanılabilirliğe sahip olması için uygulama mimarisine ihtiyacı var.
Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. Farklı bir Erişilebilirlik Alanında yeni EC2 bulut sunucularını yapılandırın. Yönlendirmek için Amazon Route 53'ü kullanın
tüm örneklere trafik.

B. EC2 bulut sunucularının önünde bir Ağ Yük Dengeleyicisi yapılandırın.

C. Örneklere giden TCP trafiği için bir Ağ Yük Dengeleyicisi yapılandırın. Bir Uygulamayı Yapılandırma
Örneklere yönelik HTTP ve HTTPS trafiği için Yük Dengeleyici.

D. EC2 bulut sunucuları için bir Otomatik Ölçeklendirme grubu oluşturun. Otomatik Ölçeklendirme grubunu kullanılacak şekilde yapılandırma
birden fazla Erişilebilirlik Alanı. Uygulama durumu denetimlerini çalıştırmak için Otomatik Ölçeklendirme grubunu yapılandırma
örnekler.

E. Bir Amazon CloudWatch alarmı oluşturun. Alarmı, EC2 bulut sunucularını yeniden başlatacak şekilde yapılandırın.
durdurulmuş duruma geçiş.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** EC2 bulut sunucularının önünde bir Ağ Yük Dengeleyicisi yapılandırın. EC2 bulut sunucuları için bir Otomatik Ölçeklendirme grubu oluşturun. Otomatik Ölçeklendirme grubunu birden çok Erişilebilirlik Alanını kullanacak şekilde yapılandırın. Örneklerde uygulama durumu denetimlerini çalıştırmak için Otomatik Ölçeklendirme grubunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 877
Bir şirket statik web sitesini barındırmak için Amazon S3'ü kullanıyor. Şirket bir iletişim formu eklemek istiyor
web sayfasına. İletişim formunda kullanıcıların girebileceği dinamik sunucu tarafı bileşenleri bulunacaktır
adı, e-posta adresi, telefon numarası ve kullanıcı mesajı.
Şirket, her ay 100'den az saha ziyareti bekliyor. İletişim formu şunları bildirmelidir:
Bir müşteri formu doldurduğunda şirkete e-posta yoluyla.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Dinamik iletişim formunu Amazon Elastic Container Service'te (Amazon ECS) barındırın. Kurulum
Üçüncü taraf bir e-posta sağlayıcısına bağlanmak için Amazon Basit E-posta Hizmeti (Amazon SES).

B. AWS Lambda'dan iletişim formunu döndüren bir Amazon API Gateway uç noktası oluşturun
işlevi. Bir mesaj yayınlamak için API Ağ Geçidinde başka bir Lambda işlevini yapılandırın.
Amazon Basit Bildirim Hizmeti (Amazon SNS) konusu.

C. Statik içerik ve dinamik içerik için AWS Amplify Hosting'i kullanarak web sitesini barındırın. Kullanım
iletişim formunu oluşturmak için sunucu tarafı komut dosyası oluşturma. Amazon Simple Queue Service'i Yapılandırma (Amazon
SQS) mesajı şirkete iletmek için.

D. Web sitesini Amazon S3'ten Windows Server çalıştıran Amazon EC2 bulut sunucularına taşıyın. Kullanım
Web sayfasını barındırmak için Windows Server'a yönelik Internet Bilgi Hizmetleri (IIS). İstemci tarafını kullan
iletişim formunu oluşturmak için komut dosyası oluşturma. Formu Amazon WorkMail ile entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir AWS Lambda işlevinden iletişim formunu döndüren bir Amazon API Gateway uç noktası oluşturun. Amazon Simple Notification Service (Amazon SNS) konusuna bir mesaj yayınlamak için API Gateway'de başka bir Lambda işlevi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 878
Bir şirket, iş birimleri için AWS Kuruluşlarında özel AWS hesapları oluşturur.
Yakın zamanda bir iş biriminin kök kullanıcı e-posta adresine önemli bir bildirim gönderildi
atanan hesap sahibi yerine hesap. Şirket tüm geleceğin garanti altına alınmasını istiyor
Faturalandırmanın bildirim kategorilerine göre farklı çalışanlara bildirim gönderilebilir,
operasyonlar veya güvenlik.
Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. Her AWS hesabını, şirketin yönettiği tek bir e-posta adresini kullanacak şekilde yapılandırın.
Tüm hesap sahiplerinin bildirim almak için e-posta hesabına erişebildiğinden emin olun. Yapılandır
Faturalandırma ekibi için ilgili dağıtım listeleriyle birlikte her AWS hesabı için alternatif iletişim kişileri,
güvenlik ekibi ve her iş biriminin operasyon ekibi.

B. Her AWS hesabını, her iş birimi için farklı bir e-posta dağıtım listesi kullanacak şekilde yapılandırın.
şirket yönetiyor. Her dağıtım listesini, yönetici e-posta adresleriyle yapılandırın.
uyarılara yanıt verin. Her AWS hesabı için karşılık gelen alternatif kişileri yapılandırın
her işletmenin faturalama ekibi, güvenlik ekibi ve operasyon ekibi için dağıtım listeleri
birim.

C. Her AWS hesabının kök kullanıcısı e-posta adresini, yönetilen bireysel şirket olacak şekilde yapılandırın
her iş biriminden bir kişinin e-posta adresi. Her AWS için alternatif kişileri yapılandırın
faturalandırma ekibi, güvenlik ekibi ve
Her iş birimi için operasyon ekibi.

D. Her AWS hesabı kök kullanıcısını, merkezi bir posta kutusuna giden e-posta takma adlarını kullanacak şekilde yapılandırın.
İşletme tarafından yönetilen tek bir e-posta kullanarak her hesap için alternatif kişileri yapılandırın
faturalama ekibi, güvenlik ekibi ve operasyon ekibi için dağıtım listesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Her AWS hesabı kök kullanıcısını, merkezi bir posta kutusuna giden e-posta takma adlarını kullanacak şekilde yapılandırın. Faturalandırma ekibi, güvenlik ekibi ve operasyon ekibi için tek bir iş tarafından yönetilen e-posta dağıtım listesi kullanarak her hesap için alternatif kişiler yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 879
Bir şirket AWS'de bir e-ticaret uygulaması çalıştırıyor. Amazon EC2 bulut sunucuları satın alma işlemlerini işler
ve satın alma ayrıntılarını bir Amazon Aurora PostgreSQL veritabanı kümesinde depolayın.
Müşteriler, kullanımın en yoğun olduğu zamanlarda uygulamada zaman aşımları yaşıyor. bir çözüm
Uygulamanın zirveyi karşılayacak şekilde ölçeklenebilmesi için mimarın uygulamayı yeniden tasarlaması gerekiyor
kullanım talepleri.
Hangi eylem kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (Seç
iki.)

A. Satın alma işlemlerini yeniden denemek için yeni EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu yapılandırın.
işlem tamamlandı. Amazon'u kullanarak veritabanı kümesine bağlanacak uygulamaları güncelleyin
RDS Proxy'si.

B. Uygulamayı, Aurora'nın önünde bir Amazon ElastiCache kümesi kullanacak şekilde yapılandırın
PostgreSQL Veritabanı kümesi.

C. Satın alma isteklerini bir Amazon Simple Queue Service'e göndermek için uygulamayı güncelleyin
(Amazon SQS) kuyruğu. Okunan yeni EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu yapılandırın.
SQS kuyruğu.

D. İşleme tamamlanana kadar bilet satın alımlarını yeniden denemek için bir AWS Lambda işlevi yapılandırın
tamamlandı.

E. Bir Amazon AP yapılandırın! Kullanım planına sahip Ağ Geçidi REST API'si.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** İşleme tamamlanana kadar satın alma işlemlerini yeniden denemek için yeni EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu yapılandırın. Amazon RDS Proxy'yi kullanarak veritabanı kümesine bağlanacak uygulamaları güncelleyin. Satın alma isteklerini bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna göndermek için uygulamayı güncelleyin. SQS kuyruğundan okunan yeni EC2 bulut sunucularından oluşan bir Otomatik Ölçeklendirme grubu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 880
AWS Organizasyonlarını kullanan bir şirket, 30 farklı AWS'de 150 uygulama çalıştırıyor
hesaplar. Şirket, yeni bir rapor oluşturmak için AWS Maliyet ve Kullanım Raporu'nu kullandı.
yönetim hesabı. Rapor, bir Amazon S3 klasörüne kopyalanan bir Amazon S3 klasörüne teslim edilir.
veri toplama hesabındaki paket.
Şirketin üst düzey yöneticileri, NAT ağ geçidi sağlayan özel bir kontrol panelini görüntülemek istiyor
Maliyetler, içinde bulunulan ayın başından itibaren her gün.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İstenilen tablo görselini içeren bir Amazon QuickSight kontrol panelini paylaşın. Yapılandır
Yeni raporu sorgulamak için AWS DataSync'i kullanmak için QuickSight.

B. İstenilen tablo görselini içeren bir Amazon QuickSight kontrol panelini paylaşın. Yapılandır
QuickSight, yeni raporu sorgulamak için Amazon Athena'yı kullanacak.

C. İstenen tablo görselini içeren bir Amazon CloudWatch kontrol panelini paylaşın. Yapılandır
CloudWatch, yeni raporu sorgulamak için AWS DataSync'i kullanacak.

D. İstenen tablo görselini içeren bir Amazon CloudWatch kontrol panelini paylaşın. Yapılandır
CloudWatch, yeni raporu sorgulamak için Amazon Athena'yı kullanacak.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İstenen tablo görselini içeren bir Amazon QuickSight kontrol panelini paylaşın. Yeni raporu sorgulamak için QuickSight'ı Amazon Athena'yı kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 881
Bir şirket, Amazon CloudFront ile Amazon S3'te yüksek trafikli statik bir web sitesine ev sahipliği yapıyor
Varsayılan TTL'si 0 saniye olan dağıtım. Şirket önbelleğe almayı uygulamak istiyor
web sitesinin performansını artırmak. Ancak şirket aynı zamanda bayatlamış olmasını da sağlamak istiyor
içerik, dağıtımdan sonra birkaç dakikadan daha uzun süre sunulmaz.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi önbellekleme yöntemleri kombinasyonunu uygulamalıdır?
gereksinimler? (İki tane seçin.)

A. CloudFront varsayılan TTL'sini 2 dakikaya ayarlayın.

B. S3 klasöründe varsayılan TTL'yi 2 dakika olarak ayarlayın.

C. Amazon S3'teki nesnelere bir Cache-Control özel yönergesi ekleyin.

D. HTTP yanıtlarına Expires başlığı eklemek için bir AWS Lambda@Edge işlevi oluşturun.
İşlevi, izleyicinin yanıtına göre çalışacak şekilde yapılandırın.

E. Amazon S3'teki nesnelere 24 saatlik bir Cache-Control maksimum yaş yönergesi ekleyin. Açık
dağıtım, değiştirilen dosyaları uç önbelleklerden temizlemek için bir CloudFront geçersiz kılma oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** CloudFront varsayılan TTL'sini 2 dakikaya ayarlayın. Amazon S3'teki nesnelere 24 saatlik bir Cache-Control maksimum yaş yönergesi ekleyin. Dağıtım sırasında, değiştirilen dosyaları uç önbelleklerden temizlemek için bir CloudFront geçersiz kılma oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 882
Bir şirket, uygulamasını Amazon EC2 bulut sunucularını ve AWS Lambda işlevlerini kullanarak çalıştırıyor.
EC2 bulut sunucuları bir VPC'nin özel alt ağlarında çalışır. Lambda fonksiyonlarının doğrudan ağa ihtiyacı var
uygulamanın çalışması için EC2 bulut sunucularına erişim.
Uygulama 1 yıl süreyle geçerli olacak. Uygulamanın kullandığı Lambda işlevlerinin sayısı
1 yıllık süreçte artış gösterdi. Şirket tüm uygulamalarda maliyetleri en aza indirmelidir
kaynaklar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 Bulut Sunucusu Tasarruf Planı satın alın. Lambda işlevlerini özel alt ağlara bağlayın
EC2 bulut sunucularını içeren.

B. Bir EC2 Bulut Sunucusu Tasarruf Planı satın alın. Lambda işlevlerini yeni genel alt ağlara bağlayın
EC2 örneklerinin çalıştığı aynı VPC'de.

C. Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerini özel alt ağlara bağlayın.
EC2 örneklerini içerir.

D. Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerini Lambda hizmeti VPC'sinde tutun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerini EC2 bulut sunucularını içeren özel alt ağlara bağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 883
Bir şirket, AWS Control Tower'ı kullanarak AWS'de çoklu hesap stratejisini devreye aldı.
şirket, geliştiricilerinin her birine ayrı AWS hesapları sağladı. Şirket istiyor
Geliştiricilerin maruz kaldığı AWS kaynak maliyetlerini sınırlamak için kontroller uygulamak.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Her geliştiriciye, tüm kaynaklarını CostCenter anahtarına ve bir etikete sahip bir etiketle etiketlemesini söyleyin.
geliştiricinin adının değeri. kontrol etmek için gerekli etiketleri AWS Config yönetilen kuralını kullanın.
etiketi. Etiketi olmayan kaynakları sonlandırmak için bir AWS Lambda işlevi oluşturun. Yapılandır
AWS Cost Explorer, harcamalarını izlemek üzere her geliştiriciye günlük bir rapor gönderecektir.

B. Her geliştirici hesabı için bütçe oluşturmak amacıyla AWS Bütçelerini kullanın. Şunun için bütçe uyarıları ayarlayın:
Gerçek ve tahmin değerleri, geliştiricilere bu değerleri aştıklarında veya aşmayı beklediklerinde bildirimde bulunmak için kullanılır.
tahsis edilen bütçe. Geliştiricinin IAM rolüne DenyAll politikası uygulamak için AWS Budgets eylemlerini kullanın
Atanan bütçeye ulaşıldığında ek kaynakların başlatılmasını önlemek için.

C. Her geliştirici hesabının maliyetlerini izlemek ve raporlamak için AWS Cost Explorer'ı kullanın. Yapılandır
Maliyet Gezgini, harcamalarını izlemek üzere her geliştiriciye günlük bir rapor gönderecektir. AWS Cost'u kullanın
Anormal harcamaları tespit etmek ve uyarılar sağlamak için Anormallik Tespiti.

D. Geliştiricilerin kaynakları sınırlı bir maliyet aralığında başlatmasına olanak sağlamak için AWS Hizmet Kataloğu'nu kullanın.
Her AWS hesabının sonunda kaynak çalıştırmayı durdurmak için her AWS hesabında AWS Lambda işlevleri oluşturun
iş günü. Kaynakları her iş gününün başında sürdürmek için Lambda işlevlerini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Her geliştirici hesabına bütçe oluşturmak için AWS Bütçelerini kullanın. Geliştiricilere, atanan bütçelerini aştıklarında veya aşmayı beklediklerinde bildirimde bulunmak üzere gerçek ve tahmini değerler için bütçe uyarıları ayarlayın. Atanan bütçeye ulaşıldığında ek kaynakların başlatılmasını önlemek amacıyla geliştiricinin IAM rolüne bir DenyAll politikası uygulamak için AWS Budgets eylemlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 884
Bir çözüm mimarı üç katmanlı bir web uygulaması tasarlıyor. Mimari şunlardan oluşur:
internete yönelik Application Load Balancer (ALB) ve Amazon EC2'de barındırılan bir web katmanı
özel alt ağlardaki örnekler. İş mantığına sahip uygulama katmanı EC2 bulut sunucularında çalışır
özel alt ağlarda. Veritabanı katmanı EC2 üzerinde çalışan Microsoft SQL Server'dan oluşur
özel alt ağlardaki örnekler. Güvenlik şirket için yüksek bir önceliktir.
Çözüm mimarı güvenlik grubu yapılandırmalarının hangi kombinasyonunu kullanmalıdır? (Seç
üç.)

A. Güvenlikten gelen HTTPS trafiğine izin vermek için web katmanı için güvenlik grubunu yapılandırın
ALB'nin grubu.

B. Web katmanı için güvenlik grubunu, giden HTTPS trafiğinin 0.0.0.0/0'a izin verecek şekilde yapılandırın.

C. Gelen Microsoft SQL Server trafiğine izin vermek için veritabanı katmanının güvenlik grubunu yapılandırın
uygulama katmanının güvenlik grubundan.

D. Giden HTTPS trafiğine izin vermek için veritabanı katmanının güvenlik grubunu yapılandırın ve
Web katmanı için güvenlik grubuna Microsoft SQL Server trafiği.

E. Uygulama katmanının güvenlik grubunu, gelen HTTPS trafiğine izin verecek şekilde yapılandırın.
web katmanı için güvenlik grubu.

F. Giden HTTPS trafiğine izin vermek için uygulama katmanının güvenlik grubunu yapılandırın ve
Web katmanı için güvenlik grubuna Microsoft SQL Server trafiği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C, E`
> - **Önerilen Çözüm:** ALB güvenlik grubundan gelen HTTPS trafiğine izin vermek için web katmanı güvenlik grubunu yapılandırın. Uygulama katmanının güvenlik grubundan gelen Microsoft SQL Server trafiğine izin vermek için veritabanı katmanının güvenlik grubunu yapılandırın. Web katmanı güvenlik grubundan gelen HTTPS trafiğine izin vermek için uygulama katmanı güvenlik grubunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 885
Bir şirket üretim uygulamasının yeni bir versiyonunu yayınladı. Şirketin iş yükü
Amazon EC2, AWS Lambda, AWS Fargate ve Amazon SageMaker'ı kullanır.
Şirket, kullanımın istikrarlı bir durumda olması nedeniyle iş yükünün maliyetini optimize etmek istiyor.
Şirket, en fazla hizmeti en az tasarruf planıyla karşılamak istiyor.
Hangi tasarruf planı kombinasyonu bu gereksinimleri karşılayacak? (İki tane seçin.)

A. Amazon EC2 ve SageMaker için bir EC2 Bulut Sunucusu Tasarruf Planı satın alın.

B. Amazon EC2, Lambda ve SageMaker için bir Bilgi İşlem Tasarruf Planı satın alın.

C. Bir SageMaker Tasarruf Planı satın alın.

D. Lambda, Fargate ve Amazon EC2 için bir İşlem Tasarruf Planı satın alın.

E. Amazon EC2 ve Fargate için bir EC2 Bulut Sunucusu Tasarruf Planı satın alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** Bir SageMaker Tasarruf Planı satın alın. Lambda, Fargate ve Amazon EC2 için bir İşlem Tasarruf Planı satın alın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 886
Bir şirket Microsoft SQL Server veritabanını kullanıyor. Şirketin uygulamaları birbirine bağlı
veritabanına. Şirket Amazon Aurora PostgreSQL veritabanına geçmek istiyor
uygulama kodunda minimum değişiklikle.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. SQL sorgularını SQL sorgularını yeniden yazmak için AWS Şema Dönüştürme Aracını (AWS SCT) kullanın.
uygulamalar.

B. Uygulamalardan SQL sorgularını çalıştırmak için Aurora PostgreSQL'de Babelfish'i etkinleştirin.

C. AWS Şema Dönüştürme Aracını (AWS) kullanarak veritabanı şemasını ve verilerini taşıyın
SCT) ve AWS Veritabanı Geçiş Hizmeti (AWS DMS).

D. Uygulamaları Aurora PostgreSQL'e bağlamak için Amazon RDS Proxy'yi kullanın.

E. SQL sorgularını SQL sorgularını yeniden yazmak için AWS Database Migration Service'i (AWS DMS) kullanın.
uygulamalar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** Uygulamalardan SQL sorgularını çalıştırmak için Aurora PostgreSQL'de Babelfish'i etkinleştirin. AWS Schema Conversion Tool'u (AWS SCT) ve AWS Database Migration Service'i (AWS DMS) kullanarak veritabanı şemasını ve verilerini taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 887
Bir şirket, bir uygulamayı Amazon Elastic kullanan Amazon EC2 bulut sunucularında yeniden barındırmayı planlıyor
Ekli depolama olarak Block Store'u (Amazon EBS) kullanın.
Bir çözüm mimarı, yeni oluşturulan tüm Amazon EBS'lerin uyumlu olmasını sağlayacak bir çözüm tasarlamalıdır.
birimler varsayılan olarak şifrelenir. Çözüm aynı zamanda şifrelenmemiş verilerin oluşturulmasını da önlemelidir.
EBS hacimleri.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 hesap özelliklerini her zaman yeni EBS birimlerini şifreleyecek şekilde yapılandırın.

B. AWS Config'i kullanın. Şifrelenmiş birimler tanımlayıcısını yapılandırın. Varsayılan AWS Anahtarını uygulayın
Yönetim Hizmeti (AWS KMS) anahtarı.

C. EBS birimlerinin şifrelenmiş kopyalarını oluşturmak için AWS Systems Manager'ı yapılandırın. Yeniden yapılandır
EC2 bulut sunucularının şifrelenmiş birimleri kullanması.

D. AWS Key Management Service'de (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Yapılandır
AWS Migration Hub, şirket iş yüklerini taşırken anahtarı kullanacak.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 hesap özelliklerini her zaman yeni EBS birimlerini şifreleyecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 888
Bir e-ticaret şirketi, şirketin web sitesinden kullanıcı tıklama akışı verilerini toplamak istiyor
gerçek zamanlı analiz. Web sitesinde gün boyunca dalgalanan trafik düzenleri yaşanıyor.
şirketin değişen trafik seviyelerine uyum sağlayabilecek ölçeklenebilir bir çözüme ihtiyacı var.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Kinesis Data Streams'deki bir veri akışını isteğe bağlı modda kullanarak,
tıklama akışı verileri. Verileri gerçek zamanlı olarak işlemek için AWS Lambda'yı kullanın.

B. Tıklama akışı verilerini yakalamak için Amazon Kinesis Data Firehose'u kullanın. İşlemek için AWS Glue'yu kullanın
verileri gerçek zamanlı olarak

C. Tıklama akışı verilerini yakalamak için Amazon Kinesis Video Streams'i kullanın. İşlemek için AWS Glue'yu kullanın
verileri gerçek zamanlı olarak

D. Apache Flink için Amazon Managed Service'i kullanın (önceden Amazon Kinesis Data olarak biliniyordu)
Analytics) tıklama akışı verilerini yakalamak için. Verileri gerçek zamanlı olarak işlemek için AWS Lambda'yı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Tıklama akışı verilerini yakalamak için Amazon Kinesis Data Streams'te isteğe bağlı modda bir veri akışı kullanın. Verileri gerçek zamanlı olarak işlemek için AWS Lambda'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 889
Küresel bir şirket iş yüklerini AWS'de çalıştırıyor. Şirketin uygulaması Amazon S3'ü kullanıyor
Hassas veri depolama ve analiz için AWS Bölgelerindeki paketler. Şirket mağazaları
Her gün birden fazla S3 klasöründe milyonlarca nesne. Şirket, tüm S3 paketlerini tanımlamak istiyor
sürüm oluşturma etkin değil.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Olmayan tüm S3 klasörlerini tanımlamaya yönelik bir kurala sahip bir AWS CloudTrail etkinliği oluşturun.
Bölgeler arasında sürüm oluşturma etkin.

B. Sürüm oluşturma özelliği etkin olmayan tüm S3 klasörlerini belirlemek için Amazon S3 Storage Lens'i kullanın.
Bölgeler.

C. Sürüm oluşturma özelliği etkin olmayan tüm S3 klasörlerini belirlemek için S3 için IAM Erişim Analiz Aracı'nı etkinleştirin
Bölgeler genelinde.

D. Olmayan tüm S3 klasörlerini tanımlamak için bir S3 Çok Bölgeli Erişim Noktası oluşturun.
Bölgeler arasında sürüm oluşturma etkin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bölgeler genelinde sürüm oluşturma özelliği etkin olmayan tüm S3 klasörlerini belirlemek için Amazon S3 Storage Lens'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 890
Bir şirketin, üreten bir uygulama için Amazon S3 depolama maliyetlerini optimize etmesi gerekiyor
yeniden oluşturulamayan birçok dosya. Her dosya yaklaşık 5 MB boyutundadır ve Amazon S3'te depolanır.
Standart depolama.
Dosyaların silinebilmesi için şirketin dosyaları 4 yıl süreyle saklaması gerekmektedir. Dosyalar olmalıdır
hemen erişilebilir. Dosyalara nesne oluşturulduktan sonraki ilk 30 günde sıklıkla erişilir,
ancak ilk 30 günden sonra nadiren erişilir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Dosyaları 30 gün sonra S3 Glacier Instant Retrieval'a taşımak için bir S3 Yaşam Döngüsü ilkesi oluşturun
nesne oluşturma. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.

B. Dosyaları S3 One Zone-Infrequent Access'e (S3 One) taşımak için bir S3 Yaşam Döngüsü ilkesi oluşturun
Bölge-IA) nesne oluşturulduktan 30 gün sonra. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.

C. Dosyaları S3 Standart-Nadir Erişime (S3) taşımak için bir S3 Yaşam Döngüsü ilkesi oluşturun
Standart-IA) nesne oluşturulduktan 30 gün sonra. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.

D. Dosyaları S3 Standart-Nadir Erişime (S3) taşımak için bir S3 Yaşam Döngüsü ilkesi oluşturun
Standart-IA) nesne oluşturulduktan 30 gün sonra. Dosyaları S3 Glacier Esnek Erişim'e taşıyın 4 yıl
nesne oluşturulduktan sonra.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Dosyaları, nesne oluşturulduktan 30 gün sonra S3 Glacier Instant Retrieval'a taşımak için bir S3 Yaşam Döngüsü ilkesi oluşturun. Nesne oluşturulduktan 4 yıl sonra dosyaları silin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 891
Bir şirket, kritik depolama uygulamasını AWS Cloud'da çalıştırıyor. Uygulama Amazon'u kullanıyor
İki AWS Bölgesinde S3. Şirket, uygulamanın uzak kullanıcı verilerini
genel ağ tıkanıklığı olmadan en yakın S3 paketi. Şirket ayrıca uygulamanın
Amazon S3'ün en az düzeyde yönetimiyle yük devretme.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İki Bölge arasında aktif-aktif bir tasarımın uygulanması. Kullanılacak uygulamayı yapılandırma
kullanıcıya en yakın bölgesel S3 uç noktaları.

B. S3 Çok Bölgeli Erişim Noktalarıyla aktif-pasif bir yapılandırma kullanın. Küresel bir oluştur
Bölgelerin her biri için uç nokta.

C. Kullanıcı verilerini kullanıcıya en yakın bölgesel S3 uç noktalarına gönderin. S3 hesapları arası yapılandırma
S3 paketlerini senkronize tutmak için çoğaltma kuralı.

D. Amazon S3'ü, Çok Bölgeli Erişim Noktalarını aktif-aktif bir yapılandırmada kullanacak şekilde kurun.
tek küresel uç nokta. S3 Bölgeler Arası Çoğaltma'yı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon S3'ü, Çok Bölgeli Erişim Noktalarını tek bir küresel uç noktayla aktif-aktif bir yapılandırmada kullanacak şekilde ayarlayın. S3 Bölgeler Arası Çoğaltma'yı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).

---

---

Soru 892
Bir şirket, bir veri merkezini şirket içi konumundan AWS'ye taşıyor. Şirket
bireysel sanal sunucularda barındırılan çeşitli eski uygulamalar. Değişiklikler
uygulama tasarımları yapılamaz.
Her bir sanal sunucu şu anda kendi EC2 bulut sunucusu olarak çalışmaktadır. Bir çözüm mimarının ihtiyacı var
AWS'ye geçişten sonra uygulamaların güvenilir ve hataya dayanıklı olmasını sağlamak.
uygulamalar Amazon EC2 bulut sunucularında çalışacaktır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. En az bir ve en fazla bir taneden oluşan bir Otomatik Ölçeklendirme grubu oluşturun. Bir oluştur
Her uygulama örneğinin Amazon Machine Image'ı (AMI). EC2 bulut sunucuları oluşturmak için AMI'yi kullanın
Otomatik Ölçeklendirme grubunda Otomatik Ölçeklendirmenin önünde bir Uygulama Yük Dengeleyicisi yapılandırın
grup.

B. Her uygulamayı barındıran EC2 bulut sunucusunun saatlik yedeğini oluşturmak için AWS Backup'ı kullanın.
Yedeği Amazon S3'te ayrı bir Erişilebilirlik Alanında saklayın. Olağanüstü durum kurtarmayı yapılandırma
Her uygulamanın EC2 örneğini en son yedeklemesinden geri yükleme işlemi.

C. Her uygulama örneğinin bir Amazon Machine Image'ını (AMI) oluşturun. İki yeni EC2'yi piyasaya sürün
AMI'den örnekler. Her EC2 bulut sunucusunu ayrı bir Erişilebilirlik Alanına yerleştirin. Bir yapılandırın
Hedef olarak EC2 bulut sunucularını içeren Ağ Yük Dengeleyici.

D. Her uygulamayı EC2 bulut sunucusundan taşımak için AWS Mitigation Hub Refactor Spaces'ı kullanın.
Her uygulamanın işlevselliğini ayrı bileşenlere ayırın. Her uygulamayı barındırın
AWS Fargate başlatma türüyle Amazon Elastic Container Service'te (Amazon ECS).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her uygulama örneğinin bir Amazon Machine Image'ını (AMI) oluşturun. AMI'den iki yeni EC2 bulut sunucusunu başlatın. Her EC2 bulut sunucusunu ayrı bir Erişilebilirlik Alanına yerleştirin. Hedef olarak EC2 bulut sunucularını içeren bir Ağ Yük Dengeleyicisi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 893
Bir şirket, her iş yükü için bir AWS hesabı oluşturarak iş yüklerini izole etmek istiyor.
Şirketin iş yükleri için ağ bileşenlerini merkezi olarak yöneten bir çözüme ihtiyacı var.
Çözüm ayrıca otomatik güvenlik kontrollerine (korkuluklara) sahip hesaplar oluşturmalıdır.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Hesapları dağıtmak için AWS Control Tower'ı kullanın. VPC'si olan bir ağ hesabı oluşturun
özel alt ağlar ve genel alt ağlar. Paylaşmak için AWS Resource Access Manager'ı (AWS RAM) kullanın
iş yükü hesaplarının bulunduğu alt ağlar.

B. Hesapları dağıtmak için AWS Organizasyonlarını kullanın. VPC'si olan bir ağ hesabı oluşturun
özel alt ağlar ve genel alt ağlar. Paylaşmak için AWS Resource Access Manager'ı (AWS RAM) kullanın
iş yükü hesaplarının bulunduğu alt ağlar.

C. Hesapları dağıtmak için AWS Control Tower'ı kullanın. Her iş yükü hesabına bir VPC dağıtın.
Bir geçiş ağ geçidi eki kullanarak her VPC'yi bir inceleme VPC'si üzerinden yönlendirecek şekilde yapılandırın.

D. Hesapları dağıtmak için AWS Organizasyonlarını kullanın. Her iş yükü hesabına bir VPC dağıtın.
Bir geçiş ağ geçidi eki kullanarak her VPC'yi bir inceleme VPC'si üzerinden yönlendirecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Hesapları dağıtmak için AWS Control Tower'ı kullanın. Özel alt ağlara ve genel alt ağlara sahip bir VPC'ye sahip bir ağ hesabı oluşturun. Alt ağları iş yükü hesaplarıyla paylaşmak için AWS Resource Access Manager'ı (AWS RAM) kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 894
Bir şirket, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında bir web sitesi barındırıyor
(ALB). Web sitesi statik içerik sunmaktadır. Web sitesi trafiği artıyor. Şirket istiyor
Web sitesi barındırma maliyetlerini en aza indirin.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Web sitesini bir Amazon S3 klasörüne taşıyın. Şunlar için bir Amazon CloudFront dağıtımı yapılandırın:
S3 kovası.

B. Web sitesini bir Amazon S3 klasörüne taşıyın. Şunlar için bir Amazon ElastiCache kümesi yapılandırın:
S3 kovası.

C. Web sitesini AWS Amplify'a taşıyın. Amplify web sitesine çözümlemek için bir ALB yapılandırın.

D. Web sitesini AWS Amplify'a taşıyın. Web sitesini önbelleğe almak için EC2 örneklerini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Web sitesini bir Amazon S3 klasörüne taşıyın. S3 grubu için bir Amazon CloudFront dağıtımı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 895
Bir şirket, bir medya uygulaması için paylaşılan bir depolama çözümü uyguluyor.
AWS'deki ana bilgisayarlar. Şirketin, depolanan verilere erişmek için KOBİ istemcilerini kullanma becerisine ihtiyacı var.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Bir AWS Storage Gateway Birim Ağ Geçidi oluşturun. Gerekli olanı kullanan bir dosya paylaşımı oluşturun
istemci protokolü. Uygulama sunucusunu dosya paylaşımına bağlayın.

B. Bir AWS Storage Gateway Teyp Ağ Geçidi oluşturun. Bantları Amazon S3'ü kullanacak şekilde yapılandırın. Bağlan
uygulama sunucusunu Bant Ağ Geçidine bağlayın.

C. Bir Amazon EC2 Windows örneği oluşturun. Windows dosya paylaşım rolünü yükleyin ve yapılandırın
örnek. Uygulama sunucusunu dosya paylaşımına bağlayın.

D. Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Uygulama sunucusunu şuraya bağlayın:
dosya sistemi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Uygulama sunucusunu dosya sistemine bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 896
Bir şirket, üretim uygulamasının olağanüstü durum kurtarma (DR) stratejisini tasarlıyor.
uygulama us-east-1'deki bir Amazon Aurora kümesindeki MySQL veritabanı tarafından desteklenmektedir
Bölge. Şirket, DR Bölgesi olarak us-west-1 Bölgesini seçmiştir.
Şirketin hedef kurtarma noktası hedefi (RPO) 5 dakikadır ve hedef kurtarma süresi
Hedef (RTO) 20 dakikadır. Şirket konfigürasyon değişikliklerini en aza indirmek istiyor.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. us-west-1'de, üretim uygulamasının Aurora'sına benzer boyutta bir Aurora okuma kopyası oluşturun
MySQL küme yazıcısı örneği.

B. Aurora kümesini Aurora global veritabanına dönüştürün. Yönetilen yük devretmeyi yapılandırın.

C. us-west-1'de Bölgeler Arası Çoğaltma özelliğine sahip yeni bir Aurora kümesi oluşturun.

D. us-west-1'de yeni bir Aurora kümesi oluşturun. AWS Database Migration Service'i (AWS DMS) kullanın
her iki kümeyi de senkronize etmek için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Aurora kümesini Aurora global veritabanına dönüştürün. Yönetilen yük devretmeyi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 897
Bir şirket, her hafta çalışma haftasının ilk gününden önce kritik bir veri analizi işi yürütüyor.
İşin analizinin tamamlanması en az 1 saat gerektirir. İş durumsaldır ve tolere edilemez
kesintiler. Şirketin işi AWS'de yürütmek için bir çözüme ihtiyacı var.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İş için bir kapsayıcı oluşturun. İşi Amazon'da AWS Fargate görevi olarak çalışacak şekilde planlayın
Amazon EventBridge Planlayıcı'yı kullanarak Elastic Container Service (Amazon ECS) kümesi.

B. İşi bir AWS Lambda işlevinde çalışacak şekilde yapılandırın. Amazon'da planlanmış bir kural oluşturma
Lambda işlevini çağırmak için EventBridge.

C. Amazon Linux çalıştıran Amazon EC2 Spot Bulut Sunucularının Otomatik Ölçeklendirme grubunu yapılandırın.
Analizi çalıştırmak için örneklerde bir crontab girişi yapılandırın.

D. İşi çalıştırmak için bir AWS DataSync görevi yapılandırın. Görevi çalıştırmak için bir cron ifadesi yapılandırın
bir program.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İş için bir kapsayıcı oluşturun. Amazon EventBridge Planlayıcı'yı kullanarak işi bir Amazon Elastic Container Service (Amazon ECS) kümesinde AWS Fargate görevi olarak çalışacak şekilde planlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 898
Bir şirket iş yüklerini AWS Cloud'da çalıştırıyor. Şirket güvenliği merkezi olarak toplamak istiyor
Tüm şirket genelinde güvenliği değerlendirmek ve iş yükü korumasını iyileştirmek için veriler.
Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. AWS Lake Formation'da bir veri gölü yapılandırın. Güvenliği almak için AWS Glue tarayıcılarını kullanın
verileri veri gölüne aktarın.

B. Güvenlik verilerini .csv formatında toplamak için bir AWS Lambda işlevi yapılandırın. Verileri yükleyin
bir Amazon S3 klasörüne.

C. Güvenlik verilerini toplamak için Amazon Security Lake'te bir veri gölü yapılandırın. Verileri şuraya yükleyin:
bir Amazon S3 kovası.

D. Kurulumu yüklemek için bir AWS Database Migration Service (AWS DMS) çoğaltma örneğini yapılandırın.
güvenlik verilerini bir Amazon RDS kümesine aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Güvenlik verilerini toplamak için Amazon Security Lake'te bir veri gölü yapılandırın. Verileri bir Amazon S3 klasörüne yükleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 899
Bir şirket, beş şirket içi uygulamayı AWS Cloud'daki VPC'lere taşıyor. Her biri
uygulama şu anda şirket içindeki yalıtılmış sanal ağlarda dağıtılmaktadır ve dağıtılması gerekmektedir
AWS Cloud'da da benzer şekilde. Uygulamaların paylaşılan bir hizmet VPC'sine ulaşması gerekir. hepsi
Uygulamaların birbirleriyle iletişim kurabilmesi gerekir.
Geçiş başarılı olursa şirket geçiş sürecini 100'den fazla kez tekrarlayacak
uygulamalar.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Uygulama VPC'leri ile paylaşılan hizmetler VPC'si arasında yazılım VPN tünelleri dağıtın. Ekle
alt ağlarındaki uygulama VPC'leri arasında paylaşılan hizmetler VPC'sine yönlendirme yapar.

B. Uygulama VPC'leri ile paylaşılan hizmetler VPC'si arasında VPC eşleme bağlantılarını dağıtın.
Alt ağlarındaki uygulama VPC'leri arasındaki rotaları, paylaşılan hizmetler VPC'sine aşağıdaki adresten ekleyin:
eşleme bağlantısı.

C. Uygulama VPC'leri ile paylaşılan VPC'ler arasında bir AWS Direct Connect bağlantısı dağıtın
hizmetler VPAdd, alt ağlarındaki uygulama VPC'lerinden paylaşılan hizmetler VPC'sine yönlendirir ve
uygulamaların VPC'leri. Paylaşılan hizmetler VPC alt ağlarından uygulamalara rota ekleyin
VPC'ler.

D. Toplu taşıma ağ geçidi ile uygulama arasındaki ilişkileri içeren bir toplu taşıma ağ geçidi dağıtın
VPC'ler ve paylaşılan hizmetler VPC'si. Alt ağlarındaki uygulama VPC'leri arasına rotalar ekleyin
ve uygulama VPC'lerini, geçiş ağ geçidi aracılığıyla paylaşılan hizmetler VPC'sine.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Toplu taşıma ağ geçidi ile uygulama VPC'leri ve paylaşılan hizmetler VPC'si arasındaki ilişkilere sahip bir toplu taşıma ağ geçidi dağıtın. Alt ağlarındaki uygulama VPC'leri ile uygulama VPC'leri arasındaki rotaları, geçiş ağ geçidi aracılığıyla paylaşılan hizmetler VPC'sine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
