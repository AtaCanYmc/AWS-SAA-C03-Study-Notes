# CAA Sınav Soruları - Resmi Referanslı ve Açıklamalı - Bölüm 01

> **Soru Aralığı:** 1 - 25 / Toplam: 63

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru 1 / 63 ·

Dosya: photo.jpeg · Soru 3 / 65

Bir şirketin MySQL DB için Amazon RDS kullanan kritik bir e-ticaret uygulaması var
Multi-AZ dağıtımına sahip örnek. Şirketin analitik ekibi,
Rapor oluşturmak için kullandığı sorgu sayısı. Kullanımın artması şu sonuçlara yol açtı:
uygulama performansının bozulması. Analitik ekibinin neredeyse gerçek zamanlı verilere ihtiyacı var
Raporlarında tutarlılık. Analitik ekibi,
Veritabanı örneği çevrimdışı. Bu gereksinimleri hangi çözüm karşılayacak?

A) Bir anlık görüntü alın ve sorguları çalıştırmak için anlık görüntüyü ayrı bir veritabanı örneği olarak geri yükleyin.

B) Daha büyük bir bulut sunucusu boyutu kullanmak için veritabanı bulut sunucusunu değiştirin

C) Sorguları beklemedeki veritabanı bulut sunucusu uç noktasına yönlendirin

D) Bir okuma kopyası ekleyin. Sorguları okuma replikası uç noktasına yönlendirin

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: Okuma replikası birincil örnekten asenkron olarak güncellenir ve yalnızca okuma erişimi sağlar; raporlar bu replikaya yönlendirilirse ana örneğin yükü azalır ve birincil örnek çevrimdışıyken de raporlar üretilebilir. A seçeneğindeki snapshot belirli bir andaki kopya olduğu için gerçek zamana yakın tutarlılık sağlamaz. B seçeneği yalnızca sunucuyu büyütür, raporların ana örnekten bağımsız çalışmasını sağlamaz. C seçeneği yanlıştır çünkü Multi-AZ bekleme örneği okuma trafiğine hizmet edemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html)
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)

---

---

Soru 2 / 63 · Dosya: photo2.jpeg · Soru 4/65

Bir şirket Amazon EC2 bulut sunucularını web sunucusu olarak çalıştırıyor. Web'de en yüksek trafik yükü oluşuyor
sunucu her gün iki tutarlı saatte. Web sunucuları geri kalan süre boyunca boşta
gün. Bir çözüm mimarının web sunucularını yönetmesi ve hata toleransını sürdürmesi gerekir.
Hangi çözüm bu gereksinimleri EN uygun maliyetli şekilde karşılayacak?

A) Bulut sunucularını talebe göre ölçeklendirmek için bir EC2 Otomatik Ölçeklendirme grubu kullanın

B) Her zaman en yüksek kapasiteyi sağlamak için Rezerve Edilmiş Bulut Sunucuları satın alın

C) Trafik talebi düşük olduğunda EC2 örneklerini durdurmak için bir cron işi kullanın

D) Yoğun trafik talebi sırasında EC2 bulut sunucularını dikey olarak ölçeklendirmek için bir komut dosyası kullanın

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: Auto Scaling grubu talebe göre kapasiteyi artırıp azaltır, böylece iki yoğun saat dışında fazla örnek için ödeme yapılmaz; sağlıksız örnekleri değiştirerek hata toleransını da korur. B seçeneği yıl boyunca tepe kapasitesi için boşta kalan kapasiteye para öder. C seçeneği yoğun saatlerde örneklerin tekrar açılmasını ve sağlıklı kalmasını otomatik olarak yönetmez. D seçeneği tek bir örneğin boyutunu değiştirir; bu hata toleransı sağlamaz ve yeniden başlatma gerektirebilir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html)

---

---

Soru 3 / 63 · Dosya: photo3.jpeg · Soru 5/65

Bir şirket, birden fazla departmanın kullandığı 200 Amazon S3 klasöründe veri depoluyor.
Her departman, departmandaki her ekip için önek tabanlı kiracı izolasyonuna sahiptir.
finans ekibinin hangi spesifik paketlerin ve öneklerin en yüksek getiriyi sağladığını belirlemesi gerekiyor
S3 maliyetleri. Finans ekibinin paket düzeyinde ve ön ek düzeyinde depolama kullanımına ve talebine ihtiyacı var
desenler ve her bir gruba atfedilen dolar maliyetleri. Hangi adımların kombinasyonu
bu gereksinimleri karşılıyor mu? (İKİ'yi seçin.)

A) S3 Depolama Lensi gelişmiş ölçümlerini etkinleştirin. Görüntülemek için önek düzeyinde toplamayı etkinleştirin
her paket ve her önek için depolama kullanımı ve istek etkinliği

B) Depolama kullanımını görüntülemek için S3 Depolama Lensi ücretsiz katmanını kullanın. S3 sunucu erişimini yapılandırma
istek kalıplarını görüntülemek için günlüğe kaydetme

C) AWS Maliyet ve Kullanım Raporlarını, kaynak düzeyinde ayrıntı düzeyini kullanacak şekilde yapılandırın.
kullanım türüne göre her paket için maliyetler

D) AWS Maliyet Gezgini'ni kullanın. S3 maliyetlerini pakete göre gruplandırılmış olarak görüntülemek için maliyet tahsisi etiketlerini uygulayın
ve kullanım türü

E) Tüm gruplarda S3 sunucusu erişim günlüğünü etkinleştirin. Amazon Athena'yı kullanarak günlükleri sorgulama
her önekin maliyetini hesaplamak için

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevaplar A ve C: Storage Lens gelişmiş metrikleri, önek bazlı toplama ile bucket ve önek düzeyinde etkinlik (istek) metriklerini sağlar. Cost and Usage Reports, kaynak kimliklerini (resource IDs) dahil ederek maliyeti kaynak düzeyinde, yani her bucket için kullanım türüne göre ayrıştırır. B seçeneği ücretsiz katmanda önek düzeyi ve istek metriklerinin bulunmadığı için yetersizdir. D seçeneği her bucket'a etiket uygulanmasını gerektirir ve önek düzeyinde maliyet vermez; E seçeneği erişim günlüklerinden doğrudan dolar maliyeti üretmez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_basics_metrics_recommendations.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_basics_metrics_recommendations.html)
>   - [https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html](https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html)

---

---

Soru 4 / 63 · Dosya: 4.jpeg · Soru 6/65

