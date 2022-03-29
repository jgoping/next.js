module.exports = {
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "require-trusted-types-for 'script'",
          },
        ],
      },
    ]
  },
}
