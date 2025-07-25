
'use client';

import Header from "@/components/Header";
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
          <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-8">이용약관</motion.h1>
          <motion.div variants={itemVariants} className="prose lg:prose-xl bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mt-8 mb-4">제1조 (목적)</h2>
            <p>1. 이 약관은 주안중앙교회 웹사이트(이하 &quot;사이트&quot;)에서 제공하는 모든 서비스(이하 &quot;서비스&quot;)의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">제2조 (약관의 효력과 변경)</h2>
            <p>1. 이 약관은 사이트를 통해 게시하고 이용자가 이에 동의함으로써 효력을 발생합니다.</p>
            <p>2. 교회는 합리적인 사유가 발생할 경우 이 약관을 변경할 수 있으며, 변경된 약관은 사이트에 공지함으로써 효력을 발생합니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">제3조 (회원의 의무)</h2>
            <p>1. 회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 교회가 통지하는 사항을 준수하여야 하며, 기타 교회의 업무에 방해되는 행위를 하여서는 안됩니다.</p>
            <p>2. 회원은 교회의 사전 승낙 없이는 서비스를 이용하여 영업활동을 할 수 없으며, 그 영업활동의 결과에 대해 교회는 책임을 지지 않습니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">제4조 (서비스 이용)</h2>
            <p>1. 서비스 이용은 교회의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.</p>
            <p>2. 교회는 시스템 등 장치의 보수점검, 교체, 시스템의 고장, 통신의 두절, 기타 불가항력적 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">제5조 (서비스의 중단)</h2>
            <p>1. 교회는 다음 각 호에 해당하는 경우 서비스 제공을 중지할 수 있습니다.</p>
            <ul className="list-disc list-inside">
              <li>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
              <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
              <li>기타 불가항력적 사유가 있는 경우</li>
            </ul>
            <p>2. 교회는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능할 경우, 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">제6조 (게시물의 관리)</h2>
            <p>교회는 회원이 게시하거나 등록하는 서비스 내의 내용물이 다음 각 호의 1에 해당한다고 판단되는 경우에 사전 통지 없이 삭제할 수 있습니다.</p>
            <ul className="list-disc list-inside">
              <li>다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우</li>
              <li>공공질서 및 미풍양속에 위반되는 내용인 경우</li>
              <li>범죄적 행위에 결부된다고 인정되는 내용일 경우</li>
              <li>교회의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
              <li>기타 관계 법령에 위반된다고 판단되는 경우</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">제7조 (저작권의 귀속 및 이용제한)</h2>
            <p>1. 교회가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 교회에 귀속합니다.</p>
            <p>2. 회원은 서비스를 이용함으로써 얻은 정보를 교회의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">제8조 (분쟁 해결)</h2>
            <p>서비스 이용과 관련하여 발생한 분쟁에 대해서는 대한민국 법률을 적용하며, 본 분쟁으로 인하여 소송이 제기될 경우 교회의 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.</p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
