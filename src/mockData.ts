// mockData.ts - Mock data for Rikin Patel's portfolio
import { ProfileBanner, ContactMe, TimelineItem, Certification, Project, Skill, WorkPermit } from './types';
import portfolioPic from './images/portfolio_pic.JPG';

export const mockProfileBanner: ProfileBanner = {
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
  },
  headline: "Rikin Patel - Data Engineer at CVS Health | Researcher",
  resumeLink: {
    url: "/Profile.pdf"
  },
  linkedinLink: "https://www.linkedin.com/in/rknptl/",
  profileSummary: "As a Data Engineer at CVS Health, my past experience has allowed me to leverage my research skills and passion for robotics to enhance data-driven solutions. With a passion towards automation, I blend technical acumen with strategic insights. My role involves collaborating with a dynamic team to foster innovation and efficiency, rooted in my core competencies of entrepreneurship and analytics."
};

export const mockContactMe: ContactMe = {
  profilePicture: {
    url: portfolioPic
  },
  name: "RIKIN PATEL",
  title: "Data Engineer at CVS Health | Researcher",
  summary: "As a Data Engineer at CVS Health, my past experience has allowed me to leverage my research skills and passion for robotics to enhance data-driven solutions. With a passion towards automation, I blend technical acumen with strategic insights.",
  companyUniversity: "CVS Health | The University of Texas at Dallas",
  linkedinLink: "https://www.linkedin.com/in/rknptl/",
  email: "rikinpatel.2620@gmail.com",
  phoneNumber: "+1 (469) 465-2048"
};

export const mockTimeline: TimelineItem[] = [
  {
    timelineType: "work",
    name: "CVS Health",
    title: "Data Engineer",
    techStack: "Teradata, GCP, Apache Airflow, Python, SQL, ETL, Data Quality, Data Lineage",
    summaryPoints: [
      "Led scalable ETL pipeline architecture for Teradata → GCP migration, handling multi-terabyte datasets and cutting processing latency by ~40% while achieving up to 50% cloud cost reduction.",
      "Built custom Airflow DAGs for automated legacy file cleanup, preventing stale data buildup and reducing monthly cloud storage costs by 25–35%.",
      "Created automated metadata extraction & data lineage framework, enabling full dependency tracking and slashing troubleshooting time by 40% for analytics teams.",
      "Designed & deployed end-to-end data quality validation pipelines, catching 95%+ of anomalies pre-production and improving overall data reliability across critical business reporting."
    ],
    dateRange: "October 2024 - Present"
  },
  {
    timelineType: "work",
    name: "Tech Holding",
    title: "Data Engineering Intern",
    techStack: "Data Engineering, ETL, Data Pipelines, Cloud Technologies",
    summaryPoints: [
      "Developed and maintained data engineering solutions",
      "Gained hands-on experience with modern data stack technologies",
      "Contributed to data pipeline optimization projects"
    ],
    dateRange: "August 2023 - January 2024 (6 months)"
  },
  {
    timelineType: "education",
    name: "The University of Texas at Dallas",
    title: "Master of Science - MS, Business Analytics & Artificial Intelligence",
    techStack: "Business Analytics, AI, Machine Learning, Data Science",
    summaryPoints: [
      "Specialized in Business Analytics and Artificial Intelligence",
      "Advanced coursework in machine learning, data science, and business intelligence",
      "Applied analytics to solve real-world business problems"
    ],
    dateRange: "Graduated"
  },
  {
    timelineType: "education",
    name: "Adani University",
    title: "Bachelor of Engineering - BE, Information Technology",
    techStack: "Information Technology, Software Engineering, Computer Science",
    summaryPoints: [
      "Bachelor's degree in Information Technology",
      "Foundation in software engineering and computer science principles",
      "Academic excellence and technical project experience"
    ],
    dateRange: "Graduated"
  }
];

export const mockCertifications: Certification[] = [
  {
    title: "Developer Attestation for AI-Assisted Coding Tool",
    issuer: "CVS Health",
    issuedDate: "2024",
    link: "https://cvs.digitalbadges.skillsoft.com/ad451e5b-ea10-488e-ac46-e333e7860934#acc.TGFfBOnW",
    iconName: "ai-coding"
  },
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "2024",
    link: "https://www.credly.com/badges/d7c3202c-5eac-436f-acb7-429d9d7004e2",
    iconName: "aws"
  },
  {
    title: "Data Analytics Virtual Experience",
    issuer: "Accenture",
    issuedDate: "2022",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_wa3GojDf4WQkFTTCn_1651311176619_completion_certificate.pdf",
    iconName: "data-analytics"
  },
  {
    title: "Data Analytics Virtual Experience Program",
    issuer: "Quantium",
    issuedDate: "2022",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Quantium/NkaC7knWtjSbi6aYv_Quantium_wa3GojDf4WQkFTTCn_1651734651572_completion_certificate.pdf",
    iconName: "data-analytics"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    issuedDate: "2024",
    link: "https://learn.microsoft.com/en-us/users/rikinpatel/credentials/79512c338e253b4e?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    iconName: "azure"
  }
];

export const mockSkills: Skill[] = [
  {
    name: "Research Skills",
    category: "Core Competency",
    description: "Advanced research methodologies and analytical thinking",
    icon: "research"
  },
  {
    name: "Entrepreneurship",
    category: "Business",
    description: "Strategic thinking and business acumen",
    icon: "entrepreneurship"
  },
  {
    name: "Robotics",
    category: "Technical",
    description: "Passion for robotics and automation technologies",
    icon: "robotics"
  },
  {
    name: "Data Engineering",
    category: "Technical",
    description: "Building scalable data pipelines and infrastructure",
    icon: "data-engineering"
  },
  {
    name: "Python",
    category: "Programming",
    description: "Proficient in Python for data engineering and analytics",
    icon: "python"
  },
  {
    name: "SQL",
    category: "Database",
    description: "Expert-level SQL for data manipulation and analysis",
    icon: "sql"
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "AWS Solutions Architect Professional certified",
    icon: "aws"
  },
  {
    name: "Azure",
    category: "Cloud",
    description: "Microsoft Azure Developer Associate certified",
    icon: "azure"
  }
];

export const mockProjects: Project[] = [
  {
    title: "Enterprise Data Pipeline",
    description: "Scalable data pipeline solution for processing healthcare data at enterprise scale",
    techUsed: "AWS, Python, SQL, Apache Airflow",
    image: { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" }
  },
  {
    title: "Automation Framework",
    description: "Built automation frameworks to enhance operational efficiency and reduce manual work",
    techUsed: "Python, Automation Tools, Cloud Services",
    image: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" }
  },
  {
    title: "Research: Attention Detection",
    description: "A Comprehensive Study on Techniques Utilized for Attention Detection in Human-Computer Interactions",
    techUsed: "Machine Learning, Computer Vision, Research Methodologies",
    image: { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800" }
  },
  {
    title: "Facial Landmark Detection",
    description: "Exploring Facial Landmark Detection Techniques for Attention Detection applications",
    techUsed: "Computer Vision, Deep Learning, Python",
    image: { url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800" }
  }
];

export const mockWorkPermit: WorkPermit = {
  visaStatus: "Authorized to work for any employer",
  expiryDate: new Date("2027-12-31"),
  summary: "Authorized to work for any employer with no requirement of sponsorship.",
  additionalInfo: "Currently located in Dallas, Texas, United States. Fluent in Hindi (Full Professional), Gujarati (Native), and English (Full Professional)."
};
