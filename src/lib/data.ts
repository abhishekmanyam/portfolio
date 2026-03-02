interface Collaborator {
  name: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  year: string;
  link: string;
  collaborators?: Collaborator[];
}

export const siteConfig = {
  name: "Abhishek",
  fullName: "Abhishek M",
  role: "AI Engineer",
  tagline:
    "Building production-grade agentic AI systems — from multi-agent orchestration to real-time inference pipelines.",
  email: "mabhishek8017@gmail.com",
  phone: "+1 (971) 232-0797",
  location: "Portland, OR",
};

export const stats = [
  { label: "Years Experience", value: 6, suffix: "+" },
  { label: "Production AI Systems", value: 10, suffix: "+" },
  { label: "Concurrent Conversations", value: 10, suffix: "K+" },
  { label: "Cost Reduction", value: 60, suffix: "%" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "ShipCrew",
    category: "AI Agent Platform",
    description:
      "An AI dev team that works like real coworkers. Multiple agents collaborate in a Slack-like interface — they discuss, code in sandboxed containers, review each other's work, and keep working when you're away.",
    image: "/shipcrew.png",
    tags: ["Multi-Agent", "LLM", "Sandboxed Execution", "Real-time"],
    year: "2025",
    link: "https://github.com/shipcrew-ai/shipcrew",
    collaborators: [
      { name: "Kuladeep Mantri", github: "https://github.com/kuladeepmantri" },
    ],
  },
  {
    id: 2,
    title: "Flow",
    category: "Project Management",
    description:
      "A Kanban-first project management tool for teams where every action leaves a permanent trail, so nothing is ever lost.",
    image: "/flow.png",
    tags: ["Kanban", "Collaboration", "Audit Trail", "Teams"],
    year: "2025",
    link: "https://github.com/abhishekmanyam/Flow",
  },
  {
    id: 3,
    title: "SyncLabs",
    category: "AI Video Generation",
    description:
      "AI-powered lip-sync platform. Upload a video and audio track — get realistic lip-synced output in 2-7 minutes. Supports multi-language via Whisper, pre-built AI avatars, and GPU inference on RunPod.",
    image: "/synclabs.png",
    tags: ["MuseTalk", "Whisper", "GPU Cloud", "FFmpeg"],
    year: "2025",
    link: "#",
  },
  {
    id: 4,
    title: "Fraud Detection MLOps",
    category: "MLOps Pipeline",
    description:
      "End-to-end MLOps pipeline for real-time fraud detection — automated data validation, model training, evaluation gates, and canary deployment with full observability and drift monitoring.",
    tags: ["MLflow", "SageMaker", "Kafka", "Prometheus"],
    year: "2024",
    link: "https://github.com/abhishekmanyam/Fraud-Detection-MLOps-Pipeline",
  },
  {
    id: 5,
    title: "Wizzle",
    category: "AI Education Platform",
    description:
      "AI-driven educational platform with agentic workflows — AWS Bedrock/Lambda-powered illustration generation and AI-assisted storytelling with autonomous content creation pipelines.",
    image: "/wizzle.png",
    tags: ["React", "TypeScript", "AWS Bedrock", "Supabase"],
    year: "2024",
    link: "https://wizzle.coredefender.ai",
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Ayumetrix",
    location: "Portland, OR",
    period: "June 2024 – Present",
    highlights: [
      "Production agentic AI assistant — 10K+ concurrent conversations, sub-2s P99 latency",
      "Multi-model LLM gateway — 60% cost reduction with intelligent routing",
      "MCP infrastructure for dynamic tool orchestration across agent pipelines",
      "RAG pipeline with hybrid search — 89% recall@10",
    ],
  },
  {
    role: "AI & ML Infrastructure Engineer",
    company: "Core Defender",
    location: "Hillsboro, OR",
    period: "March 2023 – May 2024",
    highlights: [
      "Hybrid cloud infra on AWS/GCP for AI/ML workloads",
      "Automated data pipelines with Airflow, Glue, PySpark",
      "Distributed model training on Kubernetes clusters",
    ],
  },
  {
    role: "Software & DevOps Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    period: "June 2021 – June 2022",
    highlights: [
      "Cloud migrations to AWS/Azure with container orchestration",
      "Kubernetes on EKS/AKS, CI/CD with Jenkins & GitLab",
      "Service mesh architecture with Istio and gRPC",
    ],
  },
];

export const skills = [
  "LangChain",
  "RAG Pipelines",
  "Multi-Agent Systems",
  "AWS Bedrock",
  "SageMaker",
  "Kubernetes",
  "Terraform",
  "Python",
  "TypeScript",
  "Go",
  "Docker",
  "CrewAI",
  "MCP",
  "OpenTelemetry",
  "Kafka",
  "PostgreSQL",
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/abhishekmanyam" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-mdev/" },
];

export const aboutText = `AI Engineer with 6+ years of experience designing and shipping production-grade agentic AI systems and LLM-powered applications in cloud-native environments. I specialize in agentic workflows, RAG pipelines, LLM orchestration, and AI infrastructure.

I build systems that reason, plan, and act — from multi-agent orchestration handling 10K+ concurrent conversations to semantic caching layers and LLM guardrails. My work sits at the intersection of AI engineering and infrastructure, translating complex requirements into reliable, secure systems with strong observability.

Based in Portland, OR. Speaker at Portland AI Engineers. MS in Computer Science from Oregon State University.`;
