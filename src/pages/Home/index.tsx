import Navbar from '../../components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden">

        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <img
            src="src/assets/aeo.jpg"
            alt="Orquestra"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        {/* Conteúdo */}
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20">
          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Orquestra Alfa & Ômega
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Música que
              <span className="block text-amber-400">
                conecta pessoas.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Uma orquestra dedicada a transformar histórias,
              emoções e momentos através da música.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#sobre"
                className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Conheça a orquestra
              </a>

              <a
                href="/repertorio"
                className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Nosso repertório
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="bg-slate-900 px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Sobre nós
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Mais que música.
              <span className="block text-slate-400">
                Uma experiência.
              </span>
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-slate-300">
            <p>
              A Alfa & Ômega nasceu da união de músicos apaixonados
              pela arte e pelo poder da música de aproximar pessoas.
            </p>

            <p className="mt-6">
              Nosso propósito é levar música de qualidade para
              diferentes espaços, eventos e comunidades.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}