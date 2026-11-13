# CAA Sınav Soruları - Resmi Referanslı ve Açıklamalı - Bölüm 02

> **Soru Aralığı:** 26 - 50 / Toplam: 63

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru 26 / 63 ·

Dosya: 26.jpeg · Soru 28/65

Bir şirket, özel alt ağlardaki Amazon ECS görevlerinde konteynerli uygulamaları çalıştırıyor.
ECS görevleri, konteyner görüntülerini Amazon ECR'den almalı ve uygulama günlüklerini
Amazon CloudWatch Günlükleri. Şirketin ECS görevleri arasındaki tüm trafiğe ihtiyacı var ve
Amazon ECR ve CloudWatch Log'ları genel IP kullanmadan AWS ağında kalacak
adresler. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A) Amazon ECR ve CloudWatch Logs için arayüz VPC uç noktaları oluşturun. Trafiği yönlendir
ECS görevlerinden VPC uç noktalarına kadar.

B) Her özel alt ağa bir NAT ağ geçidi dağıtın. ECS görevlerinden gelen trafiği şu şekilde yönlendirin:
NAT ağ geçitleri.

C) VPC için bir internet ağ geçidi yapılandırın. İnternet ağ geçidini özel ağ geçidine bağlayın
ECS görev bağlantısı sağlamak için alt ağlar.

D) VPC'den AWS hizmetlerine bir AWS Direct Connect bağlantısı kurun. Trafiği yönlendir
ECS görevlerinden Direct Connect bağlantısı aracılığıyla.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: ECR ve CloudWatch Logs için arayüz VPC endpoint'leri, ECS görevlerinin trafiğini AWS ağında tutar ve genel IP gerektirmez. B'deki NAT gateway trafiği Elastic IP üzerinden internete çıkarır ve ek ücret doğurur. C'deki internet gateway genel IP gerektirir ve gereksinimi ihlal eder. D'deki Direct Connect, AWS servislerine erişim için gereksiz ve pahalı bir çözümdür.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/vpc-endpoints.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/vpc-endpoints.html)
>   - [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/vpc-endpoints.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/vpc-endpoints.html)

---

---

Soru 27 / 63 · Dosya: 27.jpeg · Soru 29/65

Bir şirket bir uygulamayı AWS Cloud'a taşıyor. Uygulama bir şekilde çalışır
şirket içi veri merkezi ve binlerce görüntüyü monte edilmiş bir NFS dosya sistemine yazar
her gece. Şirket uygulamayı taşıdıktan sonra, şirket uygulamayı barındıracaktır.
Amazon EFS dosya sistemine sahip bir Amazon EC2 bulut sunucusundaki uygulama.
şirket, AWS'ye bir AWS Direct Connect bağlantısı kurdu. Göçten önce
geçiş, bir çözüm mimarının yeni oluşturulan süreci kopyalayacak bir süreç inşa etmesi gerekir.
şirket içi görüntüleri EFS dosya sistemine aktarın. Operasyonel açıdan EN verimli yol nedir?
görüntüleri çoğaltmak mı istiyorsunuz?

A) Şirket içi dosyadan aws s3 senkronizasyon komutunu çalıştırmak için periyodik bir işlem yapılandırın
sistemi Amazon S3'e aktarın. Olay bildirimlerini işlemek için bir AWS Lambda işlevi yapılandırın
Amazon S3'ten görüntüleri Amazon S3'ten EFS dosya sistemine kopyalayın.

B) NFS bağlama noktasına sahip bir AWS Storage Gateway dosya ağ geçidini dağıtın. Dosyayı bağlayın
şirket içi sunucudaki ağ geçidi dosya sistemi. Periyodik olarak kopyalamak için bir işlem yapılandırın
görüntüleri montaj noktasına aktarın.

C) NFS dosyasına erişimi olan şirket içi bir sunucuya bir AWS DataSync aracısı dağıtın
sistem. Genel bir ağ kullanarak verileri Direct Connect bağlantısı üzerinden bir S3 klasörüne gönderin
VIF. Amazon S3'ten olay bildirimlerini işlemek için bir AWS Lambda işlevi yapılandırın ve
görüntüleri Amazon S3'ten EFS dosya sistemine kopyalayın.

D) NFS dosyasına erişimi olan şirket içi bir sunucuya bir AWS DataSync aracısı dağıtın
sistem. Verileri Direct Connect bağlantısı üzerinden bir AWS PrivateLink arayüzü VPC'sine gönderin
Özel bir VIF kullanarak Amazon EFS için uç nokta. DataSync zamanlanmış görevini yapılandırmak için
görüntüleri her 24 saatte bir EFS dosya sistemine gönderin.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: DataSync ajanı yerel NFS dosya sistemine erişir, veriyi Direct Connect üzerinden taşır ve zamanlanmış bir DataSync görevi görüntüleri EFS'e düzenli olarak kopyalar; en az ek bileşenle yönetilen çözümdür. A, betik ve Lambda ile iki aşamalı bir S3 süreci gerektirir. B'deki Storage Gateway file gateway EFS'e değil kendi S3 destekli paylaşımına yazar. C de S3 ve Lambda ara adımını ekleyerek yönetim yükünü artırır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html](https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html)
>   - [https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html)

---

---

Soru 28 / 63 · Dosya: 28.jpeg · Soru 30/65

Bir şirketin uygulaması Ağ Yük Dengeleyicileri, Otomatik Ölçeklendirme gruplarını ve Amazon EC2'yi kullanıyor
bulut sunucuları ve bir Amazon VPC'de dağıtılan veritabanları. Şirket istiyor
ağ arayüzlerine giden ve ağ arayüzlerinden gelen trafikle ilgili bilgileri neredeyse gerçek zamanlı olarak yakalar
Amazon VPC'si. Şirket, bilgileri Amazon OpenSearch Service'e göndermek istiyor
analiz için. Bu gereksinimleri hangi çözüm karşılayacak?

A) Amazon CloudWatch Logs'da bir günlük grubu oluşturun. Göndermek için VPC Akış Günlüklerini yapılandırın
verileri günlük grubuna kaydedin. Günlükleri günlükten yayınlamak için Amazon Kinesis Data Streams'i kullanın
grubu OpenSearch Hizmetine bağlayın.

B) Amazon CloudWatch Logs'ta bir günlük grubu oluşturun. Göndermek için VPC Akış Günlüklerini yapılandırın
verileri günlük grubuna kaydedin. Günlük grubundan günlüklerin akışını sağlamak için Amazon Data Firehose'u kullanın
OpenSearch Hizmetine.

C) AWS CloudTrail'de bir iz oluşturun. Günlük verilerini şuraya göndermek için VPC Akış Günlüklerini yapılandırın:
iz. Günlükleri izden OpenSearch'e aktarmak için Amazon Kinesis Data Streams'i kullanın
Hizmet.

