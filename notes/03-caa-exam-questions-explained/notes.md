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

Soru 26 / 63 · Dosya: 26.jpeg · Question 28 of 65

A company runs containerized applications on Amazon ECS tasks in private subnets. The
ECS tasks must retrieve container images from Amazon ECR and write application logs to
Amazon CloudWatch Logs. The company needs all traffic between the ECS tasks and
Amazon ECR and CloudWatch Logs to remain on the AWS network without using public IP
addresses. Which solution will meet these requirements MOST cost-effectively?

A)  Create interface VPC endpoints for Amazon ECR and CloudWatch Logs. Route traffic
from the ECS tasks through the VPC endpoints.

B)  Deploy a NAT gateway in each private subnet. Route traffic from the ECS tasks through
the NAT gateways.

C)  Configure an internet gateway for the VPC. Attach the internet gateway to the private
subnets to provide ECS task connectivity.

D)  Establish an AWS Direct Connect connection from the VPC to AWS services. Route traffic
from the ECS tasks through the Direct Connect connection.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: ECR ve CloudWatch Logs için arayüz VPC endpoint'leri, ECS görevlerinin trafiğini AWS ağında tutar ve genel IP gerektirmez. B'deki NAT gateway trafiği Elastic IP üzerinden internete çıkarır ve ek ücret doğurur. C'deki internet gateway genel IP gerektirir ve gereksinimi ihlal eder. D'deki Direct Connect, AWS servislerine erişim için gereksiz ve pahalı bir çözümdür.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/vpc-endpoints.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/vpc-endpoints.html)
>   - [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/vpc-endpoints.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/vpc-endpoints.html)

---

Soru 27 / 63 · Dosya: 27.jpeg · Question 29 of 65

A company is migrating an application to the AWS Cloud. The application runs in an
on-premises data center and writes thousands of images into a mounted NFS file system
each night. After the company migrates the application, the company will host the
application on an Amazon EC2 instance with a mounted Amazon EFS file system. The
company has established an AWS Direct Connect connection to AWS. Before the migration
cutover, a solutions architect must build a process that will replicate the newly created
on-premises images to the EFS file system. What is the MOST operationally efficient way to
replicate the images?

A)  Configure a periodic process to run the aws s3 sync command from the on-premises file
system to Amazon S3. Configure an AWS Lambda function to process event notifications
from Amazon S3 and copy the images from Amazon S3 to the EFS file system.

B)  Deploy an AWS Storage Gateway file gateway with an NFS mount point. Mount the file
gateway file system on the on-premises server. Configure a process to periodically copy the
images to the mount point.

C)  Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file
system. Send data over the Direct Connect connection to an S3 bucket by using a public
VIF. Configure an AWS Lambda function to process event notifications from Amazon S3 and
copy the images from Amazon S3 to the EFS file system.

D)  Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file
system. Send data over the Direct Connect connection to an AWS PrivateLink interface VPC
endpoint for Amazon EFS by using a private VIF. Configure a DataSync scheduled task to
send the images to the EFS file system every 24 hours.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: DataSync ajanı yerel NFS dosya sistemine erişir, veriyi Direct Connect üzerinden taşır ve zamanlanmış bir DataSync görevi görüntüleri EFS'e düzenli olarak kopyalar; en az ek bileşenle yönetilen çözümdür. A, betik ve Lambda ile iki aşamalı bir S3 süreci gerektirir. B'deki Storage Gateway file gateway EFS'e değil kendi S3 destekli paylaşımına yazar. C de S3 ve Lambda ara adımını ekleyerek yönetim yükünü artırır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html](https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html)
>   - [https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html)

---

Soru 28 / 63 · Dosya: 28.jpeg · Question 30 of 65

A company's application uses Network Load Balancers, Auto Scaling groups, Amazon EC2
instances, and databases that are deployed in an Amazon VPC. The company wants to
capture information about traffic to and from the network interfaces in near real time in its
Amazon VPC. The company wants to send the information to Amazon OpenSearch Service
for analysis. Which solution will meet these requirements?

A)  Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the
log data to the log group. Use Amazon Kinesis Data Streams to stream the logs from the log
group to OpenSearch Service.

B)  Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the
log data to the log group. Use Amazon Data Firehose to stream the logs from the log group
to OpenSearch Service.

C)  Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the
trail. Use Amazon Kinesis Data Streams to stream the logs from the trail to OpenSearch
Service.

D)  Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the
trail. Use Amazon Data Firehose to stream the logs from the trail to OpenSearch Service.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: VPC Flow Logs ağ arayüzü trafik kayıtlarını CloudWatch Logs log grubuna gönderir ve Amazon Data Firehose bu logları OpenSearch Service'e yönetilen şekilde iletir. C ve D, VPC Flow Logs için hedef olmayan CloudTrail trail'lerini kullanır (CloudTrail API çağrılarını kaydeder). A, OpenSearch'e teslim için ek bir tüketici gerektirdiğinden B kadar uygun değildir.

---

Soru 29 / 63 · Dosya: 29.jpeg · Question 31 of 65

A company is building a new application to process documents that users upload. The
application must send processed documents back to users in email messages. The
application must include a mechanism to store any documents that fail to process. The
application must store uploaded documents durably for up to 18 months. The application
must process documents as soon as users upload them. The company wants to use
Amazon SQS queues and Amazon SNS topics. Which combination of actions will meet
these requirements with the LEAST management overhead? (Select THREE.)

A)  Configure an SQS dead-letter queue to store any messages that the Amazon EC2 Auto
Scaling group does not process.

B)  Store the uploaded documents in an Amazon S3 bucket. Configure an S3 event
notification to publish a message to an SNS topic for each new document.

C)  Subscribe an SQS queue to an SNS topic. Configure the topic to insert messages into the
queue. Configure an AWS Lambda function to consume the queue.

D)  Configure an SQS dead-letter queue to store any messages that the AWS Lambda
function does not process.

E)  Subscribe an SQS queue to an SNS topic. Configure the topic to insert messages into the
queue. Configure an Amazon EC2 Auto Scaling group to consume the queue.

F)  Store the uploaded documents in an Amazon Kinesis data stream. Use an AWS Lambda
function to read data from the stream and to send messages to an SNS topic.

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

Soru 30 / 63 · Dosya: 30.jpeg · Question 32 of 65

A company uses an organization in AWS Organizations to manage multiple AWS accounts.
Multiple teams access each AWS account by assuming IAM roles. Each team has a unique
IAM role. Each IAM role has a unique set of permissions. A security team wants to
automate some security tasks by deploying AWS Lambda functions within each AWS
account. The security team wants to ensure that only members of the security team can
modify the Lambda functions directly. Which solution will meet these requirements?

A)  Create a service control policy (SCP) that prevents any entity from making changes to
Lambda functions except for the IAM role of the security team that is specified in the
Principal key. Attach the SCP to the root of the organization.

B)  Create an IAM policy that denies all changes to the Amazon Resource Names (ARNs) of
the Lambda functions. Attach the IAM policy to the root user of each AWS account.

C)  Create a service control policy (SCP) that denies all changes to Lambda functions.
Attach the SCP to the root of the organization.

