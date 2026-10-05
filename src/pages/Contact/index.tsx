import Navbar from '../../components/Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Contato
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl">
            Vamos
            <span className="text-slate-400"> conversar?</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Entre em contato com a Orquestra Alfa & Ômega.
            Será um prazer conversar sobre apresentações,
            parcerias, eventos e música.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Informações */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Fale conosco
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Estamos à disposição
            </h2>

            <p className="mt-5 max-w-md leading-relaxed text-slate-400">
              Tem alguma dúvida, quer contratar uma apresentação
              ou deseja conhecer melhor o nosso trabalho?
              Envie uma mensagem.
            </p>

            <div className="mt-10 space-y-6">

              {/* WhatsApp */}
              <ContactItem
                icon="💬"
                title="WhatsApp"
                value="(61) 99999-9999"
                href="https://wa.me/5561999999999"
              />

              {/* Instagram */}
              <ContactItem
                icon="📷"
                title="Instagram"
                value="@orquestraalfaomega"
                href="#"
              />

              {/* E-mail */}
              <ContactItem
                icon="✉️"
                title="E-mail"
                value="contato@alfaomega.com.br"
                href="mailto:contato@alfaomega.com.br"
              />

            </div>
          </div>

          {/* Formulário */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white">
              Envie uma mensagem
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Preencha o formulário e entraremos em contato.
            </p>

            <form className="mt-8 space-y-6">

              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Nome
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                />
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                />
              </div>

              {/* Assunto */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Assunto
                </label>

                <select
                  id="subject"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>
                  <option value="apresentacao">
                    Contratação de apresentação
                  </option>
                  <option value="parceria">
                    Parceria
                  </option>
                  <option value="duvida">
                    Dúvida
                  </option>
                  <option value="outro">
                    Outro
                  </option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Mensagem
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Escreva sua mensagem..."
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Enviar mensagem
              </button>

            </form>
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
            A música nos conecta.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Acompanhe a nossa jornada e fique por dentro das
            próximas apresentações.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-lg border border-amber-400 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-slate-950"
          >
            Seguir no Instagram
          </a>
        </div>
      </section>
    </div>
  )
}

interface ContactItemProps {
  icon: string
  title: string
  value: string
  href: string
}

function ContactItem({
  icon,
  title,
  value,
  href,
}: ContactItemProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-xl transition group-hover:border-amber-400/50">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="mt-1 font-medium text-white transition group-hover:text-amber-400">
          {value}
        </p>
      </div>
    </a>
  )
}