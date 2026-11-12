# AWS SAA-C03 Comprehensive Question Bank (1019 Questions with Answers) - Section 07

> **Question Range:** 601 - 700 of 1020

[← Module Index](../README.md) | [📖 Consolidated Notes](../notes.md)

---

Question 600
A company is planning to migrate a TCP-based application into the company's VPC. The
application is publicly accessible on a nonstandard TCP port through a hardware appliance in the
company's data center. This public endpoint can process up to 3 million requests per second
with low latency. The company requires the same level of performance for the new public
endpoint in AWS.
What should a solutions architect recommend to meet this requirement?

A. Deploy a Network Load Balancer (NLB). Configure the NLB to be publicly accessible over the
TCP port that the application requires.

B. Deploy an Application Load Balancer (ALB). Configure the ALB to be publicly accessible over
the TCP port that the application requires.

C. Deploy an Amazon CloudFront distribution that listens on the TCP port that the application
requires. Use an Application Load Balancer as the origin.

D. Deploy an Amazon API Gateway API that is configured with the TCP port that the application
requires. Configure AWS Lambda functions with provisioned concurrency to process the requests.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Deploy a Network Load Balancer (NLB). Configure the NLB to be publicly accessible over the TCP port that the application requires.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **Amazon CloudFront & Origin Access Control:** Global Content Delivery Network (CDN) caching content at edge locations. Origin Access Control (OAC) restricts direct public access to S3 origins so users must traverse CloudFront.

---

---

Question 601
A company runs its critical database on an Amazon RDS for PostgreSQL DB instance. The
company wants to migrate to Amazon Aurora PostgreSQL with minimal downtime and data loss.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create a DB snapshot of the RDS for PostgreSQL DB instance to populate a new Aurora
PostgreSQL DB cluster.

B. Create an Aurora read replica of the RDS for PostgreSQL DB instance. Promote the Aurora
read replicate to a new Aurora PostgreSQL DB cluster.

C. Use data import from Amazon S3 to migrate the database to an Aurora PostgreSQL DB cluster.

D. Use the pg_dump utility to back up the RDS for PostgreSQL database. Restore the backup to a
new Aurora PostgreSQL DB cluster.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create an Aurora read replica of the RDS for PostgreSQL DB instance. Promote the Aurora read replicate to a new Aurora PostgreSQL DB cluster.
>
> **Exam Concept Summary:**
> - **Amazon RDS Read Replicas:** Asynchronously replicates primary database transactions to offload read-heavy reporting and analytics workloads across local AZs or remote AWS Regions.
> - **Amazon Aurora High Availability & Global DB:** Replicates 6 copies of data across 3 Availability Zones natively. Aurora Global Database provides dedicated multi-region relational clustering with storage-level replication latency under 1 second.

---

---

Question 602
A company's infrastructure consists of hundreds of Amazon EC2 instances that use Amazon
Elastic Block Store (Amazon EBS) storage. A solutions architect must ensure that every EC2
instance can be recovered after a disaster.
What should the solutions architect do to meet this requirement with the LEAST amount of
effort?

A. Take a snapshot of the EBS storage that is attached to each EC2 instance. Create an AWS
CloudFormation template to launch new EC2 instances from the EBS storage.

B. Take a snapshot of the EBS storage that is attached to each EC2 instance. Use AWS Elastic
Beanstalk to set the environment based on the EC2 template and attach the EBS storage.

C. Use AWS Backup to set up a backup plan for the entire group of EC2 instances. Use the AWS
Backup API or the AWS CLI to speed up the restore process for multiple EC2 instances.

D. Create an AWS Lambda function to take a snapshot of the EBS storage that is attached to each
EC2 instance and copy the Amazon Machine Images (AMIs). Create another Lambda function to
perform the restores with the copied AMIs and attach the EBS storage.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Use AWS Backup to set up a backup plan for the entire group of EC2 instances. Use the AWS Backup API or the AWS CLI to speed up the restore process for multiple EC2 instances.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 603
A company recently migrated to the AWS Cloud. The company wants a serverless solution for
large-scale parallel on-demand processing of a semistructured dataset. The data consists of
logs, media files, sales transactions, and IoT sensor data that is stored in Amazon S3. The
company wants the solution to process thousands of items in the dataset in parallel.
Which solution will meet these requirements with the MOST operational efficiency?

A. Use the AWS Step Functions Map state in Inline mode to process the data in parallel.

B. Use the AWS Step Functions Map state in Distributed mode to process the data in parallel.

C. Use AWS Glue to process the data in parallel.

D. Use several AWS Lambda functions to process the data in parallel.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Use the AWS Step Functions Map state in Distributed mode to process the data in parallel.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Step Functions Distributed Orchestration:** Visual workflow orchestrator coordinating distributed microservices, Lambda functions, and long-running batch jobs with automated retry logic and state persistence.

---

---

Question 604
A company will migrate 10 PB of data to Amazon S3 in 6 weeks. The current data center has a
500 Mbps uplink to the internet. Other on-premises applications share the uplink. The company
can use 80% of the internet bandwidth for this one-time migration task.
Which solution will meet these requirements?

A. Configure AWS DataSync to migrate the data to Amazon S3 and to automatically verify the
data.

B. Use rsync to transfer the data directly to Amazon S3.

C. Use the AWS CLI and multiple copy processes to send the data directly to Amazon S3.

D. Order multiple AWS Snowball devices. Copy the data to the devices. Send the devices to AWS
to copy the data to Amazon S3.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Order multiple AWS Snowball devices. Copy the data to the devices. Send the devices to AWS to copy the data to Amazon S3.
>
> **Exam Concept Summary:**
> - **AWS DataSync Accelerated Migration:** Automated, hardware-accelerated data transfer service between on-premises storage systems (NFS, SMB, object) and AWS storage (S3, EFS, FSx) with end-to-end data integrity validation.

---

---

Question 605
A company has several on-premises Internet Small Computer Systems Interface (ISCSI)
network storage servers. The company wants to reduce the number of these servers by moving
to the AWS Cloud. A solutions architect must provide low-latency access to frequently used data
and reduce the dependency on on-premises servers with a minimal number of infrastructure
changes.
Which solution will meet these requirements?

A. Deploy an Amazon S3 File Gateway.

B. Deploy Amazon Elastic Block Store (Amazon EBS) storage with backups to Amazon S3.

C. Deploy an AWS Storage Gateway volume gateway that is configured with stored volumes.

D. Deploy an AWS Storage Gateway volume gateway that is configured with cached volumes.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Deploy an AWS Storage Gateway volume gateway that is configured with cached volumes.
>
> **Exam Concept Summary:**
> - **AWS Storage Gateway:** Connects on-premises environments to cloud storage. S3 File Gateway exposes S3 via NFS/SMB caching; Volume Gateway provides iSCSI block storage backed by EBS snapshots.

---

---

Question 606
A solutions architect is designing an application that will allow business users to upload objects
to Amazon S3. The solution needs to maximize object durability. Objects also must be readily
available at any time and for any length of time. Users will access objects frequently within the
first 30 days after the objects are uploaded, but users are much less likely to access objects that
are older than 30 days.
Which solution meets these requirements MOST cost-effectively?

A. Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3
Glacier after 30 days.

B. Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3
Standard-Infrequent Access (S3 Standard-IA) after 30 days.

C. Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 One
Zone-Infrequent Access (S3 One Zone-IA) after 30 days.

D. Store all the objects in S3 Intelligent-Tiering with an S3 Lifecycle rule to transition the objects to
S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.
>
> **Exam Concept Summary:**
> - **Amazon S3 Glacier Storage Classes:** Glacier Instant Retrieval delivers millisecond access for rare access; Flexible Retrieval provides 1-5 minute expedited or 3-5 hour standard access; Deep Archive offers lowest cost for long-term retention with 12-hour retrieval.
> - **S3 Lifecycle Management:** Automatically transitions objects across storage tiers based on age or access patterns to minimize storage costs without operational overhead.

---

---

Question 607
A company has migrated a two-tier application from its on-premises data center to the AWS
Cloud. The data tier is a Multi-AZ deployment of Amazon RDS for Oracle with 12 TB of General
Purpose SSD Amazon Elastic Block Store (Amazon EBS) storage. The application is designed
to process and store documents in the database as binary large objects (blobs) with an average
document size of 6 MB.
The database size has grown over time, reducing the performance and increasing the cost of
storage. The company must improve the database performance and needs a solution that is
highly available and resilient.
Which solution will meet these requirements MOST cost-effectively?

A. Reduce the RDS DB instance size. Increase the storage capacity to 24 TiB. Change the
storage type to Magnetic.

B. Increase the RDS DB instance size. Increase the storage capacity to 24 TiChange the storage
type to Provisioned IOPS.

C. Create an Amazon S3 bucket. Update the application to store documents in the S3 bucket.
Store the object metadata in the existing database.

D. Create an Amazon DynamoDB table. Update the application to use DynamoDB. Use AWS
Database Migration Service (AWS DMS) to migrate data from the Oracle database to DynamoDB.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create an Amazon S3 bucket. Update the application to store documents in the S3 bucket. Store the object metadata in the existing database.
>
> **Exam Concept Summary:**
> - **Amazon RDS Multi-AZ High Availability:** Synchronously replicates data to a standby DB instance in another Availability Zone for automated failover. Crucially, the standby instance cannot serve active read queries.
> - **Amazon DynamoDB NoSQL:** Fully managed NoSQL database providing single-digit millisecond response times at any scale with options for On-Demand capacity and automated global multi-region replication via Global Tables.

---

---

Question 608
A company has an application that serves clients that are deployed in more than 20.000 retail
storefront locations around the world. The application consists of backend web services that are
exposed over HTTPS on port 443. The application is hosted on Amazon EC2 instances behind
an Application Load Balancer (ALB). The retail locations communicate with the web application
over the public internet. The company allows each retail location to register the IP address that
the retail location has been allocated by its local ISP.
The company's security team recommends to increase the security of the application endpoint by
restricting access to only the IP addresses registered by the retail locations.
What should a solutions architect do to meet these requirements?

A. Associate an AWS WAF web ACL with the ALB. Use IP rule sets on the ALB to filter traffic.
Update the IP addresses in the rule to include the registered IP addresses.

B. Deploy AWS Firewall Manager to manage the ALConfigure firewall rules to restrict traffic to the
ALModify the firewall rules to include the registered IP addresses.

C. Store the IP addresses in an Amazon DynamoDB table. Configure an AWS Lambda
authorization function on the ALB to validate that incoming requests are from the registered IP
addresses.

D. Configure the network ACL on the subnet that contains the public interface of the ALB. Update
the ingress rules on the network ACL with entries for each of the registered IP addresses.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Associate an AWS WAF web ACL with the ALB. Use IP rule sets on the ALB to filter traffic. Update the IP addresses in the rule to include the registered IP addresses.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **Amazon DynamoDB NoSQL:** Fully managed NoSQL database providing single-digit millisecond response times at any scale with options for On-Demand capacity and automated global multi-region replication via Global Tables.

---

---

Question 609
A company is building a data analysis platform on AWS by using AWS Lake Formation. The
platform will ingest data from different sources such as Amazon S3 and Amazon RDS. The
company needs a secure solution to prevent access to portions of the data that contain sensitive
information.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create an IAM role that includes permissions to access Lake Formation tables.

B. Create data filters to implement row-level security and cell-level security.

C. Create an AWS Lambda function that removes sensitive information before Lake Formation
ingests the data.

D. Create an AWS Lambda function that periodically queries and removes sensitive information
from Lake Formation tables.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create data filters to implement row-level security and cell-level security.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 610
A company deploys Amazon EC2 instances that run in a VPC. The EC2 instances load source
data into Amazon S3 buckets so that the data can be processed in the future. According to
compliance laws, the data must not be transmitted over the public internet. Servers in the
company's on-premises data center will consume the output from an application that runs on the
EC2 instances.
Which solution will meet these requirements?

A. Deploy an interface VPC endpoint for Amazon EC2. Create an AWS Site-to-Site VPN
connection between the company and the VPC.

B. Deploy a gateway VPC endpoint for Amazon S3. Set up an AWS Direct Connect connection
between the on-premises network and the VPC.

C. Set up an AWS Transit Gateway connection from the VPC to the S3 buckets. Create an AWS
Site-to-Site VPN connection between the company and the VPC.

D. Set up proxy EC2 instances that have routes to NAT gateways. Configure the proxy EC2
instances to fetch S3 data and feed the application instances.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Deploy a gateway VPC endpoint for Amazon S3. Set up an AWS Direct Connect connection between the on-premises network and the VPC.
>
> **Exam Concept Summary:**
> - **VPC Gateway Endpoints:** Configured directly in VPC route tables to provide private, high-bandwidth, and completely free network routing from EC2 to Amazon S3 and DynamoDB without needing a NAT Gateway or Internet Gateway.
> - **AWS PrivateLink & Interface Endpoints:** Provisions private IP Elastic Network Interfaces (ENIs) inside subnets to privately connect VPC workloads to AWS services or SaaS partner solutions over private backbone networking.

---

---

Question 611
A company has an application with a REST-based interface that allows data to be received in
near-real time from a third-party vendor. Once received, the application processes and stores the
data for further analysis. The application is running on Amazon EC2 instances.
The third-party vendor has received many 503 Service Unavailable Errors when sending data to
the application. When the data volume spikes, the compute capacity reaches its maximum limit
and the application is unable to process all requests.
Which design should a solutions architect recommend to provide a more scalable solution?

