import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Dona de salão de beleza",
    text: "O Edenio é muito objetivo e direto ao ponto. Saí do workshop sabendo exatamente o que fazer no meu negócio. Nunca imaginei que a IA pudesse ser tão simples de usar.",
  },
  {
    name: "Rafael Oliveira",
    role: "Dono de loja de roupas",
    text: "Foi o workshop mais claro que já assisti sobre inteligência artificial. Sem enrolação, sem termos difíceis. Aprendi mais em pouco tempo do que em meses tentando sozinho.",
  },
  {
    name: "Juliana Santos",
    role: "Consultora de marketing",
    text: "Eu tinha medo de tecnologia, mas o Edenio tornou tudo tão simples que saí do workshop já aplicando no meu dia a dia. Meus resultados mudaram completamente.",
  },
  {
    name: "Marcos Ferreira",
    role: "Dono de restaurante",
    text: "Achei que IA era coisa de empresa grande. Depois desse workshop, ficou claro que qualquer negócio pode usar. Já estou economizando horas por semana no meu restaurante.",
  },
  {
    name: "Patrícia Lima",
    role: "Advogada",
    text: "O conteúdo é muito bem organizado e fácil de entender. Saí com a cabeça tranquila e cheia de ideias práticas. Recomendo para qualquer profissional que quer crescer.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-4">
            O QUE DIZEM <span className="text-gradient">QUEM JÁ PARTICIPOU</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16">
            Veja o que empresários e profissionais estão falando
          </p>
        </AnimateOnScroll>

        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i}>
              <div className="p-6 md:p-8 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300">
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-3 text-left">
                  "{t.text}"
                </p>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
