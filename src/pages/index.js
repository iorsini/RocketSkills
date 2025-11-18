import Link from 'next/link';
import { useState, useEffect } from 'react';
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
  FaClock
} from 'react-icons/fa';
import { designSystem } from '@/utils/designSystem';

const missionStats = [
  {
    title: 'Energia do Match',
    value: '82%',
    detail: 'baseado em 12k missões',
    icon: FaChartLine,
    accent: 'var(--accent-primary)'
  },
  {
    title: 'Missões Ativas',
    value: '154',
    detail: 'squads sincronizados agora',
    icon: FaGamepad,
    accent: 'var(--accent-secondary)'
  },
  {
    title: 'Contratações Orbitais',
    value: '487',
    detail: 'empregadores em fluxo',
    icon: FaBriefcase,
    accent: 'var(--accent-cyan)'
  }
];

const personaTracks = [
  {
    label: 'Candidatos',
    description: 'Passaporte espacial com carimbos visuais, mentorias e energia de aprendizagem.',
    icon: FaRocket,
    accent: 'var(--accent-primary)',
    href: '/candidate/dashboard'
  },
  {
    label: 'Empresas',
    description: 'Painel de controle para squads prontos, telemetria e ajuste de requisitos.',
    icon: FaBriefcase,
    accent: 'var(--accent-cyan)',
    href: '/employer/dashboard'
  },
  {
    label: 'Formadores',
    description: 'Construa micro missões, monetize expertise e monitore impacto em tempo real.',
    icon: FaGraduationCap,
    accent: 'var(--accent-secondary)',
    href: '/trainer/dashboard'
  }
];

const badgeBelt = [
  {
    title: 'Ready to Launch',
    subtitle: 'score acima de 70%',
    icon: FaFlagCheckered,
    accent: 'var(--accent-primary)'
  },
  {
    title: 'Mentor Radar',
    subtitle: 'feedback aplicado em 3 ciclos',
    icon: FaMagic,
    accent: 'var(--accent-secondary)'
  },
  {
    title: 'Squad Hero',
    subtitle: 'match perfeito com equipe',
    icon: FaShieldAlt,
    accent: 'var(--accent-cyan)'
  },
  {
    title: 'Galaxy Builder',
    subtitle: 'empresa cria jornada completa',
    icon: FaLayerGroup,
    accent: 'var(--accent-purple)'
  }
];

const passportStamps = [
  { label: 'React Nebula', description: 'patterns avançados', progress: 86 },
  { label: 'API Hyperdrive', description: 'integrações seguras', progress: 74 },
  { label: 'People Ops Orbit', description: 'soft skills aplicadas', progress: 63 },
  { label: 'DevOps Pulse', description: 'observabilidade e SRE', progress: 58 }
];

const designTokensShowcase = [
  { title: 'Cores', items: Object.values(designSystem.colors.accent) },
  {
    title: 'Tipografia',
    items: [
      designSystem.typography.headings.split(',')[0],
      designSystem.typography.body.split(',')[0]
    ]
  },
  {
    title: 'Espaçamento',
    items: Object.values(designSystem.spacing)
      .slice(0, 4)
      .map(v => `${v}px`)
  },
  { title: 'Rádius', items: Object.values(designSystem.radii) }
];

