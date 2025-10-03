import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuantitativeInfinities } from "@/components/QuantitativeInfinities";
import { CoreTheorems } from "@/components/CoreTheorems";
import { AllTheorems } from "@/components/AllTheorems";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation variant="fixed" />
      <main>
        <Hero />
        <QuantitativeInfinities />
        <CoreTheorems />
        <AllTheorems />
        
        {/* Forth to Stub Navigation - Bottom Right */}
        <div className="container mx-auto px-4 py-8 flex justify-end">
          <Link
            to="/background"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">Forth to Stub</span>
          </Link>
        </div>
      </main>
      <Footer variant="static" />
    </div>
  );
};

export default Index;
