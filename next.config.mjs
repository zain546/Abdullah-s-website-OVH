/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['abdurkhan11.github.io'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'abdurkhan11.github.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;
