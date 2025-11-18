import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRocket, FaStar, FaCertificate, FaMedal, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function ReadyToLaunch() {
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiIcons = [FaStar, FaRocket, FaTrophy, FaMedal, FaCertificate];

  useEffect(() => {
    setShowConfetti(true);
    const timeout = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const stats = {
    skillsMastered: 12,
    learningHours: 156,
    jobMatch: 97
  };

  return (
    <div className="space-bg min-h-screen relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(30)].map((_, i) => {
            const Icon = confettiIcons[Math.floor(Math.random() * confettiIcons.length)];
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                  animation: `fall ${2 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random()}s`,
                  color: '#5c8dff',
                  opacity: 0.7
                }}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>

      <main className="app-shell">
        <div className="stellar-container space-y-8 relative z-20">
          <div className="card-rocket text-center space-y-4">
            <p className="section-tag">Parabéns, astronauta</p>
            <h1 className="text-4xl md:text-5xl font-extrabold">Você está pronto para decolar</h1>
            <p className="text-slate-300">Missões concluídas e passaporte validado pela RocketSkills Space Agency.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/stats">
                <button className="btn-primary">
                  <FaRocket /> Ver impacto
                </button>
              </Link>
              <Link href="/">
                <button className="btn-secondary">
                  Compartilhar missão
                </button>
              </Link>
            </div>
          </div>

          <div className="card-rocket grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Selo Ready to Launch</h2>
              <p className="text-slate-300">Compartilhe o selo nas redes e desbloqueie convites prioritários.</p>
              <div className="flex flex-wrap gap-2">
                {[FaTwitter, FaLinkedin, FaWhatsapp].map((Icon, idx) => (
                  <button key={idx} className="btn-secondary">
                    <Icon />
                    Compartilhar
                  </button>
                ))}
              </div>
            </div>
            <div className="stamp approved text-center">
              <FaRocket className="text-4xl mb-2" />
              READY TO LAUNCH
              <p className="text-xs tracking-[0.3em] mt-2">ROCKETSKILLS CERTIFIED</p>
            </div>
          </div>

          <div className="card-rocket grid gap-4 md:grid-cols-3">
            {[{ label: 'Skills', value: stats.skillsMastered }, { label: 'Horas', value: stats.learningHours }, { label: 'Job match', value: `${stats.jobMatch}%` }].map(stat => (
              <div key={stat.label} className="glass-tile text-center">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
