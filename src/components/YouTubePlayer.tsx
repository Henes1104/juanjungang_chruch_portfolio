import React from 'react';
import dynamic from 'next/dynamic';
import 'lite-youtube-embed/src/lite-yt-embed.css';

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  start?: number;
}

const DynamicLiteYouTube = dynamic<YouTubePlayerProps>(
  () => import('./LiteYouTubeComponent'), // Create a new component for this
  { ssr: false }
);

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, title, start }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
      <DynamicLiteYouTube videoId={videoId} title={title} start={start} />
    </div>
  );
};

export default YouTubePlayer;

export default YouTubePlayer;