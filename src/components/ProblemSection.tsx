import AnimateOnScroll from "@/components/AnimateOnScroll";

const ProblemSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl space-y-16">
        {/* Block 1 */}
        <AnimateOnScroll>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight text-center">
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
        </AnimateOnScroll>

        <div className="section-divider" />

        {/* Block 2 */}
        <AnimateOnScroll>
          <div className="space-y-8">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-center">
              MAS AFINAL, O QUE A INTELIGÊNCIA ARTIFICIAL{" "}
              <span className="text-gradient">PODE FAZER POR VOCÊ?</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {[
                "Te ajuda a vender mais",
                "Te ajuda a atrair mais clientes",
                "Otimiza demais o seu tempo pra aumentar sua qualidade de vida",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300">
                  <span className="text-primary mt-0.5">✦</span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center max-w-2xl mx-auto space-y-2">
              <p className="text-foreground text-xl md:text-2xl font-black uppercase">
                VOCÊ SIMPLESMENTE NÃO PODE DEIXAR ISSO DE LADO.
              </p>
              <p className="text-foreground text-xl md:text-2xl font-black uppercase">
                VOCÊ PRECISA APRENDER INTELIGÊNCIA ARTIFICIAL.
              </p>
              <p className="text-gradient text-2xl md:text-3xl font-black uppercase">
                PARTICIPE.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;
