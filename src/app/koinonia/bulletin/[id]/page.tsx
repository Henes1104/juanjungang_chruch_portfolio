import { bulletinsData } from '../data';
import Image from 'next/image';

interface BulletinDetailPageProps {
  params: { id: string };
}

export default function BulletinDetailPage({ params }: BulletinDetailPageProps) {
  const bulletin = bulletinsData.find((b) => b.id === params.id);

  if (!bulletin) {
    return <div className="container mx-auto p-4 text-center">주보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{bulletin.title}</h1>
      <p className="text-gray-600 mb-2">등록자: {bulletin.author}</p>
      <p className="text-gray-600 mb-4">등록일: {bulletin.date}</p>
      <div className="grid grid-cols-1 gap-4">
        {bulletin.files.map((file, index) => (
          <div key={index} className="relative w-full h-auto">
            <Image
              src={`/images/uploads/bulletins/${file}`}
              alt={`${bulletin.title} - ${index + 1}`}
              width={800}
              height={1200}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
