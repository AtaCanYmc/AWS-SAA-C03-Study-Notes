#!/usr/bin/env python3
"""
AWS SAA-C03 Questions Exporter
Extracts structured question records from markdown notes into JSON format
for the interactive quiz PWA.
"""

import json
import re
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
NOTES_DIR = BASE_DIR / "notes"
OUTPUT_FILE = BASE_DIR / "web" / "src" / "data" / "questions.json"

AWS_SERVICES = [
    ("Amazon S3", [r"\bS3\b", r"\bGlacier\b", r"\bTransfer Acceleration\b", r"\bBucket\b"]),
    ("Amazon EC2", [r"\bEC2\b", r"\bSpot Instance", r"\bPlacement Group\b", r"\bAuto Scaling\b"]),
    ("AWS Lambda", [r"\bLambda\b", r"\bServerless\b"]),
    ("Amazon ECS/EKS", [r"\bECS\b", r"\bFargate\b", r"\bEKS\b", r"\bContainer\b"]),
    ("Amazon RDS", [r"\bRDS\b", r"\bMulti-AZ\b", r"\bRead Replica\b"]),
    ("Amazon Aurora", [r"\bAurora\b", r"\bAurora Serverless\b", r"\bGlobal Database\b"]),
    ("Amazon DynamoDB", [r"\bDynamoDB\b", r"\bDAX\b"]),
    ("Amazon VPC", [r"\bVPC\b", r"\bSubnet\b", r"\bNAT Gateway\b", r"\bTransit Gateway\b", r"\bInternet Gateway\b"]),
    ("AWS IAM", [r"\bIAM\b", r"\bRole\b", r"\bSCP\b", r"\bOrganizations\b"]),
    ("AWS KMS & Security", [r"\bKMS\b", r"\bSecrets Manager\b", r"\bWAF\b", r"\bShield\b", r"\bSecurity Group\b"]),
    ("Amazon Route 53", [r"\bRoute 53\b", r"\bDNS\b", r"\bLatency routing\b", r"\bFailover routing\b"]),
    ("Amazon CloudFront", [r"\bCloudFront\b", r"\bEdge Location\b", r"\bCDN\b", r"\bOAI\b", r"\bOAC\b"]),
    ("Messaging (SQS/SNS)", [r"\bSQS\b", r"\bSNS\b", r"\bEventBridge\b", r"\bStep Functions\b"]),
    ("Storage (EFS/FSx/EBS)", [r"\bEFS\b", r"\bFSx\b", r"\bEBS\b", r"\bStorage Gateway\b"]),
    ("Analytics & Monitoring", [r"\bCloudWatch\b", r"\bCloudTrail\b", r"\bAthena\b", r"\bKinesis\b", r"\bQuickSight\b"]),
]

def detect_services(text: str):
    found = []
    for svc_name, patterns in AWS_SERVICES:
        if any(re.search(p, text, re.IGNORECASE) for p in patterns):
            found.append(svc_name)
    return found or ["General Architecture"]

def detect_domain(text: str):
    t = text.lower()
    if any(k in t for k in ["iam", "kms", "waf", "shield", "secrets manager", "security group", "compliance", "encrypt"]):
        return "Domain 1: Design Secure Architectures"
    if any(k in t for k in ["multi-az", "auto scaling", "sqs", "sns", "failover", "disaster recovery", "backup", "resilient"]):
        return "Domain 2: Design Resilient Architectures"
    if any(k in t for k in ["elasticache", "dax", "cloudfront", "transfer acceleration", "performance", "throughput", "latency"]):
        return "Domain 3: Design High-Performing Architectures"
    if any(k in t for k in ["lifecycle", "glacier", "spot", "savings plan", "cost-effective", "least expensive", "cost"]):
        return "Domain 4: Design Cost-Optimized Architectures"
    return "Domain 2: Design Resilient Architectures"

def parse_module_01():
    module_dir = NOTES_DIR / "01-aws-certified-solutions-architect-associate-saa-c03" / "sections"
    questions = []
    for path in sorted(module_dir.glob("section-*.md")):
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        raw_items = re.split(r"(?=^Question #\d+)", content, flags=re.MULTILINE)
        for item in raw_items[1:]:
            m_num = re.search(r"^Question #(\d+)", item)
            if not m_num:
                continue
            q_num = int(m_num.group(1))

            # extract options
            options = []
            opt_matches = list(re.finditer(r"^([A-E])\.\s+(.*?)(?=\n[A-E]\.|\n>|\Z)", item, re.MULTILINE | re.DOTALL))
            for om in opt_matches:
                options.append({
                    "key": om.group(1),
                    "text": re.sub(r"\s+", " ", om.group(2).strip())
                })

            # extract question text
            q_text_match = re.search(r"^Question #\d+\s+(?:Topic \d+\s+)?(.*?)(?=\n[A-E]\.|\n>|\Z)", item, re.DOTALL)
            q_text = re.sub(r"\s+", " ", q_text_match.group(1).strip()) if q_text_match else ""

            # extract correct answer
            ans_m = re.search(r"\*\*Correct Answer:\*\*\s*`?([A-E,\s]+)`?", item)
            correct_answers = [c.strip() for c in re.split(r"[,/ ]+", ans_m.group(1).strip()) if c.strip()] if ans_m else []

            # explanation
            rec_m = re.search(r"\*\*Recommended Solution:\*\*\s*(.*?)(?=\n>|\Z)", item, re.DOTALL)
            summary_m = re.search(r"\*\*Exam Concept Summary:\*\*(.*?)(?=\n---|\Z)", item, re.DOTALL)
            expl = ""
            if rec_m:
                expl += rec_m.group(1).strip() + "\n\n"
            if summary_m:
                expl += summary_m.group(1).replace(">", "").strip()

            all_context = f"{q_text} {expl}"
            questions.append({
                "id": f"mod1-q{q_num}",
                "module": "01",
                "moduleTitle": "SAA-C03 Architectural Scenarios (684 Q)",
                "questionNumber": q_num,
                "questionText": q_text,
                "options": options,
                "correctAnswers": correct_answers,
                "explanation": expl.strip(),
                "officialDocs": [],
                "services": detect_services(all_context),
                "domain": detect_domain(all_context)
            })
    return questions

