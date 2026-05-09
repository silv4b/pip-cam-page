import CopyButton from "./CopyButton";

const Download = () => {
  return (
    <section id="download" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Instalação
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compatível com Windows 10/11 e em breve com Linux e macOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-darker/30 to-primary-dark/10 border border-primary-darker/40">
            <h3 className="text-lg font-semibold text-white mb-4">
              Instalador Windows
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Instalador completo gerado com Inno Setup. Contém tudo que você
              precisa para começar.
            </p>
            <a
              href="https://github.com/silv4b/pip-cam/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Baixar v1.3.0
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-darker/30 to-primary-dark/10 border border-primary-darker/40">
            <h3 className="text-lg font-semibold text-white mb-4">
              Código Fonte
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Clone o repositório e instale as dependências com uv para
              executar a versão mais recente.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-background border border-primary-darker/30 overflow-x-auto">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <CopyButton text="git clone https://github.com/silv4b/pip-cam.git" />
                <code className="text-xs sm:text-sm text-gray-300 font-mono whitespace-nowrap">
                  git clone https://github.com/silv4b/pip-cam.git
                </code>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-background border border-primary-darker/30 overflow-x-auto">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <CopyButton text="cd pip-cam && uv sync && uv run main.py" />
                <code className="text-xs sm:text-sm text-gray-300 font-mono whitespace-nowrap">
                  cd pip-cam && uv sync && uv run main.py
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-darker/30 to-primary-dark/10 border border-primary-darker/40">
          <h3 className="text-lg font-semibold text-white mb-4">
            Executar com uv
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Caso não tenha o uv, instale em{" "}
            <a
              href="https://docs.astral.sh/uv/getting-started/installation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              docs.astral.sh/uv
            </a>
          </p>

          <div className="space-y-3">
            {[
              { label: "Clone", cmd: "git clone https://github.com/silv4b/pip-cam.git && cd pip-cam" },
              { label: "Instale", cmd: "uv sync" },
              { label: "Execute", cmd: "uv run main.py" },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-4 py-3 rounded-lg bg-background border border-primary-darker/30 overflow-x-auto"
              >
                <span className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <span className="text-xs text-gray-500 w-12 shrink-0 uppercase tracking-wider">
                  {step.label}
                </span>
                <CopyButton text={step.cmd} />
                <code className="text-xs sm:text-sm text-gray-300 font-mono whitespace-nowrap">
                  {step.cmd}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
