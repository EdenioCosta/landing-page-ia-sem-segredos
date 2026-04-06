import speakerHero from "@/assets/speaker-hero.webp";
import RegistrationForm from "@/components/RegistrationForm";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-background">
      {/* Workshop badge top */}
      <div className="relative z-10 pt-8 pb-4">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-center">
          Workshop <span className="text-gradient">Gratuito</span>
        </h2>
      </div>

      {/* Event image with top and bottom gradient fades */}
      <div className="relative w-full">
        <img
          src={speakerHero}
          alt="Workshop IA Sem Segredos - Evento lotado"
          width={1200}
          height={704}
          className="w-full object-cover max-h-[55vh] md:max-h-[60vh]"
        />
        {/* Top gradient: dark → transparent */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
        {/* Bottom gradient: transparent → dark */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content below image */}
      <div className="relative z-10 flex flex-col items-center text-center w-full -mt-8">
        {/* Headline */}
        <div className="px-6 max-w-3xl space-y-5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-[1.12] tracking-tight uppercase">
            DESCUBRA COMO ATRAIR MAIS CLIENTES COM{" "}
            <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
            Para profissionais liberais, pequenos e médios empresários.
          </p>
        </div>

        {/* Registration form */}
        <div className="mt-8 w-full max-w-md px-6">
          <RegistrationForm />
        </div>
        <p className="text-foreground text-base md:text-lg max-w-md px-6 mt-4 mb-16 text-center">
          <span className="font-bold">Atenção:</span> por ser um workshop gratuito, as vagas esgotam muito rápido e são muito concorridas. Então não deixe pra depois.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
