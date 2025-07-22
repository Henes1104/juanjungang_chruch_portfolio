import Header from "@/components/Header";

export default function SheetMusicPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">찬양 악보</h1>
        <p className="text-lg">찬양 악보 (PDF, 이미지 등)가 업로드될 페이지입니다.</p>
      </main>
    </div>
  );
}
