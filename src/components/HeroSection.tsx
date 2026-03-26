import speakerHero from "@/assets/speaker-hero.png";

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
        {/* Speaker image - on top, large and integrated */}
        <div className="relative w-full flex justify-center pt-6">
          <img
            src={speakerHero}
            alt="Edânio Costa - Especialista em Inteligência Artificial"
            className="relative w-[320px] md:w-[450px] lg:w-[520px] max-w-full object-cover object-top"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          />
        </div>

        {/* Headline - overlapping slightly with the photo bottom */}
        <div className="px-6 max-w-3xl space-y-5 -mt-16 md:-mt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            DESCUBRA COMO ATRAIR MAIS CLIENTES E CRESCER SEU NEGÓCIO COM A{" "}
            <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Para profissionais liberais, pequenos e médios empresários.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 mb-16">
          <a
            href="#garanta-sua-vaga"
            className="inline-block px-12 py-4 rounded-lg font-bold text-lg text-primary-foreground transition-all duration-300 hover:scale-105 glow-border"
            style={{ backgroundImage: 'var(--gradient-glow)' }}
          >
            Garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
