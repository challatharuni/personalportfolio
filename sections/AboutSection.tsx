import { User, MapPin, Languages, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const strengths = ["Confidence", "Problem Solving", "Team Work", "Critical Thinking"];
const interests = ["Travelling", "Sports", "Dancing"];
const languages = ["Telugu", "English"];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know me better - my background, interests, and what drives me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Main About Card */}
            <Card className="bg-card shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I am an enthusiastic and motivated B.Tech student specializing in
                  Computer Science and Engineering with AI and Machine Learning at
                  Malla Reddy University. I'm eager to contribute to and learn from
                  real-world projects, aiming to develop skills in areas like
                  web development, data analysis, and basic software development.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </CardContent>
            </Card>

            {/* Strengths Card */}
            <Card className="bg-card shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">My Strengths</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {strengths.map((strength) => (
                    <span
                      key={strength}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests Card */}
            <Card className="bg-card shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="bg-card shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Languages className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <span
                      key={language}
                      className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
