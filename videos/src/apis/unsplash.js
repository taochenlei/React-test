import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID B8SmD8pohy76DB0F34pxszZVW7PO9UZjd4Gl_XTWjbo'
    }
});
