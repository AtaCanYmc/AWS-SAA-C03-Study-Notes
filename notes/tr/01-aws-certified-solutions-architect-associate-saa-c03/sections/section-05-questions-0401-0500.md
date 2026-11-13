# AWS Certified Solutions Architect Associate (SAA-C03) - Senaryo ve Pratik Notları - Bölüm 05

> **Soru Aralığı:** 401 - 500 / Toplam: 684

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #401

Bir şirket, mevcut bir uygulamayı yüksek düzeyde kullanılabilir ve dayanıklı hale getirmek için AWS Cloud'u kullanmak istiyor. Uygulamanın güncel sürümü şirketin veri merkezinde bulunmaktadır. Uygulama yakın zamanda beklenmedik bir elektrik kesintisi nedeniyle bir veritabanı sunucusunun çökmesi sonrasında veri kaybı yaşadı. Şirketin tek bir arıza noktasını ortadan kaldıracak bir çözüme ihtiyacı var. Çözüm, uygulamaya kullanıcı talebini karşılayacak şekilde ölçeklendirme yeteneği vermelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulama sunucularını birden fazla Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın. Multi-AZ yapılandırmasında bir Amazon RDS veritabanı bulut sunucusu kullanın.

B. Uygulama sunucularını, tek bir Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularını kullanarak dağıtın. Veritabanını bir EC2 bulut sunucusuna dağıtın. EC2 Otomatik Kurtarmayı etkinleştirin.

C. Uygulama sunucularını birden fazla Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın. Tek bir Erişilebilirlik Alanında okuma replikası olan bir Amazon RDS veritabanı bulut sunucusu kullanın. Birincil veritabanı bulut sunucusu başarısız olursa birincil veritabanı bulut sunucusunu değiştirmek için okuma replikasını yükseltin.

D. Uygulama sunucularını birden fazla Erişilebilirlik Alanında Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın. Birincil ve ikincil veritabanı sunucularını birden fazla Erişilebilirlik Alanındaki EC2 bulut sunucularına dağıtın. Bulut sunucuları arasında paylaşılan depolama oluşturmak için Amazon Elastic Block Store (Amazon EBS) Multi-Attach'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulama sunucularını birden fazla Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda Amazon EC2 bulut sunucularını kullanarak dağıtın. Multi-AZ yapılandırmasında bir Amazon RDS veritabanı bulut sunucusu kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #402

Bir şirketin, uygulamasının oluşturduğu büyük miktarlardaki akış verilerini alıp işlemesi gerekir. Uygulama, Amazon EC2 bulut sunucularında çalışır ve varsayılan ayarlarla yapılandırılmış olan Amazon Kinesis Data Streams'e veri gönderir. Uygulama her iki günde bir verileri tüketir ve verileri iş zekası (BI) işleme için bir Amazon S3 klasörüne yazar. Şirket, Amazon S3'ün uygulamanın Kinesis Data Streams'e gönderdiği tüm verileri almadığını gözlemliyor. Bir çözüm mimarı bu sorunu çözmek için ne yapmalıdır?

A. Veri saklama süresini değiştirerek Kinesis Veri Akışları varsayılan ayarlarını güncelleyin.

B. Verileri Kinesis Data Streams'e göndermek için Kinesis Yapımcı Kitaplığı'nı (KPL) kullanacak şekilde uygulamayı güncelleyin.

C. Kinesis Data Streams'e gönderilen verilerin verimini karşılamak için Kinesis parçalarının sayısını güncelleyin.

D. S3 klasörüne alınan her nesnenin her sürümünü korumak için S3 klasöründe S3 Sürümü Oluşturmayı açın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veri saklama süresini değiştirerek Kinesis Veri Akışları varsayılan ayarlarını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Soru #403

Bir geliştiricinin, dosyaları Amazon S3'e yüklemek için AWS Lambda işlevini kullanan ve görevi gerçekleştirmek için gerekli izinlere ihtiyacı olan bir uygulaması var. Geliştiricinin zaten Amazon S3 için gerekli geçerli IAM kimlik bilgilerine sahip bir IAM kullanıcısı var. Bir çözüm mimarı izinleri vermek için ne yapmalıdır?

A. Lambda işlevinin kaynak politikasına gerekli IAM izinlerini ekleyin.

B. Lambda işlevindeki mevcut IAM kimlik bilgilerini kullanarak imzalı bir istek oluşturun.

C. Yeni bir IAM kullanıcısı oluşturun ve mevcut IAM kimlik bilgilerini Lambda işlevinde kullanın.

D. Gerekli izinlere sahip bir IAM yürütme rolü oluşturun ve IAM rolünü Lambda işlevine ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Gerekli izinlere sahip bir IAM yürütme rolü oluşturun ve IAM rolünü Lambda işlevine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #404

Bir şirket, Amazon S3 klasörüne yeni belgeler yüklendiğinde AWS Lambda işlevini çağıran sunucusuz bir uygulama dağıttı. Uygulama, belgeleri işlemek için Lambda işlevini kullanır. Yakın zamanda yapılan bir pazarlama kampanyasının ardından şirket, uygulamanın birçok belgeyi işlemediğini fark etti. Bir çözüm mimarı bu uygulamanın mimarisini geliştirmek için ne yapmalıdır?

A. Lambda fonksiyonunun çalışma süresi zaman aşımı değerini 15 dakikaya ayarlayın.

B. Bir S3 grubu çoğaltma ilkesini yapılandırın. Belgeleri daha sonra işlenmek üzere S3 klasörüne yerleştirin.

C. Ek bir Lambda işlevi dağıtın. İki Lambda işlevi arasında belgelerin işlenmesinde yük dengelemesi yapın.

D. Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. İstekleri kuyruğa gönderin. Kuyruğu Lambda için bir olay kaynağı olarak yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir Amazon Simple Queue Service (Amazon SQS) kuyruğu oluşturun. İstekleri kuyruğa gönderin. Kuyruğu Lambda için bir olay kaynağı olarak yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #405

Bir çözüm mimarı, bir yazılım gösterim ortamı için mimariyi tasarlıyor. Ortam, Application Load Balancer'ın (ALB) arkasındaki Otomatik Ölçeklendirme grubundaki Amazon EC2 bulut sunucularında çalışacaktır. Sistemin mesai saatleri içerisinde trafikte önemli artışlar yaşanacak ancak hafta sonları çalışması zorunlu değildir. Sistemin talebi karşılayacak şekilde ölçeklenebilmesini sağlamak için çözüm mimarı hangi eylem kombinasyonunu gerçekleştirmelidir? (İki tane seçin.)

A. ALB kapasitesini istek oranına göre ayarlamak için AWS Otomatik Ölçeklendirmeyi kullanın.

B. VPC internet ağ geçidinin kapasitesini ölçeklendirmek için AWS Auto Scaling'i kullanın.

C. Yükü Bölgeler arasında dağıtmak için EC2 bulut sunucularını birden fazla AWS Bölgesinde başlatın.

D. Otomatik Ölçeklendirme grubunu örnek CPU kullanımına göre ölçeklendirmek için bir hedef izleme ölçeklendirme ilkesi kullanın.

E. Hafta sonları Otomatik Ölçeklendirme grubunun minimum, maksimum ve istenen kapasitesini sıfıra değiştirmek için zamanlanmış ölçeklendirmeyi kullanın. Hafta başında varsayılan değerlere dönün.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunu örnek CPU kullanımına göre ölçeklendirmek için bir hedef izleme ölçeklendirme ilkesi kullanın. Hafta sonları Otomatik Ölçeklendirme grubunun minimum, maksimum ve istenen kapasitesini sıfıra değiştirmek için zamanlanmış ölçeklendirmeyi kullanın. Hafta başında varsayılan değerlere dönün.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #406

Bir çözüm mimarı, genel bir alt ağ ve bir veritabanı alt ağı içeren iki katmanlı bir mimari tasarlıyor. Genel alt ağdaki web sunucuları 443 numaralı bağlantı noktasında internete açık olmalıdır. Veritabanı alt ağındaki Amazon RDS for MySQL DB bulut sunucusuna yalnızca 3306 numaralı bağlantı noktasındaki web sunucuları tarafından erişilebilir olmalıdır. Çözüm mimarı bu gereksinimleri karşılamak için hangi adım kombinasyonunu uygulamalıdır? (İki tane seçin.)

A. Genel alt ağ için bir ağ ACL'si oluşturun. 3306 numaralı bağlantı noktasında 0.0.0.0/0'a giden trafiği reddetmek için bir kural ekleyin.

B. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. 3306 numaralı bağlantı noktasında genel alt ağ CIDR bloğundan gelen trafiğe izin vermek için bir kural ekleyin.

C. Genel alt ağdaki web sunucuları için bir güvenlik grubu oluşturun. 443 numaralı bağlantı noktasında 0.0.0.0/0 trafiğine izin verecek bir kural ekleyin.

D. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. 3306 numaralı bağlantı noktasında web sunucularının güvenlik grubundan gelen trafiğe izin vermek için bir kural ekleyin.

E. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. Web sunucularının 3306 numaralı bağlantı noktasındaki güvenlik grubundan gelen trafik dışındaki tüm trafiği reddetmek için bir kural ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, D`
> - **Önerilen Çözüm:** Genel alt ağdaki web sunucuları için bir güvenlik grubu oluşturun. 443 numaralı bağlantı noktasında 0.0.0.0/0'dan gelen trafiğe izin vermek için bir kural ekleyin. Veritabanı bulut sunucusu için bir güvenlik grubu oluşturun. 3306 numaralı bağlantı noktasında web sunucularının güvenlik grubundan gelen trafiğe izin vermek için bir kural ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #407

Bir şirket, AWS Cloud'da barındırılan bir oyun uygulaması için paylaşılan bir depolama çözümü uyguluyor. Şirketin verilere erişmek için Luster istemcilerini kullanma becerisine ihtiyacı var. Çözümün tam olarak yönetilmesi gerekir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Verileri takılabilir bir dosya sistemi olarak paylaşan bir AWS DataSync görevi oluşturun. Dosya sistemini uygulama sunucusuna bağlayın.

B. Bir AWS Storage Gateway dosya ağ geçidi oluşturun. Gerekli istemci protokolünü kullanan bir dosya paylaşımı oluşturun. Uygulama sunucusunu dosya paylaşımına bağlayın.

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

Soru #408

Bir şirket, UDP kullanan binlerce coğrafi olarak dağınık uzak cihazdan veri alan bir uygulamayı çalıştırıyor. Uygulama verileri anında işler ve gerekirse cihaza geri mesaj gönderir. Hiçbir veri saklanmaz. Şirketin cihazlardan veri aktarımında gecikmeyi en aza indirecek bir çözüme ihtiyacı var. Çözüm ayrıca başka bir AWS Bölgesine hızlı bir şekilde yük devretme olanağı sağlamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Route 53 yük devretme yönlendirme politikasını yapılandırın. İki Bölgenin her birinde bir Ağ Yük Dengeleyicisi (NLB) oluşturun. NLB'yi, verileri işlemek üzere bir AWS Lambda işlevini çağıracak şekilde yapılandırın.

B. AWS Global Accelerator'ı kullanın. İki Bölgenin her birinde uç nokta olarak bir Ağ Yük Dengeleyicisi (NLB) oluşturun. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. Kümede bir ECS hizmeti oluşturun. ECS hizmetini, Amazon ECS'deki verileri NLişlemesi için hedef olarak ayarlayın.

C. AWS Global Accelerator'ı kullanın. İki Bölgenin her birinde uç nokta olarak bir Uygulama Yük Dengeleyicisi (ALB) oluşturun. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. Kümede bir ECS hizmeti oluşturun. ECS hizmetini ALB için hedef olarak ayarlayın. Verileri Amazon ECS'de işleyin.

D. Amazon Route 53 yük devretme yönlendirme politikasını yapılandırın. İki Bölgenin her birinde bir Uygulama Yük Dengeleyicisi (ALB) oluşturun. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. Kümede bir ECS hizmeti oluşturun. ECS hizmetini ALB için hedef olarak ayarlayın. Verileri Amazon ECS'de işleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Global Accelerator'ı kullanın. İki Bölgenin her birinde uç nokta olarak bir Ağ Yük Dengeleyicisi (NLB) oluşturun. Fargate başlatma türüyle bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. Kümede bir ECS hizmeti oluşturun. ECS hizmetini, Amazon ECS'deki verileri NLişlemesi için hedef olarak ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #409

Bir çözüm mimarının bir Windows Internet Information Services (IIS) web uygulamasını AWS'ye taşıması gerekir. Uygulama şu anda kullanıcının şirket içi ağa bağlı depolama alanında (NAS) barındırılan bir dosya paylaşımına dayanmaktadır. Çözüm mimarı, IIS web sunucularının, depolama çözümüne bağlı birden fazla Erişilebilirlik Alanındaki Amazon EC2 bulut sunucularına taşınmasını ve bulut sunucularına iliştirilmiş bir Elastic Load Balancer yapılandırılmasını önerdi. Şirket içi dosya paylaşımına alternatif olarak hangisi EN dayanıklı ve dayanıklıdır?

A. Dosya paylaşımını Amazon RDS'ye taşıyın.

B. Dosya paylaşımını AWS Storage Gateway'e taşıyın.

C. Dosya paylaşımını Windows Dosya Sunucusu için Amazon FSx'e taşıyın.

D. Dosya paylaşımını Amazon Elastic File System'e (Amazon EFS) taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Dosya paylaşımını Windows Dosya Sunucusu için Amazon FSx'e taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #410

Bir şirket, Amazon EC2 bulut sunucularında yeni bir uygulamayı dağıtıyor. Uygulama, verileri Amazon Elastic Block Store (Amazon EBS) birimlerine yazar. Şirketin, EBS birimlerine yazılan tüm verilerin kullanımdayken şifrelendiğinden emin olması gerekiyor. Bu gereksinimi hangi çözüm karşılayacak?

A. EBS şifrelemesini belirten bir IAM rolü oluşturun. Rolü EC2 bulut sunucularına ekleyin.

B. EBS birimlerini şifrelenmiş birimler olarak oluşturun. EBS birimlerini EC2 bulut sunucularına ekleyin.

C. Encrypt anahtarına ve True değerine sahip bir EC2 bulut sunucusu etiketi oluşturun. EBS düzeyinde şifreleme gerektiren tüm örnekleri etiketleyin.

D. Hesapta EBS şifrelemesini zorunlu kılan bir AWS Key Management Service (AWS KMS) anahtar politikası oluşturun. Anahtar ilkesinin etkin olduğundan emin olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EBS birimlerini şifrelenmiş birimler olarak oluşturun. EBS birimlerini EC2 bulut sunucularına ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #411

Bir şirketin ara sıra kullanım kalıplarına sahip bir web uygulaması var. Her ayın başında yoğun, hafta başında orta düzeyde ve hafta içinde öngörülemeyen bir kullanım söz konusudur. Uygulama, veri merkezi içinde çalışan bir web sunucusu ve MySQL veritabanı sunucusundan oluşur. Şirket, uygulamayı AWS Cloud'a taşımak istiyor ve veritabanı değişiklikleri gerektirmeyecek, uygun maliyetli bir veritabanı platformu seçmesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon DynamoDB

B. MySQL için Amazon RDS

C. MySQL uyumlu Amazon Aurora Serverless

D. MySQL, Amazon EC2'de Otomatik Ölçeklendirme grubunda dağıtıldı

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** MySQL uyumlu Amazon Aurora Serverless
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #412

Bir görüntü barındırma şirketi, nesnelerini Amazon S3 klasörlerinde saklıyor. Şirket, S3 kovalarındaki nesnelerin kazara halkın eline geçmesini önlemek istiyor. AWS hesabının tamamındaki tüm S3 nesnelerinin özel kalması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 paket politikalarını izlemek için Amazon GuardDuty'yi kullanın. Nesneleri herkese açık hale getiren herhangi bir değişikliği düzeltmek için AWS Lambda işlevini kullanan bir otomatik iyileştirme eylemi kuralı oluşturun.

B. Herkese açık S3 klasörlerini bulmak için AWS Trusted Advisor'ı kullanın. Bir değişiklik algılandığında Trusted Advisor'da e-posta bildirimlerini yapılandırın. Genel erişime izin veriyorsa S3 grup politikasını manuel olarak değiştirin.

C. Herkese açık S3 klasörlerini bulmak için AWS Resource Access Manager'ı kullanın. Bir değişiklik algılandığında bir AWS Lambda işlevini çağırmak için Amazon Simple Notification Service'i (Amazon SNS) kullanın. Değişikliği programlı olarak düzelten bir Lambda işlevi dağıtın.

D. Hesap düzeyinde S3 Block Public Access özelliğini kullanın. IAM kullanıcılarının ayarı değiştirmesini önleyen bir hizmet kontrol politikası (SCP) oluşturmak için AWS Organizasyonlarını kullanın. SCP'yi hesaba uygulayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Hesap düzeyinde S3 Block Public Access özelliğini kullanın. IAM kullanıcılarının ayarı değiştirmesini önleyen bir hizmet kontrol politikası (SCP) oluşturmak için AWS Organizasyonlarını kullanın. SCP'yi hesaba uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #413

Bir e-ticaret şirketi kullanıcı trafiğinde bir artış yaşıyor. Şirketin mağazası, bir web katmanı ve ayrı bir veritabanı katmanından oluşan iki katmanlı bir web uygulaması olarak Amazon EC2 bulut sunucularına dağıtılır. Trafik arttıkça şirket, mimarinin kullanıcılara zamanında pazarlama ve sipariş onayı e-postası göndermede önemli gecikmelere neden olduğunu fark ediyor. Şirket, karmaşık e-posta dağıtım sorunlarını çözmek için harcadığı zamanı azaltmak ve operasyonel ek yükü en aza indirmek istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. E-posta işlemeye ayrılmış EC2 bulut sunucularını kullanarak ayrı bir uygulama katmanı oluşturun.

B. Web örneğini Amazon Simple Email Service (Amazon SES) aracılığıyla e-posta gönderecek şekilde yapılandırın.

C. Web örneğini Amazon Simple Notification Service (Amazon SNS) aracılığıyla e-posta gönderecek şekilde yapılandırın.

D. E-posta işlemeye ayrılmış EC2 bulut sunucularını kullanarak ayrı bir uygulama katmanı oluşturun. Örnekleri bir Otomatik Ölçeklendirme grubuna yerleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web örneğini Amazon Simple Email Service (Amazon SES) aracılığıyla e-posta gönderecek şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru #414

Bir şirketin her gün yüzlerce rapor üreten bir iş sistemi vardır. İş sistemi, raporları CSV formatında bir ağ paylaşımına kaydeder. Şirketin analiz için bu verileri neredeyse gerçek zamanlı olarak AWS Cloud'da depolaması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Dosyaları Amazon S3'e aktarmak için AWS DataSync'i kullanın. Her günün sonunda çalışacak zamanlanmış bir görev oluşturun.

B. Bir Amazon S3 Dosya Ağ Geçidi oluşturun. S3 Dosya Ağ Geçidinden yeni bir ağ paylaşımı kullanmak için iş sistemini güncelleyin.

C. Dosyaları Amazon S3'e aktarmak için AWS DataSync'i kullanın. Otomasyon iş akışında DataSync API'sini kullanan bir uygulama oluşturun.

D. SFTP uç noktası için bir AWS Transfer dağıtın. Ağ paylaşımındaki yeni dosyaları kontrol eden ve yeni dosyaları SFTP kullanarak yükleyen bir komut dosyası oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon S3 Dosya Ağ Geçidi oluşturun. S3 Dosya Ağ Geçidinden yeni bir ağ paylaşımı kullanmak için iş sistemini güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #415

Bir şirket petabaytlarca veriyi Amazon S3 Standard'ta depoluyor. Veriler birden fazla S3 klasöründe depolanır ve bunlara değişen sıklıkta erişilir. Şirket, tüm verilere erişim modellerini bilmiyor. Şirketin, S3 kullanım maliyetini optimize etmek amacıyla her S3 klasörü için bir çözüm uygulaması gerekiyor. Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. S3 klasöründeki nesneleri S3 Intelligent-Tiering'e geçirmek için bir kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun.

B. S3 klasöründeki her nesne için doğru katmanı belirlemek amacıyla S3 depolama sınıfı analiz aracını kullanın. Her nesneyi belirlenen depolama katmanına taşıyın.

C. S3 klasöründeki nesneleri S3 Glacier Instant Retrieval'a geçirmek için bir kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun.

D. S3 klasöründeki nesneleri S3 Tek Bölge-Seyrek Erişime (S3 Bir Bölge-IA) geçirmek için bir kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 klasöründeki nesneleri S3 Intelligent-Tiering'e geçirmek için kural içeren bir S3 Yaşam Döngüsü yapılandırması oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #416

Hızla büyüyen küresel bir e-ticaret şirketi, web uygulamasını AWS'de barındırıyor. Web uygulaması statik içerik ve dinamik içerik içerir. Web sitesi, çevrimiçi işlem işleme (OLTP) verilerini bir Amazon RDS veritabanında saklıyor. Web sitesinin kullanıcıları yavaş sayfa yükleme sorunu yaşıyor. Bir çözüm mimarının bu sorunu çözmek için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. Bir Amazon Redshift kümesi yapılandırın.

B. Bir Amazon CloudFront dağıtımı kurun.

C. Dinamik web içeriğini Amazon S3'te barındırın.

D. RDS Veritabanı bulut sunucusu için bir okuma kopyası oluşturun.

E. RDS Veritabanı bulut sunucusu için bir Multi-AZ dağıtımı yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Bir Amazon CloudFront dağıtımı kurun. RDS Veritabanı bulut sunucusu için bir okuma kopyası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #417

Bir şirket, uygulamasını çalıştırmak için Amazon EC2 bulut sunucularını ve AWS Lambda işlevlerini kullanıyor. Şirketin AWS hesabında genel alt ağlara ve özel alt ağlara sahip VPC'ler bulunmaktadır. EC2 bulut sunucuları, VPC'lerden birindeki özel bir alt ağda çalışır. Lambda işlevlerinin, uygulamanın çalışması için EC2 bulut sunucularına doğrudan ağ erişimine ihtiyacı vardır. Uygulama en az 1 yıl süreyle geçerli olacaktır. Şirket, bu süre zarfında uygulamanın kullandığı Lambda işlevlerinin sayısının artmasını bekliyor. Şirket, tüm uygulama kaynaklarından tasarrufunu en üst düzeye çıkarmak ve hizmetler arasındaki ağ gecikmesini düşük tutmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir EC2 Bulut Sunucusu Tasarruf Planı satın alın Lambda işlevlerinin süresini, bellek kullanımını ve çağrı sayısını optimize edin. Lambda işlevlerini EC2 bulut sunucularını içeren özel alt ağa bağlayın.

B. Bir EC2 Bulut Sunucusu Tasarruf Planı satın alın Lambda işlevlerinin süresini ve bellek kullanımını, çağrı sayısını ve aktarılan veri miktarını optimize edin. Lambda işlevlerini, EC2 bulut sunucularının çalıştığı aynı VPC'deki genel bir alt ağa bağlayın.

C. Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerinin süresini ve bellek kullanımını, çağrı sayısını ve aktarılan veri miktarını optimize edin. Lambda işlevlerini EC2 bulut sunucularını içeren özel alt ağa bağlayın.

D. Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerinin süresini ve bellek kullanımını, çağrı sayısını ve aktarılan veri miktarını optimize edin. Lambda işlevlerini Lambda hizmeti VPC'sinde tutun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir Bilgi İşlem Tasarruf Planı satın alın. Lambda işlevlerinin süresini ve bellek kullanımını, çağrı sayısını ve aktarılan veri miktarını optimize edin. Lambda işlevlerini EC2 bulut sunucularını içeren özel alt ağa bağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #418

Bir çözüm mimarının, ekip üyelerinin iki farklı AWS hesabındaki Amazon S3 klasörlerine erişmesine izin vermesi gerekir: bir geliştirme hesabı ve bir üretim hesabı. Ekip şu anda, hesapta uygun izinlere sahip bir IAM grubuna atanmış benzersiz IAM kullanıcılarını kullanarak geliştirme hesabındaki S3 paketlerine erişebilir. Çözüm mimarı, üretim hesabında bir IAM rolü oluşturdu. Rol, üretim hesabındaki bir S3 klasörüne erişim izni veren bir politikaya sahiptir. En az ayrıcalık ilkesine uyarken bu gereksinimleri hangi çözüm karşılayacak?

A. Yönetici Erişimi ilkesini geliştirme hesabı kullanıcılarına ekleyin.

B. Üretim hesabındaki rolün güven politikasına geliştirme hesabını sorumlu olarak ekleyin.

C. Üretim hesabındaki S3 klasöründeki S3 Blok Genel Erişim özelliğini kapatın.

D. Üretim hesabında her ekip üyesi için benzersiz kimlik bilgilerine sahip bir kullanıcı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Üretim hesabındaki rolün güven ilkesine geliştirme hesabını sorumlu olarak ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #419

Bir şirket, tüm özelliklerin etkin olduğu AWS Organizasyonlarını kullanıyor ve ap-southeast-2 Bölgesinde birden fazla Amazon EC2 iş yükünü çalıştırıyor. Şirketin başka bir Bölgede herhangi bir kaynağın oluşturulmasını önleyen bir hizmet kontrol politikası (SCP) vardır. Bir güvenlik politikası, şirketin kullanımda olmayan tüm verileri şifrelemesini gerektirir. Bir denetim, çalışanların EC2 bulut sunucuları için birimleri şifrelemeden Amazon Elastic Block Store (Amazon EBS) birimleri oluşturduğunu ortaya çıkarır. Şirket, herhangi bir IAM kullanıcısının veya root kullanıcısının ap-southeast-2'de başlattığı tüm yeni EC2 bulut sunucularının şifrelenmiş EBS birimlerini kullanmasını istiyor. Şirket, EBS hacimleri oluşturan çalışanlar üzerinde minimum etki yaratacak bir çözüm istiyor. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

C. Amazon EC2 konsolunda EBS şifreleme hesabı özelliğini seçin ve varsayılan bir şifreleme anahtarı tanımlayın.

B. Bir IAM izin sınırı oluşturun. İzin sınırını kök kuruluş birimine (OU) ekleyin. ec2:Encrypted koşulu false değerine eşit olduğunda ec2:CreateVolume eylemini reddetmek için sınırı tanımlayın.

C. Bir SCP oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin. Ec2:Encrypted koşulu false değerine eşit olduğunda ec2:CreateVolume eylemini reddedecek SCP'yi tanımlayın.

D. ec2:Encrypted koşulu false değerine eşit olduğunda ec2:CreateVolume eylemini reddetmek için her hesap için IAM politikalarını güncelleyin.

E. Kuruluş yönetimi hesabında, Varsayılan EBS birim şifreleme ayarını belirtin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Bir SCP oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin. Ec2:Encrypted koşulu false değerine eşit olduğunda ec2:CreateVolume eylemini reddedecek SCP'yi tanımlayın. Kuruluş yönetimi hesabında Varsayılan EBS birim şifreleme ayarını belirtin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #420

Bir şirket, üretim veritabanı iş yükleri için zaman alan veritabanı yönetim görevlerini basitleştirmek amacıyla Amazon RDS for PostgreSQL Veritabanı kümesini kullanmak istiyor. Şirket, veritabanının yüksek oranda kullanılabilir olmasını ve çoğu senaryoda 40 saniyeden kısa sürede otomatik yük devretme desteği sağlamasını istiyor. Şirket, birincil örneğin okuma yükünü boşaltmak ve maliyetleri mümkün olduğunca düşük tutmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon RDS Multi-AZ veritabanı bulut sunucusu dağıtımını kullanın. Bir okuma replikası oluşturun ve okuma iş yükünü okuma replikasına yönlendirin.

B. Amazon RDS Multi-AZ DB silgi dağıtımını kullanın İki okuma replikası oluşturun ve okuma iş yükünü okuma replikalarına yönlendirin.

C. Amazon RDS Multi-AZ veritabanı bulut sunucusu dağıtımını kullanın. Okuma iş yükünü Multi-AZ çiftindeki ikincil örneklere yönlendirin.

D. Amazon RDS Multi-AZ veritabanı kümesi dağıtımını kullanın Okuma iş yükünü okuyucu uç noktasına yönlendirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon RDS Multi-AZ veritabanı kümesi dağıtımı kullanın Okuma iş yükünü okuyucu uç noktasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru #421

Bir şirket yüksek oranda kullanılabilir bir SFTP hizmeti yürütmektedir. SFTP hizmeti, internetteki güvenilir IP kaynaklarından gelen trafiği kabul etmek için elastik IP adresleriyle çalışan iki Amazon EC2 Linux örneğini kullanır. SFTP hizmeti, bulut sunucularına eklenen paylaşılan depolama alanı tarafından desteklenir. Kullanıcı hesapları, SFTP sunucularında Linux kullanıcıları olarak oluşturulur ve yönetilir. Şirket, yüksek IOPS performansı ve üst düzeyde yapılandırılabilir güvenlik sağlayan sunucusuz bir seçenek istiyor. Şirket ayrıca kullanıcı izinleri üzerindeki kontrolü de elinde tutmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Şifrelenmiş bir Amazon Elastic Block Store (Amazon EBS) birimi oluşturun. Yalnızca güvenilir IP adreslerine izin veren genel uç noktaya sahip bir AWS Transfer Ailesi SFTP hizmeti oluşturun. EBS birimini SFTP hizmeti uç noktasına ekleyin. Kullanıcılara SFTP hizmetine erişim izni verin.

B. Şifrelenmiş bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. Elastik IP adreslerine ve internete yönelik erişime sahip bir VPC uç noktasına sahip bir AWS Transfer Ailesi SFTP hizmeti oluşturun. Uç noktaya yalnızca güvenilen IP adreslerine izin veren bir güvenlik grubu ekleyin. EFS birimini SFTP hizmeti uç noktasına ekleyin. Kullanıcılara SFTP hizmetine erişim izni verin.

C. Varsayılan şifrelemenin etkin olduğu bir Amazon S3 klasörü oluşturun. Yalnızca güvenilir IP adreslerine izin veren genel uç noktaya sahip bir AWS Transfer Ailesi SFTP hizmeti oluşturun. S3 paketini SFTP hizmeti uç noktasına ekleyin. Kullanıcılara SFTP hizmetine erişim izni verin.

D. Varsayılan şifrelemenin etkin olduğu bir Amazon S3 klasörü oluşturun. Özel bir alt ağda dahili erişime sahip bir VPC uç noktasıyla bir AWS Transfer Ailesi SFTP hizmeti oluşturun. Yalnızca güvenilir IP adreslerine izin veren bir güvenlik grubu ekleyin. S3 paketini SFTP hizmeti uç noktasına ekleyin. Kullanıcılara SFTP hizmetine erişim izni verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şifrelenmiş bir Amazon Elastic File System (Amazon EFS) birimi oluşturun. Elastik IP adreslerine ve internete yönelik erişime sahip bir VPC uç noktasına sahip bir AWS Transfer Ailesi SFTP hizmeti oluşturun. Uç noktaya yalnızca güvenilen IP adreslerine izin veren bir güvenlik grubu ekleyin. EFS birimini SFTP hizmeti uç noktasına ekleyin. Kullanıcılara SFTP hizmetine erişim izni verin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru #422

Bir şirket, AWS'de yeni bir makine öğrenimi (ML) modeli çözümü geliştiriyor. Modeller, başlangıçta Amazon S3'ten yaklaşık 1 GB model verisi alan ve verileri belleğe yükleyen bağımsız mikro hizmetler olarak geliştirilir. Kullanıcılar modellere eşzamansız bir API aracılığıyla erişir. Kullanıcılar bir istek veya bir grup istek gönderebilir ve sonuçların nereye gönderilmesi gerektiğini belirtebilir. Şirket yüzlerce kullanıcıya model sağlıyor. Modellerin kullanım şekilleri düzensizdir. Bazı modeller günlerce veya haftalarca kullanılmayabilir. Diğer modeller aynı anda binlerce istek alabilir. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi tasarımı önermelidir?

A. API'den gelen istekleri bir Ağ Yük Dengeleyicisine (NLB) yönlendirin. Modelleri, NLB tarafından çağrılan AWS Lambda işlevleri olarak dağıtın.

B. API'den gelen istekleri bir Uygulama Yük Dengeleyicisine (ALB) yönlendirin. Modelleri, bir Amazon Simple Queue Service (Amazon SQS) kuyruğundan okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak dağıtın. ECS kümesinin örneklerini SQS kuyruk boyutuna göre ölçeklendirmek için AWS App Mesh'i kullanın.

C. API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin. Modelleri, SQS olayları tarafından çağrılan AWS Lambda işlevleri olarak dağıtın. Lambda işlevlerine yönelik vCPU sayısını SQS kuyruğu boyutuna göre artırmak için AWS Auto Scaling'i kullanın.

D. API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin. Modelleri kuyruktan okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak dağıtın. Kuyruk boyutuna göre hizmetin hem kümesi hem de kopyaları için Amazon ECS'de AWS Otomatik Ölçeklendirmeyi etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** API'den gelen istekleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yönlendirin. Modelleri kuyruktan okuyan Amazon Elastic Container Service (Amazon ECS) hizmetleri olarak dağıtın. Kuyruk boyutuna göre hizmetin hem kümesi hem de kopyaları için Amazon ECS'de AWS Otomatik Ölçeklendirmeyi etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #423

Bir çözüm mimarı, belirli izinler vermek için aşağıdaki JSON metnini kimlik tabanlı bir politika olarak kullanmak istiyor: Çözüm mimarı bu politikayı hangi IAM ilkelerine ekleyebilir? (İki tane seçin.)

A. Rol

B.Grup

C. Organizasyon

D. Amazon Elastic Container Service (Amazon ECS) kaynağı

E. Amazon EC2 kaynağı

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Rol Grubu
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #424

Bir şirket, Amazon EC2 İsteğe Bağlı Bulut Sunucularında özel bir uygulama çalıştırıyor. Uygulamanın, haftanın 7 günü, günün 24 saati çalışması gereken ön uç düğümleri ve iş yüküne bağlı olarak yalnızca kısa bir süre çalışması gereken arka uç düğümleri vardır. Arka uç düğümlerinin sayısı gün içinde değişiklik gösterir. Şirketin iş yüküne bağlı olarak ölçeğini genişletmesi ve daha fazla örneği ölçeklendirmesi gerekiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Ön uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın. Arka uç düğümleri için AWS Fargate'i kullanın.

B. Ön uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın. Arka uç düğümleri için Spot Bulut Sunucularını kullanın.

C. Ön uç düğümleri için Spot Bulut Sunucularını kullanın. Arka uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın.

D. Ön uç düğümleri için Spot Bulut Sunucularını kullanın. Arka uç düğümleri için AWS Fargate'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ön uç düğümleri için Rezerve Edilmiş Bulut Sunucularını kullanın. Arka uç düğümleri için Spot Bulut Sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #425

Bir şirket, iş yüklerini şirket içinde yürütmek için yüksek blok depolama kapasitesi kullanıyor. Şirketin günlük en yüksek saniyedeki giriş ve çıkış işlemleri 15.000 IOPS'yi geçmiyor. Şirket, iş yüklerini Amazon EC2'ye taşımak ve depolama kapasitesinden bağımsız disk performansı sağlamak istiyor. Hangi Amazon Elastic Block Store (Amazon EBS) birim türü bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. GP2 birim türü

B. io2 birim türü

C. GP3 birim türü

D. io1 birim türü

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** GP3 birim türü
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #426

Bir şirketin sağlık hizmeti uygulamasından veri depolaması gerekir. Uygulamanın verileri sıklıkla değişiyor. Yeni bir düzenleme, saklanan verilerin tüm düzeylerinde denetim erişimini zorunlu kılmaktadır. Şirket, uygulamayı depolama kapasitesi tükenen bir şirket içi altyapıda barındırıyor. Bir çözüm mimarının, yeni düzenlemeyi yerine getirirken mevcut verileri güvenli bir şekilde AWS'ye taşıması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Mevcut verileri Amazon S3'e taşımak için AWS DataSync'i kullanın. Veri olaylarını günlüğe kaydetmek için AWS CloudTrail'i kullanın.

B. Mevcut verileri Amazon S3'e taşımak için AWS Snowcone'u kullanın. Yönetim olaylarını günlüğe kaydetmek için AWS CloudTrail'i kullanın.

C. Mevcut verileri Amazon S3'e taşımak için Amazon S3 Transfer Acceleration'ı kullanın. Veri olaylarını günlüğe kaydetmek için AWS CloudTrail'i kullanın.

D. Mevcut verileri Amazon S3'e taşımak için AWS Storage Gateway'i kullanın. Yönetim olaylarını günlüğe kaydetmek için AWS CloudTrail'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mevcut verileri Amazon S3'e taşımak için AWS DataSync'i kullanın. Veri olaylarını günlüğe kaydetmek için AWS CloudTrail'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #427

Bir çözüm mimarı, MySQL veritabanıyla karmaşık bir Java uygulamasını hayata geçiriyor. Java uygulamasının Apache Tomcat'te konuşlandırılması ve yüksek düzeyde kullanılabilir olması gerekir. Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Uygulamayı AWS Lambda'da dağıtın. Lambda işlevlerine bağlanmak için bir Amazon API Gateway API'si yapılandırın.

B. Uygulamayı AWS Elastic Beanstalk'ı kullanarak dağıtın. Yük dengeli bir ortam ve sürekli dağıtım ilkesi yapılandırın.

C. Veritabanını Amazon ElastiCache'e taşıyın. Uygulamadan erişime izin vermek için ElastiCache güvenlik grubunu yapılandırın.

D. Bir Amazon EC2 bulut sunucusu başlatın. EC2 örneğine bir MySQL sunucusu yükleyin. Uygulamayı sunucuda yapılandırın. Bir AMI oluşturun. Otomatik Ölçeklendirme grubuyla bir başlatma şablonu oluşturmak için AMI'yi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Uygulamayı AWS Elastic Beanstalk'ı kullanarak dağıtın. Yük dengeli bir ortam ve sürekli dağıtım ilkesi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #428

Sunucusuz bir uygulama Amazon API Gateway, AWS Lambda ve Amazon DynamoDB'yi kullanır. Lambda işlevinin DynamoDB tablosunu okuma ve yazma izinlerine ihtiyacı var. Hangi çözüm Lambda fonksiyonunun DynamoDB tablosuna EN güvenli şekilde erişmesini sağlayacaktır?

A. Lambda işlevine programlı erişimi olan bir IAM kullanıcısı oluşturun. Kullanıcıya, DynamoDB tablosuna okuma ve yazma erişimine izin veren bir politika ekleyin. Access_key_id ve secret_access_key parametrelerini Lambda ortam değişkenlerinin parçası olarak saklayın. Diğer AWS kullanıcılarının Lambda işlevi yapılandırmasına okuma ve yazma erişiminin olmadığından emin olun.

B. Lambda'yı güvenilir bir hizmet olarak içeren bir IAM rolü oluşturun. Role, DynamoDB tablosuna okuma ve yazma erişimine izin veren bir politika ekleyin. Yeni rolü yürütme rolü olarak kullanmak için Lambda işlevinin yapılandırmasını güncelleyin.

C. Lambda işlevine programlı erişimi olan bir IAM kullanıcısı oluşturun. Kullanıcıya, DynamoDB tablosuna okuma ve yazma erişimine izin veren bir politika ekleyin. Access_key_id ve secret_access_key parametrelerini AWS Systems Manager Parametre Deposu'nda güvenli dize parametreleri olarak saklayın. DynamoDB tablosuna bağlanmadan önce güvenli dize parametrelerini almak için Lambda işlev kodunu güncelleyin.

D. Güvenilir bir hizmet olarak DynamoDB'yi içeren bir IAM rolü oluşturun. Lambda işlevinden okuma ve yazma erişimine izin veren role bir politika ekleyin. Yeni role yürütme rolü olarak eklemek için Lambda işlevinin kodunu güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Güvenilir bir hizmet olarak Lambda'yı içeren bir IAM rolü oluşturun. Role, DynamoDB tablosuna okuma ve yazma erişimine izin veren bir politika ekleyin. Yeni rolü yürütme rolü olarak kullanmak için Lambda işlevinin yapılandırmasını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #429

Aşağıdaki IAM politikası bir IAM grubuna eklenmiştir. Gruba uygulanan tek politika budur. Bu politikanın grup üyeleri için etkili IAM izinleri nelerdir?

A. Grup üyelerinin us-east-1 Bölgesinde herhangi bir Amazon EC2 işlemi yapmasına izin verilir. İzin Ver izninden sonraki ifadeler uygulanmaz.

B. Grup üyelerinin, çok faktörlü kimlik doğrulama (MFA) ile oturum açmadıkları sürece, ABD-Doğu-1 Bölgesi'ndeki tüm Amazon EC2 izinleri reddedilir.

C. Grup üyelerine, çok faktörlü kimlik doğrulama (MFA) ile oturum açtıklarında tüm Bölgeler için ec2:StopInstances ve ec2:TerminateInstances izinlerine izin verilir. Grup üyelerine diğer Amazon EC2 işlemlerine izin verilir.

D. Grup üyelerinin us-east-1 Bölgesi için ec2:StopInstances ve ec2:TerminateInstances izinlerine yalnızca çok faktörlü kimlik doğrulama (MFA) ile oturum açtıklarında izin verilir. Grup üyelerinin us-east-1 Bölgesi'nde herhangi başka bir Amazon EC2 işlemi yapmasına izin verilir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Grup üyelerinin us-east-1 Bölgesi için ec2:StopInstances ve ec2:TerminateInstances izinlerine yalnızca çok faktörlü kimlik doğrulama (MFA) ile oturum açtıklarında izin verilir. Grup üyelerinin us-east-1 Bölgesi'nde herhangi başka bir Amazon EC2 işlemi yapmasına izin verilir.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #430

Bir üretim şirketi, .csv dosyalarını bir Amazon S3 klasörüne yükleyen makine sensörlerine sahiptir. Bu .csv dosyalarının görsellere dönüştürülmesi ve grafik raporların otomatik olarak oluşturulması için mümkün olan en kısa sürede kullanıma sunulması gerekir. Görüntüler 1 ay sonra geçerliliğini yitirir ancak makine öğrenimi (ML) modellerini eğitmek için .csv dosyalarının yılda iki kez saklanması gerekir. ML eğitimleri ve denetimleri haftalar önceden planlanır. Hangi adım kombinasyonu bu gereksinimleri EN uygun maliyetle karşılayacaktır? (İki tane seçin.)

A. Her saat başı .csv dosyalarını indiren, görüntü dosyalarını oluşturan ve görüntüleri S3 klasörüne yükleyen bir Amazon EC2 Spot Bulut Sunucusu başlatın.

B. .csv dosyalarını görüntülere dönüştüren ve görüntüleri S3 klasöründe saklayan bir AWS Lambda işlevi tasarlayın. Bir .csv dosyası yüklendiğinde Lambda işlevini çağırın.

C. S3 klasöründeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını, yüklendikten 1 gün sonra S3 Standard'tan S3 Glacier'e aktarın. Görüntü dosyalarının geçerlilik süresi 30 gün sonra dolacaktır.

D. S3 klasöründeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını, yüklendikten 1 gün sonra S3 Standard'tan S3 One Zone-Infrequent Access'e (S3 One Zone-IA) aktarın. Görüntü dosyalarının geçerlilik süresi 30 gün sonra dolacaktır.

E. S3 klasöründeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını, yüklendikten 1 gün sonra S3 Standard'tan S3 Standard-Infrequent Access'e (S3 Standard-IA) aktarın. Görüntü dosyalarını Azaltılmış Artıklık Depolamasında (RRS) saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** .csv dosyalarını görüntülere dönüştüren ve görüntüleri S3 klasöründe saklayan bir AWS Lambda işlevi tasarlayın. Bir .csv dosyası yüklendiğinde Lambda işlevini çağırın. S3 paketindeki .csv dosyaları ve görüntü dosyaları için S3 Yaşam Döngüsü kuralları oluşturun. .csv dosyalarını, yüklendikten 1 gün sonra S3 Standard'tan S3 Glacier'e aktarın. Görüntü dosyalarının geçerlilik süresi 30 gün sonra dolacaktır.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #431

Bir şirket web uygulaması olarak yeni bir video oyunu geliştirdi. Uygulama, veritabanı katmanında Amazon RDS for MySQL içeren bir VPC'de üç katmanlı bir mimaridedir. Birkaç oyuncu aynı anda çevrimiçi olarak yarışacak. Oyunun geliştiricileri, neredeyse gerçek zamanlı olarak ilk 10 puan tablosunu görüntülemek ve mevcut puanları korurken oyunu durdurma ve geri yükleme olanağı sunmak istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Web uygulamasının görüntüleyeceği puanları önbelleğe almak için bir Amazon ElastiCache for Memcached kümesi kurun.

B. Web uygulamasının görüntüleyeceği puanları hesaplamak ve önbelleğe almak için bir Amazon ElastiCache for Redis kümesi kurun.

C. Uygulamanın bir bölümünde puan tablosunu önbelleğe almak için web uygulamasının önüne bir Amazon CloudFront dağıtımı yerleştirin.

D. Puan tablosunu hesaplamak ve okuma trafiğini web uygulamasına sunmak amacıyla sorguları çalıştırmak için Amazon RDS for MySQL'de bir okuma kopyası oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web uygulamasının görüntüleyeceği puanları hesaplamak ve önbelleğe almak için bir Amazon ElastiCache for Redis kümesi kurun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #432

Bir e-ticaret şirketi, modeller oluşturmak ve eğitmek için makine öğrenimi (ML) algoritmalarını kullanmak istiyor. Şirket, modelleri karmaşık senaryoları görselleştirmek ve müşteri verilerindeki eğilimleri tespit etmek için kullanacak. Mimari ekibi, artırılmış verileri analiz etmek ve verileri doğrudan iş zekası kontrol panellerinde kullanmak için ML modellerini bir raporlama platformuyla entegre etmek istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Modelleri oluşturmak ve eğitmek amacıyla bir makine öğrenimi dönüşümü oluşturmak için AWS Glue'yu kullanın. Verileri görselleştirmek için Amazon OpenSearch Service'i kullanın.

B. Model oluşturmak ve eğitmek için Amazon SageMaker'ı kullanın. Verileri görselleştirmek için Amazon QuickSight'ı kullanın.

C. Modelleri oluşturmak ve eğitmek için AWS Marketplace'ten önceden oluşturulmuş bir ML Amazon Machine Image (AMI) kullanın. Verileri görselleştirmek için Amazon OpenSearch Service'i kullanın.

D. Hesaplanan alanları kullanarak modeller oluşturmak ve eğitmek için Amazon QuickSight'ı kullanın. Verileri görselleştirmek için Amazon QuickSight'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Modelleri oluşturmak ve eğitmek için Amazon SageMaker'ı kullanın. Verileri görselleştirmek için Amazon QuickSight'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #433

Bir şirket, üretim ve üretim dışı ortam iş yüklerini birden fazla AWS hesabında çalıştırıyor. Hesaplar AWS Organizasyonlarındaki bir kuruluştadır. Şirketin maliyet kullanım etiketlerinin değiştirilmesini engelleyecek bir çözüm tasarlaması gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Yetkili sorumlular dışında etiketin değiştirilmesini önlemek için özel bir AWS Config kuralı oluşturun.

B. Etiket değişikliğini önlemek için AWS CloudTrail'de özel bir iz oluşturun.

C. Yetkili sorumlular dışında etiket değişikliğini önlemek için bir hizmet kontrol politikası (SCP) oluşturun.

D. Etiket değişikliğini önlemek için özel Amazon CloudWatch günlükleri oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Yetkili sorumlular dışında etiketin değiştirilmesini önlemek için bir hizmet kontrol ilkesi (SCP) oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #434

Bir şirket, uygulamasını AWS Cloud'da barındırır. Uygulama, bir Otomatik Ölçeklendirme grubundaki Elastic Load Balancer'ın arkasında ve bir Amazon DynamoDB tablosuyla Amazon EC2 bulut sunucularında çalışır. Şirket, uygulamanın minimum kesinti süresiyle başka bir AWS Bölgesinde kullanıma sunulmasını sağlamak istiyor. Bir çözüm mimarı bu gereksinimleri EN AZ miktarda kesintiyle karşılamak için ne yapmalıdır?

A. Olağanüstü durum kurtarma Bölgesinde bir Otomatik Ölçeklendirme grubu ve yük dengeleyici oluşturun. DynamoDB tablosunu global tablo olarak yapılandırın. Yeni olağanüstü durum kurtarma Bölgesinin yük dengeleyicisini işaret edecek şekilde DNS yük devretmesini yapılandırın.

B. Gerektiğinde başlatılacak EC2 bulut sunucuları, yük dengeleyiciler ve DynamoDB tabloları oluşturmak için bir AWS CloudFormation şablonu oluşturun. DNS yük devretmeyi, yeni olağanüstü durum kurtarma Bölgesinin yük dengeleyicisini işaret edecek şekilde yapılandırın.

C. EC2 bulut sunucuları ve gerektiğinde başlatılacak bir yük dengeleyici oluşturmak için bir AWS CloudFormation şablonu oluşturun. DynamoDB tablosunu global tablo olarak yapılandırın. Yeni olağanüstü durum kurtarma Bölgesinin yük dengeleyicisini işaret edecek şekilde DNS yük devretmesini yapılandırın.

D. Olağanüstü durum kurtarma Bölgesinde bir Otomatik Ölçeklendirme grubu ve yük dengeleyici oluşturun. DynamoDB tablosunu global tablo olarak yapılandırın. Olağanüstü durum kurtarma yük dengeleyicisine işaret eden Amazon Route 53'ü güncelleyen bir AWS Lambda işlevini tetiklemek için bir Amazon CloudWatch alarmı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Olağanüstü durum kurtarma Bölgesinde bir Otomatik Ölçeklendirme grubu ve yük dengeleyici oluşturun. DynamoDB tablosunu global tablo olarak yapılandırın. Yeni olağanüstü durum kurtarma Bölgesinin yük dengeleyicisini işaret edecek şekilde DNS yük devretmesini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #435

Bir şirketin MySQL veritabanını şirket içi veri merkezinden AWS'ye 2 hafta içinde taşıması gerekiyor. Veritabanının boyutu 20 TB'tır. Şirket, geçişi minimum kesinti süresiyle tamamlamak istiyor. Hangi çözüm veritabanını EN uygun maliyetle taşıyacak?

A. Bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin. Devam eden değişikliklerin çoğaltılmasıyla veritabanını taşımak için AWS Database Migration Service'i (AWS DMS) AWS Schema Conversion Tool (AWS SCT) ile birlikte kullanın. Geçişi tamamlamak ve devam eden çoğaltmaya devam etmek için Snowball Edge cihazını AWS'ye gönderin.

B. Bir AWS Kar Araci aracı sipariş edin. Devam eden değişikliklerle veritabanını taşımak için AWS Database Migration Service'i (AWS DMS) AWS Schema Conversion Tool (AWS SCT) ile birlikte kullanın. Geçişi tamamlamak ve devam eden çoğaltmaya devam etmek için Snowmobile aracını AWS'ye geri gönderin.

C. GPU cihazıyla Optimize Edilmiş bir AWS Snowball Edge Compute'u sipariş edin. Devam eden değişikliklerle veritabanını taşımak için AWS Database Migration Service'i (AWS DMS) AWS Schema Conversion Tool (AWS SCT) ile birlikte kullanın. Geçişi tamamlamak ve devam eden çoğaltmaya devam etmek için Snowball cihazını AWS'ye gönderin

D. Veri merkeziyle bağlantı kurmak için 1 GB'lık özel bir AWS Direct Connect bağlantısı sipariş edin. Devam eden değişikliklerin çoğaltılmasıyla veritabanını taşımak için AWS Database Migration Service'i (AWS DMS) AWS Schema Conversion Tool (AWS SCT) ile birlikte kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Snowball Edge Storage Optimize Edilmiş bir cihaz sipariş edin. Devam eden değişikliklerin çoğaltılmasıyla veritabanını taşımak için AWS Database Migration Service'i (AWS DMS) AWS Schema Conversion Tool (AWS SCT) ile birlikte kullanın. Geçişi tamamlamak ve devam eden çoğaltmaya devam etmek için Snowball Edge cihazını AWS'ye gönderin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #436

Bir şirket, şirket içi PostgreSQL veritabanını Amazon RDS for PostgreSQL veritabanı örneğine taşıdı. Şirket yeni bir ürünü başarıyla piyasaya sürdü. Veritabanındaki iş yükü arttı. Şirket, altyapı eklemeden daha büyük iş yükünü karşılamak istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Toplam iş yükü için ayrılmış veritabanı bulut sunucularını satın alın. Amazon RDS for PostgreSQL veritabanı bulut sunucusunu büyütün.

B. Amazon RDS for PostgreSQL Veritabanı bulut sunucusunu Multi-AZ Veritabanı bulut sunucusu haline getirin.

C. Toplam iş yükü için ayrılmış veritabanı bulut sunucularını satın alın. Başka bir Amazon RDS for PostgreSQL veritabanı bulut sunucusu ekleyin.

D. Amazon RDS for PostgreSQL veritabanı bulut sunucusunu isteğe bağlı veritabanı bulut sunucusu haline getirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Toplam iş yükü için ayrılmış veritabanı bulut sunucuları satın alın. Amazon RDS for PostgreSQL veritabanı bulut sunucusunu büyütün.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #437

Bir şirket, Otomatik Ölçeklendirme grubundaki Application Load Balancer'ın (ALB) arkasında Amazon EC2 bulut sunucularında bir e-ticaret web sitesi işletiyor. Site, IP adresleri değişen, yasal olmayan harici sistemlerden gelen yüksek talep oranı nedeniyle performans sorunları yaşıyor. Güvenlik ekibi, web sitesine yönelik olası DDoS saldırılarından endişe duymaktadır. Şirket, meşru kullanıcılar üzerinde en az etkiyi yaratacak şekilde, yasa dışı gelen talepleri engellemelidir. Bir çözüm mimarı ne tavsiye etmelidir?

A. Amazon Inspector'ı dağıtın ve ALB ile ilişkilendirin.

B. AWS WAF'ı dağıtın, ALB ile ilişkilendirin ve bir hız sınırlama kuralı yapılandırın.

C. Gelen trafiği engellemek için ALB ile ilişkili ağ ACL'lerine kurallar dağıtın.

D. Amazon GuardDuty'yi dağıtın ve GuardDuty'yi yapılandırırken hız sınırlayıcı korumayı etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS WAF'ı dağıtın, ALB ile ilişkilendirin ve hız sınırlama kuralı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #438

Bir şirket muhasebe verilerini harici bir denetçiyle paylaşmak istiyor. Veriler, özel bir alt ağda bulunan bir Amazon RDS DB örneğinde depolanır. Denetçinin kendi AWS hesabı vardır ve veritabanının kendi kopyasına ihtiyacı vardır. Şirketin veritabanını denetçiyle paylaşmanın EN güvenli yolu nedir?

A. Veritabanının okuma kopyasını oluşturun. Denetleyici erişimine izin vermek için IAM standart veritabanı kimlik doğrulamasını yapılandırın.

B. Veritabanı içeriklerini metin dosyalarına aktarın. Dosyaları bir Amazon S3 klasöründe saklayın. Denetçi için yeni bir IAM kullanıcısı oluşturun. Kullanıcıya S3 klasörüne erişim izni verin.

C. Veritabanının anlık görüntüsünü bir Amazon S3 klasörüne kopyalayın. Bir IAM kullanıcısı oluşturun. S3 klasöründeki nesneye erişim izni vermek için kullanıcının anahtarlarını denetçiyle paylaşın.

D. Veritabanının şifrelenmiş bir anlık görüntüsünü oluşturun. Anlık görüntüyü denetçiyle paylaşın. AWS Key Management Service (AWS KMS) şifreleme anahtarına erişime izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanının şifrelenmiş bir anlık görüntüsünü oluşturun. Anlık görüntüyü denetçiyle paylaşın. AWS Key Management Service (AWS KMS) şifreleme anahtarına erişime izin verin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #439

Bir çözüm mimarı, küçük bir IP adresi aralığına sahip bir VPC'yi yapılandırdı. VPC'de bulunan Amazon EC2 bulut sunucularının sayısı artıyor ve gelecekteki iş yükleri için yeterli sayıda IP adresi yok. Hangi çözüm bu sorunu EN AZ operasyonel ek yük ile çözer?

A. IP adreslerinin sayısını artırmak ve VPC'de ek alt ağlar oluşturmak için ek bir IPv4 CIDR bloğu ekleyin. Yeni CIDR'yi kullanarak yeni alt ağlarda yeni kaynaklar oluşturun.

B. Ek alt ağlara sahip ikinci bir VPC oluşturun. İkinci VPC'yi ilk VPC'ye bağlamak için bir eşleme bağlantısı kullanın Rotaları güncelleyin ve ikinci VPC'nin alt ağlarında yeni kaynaklar oluşturun.

C. Bir geçiş ağ geçidi eklemek ve ikinci bir VPC'yi ilk VPC'ye bağlamak için AWS Transit Gateway'i kullanın. Geçiş ağ geçidinin ve VPC'lerin rotalarını güncelleyin. İkinci VPC'nin alt ağlarında yeni kaynaklar oluşturun.

D. İkinci bir VPC oluşturun. Amazon EC2'de VPN tarafından barındırılan bir çözüm ve sanal bir özel ağ geçidi kullanarak, ilk VPC ile ikinci VPC arasında Siteden Siteye VPN bağlantısı oluşturun. VPC'ler arasındaki rotayı VPN üzerinden trafiğe güncelleyin. İkinci VPC'nin alt ağlarında yeni kaynaklar oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** IP adreslerinin sayısını artırmak ve VPC'de ek alt ağlar oluşturmak için ek bir IPv4 CIDR bloğu ekleyin. Yeni CIDR'yi kullanarak yeni alt ağlarda yeni kaynaklar oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru #440

Bir şirket, uygulama testi sırasında MySQL Veritabanı bulut sunucusu için Amazon RDS'yi kullandı. Bir çözüm mimarı, test döngüsünün sonunda veritabanı bulut sunucusunu sonlandırmadan önce iki yedek oluşturdu. Çözüm mimarı, veritabanı dökümü oluşturmak için mysqldump yardımcı programını kullanarak ilk yedeği oluşturdu. Çözüm mimarı, RDS sonlandırmasında son veritabanı anlık görüntüsü seçeneğini etkinleştirerek ikinci yedeği oluşturdu. Şirket şimdi yeni bir test döngüsü planlıyor ve en son yedeklemeden yeni bir veritabanı bulut sunucusu oluşturmak istiyor. Şirket, veritabanı örneğini barındırmak için Amazon Aurora'nın MySQL uyumlu bir sürümünü seçti. Yeni veritabanı örneğini hangi çözümler oluşturacak? (İki tane seçin.)

A. RDS anlık görüntüsünü doğrudan Aurora'ya aktarın.

B. RDS anlık görüntüsünü Amazon S3'e yükleyin. Ardından RDS anlık görüntüsünü Aurora'ya aktarın.

C. Veritabanı dökümünü Amazon S3'e yükleyin. Daha sonra veritabanı dökümünü Aurora'ya aktarın.

D. RDS anlık görüntüsünü Aurora'ya aktarmak için AWS Database Migration Service'i (AWS DMS) kullanın.

E. Veritabanı dökümünü Amazon S3'e yükleyin. Daha sonra veritabanı dökümünü Aurora'ya aktarmak için AWS Database Migration Service'i (AWS DMS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** RDS anlık görüntüsünü doğrudan Aurora'ya aktarın. Veritabanı dökümünü Amazon S3'e yükleyin. Daha sonra veritabanı dökümünü Aurora'ya aktarın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #441

Bir şirket, Application Load Balancer'ın arkasında Amazon Linux Amazon EC2 bulut sunucularında çok katmanlı bir web uygulaması barındırıyor. Örnekler, birden fazla Erişilebilirlik Alanında bir Otomatik Ölçeklendirme grubunda çalışır. Şirket, uygulamanın son kullanıcıları yüksek hacimli statik web içeriğine eriştiğinde Otomatik Ölçeklendirme grubunun daha fazla İsteğe Bağlı Bulut Sunucusu başlattığını gözlemliyor. Şirket maliyeti optimize etmek istiyor. Bir çözüm mimarı, uygulamayı EN uygun maliyetle yeniden tasarlamak için ne yapmalıdır?

A. Otomatik Ölçeklendirme grubunu, İsteğe Bağlı Bulut Sunucuları yerine Rezerve Bulut Sunucularını kullanacak şekilde güncelleyin.

B. İsteğe Bağlı Bulut Sunucuları yerine Spot Bulut Sunucularını başlatarak Otomatik Ölçeklendirme grubunu ölçeklenecek şekilde güncelleyin.

C. Statik web içeriklerini bir Amazon S3 klasöründen barındırmak için bir Amazon CloudFront dağıtımı oluşturun.

D. Statik web sitesi içeriklerini barındırmak için Amazon API Gateway API'sinin arkasında bir AWS Lambda işlevi oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Statik web içeriklerini bir Amazon S3 klasöründen barındırmak için bir Amazon CloudFront dağıtımı oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru #442

Bir şirket, birden fazla AWS hesabında birkaç petabayt veri depolar. Şirket, veri gölünü yönetmek için AWS Lake Formation'ı kullanıyor. Şirketin veri bilimi ekibi, hesaplarındaki seçilmiş verileri analitik amaçlarla şirketin mühendislik ekibiyle güvenli bir şekilde paylaşmak istiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Gerekli verileri ortak bir hesaba kopyalayın. Bu hesapta bir IAM erişim rolü oluşturun. Mühendislik ekibi hesaplarındaki kullanıcıları güvenilir varlıklar olarak içeren bir izin ilkesi belirterek erişim verin.

B. Gerekli mühendislik ekibi kullanıcılarının verilere erişmesine izin vermek için, verilerin depolandığı her hesapta Göl Oluşumu izinleri Ver komutunu kullanın.

C. Gerekli verileri gerekli mühendislik ekibi hesaplarına özel olarak yayınlamak için AWS Data Exchange'i kullanın.

D. Mühendislik ekibi hesaplarına gerekli veriler için hesaplar arası izinleri yetkilendirmek ve vermek için Lake Formation etiket tabanlı erişim kontrolünü kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mühendislik ekibi hesaplarına gerekli veriler için hesaplar arası izinleri yetkilendirmek ve vermek için Lake Formation etiket tabanlı erişim kontrolünü kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #443

Bir şirket AWS'de ölçeklenebilir bir web uygulaması barındırmak istiyor. Uygulamaya dünyanın farklı coğrafi bölgelerinden kullanıcılar erişebilecek. Uygulama kullanıcıları, boyutu gigabaytlara kadar olan benzersiz verileri indirip yükleyebilecek. Geliştirme ekibi, yükleme ve indirme gecikmesini en aza indirecek ve performansı en üst düzeye çıkaracak uygun maliyetli bir çözüm istiyor. Bir çözüm mimarı bunu başarmak için ne yapmalıdır?

A. Uygulamayı barındırmak için Amazon S3'ü Transfer Hızlandırma ile birlikte kullanın.

B. Uygulamayı barındırmak için Amazon S3'ü CacheControl üstbilgileriyle birlikte kullanın.

C. Uygulamayı barındırmak için Otomatik Ölçeklendirme özellikli Amazon EC2'yi ve Amazon CloudFront'u kullanın.

D. Uygulamayı barındırmak için Amazon EC2'yi Otomatik Ölçeklendirme ve Amazon ElastiCache ile kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı barındırmak için Amazon S3'ü Transfer Hızlandırma ile kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #444

Bir şirket, uygulaması için güvenilir bir mimari tasarlamak üzere bir çözüm mimarı tuttu. Uygulama, bir Amazon RDS DB bulut sunucusundan ve web sunucularını çalıştıran, manuel olarak sağlanan iki Amazon EC2 bulut sunucusundan oluşur. EC2 bulut sunucuları tek bir Erişilebilirlik Alanında bulunur. Bir çalışan yakın zamanda veritabanı bulut sunucusunu sildi ve bunun sonucunda uygulama 24 saat boyunca kullanılamadı. Şirket, ortamının genel güvenilirliğiyle ilgilenmektedir. Uygulamanın altyapısının güvenilirliğini en üst düzeye çıkarmak için çözüm mimarı ne yapmalıdır?

A. Bir EC2 örneğini silin ve diğer EC2 örneğinde sonlandırma korumasını etkinleştirin. Veritabanı bulut sunucusunu Multi-AZ olacak şekilde güncelleyin ve silme korumasını etkinleştirin.

B. Veritabanı bulut sunucusunu Multi-AZ olacak şekilde güncelleyin ve silme korumasını etkinleştirin. EC2 bulut sunucularını bir Application Load Balancer'ın arkasına yerleştirin ve bunları birden fazla Erişilebilirlik Alanında bir EC2 Otomatik Ölçeklendirme grubunda çalıştırın.

C. Amazon API Gateway ve AWS Lambda işleviyle birlikte ek bir veritabanı bulut sunucusu oluşturun. Uygulamayı API Ağ Geçidi aracılığıyla Lambda işlevini çağıracak şekilde yapılandırın. Lambda işlevinin verileri iki veritabanı örneğine yazmasını sağlayın.

D. EC2 bulut sunucularını, birden çok Erişilebilirlik Alanında bulunan birden çok alt ağa sahip bir EC2 Otomatik Ölçeklendirme grubuna yerleştirin. İsteğe Bağlı Bulut Sunucuları yerine Spot Bulut Sunucularını kullanın. Bulut sunucularının durumunu izlemek için Amazon CloudWatch alarmlarını ayarlayın Veritabanı bulut sunucusunu Multi-AZ olacak şekilde güncelleyin ve silme korumasını etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanı bulut sunucusunu Multi-AZ olacak şekilde güncelleyin ve silme korumasını etkinleştirin. EC2 bulut sunucularını bir Application Load Balancer'ın arkasına yerleştirin ve bunları birden fazla Erişilebilirlik Alanında bir EC2 Otomatik Ölçeklendirme grubunda çalıştırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru #445

Bir şirket, kurumsal veri merkezindeki büyük bir ağa bağlı depolama (NAS) sisteminde 700 terabayt veri depoluyor. Şirket, 10 Gbps AWS Direct Connect bağlantısına sahip hibrit bir ortama sahiptir. Bir düzenleyici tarafından yapılan denetimin ardından şirketin verileri buluta taşımak için 90 günü var. Şirketin verileri verimli ve kesintisiz bir şekilde taşıması gerekiyor. Şirketin aktarım penceresi sırasında yine de verilere erişebilmesi ve verileri güncelleyebilmesi gerekiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Kurumsal veri merkezinde bir AWS DataSync aracısı oluşturun. Veri aktarım görevi oluşturma Amazon S3 klasörüne aktarımı başlatın.

B. Verileri AWS Snowball Edge Storage Optimized cihazlarına yedekleyin. Cihazları bir AWS veri merkezine gönderin. Şirket içi dosya sistemine hedef bir Amazon S3 klasörü ekleyin.

C. Verileri doğrudan yerel depolama alanından Direct Connect bağlantısı üzerinden belirlenmiş bir Amazon S3 klasörüne kopyalamak için rsync'i kullanın.

D. Verileri kasetlere yedekleyin. Bantları bir AWS veri merkezine gönderin. Şirket içi dosya sistemine hedef bir Amazon S3 klasörü ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kurumsal veri merkezinde bir AWS DataSync aracısı oluşturun. Veri aktarım görevi oluşturma Amazon S3 klasörüne aktarımı başlatın.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #446

Bir şirket, verileri PDF formatında bir Amazon S3 klasöründe saklıyor. Şirketin, tüm yeni ve mevcut verileri Amazon S3'te 7 yıl boyunca saklama yönündeki yasal gerekliliğe uyması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. S3 grubu için S3 Sürüm Oluşturma özelliğini açın. Verileri 7 yıl sonra silmek için S3 Lifecycle'ı yapılandırın. Tüm S3 nesneleri için çok faktörlü kimlik doğrulama (MFA) silme işlemini yapılandırın.

B. S3 grubu için yönetim saklama moduyla S3 Object Lock'u açın. Saklama süresini 7 yıl sonra sona erecek şekilde ayarlayın. Mevcut verileri uyumlu hale getirmek için mevcut tüm nesneleri yeniden kopyalayın.

C. S3 klasörü için uyumluluk saklama moduyla S3 Nesne Kilidini açın. Saklama süresini 7 yıl sonra sona erecek şekilde ayarlayın. Mevcut verileri uyumlu hale getirmek için mevcut tüm nesneleri yeniden kopyalayın.

D. S3 grubu için uyumluluk saklama moduyla S3 Nesne Kilidini açın. Saklama süresini 7 yıl sonra sona erecek şekilde ayarlayın. Mevcut verileri uyumlu hale getirmek için S3 Batch Operations'ı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** S3 grubu için uyumluluk saklama moduyla S3 Object Lock'u açın. Saklama süresini 7 yıl sonra sona erecek şekilde ayarlayın. Mevcut verileri uyumlu hale getirmek için S3 Batch Operations'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.

---

---

Soru #447

Bir şirketin, Amazon API Gateway tarafından çağrılan AWS Lambda işlevleri üzerinde çalışan, durum bilgisi olmayan bir web uygulaması var. Şirket, Bölgesel yük devretme yetenekleri sağlamak için uygulamayı birden fazla AWS Bölgesinde dağıtmak istiyor. Trafiği birden çok Bölgeye yönlendirmek için bir çözüm mimarı ne yapmalıdır?

A. Her Bölge için Amazon Route 53 durum kontrolleri oluşturun. Aktif-aktif yük devretme yapılandırmasını kullanın.

B. Her Bölge için bir kaynak içeren bir Amazon CloudFront dağıtımı oluşturun. Trafiği yönlendirmek için CloudFront durum kontrollerini kullanın.

C. Bir transit ağ geçidi oluşturun. Geçiş ağ geçidini her Bölgedeki API Ağ Geçidi uç noktasına ekleyin. İstekleri yönlendirmek için transit ağ geçidini yapılandırın.

D. Birincil Bölgede bir Application Load Balancer oluşturun. Hedef grubu, her Bölgedeki API Ağ Geçidi uç noktası ana bilgisayar adlarını işaret edecek şekilde ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her Bölge için Amazon Route 53 durum kontrolleri oluşturun. Aktif-aktif yük devretme yapılandırmasını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #448

Bir şirketin Yönetim ve Üretim adında iki VPC'si vardır. Yönetim VPC'si, veri merkezindeki tek bir cihaza bağlanmak için müşteri ağ geçidi aracılığıyla VPN'leri kullanır. Üretim VPC'si, iki bağlı AWS Direct Connect bağlantısına sahip sanal bir özel ağ geçidi kullanır. Yönetim ve Üretim VPC'lerinin her ikisi de uygulamalar arasında iletişime izin vermek için tek bir VPC eşleme bağlantısı kullanır. Bir çözüm mimarı bu mimarideki herhangi bir başarısızlık noktasını azaltmak için ne yapmalıdır?

A. Yönetim ve Üretim VPC'leri arasına bir dizi VPN ekleyin.

B. İkinci bir sanal özel ağ geçidi ekleyin ve bunu Yönetim VPC'sine ekleyin.

C. İkinci bir müşteri ağ geçidi cihazından Yönetim VPC'sine ikinci bir VPN kümesi ekleyin.

D. Yönetim VPC'si ile Üretim VPC'si arasına ikinci bir VPC eşleme bağlantısı ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İkinci bir müşteri ağ geçidi cihazından Yönetim VPC'sine ikinci bir VPN kümesi ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #449

Bir şirket, uygulamasını Oracle veritabanı üzerinde çalıştırır. Şirket, veritabanı, yedekleme yönetimi ve veri merkezi bakımına yönelik kaynakların sınırlı olması nedeniyle hızla AWS'ye geçmeyi planlıyor. Uygulama, ayrıcalıklı erişim gerektiren üçüncü taraf veritabanı özelliklerini kullanır. Hangi çözüm şirketin veritabanını AWS'ye EN uygun maliyetle taşımasına yardımcı olacak?

A. Veritabanını Amazon RDS for Oracle'a taşıyın. Üçüncü taraf özelliklerini bulut hizmetleriyle değiştirin.

B. Veritabanını Amazon RDS Custom for Oracle'a taşıyın. Üçüncü taraf özelliklerini desteklemek için veritabanı ayarlarını özelleştirin.

C. Veritabanını Oracle için Amazon EC2 Amazon Machine Image'a (AMI) taşıyın. Üçüncü taraf özelliklerini desteklemek için veritabanı ayarlarını özelleştirin.

D. Oracle APEX'e bağımlılığı ortadan kaldırmak için uygulama kodunu yeniden yazarak veritabanını Amazon RDS for PostgreSQL'e geçirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanını Amazon RDS Custom for Oracle'a taşıyın. Üçüncü taraf özelliklerini desteklemek için veritabanı ayarlarını özelleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #450

Bir şirketin tek bir sunucuda bulunan üç katmanlı bir web uygulaması vardır. Şirket, uygulamayı AWS Cloud'a taşımak istiyor. Şirket ayrıca uygulamanın AWS Well-Architected Framework ile uyumlu olmasını ve güvenlik, ölçeklenebilirlik ve dayanıklılık açısından AWS tarafından önerilen en iyi uygulamalarla tutarlı olmasını istiyor. Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (Üç tanesini seçin.)

A. Uygulamanın mevcut mimarisiyle iki Erişilebilirlik Alanında bir VPC oluşturun. Uygulamayı, EC2 Otomatik Ölçeklendirme gruplarıyla her Erişilebilirlik Alanındaki özel bir alt ağdaki bir Amazon EC2 örneğinde mevcut mimariyle barındırın. EC2 örneğini güvenlik grupları ve ağ erişim kontrol listeleri (ağ ACL'leri) ile koruyun.

B. Veritabanı katmanına erişimi kontrol etmek için güvenlik gruplarını ve ağ erişim kontrol listelerini (ağ ACL'leri) ayarlayın. Özel bir alt ağda tek bir Amazon RDS veritabanı kurun.

C. İki Erişilebilirlik Alanında bir VPC oluşturun. Uygulamayı web katmanını, uygulama katmanını ve veritabanı katmanını barındıracak şekilde yeniden düzenleyin. Web katmanı ve uygulama katmanı için Otomatik Ölçeklendirme gruplarıyla her katmanı kendi özel alt ağında barındırın.

D. Tek bir Amazon RDS veritabanı kullanın. Yalnızca uygulama katmanı güvenlik grubundan veritabanı erişimine izin verin.

E. Web katmanının önünde Elastik Yük Dengeleyicileri kullanın. Her katmanın güvenlik gruplarına referanslar içeren güvenlik gruplarını kullanarak erişimi kontrol edin. F. Özel alt ağlarda Amazon RDS veritabanı Multi-AZ kümesi dağıtımını kullanın. Yalnızca uygulama katmanı güvenlik gruplarından veritabanı erişimine izin verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E,`
> - **Önerilen Çözüm:** İki Erişilebilirlik Alanında bir VPC oluşturun. Uygulamayı web katmanını, uygulama katmanını ve veritabanı katmanını barındıracak şekilde yeniden düzenleyin. Web katmanı ve uygulama katmanı için Otomatik Ölçeklendirme gruplarıyla her katmanı kendi özel alt ağında barındırın. Web katmanının önünde Elastik Yük Dengeleyicileri kullanın. Her katmanın güvenlik gruplarına referanslar içeren güvenlik gruplarını kullanarak erişimi kontrol edin. Özel alt ağlarda Amazon RDS veritabanı Multi-AZ kümesi dağıtımını kullanın. Yalnızca uygulama katmanı güvenlik gruplarından veritabanı erişimine izin verin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru #451

Bir şirket, uygulamalarını ve veritabanlarını AWS Cloud'a taşıyor. Şirket, Amazon Elastic Container Service (Amazon ECS), AWS Direct Connect ve Amazon RDS'yi kullanacak. Hangi faaliyetler şirketin operasyonel ekibi tarafından yönetilecek? (Üç tanesini seçin.)

A. Amazon RDS altyapı katmanının, işletim sisteminin ve platformlarının yönetimi

B. Amazon RDS Veritabanı bulut sunucusunun oluşturulması ve planlı bakım aralığının yapılandırılması

C. İzleme, yama yönetimi, günlük yönetimi ve ana bilgisayara izinsiz giriş tespiti için Amazon ECS'de ek yazılım bileşenlerinin yapılandırılması

D. Amazon RDS için tüm küçük ve ana veritabanı sürümlerine yönelik yamaların kurulumu

E. Veri merkezindeki Amazon RDS altyapısının fiziksel güvenliğinin sağlanması F. Direct Connect aracılığıyla aktarım sırasında hareket eden verilerin şifrelenmesi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C,`
> - **Önerilen Çözüm:** Amazon RDS DB bulut sunucusunun oluşturulması ve planlı bakım penceresinin yapılandırılması İzleme, yama yönetimi, günlük yönetimi ve ana bilgisayara izinsiz giriş tespiti için Amazon ECS'de ek yazılım bileşenlerinin yapılandırılması Direct Connect aracılığıyla aktarım sırasında hareket eden verilerin şifrelenmesi
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #452

Bir şirket, Amazon EC2 örneğinde Java tabanlı bir iş çalıştırıyor. İş her saat başı çalıştırılır ve çalıştırılması 10 saniye sürer. İş, zamanlanmış bir aralıkta çalışır ve 1 GB bellek tüketir. Örneğin CPU kullanımı, işin mevcut maksimum CPU'yu kullandığı kısa dalgalanmalar dışında düşüktür. Şirket işi yürütmek için maliyetleri optimize etmek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. İşi kapsayıcıya almak için AWS App2Container'ı (A2C) kullanın. İşi, 0,5 sanal CPU (vCPU) ve 1 GB belleğe sahip AWS Fargate'te Amazon Elastic Container Service (Amazon ECS) görevi olarak çalıştırın.

B. Kodu, 1 GB belleğe sahip bir AWS Lambda işlevine kopyalayın. Kodu her saat başı çalıştırmak için bir Amazon EventBridge planlanmış kuralı oluşturun.

C. İşi kapsayıcıya almak için AWS App2Container'ı (A2C) kullanın. Kapsayıcıyı mevcut Amazon Machine Image'a (AMI) yükleyin. Görev tamamlandığında zamanlamanın kapsayıcıyı durdurduğundan emin olun.

D. Mevcut planı, iş tamamlandığında EC2 örneğini durduracak ve bir sonraki iş başladığında EC2 örneğini yeniden başlatacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kodu, 1 GB belleğe sahip bir AWS Lambda işlevine kopyalayın. Kodu her saat başı çalıştırmak için bir Amazon EventBridge planlanmış kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #453

Bir şirket, Amazon EC2 verileri ve birden fazla Amazon S3 klasörü için bir yedekleme stratejisi uygulamak istiyor. Mevzuat gereklilikleri nedeniyle şirketin yedekleme dosyalarını belirli bir süre boyunca saklaması gerekir. Şirket, saklama süresi boyunca dosyalar üzerinde değişiklik yapmamalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A. Yönetişim modunda kasa kilidine sahip bir yedekleme kasası oluşturmak için AWS Backup'ı kullanın. Gerekli yedekleme planını oluşturun.

B. Gerekli otomatik anlık yedek politikasını oluşturmak için Amazon Data Lifecycle Manager'ı kullanın.

C. Yedeklemeyi oluşturmak için Amazon S3 File Gateway'i kullanın. Uygun S3 Yaşam Döngüsü yönetimini yapılandırın.

D. Uyumluluk modunda kasa kilidine sahip bir yedekleme kasası oluşturmak için AWS Backup'ı kullanın. Gerekli yedekleme planını oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uyumluluk modunda kasa kilidine sahip bir yedekleme kasası oluşturmak için AWS Backup'ı kullanın. Gerekli yedekleme planını oluşturun.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #454

Bir şirketin birden fazla AWS Bölgesinde ve hesabında kaynakları vardır. Yeni işe alınan bir çözüm mimarı, önceki bir çalışanın kaynak envanteri hakkında ayrıntılı bilgi vermediğini keşfeder. Çözüm mimarının, tüm hesaplardaki çeşitli iş yüklerinin ilişki ayrıntılarını oluşturması ve haritalandırması gerekir. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Ayrıntılı görünüm raporundan bir harita görünümü oluşturmak için AWS Systems Manager Envanterini kullanın.

B. İş yükü ayrıntılarını toplamak için AWS Step Functions'ı kullanın. İş yüklerinin mimari diyagramlarını manuel olarak oluşturun.

C. İş yüklerinin mimari diyagramlarını oluşturmak için AWS'de Workload Discovery'yi kullanın.

D. İş yükü ayrıntılarını görüntülemek için AWS X-Ray'i kullanın. İlişkilerle mimari diyagramlar oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İş yüklerinin mimari diyagramlarını oluşturmak için AWS'de Workload Discovery'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Step Functions Dağıtık İş Akışı Düzenleme:** Mikroservisleri, Lambda fonksiyonlarını ve uzun süreli toplu işleri otomatik yeniden deneme ve durum takibi ile koordine eden görsel iş akışı servisidir.

---

---

Soru #455

Bir şirket AWS Organizasyonlarını kullanıyor. Şirket, AWS hesaplarından bazılarını farklı bütçelerle işletmek istiyor. Şirket, belirli bir dönemde tahsis edilen bütçe eşiğine ulaşıldığında uyarı almak ve AWS hesaplarına ek kaynak sağlanmasını otomatik olarak engellemek istiyor. Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (Üç tanesini seçin.)

A. Bütçe oluşturmak için AWS Budgets'ı kullanın. Bütçe tutarını gerekli AWS hesaplarının Maliyet ve Kullanım Raporları bölümünde ayarlayın.

B. Bütçe oluşturmak için AWS Budgets'ı kullanın. Bütçe tutarını gerekli AWS hesaplarının Faturalandırma kontrol panelleri altında ayarlayın.

C. Gerekli izinlerle bütçe işlemlerini yürütmek üzere AWS Budgets için bir IAM kullanıcısı oluşturun.

D. AWS Budgets'ın bütçe işlemlerini gerekli izinlerle yürütmesi için bir IAM rolü oluşturun.

E. Her hesap bütçe eşiğine ulaştığında şirketi bilgilendirmek için bir uyarı ekleyin. Ek kaynakların sağlanmasını önlemek için uygun yapılandırma kuralıyla oluşturulan IAM kimliğini seçen bir bütçe eylemi ekleyin. F. Her hesap bütçe eşiğine ulaştığında şirketi bilgilendirmek için bir uyarı ekleyin. Ek kaynakların sağlanmasını önlemek için uygun hizmet kontrol politikasıyla (SCP) oluşturulan IAM kimliğini seçen bir bütçe eylemi ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D,`
> - **Önerilen Çözüm:** Bütçe oluşturmak için AWS Budgets'ı kullanın. Bütçe tutarını gerekli AWS hesaplarının Faturalandırma kontrol panelleri altında ayarlayın. AWS Budgets'ın gerekli izinlerle bütçe işlemlerini yürütmesi için bir IAM rolü oluşturun. Her hesap bütçe eşiğine ulaştığında şirketi bilgilendirmek için bir uyarı ekleyin. Ek kaynakların sağlanmasını önlemek için uygun hizmet kontrol politikasıyla (SCP) oluşturulan IAM kimliğini seçen bir bütçe eylemi ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #456

Bir şirket, bir AWS Bölgesindeki Amazon EC2 bulut sunucularında uygulamalar çalıştırıyor. Şirket, EC2 bulut sunucularını ikinci bir Bölgeye yedeklemek istiyor. Şirket ayrıca ikinci Bölgede EC2 kaynaklarını tedarik etmek ve EC2 bulut sunucularını tek bir AWS hesabından merkezi olarak yönetmek istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İkinci Bölgede benzer sayıda EC2 örneğine sahip bir olağanüstü durum kurtarma (DR) planı oluşturun. Veri çoğaltmayı yapılandırın.

B. EC2 bulut sunucularının anlık Amazon Elastic Block Store (Amazon EBS) anlık yedeklerini oluşturun. Anlık görüntüleri periyodik olarak ikinci Bölgeye kopyalayın.

C. AWS Backup'ı kullanarak bir yedekleme planı oluşturun. EC2 bulut sunucuları için Bölgeler arası yedeklemeyi ikinci Bölgeye yapılandırın.

D. İkinci Bölgede benzer sayıda EC2 bulut sunucusunu dağıtın. Verileri kaynak Bölgeden ikinci Bölgeye aktarmak için AWS DataSync'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Backup'ı kullanarak bir yedekleme planı oluşturun. EC2 bulut sunucuları için Bölgeler arası yedeklemeyi ikinci Bölgeye yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #457

AWS kullanan bir şirket, verileri bir ürün üreticisine aktarmak için bir uygulama geliştiriyor. Şirketin kendi kimlik sağlayıcısı (IDP) vardır. Şirket, kullanıcılar uygulamayı veri aktarmak için kullanırken IdP'nin uygulama kullanıcılarının kimliğini doğrulamasını istiyor. Şirketin Uygulanabilirlik Beyanı 2 (AS2) protokolünü kullanması gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Verileri aktarmak için AWS DataSync'i kullanın. IdP kimlik doğrulaması için bir AWS Lambda işlevi oluşturun.

B. Verileri aktarmak için Amazon AppFlow akışlarını kullanın. IdP kimlik doğrulaması için bir Amazon Elastic Container Service (Amazon ECS) görevi oluşturun.

C. Verileri aktarmak için AWS Transfer Family'yi kullanın. IdP kimlik doğrulaması için bir AWS Lambda işlevi oluşturun.

D. Verileri aktarmak için AWS Storage Gateway'i kullanın. IdP kimlik doğrulaması için bir Amazon Cognito kimlik havuzu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri aktarmak için AWS Transfer Family'yi kullanın. IdP kimlik doğrulaması için bir AWS Lambda işlevi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #458

Bir çözüm mimarı, nakit geri ödeme hizmeti için Amazon API Gateway'de bir RESTAPI tasarlıyor. Uygulama, hesaplama kaynakları için 1 GB bellek ve 2 GB depolama alanı gerektirir. Uygulama, verilerin ilişkisel formatta olmasını gerektirecektir. Hangi ek AWS hizmetleri kombinasyonu bu gereksinimleri EN AZ yönetim çabasıyla karşılayacaktır? (İki tane seçin.)

A. Amazon EC2

B. AWS Lambda

C. Amazon RDS

D. Amazon DynamoDB

E. Amazon Elastic Kubernetes Hizmetleri (Amazon EKS)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** AWS Lambda Amazon RDS
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #459

Bir şirket, birden fazla AWS hesabındaki iş yüklerini çalıştırmak için AWS Organizasyonlarını kullanıyor. Etiketleme politikası, şirket etiketler oluşturduğunda AWS kaynaklarına departman etiketleri ekler. Bir muhasebe ekibinin Amazon EC2 tüketimine ilişkin harcamaları belirlemesi gerekir. Muhasebe ekibi, AWS hesabına bakılmaksızın maliyetlerden hangi departmanların sorumlu olduğunu belirlemelidir. Muhasebe ekibinin, kuruluş içindeki tüm AWS hesapları için AWS Cost Explorer'a erişimi vardır ve Cost Explorer'daki tüm raporlara erişmesi gerekir. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılıyor?

A. Kuruluşun yönetim hesabı faturalandırma konsolundan, departman adlı kullanıcı tanımlı bir maliyet tahsis etiketini etkinleştirin. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun ve EC2'ye göre filtreleyin.

B. Kuruluşun yönetim hesabı faturalandırma konsolundan, departman adlı AWS tanımlı bir maliyet tahsis etiketini etkinleştirin. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun ve EC2'ye göre filtreleyin.

C. Kuruluşun üye hesabı faturalandırma konsolundan, departman adlı kullanıcı tanımlı bir maliyet tahsis etiketini etkinleştirin. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun ve EC2'ye göre filtreleyin.

D. Kuruluşun üye hesabı faturalandırma konsolundan, departman adlı AWS tanımlı bir maliyet tahsis etiketini etkinleştirin. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun ve EC2'ye göre filtreleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kuruluş yönetimi hesabı faturalandırma konsolundan, departman adlı kullanıcı tanımlı bir maliyet tahsis etiketini etkinleştirin. Maliyet Gezgini'nde etiket adına göre gruplandırarak bir maliyet raporu oluşturun ve EC2'ye göre filtreleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #460

Bir şirket, hizmet olarak yazılım (SaaS) uygulaması Salesforce hesabı ile Amazon S3 arasında güvenli bir şekilde veri alışverişi yapmak istiyor. Şirketin, kullanımda olmayan verileri AWS Key Management Service (AWS KMS) müşteri tarafından yönetilen anahtarları (CMK'ler) kullanarak şifrelemesi gerekir. Şirketin ayrıca aktarım sırasında verileri şifrelemesi gerekir. Şirket, Salesforce hesabı için API erişimini etkinleştirdi.

A. Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarmak için AWS Lambda işlevleri oluşturun.

B. Bir AWS Step Functions iş akışı oluşturun. Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarma görevini tanımlayın.

C. Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarmak için Amazon AppFlow akışları oluşturun.

D. Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarmak için Salesforce'a yönelik özel bir bağlayıcı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri Salesforce'tan Amazon S3'e güvenli bir şekilde aktarmak için Amazon AppFlow akışları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #461

Bir şirket, tek bir AWS Bölgesinde mobil oyun uygulaması geliştiriyor. Uygulama, bir Otomatik Ölçeklendirme grubundaki birden fazla Amazon EC2 bulut sunucusunda çalışır. Şirket, uygulama verilerini Amazon DynamoDB'de saklıyor. Uygulama, kullanıcılar ve sunucular arasında TCP trafiğini ve UDP trafiğini kullanarak iletişim kurar. Uygulama global olarak kullanılacak. Şirket, tüm kullanıcılar için mümkün olan en düşük gecikmeyi sağlamak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir hızlandırıcı oluşturmak için AWS Global Accelerator'ı kullanın. Global Accelerator entegrasyonunu kullanan ve TCP ve UDP bağlantı noktalarını dinleyen bir hızlandırıcı uç noktasının arkasında bir Application Load Balancer (ALB) oluşturun. Örnekleri ALB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin.

B. Bir hızlandırıcı oluşturmak için AWS Global Accelerator'ı kullanın. Global Accelerator entegrasyonunu kullanan ve TCP ve UDP bağlantı noktalarını dinleyen bir hızlandırıcı uç noktasının arkasında bir Ağ Yük Dengeleyici (NLB) oluşturun. Örnekleri NLB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin.

C. Bir Amazon CloudFront içerik dağıtım ağı (CDN) uç noktası oluşturun. Uç noktanın arkasında bir Ağ Yük Dengeleyicisi (NLB) oluşturun ve TCP ve UDP bağlantı noktalarını dinleyin. Örnekleri NLB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin. NLB'yi kaynak olarak kullanmak için CloudFront'u güncelleyin.

D. Bir Amazon CloudFront içerik dağıtım ağı (CDN) uç noktası oluşturun. Uç noktanın arkasında bir Uygulama Yük Dengeleyicisi (ALB) oluşturun ve TCP ve UDP bağlantı noktalarını dinleyin. Örnekleri ALB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin. ALB'yi kaynak olarak kullanmak için CloudFront'u güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir hızlandırıcı oluşturmak için AWS Global Accelerator'ı kullanın. Global Accelerator entegrasyonunu kullanan ve TCP ve UDP bağlantı noktalarını dinleyen bir hızlandırıcı uç noktasının arkasında bir Ağ Yük Dengeleyici (NLB) oluşturun. Örnekleri NLB'ye kaydetmek için Otomatik Ölçeklendirme grubunu güncelleyin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #462

Bir şirketin müşteri siparişlerini işleyen bir uygulaması var. Şirket, uygulamayı, siparişleri bir Amazon Aurora veritabanına kaydeden bir Amazon EC2 örneğinde barındırıyor. Bazen trafiğin yoğun olduğu durumlarda iş yükü siparişleri yeterince hızlı işlemez. Bir çözüm mimarı, siparişleri güvenilir bir şekilde veritabanına mümkün olduğunca hızlı bir şekilde yazmak için ne yapmalıdır?

A. Trafik yüksek olduğunda EC2 bulut sunucusunun bulut sunucusu boyutunu artırın. Siparişleri Amazon Simple Notification Service'a (Amazon SNS) yazın. Veritabanı uç noktasını SNS konusuna abone olun.

B. Siparişleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın. SQS kuyruğundan okumak ve siparişleri veritabanına işlemek için Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki EC2 bulut sunucularını kullanın.

C. Siparişleri Amazon Simple Notification Service'e (Amazon SNS) yazın. Veritabanı uç noktasını SNS konusuna abone olun. SNS konusundan okumak için Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki EC2 örneklerini kullanın.

D. EC2 bulut sunucusu CPU eşiği sınırlarına ulaştığında siparişleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın. SQS kuyruğundan okumak ve siparişleri veritabanına işlemek için Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki EC2 bulut sunucularının planlı ölçeklendirmesini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Siparişleri bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna yazın. SQS kuyruğundan okumak ve siparişleri veritabanına işlemek için Application Load Balancer'ın arkasındaki Otomatik Ölçeklendirme grubundaki EC2 bulut sunucularını kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru #463

Bir IoT şirketi, kullanıcının uykusu hakkında veri toplayacak sensörlere sahip bir yatak piyasaya sürüyor. Sensörler verileri bir Amazon S3 klasörüne gönderecek. Sensörler her yatak için her gece yaklaşık 2 MB veri topluyor. Şirketin her yatağa ait verileri işlemesi ve özetlemesi gerekiyor. Sonuçların mümkün olan en kısa sürede elde edilmesi gerekiyor. Veri işleme 1 GB bellek gerektirecek ve 30 saniye içinde tamamlanacaktır. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. AWS Glue'yu bir Scala işiyle kullanın

B. Amazon EMR'yi Apache Spark betiğiyle kullanma

C. AWS Lambda'yı Python betiğiyle kullanın

D. AWS Glue'yu bir PySpark işiyle kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Lambda'yı Python betiğiyle kullanma
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #464

Bir şirket, tüm siparişleri Amazon RDS for PostgreSQL Single-AZ Veritabanı örneğinde saklayan bir çevrimiçi alışveriş uygulamasına ev sahipliği yapıyor. Yönetim, tek hata noktalarını ortadan kaldırmak istiyor ve bir çözüm mimarından, uygulama kodunda herhangi bir değişiklik gerektirmeden veritabanı kesinti süresini en aza indirecek bir yaklaşım önermesini istedi. Hangi çözüm bu gereksinimleri karşılıyor?

A. Veritabanı örneğini değiştirerek ve Multi-AZ seçeneğini belirterek mevcut veritabanı örneğini Multi-AZ dağıtımına dönüştürün.

B. Yeni bir RDS Multi-AZ dağıtımı oluşturun. Mevcut RDS örneğinin anlık görüntüsünü alın ve anlık görüntüyle yeni Multi-AZ dağıtımını geri yükleyin.

C. Başka bir Erişilebilirlik Alanında PostgreSQL veritabanının salt okunur bir kopyasını oluşturun. İstekleri veritabanları arasında dağıtmak için Amazon Route 53 ağırlıklı kayıt kümelerini kullanın.

D. RDS for PostgreSQL veritabanını minimum iki grup boyutuna sahip bir Amazon EC2 Auto Scaling grubuna yerleştirin. İstekleri bulut sunucuları arasında dağıtmak için Amazon Route 53 ağırlıklı kayıt kümelerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanı örneğini değiştirerek ve Multi-AZ seçeneğini belirterek mevcut veritabanı örneğini Multi-AZ dağıtımına dönüştürün.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #465

Bir şirket müşteri taleplerini destekleyecek bir uygulama geliştiriyor. Şirket, uygulamayı aynı Erişilebilirlik Alanındaki birden fazla Amazon EC2 Nitro tabanlı bulut sunucusuna dağıtmak istiyor. Şirket ayrıca, daha yüksek uygulama kullanılabilirliği elde etmek için uygulamaya aynı anda birden fazla EC2 Nitro tabanlı örnekte birden fazla blok depolama birimine yazma yeteneği vermek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon Elastic Block Store (Amazon EBS) Multi-Attach ile Genel Amaçlı SSD (gp3) EBS birimlerini kullanın

B. Amazon Elastic Block Store (Amazon EBS) Multi-Attach ile Performansı Optimize Edilmiş HDD (st1) EBS birimlerini kullanın

C. Amazon Elastic Block Store (Amazon EBS) Multi-Attach ile Tedarik Edilen IOPS SSD (io2) EBS birimlerini kullanın

D. Amazon Elastic Block Store (Amazon EBS) Multi-Attach ile Genel Amaçlı SSD (gp2) EBS birimlerini kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Elastic Block Store (Amazon EBS) Multi-Attach ile Tedarik Edilen IOPS SSD (io2) EBS birimlerini kullanın
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #466

Bir şirket, tek bir Erişilebilirlik Alanında ve bir Amazon RDS Multi-AZ veritabanı bulut sunucusunda Amazon EC2'yi kullanan, durum bilgisi olmayan, iki katmanlı bir uygulama tasarladı. Yeni şirket yönetimi, uygulamanın yüksek oranda kullanılabilir olmasını sağlamak istiyor. Bir çözüm mimarı bu gereksinimi karşılamak için ne yapmalıdır?

A. Uygulamayı Multi-AZ EC2 Otomatik Ölçeklendirmeyi kullanacak şekilde yapılandırın ve bir Application Load Balancer oluşturun

B. Uygulamayı, EC2 bulut sunucularının anlık görüntülerini alacak ve bunları farklı bir AWS Bölgesine gönderecek şekilde yapılandırın

C. Uygulamayı, istekleri uygulamaya göndermek için Amazon Route 53 gecikmeye dayalı yönlendirmeyi kullanacak şekilde yapılandırın

D. Gelen istekleri işlemek için Amazon Route 53 kurallarını yapılandırın ve bir Multi-AZ Application Load Balancer oluşturun

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı Multi-AZ EC2 Otomatik Ölçeklendirmeyi kullanacak şekilde yapılandırın ve bir Application Load Balancer oluşturun
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru #467

Bir şirket AWS Organizasyonlarını kullanıyor. Bir üye hesabı bir Hesaplama Tasarruf Planı satın aldı. Üye hesabındaki iş yüklerindeki değişiklikler nedeniyle hesap artık Bilgi İşlem Tasarruf Planı taahhüdünün tüm avantajlarından yararlanamıyor. Şirket, satın aldığı bilgi işlem gücünün %50'sinden azını kullanıyor.

A. İşlem Tasarruf Planını satın alan üye hesabındaki hesap konsolunun Faturalandırma Tercihleri ​​bölümünden indirim paylaşımını açın.

B. Şirketin Kuruluş yönetimi hesabındaki hesap konsolunun Faturalandırma Tercihleri ​​bölümünden indirim paylaşımını açın.

C. Ek işlem iş yüklerini başka bir AWS hesabından İşlem Tasarruf Planına sahip hesaba taşıyın.

D. Fazla Tasarruf Planı taahhüdünü Rezerve Edilmiş Bulut Sunucusu Pazarında satabilirsiniz.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirketin Kuruluş yönetimi hesabındaki hesap konsolunun Faturalandırma Tercihleri ​​bölümünden indirim paylaşımını açın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #468

Bir şirket, müşterilere arama kataloğu sağlayacak bir mikro hizmet uygulaması geliştiriyor. Şirketin, uygulamanın ön ucunu kullanıcılara sunmak için REST API'leri kullanması gerekir. REST API'lerinin, şirketin özel VPC alt ağlarındaki kapsayıcılarda barındırdığı arka uç hizmetlerine erişmesi gerekir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon API Gateway'i kullanarak bir WebSocket API tasarlayın. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) özel bir alt ağda barındırın. Amazon ECS'ye erişmek için API Gateway'e yönelik özel bir VPC bağlantısı oluşturun.

B. Amazon API Gateway'i kullanarak bir REST API tasarlayın. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) özel bir alt ağda barındırın. Amazon ECS'ye erişmek için API Gateway'e yönelik özel bir VPC bağlantısı oluşturun.

C. Amazon API Gateway'i kullanarak bir WebSocket API tasarlayın. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) özel bir alt ağda barındırın. Amazon ECS'ye erişmek için API Gateway'e yönelik bir güvenlik grubu oluşturun.

D. Amazon API Gateway'i kullanarak bir REST API tasarlayın. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) özel bir alt ağda barındırın. Amazon ECS'ye erişmek için API Gateway'e yönelik bir güvenlik grubu oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon API Gateway'i kullanarak bir REST API tasarlayın. Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) özel bir alt ağda barındırın. Amazon ECS'ye erişmek için API Gateway'e yönelik özel bir VPC bağlantısı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #469

Bir şirket, toplanan ham verileri bir Amazon S3 klasöründe saklıyor. Veriler, şirketin müşterileri adına çeşitli analiz türleri için kullanılır. Talep edilen analitik türü, S3 nesnelerindeki erişim modelini belirler. Şirket erişim modelini tahmin edemez veya kontrol edemez. Şirket S3 maliyetlerini azaltmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Nadiren erişilen nesneleri S3 Standart-Nadir Erişime (S3 Standart-IA) geçirmek için S3 çoğaltmayı kullanın

B. Nesneleri S3 Standard'tan Standard-Infrequent Access'e (S3 Standard-IA) geçirmek için S3 Yaşam Döngüsü kurallarını kullanın.

C. Nesneleri S3 Standard'tan S3 Intelligent-Tiering'e geçirmek için S3 Yaşam Döngüsü kurallarını kullanın

D. Erişilmemiş nesneleri tanımlamak ve S3 Standard'tan S3 Intelligent-Tiering'e geçirmek için S3 Envanterini kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Nesneleri S3 Standard'tan S3 Intelligent-Tiering'e geçirmek için S3 Yaşam Döngüsü kurallarını kullanın
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru #470

Bir şirketin Amazon EC2 bulut sunucularında IPv6 adresleriyle barındırılan uygulamaları var. Uygulamaların interneti kullanarak diğer harici uygulamalarla iletişim başlatması gerekir. Ancak şirketin güvenlik politikası, herhangi bir harici hizmetin EC2 bulut sunucularıyla bağlantı başlatamayacağını belirtiyor. Bir çözüm mimarı bu sorunu çözmek için ne önermelidir?

A. Bir NAT ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

B. Bir internet ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

C. Sanal bir özel ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

D. Yalnızca çıkışa yönelik bir internet ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yalnızca çıkışa yönelik bir internet ağ geçidi oluşturun ve bunu alt ağın rota tablosunun hedefi yapın
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #471

Bir şirket, VPC'deki konteynerler üzerinde çalışan bir uygulama oluşturuyor. Uygulama, verileri bir Amazon S3 klasöründe saklar ve bu verilere erişir. Geliştirme aşamasında uygulama her gün Amazon S3'te 1 TB veri depolayacak ve bu verilere erişecektir. Şirket maliyetleri en aza indirmek istiyor ve mümkün olduğunca trafiğin internet üzerinden geçmesini engellemek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. S3 grubu için S3 Akıllı Katmanlamayı etkinleştirin

B. S3 grubu için S3 Aktarım Hızlandırmasını etkinleştirin

C. Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Bu uç noktayı VPC'deki tüm rota tablolarıyla ilişkilendirin

D. VPC'de Amazon S3 için bir arayüz uç noktası oluşturun. Bu uç noktayı VPC'deki tüm rota tablolarıyla ilişkilendirin

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon S3 için bir ağ geçidi VPC uç noktası oluşturun. Bu uç noktayı VPC'deki tüm rota tablolarıyla ilişkilendirin
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #472

Bir şirketin Amazon DynamoDB tabanlı veri deposuna sahip bir mobil sohbet uygulaması vardır. Kullanıcılar yeni mesajların mümkün olduğunca az gecikmeyle okunmasını ister. Bir çözüm mimarının minimum uygulama değişikliği gerektiren en uygun çözümü tasarlaması gerekir. Çözüm mimarı hangi yöntemi seçmelidir?

A. Yeni mesajlar tablosu için Amazon DynamoDB Accelerator'ı (DAX) yapılandırın. DAX uç noktasını kullanmak için kodu güncelleyin.

B. Artan okuma yükünü karşılamak için DynamoDB okuma replikalarını ekleyin. Okuma kopyaları için okuma uç noktasını işaret edecek şekilde uygulamayı güncelleştirin.

C. DynamoDB'deki yeni mesajlar tablosu için okuma kapasitesi birimlerinin sayısını iki katına çıkarın. Mevcut DynamoDB uç noktasını kullanmaya devam edin.

D. Uygulama yığınına bir Amazon ElastiCache for Redis önbelleği ekleyin. Uygulamayı, DynamoDB yerine Redis önbellek uç noktasını işaret edecek şekilde güncelleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Yeni mesajlar tablosu için Amazon DynamoDB Accelerator'ı (DAX) yapılandırın. DAX uç noktasını kullanmak için kodu güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon DynamoDB Hızlandırıcı (DAX):** DynamoDB için özel geliştirilmiş bellek içi önbellek kümesidir; yoğun okuma yapan uygulamalarda yanıt süresini milisaniyelerden mikrosaniyelere indirir.

---

---

Soru #473

Bir şirket, Application Load Balancer'ın (ALB) arkasında Amazon EC2 bulut sunucularında bir web sitesi barındırıyor. Web sitesi statik içerik sunmaktadır. Web sitesi trafiği artıyor ve şirket, maliyetteki potansiyel artıştan endişe ediyor.

A. Durum dosyalarını uç konumlarda önbelleğe almak için bir Amazon CloudFront dağıtımı oluşturun

B. Bir Amazon ElastiCache kümesi oluşturun. Önbelleğe alınmış dosyaları sunmak için ALB'yi ElastiCache kümesine bağlayın

C. Bir AWS WAF web ACL'si oluşturun ve bunu ALB ile ilişkilendirin. Statik dosyaları önbelleğe almak için web ACL'sine bir kural ekleyin

D. Alternatif bir AWS Bölgesinde ikinci bir ALB oluşturun. Veri aktarım maliyetlerini en aza indirmek için kullanıcı trafiğini en yakın Bölgeye yönlendirin

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Durum dosyalarını uç konumlarda önbelleğe almak için bir Amazon CloudFront dağıtımı oluşturun
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #474

Bir şirketin, diğer Bölgelerdeki iş yüklerinden izole edilmiş iş yüklerini desteklemek ve çalıştırmak için AWS Bölgelerinde birden fazla VPC'si vardır. Yakın zamanda ortaya çıkan bir uygulama başlatma gereksinimi nedeniyle şirketin VPC'lerinin tüm Bölgelerdeki diğer tüm VPC'lerle iletişim kurması gerekiyor. Hangi çözüm bu gereksinimleri EN AZ miktarda idari çabayla karşılayacak?

A. Tek bir Bölgede VPC iletişimini yönetmek için VPC eşlemeyi kullanın. VPC iletişimlerini yönetmek için Bölgeler arasında VPC eşlemeyi kullanın.

B. Bölgeler arasındaki VPC'leri bağlamak ve VPC iletişimlerini yönetmek için tüm Bölgelerdeki AWS Direct Connect ağ geçitlerini kullanın.

C. Tek bir Bölgedeki VPC iletişimini yönetmek için AWS Transit Gateway'i ve VPC iletişimlerini yönetmek için Bölgeler arası geçiş yapan Transit Gateway'i kullanın.

D. VPC'leri Bölgeler arasında bağlamak ve VPC iletişimlerini yönetmek için tüm Bölgelerde AWS PrivateLink'i kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tek bir Bölgedeki VPC iletişimini yönetmek için AWS Transit Gateway'i ve VPC iletişimlerini yönetmek için Bölgeler arasında geçiş yapan Transit Gateway'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Soru #475

Bir şirket, Amazon Elastic Container Service'i (Amazon ECS) kullanacak konteynerli bir uygulama tasarlıyor. Uygulamanın, oldukça dayanıklı olan ve 8 saatlik bir kurtarma noktası hedefi (RPO) ile verileri başka bir AWS Bölgesine kurtarabilen, paylaşılan bir dosya sistemine erişmesi gerekir. Dosya sisteminin bir Bölge içindeki her Erişilebilirlik Alanı için bir bağlama hedefi sağlaması gerekir. Bir çözüm mimarı, başka bir Bölgeye kopyalamayı yönetmek için AWS Backup'ı kullanmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Multi-AZ dağıtımıyla Windows Dosya Sunucusu için Amazon FSx

B. Multi-AZ dağıtımıyla NetApp ONTAP için Amazon FSx

C. Standart depolama sınıfına sahip Amazon Elastic File System (Amazon EFS)

D. OpenZFS için Amazon FSx

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Standart depolama sınıfına sahip Amazon Elastic File System (Amazon EFS)
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #476

Bir şirket yakın gelecekte hızlı bir büyüme bekliyor. Bir çözüm mimarının AWS'de mevcut kullanıcıları yapılandırması ve yeni kullanıcılara izinler vermesi gerekir. Çözüm mimarı IAM grupları oluşturmaya karar verdi. Çözüm mimarı, yeni kullanıcıları departmana göre IAM gruplarına ekleyecektir. Yeni kullanıcılara izin vermenin EN güvenli yolu hangi ek eylemdir?

A. Erişim izinlerini yönetmek için hizmet kontrol politikalarını (SCP'ler) uygulayın

B. En az ayrıcalık iznine sahip IAM rolleri oluşturun. Rolleri IAM gruplarına ekleyin

C. En az ayrıcalık izni veren bir IAM politikası oluşturun. Politikayı IAM gruplarına ekleyin

D. IAM rolleri oluşturun. Rolleri maksimum izinleri tanımlayan bir izin sınırıyla ilişkilendirin

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** En az ayrıcalık izni veren bir IAM politikası oluşturun. Politikayı IAM gruplarına ekleyin
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #477

Bir grup, bir Amazon S3 klasörünü listelemek ve bu paketteki nesneleri silmek için izinlere ihtiyaç duyar. Bir yönetici, pakete erişim sağlamak için aşağıdaki IAM politikasını oluşturdu ve bu politikayı gruba uyguladı. Grup, paketteki nesneleri silemez. Şirket en az ayrıcalıklı erişim kurallarına uyar. Bir çözüm mimarı paket erişimini düzeltmek için politikaya hangi ifadeyi eklemelidir?

A.

B.

C.D.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Sorunun Doğru Cevabı : D
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #478

Bir hukuk firmasının kamuoyuyla bilgi paylaşması gerekir. Bilgiler, herkesin okuyabilmesi gereken yüzlerce dosya içermektedir. Gelecekteki belirlenmiş bir tarihten önce dosyaların herhangi biri tarafından değiştirilmesi veya silinmesi yasaktır. Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. Tüm dosyaları statik web sitesi barındırma için yapılandırılmış bir Amazon S3 klasörüne yükleyin. Belirlenen tarihe kadar S3 klasörüne erişen tüm AWS sorumlularına salt okunur IAM izinleri verin.

B. S3 Sürümü Etkinleştirmenin etkin olduğu yeni bir Amazon S3 klasörü oluşturun. S3 Object Lock'u belirlenen tarihe uygun bir saklama süresiyle kullanın. Statik web sitesi barındırma için S3 paketini yapılandırın. Nesnelere salt okunur erişime izin vermek için bir S3 grup ilkesi ayarlayın.

C. S3 Sürümü Oluşturma etkinleştirilmiş yeni bir Amazon S3 klasörü oluşturun. Nesnenin değiştirilmesi veya silinmesi durumunda AWS Lambda işlevini çalıştırmak için bir olay tetikleyicisi yapılandırın. Nesneleri özel bir S3 klasöründeki orijinal sürümlerle değiştirmek için Lambda işlevini yapılandırın.

D. Tüm dosyaları statik web sitesi barındırma için yapılandırılmış bir Amazon S3 klasörüne yükleyin. Dosyaları içeren klasörü seçin. S3 Object Lock'u belirlenen tarihe uygun bir saklama süresiyle kullanın. S3 klasörüne erişen tüm AWS sorumlularına salt okunur IAM izinleri verin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 Sürüm Oluşturma'nın etkin olduğu yeni bir Amazon S3 klasörü oluşturun. S3 Object Lock'u belirlenen tarihe uygun bir saklama süresiyle kullanın. Statik web sitesi barındırma için S3 paketini yapılandırın. Nesnelere salt okunur erişime izin vermek için bir S3 grup ilkesi ayarlayın.
>
> **Sınav Konu Özeti:**
> - **S3 Object Lock (WORM - Bir Kez Yaz Çok Oku):** Nesnelerin belirli bir süre veya süresiz olarak silinmesini veya üzerine yazılmasını engeller. Compliance (Uyum) modu root hesabı dahil hiç kimsenin silmesine izin vermez; Governance modunda ise belirli IAM yetkilerine sahip kullanıcılar kuralı geçersiz kılabilir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #479

Bir şirket, gerekli altyapıyı manuel olarak sağlayarak yeni web sitesi için altyapının bir prototipini oluşturuyor. Bu altyapı bir Otomatik Ölçeklendirme grubu, bir Uygulama Yük Dengeleyicisi ve bir Amazon RDS veritabanı içerir. Yapılandırma kapsamlı bir şekilde doğrulandıktan sonra şirket, geliştirme ve üretim kullanımı için altyapıyı iki Erişilebilirlik Alanında otomatikleştirilmiş bir şekilde hemen devreye alma olanağını istiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. Prototip altyapısını iki Erişilebilirlik Alanında çoğaltmak ve tedarik etmek için AWS Systems Manager'ı kullanın

B. Prototip altyapısını kılavuz olarak kullanarak altyapıyı şablon olarak tanımlayın. Altyapıyı AWS CloudFormation ile dağıtın.

C. Prototip altyapısında kullanılan kaynakların envanterini kaydetmek için AWS Config'i kullanın. Prototip altyapısını iki Erişilebilirlik Alanına dağıtmak için AWS Config'i kullanın.

D. AWS Elastic Beanstalk'ı kullanın ve iki Erişilebilirlik Alanında yeni ortamları otomatik olarak dağıtmak için prototip altyapısına otomatik bir referans kullanacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Prototip altyapısını kılavuz olarak kullanarak altyapıyı şablon olarak tanımlayın. Altyapıyı AWS CloudFormation ile dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru #480

Bir iş uygulaması Amazon EC2'de barındırılır ve şifreli nesne depolama için Amazon S3'ü kullanır. Bilgi güvenliği sorumlusu, iki hizmet arasındaki hiçbir uygulama trafiğinin halka açık internet üzerinden geçmemesi talimatını verdi. Çözüm mimarı uyumluluk gereksinimlerini karşılamak için hangi yeteneği kullanmalıdır?

A. AWS Anahtar Yönetimi Hizmeti (AWS KMS)

B. VPC uç noktası

C. Özel alt ağ

D. Sanal özel ağ geçidi

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** VPC uç noktası
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #481

Bir şirket, AWS Cloud'da üç katmanlı bir web uygulaması barındırıyor. Multi-AZAmazon RDS for MySQL sunucusu, veritabanı katmanını oluşturur Amazon ElastiCache, önbellek katmanını oluşturur. Şirket, müşteri veritabanına bir öğe eklediğinde önbelleğe veri ekleyen veya önbelleğe veriyi güncelleyen bir önbellekleme stratejisi istiyor. Önbellekteki veriler her zaman veritabanındaki verilerle eşleşmelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Tembel yükleme önbelleğe alma stratejisini uygulayın

B. İçe yazma önbelleğe alma stratejisini uygulama

C. Ekleme TTL önbelleğe alma stratejisini uygulayın

D. AWS AppConfig önbelleğe alma stratejisini uygulayın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İçe yazma önbelleğe alma stratejisini uygulama
>
> **Sınav Konu Özeti:**
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru #482

Bir şirket, 100 GB'lık geçmiş verilerini şirket içi bir konumdan Amazon S3 klasörüne taşımak istiyor. Şirketin tesislerinde saniyede 100 megabit (Mbps) internet bağlantısı bulunmaktadır. Şirketin S3 klasörüne aktarılan verileri şifrelemesi gerekiyor. Şirket, yeni verileri doğrudan Amazon S3'te depolayacak. Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Verileri doğrudan bir S3 klasörüne taşımak için AWS CLI'deki s3 senkronizasyon komutunu kullanın

B. Verileri şirket içi konumdan bir S3 klasörüne taşımak için AWS DataSync'i kullanın

C. Verileri bir S3 klasörüne taşımak için AWS Snowball'u kullanın

D. Şirket içi konumdan AWS'ye bir IPsec VPN kurun. Verileri doğrudan bir S3 klasörüne taşımak için AWS CLI'deki s3 cp komutunu kullanın

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri şirket içi konumdan bir S3 klasörüne taşımak için AWS DataSync'i kullanın
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru #483

Bir şirket, .NET 6 Framework üzerinde çalışan bir Windows işini bir Windows kapsayıcısı altında kapsayıcıya aldı. Şirket bu işi AWS Cloud'da yürütmek istiyor. İş her 10 dakikada bir çalışır. İşin çalışma süresi 1 dakika ile 3 dakika arasında değişmektedir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İşin kapsayıcı görüntüsünü temel alarak bir AWS Lambda işlevi oluşturun. Amazon EventBridge'i işlevi her 10 dakikada bir çağıracak şekilde yapılandırın.

B. AWS Fargate kaynaklarını kullanan bir iş oluşturmak için AWS Batch'i kullanın. İş zamanlamasını her 10 dakikada bir çalışacak şekilde yapılandırın.

C. İşi çalıştırmak için AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın. Her 10 dakikada bir çalıştırılacak işin kapsayıcı görüntüsüne dayalı olarak zamanlanmış bir görev oluşturun.

D. İşi yürütmek için AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın. İşin kapsayıcı görüntüsüne dayalı olarak bağımsız bir görev oluşturun. İşi her 10 dakikada bir çalıştırmak için Windows görev zamanlayıcıyı kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İşi çalıştırmak için AWS Fargate'te Amazon Elastic Container Service'i (Amazon ECS) kullanın. Her 10 dakikada bir çalıştırılacak işin kapsayıcı görüntüsüne dayalı olarak zamanlanmış bir görev oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru #484

Bir şirket, çok sayıda bağımsız AWS hesabından, birleştirilmiş, çok hesaplı bir mimariye geçmek istiyor. Şirket, farklı iş birimleri için birçok yeni AWS hesabı oluşturmayı planlıyor. Şirketin, merkezi bir kurumsal dizin hizmetini kullanarak bu AWS hesaplarına erişimi doğrulaması gerekiyor. Bir çözüm mimarı bu gereksinimleri karşılamak için hangi eylem kombinasyonunu önermelidir? (İki tane seçin.)

A. AWS Organizasyonlarında tüm özelliklerin açık olduğu yeni bir kuruluş oluşturun. Kuruluşta yeni AWS hesaplarını oluşturun.

B. Bir Amazon Cognito kimlik havuzu oluşturun. AWS IAM Identity Center'ı (AWS Tek Oturum Açma) Amazon Cognito kimlik doğrulamasını kabul edecek şekilde yapılandırın.

C. AWS hesaplarını yönetmek için bir hizmet kontrol politikası (SCP) yapılandırın. AWS Dizin Hizmetine AWS IAM Identity Center'ı (AWS Tek Oturum Açma) ekleyin.

D. AWS Organizasyonlarında yeni bir organizasyon oluşturun. Kuruluşun kimlik doğrulama mekanizmasını doğrudan AWS Directory Service'i kullanacak şekilde yapılandırın.

E. Kuruluşta AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kurun. IAM Identity Center'ı yapılandırın ve şirketin kurumsal dizin hizmetiyle entegre edin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, E`
> - **Önerilen Çözüm:** AWS Organizasyonlarında tüm özelliklerin açık olduğu yeni bir kuruluş oluşturun. Kuruluşta yeni AWS hesaplarını oluşturun. Kuruluşta AWS IAM Identity Center'ı (AWS Tek Oturum Açma) kurun. IAM Identity Center'ı yapılandırın ve şirketin kurumsal dizin hizmetiyle entegre edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #485

Bir şirket, eski haber görüntülerinden video arşivlerini AWS'de depolayabilecek bir çözüm arıyor. Şirketin maliyetleri en aza indirmesi gerekiyor ve bu dosyaları nadiren geri yüklemesi gerekecek. Dosyalara ihtiyaç duyulduğunda en fazla beş dakika içinde hazır olmaları gerekir. EN uygun maliyetli çözüm nedir?

A. Video arşivlerini Amazon S3 Glacier'da saklayın ve Hızlandırılmış alımları kullanın.

B. Video arşivlerini Amazon S3 Glacier'da saklayın ve Standart alımları kullanın.

C. Video arşivlerini Amazon S3 Standard-Infrequent Access'te (S3 Standard-IA) saklayın.

D. Video arşivlerini Amazon S3 One Zone-Infrequent Access'te (S3 One Zone-IA) saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Video arşivlerini Amazon S3 Glacier'da saklayın ve Hızlandırılmış alımları kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru #486

Bir şirket AWS'de üç katmanlı bir uygulama geliştiriyor. Sunum katmanı statik bir web sitesine hizmet edecektir. Mantık katmanı konteynerli bir uygulamadır. Bu uygulama verileri ilişkisel bir veritabanında depolayacaktır. Şirket, dağıtımı basitleştirmek ve operasyonel maliyetleri azaltmak istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Statik içeriği barındırmak için Amazon S3'ü kullanın. Bilgi işlem gücü için Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate ile birlikte kullanın. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.

B. Statik içeriği barındırmak için Amazon CloudFront'u kullanın. Bilgi işlem gücü için Amazon Elastic Container Service'i (Amazon ECS) Amazon EC2 ile kullanın. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.

C. Statik içeriği barındırmak için Amazon S3'ü kullanın. Bilgi işlem gücü için Amazon Elastic Kubernetes Service'i (Amazon EKS) AWS Fargate ile birlikte kullanın. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.

D. Statik içeriği barındırmak için Amazon EC2 Rezerve Edilmiş Bulut Sunucularını kullanın. Bilgi işlem gücü için Amazon Elastic Kubernetes Service'i (Amazon EKS) Amazon EC2 ile kullanın. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Statik içeriği barındırmak için Amazon S3'ü kullanın. Bilgi işlem gücü için Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate ile birlikte kullanın. Veritabanı için yönetilen bir Amazon RDS kümesi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru #487

Bir şirket, uygulaması için bir depolama çözümü arıyor. Çözümün yüksek düzeyde kullanılabilir ve ölçeklenebilir olması gerekir. Çözüm ayrıca, yerel protokoller aracılığıyla AWS'deki ve şirket içi birden fazla Linux örneği tarafından monte edilebilen bir dosya sistemi olarak çalışmalı ve minimum boyut gereksinimlerine sahip olmamalıdır. Şirket, şirket içi ağından VPC'sine erişim için Siteden Siteye VPN kurmuştur. Hangi depolama çözümü bu gereksinimleri karşılıyor?

A. Amazon FSx Multi-AZ dağıtımları

B. Amazon Elastic Block Store (Amazon EBS) Çoklu Ekli birimler

C. Birden fazla bağlama hedefine sahip Amazon Elastic File System (Amazon EFS)

D. Tek bir bağlama hedefine ve birden fazla erişim noktasına sahip Amazon Elastic File System (Amazon EFS)

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Birden fazla bağlama hedefine sahip Amazon Elastic File System (Amazon EFS)
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru #488

4 yıllık bir medya şirketi, AWS hesaplarını düzenlemek için AWS Organizasyonlarının tüm özellik özellik setini kullanıyor. Şirketin finans ekibine göre, üye hesaplarındaki fatura bilgilerine, üye hesaplarının kök kullanıcısı da dahil olmak üzere hiç kimse erişememeli. Bu gereksinimleri hangi çözüm karşılayacak?

A. Tüm finans ekibi kullanıcılarını bir IAM grubuna ekleyin. Gruba Faturalandırma adlı AWS tarafından yönetilen bir politika ekleyin.

B. Kök kullanıcı da dahil olmak üzere tüm kullanıcıların fatura bilgilerine erişimini engellemek için kimlik tabanlı bir politika ekleyin.

C. Faturalama bilgilerine erişimi reddetmek için bir hizmet kontrol ilkesi (SCP) oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin.

D. Kuruluşun tüm özellikler özellik kümesinden Kuruluşun birleştirilmiş faturalandırma özellik kümesine dönüştürün.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Fatura bilgilerine erişimi reddetmek için bir hizmet kontrol ilkesi (SCP) oluşturun. SCP'yi kök kuruluş birimine (OU) ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #489

Bir e-ticaret şirketi, AWS Cloud'da şirket içi bir depo çözümüyle entegre bir uygulama çalıştırıyor. Şirket, ambar uygulamasının siparişleri işleyebilmesi için şirket içi bir HTTPS uç noktasına sipariş mesajları göndermek üzere Amazon Simple Notification Service'ı (Amazon SNS) kullanıyor. Yerel veri merkezi ekibi, sipariş mesajlarından bazılarının alınmadığını tespit etti. Çözüm mimarının teslim edilmeyen mesajları saklaması ve mesajları 14 güne kadar analiz etmesi gerekir. Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. 14 günlük saklama süresine sahip bir Amazon Kinesis Data Stream hedefine sahip bir Amazon SNS teslim edilemeyen ileti kuyruğu yapılandırın.

B. Uygulama ile Amazon SNS arasında 14 günlük saklama süresi olan bir Amazon Simple Queue Service (Amazon SQS) kuyruğu ekleyin.

C. 14 günlük saklama süresine sahip bir Amazon Simple Queue Service (Amazon SQS) hedefine sahip bir Amazon SNS teslim edilemeyen ileti kuyruğu yapılandırın.

D. 14 günlük saklama süresi için ayarlanmış bir TTL özniteliğine sahip bir Amazon DynamoDB hedefine sahip bir Amazon SNS teslim edilemeyen ileti kuyruğu yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** 14 günlük saklama süresine sahip bir Amazon Simple Queue Service (Amazon SQS) hedefine sahip bir Amazon SNS teslim edilemeyen ileti kuyruğu yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru #490

Bir oyun şirketi, coğrafi konum, oyuncu verileri ve skor tabloları gibi kullanıcı bilgilerini depolamak için Amazon DynamoDB'yi kullanıyor. Şirketin minimum miktarda kodlamayla bir Amazon S3 klasörüne sürekli yedeklemeler yapılandırması gerekiyor. Yedeklemeler uygulamanın kullanılabilirliğini etkilememeli ve tablo için tanımlanan okuma kapasitesi birimlerini (RCU'lar) etkilememelidir. Hangi çözüm bu gereksinimleri karşılıyor?

A. Amazon EMR kümesini kullanın. Verileri Amazon S3'e yedeklemek için bir Apache Hive işi oluşturun.

B. Verileri sürekli yedeklemelerle doğrudan DynamoDB'den Amazon S3'e aktarın. Tablo için belirli bir noktaya kurtarmayı açın.

C. Amazon DynamoDB Akışlarını Yapılandırın. Akışı tüketmek ve verileri bir Amazon S3 klasörüne aktarmak için bir AWS Lambda işlevi oluşturun.

D. Verileri veritabanı tablolarından Amazon S3'e düzenli olarak aktarmak için bir AWS Lambda işlevi oluşturun. Tablo için belirli bir noktaya kurtarmayı açın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Sürekli yedeklemelerle verileri doğrudan DynamoDB'den Amazon S3'e aktarın. Tablo için belirli bir noktaya kurtarmayı açın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru #491

Bir çözüm mimarı, bir bankanın kredi kartı veri doğrulama isteklerini işlemek için eşzamansız bir uygulama tasarlıyor. Uygulama güvenli olmalı ve her isteği en az bir kez işleyebilmelidir. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service (Amazon SQS) standart kuyruklarını olay kaynağı olarak ayarlayın. Şifreleme için AWS Key Management Service'i (SSE-KMS) kullanın. Lambda yürütme rolü için kms:Decrypt iznini ekleyin.

B. AWS Lambda olay kaynağı eşlemesini kullanın. Olay kaynağı olarak Amazon Simple Queue Service (Amazon SQS) FIFO kuyruklarını kullanın. Şifreleme için SQS tarafından yönetilen şifreleme anahtarlarını (SSE-SQS) kullanın. Lambda işlevi için şifreleme anahtarı çağırma iznini ekleyin.

C. AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service (Amazon SQS) FIFO kuyruklarını olay kaynağı olarak ayarlayın. AWS KMS anahtarlarını (SSE-KMS) kullanın. Lambda yürütme rolü için kms:Decrypt iznini ekleyin.

D. AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service (Amazon SQS) standart kuyruklarını olay kaynağı olarak ayarlayın. Şifreleme için AWS KMS anahtarlarını (SSE-KMS) kullanın. Lambda işlevi için şifreleme anahtarı çağırma iznini ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Lambda olay kaynağı eşlemesini kullanın. Amazon Simple Queue Service (Amazon SQS) standart kuyruklarını olay kaynağı olarak ayarlayın. Şifreleme için AWS Key Management Service'i (SSE-KMS) kullanın. Lambda yürütme rolü için kms:Decrypt iznini ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru #492

Bir şirketin geliştirme çalışmaları için birden fazla AWS hesabı vardır. Bazı personel sürekli olarak büyük boyutlu Amazon EC2 bulut sunucularını kullanıyor ve bu da şirketin geliştirme hesapları için yıllık bütçeyi aşmasına neden oluyor. Şirket, bu hesaplarda AWS kaynaklarının oluşturulmasını merkezi olarak kısıtlamak istiyor. Hangi çözüm bu gereksinimleri EN AZ geliştirme çabasıyla karşılayacak?

A. Onaylanmış bir EC2 oluşturma sürecini kullanan AWS Systems Manager şablonları geliştirin. EC2 bulut sunucularını hazırlamak için onaylı Sistem Yöneticisi şablonlarını kullanın.

B. Hesapları kuruluş birimleri (OU'lar) halinde düzenlemek için AWS Organizasyonlarını kullanın. EC2 bulut sunucusu türlerinin kullanımını denetlemek için bir hizmet denetim ilkesi (SCP) tanımlayın ve ekleyin.

C. EC2 bulut sunucusu oluşturulduğunda bir AWS Lambda işlevini çağıran bir Amazon EventBridge kuralı yapılandırın. İzin verilmeyen EC2 bulut sunucusu türlerini durdurun.

D. Personelin izin verilen EC2 bulut sunucusu türlerini oluşturması için AWS Hizmet Kataloğu ürünlerini ayarlayın. Personelin EC2 bulut sunucularını yalnızca Hizmet Kataloğu ürünlerini kullanarak dağıtabildiğinden emin olun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Hesapları kuruluş birimleri (OU'lar) halinde düzenlemek için AWS Organizasyonlarını kullanın. EC2 bulut sunucusu türlerinin kullanımını denetlemek için bir hizmet denetim ilkesi (SCP) tanımlayın ve ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru #493

Bir şirket, müşteri hizmetleri çağrılarının kalitesini belirlemek için yapay zekayı (AI) kullanmak istiyor. Şirket şu anda aramaları İngilizce dahil dört farklı dilde yönetiyor. Şirket gelecekte yeni diller sunacak. Şirketin makine öğrenimi (ML) modellerini düzenli olarak sürdürecek kaynakları yok. Şirketin müşteri hizmetleri çağrı kayıtlarından yazılı duyarlılık analizi raporları oluşturması gerekiyor. Müşteri hizmetleri çağrı kayıt metninin İngilizce'ye çevrilmesi gerekmektedir. Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (Üç tanesini seçin.)

A. Ses kayıtlarını İngilizceye çevirmek için Amazon Comprehend'i kullanın.

B. Yazılı duyarlılık analizi raporları oluşturmak için Amazon Lex'i kullanın.

C. Ses kayıtlarını metne dönüştürmek için Amazon Polly'yi kullanın.

D. Herhangi bir dildeki ses kayıtlarını metne dönüştürmek için Amazon Transcribe'ı kullanın.

E. Herhangi bir dildeki metni İngilizceye çevirmek için Amazon Translate'i kullanın. F. Duygu analizi raporlarını oluşturmak için Amazon Comprehend'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D, E,`
> - **Önerilen Çözüm:** Herhangi bir dildeki ses kayıtlarını metne dönüştürmek için Amazon Transcribe'ı kullanın. Herhangi bir dildeki metni İngilizceye çevirmek için Amazon Translate'i kullanın. Duygu analizi raporlarını oluşturmak için Amazon Comprehend'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #494

Bir şirket, dahili sistemlerini barındırmak için Amazon EC2 bulut sunucularını kullanıyor. Dağıtım işleminin bir parçası olarak yönetici, bir EC2 örneğini sonlandırmak için AWS CLI'yi kullanmaya çalışır. Ancak yönetici 403 (Erişim Reddedildi) hata mesajı alır. Yönetici, aşağıdaki IAM politikasının eklendiği bir IAM rolünü kullanıyor: Başarısız isteğin nedeni nedir?

C. EC2 bulut sunucusunun Deny deyimine sahip kaynak tabanlı bir politikası vardır.

B. Poliçe beyanında anapara belirtilmemiş.

C. "Eylem" alanı, EC2 örneğini sonlandırmak için gereken eylemleri sağlamaz.

D. EC2 örneğini sonlandırma isteği 192.0.2.0/24 veya 203.0.113.0/24 CIDR bloklarından kaynaklanmıyor.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** EC2 örneğini sonlandırma isteği 192.0.2.0/24 veya 203.0.113.0/24 CIDR bloklarından kaynaklanmıyor.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru #495

Bir şirket iç denetim yapıyor. Şirket, şirketin AWS Lake Formation veri gölüyle ilişkili Amazon S3 klasöründeki verilerin hassas müşteri veya çalışan verileri içermediğinden emin olmak istiyor. Şirket, pasaport numaraları ve kredi kartı numaraları da dahil olmak üzere kişisel olarak tanımlanabilir bilgileri (PII) veya finansal bilgileri keşfetmek istiyor. Bu gereksinimleri hangi çözüm karşılayacak?

A. Hesapta AWS Audit Manager'ı yapılandırın. Denetim için Ödeme Kartı Endüstrisi Veri Güvenliği Standartlarını (PCI DSS) seçin.

B. Amazon S3 Envanterini S3 klasöründe yapılandırın Envanteri sorgulamak için Amazon Athena'yı yapılandırın.

C. Amazon Macie'yi, gerekli veri türleri için yönetilen tanımlayıcıları kullanan bir veri bulma işi çalıştıracak şekilde yapılandırın.

D. S3 klasöründe bir rapor çalıştırmak için Amazon S3 Select'i kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Amazon Macie'yi, gerekli veri türleri için yönetilen tanımlayıcıları kullanan bir veri bulma işi çalıştıracak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Soru #496

Bir şirket, uygulamalarını barındırmak için şirket içi sunucuları kullanır. Şirketin depolama kapasitesi tükeniyor. Uygulamalar hem blok depolamayı hem de NFS depolamayı kullanır. Şirketin mevcut uygulamalarını yeniden tasarlamadan yerel önbelleğe almayı destekleyen yüksek performanslı bir çözüme ihtiyacı var. Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir? (İki tane seçin.)

A. Amazon S3'ü şirket içi sunuculara dosya sistemi olarak bağlayın.

B. NFS depolamayı değiştirmek için bir AWS Storage Gateway dosya ağ geçidi dağıtın.

C. Şirket içi sunuculara NFS bağlantıları sağlamak için AWS Snowball Edge'i dağıtın.

D. Blok depolamayı değiştirmek için bir AWS Storage Gateway birim ağ geçidi dağıtın.

E. Amazon Elastic File System (Amazon EFS) birimlerini dağıtın ve bunları şirket içi sunuculara bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** NFS depolamayı değiştirmek için bir AWS Storage Gateway dosya ağ geçidi dağıtın. Blok depolamayı değiştirmek için bir AWS Storage Gateway birim ağ geçidi dağıtın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru #497

Bir şirketin, aynı AWS Bölgesindeki bir Amazon S3 klasöründen büyük miktarlarda veri okuyan ve yazan bir hizmeti var. Hizmet, bir VPC'nin özel alt ağı içindeki Amazon EC2 bulut sunucularına dağıtılır. Hizmet, Amazon S3 ile genel alt ağdaki bir NAT ağ geçidi üzerinden iletişim kurar. Ancak şirket veri çıkış maliyetlerini azaltacak bir çözüm istiyor. Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Genel alt ağda özel bir EC2 NAT örneği sağlayın. Özel alt ağın yönlendirme tablosunu, bu örneğin elastik ağ arayüzünü tüm S3 trafiği için hedef olarak kullanacak şekilde yapılandırın.

B. Özel alt ağda özel bir EC2 NAT örneği sağlayın. Genel alt ağın yönlendirme tablosunu, bu örneğin elastik ağ arayüzünü tüm S3 trafiği için hedef olarak kullanacak şekilde yapılandırın.

C. Bir VPC ağ geçidi uç noktası sağlayın. Özel alt ağın rota tablosunu, ağ geçidi uç noktasını tüm S3 trafiği için rota olarak kullanacak şekilde yapılandırın.

D. İkinci bir NAT ağ geçidi sağlayın. Özel alt ağın yönlendirme tablosunu, bu NAT ağ geçidini tüm S3 trafiği için hedef olarak kullanacak şekilde yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Bir VPC ağ geçidi uç noktası sağlayın. Özel alt ağın rota tablosunu, ağ geçidi uç noktasını tüm S3 trafiği için rota olarak kullanacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Soru #498

Bir şirket, yüksek çözünürlüklü resimleri bir S3 klasöründe depolamak için Amazon S3'ü kullanıyor. Uygulama değişikliklerini en aza indirmek için şirket, resimleri bir S3 nesnesinin en son sürümü olarak saklıyor. Şirketin resimlerin yalnızca en yeni iki versiyonunu saklaması gerekiyor. Şirket maliyetleri düşürmek istiyor. Şirket, S3 kovasını büyük bir masraf olarak tanımladı. Hangi çözüm EN AZ operasyonel ek yük ile S3 maliyetlerini azaltacaktır?

A. Süresi dolmuş nesne sürümlerini silmek ve en yeni iki sürümü korumak için S3 Yaşam Döngüsü'nü kullanın.

B. Eski sürümleri kontrol etmek ve en yeni iki sürüm dışındaki tüm sürümleri silmek için AWS Lambda işlevini kullanın.

C. Güncel olmayan nesne sürümlerini silmek ve yalnızca en yeni iki sürümü korumak için S3 Toplu İşlemlerini kullanın.

D. S3 grubundaki sürüm oluşturmayı devre dışı bırakın ve en yeni iki sürümü koruyun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Süresi dolmuş nesne sürümlerini silmek ve en yeni iki sürümü korumak için S3 Lifecycle'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru #499

Bir şirketin 1 Gbps AWS Direct Connect bağlantısının maliyetini en aza indirmesi gerekiyor. Şirketin ortalama bağlantı kullanımı %10'un altındadır. Bir çözüm mimarı, güvenlikten ödün vermeden maliyeti azaltacak bir çözüm önermelidir. Bu gereksinimleri hangi çözüm karşılayacak?

A. Yeni bir 1 Gbps Doğrudan Bağlantı bağlantısı kurun. Bağlantıyı başka bir AWS hesabıyla paylaşın.

B. AWS Management Console'da yeni bir 200 Mbps Direct Connect bağlantısı kurun.

C. 1 Gbps bağlantı siparişi vermek için bir AWS Direct Connect Çözüm Ortağıyla iletişime geçin. Bağlantıyı başka bir AWS hesabıyla paylaşın.

D. Mevcut bir AWS hesabı için 200 Mb/sn barındırılan bağlantı sipariş etmek için bir AWS Direct Connect Çözüm Ortağıyla iletişime geçin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut bir AWS hesabı için 200 Mb/sn barındırılan bağlantı sipariş etmek için bir AWS Direct Connect Çözüm Ortağıyla iletişime geçin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru #500

Bir şirketin bünyesinde birden fazla Windows dosya sunucusu vardır. Şirket, dosyalarını Amazon FSx for Windows Dosya Sunucusu dosya sistemine taşımak ve birleştirmek istiyor. Erişim haklarının değişmemesini sağlamak için dosya izinleri korunmalıdır. Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. AWS DataSync aracılarını şirket içinde dağıtın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın.

B. AWS CLI'yi kullanarak her dosya sunucusundaki paylaşımları Amazon S3 klasörlerine kopyalayın. Verileri Windows Dosya Sunucusu için FSx dosya sistemine aktarmak üzere AWS DataSync görevlerini planlayın.

C. Her dosya sunucusundan sürücüleri çıkarın. Sürücüleri Amazon S3'e aktarılmak üzere AWS'ye gönderin. Verileri Windows Dosya Sunucusu için FSx dosya sistemine aktarmak üzere AWS DataSync görevlerini planlayın.

D. Bir AWS Snowcone cihazı sipariş edin. Cihazı şirket içi ağa bağlayın. Cihazda AWS DataSync aracılarını başlatın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın.

E. Bir AWS Snowball Edge Storage Optimize Edilmiş cihaz sipariş edin. Cihazı şirket içi ağa bağlayın. AWS CLI'yi kullanarak verileri cihaza kopyalayın. Cihazı Amazon S3'e aktarmak için AWS'ye geri gönderin. Verileri Windows Dosya Sunucusu için FSx dosya sistemine aktarmak üzere AWS DataSync görevlerini planlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** AWS DataSync aracılarını şirket içinde dağıtın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın. Bir AWS Snowcone cihazı sipariş edin. Cihazı şirket içi ağa bağlayın. Cihazda AWS DataSync aracılarını başlatın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.
