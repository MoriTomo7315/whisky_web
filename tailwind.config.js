/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: { 
      colors: {
        'amazon': '#FF9900',
        'rakuten': '#BF0000',
        'whisky': "#E57931",
      },
    },
    fontFamily: {
      body: [
        'ヒラギノ角ゴ Pro', 
        'Hiragino Kaku Gothic Pro', 
        'メイリオ', 
        'Meiryo', 
        'Osaka', 
        'ＭＳ Ｐゴシック', 
        'MS PGothic', 
        'MS Gothic', 
        'ＭＳ ゴシック', 
        'Helvetica Neue', 
        'Helvetica', 
        'Arial', 
        'sans-serif',
      ]
    }
  },
  plugins: [],
}

