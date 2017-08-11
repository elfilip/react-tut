/**
 * Created by elfilip on 10.8.17.
 */

export default function reducer(state = {
    showID: false
}, action){
    switch (action.type) {
        case 'SET_TOGGLE_SHOW_ID':
            return {...state,showID: !state.showID}
        case 'ASYNC_START':
            console.log("async start");
            return state;
        case 'ASYNC_COMPLETE':
            console.log("async complete");
            return state;
    }
    return state;
}