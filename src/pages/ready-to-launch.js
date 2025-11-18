import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlaneDeparture, FaStamp, FaWhatsapp, FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa';

export default function ReadyToTravel() {
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiIcons = [FaPlaneDeparture, FaStamp];

  useEffect(() => {
    setShowConfetti(true);
    const timeout = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const stats = {
    skillsMastered: 12,
    learningHours: 156,
    jobMatch: 97,
  };

  return (
    <div className="journey-bg min-h-screen relative overflow-hidden">
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
                  color: '#E09F3E',
                  opacity: 0.7,
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

      <main className="pathport-shell">
        <div className="terminal-container space-y-8 relative z-20">
          <div className="pathport-card text-center space-y-4">
            <p className="tag-chip">Parabéns, viajante</p>
            <h1 className="text-4xl md:text-5xl">Seu passaporte PathPort está validado</h1>
            <p className="text-[var(--pathport-slate)]">Carimbos revisados e vistos emitidos. Agora é só seguir para o portão indicado.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/stats">
                <button className="boarding-button">
                  <FaPlaneDeparture /> Ver impacto
                </button>
              </Link>
              <Link href="/">
                <button className="outline-button">Voltar à central</button>
              </Link>
            </div>
          </div>

          <div className="pathport-card grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl">Selo PathPort Approved</h2>
              <p className="text-[var(--pathport-slate)]">Compartilhe nas redes e convide a sua tripulação.</p>
              <div className="flex flex-wrap gap-2">
                {[FaLinkedin, FaWhatsapp, FaEnvelopeOpenText].map((Icon, idx) => (
                  <button key={idx} className="outline-button">
                    <Icon /> Compartilhar
                  </button>
                ))}
              </div>
            </div>
            <div className="stamp text-center" style={{ borderColor: '#9E2A2B', color: '#9E2A2B' }}>
              <FaStamp className="text-4xl mb-2" />
              PATHPORT APPROVED
              <p className="text-xs tracking-[0.3em] mt-2">Todos os carimbos revisados</p>
            </div>
          </div>

          <div className="journey-grid">
            {[{ label: 'Skills homologadas', value: stats.skillsMastered }, { label: 'Horas registradas', value: stats.learningHours }, { label: 'Chance de embarque', value: `${stats.jobMatch}%` }].map((stat) => (
              <div key={stat.label} className="ticket-card text-center">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
