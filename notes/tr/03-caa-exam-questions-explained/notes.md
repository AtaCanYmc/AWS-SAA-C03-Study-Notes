# CAA Sınav Soruları - Resmi Referanslı ve Açıklamalı - Tam Notlar

> 63 temel sınav senaryosu, detaylı Türkçe çözüm gerekçeleri ve doğrudan resmi AWS dokümantasyon bağlantıları.

[← Modül Ana Sayfası](./README.md) | [← Ana Depoya Dön](../../../README.md)

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

---

Soru 51 / 63 ·

Dosya: 51.jpeg · Soru 53 / 65

Bir şirket şu anda bir AWS'deki Amazon S3 klasöründe 500 belge saklıyor
Bölge. Şirket gelecekte yeni belgeler oluşturacak. Yeni belgeler gelecek
Boyutu 5 KB ile 4 GB arasında olmalıdır. Şirket, mevcut ve gelecekteki tüm
belgeler her zaman birden fazla Bölgede saklanır. Hangi çözüm kombinasyonu
Bu gereksinimleri EN AZ operasyonel çabayla karşılıyor musunuz? (İKİ'yi seçin.)

A) S3 Event Notifications tarafından çağrılan bir AWS Lambda işlevi oluşturun. Yapılandır
her belgeyi orijinal S3 klasöründen S3 klasörüne bir saniyede kopyalama işlevi
Bölge.

B) Her 15 dakikada bir çalışan bir AWS Batch işi oluşturun. Toplu iş işini kullanacak şekilde yapılandırın.
Yeni belgeleri ikinci bir Bölgedeki bir S3 klasörüne kopyalamak için S3 CopyObject API.

C) Mevcut belgeleri çoğaltmak için mevcut S3 klasöründe S3 Toplu Çoğaltmayı kullanın
ikinci bir Bölgedeki ikinci bir S3 paketine.

D) Kaynağa bir çoğaltma yapılandırması ekleyerek S3 Bölgeler Arası Çoğaltmayı etkinleştirin
S3 kovası.

E) Mevcut belgeleri bir saniyede bir S3 klasörüyle senkronize etmek için AWS DataSync'i kullanın
Bölge.

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C ve D dogrudur. S3 Cross-Region Replication (D), kaynak bucket'a replikasyon yapilandirmasi eklendiginde yeni nesneleri ikinci Region'a otomatik kopyalar; S3 Batch Replication (C) ise replikasyon yapilandirmasi varken mevcut nesneleri de kopyalar, boylece hem mevcut hem gelecekteki belgeler coklu Region'da tutulur. A, B ve E ozel kod, zamanlanmis isler veya elle senkronizasyon gerektirdigi icin daha fazla operasyonel cabayi gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html)

---

---

Soru 52 / 63 · Dosya: 52.jpeg · Soru 54 / 65

Bir hukuk firması müvekkil vaka dosyalarını Amazon EFS'de saklıyor. Hukuk firması dosya sistemini korumalıdır
Yasal gerekliliklere uymak için 7 yıl boyunca yedeklenir. Bunları hangi çözüm karşılayacak?
EN AZ operasyonel gider gerektiren gereksinimler?

A) Dosya sistemini sürekli olarak yedeklemek için Amazon EFS otomatik yedeklemelerini kullanın.

B) Dosya sistemi için yedekleme programları ve saklama politikaları oluşturmak için AWS Backup'ı kullanın.

C) Dosyaları EFS dosya sisteminden Amazon S3'e kopyalamak için bir AWS Lambda işlevi oluşturun
günlük kova. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

D) Bir AWS Lambda işlevini çağıran bir Amazon EventBridge kuralı oluşturun. Yapılandır
EFS yedekleri oluşturmak ve yedekleri Amazon S3'te depolamak için Lambda işlevi
kova. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B dogrudur: AWS Backup ile yedekleme plani olusturup her yedek icin saklama suresini tanimlamak, yonetilen bir cozumle yedekleme ve saklama yonetimi saglar. A'daki EFS otomatik yedeklemeleri varsayilan olarak 35 gun saklanir, bu nedenle 7 yillik saklama gereksinimini karsilamaz. C ve D, Lambda kodu, zamanlama ve S3 yasam dongusu kurallari gibi ek bilesenler gerektirdigi icin daha fazla operasyonel yuk getirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html)

