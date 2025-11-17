import Link from 'next/link';
import { FaRocket, FaBriefcase, FaGraduationCap, FaRegStar } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className="space-bg min-h-screen">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* Rocket Animation */}
        <div className="mb-8 relative animate-fade-in">
          <div className="w-64 h-64 relative">
            {/* Rocket SVG simplificado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaRocket 
                className="text-9xl pulse-glow" 
                style={{ color: '#C6A667' }}
              />
            </div>
            {/* Particle trail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full mx-auto mb-1"
                  style={{
                    background: '#C6A667',
                    opacity: 1 - (i * 0.2),
                    animation: `fadeIn 2s infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 
          className="text-7xl md:text-8xl font-extrabold text-center mb-6 animate-fade-in"
          style={{ 
            color: '#C6A667',
            textShadow: '0 0 30px rgba(198, 166, 103, 0.5)',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          ROCKETSKILLS
        </h1>

        {/* Slogan */}
        <p 
          className="text-2xl md:text-3xl text-center mb-12 animate-slide-in-right"
          style={{ color: '#F5EEDC' }}
        >
          Get Ready to Launch Your Career
        </p>

        {/* CTA Button */}
        <Link href="/skill-gap">
          <button className="btn-primary text-xl">
            <FaRocket />
            Discover Your Skill Gap
          </button>
        </Link>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div 
            className="card-rocket text-center hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #C63C3C 0%, #a12f2f 100%)',
                boxShadow: '0 4px 12px rgba(198, 60, 60, 0.3)'
              }}
            >
              <span className="text-3xl">📉</span>
            </div>
            <h3 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#C63C3C',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              5.8%
            </h3>
            <p style={{ color: '#0B1A32', fontSize: '16px', fontWeight: 500 }}>
              Taxa de desemprego
            </p>
          </div>

          {/* Card 2 */}
          <div 
            className="card-rocket text-center hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FF6347 100%)',
                boxShadow: '0 4px 12px rgba(255, 140, 0, 0.3)'
              }}
            >
              <span className="text-3xl">👨‍🎓</span>
            </div>
            <h3 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#FF8C00',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              18.1%
            </h3>
            <p style={{ color: '#0B1A32', fontSize: '16px', fontWeight: 500 }}>
              Desemprego jovem
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="card-rocket text-center hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #66A6FF 0%, #1E3A8A 100%)',
                boxShadow: '0 4px 12px rgba(102, 166, 255, 0.3)'
              }}
            >
              <span className="text-3xl">📚</span>
            </div>
            <h3 
              className="text-4xl font-extrabold mb-2"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              71%
            </h3>
            <p style={{ color: '#0B1A32', fontSize: '16px', fontWeight: 500 }}>
              Precisam de requalificação
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-5xl font-extrabold text-center mb-16"
            style={{ 
              color: '#C6A667',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 - Empresas */}
            <div className="text-center animate-fade-in">
              <div 
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #C6A667 0%, #a88a52 100%)',
                  boxShadow: '0 6px 20px rgba(198, 166, 103, 0.4)'
                }}
              >
                <FaBriefcase className="text-5xl text-white" />
              </div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  color: '#C6A667',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Empresas
              </h3>
              <p style={{ color: '#F5EEDC', fontSize: '16px', lineHeight: '1.6' }}>
                Publique vagas e receba candidatos qualificados com score de compatibilidade
              </p>
            </div>

            {/* Feature 2 - Candidatos */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div 
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #66A6FF 0%, #1E3A8A 100%)',
                  boxShadow: '0 6px 20px rgba(102, 166, 255, 0.4)'
                }}
              >
                <FaRocket className="text-5xl text-white" />
              </div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  color: '#66A6FF',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Candidatos
              </h3>
              <p style={{ color: '#F5EEDC', fontSize: '16px', lineHeight: '1.6' }}>
                Identifique seus gaps de skills e receba trilhas personalizadas de aprendizado
              </p>
            </div>

            {/* Feature 3 - Formadores */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div 
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #3BAA78 0%, #2d8a60 100%)',
                  boxShadow: '0 6px 20px rgba(59, 170, 120, 0.4)'
                }}
              >
                <FaGraduationCap className="text-5xl text-white" />
              </div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  color: '#3BAA78',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Formadores
              </h3>
              <p style={{ color: '#F5EEDC', fontSize: '16px', lineHeight: '1.6' }}>
                Crie micro-cursos sob demanda baseados em necessidades reais do mercado
              </p>
            </div>
          </div>

          {/* Access Buttons */}
          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <Link href="/employer/dashboard">
              <button className="btn-primary">
                <FaBriefcase />
                Acesso Empresas
              </button>
            </Link>
            <Link href="/candidate/dashboard">
              <button className="btn-primary">
                <FaRocket />
                Acesso Candidatos
              </button>
            </Link>
            <Link href="/trainer/dashboard">
              <button className="btn-primary">
                <FaGraduationCap />
                Acesso Formadores
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer 
        className="py-12 px-6 text-center"
        style={{ 
          background: '#1E3A8A',
          borderTop: '2px solid #C6A667'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <Link href="/about" className="hover:text-gold transition-colors" style={{ color: '#F5EEDC' }}>
              Sobre
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors" style={{ color: '#F5EEDC' }}>
              Contato
            </Link>
            <Link href="/privacy" className="hover:text-gold transition-colors" style={{ color: '#F5EEDC' }}>
              Privacidade
            </Link>
          </div>
          <p style={{ color: '#D9D9D9', fontSize: '14px' }}>
            © 2025 RocketSkills. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}