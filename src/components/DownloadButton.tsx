"use client";

interface DownloadButtonProps {
  resource: {
    title: string;
    attachments?: string[];
  };
}

export default function DownloadButton({ resource }: DownloadButtonProps) {
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

  if (!resource.attachments || resource.attachments.length === 0) {
    return null; // No attachments, so no button needed
  }

  return (
    <button
      onClick={handleDownloadAll}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto mt-4 md:mt-0"
    >
      전체 파일 다운로드
    </button>
  );
}