---

---

Soru 53 / 63 · Dosya: 53.jpeg · Soru 55/65

Bir şirket, tıklama akışı verilerini işleyebilmek için sunucusuz bir uygulama geliştiriyor.
web sitesi. Tıklama akışı verileri Amazon Kinesis Data Streams veri akışına şu adresten gönderilir:
uygulama web sunucuları. Şirket, katılma yoluyla tıklama akışı verilerini zenginleştirmek istiyor
Amazon Aurora Multi-AZ veritabanındaki müşteri profili verilerini içeren tıklama akışı verileri.
Şirket, zenginleştirilmiş verileri analiz etmek için Amazon Redshift'i kullanmak istiyor. Çözüm
yüksek oranda kullanılabilir olmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A) Tıklama akışı verilerini işlemek ve zenginleştirmek için bir AWS Lambda işlevini kullanın. Aynısını kullan
Tıklama akışı verilerini Amazon S3'e yazmaya yönelik Lambda işlevi. Amazon Redshift'i kullanın
Amazon S3'te zenginleştirilmiş verileri sorgulamak için Spectrum.

B) Veri akışını yoklamak ve tıklama akışını zenginleştirmek için bir Amazon EC2 Spot bulut sunucusu kullanın
veri. EC2 örneğini, zenginleştirilmiş sonuçları göndermek üzere COPY komutunu kullanacak şekilde yapılandırın
Amazon Kırmızıya Kayma.

C) Veri akışını yoklamak için AWS Fargate Spot kapasitesine sahip bir Amazon ECS görevi kullanın ve
tıklama akışı verilerini zenginleştirin. EC2 örneğini göndermek için COPY komutunu kullanacak şekilde yapılandırın
zenginleştirilmiş sonuçları Amazon Redshift'e aktarın.

D) Tıklama akışı verilerini Kinesis Data Streams'ten yüklemek için Amazon Data Firehose'u kullanın.
Amazon S3. Şemayı çıkarmak ve AWS Glue Verilerini doldurmak için AWS Glue tarayıcılarını kullanın
Katalog. Amazon S3'teki ham verileri sorgulamak için Amazon Athena'yı kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A dogrudur: AWS Lambda sunucusuz oldugu icin gereksinimle uyumludur; Lambda veriyi zenginlestirip S3'e yazar ve Amazon Redshift Spectrum, zenginlestirilmis veriyi S3 uzerinde yukleme yapmadan sorgular. B ve C, EC2 Spot veya Fargate Spot gibi sunucu tabanli bilesenler ve EC2 instance'ina atifla COPY komutu kullandigi icin sunucusuz sartini karsilamaz. D, Redshift kullanmaz ve Aurora'daki musteri profili verileriyle birlestirme yapmaz; yalnizca Athena ile ham veriyi sorgular.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html)

---

---

Soru 54 / 63 · Dosya: 54.jpeg · Soru 56 / 65

Bir şirket yakın zamanda web uygulamasını AWS Cloud'a taşıdı. Şirket bir
Uygulamayı barındırmak amacıyla birden fazla işlemi çalıştırmak için Amazon EC2 örneği. Süreçler
statik içerik sunan bir Apache web sunucusu içerir. Apache web sunucusu şunları yapar:
Kullanıcı oturumları için yerel Redis sunucusunu kullanan bir PHP uygulamasına yapılan istekler. şirket
mimariyi yüksek düzeyde kullanılabilir olacak ve AWS tarafından yönetilen kullanacak şekilde yeniden tasarlamak istiyor
çözümler. Bu gereksinimleri hangi çözüm karşılayacak?

A) Statik içeriği ve PHP uygulamasını barındırmak için AWS Elastic Beanstalk'ı kullanın. Yapılandır
Elastic Beanstalk, EC2 örneğini genel bir alt ağa dağıtacak. Genel bir IP adresi atayın.

