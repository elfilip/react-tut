/**
 * Created by elfilip on 10.8.17.
 */
export function toggleShowID() {
    return {type: 'SET_TOGGLE_SHOW_ID'}
}

export function asyncOp() {
   return function (dispatch) {
        dispatch(asyncStart());
        setTimeout(new function () {
            dispatch(asyncComplete());
        }, 3000)
    }
}

export function asyncStart() {
    return {type: 'ASYNC_START'}
}

export function asyncComplete() {
    return {type: 'ASYNC_STOP'}
}

