import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaRegStar,
  FaGamepad,
  FaChartLine,
  FaUsers,
  FaCompass,
  FaMagic,
  FaLayerGroup,
  FaShieldAlt,
  FaTrophy,
  FaFlagCheckered,
  FaSatellite,
  FaGlobeAmericas,
  FaFingerprint,
  FaClock,
} from "react-icons/fa";
import { designSystem } from "@/utils/designSystem";

const missionStats = [
  {
    title: "Energia do Match",
    value: "82%",
    detail: "baseado em 12k missões",
    icon: FaChartLine,
    accent: "var(--accent-primary)",
  },
  {
    title: "Missões Ativas",
    value: "154",
    detail: "squads sincronizados agora",
    icon: FaGamepad,
    accent: "var(--accent-secondary)",
  },
  {
    title: "Contratações Orbitais",
    value: "487",
    detail: "empregadores em fluxo",
    icon: FaBriefcase,
    accent: "var(--accent-cyan)",
  },
];

const personaTracks = [
  {
    label: "Candidatos",
    description:
      "Passaporte espacial com carimbos visuais, mentorias e energia de aprendizagem.",
    icon: FaRocket,
    accent: "var(--accent-primary)",
    href: "/candidate/dashboard",
  },
  {
    label: "Empresas",
    description:
      "Painel de controle para squads prontos, telemetria e ajuste de requisitos.",
    icon: FaBriefcase,
    accent: "var(--accent-cyan)",
    href: "/employer/dashboard",
  },
  {
    label: "Formadores",
    description:
      "Construa micro missões, monetize expertise e monitore impacto em tempo real.",
    icon: FaGraduationCap,
    accent: "var(--accent-secondary)",
    href: "/trainer/dashboard",
  },
];

const badgeBelt = [
  {
    title: "Ready to Launch",
    subtitle: "score acima de 70%",
    icon: FaFlagCheckered,
    accent: "var(--accent-primary)",
  },
  {
    title: "Mentor Radar",
    subtitle: "feedback aplicado em 3 ciclos",
    icon: FaMagic,
    accent: "var(--accent-secondary)",
  },
  {
    title: "Squad Hero",
    subtitle: "match perfeito com equipe",
    icon: FaShieldAlt,
    accent: "var(--accent-cyan)",
  },
  {
    title: "Galaxy Builder",
    subtitle: "empresa cria jornada completa",
    icon: FaLayerGroup,
    accent: "var(--accent-purple)",
  },
];

const passportStamps = [
  { label: "React Nebula", description: "patterns avançados", progress: 86 },
  { label: "API Hyperdrive", description: "integrações seguras", progress: 74 },
  {
    label: "People Ops Orbit",
    description: "soft skills aplicadas",
    progress: 63,
  },
  { label: "DevOps Pulse", description: "observabilidade e SRE", progress: 58 },
];

const designTokensShowcase = [
  { title: "Cores", items: Object.values(designSystem.colors.accent) },
  {
    title: "Tipografia",
    items: [
      designSystem.typography.headings.split(",")[0],
      designSystem.typography.body.split(",")[0],
    ],
  },
  {
    title: "Espaçamento",
    items: Object.values(designSystem.spacing)
      .slice(0, 4)
      .map((v) => `${v}px`),
  },
  { title: "Rádius", items: Object.values(designSystem.radii) },
];

export default function Landing() {
  // ============ FIX DO SERIAL ============
  const [serial, setSerial] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 9000 + 1000);
    setSerial(`RS-${year}-${random}`);
  }, []);
  // =======================================

  return (
    <div className="space-bg min-h-screen text-white">
      <main className="app-shell">
        <div className="stellar-container space-y-24">
          {/* HERO */}
          <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Painel intergaláctico para acelerar talentos, empresas e
                mentores.
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                Conectamos empregadores, candidatos e formadores em um
                fluxo espacial.
              </p>

              <div className="flex flex-wrap gap-4 my-8">
                <Link href="/skill-gap-radar">
                  <button className="btn-primary text-lg">
                    <FaRocket />
                    Ativar Mission Control
                  </button>
                </Link>
                <Link href="/stats">
                  <button className="btn-secondary text-lg">
                    <FaChartLine />
                    Ver impacto real
                  </button>
                </Link>
              </div>
            </div>

            {/* MISSION PANEL */}
            <div className="mission-panel">
              <div className="mission-header">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Mission Control
                  </p>
                  <h2 className="text-2xl font-bold mt-1">
                    Pronto para a decolagem
                  </h2>
                </div>
              </div>

              <div className="mission-body space-y-4">
                {[
                  {
                    title: "Scan de Skills",
                    description:
                      "Radar com IA identifica lacunas e energia disponível",
                    icon: FaCompass,
                  },
                  {
                    title: "Quests Personalizadas",
                    description:
                      "Micro desafios liberados semanalmente com feedback vivo",
                    icon: FaGamepad,
                  },
                  {
                    title: "Match & Patentes",
                    description:
                      "Badges desbloqueiam recomendações e squads prontos",
                    icon: FaTrophy,
                  },
                ].map((step) => (
                  <div key={step.title} className="mission-step">
                    <div className="step-icon">
                      <step.icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="text-xs text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mission-footer grid grid-cols-3 gap-6 text-center">
                {[
                  { label: "Streak coletiva", value: "12 dias" },
                  { label: "Boost Mentoria", value: "+37%" },
                  { label: "Squads ativos", value: "58" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-2xl font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PERSONAS */}
          <section className="space-y-10">
            <div className="grid md:grid-cols-3 gap-8">
              {personaTracks.map((track) => (
                <div
                  key={track.label}
                  className="persona-card"
                  style={{ borderColor: track.accent }}
                >
                  <div
                    className="persona-icon"
                    style={{
                      color: track.accent,
                      background: `${track.accent}20`,
                    }}
                  >
                    <track.icon />
                  </div>

                  <h3 className="text-2xl font-bold">{track.label}</h3>
                  <p className="text-sm text-slate-300 flex-1">
                    {track.description}
                  </p>

                  <Link href={track.href} className="persona-link">
                    Entrar no hub →
                  </Link>
                </div>
              ))}
            </div>
          </section>
          {/* CTA */}
          <section>
            <div className="cta-card">
              <div>
                <p className="section-tag">Pronto para o próximo capítulo?</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Ative sua central de missões e acompanhe o impacto em tempo
                  real.
                </h2>
                <p className="text-slate-300 text-lg">
                  Transforme currículos em narrativas, entrevistas em co-criação
                  e relatórios em painéis vivos.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/ready-to-launch">
                  <button className="btn-primary text-lg">
                    <FaRocket />
                    Receber meu passaporte
                  </button>
                </Link>

                <Link href="/stats">
                  <button className="btn-secondary text-lg">
                    <FaChartLine />
                    Explorar impacto
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
