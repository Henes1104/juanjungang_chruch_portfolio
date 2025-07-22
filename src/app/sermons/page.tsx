"use client";

import { useState } from "react";
import Header from "@/components/Header"; // Header 컴포넌트 재사용
import dynamic from "next/dynamic";

const YouTubePlayer = dynamic(() => import("@/components/YouTubePlayer"), { ssr: false });

export default function SermonsPage() {
  const [activeTab, setActiveTab] = useState<
    "sunday" | "wednesday" | "allnight" | "guest"
  >("sunday");
  const [currentPage, setCurrentPage] = useState(1);
  const sermonsPerPage = 8; // 한 페이지에 표시될 설교 수

  // 임시 설교 데이터
  const sermons = {
    guest: [
      {
        id: "g1",
        title: "감사가 믿음이고 감사가 신앙입니다.",
        date: "2025년 6월 29일",
        preacher: "김범석 목사(호주 시드니순복음교회 담임)",
        bible: "골로새서 3:12-17",
        youtubeId: "vX9G58kTVPE",
      },
      {
        id: "g2",
        title: "주님께서 쓰시는 자",
        date: "2025년 6월 22일",
        preacher: "최난중 목사 (해오름교회 원로)",
        bible: "요한복음 2:3-11",
        youtubeId: "sapo1bYp9LU",
      },
      {
        id: "g3",
        title: "베데스다 되게 하소서",
        date: "2025년 6월 15일",
        preacher: "김낙인 목사 (남가주 주님의 교회/그리스도한인연합감리교회)",
        bible: "요한복음 5:1-9",
        youtubeId: "Lwg3Z9xoceU",
      },
      {
        id: "g4",
        title: "포로의 원인과 회복",
        date: "2025년 6월 8일",
        preacher: "장상래 목사 (은평교회 원로)",
        bible: "예레미야 29:10-14",
        youtubeId: "oc1GaDvAPmA",
      },
      {
        id: "g5",
        title: "영적예배",
        date: "2025년 3월 16일",
        preacher: "황경애 사모",
        bible: "로마서 12:1-2",
        youtubeId: "Kr2ZQn4SgFA",
      },
      {
        id: "g6",
        title: "주께서 행하신 기적.",
        date: "2024년 8월 30일",
        preacher: "성용철 목사(방주교회 당회장)",
        bible: "시편 40:1-5",
        youtubeId: "o7t3NA_-dqs",
      },
      {
        id: "g7",
        title: "새벽이슬 같은 전도자의 발걸음",
        date: "2024년 8월 11일",
        preacher: "옥성삼 교수(한국기독교언론포럼 사무총장)",
        bible: "이사야 52:7",
        youtubeId: "r5b8_cIggLI",
      },
      {
        id: "g8",
        title: "브니엘의 축복",
        date: "2024년 7월 28일",
        preacher: "김진홍 목사",
        bible: "창세기 32:24-30",
        youtubeId: "nJh6YH7Zp2c",
      },
      {
        id: "g9",
        title: "나라이 임하옵시며",
        date: "2024년 7월 7일",
        preacher: "최은성 선교사",
        bible: "마태복음 4:17",
        youtubeId: "sVf9B-p3S1M",
      },
      {
        id: "g10",
        title: "하나님을 끝까지 신뢰하라",
        date: "2024년 3월 10일",
        preacher: "김석균 목사 (찬양사역자)",
        bible: "시편 34:19",
        youtubeId: "etb7IgvNVbw",
      },
      {
        id: "g11",
        title: "매이지 않는 하나님의 말씀",
        date: "2024년 3월 3일",
        preacher: "코이 람 탕 목사(미얀마 성서공회 총무)",
        bible: "디모데후서 2:8-9",
        youtubeId: "NWhmNe_UDQ8",
      },
      {
        id: "g12",
        title: "억지로 진 십자가의 은총",
        date: "2024년 1월 26일",
        preacher: "이동준 목사(LA 아름다운교회 담임)",
        bible: "마태복음 27:32",
        youtubeId: "Aq3iyXiOD-o",
      },
      {
        id: "g13",
        title: "합심기도가 승리를 가져온다",
        date: "2023년 10월 15일",
        preacher: "홍영기 목사(교회성장연구소 소장)",
        bible: "출애굽기 17:8-16",
        youtubeId: "MtyNHGPO1NA",
      },
      {
        id: "g14",
        title: "나도 할 수 있습니다",
        date: "2023년 9월 24일",
        preacher: "소림주 목사(대만 동하교회 담임)",
        bible: "요한복음 14:12",
        youtubeId: "23b1EAaAslU",
      },
      {
        id: "g15",
        title: "나를 믿으시는 하나님",
        date: "2023년 9월 10일",
        preacher: "김영옥 선교사",
        bible: "누가복음 16:19-31",
        youtubeId: "vJcXXI9LEkY",
      },
      {
        id: "g16",
        title: "불가능한 일도 시도하라, 예수님만 바라보라",
        date: "2023년 8월 20일",
        preacher: "에릭 무퀸다 목사(탄자니아 마라나타 교회 담임)",
        bible: "마태복음 14:22-32",
        youtubeId: "z1HIlroM1Gg",
      },
      {
        id: "g17",
        title: "헌빵의 인생",
        date: "2023년 7월 9일",
        preacher: "박윤석 목사",
        bible: "디모데전서 2:4",
        youtubeId: "-Jc3QpKMS-A",
      },
      {
        id: "g18",
        title: "샘 곁의 가지",
        date: "2023년 5월 28일",
        preacher: "이호준 목사",
        bible: "창세기 49:22-26",
        youtubeId: "Ve7Tlu6aPb0",
      },
      {
        id: "g19",
        title: "마음의 예배",
        date: "2023년 5월 21일",
        preacher: "하덕규 목사",
        bible: "잠언 23:26",
        youtubeId: "Fk-vdebnGrs",
      },
    ],
    sunday: [
      {
        id: "s1",
        title: "우리 인생의 가장 절박한 문제를 통한 시험이 올 때",
        date: "2025년 7월 13일",
        preacher: "당회장 박응순 목사",
        bible: "마태복음 4:1-4",
        youtubeId: "VPoEmm6kJro",
      },
      {
        id: "s2",
        title: "맥추 감사절을 지켜라",
        date: "2025년 7월 6일",
        preacher: "당회장 박응순 목사",
        bible: "출애굽기 23:16, 34:21-24",
        youtubeId: "6ALBjxndD6k",
      },

      // 여기에 새로운 주일 예배 설교가 추가됩니다.
      {
        id: "s5",
        title: "주여 이땅에 필요한 지도자를 주시옵소서",
        date: "2025년 6월 1일",
        preacher: "당회장 박응순 목사",
        bible: "마태복음 20:26-28",
        youtubeId: "8yYf1zfNpSs",
      },
      {
        id: "s6",
        title: "현숙한 아내가 되라",
        date: "2025년 5월 25일",
        preacher: "당회장 박응순 목사",
        bible: "잠언 31:10-31",
        youtubeId: "_SXfinMwnVs",
      },
      {
        id: "s7",
        title: "좋은 남편이 되라",
        date: "2025년 5월 18일",
        preacher: "당회장 박응순 목사",
        bible: "에베소서 5:25-33. 베드로전서 3:7",
        youtubeId: "JsU3FNslYuc",
      },
      {
        id: "s8",
        title: "네 부모를 공경하라",
        date: "2025년 5월 11일",
        preacher: "당회장 박응순 목사",
        bible: "에베소서 6:1-3",
        youtubeId: "OGlPWdN6LBg",
      },
      {
        id: "s9",
        title: "자녀로 잘되게 하라",
        date: "2025년 5월 4일",
        preacher: "당회장 박응순 목사",
        bible: "출애굽기 20:1-3, 갈디아서 6:7-9",
        youtubeId: "pzeRMUCQVZ4",
      },
      {
        id: "s10",
        title: "성도는 하나님의 음성을 들어야 합니다",
        date: "2025년 4월 27일",
        preacher: "당회장 박응순 목사",
        bible: "창세기 3:1-4, 6, 사무엘상 3:1-4, 욥기 33:13-18",
        youtubeId: "LvWszotovN8",
      },
      {
        id: "s11",
        title: "살아계신 주님",
        date: "2025년 4월 20일",
        preacher: "당회장 박응순 목사",
        bible: "누가복음 24:30-36",
        youtubeId: "TW5QiYYwYjQ",
      },
      {
        id: "s12",
        title: "고난 받으신 예수님",
        date: "2025년 4월 13일",
        preacher: "당회장 박응순 목사",
        bible: "이사야 53:4-9",
        youtubeId: "_qJB3NDNXz8",
      },
      {
        id: "s13",
        title: "신앙의 고백의 영적인 능력",
        date: "2025년 4월 6일",
        preacher: "당회장 박응순 목사",
        bible: "로마서 10:9-10",
        youtubeId: "4EXwKGJJohk",
      },
      {
        id: "s14",
        title: "우리에게 가장 중요한 일",
        date: "2025년 3월 30일",
        preacher: "당회장 박응순 목사",
        bible: "히브리서 11:1-6",
        youtubeId: "4CALVrBj3sU",
      },
      {
        id: "s15",
        title: "예수님은",
        date: "2025년 3월 23일",
        preacher: "당회장 박응순 목사",
        bible: "요한복음 14:1-6",
        youtubeId: "Pyx1X-t67gc",
      },
      {
        id: "s16",
        title: "삶을 변화시키는 영적관리의 지혜시리즈 7 - 축복관리",
        date: "2025년 3월 16일",
        preacher: "당회장 박응순 목사",
        bible: "창세기 28:10-15",
        youtubeId: "Fg0uAScWPmw",
      },
      {
        id: "s17",
        title: "삶을 변화시키는 영적관리의 지혜시리즈 6 - 시간관리",
        date: "2025년 3월 9일",
        preacher: "당회장 박응순 목사",
        bible: "에베소서 5:14-17",
        youtubeId: "yiZey4V-nyw",
      },
      {
        id: "s18",
        title: "지금 우리는 조국을 위해 무엇을 해야 합니까?",
        date: "2025년 3월 2일",
        preacher: "당회장 박응순 목사",
        bible: "느헤미야 1:1-10",
        youtubeId: "wp6XAxb0rEg",
      },
      {
        id: "s19",
        title: "삶을 변화시키는 영적관리의 지혜시리즈 5 - 마음관리",
        date: "2025년 2월 23일",
        preacher: "당회장 박응순 목사",
        bible: "시편 57:6-8",
        youtubeId: "oNL_iBkC1Zg",
      },
      {
        id: "s20",
        title: "삶을 변화시키는 영적관리의 지혜시리즈 4 - 생각관리",
        date: "2025년 2월 16일",
        preacher: "당회장 박응순 목사",
        bible: "잠언 4:23-27",
        youtubeId: "nMe2LEQhlA0",
      },
      {
        id: "s21",
        title: "삶을 변화시키는 영적관리의 지혜시리즈 3 - 언어관리",
        date: "2025년 2월 9일",
        preacher: "당회장 박응순 목사",
        bible: "잠언 18:20-21, 야고보서 3:1-12",
        youtubeId: "9agWAR45KKk",
      },
      {
        id: "s22",
        title: "삶을 변화시키는 영적관리의 지혜시리즈 2 - 꿈관리",
        date: "2025년 2월 2일",
        preacher: "당회장 박응순 목사",
        bible: "여호수아 18:1-10",
        youtubeId: "8o8ICdgD6TM",
      },
      {
        id: "s23",
        title: "삶을 변화시키는 영적관리의 지혜시리즈 1 -영적관리",
        date: "2025년 1월 26일",
        preacher: "당회장 박응순 목사",
        bible: "고린도전서 2:14-3:3",
        youtubeId: "5zRYoG2_8bo",
      },
      {
        id: "s24",
        title: "신년시리즈- 초대교회로 돌아가자(3)",
        date: "2025년 1월 19일",
        preacher: "당회장 박응순 목사",
        bible: "사도행전 2:37-47",
        youtubeId: "xXM2yIqemQY",
      },
      {
        id: "s25",
        title: "신년시리즈 - 초대교회로 돌아가자(2)",
        date: "2025년 1월 12일",
        preacher: "당회장 박응순 목사",
        bible: "사도행전 2:37-47",
        youtubeId: "HOf6CLcWL1k",
      },
      {
        id: "s26",
        title: "신년시리즈 - 초대교회로 돌아가자(1)",
        date: "2025년 1월 5일",
        preacher: "당회장 박응순 목사",
        bible: "사도행전 2:37-47",
        youtubeId: "BbpqzQaBE5I",
      },
    ],
    wednesday: [
      {
        id: "w1",
        title: "끊어진 소망을 희망의 노래로",
        date: "2025년 7월 9일",
        preacher: "이태섭 목사",
        bible: "고린도후서 1:8-11",
        youtubeId: "dBY3yn0YHLs",
      },
      {
        id: "w2",
        title: "절망 중에 소망을 바라는 기도",
        date: "2025년 7월 2일",
        preacher: "최인철 목사",
        bible: "시편 3:1-8",
        youtubeId: "-nkBDOVH828",
      },
      {
        id: "w3",
        title: "하늘문이 열리는 기도(5) - 감사",
        date: "2025년 6월 25일",
        preacher: "최상필 목사",
        bible: "빌립보서 4:6-7",
        youtubeId: "J-U_hpJtkc4",
      },
      {
        id: "w4",
        title: "말씀하신 대로",
        date: "2025년 6월 18일",
        preacher: "정준호 목사",
        bible: "창세기 21:1-7",
        youtubeId: "vrR_aBjDEkw",
      },
      {
        id: "w5",
        title: "시선",
        date: "2025년 6월 11일",
        preacher: "박성현 목사",
        bible: "요한복음 12:7-8",
        youtubeId: "rEVchP13BwM",
      },
      {
        id: "w6",
        title: "하늘문이 열리는 기도(4) - 합심기도",
        date: "2025년 6월 4일",
        preacher: "최상필 목사",
        bible: "사도행전 12:5-7",
        youtubeId: "xC0OKvtiIK8",
      },
      {
        id: "w7",
        title: "기다림이란",
        date: "2025년 5월 28일",
        preacher: "이태섭 목사",
        bible: "말라기 4:4-6",
        youtubeId: "9dzr57kGPZ0",
      },
      {
        id: "w8",
        title: "주여, 전도의 문을 열어주소서",
        date: "2025년 5월 21일",
        preacher: "최인철 목사",
        bible: "골로새서 4:2-3",
        youtubeId: "ZDoLXMqMSMw",
      },
      {
        id: "w9",
        title: "나와 내집은",
        date: "2025년 5월 7일",
        preacher: "정준호 목사",
        bible: "여호수아 24:14-15",
        youtubeId: "U__82raCn38",
      },
      {
        id: "w10",
        title: "치유는 어떻게?",
        date: "2025년 4월 23일",
        preacher: "이태섭 목사",
        bible: "말라기 4:1-3",
        youtubeId: "gExMkws9iNM",
      },
      {
        id: "w11",
        title: "예수님의 기도",
        date: "2025년 4월 16일",
        preacher: "최인철 목사",
        bible: "누가복음 22:39-44",
        youtubeId: "DpNoSXSbSwk",
      },
      {
        id: "w12",
        title: "하늘 문이 열리는 기도(3)-사랑",
        date: "2025년 4월 9일",
        preacher: "최상필 목사",
        bible: "마태복음 15:21-28",
        youtubeId: "FlCpj0CK3q8",
      },
      {
        id: "w13",
        title: "성령의 인도하심 따라",
        date: "2025년 4월 2일",
        preacher: "정준호 목사",
        bible: "고린도전서 2:10-16",
        youtubeId: "zNtT9Il4JPc",
      },
      {
        id: "w14",
        title: "말씀이 육신이 된다는 것",
        date: "2025년 3월 26일",
        preacher: "박성현 목사",
        bible: "요한복음 1:6-8",
        youtubeId: "j3_baiATxMg",
      },
      {
        id: "w15",
        title: "돌이킴은 어떻게 해야 할까?",
        date: "2025년 3월 19일",
        preacher: "이태섭 목사",
        bible: "말라기 3:7-12",
        youtubeId: "OaP9MqHiOSY",
      },
      {
        id: "w16",
        title: "합심기도의 역사",
        date: "2025년 3월 12일",
        preacher: "최인철 목사",
        bible: "사도행전 1:14",
        youtubeId: "ein5epKKkJg",
      },
      {
        id: "w17",
        title: "하늘 문이 열리는 기도(2)-용서",
        date: "2025년 3월 5일",
        preacher: "최상필 목사",
        bible: "마태복음18:18",
        youtubeId: "nlVtDowfV2k",
      },
      {
        id: "w18",
        title: "십자가만 자랑하는 삶",
        date: "2025년 2월 26일",
        preacher: "정준호 목사",
        bible: "갈라디아서 6:11-18",
        youtubeId: "cCizCaVMc8Q",
      },
      {
        id: "w19",
        title: "인생의 절정",
        date: "2025년 2월 12일",
        preacher: "박성현 목사",
        bible: "창세기 41:38-41",
        youtubeId: "d5uwiUQpehk",
      },
      {
        id: "w20",
        title: "가정은 어떻게 보존해야 할까",
        date: "2025년 2월 5일",
        preacher: "이태섭 목사",
        bible: "말라기 2:14-17",
        youtubeId: "mglIL5d-ET8",
      },
      {
        id: "w21",
        title: "우리의 소원은",
        date: "2025년 1월 22일",
        preacher: "최인철 목사",
        bible: "빌립보서 2:13-14",
        youtubeId: "iZmEUVxcEjA",
      },
      {
        id: "w22",
        title: "입을 지키는 자",
        date: "2025년 1월 8일",
        preacher: "정준호 목사",
        bible: "잠언 13:1-4",
        youtubeId: "jmiVQCLxXBc",
      },
      {
        id: "w23",
        title: "내 증인이 되리라",
        date: "2025년 1월 1일",
        preacher: "박성현 목사",
        bible: "사도행전 2:1-4",
        youtubeId: "XaElfMVgKZ4",
      },
      {
        id: "w24",
        title: "예배는 어떻게?",
        date: "2024년 12월 18일",
        preacher: "이태섭 목사",
        bible: "말라기 1:6-8",
        youtubeId: "GKS77G-0VeI",
      },
      {
        id: "w25",
        title: "하늘 문이 열리는 기도(1)-믿음",
        date: "2024년 12월 11일",
        preacher: "최상필 목사",
        bible: "빌립보서 4:6-7",
        youtubeId: "533UEpl9AG0",
      },
    ],
    allnight: [
      {
        id: "a1",
        title: "순교한 영혼이 있는 곳 (낙원)",
        date: "2025년 7월 11일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:9-11",
        youtubeId: "A9czrkFybto",
      },
      {
        id: "a2",
        title: "순교자들의 호소(다섯째 인을 떼심) -(2)",
        date: "2025년 7월 5일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:9-11",
        youtubeId: "FBGUsxQrWiQ",
      },
      {
        id: "a3",
        title: "순교자들의 호소 (다섯째 인을 떼심) -(1)",
        date: "2025년 5월 30일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:9-11",
        youtubeId: "UpDRFchCp_8",
      },
      {
        id: "a4",
        title: "환난 날에 하나님께 기도하라",
        date: "2025년 5월 23일",
        preacher: "당회장 박응순 목사",
        bible: "영왕기하 19:8-19, 시편 50:14-15",
        youtubeId: "7JEMkLeofHo",
      },
      {
        id: "a5",
        title: "청황색 말의 출현(넷째 인을 떼심) - (2)",
        date: "2025년 5월 16일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:7-8",
        youtubeId: "b8PK6JpAIFk",
      },
      {
        id: "a6",
        title: "청황색 말의 출현 (넷째 인을 떼심) - (1)",
        date: "2025년 5월 9일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:7-8",
        youtubeId: "ftV2IGcEmBI",
      },
      {
        id: "a7",
        title: "검은 말의 출현 (셋째 인을 떼심)",
        date: "2025년 5월 2일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:5-6",
        youtubeId: "etn6LCP5DA8",
      },
      {
        id: "a8",
        title: "둘째 인을 떼시는 어린 양(붉은 말을 탄 자) - 2",
        date: "2025년 4월 25일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:3-4",
        youtubeId: "oKcMxbDDpt0",
      },
      {
        id: "a9",
        title: "예수님의 십자가상에서의 기도",
        date: "2025년 4월 18일",
        preacher: "당회장 박응순 목사",
        bible: "마가복음 15:34",
        youtubeId: "nH6qbCtqg7s",
      },
      {
        id: "a10",
        title: "둘째 인봉을 떼시는 어린 양 (붉은 말을 탄 자) - 1",
        date: "2025년 4월 11일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:3-4",
        youtubeId: "d1y6xrVNyqg",
      },
      {
        id: "a11",
        title: "첫째 인을 떼기 시작하는 어린양(흰말의 출현) - (3)",
        date: "2025년 4월 4일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:1-2",
        youtubeId: "DDuGCfZyRDM",
      },
      {
        id: "a12",
        title: "첫째 인을 떼기 시작하는 어린양(흰말의 출현) - (2)",
        date: "2025년 3월 28일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:1-2",
        youtubeId: "NuU_tphuT8s",
      },
      {
        id: "a13",
        title: "첫째 인을 떼기 시작하는 어린양(흰말의 출현) - (1)",
        date: "2025년 3월 14일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 6:1-2",
        youtubeId: "urx1RlL_FlQ",
      },
      {
        id: "a14",
        title: "어린양 되신 주님께 새 노래로 찬양하라",
        date: "2025년 3월 7일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 5:8-14",
        youtubeId: "38Df5xJenzI",
      },
      {
        id: "a15",
        title: "오른손으로 책을 취하신 어린양",
        date: "2025년 2월 28일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 5: 6-7",
        youtubeId: "li3u6VJHtnE",
      },
      {
        id: "a16",
        title: "보좌에 앉으신 이의 오른손의 책",
        date: "2025년 2월 21일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 5:1-5",
        youtubeId: "EG9HC6_0rQ8",
      },
      {
        id: "a17",
        title: "도우시는 하나님을 의지합시다",
        date: "2025년 2월 14일",
        preacher: "당회장 박응순 목사",
        bible: "시편 42:1-11",
        youtubeId: "1m3gr0Bjj28",
      },
      {
        id: "a18",
        title: "하나님의 보좌 앞에 있는 네 생물",
        date: "2025년 2월 7일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 4:6-11",
        youtubeId: "ve8reFpTc-c",
      },
      {
        id: "a19",
        title: "하늘의 보좌",
        date: "2025년 1월 24일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 4:1-6",
        youtubeId: "8-1it0Kryh4",
      },
      {
        id: "a20",
        title: "하늘의 열린 문으로 보이는 하나님",
        date: "2025년 1월 17일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 4:1-4",
        youtubeId: "MoySamwpshM",
      },
      {
        id: "a21",
        title: "문을 열 때와 닫을 때- 라디오게아교회(3)",
        date: "2025년 1월 10일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 3:20-22",
        youtubeId: "OYHStJqJ6aw",
      },
      {
        id: "a22",
        title: "실상은 가난한 교회- 라오디게아교회(2)",
        date: "2025년 1월 3일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 3:17-19",
        youtubeId: "_l2oCzl85-o",
      },
      {
        id: "a23",
        title: "라오디게아교회 (1)",
        date: "2024년 12월 27일",
        preacher: "당회장 박응순 목사",
        bible: "요한계시록 3:14-22",
        youtubeId: "6ptfyyMKgBA",
      },
    ],
  };

  const filteredSermons = sermons[activeTab];

  // 현재 페이지에 맞는 설교 계산
  const indexOfLastSermon = currentPage * sermonsPerPage;
  const indexOfFirstSermon = indexOfLastSermon - sermonsPerPage;
  const currentSermons = filteredSermons.slice(
    indexOfFirstSermon,
    indexOfLastSermon
  );

  // 페이지 번호 계산
  const totalPages = Math.ceil(filteredSermons.length / sermonsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 pt-20">
      <Header />
      <main className="flex flex-1 container mx-auto px-8 py-12">
        {/* Sidebar Navigation */}
        <aside className="w-1/5 pr-12 border-r border-gray-200 hidden md:block">
          <nav className="sticky top-24">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800">예배 종류</h2>
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => {
                    setActiveTab("sunday");
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                    activeTab === "sunday"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  } transition duration-300`}
                >
                  주일예배
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => {
                    setActiveTab("wednesday");
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                    activeTab === "wednesday"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  } transition duration-300`}
                >
                  수요예배
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => {
                    setActiveTab("allnight");
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                    activeTab === "allnight"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  } transition duration-300`}
                >
                  철야예배
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => {
                    setActiveTab("guest");
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                    activeTab === "guest"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  } transition duration-300`}
                >
                  강사예배
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content - Sermon Cards */}
        <section className="flex-1 pl-12">
          <h1 className="text-5xl font-extrabold mb-10 text-gray-800 pb-4 inline-block">
            {activeTab === "sunday" && "주일예배"}
            {activeTab === "wednesday" && "수요예배"}
            {activeTab === "allnight" && "철야예배"}
            {activeTab === "guest" && "강사예배"}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-2xl"
              >
                <div className="relative w-full aspect-video">
                  <YouTubePlayer
                    videoId={sermon.youtubeId}
                    title={sermon.title}
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 leading-tight">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-semibold">날짜:</span> {sermon.date}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold">설교:</span> {sermon.preacher}
                  </p>
                  <p className="text-gray-700 text-base font-medium">{sermon.bible}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 mx-1 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                이전
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => paginate(page)} className={`px-4 py-2 mx-1 border rounded-lg shadow-sm ${currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-100'}`}>
                  {page}
                </button>
              ))}
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 mx-1 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                다음
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
