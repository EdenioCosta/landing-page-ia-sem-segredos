import speakerHero from "@/assets/speaker-hero.webp";
import RegistrationForm from "@/components/RegistrationForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-dark)' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(145 72% 45% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(145 72% 45% / 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        {/* Workshop badge top */}
        <div className="pt-8 pb-2">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            Workshop <span className="text-gradient">Gratuito</span>
          </h2>
        </div>

        {/* Speaker image */}
        <div className="relative w-full flex justify-center">
          {/* Green neon glow behind photo */}
          <div
            className="absolute w-[280px] md:w-[400px] lg:w-[460px] aspect-square rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, hsl(145 72% 50%), transparent 70%)' }}
          />
          <img
            src={speakerHero}
            alt="Edenio Costa - Especialista em Inteligência Artificial"
            width={520}
            height={600}
            className="relative w-[320px] md:w-[450px] lg:w-[520px] max-w-full object-cover object-top"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          />
        </div>

        {/* Headline */}
        <div className="relative z-20 px-6 max-w-3xl space-y-5 -mt-16 md:-mt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            DESCUBRA COMO ATRAIR MAIS CLIENTES COM{" "}
            <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
            Para profissionais liberais, pequenos e médios empresários.
          </p>
        </div>

        {/* Registration form */}
        <div className="mt-8 w-full max-w-md px-6">
          <RegistrationForm />
        </div>
        <p className="text-foreground text-base md:text-lg max-w-md px-6 mt-4 mb-16 text-center">
          <span className="font-bold">Atenção:</span> por ser um workshop gratuito, as vagas esgotam muito rápido e são muito concorridas. Então não deixe pra depois.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