D)  Create a service control policy (SCP) that prevents any entity from making changes to
Lambda functions except for the IAM role of the security team that is specified in the
Condition clause. Attach the SCP to the root of the organization.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: SCP organizasyonun köküne uygulanır ve Lambda fonksiyonlarında değişikliği, Condition içinde belirtilen güvenlik ekibi rolü dışındaki tüm kimlikler için engeller. A'daki Principal öğesi SCP'lerde desteklenmediği için geçersizdir. B, IAM politikasını root kullanıcıya eklediği için çalışmaz ve C, güvenlik ekibi dahil herkes için değişikliği tamamen engeller.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html)
>   - [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)

---

Soru 31 / 63 · Dosya: 31.jpeg · Question 33 of 65

A solutions architect is designing a scalable web application that runs on Amazon EC2. The
application users must stay on the same server after login. The application must be
protected from common exploits. Which solution will meet these requirements?

A)  Create an Application Load Balancer (ALB) with a target group. Attach the target group
to an Auto Scaling group. Enable duration-based stickiness on the target group. Associate
the ALB with an AWS Network Firewall firewall.

B)  Create a Network Load Balancer (NLB) with a target group. Attach the target group to
an Auto Scaling group. Enable duration-based stickiness on the target group. Associate the
NLB with an AWS WAF web ACL.

C)  Create an Application Load Balancer (ALB) with a target group. Attach the target group
to an Auto Scaling group. Enable application-based stickiness on the target group.
Associate the ALB with an AWS WAF web ACL.

D)  Create a Network Load Balancer (NLB) with a target group. Attach the target group to
an Auto Scaling group. Enable target group stickiness on the NLB. Associate the NLB with
an AWS Network Firewall firewall.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C'dir: ALB, uygulama tabanlı stickiness ile girişten sonra oturumu uygulamanın kendi çerezine göre aynı sunucuda tutar ve ALB'ye bağlanan AWS WAF web ACL ile yaygın web saldırılarına karşı koruma sağlar. B yanlıştır çünkü AWS WAF web ACL'i NLB'ye ilişkilendirilemez. A ve D, koruma için AWS Network Firewall'u bir load balancer'a bağlamayı önerir; bu, uygulama katmanındaki yaygın saldırıları filtrelemek için doğru yaklaşım değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/options.html;](https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/options.html;)
>   - [https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html)

---

Soru 32 / 63 · Dosya: 32.jpeg · Question 34 of 65

A company provides a three-tier web application to its customers. Each customer has an
AWS account in which the application is deployed, and these accounts are members of the
company's organization in AWS Organizations. To protect its customers' AWS accounts and
applications, the company wants to monitor them for unusual and unexpected behavior.
The company needs to analyze and monitor customer VPC Flow Logs, AWS CloudTrail logs,
and DNS logs. What should a solutions architect do to meet these requirements?

A)  Designate an account in the organization as the AWS Shield administrator account.
Enable Shield and Shield logs in every account, and invite the accounts to join the Shield
administrator account. Analyze Shield findings in the Shield administrator account.

B)  Designate an account in the organization as the Amazon GuardDuty administrator
account. Enable GuardDuty in every account, and invite the accounts to join the GuardDuty
administrator account. Analyze GuardDuty findings in the GuardDuty administrator
account.

C)  Designate an account in the organization as the AWS WAF administrator account.
Enable AWS WAF and AWS WAF logs in every account, and invite the accounts to join the
AWS WAF administrator account. Analyze AWS WAF logs in the AWS WAF administrator
account.

D)  Designate an account in the organization as the AWS Resource Access Manager (AWS
RAM) administrator account. Enable AWS RAM in every account, and invite the accounts to
join the AWS RAM administrator account. Analyze AWS RAM logs in the AWS RAM
administrator account.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B'dir: GuardDuty, CloudTrail yönetim olayları, VPC Flow Logs ve DNS loglarını otomatik analiz eden tehdit tespit servisidir ve AWS Organizations ile birden çok hesabı tek bir yönetici hesaptan izlemeye imkân verir. A (Shield) DDoS koruma servisidir, log tabanlı anomali tespiti yapmaz. C (WAF) web isteklerini filtreler, D (RAM) ise kaynak paylaşım servisidir; ikisi de bu izleme gereksinimini karşılamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html)

---

Soru 33 / 63 · Dosya: 33.jpeg · Question 35 of 65

A company is building an ecommerce application that uses a relational database to store
customer data and order history. The company also needs a solution to store 100 GB of
product images. The company expects the traffic flow for the application to be predictable.
Which solution will meet these requirements MOST cost-effectively?

A)  Use Amazon RDS for MySQL for the database. Store the product images in an Amazon
S3 bucket.

B)  Use Amazon DynamoDB for the database. Store the product images in an Amazon S3
bucket.

C)  Use Amazon RDS for MySQL for the database. Store the product images in an Amazon
Aurora MySQL database.

D)  Create three Amazon EC2 instances. Install MongoDB software on the instances to use
as the database. Store the product images in an Amazon RDS for MySQL database with a
Multi-AZ deployment.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: RDS for MySQL müşteri ve sipariş verilerini ilişkisel olarak yönetirken, 100 GB ürün görselleri Amazon S3'te tutularak veritabanı depolama maliyeti düşürülür. B'deki DynamoDB ilişkisel veri modeli için uygun değildir. C görselleri Aurora veritabanında tutarak gereksiz pahalı bir yapı oluşturur; D ise kendi yönettiğiniz EC2 üzerinde MongoDB kullanır ve görselleri RDS'te saklar, bu da hem operasyonel yük hem maliyet açısından kötü bir seçimdir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html;](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html;)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

---

Soru 34 / 63 · Dosya: 34.jpeg · Question 36 of 65

A healthcare company uses an application to store patient data in an Amazon RDS for
PostgreSQL database. The company needs a solution to encrypt the data in transit when
the application connects to the database. Which solution will meet these requirements?

A)  Configure IAM authentication for the application to connect to the RDS database

B)  Encrypt the RDS database by using an AWS managed AWS KMS key.

C)  Create a snapshot of the RDS database. Restore the snapshot to a new RDS instance.
Enable AWS KMS encryption on the new RDS database.

D)  Download AWS provided certificate bundles to configure SSL parameters in connection
strings

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D'dir: RDS, istemci ile veritabanı arasındaki SSL/TLS bağlantısını şifreler ve AWS'nin sağladığı sertifika paketleri bu bağlantıyı yapılandırmak için kullanılır. A bir kimlik doğrulama yöntemidir ve bağlantıdaki veriyi şifrelemez. B ve C veriyi depolama sırasında (at rest) KMS ile şifreler; veri veritabanına gönderilirken şifrelenmez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html)

---

Soru 35 / 63 · Dosya: 35.jpeg · Question 37 of 65

A company plans to store quarterly financial statements in a dedicated Amazon S3 bucket.
The financial statements must not be modified or deleted after they are saved to the S3
bucket. Which solution will meet these requirements?

A)  Create the S3 bucket with S3 Object Lock in governance mode

B)  Create the S3 bucket with MFA delete enabled

C)  Create the S3 bucket with S3 Object Lock in compliance mode

D)  Create S3 buckets in two AWS Regions. Use S3 Cross-Region Replication (CRR) between
the buckets

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C'dir: S3 Object Lock compliance modunda korunan nesne sürümü, saklama süresi dolana kadar kök kullanıcı dahil hiçbir kullanıcı tarafından değiştirilemez veya silinemez. A (governance mode) s3:BypassGovernanceRetention izni olan kullanıcıların kilidi kaldırmasına izin verdiği için yetersizdir. B (MFA Delete) yalnızca kalıcı silmeyi MFA'ya bağlar, D ise çoğaltma sağlar ama değişikliği engellemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