D) AWS CloudTrail'de bir iz oluşturun. Günlük verilerini şuraya göndermek için VPC Akış Günlüklerini yapılandırın:
iz. Günlükleri izden OpenSearch Hizmetine aktarmak için Amazon Data Firehose'u kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: VPC Flow Logs ağ arayüzü trafik kayıtlarını CloudWatch Logs log grubuna gönderir ve Amazon Data Firehose bu logları OpenSearch Service'e yönetilen şekilde iletir. C ve D, VPC Flow Logs için hedef olmayan CloudTrail trail'lerini kullanır (CloudTrail API çağrılarını kaydeder). A, OpenSearch'e teslim için ek bir tüketici gerektirdiğinden B kadar uygun değildir.

---

---

Soru 29 / 63 · Dosya: 29.jpeg · Soru 31/65

Bir şirket, kullanıcıların yüklediği belgeleri işlemek için yeni bir uygulama geliştiriyor.
uygulamanın işlenmiş belgeleri e-posta iletileriyle kullanıcılara geri göndermesi gerekir.
Uygulama, işlenemeyen belgeleri saklayacak bir mekanizma içermelidir.
Uygulama, yüklenen belgeleri 18 aya kadar kalıcı olarak saklamalıdır. Uygulama
Belgeleri kullanıcılar yükler yüklemez işlemelidir. Şirket kullanmak istiyor
Amazon SQS kuyrukları ve Amazon SNS konuları. Hangi eylem kombinasyonu karşılanacak
Bu gereksinimler EN AZ yönetim masrafıyla mı karşılanıyor? (ÜÇ'ü seçin.)

A) Amazon EC2 Auto'nun göndereceği tüm mesajları depolamak için bir SQS teslim edilmeyecek ileti kuyruğu yapılandırın.
Ölçeklendirme grubu işlem yapmıyor.

B) Yüklenen belgeleri bir Amazon S3 klasöründe saklayın. Bir S3 etkinliğini yapılandırma
Her yeni belge için bir SNS konusuna bir mesaj yayınlama bildirimi.

C) Bir SQS kuyruğuna bir SNS konusuna abone olun. Mesaj eklemek için konuyu yapılandırın
kuyruk. Kuyruğu tüketmek için bir AWS Lambda işlevi yapılandırın.

D) AWS Lambda'nın göndereceği tüm mesajları depolamak için bir SQS teslim edilmeyecek ileti kuyruğu yapılandırın
fonksiyon işlemiyor.

E) Bir SNS konusuna bir SQS kuyruğuna abone olun. Mesaj eklemek için konuyu yapılandırın
kuyruk. Sırayı kullanmak için bir Amazon EC2 Auto Scaling grubu yapılandırın.

F) Yüklenen belgeleri bir Amazon Kinesis veri akışında saklayın. AWS Lambda'yı kullanın
akıştan veri okuma ve bir SNS konusuna mesaj gönderme işlevi.

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevaplar B, C ve D'dir: S3 yeni belge olaylarını SNS konusuna yayınlar (B); SQS kuyruğu SNS konusuna abone olarak mesajları alır ve Lambda kuyruğu tüketir (C); Lambda'nın işleyemediği mesajlar DLQ'da saklanarak hata kaydı tutulur (D). A ve E, EC2 Auto Scaling grubunun yönetimini gerektirdiği için daha fazla operasyonel yük getirir; F ise SQS ve SNS yerine Kinesis kullanır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html)
>   - [https://docs.aws.amazon.com/sns/latest/dg/sns-fork-pipeline-as-subscriber.html](https://docs.aws.amazon.com/sns/latest/dg/sns-fork-pipeline-as-subscriber.html)
>   - [https://docs.aws.amazon.com/lambda/latest/dg/services-sqs-configure.html](https://docs.aws.amazon.com/lambda/latest/dg/services-sqs-configure.html)
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)

---

---

Soru 30 / 63 · Dosya: 30.jpeg · Soru 32 / 65

Bir şirket, birden fazla AWS hesabını yönetmek için AWS Organizasyonlarındaki bir kuruluşu kullanır.
Birden fazla ekip, IAM rollerini üstlenerek her AWS hesabına erişir. Her takımın kendine has bir özelliği var
IAM rolü. Her IAM rolünün benzersiz bir izin kümesi vardır. Güvenlik ekibi istiyor
Her AWS'de AWS Lambda işlevlerini dağıtarak bazı güvenlik görevlerini otomatikleştirin
hesap. Güvenlik ekibi, yalnızca güvenlik ekibi üyelerinin bunu yapabilmesini sağlamak ister.
Lambda işlevlerini doğrudan değiştirin. Bu gereksinimleri hangi çözüm karşılayacak?

A) Herhangi bir kuruluşun hizmette değişiklik yapmasını önleyen bir hizmet kontrol politikası (SCP) oluşturun.
Lambda, güvenlik ekibinin aşağıdaki kılavuzda belirtilen IAM rolü dışında çalışır:
Ana anahtar. SCP'yi kuruluşun köküne ekleyin.

B) Amazon Kaynak Adlarında (ARN'ler) yapılan tüm değişiklikleri reddeden bir IAM politikası oluşturun.
Lambda fonksiyonları. IAM politikasını her AWS hesabının kök kullanıcısına ekleyin.

C) Lambda işlevlerindeki tüm değişiklikleri reddeden bir hizmet kontrol ilkesi (SCP) oluşturun.
SCP'yi kuruluşun köküne ekleyin.

D) Herhangi bir kuruluşun değişiklik yapmasını önleyen bir hizmet kontrol politikası (SCP) oluşturun.
Lambda, güvenlik ekibinin aşağıdaki kılavuzda belirtilen IAM rolü dışında çalışır:
Koşul cümlesi. SCP'yi kuruluşun köküne ekleyin.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: SCP organizasyonun köküne uygulanır ve Lambda fonksiyonlarında değişikliği, Condition içinde belirtilen güvenlik ekibi rolü dışındaki tüm kimlikler için engeller. A'daki Principal öğesi SCP'lerde desteklenmediği için geçersizdir. B, IAM politikasını root kullanıcıya eklediği için çalışmaz ve C, güvenlik ekibi dahil herkes için değişikliği tamamen engeller.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html)
>   - [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)

---

---

Soru 31 / 63 · Dosya: 31.jpeg · Soru 33 / 65

Bir çözüm mimarı, Amazon EC2'de çalışan ölçeklenebilir bir web uygulaması tasarlıyor.
uygulama kullanıcıları giriş yaptıktan sonra aynı sunucuda kalmalıdır. Başvuru şu şekilde olmalıdır:
ortak istismarlardan korunur. Bu gereksinimleri hangi çözüm karşılayacak?

A) Hedef grupla bir Uygulama Yük Dengeleyicisi (ALB) oluşturun. Hedef grubu ekleyin
Otomatik Ölçeklendirme grubuna. Hedef grupta süreye dayalı yapışkanlığı etkinleştirin. Ortak
AWS Ağ Güvenlik Duvarı güvenlik duvarına sahip ALB.

