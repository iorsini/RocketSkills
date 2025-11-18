import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function SkillGapRadar() {
  const [animateChart, setAnimateChart] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChart(true), 400);
    const interval = setInterval(() => {
      setAnalysisStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1200);

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
    { name: 'AWS', candidate: 35, required: 70 },
  ];

  const missingSkills = skills.filter((skill) => skill.candidate < skill.required);

  const matchScore = Math.round(
    skills.reduce((acc, skill) => acc + Math.min((skill.candidate / skill.required) * 100, 100), 0) / skills.length
  );

  const travelSteps = [
    'Checando documentos enviados',
    'Comparando requisitos de visto',
    'Sugerindo escalas para mentoria',
    'Liberando plano de embarque',
  ];

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/employer/dashboard">
              <button className="outline-button">
                <FaArrowLeft />
                Voltar para o painel
              </button>
            </Link>
            <div className="section-heading">
              <span>Radar de habilidades</span>
              <h1>Mapa de rotas do candidato</h1>
              <p className="text-[var(--pathport-slate)]">
                Compare o que o gate exige com o que já está carimbado no passaporte de quem concorre à vaga.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3 space-y-4">
              <div className="pathport-card">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Total de vistos avaliados</p>
                <p className="text-4xl font-bold">{skills.length}</p>
                <p className="text-sm text-[var(--pathport-slate)] mt-2">Itens cruzados entre requisitos da vaga e portfólio.</p>
              </div>
              <div className="pathport-card">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Carimbos a reforçar</p>
                <p className="text-4xl font-bold text-[var(--pathport-crimson)]">{missingSkills.length}</p>
                <p className="text-sm text-[var(--pathport-slate)] mt-2">Competências que ainda precisam de reforço consular.</p>
              </div>
              <div className="pathport-card text-center space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Probabilidade de visto aprovado</p>
                <div className="radar-wrapper max-w-[220px]">
                  <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(51,92,103,0.2)" strokeWidth="8" />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="var(--pathport-crimson)"
                      strokeWidth="8"
                      strokeDasharray={`${animateChart ? matchScore * 5 : 0} 500`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl font-bold">{matchScore}%</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--pathport-slate)]">Média ponderada entre os requisitos e os carimbos atuais.</p>
              </div>
            </div>

            <div className="lg:col-span-6 pathport-card">
              <div className="section-heading">
                <span>Mapa central</span>
                <h2>Rosa dos ventos da candidatura</h2>
              </div>
              <div className="radar-wrapper">
                <svg viewBox="0 0 240 240" className="w-full h-full">
                  {[30, 50, 70, 90].map((radius) => (
                    <circle key={radius} cx="120" cy="120" r={radius} fill="none" stroke="rgba(51,92,103,0.2)" />
                  ))}
                  {skills.map((skill, index) => {
                    const angle = ((index * 360) / skills.length - 90) * (Math.PI / 180);
                    const x = 120 + Math.cos(angle) * 90;
                    const y = 120 + Math.sin(angle) * 90;
                    return <line key={skill.name} x1="120" y1="120" x2={x} y2={y} stroke="rgba(51,92,103,0.25)" />;
                  })}
                  <polygon
                    points={skills
                      .map((skill, index) => {
                        const angle = ((index * 360) / skills.length - 90) * (Math.PI / 180);
                        const r = (skill.required / 100) * 90;
                        return `${120 + Math.cos(angle) * r},${120 + Math.sin(angle) * r}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="rgba(158,42,43,0.6)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <polygon
                    points={skills
                      .map((skill, index) => {
                        const angle = ((index * 360) / skills.length - 90) * (Math.PI / 180);
                        const r = (skill.candidate / 100) * 90;
                        return `${120 + Math.cos(angle) * r},${120 + Math.sin(angle) * r}`;
                      })
                      .join(' ')}
                    fill="rgba(51,92,103,0.25)"
                    stroke="var(--pathport-teal)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-sm text-[var(--pathport-slate)] text-center mt-3">
                Linha pontilhada = exigência da vaga. Área preenchida = o que o candidato já comprova.
              </p>
            </div>

            <div className="lg:col-span-3 pathport-card space-y-4">
              <div className="section-heading">
                <span>Concierge</span>
                <h2>Assistente de análise</h2>
              </div>
              <div className="ai-steps">
                {travelSteps.map((step, index) => (
                  <div key={step} className={`ai-step ${analysisStep === index ? 'active' : ''}`}>
                    <strong>R{index + 1}</strong>
                    <div>
                      <p className="font-semibold">{step}</p>
                      <p className="text-sm text-[var(--pathport-slate)]">
                        {index === 0 && 'Validamos histórico profissional e idiomas para liberar o passaporte digital.'}
                        {index === 1 && 'Cruzamos requisitos da vaga com os carimbos existentes e o tempo de expiração.'}
                        {index === 2 && 'Indicamos mentores, trilhas e conexões que aceleram o preenchimento de lacunas.'}
                        {index === 3 && 'Geramos um plano de ação com prazos, responsáveis e anexos recomendados.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
