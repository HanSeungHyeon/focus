"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Instagram, Coffee, Send, Phone, MessageCircle } from "lucide-react";
import Header from "../components/Header";

export default function ContactPage() {
  // Google Maps Embed URL for the address: 충남 천안시 동남구 먹거리8길 15
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0502277875116!2d127.15475199999999!3d36.8173163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b285b22e0c8f7:0x69b21cd483ad2d76!2z7Lap7LKt64Ko64-EIOyynOyViOyLnCDrj5nrgqjqtawg66i56rGw66asOOq4uCAxNQ!5e0!3m2!1sko!2skr!4v1774340192420!5m2!1sko!2skr";

  return (
    <main className="min-h-screen relative w-full bg-[#0a0a0a] text-white pt-24 pb-32 overflow-x-hidden">
      <Header activePage="/contact" />

      <div className="container mx-auto px-6">
        <header className="mb-20 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">CONTACT</h1>
            <p className="text-white/40 text-lg">오늘 당신의 농도는 어떠신가요? 포커스에서 기다리겠습니다.</p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Location Card */}
            <div className="p-8 md:p-10 double-bezel space-y-6 group">
              <div className="flex items-center gap-3 text-[#c08457] font-black tracking-widest text-xs uppercase">
                <div className="w-8 h-8 rounded-full bg-[#c08457]/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Location
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">충남 천안시 동남구 먹거리8길 15 102호 1층 우측상가</h3>
                <p className="text-white/40 leading-relaxed">
                  포커스는 신부동의 조용한 골목 안에 위치해 있습니다.<br />
                  좁은 골목을 따라 새어 나오는 따뜻한 빛을 따라오세요.
                </p>
              </div>
            </div>

            {/* Service Card */}
            <div className="p-8 md:p-10 double-bezel space-y-6 group">
              <div className="flex items-center gap-3 text-[#c08457] font-black tracking-widest text-xs uppercase">
                <div className="w-8 h-8 rounded-full bg-[#c08457]/10 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                Business Hours
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/60 font-medium">Everyday</span>
                  <span className="text-xl font-bold">12:00 — 21:00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40 italic">Day Off</span>
                  <span className="text-white/80 font-bold">Tue</span>
                </div>
              </div>
            </div>

            {/* Social & Contact Card */}
            <div className="p-8 md:p-10 double-bezel space-y-8">
              <div className="flex items-center gap-3 text-[#c08457] font-black tracking-widest text-xs uppercase">
                <div className="w-8 h-8 rounded-full bg-[#c08457]/10 flex items-center justify-center">
                  <Coffee className="w-4 h-4" />
                </div>
                Connect
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/focuscoffee.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">Follow us</span>
                    <p className="font-bold">Instagram</p>
                  </div>
                </a>

                <a
                  href="https://pf.kakao.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAE100] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-[#3C1E1E] fill-[#3C1E1E]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">Chat</span>
                    <p className="font-bold text-white/90">KakaoTalk</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col h-full"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f0f0f]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%) grayscale(10%)' }} // Dark map hack
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />

              {/* Map Footer Label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 shadow-lg flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c08457]" />
                <span className="text-xs font-bold tracking-widest uppercase">Cheonan, South Korea</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-8 text-white/20 select-none">
              <span className="text-[10px] tracking-[0.5em] font-black uppercase">Concentration</span>
              <span className="text-[10px] tracking-[0.5em] font-black uppercase">Silence</span>
              <span className="text-[10px] tracking-[0.5em] font-black uppercase">Deep Taste</span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
