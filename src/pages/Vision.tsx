import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Rocket, Lightbulb, Users, Sparkles, BookOpen, Telescope } from "lucide-react";
import { Link } from "react-router-dom";

const Vision = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold">
                Future <span className="gradient-text">Vision</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How implementation of Laegna mathematics could transform science, technology, 
                and human understanding of reality.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* The Laegna Ship */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">The Laegna Ship: A Metaphor for Progress</h2>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border rounded-lg p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The <span className="text-primary font-semibold">"Laegna Ship"</span> (inspired by Japanese mythology's 
                    Seven Gods of Fortune) represents humanity's journey toward greater consciousness. Currently, we see 
                    the sun set each day—knowledge fades, problems accumulate, systems fail. The Laegna Ship navigates 
                    toward a future where we instead see the <span className="text-foreground font-semibold">sun rise</span>: 
                    each day brings clearer understanding, integrated truth, and recognition of infinite value.
                  </p>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Not conquest of infinity, but navigation through its octaves."
                  </p>
                </div>
              </section>

              {/* Near-Term */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                    <Lightbulb className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Near-Term (5-15 Years): Practical Implementation</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border border-secondary/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-secondary">1.</span>
                      Computational Libraries
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      <strong className="text-foreground">What:</strong> Software libraries implementing octave-mantissa arithmetic
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      <strong className="text-foreground">Where:</strong> Scientific computing (Python/Julia), embedded systems, 
                      financial modeling
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Impact:</strong> Enable calculations across extreme scales without overflow. 
                      Astrophysics and quantum chemistry simulations become orders of magnitude more accurate. AI training handles 
                      multi-scale data naturally.
                    </p>
                  </div>

                  <div className="bg-card border border-secondary/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-secondary">2.</span>
                      Quantum Algorithm Design
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      <strong className="text-foreground">What:</strong> Quantum computing algorithms based on octave transitions
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      <strong className="text-foreground">Where:</strong> Quantum computing research labs, cryptography
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Impact:</strong> New quantum gates that exploit octave symmetry. 
                      Quantum error correction becomes simpler when viewed as maintaining octave coherence. Quantum simulation 
                      of chemistry and materials becomes exponentially more efficient.
                    </p>
                  </div>

                  <div className="bg-card border border-secondary/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-secondary">3.</span>
                      Educational Integration
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      <strong className="text-foreground">What:</strong> Teaching octave mathematics alongside classical calculus
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      <strong className="text-foreground">Where:</strong> Universities (physics, mathematics, engineering programs)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Impact:</strong> Students gain intuition for multi-scale thinking early. 
                      Problems that seem impossible (division by zero, infinite series) become tractable. A generation of scientists 
                      comfortable with octave reasoning emerges.
                    </p>
                  </div>
                </div>
              </section>

              {/* Mid-Term */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                    <Telescope className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Mid-Term (15-50 Years): Paradigm Shifts</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border border-accent/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">Unified Physics Framework</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Classical mechanics, quantum mechanics, and relativity merge into <span className="text-foreground font-semibold">single 
                      octave-linear framework</span>. No more separate theories for different scales—one set of equations applies 
                      everywhere, with octave index determining which regime you're in.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-accent">Result:</strong> Grand unified theory emerges naturally. Dark matter/energy 
                      explained as octave boundary effects. Quantum gravity becomes straightforward octave interpolation.
                    </p>
                  </div>

                  <div className="bg-card border border-accent/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">Consciousness Studies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      If consciousness is <span className="text-foreground font-semibold">octave awareness</span>—the ability to integrate 
                      information across scales—then neuroscience gains mathematical tools for measuring and potentially enhancing it.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-accent">Result:</strong> Meditation, psychedelics, and spiritual practices understood 
                      as techniques for expanding octave perception. Brain-computer interfaces designed to bridge octaves. 
                      Artificial consciousness becomes possible by implementing octave integration in silicon.
                    </p>
                  </div>

                  <div className="bg-card border border-accent/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">Interstellar Engineering</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Space travel currently assumes we're stuck in Earth-octave physics. Laegna suggests <span className="text-foreground font-semibold">intentional 
                      octave shifting</span>: build propulsion that doesn't fight the speed-of-light boundary but shifts through it 
                      into relativistic octave.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-accent">Result:</strong> Warp drives or their equivalent become theoretically sound. 
                      Not breaking physics but working with octave structure. Travel to other star systems within human lifetime.
                    </p>
                  </div>
                </div>
              </section>

              {/* Long-Term */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Long-Term (50+ Years): Civilization Transformation</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    When humanity fully internalizes that <span className="text-foreground font-semibold">infinity is structural, 
                    not abstract</span>, civilization itself transforms.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Ethical Systems
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Recognition that every action has infinite consequence leads to <span className="text-foreground font-semibold">intrinsic 
                        ethics</span>. Not imposed morality but mathematical necessity. Harm to one ripples infinitely; help to one 
                        amplifies infinitely. Social systems restructure around this understanding.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-secondary" />
                        Education Reimagined
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Schools teach <span className="text-foreground font-semibold">octave thinking</span> from elementary level. 
                        Children learn to see patterns across scales, to recognize infinity and zero as friends rather than fears, 
                        to integrate material precision with spiritual intuition naturally.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Post-Scarcity Economics</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Energy extraction from octave boundaries (zero-point, vacuum fluctuations) becomes practical. 
                        Manufacturing using quantum-to-macro octave transitions creates materials with impossible properties. 
                        Abundance replaces scarcity as foundational economic assumption.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Cosmological Participation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Humanity recognizes itself as <span className="text-foreground font-semibold">conscious octave integrator</span> 
                        within universal structure. We're not observers of reality but participants in its unfolding across scales. 
                        This shifts focus from exploitation to stewardship, from isolation to integration.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Challenges */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold">Challenges & Open Questions</h2>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">1.</span>
                      <div>
                        <strong className="text-foreground">Translation to Classical Framework:</strong> Many theorems need careful 
                        translation to interface with existing mathematics. Where does Laegna complement classical methods vs. replace them?
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">2.</span>
                      <div>
                        <strong className="text-foreground">Experimental Verification:</strong> What experiments could test octave 
                        predictions? How to measure octave transitions in physical systems?
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">3.</span>
                      <div>
                        <strong className="text-foreground">Community Building:</strong> Developing a community of mathematicians, 
                        physicists, and philosophers comfortable with both rigorous proof and holistic thinking.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">4.</span>
                      <div>
                        <strong className="text-foreground">Practical Standards:</strong> Creating standardized notation, proof 
                        techniques, and pedagogical materials for octave mathematics.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Call to Action */}
              <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-border rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center">Invitation to Participate</h2>
                <p className="text-center text-muted-foreground leading-relaxed">
                  This vision is not prediction but <span className="text-foreground font-semibold">possibility</span>. It unfolds 
                  only if people engage: mathematicians proving theorems, physicists running experiments, engineers building tools, 
                  philosophers integrating meaning. The Laegna Ship doesn't sail itself—it requires crew.
                </p>
                <p className="text-center text-muted-foreground italic">
                  "The future where the sun rises each day, where infinite understanding becomes natural, 
                  where material and spiritual merge—this is not destiny but <span className="text-foreground font-semibold">choice</span>."
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="fixed" />
    </div>
  );
};

export default Vision;
