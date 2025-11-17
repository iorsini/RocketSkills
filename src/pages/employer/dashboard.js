import { useState } from 'react';
import Link from 'next/link';
import { FaBriefcase, FaUsers, FaRocket, FaChartLine, FaClock, FaRegStar, FaPlus, FaBrain } from 'react-icons/fa';

export default function EmployerDashboard() {
  const [stats] = useState({
    activeJobs: 12,
    totalApplicants: 487,
    avgMatchScore: 78,
    positionsFilled: 8,
    avgTimeToHire: 21,
    candidatesInTraining: 34
  });

  const [activeJobs] = useState([
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      applicants: 45,
      avgMatch: 82,
      topMatch: 94,
      daysOpen: 12,
      status: 'active',
      inTraining: 8
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      applicants: 32,
      avgMatch: 76,
      topMatch: 88,
      daysOpen: 18,
      status: 'active',
      inTraining: 5
    },
    {
      id: 3,
      title: 'Frontend Developer (React)',
      applicants: 58,
      avgMatch: 85,
      topMatch: 97,
      daysOpen: 8,
      status: 'active',
      inTraining: 12
    }
  ]);

  const [topCandidates] = useState([
    {
      name: 'Ana Silva',
      match: 94,
      job: 'Senior Full Stack Developer',
      skills: ['React', 'Node.js', 'AWS'],
      missingSkills: 1,
      eta: '2 semanas',
      status: 'ready'
    },
    {
      name: 'Carlos Santos',
      match: 88,
      job: 'DevOps Engineer',
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      missingSkills: 2,
      eta: '4 semanas',
      status: 'training'
    },
    {
      name: 'Maria Oliveira',
      match: 97,
      job: 'Frontend Developer',
      skills: ['React', 'TypeScript', 'Next.js'],
      missingSkills: 0,
      eta: 'Pronto',
      status: 'ready'
    }
  ]);

  const [insights] = useState([
    {
      type: 'opportunity',
      title: 'Candidatos prontos para entrevista',
      value: '12',
      action: 'Ver candidatos'
    },
    {
      type: 'warning',
      title: 'Vagas com baixo match médio',
      value: '3',
      action: 'Ajustar requisitos'
    },
    {
      type: 'success',
      title: 'Candidatos finalizando trilhas',
      value: '8',
      action: 'Agendar entrevistas'
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
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #C6A667 0%, #FFD700 100%)',
                  boxShadow: '0 4px 12px rgba(198, 166, 103, 0.3)'
                }}
              >
                <FaBriefcase className="text-3xl text-white" />
              </div>
              <div>
                <h1 
                  className="text-4xl md:text-5xl font-extrabold"
                  style={{ 
                    color: '#C6A667',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Talent Control Center
                </h1>
                <p className="text-lg mt-1" style={{ color: '#D9D9D9' }}>
                  TechCorp - Painel de Recrutamento
                </p>
              </div>
            </div>
            <Link href="/employer/job-create">
              <button className="btn-primary">
                <FaPlus />
                Nova Vaga
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.activeJobs}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Vagas Ativas
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.totalApplicants}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Candidatos
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.avgMatchScore}%
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Match Médio
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.positionsFilled}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Vagas Preenchidas
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#FF8C00',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.avgTimeToHire}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Dias p/ Contratar
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform cursor-pointer">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.candidatesInTraining}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Em Treinamento
            </div>
          </div>
        </div>

        {/* AI Insights Banner */}
        <div 
          className="card-rocket mb-8"
          style={{
            background: 'linear-gradient(135deg, #66A6FF 0%, #1E3A8A 100%)',
            color: 'white'
          }}
        >
          <div className="flex items-center gap-4">
            <FaBrain className="text-4xl flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">IA detectou 12 candidatos prontos para entrevista</h3>
              <p className="text-sm opacity-90">
                Baseado nas trilhas concluídas, sugerimos agendar entrevistas para as vagas de Full Stack e Frontend
              </p>
            </div>
            <button 
              className="px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform flex-shrink-0"
              style={{
                background: 'white',
                color: '#1E3A8A'
              }}
            >
              Ver Candidatos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT - Active Jobs */}
          <div className="lg:col-span-2">
            <div className="card-rocket">
              <div className="flex justify-between items-center mb-6">
                <h2 
                  className="text-2xl font-extrabold"
                  style={{ 
                    color: '#0B1A32',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Vagas Ativas
                </h2>
                <Link href="/employer/jobs">
                  <button className="btn-secondary text-sm">
                    Ver Todas
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                {activeJobs.map(job => (
                  <div 
                    key={job.id}
                    className="p-4 rounded-lg border-2 hover:shadow-lg transition-all"
                    style={{ 
                      borderColor: '#D9D9D9',
                      background: 'white'
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 
                          className="text-lg font-bold mb-2"
                          style={{ color: '#0B1A32' }}
                        >
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm" style={{ color: '#1E3A8A' }}>
                          <div className="flex items-center gap-1">
                            <FaUsers />
                            {job.applicants} candidatos
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock />
                            {job.daysOpen} dias aberta
                          </div>
                          <div className="flex items-center gap-1">
                            <FaRocket />
                            {job.inTraining} em trilha
                          </div>
                        </div>
                      </div>
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: job.status === 'active' ? '#3BAA78' : '#D9D9D9',
                          color: 'white'
                        }}
                      >
                        {job.status === 'active' ? 'Ativa' : 'Pausada'}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-xs mb-1" style={{ color: '#1E3A8A' }}>
                          Match Médio
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="progress-container flex-1" style={{ height: '8px' }}>
                            <div 
                              className="progress-bar"
                              style={{ 
                                width: `${job.avgMatch}%`,
                                background: job.avgMatch >= 80 ? '#3BAA78' : '#66A6FF'
                              }}
                            />
                          </div>
                          <span 
                            className="text-sm font-bold"
                            style={{ color: job.avgMatch >= 80 ? '#3BAA78' : '#66A6FF' }}
                          >
                            {job.avgMatch}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs mb-1" style={{ color: '#1E3A8A' }}>
                          Top Match
                        </div>
                        <div 
                          className="text-2xl font-extrabold"
                          style={{ 
                            color: '#3BAA78',
                            fontFamily: 'Montserrat, sans-serif'
                          }}
                        >
                          {job.topMatch}%
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        className="flex-1 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                        style={{
                          background: '#66A6FF',
                          color: 'white'
                        }}
                      >
                        Ver Candidatos
                      </button>
                      <Link href="/skill-gap-radar">
                        <button 
                          className="flex-1 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                          style={{
                            background: '#C6A667',
                            color: 'white'
                          }}
                        >
                          Skill Gap Radar
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Candidates Section */}
            <div className="card-rocket mt-6">
              <h2 
                className="text-2xl font-extrabold mb-6"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Top Candidatos
              </h2>

              <div className="space-y-3">
                {topCandidates.map((candidate, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-lg hover:shadow-lg transition-all cursor-pointer"
                    style={{ 
                      background: candidate.status === 'ready' ? 'rgba(59, 170, 120, 0.1)' : 'rgba(102, 166, 255, 0.1)',
                      border: `2px solid ${candidate.status === 'ready' ? '#3BAA78' : '#66A6FF'}`
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                          style={{
                            background: candidate.status === 'ready' ? '#3BAA78' : '#66A6FF',
                            color: 'white'
                          }}
                        >
                          {candidate.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold" style={{ color: '#0B1A32' }}>
                            {candidate.name}
                          </div>
                          <div className="text-sm" style={{ color: '#1E3A8A' }}>
                            {candidate.job}
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div 
                          className="text-2xl font-extrabold"
                          style={{ 
                            color: candidate.status === 'ready' ? '#3BAA78' : '#66A6FF',
                            fontFamily: 'Montserrat, sans-serif'
                          }}
                        >
                          {candidate.match}%
                        </div>
                        <div className="text-xs" style={{ color: '#1E3A8A' }}>
                          Match
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {candidate.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="skill-badge completed"
                          style={{ fontSize: '11px', padding: '4px 8px' }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div style={{ color: '#1E3A8A' }}>
                        {candidate.missingSkills > 0 ? (
                          <>Faltam {candidate.missingSkills} skills • ETA: {candidate.eta}</>
                        ) : (
                          <span style={{ color: '#3BAA78', fontWeight: 'bold' }}>✓ Pronto para entrevista</span>
                        )}
                      </div>
                      <button 
                        className="px-4 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition-transform"
                        style={{
                          background: candidate.status === 'ready' ? '#3BAA78' : '#66A6FF',
                          color: 'white'
                        }}
                      >
                        {candidate.status === 'ready' ? 'Agendar' : 'Acompanhar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* AI Insights */}
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
                  Insights da IA
                </h3>
              </div>

              <div className="space-y-3">
                {insights.map((insight, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg"
                    style={{ 
                      background: insight.type === 'success' ? 'rgba(59, 170, 120, 0.1)' :
                                 insight.type === 'warning' ? 'rgba(255, 140, 0, 0.1)' :
                                 'rgba(102, 166, 255, 0.1)'
                    }}
                  >
                    <div 
                      className="text-2xl font-extrabold mb-1"
                      style={{ 
                        color: insight.type === 'success' ? '#3BAA78' :
                               insight.type === 'warning' ? '#FF8C00' :
                               '#66A6FF',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      {insight.value}
                    </div>
                    <div className="text-sm mb-2" style={{ color: '#0B1A32' }}>
                      {insight.title}
                    </div>
                    <button 
                      className="text-xs font-semibold hover:underline"
                      style={{ 
                        color: insight.type === 'success' ? '#3BAA78' :
                               insight.type === 'warning' ? '#FF8C00' :
                               '#66A6FF'
                      }}
                    >
                      {insight.action} →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Funnel */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Funil de Contratação
              </h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1" style={{ color: '#1E3A8A' }}>
                    <span>Candidatos</span>
                    <span className="font-bold">487</span>
                  </div>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1" style={{ color: '#1E3A8A' }}>
                    <span>Em Treinamento</span>
                    <span className="font-bold">34</span>
                  </div>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: '70%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1" style={{ color: '#1E3A8A' }}>
                    <span>Prontos</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: '45%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1" style={{ color: '#1E3A8A' }}>
                    <span>Contratados</span>
                    <span className="font-bold">8</span>
                  </div>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: '25%', background: '#3BAA78' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-rocket">
              <h3 
                className="text-lg font-extrabold mb-4"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Ações Rápidas
              </h3>
              <div className="space-y-2">
                <Link href="/employer/job-create">
                  <button className="btn-secondary w-full text-sm">
                    <FaPlus />
                    Criar Nova Vaga
                  </button>
                </Link>
                <Link href="/stats">
                  <button className="btn-secondary w-full text-sm">
                    <FaChartLine />
                    Ver Relatórios
                  </button>
                </Link>
                <button className="btn-secondary w-full text-sm">
                  <FaRegStar />
                  Avaliar Candidatos
                </button>
              </div>
            </div>

            {/* Achievement */}
            <div 
              className="card-rocket text-center"
              style={{
                background: 'linear-gradient(135deg, #3BAA78 0%, #2d8a60 100%)',
                color: 'white'
              }}
            >
              <div className="text-4xl mb-2">🏆</div>
              <div 
                className="text-xl font-extrabold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                -40% Tempo de Contratação
              </div>
              <p className="text-sm opacity-90">
                Com o RocketSkills, você reduziu o time-to-hire em média!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}