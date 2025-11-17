import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

export default function SkillsCompleted() {
  const [badges] = useState([
    {
      name: 'PYTHON MASTERY',
      icon: '🐍',
      date: 'Jan 2025',
      color: '#C63C3C',
      rotation: -5
    },
    {
      name: 'AGILE CERTIFIED',
      icon: '⚡',
      date: 'Fev 2025',
      color: '#1E3A8A',
      rotation: 8
    },
    {
      name: 'DATA ANALYSIS',
      icon: '📊',
      date: 'Mar 2025',
      color: '#3BAA78',
      rotation: -3
    },
    {
      name: 'REACT EXPERT',
      icon: '⚛️',
      date: 'Abr 2025',
      color: '#66A6FF',
      rotation: 12
    },
    {
      name: 'GIT MASTER',
      icon: '🔀',
      date: 'Mai 2025',
      color: '#C6A667',
      rotation: -8
    },
    {
      name: 'SQL PRO',
      icon: '🗄️',
      date: 'Jun 2025',
      color: '#FF8C00',
      rotation: 6
    },
    {
      name: 'API DESIGN',
      icon: '🔌',
      date: 'Jul 2025',
      color: '#C63C3C',
      rotation: -10
    },
    {
      name: 'CLOUD BASICS',
      icon: '☁️',
      date: 'Ago 2025',
      color: '#3BAA78',
      rotation: 4
    }
  ]);

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
              className="text-4xl md:text-5xl font-extrabold"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Skills Adquiridas
            </h1>
            <p className="text-lg mt-2" style={{ color: '#D9D9D9' }}>
              Certificações oficialmente carimbadas
            </p>
          </div>
        </div>

        {/* Passport Page with Stamps */}
        <div 
          className="card-rocket min-h-[600px] relative"
          style={{
            background: 'linear-gradient(135deg, #F5EEDC 0%, #E5DCC8 100%)',
            border: '3px solid #C6A667'
          }}
        >
          {/* Security Pattern */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #0B1A32 0, #0B1A32 1px, transparent 0, transparent 3px)',
              backgroundSize: '100% 3px'
            }}
          />

          {/* Watermark */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
            style={{
              fontSize: '120px',
              fontWeight: 800,
              color: '#0B1A32',
              transform: 'rotate(-45deg)'
            }}
          >
            ROCKETSKILLS
          </div>

          {/* Stamps Grid */}
          <div className="relative z-10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div
                    className="stamp-badge relative cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      width: '140px',
                      height: '140px',
                      border: `5px solid ${badge.color}`,
                      borderRadius: '50%',
                      transform: `rotate(${badge.rotation}deg)`,
                      background: `${badge.color}08`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      position: 'relative'
                    }}
                  >
                    {/* Inner circle */}
                    <div
                      className="absolute inset-2 rounded-full border-3 opacity-30"
                      style={{ borderColor: badge.color }}
                    />

                    {/* Icon */}
                    <div 
                      className="text-4xl mb-2 relative z-10"
                      style={{ filter: 'grayscale(20%)' }}
                    >
                      {badge.icon}
                    </div>

                    {/* Badge Name */}
                    <div
                      className="text-xs font-extrabold text-center px-2 relative z-10"
                      style={{
                        color: badge.color,
                        fontFamily: 'Montserrat, sans-serif',
                        letterSpacing: '0.05em',
                        lineHeight: '1.2'
                      }}
                    >
                      {badge.name}
                    </div>

                    {/* Date */}
                    <div
                      className="text-xs mt-1 relative z-10"
                      style={{
                        color: badge.color,
                        opacity: 0.7
                      }}
                    >
                      {badge.date}
                    </div>
                    {/* Stamp texture effect */}
                    <div 
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, transparent 60%, ${badge.color}10 100%)`,
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Empty spaces with watermarks */}
            <div className="mt-12 text-center opacity-30">
              <div 
                className="text-6xl mb-2"
                style={{ color: '#D9D9D9' }}
              >
                ROCKETSKILLS
              </div>
              <div 
                className="text-sm"
                style={{ color: '#D9D9D9', letterSpacing: '0.2em' }}
              >
                OFFICIAL CERTIFICATION DOCUMENT
              </div>
            </div>
          </div>

          {/* Official Signature */}
          <div 
            className="absolute bottom-8 right-8 text-right"
            style={{ maxWidth: '200px' }}
          >
            <div 
              className="mb-2 pb-2"
              style={{ 
                borderBottom: '2px solid #C6A667',
                fontFamily: 'cursive',
                fontSize: '20px',
                color: '#0B1A32'
              }}
            >
              RocketSkills AI
            </div>
            <div 
              className="text-xs"
              style={{ color: '#1E3A8A' }}
            >
              Verified by RocketSkills AI
            </div>
            <div className="mt-2">
              <div 
                className="w-12 h-12 rounded-full mx-auto flex items-center justify-center"
                style={{
                  background: '#C6A667',
                  border: '2px solid #0B1A32'
                }}
              >
                <FaCheckCircle className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-rocket text-center">
            <div 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {badges.length}
            </div>
            <div className="text-sm" style={{ color: '#1E3A8A' }}>
              Certificações Conquistadas
            </div>
          </div>

          <div className="card-rocket text-center">
            <div 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              156
            </div>
            <div className="text-sm" style={{ color: '#1E3A8A' }}>
              Horas de Aprendizado
            </div>
          </div>

          <div className="card-rocket text-center">
            <div 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              87%
            </div>
            <div className="text-sm" style={{ color: '#1E3A8A' }}>
              Taxa de Conclusão
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/candidate/skills-pending">
            <button className="btn-primary">
              Ver Skills Pendentes →
            </button>
          </Link>
          <Link href="/candidate/passport-id">
            <button className="btn-secondary">
              Voltar ao Passaporte
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}