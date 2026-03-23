"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import logoImg from "../../public/images/logo.webp";
import shop1Img from "../../public/images/shop1.webp";
import shop2Img from "../../public/images/shop2.jpg";
import shop3Img from "../../public/images/shop3.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as any } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.3, 0.4, 1], [0, 0, 1, 1, 0, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [0, 0, 1, 1]);

  return (
    <main className="relative w-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Image src={logoImg} alt="FOCUS Logo" width={32} height={32} className="w-8 h-8 rounded-full" />
          <div className="text-2xl font-black tracking-tighter text-white">FOCUS</div>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide text-white/60">
          <a href="/" className="hover:text-white transition-colors">MAIN</a>
          <a href="/menu" className="hover:text-white transition-colors">MENU</a>
          <a href="/#story" className="hover:text-white transition-colors">STORY</a>
          <a href="/#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
        <div className="w-[100px] hidden md:block"></div> {/* Spacer for symmetry */}
      </nav>

      {/* Hero Container for Scroll Effect */}
      <div id="main" ref={scrollRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
          {/* Background Images Layer without Border/Frame to hide aspect ratio differences */}
          <div className="absolute inset-0 w-full h-full p-6 md:p-12 pointer-events-none">
            <motion.div style={{ opacity: opacity1 }} className="absolute inset-4 md:inset-12">
              <Image src={shop1Img} alt="Shop 1" fill className="object-contain opacity-60" priority />
            </motion.div>
            <motion.div style={{ opacity: opacity2 }} className="absolute inset-4 md:inset-12">
              <Image src={shop2Img} alt="Shop 2" fill className="object-contain opacity-60" priority />
            </motion.div>
            <motion.div style={{ opacity: opacity3 }} className="absolute inset-4 md:inset-12">
              <Image src={shop3Img} alt="Shop 3" fill className="object-contain opacity-60" priority />
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]/80 z-10 pointer-events-none" />

          {/* Hero Content (Inside the frame) */}
          <div className="relative z-20 h-full flex items-center justify-center px-6 text-center">
            <motion.div
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] border border-white/20 rounded-full text-white/80 uppercase">
                The Essence of Deep Taste
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
                <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-8">FOCUS</span>
              </h1>
              <p className="max-w-xl mx-auto text-lg md:text-xl text-white/60 font-medium leading-relaxed">
                본연의 맛에 집중하는 시간. 소음에서 벗어나 <br className="hidden md:block" />
                당신만의 가치에 몰입할 수 있는 완벽한 공간을 제공합니다.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
                <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all duration-300">
                  오시는 길
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">CONTACT US</h2>
            <p className="text-white/40 text-lg">오늘 당신의 농도는 어떠신가요?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto">
            <div className="p-10 double-bezel space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-accent font-black tracking-widest text-xs uppercase mb-2">
                  <MapPin className="w-3 h-3" /> Location
                </div>
                <p className="text-xl font-bold text-white">충남 천안시 동남구 먹거리8길 15 102호 1층 우측상가</p>
                <p className="text-white/40 text-sm">Follow the light inside the narrow alley.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-accent font-black tracking-widest text-xs uppercase mb-2">
                  <Clock className="w-3 h-3" /> Service
                </div>
                <p className="text-xl font-bold text-white">Everyday 12:00 - 22:00</p>
                <p className="text-white/40 text-sm">Last order 21:30</p>
              </div>
            </div>

            <div className="p-10 double-bezel flex flex-col justify-center items-center text-center space-y-6">
              <h4 className="text-2xl font-black text-white">FOCUS ANYTIME</h4>
              <p className="text-white/40 text-sm leading-relaxed">
                공간 대여 및 단체 예약 문의는 아래 버튼을 통해 <br />
                연락 주시면 정성껏 답변 드리겠습니다.
              </p>
              <button className="w-full py-4 bg-white text-black font-black rounded-xl hover:bg-white/80 transition-colors tracking-widest flex items-center justify-center gap-2">
                TALK TO US <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <div className="text-3xl font-black tracking-tighter text-white/10 mb-6">FOCUS COFFEE BREWERS</div>
        <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
          &copy; 2026 FOCUS. All rights reserved. Designed with Supanova.
        </p>
      </footer>
    </main>
  );
}
