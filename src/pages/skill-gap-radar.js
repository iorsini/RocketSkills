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

  // 🔭 Aqui é onde tu controla os dados (mock por enquanto)
  // No produto real, esse array viria da API / plataforma.
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

  const matchScore = Math.round(
    skills.reduce(
      (acc, s) => acc + Math.min((s.candidate / s.required) * 100, 100),
      0
    ) / skills.length
  );

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-8">
          {/* HEADER */}
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
              <p className="text-slate-300">
                Compare o nível do candidato com o nível esperado pela vaga
                e veja onde a constelação ainda precisa de energia.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {/* COLUNA ESQUERDA – MÉTRICAS RESUMO */}
            <div className="lg:col-span-3 space-y-4">
              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Total de skills analisadas
                </p>
                <p className="text-3xl font-bold">{skills.length}</p>
                <p className="text-xs text-slate-400 mt-2">
                  Cada skill é um ponto na constelação do radar.
                </p>
              </div>

              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Skills com gap
                </p>
                <p className="text-3xl font-bold">{missingSkills.length}</p>
                <p className="text-xs text-slate-400 mt-2">
                  São as competências onde o nível do candidato está abaixo
                  do nível exigido pela vaga.
                </p>
              </div>

              <div className="card-rocket">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Match score geral
                </p>

                <div className="match-meter mx-auto mb-3 relative">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="var(--stellar-glow)"
                      strokeWidth="8"
                      strokeDasharray={
                        animateChart ? `${matchScore * 2.51} 251` : '0 251'
                      }
                    />
                  </svg>

                  <div
                    className="match-percentage absolute inset-0 flex items-center justify-center"
                    style={{ color: 'var(--stellar-glow)' }}
                  >
                    {matchScore}%
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  Média entre o que a vaga pede e o que o candidato já tem
                  hoje em cada skill.
                </p>
              </div>
            </div>

            {/* CENTRO – RADAR */}
            <div className="lg:col-span-6">
              <div className="card-rocket flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-1">
                    Radar de competências
                  </p>
                  <h2 className="text-xl font-bold mb-1">
                    Nível do candidato × nível da vaga
                  </h2>
                  <p className="text-xs text-slate-400 mb-4">
                    A linha pontilhada mostra o que a vaga exige. A área
                    preenchida mostra onde o candidato está hoje.
                  </p>
                </div>

                <div className="w-full max-w-md aspect-square relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Anéis do radar */}
                    {[20, 40, 60, 80, 100].map((r, i) => (
                      <circle
                        key={i}
                        cx="100"
                        cy="100"
                        r={r * 0.8}
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="0.5"
                      />
                    ))}

                    {/* Raios para cada skill */}
                    {skills.map((skill, i) => {
                      const angle =
                        ((i * 360) / skills.length - 90) * (Math.PI / 180);
                      const x = 100 + Math.cos(angle) * 80;
                      const y = 100 + Math.sin(angle) * 80;

                      return (
                        <line
                          key={skill.name}
                          x1="100"
                          y1="100"
                          x2={x}
                          y2={y}
                          stroke="rgba(255,255,255,0.15)"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Polígono – nível exigido pela vaga */}
                    <polygon
                      points={skills
                        .map((s, i) => {
                          const angle =
                            ((i * 360) / skills.length - 90) *
                            (Math.PI / 180);
                          const r = s.required * 0.8;
                          return `${100 + Math.cos(angle) * r},${
                            100 + Math.sin(angle) * r
                          }`;
                        })
                        .join(' ')}
                      fill="none"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* Polígono – nível do candidato */}
                    <polygon
                      points={skills
                        .map((s, i) => {
                          const angle =
                            ((i * 360) / skills.length - 90) *
                            (Math.PI / 180);
                          const r = s.candidate * 0.8;
                          return `${100 + Math.cos(angle) * r},${
                            100 + Math.sin(angle) * r
                          }`;
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

                {/* Legendinha */}
                <div className="mt-4 flex flex-wrap gap-4 justify-center text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm border border-slate-200 border-dashed" />
                    <span>Requisitos da vaga</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm" style={{ background: 'rgba(92,141,255,0.7)' }} />
                    <span>Nível atual do candidato</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA – INSIGHTS */}
            <div className="lg:col-span-3 card-rocket space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-5">
                Insights da IA
              </p>

              {[
                'Mapeando portfólio',
                'Comparando squads',
                'Gerando plano de ação',
                'Recomendando mentores'
              ].map((step, idx) => (
                <div
                  key={step}
                  className={`micro-card flex items-center gap-3 ${
                    analysisStep >= idx ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <FaBrain className="text-2xl text-cyan-200" />
                  <p>{step}</p>
                </div>
              ))}

              <div className="micro-card">
                <p className="text-sm text-slate-400">
                  Skills faltantes prioritárias
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Diferença entre o nível exigido e o nível atual.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {missingSkills.slice(0, 3).map(skill => (
                    <li key={skill.name} className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.required - skill.candidate}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* NOTA DE PRODUTO / MOCK */}
          <p className="text-[11px] text-slate-500">
            *Os valores desta tela são ilustrativos. Na versão em produção,
            o radar será alimentado automaticamente pelos dados da plataforma
            (respostas do candidato, avaliações, trilhas concluídas, etc.).
          </p>
        </div>
      </main>
    </div>
  );
}