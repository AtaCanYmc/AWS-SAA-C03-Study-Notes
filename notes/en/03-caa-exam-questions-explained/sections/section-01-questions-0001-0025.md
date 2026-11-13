# CAA Exam Questions - Annotated with Official References - Section 01

> **Question Range:** 1 - 25 of 63

[← Module Index](../README.md) | [📖 Consolidated Notes](../notes.md)

---

Soru 1 / 63 · Dosya: photo.jpeg · Question 3 of 65

A company has a critical ecommerce application that uses an Amazon RDS for MySQL DB
instance with a Multi-AZ deployment. The company's analytics team has increased the
number of queries it uses to generate reports. The increase in usage has resulted in
application performance degradation. The analytics team requires near real-time data
consistency in its reports. The analytics team must be able to generate reports even if the
DB instance is offline. Which solution will meet these requirements?

A)  Take a snapshot and restore the snapshot as a separate DB instance to run the queries

B)  Modify the DB instance to use a larger instance size

C)  Direct the queries to the standby DB instance endpoint

D)  Add a read replica. Direct the queries to the read replica endpoint

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: Okuma replikası birincil örnekten asenkron olarak güncellenir ve yalnızca okuma erişimi sağlar; raporlar bu replikaya yönlendirilirse ana örneğin yükü azalır ve birincil örnek çevrimdışıyken de raporlar üretilebilir. A seçeneğindeki snapshot belirli bir andaki kopya olduğu için gerçek zamana yakın tutarlılık sağlamaz. B seçeneği yalnızca sunucuyu büyütür, raporların ana örnekten bağımsız çalışmasını sağlamaz. C seçeneği yanlıştır çünkü Multi-AZ bekleme örneği okuma trafiğine hizmet edemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html)
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)

---

---

Soru 2 / 63 · Dosya: photo2.jpeg · Question 4 of 65

A company runs Amazon EC2 instances as web servers. Peak traffic load occurs on the web
server at two consistent times each day. The web servers are idle for the remainder of the
day. A solutions architect needs to manage the web servers and maintain fault tolerance.
Which solution will meet these requirements in the MOST cost-effective way?

A)  Use an EC2 Auto Scaling group to scale the instances based on demand

B)  Purchase Reserved Instances to ensure peak capacity at all times

C)  Use a cron job to stop the EC2 instances when the traffic demand is low

D)  Use a script to vertically scale the EC2 instances during peak traffic demand

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: Auto Scaling grubu talebe göre kapasiteyi artırıp azaltır, böylece iki yoğun saat dışında fazla örnek için ödeme yapılmaz; sağlıksız örnekleri değiştirerek hata toleransını da korur. B seçeneği yıl boyunca tepe kapasitesi için boşta kalan kapasiteye para öder. C seçeneği yoğun saatlerde örneklerin tekrar açılmasını ve sağlıklı kalmasını otomatik olarak yönetmez. D seçeneği tek bir örneğin boyutunu değiştirir; bu hata toleransı sağlamaz ve yeniden başlatma gerektirebilir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html)

---

---

Soru 3 / 63 · Dosya: photo3.jpeg · Question 5 of 65

A company stores data across 200 Amazon S3 buckets that multiple departments use.
Each department has prefix-based tenant isolation for each team in the department. The
finance team needs to identify which specific buckets and prefixes are driving the highest
S3 costs. The finance team needs bucket-level and prefix-level storage usage and request
patterns and the dollar costs attributed to each bucket. Which combination of steps will
meet these requirements? (Select TWO.)

A)  Enable S3 Storage Lens advanced metrics. Activate prefix-level aggregation to view
storage usage and request activity for each bucket and each prefix

B)  Use the S3 Storage Lens free tier to view storage usage. Configure S3 server access
logging to view request patterns

C)  Configure AWS Cost and Usage Reports to use resource-level granularity to identify
costs for each bucket by usage type

D)  Use AWS Cost Explorer. Apply cost allocation tags to view S3 costs grouped by bucket
and usage type

E)  Enable S3 server access logging on all buckets. Query the logs by using Amazon Athena
to calculate costs for each prefix

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

Soru 4 / 63 · Dosya: 4.jpeg · Question 6 of 65

