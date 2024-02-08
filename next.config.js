/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/api/character/avatar/**"
      }
    ]
  }
};

module.exports = nextConfig;
