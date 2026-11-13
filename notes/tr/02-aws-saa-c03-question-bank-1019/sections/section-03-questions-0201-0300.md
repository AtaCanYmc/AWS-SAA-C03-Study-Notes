# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 03

> **Soru Aralığı:** 201 - 300 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #200

Bir şirket, uygulamasını AWS'de barındırıyor. Şirket, kullanıcıları yönetmek için Amazon Cognito'yu kullanıyor.
Kullanıcılar uygulamaya giriş yaptığında uygulama gerekli verileri Amazon'dan alır
Amazon API Gateway'de barındırılan bir REST API kullanarak DynamoDB. Şirket istiyor
Geliştirmeyi azaltmak için REST API'ye erişimi kontrol edecek AWS tarafından yönetilen bir çözüm
çabalar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Hangi kullanıcının doğrulandığını doğrulamak için bir AWS Lambda işlevini API Gateway'de yetkilendirici olacak şekilde yapılandırın
talepte bulundu.

B. Her kullanıcı için, her istekle birlikte gönderilmesi gereken bir API anahtarı oluşturun ve atayın. Doğrula
AWS Lambda işlevini kullanarak anahtar.

C. Her istekte kullanıcının e-posta adresini başlıkta gönderin. Bir AWS Lambda'yı çağırma
bu e-posta adresine sahip kullanıcının uygun erişime sahip olduğunu doğrulama işlevi.

D. Amazon Cognito'nun şunları yapmasına izin vermek için API Gateway'de bir Amazon Cognito kullanıcı havuzu yetkilendiricisini yapılandırın:
her isteği doğrulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon Cognito'nun her isteği doğrulamasına izin vermek için API Gateway'de bir Amazon Cognito kullanıcı havuzu yetkilendiricisini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 201
Bir şirket, mobil uygulama kullanıcılarını hedefleyen bir pazarlama iletişimi hizmeti geliştiriyor.
Şirketin kısa mesaj servisi (SMS) ile onay mesajlarını kendisine göndermesi gerekmektedir.
kullanıcılar. Kullanıcıların SMS mesajlarına cevap verebilmeleri gerekir. Şirketin saklaması gerekiyor
Analiz için bir yıl boyunca yanıtlar.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. SMS mesajlarını göndermek için bir Amazon Connect iletişim akışı oluşturun. AWS Lambda'yı kullanarak
yanıtları işleyin.

B. Bir Amazon Pinpoint yolculuğu oluşturun. Olayları bir Amazon'a göndermek için Amazon Pinpoint'i yapılandırma
Analiz ve arşivleme için Kinesis veri akışı.

C. SMS mesajlarını dağıtmak için Amazon Simple Queue Service'i (Amazon SQS) kullanın. AWS'yi kullanın
Cevapları işlemek için Lambda.

D. Amazon Simple Notification Service (Amazon SNS) FIFO konusu oluşturun. Abone ol
Analiz ve arşivleme için SNS konusuna Amazon Kinesis veri akışı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir Amazon Pinpoint yolculuğu oluşturun. Amazon Pinpoint'i, analiz ve arşivleme amacıyla olayları bir Amazon Kinesis veri akışına gönderecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 202
Bir şirket verilerini bir Amazon S3 klasörüne taşımayı planlıyor. Veriler şifrelenmelidir
S3 klasöründe depolandığında. Ayrıca şifreleme anahtarının otomatik olarak döndürülmesi gerekir
her yıl.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri S3 klasörüne taşıyın. Amazon S3 yönetimiyle sunucu tarafı şifrelemeyi kullanın
şifreleme anahtarları (SSE-S3). SSE-S3 şifreleme anahtarlarının yerleşik anahtar döndürme davranışını kullanın.

B. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Etkinleştir
otomatik anahtar döndürme. Müşteriyi kullanmak için S3 grubunun varsayılan şifreleme davranışını ayarlayın
yönetilen KMS anahtarı. Verileri S3 klasörüne taşıyın.

C. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. S3'ü ayarlayın
Müşteri tarafından yönetilen KMS anahtarını kullanmak için paketin varsayılan şifreleme davranışını değiştirin. Verileri şuraya taşıyın:
S3 kovası. KMS anahtarını her yıl manuel olarak döndürün.

D. Verileri S3 klasörüne taşımadan önce verileri müşteri anahtarı malzemesiyle şifreleyin. Bir oluştur
Anahtar malzemesi olmayan AWS Key Management Service (AWS KMS) anahtarı. Müşteri anahtarını içe aktarın
materyali KMS anahtarına girin. Otomatik anahtar yönlendirmeyi etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Otomatik anahtar yönlendirmeyi etkinleştirin. Müşteri tarafından yönetilen KMS anahtarını kullanmak için S3 grubunun varsayılan şifreleme davranışını ayarlayın. Verileri S3 klasörüne taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 203
Bir finans şirketinin müşterileri mali müşavirlerden randevu almak için e-posta göndererek talepte bulunurlar.
kısa mesajlar. Amazon EC2 bulut sunucularında çalışan bir web uygulaması randevuyu kabul eder
istekler. Metin mesajları bir Amazon Simple Queue Service'te (Amazon SQS) yayınlanır.
Web uygulaması aracılığıyla sıraya girin. EC2 bulut sunucularında çalışan başka bir uygulama daha sonra şunu gönderir:
müşterilere toplantı davetleri ve toplantı onayı e-posta mesajları. Başarılı olduktan sonra
Bu uygulama, toplantı bilgilerini bir Amazon DynamoDB veritabanında saklar.
Şirket büyüdükçe müşteriler toplantı davetlerinin daha uzun sürdüğünü bildiriyor
varmak.
Bir çözüm mimarı bu sorunu çözmek için ne önermelidir?

A. DynamoDB veritabanının önüne bir DynamoDB Hızlandırıcı (DAX) kümesi ekleyin.

B. Randevuyu kabul eden web uygulamasının önüne bir Amazon API Gateway API ekleyin
istekler.

C. Bir Amazon CloudFront dağıtımı ekleyin. Kaynağı, kabul eden web uygulaması olarak ayarlayın.
randevu talepleri.

D. Toplantı davetiyeleri gönderen uygulama için Otomatik Ölçeklendirme grubu ekleyin. Yapılandır
SQS kuyruğunun derinliğine göre ölçeklenecek Otomatik Ölçeklendirme grubu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Toplantı davetiyeleri gönderen uygulama için Otomatik Ölçeklendirme grubu ekleyin. Otomatik Ölçeklendirme grubunu SQS kuyruğunun derinliğine göre ölçeklenecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 204
Bir çevrimiçi perakende şirketinin 50 milyondan fazla aktif müşterisi vardır ve
Her gün 25.000 sipariş. Şirket, müşteriler için satın alma verilerini topluyor ve bu verileri saklıyor
Amazon S3'te. Ek müşteri verileri Amazon RDS'de depolanır.
Şirket, ekiplerin çalışabilmesi için tüm verileri çeşitli ekiplerin kullanımına sunmak istiyor.
analiz gerçekleştirin. Çözüm, aşağıdakiler için ayrıntılı izinleri yönetme olanağı sağlamalıdır:
Veriler ve operasyonel ek yük en aza indirilmelidir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Satın alma verilerini doğrudan Amazon RDS'ye yazacak şekilde taşıyın. Sınırlamak için RDS erişim kontrollerini kullanın
erişim.

B. Verileri Amazon RDS'den Amazon S3'e düzenli aralıklarla kopyalamak için bir AWS Lambda işlevi planlayın.
Bir AWS Glue tarayıcısı oluşturun. Verileri sorgulamak için Amazon Athena'yı kullanın. Sınırlamak için S3 politikalarını kullanın
erişim.

C. AWS Lake Formation'ı kullanarak bir veri gölü oluşturun. AWS Glue JDBC bağlantısı oluşturun
Amazon RDS'si. S3 kovasını Lake Formation'a kaydedin. Göl Oluşumu erişim kontrollerini kullanarak
erişimi sınırlandırın.

D. Bir Amazon Redshift kümesi oluşturun. Düzenli aralıklarla kopyalamak için bir AWS Lambda işlevi planlayın
Amazon S3 ve Amazon RDS'den Amazon Redshift'e veriler. Amazon Redshift erişimini kullanın
Erişimi sınırlamak için kontroller.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Lake Formation'ı kullanarak bir veri gölü oluşturun. Amazon RDS'ye bir AWS Glue JDBC bağlantısı oluşturun. S3 kovasını Lake Formation'a kaydedin. Erişimi sınırlamak için Göl Oluşumu erişim kontrollerini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 205
Bir şirket, şirket içi veri merkezinde bir pazarlama web sitesine ev sahipliği yapıyor. Web sitesi şunlardan oluşur:
Statik belgeler ve tek bir sunucuda çalışır. Bir yönetici web sitesi içeriğini günceller
nadiren ve yeni belgeleri yüklemek için bir SFTP istemcisi kullanır.
Şirket, web sitesini AWS'de barındırmaya ve Amazon CloudFront'u kullanmaya karar verir.
Şirketin çözüm mimarı bir CloudFront dağıtımı oluşturuyor. Çözüm mimarı mutlaka
web sitesi barındırma için en uygun maliyetli ve dayanıklı mimariyi tasarlayın
CloudFront'un kökeni.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Lightsail'i kullanarak bir sanal sunucu oluşturun. Lightsail'de web sunucusunu yapılandırma
örnek. Bir SFTP istemcisi kullanarak web sitesi içeriğini yükleyin.

B. Amazon EC2 bulut sunucuları için bir AWS Auto Scaling grubu oluşturun. Uygulama Yükü Kullan
Dengeleyici. Bir SFTP istemcisi kullanarak web sitesi içeriğini yükleyin.

C. Özel bir Amazon S3 klasörü oluşturun. Bir sunucudan erişime izin vermek için bir S3 paket politikası kullanın.
CloudFront kaynak erişim kimliği (OAI). AWS CLI'yi kullanarak web sitesi içeriğini yükleyin.

D. Herkese açık bir Amazon S3 klasörü oluşturun. SFTP için AWS Transfer'i yapılandırın. S3'ü yapılandırma
web sitesi barındırma için kova. SFTP istemcisini kullanarak web sitesi içeriğini yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Özel bir Amazon S3 klasörü oluşturun. CloudFront kaynak erişim kimliğinden (OAI) erişime izin vermek için bir S3 grup ilkesi kullanın. AWS CLI'yi kullanarak web sitesi içeriğini yükleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 206
Bir şirket Amazon Machine Images'ı (AMI'leri) yönetmek istiyor. Şirket şu anda kopyalıyor
AMI'ler, AMI'lerin oluşturulduğu aynı AWS Bölgesine. Şirketin bir tasarım yapması gerekiyor
AWS API çağrılarını yakalayan ve Amazon EC2 başlatıldığında uyarı gönderen uygulama
CreateImage API işlemi şirket hesabı içerisinde çağrılır.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS CloudTrail günlüklerini sorgulamak ve bir sorun oluştuğunda uyarı göndermek için bir AWS Lambda işlevi oluşturun.
CreateImage API çağrısı algılandı.

B. AWS CloudTrail'i Amazon Simple Notification Service (Amazon SNS) ile yapılandırma
Güncellenen günlükler Amazon S3'e gönderildiğinde oluşan bildirim. Oluşturmak için Amazon Athena'yı kullanın
yeni bir tablo ve bir API çağrısı algılandığında CreateImage'da sorgulama yapmak için.

C. CreateImage API için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun
ara. Hedefi gönderilecek bir Amazon Simple Notification Service (Amazon SNS) konusu olarak yapılandırın
CreateImage API çağrısı algılandığında bir uyarı.

D. AWS için hedef olarak bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğunu yapılandırma
CloudTrail günlükleri. Amazon Simple'a uyarı göndermek için bir AWS Lambda işlevi oluşturun
CreateImage API çağrısı algılandığında Bildirim Hizmeti (Amazon SNS) konusu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** CreateImage API çağrısı için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun. CreateImage API çağrısı algılandığında uyarı göndermek için hedefi bir Amazon Simple Notification Service (Amazon SNS) konusu olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 207
Bir şirket, kullanıcı isteklerini almak için kullanılan eşzamansız bir API'ye sahiptir ve
istek türü, istekleri işlenmek üzere uygun mikro hizmete gönderir. Şirket
API ön ucunu dağıtmak için Amazon API Gateway'i ve AWS Lambda işlevini kullanarak
kullanıcı isteklerini işlemeye göndermeden önce depolamak için Amazon DynamoDB'yi çağırır
mikro hizmetler.
Şirket, bütçesinin izin verdiği ölçüde DynamoDB verimi sağladı ancak
şirket hâlâ kullanılabilirlik sorunları yaşıyor ve kullanıcı isteklerini kaybediyor.
Bir çözüm mimarı bu sorunu mevcut kullanıcıları etkilemeden çözmek için ne yapmalıdır?

A. Sunucu tarafı kısıtlama sınırlarıyla API Ağ Geçidine kısıtlama ekleyin.

B. DynamoDB'ye yazma işlemlerini ara belleğe almak için DynamoDB Accelerator (DAX) ve Lambda'yı kullanın.

C. Kullanıcı isteklerini içeren tablo için DynamoDB'de ikincil bir dizin oluşturun.

D. Yazma işlemlerini ara belleğe almak için Amazon Simple Queue Service (Amazon SQS) kuyruğunu ve Lambda'yı kullanın.
DinamoDB.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yazma işlemlerini DynamoDB'ye ara belleğe almak için Amazon Simple Queue Service (Amazon SQS) kuyruğunu ve Lambda'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 208
Bir şirketin verileri bir Amazon EC2 bulut sunucusundan bir Amazon S3 klasörüne taşıması gerekiyor.
şirket, hiçbir API çağrısının ve hiçbir verinin halka açık internet yolları üzerinden yönlendirilmemesini sağlamalıdır.
Yalnızca EC2 bulut sunucusunun S3 klasörüne veri yükleme erişimi olabilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucusunun bulunduğu alt ağda Amazon S3 için bir arayüz VPC uç noktası oluşturun
yer alıyor. Yalnızca EC2 örneğinin IAM rolüne izin vermek için S3 klasörüne bir kaynak politikası ekleyin.
erişim.

B. EC2 bulut sunucusunun bulunduğu Erişilebilirlik Alanında Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun
yer almaktadır. Uygun güvenlik gruplarını uç noktaya ekleyin. S3'e bir kaynak politikası ekleyin
yalnızca EC2 örneğinin IAM rolünün erişime izin vermesini sağlayacak şekilde paketleyin.

C. S3'ün özel IP adresini almak için EC2 örneğinin içinden nslookup aracını çalıştırın.
paketin hizmet API uç noktası. EC2 örneğini sağlamak için VPC rota tablosunda bir rota oluşturun
S3 kovasına erişim ile. Yalnızca EC2'ye izin vermek için S3 klasörüne bir kaynak politikası ekleyin
örneğin erişim için IAM rolü.

D. AWS'nin sağladığı, herkese açık ip-ranges.json dosyasını kullanarak özel IP adresini edinin.
S3 paketinin hizmet API uç noktası. EC2'yi sağlamak için VPC rota tablosunda bir rota oluşturun
S3 klasörüne erişimi olan örnek. Yalnızca aşağıdakilere izin vermek için S3 klasörüne bir kaynak politikası ekleyin:
EC2 örneğinin erişim için IAM rolü.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 bulut sunucusunun bulunduğu alt ağda Amazon S3 için bir arayüz VPC uç noktası oluşturun. Yalnızca EC2 bulut sunucusunun IAM rolünün erişimine izin vermek için S3 klasörüne bir kaynak politikası ekleyin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 209
Bir çözüm mimarı, dağıtılan yeni bir uygulamanın mimarisini tasarlıyor.
AWS Bulut. Uygulama, Amazon EC2 İsteğe Bağlı Bulut Sunucularında çalışacak ve
birden çok Erişilebilirlik Alanında otomatik olarak ölçeklendirme yapın. EC2 bulut sunucularının ölçeği büyütülecek ve küçültülecek
gün boyunca sıklıkla. Bir Uygulama Yük Dengeleyicisi (ALB) yükü yönetecektir
dağıtım. Mimarinin dağıtılmış oturum veri yönetimini desteklemesi gerekir.
Şirket gerekirse kodda değişiklik yapmaya hazır.
Mimarinin dağıtılmış desteği desteklediğinden emin olmak için çözüm mimarı ne yapmalıdır?
oturum veri yönetimi?

A. Oturum verilerini yönetmek ve depolamak için Amazon ElastiCache'i kullanın.

B. Oturum verilerini yönetmek için ALB'nin oturum benzeşimini (yapışkan oturumlar) kullanın.

C. Oturumu yönetmek için AWS Systems Manager'daki Session Manager'ı kullanın.

D. AWS Security Token Service'deki (AWS STS) GetSessionToken API işlemini kullanarak
oturumu yönetin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Oturum verilerini yönetmek ve depolamak için Amazon ElastiCache'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 210
Bir şirket hızla büyüyen bir yemek dağıtım hizmeti sunuyor. Büyüme nedeniyle,
Şirketin sipariş işleme sistemi, trafiğin yoğun olduğu saatlerde ölçeklendirme sorunları yaşıyor.
Mevcut mimari aşağıdakileri içerir:
(cid:127) Amazon EC2 Auto Scaling grubunda çalışan ve veri toplamak için çalışan bir grup Amazon EC2 bulut sunucusu
uygulamadan siparişler
(cid:127) Siparişleri yerine getirmek için Amazon EC2 Auto Scaling grubunda çalışan başka bir EC2 bulut sunucusu grubu
Sipariş toplama süreci hızlı bir şekilde gerçekleşir ancak siparişin karşılanması süreci daha uzun sürebilir.
Ölçeklendirme olayı nedeniyle veriler kaybolmamalıdır.
Bir çözüm mimarı, sipariş toplama sürecinin ve siparişin yerine getirilmesinin sağlanmasını sağlamalıdır.
Süreç trafiğin yoğun olduğu saatlerde düzgün şekilde ölçeklenebilir. Çözüm, kullanımı optimize etmelidir
Şirketin AWS kaynakları.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Otomatik Ölçeklendirmedeki her bulut sunucusunun CPU'sunu izlemek için Amazon CloudWatch ölçümlerini kullanın
gruplar. Her Otomatik Ölçeklendirme grubunun minimum kapasitesini yoğun iş yüküne göre yapılandırın
değerler.

B. Otomatik Ölçeklendirme'deki her bulut sunucusunun CPU'sunu izlemek için Amazon CloudWatch ölçümlerini kullanın
gruplar. Amazon Basit Bildirim Hizmetini (Amazon) çağırmak için CloudWatch alarmını yapılandırın
Talep üzerine ek Otomatik Ölçeklendirme grupları oluşturan SNS) konusu.

C. Biri sipariş toplama için olmak üzere iki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın
ve siparişin yerine getirilmesi için bir tane daha. EC2 bulut sunucularını ilgili kuyrukları yoklayacak şekilde yapılandırın. Ölçek
Kuyrukların gönderdiği bildirimlere göre Otomatik Ölçeklendirme grupları.

