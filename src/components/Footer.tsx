import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "static" | "fixed";
}

export const Footer = ({ variant = "static" }: FooterProps) => {
  return (
    <footer className={`py-16 border-t border-border bg-muted/20 ${variant === "fixed" ? "fixed bottom-0 left-0 right-0 z-40" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                <span className="text-primary">Laegna</span> Theory
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A mathematical framework bridging material and spiritual realms through 
                quantitative infinities, octave-based coordinate systems, and harmonic balance.
              </p>
            </div>

            {/* Explore More */}
            <div className="space-y-4">
              <h4 className="font-semibold">Explore More</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/background"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Historical Background
                  </Link>
                </li>
                <li>
                  <Link
                    to="/analysis"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Scientific Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    to="/implications"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Implications & Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vision"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Future Vision
                  </Link>
                </li>
              </ul>
            </div>

            {/* Key Repositories */}
            <div className="space-y-4">
              <h4 className="font-semibold">Key Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://github.com/tambetvali/LaeSpiEssentialTheorems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    LaeSpiEssentialTheorems
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tambetvali/LaeArve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    LaeArve (Full Archive)
                  </a>
                </li>
                <li>
                  <a
                    href="https://spireason.neocities.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Spireason Website
                  </a>
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="space-y-4">
              <h4 className="font-semibold">Core Philosophy</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">Yin:</strong> Material mathematics (Red)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-secondary">◐</span>
                  <span><strong className="text-foreground">Yang:</strong> Spiritual insight (Blue)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent">●</span>
                  <span><strong className="text-foreground">Balance:</strong> Harmonic unity (Yellow)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Tambet Väli. Laegna Theory and associated works.
              </p>
              <p className="font-serif italic">
                "Where the infinite circle meets the finite line"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
