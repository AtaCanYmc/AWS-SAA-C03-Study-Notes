# AWS SAA-C03 Comprehensive Question Bank (1019 Questions with Answers) - Section 11

> **Question Range:** 1001 - 1020 of 1020

[← Module Index](../README.md) | [📖 Consolidated Notes](../notes.md)

---

Question 1000
A company currently stores 5 TB of data in on-premises block storage systems. The company's
current storage solution provides limited space for additional data. The company runs
applications on premises that must be able to retrieve frequently accessed data with low latency.
The company requires a cloud-based storage solution.
Which solution will meet these requirements with the MOST operational efficiency?

A. Use Amazon S3 File Gateway. Integrate S3 File Gateway with the on-premises applications to
store and directly retrieve files by using the SMB file system.

B. Use an AWS Storage Gateway Volume Gateway with cached volumes as iSCSI targets.

C. Use an AWS Storage Gateway Volume Gateway with stored volumes as iSCSI targets.

D. Use an AWS Storage Gateway Tape Gateway. Integrate Tape Gateway with the on-premises
applications to store virtual tapes in Amazon S3.

Correct Answer: B

---

Question 1001
A company operates a food delivery service. Because of recent growth, the company's order
processing system is experiencing scaling problems during peak traffic hours. The current
architecture includes Amazon EC2 instances in an Auto Scaling group that collect orders from an
application. A second group of EC2 instances in an Auto Scaling group fulfills the orders.
The order collection process occurs quickly, but the order fulfillment process can take longer.
Data must not be lost because of a scaling event.
A solutions architect must ensure that the order collection process and the order fulfillment
process can both scale adequately during peak traffic hours.
Which solution will meet these requirements?

A. Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto
Scaling groups. Configure each Auto Scaling group's minimum capacity to meet its peak workload
value.

B. Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto
Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service
(Amazon SNS) topic to create additional Auto Scaling groups on demand.

C. Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for
order collection. Use the second SQS queue for order fulfillment. Configure the EC2 instances to
poll their respective queues. Scale the Auto Scaling groups based on notifications that the queues
send.

D. Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for
order collection. Use the second SQS queue for order fulfillment. Configure the EC2 instances to
poll their respective queues. Scale the Auto Scaling groups based on the number of messages in
each queue.

Correct Answer: D

---

Question 1002
An online gaming company is transitioning user data storage to Amazon DynamoDB to support
the company's growing user base. The current architecture includes DynamoDB tables that
contain user profiles, achievements, and in-game transactions.
The company needs to design a robust, continuously available, and resilient DynamoDB
architecture to maintain a seamless gaming experience for users.
Which solution will meet these requirements MOST cost-effectively?

A. Create DynamoDB tables in a single AWS Region. Use on-demand capacity mode. Use global
tables to replicate data across multiple Regions.

B. Use DynamoDB Accelerator (DAX) to cache frequently accessed data. Deploy tables in a
single AWS Region and enable auto scaling. Configure Cross-Region Replication manually to
additional Regions.

C. Create DynamoDB tables in multiple AWS Regions. Use on-demand capacity mode. Use
DynamoDB Streams for Cross-Region Replication between Regions.

D. Use DynamoDB global tables for automatic multi-Region replication. Deploy tables in multiple
AWS Regions. Use provisioned capacity mode. Enable auto scaling.

Correct Answer: D

---

Question 1003
A company runs its media rendering application on premises. The company wants to reduce
storage costs and has moved all data to Amazon S3. The on-premises rendering application
needs low-latency access to storage.
The company needs to design a storage solution for the application. The storage solution must
maintain the desired application performance.
Which storage solution will meet these requirements in the MOST cost-effective way?

A. Use Mountpoint for Amazon S3 to access the data in Amazon S3 for the on-premises
application.

B. Configure an Amazon S3 File Gateway to provide storage for the on-premises application.

C. Copy the data from Amazon S3 to Amazon FSx for Windows File Server. Configure an Amazon
FSx File Gateway to provide storage for the on-premises application.

