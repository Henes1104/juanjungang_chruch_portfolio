export const runtime = 'nodejs';

import { noticesData } from '../data';
import Link from 'next/link';

interface PageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return noticesData.map((notice) => ({
    id: notice.id,
  }));
}

const NoticeDetailPage = ({ params }: PageProps) => {
  const { id } = params;

  const notice = noticesData.find((n) => n.id === id);

  if (!notice) {
    return (
      <div className="container mx-auto px-4 py-8 pt-28 text-center">
        <h1 className="text-4xl font-bold">공지사항을 찾을 수 없습니다.</h1>
        <Link href="/koinonia/notice" legacyBehavior>
          <a className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
            목록으로 돌아가기
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <div
        className="bg-white rounded-lg shadow-xl p-8"
      >
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{notice.title}</h1>
        <div className="text-md text-gray-500 mb-6 border-b pb-4">
          <span>작성자: {notice.author}</span> | <span>작성일: {notice.date}</span>
        </div>
        <div className="prose max-w-none mb-8">
          <p className="whitespace-pre-line">{notice.content}</p>
        </div>
        <div className="mt-8 text-right">
          <Link href="/koinonia/notice" legacyBehavior>
            <a className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
              목록으로
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailPage;