A company runs a critical public application on Amazon EKS clusters. The application has a
microservices architecture. The company needs to implement a solution that collects,
aggregates, and summarizes metrics and logs from the application in a centralized
location. Which solution will meet these requirements in the MOST operationally efficient
way?

A)  Run the Amazon CloudWatch agent in the existing EKS cluster. Use a CloudWatch
dashboard to view the metrics and logs.

B)  Configure a data stream in Amazon Kinesis Data Streams. Use Amazon Data Firehose to
read events and to deliver the events to an Amazon S3 bucket. Use Amazon Athena to view
the events.

C)  Configure AWS CloudTrail to capture data events. Use Amazon OpenSearch Service to
query CloudTrail

D)  Configure Amazon CloudWatch Container Insights in the existing EKS cluster. Use a
CloudWatch dashboard to view the metrics and logs.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: CloudWatch Container Insights, EKS kümelerindeki metrik ve günlükleri toplar, özetler ve CloudWatch panosunda merkezi olarak sunar; bu nedenle en düşük işletme yüküyle sonuç verir. A seçeneği genel bir CloudWatch ajanı kurar, ancak EKS için hazır metrik ve günlük özetleme sunan Container Insights'a göre daha fazla yapılandırma gerektirir. B seçeneği Kinesis, Firehose, S3 ve Athena'dan oluşan karmaşık bir boru hattı kurar ve işletme yükünü artırır. C seçeneği CloudTrail'i yalnızca API çağrıları için kullanır; uygulama metriklerini ve günlüklerini toplamaz.

---

---

Soru 5 / 63 · Dosya: 5.jpeg · Question 7 of 65

A company wants to use AWS Direct Connect to connect the company's on-premises
networks to the AWS Cloud. The company runs several VPCs in a single AWS Region. The
company plans to expand its VPC fleet to include hundreds of VPCs. A solutions architect
needs to simplify and scale the company's network infrastructure to accommodate future
VPCs. Which service or resource will meet these requirements?

A)  VPC endpoints

B)  AWS Transit Gateway

C)  Amazon Route 53

D)  AWS Secrets Manager

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: AWS Transit Gateway, birçok VPC'yi ve şirket içi ağları tek bir merkezi yönlendirici üzerinden bağlar ve Direct Connect bağlantılarını da bu merkeze bağlayabilir; VPC sayısı arttıkça ağ yönetimini sadeleştirir. A seçeneği (VPC endpoints) yalnızca belirli hizmetlere özel erişim sağlar, ağ merkezi değildir. C seçeneği (Amazon Route 53) bir DNS hizmetidir. D seçeneği (AWS Secrets Manager) gizli bilgi yönetimi içindir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/extend-tgw.html](https://docs.aws.amazon.com/vpc/latest/userguide/extend-tgw.html)

---

---

Soru 6 / 63 · Dosya: 6.jpeg · Question 8 of 65

A company deploys an application that consists of an Amazon EC2 instance and an
Amazon RDS instance in a Single-AZ configuration. The company deploys both instances
without public IP addresses. The company wants to minimize the overall data transfer
costs for communication between the EC2 instance and the RDS instance. Which solution
will meet this requirement?

A)  Deploy the EC2 instance in the same Availability Zone as the RDS instance.

B)  Deploy the EC2 instance and the RDS instance in separate Availability Zones within the
same AWS Region

C)  Configure UDP connectivity between the EC2 instance and the RDS instance.

D)  Configure IPv6 connectivity between the EC2 instance and the RDS instance.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: EC2 ve RDS aynı Availability Zone içinde olursa aralarındaki trafik AZ'ler arası veri transferi ücretine tabi olmaz ve maliyet düşer. B seçeneği bileşenleri farklı AZ'lere ayırarak AZ'ler arası veri transferi ücretini artırır. C (UDP) ve D (IPv6) seçenekleri bağlantı protokolünü değiştirir; veri transferi maliyetini düşürmez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/eks/latest/best-practices/cost-opt-networking.html](https://docs.aws.amazon.com/eks/latest/best-practices/cost-opt-networking.html)

---

---

Soru 7 / 63 · Dosya: 7.jpeg · Question 9 of 65

A company runs an application on a fleet of Amazon EC2 instances in an Auto Scaling
group behind an Application Load Balancer (ALB). The instances use m5 large instance
types. The company needs to migrate the fleet to m6i large instances to reduce costs and
improve performance without any service interruptions. Which solution will meet these
requirements with the LEAST operational overhead?

