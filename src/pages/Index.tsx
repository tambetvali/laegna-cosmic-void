import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuantitativeInfinities } from "@/components/QuantitativeInfinities";
import { CoreTheorems } from "@/components/CoreTheorems";
import { AllTheorems } from "@/components/AllTheorems";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <QuantitativeInfinities />
        <CoreTheorems />
        <AllTheorems />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
