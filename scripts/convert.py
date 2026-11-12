#!/usr/bin/env python3
"""
AWS SAA-C03 Study Repository - MarkItDown Converter & Knowledge Enricher
Parses raw PDF documents into Markdown, structures them into modular study files,
and appends structured architectural concept notes and answer explanations in
GitHub Flavored Markdown info callouts (> [!NOTE]).
"""

import os
import re
import sys
from pathlib import Path
from markitdown import MarkItDown


CONTENT_DIR = Path("../content")
OUTPUT_DIR = Path("../notes")

# Core AWS SAA-C03 Architectural Concept Knowledge Base
CONCEPT_RULES = [
    # Storage & S3
    (
        r"Transfer Acceleration",
        "Amazon S3 Transfer Acceleration",
        "Uses Amazon CloudFront's globally distributed Edge Locations to route uploads over the optimized AWS private network backbone, dramatically reducing geographic transfer latency."
    ),
    (
        r"multipart upload",
        "S3 Multipart Upload",
        "Parallelizes large file uploads, recommended for objects > 100 MB and required for objects > 5 GB. Improves throughput and failure recovery."
    ),
    (
        r"Glacier (Deep Archive|Instant|Flexible)?",
        "Amazon S3 Glacier Storage Classes",
        "Glacier Instant Retrieval delivers millisecond access for rare access; Flexible Retrieval provides 1-5 minute expedited or 3-5 hour standard access; Deep Archive offers lowest cost for long-term retention with 12-hour retrieval."
    ),
    (
        r"lifecycle (rule|policy|configuration)",
        "S3 Lifecycle Management",
        "Automatically transitions objects across storage tiers based on age or access patterns to minimize storage costs without operational overhead."
    ),
    (
        r"Object Lock|WORM|compliance mode|governance mode",
        "S3 Object Lock (WORM)",
        "Enforces Write Once Read Many (WORM) storage. Compliance mode prevents object deletion by any user including the root account; Governance mode allows specific IAM permissions to override."
    ),
    (
        r"Cross-Region Replication|CRR",
        "S3 Cross-Region Replication (CRR)",
        "Provides asynchronous automatic replication of objects across buckets in different AWS Regions for disaster recovery and low-latency global access (requires S3 Versioning)."
    ),
    (
        r"Amazon Athena|Athena",
        "Amazon Athena Serverless Analytics",
        "Enables serverless, interactive SQL querying directly on unstructured and semi-structured data stored in Amazon S3 with zero infrastructure overhead."
    ),
    (
        r"Elastic File System|Amazon EFS|EFS",
        "Amazon EFS Shared File Storage",
        "Provides a serverless, multi-AZ POSIX-compliant shared file system concurrently mountable by hundreds of Linux EC2 instances across multiple Availability Zones."
    ),
    (
        r"FSx for Windows|FSx for Lustre|Amazon FSx",
        "Amazon FSx Managed File Systems",
        "FSx for Windows provides fully managed native SMB file shares with Active Directory integration. FSx for Lustre delivers ultra-high-throughput sub-millisecond storage for compute-intensive HPC and machine learning."
    ),
    (
        r"Storage Gateway|File Gateway|Volume Gateway",
        "AWS Storage Gateway",
        "Connects on-premises environments to cloud storage. S3 File Gateway exposes S3 via NFS/SMB caching; Volume Gateway provides iSCSI block storage backed by EBS snapshots."
    ),

    # Compute & Autoscaling
    (
        r"Auto Scaling|target tracking|scaling policy",
        "EC2 Auto Scaling & Target Tracking",
        "Target Tracking scaling policies dynamically adjust ASG capacity to maintain a specific metric (e.g. 50% average CPU utilization or request count per target) with minimal manual tuning."
    ),
    (
        r"Spot Instance|Spot Fleet",
        "Amazon EC2 Spot Instances",
        "Offers up to 90% discount on spare EC2 capacity. Ideal for stateless, fault-tolerant, batch, and flexible workloads that can withstand instance termination with a 2-minute notice."
    ),
    (
        r"placement group|cluster placement|spread placement|partition placement",
        "EC2 Placement Groups",
        "Cluster groups pack instances close together inside a single AZ for low-latency 10 Gbps networking; Spread groups strictly isolate instances on distinct hardware racks across AZs for high availability."
    ),
    (
        r"AWS Lambda|Lambda function|serverless compute",
        "AWS Lambda Serverless Execution",
        "Runs stateless event-driven code scaling automatically from zero with sub-second billing. Maximum execution duration is 15 minutes."
    ),
    (
        r"ECS|Fargate|Amazon Elastic Container Service",
        "AWS Fargate Serverless Containers",
        "AWS Fargate removes the operational burden of provisioning, configuring, and scaling EC2 container hosts, paying only for the compute resources used by running tasks."
    ),

    # Databases & Caching
    (
        r"Multi-AZ deployment|Multi-AZ DB",
        "Amazon RDS Multi-AZ High Availability",
        "Synchronously replicates data to a standby DB instance in another Availability Zone for automated failover. Crucially, the standby instance cannot serve active read queries."
    ),
    (
        r"Read Replica|read replicas",
        "Amazon RDS Read Replicas",
        "Asynchronously replicates primary database transactions to offload read-heavy reporting and analytics workloads across local AZs or remote AWS Regions."
    ),
    (
        r"Aurora Global Database|Amazon Aurora",
        "Amazon Aurora High Availability & Global DB",
        "Replicates 6 copies of data across 3 Availability Zones natively. Aurora Global Database provides dedicated multi-region relational clustering with storage-level replication latency under 1 second."
    ),
    (
        r"DynamoDB|Amazon DynamoDB",
        "Amazon DynamoDB NoSQL",
        "Fully managed NoSQL database providing single-digit millisecond response times at any scale with options for On-Demand capacity and automated global multi-region replication via Global Tables."
    ),
    (
        r"DAX|DynamoDB Accelerator",
        "Amazon DynamoDB Accelerator (DAX)",
        "In-memory write-through cache designed specifically for DynamoDB, reducing read latency from milliseconds down to microseconds for read-intensive applications."
    ),
    (
        r"ElastiCache|Redis|Memcached",
        "Amazon ElastiCache In-Memory Caching",
        "ElastiCache Redis delivers high-performance in-memory caching with data persistence, replication, and multi-AZ failover; Memcached provides simple multi-threaded object caching."
    ),

    # Networking & Security
    (
        r"gateway VPC endpoint|gateway endpoint",
        "VPC Gateway Endpoints",
        "Configured directly in VPC route tables to provide private, high-bandwidth, and completely free network routing from EC2 to Amazon S3 and DynamoDB without needing a NAT Gateway or Internet Gateway."
    ),
    (
        r"interface (VPC )?endpoint|PrivateLink",
        "AWS PrivateLink & Interface Endpoints",
        "Provisions private IP Elastic Network Interfaces (ENIs) inside subnets to privately connect VPC workloads to AWS services or SaaS partner solutions over private backbone networking."
    ),
    (
        r"Transit Gateway|AWS Transit Gateway",
        "AWS Transit Gateway Hub-and-Spoke",
        "Serves as a centralized network transit hub interconnecting thousands of VPCs and on-premises networks, eliminating complex full-mesh VPC peering topologies and supporting transitive routing."
    ),
    (
        r"Direct Connect|AWS Direct Connect",
        "AWS Direct Connect (DX)",
        "Establishes a dedicated, private physical fiber-optic connection from an on-premises data center to AWS, bypassing the public internet for consistent network performance and lower egress costs."
    ),
    (
        r"Route 53|geolocation|geoproximity|latency-based|failover routing",
        "Amazon Route 53 Intelligent Routing",
        "Offers advanced DNS routing policies: Geolocation routes by user location/region, Latency-based routes to the AWS Region with the lowest latency, and Failover provides active-passive health-checked disaster recovery."
    ),
    (
        r"CloudFront|Origin Access Control|OAC|OAI",
        "Amazon CloudFront & Origin Access Control",
        "Global Content Delivery Network (CDN) caching content at edge locations. Origin Access Control (OAC) restricts direct public access to S3 origins so users must traverse CloudFront."
    ),
    (
        r"Signed URL|Signed Cookie",
        "CloudFront Signed URLs vs Signed Cookies",
        "Signed URLs provide time-limited access to individual protected files or streaming manifests. Signed Cookies provide access to multiple premium files without altering application URLs."
    ),
    (
        r"Application Load Balancer|ALB",
        "Application Load Balancer (ALB Layer 7)",
        "Distributes HTTP/HTTPS traffic using Layer 7 advanced routing (URL host/path, query parameters, HTTP headers), integrated with AWS WAF, SSL offloading, and container target groups."
    ),
    (
        r"Network Load Balancer|NLB",
        "Network Load Balancer (NLB Layer 4)",
        "Ultra-high-performance Layer 4 load balancer handling millions of requests per second with ultra-low latency and dedicated static/Elastic IP support."
    ),
    (
        r"AWS Organizations|Service Control Policy|SCP",
        "AWS Organizations & Service Control Policies (SCPs)",
        "Centralizes account management, consolidated billing, and governance. SCPs establish maximum permission boundaries across accounts and Organizational Units (OUs) without directly granting permissions."
    ),
    (
        r"AWS KMS|Customer Managed Key|CMK|KMS key",
        "AWS Key Management Service (KMS)",
        "Provides centralized envelope encryption, automated annual key rotation, and granular auditability via AWS CloudTrail."
    ),
    (
        r"Secrets Manager",
        "AWS Secrets Manager",
        "Enables secure storage and automated rotation of database credentials, API keys, and sensitive tokens with native Amazon RDS integration."
    ),
    (
        r"Systems Manager Parameter Store|SSM Parameter",
        "AWS Systems Manager Parameter Store",
        "Hierarchical storage for configuration parameters, environment variables, and encrypted passwords. Offers standard (free) and advanced tiers."
    ),
    (
        r"AWS WAF|Web Application Firewall",
        "AWS WAF Web Application Protection",
        "Inspects web traffic at Layer 7 to block common exploits such as SQL injection, Cross-Site Scripting (XSS), bot scrapers, and rate-based DDoS attacks on CloudFront, ALB, and API Gateway."
    ),

    # Messaging & Integration
    (
        r"Amazon SQS|SQS queue|FIFO queue",
        "Amazon SQS Queuing Architecture",
        "Decouples application components. Standard queues provide virtually unlimited throughput with at-least-once delivery; FIFO queues guarantee strict ordering and exactly-once processing (up to 3,000 msgs/sec with batching)."
    ),
    (
        r"Amazon SNS|SNS topic|fanout",
        "Amazon SNS Pub/Sub & Fanout Pattern",
        "High-throughput pub/sub messaging. The fanout pattern publishes messages to an SNS topic that synchronously distributes them to multiple subscribed SQS queues for parallel, asynchronous processing."
    ),
    (
        r"Kinesis Data Streams|Kinesis Firehose",
        "Amazon Kinesis Real-Time Streaming",
        "Kinesis Data Streams ingests massive real-time event streams with custom processing and multi-consumer replay. Kinesis Data Firehose provides near-real-time managed ingestion directly into S3, Redshift, or OpenSearch."
    ),
    (
        r"AWS Step Functions",
        "AWS Step Functions Distributed Orchestration",
        "Visual workflow orchestrator coordinating distributed microservices, Lambda functions, and long-running batch jobs with automated retry logic and state persistence."
    ),
    (
        r"AWS DataSync",
        "AWS DataSync Accelerated Migration",
        "Automated, hardware-accelerated data transfer service between on-premises storage systems (NFS, SMB, object) and AWS storage (S3, EFS, FSx) with end-to-end data integrity validation."
    ),
]


