/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Strict Mode remonta efeitos em dev e faz o GIF do hero reiniciar (segundo play).
   * Com false, o GIF corre uma vez e o congelamento no último frame mantém-se alinhado ao timer.
   */
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

