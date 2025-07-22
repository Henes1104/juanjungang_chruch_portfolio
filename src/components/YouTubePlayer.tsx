'use client';

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  start?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, title, start }) => {
  const src = start ? `https://www.youtube.com/embed/${videoId}?start=${start}` : `https://www.youtube.com/embed/${videoId}`;
  return (
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubePlayer;