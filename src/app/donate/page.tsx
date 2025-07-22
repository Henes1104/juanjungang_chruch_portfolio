import Header from "@/components/Header";

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">온라인 헌금 안내</h1>
        <p className="text-lg">온라인 헌금 계좌 정보 및 안내 내용이 들어갈 예정입니다.</p>
      </main>
    </div>
  );
}
