const UrgencySection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight text-center">
          OU VOCÊ APRENDE ISSO AGORA{" "}
          <span className="text-accent">OU VAI FICAR MUITO PRA TRÁS</span>
        </h2>
        <div className="space-y-4 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-left">
          <p>Isso não é uma tendência. <strong className="text-foreground">É uma realidade.</strong></p>
          <p>
            A inteligência artificial já está mudando a forma como os negócios crescem, e quem não acompanha… fica muito para trás.
          </p>
          <p className="text-foreground font-semibold">É a mesma coisa de quando a internet começou.</p>
          <p>Quem não usou, <strong className="text-accent">perdeu espaço.</strong></p>
          <p className="text-2xl font-bold text-foreground pt-4">Agora está acontecendo de novo.</p>
        </div>

        <div className="section-divider mt-16" />

        <div className="pt-12 space-y-8">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight text-center">
            VOCÊ VAI VER DIANTE DOS SEUS OLHOS{" "}
            <span className="text-gradient">O QUE É REALMENTE POSSÍVEL</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
            {[
              "Como ter um atendente",
              "Como ter um vendedor",
              "Como ter uma secretária",
              "Como ter um consultor de marketing",
              "Como ter uma IA resolvendo tudo das suas redes sociais",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                <span className="text-primary text-xl">→</span>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
