"use client";

export const runtime = 'nodejs';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { schoolBoardData } from "./data";
import Link from "next/link";
import Image from "next/image";

export default function SchoolPage() {
  const [activeTab, setActiveTab] = useState<string>("infant-intro");

  const [showInfantSubMenu, setShowInfantSubMenu] = useState(true);
  const [showKindergartenSubMenu, setShowKindergartenSubMenu] = useState(false);
  const [showYunyeonSubMenu, setShowYunyeonSubMenu] = useState(false);
  const [showElementarySubMenu, setShowElementarySubMenu] = useState(false);
  const [showMiddleSubMenu, setShowMiddleSubMenu] = useState(false);
  const [showHighSubMenu, setShowHighSubMenu] = useState(false);
  const [showEnglishSubMenu, setShowEnglishSubMenu] = useState(false);

  const subMenuSetters: { [key: string]: React.Dispatch<React.SetStateAction<boolean>> } = {
    infant: setShowInfantSubMenu,
    kindergarten: setShowKindergartenSubMenu,
    yunyeon: setShowYunyeonSubMenu,
    elementary: setShowElementarySubMenu,
    middle: setShowMiddleSubMenu,
    high: setShowHighSubMenu,
    english: setShowEnglishSubMenu,
  };

  const subMenuStates: { [key: string]: boolean } = {
    infant: showInfantSubMenu,
    kindergarten: showKindergartenSubMenu,
    yunyeon: showYunyeonSubMenu,
    elementary: showElementarySubMenu,
    middle: showMiddleSubMenu,
    high: showHighSubMenu,
    english: showEnglishSubMenu,
  };

  useEffect(() => {
    const currentMainTab = activeTab.split('-')[0];
    Object.keys(subMenuSetters).forEach(key => {
      if (key !== currentMainTab) {
        subMenuSetters[key](false);
      }
    });
  }, [activeTab]);

  const tabs = [
    { id: "infant", name: "영아부" },
    { id: "kindergarten", name: "유치부" },
    { id: "yunyeon", name: "유년부" },
    { id: "elementary", name: "초등부" },
    { id: "middle", name: "중등부" },
    { id: "high", name: "고등부" },
    { id: "english", name: "영어예배부" },
  ];

  const departmentKr: { [key: string]: string } = {
    "infant": "영아부",
    "kindergarten": "유치부",
    "yunyeon": "유년부",
    "elementary": "초등부",
    "middle": "중등부",
    "high": "고등부",
    "english": "영어예배부"
  }

  const departmentImageMap: { [key: string]: string } = {
    "infant": "infant.jpg",
    "kindergarten": "kindergarten.jpg",
    "yunyeon": "junior.jpg",
    "elementary": "elementary.jpg",
    "middle": "middle_school.jpg",
    "high": "high_school.jpg",
    "english": "english_worship.jpg",
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 pt-20">
      <Header />
      <main className="flex flex-col md:flex-row flex-1 container mx-auto px-4 sm:px-8 py-12">
        <div className="md:hidden mb-8">
          <div className="mb-6">
            <label htmlFor="department-select" className="block text-sm font-medium text-gray-600 mb-2">부서 바로가기</label>
            <select
              id="department-select"
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300 ease-in-out"
              value={activeTab.split('-')[0]}
              onChange={(e) => {
                const tabId = e.target.value;
                setActiveTab(`${tabId}-intro`);
                // Resetting submenu states is good practice
              }}
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center bg-gray-200 p-1 rounded-lg shadow-inner">
            <button
              onClick={() => setActiveTab(`${activeTab.split('-')[0]}-intro`)}
              className={`w-1/2 py-2 text-base font-semibold rounded-md transition-all duration-300 ease-in-out ${
                activeTab.endsWith('-intro') ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'
              }`}>
              소개
            </button>
            <button
              onClick={() => setActiveTab(`${activeTab.split('-')[0]}-board`)}
              className={`w-1/2 py-2 text-base font-semibold rounded-md transition-all duration-300 ease-in-out ${
                activeTab.endsWith('-board') ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'
              }`}>
              게시판
            </button>
          </div>
        </div>

        <aside className="w-full md:w-1/5 md:pr-12 md:border-r md:border-gray-200 hidden md:block">
          <nav className="sticky top-24">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800">학교</h2>
            <ul>
              {tabs.map((tab) => {
                const setterName = `setShow${tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}SubMenu`;
                const subMenuStateName = `show${tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}SubMenu`;
                return (
                  <li key={tab.id} className="mb-4 relative">
                    <button
                      onClick={() => {
                        setActiveTab(`${tab.id}-intro`); // Always set to intro
                        subMenuSetters[tab.id](true); // Always open the submenu

                        // Close all other submenus
                        Object.keys(subMenuSetters).forEach(key => {
                          if (key !== tab.id) {
                            subMenuSetters[key](false);
                          }
                        });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                        (activeTab.startsWith(tab.id)) ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                      } transition duration-300 flex justify-between items-center`}
                    >
                      {tab.name}
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          subMenuStates[tab.id] ? "rotate-180" : "rotate-0"
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
                      {subMenuStates[tab.id] && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-4 mt-2 space-y-2 overflow-hidden"
                        >
                          <li>
                            <button
                              onClick={() => setActiveTab(`${tab.id}-intro`)}
                              className={`w-full text-left px-4 py-2 rounded-lg text-base font-medium ${
                                activeTab === `${tab.id}-intro` ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-blue-50"
                              } transition duration-300`}
                            >
                              {tab.name} 소개
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => setActiveTab(`${tab.id}-board`)}
                              className={`w-full text-left px-4 py-2 rounded-lg text-base font-medium ${
                                activeTab === `${tab.id}-board` ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-blue-50"
                              } transition duration-300`}
                            >
                              {tab.name} 게시판
                            </button>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <section className="flex-1 md:pl-12">
          <h1 className="text-5xl font-extrabold mb-10 text-gray-800 pb-4 inline-block">
            {departmentKr[activeTab.split('-')[0]]}
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              {tabs.map(tab => (
                <div key={tab.id}>
                  {activeTab === `${tab.id}-intro` && (
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{tab.name} 소개</h2>
                      <div className="w-full flex justify-center">
                        <Image
                          src={`/images/uploads/부서/${departmentImageMap[tab.id]}`}
                          alt={tab.name}
                          width={1200}
                          height={720}
                          className="rounded-lg shadow-md object-contain mx-auto"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                  {activeTab === `${tab.id}-board` && (
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{tab.name} 게시판</h2>
                      {schoolBoardData[tab.id] ? (
                        schoolBoardData[tab.id].map((post, index) => (
                          <div key={post.id} className={`border rounded-lg shadow-md mb-4 p-6 transition-shadow duration-300 hover:shadow-lg ${
                            index % 2 === 0 ? 'bg-white' : 'bg-blue-50'
                          }`}>
                            <h3 className="text-2xl font-bold text-blue-800 mb-2">{post.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                              <span className="mr-4"><span className="font-semibold">작성자:</span> {post.author}</span>
                              <span><span className="font-semibold">작성일:</span> {post.date}</span>
                            </div>
                            <p className="text-gray-700 mb-4">{post.content}</p>
                            {/* attachments 부분은 추후 구현 예정 */}
                          </div>
                        ))
                      ) : (
                        <p>{tab.name} 게시판 내용을 여기에 추가하세요.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