B) Hedef grupla bir Ağ Yük Dengeleyicisi (NLB) oluşturun. Hedef grubu şuraya ekleyin:
Otomatik Ölçeklendirme grubu. Hedef grupta süreye dayalı yapışkanlığı etkinleştirin. İlişkilendir
AWS WAF web ACL'sine sahip NLB.

C) Hedef grupla bir Uygulama Yük Dengeleyicisi (ALB) oluşturun. Hedef grubu ekleyin
Otomatik Ölçeklendirme grubuna. Hedef grupta uygulama tabanlı yapışkanlığı etkinleştirin.
ALB'yi bir AWS WAF web ACL ile ilişkilendirin.

D) Hedef grupla bir Ağ Yük Dengeleyicisi (NLB) oluşturun. Hedef grubu şuraya ekleyin:
Otomatik Ölçeklendirme grubu. NLB'de hedef grup yapışkanlığını etkinleştirin. NLB'yi şununla ilişkilendirin:
AWS Ağ Güvenlik Duvarı güvenlik duvarı.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C'dir: ALB, uygulama tabanlı stickiness ile girişten sonra oturumu uygulamanın kendi çerezine göre aynı sunucuda tutar ve ALB'ye bağlanan AWS WAF web ACL ile yaygın web saldırılarına karşı koruma sağlar. B yanlıştır çünkü AWS WAF web ACL'i NLB'ye ilişkilendirilemez. A ve D, koruma için AWS Network Firewall'u bir load balancer'a bağlamayı önerir; bu, uygulama katmanındaki yaygın saldırıları filtrelemek için doğru yaklaşım değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/options.html;](https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/options.html;)
>   - [https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html)

---

---

Soru 32 / 63 · Dosya: 32.jpeg · Soru 34 / 65

Bir şirket müşterilerine üç katmanlı bir web uygulaması sunmaktadır. Her müşterinin bir
Uygulamanın dağıtıldığı AWS hesabı ve bu hesaplar
Şirketin AWS Organizasyonlarındaki organizasyonu. Müşterilerinin AWS hesaplarını korumak ve
Şirket, uygulamaları alışılmadık ve beklenmedik davranışlar açısından izlemek istiyor.
Şirketin müşteri VPC Akış Günlüklerini, AWS CloudTrail günlüklerini analiz etmesi ve izlemesi gerekiyor.
ve DNS günlükleri. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A) Kuruluştaki bir hesabı AWS Shield yönetici hesabı olarak atayın.
Her hesapta Shield ve Shield günlüklerini etkinleştirin ve hesapları Shield'a katılmaya davet edin
yönetici hesabı. Shield yönetici hesabındaki Shield bulgularını analiz edin.

B) Kuruluşta bir hesabı Amazon GuardDuty yöneticisi olarak atayın
hesap. Her hesapta GuardDuty'yi etkinleştirin ve hesapları GuardDuty'ye katılmaya davet edin
yönetici hesabı. GuardDuty yöneticisinde GuardDuty bulgularını analiz edin
hesap.

C) Kuruluştaki bir hesabı AWS WAF yönetici hesabı olarak atayın.
Her hesapta AWS WAF ve AWS WAF günlüklerini etkinleştirin ve hesapları,
AWS WAF yönetici hesabı. AWS WAF yöneticisinde AWS WAF günlüklerini analiz edin
hesap.

D) Kuruluştaki bir hesabı AWS Kaynak Erişim Yöneticisi (AWS) olarak atayın
RAM) yönetici hesabı. Her hesapta AWS RAM'i etkinleştirin ve hesapları
AWS RAM yönetici hesabına katılın. AWS RAM'deki AWS RAM günlüklerini analiz edin
yönetici hesabı.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B'dir: GuardDuty, CloudTrail yönetim olayları, VPC Flow Logs ve DNS loglarını otomatik analiz eden tehdit tespit servisidir ve AWS Organizations ile birden çok hesabı tek bir yönetici hesaptan izlemeye imkân verir. A (Shield) DDoS koruma servisidir, log tabanlı anomali tespiti yapmaz. C (WAF) web isteklerini filtreler, D (RAM) ise kaynak paylaşım servisidir; ikisi de bu izleme gereksinimini karşılamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html)

---

---

Soru 33 / 63 · Dosya: 33.jpeg · Soru 35/65

Bir şirket, depolamak için ilişkisel bir veritabanı kullanan bir e-ticaret uygulaması geliştiriyor
müşteri verileri ve sipariş geçmişi. Şirketin ayrıca 100 GB veri depolamak için bir çözüme ihtiyacı var
ürün resimleri. Şirket, uygulama için trafik akışının öngörülebilir olmasını bekliyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A) Veritabanı için Amazon RDS for MySQL'i kullanın. Ürün görsellerini bir Amazon'da saklayın
S3 kovası.

B) Veritabanı için Amazon DynamoDB'yi kullanın. Ürün görsellerini Amazon S3'te saklayın
kova.

C) Veritabanı için Amazon RDS for MySQL'i kullanın. Ürün görsellerini bir Amazon'da saklayın
Aurora MySQL veritabanı.

D) Üç Amazon EC2 bulut sunucusu oluşturun. Kullanılacak bulut sunucularına MongoDB yazılımını yükleyin
veritabanı olarak. Ürün görsellerini bir Amazon RDS for MySQL veritabanında saklayın.
Multi-AZ dağıtımı.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: RDS for MySQL müşteri ve sipariş verilerini ilişkisel olarak yönetirken, 100 GB ürün görselleri Amazon S3'te tutularak veritabanı depolama maliyeti düşürülür. B'deki DynamoDB ilişkisel veri modeli için uygun değildir. C görselleri Aurora veritabanında tutarak gereksiz pahalı bir yapı oluşturur; D ise kendi yönettiğiniz EC2 üzerinde MongoDB kullanır ve görselleri RDS'te saklar, bu da hem operasyonel yük hem maliyet açısından kötü bir seçimdir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html;](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html;)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

---

---

Soru 34 / 63 · Dosya: 34.jpeg · Soru 36/65

Bir sağlık şirketi, hasta verilerini Amazon RDS'de depolamak için bir uygulama kullanıyor
PostgreSQL veritabanı. Şirketin, aktarım halindeki verileri şifrelemek için bir çözüme ihtiyacı var.
uygulama veritabanına bağlanır. Bu gereksinimleri hangi çözüm karşılayacak?

A) Uygulamanın RDS veritabanına bağlanması için IAM kimlik doğrulamasını yapılandırın

B) AWS tarafından yönetilen bir AWS KMS anahtarını kullanarak RDS veritabanını şifreleyin.

C) RDS veritabanının anlık görüntüsünü oluşturun. Anlık görüntüyü yeni bir RDS örneğine geri yükleyin.
Yeni RDS veritabanında AWS KMS şifrelemesini etkinleştirin.

