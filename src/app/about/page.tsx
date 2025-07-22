import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">교회 소개</h1>
        <p className="text-lg">
          주안중앙교회 소개 페이지입니다. 담임목사 인사말, 교회 비전과 사명,
          예배 시간 및 장소 안내, 오시는 길, 교회 연혁 요약 등의 내용이 들어갈
          예정입니다.
        </p>
      </main>
    </div>
  );
}
