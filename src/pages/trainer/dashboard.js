import { useState } from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaRocket, FaChartLine, FaTrophy, FaClock, FaRegStar, FaUsers, FaPlus } from 'react-icons/fa';

export default function TrainerDashboard() {
  const [stats] = useState({
    activeCourses: 8,
    totalStudents: 234,
    completionRate: 87,
    avgRating: 4.8,
    revenue: 'R$ 12.450',
    pendingRequests: 5
  });

  const [courses] = useState([
    {
      id: 1,
      title: 'Python para Data Science',
      students: 45,
      completion: 78,
      demand: 'Alta',
      revenue: 'R$ 3.200',
      duration: '6 semanas',
      status: 'active'
    },
    {
      id: 2,
      title: 'React Avançado',
      students: 38,
      completion: 82,
      demand: 'Média',
      revenue: 'R$ 2.850',
      duration: '4 semanas',
      status: 'active'
    },
    {
      id: 3,
      title: 'DevOps Fundamentals',
      students: 52,
      completion: 65,
      demand: 'Alta',
      revenue: 'R$ 4.100',
      duration: '8 semanas',
      status: 'active'
    }
  ]);

  const [demandRequests] = useState([
    {
      skill: 'Machine Learning',
      companies: 12,
      candidates: 87,
      avgGap: 'Alto',
      potentialRevenue: 'R$ 8.500'
    },
    {
      skill: 'Kubernetes',
      companies: 8,
      candidates: 54,
      avgGap: 'Médio',
      potentialRevenue: 'R$ 6.200'
    },
    {
      skill: 'TypeScript',
      companies: 15,
      candidates: 102,
      avgGap: 'Baixo',
      potentialRevenue: 'R$ 4.800'
    }
  ]);

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #3BAA78 0%, #2d8a60 100%)',
                boxShadow: '0 4px 12px rgba(59, 170, 120, 0.3)'
              }}
            >
              <FaGraduationCap className="text-3xl text-white" />
            </div>
            <div>
              <h1 
                className="text-4xl md:text-5xl font-extrabold"
                style={{ 
                  color: '#C6A667',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Trainer Mission Control
              </h1>
              <p className="text-lg mt-1" style={{ color: '#D9D9D9' }}>
                Criando astronautas de tecnologia
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.activeCourses}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Cursos Ativos
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.totalStudents}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Alunos Totais
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
              {stats.completionRate}%
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Taxa Conclusão
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-3xl font-extrabold mb-1 flex items-center justify-center gap-1"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.avgRating}
              <FaRegStar className="text-xl" />
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Avaliação Média
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <div 
              className="text-2xl font-extrabold mb-1"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.revenue}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Receita Mensal
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform cursor-pointer">
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#C63C3C',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.pendingRequests}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Requisições
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT - Active Courses */}
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
                  Meus Micro-Cursos
                </h2>
                <button className="btn-primary">
                  <FaPlus />
                  Novo Curso
                </button>
              </div>

              <div className="space-y-4">
                {courses.map(course => (
                  <div 
                    key={course.id}
                    className="p-4 rounded-lg border-2 hover:shadow-lg transition-all cursor-pointer"
                    style={{ 
                      borderColor: '#D9D9D9',
                      background: 'white'
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 
                          className="text-lg font-bold mb-1"
                          style={{ color: '#0B1A32' }}
                        >
                          {course.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm" style={{ color: '#1E3A8A' }}>
                          <div className="flex items-center gap-1">
                            <FaUsers />
                            {course.students} alunos
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock />
                            {course.duration}
                          </div>
                        </div>
                      </div>
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: course.demand === 'Alta' ? '#3BAA78' : '#66A6FF',
                          color: 'white'
                        }}
                      >
                        Demanda: {course.demand}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1" style={{ color: '#1E3A8A' }}>
                        <span>Progresso Médio</span>
                        <span className="font-bold">{course.completion}%</span>
                      </div>
                      <div className="progress-container">
                        <div 
                          className="progress-bar"
                          style={{ width: `${course.completion}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div 
                        className="text-xl font-bold"
                        style={{ color: '#3BAA78' }}
                      >
                        {course.revenue}
                      </div>
                      <div className="flex gap-2">
                        <button 
                          className="px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                          style={{
                            background: '#66A6FF',
                            color: 'white'
                          }}
                        >
                          Ver Alunos
                        </button>
                        <button 
                          className="px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                          style={{
                            background: '#C6A667',
                            color: 'white'
                          }}
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - AI Demand Insights */}
          <div className="space-y-6">
            {/* Market Demand */}
            <div className="card-rocket">
              <div className="flex items-center gap-2 mb-4">
                <FaChartLine className="text-2xl" style={{ color: '#66A6FF' }} />
                <h3 
                  className="text-lg font-extrabold"
                  style={{ 
                    color: '#0B1A32',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  IA: Skills em Alta
                </h3>
              </div>

              <div className="space-y-3">
                {demandRequests.map((req, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    style={{ 
                      background: 'rgba(102, 166, 255, 0.1)',
                      border: '1px solid #66A6FF'
                    }}
                  >
                    <div className="font-bold mb-2" style={{ color: '#0B1A32' }}>
                      {req.skill}
                    </div>
                    <div className="text-xs space-y-1" style={{ color: '#1E3A8A' }}>
                      <div className="flex justify-between">
                        <span>🏢 {req.companies} empresas</span>
                        <span>👨‍🎓 {req.candidates} candidatos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gap: {req.avgGap}</span>
                        <span className="font-bold" style={{ color: '#3BAA78' }}>
                          {req.potentialRevenue}
                        </span>
                      </div>
                    </div>
                    <button 
                      className="w-full mt-2 py-2 rounded-lg text-xs font-semibold hover:scale-105 transition-transform"
                      style={{
                        background: '#3BAA78',
                        color: 'white'
                      }}
                    >
                      Criar Micro-Curso
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div 
              className="card-rocket text-center"
              style={{
                background: 'linear-gradient(135deg, #C6A667 0%, #FFD700 100%)',
                border: '3px solid #C6A667'
              }}
            >
              <FaTrophy className="text-5xl mx-auto mb-3" style={{ color: '#0B1A32' }} />
              <div 
                className="text-2xl font-extrabold mb-2"
                style={{ 
                  color: '#0B1A32',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Top 5% Trainers
              </div>
              <p className="text-sm" style={{ color: '#1E3A8A' }}>
                Você está entre os formadores mais bem avaliados da plataforma!
              </p>
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
                <button className="btn-secondary w-full">
                  <FaRocket />
                  Ver Todas as Requisições
                </button>
                <button className="btn-secondary w-full">
                  <FaChartLine />
                  Relatório de Desempenho
                </button>
                <Link href="/trainer/earnings">
                  <button className="btn-secondary w-full">
                    💰 Meus Ganhos
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