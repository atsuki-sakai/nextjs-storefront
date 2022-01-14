
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  }
}
// StrictMode: 問題になるコードをチェックする。
// 外部から画像を取得する際はdomainを追加しないとエラー発生。
