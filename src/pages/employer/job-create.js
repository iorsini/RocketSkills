import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaRocket, FaBrain, FaPlus, FaTimes, FaBook } from 'react-icons/fa';

export default function JobCreate() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [niceToHaveSkills, setNiceToHaveSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [matchPreview, setMatchPreview] = useState(null);

  const addSkill = type => {
    if (skillInput.trim()) {
      if (type === 'required') {
        setRequiredSkills([...requiredSkills, skillInput.trim()]);
      } else {
        setNiceToHaveSkills([...niceToHaveSkills, skillInput.trim()]);
      }
      setSkillInput('');
      simulateAIAnalysis();
    }
  };

  const removeSkill = (skill, type) => {
    if (type === 'required') {
      setRequiredSkills(requiredSkills.filter(s => s !== skill));
    } else {
      setNiceToHaveSkills(niceToHaveSkills.filter(s => s !== skill));
    }
  };

  const simulateAIAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setSuggestions(['React', 'Agile', 'Git']);
      setMatchPreview({
        candidatesFound: 34,
        topCandidates: [
          { name: 'Candidato A', match: 87 },
          { name: 'Candidato B', match: 82 },
          { name: 'Candidato C', match: 79 }
        ],
        commonGap: 'Python'
      });
      setAnalyzing(false);
    }, 1500);
  };

  const renderInput = (label, element) => (
    <div className="space-y-2">
      <label className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</label>
      {element}
    </div>
  );

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/employer/dashboard">
              <button className="btn-secondary">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div>
              <p className="section-tag">Criar missão</p>
              <h1 className="text-4xl font-extrabold">Nova vaga espacial</h1>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-rocket space-y-6">
              <div className="flex items-center gap-3">
                <FaRocket className="text-2xl text-cyan-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">detalhes da missão</p>
                  <h2 className="text-2xl font-bold">Perfil desejado</h2>
                </div>
              </div>
              {renderInput(
                'Título da vaga',
                <input
                  type="text"
                  value={jobTitle}
                  onChange={e => setJobTitle(e.target.value)}
                  placeholder="Ex: Desenvolvedor Full Stack Sênior"
                  className="input-control"
                />
              )}
              {renderInput(
                'Descrição da vaga',
                <textarea
                  value={jobDescription}
                  onChange={e => setJobDescription(e.target.value)}
                  placeholder="Descreva responsabilidades, ferramentas e expectativas de impacto."
                  rows={5}
                  className="input-control"
                />
              )}
              <p className="text-right text-xs text-slate-500">{jobDescription.length} caracteres</p>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Habilidades</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={e => setSkillInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addSkill('required')}
                    placeholder="Digite uma habilidade"
                    className="input-control"
                  />
                  <button onClick={() => addSkill('required')} className="btn-primary">
                    <FaPlus />
                    Adicionar
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map(skill => (
                    <span key={skill} className="skill-badge in-progress">
                      {skill}
                      <button onClick={() => removeSkill(skill, 'required')} className="ml-2">
                        <FaTimes />
                      </button>
                    </span>
                  ))}
                </div>
                {niceToHaveSkills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {niceToHaveSkills.map(skill => (
                      <span key={skill} className="skill-badge pending">
                        {skill}
                        <button onClick={() => removeSkill(skill, 'nice')} className="ml-2">
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <button onClick={() => addSkill('nice')} className="btn-secondary flex-1 justify-center">
                    Adicionar como desejável
                  </button>
                  <button onClick={simulateAIAnalysis} className="btn-secondary flex-1 justify-center">
                    <FaBrain />
                    AI Boost
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card-rocket space-y-3">
                <div className="flex items-center gap-3">
                  <FaBrain className="text-2xl text-cyan-200" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">análise em tempo real</p>
                    <h3 className="text-xl font-bold">Match inteligente</h3>
                  </div>
                </div>
                {analyzing ? (
                  <p className="text-slate-300 animate-pulse">Processando dados das constelações...</p>
                ) : matchPreview ? (
                  <div className="space-y-3">
                    <p className="text-3xl font-bold">{matchPreview.candidatesFound} candidatos</p>
                    <div className="flex flex-wrap gap-2">
                      {matchPreview.topCandidates.map(c => (
                        <span key={c.name} className="token-pill">
                          {c.name} • {c.match}%
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-400">Gap comum: {matchPreview.commonGap}</p>
                  </div>
                ) : (
                  <p className="text-slate-400">Adicione habilidades para visualizar previsões.</p>
                )}
              </div>

              <div className="card-rocket space-y-3">
                <div className="flex items-center gap-3">
                  <FaBook className="text-2xl text-cyan-200" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Sugestões</p>
                    <h3 className="text-xl font-bold">Trilhas alinhadas</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map(skill => (
                    <button key={skill} onClick={() => setRequiredSkills([...requiredSkills, skill])} className="token-pill">
                      {skill}
                    </button>
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
