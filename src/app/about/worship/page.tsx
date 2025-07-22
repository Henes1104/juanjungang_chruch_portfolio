import Header from "@/components/Header";

export default function WorshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">예배 시간 및 장소 안내</h1>
        <p className="text-lg">예배 시간과 장소에 대한 안내 내용이 들어갈 페이지입니다.</p>
      </main>
    </div>
  );
}
