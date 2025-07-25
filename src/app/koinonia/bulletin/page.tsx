import { bulletinsData } from './data';
import BulletinListClient from '@/components/BulletinListClient';

export default function BulletinListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-28">
      <div className="container mx-auto px-4 py-8">
        <h1
          className="text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight"
        >
          온라인 주보
        </h1>
        <BulletinListClient bulletins={bulletinsData} />
      </div>
    </div>
  );
}