D. Configure an on-premises file server. Use the Amazon S3 API to connect to S3 storage.
Configure the application to access the storage from the on-premises file server.

Correct Answer: B

---

Question 1004
A company hosts its enterprise resource planning (ERP) system in the us-east-1 Region. The
system runs on Amazon EC2 instances. Customers use a public API that is hosted on the EC2
instances to exchange information with the ERP system. International customers report slow API
response times from their data centers.
Which solution will improve response times for the international customers MOST
cost-effectively?

A. Create an AWS Direct Connect connection that has a public virtual interface (VIF) to provide
connectivity from each customer's data center to us-east-1. Route customer API requests by using
a Direct Connect gateway to the ERP system API.

B. Set up an Amazon CloudFront distribution in front of the API. Configure the CachingOptimized
managed cache policy to provide improved cache efficiency.

C. Set up AWS Global Accelerator. Configure listeners for the necessary ports. Configure endpoint
groups for the appropriate Regions to distribute traffic. Create an endpoint in the group for the API.

D. Use AWS Site-to-Site VPN to establish dedicated VPN tunnels between Regions and customer
networks. Route traffic to the API over the VPN connections.

Correct Answer: C

---

Question 1005
A company tracks customer satisfaction by using surveys that the company hosts on its website.
The surveys sometimes reach thousands of customers every hour. Survey results are currently
sent in email messages to the company so company employees can manually review results and
assess customer sentiment.
The company wants to automate the customer survey process. Survey results must be available
for the previous 12 months.
Which solution will meet these requirements in the MOST scalable way?

A. Send the survey results data to an Amazon API Gateway endpoint that is connected to an
Amazon Simple Queue Service (Amazon SQS) queue. Create an AWS Lambda function to poll
the SQS queue, call Amazon Comprehend for sentiment analysis, and save the results to an
Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.

B. Send the survey results data to an API that is running on an Amazon EC2 instance. Configure
the API to store the survey results as a new record in an Amazon DynamoDB table, call Amazon
Comprehend for sentiment analysis, and save the results in a second DynamoDB table. Set the
TTL for all records to 365 days in the future.

C. Write the survey results data to an Amazon S3 bucket. Use S3 Event Notifications to invoke an
AWS Lambda function to read the data and call Amazon Rekognition for sentiment analysis. Store
the sentiment analysis results in a second S3 bucket. Use S3 lifecycle policies on each bucket to
expire objects after 365 days.

D. Send the survey results data to an Amazon API Gateway endpoint that is connected to an
Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke an
AWS Lambda function that calls Amazon Lex for sentiment analysis and saves the results to an
Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.

Correct Answer: A

---

Question 1006
A company uses AWS Systems Manager for routine management and patching of Amazon EC2
instances. The EC2 instances are in an IP address type target group behind an Application Load
Balancer (ALB).
New security protocols require the company to remove EC2 instances from service during a
patch. When the company attempts to follow the security protocol during the next patch, the
company receives errors during the patching window.
Which combination of solutions will resolve the errors? (Choose two.)

A. Change the target type of the target group from IP address type to instance type.

B. Continue to use the existing Systems Manager document without changes because it is already
optimized to handle instances that are in an IP address type target group behind an ALB.

C. Implement the AWSEC2-PatchLoadBalanacerInstance Systems Manager Automation
document to manage the patching process.

D. Use Systems Manager Maintenance Windows to automatically remove the instances from
service to patch the instances.

E. Configure Systems Manager State Manager to remove the instances from service and manage
the patching schedule. Use ALB health checks to re-route traffic.

Correct Answer: C, D

---

Question 1007
A medical company wants to perform transformations on a large amount of clinical trial data that
comes from several customers. The company must extract the data from a relational database
that contains the customer data. Then the company will transform the data by using a series of
complex rules. The company will load the data to Amazon S3 when the transformations are
complete.
All data must be encrypted where it is processed before the company stores the data in Amazon
S3. All data must be encrypted by using customer-specific keys.
Which solution will meet these requirements with the LEAST amount of operational effort?

