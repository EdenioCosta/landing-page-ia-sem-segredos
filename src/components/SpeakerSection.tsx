import speakerStage from "@/assets/speaker-stage.jpeg";
import speakerSmile from "@/assets/speaker-smile.png";

const SpeakerSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-16">
          QUEM SERÁ <span className="text-gradient">SEU TREINADOR</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={speakerSmile} alt="Edânio Costa" className="rounded-xl w-full h-72 object-cover object-top shadow-lg" />
            <img src={speakerStage} alt="Edânio Costa no palco" className="rounded-xl w-full h-72 object-cover object-top shadow-lg" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black">Edânio Costa</h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-left">
              <p>
                Edânio Costa veio do marketing digital e já faturou diversas vezes mais de{" "}
                <strong className="text-foreground">um milhão de reais em sete dias</strong> com estratégias digitais.
              </p>
              <p>
                Atualmente, é um dos <strong className="text-primary">maiores especialistas do Brasil</strong> em inteligência artificial.
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