D. İki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın: biri sipariş toplama için
ve siparişin yerine getirilmesi için bir tane daha. EC2 bulut sunucularını ilgili kuyrukları yoklayacak şekilde yapılandırın.
Örnek başına birikim hesaplamasına dayalı bir ölçüm oluşturun. Otomatik Ölçeklendirme gruplarını temel alarak ölçeklendirin
bu ölçümde.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın: biri sipariş toplama ve diğeri siparişin yerine getirilmesi için. EC2 bulut sunucularını ilgili kuyrukları yoklayacak şekilde yapılandırın. Örnek başına birikim hesaplamasına dayalı bir ölçüm oluşturun. Otomatik Ölçeklendirme gruplarını bu metriğe göre ölçeklendirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 211
Bir şirket birden fazla üretim uygulamasına ev sahipliği yapar. Uygulamalardan biri kaynaklardan oluşuyor
Amazon EC2, AWS Lambda, Amazon RDS, Amazon Basit Bildirim Hizmeti'nden (Amazon
SNS) ve birden fazla AWS Bölgesinde Amazon Simple Queue Service (Amazon SQS). Hepsi
şirket kaynakları "uygulama" etiket adı ve buna karşılık gelen bir değerle etiketlenir
her uygulama. Bir çözüm mimarı, tüm sorunları tanımlamak için en hızlı çözümü sağlamalıdır.
etiketli bileşenler.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Uygulama etiketiyle kaynakların bir listesini oluşturmak için AWS CloudTrail'i kullanın.

B. Etiketli bileşenleri raporlamak amacıyla tüm Bölgelerdeki her hizmeti sorgulamak için AWS CLI'yi kullanın.

C. Bileşenler hakkında rapor oluşturmak için Amazon CloudWatch Logs Insights'ta bir sorgu çalıştırın.
uygulama etiketi.

D. Kaynaklar hakkında genel olarak raporlama yapmak için AWS Kaynak Grupları Etiket Düzenleyicisi ile bir sorgu çalıştırın.
uygulama etiketi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulama etiketiyle kaynaklar hakkında genel olarak raporlama yapmak için AWS Kaynak Grupları Etiket Düzenleyicisi ile bir sorgu çalıştırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 212
Bir şirketin, diğer ekiplerin erişebilmesi için veritabanını günde bir kez Amazon S3'e aktarması gerekir.
Dışa aktarılan nesnenin boyutu 2 GB ile 5 GB arasında değişir. Veriler için S3 erişim düzeni şöyledir:
değişkendir ve hızla değişir. Veriler hemen mevcut olmalı ve aynı şekilde kalmalıdır.
3 aya kadar kullanılabilir. Şirketin en uygun maliyetli çözüme ihtiyacı var
alma süresini artırın.
Şirket bu gereksinimleri karşılamak için hangi S3 depolama sınıfını kullanmalıdır?

A. S3 Akıllı Katmanlama

B. S3 Buzulu Anında Erişim

C.S3 Standardı

D. S3 Standart-Sıklıksız Erişim (S3 Standart-IA)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 Akıllı Katmanlama
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 213
Bir şirket yeni bir mobil uygulama geliştiriyor. Şirket uygun trafik filtrelemeyi uygulamalıdır
Uygulama Yük Dengeleyicisini (ALB) aşağıdakiler gibi yaygın uygulama düzeyindeki saldırılara karşı korumak için:
siteler arası komut dosyası çalıştırma veya SQL enjeksiyonu. Şirketin minimum düzeyde altyapısı ve operasyonel
personel. Şirketin yönetim, güncelleme ve güncelleme konusundaki sorumluluk payını azaltması gerekiyor.
AWS ortamı için sunucuların güvenliğini sağlıyor.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. AWS WAF kurallarını yapılandırın ve bunları ALB ile ilişkilendirin.

B. Uygulamayı, genel barındırma etkinken Amazon S3'ü kullanarak dağıtın.

C. AWS Shield Advanced'i dağıtın ve ALB'yi korumalı kaynak olarak ekleyin.

D. Trafiği üçüncü taraf güvenlik duvarı çalıştıran bir Amazon EC2 örneğine yönlendiren yeni bir ALB oluşturun,
bu daha sonra trafiği mevcut ALB'ye aktarır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS WAF kurallarını yapılandırın ve bunları ALB ile ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 214
Bir şirketin raporlama sistemi her gün yüzlerce .csv dosyasını bir Amazon S3 klasörüne gönderiyor.
Şirketin bu dosyaları Apache Parquet formatına dönüştürmesi ve dosyaları bir
dönüştürülmüş veri kümesi.
Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. Apache Spark'ın yüklü olduğu bir Amazon EMR kümesi oluşturun. Şuraya bir Spark uygulaması yazın:
verileri dönüştürün. Dönüştürülen veri grubuna dosya yazmak için EMR Dosya Sistemini (EMRFS) kullanın.

B. Verileri keşfetmek için bir AWS Glue tarayıcısı oluşturun. Bir AWS Glue özütü oluşturun, dönüştürün ve
verileri dönüştürmek için (ETL) işini yükleyin. Çıkış adımında dönüştürülen veri grubunu belirtin.

C. Verileri dönüştürmek ve çıktıyı almak üzere Bash sözdizimi ile bir iş tanımı oluşturmak için AWS Batch'i kullanın.
verileri dönüştürülmüş veri kümesine aktarın. Bir iş göndermek için iş tanımını kullanın. Bir dizi işini şu şekilde belirtin:
iş türü.

D. Verileri dönüştürmek ve verileri dönüştürülen dosyaya çıkarmak için bir AWS Lambda işlevi oluşturun.
veri kümesi. S3 grubu için bir olay bildirimi yapılandırın. Lambda işlevini şu şekilde belirtin:
etkinlik bildiriminin hedefi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri keşfetmek için bir AWS Glue tarayıcısı oluşturun. Verileri dönüştürmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. Çıkış adımında dönüştürülen veri grubunu belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 215
Bir şirketin, verilerindeki ağa bağlı depolamada (NAS) depolanan 700 TB'lik yedekleme verisi vardır
merkez. Bu yedekleme verilerinin sık olmayan düzenleyici talepler için erişilebilir olması gerekir ve
7 yıl tutuldu. Şirket, bu yedekleme verilerini veri merkezinden başka bir yere taşımaya karar verdi.
AWS. Taşıma işleminin 1 ay içerisinde tamamlanması gerekmektedir. Şirketin 500 Mbps adanmış
halka açık internet bağlantısındaki bant genişliği veri aktarımı için kullanılabilir.
Bir çözüm mimarı, verileri EN DÜŞÜK maliyetle taşımak ve depolamak için ne yapmalıdır?

A. Verileri aktarmak için AWS Snowball cihazlarını sipariş edin. Dosyaları aktarmak için bir yaşam döngüsü ilkesi kullanın
Amazon S3 Glacier Derin Arşivi.

B. Veri merkezi ile Amazon VPC arasında bir VPN bağlantısı kurun. AWS CLI'yi kullanarak
verileri şirket içinden Amazon S3 Glacier'a kopyalayın.

C. 500 Mbps AWS Direct Connect bağlantısı sağlayın ve verileri Amazon S3'e aktarın.
Dosyaları Amazon S3 Glacier Deep Archive'a geçirmek için bir yaşam döngüsü politikası kullanın.

D. Verileri aktarmak ve şirket içinde bir DataSync aracısı dağıtmak için AWS DataSync'i kullanın. Şunu kullanın:
Dosyaları şirket içi NAS depolama alanından Amazon S3 Glacier'a kopyalamak için DataSync görevi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Verileri aktarmak için AWS Snowball cihazlarını sipariş edin. Dosyaları Amazon S3 Glacier Deep Archive'a geçirmek için bir yaşam döngüsü politikası kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 216
Bir şirketin Amazon S3 klasöründe milyonlarca nesne içeren sunucusuz bir web sitesi var.
şirket, Amazon CloudFront dağıtımının kaynağı olarak S3 paketini kullanıyor. şirket
nesneler yüklenmeden önce S3 klasöründe şifreleme ayarlamadı. Bir çözüm mimarı
mevcut tüm nesneler ve S3'e eklenen tüm nesneler için şifrelemeyi etkinleştirmesi gerekiyor
gelecekte kova.
Hangi çözüm bu gereksinimleri EN AZ çabayla karşılayacak?

A. Yeni bir S3 klasörü oluşturun. Yeni S3 grubu için varsayılan şifreleme ayarlarını açın.
Mevcut tüm nesneleri geçici yerel depolamaya indirin. Nesneleri yeni S3 klasörüne yükleyin.

B. S3 grubu için varsayılan şifreleme ayarlarını açın. Oluşturmak için S3 Envanter özelliğini kullanın
şifrelenmemiş nesneleri listeleyen bir .csv dosyası. Kopyayı kullanan bir S3 Toplu İşlemler işi çalıştırın
bu nesneleri şifrelemek için komut.

C. AWS Key Management Service'i (AWS KMS) kullanarak yeni bir şifreleme anahtarı oluşturun. Değiştir
AWS KMS tarafından yönetilen şifrelemeyle sunucu tarafı şifrelemeyi kullanmak için S3 klasöründeki ayarlar
anahtarlar (SSE-KMS). S3 grubu için sürüm oluşturmayı açın.

D. AWS Management Console'da Amazon S3'e gidin. S3 kovasının nesnelerine göz atın.
Şifreleme alanına göre sıralayın. Şifrelenmemiş her nesneyi seçin. Uygulamak için Değiştir düğmesini kullanın
S3 grubundaki şifrelenmemiş her nesne için varsayılan şifreleme ayarları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 grubu için varsayılan şifreleme ayarlarını açın. Şifrelenmemiş nesneleri listeleyen bir .csv dosyası oluşturmak için S3 Envanter özelliğini kullanın. Bu nesneleri şifrelemek için copy komutunu kullanan bir S3 Toplu İşlemler işi çalıştırın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 217
Bir şirket, Uygulama Yükü arkasında Amazon EC2 bulut sunucularında küresel bir web uygulaması çalıştırıyor
Dengeleyici. Uygulama, verileri Amazon Aurora'da saklar. Şirketin bir yaratması gerekiyor
olağanüstü durum kurtarma çözümüdür ve 30 dakikaya kadar kesinti süresini ve potansiyel veri kaybını tolere edebilir.
Birincil altyapı sağlıklı olduğunda çözümün yükü kaldırmasına gerek yoktur.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygulamayı gerekli altyapı öğeleri mevcut olacak şekilde dağıtın. Amazon Route 53'ü kullanın
Aktif-pasif yük devretmeyi yapılandırmak için. İkinci bir AWS Bölgesinde bir Aurora Replikası oluşturun.

B. Uygulamanın küçültülmüş bir dağıtımını ikinci bir AWS Bölgesinde barındırın. Amazon'u kullanın
Aktif-aktif yük devretmeyi yapılandırmak için Route 53. İkinci Bölgede bir Aurora Kopyası oluşturun.

C. Birincil altyapıyı ikinci bir AWS Bölgesinde çoğaltın. Amazon Route 53'ü kullanarak
aktif-aktif yük devretmeyi yapılandırın. En son sürümden geri yüklenen bir Aurora veritabanı oluşturun
anlık görüntü.

D. AWS Backup ile verileri yedekleyin. Gerekli altyapıyı oluşturmak için yedeklemeyi kullanın.
ikinci AWS Bölgesi. Aktif-pasif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın. Bir oluştur
Aurora'nın ikinci Bölgedeki ikinci birincil örneği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı gerekli altyapı unsurları mevcut olacak şekilde dağıtın. Aktif-pasif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın. İkinci bir AWS Bölgesinde bir Aurora Replikası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 218
Bir şirketin, genel bir alt ağdaki Amazon EC2 örneğinde çalışan bir web sunucusu vardır.
Esnek IP adresi. Varsayılan güvenlik grubu EC2 örneğine atanır. Varsayılan
ağ ACL'si tüm trafiği engelleyecek şekilde değiştirildi. Bir çözüm mimarının web'i yaratması gerekiyor
443 numaralı bağlantı noktasından her yerden erişilebilen sunucu.
Bu görevi hangi adımların birleşimi gerçekleştirecek? (İki tane seçin.)

A. 0.0.0.0/0 kaynağından TCP bağlantı noktası 443'e izin verecek kurala sahip bir güvenlik grubu oluşturun.

B. TCP bağlantı noktası 443'ün hedef 0.0.0.0/0'a gitmesine izin verecek kurala sahip bir güvenlik grubu oluşturun.

C. Ağ ACL'sini, 0.0.0.0/0 kaynağından TCP bağlantı noktası 443'e izin verecek şekilde güncelleyin.

D. Ağ ACL'sini, 0.0.0.0/0 kaynağından gelen/giden TCP bağlantı noktası 443'e izin verecek şekilde güncelleyin ve
hedef 0.0.0.0/0.

E. Ağ ACL'sini, 0.0.0.0/0 kaynağından gelen TCP bağlantı noktası 443'e ve giden TCP bağlantı noktasına izin verecek şekilde güncelleyin
TCP bağlantı noktası 32768-65535'ten hedef 0.0.0.0/0'a.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** 0.0.0.0/0 kaynağından TCP bağlantı noktası 443'e izin verecek kurala sahip bir güvenlik grubu oluşturun. Ağ ACL'sini, kaynak 0.0.0.0/0'dan gelen TCP bağlantı noktası 443'e ve hedef 0.0.0.0/0'a giden TCP bağlantı noktası 32768-65535'e izin verecek şekilde güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 219
Bir şirketin uygulamasında performans sorunları yaşanıyor. Uygulama durum bilgilidir ve
Amazon EC2 bulut sunucularında bellek içi görevleri tamamlayın. Şirket AWS CloudFormation'ı kullandı
altyapıyı dağıtmak için M5 EC2 bulut sunucusu ailesini kullandı. Trafik arttıkça
uygulama performansı düştü. Kullanıcılar erişmeye çalıştığında kullanıcılar gecikmeler bildiriyor
Uygulama.
Hangi çözüm bu sorunları operasyonel açıdan EN verimli şekilde çözecektir?

A. EC2 bulut sunucularını Otomatik Ölçeklendirme grubunda çalışan T3 EC2 bulut sunucularıyla değiştirin. Yap
AWS Management Console'u kullanarak değişiklik yapabilirsiniz.

B. EC2 örneklerini bir Otomatik Ölçeklendirme grubunda çalıştırmak için CloudFormation şablonlarını değiştirin.
Otomatik Ölçeklendirme grubunun istenen kapasitesini ve maksimum kapasitesini manuel olarak artırın
bir artış gerekli olduğunda.

C. CloudFormation şablonlarını değiştirin. EC2 bulut sunucularını R5 EC2 bulut sunucularıyla değiştirin. Kullanım
Gelecekte uygulama performansını izlemek için Amazon CloudWatch yerleşik EC2 bellek ölçümleri
kapasite planlaması.

D. CloudFormation şablonlarını değiştirin. EC2 bulut sunucularını R5 EC2 bulut sunucularıyla değiştirin.
Özel uygulama oluşturmak için Amazon CloudWatch aracısını EC2 bulut sunucularına dağıtın
Gelecekteki kapasite planlaması için gecikme ölçümleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** CloudFormation şablonlarını değiştirin. EC2 bulut sunucularını R5 EC2 bulut sunucularıyla değiştirin. Gelecekteki kapasite planlamasına yönelik özel uygulama gecikme ölçümleri oluşturmak için Amazon CloudWatch aracısını EC2 bulut sunucularına dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 220
Bir çözüm mimarı, Amazon API Gateway'i kullanarak aşağıdakileri alacak yeni bir API tasarlıyor:
kullanıcılardan gelen talepler. İsteklerin hacmi oldukça değişkendir; olmadan birkaç saat geçebilir
tek bir istek almak. Veri işleme eşzamansız olarak gerçekleştirilecektir ancak
istek yapıldıktan birkaç saniye sonra tamamlanır.
Çözüm mimarının, API'yi sunmak için hangi bilgi işlem hizmetini çağırması gerekir?
gereksinimlerinizi en düşük maliyetle mi karşılıyorsunuz?

A. Bir AWS Glue işi

B. AWS Lambda işlevi

C. Amazon Elastic Kubernetes Service'de (Amazon EKS) barındırılan konteynerli bir hizmet

D. Amazon EC2 ile Amazon ECS'de barındırılan konteynerli bir hizmet

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir AWS Lambda işlevi
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 221
Bir şirket, bir grup Amazon Linux EC2 bulut sunucusu üzerinde bir uygulama çalıştırıyor. Uyumluluk için
nedenlerden dolayı şirketin tüm uygulama günlük dosyalarını 7 yıl süreyle saklaması gerekir. Günlük dosyaları olacak
tüm dosyalara aynı anda erişebilmesi gereken bir raporlama aracıyla analiz edilir.
Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılıyor?

A. Amazon Elastik Blok Mağazası (Amazon EBS)

B. Amazon Elastik Dosya Sistemi (Amazon EFS)

C. Amazon EC2 bulut sunucusu deposu

D.Amazon S3

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon S3
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 222
Bir şirket, şirketin AWS hesabında iş yapması için harici bir tedarikçi kiraladı.
satıcı, sahibi olduğu bir AWS hesabında barındırılan otomatik bir araç kullanır.
satıcının şirketin AWS hesabına IAM erişimi yok.
Bir çözüm mimarı satıcıya bu erişimi nasıl sağlamalıdır?

A. Satıcının IAM rolüne erişim yetkisi vermek için şirket hesabında bir IAM rolü oluşturun.
Satıcının gerektirdiği izinler için uygun IAM politikalarını role ekleyin.

B. Şirket hesabında, parolaya uygun bir parolayla bir IAM kullanıcısı oluşturun
karmaşıklık gereksinimleri. İzinler için uygun IAM politikalarını kullanıcıya ekleyin.
satıcı gerektirir.

C. Şirketin hesabında bir IAM grubu oluşturun. Aracın IAM kullanıcısını satıcıdan ekleyin
gruba hesap verin. İzinler için uygun IAM politikalarını gruba ekleyin.
satıcı gerektirir.

D. IAM'de sağlayıcı türü olarak "AWS hesabı"nı seçerek yeni bir kimlik sağlayıcı oluşturun
konsol. Satıcının AWS hesap kimliğini ve kullanıcı adını sağlayın. Uygun IAM politikalarını ekleyin
Satıcının ihtiyaç duyduğu izinler için yeni sağlayıcıya.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Satıcının IAM rolüne erişim yetkisi vermek için şirket hesabında bir IAM rolü oluşturun. Satıcının gerektirdiği izinler için uygun IAM politikalarını role ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 223
Bir şirket, Java Spring Boot uygulamasını Amazon Elastic üzerinde çalışan bir kapsül olarak dağıttı
Özel alt ağlarda Kubernetes Hizmeti (Amazon EKS). Uygulamanın bir dosyaya veri yazması gerekiyor
Amazon DynamoDB tablosu. Bir çözüm mimarı, uygulamanın etkileşime girebilmesini sağlamalıdır
İnternet trafiğini açığa çıkarmadan DynamoDB tablosuyla.
Çözüm mimarı bu hedefe ulaşmak için hangi adımların birleşimini uygulamalıdır? (Seç
iki.)

