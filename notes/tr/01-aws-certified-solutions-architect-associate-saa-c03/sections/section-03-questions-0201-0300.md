# AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları - Bölüm 03

> **Soru Aralığı:** 201 - 300 / Toplam: 684

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #201

Bir şirket, mobil uygulama kullanıcılarını hedefleyen bir pazarlama iletişimi hizmeti geliştiriyor. Şirketin kullanıcılarına Kısa Mesaj Servisi (SMS) ile onay mesajları göndermesi gerekiyor. Kullanıcıların SMS mesajlarına cevap verebilmeleri gerekir. Şirketin analiz için yanıtları bir yıl boyunca saklaması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. SMS mesajlarını göndermek için bir Amazon Connect iletişim akışı oluşturun. Yanıtları işlemek için AWS Lambda'yı kullanın.

B. Bir Amazon Pinpoint yolculuğu oluşturun. Amazon Pinpoint'i, analiz ve arşivleme amacıyla olayları bir Amazon Kinesis veri akışına gönderecek şekilde yapılandırın.

C. SMS mesajlarını dağıtmak için Amazon Simple Queue Service'i (Amazon SQS) kullanın. Yanıtları işlemek için AWS Lambda'yı kullanın.

D. Amazon Simple Notification Service (Amazon SNS) FIFO konusu oluşturun. Analiz ve arşivleme için bir Amazon Kinesis veri akışına SNS konusuna abone olun.

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

Soru #202

Bir şirket verilerini bir Amazon S3 klasörüne taşımayı planlıyor. Veriler S3 klasöründe depolandığında şifrelenmelidir. Ayrıca şifreleme anahtarının her yıl otomatik olarak değiştirilmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri S3 klasörüne taşıyın. Amazon S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemeyi kullanın. SSE-S3 şifreleme anahtarlarının yerleşik anahtar döndürme davranışını kullanın.

B. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Otomatik anahtar yönlendirmeyi etkinleştirin. Müşteri tarafından yönetilen KMS anahtarını kullanmak için S3 grubunun varsayılan şifreleme davranışını ayarlayın. Verileri S3 klasörüne taşıyın.

C. AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Müşteri tarafından yönetilen KMS anahtarını kullanmak için S3 grubunun varsayılan şifreleme davranışını ayarlayın. Verileri S3 klasörüne taşıyın. KMS anahtarını her yıl manuel olarak döndürün.

D. Verileri S3 klasörüne taşımadan önce verileri müşteri anahtarı malzemesiyle şifreleyin. Anahtar malzemesi olmadan bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Müşteri anahtarı materyalini KMS anahtarına aktarın. Otomatik anahtar yönlendirmeyi etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen bir anahtar oluşturun. Otomatik anahtar yönlendirmeyi etkinleştirin. Müşteri tarafından yönetilen KMS anahtarını kullanmak için S3 grubunun varsayılan şifreleme davranışını ayarlayın. Verileri S3 klasörüne taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #203

Bir finans şirketinin müşterileri, kısa mesaj göndererek mali müşavirlerden randevu talep etmektedir. Randevu isteklerini Amazon EC2 bulut sunucuları üzerinde çalışan bir web uygulaması kabul eder. Metin mesajları, web uygulaması aracılığıyla bir Amazon Simple Queue Service (Amazon SQS) kuyruğunda yayınlanır. EC2 bulut sunucularında çalışan başka bir uygulama daha sonra müşterilere toplantı davetiyeleri ve toplantı onayı e-posta mesajları gönderir. Başarılı planlamanın ardından bu uygulama, toplantı bilgilerini bir Amazon DynamoDB veritabanında saklar. Şirket büyüdükçe müşteriler toplantı davetlerinin gelmesinin daha uzun sürdüğünü bildiriyor. Bir çözüm mimarı bu sorunu çözmek için ne önermelidir?

A. DynamoDB veritabanının önüne bir DynamoDB Hızlandırıcı (DAX) kümesi ekleyin.

B. Randevu isteklerini kabul eden web uygulamasının önüne bir Amazon API Gateway API ekleyin.

C. Bir Amazon CloudFront dağıtımı ekleyin. Origin'i randevu isteklerini kabul eden web uygulaması olarak ayarlayın.

D. Toplantı davetiyeleri gönderen uygulama için Otomatik Ölçeklendirme grubu ekleyin. Otomatik Ölçeklendirme grubunu SQS kuyruğunun derinliğine göre ölçeklenecek şekilde yapılandırın.

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

Soru #204

Bir çevrimiçi perakende şirketinin 50 milyondan fazla aktif müşterisi var ve her gün 25.000'den fazla sipariş alıyor. Şirket, müşteriler için satın alma verilerini topluyor ve bu verileri Amazon S3'te saklıyor. Ek müşteri verileri Amazon RDS'de depolanır. Şirket, ekiplerin analitik gerçekleştirebilmesi için tüm verileri çeşitli ekiplerin kullanımına sunmak istiyor. Çözüm, verilere ilişkin ayrıntılı izinleri yönetme olanağı sağlamalı ve operasyonel ek yükü en aza indirmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Satın alma verilerini doğrudan Amazon RDS'ye yazacak şekilde taşıyın. Erişimi sınırlamak için RDS erişim kontrollerini kullanın.

B. Verileri Amazon RDS'den Amazon S3'e düzenli aralıklarla kopyalamak için bir AWS Lambda işlevi planlayın. Bir AWS Glue tarayıcısı oluşturun. Verileri sorgulamak için Amazon Athena'yı kullanın. Erişimi sınırlamak için S3 politikalarını kullanın.

C. AWS Lake Formation'ı kullanarak bir veri gölü oluşturun. Amazon RDS'ye bir AWS Glue JDBC bağlantısı oluşturun. S3 kovasını Lake Formation'a kaydedin. Erişimi sınırlamak için Göl Oluşumu erişim kontrollerini kullanın.

D. Bir Amazon Redshift kümesi oluşturun. Verileri Amazon S3 ve Amazon RDS'den Amazon Redshift'e düzenli aralıklarla kopyalamak için bir AWS Lambda işlevi planlayın. Erişimi sınırlamak için Amazon Redshift erişim kontrollerini kullanın.

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

Soru #205

Bir şirket, şirket içi veri merkezinde bir pazarlama web sitesine ev sahipliği yapıyor. Web sitesi statik dokümanlardan oluşmakta ve tek bir sunucu üzerinde çalışmaktadır. Yönetici, web sitesi içeriğini nadiren günceller ve yeni belgeleri yüklemek için bir SFTP istemcisi kullanır. Şirket, web sitesini AWS'de barındırmaya ve Amazon CloudFront'u kullanmaya karar verir. Şirketin çözüm mimarı bir CloudFront dağıtımı oluşturuyor. Çözüm mimarı, web sitesi barındırma için CloudFront kaynağı olarak hizmet verecek en uygun maliyetli ve dayanıklı mimariyi tasarlamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Lightsail'i kullanarak bir sanal sunucu oluşturun. Lightsail örneğinde web sunucusunu yapılandırın. Bir SFTP istemcisi kullanarak web sitesi içeriğini yükleyin.

B. Amazon EC2 bulut sunucuları için bir AWS Auto Scaling grubu oluşturun. Bir Application Load Balancer kullanın. Bir SFTP istemcisi kullanarak web sitesi içeriğini yükleyin.

C. Özel bir Amazon S3 klasörü oluşturun. CloudFront kaynak erişim kimliğinden (OAI) erişime izin vermek için bir S3 grup ilkesi kullanın. AWS CLI'yi kullanarak web sitesi içeriğini yükleyin.

D. Herkese açık bir Amazon S3 klasörü oluşturun. SFTP için AWS Transfer'i yapılandırın. Web sitesi barındırma için S3 paketini yapılandırın. SFTP istemcisini kullanarak web sitesi içeriğini yükleyin.

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

Soru #206

Bir şirket Amazon Machine Images'ı (AMI'leri) yönetmek istiyor. Şirket şu anda AMI'leri, AMI'lerin oluşturulduğu aynı AWS Bölgesine kopyalamaktadır. Şirketin, AWS API çağrılarını yakalayan ve şirket hesabında Amazon EC2 CreateImage API işlemi her çağrıldığında uyarı gönderen bir uygulama tasarlaması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AWS CloudTrail günlüklerini sorgulamak ve CreateImage API çağrısı algılandığında uyarı göndermek için bir AWS Lambda işlevi oluşturun.

B. AWS CloudTrail'i, güncellenen günlükler Amazon S3'e gönderildiğinde oluşan bir Amazon Simple Notification Service (Amazon SNS) bildirimiyle yapılandırın. Yeni bir tablo oluşturmak ve bir API çağrısı algılandığında CreateImage'da sorgulama yapmak için Amazon Athena'yı kullanın.

C. CreateImage API çağrısı için bir Amazon EventBridge (Amazon CloudWatch Events) kuralı oluşturun. CreateImage API çağrısı algılandığında uyarı göndermek için hedefi bir Amazon Simple Notification Service (Amazon SNS) konusu olarak yapılandırın.

D. AWS CloudTrail günlükleri için hedef olarak bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğunu yapılandırın. CreateImage API çağrısı algılandığında Amazon Simple Notification Service (Amazon SNS) konusuna uyarı göndermek için bir AWS Lambda işlevi oluşturun.

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

Soru #207

Bir şirket, kullanıcı isteklerini almak ve istek türüne bağlı olarak istekleri işlenmek üzere uygun mikro hizmete göndermek için kullanılan eşzamansız bir API'ye sahiptir. Şirket, API ön ucunu dağıtmak için Amazon API Gateway'i ve kullanıcı isteklerini işleme mikro hizmetlerine göndermeden önce depolamak için Amazon DynamoDB'yi çağıran bir AWS Lambda işlevini kullanıyor. Şirket, bütçesinin izin verdiği kadar DynamoDB aktarım hızı sağladı ancak şirket hâlâ kullanılabilirlik sorunları yaşıyor ve kullanıcı isteklerini kaybediyor. Bir çözüm mimarı bu sorunu mevcut kullanıcıları etkilemeden çözmek için ne yapmalıdır?

A. Sunucu tarafı kısıtlama sınırlarıyla API Ağ Geçidine kısıtlama ekleyin.

B. DynamoDB'ye yazma işlemlerini ara belleğe almak için DynamoDB Accelerator (DAX) ve Lambda'yı kullanın.

C. Kullanıcı isteklerini içeren tablo için DynamoDB'de ikincil bir dizin oluşturun.

D. Yazma işlemlerini DynamoDB'ye ara belleğe almak için Amazon Simple Queue Service (Amazon SQS) kuyruğunu ve Lambda'yı kullanın.

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

Soru #208

Bir şirketin verileri bir Amazon EC2 bulut sunucusundan bir Amazon S3 klasörüne taşıması gerekiyor. Şirket, hiçbir API çağrısının ve hiçbir verinin halka açık internet yolları üzerinden yönlendirilmemesini sağlamalıdır. Yalnızca EC2 bulut sunucusunun S3 klasörüne veri yükleme erişimi olabilir. Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucusunun bulunduğu alt ağda Amazon S3 için bir arayüz VPC uç noktası oluşturun. Yalnızca EC2 bulut sunucusunun IAM rolünün erişimine izin vermek için S3 klasörüne bir kaynak politikası ekleyin.

B. EC2 bulut sunucusunun bulunduğu Erişilebilirlik Alanında Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Uygun güvenlik gruplarını uç noktaya ekleyin. Yalnızca EC2 bulut sunucusunun IAM rolünün erişimine izin vermek için S3 klasörüne bir kaynak politikası ekleyin.

C. S3 paketinin hizmet API uç noktasının özel IP adresini almak için EC2 örneğinin içinden nslookup aracını çalıştırın. EC2 örneğinin S3 klasörüne erişimini sağlamak için VPC rota tablosunda bir rota oluşturun. Yalnızca EC2 bulut sunucusunun IAM rolünün erişimine izin vermek için S3 klasörüne bir kaynak politikası ekleyin.

D. S3 kümesinin hizmet API uç noktasının özel IP adresini almak için AWS tarafından sağlanan, herkese açık ip-ranges.json dosyasını kullanın. EC2 örneğinin S3 klasörüne erişimini sağlamak için VPC rota tablosunda bir rota oluşturun. Yalnızca EC2 bulut sunucusunun IAM rolünün erişimine izin vermek için S3 klasörüne bir kaynak politikası ekleyin.

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

Soru #209

Bir çözüm mimarı, AWS Cloud'a dağıtılan yeni bir uygulamanın mimarisini tasarlıyor. Uygulama, Amazon EC2 İsteğe Bağlı Bulut Sunucularında çalışacak ve birden fazla Erişilebilirlik Alanında otomatik olarak ölçeklenecektir. EC2 bulut sunucularının ölçeği gün boyunca sık sık artacak ve azalacaktır. Bir Uygulama Yük Dengeleyicisi (ALB) yük dağıtımını yönetecektir. Mimarinin dağıtılmış oturum veri yönetimini desteklemesi gerekir. Şirket gerekirse kodda değişiklik yapmaya hazır. Mimarinin dağıtılmış oturum veri yönetimini desteklediğinden emin olmak için çözüm mimarı ne yapmalıdır?

A. Oturum verilerini yönetmek ve depolamak için Amazon ElastiCache'i kullanın.

B. Oturum verilerini yönetmek için ALB'nin oturum benzeşimini (yapışkan oturumlar) kullanın.

C. Oturumu yönetmek için AWS Systems Manager'daki Session Manager'ı kullanın.

D. Oturumu yönetmek için AWS Security Token Service'deki (AWS STS) GetSessionToken API işlemini kullanın.

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

Soru #210

Bir şirket hızla büyüyen bir yemek dağıtım hizmeti sunuyor. Büyüme nedeniyle şirketin sipariş işleme sistemi, trafiğin yoğun olduğu saatlerde ölçeklendirme sorunları yaşıyor. Mevcut mimari aşağıdakileri içerir: • Uygulamadan sipariş toplamak için bir Amazon EC2 Auto Scaling grubunda çalışan bir grup Amazon EC2 bulut sunucusu • Siparişleri yerine getirmek için bir Amazon EC2 Auto Scaling grubunda çalışan başka bir EC2 bulut sunucusu grubu Sipariş toplama süreci hızlı bir şekilde gerçekleşir ancak siparişin yerine getirilmesi süreci daha uzun sürebilir. Ölçeklendirme olayı nedeniyle veriler kaybolmamalıdır. Bir çözüm mimarı, trafiğin yoğun olduğu saatlerde sipariş toplama sürecinin ve sipariş gerçekleştirme sürecinin her ikisinin de uygun şekilde ölçeklenebilmesini sağlamalıdır. Çözüm, şirketin AWS kaynaklarının kullanımını optimize etmelidir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Otomatik Ölçeklendirme gruplarındaki her bulut sunucusunun CPU'sunu izlemek için Amazon CloudWatch ölçümlerini kullanın. Her Otomatik Ölçeklendirme grubunun minimum kapasitesini en yüksek iş yükü değerlerine göre yapılandırın.

B. Otomatik Ölçeklendirme gruplarındaki her bulut sunucusunun CPU'sunu izlemek için Amazon CloudWatch ölçümlerini kullanın. İsteğe bağlı olarak ek Otomatik Ölçeklendirme grupları oluşturan bir Amazon Simple Notification Service (Amazon SNS) konusunu çağırmak için bir CloudWatch alarmı yapılandırın.

C. İki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın: biri sipariş toplama ve diğeri siparişin yerine getirilmesi için. EC2 bulut sunucularını ilgili kuyrukları yoklayacak şekilde yapılandırın. Kuyrukların gönderdiği bildirimlere göre Otomatik Ölçeklendirme gruplarını ölçeklendirin.

D. İki Amazon Simple Queue Service (Amazon SQS) kuyruğu sağlayın: biri sipariş toplama ve diğeri siparişin yerine getirilmesi için. EC2 bulut sunucularını ilgili kuyrukları yoklayacak şekilde yapılandırın. Örnek başına birikim hesaplamasına dayalı bir ölçüm oluşturun. Otomatik Ölçeklendirme gruplarını bu metriğe göre ölçeklendirin.

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

Soru #211

