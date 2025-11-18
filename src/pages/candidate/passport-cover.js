import Link from 'next/link';
import { FaRocket, FaArrowRight } from 'react-icons/fa';

export default function PassportCover() {
  return (
    <div className="space-bg min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="passport-cover animate-fade-in" style={{ aspectRatio: '3/4', boxShadow: '0 30px 70px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0 opacity-15" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(90,200,255,0.2) 14px, rgba(90,200,255,0.2) 28px)' }} />
          <div className="absolute top-8 left-0 right-0 text-center text-slate-200 tracking-[0.3em] text-sm">
            PASSAPORTE DE SKILLS
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="passport-emblem flex items-center justify-center">
              <FaRocket className="text-6xl text-cyan-300" />
            </div>
          </div>
          <div className="absolute bottom-16 left-0 right-0 text-center text-slate-200 tracking-[0.3em] text-sm">
            ROCKETSKILLS SPACE AGENCY
          </div>
          <div className="absolute bottom-6 right-6 text-xs text-slate-400 tracking-[0.3em]">
            RS-2025-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}
          </div>
          <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-cyan-200">
            AI POWERED
          </div>
        </div>

        <div className="text-center space-y-3">
          <Link href="/candidate/passport-id">
            <button className="btn-primary text-lg px-8 py-4">
              Abrir Passaporte
              <FaArrowRight />
            </button>
          </Link>
          <Link href="/candidate/dashboard">
            <button className="btn-secondary">Voltar ao Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