B) Statik içeriği ve PHP uygulamasını barındırmak için AWS Lambda'yı kullanın. Amazon API'si kullanın
Lambda işlevine proxy isteklerini göndermek için Ağ Geçidi REST API'si. API Ağ Geçidi CORS'unu ayarlayın
Alan adına yanıt verecek şekilde yapılandırma. Amazon ElastiCache'i (Redis OSS) şu şekilde yapılandırın:
oturum bilgilerini yönetin.

C) Arka uç kodunu EC2 örneğinde tutun. Amazon ElastiCache (Redis OSS) oluşturun
Multi-AZ'nin etkin olduğu küme. Kümedeki ElastiCache (Redis OSS) kümesini yapılandırma
modu. Ön uç kaynaklarını Amazon S3'e kopyalayın. Referans için arka uç kodunu yapılandırın
EC2 örneği.

D) Amazon S3 uç noktasıyla bir Amazon CloudFront dağıtımını S3'e yapılandırma
Statik içeriği barındıracak şekilde yapılandırılmış paket. Uygulama Yük Dengeleyicisini Yapılandırma
PHP uygulaması için AWS Fargate görevlerini çalıştıran bir Amazon ECS hizmetini hedefleyen.
PHP uygulamasını, çalışan bir Amazon ElastiCache (Redis OSS) kümesini kullanacak şekilde yapılandırma
birden fazla Erişilebilirlik Alanında.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D dogrudur: statik icerik CloudFront ve S3 uzerinden sunulur, PHP uygulamasi ALB arkasinda Fargate uzerinde calisan bir ECS servisine dagitilir ve oturum verileri birden fazla AZ'de calisan ElastiCache (Redis OSS) kumesinde tutulur. A tek bir public subnet ve public IP'li EC2 orneğine bagli kalir, yuksek erisilebilirlik saglamaz. B, PHP uygulamasinin Lambda'ya tasinmasini gerektirir ve kapsamli bir mimari degisiklik getirir; C ise backend'i tek bir EC2 orneginde birakir ve yuksek erisilebilirligi karsilamaz.

---

---

Soru 55 / 63 · Dosya: 55.jpeg · Soru 57 / 65

Bir şirket, Amazon EKS'de toplu işleme ve raporlama mikro hizmetleri çalıştırıyor. Kullanıcılar
Mikro hizmetlere web tabanlı HTTP uç noktaları aracılığıyla erişin. Şirket istiyor
URL kalıplarına göre trafiği birden fazla arka uç hizmetine dağıtın. Hangi çözüm olacak
Gelen istekleri EN uygun maliyetli mikro hizmetlere yönlendirmek mi istiyorsunuz?

A) Bir Ağ Yük Dengeleyici sağlamak için AWS Yük Dengeleyici Denetleyicisini kullanın.

B) Bir Application Load Balancer sağlamak için AWS Load Balancer Controller’ı kullanın.

C) İstekleri Amazon EKS'ye yönlendirmek için bir AWS Lambda işlevini kullanın.

D) İstekleri Amazon EKS'ye yönlendirmek için Amazon API Gateway'i kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B dogrudur: AWS Load Balancer Controller ile olusturulan Application Load Balancer, HTTP isteklerini URL yolu ve host kurallarina gore farkli EKS servislerine yonlendirir ve tek bir load balancer ile maliyeti dusuk tutar. A'daki Network Load Balancer 4. katmanda calisir ve URL'ye gore yonlendirme yapamaz. C ve D, istekleri EKS'e ulastirmak icin Lambda veya API Gateway gibi ek bir bilesen ekler; bu da gereksiz maliyet getirir.

---

---

Soru 56 / 63 · Dosya: 56.jpeg · Soru 58 / 65

Bir analiz şirketi özel bir ayıklama, dönüştürme ve yükleme (ETL) çözümü dağıtmak istiyor
AWS'de kapsayıcıya alınmış bir uygulama olarak. Uygulama yüksek performanslı erişim gerektiriyor
merkezi bir depodaki dosyalara. Dosya işlemenin tamamlanması 1 saat kadar sürebilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A) Bir konteyner görüntüsünden bir AWS Lambda işlevini dağıtın. Amazon oluşturun ve ekleyin
EFS dosya sistemini işleve ekleyin.

