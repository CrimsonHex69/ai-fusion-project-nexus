import { Layout } from "@/components/Layout";
import { Bell, Search, Filter, BookOpen, Calendar, AlertCircle, Zap, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Email {
  id: string;
  from: string;
  subject: string;
  originalLength: number;
  summary: string;
  category: "academic" | "events" | "urgent" | "general";
  priority: "low" | "medium" | "high";
  deadline?: string;
  timestamp: string;
  read: boolean;
}

const mockEmails: Email[] = [
  {
    id: "1",
    from: "Professor Sarah Chen",
    subject: "CS301: Algorithm Design Project - Final Submission Details",
    originalLength: 1250,
    summary: "CS301 assignment due in 3 days. Submit via portal with documentation.",
    category: "academic",
    priority: "high",
    deadline: "Mar 8, 2026",
    timestamp: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    from: "Campus Events",
    subject: "Tech Fest 2026 - Registration Open Now! Hackathon Teams Forming",
    originalLength: 2840,
    summary: "Hackathon with $50k prizes. Team registration open. First 50 teams get swag.",
    category: "events",
    priority: "medium",
    deadline: "Mar 5, 2026",
    timestamp: "5 hours ago",
    read: true,
  },
  {
    id: "3",
    from: "Library Administration",
    subject: "URGENT: Main Library Temporary Closure for Maintenance",
    originalLength: 890,
    summary: "Main library closed tomorrow for maintenance. Use east wing or reserve study rooms.",
    category: "urgent",
    priority: "high",
    timestamp: "1 hour ago",
    read: false,
  },
  {
    id: "4",
    from: "AI & ML Club",
    subject: "Weekly Workshop Series - Introduction to Machine Learning Basics",
    originalLength: 1540,
    summary: "Free ML workshops every Friday at 3 PM in Tech Center. Beginner-friendly.",
    category: "events",
    priority: "low",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: "5",
    from: "Registrar Office",
    subject: "Midterm Grades Posted - Check Portal for Detailed Feedback",
    originalLength: 756,
    summary: "Grades are up. Review feedback from instructors in your portal account.",
    category: "academic",
    priority: "medium",
    timestamp: "3 days ago",
    read: true,
  },
  {
    id: "6",
    from: "Dr. James Wilson",
    subject: "Meeting Follow-up: Research Internship Opportunity in AI Lab",
    originalLength: 1890,
    summary: "Internship opening in AI lab. Great for CV. Send resume by Friday.",
    category: "academic",
    priority: "high",
    deadline: "Mar 7, 2026",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: "7",
    from: "Dining Services",
    subject: "New Vegetarian Menu Options - International Food Week Starts Monday",
    originalLength: 645,
    summary: "New veggie options available. International week menu starts Monday.",
    category: "general",
    priority: "low",
    timestamp: "4 days ago",
    read: true,
  },
  {
    id: "8",
    from: "Academic Advisor",
    subject: "Spring Course Registration - Slots Filling Up, Register Early",
    originalLength: 1120,
    summary: "Course registration open. Popular classes filling up fast. Register now.",
    category: "academic",
    priority: "high",
    deadline: "Mar 10, 2026",
    timestamp: "2 days ago",
    read: true,
  },
];

const categoryConfig = {
  academic: {
    icon: BookOpen,
    label: "Academic",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    badge: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200",
  },
  events: {
    icon: Calendar,
    label: "Events",
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    badge: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200",
  },
  urgent: {
    icon: AlertCircle,
    label: "Urgent",
    color: "from-red-500 to-red-600",
    bg: "bg-red-50 dark:bg-red-950/30",
    badge: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200",
  },
  general: {
    icon: Bell,
    label: "General",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    badge: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200",
  },
};

export default function DailyPulse() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmails = mockEmails.filter((email) => {
    const matchesCategory = !selectedCategory || email.category === selectedCategory;
    const matchesSearch =
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const unreadCount = mockEmails.filter((e) => !e.read).length;
  const urgentCount = mockEmails.filter((e) => e.priority === "high").length;
  const reductionRate = Math.round(
    ((mockEmails.reduce((sum, e) => sum + e.originalLength, 0) -
      mockEmails.reduce((sum, e) => sum + e.summary.length, 0)) /
      mockEmails.reduce((sum, e) => sum + e.originalLength, 0)) *
      100
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-heading font-poppins">Daily Pulse</h1>
              <p className="text-muted-foreground">AI-powered email summarizer & campus digest</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="floating-card p-4">
              <p className="text-xs text-label text-muted-foreground mb-2">Unread</p>
              <p className="text-2xl font-bold font-poppins text-foreground">{unreadCount}</p>
            </div>
            <div className="floating-card p-4">
              <p className="text-xs text-label text-muted-foreground mb-2">Urgent</p>
              <p className="text-2xl font-bold font-poppins text-foreground">{urgentCount}</p>
            </div>
            <div className="floating-card p-4 bg-gradient-to-r from-accent/10 to-primary/10">
              <p className="text-xs text-label text-muted-foreground mb-2">Reduced by</p>
              <p className="text-2xl font-bold font-poppins text-accent">{reductionRate}%</p>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="floating-card p-6 mb-8 sticky top-20 z-40 backdrop-blur-sm">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search emails, senders, summaries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === null
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "bg-muted border border-border text-muted-foreground hover:bg-muted/70"
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                All
              </button>
              {Object.entries(categoryConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                      selectedCategory === key
                        ? `${config.badge} border border-current`
                        : "bg-muted border border-border text-muted-foreground hover:bg-muted/70"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emails List */}
        <div className="space-y-4">
          {filteredEmails.length > 0 ? (
            filteredEmails.map((email, index) => {
              const config = categoryConfig[email.category];
              const Icon = config.icon;

              return (
                <div
                  key={email.id}
                  className="floating-card p-6 hover:shadow-lg transition-all group"
                  style={{
                    animation: `slide-in-right 0.5s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${config.bg} flex-shrink-0 mt-1`}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`font-semibold text-foreground ${!email.read ? "font-bold" : ""}`}>
                              {email.from}
                            </span>
                            {email.priority === "high" && (
                              <span className="text-xs font-bold px-2 py-1 rounded bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200">
                                URGENT
                              </span>
                            )}
                            {!email.read && (
                              <span className="w-2 h-2 rounded-full bg-accent"></span>
                            )}
                          </div>
                          <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                            {email.subject}
                          </h3>
                        </div>
                        <span className="text-xs text-muted-foreground flex-shrink-0 whitespace-nowrap">
                          {email.timestamp}
                        </span>
                      </div>

                      {/* Summary Box */}
                      <div className="bg-muted/40 border border-border/40 rounded-lg p-4 mb-3">
                        <p className="text-sm text-foreground">{email.summary}</p>
                      </div>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className={config.badge}>{config.label}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Original: {email.originalLength} chars
                        </div>
                        {email.deadline && (
                          <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                            <AlertCircle className="w-3 h-3" />
                            Due: {email.deadline}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="floating-card p-12 text-center">
              <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No emails matching your filters.</p>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="floating-card p-6 mt-12 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-accent/30">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">How Daily Pulse Works</h3>
              <p className="text-sm text-muted-foreground">
                Our AI reads through your campus emails and extracts the essential information. Each email is analyzed for urgency, category, and actionable items. You get clear, concise summaries so you can stay informed without information overload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