Bir şirket, Amazon EKS kümelerinde kritik bir genel uygulamayı çalıştırıyor. Uygulamanın bir
mikro hizmet mimarisi. Şirketin aşağıdakileri toplayan bir çözümü uygulaması gerekiyor:
Uygulamadaki ölçümleri ve günlükleri merkezi bir şekilde toplar ve özetler
konum. Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?
yol?

A) Amazon CloudWatch aracısını mevcut EKS kümesinde çalıştırın. CloudWatch kullanın
Ölçümleri ve günlükleri görüntülemek için kontrol paneli.

B) Amazon Kinesis Data Streams'te bir veri akışı yapılandırın. Amazon Data Firehose'u kullanarak
olayları okumak ve olayları bir Amazon S3 klasörüne iletmek. Görüntülemek için Amazon Athena'yı kullanın
olaylar.

C) Veri olaylarını yakalamak için AWS CloudTrail'i yapılandırın. Amazon OpenSearch Hizmetini kullanarak
CloudTrail'i sorgula

D) Mevcut EKS kümesinde Amazon CloudWatch Container Insights'ı yapılandırın. Bir kullanın
Ölçümleri ve günlükleri görüntülemek için CloudWatch kontrol paneli.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: CloudWatch Container Insights, EKS kümelerindeki metrik ve günlükleri toplar, özetler ve CloudWatch panosunda merkezi olarak sunar; bu nedenle en düşük işletme yüküyle sonuç verir. A seçeneği genel bir CloudWatch ajanı kurar, ancak EKS için hazır metrik ve günlük özetleme sunan Container Insights'a göre daha fazla yapılandırma gerektirir. B seçeneği Kinesis, Firehose, S3 ve Athena'dan oluşan karmaşık bir boru hattı kurar ve işletme yükünü artırır. C seçeneği CloudTrail'i yalnızca API çağrıları için kullanır; uygulama metriklerini ve günlüklerini toplamaz.

---

---

Soru 5 / 63 · Dosya: 5.jpeg · Soru 7/65

Bir şirket, şirket içi ağlara bağlanmak için AWS Direct Connect'i kullanmak istiyor
AWS Cloud'a ağlar. Şirket, tek bir AWS Bölgesinde birden fazla VPC çalıştırıyor.
şirket, VPC filosunu yüzlerce VPC'yi içerecek şekilde genişletmeyi planlıyor. Bir çözüm mimarı
geleceğe uyum sağlamak için şirketin ağ altyapısını basitleştirmeli ve ölçeklendirmeli
VPC'ler. Bu gereksinimleri hangi hizmet veya kaynak karşılayacak?

A) VPC uç noktaları

B) AWS Transit Ağ Geçidi

C) Amazon Rotası 53

D) AWS Sırları Yöneticisi

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: AWS Transit Gateway, birçok VPC'yi ve şirket içi ağları tek bir merkezi yönlendirici üzerinden bağlar ve Direct Connect bağlantılarını da bu merkeze bağlayabilir; VPC sayısı arttıkça ağ yönetimini sadeleştirir. A seçeneği (VPC endpoints) yalnızca belirli hizmetlere özel erişim sağlar, ağ merkezi değildir. C seçeneği (Amazon Route 53) bir DNS hizmetidir. D seçeneği (AWS Secrets Manager) gizli bilgi yönetimi içindir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/extend-tgw.html](https://docs.aws.amazon.com/vpc/latest/userguide/extend-tgw.html)

---

---

Soru 6 / 63 · Dosya: 6.jpeg · Soru 8/65

Bir şirket, bir Amazon EC2 bulut sunucusundan ve bir
Single-AZ yapılandırmasında Amazon RDS örneği. Şirket her iki örneği de dağıtıyor
genel IP adresleri olmadan. Şirket genel veri aktarımını en aza indirmek istiyor
EC2 bulut sunucusu ile RDS bulut sunucusu arasındaki iletişim maliyetleri. Hangi çözüm
bu gereksinimi karşılayacak mı?

A) EC2 bulut sunucusunu, RDS bulut sunucusuyla aynı Erişilebilirlik Alanına dağıtın.

B) EC2 bulut sunucusunu ve RDS bulut sunucusunu,
aynı AWS Bölgesi

C) EC2 bulut sunucusu ile RDS bulut sunucusu arasındaki UDP bağlantısını yapılandırın.

D) EC2 örneği ile RDS örneği arasındaki IPv6 bağlantısını yapılandırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: EC2 ve RDS aynı Availability Zone içinde olursa aralarındaki trafik AZ'ler arası veri transferi ücretine tabi olmaz ve maliyet düşer. B seçeneği bileşenleri farklı AZ'lere ayırarak AZ'ler arası veri transferi ücretini artırır. C (UDP) ve D (IPv6) seçenekleri bağlantı protokolünü değiştirir; veri transferi maliyetini düşürmez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/eks/latest/best-practices/cost-opt-networking.html](https://docs.aws.amazon.com/eks/latest/best-practices/cost-opt-networking.html)

---

---

Soru 7 / 63 · Dosya: 7.jpeg · Soru 9/65

Bir şirket, Otomatik Ölçeklendirmede Amazon EC2 bulut sunucularından oluşan bir filo üzerinde bir uygulama çalıştırıyor
Application Load Balancer'ın (ALB) arkasındaki grup. Örnekler m5 büyük örneğini kullanıyor
türleri. Şirketin maliyetleri azaltmak için filoyu m6i büyük bulut sunucularına taşıması gerekiyor ve
Herhangi bir hizmet kesintisi olmadan performansı artırın. Bunları hangi çözüm karşılayacak?
EN AZ operasyonel gider gerektiren gereksinimler?

A) m6i büyük örneklerini kullanan yeni bir Otomatik Ölçeklendirme grubu oluşturun. Ağırlıklı hedef kullan
trafiği eski Otomatik Ölçeklendirme grubundan yeni gruba kaydırmak için ALB'deki gruplar

B) m6i büyük örneklerini belirtmek için başlatma şablonunu güncelleyin. Örnek yenilemeyi şu tarihte başlat:
Otomatik Ölçeklendirme grubu

C) AWS Systems Manager Patch Manager'da bir yama temeli oluşturun. Planlayın
Filo genelinde işletim sistemi ve yazılım yamalarını uygulamak için bakım penceresi

