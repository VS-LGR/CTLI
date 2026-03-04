/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;

