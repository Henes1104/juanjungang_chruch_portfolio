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

  return <ResourceDetailClient initialResource={resource} />;
}