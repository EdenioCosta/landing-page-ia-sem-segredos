import { useState } from "react";
import speakerHero from "@/assets/speaker-hero.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsapp) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Inscrição realizada com sucesso! 🎉" });
      setName("");
      setEmail("");
      setWhatsapp("");
      setLoading(false);
    }, 1000);
  };

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
        {/* Speaker image */}
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

        {/* Headline */}
        <div className="px-6 max-w-3xl space-y-5 -mt-16 md:-mt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            DESCUBRA COMO ATRAIR MAIS CLIENTES E CRESCER SEU NEGÓCIO COM A{" "}
            <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Para profissionais liberais, pequenos e médios empresários.
          </p>
        </div>

        {/* Event info */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-muted-foreground px-6">
          <span className="flex items-center gap-2">
            📍 Barra da Tijuca, Rio de Janeiro
          </span>
          <span className="flex items-center gap-2">
            🕢 19:30 às 22:00
          </span>
        </div>

        {/* Registration form */}
        <div className="mt-8 mb-16 w-full max-w-md px-6">
          <div className="bg-card/80 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-black mb-1 uppercase tracking-tight">
              Palestra <span className="text-gradient">Gratuita</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Faça sua inscrição agora
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary/80 border-border h-12 text-foreground placeholder:text-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/80 border-border h-12 text-foreground placeholder:text-muted-foreground"
              />
              <Input
                type="tel"
                placeholder="Seu WhatsApp (com DDD)"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="bg-secondary/80 border-border h-12 text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 font-black text-base uppercase tracking-wide text-primary-foreground glow-border"
                style={{ backgroundImage: 'var(--gradient-glow)' }}
              >
                {loading ? "Enviando..." : "GARANTIR MINHA VAGA"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
