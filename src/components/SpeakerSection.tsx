import speakerTrainer from "@/assets/speaker-trainer.webp";

const SpeakerSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-16">
          QUEM SERÁ <span className="text-gradient">SEU TREINADOR</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src={speakerTrainer} alt="Edenio Costa" loading="lazy" width={400} height={500} className="rounded-2xl w-full max-w-sm object-cover object-top shadow-lg" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black">Edenio Costa</h3>
            <div className="space-y-4 text-foreground text-lg leading-relaxed text-left">
              <p>
                Edenio Costa veio do marketing digital e já faturou diversas vezes mais de um milhão de reais em sete dias com estratégias digitais.
              </p>
              <p>
                Atualmente, é um dos maiores especialistas do Brasil em inteligência artificial.
              </p>
              <p>
                Focado em ajudar profissionais liberais, pequenos e médios empresários a usar isso a seu favor de forma simples, fácil e objetiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