A. EKS bölmesine yeterli ayrıcalıklara sahip bir IAM rolü ekleyin.

B. EKS bölmesine yeterli ayrıcalıklara sahip bir IAM kullanıcısını ekleyin.

C. Özel alt ağların ağı üzerinden DynamoDB tablosuna giden bağlantıya izin verin
ACL'ler.

D. DynamoDB için bir VPC uç noktası oluşturun.

E. Erişim anahtarlarını Java Spring Boot koduna ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** EKS bölmesine yeterli ayrıcalıklara sahip bir IAM rolü ekleyin. DynamoDB için bir VPC uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 224
Bir şirket yakın zamanda uygulamayı Amazon'da yeniden barındırarak web uygulamasını AWS'ye geçirdi
Tek bir AWS Bölgesindeki EC2 bulut sunucuları. Şirket uygulamasını yeniden tasarlamak istiyor
mimarinin yüksek oranda kullanılabilir ve hataya dayanıklı olması. Trafik, çalışan tüm EC2 bulut sunucularına ulaşmalıdır
rastgele.
Şirket bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (Seç
iki.)

A. Bir Amazon Route 53 yük devretme yönlendirme politikası oluşturun.

B. Amazon Route 53 ağırlıklı bir yönlendirme politikası oluşturun.

C. Bir Amazon Route 53 çoklu değer yanıt yönlendirme politikası oluşturun.

D. Üç EC2 bulut sunucusu başlatın: bir Erişilebilirlik Alanında iki bulut sunucusu ve bir Erişilebilirlik Alanında bir bulut sunucusu
başka bir Erişilebilirlik Alanı.

E. Dört EC2 bulut sunucusu başlatın: bir Erişilebilirlik Alanında iki bulut sunucusu ve diğerinde iki bulut sunucusu
Erişilebilirlik Alanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Amazon Route 53 çok değerli yanıt yönlendirme politikası oluşturun. Dört EC2 bulut sunucusu başlatın: bir Erişilebilirlik Alanında iki bulut sunucusu ve başka bir Erişilebilirlik Alanında iki bulut sunucusu.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 225
Bir medya şirketi, şirket içindeki kullanıcı etkinliği verilerini toplar ve analiz eder. Şirket istiyor
bu yeteneği AWS'ye taşıyın. Kullanıcı etkinliği veri deposu büyümeye devam edecek ve
petabyte boyutunda. Şirketin yüksek düzeyde kullanılabilir bir veri alımı çözümü oluşturması gerekiyor.
SQL ile mevcut verilerin ve yeni verilerin isteğe bağlı analizini kolaylaştırır.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Etkinlik verilerini bir Amazon Kinesis veri akışına gönderin. Verileri iletmek için akışı yapılandırma
bir Amazon S3 klasörüne.

B. Etkinlik verilerini bir Amazon Kinesis Data Firehose teslim akışına gönderin. Akışı yapılandırma
Verileri bir Amazon Redshift kümesine iletmek için.

C. Etkinlik verilerini bir Amazon S3 klasörüne yerleştirin. Amazon S3'ü AWS Lambda çalıştıracak şekilde yapılandırma
veriler S3 klasörüne ulaştıkça veriler üzerinde çalışır.

D. Birden fazla ortama yayılmış Amazon EC2 bulut sunucularında bir alım hizmeti oluşturun
Erişilebilirlik Alanları. Hizmeti, verileri bir Amazon RDS Multi-AZ veritabanına iletecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Etkinlik verilerini bir Amazon Kinesis Data Firehose teslim akışına gönderin. Verileri bir Amazon Redshift kümesine teslim edecek şekilde akışı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 226
Bir şirket, RESTful web hizmetlerini kullanarak binlerce uzak cihazdan veri topluyor
Amazon EC2 örneğinde çalışan uygulama. EC2 örneği ham verileri alır,
ham verileri dönüştürür ve tüm verileri bir Amazon S3 klasöründe depolar. Uzaktan kumanda sayısı
Cihazların sayısı yakında milyonlara ulaşacak. Şirketin son derece ölçeklenebilir bir çözüme ihtiyacı var
operasyonel yükü en aza indirir.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Amazon S3'teki ham verileri işlemek için AWS Glue'yu kullanın.

B. Trafiği farklı EC2 bulut sunucularına yönlendirmek için Amazon Route 53'ü kullanın.

C. Artan miktarda gelen veriyi karşılamak için daha fazla EC2 bulut sunucusu ekleyin.

D. Ham verileri Amazon Simple Queue Service'e (Amazon SQS) gönderin. EC2 bulut sunucularını kullanarak
verileri işleyin.

E. Ham verileri bir Amazon Kinesis veri akışına göndermek için Amazon API Gateway'i kullanın. Yapılandır
Amazon Kinesis Data Firehose, verileri Amazon'a iletmek için veri akışını kaynak olarak kullanacak
S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** Amazon S3'teki ham verileri işlemek için AWS Glue'yu kullanın. Ham verileri bir Amazon Kinesis veri akışına göndermek için Amazon API Gateway'i kullanın. Verileri Amazon S3'e iletmek için veri akışını kaynak olarak kullanmak üzere Amazon Kinesis Data Firehose'u yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 227
Bir şirketin AWS CloudTrail günlüklerini 3 yıl boyunca saklaması gerekir. Şirket uyguluyor
Ana hesaptaki AWS Kuruluşlarını kullanarak bir dizi AWS hesabında CloudTrail.
CloudTrail hedef S3 grubu, S3 Sürüm Oluşturma etkin olacak şekilde yapılandırılmıştır. S3 Yaşam Döngüsü politikası
3 yıl sonra mevcut nesnelerin silinmesi söz konusudur.
S3 kepçesinin dördüncü yıllık kullanımından sonra, S3 kepçesi ölçümleri şunu göstermektedir:
nesneler yükselmeye devam etti. Ancak teslim edilen yeni CloudTrail günlüklerinin sayısı
S3 kovası tutarlı kaldı.
Hangi çözüm 3 yıldan eski nesneleri EN uygun maliyetle silecektir?

A. Kuruluşun merkezi CloudTrail izini, nesnelerin 3 yıl sonra geçerliliğini yitirecek şekilde yapılandırın.

B. Mevcut sürümlerin yanı sıra önceki sürümleri de silmek için S3 Yaşam Döngüsü ilkesini yapılandırın.

C. Amazon S3'teki nesneleri numaralandırmak ve silmek için bir AWS Lambda işlevi oluşturun.
3 yaşından büyük.

D. Ana hesabı, S3 klasörüne teslim edilen tüm nesnelerin sahibi olarak yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Mevcut sürümlerin yanı sıra önceki sürümleri de silmek için S3 Yaşam Döngüsü ilkesini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 228
Bir şirketin, izleme cihazları filosundan gerçek zamanlı veriler alan bir API'si vardır. API
bu verileri daha sonra analiz edilmek üzere bir Amazon RDS DB örneğinde saklar. Sunulan veri miktarı
API'ye gönderilen izleme cihazları dalgalanıyor. Trafiğin yoğun olduğu dönemlerde API genellikle
zaman aşımı hatalarını döndürür.
Günlüklerin incelenmesinin ardından şirket, veritabanının
API'den gelen yazma trafiğinin hacminin işlenmesi. Bir çözüm mimarının yapması gerekenler
Veritabanına olan bağlantıların sayısını en aza indirmeli ve bağlantı sırasında verilerin kaybolmamasını sağlamalıdır.
trafiğin yoğun olduğu dönemler.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanı bulut sunucusunun boyutunu, daha fazla kullanılabilir belleğe sahip bir bulut sunucusu tipine yükseltin.

B. Veritabanı bulut sunucusunu Multi-AZ Veritabanı bulut sunucusu olacak şekilde değiştirin. Uygulamayı herkese yazacak şekilde yapılandırın
etkin RDS Veritabanı bulut sunucuları.

C. Gelen verileri bir Amazon Simple Queue Service'e (Amazon SQS) yazmak için API'yi değiştirin
kuyruk. Amazon SQS'nin kuyruktaki verileri yazmak için çağırdığı bir AWS Lambda işlevini kullanın.
veritabanı.

D. Gelen verileri bir Amazon Simple Notification Service'e (Amazon SNS) yazmak için API'yi değiştirin
konu. Konudan konuya veri yazmak için Amazon SNS'nin çağırdığı bir AWS Lambda işlevini kullanın.
veritabanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Gelen verileri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazmak için API'yi değiştirin. Sıradaki verileri veritabanına yazmak için Amazon SQS'nin çağırdığı bir AWS Lambda işlevini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 229
Bir şirket, MySQL veritabanlarını çalıştıran kendi Amazon EC2 bulut sunucularını yönetmektedir. şirket
talep arttıkça veya azaldıkça çoğaltma ve ölçeklendirmeyi manuel olarak yönetiyor. şirket
veya işlem kapasitesinin eklenmesi veya kaldırılması sürecini basitleştiren yeni bir çözüme ihtiyaç var
gerektiğinde veritabanı katmanından. Çözüm ayrıca gelişmiş performans, ölçeklendirme,
ve operasyonlardan kaynaklanan minimum çabayla dayanıklılık.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanlarını Aurora MySQL için Amazon Aurora Serverless'a taşıyın.

B. Veritabanlarını Aurora PostgreSQL için Amazon Aurora Serverless'a taşıyın.

C. Veritabanlarını daha büyük bir MySQL veritabanında birleştirin. Daha büyük veritabanını daha büyük veritabanında çalıştırın
EC2 örnekleri.

D. Veritabanı katmanı için bir EC2 Otomatik Ölçeklendirme grubu oluşturun. Mevcut veritabanlarını şuraya taşıyın:
yeni ortam.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanlarını Aurora MySQL için Amazon Aurora Serverless'a taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 230
Bir şirket, kullanımda olan iki NAT örneğinin artık
Şirketin uygulaması için gereken trafik. Bir çözüm mimarı bir çözümü uygulamak istiyor
yüksek oranda kullanılabilir, hataya dayanıklı ve otomatik olarak ölçeklenebilir.
Çözüm mimarı ne tavsiye etmelidir?

A. İki NAT örneğini kaldırın ve bunları aynı ağ geçidindeki iki NAT ağ geçidiyle değiştirin
Erişilebilirlik Alanı.

B. Farklı ağlardaki NAT örnekleri için Ağ Yük Dengeleyicileriyle Otomatik Ölçeklendirme gruplarını kullanın.
Erişilebilirlik Alanları.

C. İki NAT örneğini kaldırın ve bunları farklı konumlardaki iki NAT ağ geçidiyle değiştirin.
Erişilebilirlik Alanları.

D. İki NAT örneğini farklı Erişilebilirlik Alanlarındaki Spot Bulut Sunucularıyla değiştirin ve bir
Ağ Yük Dengeleyici.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İki NAT örneğini kaldırın ve bunları farklı Erişilebilirlik Alanlarındaki iki NAT ağ geçidiyle değiştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 231
Bir uygulama, VPC A'da Esnek IP adresine sahip bir Amazon EC2 bulut sunucusunda çalışır.
uygulama, VPC B'deki bir veritabanına erişim gerektirir. Her iki VPC de aynı AWS hesabındadır.
Hangi çözüm gerekli erişimi EN güvenli şekilde sağlayacaktır?

A. Genel IP adresinden gelen tüm trafiğe izin veren bir Veritabanı bulut sunucusu güvenlik grubu oluşturun.
VPC A'daki uygulama sunucusu.

B. VPC A ile VPC B arasında bir VPC eşleme bağlantısı yapılandırın.

C. Veritabanı bulut sunucusunu herkesin erişimine açık hale getirin. Veritabanı bulut sunucusuna genel bir IP adresi atayın.

D. VPC'de Esnek IP adresine sahip bir EC2 örneğini başlatın B. Tüm isteklerin proxy'sini
yeni EC2 örneği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** VPC A ile VPC B arasında bir VPC eşleme bağlantısı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 232
Bir şirket, müşterileri için Amazon EC2 bulut sunucularında tanıtım ortamları çalıştırıyor. Her biri
ortam kendi VPC'sinde izole edilmiştir. Şirketin operasyon ekibinin bilgilendirilmesi gerekiyor
bir ortama RDP veya SSH erişimi kurulduğunda.

A. AWS Systems Manager'ı oluşturmak için Amazon CloudWatch Application Insights'ı yapılandırın
RDP veya SSH erişimi algılandığında OpsItems.

B. EC2 örneklerini, IAM rolüne sahip bir IAM örnek profiliyle yapılandırın.
AmazonSSMManagedInstanceCore politikası eklendi.

C. VPC akış günlüklerini Amazon CloudWatch Logs'ta yayınlayın. Gerekli metrik filtreleri oluşturun. Bir oluştur
Alarm ALARM'da olduğunda bildirim eylemi içeren Amazon CloudWatch metrik alarmı
devlet.

D. EC2 Bulut Sunucusu Durumu değişikliği türündeki olayları dinlemek için bir Amazon EventBridge kuralı yapılandırın
Bildirim. Hedef olarak bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın.
Operasyon ekibini konuya abone olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** VPC akış günlüklerini Amazon CloudWatch Logs'ta yayınlayın. Gerekli metrik filtreleri oluşturun. Alarmın ALARM durumunda olduğu durumlar için bildirim eylemi içeren bir Amazon CloudWatch ölçüm alarmı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru 233
Bir çözüm mimarı yeni bir AWS hesabı oluşturdu ve AWS hesabı kök kullanıcısını güvence altına alması gerekiyor
erişim.
Hangi eylem kombinasyonu bunu başaracak? (İki tane seçin.)

A. Kök kullanıcının güçlü bir parola kullandığından emin olun.

B. Kök kullanıcı için çok faktörlü kimlik doğrulamayı etkinleştirin.

C. Kök kullanıcı erişim anahtarlarını şifrelenmiş bir Amazon S3 klasöründe saklayın.

D. Kök kullanıcıyı yönetim izinlerini içeren bir gruba ekleyin.

E. Gerekli izinleri satır içi politika belgesiyle kök kullanıcıya uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Kök kullanıcının güçlü bir parola kullandığından emin olun. Kök kullanıcı için çok faktörlü kimlik doğrulamayı etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 234
Bir şirket yeni bir web tabanlı müşteri ilişkileri yönetimi uygulaması geliştiriyor.
uygulama, Amazon Elastic Block tarafından desteklenen çeşitli Amazon EC2 bulut sunucularını kullanacak
(Amazon EBS) birimlerini Application Load Balancer'ın (ALB) arkasında depolayın. Uygulama
ayrıca bir Amazon Aurora veritabanı kullanın. Uygulamaya ilişkin tüm veriler kullanımda değilken şifrelenmeli ve
transit halinde.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Verileri şifrelemek için ALB'de AWS Key Management Service (AWS KMS) sertifikalarını kullanın.
transit. EBS birimlerini ve Aurora veritabanını şifrelemek için AWS Sertifika Yöneticisini (ACM) kullanın
dinlenme sırasında depolama.

B. AWS Management Console'da oturum açmak için AWS kök hesabını kullanın. Şirketin bilgilerini yükleyin
şifreleme sertifikaları. Kök hesaptayken tüm veriler için şifrelemeyi açma seçeneğini seçin
hesap için hareketsiz ve geçiş halinde.

C. EBS birimlerini ve Aurora'yı şifrelemek için AWS Key Management Service'i (AWS KMS) kullanın
hareketsiz durumdaki veritabanı depolama alanı. ALB'ye bir AWS Sertifika Yöneticisi (ACM) sertifikası ekleyin.
aktarım halindeki verileri şifreleyin.

D. Kullanımda olmayan tüm verileri şifrelemek için BitLocker'ı kullanın. Şirketin TLS sertifika anahtarlarını AWS Key'e aktarın
Yönetim Hizmeti (AWS KMS) Aktarılan verileri şifrelemek için KMS anahtarlarını ALB'ye ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Kullanımda olmayan EBS birimlerini ve Aurora veritabanı depolama alanını şifrelemek için AWS Key Management Service'i (AWS KMS) kullanın. Aktarılan verileri şifrelemek için ALB'ye bir AWS Sertifika Yöneticisi (ACM) sertifikası ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 235
Bir şirket şirket içi Oracle veritabanını Amazon Aurora PostgreSQL'e taşıyor.
Veritabanında aynı tablolara yazan birden fazla uygulama bulunur. Başvuruların olması gerekiyor
Her göç arasında birer ay arayla birer birer göç ettiler. Yönetim ifade verdi
veritabanının yüksek sayıda okuma ve yazma işlemine sahip olmasıyla ilgilidir. Veriler saklanmalı
geçiş boyunca her iki veritabanı arasında senkronizasyon yapın.
Bir çözüm mimarı ne tavsiye etmelidir?

A. İlk geçiş için AWS DataSync'i kullanın. AWS Database Migration Service'i (AWS DMS) kullanın
tüm tabloları seçmek için bir değişiklik verisi yakalama (CDC) çoğaltma görevi ve bir tablo eşleme oluşturmak için.

B. İlk geçiş için AWS DataSync'i kullanın. AWS Database Migration Service'i (AWS DMS) kullanın
Tam yük artı değişiklik veri yakalama (CDC) çoğaltma görevi ve seçilecek bir tablo eşleme oluşturmak için
tüm tablolar.

C. AWS Schema Dönüştürme Aracını AWS Database Migration Service (AWS DMS) ile birlikte kullanın
Bellek için optimize edilmiş bir çoğaltma örneğinin kullanılması. Tam yük artı değişiklik verisi yakalama (CDC) oluşturma
tüm tabloları seçmek için çoğaltma görevi ve bir tablo eşleme.

D. AWS Schema Dönüştürme Aracını AWS Database Migration Service (AWS DMS) ile birlikte kullanın
işlem için optimize edilmiş bir çoğaltma örneğinin kullanılması. Tam yük artı değişiklik verisi yakalama (CDC) oluşturma
en büyük tabloları seçmek için çoğaltma görevi ve tablo eşleme.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bellek için optimize edilmiş bir çoğaltma örneği kullanarak AWS Database Migration Service (AWS DMS) ile AWS Schema Conversion Tool'u kullanın. Tüm tabloları seçmek için tam yük artı veri yakalama (CDC) çoğaltma görevi ve bir tablo eşleme oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 236
Bir şirketin görsel paylaşımına yönelik üç katmanlı bir uygulaması var. Uygulama bir Amazon EC2 kullanıyor
ön uç katmanı için örnek, uygulama katmanı için başka bir EC2 örneği ve üçüncü bir EC2 örneği
MySQL veritabanı örneği. Bir çözüm mimarı ölçeklenebilir ve yüksek düzeyde bir çözüm tasarlamalıdır.
uygulamada en az miktarda değişiklik gerektiren mevcut çözüm.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Ön uç katmanını barındırmak için Amazon S3'ü kullanın. Uygulama için AWS Lambda işlevlerini kullanın
katman. Veritabanını bir Amazon DynamoDB tablosuna taşıyın. Depolamak ve sunmak için Amazon S3'ü kullanın
kullanıcıların görselleri.

