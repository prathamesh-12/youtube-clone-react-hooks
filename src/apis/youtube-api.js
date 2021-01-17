import axios from 'axios';

const _KEY = 'AIzaSyBTCDyjAKQFqIM5LL0ZvSYOuEW9fr9p108';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: _KEY
    }
})