B) Container'ları Amazon ECS'de Amazon EC2 başlatma türüyle dağıtın. EC2'yi yapılandırma
Örnek deposu birimlerini kullanmak için örnekler.

C) Container'ları Amazon ECS'de AWS Fargate başlatma türüyle dağıtın. Amazon Dağı
EFS dosya sistemini kaplara aktarın.

D) Dosyaları depolamak için bir Amazon S3 Express One Zone paketi oluşturun. AWS dağıtın
Bir konteyner görüntüsünden Lambda işlevi. S3 Express One Zone'daki dosyaları işleyin
kova.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C dogrudur: Fargate uzerindeki ECS gorevleri 1 saate kadar suren isleme icin uygundur ve merkezi depodaki dosyalara paylasilan, yuksek performansli erisim icin Amazon EFS baglanabilir; EFS, Fargate gorevlerinde Linux platform surum 1.4.0 ve sonrasinda desteklenir. A ve D, Lambda'nin en fazla 15 dakika (900 saniye) calisabilmesi nedeniyle 1 saatlik isleme suresini karsilayamaz. B, EC2 instance store kullanir; bu, instance'a yerel ve gecici depolamadir ve merkezi depoya paylasilan erisim saglamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html)
>   - [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html)

---

---

Soru 57 / 63 · Dosya: 57.jpeg · Soru 59/65

Bir şirket, Amazon EC2 bulut sunucularında barındırılacak yeni bir uygulamayı piyasaya sürüyor. bir
çözüm mimarının genel IPv4 erişimine izin vermeyen bir çözüm tasarlaması gerekiyor
internetten kaynaklanmaktadır. Ancak çözüm, EC2 bulut sunucularının
giden IPv4 internet istekleri. İlk tasarım teklifi EC2 bulut sunucularının
iki Erişilebilirlik Alanındaki iki özel alt ağda yer alacaktır. Tamamı
mimarinin yüksek oranda kullanılabilir olması gerekir. Çözüm mimarı durumu nasıl değiştirmeli?
Bu gereksinimleri karşılayacak mimari?

A) Her iki Erişilebilirlik Alanındaki genel alt ağlara bir NAT ağ geçidi dağıtın. Oluşturun ve yapılandırın
her özel alt ağ için bir yönlendirme tablosu.

B) Her iki Erişilebilirlik Alanındaki genel alt ağlara bir internet ağ geçidi dağıtın. Oluşturun ve
özel alt ağlar için paylaşılan bir rota tablosu yapılandırın.

C) Her iki Erişilebilirlik Alanındaki genel alt ağlara bir NAT ağ geçidi dağıtın. Oluşturun ve yapılandırın
özel alt ağlar için paylaşılan bir rota tablosu.

D) Her iki Erişilebilirlik Alanındaki genel alt ağlara yalnızca çıkışa yönelik bir internet ağ geçidi dağıtın.
Her özel alt ağ için bir yönlendirme tablosu oluşturun ve yapılandırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A dogrudur: her Availability Zone'da public subnet'e yerlestirilen bir NAT gateway, private subnet'lerdeki EC2 orneklerinin giden IPv4 istekleri yapmasini saglar ve internetten gelen baglantiyi engeller. Her private subnet'in kendi AZ'sindeki NAT gateway'e yonlendiren ayri bir route table'i olmasi, bir AZ arizasinda da erisilebilirligi korur. B internet gateway kullanir ve genel IPv4 erisimine izin verir; C tek bir paylasilan route table ile tek NAT gateway'e bagimlilik yaratir; D egress-only internet gateway yalnizca IPv6 icindir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html)

---

---

Soru 58 / 63 · Dosya: 58.jpeg · Soru 60/65

