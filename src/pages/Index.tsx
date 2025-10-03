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
        
        {/* Front to Secondary Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/background"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Front to Secondary</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <QuantitativeInfinities />
        <CoreTheorems />
        <AllTheorems />
      </main>
      <Footer variant="static" />
    </div>
  );
};

export default Index;
