/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',   
        // './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                headerBg:       '#005FFF',
                textPrimary:    '#FFFFFF',
                pageBg:         '#E4E8EF',
            },
        },
    },
    plugins: [], 
  };