A. Create one AWS Glue job for each customer. Attach a security configuration to each job that
uses server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data.

B. Create one Amazon EMR cluster for each customer. Attach a security configuration to each
cluster that uses client-side encryption with a custom client-side root key (CSE-Custom) to encrypt
the data.

C. Create one AWS Glue job for each customer. Attach a security configuration to each job that
uses client-side encryption with AWS KMS managed keys (CSE-KMS) to encrypt the data.

D. Create one Amazon EMR cluster for each customer. Attach a security configuration to each
cluster that uses server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data.

Correct Answer: C

---

Question 1008
A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance.
The analytics application is highly resilient and is designed to run in stateless mode.
The company notices that the application is showing signs of performance degradation during
busy times and is presenting 5xx errors. The company needs to make the application scale
seamlessly.
Which solution will meet these requirements MOST cost-effectively?

A. Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a
second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load across
the two EC2 instances.

B. Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a
second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load
across the two EC2 instances.

C. Create an AWS Lambda function to stop the EC2 instance and change the instance type.
Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization is more
than 75%.

D. Create an Amazon Machine Image (AMI) of the web application. Apply the AMI to a launch
template. Create an Auto Scaling group that includes the launch template. Configure the launch
template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.

Correct Answer: D

---

Question 1009
A company runs an environment where data is stored in an Amazon S3 bucket. The objects are
accessed frequently throughout the day. The company has strict da ta encryption requirements
for data that is stored in the S3 bucket. The company currently uses AWS Key Management
Service (AWS KMS) for encryption.
The company wants to optimize costs associated with encrypting S3 objects without making
additional calls to AWS KMS.
Which solution will meet these requirements?

A. Use server-side encryption with Amazon S3 managed keys (SSE-S3).

B. Use an S3 Bucket Key for server-side encryption with AWS KMS keys (SSE-KMS) on the new
objects.

C. Use client-side encryption with AWS KMS customer managed keys.

D. Use server-side encryption with customer-provided keys (SSE-C) stored in AWS KMS.

Correct Answer: B

---

Question 1010
A company runs multiple workloads on virtual machines (VMs) in an on-premises data center.
The company is expanding rapidly. The on-premises data center is not able to scale fast enough
to meet business needs. The company wants to migrate the workloads to AWS.
The migration is time sensitive. The company wants to use a lift-and-shift strategy for non-critical
workloads.
Which combination of steps will meet these requirements? (Choose three.)

A. Use the AWS Schema Conversion Tool (AWS SCT) to collect data about the VMs.

B. Use AWS Application Migration Service. Install the AWS Replication Agent on the VMs.

C. Complete the initial replication of the VMs. Launch test instances to perform acceptance tests
on the VMs.

D. Stop all operations on the VMs. Launch a cutover instance.

E. Use AWS App2Container (A2C) to collect data about the VMs.

F. Use AWS Database Migration Service (AWS DMS) to migrate the VMs.

Correct Answer: B, C, D

---

Question 1011
A company hosts an application in a private subnet. The company has already integrated the
application with Amazon Cognito. The company uses an Amazon Cognito user pool to
authenticate users.
The company needs to modify the application so the application can securely store user
documents in an Amazon S3 bucket.
Which combination of steps will securely integrate Amazon S3 with the application? (Choose
two.)

A. Create an Amazon Cognito identity pool to generate secure Amazon S3 access tokens for
users when they successfully log in.

B. Use the existing Amazon Cognito user pool to generate Amazon S3 access tokens for users
when they successfully log in.

C. Create an Amazon S3 VPC endpoint in the same VPC where the company hosts the
application.

D. Create a NAT gateway in the VPC where the company hosts the application. Assign a policy to
the S3 bucket to deny any request that is not initiated from Amazon Cognito.

