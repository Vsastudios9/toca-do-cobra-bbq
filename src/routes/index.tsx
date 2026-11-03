import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import { FlameSeal } from "@/components/FlameSeal";
import { WhatsAppFab } from "@/components/WhatsAppFab";

import ribsUrl from "@/assets/ribs.jpg";
import ambienceUrl from "@/assets/ambience.jpg";
import pitmasterUrl from "@/assets/pitmaster.jpg";
import picanhaUrl from "@/assets/picanha.jpg";
import porchettaAsset from "@/assets/porchetta.asset.json";
import arrozAsset from "@/assets/arroz.asset.json";
import anchoAsset from "@/assets/ancho.asset.json";
import heroVideoAsset from "@/assets/hero.mp4.asset.json";

const ribsAsset = { url: ribsUrl };
const ambienceAsset = { url: ambienceUrl };
const pitmasterAsset = { url: pitmasterUrl };
const picanhaAsset = { url: picanhaUrl };

const RESERVA_URL = "https://bit.ly/tocadocobra-reservas";
const CARDAPIO_URL = "https://www.dguests.com/tocadocobra";
const MAPS_URL =
  "https://www.google.com/maps/place/Toca+do+Cobra/@-12.9836,-38.4569,17z";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua+Alceu+Amoroso+Lima+789+Caminho+das+%C3%81rvores+Salvador+BA&output=embed";
const INSTAGRAM_URL = "https://instagram.com/tocadocobra";
const WA_URL =
  "https://wa.me/5571996972263?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e gostaria de fazer uma reserva na Toca do Cobra 🔥",
  );

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: ribsAsset.url, fetchpriority: "high" },
    ],
    meta: [
      { property: "og:image", content: ribsAsset.url },
      { name: "twitter:image", content: ribsAsset.url },
    ],
  }),
  component: Home,
});

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("rise-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Home() {
  const revealRef = useReveal();
  return (
    <div ref={revealRef} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Destaques />
        <Cardapio />
        <Galeria />
        <Avaliacoes />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- Header ---------- */

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur"
      style={{ background: "color-mix(in oklab, var(--bg-base) 88%, transparent)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3 min-w-0">
          <FlameSeal size={40} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wider uppercase" style={{ color: "var(--cream-bone)" }}>
              Toca do Cobra
            </span>
            <span className="font-condensed text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--gold-brass)" }}>
              American BBQ · Bahia
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-condensed text-sm uppercase tracking-[0.18em] transition-colors hover:text-fire"
              style={{ color: "var(--cream-bone)" }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href={RESERVA_URL} target="_blank" rel="noopener noreferrer" className="btn-ember hidden sm:inline-flex">
          Reservar Mesa
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="inicio" className="smoke-bg wood-grain relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_1fr] md:gap-14 md:py-24 lg:py-28">
        {/* left */}
        <div className="relative z-10 flex flex-col justify-center" data-reveal>
          <div className="flex items-center gap-3">
            <FlameSeal size={44} />
            <span className="font-condensed text-xs uppercase tracking-[0.28em]" style={{ color: "var(--gold-brass)" }}>
              Salvador · Caminho das Árvores
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] uppercase sm:text-6xl md:text-7xl">
            American BBQ
            <br />
            <span className="text-fire">com tempero</span>
            <br />
            da Bahia.
          </h1>

          <p className="mt-6 max-w-lg text-base sm:text-lg" style={{ color: "var(--cream-bone-muted)" }}>
            Costela de boi na brasa, cortes nobres tratados com respeito e um pátio de
            madeira crua sob luzes de varal. Aqui o fogo manda, a fumaça assina e a
            Bahia dá o sotaque.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={RESERVA_URL} target="_blank" rel="noopener noreferrer" className="btn-ember">
              Fazer Reserva
            </a>
            <a href="#cardapio" className="btn-ghost">Ver Cardápio</a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
            <Badge>
              <Star /> <b className="font-condensed">4,5</b>
              <span className="opacity-70">· 971 avaliações</span>
            </Badge>
            <Badge>
              <span className="font-condensed" style={{ color: "var(--gold-brass)" }}>R$</span>
              <b className="font-condensed">60–140</b>
              <span className="opacity-70">por pessoa</span>
            </Badge>
            <Badge>🐾 <span>Pet Friendly</span></Badge>
          </ul>
        </div>

        {/* right — feature photo */}
        <div className="relative z-10" data-reveal>
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-2xl opacity-70 blur-2xl"
              style={{ background: "var(--gradient-fire)" }}
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-xl border border-border shadow-2xl">
              <video
                src={heroVideoAsset.url}
                poster={ribsAsset.url}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-[420px] w-full object-cover sm:h-[520px] md:h-[600px]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:block">
              <FlameSeal size={72} />
            </div>
            <div
              className="absolute right-4 top-4 rounded-sm border border-border/70 px-3 py-1.5 font-condensed text-[11px] uppercase tracking-[0.22em]"
              style={{
                background: "color-mix(in oklab, var(--bg-base) 75%, transparent)",
                color: "var(--gold-brass)",
              }}
            >
              Assado no fogo · corte da casa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-2 text-sm" style={{ color: "var(--cream-bone)" }}>
      {children}
    </li>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--orange-fire)" aria-hidden="true">
      <path d="M12 2l3 6.9 7.5.6-5.7 4.9 1.8 7.4L12 17.9 5.4 21.8l1.8-7.4L1.5 9.5 9 8.9 12 2z" />
    </svg>
  );
}

