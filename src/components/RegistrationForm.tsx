import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsapp) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("inscricoes").insert({
      nome: name,
      email,
      whatsapp,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Erro ao enviar inscrição. Tente novamente.", variant: "destructive" });
      return;
    }
    toast({ title: "Inscrição realizada com sucesso!" });
    setName("");
    setEmail("");
    setWhatsapp("");
  };

  return (
    <div className="bg-card/80 border border-border rounded-2xl p-4 md:p-8 backdrop-blur-sm">
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
        <div>
          <label htmlFor="name" className="sr-only">Nome completo</label>
          <Input
            id="name"
            placeholder="Seu nome completo"
            autoComplete="name"
            aria-required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-secondary/80 border-border h-12 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">E-mail</label>
          <Input
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            autoComplete="email"
            aria-required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-secondary/80 border-border h-12 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="sr-only">WhatsApp</label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="Seu WhatsApp (com DDD)"
            autoComplete="tel"
            aria-required="true"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="bg-secondary/80 border-border h-12 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 font-black text-sm md:text-base uppercase tracking-wide text-primary-foreground glow-border"
          style={{ backgroundImage: 'var(--gradient-glow)' }}
        >
          {loading ? "Enviando..." : "FAZER INSCRIÇÃO GRATUITA"}
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