E. Attach a policy to the S3 bucket that allows access only from the users' IP addresses.

Correct Answer: A, C

---

Question 1012
A company has a three-tier web application that processes orders from customers. The web tier
consists of Amazon EC2 instances behind an Application Load Balancer. The processing tier
consists of EC2 instances. The company decoupled the web tier and processing tier by using
Amazon Simple Queue Service (Amazon SQS). The storage layer uses Amazon DynamoDB.
At peak times, some users report order processing delays and halls. The company has noticed
that during these delays, the EC2 instances are running at 100% CPU usage, and the SQS
queue fills up. The peak times are variable and unpredictable.
The company needs to improve the performance of the application.
Which solution will meet these requirements?

A. Use scheduled scaling for Amazon EC2 Auto Scaling to scale out the processing tier instances
for the duration of peak usage times. Use the CPU Utilization metric to determine when to scale.

B. Use Amazon ElastiCache for Redis in front of the DynamoDB backend tier. Use target
utilization as a metric to determine when to scale.

C. Add an Amazon CloudFront distribution to cache the responses for the web tier. Use HTTP
latency as a metric to determine when to scale.

D. Use an Amazon EC2 Auto Scaling target tracking policy to scale out the processing tier
instances. Use the ApproximateNumberOfMessages attribute to determine when to scale.

Correct Answer: D

---

Question 1013
A company's production environment consists of Amazon EC2 On-Demand Instances that run
constantly between Monday and Saturday. The instances must run for only 12 hours on Sunday
and cannot tolerate interruptions. The company wants to cost-optimize the production
environment.
Which solution will meet these requirements MOST cost-effectively?

A. Purchase Scheduled Reserved Instances for the EC2 instances that run for only 12 hours on
Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly
between Monday and Saturday.

B. Purchase Convertible Reserved Instances for the EC2 instances that run for only 12 hours on
Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly
between Monday and Saturday.

C. Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase
Standard Reserved Instances for the EC2 instances that run constantly between Monday and
Saturday.

D. Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase
Convertible Reserved Instances for the EC2 instances that run constantly between Monday and
Saturday.

Correct Answer: A

---

Question 1014
A digital image processing company wants to migrate its on-premises monolithic application to
the AWS Cloud. The company processes thousands of images and generates large files as part
of the processing workflow.
The company needs a solution to manage the growing number of image processing jobs. The
solution must also reduce the manual tasks in the image processing workflow. The company
does not want to manage the underlying infrastructure of the solution.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 Spot Instances to
process the images. Configure Amazon Simple Queue Service (Amazon SQS) to orchestrate the
workflow. Store the processed files in Amazon Elastic File System (Amazon EFS).

B. Use AWS Batch jobs to process the images. Use AWS Step Functions to orchestrate the
workflow. Store the processed files in an Amazon S3 bucket.

C. Use AWS Lambda functions and Amazon EC2 Spot Instances to process the images. Store the
processed files in Amazon FSx.

D. Deploy a group of Amazon EC2 instances to process the images. Use AWS Step Functions to
orchestrate the workflow. Store the processed files in an Amazon Elastic Block Store (Amazon
EBS) volume.

Correct Answer: B

---

Question 1015
A company's image-hosting website gives users around the world the ability to up load, view,
and download images from their mobile devices. The company currently hosts the static website
in an Amazon S3 bucket.
Because of the website's growing popularity, the website's performance has decreased. Users
have reported latency issues when they upload and download images.
The company must improve the performance of the website.
Which solution will meet these requirements with the LEAST implementation effort?

A. Configure an Amazon CloudFront distribution for the S3 bucket to improve the download
performance. Enable S3 Transfer Acceleration to improve the upload performance.

B. Configure Amazon EC2 instances of the right sizes in multiple AWS Regions. Migrate the
application to the EC2 instances. Use an Application Load Balancer to distribute the website traffic
equally among the EC2 instances. Configure AWS Global Accelerator to address global demand
with low latency.

