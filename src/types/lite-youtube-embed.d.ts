declare module 'lite-youtube-embed' {
    import React from 'react';

    interface LiteYouTubeEmbedProps {
        id: string;
        title: string;
        adNetwork?: boolean;
        playlist?: boolean;
        playlistCoverId?: string;
        poster?: string;
        noCookie?: boolean;
        activatedClass?: string;
        iframeClass?: string;
        playerClass?: string;
        wrapperClass?: string;
    }

    const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps>;

    export default LiteYouTubeEmbed;
}
