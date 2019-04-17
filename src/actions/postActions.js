import {FETCH_POSTS, NEW_POST} from './types';
import axios from 'axios';

export function fetchPosts() {
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts.data
            }))
    }
}

export function createPost(postData) {
    return function (dispatch) {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: postData
        })
            .then(post => dispatch({
                type: NEW_POST,
                payload: post.data,
            }))
    }
}