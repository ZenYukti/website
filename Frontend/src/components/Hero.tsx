import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Github, Users, Code, Share2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="text-foreground"> Welcome to
               <span className="bg-gradient-primary bg-clip-text text-transparent"> ZenYukti</span>
            </span>
            <br />
          </h1>
          {/*
          <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-4xl leading-tight mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learn. Build. Share.
            </span>
          </h3> */}
          <br />

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {/*Not just another club/society — a movement for all.*/}
            <span className="text-neon-green font-semibold"> Student-led initiative</span>, enabling 
            community-driven growth in tech.
          </p>


          {/* Stats Banner 
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-1">30-35</div>
                <div className="text-sm text-muted-foreground">Selected Among</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-1">1800</div>
                <div className="text-sm text-muted-foreground">Total Students</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-1">1700+</div>
                <div className="text-sm text-muted-foreground">We Build For</div>
              </div>
            </div>
          </div> */}


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-neon-green hover:bg-neon-green/90 shadow-neon text-lg px-8 py-6 group"
              onClick={() => window.open('https://discord.gg/HuBa9r33kW', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Join Discord
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white text-lg px-8 py-6 shadow-purple group"
              onClick={() => window.open('https://github.com/ZenYukti', '_blank')}
            >
              <Github className="w-5 h-5 mr-3" />
              GitHub
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border">
              <Users className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-medium">Community Driven</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border">
              <Code className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border">
              <Share2 className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium">Knowledge Sharing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;