A. Use Amazon Kinesis Data Streams to ingest the data. Process the data using AWS Lambda
functions.

B. Use Amazon API Gateway on top of the existing application. Create a usage plan with a quota
limit for the third-party vendor.

C. Use Amazon Simple Notification Service (Amazon SNS) to ingest the data. Put the EC2
instances in an Auto Scaling group behind an Application Load Balancer.

D. Repackage the application as a container. Deploy the application using Amazon Elastic
Container Service (Amazon ECS) using the EC2 launch type with an Auto Scaling group.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Use Amazon Kinesis Data Streams to ingest the data. Process the data using AWS Lambda functions.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 612
A company has an application that runs on Amazon EC2 instances in a private subnet. The
application needs to process sensitive information from an Amazon S3 bucket. The application
must not use the internet to connect to the S3 bucket.
Which solution will meet these requirements?

A. Configure an internet gateway. Update the S3 bucket policy to allow access from the internet
gateway. Update the application to use the new internet gateway.

B. Configure a VPN connection. Update the S3 bucket policy to allow access from the VPN
connection. Update the application to use the new VPN connection.

C. Configure a NAT gateway. Update the S3 bucket policy to allow access from the NAT gateway.
Update the application to use the new NAT gateway.

D. Configure a VPC endpoint. Update the S3 bucket policy to allow access from the VPC endpoint.
Update the application to use the new VPC endpoint.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Configure a VPC endpoint. Update the S3 bucket policy to allow access from the VPC endpoint. Update the application to use the new VPC endpoint.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 613
A company uses Amazon Elastic Kubernetes Service (Amazon EKS) to run a container
application. The EKS cluster stores sensitive information in the Kubernetes secrets object. The
company wants to ensure that the information is encrypted.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use the container application to encrypt the information by using AWS Key Management
Service (AWS KMS).

B. Enable secrets encryption in the EKS cluster by using AWS Key Management Service (AWS
KMS).

C. Implement an AWS Lambda function to encrypt the information by using AWS Key
Management Service (AWS KMS).

D. Use AWS Systems Manager Parameter Store to encrypt the information by using AWS Key
Management Service (AWS KMS).

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Enable secrets encryption in the EKS cluster by using AWS Key Management Service (AWS KMS).
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 614
A company is designing a new multi-tier web application that consists of the following
components:
(cid:127) Web and application servers that run on Amazon EC2 instances as part of Auto Scaling groups
(cid:127) An Amazon RDS DB instance for data storage
A solutions architect needs to limit access to the application servers so that only the web servers
can access them.
Which solution will meet these requirements?

A. Deploy AWS PrivateLink in front of the application servers. Configure the network ACL to allow
only the web servers to access the application servers.

B. Deploy a VPC endpoint in front of the application servers. Configure the security group to allow
only the web servers to access the application servers.

C. Deploy a Network Load Balancer with a target group that contains the application servers' Auto
Scaling group. Configure the network ACL to allow only the web servers to access the application
servers.

D. Deploy an Application Load Balancer with a target group that contains the application servers'
Auto Scaling group. Configure the security group to allow only the web servers to access the
application servers.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Deploy an Application Load Balancer with a target group that contains the application servers' Auto Scaling group. Configure the security group to allow only the web servers to access the application servers.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **AWS PrivateLink & Interface Endpoints:** Provisions private IP Elastic Network Interfaces (ENIs) inside subnets to privately connect VPC workloads to AWS services or SaaS partner solutions over private backbone networking.

---

---

Question 615
A company runs a critical, customer-facing application on Amazon Elastic Kubernetes Service
(Amazon EKS). The application has a microservices architecture. The company needs to
implement a solution that collects, aggregates, and summarizes metrics and logs from the
application in a centralized location.
Which solution meets these requirements?

A. Run the Amazon CloudWatch agent in the existing EKS cluster. View the metrics and logs in
the CloudWatch console.

B. Run AWS App Mesh in the existing EKS cluster. View the metrics and logs in the App Mesh
console.

C. Configure AWS CloudTrail to capture data events. Query CloudTrail by using Amazon
OpenSearch Service.

D. Configure Amazon CloudWatch Container Insights in the existing EKS cluster. View the metrics
and logs in the CloudWatch console.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Configure Amazon CloudWatch Container Insights in the existing EKS cluster. View the metrics and logs in the CloudWatch console.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 616
A company has deployed its newest product on AWS. The product runs in an Auto Scaling group
behind a Network Load Balancer. The company stores the product’s objects in an Amazon S3
bucket.
The company recently experienced malicious attacks against its systems. The company needs a
solution that continuously monitors for malicious activity in the AWS account, workloads, and
access patterns to the S3 bucket. The solution must also report suspicious activity and display
the information on a dashboard.
Which solution will meet these requirements?

A. Configure Amazon Macie to monitor and report findings to AWS Config.

B. Configure Amazon Inspector to monitor and report findings to AWS CloudTrail.

C. Configure Amazon GuardDuty to monitor and report findings to AWS Security Hub.

D. Configure AWS Config to monitor and report findings to Amazon EventBridge.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Configure Amazon GuardDuty to monitor and report findings to AWS Security Hub.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Network Load Balancer (NLB Layer 4):** Ultra-high-performance Layer 4 load balancer handling millions of requests per second with ultra-low latency and dedicated static/Elastic IP support.

---

---

Question 617
A company wants to migrate an on-premises data center to AWS. The data center hosts a
storage server that stores data in an NFS-based file system. The storage server holds 200 GB of
data. The company needs to migrate the data without interruption to existing services. Multiple
resources in AWS must be able to access the data by using the NFS protocol.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

A. Create an Amazon FSx for Lustre file system.

B. Create an Amazon Elastic File System (Amazon EFS) file system.

C. Create an Amazon S3 bucket to receive the data.

D. Manually use an operating system copy command to push the data into the AWS destination.

E. Install an AWS DataSync agent in the on-premises data center. Use a DataSync task between
the on-premises location and AWS.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B, E`
> - **Recommended Solution:** Create an Amazon Elastic File System (Amazon EFS) file system. Install an AWS DataSync agent in the on-premises data center. Use a DataSync task between the on-premises location and AWS.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **Amazon FSx Managed File Systems:** FSx for Windows provides fully managed native SMB file shares with Active Directory integration. FSx for Lustre delivers ultra-high-throughput sub-millisecond storage for compute-intensive HPC and machine learning.

---

---

Question 618
A company wants to use Amazon FSx for Windows File Server for its Amazon EC2 instances
that have an SMB file share mounted as a volume in the us-east-1 Region. The company has a
recovery point objective (RPO) of 5 minutes for planned system maintenance or unplanned
service disruptions. The company needs to replicate the file system to the us-west-2 Region. The
replicated data must not be deleted by any user for 5 years.
Which solution will meet these requirements?

A. Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2
deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that
copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a
target vault in us-west-2. Configure a minimum duration of 5 years.

B. Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment
type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the
backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a target vault in
us-west-2. Configure a minimum duration of 5 years.

C. Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment
type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the
backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in
us-west-2. Configure a minimum duration of 5 years.

D. Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2
deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that
copies the backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a
target vault in us-west-2. Configure a minimum duration of 5 years.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.
>
> **Exam Concept Summary:**
> - **S3 Object Lock (WORM):** Enforces Write Once Read Many (WORM) storage. Compliance mode prevents object deletion by any user including the root account; Governance mode allows specific IAM permissions to override.
> - **Amazon FSx Managed File Systems:** FSx for Windows provides fully managed native SMB file shares with Active Directory integration. FSx for Lustre delivers ultra-high-throughput sub-millisecond storage for compute-intensive HPC and machine learning.

---

---

Question 619
A solutions architect is designing a security solution for a company that wants to provide
developers with individual AWS accounts through AWS Organizations, while also maintaining
standard security controls. Because the individual developers will have AWS account root
user-level access to their own accounts, the solutions architect wants to ensure that the
mandatory AWS CloudTrail configuration that is applied to new developer accounts is not
modified.
Which action meets these requirements?

A. Create an IAM policy that prohibits changes to CloudTrail. and attach it to the root user.

B. Create a new trail in CloudTrail from within the developer accounts with the organization trails
option enabled.

C. Create a service control policy (SCP) that prohibits changes to CloudTrail, and attach it the
developer accounts.

D. Create a service-linked role for CloudTrail with a policy condition that allows changes only from
an Amazon Resource Name (ARN) in the management account.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create a service control policy (SCP) that prohibits changes to CloudTrail, and attach it the developer accounts.
>
> **Exam Concept Summary:**
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 620
A company is planning to deploy a business-critical application in the AWS Cloud. The
application requires durable storage with consistent, low-latency performance.
Which type of storage should a solutions architect recommend to meet these requirements?

A. Instance store volume

B. Amazon ElastiCache for Memcached cluster

C. Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume

D. Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume
>
> **Exam Concept Summary:**
> - **Amazon ElastiCache In-Memory Caching:** ElastiCache Redis delivers high-performance in-memory caching with data persistence, replication, and multi-AZ failover; Memcached provides simple multi-threaded object caching.

---

---

Question 621
An online photo-sharing company stores its photos in an Amazon S3 bucket that exists in the
us-west-1 Region. The company needs to store a copy of all new photos in the us-east-1 Region.
Which solution will meet this requirement with the LEAST operational effort?

A. Create a second S3 bucket in us-east-1. Use S3 Cross-Region Replication to copy photos from
the existing S3 bucket to the second S3 bucket.

B. Create a cross-origin resource sharing (CORS) configuration of the existing S3 bucket. Specify
us-east-1 in the CORS rule's AllowedOrigin element.

C. Create a second S3 bucket in us-east-1 across multiple Availability Zones. Create an S3
Lifecycle rule to save photos into the second S3 bucket.

D. Create a second S3 bucket in us-east-1. Configure S3 event notifications on object creation
and update events to invoke an AWS Lambda function to copy photos from the existing S3 bucket
to the second S3 bucket.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Create a second S3 bucket in us-east-1. Use S3 Cross-Region Replication to copy photos from the existing S3 bucket to the second S3 bucket.
>
> **Exam Concept Summary:**
> - **S3 Lifecycle Management:** Automatically transitions objects across storage tiers based on age or access patterns to minimize storage costs without operational overhead.
> - **S3 Cross-Region Replication (CRR):** Provides asynchronous automatic replication of objects across buckets in different AWS Regions for disaster recovery and low-latency global access (requires S3 Versioning).

---

---

Question 622
A company is creating a new web application for its subscribers. The application will consist of a
static single page and a persistent database layer. The application will have millions of users for
4 hours in the morning, but the application will have only a few thousand users during the rest of
the day. The company's data architects have requested the ability to rapidly evolve their schema.
Which solutions will meet these requirements and provide the MOST scalability? (Choose two.)

A. Deploy Amazon DynamoDB as the database solution. Provision on-demand capacity.

B. Deploy Amazon Aurora as the database solution. Choose the serverless DB engine mode.

C. Deploy Amazon DynamoDB as the database solution. Ensure that DynamoDB auto scaling is
enabled.

D. Deploy the static content into an Amazon S3 bucket. Provision an Amazon CloudFront
distribution with the S3 bucket as the origin.

E. Deploy the web servers for static content across a fleet of Amazon EC2 instances in Auto
Scaling groups. Configure the instances to periodically refresh the content from an Amazon Elastic
File System (Amazon EFS) volume.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A, D`
> - **Recommended Solution:** Deploy Amazon DynamoDB as the database solution. Provision on-demand capacity. Deploy the static content into an Amazon S3 bucket. Provision an Amazon CloudFront distribution with the S3 bucket as the origin.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.

---

---

Question 623
A company uses Amazon API Gateway to manage its REST APIs that third-party service
providers access. The company must protect the REST APIs from SQL injection and cross-site
scripting attacks.
What is the MOST operationally efficient solution that meets these requirements?

A. Configure AWS Shield.

B. Configure AWS WAF.

C. Set up API Gateway with an Amazon CloudFront distribution. Configure AWS Shield in
CloudFront.

D. Set up API Gateway with an Amazon CloudFront distribution. Configure AWS WAF in
CloudFront.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Configure AWS WAF.
>
> **Exam Concept Summary:**
> - **Amazon CloudFront & Origin Access Control:** Global Content Delivery Network (CDN) caching content at edge locations. Origin Access Control (OAC) restricts direct public access to S3 origins so users must traverse CloudFront.
> - **AWS WAF Web Application Protection:** Inspects web traffic at Layer 7 to block common exploits such as SQL injection, Cross-Site Scripting (XSS), bot scrapers, and rate-based DDoS attacks on CloudFront, ALB, and API Gateway.

---

---

Question 624
A company wants to provide users with access to AWS resources. The company has 1,500
users and manages their access to on-premises resources through Active Directory user groups
on the corporate network. However, the company does not want users to have to maintain
another identity to access the resources. A solutions architect must manage user access to the
AWS resources while preserving access to the on-premises resources.
What should the solutions architect do to meet these requirements?

A. Create an IAM user for each user in the company. Attach the appropriate policies to each user.

B. Use Amazon Cognito with an Active Directory user pool. Create roles with the appropriate
policies attached.

C. Define cross-account roles with the appropriate policies attached. Map the roles to the Active
Directory groups.

