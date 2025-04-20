/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                primary: '#006A4E',
                secondary: '#EEF2FF',
                accent: '#CFCFCF',
                dark: '#F42A41',

                // tahiti: {
                //     100: '#cffafe',
                //     200: '#a5f3fc',
                //     300: '#67e8f9',
                //     400: '#22d3ee',
                //     500: '#06b6d4',
                //     600: '#0891b2',
                //     700: '#0e7490',
                //     800: '#155e75',
                //     900: '#164e63',
                // },
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-360deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                wiggle: 'wiggle 0.5s ease-in-out infinite',
            },
            backgroundImage: {
                'hero-pattern': "url('./src/assets/hero-bg.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            },
        },

        plugins: [
            plugin(function ({ addUtilities, theme }) {
                const spacing = theme('spacing');
                const utilities = Object.entries(spacing).reduce(
                    (acc, [key, value]) => {
                        acc[`.gap-x-${key}`] = { 'column-gap': value };
                        acc[`.gap-y-${key}`] = { 'row-gap': value };
                        return acc;
                    },
                    {}
                );
                addUtilities(utilities, ['responsive', 'hover']);
            }),
        ],
        plugins: [require('@tailwindcss/typography')],
        variants: {
            extend: {
                margin: ['rtl', 'ltr'],
                padding: ['rtl', 'ltr'],
            },
        },
    },
};
