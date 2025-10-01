import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface TheoremCardProps {
  title: string;
  description: string;
  content: string;
  link?: string;
  variant?: "primary" | "secondary" | "accent";
  icon?: ReactNode;
}

export const TheoremCard = ({ 
  title, 
  description, 
  content, 
  link,
  variant = "primary",
  icon 
}: TheoremCardProps) => {
  const variantStyles = {
    primary: "border-primary/20 hover:border-primary/40 hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.3)]",
    secondary: "border-secondary/20 hover:border-secondary/40 hover:shadow-[0_8px_32px_-8px_hsl(var(--secondary)/0.3)]",
    accent: "border-accent/20 hover:border-accent/40 hover:shadow-[0_8px_32px_-8px_hsl(var(--accent)/0.3)]",
  };

  const iconStyles = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <Card className={`group transition-all duration-300 ${variantStyles[variant]}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-3 text-xl mb-2">
              {icon && <span className={iconStyles[variant]}>{icon}</span>}
              {title}
            </CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};