Bir şirket, binlerce eşzamanlı kullanıcı için bir içerik yönetim sistemi işletiyor
Bir VPC'deki Amazon EC2 bulut sunucuları. Şirketin ek EC2 bulut sunucularını dağıtması gerekiyor
Yeni kullanıcıların artan uygulama katmanı iş yüklerini yönetin. VPC'de yeterli IP yok
yeni örnekler için adresler. Hangi çözüm gerekli kapasiteyi sağlıyor?
EN AZ işletme gideri?

A) VPC'ye yeni, çakışmayan bir IPv4 CIDR bloğu ekleyin. Ek alt ağlar oluşturun
yeni CIDR aralığını kullanın. Yeni alt ağlarda yeni EC2 bulut sunucularını başlatın.

B) Yeni alt ağlara sahip yeni bir VPC oluşturun. arasında bir VPC eşleme bağlantısı kurun.
iki VPC. Trafiği eş VPC'nin CIDR'sine yönlendirmek için her iki VPC'deki yönlendirme tablolarını güncelleyin
eşleme bağlantısını engelleyin. Yeni VPC'de yeni EC2 bulut sunucularını başlatın.

C) Bir transit ağ geçidi dağıtın. Mevcut VPC'yi ve yeni bir VPC'yi toplu taşıma ağ geçidine ekleyin.
İki VPC arasındaki trafiği yönlendirmek için geçiş ağ geçidi rota tablolarını yapılandırın. Başlat
yeni VPC'deki yeni EC2 bulut sunucuları.

D) Yeni alt ağlara sahip yeni bir VPC oluşturun. AWS Siteden Siteye VPN bağlantısı dağıtın
VPC'ler arasında. İlk VPC'de EC2 tabanlı bir VPN çözümü ve sanal özel bir sunucu kullanın
yeni VPC'deki ağ geçidi. Trafiği VPN tüneli üzerinden yönlendirmek için rota tablolarını güncelleyin.
Yeni VPC'de yeni EC2 bulut sunucularını başlatın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: Mevcut VPC'ye ikincil bir IPv4 CIDR bloğu eklenebilir ve bu blok üzerinde oluşturulan yeni subnet'lere EC2 örnekleri aynı VPC içinde başlatılabilir. B ve C yeni bir VPC ile peering veya transit gateway gibi ek bağlantı katmanları gerektirir. D ise gereksiz bir VPN altyapısı ekler; bu nedenle yalnızca A en az operasyonel yükle kapasiteyi sağlar.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html)
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/add-ipv4-cidr.html](https://docs.aws.amazon.com/vpc/latest/userguide/add-ipv4-cidr.html)

---

---

Soru 59 / 63 · Dosya: 59.jpeg · Soru 61/65

Bir şirketin yeni bir proje için konteyner görsellerini kullanması gerekiyor. Bir geliştirme ekibi gerektirir
yeni bir Amazon ECR deposuna tam erişim. Bir çözüm mimarı ikinci bir ECR oluşturur
mevcut bir havuzu şablon olarak kullanarak depoyu oluşturun. Bir çözüm mimarı,
AmazonEC2ContainerRegistryFullAccess politikasının eklendiği yeni IAM rolü. [?]
Bir geliştirici, yeniyi kullanarak bir liman işçisi görüntüsünü ikinci depoya göndermeye çalıştığında
IAM rolü, komut bir yetkilendirme hatasıyla başarısız oluyor. Olası nedeni nedir
hata mı?

A) Geliştiricinin docker deposunda oturum açmak için şunu kullanarak aldığı belirteç
aws ecr get-login-password komutu 2 saatten eski.

B) Geliştirme ekibine atanan IAM rolünün çekme izni yok
depodan görüntüler.

C) Geliştiricinin çok faktörlü kimlik doğrulaması (MFA) etkin değil.

D) Yeni depo, itmeyi reddeden bir ECR depo politikasından oluşturuldu
görüntüler.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: Yeni depo, mevcut bir deponun repository policy'si kopyalanarak oluşturulmuş ve bu politika push işlemini reddediyor. IAM politikası ile kaynak politikası arasında bir taraf açıkça reddederse işlem engellenir; bu yüzden rolde AmazonEC2ContainerRegistryFullAccess bulunsa bile push başarısız olur. A yanlıştır çünkü ECR giriş token'ı 12 saat geçerlidir; B yanlıştır çünkü hata push sırasında oluşur ve rol zaten tam erişime sahiptir; C yanlıştır çünkü ECR kimlik doğrulaması MFA'ya bağlı değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html)
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)

