import Link from 'next/link';
import { FaRocket, FaArrowRight } from 'react-icons/fa';

export default function PassportCover() {
  return (
    <div className="space-bg min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Passport Cover */}
        <div 
          className="passport-cover animate-fade-in"
          style={{
            aspectRatio: '3/4',
            background: 'linear-gradient(135deg, #0B1A32 0%, #1E3A8A 100%)',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            transform: 'perspective(1000px) rotateY(-5deg)'
          }}
        >
          {/* Holographic pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(198, 166, 103, 0.3) 10px, rgba(198, 166, 103, 0.3) 20px)',
              borderRadius: '12px'
            }}
          />

          {/* Top Text */}
          <div 
            className="absolute top-8 left-0 right-0 text-center"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              fontWeight: 800,
              color: '#C6A667',
              letterSpacing: '0.2em'
            }}
          >
            PASSAPORTE DE SKILLS
          </div>

          {/* Central Emblem */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="passport-emblem flex items-center justify-center">
              {/* Orbital rings */}
              <div 
                className="absolute inset-0 rounded-full border-2 animate-spin"
                style={{
                  borderColor: '#C6A667',
                  opacity: 0.3,
                  animationDuration: '20s'
                }}
              />
              <div 
                className="absolute inset-2 rounded-full border-2 animate-spin"
                style={{
                  borderColor: '#C6A667',
                  opacity: 0.2,
                  animationDuration: '15s',
                  animationDirection: 'reverse'
                }}
              />
              
              {/* Rocket Icon */}
              <FaRocket 
                className="text-6xl relative z-10 pulse-glow"
                style={{ color: '#C6A667' }}
              />

              {/* Stars around */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: '#C6A667',
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-70px)`,
                    opacity: 0.6,
                    animation: `twinkle ${2 + i * 0.3}s infinite`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div 
            className="absolute bottom-12 left-0 right-0 text-center"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fontWeight: 800,
              color: '#C6A667',
              letterSpacing: '0.2em'
            }}
          >
            ROCKETSKILLS SPACE AGENCY
          </div>

          {/* Serial Number */}
          <div 
            className="absolute bottom-4 right-6 text-xs"
            style={{
              color: '#D9D9D9',
              fontFamily: 'Inter, monospace',
              letterSpacing: '0.1em'
            }}
          >
            RS-2025-{Math.floor(Math.random() * 100000).toString().padStart(6, '0')}
          </div>

          {/* AI-Powered Badge */}
          <div 
            className="absolute bottom-4 left-6 px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(102, 166, 255, 0.2)',
              border: '1px solid #66A6FF',
              color: '#66A6FF'
            }}
          >
            AI-Powered
          </div>
        </div>

        {/* Open Button */}
        <div className="mt-8 text-center">
          <Link href="/candidate/passport-id">
            <button className="btn-primary text-lg px-8 py-4">
              Abrir Passaporte
              <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Back to Dashboard */}
        <div className="mt-4 text-center">
          <Link href="/candidate/dashboard">
            <button className="btn-secondary">
              Voltar ao Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}