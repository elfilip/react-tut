export default function reducer(state = {
    posts: [],
    status: 'loaded',
    error: ''
}, action) {
    switch (action.type) {
        case 'REST_POST_LOADING':
            return {...state, status: 'loading'};
        case 'REST_POST_LOADED':
            console.log(action.posts)
            return {...state, posts: action.posts}
        case 'REST_POST_FAIL':
            return {...state, status: 'failed', error: action.err}
    }
    return state;
}
/**
 * Created by elfilip on 14.8.17.
 */