B. Ön uç katman için yük dengeli Multi-AZ AWS Elastic Beanstalk ortamlarını kullanın ve
uygulama katmanı. Veritabanını birden fazla okuma özelliğine sahip bir Amazon RDS DB örneğine taşıyın
kullanıcıların görsellerini sunmak için kopyalar.

C. Ön uç katmanını barındırmak için Amazon S3'ü kullanın. Otomatik Ölçeklendirmede EC2 bulut sunucularından oluşan bir filo kullanın
uygulama katmanı için grup. Veritabanını depolamak için belleği optimize edilmiş bir örnek türüne taşıyın
ve kullanıcıların resimlerini yayınlayın.

D. Ön uç katman için yük dengeli Multi-AZ AWS Elastic Beanstalk ortamlarını kullanın ve
uygulama katmanı. Veritabanını bir Amazon RDS Multi-AZ veritabanı bulut sunucusuna taşıyın. Amazon'u kullanın
Kullanıcıların görsellerini depolamak ve sunmak için S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Ön uç katman ve uygulama katmanı için yük dengeli Multi-AZ AWS Elastic Beanstalk ortamlarını kullanın. Veritabanını bir Amazon RDS Multi-AZ veritabanı bulut sunucusuna taşıyın. Kullanıcıların görsellerini depolamak ve sunmak için Amazon S3'ü kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 237
VPC-A'daki bir Amazon EC2 örneğinde çalışan bir uygulamanın başka bir sunucudaki dosyalara erişmesi gerekiyor
VPC-B'deki EC2 örneği. Her iki VPC de ayrı AWS hesaplarındadır. Ağ yöneticisi
VPC-A'dan VPC-B'deki EC2 örneğine güvenli erişimi yapılandırmak için bir çözüm tasarlaması gerekiyor.
Bağlantıda tek bir arıza noktası veya bant genişliği endişesi olmamalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. VPC-A ile VPC-B arasında bir VPC eşleme bağlantısı kurun.

B. VPC-B'de çalışan EC2 bulut sunucusu için VPC ağ geçidi uç noktalarını ayarlayın.

C. VPC-B'ye sanal bir özel ağ geçidi ekleyin ve VPC-A'dan yönlendirmeyi ayarlayın.

D. VPC-B'de çalışan EC2 örneği için özel bir sanal arayüz (VIF) oluşturun ve
VPC-A'dan uygun rotalar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** VPC-A ile VPC-B arasında bir VPC eşleme bağlantısı kurun.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru 238
Bir şirket, mühendis ekibi için bireysel AWS hesaplarıyla denemeler yapmak istiyor.
Şirket, belirli bir ay boyunca Amazon EC2 bulut sunucusu kullanımından hemen sonra bilgilendirilmek istiyor
her hesap için belirli bir eşiği aşıyor.
Bir çözüm mimarı bu gereksinimi EN uygun maliyetle karşılamak için ne yapmalıdır?

A. Hizmete göre maliyetlerin günlük raporunu oluşturmak için Maliyet Gezgini'ni kullanın. Raporu EC2'ye göre filtreleyin
örnekler. Cost Explorer'ı Amazon Basit E-posta Hizmeti (Amazon SES) gönderecek şekilde yapılandırma
bir eşik aşıldığında bildirim.

B. Hizmete göre aylık maliyet raporu oluşturmak için Maliyet Gezgini'ni kullanın. Raporu EC2'ye göre filtreleyin
örnekler. Cost Explorer'ı Amazon Basit E-posta Hizmeti (Amazon SES) gönderecek şekilde yapılandırma
bir eşik aşıldığında bildirim.

C. Her hesap için bir maliyet bütçesi oluşturmak amacıyla AWS Bütçelerini kullanın. Dönemi aylık olarak ayarlayın. Ayarla
EC2 bulut sunucularının kapsamı. Bütçe için bir uyarı eşiği belirleyin. Amazon Simple'ı Yapılandırma
Bir eşik aşıldığında bildirim almak için Bildirim Hizmeti (Amazon SNS) konusu.

D. Saatlik ayrıntı düzeyine sahip bir rapor oluşturmak için AWS Maliyet ve Kullanım Raporlarını kullanın. entegre edin
Verileri Amazon Athena ile raporlayın. Bir Athena sorgusu planlamak için Amazon EventBridge'i kullanın.
Bildirim almak için bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırma
bir eşik aşıldığında.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her hesap için bir maliyet bütçesi oluşturmak amacıyla AWS Bütçelerini kullanın. Dönemi aylık olarak ayarlayın. Kapsamı EC2 bulut sunucuları olarak ayarlayın. Bütçe için bir uyarı eşiği belirleyin. Bir eşik aşıldığında bildirim almak için bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru 239
Bir çözüm mimarının, bir şirketin uygulaması için yeni bir mikro hizmet tasarlaması gerekir. Müşteriler
Mikro hizmete ulaşmak için bir HTTPS uç noktasını arayabilmeniz gerekir. Mikro hizmet aynı zamanda
çağrıların kimliğini doğrulamak için AWS Identity and Access Management'ı (IAM) kullanın. Çözüm mimarı
içinde yazılan tek bir AWS Lambda işlevini kullanarak bu mikro hizmetin mantığını yazacaktır.
1.x'e gidin.
Hangi çözüm işlevi operasyonel açıdan EN verimli şekilde dağıtacak?

A. Bir Amazon API Gateway REST API oluşturun. Lambda işlevini kullanacak yöntemi yapılandırın.
API'de IAM kimlik doğrulamasını etkinleştirin.

B. İşlev için bir Lambda işlevi URL'si oluşturun. Kimlik doğrulama türü olarak AWS_IAM'yi belirtin.

C. Bir Amazon CloudFront dağıtımı oluşturun. İşlevi Lambda@Edge'e dağıtın. Entegrasyon
Lambda@Edge işlevine IAM kimlik doğrulama mantığı.

D. Bir Amazon CloudFront dağıtımı oluşturun. İşlevi CloudFront Functions'a dağıtın.
Kimlik doğrulama türü olarak AWS_IAM'yi belirtin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İşlev için bir Lambda işlevi URL'si oluşturun. Kimlik doğrulama türü olarak AWS_IAM'yi belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 240
Bir şirket daha önce veri ambarı çözümünü AWS'ye taşımıştı. Şirketin ayrıca bir
AWS Direct Connect bağlantısı. Kurumsal ofis kullanıcıları veri ambarını bir sorgu kullanarak sorgular.
görselleştirme aracı. Veri ambarı tarafından döndürülen bir sorgunun ortalama boyutu 50 MB'tır ve
görselleştirme aracı tarafından gönderilen her web sayfası yaklaşık 500 KB'dir. Tarafından döndürülen sonuç kümeleri
veri ambarı önbelleğe alınmaz.
Şirket için EN DÜŞÜK veri aktarımı çıkış maliyetini hangi çözüm sağlıyor?

A. Görselleştirme aracını şirket içinde barındırın ve veri ambarını doğrudan internet üzerinden sorgulayın.

B. Görselleştirme aracını veri ambarıyla aynı AWS Bölgesinde barındırın. Şu adresten erişin:
internet.

C. Görselleştirme aracını şirket içinde barındırın ve veri ambarını doğrudan Direct üzerinden sorgulayın
Bağlantıyı aynı AWS Bölgesindeki bir konuma bağlayın.

D. Görselleştirme aracını veri ambarıyla aynı AWS Bölgesinde barındırın ve ona bir ağ üzerinden erişin.
Aynı Bölgedeki bir konumda Doğrudan Bağlantı bağlantısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Görselleştirme aracını veri ambarıyla aynı AWS Bölgesinde barındırın ve ona aynı Bölgedeki bir konumdan Direct Connect bağlantısı üzerinden erişin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 241
Çevrimiçi bir öğrenim şirketi AWS Cloud'a geçiş yapıyor. Şirket öğrencisini koruyor
PostgreSQL veritabanındaki kayıtlar. Şirketin verilerinin mevcut olduğu bir çözüme ihtiyacı var
ve birden fazla AWS Bölgesinde her zaman çevrimiçi.
Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılayacak?

A. PostgreSQL veritabanını Amazon EC2 bulut sunucularındaki bir PostgreSQL kümesine taşıyın.

B. PostgreSQL veritabanını Amazon RDS for PostgreSQL veritabanı örneğine şu şekilde taşıyın:
Multi-AZ özelliği açıldı.

C. PostgreSQL veritabanını Amazon RDS for PostgreSQL veritabanı örneğine taşıyın. Bir oluştur
Başka bir Bölgedeki kopyayı okuyun.

D. PostgreSQL veritabanını Amazon RDS for PostgreSQL veritabanı örneğine taşıyın. DB'yi kurma
anlık görüntülerin başka bir Bölgeye kopyalanması.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** PostgreSQL veritabanını bir Amazon RDS for PostgreSQL veritabanı örneğine taşıyın. Başka bir Bölgede okuma kopyası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 242
Bir şirket, web uygulamasını yedi Amazon EC2 örneğini kullanarak AWS'de barındırıyor.
şirket, yanıt olarak tüm sağlıklı EC2 bulut sunucularının IP adreslerinin döndürülmesini zorunlu kılmaktadır.
DNS sorguları.
Bu gereksinimi karşılamak için hangi politika kullanılmalıdır?

A. Basit yönlendirme politikası

B. Gecikme yönlendirme politikası

C. Çok değerli yönlendirme politikası

D. Coğrafi konum yönlendirme politikası

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Çok değerli yönlendirme politikası
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 243
Tıbbi araştırma laboratuvarı yeni bir çalışmaya ilişkin veriler üretir. Laboratuvar bunu yapmak istiyor
ülke çapındaki kliniklerin şirket içi ortamlarına minimum gecikmeyle erişilebilen veriler,
Dosya tabanlı uygulamalar. Veri dosyaları salt okunur bir Amazon S3 klasöründe depolanır.
Her klinik için izinler.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. AWS Storage Gateway dosya ağ geçidini her bir tesise sanal makine (VM) olarak dağıtın.
klinik

B. AWS DataSync for'u kullanarak dosyaları her kliniğin şirket içi uygulamalarına taşıyın.
işleme.

C. AWS Storage Gateway birim ağ geçidini şirket içinde sanal makine (VM) olarak dağıtın.
her klinik.

D. Her kliniğin şirket içi ortamına bir Amazon Elastic File System (Amazon EFS) dosya sistemi ekleyin
sunucular.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her klinikte şirket içinde bir sanal makine (VM) olarak bir AWS Storage Gateway dosya ağ geçidi dağıtın
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 244
Bir şirket, tek bir Amazon EC2 bulut sunucusunda çalışan bir içerik yönetim sistemi kullanıyor.
EC2 bulut sunucusu hem web sunucusunu hem de veritabanı yazılımını içerir. Şirket şunları yapmalıdır:
Web sitesi platformunu yüksek düzeyde kullanılabilir hale getirmeli ve web sitesinin kullanıcı gereksinimlerine göre ölçeklenmesini sağlamalıdır.
talep.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Veritabanını Amazon RDS'ye taşıyın ve otomatik yedeklemeleri etkinleştirin. Başka bir tanesini manuel olarak başlat
Aynı Erişilebilirlik Alanındaki EC2 bulut sunucusu. Uygulama Yük Dengeleyicisini yapılandırma
Erişilebilirlik Alanı'nı seçin ve iki örneği hedef olarak ayarlayın.

B. Veritabanını aynı Erişilebilirlikteki okuma replikasına sahip bir Amazon Aurora bulut sunucusuna taşıyın
Mevcut EC2 örneği olarak Zone. Aynı Erişilebilirlik durumunda başka bir EC2 bulut sunucusunu manuel olarak başlatın
Bölge. Bir Application Load Balancer yapılandırın ve iki EC2 örneğini hedef olarak ayarlayın.

C. Veritabanını başka bir Erişilebilirlik Alanındaki okuma kopyasıyla Amazon Aurora'ya taşıyın. Oluştur
EC2 örneğinden bir Amazon Machine Image (AMI). Uygulama Yük Dengeleyicisini Yapılandırma
iki Erişilebilirlik Alanında. İki Kullanılabilirlik genelinde AMI'yi kullanan bir Otomatik Ölçeklendirme grubu ekleyin
Bölgeler.

D. Veritabanını ayrı bir EC2 bulut sunucusuna taşıyın ve yedeklemeleri Amazon S3'e planlayın. Oluştur
orijinal EC2 örneğinden bir Amazon Machine Image (AMI). Uygulama Yükünü Yapılandırma
İki Erişilebilirlik Alanında dengeleyici. AMI'yi iki platformda kullanan bir Otomatik Ölçeklendirme grubu ekleyin
Erişilebilirlik Alanları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Veritabanını başka bir Erişilebilirlik Alanındaki okuma kopyasıyla Amazon Aurora'ya taşıyın. EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. İki Erişilebilirlik Alanında bir Application Load Balancer yapılandırın. İki Erişilebilirlik Alanında AMI'yi kullanan bir Otomatik Ölçeklendirme grubu ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 245
Bir şirket AWS'de bir uygulama başlatıyor. Uygulama bir Uygulama Yükü kullanıyor
Trafiği tek bir hedef grupta en az iki Amazon EC2 bulut sunucusuna yönlendirmek için Dengeleyici (ALB).
Örnekler, her ortam için bir Otomatik Ölçeklendirme grubundadır. Şirket bir
geliştirme ortamı ve üretim ortamı. Üretim ortamı olacak
trafiğin yoğun olduğu dönemler.
Hangi çözüm geliştirme ortamını EN uygun maliyetle yapılandıracak?

A. Geliştirme ortamındaki hedef grubu yalnızca bir EC2 örneğine sahip olacak şekilde yeniden yapılandırın
hedef olarak.

B. ALB dengeleme algoritmasını en az bekleyen isteklere değiştirin.

C. Her iki ortamda da EC2 bulut sunucularının boyutunu azaltın.

D. Geliştirme ortamının Otomatik'teki maksimum EC2 bulut sunucusu sayısını azaltın
Ölçeklendirme grubu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Geliştirme ortamının Otomatik Ölçeklendirme grubundaki maksimum EC2 bulut sunucusu sayısını azaltın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 246
Bir şirket, birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor.
EC2 bulut sunucuları özel alt ağlardadır. Bir çözüm mimarı internete dönük bir çözüm uygular
Application Load Balancer (ALB) ve EC2 bulut sunucularını hedef grup olarak belirtir. Ancak,
internet trafiği EC2 bulut sunucularına ulaşmıyor.
Çözüm mimarı bu sorunu çözmek için mimariyi nasıl yeniden yapılandırmalıdır?

A. ALB'yi bir Ağ Yük Dengeleyiciyle değiştirin. Genel bir alt ağda bir NAT ağ geçidini yapılandırın
İnternet trafiğine izin verin.

B. EC2 bulut sunucularını genel alt ağlara taşıyın. EC2 bulut sunucularının güvenlik gruplarına bir kural ekleyin
giden trafiğe 0.0.0.0/0'a izin ver.

C. EC2 bulut sunucularının alt ağlarına yönelik rota tablolarını, üzerinden 0.0.0.0/0 trafik gönderecek şekilde güncelleyin.
internet ağ geçidi rotası. Giden trafiğe izin vermek için EC2 bulut sunucularının güvenlik gruplarına bir kural ekleyin
0.0.0.0/0'a kadar.

D. Her Erişilebilirlik Alanında genel alt ağlar oluşturun. Genel alt ağları ALB ile ilişkilendirin.
Genel alt ağlara ilişkin rota tablolarını, özel alt ağlara yönelik bir rota ile güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Her Erişilebilirlik Alanında genel alt ağlar oluşturun. Genel alt ağları ALB ile ilişkilendirin. Genel alt ağlara ilişkin rota tablolarını, özel alt ağlara yönelik bir rota ile güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru 247
Bir şirket MySQL için Amazon RDS'de bir veritabanı dağıttı. Artan nedeniyle
işlemlerde, veritabanı destek ekibi veritabanı bulut sunucusuna karşı yavaş okumalar rapor ediyor ve
bir okuma kopyası eklemenizi önerir.
Bir çözüm mimarının bu değişikliği uygulamadan önce hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
(İki tane seçin.)

A. RDS birincil düğümünde binlog çoğaltmasını etkinleştirin.

B. Kaynak veritabanı bulut sunucusu için bir yük devretme önceliği seçin.

C. Kaynak veritabanı bulut sunucusunda uzun süredir devam eden işlemlerin tamamlanmasına izin verin.

D. Global bir tablo oluşturun ve tablonun mevcut olacağı AWS Bölgelerini belirtin.

E. Yedekleme saklama süresini belirli bir değere ayarlayarak kaynak örneğinde otomatik yedeklemeleri etkinleştirin.
0'dan farklı bir değer.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Kaynak veritabanı bulut sunucusunda uzun süredir devam eden işlemlerin tamamlanmasına izin verin. Yedekleme saklama süresini 0 dışında bir değere ayarlayarak kaynak örnekte otomatik yedeklemeleri etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 248
Bir şirket, Amazon EC2 bulut sunucularında analiz yazılımı çalıştırıyor. Yazılım işi kabul ediyor
Kullanıcılardan Amazon S3'e yüklenen verilerin işlenmesine yönelik talepler. Kullanıcılar bunu bildiriyor
gönderilen bazı veriler işlenmiyor Amazon CloudWatch, EC2'nin
örnekler %100 veya buna yakın tutarlı bir CPU kullanımına sahiptir. Şirket gelişmek istiyor
sistem performansı ve sistemi kullanıcı yüküne göre ölçeklendirin.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Örneğin bir kopyasını oluşturun. Tüm örnekleri bir Application Load Balancer'ın arkasına yerleştirin.

B. Amazon S3 için bir S3 VPC uç noktası oluşturun. Yazılımı uç noktaya referans verecek şekilde güncelleyin.

C. EC2 bulut sunucularını durdurun. Örnek türünü daha güçlü CPU'ya ve daha fazlasına sahip bir örnekle değiştirin
hafıza. Örnekleri yeniden başlatın.

D. Gelen istekleri Amazon Simple Queue Service'e (Amazon SQS) yönlendirin. EC2'yi yapılandırma
Kuyruk boyutuna göre Otomatik Ölçeklendirme grubu. Kuyruktan okumak için yazılımı güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Gelen istekleri Amazon Simple Queue Service'e (Amazon SQS) yönlendirin. Kuyruk boyutuna göre bir EC2 Otomatik Ölçeklendirme grubu yapılandırın. Kuyruktan okumak için yazılımı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 249
Bir şirket, barındırılan bir medya uygulaması için paylaşılan bir depolama çözümü uyguluyor.
AWS Bulutu. Şirketin verilere erişmek için KOBİ istemcilerini kullanma becerisine ihtiyacı var. Çözüm
tamamen yönetilmesi gerekir.
Hangi AWS çözümü bu gereksinimleri karşılıyor?

