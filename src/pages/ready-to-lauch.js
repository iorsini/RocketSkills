import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRocket, FaTrophy, FaClock, FaStar, FaCheckCircle } from 'react-icons/fa';
import { Confetti } from '@/components/Confetti';

export default function ReadyToLaunch() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  const stats = {
    skillsMastered: 12,
    learningHours: 156,
    jobMatch: 97
  };

  return (
    <div className="space-bg min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fade-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animation: `fall ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: '24px',
                opacity: 0.8
              }}
            >
              {['🎉', '⭐', '🚀', '✨', '🏆'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Congratulations Banner */}
        <div 
          className="text-center mb-8 p-6 rounded-2xl animate-fade-in"
          style={{
            background: 'linear-gradient(135deg, #C6A667 0%, #FFD700 100%)',
            border: '3px solid #C6A667',
            boxShadow: '0 8px 32px rgba(198, 166, 103, 0.4)'
          }}
        >
          <h1 
            className="text-5xl md:text-6xl font-extrabold mb-4"
            style={{ 
              color: '#0B1A32',
              fontFamily: 'Montserrat, sans-serif',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Parabéns, Astronauta! 🎉
          </h1>
          <p 
            className="text-2xl font-semibold"
            style={{ color: '#1E3A8A' }}
          >
            Você está pronto para decolar!
          </p>
        </div>

        {/* Main Stamp */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div 
            className="stamp approved relative"
            style={{
              width: '320px',
              height: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'stamp-drop 0.5s ease-out 0.5s backwards'
            }}
          >
            <style jsx>{`
              @keyframes stamp-drop {
                from {
                  transform: translateY(-100px) rotate(-8deg) scale(0);
                  opacity: 0;
                }
                to {
                  transform: translateY(0) rotate(-8deg) scale(1);
                  opacity: 1;
                }
              }
            `}</style>

            {/* Outer circle */}
            <div
              className="absolute inset-0 rounded-lg border-6"
              style={{
                borderColor: '#3BAA78',
                opacity: 0.3
              }}
            />

            {/* Rocket Icon */}
            <FaRocket 
              className="text-8xl mb-4"
              style={{ color: '#C6A667' }}
            />

            {/* Main Text */}
            <div
              className="text-4xl font-extrabold mb-2"
              style={{
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.1em'
              }}
            >
              READY TO LAUNCH
            </div>

            {/* Bottom Text */}
            <div
              className="text-lg font-bold"
              style={{
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              ROCKETSKILLS CERTIFIED
            </div>

            {/* Date */}
            <div
              className="text-sm mt-2"
              style={{
                color: '#3BAA78',
                opacity: 0.8
              }}
            >
              Approved: {new Date().toLocaleDateString('pt-BR')}
            </div>

            {/* Stars decoration */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-160px)`,
                  color: '#C6A667',
                  opacity: 0.6,
                  animation: `twinkle ${2 + i * 0.3}s infinite`
                }}
              >
                ⭐
              </div>
            ))}
          </div>
        </div>

        {/* Signature */}
        <div 
          className="text-center mb-8 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <div 
            className="inline-block px-6 py-3 rounded-lg"
            style={{
              background: 'rgba(59, 170, 120, 0.1)',
              border: '2px solid #3BAA78'
            }}
          >
            <div className="flex items-center gap-2 text-lg font-semibold" style={{ color: '#3BAA78' }}>
              <FaCheckCircle />
              AI Verification Complete ✓
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div 
            className="card-rocket text-center hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #C6A667 0%, #FFD700 100%)',
                boxShadow: '0 4px 12px rgba(198, 166, 103, 0.3)'
              }}
            >
              <FaTrophy className="text-3xl text-white" />
            </div>
            <div 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.skillsMastered}
            </div>
            <div className="text-sm font-semibold" style={{ color: '#1E3A8A' }}>
              Skills Masterizadas
            </div>
          </div>

          <div 
            className="card-rocket text-center hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: '1.2s' }}
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #66A6FF 0%, #1E3A8A 100%)',
                boxShadow: '0 4px 12px rgba(102, 166, 255, 0.3)'
              }}
            >
              <FaClock className="text-3xl text-white" />
            </div>
            <div 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.learningHours}
            </div>
            <div className="text-sm font-semibold" style={{ color: '#1E3A8A' }}>
              Horas de Aprendizado
            </div>
          </div>

          <div 
            className="card-rocket text-center hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: '1.4s' }}
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #3BAA78 0%, #2d8a60 100%)',
                boxShadow: '0 4px 12px rgba(59, 170, 120, 0.3)'
              }}
            >
              <FaStar className="text-3xl text-white" />
            </div>
            <div 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {stats.jobMatch}%
            </div>
            <div className="text-sm font-semibold" style={{ color: '#1E3A8A' }}>
              Match com Vagas
            </div>
          </div>
        </div>

        {/* Achievement Message */}
        <div 
          className="card-rocket text-center mb-8 animate-fade-in"
          style={{ 
            animationDelay: '1.6s',
            background: 'linear-gradient(135deg, #F5EEDC 0%, #E5DCC8 100%)',
            border: '3px solid #C6A667'
          }}
        >
          <div className="text-6xl mb-4">🏆</div>
          <h2 
            className="text-3xl font-extrabold mb-4"
            style={{ 
              color: '#0B1A32',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Conquista Desbloqueada!
          </h2>
          <p className="text-lg mb-6" style={{ color: '#1E3A8A' }}>
            Você completou sua jornada de aprendizado e está qualificado para as melhores oportunidades do mercado!
          </p>
          
          <div 
            className="inline-block px-6 py-3 rounded-lg mb-6"
            style={{
              background: 'rgba(59, 170, 120, 0.1)',
              border: '2px solid #3BAA78'
            }}
          >
            <div className="text-sm font-semibold mb-1" style={{ color: '#1E3A8A' }}>
              Nível de Prontidão
            </div>
            <div 
              className="text-3xl font-extrabold"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              ASTRONAUTA CERTIFICADO
            </div>
          </div>

          <p className="text-sm italic" style={{ color: '#1E3A8A' }}>
            "O céu não é o limite quando há pegadas na lua." 🌙
          </p>
        </div>

        {/* CTA Button */}
        <div 
          className="text-center animate-fade-in"
          style={{ animationDelay: '1.8s' }}
        >
          <Link href="/candidate/matched-jobs">
            <button className="btn-primary text-xl px-12 py-6 mb-4">
              <FaRocket />
              Candidatar-se às Vagas Matched
            </button>
          </Link>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link href="/candidate/passport-id">
              <button className="btn-secondary">
                Ver Meu Passaporte Completo
              </button>
            </Link>
            <Link href="/candidate/dashboard">
              <button className="btn-secondary">
                Voltar ao Dashboard
              </button>
            </Link>
          </div>
        </div>

        {/* Share Section */}
        <div 
          className="mt-8 card-rocket text-center animate-fade-in"
          style={{ animationDelay: '2s' }}
        >
          <h3 
            className="text-xl font-bold mb-4"
            style={{ color: '#0B1A32' }}
          >
            Compartilhe sua conquista! 🎉
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              style={{
                background: '#1DA1F2',
                color: 'white'
              }}
            >
              🐦 Twitter
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              style={{
                background: '#0A66C2',
                color: 'white'
              }}
            >
              💼 LinkedIn
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              style={{
                background: '#25D366',
                color: 'white'
              }}
            >
              💬 WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}