A)  Create a new Auto Scaling group that uses m6i large instances. Use weighted target
groups in the ALB to shift traffic from the old Auto Scaling group to the new group

B)  Update the launch template to specify m6i large instances. Start an instance refresh on
the Auto Scaling group

C)  Create a patch baseline in AWS Systems Manager Patch Manager. Schedule a
maintenance window to apply operating system and software patches across the fleet

D)  Modify the user data script to change the instance type at instance launch. Manually
terminate instances so that the Auto Scaling group launches replacements that use the new
instance type

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: Launch template'i m6i large türüne güncellemek ve Auto Scaling grubunda instance refresh başlatmak, örnekleri kademeli olarak yenileyerek kesintisiz geçiş sağlar ve ek altyapı yönetimi gerektirmez. A seçeneği yeni bir Auto Scaling grubu ve ağırlıklı hedef grupları gerektirir, bu da daha fazla işletme yükü getirir. C seçeneği yama yönetimi içindir ve instance türünü değiştirmez. D seçeneği user data değişikliğini mevcut örneklere uygulamaz ve örnekleri elle sonlandırmak kesinti riski taşır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-refresh-overview.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-refresh-overview.html)

---

---

Soru 8 / 63 · Dosya: 8.jpeg · Question 10 of 65

A company has a 250 GB Amazon RDS Multi-AZ DB instance. The company's disaster
recovery policy requires an RPO of 6 hours in a second AWS Region. Which solution will
meet these requirements MOST cost-effectively?

A)  Use RDS automated snapshots. Create an AWS Lambda function to copy the snapshot
to a second Region.

B)  Use RDS automated snapshots every 6 hours. Use Amazon S3 Cross-Region Replication
to copy the snapshot to a second Region.

C)  Use AWS Backup to take an RDS snapshot every 6 hours and to copy the snapshot to a
second Region.

D)  Create an RDS cross-Region read replica in a second Region. Use AWS Backup to take
an automated snapshot of the read replica every 6 hours.

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

Soru 9 / 63 · Dosya: 9.jpeg · Question 11 of 65

A company runs an application on Amazon EC2 instances in a private subnet. The
application needs to store and retrieve data in Amazon S3 buckets. According to regulatory
requirements, the data must not travel across the public internet. What should a solutions
architect do to meet these requirements MOST cost-effectively?

A)  Deploy a NAT gateway to access the S3 buckets

B)  Deploy AWS Storage Gateway to access the S3 buckets

C)  Deploy an S3 interface endpoint to access the S3 buckets

D)  Deploy an S3 gateway endpoint to access the S3 buckets

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: S3 gateway endpoint, private subnet'teki EC2 örneklerinin S3'e erişimini VPC içinde AWS ağı üzerinden sağlar; veri genel internete çıkmaz ve gateway endpoint için ek ücret alınmaz. A seçeneği NAT gateway üzerinden internete çıkar ve ücretlidir. B seçeneği bu ihtiyaç için gereksiz bir hibrit depolama hizmetidir. C seçeneği S3 interface endpoint'tir; özel IP üzerinden çalışır ancak saatlik ve veri işleme ücreti getirir, bu nedenle en uygun maliyetli seçenek değildir.

---

---

Soru 10 / 63 · Dosya: 10.jpeg · Question 12 of 65

A company is building an ecommerce platform that will allow customers to place orders
online. Customer traffic varies significantly. An order-processing microservice is running on
a group of Amazon EC2 instances. A solutions architect must ensure that the application
remains responsive and decoupled from the frontend. The application must also be able to
reprocess orders that the application fails to process on the first attempt. Which solution
will meet these requirements?

A)  Deploy an Application Load Balancer in front of the order-processing microservice.
Configure the Amazon EC2 instances to scale out automatically based on CPU utilization
metrics as traffic increases

B)  Deploy an Amazon SQS queue to integrate the frontend and the order-processing
microservice. Configure the frontend to send messages to the queue. Configure the EC2
instances to process messages from the queue

C)  Establish direct HTTPS connections from the frontend to the microservice. Use a
dynamically expanding thread pool to handle concurrency at the microservice layer

