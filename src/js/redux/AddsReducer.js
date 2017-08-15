/**
 * Created by elfilip on 10.8.17.
 */

export default function reducer(state = {
    adds: [],
    counter: 0
}, action) {
    switch (action.type) {
        case 'ADD_LOAD':
            var addsNew = [{id: state.counter++, text: "Kup to"}, {
                id: state.counter++,
                text: "Vezmi to"
            }, {id: state.counter++, text: "Nakupuj hned"}];
            return {...state, adds: addsNew};
        case 'ADD_ADD':
            var addsNew = state.adds.slice();
            var add = {
                id: state.counter++,
                text: action.text
            }
            addsNew.push(add);
            return {...state, adds: addsNew};

        case 'ADD_REMOVE':
            return {...state, adds: state.adds.filter(element => element.id !== action.id)};

    }
    return state;
}