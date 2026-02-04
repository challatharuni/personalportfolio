import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    title: "Python Basics",
    issuer: "University of Michigan",
    platform: "Coursera",
    icon: "🐍",
  },
  {
    title: "Introduction to Relational Databases",
    issuer: "University of Michigan",
    platform: "Coursera",
    icon: "🗄️",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    platform: "AWS Academy",
    icon: "☁️",
  },
  {
    title: "AWS Academy Cloud Operations",
    issuer: "Amazon Web Services",
    platform: "AWS Academy",
    icon: "⚙️",
  },
];

export function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise in various
              technologies and platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="group bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <div className="p-2 rounded-lg bg-primary/10 inline-flex mb-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {cert.platform}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
