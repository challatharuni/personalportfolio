import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    degree: "B.Tech - Computer Science and Engineering (AI & ML)",
    institution: "Malla Reddy University",
    period: "2022 - 2026",
    score: "8.31 CGPA",
    highlight: false,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sreenidhi Junior College",
    period: "2020 - 2022",
    score: "83%",
    highlight: false,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sri Chaitanya Techno School",
    period: "2019 - 2020",
    score: "100%",
    highlight: true,
  },
];

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and achievements that shaped my foundation in
              technology.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative mb-8 last:mb-0 ${
                    index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 top-6 w-4 h-4 rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 ${
                      edu.highlight ? "bg-primary" : "bg-muted-foreground"
                    }`}
                  />

                  <Card
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } bg-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${
                      edu.highlight ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`flex items-start gap-3 mb-3 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          <p className="text-muted-foreground text-sm">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex items-center gap-4 text-sm ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div
                          className={`flex items-center gap-1 ${
                            edu.highlight
                              ? "text-primary font-semibold"
                              : "text-muted-foreground"
                          }`}
                        >
                          <Award className="h-4 w-4" />
                          <span>{edu.score}</span>
                        </div>
                      </div>

                      {edu.highlight && (
                        <div
                          className={`mt-3 ${
                            index % 2 === 0 ? "md:text-right" : ""
                          }`}
                        >
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            🏆 Perfect Score Achievement
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
