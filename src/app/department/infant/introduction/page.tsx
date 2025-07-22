import Image from "next/image";

export default function InfantIntroductionPage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">영아부 소개</h2>
      <p className="text-lg mb-4">영아부 소개 내용이 들어갈 페이지입니다.</p>
      <div className="relative w-full max-w-md mx-auto h-64 mb-4">
        <Image
          src="/public/uploads/부서/영아부.jpg" // Replace with actual image path
          alt="영아부 이미지"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