D. Configure Security Assertion Markup Language (SAML) 2 0-based federation. Create roles with
the appropriate policies attached Map the roles to the Active Directory groups.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Configure Security Assertion Markup Language (SAML) 2 0-based federation. Create roles with the appropriate policies attached Map the roles to the Active Directory groups.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 625
A company is hosting a website behind multiple Application Load Balancers. The company has
different distribution rights for its content around the world. A solutions architect needs to ensure
that users are served the correct content without violating distribution rights.
Which configuration should the solutions architect choose to meet these requirements?

A. Configure Amazon CloudFront with AWS WAF.

B. Configure Application Load Balancers with AWS WAF

C. Configure Amazon Route 53 with a geolocation policy

D. Configure Amazon Route 53 with a geoproximity routing policy

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Configure Amazon Route 53 with a geolocation policy
>
> **Exam Concept Summary:**
> - **Amazon Route 53 Intelligent Routing:** Offers advanced DNS routing policies: Geolocation routes by user location/region, Latency-based routes to the AWS Region with the lowest latency, and Failover provides active-passive health-checked disaster recovery.
> - **Amazon CloudFront & Origin Access Control:** Global Content Delivery Network (CDN) caching content at edge locations. Origin Access Control (OAC) restricts direct public access to S3 origins so users must traverse CloudFront.

---

---

Question 626
A company stores its data on premises. The amount of data is growing beyond the company's
available capacity.
The company wants to migrate its data from the on-premises location to an Amazon S3 bucket.
The company needs a solution that will automatically validate the integrity of the data after the
transfer.
Which solution will meet these requirements?

A. Order an AWS Snowball Edge device. Configure the Snowball Edge device to perform the
online data transfer to an S3 bucket

B. Deploy an AWS DataSync agent on premises. Configure the DataSync agent to perform the
online data transfer to an S3 bucket.

C. Create an Amazon S3 File Gateway on premises Configure the S3 File Gateway to perform the
online data transfer to an S3 bucket

D. Configure an accelerator in Amazon S3 Transfer Acceleration on premises. Configure the
accelerator to perform the online data transfer to an S3 bucket.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Deploy an AWS DataSync agent on premises. Configure the DataSync agent to perform the online data transfer to an S3 bucket.
>
> **Exam Concept Summary:**
> - **Amazon S3 Transfer Acceleration:** Uses Amazon CloudFront's globally distributed Edge Locations to route uploads over the optimized AWS private network backbone, dramatically reducing geographic transfer latency.
> - **AWS Storage Gateway:** Connects on-premises environments to cloud storage. S3 File Gateway exposes S3 via NFS/SMB caching; Volume Gateway provides iSCSI block storage backed by EBS snapshots.

---

---

Question 627
A company wants to migrate two DNS servers to AWS. The servers host a total of approximately
200 zones and receive 1 million requests each day on average. The company wants to maximize
availability while minimizing the operational overhead that is related to the management of the
two servers.
What should a solutions architect recommend to meet these requirements?

A. Create 200 new hosted zones in the Amazon Route 53 console Import zone files.

B. Launch a single large Amazon EC2 instance Import zone tiles. Configure Amazon CloudWatch
alarms and notifications to alert the company about any downtime.

C. Migrate the servers to AWS by using AWS Server Migration Service (AWS SMS). Configure
Amazon CloudWatch alarms and notifications to alert the company about any downtime.

D. Launch an Amazon EC2 instance in an Auto Scaling group across two Availability Zones.
Import zone files. Set the desired capacity to 1 and the maximum capacity to 3 for the Auto Scaling
group. Configure scaling alarms to scale based on CPU utilization.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Create 200 new hosted zones in the Amazon Route 53 console Import zone files.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Amazon Route 53 Intelligent Routing:** Offers advanced DNS routing policies: Geolocation routes by user location/region, Latency-based routes to the AWS Region with the lowest latency, and Failover provides active-passive health-checked disaster recovery.

---

---

Question 628
A global company runs its applications in multiple AWS accounts in AWS Organizations. The
company's applications use multipart uploads to upload data to multiple Amazon S3 buckets
across AWS Regions. The company wants to report on incomplete multipart uploads for cost
compliance purposes.
Which solution will meet these requirements with the LEAST operational overhead?

A. Configure AWS Config with a rule to report the incomplete multipart upload object count.

B. Create a service control policy (SCP) to report the incomplete multipart upload object count.

C. Configure S3 Storage Lens to report the incomplete multipart upload object count.

D. Create an S3 Multi-Region Access Point to report the incomplete multipart upload object count.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Configure S3 Storage Lens to report the incomplete multipart upload object count.
>
> **Exam Concept Summary:**
> - **S3 Multipart Upload:** Parallelizes large file uploads, recommended for objects > 100 MB and required for objects > 5 GB. Improves throughput and failure recovery.
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 629
A company runs a production database on Amazon RDS for MySQL. The company wants to
upgrade the database version for security compliance reasons. Because the database contains
critical data, the company wants a quick solution to upgrade and test functionality without losing
any data.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create an RDS manual snapshot. Upgrade to the new version of Amazon RDS for MySQL.

B. Use native backup and restore. Restore the data to the upgraded new version of Amazon RDS
for MySQL.

C. Use AWS Database Migration Service (AWS DMS) to replicate the data to the upgraded new
version of Amazon RDS for MySQL.

D. Use Amazon RDS Blue/Green Deployments to deploy and test production changes.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Use Amazon RDS Blue/Green Deployments to deploy and test production changes.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 630
A solutions architect is creating a data processing job that runs once daily and can take up to 2
hours to complete. If the job is interrupted, it has to restart from the beginning.
How should the solutions architect address this issue in the MOST cost-effective manner?

A. Create a script that runs locally on an Amazon EC2 Reserved Instance that is triggered by a
cron job.

B. Create an AWS Lambda function triggered by an Amazon EventBridge scheduled event.

C. Use an Amazon Elastic Container Service (Amazon ECS) Fargate task triggered by an Amazon
EventBridge scheduled event.

D. Use an Amazon Elastic Container Service (Amazon ECS) task running on Amazon EC2
triggered by an Amazon EventBridge scheduled event.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Use an Amazon Elastic Container Service (Amazon ECS) Fargate task triggered by an Amazon EventBridge scheduled event.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Fargate Serverless Containers:** AWS Fargate removes the operational burden of provisioning, configuring, and scaling EC2 container hosts, paying only for the compute resources used by running tasks.

---

---

Question 631
A social media company wants to store its database of user profiles, relationships, and
interactions in the AWS Cloud. The company needs an application to monitor any changes in the
database. The application needs to analyze the relationships between the data entities and to
provide recommendations to users.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Neptune to store the information. Use Amazon Kinesis Data Streams to process
changes in the database.

B. Use Amazon Neptune to store the information. Use Neptune Streams to process changes in
the database.

C. Use Amazon Quantum Ledger Database (Amazon QLDB) to store the information. Use
Amazon Kinesis Data Streams to process changes in the database.

D. Use Amazon Quantum Ledger Database (Amazon QLDB) to store the information. Use
Neptune Streams to process changes in the database.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Use Amazon Neptune to store the information. Use Neptune Streams to process changes in the database.
>
> **Exam Concept Summary:**
> - **Amazon Kinesis Real-Time Streaming:** Kinesis Data Streams ingests massive real-time event streams with custom processing and multi-consumer replay. Kinesis Data Firehose provides near-real-time managed ingestion directly into S3, Redshift, or OpenSearch.

---

---

Question 632
A company is creating a new application that will store a large amount of data. The data will be
analyzed hourly and will be modified by several Amazon EC2 Linux instances that are deployed
across multiple Availability Zones. The needed amount of storage space will continue to grow for
the next 6 months.
Which storage solution should a solutions architect recommend to meet these requirements?

A. Store the data in Amazon S3 Glacier. Update the S3 Glacier vault policy to allow access to the
application instances.

B. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS
volume on the application instances.

C. Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the file
system on the application instances.

D. Store the data in an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume
shared between the application instances.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the file system on the application instances.
>
> **Exam Concept Summary:**
> - **Amazon S3 Glacier Storage Classes:** Glacier Instant Retrieval delivers millisecond access for rare access; Flexible Retrieval provides 1-5 minute expedited or 3-5 hour standard access; Deep Archive offers lowest cost for long-term retention with 12-hour retrieval.
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.

---

---

Question 633
A company manages an application that stores data on an Amazon RDS for PostgreSQL
Multi-AZ DB instance. Increases in traffic are causing performance problems. The company
determines that database queries are the primary reason for the slow performance.
What should a solutions architect do to improve the application's performance?

A. Serve read traffic from the Multi-AZ standby replica.

B. Configure the DB instance to use Transfer Acceleration.

C. Create a read replica from the source DB instance. Serve read traffic from the read replica.

D. Use Amazon Kinesis Data Firehose between the application and Amazon RDS to increase the
concurrency of database requests.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create a read replica from the source DB instance. Serve read traffic from the read replica.
>
> **Exam Concept Summary:**
> - **Amazon S3 Transfer Acceleration:** Uses Amazon CloudFront's globally distributed Edge Locations to route uploads over the optimized AWS private network backbone, dramatically reducing geographic transfer latency.
> - **Amazon RDS Multi-AZ High Availability:** Synchronously replicates data to a standby DB instance in another Availability Zone for automated failover. Crucially, the standby instance cannot serve active read queries.

---

---

Question 634
A company collects 10 GB of telemetry data daily from various machines. The company stores
the data in an Amazon S3 bucket in a source data account.
The company has hired several consulting agencies to use this data for analysis. Each agency
needs read access to the data for its analysts. The company must share the data from the
source data account by choosing a solution that maximizes security and operational efficiency.
Which solution will meet these requirements?

A. Configure S3 global tables to replicate data for each agency.

B. Make the S3 bucket public for a limited time. Inform only the agencies.

C. Configure cross-account access for the S3 bucket to the accounts that the agencies own.

D. Set up an IAM user for each analyst in the source data account. Grant each user access to the
S3 bucket.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Configure cross-account access for the S3 bucket to the accounts that the agencies own.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 635
A company uses Amazon FSx for NetApp ONTAP in its primary AWS Region for CIFS and NFS
file shares. Applications that run on Amazon EC2 instances access the file shares. The company
needs a storage disaster recovery (DR) solution in a secondary Region. The data that is
replicated in the secondary Region needs to be accessed by using the same protocols as the
primary Region.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS Lambda function to copy the data to an Amazon S3 bucket. Replicate the S3
bucket to the secondary Region.

B. Create a backup of the FSx for ONTAP volumes by using AWS Backup. Copy the volumes to
the secondary Region. Create a new FSx for ONTAP instance from the backup.

C. Create an FSx for ONTAP instance in the secondary Region. Use NetApp SnapMirror to
replicate data from the primary Region to the secondary Region.

D. Create an Amazon Elastic File System (Amazon EFS) volume. Migrate the current data to the
volume. Replicate the volume to the secondary Region.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create an FSx for ONTAP instance in the secondary Region. Use NetApp SnapMirror to replicate data from the primary Region to the secondary Region.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **Amazon FSx Managed File Systems:** FSx for Windows provides fully managed native SMB file shares with Active Directory integration. FSx for Lustre delivers ultra-high-throughput sub-millisecond storage for compute-intensive HPC and machine learning.

---

---

Question 636
A development team is creating an event-based application that uses AWS Lambda functions.
Events will be generated when files are added to an Amazon S3 bucket. The development team
currently has Amazon Simple Notification Service (Amazon SNS) configured as the event target
from Amazon S3.
What should a solutions architect do to process the events from Amazon S3 in a scalable way?

A. Create an SNS subscription that processes the event in Amazon Elastic Container Service
(Amazon ECS) before the event runs in Lambda.

B. Create an SNS subscription that processes the event in Amazon Elastic Kubernetes Service
(Amazon EKS) before the event runs in Lambda

C. Create an SNS subscription that sends the event to Amazon Simple Queue Service (Amazon
SQS). Configure the SOS queue to trigger a Lambda function.

D. Create an SNS subscription that sends the event to AWS Server Migration Service (AWS
SMS). Configure the Lambda function to poll from the SMS event.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create an SNS subscription that sends the event to Amazon Simple Queue Service (Amazon SQS). Configure the SOS queue to trigger a Lambda function.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Fargate Serverless Containers:** AWS Fargate removes the operational burden of provisioning, configuring, and scaling EC2 container hosts, paying only for the compute resources used by running tasks.

---

---

Question 637
A solutions architect is designing a new service behind Amazon API Gateway. The request
patterns for the service will be unpredictable and can change suddenly from 0 requests to over
500 per second. The total size of the data that needs to be persisted in a backend database is
currently less than 1 GB with unpredictable future growth. Data can be queried using simple
key-value requests.
Which combination ofAWS services would meet these requirements? (Choose two.)

A. AWS Fargate

B. AWS Lambda

C. Amazon DynamoDB

D. Amazon EC2 Auto Scaling

