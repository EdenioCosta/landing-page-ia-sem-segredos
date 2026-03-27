import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";

import ForYouSection from "@/components/ForYouSection";
import SpeakerSection from "@/components/SpeakerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReasonsSection from "@/components/ReasonsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      
      <ForYouSection />
      <SpeakerSection />
      <TestimonialsSection />
      <ReasonsSection />
      <CTASection />
    </main>
  );
};

export default Index;
