import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Star, MessageCircle, AlertTriangle, Calendar, Mail, CheckCircle, XCircle } from "lucide-react";

const CodeOfConduct = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Respect & Inclusivity",
      description: "We welcome everyone regardless of background, experience level, or identity",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together to achieve common goals and support each other's growth",
      color: "text-blue-500"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for quality in our work and continuous improvement in our skills",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We act honestly, take responsibility for our actions, and maintain trust",
      color: "text-green-500"
    }
  ];

  const expectedBehaviors = [
    {
      title: "Be Welcoming and Inclusive",
      description: "Create an environment where everyone feels valued and can participate fully",
      examples: [
        "Use welcoming and inclusive language",
        "Respect different viewpoints and experiences", 
        "Help newcomers feel comfortable and supported",
        "Acknowledge and appreciate diverse contributions"
      ]
    },
    {
      title: "Communicate Constructively",
      description: "Express ideas clearly and provide feedback that helps others grow",
      examples: [
        "Give specific, actionable feedback",
        "Focus on the work, not the person",
        "Ask questions to understand before responding",
        "Acknowledge when you don't know something"
      ]
    },
    {
      title: "Collaborate Effectively",
      description: "Work together towards common goals and support community initiatives",
      examples: [
        "Share knowledge and resources freely",
        "Offer help when you can contribute",
        "Participate actively in discussions",
        "Credit others for their contributions"
      ]
    },
    {
      title: "Take Responsibility",
      description: "Own your actions and their impact on the community",
      examples: [
        "Acknowledge and learn from mistakes",
        "Follow through on commitments",
        "Respect community guidelines and decisions",
        "Apologize when you've caused harm"
      ]
    }
  ];

  const unacceptableBehaviors = [
    {
      category: "Harassment & Discrimination",
      items: [
        "Personal attacks, insults, or derogatory comments",
        "Discrimination based on identity, background, or experience level",
        "Unwelcome sexual attention or advances",
        "Trolling, inflammatory comments, or deliberate intimidation"
      ]
    },
    {
      category: "Disruptive Behavior",
      items: [
        "Spamming channels with irrelevant content",
        "Excessive self-promotion without community value",
        "Deliberately derailing productive conversations",
        "Repeatedly ignoring community guidelines"
      ]
    },
    {
      category: "Harmful Actions",
      items: [
        "Sharing others' private information without consent",
        "Encouraging or glorifying harmful behaviors",
        "Impersonating other community members or organizations",
        "Attempting to hack, exploit, or damage community resources"
      ]
    }
  ];

  const reportingProcess = [
    {
      step: "1",
      title: "Identify the Issue",
      description: "Document what happened, when, and who was involved"
    },
    {
      step: "2", 
      title: "Contact Moderators",
      description: "Reach out through Discord DM, email, or reporting channels"
    },
    {
      step: "3",
      title: "Investigation",
      description: "Our team will review the situation fairly and thoroughly"
    },
    {
      step: "4",
      title: "Resolution",
      description: "Appropriate action will be taken and you'll be informed of the outcome"
    }
  ];

  const lastUpdated = "August 2, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-foreground">Code of</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Conduct</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our shared commitment to creating a welcoming, inclusive, and supportive environment 
              where everyone can learn, grow, and contribute to the tech community.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These values guide every interaction and decision in our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              
              {/* Our Pledge */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Our Pledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the interest of fostering an open and welcoming environment, we as contributors, 
                    maintainers, and community members pledge to make participation in ZenYukti a 
                    harassment-free experience for everyone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to providing a friendly, safe, and welcoming environment for all, 
                    regardless of level of experience, gender identity and expression, sexual orientation, 
                    disability, personal appearance, body size, race, ethnicity, age, religion, 
                    nationality, or other similar characteristics.
                  </p>
                </CardContent>
              </Card>

              {/* Expected Behavior */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Expected Behavior
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    These behaviors help create a positive environment for everyone.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {expectedBehaviors.map((behavior, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-6">
                      <h3 className="font-semibold text-foreground mb-2">
                        {behavior.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {behavior.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Examples:</h4>
                        <ul className="space-y-1">
                          {behavior.examples.map((example, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Unacceptable Behavior */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-500" />
                    Unacceptable Behavior
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    These behaviors are not tolerated in our community.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {unacceptableBehaviors.map((category, index) => (
                    <div key={index} className="border-l-4 border-red-500 pl-6">
                      <h3 className="font-semibold text-foreground mb-3">
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Enforcement */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Enforcement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Community moderators are responsible for clarifying and enforcing our standards 
                    of acceptable behavior and will take appropriate and fair corrective action in 
                    response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Consequences</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">Minor Violations:</h4>
                          <ul className="space-y-1">
                            <li className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Educational conversation
                            </li>
                            <li className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Temporary mute or restriction
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">Serious Violations:</h4>
                          <ul className="space-y-1">
                            <li className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Temporary suspension
                            </li>
                            <li className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Permanent ban from community
                            </li>
                            <li className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Removal from all ZenYukti platforms
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reporting Process */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    Reporting Violations
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    How to report behavior that violates our community standards.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    If you experience or witness unacceptable behavior, or have any other concerns, 
                    please report it to our moderation team as soon as possible.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {reportingProcess.map((step, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold">{step.step}</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-dark-surface/50 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">How to Report</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Discord: Send a private message to any moderator</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Email: zenyukti@ayushhardeniya.site</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Anonymous: Use our reporting form (link in Discord)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community Spaces */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Community Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    This Code of Conduct applies to all ZenYukti community spaces, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Digital Spaces</h3>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Discord server and all channels
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          GitHub repositories and discussions
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Website and community forums
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Social media accounts
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Events & Activities</h3>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Online workshops and webinars
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Virtual and in-person meetups
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Mentorship programs
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Collaborative projects
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Attribution & Changes */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Updates and Attribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Changes to This Code</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may revise this Code of Conduct from time to time. The most current version 
                        will always be available on our website. We will announce significant changes 
                        through our Discord server and other community channels.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Attribution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This Code of Conduct is adapted from the Contributor Covenant, version 2.1, 
                        and incorporates elements from various open source community guidelines to 
                        create standards that reflect our community's values and needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-gradient-primary border-0">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Questions About Our Code of Conduct?
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Our community moderators are here to help clarify any aspects of our 
                    Code of Conduct and ensure everyone feels welcome and safe.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => window.open('mailto:zenyukti@ayushhardeniya.site', '_blank')}
                    >
                      Contact Moderators
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary"
                      onClick={() => window.open('https://discord.gg/HuBa9r33kW', '_blank')}
                    >
                      Join Our Community
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CodeOfConduct;