'use client';

// Import the custom element registration for lite-youtube-embed
// This import is for its side effects to register the <lite-youtube> element
import 'lite-youtube-embed/src/lite-yt-embed.css'; // Import CSS for styling
import 'lite-youtube-embed'; // This registers the custom element

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  start?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, title, start }) => {
  // lite-youtube-embed handles the thumbnail and lazy loading
  // The `videoid` attribute is required.
  // The `playlabel` attribute can be used for accessibility.
  // The `start` parameter can be passed via `params` attribute.
  const params = start ? `start=${start}` : '';

  return (
    <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
      <lite-youtube
        videoid={videoId}
        playlabel={title}
        params={params}
        style={{ width: '100%', height: '100%' }}
      ></lite-youtube>
    </div>
  );
};

export default YouTubePlayer;
