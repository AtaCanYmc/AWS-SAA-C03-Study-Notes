# AWS SAA-C03 Comprehensive Question Bank (1019 Questions with Answers) - Section 10

> **Question Range:** 901 - 1000 of 1020

[← Module Index](../README.md) | [📖 Consolidated Notes](../notes.md)

---

Question 900
A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its
on-premises application in a hybrid environment. The application currently runs on containers on
premises.
The company needs a single container solution that can scale in an on-premises, hybrid, or
cloud environment. The company must run new application containers in the AWS Cloud and
must use a load balancer for HTTP traffic.
Which combination of actions will meet these requirements? (Choose two.)

A. Set up an ECS cluster that uses the AWS Fargate launch type for the cloud application
containers. Use an Amazon ECS Anywhere external launch type for the on-premises application
containers.

B. Set up an Application Load Balancer for cloud ECS services.

C. Set up a Network Load Balancer for cloud ECS services.

D. Set up an ECS cluster that uses the AWS Fargate launch type. Use Fargate for the cloud
application containers and the on-premises application containers.

E. Set up an ECS cluster that uses the Amazon EC2 launch type for the cloud application
containers. Use Amazon ECS Anywhere with an AWS Fargate launch type for the on-premises
application containers.

Correct Answer: A, B

---

Question 901
A company is migrating its workloads to AWS. The company has sensitive and critical data in
on-premises relational databases that run on SQL Server instances.
The company wants to use the AWS Cloud to increase security and reduce operational overhead
for the databases.
Which solution will meet these requirements?

A. Migrate the databases to Amazon EC2 instances. Use an AWS Key Management Service
(AWS KMS) AWS managed key for encryption.

B. Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS
Key Management Service (AWS KMS) AWS managed key for encryption.

C. Migrate the data to an Amazon S3 bucket. Use Amazon Macie to ensure data security.

D. Migrate the databases to an Amazon DynamoDB table. Use Amazon CloudWatch Logs to
ensure data security.

Correct Answer: B

---

Question 902
A company wants to migrate an application to AWS. The company wants to increase the
application's current availability. The company wants to use AWS WAF in the application's
architecture.
Which solution will meet these requirements?

A. Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the
application across two Availability Zones. Configure an Application Load Balancer (ALB) and set
the Auto Scaling group as the target. Connect a WAF to the ALB.

B. Create a cluster placement group that contains multiple Amazon EC2 instances that hosts the
application. Configure an Application Load Balancer and set the EC2 instances as the targets.
Connect a WAF to the placement group.

C. Create two Amazon EC2 instances that host the application across two Availability Zones.
Configure the EC2 instances as the targets of an Application Load Balancer (ALB). Connect a
WAF to the ALB.

D. Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the
application across two Availability Zones. Configure an Application Load Balancer (ALB) and set
the Auto Scaling group as the target. Connect a WAF to the Auto Scaling group.

Correct Answer: A

---

Question 903
A company manages a data lake in an Amazon S3 bucket that numerous applications access.
The S3 bucket contains a unique prefix for each application. The company wants to restrict each
application to its specific prefix and to have granular control of the objects under each prefix.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create dedicated S3 access points and access point policies for each application.

B. Create an S3 Batch Operations job to set the ACL permissions for each object in the S3 bucket.

C. Replicate the objects in the S3 bucket to new S3 buckets for each application. Create
replication rules by prefix.

D. Replicate the objects in the S3 bucket to new S3 buckets for each application. Create dedicated
S3 access points for each application.

Correct Answer: A

---

Question 904
A company has an application that customers use to upload images to an Amazon S3 bucket.
Each night, the company launches an Amazon EC2 Spot Fleet that processes all the images that
the company received that day. The processing for each image takes 2 minutes and requires
512 MB of memory.
A solutions architect needs to change the application to process the images when the images
are uploaded.
Which change will meet these requirements MOST cost-effectively?

A. Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue
Service (Amazon SQS) queue. Configure an AWS Lambda function to read the messages from
the queue and to process the images.

B. Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue
Service (Amazon SQS) queue. Configure an EC2 Reserved Instance to read the messages from
the queue and to process the images.

C. Use S3 Event Notifications to publish a message with image details to an Amazon Simple
Notification Service (Amazon SNS) topic. Configure a container instance in Amazon Elastic
Container Service (Amazon ECS) to subscribe to the topic and to process the images.

D. Use S3 Event Notifications to publish a message with image details to an Amazon Simple
Notification Service (Amazon SNS) topic. Configure an AWS Elastic Beanstalk application to
subscribe to the topic and to process the images.

Correct Answer: A

---

Question 905
A company wants to improve the availability and performance of its hybrid application. The
application consists of a stateful TCP-based workload hosted on Amazon EC2 instances in
different AWS Regions and a stateless UDP-based workload hosted on premises.
Which combination of actions should a solutions architect take to improve availability and
performance? (Choose two.)

A. Create an accelerator using AWS Global Accelerator. Add the load balancers as endpoints.

B. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53
latency-based routing to route requests to the load balancers.

C. Configure two Application Load Balancers in each Region. The first will route to the EC2
endpoints, and the second will route to the on-premises endpoints.

D. Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure a
Network Load Balancer in each Region that routes to the on-premises endpoints.

E. Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure
an Application Load Balancer in each Region that routes to the on-premises endpoints.

Correct Answer: A, D

---

Question 906
A company runs a self-managed Microsoft SQL Server on Amazon EC2 instances and Amazon
Elastic Block Store (Amazon EBS). Daily snapshots are taken of the EBS volumes.
Recently, all the company’s EBS snapshots were accidentally deleted while running a snapshot
cleaning script that deletes all expired EBS snapshots. A solutions architect needs to update the
architecture to prevent data loss without retaining EBS snapshots indefinitely.
Which solution will meet these requirements with the LEAST development effort?

A. Change the IAM policy of the user to deny EBS snapshot deletion.

B. Copy the EBS snapshots to another AWS Region after completing the snapshots daily.

C. Create a 7-day EBS snapshot retention rule in Recycle Bin and apply the rule for all snapshots.

D. Copy EBS snapshots to Amazon S3 Standard-Infrequent Access (S3 Standard-IA).

Correct Answer: C

---

Question 907
A company wants to use an AWS CloudFormation stack for its application in a test environment.
The company stores the CloudFormation template in an Amazon S3 bucket that blocks public
access. The company wants to grant CloudFormation access to the template in the S3 bucket
based on specific user requests to create the test environment. The solution must follow security
best practices.
Which solution will meet these requirements?

A. Create a gateway VPC endpoint for Amazon S3. Configure the CloudFormation stack to use
the S3 object URL.

B. Create an Amazon API Gateway REST API that has the S3 bucket as the target. Configure the
CloudFormation stack to use the API Gateway URL.

C. Create a presigned URL for the template object. Configure the CloudFormation stack to use the
presigned URL.

D. Allow public access to the template object in the S3 bucket. Block the public access after the
test environment is created.

Correct Answer: C

---

Question 908
A company has applications that run in an organization in AWS Organizations. The company
outsources operational support of the applications. The company needs to provide access for the
external support engineers without compromising security.
The external support engineers need access to the AWS Management Console. The external
support engineers also need operating system access to the company’s fleet ofAmazon EC2
instances that run Amazon Linux in private subnets.
Which solution will meet these requirements MOST securely?

A. Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an
instance profile with the necessary policy to connect to Systems Manager. Use AWS IAM Identity
Center to provide the external support engineers console access. Use Systems Manager Session
Manager to assign the required permissions.

B. Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an
instance profile with the necessary policy to connect to Systems Manager. Use Systems Manager
Session Manager to provide local IAM user credentials in each AWS account to the external
support engineers for console access.

C. Confirm that all instances have a security group that allows SSH access only from the external
support engineers’ source IP address ranges. Provide local IAM user credentials in each AWS
account to the external support engineers for console access. Provide each external support
engineer an SSH key pair to log in to the application instances.

D. Create a bastion host in a public subnet. Set up the bastion host security group to allow access
from only the external engineers’ IP address ranges. Ensure that all instances have a security
group that allows SSH access from the bastion host. Provide each external support engineer an
SSH key pair to log in to the application instances. Provide local account IAM user credentials to
the engineers for console access.

Correct Answer: A

---

Question 909
A company uses Amazon RDS for PostgreSQL to run its applications in the us-east-1 Region.
The company also uses machine learning (ML) models to forecast annual revenue based on
near real-time reports. The reports are generated by using the same RDS for PostgreSQL
database. The database performance slows during business hours. The company needs to
improve database performance.
Which solution will meet these requirements MOST cost-effectively?

A. Create a cross-Region read replica. Configure the reports to be generated from the read
replica.

B. Activate Multi-AZ DB instance deployment for RDS for PostgreSQL. Configure the reports to be
generated from the standby database.

C. Use AWS Data Migration Service (AWS DMS) to logically replicate data to a new database.
Configure the reports to be generated from the new database.

D. Create a read replica in us-east-1. Configure the reports to be generated from the read replica.

Correct Answer: D

---

Question 910
A company hosts its multi-tier, public web application in the AWS Cloud. The web application
runs on Amazon EC2 instances, and its database runs on Amazon RDS. The company is
anticipating a large increase in sales during an upcoming holiday weekend. A solutions architect
needs to build a solution to analyze the performance of the web application with a granularity of
no more than 2 minutes.
What should the solutions architect do to meet this requirement?

A. Send Amazon CloudWatch logs to Amazon Redshift. Use Amazon QuickS ght to perform
further analysis.

B. Enable detailed monitoring on all EC2 instances. Use Amazon CloudWatch metrics to perform
further analysis.

C. Create an AWS Lambda function to fetch EC2 logs from Amazon CloudWatch Logs. Use
Amazon CloudWatch metrics to perform further analysis.

D. Send EC2 logs to Amazon S3. Use Amazon Redshift to fetch logs from the S3 bucket to
process raw data for further analysis with Amazon QuickSight.

Correct Answer: B

---

Question 911
A company runs an application that stores and shares photos. Users upload the photos to an
Amazon S3 bucket. Every day, users upload approximately 150 photos. The company wants to
design a solution that creates a thumbnail of each new photo and stores the thumbnail in a
second S3 bucket.
Which solution will meet these requirements MOST cost-effectively?

A. Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a
long-running Amazon EMR cluster. Configure the script to generate thumbnails for the photos that
do not have thumbnails. Configure the script to upload the thumbnails to the second S3 bucket.

B. Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a
memory-optimized Amazon EC2 instance that is always on. Configure the script to generate
thumbnails for the photos that do not have thumbnails. Configure the script to upload the
thumbnails to the second S3 bucket.

C. Configure an S3 event notification to invoke an AWS Lambda function each time a user uploads
a new photo to the application. Configure the Lambda function to generate a thumbnail and to
upload the thumbnail to the second S3 bucket.

D. Configure S3 Storage Lens to invoke an AWS Lambda function each time a user uploads a new
photo to the application. Configure the Lambda function to generate a thumbnail and to upload the
thumbnail to a second S3 bucket.

Correct Answer: C

---

