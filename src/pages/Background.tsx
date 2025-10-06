import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, BookOpen, Brain, Compass, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Background = () => {
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
                Historical <span className="gradient-text">Background</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The philosophical and mathematical journey that led to Laegna Theory—
                from ancient paradoxes to modern synthesis.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Ancient Roots */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Ancient Roots: Tao and Paradox</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Before the formal mathematics emerged, there was contemplation on <span className="text-foreground font-semibold">paradox</span>. 
                    The Taoist principle of opposites—Yin and Yang, being and non-being—offered a framework for understanding 
                    contradiction not as error but as fundamental structure. The I Ching's four-valued logic system 
                    (distinct from Western binary true/false) revealed that truth itself operates in harmonic layers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This contemplation on paradox was not symbolic mysticism but a <span className="text-foreground font-semibold">pre-mathematical intuition</span>: 
                    that infinity and zero, continuity and discontinuity, position and negation must form a coherent system 
                    rather than irreconcilable poles. The question became: <em>how can mathematics express what ancient 
                    philosophy felt?</em>
                  </p>
                </div>
              </section>

              {/* Classical Mathematics Limitations */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                    <BookOpen className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Classical Mathematics: Elegant but Bounded</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Classical mathematics, from Euclid through Cantor to modern set theory, achieved remarkable precision 
                    by establishing <span className="text-foreground font-semibold">boundaries</span>. Functions cannot have vertical slopes. 
                    Division by zero is undefined. Infinity is a limit, never a destination. These constraints enabled 
                    rigorous proof but also created <span className="text-foreground font-semibold">discontinuities</span> where 
                    intuition suggested continuity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cantor's transfinite numbers attempted to quantify infinity but remained within cardinality—
                    <em>how many</em> infinities exist, not <em>where</em> they are or <em>how</em> they transform. 
                    The number line remained fundamentally linear. Logarithmic scales existed but were computational 
                    conveniences, not foundational structure. Physics encountered similar boundaries: the speed of light 
                    as an asymptote, quantum discontinuities, singularities in general relativity.
                  </p>
                </div>
              </section>

              {/* The Synthesis */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                    <Brain className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">The Laegna Synthesis</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Laegna Theory emerged from asking: <em>What if the boundaries are transitions?</em> What if infinity 
                    is not unreachable but a <span className="text-foreground font-semibold">frequency shift</span>—like 
                    how sound moves through octaves? What if number space itself operates on an exponential scale, where 
                    each "layer" doubles or halves magnitude?
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This required abandoning neither classical rigor nor ancient intuition but <span className="text-foreground font-semibold">reinterpreting 
                    both through frequency</span>. The circle of infinite radius becomes a straight line not through endless 
                    growth but at a precise geometric point. Zero is not emptiness but the foundation frequency. Operations 
                    that seem undefined in linear space become consistent in octave space.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The four-valued logic system (Ponegation) emerged as the mathematical realization of I Ching's 
                    intuition: Position, Negation, Posetion, Negotion—not arbitrary symbols but necessary operators 
                    in a complete logical system. This synthesis honors both the precision of Western mathematics and 
                    the holistic wisdom of Eastern philosophy.
                  </p>
                </div>
              </section>

              {/* Personal Journey */}
              <section className="space-y-4 bg-muted/30 rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold">The Path of Discovery</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    The development of Laegna was not linear but <span className="text-foreground font-semibold">iterative 
                    and holistic</span>. Early symbolic contemplation on red and blue cats (Elise and Daisy, representing 
                    positive and negative mathematical forces) gave way to rigorous theorems. Forum discussions at 
                    mathforums.com tested these ideas against classical frameworks, revealing where translation was 
                    needed and where genuine innovation emerged.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The <span className="text-secondary font-semibold">Laegna Ship</span> metaphor—borrowed from Japanese 
                    mythology's Seven Gods of Fortune—represents this journey: carrying mathematical consciousness from 
                    the cold origin of time toward a warmer, more integrated future where infinite values and holistic 
                    truth are common understanding. Not conquest but <em>navigation</em>.
                  </p>
                </div>
              </section>

              {/* Influences */}
              <section className="space-y-4">
                <h3 className="text-2xl font-bold">Key Influences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                    <h4 className="font-semibold text-lg">Philosophical</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Taoism:</strong> Unity of opposites, natural flow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Buddhism:</strong> Dependent origination, emptiness as potential</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>I Ching:</strong> Four-valued transformation logic</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                    <h4 className="font-semibold text-lg">Mathematical</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Cantor:</strong> Transfinite numbers and cardinality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Fourier:</strong> Frequency analysis and harmonic decomposition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span><strong>Logarithmic scales:</strong> Exponential compression of space</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Forthworthy Navigation - Bottom Right */}
        <div className="container mx-auto px-4 py-8 flex justify-end">
          <Link
            to="/analysis"
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

export default Background;
