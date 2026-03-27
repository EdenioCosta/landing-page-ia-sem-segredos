const ProblemSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl space-y-16">
        {/* Block 1 */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center">
            CHEGA DE CONFUSÃO, APRENDA DE FORMA{" "}
            <span className="text-gradient">SIMPLES E FÁCIL</span>
          </h2>
          <div className="space-y-4 text-foreground text-lg md:text-xl max-w-2xl mx-auto text-left">
            <p>
              As informações estão por todos os lados, mas chegam de forma confusa. E por isso, a maioria das pessoas não consegue entender como utilizar de verdade no seu negócio.
            </p>
            <p>
              É exatamente por isso que, nesse workshop, você vai entender como usar a inteligência artificial de forma simples, eficaz e objetiva. Sem enrolação.
            </p>
          </div>
        </div>

        <div className="section-divider" />

        {/* Block 2 */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-center">
            A IA NÃO É SÓ UMA FERRAMENTA.{" "}
            <span className="text-gradient">É UM JEITO NOVO DE CONDUZIR O SEU NEGÓCIO</span>
          </h2>
          <p className="text-muted-foreground text-lg text-left max-w-2xl mx-auto">
            A IA pode assumir funções que hoje consomem seu tempo e sua atenção.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              "Pode organizar seu dia",
              "Pode fazer tarefas para você",
              "Pode estruturar seu marketing",
              "Pode ser seu conselheiro",
              "Pode ser seu consultor de vendas",
              "Pode ser o seu próprio vendedor",
              "Pode cuidar das suas redes sociais",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <span className="text-primary mt-0.5">✦</span>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-lg italic max-w-xl mx-auto text-left">
            Não é sobre tecnologia. É sobre como você passa a conduzir o seu negócio a partir disso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