Question 912
A company has stored millions of objects across multiple prefixes in an Amazon S3 bucket by
using the Amazon S3 Glacier Deep Archive storage class. The company needs to delete all data
older than 3 years except for a subset of data that must be retained. The company has identified
the data that must be retained and wants to implement a serverless solution.
Which solution will meet these requirements?

A. Use S3 Inventory to list all objects. Use the AWS CLI to create a script that runs on an Amazon
EC2 instance that deletes objects from the inventory list.

B. Use AWS Batch to delete objects older than 3 years except for the data that must be retained.

C. Provision an AWS Glue crawler to query objects older than 3 years. Save the manifest file of
old objects. Create a script to delete objects in the manifest.

D. Enable S3 Inventory. Create an AWS Lambda function to filter and delete objects. Invoke the
Lambda function with S3 Batch Operations to delete objects by using the inventory reports.

Correct Answer: D

---

Question 913
A company is building an application on AWS. The application uses multiple AWS Lambda
functions to retrieve sensitive data from a single Amazon S3 bucket for processing. The
company must ensure that only authorized Lambda functions can access the data. The solution
must comply with the principle of least privilege.
Which solution will meet these requirements?

A. Grant full S3 bucket access to all Lambda functions through a shared IAM role.

B. Configure the Lambda functions to run within a VPC. Configure a bucket policy to grant access
based on the Lambda functions' VPC endpoint IP addresses.

C. Create individual IAM roles for each Lambda function. Grant the IAM roles access to the S3
bucket. Assign each IAM role as the Lambda execution role for its corresponding Lambda
function.

D. Configure a bucket policy granting access to the Lambda functions based on their function
ARNs.

Correct Answer: C

---

Question 914
A company has developed a non-production application that is composed of multiple
microservices for each of the company's business units. A single development team maintains all
the microservices.
The current architecture uses a static web frontend and a Java-based backend that contains the
application logic. The architecture also uses a MySQL database that the company hosts on an
Amazon EC2 instance.
The company needs to ensure that the application is secure and available globally.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon CloudFront and AWS Amplify to host the static web frontend. Refactor the
microservices to use AWS Lambda functions that the microservices access by using Amazon API
Gateway. Migrate the MySQL database to an Amazon EC2 Reserved Instance.

B. Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the
microservices to use AWS Lambda functions that the microservices access by using Amazon API
Gateway. Migrate the MySQL database to Amazon RDS for MySQL.

C. Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the
microservices to use AWS Lambda functions that are in a target group behind a Network Load
Balancer. Migrate the MySQL database to Amazon RDS for MySQL.

D. Use Amazon S3 to host the static web frontend. Refactor the microservices to use AWS
Lambda functions that are in a target group behind an Application Load Balancer. Migrate the
MySQL database to an Amazon EC2 Reserved Instance.

Correct Answer: B

---

Question 915
A video game company is deploying a new gaming application to its global users. The company
requires a solution that will provide near real-time reviews and rankings of the players.
A solutions architect must design a solution to provide fast access to the data. The solution must
also ensure the data persists on disks in the event that the company restarts the application.
Which solution will meet these requirements with the LEAST operational overhead?

A. Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin. Store
the player data in the S3 bucket.

B. Create Amazon EC2 instances in multiple AWS Regions. Store the player data on the EC2
instances. Configure Amazon Route 53 with geolocation records to direct users to the closest EC2
instance.

C. Deploy an Amazon ElastiCache for Redis duster. Store the player data in the ElastiCache
cluster.

D. Deploy an Amazon ElastiCache for Memcached duster. Store the player data in the
ElastiCache cluster.

Correct Answer: C

---

Question 916
A company is designing an application on AWS that processes sensitive data. The application
stores and processes financial data for multiple customers.
To meet compliance requirements, the data for each customer must be encrypted separately at
rest by using a secure, centralized key management solution. The company wants to use AWS
Key Management Service (AWS KMS) to implement encryption.
Which solution will meet these requirements with the LEAST operational overhead?

A. Generate a unique encryption key for each customer. Store the keys in an Amazon S3 bucket.
Enable server-side encryption.

B. Deploy a hardware security appliance in the AWS environment that securely stores
customer-provided encryption keys. Integrate the security appliance with AWS KMS to encrypt the
sensitive data in the application.

C. Create a single AWS KMS key to encrypt all sensitive data across the application.

D. Create separate AWS KMS keys for each customer's data that have granular access control
and logging enabled.

Correct Answer: D

---

Question 917
A company needs to design a resilient web application to process customer orders. The web
application must automatically handle increases in web traffic and application usage without
affecting the customer experience or losing customer orders.
Which solution will meet these requirements?

A. Use a NAT gateway to manage web traffic. Use Amazon EC2 Auto Scaling groups to receive,
process, and store processed customer orders. Use an AWS Lambda function to capture and
store unprocessed orders.

B. Use a Network Load Balancer (NLB) to manage web traffic. Use an Application Load Balancer
to receive customer orders from the NLUse Amazon Redshift with a Multi-AZ deployment to store
unprocessed and processed customer orders.

C. Use a Gateway Load Balancer (GWLB) to manage web traffic. Use Amazon Elastic Container
Service (Amazon ECS) to receive and process customer orders. Use the GWLB to capture and
store unprocessed orders. Use Amazon DynamoDB to store processed customer orders.

D. Use an Application Load Balancer to manage web traffic. Use Amazon EC2 Auto Scaling
groups to receive and process customer orders. Use Amazon Simple Queue Service (Amazon
SQS) to store unprocessed orders. Use Amazon RDS with a Multi-AZ deployment to store
processed customer orders.

Correct Answer: D

---

Question 918
A company is using AWS DataSync to migrate millions of files from an on-premises system to
AWS. The files are 10 KB in size on average.
The company wants to use Amazon S3 for file storage. For the first year after the migration, the
files will be accessed once or twice and must be immediately available. After 1 year, the files
must be archived for at least 7 years.
Which solution will meet these requirements MOST cost-effectively?

A. Use an archive tool to group the files into large objects. Use DataSync to migrate the objects.
Store the objects in S3 Glacier Instant Retrieval for the first year. Use a lifecycle configuration to
transition the files to S3 Glacier Deep Archive after 1 year with a retention period of 7 years.

B. Use an archive tool to group the files into large objects. Use DataSync to copy the objects to S3
Standard-Infrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to
S3 Glacier Instant Retrieval after 1 year with a retention period of 7 years.

C. Configure the destination storage class for the files as S3 Glacier Instant Retrieval. Use a
lifecycle policy to transition the files to S3 Glacier Flexible Retrieval after 1 year with a retention
period of 7 years.

D. Configure a DataSync task to transfer the files to S3 Standard-Infrequent Access (S3
Standard-IA). Use a lifecycle configuration to transition the files to S3 Deep Archive after 1 year
with a retention period of 7 years.

Correct Answer: A

---

Question 919
A company recently performed a lift and shift migration of its on-premises Oracle database
workload to run on an Amazon EC2 memory optimized Linux instance. The EC2 Linux instance
uses a 1 TB Provisioned IOPS SSD (io1) EBS volume with 64,000 IOPS.
The database storage performance after the migration is slower than the performance of the
on-premises database.
Which solution will improve storage performance?

A. Add more Provisioned IOPS SSD (io1) EBS volumes. Use OS commands to create a Logical
Volume Management (LVM) stripe.

B. Increase the Provisioned IOPS SSD (io1) EBS volume to more than 64,000 IOPS.

C. Increase the size of the Provisioned IOPS SSD (io1) EBS volume to 2 TB.

D. Change the EC2 Linux instance to a storage optimized instance type. Do not change the
Provisioned IOPS SSD (io1) EBS volume.

Correct Answer: A

---

Question 920
A company is migrating from a monolithic architecture for a web application that is hosted on
Amazon EC2 to a serverless microservices architecture. The company wants to use AWS
services that support an event-driven, loosely coupled architecture. The company wants to use
the publish/subscribe (pub/sub) pattern.
Which solution will meet these requirements MOST cost-effectively?

A. Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that
publishes events to an Amazon Simple Queue Service (Amazon SQS) queue. Configure one or
more subscribers to read events from the SQS queue.

B. Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that
publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or
more subscribers to receive events from the SNS topic.

C. Configure an Amazon API Gateway WebSocket API to write to a data stream in Amazon
Kinesis Data Streams with enhanced fan-out. Configure one or more subscribers to receive events
from the data stream.

D. Configure an Amazon API Gateway HTTP API to invoke an AWS Lambda function that
publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or
more subscribers to receive events from the topic.

Correct Answer: D

---

Question 921
A company recently migrated a monolithic application to an Amazon EC2 instance and Amazon
RDS. The application has tightly coupled modules. The existing design of the application gives
the application the ability to run on only a single EC2 instance.
The company has noticed high CPU utilization on the EC2 instance during peak usage times.
The high CPU utilization corresponds to degraded performance on Amazon RDS for read
requests. The company wants to reduce the high CPU utilization and improve read request
performance.
Which solution will meet these requirements?

A. Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an
Auto Scaling group with a minimum and maximum size of 1. Configure an RDS read replica for
read requests.

B. Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an
Auto Scaling group with a minimum and maximum size of 1. Add an RDS read replica and redirect
all read/write traffic to the replica.

C. Configure an Auto Scaling group with a minimum size of 1 and maximum size of 2. Resize the
RDS DB instance to an instance type that has more CPU capacity.

D. Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an
Auto Scaling group with a minimum and maximum size of 1. Resize the RDS DB instance to an
instance type that has more CPU capacity.

Correct Answer: A

---

Question 922
A company needs to grant a team of developers access to the company's AWS resources. The
company must maintain a high level of security for the resources.
The company requires an access control solution that will prevent unauthorized access to the
sensitive data.
Which solution will meet these requirements?

A. Share the IAM user credentials for each development team member with the rest of the team to
simplify access management and to streamline development workflows.

B. Define IAM roles that have fine-grained permissions based on the principle of least privilege.
Assign an IAM role to each developer.

C. Create IAM access keys to grant programmatic access to AWS resources. Allow only
developers to interact with AWS resources through API calls by using the access keys.

D. Create an AWS Cognito user pool. Grant developers access to AWS resources by using the
user pool.

Correct Answer: B

---

Question 923
A company hosts a monolithic web application on an Amazon EC2 instance. Application users
have recently reported poor performance at specific times. Analysis of Amazon CloudWatch
metrics shows that CPU utilization is 100% during the periods of poor performance.
The company wants to resolve this performance issue and improve application availability.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

A. Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale
vertically.

B. Create an Amazon Machine Image (AMI) from the web server. Reference the AMI in a new
launch template.

C. Create an Auto Scaling group and an Application Load Balancer to scale vertically.

D. Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale
horizontally.

E. Create an Auto Scaling group and an Application Load Balancer to scale horizontally.

Correct Answer: B, E

---

Question 924
A company runs all its business applications in the AWS Cloud. The company uses AWS
Organizations to manage multiple AWS accounts.
A solutions architect needs to review all permissions that are granted to IAM users to determine
which IAM users have more permissions than required.
Which solution will meet these requirements with the LEAST administrative overhead?

A. Use Network Access Analyzer to review all access permissions in the company's AWS
accounts.

