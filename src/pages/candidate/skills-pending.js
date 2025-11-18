import { useState } from 'react';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaLock,
  FaRocket,
  FaClock,
  FaReact,
  FaCloud,
  FaPalette,
  FaRobot,
  FaCogs,
  FaLink,
  FaShieldAlt,
  FaMobileAlt
} from 'react-icons/fa';

const pendingSkillsData = [
  { name: 'React Development', icon: FaReact, weeks: 4, locked: false, prerequisite: null },
  { name: 'Cloud Architecture', icon: FaCloud, weeks: 6, locked: true, prerequisite: 'Concluir Cloud Basics' },
  { name: 'UX Design', icon: FaPalette, weeks: 5, locked: false, prerequisite: null },
  { name: 'Machine Learning', icon: FaRobot, weeks: 8, locked: true, prerequisite: 'Python Mastery + Data Analysis' },
  { name: 'DevOps', icon: FaCogs, weeks: 6, locked: true, prerequisite: 'Docker & Cloud Basics' },
  { name: 'Blockchain', icon: FaLink, weeks: 7, locked: false, prerequisite: null },
  { name: 'Cybersecurity', icon: FaShieldAlt, weeks: 5, locked: true, prerequisite: 'Network Fundamentals' },
  { name: 'Mobile Dev', icon: FaMobileAlt, weeks: 6, locked: false, prerequisite: null }
];

export default function SkillsPending() {
  const [pendingSkills] = useState(pendingSkillsData);
  const completedSkills = 5;
  const totalSkills = 12;
  const progressPercentage = Math.round((completedSkills / totalSkills) * 100);

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
              <p className="section-tag">Missões restantes</p>
              <h1 className="text-4xl font-extrabold flex items-center gap-3">
                Skills a desbloquear
                <FaRocket className="text-cyan-300" />
              </h1>
              <p className="text-slate-300">Conclua os módulos para ganhar novos carimbos.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-rocket">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {pendingSkills.map(skill => (
                  <div key={skill.name} className="micro-card space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="glow-ring" style={{ borderColor: skill.locked ? 'rgba(255,255,255,0.2)' : 'var(--stellar-blue)', color: skill.locked ? 'rgba(255,255,255,0.6)' : 'var(--stellar-blue)' }}>
                        <skill.icon />
                      </div>
                      {skill.locked && (
                        <span className="status-pill status-alert flex items-center gap-1">
                          <FaLock />
                          Locked
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{skill.name}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        <FaClock /> {skill.weeks} semanas
                      </p>
                    </div>
                    {skill.prerequisite && (
                      <p className="text-xs text-slate-500">Pré-requisito: {skill.prerequisite}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="card-rocket space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">energia acumulada</p>
                <div className="text-4xl font-extrabold">{progressPercentage}% pronto</div>
                <div className="energy-bar">
                  <span style={{ width: `${progressPercentage}%` }} />
                </div>
                <div className="flex justify-between text-sm text-slate-300">
                  <span>{completedSkills} carimbos ativos</span>
                  <span>{totalSkills} totais</span>
                </div>
              </div>

              <div className="card-rocket space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">prioridades sugeridas</p>
                <ul className="space-y-3">
                  {pendingSkills.filter(skill => !skill.locked).slice(0, 3).map(skill => (
                    <li key={skill.name} className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <span className="token-pill">{skill.weeks} semanas</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">planos de ação</p>
                <div className="flex flex-wrap gap-2">
                  {['Mentoria ao vivo', 'Dupla com amigo', 'Simular entrevista'].map(item => (
                    <span key={item} className="token-pill">
                      {item}
                    </span>
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
