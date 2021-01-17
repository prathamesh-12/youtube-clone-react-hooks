import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectedVideo }) => {

    // eslint-disable-next-line array-callback-return
    const _videos = videos.map((video, i) => {
        return (
            <VideoItem 
                video={video}
                onSelectedVideo={onSelectedVideo}
                key={`video.id.videoId-${i}`}
                />
        )
    })

    return (
        <div>
            {_videos}
        </div>
    )
}

export default VideoList;