D)  Use Amazon Kinesis Data Streams to ingest all order requests from the frontend.
Configure the Amazon EC2 instances to continuously poll the stream and process orders in
near real time

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: SQS kuyruğu ön uç ile sipariş işleme mikro hizmetini birbirinden ayırır; mesajlar işlenene kadar dayanıklı biçimde kuyrukta kalır ve trafik dalgalanmaları kuyrukta tamponlanır. İşlenemeyen mesajlar dead-letter queue'ya taşınarak incelenebilir ve yeniden işlenebilir. A seçeneği yük dengeleme ve CPU tabanlı ölçekleme sağlar ama bileşenleri ayırmaz ve başarısız işlemleri yeniden işlemez. C seçeneği ön uç ile mikro hizmet arasında sıkı bağlantı kurar. D seçeneği Kinesis ile akış tabanlı bir yapı önerir, ancak istenen ayrıştırma ve başarısız siparişleri yeniden işleme gereksinimini standart SQS ve DLQ yapısı kadar doğrudan karşılamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)

---

---

Soru 11 / 63 · Dosya: 11.jpeg · Question 13 of 65

A company uses Amazon RDS for MySQL as a database engine for its applications. A recent
security audit revealed an RDS instance that is not compliant with company policy for
encrypting data at rest. A solutions architect at the company needs to ensure that all
existing RDS databases are encrypted using server-side encryption and that any future
deviations from the policy are detected. Which combination of steps should the solutions
architect take to accomplish this? (Select TWO.)

A)  Create an AWS Config rule to detect the creation of unencrypted RDS databases. Create
an Amazon EventBridge rule to trigger on the AWS Config rules compliance state change
and use Amazon SNS to notify the security operations team.

B)  Use AWS Systems Manager State Manager to detect RDS database encryption
configuration drift. Create an Amazon EventBridge rule to track state changes and use
Amazon SNS to notify the security operations team.

C)  Create a read replica for the existing unencrypted RDS database and enable replica
encryption in the process. Once the replica becomes active, promote it into a standalone
database instance and terminate the unencrypted database instance.

D)  Take a snapshot of the unencrypted RDS database. Copy the snapshot and enable
snapshot encryption in the process. Restore the database instance from the newly created
encrypted snapshot. Terminate the unencrypted database instance.

E)  Enable encryption for the identified unencrypted RDS instance by changing the
configurations of the existing database.

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

Soru 12 / 63 · Dosya: 12.jpeg · Question 14 of 65

An ecommerce company stores inventory, order, and user information in multiple Amazon
Redshift clusters. The Redshift clusters must comply to the company's security policies.
The company must receive notifications about any security configuration violations. Which
solution will meet these requirements?

A)  Create an Amazon EventBridge rule that uses the Redshift clusters as the source.
Create an AWS Lambda function to evaluate the Redshift cluster security configuration.
Configure the Lambda function to notify the company of any violations of the security
policies. Add the Lambda function as a target of the EventBridge rule.

B)  Create an AWS Lambda function to check the validity of the Redshift cluster security
configurations. Create an Amazon EventBridge rule that invokes the Lambda function when
Redshift clusters are created. Notify the company of any violations to security policies.

C)  Set up Amazon Redshift Advisor in the company's AWS account to monitor cluster
configurations. Configure Redshift Advisor to generate notifications for security items that
the company must address.

D)  Create an AWS Lambda function to check the Redshift clusters for any violation of the
security configurations. Create an AWS Config custom rule to invoke the Lambda function
when Redshift cluster security configurations are modified. Provide the compliance state of
each Redshift cluster to AWS Config. Configure AWS Config to notify the company of any
violations of the security policies.

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

Soru 13 / 63 · Dosya: 13.jpeg · Question 15 of 65

A healthcare company hosts a patient portal application on Amazon EC2 instances.
Amazon Route 53 directs user requests. Users report intermittent failures when accessing
application features. The company discovers that Route 53 returns IP addresses of
instances with unresponsive application processes. The company requires a solution that
verifies application responsiveness and routes requests only to healthy instances. Which
solution will meet these requirements?

A)  Create a Route 53 simple routing policy record for each EC2 instance. Associate a
health check with each record.

B)  Create a Route 53 failover routing policy record for each EC2 instance. Associate a
health check with each record.

