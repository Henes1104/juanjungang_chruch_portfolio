import React, { useEffect } from 'react';

interface LiteYouTubeComponentProps {
  videoId: string;
  title: string;
  start?: number;
}

const LiteYouTubeComponent: React.FC<LiteYouTubeComponentProps> = ({ videoId, title, start }) => {
  useEffect(() => {
    // Dynamically import lite-youtube-embed only on the client side
    if (typeof window !== 'undefined' && !customElements.get('lite-youtube')) {
      import('lite-youtube-embed');
    }
  }, []);

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