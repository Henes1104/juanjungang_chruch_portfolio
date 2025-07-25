"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Resource {
  id: string;
  title: string;
  author: string;
  date: string;
  attachments?: string[];
  content?: string;
}

interface ResourceDetailClientProps {
  initialResource: Resource | null;
}

export default function ResourceDetailClient({ initialResource }: ResourceDetailClientProps) {
  const [resource, setResource] = useState<Resource | null>(initialResource);

  useEffect(() => {
    setResource(initialResource);
  }, [initialResource]);

  const handleDownloadAll = () => {
    if (resource && resource.attachments) {
      resource.attachments.forEach((attachment: string, index: number) => {
        const link = document.createElement("a");
        link.href = attachment;
        const fileName = attachment.split("/").pop() || `attachment-${index + 1}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

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
              {resource.attachments && resource.attachments.length > 0 && (
                <button
                  onClick={handleDownloadAll}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto mt-4 md:mt-0"
                >
                  전체 파일 다운로드
                </button>
              )}
            </div>
            <div className="flex items-center text-md text-gray-600 mb-8">
              <span className="mr-6">
                <strong>작성자:</strong> {resource.author}
              </span>
              <span>
                <strong>등록일:</strong> {resource.date}
              </span>
            </div>
            <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap">
              {resource.content ? (
                <p>{resource.content}</p>
              ) : resource.attachments && resource.attachments.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 mt-8">
                  {resource.attachments.map((attachment: string, index: number) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <img
                        src={attachment}
                        alt={`${resource.title} - 첨부파일 ${index + 1}`}
                        width={800}
                        height={1200}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>게시글 내용이 없습니다.</p>
              )}
            </div>
          </div>
          <div className="bg-gray-100 px-8 py-6 text-right">
            <Link
              href="/praise?tab=resources"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              목록으로
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