C)  Create an Amazon CloudFront distribution with EC2 instances as its origin. Associate a
health check with the EC2 instances.

D)  Create an Application Load Balancer (ALB) with a health check in front of the EC2
instances. Route to the ALB from Route 53.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D doğrudur: Application Load Balancer, sağlık kontrolleriyle yanıt vermeyen EC2 örneklerini trafik dışı bırakır ve Route 53 yalnızca ALB'yi gösterir; böylece istekler yalnızca sağlıklı örneklere gider. A ve B, her EC2 örneği için ayrı DNS kaydı yönetmeyi gerektirir ve uygulamanın yanıt verebilirliğini yük dengeleme katmanında doğrulamaz. C, CloudFront'un EC2 kökenine sağlık kontrolüyle yönlendirme yapması bu senaryoda uygun bir çözüm değildir.

---

---

Soru 14 / 63 · Dosya: 14.jpeg · Question 16 of 65

A company is using AWS Key Management Service (AWS KMS) keys to encrypt AWS
Lambda environment variables. A solutions architect needs to ensure that the required
permissions are in place to decrypt and use the environment variables. Which steps must
the solutions architect take to implement the correct permissions? (Select TWO.)

A)  Add AWS KMS permissions in the Lambda resource policy.

B)  Add AWS KMS permissions in the Lambda execution role.

C)  Add AWS KMS permissions in the Lambda function policy.

D)  Allow the Lambda execution role in the AWS KMS key policy.

E)  Allow the Lambda resource policy in the AWS KMS key policy.

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B ve D doğrudur: Lambda execution role'üne KMS anahtarını kullanma izni eklenir ve KMS anahtar politikasında bu execution role yetkilendirilir; böylece fonksiyon ortam değişkenlerini çözebilir. A ve C, KMS izinlerini Lambda resource/function policy'ye eklemeyi önerir; bu, KMS anahtarını çözme yetkisinin verildiği yer değildir. E yanlıştır, çünkü KMS anahtar politikasında resource policy değil execution role principal olarak yetkilendirilir.

---

---

Soru 15 / 63 · Dosya: 15.jpeg · Question 17 of 65

A media company runs a production Node.js application by using Amazon ElastiCache
(Redis OSS) on a cache.m7g.large node. Cache demand peaks during business hours but
drops significantly overnight. The company wants to scale the cache automatically
according to workload demand while minimizing application changes. Which solution will
meet these requirements MOST cost-effectively?

A)  Migrate the cache to ElastiCache Serverless for Valkey.

B)  Migrate the cache to an ElastiCache (Memcached) cluster that has two large nodes.

C)  Keep the existing cache. Use scripts to resize clusters before and after peak hours.

D)  Replatform the cache to ElastiCache (Memcached).

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A doğrudur: ElastiCache Serverless for Valkey, kapasiteyi talebe göre otomatik ölçekler ve yalnızca kullanılan veri ve istekler için ödeme yapılmasını sağlar; Valkey 7.2 Redis OSS 7.2 özelliklerini içerdiğinden uygulama değişikliği de sınırlı kalır. B ve D, Memcached'e geçişi gerektirir; bu veri modeli ve istemci değişikliği demektir ve talebe göre otomatik ölçekleme sağlamaz. C, betiklerle elle boyutlandırmayı önerir; bu operasyonel yük getirir ve otomatik uyum sağlamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.deployment.html](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.deployment.html)
>   - [https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html)

---

---

Soru 16 / 63 · Dosya: 16.jpeg · Question 18 of 65

A company has a stateless public web application that is based on AWS Lambda functions
that are invoked by an Amazon API Gateway REST API. To achieve high availability, the
company deploys the application to multiple AWS Regions. The company needs a solution
to route application traffic to multiple Regions. Which solution will meet this requirement?

A)  Configure an Amazon Route 53 DNS record that uses a failover routing policy. Create
health checks for each application endpoint. Use an active-active failover configuration.

B)  Create an Amazon Route 53 Resolver outbound endpoint. Configure clients to use the
Resolver endpoint to resolve the local REST API DNS name.

C)  Create a transit gateway. Attach the transit gateway to the REST API endpoint in each
Region. Configure the transit gateway to route requests.

