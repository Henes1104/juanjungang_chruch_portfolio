import Header from "@/components/Header";

export default function SundaySermonsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">주일예배 설교 영상</h1>
        <p className="text-lg">주일예배 설교 영상 목록이 들어갈 페이지입니다.</p>
      </main>
    </div>
  );
}