C. Configure an Amazon CloudFront distribution that uses the S3 bucket as an origin to improve
the download performance. Configure the application to use CloudFront to upload images to
improve the upload performance. Create S3 buckets in multiple AWS Regions. Configure
replication rules for the buckets to replicate users' data based on the users' location. Redirect
downloads to the S3 bucket that is closest to each user's location.

D. Configure AWS Global Accelerator for the S3 bucket to improve network performance. Create
an endpoint for the application to use Global Accelerator instead of the S3 bucket.

Correct Answer: A

---

Question 1016
A company runs an application in a private subnet behind an Application Load Balancer (ALB) in
a VPC. The VPC has a NAT gateway and an internet gateway. The application calls the Amazon
S3 API to store objects.
According to the company's security policy, traffic from the application must not travel across the
internet.
Which solution will meet these requirements MOST cost-effectively?

A. Configure an S3 interface endpoint. Create a security group that allows outbound traffic to
Amazon S3.

B. Configure an S3 gateway endpoint. Update the VPC route table to use the endpoint.

C. Configure an S3 bucket policy to allow traffic from the Elastic IP address that is assigned to the
NAT gateway.

D. Create a second NAT gateway in the same subnet where the legacy application is deployed.
Update the VPC route table to use the second NAT gateway.

Correct Answer: B

---

Question 1017
A company has an application that runs on an Amazon Elastic Kubernetes Service (Amazon
EKS) cluster on Amazon EC2 instances. The application has a UI that uses Amazon DynamoDB
and data services that use Amazon S3 as part of the application deployment.
The company must ensure that the EKS Pods for the UI can access only Amazon DynamoDB
and that the EKS Pods for the data services can access only Amazon S3. The company uses
AWS Identity and Access Management (IAM).
Which solution meals these requirements?

A. Create separate IAM policies for Amazon S3 and DynamoDB access with the required
permissions. Attach both IAM policies to the EC2 instance profile. Use role-based access control
(RBAC) to control access to Amazon S3 or DynamoDB for the respective EKS Pods.

B. Create separate IAM policies for Amazon S3 and DynamoDB access with the required
permissions. Attach the Amazon S3 IAM policy directly to the EKS Pods for the data services and
the DynamoDB policy to the EKS Pods for the UI.

C. Create separate Kubernetes service accounts for the UI and data services to assume an IAM
role. Attach the AmazonS3FullAccess policy to the data services account and the
AmazonDynamoDBFullAccess policy to the UI service account.

D. Create separate Kubernetes service accounts for the UI and data services to assume an IAM
role. Use IAM Role for Service Accounts (IRSA) to provide access to the EKS Pods for the UI to
Amazon S3 and the EKS Pods for the data services to DynamoDB.

Correct Answer: C

---

Question 1018
A company needs to give a globally distributed development team secure access to the
company's AWS resources in a way that complies with security policies.
The company currently uses an on-premises Active Directory for internal authentication. The
company uses AWS Organizations to manage multiple AWS accounts that support multiple
projects.
The company needs a solution to integrate with the existing infrastructure to provide centralized
identity management and access control.
Which solution will meet these requirements with the LEAST operational overhead?

A. Set up AWS Directory Service to create an AWS managed Microsoft Active Directory on AWS.
Establish a trust relationship with the on-premises Active Directory. Use IAM rotes that are
assigned to Active Directory groups to access AWS resources within the company's AWS
accounts.

B. Create an IAM user for each developer. Manually manage permissions for each IAM user
based on each user's involvement with each project. Enforce multi-factor authentication (MFA) as
an additional layer of security.

C. Use AD Connector in AWS Directory Service to connect to the on-premises Active Directory.
Integrate AD Connector with AWS IAM Identity Center. Configure permissions sets to give each
AD group access to specific AWS accounts and resources.

