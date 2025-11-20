import { ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Image Caption Generation for Low Light Images",
    conference: "ICICCT 2022",
    publisher: "Springer",
    date: "Nov 2022",
    link: "https://doi.org/10.1007/978-3-031-20977-2_5",
    highlights: [
      "Proposed a novel image captioning system tailored for low-light/twilight images, addressing a gap where most existing captioning models were built on well-lit datasets.",
      "Pre-processed images using a Retinex theory–based enhancement algorithm to recover hidden details and improve visual clarity.",
      "Implemented an encoder–decoder deep learning model trained on the Flickr8k dataset to generate captions for enhanced images.",
      "Validated results using BLEU score metrics, demonstrating improved caption quality compared to traditional captioning baselines."
    ],
    technologies: ["Deep Learning", "Computer Vision", "NLP", "Retinex Theory", "Encoder-Decoder"]
  },
  {
    title: "Fake News Detection on Indian Sources",
    conference: "ICIPCN 2022",
    publisher: "Springer",
    date: "Jul 2022",
    link: "https://doi.org/10.1007/978-3-031-12413-6_3",
    highlights: [
      "Addressed the rising issue of fake news propagation in Indian media by developing a deep learning–based classification model.",
      "Built a system using NLP techniques (TF-IDF, embeddings, recurrent models) to classify articles as real or fake.",
      "Trained and tested the model on datasets from Times of India, Politifact, and other Indian news sources, improving accuracy across multilingual content.",
      "Highlighted the social and political implications of misinformation, showing how AI can support election integrity, digital literacy, and media verification."
    ],
    technologies: ["Deep Learning", "NLP", "TF-IDF", "RNN", "Text Classification"]
  },
  {
    title: "Similar Face Detection for Indian Faces",
    conference: "INCET 2021",
    publisher: "IEEE Explore",
    date: "Jun 2021",
    link: "https://doi.org/10.1109/INCET51464.2021.9456199",
    highlights: [
      "Tackled the problem of face similarity detection with limited datasets and high computational cost of CNNs.",
      "Designed and trained a Siamese Neural Network architecture capable of one-shot learning, requiring fewer training samples compared to CNN-based approaches.",
      "Built a new dataset of Indian faces and demonstrated the system's ability to accurately predict top matches for a given image.",
      "Achieved competitive accuracy with lower computational cost, proving the effectiveness of SNNs in identity verification and security systems."
    ],
    technologies: ["Siamese Networks", "Computer Vision", "One-Shot Learning", "Face Recognition"]
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Publications & Research</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic contributions and peer-reviewed research in Machine Learning, Computer Vision, and NLP
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/50 animate-slide-up hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="mt-2 flex flex-wrap gap-2 items-center">
                          <Badge variant="secondary">{pub.conference}</Badge>
                          <Badge variant="outline">{pub.publisher}</Badge>
                          <span className="text-sm text-muted-foreground">{pub.date}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-shrink-0 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Paper
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Highlights</h4>
                  <ul className="space-y-2">
                    {pub.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground transition-colors duration-300">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
