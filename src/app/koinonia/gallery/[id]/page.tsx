import Link from 'next/link';
import { galleryData } from '../data';
import GalleryDetailClient from '@/components/GalleryDetailClient';

interface PageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return galleryData.map((item) => ({
    id: item.id,
  }));
}

export default function GalleryDetailPage({ params }: PageProps) {
  const { id } = params;
  const galleryItem = galleryData.find(item => item.id === id);

  if (!galleryItem) {
    return (
      <div className="container mx-auto px-4 py-8 pt-28 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">갤러리 항목을 찾을 수 없습니다.</h1>
        <p className="text-lg text-gray-700">존재하지 않는 갤러리 항목이거나 삭제되었습니다.</p>
        <div className="mt-8 text-center">
          <Link href="/koinonia/gallery" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
            목록으로
          </Link>
        </div>
      </div>
    );
  }

  return <GalleryDetailClient galleryItem={galleryItem} />;
}
