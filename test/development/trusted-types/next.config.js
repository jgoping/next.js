module.exports = {
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "require-trusted-types-for 'script'",
          },
        ],
      },
    ]
  },
}
