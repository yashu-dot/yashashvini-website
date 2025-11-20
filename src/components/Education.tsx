import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Michigan State University",
    location: "Michigan, United States",
    period: "Jan 2023 - Jan 2025",
    gpa: "4.0 / 4.0",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Data Science",
      "Cloud Computing"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "PES University",
    location: "Bangalore, India",
    period: "2018 - 2022",
    gpa: "3.82 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management",
      "Operating Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Web Technologies"
    ]
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-16 rounded-full" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-card-hover transition-all duration-300 bg-card border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-primary font-semibold mb-1">{edu.school}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span className="text-primary font-semibold">GPA: {edu.gpa}</span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2 text-foreground">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
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