Bir şirket birden fazla üretim uygulamasına ev sahipliği yapar. Uygulamalardan biri, birden fazla AWS Bölgesinde Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS) ve Amazon Simple Queue Service (Amazon SQS) kaynaklarından oluşur. Tüm şirket kaynakları, "uygulama" etiket adı ve her uygulamaya karşılık gelen bir değerle etiketlenir. Bir çözüm mimarı, etiketli bileşenlerin tamamını tanımlamak için en hızlı çözümü sağlamalıdır. Hangi çözüm bu gereksinimleri karşılıyor?

A. Uygulama etiketiyle kaynakların bir listesini oluşturmak için AWS CloudTrail'i kullanın.

B. Etiketli bileşenleri raporlamak amacıyla tüm Bölgelerdeki her hizmeti sorgulamak için AWS CLI'yi kullanın.

C. Uygulama etiketine sahip bileşenler hakkında rapor oluşturmak için Amazon CloudWatch Logs Insights'ta bir sorgu çalıştırın.

D. Uygulama etiketiyle kaynaklar hakkında genel olarak raporlama yapmak için AWS Kaynak Grupları Etiket Düzenleyicisi ile bir sorgu çalıştırın.

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

Soru #212

Bir şirketin, diğer ekiplerin erişebilmesi için veritabanını günde bir kez Amazon S3'e aktarması gerekir. Dışa aktarılan nesnenin boyutu 2 GB ile 5 GB arasında değişir. Verilere yönelik S3 erişim düzeni değişkendir ve hızla değişir. Veriler anında kullanılabilir olmalı ve 3 aya kadar erişilebilir kalmalıdır. Şirketin, geri alma süresini artırmayacak, en uygun maliyetli çözüme ihtiyacı var. Şirket bu gereksinimleri karşılamak için hangi S3 depolama sınıfını kullanmalıdır?

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

Soru #213

Bir şirket yeni bir mobil uygulama geliştiriyor. Şirket, Uygulama Yük Dengeleyicisini (ALB) siteler arası komut dosyası çalıştırma veya SQL enjeksiyonu gibi yaygın uygulama düzeyindeki saldırılara karşı korumak için uygun trafik filtrelemeyi uygulamalıdır. Şirketin minimum altyapı ve operasyonel personeli vardır. Şirketin, AWS ortamı için sunucuların yönetimi, güncellenmesi ve güvenliğinin sağlanması konusundaki sorumluluk payını azaltması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. AWS WAF kurallarını yapılandırın ve bunları ALB ile ilişkilendirin.

B. Uygulamayı, genel barındırma etkinken Amazon S3'ü kullanarak dağıtın.

C. AWS Shield Advanced'i dağıtın ve ALB'yi korumalı kaynak olarak ekleyin.

D. Trafiği, üçüncü taraf güvenlik duvarı çalıştıran bir Amazon EC2 bulut sunucusuna yönlendiren ve daha sonra trafiği mevcut ALB'ye aktaran yeni bir ALB oluşturun.

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

Soru #214

Bir şirketin raporlama sistemi her gün yüzlerce .csv dosyasını bir Amazon S3 klasörüne gönderiyor. Şirketin bu dosyaları Apache Parquet formatına dönüştürmesi ve dosyaları dönüştürülmüş bir veri kümesinde saklaması gerekir. Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. Apache Spark'ın yüklü olduğu bir Amazon EMR kümesi oluşturun. Verileri dönüştürmek için bir Spark uygulaması yazın. Dönüştürülen veri grubuna dosya yazmak için EMR Dosya Sistemini (EMRFS) kullanın.

B. Verileri keşfetmek için bir AWS Glue tarayıcısı oluşturun. Verileri dönüştürmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. Çıkış adımında dönüştürülen veri grubunu belirtin.

C. Verileri dönüştürmek ve verileri dönüştürülen veri kümesine çıkarmak amacıyla Bash sözdizimi ile bir iş tanımı oluşturmak için AWS Batch'i kullanın. Bir iş göndermek için iş tanımını kullanın. İş türü olarak bir dizi işi belirtin.

D. Verileri dönüştürmek ve verileri dönüştürülen veri kümesine çıkarmak için bir AWS Lambda işlevi oluşturun. S3 grubu için bir olay bildirimi yapılandırın. Olay bildiriminin hedefi olarak Lambda işlevini belirtin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri keşfetmek için bir AWS Glue tarayıcısı oluşturun. Verileri dönüştürmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. Çıkış adımında dönüştürülen veri grubunu belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #215

Bir şirketin veri merkezinde ağa bağlı depolama alanında (NAS) depolanan 700 TB'lık yedekleme verisi bulunmaktadır. Bu yedekleme verilerinin sık olmayan düzenleyici talepler için erişilebilir olması ve 7 yıl süreyle saklanması gerekir. Şirket, bu yedekleme verilerini veri merkezinden AWS'ye taşımaya karar verdi. Taşıma işleminin 1 ay içerisinde tamamlanması gerekmektedir. Şirketin halka açık internet bağlantısında veri aktarımı için 500 Mbps tahsis edilmiş bant genişliği bulunmaktadır. Bir çözüm mimarı, verileri EN DÜŞÜK maliyetle taşımak ve depolamak için ne yapmalıdır?

A. Verileri aktarmak için AWS Snowball cihazlarını sipariş edin. Dosyaları Amazon S3 Glacier Deep Archive'a geçirmek için bir yaşam döngüsü politikası kullanın.

B. Veri merkezi ile Amazon VPC arasında bir VPN bağlantısı kurun. Verileri şirket içinden Amazon S3 Glacier'a kopyalamak için AWS CLI'yi kullanın.

C. 500 Mbps AWS Direct Connect bağlantısı sağlayın ve verileri Amazon S3'e aktarın. Dosyaları Amazon S3 Glacier Deep Archive'a geçirmek için bir yaşam döngüsü politikası kullanın.

D. Verileri aktarmak ve şirket içinde bir DataSync aracısı dağıtmak için AWS DataSync'i kullanın. Dosyaları şirket içi NAS depolama alanından Amazon S3 Glacier'a kopyalamak için DataSync görevini kullanın.

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

Soru #216

Bir şirketin Amazon S3 klasöründe milyonlarca nesne içeren sunucusuz bir web sitesi var. Şirket, Amazon CloudFront dağıtımının kaynağı olarak S3 paketini kullanıyor. Şirket, nesneler yüklenmeden önce S3 klasörüne şifreleme koymadı. Bir çözüm mimarının mevcut tüm nesneler ve gelecekte S3 klasörüne eklenecek tüm nesneler için şifrelemeyi etkinleştirmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ çabayla karşılayacak?

A. Yeni bir S3 klasörü oluşturun. Yeni S3 grubu için varsayılan şifreleme ayarlarını açın. Mevcut tüm nesneleri geçici yerel depolamaya indirin. Nesneleri yeni S3 klasörüne yükleyin.

B. S3 grubu için varsayılan şifreleme ayarlarını açın. Şifrelenmemiş nesneleri listeleyen bir .csv dosyası oluşturmak için S3 Envanter özelliğini kullanın. Bu nesneleri şifrelemek için copy komutunu kullanan bir S3 Toplu İşlemler işi çalıştırın.

C. AWS Key Management Service'i (AWS KMS) kullanarak yeni bir şifreleme anahtarı oluşturun. AWS KMS tarafından yönetilen şifreleme anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanmak için S3 klasöründeki ayarları değiştirin. S3 grubu için sürüm oluşturmayı açın.

D. AWS Management Console'da Amazon S3'e gidin. S3 kovasının nesnelerine göz atın. Şifreleme alanına göre sıralayın. Şifrelenmemiş her nesneyi seçin. Varsayılan şifreleme ayarlarını S3 klasöründeki şifrelenmemiş her nesneye uygulamak için Değiştir düğmesini kullanın.

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

Soru #217

Bir şirket, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında global bir web uygulaması çalıştırıyor. Uygulama, verileri Amazon Aurora'da saklar. Şirketin bir felaket kurtarma çözümü oluşturması gerekiyor ve 30 dakikaya kadar kesinti ve potansiyel veri kaybını tolere edebilecek. Birincil altyapı sağlıklı olduğunda çözümün yükü kaldırmasına gerek yoktur. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygulamayı gerekli altyapı öğeleri mevcut olacak şekilde dağıtın. Aktif-pasif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın. İkinci bir AWS Bölgesinde bir Aurora Replikası oluşturun.

B. Uygulamanın küçültülmüş bir dağıtımını ikinci bir AWS Bölgesinde barındırın. Aktif-aktif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın. İkinci Bölgede bir Aurora Kopyası oluşturun.

C. Birincil altyapıyı ikinci bir AWS Bölgesinde çoğaltın. Aktif-aktif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın. En son anlık görüntüden geri yüklenen bir Aurora veritabanı oluşturun.

D. AWS Backup ile verileri yedekleyin. İkinci bir AWS Bölgesinde gerekli altyapıyı oluşturmak için yedeği kullanın. Aktif-pasif yük devretmeyi yapılandırmak için Amazon Route 53'ü kullanın. İkinci Bölgede bir Aurora ikinci birincil bulut sunucusu oluşturun.

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

Soru #218

Bir şirketin, Esnek IP adresine sahip genel bir alt ağda Amazon EC2 bulut sunucusu üzerinde çalışan bir web sunucusu vardır. Varsayılan güvenlik grubu EC2 örneğine atanır. Varsayılan ağ ACL'si tüm trafiği engelleyecek şekilde değiştirildi. Bir çözüm mimarının, web sunucusunu 443 numaralı bağlantı noktasından her yerden erişilebilir hale getirmesi gerekir. Bu görevi hangi adım kombinasyonu gerçekleştirecektir? (İki tane seçin.)

A. 0.0.0.0/0 kaynağından TCP bağlantı noktası 443'e izin verecek kurala sahip bir güvenlik grubu oluşturun.

B. TCP bağlantı noktası 443'ün hedef 0.0.0.0/0'a gitmesine izin verecek kurala sahip bir güvenlik grubu oluşturun.

C. Ağ ACL'sini, 0.0.0.0/0 kaynağından TCP bağlantı noktası 443'e izin verecek şekilde güncelleyin.

D. Ağ ACL'sini, kaynak 0.0.0.0/0'dan hedef 0.0.0.0/0'a gelen/giden TCP bağlantı noktası 443'e izin verecek şekilde güncelleyin.

E. Ağ ACL'sini, kaynak 0.0.0.0/0'dan gelen TCP bağlantı noktası 443'e ve hedef 0.0.0.0/0'a giden TCP bağlantı noktası 32768-65535'e izin verecek şekilde güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** 0.0.0.0/0 kaynağından TCP bağlantı noktası 443'e izin verecek kurala sahip bir güvenlik grubu oluşturun. Ağ ACL'sini, kaynak 0.0.0.0/0'dan gelen TCP bağlantı noktası 443'e ve hedef 0.0.0.0/0'a giden TCP bağlantı noktası 32768-65535'e izin verecek şekilde güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #219

Bir şirketin uygulamasında performans sorunları yaşanıyor. Uygulama durum bilgilidir ve Amazon EC2 bulut sunucularında bellek içi görevleri tamamlaması gerekir. Şirket, altyapıyı dağıtmak için AWS CloudFormation'ı ve M5 EC2 bulut sunucusu ailesini kullandı. Trafik arttıkça uygulama performansı düştü. Kullanıcılar uygulamaya erişmeye çalıştığında gecikmeler olduğunu bildiriyorlar. Hangi çözüm bu sorunları operasyonel açıdan EN verimli şekilde çözecektir?

A. EC2 bulut sunucularını Otomatik Ölçeklendirme grubunda çalışan T3 EC2 bulut sunucularıyla değiştirin. AWS Management Console'u kullanarak değişiklikleri yapın.

B. EC2 örneklerini bir Otomatik Ölçeklendirme grubunda çalıştırmak için CloudFormation şablonlarını değiştirin. Artırma gerektiğinde Otomatik Ölçeklendirme grubunun istenen kapasitesini ve maksimum kapasitesini manuel olarak artırın.

C. CloudFormation şablonlarını değiştirin. EC2 bulut sunucularını R5 EC2 bulut sunucularıyla değiştirin. Gelecekteki kapasite planlamasına yönelik uygulama performansını izlemek için Amazon CloudWatch yerleşik EC2 bellek ölçümlerini kullanın.

D. CloudFormation şablonlarını değiştirin. EC2 bulut sunucularını R5 EC2 bulut sunucularıyla değiştirin. Gelecekteki kapasite planlamasına yönelik özel uygulama gecikme ölçümleri oluşturmak için Amazon CloudWatch aracısını EC2 bulut sunucularına dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** CloudFormation şablonlarını değiştirin. EC2 bulut sunucularını R5 EC2 bulut sunucularıyla değiştirin. Gelecekteki kapasite planlamasına yönelik özel uygulama gecikme ölçümleri oluşturmak için Amazon CloudWatch aracısını EC2 bulut sunucularına dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #220

Bir çözüm mimarı, Amazon API Gateway'i kullanarak kullanıcılardan istekleri alacak yeni bir API tasarlıyor. İsteklerin hacmi oldukça değişkendir; tek bir istek almadan birkaç saat geçebilir. Veri işleme eşzamansız olarak gerçekleştirilecektir ancak istek yapıldıktan sonra birkaç saniye içinde tamamlanmalıdır. Çözüm mimarının, gereksinimleri en düşük maliyetle sağlamak için API'nin hangi bilgi işlem hizmetini çağırması gerekir?

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

Soru #221

Bir şirket, bir grup Amazon Linux EC2 bulut sunucusu üzerinde bir uygulama çalıştırıyor. Uyumluluk nedeniyle şirketin tüm uygulama günlük dosyalarını 7 yıl süreyle saklaması gerekir. Günlük dosyaları, tüm dosyalara aynı anda erişebilmesi gereken bir raporlama aracı tarafından analiz edilecektir. Hangi depolama çözümü bu gereksinimleri EN uygun maliyetle karşılıyor?

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

Soru #222

Bir şirket, şirketin AWS hesabında iş yapması için harici bir tedarikçi kiraladı. Satıcı, sahibi olduğu bir AWS hesabında barındırılan otomatik bir araç kullanır. Satıcının şirketin AWS hesabına IAM erişimi yok. Bir çözüm mimarı satıcıya bu erişimi nasıl sağlamalıdır?

A. Satıcının IAM rolüne erişim yetkisi vermek için şirket hesabında bir IAM rolü oluşturun. Satıcının gerektirdiği izinler için uygun IAM politikalarını role ekleyin.

B. Şirket hesabında, şifre karmaşıklığı gereksinimlerini karşılayan bir şifreye sahip bir IAM kullanıcısı oluşturun. Satıcının gerektirdiği izinler için uygun IAM politikalarını kullanıcıya ekleyin.

C. Şirketin hesabında bir IAM grubu oluşturun. Aracın IAM kullanıcısını satıcı hesabından gruba ekleyin. Satıcının gerektirdiği izinler için uygun IAM politikalarını gruba ekleyin.

D. IAM konsolunda sağlayıcı türü olarak "AWS hesabı"nı seçerek yeni bir kimlik sağlayıcı oluşturun. Satıcının AWS hesap kimliğini ve kullanıcı adını sağlayın. Satıcının gerektirdiği izinler için uygun IAM politikalarını yeni sağlayıcıya ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Satıcının IAM rolüne erişim yetkisi vermek için şirket hesabında bir IAM rolü oluşturun. Satıcının gerektirdiği izinler için uygun IAM politikalarını role ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #223

Bir şirket, özel alt ağlarda Amazon Elastic Kubernetes Service (Amazon EKS) üzerinde çalışan bir Java Spring Boot uygulamasını pod olarak dağıttı. Uygulamanın bir Amazon DynamoDB tablosuna veri yazması gerekiyor. Bir çözüm mimarı, uygulamanın internet trafiğini açığa çıkarmadan DynamoDB tablosuyla etkileşime girebildiğinden emin olmalıdır. Çözüm mimarı bu hedefe ulaşmak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. EKS bölmesine yeterli ayrıcalıklara sahip bir IAM rolü ekleyin.

B. EKS bölmesine yeterli ayrıcalıklara sahip bir IAM kullanıcısını ekleyin.

C. Özel alt ağların ağ ACL'leri aracılığıyla DynamoDB tablosuna giden bağlantıya izin verin.

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

Soru #224

