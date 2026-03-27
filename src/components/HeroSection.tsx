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
        {/* Workshop badge top */}
        <div className="pt-8 pb-2">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            Workshop <span className="text-gradient">Gratuito</span>
          </h2>
        </div>

        {/* Speaker image */}
        <div className="relative w-full flex justify-center">
          <img
            src={speakerHero}
            alt="Edenio Costa - Especialista em Inteligência Artificial"
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
            DESCUBRA COMO ATRAIR MAIS CLIENTES E FATURAR MAIS ATRAVÉS DA{" "}
            <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
            Para profissionais liberais, pequenos e médios empresários.
          </p>
        </div>

        {/* Registration form */}
        <div className="mt-8 mb-16 w-full max-w-md px-6">
          <div className="bg-card/80 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-black mb-1 uppercase tracking-tight leading-tight">
              Workshop{" "}
              <br />
              <span className="text-gradient">Gratuito</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Faça sua inscrição agora
            </p>

            <div className="flex flex-col gap-2 mb-6 text-base md:text-lg text-foreground/90">
              <span className="flex items-center gap-2">
                📍 Barra da Tijuca, Rio de Janeiro
              </span>
              <span className="flex items-center gap-2">
                🕢 19:30 às 22:00
              </span>
            </div>

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
                {loading ? "Enviando..." : "FAZER INSCRIÇÃO GRATUITA"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