---

Soru 36 / 63 · Dosya: 36.jpeg · Question 38 of 65

A company tracks customer satisfaction by using surveys that the company hosts on its
website. The surveys sometimes reach thousands of customers every hour. Survey results
are currently sent in email messages to the company so company employees can
manually review results and assess customer sentiment. The company wants to automate
the customer survey process. Survey results must be available for the previous 12 months.
Which solution will meet these requirements in the MOST scalable way?

A)  Send the survey results data to an Amazon API Gateway endpoint that is connected to
an Amazon Simple Queue Service (Amazon SQS) queue. Create an AWS Lambda function to
poll the SQS queue, call Amazon Comprehend for sentiment analysis, and save the results
to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.

B)  Send the survey results data to an API that is running on an Amazon EC2 instance.
Configure the API to store the survey results as a new record in an Amazon DynamoDB
table, call Amazon Comprehend for sentiment analysis, and save the results in a second
DynamoDB table. Set the TTL for all records to 365 days in the future.

C)  Write the survey results data to an Amazon S3 bucket. Use S3 Event Notifications to
invoke an AWS Lambda function to read the data and call Amazon Rekognition for
sentiment analysis. Store the sentiment analysis results in a second S3 bucket. Use S3
lifecycle policies on each bucket to expire objects after 365 days.

D)  Send the survey results data to an Amazon API Gateway endpoint that is connected to
an Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke
an AWS Lambda function that calls Amazon Lex for sentiment analysis and saves the results
to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: API Gateway ve SQS ile yüksek hacimli yanıtlar tamponlanır, Lambda kuyruğu işleyip Amazon Comprehend ile duygu analizi yapar ve sonuçları DynamoDB'ye yazar; TTL 365 gün olarak ayarlandığında son 12 ayın verisi korunur. B, EC2 üzerinde çalışan bir API nedeniyle ölçeklenebilirliği sınırlar. C metin duygu analizi için Rekognition kullanır, bu bir görüntü ve video servisidir; D ise duygu analizi için Amazon Lex (sohbet botu) kullanır, bu yanlış servistir.

---

Soru 37 / 63 · Dosya: 37.jpeg · Question 39 of 65

A company uses AWS Batch to run batch processing jobs that analyze manufacturing
sensor data. The jobs read input files from an Amazon S3 bucket and write processed
results to an Amazon Aurora MySQL database. The S3 bucket and the Aurora database
must be encrypted at rest to meet compliance requirements. The company needs to grant
the AWS Batch compute environment secure access to read from Amazon S3 and write to
the database. Which solution will meet these requirements?

A)  Create an AWS KMS customer managed key to encrypt the S3 bucket and Aurora MySQL
database. Use the kms:Decrypt and kms:GenerateDataKey conditions in the key policy.
Configure an IAM role that has access to the KMS key, Amazon S3, and Aurora in the AWS
Batch job definition.

B)  Create an AWS KMS AWS managed key to encrypt the S3 bucket and Aurora MySQL
database. Use the kms:Decrypt and kms:GenerateDataKey conditions in the key policy. Add
an S3 bucket policy that uses the AWS Batch job role as principal.

C)  Grant S3 access to only the AWS Batch job role by using a bucket policy. Create a VPC
endpoint for Aurora that has encrypted access. Configure the Aurora security group to allow
inbound traffic only from the AWS Batch compute subnets.

D)  Enable SSL/TLS enforcement on the Aurora MySQL cluster. Configure an S3 VPC
gateway endpoint to use an endpoint policy that allows access only from the AWS Batch job
role. Update the Aurora security group to allow access from only the AWS Batch compute
subnets.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: Müşteri yönetimli KMS anahtarı S3 ve Aurora verisini durağan halde şifreler ve anahtar politikasındaki kms:Decrypt ile kms:GenerateDataKey koşulları ile erişim, Batch iş rolü üzerinden kontrol edilir. B'deki AWS yönetilen anahtarın anahtar politikası değiştirilemez, bu yüzden bu koşullar uygulanamaz. C ve D erişimi ağ veya bucket politikalarıyla kısıtlar ancak verinin durağan halde şifrelenmesini sağlamaz; D yalnızca aktarım sırasındaki TLS'i ele alır.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html;](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html;)
>   - [https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)

---

Soru 38 / 63 · Dosya: 38.jpeg · Question 40 of 65

A media company needs to migrate its Windows-based video editing environment to AWS.
The company's current environment processes 4K video files that require sustained
throughput of 2 GB per second across multiple concurrent users. The company's storage
needs increase by 1 TB each week. The company needs a shared file system that supports
SMB protocol and can scale automatically based on storage demands. Which solution will
meet these requirements?

A)  Deploy an Amazon FSx for Windows File Server Multi-AZ file system with SSD storage.

B)  Deploy an Amazon EFS file system in Max I/O mode. Provision mount targets in multiple
Availability Zones.

C)  Deploy an Amazon FSx for Lustre file system with a Persistent 2 deployment type.
Provision the file system with 2 TB of storage.

D)  Deploy Amazon S3 File Gateway by using multiple cached gateway instances. Configure
S3 Transfer Acceleration.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A'dır: FSx for Windows File Server, SMB protokolünü destekleyen ve Windows iş yükleri için tasarlanmış paylaşımlı bir dosya sistemidir; Multi-AZ ve SSD yapılandırması yüksek verim ve dayanıklılık sağlar. B (EFS) NFS tabanlıdır ve Windows SMB istemcileriyle uyumlu değildir; C (FSx for Lustre) Linux tabanlı yüksek performanslı hesaplama içindir ve SMB sunmaz. D, nesne depolamaya dayalı bir ağ geçidi olduğundan bu düzenleme için uygun paylaşımlı dosya sistemi değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/fsx/latest/WindowsGuide/performance.html;](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/performance.html;)
>   - [https://docs.aws.amazon.com/fsx/latest/WindowsGuide/automate-storage-capacity-increase.html](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/automate-storage-capacity-increase.html)

---

Soru 39 / 63 · Dosya: 39.jpeg · Question 41 of 65

A company has a large data workload that runs for 6 hours each day. The company cannot
lose any data while the process is running. A solutions architect is designing an Amazon
EMR cluster configuration to support this critical data workload. Which solution will meet
these requirements MOST cost-effectively?

A)  Configure a long-running cluster that runs the primary node and core nodes on
On-Demand Instances and the task nodes on Spot Instances.

B)  Configure a transient cluster that runs the primary node and core nodes on On-Demand
Instances and the task nodes on Spot Instances.

C)  Configure a transient cluster that runs the primary node on an On-Demand Instance and
the core nodes and task nodes on Spot Instances.

D)  Configure a long-running cluster that runs the primary node on an On-Demand Instance,
the core nodes on Spot Instances, and the task nodes on Spot Instances.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B'dir: Geçici (transient) küme yalnızca 6 saatlik iş için çalışır ve iş bitince kapanır, bu da boşta geçen saatler için ücret ödenmesini önler. Primary ve core düğümler On-Demand olduğundan Spot kesintisiyle veri kaybı riski yoktur, task düğümleri ise Spot ile maliyeti düşürür. A kalıcı küme ile günün 18 saatini boşta ödemek anlamına gelir; C ve D'de core düğümler Spot üzerinde olduğundan kesinti halinde veri kaybı riski doğar.

