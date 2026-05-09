const shortcuts = [
  { key: "Alt + S", action: "Alternar visibilidade do widget" },
  { key: "Alt + C", action: "Navegar pelas câmeras disponíveis" },
  { key: "Alt + M", action: "Alternar mute do microfone" },
  { key: "Alt + A", action: "Alternar modo avatar" },
  { key: "Alt + F", action: "Navegar pelas formas geométricas" },
  { key: "Alt + D", action: "Alternar modo da borda" },
  { key: "Alt + B", action: "Exibir/Ocultar borda" },
  { key: "Alt + +", action: "Aumentar tamanho do widget" },
  { key: "Alt + -", action: "Diminuir tamanho do widget" },
  { key: "Esc", action: "Fechar widget e retornar ao launcher" },
];

const Shortcuts = () => {
  return (
    <section id="shortcuts" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atalhos Globais
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Todos os atalhos usam o modificador{" "}
            <kbd className="px-2 py-0.5 rounded bg-primary-darker text-accent text-sm font-mono">
              Alt
            </kbd>{" "}
            e funcionam em todo o sistema.
          </p>
        </div>

        <div className="rounded-2xl border border-primary-darker/40 overflow-hidden">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-6 py-4 ${
                index % 2 === 0
                  ? "bg-primary-darker/20"
                  : "bg-transparent"
              } hover:bg-primary-darker/30 transition-colors`}
            >
              <span className="text-gray-300 text-sm">{shortcut.action}</span>
              <kbd className="px-3 py-1 rounded-lg bg-primary-darker/60 text-accent text-sm font-mono border border-primary/20">
                {shortcut.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shortcuts;