A. Bir AWS Storage Gateway birim ağ geçidi oluşturun. Gerekli olanı kullanan bir dosya paylaşımı oluşturun
istemci protokolü. Uygulama sunucusunu dosya paylaşımına bağlayın.

B. Bir AWS Storage Gateway teyp ağ geçidi oluşturun. Bantları Amazon S3'ü kullanacak şekilde yapılandırın. Bağlan
uygulama sunucusundan teyp ağ geçidine.

C. Bir Amazon EC2 Windows örneği oluşturun. Windows dosya paylaşım rolünü yükleyin ve yapılandırın
örnek. Uygulama sunucusunu dosya paylaşımına bağlayın.

D. Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Dosya sistemini orijine ekleyin
sunucu. Uygulama sunucusunu dosya sistemine bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 250
Bir şirketin güvenlik ekibi, ağ trafiğinin VPC Akış Günlüklerinde yakalanmasını talep ediyor. Günlükler
90 gün boyunca sıklıkla erişilecek ve daha sonra aralıklı olarak erişilecektir.
Bir çözüm mimarı günlükleri yapılandırırken bu gereksinimleri karşılamak için ne yapmalıdır?

A. Hedef olarak Amazon CloudWatch'u kullanın. CloudWatch günlük grubunu sona erme tarihi 90 olacak şekilde ayarlayın
günler

B. Hedef olarak Amazon Kinesis'i kullanın. Kinesis akışını, günlükleri her zaman 90 saniye boyunca tutacak şekilde yapılandırın
günler.

C. Hedef olarak AWS CloudTrail'i kullanın. CloudTrail'i bir Amazon S3 klasörüne kaydedecek şekilde yapılandırın ve
S3 Akıllı Katmanlamayı etkinleştirin.

D. Hedef olarak Amazon S3'ü kullanın. Günlükleri S3'e geçirmek için bir S3 Yaşam Döngüsü ilkesini etkinleştirin
90 gün sonra Standart-Sıklık Erişimi (S3 Standart-IA).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hedef olarak Amazon S3'ü kullanın. Günlükleri 90 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için bir S3 Yaşam Döngüsü ilkesini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 251
Amazon EC2 bulut sunucusu, yeni bir VPC'deki özel bir alt ağda bulunur. Bu alt ağda yok
giden internet erişimi, ancak EC2 bulut sunucusunun aylık güvenliği indirme becerisine ihtiyacı var
dışarıdan bir satıcıdan güncellemeler.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir internet ağ geçidi oluşturun ve bunu VPC'ye ekleyin. Özel alt ağ yönlendirme tablosunu şu şekilde yapılandırın:
İnternet ağ geçidini varsayılan rota olarak kullanın.

B. Bir NAT ağ geçidi oluşturun ve bunu genel bir alt ağa yerleştirin. Özel alt ağ yönlendirme tablosunu yapılandırma
NAT ağ geçidini varsayılan rota olarak kullanmak için.

C. Bir NAT örneği oluşturun ve bunu EC2 örneğinin bulunduğu alt ağa yerleştirin.
Özel alt ağ rota tablosunu, NAT örneğini varsayılan rota olarak kullanacak şekilde yapılandırın.

D. Bir internet ağ geçidi oluşturun ve bunu VPC'ye ekleyin. Bir NAT örneği oluşturun ve onu
EC2 örneğinin bulunduğu alt ağla aynı. Kullanılacak özel alt ağ yönlendirme tablosunu yapılandırma
İnternet ağ geçidini varsayılan rota olarak seçin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir NAT ağ geçidi oluşturun ve bunu genel bir alt ağa yerleştirin. Özel alt ağ yolu tablosunu, NAT ağ geçidini varsayılan yol olarak kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 252
Bir çözüm mimarının müşteri vaka dosyalarını depolamak için bir sistem tasarlaması gerekir. Dosyalar çekirdektir
şirket varlıkları ve önemlidir. Dosya sayısı zamanla artacaktır.
Dosyalara, üzerinde çalışan birden fazla uygulama sunucusundan aynı anda erişilebilmelidir.
Amazon EC2 bulut sunucuları. Çözümün yerleşik yedekliliğe sahip olması gerekir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon Elastik Dosya Sistemi (Amazon EFS)

B. Amazon Elastik Blok Mağazası (Amazon EBS)

C. Amazon S3 Glacier Derin Arşivi

D. AWS Yedekleme

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon Elastik Dosya Sistemi (Amazon EFS)
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 253
Bir çözüm mimarı iki IAM politikası oluşturmuştur: Politika1 ve Politika2. Her iki politika da
bir IAM grubuna bağlı.
Bir bulut mühendisi, IAM grubuna IAM kullanıcısı olarak eklenir. Bulut mühendisi hangi eylemi gerçekleştirecek?
gerçekleştirebilecek mi?


A. IAM kullanıcılarını silme

B. Dizinlerin silinmesi

C. Amazon EC2 bulut sunucularını silme

D. Amazon CloudWatch Logs'tan günlükleri silme

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon EC2 bulut sunucularını silme
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 254
Bir şirket, yakın zamanda yapılan üç katmanlı bir uygulamanın VPC'ye geçişini inceliyor. Güvenlik ekibi
Amazon EC2 güvenlik grubuna en az ayrıcalık ilkesinin uygulanmadığını keşfeder
uygulama katmanları arasındaki giriş ve çıkış kuralları.
Bir çözüm mimarı bu sorunu düzeltmek için ne yapmalıdır?

A. Örnek kimliğini kaynak veya hedef olarak kullanarak güvenlik grubu kuralları oluşturun.

B. Kaynak veya hedef olarak güvenlik grubu kimliğini kullanarak güvenlik grubu kuralları oluşturun.

C. Kaynak veya hedef olarak VPC CIDR bloklarını kullanarak güvenlik grubu kuralları oluşturun.

D. Alt ağ CIDR bloklarını kaynak veya hedef olarak kullanarak güvenlik grubu kuralları oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kaynak veya hedef olarak güvenlik grubu kimliğini kullanarak güvenlik grubu kuralları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 255
Bir şirketin, veritabanına sipariş yazan ve siparişi çağıran bir e-ticaret ödeme iş akışı vardır.
ödemeyi işleme koyma hizmeti. Kullanıcılar ödeme işlemi sırasında zaman aşımları yaşıyor.
Kullanıcılar ödeme formunu yeniden gönderdiğinde, istenen aynı ürün için birden fazla benzersiz sipariş oluşturulur
işlem.
Bir çözüm mimarı, birden fazla siparişin oluşturulmasını önlemek için bu iş akışını nasıl yeniden düzenlemelidir?

A. Web uygulamasını Amazon Kinesis Data Firehose'a sipariş mesajı gönderecek şekilde yapılandırın. Ayarla
Kinesis Data Firehose'tan mesajı almak ve siparişi işlemek için ödeme hizmeti.

B. Günlüğe kaydedilen verileri temel alarak bir AWS Lambda işlevini çağırmak için AWS CloudTrail'de bir kural oluşturun.
uygulama yolu isteği. Veritabanını sorgulamak, ödeme hizmetini aramak ve iletmek için Lambda'yı kullanın
sipariş bilgilerinde.

C. Siparişi veritabanında saklayın. Amazon'a sipariş numarasını içeren bir mesaj gönderin
Basit Bildirim Hizmeti (Amazon SNS). Ödeme hizmetini Amazon SNS'yi yoklayacak şekilde ayarlayın,
Mesajı ve siparişi işleyin.

D. Siparişi veritabanında saklayın. Amazon'a sipariş numarasını içeren bir mesaj gönderin
Basit Kuyruk Hizmeti (Amazon SQS) FIFO kuyruğu. Ödeme hizmetini almak için ayarlayın
Siparişi mesajlayın ve işleyin. Mesajı kuyruktan silin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Siparişi veritabanında saklayın. Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna sipariş numarasını içeren bir mesaj gönderin. Mesajı almak ve siparişi işlemek için ödeme hizmetini ayarlayın. Mesajı kuyruktan silin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 256
Bir çözüm mimarı, Amazon S3 klasörü kullanarak bir belge inceleme uygulaması uyguluyor
depolama için. Çözüm, belgelerin yanlışlıkla silinmesini önlemeli ve tüm bilgilerin doğru olmasını sağlamalıdır.
belgelerin versiyonları mevcuttur. Kullanıcılar indirebilmeli, değiştirebilmeli ve yükleyebilmelidir
belgeler.
Bu gereklilikleri karşılamak için hangi eylem kombinasyonu gerçekleştirilmelidir? (İki tane seçin.)

A. Salt okunur paket ACL'sini etkinleştirin.

B. Pakette sürüm oluşturmayı etkinleştirin.

C. Pakete bir IAM politikası ekleyin.

D. Pakette MFA Silmeyi etkinleştirin.

E. AWS KMS'yi kullanarak paketi şifreleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Pakette sürüm oluşturmayı etkinleştirin. Pakette MFA Silmeyi etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 257
Bir şirket, Amazon EC2 Auto Scaling olaylarını tüm dünyada raporlayacak bir çözüm geliştiriyor
AWS hesabındaki uygulamalar. Şirketin verileri depolamak için sunucusuz bir çözüm kullanması gerekiyor
Amazon S3'te EC2 Otomatik Ölçeklendirme durum verileri. Şirket daha sonra verileri Amazon S3'te kullanacak
bir kontrol panelinde neredeyse gerçek zamanlı güncellemeler sağlamak. Çözüm EC2'nin hızını etkilememelidir
örnek başlatılır.
Şirket bu gereksinimleri karşılamak için verileri Amazon S3'e nasıl taşımalıdır?

A. EC2 Otomatik Ölçeklendirme durum verilerini göndermek için Amazon CloudWatch ölçüm akışını kullanın.
Amazon Kinesis Data Firehose. Verileri Amazon S3'te saklayın.

B. EC2 Auto Scaling durum verilerini toplamak ve verileri göndermek için bir Amazon EMR kümesi başlatın
Amazon Kinesis Data Firehose'a. Verileri Amazon S3'te saklayın.

C. Bir AWS Lambda işlevini belirli bir programa göre çağırmak için bir Amazon EventBridge kuralı oluşturun.
EC2 Otomatik Ölçeklendirme durum verilerini doğrudan Amazon S3'e göndermek için Lambda işlevini yapılandırın.

D. Amazon Kinesis Agent'ı yüklemek için EC2 bulut sunucusunun başlatılması sırasında bir önyükleme komut dosyası kullanın.
Kinesis Agent'ı EC2 Otomatik Ölçeklendirme durum verilerini toplayacak ve verileri Amazon'a gönderecek şekilde yapılandırın
Kinesis Data Firehose. Verileri Amazon S3'te saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 Auto Scaling durum verilerini Amazon Kinesis Data Firehose'a göndermek için bir Amazon CloudWatch ölçüm akışı kullanın. Verileri Amazon S3'te saklayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 258
Bir şirketin her gün yüzlerce .csv dosyasını bir Amazon S3 klasörüne yerleştiren bir uygulaması var.
saat. Dosyalar 1 GB boyutundadır. Her dosya yüklendiğinde şirketin dosyayı dönüştürmesi gerekir.
dosyayı Apache Parquet formatına dönüştürün ve çıktı dosyasını bir S3 klasörüne yerleştirin.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. .csv dosyalarını indirmek, dosyaları Parke formatına dönüştürmek için bir AWS Lambda işlevi oluşturun,
ve çıktı dosyalarını bir S3 klasörüne yerleştirin. Her S3 PUT olayı için Lambda işlevini çağırın.

B. .csv dosyalarını okumak, dosyaları Parke formatına dönüştürmek ve yerleştirmek için bir Apache Spark işi oluşturun.
çıktı dosyaları bir S3 klasöründe. Çağrılacak her S3 PUT olayı için bir AWS Lambda işlevi oluşturun
Spark işi.

C. Uygulamanın bulunduğu S3 klasörü için bir AWS Glue tablosu ve bir AWS Glue tarayıcısı oluşturun.
.csv dosyalarını yerleştirir. Amazon Athena'yı periyodik olarak kullanmak için bir AWS Lambda işlevi planlayın.
AWS Glue tablosunu sorgulayın, sorgu sonuçlarını Parquet formatına dönüştürün ve çıktı dosyalarını yerleştirin
bir S3 kovasına.

D. .csv dosyalarını Parquet'e dönüştürmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun
çıktı dosyalarını biçimlendirin ve bir S3 klasörüne yerleştirin. Her S3 için bir AWS Lambda işlevi oluşturun
ETL işini çağırmak için PUT olayı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** .csv dosyalarını Parquet formatına dönüştürmek ve çıktı dosyalarını bir S3 klasörüne yerleştirmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. ETL işini çağırmak amacıyla her S3 PUT olayı için bir AWS Lambda işlevi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 259
Bir şirket, Amazon'da çalışan tüm veritabanları için yeni veri saklama politikaları uyguluyor
RDS Veritabanı örnekleri. Şirketin günlük yedeklerini en az 2 yıl süreyle saklaması gerekmektedir.
Yedeklemeler tutarlı ve geri yüklenebilir olmalıdır.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi çözümü önermelidir?

A. RDS yedeklerini saklamak için AWS Backup'ta bir yedekleme kasası oluşturun. ile yeni bir yedekleme planı oluşturun.
günlük program ve oluşturulduktan sonra 2 yıllık bir son kullanma süresi. RDS Veritabanı örneklerini şuna atayın:
yedekleme planı.

B. Günlük anlık görüntülere yönelik RDS Veritabanı bulut sunucuları için bir yedekleme penceresi yapılandırın. Anlık görüntü atama
Her RDS Veritabanı bulut sunucusu için 2 yıllık saklama politikası. Amazon Data Lifecycle Manager'ı kullanın
(Amazon DLM) anlık görüntü silme işlemlerini planlamak için.

C. Veritabanı işlem günlüklerini Amazon CloudWatch'a otomatik olarak yedeklenecek şekilde yapılandırın
Son kullanma tarihi 2 yıl olan günlükler.

D. Bir AWS Database Migration Service (AWS DMS) çoğaltma görevini yapılandırın. Dağıt
çoğaltma örneğini kullanın ve veritabanı değişikliklerini yayınlamak için bir değişiklik verisi yakalama (CDC) görevi yapılandırın
hedef olarak Amazon S3'e. Anlık görüntüleri 2 yıl sonra silmek için S3 Yaşam Döngüsü politikalarını yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** RDS yedeklerini saklamak için AWS Backup'ta bir yedekleme kasası oluşturun. Günlük programa sahip ve oluşturulduktan sonra 2 yıllık bir sona erme süresine sahip yeni bir yedekleme planı oluşturun. RDS Veritabanı bulut sunucularını yedekleme planına atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 260
Bir şirketin uyumluluk ekibinin dosya paylaşımlarını AWS'ye taşıması gerekiyor. Hisse senetleri bir
Windows Server SMB dosya paylaşımı. Kendi kendine yönetilen şirket içi Active Directory erişimi denetler
dosya ve klasörlere.
Şirket, çözümün bir parçası olarak Windows Dosya Sunucusu için Amazon FSx'i kullanmak istiyor.
şirket, şirket içi Active Directory gruplarının FSx'e erişimi kısıtlamasını sağlamalıdır.
AWS'ye geçişten sonra Windows Dosya Sunucusu SMB uyumluluğu paylaşımları, klasörleri ve dosyaları.
şirket Windows Dosya Sunucusu dosya sistemi için bir FSx oluşturdu.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Active Directory'ye bağlanmak için bir Active Directory Bağlayıcısı oluşturun. Aktifi Haritalayın
Erişimi kısıtlamak için dizin gruplarından IAM gruplarına.

B. Kısıtlama etiketi anahtarı ve Uyumluluk etiketi değeri içeren bir etiket atayın. Active Directory'yi eşleyin
Erişimi kısıtlamak için gruplardan IAM gruplarına.

C. Windows Dosya Sunucusu için doğrudan FSx'e bağlanan IAM hizmeti bağlantılı bir rol oluşturun.
erişimi kısıtlayın.

D. Erişimi kısıtlamak için dosya sistemini Active Directory'ye ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Erişimi kısıtlamak için dosya sistemini Active Directory'ye ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 261
Bir şirket yakın zamanda perakende web sitesinin küresel bir kitleye açıldığını duyurdu.
web sitesi bir Elastic Load Balancer arkasında birden fazla Amazon EC2 örneğinde çalışır. Örnekler
birden fazla Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda çalıştırın.
Şirket, müşterilerine içeriğin farklı versiyonlarını sunmak istiyor.
Müşterilerin web sitesine erişmek için kullandıkları cihazlar.
Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
(İki tane seçin.)

A. İçeriğin birden çok sürümünü önbelleğe almak için Amazon CloudFront'u yapılandırın.

B. Trafiği farklı örneklere iletmek için Network Load Balancer'da bir ana bilgisayar başlığı yapılandırın.

C. Kullanıcı Aracısına dayalı olarak belirli nesneleri kullanıcılara göndermek için bir Lambda@Edge işlevi yapılandırın
başlık.

D. AWS Global Accelerator'ı yapılandırın. İstekleri bir Ağ Yük Dengeleyicisine (NLB) iletin.
Farklı EC2 bulut sunucularına ana bilgisayar tabanlı yönlendirmeyi ayarlamak için NLB'yi yapılandırın.

E. AWS Global Accelerator'ı yapılandırın. İstekleri bir Ağ Yük Dengeleyicisine (NLB) iletin.
Farklı EC2 bulut sunucularına yol tabanlı yönlendirmeyi ayarlamak için NLB'yi yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** İçeriğin birden fazla sürümünü önbelleğe almak için Amazon CloudFront'u yapılandırın. Kullanıcılara Kullanıcı Aracısı başlığını temel alarak belirli nesneleri göndermek için bir Lambda@Edge işlevi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 262
Bir şirket, çok katmanlı web uygulaması için Amazon ElastiCache'i kullanmayı planlıyor. bir çözüm
mimar, ElastiCache kümesi için bir Önbellek VPC'si ve uygulama için bir Uygulama VPC'si oluşturur
Amazon EC2 bulut sunucuları. Her iki VPC de us-east-1 Bölgesindedir.
Çözüm mimarı, uygulamanın EC2 bulut sunucularına aşağıdaki özellikleri sağlayacak bir çözüm uygulamalıdır:
ElastiCache kümesine erişim.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. VPC'ler arasında bir eşleme bağlantısı oluşturun. Eşleme için bir rota tablosu girişi ekleyin
her iki VPC'de bağlantı. ElastiCache kümesinin güvenlik grubu için bir gelen kuralı yapılandırın
uygulamanın güvenlik grubundan gelen bağlantıya izin verin.