---

Soru 40 / 63 · Dosya: 40.jpeg · Question 42 of 65

A financial analytics company aggregates historical stock market data in an Amazon S3
bucket. External financial research accounts need access to the data. The company wants
to make the data accessible to other AWS accounts while reducing the company's ongoing
costs. Which solution will meet these requirements?

A)  Create an S3 interface endpoint for the bucket

B)  Configure the S3 bucket as a Requester Pays bucket.

C)  Deploy an Amazon CloudFront distribution in front of the bucket

D)  Enable S3 Transfer Acceleration. Share the accelerated endpoint with the external
accounts

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B'dir: Requester Pays bucket'ta veri indirme ve istek maliyetini istekte bulunan hesap öder, depolama maliyetini ise bucket sahibi öder; böylece şirketin sürekli maliyetleri düşer. A (interface endpoint) yalnızca VPC içinden özel erişim sağlar ve dış hesaplar için maliyeti azaltmaz. C (CloudFront) ve D (Transfer Acceleration) ek ücret doğurur ve bu hedefle uyumlu değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html)

---

Soru 41 / 63 · Dosya: 41.jpeg · Question 43 of 65

A company wants to optimize Amazon S3 storage costs for the company's video content.
The company needs to archive the video content 6 months after the company creates the
content. The company must delete the content after 24 months. Which solution will meet
these requirements with the LEAST operational effort?

A)  Use S3 Intelligent-Tiering to transition the content to S3 Glacier Flexible Retrieval after 6
months.

B)  Create an Amazon EFS lifecycle configuration to transition the content to S3 Glacier
Flexible Retrieval after 6 months. Configure an Object Lock retention period of 24 months.

C)  Use AWS DataSync to transition the content to S3 Glacier Deep Archive after 6 months.
Configure a lifecycle rule to expire the objects after 24 months.

D)  Create an S3 Lifecycle configuration to transition the content to S3 Glacier Flexible
Retrieval after 6 months and to expire objects after 24 months.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D seçeneği doğru: tek bir S3 Lifecycle kuralı, nesneleri 6. ayda S3 Glacier Flexible Retrieval'a taşıyıp 24. ayda sildiği için en az operasyonel çaba gerektirir. A yanlış çünkü Intelligent-Tiering nesneleri silmez ve Glacier Flexible Retrieval'a 6 aylık kuralla geçiş sunmaz. B yanlış çünkü EFS bir dosya sistemidir ve Object Lock silmeyi engeller, otomatik silme yapmaz. C yanlış çünkü DataSync bir veri aktarım aracıdır, yaşam döngüsü kuralının yerini tutmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)

---

Soru 42 / 63 · Dosya: 42.jpeg · Question 44 of 65

A company runs several applications across multiple AWS accounts. The networking
portion of the company's monthly AWS bill has increased significantly during the past 3
weeks. The company needs to quickly identify which network usage types are driving the
cost increase. The company also wants to compare the daily cost trend with the previous
month. The company does not want to build a custom reporting solution. Which solution
will meet these requirements?

A)  Use AWS Budgets to analyze network-related costs, group the results by usage type,
and compare daily costs across time periods.

B)  Use AWS Cost Explorer to analyze network-related costs, group the results by usage
type, and compare daily costs across time periods.

C)  Use Amazon CloudWatch to analyze network throughput and bytes processed, compare
utilization trends, and calculate the billing increase.

D)  Use AWS Cost and Usage Reports with Amazon Athena to analyze network-related
charges, build usage queries, and compare costs across time periods.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B seçeneği doğru: AWS Cost Explorer maliyetleri USAGE_TYPE boyutuna göre gruplayabilir ve günlük granülerlikle dönemleri karşılaştırabilir; hazır bir araç olduğu için özel rapor gerektirmez. A yanlış çünkü Budgets bütçe eşiği ve uyarı aracıdır, geçmiş maliyetlerin kullanım türüne göre ayrıntılı analizi için tasarlanmamıştır. C yanlış çünkü CloudWatch fatura verisi değil, metrik izler. D yanlış çünkü CUR ve Athena ile sorgu yazmak, şirketin istemediği özel bir raporlama çözümü gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html)
>   - [https://docs.aws.amazon.com/cost-management/latest/userguide/ce-modify.html](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-modify.html)

---

Soru 43 / 63 · Dosya: 43.jpeg · Question 45 of 65

A solutions architect is managing an application in the us-west-1 Region and wants to set
up disaster recovery in the us-east-1 Region. The Amazon Aurora MySQL DB cluster needs
an RPO of 1 minute and an RTO of 2 minutes. Which approach meets these requirements
with no negative performance impact?

A)  Enable synchronous replication.

B)  Enable asynchronous binlog replication.

C)  Create an Aurora Global Database.

D)  Copy Aurora incremental snapshots to the us-east-1 Region.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C seçeneği doğru: Aurora Global Database, birincil bölgeden us-east-1'e asenkron replikasyon yapar, RPO genellikle saniyeler düzeyindedir ve birincil kümenin performansında belirgin bir ek yük oluşturmaz. A yanlış çünkü Aurora Global Database replikasyonu belgelerde asenkron olarak tanımlanır. B yanlış çünkü binlog replikasyonu manuel kurulum ve yönetim gerektirir, yönetilen failover sağlamaz ve kaynak performansını etkileyebilir. D yanlış çünkü artımlı snapshot kopyaları periyodik olduğu için RPO hedefini karşılamaz ve geri yükleme RTO'yu aşar.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html)

---

Soru 44 / 63 · Dosya: 44.jpeg · Question 46 of 65

A company is building a serverless application to process large volumes of sensor data.
The application uses an AWS Lambda function and stores data in an Amazon DynamoDB
table. The application needs to handle unpredictable traffic patterns with occasional spikes
in data ingestion. The company wants to optimize application performance to respond to
spikes in demand. Which solution will meet these requirements?

A)  Configure provisioned concurrency for the Lambda function. Use on-demand capacity
mode for the DynamoDB table.

B)  Configure provisioned concurrency for the Lambda function. Use provisioned capacity
mode for the DynamoDB table.

C)  Configure reserved concurrency for the Lambda function. Use on-demand capacity
mode for the DynamoDB table.

D)  Configure reserved concurrency for the Lambda function. Use provisioned capacity
mode for the DynamoDB table.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A seçeneği doğru: provisioned concurrency Lambda ortamlarını önceden başlatarak soğuk başlatma gecikmesini azaltır, DynamoDB on-demand modu ise öngörülemeyen trafik artışlarını kapasite planlaması olmadan karşılar. B yanlış çünkü DynamoDB provisioned modu ani artışlar için kapasite planlaması gerektirir ve artışlarda kısıtlamaya yol açabilir. C ve D yanlış çünkü reserved concurrency yalnızca eşzamanlılık üst sınırını ayırır, soğuk başlatmayı azaltmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html)
>   - [https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html)

---

Soru 45 / 63 · Dosya: 45.jpeg · Question 47 of 65

A company is running a critical workload on an Amazon RDS DB instance. The company
needs the DB instance to be highly available. The company requires a recovery time of
less than 5 minutes. Which solution will meet these requirements?

A)  Create a read replica of the DB instance.

B)  Use AWS CloudFormation to create a template of the DB instance.

