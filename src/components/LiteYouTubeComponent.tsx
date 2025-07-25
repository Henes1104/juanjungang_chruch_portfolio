import React, { useEffect } from 'react';

interface LiteYouTubeComponentProps {
  videoId: string;
  title: string;
  start?: number;
}

const LiteYouTubeComponent: React.FC<LiteYouTubeComponentProps> = ({ videoId, title, start }) => {
  useEffect(() => {
    // Ensure the custom element is defined only once
    if (typeof window !== 'undefined' && !customElements.get('lite-youtube')) {
      require('lite-youtube-embed');
    }
  }, []);

  return (
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
  );
};

export default LiteYouTubeComponent;