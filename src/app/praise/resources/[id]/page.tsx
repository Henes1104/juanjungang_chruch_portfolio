

import { resourcesData } from "@/app/praise/data";
import DownloadButton from "@/components/DownloadButton";

export async function generateStaticParams() {
  return resourcesData.map((resource) => ({
    id: resource.id,
  }));
}

export default async function ResourceDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const resource = resourcesData.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 pt-20">
        <main className="flex flex-1 justify-center items-center">
          <p className="text-xl">자료를 찾을 수 없습니다.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-20">
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-8 py-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {resource.title}
              </h1>
              <DownloadButton resource={resource} />