def clean_markdown_text(text: str) -> str:
    """Cleans up form feeds and excessive line breaks."""
    text = text.replace("\x0c", "\n\n")
    text = re.sub(r"\n{4,}", "\n\n\n", text)
    return text.strip() + "\n"


def parse_options(q_text: str) -> dict:
    """Extracts multiple-choice options A-F from question text."""
    options = {}
    opt_matches = list(re.finditer(r'(?m)^([A-F])[\.\)]\s+(.*?)(?=(?:^[A-F][\.\)]|\n(?:Correct Answer|CEVAP):|\Z))', q_text, re.DOTALL))
    for m in opt_matches:
        options[m.group(1)] = re.sub(r'\s+', ' ', m.group(2)).strip()
    return options


def generate_concept_callout(q_text: str, ans_letters: str, options: dict) -> str:
    """Generates a structured GitHub alert (> [!NOTE]) block for a question."""
    letters = re.findall(r'[A-F]', ans_letters)
    selected_solutions = [options[l] for l in letters if l in options]
    solution_summary = " ".join(selected_solutions).strip()

    # Detect matching concepts from knowledge base
    matched_rules = []
    combined_text = q_text + " " + solution_summary
    for pattern, title, explanation in CONCEPT_RULES:
        if re.search(pattern, combined_text, re.IGNORECASE):
            matched_rules.append((title, explanation))
            if len(matched_rules) >= 2:
                break

    lines = [
        "> [!NOTE]",
        "> ### 💡 Key AWS Concept & Architectural Explanation",
        f"> - **Correct Answer:** `{ans_letters}`",
    ]

    if solution_summary:
        lines.append(f"> - **Recommended Solution:** {solution_summary}")

    if matched_rules:
        lines.append(">")
        lines.append("> **Exam Concept Summary:**")
        for title, explanation in matched_rules:
            lines.append(f"> - **{title}:** {explanation}")
    else:
        # Fallback general architectural guidance
        lines.append(">")
        lines.append("> **Exam Concept Summary:**")
        lines.append("> - **AWS Architecture Best Practice:** Prioritize fully managed, serverless, and native services that minimize operational overhead while fulfilling high-availability and security requirements.")

    return "\n".join(lines)


