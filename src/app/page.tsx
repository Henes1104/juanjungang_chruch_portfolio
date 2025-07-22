'use client';

import Image from "next/image";
import Header from "@/components/Header";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import YouTubePlayer from "@/components/YouTubePlayer";
import dynamic from "next/dynamic";


const ImageModal = dynamic(() => import("@/components/ImageModal"), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div id="home" className="min-h-screen flex flex-col bg-gray-100 text-gray-900 pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-black">
        {/* Background Image with integrated overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/church_background.jpg')"
          }}
        ></div>

        <div className="relative z-10 text-white p-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block">삶에 희망과 행복을 주는</span>
            <span className="block">주안중앙교회</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            주안중앙교회에 오신 여러분을 환영합니다.
          </motion.p>
          <motion.button
            className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            onClick={() => {
              const welcomeSection = document.getElementById("welcome");
              if (welcomeSection) {
                const offsetTop = welcomeSection.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            교회 소개 보기
          </motion.button>
        </div>
      </section>

      {/* Welcome Section */}
      <motion.section
        id="welcome"
        className="w-full py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">주안중앙교회에 오신 것을 환영합니다</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            인터넷이라는 공간 또한 하나님께서 우리에게 주신 또 다른 신앙의 공동체이며 선교의 장이기에 시공간을 넘어선 또 다른 교회인 이곳을 통하여 하나님의 사랑이 여러분들에게 넘치기를 기도합니다. 또한 그 넘치는 사랑을 받은 우리가 이곳에서 이웃을 향해 그 받은 사랑을 전파해 나갈 수 있는 선한 도구로 이곳이 사용되기를 원합니다.
          </p>
        </div>
      </motion.section>

      {/* Vision and Mission Section */}
      <motion.section
        className="w-full py-20 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/church_slogun.jpg" // Slogan image
              alt="교회 비전 이미지"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto object-contain cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">교회 비전과 사명</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              2025년 우리 주안중앙교회는 <span className="font-bold text-indigo-600">성장과 축복의 비전 1151</span>을 향해 전진합니다.<br/>
              <span className="font-bold text-indigo-600">&quot;1(십만성도), 1(일만나눔방), 5(오천지역장), 1(일천선교)&quot;</span> 비전을 가지고 우리 교회는 성경이 함께 하는 교회, 건강한 교회, 성장하는 교회를 세우는 것을 목표를 세웠습니다.<br/>
              특히 2025년에는 <span className="font-bold text-indigo-600">&ldquo;초대교회로 돌아가자&rdquo;</span> 라는 표어를 가지고 하나님께서 우리 교회를 향해 부어주시는 넘치는 은혜와 사랑으로 세상을 섬길 것입니다.
              이 공간을 통하여 네티즌 여러분들에게도 영육간에 강건해지는 하나님의 사랑과 은혜가 함께 하기를 기도합니다.<br/>
              또한 영혼이 새롭게 되고 소망이 넘치며 인생에 있어서 가장 중요한 것이 무엇인지 생각해볼 수 있게 되기를 소원합니다. 그리고 하나님께서 사랑하는 네티즌 여러분의 가정과 자녀, 사업장과 일터에 하나님의 도우심이 함께 하기를 기도합니다.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Latest Sermons Section */}
      <motion.section
        className="w-full py-20 bg-white text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">최신 설교</h2>
          <motion.div
            className="relative w-full max-w-4xl mx-auto mb-6 aspect-video"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <YouTubePlayer
              videoId="VPoEmm6kJro"
              title="우리 인생의 가장 절박한 문제를 통한 시험이 올 때"
            />
          </motion.div>
          <motion.div
            className="max-w-4xl mx-auto text-left mb-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-2 text-gray-800">우리 인생의 가장 절박한 문제를 통한 시험이 올 때</h3>
            <p className="text-gray-600 text-lg mb-4">2025년 7월 13일 | 당회장 박응순 목사 | 주일예배</p>
            <p className="text-gray-700 text-xl leading-relaxed">마태복음 4:1-4</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sermon Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <YouTubePlayer
                  videoId="A9czrkFybto"
                  title="순교한 영혼이 있는 곳 (낙원)"
                  start={3975}
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">순교한 영혼이 있는 곳 (낙원)</h3>
                <p className="text-gray-600 text-sm mb-4">2025년 7월 11일 | 당회장 박응순 목사 | 철야예배</p>
                <p className="text-gray-700 text-base">요한계시록 6:9-11</p>
              </div>
            </motion.div>

            {/* Sermon Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <YouTubePlayer
                  videoId="dBY3yn0YHLs"
                  title="끊어진 소망을 희망의 노래로"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">끊어진 소망을 희망의 노래로</h3>
                <p className="text-gray-600 text-sm mb-4">2025년 7월 9일 | 이태섭 목사 | 수요예배</p>
                <p className="text-gray-700 text-base">고린도후서 1:8-11</p>
              </div>
            </motion.div>

            {/* Sermon Card 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <YouTubePlayer
                  videoId="6ALBjxndD6k"
                  title="맥추 감사절을 지켜라"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">맥추 감사절을 지켜라</h3>
                <p className="text-gray-600 text-sm mb-4">2025년 7월 6일 | 당회장 박응순 목사 | 주일예배</p>
                <p className="text-gray-700 text-base">출애굽기 23:16, 34:21-24</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Online Offering Guide Section */}
      <motion.section
        className="w-full py-20 bg-gray-50 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">온라인 헌금 안내</h2>
          
          <div 
            className="bg-white p-8 rounded-lg shadow-lg inline-block text-left"
          >
            <motion.p 
              className="text-xl font-semibold text-gray-800 mb-2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >계좌 : 106-910037-84604 (하나은행) 예금주: 주안중앙교회</motion.p>
            <motion.p 
              className="text-md text-gray-700 leading-relaxed mb-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              병상에 계시거나 국내외 출장 혹은 기타 여러가지 사정으로 인해<br/>
              교회에 오셔서 헌금하시기 어려우신 성도님들의 요청으로<br/>
              아래와 같이 헌금을 드릴 수 있는 방법을 마련하여 안내해 드립니다.
            </motion.p>
            <motion.p 
              className="text-md text-gray-700 mb-2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >입금시 이름과 헌금종류를 기재해주세요. (예:박주안A감사)</motion.p>
            <motion.p 
              className="text-md text-red-500 font-semibold"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >※ 통장에 6글자까지만 기록됩니다. 반드시 이름(1명)과 헌금종류만 기입해 주시기 바랍니다.</motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact and Directions Section */}
      <motion.section
        id="contact"
        className="w-full py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">오시는 길 및 연락처</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              주안중앙교회는 성도님들을 언제나 환영합니다. 궁금한 점이 있으시면 언제든지 연락 주세요.
            </p>
            <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">주소:</span> (우) 21449 인천광역시 부평구 가재울로 163</p>
            <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">전화:</span> 032-584-9145-9176</p>
            
            <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">이메일:</span> juanjch@naver.com</p>
            
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="https://www.google.com/maps/search/?api=1&query=인천광역시 부평구 가재울로 163" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/juanjungang_bupyeong_upscaled.png"
                alt="교회 지도"
                width={600}
                height={256}
                className="rounded-lg shadow-lg w-full h-auto object-cover cursor-pointer"
              />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full py-10 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4">&copy; 2025 주안중앙교회. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/login" className="text-white hover:text-blue-400 transition duration-300">로그인</Link>
            <Link href="/admin" className="text-white hover:text-blue-400 transition duration-300">관리자</Link>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <ImageModal
          src="/images/church_slogun.jpg"
          alt="교회 표어 이미지"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