D) Örnek başlatıldığında örnek tipini değiştirmek için kullanıcı veri komut dosyasını değiştirin. Manuel olarak
Otomatik Ölçeklendirme grubunun yeniyi kullanan değiştirmeleri başlatması için örnekleri sonlandırın
örnek türü

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: Launch template'i m6i large türüne güncellemek ve Auto Scaling grubunda instance refresh başlatmak, örnekleri kademeli olarak yenileyerek kesintisiz geçiş sağlar ve ek altyapı yönetimi gerektirmez. A seçeneği yeni bir Auto Scaling grubu ve ağırlıklı hedef grupları gerektirir, bu da daha fazla işletme yükü getirir. C seçeneği yama yönetimi içindir ve instance türünü değiştirmez. D seçeneği user data değişikliğini mevcut örneklere uygulamaz ve örnekleri elle sonlandırmak kesinti riski taşır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-refresh-overview.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-refresh-overview.html)

---

---

Soru 8 / 63 · Dosya: 8.jpeg · Soru 10/65

Bir şirketin 250 GB'lık bir Amazon RDS Multi-AZ veritabanı bulut sunucusu var. Şirketin felaketi
kurtarma politikası, ikinci bir AWS Bölgesinde 6 saatlik bir RPO gerektirir. Hangi çözüm olacak
Bu gereksinimleri EN uygun maliyetle karşılayabilir misiniz?

A) RDS otomatik anlık görüntülerini kullanın. Anlık görüntüyü kopyalamak için bir AWS Lambda işlevi oluşturun
ikinci bir Bölgeye.

B) Her 6 saatte bir RDS otomatik anlık görüntülerini kullanın. Amazon S3 Bölgeler Arası Çoğaltma'yı kullanma
anlık görüntüyü ikinci bir Bölgeye kopyalamak için.

C) Her 6 saatte bir RDS anlık görüntüsü almak ve anlık görüntüyü bir klasöre kopyalamak için AWS Backup'ı kullanın.
ikinci Bölge.

D) İkinci bir Bölgede RDS Bölgeler arası okuma kopyası oluşturun. Aşağıdakileri almak için AWS Backup'ı kullanın:
her 6 saatte bir okuma kopyasının otomatik anlık görüntüsü.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C: AWS Backup ile her 6 saatte bir RDS snapshot alınıp ikinci Region'a kopyalanması 6 saatlik RPO'yu karşılar ve yönetilen yedekleme planıyla düşük maliyet ve işletme yüküyle çalışır. A seçeneği RDS otomatik snapshot'larına dayanır; bu snapshot'lar 6 saatlik RPO için yeterli sıklıkta alınmaz. B seçeneğinde RDS snapshot'ları S3 Cross-Region Replication ile kopyalanamaz. D seçeneği de çalışır ama ikinci Region'da sürekli çalışan bir okuma replikası gerektirdiği için daha pahalıdır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html)
>   - [https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html](https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html)
>   - [https://docs.aws.amazon.com/aws-backup/latest/devguide/creating-a-backup-plan.html](https://docs.aws.amazon.com/aws-backup/latest/devguide/creating-a-backup-plan.html)

---

---

Soru 9 / 63 · Dosya: 9.jpeg · Soru 11/65

Bir şirket, özel bir alt ağdaki Amazon EC2 bulut sunucularında bir uygulama çalıştırıyor.
uygulamanın Amazon S3 klasörlerinde veri depolaması ve alması gerekiyor. Mevzuata göre
gerekliliklere göre veriler halka açık internet üzerinden seyahat etmemelidir. Çözümler ne olmalı
Mimar bu gereksinimleri EN uygun maliyetle karşılamak için ne yapmalı?

A) S3 klasörlerine erişmek için bir NAT ağ geçidi dağıtın

B) S3 klasörlerine erişmek için AWS Storage Gateway'i dağıtın

C) S3 klasörlerine erişmek için bir S3 arayüzü uç noktası dağıtın

D) S3 klasörlerine erişmek için bir S3 ağ geçidi uç noktası dağıtın

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: S3 gateway endpoint, private subnet'teki EC2 örneklerinin S3'e erişimini VPC içinde AWS ağı üzerinden sağlar; veri genel internete çıkmaz ve gateway endpoint için ek ücret alınmaz. A seçeneği NAT gateway üzerinden internete çıkar ve ücretlidir. B seçeneği bu ihtiyaç için gereksiz bir hibrit depolama hizmetidir. C seçeneği S3 interface endpoint'tir; özel IP üzerinden çalışır ancak saatlik ve veri işleme ücreti getirir, bu nedenle en uygun maliyetli seçenek değildir.

---

---

Soru 10 / 63 · Dosya: 10.jpeg · Soru 12/65

Bir şirket, müşterilerin sipariş vermesine olanak sağlayacak bir e-ticaret platformu inşa ediyor
çevrimiçi. Müşteri trafiği önemli ölçüde değişiklik gösterir. Sipariş işleyen bir mikro hizmet çalışıyor
bir grup Amazon EC2 bulut sunucusu. Bir çözüm mimarı, uygulamanın
duyarlı kalır ve ön uçtan ayrılır. Uygulama aynı zamanda şunları yapabilmelidir:
Uygulamanın ilk denemede işleyemediği siparişleri yeniden işleyin. Hangi çözüm
bu gereksinimleri karşılayacak mı?

A) Sipariş işleme mikro hizmetinin önüne bir Application Load Balancer dağıtın.
Amazon EC2 bulut sunucularını CPU kullanımına göre otomatik olarak ölçeklendirilecek şekilde yapılandırma
trafik arttıkça metrikler

B) Ön uç ile sipariş işlemeyi entegre etmek için bir Amazon SQS kuyruğu dağıtın
mikro hizmet. Kuyruğa ileti göndermek için ön ucu yapılandırın. EC2'yi yapılandırma
kuyruktaki mesajları işlemek için örnekler

C) Ön uçtan mikro hizmete doğrudan HTTPS bağlantıları kurun. Bir kullanın
Mikro hizmet katmanında eşzamanlılığı yönetmek için iş parçacığı havuzunu dinamik olarak genişletiyor

D) Ön uçtan tüm sipariş isteklerini almak için Amazon Kinesis Data Streams'i kullanın.
Amazon EC2 bulut sunucularını sürekli olarak akışı yoklayacak ve siparişleri işleyecek şekilde yapılandırın
gerçek zamana yakın

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: SQS kuyruğu ön uç ile sipariş işleme mikro hizmetini birbirinden ayırır; mesajlar işlenene kadar dayanıklı biçimde kuyrukta kalır ve trafik dalgalanmaları kuyrukta tamponlanır. İşlenemeyen mesajlar dead-letter queue'ya taşınarak incelenebilir ve yeniden işlenebilir. A seçeneği yük dengeleme ve CPU tabanlı ölçekleme sağlar ama bileşenleri ayırmaz ve başarısız işlemleri yeniden işlemez. C seçeneği ön uç ile mikro hizmet arasında sıkı bağlantı kurar. D seçeneği Kinesis ile akış tabanlı bir yapı önerir, ancak istenen ayrıştırma ve başarısız siparişleri yeniden işleme gereksinimini standart SQS ve DLQ yapısı kadar doğrudan karşılamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)

