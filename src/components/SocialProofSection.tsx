import eventAudience1 from "@/assets/event-audience-1.jpeg";
import eventSpeaker1 from "@/assets/event-speaker-1.jpeg";
import eventAudience2 from "@/assets/event-audience-2.jpeg";
import eventSpeaker2 from "@/assets/event-speaker-2.jpeg";

const SocialProofSection = () => {
  const cities = ["RIO DE JANEIRO", "BELO HORIZONTE", "BRASÍLIA", "GOIÁS", "SÃO PAULO", "CURITIBA", "FLORIANÓPOLIS"];

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-3xl space-y-10">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center uppercase">
          Workshop que conquistou o{" "}
          <span className="text-gradient">Brasil</span>
        </h2>

        {/* Event images */}
        <div className="space-y-4">
          {[eventAudience1, eventSpeaker1, eventAudience2, eventSpeaker2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Workshop Edenio Costa - Evento ${i + 1}`}
              loading="lazy"
              width={800}
              height={450}
              className="w-full rounded-xl object-cover"
            />
          ))}
        </div>

        {/* Agenda */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-center uppercase">
            Agenda
          </h3>
          <div className="flex flex-col gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="px-6 py-4 rounded-xl border border-border bg-card/60 text-center font-black text-lg md:text-xl text-foreground backdrop-blur-sm uppercase tracking-wide"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