---

---

Soru 60 / 63 · Dosya: 60.jpeg · Soru 62 / 65

Bir şirket, çok sayıda olayı işlemek için sunucusuz bir uygulama tasarlıyor.
bir AWS hesabı. Uygulama, daha fazla bilgi için olayları bir veri ambarına kaydeder.
analiz. Uygulama, gelen olayları bir Amazon SQS kuyruğuna gönderir. Arasındaki trafik
uygulama ve SQS kuyruğu genel IP adreslerini kullanmamalıdır. Hangi çözüm olacak
bu gereksinimleri karşılıyor mu?

A) Amazon SQS için bir VPC uç noktası oluşturun. Sıra politikasını, hariç tüm erişimi reddedecek şekilde ayarlayın.
VPC uç noktasından.

B) Sunucu tarafı şifrelemeyi SQS tarafından yönetilen anahtarlarla (SSE-SQS) yapılandırın.

C) AWS STS'yi, erişim sağlayan kaynaklar için geçici kimlik bilgileri oluşturacak şekilde yapılandırın.
kuyruk.

D) VPC'den ayrılan SQS trafiğini tespit etmek için VPC Akış Günlüklerini yapılandırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: SQS için bir arayüz VPC endpoint'i kullanıldığında trafik public internete çıkmadan AWS ağı üzerinden gider. Kuyruk politikasında aws:SourceVpce koşulu ile erişim yalnızca bu endpoint'e kısıtlanabilir. B yalnızca veriyi depolamadayken şifreler, ağ yolunu değiştirmez; C geçici kimlik bilgisi üretir ama trafiğin public IP üzerinden gitmesini engellemez; D trafiği yalnızca izler, engellemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html)
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies-access-p](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies-access-p)

---

---

Soru 61 / 63 · Dosya: 61.jpeg · Soru 63 / 65

Bir sağlık şirketinin elektronik sağlık kayıtları (EHR'ler) için bir depolama çözümüne ihtiyacı vardır.
Şirketin mevzuata uyum sağlaması için EHR'leri en az 10 yıl saklaması gerekiyor.
şirket nadiren kayıtlara erişir. Kayıtlar güvenli, değiştirilemez ve
gerektiğinde birkaç saat içinde geri alınabilir. Bu gereksinimleri hangi çözüm karşılayacak?
EN uygun maliyetli şekilde?

A) Kayıtları Amazon S3 Standard'ta saklayın. Amazon ile Sunucu tarafı şifrelemeyi etkinleştirin
S3 yönetilen anahtarlar (SSE-S3) ve S3 Sürüm Oluşturma.

B) Kayıtları Amazon S3 Glacier Esnek Erişim'de saklayın. S3 Nesne Kilidi'ni yapılandırın ve
10 yıllık bir saklama süresi belirledik.

C) Kayıtları Amazon S3 One Zone-Infrequent Access'te (S3 One Zone-IA) saklayın.
Kayıtları 10 yıl sonra kaldırmak için bir S3 Yaşam Döngüsü ilkesi yapılandırın.

D) Kayıtları Amazon S3 Intelligent-Tiering'de saklayın. Otomatik arşivlemeyi yapılandırın
Arşiv Erişimi katmanı.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: S3 Glacier Flexible Retrieval düşük saklama maliyeti sunar ve Standard geri getirme 3-5 saat sürer, bu da 'birkaç saat içinde' gereksinimini karşılar. S3 Object Lock, compliance modunda 10 yıllık saklama süresi boyunca kayıtların silinmesini veya üzerine yazılmasını engelleyerek değişmezlik sağlar. A pahalı S3 Standard kullanır ve sürümleme değişmezlik sağlamaz; C tek AZ'de tutar ve süre sonunda kayıt silen bir kurala dayanır; D'de Object Lock olmadığı için değişmezlik gereksinimi karşılanmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

---

---

