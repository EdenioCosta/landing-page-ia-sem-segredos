import AnimateOnScroll from "@/components/AnimateOnScroll";

const reasons = [
  "Para você que sente que está perdendo muitas oportunidades por não saber aplicar a inteligência artificial no seu negócio.",
  "Para você que ouve muito sobre inteligência artificial, mas ainda está tudo confuso e não conseguiu visualizar como usar isso na prática.",
  "Para você que não conhece inteligência artificial ou só faz perguntas para o ChatGPT, o que representa quase nada do que ela realmente pode fazer por você.",
];

const ReasonsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-center mb-16">
            3 MOTIVOS PARA VOCÊ{" "}
            <span className="text-gradient">PARTICIPAR</span>
          </h2>
        </AnimateOnScroll>

        <div className="space-y-6">
          {reasons.map((text, i) => (
            <AnimateOnScroll key={i}>
              <div className="flex gap-6 items-start p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300">
                <span className="text-4xl font-black text-primary shrink-0">{i + 1}</span>
                <p className="text-foreground text-lg md:text-xl text-left leading-relaxed">{text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
