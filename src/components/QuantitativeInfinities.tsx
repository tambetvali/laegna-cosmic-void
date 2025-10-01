import { Circle, Infinity } from "lucide-react";
import { TheoremCard } from "./TheoremCard";

export const QuantitativeInfinities = () => {
  return (
    <section id="infinities" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quantitative <span className="gradient-text">Infinities</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The central revelation: infinity is not a breakdown but a <span className="font-semibold">structural transition</span> 
              — a precise geometric transformation where the circle of infinite radius becomes a straight line, 
              and number space maps to an exponential scale.
            </p>
          </div>

          {/* Visual concept */}
          <div className="relative py-12">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Circle className="w-64 h-64 animate-pulse-slow" strokeWidth={0.5} />
            </div>
            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary">
                <Infinity className="w-12 h-12 text-white" />
              </div>
              <p className="text-lg font-serif italic text-muted-foreground max-w-2xl mx-auto">
                "As the circle grows, its edge angle shrinks. At infinity, the edge becomes a straight line. 
                This is not abstraction — it is <span className="text-foreground font-semibold">exact geometry</span>."
              </p>
            </div>
          </div>

          {/* Core Theorems */}
          <div className="grid md:grid-cols-2 gap-6">
            <TheoremCard
              title="Exact Infinity"
              description="Temporal Infinity as Geometric Value"
              content="Infinity is defined not qualitatively (never-ending) but quantitatively — a specific value where uncountability reaches its peak. As a circle expands, its edge angle decreases until it becomes a straight line. This precise point is the exact infinity. Beyond it, space curves again into new dimensions."
              link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems/InfinityAndZero/QantitativeInfinities"
              variant="primary"
              icon={<Circle className="w-5 h-5" />}
            />
            
            <TheoremCard
              title="View Point Infinity"
              description="Perspective-Based Infinity Model"
              content="From any viewpoint in number space, infinity appears local. Coordinate systems and digit structures reveal how perspective shapes our understanding of infinite and sub-zero values. What seems infinite from one octave is finite from another — a bridge between classical mathematics and frequency-based logic."
              link="https://github.com/tambetvali/LaeSpiEssentialTheorems/tree/main/LaegnaTheorems/InfinityAndZero/QantitativeInfinities"
              variant="secondary"
              icon={<Infinity className="w-5 h-5" />}
            />
          </div>

          {/* Exponential Scale Explanation */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-accent">∞</span>
              The Exponential Scale of Number Space
            </h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                In classical mathematics, the number line is linear. In Laegna Theory, it operates on an{" "}
                <span className="text-foreground font-semibold">exponential scale</span> organized by octaves. 
                Each octave represents a doubling (or halving) of magnitude, creating a logarithmic structure 
                where infinity and zero are not endpoints but <span className="text-foreground font-semibold">frequency transitions</span>.
              </p>
              <p className="pt-2">
                This allows us to map infinities consistently: what appears as discontinuity in linear space 
                becomes smooth transition in octave space. The circle of infinite radius and the exponential 
                scale work together to preserve digit identity across transformations, enabling computation 
                in domains classical mathematics deems undefined.
              </p>
            </div>
          </div>

          {/* Physical Implications */}
          <div className="text-center space-y-4 pt-8">
            <h3 className="text-2xl font-bold">Physical Realm Implications</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These mathematical structures have profound implications for physics: the speed of light 
              as an octave boundary, quantum subspace as lower-octave projection, and relativistic effects 
              as frequency shifts. Classical equations simplify under octave logic, revealing a unified framework 
              for understanding space, time, and consciousness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
