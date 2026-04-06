import RegistrationForm from "@/components/RegistrationForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const CTASection = () => {
  return (
    <section id="garanta-sua-vaga" className="py-24 px-6 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(145 72% 45%), transparent 70%)' }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-3xl text-center space-y-8">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight">
            GARANTA SUA VAGA <span className="text-gradient">AGORA</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mt-4">
            Aprenda a fazer a inteligência artificial trabalhar para você…
          </p>
          <p className="text-accent font-bold text-xl mt-2">
            ou veja outros avançarem enquanto você fica para trás.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="max-w-md mx-auto">
            <RegistrationForm />
          </div>
        </AnimateOnScroll>

        <p className="text-foreground text-base md:text-lg max-w-xl mx-auto mt-6">
          <span className="font-bold">Atenção:</span> por ser um workshop gratuito, as vagas esgotam muito rápido e são muito concorridas. Então não deixe pra depois.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
