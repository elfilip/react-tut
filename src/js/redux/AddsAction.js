/**
 * Created by elfilip on 10.8.17.
 */
export function addLoad(){
    return {type: 'ADD_LOAD'}
}

export function addAdd(text) {
    return {
        type: 'ADD_ADD',
        text: text
    }
}