export default function Landing() {
  // ============ FIX DO SERIAL ============
  const [serial, setSerial] = useState('');

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
              <div className="badge-chip">Temporada Orbital 02 • UI/UX Futurista</div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Painel intergaláctico para acelerar talentos, empresas e mentores.
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                RocketSkills conecta empregadores, candidatos e formadores em um fluxo espacial.
                Cada competência vira um carimbo no passaporte intergaláctico com energia,
                constelações e telemetria viva.
              </p>

              <div className="flex flex-wrap gap-4">
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

              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                {missionStats.map(card => (
                  <div key={card.title} className="stat-card">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {card.title}
                      </p>
                      <div
                        className="glow-ring"
                        style={{ borderColor: card.accent, color: card.accent }}
                      >
                        <card.icon />
                      </div>
                    </div>
                    <div className="text-3xl font-extrabold" style={{ color: card.accent }}>
                      {card.value}
                    </div>
                    <span className="text-xs text-slate-400">{card.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MISSION PANEL */}
            <div className="mission-panel">
              <div className="mission-header">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mission Control</p>
                  <h2 className="text-2xl font-bold mt-1">Pronto para a decolagem</h2>
                </div>
                <div className="glow-ring">
                  <FaSatellite />
                </div>
              </div>

              <div className="mission-body space-y-4">
                {[
                  {
                    title: 'Scan de Skills',
                    description: 'Radar com IA identifica lacunas e energia disponível',
                    icon: FaCompass
                  },
                  {
                    title: 'Quests Personalizadas',
                    description: 'Micro desafios liberados semanalmente com feedback vivo',
                    icon: FaGamepad
                  },
                  {
                    title: 'Match & Patentes',
                    description: 'Badges desbloqueiam recomendações e squads prontos',
                    icon: FaTrophy
                  }
                ].map(step => (
                  <div key={step.title} className="mission-step">
                    <div className="step-icon">
                      <step.icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="text-xs text-slate-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mission-footer grid grid-cols-3 gap-6 text-center">
                {[
                  { label: 'Streak coletiva', value: '12 dias' },
                  { label: 'Boost Mentoria', value: '+37%' },
                  { label: 'Squads ativos', value: '58' }
                ].map(item => (
                  <div key={item.label}>
                    <p className="text-xs uppercase text-slate-400">{item.label}</p>
                    <p className="text-2xl font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BADGES */}
          <section className="space-y-8">
            <div className="section-heading">
              <div>
                <p className="section-tag">Constelação de conquistas</p>
                <h2 className="section-title">Carimbos do passaporte</h2>
              </div>
              <p className="section-description">
                Cada badge representa energia acumulada e desbloqueia experiências para candidatos,
                empresas e mentores.
              </p>
            </div>

            <div className="badge-grid">
              {badgeBelt.map(badge => (
                <div key={badge.title} className="badge-card">
                  <div className="badge-icon" style={{ background: badge.accent }}>
                    <badge.icon />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{badge.title}</p>
                    <p className="text-sm text-slate-300">{badge.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PERSONAS */}
          <section className="space-y-10">
            <div className="section-heading">
              <div>
                <p className="section-tag">Experiência UI/UX</p>
                <h2 className="section-title">Escolha sua missão</h2>
              </div>
              <p className="section-description">
                Microinterações, barras de energia e constelações minimalistas guiam cada astronauta.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {personaTracks.map(track => (
                <div
                  key={track.label}
                  className="persona-card"
                  style={{ borderColor: track.accent }}
                >
                  <div
                    className="persona-icon"
                    style={{ color: track.accent, background: `${track.accent}20` }}
                  >
                    <track.icon />
                  </div>

                  <h3 className="text-2xl font-bold">{track.label}</h3>
                  <p className="text-sm text-slate-300 flex-1">{track.description}</p>

                  <Link href={track.href} className="persona-link">
                    Entrar no hub →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* PASSPORT */}
          <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="holo-card space-y-6">
              <div className="flex items-center gap-4">
                <div className="glow-ring text-xl">
                  <FaGlobeAmericas />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Intergalactic Skill Passport
                  </p>
                  <h3 className="text-3xl font-bold">Mapa dos carimbos</h3>
                </div>
              </div>

              <div className="space-y-4">
                {passportStamps.map(stamp => (
                  <div key={stamp.label} className="micro-card">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold">{stamp.label}</p>
                        <p className="text-xs text-slate-400">{stamp.description}</p>
                      </div>
                      <span className="text-sm text-slate-300">{stamp.progress}%</span>
                    </div>

                    <div className="energy-bar">
                      <span style={{ width: `${stamp.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PASSPORT COVER */}
            <div className="passport-cover p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 45%)'
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
                  ROCKETSKILLS • SPACE AGENCY
                </p>

                <div className="passport-emblem flex items-center justify-center">
                  <FaRocket className="text-6xl text-cyan-300" />
                </div>

                <p className="font-bold text-lg tracking-[0.3em]">PASSAPORTE DE MISSÕES</p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {[FaFingerprint, FaRegStar, FaShieldAlt].map((Icon, index) => (
                    <div key={index} className="skill-badge completed">
                      <Icon />
                      <span>{['Identidade', 'Match', 'Segurança'][index]}</span>
                    </div>
                  ))}
                </div>

                {/* ========== FIX DAQUI ↓ ========== */}
                <p className="text-xs text-slate-400 tracking-[0.3em]">
                  SERIAL {serial || 'RS-0000-0000'}
                </p>
                {/* ========== FIX ATÉ AQUI ↑ ========== */}
              </div>
            </div>
          </section>

          {/* JOURNEY */}
          <section className="space-y-8">
            <div className="section-heading">
              <div>
                <p className="section-tag">Telemetria de progresso</p>
                <h2 className="section-title">Fluxo do astronauta</h2>
              </div>

              <Link href="/learning-path" className="section-link">
                Ver trilhas completas →
              </Link>
            </div>

            <div className="timeline">
              {[
                {
                  title: 'Onboarding Imersivo',
                  description: 'Score instantâneo, narrativa guiada e primeiros carimbos.',
                  icon: FaUsers,
                  highlight: 'Duração média: 9 minutos'
                },
                {
                  title: 'Ciclos de Experimento',
                  description: 'Quests com pair programming, live reviews e barras de energia.',
                  icon: FaMagic,
                  highlight: 'Taxta de conclusão: 92%'
                },
                {
                  title: 'Match & Deployment',
                  description: 'Recomendações acionáveis, contratos e métricas de impacto.',
                  icon: FaFlagCheckered,
                  highlight: 'Contratações em 21 dias'
                }
              ].map(step => (
                <div key={step.title} className="timeline-step">
                  <div className="step-badge">
                    <step.icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-sm text-slate-300">{step.description}</p>
                    <span className="step-highlight text-slate-400 text-xs uppercase tracking-[0.3em]">
                      {step.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DESIGN SYSTEM */}
          <section className="space-y-8">
            <div className="section-heading">
              <div>
                <p className="section-tag">Design system</p>
                <h2 className="section-title">Base visual do painel</h2>
              </div>

              <p className="section-description">
                Tokens reutilizáveis garantem consistência entre dashboards,
                passaportes e fluxos de contratação.
              </p>
            </div>

            <div className="token-grid">
              {designTokensShowcase.map(group => (
                <div key={group.title} className="token-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, idx) => (
                      <span key={idx} className="token-pill">
                        {item}
                      </span>
                    ))}
                  </div>
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
                  Ative sua central de missões e acompanhe o impacto em tempo real.
                </h2>
                <p className="text-slate-300 text-lg">
                  Transforme currículos em narrativas, entrevistas em co-criação
                  e relatórios em painéis vivos.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/ready-to-lauch">
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