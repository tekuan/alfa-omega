import Navbar from '../../components/Navbar'

export default function Gallery() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden">
        <img
          src="src/assets/aeo2.jpg"
          alt="Orquestra durante apresentação"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Galeria
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl">
            Momentos que fazem parte
            <span className="block text-slate-300">
              da nossa história.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Apresentações, ensaios e momentos especiais que registram
            a trajetória da Orquestra Alfa & Ômega.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          {/* Filtros */}
          <div className="mb-12 flex flex-wrap gap-3">
            <button className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950">
              Todas
            </button>

            <button className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Apresentações
            </button>

            <button className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Ensaios
            </button>

            <button className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Instrumentos
            </button>

            <button className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Bastidores
            </button>
          </div>

          {/* Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <GalleryCard
              title="Apresentação"
              category="Apresentações"
              image="https://images.unsplash.com/photo-1465847899084-d164df4dedc6"
            />

            <GalleryCard
              title="Momento musical"
              category="Ensaios"
              image="https://images.unsplash.com/photo-1507838153414-b4b713384a76"
            />

            <GalleryCard
              title="Instrumentos"
              category="Instrumentos"
              image="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0"
            />

            <GalleryCard
              title="Ensaio da orquestra"
              category="Ensaios"
              image="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            />

            <GalleryCard
              title="Música ao vivo"
              category="Apresentações"
              image="https://images.unsplash.com/photo-1507838153414-b4b713384a76"
            />

            <GalleryCard
              title="Bastidores"
              category="Bastidores"
              image="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
            />

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Alfa & Ômega
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Música que merece ser vivida.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Conheça nosso repertório e descubra as obras que fazem
            parte da nossa identidade musical.
          </p>

          <a
            href="/repertorio"
            className="mt-8 inline-block rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Conheça nosso repertório
          </a>
        </div>
      </section>
    </div>
  )
}

interface GalleryCardProps {
  title: string
  category: string
  image: string
}

function GalleryCard({
  title,
  category,
  image,
}: GalleryCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
          {category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          {title}
        </h3>
      </div>
    </article>
  )
}