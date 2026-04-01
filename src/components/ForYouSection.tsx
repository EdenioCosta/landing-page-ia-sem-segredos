import AnimateOnScroll from "@/components/AnimateOnScroll";

const forYouItems = [
  "PARA VOCÊ QUE VENDE ALGUM PRODUTO OU SERVIÇO",
  "PARA VOCÊ QUE É PEQUENO OU MÉDIO EMPRESÁRIO",
  "PARA VOCÊ QUE É UM PROFISSIONAL LIBERAL E LUTA CADA DIA PRA DAR UMA VIDA MELHOR PARA SUA FAMÍLIA",
  "PARA VOCÊ QUE SABE QUE A INTELIGÊNCIA ARTIFICIAL É IMPORTANTE, MAS AINDA NÃO SABE COMO REALMENTE APLICAR NO SEU NEGÓCIO",
];

const ForYouSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl space-y-12">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center">
            <span className="text-gradient">PARA QUEM É</span>
          </h2>
        </AnimateOnScroll>

        <div className="space-y-3">
          {forYouItems.map((item, i) => (
            <AnimateOnScroll key={i}>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <span className="text-foreground font-semibold text-base md:text-lg text-left">{item}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