D. Use Amazon Cognito to deploy an identity federation solution. Integrate the identity federation
solution with the on-premises Active Directory. Use Amazon Cognito to provide access tokens for
developers to access AWS accounts and resources.

Correct Answer: C

---

Question 1019
A company is developing an application in the AWS Cloud. The application's HTTP API contains
critical information that is published in Amazon API Gateway. The critical information must be
accessible from only a limited set of trusted IP addresses that belong to the company's internal
network.
Which solution will meet these requirements?

A. Set up an API Gateway private integration to restrict access to a predefined set of IP
addresses.

B. Create a resource policy for the API that denies access to any IP address that is not specifically
allowed.

C. Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the
traffic from specific IP addresses.

D. Modify the security group that is attached to API Gateway to allow inbound traffic from only the
trusted IP addresses.

Correct Answer: B


Answer Key

1. A   256. B, D   511. C   766. D
2. C   257. A   512. A   767. C
3. A   258. D   513. A   768. A
4. A   259. A   514. B   769. B
5. C   260. D   515. B, C, E   770. C
6. B   261. A, C   516. B   771. C
7. D   262. A   517. A   772. A, B
8. B   263. A, D   518. A   773. D
9. B   264. D   519. B   774. B
10. B   265. C   520. B   775. B
11. A   266. A   521. C   776. C
12. A   267. D   522. B, C   777. A, C
13. A   268. A   523. A   778. B
14. C   269. C   524. C   779. B
15. C   270. A   525. A   780. A
16. B   271. C   526. D   781. A
17. A   272. B   527. D   782. B
18. A, B   273. B   528. D   783. D
19. D   274. B   529. B   784. C
20. D   275. C   530. C   785. C
21. D   276. A, D   531. A   786. B
22. B   277. D   532. A, D, F   787. A
23. B   278. B, E   533. A   788. C
24. B   279. A   534. C   789. A
25. D   280. B   535. B   790. B, E
26. A   281. A   536. D   791. D
27. A   282. B   537. A   792. A
28. B   283. D   538. A   793. C
29. A   284. B   539. C   794. B
30. C   285. B   540. D   795. B, D
31. A   286. C   541. A, C, E   796. B
32. B   287. B   542. B   797. B
33. C   288. C   543. A, D   798. B
34. B   289. B   544. A   799. A
35. D   290. C   545. B   800. B
36. B   291. A, B   546. D   801. D
37. B   292. A, B   547. A   802. D
38. C   293. D   548. B   803. A
39. A   294. B   549. B   804. C
40. A   295. B   550. B, D   805. C
41. B   296. D   551. A   806. B
42. C   297. B   552. B   807. D
43. B   298. C   553. A   808. A
44. A, B   299. B   554. C   809. A
45. B, E   300. C   555. A   810. C
46. B   301. C   556. B   811. B
47. D   302. A   557. B   812. C
48. D   303. D   558. C   813. A
49. B   304. A   559. B, E   814. B


