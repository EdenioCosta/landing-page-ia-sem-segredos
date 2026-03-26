import speakerImg from "@/assets/speaker-portrait.jpeg";

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

      <div className="relative z-10 flex flex-col items-center text-center flex-1 w-full">
        {/* Tag */}
        <div className="mt-10 md:mt-16 mb-6">
          <span className="inline-block px-6 py-2 rounded-full border border-primary/40 text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            IA PARA NEGÓCIOS
          </span>
        </div>

        {/* Headline */}
        <div className="px-6 max-w-3xl space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            DESCUBRA COMO ATRAIR MAIS CLIENTES E CRESCER SEU NEGÓCIO COM A{" "}
            <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Para profissionais liberais, pequenos e médios empresários.
          </p>
        </div>

        {/* CTA - green, not red */}
        <div className="mt-8">
          <a
            href="#garanta-sua-vaga"
            className="inline-block px-12 py-4 rounded-lg font-bold text-lg text-primary-foreground transition-all duration-300 hover:scale-105 glow-border"
            style={{ backgroundImage: 'var(--gradient-glow)' }}
          >
            Garantir minha vaga
          </a>
        </div>

        {/* Speaker image - large, full width */}
        <div className="mt-8 relative w-full flex justify-center flex-1 items-end">
          <div className="absolute bottom-0 w-[500px] h-[500px] rounded-full opacity-15" style={{
            background: 'radial-gradient(circle, hsl(220 30% 25%), transparent 70%)'
          }} />
          <img
            src={speakerImg}
            alt="Edânio Costa - Especialista em Inteligência Artificial"
            className="relative w-80 md:w-[420px] lg:w-[500px] max-w-full object-cover object-top"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
