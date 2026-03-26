import speakerImg from "@/assets/speaker-portrait.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/50" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(145 72% 45% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(145 72% 45% / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">
              Palestra Presencial
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              DESCUBRA COMO ATRAIR MAIS CLIENTES E CRESCER SEU NEGÓCIO COM A{" "}
              <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
              Para profissionais liberais, pequenos e médios empresários.
            </p>
            <a
              href="#garanta-sua-vaga"
              className="inline-block px-10 py-4 rounded-lg font-bold text-lg text-primary-foreground transition-all duration-300 hover:scale-105 glow-border"
              style={{ backgroundImage: 'var(--gradient-glow)' }}
            >
              GARANTA SUA VAGA
            </a>
          </div>

          {/* Speaker Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 md:w-96">
              <div className="absolute -inset-4 rounded-2xl opacity-30" style={{ backgroundImage: 'var(--gradient-glow)' }} />
              <img
                src={speakerImg}
                alt="Edânio Costa - Especialista em Inteligência Artificial"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
