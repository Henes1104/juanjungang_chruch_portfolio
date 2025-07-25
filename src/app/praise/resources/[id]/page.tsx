import { resourcesData } from "@/lib/data";
import ResourceDetailClient from "@/components/ResourceDetailClient";

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

  return <ResourceDetailClient initialResource={resource} />;
}
