import Header from "@/components/Header";

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">오시는 길</h1>
        <p className="text-lg">교회 오시는 길에 대한 안내 내용이 들어갈 페이지입니다.</p>
      </main>
    </div>
  );
}
