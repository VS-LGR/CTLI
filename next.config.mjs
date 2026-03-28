/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Evita remontagem dupla em dev, que reinicia o GIF antes do snapshot. */
  reactStrictMode: false,
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

