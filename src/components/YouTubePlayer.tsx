import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'lite-youtube-embed/src/lite-yt-embed.css';

const LiteYouTube = dynamic(() => import('lite-youtube-embed').then(mod => {
  // Ensure the custom element is defined only once
  if (typeof window !== 'undefined' && !customElements.get('lite-youtube')) {
    require('lite-youtube-embed');
  }
  return () => null; // We don't need to render anything from the module itself
}), { ssr: false });

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  start?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, title, start }) => {
  useEffect(() => {
    // This ensures the custom element is registered on the client side
    // and the CSS is applied.
    // The dynamic import above handles the actual loading.
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
      <LiteYouTube />
      <lite-youtube
        videoid={videoId}
        playlabel={title}
        params={start ? `start=${start}` : ''}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></lite-youtube>
    </div>
  );
};

export default YouTubePlayer;