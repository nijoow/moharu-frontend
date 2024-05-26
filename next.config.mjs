/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: 임시 image url 를 불러오기 위한 설정
    domains: [
      'secure.meetupstatic.com',
      'lh3.googleusercontent.com',
      'k.kakaocdn.net',
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // TODO: 임시로 적용
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
