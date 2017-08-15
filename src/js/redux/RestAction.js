/**
 * Created by elfilip on 10.8.17.
 */
import axios from 'axios';


export function loadPosts() {
    return function (dispatch) {
        dispatch(postLoadStarted());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                dispatch(postLoadComplete(response.data))
            })
            .catch(function (error) {
                dispatch(postLoadFail(error.err))
            });
    }
}

export function postLoadStarted() {
    return {type: 'REST_POST_LOADING'}
}

export function postLoadComplete(posts) {
    return {type: 'REST_POST_LOADED', posts: posts}
}

export function postLoadFail(err){
    return {type: 'REST_POST_FAIL',err:err};
}