Bir şirket yakın zamanda uygulamayı tek bir AWS Bölgesindeki Amazon EC2 bulut sunucularında yeniden barındırarak web uygulamasını AWS'ye geçirdi. Şirket, uygulama mimarisini yüksek düzeyde kullanılabilir ve hataya dayanıklı olacak şekilde yeniden tasarlamak istiyor. Trafik, çalışan tüm EC2 bulut sunucularına rastgele ulaşmalıdır. Şirket bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Bir Amazon Route 53 yük devretme yönlendirme politikası oluşturun.

B. Amazon Route 53 ağırlıklı bir yönlendirme politikası oluşturun.

C. Bir Amazon Route 53 çoklu değer yanıt yönlendirme politikası oluşturun.

D. Üç EC2 bulut sunucusu başlatın: bir Erişilebilirlik Alanında iki bulut sunucusu ve başka bir Erişilebilirlik Alanında bir bulut sunucusu.

E. Dört EC2 bulut sunucusu başlatın: bir Erişilebilirlik Alanında iki bulut sunucusu ve başka bir Erişilebilirlik Alanında iki bulut sunucusu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Amazon Route 53 çok değerli yanıt yönlendirme politikası oluşturun. Dört EC2 bulut sunucusu başlatın: bir Erişilebilirlik Alanında iki bulut sunucusu ve başka bir Erişilebilirlik Alanında iki bulut sunucusu.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru #225

Bir medya şirketi, şirket içindeki kullanıcı etkinliği verilerini toplar ve analiz eder. Şirket bu yeteneği AWS'ye taşımak istiyor. Kullanıcı etkinliği veri deposu büyümeye devam edecek ve boyutu petabaytlara ulaşacak. Şirketin SQL ile mevcut verilerin ve yeni verilerin isteğe bağlı analitiğini kolaylaştıran, yüksek oranda kullanılabilir bir veri alımı çözümü oluşturması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Etkinlik verilerini bir Amazon Kinesis veri akışına gönderin. Verileri bir Amazon S3 klasörüne teslim edecek şekilde akışı yapılandırın.

B. Etkinlik verilerini bir Amazon Kinesis Data Firehose teslim akışına gönderin. Verileri bir Amazon Redshift kümesine teslim edecek şekilde akışı yapılandırın.

C. Etkinlik verilerini bir Amazon S3 klasörüne yerleştirin. Amazon S3'ü, veriler S3 klasörüne ulaştığında veriler üzerinde bir AWS Lambda işlevi çalıştıracak şekilde yapılandırın.

D. Birden fazla Erişilebilirlik Alanına yayılmış Amazon EC2 bulut sunucularında bir alım hizmeti oluşturun. Hizmeti, verileri bir Amazon RDS Multi-AZ veritabanına iletecek şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Etkinlik verilerini bir Amazon Kinesis Data Firehose teslim akışına gönderin. Verileri bir Amazon Redshift kümesine teslim edecek şekilde akışı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #226

Bir şirket, Amazon EC2 örneğinde çalışan RESTful web hizmetleri uygulamasını kullanarak binlerce uzak cihazdan veri topluyor. EC2 bulut sunucusu ham verileri alır, ham verileri dönüştürür ve tüm verileri bir Amazon S3 klasöründe depolar. Uzak cihazların sayısı yakında milyonlara ulaşacak. Şirketin operasyonel ek yükü en aza indirecek yüksek düzeyde ölçeklenebilir bir çözüme ihtiyacı var. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Amazon S3'teki ham verileri işlemek için AWS Glue'yu kullanın.

B. Trafiği farklı EC2 bulut sunucularına yönlendirmek için Amazon Route 53'ü kullanın.

C. Artan miktarda gelen veriyi karşılamak için daha fazla EC2 bulut sunucusu ekleyin.

D. Ham verileri Amazon Simple Queue Service'e (Amazon SQS) gönderin. Verileri işlemek için EC2 bulut sunucularını kullanın.

E. Ham verileri bir Amazon Kinesis veri akışına göndermek için Amazon API Gateway'i kullanın. Verileri Amazon S3'e iletmek için veri akışını kaynak olarak kullanmak üzere Amazon Kinesis Data Firehose'u yapılandırın.

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

Soru #227

Bir şirketin AWS CloudTrail günlüklerini 3 yıl boyunca saklaması gerekir. Şirket, ana hesaptaki AWS Organizasyonlarını kullanarak CloudTrail'i bir dizi AWS hesabında zorunlu kılıyor. CloudTrail hedef S3 grubu, S3 Sürüm Oluşturma etkin olacak şekilde yapılandırılmıştır. Mevcut nesnelerin 3 yıl sonra silinmesine yönelik bir S3 Yaşam Döngüsü politikası mevcuttur. S3 klasörü kullanımının dördüncü yılından sonra S3 klasörü ölçümleri, nesne sayısının artmaya devam ettiğini gösteriyor. Ancak S3 klasörüne gönderilen yeni CloudTrail günlüklerinin sayısı tutarlı kaldı. Hangi çözüm 3 yıldan eski nesneleri EN uygun maliyetle silecektir?

A. Kuruluşun merkezi CloudTrail izini, nesnelerin 3 yıl sonra geçerliliğini yitirecek şekilde yapılandırın.

B. Mevcut sürümlerin yanı sıra önceki sürümleri de silmek için S3 Yaşam Döngüsü ilkesini yapılandırın.

C. Amazon S3'teki 3 yıldan eski nesneleri numaralandırmak ve silmek için bir AWS Lambda işlevi oluşturun.

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

Soru #228

Bir şirketin, izleme cihazları filosundan gerçek zamanlı veriler alan bir API'si vardır. API, bu verileri daha sonra analiz edilmek üzere bir Amazon RDS DB örneğinde saklar. İzleme cihazlarının API'ye gönderdiği veri miktarı dalgalanır. Trafiğin yoğun olduğu dönemlerde API sıklıkla zaman aşımı hataları döndürür. Günlüklerin incelenmesinin ardından şirket, veritabanının API'den gelen yazma trafiğinin hacmini işleyemediğini belirler. Bir çözüm mimarı, veritabanına olan bağlantı sayısını en aza indirmeli ve trafiğin yoğun olduğu dönemlerde verilerin kaybolmamasını sağlamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Veritabanı bulut sunucusunun boyutunu, daha fazla kullanılabilir belleğe sahip bir bulut sunucusu tipine yükseltin.

B. Veritabanı bulut sunucusunu Multi-AZ Veritabanı bulut sunucusu olacak şekilde değiştirin. Uygulamayı tüm etkin RDS Veritabanı bulut sunucularına yazacak şekilde yapılandırın.

C. Gelen verileri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazmak için API'yi değiştirin. Sıradaki verileri veritabanına yazmak için Amazon SQS'nin çağırdığı bir AWS Lambda işlevini kullanın.

D. Amazon Simple Notification Service (Amazon SNS) konusuna gelen verileri yazmak için API'yi değiştirin. Konudan veritabanına veri yazmak için Amazon SNS'nin çağırdığı bir AWS Lambda işlevini kullanın.

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

Soru #229

Bir şirket, MySQL veritabanlarını çalıştıran kendi Amazon EC2 bulut sunucularını yönetmektedir. Şirket, talep arttıkça veya azaldıkça çoğaltma ve ölçeklendirmeyi manuel olarak yönetiyor. Şirketin, gerektiğinde veritabanı katmanına bilgi işlem kapasitesi ekleme veya veritabanı katmanından bilgi işlem kapasitesini kaldırma sürecini basitleştirecek yeni bir çözüme ihtiyacı var. Çözüm aynı zamanda minimum operasyon çabasıyla gelişmiş performans, ölçeklendirme ve dayanıklılık sunmalıdır. Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanlarını Aurora MySQL için Amazon Aurora Serverless'a taşıyın.

B. Veritabanlarını Aurora PostgreSQL için Amazon Aurora Serverless'a taşıyın.

C. Veritabanlarını daha büyük bir MySQL veritabanında birleştirin. Daha büyük veritabanını daha büyük EC2 bulut sunucularında çalıştırın.

D. Veritabanı katmanı için bir EC2 Otomatik Ölçeklendirme grubu oluşturun. Mevcut veritabanlarını yeni ortama taşıyın.

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

Soru #230

Bir şirket, kullanımda olan iki NAT örneğinin artık şirketin uygulaması için gereken trafiği destekleyemeyeceğinden endişe duymaktadır. Bir çözüm mimarı, yüksek düzeyde kullanılabilir, hataya dayanıklı ve otomatik olarak ölçeklenebilir bir çözüm uygulamak ister. Çözüm mimarı ne tavsiye etmelidir?

A. İki NAT örneğini kaldırın ve bunları aynı Erişilebilirlik Alanındaki iki NAT ağ geçidiyle değiştirin.

B. Farklı Erişilebilirlik Alanlarındaki NAT bulut sunucuları için Ağ Yük Dengeleyicileriyle Otomatik Ölçeklendirme gruplarını kullanın.

C. İki NAT örneğini kaldırın ve bunları farklı Erişilebilirlik Alanlarındaki iki NAT ağ geçidiyle değiştirin.

D. İki NAT örneğini farklı Erişilebilirlik Alanlarındaki Spot Bulut Sunucularıyla değiştirin ve bir Ağ Yük Dengeleyici dağıtın.

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

Soru #231

Bir uygulama, VPC A'da Esnek IP adresine sahip bir Amazon EC2 bulut sunucusunda çalışır. Uygulama, VPC B'deki bir veritabanına erişim gerektirir. Her iki VPC de aynı AWS hesabındadır. Hangi çözüm gerekli erişimi EN güvenli şekilde sağlayacaktır?

A. VPC A'daki uygulama sunucusunun genel IP adresinden gelen tüm trafiğe izin veren bir veritabanı bulut sunucusu güvenlik grubu oluşturun.

B. VPC A ile VPC B arasında bir VPC eşleme bağlantısı yapılandırın.

C. Veritabanı bulut sunucusunu herkesin erişimine açık hale getirin. Veritabanı bulut sunucusuna genel bir IP adresi atayın.

D. VPC'de Elastik IP adresine sahip bir EC2 örneğini başlatın B. Tüm istekleri yeni EC2 örneği üzerinden proxy olarak gönderin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** VPC A ile VPC B arasında bir VPC eşleme bağlantısı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #232

Bir şirket, müşterileri için Amazon EC2 bulut sunucularında tanıtım ortamları çalıştırıyor. Her ortam kendi VPC'sinde yalıtılmıştır. Bir ortama RDP veya SSH erişimi kurulduğunda şirketin operasyon ekibinin bilgilendirilmesi gerekir.

A. RDP veya SSH erişimi algılandığında AWS Systems Manager OpsItems oluşturmak için Amazon CloudWatch Application Insights'ı yapılandırın.

B. EC2 bulut sunucularını, AmazonSSMManagedInstanceCore politikasının eklendiği bir IAM rolüne sahip bir IAM bulut sunucusu profiliyle yapılandırın.

C. VPC akış günlüklerini Amazon CloudWatch Logs'ta yayınlayın. Gerekli metrik filtreleri oluşturun. Alarmın ALARM durumunda olduğu durumlar için bildirim eylemi içeren bir Amazon CloudWatch ölçüm alarmı oluşturun.

D. EC2 Bulut Sunucusu Durum Değişikliği Bildirimi türündeki olayları dinlemek için bir Amazon EventBridge kuralı yapılandırın. Hedef olarak bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın. Operasyon ekibini konuya abone olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** VPC akış günlüklerini Amazon CloudWatch Logs'ta yayınlayın. Gerekli metrik filtreleri oluşturun. Alarmın ALARM durumunda olduğu durumlar için bildirim eylemi içeren bir Amazon CloudWatch ölçüm alarmı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru #233

Bir çözüm mimarı yeni bir AWS hesabı oluşturdu ve AWS hesabının kök kullanıcı erişimini güvence altına alması gerekiyor. Hangi eylem kombinasyonu bunu başaracak? (İki tane seçin.)

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

Soru #234

Bir şirket yeni bir web tabanlı müşteri ilişkileri yönetimi uygulaması geliştiriyor. Uygulama, Application Load Balancer'ın (ALB) arkasında Amazon Elastic Block Store (Amazon EBS) birimleri tarafından desteklenen çeşitli Amazon EC2 bulut sunucularını kullanacak. Uygulama aynı zamanda bir Amazon Aurora veritabanını da kullanacak. Uygulamaya ilişkin tüm veriler, beklemede ve aktarım sırasında şifrelenmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Aktarılan verileri şifrelemek için ALB'de AWS Key Management Service (AWS KMS) sertifikalarını kullanın. Kullanımda olmayan EBS birimlerini ve Aurora veritabanı depolama alanını şifrelemek için AWS Sertifika Yöneticisini (ACM) kullanın.

B. AWS Management Console'da oturum açmak için AWS kök hesabını kullanın. Şirketin şifreleme sertifikalarını yükleyin. Kök hesaptayken, hesap için bekleyen ve aktarılan tüm veriler için şifrelemeyi açma seçeneğini seçin.

C. Kullanımda olmayan EBS birimlerini ve Aurora veritabanı depolama alanını şifrelemek için AWS Key Management Service'i (AWS KMS) kullanın. Aktarılan verileri şifrelemek için ALB'ye bir AWS Sertifika Yöneticisi (ACM) sertifikası ekleyin.

D. Kullanımda olmayan tüm verileri şifrelemek için BitLocker'ı kullanın. Şirketin TLS sertifika anahtarlarını AWS Key Management Service'e (AWS KMS) aktarın. Aktarılan verileri şifrelemek için KMS anahtarlarını ALB'ye ekleyin.

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

Soru #235

Bir şirket şirket içi Oracle veritabanını Amazon Aurora PostgreSQL'e taşıyor. Veritabanında aynı tablolara yazan birçok uygulama vardır. Uygulamaların, her geçiş arasında bir ay olacak şekilde tek tek taşınması gerekir. Yönetim, veritabanının yüksek sayıda okuma ve yazma sayısına sahip olduğuna dair endişelerini dile getirdi. Verilerin geçiş boyunca her iki veritabanında da senkronize tutulması gerekir. Bir çözüm mimarı ne tavsiye etmelidir?

A. İlk geçiş için AWS DataSync'i kullanın. Bir değişiklik veri yakalama (CDC) çoğaltma görevi ve tüm tabloları seçmek üzere bir tablo eşleme oluşturmak için AWS Database Migration Service'i (AWS DMS) kullanın.

B. İlk geçiş için AWS DataSync'i kullanın. Tam yük artı değişiklik veri yakalama (CDC) çoğaltma görevi ve tüm tabloları seçmek üzere bir tablo eşleme oluşturmak için AWS Database Migration Service'i (AWS DMS) kullanın.

C. Bellek için optimize edilmiş bir çoğaltma örneği kullanarak AWS Database Migration Service (AWS DMS) ile AWS Schema Conversion Tool'u kullanın. Tüm tabloları seçmek için tam yük artı veri yakalama (CDC) çoğaltma görevi ve bir tablo eşleme oluşturun.

D. İşlem için optimize edilmiş bir çoğaltma örneği kullanarak AWS Schema Conversion Tool'u AWS Database Migration Service (AWS DMS) ile birlikte kullanın. En büyük tabloları seçmek için tam yük artı veri yakalama (CDC) çoğaltma görevi ve bir tablo eşleme oluşturun.

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

Soru #236

Bir şirketin görsel paylaşımına yönelik üç katmanlı bir uygulaması var. Uygulama, ön uç katmanı için bir Amazon EC2 bulut sunucusunu, uygulama katmanı için başka bir EC2 bulut sunucusunu ve MySQL veritabanı için üçüncü bir EC2 bulut sunucusunu kullanır. Bir çözüm mimarı, uygulamada en az miktarda değişiklik gerektiren, ölçeklenebilir ve yüksek düzeyde kullanılabilir bir çözüm tasarlamalıdır. Hangi çözüm bu gereksinimleri karşılıyor?

A. Ön uç katmanını barındırmak için Amazon S3'ü kullanın. Uygulama katmanı için AWS Lambda işlevlerini kullanın. Veritabanını bir Amazon DynamoDB tablosuna taşıyın. Kullanıcıların görsellerini depolamak ve sunmak için Amazon S3'ü kullanın.