E. MySQL-compatible Amazon Aurora

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B, C`
> - **Recommended Solution:** AWS Lambda Amazon DynamoDB
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 638
A company collects and shares research data with the company's employees all over the world.
The company wants to collect and store the data in an Amazon S3 bucket and process the data
in the AWS Cloud. The company will share the data with the company's employees. The
company needs a secure solution in the AWS Cloud that minimizes operational overhead.
Which solution will meet these requirements?

A. Use an AWS Lambda function to create an S3 presigned URL. Instruct employees to use the
URL.

B. Create an IAM user for each employee. Create an IAM policy for each employee to allow S3
access. Instruct employees to use the AWS Management Console.

C. Create an S3 File Gateway. Create a share for uploading and a share for downloading. Allow
employees to mount shares on their local computers to use S3 File Gateway.

D. Configure AWS Transfer Family SFTP endpoints. Select the custom identity provider options.
Use AWS Secrets Manager to manage the user credentials Instruct employees to use Transfer
Family.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Use an AWS Lambda function to create an S3 presigned URL. Instruct employees to use the URL.
>
> **Exam Concept Summary:**
> - **AWS Storage Gateway:** Connects on-premises environments to cloud storage. S3 File Gateway exposes S3 via NFS/SMB caching; Volume Gateway provides iSCSI block storage backed by EBS snapshots.
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 639
A company is building a new furniture inventory application. The company has deployed the
application on a fleet ofAmazon EC2 instances across multiple Availability Zones. The EC2
instances run behind an Application Load Balancer (ALB) in their VPC.
A solutions architect has observed that incoming traffic seems to favor one EC2 instance,
resulting in latency for some requests.
What should the solutions architect do to resolve this issue?

A. Disable session affinity (sticky sessions) on the ALB

B. Replace the ALB with a Network Load Balancer

C. Increase the number of EC2 instances in each Availability Zone

D. Adjust the frequency of the health checks on the ALB's target group

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Disable session affinity (sticky sessions) on the ALB
>
> **Exam Concept Summary:**
> - **Application Load Balancer (ALB Layer 7):** Distributes HTTP/HTTPS traffic using Layer 7 advanced routing (URL host/path, query parameters, HTTP headers), integrated with AWS WAF, SSL offloading, and container target groups.
> - **Network Load Balancer (NLB Layer 4):** Ultra-high-performance Layer 4 load balancer handling millions of requests per second with ultra-low latency and dedicated static/Elastic IP support.

---

---

Question 640
A company has an application workflow that uses an AWS Lambda function to download and
decrypt files from Amazon S3. These files are encrypted using AWS Key Management Service
(AWS KMS) keys. A solutions architect needs to design a solution that will ensure the required
permissions are set correctly.
Which combination of actions accomplish this? (Choose two.)

A. Attach the kms:decrypt permission to the Lambda function’s resource policy

B. Grant the decrypt permission for the Lambda IAM role in the KMS key's policy

C. Grant the decrypt permission for the Lambda resource policy in the KMS key's policy.

D. Create a new IAM policy with the kms:decrypt permission and attach the policy to the Lambda
function.

E. Create a new IAM role with the kms:decrypt permission and attach the execution role to the
Lambda function.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B, E`
> - **Recommended Solution:** Grant the decrypt permission for the Lambda IAM role in the KMS key's policy Create a new IAM role with the kms:decrypt permission and attach the execution role to the Lambda function.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 641
A company wants to monitor its AWS costs for financial review. The cloud operations team is
designing an architecture in the AWS Organizations management account to query AWS Cost
and Usage Reports for all member accounts. The team must run this query once a month and
provide a detailed analysis of the bill.
Which solution is the MOST scalable and cost-effective way to meet these requirements?

A. Enable Cost and Usage Reports in the management account. Deliver reports to Amazon
Kinesis. Use Amazon EMR for analysis.

B. Enable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3
Use Amazon Athena for analysis.

C. Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon S3 Use
Amazon Redshift for analysis.

D. Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon Kinesis.
Use Amazon QuickSight tor analysis.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Enable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3 Use Amazon Athena for analysis.
>
> **Exam Concept Summary:**
> - **Amazon Athena Serverless Analytics:** Enables serverless, interactive SQL querying directly on unstructured and semi-structured data stored in Amazon S3 with zero infrastructure overhead.
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 642
A company wants to run a gaming application on Amazon EC2 instances that are part of an Auto
Scaling group in the AWS Cloud. The application will transmit data by using UDP packets. The
company wants to ensure that the application can scale out and in as traffic increases and
decreases.
What should a solutions architect do to meet these requirements?

A. Attach a Network Load Balancer to the Auto Scaling group.

B. Attach an Application Load Balancer to the Auto Scaling group.

C. Deploy an Amazon Route 53 record set with a weighted policy to route traffic appropriately.

D. Deploy a NAT instance that is configured with port forwarding to the EC2 instances in the Auto
Scaling group.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Attach a Network Load Balancer to the Auto Scaling group.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Amazon Route 53 Intelligent Routing:** Offers advanced DNS routing policies: Geolocation routes by user location/region, Latency-based routes to the AWS Region with the lowest latency, and Failover provides active-passive health-checked disaster recovery.

---

---

Question 643
A company runs several websites on AWS for its different brands. Each website generates tens
of gigabytes of web traffic logs each day. A solutions architect needs to design a scalable
solution to give the company's developers the ability to analyze traffic patterns across all the
company's websites. This analysis by the developers will occur on demand once a week over the
course of several months. The solution must support queries with standard SQL.
Which solution will meet these requirements MOST cost-effectively?

A. Store the logs in Amazon S3. Use Amazon Athena tor analysis.

B. Store the logs in Amazon RDS. Use a database client for analysis.

C. Store the logs in Amazon OpenSearch Service. Use OpenSearch Service for analysis.

D. Store the logs in an Amazon EMR cluster Use a supported open-source framework for
SQL-based analysis.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Store the logs in Amazon S3. Use Amazon Athena tor analysis.
>
> **Exam Concept Summary:**
> - **Amazon Athena Serverless Analytics:** Enables serverless, interactive SQL querying directly on unstructured and semi-structured data stored in Amazon S3 with zero infrastructure overhead.

---

---

Question 644
An international company has a subdomain for each country that the company operates in. The
subdomains are formatted as example.com, country1.example.com, and country2.example.com.
The company's workloads are behind an Application Load Balancer. The company wants to
encrypt the website data that is in transit.
Which combination of steps will meet these requirements? (Choose two.)

A. Use the AWS Certificate Manager (ACM) console to request a public certificate for the apex top
domain example com and a wildcard certificate for *.example.com.

B. Use the AWS Certificate Manager (ACM) console to request a private certificate for the apex
top domain example.com and a wildcard certificate for *.example.com.

C. Use the AWS Certificate Manager (ACM) console to request a public and private certificate for
the apex top domain example.com.

D. Validate domain ownership by email address. Switch to DNS validation by adding the required
DNS records to the DNS provider.

E. Validate domain ownership for the domain by adding the required DNS records to the DNS
provider.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A, E`
> - **Recommended Solution:** Use the AWS Certificate Manager (ACM) console to request a public certificate for the apex top domain example com and a wildcard certificate for *.example.com. Validate domain ownership for the domain by adding the required DNS records to the DNS provider.
>
> **Exam Concept Summary:**
> - **Application Load Balancer (ALB Layer 7):** Distributes HTTP/HTTPS traffic using Layer 7 advanced routing (URL host/path, query parameters, HTTP headers), integrated with AWS WAF, SSL offloading, and container target groups.

---

---

Question 645
A company is required to use cryptographic keys in its on-premises key manager. The key
manager is outside of the AWS Cloud because of regulatory and compliance requirements. The
company wants to manage encryption and decryption by using cryptographic keys that are
retained outside of the AWS Cloud and that support a variety of external key managers from
different vendors.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS CloudHSM key store backed by a CloudHSM cluster.

B. Use an AWS Key Management Service (AWS KMS) external key store backed by an external
key manager.

C. Use the default AWS Key Management Service (AWS KMS) managed key store.

D. Use a custom key store backed by an AWS CloudHSM cluster.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Use an AWS Key Management Service (AWS KMS) external key store backed by an external key manager.
>
> **Exam Concept Summary:**
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 646
A solutions architect needs to host a high performance computing (HPC) workload in the AWS
Cloud. The workload will run on hundreds of Amazon EC2 instances and will require parallel
access to a shared file system to enable distributed processing of large datasets. Datasets will
be accessed across multiple instances simultaneously. The workload requires access latency
within 1 ms. After processing has completed, engineers will need access to the dataset for
manual postprocessing.
Which solution will meet these requirements?

A. Use Amazon Elastic File System (Amazon EFS) as a shared file system. Access the dataset
from Amazon EFS.

B. Mount an Amazon S3 bucket to serve as the shared file system. Perform postprocessing
directly from the S3 bucket.

C. Use Amazon FSx for Lustre as a shared file system. Link the file system to an Amazon S3
bucket for postprocessing.

D. Configure AWS Resource Access Manager to share an Amazon S3 bucket so that it can be
mounted to all instances for processing and postprocessing.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Use Amazon FSx for Lustre as a shared file system. Link the file system to an Amazon S3 bucket for postprocessing.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **Amazon FSx Managed File Systems:** FSx for Windows provides fully managed native SMB file shares with Active Directory integration. FSx for Lustre delivers ultra-high-throughput sub-millisecond storage for compute-intensive HPC and machine learning.

---

---

Question 647
A gaming company is building an application with Voice over IP capabilities. The application will
serve traffic to users across the world. The application needs to be highly available with an
automated failover across AWS Regions. The company wants to minimize the latency of users
without relying on IP address caching on user devices.
What should a solutions architect do to meet these requirements?

A. Use AWS Global Accelerator with health checks.

B. Use Amazon Route 53 with a geolocation routing policy.

C. Create an Amazon CloudFront distribution that includes multiple origins.

D. Create an Application Load Balancer that uses path-based routing.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Use AWS Global Accelerator with health checks.
>
> **Exam Concept Summary:**
> - **Amazon Route 53 Intelligent Routing:** Offers advanced DNS routing policies: Geolocation routes by user location/region, Latency-based routes to the AWS Region with the lowest latency, and Failover provides active-passive health-checked disaster recovery.
> - **Amazon CloudFront & Origin Access Control:** Global Content Delivery Network (CDN) caching content at edge locations. Origin Access Control (OAC) restricts direct public access to S3 origins so users must traverse CloudFront.

---

---

Question 648
A weather forecasting company needs to process hundreds of gigabytes of data with
sub-millisecond latency. The company has a high performance computing (HPC) environment in
its data center and wants to expand its forecasting capabilities.
A solutions architect must identify a highly available cloud storage solution that can handle large
amounts of sustained throughput. Files that are stored in the solution should be accessible to
thousands of compute instances that will simultaneously access and process the entire dataset.
What should the solutions architect do to meet these requirements?

A. Use Amazon FSx for Lustre scratch file systems.

B. Use Amazon FSx for Lustre persistent file systems.

C. Use Amazon Elastic File System (Amazon EFS) with Bursting Throughput mode.

D. Use Amazon Elastic File System (Amazon EFS) with Provisioned Throughput mode.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Use Amazon FSx for Lustre persistent file systems.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **Amazon FSx Managed File Systems:** FSx for Windows provides fully managed native SMB file shares with Active Directory integration. FSx for Lustre delivers ultra-high-throughput sub-millisecond storage for compute-intensive HPC and machine learning.

---

---

Question 649
An ecommerce company runs a PostgreSQL database on premises. The database stores data
by using high IOPS Amazon Elastic Block Store (Amazon EBS) block storage. The daily peak I/O
transactions per second do not exceed 15,000 IOPS. The company wants to migrate the
database to Amazon RDS for PostgreSQL and provision disk IOPS performance independent of
disk storage capacity.
Which solution will meet these requirements MOST cost-effectively?

A. Configure the General Purpose SSD (gp2) EBS volume storage type and provision 15,000
IOPS.

B. Configure the Provisioned IOPS SSD (io1) EBS volume storage type and provision 15,000
IOPS.

C. Configure the General Purpose SSD (gp3) EBS volume storage type and provision 15,000
IOPS.

D. Configure the EBS magnetic volume type to achieve maximum IOPS.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Configure the General Purpose SSD (gp3) EBS volume storage type and provision 15,000 IOPS.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 650
A company wants to migrate its on-premises Microsoft SQL Server Enterprise edition database
to AWS. The company's online application uses the database to process transactions. The data
analysis team uses the same production database to run reports for analytical processing. The
company wants to reduce operational overhead by moving to managed services wherever
possible.
Which solution will meet these requirements with the LEAST operational overhead?

A. Migrate to Amazon RDS for Microsoft SOL Server. Use read replicas for reporting purposes

B. Migrate to Microsoft SQL Server on Amazon EC2. Use Always On read replicas for reporting
purposes

C. Migrate to Amazon DynamoDB. Use DynamoDB on-demand replicas for reporting purposes

D. Migrate to Amazon Aurora MySQL. Use Aurora read replicas for reporting purposes

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Migrate to Amazon RDS for Microsoft SOL Server. Use read replicas for reporting purposes
>
> **Exam Concept Summary:**
> - **Amazon RDS Read Replicas:** Asynchronously replicates primary database transactions to offload read-heavy reporting and analytics workloads across local AZs or remote AWS Regions.
> - **Amazon Aurora High Availability & Global DB:** Replicates 6 copies of data across 3 Availability Zones natively. Aurora Global Database provides dedicated multi-region relational clustering with storage-level replication latency under 1 second.

---

---

Question 651
A company stores a large volume of image files in an Amazon S3 bucket. The images need to be
readily available for the first 180 days. The images are infrequently accessed for the next 180
days. After 360 days, the images need to be archived but must be available instantly upon
request. After 5 years, only auditors can access the images. The auditors must be able to
retrieve the images within 12 hours. The images cannot be lost during this process.
A developer will use S3 Standard storage for the first 180 days. The developer needs to
configure an S3 Lifecycle rule.
Which solution will meet these requirements MOST cost-effectively?

A. Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3
Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

B. Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3
Glacier Flexible Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

C. Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3
Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

D. Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3
Glacier Flexible Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.
>
> **Exam Concept Summary:**
> - **Amazon S3 Glacier Storage Classes:** Glacier Instant Retrieval delivers millisecond access for rare access; Flexible Retrieval provides 1-5 minute expedited or 3-5 hour standard access; Deep Archive offers lowest cost for long-term retention with 12-hour retrieval.
> - **S3 Lifecycle Management:** Automatically transitions objects across storage tiers based on age or access patterns to minimize storage costs without operational overhead.

---

---

Question 652
A company has a large data workload that runs for 6 hours each day. The company cannot lose
any data while the process is running. A solutions architect is designing an Amazon EMR cluster
configuration to support this critical data workload.
Which solution will meet these requirements MOST cost-effectively?

A. Configure a long-running cluster that runs the primary node and core nodes on On-Demand
Instances and the task nodes on Spot Instances.

B. Configure a transient cluster that runs the primary node and core nodes on On-Demand
Instances and the task nodes on Spot Instances.

C. Configure a transient cluster that runs the primary node on an On-Demand Instance and the
core nodes and task nodes on Spot Instances.

D. Configure a long-running cluster that runs the primary node on an On-Demand Instance, the
core nodes on Spot Instances, and the task nodes on Spot Instances.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Configure a transient cluster that runs the primary node and core nodes on On-Demand Instances and the task nodes on Spot Instances.
>
> **Exam Concept Summary:**
> - **Amazon EC2 Spot Instances:** Offers up to 90% discount on spare EC2 capacity. Ideal for stateless, fault-tolerant, batch, and flexible workloads that can withstand instance termination with a 2-minute notice.

---

---

Question 653
A company maintains an Amazon RDS database that maps users to cost centers. The company
has accounts in an organization in AWS Organizations. The company needs a solution that will
tag all resources that are created in a specific AWS account in the organization. The solution
must tag each resource with the cost center ID of the user who created the resource.
Which solution will meet these requirements?

A. Move the specific AWS account to a new organizational unit (OU) in Organizations from the
management account. Create a service control policy (SCP) that requires all existing resources to
have the correct cost center tag before the resources are created. Apply the SCP to the new OU.

B. Create an AWS Lambda function to tag the resources after the Lambda function looks up the
appropriate cost center from the RDS database. Configure an Amazon EventBridge rule that
reacts to AWS CloudTrail events to invoke the Lambda function.

C. Create an AWS CloudFormation stack to deploy an AWS Lambda function. Configure the
Lambda function to look up the appropriate cost center from the RDS database and to tag
resources. Create an Amazon EventBridge scheduled rule to invoke the CloudFormation stack.

D. Create an AWS Lambda function to tag the resources with a default value. Configure an
Amazon EventBridge rule that reacts to AWS CloudTrail events to invoke the Lambda function
when a resource is missing the cost center tag.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create an AWS Lambda function to tag the resources after the Lambda function looks up the appropriate cost center from the RDS database. Configure an Amazon EventBridge rule that reacts to AWS CloudTrail events to invoke the Lambda function.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 654
A company recently migrated its web application to the AWS Cloud. The company uses an
Amazon EC2 instance to run multiple processes to host the application. The processes include
an Apache web server that serves static content. The Apache web server makes requests to a
PHP application that uses a local Redis server for user sessions.
The company wants to redesign the architecture to be highly available and to use AWS managed
solutions.
Which solution will meet these requirements?

A. Use AWS Elastic Beanstalk to host the static content and the PHP application. Configure
Elastic Beanstalk to deploy its EC2 instance into a public subnet. Assign a public IP address.

B. Use AWS Lambda to host the static content and the PHP application. Use an Amazon API
Gateway REST API to proxy requests to the Lambda function. Set the API Gateway CORS
configuration to respond to the domain name. Configure Amazon ElastiCache for Redis to handle
session information.

C. Keep the backend code on the EC2 instance. Create an Amazon ElastiCache for Redis cluster
that has Multi-AZ enabled. Configure the ElastiCache for Redis cluster in cluster mode. Copy the
frontend resources to Amazon S3. Configure the backend code to reference the EC2 instance.

D. Configure an Amazon CloudFront distribution with an Amazon S3 endpoint to an S3 bucket that
is configured to host the static content. Configure an Application Load Balancer that targets an
Amazon Elastic Container Service (Amazon ECS) service that runs AWS Fargate tasks for the
PHP application. Configure the PHP application to use an Amazon ElastiCache for Redis cluster
that runs in multiple Availability Zones.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Configure an Amazon CloudFront distribution with an Amazon S3 endpoint to an S3 bucket that is configured to host the static content. Configure an Application Load Balancer that targets an Amazon Elastic Container Service (Amazon ECS) service that runs AWS Fargate tasks for the PHP application. Configure the PHP application to use an Amazon ElastiCache for Redis cluster that runs in multiple Availability Zones.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Fargate Serverless Containers:** AWS Fargate removes the operational burden of provisioning, configuring, and scaling EC2 container hosts, paying only for the compute resources used by running tasks.

---

---

Question 655
A company runs a web application on Amazon EC2 instances in an Auto Scaling group that has
a target group. The company designed the application to work with session affinity (sticky
sessions) for a better user experience.
The application must be available publicly over the internet as an endpoint. A WAF must be
applied to the endpoint for additional security. Session affinity (sticky sessions) must be
configured on the endpoint.
Which combination of steps will meet these requirements? (Choose two.)

A. Create a public Network Load Balancer. Specify the application target group.

B. Create a Gateway Load Balancer. Specify the application target group.

C. Create a public Application Load Balancer. Specify the application target group.

D. Create a second target group. Add Elastic IP addresses to the EC2 instances.

E. Create a web ACL in AWS WAF. Associate the web ACL with the endpoint

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C, E`
> - **Recommended Solution:** Create a public Application Load Balancer. Specify the application target group. Create a web ACL in AWS WAF. Associate the web ACL with the endpoint
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Application Load Balancer (ALB Layer 7):** Distributes HTTP/HTTPS traffic using Layer 7 advanced routing (URL host/path, query parameters, HTTP headers), integrated with AWS WAF, SSL offloading, and container target groups.

