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
// mode; 'jit : 開発者モードでビルド時間を大幅に軽減
