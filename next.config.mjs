/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://api.openweathermap.org/data/'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'http', hostname: 'openweathermap.org' }]
  }
};

export default nextConfig;