B. Ön uç katmanı ve uygulama katmanı için yük dengeli Multi-AZ AWS Elastic Beanstalk ortamlarını kullanın. Kullanıcıların görüntülerine hizmet vermek için veritabanını birden fazla okuma replikasına sahip bir Amazon RDS DB bulut sunucusuna taşıyın.

C. Ön uç katmanını barındırmak için Amazon S3'ü kullanın. Uygulama katmanı için Otomatik Ölçeklendirme grubunda EC2 bulut sunucularından oluşan bir filo kullanın. Kullanıcıların görsellerini depolamak ve sunmak için veritabanını, belleği optimize edilmiş bir örnek tipine taşıyın.

D. Ön uç katman ve uygulama katmanı için yük dengeli Multi-AZ AWS Elastic Beanstalk ortamlarını kullanın. Veritabanını bir Amazon RDS Multi-AZ veritabanı bulut sunucusuna taşıyın. Kullanıcıların görsellerini depolamak ve sunmak için Amazon S3'ü kullanın.

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

Soru #237

VPC-A'daki bir Amazon EC2 bulut sunucusunda çalışan bir uygulamanın, VPC-B'deki başka bir EC2 bulut sunucusundaki dosyalara erişmesi gerekir. Her iki VPC de ayrı AWS hesaplarındadır. Ağ yöneticisinin, VPC-A'dan VPC-B'deki EC2 örneğine güvenli erişimi yapılandırmak için bir çözüm tasarlaması gerekir. Bağlantıda tek bir arıza noktası veya bant genişliği endişesi olmamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. VPC-A ile VPC-B arasında bir VPC eşleme bağlantısı kurun.

B. VPC-B'de çalışan EC2 bulut sunucusu için VPC ağ geçidi uç noktalarını ayarlayın.

C. VPC-B'ye sanal bir özel ağ geçidi ekleyin ve VPC-A'dan yönlendirmeyi ayarlayın.

D. VPC-B'de çalışan EC2 örneği için özel bir sanal arayüz (VIF) oluşturun ve VPC-A'dan uygun rotaları ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** VPC-A ile VPC-B arasında bir VPC eşleme bağlantısı kurun.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #238

Bir şirket, mühendis ekibi için bireysel AWS hesaplarıyla denemeler yapmak istiyor. Şirket, belirli bir aydaki Amazon EC2 bulut sunucusu kullanımı her hesap için belirli bir eşiği aştığında bilgilendirilmek istiyor. Bir çözüm mimarı bu gereksinimi EN uygun maliyetle karşılamak için ne yapmalıdır?

A. Hizmete göre maliyetlerin günlük raporunu oluşturmak için Maliyet Gezgini'ni kullanın. Raporu EC2 bulut sunucularına göre filtreleyin. Cost Explorer'ı, bir eşik aşıldığında Amazon Basit E-posta Hizmeti (Amazon SES) bildirimi gönderecek şekilde yapılandırın.

B. Hizmete göre aylık maliyet raporu oluşturmak için Maliyet Gezgini'ni kullanın. Raporu EC2 bulut sunucularına göre filtreleyin. Cost Explorer'ı, bir eşik aşıldığında Amazon Basit E-posta Hizmeti (Amazon SES) bildirimi gönderecek şekilde yapılandırın.

C. Her hesap için bir maliyet bütçesi oluşturmak amacıyla AWS Bütçelerini kullanın. Dönemi aylık olarak ayarlayın. Kapsamı EC2 bulut sunucuları olarak ayarlayın. Bütçe için bir uyarı eşiği belirleyin. Bir eşik aşıldığında bildirim almak için bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın.

D. Saatlik ayrıntı düzeyine sahip bir rapor oluşturmak için AWS Maliyet ve Kullanım Raporlarını kullanın. Rapor verilerini Amazon Athena ile entegre edin. Bir Athena sorgusu planlamak için Amazon EventBridge'i kullanın. Bir eşik aşıldığında bildirim almak için bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın.

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

Soru #239

Bir çözüm mimarının, bir şirketin uygulaması için yeni bir mikro hizmet tasarlaması gerekir. İstemcilerin mikro hizmete ulaşmak için bir HTTPS uç noktasını arayabilmesi gerekir. Mikro hizmetin ayrıca çağrıların kimliğini doğrulamak için AWS Identity and Access Management'ı (IAM) kullanması gerekir. Çözüm mimarı, Go 1.x'te yazılmış tek bir AWS Lambda işlevini kullanarak bu mikro hizmetin mantığını yazacaktır. Hangi çözüm işlevi operasyonel açıdan EN verimli şekilde dağıtacak?

A. Bir Amazon API Gateway REST API oluşturun. Lambda işlevini kullanacak yöntemi yapılandırın. API'de IAM kimlik doğrulamasını etkinleştirin.

B. İşlev için bir Lambda işlevi URL'si oluşturun. Kimlik doğrulama türü olarak AWS_IAM'yi belirtin.

C. Bir Amazon CloudFront dağıtımı oluşturun. İşlevi Lambda@Edge'e dağıtın. IAM kimlik doğrulama mantığını Lambda@Edge işlevine entegre edin.

D. Bir Amazon CloudFront dağıtımı oluşturun. İşlevi CloudFront Functions'a dağıtın. Kimlik doğrulama türü olarak AWS_IAM'yi belirtin.

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

Soru #240

Bir şirket daha önce veri ambarı çözümünü AWS'ye taşımıştı. Şirketin ayrıca bir AWS Direct Connect bağlantısı var. Kurumsal ofis kullanıcıları bir görselleştirme aracı kullanarak veri ambarını sorgular. Veri ambarı tarafından döndürülen bir sorgunun ortalama boyutu 50 MB olup, görselleştirme aracı tarafından gönderilen her web sayfası yaklaşık 500 KB'dir. Veri ambarı tarafından döndürülen sonuç kümeleri önbelleğe alınmaz. Şirket için EN DÜŞÜK veri aktarımı çıkış maliyetini hangi çözüm sağlıyor?

A. Görselleştirme aracını şirket içinde barındırın ve veri ambarını doğrudan internet üzerinden sorgulayın.

B. Görselleştirme aracını veri ambarıyla aynı AWS Bölgesinde barındırın. İnternet üzerinden erişin.

C. Görselleştirme aracını şirket içinde barındırın ve aynı AWS Bölgesindeki bir konumdaki Direct Connect bağlantısı üzerinden veri ambarını doğrudan sorgulayın.

D. Görselleştirme aracını veri ambarıyla aynı AWS Bölgesinde barındırın ve ona aynı Bölgedeki bir konumdan Direct Connect bağlantısı üzerinden erişin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Görselleştirme aracını veri ambarıyla aynı AWS Bölgesinde barındırın ve ona aynı Bölgedeki bir konumdan Direct Connect bağlantısı üzerinden erişin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #241

Çevrimiçi bir öğrenim şirketi AWS Cloud'a geçiş yapıyor. Şirket, öğrenci kayıtlarını PostgreSQL veritabanında tutmaktadır. Şirketin, verilerinin birden fazla AWS Bölgesinde her zaman çevrimiçi ve kullanılabilir olduğu bir çözüme ihtiyacı var. Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılayacak?

A. PostgreSQL veritabanını Amazon EC2 bulut sunucularındaki bir PostgreSQL kümesine taşıyın.

B. PostgreSQL veritabanını Multi-AZ özelliği açık olan bir Amazon RDS for PostgreSQL veritabanı örneğine taşıyın.

C. PostgreSQL veritabanını Amazon RDS for PostgreSQL veritabanı örneğine taşıyın. Başka bir Bölgede okuma kopyası oluşturun.

D. PostgreSQL veritabanını Amazon RDS for PostgreSQL veritabanı örneğine taşıyın. Veritabanı anlık yedeklerini başka bir Bölgeye kopyalanacak şekilde ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** PostgreSQL veritabanını bir Amazon RDS for PostgreSQL veritabanı örneğine taşıyın. Başka bir Bölgede okuma kopyası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #242

Bir şirket, web uygulamasını yedi Amazon EC2 örneğini kullanarak AWS'de barındırıyor. Şirket, DNS sorgularına yanıt olarak tüm sağlıklı EC2 bulut sunucularının IP adreslerinin döndürülmesini şart koşuyor. Bu gereksinimi karşılamak için hangi politika kullanılmalıdır?

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

Soru #243

Tıbbi araştırma laboratuvarı yeni bir çalışmaya ilişkin veriler üretir. Laboratuvar, verileri şirket içi, dosya tabanlı uygulamalar için ülke çapındaki kliniklerin kullanımına minimum gecikmeyle sunmak istiyor. Veri dosyaları, her klinik için salt okunur izinlere sahip bir Amazon S3 klasöründe depolanır. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Her klinikte şirket içinde bir sanal makine (VM) olarak bir AWS Storage Gateway dosya ağ geçidi dağıtın

B. İşleme için AWS DataSync'i kullanarak dosyaları her kliniğin şirket içi uygulamalarına taşıyın.

C. Her klinikte şirket içinde bir sanal makine (VM) olarak bir AWS Storage Gateway birim ağ geçidi dağıtın.

D. Her kliniğin şirket içi sunucularına bir Amazon Elastic File System (Amazon EFS) dosya sistemi ekleyin.

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

Soru #244

Bir şirket, tek bir Amazon EC2 bulut sunucusunda çalışan bir içerik yönetim sistemi kullanıyor. EC2 bulut sunucusu hem web sunucusunu hem de veritabanı yazılımını içerir. Şirket, web sitesi platformunu yüksek düzeyde kullanılabilir hale getirmeli ve web sitesinin kullanıcı talebini karşılayacak şekilde ölçeklendirilmesini sağlamalıdır. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Veritabanını Amazon RDS'ye taşıyın ve otomatik yedeklemeleri etkinleştirin. Aynı Erişilebilirlik Alanında başka bir EC2 bulut sunucusunu manuel olarak başlatın. Erişilebilirlik Alanında bir Application Load Balancer yapılandırın ve iki örneği hedef olarak ayarlayın.

B. Veritabanını, mevcut EC2 bulut sunucusuyla aynı Erişilebilirlik Alanında bulunan okuma kopyasına sahip bir Amazon Aurora bulut sunucusuna taşıyın. Aynı Erişilebilirlik Alanında başka bir EC2 bulut sunucusunu manuel olarak başlatın. Bir Application Load Balancer yapılandırın ve iki EC2 örneğini hedef olarak ayarlayın.

C. Veritabanını başka bir Erişilebilirlik Alanındaki okuma kopyasıyla Amazon Aurora'ya taşıyın. EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. İki Erişilebilirlik Alanında bir Application Load Balancer yapılandırın. İki Erişilebilirlik Alanında AMI'yi kullanan bir Otomatik Ölçeklendirme grubu ekleyin.

D. Veritabanını ayrı bir EC2 bulut sunucusuna taşıyın ve yedeklemeleri Amazon S3'e planlayın. Orijinal EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. İki Erişilebilirlik Alanında bir Application Load Balancer yapılandırın. İki Erişilebilirlik Alanında AMI'yi kullanan bir Otomatik Ölçeklendirme grubu ekleyin.

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

Soru #245

Bir şirket AWS'de bir uygulama başlatıyor. Uygulama, trafiği tek bir hedef grupta en az iki Amazon EC2 bulut sunucusuna yönlendirmek için bir Application Load Balancer (ALB) kullanır. Örnekler, her ortam için bir Otomatik Ölçeklendirme grubundadır. Şirketin bir geliştirme ortamına ve bir üretim ortamına ihtiyacı vardır. Üretim ortamında trafiğin yoğun olduğu dönemler olacaktır. Hangi çözüm geliştirme ortamını EN uygun maliyetle yapılandıracak?

A. Geliştirme ortamındaki hedef grubu, hedef olarak yalnızca bir EC2 örneğine sahip olacak şekilde yeniden yapılandırın.

B. ALB dengeleme algoritmasını en az bekleyen isteklere değiştirin.

C. Her iki ortamda da EC2 bulut sunucularının boyutunu azaltın.

D. Geliştirme ortamının Otomatik Ölçeklendirme grubundaki maksimum EC2 bulut sunucusu sayısını azaltın.

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

Soru #246

Bir şirket, birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularında bir web uygulaması çalıştırıyor. EC2 bulut sunucuları özel alt ağlardadır. Bir çözüm mimarı, internete yönelik bir Application Load Balancer (ALB) uygular ve EC2 bulut sunucularını hedef grup olarak belirtir. Ancak internet trafiği EC2 bulut sunucularına ulaşmıyor. Çözüm mimarı bu sorunu çözmek için mimariyi nasıl yeniden yapılandırmalıdır?

A. ALB'yi bir Ağ Yük Dengeleyiciyle değiştirin. İnternet trafiğine izin vermek için genel bir alt ağda bir NAT ağ geçidi yapılandırın.

B. EC2 bulut sunucularını genel alt ağlara taşıyın. Giden trafiğe 0.0.0.0/0'a izin vermek için EC2 bulut sunucularının güvenlik gruplarına bir kural ekleyin.

C. EC2 bulut sunucularının alt ağlarına yönelik rota tablolarını, internet ağ geçidi rotası üzerinden 0.0.0.0/0 trafik gönderecek şekilde güncelleyin. Giden trafiğe 0.0.0.0/0'a izin vermek için EC2 bulut sunucularının güvenlik gruplarına bir kural ekleyin.

D. Her Erişilebilirlik Alanında genel alt ağlar oluşturun. Genel alt ağları ALB ile ilişkilendirin. Genel alt ağlara ilişkin rota tablolarını, özel alt ağlara yönelik bir rota ile güncelleyin.

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

Soru #247

Bir şirket MySQL için Amazon RDS'de bir veritabanı dağıttı. Artan işlemler nedeniyle veritabanı destek ekibi, veritabanı bulut sunucusunda yavaş okumalar olduğunu bildiriyor ve bir okuma kopyası eklenmesini öneriyor. Bir çözüm mimarının bu değişikliği uygulamadan önce hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. RDS birincil düğümünde binlog çoğaltmasını etkinleştirin.

B. Kaynak veritabanı bulut sunucusu için bir yük devretme önceliği seçin.

C. Kaynak veritabanı bulut sunucusunda uzun süredir devam eden işlemlerin tamamlanmasına izin verin.

D. Global bir tablo oluşturun ve tablonun mevcut olacağı AWS Bölgelerini belirtin.

E. Yedekleme saklama süresini 0 dışında bir değere ayarlayarak kaynak örneğinde otomatik yedeklemeleri etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Kaynak veritabanı bulut sunucusunda uzun süredir devam eden işlemlerin tamamlanmasına izin verin. Yedekleme saklama süresini 0 dışında bir değere ayarlayarak kaynak örnekte otomatik yedeklemeleri etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #248

Bir şirket, Amazon EC2 bulut sunucularında analiz yazılımı çalıştırıyor. Yazılım, Amazon S3'e yüklenen verileri işlemek için kullanıcılardan gelen iş isteklerini kabul eder. Kullanıcılar gönderilen bazı verilerin işlenmediğini bildiriyor Amazon CloudWatch, EC2 bulut sunucularının %100 veya buna yakın tutarlı bir CPU kullanımına sahip olduğunu ortaya koyuyor. Şirket, sistem performansını iyileştirmek ve sistemi kullanıcı yüküne göre ölçeklendirmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Örneğin bir kopyasını oluşturun. Tüm örnekleri bir Application Load Balancer'ın arkasına yerleştirin.

B. Amazon S3 için bir S3 VPC uç noktası oluşturun. Yazılımı uç noktaya referans verecek şekilde güncelleyin.

C. EC2 bulut sunucularını durdurun. Örnek türünü daha güçlü CPU ve daha fazla belleğe sahip bir örnekle değiştirin. Örnekleri yeniden başlatın.

D. Gelen istekleri Amazon Simple Queue Service'e (Amazon SQS) yönlendirin. Kuyruk boyutuna göre bir EC2 Otomatik Ölçeklendirme grubu yapılandırın. Kuyruktan okumak için yazılımı güncelleyin.

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

Soru #249

Bir şirket, AWS Cloud'da barındırılan bir medya uygulaması için paylaşılan bir depolama çözümü uyguluyor. Şirketin verilere erişmek için KOBİ istemcilerini kullanma becerisine ihtiyacı var. Çözümün tam olarak yönetilmesi gerekir. Hangi AWS çözümü bu gereksinimleri karşılıyor?