D)  Create an Application Load Balancer in the primary Region. Create a target group that
includes the REST API endpoint hostnames for each Region.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A doğrudur: Route 53 DNS kaydında failover politikası, her uygulama uç noktası için sağlık kontrolü ve aktif-aktif yapılandırma ile trafik sağlıklı Region'lara dağıtılır. B, Resolver outbound endpoint'i VPC'lerden DNS çözümlemesi için kullanılır; Region'lar arası uygulama trafiğini yönlendirmez. C, transit gateway ağ bağlantısı içindir ve API Gateway uç noktalarına çok Region yönlendirme sağlamaz. D, ALB tek Region'da çalışır ve API hostname'lerini Region'lar arası aktif-aktif yönlendirme için uygun biçimde yönetmez.

---

---

Soru 17 / 63 · Dosya: 17.jpeg · Question 19 of 65

A company is building a new application. The application runs on Amazon EC2 instances
and uses an Amazon S3 bucket for document storage. The company needs to ensure that
the EC2 instances can access the S3 bucket. Which solution will meet these requirements?

A)  Create an IAM role that grants access to the S3 bucket. Update the trust policy to allow
Amazon EC2 to assume the role. Associate the instance profile with the EC2 instances.

B)  Create an IAM policy that grants access to the S3 bucket. Update the trust policy to
allow Amazon EC2 to assume the role. Attach the policy to the EC2 instances.

C)  Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2
instances.

D)  Create an IAM user that grants access to the S3 bucket. Attach the user account to the
EC2 instances.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A doğrudur: IAM rolü S3 erişim izinlerini taşır, güven politikası EC2 servisinin rolü üstlenmesine izin verir ve instance profile ile EC2 örneklerine bağlanır. B, bir IAM politikası EC2 örneğine doğrudan eklenemez; güven politikası yalnızca roller için geçerlidir. C ve D, IAM gruplarının ve kullanıcılarının EC2 örneklerine atanamaması nedeniyle yanlıştır ve uzun süreli erişim anahtarı yönetimi gerektirir.

---

---

Soru 18 / 63 · Dosya: 18.jpeg · Question 20 of 65

A company enabled the AWS Systems Manager Default Host Management Configuration
setting. The company's Amazon EC2 Linux instances are registered as managed nodes in
Systems Manager Fleet Manager. According to a security policy, the EC2 instances must be
in private subnets. Security groups must not have the SSH port open. Which solution is the
MOST secure way to connect to the EC2 instances?

A)  Use a bastion host that is in a public subnet.

B)  Use the Telnet protocol by using a local client.

C)  Use EC2 Instance Connect.

D)  Use Systems Manager Session Manager.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D doğrudur: Session Manager, açık gelen port, bastion host veya SSH anahtarı gerektirmeden IAM izinleriyle yönetilen düğümlere erişim sağlar ve özel alt ağdaki örneklerle de çalışır. A, genel alt ağdaki bir bastion host'u ve dolayısıyla SSH erişim yolunu gerektirir. B, şifrelenmemiş Telnet protokolünü kullanır. C, EC2 Instance Connect SSH üzerinden bağlandığı için politikanın yasakladığı SSH erişim yolunu kullanır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html)

---

---

Soru 19 / 63 · Dosya: 19.jpeg · Question 21 of 65

A company is building a gaming application that needs to send unique events to multiple
leaderboards, player matchmaking systems, and authentication services concurrently. The
company requires an AWS based event-driven system that delivers events in order and
supports a publish subscribe model. The gaming application must be the publisher, and
the leaderboards, matchmaking systems, and authentication services must be the
subscribers. Which solution will meet these requirements?

A)  Amazon EventBridge event buses

B)  Amazon SNS FIFO topics

C)  Amazon SNS standard topics

D)  Amazon SQS FIFO queues

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B doğrudur: SNS FIFO konuları, mesajları sıra korunarak yayınlar ve birden çok aboneye (liderlik tablosu, eşleştirme, kimlik doğrulama) iletir. A, EventBridge event bus'ın sıralama garantisi vermez. C, standart SNS konuları sırayı garanti etmez. D, SQS FIFO kuyruğu noktadan noktaya tüketim modeline dayanır ve birden çok aboneye yayın için tek başına uygun değildir.

---

---

Soru 20 / 63 · Dosya: 20.jpeg · Question 22 of 65

