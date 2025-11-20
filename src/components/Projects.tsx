import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, RotateCcw } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Covid-19 Classification",
    description: "Application for identification of COVID using MRI scans with 97% accuracy using CNNs and GANs.",
    image: "https://yashu-dot.github.io/assets/img/projects/covid.png",
    tags: ["Deep Learning", "CNN", "GAN", "Medical AI"],
    github: "https://github.com/yashu-dot/Covid-19-Classification",
    highlights: ["97% accuracy", "GAN-based augmentation", "Real-time detection"],
    details: [
      "Developed deep learning system for COVID-19 detection from MRI scans",
      "Leverages CNNs for feature extraction and classification",
      "Employs GANs for data augmentation to improve model robustness",
      "Achieves 97% accuracy in identifying COVID-19 positive cases",
      "Capabilities for real-time inference suitable for clinical deployment"
    ]
  },
  {
    title: "Stock Market Prediction",
    description: "Time-series forecasting system using LSTM networks with sentiment analysis integration.",
    image: "https://yashu-dot.github.io/assets/img/projects/stock.png",
    tags: ["LSTM", "Time Series", "NLP", "Finance"],
    github: "https://github.com/yashu-dot/Stock-Market-Prediction",
    highlights: ["63% prediction accuracy", "Sentiment analysis", "LSTM optimization"],
    details: [
      "Built time-series forecasting combining LSTM with real-time sentiment analysis",
      "Processes historical stock data alongside news sentiment",
      "Optimized LSTM architectures with financial indicator features",
      "Integration of social media sentiment scores",
      "Achieves 63% prediction accuracy on stock price trends"
    ]
  },
  {
    title: "Network Anomaly Detection",
    description: "Advanced cybersecurity system using GANs, PCA, and autoencoders for anomaly detection.",
    image: "https://yashu-dot.github.io/assets/img/projects/network.jpeg",
    tags: ["Cybersecurity", "GAN", "PCA", "ML"],
    github: "https://github.com/yashu-dot/Network-Anomaly-Analysis-",
    highlights: ["High accuracy detection", "Dimensionality reduction", "Real-time monitoring"],
    details: [
      "Implemented sophisticated network anomaly detection system",
      "Uses GANs for learning normal traffic patterns",
      "PCA for dimensionality reduction",
      "Autoencoders for unsupervised anomaly detection",
      "Real-time monitoring with high accuracy threat identification"
    ]
  },
  {
    title: "Language Detection",
    description: "Multilingual identification system with BERT and LSTM, achieving 86% accuracy across 60 languages.",
    image: "https://yashu-dot.github.io/assets/img/projects/project5.png",
    tags: ["NLP", "BERT", "LSTM", "Multilingual"],
    github: "https://github.com/yashu-dot/Language-Detection-using-NLP",
    highlights: ["60 languages", "86% accuracy", "Word2Vec embeddings"],
    details: [
      "Created language detection system for 60 languages with 86% accuracy",
      "Combines BERT transformers for contextual understanding",
      "LSTM networks for sequence modeling",
      "Word2Vec embeddings for semantic representation",
      "Support for code-mixed text in multilingual contexts"
    ]
  },
  {
    title: "Restaurant Recommendation",
    description: "Intelligent recommendation system with 98.5% rating accuracy using Yelp dataset.",
    image: "https://yashu-dot.github.io/assets/img/projects/project6.png",
    tags: ["Recommendation", "ML", "Data Science"],
    github: "https://github.com/yashu-dot/Sentiment-Analysis-and-Recommender-System-using-Yelp-Dataset",
    highlights: ["98.5% accuracy", "Clustering algorithms", "Sentiment analysis"],
    details: [
      "Developed recommendation system using Yelp dataset",
      "Employs collaborative filtering and content-based filtering",
      "Hybrid approaches with 98.5% rating prediction accuracy",
      "Sentiment analysis of user reviews",
      "User clustering for personalized dining suggestions"
    ]
  },
  {
    title: "Image Caption Generation",
    description: "Caption generator for low-light images with enhancement and captioning models.",
    image: "https://yashu-dot.github.io/assets/img/projects/project7.png",
    tags: ["Computer Vision", "NLP", "Deep Learning"],
    github: "https://github.com/yashu-dot/Image-Caption-Generation-for-Low-Light-Images",
    highlights: ["0.6-0.7 BLEU scores", "Low-light enhancement", "Linguistic accuracy"],
    details: [
      "Designed image captioning system for low-light and twilight images",
      "Retinex-based image enhancement to recover hidden details",
      "Encoder-decoder architecture for caption generation",
      "Achieved BLEU scores of 0.6-0.7",
      "Strong linguistic accuracy and semantic understanding"
    ]
  },
  {
    title: "Fake News Detection",
    description: "NLP-powered system achieving 98% accuracy using LSTM and Word2Vec on ISOT dataset.",
    image: "https://yashu-dot.github.io/assets/img/projects/project9.png",
    tags: ["NLP", "Deep Learning", "LSTM"],
    github: "https://github.com/yashu-dot/FakeNewsDetection",
    highlights: ["98% accuracy", "Real-time testing", "Word2Vec embeddings"],
    details: [
      "Built robust fake news detection using deep learning and NLP",
      "LSTM networks for capturing sequential patterns in text",
      "Word2Vec embeddings for semantic representation",
      "Trained on ISOT fake news dataset",
      "98% accuracy with real-time classification capabilities"
    ]
  },
  {
    title: "Similar Faces Detection",
    description: "Facial recognition system using Siamese Neural Networks for one-shot learning.",
    image: "https://yashu-dot.github.io/assets/img/projects/project10.png",
    tags: ["Computer Vision", "Siamese Networks", "Deep Learning"],
    github: "https://github.com/yashu-dot/Similar-Face-Detection-",
    highlights: ["One-shot learning", "Top-3 similarity matching", "Efficient recognition"],
    details: [
      "Implemented facial recognition using Siamese Neural Networks",
      "Efficient one-shot learning with minimal training samples",
      "Learning embedding spaces for similar face positioning",
      "Top-3 similarity matching capability",
      "Lower computational costs compared to traditional CNNs"
    ]
  },
  {
    title: "YouTube Trends Analysis",
    description: "Analyzed YouTube trends in six countries with 98% accuracy in category prediction.",
    image: "https://yashu-dot.github.io/assets/img/projects/project11.png",
    tags: ["Data Science", "ML", "Analytics"],
    github: "https://github.com/yashu-dot/You-Tube-Analysis",
    highlights: ["98% accuracy", "6 countries analyzed", "Ensemble learning"],
    details: [
      "Comprehensive analysis of YouTube trending videos across 6 countries",
      "Ensemble learning techniques for 98% category prediction accuracy",
      "Feature engineering from video metadata and engagement metrics",
      "Temporal trend identification",
      "Cross-country comparative insights on content preferences"
    ]
  },
  {
    title: "Poisson Equation Solver",
    description: "Optimized 2D Poisson equation solving with SOR and hybrid parallel models.",
    image: "https://yashu-dot.github.io/assets/img/projects/poisson.png",
    tags: ["HPC", "Numerical Methods", "Parallel Computing"],
    github: "https://github.com/yashu-dot/Solving-Poisson-equation-using-Successive-Over-Relaxation",
    highlights: ["Hybrid OPENMP+MPI", "Major runtime efficiency", "SOR optimization"],
    details: [
      "High-performance solution for 2D Poisson equations using SOR method",
      "Hybrid parallelization combining OpenMP and MPI",
      "Major improvements in runtime efficiency",
      "Optimized iteration strategies and load balancing",
      "Effective domain decomposition for large-scale scientific computing"
    ]
  },
  {
    title: "YACS Scheduler",
    description: "Yet Another Centralized Scheduler with dynamic task allocation for big data.",
    image: "https://yashu-dot.github.io/assets/img/projects/project13.png",
    tags: ["Distributed Systems", "Big Data", "Scheduling"],
    github: "https://github.com/yashu-dot/YACS",
    highlights: ["Round Robin", "Least Loaded", "Dynamic allocation"],
    details: [
      "Centralized task scheduling for distributed computing environments",
      "Multiple allocation strategies: Round Robin and Least Loaded",
      "Dynamic task allocation based on worker availability",
      "Fault tolerance mechanisms and real-time monitoring",
      "Efficient load balancing across heterogeneous clusters"
    ]
  },
  {
    title: "CPP Compiler",
    description: "Compact C++ compiler built with yacc and lex covering all compilation phases.",
    image: "https://yashu-dot.github.io/assets/img/projects/project14.png",
    tags: ["Compiler Design", "C++", "Systems"],
    github: "https://github.com/yashu-dot/CPP-Compiler",
    highlights: ["Full compilation phases", "Error handling", "Code optimization"],
    details: [
      "Compact C++ compiler covering all major compilation phases",
      "Lexical analysis, syntax parsing, semantic analysis",
      "Intermediate code generation and optimization",
      "Built using yacc for parser and lex for lexical analysis",
      "Comprehensive error handling and symbol table management"
    ]
  },
  {
    title: "Ulterior Website",
    description: "Literary website for reading books with integrated fun games, built with modern web technologies.",
    image: "https://yashu-dot.github.io/assets/img/projects/project8.png",
    tags: ["Web Development", "PHP", "Bootstrap", "JavaScript"],
    github: "https://github.com/yashu-dot/WT-Project",
    highlights: ["User-friendly interface", "Free book access", "Responsive design"],
    details: [
      "Created 'The Ulterior,' a literary site with free book access",
      "Used HTML, CSS, PHP, Bootstrap, and JavaScript for development",
      "Designed user-friendly and responsive interface for seamless reading",
      "Connected readers globally, enhancing engagement and satisfaction",
      "Integrated entertainment features with games alongside reading materials"
    ]
  },
  {
    title: "Hospital Management System",
    description: "Healthcare database management system with MySQL ensuring seamless patient record maintenance.",
    image: "https://yashu-dot.github.io/assets/img/projects/project12.png",
    tags: ["Database", "MySQL", "Healthcare", "Data Management"],
    github: "https://github.com/yashu-dot/hospital-management",
    highlights: ["Patient record management", "MySQL implementation", "Accurate data retrieval"],
    details: [
      "Managed healthcare database, maintained patient records for care planning",
      "Ensured accuracy across inpatient and outpatient services",
      "Implemented with MySQL, tested with queries and triggers",
      "Enabled seamless data retrieval for hospital operations",
      "Comprehensive database design for healthcare workflows"
    ]
  },
  {
    title: "Page Rank Algorithm",
    description: "Implemented Map Reduce for PageRank on Google contest data, automating score calculations efficiently.",
    image: "https://yashu-dot.github.io/assets/img/projects/project15.png",
    tags: ["Map Reduce", "Distributed Systems", "Big Data", "Algorithms"],
    github: "https://github.com/yashu-dot/Page-Rank-",
    highlights: ["Map Reduce implementation", "Iterative calculations", "Distributed processing"],
    details: [
      "Implemented Map Reduce for PageRank on 2002 Google contest data",
      "Automated iterative PageRank score calculation in distributed environment",
      "Leveraged Map and Reduce for iterative dataset processing",
      "Simulated PageRank's iterative nature effectively with Map Reduce",
      "Demonstrated scalability of distributed computing for ranking algorithms"
    ]
  }
];

