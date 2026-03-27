import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const RegistrationForm = () => {
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
  );
};

export default RegistrationForm;
