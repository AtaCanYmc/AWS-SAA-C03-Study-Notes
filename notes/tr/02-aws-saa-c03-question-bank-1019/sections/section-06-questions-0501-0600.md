# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 06

> **Soru Aralığı:** 501 - 600 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #500

A company has multiple Windows file servers on premises. The company wants to migrate and
consolidate its files into an Amazon FSx for Windows File Server file system. File permissions
must be preserved to ensure that access rights do not change.
Which solutions will meet these requirements? (Choose two.)

A. Deploy AWS DataSync agents on premises. Schedule DataSync tasks to transfer the data to
the FSx for Windows File Server file system.

B. Copy the shares on each file server into Amazon S3 buckets by using the AWS CLI. Schedule
AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.

C. Remove the drives from each file server. Ship the drives to AWS for import into Amazon S3.
Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.

D. Order an AWS Snowcone device. Connect the device to the on-premises network. Launch
AWS DataSync agents on the device. Schedule DataSync tasks to transfer the data to the FSx for
Windows File Server file system.

E. Order an AWS Snowball Edge Storage Optimized device. Connect the device to the
on-premises network. Copy data to the device by using the AWS CLI. Ship the device back to
AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for
Windows File Server file system.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** AWS DataSync aracılarını şirket içinde dağıtın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın. Bir AWS Snowcone cihazı sipariş edin. Cihazı şirket içi ağa bağlayın. Cihazda AWS DataSync aracılarını başlatın. Verileri Windows Dosya Sunucusu dosya sistemi için FSx'e aktarmak üzere DataSync görevlerini zamanlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Question 501
A company wants to ingest customer payment data into the company's data lake in Amazon S3.
The company receives payment data every minute on average. The company wants to analyze
the payment data in real time. Then the company wants to ingest the data into the data lake.
Which solution will meet these requirements with the MOST operational efficiency?

A. Use Amazon Kinesis Data Streams to ingest data. Use AWS Lambda to analyze the data in
real time.

B. Use AWS Glue to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real
time.

C. Use Amazon Kinesis Data Firehose to ingest data. Use Amazon Kinesis Data Analytics to
analyze the data in real time.

D. Use Amazon API Gateway to ingest data. Use AWS Lambda to analyze the data in real time.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri almak için Amazon Kinesis Data Firehose'u kullanın. Verileri gerçek zamanlı olarak analiz etmek için Amazon Kinesis Data Analytics'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Question 502
A company runs a website that uses a content management system (CMS) on Amazon EC2.
The CMS runs on a single EC2 instance and uses an Amazon Aurora MySQL Multi-AZ DB
instance for the data tier. Website images are stored on an Amazon Elastic Block Store (Amazon
EBS) volume that is mounted inside the EC2 instance.
Which combination of actions should a solutions architect take to improve the performance and
resilience of the website? (Choose two.)

A. Move the website images into an Amazon S3 bucket that is mounted on every EC2 instance

B. Share the website images by using an NFS share from the primary EC2 instance. Mount this
share on the other EC2 instances.

C. Move the website images onto an Amazon Elastic File System (Amazon EFS) file system that is
mounted on every EC2 instance.

D. Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to
provision new instances behind an Application Load Balancer as part of an Auto Scaling group.
Configure the Auto Scaling group to maintain a minimum of two instances. Configure an
accelerator in AWS Global Accelerator for the website

E. Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to
provision new instances behind an Application Load Balancer as part of an Auto Scaling group.
Configure the Auto Scaling group to maintain a minimum of two instances. Configure an Amazon
CloudFront distribution for the website.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Web sitesi görüntülerini her EC2 bulut sunucusuna bağlanan bir Amazon Elastic File System (Amazon EFS) dosya sistemine taşıyın. Mevcut EC2 bulut sunucusundan bir Amazon Machine Image (AMI) oluşturun. Otomatik Ölçeklendirme grubunun parçası olarak Application Load Balancer'ın arkasında yeni örnekler sağlamak için AMI'yı kullanın. Otomatik Ölçeklendirme grubunu en az iki örneği koruyacak şekilde yapılandırın. Web sitesi için bir Amazon CloudFront dağıtımı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Question 503
A company runs an infrastructure monitoring service. The company is building a new feature that
will enable the service to monitor data in customer AWS accounts. The new feature will call AWS
APIs in customer accounts to describe Amazon EC2 instances and read Amazon CloudWatch
metrics.
What should the company do to obtain access to customer accounts in the MOST secure way?

A. Ensure that the customers create an IAM role in their account with read-only EC2 and
CloudWatch permissions and a trust policy to the company’s account.

B. Create a serverless API that implements a token vending machine to provide temporary AWS
credentials for a role with read-only EC2 and CloudWatch permissions.

C. Ensure that the customers create an IAM user in their account with read-only EC2 and
CloudWatch permissions. Encrypt and store customer access and secret keys in a secrets
management system.

D. Ensure that the customers create an Amazon Cognito user in their account to use an IAM role
with read-only EC2 and CloudWatch permissions. Encrypt and store the Amazon Cognito user
and password in a secrets management system.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Müşterilerin, hesaplarında salt okunur EC2 ve CloudWatch izinlerine ve şirket hesabına yönelik bir güven politikasına sahip bir IAM rolü oluşturduklarından emin olun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 504
A company needs to connect several VPCs in the us-east-1 Region that span hundreds of AWS
accounts. The company's networking team has its own AWS account to manage the cloud
network.
What is the MOST operationally efficient solution to connect the VPCs?

A. Set up VPC peering connections between each VPC. Update each associated subnet’s route
table

B. Configure a NAT gateway and an internet gateway in each VPC to connect each VPC through
the internet

C. Create an AWS Transit Gateway in the networking team’s AWS account. Configure static
routes from each VPC.

D. Deploy VPN gateways in each VPC. Create a transit VPC in the networking team’s AWS
account to connect to each VPC.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ağ ekibinin AWS hesabında bir AWS Transit Gateway oluşturun. Her VPC'den statik rotaları yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Question 505
A company has Amazon EC2 instances that run nightly batch jobs to process data. The EC2
instances run in an Auto Scaling group that uses On-Demand billing. If a job fails on one
instance, another instance will reprocess the job. The batch jobs run between 12:00 AM and
06:00 AM local time every day.
Which solution will provide EC2 instances to meet these requirements MOST cost-effectively?

A. Purchase a 1-year Savings Plan for Amazon EC2 that covers the instance family of the Auto
Scaling group that the batch job uses.

B. Purchase a 1-year Reserved Instance for the specific instance type and operating system of the
instances in the Auto Scaling group that the batch job uses.

C. Create a new launch template for the Auto Scaling group. Set the instances to Spot Instances.
Set a policy to scale out based on CPU usage.

D. Create a new launch template for the Auto Scaling group. Increase the instance size. Set a
policy to scale out based on CPU usage.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubu için yeni bir başlatma şablonu oluşturun. Örnekleri Spot Bulut Sunucuları olarak ayarlayın. CPU kullanımına göre ölçeği genişletecek bir politika ayarlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Question 506
A social media company is building a feature for its website. The feature will give users the ability
to upload photos. The company expects significant increases in demand during large events and
must ensure that the website can handle the upload traffic from users.
Which solution meets these requirements with the MOST scalability?

A. Upload files from the user's browser to the application servers. Transfer the files to an Amazon
S3 bucket.

B. Provision an AWS Storage Gateway file gateway. Upload files directly from the user's browser
to the file gateway.

C. Generate Amazon S3 presigned URLs in the application. Upload files directly from the user's
browser into an S3 bucket.

D. Provision an Amazon Elastic File System (Amazon EFS) file system. Upload files directly from
the user's browser to the file system.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulamada Amazon S3 önceden imzalanmış URL'ler oluşturun. Dosyaları doğrudan kullanıcının tarayıcısından bir S3 klasörüne yükleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Question 507
A company has a web application for travel ticketing. The application is based on a database that
runs in a single data center in North America. The company wants to expand the application to
serve a global user base. The company needs to deploy the application to multiple AWS
Regions. Average latency must be less than 1 second on updates to the reservation database.
The company wants to have separate deployments of its web platform across multiple Regions.
However, the company must maintain a single primary reservation database that is globally
consistent.
Which solution should a solutions architect recommend to meet these requirements?

A. Convert the application to use Amazon DynamoDB. Use a global table for the center
reservation table. Use the correct Regional endpoint in each Regional deployment.

B. Migrate the database to an Amazon Aurora MySQL database. Deploy Aurora Read Replicas in
each Region. Use the correct Regional endpoint in each Regional deployment for access to the
database.

C. Migrate the database to an Amazon RDS for MySQL database. Deploy MySQL read replicas in
each Region. Use the correct Regional endpoint in each Regional deployment for access to the
database.

D. Migrate the application to an Amazon Aurora Serverless database. Deploy instances of the
database to each Region. Use the correct Regional endpoint in each Regional deployment to
access the database. Use AWS Lambda functions to process event streams in each Region to
synchronize the databases.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulamayı Amazon DynamoDB'yi kullanacak şekilde dönüştürün. Merkez ayırma tablosu için genel bir tablo kullanın. Her Bölgesel dağıtımda doğru Bölgesel uç noktayı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Question 508
A company has migrated multiple Microsoft Windows Server workloads to Amazon EC2
instances that run in the us-west-1 Region. The company manually backs up the workloads to
create an image as needed.
In the event of a natural disaster in the us-west-1 Region, the company wants to recover
workloads quickly in the us-west-2 Region. The company wants no more than 24 hours of data
loss on the EC2 instances. The company also wants to automate any backups of the EC2
instances.
Which solutions will meet these requirements with the LEAST administrative effort? (Choose
two.)

A. Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a
backup based on tags. Schedule the backup to run twice daily. Copy the image on demand.

B. Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a
backup based on tags. Schedule the backup to run twice daily. Configure the copy to the
us-west-2 Region.

C. Create backup vaults in us-west-1 and in us-west-2 by using AWS Backup. Create a backup
plan for the EC2 instances based on tag values. Create an AWS Lambda function to run as a
scheduled job to copy the backup data to us-west-2.

D. Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the
EC2 instances based on tag values. Define the destination for the copy as us-west-2. Specify the
backup schedule to run twice daily.

E. Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the
EC2 instances based on tag values. Specify the backup schedule to run twice daily. Copy on
demand to us-west-2.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Etiketlere dayalı bir yedekleme oluşturmak için Amazon EC2 destekli bir Amazon Machine Image (AMI) yaşam döngüsü ilkesi oluşturun. Yedeklemeyi günde iki kez çalışacak şekilde planlayın. Kopyayı us-west-2 Bölgesine yapılandırın. AWS Backup'ı kullanarak bir yedekleme kasası oluşturun. EC2 bulut sunucuları için etiket değerlerine dayalı bir yedekleme planı oluşturmak için AWS Backup'ı kullanın. Kopyanın hedefini us-west-2 olarak tanımlayın. Yedekleme zamanlamasını günde iki kez çalışacak şekilde belirtin.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 509
A company operates a two-tier application for image processing. The application uses two
Availability Zones, each with one public subnet and one private subnet. An Application Load
Balancer (ALB) for the web tier uses the public subnets. Amazon EC2 instances for the
application tier use the private subnets.
Users report that the application is running more slowly than expected. A security audit of the
web server log files shows that the application is receiving millions of illegitimate requests from a
small number of IP addresses. A solutions architect needs to resolve the immediate performance
problem while the company investigates a more permanent solution.
What should the solutions architect recommend to meet this requirement?

A. Modify the inbound security group for the web tier. Add a deny rule for the IP addresses that are
consuming resources.

B. Modify the network ACL for the web tier subnets. Add an inbound deny rule for the IP
addresses that are consuming resources.

C. Modify the inbound security group for the application tier. Add a deny rule for the IP addresses
that are consuming resources.