def enrich_question_bank_1019(text: str):
    """Parses 1019 questions, generates concept callouts, and returns enriched questions dict."""
    questions = re.split(r'(?m)(?=^Question \d+\b)', text)
    enriched_questions = []
    q_map = {}

    for q in questions:
        q_strip = q.strip()
        if not q_strip:
            continue

        q_num_m = re.match(r'^Question\s+(\d+)\b', q_strip)
        ans_m = re.search(r'Correct Answer:\s*([A-F,\s]+)', q_strip)

        if q_num_m and ans_m:
            q_num = int(q_num_m.group(1))
            ans_str = ans_m.group(1).strip()
            options = parse_options(q_strip)
            callout = generate_concept_callout(q_strip, ans_str, options)

            # Replace raw 'Correct Answer: X' with the rich info callout
            enriched = q_strip.replace(ans_m.group(0), callout)
            enriched_questions.append(enriched)
            q_map[q_num] = callout
        else:
            enriched_questions.append(q_strip)

    return "\n\n---\n\n".join(enriched_questions), q_map


def enrich_module_01(text: str, q_map: dict):
    """Enriches module 01 using matched answers and concept callouts from q_map."""
    questions = re.split(r'(?m)(?=^\s*Question\s*#\d+)', text)
    enriched_questions = []

    for q in questions:
        q_strip = q.strip()
        if not q_strip:
            continue

        q_num_m = re.search(r'Question\s*#(\d+)', q_strip)
        if q_num_m:
            q_num = int(q_num_m.group(1))
            callout = q_map.get(q_num)
            if callout:
                enriched = q_strip + "\n\n" + callout
                enriched_questions.append(enriched)
            else:
                enriched_questions.append(q_strip)
        else:
            enriched_questions.append(q_strip)

    return "\n\n---\n\n".join(enriched_questions)


