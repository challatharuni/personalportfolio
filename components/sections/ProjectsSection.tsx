import { Car, Utensils, Home, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Smart Parking System",
    description:
      "A machine learning-based project that uses sensor data to predict available parking spaces, providing real-time availability predictions and suggesting optimal parking spots.",
    icon: Car,
    tags: ["Machine Learning", "Python", "Data Analysis", "IoT"],
    features: [
      "Real-time parking prediction",
      "Sensor data integration",
      "Smart city solution",
    ],
  },
  {
    title: "Grab a Bite",
    description:
      "A food delivery desktop application built with Python and Tkinter, featuring secure payment options, real-time menu browsing, and efficient order management.",
    icon: Utensils,
    tags: ["Python", "Tkinter", "MySQL", "Payment Integration"],
    features: [
      "User-friendly interface",
      "Secure payments",
      "Order tracking",
    ],
  },
  {
    title: "Voice-Activated Smart Home Control",
    description:
      "An intelligent home automation system integrating voice assistants like Alexa, Google Assistant, and Siri to control lighting, HVAC, and security systems.",
    icon: Home,
    tags: ["IoT", "Voice AI", "Home Automation", "Energy Efficiency"],
    features: [
      "Multi-assistant support",
      "Energy monitoring",
      "Security integration",
    ],
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my hands-on projects that demonstrate my skills in AI/ML,
              software development, and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <project.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-xs font-medium rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      disabled
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
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
