import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaLock, FaStar, FaRocket } from 'react-icons/fa';

export default function LearningPath() {
  const [planets] = useState([
    {
      name: 'Python Basics',
      status: 'completed',
      duration: '2 weeks',
      topics: ['Variables', 'Functions', 'OOP', 'Modules'],
      difficulty: 2,
      color: '#3BAA78'
    },
    {
      name: 'Git & Version Control',
      status: 'completed',
      duration: '1 week',
      topics: ['Commits', 'Branches', 'Merge', 'Collaboration'],
      difficulty: 1,
      color: '#3BAA78'
    },
    {
      name: 'Web Development',
      status: 'in-progress',
      duration: '4 weeks',
      topics: ['HTML/CSS', 'JavaScript', 'React Basics', 'APIs'],
      difficulty: 3,
      progress: 60,
      color: '#66A6FF'
    },
    {
      name: 'Deployment & DevOps',
      status: 'locked',
      duration: '3 weeks',
      topics: ['Docker', 'CI/CD', 'Cloud Deploy', 'Monitoring'],
      difficulty: 4,
      color: '#D9D9D9'
    },
    {
      name: 'Advanced Topics',
      status: 'locked',
      duration: '5 weeks',
      topics: ['Architecture', 'Security', 'Performance', 'Best Practices'],
      difficulty: 5,
      color: '#D9D9D9'
    }
  ]);

  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const currentPlanetIndex = planets.findIndex(p => p.status === 'in-progress');
  const totalWeeks = planets.reduce((sum, p) => sum + parseInt(p.duration), 0);
  const completedWeeks = planets
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + parseInt(p.duration), 0);
  const overallProgress = Math.round((completedWeeks / totalWeeks) * 100);

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/candidate/skills-pending">
            <button className="btn-secondary">
              <FaArrowLeft />
              Voltar
            </button>
          </Link>
          <div>
            <h1 
              className="text-4xl md:text-5xl font-extrabold"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Your Interplanetary Learning Journey
            </h1>
            <p className="text-lg mt-2" style={{ color: '#D9D9D9' }}>
              Trilhas personalizadas geradas por IA
            </p>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="card-rocket mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="text-sm font-semibold mb-2" style={{ color: '#1E3A8A' }}>
                Tempo Total de Jornada
              </div>
              <div 
                className="text-3xl font-extrabold"
                style={{ 
                  color: '#C6A667',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {totalWeeks} semanas até o lançamento
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold mb-2" style={{ color: '#1E3A8A' }}>
                Progresso Geral
              </div>
              <div className="match-meter relative" style={{ width: '100px', height: '100px' }}>
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
                    strokeDasharray={`${overallProgress * 2.51} 251`}
                  />
                </svg>
                <div 
                  className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold"
                  style={{ 
                    color: '#3BAA78',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {overallProgress}%
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-2" style={{ color: '#1E3A8A' }}>
                Posição Atual
              </div>
              <div className="flex items-center gap-2">
                <div className="text-4xl">🧑‍🚀</div>
                <div 
                  className="text-xl font-bold"
                  style={{ color: '#0B1A32' }}
                >
                  {planets[currentPlanetIndex]?.name}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Visualization */}
        <div className="card-rocket mb-8" style={{ background: 'linear-gradient(135deg, #0B1A32 0%, #1E3A8A 100%)' }}>
          <div className="relative py-12">
            {/* Path Line */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 1 }}>
              <path
                d={`M 80 ${100 + 0 * 100} 
                   Q 200 ${50 + 0 * 100}, 320 ${100 + 1 * 100}
                   T 560 ${100 + 2 * 100}
                   T 800 ${100 + 3 * 100}
                   T 1040 ${100 + 4 * 100}`}
                fill="none"
                stroke="#D9D9D9"
                strokeWidth="3"
                strokeDasharray="10,5"
                opacity="0.3"
              />
            </svg>

            {/* Planets */}
            <div className="relative z-10 flex flex-col md:flex-row justify-around items-center gap-12 md:gap-8">
              {/* Start Point - Earth */}
              <div className="flex flex-col items-center animate-fade-in">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3"
                  style={{
                    background: '#1E3A8A',
                    border: '3px solid #66A6FF',
                    boxShadow: '0 0 20px rgba(102, 166, 255, 0.5)'
                  }}
                >
                  🌍
                </div>
                <div className="text-sm font-bold text-center" style={{ color: '#F5EEDC' }}>
                  Start
                </div>
              </div>

              {/* Planet Nodes */}
              {planets.map((planet, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center animate-fade-in cursor-pointer hover:scale-110 transition-transform"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                  onClick={() => setSelectedPlanet(planet)}
                >
                  <div 
                    className="relative w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-3"
                    style={{
                      background: planet.status === 'locked' 
                        ? '#D9D9D9' 
                        : `linear-gradient(135deg, ${planet.color} 0%, ${planet.color}dd 100%)`,
                      border: `4px solid ${planet.status === 'in-progress' ? '#C6A667' : planet.color}`,
                      boxShadow: planet.status === 'in-progress' 
                        ? '0 0 30px rgba(198, 166, 103, 0.8)' 
                        : `0 0 20px ${planet.color}80`,
                      opacity: planet.status === 'locked' ? 0.5 : 1
                    }}
                  >
                    {/* Status Icon */}
                    {planet.status === 'completed' && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#3BAA78', border: '2px solid white' }}>
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                    )}
                    {planet.status === 'in-progress' && (
                      <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
                        🧑‍🚀
                      </div>
                    )}
                    {planet.status === 'locked' && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#C63C3C', border: '2px solid white' }}>
                        <FaLock className="text-white text-xs" />
                      </div>
                    )}

                    {/* Planet Emoji */}
                    <div style={{ filter: planet.status === 'locked' ? 'grayscale(100%)' : 'none' }}>
                      {planet.status === 'completed' ? '✅' : 
                       planet.status === 'in-progress' ? '🪐' :
                       '🔒'}
                    </div>

                    {/* Progress ring for in-progress */}
                    {planet.status === 'in-progress' && (
                      <svg className="absolute inset-0" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke="#C6A667"
                          strokeWidth="4"
                          strokeDasharray={`${planet.progress * 2.89} 289`}
                          strokeLinecap="round"
                          className="transform -rotate-90"
                          style={{ transformOrigin: 'center' }}
                        />
                      </svg>
                    )}
                  </div>

                  {/* Planet Name */}
                  <div 
                    className="text-sm font-bold text-center px-2"
                    style={{ 
                      color: '#F5EEDC',
                      maxWidth: '100px'
                    }}
                  >
                    {planet.name}
                  </div>

                  {/* Duration */}
                  <div className="text-xs mt-1" style={{ color: '#D9D9D9' }}>
                    {planet.duration}
                  </div>

                  {/* Progress percentage for in-progress */}
                  {planet.status === 'in-progress' && (
                    <div 
                      className="text-xs font-bold mt-1"
                      style={{ color: '#C6A667' }}
                    >
                      {planet.progress}%
                    </div>
                  )}
                </div>
              ))}

              {/* End Point - Star */}
              <div className="flex flex-col items-center animate-fade-in">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-3 pulse-glow"
                  style={{
                    background: 'linear-gradient(135deg, #C6A667 0%, #FFD700 100%)',
                    border: '4px solid #C6A667',
                    boxShadow: '0 0 30px rgba(198, 166, 103, 0.8)'
                  }}
                >
                  ⭐
                </div>
                <div className="text-sm font-bold text-center" style={{ color: '#C6A667' }}>
                  Job Ready!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planet Details Modal */}
        {selectedPlanet && (
          <div className="modal-overlay" onClick={() => setSelectedPlanet(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-2xl font-bold hover:opacity-70"
                style={{ color: '#0B1A32' }}
                onClick={() => setSelectedPlanet(null)}
              >
                ×
              </button>

              <h3 
className="text-2xl font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {selectedPlanet.name}
              </h3>

              {/* Status Badge */}
              <div className="mb-4">
                {selectedPlanet.status === 'completed' && (
                  <div className="skill-badge completed">
                    <FaCheckCircle />
                    Concluído
                  </div>
                )}
                {selectedPlanet.status === 'in-progress' && (
                  <div className="skill-badge in-progress">
                    <FaRocket />
                    Em Progresso - {selectedPlanet.progress}%
                  </div>
                )}
                {selectedPlanet.status === 'locked' && (
                  <div className="skill-badge pending">
                    <FaLock />
                    Bloqueado
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-semibold mb-2" style={{ color: '#1E3A8A' }}>
                    Duração
                  </div>
                  <div className="text-lg font-bold" style={{ color: '#0B1A32' }}>
                    {selectedPlanet.duration}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold mb-2" style={{ color: '#1E3A8A' }}>
                    Dificuldade
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        style={{ 
                          color: i < selectedPlanet.difficulty ? '#C6A667' : '#D9D9D9',
                          fontSize: '20px'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold mb-2" style={{ color: '#1E3A8A' }}>
                    Tópicos Cobertos
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlanet.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="skill-badge"
                        style={{
                          background: 'rgba(102, 166, 255, 0.1)',
                          color: '#0B1A32',
                          border: '1px solid #66A6FF'
                        }}
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {selectedPlanet.status === 'in-progress' && (
                <button className="btn-primary w-full">
                  <FaRocket />
                  Continuar Aprendizado
                </button>
              )}
              {selectedPlanet.status === 'locked' && (
                <button className="btn-secondary w-full" disabled>
                  <FaLock />
                  Complete módulos anteriores
                </button>
              )}
              {selectedPlanet.status === 'completed' && (
                <button className="btn-secondary w-full">
                  <FaCheckCircle />
                  Revisar Conteúdo
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Info */}
        <div className="card-rocket">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: '#66A6FF' }}
            >
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <div className="font-bold" style={{ color: '#0B1A32' }}>
                IA recalcula sua trilha conforme você progride
              </div>
              <div className="text-sm" style={{ color: '#1E3A8A' }}>
                Adaptação em tempo real baseada no seu desempenho
              </div>
            </div>
          </div>

          <div 
            className="p-4 rounded-lg text-sm"
            style={{ background: 'rgba(59, 170, 120, 0.1)', color: '#1E3A8A' }}
          >
            💡 <strong>Dica:</strong> Complete os módulos na ordem sugerida para maximizar seu aprendizado e alcançar 97% de match com suas vagas alvo em apenas {totalWeeks} semanas!
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/candidate/dashboard">
            <button className="btn-secondary">
              Voltar ao Dashboard
            </button>
          </Link>
          <Link href="/ready-to-launch">
            <button className="btn-primary">
              <FaRocket />
              Ver Status de Lançamento
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}