---

---

Question 656
A company runs a website that stores images of historical events. Website users need the ability
to search and view images based on the year that the event in the image occurred. On average,
users request each image only once or twice a year. The company wants a highly available
solution to store and deliver the images to users.
Which solution will meet these requirements MOST cost-effectively?

A. Store images in Amazon Elastic Block Store (Amazon EBS). Use a web server that runs on
Amazon EC2.

B. Store images in Amazon Elastic File System (Amazon EFS). Use a web server that runs on
Amazon EC2.

C. Store images in Amazon S3 Standard. Use S3 Standard to directly deliver images by using a
static website.

D. Store images in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Use S3 Standard-IA
to directly deliver images by using a static website.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Store images in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Use S3 Standard-IA to directly deliver images by using a static website.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.

---

---

Question 657
A company has multiple AWS accounts in an organization in AWS Organizations that different
business units use. The company has multiple offices around the world. The company needs to
update security group rules to allow new office CIDR ranges or to remove old CIDR ranges
across the organization. The company wants to centralize the management of security group
rules to minimize the administrative overhead that updating CIDR ranges requires.
Which solution will meet these requirements MOST cost-effectively?

A. Create VPC security groups in the organization's management account. Update the security
groups when a CIDR range update is necessary.

B. Create a VPC customer managed prefix list that contains the list of CIDRs. Use AWS Resource
Access Manager (AWS RAM) to share the prefix list across the organization. Use the prefix list in
the security groups across the organization.

C. Create an AWS managed prefix list. Use an AWS Security Hub policy to enforce the security
group update across the organization. Use an AWS Lambda function to update the prefix list
automatically when the CIDR ranges change.

D. Create security groups in a central administrative AWS account. Create an AWS Firewall
Manager common security group policy for the whole organization. Select the previously created
security groups as primary groups in the policy.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create a VPC customer managed prefix list that contains the list of CIDRs. Use AWS Resource Access Manager (AWS RAM) to share the prefix list across the organization. Use the prefix list in the security groups across the organization.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 658
A company uses an on-premises network-attached storage (NAS) system to provide file shares
to its high performance computing (HPC) workloads. The company wants to migrate its
latency-sensitive HPC workloads and its storage to the AWS Cloud. The company must be able
to provide NFS and SMB multi-protocol access from the file system.
Which solution will meet these requirements with the LEAST latency? (Choose two.)

A. Deploy compute optimized EC2 instances into a cluster placement group.

B. Deploy compute optimized EC2 instances into a partition placement group.

C. Attach the EC2 instances to an Amazon FSx for Lustre file system.

D. Attach the EC2 instances to an Amazon FSx for OpenZFS file system.

E. Attach the EC2 instances to an Amazon FSx for NetApp ONTAP file system.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A, E`
> - **Recommended Solution:** Deploy compute optimized EC2 instances into a cluster placement group. Attach the EC2 instances to an Amazon FSx for NetApp ONTAP file system.
>
> **Exam Concept Summary:**
> - **Amazon FSx Managed File Systems:** FSx for Windows provides fully managed native SMB file shares with Active Directory integration. FSx for Lustre delivers ultra-high-throughput sub-millisecond storage for compute-intensive HPC and machine learning.
> - **EC2 Placement Groups:** Cluster groups pack instances close together inside a single AZ for low-latency 10 Gbps networking; Spread groups strictly isolate instances on distinct hardware racks across AZs for high availability.

---

---

Question 659
A company is relocating its data center and wants to securely transfer 50 TB of data to AWS
within 2 weeks. The existing data center has a Site-to-Site VPN connection to AWS that is 90%
utilized.
Which AWS service should a solutions architect use to meet these requirements?

A. AWS DataSync with a VPC endpoint

B. AWS Direct Connect

C. AWS Snowball Edge Storage Optimized

D. AWS Storage Gateway

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** AWS Snowball Edge Storage Optimized
>
> **Exam Concept Summary:**
> - **AWS Storage Gateway:** Connects on-premises environments to cloud storage. S3 File Gateway exposes S3 via NFS/SMB caching; Volume Gateway provides iSCSI block storage backed by EBS snapshots.
> - **AWS Direct Connect (DX):** Establishes a dedicated, private physical fiber-optic connection from an on-premises data center to AWS, bypassing the public internet for consistent network performance and lower egress costs.

---

---

Question 660
A company hosts an application on Amazon EC2 On-Demand Instances in an Auto Scaling
group. Application peak hours occur at the same time each day. Application users report slow
application performance at the start of peak hours. The application performs normally 2-3 hours
after peak hours begin. The company wants to ensure that the application works properly at the
start of peak hours.
Which solution will meet these requirements?

A. Configure an Application Load Balancer to distribute traffic properly to the instances.

B. Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based
on memory utilization.

C. Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based
on CPU utilization.

D. Configure a scheduled scaling policy for the Auto Scaling group to launch new instances before
peak hours.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Configure a scheduled scaling policy for the Auto Scaling group to launch new instances before peak hours.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Application Load Balancer (ALB Layer 7):** Distributes HTTP/HTTPS traffic using Layer 7 advanced routing (URL host/path, query parameters, HTTP headers), integrated with AWS WAF, SSL offloading, and container target groups.

---

---

Question 661
A company runs applications on AWS that connect to the company's Amazon RDS database.
The applications scale on weekends and at peak times of the year. The company wants to scale
the database more effectively for its applications that connect to the database.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon DynamoDB with connection pooling with a target group configuration for the
database. Change the applications to use the DynamoDB endpoint.

B. Use Amazon RDS Proxy with a target group for the database. Change the applications to use
the RDS Proxy endpoint.

C. Use a custom proxy that runs on Amazon EC2 as an intermediary to the database. Change the
applications to use the custom proxy endpoint.

D. Use an AWS Lambda function to provide connection pooling with a target group configuration
for the database. Change the applications to use the Lambda function.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Use Amazon RDS Proxy with a target group for the database. Change the applications to use the RDS Proxy endpoint.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **Amazon DynamoDB NoSQL:** Fully managed NoSQL database providing single-digit millisecond response times at any scale with options for On-Demand capacity and automated global multi-region replication via Global Tables.

---

---

Question 662
A company uses AWS Cost Explorer to monitor its AWS costs. The company notices that
Amazon Elastic Block Store (Amazon EBS) storage and snapshot costs increase every month.
However, the company does not purchase additional EBS storage every month. The company
wants to optimize monthly costs for its current storage usage.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use logs in Amazon CloudWatch Logs to monitor the storage utilization of Amazon EBS. Use
Amazon EBS Elastic Volumes to reduce the size of the EBS volumes.

B. Use a custom script to monitor space usage. Use Amazon EBS Elastic Volumes to reduce the
size of the EBS volumes.

C. Delete all expired and unused snapshots to reduce snapshot costs.

D. Delete all nonessential snapshots. Use Amazon Data Lifecycle Manager to create and manage
the snapshots according to the company's snapshot policy requirements.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Delete all nonessential snapshots. Use Amazon Data Lifecycle Manager to create and manage the snapshots according to the company's snapshot policy requirements.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 663
A company is developing a new application on AWS. The application consists of an Amazon
Elastic Container Service (Amazon ECS) cluster, an Amazon S3 bucket that contains assets for
the application, and an Amazon RDS for MySQL database that contains the dataset for the
application. The dataset contains sensitive information. The company wants to ensure that only
the ECS cluster can access the data in the RDS for MySQL database and the data in the S3
bucket.
Which solution will meet these requirements?

A. Create a new AWS Key Management Service (AWS KMS) customer managed key to encrypt
both the S3 bucket and the RDS for MySQL database. Ensure that the KMS key policy includes
encrypt and decrypt permissions for the ECS task execution role.

B. Create an AWS Key Management Service (AWS KMS) AWS managed key to encrypt both the
S3 bucket and the RDS for MySQL database. Ensure that the S3 bucket policy specifies the ECS
task execution role as a user.

C. Create an S3 bucket policy that restricts bucket access to the ECS task execution role. Create
a VPC endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security group to allow
access from only the subnets that the ECS cluster will generate tasks in.

D. Create a VPC endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security
group to allow access from only the subnets that the ECS cluster will generate tasks in. Create a
VPC endpoint for Amazon S3. Update the S3 bucket policy to allow access from only the S3 VPC
endpoint.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Create a new AWS Key Management Service (AWS KMS) customer managed key to encrypt both the S3 bucket and the RDS for MySQL database. Ensure that the KMS key policy includes encrypt and decrypt permissions for the ECS task execution role.
>
> **Exam Concept Summary:**
> - **AWS Fargate Serverless Containers:** AWS Fargate removes the operational burden of provisioning, configuring, and scaling EC2 container hosts, paying only for the compute resources used by running tasks.
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 664
A company has a web application that runs on premises. The application experiences latency
issues during peak hours. The latency issues occur twice each month. At the start of a latency
issue, the application's CPU utilization immediately increases to 10 times its normal amount.
The company wants to migrate the application to AWS to improve latency. The company also
wants to scale the application automatically when application demand increases. The company
will use AWS Elastic Beanstalk for application deployment.
Which solution will meet these requirements?

A. Configure an Elastic Beanstalk environment to use burstable performance instances in
unlimited mode. Configure the environment to scale based on requests.

B. Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the
environment to scale based on requests.

C. Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the
environment to scale on a schedule.

D. Configure an Elastic Beanstalk environment to use burstable performance instances in
unlimited mode. Configure the environment to scale on predictive metrics.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode. Configure the environment to scale based on requests.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 665
A company has customers located across the world. The company wants to use automation to
secure its systems and network infrastructure. The company's security team must be able to
track and audit all incremental changes to the infrastructure.
Which solution will meet these requirements?

A. Use AWS Organizations to set up the infrastructure. Use AWS Config to track changes.

B. Use AWS CloudFormation to set up the infrastructure. Use AWS Config to track changes.

C. Use AWS Organizations to set up the infrastructure. Use AWS Service Catalog to track
changes.

D. Use AWS CloudFormation to set up the infrastructure. Use AWS Service Catalog to track
changes.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Use AWS CloudFormation to set up the infrastructure. Use AWS Config to track changes.
>
> **Exam Concept Summary:**
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 666
A startup company is hosting a website for its customers on an Amazon EC2 instance. The
website consists of a stateless Python application and a MySQL database. The website serves
only a small amount of traffic. The company is concerned about the reliability of the instance and
needs to migrate to a highly available architecture. The company cannot modify the application
code.
Which combination of actions should a solutions architect take to achieve high availability for the
website? (Choose two.)

A. Provision an internet gateway in each Availability Zone in use.

B. Migrate the database to an Amazon RDS for MySQL Multi-AZ DB instance.

C. Migrate the database to Amazon DynamoDB, and enable DynamoDB auto scaling.

D. Use AWS DataSync to synchronize the database data across multiple EC2 instances.

E. Create an Application Load Balancer to distribute traffic to an Auto Scaling group of EC2
instances that are distributed across two Availability Zones.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B, E`
> - **Recommended Solution:** Migrate the database to an Amazon RDS for MySQL Multi-AZ DB instance. Create an Application Load Balancer to distribute traffic to an Auto Scaling group of EC2 instances that are distributed across two Availability Zones.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Amazon RDS Multi-AZ High Availability:** Synchronously replicates data to a standby DB instance in another Availability Zone for automated failover. Crucially, the standby instance cannot serve active read queries.

---

---

Question 667
A company is moving its data and applications to AWS during a multiyear migration project. The
company wants to securely access data on Amazon S3 from the company's AWS Region and
from the company's on-premises location. The data must not traverse the internet. The company
has established an AWS Direct Connect connection between its Region and its on-premises
location.
Which solution will meet these requirements?

A. Create gateway endpoints for Amazon S3. Use the gateway endpoints to securely access the
data from the Region and the on-premises location.

B. Create a gateway in AWS Transit Gateway to access Amazon S3 securely from the Region and
the on-premises location.

C. Create interface endpoints for Amazon S3. Use the interface endpoints to securely access the
data from the Region and the on-premises location.

D. Use an AWS Key Management Service (AWS KMS) key to access the data securely from the
Region and the on-premises location.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create interface endpoints for Amazon S3. Use the interface endpoints to securely access the data from the Region and the on-premises location.
>
> **Exam Concept Summary:**
> - **VPC Gateway Endpoints:** Configured directly in VPC route tables to provide private, high-bandwidth, and completely free network routing from EC2 to Amazon S3 and DynamoDB without needing a NAT Gateway or Internet Gateway.
> - **AWS PrivateLink & Interface Endpoints:** Provisions private IP Elastic Network Interfaces (ENIs) inside subnets to privately connect VPC workloads to AWS services or SaaS partner solutions over private backbone networking.

---

---

Question 668
A company created a new organization in AWS Organizations. The organization has multiple
accounts for the company's development teams. The development team members use AWS IAM
Identity Center (AWS Single Sign-On) to access the accounts. For each of the company's
applications, the development teams must use a predefined application name to tag resources
that are created.
A solutions architect needs to design a solution that gives the development team the ability to
create resources only if the application name tag has an approved value.
Which solution will meet these requirements?

A. Create an IAM group that has a conditional Allow policy that requires the application name tag
to be specified for resources to be created.

B. Create a cross-account role that has a Deny policy for any resource that has the application
name tag.

C. Create a resource group in AWS Resource Groups to validate that the tags are applied to all
resources in all accounts.

D. Create a tag policy in Organizations that has a list of allowed application names.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Create a tag policy in Organizations that has a list of allowed application names.
>
> **Exam Concept Summary:**
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 669
A company runs its databases on Amazon RDS for PostgreSQL. The company wants a secure
solution to manage the master user password by rotating the password every 30 days.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon EventBridge to schedule a custom AWS Lambda function to rotate the password
every 30 days.

B. Use the modify-db-instance command in the AWS CLI to change the password.

C. Integrate AWS Secrets Manager with Amazon RDS for PostgreSQL to automate password
rotation.

D. Integrate AWS Systems Manager Parameter Store with Amazon RDS for PostgreSQL to
automate password rotation.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Integrate AWS Secrets Manager with Amazon RDS for PostgreSQL to automate password rotation.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Secrets Manager:** Enables secure storage and automated rotation of database credentials, API keys, and sensitive tokens with native Amazon RDS integration.

---

---

Question 670
A company performs tests on an application that uses an Amazon DynamoDB table. The tests
run for 4 hours once a week. The company knows how many read and write operations the
application performs to the table each second during the tests. The company does not currently
use DynamoDB for any other use case. A solutions architect needs to optimize the costs for the
table.
Which solution will meet these requirements?

A. Choose on-demand mode. Update the read and write capacity units appropriately.

B. Choose provisioned mode. Update the read and write capacity units appropriately.

C. Purchase DynamoDB reserved capacity for a 1-year term.

D. Purchase DynamoDB reserved capacity for a 3-year term.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Choose provisioned mode. Update the read and write capacity units appropriately.
>
> **Exam Concept Summary:**
> - **Amazon DynamoDB NoSQL:** Fully managed NoSQL database providing single-digit millisecond response times at any scale with options for On-Demand capacity and automated global multi-region replication via Global Tables.

---

---

Question 671
A company runs its applications on Amazon EC2 instances. The company performs periodic
financial assessments of its AWS costs. The company recently identified unusual spending.
The company needs a solution to prevent unusual spending. The solution must monitor costs
and notify responsible stakeholders in the event of unusual spending.
Which solution will meet these requirements?

A. Use an AWS Budgets template to create a zero spend budget.

B. Create an AWS Cost Anomaly Detection monitor in the AWS Billing and Cost Management
console.

C. Create AWS Pricing Calculator estimates for the current running workload pricing details.

D. Use Amazon CloudWatch to monitor costs and to identify unusual spending.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create an AWS Cost Anomaly Detection monitor in the AWS Billing and Cost Management console.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 672
A marketing company receives a large amount of new clickstream data in Amazon S3 from a
marketing campaign. The company needs to analyze the clickstream data in Amazon S3 quickly.
Then the company needs to determine whether to process the data further in the data pipeline.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create external tables in a Spark catalog. Configure jobs in AWS Glue to query the data.

B. Configure an AWS Glue crawler to crawl the data. Configure Amazon Athena to query the data.

C. Create external tables in a Hive metastore. Configure Spark jobs in Amazon EMR to query the
data.

D. Configure an AWS Glue crawler to crawl the data. Configure Amazon Kinesis Data Analytics to
use SQL to query the data.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Configure an AWS Glue crawler to crawl the data. Configure Amazon Athena to query the data.
>
> **Exam Concept Summary:**
> - **Amazon Athena Serverless Analytics:** Enables serverless, interactive SQL querying directly on unstructured and semi-structured data stored in Amazon S3 with zero infrastructure overhead.

---

---

Question 673
A company runs an SMB file server in its data center. The file server stores large files that the
company frequently accesses for up to 7 days after the file creation date. After 7 days, the
company needs to be able to access the files with a maximum retrieval time of 24 hours.
Which solution will meet these requirements?

A. Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.

B. Create an Amazon S3 File Gateway to increase the company's storage space. Create an S3
Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.

C. Create an Amazon FSx File Gateway to increase the company's storage space. Create an
Amazon S3 Lifecycle policy to transition the data after 7 days.

D. Configure access to Amazon S3 for each user. Create an S3 Lifecycle policy to transition the
data to S3 Glacier Flexible Retrieval after 7 days.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create an Amazon S3 File Gateway to increase the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.
>
> **Exam Concept Summary:**
> - **Amazon S3 Glacier Storage Classes:** Glacier Instant Retrieval delivers millisecond access for rare access; Flexible Retrieval provides 1-5 minute expedited or 3-5 hour standard access; Deep Archive offers lowest cost for long-term retention with 12-hour retrieval.
> - **S3 Lifecycle Management:** Automatically transitions objects across storage tiers based on age or access patterns to minimize storage costs without operational overhead.

---

---

Question 674
A company runs a web application on Amazon EC2 instances in an Auto Scaling group. The
application uses a database that runs on an Amazon RDS for PostgreSQL DB instance. The
application performs slowly when traffic increases. The database experiences a heavy read load
during periods of high traffic.
Which actions should a solutions architect take to resolve these performance issues? (Choose
two.)

A. Turn on auto scaling for the DB instance.

B. Create a read replica for the DB instance. Configure the application to send read traffic to the
read replica.

C. Convert the DB instance to a Multi-AZ DB instance deployment. Configure the application to
send read traffic to the standby DB instance.

D. Create an Amazon ElastiCache cluster. Configure the application to cache query results in the
ElastiCache cluster.

