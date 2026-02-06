import { Layout } from "@/components/Layout";
import { Zap, Github, Linkedin, Mail, Users, Trophy, Lightbulb } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  contribution: string;
  social?: {
    github?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Harsh",
    role: "Product & Design Lead",
    contribution: "Vision, UI/UX design, user experience strategy",
  },
  {
    name: "Harshit",
    role: "Full-Stack Engineer",
    contribution: "Architecture, backend systems, API integration",
  },
  {
    name: "Zafar",
    role: "AI/ML Specialist",
    contribution: "Email summarization, NLP models, intelligence layer",
  },
  {
    name: "Vaibhav",
    role: "Frontend Developer",
    contribution: "UI implementation, frontend architecture, animations",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="floating-card p-12 mb-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-lg bg-gradient-to-r from-primary to-accent">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-display text-foreground">Project Nexus</h1>
              <p className="text-lg text-muted-foreground">AI Fusion Hackathon 2026</p>
            </div>
          </div>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Project Nexus reimagines campus life through intelligent AI. We transform information overload into clarity, helping students focus on what matters—their growth and success.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <Trophy className="w-5 h-5 text-accent" />
              <span className="font-semibold">Hackathon Entry</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Lightbulb className="w-5 h-5 text-accent" />
              <span className="font-semibold">AI-Powered Campus App</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="floating-card p-8">
            <h2 className="text-subheading font-poppins mb-4 text-primary">Our Vision</h2>
            <p className="text-foreground leading-relaxed">
              Create a unified digital nervous system for student life. Every student deserves an app that understands their needs, anticipates challenges, and makes daily interactions simple, fast, and intuitive.
            </p>
          </div>
          <div className="floating-card p-8">
            <h2 className="text-subheading font-poppins mb-4 text-accent">Core Mission</h2>
            <p className="text-foreground leading-relaxed">
              Reduce information overload. Transform long, complex emails into actionable one-liners. Provide AI-powered academic assistance. Build the intelligent campus ecosystem students deserve.
            </p>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mb-16">
          <h2 className="text-heading font-poppins mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="floating-card p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Daily Pulse</h3>
                  <p className="text-sm text-muted-foreground">
                    AI summarizes campus emails into actionable one-liners. Categorizes by type (Academic, Events, Urgent, General). Highlights deadlines visually with 3D floating cards.
                  </p>
                </div>
              </div>
            </div>

            <div className="floating-card p-6 border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Academic Intelligence</h3>
                  <p className="text-sm text-muted-foreground">
                    AI tutor explains concepts in simple language. Assists with study planning and exam prep. Answers academic doubts intelligently with real-time responses.
                  </p>
                </div>
              </div>
            </div>

            <div className="floating-card p-6 border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3D Design System</h3>
                  <p className="text-sm text-muted-foreground">
                    Immersive UI with floating cards, depth shadows, and smooth micro-interactions. Futuristic yet minimal. Soft neon glow for active elements.
                  </p>
                </div>
              </div>
            </div>

            <div className="floating-card p-6 border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 flex-shrink-0">
                  <Trophy className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Intelligent Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    AI learns patterns. Anticipates student needs. Provides personalized recommendations. Adapts to campus rhythms and individual preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-heading font-poppins">Team Code Crafters</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            A dedicated team of designers, engineers, and AI specialists building the future of campus life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="floating-card p-6 text-center group hover:glow-accent"
                style={{
                  animation: `float-slow 8s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.contribution}</p>

                {member.social && (
                  <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-border/40">
                    {member.social.github && (
                      <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="floating-card p-8 mb-16 bg-muted/40 border-muted">
          <h2 className="text-subheading font-poppins mb-6">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Frontend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>React 18 + TypeScript</li>
                <li>Vite Build System</li>
                <li>TailwindCSS 3</li>
                <li>Framer Motion Animations</li>
                <li>React Router</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Backend & AI</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Express.js</li>
                <li>NLP Models</li>
                <li>Email Summarization</li>
                <li>Real-time Processing</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Design & UX</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>3D UI Principles</li>
                <li>Micro-interactions</li>
                <li>Accessibility Focus</li>
                <li>Responsive Design</li>
                <li>Dark Mode Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="floating-card p-12 text-center bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-accent/30">
          <h2 className="text-heading font-poppins mb-4">Join the AI Revolution in Campus Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Project Nexus is just the beginning. We're building the intelligent campus ecosystem of the future. Have questions or want to collaborate? Get in touch!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:team@projectnexus.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
