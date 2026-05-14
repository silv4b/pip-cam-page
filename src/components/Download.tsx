"use client";

import CopyButton from "./CopyButton";
import useVersion from "./useVersion";

const Download = () => {
  const { version, url } = useVersion();
  return (
    <section id="download" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Download do instalador ou versão portátil disponível abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-darker/30 to-primary-dark/10 border border-primary-darker/40 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark mb-6 shadow-lg shadow-primary/20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Instalador Windows
              </h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
                Instalador completo gerado com Inno Setup. Pronto para baixar e usar em minutos.
              </p>

              <div className="flex items-center justify-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>v{version}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                  <span>~89 MB</span>
                </div>
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Baixar v{version}
              </a>
            </div>
          </div>

          <div className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Instalação
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Compatível com Windows 10/11 e em breve com Linux e macOS.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-darker/30 to-primary-dark/10 border border-primary-darker/40">
            <h3 className="text-lg font-semibold text-white mb-4">
              Código Fonte
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Clone o repositório e execute a versão mais recente com uv.
            </p>
            <div className="space-y-3">
              {[
                { label: "Clone", cmd: "git clone https://github.com/silv4b/pip-cam.git" },
                { label: "Execute", cmd: "cd pip-cam && uv run main.py" },
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

          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-darker/30 to-primary-dark/10 border border-primary-darker/40">
            <h3 className="text-lg font-semibold text-white mb-4">
              Versão Portátil (PowerShell)
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              One-liner via PowerShell para Windows. Baixa e executa a versão
              portátil sem necessidade de instalador.
            </p>
            <div className="space-y-3">
              {[
                { label: "Instalar", cmd: "irm https://raw.githubusercontent.com/silv4b/pip-cam/main/install.ps1 | iex" },
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
      </div>
    </section >
  );
};

export default Download;