C)  Take periodic snapshots of the DB instance. Store the snapshots in Amazon S3.

D)  Modify the DB instance to use a Multi-AZ deployment.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D seçeneği doğru: Multi-AZ dağıtımında RDS, farklı Availability Zone'daki bekleme örneğine otomatik failover yapar ve belgelere göre bu süre tipik olarak 60-120 saniyedir, yani 5 dakikalık hedefin altındadır. A yanlış çünkü okuma kopyası okuma ölçeklemek için kullanılır, otomatik failover sağlamaz. B yanlış çünkü CloudFormation şablonu yalnızca altyapı tanımıdır, yüksek erişilebilirlik sağlamaz. C yanlış çünkü snapshot'tan geri yükleme 5 dakikalık süreyi aşabilir ve sürekli erişilebilirlik sağlamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.Failover.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.Failover.html)

---

Soru 46 / 63 · Dosya: 46.jpeg · Question 48 of 65

A company runs a fleet of Amazon EC2 On-Demand Instances to support a document
processing application that has variable usage patterns. The company wants to optimize
compute costs for the application. The company needs a solution that can tolerate
occasional disruptions to document processing jobs. Which solution will meet these
requirements?

A)  Replace the EC2 instances with an Amazon EKS cluster that uses AWS Fargate Spot
capacity.

B)  Use the EC2 Spot Instance placement score feature to identify which instance type to
use. Deploy the application on Spot Instances.

C)  Create a single EC2 Auto Scaling group. Set a mixed configuration of EC2 On-Demand
Instances and EC2 Spot Instances.

D)  Continue to use EC2 On-Demand Instances. Purchase Convertible Reserved Instances.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C seçeneği doğru: tek bir Auto Scaling grubunda karışık yapılandırma hem On-Demand hem Spot örnekleri çalıştırır, Spot ile maliyet tasarrufu sağlanır ve kesinti riski Capacity Rebalancing ile yönetilebilir. A maliyet açısından işe yarayabilir, ancak uygulamanın konteynerleştirilmesini ve EKS'e taşınmasını gerektirdiği için mevcut EC2 filosunu optimize eden istenen çözümle uyuşmaz. B yanlış çünkü Spot placement score bölge ve Availability Zone önerir, instance tipi seçmez ve dağıtım yapmaz. D yanlış çünkü Convertible Reserved Instances değişken kullanımda taahhüt maliyeti yaratır ve kesinti toleransı sağlamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/userguide/mixed-instances-groups-set-up-overview.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/mixed-instances-groups-set-up-overview.html)
>   - [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html)

---

Soru 47 / 63 · Dosya: 47.jpeg · Question 49 of 65

A solutions architect creates a VPC that includes two public subnets and two private
subnets. A corporate security mandate requires the solutions architect to launch all
Amazon EC2 instances in a private subnet. However, when the solutions architect launches
an EC2 instance that runs a web server on ports 80 and 443 in a private subnet, no
external internet traffic can connect to the server. What should the solutions architect do
to resolve this issue?

A)  Attach the EC2 instance to an Auto Scaling group in a private subnet. Ensure that the
DNS record for the website resolves to the Auto Scaling group identifier.

B)  Provision an internet-facing Application Load Balancer (ALB) in a public subnet. Add the
EC2 instance to the target group that is associated with the ALB. Ensure that the DNS
record for the website resolves to the ALB.

C)  Launch a NAT gateway in a private subnet. Update the route table for the private
subnets to add a default route to the NAT gateway. Attach a public Elastic IP address to the
NAT gateway.

D)  Ensure that the security group that is attached to the EC2 instance allows HTTP traffic
on port 80 and HTTPS traffic on port 443. Ensure that the DNS record for the website
resolves to the public IP address of the EC2 instance.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B seçeneği doğru: ALB internete açık public subnet'te durur, EC2 örneği private subnet'te kalır ve hedef grup üzerinden trafik alır; DNS kaydı ALB'ye yönlendirilerek güvenlik zorunluluğu korunur. A yanlış çünkü Auto Scaling grubu tek başına internet trafiğini private subnet'e yönlendiremez. C yanlış çünkü NAT gateway yalnızca private subnet'ten dışa giden trafiğe izin verir, dışarıdan gelen bağlantıyı kabul etmez. D yanlış çünkü private subnet'teki örneğin internete açık bir yolu yoktur, güvenlik grubu değişikliği bunu çözmez.

---

Soru 48 / 63 · Dosya: 48.jpeg · Question 50 of 65

A company runs multiple web applications on Amazon EC2 instances behind a single
Application Load Balancer (ALB). The application experiences unpredictable traffic spikes
throughout each day. The traffic spikes cause high latency. The unpredictable spikes last
less than 3 hours. The company needs a solution to resolve the latency issue caused by
traffic spikes. Which solution will meet this requirement?

A)  Use EC2 instances in an Auto Scaling group. Configure the ALB and Auto Scaling group
to use a target tracking scaling policy

B)  Use EC2 Reserved Instances in an Auto Scaling group. Configure the Auto Scaling group
to use a scheduled scaling policy based on peak traffic hours

C)  Use EC2 Spot Instances in an Auto Scaling group. Configure the Auto Scaling group to
use a scheduled scaling policy based on peak traffic hours

D)  Use EC2 Reserved Instances in an Auto Scaling group. Replace the ALB with a Network
Load Balancer (NLB).

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A seçeneği doğru: ALB ile ilişkili hedef izleme politikası (ALBRequestCountPerTarget) trafik arttığında ASG kapasitesini otomatik artırıp azaltır, bu da öngörülemeyen ve kısa süreli yükü karşılar. B ve C yanlış çünkü zamanlanmış ölçekleme öngörülemeyen artışlara uymaz; Reserved örnekler ölçeklenmez, Spot örnekleri de kesintiye uğrayabilir. D yanlış çünkü NLB'ye geçmek kapasiteyi artırmaz ve gecikmenin asıl nedeni olan yetersiz kapasiteyi çözmez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredefinedMetricSpecification.html](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredefinedMetricSpecification.html)

---

Soru 49 / 63 · Dosya: 49.jpeg · Question 51 of 65

An ecommerce company is building a near real-time bidding platform on AWS. The
company deploys the application as a target of an Application Load Balancer (ALB). The
application stores bidding and catalog information in an Amazon DynamoDB table. The
DynamoDB table receives heavy read loads. The company wants to add a feature to the
application that allows customers to view the items that have received the most bids in the
previous 24 hours. The company needs a solution to ensure that the bid prices are updated
in near real time. The solution must not affect the performance of the DynamoDB table.
Which solution will meet these requirements with the LEAST operational overhead?

A)  Configure an Amazon Kinesis data stream to replicate changes in item bid prices from
the Amazon DynamoDB table to Amazon Managed Service for Apache Flink. Write the bid
prices back into the DynamoDB table.

B)  Configure the DynamoDB table to perform a zero-ETL data transfer to an Amazon
Redshift table every hour. Configure the application to query the Redshift table to retrieve
the latest bid prices.

C)  Configure an AWS Glue connector to export the data from a DynamoDB snapshot to an
Amazon S3 bucket. Invoke an AWS Lambda function to calculate the latest bid price and to
send the latest price to the application.

