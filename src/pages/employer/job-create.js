import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaRocket, FaBrain, FaPlus, FaTimes } from 'react-icons/fa';

export default function JobCreate() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [niceToHaveSkills, setNiceToHaveSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [matchPreview, setMatchPreview] = useState(null);

  const addSkill = (type) => {
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
    }, 2000);
  };

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/employer/dashboard">
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
            Criar Vaga
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT PANEL - Form */}
          <div className="lg:col-span-3">
            <div className="card-rocket">
              <h2 
                className="text-2xl font-extrabold mb-6"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Detalhes da Vaga
              </h2>

              {/* Job Title */}
              <div className="mb-6">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#1E3A8A' }}
                >
                  Título da Vaga
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Ex: Desenvolvedor Full Stack Sênior"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:border-[#C6A667] outline-none transition-colors"
                  style={{
                    background: 'white',
                    borderColor: '#D9D9D9',
                    color: '#0B1A32'
                  }}
                />
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#1E3A8A' }}
                >
                  Descrição da Vaga
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Descreva as responsabilidades e requisitos..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:border-[#C6A667] outline-none transition-colors resize-none"
                  style={{
                    background: 'white',
                    borderColor: '#D9D9D9',
                    color: '#0B1A32'
                  }}
                />
                <div className="text-right text-xs mt-1" style={{ color: '#1E3A8A' }}>
                  {jobDescription.length} caracteres
                </div>
              </div>

              {/* Required Skills */}
              <div className="mb-6">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#1E3A8A' }}
                >
                  Habilidades Obrigatórias
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill('required')}
                    placeholder="Digite uma habilidade"
                    className="flex-1 px-4 py-2 rounded-lg border-2 focus:border-[#C6A667] outline-none"
                    style={{
                      background: 'white',
                      borderColor: '#D9D9D9',
                      color: '#0B1A32'
                    }}
                  />
                  <button
                    onClick={() => addSkill('required')}
                    className="btn-primary"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-badge"
                      style={{
                        background: '#66A6FF',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill, 'required')}
                        className="hover:opacity-70"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nice to Have Skills */}
              <div className="mb-6">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#1E3A8A' }}
                >
                  Habilidades Desejáveis
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill('nice')}
                    placeholder="Digite uma habilidade"
                    className="flex-1 px-4 py-2 rounded-lg border-2 focus:border-[#C6A667] outline-none"
                    style={{
                      background: 'white',
                      borderColor: '#D9D9D9',
                      color: '#0B1A32'
                    }}
                  />
                  <button
                    onClick={() => addSkill('nice')}
                    className="btn-primary"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {niceToHaveSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-badge"
                      style={{
                        background: '#D9D9D9',
                        color: '#0B1A32',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill, 'nice')}
                        className="hover:opacity-70"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Suggestions Panel */}
              {suggestions.length > 0 && (
                <div 
                  className="p-4 rounded-lg border-2 mb-6"
                  style={{
                    background: 'rgba(102, 166, 255, 0.05)',
                    borderColor: '#66A6FF'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaBrain className="text-xl" style={{ color: '#66A6FF' }} />
                    <span className="font-semibold" style={{ color: '#0B1A32' }}>
                      Sugestões da IA
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#1E3A8A' }}>
                    Baseado em vagas similares, considere adicionar:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setRequiredSkills([...requiredSkills, suggestion]);
                          setSuggestions(suggestions.filter(s => s !== suggestion));
                        }}
                        className="skill-badge pending hover:scale-105 transition-transform cursor-pointer"
                      >
                        <FaPlus className="text-sm" />
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Typing Indicator */}
              {analyzing && (
                <div className="ai-typing mb-6">
                  <FaBrain />
                  <span>IA está analisando</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL - AI Match Preview */}
          <div className="lg:col-span-2">
            <div className="card-rocket sticky top-8">
              <div className="flex items-center gap-2 mb-4">
                <FaRocket className="text-2xl" style={{ color: '#66A6FF' }} />
                <h3 
                  className="text-xl font-extrabold"
                  style={{ 
                    color: '#0B1A32',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Preview de Match IA
                </h3>
              </div>

              {matchPreview ? (
                <>
                  {/* Candidates Found */}
                  <div className="mb-6 p-4 rounded-lg" style={{ background: 'rgba(102, 166, 255, 0.1)' }}>
                    <div className="text-3xl font-extrabold mb-1 animate-count" style={{ color: '#66A6FF', fontFamily: 'Montserrat, sans-serif' }}>
                      {matchPreview.candidatesFound}
                    </div>
                    <div className="text-sm" style={{ color: '#1E3A8A' }}>
                      Candidatos potenciais encontrados
                    </div>
                  </div>

                  {/* Top Candidates */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3" style={{ color: '#0B1A32' }}>
                      Top 3 Candidatos
                    </h4>
                    <div className="space-y-3">
                      {matchPreview.topCandidates.map((candidate, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg"
                          style={{ background: 'rgba(59, 170, 120, 0.1)' }}
                        >
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                            style={{ background: '#3BAA78' }}
                          >
                            {candidate.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold" style={{ color: '#0B1A32' }}>
                              {candidate.name}
                            </div>
                            <div className="text-sm" style={{ color: '#1E3A8A' }}>
                              Match: {candidate.match}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Gap Summary */}
                  <div 
                    className="p-4 rounded-lg"
                    style={{ background: 'rgba(198, 60, 60, 0.1)' }}
                  >
                    <h4 className="font-semibold mb-2" style={{ color: '#C63C3C' }}>
                      Gap Mais Comum
                    </h4>
                    <p className="text-sm mb-2" style={{ color: '#1E3A8A' }}>
                      Habilidade mais faltante: <strong>{matchPreview.commonGap}</strong>
                    </p>
                    <div className="text-xs" style={{ color: '#1E3A8A' }}>
                      12 candidatos precisam desta skill
                    </div>
                  </div>

                  {/* Recommended Micro-tracks */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3" style={{ color: '#0B1A32' }}>
                      Micro-trilhas Recomendadas
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm p-2 rounded" style={{ background: 'rgba(198, 166, 103, 0.1)', color: '#0B1A32' }}>
                        <span>📚</span>
                        <span>Python Fundamentals</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm p-2 rounded" style={{ background: 'rgba(198, 166, 103, 0.1)', color: '#0B1A32' }}>
                        <span>📚</span>
                        <span>Data Analysis Basics</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8" style={{ color: '#D9D9D9' }}>
                  <p>Adicione habilidades para ver o preview</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/skill-gap-radar">
            <button className="btn-primary text-lg px-8 py-4">
              <FaRocket />
              Gerar Radar de Skill Gap
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}