def enrich_turkish_caa(text: str):
    """Formats Turkish explanation blocks into GitHub alert callouts (> [!NOTE])."""
    questions = re.split(r'(?m)(?=^\s*Soru\s+\d+\s*/\s*\d+)', text)
    enriched_questions = []

    for q in questions:
        q_strip = q.strip()
        if not q_strip:
            continue

        cevap_m = re.search(r'CEVAP:\s*([A-F])', q_strip)
        if cevap_m:
            cevap = cevap_m.group(1)
            # Extract explanation, links, verification
            aciklama_m = re.search(r'Açıklama:\s*(.*?)(?=\n(?:Kaynak:|Doğrulama:|Not:|\Z))', q_strip, re.DOTALL)
            kaynak_m = re.search(r'Kaynak:\s*(.*?)(?=\n(?:Doğrulama:|Not:|\Z))', q_strip, re.DOTALL)

            aciklama = aciklama_m.group(1).strip() if aciklama_m else ""
            kaynak_text = kaynak_m.group(1).strip() if kaynak_m else ""

            # Extract URLs
            urls = re.findall(r'https?://[^\s,]+', kaynak_text)

            callout = [
                "> [!NOTE]",
                "> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması",
                f"> - **Doğru Seçenek:** `{cevap}`",
            ]
            if aciklama:
                # Wrap explanation cleanly inside callout
                wrapped_expl = re.sub(r'\s+', ' ', aciklama)
                callout.append(f"> - **Kısa Konu Anlatımı & Gerekçe:** {wrapped_expl}")

            if urls:
                callout.append("> - **Resmi AWS Dokümantasyonu:**")
                for u in urls:
                    callout.append(f">   - [{u}]({u})")

            callout_str = "\n".join(callout)

            # Strip the old raw CEVAP/Açıklama block and append structured callout
            raw_block_m = re.search(r'CEVAP:\s*([A-F]).*', q_strip, re.DOTALL)
            if raw_block_m:
                base_q = q_strip[:raw_block_m.start()].strip()
                enriched = base_q + "\n\n" + callout_str
                enriched_questions.append(enriched)
            else:
                enriched_questions.append(q_strip + "\n\n" + callout_str)
        else:
            enriched_questions.append(q_strip)

    return "\n\n---\n\n".join(enriched_questions)