def parse_module_02():
    module_dir = NOTES_DIR / "02-aws-saa-c03-question-bank-1019" / "sections"
    questions = []
    for path in sorted(module_dir.glob("section-*.md")):
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        raw_items = re.split(r"(?=^Question \d+\b)", content, flags=re.MULTILINE)
        for item in raw_items[1:]:
            m_num = re.search(r"^Question (\d+)\b", item)
            if not m_num:
                continue
            q_num = int(m_num.group(1))

            options = []
            opt_matches = list(re.finditer(r"^([A-E])\.\s+(.*?)(?=\n[A-E]\.|\n>|\Z)", item, re.MULTILINE | re.DOTALL))
            for om in opt_matches:
                options.append({
                    "key": om.group(1),
                    "text": re.sub(r"\s+", " ", om.group(2).strip())
                })

            q_text_match = re.search(r"^Question \d+\b\s*(.*?)(?=\n[A-E]\.|\n>|\Z)", item, re.DOTALL)
            q_text = re.sub(r"\s+", " ", q_text_match.group(1).strip()) if q_text_match else ""

            ans_m = re.search(r"\*\*Correct Answer:\*\*\s*`?([A-E,\s]+)`?", item)
            correct_answers = [c.strip() for c in re.split(r"[,/ ]+", ans_m.group(1).strip()) if c.strip()] if ans_m else []

            rec_m = re.search(r"\*\*Recommended Solution:\*\*\s*(.*?)(?=\n>|\Z)", item, re.DOTALL)
            summary_m = re.search(r"\*\*Exam Concept Summary:\*\*(.*?)(?=\n---|\Z)", item, re.DOTALL)
            expl = ""
            if rec_m:
                expl += rec_m.group(1).strip() + "\n\n"
            if summary_m:
                expl += summary_m.group(1).replace(">", "").strip()

            all_context = f"{q_text} {expl}"
            questions.append({
                "id": f"mod2-q{q_num}",
                "module": "02",
                "moduleTitle": "SAA-C03 Comprehensive Question Bank (1019 Q)",
                "questionNumber": q_num,
                "questionText": q_text,
                "options": options,
                "correctAnswers": correct_answers,
                "explanation": expl.strip(),
                "officialDocs": [],
                "services": detect_services(all_context),
                "domain": detect_domain(all_context)
            })
    return questions

def parse_module_03():
    module_dir = NOTES_DIR / "03-caa-exam-questions-explained" / "sections"
    questions = []
    for path in sorted(module_dir.glob("section-*.md")):
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        raw_items = re.split(r"(?=^Soru \d+ / \d+)", content, flags=re.MULTILINE)
        for item in raw_items[1:]:
            m_num = re.search(r"^Soru (\d+)", item)
            if not m_num:
                continue
            q_num = int(m_num.group(1))

            options = []
            opt_matches = list(re.finditer(r"^([A-E])\)\s+(.*?)(?=\n[A-E]\)|\nBirden|\n>|\Z)", item, re.MULTILINE | re.DOTALL))
            for om in opt_matches:
                options.append({
                    "key": om.group(1),
                    "text": re.sub(r"\s+", " ", om.group(2).strip())
                })

            q_text_match = re.search(r"^Soru \d+ / \d+[^\n]*\n\n(.*?)(?=\n[A-E]\)|\Z)", item, re.DOTALL)
            q_text = re.sub(r"\s+", " ", q_text_match.group(1).strip()) if q_text_match else ""

            ans_m = re.search(r"\*\*Doğru Seçenek:\*\*\s*`?([A-E,\s]+)`?", item)
            correct_answers = [c.strip() for c in re.split(r"[,/ ]+", ans_m.group(1).strip()) if c.strip()] if ans_m else []

            expl_m = re.search(r"\*\*Kısa Konu Anlatımı & Gerekçe:\*\*\s*(.*?)(?=\n>|\Z)", item, re.DOTALL)
            expl = expl_m.group(1).strip() if expl_m else ""

            docs = re.findall(r"\[(https://docs\.aws\.amazon\.com/[^\]]+)\]", item)

            all_context = f"{q_text} {expl}"
            questions.append({
                "id": f"mod3-q{q_num}",
                "module": "03",
                "moduleTitle": "CAA Detailed Turkish Explanations (63 Q)",
                "questionNumber": q_num,
                "questionText": q_text,
                "options": options,
                "correctAnswers": correct_answers,
                "explanation": expl,
                "officialDocs": list(set(docs)),
                "services": detect_services(all_context),
                "domain": detect_domain(all_context)
            })
    return questions

def main():
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    print("Parsing module 01...")
    q1 = parse_module_01()
    print(f"Module 01 parsed: {len(q1)} questions")

    print("Parsing module 02...")
    q2 = parse_module_02()
    print(f"Module 02 parsed: {len(q2)} questions")

    print("Parsing module 03...")
    q3 = parse_module_03()
    print(f"Module 03 parsed: {len(q3)} questions")

    all_questions = q1 + q2 + q3
    print(f"Total structured questions: {len(all_questions)}")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated structured dataset at: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
