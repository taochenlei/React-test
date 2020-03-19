import axios from 'axios';

const KEY = 'AIzaSyDWi4YO5iTQjipvCMm0uZRZK9MAtFr6F5s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
