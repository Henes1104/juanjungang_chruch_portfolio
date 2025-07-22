'use client';

import Header from "@/components/Header";
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-8">개인정보처리방침</motion.h1>
          <motion.div variants={itemVariants} className="prose lg:prose-xl bg-white p-8 rounded-lg shadow-md">
            <p>주안중앙교회는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거하여 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. 개인정보의 처리 목적</h2>
            <p>교회는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul className="list-disc list-inside">
              <li>교인 등록 및 관리</li>
              <li>헌금 관리</li>
              <li>교회 소식 및 행사 안내</li>
              <li>각종 증명서 발급</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. 개인정보의 처리 및 보유 기간</h2>
            <p>교회는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. 개인정보의 제3자 제공</h2>
            <p>교회는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. 정보주체의 권리·의무 및 행사방법</h2>
            <p>정보주체는 교회에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc list-inside">
              <li>개인정보 열람요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제요구</li>
              <li>처리정지 요구</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. 개인정보 보호책임자</h2>
            <p>교회는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <ul className="list-disc list-inside">
              <li>성명: 이평강</li>
              <li>직책: 청년부</li>
              <li>연락처: 010-8443-4510</li>
            </ul>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}