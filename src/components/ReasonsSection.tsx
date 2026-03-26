const reasons = [
  { title: "Você não precisa saber nada de inteligência artificial", desc: "Você vai aprender de forma simples, prática e direta" },
  { title: "É um treinamento pensado para quem não tem tempo a perder", desc: "Sem linguagem técnica, sem complicação" },
  { title: "Você vai entender como aplicar isso no seu negócio de verdade", desc: "Não é teoria, é uso prático" },
  { title: "Você vai enxergar novas possibilidades de crescimento", desc: "E perceber que está mais próximo do que imagina" },
  { title: "Você pode sair dessa palestra com uma nova forma de trabalhar", desc: "Mais leve, mais eficiente e com mais resultado" },
];

const ReasonsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-16">
          5 MOTIVOS PARA VOCÊ{" "}
          <span className="text-gradient">PARTICIPAR DESSA PALESTRA</span>
        </h2>

        <div className="space-y-6">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors duration-300" style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="text-4xl font-black text-primary shrink-0">{i + 1}</span>
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-bold text-foreground">{r.title}</h3>
                <p className="text-muted-foreground mt-1">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
