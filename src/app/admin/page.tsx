import Header from "@/components/Header";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">관리자 페이지</h1>
        <p className="text-lg">관리자 전용 업로드 및 관리 기능이 구현될 페이지입니다.</p>
      </main>
    </div>
  );
}