A. Bir AWS Storage Gateway birim ağ geçidi oluşturun. Gerekli istemci protokolünü kullanan bir dosya paylaşımı oluşturun. Uygulama sunucusunu dosya paylaşımına bağlayın.

B. Bir AWS Storage Gateway teyp ağ geçidi oluşturun. Bantları Amazon S3'ü kullanacak şekilde yapılandırın. Uygulama sunucusunu bant ağ geçidine bağlayın.

C. Bir Amazon EC2 Windows örneği oluşturun. Örneğe bir Windows dosya paylaşım rolü yükleyin ve yapılandırın. Uygulama sunucusunu dosya paylaşımına bağlayın.

D. Windows Dosya Sunucusu için bir Amazon FSx dosya sistemi oluşturun. Dosya sistemini orijinal sunucuya ekleyin. Uygulama sunucusunu dosya sistemine bağlayın.

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

Soru #250

Bir şirketin güvenlik ekibi, ağ trafiğinin VPC Akış Günlüklerinde yakalanmasını talep ediyor. Günlüklere 90 gün boyunca sıklıkla erişilecek ve daha sonra aralıklı olarak erişilecektir. Bir çözüm mimarı günlükleri yapılandırırken bu gereksinimleri karşılamak için ne yapmalıdır?

A. Hedef olarak Amazon CloudWatch'u kullanın. CloudWatch günlük grubunu 90 günlük bir sona erecek şekilde ayarlayın

B. Hedef olarak Amazon Kinesis'i kullanın. Kinesis akışını, günlükleri her zaman 90 gün boyunca tutacak şekilde yapılandırın.

C. Hedef olarak AWS CloudTrail'i kullanın. CloudTrail'i bir Amazon S3 klasörüne kaydedecek şekilde yapılandırın ve S3 Intelligent-Tiering'i etkinleştirin.

D. Hedef olarak Amazon S3'ü kullanın. Günlükleri 90 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için bir S3 Yaşam Döngüsü ilkesini etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hedef olarak Amazon S3'ü kullanın. Günlükleri 90 gün sonra S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için bir S3 Yaşam Döngüsü ilkesini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #251

Amazon EC2 bulut sunucusu, yeni bir VPC'deki özel bir alt ağda bulunur. Bu alt ağın giden internet erişimi yoktur, ancak EC2 bulut sunucusunun aylık güvenlik güncellemelerini bir dış satıcıdan indirme yeteneğine ihtiyacı vardır. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Bir internet ağ geçidi oluşturun ve bunu VPC'ye ekleyin. Özel alt ağ rota tablosunu, internet ağ geçidini varsayılan rota olarak kullanacak şekilde yapılandırın.

B. Bir NAT ağ geçidi oluşturun ve bunu genel bir alt ağa yerleştirin. Özel alt ağ yolu tablosunu, NAT ağ geçidini varsayılan yol olarak kullanacak şekilde yapılandırın.

C. Bir NAT örneği oluşturun ve bunu EC2 örneğinin bulunduğu alt ağa yerleştirin. Özel alt ağ rota tablosunu, NAT örneğini varsayılan rota olarak kullanacak şekilde yapılandırın.

D. Bir internet ağ geçidi oluşturun ve bunu VPC'ye ekleyin. Bir NAT örneği oluşturun ve bunu EC2 örneğinin bulunduğu alt ağa yerleştirin. Özel alt ağ rota tablosunu, internet ağ geçidini varsayılan rota olarak kullanacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir NAT ağ geçidi oluşturun ve bunu genel bir alt ağa yerleştirin. Özel alt ağ yolu tablosunu, NAT ağ geçidini varsayılan yol olarak kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #252

Bir çözüm mimarının müşteri vaka dosyalarını depolamak için bir sistem tasarlaması gerekir. Dosyalar temel şirket varlıklarıdır ve önemlidir. Dosya sayısı zamanla artacaktır. Dosyalara Amazon EC2 bulut sunucularında çalışan birden fazla uygulama sunucusundan aynı anda erişilebilmesi gerekir. Çözümün yerleşik yedekliliğe sahip olması gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

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

Soru #253

Bir çözüm mimarı iki IAM politikası oluşturmuştur: Politika1 ve Politika2. Her iki politika da bir IAM grubuna eklenmiştir. Bir bulut mühendisi, IAM grubuna IAM kullanıcısı olarak eklenir. Bulut mühendisi hangi eylemi gerçekleştirebilecek?

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

Soru #254

Bir şirket, yakın zamanda yapılan üç katmanlı bir uygulamanın VPC'ye geçişini inceliyor. Güvenlik ekibi, uygulama katmanları arasındaki Amazon EC2 güvenlik grubu giriş ve çıkış kurallarına en az ayrıcalık ilkesinin uygulanmadığını keşfeder. Bir çözüm mimarı bu sorunu düzeltmek için ne yapmalıdır?

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

Soru #255

Bir şirketin, bir veritabanına sipariş yazan ve ödemeyi işlemek için bir hizmeti çağıran bir e-ticaret ödeme iş akışı vardır. Kullanıcılar ödeme işlemi sırasında zaman aşımları yaşıyor. Kullanıcılar ödeme formunu yeniden gönderdiğinde, istenen aynı işlem için birden fazla benzersiz sipariş oluşturulur. Bir çözüm mimarı, birden fazla siparişin oluşturulmasını önlemek için bu iş akışını nasıl yeniden düzenlemelidir?

A. Web uygulamasını Amazon Kinesis Data Firehose'a sipariş mesajı gönderecek şekilde yapılandırın. Kinesis Data Firehose'tan mesajı almak ve siparişi işlemek için ödeme hizmetini ayarlayın.

B. Günlüğe kaydedilen uygulama yolu isteğine göre bir AWS Lambda işlevini çağırmak için AWS CloudTrail'de bir kural oluşturun. Veritabanını sorgulamak, ödeme hizmetini aramak ve sipariş bilgilerini iletmek için Lambda'yı kullanın.

C. Siparişi veritabanında saklayın. Amazon Simple Notification Service'e (Amazon SNS) sipariş numarasını içeren bir mesaj gönderin. Ödeme hizmetini Amazon SNS'yi yoklayacak, mesajı alacak ve siparişi işleyecek şekilde ayarlayın.

D. Siparişi veritabanında saklayın. Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna sipariş numarasını içeren bir mesaj gönderin. Mesajı almak ve siparişi işlemek için ödeme hizmetini ayarlayın. Mesajı kuyruktan silin.

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

Soru #256

Bir çözüm mimarı, depolama için Amazon S3 klasörünü kullanan bir belge inceleme uygulaması uyguluyor. Çözüm, belgelerin yanlışlıkla silinmesini önlemeli ve belgelerin tüm sürümlerinin mevcut olmasını sağlamalıdır. Kullanıcılar belgeleri indirebilmeli, değiştirebilmeli ve yükleyebilmelidir. Bu gereklilikleri karşılamak için hangi eylem kombinasyonu gerçekleştirilmelidir? (İki tane seçin.)

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

Soru #257

Bir şirket, bir AWS hesabındaki tüm uygulamalardaki Amazon EC2 Auto Scaling olaylarını raporlayacak bir çözüm geliştiriyor. Şirketin EC2 Otomatik Ölçeklendirme durum verilerini Amazon S3'te depolamak için sunucusuz bir çözüm kullanması gerekiyor. Şirket daha sonra Amazon S3'teki verileri bir kontrol panelinde neredeyse gerçek zamanlı güncellemeler sağlamak için kullanacak. Çözüm, EC2 bulut sunucusu başlatma hızını etkilememelidir. Şirket bu gereksinimleri karşılamak için verileri Amazon S3'e nasıl taşımalıdır?

A. EC2 Auto Scaling durum verilerini Amazon Kinesis Data Firehose'a göndermek için bir Amazon CloudWatch ölçüm akışı kullanın. Verileri Amazon S3'te saklayın.

B. EC2 Auto Scaling durum verilerini toplamak ve verileri Amazon Kinesis Data Firehose'a göndermek için bir Amazon EMR kümesi başlatın. Verileri Amazon S3'te saklayın.

C. Bir AWS Lambda işlevini belirli bir programa göre çağırmak için bir Amazon EventBridge kuralı oluşturun. EC2 Otomatik Ölçeklendirme durum verilerini doğrudan Amazon S3'e göndermek için Lambda işlevini yapılandırın.

D. Amazon Kinesis Agent'ı yüklemek için EC2 bulut sunucusunun başlatılması sırasında bir önyükleme komut dosyası kullanın. Kinesis Agent'ı, EC2 Auto Scaling durum verilerini toplayacak ve verileri Amazon Kinesis Data Firehose'a gönderecek şekilde yapılandırın. Verileri Amazon S3'te saklayın.

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

Soru #258

Bir şirketin her saat başı yüzlerce .csv dosyasını bir Amazon S3 klasörüne yerleştiren bir uygulaması var. Dosyalar 1 GB boyutundadır. Her dosya yüklendiğinde şirketin dosyayı Apache Parquet formatına dönüştürmesi ve çıktı dosyasını bir S3 klasörüne yerleştirmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. .csv dosyalarını indirmek, dosyaları Parquet formatına dönüştürmek ve çıktı dosyalarını bir S3 klasörüne yerleştirmek için bir AWS Lambda işlevi oluşturun. Her S3 PUT olayı için Lambda işlevini çağırın.

B. .csv dosyalarını okumak, dosyaları Parquet formatına dönüştürmek ve çıktı dosyalarını bir S3 klasörüne yerleştirmek için bir Apache Spark işi oluşturun. Spark işini çağırmak amacıyla her S3 PUT olayı için bir AWS Lambda işlevi oluşturun.

C. Uygulamanın .csv dosyalarını yerleştirdiği S3 klasörü için bir AWS Glue tablosu ve bir AWS Glue tarayıcısı oluşturun. AWS Glue tablosunu sorgulamak, sorgu sonuçlarını Parquet formatına dönüştürmek ve çıktı dosyalarını bir S3 klasörüne yerleştirmek için düzenli olarak Amazon Athena'yı kullanmak üzere bir AWS Lambda işlevi planlayın.

D. .csv dosyalarını Parquet formatına dönüştürmek ve çıktı dosyalarını bir S3 klasörüne yerleştirmek için bir AWS Glue ayıklama, dönüştürme ve yükleme (ETL) işi oluşturun. ETL işini çağırmak amacıyla her S3 PUT olayı için bir AWS Lambda işlevi oluşturun.

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

Soru #259

Bir şirket, Amazon RDS DB bulut sunucularında çalışan tüm veritabanları için yeni veri saklama politikaları uyguluyor. Şirketin günlük yedeklerini en az 2 yıl süreyle saklaması gerekmektedir. Yedeklemeler tutarlı ve geri yüklenebilir olmalıdır. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi çözümü önermelidir?

A. RDS yedeklerini saklamak için AWS Backup'ta bir yedekleme kasası oluşturun. Günlük programa sahip ve oluşturulduktan sonra 2 yıllık bir sona erme süresine sahip yeni bir yedekleme planı oluşturun. RDS Veritabanı bulut sunucularını yedekleme planına atayın.

B. Günlük anlık görüntülere yönelik RDS Veritabanı bulut sunucuları için bir yedekleme penceresi yapılandırın. Her RDS Veritabanı bulut sunucusuna 2 yıllık bir anlık görüntü saklama politikası atayın. Anlık görüntü silme işlemlerini planlamak için Amazon Data Lifecycle Manager'ı (Amazon DLM) kullanın.

C. Veritabanı işlem günlüklerini, 2 yıllık bir sona erme süresiyle Amazon CloudWatch Logs'a otomatik olarak yedeklenecek şekilde yapılandırın.

D. Bir AWS Database Migration Service (AWS DMS) çoğaltma görevini yapılandırın. Bir çoğaltma örneği dağıtın ve veritabanı değişikliklerini hedef olarak Amazon S3'e aktarmak için bir değişiklik verisi yakalama (CDC) görevi yapılandırın. Anlık görüntüleri 2 yıl sonra silmek için S3 Yaşam Döngüsü politikalarını yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** RDS yedeklerini saklamak için AWS Backup'ta bir yedekleme kasası oluşturun. Günlük programa sahip ve oluşturulduktan sonra 2 yıllık bir sona erme süresine sahip yeni bir yedekleme planı oluşturun. RDS Veritabanı bulut sunucularını yedekleme planına atayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #260

Bir şirketin uyumluluk ekibinin dosya paylaşımlarını AWS'ye taşıması gerekiyor. Paylaşımlar bir Windows Server SMB dosya paylaşımında çalışır. Kendi kendine yönetilen şirket içi bir Active Directory, dosya ve klasörlere erişimi kontrol eder. Şirket, çözümün bir parçası olarak Windows Dosya Sunucusu için Amazon FSx'i kullanmak istiyor. Şirket, AWS'ye geçişten sonra şirket içi Active Directory gruplarının Windows Dosya Sunucusu için FSx SMB uyumluluğu paylaşımlarına, klasörlerine ve dosyalarına erişimi kısıtlamasını sağlamalıdır. Şirket, Windows Dosya Sunucusu dosya sistemi için bir FSx oluşturdu. Bu gereksinimleri hangi çözüm karşılayacak?

A. Active Directory'ye bağlanmak için bir Active Directory Bağlayıcısı oluşturun. Erişimi kısıtlamak için Active Directory gruplarını IAM gruplarıyla eşleyin.

B. Kısıtlama etiketi anahtarı ve Uyumluluk etiketi değeri içeren bir etiket atayın. Erişimi kısıtlamak için Active Directory gruplarını IAM gruplarıyla eşleyin.

C. Erişimi kısıtlamak amacıyla doğrudan Windows Dosya Sunucusu için FSx'e bağlı bir IAM hizmeti bağlantılı rol oluşturun.

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

Soru #261

Bir şirket yakın zamanda perakende web sitesinin küresel bir kitleye açıldığını duyurdu. Web sitesi, Elastic Load Balancer arkasında birden fazla Amazon EC2 örneğinde çalışır. Örnekler, birden fazla Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda çalışır. Şirket, müşterilerinin web sitesine erişmek için kullandıkları cihazlara bağlı olarak farklı içerik versiyonlarını müşterilerine sunmak istiyor. Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. İçeriğin birden çok sürümünü önbelleğe almak için Amazon CloudFront'u yapılandırın.

B. Trafiği farklı örneklere iletmek için Network Load Balancer'da bir ana bilgisayar başlığı yapılandırın.

C. Kullanıcılara Kullanıcı Aracısı başlığını temel alarak belirli nesneleri göndermek için bir Lambda@Edge işlevi yapılandırın.

D. AWS Global Accelerator'ı yapılandırın. İstekleri bir Ağ Yük Dengeleyicisine (NLB) iletin. Farklı EC2 bulut sunucularına ana bilgisayar tabanlı yönlendirmeyi ayarlamak için NLB'yi yapılandırın.

E. AWS Global Accelerator'ı yapılandırın. İstekleri bir Ağ Yük Dengeleyicisine (NLB) iletin. Farklı EC2 bulut sunucularına yol tabanlı yönlendirmeyi ayarlamak için NLB'yi yapılandırın.

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

Soru #262

Bir şirket, çok katmanlı web uygulaması için Amazon ElastiCache'i kullanmayı planlıyor. Bir çözüm mimarı, ElastiCache kümesi için bir Önbellek VPC'si ve uygulamanın Amazon EC2 bulut sunucuları için bir Uygulama VPC'si oluşturur. Her iki VPC de us-east-1 Bölgesindedir. Çözüm mimarı, uygulamanın EC2 bulut sunucularına ElastiCache kümesine erişim sağlamak için bir çözüm uygulamalıdır. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. VPC'ler arasında bir eşleme bağlantısı oluşturun. Her iki VPC'de de eşleme bağlantısı için bir rota tablosu girişi ekleyin. Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek amacıyla ElastiCache kümesinin güvenlik grubu için bir gelen kuralı yapılandırın.

B. Transit VPC'si oluşturun. Trafiği Transit VPC üzerinden yönlendirmek için Önbellek VPC'sindeki ve Uygulama VPC'sindeki VPC yönlendirme tablolarını güncelleyin. Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek amacıyla ElastiCache kümesinin güvenlik grubu için bir gelen kuralı yapılandırın.

