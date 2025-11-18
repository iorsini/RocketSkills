import { useState } from 'react';
import { FaPlaneDeparture, FaPlus, FaUsers, FaStamp, FaCity } from 'react-icons/fa';

const crewPipelines = [
  { gate: 'A12', route: 'Full Stack remoto - Lisboa', applicants: 42, match: 86, eta: '18 dias', mood: 'Verde' },
  { gate: 'B04', route: 'DevOps híbrido - Porto', applicants: 27, match: 78, eta: '25 dias', mood: 'Ambar' },
  { gate: 'D08', route: 'UX Research - São Paulo', applicants: 33, match: 81, eta: '21 dias', mood: 'Verde' },
];

const conciergeAlerts = [
  {
    title: 'Conexão aprovada',
    detail: '3 candidatos com vistos completos aguardam entrevista com a tripulação de produto.',
  },
  {
    title: 'Renovar requisitos',
    detail: 'Atualize o idioma exigido na vaga Full Stack para liberar candidatos latam.',
  },
  {
    title: 'Mentoria sugerida',
    detail: 'Emparelhe Joana Ribeiro com o hub de Lisboa para acelerar onboarding.',
  },
];

export default function EmployerDashboard() {
  const [newJob, setNewJob] = useState({ title: '', location: '', squad: '', visas: '' });

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container">
          <header className="pathport-card space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="tag-chip">Painel do empregador</div>
                <h1 className="text-4xl">Central de Embarque - TechCorp</h1>
                <p className="text-[var(--pathport-slate)]">
                  Todas as vagas, check-ins e documentos ficam nesta única tela. Sem abas perdidas: o PathPort organiza as rotas da sua tripulação.
                </p>
              </div>
              <button className="boarding-button">
                <FaPlaneDeparture />
                Exportar manifesto
              </button>
            </div>
            <div className="journey-grid">
              {[{ label: 'Vagas em operação', value: 12 }, { label: 'Candidatos na fila', value: 487 }, { label: 'Match médio', value: '82%' }, { label: 'Tempo até embarque', value: '21 dias' }].map((stat) => (
                <div key={stat.label} className="ticket-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Portões ativos</span>
                <h2>Rotas e tripulações</h2>
              </div>
              <div className="space-y-4">
                {crewPipelines.map((pipeline) => (
                  <div key={pipeline.gate} className="ticket-card space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl">{pipeline.route}</h3>
                      <span className="status-pill">Gate {pipeline.gate}</span>
                    </div>
                    <p className="text-sm text-[var(--pathport-slate)]">{pipeline.applicants} passaportes em análise</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="status-pill success">Match {pipeline.match}%</span>
                      <span className="status-pill warning">ETA {pipeline.eta}</span>
                      <span className="status-pill">Status {pipeline.mood}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pathport-card space-y-5">
              <div className="section-heading">
                <span>Nova vaga</span>
                <h2>Criar rota sem sair do painel</h2>
              </div>
              <form className="space-y-3">
                <input
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Cargo"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
                <input
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Local ou fuso"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                />
                <input
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Tripulação responsável"
                  value={newJob.squad}
                  onChange={(e) => setNewJob({ ...newJob, squad: e.target.value })}
                />
                <textarea
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Carimbos obrigatórios (ex: React, inglês, liderança)"
                  value={newJob.visas}
                  onChange={(e) => setNewJob({ ...newJob, visas: e.target.value })}
                />
                <button type="button" className="boarding-button w-full">
                  <FaPlus />
                  Publicar no gate
                </button>
              </form>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            {[{
              title: 'Tripulações em check-in',
              value: '8 grupos',
              icon: FaUsers,
              detail: 'Mentores aprovando documentos em tempo real.',
            },
            {
              title: 'Vistos aprovados hoje',
              value: '24 carimbos',
              icon: FaStamp,
              detail: 'Hards skills validadas por agentes PathPort.',
            },
            {
              title: 'Hubs conectados',
              value: '6 cidades',
              icon: FaCity,
              detail: 'Rotas com recrutamento simultâneo.',
            }].map((card) => (
              <div key={card.title} className="pathport-card">
                <div className="flex items-center gap-3">
                  <card.icon className="text-3xl text-[var(--pathport-crimson)]" />
                  <div>
                    <p className="text-sm text-[var(--pathport-muted)]">{card.title}</p>
                    <p className="text-2xl font-bold">{card.value}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--pathport-slate)] mt-3">{card.detail}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Concierge corporativo</span>
                <h2>Alertas e recomendações</h2>
              </div>
              <div className="ai-steps">
                {conciergeAlerts.map((alert, index) => (
                  <div key={alert.title} className={`ai-step ${index === 0 ? 'active' : ''}`}>
                    <strong>G{index + 1}</strong>
                    <div>
                      <p className="font-semibold">{alert.title}</p>
                      <p className="text-sm text-[var(--pathport-slate)]">{alert.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Checklist de embarque</span>
                <h2>Ações rápidas</h2>
              </div>
              <div className="space-y-3">
                {["Enviar briefing para gate B04", "Liberar orçamento de relocação", "Confirmar intérprete para entrevista"].map((task) => (
                  <label key={task} className="flex items-center gap-3 ticket-card cursor-pointer">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>{task}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
