import { resourcesData } from './data';
import KoinoniaResourceListClient from '@/components/KoinoniaResourceListClient';

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1
        className="text-4xl font-bold mb-8 text-center"
      >
        중앙자료실
      </h1>
      <KoinoniaResourceListClient resources={resourcesData} />
    </div>
  );
};

export default ResourcesPage;