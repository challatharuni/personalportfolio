import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Python Programming Intern",
    company: "Micro IT",
    period: "Internship",
    description:
      "Gained hands-on experience in Python programming, working on real-world projects and enhancing problem-solving skills.",
    skills: ["Python", "Data Structures", "Problem Solving"],
  },
  {
    title: "NLP Workshop Participant",
    company: "Professional Workshop",
    period: "Workshop",
    description:
      "Attended a comprehensive workshop on Natural Language Processing, learning about text processing, sentiment analysis, and language models.",
    skills: ["NLP", "Text Processing", "Machine Learning"],
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional experiences that have shaped my skills and industry
              knowledge.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.title}
                className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-primary font-medium text-sm mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary text-sm font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