def split_into_sections(text: str, split_regex: str, chunk_size: int = 100):
    """Splits markdown content into logical chunks based on regex boundaries."""
    parts = re.split(split_regex, text)
    header = ""
    questions = []

    if parts:
        if not re.search(r"(Question|Soru)", parts[0], re.IGNORECASE):
            header = parts[0].strip()
            questions = [p.strip() for p in parts[1:] if p.strip()]
        else:
            questions = [p.strip() for p in parts if p.strip()]

    chunks = []
    for i in range(0, len(questions), chunk_size):
        chunk = questions[i : i + chunk_size]
        chunks.append(
            {
                "index": (i // chunk_size) + 1,
                "start": i + 1,
                "end": min(i + chunk_size, len(questions)),
                "content": "\n\n---\n\n".join(chunk),
            }
        )

    return header, questions, chunks


def generate_folder_readme(meta: dict, total_questions: int, chunks: list) -> str:
    """Generates an index README file for the specific notes folder."""
    lines = [
        "[← Back to Root Repository](../../README.md)",
        "",
        f"# {meta['title']}",
        "",
        meta["desc"],
        "",
        "## Metadata",
        "",
        "| Property | Value |",
        "| :--- | :--- |",
        f"| Total Questions / Items | {total_questions:,} |",
        "| Consolidated File | [`notes.md`](./notes.md) |",
        f"| Chunk Size | {meta.get('chunk_size', 50)} questions per section |",
        "",
        "## Sections and Study Progress",
        "",
        "Track completed sections using the checkboxes below:",
        "",
    ]

    for chunk in chunks:
        idx = chunk["index"]
        start = chunk["start"]
        end = chunk["end"]
        filename = f"section-{idx:02d}-questions-{start:04d}-{end:04d}.md"
        lines.append(
            f"- [ ] **Section {idx:02d}** (Questions {start} - {end}) ➔ [`sections/{filename}`](./sections/{filename})"
        )

    lines.append("")
    return "\n".join(lines)


def write_module_files(folder_name: str, meta: dict, enriched_text: str):
    """Saves consolidated notes.md, chunked sections, and module README.md."""
    out_folder = OUTPUT_DIR / folder_name
    out_folder.mkdir(parents=True, exist_ok=True)
    sections_folder = out_folder / "sections"
    sections_folder.mkdir(parents=True, exist_ok=True)

    # 1. Consolidated notes.md
    full_md_path = out_folder / "notes.md"
    full_md_path.write_text(enriched_text, encoding="utf-8")
    print(f"  -> {full_md_path} written ({len(enriched_text):,} characters).")

    # 2. Sections
    header, questions, chunks = split_into_sections(
        enriched_text, meta["split_regex"], chunk_size=meta.get("chunk_size", 100)
    )

    if chunks:
        for chunk in chunks:
            idx = chunk["index"]
            start = chunk["start"]
            end = chunk["end"]
            part_filename = f"section-{idx:02d}-questions-{start:04d}-{end:04d}.md"
            part_path = sections_folder / part_filename

            part_content = (
                f"# {meta['title']} - Section {idx:02d}\n\n"
                f"> **Question Range:** {start} - {end} of {len(questions)}\n\n"
                f"[← Module Index](../README.md) | [📖 Consolidated Notes](../notes.md)\n\n"
                f"---\n\n"
                f"{chunk['content']}\n"
            )
            part_path.write_text(part_content, encoding="utf-8")

        print(f"  -> Created {len(chunks)} section files under 'sections/'.")

    # 3. README.md
    readme_content = generate_folder_readme(meta, len(questions), chunks)
    (out_folder / "README.md").write_text(readme_content, encoding="utf-8")
    print(f"  -> {out_folder / 'README.md'} created.")


def main():
    if not CONTENT_DIR.exists():
        print(f"Error: '{CONTENT_DIR}' directory does not exist.")
        sys.exit(1)

    print("Step 1: Ingesting raw PDFs with MarkItDown...")
    md_converter = MarkItDown()

    raw_texts = {}
    for pdf_name in [
        "AWS-SAA-C03.pdf",
        "AWS Certified Solutions Architect Associate SAA-C03.pdf",
        "caasinav_sorular.pdf",
    ]:
        pdf_path = CONTENT_DIR / pdf_name
        if pdf_path.exists():
            print(f"  -> Converting {pdf_name}...")
            res = md_converter.convert(str(pdf_path))
            raw_texts[pdf_name] = clean_markdown_text(res.text_content)

    print("\nStep 2: Knowledge enrichment & architectural callouts...")

    # Enrich 02 (Question Bank 1019)
    print("  -> Generating architectural info callouts for 02-aws-saa-c03-question-bank-1019...")
    enriched_1019, q_map = enrich_question_bank_1019(raw_texts["AWS-SAA-C03.pdf"])
    write_module_files(
        "02-aws-saa-c03-question-bank-1019",
        {
            "title": "AWS SAA-C03 Comprehensive Question Bank (1019 Questions with Answers)",
            "desc": "Extensive collection of 1019 practice questions with correct answers and architectural concept callouts.",
            "split_regex": r"(?m)(?=^\s*Question\s+\d+\b)",
            "chunk_size": 100,
        },
        enriched_1019,
    )

    # Enrich 01 (Scenarios 684) using mapped answers and callouts
    print("  -> Enriching 01-aws-certified-solutions-architect-associate-saa-c03 with mapped concepts...")
    enriched_684 = enrich_module_01(raw_texts["AWS Certified Solutions Architect Associate SAA-C03.pdf"], q_map)
    write_module_files(
        "01-aws-certified-solutions-architect-associate-saa-c03",
        {
            "title": "AWS Certified Solutions Architect Associate (SAA-C03) - Scenario and Practice Notes",
            "desc": "Practice questions and architectural scenarios for the AWS SAA-C03 examination, annotated with concept notes.",
            "split_regex": r"(?m)(?=^\s*Question\s*#\d+)",
            "chunk_size": 100,
        },
        enriched_684,
    )

    # Enrich 03 (Turkish Explained Questions)
    print("  -> Structuring Turkish solution callouts for 03-caa-exam-questions-explained...")
    enriched_caa = enrich_turkish_caa(raw_texts["caasinav_sorular.pdf"])
    write_module_files(
        "03-caa-exam-questions-explained",
        {
            "title": "CAA Exam Questions - Annotated with Official References",
            "desc": "63 exam questions accompanied by detailed Turkish explanations, concept summaries, and official AWS documentation references.",
            "split_regex": r"(?m)(?=^\s*Soru\s+\d+\s*/\s*\d+)",
            "chunk_size": 25,
        },
        enriched_caa,
    )

    print("\n✅ All notes enriched with structured architectural concept info blocks successfully!")


if __name__ == "__main__":
    main()
