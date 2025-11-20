import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "RICEFW Technologies Inc",
    role: "AI/Machine Learning (ML) Engineer",
    period: "May 2024 – Present",
    location: "Remote",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/gyriuswkyjqesc6oobzo",
    color: "from-blue-500/20 to-cyan-500/20",
    projects: [
      {
        name: "KnowledgePlus - SCAN-AI",
        subtitle: "Intelligent Document Automation",
        achievements: [
          "Built a RAG-based Query AI chatbot using Azure OpenAI, Cognitive Search, and Flask APIs, enabling multi-step reasoning with AI agents and reducing onboarding time and costs by 50%",
          "Integrated Google Document AI and Azure Form Recognizer/Cognitive Services to extract entities, key-value pairs, tables, and structured outputs from unstructured documents with high accuracy",
          "Built configurable AI workflows for document classification and field-level validation using Python, ML techniques, and rule-based logic to enforce business requirements and compliance",
          "Designed adaptive extraction pipelines where classification, validation, and parsing stages self-adjust to new document types, reducing manual intervention and improving continuous learning",
          "Reduced document processing time by 60% and costs by 50% by integrating Whisper speech-to-text with LoRA-tuned LLaMA2-70B models, leveraging 4-bit quantization for efficient inference",
          "Deployed event-driven microservices using GCP (Cloud Run, Eventarc, Workflows) and Azure (Functions, App Service, Event Grid, Logic Apps) to enable scalable, resilient processing workflows",
          "Applied Agile SDLC (Scrum) to deliver document automation and LLM chatbot features through rapid POCs, iterative development, and continuous stakeholder feedback"
        ]
      },
      {
        name: "Wezard",
        subtitle: "Semantic Search & Duplicate Prevention",
        achievements: [
          "Built secure, API-based automation pipelines with seamless integration into Jira and ServiceNow",
          "Developed an internal semantic similarity engine powered by SentenceTransformers to identify duplicate and related tickets with high accuracy",
          "Utilized PostgreSQL for embedding storage and metadata management, enabling high-performance vector lookups at scale",
          "Connected RabbitMQ event streams to trigger instant similarity checks when new tickets are created",
          "Delivered a 40% reduction in duplicate tickets, accelerating triage and improving overall operational efficiency"
        ]
      },
      {
        name: "WeCOMM – E-commerce Platform",
        achievements: [
          "Migrated 200K+ MySQL legacy records via a custom ETL pipeline and schema mapping",
          "Deployed secure cloud infrastructure (VM provisioning, SQL Server, KeyVault, monitoring) with Azure ARM template automation, ensuring scalability, production readiness, and business continuity"
        ]
      },
      {
        name: "Enterprise Architecture & SOC Environment Design",
        achievements: [
          "Designed a SOC 2–aligned production environment using Azure Virtual Machine Scale Sets (VMSS), Application Gateways, NAT Gateways, and segmented subnets to build a secure and scalable cloud infrastructure",
          "Integrated Azure Key Vault, IAM, and RBAC to protect application secrets, enforce conditional access, and ensure compliance with audit requirements",
          "Produced detailed architecture documentation that mapped all infrastructure layers to SOC 2 and NIST 800-53 controls, serving as formal compliance evidence"
        ]
      },
      {
        name: "CI/CD & GitHub Enterprise Integration",
        achievements: [
          "Implemented GitHub Actions CI/CD pipelines with OIDC authentication, allowing secure deployments without relying on long-lived credentials",
          "Deployed self-hosted GitHub runners inside the Azure Government Cloud environment to support air-gapped and private IP VMSS deployments",
          "Automated infrastructure provisioning with ARM templates and YAML workflows, enabling one-click, multi-application deployments with four or more apps per VMSS node",
          "Configured pipelines with environment-specific variable groups and .env secret injection to streamline multi-application delivery",
          "Integrated with GitHub audit logging to provide full traceability of deployments and changes, ensuring SOC 2 audit readiness"
        ]
      }
    ],
    tags: ["Azure OpenAI", "RAG", "LLaMA2", "Whisper", "GCP", "FAISS", "SOC 2", "CMMI", "CJIS", "Document AI"]
  },
  {
    company: "Michigan State University",
    role: "Machine Learning (ML) Research Engineer",
    period: "Jan 2023 – Dec 2024",
    location: "Michigan, United States",
    logo: "https://yashu-dot.github.io/assets/img/msu_logo.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    projects: [
      {
        name: "Geospatial Classification & High-Performance Data Processing",
        achievements: [
          "Designed and implemented a classification system for large-scale geospatial datasets using Open3D, cKDTree spatial indexing, and multithreaded optimization, enabling robust 3D object recognition and terrain classification",
          "Optimized geospatial workflows to achieve throughput of over 1 million points per second, reducing analysis time from hours to minutes for urban planning, environmental monitoring, and infrastructure datasets",
          "Improved algorithm scalability to support city-wide LiDAR scans, ensuring compatibility with both structured and unstructured data formats",
          "Validated system performance through benchmarking against traditional pipelines, demonstrating >5x speed improvement with no loss of classification accuracy"
        ]
      },
      {
        name: "Teaching & Course Operations Support",
        achievements: [
          "Served as a graduate assistant and technical coordinator, collaborating with professors and 90+ teaching assistants to support 1,300+ students in large-scale computer science courses",
          "Designed and maintained an internal course website for centralized access to assignments, lab exercises, and resources, improving student engagement and accessibility",
          "Automated exam preparation workflows, streamlining question generation, formatting, and printing — saving faculty dozens of hours per exam cycle and reducing human error",
          "Developed communication and workflow protocols to synchronize instructors across multiple sections, ensuring consistent content delivery and academic standards"
        ]
      },
      {
        name: "Infrastructure Crack Detection & Computer Vision Research",
        achievements: [
          "Enhanced road maintenance operations by integrating Mask R-CNN and Faster R-CNN models for automated crack detection in pavement images",
          "Increased segmentation accuracy by 40% and reduced false positives through model fine-tuning with transformer-based backbones",
          "Achieved real-time inference capability at 0.001 seconds per image, enabling rapid detection and faster decision-making for state Department of Transportation (DOT) workflows",
          "Delivered research outcomes in partnership with civil engineering teams, helping prioritize repairs and improve public road safety"
        ]
      },
      {
        name: "Interactive ML Visualization Tools",
        achievements: [
          "Developed an interactive visualization platform inspired by TensorFlow Playground to demonstrate representation learning and invariance trade-offs in deep neural networks",
          "Leveraged D3.js, TensorFlow, PyTorch, and JavaScript to create browser-based, interactive experiments simplifying the understanding of complex ML concepts",
          "Designed toolkits to visualize decision boundaries, feature invariance, and utility trade-offs, improving accessibility for both researchers and students"
        ]
      }
    ],
    tags: ["Open3D", "Mask R-CNN", "Faster R-CNN", "Computer Vision", "LiDAR", "Transformers", "D3.js", "TensorFlow", "PyTorch", "Teaching", "Research"]
  },
  {
    company: "Intel Corporation",
    role: "Machine Learning (ML) Engineer",
    period: "Jun 2021 – Dec 2022",
    location: "Bengaluru, India",
    logo: "https://yashu-dot.github.io/assets/img/intel.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    projects: [
      {
        name: "Graph Neural Network Integration for Chip Placement",
        achievements: [
          "Cut project costs by 70% and significantly improved chip-placement accuracy by introducing graph-based machine learning techniques into ASIC design workflows",
          "Integrated GraphSAGE neural networks with K-means clustering algorithms to model and optimize circuit component placement, reducing design iterations and improving automation",
          "Demonstrated the ability of GNNs to aggregate neighborhood connectivity information from chip layouts, enabling more efficient component grouping and placement",
          "Provided technical documentation and prototypes showcasing the practical application of GNNs for large-scale EDA optimization, setting the stage for future adoption across design teams"
        ]
      },
      {
        name: "Advanced ETL Pipelines for Data Processing",
        achievements: [
          "Increased overall workflow throughput by 25% through development of custom ETL pipelines using TCL scripting to extract, transform, and preprocess complex design data",
          "Implemented schema mapping and data validation rules to ensure integrity of preprocessed datasets across multiple design workflows",
          "Enabled seamless integration between raw design data, ML-driven placement models, and chip simulation environments, resulting in faster iterations"
        ]
      },
      {
        name: "ML-Driven Design Optimization",
        achievements: [
          "Optimized ASIC design metrics — wirelength, power consumption, and overall performance — by an average of 30% through ML-based automated placement guidance and optimization heuristics",
          "Built automated design workflows that combined ML model outputs with human-in-the-loop review, allowing engineers to selectively refine high-impact layout areas while trusting the model for baseline placement",
          "Benchmarked ML-driven workflows against traditional placement techniques, proving higher efficiency and resource savings",
          "Contributed to cross-team collaboration between ML researchers and ASIC engineers, bridging the gap between algorithm development and hardware implementation"
        ]
      }
    ],
    tags: ["GraphSAGE", "ASIC", "GNN", "K-means", "TCL", "EDA", "ML Optimization"]
  }
];

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Click on any position to explore detailed projects and achievements
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={cn(
                  "overflow-hidden hover:shadow-card-hover transition-all duration-300 cursor-pointer border-border",
                  "animate-slide-up bg-gradient-to-br",
                  exp.color
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {/* Header */}
                <div className="p-6 bg-card/95 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <div className="relative flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-16 h-16 rounded-xl object-cover ring-2 ring-primary/20" 
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-primary-foreground" />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        
                        <button
                          className={cn(
                            "p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300",
                            expandedIndex === index && "rotate-90 bg-primary text-primary-foreground"
                          )}
                          aria-label={expandedIndex === index ? "Collapse" : "Expand"}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/20 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    expandedIndex === index ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="p-6 pt-0 bg-card/95 backdrop-blur-sm">
                    <div className="space-y-6">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex} className="bg-background/50 rounded-lg p-5 border border-border/50">
                          <div className="mb-4">
                            <h4 className="font-bold text-foreground text-lg mb-1">{project.name}</h4>
                            {project.subtitle && (
                              <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                            )}
                          </div>
                          <ul className="space-y-3">
                            {project.achievements.map((achievement, aIndex) => (
                              <li key={aIndex} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