B. Create an AWS CloudWatch alarm that activates when an IAM user creates or modifies
resources in an AWS account.

C. Use AWS Identity and Access Management (IAM) Access Analyzer to review all the company’s
resources and accounts.

D. Use Amazon Inspector to find vulnerabilities in existing IAM policies.

Correct Answer: C

---

Question 925
A company needs to implement a new data retention policy for regulatory compliance. As part of
this policy, sensitive documents that are stored in an Amazon S3 bucket must be protected from
deletion or modification for a fixed period of time.
Which solution will meet these requirements?

A. Activate S3 Object Lock on the required objects and enable governance mode.

B. Activate S3 Object Lock on the required objects and enable compliance mode.

C. Enable versioning on the S3 bucket. Set a lifecycle policy to delete the objects after a specified
period.

D. Configure an S3 Lifecycle policy to transition objects to S3 Glacier Flexible Retrieval for the
retention duration.

Correct Answer: B

---

Question 926
A company runs its customer-facing web application on containers. The workload uses Amazon
Elastic Container Service (Amazon ECS) on AWS Fargate. The web application is resource
intensive.
The web application needs to be available 24 hours a day, 7 days a week for customers. The
company expects the application to experience short bursts of high traffic. The workload must be
highly available.
Which solution will meet these requirements MOST cost-effectively?

A. Configure an ECS capacity provider with Fargate. Conduct load testing by using a third-party
tool. Rightsize the Fargate tasks in Amazon CloudWatch.

B. Configure an ECS capacity provider with Fargate for steady state and Fargate Spot for burst
traffic.

C. Configure an ECS capacity provider with Fargate Spot for steady state and Fargate for burst
traffic.

D. Configure an ECS capacity provider with Fargate. Use AWS Compute Optimizer to rightsize the
Fargate task.

Correct Answer: B

---

Question 927
A company is building an application in the AWS Cloud. The application is hosted on Amazon
EC2 instances behind an Application Load Balancer (ALB). The company uses Amazon Route
53 for the DNS.
The company needs a managed solution with proactive engagement to detect against DDoS
attacks.
Which solution will meet these requirements?

A. Enable AWS Config. Configure an AWS Config managed rule that detects DDoS attacks.

B. Enable AWS WAF on the ALCreate an AWS WAF web ACL with rules to detect and prevent
DDoS attacks. Associate the web ACL with the ALB.

C. Store the ALB access logs in an Amazon S3 bucket. Configure Amazon GuardDuty to detect
and take automated preventative actions for DDoS attacks.

D. Subscribe to AWS Shield Advanced. Configure hosted zones in Route 53. Add ALB resources
as protected resources.

Correct Answer: D

---

Question 928
A company hosts a video streaming web application in a VPC. The company uses a Network
Load Balancer (NLB) to handle TCP traffic for real-time data processing. There have been
unauthorized attempts to access the application.
The company wants to improve application security with minimal architectural change to prevent
unauthorized attempts to access the application.
Which solution will meet these requirements?

A. Implement a series of AWS WAF rules directly on the NLB to filter out unauthorized traffic.

B. Recreate the NLB with a security group to allow only trusted IP addresses.

C. Deploy a second NLB in parallel with the existing NLB configured with a strict IP address allow
list.

D. Use AWS Shield Advanced to provide enhanced DDoS protection and prevent unauthorized
access attempts.

Correct Answer: B

---

Question 929
A healthcare company is developing an AWS Lambda function that publishes notifications to an
encrypted Amazon Simple Notification Service (Amazon SNS) topic. The notifications contain
protected health information (PHI).
The SNS topic uses AWS Key Management Service (AWS KMS) customer managed keys for
encryption. The company must ensure that the application has the necessary permissions to
publish messages securely to the SNS topic.
Which combination of steps will meet these requirements? (Choose three.)

A. Create a resource policy for the SNS topic that allows the Lambda function to publish
messages to the topic.

B. Use server-side encryption with AWS KMS keys (SSE-KMS) for the SNS topic instead of
customer managed keys.

C. Create a resource policy for the encryption key that the SNS topic uses that has the necessary
AWS KMS permissions.

D. Specify the Lambda function's Amazon Resource Name (ARN) in the SNS topic's resource
policy.

E. Associate an Amazon API Gateway HTTP API with the SNS topic to control access to the topic
by using API Gateway resource policies.

F. Configure a Lambda execution role that has the necessary IAM permissions to use a customer
managed key in AWS KMS.

Correct Answer: A, C, F

---

Question 930
A company has an employee web portal. Employees log in to the portal to view payroll details.
The company is developing a new system to give employees the ability to upload scanned
documents for reimbursement. The company runs a program to extract text-based data from the
documents and attach the extracted information to each employee’s reimbursement IDs for
processing.
The employee web portal requires 100% uptime. The document extract program runs
infrequently throughout the day on an on-demand basis. The company wants to build a scalable
and cost-effective new system that will require minimal changes to the existing web portal. The
company does not want to make any code changes.
Which solution will meet these requirements with the LEAST implementation effort?

A. Run Amazon EC2 On-Demand Instances in an Auto Scaling group for the web portal. Use an
AWS Lambda function to run the document extract program. Invoke the Lambda function when an
employee uploads a new reimbursement document.

B. Run Amazon EC2 Spot Instances in an Auto Scaling group for the web portal. Run the
document extract program on EC2 Spot Instances. Start document extract program instances
when an employee uploads a new reimbursement document.

C. Purchase a Savings Plan to run the web portal and the document extract program. Run the web
portal and the document extract program in an Auto Scaling group.

D. Create an Amazon S3 bucket to host the web portal. Use Amazon API Gateway and an AWS
Lambda function for the existing functionalities. Use the Lambda function to run the document
extract program. Invoke the Lambda function when the API that is associated with a new
document upload is called.

Correct Answer: A

---

Question 931
A media company has a multi-account AWS environment in the us-east-1 Region. The company
has an Amazon Simple Notification Service (Amazon SNS) topic in a production account that
publishes performance metrics. The company has an AWS Lambda function in an administrator
account to process and analyze log data.
The Lambda function that is in the administrator account must be invoked by messages from the
SNS topic that is in the production account when significant metrics are reported.
Which combination of steps will meet these requirements? (Choose two.)

A. Create an IAM resource policy for the Lambda function that allows Amazon SNS to invoke the
function.

B. Implement an Amazon Simple Queue Service (Amazon SQS) queue in the administrator
account to buffer messages from the SNS topic that is in the production account. Configure the
SQS queue to invoke the Lambda function.

C. Create an IAM policy for the SNS topic that allows the Lambda function to subscribe to the
topic.

D. Use an Amazon EventBridge rule in the production account to capture the SNS topic
notifications. Configure the EventBridge rule to forward notifications to the Lambda function that is
in the administrator account.

E. Store performance metrics in an Amazon S3 bucket in the production account. Use Amazon
Athena to analyze the metrics from the administrator account.

Correct Answer: A, C

---

Question 932
A company is migrating an application from an on-premises location to Amazon Elastic
Kubernetes Service (Amazon EKS). The company must use a custom subnet for pods that are in
the company's VPC to comply with requirements. The company also needs to ensure that the
pods can communicate securely within the pods' VPC.
Which solution will meet these requirements?

A. Configure AWS Transit Gateway to directly manage custom subnet configurations for the pods
in Amazon EKS.

B. Create an AWS Direct Connect connection from the company's on-premises IP address ranges
to the EKS pods.

C. Use the Amazon VPC CNI plugin for Kubernetes. Define custom subnets in the VPC cluster for
the pods to use.

D. Implement a Kubernetes network policy that has pod anti-affinity rules to restrict pod placement
to specific nodes that are within custom subnets.

Correct Answer: C

---

Question 933
A company hosts an ecommerce application that stores all data in a single Amazon RDS for
MySQL DB instance that is fully managed by AWS. The company needs to mitigate the risk of a
single point of failure.
Which solution will meet these requirements with the LEAST implementation effort?

A. Modify the RDS DB instance to use a Multi-AZ deployment. Apply the changes during the next
maintenance window.

B. Migrate the current database to a new Amazon DynamoDB Multi-AZ deployment. Use AWS
Database Migration Service (AWS DMS) with a heterogeneous migration strategy to migrate the
current RDS DB instance to DynamoDB tables.

C. Create a new RDS DB instance in a Multi-AZ deployment. Manually restore the data from the
existing RDS DB instance from the most recent snapshot.

D. Configure the DB instance in an Amazon EC2 Auto Scaling group with a minimum group size of
three. Use Amazon Route 53 simple routing to distribute requests to all DB instances.

Correct Answer: A

---

Question 934
A company has multiple Microsoft Windows SMB file servers and Linux NFS file servers for file
sharing in an on-premises environment. As part of the company's AWS migration plan, the
company wants to consolidate the file servers in the AWS Cloud.
The company needs a managed AWS storage service that supports both NFS and SMB access.
The solution must be able to share between protocols. The solution must have redundancy at the
Availability Zone level.
Which solution will meet these requirements?

A. Use Amazon FSx for NetApp ONTAP for storage. Configure multi-protocol access.

B. Create two Amazon EC2 instances. Use one EC2 instance for Windows SMB file server access
and one EC2 instance for Linux NFS file server access.

C. Use Amazon FSx for NetApp ONTAP for SMB access. Use Amazon FSx for Lustre for NFS
access.

D. Use Amazon S3 storage. Access Amazon S3 through an Amazon S3 File Gateway.

Correct Answer: A

---

Question 935
A software company needs to upgrade a critical web application. The application currently runs
on a single Amazon EC2 instance that the company hosts in a public subnet. The EC2 instance
runs a MySQL database. The application's DNS records are published in an Amazon Route 53
zone.
A solutions architect must reconfigure the application to be scalable and highly available. The
solutions architect must also reduce MySQL read latency.
Which combination of solutions will meet these requirements? (Choose two.)

A. Launch a second EC2 instance in a second AWS Region. Use a Route 53 failover routing
policy to redirect the traffic to the second EC2 instance.

B. Create and configure an Auto Scaling group to launch private EC2 instances in multiple
Availability Zones. Add the instances to a target group behind a new Application Load Balancer.

C. Migrate the database to an Amazon Aurora MySQL cluster. Create the primary DB instance
and reader DB instance in separate Availability Zones.

D. Create and configure an Auto Scaling group to launch private EC2 instances in multiple AWS
Regions. Add the instances to a target group behind a new Application Load Balancer.

E. Migrate the database to an Amazon Aurora MySQL cluster with cross-Region read replicas.

Correct Answer: B, C

---

Question 936
A company runs thousands of AWS Lambda functions. The company needs a solution to
securely store sensitive information that all the Lambda functions use. The solution must also
manage the automatic rotation of the sensitive information.
Which combination of steps will meet these requirements with the LEAST operational overhead?
(Choose two.)

A. Create HTTP security headers by using Lambda@Edge to retrieve and create sensitive
information

B. Create a Lambda layer that retrieves sensitive information

C. Store sensitive information in AWS Secrets Manager

D. Store sensitive information in AWS Systems Manager Parameter Store

E. Create a Lambda consumer with dedicated throughput to retrieve sensitive information and
create environmental variables

Correct Answer: B, C

---

Question 937
A company has an internal application that runs on Amazon EC2 instances in an Auto Scaling
group. The EC2 instances are compute optimized and use Amazon Elastic Block Store (Amazon
EBS) volumes.
The company wants to identify cost optimizations across the EC2 instances, the Auto Scaling
group, and the EBS volumes.
Which solution will meet these requirements with the MOST operational efficiency?

A. Create a new AWS Cost and Usage Report. Search the report for cost recommendations for
the EC2 instances the Auto Scaling group, and the EBS volumes.

B. Create new Amazon CloudWatch billing alerts. Check the alert statuses for cost
recommendations for the EC2 instances, the Auto Scaling group, and the EBS volumes.

C. Configure AWS Compute Optimizer for cost recommendations for the EC2 instances, the Auto
Scaling group and the EBS volumes.

D. Configure AWS Compute Optimizer for cost recommendations for the EC2 instances. Create a
new AWS Cost and Usage Report. Search the report for cost recommendations for the Auto
Scaling group and the EBS volumes.

Correct Answer: C

---

Question 938
A company is running a media store across multiple Amazon EC2 instances distributed across
multiple Availability Zones in a single VPC. The company wants a high-performing solution to
share data between all the EC2 instances, and prefers to keep the data within the VPC only.
What should a solutions architect recommend?

A. Create an Amazon S3 bucket and call the service APIs from each instance's application

B. Create an Amazon S3 bucket and configure all instances to access it as a mounted volume

C. Configure an Amazon Elastic Block Store (Amazon EBS) volume and mount it across all
instances

D. Configure an Amazon Elastic File System (Amazon EFS) file system and mount it across all
instances

Correct Answer: D

---

Question 939
A company uses an Amazon RDS for MySQL instance. To prepare for end-of-year processing,
the company added a read replica to accommodate extra read-only queries from the company's
reporting tool. The read replica CPU usage was 60% and the primary instance CPU usage was
60%.
After end-of-year activities are complete, the read replica has a constant 25% CPU usage. The
primary instance still has a constant 60% CPU usage. The company wants to rightsize the
database and still provide enough performance for future growth.
Which solution will meet these requirements?

A. Delete the read replica Do not make changes to the primary instance

B. Resize the read replica to a smaller instance size Do not make changes to the primary instance

C. Resize the read replica to a larger instance size Resize the primary instance to a smaller
instance size

D. Delete the read replica Resize the primary instance to a larger instance

Correct Answer: B

---

Question 940
A company is migrating its databases to Amazon RDS for PostgreSQL. The company is
migrating its applications to Amazon EC2 instances. The company wants to optimize costs for
long-running workloads.
Which solution will meet this requirement MOST cost-effectively?

A. Use On-Demand Instances for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year
Compute Savings Plan with the No Upfront option for the EC2 instances.

B. Purchase Reserved Instances for a 1 year term with the No Upfront option for the Amazon RDS
for PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the No Upfront
option for the EC2 instances.

C. Purchase Reserved Instances for a 1 year term with the Partial Upfront option for the Amazon
RDS for PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the Partial
Upfront option for the EC2 instances.

D. Purchase Reserved Instances for a 3 year term with the All Upfront option for the Amazon RDS
for PostgreSQL workloads. Purchase a 3 year EC2 Instance Savings Plan with the All Upfront
option for the EC2 instances.

Correct Answer: D

---

Question 941
A company is using an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The
company must ensure that Kubernetes service accounts in the EKS cluster have secure and
granular access to specific AWS resources by using IAM roles for service accounts (IRSA).
Which combination of solutions will meet these requirements? (Choose two.)

A. Create an IAM policy that defines the required permissions Attach the policy directly to the IAM
role of the EKS nodes.

B. Implement network policies within the EKS cluster to prevent Kubernetes service accounts from
accessing specific AWS services.

C. Modify the EKS cluster's IAM role to include permissions for each Kubernetes service account.
Ensure a one-to-one mapping between IAM roles and Kubernetes roles.

D. Define an IAM role that includes the necessary permissions. Annotate the Kubernetes service
accounts with the Amazon ResourceName (ARN) of the IAM role.

E. Set up a trust relationship between the IAM roles for the service accounts and an OpenID
Connect (OIDC) identity provider.

Correct Answer: D, E

---

Question 942
A company regularly uploads confidential data to Amazon S3 buckets for analysis.
The company's security policies mandate that the objects must be encrypted at rest. The
company must automatically rotate the encryption key every year. The company must be able to
track key rotation by using AWS CloudTrail. The company also must minimize costs for the
encryption key.
Which solution will meet these requirements?

A. Use server-side encryption with customer-provided keys (SSE-C)

B. Use server-side encryption with Amazon S3 managed keys (SSE-S3)

C. Use server-side encryption with AWS KMS keys (SSE-KMS)

D. Use server-side encryption with customer managed AWS KMS keys

Correct Answer: C

---

Question 943
A company has migrated several applications to AWS in the past 3 months. The company wants
to know the breakdown of costs for each of these applications. The company wants to receive a
regular report that includes this information.
Which solution will meet these requirements MOST cost-effectively?

A. Use AWS Budgets to download data for the past 3 months into a .csv file. Look up the desired
information.

B. Load AWS Cost and Usage Reports into an Amazon RDS DB instance. Run SQL queries to get
the desired information.

C. Tag all the AWS resources with a key for cost and a value of the application's name. Activate
cost allocation tags. Use Cost Explorerto get the desired information.

D. Tag all the AWS resources with a key for cost and a value of the application's name. Use the
AWS Billing and Cost Management console todownload bills for the past 3 months. Look up the
desired information.

Correct Answer: C

---

Question 944
An ecommerce company is preparing to deploy a web application on AWS to ensure continuous
service for customers. The architecture includes a web application that the company hosts on
Amazon EC2 instances, a relational database in Amazon RDS, and static assets that the
company stores in Amazon S3.
The company wants to design a robust and resilient architecture for the application.
Which solution will meet these requirements?

A. Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in the
same Availability Zone. Use Amazon S3 with versioning enabled to store static assets.

B. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones.
Deploy a Multi-AZ RDS DB instance. Use Amazon CloudFront to distribute static assets.

C. Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in a
second Availability Zone for cross-AZ redundancy. Serve static assets directly from the EC2
instances.

D. Use AWS Lambda functions to serve the web application. Use Amazon Aurora Serverless v2
for the database. Store static assets in Amazon Elastic File System (Amazon EFS) One
Zone-Infrequent Access (One Zone-IA).

Correct Answer: B

---

Question 945
An ecommerce company runs several internal applications in multiple AWS accounts. The
company uses AWS Organizations to manage its AWS accounts.
A security appliance in the company's networking account must inspect interactions between
applications across AWS accounts.
Which solution will meet these requirements?

A. Deploy a Network Load Balancer (NLB) in the networking account to send traffic to the security
appliance. Configure the application accounts to send traffic to the NLB by using an interface VPC
endpoint in the application accounts.

B. Deploy an Application Load Balancer (ALB) in the application accounts to send traffic directly to
the security appliance.

C. Deploy a Gateway Load Balancer (GWLB) in the networking account to send traffic to the
security appliance. Configure the application accounts to send traffic to the GWLB by using an
interface GWLB endpoint in the application accounts.

D. Deploy an interface VPC endpoint in the application accounts to send traffic directly to the
security appliance.

Correct Answer: C

---

Question 946
A company runs its production workload on an Amazon Aurora MySQL DB cluster that includes
six Aurora Replicas. The company wants near-real-time reporting queries from one of its
departments to be automatically distributed across three of the Aurora Replicas. Those three
replicas have a different compute and memory specification from the rest of the DB cluster.
Which solution meets these requirements?

A. Create and use a custom endpoint for the workload

B. Create a three-node cluster clone and use the reader endpoint

C. Use any of the instance endpoints for the selected three nodes

D. Use the reader endpoint to automatically distribute the read-only workload

Correct Answer: A

---

Question 947
A company runs a Node js function on a server in its on-premises data center. The data center
stores data in a PostgreSQL database. The company stores the credentials in a connection
string in an environment variable on the server. The company wants to migrate its application to
AWS and to replace the Node.js application server with AWS Lambda. The company also wants
to migrate to Amazon RDS for PostgreSQL and to ensure that the database credentials are
securely managed.
Which solution will meet these requirements with the LEAST operational overhead?

A. Store the database credentials as a parameter in AWS Systems Manager Parameter Store
Configure Parameter Store to automatically rotate the secrets every 30 days. Update the Lambda
function to retrieve the credentials from the parameter.

B. Store the database credentials as a secret in AWS Secrets Manager. Configure Secrets
Manager to automatically rotate the credentials every 30 days. Update the Lambda function to
retrieve the credentials from the secret.

C. Store the database credentials as an encrypted Lambda environment variable. Write a custom
Lambda function to rotate the credentials. Schedule the Lambda function to run every 30 days.

D. Store the database credentials as a key in AWS Key Management Service (AWS KMS).
Configure automatic rotation for the key. Update the Lambda function to retneve the credentials
from the KMS key.

Correct Answer: B

---

Question 948
A company wants to replicate existing and ongoing data changes from an on-premises Oracle
database to Amazon RDS for Oracle. The amount of data to replicate varies throughout each
day. The company wants to use AWS Database Migration Service (AWS DMS) for data
replication. The solution must allocate only the capacity that the replication instance requires.
Which solution will meet these requirements?

A. Configure the AWS DMS replication instance with a Multi-AZ deployment to provision instances
across multiple Availability Zones.

B. Create an AWS DMS Serverless replication task to analyze and replicate the data while
provisioning the required capacity.

C. Use Amazon EC2 Auto Scaling to scale the size of the AWS DMS replication instance up or
down based on the amount of data toreplicate.

D. Provision AWS DMS replication capacity by using Amazon Elastic Container Service (Amazon
ECS) with an AWS Fargate launch type to analyze and replicate the data while provisioning the
required capacity.

Correct Answer: B

---

Question 949
A company has a multi-tier web application. The application's internal service components are
deployed on Amazon EC2 instances. The internal service components need to access
third-party software as a service (SaaS) APIs that are hosted on AWS.
The company needs to provide secure and private connectivity from the application's internal
services to the third-party SaaS application. The company needs to ensure that there is minimal
public internet exposure.
Which solution will meet these requirements?

A. Implement an AWS Site-to-Site VPN to establish a secure connection with the third-party SaaS
provider.

B. Deploy AWS Transit Gateway to manage and route traffic between the application's VPC and
the third-party SaaS provider.

C. Configure AWS PrivateLink to allow only outbound traffic from the VPC without enabling the
third-party SaaS provider to establish.

D. Use AWS PrivateLink to create a private connection between the application's VPC and the
third-party SaaS provider.

Correct Answer: D

---

Question 950
A solutions architect needs to connect a company's corporate network to its VPC to allow
on-premises access to its AWS resources. The solution must provide encryption of all traffic
between the corporate network and the VPC at the network layer and the session layer. The
solution also must provide security controls to prevent unrestricted access between AWS and
the on-premises systems.
Which solution meets these requirements?

