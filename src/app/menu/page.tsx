"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

import logoImg from "../../../public/images/logo.webp";

// Menu images
import dessert1Img from "../../public/images/디저트.webp";
import dessert2Img from "../../public/images/디저트2.webp";
import dessert3Img from "../../public/images/디저트3.webp";
import americanoImg from "../../public/images/아메리카노.webp";
import espressoImg from "../../public/images/에스프레소.webp";
import excellentLatteImg from "../../public/images/엑설런트 라떼.webp";
import cafeLatteImg from "../../public/images/카페라떼.jpg";
import mintGatoImg from "../../public/images/민트가토.webp";
// import mintCatoImg from "../../public/images/민트카토.webp";
import adeImg from "../../public/images/에이드1.webp";


type MenuItem = {
  id: string;
  category: "Coffee" | "Tea & Ade" | "Dessert";
  name: string;
  price: string;
  desc: string;
  image: StaticImageData;
};

const menuItems: MenuItem[] = [
  // COFFEE
  { id: "americano", category: "Coffee", name: "Americano", price: "₩5,000", desc: "에티오피아 원두의 화사한 산미와 풍부한 바디감이 어우러진 시그니처 아메리카노입니다.", image: americanoImg },
  { id: "espresso", category: "Coffee", name: "Espresso", price: "₩4,500", desc: "포커스만의 독자적인 로스팅으로 커피 본연의 묵직한 풍미를 가장 잘 느낄 수 있는 에스프레소.", image: espressoImg },
  { id: "cafeLatte", category: "Coffee", name: "Cafe Latte", price: "₩5,500", desc: "진한 에스프레소 샷에 신선한 우유를 더해 부드러운 고소함을 느낄 수 있습니다.", image: cafeLatteImg },
  { id: "excellentLatte", category: "Coffee", name: "Excellent Latte", price: "₩6,500", desc: "달콤한 바닐라 향과 쌉싸름한 에스프레소가 만나 입 안 가득 퍼지는 기분 좋은 달콤함.", image: excellentLatteImg },
  { id: "mintGato", category: "Coffee", name: "Mint Gato", price: "₩6,500", desc: "상당한 매니아층을 보유한, 상큼하고 청량한 민트와 베이스가 어우러진 매력적인 음료.", image: mintGatoImg },

  // TEA & ADE
  { id: "ade1", category: "Tea & Ade", name: "Mint Cato", price: "₩6,500", desc: "은은한 풍미와 민트의 상쾌함이 만난 포커스의 또 다른 시그니처.", image: adeImg },

  // DESSERT
  { id: "dessert1", category: "Dessert", name: "Signature Dessert", price: "₩3,500", desc: "부드러운 식감과 풍부한 크림, 포커스가 자랑하는 달콤한 휴상의 시그니처 디저트.", image: dessert1Img },
  { id: "dessert2", category: "Dessert", name: "Special Dessert", price: "₩3,000", desc: "깊고 진한 커피의 향과 가장 잘 어울리는 클래식한 풍미의 홈메이드 디저트.", image: dessert2Img },
  { id: "dessert3", category: "Dessert", name: "Special Dessert", price: "₩3,500", desc: "깊고 진한 커피의 향과 가장 잘 어울리는 클래식한 까눌레.", image: dessert2Img },
];

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = ["Coffee", "Tea & Ade", "Dessert"] as const;

  return (
    <main className="min-h-screen relative w-full bg-[#0a0a0a] text-white pt-24 pb-32">
      {/* Navigation (Duplicated from Main per user choice without layout extraction) */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Image src={logoImg} alt="FOCUS Logo" width={32} height={32} className="w-8 h-8 rounded-full" />
          <div className="text-2xl font-black tracking-tighter text-white">FOCUS</div>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide text-white/60">
          <Link href="/" className="hover:text-white transition-colors">MAIN</Link>
          <Link href="/menu" className="hover:text-white transition-colors text-white">MENU</Link>
          <Link href="/#story" className="hover:text-white transition-colors">STORY</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">CONTACT</Link>
        </div>
        <div className="w-[100px] hidden md:block"></div>
      </nav>

      <div className="container mx-auto px-6">
        <header className="mb-20 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">OUR MENU</h1>
          <p className="text-white/40 text-lg">포커스만의 감각이 어우러진 메뉴를 확인해보세요.</p>
        </header>

        <div className="space-y-32">
          {categories.map((cat) => (
            <section key={cat}>
              <h2 className="text-3xl font-black border-b border-white/10 pb-4 mb-8 tracking-wide text-white/80 uppercase">
                {cat}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {menuItems
                  .filter((item) => item.category === cat)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      layoutId={`container-${item.id}`}
                      onClick={() => setSelectedItem(item)}
                      className="cursor-pointer group relative aspect-square rounded-3xl overflow-hidden border border-white/10"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-black/80 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest backdrop-blur-md border border-white/10">
                          {item.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              layoutId={`container-${selectedItem.id}`}
              className="relative w-full max-w-4xl bg-[#111] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl z-10 flex flex-col md:flex-row pointer-events-auto"
            >
              <div className="relative w-full md:w-1/2 min-h-[400px]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#ab8153] uppercase">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight">{selectedItem.name}</h3>
                </div>

                <p className="text-2xl font-bold text-white/80">{selectedItem.price}</p>

                <div className="h-px bg-white/10 w-full" />

                <p className="text-white/60 leading-relaxed text-lg pb-4">
                  {selectedItem.desc}
                </p>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-12 h-12 absolute top-4 right-4 md:top-6 md:right-6 rounded-full bg-black/40 hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-md"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
