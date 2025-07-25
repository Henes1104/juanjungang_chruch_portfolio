'use client';

import React, { useEffect } from 'react';

interface Props {
  videoId: string;
  title: string;
  start?: number;
}

const LiteYouTubeComponent: React.FC<Props> = ({ videoId, title, start }) => {
  useEffect(() => {
    import('lite-youtube-embed'); // 웹 컴포넌트 동적 로딩
  }, []);

  return React.createElement('lite-youtube', {
    videoid: videoId,
    playlabel: title,
    params: start ? `start=${start}` : '',
  });
};

export default LiteYouTubeComponent;