import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
    const promise = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH-POSTS',
        payload: promise
    };
};