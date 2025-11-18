import { useState } from 'react';
import Link from 'next/link';
import { FaBriefcase, FaUsers, FaRocket, FaChartLine, FaPlus, FaBrain, FaTrophy } from 'react-icons/fa';

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

  return (
    <div className="space-bg min-h-screen">
      <main className="app-shell">
        <div className="stellar-container space-y-10">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="badge-chip">Employer Control Center</div>
              <h1 className="text-4xl font-extrabold mt-3 flex items-center gap-3">
                <FaBriefcase className="text-cyan-300" /> Talent Command Deck
              </h1>
              <p className="text-slate-300">TechCorp • squads conectados e prontos para missão.</p>
            </div>
            <Link href="/employer/job-create">
              <button className="btn-primary">
                <FaPlus /> Nova Vaga
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[{ label: 'Vagas Ativas', value: stats.activeJobs }, { label: 'Candidatos', value: stats.totalApplicants }, { label: 'Match Médio', value: `${stats.avgMatchScore}%` }, { label: 'Vagas Preenchidas', value: stats.positionsFilled }, { label: 'Tempo Médio', value: `${stats.avgTimeToHire} dias` }, { label: 'Em treinamento', value: stats.candidatesInTraining }].map(item => (
              <div key={item.label} className="glass-tile text-center">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-rocket space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">vagas em órbita</p>
                  <h2 className="text-2xl font-bold">Missões em andamento</h2>
                </div>
                <FaChartLine className="text-2xl text-cyan-200" />
              </div>
              <div className="space-y-4">
                {activeJobs.map(job => (
                  <div key={job.id} className="micro-card space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{job.title}</p>
                        <p className="text-xs text-slate-400">{job.applicants} candidatos • {job.daysOpen} dias</p>
                      </div>
                      <span className="status-pill status-ready">{job.avgMatch}% match</span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                      <span className="token-pill">Top match {job.topMatch}%</span>
                      <span className="token-pill">{job.inTraining} em treinamento</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-rocket space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">talentos em destaque</p>
                  <h2 className="text-2xl font-bold">Prontos para entrevista</h2>
                </div>
                <FaUsers className="text-2xl text-cyan-200" />
              </div>
              <div className="space-y-3">
                {topCandidates.map(candidate => (
                  <div key={candidate.name} className="micro-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{candidate.name}</p>
                        <p className="text-xs text-slate-400">{candidate.job}</p>
                      </div>
                      <span className={`status-pill ${candidate.status === 'ready' ? 'status-ready' : 'status-training'}`}>
                        {candidate.match}%
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {candidate.skills.map(skill => (
                        <span key={skill} className="token-pill">{skill}</span>
                      ))}
                    </div>
                    <div className="text-xs text-slate-400 mt-2">{candidate.eta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card-rocket">
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="text-2xl text-cyan-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">tempo de contratação</p>
                  <h3 className="text-xl font-bold">{stats.avgTimeToHire} dias</h3>
                </div>
              </div>
              <div className="energy-bar">
                <span style={{ width: `${Math.min(stats.avgMatchScore, 100)}%` }} />
              </div>
            </div>
            <div className="card-rocket">
              <div className="flex items-center gap-3 mb-4">
                <FaBrain className="text-2xl text-cyan-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Squads em treinamento</p>
                  <h3 className="text-xl font-bold">{stats.candidatesInTraining}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-300">Candidatos em trilhas com mentoria ativa.</p>
            </div>
            <div className="card-rocket">
              <div className="flex items-center gap-3 mb-4">
                <FaTrophy className="text-2xl text-cyan-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Satisfação</p>
                  <h3 className="text-xl font-bold">4.8/5</h3>
                </div>
              </div>
              <p className="text-sm text-slate-300">Baseado em {stats.activeJobs} squads avaliados.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
