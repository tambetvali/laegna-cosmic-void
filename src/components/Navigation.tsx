import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface NavigationProps {
  variant?: "fixed" | "static";
}

export const Navigation = ({ variant = "fixed" }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (id: string) => {
    // If not on main page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["infinities", "theorems", "all-theorems"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`${variant === "fixed" ? "fixed top-0 left-0 right-0 z-50" : ""} backdrop-blur-soft bg-background/80 border-b border-border`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">Laegna</span>
              <span className="text-muted-foreground"> Theory</span>
            </h1>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("infinities")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "infinities" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Quantitative Infinities
              </button>
              <button
                onClick={() => scrollToSection("theorems")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "theorems" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Core Theorems
              </button>
              <button
                onClick={() => scrollToSection("all-theorems")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "all-theorems" ? "text-primary" : "hover:text-primary"
                }`}
              >
                All Theorems
              </button>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/tambetvali/LaeSpiEssentialTheorems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">View on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