D)  Configure an Amazon DynamoDB Accelerator (DAX) cluster with eventual consistency.
Update the application configuration to access the DAX endpoint to retrieve the latest price
information.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D seçeneği en uygun: DAX, DynamoDB'nin yoğun okuma yükünü önbellekle karşılar, böylece tablo performansı etkilenmez; uygulama yalnızca DAX endpoint'ine yönlendirildiği için operasyonel yük düşüktür. A seçeneği gerçek zamanlıdır ve okuma yükünü artırmaz, ancak Kinesis, Flink uygulaması ve geri yazma akışı en yüksek operasyonel yükü getirir. B seçeneği saatlik aktarım öngörüyor, oysa Zero-ETL belgelerinde artımlı replikasyon 15-30 dakikada bir yapılır; bu gerçek zamanlı değildir. C seçeneği snapshot tabanlı olduğu için gerçek zamanlı değildir ve Glue ile Lambda yönetimi gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/kds.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/kds.html)
>   - [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/RedshiftforDynamoDB-zero-etl.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/RedshiftforDynamoDB-zero-etl.html)

---

Soru 50 / 63 · Dosya: 50.jpeg · Question 52 of 65

An ecommerce company runs an application on Amazon EC2 instances that store order
data in attached Amazon EBS volumes. The instances maintain active database
connections that cannot be interrupted. The company needs an automatic recovery
solution for when the underlying hardware fails. The solution must preserve the instance IP
address and attached storage. Which solution will meet these requirements?

A)  Create an Amazon CloudWatch alarm that triggers a recover action when the
StatusCheckFailed_Instance metric fails.

B)  Create an Amazon CloudWatch alarm that triggers a recover action when the
StatusCheckFailed_System metric fails.

C)  Configure an Amazon EC2 Auto Scaling group that has a minimum capacity and a
maximum capacity of one instance.

D)  Configure AWS Systems Manager to run an automation document that launches a
replacement instance.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B seçeneği doğru: StatusCheckFailed_System metriği için recover eylemi, donanım sorununda örneği sağlıklı bir ana makineye taşır ve instance ID, private IP, Elastic IP ile bağlı EBS birimlerini korur. A yanlış çünkü recover eylemi yalnızca StatusCheckFailed_System ile kullanılabilir, Instance kontrolü ile kullanılamaz. C yanlış çünkü Auto Scaling yeni bir örnek başlatır, IP adresi ve bağlı EBS birimleri korunmaz. D yanlış çünkü yeni bir örnek başlatmak IP adresini ve depolamayı korumaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html)
>   - [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingAlarmActions.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingAlarmActions.html)

---

Soru 51 / 63 · Dosya: 51.jpeg · Question 53 of 65

A company currently stores 500 documents in an Amazon S3 bucket that is in one AWS
Region. The company will generate new documents in the future. The new documents will
be between 5 KB and 4 GB in size. The company must ensure that all existing and future
documents are stored in multiple Regions at all times. Which combination of solutions will
meet these requirements with the LEAST operational effort? (Select TWO.)

A)  Create an AWS Lambda function that is invoked by S3 Event Notifications. Configure the
function to copy each document from the original S3 bucket to an S3 bucket in a second
Region.

B)  Create an AWS Batch job that runs every 15 minutes. Configure the Batch job to use the
S3 CopyObject API to copy new documents to an S3 bucket in a second Region.

C)  Use S3 Batch Replication on the existing S3 bucket to replicate the existing documents
to a second S3 bucket in a second Region.

D)  Enable S3 Cross-Region Replication by adding a replication configuration to the source
S3 bucket.

E)  Use AWS DataSync to synchronize existing documents with an S3 bucket in a second
Region.

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C ve D dogrudur. S3 Cross-Region Replication (D), kaynak bucket'a replikasyon yapilandirmasi eklendiginde yeni nesneleri ikinci Region'a otomatik kopyalar; S3 Batch Replication (C) ise replikasyon yapilandirmasi varken mevcut nesneleri de kopyalar, boylece hem mevcut hem gelecekteki belgeler coklu Region'da tutulur. A, B ve E ozel kod, zamanlanmis isler veya elle senkronizasyon gerektirdigi icin daha fazla operasyonel cabayi gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html)

---

Soru 52 / 63 · Dosya: 52.jpeg · Question 54 of 65

A law firm stores client case files on Amazon EFS. The law firm must retain file system
backups for 7 years to comply with legal requirements. Which solution will meet these
requirements with the LEAST operational overhead?

A)  Use Amazon EFS automatic backups to back up the file system continuously.

B)  Use AWS Backup to create backup schedules and retention policies for the file system.

C)  Create an AWS Lambda function to copy files from the EFS file system to an Amazon S3
bucket daily. Set an S3 Lifecycle configuration for the S3 bucket.

D)  Create an Amazon EventBridge rule that invokes an AWS Lambda function. Configure
the Lambda function to create EFS backups and to store the backups in an Amazon S3
bucket. Set an S3 Lifecycle configuration for the S3 bucket.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B dogrudur: AWS Backup ile yedekleme plani olusturup her yedek icin saklama suresini tanimlamak, yonetilen bir cozumle yedekleme ve saklama yonetimi saglar. A'daki EFS otomatik yedeklemeleri varsayilan olarak 35 gun saklanir, bu nedenle 7 yillik saklama gereksinimini karsilamaz. C ve D, Lambda kodu, zamanlama ve S3 yasam dongusu kurallari gibi ek bilesenler gerektirdigi icin daha fazla operasyonel yuk getirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html)

---

Soru 53 / 63 · Dosya: 53.jpeg · Question 55 of 65

A company is building a serverless application to process clickstream data from its
website. The clickstream data is sent to an Amazon Kinesis Data Streams data stream from
the application web servers. The company wants to enrich the clickstream data by joining
the clickstream data with customer profile data from an Amazon Aurora Multi-AZ database.
The company wants to use Amazon Redshift to analyze the enriched data. The solution
must be highly available. Which solution will meet these requirements?

A)  Use an AWS Lambda function to process and enrich the clickstream data. Use the same
Lambda function to write the clickstream data to Amazon S3. Use Amazon Redshift
Spectrum to query the enriched data in Amazon S3.

B)  Use an Amazon EC2 Spot instance to poll the data stream and enrich the clickstream
data. Configure the EC2 instance to use the COPY command to send the enriched results to
Amazon Redshift.

C)  Use an Amazon ECS task with AWS Fargate Spot capacity to poll the data stream and
enrich the clickstream data. Configure the EC2 instance to use the COPY command to send
the enriched results to Amazon Redshift.

D)  Use Amazon Data Firehose to load the clickstream data from Kinesis Data Streams to
Amazon S3. Use AWS Glue crawlers to infer the schema and populate the AWS Glue Data
Catalog. Use Amazon Athena to query the raw data in Amazon S3.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A dogrudur: AWS Lambda sunucusuz oldugu icin gereksinimle uyumludur; Lambda veriyi zenginlestirip S3'e yazar ve Amazon Redshift Spectrum, zenginlestirilmis veriyi S3 uzerinde yukleme yapmadan sorgular. B ve C, EC2 Spot veya Fargate Spot gibi sunucu tabanli bilesenler ve EC2 instance'ina atifla COPY komutu kullandigi icin sunucusuz sartini karsilamaz. D, Redshift kullanmaz ve Aurora'daki musteri profili verileriyle birlestirme yapmaz; yalnizca Athena ile ham veriyi sorgular.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html)

---

Soru 54 / 63 · Dosya: 54.jpeg · Question 56 of 65

