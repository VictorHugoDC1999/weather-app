/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'http', hostname: 'openweathermap.org' }]
  }
};

export default nextConfig;
