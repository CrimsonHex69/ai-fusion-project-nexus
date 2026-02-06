import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Daily Pulse", path: "/daily-pulse" },
    { label: "Academic AI", path: "/academic-intelligence" },
    { label: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:from-background dark:via-background dark:to-blue-950/20 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-primary to-accent rounded-lg p-2">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg font-poppins text-foreground">Nexus</span>
                <span className="text-xs text-muted-foreground font-medium">Campus AI</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                    isActive(item.path)
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/40"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 border-t border-border/40 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                    isActive(item.path)
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/40"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-2">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold font-poppins">Project Nexus</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your unified campus digital nervous system, powered by intelligent AI.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-4 text-sm">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Daily Pulse</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Academic AI</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Campus Connect</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-sm">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/40 pt-8 mt-8">
            {/* Team Credits */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Built by Team Code Crafters</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Harsh
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Harshit
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Zafar
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Vaibhav
                </span>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              <p className="text-xs text-muted-foreground">
                © 2026 Project Nexus. All rights reserved. AI Fusion Hackathon 2026.
              </p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                <a href="#" className="hover:text-primary transition-colors">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
