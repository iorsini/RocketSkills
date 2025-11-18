import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaRegStar, FaCheckCircle } from 'react-icons/fa';

export default function PassportID() {
  const [profile] = useState({
    name: 'João Silva',
    age: 28,
    memberSince: 'Janeiro 2025',
    currentRole: 'Desenvolvedor Junior',
    destinationJob: 'Full Stack Sênior',
    readinessLevel: 72,
    skillsAcquired: 8,
    skillsInProgress: 3,
    totalLearningHours: 156
  });

  const getReadinessLabel = level => {
    if (level < 50) return 'Preparação inicial';
    if (level < 75) return 'Pre-flight';
    return 'Ready to launch';
  };

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/candidate/passport-cover">
              <button className="btn-secondary">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div>
              <p className="section-tag">Intergalactic ID</p>
              <h1 className="text-4xl font-extrabold">Passaporte de Skills</h1>
            </div>
          </div>

          <div className="card-rocket">
            <div className="grid gap-8 md:grid-cols-[220px_1fr]">
              <div className="flex flex-col items-center gap-4">
                <div className="w-40 h-40 rounded-2xl flex items-center justify-center text-5xl font-bold" style={{ background: 'linear-gradient(135deg, rgba(42,233,255,0.3), rgba(92,141,255,0.7))', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {profile.name.charAt(0)}
                </div>
                <span className="skill-badge completed">
                  <FaCheckCircle /> AI Verified
                </span>
              </div>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{ label: 'Nome completo', value: profile.name }, { label: 'Idade', value: `${profile.age} anos` }, { label: 'Membro desde', value: profile.memberSince }, { label: 'Destino', value: profile.destinationJob }].map(item => (
                    <div key={item.label}>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                      <p className="text-lg font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[{ label: 'Skills carimbadas', value: profile.skillsAcquired }, { label: 'Em progresso', value: profile.skillsInProgress }, { label: 'Horas de missão', value: profile.totalLearningHours }].map(item => (
                    <div key={item.label} className="glass-tile text-center">
                      <p className="text-3xl font-bold">{item.value}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="micro-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Readiness level</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="match-meter" style={{ width: 120, height: 120 }}>
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="var(--stellar-glow)"
                          strokeWidth="8"
                          strokeDasharray={`${profile.readinessLevel * 2.51} 251`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                        {profile.readinessLevel}%
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">{getReadinessLabel(profile.readinessLevel)}</p>
                      <p className="text-sm text-slate-400">Alcance 80% para o selo Ready to Launch.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['skills-pending', 'skills-completed'].map(page => (
                    <Link key={page} href={`/candidate/${page}`} className="token-pill">
                      {page === 'skills-pending' ? 'Ver gaps' : 'Ver conquistas'}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card-rocket flex flex-wrap gap-6 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Carimbos especiais</p>
              <h2 className="text-2xl font-bold">Status atual: {getReadinessLabel(profile.readinessLevel)}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[FaRegStar, FaCheckCircle].map((Icon, idx) => (
                <span key={idx} className="skill-badge completed">
                  <Icon />
                  {idx === 0 ? 'Constelação' : 'Assinatura AI'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
