import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork, Users, Filter } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "ZenDash",
      description: "A community dashboard for tracking contributions, projects, and member activity across the platform.",
      category: "tools",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      stars: 42,
      forks: 18,
      contributors: 8,
      status: "active",
      difficulty: "intermediate"
    },
    {
      title: "SkillMatcher",
      description: "AI-powered project matching system that connects members with projects based on their skills and interests.",
      category: "hackathon",
      tech: ["Python", "FastAPI", "ML", "React"],
      stars: 67,
      forks: 23,
      contributors: 12,
      status: "active",
      difficulty: "advanced"
    },
    {
      title: "EventBot",
      description: "Discord bot for managing community events, reminders, and automated announcements.",
      category: "tools",
      tech: ["Python", "Discord.py", "SQLite"],
      stars: 28,
      forks: 9,
      contributors: 5,
      status: "completed",
      difficulty: "beginner"
    },
    {
      title: "CodeReview Helper",
      description: "VS Code extension that provides automated code review suggestions and best practices for beginners.",
      category: "learning",
      tech: ["TypeScript", "VS Code API", "Node.js"],
      stars: 156,
      forks: 34,
      contributors: 15,
      status: "active",
      difficulty: "intermediate"
    },
    {
      title: "Community Portfolio",
      description: "Showcase platform where members can display their projects and achievements in a beautiful portfolio format.",
      category: "showcase",
      tech: ["Next.js", "Tailwind", "Supabase", "Framer"],
      stars: 89,
      forks: 27,
      contributors: 11,
      status: "active",
      difficulty: "intermediate"
    },
    {
      title: "Learning Pathways",
      description: "Interactive learning roadmaps for different tech domains with community-curated resources.",
      category: "learning",
      tech: ["React", "D3.js", "Firebase", "Markdown"],
      stars: 73,
      forks: 21,
      contributors: 9,
      status: "active",
      difficulty: "beginner"
    }
  ];

  const filters = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "hackathon", name: "Hackathon", count: projects.filter(p => p.category === "hackathon").length },
    { id: "learning", name: "Learning", count: projects.filter(p => p.category === "learning").length },
    { id: "tools", name: "Tools", count: projects.filter(p => p.category === "tools").length },
    { id: "showcase", name: "Showcase", count: projects.filter(p => p.category === "showcase").length },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-neon-green/20 text-neon-green";
      case "intermediate": return "bg-neon-purple/20 text-neon-purple";
      case "advanced": return "bg-red-500/20 text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-neon-green/20 text-neon-green";
      case "completed": return "bg-neon-blue/20 text-neon-blue";
      case "planning": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-foreground">Open Source </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Real projects built by our community. Join us in creating solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-neon-green hover:bg-neon-green/90 shadow-neon">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white">
                Suggest Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-dark-surface border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Filter className="w-5 h-5 text-muted-foreground mr-2 mt-2" />
            {filters.map((filterItem) => (
              <Button
                key={filterItem.id}
                variant={filter === filterItem.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter(filterItem.id)}
                className={filter === filterItem.id ? "bg-primary" : ""}
              >
                {filterItem.name} ({filterItem.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-display mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className={getDifficultyColor(project.difficulty)}>
                      {project.difficulty}
                    </Badge>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.contributors}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contribute CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-secondary/10 rounded-3xl p-12 border border-accent/20">
              <h3 className="font-display font-bold text-3xl mb-4 text-foreground">
                Ready to Contribute?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our GitHub organization and start contributing to projects that interest you. 
                Whether you're fixing bugs, adding features, or creating documentation—every contribution matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-neon-green hover:bg-neon-green/90 shadow-neon">
                  <Github className="w-5 h-5 mr-2" />
                  Join GitHub Org
                </Button>
                <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white">
                  Contribution Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;