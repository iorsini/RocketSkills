import { useState } from 'react';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaGraduationCap,
  FaBriefcase,
  FaClock,
  FaRegStar,
  FaGlobeAmericas,
  FaUserGraduate,
  FaPeopleCarry,
  FaCoins
} from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StatsImpactDashboard() {
  const [timeRange, setTimeRange] = useState('6m');

  const [platformStats] = useState({
    totalUsers: 15678,
    activeCandidates: 8945,
    activeEmployers: 342,
    activeTrainers: 156,
    totalJobs: 1234,
    jobsFilled: 487,
    avgMatchScore: 82,
    avgTimeToHire: 21,
    skillsLearned: 45623,
    completionRate: 78
  });

  const matchData = [
    { month: 'Jan', avgMatch: 68, jobs: 45 },
    { month: 'Fev', avgMatch: 72, jobs: 58 },
    { month: 'Mar', avgMatch: 75, jobs: 67 },
    { month: 'Abr', avgMatch: 78, jobs: 78 },
    { month: 'Mai', avgMatch: 80, jobs: 89 },
    { month: 'Jun', avgMatch: 82, jobs: 95 }
  ];

  const skillsData = [
    { name: 'JavaScript', count: 3245 },
    { name: 'React', count: 2890 },
    { name: 'Python', count: 2567 },
    { name: 'Node.js', count: 2134 },
    { name: 'Docker', count: 1876 },
    { name: 'AWS', count: 1654 },
    { name: 'TypeScript', count: 1432 },
    { name: 'SQL', count: 1298 }
  ];

  const userDistribution = [
    { name: 'Candidatos', value: 8945, color: '#5c8dff' },
    { name: 'Empresas', value: 342, color: '#2ae9ff' },
    { name: 'Formadores', value: 156, color: '#55f8c0' }
  ];

  const impactMetrics = [
    {
      icon: FaClock,
      title: 'Tempo de contratação',
      value: '-42%',
      description: 'Média de 21 dias vs 36 dias tradicional',
      color: '#5c8dff'
    },
    {
      icon: FaTrophy,
      title: 'Sucesso nas contratações',
      value: '87%',
      description: 'Candidatos permanecem 12+ meses',
      color: '#55f8c0'
    },
    {
      icon: FaUsers,
      title: 'Crescimento de candidatos',
      value: '+156%',
      description: 'Últimos 6 meses',
      color: '#2ae9ff'
    },
    {
      icon: FaRegStar,
      title: 'Satisfação de empresas',
      value: '4.8/5',
      description: 'Baseado em 342 avaliações',
      color: '#8a7bff'
    }
  ];

  const socialImpact = [
    {
      metric: 'Jovens qualificados',
      value: '4,567',
      icon: FaUserGraduate,
      change: '+234%'
    },
    {
      metric: 'Redução do desemprego tech',
      value: '18.1% → 8.3%',
      icon: FaChartLine,
      change: '-54%'
    },
    {
      metric: 'Famílias impactadas',
      value: '12,450+',
      icon: FaPeopleCarry,
      change: '+189%'
    },
    {
      metric: 'Aumento salarial médio',
      value: '+67%',
      icon: FaCoins,
      change: 'R$ 3.2k → R$ 5.4k'
    }
  ];

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-10">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="btn-secondary">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div>
              <p className="section-tag">Mission Impact</p>
              <h1 className="text-4xl font-extrabold">Dashboard de impacto</h1>
              <p className="text-slate-300">Telemetria de empregadores, candidatos e formadores.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['1m', '3m', '6m', '1y', 'all'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className="token-pill"
                style={
                  timeRange === range
                    ? { background: 'rgba(92,141,255,0.2)', borderColor: 'rgba(92,141,255,0.5)', color: 'var(--stellar-text)' }
                    : {}
                }
              >
                {range === '1m' ? '1 mês' : range === '3m' ? '3 meses' : range === '6m' ? '6 meses' : range === '1y' ? '1 ano' : 'Tudo'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[{ icon: FaUsers, label: 'Usuários', value: platformStats.totalUsers }, { icon: FaBriefcase, label: 'Vagas', value: platformStats.totalJobs }, { icon: FaGraduationCap, label: 'Skills aprendidas', value: platformStats.skillsLearned }, { icon: FaTrophy, label: 'Contratações', value: platformStats.jobsFilled }, { icon: FaRegStar, label: 'Match médio', value: `${platformStats.avgMatchScore}%` }].map(stat => (
              <div key={stat.label} className="card-rocket text-center">
                <stat.icon className="text-2xl mx-auto mb-2 text-cyan-200" />
                <p className="text-2xl font-bold">{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactMetrics.map(metric => (
              <div key={metric.title} className="micro-card">
                <div className="flex items-center gap-3">
                  <metric.icon className="text-2xl" style={{ color: metric.color }} />
                  <div>
                    <p className="text-sm text-slate-400">{metric.title}</p>
                    <p className="text-2xl font-bold" style={{ color: metric.color }}>{metric.value}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-rocket">
              <h2 className="text-xl font-bold mb-4">Evolução do match score</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={matchData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="month" stroke="var(--stellar-muted)" />
                  <YAxis stroke="var(--stellar-muted)" />
                  <Tooltip contentStyle={{ background: 'var(--stellar-panel)', border: '1px solid var(--stellar-border)', borderRadius: '12px', color: 'var(--stellar-text)' }} />
                  <Legend />
                  <Line type="monotone" dataKey="avgMatch" stroke="var(--stellar-glow)" strokeWidth={3} name="Match médio (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="card-rocket">
              <h2 className="text-xl font-bold mb-4">Distribuição de usuários</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={userDistribution} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} dataKey="value">
                    {userDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--stellar-panel)', border: '1px solid var(--stellar-border)', borderRadius: '12px', color: 'var(--stellar-text)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card-rocket">
            <h2 className="text-xl font-bold mb-4">Skills mais aprendidas</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" stroke="var(--stellar-muted)" />
                <YAxis stroke="var(--stellar-muted)" />
                <Tooltip contentStyle={{ background: 'var(--stellar-panel)', border: '1px solid var(--stellar-border)', borderRadius: '12px', color: 'var(--stellar-text)' }} />
                <Bar dataKey="count" fill="var(--stellar-blue)" name="Aprendizados" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card-rocket" style={{ background: 'linear-gradient(135deg, rgba(92,141,255,0.2), rgba(42,233,255,0.15))' }}>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaGlobeAmericas className="text-3xl text-cyan-200" />
                <h2 className="text-3xl font-extrabold">Impacto social</h2>
              </div>
              <p className="text-slate-300">Dados combinados de governos, parceiros e telemetria RocketSkills.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialImpact.map(metric => (
                <div key={metric.metric} className="micro-card flex items-center gap-3">
                  <metric.icon className="text-2xl text-cyan-200" />
                  <div>
                    <p className="text-sm text-slate-400">{metric.metric}</p>
                    <p className="text-xl font-bold">{metric.value}</p>
                    <span className="text-xs text-slate-500">{metric.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
