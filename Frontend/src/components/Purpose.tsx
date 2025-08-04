import { Card, CardContent } from "@/components/ui/card";
import { Brain, Rocket, Heart, Users, Code2, Lightbulb } from "lucide-react";

const Purpose = () => {
  const purposes = [
    {
      icon: Brain,
      title: "Learn",
      description: "Continuous learning through peer-to-peer knowledge sharing and mentorship.",
      color: "neon-green"
    },
    {
      icon: Rocket,
      title: "Build",
      description: "Create real-world projects that solve problems and showcase skills.",
      color: "neon-purple"
    },
    {
      icon: Heart,
      title: "Share",
      description: "Give back to the community by sharing knowledge and helping others grow.",
      color: "neon-blue"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Openness",
      description: "Welcoming everyone regardless of skill level or background"
    },
    {
      icon: Code2,
      title: "Collaboration",
      description: "Working together across domains to create something amazing"
    },
    {
      icon: Lightbulb,
      title: "Growth",
      description: "Continuous improvement and learning from each other"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-dark-surface"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Purpose Section */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
            <span className="text-foreground">Why </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">ZenYukti</span>
            <span className="text-foreground"> Exists</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in the power of community-driven learning. ZenYukti isn't just about individual growth—
            it's about lifting everyone up together.
          </p>
        </div>

        {/* Main Purpose Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {purposes.map((purpose, index) => {
            const IconComponent = purpose.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-card"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${purpose.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${purpose.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                    {purpose.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {purpose.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-secondary/10 rounded-3xl p-8 sm:p-12 border border-accent/20 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-foreground">
              "We build for the 1700+"
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While only 30-35 students were selected among 1800 applicants, we recognized that 
              the remaining 1700+ students also deserved opportunities to learn, grow, and contribute. 
              ZenYukti bridges that gap by creating an inclusive platform where everyone can participate 
              in the tech ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <span className="text-neon-green">📈 Growth for All</span>
              <span className="text-neon-purple">🤝 Inclusive Community</span>
              <span className="text-neon-blue">🌟 Equal Opportunities</span>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-foreground">
            Our Core Values
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="bg-secondary/30 rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Purpose;