D) Bağlantıdaki SSL parametrelerini yapılandırmak için AWS tarafından sağlanan sertifika paketlerini indirin
dizeler

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D'dir: RDS, istemci ile veritabanı arasındaki SSL/TLS bağlantısını şifreler ve AWS'nin sağladığı sertifika paketleri bu bağlantıyı yapılandırmak için kullanılır. A bir kimlik doğrulama yöntemidir ve bağlantıdaki veriyi şifrelemez. B ve C veriyi depolama sırasında (at rest) KMS ile şifreler; veri veritabanına gönderilirken şifrelenmez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html)

---

---

Soru 35 / 63 · Dosya: 35.jpeg · Soru 37/65

Bir şirket, üç aylık mali tablolarını özel bir Amazon S3 klasöründe saklamayı planlıyor.
Mali tablolar S3'e kaydedildikten sonra değiştirilmemeli veya silinmemelidir
kova. Bu gereksinimleri hangi çözüm karşılayacak?

A) Yönetişim modunda S3 Object Lock ile S3 klasörünü oluşturun

B) MFA silme etkinken S3 paketini oluşturun

C) Uyumluluk modunda S3 Object Lock ile S3 grubunu oluşturun

D) İki AWS Bölgesinde S3 klasörleri oluşturun. Şunlar arasında S3 Bölgeler Arası Çoğaltma (CRR) kullanın:
Kovalar

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C'dir: S3 Object Lock compliance modunda korunan nesne sürümü, saklama süresi dolana kadar kök kullanıcı dahil hiçbir kullanıcı tarafından değiştirilemez veya silinemez. A (governance mode) s3:BypassGovernanceRetention izni olan kullanıcıların kilidi kaldırmasına izin verdiği için yetersizdir. B (MFA Delete) yalnızca kalıcı silmeyi MFA'ya bağlar, D ise çoğaltma sağlar ama değişikliği engellemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

---

---

Soru 36 / 63 · Dosya: 36.jpeg · Soru 38/65

Bir şirket, kendi sitesinde barındırdığı anketleri kullanarak müşteri memnuniyetini takip ediyor
web sitesi. Anketler bazen her saat başı binlerce müşteriye ulaşıyor. Anket sonuçları
şirket çalışanlarının ulaşabilmesi için şu anda şirkete e-posta mesajları gönderilmektedir.
Sonuçları manuel olarak inceleyin ve müşteri duyarlılığını değerlendirin. Şirket otomasyona geçmek istiyor
müşteri anketi süreci. Anket sonuçları önceki 12 aya ait mevcut olmalıdır.
Hangi çözüm bu gereksinimleri EN ölçeklenebilir şekilde karşılayacak?

A) Anket sonuçları verilerini, bağlı olan bir Amazon API Gateway uç noktasına gönderin.
bir Amazon Simple Queue Service (Amazon SQS) kuyruğu. Bir AWS Lambda işlevi oluşturun
SQS kuyruğunu yoklayın, duyarlılık analizi için Amazon Comprehend'i arayın ve sonuçları kaydedin
bir Amazon DynamoDB tablosuna. Tüm kayıtlar için TTL'yi gelecekte 365 güne ayarlayın.

B) Anket sonuçları verilerini Amazon EC2 örneğinde çalışan bir API'ye gönderin.
Anket sonuçlarını bir Amazon DynamoDB'de yeni bir kayıt olarak depolamak için API'yi yapılandırın
tablosunda duygu analizi için Amazon Comprehend'i arayın ve sonuçları bir saniyede kaydedin
DynamoDB tablosu. Tüm kayıtlar için TTL'yi gelecekte 365 güne ayarlayın.

C) Anket sonuçları verilerini bir Amazon S3 klasörüne yazın. S3 Etkinlik Bildirimlerini kullanarak
verileri okumak için bir AWS Lambda işlevini çağırın ve Amazon Rekognition'ı çağırın.
duygu analizi. Duygu analizi sonuçlarını ikinci bir S3 klasöründe saklayın. S3'ü kullanın
Nesnelerin 365 gün sonra sona ermesini sağlamak için her pakette yaşam döngüsü politikaları.

D) Anket sonuçları verilerini, bağlı olan bir Amazon API Gateway uç noktasına gönderin.
bir Amazon Simple Queue Service (Amazon SQS) kuyruğu. Çağırılacak SQS kuyruğunu yapılandırma
Duygu analizi için Amazon Lex'i çağıran ve sonuçları kaydeden bir AWS Lambda işlevi
bir Amazon DynamoDB tablosuna. Tüm kayıtlar için TTL'yi gelecekte 365 güne ayarlayın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: API Gateway ve SQS ile yüksek hacimli yanıtlar tamponlanır, Lambda kuyruğu işleyip Amazon Comprehend ile duygu analizi yapar ve sonuçları DynamoDB'ye yazar; TTL 365 gün olarak ayarlandığında son 12 ayın verisi korunur. B, EC2 üzerinde çalışan bir API nedeniyle ölçeklenebilirliği sınırlar. C metin duygu analizi için Rekognition kullanır, bu bir görüntü ve video servisidir; D ise duygu analizi için Amazon Lex (sohbet botu) kullanır, bu yanlış servistir.

---

---

Soru 37 / 63 · Dosya: 37.jpeg · Soru 39/65

Bir şirket, üretimi analiz eden toplu işleme işlerini yürütmek için AWS Batch'i kullanıyor
sensör verileri. İşler bir Amazon S3 klasöründeki girdi dosyalarını okur ve işlenen yazma işlemlerini gerçekleştirir
sonuçları bir Amazon Aurora MySQL veritabanına aktarır. S3 paketi ve Aurora veritabanı
uyumluluk gereksinimlerini karşılamak için kullanımda değilken şifrelenmelidir. Şirketin hibe vermesi gerekiyor
AWS Batch bilgi işlem ortamı, Amazon S3'ten okuma ve yazma işlemlerine güvenli erişim sağlar
veritabanı. Bu gereksinimleri hangi çözüm karşılayacak?

A) S3 klasörünü ve Aurora MySQL'i şifrelemek için bir AWS KMS müşteri tarafından yönetilen anahtar oluşturun
veritabanı. Anahtar ilkesinde kms:Decrypt ve kms:GenerateDataKey koşullarını kullanın.
AWS'de KMS anahtarına, Amazon S3'e ve Aurora'ya erişimi olan bir IAM rolü yapılandırın
Toplu iş tanımı.

B) S3 klasörünü ve Aurora MySQL'i şifrelemek için bir AWS KMS AWS yönetilen anahtarı oluşturun
veritabanı. Anahtar ilkesinde kms:Decrypt ve kms:GenerateDataKey koşullarını kullanın. Ekle
AWS Batch iş rolünü ana olarak kullanan bir S3 klasör politikası.

C) Bir paket politikası kullanarak S3'e yalnızca AWS Batch iş rolüne erişim izni verin. Bir VPC oluşturun
Aurora için şifreli erişime sahip uç nokta. Aurora güvenlik grubunu izin verecek şekilde yapılandırın
yalnızca AWS Batch bilgi işlem alt ağlarından gelen trafik.

