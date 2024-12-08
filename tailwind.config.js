/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                primary: '#00C4F4',
                secondary: '#030B15',
                accent: '#CFCFCF',
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
            backgroundImage: {
                'hero-pattern': "url('./src/assets/hero-bg.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            },
        },

        plugins: [],
    },
};