50. D   305. C   560. A   815. D
51. B, D   306. A   561. A   816. B
52. C   307. D   562. A, B   817. C
53. C   308. B, D   563. B   818. A
54. C   309. A   564. B   819. B
55. C   310. B   565. C   820. C
56. C   311. C   566. B   821. C
57. B   312. B   567. A   822. A
58. C   313. C   568. A   823. C
59. D   314. B   569. A   824. C
60. C   315. D   570. B   825. B
61. C   316. C   571. A   826. B
62. D   317. A   572. C   827. D
63. A   318. A, D   573. D   828. D
64. D   319. A   574. A   829. A
65. C   320. A   575. C   830. B
66. C   321. D   576. D   831. D
67. D   322. C   577. C   832. C
68. A   323. B   578. A   833. C
69. B   324. D   579. A   834. C
70. C   325. A   580. D   835. C
71. B   326. A, B   581. B   836. B
72. D   327. A   582. A   837. C
73. C, D   328. D   583. C   838. D
74. A, C   329. D   584. A   839. C
75. A   330. A   585. D   840. B
76. B   331. A   586. B   841. B
77. C   332. B   587. C   842. D
78. B   333. C   588. D   843. C
79. A   334. A   589. B   844. D
80. B   335. B   590. A   845. C
81. C   336. A   591. B   846. B
82. B   337. A   592. D   847. A
83. C   338. D   593. A   848. B
84. B   339. C   594. C   849. B
85. A   340. A   595. C   850. B
86. A   341. D   596. A   851. C
87. D   342. C   597. B   852. B
88. A   343. C   598. A, C, F   853. A
89. A   344. A   599. A, C, F   854. C
90. B   345. A   600. A   855. C
91. A   346. D   601. B   856. D
92. A, C   347. A   602. C   857. A
93. B   348. B   603. B   858. C
94. C   349. B   604. D   859. A, C
95. D   350. A, C   605. D   860. A
96. C   351. D   606. B   861. A
97. D   352. B   607. C   862. D
98. C   353. B   608. A   863. B
99. D   354. B   609. B   864. C
100. C   355. D   610. B   865. A, E


101. A   356. B   611. A   866. A
102. B, E   357. A, D   612. D   867. D
103. A   358. C   613. B   868. B
104. A, C   359. C   614. D   869. A
105. D   360. B   615. D   870. C
106. D   361. C   616. C   871. A
107. B   362. B, E   617. B, E   872. D
108. D   363. B   618. C   873. B
109. D   364. B, D   619. C   874. A
110. C, D   365. C   620. C   875. D
111. D   366. D   621. A   876. B, D
112. A   367. A   622. A, D   877. B
113. C   368. A   623. B   878. D
114. C   369. A   624. D   879. A, C
115. C   370. C   625. C   880. B
116. A, D   371. C, D   626. B   881. A, E
117. A   372. B   627. A   882. C
118. D   373. D   628. C   883. B
119. B   374. D   629. D   884. A, C, E
120. B   375. A   630. C   885. C, D
121. A   376. A   631. B   886. B, C
122. B   377. B   632. C   887. A
123. D   378. B   633. C   888. A
124. A   379. B   634. C   889. B
125. A, D   380. D   635. C   890. A
126. B   381. B   636. C   891. D
127. D   382. A   637. B, C   892. C
128. B   383. A   638. A   893. A
129. A, E   384. C   639. A   894. A
130. B   385. C   640. B, E   895. D
131. D   386. B   641. B   896. B
132. A   387. D, E   642. A   897. A
133. C   388. D   643. A   898. C
134. A   389. A   644. A, E   899. D
135. D   390. A, D   645. B   900. A, B
136. A, C   391. C   646. C   901. B
137. B   392. A   647. A   902. A
138. B   393. C   648. B   903. A
139. D   394. C   649. C   904. A
140. A, C   395. C   650. A   905. A, D
141. A   396. A   651. C   906. C
142. C   397. C   652. B   907. C
143. D   398. C   653. B   908. A
144. B   399. B   654. D   909. D
145. D   400. C   655. C, E   910. B
146. B   401. A   656. D   911. C
147. B   402. A   657. B   912. D
148. D   403. D   658. A, E   913. C
149. A   404. D   659. C   914. B
150. A   405. D, E   660. D   915. C
151. A, C   406. C, D   661. B   916. D


