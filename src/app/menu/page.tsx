"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "../components/Header";

// Menu images
//coffe
import americanoImg from "../../public/images/coffee/americano.webp";
import espressoImg from "../../public/images/coffee/espresso.webp";
import excellentLatteImg from "../../public/images/coffee/excellent.webp";
import cafeLatteImg from "../../public/images/coffee/caffelatte.jpg";
import mintGatoImg from "../../public/images/coffee/mintgatto.webp";
import almondImg from "../../public/images/coffee/almond.jpg";
import affogatoImg from "../../public/images/coffee/affogato.jpg";

//ade
import adeImg from "../../public/images/tea/ade1.webp";
import ade2Img from "../../public/images/tea/ade2.jpg";

//desert
import dessert2Img from "../../public/images/desert/desert2.webp";
import dessert3Img from "../../public/images/desert/desert3.jpg";
import dessert4Img from "../../public/images/desert/desert4.webp";
import dessert5Img from "../../public/images/desert/desert5.webp";
import dessert6Img from "../../public/images/desert/desert6.webp";
import dessert7Img from "../../public/images/desert/desert7.webp";
import menuImg from "../../public/images/menu.jpg";


type MenuItem = {
  id: string;
  category: "All" | "Coffee" | "Tea & Ade" | "Dessert";
  name: string;
  price: string;
  desc: string;
  image: StaticImageData;
};

const menuItems: MenuItem[] = [
  // ALL
  { id: "full-menu", category: "All", name: "전체 메뉴", price: "FOCUS MENU", desc: "포커스의 모든 메뉴를 한 눈에 확인하실 수 있습니다.", image: menuImg },

  // COFFEE
  { id: "americano", category: "Coffee", name: "아메리카노", price: "₩5,000", desc: "에티오피아 원두의 화사한 산미와 풍부한 바디감이 어우러진 시그니처 아메리카노입니다.", image: americanoImg },
  { id: "espresso", category: "Coffee", name: "에스프레소", price: "₩4,500", desc: "포커스만의 독자적인 로스팅으로 커피 본연의 묵직한 풍미를 가장 잘 느낄 수 있는 에스프레소.", image: espressoImg },
  { id: "cafeLatte", category: "Coffee", name: "카페 라떼", price: "₩5,500", desc: "진한 에스프레소 샷에 신선한 우유를 더해 부드러운 고소함을 느낄 수 있습니다.", image: cafeLatteImg },
  { id: "excellentLatte", category: "Coffee", name: "엑설런트 라떼", price: "₩6,500", desc: "달콤한 바닐라 향과 쌉싸름한 에스프레소가 만나 입 안 가득 퍼지는 기분 좋은 달콤함.", image: excellentLatteImg },
  { id: "mintGato", category: "Coffee", name: "민트 가토", price: "₩6,500", desc: "상당한 매니아층을 보유한, 상큼하고 청량한 민트와 베이스가 어우러진 매력적인 음료.", image: mintGatoImg },
  { id: "almond", category: "Coffee", name: "아몬드 라떼", price: "₩6,500", desc: "고소한 아몬드와 에스프레소가 만나 입 안 가득 퍼지는 기분 좋은 달콤함.", image: almondImg },
  { id: "affogato", category: "Coffee", name: "아포가토", price: "₩6,500", desc: "진한 에스프레소 샷에 바닐라 아이스크림을 더해 부드러운 고소함과 쌉싸름한 에스프레소가 만나 입 안 가득 퍼지는 기분 좋은 달콤함.", image: affogatoImg },

  // TEA & ADE
  { id: "ade1", category: "Tea & Ade", name: "레몬 에이드", price: "₩6,500", desc: "은은한 풍미와 민트의 상쾌함이 만난 포커스의 또 다른 시그니처.", image: adeImg },
  { id: "ade2", category: "Tea & Ade", name: "자몽 아이스티", price: "₩6,500", desc: "자몽의 쌉싸름함과 달콤함이 어우러진 상큼한 아이스티.", image: ade2Img },

  // DESSERT
  { id: "dessert3", category: "Dessert", name: "까눌레", price: "₩3,500", desc: "겉은 바삭하면서도 달고나같은 쫀득한 식감이면서도 속은 촉촉한 매력을 가져 씹으면 씹을수록 바닐라의 풍미가 더해져 커피와 함께 먹을때 잘 어울리는 디저트입니다.", image: dessert3Img },
  { id: "dessert2", category: "Dessert", name: "약과 휘낭시에", price: "₩3,000", desc: "미니 약과와 직접만든 약과 소스가 어우러진 약과 휘낭시에 입니다. 조청의 꾸덕함과 시나몬 향이 어우러진 휘낭시에 입니다", image: dessert2Img },
  { id: "dessert4", category: "Dessert", name: "초코 휘낭시에", price: "₩3,500", desc: "초코휘낭시에이며 진한 초코와 청크가 씹히면서 진한 브라우니를 먹는듯한 느낌을 받을 수 있는 구움과자입니다", image: dessert4Img },
  { id: "dessert5", category: "Dessert", name: "고르곤졸라 휘낭시에", price: "₩3,500", desc: "꼬소한 치즈 풍미를 가진 블루 치즈와 달콤짭짜름한 파마산 치즈의 조화로 역시 커피와 잘 어울리는 조합의 구움과자입니다.", image: dessert5Img },
  { id: "dessert6", category: "Dessert", name: "솔티 카라멜 휘낭시에", price: "₩3,500", desc: "깊고 진한 커피의 향과 가장 잘 어울리는 클래식한 까눌레.", image: dessert6Img },
  { id: "dessert7", category: "Dessert", name: "밤 소보로 휘낭시에", price: "₩3,500", desc: "겉과 속에 들어있는 생율밤으로 고소함과 밤의 단맛까지 살리며 쫀득한 식감이 더해진 매력적인 구움과자입니다.", image: dessert7Img },
];

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = ["All", "Coffee", "Tea & Ade", "Dessert"] as const;

  return (
    <main className="min-h-screen relative w-full bg-[#0a0a0a] text-white pt-24 pb-32">
      <Header activePage="/menu" />

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
              className={`relative w-full ${selectedItem.category === 'All' ? 'max-w-2xl h-[90vh]' : 'max-w-4xl'} bg-[#111] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl z-10 flex flex-col md:flex-row pointer-events-auto`}
            >
              {selectedItem.category === "All" ? (
                <div className="relative w-full h-full bg-black">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-contain"
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-12 h-12 absolute top-4 right-4 rounded-full bg-black/40 hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-md z-20"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