A. Configure AWS Direct Connect to connect to the VPC. Configure the VPC route tables to allow
and deny traffic between AWS and on premises as required.

B. Create an IAM policy to allow access to the AWS Management Console only from a defined set
of corporate IP addresses. Restrict user access based on job responsibility by using an IAM policy
and roles.

C. Configure AWS Site-to-Site VPN to connect to the VPConfigure route table entries to direct
traffic from on premises to the VPConfigure instance security groups and network ACLs to allow
only required traffic from on premises.

D. Configure AWS Transit Gateway to connect to the VPC. Configure route table entries to direct
traffic from on premises to the VPC. Configure instance security groups and network ACLs to
allow only required traffic from on premises.

Correct Answer: C

---

Question 951
A company has a custom application with embedded credentials that retrieves information from a
database in an Amazon RDS for MySQL DB cluster. The company needs to make the
application more secure with minimal programming effort. The company has created credentials
on the RDS for MySQL database for the application user.
Which solution will meet these requirements?

A. Store the credentials in AWS Key Management Service (AWS KMS). Create keys in AWS
KMS. Configure the application to load the database credentials from AWS KMS. Enable
automatic key rotation

B. Store the credentials in encrypted local storage. Configure the application to load the database
credentials from the local storage. Set up a credentials rotation schedule by creating a cron job.

C. Store the credentials in AWS Secrets Manager. Configure the application to load the database
credentials from Secrets Manager. Set up a credentials rotation schedule by creating an AWS
Lambda function for Secrets Manager.

D. Store the credentials in AWS Systems Manager Parameter Store. Configure the application to
load the database credentials from Parameter Store. Set up a credentials rotation schedule in the
RDS for MySQL database by using Parameter Store.

Correct Answer: C

---

Question 952
A company wants to move its application to a serverless solution. The serverless solution needs
to analyze existing data and new data by using SQL. The company stores the data in an Amazon
S3 bucket. The data must be encrypted at rest and replicated to a different AWS Region.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create a new S3 bucket that uses server-side encryption with AWS KMS multi-Region keys
(SSE-KMS). Configure Cross-Region Replication (CRR). Load the data into the new S3 bucket.
Use Amazon Athena to query the data.

B. Create a new S3 bucket that uses server-side encryption with Amazon S3 managed keys
(SSE-S3). Configure Cross-Region Replication (CRR). Load the data into the new S3 bucket. Use
Amazon RDS to query the data.

C. Configure Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side
encryption with Amazon S3 managed keys (SSE-S3). Use Amazon Athena to query the data.

D. Configure S3 Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side
encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.

Correct Answer: C

---

Question 953
A company has a web application that has thousands of users. The application uses 8-10
user-uploaded images to generate AI images. Users can download the generated AI images
once every 6 hours. The company also has a premium user option that gives users the ability to
download the generated AI images anytime.
The company uses the user-uploaded images to run AI model training twice a year. The
company needs a storage solution to store the images.
Which storage solution meets these requirements MOST cost-effectively?

A. Move uploaded images to Amazon S3 Glacier Deep Archive. Move premium user-generated AI
images to S3 Standard. Move non-premium user-generated AI images to S3 Standard-Infrequent
Access (S3 Standard-IA).

B. Move uploaded images to Amazon S3 Glacier Deep Archive Move all generated AI images to
S3 Glacier Flexible Retrieval.

C. Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move
premium user-generated AI images to S3 Standard. Move non-premium user-generated AI
images to S3 Standard-Infrequent Access (S3 Standard-IA).

D. Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move
all generated AI images to S3 Glacier Flexible Retrieval.

Correct Answer: A

---

Question 954
A company is developing machine learning (ML) models on AWS. The company is developing
the ML models as independent microservices. The microservices fetch approximately 1 GB of
model data from Amazon S3 at startup and load the data into memory. Users access the ML
models through an asynchronous API. Users can send a request or a batch of requests.
The company provides the ML models to hundreds of users. The usage patterns for the models
are irregular. Some models are not used for days or weeks. Other models receive batches of
thousands of requests at a time.
Which solution will meet these requirements?

A. Direct the requests from the API to a Network Load Balancer (NLB). Deploy the ML models as
AWS Lambda functions that the NLB will invoke. Use auto scaling to scale the Lambda functions
based on the traffic that the NLB receives.

B. Direct the requests from the API to an Application Load Balancer (ALB). Deploy the ML models
as Amazon Elastic Container Service (Amazon ECS) services that the ALB will invoke. Use auto
scaling to scale the ECS cluster instances based on the traffic that the ALB receives.

C. Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue.
Deploy the ML models as AWS Lambda functions that SQS events will invoke. Use auto scaling to
increase the number of vCPUs for the Lambda functions based on the size of the SQS queue.

D. Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue.
Deploy the ML models as Amazon Elastic Container Service (Amazon ECS) services that read
from the queue. Use auto scaling for Amazon ECS to scale both the cluster capacity and number
of the services based on the size of the SQS queue.

Correct Answer: D

---

Question 955
A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind
an Application Load Balancer (ALB). The application stores data in an Amazon Aurora MySQL
DB cluster.
The company needs to create a disaster recovery (DR) solution. The acceptable recovery time
for the DR solution is up to 30 minutes. The DR solution does not need to support customer
usage when the primary infrastructure is healthy.
Which solution will meet these requirements?

A. Deploy the DR infrastructure in a second AWS Region with an ALB and an Auto Scaling group.
Set the desired capacity and maximum capacity of the Auto Scaling group to a minimum value.
Convert the Aurora MySQL DB cluster to an Aurora global database. Configure Amazon Route 53
for an active-passive failover with ALB endpoints.

B. Deploy the DR infrastructure in a second AWS Region with an ALUpdate the Auto Scaling
group to include EC2 instances from the second Region. Use Amazon Route 53 to configure
active-active failover. Convert the Aurora MySQL DB cluster to an Aurora global database.

C. Back up the Aurora MySQL DB cluster data by using AWS Backup. Deploy the DR
infrastructure in a second AWS Region with an ALB. Update the Auto Scaling group to include
EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover.
Create an Aurora MySQL DB cluster in the second Region Restore the data from the backup.

D. Back up the infrastructure configuration by using AWS Backup. Use the backup to create the
required infrastructure in a second AWS Region. Set the Auto Scaling group desired capacity to
zero. Use Amazon Route 53 to configure active-passive failover. Convert the Aurora MySQL DB
cluster to an Aurora global database.

Correct Answer: A

---

Question 956
A company is migrating its data processing application to the AWS Cloud. The application
processes several short-lived batch jobs that cannot be disrupted. Data is generated after each
batch job is completed. The data is accessed for 30 days and retained for 2 years.
The company wants to keep the cost of running the application in the AWS Cloud as low as
possible.
Which solution will meet these requirements?

A. Migrate the data processing application to Amazon EC2 Spot Instances. Store the data in
Amazon S3 Standard. Move the data to Amazon S3 Glacier Instant. Retrieval after 30 days. Set
an expiration to delete the data after 2 years.

B. Migrate the data processing application to Amazon EC2 On-Demand Instances. Store the data
in Amazon S3 Glacier Instant Retrieval. Move the data to S3 Glacier Deep Archive after 30 days.
Set an expiration to delete the data after 2 years.

C. Deploy Amazon EC2 Spot Instances to run the batch jobs. Store the data in Amazon S3
Standard. Move the data to Amazon S3 Glacier Flexible Retrieval after 30 days. Set an expiration
to delete the data after 2 years.

D. Deploy Amazon EC2 On-Demand Instances to run the batch jobs. Store the data in Amazon S3
Standard. Move the data to Amazon S3 Glacier Deep Archive after 30 days. Set an expiration to
delete the data after 2 years.

Correct Answer: D

---

Question 957
A company needs to design a hybrid network architecture. The company's workloads are
currently stored in the AWS Cloud and in on-premises data centers. The workloads require
single-digit latencies to communicate. The company uses an AWS Transit Gateway transit
gateway to connect multiple VPCs.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

A. Establish an AWS Site-to-Site VPN connection to each VPC.

B. Associate an AWS Direct Connect gateway with the transit gateway that is attached to the
VPCs.

C. Establish an AWS Site-to-Site VPN connection to an AWS Direct Connect gateway.

D. Establish an AWS Direct Connect connection. Create a transit virtual interface (VIF) to a Direct
Connect gateway.

E. Associate AWS Site-to-Site VPN connections with the transit gateway that is attached to the
VPCs.

Correct Answer: B, D

---

Question 958
A global ecommerce company runs its critical workloads on AWS. The workloads use an
Amazon RDS for PostgreSQL DB instance that is configured for a Multi-AZ deployment.
Customers have reported application timeouts when the company undergoes database failovers.
The company needs a resilient solution to reduce failover time.
Which solution will meet these requirements?

A. Create an Amazon RDS Proxy. Assign the proxy to the DB instance.

B. Create a read replica for the DB instance. Move the read traffic to the read replica.

C. Enable Performance Insights. Monitor the CPU load to identify the timeouts.

D. Take regular automatic snapshots. Copy the automatic snapshots to multiple AWS Regions.

Correct Answer: A

---

Question 959
A company has multiple Amazon RDS DB instances that run in a development AWS account. All
the instances have tags to identify them as development resources. The company needs the
development DB instances to run on a schedule only during business hours.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create an Amazon CloudWatch alarm to identify RDS instances that need to be stopped.
Create an AWS Lambda function to start and stop the RDS instances.

B. Create an AWS Trusted Advisor report to identify RDS instances to be started and stopped.
Create an AWS Lambda function to start and stop the RDS instances.

C. Create AWS Systems Manager State Manager associations to start and stop the RDS
instances.

D. Create an Amazon EventBridge rule that invokes AWS Lambda functions to start and stop the
RDS instances.

Correct Answer: D

---

Question 960
A consumer survey company has gathered data for several years from a specific geographic
region. The company stores this data in an Amazon S3 bucket in an AWS Region.
The company has started to share this data with a marketing firm in a new geographic region.
The company has granted the firm's AWS account access to the S3 bucket. The company wants
to minimize the data transfer costs when the marketing firm requests data from the S3 bucket.
Which solution will meet these requirements?

A. Configure the Requester Pays feature on the company’s S3 bucket.

B. Configure S3 Cross-Region Replication (CRR) from the company’s S3 bucket to one of the
marketing firm’s S3 buckets.

C. Configure AWS Resource Access Manager to share the S3 bucket with the marketing firm
AWS account.

D. Configure the company’s S3 bucket to use S3 Intelligent-Tiering Sync the S3 bucket to one of
the marketing firm’s S3 buckets.

Correct Answer: A

---

Question 961
A company uses AWS to host its public ecommerce website. The website uses an AWS Global
Accelerator accelerator for traffic from the internet. The Global Accelerator accelerator forwards
the traffic to an Application Load Balancer (ALB) that is the entry point for an Auto Scaling group.
The company recently identified a DDoS attack on the website. The company needs a solution to
mitigate future attacks.
Which solution will meet these requirements with the LEAST implementation effort?

