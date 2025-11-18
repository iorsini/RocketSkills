import { useState } from 'react';
import Link from 'next/link';
import {
  FaRocket,
  FaRegStar,
  FaClock,
  FaTrophy,
  FaCheckCircle,
  FaFire,
  FaBullseye,
  FaGlobeAmericas,
  FaCompass
} from 'react-icons/fa';
import { designSystem } from '@/utils/designSystem';

export default function CandidateDashboard() {
  const accent = designSystem.colors.accent;
  const [profile] = useState({
    name: 'João Silva',
    currentRole: 'Desenvolvedor Junior',
    targetRole: 'Full Stack Sênior',
    readinessScore: 72,
    skillsCompleted: 8,
    skillsInProgress: 3,
    skillsPending: 5,
    learningStreak: 12,
    weeklyHours: 8.5
  });

  const [matchedJobs] = useState([
    {
      id: 1,
      title: 'Desenvolvedor Full Stack',
      company: 'TechCorp',
      match: 87,
      salary: 'R$ 8.000 - R$ 12.000',
      location: 'Remoto',
      missingSkills: 2
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'StartupXYZ',
      match: 82,
      salary: 'R$ 7.000 - R$ 10.000',
      location: 'São Paulo',
      missingSkills: 3
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'BigTech Inc',
      match: 79,
      salary: 'R$ 10.000 - R$ 15.000',
      location: 'Híbrido',
      missingSkills: 4
    }
  ]);

  const [recentActivity] = useState([
    {
      type: 'completed',
      title: 'Concluiu: React Advanced Patterns',
      time: '2 horas atrás',
      icon: FaCheckCircle,
      color: accent.mint
    },
    {
      type: 'match',
      title: 'Novo match: 87% com TechCorp',
      time: '5 horas atrás',
      icon: FaRegStar,
      color: accent.primary
    },
    {
      type: 'streak',
      title: 'Sequência de 12 dias!',
      time: '1 dia atrás',
      icon: FaFire,
      color: accent.secondary
    }
  ]);

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-3">
              <div className="badge-chip">Intergalactic Skill Passport</div>
              <h1 className="text-4xl font-extrabold flex items-center gap-3">
                <FaGlobeAmericas className="text-cyan-300" />
                Olá, {profile.name.split(' ')[0]}
              </h1>
              <p className="text-slate-300">
                {profile.currentRole} → {profile.targetRole}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/candidate/passport-cover">
                <button className="btn-primary">
                  <FaTrophy />
                  Ver Passaporte
                </button>
              </Link>
              <Link href="/candidate/skills-pending">
                <button className="btn-secondary">
                  <FaBullseye />
                  Focar nos gaps
                </button>
              </Link>
            </div>
          </div>

          {/* Readiness Banner */}
          <div className="card-rocket">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Status de lançamento</p>
                <p className="text-4xl font-extrabold mt-2">{profile.readinessScore}% pronto</p>
                <p className="text-sm text-slate-300">Continue assim, o passaporte ganha novo carimbo ao atingir 80%.</p>
              </div>
              <div className="match-meter">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="var(--stellar-glow)"
                    strokeWidth="8"
                    strokeDasharray={`${profile.readinessScore * 2.51} 251`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaRocket className="text-4xl text-cyan-300" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                <div className="glass-tile text-center">
                  <p className="text-3xl font-bold">{profile.skillsCompleted}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">completas</p>
                </div>
                <div className="glass-tile text-center">
                  <p className="text-3xl font-bold">{profile.skillsPending}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">faltam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT - Matched Jobs */}
            <div className="card-rocket space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Missões alinhadas</p>
                  <h2 className="text-2xl font-bold">Oportunidades recomendadas</h2>
                </div>
                <Link href="/ready-to-launch" className="section-link">
                  ver todas
                </Link>
              </div>
              <div className="space-y-3">
                {matchedJobs.map(job => (
                  <div key={job.id} className="micro-card">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">{job.title}</p>
                        <p className="text-xs text-slate-400">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <span className="status-pill status-ready">{job.match}% match</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-300">
                      <span>{job.salary}</span>
                      <span className="token-pill">{job.missingSkills} skills faltando</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Activity + Passport */}
            <div className="space-y-4">
              <div className="card-rocket space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">atividade recente</p>
                {recentActivity.map(activity => (
                  <div key={activity.title} className="flex items-center gap-3">
                    <div className="glow-ring" style={{ color: activity.color, borderColor: activity.color }}>
                      <activity.icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{activity.title}</p>
                      <p className="text-xs text-slate-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-rocket space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">energia semanal</p>
                    <h3 className="text-xl font-bold">{profile.learningStreak} dias seguidos</h3>
                  </div>
                  <FaClock className="text-2xl text-cyan-200" />
                </div>
                <div className="energy-bar">
                  <span style={{ width: `${profile.learningStreak}%` }} />
                </div>
                <div className="flex justify-between text-sm text-slate-300">
                  <span>{profile.weeklyHours}h investidas</span>
                  <span>Meta: 10h</span>
                </div>
              </div>

              <div className="card-rocket space-y-3">
                <div className="flex items-center gap-3">
                  <FaCompass className="text-2xl text-cyan-200" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">próximos passos</p>
                    <h3 className="text-xl font-bold">Mapa do passaporte</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['skills-pending', 'skills-completed'].map(page => (
                    <Link key={page} href={`/candidate/${page}`} className="token-pill">
                      {page === 'skills-pending' ? 'Gaps abertos' : 'Carimbos ativos'}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
