const showcaseItems = [
  {
    title: "Formas Geométricas",
    description:
      "Máscara circular com anti-aliasing, quadrado 1:1 ou retângulo 4:3 com cantos arredondados. Escolha o formato ideal para seu conteúdo.",
    imgAlt: "Formas Geométricas",
  },
  {
    title: "Suporte Multi-Câmera",
    description:
      "Inicie múltiplas instâncias independentes de diferentes câmeras simultaneamente. Cada widget mantém seu próprio estado de posição, tamanho, zoom e formato.",
    imgAlt: "Suporte Multi-Câmera",
  },
  {
    title: "Modo Avatar",
    description:
      "Alterna entre o feed da câmera ao vivo e uma foto de perfil estática. Suporta PNG, JPG e JPEG com corte central automático.",
    imgAlt: "Modo Avatar",
  },
  {
    title: "Reativo ao Áudio",
    description:
      "A borda do widget reage em tempo real ao áudio do microfone. Visual dinâmico que acompanha sua voz com detecção RMS.",
    imgAlt: "Reativo ao Áudio",
  },
  {
    title: "Memória Inteligente",
    description:
      "Configurações persistentes por câmera: nível de zoom (100%-500%), posição Pan X/Y, tamanho e posição da janela. Tudo salvo automaticamente.",
    imgAlt: "Memória Inteligente",
  },
  {
    title: "Atalhos Globais",
    description:
      "Teclas de atalho com modificador Alt funcionam em todo o sistema, mesmo com o aplicativo em segundo plano. Controle total sem sair do que está fazendo.",
    imgAlt: "Atalhos Globais",
  },
];

const FeatureShowcase = () => {
  return (
    <section id="showcase" className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Veja como funciona
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Capturei, edite e exiba sua webcam com recursos pensados para
            streamers e apresentadores.
          </p>
        </div>

        <div className="space-y-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-primary" />
                  <span className="text-xs text-primary font-mono tracking-wider uppercase">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="aspect-video rounded-2xl border border-primary-darker/40 bg-gradient-to-br from-primary-darker/20 to-primary-dark/5 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-600 text-sm">
                    {item.imgAlt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
