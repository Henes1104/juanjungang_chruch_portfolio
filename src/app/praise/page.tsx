'use client';

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { resourcesData } from "./data";
import dynamic from "next/dynamic";

const YouTubePlayer = dynamic(() => import("@/components/YouTubePlayer"), { ssr: false });

// 모든 종류의 아이템을 다룰 수 있는 통합 인터페이스
interface PraiseItem {
  id: string;
  title: string;
  date: string;
  youtubeId?: string; // 찬양 영상용
  author?: string; // 게시판용
  link?: string; // 게시판용 (현재 사용 안함)
}

export default function PraisePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = useMemo(() => {
    const tab = searchParams.get("tab");
    return (tab === "resources" || tab === "sarang" || tab === "gamsa" || tab === "events") ? tab : "gamsa";
  }, [searchParams]);
  const [showChoirSubMenu, setShowChoirSubMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 한 페이지에 표시될 항목 수 

  useEffect(() => {
    console.log('PraisePage useEffect triggered. Current searchParams:', searchParams.toString());
    console.log('Derived activeTab:', activeTab);

    if (activeTab === "sarang" || activeTab === "gamsa") {
      setShowChoirSubMenu(true);
    } else {
      setShowChoirSubMenu(false);
    }
  }, [activeTab]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // 전체 찬양 데이터 (기존 데이터 복원 + 게시판 데이터 연동)
  const praiseData: { [key: string]: PraiseItem[] } = {
    sarang: [
      {
        id: "s5",
        title: "심령이 가난한 자는",
        date: "2025년 7월 13일",
        youtubeId: "lcMJw7DyFu8",
      },
      {
        id: "s6",
        title: "감사의 찬송",
        date: "2025년 7월 6일",
        youtubeId: "4NoDzD0Z9Wc",
      },
      {
        id: "s7",
        title: "승천",
        date: "2025년 6월 29일",
        youtubeId: "l_1J-JNlEQc",
      },
      {
        id: "s8",
        title: "나의 죄를 씻기는",
        date: "2025년 6월 22일",
        youtubeId: "KUGVuCvag5M",
      },
      {
        id: "s9",
        title: "예수님이 말씀하시니",
        date: "2025년 6월 15일",
        youtubeId: "sw8BbQce2oc",
      },
      {
        id: "s10",
        title: "온 교회여 깨라",
        date: "2025년 6월 8일",
        youtubeId: "sm4NSMKr2ac",
      },
      {
        id: "s11",
        title: "갈보리산 십자가에",
        date: "2025년 6월 1일",
        youtubeId: "-ZNo20OW-Fs",
      },
      {
        id: "s12",
        title: "여호수아 성을 쳤네 여리고",
        date: "2025년 5월 25일",
        youtubeId: "er7lmr5P_68",
      },
      {
        id: "s13",
        title: "성도여 다 함께",
        date: "2025년 5월 18일",
        youtubeId: "IoFs5ictnrY",
      },
      {
        id: "s14",
        title: "주의나라 임하소서",
        date: "2025년 5월 11일",
        youtubeId: "12jpI7a8Vso",
      },
      {
        id: "s15",
        title: "어린 아이와 같이",
        date: "2025년 5월 4일",
        youtubeId: "0g2-JXFrU_A",
      },
      {
        id: "s16",
        title: "우리 때문에",
        date: "2025년 4월 27일",
        youtubeId: "hvC3ndKYISE",
      },
      {
        id: "s17",
        title: "거기 너 있었는가",
        date: "2025년 4월 20일",
        youtubeId: "3r8hvkGWBhs",
      },
      {
        id: "s18",
        title: "호산나 주의 이름으로 오시는 이여",
        date: "2025년 4월 6일",
        youtubeId: "nnBHBBeAxA4",
      },
      {
        id: "s19",
        title: "나를 따르려거든",
        date: "2025년 3월 30일",
        youtubeId: "LVNqtn3285Y",
      },
      {
        id: "s20",
        title: "참 좋으신 주님",
        date: "2025년 3월 23일",
        youtubeId: "hJM2H6bGVfA",
      },
      {
        id: "s21",
        title: "주께 가오니",
        date: "2025년 3월 16일",
        youtubeId: "4lRafkE-nuw",
      },
      {
        id: "s22",
        title: "주 의지하라",
        date: "2025년 3월 9일",
        youtubeId: "LxxJrLWSrEQ",
      },
      {
        id: "s23",
        title: "주의 도구로 사용하소서",
        date: "2025년 3월 2일",
        youtubeId: "hseROVz_v6k",
      },
      {
        id: "s24",
        title: "주 안에 있는 나에게",
        date: "2025년 2월 23일",
        youtubeId: "BA7_yTPP9X0",
      },
      {
        id: "s25",
        title: "계시는 주",
        date: "2025년 2월 16일",
        youtubeId: "UPS8LIzyyZQ",
      },
      {
        id: "s26",
        title: "너는 내 것이라",
        date: "2025년 2월 9일",
        youtubeId: "OumiqF3a8NI",
      },
      {
        id: "s27",
        title: "나의 눈을 들리라",
        date: "2025년 2월 2일",
        youtubeId: "wJQa39os20c",
      },
      {
        id: "s28",
        title: "저 높은 곳을 향하여",
        date: "2025년 1월 26일",
        youtubeId: "sU51DtSLaHY",
      },
      {
        id: "s29",
        title: "전능하신 주 하나님",
        date: "2025년 1월 19일",
        youtubeId: "zNsP8jjXaLs",
      },
      {
        id: "s30",
        title: "기뻐하며 경배하세",
        date: "2025년 1월 12일",
        youtubeId: "edpUrT5idLg",
      },
      {
        id: "s31",
        title: "저 천국 음악소리",
        date: "2025년 1월 5일",
        youtubeId: "eK1his_oIdE",
      },
    ],
    gamsa: [
      {
        id: "g3",
        title: "거룩하신 하나님",
        date: "2025년 7월 13일",
        youtubeId: "-QciJW0QkCo",
      },
      {
        id: "g4",
        title: "두려움과 고통의 숲 속에",
        date: "2025년 6월 29일",
        youtubeId: "WF7IOW5k-ig",
      },
      {
        id: "g5",
        title: "주의 나라 임하소서",
        date: "2025년 6월 22일",
        youtubeId: "cImc1lhYGP0",
      },
      {
        id: "g6",
        title: "주님과 같이",
        date: "2025년 6월 15일",
        youtubeId: "Mt_d0HQIdAc",
      },
      {
        id: "g7",
        title: "성령의 능력",
        date: "2025년 6월 8일",
        youtubeId: "T5oX9r9VeGM",
      },
      {
        id: "g8",
        title: "다 함께 찬양해",
        date: "2025년 6월 1일",
        youtubeId: "A_LUFsa2r4Y",
      },
      {
        id: "g9",
        title: "주의 친절한 팔에 안기세",
        date: "2025년 5월 25일",
        youtubeId: "iqQ8Q615RE8",
      },
      {
        id: "g10",
        title: "너희는 서로 사랑하라",
        date: "2025년 5월 18일",
        youtubeId: "kmz0_G6r5eU",
      },
      {
        id: "g11",
        title: "나를 길러주신 어버이",
        date: "2025년 5월 11일",
        youtubeId: "T9kNDwZ_C90",
      },
      {
        id: "g12",
        title: "어린이 나라",
        date: "2025년 5월 4일",
        youtubeId: "juLeoki5teA",
      },
      {
        id: "g13",
        title: "임하소서",
        date: "2025년 4월 27일",
        youtubeId: "PczjfLnEobk",
      },
      {
        id: "g14",
        title: "부활",
        date: "2025년 4월 20일",
        youtubeId: "rZvuiij-MEI",
      },
      {
        id: "g15",
        title: "십자가",
        date: "2025년 4월 6일",
        youtubeId: "qGpGNRlgcq0",
      },
      {
        id: "g16",
        title: "예수로 나의 구주 삼고",
        date: "2025년 3월 30일",
        youtubeId: "H1iKG-MQLpo",
      },
      {
        id: "g17",
        title: "내 맘의 주여 소망되소서",
        date: "2025년 3월 23일",
        youtubeId: "RjVsWnskmrA",
      },
      {
        id: "g18",
        title: "주 믿으라",
        date: "2025년 3월 16일",
        youtubeId: "X8-Vur8cg48",
      },
      {
        id: "g19",
        title: "주님의 축복",
        date: "2025년 3월 9일",
        youtubeId: "WVLzggUp408",
      },
      {
        id: "g20",
        title: "내 소망 되신 주님",
        date: "2025년 3월 2일",
        youtubeId: "P3qEIESs-MY",
      },
      {
        id: "g21",
        title: "홀로 영광 받으소서",
        date: "2025년 2월 23일",
        youtubeId: "_-uT7eiH6ck",
      },
      {
        id: "g22",
        title: "내 맘 속에 들리는 주 노래",
        date: "2025년 2월 16일",
        youtubeId: "H2jbRaxs71g",
      },
      {
        id: "g23",
        title: "음성",
        date: "2025년 2월 9일",
        youtubeId: "aImufQtHBfA",
      },
      {
        id: "g24",
        title: "빛 되신 주",
        date: "2025년 2월 2일",
        youtubeId: "Nd8mLeP5jYY",
      },
      {
        id: "g25",
        title: "믿음으로 가리라",
        date: "2025년 1월 26일",
        youtubeId: "ddruwbaUeHU",
      },
      {
        id: "g26",
        title: "주와 함께 가리라",
        date: "2025년 1월 19일",
        youtubeId: "VFaZUgF7Mmk",
      },
      {
        id: "g27",
        title: "우리는 주의 백성",
        date: "2025년 1월 12일",
        youtubeId: "bP14gJb8Z6Q",
      },
      {
        id: "g28",
        title: "거룩한 주",
        date: "2025년 1월 5일",
        youtubeId: "vqle_jlVF7g",
      },
    ],
    events: [
      {
        id: "e3",
        title: "2025 차세대교육국 헌신예배 초등,중등,고등,연수성전",
        date: "2025년 7월 13일",
        youtubeId: "mUqTXCQ0dHo",
      },
      {
        id: "e4",
        title: "2025 차세대교육국 주일학교헌신예배 영아,유치,유년,어린이영어예배",
        date: "2025년 6월 29일",
        youtubeId: "G9HnOiylCeU",
      },
      {
        id: "e5",
        title: "테힐라여성중창단",
        date: "2025년 6월 22일",
        youtubeId: "xZ4SkffKySg",
      },
      {
        id: "e6",
        title: "하늘찬양대(유년부찬양대)",
        date: "2025년 5월 11일",
        youtubeId: "MiMSrQp_y3E",
      },
      {
        id: "e7",
        title: "사랑찬양대",
        date: "2025년 4월 22일",
        youtubeId: "ZstpFOIKX30",
      },
      {
        id: "e8",
        title: "2025 교사헌신예배 교사특송 교사 및 교육위원회 일동",
        date: "2025년 3월 16일",
        youtubeId: "5j10KX3G_24",
      },
      {
        id: "e9",
        title: "2024 성탄감사예배 칸타타 사랑찬양대",
        date: "2024년 12월 25일",
        youtubeId: "ZnNiLAsIjeY",
      },
      {
        id: "e10",
        title: "2024 성탄축하발표회 차세대교육국일동",
        date: "2024년 12월 22일",
        youtubeId: "DLNK5_NiSGA",
      },
      {
        id: "e11",
        title: "은혜의 40년! 하나님께 영광! 창립40주년 기념음악회 주안중앙교회 찬양대",
        date: "2024년 10월 27일",
        youtubeId: "7FDusGYZzg4",
      },
      {
        id: "e12",
        title: "오직 주의 사랑에 매여 정용채 안수집사",
        date: "2024년 10월 25일",
        youtubeId: "45wcULIuJnU",
      },
      {
        id: "e13",
        title: "주와 같이 길 가는 것 테힐라여성중창단",
        date: "2024년 9월 22일",
        youtubeId: "xv22CsCmODs",
      },
      {
        id: "e14",
        title: "장학생 특송(2024년 장학위원회 헌신예배 및 장학증서 수여식) 장학생일동",
        date: "2024년 8월 26일",
        youtubeId: "ugdimpS8e0w",
      },
      {
        id: "e15",
        title: "백투스쿨 금요예배 특송 차세대교육국일동",
        date: "2024년 8월 23일",
        youtubeId: "N3ZzNQ6d650",
      },
      {
        id: "e16",
        title: "기드온 300용사 기도회 간증영상 기드온300용사",
        date: "2024년 8월 18일",
        youtubeId: "zRkBztgtJTQ",
      },
      {
        id: "e17",
        title: "청년부헌신예배 찬양,특송 청년부일동",
        date: "2024년 8월 11일",
        youtubeId: "UHGh5zjZJm4",
      },
      {
        id: "e18",
        title: "주의 보혈 김성수 안수집사",
        date: "2024년 7월 26일",
        youtubeId: "M6QZ43Evo9Y",
      },
      {
        id: "e19",
        title: "우릴 사용하소서 지역장일동",
        date: "2024년 7월 19일",
        youtubeId: "-O8OI2LtyaI",
      },
      {
        id: "e20",
        title: "2024 차세대교육국 헌신예배 (초,중,고 헌신예배)",
        date: "2024년 7월 14일",
        youtubeId: "kbdmegBQBFA",
      },
      {
        id: "e21",
        title: "2024 차세대교육국 주일학교헌신예배 (영아,유치,유년,영어예배부)",
        date: "2024년 6월 30일",
        youtubeId: "s9pt0K-Kp9c",
      },
    ],
    resources: resourcesData.map((r) => ({ ...r, id: r.id.toString() })),
  };

  const currentData = praiseData[activeTab];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 pt-20">
      <Header />
      <main key={searchParams.toString()} className="flex flex-col md:flex-row flex-1 container mx-auto px-4 py-8 md:px-8 md:py-12">
        <aside className="w-full md:w-1/5 mb-8 md:mb-0 md:pr-12 md:border-r md:border-gray-200">
          <nav className="sticky top-24">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-800">찬양</h2>
            <ul className="flex md:flex-col overflow-x-auto whitespace-nowrap pb-4 md:pb-0">
              <li className="mb-4 relative">
                <button
                  onClick={() => {
                    const newTab = (activeTab === "sarang" || activeTab === "gamsa") ? activeTab : "gamsa";
                    if (!showChoirSubMenu) {
                      router.push(`/praise?tab=${newTab}`);
                    }
                    setShowChoirSubMenu(!showChoirSubMenu);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                    (activeTab === "sarang" || activeTab === "gamsa") ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  } transition duration-300 flex justify-between items-center`}
                >
                  찬양대
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      showChoirSubMenu ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <AnimatePresence>
                  {showChoirSubMenu && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pl-4 mt-2 space-y-2 overflow-hidden"
                    >
                      <li>
                        <button
                          onClick={() => { router.push('/praise?tab=gamsa'); }}
                          className={`w-full text-left px-4 py-2 rounded-lg text-base font-medium ${
                            activeTab === "gamsa" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-blue-50"
                          } transition duration-300`}
                        >
                          감사찬양대
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { router.push('/praise?tab=sarang'); }}
                          className={`w-full text-left px-4 py-2 rounded-lg text-base font-medium ${
                            activeTab === "sarang" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-blue-50"
                          } transition duration-300`}
                        >
                          사랑찬양대
                        </button>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => { router.push('/praise?tab=events'); }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                    activeTab === "events" ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  } transition duration-300`}
                >
                  행사
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => { router.push('/praise?tab=resources'); }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                    activeTab === "resources" ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  } transition duration-300`}
                >
                  찬양 자료실
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="flex-1 pl-12">
          <h1 className="text-5xl font-extrabold mb-10 text-gray-800 pb-4 inline-block">
            {activeTab === "sarang" && "사랑찬양대"}
            {activeTab === "gamsa" && "감사찬양대"}
            {activeTab === "events" && "찬양 행사"}
            {activeTab === "resources" && "찬양 자료실"}
          </h1>

          {activeTab !== "resources" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-2xl">
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <YouTubePlayer
                    videoId={item.youtubeId}
                    title={item.title}
                  />
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-1"><span className="font-semibold">날짜:</span> {item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {currentItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md mb-4 p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <div className="flex items-center text-xs md:text-sm text-gray-500 mb-4">
                    <span className="mr-4"><span className="font-semibold">작성자:</span> {item.author}</span>
                    <span><span className="font-semibold">작성일:</span> {item.date}</span>
                  </div>
                  <Link href={`/praise/resources/${item.id}`} className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm">
                    자료 보기
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 text-sm mx-0.5 md:px-4 md:py-2 md:text-base bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                이전
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => paginate(page)} className={`px-3 py-1 text-sm mx-0.5 border rounded-lg shadow-sm ${currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-100'}`}>
                  {page}
                </button>
              ))}
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 text-sm mx-0.5 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                다음
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}