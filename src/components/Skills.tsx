import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript", "SQL", "R", "Shell Scripting", "TCL", "YAML"]
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "JAX", "MXNet", "ONNX"]
  },
  {
    title: "Generative AI & LLMs",
    skills: ["GPT-4", "LLaMA2", "Whisper", "Azure OpenAI", "LangChain", "LangGraph", "RAG", "LoRA", "Fine-tuning", "Prompt Engineering", "Hugging Face", "Transformers"]
  },
  {
    title: "Computer Vision & NLP",
    skills: ["OpenCV", "Mask R-CNN", "Faster R-CNN", "YOLO", "SentenceTransformers", "SpaCy", "NLTK", "Document AI", "Form Recognizer", "OCR"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Azure OpenAI", "Azure Functions", "Azure App Service", "Azure Event Grid", "Azure Logic Apps", "GCP Cloud Run", "GCP Eventarc", "GCP Workflows", "AWS", "ARM Templates", "Terraform", "Azure Key Vault", "IAM", "RBAC"]
  },
  {
    title: "Data Engineering & Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Vector Databases", "ETL Pipelines", "Pandas", "NumPy", "Apache Spark", "Azure Cognitive Search"]
  },
  {
    title: "MLOps & DevOps",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "OIDC", "Git", "Linux", "Monitoring", "Model Deployment", "A/B Testing"]
  },
  {
    title: "Frameworks & APIs",
    skills: ["Flask", "FastAPI", "Django", "REST API", "GraphQL", "RabbitMQ", "Microservices", "Event-Driven Architecture"]
  },
  {
    title: "ML Specializations",
    skills: ["Time Series Forecasting", "GraphSAGE", "K-means Clustering", "Open3D", "cKDTree", "4-bit Quantization", "Model Optimization", "Semantic Search", "Entity Extraction"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-16 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-8 bg-gradient-hero rounded-full" />
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
