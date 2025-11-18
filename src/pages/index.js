import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaSuitcaseRolling,
  FaStamp,
  FaGlobeAmericas,
  FaCompass,
  FaRoute,
  FaClipboardList,
} from "react-icons/fa";

const airportStats = [
  {
    title: "Chances de embarque",
    value: "92%",
    detail: "média entre candidatos prontos",
    icon: FaCompass,
    accent: "var(--pathport-crimson)",
  },
  {
    title: "Vistos concedidos",
    value: "4.781",
    detail: "skills homologadas por mentores",
    icon: FaStamp,
    accent: "var(--pathport-saffron)",
  },
  {
    title: "Rotas corporativas",
    value: "312",
    detail: "empregadores ativos",
    icon: FaSuitcaseRolling,
    accent: "var(--pathport-teal)",
  },
];

const stampShowcase = [
  { label: "Tech Visa", description: "Full Stack", tone: "#9E2A2B" },
  { label: "People Seal", description: "Soft skills", tone: "#E09F3E" },
  { label: "Cloud Transit", description: "DevOps", tone: "#335C67" },
  { label: "Data Route", description: "Analytics", tone: "#8C4A3F" },
];

const experienceStrips = [
  {
    title: "Candidatos",
    description: "Ganham um passaporte com carimbos de hard e soft skills",
    icon: FaPlaneDeparture,
  },
  {
    title: "Empregadores",
    description: "Acompanham terminais de contratação em um único painel",
    icon: FaRoute,
  },
  {
    title: "Formadores",
    description: "Montam trilhas que viram vistos colecionáveis",
    icon: FaClipboardList,
  },
];

export default function Landing() {
  const [passportCode, setPassportCode] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 9000 + 1000);
    setPassportCode(`PP-${year}-${random}`);
  }, []);

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container">
          <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <div className="tag-chip">Bem-vindo ao PathPort</div>
              <h1 className="text-4xl md:text-5xl leading-tight">
                Seu passaporte internacional de habilidades e contratações humanas.
              </h1>
              <p className="text-lg text-[var(--pathport-slate)]">
                A PathPort substitui o universo sci-fi por uma experiência acolhedora de viagem. Cada skill equivale a um carimbo, cada vaga vira um portão e cada mentor atua como agente consular.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/skill-gap-radar">
                  <button className="boarding-button">
                    <FaPlaneDeparture />
                    Abrir radar de rotas
                  </button>
                </Link>
                <Link href="/stats">
                  <button className="outline-button">
                    <FaGlobeAmericas />
                    Ver impacto
                  </button>
                </Link>
              </div>
              <div className="ticket-card flex flex-wrap items-center gap-4 text-sm text-[var(--pathport-muted)]">
                <div>
                  <p className="font-semibold text-[var(--pathport-teal)]">Passaporte ativo</p>
                  <p className="font-mono tracking-[0.3em]">{passportCode}</p>
                </div>
                <div className="divider-dotted w-full md:w-auto" />
                <div>
                  <p className="font-semibold text-[var(--pathport-teal)]">Portões conectados</p>
                  <p>+40 países em operação remota</p>
                </div>
              </div>
            </div>

            <div className="passport-card space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[var(--pathport-muted)]">Passaporte de skills</p>
                  <h2 className="text-3xl">PathPort Global</h2>
                </div>
                <FaStamp className="text-4xl text-[var(--pathport-crimson)]" />
              </div>
              <p className="text-[var(--pathport-slate)]">
                Carimbamos habilidades técnicas como vistos e experiências humanas como selos especiais. Use este documento para desbloquear contratações calorosas.
              </p>
              <div className="stamp-grid">
                {stampShowcase.map((stamp) => (
                  <div key={stamp.label} className="stamp" style={{ color: stamp.tone, borderColor: `${stamp.tone}55` }}>
                    <strong>{stamp.label}</strong>
                    <span className="text-xs tracking-[0.2em] text-[var(--pathport-muted)]">{stamp.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="journey-grid">
            {airportStats.map((stat) => (
              <div key={stat.title} className="pathport-card">
                <div className="flex items-center gap-3">
                  <stat.icon className="text-3xl" style={{ color: stat.accent }} />
                  <div>
                    <p className="text-sm text-[var(--pathport-muted)]">{stat.title}</p>
                    <p className="text-3xl font-bold" style={{ color: stat.accent }}>{stat.value}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--pathport-slate)] mt-3">{stat.detail}</p>
              </div>
            ))}
          </section>

          <section className="pathport-card space-y-6">
            <div className="section-heading">
              <span>Central de embarque</span>
              <h2>Três painéis, um único itinerário</h2>
              <p className="text-[var(--pathport-slate)]">
                Candidatos, empregadores e formadores operam na mesma pista e compartilham insights de viagem. Tudo acontece dentro de cada dashboard específico, sem saltos de página.
              </p>
            </div>
            <div className="timeline-board">
              {experienceStrips.map((strip) => (
                <div key={strip.title} className="timeline-card">
                  <div className="flex items-center gap-3 mb-3">
                    <strip.icon className="text-2xl text-[var(--pathport-crimson)]" />
                    <h3 className="text-xl">{strip.title}</h3>
                  </div>
                  <p className="text-[var(--pathport-slate)]">{strip.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pathport-card space-y-6">
            <div className="section-heading">
              <span>Assistente de viagem</span>
              <h2>IA que cuida do check-in</h2>
              <p className="text-[var(--pathport-slate)]">
                O módulo inteligente opera como um concierge: analisa portfólios, sugere conexões e entrega plano de voo personalizado antes de cada contratação.
              </p>
            </div>
            <div className="ai-steps">
              {["Capturando passaporte", "Definindo rota ideal", "Sugerindo conexões", "Liberando plano de embarque"].map((step, index) => (
                <div key={step} className={`ai-step ${index === 0 ? "active" : ""}`}>
                  <strong>T{index + 1}</strong>
                  <div>
                    <p className="font-semibold">{step}</p>
                    <p className="text-sm text-[var(--pathport-slate)]">
                      {index === 0 && 'Entendemos histórico, idiomas e trilhas concluídas para preencher o passaporte.'}
                      {index === 1 && 'Comparamos requisitos de visto e sugerimos o gate com melhor tempo de embarque.'}
                      {index === 2 && 'Indicamos mentores e equipas de voo com perfis complementares.'}
                      {index === 3 && 'Entregamos o roteiro final com próximos carimbos, prazos e alertas.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pathport-card">
            <div className="section-heading">
              <span>Comunidade global</span>
              <h2>Mapas vivos e rotas compartilhadas</h2>
            </div>
            <div className="scrollable-row">
              {["São Paulo", "Lisboa", "Cidade do Cabo", "CDMX", "Buenos Aires", "Porto"].map((city) => (
                <div key={city} className="ticket-card min-w-[220px]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Check-in ativo</p>
                  <h3 className="text-2xl mt-1">{city}</h3>
                  <p className="text-sm text-[var(--pathport-slate)]">Tripulações conectadas em hubs remotos e presenciais.</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