A company recently migrated its web application to the AWS Cloud. The company uses an
Amazon EC2 instance to run multiple processes to host the application. The processes
include an Apache web server that serves static content. The Apache web server makes
requests to a PHP application that uses a local Redis server for user sessions. The company
wants to redesign the architecture to be highly available and to use AWS managed
solutions. Which solution will meet these requirements?

A)  Use AWS Elastic Beanstalk to host the static content and the PHP application. Configure
Elastic Beanstalk to deploy its EC2 instance into a public subnet. Assign a public IP address.

B)  Use AWS Lambda to host the static content and the PHP application. Use an Amazon API
Gateway REST API to proxy requests to the Lambda function. Set the API Gateway CORS
configuration to respond to the domain name. Configure Amazon ElastiCache (Redis OSS) to
handle session information.

C)  Keep the backend code on the EC2 instance. Create an Amazon ElastiCache (Redis OSS)
cluster that has Multi-AZ enabled. Configure the ElastiCache (Redis OSS) cluster in cluster
mode. Copy the frontend resources to Amazon S3. Configure the backend code to reference
the EC2 instance.

D)  Configure an Amazon CloudFront distribution with an Amazon S3 endpoint to an S3
bucket that is configured to host the static content. Configure an Application Load Balancer
that targets an Amazon ECS service that runs AWS Fargate tasks for the PHP application.
Configure the PHP application to use an Amazon ElastiCache (Redis OSS) cluster that runs
in multiple Availability Zones.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D dogrudur: statik icerik CloudFront ve S3 uzerinden sunulur, PHP uygulamasi ALB arkasinda Fargate uzerinde calisan bir ECS servisine dagitilir ve oturum verileri birden fazla AZ'de calisan ElastiCache (Redis OSS) kumesinde tutulur. A tek bir public subnet ve public IP'li EC2 orneğine bagli kalir, yuksek erisilebilirlik saglamaz. B, PHP uygulamasinin Lambda'ya tasinmasini gerektirir ve kapsamli bir mimari degisiklik getirir; C ise backend'i tek bir EC2 orneginde birakir ve yuksek erisilebilirligi karsilamaz.

---

Soru 55 / 63 · Dosya: 55.jpeg · Question 57 of 65

A company runs batch processing and reporting microservices on Amazon EKS. Users
access the microservices through web-based HTTP endpoints. The company wants to
distribute traffic to multiple backend services based on URL patterns. Which solution will
route incoming requests to the appropriate microservices MOST cost-effectively?

A)  Use the AWS Load Balancer Controller to provision a Network Load Balancer.

B)  Use the AWS Load Balancer Controller to provision an Application Load Balancer.

C)  Use an AWS Lambda function to route the requests to Amazon EKS.

D)  Use Amazon API Gateway to route the requests to Amazon EKS.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B dogrudur: AWS Load Balancer Controller ile olusturulan Application Load Balancer, HTTP isteklerini URL yolu ve host kurallarina gore farkli EKS servislerine yonlendirir ve tek bir load balancer ile maliyeti dusuk tutar. A'daki Network Load Balancer 4. katmanda calisir ve URL'ye gore yonlendirme yapamaz. C ve D, istekleri EKS'e ulastirmak icin Lambda veya API Gateway gibi ek bir bilesen ekler; bu da gereksiz maliyet getirir.

---

Soru 56 / 63 · Dosya: 56.jpeg · Question 58 of 65

An analytics company wants to deploy a custom extract, transform, and load (ETL) solution
as a containerized application on AWS. The application requires high-performance access
to files that are in a centralized repository. File processing can take up to 1 hour to finish.
Which solution will meet these requirements?

A)  Deploy an AWS Lambda function from a container image. Create and attach an Amazon
EFS file system to the function.

B)  Deploy containers on Amazon ECS with the Amazon EC2 launch type. Configure the EC2
instances to use instance store volumes.

C)  Deploy containers on Amazon ECS with the AWS Fargate launch type. Mount an Amazon
EFS file system to the containers.

D)  Create an Amazon S3 Express One Zone bucket to store the files. Deploy an AWS
Lambda function from a container image. Process files from the S3 Express One Zone
bucket.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C dogrudur: Fargate uzerindeki ECS gorevleri 1 saate kadar suren isleme icin uygundur ve merkezi depodaki dosyalara paylasilan, yuksek performansli erisim icin Amazon EFS baglanabilir; EFS, Fargate gorevlerinde Linux platform surum 1.4.0 ve sonrasinda desteklenir. A ve D, Lambda'nin en fazla 15 dakika (900 saniye) calisabilmesi nedeniyle 1 saatlik isleme suresini karsilayamaz. B, EC2 instance store kullanir; bu, instance'a yerel ve gecici depolamadir ve merkezi depoya paylasilan erisim saglamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html)
>   - [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html)

---

Soru 57 / 63 · Dosya: 57.jpeg · Question 59 of 65

A company is launching a new application that will be hosted on Amazon EC2 instances. A
solutions architect needs to design a solution that does not allow public IPv4 access that
originates from the internet. However, the solution must allow the EC2 instances to make
outbound IPv4 internet requests. The initial design proposal shows that the EC2 instances
would be located in two private subnets across two Availability Zones. The entire
architecture must be highly available. How should the solutions architect change the
architecture to meet these requirements?

A)  Deploy a NAT gateway in public subnets in both Availability Zones. Create and configure
one route table for each private subnet.

B)  Deploy an internet gateway in public subnets in both Availability Zones. Create and
configure a shared route table for the private subnets.

C)  Deploy a NAT gateway in public subnets in both Availability Zones. Create and configure
a shared route table for the private subnets.

D)  Deploy an egress-only internet gateway in public subnets in both Availability Zones.
Create and configure one route table for each private subnet.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A dogrudur: her Availability Zone'da public subnet'e yerlestirilen bir NAT gateway, private subnet'lerdeki EC2 orneklerinin giden IPv4 istekleri yapmasini saglar ve internetten gelen baglantiyi engeller. Her private subnet'in kendi AZ'sindeki NAT gateway'e yonlendiren ayri bir route table'i olmasi, bir AZ arizasinda da erisilebilirligi korur. B internet gateway kullanir ve genel IPv4 erisimine izin verir; C tek bir paylasilan route table ile tek NAT gateway'e bagimlilik yaratir; D egress-only internet gateway yalnizca IPv6 icindir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html)

---

Soru 58 / 63 · Dosya: 58.jpeg · Question 60 of 65

A company operates a content management system for thousands of concurrent users on
Amazon EC2 instances in a VPC. The company needs to deploy additional EC2 instances to
handle increased application tier workloads from new users. The VPC lacks sufficient IP
addresses for the new instances. Which solution provides the required capacity with the
LEAST operational overhead?

A)  Add a new non-overlapping IPv4 CIDR block to the VPC. Create additional subnets that
use the new CIDR range. Launch the new EC2 instances in the new subnets.

B)  Create a new VPC that has new subnets. Establish a VPC peering connection between
the two VPCs. Update the route tables in both VPCs to route traffic to the peer VPC's CIDR
block through the peering connection. Launch the new EC2 instances in the new VPC.

C)  Deploy a transit gateway. Attach the existing VPC and a new VPC to the transit gateway.
Configure transit gateway route tables to route traffic between the two VPCs. Launch the
new EC2 instances in the new VPC.

