"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import Header from "../components/Header";

// Story images
import mintGatoImg from "../../public/images/coffee/mintgatto.webp";
import desert2Img from "../../public/images/desert/desert2.webp";
import event1Img from "../../public/images/event/event1.jpg";
import event2Img from "../../public/images/event/event2.jpg";
import event3Img from "../../public/images/event/event3.jpg";
import cornImg from "../../public/images/desert/corn.jpg";
import noticeImg from "../../../public/images/notice.jpg";
import endImg from "../../../public/images/end.jpg";

type StoryItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  desc: string;
  image?: StaticImageData;
  video?: string;
};

const storyItems: StoryItem[] = [
  {
    id: "story-end",
    title: "포커스 커피 종료",
    subtitle: "ending",
    date: "2024.07.30",
    desc: `안녕하세요 유공희입니다.

포커스 커피 마지막 날까지 정말 수 없이 많은 분들이
찾아와 주셔서 웃으면서 마무리 지을 수 있었습니다.

이렇게까지 사랑과 관심을 받아도 되는 사람인가
다시 돌아보게 되는 뜻 깊은 시간이기도했습니다.

이젠 포커스 커피가 아닌 한 사람으로 인사드립니다.
제 이름은 유공희입니다.

진심으로 감사했습니다.

-화려하고 분주한 신부동 거리 속 차분했던 작은 공간`,
    image: endImg,
  },
  {
    id: "story-event",
    title: "Radio Day",
    subtitle: "Event",
    date: "2024.02.17",
    desc: `공간을 채워 나갈 음악, 함께 즐길 수 있는 음료,
즐길 수 있는 공간은 저희가 준비해두겠습니다.
편하게 오셔서 평소와는 색다른 분위기의 포커스 커피를 즐겨보세요 :)`,
    image: event1Img,
  },
  {
    id: "story-beans",
    title: "설 연휴 안내",
    subtitle: "Notice",
    date: "2024.02.05",
    desc: "포커스, 설날 연휴 정상영업합니다.",
    image: noticeImg,
  },
  {
    id: "story-2st Anniversary",
    title: "2주년",
    subtitle: "2nd Anniversary",
    date: "2024.01.19",
    desc: `안녕하세요 포커스 커피입니다!
01월 19일 포커스 커피가 2주년이 되는 날입니다 : )

시간이 어떻게 지나왔는지도 모르게 흘러갔지만
많은 분들과 소통하면서 친해지고 덕분에 많은 관심 받으면서 지내 올 수 있었습니다.
많은 인연을 쌓아가며 소중한 추억들을 많이 남길 수 있었습니다.
꾸준하게 새로운 시도들과 이벤트로 성장해 나아가는 포커스 커피로 인사드리겠습니다! 감사합니다.

HBD FOCUS COFFEE 2nd Anniversary❤️
    `,
    image: event3Img,
  },
  {
    id: "story-corn",
    title: "신메뉴 출시",
    subtitle: "Seasonal Special",
    date: "2023.06.24",
    desc: `매일 아침 옥수수를 준비하여 1차로 살짝 구워내 고소함과 당도를 극대화되게 준비합니다.
초당 옥수수의 특징으로 높은 당도와 수분감으로 옥수수를 씹었을 때에
톡톡 터지는 식감과 동시에 느껴지는 입안을 감도는 단맛이 감도는게 특징입니다.`,
    image: cornImg,
  },
  {
    id: "story-1st Anniversary",
    title: "1주년",
    subtitle: "1st Anniversary",
    date: "2023.01.19",
    desc: `그 동안 포커스커피에 찾아와주시고 관심을 가지고 좋아해주신 분들께 1주년이라는 핑계로 작은 보답을 하고자 합니다 :)
다가오는 01월 19일 목요일 하루 동안 디저트를 제외한 모든 음료 메뉴를 50% 할인 된 가격으로 영업하려합니다.`,
    image: event2Img,
  },
  {
    id: "story-mintgato",
    title: "신메뉴 출시",
    subtitle: "New Menu",
    date: "2022.07.27",
    desc: "포커스, 신메뉴 출시.",
    image: mintGatoImg,
  },
  {
    id: "story-desert",
    title: "신메뉴 출시",
    subtitle: "New Menu",
    date: "2022.06.24",
    desc: `미니 약과와 직접만든 약과 소스가 어우러진 약과 휘낭시에 입니다.
조청의 꾸덕함과 시나몬 향이 어우러진 휘낭시에 입니다
커피와도 어울리게 준비를 해봤습니다 편하게 들러주세요 :)`,
    image: desert2Img,
  },
  {
    id: "story-opening",
    title: "FOCUS, 문을 열다",
    subtitle: "The Beginning",
    date: "2022.01.19",
    desc: "천안 동남구의 좁은 골목 안, 따뜻한 불빛 하나로 시작된 포커스. '본연의 맛에 집중하자'는 철학 아래, 작지만 확고한 공간이 탄생했습니다. 소음과 분주함에서 벗어나 오직 커피 한 잔에 몰입할 수 있는 곳을 만들고 싶었습니다.",
    video: "/video/opening.mp4",
  },
];

export default function StoryPage() {
  const [selectedItem, setSelectedItem] = useState<StoryItem | null>(null);

  return (
    <main className="min-h-screen relative w-full bg-[#0a0a0a] text-white pt-24 pb-32">
      <Header activePage="/story" />

      <div className="container mx-auto px-6">
        <header className="mb-20 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">OUR STORY</h1>
          <p className="text-white/40 text-lg">포커스, 그리고 우리의 이야기.</p>
        </header>

        {/* Story Grid — larger photos than menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layoutId={`story-container-${item.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111]"
            >
              {/* Larger aspect ratio image/video */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {item.video ? (
                  <video
                    src={item.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500" />

                {/* Date badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <Calendar className="w-3 h-3 text-[#c08457]" />
                  <span className="text-[11px] font-bold tracking-wider text-white/80">{item.date}</span>
                </div>

                {/* Title overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#c08457] uppercase block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
              layoutId={`story-container-${selectedItem.id}`}
              className="relative w-full max-w-5xl bg-[#111] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl z-10 flex flex-col md:flex-row pointer-events-auto"
            >
              {/* Modal Image/Video — left, tall */}
              <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[650px]">
                {selectedItem.video ? (
                  <video
                    src={selectedItem.video}
                    autoPlay
                    loop
                    playsInline
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : selectedItem.image ? (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/30 hidden md:block pointer-events-none" />
              </div>

              {/* Modal Content — right */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#c08457]" />
                    <span className="text-xs font-bold tracking-[0.15em] text-white/50">{selectedItem.date}</span>
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#c08457] uppercase block">
                    {selectedItem.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">{selectedItem.title}</h3>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <p className="text-white/60 leading-relaxed text-base md:text-lg pb-4 whitespace-pre-wrap">
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
