import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaStar, FaCheckCircle } from 'react-icons/fa';

export default function PassportID() {
  const [profile] = useState({
    name: 'João Silva',
    age: 28,
    memberSince: 'Janeiro 2025',
    currentRole: 'Desenvolvedor Junior',
    destinationJob: 'Full Stack Sênior',
    readinessLevel: 72,
    skillsAcquired: 8,
    skillsInProgress: 3,
    totalLearningHours: 156
  });

  const getReadinessColor = (level) => {
    if (level < 50) return '#C63C3C';
    if (level < 75) return '#FF8C00';
    return '#3BAA78';
  };

  const getReadinessLabel = (level) => {
    if (level < 50) return 'Preparação Inicial';
    if (level < 75) return 'Pre-Flight Check';
    return 'Pronto para Decolagem';
  };

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/candidate/passport-cover">
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
            Passaporte de Skills
          </h1>
        </div>

        {/* Passport ID Card */}
        <div 
          className="card-rocket relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #F5EEDC 0%, #E5DCC8 100%)',
            border: '3px solid #C6A667'
          }}
        >
          {/* Security Pattern Background */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                #0B1A32 0px,
                #0B1A32 1px,
                transparent 1px,
                transparent 2px
              ),
              repeating-linear-gradient(
                90deg,
                #0B1A32 0px,
                #0B1A32 1px,
                transparent 1px,
                transparent 2px
              )`,
              backgroundSize: '20px 20px'
            }}
          />

          {/* Header Bar */}
          <div 
            className="py-4 px-6 mb-6"
            style={{
              background: '#0B1A32',
              borderBottom: '2px solid #C6A667'
            }}
          >
            <h2 
              className="text-xl font-extrabold text-center"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.1em'
              }}
            >
              IDENTIFICATION PAGE
            </h2>
          </div>

          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Left Side - Photo */}
              <div className="flex justify-center md:justify-start">
                <div 
                  className="relative"
                  style={{
                    width: '180px',
                    height: '180px'
                  }}
                >
                  <div 
                    className="w-full h-full rounded-lg flex items-center justify-center text-6xl"
                    style={{
                      background: 'linear-gradient(135deg, #66A6FF 0%, #1E3A8A 100%)',
                      border: '3px solid #C6A667',
                      color: '#F5EEDC',
                      fontWeight: 'bold'
                    }}
                  >
                    {profile.name.charAt(0)}
                  </div>
                  
                  {/* AI Verified Badge */}
                  <div 
                    className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold"
                    style={{
                      background: '#66A6FF',
                      color: 'white',
                      border: '2px solid #F5EEDC',
                      boxShadow: '0 4px 12px rgba(102, 166, 255, 0.3)'
                    }}
                  >
                    <FaCheckCircle />
                    AI-Verified
                  </div>
                </div>
              </div>

              {/* Right Side - ID Details */}
              <div className="md:col-span-2 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div 
                      className="text-xs font-semibold mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      NOME COMPLETO
                    </div>
                    <div 
                      className="text-lg font-bold pb-2"
                      style={{ 
                        color: '#0B1A32',
                        borderBottom: '2px solid #C6A667'
                      }}
                    >
                      {profile.name}
                    </div>
                  </div>

                  <div>
                    <div 
                      className="text-xs font-semibold mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      IDADE
                    </div>
                    <div 
                      className="text-lg font-bold pb-2"
                      style={{ 
                        color: '#0B1A32',
                        borderBottom: '2px solid #C6A667'
                      }}
                    >
                      {profile.age} anos
                    </div>
                  </div>

                  <div>
                    <div 
                      className="text-xs font-semibold mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      MEMBRO DESDE
                    </div>
                    <div 
                      className="text-lg font-bold pb-2"
                      style={{ 
                        color: '#0B1A32',
                        borderBottom: '2px solid #C6A667'
                      }}
                    >
                      {profile.memberSince}
                    </div>
                  </div>

                  <div>
                    <div 
                      className="text-xs font-semibold mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      CARGO ATUAL
                    </div>
                    <div 
                      className="text-lg font-bold pb-2"
                      style={{ 
                        color: '#0B1A32',
                        borderBottom: '2px solid #C6A667'
                      }}
                    >
                      {profile.currentRole}
                    </div>
                  </div>

                  <div className="col-span-2">
                    <div 
                      className="text-xs font-semibold mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      DESTINO PROFISSIONAL
                    </div>
                    <div 
                      className="text-lg font-bold pb-2"
                      style={{ 
                        color: '#0B1A32',
                        borderBottom: '2px solid #C6A667'
                      }}
                    >
                      {profile.destinationJob}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Section - Readiness Gauge */}
            <div className="mb-8 p-6 rounded-lg" style={{ background: 'rgba(11, 26, 50, 0.05)' }}>
              <h3 
                className="text-xl font-extrabold text-center mb-6"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                READY TO LAUNCH STATUS
              </h3>

              <div className="flex justify-center mb-4">
                <div className="match-meter relative">
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
                      stroke={getReadinessColor(profile.readinessLevel)}
                      strokeWidth="8"
                      strokeDasharray={`${profile.readinessLevel * 2.51} 251`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div 
                    className="match-percentage absolute inset-0 flex items-center justify-center"
                    style={{ 
                      color: getReadinessColor(profile.readinessLevel),
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    {profile.readinessLevel}%
                  </div>
                </div>
              </div>

              <div 
                className="text-center text-lg font-bold"
                style={{ color: getReadinessColor(profile.readinessLevel) }}
              >
                {getReadinessLabel(profile.readinessLevel)}
              </div>
            </div>

            {/* Bottom Section - Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div 
                className="text-center p-4 rounded-lg"
                style={{ background: 'rgba(59, 170, 120, 0.1)' }}
              >
                <div 
                  className="text-3xl font-extrabold mb-1"
                  style={{ 
                    color: '#3BAA78',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {profile.skillsAcquired}
                </div>
                <div className="text-xs font-semibold" style={{ color: '#1E3A8A' }}>
                  Skills Adquiridas
                </div>
              </div>

              <div 
                className="text-center p-4 rounded-lg"
                style={{ background: 'rgba(102, 166, 255, 0.1)' }}
              >
                <div 
                  className="text-3xl font-extrabold mb-1"
                  style={{ 
                    color: '#66A6FF',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {profile.skillsInProgress}
                </div>
                <div className="text-xs font-semibold" style={{ color: '#1E3A8A' }}>
                  Em Progresso
                </div>
              </div>

              <div 
                className="text-center p-4 rounded-lg"
                style={{ background: 'rgba(198, 166, 103, 0.1)' }}
              >
                <div 
                  className="text-3xl font-extrabold mb-1"
                  style={{ 
                    color: '#C6A667',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {profile.totalLearningHours}
                </div>
                <div className="text-xs font-semibold" style={{ color: '#1E3A8A' }}>
                  Horas de Estudo
                </div>
              </div>
            </div>

            {/* Holographic Strip */}
            <div 
              className="mt-8 h-8 rounded-lg"
              style={{
                background: 'linear-gradient(90deg, #C63C3C, #FF8C00, #3BAA78, #66A6FF, #C6A667, #C63C3C)',
                opacity: 0.2,
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s infinite'
              }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/candidate/skills-completed">
            <button className="btn-primary">
              <FaStar />
              Ver Skills Completas
            </button>
          </Link>
          <Link href="/candidate/skills-pending">
            <button className="btn-secondary">
              Ver Skills Pendentes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}