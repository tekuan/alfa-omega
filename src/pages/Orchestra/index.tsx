import { Link } from 'react-router-dom'
import MemberCard from '../../components/MemberCard'
import { members } from '../../data/members'
import Navbar from '../../components/Navbar'

export default function Orchestra() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />


      {/* Músicos */}
      <section className="bg-slate-900 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Nossos músicos
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Pessoas por trás da música.
            </h2>

            <p className="mt-5 text-lg text-slate-400">
              Conheça alguns dos músicos que fazem parte
              da Alfa & Ômega.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {members.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
              />
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Nossa música
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Quer conhecer nosso repertório?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
            Explore as músicas e obras que fazem parte
            da nossa trajetória.
          </p>

          <Link
            to="/repertorio"
            className="mt-8 inline-block rounded-full bg-amber-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Ver repertório
          </Link>

        </div>

      </section>

    </main>
  )
}