import React from 'react';
import 'lite-youtube-embed'; // Import for side effects (registers custom element)

interface LiteYouTubeComponentProps {
  videoId: string;
  title: string;
  start?: number;
}

const LiteYouTubeComponent: React.FC<LiteYouTubeComponentProps> = ({ videoId, title, start }) => {

  return React.createElement(
    'lite-youtube',
    {
      videoid: videoId,
      playlabel: title,
      params: start ? `start=${start}` : '',
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
    }
  );

export default LiteYouTubeComponent;