---

---

Soru 11 / 63 · Dosya: 11.jpeg · Soru 13 / 65

Bir şirket, uygulamaları için veritabanı motoru olarak Amazon RDS for MySQL'i kullanıyor. Yakın zamanda
güvenlik denetimi, şirket politikasıyla uyumlu olmayan bir RDS örneğini ortaya çıkardı
atıl durumdaki verileri şifreleme. Şirketteki bir çözüm mimarının tüm
mevcut RDS veritabanları, sunucu tarafı şifreleme kullanılarak şifrelenir ve gelecekte
politikadan sapmalar tespit edilmektedir. Çözümler hangi adımların birleşiminden oluşmalıdır?
Mimarın bunu başarması gerekiyor mu? (İKİ'yi seçin.)

A) Şifrelenmemiş RDS veritabanlarının oluşturulduğunu tespit etmek için bir AWS Config kuralı oluşturun. Oluştur
AWS Config kuralları uyumluluk durumu değişikliğinde tetiklenecek bir Amazon EventBridge kuralı
ve güvenlik operasyonları ekibini bilgilendirmek için Amazon SNS'yi kullanın.

B) RDS veritabanı şifrelemesini tespit etmek için AWS Systems Manager State Manager'ı kullanın
konfigürasyon kayması. Durum değişikliklerini izlemek ve kullanmak için bir Amazon EventBridge kuralı oluşturun
Amazon SNS'in güvenlik operasyonları ekibini bilgilendirmesi.

C) Mevcut şifrelenmemiş RDS veritabanı için bir okuma kopyası oluşturun ve kopyayı etkinleştirin
süreçte şifreleme. Replika aktif hale geldiğinde onu bağımsız bir hale getirin
veritabanı örneğini kullanın ve şifrelenmemiş veritabanı örneğini sonlandırın.

D) Şifrelenmemiş RDS veritabanının anlık görüntüsünü alın. Anlık görüntüyü kopyalayın ve etkinleştirin
işlem sırasında anlık görüntü şifrelemesi. Veritabanı örneğini yeni oluşturulandan geri yükleyin
şifrelenmiş anlık görüntü Şifrelenmemiş veritabanı örneğini sonlandırın.

E) Belirlenen şifrelenmemiş RDS örneği için şifrelemeyi,
Mevcut veritabanının yapılandırmaları.

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A ve D doğrudur. A, AWS Config kuralıyla şifrelenmemiş RDS veritabanlarını tespit edip uyumluluk durumu değişikliğini EventBridge ve SNS üzerinden bildirir; D, anlık görüntünün şifreli kopyasıyla yeni bir örnek geri yükleyerek mevcut veritabanını şifreler. C yanlıştır, çünkü şifrelenmemiş bir DB örneğinden şifreli okuma kopyası oluşturulamaz. E yanlıştır, çünkü mevcut bir RDS örneğinin şifrelemesi sonradan değiştirilemez; B ise State Manager ile RDS şifreleme sapmasını izlemek için uygun bir yöntem değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html)
>   - [https://docs.aws.amazon.com/config/latest/developerguide/monitor-config-with-cloudwatchevents.html](https://docs.aws.amazon.com/config/latest/developerguide/monitor-config-with-cloudwatchevents.html)

---

---

Soru 12 / 63 · Dosya: 12.jpeg · Soru 14/65

Bir e-ticaret şirketi envanteri, siparişi ve kullanıcı bilgilerini birden fazla Amazon'da saklıyor
Kırmızıya kayma kümeleri. Redshift kümeleri şirketin güvenlik politikalarına uymalıdır.
Şirket, herhangi bir güvenlik yapılandırması ihlaliyle ilgili bildirim almalıdır. hangisi
çözüm bu gereksinimleri karşılayacak mı?

A) Redshift kümelerini kaynak olarak kullanan bir Amazon EventBridge kuralı oluşturun.
Redshift kümesi güvenlik yapılandırmasını değerlendirmek için bir AWS Lambda işlevi oluşturun.
Herhangi bir güvenlik ihlali durumunda şirketi bilgilendirmek için Lambda işlevini yapılandırın
politikalar. Lambda işlevini EventBridge kuralının hedefi olarak ekleyin.

B) Redshift kümesi güvenliğinin geçerliliğini kontrol etmek için bir AWS Lambda işlevi oluşturun
konfigürasyonlar. Aşağıdaki durumlarda Lambda işlevini çağıran bir Amazon EventBridge kuralı oluşturun:
Kırmızıya kayma kümeleri oluşturulur. Güvenlik politikalarına ilişkin ihlalleri şirkete bildirin.

C) Kümeyi izlemek için şirketin AWS hesabında Amazon Redshift Advisor'ı kurun
konfigürasyonlar. Redshift Advisor'ı, güvenlik öğeleri için bildirimler oluşturacak şekilde yapılandırın.
şirketin adresi olmalıdır.

