import { useState } from 'react';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaPython,
  FaBolt,
  FaChartBar,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaPlug,
  FaCloud
} from 'react-icons/fa';

const stamps = [
  { name: 'PYTHON MASTERY', icon: FaPython, date: 'Jan 2025', accent: 'var(--stellar-glow)' },
  { name: 'AGILE CERTIFIED', icon: FaBolt, date: 'Fev 2025', accent: 'var(--stellar-blue)' },
  { name: 'DATA ANALYSIS', icon: FaChartBar, date: 'Mar 2025', accent: 'var(--stellar-mint)' },
  { name: 'REACT EXPERT', icon: FaReact, date: 'Abr 2025', accent: 'var(--stellar-indigo)' },
  { name: 'GIT MASTER', icon: FaGitAlt, date: 'Mai 2025', accent: '#67e8f9' },
  { name: 'SQL PRO', icon: FaDatabase, date: 'Jun 2025', accent: '#38bdf8' },
  { name: 'API DESIGN', icon: FaPlug, date: 'Jul 2025', accent: '#a5b4fc' },
  { name: 'CLOUD BASICS', icon: FaCloud, date: 'Ago 2025', accent: '#5de1c9' }
];

export default function SkillsCompleted() {
  const [badges] = useState(stamps);

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-10">
          <div className="flex items-center gap-4">
            <Link href="/candidate/passport-id">
              <button className="btn-secondary">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div>
              <p className="section-tag">Passaporte intergaláctico</p>
              <h1 className="text-4xl font-extrabold">Carimbos confirmados</h1>
              <p className="text-slate-300">Competências certificadas e prontas para exibição em missões.</p>
            </div>
          </div>

          <div className="card-rocket">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {badges.map((badge, idx) => (
                <div key={badge.name} className="holo-card relative overflow-hidden" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 60%)' }} />
                  <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                    <div className="glow-ring text-2xl" style={{ color: badge.accent, borderColor: badge.accent }}>
                      <badge.icon />
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{badge.date}</p>
                    <h3 className="text-lg font-bold">{badge.name}</h3>
                    <span className="stamp approved" style={{ transform: `rotate(${idx % 2 === 0 ? -4 : 5}deg)` }}>
                      <FaCheckCircle className="mr-2" />
                      Verified
                    </span>
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
