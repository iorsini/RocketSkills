import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaBrain, FaTrophy, FaClock } from 'react-icons/fa';

export default function SkillGapRadar() {
  const [animateChart, setAnimateChart] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChart(true), 500);
    const interval = setInterval(() => {
      setAnalysisStep(prev => (prev < 4 ? prev + 1 : prev));
    }, 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const skills = [
    { name: 'JavaScript', candidate: 85, required: 90 },
    { name: 'React', candidate: 70, required: 85 },
    { name: 'Node.js', candidate: 60, required: 80 },
    { name: 'SQL', candidate: 50, required: 75 },
    { name: 'Python', candidate: 30, required: 70 },
    { name: 'Git', candidate: 80, required: 85 },
    { name: 'Docker', candidate: 40, required: 65 },
    { name: 'AWS', candidate: 35, required: 70 }
  ];

  const missingSkills = skills.filter(s => s.candidate < s.required);
  const matchScore = Math.round(skills.reduce((acc, s) => acc + Math.min((s.candidate / s.required) * 100, 100), 0) / skills.length);

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/employer/job-create">
              <button className="btn-secondary">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div>
              <p className="section-tag">Radar de skills</p>
              <h1 className="text-4xl font-extrabold">Gap analysis</h1>
              <p className="text-slate-300">Identifique as constelações que precisam de energia.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3 space-y-4">
              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Total de skills</p>
                <p className="text-3xl font-bold">{skills.length}</p>
              </div>
              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Skills com gap</p>
                <p className="text-3xl font-bold">{missingSkills.length}</p>
              </div>
              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Match score</p>
                <div className="match-meter mx-auto mb-3">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="var(--stellar-glow)"
                      strokeWidth="8"
                      strokeDasharray={animateChart ? `${matchScore * 2.51} 251` : '0 251'}
                    />
                  </svg>
                  <div className="match-percentage absolute inset-0 flex items-center justify-center" style={{ color: 'var(--stellar-glow)' }}>
                    {matchScore}%
                  </div>
                </div>
              </div>
              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Prontidão</p>
                <div className="flex items-center gap-3">
                  <FaClock className="text-2xl text-cyan-200" />
                  <p className="text-lg font-semibold">Lançamento em 6 semanas</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="card-rocket h-full flex items-center justify-center">
                <div className="w-full max-w-md aspect-square relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {[20, 40, 60, 80, 100].map((r, i) => (
                      <circle key={i} cx="100" cy="100" r={r * 0.8} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    ))}
                    {skills.map((_, i) => {
                      const angle = ((i * 360) / skills.length - 90) * (Math.PI / 180);
                      const x = 100 + Math.cos(angle) * 80;
                      const y = 100 + Math.sin(angle) * 80;
                      return <line key={i} x1="100" y1="100" x2={x} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />;
                    })}
                    <polygon
                      points={skills
                        .map((s, i) => {
                          const angle = ((i * 360) / skills.length - 90) * (Math.PI / 180);
                          const r = s.required * 0.8;
                          return `${100 + Math.cos(angle) * r},${100 + Math.sin(angle) * r}`;
                        })
                        .join(' ')}
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    <polygon
                      points={skills
                        .map((s, i) => {
                          const angle = ((i * 360) / skills.length - 90) * (Math.PI / 180);
                          const r = s.candidate * 0.8;
                          return `${100 + Math.cos(angle) * r},${100 + Math.sin(angle) * r}`;
                        })
                        .join(' ')}
                      fill="rgba(92,141,255,0.25)"
                      stroke="var(--stellar-blue)"
                      strokeWidth="2"
                      opacity={animateChart ? 1 : 0}
                      style={{ transition: 'opacity 0.6s ease' }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 card-rocket space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Insights da IA</p>
              {['Mapeando portfólio', 'Comparando squads', 'Gerando plano de ação', 'Recomendando mentores'].map((step, idx) => (
                <div key={step} className={`micro-card flex items-center gap-3 ${analysisStep >= idx ? 'opacity-100' : 'opacity-50'}`}>
                  <FaBrain className="text-2xl text-cyan-200" />
                  <p>{step}</p>
                </div>
              ))}
              <div className="micro-card">
                <p className="text-sm text-slate-400">Skills faltantes prioritárias</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {missingSkills.slice(0, 3).map(skill => (
                    <li key={skill.name} className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.required - skill.candidate}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="micro-card flex items-center gap-3">
                <FaTrophy className="text-2xl text-cyan-200" />
                <div>
                  <p className="text-sm text-slate-400">Próximo selo</p>
                  <p className="text-lg font-semibold">Ready to Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
