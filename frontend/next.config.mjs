/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/products/:path*',
          destination: 'http://localhost:8000/products/:path*', // URL del backend Django
        },
      ];
    },
  };
  
  export default nextConfig;