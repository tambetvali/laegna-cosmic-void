import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Circle, Infinity, TrendingUp, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Analysis = () => {
  return (
    <div className="min-h-screen pb-[400px]">
      <Navigation variant="static" />
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Main</span>
            </Link>

            {/* Header */}
            <div className="space-y-6 mb-12">
              <h1 id="title" className="text-4xl md:text-5xl font-bold">
                Scientific <span className="gradient-text">Analysis</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Rigorous derivation of core theorems from geometric and algebraic foundations.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Geometric Foundation */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Circle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Geometric Foundation: The Infinite Circle</h2>
                </div>
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Axiom 1: Circle Edge Angle</h3>
                    <p className="text-muted-foreground">
                      For a circle of radius <em>r</em>, the angle θ at any point on the edge relative to a tangent 
                      line approaches zero as <em>r</em> → ∞. Classical analysis treats this as a limit. Laegna asks: 
                      <span className="text-foreground font-semibold"> at what precise value does θ = 0?</span>
                    </p>
                    <div className="mt-4 p-4 bg-muted/50 rounded font-mono text-sm">
                      <p>θ(r) = arctan(1/r)</p>
                      <p className="mt-2">As r → ∞, θ → 0</p>
                      <p className="mt-2 text-primary font-semibold">Laegna: θ = 0 exactly when r = ∞ₑ (Exact Infinity)</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    This is not merely asymptotic behavior but a <span className="text-foreground font-semibold">geometric 
                    transformation point</span>. The circle's edge becomes indistinguishable from a straight line not 
                    through endless approximation but at a definite value where curvature collapses. Beyond this point, 
                    the geometry inverts—what was convex becomes concave, suggesting space folds back on itself.
                  </p>
                </div>
              </section>

              {/* Octave Structure */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                    <Layers className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Octave Structure: Exponential Number Space</h2>
                </div>
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Classical mathematics treats the number line linearly: 1, 2, 3, 4... However, <span className="text-foreground font-semibold">magnitude 
                    perception is logarithmic</span>. We perceive differences between 1 and 10 similarly to differences 
                    between 100 and 1000—an order of magnitude. Laegna formalizes this:
                  </p>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Definition: Octave Coordinate System</h3>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        Any number <em>n</em> can be represented in octave coordinates:
                      </p>
                      <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                        <p>n = 2^k × m, where k ∈ ℤ (octave) and 1 ≤ m &lt; 2 (mantissa)</p>
                      </div>
                      <p className="text-muted-foreground">
                        The octave <em>k</em> represents the <span className="text-secondary font-semibold">frequency layer</span>, 
                        while mantissa <em>m</em> represents position within that layer.
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    This is not merely logarithmic rescaling but a <span className="text-foreground font-semibold">fundamental 
                    coordinate transformation</span>. Operations that diverge in linear space converge in octave space. 
                    Infinity becomes a finite octave index. Zero becomes octave -∞, which is equally well-defined as a 
                    frequency sublayer.
                  </p>
                </div>
              </section>

              {/* Zero Structure */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                    <span className="text-xl font-bold text-accent">0</span>
                  </div>
                  <h2 className="text-2xl font-bold">The Structure of Zero</h2>
                </div>
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Classical mathematics treats zero as a boundary: 0/n = 0, but n/0 is undefined. Laegna recognizes 
                    zero as a <span className="text-foreground font-semibold">decelerated state</span>—the limit as we 
                    descend through octaves toward complete stillness.
                  </p>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Theorem: Sub-Zero Geometry</h3>
                    <p className="text-muted-foreground mb-4">
                      As a circle shrinks toward radius zero, its curvature increases. At r = 0, a point contains 
                      infinite curvature—a 360° turn in zero distance. This is the <span className="text-accent font-semibold">square 
                      root of zero distributed in 2D space</span>.
                    </p>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      <p>√0 (in 2D) = point with 360° phase</p>
                      <p className="mt-2">√0 (in 1D) = undefined (requires dimension)</p>
                      <p className="mt-2 text-accent font-semibold">Zero encodes potential, not absence</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Operational Symmetry */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Infinity className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Operational Symmetry</h2>
                </div>
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Classical undefined operations become symmetric in octave space:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Division by Zero</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Classical:</strong> n/0 = undefined</p>
                        <p><strong>Laegna:</strong> n/0 = ∞ in direction of n</p>
                        <p className="text-xs pt-2">Zero acts as a frequency floor. Dividing by it shifts the result to the infinity octave.</p>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Infinity Arithmetic</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Classical:</strong> ∞ + n = undefined</p>
                        <p><strong>Laegna:</strong> ∞ + n ≈ ∞ (same octave)</p>
                        <p className="text-xs pt-2">Addition within the infinity octave preserves the octave, similar to adding to very large numbers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Digit Preservation */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Digit Preservation Across Octaves</h2>
                </div>
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A crucial insight: <span className="text-foreground font-semibold">digits retain symbolic meaning 
                    across octave shifts</span>. The number 3.14159... (π) appears in octave k=0 as π, in octave k=1 
                    as 2π, in octave k=-1 as π/2. The digits persist; only scale changes.
                  </p>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Application: Computing in Infinite Domains</h3>
                    <p className="text-muted-foreground mb-4">
                      This enables computation where classical mathematics fails:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>Integrate functions that diverge by recognizing octave transitions</li>
                      <li>Solve differential equations with infinite boundary conditions</li>
                      <li>Model physical systems at Planck scale or cosmological scale using the same algebra</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Formal Statement */}
              <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border rounded-lg p-8 space-y-4">
                <h3 className="text-2xl font-bold text-center">Core Theorem</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-center text-muted-foreground italic">
                    "Number space operates on an exponential scale organized by octaves. Infinity and zero are not 
                    boundaries but frequency transitions at octave indices ±∞. Operations undefined in linear space 
                    become consistent in octave space through geometric transformation and digit preservation."
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Forthworthy Navigation - Bottom Right */}
        <div className="container mx-auto px-4 py-8 flex justify-end">
          <Link
            to="/implications"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Forthworthy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer variant="fixed" />
    </div>
  );
};

export default Analysis;