D) Aurora MySQL kümesinde SSL/TLS uygulamasını etkinleştirin. S3 VPC'yi yapılandırma
yalnızca AWS Batch işinden erişime izin veren bir uç nokta politikası kullanmak için ağ geçidi uç noktası
rol. Aurora güvenlik grubunu yalnızca AWS Batch işleminden erişime izin verecek şekilde güncelleyin
alt ağlar.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: Müşteri yönetimli KMS anahtarı S3 ve Aurora verisini durağan halde şifreler ve anahtar politikasındaki kms:Decrypt ile kms:GenerateDataKey koşulları ile erişim, Batch iş rolü üzerinden kontrol edilir. B'deki AWS yönetilen anahtarın anahtar politikası değiştirilemez, bu yüzden bu koşullar uygulanamaz. C ve D erişimi ağ veya bucket politikalarıyla kısıtlar ancak verinin durağan halde şifrelenmesini sağlamaz; D yalnızca aktarım sırasındaki TLS'i ele alır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html;](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html;)
>   - [https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)

---

---

Soru 38 / 63 · Dosya: 38.jpeg · Soru 40/65

Bir medya şirketinin Windows tabanlı video düzenleme ortamını AWS'ye taşıması gerekiyor.
Şirketin mevcut ortamı, süreklilik gerektiren 4K video dosyalarını işliyor
Birden fazla eşzamanlı kullanıcı arasında saniyede 2 GB aktarım hızı. Şirketin deposu
İhtiyaçlar her hafta 1 TB artıyor. Şirketin, aşağıdakileri destekleyen paylaşılan bir dosya sistemine ihtiyacı var:
SMB protokolüdür ve depolama taleplerine göre otomatik olarak ölçeklenebilir. Hangi çözüm olacak
bu gereksinimleri karşılıyor mu?

A) SSD depolamaya sahip bir Amazon FSx for Windows File Server Multi-AZ dosya sistemini dağıtın.

B) Amazon EFS dosya sistemini Maksimum G/Ç modunda dağıtın. Bağlama hedeflerini birden çok şekilde sağlayın
Erişilebilirlik Alanları.

C) Persistent 2 dağıtım türüyle Amazon FSx for Luster dosya sistemini dağıtın.
Dosya sistemine 2 TB depolama alanı sağlayın.

D) Birden fazla önbelleğe alınmış ağ geçidi bulut sunucusu kullanarak Amazon S3 File Gateway'i dağıtın. Yapılandır
S3 Aktarım Hızlandırma.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: FSx for Windows File Server, SMB protokolünü destekleyen ve Windows iş yükleri için tasarlanmış paylaşımlı bir dosya sistemidir; Multi-AZ ve SSD yapılandırması yüksek verim ve dayanıklılık sağlar. B (EFS) NFS tabanlıdır ve Windows SMB istemcileriyle uyumlu değildir; C (FSx for Lustre) Linux tabanlı yüksek performanslı hesaplama içindir ve SMB sunmaz. D, nesne depolamaya dayalı bir ağ geçidi olduğundan bu düzenleme için uygun paylaşımlı dosya sistemi değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/fsx/latest/WindowsGuide/performance.html;](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/performance.html;)
>   - [https://docs.aws.amazon.com/fsx/latest/WindowsGuide/automate-storage-capacity-increase.html](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/automate-storage-capacity-increase.html)

---

---

Soru 39 / 63 · Dosya: 39.jpeg · Soru 41/65

Bir şirketin her gün 6 saat çalışan büyük bir veri iş yükü vardır. Şirket yapamaz
işlem çalışırken tüm verileri kaybedersiniz. Bir çözüm mimarı bir Amazon tasarlıyor
Bu kritik veri iş yükünü desteklemek için EMR kümesi yapılandırması. Hangi çözüm karşılanacak
bu gereksinimler EN uygun maliyetli mi?

A) Birincil düğümü ve çekirdek düğümleri çalıştıran uzun süre çalışan bir küme yapılandırın
İsteğe Bağlı Bulut Sunucuları ve Spot Bulut Sunucularındaki görev düğümleri.

B) İsteğe Bağlı olarak birincil düğümü ve çekirdek düğümleri çalıştıran geçici bir küme yapılandırın
Bulut Sunucuları ve Spot Bulut Sunucularındaki görev düğümleri.

C) İsteğe Bağlı Bulut Sunucusunda birincil düğümü çalıştıran geçici bir küme yapılandırın ve
Spot Bulut Sunucularındaki çekirdek düğümler ve görev düğümleri.

D) İsteğe Bağlı Bulut Sunucusunda birincil düğümü çalıştıran uzun süre çalışan bir küme yapılandırın,
Spot Bulut Sunucularındaki çekirdek düğümler ve Spot Bulut Sunucularındaki görev düğümleri.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B'dir: Geçici (transient) küme yalnızca 6 saatlik iş için çalışır ve iş bitince kapanır, bu da boşta geçen saatler için ücret ödenmesini önler. Primary ve core düğümler On-Demand olduğundan Spot kesintisiyle veri kaybı riski yoktur, task düğümleri ise Spot ile maliyeti düşürür. A kalıcı küme ile günün 18 saatini boşta ödemek anlamına gelir; C ve D'de core düğümler Spot üzerinde olduğundan kesinti halinde veri kaybı riski doğar.

---

---

Soru 40 / 63 · Dosya: 40.jpeg · Soru 42 / 65

Bir finansal analiz şirketi, geçmiş borsa verilerini Amazon S3'te topluyor
kova. Harici mali araştırma hesaplarının verilere erişmesi gerekir. Şirket istiyor
şirketin devam eden masraflarını azaltırken verileri diğer AWS hesapları için erişilebilir hale getirmek
maliyetler. Bu gereksinimleri hangi çözüm karşılayacak?

A) Paket için bir S3 arayüzü uç noktası oluşturun

B) S3 klasörünü Talep Eden Ödemeler grubu olarak yapılandırın.

C) Kovanın önüne bir Amazon CloudFront dağıtımı dağıtın

D) S3 Aktarım Hızlandırmasını etkinleştirin. Hızlandırılmış uç noktayı harici kullanıcılarla paylaşın
hesaplar

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B'dir: Requester Pays bucket'ta veri indirme ve istek maliyetini istekte bulunan hesap öder, depolama maliyetini ise bucket sahibi öder; böylece şirketin sürekli maliyetleri düşer. A (interface endpoint) yalnızca VPC içinden özel erişim sağlar ve dış hesaplar için maliyeti azaltmaz. C (CloudFront) ve D (Transfer Acceleration) ek ücret doğurur ve bu hedefle uyumlu değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html)

---

---

Soru 41 / 63 · Dosya: 41.jpeg · Soru 43 / 65

Bir şirket, şirketin video içeriği için Amazon S3 depolama maliyetlerini optimize etmek istiyor.
Şirketin video içeriğini, şirketin videoyu oluşturmasından 6 ay sonra arşivlemesi gerekiyor.
içerik. Şirketin içeriği 24 ay sonra silmesi gerekiyor. Hangi çözüm karşılanacak
Bu gereksinimler EN AZ operasyonel çabayla mı karşılanıyor?

