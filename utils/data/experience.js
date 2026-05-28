export const experiences = [
  {
    id: 1,
    title: 'Security Engineer, MXDR',
    company: "Deloitte, Bangalore, India",
    duration: "(Aug 2021 – Feb 2024)",
    tools: ['Splunk', 'Google Chronicle', 'CrowdStrike', 'Okta', 'AWS', 'Python', 'LangChain', 'Splunk Phantom', 'Zscaler', 'Fortinet'],
    image: '/png/deloitte.png',
    description: [
      "Served as incident commander for critical security events including a WannaCry ransomware response and an executive-level data breach - directed 5-7 L1 analysts across parallel workstreams, made real-time containment decisions under pressure, and led standing stakeholder briefings for senior leadership translating evolving technical findings into risk and decision points.",
      "Engineered 200+ MITRE ATT&CK-aligned detections in Splunk ES and Google Chronicle for clients including Cleveland Clinic, Whirlpool, and Dhanani Group, achieving a 15:1 true-positive ratio and 20% false positive reduction across cloud, identity, and endpoint telemetry.",
      "Built an LLM-powered alert triage agent using Python and the Anthropic API that classified alerts by exploitability and blast radius before analyst review, reducing triage time by 35% across Fortune 500 deployments.",
      "Led 200+ end-to-end incident investigations including malware analysis in Ghidra and x64dbg, AWS CloudTrail forensics, and Okta identity timeline reconstruction, maintaining 95% SLA adherence with MTTR reduced from 4 hours to 45 minutes.",
      "Designed and implemented Zero Trust and SASE/SSE network security architectures using Zscaler ZIA and ZPA, replacing legacy VPN models with identity-verified access controls across hybrid enterprise environments.",
      "Built Python IAM governance automation that ran nightly against AWS Config entitlement data, flagged over-privileged roles, and pushed ServiceNow remediation tickets automatically across 12 cloud accounts."
    ]
  },
  {
    id: 2,
    title: 'Systems Engineer, Security Operations',
    company: "Tata Consultancy Services, Bangalore, India",
    duration: "(Jun 2018 – Aug 2021)",
    tools: ['Splunk', 'CrowdStrike', 'AWS', 'Python', 'TensorFlow', 'Zscaler', 'Fortinet', 'Cisco ASA', 'Tenable Nessus'],
    image: '/png/tcs.png',
    description: [
      "Secured Shell's enterprise environment by deploying and configuring CrowdStrike Falcon EDR end-to-end across 5,000+ endpoints via API-driven policy management, building Splunk SPL detection pipelines from scratch, and improving analyst throughput by 50%.",
      "Deployed Zscaler ZIA and ZPA end-to-end for Shell - configured internet access policies, SSL inspection, URL filtering, and Zero Trust application access with device compliance prerequisites, replacing legacy VPN infrastructure.",
      "Configured and managed Cisco ASA and Fortinet FortiGate firewall infrastructure - administered rule bases, NAT policies, VPN configurations, and IDS/IPS tuning; performed policy reviews that reduced over-permissive rules by 30%.",
      "Built and deployed ML-based phishing detection using TensorFlow and NLP trained on 10,000+ adversarial samples, achieving 99.56% accuracy and 0.997 F1-score as a production second detection layer.",
      "Implemented cloud security baselines across AWS and GCP environments, configuring GuardDuty, CloudTrail, and IAM policies aligned to CIS benchmarks across 12 cloud accounts.",
      "Built Python SOAR automation and IOC enrichment pipelines integrating Splunk, CrowdStrike, and cloud security platforms through API orchestration, eliminating manual handoffs between tools."
    ]
  }
];