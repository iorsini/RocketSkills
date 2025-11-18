import { useState } from 'react';
import { FaMapSigns, FaChalkboardTeacher, FaMoneyBillWave, FaGlobe } from 'react-icons/fa';

const tracks = [
  { name: 'UX Boarding Pass', students: 38, completion: 82, mood: 'Lisboa', visas: ['Pesquisa', 'Storytelling'] },
  { name: 'Cloud Transit', students: 44, completion: 68, mood: 'São Paulo', visas: ['AWS', 'FinOps'] },
  { name: 'Product Cabin Crew', students: 29, completion: 91, mood: 'Remoto', visas: ['OKR', 'Facilitação'] },
];

const requests = [
  { route: 'Telemedicina', companies: 6, demand: 'Alta', note: 'Buscam facilitadores bilingues.' },
  { route: 'Fintech LatAm', companies: 8, demand: 'Média', note: 'Precisam de especialistas em métricas de produto.' },
  { route: 'EdTech Europa', companies: 5, demand: 'Alta', note: 'Intercâmbio de mentores em inglês e espanhol.' },
];

export default function TrainerDashboard() {
  const [highlights] = useState({
    students: 234,
    avgRating: 4.9,
    visasIssued: 312,
    hubs: 7,
  });

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container">
          <header className="pathport-card space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="tag-chip">Painel do formador</div>
                <h1 className="text-4xl">Academia PathPort</h1>
                <p className="text-[var(--pathport-slate)]">
                  Planeje trilhas, acompanhe turmas e monetize sua expertise sem sair desta página. Os dados de hubs e empresas chegam em tempo real.
                </p>
              </div>
              <button className="boarding-button">
                <FaChalkboardTeacher />
                Criar nova trilha
              </button>
            </div>
            <div className="journey-grid">
              {[{ label: 'Alunos ativos', value: highlights.students }, { label: 'Avaliação média', value: highlights.avgRating }, { label: 'Selos emitidos', value: highlights.visasIssued }, { label: 'Hubs atendidos', value: highlights.hubs }].map((stat) => (
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
                <span>Trilhas</span>
                <h2>Carimbos sob sua curadoria</h2>
              </div>
              <div className="space-y-3">
                {tracks.map((track) => (
                  <div key={track.name} className="ticket-card space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl">{track.name}</h3>
                      <span className="status-pill">{track.mood}</span>
                    </div>
                    <p className="text-sm text-[var(--pathport-slate)]">{track.students} viajantes • conclusão {track.completion}%</p>
                    <div className="flex flex-wrap gap-2">
                      {track.visas.map((visa) => (
                        <span key={visa} className="status-pill warning">{visa}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Demandas</span>
                <h2>Empresas aguardando instrutor</h2>
              </div>
              <div className="ai-steps">
                {requests.map((request, index) => (
                  <div key={request.route} className={`ai-step ${index === 0 ? 'active' : ''}`}>
                    <strong>H{index + 1}</strong>
                    <div>
                      <p className="font-semibold">{request.route}</p>
                      <p className="text-sm text-[var(--pathport-slate)]">{request.companies} empresas • demanda {request.demand}</p>
                      <p className="text-sm text-[var(--pathport-muted)]">{request.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Mapa financeiro</span>
                <h2>Receita e bolsas</h2>
              </div>
              <div className="ticket-card flex items-center gap-4">
                <FaMoneyBillWave className="text-3xl text-[var(--pathport-crimson)]" />
                <div>
                  <p className="text-sm text-[var(--pathport-muted)]">Assinaturas confirmadas</p>
                  <p className="text-3xl font-bold">R$ 12.450</p>
                  <p className="text-sm text-[var(--pathport-slate)]">Inclui bolsas sociais e empresas patrocinadoras.</p>
                </div>
              </div>
              <div className="ticket-card flex items-center gap-4">
                <FaMapSigns className="text-3xl text-[var(--pathport-teal)]" />
                <div>
                  <p className="text-sm text-[var(--pathport-muted)]">Bolsa PathPort</p>
                  <p className="text-2xl font-bold">18 participantes</p>
                  <p className="text-sm text-[var(--pathport-slate)]">Controle todas as bolsas sem sair da dashboard.</p>
                </div>
              </div>
            </div>

            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Comunidade</span>
                <h2>Turmas espalhadas</h2>
              </div>
              <div className="scrollable-row">
                {["Lisboa", "Porto", "São Paulo", "Buenos Aires", "Luanda", "Maputo"].map((city) => (
                  <div key={city} className="ticket-card min-w-[200px]">
                    <FaGlobe className="text-xl text-[var(--pathport-crimson)]" />
                    <h3 className="text-xl mt-2">{city}</h3>
                    <p className="text-sm text-[var(--pathport-slate)]">Turmas com mentores locais e online.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