A) İçeriği 6 saat sonra S3 Glacier Esnek Erişime geçirmek için S3 Intelligent-Tiering'i kullanın.
aylar.

B) İçeriği S3 Glacier'a geçirmek için bir Amazon EFS yaşam döngüsü yapılandırması oluşturun
6 ay sonra Esnek Geri Alma. 24 aylık bir Nesne Kilidi saklama süresi yapılandırın.

C) İçeriği 6 ay sonra S3 Glacier Deep Archive'a geçirmek için AWS DataSync'i kullanın.
Nesnelerin süresinin 24 ay sonra dolması için bir yaşam döngüsü kuralı yapılandırın.

D) İçeriği S3 Glacier Esnek'e geçirmek için bir S3 Yaşam Döngüsü yapılandırması oluşturun
Nesnelerin 6 ay sonra alınması ve nesnelerin süresinin 24 ay sonra dolması.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D seçeneği doğru: tek bir S3 Lifecycle kuralı, nesneleri 6. ayda S3 Glacier Flexible Retrieval'a taşıyıp 24. ayda sildiği için en az operasyonel çaba gerektirir. A yanlış çünkü Intelligent-Tiering nesneleri silmez ve Glacier Flexible Retrieval'a 6 aylık kuralla geçiş sunmaz. B yanlış çünkü EFS bir dosya sistemidir ve Object Lock silmeyi engeller, otomatik silme yapmaz. C yanlış çünkü DataSync bir veri aktarım aracıdır, yaşam döngüsü kuralının yerini tutmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)

---

---

Soru 42 / 63 · Dosya: 42.jpeg · Soru 44/65

Bir şirket birden fazla AWS hesabında birden fazla uygulama çalıştırıyor. Ağ oluşturma
Şirketin aylık AWS faturasının bir kısmı son 3 yılda önemli ölçüde arttı
haftalar. Şirketin hangi ağ kullanım türlerinin satışları artırdığını hızlı bir şekilde belirlemesi gerekiyor.
maliyet artışı. Şirket ayrıca günlük maliyet eğilimini öncekiyle karşılaştırmak istiyor
ay. Şirket özel bir raporlama çözümü oluşturmak istemiyor. Hangi çözüm
bu gereksinimleri karşılayacak mı?

A) Ağla ilgili maliyetleri analiz etmek, sonuçları kullanım türüne göre gruplandırmak için AWS Budgets'ı kullanın,
ve zaman aralıklarındaki günlük maliyetleri karşılaştırın.

B) Ağla ilgili maliyetleri analiz etmek ve sonuçları kullanıma göre gruplandırmak için AWS Cost Explorer'ı kullanın
Günlük maliyetleri yazın ve zaman aralıkları arasında karşılaştırın.

C) Ağ aktarım hızını ve işlenen bayt sayısını analiz etmek için Amazon CloudWatch'u kullanın, karşılaştırın
kullanım eğilimlerini öğrenin ve fatura artışını hesaplayın.

D) Ağla ilgili analizler yapmak için Amazon Athena ile AWS Maliyet ve Kullanım Raporlarını kullanın
ücretleri, kullanım sorguları oluşturun ve zaman aralıklarındaki maliyetleri karşılaştırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B seçeneği doğru: AWS Cost Explorer maliyetleri USAGE_TYPE boyutuna göre gruplayabilir ve günlük granülerlikle dönemleri karşılaştırabilir; hazır bir araç olduğu için özel rapor gerektirmez. A yanlış çünkü Budgets bütçe eşiği ve uyarı aracıdır, geçmiş maliyetlerin kullanım türüne göre ayrıntılı analizi için tasarlanmamıştır. C yanlış çünkü CloudWatch fatura verisi değil, metrik izler. D yanlış çünkü CUR ve Athena ile sorgu yazmak, şirketin istemediği özel bir raporlama çözümü gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html)
>   - [https://docs.aws.amazon.com/cost-management/latest/userguide/ce-modify.html](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-modify.html)

---

---

Soru 43 / 63 · Dosya: 43.jpeg · Soru 45/65

Bir çözüm mimarı us-west-1 Bölgesindeki bir uygulamayı yönetiyor ve
ABD-Doğu-1 Bölgesinde olağanüstü durum kurtarmayı hızlandırın. Amazon Aurora MySQL Veritabanı kümesinin ihtiyaçları
1 dakikalık bir RPO ve 2 dakikalık bir RTO. Bu gereksinimleri hangi yaklaşım karşılıyor?
olumsuz performans etkisi olmadan mı?

A) Eşzamanlı çoğaltmayı etkinleştirin.

B) Eşzamansız binlog çoğaltmasını etkinleştirin.

C) Bir Aurora Küresel Veritabanı oluşturun.

D) Aurora artımlı anlık görüntülerini abd-doğu-1 Bölgesine kopyalayın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C seçeneği doğru: Aurora Global Database, birincil bölgeden us-east-1'e asenkron replikasyon yapar, RPO genellikle saniyeler düzeyindedir ve birincil kümenin performansında belirgin bir ek yük oluşturmaz. A yanlış çünkü Aurora Global Database replikasyonu belgelerde asenkron olarak tanımlanır. B yanlış çünkü binlog replikasyonu manuel kurulum ve yönetim gerektirir, yönetilen failover sağlamaz ve kaynak performansını etkileyebilir. D yanlış çünkü artımlı snapshot kopyaları periyodik olduğu için RPO hedefini karşılamaz ve geri yükleme RTO'yu aşar.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html)

---

---

Soru 44 / 63 · Dosya: 44.jpeg · Soru 46/65

Bir şirket, büyük hacimli sensör verilerini işlemek için sunucusuz bir uygulama geliştiriyor.
Uygulama bir AWS Lambda işlevi kullanıyor ve verileri bir Amazon DynamoDB'de saklıyor
masa. Uygulamanın ara sıra ani artışlarla birlikte öngörülemeyen trafik modellerini ele alması gerekiyor
veri alımında. Şirket, yanıt vermek için uygulama performansını optimize etmek istiyor
talepte artışlar yaşanıyor. Bu gereksinimleri hangi çözüm karşılayacak?

A) Lambda işlevi için sağlanan eşzamanlılığı yapılandırın. İsteğe bağlı kapasiteyi kullanın
DynamoDB tablosu için mod.

B) Lambda işlevi için sağlanan eşzamanlılığı yapılandırın. Sağlanan kapasiteyi kullan
DynamoDB tablosu için mod.

C) Lambda işlevi için ayrılmış eşzamanlılığı yapılandırın. İsteğe bağlı kapasiteyi kullanın
DynamoDB tablosu için mod.

