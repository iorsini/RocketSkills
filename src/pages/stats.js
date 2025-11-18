import { useState } from 'react';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaPlaneDeparture,
  FaUsers,
  FaSuitcaseRolling,
  FaGlobeAmericas,
  FaClock,
  FaStamp,
  FaSmile,
} from 'react-icons/fa';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function StatsImpactDashboard() {
  const [timeRange, setTimeRange] = useState('6m');

  const platformStats = {
    totalUsers: 15678,
    activeCandidates: 8945,
    activeEmployers: 342,
    activeTrainers: 156,
    totalJobs: 1234,
    jobsFilled: 487,
    avgMatchScore: 82,
    avgTimeToHire: 21,
    skillsLearned: 45623,
    completionRate: 78,
  };

  const matchData = [
    { month: 'Jan', avgMatch: 68, jobs: 45 },
    { month: 'Fev', avgMatch: 72, jobs: 58 },
    { month: 'Mar', avgMatch: 75, jobs: 67 },
    { month: 'Abr', avgMatch: 78, jobs: 78 },
    { month: 'Mai', avgMatch: 80, jobs: 89 },
    { month: 'Jun', avgMatch: 82, jobs: 95 },
  ];

  const skillsData = [
    { name: 'JavaScript', count: 3245 },
    { name: 'React', count: 2890 },
    { name: 'Python', count: 2567 },
    { name: 'Node.js', count: 2134 },
    { name: 'Docker', count: 1876 },
    { name: 'AWS', count: 1654 },
    { name: 'TypeScript', count: 1432 },
    { name: 'SQL', count: 1298 },
  ];

  const userDistribution = [
    { name: 'Candidatos', value: 8945, color: '#9E2A2B' },
    { name: 'Empresas', value: 342, color: '#335C67' },
    { name: 'Formadores', value: 156, color: '#E09F3E' },
  ];

  const impactMetrics = [
    {
      icon: FaClock,
      title: 'Tempo médio até embarque',
      value: '-42%',
      description: 'De 36 dias para 21 dias após usar PathPort.',
    },
    {
      icon: FaPlaneDeparture,
      title: 'Contratações internacionais',
      value: '487',
      description: 'Vistos aprovados com onboarding remoto assistido.',
    },
    {
      icon: FaStamp,
      title: 'Carimbos emitidos',
      value: '45k+',
      description: 'Skills homologadas por mentores certificados.',
    },
    {
      icon: FaSmile,
      title: 'Satisfação',
      value: '4.8/5',
      description: 'Avaliação média de empregadores e candidatos.',
    },
  ];

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/">
              <button className="outline-button">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div className="section-heading">
              <span>Impacto global</span>
              <h1>Painel de indicadores PathPort</h1>
              <p className="text-[var(--pathport-slate)]">
                Reunimos todos os dados de viagem de carreira em uma única tela clara e acessível.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['1m', '3m', '6m', '1y', 'all'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`status-pill ${timeRange === range ? 'active' : ''}`}
                style={
                  timeRange === range
                    ? { background: 'rgba(51,92,103,0.15)', color: 'var(--pathport-teal)' }
                    : {}
                }
              >
                {range === '1m' ? '1 mês' : range === '3m' ? '3 meses' : range === '6m' ? '6 meses' : range === '1y' ? '1 ano' : 'Tudo'}
              </button>
            ))}
          </div>

          <div className="journey-grid">
            {[
              { icon: FaUsers, label: 'Usuários totais', value: platformStats.totalUsers.toLocaleString() },
              { icon: FaSuitcaseRolling, label: 'Vagas em operação', value: platformStats.totalJobs },
              { icon: FaGlobeAmericas, label: 'Hubs ativos', value: '18 cidades' },
              { icon: FaPlaneDeparture, label: 'Embarques confirmados', value: platformStats.jobsFilled },
              { icon: FaStamp, label: 'Carimbos emitidos', value: platformStats.skillsLearned.toLocaleString() },
              { icon: FaSmile, label: 'Match médio', value: `${platformStats.avgMatchScore}%` },
            ].map((stat) => (
              <div key={stat.label} className="pathport-card">
                <div className="flex items-center gap-3">
                  <stat.icon className="text-3xl text-[var(--pathport-crimson)]" />
                  <div>
                    <p className="text-sm text-[var(--pathport-muted)]">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="pathport-card">
              <h2 className="text-2xl mb-4">Evolução da chance de embarque</h2>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={matchData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,92,103,0.2)" />
                  <XAxis dataKey="month" stroke="var(--pathport-muted)" />
                  <YAxis stroke="var(--pathport-muted)" />
                  <Tooltip contentStyle={{ background: '#fff', borderRadius: 16, border: '1px solid var(--pathport-border)' }} />
                  <Legend />
                  <Line type="monotone" dataKey="avgMatch" stroke="#9E2A2B" strokeWidth={3} name="Match médio (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="pathport-card">
              <h2 className="text-2xl mb-4">Distribuição de usuários</h2>
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie data={userDistribution} cx="50%" cy="50%" labelLine={false} outerRadius={110} dataKey="value">
                    {userDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: '#fff', borderRadius: 16, border: '1px solid var(--pathport-border)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="pathport-card">
              <h2 className="text-2xl mb-4">Skills mais carimbadas</h2>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={skillsData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,92,103,0.2)" />
                  <XAxis dataKey="name" stroke="var(--pathport-muted)" />
                  <YAxis stroke="var(--pathport-muted)" />
                  <Tooltip contentStyle={{ background: '#fff', borderRadius: 16, border: '1px solid var(--pathport-border)' }} />
                  <Bar dataKey="count" fill="#E09F3E" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="pathport-card space-y-3">
              <h2 className="text-2xl">Impactos imediatos</h2>
              {impactMetrics.map((metric) => (
                <div key={metric.title} className="ticket-card flex items-center gap-3">
                  <metric.icon className="text-2xl text-[var(--pathport-crimson)]" />
                  <div>
                    <p className="text-sm text-[var(--pathport-muted)]">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-sm text-[var(--pathport-slate)]">{metric.description}</p>
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