E. Configure the Auto Scaling group subnets to ensure that the EC2 instances are provisioned in
the same Availability Zone as the DB instance.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B, D`
> - **Recommended Solution:** Create a read replica for the DB instance. Configure the application to send read traffic to the read replica. Create an Amazon ElastiCache cluster. Configure the application to cache query results in the ElastiCache cluster.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Amazon RDS Multi-AZ High Availability:** Synchronously replicates data to a standby DB instance in another Availability Zone for automated failover. Crucially, the standby instance cannot serve active read queries.

---

---

Question 675
A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS)
volumes to run an application. The company creates one snapshot of each EBS volume every
day to meet compliance requirements. The company wants to implement an architecture that
prevents the accidental deletion of EBS volume snapshots. The solution must not change the
administrative rights of the storage administrator user.
Which solution will meet these requirements with the LEAST administrative effort?

A. Create an IAM role that has permission to delete snapshots. Attach the role to a new EC2
instance. Use the AWS CLI from the new EC2 instance to delete snapshots.

B. Create an IAM policy that denies snapshot deletion. Attach the policy to the storage
administrator user.

C. Add tags to the snapshots. Create retention rules in Recycle Bin for EBS snapshots that have
the tags.

D. Lock the EBS snapshots to prevent deletion.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Lock the EBS snapshots to prevent deletion.
>
> **Exam Concept Summary:**
> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.

---

---

Question 676
A company's application uses Network Load Balancers, Auto Scaling groups, Amazon EC2
instances, and databases that are deployed in an Amazon VPC. The company wants to capture
information about traffic to and from the network interfaces in near real time in its Amazon VPC.
The company wants to send the information to Amazon OpenSearch Service for analysis.
Which solution will meet these requirements?

A. Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log
data to the log group. Use Amazon Kinesis Data Streams to stream the logs from the log group to
OpenSearch Service.

B. Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log
data to the log group. Use Amazon Kinesis Data Firehose to stream the logs from the log group to
OpenSearch Service.

C. Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use
Amazon Kinesis Data Streams to stream the logs from the trail to OpenSearch Service.

D. Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use
Amazon Kinesis Data Firehose to stream the logs from the trail to OpenSearch Service.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log data to the log group. Use Amazon Kinesis Data Firehose to stream the logs from the log group to OpenSearch Service.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Network Load Balancer (NLB Layer 4):** Ultra-high-performance Layer 4 load balancer handling millions of requests per second with ultra-low latency and dedicated static/Elastic IP support.

---

---

Question 677
A company is developing an application that will run on a production Amazon Elastic Kubernetes
Service (Amazon EKS) cluster. The EKS cluster has managed node groups that are provisioned
with On-Demand Instances.
The company needs a dedicated EKS cluster for development work. The company will use the
development cluster infrequently to test the resiliency of the application. The EKS cluster must
manage all the nodes.
Which solution will meet these requirements MOST cost-effectively?

A. Create a managed node group that contains only Spot Instances.

B. Create two managed node groups. Provision one node group with On-Demand Instances.
Provision the second node group with Spot Instances.

C. Create an Auto Scaling group that has a launch configuration that uses Spot Instances.
Configure the user data to add the nodes to the EKS cluster.

D. Create a managed node group that contains only On-Demand Instances.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create two managed node groups. Provision one node group with On-Demand Instances. Provision the second node group with Spot Instances.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Amazon EC2 Spot Instances:** Offers up to 90% discount on spare EC2 capacity. Ideal for stateless, fault-tolerant, batch, and flexible workloads that can withstand instance termination with a 2-minute notice.

---

---

Question 678
A company stores sensitive data in Amazon S3. A solutions architect needs to create an
encryption solution. The company needs to fully control the ability of users to create, rotate, and
disable encryption keys with minimal effort for any data that must be encrypted.
Which solution will meet these requirements?

A. Use default server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to
store the sensitive data.

B. Create a customer managed key by using AWS Key Management Service (AWS KMS). Use
the new key to encrypt the S3 objects by using server-side encryption with AWS KMS keys
(SSE-KMS).

C. Create an AWS managed key by using AWS Key Management Service (AWS KMS). Use the
new key to encrypt the S3 objects by using server-side encryption with AWS KMS keys
(SSE-KMS).

D. Download S3 objects to an Amazon EC2 instance. Encrypt the objects by using customer
managed keys. Upload the encrypted objects back into Amazon S3.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create a customer managed key by using AWS Key Management Service (AWS KMS). Use the new key to encrypt the S3 objects by using server-side encryption with AWS KMS keys (SSE-KMS).
>
> **Exam Concept Summary:**
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 679
A company wants to back up its on-premises virtual machines (VMs) to AWS. The company's
backup solution exports on-premises backups to an Amazon S3 bucket as objects. The S3
backups must be retained for 30 days and must be automatically deleted after 30 days.
Which combination of steps will meet these requirements? (Choose three.)

A. Create an S3 bucket that has S3 Object Lock enabled.

B. Create an S3 bucket that has object versioning enabled.

C. Configure a default retention period of 30 days for the objects.

D. Configure an S3 Lifecycle policy to protect the objects for 30 days.

E. Configure an S3 Lifecycle policy to expire the objects after 30 days.

F. Configure the backup solution to tag the objects with a 30-day retention period

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A, C, E`
> - **Recommended Solution:** Create an S3 bucket that has S3 Object Lock enabled. Configure a default retention period of 30 days for the objects. Configure an S3 Lifecycle policy to expire the objects after 30 days.
>
> **Exam Concept Summary:**
> - **S3 Lifecycle Management:** Automatically transitions objects across storage tiers based on age or access patterns to minimize storage costs without operational overhead.
> - **S3 Object Lock (WORM):** Enforces Write Once Read Many (WORM) storage. Compliance mode prevents object deletion by any user including the root account; Governance mode allows specific IAM permissions to override.

---

---

Question 680
A solutions architect needs to copy files from an Amazon S3 bucket to an Amazon Elastic File
System (Amazon EFS) file system and another S3 bucket. The files must be copied
continuously. New files are added to the original S3 bucket consistently. The copied files should
be overwritten only if the source file changes.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS DataSync location for both the destination S3 bucket and the EFS file system.
Create a task for the destination S3 bucket and the EFS file system. Set the transfer mode to
transfer only data that has changed.

B. Create an AWS Lambda function. Mount the file system to the function. Set up an S3 event
notification to invoke the function when files are created and changed in Amazon S3. Configure
the function to copy files to the file system and the destination S3 bucket.

C. Create an AWS DataSync location for both the destination S3 bucket and the EFS file system.
Create a task for the destination S3 bucket and the EFS file system. Set the transfer mode to
transfer all data.

D. Launch an Amazon EC2 instance in the same VPC as the file system. Mount the file system.
Create a script to routinely synchronize all objects that changed in the origin S3 bucket to the
destination S3 bucket and the mounted file system.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Create an AWS DataSync location for both the destination S3 bucket and the EFS file system. Create a task for the destination S3 bucket and the EFS file system. Set the transfer mode to transfer only data that has changed.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 681
A company uses Amazon EC2 instances and stores data on Amazon Elastic Block Store
(Amazon EBS) volumes. The company must ensure that all data is encrypted at rest by using
AWS Key Management Service (AWS KMS). The company must be able to control rotation of
the encryption keys.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create a customer managed key. Use the key to encrypt the EBS volumes.

B. Use an AWS managed key to encrypt the EBS volumes. Use the key to configure automatic
key rotation.

C. Create an external KMS key with imported key material. Use the key to encrypt the EBS
volumes.

D. Use an AWS owned key to encrypt the EBS volumes.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Create a customer managed key. Use the key to encrypt the EBS volumes.
>
> **Exam Concept Summary:**
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 682
A company needs a solution to enforce data encryption at rest on Amazon EC2 instances. The
solution must automatically identify noncompliant resources and enforce compliance policies on
findings.
Which solution will meet these requirements with the LEAST administrative overhead?

A. Use an IAM policy that allows users to create only encrypted Amazon Elastic Block Store
(Amazon EBS) volumes. Use AWS Config and AWS Systems Manager to automate the detection
and remediation of unencrypted EBS volumes.

B. Use AWS Key Management Service (AWS KMS) to manage access to encrypted Amazon
Elastic Block Store (Amazon EBS) volumes. Use AWS Lambda and Amazon EventBridge to
automate the detection and remediation of unencrypted EBS volumes.

C. Use Amazon Macie to detect unencrypted Amazon Elastic Block Store (Amazon EBS) volumes.
Use AWS Systems Manager Automation rules to automatically encrypt existing and new EBS
volumes.

D. Use Amazon inspector to detect unencrypted Amazon Elastic Block Store (Amazon EBS)
volumes. Use AWS Systems Manager Automation rules to automatically encrypt existing and new
EBS volumes.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Use an IAM policy that allows users to create only encrypted Amazon Elastic Block Store (Amazon EBS) volumes. Use AWS Config and AWS Systems Manager to automate the detection and remediation of unencrypted EBS volumes.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 683
A company is migrating its multi-tier on-premises application to AWS. The application consists of
a single-node MySQL database and a multi-node web tier. The company must minimize changes
to the application during the migration. The company wants to improve application resiliency
after the migration.
Which combination of steps will meet these requirements? (Choose two.)

A. Migrate the web tier to Amazon EC2 instances in an Auto Scaling group behind an Application
Load Balancer.

B. Migrate the database to Amazon EC2 instances in an Auto Scaling group behind a Network
Load Balancer.

C. Migrate the database to an Amazon RDS Multi-AZ deployment.

D. Migrate the web tier to an AWS Lambda function.

E. Migrate the database to an Amazon DynamoDB table.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A, C`
> - **Recommended Solution:** Migrate the web tier to Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. Migrate the database to an Amazon RDS Multi-AZ deployment.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 684
A company wants to migrate its web applications from on premises to AWS. The company is
located close to the eu-central-1 Region. Because of regulations, the company cannot launch
some of its applications in eu-central-1. The company wants to achieve single-digit millisecond
latency.
Which solution will meet these requirements?

A. Deploy the applications in eu-central-1. Extend the company’s VPC from eu-central-1 to an
edge location in Amazon CloudFront.

B. Deploy the applications in AWS Local Zones by extending the company's VPC from
eu-central-1 to the chosen Local Zone.

C. Deploy the applications in eu-central-1. Extend the company’s VPC from eu-central-1 to the
regional edge caches in Amazon CloudFront.

D. Deploy the applications in AWS Wavelength Zones by extending the company’s VPC from
eu-central-1 to the chosen Wavelength Zone.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Deploy the applications in AWS Local Zones by extending the company's VPC from eu-central-1 to the chosen Local Zone.
>
> **Exam Concept Summary:**
> - **Amazon CloudFront & Origin Access Control:** Global Content Delivery Network (CDN) caching content at edge locations. Origin Access Control (OAC) restricts direct public access to S3 origins so users must traverse CloudFront.

---

---

Question 685
A company’s ecommerce website has unpredictable traffic and uses AWS Lambda functions to
directly access a private Amazon RDS for PostgreSQL DB instance. The company wants to
maintain predictable database performance and ensure that the Lambda invocations do not
overload the database with too many connections.
What should a solutions architect do to meet these requirements?

A. Point the client driver at an RDS custom endpoint. Deploy the Lambda functions inside a VPC.

B. Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions inside a VPC.

C. Point the client driver at an RDS custom endpoint. Deploy the Lambda functions outside a VPC.

D. Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions outside a VPC.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions inside a VPC.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 686
A company is creating an application. The company stores data from tests of the application in
multiple on-premises locations.
The company needs to connect the on-premises locations to VPCs in an AWS Region in the
AWS Cloud. The number of accounts and VPCs will increase during the next year. The network
architecture must simplify the administration of new connections and must provide the ability to
scale.
Which solution will meet these requirements with the LEAST administrative overhead?

A. Create a peering connection between the VPCs. Create a VPN connection between the VPCs
and the on-premises locations.

B. Launch an Amazon EC2 instance. On the instance, include VPN software that uses a VPN
connection to connect all VPCs and on-premises locations.

C. Create a transit gateway. Create VPC attachments for the VPC connections. Create VPN
attachments for the on-premises connections.

D. Create an AWS Direct Connect connection between the on-premises locations and a central
VPC. Connect the central VPC to other VPCs by using peering connections.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create a transit gateway. Create VPC attachments for the VPC connections. Create VPN attachments for the on-premises connections.
>
> **Exam Concept Summary:**
> - **AWS Transit Gateway Hub-and-Spoke:** Serves as a centralized network transit hub interconnecting thousands of VPCs and on-premises networks, eliminating complex full-mesh VPC peering topologies and supporting transitive routing.
> - **AWS Direct Connect (DX):** Establishes a dedicated, private physical fiber-optic connection from an on-premises data center to AWS, bypassing the public internet for consistent network performance and lower egress costs.

---

---

Question 687
A company that uses AWS needs a solution to predict the resources needed for manufacturing
processes each month. The solution must use historical values that are currently stored in an
Amazon S3 bucket. The company has no machine learning (ML) experience and wants to use a
managed service for the training and predictions.
Which combination of steps will meet these requirements? (Choose two.)

A. Deploy an Amazon SageMaker model. Create a SageMaker endpoint for inference.

B. Use Amazon SageMaker to train a model by using the historical data in the S3 bucket.

C. Configure an AWS Lambda function with a function URL that uses Amazon SageMaker
endpoints to create predictions based on the inputs.

D. Configure an AWS Lambda function with a function URL that uses an Amazon Forecast
predictor to create a prediction based on the inputs.

E. Train an Amazon Forsecast predictor by using the historical data in the S3 bucket.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D, E`
> - **Recommended Solution:** Configure an AWS Lambda function with a function URL that uses an Amazon Forecast predictor to create a prediction based on the inputs. Train an Amazon Forsecast predictor by using the historical data in the S3 bucket.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 688
A company manages AWS accounts in AWS Organizations. AWS IAM Identity Center (AWS
Single Sign-On) and AWS Control Tower are configured for the accounts. The company wants to
manage multiple user permissions across all the accounts.
The permissions will be used by multiple IAM users and must be split between the developer and
administrator teams. Each team requires different permissions. The company wants a solution
that includes new users that are hired on both teams.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create individual users in IAM Identity Center for each account. Create separate developer and
administrator groups in IAM Identity Center. Assign the users to the appropriate groups. Create a
custom IAM policy for each group to set fine-grained permissions.

B. Create individual users in IAM Identity Center for each account. Create separate developer and
administrator groups in IAM Identity Center. Assign the users to the appropriate groups. Attach
AWS managed IAM policies to each user as needed for fine-grained permissions.

C. Create individual users in IAM Identity Center. Create new developer and administrator groups
in IAM Identity Center. Create new permission sets that include the appropriate IAM policies for
each group. Assign the new groups to the appropriate accounts. Assign the new permission sets
to the new groups. When new users are hired, add them to the appropriate group.

D. Create individual users in IAM Identity Center. Create new permission sets that include the
appropriate IAM policies for each user. Assign the users to the appropriate accounts. Grant
additional IAM permissions to the users from within specific accounts. When new users are hired,
add them to IAM Identity Center and assign them to the accounts.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Create individual users in IAM Identity Center. Create new developer and administrator groups in IAM Identity Center. Create new permission sets that include the appropriate IAM policies for each group. Assign the new groups to the appropriate accounts. Assign the new permission sets to the new groups. When new users are hired, add them to the appropriate group.
>
> **Exam Concept Summary:**
> - **AWS Organizations & Service Control Policies (SCPs):** Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions.

---

---

Question 689
A company wants to standardize its Amazon Elastic Block Store (Amazon EBS) volume
encryption strategy. The company also wants to minimize the cost and configuration effort
required to operate the volume encryption check.
Which solution will meet these requirements?

