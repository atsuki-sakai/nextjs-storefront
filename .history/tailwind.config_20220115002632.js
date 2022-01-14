module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

// prefix: 'tw-'をつけて名前の衝突を避ける
// require('daisyui): dreamsUIを追加します
