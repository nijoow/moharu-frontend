/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: 임시 image url 를 불러오기 위한 설정
    domains: ['secure.meetupstatic.com'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/apis/:path*',
          destination: `https://api.moharu.site/:path*`,
        },
      ],
    };
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
