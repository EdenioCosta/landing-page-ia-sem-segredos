import speakerImg from "@/assets/speaker-portrait.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-dark)' }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(145 72% 45% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(145 72% 45% / 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center flex-1 w-full">
        {/* Top tag */}
        <div className="mt-12 md:mt-20 mb-8">
          <span className="inline-block px-6 py-2 rounded-full border border-primary/40 text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            IA PARA NEGÓCIOS
          </span>
        </div>

        {/* Main headline */}
        <div className="px-6 max-w-3xl space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight uppercase">
            PALESTRA GRATUITA
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight">
            COMO A{" "}
            <span className="text-primary">INTELIGÊNCIA ARTIFICIAL</span>{" "}
            PODE FAZER SEU NEGÓCIO CRESCER.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Para profissionais liberais, pequenos e médios empresários.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-10">
          <a
            href="#garanta-sua-vaga"
            className="inline-block px-12 py-4 rounded-full font-bold text-lg text-accent-foreground transition-all duration-300 hover:scale-105 bg-accent shadow-lg"
            style={{ boxShadow: '0 0 30px hsl(0 75% 55% / 0.4)' }}
          >
            Garantir minha vaga
          </a>
        </div>

        {/* Speaker image - integrated at bottom */}
        <div className="mt-auto relative w-full flex justify-center">
          {/* Radial glow behind speaker */}
          <div className="absolute bottom-0 w-[400px] h-[400px] rounded-full opacity-20" style={{
            background: 'radial-gradient(circle, hsl(220 20% 20%), transparent 70%)'
          }} />
          <img
            src={speakerImg}
            alt="Edânio Costa - Especialista em Inteligência Artificial"
            className="relative w-64 md:w-80 lg:w-96 object-cover object-top"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