D) Redshift kümelerini herhangi bir ihlale karşı kontrol etmek için bir AWS Lambda işlevi oluşturun.
güvenlik yapılandırmaları. Lambda işlevini çağırmak için bir AWS Config özel kuralı oluşturun
Redshift kümesi güvenlik yapılandırmaları değiştirildiğinde. Uyumluluk durumunu sağlayın
her Redshift kümesini AWS Config'e aktarın. AWS Config'i şirketi herhangi bir durumda bilgilendirecek şekilde yapılandırın.
Güvenlik politikalarının ihlalleri.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D doğrudur: AWS Config özel kuralı, Redshift küme güvenlik yapılandırması değiştiğinde Lambda fonksiyonunu tetikler; fonksiyon uyumluluk sonucunu Config'e bildirir ve Config ihlallerde bildirim gönderir. A ve B, kümelerin yalnızca belirli olaylarda (örneğin oluşturulma) izlenmesine dayanır ve sürekli yapılandırma uyumluluğunu kapsamaz. C yanlıştır, çünkü Redshift Advisor performans ve maliyet önerileri sunar; güvenlik ihlali bildirimi için tasarlanmamıştır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules_lambda-functions.html](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules_lambda-functions.html)
>   - [https://docs.aws.amazon.com/redshift/latest/dg/advisor-recommendations.html](https://docs.aws.amazon.com/redshift/latest/dg/advisor-recommendations.html)
>   - [https://docs.aws.amazon.com/config/latest/developerguide/monitor-config-with-cloudwatchevents.html](https://docs.aws.amazon.com/config/latest/developerguide/monitor-config-with-cloudwatchevents.html)

---

---

Soru 13 / 63 · Dosya: 13.jpeg · Soru 15/65

Bir sağlık şirketi, Amazon EC2 bulut sunucularında bir hasta portalı uygulaması barındırıyor.
Amazon Route 53 kullanıcı isteklerini yönlendirir. Kullanıcılar erişim sırasında aralıklı hatalar bildiriyor
uygulama özellikleri. Şirket, Route 53'ün IP adreslerini döndürdüğünü keşfeder.
Yanıt vermeyen uygulama süreçlerine sahip örnekler. Şirketin bir çözüme ihtiyacı var
uygulamanın yanıt verebilirliğini doğrular ve istekleri yalnızca sağlıklı örneklere yönlendirir. hangisi
çözüm bu gereksinimleri karşılayacak mı?

A) Her EC2 bulut sunucusu için bir Route 53 basit yönlendirme politikası kaydı oluşturun. İlişkilendir
Her kayıtla sağlık kontrolü.

B) Her EC2 bulut sunucusu için bir Route 53 yük devretme yönlendirme politikası kaydı oluşturun. İlişkilendir
Her kayıtla sağlık kontrolü.

C) Kaynağı EC2 bulut sunucuları olan bir Amazon CloudFront dağıtımı oluşturun. İlişkilendir
EC2 bulut sunucularıyla durum kontrolü.

D) EC2'nin önünde durum denetimi içeren bir Uygulama Yük Dengeleyicisi (ALB) oluşturun
örnekler. Route 53'ten ALB'ye giden rota.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D doğrudur: Application Load Balancer, sağlık kontrolleriyle yanıt vermeyen EC2 örneklerini trafik dışı bırakır ve Route 53 yalnızca ALB'yi gösterir; böylece istekler yalnızca sağlıklı örneklere gider. A ve B, her EC2 örneği için ayrı DNS kaydı yönetmeyi gerektirir ve uygulamanın yanıt verebilirliğini yük dengeleme katmanında doğrulamaz. C, CloudFront'un EC2 kökenine sağlık kontrolüyle yönlendirme yapması bu senaryoda uygun bir çözüm değildir.

---

---

Soru 14 / 63 · Dosya: 14.jpeg · Soru 16/65

Bir şirket, AWS'yi şifrelemek için AWS Key Management Service (AWS KMS) anahtarlarını kullanıyor
Lambda ortam değişkenleri. Bir çözüm mimarının gerekli özellikleri sağlaması gerekir.
ortam değişkenlerinin şifresini çözmek ve kullanmak için izinler mevcuttur. Hangi adımların atılması gerekiyor
mimarın doğru izinleri uygulamak için kullandığı çözümler? (İKİ'yi seçin.)

A) Lambda kaynak politikasına AWS KMS izinlerini ekleyin.

B) Lambda yürütme rolüne AWS KMS izinlerini ekleyin.

C) Lambda işlev politikasına AWS KMS izinlerini ekleyin.

D) AWS KMS anahtar politikasında Lambda yürütme rolüne izin verin.

E) AWS KMS anahtar politikasında Lambda kaynak politikasına izin verin.

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B ve D doğrudur: Lambda execution role'üne KMS anahtarını kullanma izni eklenir ve KMS anahtar politikasında bu execution role yetkilendirilir; böylece fonksiyon ortam değişkenlerini çözebilir. A ve C, KMS izinlerini Lambda resource/function policy'ye eklemeyi önerir; bu, KMS anahtarını çözme yetkisinin verildiği yer değildir. E yanlıştır, çünkü KMS anahtar politikasında resource policy değil execution role principal olarak yetkilendirilir.

---

---

Soru 15 / 63 · Dosya: 15.jpeg · Soru 17/65

Bir medya şirketi, Amazon ElastiCache'i kullanarak üretim Node.js uygulamasını çalıştırıyor
(Redis OSS) bir önbellek.m7g.large düğümünde. Önbellek talebi iş saatlerinde zirveye çıkıyor ancak
bir gecede önemli ölçüde düşer. Şirket önbelleği otomatik olarak ölçeklendirmek istiyor
uygulama değişikliklerini en aza indirirken iş yükü talebine göre. Hangi çözüm olacak
Bu gereksinimleri EN uygun maliyetle karşılayabilir misiniz?

A) Önbelleği Valkey için ElastiCache Serverless'a taşıyın.

B) Önbelleği, iki büyük düğüme sahip bir ElastiCache (Memcached) kümesine taşıyın.

C) Mevcut önbelleği koruyun. Kümeleri yoğun saatlerden önce ve sonra yeniden boyutlandırmak için komut dosyalarını kullanın.

D) Önbelleği ElastiCache (Memcached) olarak yeniden platformlayın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A doğrudur: ElastiCache Serverless for Valkey, kapasiteyi talebe göre otomatik ölçekler ve yalnızca kullanılan veri ve istekler için ödeme yapılmasını sağlar; Valkey 7.2 Redis OSS 7.2 özelliklerini içerdiğinden uygulama değişikliği de sınırlı kalır. B ve D, Memcached'e geçişi gerektirir; bu veri modeli ve istemci değişikliği demektir ve talebe göre otomatik ölçekleme sağlamaz. C, betiklerle elle boyutlandırmayı önerir; bu operasyonel yük getirir ve otomatik uyum sağlamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.deployment.html](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.deployment.html)
>   - [https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html)

---

---

Soru 16 / 63 · Dosya: 16.jpeg · Soru 18/65

Bir şirketin AWS Lambda işlevlerini temel alan durum bilgisiz bir genel web uygulaması var
Amazon API Gateway REST API tarafından çağrılanlar. Yüksek kullanılabilirliğe ulaşmak için,
şirket uygulamayı birden fazla AWS Bölgesine dağıtır. Şirketin bir çözüme ihtiyacı var
uygulama trafiğini birden çok Bölgeye yönlendirmek için. Bu gereksinimi hangi çözüm karşılayacak?