B. Transit VPC'si oluşturun. Önbellek VPC'sindeki ve Uygulama VPC'sindeki VPC rota tablolarını güncelleyerek
Trafiği Transit VPC üzerinden yönlendirin. ElastiCache kümesi için bir gelen kuralı yapılandırın
Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek için güvenlik grubu.

C. VPC'ler arasında bir eşleme bağlantısı oluşturun. Eşleme için bir rota tablosu girişi ekleyin
her iki VPC'de bağlantı. Eşleme bağlantısının güvenlik grubu için bir gelen kuralı yapılandırın
uygulamanın güvenlik grubundan gelen bağlantıya izin verin.

D. Transit VPC'si oluşturun. Önbellek VPC'sindeki ve Uygulama VPC'sindeki VPC rota tablolarını güncelleyerek
Trafiği Transit VPC üzerinden yönlendirin. Transit VPC'nin güvenliği için bir gelen kuralı yapılandırma
Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek için grup.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** VPC'ler arasında bir eşleme bağlantısı oluşturun. Her iki VPC'de de eşleme bağlantısı için bir rota tablosu girişi ekleyin. Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek amacıyla ElastiCache kümesinin güvenlik grubu için bir gelen kuralı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 263
Bir şirket birkaç mikro hizmetten oluşan bir uygulama geliştiriyor. Şirket
yazılımını AWS'de dağıtmak için konteyner teknolojilerini kullanmaya karar verdi. Şirketin bir ihtiyacı var
Bakım ve ölçeklendirme için devam eden çaba miktarını en aza indiren çözüm. şirket
ek altyapıyı yönetemez.
Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
(İki tane seçin.)

A. Amazon Elastic Container Service (Amazon ECS) kümesini dağıtın.

B. Kubernetes kontrol düzlemini birden fazla Erişilebilirliği kapsayan Amazon EC2 bulut sunucularına dağıtın
Bölgeler.

C. Amazon EC2 ile bir Amazon Elastic Container Service (Amazon ECS) hizmetini dağıtın
başlatma türü. İstediğiniz görev numarası düzeyini 2'den büyük veya ona eşit olarak belirtin.

D. Fargate lansmanı ile bir Amazon Elastic Container Service (Amazon ECS) hizmetini dağıtın
yazın. İstediğiniz görev numarası düzeyini 2'den büyük veya ona eşit olarak belirtin.

E. Birden fazla Erişilebilirliği kapsayan Amazon EC2 bulut sunucularında Kubernetes çalışan düğümlerini dağıtın
Bölgeler. Her mikro hizmet için iki veya daha fazla kopya belirten bir dağıtım oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Amazon Elastic Container Service (Amazon ECS) kümesini dağıtın. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) hizmetini dağıtın. İstediğiniz görev numarası düzeyini 2'den büyük veya ona eşit olarak belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 264
Bir şirketin, trafiğin yönlendirildiği 10'dan fazla Amazon EC2 örneğini barındıran bir web uygulaması vardır.
Amazon Route 53. Şirket zaman zaman zaman aşımı hatasıyla karşılaşıyor
uygulamaya göz atın. Ağ ekibi bazı DNS sorgularının IP adresleri döndürdüğünü tespit etti
zaman aşımı hatasıyla sonuçlanan sağlıksız örneklerin sayısı.
Bir çözüm mimarı bu zaman aşımı hatalarının üstesinden gelmek için ne uygulamalıdır?

A. Her EC2 bulut sunucusu için bir Route 53 basit yönlendirme politikası kaydı oluşturun. Durum denetimini ilişkilendirme
her kayıtla.

B. Her EC2 bulut sunucusu için bir Route 53 yük devretme yönlendirme politikası kaydı oluşturun. Bir sağlığı ilişkilendirin
her kaydı kontrol edin.

C. Kaynağı EC2 bulut sunucuları olan bir Amazon CloudFront dağıtımı oluşturun. Bir sağlığı ilişkilendirin
EC2 örneklerini kontrol edin.

D. EC2 bulut sunucularının önünde durum denetimi içeren bir Application Load Balancer (ALB) oluşturun.
Route 53'ten ALB'ye giden rota.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** EC2 bulut sunucularının önünde durum denetimi içeren bir Application Load Balancer (ALB) oluşturun. Route 53'ten ALB'ye giden rota.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 265
Bir çözüm mimarının web, uygulama,
ve veritabanı katmanları. HTTPS içerik dağıtımı mümkün olduğu kadar uca yakın olmalıdır.
en az teslimat süresi.
Hangi çözüm bu gereksinimleri karşılıyor ve EN güvenli?

A. Birden fazla yedekli Amazon EC2 ile genel bir Application Load Balancer (ALB) yapılandırın
genel alt ağlardaki örnekler. Amazon CloudFront'u kullanarak HTTPS içeriği sunacak şekilde yapılandırın
kaynak olarak halka açık ALB.

B. Birden fazla yedekli Amazon EC2 bulut sunucusuyla genel bir Application Load Balancer yapılandırın.
özel alt ağlar. Amazon CloudFront'u EC2 bulut sunucularını kullanarak HTTPS içeriği sunacak şekilde yapılandırma
kökeni olarak.

C. Birden fazla yedekli Amazon EC2 ile genel bir Uygulama Yük Dengeleyicisini (ALB) yapılandırın
özel alt ağlardaki örnekler. Amazon CloudFront'u kullanarak HTTPS içeriği sunacak şekilde yapılandırın
kaynak olarak halka açık ALB.

