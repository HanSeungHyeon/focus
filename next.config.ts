import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 배포 시 레포지토리 이름을 basePath로 설정해야 할 수도 있습니다.
  // 예: https://<username>.github.io/focus/ 인 경우 '/focus'로 설정
  // basePath: '/focus',
};

export default nextConfig;
