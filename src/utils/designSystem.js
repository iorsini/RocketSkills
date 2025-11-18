export const designSystem = {
  colors: {
    background: {
      sand: '#FFF3B0',
      cream: '#FFF9E7',
      linen: '#FFEBC1',
      card: '#FFFFFF',
      tealMist: '#E4EFEF'
    },
    accent: {
      crimson: '#9E2A2B',
      saffron: '#E09F3E',
      teal: '#335C67',
      port: '#8C4A3F',
      sky: '#A6D8D4'
    },
    text: {
      primary: '#1F2A2C',
      secondary: '#3B4B55',
      muted: '#5C6F73'
    },
    status: {
      success: '#3E9E6C',
      warning: '#E09F3E',
      info: '#335C67',
      alert: '#C25252'
    },
    borders: 'rgba(51, 92, 103, 0.18)',
    paper: 'rgba(255, 243, 176, 0.65)'
  },
  typography: {
    headings: '"Playfair Display", "DM Serif Display", Georgia, serif',
    body: '"Poppins", "Source Sans 3", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    monospace: '"Space Mono", "IBM Plex Mono", monospace'
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
    badge: '999px',
    sm: '12px',
    md: '18px',
    lg: '26px',
    xl: '34px'
  },
  iconography: {
    baseSize: 20,
    badgeSize: 48,
    halo: 'drop-shadow(0 8px 18px rgba(51, 92, 103, 0.25))'
  },
  components: {
    card: {
      background: 'linear-gradient(135deg, rgba(255, 247, 218, 0.95), rgba(255, 233, 193, 0.9))',
      border: '1px solid rgba(51, 92, 103, 0.12)',
      radius: '26px'
    },
    buttonPrimary: {
      background: 'linear-gradient(120deg, #9E2A2B, #E09F3E)',
      color: '#FFF9E7',
      radius: '14px'
    },
    buttonSecondary: {
      background: '#FFFFFF',
      border: '1px dashed rgba(51, 92, 103, 0.4)',
      color: '#335C67',
      radius: '14px'
    },
    badge: {
      background: 'rgba(51, 92, 103, 0.08)',
      color: '#335C67',
      border: '1px solid rgba(51, 92, 103, 0.15)'
    }
  }
};
