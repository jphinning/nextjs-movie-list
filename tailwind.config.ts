import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#2BD17E',
      error: '#EB5757',
      bg: '#093545',
      input: '#224957',
      card: '#092C39',
      white: '#FFFFFF',
    },
    spacing: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '24px',
      7: '32px',
      8: '40px',
      9: '48px',
      10: '64px',
      11: '80px',
      12: '120px',
      13: '160px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            '--tw-prose-headings': 'white',
            '--tw-prose-body': 'white',
            '--tw-prose-links': 'white',
            h1: {
              fontSize: '64px',
              lineHeight: '80px',
            },
            h2: {
              fontSize: '48px',
              lineHeight: '56px',
              margin: '0',
            },
            h3: {
              fontSize: '32px',
              lineHeight: '40px',
            },
            h4: {
              fontSize: '24px',
              lineHeight: '32px',
            },
            h5: {
              fontSize: '20px',
              lineHeight: '24px',
            },
            h6: {
              fontSize: '16px',
              lineHeight: '24px',
            },
            bl: {
              fontSize: '20px',
              lineHeight: '32px',
            },
            b: {
              fontSize: '16px',
              lineHeight: '24px',
            },
            p: {
              fontSize: '14px',
              lineHeight: '24px',
              margin: '0',
            },
            bes: {
              fontSize: '12px',
              lineHeight: '24px',
            },
            caption: {
              fontSize: '14px',
              lineHeight: '16px',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
