/**
 * Created by elfilip on 10.8.17.
 */

export default function reducer(state = {
    adds: []
}, action){
    switch (action.type) {
        case 'ADD_LOAD':
            var addsNew=["Kup to","Vezmi to","Nakupuj hned"];
            return {...state, adds: addsNew};
        case 'ADD_ADD':
            var addNew={...state.adds};
            addNew.push(action.add);
            return {...state, adds: addNew};
    }
}