Soru 62 / 63 · Dosya: 62.jpeg · Soru 64 / 65

Bir araştırma laboratuvarının terabaytlık bir veri kümesini her gün birden çok kez işlemesi gerekir.
Laboratuvar, verileri işlerken milisaniyenin altında bir gecikme gerektirir. Yüzlerce
Amazon EC2 Linux bulut sunucuları, verileri kaynaktan işleyecek ve verileri bir
farklı konum. Bu gereksinimleri hangi çözüm karşılayacak?

A) NetApp ONTAP dosya sistemi için bir Amazon FSx oluşturun. Her birimin katmanlama politikasını ayarlayın
Herkese. Ham verileri dosya sistemine aktarın. Dosya sistemini EC2 bulut sunucularına bağlayın.

B) Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Lustre dosyası için Amazon FSx oluşturun
Kalıcı SSD depolama kullanan sistem. İçe aktarılacak Luster dosya sistemi için FSx'i yapılandırma
verileri Amazon S3'e aktarın ve verileri Amazon S3'e aktarın. Dosya sistemini EC2 bulut sunucularına bağlayın.

C) Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Lustre dosyası için Amazon FSx oluşturun
Kalıcı HDD depolamayı kullanan sistem. İçe aktarılacak Luster dosya sistemi için FSx'i yapılandırma
verileri Amazon S3'e aktarın ve verileri Amazon S3'e aktarın. Dosya sistemini aşağıdakileri kullanarak EC2 bulut sunucularına bağlayın:
Ağ Geçidi Yük Dengeleyici.

D) HDD depolamalı bir Windows Dosya Sunucusu Multi-AZ dosya sistemi için Amazon FSx oluşturun.
Gölge kopyaları etkinleştirin. SMB protokolünü kullanarak dosya sistemini EC2 bulut sunucularına bağlayın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: FSx for Lustre'ün persistent SSD seçeneği alt milisaniye gecikme sunar, Linux EC2 örnekleri Lustre istemcisiyle bağlanabilir ve S3 bağlantısı ham verinin içe aktarılmasını ve sonuçların dışa aktarılmasını sağlar. A yanlıştır çünkü ALL tiering politikası verinin çoğunu kapasite havuzuna taşır ve performansı düşürür; C'deki HDD tek haneli milisaniye gecikme sunar; D Windows ve SMB içindir, HDD kullanır ve Linux iş yükü için uygun değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/fsx/latest/LustreGuide/ssd-storage.html](https://docs.aws.amazon.com/fsx/latest/LustreGuide/ssd-storage.html)
>   - [https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html)
>   - [https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html)
>   - [https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-storage-capacity.html](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-storage-capacity.html)

---

---

Soru 63 / 63 · Dosya: 63.jpeg · Soru 65 / 65

Bir şirket, tüm kullanıcılara statik bir web sitesi sağlamak için Amazon EC2 bulut sunucularını kullanmak istiyor
dünya çapında. Şirketin kullanıcılar için gecikmeyi en aza indirmesi gerekiyor. Hangi çözüm
bu gereksinimleri karşılıyor mu?

A) EC2 bulut sunucularını tek bir Erişilebilirlik Alanında kullanın.

B) Aynı AWS Bölgesindeki birden fazla Erişilebilirlik Alanında EC2 bulut sunucularını kullanın.

C) Kaynak olarak yapılandırılmış EC2 bulut sunucularıyla Amazon CloudFront'u kullanın.

D) EC2 bulut sunucularını aynı uç konumunda ve aynı AWS Bölgesinde kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C: CloudFront içeriği dünya genelindeki kenar konumlarında önbelleğe alır ve kullanıcılara daha yakın yerden sunar; EC2 örneği de HTTP(S) orijin olarak kullanılabilir. A tek AZ'de olduğu için hem dayanıklılığı hem de uzak kullanıcılar için gecikmeyi kötüleştirir; B aynı bölgede birden fazla AZ kullanır ama global kullanıcılar için gecikmeyi azaltmaz; D geçersizdir çünkü kenar konumları EC2 örneği barındırmak için kullanılmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)
>   - [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html)
