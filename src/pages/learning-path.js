import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaLock, FaRocket, FaUserAstronaut } from 'react-icons/fa';

const pathSteps = [
  { name: 'Python Basics', status: 'completed', duration: '2 semanas', progress: 100 },
  { name: 'Git & Version Control', status: 'completed', duration: '1 semana', progress: 100 },
  { name: 'Web Development', status: 'in-progress', duration: '4 semanas', progress: 60 },
  { name: 'Deployment & DevOps', status: 'locked', duration: '3 semanas', progress: 0 },
  { name: 'Advanced Topics', status: 'locked', duration: '5 semanas', progress: 0 }
];

export default function LearningPath() {
  const [planets] = useState(pathSteps);
  const currentPlanetIndex = planets.findIndex(p => p.status === 'in-progress');
  const totalWeeks = planets.reduce((sum, p) => sum + parseInt(p.duration), 0);
  const completedWeeks = planets.filter(p => p.status === 'completed').reduce((sum, p) => sum + parseInt(p.duration), 0);
  const overallProgress = Math.round((completedWeeks / totalWeeks) * 100);

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/candidate/skills-pending">
              <button className="btn-secondary">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div>
              <p className="section-tag">Trilha personalizada</p>
              <h1 className="text-4xl font-extrabold">Jornada interplanetária</h1>
            </div>
          </div>

          <div className="card-rocket">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tempo total</p>
                <h2 className="text-3xl font-bold">{totalWeeks} semanas até o lançamento</h2>
              </div>
              <div className="match-meter" style={{ width: 120, height: 120 }}>
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--stellar-glow)" strokeWidth="8" strokeDasharray={`${overallProgress * 2.51} 251`} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">{overallProgress}%</div>
              </div>
              <div className="flex items-center gap-3">
                <FaUserAstronaut className="text-4xl text-cyan-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Posição atual</p>
                  <h3 className="text-xl font-bold">{planets[currentPlanetIndex]?.name}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card-rocket space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mapa das constelações</p>
            <div className="space-y-3">
              {planets.map(step => (
                <div key={step.name} className="micro-card flex items-center gap-4">
                  <div className="glow-ring text-xl">
                    {step.status === 'completed' ? <FaCheckCircle /> : step.status === 'locked' ? <FaLock /> : <FaRocket />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-semibold">{step.name}</p>
                      <span className="text-xs text-slate-400">{step.duration}</span>
                    </div>
                    <div className="energy-bar mt-2">
                      <span style={{ width: `${step.progress}%` }} />
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
