/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './VideoItem.css';

const VideoItem = ({video, onSelectedVideo}) => {
    

    return (
        <div className="ui list">
            <div className="item video-item" onClick={() => onSelectedVideo(video)}>
                <img 
                    src={video.snippet.thumbnails.default.url} 
                    className="ui image"
                    alt={video.id.videoId}/>
                <div className="content">
                    <a className="header" href="">{video.snippet.title}</a>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;