D) Lambda işlevi için ayrılmış eşzamanlılığı yapılandırın. Sağlanan kapasiteyi kullan
DynamoDB tablosu için mod.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A seçeneği doğru: provisioned concurrency Lambda ortamlarını önceden başlatarak soğuk başlatma gecikmesini azaltır, DynamoDB on-demand modu ise öngörülemeyen trafik artışlarını kapasite planlaması olmadan karşılar. B yanlış çünkü DynamoDB provisioned modu ani artışlar için kapasite planlaması gerektirir ve artışlarda kısıtlamaya yol açabilir. C ve D yanlış çünkü reserved concurrency yalnızca eşzamanlılık üst sınırını ayırır, soğuk başlatmayı azaltmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html)
>   - [https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html)

---

---

Soru 45 / 63 · Dosya: 45.jpeg · Soru 47/65

Bir şirket, Amazon RDS DB bulut sunucusunda kritik bir iş yükünü çalıştırıyor. şirket
Veritabanı bulut sunucusunun yüksek oranda kullanılabilir olması gerekiyor. Şirketin iyileşme süresine ihtiyacı var
5 dakikadan az. Bu gereksinimleri hangi çözüm karşılayacak?

A) Veritabanı bulut sunucusunun okuma kopyasını oluşturun.

B) Veritabanı bulut sunucusunun şablonunu oluşturmak için AWS CloudFormation'ı kullanın.

C) Veritabanı bulut sunucusunun periyodik anlık görüntülerini alın. Anlık görüntüleri Amazon S3'te saklayın.

D) Veritabanı bulut sunucusunu Multi-AZ dağıtımını kullanacak şekilde değiştirin.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D seçeneği doğru: Multi-AZ dağıtımında RDS, farklı Availability Zone'daki bekleme örneğine otomatik failover yapar ve belgelere göre bu süre tipik olarak 60-120 saniyedir, yani 5 dakikalık hedefin altındadır. A yanlış çünkü okuma kopyası okuma ölçeklemek için kullanılır, otomatik failover sağlamaz. B yanlış çünkü CloudFormation şablonu yalnızca altyapı tanımıdır, yüksek erişilebilirlik sağlamaz. C yanlış çünkü snapshot'tan geri yükleme 5 dakikalık süreyi aşabilir ve sürekli erişilebilirlik sağlamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.Failover.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.Failover.html)

---

---

Soru 46 / 63 · Dosya: 46.jpeg · Soru 48/65

Bir şirket, bir belgeyi desteklemek için Amazon EC2 İsteğe Bağlı Bulut Sunucularından oluşan bir filo işletiyor
değişken kullanım kalıplarına sahip işleme uygulaması. Şirket optimize etmek istiyor
Uygulamanın maliyetlerini hesaplayın. Şirketin tolere edebilecek bir çözüme ihtiyacı var
belge işleme işlerinde ara sıra kesintiler. Bunları hangi çözüm karşılayacak?
gereksinimler?

A) EC2 bulut sunucularını AWS Fargate Spot kullanan bir Amazon EKS kümesiyle değiştirin
kapasite.

B) Hangi bulut sunucusu tipinin kullanılacağını belirlemek için EC2 Spot Bulut Sunucusu yerleştirme puanı özelliğini kullanın
kullanın. Uygulamayı Spot Bulut Sunucularına dağıtın.

C) Tek bir EC2 Otomatik Ölçeklendirme grubu oluşturun. EC2 On-Demand'in karma yapılandırmasını ayarlayın
Bulut Sunucuları ve EC2 Spot Bulut Sunucuları.

D) EC2 İsteğe Bağlı Bulut Sunucularını kullanmaya devam edin. Dönüştürülebilir Rezerve Bulut Sunucuları satın alın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C seçeneği doğru: tek bir Auto Scaling grubunda karışık yapılandırma hem On-Demand hem Spot örnekleri çalıştırır, Spot ile maliyet tasarrufu sağlanır ve kesinti riski Capacity Rebalancing ile yönetilebilir. A maliyet açısından işe yarayabilir, ancak uygulamanın konteynerleştirilmesini ve EKS'e taşınmasını gerektirdiği için mevcut EC2 filosunu optimize eden istenen çözümle uyuşmaz. B yanlış çünkü Spot placement score bölge ve Availability Zone önerir, instance tipi seçmez ve dağıtım yapmaz. D yanlış çünkü Convertible Reserved Instances değişken kullanımda taahhüt maliyeti yaratır ve kesinti toleransı sağlamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/userguide/mixed-instances-groups-set-up-overview.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/mixed-instances-groups-set-up-overview.html)
>   - [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html)

---

---

Soru 47 / 63 · Dosya: 47.jpeg · Soru 49/65

Bir çözüm mimarı, iki genel alt ağ ve iki özel alt ağ içeren bir VPC oluşturur
alt ağlar. Kurumsal bir güvenlik talimatı, çözüm mimarının tüm çözümleri başlatmasını gerektirir.
Özel bir alt ağdaki Amazon EC2 bulut sunucuları. Ancak çözüm mimarı başlatıldığında
özel bir alt ağdaki 80 ve 443 numaralı bağlantı noktalarında bir web sunucusu çalıştıran bir EC2 bulut sunucusu, hayır
harici internet trafiği sunucuya bağlanabilir. Çözüm mimarı ne yapmalı?
Bu sorunu çözmek için?

A) EC2 örneğini özel bir alt ağdaki Otomatik Ölçeklendirme grubuna ekleyin. Şunlardan emin olun:
Web sitesine ilişkin DNS kaydı, Otomatik Ölçeklendirme grup tanımlayıcısına çözümlenir.

B) Genel bir alt ağda internete yönelik bir Uygulama Yük Dengeleyicisi (ALB) sağlayın. Ekle
ALB ile ilişkili hedef gruba EC2 örneği. DNS'nin olduğundan emin olun
Web sitesine ilişkin kayıt ALB'ye çözümlenir.

C) Özel bir alt ağda bir NAT ağ geçidi başlatın. Özel rota tablosunu güncelleyin
NAT ağ geçidine varsayılan bir rota eklemek için alt ağlar. Genel bir Elastik IP adresi ekleyin
NAT ağ geçidi.

D) EC2 örneğine bağlı güvenlik grubunun HTTP trafiğine izin verdiğinden emin olun
80 numaralı bağlantı noktasında ve 443 numaralı bağlantı noktasında HTTPS trafiğinde. Web sitesi için DNS kaydının olduğundan emin olun
EC2 örneğinin genel IP adresine çözümlenir.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B seçeneği doğru: ALB internete açık public subnet'te durur, EC2 örneği private subnet'te kalır ve hedef grup üzerinden trafik alır; DNS kaydı ALB'ye yönlendirilerek güvenlik zorunluluğu korunur. A yanlış çünkü Auto Scaling grubu tek başına internet trafiğini private subnet'e yönlendiremez. C yanlış çünkü NAT gateway yalnızca private subnet'ten dışa giden trafiğe izin verir, dışarıdan gelen bağlantıyı kabul etmez. D yanlış çünkü private subnet'teki örneğin internete açık bir yolu yoktur, güvenlik grubu değişikliği bunu çözmez.

---

---

Soru 48 / 63 · Dosya: 48.jpeg · Soru 50/65