A. Configure an AWS WAF web ACL for the Global Accelerator accelerator to block traffic by
using rate-based rules

B. Configure an AWS Lambda function to read the ALB metrics to block attacks by updating a
VPC network ACL

C. Configure an AWS WAF web ACL on the ALB to block traffic by using rate-based rules

D. Configure an Amazon CloudFront distribution in front of the Global Accelerator accelerator

Correct Answer: C

---

Question 962
A company uses an Amazon DynamoDB table to store data that the company receives from
devices. The DynamoDB table supports a customer-facing website to display recent activity on
customer devices. The company configured the table with provisioned throughput for writes and
reads.
The company wants to calculate performance metrics for customer device data on a daily basis.
The solution must have minimal effect on the table's provisioned read and write capacity.
Which solution will meet these requirements?

A. Use an Amazon Athena SQL query with the Amazon Athena DynamoDB connector to calculate
performance metrics on a recurring schedule.

B. Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate
performance metrics on a recurring schedule.

C. Use an Amazon Redshift COPY command to calculate performance metrics on a recurring
schedule.

D. Use an Amazon EMR job with an Apache Hive external table to calculate performance metrics
on a recurring schedule.

Correct Answer: B

---

Question 963
A solutions architect is designing the cloud architecture for a new stateless application that will
be deployed on AWS. The solutions architect created an Amazon Machine Image (AMI) and
launch template for the application.
Based on the number of jobs that need to be processed, the processing must run in parallel
while adding and removing application Amazon EC2 instances as needed. The application must
be loosely coupled. The job items must be durably stored.
Which solution will meet these requirements?

A. Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need
to be processed. Create an Auto Scaling group by using the launch template with the scaling
policy set to add and remove EC2 instances based on CPU usage.

B. Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to
be processed. Create an Auto Scaling group by using the launch template with the scaling policy
set to add and remove EC2 instances based on network usage.

C. Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to
be processed. Create an Auto Scaling group by using the launch template with the scaling policy
set to add and remove EC2 instances based on the number of items in the SQS queue.

D. Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need
to be processed. Create an Auto Scaling group by using the launch template with the scaling
policy set to add and remove EC2 instances based on the number of messages published to the
SNS topic.

Correct Answer: C

---

Question 964
A global ecommerce company uses a monolithic architecture. The company needs a solution to
manage the increasing volume of product data. The solution must be scalable and have a
modular service architecture. The company needs to maintain its structured database schemas.
The company also needs a storage solution to store product data and product images.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use an Amazon EC2 instance in an Auto Scaling group to deploy a containerized application.
Use an Application Load Balancer to distribute web traffic. Use an Amazon RDS DB instance to
store product data and product images.

B. Use AWS Lambda functions to manage the existing monolithic application. Use Amazon
DynamoDB to store product data and product images. Use Amazon Simple Notification Service
(Amazon SNS) for event-driven communication between the Lambda functions.

C. Use Amazon Elastic Kubernetes Service (Amazon EKS) with an Amazon EC2 deployment to
deploy a containerized application. Use an Amazon Aurora cluster to store the product data. Use
AWS Step Functions to manage workflows. Store the product images in Amazon S3 Glacier Deep
Archive.

D. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate to deploy a
containerized application. Use Amazon RDS with a Multi-AZ deployment to store the product data.
Store the product images in an Amazon S3 bucket.

Correct Answer: D

---

Question 965
A company is migrating an application from an on-premises environment to AWS. The
application will store sensitive data in Amazon S3. The company must encrypt the data before
storing the data in Amazon S3.
Which solution will meet these requirements?

A. Encrypt the data by using client-side encryption with customer managed keys.

B. Encrypt the data by using server-side encryption with AWS KMS keys (SSE-KMS).

C. Encrypt the data by using server-side encryption with customer-provided keys (SSE-C).

D. Encrypt the data by using client-side encryption with Amazon S3 managed keys.

Correct Answer: A

---

Question 966
A company wants to create an Amazon EMR cluster that multiple teams will use. The company
wants to ensure that each team’s big data workloads can access only the AWS services that
each team needs to interact with. The company does not want the workloads to have access to
Instance Metadata Service Version 2 (IMDSv2) on the cluster’s underlying EC2 instances.
Which solution will meet these requirements?

A. Configure interface VPC endpoints for each AWS service that the teams need. Use the
required interface VPC endpoints to submit the big data workloads.

B. Create EMR runtime roles. Configure the cluster to use the runtime roles. Use the runtime roles
to submit the big data workloads.

C. Create an EC2 IAM instance profile that has the required permissions for each team. Use the
instance profile to submit the big data workloads.

D. Create an EMR security configuration that has the EnableApplicationScopedIAMRole option set
to false. Use the security configuration to submit the big data workloads.

Correct Answer: B

---

Question 967
A solutions architect is designing an application that helps users fill out and submit registration
forms. The solutions architect plans to use a two-tier architecture that includes a web application
server tier and a worker tier.
The application needs to process submitted forms quickly. The application needs to process
each form exactly once. The solution must ensure that no data is lost.
Which solution will meet these requirements?

A. Use an Amazon Simple Queue Service (Amazon SQS) FIFO queue between the web
application server tier and the worker tier to store and forward form data.

B. Use an Amazon API Gateway HTTP API between the web application server tier and the
worker tier to store and forward form data.

C. Use an Amazon Simple Queue Service (Amazon SQS) standard queue between the web
application server tier and the worker tier to store and forward form data.

D. Use an AWS Step Functions workflow. Create a synchronous workflow between the web
application server tier and the worker tier that stores and forwards form data.

Correct Answer: A

---

Question 968
A finance company uses an on-premises search application to collect streaming data from
various producers. The application provides real-time updates to search and visualization
features.
The company is planning to migrate to AWS and wants to use an AWS native solution.
Which solution will meet these requirements?

A. Use Amazon EC2 instances to ingest and process the data streams to Amazon S3 buckets tor
storage. Use Amazon Athena to search the data. Use Amazon Managed Grafana to create
visualizations.

B. Use Amazon EMR to ingest and process the data streams to Amazon Redshift for storage. Use
Amazon Redshift Spectrum to search the data. Use Amazon QuickSight to create visualizations.

C. Use Amazon Elastic Kubernetes Service (Amazon EKS) to ingest and process the data
streams to Amazon DynamoDB for storage. Use Amazon CloudWatch to create graphical
dashboards to search and visualize the data.

D. Use Amazon Kinesis Data Streams to ingest and process the data streams to Amazon
OpenSearch Service. Use OpenSearch Service to search the data. Use Amazon QuickSight to
create visualizations.

Correct Answer: D

---

Question 969
A company currently runs an on-premises application that usesASP.NET on Linux machines.
The application is resource-intensive and serves customers directly.
The company wants to modernize the application to .NET. The company wants to run the
application on containers and to scale based on Amazon CloudWatch metrics. The company
also wants to reduce the time spent on operational maintenance activities.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS App2Container to containerize the application. Use an AWS CloudFormation
template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS
Fargate.

B. Use AWS App2Container to containerize the application. Use an AWS CloudFormation
template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on
Amazon EC2 instances.

C. Use AWS App Runner to containerize the application. Use App Runner to deploy the
application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.

D. Use AWS App Runner to containerize the application. Use App Runner to deploy the
application to Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2 instances.

Correct Answer: A

---

Question 970
A company is designing a new internal web application in the AWS Cloud. The new application
must securely retrieve and store multiple employee usernames and passwords from an AWS
managed service.
Which solution will meet these requirements with the LEAST operational overhead?

A. Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS
CloudFormation and the BatchGetSecretValue API to retrieve usernames and passwords from
Parameter Store.

B. Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and AWS
Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets
Manager.

C. Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS
CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and
passwords from Parameter Store.

D. Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and the
BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.

Correct Answer: D

---

Question 971
A company that is in the ap-northeast-1 Region has a fleet of thousands of AWS Outposts
servers. The company has deployed the servers at remote locations around the world. All the
servers regularly download new software versions that consist of 100 files. There is significant
latency before all servers run the new software versions.
The company must reduce the deployment latency for new software versions.
Which solution will meet this requirement with the LEAST operational overhead?

A. Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution in
ap-northeast-1 that includes a CachingDisabled cache policy. Configure the S3 bucket as the
origin. Download the software by using signed URLs.

B. Create an Amazon S3 bucket in ap-northeast-1. Create a second S3 bucket in the us-east-1
Region. Configure replication between the buckets. Set up an Amazon CloudFront distribution that
uses ap-northeast-1 as the primary origin and us-east-1 as the secondary origin. Download the
software by using signed URLs.

C. Create an Amazon S3 bucket in ap-northeast-1. Configure Amazon S3 Transfer Acceleration.
Download the software by using the S3 Transfer Acceleration endpoint.

D. Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution.
Configure the S3 bucket as the origin. Download the software by using signed URLs.

Correct Answer: D

---

Question 972
A company currently runs an on-premises stock trading application by using Microsoft Windows
Server. The company wants to migrate the application to the AWS Cloud.
The company needs to design a highly available solution that provides low-latency access to
block storage across multiple Availability Zones.
Which solution will meet these requirements with the LEAST implementation effort?

A. Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2
instances. Install the application on both cluster nodes. Use Amazon FSx for Windows File Server
as shared storage between the two cluster nodes.

B. Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2
instances. Install the application on both cluster nodes. Use Amazon Elastic Block Store (Amazon
EBS) General Purpose SSD (gp3) volumes as storage attached to the EC2 instances. Set up
application-level replication to sync data from one EBS volume in one Availability Zone to another
EBS volume in the second Availability Zone.

C. Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2
instance as active and the second EC2 instance in standby mode. Use an Amazon FSx for
NetApp ONTAP Multi-AZ file system to access the data by using Internet Small Computer
Systems Interface (iSCSI) protocol.

D. Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2
instance as active and the second EC2 instance in standby mode. Use Amazon Elastic Block
Store (Amazon EBS) Provisioned IOPS SSD (io2) volumes as storage attached to the EC2
instances. Set up Amazon EBS level replication to sync data from one io2 volume in one
Availability Zone to another io2 volume in the second Availability Zone.

Correct Answer: C

---

Question 973
A company is designing a web application with an internet-facing Application Load Balancer
(ALB).
The company needs the ALB to receive HTTPS web traffic from the public internet. The ALB
must send only HTTPS traffic to the web application servers hosted on the Amazon EC2
instances on port 443. The ALB must perform a health check of the web application servers over
HTTPS on port 8443.
Which combination of configurations of the security group that is associated with the ALB will
meet these requirements? (Choose three.)

A. Allow HTTPS inbound traffic from 0.0.0.0/0 for port 443.

B. Allow all outbound traffic to 0.0.0.0/0 for port 443.

C. Allow HTTPS outbound traffic to the web application instances for port 443.

D. Allow HTTPS inbound traffic from the web application instances for port 443.

E. Allow HTTPS outbound traffic to the web application instances for the health check on port
8443.

F. Allow HTTPS inbound traffic from the web application instances for the health check on port
8443.

Correct Answer: A, C, E

---

