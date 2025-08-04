import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Users, Database, Mail, AlertCircle, Calendar } from "lucide-react";

const Privacy = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement robust security measures to protect your personal information"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect and how we use it"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your data is encrypted and stored using industry-standard security practices"
    },
    {
      icon: Users,
      title: "User Control",
      description: "You have control over your data and can request changes or deletion"
    }
  ];

  const dataTypes = [
    {
      category: "Personal Information",
      items: ["Name and email address", "Profile information", "Communication preferences"],
      purpose: "To provide community services and communication"
    },
    {
      category: "Technical Data",
      items: ["IP address", "Browser type", "Device information", "Usage analytics"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Community Data",
      items: ["Discord interactions", "GitHub contributions", "Project participation"],
      purpose: "To facilitate community engagement and collaboration"
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
              <span className="text-foreground">Privacy</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your privacy matters to us. Learn how we collect, use, and protect your information 
              as part of the ZenYukti community.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Privacy Principles
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide how we handle your personal information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card key={index} className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Privacy Policy Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              
              {/* Introduction */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to ZenYukti, a community-driven platform focused on technology education, 
                    open-source collaboration, and professional development. This Privacy Policy explains 
                    how we collect, use, disclose, and safeguard your information when you visit our website, 
                    participate in our community, or use our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using ZenYukti services, you agree to the collection and use of 
                    information in accordance with this policy. If you do not agree with our policies 
                    and practices, please do not use our services.
                  </p>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Database className="w-6 h-6 text-primary" />
                    Information We Collect
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    We collect information to provide better services to our community members.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {dataTypes.map((dataType, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="font-semibold text-foreground mb-2">
                        {dataType.category}
                      </h3>
                      <ul className="space-y-1 mb-3">
                        {dataType.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground italic">
                        Purpose: {dataType.purpose}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Community Services</h3>
                        <ul className="space-y-2">
                          <li className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Facilitate Discord community interactions
                          </li>
                          <li className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Manage project collaborations
                          </li>
                          <li className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Provide mentorship opportunities
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Communication</h3>
                        <ul className="space-y-2">
                          <li className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Send community updates and newsletters
                          </li>
                          <li className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Respond to inquiries and support requests
                          </li>
                          <li className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Notify about events and opportunities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Information Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties. 
                    However, we may share information in the following circumstances:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">With Your Consent:</strong>
                        <p className="text-muted-foreground">We may share information when you give us explicit permission.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Legal Requirements:</strong>
                        <p className="text-muted-foreground">We may disclose information if required by law or to protect rights and safety.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Service Providers:</strong>
                        <p className="text-muted-foreground">We may share data with trusted partners who help us operate our services (e.g., Discord, GitHub).</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Your Privacy Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    You have certain rights regarding your personal information. You may:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Access your data</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Update or correct information</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Request data deletion</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Opt-out of communications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Data portability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Withdraw consent</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-6">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:zenyukti@ayushhardeniya.site" className="text-primary hover:underline">
                      zenyukti@ayushhardeniya.site
                    </a>
                  </p>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Lock className="w-6 h-6 text-primary" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or 
                    destruction. These measures include encryption, secure servers, and regular security 
                    assessments. However, please note that no method of transmission over the Internet 
                    or electronic storage is 100% secure.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Policy */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Changes to This Privacy Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any 
                    changes by posting the new Privacy Policy on this page and updating the "Last 
                    updated" date. You are advised to review this Privacy Policy periodically for 
                    any changes. Changes to this Privacy Policy are effective when they are posted 
                    on this page.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-gradient-primary border-0">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Questions About Privacy?
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please don't hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => window.open('mailto:zenyukti@ayushhardeniya.site', '_blank')}
                    >
                      Email Us
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary"
                      onClick={() => window.open('https://discord.gg/HuBa9r33kW', '_blank')}
                    >
                      Join Our Discord
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

export default Privacy;