Bir şirket, Amazon EC2 bulut sunucularında tek bir uygulamanın arkasında birden fazla web uygulaması çalıştırıyor
Uygulama Yük Dengeleyici (ALB). Uygulamada öngörülemeyen trafik artışları yaşanıyor
her gün boyunca. Trafik ani artışları yüksek gecikmeye neden olur. Öngörülemeyen yükselişler devam ediyor
3 saatten az. Şirketin neden olduğu gecikme sorununu çözmek için bir çözüme ihtiyacı var
trafik artışları. Bu gereksinimi hangi çözüm karşılayacak?

A) Otomatik Ölçeklendirme grubunda EC2 bulut sunucularını kullanın. ALB ve Otomatik Ölçeklendirme grubunu yapılandırma
hedef izleme ölçeklendirme politikası kullanmak için

B) Otomatik Ölçeklendirme grubunda EC2 Rezerve Bulut Sunucularını kullanın. Otomatik Ölçeklendirme grubunu yapılandırma
trafiğin yoğun olduğu saatlere dayalı olarak planlanmış bir ölçeklendirme politikası kullanmak

C) EC2 Spot Bulut Sunucularını Otomatik Ölçeklendirme grubunda kullanın. Otomatik Ölçeklendirme grubunu şu şekilde yapılandırın:
yoğun trafik saatlerine dayalı olarak planlanmış bir ölçeklendirme politikası kullanın

D) Otomatik Ölçeklendirme grubunda EC2 Rezerve Bulut Sunucularını kullanın. ALB'yi bir Ağ ile değiştirin
Yük Dengeleyici (NLB).

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A seçeneği doğru: ALB ile ilişkili hedef izleme politikası (ALBRequestCountPerTarget) trafik arttığında ASG kapasitesini otomatik artırıp azaltır, bu da öngörülemeyen ve kısa süreli yükü karşılar. B ve C yanlış çünkü zamanlanmış ölçekleme öngörülemeyen artışlara uymaz; Reserved örnekler ölçeklenmez, Spot örnekleri de kesintiye uğrayabilir. D yanlış çünkü NLB'ye geçmek kapasiteyi artırmaz ve gecikmenin asıl nedeni olan yetersiz kapasiteyi çözmez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredefinedMetricSpecification.html](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredefinedMetricSpecification.html)

---

---

Soru 49 / 63 · Dosya: 49.jpeg · Soru 51/65

Bir e-ticaret şirketi, AWS'de neredeyse gerçek zamanlı bir teklif verme platformu oluşturuyor.
şirket, uygulamayı bir Uygulama Yük Dengeleyicisinin (ALB) hedefi olarak dağıtır.
uygulama, teklif verme ve katalog bilgilerini bir Amazon DynamoDB tablosunda saklar.
DynamoDB tablosu ağır okuma yükleri alıyor. Şirket, bir özellik eklemek istiyor
Müşterilerin en çok teklif alan ürünleri görüntülemesine olanak sağlayan uygulama
önceki 24 saat. Şirketin teklif fiyatlarının güncellenmesini sağlayacak bir çözüme ihtiyacı var
neredeyse gerçek zamanlı olarak. Çözüm, DynamoDB tablosunun performansını etkilememelidir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A) Öğe teklif fiyatlarındaki değişiklikleri kopyalamak için bir Amazon Kinesis veri akışını yapılandırın
Amazon DynamoDB tablosunu Apache Flink için Amazon Managed Service'e aktarın. Teklifi yaz
fiyatlar DynamoDB tablosuna geri döner.

B) Amazon'a sıfır ETL veri aktarımı gerçekleştirmek için DynamoDB tablosunu yapılandırın
Her saat başı kırmızıya kayma masası. Uygulamayı, Redshift tablosunu sorgulayacak şekilde yapılandırın.
son teklif fiyatları.

C) Verileri bir DynamoDB anlık görüntüsünden bir AWS Glue bağlayıcısına aktarmak için bir AWS Glue bağlayıcı yapılandırın.
Amazon S3 kovası. En son teklif fiyatını hesaplamak ve
En son fiyatı uygulamaya gönderin.

D) Nihai tutarlılığa sahip bir Amazon DynamoDB Accelerator (DAX) kümesini yapılandırın.
En son fiyatı almak üzere DAX uç noktasına erişmek için uygulama yapılandırmasını güncelleyin
bilgi.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D seçeneği en uygun: DAX, DynamoDB'nin yoğun okuma yükünü önbellekle karşılar, böylece tablo performansı etkilenmez; uygulama yalnızca DAX endpoint'ine yönlendirildiği için operasyonel yük düşüktür. A seçeneği gerçek zamanlıdır ve okuma yükünü artırmaz, ancak Kinesis, Flink uygulaması ve geri yazma akışı en yüksek operasyonel yükü getirir. B seçeneği saatlik aktarım öngörüyor, oysa Zero-ETL belgelerinde artımlı replikasyon 15-30 dakikada bir yapılır; bu gerçek zamanlı değildir. C seçeneği snapshot tabanlı olduğu için gerçek zamanlı değildir ve Glue ile Lambda yönetimi gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/kds.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/kds.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/RedshiftforDynamoDB-zero-etl.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/RedshiftforDynamoDB-zero-etl.html)

---

---

Soru 50 / 63 · Dosya: 50.jpeg · Soru 52 / 65

Bir e-ticaret şirketi, siparişleri depolayan Amazon EC2 bulut sunucularında bir uygulama çalıştırıyor
Ekli Amazon EBS birimlerindeki veriler. Örnekler aktif veritabanını korur
kesilemeyen bağlantılar. Şirketin otomatik kurtarmaya ihtiyacı var
Temel donanım arızalandığında çözüm. Çözüm, örnek IP'yi korumalıdır
adres ve ekli depolama. Bu gereksinimleri hangi çözüm karşılayacak?

A) Bir kurtarma eylemini tetikleyen bir Amazon CloudWatch alarmı oluşturun.
StatusCheckFailed_Instance ölçümü başarısız oluyor.

B) Bir kurtarma eylemini tetikleyen bir Amazon CloudWatch alarmı oluşturun.
StatusCheckFailed_System ölçümü başarısız oluyor.

C) Minimum kapasiteye ve
bir örneğin maksimum kapasitesi.

D) AWS Systems Manager'ı, bir otomasyon belgesini çalıştıracak şekilde yapılandırın.
değiştirme örneği.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B seçeneği doğru: StatusCheckFailed_System metriği için recover eylemi, donanım sorununda örneği sağlıklı bir ana makineye taşır ve instance ID, private IP, Elastic IP ile bağlı EBS birimlerini korur. A yanlış çünkü recover eylemi yalnızca StatusCheckFailed_System ile kullanılabilir, Instance kontrolü ile kullanılamaz. C yanlış çünkü Auto Scaling yeni bir örnek başlatır, IP adresi ve bağlı EBS birimleri korunmaz. D yanlış çünkü yeni bir örnek başlatmak IP adresini ve depolamayı korumaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html)
>   - [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingAlarmActions.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingAlarmActions.html)

---