C. VPC'ler arasında bir eşleme bağlantısı oluşturun. Her iki VPC'de de eşleme bağlantısı için bir rota tablosu girişi ekleyin. Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek amacıyla eşleme bağlantısının güvenlik grubu için bir gelen kuralı yapılandırın.

D. Transit VPC'si oluşturun. Trafiği Transit VPC üzerinden yönlendirmek için Önbellek VPC'sindeki ve Uygulama VPC'sindeki VPC yönlendirme tablolarını güncelleyin. Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek amacıyla Transit VPC'nin güvenlik grubu için bir gelen kuralı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** VPC'ler arasında bir eşleme bağlantısı oluşturun. Her iki VPC'de de eşleme bağlantısı için bir rota tablosu girişi ekleyin. Uygulamanın güvenlik grubundan gelen bağlantıya izin vermek amacıyla ElastiCache kümesinin güvenlik grubu için bir gelen kuralı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #263

Bir şirket birkaç mikro hizmetten oluşan bir uygulama geliştiriyor. Şirket, yazılımını AWS'de dağıtmak için konteyner teknolojilerini kullanmaya karar verdi. Şirketin bakım ve ölçeklendirme için devam eden çaba miktarını en aza indirecek bir çözüme ihtiyacı var. Şirket ek altyapıyı yönetemez. Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. Amazon Elastic Container Service (Amazon ECS) kümesini dağıtın.

B. Kubernetes kontrol düzlemini birden fazla Erişilebilirlik Alanını kapsayan Amazon EC2 bulut sunucularına dağıtın.

C. Amazon EC2 başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) hizmetini dağıtın. İstediğiniz görev numarası düzeyini 2'den büyük veya ona eşit olarak belirtin.

D. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) hizmetini dağıtın. İstediğiniz görev numarası düzeyini 2'den büyük veya ona eşit olarak belirtin.

E. Kubernetes çalışan düğümlerini birden fazla Erişilebilirlik Alanını kapsayan Amazon EC2 bulut sunucularına dağıtın. Her mikro hizmet için iki veya daha fazla kopya belirten bir dağıtım oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Amazon Elastic Container Service (Amazon ECS) kümesini dağıtın. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) hizmetini dağıtın. İstediğiniz görev numarası düzeyini 2'den büyük veya ona eşit olarak belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #264

Bir şirketin, trafiği Amazon Route 53 tarafından yönlendirilen, 10'dan fazla Amazon EC2 örneğini barındıran bir web uygulaması vardır. Şirket, uygulamaya göz atmaya çalışırken zaman zaman zaman aşımı hatasıyla karşılaşmaktadır. Ağ ekibi, bazı DNS sorgularının sağlıksız örneklerin IP adreslerini döndürdüğünü ve bunun da zaman aşımı hatasına yol açtığını tespit etti. Bir çözüm mimarı bu zaman aşımı hatalarının üstesinden gelmek için ne uygulamalıdır?

A. Her EC2 bulut sunucusu için bir Route 53 basit yönlendirme politikası kaydı oluşturun. Her kayıtla bir durum denetimini ilişkilendirin.

B. Her EC2 bulut sunucusu için bir Route 53 yük devretme yönlendirme politikası kaydı oluşturun. Her kayıtla bir durum denetimini ilişkilendirin.

C. Kaynağı EC2 bulut sunucuları olan bir Amazon CloudFront dağıtımı oluşturun. Bir durum denetimini EC2 bulut sunucularıyla ilişkilendirin.

D. EC2 bulut sunucularının önünde durum denetimi içeren bir Application Load Balancer (ALB) oluşturun. Route 53'ten ALB'ye giden rota.

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

Soru #265

Bir çözüm mimarının web, uygulama ve veritabanı katmanlarından oluşan yüksek düzeyde kullanılabilir bir uygulama tasarlaması gerekir. HTTPS içerik dağıtımı, en kısa teslim süresiyle, mümkün olduğu kadar uca yakın olmalıdır. Hangi çözüm bu gereksinimleri karşılıyor ve EN güvenli?

A. Genel alt ağlarda birden fazla yedekli Amazon EC2 bulut sunucusuyla genel bir Application Load Balancer (ALB) yapılandırın. Amazon CloudFront'u, kaynak olarak genel ALB'yi kullanarak HTTPS içeriği sunacak şekilde yapılandırın.

B. Özel alt ağlarda birden çok yedekli Amazon EC2 bulut sunucusuyla genel bir Application Load Balancer yapılandırın. Amazon CloudFront'u, EC2 bulut sunucularını kaynak olarak kullanarak HTTPS içeriği sunacak şekilde yapılandırın.

C. Özel alt ağlarda birden çok yedekli Amazon EC2 bulut sunucusuyla genel bir Application Load Balancer (ALB) yapılandırın. Amazon CloudFront'u, kaynak olarak genel ALB'yi kullanarak HTTPS içeriği sunacak şekilde yapılandırın.

D. Genel alt ağlarda birden çok yedekli Amazon EC2 bulut sunucusuyla genel bir Application Load Balancer yapılandırın. Amazon CloudFront'u, EC2 bulut sunucularını kaynak olarak kullanarak HTTPS içeriği sunacak şekilde yapılandırın.

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

Soru #266

Bir şirketin AWS üzerinde çalışan popüler bir oyun platformu var. Uygulama gecikmeye karşı hassastır çünkü gecikme kullanıcı deneyimini etkileyebilir ve bazı oyunculara haksız avantajlar getirebilir. Uygulama her AWS Bölgesinde dağıtılır. Application Load Balancer'ların (ALB'ler) arkasında yapılandırılmış Otomatik Ölçeklendirme gruplarının parçası olan Amazon EC2 bulut sunucularında çalışır. Bir çözüm mimarının, uygulamanın durumunu izlemek ve trafiği sağlıklı uç noktalara yönlendirmek için bir mekanizma uygulaması gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. AWS Global Accelerator'da bir hızlandırıcı yapılandırın. Uygulamanın dinlediği bağlantı noktası için bir dinleyici ekleyin ve bunu her Bölgedeki Bölgesel uç noktaya ekleyin. ALB'yi uç nokta olarak ekleyin.

B. Bir Amazon CloudFront dağıtımı oluşturun ve ALB'yi kaynak sunucu olarak belirtin. Önbellek davranışını, kaynak önbellek başlıklarını kullanacak şekilde yapılandırın. Trafiği optimize etmek için AWS Lambda işlevlerini kullanın.

C. Bir Amazon CloudFront dağıtımı oluşturun ve Amazon S3'ü kaynak sunucu olarak belirtin. Önbellek davranışını, kaynak önbellek başlıklarını kullanacak şekilde yapılandırın. Trafiği optimize etmek için AWS Lambda işlevlerini kullanın.

D. Uygulamanın veri deposu olarak hizmet verecek bir Amazon DynamoDB veritabanını yapılandırın. Uygulama verilerini barındıran DynamoDB için bellek içi önbellek görevi görecek bir DynamoDB Hızlandırıcı (DAX) kümesi oluşturun.

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

Soru #267

Bir şirketin mobil uygulamasını kullanan bir milyon kullanıcısı var. Şirketin veri kullanımını neredeyse gerçek zamanlı olarak analiz etmesi gerekiyor. Şirketin ayrıca verileri neredeyse gerçek zamanlı olarak şifrelemesi ve daha sonraki işlemler için verileri Apache Parquet formatında merkezi bir konumda saklaması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri Amazon S3'te depolamak için bir Amazon Kinesis veri akışı oluşturun. Verileri analiz etmek için bir Amazon Kinesis Data Analytics uygulaması oluşturun. Verileri Kinesis Data Analytics uygulamasına göndermek için bir AWS Lambda işlevini çağırın.

B. Verileri Amazon S3'te depolamak için bir Amazon Kinesis veri akışı oluşturun. Verileri analiz etmek için bir Amazon EMR kümesi oluşturun. Verileri EMR kümesine göndermek için bir AWS Lambda işlevini çağırın.

C. Verileri Amazon S3'te depolamak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri analiz etmek için bir Amazon EMR kümesi oluşturun.

D. Verileri Amazon S3'te depolamak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri analiz etmek için bir Amazon Kinesis Data Analytics uygulaması oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Verileri Amazon S3'te depolamak için bir Amazon Kinesis Data Firehose dağıtım akışı oluşturun. Verileri analiz etmek için bir Amazon Kinesis Data Analytics uygulaması oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #268

Bir oyun şirketinin puanları görüntüleyen bir web uygulaması vardır. Uygulama, Application Load Balancer'ın arkasındaki Amazon EC2 bulut sunucularında çalışır. Uygulama, verileri Amazon RDS for MySQL veritabanında depolar. Kullanıcılar, veritabanı okuma performansından kaynaklanan uzun gecikmeler ve kesintiler yaşamaya başlıyor. Şirket, uygulamanın mimarisindeki değişiklikleri en aza indirirken kullanıcı deneyimini geliştirmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

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

Soru #269

Bir e-ticaret şirketi, Amazon RDS tabanlı web uygulamasının performansının düştüğünü fark etti. Performans düşüşü, iş analistleri tarafından tetiklenen salt okunur SQL sorgularının sayısındaki artışa bağlanıyor. Bir çözüm mimarının sorunu mevcut web uygulamasında minimum değişiklik yaparak çözmesi gerekir. Çözüm mimarı ne tavsiye etmelidir?

A. Verileri Amazon DynamoDB'ye aktarın ve iş analistlerinin sorgularını yürütmesini sağlayın.

B. Verileri Amazon ElastiCache'e yükleyin ve iş analistlerinin sorgularını yürütmesini sağlayın.

C. Birincil veritabanının okuma kopyasını oluşturun ve iş analistlerinin sorgularını çalıştırmasını sağlayın.

D. Verileri bir Amazon Redshift kümesine kopyalayın ve iş analistlerinin sorgularını yürütmesini sağlayın.

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

Soru #270

Bir şirket, günlük verilerini çeşitli Amazon S3 klasörlerinde depolamak için merkezi bir AWS hesabı kullanıyor. Bir çözüm mimarının, veriler S3 klasörlerine yüklenmeden önce verilerin kullanımda değilken şifrelendiğinden emin olması gerekir. Verilerin aktarım sırasında da şifrelenmesi gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. S3 klasörlerine yüklenen verileri şifrelemek için istemci tarafı şifrelemeyi kullanın.

B. S3 klasörlerine yüklenen verileri şifrelemek için sunucu tarafı şifrelemeyi kullanın.

C. S3 yüklemeleri için S3 yönetilen şifreleme anahtarlarıyla (SSE-S3) sunucu tarafı şifrelemenin kullanılmasını gerektiren paket politikaları oluşturun.

D. Varsayılan AWS Key Management Service (AWS KMS) anahtarını kullanarak S3 klasörlerini şifrelemek için güvenlik seçeneğini etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 paketlerine yüklenen verileri şifrelemek için istemci tarafı şifrelemeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #271

Bir çözüm mimarı, istenen Amazon EC2 kapasitesine ulaşılmadan önce gecelik bir toplu işleme işinin ölçeğinin otomatik olarak 1 saat süreyle artırıldığını gözlemliyor. En yüksek kapasite her gece aynıdır ve toplu işler her zaman gece 1'de başlar. Çözüm mimarının, istenen EC2 kapasitesine hızla ulaşılmasına ve toplu işler tamamlandıktan sonra Otomatik Ölçeklendirme grubunun ölçeğini küçültmesine olanak tanıyacak uygun maliyetli bir çözüm bulması gerekiyor. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

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

Soru #272

Bir şirket, Application Load Balancer'ın (ALB) arkasındaki Amazon EC2 bulut sunucularından oluşan bir filodan dinamik bir web sitesi sunuyor. Web sitesinin dünya çapındaki müşterilere hizmet verebilmesi için birden fazla dili desteklemesi gerekiyor. Web sitesinin mimarisi us-west-1 Bölgesinde çalışıyor ve dünyanın diğer yerlerinde bulunan kullanıcılar için yüksek istek gecikmesi sergiliyor. Web sitesinin, kullanıcının konumundan bağımsız olarak istekleri hızlı ve verimli bir şekilde sunması gerekir. Ancak şirket, mevcut mimariyi birden fazla Bölgede yeniden oluşturmak istemiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Mevcut mimariyi Amazon S3 klasöründen sunulan bir web sitesiyle değiştirin. Kaynak olarak S3 paketini kullanarak bir Amazon CloudFront dağıtımı yapılandırın. Önbellek davranışı ayarlarını Accept-Language istek başlığına göre önbellek olarak ayarlayın.

B. ALB'yi kaynak olarak kullanarak bir Amazon CloudFront dağıtımını yapılandırın. Önbellek davranışı ayarlarını, Accept-Language istek başlığına göre önbellek olarak ayarlayın.

C. ALB ile entegre bir Amazon API Ağ Geçidi API'si oluşturun. API'yi HTTP entegrasyon türünü kullanacak şekilde yapılandırın. Accept-Language istek üstbilgisine dayalı olarak API önbelleğini etkinleştirmek için bir API Ağ Geçidi aşaması ayarlayın.

D. Her ek Bölgede bir EC2 bulut sunucusu başlatın ve NGINX'i o Bölge için önbellek sunucusu görevi görecek şekilde yapılandırın. Tüm EC2 bulut sunucularını ve ALB'yi, coğrafi konum yönlendirme politikasıyla bir Amazon Route 53 kayıt kümesinin arkasına yerleştirin.

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

Soru #273

Hızla büyüyen bir e-ticaret şirketi, iş yüklerini tek bir AWS Bölgesinde çalıştırıyor. Bir çözüm mimarı, farklı bir AWS Bölgesini içeren bir olağanüstü durum kurtarma (DR) stratejisi oluşturmalıdır. Şirket, veritabanının DR Bölgesinde mümkün olan en az gecikmeyle güncel olmasını istiyor. DR Bölgesi'nde geri kalan altyapının azaltılmış kapasiteyle çalışması ve gerekirse ölçeklenebilmesi gerekiyor. EN DÜŞÜK kurtarma süresi hedefi (RTO) ile bu gereksinimleri hangi çözüm karşılayacak?

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

Soru #274

