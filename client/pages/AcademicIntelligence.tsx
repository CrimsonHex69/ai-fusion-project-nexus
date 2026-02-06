import { Layout } from "@/components/Layout";
import { BookOpen, Send, Zap, Lightbulb, Brain, CheckCircle, ArrowUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "question" | "answer";
  content: string;
  timestamp: string;
  category?: string;
}

const suggestedQuestions = [
  {
    icon: Brain,
    title: "Explain Graph Theory",
    description: "Make it beginner-friendly",
  },
  {
    icon: Lightbulb,
    title: "Study Plan for Exams",
    description: "Create a 4-week study schedule",
  },
  {
    icon: BookOpen,
    title: "Complex Topics",
    description: "Clarify tough concepts clearly",
  },
  {
    icon: CheckCircle,
    title: "Doubt Resolution",
    description: "Get answers to your questions",
  },
];

const mockAnswers: { [key: string]: string } = {
  "explain": "Graph theory is the study of graphs, which are mathematical structures used to model relationships between objects. A graph consists of vertices (nodes) and edges (connections). Graphs are fundamental in computer science for solving problems like finding the shortest path, scheduling, and network analysis.",
  "study": "Here's a 4-week study plan:\n\nWeek 1: Foundation & Basics\n• Review class notes daily\n• Create summary flashcards\n• Complete practice problems\n\nWeek 2: Deep Dive\n• Study one topic in depth each day\n• Form study groups\n• Solve harder problems\n\nWeek 3: Integration\n• Connect topics together\n• Take full-length practice tests\n• Identify weak areas\n\nWeek 4: Final Review\n• Focus on weak areas\n• Do timed practice tests\n• Get adequate rest",
  "complex": "Complex topics can be challenging! Here's how to tackle them:\n\n1. Break it down: Divide into smaller, understandable parts\n2. Start simple: Learn basics before advanced concepts\n3. Use examples: Real-world applications help\n4. Visualize: Draw diagrams and flowcharts\n5. Practice: Solve problems repeatedly\n6. Teach others: Explaining reinforces understanding",
  "doubt": "Great question! What specific area would you like to explore? I can help with:\n\n• Conceptual understanding\n• Problem-solving strategies\n• Formula derivations\n• Application examples\n• Exam preparation tips\n\nFeel free to ask anything related to your courses!",
};

export default function AcademicIntelligence() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "answer",
      content: "Hey there! 👋 I'm your Academic Intelligence assistant. Ask me anything about your studies—from explaining tough concepts to planning your exam prep. What would you like help with today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user question
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "question",
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response with a slight delay
    setTimeout(() => {
      let answerText = "That's an interesting question! Could you provide more details so I can give you a better answer?";

      // Simple keyword matching for demo
      if (messageText.toLowerCase().includes("graph")) {
        answerText = mockAnswers["explain"];
      } else if (messageText.toLowerCase().includes("study") || messageText.toLowerCase().includes("plan")) {
        answerText = mockAnswers["study"];
      } else if (messageText.toLowerCase().includes("complex") || messageText.toLowerCase().includes("understand")) {
        answerText = mockAnswers["complex"];
      } else if (messageText.toLowerCase().includes("doubt") || messageText.toLowerCase().includes("question")) {
        answerText = mockAnswers["doubt"];
      } else if (messageText.toLowerCase().includes("exam") || messageText.toLowerCase().includes("prepare")) {
        answerText = "Great! Exam preparation requires a structured approach. Start with reviewing your notes, then organize the material by topic. Create a timeline and allocate study hours accordingly. Practice previous exams and focus on weak areas. Remember to take breaks and stay healthy!";
      } else if (messageText.toLowerCase().includes("algorithm") || messageText.toLowerCase().includes("code")) {
        answerText = "Algorithms are step-by-step procedures to solve a problem. When learning algorithms:\n\n1. Understand the problem clearly\n2. Learn the basic approach\n3. Trace through examples\n4. Implement step by step\n5. Test with different inputs\n\nPractice is key! Start with easier algorithms and gradually move to complex ones.";
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "answer",
        content: answerText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-screen flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-heading font-poppins">Academic Intelligence</h1>
              <p className="text-muted-foreground">AI tutor for concepts, doubts & study planning</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 scrollbar-hide">
          {messages.length === 1 && !isLoading && (
            // Suggested Questions - Show only on initial state
            <div className="space-y-4 mt-8">
              <p className="text-sm text-label text-muted-foreground text-center">Try asking about:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedQuestions.map((q, i) => {
                  const Icon = q.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(q.title)}
                      className="floating-card p-4 text-left hover:border-accent hover:glow-accent transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:text-accent transition-colors" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">{q.title}</p>
                          <p className="text-xs text-muted-foreground">{q.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.type === "question" ? "justify-end" : "justify-start"}`}
              style={{
                animation: `slide-in-${message.type === "question" ? "right" : "left"} 0.5s ease-out`,
              }}
            >
              <div
                className={`max-w-2xl px-4 py-3 rounded-2xl ${
                  message.type === "question"
                    ? "bg-primary text-white rounded-br-none"
                    : "floating-card border border-border rounded-bl-none"
                }`}
              >
                <p className={`text-sm leading-relaxed whitespace-pre-wrap ${message.type === "question" ? "text-white" : "text-foreground"}`}>
                  {message.content}
                </p>
                <p className={`text-xs mt-2 ${message.type === "question" ? "text-white/70" : "text-muted-foreground"}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="floating-card border border-border px-4 py-3 rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-float" />
                  <div className="w-2 h-2 bg-accent rounded-full animate-float-slow" />
                  <div className="w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="floating-card p-4 border-2 border-accent/30">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask about concepts, study tips, exam prep..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              disabled={isLoading}
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Press Enter to send • Shift+Enter for new line</p>
        </div>

        {/* Info Box */}
        <div className="mt-6 floating-card p-4 bg-accent/5 border border-accent/20 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lightbulb className="w-4 h-4 text-accent" />
            <span>AI responses are generated to help learning. Always verify with official course materials.</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
