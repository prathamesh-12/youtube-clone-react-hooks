import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtubeAPI from '../apis/youtube-api';

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSearchSubmit = async (item) => {
        const _resp = await youtubeAPI.get('/search', {
            params: {
                q: item
            }
        });
        
        setVideos(_resp.data.items);
    }

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    const onSelectedVideo = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={videos} onSelectedVideo={onSelectedVideo} className="two wide column"/>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default App;