A) Yük devretme yönlendirme politikası kullanan bir Amazon Route 53 DNS kaydını yapılandırın. Oluştur
Her uygulama uç noktası için durum denetimleri. Aktif-aktif yük devretme yapılandırmasını kullanın.

B) Bir Amazon Route 53 Resolver giden uç noktası oluşturun. İstemcileri kullanacak şekilde yapılandırın
Yerel REST API DNS adını çözümlemek için çözümleyici uç noktası.

C) Bir transit ağ geçidi oluşturun. Geçiş ağ geçidini her birindeki REST API uç noktasına ekleyin.
Bölge. İstekleri yönlendirmek için transit ağ geçidini yapılandırın.

D) Birincil Bölgede bir Application Load Balancer oluşturun. Bunu sağlayacak bir hedef grup oluşturun
her Bölge için REST API uç noktası ana bilgisayar adlarını içerir.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A doğrudur: Route 53 DNS kaydında failover politikası, her uygulama uç noktası için sağlık kontrolü ve aktif-aktif yapılandırma ile trafik sağlıklı Region'lara dağıtılır. B, Resolver outbound endpoint'i VPC'lerden DNS çözümlemesi için kullanılır; Region'lar arası uygulama trafiğini yönlendirmez. C, transit gateway ağ bağlantısı içindir ve API Gateway uç noktalarına çok Region yönlendirme sağlamaz. D, ALB tek Region'da çalışır ve API hostname'lerini Region'lar arası aktif-aktif yönlendirme için uygun biçimde yönetmez.

---

---

Soru 17 / 63 · Dosya: 17.jpeg · Soru 19/65

Bir şirket yeni bir uygulama geliştiriyor. Uygulama Amazon EC2 bulut sunucularında çalışır
ve belge depolama için bir Amazon S3 klasörü kullanır. Şirketin bunu sağlaması gerekiyor
EC2 bulut sunucuları S3 klasörüne erişebilir. Bu gereksinimleri hangi çözüm karşılayacak?

A) S3 paketine erişim izni veren bir IAM rolü oluşturun. İzin vermek için güven politikasını güncelleyin
Amazon EC2 bu rolü üstlenecek. Bulut sunucusu profilini EC2 bulut sunucularıyla ilişkilendirin.

B) S3 paketine erişim izni veren bir IAM politikası oluşturun. Güven politikasını şu şekilde güncelleyin:
Amazon EC2'nin rolü üstlenmesine izin verin. Politikayı EC2 bulut sunucularına ekleyin.

C) S3 paketine erişim izni veren bir IAM grubu oluşturun. Grubu EC2'ye ekleyin
örnekler.

D) S3 klasörüne erişim izni veren bir IAM kullanıcısı oluşturun. Kullanıcı hesabını şuraya ekleyin:
EC2 örnekleri.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A doğrudur: IAM rolü S3 erişim izinlerini taşır, güven politikası EC2 servisinin rolü üstlenmesine izin verir ve instance profile ile EC2 örneklerine bağlanır. B, bir IAM politikası EC2 örneğine doğrudan eklenemez; güven politikası yalnızca roller için geçerlidir. C ve D, IAM gruplarının ve kullanıcılarının EC2 örneklerine atanamaması nedeniyle yanlıştır ve uzun süreli erişim anahtarı yönetimi gerektirir.

---

---

Soru 18 / 63 · Dosya: 18.jpeg · Soru 20/65

Bir şirket AWS Systems Manager Varsayılan Ana Bilgisayar Yönetimi Yapılandırmasını etkinleştirdi
Ayar. Şirketin Amazon EC2 Linux örnekleri, yönetilen düğümler olarak kayıtlıdır.
Sistem Yöneticisi Filo Yöneticisi. Bir güvenlik politikasına göre EC2 bulut sunucularının
özel alt ağlarda. Güvenlik gruplarının SSH bağlantı noktası açık olmamalıdır. Hangi çözüm
EC2 bulut sunucularına bağlanmanın EN güvenli yolu?

A) Genel bir alt ağda bulunan bir savunma ana bilgisayarını kullanın.

B) Yerel bir istemci kullanarak Telnet protokolünü kullanın.

C) EC2 Örnek Bağlantısını kullanın.

D) Systems Manager Oturum Yöneticisini kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D doğrudur: Session Manager, açık gelen port, bastion host veya SSH anahtarı gerektirmeden IAM izinleriyle yönetilen düğümlere erişim sağlar ve özel alt ağdaki örneklerle de çalışır. A, genel alt ağdaki bir bastion host'u ve dolayısıyla SSH erişim yolunu gerektirir. B, şifrelenmemiş Telnet protokolünü kullanır. C, EC2 Instance Connect SSH üzerinden bağlandığı için politikanın yasakladığı SSH erişim yolunu kullanır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html)

---

---

Soru 19 / 63 · Dosya: 19.jpeg · Soru 21/65

Bir şirket, benzersiz etkinlikleri birden fazla kişiye göndermesi gereken bir oyun uygulaması geliştiriyor
Liderlik tabloları, oyuncu eşleştirme sistemleri ve kimlik doğrulama hizmetleri aynı anda.
Şirket, olayları düzenli ve düzenli bir şekilde ileten AWS tabanlı olay odaklı bir sisteme ihtiyaç duyuyor
yayınlama abone olma modelini destekler. Oyun uygulamasının yayıncı olması gerekir ve
Liderlik tabloları, eşleştirme sistemleri ve kimlik doğrulama hizmetleri,
aboneler. Bu gereksinimleri hangi çözüm karşılayacak?

A) Amazon EventBridge olay veri yolları

B) Amazon SNS FIFO konuları

C) Amazon SNS standart konuları

D) Amazon SQS FIFO kuyrukları

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B doğrudur: SNS FIFO konuları, mesajları sıra korunarak yayınlar ve birden çok aboneye (liderlik tablosu, eşleştirme, kimlik doğrulama) iletir. A, EventBridge event bus'ın sıralama garantisi vermez. C, standart SNS konuları sırayı garanti etmez. D, SQS FIFO kuyruğu noktadan noktaya tüketim modeline dayanır ve birden çok aboneye yayın için tek başına uygun değildir.

---

---

Soru 20 / 63 · Dosya: 20.jpeg · Soru 22 / 65

