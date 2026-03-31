/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/AboutUs",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/Products",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/DevLogs",
        destination: "/logs",
        permanent: true,
      },
      {
        source: "/Employ",
        destination: "/join",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
