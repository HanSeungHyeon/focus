"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, MapPin, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";

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
  return (
    <main className="relative w-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter text-white">FOCUS</div>
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide text-white/60">
          <a href="#about" className="hover:text-white transition-colors">OUR STORY</a>
          <a href="#menu" className="hover:text-white transition-colors">MENU</a>
          <a href="#atmosphere" className="hover:text-white transition-colors">ATMOSPHERE</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
        <button className="px-5 py-2 text-xs font-bold tracking-widest bg-white text-black hover:bg-white/90 transition-all rounded-full">
          RESERVATION
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Focus Hero"
            fill
            className="object-cover opacity-60 mask-hero"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/0 via-[#0a0a0a]/20 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] border border-white/20 rounded-full text-white/80 uppercase">
              The Essence of Deep Taste
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
              STAY <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-8">FOCUS</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/60 font-medium leading-relaxed">
              본연의 맛에 집중하는 시간. 소음에서 벗어나 <br className="hidden md:block" />
              당신만의 가치에 몰입할 수 있는 완벽한 공간을 제공합니다.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
              <button className="px-8 py-4 bg-accent hover:bg-accent-muted text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2 group">
                시작하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all duration-300">
                메뉴 살펴보기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-[600px] rounded-3xl overflow-hidden double-bezel"
          >
            <Image
              src="/images/beans.png"
              alt="Philosophy"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
              가장 단순한 것에<br />
              집중하는 즐거움
            </h2>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p>
                우리는 매일 수많은 정보와 소음 속에 살아갑니다. Focus는 그 흐트러진 시선을 다시 당신의 내면으로 돌려주는 지점입니다.
              </p>
              <p>
                최상의 생두, 정교한 로스팅, 그리고 단 한 방울의 완벽한 추출. 화려한 장식보다는 맛의 본질에 집중하며, 당신의 생각과 감각이 명료해지는 시간을 선사합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <Coffee className="w-6 h-6 text-accent mb-3" />
                <h4 className="text-white font-bold mb-1">Single Origin</h4>
                <p className="text-xs text-white/30">엄선된 단일 산지의 원두만 사용합니다.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <Clock className="w-6 h-6 text-accent mb-3" />
                <h4 className="text-white font-bold mb-1">Slow Brew</h4>
                <p className="text-xs text-white/30">시간이 선사하는 깊은 풍미를 담습니다.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-sm font-bold tracking-widest text-accent uppercase">Signature Selection</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">SELECTED MENU</h2>
            </div>
            <p className="max-w-xs text-white/40 text-sm italic">Focus가 제안하는 고유의 감각을 느껴보세요.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                idx: "01",
                title: "Focus Blend",
                price: "₩6,500",
                desc: "다크 초콜릿의 무게감과 구운 견과류의 고소함이 어우러진 시그니처 블렌딩",
                tag: "HOUSE"
              },
              {
                idx: "02",
                title: "Quiet Latte",
                price: "₩7,000",
                desc: "부드러운 스팀 밀크와 농밀한 에스프레소가 만나 입안을 차분하게 감싸는 라떼",
                tag: "POPULAR"
              },
              {
                idx: "03",
                title: "Black Essence",
                price: "₩6,000",
                desc: "원두 본연의 오일감과 깊은 산미를 투명하게 담아낸 프리미엄 드립 커피",
                tag: "PURE"
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="double-bezel p-10 group">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-black text-white/5 group-hover:text-accent/20 transition-colors uppercase italic">{item.idx}</span>
                  <span className="px-3 py-1 bg-white/5 text-[10px] font-bold tracking-widest text-white/30 rounded-full border border-white/5">
                    {item.tag}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-black text-white group-hover:text-accent transition-colors">{item.title}</h3>
                    <span className="text-accent font-bold">{item.price}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-white/40">ORDER NOW</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative h-[700px] w-full rounded-[3rem] overflow-hidden group">
            <Image
              src="/images/interior.png"
              alt="Atmosphere"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms]"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-[#0a0a0a]/10 transition-colors duration-1000" />

            <div className="absolute bottom-20 left-12 right-12 md:left-20 md:right-20 flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="max-w-2xl text-white space-y-4">
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic">QUIET LUXURY SPACE</h3>
                <p className="text-white/70 text-lg md:text-xl font-medium">
                  인위적인 밝음이 아닌, 고요한 어둠 속에서 빛나는 당신의 사유. <br />
                  Focus는 그 모든 순간을 담기 위해 설계되었습니다.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-white/20">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-white/20">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
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
                <p className="text-xl font-bold text-white">서울시 마포구 연남동 123-45</p>
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
