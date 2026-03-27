const forYouItems = [
  "É PARA VOCÊ QUE É UM PROFISSIONAL LIBERAL OU PEQUENO EMPRESÁRIO",
  "É PARA VOCÊ QUE GOSTARIA DE APRENDER COMO USAR A IA NO SEU NEGÓCIO",
  "É PARA VOCÊ QUE GOSTARIA DE TER ALGUÉM ATENDENDO O SEU WHATSAPP",
  "É PARA VOCÊ QUE GOSTARIA DE TER UM VENDEDOR TRABALHANDO 24 HORAS POR DIA",
  "É PARA VOCÊ QUE PRECISA DE IDEIAS PARA AUMENTAR SUAS VENDAS",
  "É PARA VOCÊ QUE PRECISA MELHORAR SUAS REDES SOCIAIS",
  "É PARA VOCÊ QUE PRECISA DE MAIS CLIENTES",
  "É PARA VOCÊ QUE SE SENTE SOBRECARREGADO",
  "É PARA VOCÊ QUE QUER TER MAIS TEMPO DE QUALIDADE",
  "É PARA VOCÊ QUE SENTE QUE PODERIA CRESCER MAIS, MAS NÃO SABE COMO",
];

const ForYouSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center">
            <span className="text-gradient">PARA QUEM É</span>
          </h2>
          <p className="text-foreground text-xl md:text-2xl font-bold text-left max-w-3xl mx-auto">
            Profissionais liberais, pequenos e médios empresários
          </p>
          <p className="text-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-left">
            É psicólogo, médico, advogado, dentista, fisioterapeuta, nutricionista, personal trainer, coach, terapeuta, massagista, esteticista, quiropraxista, consultor, contador, corretor de imóveis, corretor de seguros, arquiteto, designer, social media, gestor de tráfego, copywriter, fotógrafo, videomaker, engenheiro, professor, palestrante, mentor, prestador de serviços em geral.
          </p>
          <p className="text-foreground text-base md:text-lg text-left max-w-3xl mx-auto">
            Ou é lojista, pequeno ou médio empresário, dono de negócio local ou digital.
          </p>
        </div>

        <div className="space-y-3">
          {forYouItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-secondary/30 hover:border-primary/40 transition-colors duration-300"
            >
              <span className="text-primary text-xl font-bold shrink-0">✓</span>
              <span className="text-foreground font-semibold text-base md:text-lg text-left">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
