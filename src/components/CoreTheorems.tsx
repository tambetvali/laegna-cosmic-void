import { Binary, Waves, RefreshCw, Zap } from "lucide-react";
import { TheoremCard } from "./TheoremCard";

export const CoreTheorems = () => {
  return (
    <section id="theorems" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Infinity & Zero <span className="text-secondary">Theorems</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive framework redefining infinity and zero as structured, operable entities 
              through octave logic, digit preservation, and symbolic transformation.
            </p>
          </div>

          {/* Theorem Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <TheoremCard
              title="Infinities and Discrete Numbers"
              description="Fractal Symmetries in Discrete Systems"
              content="Discrete numbers preserve infinite relationships better than continuous ones through fractal symmetries under repetition. Infinite structures can be encoded using finite digit systems (hexadecimal-like) that resonate with harmonic patterns, connecting symbolic logic, computation, and deep number theory."
              link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems/InfinityAndZero"
              variant="primary"
              icon={<Binary className="w-5 h-5" />}
            />

            <TheoremCard
              title="Octave Symmetries"
              description="Musical-Mathematical Number Systems"
              content="By interpreting digit positions as musical octaves, we reveal a new understanding of exponential growth and compression. Number sequences maintain identity across transformations that behave like octave shifts in sound, enabling a musical-mathematical visualization of number systems."
              link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems/InfinityAndZero"
              variant="secondary"
              icon={<Waves className="w-5 h-5" />}
            />

            <TheoremCard
              title="Limits of Infinite Functions"
              description="Octave Rhythm in Mathematical Operations"
              content="Functions behave uniquely across infinite extensions. Multiplication and division exhibit new properties when extended into infinite dimensions. The 0–1–2 symmetry becomes a rhythm allowing energy to transfer between dimensions as information, bridging frequency theory, thermodynamics, and computation."
              link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems/InfinityAndZero"
              variant="accent"
              icon={<RefreshCw className="w-5 h-5" />}
            />

            <TheoremCard
              title="Ponegation Logic"
              description="Four-Valued Truth System"
              content="Beyond binary logic: Position, Negation, Posetion, and Negotion form a four-part truth system reflecting moral and metaphysical positioning. Inspired by I Ching and Taoist philosophy, this framework embraces ambiguity and symbolic inversion as necessary forms of knowledge."
              link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems/InfinityAndZero"
              variant="primary"
              icon={<Zap className="w-5 h-5" />}
            />
          </div>

          {/* Conceptual Summary */}
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-center">Foundational Principles</h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-2xl font-bold text-primary">∞</span>
                </div>
                <h4 className="font-semibold">Infinity as Structure</h4>
                <p className="text-sm text-muted-foreground">
                  Not a singularity but a frequency layer, directional property, and symbolic transformation
                </p>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-2xl font-bold">0</span>
                </div>
                <h4 className="font-semibold">Zero as Potential</h4>
                <p className="text-sm text-muted-foreground">
                  Not emptiness but a sublayer of frequency, decelerated state, and foundation for operations
                </p>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20">
                  <span className="text-2xl font-bold text-secondary">♪</span>
                </div>
                <h4 className="font-semibold">Octave Logic</h4>
                <p className="text-sm text-muted-foreground">
                  Numbers as frequency layers, enabling computation in infinite and subzero domains
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