/* ---------- Destaques (Instagram-style circular highlights) ---------- */

const DESTAQUES = [
  {
    label: "Executivo",
    desc: "Prato feito honesto, servido rápido, do jeito baiano.",
    icon: (
      <path d="M4 7h16M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M10 11h4M10 15h4" />
    ),
  },
  {
    label: "A Toca",
    desc: "Pátio de madeira, ferro preto e luzes de varal.",
    icon: <path d="M3 12l9-8 9 8v8a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-8z" />,
  },
  {
    label: "Happy Hour",
    desc: "Chopp gelado, tábuas pra dividir e preço bom.",
    icon: <path d="M6 3h12l-2 6H8L6 3zm3 6v9m6-9v9M9 20h6" />,
  },
  {
    label: "Pet Friendly",
    desc: "Traz o cão, aqui ele também é da casa.",
    icon: (
      <path d="M5 12a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm14 0a2 2 0 1 0-2-2 2 2 0 0 0 2 2zM8 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm8 0a2 2 0 1 0-2-2 2 2 0 0 0 2 2zM12 22c-3 0-5-1.8-5-4 0-2.2 2.2-4 5-4s5 1.8 5 4-2 4-5 4z" />
    ),
  },
];

function Destaques() {
  return (
    <section id="sobre" className="relative border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="divider-brass mx-auto max-w-xs font-condensed text-[11px] uppercase tracking-[0.32em]">
            A Casa
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase sm:text-4xl md:text-5xl">
            O que rola na Toca
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--cream-bone-muted)" }}>
            Quatro coisas que a gente entrega todo dia — sem enrolação.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-4">
          {DESTAQUES.map((d) => (
            <div key={d.label} className="flex flex-col items-center text-center" data-reveal>
              <div
                className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 sm:h-28 sm:w-28"
                style={{
                  borderColor: "var(--gold-brass)",
                  background:
                    "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--red-ember) 40%, var(--bg-surface)) 0%, var(--bg-surface) 70%)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  fill="none"
                  stroke="var(--cream-bone)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {d.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg uppercase tracking-wider">{d.label}</h3>
              <p className="mt-2 max-w-[16ch] text-sm" style={{ color: "var(--cream-bone-muted)" }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cardápio ---------- */

type Prato = {
  nome: string;
  desc: string;
  preco: string;
  img: string;
  destaque?: boolean;
};

const PRATOS: Prato[] = [
  {
    nome: "Churrasco Costela de Boi",
    desc: "Costela assada em fogo baixo por horas, macia, com crosta e fumaça honesta.",
    preco: "R$ 129",
    img: ribsAsset.url,
    destaque: true,
  },
  {
    nome: "Costela Maravilhosa",
    desc: "Nossa versão-assinatura: costela desfiada no arroz de temperos da casa.",
    preco: "R$ 118",
    img: arrozAsset.url,
    destaque: true,
  },
  {
    nome: "Pastel de Churrasco",
    desc: "Massa fina e crocante recheada com carne de churrasco desfiada.",
    preco: "R$ 42",
    img: porchettaAsset.url,
    destaque: true,
  },
  {
    nome: "Panceta",
    desc: "Barriga de porco de couro estalando e miolo suculento — divide bem.",
    preco: "R$ 89",
    img: porchettaAsset.url,
  },
  {
    nome: "Bife Ancho",
    desc: "Corte marmorizado, selado na brasa, sal grosso e ponto na régua.",
    preco: "R$ 114",
    img: anchoAsset.url,
    destaque: true,
  },
  {
    nome: "Maminha",
    desc: "Maciez que assusta, tempero certo e aquele beiral tostado.",
    preco: "R$ 98",
    img: picanhaAsset.url,
  },
  {
    nome: "Baguete de Cupim",
    desc: "Baguete quente com cupim desfiado, cebola caramelizada e picles.",
    preco: "R$ 52",
    img: porchettaAsset.url,
  },
  {
    nome: "Tábua de Legumes",
    desc: "Legumes da estação grelhados no fogo — pro parceiro que não come carne.",
    preco: "R$ 46",
    img: ambienceAsset.url,
  },
];

function Cardapio() {
  return (
    <section id="cardapio" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end" data-reveal>
          <div>
            <p className="font-condensed text-[11px] uppercase tracking-[0.32em]" style={{ color: "var(--gold-brass)" }}>
              — Cardápio em destaque
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl md:text-5xl">
              Os mais pedidos da casa
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-right" style={{ color: "var(--cream-bone-muted)" }}>
            Não é a carta inteira — é o que sai da cozinha antes mesmo de você terminar
            de ler o menu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRATOS.map((p) => (
            <PratoCard key={p.nome} p={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-reveal>
          <a href={CARDAPIO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Ver cardápio completo
          </a>
        </div>
      </div>
    </section>
  );
}

function PratoCard({ p }: { p: Prato }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border transition-transform hover:-translate-y-1"
      style={{ background: "var(--bg-surface)" }}
      data-reveal
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={p.img}
          alt={p.nome}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--bg-base) 85%, transparent) 100%)",
          }}
        />
        {p.destaque && (
          <span
            className="absolute left-3 top-3 rounded-sm px-2.5 py-1 font-condensed text-[10px] uppercase tracking-[0.22em]"
            style={{ background: "var(--red-ember)", color: "var(--cream-bone)" }}
          >
            Mais pedido
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg uppercase leading-tight">{p.nome}</h3>
          <span
            className="shrink-0 font-condensed text-base"
            style={{ color: "var(--gold-brass)" }}
          >
            {p.preco}
          </span>
        </div>
        <p className="text-sm" style={{ color: "var(--cream-bone-muted)" }}>
          {p.desc}
        </p>
      </div>
    </article>
  );
}

/* ---------- Galeria ---------- */

const GALERIA = [
  { src: ribsAsset.url, alt: "Costela de boi na brasa" },
  { src: arrozAsset.url, alt: "Arroz da casa com carne desfiada e cebola roxa" },
  { src: anchoAsset.url, alt: "Bife ancho fatiado com cerveja e coca gelada" },
  { src: porchettaAsset.url, alt: "Porchetta fatiada com cebola em conserva" },
  { src: ambienceAsset.url, alt: "Pátio com luzes de varal ao entardecer" },
  { src: pitmasterAsset.url, alt: "Pitmaster com chapéu de couro na grelha" },
  { src: picanhaAsset.url, alt: "Tábua com picanha fatiada e cerveja" },
  { src: ribsAsset.url, alt: "Detalhe da crosta da costela" },
];

function Galeria() {
  return (
    <section className="relative border-t border-border" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="divider-brass mx-auto max-w-xs font-condensed text-[11px] uppercase tracking-[0.32em]">
            Galeria
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase sm:text-4xl md:text-5xl">
            Fumaça, madeira & fogo
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--cream-bone-muted)" }}>
            Uma amostra do que acontece na brasa e no pátio. Nos siga no{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--gold-brass)" }}>
              @tocadocobra
            </a>{" "}
            pra ver o resto.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {GALERIA.map((g, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-md border border-border"
              data-reveal
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--red-ember) 60%, transparent) 100%)",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Avaliações ---------- */

const DEPOIMENTOS = [
  {
    texto:
      "Atendimento redondo, cardápio de churrasco com bastante opção e um custo-benefício que surpreende. Voltamos com certeza.",
    autor: "Cliente do Google",
  },
  {
    texto:
      "Entradas variadas, happy hour com preço camarada e o ambiente da varanda com as luzinhas é a cara de Salvador.",
    autor: "Cliente do Google",
  },
  {
    texto:
      "Costela desmanchando, tempero na medida certa e a cerveja gelada de verdade. Casa que respeita quem gosta de churrasco.",
    autor: "Cliente do Google",
  },
];

function Avaliacoes() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          <div data-reveal>
            <p className="font-condensed text-[11px] uppercase tracking-[0.32em]" style={{ color: "var(--gold-brass)" }}>
              — Quem já provou
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl md:text-5xl">
              4,5 estrelas <br />
              <span className="text-fire">no Google</span>
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex" aria-label="4,5 de 5 estrelas">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} />
                ))}
              </div>
              <span className="font-condensed text-sm uppercase tracking-widest" style={{ color: "var(--cream-bone-muted)" }}>
                971 avaliações
              </span>
            </div>
            <p className="mt-6 text-base" style={{ color: "var(--cream-bone-muted)" }}>
              Quase mil pessoas concordam: aqui o churrasco tem lastro e o clima
              é de reencontro.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">
              Ver mais avaliações no Google
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <blockquote
                key={i}
                data-reveal
                className="flex flex-col justify-between rounded-lg border border-border p-6"
                style={{ background: "var(--bg-surface)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="var(--red-ember)"
                  aria-hidden="true"
                >
                  <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" />
                </svg>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--cream-bone)" }}>
                  “{d.texto}”
                </p>
                <footer className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <cite className="font-condensed text-xs uppercase not-italic tracking-widest" style={{ color: "var(--gold-brass)" }}>
                    {d.autor}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Localização ---------- */

function Localizacao() {
  return (
    <section id="localizacao" className="relative border-t border-border" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.1fr] md:py-24">
        <div data-reveal>
          <p className="font-condensed text-[11px] uppercase tracking-[0.32em]" style={{ color: "var(--gold-brass)" }}>
            — Onde a fumaça sobe
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl md:text-5xl">
            Passe pra jantar
          </h2>

          <dl className="mt-8 grid gap-6">
            <InfoRow label="Endereço" icon="pin">
              Rua Alceu Amoroso Lima, 789<br />
              Caminho das Árvores, Salvador — BA<br />
              41820-770
            </InfoRow>
            <InfoRow label="Horário" icon="clock">
              Quarta a Domingo<br />
              A partir das 12h · fecha às 23h
            </InfoRow>
            <InfoRow label="Contato" icon="phone">
              <a href="tel:+5571996972263" className="hover:text-fire">
                (71) 99697-2263
              </a>
              <br />
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-fire">
                @tocadocobra
              </a>
            </InfoRow>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-ember">
              Como chegar
            </a>
            <a href={RESERVA_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Reservar mesa
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border shadow-2xl" data-reveal>
          <iframe
            title="Mapa da Toca do Cobra"
            src={MAPS_EMBED}
            className="h-[380px] w-full md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: "pin" | "clock" | "phone";
  children: ReactNode;
}) {
  const paths: Record<string, ReactNode> = {
    pin: (
      <>
        <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    phone: (
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
  };
  return (
    <div className="flex gap-4">
      <div
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border"
        style={{ borderColor: "var(--gold-brass)", background: "var(--bg-elevated)" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="var(--orange-fire)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {paths[icon]}
        </svg>
      </div>
      <div className="min-w-0">
        <dt className="font-condensed text-[11px] uppercase tracking-[0.28em]" style={{ color: "var(--gold-brass)" }}>
          {label}
        </dt>
        <dd className="mt-1 text-base leading-relaxed" style={{ color: "var(--cream-bone)" }}>
          {children}
        </dd>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <FlameSeal size={44} />
              <span className="font-display text-xl uppercase tracking-wider">Toca do Cobra</span>
            </div>
            <p className="mt-4 max-w-sm text-sm" style={{ color: "var(--cream-bone-muted)" }}>
              American BBQ com tempero da Bahia. Costela, cortes nobres, chope gelado
              e pátio ao ar livre em Salvador.
            </p>
          </div>

          <div>
            <h4 className="font-condensed text-xs uppercase tracking-[0.28em]" style={{ color: "var(--gold-brass)" }}>
              Visite
            </h4>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cream-bone)" }}>
              Rua Alceu Amoroso Lima, 789<br />
              Caminho das Árvores<br />
              Salvador — BA · 41820-770
            </p>
            <p className="mt-3 text-sm" style={{ color: "var(--cream-bone-muted)" }}>
              Qua a Dom · 12h às 23h
            </p>
          </div>

          <div>
            <h4 className="font-condensed text-xs uppercase tracking-[0.28em]" style={{ color: "var(--gold-brass)" }}>
              Fale com a gente
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="tel:+5571996972263" className="hover:text-fire" style={{ color: "var(--cream-bone)" }}>
                  (71) 99697-2263
                </a>
              </li>
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-fire" style={{ color: "var(--cream-bone)" }}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-fire" style={{ color: "var(--cream-bone)" }}>
                  Instagram @tocadocobra
                </a>
              </li>
            </ul>
            <a href={RESERVA_URL} target="_blank" rel="noopener noreferrer" className="btn-ember mt-6 w-full sm:w-auto">
              Reservar Mesa
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-condensed text-[11px] uppercase tracking-[0.28em]" style={{ color: "var(--cream-bone-muted)" }}>
            © {new Date().getFullYear()} Toca do Cobra — Salvador, Bahia
          </p>
          <p className="font-condensed text-[11px] uppercase tracking-[0.28em]" style={{ color: "var(--gold-brass)" }}>
            Fogo · Fumaça · Bahia
          </p>
        </div>
      </div>
    </footer>
  );
}