D)  Create a new VPC that has new subnets. Deploy an AWS Site-to-Site VPN connection
between the VPCs. Use an EC2-based VPN solution in the first VPC and a virtual private
gateway in the new VPC. Update the route tables to direct traffic through the VPN tunnel.
Launch the new EC2 instances in the new VPC.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: Mevcut VPC'ye ikincil bir IPv4 CIDR bloğu eklenebilir ve bu blok üzerinde oluşturulan yeni subnet'lere EC2 örnekleri aynı VPC içinde başlatılabilir. B ve C yeni bir VPC ile peering veya transit gateway gibi ek bağlantı katmanları gerektirir. D ise gereksiz bir VPN altyapısı ekler; bu nedenle yalnızca A en az operasyonel yükle kapasiteyi sağlar.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html)
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/add-ipv4-cidr.html](https://docs.aws.amazon.com/vpc/latest/userguide/add-ipv4-cidr.html)

---

Soru 59 / 63 · Dosya: 59.jpeg · Question 61 of 65

A company needs to use container images for a new project. A development team requires
full access to a new Amazon ECR repository. A solutions architect creates a second ECR
repository by using an existing repository as a template. A solutions architect creates a
new IAM role that has the AmazonEC2ContainerRegistryFullAccess policy attached. The [?]
When a developer tries to push a docker image to the second repository by using the new
IAM role, the command fails with an authorization error. What is the likely cause of the
error?

A)  The token that the developer retrieved to log in to the docker repository by using the
aws ecr get-login-password command is older than 2 hours.

B)  The IAM role that is assigned to the development team does not have permission to pull
images from the repository.

C)  The developer does not have multi-factor authentication (MFA) enabled.

D)  The new repository was created from an ECR repository policy that denies pushing
images.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: Yeni depo, mevcut bir deponun repository policy'si kopyalanarak oluşturulmuş ve bu politika push işlemini reddediyor. IAM politikası ile kaynak politikası arasında bir taraf açıkça reddederse işlem engellenir; bu yüzden rolde AmazonEC2ContainerRegistryFullAccess bulunsa bile push başarısız olur. A yanlıştır çünkü ECR giriş token'ı 12 saat geçerlidir; B yanlıştır çünkü hata push sırasında oluşur ve rol zaten tam erişime sahiptir; C yanlıştır çünkü ECR kimlik doğrulaması MFA'ya bağlı değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html)
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)

---

Soru 60 / 63 · Dosya: 60.jpeg · Question 62 of 65

A company is designing a serverless application to process a large number of events within
an AWS account. The application saves the events to a data warehouse for further
analysis. The application sends incoming events to an Amazon SQS queue. Traffic between
the application and the SQS queue must not use public IP addresses. Which solution will
meet these requirements?

A)  Create a VPC endpoint for Amazon SQS. Set the queue policy to deny all access except
from the VPC endpoint.

B)  Configure server-side encryption with SQS-managed keys (SSE-SQS).

C)  Configure AWS STS to generate temporary credentials for resources that access the
queue.

D)  Configure VPC Flow Logs to detect SQS traffic that leaves the VPC.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: SQS için bir arayüz VPC endpoint'i kullanıldığında trafik public internete çıkmadan AWS ağı üzerinden gider. Kuyruk politikasında aws:SourceVpce koşulu ile erişim yalnızca bu endpoint'e kısıtlanabilir. B yalnızca veriyi depolamadayken şifreler, ağ yolunu değiştirmez; C geçici kimlik bilgisi üretir ama trafiğin public IP üzerinden gitmesini engellemez; D trafiği yalnızca izler, engellemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html)
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies-access-p](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies-access-p)

---

Soru 61 / 63 · Dosya: 61.jpeg · Question 63 of 65

A healthcare company needs a storage solution for electronic health records (EHRs). The
company must store the EHRs for at least 10 years to comply with regulations. The
company rarely accesses the records. The records must be secure, immutable, and
retrievable within a few hours when needed. Which solution will meet these requirements
in the MOST cost-effective way?

A)  Store the records in Amazon S3 Standard. Enable Server-side encryption with Amazon
S3 managed keys (SSE-S3) and S3 Versioning.

B)  Store the records in Amazon S3 Glacier Flexible Retrieval. Configure S3 Object Lock and
set a retention period of 10 years.

C)  Store the records in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA).
Configure an S3 Lifecycle policy to remove records after 10 years.

D)  Store the records in Amazon S3 Intelligent-Tiering. Configure automatic archiving to the
Archive Access tier.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: S3 Glacier Flexible Retrieval düşük saklama maliyeti sunar ve Standard geri getirme 3-5 saat sürer, bu da 'birkaç saat içinde' gereksinimini karşılar. S3 Object Lock, compliance modunda 10 yıllık saklama süresi boyunca kayıtların silinmesini veya üzerine yazılmasını engelleyerek değişmezlik sağlar. A pahalı S3 Standard kullanır ve sürümleme değişmezlik sağlamaz; C tek AZ'de tutar ve süre sonunda kayıt silen bir kurala dayanır; D'de Object Lock olmadığı için değişmezlik gereksinimi karşılanmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

---

Soru 62 / 63 · Dosya: 62.jpeg · Question 64 of 65

A research laboratory needs to process a multi-terabyte dataset multiple times each day.
The laboratory requires sub-millisecond latency while processing the data. Hundreds of
Amazon EC2 Linux instances will process the data from the source and store the data in a
different location. Which solution will meet these requirements?

A)  Create an Amazon FSx for NetApp ONTAP file system. Set each volume's tiering policy
to All. Import the raw data into the file system. Mount the file system on the EC2 instances.

B)  Create an Amazon S3 bucket to store the raw data. Create an Amazon FSx for Lustre file
system that uses persistent SSD storage. Configure the FSx for Lustre file system to import
data from and export data to Amazon S3. Mount the file system on the EC2 instances.

C)  Create an Amazon S3 bucket to store the raw data. Create an Amazon FSx for Lustre file
system that uses persistent HDD storage. Configure the FSx for Lustre file system to import
data from and export data to Amazon S3. Mount the file system on the EC2 instances using
a Gateway Load Balancer.

D)  Create an Amazon FSx for Windows File Server Multi-AZ file system with HDD storage.
Enable shadow copies. Mount the file system on the EC2 instances by using SMB protocol.

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

Soru 63 / 63 · Dosya: 63.jpeg · Question 65 of 65

A company wants to use Amazon EC2 instances to provide a static website to users all
over the world. The company needs to minimize latency for the users. Which solution
meets these requirements?

A)  Use EC2 instances in a single Availability Zone.

B)  Use EC2 instances across multiple Availability Zones in the same AWS Region.

C)  Use Amazon CloudFront with the EC2 instances configured as the source.

D)  Use EC2 instances in the same edge location and the same AWS Region.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C: CloudFront içeriği dünya genelindeki kenar konumlarında önbelleğe alır ve kullanıcılara daha yakın yerden sunar; EC2 örneği de HTTP(S) orijin olarak kullanılabilir. A tek AZ'de olduğu için hem dayanıklılığı hem de uzak kullanıcılar için gecikmeyi kötüleştirir; B aynı bölgede birden fazla AZ kullanır ama global kullanıcılar için gecikmeyi azaltmaz; D geçersizdir çünkü kenar konumları EC2 örneği barındırmak için kullanılmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)
>   - [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html)