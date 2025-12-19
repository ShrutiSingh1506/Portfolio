export const projectsData = [
  {
    id: 1,
    name: "DeepAntiPhish – Advanced Phishing Detection Framework",
    tools: ["Python", "TensorFlow", "Optuna"],
    role: "Project Lead",
    code: "",
    demo: "",
    description: [
      "Architected an end-to-end deep learning pipeline for phishing detection combining semantic + structural email features.",
      "Automated preprocessing, model training, and evaluation using TensorFlow and Optuna for hyperparameter tuning.",
      "Achieved 99.56% accuracy and 0.997 F1-score across benchmark corpora.",
      "Performed error analysis + interpretability reviews to harden the model against evasive patterns."
    ],
  },
  {
    id: 2,
    name: "POS Database Platform – Scalable Transaction Processing",
    tools: ["AWS EC2", "Airflow", "Spark", "MongoDB", "SQL", "Python"],
    role: "Project Lead",
    code: "",
    demo: "",
    description: [
      "Engineered a high-throughput PoS database targeting ~1M transactions/day using AWS EC2 clusters.",
      "Built ETL pipelines using Airflow + Spark integrating relational and NoSQL models.",
      "Implemented sharding + materialized views to improve query performance by 10×.",
      "Migrated 5TB from MySQL to MongoDB; reduced analytics latency from ~5s to <1s."
    ],
  },
  {
    id: 3,
    name: "IoT Smart Irrigation System",
    tools: ["Python", "Arduino"],
    role: "Project Lead",
    code: "",
    demo: "",
    description: [
      "Built a real-time IoT irrigation solution using Python + Arduino integrating sensor feedback with valve control.",
      "Integrated secure data handling and predictive analytics for improved decisions.",
      "Optimized water utilization by closing the loop between sensor readings and irrigation scheduling."
    ],
  },
];