Question 974
A company hosts an application on AWS. The application gives users the ability to upload photos
and store the photos in an Amazon S3 bucket. The company wants to use Amazon CloudFront
and a custom domain name to upload the photo files to the S3 bucket in the eu-west-1 Region.
Which solution will meet these requirements? (Choose two.)

A. Use AWS Certificate Manager (ACM) to create a public certificate in the us-east-1 Region. Use
the certificate in CloudFront.

B. Use AWS Certificate Manager (ACM) to create a public certificate in eu-west-1. Use the
certificate in CloudFront.

C. Configure Amazon S3 to allow uploads from CloudFront. Configure S3 Transfer Acceleration.

D. Configure Amazon S3 to allow uploads from CloudFront origin access control (OAC).

E. Configure Amazon S3 to allow uploads from CloudFront. Configure an Amazon S3 website
endpoint.

Correct Answer: A, D

---

Question 975
A weather forecasting company collects temperature readings from various sensors on a
continuous basis. An existing data ingestion process collects the readings and aggregates the
readings into larger Apache Parquet files. Then the process encrypts the files by using client-side
encryption with KMS managed keys (CSE-KMS). Finally, the process writes the files to an
Amazon S3 bucket with separate prefixes for each calendar day.
The company wants to run occasional SQL queries on the data to take sample moving averages
for a specific calendar day.
Which solution will meet these requirements MOST cost-effectively?

A. Configure Amazon Athena to read the encrypted files. Run SQL queries on the data directly in
Amazon S3.

B. Use Amazon S3 Select to run SQL queries on the data directly in Amazon S3.

C. Configure Amazon Redshift to read the encrypted files. Use Redshift Spectrum and Redshift
query editor v2 to run SQL queries on the data directly in Amazon S3.

D. Configure Amazon EMR Serverless to read the encrypted files. Use Apache SparkSQL to run
SQL queries on the data directly in Amazon S3.

Correct Answer: A

---

Question 976
A company is implementing a new application on AWS. The company will run the application on
multiple Amazon EC2 instances across multiple Availability Zones within multiple AWS Regions.
The application will be available through the internet. Users will access the application from
around the world.
The company wants to ensure that each user who accesses the application is sent to the EC2
instances that are closest to the user’s location.
Which solution will meet these requirements?

A. Implement an Amazon Route 53 geolocation routing policy. Use an internet-facing Application
Load Balancer to distribute the traffic across all Availability Zones within the same Region.

B. Implement an Amazon Route 53 geoproximity routing policy. Use an internet-facing Network
Load Balancer to distribute the traffic across all Availability Zones within the same Region.

C. Implement an Amazon Route 53 multivalue answer routing policy. Use an internet-facing
Application Load Balancer to distribute the traffic across all Availability Zones within the same
Region.

D. Implement an Amazon Route 53 weighted routing policy. Use an internet-facing Network Load
Balancer to distribute the traffic across all Availability Zones within the same Region.

Correct Answer: B

---

Question 977
A financial services company plans to launch a new application on AWS to handle sensitive
financial transactions. The company will deploy the application on Amazon EC2 instances. The
company will use Amazon RDS for MySQL as the database. The company’s security policies
mandate that data must be encrypted at rest and in transit.
Which solution will meet these requirements with the LEAST operational overhead?

A. Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys.
Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.

B. Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys.
Configure IPsec tunnels for encryption in transit.

C. Implement third-party application-level data encryption before storing data in Amazon RDS for
MySQL. Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.

D. Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys.
Configure a VPN connection to enable private connectivity to encrypt data in transit.

Correct Answer: A

---

Question 978
A company is migrating its on-premises Oracle database to an Amazon RDS for Oracle
database. The company needs to retain data for 90 days to meet regulatory requirements. The
company must also be able to restore the database to a specific point in time for up to 14 days.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create Amazon RDS automated backups. Set the retention period to 90 days.

B. Create an Amazon RDS manual snapshot every day. Delete manual snapshots that are older
than 90 days.

C. Use the Amazon Aurora Clone feature for Oracle to create a point-in-time restore. Delete
clones that are older than 90 days.

D. Create a backup plan that has a retention period of 90 days by using AWS Backup for Amazon
RDS.

Correct Answer: D

---

Question 979
A company is developing a new application that uses a relational database to store user data
and application configurations. The company expects the application to have steady user growth.
The company expects the database usage to be variable and read-heavy, with occasional writes.
The company wants to cost-optimize the database solution. The company wants to use an AWS
managed database solution that will provide the necessary performance.
Which solution will meet these requirements MOST cost-effectively?

A. Deploy the database on Amazon RDS. Use Provisioned IOPS SSD storage to ensure
consistent performance for read and write operations.

B. Deploy the database on Amazon Aurora Serverless to automatically scale the database
capacity based on actual usage to accommodate the workload.

C. Deploy the database on Amazon DynamoDB. Use on-demand capacity mode to automatically
scale throughput to accommodate the workload.

D. Deploy the database on Amazon RDS. Use magnetic storage and use read replicas to
accommodate the workload.

Correct Answer: B

---

Question 980
A company hosts its application on several Amazon EC2 instances inside a VPC. The company
creates a dedicated Amazon S3 bucket for each customer to store their relevant information in
Amazon S3.
The company wants to ensure that the application running on EC2 instances can securely
access only the S3 buckets that belong to the company’s AWS account.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create a gateway endpoint for Amazon S3 that is attached to the VPC. Update the IAM
instance profile policy to provide access to only the specific buckets that the application needs.

B. Create a NAT gateway in a public subnet with a security group that allows access to only
Amazon S3. Update the route tables to use the NAT Gateway.

C. Create a gateway endpoint for Amazon S3 that is attached to the VPUpdate the IAM instance
profile policy with a Deny action and the following condition key:

D. Create a NAT Gateway in a public subnet. Update route tables to use the NAT Gateway.
Assign bucket policies for all buckets with a Deny action and the following condition key:

Correct Answer: C

---

Question 981
A company is building a cloud-based application on AWS that will handle sensitive customer
data. The application uses Amazon RDS for the database, Amazon S3 for object storage, and
S3 Event Notifications that invoke AWS Lambda for serverless processing.
The company uses AWS IAM Identity Center to manage user credentials. The development,
testing, and operations teams need secure access to Amazon RDS and Amazon S3 while
ensuring the confidentiality of sensitive customer data. The solution must comply with the
principle of least privilege.
Which solution meets these requirements with the LEAST operational overhead?

A. Use IAM roles with least privilege to grant all the teams access. Assign IAM roles to each team
with customized IAM policies defining specific permission for Amazon RDS and S3 object access
based on team responsibilities.

B. Enable IAM Identity Center with an Identity Center directory. Create and configure permission
sets with granular access to Amazon RDS and Amazon S3. Assign all the teams to groups that
have specific access with the permission sets.

C. Create individual IAM users for each member in all the teams with role-based permissions.
Assign the IAM roles with predefined policies for RDS and S3 access to each user based on user
needs. Implement IAM Access Analyzer for periodic credential evaluation.

D. Use AWS Organizations to create separate accounts for each team. Implement cross-account
IAM roles with least privilege. Grant specific permission for RDS and S3 access based on team
roles and responsibilities.

Correct Answer: B

---

Question 982
A company has an Amazon S3 bucket that contains sensitive data files. The company has an
application that runs on virtual machines in an on-premises data center. The company currently
uses AWS IAM Identity Center.
The application requires temporary access to files in the S3 bucket. The company wants to grant
the application secure access to the files in the S3 bucket.
Which solution will meet these requirements?

A. Create an S3 bucket policy that permits access to the bucket from the public IP address range
of the company’s on-premises data center.

B. Use IAM Roles Anywhere to obtain security credentials in IAM Identity Center that grant access
to the S3 bucket. Configure the virtual machines to assume the role by using the AWS CLI.

C. Install the AWS CLI on the virtual machine. Configure the AWS CLI with access keys from an
IAM user that has access to the bucket.

D. Create an IAM user and policy that grants access to the bucket. Store the access key and
secret key for the IAM user in AWS Secrets Manager. Configure the application to retrieve the
access key and secret key at startup.

Correct Answer: B

---

Question 983
A company hosts its core network services, including directory services and DNS, in its
on-premises data center. The data center is connected to the AWS Cloud using AWS Direct
Connect (DX). Additional AWS accounts are planned that will require quick, cost-effective, and
consistent access to these network services.
What should a solutions architect implement to meet these requirements with the LEAST amount
of operational overhead?

A. Create a DX connection in each new account. Route the network traffic to the on-premises
servers.

B. Configure VPC endpoints in the DX VPC for all required services. Route the network traffic to
the on-premises servers.

C. Create a VPN connection between each new account and the DX VPRoute the network traffic
to the on-premises servers.

D. Configure AWS Transit Gateway between the accounts. Assign DX to the transit gateway and
route network traffic to the on-premises servers.

Correct Answer: D

---

Question 984
A company hosts its main public web application in one AWS Region across multiple Availability
Zones. The application uses an Amazon EC2 Auto Scaling group and an Application Load
Balancer (ALB).
A web development team needs a cost-optimized compute solution to improve the company’s
ability to serve dynamic content globally to millions of customers.
Which solution will meet these requirements?

A. Create an Amazon CloudFront distribution. Configure the existing ALB as the origin.

B. Use Amazon Route 53 to serve traffic to the ALB and EC2 instances based on the geographic
location of each customer.

C. Create an Amazon S3 bucket with public read access enabled. Migrate the web application to
the S3 bucket. Configure the S3 bucket for website hosting.

D. Use AWS Direct Connect to directly serve content from the web application to the location of
each customer.

Correct Answer: A

---

Question 985
A company stores user data in AWS. The data is used continuously with peak usage during
business hours. Access patterns vary, with some data not being used for months at a time. A
solutions architect must choose a cost-effective solution that maintains the highest level of
durability while maintaining high availability.
Which storage solution meets these requirements?

A. Amazon S3 Standard

B. Amazon S3 Intelligent-Tiering

C. Amazon S3 Glacier Deep Archive

D. Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)

Correct Answer: B

---

Question 986
A company is testing an application that runs on an Amazon EC2 Linux instance. A single 500
GB Amazon Elastic Block Store (Amazon EBS) General Purpose SSO (gp2) volume is attached
to the EC2 instance.
The company will deploy the application on multiple EC2 instances in an Auto Scaling group. All
instances require access to the data that is stored in the EBS volume. The company needs a
highly available and resilient solution that does not introduce significant changes to the
application's code.
Which solution will meet these requirements?

A. Provision an EC2 instance that uses NFS server software. Attach a single 500 GB gp2 EBS
volume to the instance.

B. Provision an Amazon FSx for Windows File Server file system. Configure the file system as an
SMB file store within a single Availability Zone.

C. Provision an EC2 instance with two 250 GB Provisioned IOPS SSD EBS volumes.

D. Provision an Amazon Elastic File System (Amazon EFS) file system. Configure the file system
to use General Purpose performance mode.

Correct Answer: D

---

Question 987
A company recently launched a new application for its customers. The application runs on
multiple Amazon EC2 instances across two Availability Zones. End users use TCP to
communicate with the application.
The application must be highly available and must automatically scale as the number of users
increases.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