Bir şirket, farklı uygulama ekipleri için birden fazla AWS hesabını tek bir platformda yönetiyor
AWS Organizasyonlarındaki organizasyon. Finans ekibinin AWS maliyetlerini şu şekilde dağıtması gerekiyor:
kuruluş genelinde uygulama ve sahibi. Şirket ekiplerin bunu yapmasını engellemek istiyor
Ekipler gerekli maliyet tahsis etiketlerini şu anda sağlamadığı sürece desteklenen kaynaklar oluşturmak
yaratılış zamanı. Şirket, Organizasyonlar etiketinde gerekli etiket anahtarlarını tanımladı
politikalar. Bu gereksinimleri hangi çözüm karşılayacak?

A) Etiketleri maliyet tahsis etiketleri olarak etkinleştirin. Maliyetleri etikete göre gruplandırmak için AWS Cost Explorer'ı kullanın.

B) Her uygulama ve sahip için AWS Budgets'ta bütçeler oluşturun. AWS Maliyet Gezgini'ni kullanın
Maliyetleri etikete göre gruplandırmak için.

C) Gerekli etiketlere sahip olmayan kaynakları tespit etmek için AWS Config kurallarını kullanın. Etkinleştir
Etiketleri maliyet tahsis etiketleri olarak kullanın. Maliyetleri etikete göre gruplandırmak için AWS Cost Explorer'ı kullanın.

D) Hizmet kontrol ilkelerini (SCP'ler) kullanarak gerekli etiketleri oluşturma sırasında uygulayın.
Etiketleri maliyet tahsis etiketleri olarak etkinleştirin. Maliyetleri etikete göre gruplandırmak için AWS Cost Explorer'ı kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D doğrudur: Organizations tag politikaları tag değerlerini denetler ancak eksik tag anahtarı içeren kaynağın oluşturulmasını engellemez; bunu SCP'de aws:RequestTag koşullarıyla sağlamak gerekir. Tag'lerin faturalama raporlarında görünmesi için etkinleştirilmeleri gerekir ve Cost Explorer'da tag'e göre gruplanabilir. A tag'leri etkinleştirir ama oluşturmayı engellemez; B, bütçeler kaynak oluşturmayı kısıtlamaz; C, AWS Config yalnızca oluşturma sonrasında tespit eder.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-enforcement.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-enforcement.html)
>   - [https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/implementing-and-enforcing-tagging.html](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/implementing-and-enforcing-tagging.html)
>   - [https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html)

---

---

Soru 21 / 63 · Dosya: 21.jpeg · Soru 23 / 65

Bir e-ticaret şirketi, şirketin kullanıcı tıklama akışı verilerini toplamak istiyor
Gerçek zamanlı analiz için web sitesi. Web sitesinde dalgalanan trafik modelleri yaşanıyor
gün boyunca. Şirketin değişen koşullara uyum sağlayabilecek ölçeklenebilir bir çözüme ihtiyacı var
trafik seviyeleri. Bu gereksinimleri hangi çözüm karşılayacak?

A) Amazon Kinesis Data Streams'deki bir veri akışını isteğe bağlı modda kullanarak,
tıklama akışı verileri. Verileri gerçek zamanlı olarak işlemek için AWS Lambda'yı kullanın.

B) Tıklama akışı verilerini yakalamak için Amazon Data Firehose'u kullanın. İşlemek için AWS Glue'yu kullanın
verileri gerçek zamanlı olarak

C) Tıklama akışı verilerini yakalamak için Amazon Kinesis Video Streams'i kullanın. AWS Glue'yu kullanarak
Verileri gerçek zamanlı olarak işleyin.

D) Apache Flink için Amazon Yönetilen Hizmetini kullanın (önceden Amazon Kinesis olarak biliniyordu)
Veri Analizi) tıklama akışı verilerini yakalamak için. Verileri işlemek için AWS Lambda'yı kullanın
gerçek zamanlı.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: Kinesis Data Streams on-demand modu trafik değişimine göre kapasiteyi otomatik ölçeklendirir ve Lambda ile veri gerçek zamanlı işlenebilir. B'deki Firehose tamponlayarak teslim eden bir servistir ve Glue toplu ETL içindir, gerçek zamanlı işleme için uygun değildir. C'deki Kinesis Video Streams video ve medya akışları içindir. D'deki Managed Service for Apache Flink bir işleme motorudur, veri yakalama servisi değildir.

---

---

Soru 22 / 63 · Dosya: 22.jpeg · Soru 24/65

Bir şirket, kullanıcılara kaydolma ve
kişisel bilgileri saklayın. Uygulama, verileri kullanarak bir kredi puanı raporu oluşturur.
DynamoDB'de depolanır. Uygulama, kullanıcı ayrıntılarını depolamak için bir Amazon DynamoDB tablosu kullanıyor
ve tercihler. Uygulama, kullanıcılara ayda bir kez kredi puanı raporu gönderiyor.
Şirketin kullanıcılara verilerini ve tercihlerini kaldırma seçeneği sunması gerekiyor.
Uygulama, verilerin silinmesine yönelik bir talep aldıktan sonra bir ay içinde müşteri verilerini silmek zorundadır.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A) Kullanıcı bilgilerini silmek için bir AWS Lambda işlevi oluşturun. Bir Amazon oluşturun
Belirtilen bir TTL'nin süresi dolduğunda çalışan EventBridge kuralı. EventBridge kuralını şu şekilde yapılandırın:
Lambda işlevini çağırın.

B) Bir DynamoDB akışı oluşturun. Kullanıcıyı silmek için bir AWS Lambda işlevi oluşturun
bilgi. Belirtilen bir TTL'nin süresi dolduğunda kullanıcı bilgilerini DynamoDB akışına yazın
DynamoDB tablosundan. DynamoDB akışını Lambda işlevini çağıracak şekilde yapılandırma
Kullanıcı bilgilerini silmek için.

C) DynamoDB'de TTL'yi etkinleştirin. Son kullanma tarihini bir özellik olarak ayarlayın. Bir AWS oluşturun
TTL'yi son kullanma tarihi değerine göre ayarlamak için Lambda işlevi. Lambda'yı çağır
Bir kullanıcı kişisel verileri silmek istediğinde işlev görür.

D) DynamoDB'de TTL'yi etkinleştirin. Kullanıcı bilgilerini silmek için bir AWS Lambda işlevi oluşturun.
AWS Config'i, TTL'nin süresi dolduğunda DynamoDB aşama değişikliğini algılayacak ve
Lambda işlevini çağırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C: TTL özniteliği kullanıcı silme talebi geldiğinde Lambda ile ayarlanır ve DynamoDB süresi dolan kayıtları birkaç gün içinde otomatik siler; bu, bir aylık süre sınırını karşılar ve en az operasyonel yük getirir. A ve B, ek EventBridge kuralı ya da Stream ve ikinci bir Lambda tüketicisi gibi fazladan bileşen ekler. D'deki AWS Config, DynamoDB TTL süre dolumunu algılamak için uygun bir mekanizma değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-streams.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-streams.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)

