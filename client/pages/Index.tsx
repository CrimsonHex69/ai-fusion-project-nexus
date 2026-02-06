import { Layout } from "@/components/Layout";
import { Bell, BookOpen, Calendar, AlertCircle, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface Update {
  id: string;
  title: string;
  summary: string;
  category: "academic" | "events" | "urgent" | "general";
  deadline?: string;
  priority: "low" | "medium" | "high";
  time: string;
}

const updates: Update[] = [
  {
    id: "1",
    title: "CS301 Assignment Deadline",
    summary: "Algorithm Design project due in 3 days. Submit via course portal.",
    category: "academic",
    deadline: "Mar 8, 2026",
    priority: "high",
    time: "2 hours ago",
  },
  {
    id: "2",
    title: "Campus Tech Fest 2026",
    summary: "Annual hackathon registration open. Teams of 3-5. First 50 teams get merchandise.",
    category: "events",
    priority: "medium",
    time: "5 hours ago",
  },
  {
    id: "3",
    title: "Library Closure Notice",
    summary: "Main library closed for maintenance tomorrow. Use east wing or reserve study rooms.",
    category: "urgent",
    priority: "high",
    time: "1 hour ago",
  },
  {
    id: "4",
    title: "New AI Workshop Series",
    summary: "Free workshops on Machine Learning basics. Every Friday at 3 PM in Tech Center.",
    category: "events",
    priority: "low",
    time: "1 day ago",
  },
  {
    id: "5",
    title: "Grade Updates Available",
    summary: "Midterm grades posted. Check portal for detailed feedback from instructors.",
    category: "academic",
    priority: "medium",
    time: "3 days ago",
  },
  {
    id: "6",
    title: "Dining Hall Menu Update",
    summary: "New vegetarian options added. International food week starts Monday.",
    category: "general",
    priority: "low",
    time: "4 days ago",
  },
];

const categoryConfig = {
  academic: {
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    badge: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200",
  },
  events: {
    icon: Calendar,
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    border: "border-teal-200 dark:border-teal-800",
    badge: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200",
  },
  urgent: {
    icon: AlertCircle,
    color: "from-red-500 to-red-600",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    badge: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200",
  },
  general: {
    icon: Bell,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    badge: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200",
  },
};

const priorityConfig = {
  low: "text-muted-foreground",
  medium: "text-accent",
  high: "text-red-500 dark:text-red-400 font-semibold",
};

export default function Index() {
  const urgentCount = updates.filter((u) => u.priority === "high").length;
  const todayCount = updates.filter((u) => u.time.includes("hour") || u.time.includes("ago")).length;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div>
                <span className="inline-block text-label text-accent mb-4">Your Campus Pulse</span>
                <h1 className="text-display text-foreground mb-6">
                  Everything Happens Here
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Project Nexus turns campus chaos into clarity. Your AI-powered digest of deadlines, events, and what matters to you—delivered in seconds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/daily-pulse"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 group"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View Daily Pulse
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  to="/academic-intelligence"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary/30 text-primary hover:bg-primary/10 font-semibold transition-all duration-300"
                >
                  Ask Academic AI
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="floating-card p-6 hover:glow-accent">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <AlertCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-label text-muted-foreground">Urgent</span>
                </div>
                <p className="text-3xl font-bold font-poppins text-foreground">{urgentCount}</p>
                <p className="text-sm text-muted-foreground">Action needed</p>
              </div>

              <div className="floating-card p-6 hover:glow-primary">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-label text-muted-foreground">Today</span>
                </div>
                <p className="text-3xl font-bold font-poppins text-foreground">{todayCount}</p>
                <p className="text-sm text-muted-foreground">New updates</p>
              </div>

              <div className="col-span-2 floating-card p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <p className="text-sm text-muted-foreground mb-2">Smart Summary</p>
                <p className="text-sm font-medium text-foreground">
                  3 deadlines this week • 2 events • Check grades posted today
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Pulse Overview */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-heading font-poppins font-bold">Daily Pulse Updates</h2>
              <p className="text-muted-foreground mt-2">AI-summarized campus news you need to know</p>
            </div>
            <Link
              to="/daily-pulse"
              className="text-primary hover:text-accent font-semibold flex items-center gap-2 transition-colors"
            >
              View All
              <span>→</span>
            </Link>
          </div>

          {/* Updates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => {
              const config = categoryConfig[update.category];
              const Icon = config.icon;

              return (
                <div
                  key={update.id}
                  className="floating-card p-6 border-2 group cursor-pointer overflow-hidden"
                  style={{
                    animation: `slide-in-up 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center gap-2 ${config.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                        <Icon className="w-4 h-4" />
                        {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                      </div>
                      {update.priority === "high" && (
                        <span className="text-xs font-bold text-red-500">!</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {update.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {update.summary}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-4">
                      <span>{update.time}</span>
                      {update.deadline && (
                        <span className={priorityConfig[update.priority]}>
                          Due: {update.deadline}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="floating-card p-12 text-center bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
          <Zap className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-heading font-poppins mb-4">Ready to Experience AI Campus Life?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our Academic Intelligence assistant help you ace your courses, plan your study sessions, and get answers to your doubts in seconds.
          </p>
          <Link
            to="/academic-intelligence"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300"
          >
            <span>Ask AI Now</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
