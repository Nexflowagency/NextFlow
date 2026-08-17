import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Schibsted Grotesk', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Fraunces', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0908',
          1: '#0E0C0B',
          2: '#141110',
          3: '#1C1815',
        },
        bone: {
          DEFAULT: '#EDE7DC',
          72: 'rgba(237,231,220,0.72)',
          46: 'rgba(237,231,220,0.46)',
          30: 'rgba(237,231,220,0.30)',
          16: 'rgba(237,231,220,0.16)',
        },
        green: {
          DEFAULT: '#17D98B',
          soft: '#2EE79B',
          deep: '#0FAE70',
        },
        clay: '#D9552E',
        paper: {
          DEFAULT: '#F2EEE6',
          2: '#E7E1D4',
          card: '#FBF9F4',
        },
        'on-paper': '#131110',
      },
      borderColor: {
        line: 'rgba(237,231,220,0.09)',
        'line-mid': 'rgba(237,231,220,0.16)',
        'line-hi': 'rgba(237,231,220,0.28)',
        'line-paper': 'rgba(19,17,16,0.13)',
      },
      maxWidth: {
        shell: '1280px',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
export default config
