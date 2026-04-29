const base = "/"

export type Category = "AI/ML" | "AI Systems" | "Data Analytics" | "All";

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string | null;
  highlights: string[];
  category: Exclude<Category, "All">;
}

const projects: Project[] = [
  {
    name: "Slip — Churn Intelligence Platform",
    subtitle: "Agentic AI + ML",
    description:
      "Built an 84% accurate churn prediction pipeline using Random Forest, SMOTE, and advanced feature engineering on imbalanced customer datasets. Designed a LangGraph agentic reasoning layer for multi-step behavioral analysis over customer segments. Implemented FAISS-based RAG to auto-generate personalized retention strategies; reduced analyst lookup time significantly.",
    image: `${base}slip_preview.svg`,
    tags: ["Python", "LangGraph", "FAISS", "RAG", "Random Forest", "SMOTE", "Scikit-learn"],
    github: "https://github.com/MAYANKSHARMA01010/Slip",
    live: "https://huggingface.co/spaces/Manku69/slip-churn-intelligence",
    highlights: ["84% accuracy", "FAISS RAG", "LangGraph agents"],
    category: "AI/ML",
  },
  {
    name: "Forecast-Audit",
    subtitle: "OpenEnv Benchmark for Time-Series Quality",
    description:
      "Built an OpenEnv benchmark with 33 episodes for standardized time-series anomaly detection and repair evaluation. Developed a FastAPI agent layer supporting detection, repair, and evaluation workflows with reproducible scoring. Containerized with Docker and deployed on Hugging Face Spaces for open benchmarking access.",
    image: `${base}forecast_preview.svg`,
    tags: ["Python", "FastAPI", "Docker", "OpenEnv", "Hugging Face", "Time-Series"],
    github: "https://github.com/MAYANKSHARMA01010/Forecast-Audit",
    live: "https://huggingface.co/spaces/Manku69/Forecast-Audit-OpenEnv",
    highlights: ["33 benchmark episodes", "FastAPI agent layer", "Docker + HF Spaces"],
    category: "AI Systems",
  },
  {
    name: "Global OTT Content Strategy",
    subtitle: "Netflix Analytics — DVA + Business Intelligence",
    description:
      "Analyzed 8,807 Netflix titles to identify a critical 70/30 movie-to-TV imbalance signaling long-term churn risk. Detected Netflix's post-2019 content growth plateau mapped to the company's real strategic shift from growth to profitability mode. Surfaced US geographic concentration risk (3,000+ US vs ~900 India titles) and identified India/South Korea as high-growth, low-cost content opportunities. Built a 10+ chart interactive dashboard covering genre distribution, rating segmentation, runtime patterns, and seasonal drop timing.",
    image: `${base}netflix_preview.svg`,
    tags: ["Python", "Pandas", "Tableau", "SQL", "EDA", "Business Intelligence", "DVA"],
    github:
      "https://github.com/MAYANKSHARMA01010/SectionA_G-11_Global_OTT_Content_Strategy_Insights",
    live: "https://docs.google.com/spreadsheets/d/1SMpBtLsXCCp8xcQMGcVWLMj3ZAVPsS9tGXdQLPJb8Wc/edit?usp=sharing",
    highlights: ["8,807 titles analyzed", "10+ chart dashboard", "Strategic churn insights"],
    category: "Data Analytics",
  },
  {
    name: "SmartStay Analytics",
    subtitle: "Airbnb Market Intelligence — DVA + Predictive Analytics",
    description:
      "Analyzed 30,048 Airbnb listings across 4 cities; quantified that Superhost status adds $34,613/year in revenue — converting a vanity badge into an actionable ROI metric. Discovered that 27.1% of all listings earn zero revenue, exposing critical market-entry risk for investors. Computed RevPAR gap of 8.4× between median ($12.08) and high-performing ($101.41) hosts, enabling precision pricing recommendations. Delivered 3 audience-specific dashboards for investors, hosts, and platform managers.",
    image: `${base}smartstay_preview.svg`,
    tags: ["Python", "Pandas", "Tableau", "NumPy", "Matplotlib", "Seaborn", "DVA", "EDA"],
    github: "https://github.com/MAYANKSHARMA01010/SECTIONA_G5_SmartStay_Analytics",
    live: null,
    highlights: ["30,048 listings", "$34,613/yr Superhost ROI", "3 audience dashboards"],
    category: "Data Analytics",
  },
]

export default projects