D. Birden fazla yedekli Amazon EC2 bulut sunucusuyla genel bir Application Load Balancer yapılandırın.
genel alt ağlar. Amazon CloudFront'u EC2 bulut sunucularını kullanarak HTTPS içeriği sunacak şekilde yapılandırma
kökeni olarak.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Özel alt ağlarda birden fazla yedekli Amazon EC2 bulut sunucusuyla genel bir Application Load Balancer (ALB) yapılandırın. Amazon CloudFront'u, kaynak olarak genel ALB'yi kullanarak HTTPS içeriği sunacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 266
Bir şirketin AWS üzerinde çalışan popüler bir oyun platformu var. Uygulama hassastır
gecikme, çünkü gecikme kullanıcı deneyimini etkileyebilir ve kullanıcılara haksız avantajlar getirebilir
bazı oyuncular. Uygulama her AWS Bölgesinde dağıtılır. Amazon EC2'de çalışır
Application Load Balancer'ların arkasında yapılandırılmış Otomatik Ölçeklendirme gruplarının parçası olan örnekler
(ALB'ler). Bir çözüm mimarının, çözümlerin sağlığını izlemek için bir mekanizma uygulaması gerekir.
uygulayın ve trafiği sağlıklı uç noktalara yönlendirin.
Hangi çözüm bu gereksinimleri karşılıyor?

A. AWS Global Accelerator'da bir hızlandırıcı yapılandırın. Bağlantı noktası için bir dinleyici ekleyin
uygulama dinler ve bunu her Bölgedeki Bölgesel uç noktaya ekler. ALB'yi şu şekilde ekleyin:
uç nokta.

B. Bir Amazon CloudFront dağıtımı oluşturun ve ALB'yi kaynak sunucu olarak belirtin. Yapılandır
Origin önbellek başlıklarını kullanmak için önbellek davranışı. Optimize etmek için AWS Lambda işlevlerini kullanın
trafik.

C. Bir Amazon CloudFront dağıtımı oluşturun ve Amazon S3'ü kaynak sunucu olarak belirtin.
Önbellek davranışını, kaynak önbellek başlıklarını kullanacak şekilde yapılandırın. AWS Lambda işlevlerini kullanarak
trafiği optimize edin.

D. Uygulamanın veri deposu olarak hizmet verecek bir Amazon DynamoDB veritabanını yapılandırın.
DynamoDB için bellek içi önbellek görevi görecek bir DynamoDB Hızlandırıcı (DAX) kümesi oluşturun
uygulama verilerini barındırır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Global Accelerator'da bir hızlandırıcı yapılandırın. Uygulamanın dinlediği bağlantı noktası için bir dinleyici ekleyin ve bunu her Bölgedeki Bölgesel uç noktaya ekleyin. ALB'yi uç nokta olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 267
Bir şirketin mobil uygulamasını kullanan bir milyon kullanıcısı var. Şirket verileri analiz etmeli
neredeyse gerçek zamanlı olarak kullanılabilir. Şirket ayrıca verileri neredeyse gerçek zamanlı olarak şifrelemeli ve
verileri daha ileri işlemler için Apache Parquet formatında merkezi bir konumda saklayın.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri Amazon S3'te depolamak için bir Amazon Kinesis veri akışı oluşturun. Bir Amazon oluşturun
Verileri analiz etmek için Kinesis Data Analytics uygulaması. Göndermek için bir AWS Lambda işlevini çağırın
verileri Kinesis Data Analytics uygulamasına aktarın.

B. Verileri Amazon S3'te depolamak için bir Amazon Kinesis veri akışı oluşturun. Bir Amazon oluşturun
Verileri analiz etmek için EMR kümesi. Verileri EMR'ye göndermek için bir AWS Lambda işlevini çağırın
küme.

C. Verileri Amazon S3'te depolamak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun.
Verileri analiz etmek için bir Amazon EMR kümesi oluşturun.

D. Verileri Amazon S3'te depolamak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun.
Verileri analiz etmek için bir Amazon Kinesis Data Analytics uygulaması oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Verileri Amazon S3'te depolamak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri analiz etmek için bir Amazon Kinesis Data Analytics uygulaması oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 268
Bir oyun şirketinin puanları görüntüleyen bir web uygulaması vardır. Uygulama Amazon'da çalışıyor
Application Load Balancer'ın arkasındaki EC2 örnekleri. Uygulama verileri bir Amazon'da saklıyor
MySQL veritabanı için RDS. Kullanıcılar uzun gecikmeler ve kesintiler yaşamaya başlıyor
veritabanı okuma performansından kaynaklanır. Şirket kullanıcı deneyimini geliştirmek istiyor
uygulamanın mimarisindeki değişiklikleri en aza indirirken.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Veritabanının önünde Amazon ElastiCache'i kullanın.

B. Uygulama ile veritabanı arasında RDS Proxy'sini kullanın.

C. Uygulamayı EC2 bulut sunucularından AWS Lambda'ya taşıyın.

D. Veritabanını Amazon RDS for MySQL'den Amazon DynamoDB'ye taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanının önünde Amazon ElastiCache'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 269
Bir e-ticaret şirketi, Amazon RDS tabanlı webinde performans düşüşü fark etti
uygulama. Performans düşüşü, salt okunur dosya sayısındaki artışa bağlanıyor
İş analistleri tarafından tetiklenen SQL sorguları. Bir çözüm mimarının sorunu çözmesi gerekir
Mevcut web uygulamasında minimum değişiklikle.
Çözüm mimarı ne tavsiye etmelidir?

A. Verileri Amazon DynamoDB'ye aktarın ve iş analistlerinin sorgularını yürütmesini sağlayın.

B. Verileri Amazon ElastiCache'e yükleyin ve iş analistlerinin sorgularını yürütmesini sağlayın.

C. Birincil veritabanının okuma kopyasını oluşturun ve iş analistlerinin sorgularını çalıştırmasını sağlayın.

D. Verileri bir Amazon Redshift kümesine kopyalayın ve iş analistlerinin kendi çalışmalarını yürütmesini sağlayın.
sorgular.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birincil veritabanının okuma kopyasını oluşturun ve iş analistlerinin sorgularını çalıştırmasını sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 270
Bir şirket, günlük verilerini çeşitli Amazon S3 klasörlerinde depolamak için merkezi bir AWS hesabı kullanıyor.
Bir çözüm mimarının, veriler aktarılmadan önce verilerin kullanımda değilken şifrelendiğinden emin olması gerekir.
S3 paketlerine yüklendi. Verilerin aktarım sırasında da şifrelenmesi gerekir.
Hangi çözüm bu gereksinimleri karşılıyor?

A. S3 klasörlerine yüklenen verileri şifrelemek için istemci tarafı şifrelemeyi kullanın.

B. S3 klasörlerine yüklenen verileri şifrelemek için sunucu tarafı şifrelemeyi kullanın.

C. S3 tarafından yönetilen sunucu tarafı şifrelemenin kullanılmasını gerektiren paket politikaları oluşturun
S3 yüklemeleri için şifreleme anahtarları (SSE-S3).

D. Varsayılan bir AWS Anahtarı kullanarak S3 klasörlerini şifrelemek için güvenlik seçeneğini etkinleştirin
Yönetim Hizmeti (AWS KMS) anahtarı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 paketlerine yüklenen verileri şifrelemek için istemci tarafı şifrelemeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 271
Bir çözüm mimarı, gecelik bir toplu işleme işinin otomatik olarak 1 saate kadar ölçeklendirildiğini gözlemliyor
İstenilen Amazon EC2 kapasitesine ulaşılmadan bir saat önce. En yüksek kapasite 'her zaman aynıdır'
gece ve toplu işler her zaman gece 1'de başlar. Çözüm mimarının bir çözüm bulması gerekiyor
İstenilen EC2 kapasitesine hızlı bir şekilde ulaşılmasını sağlayacak uygun maliyetli çözüm
Toplu işler tamamlandıktan sonra ölçeği küçültmek için Otomatik Ölçeklendirme grubunu kullanın.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Otomatik Ölçeklendirme grubu için minimum kapasiteyi artırın.

B. Otomatik Ölçeklendirme grubunun maksimum kapasitesini artırın.

C. İstenilen işlem düzeyine ölçeklendirmek için zamanlanmış ölçeklendirmeyi yapılandırın.

D. Her ölçeklendirme işlemi sırasında daha fazla EC2 bulut sunucusu eklemek için ölçeklendirme politikasını değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İstenilen işlem düzeyine ölçeklendirmek için zamanlanmış ölçeklendirmeyi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 272
Bir şirket, bir Amazon EC2 bulut sunucusu filosundan dinamik bir web sitesine hizmet veriyor.
Uygulama Yük Dengeleyici (ALB). Web sitesinin hizmet verebilmesi için birden fazla dili desteklemesi gerekir
dünya çapındaki müşteriler. Web sitesinin mimarisi us-west-1 Bölgesinde çalışmaktadır ve
dünyanın diğer yerlerinde bulunan kullanıcılar için yüksek istek gecikmesi sergiliyor.
Web sitesinin, kullanıcının konumundan bağımsız olarak istekleri hızlı ve verimli bir şekilde sunması gerekir.
Ancak şirket, mevcut mimariyi birden fazla platformda yeniden oluşturmak istemiyor.
Bölgeler.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Mevcut mimariyi Amazon S3 klasöründen sunulan bir web sitesiyle değiştirin.
Kaynak olarak S3 paketini kullanarak bir Amazon CloudFront dağıtımı yapılandırın. Önbelleği ayarla
Accept-Language istek başlığına göre önbelleğe alınacak davranış ayarları.

B. ALB'yi kaynak olarak kullanarak bir Amazon CloudFront dağıtımını yapılandırın. Önbelleği ayarla
Accept-Language istek başlığına göre önbelleğe alınacak davranış ayarları.

C. ALB ile entegre bir Amazon API Ağ Geçidi API'si oluşturun. Kullanılacak API'yi yapılandırma
HTTP entegrasyon türü. API önbelleğini aşağıdakilere göre etkinleştirmek için bir API Ağ Geçidi aşaması ayarlayın:
Accept-Language istek başlığı.

D. Her ek Bölgede bir EC2 bulut sunucusu başlatın ve NGINX'i önbellek görevi görecek şekilde yapılandırın
o Bölge için sunucu. Tüm EC2 bulut sunucularını ve ALB'yi bir Amazon Route 53 kaydının arkasına yerleştirin
coğrafi konum yönlendirme politikasıyla ayarlanır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** ALB'yi kaynak olarak kullanarak bir Amazon CloudFront dağıtımı yapılandırın. Önbellek davranışı ayarlarını Accept-Language istek başlığına göre önbellek olarak ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 273
Hızla büyüyen bir e-ticaret şirketi, iş yüklerini tek bir AWS Bölgesinde çalıştırıyor. bir
çözüm mimarı, farklı bir AWS içeren bir olağanüstü durum kurtarma (DR) stratejisi oluşturmalıdır
Bölge. Şirket, veri tabanının DR Bölgesinde en az bilgiyle güncel olmasını istiyor
olası gecikme. DR Bölgesinde kalan altyapının azaltılmış kapasiteyle çalışması gerekiyor
ve gerekirse ölçeği büyütebilmelidir.
EN DÜŞÜK kurtarma süresi hedefi (RTO) ile bu gereksinimleri hangi çözüm karşılayacak?

A. Pilot hafif dağıtımla Amazon Aurora küresel veritabanını kullanın.

B. Hazır yedek dağıtımla Amazon Aurora global veritabanını kullanın.

C. Pilot hafif dağıtımla bir Amazon RDS Multi-AZ veritabanı bulut sunucusu kullanın.

D. Hazır yedek dağıtımla bir Amazon RDS Multi-AZ veritabanı bulut sunucusu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Hazır yedek dağıtımla Amazon Aurora küresel veritabanını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 274
Bir şirket Amazon EC2 bulut sunucularında bir uygulama çalıştırıyor. Şirketin bir uygulama yapması gerekiyor
Uygulama için olağanüstü durum kurtarma (DR) çözümü. DR çözümünün kurtarılması gerekiyor
zaman hedefi (RTO) 4 saatten az. DR çözümünün aynı zamanda mümkün olan en az sayıda
Normal işlemler sırasında AWS kaynakları.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. EC2 bulut sunucularını yedeklemek için Amazon Machine Images (AMI'ler) oluşturun. AMI'leri bir yere kopyalayın
ikincil AWS Bölgesi. Kullanarak ikincil Bölgede altyapı dağıtımını otomatikleştirin
AWS Lambda ve özel komut dosyaları.

B. EC2 bulut sunucularını yedeklemek için Amazon Machine Images (AMI'ler) oluşturun. AMI'leri bir yere kopyalayın
ikincil AWS Bölgesi. Kullanarak ikincil Bölgede altyapı dağıtımını otomatikleştirin
AWS CloudFormasyonu.

C. İkincil bir AWS Bölgesinde EC2 bulut sunucularını başlatın. EC2 örneklerini ikincil konumda tutun
Bölge her zaman aktiftir.

D. EC2 bulut sunucularını ikincil bir Erişilebilirlik Alanında başlatın. EC2 örneklerini şu konumda tutun:
ikincil Erişilebilirlik Alanı her zaman etkindir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EC2 bulut sunucularını yedeklemek için Amazon Machine Images (AMI'ler) oluşturun. AMI'leri ikincil bir AWS Bölgesine kopyalayın. AWS CloudFormation'ı kullanarak ikincil Bölgede altyapı dağıtımını otomatikleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 275
Bir şirket dahili tarayıcı tabanlı bir uygulama çalıştırıyor. Uygulama Amazon EC2'de çalışıyor
Application Load Balancer'ın arkasındaki örnekler. Bulut sunucuları bir Amazon EC2 Auto'da çalışır
Grubu birden çok Erişilebilirlik Alanında ölçeklendirme. Otomatik Ölçeklendirme grubu 20'ye kadar ölçeklenir
örnekler çalışma saatleri içinde gerçekleşir, ancak gece boyunca 2 örneğe kadar ölçeklenir. Personel bundan şikayetçi
uygulama gün başladığında çok yavaşlıyor, ancak sabah ortasına kadar iyi çalışıyor.
Personel şikayetlerini ele almak ve maliyetleri belirli bir seviyede tutmak için ölçeklendirme nasıl değiştirilmelidir?
minimum?

A. Ofisten kısa bir süre önce istenen kapasiteyi 20'ye ayarlayan planlı bir eylem uygulayın
açılır.

B. Daha düşük bir CPU eşiğinde tetiklenen bir adım ölçeklendirme eylemi uygulayın ve
soğuma süresi.

C. Daha düşük bir CPU eşiğinde tetiklenen bir hedef izleme eylemi uygulayın ve
soğuma süresi.

D. Minimum ve maksimum kapasiteyi kısa sürede 20'ye ayarlayan planlı bir eylem uygulayın
ofis açılmadan önce.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Daha düşük bir CPU eşiğinde tetiklenen bir hedef izleme eylemi uygulayın ve bekleme süresini kısaltın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 276
Bir şirketin Auto'daki çeşitli Amazon EC2 bulut sunucularına dağıtılan çok katmanlı bir uygulaması var
Ölçeklendirme grubu. Amazon RDS for Oracle örneği, uygulamanın veri katmanıdır.
Oracle'a özgü PL/SQL fonksiyonları. Uygulamaya gelen trafik giderek artıyor. bu
EC2 bulut sunucularının aşırı yüklenmesine ve RDS bulut sunucusunun depolama alanının tükenmesine neden oluyor.
Otomatik Ölçeklendirme grubunda herhangi bir ölçeklendirme metriği yoktur ve minimum sağlıklı durumu tanımlar.
yalnızca örnek sayısı. Şirket, trafiğin istikrarlı bir şekilde artmaya devam edeceğini tahmin ediyor ancak
dengelenmeden önce öngörülemeyen oran.
Sistemin otomatik olarak ölçeklenebilmesini sağlamak için bir çözüm mimarı ne yapmalıdır?
trafik arttı mı? (İki tane seçin.)

A. Oracle örneği için RDS'de depolama Otomatik Ölçeklendirmesini yapılandırın.

B. Otomatik Ölçeklendirme depolamasını kullanmak için veritabanını Amazon Aurora'ya taşıyın.

C. Düşük boş depolama alanı için Oracle örneğinde RDS'de bir alarm yapılandırın.

D. Ortalama CPU'yu ölçeklendirme ölçüsü olarak kullanacak şekilde Otomatik Ölçeklendirme grubunu yapılandırın.

E. Otomatik Ölçeklendirme grubunu, ortalama boş belleği ölçeklendirme ölçüsü olarak kullanacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Oracle örneği için RDS'de depolama Otomatik Ölçeklendirmesini yapılandırın. Ölçeklendirme ölçüsü olarak ortalama CPU'yu kullanacak şekilde Otomatik Ölçeklendirme grubunu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 277
Bir şirket, video içeriği yayınlamak ve herhangi bir kişi tarafından kullanılmak üzere kodunu dönüştürmek için çevrimiçi bir hizmet sağlar.
mobil platform. Uygulama mimarisi Amazon Elastic File System'i (Amazon EFS) kullanır
Birden fazla Amazon EC2 Linux örneğinin kullanılabilmesi için videoları toplama ve depolama standardı
işlenmek üzere video içeriğine erişin. Hizmetin popülaritesi zamanla arttıkça,
depolama maliyetleri çok pahalı hale geldi.
Hangi depolama çözümü EN uygun maliyetlidir?

A. Video içeriğini depolayacak ve işleyecek dosyalar için AWS Storage Gateway'i kullanın.

B. Video içeriğini depolayacak ve işleyecek birimler için AWS Storage Gateway'i kullanın.

C. Video içeriğini depolamak için Amazon EFS'yi kullanın. İşlem tamamlandıktan sonra dosyaları aktarın
Amazon Elastic Block Store'a (Amazon EBS).

D. Video içeriğini depolamak için Amazon S3'ü kullanın. Dosyaları geçici olarak bir Amazon'a taşıyın
İşleme için sunucuya eklenen Elastic Block Store (Amazon EBS) birimi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Video içeriğini depolamak için Amazon S3'ü kullanın. Dosyaları işlenmek üzere geçici olarak sunucuya bağlı bir Amazon Elastic Block Store (Amazon EBS) birimine taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 278
Bir şirket, çalışan verilerini hiyerarşik bir yapıda depolamak için bir uygulama oluşturmak istiyor
ilişki. Şirketin yüksek trafikli sorgulara minimum gecikmeli yanıt vermesi gerekiyor.
çalışan verileri ve her türlü hassas veriyi korumalıdır. Şirketin ayrıca aylık alması gerekiyor
Çalışan verilerinde herhangi bir finansal bilgi mevcutsa e-posta mesajları.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır?
(İki tane seçin.)

A. Çalışan verilerini hiyerarşiler halinde depolamak için Amazon Redshift'i kullanın. Verileri Amazon S3'e boşaltın
her ay.

B. Çalışan verilerini hiyerarşiler halinde depolamak için Amazon DynamoDB'yi kullanın. Verileri Amazon'a aktarın
Her ay S3.

C. AWS hesabı için Amazon Macie'yi yapılandırın. Macie'yi Amazon EventBridge ile entegre edin
AWS Lambda'ya aylık etkinlikler gönderin.

D. Amazon S3'teki çalışan verilerini analiz etmek için Amazon Athena'yı kullanın. Athena'yı entegre edin
Analiz panolarını yayınlamak ve panoları kullanıcılarla paylaşmak için Amazon QuickSight.

E. AWS hesabı için Amazon Macie'yi yapılandırın. Macie'yi Amazon EventBridge ile entegre edin
Amazon Basit Bildirim Hizmeti (Amazon SNS) aracılığıyla aylık bildirimler gönderin
abonelik.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Çalışan verilerini hiyerarşiler halinde depolamak için Amazon DynamoDB'yi kullanın. Verileri her ay Amazon S3'e aktarın. AWS hesabı için Amazon Macie'yi yapılandırın. Amazon Simple Notification Service (Amazon SNS) aboneliği aracılığıyla aylık bildirimler göndermek için Macie'yi Amazon EventBridge ile entegre edin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 279
Bir şirketin Amazon DynamoDB tablosu tarafından desteklenen bir uygulaması var. Şirketin
uyumluluk gereksinimleri, veritabanı yedeklemelerinin her ay alınması gerektiğini belirtir.
6 ay süreyle kullanılabilir ve 7 yıl süreyle saklanmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her ayın ilk gününde DynamoDB tablosunu yedeklemek için bir AWS Yedekleme planı oluşturun.
Yedeklemeyi 6 ay sonra soğuk depolamaya aktaran bir yaşam döngüsü ilkesi belirtin. Ayarla
Her yedekleme için saklama süresi 7 yıldır.

B. Her ziyaretin ilk gününde DynamoDB tablosunun DynamoDB isteğe bağlı yedeğini oluşturun.
ay. Yedeklemeyi 6 ay sonra Amazon S3 Glacier Esnek Alma'ya geçirin. Bir oluştur
7 yıldan eski yedeklemeleri silmeye yönelik S3 Yaşam Döngüsü ilkesi.

C. DynamoDB'nin isteğe bağlı yedeğini oluşturan bir komut dosyası geliştirmek için AWS SDK'yı kullanın
masa. Betiği her ayın ilk gününde çalıştıran bir Amazon EventBridge kuralı ayarlayın.
DynamoDB'ye geçiş yapmak için her ayın ikinci gününde çalışacak ikinci bir komut dosyası oluşturun
6 aydan eski yedeklerin soğuk depolamaya alınması ve 7 aydan eski yedeklerin silinmesi
yıllar.

D. DynamoDB tablosunun isteğe bağlı yedeğini oluşturmak için AWS CLI'yi kullanın. Bir Amazon kurun
Komutu her ayın ilk gününde bir cron ifadesiyle çalıştıran EventBridge kuralı.
Yedeklemelerin 6 ay sonra soğuk depoya aktarılmasını ve silinmesini komutta belirtin.
7 yıl sonra yedekler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her ayın ilk gününde DynamoDB tablosunu yedeklemek için bir AWS Yedekleme planı oluşturun. Yedeklemeyi 6 ay sonra soğuk depolamaya aktaran bir yaşam döngüsü ilkesi belirtin. Her yedeklemenin saklama süresini 7 yıl olarak ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 280
Bir şirket web sitesinde Amazon CloudFront kullanıyor. Şirket oturum açmayı etkinleştirdi
CloudFront dağıtımı ve günlükler şirketin Amazon S3 klasörlerinden birine kaydediliyor.
Şirketin günlükler üzerinde gelişmiş analizler yapması ve görselleştirmeler oluşturması gerekiyor.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. S3 klasöründeki CloudFront günlüklerini analiz etmek için Amazon Athena'daki standart SQL sorgularını kullanın.
Sonuçları AWS Glue ile görselleştirin.

B. S3 klasöründeki CloudFront günlüklerini analiz etmek için Amazon Athena'daki standart SQL sorgularını kullanın.
Sonuçları Amazon QuickSight ile görselleştirin.

C. S3'teki CloudFront günlüklerini analiz etmek için Amazon DynamoDB'deki standart SQL sorgularını kullanın
kova. Sonuçları AWS Glue ile görselleştirin.

D. S3'teki CloudFront günlüklerini analiz etmek için Amazon DynamoDB'deki standart SQL sorgularını kullanın
kova. Sonuçları Amazon QuickSight ile görselleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 klasöründeki CloudFront günlüklerini analiz etmek için Amazon Athena'daki standart SQL sorgularını kullanın. Sonuçları Amazon QuickSight ile görselleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 281
Bir şirket, Amazon RDS for PostgreSQL veritabanı örneğini kullanarak bir web sunucusu filosu çalıştırıyor. Sonra
Rutin bir uyumluluk kontrolü için şirket, bir kurtarma noktası gerektiren bir standart belirliyor
Tüm üretim veritabanları için hedef (RPO) 1 saniyeden kısa.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanı bulut sunucusu için Multi-AZ dağıtımını etkinleştirin.

B. Bir Erişilebilirlik Alanındaki veritabanı bulut sunucusu için otomatik ölçeklendirmeyi etkinleştirin.

C. Veritabanı bulut sunucusunu tek bir Erişilebilirlik Alanında yapılandırın ve bir Erişilebilirlik Alanında birden çok okuma replikası oluşturun.
ayrı Erişilebilirlik Alanı.

D. Veritabanı örneğini tek bir Erişilebilirlik Alanında yapılandırın ve AWS Database Migration'ı yapılandırın
Hizmet (AWS DMS) veri yakalama (CDC) görevlerini değiştirir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanı bulut sunucusu için Multi-AZ dağıtımını etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 282
Bir şirket, Amazon EC2 bulut sunucularına özel olarak dağıtılan bir web uygulamasını çalıştırıyor
bir VPC'nin alt ağı. Genel alt ağlara yayılan bir Uygulama Yük Dengeleyicisi (ALB)
Web trafiğini EC2 bulut sunucularına yönlendirir. Şirket yeni güvenlik uygulamak istiyor
Erişimi engellerken ALB'den EC2 bulut sunucularına gelen trafiği kısıtlamaya yönelik önlemler
EC2 bulut sunucularının özel alt ağının içindeki veya dışındaki herhangi bir kaynaktan.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Trafiği internetten özel IP adreslerine yönlendirmek için rota tablosunda bir rota yapılandırın.
EC2 örnekleri.

B. EC2 bulut sunucuları için güvenlik grubunu yalnızca sunucudan gelen trafiğe izin verecek şekilde yapılandırın.
ALB için güvenlik grubu.

C. EC2 bulut sunucularını genel alt ağa taşıyın. EC2 örneklerine bir dizi Elastik IP verin
adresler.

D. ALB'nin güvenlik grubunu, herhangi bir bağlantı noktasındaki TCP trafiğine izin verecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EC2 bulut sunucuları için güvenlik grubunu, yalnızca ALB'nin güvenlik grubundan gelen trafiğe izin verecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 283
Bir araştırma şirketi, bir simülasyon uygulamasıyla desteklenen deneyler yürütüyor ve
görselleştirme uygulaması. Simülasyon uygulaması Linux üzerinde çalışır ve ara verileri çıkarır
her 5 dakikada bir NFS paylaşımına. Görselleştirme uygulaması bir Windows masaüstü uygulamasıdır
simülasyon çıktısını görüntüleyen ve bir SMB dosya sistemi gerektiren bir dosyadır.
Şirket iki senkronize dosya sistemine sahiptir. Bu strateji veri çoğaltılmasına neden oluyor
ve verimsiz kaynak kullanımı. Şirketin uygulamaları AWS'ye taşıması gerekiyor
her iki uygulamada da kod değişiklikleri yapmak.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Her iki uygulamayı da AWS Lambda'ya taşıyın. Veri alışverişi için bir Amazon S3 klasörü oluşturun
uygulamalar arasındadır.

B. Her iki uygulamayı da Amazon Elastic Container Service'e (Amazon ECS) taşıyın. Yapılandır
Depolama için Amazon FSx Dosya Ağ Geçidi.

C. Simülasyon uygulamasını Linux Amazon EC2 bulut sunucularına taşıyın. Görselleştirmeyi taşı
Windows EC2 örneklerine uygulama. Amazon Simple Queue Service'i (Amazon SQS) Yapılandırma
Uygulamalar arasında veri alışverişi yapmak için.

D. Simülasyon uygulamasını Linux Amazon EC2 bulut sunucularına taşıyın. Görselleştirmeyi taşı
Windows EC2 örneklerine uygulama. Depolama amacıyla NetApp ONTAP için Amazon FSx'i yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Simülasyon uygulamasını Linux Amazon EC2 bulut sunucularına taşıyın. Görselleştirme uygulamasını Windows EC2 örneklerine taşıyın. Depolama amacıyla NetApp ONTAP için Amazon FSx'i yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 284
Bütçe planlamasının bir parçası olarak yönetim, kullanıcı tarafından listelenen AWS'de faturalanan öğelere ilişkin bir rapor ister.
veriler departman bütçelerini oluşturmak için kullanılacaktır. Bir çözüm mimarının şunları belirlemesi gerekir:
Bu rapor bilgisini elde etmenin en etkili yolu.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Raporu oluşturmak için Amazon Athena ile bir sorgu çalıştırın.

B. Cost Explorer'da bir rapor oluşturun ve raporu indirin.

C. Faturalandırma kontrol panelinden fatura ayrıntılarına erişin ve faturayı indirin.

D. Amazon Simple Email Service (Amazon) ile uyarı vermek için AWS Bütçelerindeki bir maliyet bütçesini değiştirin
SES).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Cost Explorer'da bir rapor oluşturun ve raporu indirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru 285
Bir şirket statik web sitesini Amazon S3'ü kullanarak barındırıyor. Şirket bir kişi eklemek istiyor
web sayfasına form ekleyin. İletişim formunda kullanıcıların kullanabilecekleri dinamik sunucu tarafı bileşenleri bulunacaktır.
adını, e-posta adresini, telefon numarasını ve kullanıcı mesajını girin. Şirket tahmin ediyor
her ay 100'den az site ziyareti gerçekleşeceğini.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon Elastic Container Service'de (Amazon ECS) dinamik bir iletişim formu sayfası barındırın. Kurulum
Herhangi bir üçüncü taraf e-posta sağlayıcısına bağlanmak için Amazon Simple Email Service (Amazon SES).

B. Çağrı yapan bir AWS Lambda arka ucuna sahip bir Amazon API Gateway uç noktası oluşturun.
Amazon Basit E-posta Hizmeti (Amazon SES).

C. Amazon Lightsail'i dağıtarak statik web sayfasını dinamiğe dönüştürün. İstemci tarafı komut dosyası oluşturmayı kullanın
iletişim formunu oluşturmak için. Formu Amazon WorkMail ile entegre edin.

D. Bir t2.micro Amazon EC2 bulut sunucusu oluşturun. Bir LAMP dağıtın (Linux, Apache, MySQL,
Web sayfasını barındırmak için PHP/Perl/Python) yığını. İletişim formunu oluşturmak için istemci tarafı komut dosyası oluşturmayı kullanın.
Formu Amazon WorkMail ile entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Simple Email Service'e (Amazon SES) çağrı yapan AWS Lambda arka ucuna sahip bir Amazon API Gateway uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 286
Bir şirketin Amazon S3'ün önünde Amazon CloudFront'ta barındırılan statik bir web sitesi var.
Statik web sitesi bir veritabanı arka ucu kullanır. Şirket, web sitesinin
web sitesinin Git deposunda yapılan güncellemeleri yansıtır. Şirket kontrol ediyor
Git deposu ile sürekli entegrasyon ve sürekli teslim (CI/CD) hattı
Amazon S3. Şirket, web kancalarının düzgün şekilde yapılandırıldığını ve CI/CD'nin doğrulandığını doğrular.
Pipeline, başarılı dağıtımları belirten mesajlar gönderiyor.
Bir çözüm mimarının, web sitesindeki güncellemeleri görüntüleyen bir çözümü uygulaması gerekir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Application Load Balancer ekleyin.

B. Web'in veritabanı katmanına Redis veya Memcached için Amazon ElastiCache'i ekleyin
uygulama.

C. CloudFront önbelleğini geçersiz kılın.

D. Web sitesinin SSL sertifikasını doğrulamak için AWS Sertifika Yöneticisini (ACM) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** CloudFront önbelleğini geçersiz kılın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 287
Bir şirket, Windows tabanlı bir uygulamayı şirket içinden AWS Cloud'a taşımak istiyor.
Uygulamanın üç katmanı vardır: uygulama katmanı, iş katmanı ve veritabanı katmanı.
Microsoft SQL Sunucusu. Şirket, SQL Server'ın yerel gibi belirli özelliklerini kullanmak istiyor
yedeklemeler ve Veri Kalitesi Hizmetleri. Şirketin ayrıca işlenmek üzere dosyaları paylaşması gerekiyor
katmanlar arasında.
Bir çözüm mimarı bu gereksinimleri karşılayacak mimariyi nasıl tasarlamalıdır?

A. Üç katmanın tamamını Amazon EC2 bulut sunucularında barındırın. Dosya paylaşımı için Amazon FSx File Gateway'i kullanın
katmanlar arasında.

B. Üç katmanın tamamını Amazon EC2 bulut sunucularında barındırın. Dosya için Windows Dosya Sunucusu için Amazon FSx'i kullanın
katmanlar arasında paylaştırılır.

C. Uygulama katmanını ve iş katmanını Amazon EC2 bulut sunucularında barındırın. Veritabanı katmanını barındırın
Amazon RDS'de. arasında dosya paylaşımı için Amazon Elastic File System'i (Amazon EFS) kullanın.
katmanlar.

D. Uygulama katmanını ve iş katmanını Amazon EC2 bulut sunucularında barındırın. Veritabanı katmanını barındırın
Amazon RDS'de. Tedarik Edilmiş IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) kullanın
katmanlar arasında dosya paylaşımı için birim.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Üç katmanın tamamını Amazon EC2 bulut sunucularında barındırın. Katmanlar arasında dosya paylaşımı için Windows Dosya Sunucusu için Amazon FSx'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 288
Bir şirket, Linux tabanlı bir web sunucusu grubunu AWS'ye taşıyor. Web sunucularının erişmesi gerekir
bazı içerikler için paylaşılan bir dosya deposundaki dosyalar. Şirket, sözleşmede herhangi bir değişiklik yapmamalıdır.
uygulama.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Web sunucularına erişimi olan bir Amazon S3 Standard paketi oluşturun.

B. Amazon S3 klasörünü kaynak olarak kullanarak bir Amazon CloudFront dağıtımını yapılandırın.

C. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini bağlayın
tüm web sunucularında.

D. Genel Amaçlı SSD (gp3) Amazon Elastic Block Store (Amazon EBS) birimini yapılandırın.
EBS birimini tüm web sunucularına bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini tüm web sunucularına bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 289
Bir şirketin, bir Amazon S3 klasörüne okuma erişimi gerektiren bir AWS Lambda işlevi var.
aynı AWS hesabında bulunur.
Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. S3 klasörüne okuma erişimi sağlayan bir S3 grubu ilkesi uygulayın.

B. Lambda işlevine bir IAM rolü uygulayın. Okuma erişimi vermek için role bir IAM politikası uygulayın
S3 kovasına.

C. Gerekli IAM'yi sağlamak için Lambda işlevinin koduna bir erişim anahtarı ve bir gizli anahtar ekleyin
S3 klasörüne okuma erişimi izinleri.

D. Lambda işlevine bir IAM rolü uygulayın. Okuma erişimi vermek için role bir IAM politikası uygulayın
hesaptaki tüm S3 paketlerine.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Lambda işlevine bir IAM rolü uygulayın. S3 paketine okuma erişimi vermek için role bir IAM politikası uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 290
Bir şirket, bir web uygulamasını birden fazla Amazon EC2 bulut sunucusunda barındırıyor. EC2 örnekleri şunlardır:
kullanıcı talebine göre ölçeklenen bir Otomatik Ölçeklendirme grubunda. Şirket istiyor
Uzun vadeli bir taahhütte bulunmadan maliyet tasarruflarını optimize edin.
Bir çözüm mimarının bu gereksinimleri karşılamak için hangi EC2 bulut sunucusu satın alma seçeneğini önermesi gerekir?
gereksinimler?

A. Yalnızca Özel Bulut Sunucuları

B. Yalnızca İsteğe Bağlı Bulut Sunucuları

C. İsteğe Bağlı Bulut Sunucuları ve Spot Bulut Sunucularının bir karışımı

D. İsteğe Bağlı Bulut Sunucuları ve Rezerve Edilmiş Bulut Sunucularının bir karışımı

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İsteğe Bağlı Bulut Sunucuları ve Spot Bulut Sunucularının bir karışımı
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 291
Bir medya şirketi, halka açık video akışı içeriği için Amazon CloudFront'u kullanıyor.
Şirket, Amazon S3'te barındırılan video içeriğini, kimlerin kim olduğunu kontrol ederek güvence altına almak istiyor.
erişimi var. Şirketin bazı kullanıcıları, desteklemeyen özel bir HTTP istemcisi kullanıyor
Çerezler. Şirketin bazı kullanıcıları, sabit kodlanmış URL'leri değiştiremiyor
erişim için kullanıyor.
Hangi hizmetler veya yöntemler bu gereksinimleri kullanıcılar üzerinde EN AZ etkiyle karşılayacak?
(İki tane seçin.)

A. İmzalı çerezler

B. İmzalı URL'ler

C. AWS AppSync

D. JSON Web Tokenı (JWT)

E. AWS Secrets Yöneticisi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** İmzalı çerezler İmzalı URL'ler
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Soru 292
Bir şirket, gerçek zamanlı akış verilerini alacak yeni bir veri platformu hazırlıyor
birden fazla kaynak. Şirketin verileri Amazon'a yazmadan önce verileri dönüştürmesi gerekiyor
S3. Şirketin dönüştürülen verileri sorgulamak için SQL kullanma becerisine ihtiyacı var.
Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. Veri akışını sağlamak için Amazon Kinesis Data Streams'i kullanın. Amazon Kinesis Data Analytics'i kullanarak şunları yapın:
verileri dönüştürün. Verileri Amazon S3'e yazmak için Amazon Kinesis Data Firehose'u kullanın. Kullanım
Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon Athena.

B. Veri akışını sağlamak için Amazon Managed Streaming for Apache Kafka'yı (Amazon MSK) kullanın. Kullanım
Verileri dönüştürmek ve verileri Amazon S3'e yazmak için AWS Glue. Amazon Athena'yı kullanarak
Dönüştürülen verileri Amazon S3'ten sorgulayın.

C. Verileri almak için AWS Database Migration Service'i (AWS DMS) kullanın. Amazon EMR'yi kullanarak
verileri dönüştürün ve verileri Amazon S3'e yazın. Sorgulamak için Amazon Athena'yı kullanın
Amazon S3'ten dönüştürülen veriler.

D. Veri akışı sağlamak için Amazon Managed Streaming for Apache Kafka'yı (Amazon MSK) kullanın. Kullanım
Verileri dönüştürmek ve verileri Amazon S3'e yazmak için Amazon Kinesis Data Analytics. Şunu kullanın:
Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon RDS sorgu düzenleyicisi.

E. Veri akışını sağlamak için Amazon Kinesis Data Streams'i kullanın. Verileri dönüştürmek için AWS Glue'yu kullanın.
Verileri Amazon S3'e yazmak için Amazon Kinesis Data Firehose'u kullanın. Amazon RDS sorgusunu kullanma
Dönüştürülen verileri Amazon S3'ten sorgulamak için düzenleyiciyi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Veri akışını sağlamak için Amazon Kinesis Data Streams'i kullanın. Verileri dönüştürmek için Amazon Kinesis Data Analytics'i kullanın. Verileri Amazon S3'e yazmak için Amazon Kinesis Data Firehose'u kullanın. Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon Athena'yı kullanın. Veri akışını sağlamak için Amazon Managed Streaming for Apache Kafka'yı (Amazon MSK) kullanın. Verileri dönüştürmek ve verileri Amazon S3'e yazmak için AWS Glue'yu kullanın. Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru 293
Bir şirketin kullanım ömrü sonuna gelmiş bir şirket içi birim yedekleme çözümü var.
şirket AWS'yi yeni bir yedekleme çözümünün parçası olarak kullanmak istiyor ve yerel erişimi sürdürmek istiyor
AWS'de yedeklenirken tüm verilere. Şirket, verilerin desteklendiğinden emin olmak istiyor
AWS'de up otomatik ve güvenli bir şekilde aktarılır.
Hangi çözüm bu gereksinimleri karşılıyor?

C. Verileri şirket içi çözümden Amazon S3'e taşımak için AWS Snowball'u kullanın. Yapılandır
Verilere yerel erişim sağlamak için Snowball S3 uç noktasını monte edecek şirket içi sistemler.

B. Verileri şirket içi çözümden Amazon S3'e taşımak için AWS Snowball Edge'i kullanın. Kullanım
Şirket içi sistemlere verilere yerel erişim sağlamak için Snowball Edge dosya arayüzü.

C. AWS Storage Gateway'i kullanın ve önbelleğe alınmış bir birim ağ geçidini yapılandırın. Depolamayı Çalıştır
Şirket içi ağ geçidi yazılım cihazı ve yerel olarak önbelleğe alınacak verilerin bir yüzdesini yapılandırın.
Verilere yerel erişim sağlamak için ağ geçidi depolama birimlerini bağlayın.

D. AWS Storage Gateway'i kullanın ve depolanan birim ağ geçidini yapılandırın. Depolama Ağ Geçidini Çalıştırın
şirket içi yazılım cihazını kullanın ve ağ geçidi depolama birimlerini şirket içi depolamayla eşleyin.
Verilere yerel erişim sağlamak için ağ geçidi depolama birimlerini bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Storage Gateway'i kullanın ve depolanan birim ağ geçidini yapılandırın. Storage Gateway yazılım cihazını şirket içinde çalıştırın ve ağ geçidi depolama birimlerini şirket içi depolamayla eşleyin. Verilere yerel erişim sağlamak için ağ geçidi depolama birimlerini bağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 294
Amazon EC2 bulut sunucularında barındırılan bir uygulamanın bir Amazon S3 klasörüne erişmesi gerekir.
Trafik internet üzerinden geçmemelidir.
Bir çözüm mimarı bu gereksinimleri karşılamak için erişimi nasıl yapılandırmalıdır?

A. Amazon Route 53'ü kullanarak özel bir barındırılan bölge oluşturun.

B. VPC'de Amazon S3 için bir ağ geçidi VPC uç noktası kurun.

C. EC2 bulut sunucularını, S3 klasörüne erişmek için bir NAT ağ geçidi kullanacak şekilde yapılandırın.

D. VPC ile S3 grubu arasında bir AWS Siteden Siteye VPN bağlantısı kurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** VPC'de Amazon S3 için bir ağ geçidi VPC uç noktası ayarlayın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 295
Bir e-ticaret şirketi terabaytlarca müşteri verisini AWS Cloud'da depolar. Veriler şunları içerir:
kişisel olarak tanımlanabilir bilgiler (PII). Şirket, verileri üç uygulamada kullanmak istiyor.
Uygulamalardan yalnızca birinin PII'yi işlemesi gerekir. PII diğerinden önce kaldırılmalıdır
iki uygulama verileri işler.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri bir Amazon DynamoDB tablosunda saklayın. Engellemek için bir proxy uygulama katmanı oluşturun ve
her uygulamanın talep ettiği verileri işler.

B. Verileri bir Amazon S3 klasöründe saklayın. S3 Object'i kullanarak verileri işleyin ve dönüştürün
Verileri talep eden uygulamaya göndermeden önce Lambda.

C. Verileri işleyin ve dönüştürülen verileri üç ayrı Amazon S3 klasöründe saklayın; böylece
her uygulamanın kendine özel veri kümesi vardır. Her uygulamayı ilgili S3 klasörüne yönlendirin.

D. Verileri işleyin ve dönüştürülen verileri üç ayrı Amazon DynamoDB tablosunda saklayın
böylece her uygulamanın kendine özel veri kümesi olur. Her uygulamayı ilgili yere yönlendirin
DynamoDB tablosu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri bir Amazon S3 klasöründe saklayın. Verileri talep eden uygulamaya geri göndermeden önce S3 Object Lambda'yı kullanarak verileri işleyin ve dönüştürün.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 296
Bir geliştirme ekibi, Amazon EC2 bulut sunucularında barındırılan yeni bir uygulamayı başlattı
bir geliştirme VPC'sinin içinde. Bir çözüm mimarının da aynı durumda yeni bir VPC oluşturması gerekir
hesap. Yeni VPC, geliştirme VPC'si ile eşleştirilecektir. Şunun için VPC CIDR bloğu:
geliştirme VPC'si 192.168.0.0/24'tür. Çözüm mimarının aşağıdakiler için bir CIDR bloğu oluşturması gerekir:
yeni VPC. CIDR bloğu, geliştirmeyle VPC eşleme bağlantısı için geçerli olmalıdır
VPC.
Bu gereksinimleri karşılayan EN KÜÇÜK CIDR bloğu nedir?

A.10.0.1.0/32

B.192.168.0.0/24

C.192.168.1.0/32

D.10.0.1.0/24

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** 10.0.1.0/24
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 297
Bir şirket, bir uygulamayı beş Amazon EC2 bulut sunucusuna dağıtıyor. Uygulama Yük Dengeleyici
(ALB), bir hedef grup kullanarak trafiği örneklere dağıtır. Ortalama CPU kullanımı
örneklerin her biri çoğu zaman %10'un altındadır, ara sıra %65'e kadar yükselişler görülür.
Bir çözüm mimarının, uygulamanın ölçeklenebilirliğini otomatikleştirmek için bir çözüm uygulaması gerekir.
Çözüm, mimarinin maliyetini optimize etmeli ve uygulamanın
dalgalanmalar meydana geldiğinde yeterli CPU kaynağı.
Bu gereksinimleri hangi çözüm karşılayacak?

A. CPUUtilization işlemi başlatıldığında ALARM durumuna giren bir Amazon CloudWatch alarmı oluşturun.
metrik %20'den azdır. CloudWatch alarmının çağıracağı bir AWS Lambda işlevi oluşturun
ALB hedef grubundaki EC2 bulut sunucularından birini sonlandırın.

B. Bir EC2 Otomatik Ölçeklendirme grubu oluşturun. Yük dengeleyici olarak mevcut ALB'yi seçin ve
Hedef grup olarak mevcut hedef grup. Aşağıdakileri temel alan bir hedef izleme ölçeklendirme politikası belirleyin:
ASGAverageCPUUtilizasyon ölçümü. Minimum örnekleri 2'ye, istenen kapasiteyi 3'e,
maksimum örnekleri 6'ya ve hedef değeri %50'ye ayarlayın. EC2 örneklerini Otomatik Ölçeklendirmeye ekleme
grup.

C. Bir EC2 Otomatik Ölçeklendirme grubu oluşturun. Yük dengeleyici olarak mevcut ALB'yi seçin ve
Hedef grup olarak mevcut hedef grup. Minimum örnekleri 2'ye, istenen kapasiteyi ise
3 ve maksimum bulut sunucuları 6'dır. EC2 bulut sunucularını Otomatik Ölçeklendirme grubuna ekleyin.

D. İki Amazon CloudWatch alarmı oluşturun. Girilecek ilk CloudWatch alarmını yapılandırın
Ortalama CPU Kullanımı ölçümü %20'nin altında olduğunda ALARM durumu. İkinciyi yapılandır
Ortalama CPU Kullanımı matrisi yukarıda olduğunda ALARM durumuna girmek için CloudWatch alarmı
%50. Alarmları bir Amazon Simple Notification Service'e (Amazon SNS) yayınlayacak şekilde yapılandırma
Bir e-posta mesajı göndermek için konu. Mesajı aldıktan sonra azaltmak veya artırmak için giriş yapın.
çalışan EC2 bulut sunucularının sayısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir EC2 Otomatik Ölçeklendirme grubu oluşturun. Yük dengeleyici olarak mevcut ALB'yi ve hedef grup olarak mevcut hedef grubu seçin. ASGAverageCPUUtilization metriğini temel alan bir hedef izleme ölçeklendirme politikası ayarlayın. Minimum örnekleri 2'ye, istenen kapasiteyi 3'e, maksimum örnekleri 6'ya ve hedef değeri %50'ye ayarlayın. EC2 örneklerini Otomatik Ölçeklendirme grubuna ekleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 298
Bir şirket, Amazon EC2 bulut sunucularında kritik bir iş uygulamasını bir
Uygulama Yük Dengeleyici. EC2 bulut sunucuları bir Otomatik Ölçeklendirme grubunda çalışır ve
Amazon RDS Veritabanı örneği.
Tasarım, EC2 bulut sunucuları ve veritabanı bulut sunucusu nedeniyle operasyonel incelemeyi geçemedi.
tümü tek bir Erişilebilirlik Alanında bulunur. Bir çözüm mimarı, tasarımı bir çözüm kullanmak için güncellemelidir.
ikinci Erişilebilirlik Alanı.
Hangi çözüm uygulamayı yüksek oranda kullanılabilir hale getirecek?

A. Her Erişilebilirlik Alanında bir alt ağ sağlayın. Otomatik Ölçeklendirme grubunu dağıtmak için yapılandırın
Her iki Erişilebilirlik Alanındaki EC2 bulut sunucuları. Veritabanı örneğini her birine bağlantılarla yapılandırın
ağ.

B. Her iki Erişilebilirlik Alanına yayılan iki alt ağ sağlayın. Otomatik Ölçeklendirmeyi Yapılandırma
EC2 bulut sunucularını her iki Erişilebilirlik Alanına dağıtmak için grup. Veritabanı örneğini yapılandırma
her ağa bağlantılarla.

C. Her Erişilebilirlik Alanında bir alt ağ sağlayın. Otomatik Ölçeklendirme grubunu dağıtmak için yapılandırın
Her iki Erişilebilirlik Alanındaki EC2 bulut sunucuları. Multi-AZ dağıtımı için veritabanı örneğini yapılandırın.

D. Her iki Erişilebilirlik Alanına yayılan bir alt ağ sağlayın. Otomatik Ölçeklendirmeyi Yapılandırma
EC2 bulut sunucularını her iki Erişilebilirlik Alanına dağıtmak için grup. Veritabanı örneğini yapılandırın
Multi-AZ dağıtımı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her Erişilebilirlik Alanında bir alt ağ sağlayın. EC2 bulut sunucularını her iki Erişilebilirlik Alanına dağıtmak için Otomatik Ölçeklendirme grubunu yapılandırın. Multi-AZ dağıtımı için veritabanı örneğini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 299
Bir araştırma laboratuvarının yaklaşık 8 TB veriyi işlemesi gerekiyor. Laboratuvar gerektirir
milisaniyenin altındaki gecikmeler ve depolama alt sistemi için minimum 6 GBps aktarım hızı.
Amazon Linux çalıştıran yüzlerce Amazon EC2 bulut sunucusu, verileri dağıtacak ve işleyecektir.
Hangi çözüm performans gereksinimlerini karşılayacak?

A. NetApp ONTAP dosya sistemi için bir Amazon FSx oluşturun. Her birimin katmanlama politikasını ALL olarak belirledik.
Ham verileri dosya sistemine aktarın. Fila sistemini EC2 bulut sunucularına bağlayın.

B. Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Lustre dosyası için Amazon FSx oluşturun
Kalıcı SSD depolama kullanan sistem. Verileri içe aktarma ve verileri dışa aktarma seçeneğini seçin
Amazon S3. Dosya sistemini EC2 bulut sunucularına bağlayın.

C. Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Lustre dosyası için Amazon FSx oluşturun
Kalıcı HDD depolamayı kullanan sistem. Verileri içe aktarma ve verileri dışa aktarma seçeneğini seçin
Amazon S3. Dosya sistemini EC2 bulut sunucularına bağlayın.

D. NetApp ONTAP dosya sistemi için bir Amazon FSx oluşturun. Her birimin katmanlama politikasını şu şekilde ayarlayın:
HİÇBİR. Ham verileri dosya sistemine aktarın. Dosya sistemini EC2 bulut sunucularına bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Kalıcı SSD depolamayı kullanan bir Amazon FSx for Luster dosya sistemi oluşturun. Amazon S3'ten veri içe aktarma ve Amazon S3'e veri aktarma seçeneğini seçin. Dosya sistemini EC2 bulut sunucularına bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