---

---

Soru 23 / 63 · Dosya: 23.jpeg · Soru 25/65

Bir şirket, Amazon EC2 bulut sunucularında çeşitli özel uygulamalar çalıştırıyor. Her takım kendi bünyesinde
şirket kendi uygulama ve yedekleme setini yönetmektedir. uymak
düzenlemelere göre şirket, yedeklemelerin durumu hakkında rapor verebilmeli ve
yedeklemeler şifrelenir. Hangi çözüm bu gereksinimleri EN AZ ile karşılayacak?
çaba mı?

A) AWS Config olaylarını işleyen bir AWS Lambda işlevi oluşturun. Yapılandır
Yedeklemeyle ilgili veriler için AWS Config'i sorgulamak ve günlük olarak veri oluşturmak için Lambda işlevi
raporlar.

B) Yedeği inceleyerek EC2 bulut sunucularının yedekleme durumunu günlük olarak kontrol edin
AWS Backup ve Amazon EBS anlık yedeklerindeki yapılandırmalar.

C) Amazon EBS anlık yedeklerini, Amazon RDS anlık yedeklerini sorgulamak için bir AWS Lambda işlevini kullanın,
ve AWS Yedekleme işleri. Verileri işlemek ve raporlamak için Lambda işlevini yapılandırın.
İşlevi günlük olarak çalışacak şekilde planlayın.

D) Uyumluluğu sağlamak için AWS Config ve AWS Backup Audit Manager'ı kullanın. İncele
günlük raporlar oluşturduk.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: AWS Backup Audit Manager, 'Recovery points are encrypted' gibi kontrolleri içeren çerçevelerle günlük uyumluluk raporları üretir ve en az çaba gerektirir. A ve C, kendi Lambda kodunu yazmayı ve bakımını yapmayı gerektirir. B ise her gün elle inceleme yapılmasını istediği için en fazla çabayı gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/aws-backup/latest/devguide/controls-and-remediation.html](https://docs.aws.amazon.com/aws-backup/latest/devguide/controls-and-remediation.html)
>   - [https://docs.aws.amazon.com/aws-backup/latest/devguide/choosing-report-template.html](https://docs.aws.amazon.com/aws-backup/latest/devguide/choosing-report-template.html)

---

---

Soru 24 / 63 · Dosya: 24.jpeg · Soru 26/65

Bir şirketin sipariş işleme sistemi Amazon EC2 bulut sunucularında çalışır. EC2 örnekleri
Amazon SQS kuyruğundaki siparişleri tüketin ve işlenen mesajları Amazon SQS kuyruğundan kaldırın
kuyruk. EC2 bulut sunucuları her siparişi envanter kayıtlarına göre doğrular ve siparişin yerine getirilmesini sürdürür
Kararları Amazon RDS veritabanına aktarın. Şirket, yinelenen onay girişlerini rapor ediyor
RDS veritabanı. Ancak SQS kuyruğunda yinelenen iletiler gösterilmiyor. Hangi çözüm
RDS veritabanındaki yinelenen veritabanı girişlerini önleyecek mi?

A) Yeni bir kuyruk hazırlamak için CreateQueue API çağrısını kullanın.

B) İşleme izinleri vermek için AddPermission API çağrısını kullanın.

C) Uzun yoklama davranışını yapılandırmak için ReceiveMessage API çağrısını kullanın.

D) Görünürlük zaman aşımını uzatmak için ChangeMessageVisibility API çağrısını kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: SQS'te işlenmekte olan bir mesaj görünürlük zaman aşımı dolmadan silinmezse yeniden kullanıma açılır ve tekrar alınıp işlenebilir. ChangeMessageVisibility ile zaman aşımı işlem bitene kadar uzatılırsa aynı sipariş ikinci kez işlenmez ve RDS'te çift kayıt oluşmaz. A yeni kuyruk oluşturur, B izin verir, C ise uzun yoklama davranışını ayarlar; hiçbiri çift işlemeyi önlemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)

---

---

Soru 25 / 63 · Dosya: 25.jpeg · Soru 27/65

Bir şirket, AWS Hesabı A'da AWS Lambda işlevlerini kullanıyor.
AWS hesabı B'deki Amazon S3 klasörü. A hesabındaki Lambda işlevinin okunması gerekiyor
B hesabındaki S3 klasöründeki nesneler. Bir çözüm mimarının güvenli bir çözüm tasarlaması gerekir.
hesaplar arası erişim için çözüm sunar ve en az ayrıcalık ilkesini korur. hangisi
çözüm bu gereksinimleri karşılayacak mı?

A) B hesabında gerekli S3 izinlerine ve güvene sahip bir IAM rolü oluşturun
A hesabıyla ilişki. Lambda işlevini bu IAM rolünü üstlenecek şekilde yapılandırın.

B) A hesabında gerekli S3 izinlerine ve güvene sahip bir IAM rolü oluşturun
B hesabıyla ilişki. B hesabında aşağıdakileri üstlenme iznine sahip bir IAM kullanıcısı oluşturun:
bu IAM rolü. Bu IAM kullanıcısını kullanmak için Lambda işlevini yapılandırın.

C) B hesabında gerekli S3 izinlerine ve güvene sahip bir IAM kullanıcısı oluşturun
A hesabıyla ilişki. A hesabında aşağıdakileri üstlenme iznine sahip bir IAM kullanıcısı oluşturun:
B hesabı kullanıcısı. A kullanıcısını kullanmak için Lambda işlevini yapılandırın.

D) B hesabında gerekli S3 izinlerine ve güvene sahip bir IAM rolü oluşturun
A hesabıyla ilişki. A hesabında aşağıdakileri üstlenme iznine sahip bir IAM kullanıcısı oluşturun:
bu IAM rolü. Bu IAM kullanıcısını kullanmak için Lambda işlevini yapılandırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: S3 bucket'ın bulunduğu hesap B'de, hesap A'ya güvenen ve gerekli S3 izinlerine sahip bir IAM rolü oluşturulur; Lambda fonksiyonu bu rolü üstlenerek yalnızca gerekli erişimi kullanır. B, C ve D'de IAM kullanıcıları ve uzun ömürlü erişim anahtarları kullanılır, bu da en az ayrıcalık ilkesine ve güvenli kimlik yönetimine daha az uygundur.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html)

---
