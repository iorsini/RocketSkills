import { useState } from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaChartLine, FaPlus, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';

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
      duration: '6 semanas'
    },
    {
      id: 2,
      title: 'React Avançado',
      students: 38,
      completion: 82,
      demand: 'Média',
      revenue: 'R$ 2.850',
      duration: '4 semanas'
    },
    {
      id: 3,
      title: 'DevOps Fundamentals',
      students: 52,
      completion: 65,
      demand: 'Alta',
      revenue: 'R$ 4.100',
      duration: '8 semanas'
    }
  ]);

  const [demandRequests] = useState([
    { skill: 'Machine Learning', companies: 12, candidates: 87, avgGap: 'Alto', potentialRevenue: 'R$ 8.500' },
    { skill: 'Kubernetes', companies: 8, candidates: 54, avgGap: 'Médio', potentialRevenue: 'R$ 6.200' },
    { skill: 'TypeScript', companies: 15, candidates: 102, avgGap: 'Baixo', potentialRevenue: 'R$ 4.800' }
  ]);

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-10">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="badge-chip">Trainer Mission Control</div>
              <h1 className="text-4xl font-extrabold mt-3 flex items-center gap-3">
                <FaGraduationCap className="text-cyan-300" /> Impacto em constelação
              </h1>
              <p className="text-slate-300">Crie quests, monetize expertise e acompanhe squads.</p>
            </div>
            <Link href="/learning-path">
              <button className="btn-primary">
                <FaPlus /> Nova trilha
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[{ label: 'Cursos ativos', value: stats.activeCourses }, { label: 'Alunos', value: stats.totalStudents }, { label: 'Conclusão', value: `${stats.completionRate}%` }, { label: 'Avaliação', value: stats.avgRating }, { label: 'Receita', value: stats.revenue }, { label: 'Pedidos', value: stats.pendingRequests }].map(item => (
              <div key={item.label} className="glass-tile text-center">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-rocket space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Trilhas principais</p>
                  <h2 className="text-2xl font-bold">Cursos ativos</h2>
                </div>
                <FaChartLine className="text-2xl text-cyan-200" />
              </div>
              <div className="space-y-3">
                {courses.map(course => (
                  <div key={course.id} className="micro-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{course.title}</p>
                        <p className="text-xs text-slate-400">{course.students} alunos • {course.duration}</p>
                      </div>
                      <span className="token-pill">{course.demand} demanda</span>
                    </div>
                    <div className="energy-bar mt-3">
                      <span style={{ width: `${course.completion}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="card-rocket space-y-3">
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-2xl text-cyan-200" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Demandas das empresas</p>
                    <h3 className="text-xl font-bold">Solicitações recentes</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  {demandRequests.map(request => (
                    <div key={request.skill} className="micro-card">
                      <p className="font-semibold">{request.skill}</p>
                      <p className="text-xs text-slate-400">{request.companies} empresas • {request.candidates} candidatos</p>
                      <p className="text-sm text-slate-300">Gap médio: {request.avgGap} • Potencial {request.potentialRevenue}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-rocket space-y-3">
                <div className="flex items-center gap-3">
                  <FaMoneyBillWave className="text-2xl text-cyan-200" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Receita projetada</p>
                    <h3 className="text-xl font-bold">{stats.revenue}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-300">Baseado em assinaturas recorrentes e missões corporativas.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