152. D   407. D   662. D   917. D
153. D   408. B   663. A   918. A
154. B   409. C   664. A   919. A
155. C   410. B   665. B   920. D
156. A, E   411. C   666. B, E   921. A
157. D, E   412. D   667. C   922. B
158. A   413. B   668. D   923. B, E
159. A, C   414. B   669. C   924. C
160. C   415. A   670. B   925. B
161. B   416. B, D   671. B   926. B
162. A   417. C   672. B   927. D
163. A   418. B   673. B   928. B
164. C   419. C, E   674. B, D   929. A, C, F
165. D   420. D   675. D   930. A
166. D   421. B   676. B   931. A, C
167. C   422. D   677. B   932. C
168. D   423. A, B   678. B   933. A
169. C   424. B   679. A, C, E   934. A
170. C   425. C   680. A   935. B, C
171. B   426. A   681. A   936. B, C
172. C   427. B   682. A   937. C
173. B   428. B   683. A, C   938. D
174. B   429. D   684. B   939. B
175. B   430. B, C   685. B   940. D
176. A   431. B   686. C   941. D, E
177. B   432. B   687. D, E   942. C
178. A   433. C   688. C   943. C
179. A   434. A   689. D   944. B
180. B, C   435. A   690. C, D   945. C
181. A   436. A   691. B, E   946. A
182. B   437. B   692. A   947. B
183. A   438. D   693. D   948. B
184. A   439. A   694. B   949. D
185. B   440. A, C   695. B   950. C
186. B   441. C   696. C   951. C
187. A, D   442. D   697. B   952. C
188. A   443. A   698. B   953. A
189. B, D   444. B   699. B   954. D
190. B   445. A   700. A, C   955. A
191. A   446. D   701. C   956. D
192. B, E   447. A   702. B   957. B, D
193. A   448. C   703. B   958. A
194. A   449. B   704. C   959. D
195. C   450. C, E, F   705. A, D   960. A
196. D   451. B, C, F   706. B   961. C
197. B, E   452. B   707. B   962. B
198. D   453. D   708. C   963. C
199. B   454. C   709. B, E   964. D
200. D   455. B, D, F   710. A   965. A
201. B   456. C   711. C   966. B
202. B   457. C   712. A   967. A


203. D   458. B, C   713. B   968. D
204. C   459. A   714. B   969. A
205. C   460. C   715. A   970. D
206. C   461. B   716. A   971. D
207. D   462. B   717. D   972. C
208. A   463. C   718. C   973. A, C, E
209. A   464. A   719. B   974. A, D
210. D   465. C   720. C   975. A
211. D   466. A   721. D   976. B
212. A   467. B   722. A   977. A
213. A   468. B   723. C   978. D
214. B   469. C   724. B   979. B
215. A   470. D   725. B   980. C
216. B   471. C   726. D   981. B
217. A   472. A   727. C   982. B
218. A, E   473. A   728. B   983. D
219. D   474. C   729. B   984. A
220. B   475. C   730. A   985. B
221. D   476. C   731. C   986. D
222. A   477. D   732. B   987. A, B
223. A, D   478. B   733. B   988. A, D
224. C, E   479. B   734. D   989. C
225. B   480. B   735. A   990. C
226. A, E   481. B   736. B   991. C
227. B   482. B   737. C, E   992. B
228. C   483. C   738. B   993. C
229. A   484. A, E   739. A   994. A
230. C   485. A   740. A   995. B
231. B   486. A   741. A   996. C
232. C   487. C   742. A   997. C
233. A, B   488. C   743. D   998. A
234. C   489. C   744. A   999. B
235. C   490. B   745. B   1000. B
236. D   491. A   746. A, C   1001. D
237. A   492. B   747. C   1002. D
238. C   493. D, E, F   748. A   1003. B
239. B   494. D   749. B   1004. C
240. D   495. C   750. C   1005. A
241. C   496. B, D   751. C   1006. C, D
242. C   497. C   752. A, D   1007. C
243. A   498. A   753. A   1008. D
244. C   499. D   754. B   1009. B
245. D   500. A, D   755. B   1010. B, C, D
246. D   501. C   756. A   1011. A, C
247. C, E   502. C, E   757. C   1012. D
248. D   503. A   758. A   1013. A
249. D   504. C   759. B   1014. B
250. D   505. C   760. C   1015. A
251. B   506. C   761. D   1016. B
252. A   507. A   762. C   1017. C
253. C   508. B, D   763. B   1018. C


254. B   509. B   764. B   1019. B
255. D   510. C   765. C