D. Modify the network ACL for the application tier subnets. Add an inbound deny rule for the IP
addresses that are consuming resources.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web katmanı alt ağları için ağ ACL'sini değiştirin. Kaynakları tüketen IP adresleri için gelen reddetme kuralı ekleyin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Question 510
A global marketing company has applications that run in the ap-southeast-2 Region and the
eu-west-1 Region. Applications that run in a VPC in eu-west-1 need to communicate securely
with databases that run in a VPC in ap-southeast-2.
Which network design will meet these requirements?

A. Create a VPC peering connection between the eu-west-1 VPC and the ap-southeast-2 VPC.
Create an inbound rule in the eu-west-1 application security group that allows traffic from the
database server IP addresses in the ap-southeast-2 security group.

B. Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPC.
Update the subnet route tables. Create an inbound rule in the ap-southeast-2 database security
group that references the security group ID of the application servers in eu-west-1.

C. Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1
VPUpdate the subnet route tables. Create an inbound rule in the ap-southeast-2 database security
group that allows traffic from the eu-west-1 application server IP addresses.

D. Create a transit gateway with a peering attachment between the eu-west-1 VPC and the
ap-southeast-2 VPC. After the transit gateways are properly peered and routing is configured,
create an inbound rule in the database security group that references the security group ID of the
application servers in eu-west-1.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Ap-southeast-2 VPC ile eu-west-1 VPC arasında bir VPC eşleme bağlantısı yapılandırınAlt ağ yönlendirme tablolarını güncelleyin. Ap-southeast-2 veritabanı güvenlik grubunda, eu-west-1 uygulama sunucusu IP adreslerinden gelen trafiğe izin veren bir gelen kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.

---

---

Question 511
A company is developing software that uses a PostgreSQL database schema. The company
needs to configure multiple development environments and databases for the company's
developers. On average, each development environment is used for half of the 8-hour workday.
Which solution will meet these requirements MOST cost-effectively?

A. Configure each development environment with its own Amazon Aurora PostgreSQL database

B. Configure each development environment with its own Amazon RDS for PostgreSQL Single-AZ
DB instances

C. Configure each development environment with its own Amazon Aurora On-Demand
PostgreSQL-Compatible database

D. Configure each development environment with its own Amazon S3 bucket by using Amazon S3
Object Select

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her geliştirme ortamını kendi Amazon Aurora İsteğe Bağlı PostgreSQL Uyumlu veritabanıyla yapılandırın
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Question 512
A company uses AWS Organizations with resources tagged by account. The company also uses
AWS Backup to back up its AWS infrastructure resources. The company needs to back up all
AWS resources.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Config to identify all untagged resources. Tag the identified resources
programmatically. Use tags in the backup plan.

B. Use AWS Config to identify all resources that are not running. Add those resources to the
backup vault.

C. Require all AWS account owners to review their resources to identify the resources that need to
be backed up.

D. Use Amazon Inspector to identify all noncompliant resources.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Etiketlenmemiş tüm kaynakları tanımlamak için AWS Config'i kullanın. Tanımlanan kaynakları programlı olarak etiketleyin. Yedekleme planındaki etiketleri kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 513
A social media company wants to allow its users to upload images in an application that is
hosted in the AWS Cloud. The company needs a solution that automatically resizes the images
so that the images can be displayed on multiple device types. The application experiences
unpredictable traffic patterns throughout the day. The company is seeking a highly available
solution that maximizes scalability.
What should a solutions architect do to meet these requirements?

A. Create a static website hosted in Amazon S3 that invokes AWS Lambda functions to resize the
images and store the images in an Amazon S3 bucket.

B. Create a static website hosted in Amazon CloudFront that invokes AWS Step Functions to
resize the images and store the images in an Amazon RDS database.

C. Create a dynamic website hosted on a web server that runs on an Amazon EC2 instance.
Configure a process that runs on the EC2 instance to resize the images and store the images in
an Amazon S3 bucket.

D. Create a dynamic website hosted on an automatically scaling Amazon Elastic Container
Service (Amazon ECS) cluster that creates a resize job in Amazon Simple Queue Service
(Amazon SQS). Set up an image-resizing program that runs on an Amazon EC2 instance to
process the resize jobs.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3'te barındırılan ve görüntüleri yeniden boyutlandırmak ve görüntüleri bir Amazon S3 klasöründe depolamak için AWS Lambda işlevlerini çağıran statik bir web sitesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Question 514
A company is running a microservices application on Amazon EC2 instances. The company
wants to migrate the application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster
for scalability. The company must configure the Amazon EKS control plane with endpoint private
access set to true and endpoint public access set to false to maintain security compliance. The
company must also put the data plane in private subnets. However, the company has received
error notifications because the node cannot join the cluster.
Which solution will allow the node to join the cluster?

A. Grant the required permission in AWS Identity and Access Management (IAM) to the
AmazonEKSNodeRole IAM role.

B. Create interface VPC endpoints to allow nodes to access the control plane.

C. Recreate nodes in the public subnet. Restrict security groups for EC2 nodes.

D. Allow outbound traffic in the security group of the nodes.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Düğümlerin kontrol düzlemine erişmesine izin vermek için arayüz VPC uç noktaları oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Question 515
A company is migrating an on-premises application to AWS. The company wants to use Amazon
Redshift as a solution.
Which use cases are suitable for Amazon Redshift in this scenario? (Choose three.)

A. Supporting data APIs to access data with traditional, containerized, and event-driven
applications

B. Supporting client-side and server-side encryption

C. Building analytics workloads during specified hours and when the application is not active

D. Caching data to reduce the pressure on the backend database

E. Scaling globally to support petabytes of data and tens of millions of requests per minute

F. Creating a secondary replica of the cluster by using the AWS Management Console

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C, E`
> - **Önerilen Çözüm:** İstemci tarafı ve sunucu tarafı şifrelemeyi destekleme Belirli saatlerde ve uygulama etkin olmadığında analitik iş yükleri oluşturma Petabaytlarca veriyi ve dakika başına on milyonlarca isteği desteklemek için küresel olarak ölçeklendirme
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 516
A company provides an API interface to customers so the customers can retrieve their financial
information. nhe company expects a larger number of requests during peak usage times of the
year.
The company requires the API to respond consistently with low latency to ensure customer
satisfaction. The company needs to provide a compute host for the API.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use an Application Load Balancer and Amazon Elastic Container Service (Amazon ECS).

B. Use Amazon API Gateway and AWS Lambda functions with provisioned concurrency.

C. Use an Application Load Balancer and an Amazon Elastic Kubernetes Service (Amazon EKS)
cluster.

D. Use Amazon API Gateway and AWS Lambda functions with reserved concurrency.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tedarik edilen eşzamanlılıkla Amazon API Gateway ve AWS Lambda işlevlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Question 517
A company wants to send all AWS Systems Manager Session Manager logs to an Amazon S3
bucket for archival purposes.
Which solution will meet this requirement with the MOST operational efficiency?

A. Enable S3 logging in the Systems Manager console. Choose an S3 bucket to send the session
data to.

B. Install the Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Export the logs
to an S3 bucket from the group for archival purposes.

C. Create a Systems Manager document to upload all server logs to a central S3 bucket. Use
Amazon EventBridge to run the Systems Manager document against all servers that are in the
account daily.

D. Install an Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Create a
CloudWatch logs subscription that pushes any incoming log events to an Amazon Kinesis Data
Firehose delivery stream. Set Amazon S3 as the destination.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Systems Manager konsolunda S3 günlüğünü etkinleştirin. Oturum verilerinin gönderileceği bir S3 paketi seçin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 518
An application uses an Amazon RDS MySQL DB instance. The RDS database is becoming low
on disk space. A solutions architect wants to increase the disk space without downtime.
Which solution meets these requirements with the LEAST amount of effort?

A. Enable storage autoscaling in RDS

B. Increase the RDS database instance size

C. Change the RDS database instance storage type to Provisioned IOPS

D. Back up the RDS database, increase the storage capacity, restore the database, and stop the
previous instance

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** RDS'de depolama otomatik ölçeklendirmesini etkinleştirin
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 519
A consulting company provides professional services to customers worldwide. The company
provides solutions and tools for customers to expedite gathering and analyzing data on AWS.
The company needs to centrally manage and deploy a common set of solutions and tools for
customers to use for self-service purposes.
Which solution will meet these requirements?

A. Create AWS CloudFormation templates for the customers.

B. Create AWS Service Catalog products for the customers.

C. Create AWS Systems Manager templates for the customers.

D. Create AWS Config items for the customers.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Müşteriler için AWS Hizmet Kataloğu ürünleri oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 520
A company is designing a new web application that will run on Amazon EC2 Instances. The
application will use Amazon DynamoDB for backend data storage. The application traffic will be
unpredictable. The company expects that the application read and write throughput to the
database will be moderate to high. The company needs to scale in response to application traffic.
Which DynamoDB table configuration will meet these requirements MOST cost-effectively?

A. Configure DynamoDB with provisioned read and write by using the DynamoDB Standard table
class. Set DynamoDB auto scaling to a maximum defined capacity.

B. Configure DynamoDB in on-demand mode by using the DynamoDB Standard table class.

C. Configure DynamoDB with provisioned read and write by using the DynamoDB Standard
Infrequent Access (DynamoDB Standard-IA) table class. Set DynamoDB auto scaling to a
maximum defined capacity.

D. Configure DynamoDB in on-demand mode by using the DynamoDB Standard Infrequent
Access (DynamoDB Standard-IA) table class.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** DynamoDB Standard tablo sınıfını kullanarak DynamoDB'yi isteğe bağlı modda yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Question 521
A retail company has several businesses. The IT team for each business manages its own AWS
account. Each team account is part of an organization in AWS Organizations. Each team
monitors its product inventory levels in an Amazon DynamoDB table in the team's own AWS
account.
The company is deploying a central inventory reporting application into a shared AWS account.
The application must be able to read items from all the teams' DynamoDB tables.
Which authentication option will meet these requirements MOST securely?

A. Integrate DynamoDB with AWS Secrets Manager in the inventory application account.
Configure the application to use the correct secret from Secrets Manager to authenticate and read
the DynamoDB table. Schedule secret rotation for every 30 days.

B. In every business account, create an IAM user that has programmatic access. Configure the
application to use the correct IAM user access key ID and secret access key to authenticate and
read the DynamoDB table. Manually rotate IAM access keys every 30 days.

C. In every business account, create an IAM role named BU_ROLE with a policy that gives the
role access to the DynamoDB table and a trust policy to trust a specific role in the inventory
application account. In the inventory account, create a role named APP_ROLE that allows access
to the STS AssumeRole API operation. Configure the application to use APP_ROLE and assume
the crossaccount role BU_ROLE to read the DynamoDB table.

D. Integrate DynamoDB with AWS Certificate Manager (ACM). Generate identity certificates to
authenticate DynamoDB. Configure the application to use the correct certificate to authenticate
and read the DynamoDB table.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Her işletme hesabında, rolün DynamoDB tablosuna erişmesini sağlayan bir politikaya ve envanter uygulama hesabındaki belirli bir role güvenmek için bir güven politikasına sahip BU_ROLE adında bir IAM rolü oluşturun. Envanter hesabında, STS AssumeRole API işlemine erişime izin veren APP_ROLE adlı bir rol oluşturun. Uygulamayı APP_ROLE kullanacak şekilde yapılandırın ve DynamoDB tablosunu okumak için hesaplar arası BU_ROLE rolünü üstlenin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 522
A company runs container applications by using Amazon Elastic Kubernetes Service (Amazon
EKS). The company's workload is not consistent throughout the day. The company wants
Amazon EKS to scale in and out according to the workload.
Which combination of steps will meet these requirements with the LEAST operational overhead?
(Choose two.)

A. Use an AWS Lambda function to resize the EKS cluster.

B. Use the Kubernetes Metrics Server to activate horizontal pod autoscaling.

C. Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster.

D. Use Amazon API Gateway and connect it to Amazon EKS.

E. Use AWS App Mesh to observe network activity.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, C`
> - **Önerilen Çözüm:** Yatay bölme otomatik ölçeklendirmesini etkinleştirmek için Kubernetes Metrics Sunucusunu kullanın. Kümedeki düğüm sayısını yönetmek için Kubernetes Cluster Autoscaler'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 523
A company runs a microservice-based serverless web application. The application must be able
to retrieve data from multiple Amazon DynamoDB tables A solutions architect needs to give the
application the ability to retrieve the data with no impact on the baseline performance of the
application.
Which solution will meet these requirements in the MOST operationally efficient way?

