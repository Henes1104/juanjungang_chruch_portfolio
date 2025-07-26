"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { departmentBoardData } from "./data";
import Image from "next/image";


export default function DepartmentPage() {
  const [activeTab, setActiveTab] = useState<string>("gyogu1-intro");

  const [showGyogu1SubMenu, setShowGyogu1SubMenu] = useState(false);
  const [showGyogu2SubMenu, setShowGyogu2SubMenu] = useState(false);
  const [showGyogu3SubMenu, setShowGyogu3SubMenu] = useState(false);
  const [showGyogu4SubMenu, setShowGyogu4SubMenu] = useState(false);
  const [showGyogu5SubMenu, setShowGyogu5SubMenu] = useState(false);
  const [showYouthSubMenu, setShowYouthSubMenu] = useState(false);
  const [showEducationSubMenu, setShowEducationSubMenu] = useState(false);

  const subMenuStates: { [key: string]: boolean } = {
    gyogu1: showGyogu1SubMenu,
    gyogu2: showGyogu2SubMenu,
    gyogu3: showGyogu3SubMenu,
    gyogu4: showGyogu4SubMenu,
    gyogu5: showGyogu5SubMenu,
    youth: showYouthSubMenu,
    education: showEducationSubMenu,
  };

  const subMenuSetters: { [key: string]: React.Dispatch<React.SetStateAction<boolean>> } = {
    gyogu1: setShowGyogu1SubMenu,
    gyogu2: setShowGyogu2SubMenu,
    gyogu3: setShowGyogu3SubMenu,
    gyogu4: setShowGyogu4SubMenu,
    gyogu5: setShowGyogu5SubMenu,
    youth: setShowYouthSubMenu,
    education: setShowEducationSubMenu,
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
    { id: "gyogu1", name: "1교구" },
    { id: "gyogu2", name: "2교구" },
    { id: "gyogu3", name: "3교구" },
    { id: "gyogu4", name: "4교구" },
    { id: "gyogu5", name: "5교구" },
    { id: "youth", name: "청년부" },
    { id: "education", name: "교육위원회" },
  ];

  const departmentKr: { [key: string]: string } = {
    "gyogu1": "1교구",
    "gyogu2": "2교구",
    "gyogu3": "3교구",
    "gyogu4": "4교구",
    "gyogu5": "5교구",
    "youth": "청년부",
    "education": "교육위원회",
  }

  return (
    <>
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
              <h2 className="text-3xl font-extrabold mb-8 text-gray-800">부서</h2>
              <ul>
                {tabs.map((tab) => (
                  <li key={tab.id} className="mb-4 relative">
                    <button
                      onClick={() => {
                      setActiveTab(`${tab.id}-intro`);
                      Object.keys(subMenuSetters).forEach(key => {
                        subMenuSetters[key](false);
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
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <section className="flex-1 md:pl-12">
            <h1 className="text-5xl font-extrabold mb-10 text-gray-800 pb-4 inline-block">
              {departmentKr[activeTab.split('-')[0]]}
            </h1>

            <motion.div
              key={activeTab} // activeTab 변경 시 애니메이션 트리거
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
                {tabs.map(tab => (
                  <div key={tab.id}>
                    {activeTab === `${tab.id}-intro` && (
                      <div>
                        <h2 className="text-3xl font-bold mb-4">{tab.name} 소개</h2>
                        {(tab.id.startsWith('gyogu')) ? (
                          <div className="w-full flex justify-center relative">
                            <Image
                              src={`/images/uploads/부서/parish_image.jpg`}
                              alt={tab.name}
                              width={612}
                              height={408}
                              className="rounded-lg shadow-md object-cover mx-auto"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-white text-5xl font-extrabold drop-shadow-lg">{tab.name}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full flex justify-center">
                            <Image
                              src={
                                tab.id === 'youth' ? `/images/uploads/부서/youth.png` :
                                `/images/uploads/부서/education_committee.jpg`
                              }
                              alt={tab.name}
                              width={1200}
                              height={720}
                              className="rounded-lg shadow-md object-contain mx-auto"
                            />
                          </div>
                        )}
                      </div>
                    )}
                    {activeTab === `${tab.id}-board` && (
                      <div>
                        <h2 className="text-3xl font-bold mb-4">{tab.name} 게시판</h2>
                        {departmentBoardData[tab.id] ? (
                          departmentBoardData[tab.id].map((post, index) => (
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
          </section>
        </main>
      </div>
    </>
  );
}