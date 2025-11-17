import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaBrain, FaTrophy, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function SkillGapRadar() {
  const [animateChart, setAnimateChart] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimateChart(true), 500);
    
    const interval = setInterval(() => {
      setAnalysisStep(prev => (prev < 4 ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
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
  const matchScore = Math.round(skills.reduce((acc, s) => acc + Math.min(s.candidate / s.required * 100, 100), 0) / skills.length);

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/employer/job-create">
            <button className="btn-secondary">
              <FaArrowLeft />
              Voltar
            </button>
          </Link>
          <h1 
            className="text-4xl md:text-5xl font-extrabold"
            style={{ 
              color: '#C6A667',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Radar de Skill Gap
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT SIDEBAR - Stats */}
          <div className="lg:col-span-3 space-y-4">
            <div className="card-rocket">
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: '#66A6FF' }}
                >
                  <span className="text-white font-bold">12</span>
                </div>
                <div>
                  <div className="text-sm" style={{ color: '#1E3A8A' }}>Total de Skills</div>
                  <div className="text-xs" style={{ color: '#D9D9D9' }}>Requeridas</div>
                </div>
              </div>
            </div>

            <div className="card-rocket">
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: '#C63C3C' }}
                >
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <div className="text-sm" style={{ color: '#1E3A8A' }}>Skills Faltando</div>
                  <div className="text-xs" style={{ color: '#D9D9D9' }}>Gap identificado</div>
                </div>
              </div>
            </div>

            <div className="card-rocket">
              <div className="text-sm mb-2" style={{ color: '#1E3A8A' }}>Match Score</div>
              <div className="match-meter mx-auto mb-3">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#D9D9D9"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3BAA78"
                    strokeWidth="8"
                    strokeDasharray={`${matchScore * 2.51} 251`}
                    className="transition-all duration-1000"
                    style={{
                      strokeDasharray: animateChart ? `${matchScore * 2.51} 251` : '0 251'
                    }}
                  />
                </svg>
                <div 
                  className="match-percentage absolute inset-0 flex items-center justify-center"
                  style={{ color: '#3BAA78' }}
                >
                  {matchScore}%
                </div>
              </div>
            </div>

            <div className="card-rocket">
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-2xl" style={{ color: '#66A6FF' }} />
                <div>
                  <div className="text-sm" style={{ color: '#1E3A8A' }}>Prontidão do Candidato</div>
                  <div className="text-lg font-bold" style={{ color: '#0B1A32' }}>
                    Lançamento em 6 semanas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER - Radar Chart */}
          <div className="lg:col-span-6">
            <div className="card-rocket h-full flex items-center justify-center">
              <div className="w-full max-w-md aspect-square relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid circles */}
                  {[20, 40, 60, 80, 100].map((r, i) => (
                    <circle
                      key={i}
                      cx="100"
                      cy="100"
                      r={r * 0.8}
                      fill="none"
                      stroke="#D9D9D9"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))}

                  {/* Axes */}
                  {skills.map((_, i) => {
                    const angle = (i * 360 / skills.length - 90) * Math.PI / 180;
                    const x = 100 + Math.cos(angle) * 80;
                    const y = 100 + Math.sin(angle) * 80;
                    return (
                      <line
                        key={i}
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke="#C6A667"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                    );
                  })}

                  {/* Required skills (red dotted) */}
                  <polygon
                    points={skills.map((s, i) => {
                      const angle = (i * 360 / skills.length - 90) * Math.PI / 180;
                      const r = s.required * 0.8;
                      return `${100 + Math.cos(angle) * r},${100 + Math.sin(angle) * r}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#C63C3C"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    opacity={animateChart ? "0.7" : "0"}
                    className="transition-opacity duration-1000"
                  />

                  {/* Candidate skills (green filled) */}
                  <polygon
                    points={skills.map((s, i) => {
                      const angle = (i * 360 / skills.length - 90) * Math.PI / 180;
                      const r = s.candidate * 0.8;
                      return `${100 + Math.cos(angle) * r},${100 + Math.sin(angle) * r}`;
                    }).join(' ')}
                    fill="#3BAA78"
                    fillOpacity="0.3"
                    stroke="#3BAA78"
                    strokeWidth="2"
                    opacity={animateChart ? "1" : "0"}
                    className="transition-opacity duration-1000 delay-500"
                  />

                  {/* Skill labels */}
                  {skills.map((skill, i) => {
                    const angle = (i * 360 / skills.length - 90) * Math.PI / 180;
                    const x = 100 + Math.cos(angle) * 95;
                    const y = 100 + Math.sin(angle) * 95;
                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        fontSize="6"
                        fill="#F5EEDC"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {skill.name}
                      </text>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - AI Analysis */}
          <div className="lg:col-span-3">
            <div className="card-rocket">
              <div className="flex items-center gap-2 mb-4">
                <FaBrain className="text-2xl" style={{ color: '#66A6FF' }} />
                <h3 
                  className="text-lg font-extrabold"
                  style={{ 
                    color: '#0B1A32',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Análise da IA
                </h3>
              </div>

              <div className="space-y-3">
                {/* Step 1 */}
                <div className="flex items-center gap-3">
                  {analysisStep >= 1 ? (
                    <FaCheckCircle className="text-xl" style={{ color: '#3BAA78' }} />
                  ) : (
                    <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }} />
                  )}
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#0B1A32' }}>
                      Extraindo requisitos da vaga
                    </div>
                    {analysisStep >= 1 && (
                      <div className="text-xs" style={{ color: '#3BAA78' }}>✓ Concluído</div>
                    )}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3">
                  {analysisStep >= 2 ? (
                    <FaCheckCircle className="text-xl" style={{ color: '#3BAA78' }} />
                  ) : analysisStep === 1 ? (
                    <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }} />
                  ) : (
                    <div className="w-5 h-5 rounded-full" style={{ background: '#D9D9D9' }} />
                  )}
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#0B1A32' }}>
                      Mapeando skills do candidato
                    </div>
                    {analysisStep >= 2 && (
                      <div className="text-xs" style={{ color: '#3BAA78' }}>✓ Concluído</div>
                    )}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-3">
                  {analysisStep >= 3 ? (
                    <FaCheckCircle className="text-xl" style={{ color: '#3BAA78' }} />
                  ) : analysisStep === 2 ? (
                    <div className="spinner pulse-glow" style={{ width: '20px', height: '20px', borderWidth: '2px' }} />
                  ) : (
                    <div className="w-5 h-5 rounded-full" style={{ background: '#D9D9D9' }} />
                  )}
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#0B1A32' }}>
                      Calculando gaps
                    </div>
                    {analysisStep >= 3 && (
                      <div className="text-xs" style={{ color: '#3BAA78' }}>✓ Concluído</div>
                    )}
                    {analysisStep === 2 && (
                      <div className="text-xs" style={{ color: '#66A6FF' }}>Em progresso...</div>
                    )}
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-3">
                  {analysisStep >= 4 ? (
                    <FaCheckCircle className="text-xl" style={{ color: '#3BAA78' }} />
                  ) : analysisStep === 3 ? (
                    <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }} />
                  ) : (
                    <div className="w-5 h-5 rounded-full" style={{ background: '#D9D9D9' }} />
                  )}
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#0B1A32' }}>
                      Gerando trilhas de aprendizado
                    </div>
                    {analysisStep >= 4 && (
<div className="text-xs" style={{ color: '#3BAA78' }}>✓ Concluído</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Neural Network Visualization */}
              <div className="mt-6 p-4 rounded-lg" style={{ background: 'rgba(102, 166, 255, 0.05)' }}>
                <div className="flex justify-between items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: '#66A6FF' }}
                  >
                    C
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: '#66A6FF',
                            animation: `bounce 1.4s infinite ${i * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: '#C6A667' }}
                  >
                    J
                  </div>
                </div>
                <div className="text-xs text-center" style={{ color: '#1E3A8A' }}>
                  Candidato → IA → Vaga
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PANEL - Missing Skills */}
        <div className="mt-8">
          <div className="card-rocket">
            <h3 
              className="text-2xl font-extrabold mb-6"
              style={{ 
                color: '#0B1A32',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Habilidades a Desenvolver
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '2px solid #D9D9D9' }}>
                    <th className="text-left py-3 px-4" style={{ color: '#1E3A8A', fontSize: '14px' }}>
                      Habilidade
                    </th>
                    <th className="text-left py-3 px-4" style={{ color: '#1E3A8A', fontSize: '14px' }}>
                      Tempo Estimado
                    </th>
                    <th className="text-left py-3 px-4" style={{ color: '#1E3A8A', fontSize: '14px' }}>
                      Dificuldade
                    </th>
                    <th className="text-left py-3 px-4" style={{ color: '#1E3A8A', fontSize: '14px' }}>
                      Impacto no Match
                    </th>
                    <th className="text-right py-3 px-4" style={{ color: '#1E3A8A', fontSize: '14px' }}>
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {missingSkills.map((skill, idx) => (
                    <tr 
                      key={idx} 
                      className="hover:bg-opacity-50 transition-colors"
                      style={{ borderBottom: '1px solid #F5EEDC' }}
                    >
                      <td className="py-4 px-4">
                        <div className="font-semibold" style={{ color: '#0B1A32' }}>
                          {skill.name}
                        </div>
                      </td>
                      <td className="py-4 px-4" style={{ color: '#1E3A8A' }}>
                        {2 + idx} semanas
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-sm"
                              style={{ color: i < 3 ? '#C6A667' : '#D9D9D9' }}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span 
                          className="font-bold"
                          style={{ color: '#3BAA78' }}
                        >
                          +{Math.round((skill.required - skill.candidate) / 10)}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button 
                          className="text-sm px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                          style={{
                            background: '#66A6FF',
                            color: 'white'
                          }}
                        >
                          Adicionar à Trilha
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/learning-path">
                <button className="btn-primary text-lg px-8 py-4">
                  <FaTrophy />
                  Gerar Micro-Trilhas Personalizadas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}