A. AWS AppSync pipeline resolvers

B. Amazon CloudFront with Lambda@Edge functions

C. Edge-optimized Amazon API Gateway with AWS Lambda functions

D. Amazon Athena Federated Query with a DynamoDB connector

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS AppSync işlem hattı çözümleyicileri
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 524
A company wants to analyze and troubleshoot Access Denied errors and Unauthorized errors
that are related to IAM permissions. The company has AWS CloudTrail turned on.
Which solution will meet these requirements with the LEAST effort?

A. Use AWS Glue and write custom scripts to query CloudTrail logs for the errors.

B. Use AWS Batch and write custom scripts to query CloudTrail logs for the errors.

C. Search CloudTrail logs with Amazon Athena queries to identify the errors.

D. Search CloudTrail logs with Amazon QuickSight. Create a dashboard to identify the errors.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Hataları belirlemek için CloudTrail günlüklerini Amazon Athena sorgularıyla arayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.

---

---

Question 525
A company wants to add its existing AWS usage cost to its operation cost dashboard. A
solutions architect needs to recommend a solution that will give the company access to its usage
cost programmatically. The company must be able to access cost data for the current year and
forecast costs for the next 12 months.
Which solution will meet these requirements with the LEAST operational overhead?

A. Access usage cost-related data by using the AWS Cost Explorer API with pagination.

B. Access usage cost-related data by using downloadable AWS Cost Explorer report .csv files.

C. Configure AWS Budgets actions to send usage cost data to the company through FTP.

D. Create AWS Budgets reports for usage cost data. Send the data to the company through
SMTP.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Cost Explorer API'sini sayfalandırmayla kullanarak kullanım maliyetiyle ilgili verilere erişin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 526
A solutions architect is reviewing the resilience of an application. The solutions architect notices
that a database administrator recently failed over the application's Amazon Aurora PostgreSQL
database writer instance as part of a scaling exercise. The failover resulted in 3 minutes of
downtime for the application.
Which solution will reduce the downtime for scaling exercises with the LEAST operational
overhead?

A. Create more Aurora PostgreSQL read replicas in the cluster to handle the load during failover.

B. Set up a secondary Aurora PostgreSQL cluster in the same AWS Region. During failover,
update the application to use the secondary cluster's writer endpoint.

C. Create an Amazon ElastiCache for Memcached cluster to handle the load during failover.

D. Set up an Amazon RDS proxy for the database. Update the application to use the proxy
endpoint.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Veritabanı için bir Amazon RDS proxy'si ayarlayın. Proxy uç noktasını kullanmak için uygulamayı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Question 527
A company has a regional subscription-based streaming service that runs in a single AWS
Region. The architecture consists of web servers and application servers on Amazon EC2
instances. The EC2 instances are in Auto Scaling groups behind Elastic Load Balancers. The
architecture includes an Amazon Aurora global database cluster that extends across multiple
Availability Zones.
The company wants to expand globally and to ensure that its application has minimal downtime.
Which solution will provide the MOST fault tolerance?

A. Extend the Auto Scaling groups for the web tier and the application tier to deploy instances in
Availability Zones in a second Region. Use an Aurora global database to deploy the database in
the primary Region and the second Region. Use Amazon Route 53 health checks with a failover
routing policy to the second Region.

B. Deploy the web tier and the application tier to a second Region. Add an Aurora PostgreSQL
cross-Region Aurora Replica in the second Region. Use Amazon Route 53 health checks with a
failover routing policy to the second Region. Promote the secondary to primary as needed.

C. Deploy the web tier and the application tier to a second Region. Create an Aurora PostgreSQL
database in the second Region. Use AWS Database Migration Service (AWS DMS) to replicate
the primary database to the second Region. Use Amazon Route 53 health checks with a failover
routing policy to the second Region.

D. Deploy the web tier and the application tier to a second Region. Use an Amazon Aurora global
database to deploy the database in the primary Region and the second Region. Use Amazon
Route 53 health checks with a failover routing policy to the second Region. Promote the
secondary to primary as needed.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Web katmanını ve uygulama katmanını ikinci bir Bölgeye dağıtın. Veritabanını birincil Bölgeye ve ikinci Bölgeye dağıtmak için Amazon Aurora global veritabanını kullanın. İkinci Bölgeye yük devretme yönlendirme politikasıyla Amazon Route 53 durum denetimlerini kullanın. Gerektiğinde ikincilden birincilliğe terfi edin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Question 528
A data analytics company wants to migrate its batch processing system to AWS. The company
receives thousands of small data files periodically during the day through FTP. An on-premises
batch job processes the data files overnight. However, the batch job takes hours to finish
running.
The company wants the AWS solution to process incoming data files as soon as possible with
minimal changes to the FTP clients that send the files. The solution must delete the incoming
data files after the files have been processed successfully. Processing for each file needs to take
3-8 minutes.
Which solution will meet these requirements in the MOST operationally efficient way?

A. Use an Amazon EC2 instance that runs an FTP server to store incoming files as objects in
Amazon S3 Glacier Flexible Retrieval. Configure a job queue in AWS Batch. Use Amazon
EventBridge rules to invoke the job to process the objects nightly from S3 Glacier Flexible
Retrieval. Delete the objects after the job has processed the objects.

B. Use an Amazon EC2 instance that runs an FTP server to store incoming files on an Amazon
Elastic Block Store (Amazon EBS) volume. Configure a job queue in AWS Batch. Use Amazon
EventBridge rules to invoke the job to process the files nightly from the EBS volume. Delete the
files after the job has processed the files.

C. Use AWS Transfer Family to create an FTP server to store incoming files on an Amazon Elastic
Block Store (Amazon EBS) volume. Configure a job queue in AWS Batch. Use an Amazon S3
event notification when each file arrives to invoke the job in AWS Batch. Delete the files after the
job has processed the files.

D. Use AWS Transfer Family to create an FTP server to store incoming files in Amazon S3
Standard. Create an AWS Lambda function to process the files and to delete the files after they
are processed. Use an S3 event notification to invoke the Lambda function when the files arrive.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Gelen dosyaları Amazon S3 Standard'ta depolamak üzere bir FTP sunucusu oluşturmak için AWS Transfer Family'yi kullanın. Dosyaları işlemek ve işlendikten sonra dosyaları silmek için bir AWS Lambda işlevi oluşturun. Dosyalar geldiğinde Lambda işlevini çağırmak için bir S3 olay bildirimi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 529
A company is migrating its workloads to AWS. The company has transactional and sensitive data
in its databases. The company wants to use AWS Cloud solutions to increase security and
reduce operational overhead for the databases.
Which solution will meet these requirements?

A. Migrate the databases to Amazon EC2. Use an AWS Key Management Service (AWS KMS)
AWS managed key for encryption.

B. Migrate the databases to Amazon RDS Configure encryption at rest.

C. Migrate the data to Amazon S3 Use Amazon Macie for data security and protection

D. Migrate the database to Amazon RDS. Use Amazon CloudWatch Logs for data security and
protection.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanlarını Amazon RDS'ye taşıyın Kullanımda olmayan şifrelemeyi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Question 530
A company has an online gaming application that has TCP and UDP multiplayer gaming
capabilities. The company uses Amazon Route 53 to point the application traffic to multiple
Network Load Balancers (NLBs) in different AWS Regions. The company needs to improve
application performance and decrease latency for the online game in preparation for user
growth.
Which solution will meet these requirements?

A. Add an Amazon CloudFront distribution in front of the NLBs. Increase the Cache-Control
max-age parameter.

B. Replace the NLBs with Application Load Balancers (ALBs). Configure Route 53 to use
latency-based routing.

C. Add AWS Global Accelerator in front of the NLBs. Configure a Global Accelerator endpoint to
use the correct listener ports.

D. Add an Amazon API Gateway endpoint behind the NLBs. Enable API caching. Override method
caching for the different stages.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** NLB'lerin önüne AWS Global Accelerator'ı ekleyin. Doğru dinleyici bağlantı noktalarını kullanmak için bir Global Accelerator uç noktası yapılandırın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Question 531
A company needs to integrate with a third-party data feed. The data feed sends a webhook to
notify an external service when new data is ready for consumption. A developer wrote an AWS
Lambda function to retrieve data when the company receives a webhook callback. The
developer must make the Lambda function available for the third party to call.
Which solution will meet these requirements with the MOST operational efficiency?

A. Create a function URL for the Lambda function. Provide the Lambda function URL to the third
party for the webhook.

B. Deploy an Application Load Balancer (ALB) in front of the Lambda function. Provide the ALB
URL to the third party for the webhook.

C. Create an Amazon Simple Notification Service (Amazon SNS) topic. Attach the topic to the
Lambda function. Provide the public hostname of the SNS topic to the third party for the webhook.

D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Attach the queue to the
Lambda function. Provide the public hostname of the SQS queue to the third party for the
webhook.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Lambda işlevi için bir işlev URL'si oluşturun. Web kancası için Lambda işlevi URL'sini üçüncü tarafa sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Question 532
A company has a workload in an AWS Region. Customers connect to and access the workload
by using an Amazon API Gateway REST API. The company uses Amazon Route 53 as its DNS
provider. The company wants to provide individual and secure URLs for all customers.
Which combination of steps will meet these requirements with the MOST operational efficiency?
(Choose three.)

A. Register the required domain in a registrar. Create a wildcard custom domain name in a Route
53 hosted zone and record in the zone that points to the API Gateway endpoint.

B. Request a wildcard certificate that matches the domains in AWS Certificate Manager (ACM) in
a different Region.

C. Create hosted zones for each customer as required in Route 53. Create zone records that point
to the API Gateway endpoint.

D. Request a wildcard certificate that matches the custom domain name in AWS Certificate
Manager (ACM) in the same Region.

E. Create multiple API endpoints for each customer in API Gateway.

