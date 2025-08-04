import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Shield, AlertTriangle, Scale, Calendar, Mail, CheckCircle } from "lucide-react";

const TermsOfService = () => {
  const serviceFeatures = [
    {
      icon: Users,
      title: "Community Platform",
      description: "Access to Discord community, forums, and collaboration spaces"
    },
    {
      icon: FileText,
      title: "Educational Resources",
      description: "Workshops, tutorials, documentation, and learning materials"
    },
    {
      icon: Shield,
      title: "Open Source Projects",
      description: "Contribution opportunities and project collaboration"
    },
    {
      icon: CheckCircle,
      title: "Mentorship Programs",
      description: "Connect with mentors and participate in guidance programs"
    }
  ];

  const userResponsibilities = [
    {
      title: "Respectful Communication",
      description: "Maintain professional and respectful interactions with all community members",
      examples: ["Use appropriate language", "Respect diverse viewpoints", "Avoid personal attacks"]
    },
    {
      title: "Content Guidelines",
      description: "Share appropriate and relevant content that adds value to the community",
      examples: ["No spam or promotional content", "Share accurate information", "Respect intellectual property"]
    },
    {
      title: "Collaborative Spirit",
      description: "Engage constructively in projects and community initiatives",
      examples: ["Provide constructive feedback", "Help fellow members", "Contribute meaningfully"]
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
              <span className="text-foreground">Terms of</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Welcome to ZenYukti! These terms govern your use of our community platform, 
              services, and resources. By joining us, you agree to these terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ZenYukti provides various services to support your tech journey and community engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceFeatures.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Terms Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              
              {/* Acceptance of Terms */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Scale className="w-6 h-6 text-primary" />
                    Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By accessing or using ZenYukti's services, website, Discord server, or participating 
                    in our community activities, you agree to be bound by these Terms of Service and 
                    all applicable laws and regulations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you do not agree with any part of these terms, you may not use our services. 
                    These terms apply to all visitors, users, and others who access or use the service.
                  </p>
                </CardContent>
              </Card>

              {/* User Responsibilities */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    User Responsibilities
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    As a member of our community, you agree to uphold these standards.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {userResponsibilities.map((responsibility, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="font-semibold text-foreground mb-2">
                        {responsibility.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {responsibility.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Examples:</h4>
                        <ul className="space-y-1">
                          {responsibility.examples.map((example, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Prohibited Conduct */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    Prohibited Conduct
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The following activities are strictly prohibited on our platform:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Content Violations</h3>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Harassment, bullying, or discriminatory content
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Spam, excessive self-promotion, or irrelevant content
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Sharing of copyrighted material without permission
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Platform Misuse</h3>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Attempting to hack or disrupt our services
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Creating multiple accounts to bypass restrictions
                        </li>
                        <li className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Impersonating other users or organizations
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Intellectual Property Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">ZenYukti Content</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The service and its original content, features, and functionality are and will remain 
                        the exclusive property of ZenYukti and its licensors. The service is protected by 
                        copyright, trademark, and other laws.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">User Content</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You retain ownership of content you create and share. However, by posting content, 
                        you grant ZenYukti a non-exclusive license to use, display, and distribute your 
                        content for community purposes. You are responsible for ensuring you have the 
                        right to share any content you post.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Open Source Contributions</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Contributions to ZenYukti's open source projects are governed by the respective 
                        project licenses. By contributing, you agree to license your contributions under 
                        the same terms as the project.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Account Termination
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may terminate or suspend your account and access to our services immediately, 
                    without prior notice or liability, for any reason, including but not limited to:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Violation of these Terms of Service
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Breach of our Code of Conduct
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fraudulent, abusive, or illegal activity
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon termination, your right to use the service will cease immediately. 
                    If you wish to terminate your account, you may contact us at any time.
                  </p>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Disclaimers and Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Service Availability</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our services are provided "as is" and "as available" without warranties of any kind. 
                        We do not guarantee that our services will be uninterrupted, secure, or error-free.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Educational Content</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Educational content and advice provided through our platform are for informational 
                        purposes only. We are not responsible for any decisions made based on this information.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Third-Party Links</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our service may contain links to third-party websites or services. We are not 
                        responsible for the content, privacy policies, or practices of third-party sites.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Changes to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision 
                    is material, we will try to provide at least 30 days notice prior to any new terms 
                    taking effect. Material changes will be communicated through our Discord server, 
                    email notifications, or website announcements.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-gradient-primary border-0">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Questions About These Terms?
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    If you have any questions about these Terms of Service, please don't hesitate 
                    to reach out to our team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => window.open('mailto:zenyukti@ayushhardeniya.site', '_blank')}
                    >
                      Contact Us
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary"
                      onClick={() => window.open('https://discord.gg/HuBa9r33kW', '_blank')}
                    >
                      Join Discord
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

export default TermsOfService;