import React from 'react';
import 'lite-youtube-embed/src/lite-yt-embed.css';
import 'lite-youtube-embed';

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  start?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, title, start }) => {
  

  return (
    <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
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