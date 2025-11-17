import { useState } from 'react';
import Link from 'next/link';
import { FaRocket, FaRegStar, FaClock, FaTrophy, FaBriefcase, FaCheckCircle, FaFire } from 'react-icons/fa';

export default function CandidateDashboard() {
  const [profile] = useState({
    name: 'João Silva',
    currentRole: 'Desenvolvedor Junior',
    targetRole: 'Full Stack Sênior',
    readinessScore: 72,
    skillsCompleted: 8,
    skillsInProgress: 3,
    skillsPending: 5,
    learningStreak: 12,
    weeklyHours: 8.5
  });

  const [matchedJobs] = useState([
    {
      id: 1,
      title: 'Desenvolvedor Full Stack',
      company: 'TechCorp',
      match: 87,
      salary: 'R$ 8.000 - R$ 12.000',
      location: 'Remoto',
      missingSkills: 2
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'StartupXYZ',
      match: 82,
      salary: 'R$ 7.000 - R$ 10.000',
      location: 'São Paulo',
      missingSkills: 3
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'BigTech Inc',
      match: 79,
      salary: 'R$ 10.000 - R$ 15.000',
      location: 'Híbrido',
      missingSkills: 4
    }
  ]);

  const [recentActivity] = useState([
    {
      type: 'completed',
      title: 'Concluiu: React Advanced Patterns',
      time: '2 horas atrás',
      icon: FaCheckCircle,
      color: '#3BAA78'
    },
    {
      type: 'match',
      title: 'Novo match: 87% com TechCorp',
      time: '5 horas atrás',
      icon: FaRegStar,
      color: '#C6A667'
    },
    {
      type: 'streak',
      title: 'Sequência de 12 dias! 🔥',
      time: '1 dia atrás',
      icon: FaFire,
      color: '#FF8C00'
    }
  ]);

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #66A6FF 0%, #1E3A8A 100%)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(102, 166, 255, 0.3)'
                }}
              >
                {profile.name.charAt(0)}
              </div>
              <div>
                <h1 
                  className="text-3xl md:text-4xl font-extrabold"
                  style={{ 
                    color: '#C6A667',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Olá, {profile.name.split(' ')[0]}! 👋
                </h1>
                <p className="text-lg" style={{ color: '#D9D9D9' }}>
                  {profile.currentRole} → {profile.targetRole}
                </p>
              </div>
            </div>
            <Link href="/candidate/passport-cover">
              <button className="btn-primary">
                <FaTrophy />
                Ver Meu Passaporte
              </button>
            </Link>
          </div>
        </div>

        {/* Readiness Banner */}
        <div 
          className="card-rocket mb-8"
          style={{
            background: 'linear-gradient(135deg, #66A6FF 0%, #1E3A8A 100%)',
            color: 'white'
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-sm font-semibold mb-2 opacity-90">
                Seu Status de Lançamento
              </div>
              <div 
                className="text-4xl font-extrabold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {profile.readinessScore}% Pronto
              </div>
              <p className="text-sm opacity-90">
                Continue assim! Você está no caminho certo 🚀
              </p>
            </div>

            <div className="match-meter" style={{ width: '120px', height: '120px' }}>
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeDasharray={`${profile.readinessScore * 2.51} 251`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaRocket className="text-4xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div 
                  className="text-3xl font-extrabold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {profile.skillsCompleted}
                </div>
                <div className="text-xs opacity-90">Completas</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-extrabold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {profile.skillsPending}
                </div>
                <div className="text-xs opacity-90">Faltam</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT - Matched Jobs */}
          <div className="lg:col-span-2">
            <div className="card-rocket">
              <div className="flex justify-between items-center mb-6">
                <h2 
                  className="text-2xl font-extrabold flex items-center gap-2"
                  style={{ 
                    color: '#0B1A32',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  <FaBriefcase />
                  Vagas Matched Para Você
                </h2>
                <Link href="/candidate/matched-jobs">
                  <button className="btn-secondary text-sm">
                    Ver Todas
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                {matchedJobs.map(job => (
                  <div 
                    key={job.id}
                    className="p-4 rounded-lg border-2 hover:shadow-lg transition-all cursor-pointer"
                    style={{ 
                      borderColor: '#D9D9D9',
                      background: 'white'
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 
                          className="text-lg font-bold mb-1"
                          style={{ color: '#0B1A32' }}
                        >
                          {job.title}
                        </h3>
                        <div className="text-sm mb-2" style={{ color: '#1E3A8A' }}>
                          {job.company} • {job.location}
                        </div>
                        <div 
                          className="text-lg font-bold"
                          style={{ color: '#3BAA78' }}
                        >
                          {job.salary}
                        </div>
                      </div>
                      <div className="text-center">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mb-1"
                          style={{
                            background: job.match >= 80 ? '#3BAA78' : '#66A6FF',
                            color: 'white',
                            fontFamily: 'Montserrat, sans-serif'
                          }}
                        >
                          {job.match}%
                        </div>
                        <div className="text-xs" style={{ color: '#1E3A8A' }}>
                          Match
                        </div>
                      </div>
                    </div>

                    {job.missingSkills > 0 && (
                      <div 
                        className="p-2 rounded text-xs mb-3"
                        style={{ 
                          background: 'rgba(198, 60, 60, 0.1)',
                          color: '#C63C3C'
                        }}
                      >
                        Faltam {job.missingSkills} skills • Tempo estimado: {job.missingSkills * 2} semanas
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button 
                        className="flex-1 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                        style={{
                          background: '#66A6FF',
                          color: 'white'
                        }}
                      >
                        Ver Detalhes
                      </button>
                      <button 
                        className="flex-1 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                        style={{
                          background: '#3BAA78',
                          color: 'white'
                        }}
                      >
                        Candidatar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/skill-gap">
                  <button className="btn-primary">
                    <FaRegStar />
                    Descobrir Mais Vagas
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* Learning Stats */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Seu Progresso
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: '#FF8C00' }}
                  >
                    <FaFire className="text-2xl text-white" />
                  </div>
                  <div>
                    <div 
                      className="text-2xl font-extrabold"
                      style={{ 
                        color: '#FF8C00',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      {profile.learningStreak} dias
                    </div>
                    <div className="text-xs" style={{ color: '#1E3A8A' }}>
                      Sequência atual
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: '#66A6FF' }}
                  >
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <div>
                    <div 
                      className="text-2xl font-extrabold"
                      style={{ 
                        color: '#66A6FF',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      {profile.weeklyHours}h
                    </div>
                    <div className="text-xs" style={{ color: '#1E3A8A' }}>
                      Esta semana
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: '#C6A667' }}
                  >
                    <FaRegStar className="text-2xl text-white" />
                  </div>
                  <div>
                    <div 
                      className="text-2xl font-extrabold"
                      style={{ 
                        color: '#C6A667',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      Top 15%
                    </div>
                    <div className="text-xs" style={{ color: '#1E3A8A' }}>
                      Ranking global
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Recommendation */}
            <div 
              className="card-rocket"
              style={{
                background: 'linear-gradient(135deg, #F5EEDC 0%, #E5DCC8 100%)',
                border: '3px solid #C6A667'
              }}
            >
              <div className="text-4xl mb-3 text-center">🎯</div>
              <h3 
                className="text-lg font-extrabold mb-2 text-center"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Próxima Missão
              </h3>
              <p className="text-sm text-center mb-4" style={{ color: '#1E3A8A' }}>
                Complete <strong>React Development</strong> e aumente seu match em <strong className="text-green-600">+18%</strong>
              </p>
              <Link href="/learning-path">
                <button className="btn-primary w-full">
                  <FaRocket />
                  Começar Agora
                </button>
              </Link>
            </div>

            {/* Recent Activity */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Atividade Recente
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-opacity-50 transition-colors"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: activity.color }}
                    >
                      <activity.icon className="text-white text-sm" />
                    </div>
                    <div className="flex-1">
                      <div 
                        className="text-sm font-semibold"
                        style={{ color: '#0B1A32' }}
                      >
                        {activity.title}
                      </div>
                      <div className="text-xs" style={{ color: '#D9D9D9' }}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Acesso Rápido
              </h3>
              <div className="space-y-2">
                <Link href="/candidate/skills-pending">
                  <button className="btn-secondary w-full text-sm">
                    Ver Skills Pendentes
                  </button>
                </Link>
                <Link href="/learning-path">
                  <button className="btn-secondary w-full text-sm">
                    Minha Trilha de Aprendizado
                  </button>
                </Link>
                <Link href="/skill-gap">
                  <button className="btn-secondary w-full text-sm">
                    Analisar Skill Gap
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}