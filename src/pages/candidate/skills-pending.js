import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaLock, FaRocket, FaClock } from 'react-icons/fa';

export default function SkillsPending() {
  const [pendingSkills] = useState([
    {
      name: 'React Development',
      icon: '⚛️',
      weeks: 4,
      locked: false,
      prerequisite: null
    },
    {
      name: 'Cloud Architecture',
      icon: '☁️',
      weeks: 6,
      locked: true,
      prerequisite: 'Complete Cloud Basics'
    },
    {
      name: 'UX Design',
      icon: '🎨',
      weeks: 5,
      locked: false,
      prerequisite: null
    },
    {
      name: 'Machine Learning',
      icon: '🤖',
      weeks: 8,
      locked: true,
      prerequisite: 'Complete Python Mastery & Data Analysis'
    },
    {
      name: 'DevOps',
      icon: '⚙️',
      weeks: 6,
      locked: true,
      prerequisite: 'Complete Docker & Cloud Basics'
    },
    {
      name: 'Blockchain',
      icon: '⛓️',
      weeks: 7,
      locked: false,
      prerequisite: null
    },
    {
      name: 'Cybersecurity',
      icon: '🔒',
      weeks: 5,
      locked: true,
      prerequisite: 'Complete Network Fundamentals'
    },
    {
      name: 'Mobile Dev',
      icon: '📱',
      weeks: 6,
      locked: false,
      prerequisite: null
    }
  ]);

  const completedSkills = 5;
  const totalSkills = 12;
  const progressPercentage = Math.round((completedSkills / totalSkills) * 100);

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/candidate/passport-id">
            <button className="btn-secondary">
              <FaArrowLeft />
              Voltar
            </button>
          </Link>
          <div>
            <h1 
              className="text-4xl md:text-5xl font-extrabold flex items-center gap-3"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Skills to Acquire Before Launch
              <FaRocket 
                className="text-3xl opacity-50"
                style={{ color: '#D9D9D9' }}
              />
            </h1>
            <p className="text-lg mt-2" style={{ color: '#D9D9D9' }}>
              Suas próximas conquistas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Area - Pending Skills */}
          <div className="lg:col-span-2">
            <div 
              className="card-rocket min-h-[600px]"
              style={{
                background: 'linear-gradient(135deg, #F5EEDC 0%, #E5DCC8 100%)'
              }}
            >
              {/* Grid of pending stamps */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {pendingSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex justify-center items-center animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div
                      className={`pending-stamp relative ${!skill.locked ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed'} transition-all`}
                      style={{
                        width: '130px',
                        height: '130px',
                        border: `4px dashed ${skill.locked ? '#D9D9D9' : '#C6A667'}`,
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: skill.locked ? 'rgba(217, 217, 217, 0.1)' : 'white',
                        opacity: skill.locked ? 0.5 : 1
                      }}
                    >
                      {/* Lock indicator */}
                      {skill.locked && (
                        <div 
                          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            background: '#C63C3C',
                            border: '2px solid #F5EEDC'
                          }}
                        >
                          <FaLock className="text-white text-xs" />
                        </div>
                      )}

                      {/* Icon */}
                      <div 
                        className="text-3xl mb-2"
                        style={{ 
                          filter: skill.locked ? 'grayscale(100%)' : 'none',
                          opacity: skill.locked ? 0.4 : 1
                        }}
                      >
                        {skill.icon}
                      </div>

                      {/* Skill Name */}
                      <div
                        className="text-xs font-bold text-center px-2 mb-1"
                        style={{
                          color: skill.locked ? '#D9D9D9' : '#0B1A32',
                          fontFamily: 'Montserrat, sans-serif',
                          lineHeight: '1.2'
                        }}
                      >
                        {skill.name}
                      </div>

                      {/* Duration */}
                      <div 
                        className="flex items-center gap-1 text-xs"
                        style={{ color: skill.locked ? '#D9D9D9' : '#1E3A8A' }}
                      >
                        <FaClock className="text-xs" />
                        {skill.weeks} semanas
                      </div>

                      {/* Planet icon overlay */}
                      {!skill.locked && (
                        <div 
                          className="absolute bottom-2 text-xl"
                          style={{ opacity: 0.3 }}
                        >
                          🪐
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tooltip for locked skills */}
              <div className="mt-8 p-4 rounded-lg text-sm" style={{ background: 'rgba(198, 60, 60, 0.1)', color: '#C63C3C' }}>
                <div className="flex items-start gap-2">
                  <FaLock className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Skills bloqueadas:</strong> Complete os pré-requisitos necessários para desbloquear estas habilidades e continuar sua jornada.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel - Learning Path Overview */}
          <div className="space-y-4">
            {/* Progress Card */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Sua Trilha de Aprendizado
              </h3>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2" style={{ color: '#1E3A8A' }}>
                  <span>Progresso Geral</span>
                  <span className="font-bold">{completedSkills} de {totalSkills}</span>
                </div>
                <div className="progress-container">
                  <div 
                    className="progress-bar"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Motivational Message */}
              <div 
                className="p-4 rounded-lg text-center"
                style={{ background: 'rgba(59, 170, 120, 0.1)' }}
              >
                <div 
                  className="text-2xl font-extrabold mb-2"
                  style={{ 
                    color: '#3BAA78',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {progressPercentage}%
                </div>
                <div className="text-sm font-semibold mb-2" style={{ color: '#1E3A8A' }}>
                  Pronto para Lançamento!
                </div>
                <p className="text-xs" style={{ color: '#1E3A8A' }}>
                  Continue assim, astronauta! 🚀
                </p>
              </div>
            </div>

            {/* Next Recommended Skill */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Próxima Recomendação
              </h3>

              <div 
                className="p-4 rounded-lg mb-3"
                style={{ background: 'rgba(102, 166, 255, 0.1)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">⚛️</div>
                  <div className="flex-1">
                    <div className="font-bold" style={{ color: '#0B1A32' }}>
                      React Development
                    </div>
                    <div className="text-xs" style={{ color: '#1E3A8A' }}>
                      Alta demanda no mercado
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4" style={{ color: '#1E3A8A' }}>
                  <div className="flex justify-between">
                    <span>Duração:</span>
                    <span className="font-semibold">4 semanas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dificuldade:</span>
                    <span className="font-semibold">⭐⭐⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impacto:</span>
                    <span className="font-semibold text-green-600">+18% match</span>
                  </div>
                </div>

                <button className="btn-primary w-full">
                  <FaRocket />
                  Começar Micro-Track
                </button>
              </div>

              <div className="text-xs text-center" style={{ color: '#D9D9D9' }}>
                IA analisou suas skills e objetivos
              </div>
            </div>

            {/* Learning Stats */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Suas Estatísticas
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#1E3A8A' }}>
                    Sequência de dias
                  </span>
                  <span className="text-xl font-bold" style={{ color: '#C6A667' }}>
                    12 🔥
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#1E3A8A' }}>
                    Horas esta semana
                  </span>
                  <span className="text-xl font-bold" style={{ color: '#66A6FF' }}>
                    8.5
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#1E3A8A' }}>
                    Ranking global
                  </span>
                  <span className="text-xl font-bold" style={{ color: '#3BAA78' }}>
                    Top 15%
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Link href="/learning-path">
              <button className="btn-secondary w-full">
                Ver Trilha Completa
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}