F. Create a custom domain name in API Gateway for the REST API. Import the certificate from
AWS Certificate Manager (ACM).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D,`
> - **Önerilen Çözüm:** Gerekli alan adını bir kayıt kuruluşuna kaydedin. Route 53'te barındırılan bir bölgede joker karakterli özel alan adı oluşturun ve API Ağ Geçidi uç noktasını işaret eden bölgeye kayıt yapın. Aynı Bölgedeki AWS Sertifika Yöneticisi'ndeki (ACM) özel alan adıyla eşleşen bir joker karakter sertifikası isteyin. REST API için API Gateway'de özel bir alan adı oluşturun. Sertifikayı AWS Sertifika Yöneticisinden (ACM) içe aktarın.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Question 533
A company stores data in Amazon S3. According to regulations, the data must not contain
personally identifiable information (PII). The company recently discovered that S3 buckets have
some objects that contain PII. The company needs to automatically detect PII in S3 buckets and
to notify the company’s security team.
Which solution will meet these requirements?

A. Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData event type
from Macie findings and to send an Amazon Simple Notification Service (Amazon SNS)
notification to the security team.

B. Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type
from GuardDuty findings and to send an Amazon Simple Notification Service (Amazon SNS)
notification to the security team.

C. Use Amazon Macie. Create an Amazon EventBridge rule to filter the
SensitiveData:S3Object/Personal event type from Macie findings and to send an Amazon Simple
Queue Service (Amazon SQS) notification to the security team.

D. Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type
from GuardDuty findings and to send an Amazon Simple Queue Service (Amazon SQS)
notification to the security team.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon Macie'yi kullanın. SensitiveData olay türünü Macie bulgularından filtrelemek ve güvenlik ekibine bir Amazon Simple Notification Service (Amazon SNS) bildirimi göndermek için bir Amazon EventBridge kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Question 534
A company wants to build a logging solution for its multiple AWS accounts. The company
currently stores the logs from all accounts in a centralized account. The company has created an
Amazon S3 bucket in the centralized account to store the VPC flow logs and AWS CloudTrail
logs. All logs must be highly available for 30 days for frequent analysis, retained for an additional
60 days for backup purposes, and deleted 90 days after creation.
Which solution will meet these requirements MOST cost-effectively?

A. Transition objects to the S3 Standard storage class 30 days after creation. Write an expiration
action that directs Amazon S3 to delete objects after 90 days.

B. Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class 30
days after creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90
days. Write an expiration action that directs Amazon S3 to delete objects after 90 days.

C. Transition objects to the S3 Glacier Flexible Retrieval storage class 30 days after creation.
Write an expiration action that directs Amazon S3 to delete objects after 90 days.

D. Transition objects to the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class 30
days after creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90
days. Write an expiration action that directs Amazon S3 to delete objects after 90 days.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Nesneleri oluşturulduktan 30 gün sonra S3 Glacier Esnek Alma depolama sınıfına geçirin. Amazon S3'ü 90 gün sonra nesneleri silmeye yönlendiren bir süre sonu eylemi yazın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Question 535
A company is building an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for its
workloads. All secrets that are stored in Amazon EKS must be encrypted in the Kubernetes etcd
key-value store.
Which solution will meet these requirements?

A. Create a new AWS Key Management Service (AWS KMS) key. Use AWS Secrets Manager to
manage, rotate, and store all secrets in Amazon EKS.

B. Create a new AWS Key Management Service (AWS KMS) key. Enable Amazon EKS KMS
secrets encryption on the Amazon EKS cluster.

C. Create the Amazon EKS cluster with default options. Use the Amazon Elastic Block Store
(Amazon EBS) Container Storage Interface (CSI) driver as an add-on.

D. Create a new AWS Key Management Service (AWS KMS) key with the alias/aws/ebs alias.
Enable default Amazon Elastic Block Store (Amazon EBS) volume encryption for the account.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Yeni bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Amazon EKS kümesinde Amazon EKS KMS gizli dizilerinin şifrelemesini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Question 536
A company wants to provide data scientists with near real-time read-only access to the
company's production Amazon RDS for PostgreSQL database. The database is currently
configured as a Single-AZ database. The data scientists use complex queries that will not affect
the production database. The company needs a solution that is highly available.
Which solution will meet these requirements MOST cost-effectively?

A. Scale the existing production database in a maintenance window to provide enough power for
the data scientists.

B. Change the setup from a Single-AZ to a Multi-AZ instance deployment with a larger secondary
standby instance. Provide the data scientists access to the secondary instance.

C. Change the setup from a Single-AZ to a Multi-AZ instance deployment. Provide two additional
read replicas for the data scientists.

D. Change the setup from a Single-AZ to a Multi-AZ cluster deployment with two readable standby
instances. Provide read endpoints to the data scientists.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kurulumu Single-AZ'den iki okunabilir bekleme bulut sunucusuyla Multi-AZ küme dağıtımına değiştirin. Veri bilimcilerine okuma uç noktaları sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Question 537
A company runs a three-tier web application in the AWS Cloud that operates across three
Availability Zones. The application architecture has an Application Load Balancer, an Amazon
EC2 web server that hosts user session states, and a MySQL database that runs on an EC2
instance. The company expects sudden increases in application traffic. The company wants to
be able to scale to meet future application capacity demands and to ensure high availability
across all three Availability Zones.
Which solution will meet these requirements?

A. Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster
deployment. Use Amazon ElastiCache for Redis with high availability to store session data and to
cache reads. Migrate the web server to an Auto Scaling group that is in three Availability Zones.

B. Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster
deployment. Use Amazon ElastiCache for Memcached with high availability to store session data
and to cache reads. Migrate the web server to an Auto Scaling group that is in three Availability
Zones.

C. Migrate the MySQL database to Amazon DynamoDB Use DynamoDB Accelerator (DAX) to
cache reads. Store the session data in DynamoDB. Migrate the web server to an Auto Scaling
group that is in three Availability Zones.

D. Migrate the MySQL database to Amazon RDS for MySQL in a single Availability Zone. Use
Amazon ElastiCache for Redis with high availability to store session data and to cache reads.
Migrate the web server to an Auto Scaling group that is in three Availability Zones.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Multi-AZ Veritabanı kümesi dağıtımıyla MySQL veritabanını MySQL için Amazon RDS'ye taşıyın. Oturum verilerini depolamak ve okumaları önbelleğe almak için yüksek kullanılabilirliğe sahip Amazon ElastiCache for Redis'i kullanın. Web sunucusunu üç Erişilebilirlik Alanındaki Otomatik Ölçeklendirme grubuna taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Question 538
A global video streaming company uses Amazon CloudFront as a content distribution network
(CDN). The company wants to roll out content in a phased manner across multiple countries.
The company needs to ensure that viewers who are outside the countries to which the company
rolls out content are not able to view the content.
Which solution will meet these requirements?

A. Add geographic restrictions to the content in CloudFront by using an allow list. Set up a custom
error message.

B. Set up a new URL tor restricted content. Authorize access by using a signed URL and cookies.
Set up a custom error message.

C. Encrypt the data for the content that the company distributes. Set up a custom error message.

D. Create a new URL for restricted content. Set up a time-restricted access policy for signed
URLs.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İzin verilenler listesini kullanarak CloudFront'taki içeriğe coğrafi kısıtlamalar ekleyin. Özel bir hata mesajı ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Question 539
A company wants to use the AWS Cloud to improve its on-premises disaster recovery (DR)
configuration. The company's core production business application uses Microsoft SQL Server
Standard, which runs on a virtual machine (VM). The application has a recovery point objective
(RPO) of 30 seconds or fewer and a recovery time objective (RTO) of 60 minutes. The DR
solution needs to minimize costs wherever possible.
Which solution will meet these requirements?

A. Configure a multi-site active/active setup between the on-premises server and AWS by using
Microsoft SQL Server Enterprise with Always On availability groups.

B. Configure a warm standby Amazon RDS for SQL Server database on AWS. Configure AWS
Database Migration Service (AWS DMS) to use change data capture (CDC).

C. Use AWS Elastic Disaster Recovery configured to replicate disk changes to AWS as a pilot
light.

D. Use third-party backup software to capture backups every night. Store a secondary set of
backups in Amazon S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Disk değişikliklerini AWS'ye pilot ışık olarak çoğaltmak için yapılandırılmış AWS Elastic Disaster Recovery'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 540
A company has an on-premises server that uses an Oracle database to process and store
customer information. The company wants to use an AWS database service to achieve higher
availability and to improve application performance. The company also wants to offload reporting
from its primary database system.
Which solution will meet these requirements in the MOST operationally efficient way?

A. Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in
multiple AWS Regions. Point the reporting functions toward a separate DB instance from the
primary DB instance.

B. Use Amazon RDS in a Single-AZ deployment to create an Oracle database. Create a read
replica in the same zone as the primary DB instance. Direct the reporting functions to the read
replica.

C. Use Amazon RDS deployed in a Multi-AZ cluster deployment to create an Oracle database.
Direct the reporting functions to use the reader instance in the cluster deployment.

D. Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora
database. Direct the reporting functions to the reader instances.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Amazon Aurora veritabanı oluşturmak için Multi-AZ bulut sunucusu dağıtımında dağıtılan Amazon RDS'yi kullanın. Raporlama işlevlerini okuyucu örneklerine yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Question 541
A company wants to build a web application on AWS. Client access requests to the website are
not predictable and can be idle for a long time. Only customers who have paid a subscription fee
can have the ability to sign in and use the web application.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose
three.)

A. Create an AWS Lambda function to retrieve user information from Amazon DynamoDB. Create
an Amazon API Gateway endpoint to accept RESTful APIs. Send the API calls to the Lambda
function.

B. Create an Amazon Elastic Container Service (Amazon ECS) service behind an Application
Load Balancer to retrieve user information from Amazon RDS. Create an Amazon API Gateway
endpoint to accept RESTful APIs. Send the API calls to the Lambda function.

C. Create an Amazon Cognito user pool to authenticate users.

D. Create an Amazon Cognito identity pool to authenticate users.

E. Use AWS Amplify to serve the frontend web content with HTML, CSS, and JS. Use an
integrated Amazon CloudFront configuration.

F. Use Amazon S3 static web hosting with PHP, CSS, and JS. Use Amazon CloudFront to serve
the frontend web content.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C, E`
> - **Önerilen Çözüm:** Amazon DynamoDB'den kullanıcı bilgilerini almak için bir AWS Lambda işlevi oluşturun. RESTful API'leri kabul etmek için bir Amazon API Gateway uç noktası oluşturun. API çağrılarını Lambda işlevine gönderin. Kullanıcıların kimliğini doğrulamak için bir Amazon Cognito kullanıcı havuzu oluşturun. Ön uç web içeriğini HTML, CSS ve JS ile sunmak için AWS Amplify'ı kullanın. Entegre bir Amazon CloudFront yapılandırması kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Question 542
A media company uses an Amazon CloudFront distribution to deliver content over the internet.
The company wants only premium customers to have access to the media streams and file
content. The company stores all content in an Amazon S3 bucket. The company also delivers
content on demand to customers for a specific purpose, such as movie rentals or music
downloads.
Which solution will meet these requirements?

A. Generate and provide S3 signed cookies to premium customers.

B. Generate and provide CloudFront signed URLs to premium customers.

C. Use origin access control (OAC) to limit the access of non-premium customers.

D. Generate and activate field-level encryption to block non-premium customers.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Premium müşterilere CloudFront imzalı URL'ler oluşturun ve sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Question 543
A company runs Amazon EC2 instances in multiple AWS accounts that are individually bled. The
company recently purchased a Savings Pian. Because of changes in the company’s business
requirements, the company has decommissioned a large number of EC2 instances. The
company wants to use its Savings Plan discounts on its other AWS accounts.
Which combination of steps will meet these requirements? (Choose two.)

A. From the AWS Account Management Console of the management account, turn on discount
sharing from the billing preferences section.

B. From the AWS Account Management Console of the account that purchased the existing
Savings Plan, turn on discount sharing from the billing preferences section. Include all accounts.

C. From the AWS Organizations management account, use AWS Resource Access Manager
(AWS RAM) to share the Savings Plan with other accounts.

D. Create an organization in AWS Organizations in a new payer account. Invite the other AWS
accounts to join the organization from the management account.

E. Create an organization in AWS Organizations in the existing AWS account with the existing
EC2 instances and Savings Plan. Invite the other AWS accounts to join the organization from the
management account.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Yönetim hesabının AWS Hesap Yönetimi Konsolu'ndaki faturalandırma tercihleri ​​bölümünden indirim paylaşımını açın. AWS Organizasyonlarında yeni bir ödeyen hesabında bir kuruluş oluşturun. Diğer AWS hesaplarını yönetim hesabından kuruluşa katılmaya davet edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 544
A retail company uses a regional Amazon API Gateway API for its public REST APIs. The API
Gateway endpoint is a custom domain name that points to an Amazon Route 53 alias record. A
solutions architect needs to create a solution that has minimal effects on customers and minimal
data loss to release the new version of APIs.
Which solution will meet these requirements?