A. Write API calls to describe the EBS volumes and to confirm the EBS volumes are encrypted.
Use Amazon EventBridge to schedule an AWS Lambda function to run the API calls.

B. Write API calls to describe the EBS volumes and to confirm the EBS volumes are encrypted.
Run the API calls on an AWS Fargate task.

C. Create an AWS Identity and Access Management (IAM) policy that requires the use of tags on
EBS volumes. Use AWS Cost Explorer to display resources that are not properly tagged. Encrypt
the untagged resources manually.

D. Create an AWS Config rule for Amazon EBS to evaluate if a volume is encrypted and to flag the
volume if it is not encrypted.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Create an AWS Config rule for Amazon EBS to evaluate if a volume is encrypted and to flag the volume if it is not encrypted.
>
> **Exam Concept Summary:**
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.
> - **AWS Fargate Serverless Containers:** AWS Fargate removes the operational burden of provisioning, configuring, and scaling EC2 container hosts, paying only for the compute resources used by running tasks.

---

---

Question 690
A company regularly uploads GB-sized files to Amazon S3. After the company uploads the files,
the company uses a fleet of Amazon EC2 Spot Instances to transcode the file format. The
company needs to scale throughput when the company uploads data from the on-premises data
center to Amazon S3 and when the company downloads data from Amazon S3 to the EC2
instances.
Which solutions will meet these requirements? (Choose two.)

A. Use the S3 bucket access point instead of accessing the S3 bucket directly.

B. Upload the files into multiple S3 buckets.

C. Use S3 multipart uploads.

D. Fetch multiple byte-ranges of an object in parallel.

E. Add a random prefix to each object when uploading the files.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C, D`
> - **Recommended Solution:** Use S3 multipart uploads. Fetch multiple byte-ranges of an object in parallel.
>
> **Exam Concept Summary:**
> - **S3 Multipart Upload:** Parallelizes large file uploads, recommended for objects > 100 MB and required for objects > 5 GB. Improves throughput and failure recovery.
> - **Amazon EC2 Spot Instances:** Offers up to 90% discount on spare EC2 capacity. Ideal for stateless, fault-tolerant, batch, and flexible workloads that can withstand instance termination with a 2-minute notice.

---

---

Question 691
A solutions architect is designing a shared storage solution for a web application that is deployed
across multiple Availability Zones. The web application runs on Amazon EC2 instances that are
in an Auto Scaling group. The company plans to make frequent changes to the content. The
solution must have strong consistency in returning the new content as soon as the changes
occur.
Which solutions meet these requirements? (Choose two.)

A. Use AWS Storage Gateway Volume Gateway Internet Small Computer Systems Interface
(iSCSI) block storage that is mounted to the individual EC2 instances.

B. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system
on the individual EC2 instances.

C. Create a shared Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on
the individual EC2 instances.

D. Use AWS DataSync to perform continuous synchronization of data between EC2 hosts in the
Auto Scaling group.

E. Create an Amazon S3 bucket to store the web content. Set the metadata for the Cache-Control
header to no-cache. Use Amazon CloudFront to deliver the content.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B, E`
> - **Recommended Solution:** Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on the individual EC2 instances. Create an Amazon S3 bucket to store the web content. Set the metadata for the Cache-Control header to no-cache. Use Amazon CloudFront to deliver the content.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **AWS Storage Gateway:** Connects on-premises environments to cloud storage. S3 File Gateway exposes S3 via NFS/SMB caching; Volume Gateway provides iSCSI block storage backed by EBS snapshots.

---

---

Question 692
A company is deploying an application in three AWS Regions using an Application Load
Balancer. Amazon Route 53 will be used to distribute traffic between these Regions.
Which Route 53 configuration should a solutions architect use to provide the MOST
high-performing experience?

A. Create an A record with a latency policy.

B. Create an A record with a geolocation policy.

C. Create a CNAME record with a failover policy.

D. Create a CNAME record with a geoproximity policy.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `A`
> - **Recommended Solution:** Create an A record with a latency policy.
>
> **Exam Concept Summary:**
> - **Amazon Route 53 Intelligent Routing:** Offers advanced DNS routing policies: Geolocation routes by user location/region, Latency-based routes to the AWS Region with the lowest latency, and Failover provides active-passive health-checked disaster recovery.

---

---

Question 693
A company has a web application that includes an embedded NoSQL database. The application
runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run
in an Amazon EC2 Auto Scaling group in a single Availability Zone.
A recent increase in traffic requires the application to be highly available and for the database to
be eventually consistent.
Which solution will meet these requirements with the LEAST operational overhead?

A. Replace the ALB with a Network Load Balancer. Maintain the embedded NoSQL database with
its replication service on the EC2 instances.

B. Replace the ALB with a Network Load Balancer. Migrate the embedded NoSQL database to
Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).

C. Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Maintain
the embedded NoSQL database with its replication service on the EC2 instances.

D. Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Migrate
the embedded NoSQL database to Amazon DynamoDB by using AWS Database Migration
Service (AWS DMS).

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `D`
> - **Recommended Solution:** Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Migrate the embedded NoSQL database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Amazon DynamoDB NoSQL:** Fully managed NoSQL database providing single-digit millisecond response times at any scale with options for On-Demand capacity and automated global multi-region replication via Global Tables.

---

---

Question 694
A company is building a shopping application on AWS. The application offers a catalog that
changes once each month and needs to scale with traffic volume. The company wants the
lowest possible latency from the application. Data from each user's shopping cart needs to be
highly available. User session data must be available even if the user is disconnected and
reconnects.
What should a solutions architect do to ensure that the shopping cart data is preserved at all
times?

A. Configure an Application Load Balancer to enable the sticky sessions feature (session affinity)
for access to the catalog in Amazon Aurora.

B. Configure Amazon ElastiCache for Redis to cache catalog data from Amazon DynamoDB and
shopping cart data from the user's session.

C. Configure Amazon OpenSearch Service to cache catalog data from Amazon DynamoDB and
shopping cart data from the user's session.

D. Configure an Amazon EC2 instance with Amazon Elastic Block Store (Amazon EBS) storage
for the catalog and shopping cart. Configure automated snapshots.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Configure Amazon ElastiCache for Redis to cache catalog data from Amazon DynamoDB and shopping cart data from the user's session.
>
> **Exam Concept Summary:**
> - **Amazon Aurora High Availability & Global DB:** Replicates 6 copies of data across 3 Availability Zones natively. Aurora Global Database provides dedicated multi-region relational clustering with storage-level replication latency under 1 second.
> - **Amazon DynamoDB NoSQL:** Fully managed NoSQL database providing single-digit millisecond response times at any scale with options for On-Demand capacity and automated global multi-region replication via Global Tables.

---

---

Question 695
A company is building a microservices-based application that will be deployed on Amazon
Elastic Kubernetes Service (Amazon EKS). The microservices will interact with each other. The
company wants to ensure that the application is observable to identify performance issues in the
future.
Which solution will meet these requirements?

A. Configure the application to use Amazon ElastiCache to reduce the number of requests that are
sent to the microservices.

B. Configure Amazon CloudWatch Container Insights to collect metrics from the EKS clusters.
Configure AWS X-Ray to trace the requests between the microservices.

C. Configure AWS CloudTrail to review the API calls. Build an Amazon QuickSight dashboard to
observe the microservice interactions.

D. Use AWS Trusted Advisor to understand the performance of the application.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Configure Amazon CloudWatch Container Insights to collect metrics from the EKS clusters. Configure AWS X-Ray to trace the requests between the microservices.
>
> **Exam Concept Summary:**
> - **Amazon ElastiCache In-Memory Caching:** ElastiCache Redis delivers high-performance in-memory caching with data persistence, replication, and multi-AZ failover; Memcached provides simple multi-threaded object caching.

---

---

Question 696
A company needs to provide customers with secure access to its data. The company processes
customer data and stores the results in an Amazon S3 bucket.
All the data is subject to strong regulations and security requirements. The data must be
encrypted at rest. Each customer must be able to access only their data from their AWS account.
Company employees must not be able to access the data.
Which solution will meet these requirements?

A. Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data
client-side. In the private certificate policy, deny access to the certificate for all principals except an
IAM role that the customer provides.

B. Provision a separate AWS Key Management Service (AWS KMS) key for each customer.
Encrypt the data server-side. In the S3 bucket policy, deny decryption of data for all principals
except an IAM role that the customer provides.

C. Provision a separate AWS Key Management Service (AWS KMS) key for each customer.
Encrypt the data server-side. In each KMS key policy, deny decryption of data for all principals
except an IAM role that the customer provides.

D. Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data
client-side. In the public certificate policy, deny access to the certificate for all principals except an
IAM role that the customer provides.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `C`
> - **Recommended Solution:** Provision a separate AWS Key Management Service (AWS KMS) key for each customer. Encrypt the data server-side. In each KMS key policy, deny decryption of data for all principals except an IAM role that the customer provides.
>
> **Exam Concept Summary:**
> - **AWS Key Management Service (KMS):** Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail.

---

---

Question 697
A solutions architect creates a VPC that includes two public subnets and two private subnets. A
corporate security mandate requires the solutions architect to launch all Amazon EC2 instances
in a private subnet. However, when the solutions architect launches an EC2 instance that runs a
web server on ports 80 and 443 in a private subnet, no external internet traffic can connect to the
server.
What should the solutions architect do to resolve this issue?

A. Attach the EC2 instance to an Auto Scaling group in a private subnet. Ensure that the DNS
record for the website resolves to the Auto Scaling group identifier.

B. Provision an internet-facing Application Load Balancer (ALB) in a public subnet. Add the EC2
instance to the target group that is associated with the ALEnsure that the DNS record for the
website resolves to the ALB.

C. Launch a NAT gateway in a private subnet. Update the route table for the private subnets to
add a default route to the NAT gateway. Attach a public Elastic IP address to the NAT gateway.

D. Ensure that the security group that is attached to the EC2 instance allows HTTP traffic on port
80 and HTTPS traffic on port 443. Ensure that the DNS record for the website resolves to the
public IP address of the EC2 instance.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Provision an internet-facing Application Load Balancer (ALB) in a public subnet. Add the EC2 instance to the target group that is associated with the ALEnsure that the DNS record for the website resolves to the ALB.
>
> **Exam Concept Summary:**
> - **EC2 Auto Scaling & Target Tracking:** Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning.
> - **Application Load Balancer (ALB Layer 7):** Distributes HTTP/HTTPS traffic using Layer 7 advanced routing (URL host/path, query parameters, HTTP headers), integrated with AWS WAF, SSL offloading, and container target groups.

---

---

Question 698
A company is deploying a new application to Amazon Elastic Kubernetes Service (Amazon EKS)
with an AWS Fargate cluster. The application needs a storage solution for data persistence. The
solution must be highly available and fault tolerant. The solution also must be shared between
multiple application containers.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create Amazon Elastic Block Store (Amazon EBS) volumes in the same Availability Zones
where EKS worker nodes are placed. Register the volumes in a StorageClass object on an EKS
cluster. Use EBS Multi-Attach to share the data between containers.

B. Create an Amazon Elastic File System (Amazon EFS) file system. Register the file system in a
StorageClass object on an EKS cluster. Use the same file system for all containers.

C. Create an Amazon Elastic Block Store (Amazon EBS) volume. Register the volume in a
StorageClass object on an EKS cluster. Use the same volume for all containers.

D. Create Amazon Elastic File System (Amazon EFS) file systems in the same Availability Zones
where EKS worker nodes are placed. Register the file systems in a StorageClass object on an
EKS cluster. Create an AWS Lambda function to synchronize the data between file systems.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Create an Amazon Elastic File System (Amazon EFS) file system. Register the file system in a StorageClass object on an EKS cluster. Use the same file system for all containers.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **AWS Lambda Serverless Execution:** Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes.

---

---

Question 699
A company has an application that uses Docker containers in its local data center. The
application runs on a container host that stores persistent data in a volume on the host. The
container instances use the stored persistent data.
The company wants to move the application to a fully managed service because the company
does not want to manage any servers or storage infrastructure.
Which solution will meet these requirements?

A. Use Amazon Elastic Kubernetes Service (Amazon EKS) with self-managed nodes. Create an
Amazon Elastic Block Store (Amazon EBS) volume attached to an Amazon EC2 instance. Use the
EBS volume as a persistent volume mounted in the containers.

B. Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type.
Create an Amazon Elastic File System (Amazon EFS) volume. Add the EFS volume as a
persistent storage volume mounted in the containers.

C. Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type.
Create an Amazon S3 bucket. Map the S3 bucket as a persistent storage volume mounted in the
containers.

D. Use Amazon Elastic Container Service (Amazon ECS) with an Amazon EC2 launch type.
Create an Amazon Elastic File System (Amazon EFS) volume. Add the EFS volume as a
persistent storage volume mounted in the containers.

> [!NOTE]
> ### 💡 Key AWS Concept & Architectural Explanation
> - **Correct Answer:** `B`
> - **Recommended Solution:** Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type. Create an Amazon Elastic File System (Amazon EFS) volume. Add the EFS volume as a persistent storage volume mounted in the containers.
>
> **Exam Concept Summary:**
> - **Amazon EFS Shared File Storage:** Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones.
> - **AWS Fargate Serverless Containers:** AWS Fargate removes the operational burden of provisioning, configuring, and scaling EC2 container hosts, paying only for the compute resources used by running tasks.

---
