import React from 'react';

import './VideoItem.css';

const VideoItem = ({video, onSelectedVideo}) => {
    

    return (
        <div className="ui list">
            <div className="item video-item" onClick={() => onSelectedVideo(video)}>
                <img src={video.snippet.thumbnails.default.url} className="ui image"/>
                <div className="content">
                    <a className="header" >{video.snippet.title}</a>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;