A. Create a canary release deployment stage for API Gateway. Deploy the latest API version.
Point an appropriate percentage of traffic to the canary stage. After API verification, promote the
canary stage to the production stage.

B. Create a new API Gateway endpoint with a new version of the API in OpenAPI YAML file
format. Use the import-to-update operation in merge mode into the API in API Gateway. Deploy
the new version of the API to the production stage.

C. Create a new API Gateway endpoint with a new version of the API in OpenAPI JSON file
format. Use the import-to-update operation in overwrite mode into the API in API Gateway. Deploy
the new version of the API to the production stage.

D. Create a new API Gateway endpoint with new versions of the API definitions. Create a custom
domain name for the new API Gateway API. Point the Route 53 alias record to the new API
Gateway API custom domain name.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** API Ağ Geçidi için bir canary sürüm dağıtım aşaması oluşturun. En son API sürümünü dağıtın. Kanarya sahnesine uygun bir trafik yüzdesini yönlendirin. API doğrulamasının ardından kanarya aşamasını üretim aşamasına yükseltin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Question 545
A company wants to direct its users to a backup static error page if the company's primary
website is unavailable. The primary website's DNS records are hosted in Amazon Route 53. The
domain is pointing to an Application Load Balancer (ALB). The company needs a solution that
minimizes changes and infrastructure overhead.
Which solution will meet these requirements?

A. Update the Route 53 records to use a latency routing policy. Add a static error page that is
hosted in an Amazon S3 bucket to the records so that the traffic is sent to the most responsive
endpoints.

B. Set up a Route 53 active-passive failover configuration. Direct traffic to a static error page that
is hosted in an Amazon S3 bucket when Route 53 health checks determine that the ALB endpoint
is unhealthy.

C. Set up a Route 53 active-active configuration with the ALB and an Amazon EC2 instance that
hosts a static error page as endpoints. Configure Route 53 to send requests to the instance only if
the health checks fail for the ALB.

D. Update the Route 53 records to use a multivalue answer routing policy. Create a health check.
Direct traffic to the website if the health check passes. Direct traffic to a static error page that is
hosted in Amazon S3 if the health check does not pass.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Route 53 aktif-pasif yük devretme yapılandırmasını ayarlayın. Route 53 durum kontrolleri ALB uç noktasının sağlıksız olduğunu belirlediğinde trafiği Amazon S3 klasöründe barındırılan statik bir hata sayfasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Question 546
A recent analysis of a company's IT expenses highlights the need to reduce backup costs. The
company's chief information officer wants to simplify the on-premises backup infrastructure and
reduce costs by eliminating the use of physical backup tapes. The company must preserve the
existing investment in the on-premises backup applications and workflows.
What should a solutions architect recommend?

A. Set up AWS Storage Gateway to connect with the backup applications using the NFS interface.

B. Set up an Amazon EFS file system that connects with the backup applications using the NFS
interface.

C. Set up an Amazon EFS file system that connects with the backup applications using the iSCSI
interface.

D. Set up AWS Storage Gateway to connect with the backup applications using the iSCSI-virtual
tape library (VTL) interface.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** iSCSI sanal bant kitaplığı (VTL) arayüzünü kullanarak yedekleme uygulamalarına bağlanmak için AWS Storage Gateway'i kurun.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Question 547
A company has data collection sensors at different locations. The data collection sensors stream
a high volume of data to the company. The company wants to design a platform on AWS to
ingest and process high-volume streaming data. The solution must be scalable and support data
collection in near real time. The company must store the data in Amazon S3 for future reporting.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Kinesis Data Firehose to deliver streaming data to Amazon S3.

B. Use AWS Glue to deliver streaming data to Amazon S3.

C. Use AWS Lambda to deliver streaming data and store the data to Amazon S3.

D. Use AWS Database Migration Service (AWS DMS) to deliver streaming data to Amazon S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3'e akış verileri iletmek için Amazon Kinesis Data Firehose'u kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 548
A company has separate AWS accounts for its finance, data analytics, and development
departments. Because of costs and security concerns, the company wants to control which
services each AWS account can use.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Systems Manager templates to control which AWS services each department can
use.

B. Create organization units (OUs) for each department in AWS Organizations. Attach service
control policies (SCPs) to the OUs.

C. Use AWS CloudFormation to automatically provision only the AWS services that each
department can use.

D. Set up a list of products in AWS Service Catalog in the AWS accounts to manage and control
the usage of specific AWS services.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Organizasyonlarındaki her departman için organizasyon birimleri (OU'lar) oluşturun. Hizmet kontrol politikalarını (SCP'ler) kuruluş birimlerine ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 549
A company has created a multi-tier application for its ecommerce website. The website uses an
Application Load Balancer that resides in the public subnets, a web tier in the public subnets,
and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL
database needs to retrieve product catalog and pricing information that is hosted on the internet
by a third-party provider. A solutions architect must devise a strategy that maximizes security
without increasing operational overhead.
What should the solutions architect do to meet these requirements?

A. Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT
instance.

B. Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all
internet-bound traffic to the NAT gateway.

C. Configure an internet gateway and attach it to the VPModify the private subnet route table to
direct internet-bound traffic to the internet gateway.

D. Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route
table to direct internet-bound traffic to the virtual private gateway.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Genel alt ağlara bir NAT ağ geçidi dağıtın. İnternete bağlı tüm trafiği NAT ağ geçidine yönlendirmek için özel alt ağ yönlendirme tablosunu değiştirin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Question 550
A company is using AWS Key Management Service (AWS KMS) keys to encrypt AWS Lambda
environment variables. A solutions architect needs to ensure that the required permissions are in
place to decrypt and use the environment variables.
Which steps must the solutions architect take to implement the correct permissions? (Choose
two.)

A. Add AWS KMS permissions in the Lambda resource policy.

B. Add AWS KMS permissions in the Lambda execution role.

C. Add AWS KMS permissions in the Lambda function policy.

D. Allow the Lambda execution role in the AWS KMS key policy.

E. Allow the Lambda resource policy in the AWS KMS key policy.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Lambda yürütme rolüne AWS KMS izinlerini ekleyin. AWS KMS anahtar politikasında Lambda yürütme rolüne izin verin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Question 551
A company has a financial application that produces reports. The reports average 50 KB in size
and are stored in Amazon S3. The reports are frequently accessed during the first week after
production and must be stored for several years. The reports must be retrievable within 6 hours.
Which solution meets these requirements MOST cost-effectively?

A. Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier after 7 days.

B. Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Standard-Infrequent
Access (S3 Standard-IA) after 7 days.

C. Use S3 Intelligent-Tiering. Configure S3 Intelligent-Tiering to transition the reports to S3
Standard-Infrequent Access (S3 Standard-IA) and S3 Glacier.

D. Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier Deep Archive
after 7 days.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** S3 Standardını kullanın. Raporları 7 gün sonra S3 Glacier'a geçirmek için bir S3 Yaşam Döngüsü kuralı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Question 552
A company needs to optimize the cost of its Amazon EC2 instances. The company also needs to
change the type and family of its EC2 instances every 2-3 months.
What should the company do to meet these requirements?

A. Purchase Partial Upfront Reserved Instances for a 3-year term.

B. Purchase a No Upfront Compute Savings Plan for a 1-year term.

C. Purchase All Upfront Reserved Instances for a 1-year term.

D. Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** 1 yıllık bir dönem için Peşin Olmayan Bilgi İşlem Tasarruf Planı satın alın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 553
A solutions architect needs to review a company's Amazon S3 buckets to discover personally
identifiable information (PII). The company stores the PII data in the us-east-1 Region and
us-west-2 Region.
Which solution will meet these requirements with the LEAST operational overhead?

A. Configure Amazon Macie in each Region. Create a job to analyze the data that is in Amazon
S3.

B. Configure AWS Security Hub for all Regions. Create an AWS Config rule to analyze the data
that is in Amazon S3.

C. Configure Amazon Inspector to analyze the data that is in Amazon S3.

D. Configure Amazon GuardDuty to analyze the data that is in Amazon S3.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Her Bölgede Amazon Macie'yi yapılandırın. Amazon S3'teki verileri analiz etmek için bir iş oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 554
A company's SAP application has a backend SQL Server database in an on-premises
environment. The company wants to migrate its on-premises application and database server to
AWS. The company needs an instance type that meets the high demands of its SAP database.
On-premises performance data shows that both the SAP application and the database have high
memory utilization.
Which solution will meet these requirements?

A. Use the compute optimized instance family for the application. Use the memory optimized
instance family for the database.

B. Use the storage optimized instance family for both the application and the database.

C. Use the memory optimized instance family for both the application and the database.

D. Use the high performance computing (HPC) optimized instance family for the application. Use
the memory optimized instance family for the database.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Hem uygulama hem de veritabanı için belleği optimize edilmiş bulut sunucusu ailesini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 555
A company runs an application in a VPC with public and private subnets. The VPC extends
across multiple Availability Zones. The application runs on Amazon EC2 instances in private
subnets. The application uses an Amazon Simple Queue Service (Amazon SQS) queue.
A solutions architect needs to design a secure solution to establish a connection between the
EC2 instances and the SQS queue.
Which solution will meet these requirements?

A. Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the
private subnets. Add to the endpoint a security group that has an inbound access rule that allows
traffic from the EC2 instances that are in the private subnets.

B. Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the
public subnets. Attach to the interface endpoint a VPC endpoint policy that allows access from the
EC2 instances that are in the private subnets.

C. Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the
public subnets. Attach an Amazon SQS access policy to the interface VPC endpoint that allows
requests from only a specified VPC endpoint.

D. Implement a gateway endpoint for Amazon SQS. Add a NAT gateway to the private subnets.
Attach an IAM role to the EC2 instances that allows access to the SQS queue.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon SQS için bir arayüz VPC uç noktası uygulayın. Uç noktayı özel alt ağları kullanacak şekilde yapılandırın. Uç noktaya, özel alt ağlardaki EC2 bulut sunucularından gelen trafiğe izin veren bir gelen erişim kuralına sahip bir güvenlik grubu ekleyin.
>
> **Sınav Konu Özeti:**
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Question 556
A solutions architect is using an AWS CloudFormation template to deploy a three-tier web
application. The web application consists of a web tier and an application tier that stores and
retrieves user data in Amazon DynamoDB tables. The web and application tiers are hosted on
Amazon EC2 instances, and the database tier is not publicly accessible. The application EC2
instances need to access the DynamoDB tables without exposing API credentials in the
template.
What should the solutions architect do to meet these requirements?

A. Create an IAM role to read the DynamoDB tables. Associate the role with the application
instances by referencing an instance profile.

B. Create an IAM role that has the required permissions to read and write from the DynamoDB
tables. Add the role to the EC2 instance profile, and associate the instance profile with the
application instances.

C. Use the parameter section in the AWS CloudFormation template to have the user input access
and secret keys from an already-created IAM user that has the required permissions to read and
write from the DynamoDB tables.

D. Create an IAM user in the AWS CloudFormation template that has the required permissions to
read and write from the DynamoDB tables. Use the GetAtt function to retrieve the access and
secret keys, and pass them to the application instances through the user data.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** DynamoDB tablolarından okuma ve yazma için gerekli izinlere sahip bir IAM rolü oluşturun. Rolü EC2 bulut sunucusu profiline ekleyin ve bulut sunucusu profilini uygulama bulut sunucularıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Question 557
A solutions architect manages an analytics application. The application stores large amounts of
semistructured data in an Amazon S3 bucket. The solutions architect wants to use parallel data
processing to process the data more quickly. The solutions architect also wants to use
information that is stored in an Amazon Redshift database to enrich the data.
Which solution will meet these requirements?

A. Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon Redshift data to
enrich the S3 data.