export const Projects = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Showcase of machine learning and AI projects spanning computer vision, NLP, and data science
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`flip-card h-[500px] ${flippedCards.includes(index) ? 'flipped' : ''}`}>
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <Card className="flip-card-front overflow-hidden hover:shadow-lg transition-all duration-300 bg-card border-border animate-scale-in flex flex-col h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative overflow-hidden aspect-video group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <Button 
                          size="sm" 
                          variant="default" 
                          className="backdrop-blur-md bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
                          onClick={() => toggleFlip(index)}
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-foreground transition-colors duration-300">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 transition-all duration-300 hover:bg-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <ul className="space-y-2 mb-4 flex-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2 transition-colors duration-300">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-2 mt-auto">
                        <Button size="sm" variant="outline" className="flex-1 transition-all duration-300" onClick={() => toggleFlip(index)}>
                          Details
                        </Button>
                        <Button size="sm" asChild className="transition-all duration-300">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Back of card */}
                  <Card className="flip-card-back overflow-hidden bg-card border-border flex flex-col h-full">
                    <div className="relative p-6 pb-4">
                      <h3 className="text-lg font-bold text-foreground pr-12">{project.title}</h3>
                      <div className="absolute top-3 right-3">
                        <Button 
                          size="sm" 
                          variant="default" 
                          className="backdrop-blur-md bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
                          onClick={() => toggleFlip(index)}
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 pb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2.5">
                        {project.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-3 leading-relaxed transition-colors duration-300">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto p-6 pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 transition-all duration-300 hover:bg-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full transition-all duration-300" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};