Bir şirket Amazon EC2 bulut sunucularında bir uygulama çalıştırıyor. Şirketin uygulama için bir felaket kurtarma (DR) çözümü uygulaması gerekiyor. DR çözümünün 4 saatten kısa bir kurtarma süresi hedefine (RTO) sahip olması gerekir. DR çözümünün ayrıca normal işlemler sırasında mümkün olan en az AWS kaynağını kullanması gerekir. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. EC2 bulut sunucularını yedeklemek için Amazon Machine Images (AMI'ler) oluşturun. AMI'leri ikincil bir AWS Bölgesine kopyalayın. AWS Lambda ve özel komut dosyalarını kullanarak ikincil Bölgede altyapı dağıtımını otomatikleştirin.

B. EC2 bulut sunucularını yedeklemek için Amazon Machine Images (AMI'ler) oluşturun. AMI'leri ikincil bir AWS Bölgesine kopyalayın. AWS CloudFormation'ı kullanarak ikincil Bölgede altyapı dağıtımını otomatikleştirin.

C. İkincil bir AWS Bölgesinde EC2 bulut sunucularını başlatın. İkincil Bölgedeki EC2 bulut sunucularını her zaman etkin tutun.

D. EC2 bulut sunucularını ikincil bir Erişilebilirlik Alanında başlatın. İkincil Erişilebilirlik Alanındaki EC2 bulut sunucularını her zaman aktif tutun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EC2 bulut sunucularını yedeklemek için Amazon Machine Images (AMI'ler) oluşturun. AMI'leri ikincil bir AWS Bölgesine kopyalayın. AWS CloudFormation'ı kullanarak ikincil Bölgede altyapı dağıtımını otomatikleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #275

Bir şirket dahili tarayıcı tabanlı bir uygulama çalıştırıyor. Uygulama, Application Load Balancer'ın arkasındaki Amazon EC2 bulut sunucularında çalışır. Bulut sunucuları birden fazla Erişilebilirlik Alanında bir Amazon EC2 Auto Scaling grubunda çalışır. Otomatik Ölçeklendirme grubu, çalışma saatleri içinde 20 örneğe kadar ölçeklendirir, ancak gece boyunca 2 örneğe kadar ölçeklendirir. Personel, sabahın ortasında iyi çalışmasına rağmen, gün başladığında uygulamanın çok yavaş olmasından şikayetçi. Personel şikayetlerini ele almak ve maliyetleri minimumda tutmak için ölçeklendirme nasıl değiştirilmelidir?

A. Ofis açılmadan kısa bir süre önce arzu edilen kapasiteyi 20'ye ayarlayan planlı bir eylem uygulayın.

B. Daha düşük bir CPU eşiğinde tetiklenen bir adım ölçeklendirme eylemi uygulayın ve bekleme süresini azaltın.

C. Daha düşük bir CPU eşiğinde tetiklenen bir hedef izleme eylemi uygulayın ve bekleme süresini kısaltın.

D. Ofis açılmadan kısa bir süre önce minimum ve maksimum kapasiteyi 20'ye ayarlayan planlı bir eylem uygulayın.

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

Soru #276

Bir şirketin, Otomatik Ölçeklendirme grubundaki çeşitli Amazon EC2 bulut sunucularına dağıtılan çok katmanlı bir uygulaması var. Amazon RDS for Oracle örneği, uygulamanın Oracle'a özgü PL/SQL işlevlerini kullanan veri katmanıdır. Uygulamaya gelen trafik giderek artıyor. Bu, EC2 bulut sunucularının aşırı yüklenmesine ve RDS bulut sunucusunun depolama alanının tükenmesine neden oluyor. Otomatik Ölçeklendirme grubunda herhangi bir ölçeklendirme ölçümü yoktur ve yalnızca minimum sağlıklı örnek sayısını tanımlar. Şirket, trafiğin dengelenmeden önce istikrarlı ancak öngörülemeyen bir oranda artmaya devam edeceğini öngörüyor. Sistemin artan trafiğe göre otomatik olarak ölçeklenebilmesini sağlamak için bir çözüm mimarı ne yapmalıdır? (İki tane seçin.)

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

Soru #277

Bir şirket, video içeriği yayınlamak ve herhangi bir mobil platform tarafından kullanılmak üzere kodunu dönüştürmek için çevrimiçi bir hizmet sağlar. Uygulama mimarisi, videoları toplamak ve depolamak için Amazon Elastic File System (Amazon EFS) Standardını kullanır, böylece birden fazla Amazon EC2 Linux bulut sunucusu işlenmek üzere video içeriğine erişebilir. Hizmetin popülaritesi zamanla arttıkça depolama maliyetleri de çok pahalı hale geldi. Hangi depolama çözümü EN uygun maliyetlidir?

A. Video içeriğini depolayacak ve işleyecek dosyalar için AWS Storage Gateway'i kullanın.

B. Video içeriğini depolayacak ve işleyecek birimler için AWS Storage Gateway'i kullanın.

C. Video içeriğini depolamak için Amazon EFS'yi kullanın. İşleme tamamlandıktan sonra dosyaları Amazon Elastic Block Store'a (Amazon EBS) aktarın.

D. Video içeriğini depolamak için Amazon S3'ü kullanın. Dosyaları işlenmek üzere geçici olarak sunucuya bağlı bir Amazon Elastic Block Store (Amazon EBS) birimine taşıyın.

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

Soru #278

Bir şirket, çalışan verilerini hiyerarşik yapılandırılmış bir ilişki içinde depolamak için bir uygulama oluşturmak istiyor. Şirketin, çalışan verilerine yönelik yüksek trafikli sorgulara minimum gecikmeyle yanıt vermesi gerekiyor ve her türlü hassas veriyi korumalı. Şirketin ayrıca, çalışan verilerinde herhangi bir finansal bilgi bulunması durumunda aylık e-posta mesajları alması gerekir. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi adımların birleşimini uygulamalıdır? (İki tane seçin.)

A. Çalışan verilerini hiyerarşiler halinde depolamak için Amazon Redshift'i kullanın. Verileri her ay Amazon S3'e boşaltın.

B. Çalışan verilerini hiyerarşiler halinde depolamak için Amazon DynamoDB'yi kullanın. Verileri her ay Amazon S3'e aktarın.

C. AWS hesabı için Amazon Macie'yi yapılandırın. Aylık etkinlikleri AWS Lambda'ya göndermek için Macie'yi Amazon EventBridge ile entegre edin.

D. Amazon S3'teki çalışan verilerini analiz etmek için Amazon Athena'yı kullanın. Analiz panolarını yayınlamak ve panoları kullanıcılarla paylaşmak için Athena'yı Amazon QuickSight ile entegre edin.

E. AWS hesabı için Amazon Macie'yi yapılandırın. Amazon Simple Notification Service (Amazon SNS) aboneliği aracılığıyla aylık bildirimler göndermek için Macie'yi Amazon EventBridge ile entegre edin.

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

Soru #279

Bir şirketin Amazon DynamoDB tablosu tarafından desteklenen bir uygulaması var. Şirketin uyumluluk gereklilikleri, veritabanı yedeklemelerinin her ay alınması, 6 ay boyunca mevcut olması ve 7 yıl boyunca saklanması gerektiğini belirtiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Her ayın ilk gününde DynamoDB tablosunu yedeklemek için bir AWS Yedekleme planı oluşturun. Yedeklemeyi 6 ay sonra soğuk depolamaya aktaran bir yaşam döngüsü ilkesi belirtin. Her yedeklemenin saklama süresini 7 yıl olarak ayarlayın.

B. Her ayın ilk gününde DynamoDB tablosunun DynamoDB isteğe bağlı yedeğini oluşturun. Yedeklemeyi 6 ay sonra Amazon S3 Glacier Esnek Alma'ya geçirin. 7 yıldan eski yedeklemeleri silmek için bir S3 Yaşam Döngüsü ilkesi oluşturun.

C. DynamoDB tablosunun isteğe bağlı yedeğini oluşturan bir komut dosyası geliştirmek için AWS SDK'yı kullanın. Betiği her ayın ilk gününde çalıştıran bir Amazon EventBridge kuralı ayarlayın. 6 aydan eski DynamoDB yedeklerini soğuk depolamaya geçirmek ve 7 yıldan eski yedekleri silmek için her ayın ikinci gününde çalışacak ikinci bir komut dosyası oluşturun.

D. DynamoDB tablosunun isteğe bağlı yedeğini oluşturmak için AWS CLI'yi kullanın. Komutu her ayın ilk gününde bir cron ifadesiyle çalıştıran bir Amazon EventBridge kuralı oluşturun. Yedeklemelerin 6 ay sonra soğuk depoya aktarılmasını, 7 yıl sonra ise yedeklerin silinmesini komutta belirtin.

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

Soru #280

Bir şirket web sitesinde Amazon CloudFront kullanıyor. Şirket, CloudFront dağıtımında oturum açmayı etkinleştirdi ve günlükler, şirketin Amazon S3 klasörlerinden birine kaydediliyor. Şirketin günlükler üzerinde gelişmiş analizler yapması ve görselleştirmeler oluşturması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. S3 klasöründeki CloudFront günlüklerini analiz etmek için Amazon Athena'daki standart SQL sorgularını kullanın. Sonuçları AWS Glue ile görselleştirin.

B. S3 klasöründeki CloudFront günlüklerini analiz etmek için Amazon Athena'daki standart SQL sorgularını kullanın. Sonuçları Amazon QuickSight ile görselleştirin.

C. S3 klasöründeki CloudFront günlüklerini analiz etmek için Amazon DynamoDB'deki standart SQL sorgularını kullanın. Sonuçları AWS Glue ile görselleştirin.

D. S3 klasöründeki CloudFront günlüklerini analiz etmek için Amazon DynamoDB'deki standart SQL sorgularını kullanın. Sonuçları Amazon QuickSight ile görselleştirin.

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

Soru #281

Bir şirket, Amazon RDS for PostgreSQL veritabanı örneğini kullanarak bir web sunucusu filosu çalıştırıyor. Rutin bir uyumluluk kontrolünün ardından şirket, tüm üretim veritabanları için 1 saniyeden kısa bir kurtarma noktası hedefi (RPO) gerektiren bir standart belirler. Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanı bulut sunucusu için Multi-AZ dağıtımını etkinleştirin.

B. Bir Erişilebilirlik Alanındaki veritabanı bulut sunucusu için otomatik ölçeklendirmeyi etkinleştirin.

C. Veritabanı bulut sunucusunu tek bir Erişilebilirlik Alanında yapılandırın ve ayrı bir Erişilebilirlik Alanında birden fazla okuma replikası oluşturun.

D. Veritabanı bulut sunucusunu tek bir Erişilebilirlik Alanında yapılandırın ve AWS Database Migration Service (AWS DMS) değişiklik verileri yakalama (CDC) görevlerini yapılandırın.

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

Soru #282

Bir şirket, bir VPC'nin özel alt ağında Amazon EC2 bulut sunucularına dağıtılan bir web uygulamasını çalıştırıyor. Genel alt ağlara yayılan bir Application Load Balancer (ALB), web trafiğini EC2 bulut sunucularına yönlendirir. Şirket, ALB'den EC2 bulut sunucularına gelen trafiği kısıtlamak ve EC2 bulut sunucularının özel alt ağının içindeki veya dışındaki herhangi bir kaynaktan erişimi engellemek için yeni güvenlik önlemleri uygulamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Trafiği internetten EC2 bulut sunucularının özel IP adreslerine yönlendirmek için rota tablosunda bir rota yapılandırın.

B. EC2 bulut sunucuları için güvenlik grubunu, yalnızca ALB'nin güvenlik grubundan gelen trafiğe izin verecek şekilde yapılandırın.

C. EC2 bulut sunucularını genel alt ağa taşıyın. EC2 örneklerine bir dizi Elastik IP adresi verin.

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

Soru #283

Bir araştırma şirketi, bir simülasyon uygulaması ve bir görselleştirme uygulaması tarafından desteklenen deneyler yürütmektedir. Simülasyon uygulaması Linux üzerinde çalışır ve ara verileri her 5 dakikada bir NFS paylaşımına gönderir. Görselleştirme uygulaması, simülasyon çıktısını görüntüleyen ve bir SMB dosya sistemi gerektiren bir Windows masaüstü uygulamasıdır. Şirket iki senkronize dosya sistemine sahiptir. Bu strateji veri tekrarına ve verimsiz kaynak kullanımına neden oluyor. Şirketin, her iki uygulamada da kod değişikliği yapmadan uygulamaları AWS'ye taşıması gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Her iki uygulamayı da AWS Lambda'ya taşıyın. Uygulamalar arasında veri alışverişi yapmak için bir Amazon S3 klasörü oluşturun.

B. Her iki uygulamayı da Amazon Elastic Container Service'e (Amazon ECS) taşıyın. Depolama için Amazon FSx File Gateway'i yapılandırın.

C. Simülasyon uygulamasını Linux Amazon EC2 bulut sunucularına taşıyın. Görselleştirme uygulamasını Windows EC2 örneklerine taşıyın. Uygulamalar arasında veri alışverişi yapmak için Amazon Simple Queue Service'i (Amazon SQS) yapılandırın.

D. Simülasyon uygulamasını Linux Amazon EC2 bulut sunucularına taşıyın. Görselleştirme uygulamasını Windows EC2 örneklerine taşıyın. Depolama amacıyla NetApp ONTAP için Amazon FSx'i yapılandırın.

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

Soru #284

Bütçe planlamasının bir parçası olarak yönetim, kullanıcı tarafından listelenen AWS'de faturalanan öğelere ilişkin bir rapor ister. Veriler departman bütçelerini oluşturmak için kullanılacaktır. Bir çözüm mimarının bu rapor bilgisini elde etmenin en etkili yolunu belirlemesi gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Raporu oluşturmak için Amazon Athena ile bir sorgu çalıştırın.

B. Cost Explorer'da bir rapor oluşturun ve raporu indirin.

C. Faturalandırma kontrol panelinden fatura ayrıntılarına erişin ve faturayı indirin.

D. Amazon Simple Email Service (Amazon SES) ile uyarı vermek için AWS Bütçelerindeki bir maliyet bütçesini değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Cost Explorer'da bir rapor oluşturun ve raporu indirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #285

Bir şirket statik web sitesini Amazon S3'ü kullanarak barındırıyor. Şirket, web sayfasına bir iletişim formu eklemek istiyor. İletişim formunda kullanıcıların adlarını, e-posta adreslerini, telefon numaralarını ve kullanıcı mesajlarını girmeleri için dinamik sunucu tarafı bileşenleri bulunacaktır. Şirket, her ay 100'den az saha ziyareti gerçekleşeceğini tahmin ediyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon Elastic Container Service'de (Amazon ECS) dinamik bir iletişim formu sayfası barındırın. Herhangi bir üçüncü taraf e-posta sağlayıcısına bağlanmak için Amazon Simple Email Service'i (Amazon SES) kurun.

B. Amazon Simple Email Service'e (Amazon SES) çağrı yapan AWS Lambda arka ucuna sahip bir Amazon API Gateway uç noktası oluşturun.

C. Amazon Lightsail'i dağıtarak statik web sayfasını dinamiğe dönüştürün. İletişim formunu oluşturmak için istemci tarafı komut dosyası oluşturmayı kullanın. Formu Amazon WorkMail ile entegre edin.

D. Bir t2.micro Amazon EC2 bulut sunucusu oluşturun. Web sayfasını barındırmak için bir LAMP (Linux, Apache, MySQL, PHP/Perl/Python) yığını dağıtın. İletişim formunu oluşturmak için istemci tarafı komut dosyası oluşturmayı kullanın. Formu Amazon WorkMail ile entegre edin.

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

Soru #286

Bir şirketin Amazon S3'ün önünde Amazon CloudFront'ta barındırılan statik bir web sitesi var. Statik web sitesi bir veritabanı arka ucu kullanır. Şirket, web sitesinin, web sitesinin Git deposunda yapılan güncellemeleri yansıtmadığını fark etti. Şirket, Git deposu ile Amazon S3 arasındaki sürekli entegrasyon ve sürekli teslimat (CI/CD) hattını kontrol ediyor. Şirket, web kancalarının düzgün şekilde yapılandırıldığını ve CI/CD hattının başarılı dağıtımları gösteren mesajlar gönderdiğini doğrular. Bir çözüm mimarının, web sitesindeki güncellemeleri görüntüleyen bir çözümü uygulaması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Application Load Balancer ekleyin.

B. Redis veya Memcached için Amazon ElastiCache'i web uygulamasının veritabanı katmanına ekleyin.

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

Soru #287

Bir şirket, Windows tabanlı bir uygulamayı şirket içinden AWS Cloud'a taşımak istiyor. Uygulamanın üç katmanı vardır: bir uygulama katmanı, bir iş katmanı ve Microsoft SQL Server ile bir veritabanı katmanı. Şirket, yerel yedeklemeler ve Veri Kalitesi Hizmetleri gibi SQL Server'ın belirli özelliklerini kullanmak istiyor. Şirketin ayrıca katmanlar arasında işlenmek üzere dosyaları paylaşması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılayacak mimariyi nasıl tasarlamalıdır?

A. Üç katmanın tamamını Amazon EC2 bulut sunucularında barındırın. Katmanlar arasında dosya paylaşımı için Amazon FSx File Gateway'i kullanın.

B. Üç katmanın tamamını Amazon EC2 bulut sunucularında barındırın. Katmanlar arasında dosya paylaşımı için Windows Dosya Sunucusu için Amazon FSx'i kullanın.

C. Uygulama katmanını ve iş katmanını Amazon EC2 bulut sunucularında barındırın. Veritabanı katmanını Amazon RDS'de barındırın. Katmanlar arasında dosya paylaşımı için Amazon Elastic File System'i (Amazon EFS) kullanın.

D. Uygulama katmanını ve iş katmanını Amazon EC2 bulut sunucularında barındırın. Veritabanı katmanını Amazon RDS'de barındırın. Katmanlar arasında dosya paylaşımı için Tedarik Edilmiş IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) birimini kullanın.

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

Soru #288

Bir şirket, Linux tabanlı bir web sunucusu grubunu AWS'ye taşıyor. Web sunucularının bazı içerikler için paylaşılan dosya deposundaki dosyalara erişmesi gerekir. Şirketin başvuruda herhangi bir değişiklik yapmaması gerekmektedir. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Web sunucularına erişimi olan bir Amazon S3 Standard paketi oluşturun.

B. Amazon S3 klasörünü kaynak olarak kullanarak bir Amazon CloudFront dağıtımını yapılandırın.

C. Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini tüm web sunucularına bağlayın.

D. Genel Amaçlı SSD (gp3) Amazon Elastic Block Store (Amazon EBS) birimini yapılandırın. EBS birimini tüm web sunucularına bağlayın.

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

Soru #289

Bir şirketin, aynı AWS hesabında bulunan bir Amazon S3 klasörüne okuma erişimi gerektiren bir AWS Lambda işlevi var. Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. S3 klasörüne okuma erişimi sağlayan bir S3 grubu ilkesi uygulayın.

B. Lambda işlevine bir IAM rolü uygulayın. S3 paketine okuma erişimi vermek için role bir IAM politikası uygulayın.

C. S3 klasörüne okuma erişimi için gerekli IAM izinlerini vermek üzere Lambda işlevinin koduna bir erişim anahtarı ve bir gizli anahtar ekleyin.

D. Lambda işlevine bir IAM rolü uygulayın. Hesaptaki tüm S3 paketlerine okuma erişimi vermek için role bir IAM politikası uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Lambda işlevine bir IAM rolü uygulayın. S3 paketine okuma erişimi vermek için role bir IAM politikası uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #290

Bir şirket, bir web uygulamasını birden fazla Amazon EC2 bulut sunucusunda barındırıyor. EC2 bulut sunucuları, kullanıcı talebine göre ölçeklenen bir Otomatik Ölçeklendirme grubundadır. Şirket, uzun vadeli bir taahhütte bulunmadan maliyet tasarruflarını optimize etmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi EC2 bulut sunucusu satın alma seçeneğini önermelidir?

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

Soru #291

Bir medya şirketi, halka açık video akışı içeriği için Amazon CloudFront'u kullanıyor. Şirket, kimin erişime sahip olduğunu kontrol ederek Amazon S3'te barındırılan video içeriğini güvence altına almak istiyor. Şirketin bazı kullanıcıları, çerezleri desteklemeyen özel bir HTTP istemcisi kullanıyor. Şirketin bazı kullanıcıları, erişim için kullandıkları sabit kodlu URL'leri değiştiremiyor. Hangi hizmetler veya yöntemler bu gereksinimleri kullanıcılar üzerinde EN AZ etkiyle karşılayacak? (İki tane seçin.)

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

Soru #292

Bir şirket, birden fazla kaynaktan gerçek zamanlı akış verilerini alacak yeni bir veri platformu hazırlıyor. Şirketin, verileri Amazon S3'e yazmadan önce verileri dönüştürmesi gerekiyor. Şirketin dönüştürülen verileri sorgulamak için SQL kullanma becerisine ihtiyacı var. Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. Veri akışını sağlamak için Amazon Kinesis Data Streams'i kullanın. Verileri dönüştürmek için Amazon Kinesis Data Analytics'i kullanın. Verileri Amazon S3'e yazmak için Amazon Kinesis Data Firehose'u kullanın. Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon Athena'yı kullanın.

B. Veri akışını sağlamak için Amazon Managed Streaming for Apache Kafka'yı (Amazon MSK) kullanın. Verileri dönüştürmek ve verileri Amazon S3'e yazmak için AWS Glue'yu kullanın. Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon Athena'yı kullanın.

C. Verileri almak için AWS Database Migration Service'i (AWS DMS) kullanın. Verileri dönüştürmek ve verileri Amazon S3'e yazmak için Amazon EMR'yi kullanın. Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon Athena'yı kullanın.

D. Veri akışı sağlamak için Amazon Managed Streaming for Apache Kafka'yı (Amazon MSK) kullanın. Verileri dönüştürmek ve verileri Amazon S3'e yazmak için Amazon Kinesis Data Analytics'i kullanın. Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon RDS sorgu düzenleyicisini kullanın.

E. Veri akışını sağlamak için Amazon Kinesis Data Streams'i kullanın. Verileri dönüştürmek için AWS Glue'yu kullanın. Verileri Amazon S3'e yazmak için Amazon Kinesis Data Firehose'u kullanın. Dönüştürülen verileri Amazon S3'ten sorgulamak için Amazon RDS sorgu düzenleyicisini kullanın.

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

Soru #293

Bir şirketin kullanım ömrü sonuna gelmiş bir şirket içi birim yedekleme çözümü var. Şirket, AWS'yi yeni bir yedekleme çözümünün parçası olarak kullanmak istiyor ve AWS'de yedeklenirken tüm verilere yerel erişimi sürdürmek istiyor. Şirket, AWS'de yedeklenen verilerin otomatik ve güvenli bir şekilde aktarıldığından emin olmak istiyor. Hangi çözüm bu gereksinimleri karşılıyor?

C. Verileri şirket içi çözümden Amazon S3'e taşımak için AWS Snowball'u kullanın. Verilere yerel erişim sağlamak amacıyla şirket içi sistemleri Snowball S3 uç noktasını monte edecek şekilde yapılandırın.

B. Verileri şirket içi çözümden Amazon S3'e taşımak için AWS Snowball Edge'i kullanın. Şirket içi sistemlere verilere yerel erişim sağlamak için Snowball Edge dosya arayüzünü kullanın.

C. AWS Storage Gateway'i kullanın ve önbelleğe alınmış bir birim ağ geçidini yapılandırın. Storage Gateway yazılım cihazını şirket içinde çalıştırın ve yerel olarak önbelleğe alınacak verilerin bir yüzdesini yapılandırın. Verilere yerel erişim sağlamak için ağ geçidi depolama birimlerini bağlayın.

D. AWS Storage Gateway'i kullanın ve depolanan birim ağ geçidini yapılandırın. Storage Gateway yazılım cihazını şirket içinde çalıştırın ve ağ geçidi depolama birimlerini şirket içi depolamayla eşleyin. Verilere yerel erişim sağlamak için ağ geçidi depolama birimlerini bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS Storage Gateway'i kullanın ve depolanan birim ağ geçidini yapılandırın. Storage Gateway yazılım cihazını şirket içinde çalıştırın ve ağ geçidi depolama birimlerini şirket içi depolamayla eşleyin. Verilere yerel erişim sağlamak için ağ geçidi depolama birimlerini bağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #294

Amazon EC2 bulut sunucularında barındırılan bir uygulamanın bir Amazon S3 klasörüne erişmesi gerekir. Trafik internet üzerinden geçmemelidir. Bir çözüm mimarı bu gereksinimleri karşılamak için erişimi nasıl yapılandırmalıdır?

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

Soru #295

Bir e-ticaret şirketi terabaytlarca müşteri verisini AWS Cloud'da depolar. Veriler kişisel olarak tanımlanabilir bilgiler (PII) içerir. Şirket, verileri üç uygulamada kullanmak istiyor. Uygulamalardan yalnızca birinin PII'yi işlemesi gerekir. Diğer iki uygulama verileri işlemeden önce PII'nin kaldırılması gerekir. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri bir Amazon DynamoDB tablosunda saklayın. Her uygulamanın talep ettiği verilere müdahale etmek ve bunları işlemek için bir proxy uygulama katmanı oluşturun.

B. Verileri bir Amazon S3 klasöründe saklayın. Verileri talep eden uygulamaya geri göndermeden önce S3 Object Lambda'yı kullanarak verileri işleyin ve dönüştürün.

C. Verileri işleyin ve dönüştürülen verileri üç ayrı Amazon S3 klasöründe depolayarak her uygulamanın kendi özel veri kümesine sahip olmasını sağlayın. Her uygulamayı ilgili S3 klasörüne yönlendirin.

D. Verileri işleyin ve dönüştürülen verileri üç ayrı Amazon DynamoDB tablosunda depolayarak her uygulamanın kendi özel veri kümesine sahip olmasını sağlayın. Her uygulamayı ilgili DynamoDB tablosuna yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri bir Amazon S3 klasöründe saklayın. Verileri talep eden uygulamaya geri göndermeden önce S3 Object Lambda'yı kullanarak verileri işleyin ve dönüştürün.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #296

Bir geliştirme ekibi, bir geliştirme VPC'si içindeki Amazon EC2 bulut sunucularında barındırılan yeni bir uygulamayı başlattı. Bir çözüm mimarının aynı hesapta yeni bir VPC oluşturması gerekir. Yeni VPC, geliştirme VPC'si ile eşleştirilecektir. Geliştirme VPC'si için VPC CIDR bloğu 192.168.0.0/24'tür. Çözüm mimarının yeni VPC için bir CIDR bloğu oluşturması gerekiyor. CIDR bloğu, geliştirme VPC'sine bir VPC eşleme bağlantısı için geçerli olmalıdır. Bu gereksinimleri karşılayan EN KÜÇÜK CIDR bloğu nedir?

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

Soru #297

Bir şirket, bir uygulamayı beş Amazon EC2 bulut sunucusuna dağıtıyor. Application Load Balancer (ALB), bir hedef grup kullanarak trafiği örneklere dağıtır. Her bir bulut sunucusundaki ortalama CPU kullanımı çoğu zaman %10'un altındadır ve zaman zaman bu oran %65'e kadar çıkmaktadır. Bir çözüm mimarının, uygulamanın ölçeklenebilirliğini otomatikleştirmek için bir çözüm uygulaması gerekir. Çözüm, mimarinin maliyetini optimize etmeli ve dalgalanmalar meydana geldiğinde uygulamanın yeterli CPU kaynağına sahip olmasını sağlamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. CPU Kullanımı ölçümü %20'den az olduğunda ALARM durumuna giren bir Amazon CloudWatch alarmı oluşturun. ALB hedef grubundaki EC2 bulut sunucularından birini sonlandırmak için CloudWatch alarmının çağıracağı bir AWS Lambda işlevi oluşturun.

B. Bir EC2 Otomatik Ölçeklendirme grubu oluşturun. Yük dengeleyici olarak mevcut ALB'yi ve hedef grup olarak mevcut hedef grubu seçin. ASGAverageCPUUtilization metriğini temel alan bir hedef izleme ölçeklendirme politikası ayarlayın. Minimum örnekleri 2'ye, istenen kapasiteyi 3'e, maksimum örnekleri 6'ya ve hedef değeri %50'ye ayarlayın. EC2 örneklerini Otomatik Ölçeklendirme grubuna ekleyin.

C. Bir EC2 Otomatik Ölçeklendirme grubu oluşturun. Yük dengeleyici olarak mevcut ALB'yi ve hedef grup olarak mevcut hedef grubu seçin. Minimum bulut sunucularını 2'ye, istenen kapasiteyi 3'e ve maksimum bulut sunucularını 6'ya ayarlayın. EC2 bulut sunucularını Otomatik Ölçeklendirme grubuna ekleyin.

D. İki Amazon CloudWatch alarmı oluşturun. Ortalama CPU Kullanımı ölçümü %20'nin altında olduğunda ALARM durumuna girecek ilk CloudWatch alarmını yapılandırın. Ortalama CPU Kullanımı matrisi %50'nin üzerinde olduğunda ALARM durumuna girecek ikinci CloudWatch alarmını yapılandırın. Bir e-posta mesajı göndermek için alarmları bir Amazon Simple Notification Service (Amazon SNS) konusuna yayınlayacak şekilde yapılandırın. Mesajı aldıktan sonra çalışan EC2 bulut sunucularının sayısını azaltmak veya artırmak için oturum açın.

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

Soru #298

Bir şirket, Application Load Balancer'ın arkasında Amazon EC2 bulut sunucularında kritik bir iş uygulamasını çalıştırıyor. EC2 bulut sunucuları bir Otomatik Ölçeklendirme grubunda çalışır ve bir Amazon RDS DB bulut sunucusuna erişir. EC2 bulut sunucuları ve veritabanı bulut sunucularının tümü tek bir Erişilebilirlik Alanında yer aldığından tasarım operasyonel incelemeden geçemedi. Bir çözüm mimarının tasarımı ikinci bir Erişilebilirlik Alanı kullanacak şekilde güncellemesi gerekir. Hangi çözüm uygulamayı yüksek oranda kullanılabilir hale getirecek?

A. Her Erişilebilirlik Alanında bir alt ağ sağlayın. EC2 bulut sunucularını her iki Erişilebilirlik Alanına dağıtmak için Otomatik Ölçeklendirme grubunu yapılandırın. Veritabanı örneğini her bir ağa bağlantılarla yapılandırın.

B. Her iki Erişilebilirlik Alanına yayılan iki alt ağ sağlayın. EC2 bulut sunucularını her iki Erişilebilirlik Alanına dağıtmak için Otomatik Ölçeklendirme grubunu yapılandırın. Veritabanı örneğini her bir ağa bağlantılarla yapılandırın.

C. Her Erişilebilirlik Alanında bir alt ağ sağlayın. EC2 bulut sunucularını her iki Erişilebilirlik Alanına dağıtmak için Otomatik Ölçeklendirme grubunu yapılandırın. Multi-AZ dağıtımı için veritabanı örneğini yapılandırın.

D. Her iki Erişilebilirlik Alanına yayılan bir alt ağ sağlayın. EC2 bulut sunucularını her iki Erişilebilirlik Alanına dağıtmak için Otomatik Ölçeklendirme grubunu yapılandırın. Multi-AZ dağıtımı için veritabanı örneğini yapılandırın.

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

Soru #299

Bir araştırma laboratuvarının yaklaşık 8 TB veriyi işlemesi gerekiyor. Laboratuvar, depolama alt sistemi için milisaniyenin altında gecikme süreleri ve minimum 6 GBps aktarım hızı gerektirir. Amazon Linux çalıştıran yüzlerce Amazon EC2 bulut sunucusu, verileri dağıtacak ve işleyecektir. Hangi çözüm performans gereksinimlerini karşılayacak?

A. NetApp ONTAP dosya sistemi için bir Amazon FSx oluşturun. Her birimin katmanlama politikasını ALL olarak belirledik. Ham verileri dosya sistemine aktarın. Fla sistemini EC2 bulut sunucularına monte edin.

B. Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Kalıcı SSD depolamayı kullanan bir Amazon FSx for Luster dosya sistemi oluşturun. Amazon S3'ten veri içe aktarma ve Amazon S3'e veri aktarma seçeneğini seçin. Dosya sistemini EC2 bulut sunucularına bağlayın.

C. Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Kalıcı HDD depolamayı kullanan bir Amazon FSx for Lustre dosya sistemi oluşturun. Amazon S3'ten veri içe aktarma ve Amazon S3'e veri aktarma seçeneğini seçin. Dosya sistemini EC2 bulut sunucularına bağlayın.

D. NetApp ONTAP dosya sistemi için bir Amazon FSx oluşturun. Her birimin katmanlama politikasını HİÇBİR olarak ayarlayın. Ham verileri dosya sistemine aktarın. Dosya sistemini EC2 bulut sunucularına bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Kalıcı SSD depolamayı kullanan bir Amazon FSx for Luster dosya sistemi oluşturun. Amazon S3'ten veri içe aktarma ve Amazon S3'e veri aktarma seçeneğini seçin. Dosya sistemini EC2 bulut sunucularına bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #300

Bir şirketin, donanım kapasitesi kısıtlamaları nedeniyle eski bir uygulamayı şirket içi veri merkezinden AWS Cloud'a taşıması gerekiyor. Uygulama haftanın 7 günü, günün 24 saati çalışır. Uygulamanın veritabanı depolama alanı zamanla büyümeye devam ediyor. Bir çözüm mimarı bu gereksinimleri EN uygun maliyetle karşılamak için ne yapmalıdır?

A. Uygulama katmanını Amazon EC2 Spot Bulut Sunucularına taşıyın. Veri depolama katmanını Amazon S3'e taşıyın.

B. Uygulama katmanını Amazon EC2 Rezerve Edilmiş Bulut Sunucularına taşıyın. Veri depolama katmanını Amazon RDS İsteğe Bağlı Bulut Sunucularına taşıyın.

C. Uygulama katmanını Amazon EC2 Rezerve Edilmiş Bulut Sunucularına taşıyın. Veri depolama katmanını Amazon Aurora Rezerve Edilmiş Bulut Sunucularına taşıyın.

D. Uygulama katmanını Amazon EC2 İsteğe Bağlı Bulut Sunucularına taşıyın. Veri depolama katmanını Amazon RDS Rezerve Edilmiş Bulut Sunucularına taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulama katmanını Amazon EC2 Rezerve Edilmiş Bulut Sunucularına taşıyın. Veri depolama katmanını Amazon Aurora Rezerve Edilmiş Bulut Sunucularına taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
