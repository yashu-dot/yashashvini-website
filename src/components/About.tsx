import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Code2, Brain, Rocket, Target, TrendingUp, Users, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "MS Computer Science at Michigan State University",
    metric: "4.0 GPA",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    description: "ML Engineer at RICEFW Technologies & Intel",
    metric: "3+ Years",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Research Impact",
    description: "Published work & 15+ ML/AI Projects",
    metric: "15+ Projects",
    color: "from-orange-500 to-red-500"
  }
];

const achievements = [
  {
    icon: TrendingUp,
    value: "60%",
    label: "Reduced Processing Time",
    description: "Document automation with LLaMA2"
  },
  {
    icon: Target,
    value: "70%",
    label: "Cost Reduction",
    description: "Chip placement optimization at Intel"
  },
  {
    icon: Rocket,
    value: "1M+",
    label: "Points Per Second",
    description: "Geospatial data processing"
  },
  {
    icon: Users,
    value: "40%",
    label: "Efficiency Boost",
    description: "Duplicate ticket reduction"
  }
];

const publications = [
  {
    title: "Image Caption Generation for Low Light Images",
    conference: "ICICCT 2022, Springer",
    date: "Nov 2022",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-3575-6_34",
    description: "Proposed a novel image captioning system tailored for low-light/twilight images, addressing a gap where most existing captioning models were built on well-lit datasets.",
    highlights: [
      "Pre-processed images using a Retinex theory–based enhancement algorithm to recover hidden details and improve visual clarity",
      "Implemented an encoder–decoder deep learning model trained on the Flickr8k dataset to generate captions for enhanced images",
      "Validated results using BLEU score metrics, demonstrating improved caption quality compared to traditional captioning baselines"
    ]
  },
  {
    title: "Fake News Detection on Indian Sources",
    conference: "ICIPCN 2022, Springer",
    date: "Jul 2022",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-2535-1_41",
    description: "Addressed the rising issue of fake news propagation in Indian media by developing a deep learning–based classification model.",
    highlights: [
      "Built a system using NLP techniques (TF-IDF, embeddings, recurrent models) to classify articles as real or fake",
      "Trained and tested the model on datasets from Times of India, Politifact, and other Indian news sources, improving accuracy across multilingual content",
      "Highlighted the social and political implications of misinformation, showing how AI can support election integrity, digital literacy, and media verification"
    ]
  },
  {
    title: "Similar Face Detection for Indian Faces",
    conference: "INCET 2021, IEEE Explore",
    date: "Jun 2021",
    link: "https://ieeexplore.ieee.org/document/9456367",
    description: "Tackled the problem of face similarity detection with limited datasets and high computational cost of CNNs.",
    highlights: [
      "Designed and trained a Siamese Neural Network architecture capable of one-shot learning, requiring fewer training samples compared to CNN-based approaches",
      "Built a new dataset of Indian faces and demonstrated the system's ability to accurately predict top matches for a given image",
      "Achieved competitive accuracy with lower computational cost, proving the effectiveness of SNNs in identity verification and security systems"
    ]
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-12 rounded-full" />

          {/* Main Description */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
            <p className="text-center">
              <strong className="text-foreground text-xl">Yashashvini Rachamallu</strong> is a driven and innovative software engineer with a passion for
              <strong className="text-primary"> machine learning</strong>, <strong className="text-primary">large language models</strong>, and <strong className="text-primary">AI-driven solutions</strong>.
            </p>

            <p>
              During her tenure at <strong className="text-foreground">RICEFW Technologies</strong>, she developed custom deep learning models
              and RAG-based AI chatbots, achieving a <strong className="text-secondary">60% reduction in document processing time</strong> and cutting operational costs by 50%.
              By leveraging Whisper for speech-to-text, LLaMA2 for advanced language modeling, and Azure OpenAI, she
              consistently delivered scalable, efficient solutions.
            </p>

            <p>
              Her work spans large-scale data migration, cloud deployment, time-series forecasting models, and implementing
              <strong className="text-secondary"> SOC 2-compliant enterprise architecture</strong>. At <strong className="text-foreground">Intel Corporation</strong>,
              she optimized chip-placement workflows and reduced project costs by <strong className="text-secondary">70%</strong> through advanced ML-driven methods
              including GraphSAGE and reinforcement learning.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="#education" className="no-underline">
              <Card 
                className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-card border-border group animate-scale-in cursor-pointer hover:scale-105 flex flex-col h-full"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Academic Excellence</h3>
                  <p className="text-sm text-muted-foreground mb-3">MS Computer Science at Michigan State University</p>
                  <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
                    <p className="text-lg font-bold text-primary">4.0 GPA</p>
                  </div>
                </div>
              </Card>
            </a>

            <a href="#experience" className="no-underline">
              <Card 
                className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-card border-border group animate-scale-in cursor-pointer hover:scale-105 flex flex-col h-full"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-secondary/10 rounded-2xl">
                      <Briefcase className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Industry Experience</h3>
                  <p className="text-sm text-muted-foreground mb-3">ML Engineer at RICEFW Technologies & Intel</p>
                  <div className="inline-block px-4 py-1.5 bg-secondary/10 rounded-full">
                    <p className="text-lg font-bold text-secondary">3+ Years</p>
                  </div>
                </div>
              </Card>
            </a>

            <a href="#publications" className="no-underline">
              <Card 
                className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-card border-border group animate-scale-in cursor-pointer hover:scale-105 flex flex-col h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-2xl">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Research Impact</h3>
                  <p className="text-sm text-muted-foreground mb-3">Published work & 15+ ML/AI Projects</p>
                  <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full">
                    <p className="text-lg font-bold text-accent">3 Publications</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          {/* Core Competencies */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Core Competencies</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Machine Learning & AI
                </h4>
                <p className="text-sm text-muted-foreground pl-4">
                  Expert in developing RAG-based systems, fine-tuning LLMs (LLaMA2, GPT-4), implementing computer vision models (Mask R-CNN, Faster R-CNN), and building semantic search engines with vector databases.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Cloud & Infrastructure
                </h4>
                <p className="text-sm text-muted-foreground pl-4">
                  Proficient in designing SOC 2-compliant architectures, deploying microservices on Azure and GCP, implementing CI/CD pipelines, and managing enterprise-scale cloud infrastructure.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Research & Innovation
                </h4>
                <p className="text-sm text-muted-foreground pl-4">
                  Published researcher with expertise in geospatial data processing, reinforcement learning for chip design, and creating interactive ML visualization tools for educational purposes.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Data Engineering
                </h4>
                <p className="text-sm text-muted-foreground pl-4">
                  Skilled in building custom ETL pipelines, migrating large-scale datasets (200K+ records), implementing data validation rules, and optimizing workflows for high-throughput processing.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
