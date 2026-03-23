"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import shop1Img from "../../public/images/shop1.webp";
import shop2Img from "../../public/images/shop2.jpg";
import shop3Img from "../../public/images/shop3.webp";

// Menu images
import americanoImg from "../public/images/아메리카노.webp";
import espressoImg from "../public/images/에스프레소.webp";
import cafeLatteImg from "../public/images/카페라떼.jpg";
import excellentLatteImg from "../public/images/엑설런트 라떼.webp";
import mintGatoImg from "../public/images/민트가토.webp";
import adeImg from "../public/images/에이드1.webp";
import dessert1Img from "../public/images/디저트.webp";
import dessert2Img from "../public/images/디저트2.webp";
import dessert3Img from "../public/images/디저트3.jpg";

const menuShowcase = [
  { id: "americano", name: "Americano", image: americanoImg },
  { id: "espresso", name: "Espresso", image: espressoImg },
  { id: "cafeLatte", name: "Cafe Latte", image: cafeLatteImg },
  { id: "excellentLatte", name: "Excellent Latte", image: excellentLatteImg },
  { id: "mintGato", name: "Mint Gato", image: mintGatoImg },
  { id: "ade1", name: "Lemon Ade", image: adeImg },
  { id: "dessert1", name: "Signature Dessert", image: dessert1Img },
  { id: "dessert2", name: "Special Dessert", image: dessert2Img },
  { id: "dessert3", name: "Cannelé", image: dessert3Img },
];

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.3, 0.4, 1], [0, 0, 1, 1, 0, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [0, 0, 1, 1]);

  // --- Menu carousel auto-scroll ---
  const carouselRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number>(0);
  const speedRef = useRef(0.8); // px per frame

  const autoScroll = useCallback(() => {
    const el = carouselRef.current;
    if (el && !paused) {
      el.scrollLeft += speedRef.current;
      // seamless loop: when we scroll past the first set, jump back
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
    }
    rafRef.current = requestAnimationFrame(autoScroll);
  }, [paused]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(rafRef.current);
  }, [autoScroll]);

  // --- Mouse drag scroll ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = carouselRef.current?.scrollLeft ?? 0;
    setPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    carouselRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setPaused(false);
  };

  const handleInteractionStart = () => setPaused(true);
  const handleInteractionEnd = () => {
    if (!isDragging.current) setPaused(false);
  };

  // duplicate items for seamless loop
  const loopItems = [...menuShowcase, ...menuShowcase];

  return (
    <main className="relative w-full">
      <Header activePage="/" />

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

      {/* Menu Showcase Section */}
      <section id="menu" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="space-y-12">
          <div className="text-center space-y-4 px-6">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">OUR MENU</h2>
            <p className="text-white/40 text-lg">포커스만의 감각이 어우러진 메뉴를 확인해보세요.</p>
          </div>

          {/* Auto-scrolling Carousel */}
          <div className="relative">
            {/* Left / Right fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              className="flex gap-5 overflow-x-auto px-8 md:px-24 pb-4 scrollbar-hide select-none cursor-grab active:cursor-grabbing"
            >
              {loopItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 group relative w-[260px] md:w-[300px] aspect-square rounded-3xl overflow-hidden border border-white/10"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className="bg-black/70 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest backdrop-blur-md border border-white/10 text-white">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center px-6">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all duration-300 tracking-wide"
            >
              전체 메뉴 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
