import { BookOpen, Atom, Heart } from "lucide-react";
import { TheoremCard } from "./TheoremCard";

export const AllTheorems = () => {
  return (
    <section id="all-theorems" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              The <span className="gradient-text">Laegna</span> Framework
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A complete mathematical and philosophical system spanning pure mathematics, 
              physical interpretation, and spiritual-ethical foundations.
            </p>
          </div>

          {/* Laegna Theorems Collection */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Core Laegna Theorems</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <TheoremCard
                title="90 Degree Angles"
                description="Functions Beyond Vertical Slopes"
                content="Classical function theory forbids vertical slopes, but Laegna introduces Z and Y numbers allowing angles beyond 90° through higher-frequency projections. Apparent discontinuities reconcile when viewed from multidimensional phase space outside classical time-space."
                link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems"
                variant="primary"
              />

              <TheoremCard
                title="Differentiation"
                description="Transformation Without Position Change"
                content="What of functions that shift without change in position? These impossible values exist in a higher symbolic realm where direction exists without traversal. Tangent space exists even when position does not move — a powerful metaphor for thought and transcendence."
                link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems"
                variant="secondary"
              />
            </div>
          </div>

          {/* Physical World Theorems */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-3 pb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                <Atom className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Physical World Theorems</h3>
            </div>
            
            <div className="space-y-6">
              <TheoremCard
                title="Octave-Based Coordinate Systems"
                description="Physics Through Frequency Layers"
                content="A multi-chapter exploration of Laegna physics including Earth perception, quantum layering, and relativity as octave geometry. Physical laws reframe as octave-linear functions where human perception operates within a narrow octave, making larger or smaller scales appear infinite or discontinuous."
                link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems/PhysicalWorld"
                variant="secondary"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                  <h4 className="font-semibold text-lg">Key Insights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">→</span>
                      <span><strong>Octave Geometry:</strong> Motion and measurement flatten at octave boundaries (speed of light)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">→</span>
                      <span><strong>Sub-Zero Layers:</strong> Quantum fields modeled as lower-octave projections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">→</span>
                      <span><strong>After-Infinity:</strong> Accelerated motion entering realms beyond classical infinity</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                  <h4 className="font-semibold text-lg">Applications</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">◆</span>
                      <span>Relativity as octave transitions rather than spacetime curvature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">◆</span>
                      <span>Wave-particle duality as phase shift in frequency space</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">◆</span>
                      <span>Classical equations (Einstein, Schrödinger, Maxwell) simplify under octave logic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Spireason Theorems */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-3 pb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">
                <span className="text-secondary">SpiReason</span> Theorems
              </h3>
            </div>
            
            <TheoremCard
              title="Symbolic and Philosophical Extensions"
              description="Bridging Spirituality with Reason"
              content="SpiReason extends Laegna mathematics into ethical, spiritual, and philosophical domains. Infinity underlies universal love and ethical reasoning. Every action ripples through infinite lines of direction, forming the geometry of responsibility and meaning. Mathematics and spiritual experience are not separate but mirrors of deeper truth."
              link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/SpireasonTheorems"
              variant="accent"
            />
          </div>

          {/* External Resources */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-6 mt-12">
            <h3 className="text-2xl font-bold text-center">Further Exploration</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://github.com/tambetvali/LaeArve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 p-6 rounded-lg border border-border hover:border-primary/40 transition-all hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.2)]"
              >
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  LaeArve Repository
                  <span className="text-xs text-muted-foreground">(Full Text)</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Complete archive with extended materials, additional context on infinities, and alternate formulations
                </p>
              </a>

              <a
                href="https://spireason.neocities.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 p-6 rounded-lg border border-border hover:border-secondary/40 transition-all hover:shadow-[0_8px_32px_-8px_hsl(var(--secondary)/0.2)]"
              >
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  Laegna Spireason Website
                  <span className="text-xs text-muted-foreground">(Intuitive Theory)</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Broader scope exploring the intuitive theory of mathematics and reality beyond formal theorems
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