A company manages multiple AWS accounts for different application teams in an
organization in AWS Organizations. The finance team needs to allocate AWS costs by
application and owner across the organization. The company wants to prevent teams from
creating supported resources unless the teams provide the required cost allocation tags at
creation time. The company has defined the required tag keys in Organizations tag
policies. Which solution will meet these requirements?

A)  Activate the tags as cost allocation tags. Use AWS Cost Explorer to group costs by tag.

B)  Create budgets in AWS Budgets for each application and owner. Use AWS Cost Explorer
to group costs by tag.

C)  Use AWS Config rules to detect resources that do not have the required tags. Activate
the tags as cost allocation tags. Use AWS Cost Explorer to group costs by tag.

D)  Enforce the required tags at creation time by using service control policies (SCPs).
Activate the tags as cost allocation tags. Use AWS Cost Explorer to group costs by tag.

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

Soru 21 / 63 · Dosya: 21.jpeg · Question 23 of 65

An ecommerce company wants to collect user clickstream data from the company's
website for real-time analysis. The website experiences fluctuating traffic patterns
throughout the day. The company needs a scalable solution that can adapt to varying
levels of traffic. Which solution will meet these requirements?

A)  Use a data stream in Amazon Kinesis Data Streams in on-demand mode to capture the
clickstream data. Use AWS Lambda to process the data in real time.

B)  Use Amazon Data Firehose to capture the clickstream data. Use AWS Glue to process
the data in real time.

C)  Use Amazon Kinesis Video Streams to capture the clickstream data. Use AWS Glue to
process the data in real time.

D)  Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis
Data Analytics) to capture the clickstream data. Use AWS Lambda to process the data in
real time.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: Kinesis Data Streams on-demand modu trafik değişimine göre kapasiteyi otomatik ölçeklendirir ve Lambda ile veri gerçek zamanlı işlenebilir. B'deki Firehose tamponlayarak teslim eden bir servistir ve Glue toplu ETL içindir, gerçek zamanlı işleme için uygun değildir. C'deki Kinesis Video Streams video ve medya akışları içindir. D'deki Managed Service for Apache Flink bir işleme motorudur, veri yakalama servisi değildir.

---

---

Soru 22 / 63 · Dosya: 22.jpeg · Question 24 of 65

A company is creating a mobile financial app that gives users the ability to sign up and
store personal information. The app generates a credit score report by using the data that
is stored in DynamoDB. The app uses an Amazon DynamoDB table to store user details
and preferences. The app sends credit score reports to users once every month. The
company needs to provide users with an option to remove their data and preferences. The
app must delete customer data within one month of receiving a request to delete the data.
Which solution will meet these requirements with the LEAST operational overhead?

A)  Create an AWS Lambda function to delete user information. Create an Amazon
EventBridge rule that runs when a specified TTL expires. Configure the EventBridge rule to
invoke the Lambda function.

B)  Create a DynamoDB stream. Create an AWS Lambda function to delete user
information. When a specified TTL expires, write user information to the DynamoDB stream
from the DynamoDB table. Configure the DynamoDB stream to invoke the Lambda function
to delete user information.

C)  Enable TTL in DynamoDB. Set the expiration date as an attribute. Create an AWS
Lambda function to set the TTL based on the expiration date value. Invoke the Lambda
function when a user requests to delete personal data.

D)  Enable TTL in DynamoDB. Create an AWS Lambda function to delete user information.
Configure AWS Config to detect the DynamoDB stage change when TTL expires and to
invoke the Lambda function.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C: TTL özniteliği kullanıcı silme talebi geldiğinde Lambda ile ayarlanır ve DynamoDB süresi dolan kayıtları birkaç gün içinde otomatik siler; bu, bir aylık süre sınırını karşılar ve en az operasyonel yük getirir. A ve B, ek EventBridge kuralı ya da Stream ve ikinci bir Lambda tüketicisi gibi fazladan bileşen ekler. D'deki AWS Config, DynamoDB TTL süre dolumunu algılamak için uygun bir mekanizma değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-streams.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-streams.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)

---

---

Soru 23 / 63 · Dosya: 23.jpeg · Question 25 of 65

A company runs several custom applications on Amazon EC2 instances. Each team within
the company manages its own set of applications and backups. To comply with
regulations, the company must be able to report on the status of backups and ensure that
backups are encrypted. Which solution will meet these requirements with the LEAST
effort?