A. Add a Network Load Balancer in front of the EC2 instances.

B. Configure an Auto Scaling group for the EC2 instances.

C. Add an Application Load Balancer in front of the EC2 instances.

D. Manually add more EC2 instances for the application.

E. Add a Gateway Load Balancer in front of the EC2 instances.

Correct Answer: A, B

---

Question 988
A company is designing the architecture for a new mobile app that uses the AWS Cloud. The
company uses organizational units (OUs) in AWS Organizations to manage its accounts. The
company wants to tag Amazon EC2 instances with data sensitivity by using values of sensitive
and nonsensitive. IAM identities must not be able to delete a tag or create instances without a
tag.
Which combination of steps will meet these requirements? (Choose two.)

A. In Organizations, create a new tag policy that specifies the data sensitivity tag key and the
required values. Enforce the tag values for the EC2 instances. Attach the tag policy to the
appropriate OU.

B. In Organizations, create a new service control policy (SCP) that specifies the data sensitivity
tag key and the required tag values. Enforce the tag values for the EC2 instances. Attach the SCP
to the appropriate OU.

C. Create a tag policy to deny running instances when a tag key is not specified. Create another
tag policy that prevents identities from deleting tags. Attach the tag policies to the appropriate OU.

D. Create a service control policy (SCP) to deny creating instances when a tag key is not
specified. Create another SCP that prevents identities from deleting tags. Attach the SCPs to the
appropriate OU.

E. Create an AWS Config rule to check if EC2 instances use the data sensitivity tag and the
specified values. Configure an AWS Lambda function to delete the resource if a noncompliant
resource is found.

Correct Answer: A, D

---

Question 989
A company runs database workloads on AWS that are the backend for the company's customer
portals. The company runs a Multi-AZ database cluster on Amazon RDS for PostgreSQL.
The company needs to implement a 30-day backup retention policy. The company currently has
both automated RDS backups and manual RDS backups. The company wants to maintain both
types of existing RDS backups that are less than 30 days old.
Which solution will meet these requirements MOST cost-effectively?

A. Configure the RDS backup retention policy to 30 days for automated backups by using AWS
Backup. Manually delete manual backups that are older than 30 days.

B. Disable RDS automated backups. Delete automated backups and manual backups that are
older than 30 days. Configure the RDS backup retention policy to 30 days for automated backups.

C. Configure the RDS backup retention policy to 30 days for automated backups. Manually delete
manual backups that are older than 30 days.

D. Disable RDS automated backups. Delete automated backups and manual backups that are
older than 30 days automatically by using AWS CloudFormation. Configure the RDS backup
retention policy to 30 days for automated backups.

Correct Answer: C

---

Question 990
A company is planning to migrate a legacy application to AWS. The application currently uses
NFS to communicate to an on-premises storage solution to store application data. The
application cannot be modified to use any other communication protocols other than NFS for this
purpose.
Which storage solution should a solutions architect recommend for use after the migration?

A. AWS DataSync

B. Amazon Elastic Block Store (Amazon EBS)

C. Amazon Elastic File System (Amazon EFS)

D. Amazon EMR File System (Amazon EMRFS)

Correct Answer: C

---

Question 991
A company uses GPS trackers to document the migration patterns of thousands of sea turtles.
The trackers check every 5 minutes to see if a turtle has moved more than 100 yards (91.4
meters). If a turtle has moved, its tracker sends the new coordinates to a web application running
on three Amazon EC2 instances that are in multiple Availability Zones in one AWS Region.
Recently, the web application was overwhelmed while processing an unexpected volume of
tracker data. Data was lost with no way to replay the events. A solutions architect must prevent
this problem from happening again and needs a solution with the least operational overhead.
What should the solutions architect do to meet these requirements?

A. Create an Amazon S3 bucket to store the data. Configure the application to scan for new data
in the bucket for processing.

B. Create an Amazon API Gateway endpoint to handle transmitted location coordinates. Use an
AWS Lambda function to process each item concurrently.

C. Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming data.
Configure the application to poll for new messages for processing.

D. Create an Amazon DynamoDB table to store transmitted location coordinates. Configure the
application to query the table for new data for processing. Use TTL to remove data that has been
processed.

Correct Answer: C

---

Question 992
A company's software development team needs an Amazon RDS Multi-AZ cluster. The RDS
cluster will serve as a backend for a desktop client that is deployed on premises. The desktop
client requires direct connectivity to the RDS cluster.
The company must give the development team the ability to connect to the cluster by using the
client when the team is in the office.
Which solution provides the required connectivity MOST securely?

A. Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Use AWS
Site-to-Site VPN with a customer gateway in the company's office.

B. Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use
AWS Site-to-Site VPN with a customer gateway in the company's office.

C. Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use RDS
security groups to allow the company's office IP ranges to access the cluster.

D. Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Create a
cluster user for each developer. Use RDS security groups to allow the users to access the cluster.

Correct Answer: B

---

Question 993
A solutions architect is creating an application that will handle batch processing of large amounts
of data. The input data will be held in Amazon S3 and the output data will be stored in a different
S3 bucket. For processing, the application will transfer the data over the network between
multiple Amazon EC2 instances.
What should the solutions architect do to reduce the overall data transfer costs?

A. Place all the EC2 instances in an Auto Scaling group.

B. Place all the EC2 instances in the same AWS Region.

C. Place all the EC2 instances in the same Availability Zone.

D. Place all the EC2 instances in private subnets in multiple Availability Zones.

Correct Answer: C

---

Question 994
A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for
storage. The application tier is hosted on Amazon EC2 instances. The company's IT security
guidelines mandate that the database credentials be encrypted and rotated every 14 days.
What should a solutions architect do to meet this requirement with the LEAST operational effort?

A. Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets
Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate
the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days.

B. Create two parameters in AWS Systems Manager Parameter Store: one for the user name as a
string parameter and one that uses the SecureString type for the password. Select AWS Key
Management Service (AWS KMS) encryption for the password parameter, and load these
parameters in the application tier. Implement an AWS Lambda function that rotates the password
every 14 days.

C. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS)
encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all
EC2 instances of the application tier. Restrict the access to the file on the file system so that the
application can read the file and that only super users can modify the file. Implement an AWS
Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the
file.

D. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS)
encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to
the application regularly to ensure that the correct credentials are used. Implement an AWS
Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials
to the file in the S3 bucket.

Correct Answer: A

---

Question 995
A streaming media company is rebuilding its infrastructure to accommodate increasing demand
for video content that users consume daily.
The company needs to process terabyte-sized videos to block some content in the videos. Video
processing can take up to 20 minutes.
The company needs a solution that will scale with demand and remain cost-effective.
Which solution will meet these requirements?

A. Use AWS Lambda functions to process videos. Store video metadata in Amazon DynamoDB.
Store video content in Amazon S3 Intelligent-Tiering.

B. Use Amazon Elastic Container Service (Amazon ECS) and AWS Fargate to implement
microservices to process videos. Store video metadata in Amazon Aurora. Store video content in
Amazon S3 Intelligent-Tiering.

C. Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer
(ALB) to process videos. Store video content in Amazon S3 Standard. Use Amazon Simple Queue
Service (Amazon SQS) for queuing and to decouple processing tasks.

D. Deploy a containerized video processing application on Amazon Elastic Kubernetes Service
(Amazon EKS) on Amazon EC2. Store video metadata in Amazon RDS in a single Availability
Zone. Store video content in Amazon S3 Glacier Deep Archive.

Correct Answer: B

---

Question 996
A company runs an on-premises application on a Kubernetes cluster. The company recently
added millions of new customers. The company's existing on-premises infrastructure is unable to
handle the large number of new customers. The company needs to migrate the on-premises
application to the AWS Cloud.
The company will migrate to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The
company does not want to manage the underlying compute infrastructure for the new
architecture on AWS.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use a self-managed node to supply compute capacity. Deploy the application to the new EKS
cluster.

B. Use managed node groups to supply compute capacity. Deploy the application to the new EKS
cluster.

C. Use AWS Fargate to supply compute capacity. Create a Fargate profile. Use the Fargate profile
to deploy the application.

D. Use managed node groups with Karpenter to supply compute capacity. Deploy the application
to the new EKS cluster.

Correct Answer: C

---

Question 997
A company is launching a new application that requires a structured database to store user
profiles, application settings, and transactional data. The database must be scalable with
application traffic and must offer backups.
Which solution will meet these requirements MOST cost-effectively?

A. Deploy a self-managed database on Amazon EC2 instances by using open source software.
Use Spot Instances for cost optimization. Configure automated backups to Amazon S3.

B. Use Amazon RDS. Use on-demand capacity mode for the database with General Purpose SSD
storage. Configure automatic backups with a retention period of 7 days.

C. Use Amazon Aurora Serverless for the database. Use serverless capacity scaling. Configure
automated backups to Amazon S3.

D. Deploy a self-managed NoSQL database on Amazon EC2 instances. Use Reserved Instances
for cost optimization. Configure automated backups directly to Amazon S3 Glacier Flexible
Retrieval.

Correct Answer: C

---

Question 998
A company runs its legacy web application on AWS. The web application server runs on an
Amazon EC2 instance in the public subnet of a VPC. The web application server collects images
from customers and stores the image files in a locally attached Amazon Elastic Block Store
(Amazon EBS) volume. The image files are uploaded every night to an Amazon S3 bucket for
backup.
A solutions architect discovers that the image files are being uploaded to Amazon S3 through the
public endpoint. The solutions architect needs to ensure that traffic to Amazon S3 does not use
the public endpoint.
Which solution will meet these requirements?

A. Create a gateway VPC endpoint for the S3 bucket that has the necessary permissions for the
VPC. Configure the subnet route table to use the gateway VPC endpoint.

B. Move the S3 bucket inside the VPC. Configure the subnet route table to access the S3 bucket
through private IP addresses.

C. Create an Amazon S3 access point for the Amazon EC2 instance inside the VPConfigure the
web application to upload by using the Amazon S3 access point.

D. Configure an AWS Direct Connect connection between the VPC that has the Amazon EC2
instance and Amazon S3 to provide a dedicated network path.

Correct Answer: A

---

Question 999
A company is creating a prototype of an ecommerce website on AWS. The website consists of
an Application Load Balancer, an Auto Scaling group of Amazon EC2 instances for web servers,
and an Amazon RDS for MySQL DB instance that runs with the Single-AZ configuration.
The website is slow to respond during searches of the product catalog. The product catalog is a
group of tables in the MySQL database that the company does not update frequently. A solutions
architect has determined that the CPU utilization on the DB instance is high when product
catalog searches occur.
What should the solutions architect recommend to improve the performance of the website
during searches of the product catalog?

A. Migrate the product catalog to an Amazon Redshift database. Use the COPY command to load
the product catalog tables.

B. Implement an Amazon ElastiCache for Redis cluster to cache the product catalog. Use lazy
loading to populate the cache.

C. Add an additional scaling policy to the Auto Scaling group to launch additional EC2 instances
when database response is slow.

D. Turn on the Multi-AZ configuration for the DB instance. Configure the EC2 instances to throttle
the product catalog queries that are sent to the database.

Correct Answer: B
