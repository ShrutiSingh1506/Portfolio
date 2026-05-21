export const experiences = [
  {
    id: 1,
    title: 'Security Engineer',
    company: "Deloitte, Bangalore, India",
    duration: "(Aug 2021 – Feb 2024)",
    tools: ['Splunk', 'Google Chronicle', 'CrowdStrike', 'Okta', 'AWS', 'Python', 'LangChain', 'Splunk Phantom'],
    image: '/png/deloitte.png',
    description: [
      "Engineered 200+ behavioral detections in Splunk ES and Google Chronicle for clients including Cleveland Clinic and Whirlpool, achieving a 15:1 true-positive ratio across cloud, identity, and endpoint telemetry.",
      "Built an LLM-powered alert triage agent using Python and the Anthropic API that classified alerts by exploitability before analyst review, reducing triage time by 35% across Fortune 500 deployments.",
      "Led 200+ end-to-end incident investigations including malware analysis in Ghidra and x64dbg, AWS CloudTrail forensics, and Okta identity timeline reconstruction, maintaining 95% SLA adherence.",
      "Built Python IAM governance automation that ran nightly against AWS Config entitlement data, flagged over-privileged roles, and pushed ServiceNow remediation tickets automatically across 12 cloud accounts.",
      "Deployed and tuned CrowdStrike Falcon EDR across enterprise endpoint fleets via API-driven policy configuration, reducing false positive volume by 20% for clients including Dhanani Group."
    ]
  },
  {
    id: 2,
    title: 'Systems Engineer, Security Operations',
    company: "Tata Consultancy Services, Bangalore, India",
    duration: "(Jun 2018 – Aug 2021)",
    tools: ['Splunk', 'CrowdStrike', 'AWS', 'Python', 'TensorFlow', 'Zscaler', 'Tenable Nessus'],
    image: '/png/tcs.png',
    description: [
      "Secured Shell's enterprise environment by building Splunk SPL detection logic and CrowdStrike Falcon EDR coverage from scratch across 5,000+ endpoints, improving analyst throughput by 50%.",
      "Built and deployed ML-based phishing detection using TensorFlow and NLP trained on 10,000+ adversarial samples, achieving 99.56% accuracy and 0.997 F1-score as a production second detection layer.",
      "Implemented cloud security baselines across AWS and GCP environments for Shell, configuring GuardDuty, CloudTrail, and IAM policies aligned to CIS benchmarks across 12 cloud accounts.",
      "Built Python SOAR automation and IOC enrichment pipelines that integrated Splunk, CrowdStrike, and cloud security platforms through API orchestration, eliminating manual handoffs between tools."
    ]
  }
];