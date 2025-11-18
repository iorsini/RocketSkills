import { useState } from "react";
import Link from "next/link";
import {
  FaPassport,
  FaSuitcaseRolling,
  FaChalkboardTeacher,
  FaTimes,
  FaBars,
  FaChevronRight,
  FaPlaneDeparture,
} from "react-icons/fa";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const hubLinks = [
    {
      label: "Painel do candidato",
      description: "Passaporte, carimbos e recomendações em um só lugar",
      icon: FaPassport,
      accent: "#9E2A2B",
      href: "/candidate/dashboard",
    },
    {
      label: "Painel do empregador",
      description: "Rotas de talentos, vagas e terminais de embarque",
      icon: FaSuitcaseRolling,
      accent: "#335C67",
      href: "/employer/dashboard",
    },
    {
      label: "Painel do formador",
      description: "Trilhas, turmas e acompanhamentos em tempo real",
      icon: FaChalkboardTeacher,
      accent: "#E09F3E",
      href: "/trainer/dashboard",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-6 left-6 z-30 flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-lg border border-[rgba(51,92,103,0.2)] text-[var(--pathport-teal)]"
        aria-label="Abrir mapa de portões"
      >
        <FaBars />
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(51,92,103,0.3)] backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-[420px] bg-[#fff9f0] border-r border-[rgba(51,92,103,0.15)] z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-[rgba(51,92,103,0.15)]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">Mapa de portões</p>
              <h2 className="text-2xl font-semibold text-[var(--pathport-ink)]">PathPort</h2>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="w-10 h-10 rounded-2xl bg-white border border-[rgba(51,92,103,0.15)] flex items-center justify-center"
            >
              <FaTimes className="text-[var(--pathport-teal)]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {hubLinks.map((hub) => (
              <Link
                key={hub.label}
                href={hub.href}
                onClick={() => setIsSidebarOpen(false)}
                className="block"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white border border-[rgba(51,92,103,0.12)] p-6 shadow-lg shadow-[rgba(51,92,103,0.05)]">
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(135deg, ${hub.accent}15, transparent)` }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${hub.accent}11`,
                        color: hub.accent,
                      }}
                    >
                      <hub.icon className="text-2xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-[var(--pathport-ink)]">{hub.label}</h3>
                        <FaChevronRight className="text-[var(--pathport-muted)]" />
                      </div>
                      <p className="text-sm text-[var(--pathport-slate)] leading-relaxed">{hub.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="px-6 py-5 border-t border-[rgba(51,92,103,0.15)] bg-white/70">
            <div className="flex items-center gap-3 text-[var(--pathport-muted)] text-sm">
              <FaPlaneDeparture />
              Desenvolvido pela equipa RocketSkills
            </div>
          </div>
        </div>
      </aside>

      <div>{children}</div>
    </>
  );
}
