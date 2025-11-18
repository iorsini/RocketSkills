import { useMemo } from 'react';
import { FaPassport, FaPlaneDeparture, FaRoute, FaBell } from 'react-icons/fa';

const skills = [
  { name: 'React', candidate: 82, required: 90 },
  { name: 'Node.js', candidate: 70, required: 80 },
  { name: 'UX Writing', candidate: 65, required: 60 },
  { name: 'Inglês', candidate: 95, required: 90 },
  { name: 'Liderança', candidate: 55, required: 75 },
  { name: 'Cloud', candidate: 60, required: 85 },
];

const stamps = [
  { label: 'Tech Visa', country: 'Canadá', status: 'Hard skill', color: '#9E2A2B' },
  { label: 'People Seal', country: 'Portugal', status: 'Soft skill', color: '#E09F3E' },
  { label: 'Leadership Tag', country: 'Irlanda', status: 'Trilha em progresso', color: '#335C67' },
  { label: 'Product Trail', country: 'Chile', status: 'Mentoria ativa', color: '#8C4A3F' },
];

const recommendations = [
  {
    title: 'Tech Guide - Lisboa',
    match: 89,
    visas: ['React', 'API', 'Storytelling'],
    status: 'Revisado por consulado',
  },
  {
    title: 'Programa remoto - Montreal',
    match: 83,
    visas: ['Node.js', 'Cloud'],
    status: 'Entrevista confirmada',
  },
  {
    title: 'Produto LatAm - CDMX',
    match: 78,
    visas: ['Data viz', 'Facilitação'],
    status: 'Documentação enviada',
  },
];

const conciergeSteps = [
  'Validando identidade e idiomas',
  'Atualizando vistos de tecnologia',
  'Comparando rotas com empresas parceiras',
  'Liberando briefing de entrevista',
];

export default function CandidateDashboard() {
  const matchScore = useMemo(() => {
    return Math.round(
      skills.reduce((acc, skill) => acc + Math.min(skill.candidate / skill.required, 1), 0) /
        skills.length *
        100
    );
  }, []);

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container">
          <header className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="passport-card space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[var(--pathport-muted)]">Passaporte do candidato</p>
                  <h1 className="text-4xl">Joana Ribeiro</h1>
                  <p className="text-[var(--pathport-slate)]">Product Designer → Head de Produto Internacional</p>
                </div>
                <FaPassport className="text-5xl text-[var(--pathport-crimson)]" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="ticket-card text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Carimbos</p>
                  <p className="text-3xl font-bold">18</p>
                </div>
                <div className="ticket-card text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Vistos válidos</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <div className="ticket-card text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Próxima conexão</p>
                  <p className="text-xl font-semibold">Lisboa</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="boarding-button">
                  <FaPlaneDeparture />
                  Solicitar novo visto
                </button>
                <button className="outline-button">
                  <FaRoute />
                  Ver itinerário completo
                </button>
              </div>
            </div>

            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Radar pessoal</span>
                <h2>Mapa de rotas</h2>
              </div>
              <div className="radar-wrapper">
                <svg viewBox="0 0 220 220">
                  {[30, 50, 70, 90].map((radius) => (
                    <circle
                      key={radius}
                      cx="110"
                      cy="110"
                      r={radius}
                      fill="none"
                      stroke="rgba(51,92,103,0.2)"
                      strokeWidth="1"
                    />
                  ))}
                  {skills.map((skill, index) => {
                    const angle = ((index * 360) / skills.length - 90) * (Math.PI / 180);
                    const x = 110 + Math.cos(angle) * 90;
                    const y = 110 + Math.sin(angle) * 90;
                    return (
                      <line
                        key={skill.name}
                        x1="110"
                        y1="110"
                        x2={x}
                        y2={y}
                        stroke="rgba(51,92,103,0.25)"
                      />
                    );
                  })}
                  <polygon
                    points={skills
                      .map((skill, index) => {
                        const angle = ((index * 360) / skills.length - 90) * (Math.PI / 180);
                        const distance = (skill.required / 100) * 90;
                        const x = 110 + Math.cos(angle) * distance;
                        const y = 110 + Math.sin(angle) * distance;
                        return `${x},${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="rgba(158,42,43,0.6)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <polygon
                    points={skills
                      .map((skill, index) => {
                        const angle = ((index * 360) / skills.length - 90) * (Math.PI / 180);
                        const distance = (skill.candidate / 100) * 90;
                        const x = 110 + Math.cos(angle) * distance;
                        const y = 110 + Math.sin(angle) * distance;
                        return `${x},${y}`;
                      })
                      .join(' ')}
                    fill="rgba(51,92,103,0.25)"
                    stroke="var(--pathport-teal)"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="ticket-card text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Chance de embarque</p>
                    <p className="text-3xl font-bold text-[var(--pathport-crimson)]">{matchScore}%</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--pathport-slate)] text-center">
                Comparação entre o nível esperado pelos empregadores e os vistos já carimbados.
              </p>
            </div>
          </header>

          <section className="pathport-card space-y-5">
            <div className="section-heading">
              <span>Carimbos ativos</span>
              <h2>Passaporte atualizado</h2>
            </div>
            <div className="stamp-grid">
              {stamps.map((stamp) => (
                <div key={stamp.label} className="stamp" style={{ borderColor: `${stamp.color}55`, color: stamp.color }}>
                  <strong>{stamp.label}</strong>
                  <span className="text-xs tracking-[0.2em] text-[var(--pathport-muted)]">{stamp.country}</span>
                  <span className="status-pill success">{stamp.status}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="pathport-card space-y-6">
            <div className="section-heading">
              <span>Recomendações</span>
              <h2>Rotas sugeridas pelo concierge</h2>
            </div>
            <div className="journey-grid">
              {recommendations.map((rec) => (
                <div key={rec.title} className="ticket-card">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl">{rec.title}</h3>
                    <span className="status-pill">{rec.match}% match</span>
                  </div>
                  <p className="text-sm text-[var(--pathport-slate)]">{rec.status}</p>
                  <div className="divider-dotted" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)] mb-2">Carimbos necessários</p>
                  <div className="flex flex-wrap gap-2">
                    {rec.visas.map((visa) => (
                      <span key={visa} className="status-pill warning">{visa}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Assistente PathPort</span>
                <h2>Concierge em ação</h2>
              </div>
              <div className="ai-steps">
                {conciergeSteps.map((step, index) => (
                  <div key={step} className={`ai-step ${index === 1 ? 'active' : ''}`}>
                    <strong>C{index + 1}</strong>
                    <div>
                      <p className="font-semibold">{step}</p>
                      <p className="text-sm text-[var(--pathport-slate)]">
                        {index === 0 && 'Checagem automática do seu documento e histórico de viagens profissionais.'}
                        {index === 1 && 'Atualizamos as evidências técnicas e emitimos alertas de renovação.'}
                        {index === 2 && 'Casamos suas preferências com empresas que possuem gates disponíveis.'}
                        {index === 3 && 'Montamos o briefing final com horários, anexos e contatos úteis.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Alertas</span>
                <h2>Próximos embarques</h2>
              </div>
              {[1, 2, 3].map((alert) => (
                <div key={alert} className="ticket-card flex items-center gap-3">
                  <FaBell className="text-2xl text-[var(--pathport-crimson)]" />
                  <div>
                    <p className="font-semibold">Gate {12 + alert} - Entrevista confirmada</p>
                    <p className="text-sm text-[var(--pathport-slate)]">Levar portfólio e comprovante de idiomas atualizados.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
