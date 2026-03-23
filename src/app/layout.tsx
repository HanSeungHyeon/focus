import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus Coffee | 집중을 위한 완벽한 한 잔",
  description: "어두운 분위기의 프리미엄 커피숍 Focus입니다. 본연의 맛에 집중하며 조용한 공간을 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css"
        />
        <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js" async></script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white selection:bg-amber-800/60 transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
