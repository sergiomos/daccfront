/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**pharmacross.eu',
        port: '',
        pathname: '/wp-content/uploads/thumbs/2018/12/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: '**cdn.videndummediasolutions.com',
        port: '',
        pathname: '/fileadmin/Manfrotto/Global/Contents/Shopping-Assistant/tripod-buying-guide/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: '**ecologicodasaguas.com.br',
        port: '',
        pathname: '/wp-content/uploads/2024/03/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
