import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Dona de salão de beleza",
    photo: testimonial1,
    text: "O Edenio é muito objetivo e direto ao ponto. Saí do workshop sabendo exatamente o que fazer no meu negócio. Nunca imaginei que a IA pudesse ser tão simples de usar.",
  },
  {
    name: "Rafael Oliveira",
    role: "Dono de loja de roupas",
    photo: testimonial2,
    text: "Foi o workshop mais claro que já assisti sobre inteligência artificial. Sem enrolação, sem termos difíceis. Aprendi mais em pouco tempo do que em meses tentando sozinho.",
  },
  {
    name: "Juliana Santos",
    role: "Consultora de marketing",
    photo: testimonial3,
    text: "Eu tinha medo de tecnologia, mas o Edenio tornou tudo tão simples que saí do workshop já aplicando no meu dia a dia. Meus resultados mudaram completamente.",
  },
  {
    name: "Marcos Ferreira",
    role: "Dono de restaurante",
    photo: testimonial4,
    text: "Achei que IA era coisa de empresa grande. Depois desse workshop, ficou claro que qualquer negócio pode usar. Já estou economizando horas por semana no meu restaurante.",
  },
  {
    name: "Patrícia Lima",
    role: "Advogada",
    photo: testimonial5,
    text: "O conteúdo é muito bem organizado e fácil de entender. Saí com a cabeça tranquila e cheia de ideias práticas. Recomendo para qualquer profissional que quer crescer.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4">
          O QUE DIZEM <span className="text-gradient">QUEM JÁ PARTICIPOU</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16">
          Veja o que empresários e profissionais estão falando
        </p>

        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex gap-5 items-start bg-secondary/50 border border-border rounded-2xl p-6 md:p-8"
            >
              <img
                src={t.photo}
                alt={t.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shrink-0 border-2 border-primary/30"
              />
              <div>
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-3 text-left">
                  "{t.text}"
                </p>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
