import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("infinities");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float" 
          style={{ animationDelay: "2s" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              The Mathematics of{" "}
              <span className="gradient-text">Infinity</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
              Where the circle of infinite radius meets the exponential scale of number space
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed">
              Laegna Theory bridges <span className="text-primary font-semibold">material mathematics</span> and{" "}
              <span className="text-secondary font-semibold">spiritual insight</span>, revealing how infinity and zero 
              are not endpoints but <span className="font-semibold">structural transformations</span> in octave-based coordinate systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Quantitative Infinities</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="text-sm font-medium text-secondary">Octave Geometry</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium">Harmonic Balance</span>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group mt-8"
            aria-label="Scroll to content"
          >
            <span className="text-sm font-medium">Explore the Theory</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative circle */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-32 h-32 rounded-full border-2 border-primary/20" />
      </div>
    </section>
  );
};