B. Use Amazon EMR to process the S3 data. Use Amazon EMR with the Amazon Redshift data to
enrich the S3 data.

C. Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3
data into Amazon Redshift so that the data can be enriched.

D. Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift
data to enrich the S3 data.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** S3 verilerini işlemek için Amazon EMR'yi kullanın. S3 verilerini zenginleştirmek için Amazon EMR'yi Amazon Redshift verileriyle birlikte kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon Kinesis Gerçek Zamanlı Veri Akışı:** Kinesis Data Streams devasa gerçek zamanlı veri akışlarını özel işleme ve yeniden oynatma desteğiyle toplar; Kinesis Data Firehose ise verileri S3, Redshift veya OpenSearch'e yönetilen biçimde aktarır.

---

---

Question 558
A company has two VPCs that are located in the us-west-2 Region within the same AWS
account. The company needs to allow network traffic between these VPCs. Approximately 500
GB of data transfer will occur between the VPCs each month.
What is the MOST cost-effective solution to connect these VPCs?

A. Implement AWS Transit Gateway to connect the VPCs. Update the route tables of each VPC to
use the transit gateway for inter-VPC communication.

B. Implement an AWS Site-to-Site VPN tunnel between the VPCs. Update the route tables of each
VPC to use the VPN tunnel for inter-VPC communication.

C. Set up a VPC peering connection between the VPCs. Update the route tables of each VPC to
use the VPC peering connection for inter-VPC communication.

D. Set up a 1 GB AWS Direct Connect connection between the VPCs. Update the route tables of
each VPC to use the Direct Connect connection for inter-VPC communication.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** VPC'ler arasında bir VPC eşleme bağlantısı kurun. VPC'ler arası iletişim için VPC eşleme bağlantısını kullanmak üzere her VPC'nin yönlendirme tablolarını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Question 559
A company hosts multiple applications on AWS for different product lines. The applications use
different compute resources, including Amazon EC2 instances and Application Load Balancers.
The applications run in different AWS accounts under the same organization in AWS
Organizations across multiple AWS Regions. Teams for each product line have tagged each
compute resource in the individual accounts.
The company wants more details about the cost for each product line from the consolidated
billing feature in Organizations.
Which combination of steps will meet these requirements? (Choose two.)

A. Select a specific AWS generated tag in the AWS Billing console.

B. Select a specific user-defined tag in the AWS Billing console.

C. Select a specific user-defined tag in the AWS Resource Groups console.

D. Activate the selected tag from each AWS account.

E. Activate the selected tag from the Organizations management account.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** AWS Faturalandırma konsolunda kullanıcı tanımlı belirli bir etiket seçin. Seçilen etiketi Kuruluş yönetimi hesabından etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Question 560
A company's solutions architect is designing an AWS multi-account solution that uses AWS
Organizations. The solutions architect has organized the company's accounts into organizational
units (OUs).
The solutions architect needs a solution that will identify any changes to the OU hierarchy. The
solution also needs to notify the company's operations team of any changes.
Which solution will meet these requirements with the LEAST operational overhead?

A. Provision the AWS accounts by using AWS Control Tower. Use account drift notifications to
identify the changes to the OU hierarchy.

B. Provision the AWS accounts by using AWS Control Tower. Use AWS Config aggregated rules
to identify the changes to the OU hierarchy.

C. Use AWS Service Catalog to create accounts in Organizations. Use an AWS CloudTrail
organization trail to identify the changes to the OU hierarchy.

D. Use AWS CloudFormation templates to create accounts in Organizations. Use the drift
detection operation on a stack to identify the changes to the OU hierarchy.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Control Tower'ı kullanarak AWS hesaplarının temel hazırlığını yapın. Kuruluş birimi hiyerarşisindeki değişiklikleri belirlemek için hesap kayması bildirimlerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 561
A company's website handles millions of requests each day, and the number of requests
continues to increase. A solutions architect needs to improve the response time of the web
application. The solutions architect determines that the application needs to decrease latency
when retrieving product details from the Amazon DynamoDB table.
Which solution will meet these requirements with the LEAST amount of operational overhead?

A. Set up a DynamoDB Accelerator (DAX) cluster. Route all read requests through DAX.

B. Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application.
Route all read requests through Redis.

C. Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web
application. Route all read requests through Memcached.

D. Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table
and populate Amazon ElastiCache. Route all read requests through ElastiCache.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir DynamoDB Hızlandırıcı (DAX) kümesi kurun. Tüm okuma isteklerini DAX aracılığıyla yönlendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Question 562
A solutions architect needs to ensure that API calls to Amazon DynamoDB from Amazon EC2
instances in a VPC do not travel across the internet.
Which combination of steps should the solutions architect take to meet this requirement?
(Choose two.)

A. Create a route table entry for the endpoint.

B. Create a gateway endpoint for DynamoDB.

C. Create an interface endpoint for Amazon EC2.

D. Create an elastic network interface for the endpoint in each of the subnets of the VPC.

E. Create a security group entry in the endpoint's security group to provide access.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** Uç nokta için bir rota tablosu girişi oluşturun. DynamoDB için bir ağ geçidi uç noktası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **VPC Gateway Uç Noktaları (Gateway Endpoints):** VPC yönlendirme tablolarına eklenerek EC2 sunucularının NAT Gateway veya Internet Gateway gerektirmeden Amazon S3 ve DynamoDB'ye güvenli, yüksek bant genişlikli ve tamamen ücretsiz erişmesini sağlar.

---

---

Question 563
A company runs its applications on both Amazon Elastic Kubernetes Service (Amazon EKS)
clusters and on-premises Kubernetes clusters. The company wants to view all clusters and
workloads from a central location.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon CloudWatch Container Insights to collect and group the cluster information.

B. Use Amazon EKS Connector to register and connect all Kubernetes clusters.

C. Use AWS Systems Manager to collect and view the cluster information.

D. Use Amazon EKS Anywhere as the primary cluster to view the other clusters with native
Kubernetes commands.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tüm Kubernetes kümelerini kaydetmek ve bağlamak için Amazon EKS Connector'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 564
A company is building an ecommerce application and needs to store sensitive customer
information. The company needs to give customers the ability to complete purchase transactions
on the website. The company also needs to ensure that sensitive customer data is protected,
even from database administrators.
Which solution meets these requirements?

A. Store sensitive data in an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS
encryption to encrypt the data. Use an IAM instance role to restrict access.

B. Store sensitive data in Amazon RDS for MySQL. Use AWS Key Management Service (AWS
KMS) client-side encryption to encrypt the data.

C. Store sensitive data in Amazon S3. Use AWS Key Management Service (AWS KMS)
server-side encryption to encrypt the data. Use S3 bucket policies to restrict access.

D. Store sensitive data in Amazon FSx for Windows Server. Mount the file share on application
servers. Use Windows file permissions to restrict access.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Hassas verileri MySQL için Amazon RDS'de depolayın. Verileri şifrelemek için AWS Key Management Service (AWS KMS) istemci tarafı şifrelemesini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Question 565
A company has an on-premises MySQL database that handles transactional data. The company
is migrating the database to the AWS Cloud. The migrated database must maintain compatibility
with the company's applications that use the database. The migrated database also must scale
automatically during periods of increased demand.
Which migration solution will meet these requirements?

A. Use native MySQL tools to migrate the database to Amazon RDS for MySQL. Configure elastic
storage scaling.

B. Migrate the database to Amazon Redshift by using the mysqldump utility. Turn on Auto Scaling
for the Amazon Redshift cluster.

C. Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon Aurora.
Turn on Aurora Auto Scaling.

D. Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon
DynamoDB. Configure an Auto Scaling policy.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Veritabanını Amazon Aurora'ya taşımak için AWS Database Migration Service'i (AWS DMS) kullanın. Aurora Otomatik Ölçeklendirmeyi açın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Question 566
A company runs multiple Amazon EC2 Linux instances in a VPC across two Availability Zones.
The instances host applications that use a hierarchical directory structure. The applications need
to read and write rapidly and concurrently to shared storage.
What should a solutions architect do to meet these requirements?

A. Create an Amazon S3 bucket. Allow access from all the EC2 instances in the VPC.

B. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system
from each EC2 instance.

C. Create a file system on a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon
EBS) volume. Attach the EBS volume to all the EC2 instances.

D. Create file systems on Amazon Elastic Block Store (Amazon EBS) volumes that are attached to
each EC2 instance. Synchronize the EBS volumes across the different EC2 instances.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun. EFS dosya sistemini her EC2 örneğinden bağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Question 567
A solutions architect is designing a workload that will store hourly energy consumption by
business tenants in a building. The sensors will feed a database through HTTP requests that will
add up usage for each tenant. The solutions architect must use managed services when
possible. The workload will receive more features in the future as the solutions architect adds
independent components.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors,
process the data, and store the data in an Amazon DynamoDB table.

B. Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2
instances to receive and process the data from the sensors. Use an Amazon S3 bucket to store
the processed data.

C. Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors,
process the data, and store the data in a Microsoft SQL Server Express database on an Amazon
EC2 instance.

D. Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2
instances to receive and process the data from the sensors. Use an Amazon Elastic File System
(Amazon EFS) shared file system to store the processed data.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Sensörlerden veri almak, verileri işlemek ve verileri bir Amazon DynamoDB tablosunda depolamak için Amazon API Gateway'i AWS Lambda işlevleriyle birlikte kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Question 568
A solutions architect is designing the storage architecture for a new web application used for
storing and viewing engineering drawings. All application components will be deployed on the
AWS infrastructure.
The application design must support caching to minimize the amount of time that users wait for
the engineering drawings to load. The application must be able to store petabytes of data.
Which combination of storage and caching should the solutions architect use?

A. Amazon S3 with Amazon CloudFront

B. Amazon S3 Glacier with Amazon ElastiCache

C. Amazon Elastic Block Store (Amazon EBS) volumes with Amazon CloudFront

D. AWS Storage Gateway with Amazon ElastiCache

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon CloudFront ile Amazon S3
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Question 569
An Amazon EventBridge rule targets a third-party API. The third-party API has not received any
incoming traffic. A solutions architect needs to determine whether the rule conditions are being
met and if the rule's target is being invoked.
Which solution will meet these requirements?

A. Check for metrics in Amazon CloudWatch in the namespace for AWS/Events.

B. Review events in the Amazon Simple Queue Service (Amazon SQS) dead-letter queue.

C. Check for the events in Amazon CloudWatch Logs.

D. Check the trails in AWS CloudTrail for the EventBridge events.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS/Events ad alanındaki Amazon CloudWatch'taki ölçümleri kontrol edin.
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Question 570
A company has a large workload that runs every Friday evening. The workload runs on Amazon
EC2 instances that are in two Availability Zones in the us-east-1 Region. Normally, the company
must run no more than two instances at all times. However, the company wants to scale up to six
instances each Friday to handle a regularly repeating increased workload.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create a reminder in Amazon EventBridge to scale the instances.

B. Create an Auto Scaling group that has a scheduled action.

C. Create an Auto Scaling group that uses manual scaling.

D. Create an Auto Scaling group that uses automatic scaling.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Zamanlanmış bir eylemi olan bir Otomatik Ölçeklendirme grubu oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Question 571
A company is creating a REST API. The company has strict requirements for the use of TLS.
The company requires TLSv1.3 on the API endpoints. The company also requires a specific
public third-party certificate authority (CA) to sign the TLS certificate.
Which solution will meet these requirements?

A. Use a local machine to create a certificate that is signed by the third-party CImport the
certificate into AWS Certificate Manager (ACM). Create an HTTP API in Amazon API Gateway
with a custom domain. Configure the custom domain to use the certificate.

B. Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA.
Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom
domain to use the certificate.

C. Use AWS Certificate Manager (ACM) to create a certificate that is signed by the third-party CA.
Import the certificate into AWS Certificate Manager (ACM). Create an AWS Lambda function with
a Lambda function URL. Configure the Lambda function URL to use the certificate.

D. Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA.
Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function
URL to use the certificate.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Üçüncü taraf tarafından imzalanan bir sertifika oluşturmak için yerel bir makine kullanın. Sertifikayı AWS Sertifika Yöneticisine (ACM) aktarın. Amazon API Gateway'de özel bir etki alanıyla bir HTTP API oluşturun. Sertifikayı kullanmak için özel etki alanını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 572
A company runs an application on AWS. The application receives inconsistent amounts of
usage. The application uses AWS Direct Connect to connect to an on-premises
MySQL-compatible database. The on-premises database consistently uses a minimum of 2 GiB
of memory.
The company wants to migrate the on-premises database to a managed AWS service. The
company wants to use auto scaling capabilities to manage unexpected workload increases.
Which solution will meet these requirements with the LEAST administrative overhead?

A. Provision an Amazon DynamoDB database with default read and write capacity settings.

B. Provision an Amazon Aurora database with a minimum capacity of 1 Aurora capacity unit
(ACU).

C. Provision an Amazon Aurora Serverless v2 database with a minimum capacity of 1 Aurora
capacity unit (ACU).

D. Provision an Amazon RDS for MySQL database with 2 GiB of memory.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Minimum 1 Aurora kapasite birimi (ACU) kapasiteli bir Amazon Aurora Serverless v2 veritabanı sağlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Question 573
A company wants to use an event-driven programming model with AWS Lambda. The company
wants to reduce startup latency for Lambda functions that run on Java 11. The company does
not have strict latency requirements for the applications. The company wants to reduce cold
starts and outlier latencies when a function scales up.
Which solution will meet these requirements MOST cost-effectively?

A. Configure Lambda provisioned concurrency.

B. Increase the timeout of the Lambda functions.

C. Increase the memory of the Lambda functions.

D. Configure Lambda SnapStart.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Lambda SnapStart'ı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 574
A financial services company launched a new application that uses an Amazon RDS for MySQL
database. The company uses the application to track stock market trends. The company needs
to operate the application for only 2 hours at the end of each week. The company needs to
optimize the cost of running the database.
Which solution will meet these requirements MOST cost-effectively?

A. Migrate the existing RDS for MySQL database to an Aurora Serverless v2 MySQL database
cluster.

B. Migrate the existing RDS for MySQL database to an Aurora MySQL database cluster.

C. Migrate the existing RDS for MySQL database to an Amazon EC2 instance that runs MySQL.
Purchase an instance reservation for the EC2 instance.

D. Migrate the existing RDS for MySQL database to an Amazon Elastic Container Service
(Amazon ECS) cluster that uses MySQL container images to run tasks.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mevcut RDS for MySQL veritabanını Aurora Serverless v2 MySQL veritabanı kümesine taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Question 575
A company deploys its applications on Amazon Elastic Kubernetes Service (Amazon EKS)
behind an Application Load Balancer in an AWS Region. The application needs to store data in a
PostgreSQL database engine. The company wants the data in the database to be highly
available. The company also needs increased capacity for read workloads.
Which solution will meet these requirements with the MOST operational efficiency?

A. Create an Amazon DynamoDB database table configured with global tables.

B. Create an Amazon RDS database with Multi-AZ deployments.

C. Create an Amazon RDS database with Multi-AZ DB cluster deployment.

D. Create an Amazon RDS database configured with cross-Region read replicas.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Multi-AZ DB kümesi dağıtımıyla bir Amazon RDS veritabanı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Question 576
A company is building a RESTful serverless web application on AWS by using Amazon API
Gateway and AWS Lambda. The users of this web application will be geographically distributed,
and the company wants to reduce the latency of API requests to these users.
Which type of endpoint should a solutions architect use to meet these requirements?

A. Private endpoint

B. Regional endpoint

C. Interface VPC endpoint

D. Edge-optimized endpoint

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kenar için optimize edilmiş uç nokta
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Question 577
A company uses an Amazon CloudFront distribution to serve content pages for its website. The
company needs to ensure that clients use a TLS certificate when accessing the company's
website. The company wants to automate the creation and renewal of the TLS certificates.
Which solution will meet these requirements with the MOST operational efficiency?

A. Use a CloudFront security policy to create a certificate.

B. Use a CloudFront origin access control (OAC) to create a certificate.

C. Use AWS Certificate Manager (ACM) to create a certificate. Use DNS validation for the domain.

D. Use AWS Certificate Manager (ACM) to create a certificate. Use email validation for the
domain.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Sertifika oluşturmak için AWS Sertifika Yöneticisini (ACM) kullanın. Etki alanı için DNS doğrulamasını kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Question 578
A company deployed a serverless application that uses Amazon DynamoDB as a database
layer. The application has experienced a large increase in users. The company wants to improve
database response time from milliseconds to microseconds and to cache requests to the
database.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use DynamoDB Accelerator (DAX).

B. Migrate the database to Amazon Redshift.

C. Migrate the database to Amazon RDS.

D. Use Amazon ElastiCache for Redis.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** DynamoDB Hızlandırıcıyı (DAX) kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
> - **Amazon DynamoDB Hızlandırıcı (DAX):** DynamoDB için özel geliştirilmiş bellek içi önbellek kümesidir; yoğun okuma yapan uygulamalarda yanıt süresini milisaniyelerden mikrosaniyelere indirir.

---

---

Question 579
A company runs an application that uses Amazon RDS for PostgreSQL. The application receives
traffic only on weekdays during business hours. The company wants to optimize costs and
reduce operational overhead based on this usage.
Which solution will meet these requirements?

A. Use the Instance Scheduler on AWS to configure start and stop schedules.

B. Turn off automatic backups. Create weekly manual snapshots of the database.

C. Create a custom AWS Lambda function to start and stop the database based on minimum CPU
utilization.

D. Purchase All Upfront reserved DB instances.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Başlatma ve durdurma programlarını yapılandırmak için AWS'deki Örnek Zamanlayıcı'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 580
A company uses locally attached storage to run a latency-sensitive application on premises. The
company is using a lift and shift method to move the application to the AWS Cloud. The company
does not want to change the application architecture.
Which solution will meet these requirements MOST cost-effectively?

A. Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for Lustre
file system to run the application.

B. Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon
EBS) GP2 volume to run the application.

C. Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for
OpenZFS file system to run the application.

D. Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon
EBS) GP3 volume to run the application.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Uygulamayı bir Amazon EC2 örneğinde barındırın. Uygulamayı çalıştırmak için bir Amazon Elastic Block Store (Amazon EBS) GP3 birimi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Question 581
A company runs a stateful production application on Amazon EC2 instances. The application
requires at least two EC2 instances to always be running.
A solutions architect needs to design a highly available and fault-tolerant architecture for the
application. The solutions architect creates an Auto Scaling group of EC2 instances.
Which set of additional steps should the solutions architect take to meet these requirements?

A. Set the Auto Scaling group's minimum capacity to two. Deploy one On-Demand Instance in one
Availability Zone and one On-Demand Instance in a second Availability Zone.

B. Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in
one Availability Zone and two On-Demand Instances in a second Availability Zone.

C. Set the Auto Scaling group's minimum capacity to two. Deploy four Spot Instances in one
Availability Zone.

D. Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in
one Availability Zone and two Spot Instances in a second Availability Zone.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunun minimum kapasitesini dörde ayarlayın. Bir Erişilebilirlik Alanında iki İsteğe Bağlı Bulut Sunucusunu ve ikinci bir Erişilebilirlik Alanında iki İsteğe Bağlı Bulut Sunucusunu dağıtın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Question 582
An ecommerce company uses Amazon Route 53 as its DNS provider. The company hosts its
website on premises and in the AWS Cloud. The company's on-premises data center is near the
us-west-1 Region. The company uses the eu-central-1 Region to host the website. The company
wants to minimize load time for the website as much as possible.
Which solution will meet these requirements?

A. Set up a geolocation routing policy. Send the traffic that is near us-west-1 to the on-premises
data center. Send the traffic that is near eu-central-1 to eu-central-1.

B. Set up a simple routing policy that routes all traffic that is near eu-central-1 to eu-central-1 and
routes all traffic that is near the on-premises datacenter to the on-premises data center.

C. Set up a latency routing policy. Associate the policy with us-west-1.

D. Set up a weighted routing policy. Split the traffic evenly between eu-central-1 and the
on-premises data center.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir coğrafi konum yönlendirme politikası ayarlayın. Us-west-1 yakınındaki trafiği şirket içi veri merkezine gönderin. eu-central-1 yakınındaki trafiği eu-central-1'e gönderin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Question 583
A company has 5 PB of archived data on physical tapes. The company needs to preserve the
data on the tapes for another 10 years for compliance purposes. The company wants to migrate
to AWS in the next 6 months. The data center that stores the tapes has a 1 Gbps uplink internet
connectivity.
Which solution will meet these requirements MOST cost-effectively?

A. Read the data from the tapes on premises. Stage the data in a local NFS storage. Use AWS
DataSync to migrate the data to Amazon S3 Glacier Flexible Retrieval.

B. Use an on-premises backup application to read the data from the tapes and to write directly to
Amazon S3 Glacier Deep Archive.

C. Order multiple AWS Snowball devices that have Tape Gateway. Copy the physical tapes to
virtual tapes in Snowball. Ship the Snowball devices to AWS. Create a lifecycle policy to move the
tapes to Amazon S3 Glacier Deep Archive.

D. Configure an on-premises Tape Gateway. Create virtual tapes in the AWS Cloud. Use backup
software to copy the physical tape to the virtual tape.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Teyp Ağ Geçidine sahip birden fazla AWS Snowball cihazı sipariş edin. Fiziksel bantları Snowball'daki sanal bantlara kopyalayın. Snowball cihazlarını AWS'ye gönderin. Bantları Amazon S3 Glacier Deep Archive'a taşımak için bir yaşam döngüsü ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Question 584
A company is deploying an application that processes large quantities of data in parallel. The
company plans to use Amazon EC2 instances for the workload. The network architecture must
be configurable to prevent groups of nodes from sharing the same underlying hardware.
Which networking solution meets these requirements?

A. Run the EC2 instances in a spread placement group.

B. Group the EC2 instances in separate accounts.

C. Configure the EC2 instances with dedicated tenancy.

D. Configure the EC2 instances with shared tenancy.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 örneklerini bir forma yerleştirme grubunda çalıştırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Question 585
A solutions architect is designing a disaster recovery (DR) strategy to provide Amazon EC2
capacity in a failover AWS Region. Business requirements state that the DR strategy must meet
capacity in the failover Region.
Which solution will meet these requirements?

A. Purchase On-Demand Instances in the failover Region.

B. Purchase an EC2 Savings Plan in the failover Region.

C. Purchase regional Reserved Instances in the failover Region.

D. Purchase a Capacity Reservation in the failover Region.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Yük Devretme Bölgesinde Kapasite Rezervasyonu satın alın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Question 586
A company has five organizational units (OUs) as part of its organization in AWS Organizations.
Each OU correlates to the five businesses that the company owns. The company's research and
development (R&D) business is separating from the company and will need its own organization.
A solutions architect creates a separate new management account for this purpose.
What should the solutions architect do next in the new management account?

A. Have the R&D AWS account be part of both organizations during the transition.

B. Invite the R&D AWS account to be part of the new organization after the R&D AWS account
has left the prior organization.

C. Create a new R&D AWS account in the new organization. Migrate resources from the prior
R&D AWS account to the new R&D AWS account.

D. Have the R&D AWS account join the new organization. Make the new management account a
member of the prior organization.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Ar-Ge AWS hesabı önceki kuruluştan ayrıldıktan sonra Ar-Ge AWS hesabını yeni kuruluşun parçası olmaya davet edin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Question 587
A company is designing a solution to capture customer activity in different web applications to
process analytics and make predictions. Customer activity in the web applications is
unpredictable and can increase suddenly. The company requires a solution that integrates with
other web applications. The solution must include an authorization step for security purposes.
Which solution will meet these requirements?

A. Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service
(Amazon ECS) container instance that stores the information that the company receives in an
Amazon Elastic File System (Amazon EFS) file system. Authorization is resolved at the GWLB.

B. Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis data stream that
stores the information that the company receives in an Amazon S3 bucket. Use an AWS Lambda
function to resolve authorization.

C. Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis Data Firehose that
stores the information that the company receives in an Amazon S3 bucket. Use an API Gateway
Lambda authorizer to resolve authorization.

D. Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service
(Amazon ECS) container instance that stores the information that the company receives on an
Amazon Elastic File System (Amazon EFS) file system. Use an AWS Lambda function to resolve
authorization.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Şirketin aldığı bilgileri bir Amazon S3 klasöründe saklayan bir Amazon Kinesis Data Firehose'un önünde bir Amazon API Gateway uç noktası yapılandırın. Yetkilendirmeyi çözümlemek için bir API Ağ Geçidi Lambda yetkilendiricisi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 588
An ecommerce company wants a disaster recovery solution for its Amazon RDS DB instances
that run Microsoft SQL Server Enterprise Edition. The company's current recovery point objective
(RPO) and recovery time objective (RTO) are 24 hours.
Which solution will meet these requirements MOST cost-effectively?

A. Create a cross-Region read replica and promote the read replica to the primary instance.

B. Use AWS Database Migration Service (AWS DMS) to create RDS cross-Region replication.

C. Use cross-Region replication every 24 hours to copy native backups to an Amazon S3 bucket.

D. Copy automatic snapshots to another Region every 24 hours.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Otomatik anlık görüntüleri her 24 saatte bir başka bir Bölgeye kopyalayın.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Question 589
A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind
an Application Load Balancer that has sticky sessions enabled. The web server currently hosts
the user session state. The company wants to ensure high availability and avoid user session
state loss in the event of a web server outage.
Which solution will meet these requirements?

A. Use an Amazon ElastiCache for Memcached instance to store the session data. Update the
application to use ElastiCache for Memcached to store the session state.

B. Use Amazon ElastiCache for Redis to store the session state. Update the application to use
ElastiCache for Redis to store the session state.

C. Use an AWS Storage Gateway cached volume to store session data. Update the application to
use AWS Storage Gateway cached volume to store the session state.

D. Use Amazon RDS to store the session state. Update the application to use Amazon RDS to
store the session state.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Oturum durumunu depolamak için Amazon ElastiCache for Redis'i kullanın. Oturum durumunu depolamak amacıyla Redis için ElastiCache'i kullanacak şekilde uygulamayı güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Question 590
A company migrated a MySQL database from the company's on-premises data center to an
Amazon RDS for MySQL DB instance. The company sized the RDS DB instance to meet the
company's average daily workload. Once a month, the database performs slowly when the
company runs queries for a report. The company wants to have the ability to run reports and
maintain the performance of the daily workloads.
Which solution will meet these requirements?

A. Create a read replica of the database. Direct the queries to the read replica.

B. Create a backup of the database. Restore the backup to another DB instance. Direct the
queries to the new database.

C. Export the data to Amazon S3. Use Amazon Athena to query the S3 bucket.

D. Resize the DB instance to accommodate the additional workload.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Veritabanının okuma kopyasını oluşturun. Sorguları okuma kopyasına yönlendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Question 591
A company runs a container application by using Amazon Elastic Kubernetes Service (Amazon
EKS). The application includes microservices that manage customers and place orders. The
company needs to route incoming requests to the appropriate microservices.
Which solution will meet this requirement MOST cost-effectively?

A. Use the AWS Load Balancer Controller to provision a Network Load Balancer.

B. Use the AWS Load Balancer Controller to provision an Application Load Balancer.

C. Use an AWS Lambda function to connect the requests to Amazon EKS.

D. Use Amazon API Gateway to connect the requests to Amazon EKS.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir Application Load Balancer sağlamak için AWS Load Balancer Controller’ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Question 592
A company uses AWS and sells access to copyrighted images. The company’s global customer
base needs to be able to access these images quickly. The company must deny access to users
from specific countries. The company wants to minimize costs as much as possible.
Which solution will meet these requirements?

A. Use Amazon S3 to store the images. Turn on multi-factor authentication (MFA) and public
bucket access. Provide customers with a link to the S3 bucket.

B. Use Amazon S3 to store the images. Create an IAM user for each customer. Add the users to a
group that has permission to access the S3 bucket.

C. Use Amazon EC2 instances that are behind Application Load Balancers (ALBs) to store the
images. Deploy the instances only in the countries the company services. Provide customers with
links to the ALBs for their specific country's instances.

D. Use Amazon S3 to store the images. Use Amazon CloudFront to distribute the images with
geographic restrictions. Provide a signed URL for each customer to access the data in CloudFront.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Görüntüleri depolamak için Amazon S3'ü kullanın. Görüntüleri coğrafi kısıtlamalarla dağıtmak için Amazon CloudFront'u kullanın. Her müşterinin CloudFront'taki verilere erişmesi için imzalı bir URL sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **CloudFront İmzalı URL'ler ve İmzalı Çerezler:** İmzalı URL'ler (Signed URLs) tekil korumalı dosyalara veya akış dosyalarına zaman kısıtlamalı erişim verir; İmzalı Çerezler (Signed Cookies) ise uygulama URL yapısını değiştirmeden birden fazla premium dosyaya erişim sağlar.

---

---

Question 593
A solutions architect is designing a highly available Amazon ElastiCache for Redis based
solution. The solutions architect needs to ensure that failures do not result in performance
degradation or loss of data locally and within an AWS Region. The solution needs to provide high
availability at the node level and at the Region level.
Which solution will meet these requirements?

A. Use Multi-AZ Redis replication groups with shards that contain multiple nodes.

B. Use Redis shards that contain multiple nodes with Redis append only files (AOF) turned on.

C. Use a Multi-AZ Redis cluster with more than one read replica in the replication group.

D. Use Redis shards that contain multiple nodes with Auto Scaling turned on.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Birden fazla düğüm içeren parçalarla Multi-AZ Redis çoğaltma gruplarını kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Question 594
A company plans to migrate to AWS and use Amazon EC2 On-Demand Instances for its
application. During the migration testing phase, a technical team observes that the application
takes a long time to launch and load memory to become fully productive.
Which solution will reduce the launch time of the application during the next testing phase?

A. Launch two or more EC2 On-Demand Instances. Turn on auto scaling features and make the
EC2 On-Demand Instances available during the next testing phase.

B. Launch EC2 Spot Instances to support the application and to scale the application so it is
available during the next testing phase.

C. Launch the EC2 On-Demand Instances with hibernation turned on. Configure EC2 Auto Scaling
warm pools during the next testing phase.

D. Launch EC2 On-Demand Instances with Capacity Reservations. Start additional EC2 instances
during the next testing phase.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 İsteğe Bağlı Bulut Sunucularını hazırda bekletme modu açıkken başlatın. Bir sonraki test aşamasında EC2 Otomatik Ölçeklendirme ılık havuzlarını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Question 595
A company's applications run on Amazon EC2 instances in Auto Scaling groups. The company
notices that its applications experience sudden traffic increases on random days of the week.
The company wants to maintain application performance during sudden traffic increases.
Which solution will meet these requirements MOST cost-effectively?

A. Use manual scaling to change the size of the Auto Scaling group.

B. Use predictive scaling to change the size of the Auto Scaling group.

C. Use dynamic scaling to change the size of the Auto Scaling group.

D. Use schedule scaling to change the size of the Auto Scaling group.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Otomatik Ölçeklendirme grubunun boyutunu değiştirmek için dinamik ölçeklendirmeyi kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Question 596
An ecommerce application uses a PostgreSQL database that runs on an Amazon EC2 instance.
During a monthly sales event, database usage increases and causes database connection
issues for the application. The traffic is unpredictable for subsequent monthly sales events,
which impacts the sales forecast. The company needs to maintain performance when there is an
unpredictable increase in traffic.
Which solution resolves this issue in the MOST cost-effective way?

A. Migrate the PostgreSQL database to Amazon Aurora Serverless v2.

B. Enable auto scaling for the PostgreSQL database on the EC2 instance to accommodate
increased usage.

C. Migrate the PostgreSQL database to Amazon RDS for PostgreSQL with a larger instance type.

D. Migrate the PostgreSQL database to Amazon Redshift to accommodate increased usage.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** PostgreSQL veritabanını Amazon Aurora Serverless v2'ye taşıyın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Question 597
A company hosts an internal serverless application on AWS by using Amazon API Gateway and
AWS Lambda. The company’s employees report issues with high latency when they begin using
the application each day. The company wants to reduce latency.
Which solution will meet these requirements?

A. Increase the API Gateway throttling limit.

B. Set up a scheduled scaling to increase Lambda provisioned concurrency before employees
begin to use the application each day.

C. Create an Amazon CloudWatch alarm to initiate a Lambda function as a target for the alarm at
the beginning of each day.

D. Increase the Lambda function memory.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Çalışanlar uygulamayı her gün kullanmaya başlamadan önce Lambda tarafından sağlanan eşzamanlılığı artırmak için planlanmış bir ölçeklendirme ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Question 598
A research company uses on-premises devices to generate data for analysis. The company
wants to use the AWS Cloud to analyze the data. The devices generate .csv files and support
writing the data to an SMB file share. Company analysts must be able to use SQL commands to
query the data. The analysts will run queries periodically throughout the day.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose
three.)

A. Deploy an AWS Storage Gateway on premises in Amazon S3 File Gateway mode.

B. Deploy an AWS Storage Gateway on premises in Amazon FSx File Gateway made.

C. Set up an AWS Glue crawler to create a table based on the data that is in Amazon S3.

D. Set up an Amazon EMR cluster with EMR File System (EMRFS) to query the data that is in
Amazon S3. Provide access to analysts.

E. Set up an Amazon Redshift cluster to query the data that is in Amazon S3. Provide access to
analysts.

F. Setup Amazon Athena to query the data that is in Amazon S3. Provide access to analysts.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C,`
> - **Önerilen Çözüm:** Amazon S3 Dosya Ağ Geçidi modunda şirket içinde bir AWS Storage Gateway dağıtın. Amazon S3'teki verilere dayalı bir tablo oluşturmak için bir AWS Glue tarayıcısı kurun. Amazon S3'teki verileri sorgulamak için Amazon Athena'yı kurun. Analistlere erişim sağlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Question 599
A company wants to use Amazon Elastic Container Service (Amazon ECS) clusters and Amazon
RDS DB instances to build and run a payment processing application. The company will run the
application in its on-premises data center for compliance purposes.
A solutions architect wants to use AWS Outposts as part of the solution. The solutions architect
is working with the company's operational team to build the application.
Which activities are the responsibility of the company's operational team? (Choose three.)

A. Providing resilient power and network connectivity to the Outposts racks

B. Managing the virtualization hypervisor, storage systems, and the AWS services that run on
Outposts

C. Physical security and access controls of the data center environment

D. Availability of the Outposts infrastructure including the power supplies, servers, and networking
equipment within the Outposts racks

E. Physical maintenance of Outposts components

F. Providing extra capacity for Amazon ECS clusters to mitigate server failures and maintenance
events

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C,`
> - **Önerilen Çözüm:** Outposts raflarına esnek güç ve ağ bağlantısı sağlanması Veri merkezi ortamının fiziksel güvenliği ve erişim kontrolleri Sunucu arızalarını ve bakım olaylarını azaltmak için Amazon ECS kümelerine ekstra kapasite sağlanması
>
> **Sınav Konu Özeti:**
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.
