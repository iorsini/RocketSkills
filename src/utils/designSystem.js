export const designSystem = {
  colors: {
    background: {
      base: '#010718',
      layer: '#050f2b',
      panel: '#0b1f3f',
      elevated: '#142d63',
      highlight: '#1f3d80'
    },
    accent: {
      primary: '#5C8DFF',
      secondary: '#8A7BFF',
      cyan: '#2AE9FF',
      mint: '#55F8C0',
      amber: '#F8C756'
    },
    text: {
      primary: '#ECF2FF',
      secondary: '#94A8D8',
      muted: '#5C6C8F'
    },
    status: {
      success: '#34D399',
      warning: '#FDE68A',
      info: '#38BDF8',
      alert: '#FB7185'
    },
    borders: 'rgba(255, 255, 255, 0.08)',
    glass: 'rgba(255, 255, 255, 0.04)'
  },
  typography: {
    headings: 'Space Grotesk, Montserrat, sans-serif',
    body: 'Inter, "IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    monospace: 'IBM Plex Mono, SFMono-Regular, Menlo, monospace'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  radii: {
    sm: '10px',
    md: '16px',
    lg: '22px',
    xl: '28px'
  },
  iconography: {
    baseSize: 20,
    badgeSize: 48,
    halo: 'drop-shadow(0 0 18px rgba(90, 200, 255, 0.35))'
  },
  components: {
    card: {
      background: 'linear-gradient(135deg, rgba(17, 34, 74, 0.9), rgba(8, 16, 35, 0.85))',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      radius: '22px'
    },
    buttonPrimary: {
      background: 'linear-gradient(120deg, #2AE9FF, #5C8DFF)',
      color: '#010718',
      radius: '12px'
    },
    buttonSecondary: {
      background: 'transparent',
      border: '1px solid rgba(42, 233, 255, 0.5)',
      color: '#D6E3FF',
      radius: '12px'
    },
    badge: {
      background: 'rgba(90, 200, 255, 0.15)',
      color: '#8AFFFF',
      border: '1px solid rgba(90, 200, 255, 0.35)'
    }
  }
};
