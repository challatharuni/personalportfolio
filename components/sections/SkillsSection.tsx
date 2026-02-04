import { Code, Server, Cloud, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: [
      { name: "AWS Cloud Foundations", level: 80 },
      { name: "AWS Cloud Operations", level: 75 },
      { name: "Git & GitHub", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Team Work", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 85 },
    ],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical and soft skills developed
              through education and hands-on projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="bg-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${categoryIndex * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="space-y-2"
                        style={{
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                        }}
                      >
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress
                          value={isVisible ? skill.level : 0}
                          className="h-2 bg-secondary"
                        />
                      </div>
                    ))}
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