A)  Create an AWS Lambda function that processes AWS Config events. Configure the
Lambda function to query AWS Config for backup-related data and to generate daily
reports.

B)  Check the backup status of the EC2 instances daily by reviewing the backup
configurations in AWS Backup and Amazon EBS snapshots.

C)  Use an AWS Lambda function to query Amazon EBS snapshots, Amazon RDS snapshots,
and AWS Backup jobs. Configure the Lambda function to process and report on the data.
Schedule the function to run daily.

D)  Use AWS Config and AWS Backup Audit Manager to ensure compliance. Review
generated reports daily.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: AWS Backup Audit Manager, 'Recovery points are encrypted' gibi kontrolleri içeren çerçevelerle günlük uyumluluk raporları üretir ve en az çaba gerektirir. A ve C, kendi Lambda kodunu yazmayı ve bakımını yapmayı gerektirir. B ise her gün elle inceleme yapılmasını istediği için en fazla çabayı gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/aws-backup/latest/devguide/controls-and-remediation.html](https://docs.aws.amazon.com/aws-backup/latest/devguide/controls-and-remediation.html)
>   - [https://docs.aws.amazon.com/aws-backup/latest/devguide/choosing-report-template.html](https://docs.aws.amazon.com/aws-backup/latest/devguide/choosing-report-template.html)

---

---

Soru 24 / 63 · Dosya: 24.jpeg · Question 26 of 65

A company's order processing system runs on Amazon EC2 instances. The EC2 instances
consume orders from an Amazon SQS queue and remove processed messages from the
queue. The EC2 instances verify each order against inventory records, persist fulfillment
decisions to an Amazon RDS database. The company reports duplicate approval entries in
the RDS database. However, the SQS queue shows no duplicate messages. Which solution
will prevent duplicate database entries in the RDS database?

A)  Use the CreateQueue API call to provision a new queue.

B)  Use the AddPermission API call to grant processing permissions.

C)  Use the ReceiveMessage API call to configure long polling behavior.

D)  Use the ChangeMessageVisibility API call to extend the visibility timeout.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: SQS'te işlenmekte olan bir mesaj görünürlük zaman aşımı dolmadan silinmezse yeniden kullanıma açılır ve tekrar alınıp işlenebilir. ChangeMessageVisibility ile zaman aşımı işlem bitene kadar uzatılırsa aynı sipariş ikinci kez işlenmez ve RDS'te çift kayıt oluşmaz. A yeni kuyruk oluşturur, B izin verir, C ise uzun yoklama davranışını ayarlar; hiçbiri çift işlemeyi önlemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)

---

---

Soru 25 / 63 · Dosya: 25.jpeg · Question 27 of 65

A company uses AWS Lambda functions in AWS account A. The company manages an
Amazon S3 bucket in AWS account B. The Lambda function in account A needs to read
objects from the S3 bucket in account B. A solutions architect needs to design a secure
solution for cross-account access and maintain the principle of least privilege. Which
solution will meet these requirements?

A)  Create an IAM role in account B that has the necessary S3 permissions and a trust
relationship with account A. Configure the Lambda function to assume this IAM role.

B)  Create an IAM role in account A that has the necessary S3 permissions and a trust
relationship with account B. Create an IAM user in account B that has permission to assume
this IAM role. Configure the Lambda function to use this IAM user.

C)  Create an IAM user in account B that has the necessary S3 permissions and a trust
relationship with account A. Create an IAM user in account A that has permission to assume
the account B user. Configure the Lambda function to use the account A user.

D)  Create an IAM role in account B that has the necessary S3 permissions and a trust
relationship with account A. Create an IAM user in account A that has permission to assume
this IAM role. Configure the Lambda function to use this IAM user.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: S3 bucket'ın bulunduğu hesap B'de, hesap A'ya güvenen ve gerekli S3 izinlerine sahip bir IAM rolü oluşturulur; Lambda fonksiyonu bu rolü üstlenerek yalnızca gerekli erişimi kullanır. B, C ve D'de IAM kullanıcıları ve uzun ömürlü erişim anahtarları kullanılır, bu da en az ayrıcalık ilkesine ve güvenli kimlik yönetimine daha az uygundur.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html)

---
