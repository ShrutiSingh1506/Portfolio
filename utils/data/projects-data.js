export const projectsData = [
  {
    id: 1,
    name: "LLM Security Automation Framework",
    tools: ["Python", "LangChain", "Anthropic API", "OpenAI API", "ChromaDB", "MITRE ATT&CK"],
    role: "Author",
    code: "https://github.com/ShrutiSingh1506/llm-security-automation",
    demo: "",
    description: [
      "Built and published an open-source AI security platform covering autonomous alert triage with exploitability scoring, MITRE ATT&CK attack chain reconstruction, and threat actor attribution across 6 APT groups.",
      "Implemented adversarial input defense layer intercepting prompt injection, data poisoning, IOC obfuscation, and CVE exploit patterns before they reach the LLM analysis layer.",
      "Validated against OWASP LLM Top 10 adversarial inputs including prompt injection, RAG poisoning, and data poisoning - 100% detection rate with 0 false positives.",
      "Single pipeline runner produces a consolidated interactive HTML dashboard covering all stages: log analysis, adversarial detection, kill chain reconstruction, and threat actor attribution."
    ],
  },
  {
    id: 2,
    name: "Texas Interview Intelligence Platform",
    tools: ["AWS Bedrock", "Lambda", "API Gateway", "Textract", "Comprehend", "DynamoDB", "S3"],
    role: "Author",
    code: "https://github.com/ShrutiSingh1506/texas-interview-intelligence",
    demo: "",
    description: [
      "Built a serverless AI orchestration pipeline at the AWS AI CMIS Hackathon (March 2026) - modular Lambda microservices with event-driven architecture, Bedrock for grounded AI generation with hallucination reduction, and DynamoDB for workflow state management.",
      "Integrated AWS Textract and Comprehend for structured NLP extraction from uploaded documents, grounding AI generation in source material to reduce hallucination risk.",
      "Designed multi-stage orchestration architecture with S3 for artifact traceability and a single interview_id tying document ingestion, AI generation, and post-interview reporting together.",
      "Demonstrated hands-on AWS service breadth and AI-native workflow design under time pressure across a full serverless stack."
    ],
  },
  {
    id: 3,
    name: "Vulnerability Research: ChurchCRM (CVE, CVSS 6.4) and moonrepo/starbase (CVE, CVSS 8.8)",
    tools: ["PHP", "Rust", "Python", "Burp Suite", "Manual Code Review"],
    role: "Researcher",
    code: "",
    demo: "",
    description: [
      "Discovered stored XSS in ChurchCRM (CWE-79, CVSS 6.4) and Zip Slip in moonrepo/starbase (CWE-22, CVSS 8.8) through independent manual source code review - both missed by automated scanners.",
      "Confirmed admin session hijacking on the XSS and arbitrary file write on the Zip Slip through working exploit chains built from scratch.",
      "Managed full responsible disclosure with both maintainers, coordinating patch development and verification before public disclosure.",
      "GitHub Security Advisories filed for both vulnerabilities; patches merged and confirmed in production releases."
    ],
  },
  {
    id: 4,
    name: "Zeus Banking Trojan - Malware Analysis and IOC Extraction",
    tools: ["Ghidra", "x64dbg", "Python", "pefile", "YARA", "REMnux", "Windows VM"],
    role: "Analyst",
    code: "",
    demo: "",
    description: [
      "Reverse-engineered Zeus banking trojan in a two-VM isolated lab (REMnux + Windows) using Ghidra static analysis and x64dbg dynamic tracing.",
      "Analyzed API hooking mechanism used for browser credential interception, reconstructed the C2 communication protocol, and extracted IOCs from unpacked binary.",
      "Mapped persistence mechanisms, registry modifications, and file system activity to MITRE ATT&CK techniques.",
      "Built a Python YARA rule generator producing reusable detection artifacts from binary analysis findings."
    ],
  },
  {
    id: 5,
    name: "DeepAntiPhish - Phishing Detection Framework",
    tools: ["Python", "TensorFlow", "Keras", "Optuna", "NLP"],
    role: "Author",
    code: "",
    demo: "",
    description: [
      "Built a deep learning phishing detection framework combining semantic and structural email features with Optuna hyperparameter tuning.",
      "Achieved 99.56% accuracy, 1.00 precision, and 0.997 F1-score on adversarial email corpora.",
      "Performed error analysis and interpretability reviews to harden the model against evasive patterns.",
      "Designed for deployment as a production second detection layer alongside signature-based rules - deployed at TCS for Shell as part of enterprise security operations."
    ],
  },
];