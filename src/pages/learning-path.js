import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaLock, FaPlaneDeparture } from 'react-icons/fa';

const pathSteps = [
  { name: 'Fundamentos de Python', status: 'completed', duration: '2 semanas', progress: 100 },
  { name: 'Git e colaboração', status: 'completed', duration: '1 semana', progress: 100 },
  { name: 'Desenvolvimento Web', status: 'in-progress', duration: '4 semanas', progress: 60 },
  { name: 'DevOps & Cloud', status: 'locked', duration: '3 semanas', progress: 0 },
  { name: 'Projetos avançados', status: 'locked', duration: '5 semanas', progress: 0 },
];

export default function LearningPath() {
  const [trails] = useState(pathSteps);
  const currentIndex = trails.findIndex((step) => step.status === 'in-progress');
  const totalWeeks = trails.reduce((sum, step) => sum + parseInt(step.duration), 0);
  const completedWeeks = trails.filter((step) => step.status === 'completed').reduce((sum, step) => sum + parseInt(step.duration), 0);
  const overallProgress = Math.round((completedWeeks / totalWeeks) * 100);

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/candidate/dashboard">
              <button className="outline-button">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div className="section-heading">
              <span>Trilha personalizada</span>
              <h1>Itinerário de estudos</h1>
              <p className="text-[var(--pathport-slate)]">Cada etapa equivale a um carimbo no passaporte PathPort.</p>
            </div>
          </div>

          <div className="pathport-card">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Tempo total</p>
                <h2 className="text-3xl font-bold">{totalWeeks} semanas até a próxima conexão</h2>
              </div>
              <div className="radar-wrapper max-w-[180px]">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(51,92,103,0.1)" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="var(--pathport-crimson)"
                    strokeWidth="8"
                    strokeDasharray={`${overallProgress * 2.51} 251`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">{overallProgress}%</div>
              </div>
              <div className="ticket-card">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Módulo atual</p>
                <p className="text-xl font-semibold">{trails[currentIndex]?.name}</p>
              </div>
            </div>
          </div>

          <div className="pathport-card space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Mapa da viagem</p>
            <div className="space-y-3">
              {trails.map((step) => (
                <div key={step.name} className="ticket-card flex items-center gap-4">
                  <div className="status-pill" style={{ background: step.status === 'completed' ? 'rgba(62,158,108,0.15)' : 'rgba(51,92,103,0.12)' }}>
                    {step.status === 'completed' ? <FaCheckCircle /> : step.status === 'locked' ? <FaLock /> : <FaPlaneDeparture />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-semibold">{step.name}</p>
                      <span className="text-xs text-[var(--pathport-muted)]">{step.duration}</span>
                    </div>
                    <div className="divider-dotted" />
                    <div className="energy-bar">
                      <span style={{ width: `${step.progress}%`, background: 'linear-gradient(90deg,#9E2A2B,#E09F3E)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
