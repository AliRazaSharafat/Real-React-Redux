import * as actionType from '../actions/actionType';
import updateObject from '../utility';

const intialState = {
    counter: 0,
}

const reducer = (state = intialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionType.INCREMENT:
            return updateObject(state, { counter: state.counter + 1 })
        case actionType.DECREMENT:
            return updateObject(state,{counter: state.counter - 1})
        case actionType.ADD:
            return updateObject(state,{counter: state.counter + action.val})
        case actionType.SUBTRACT:
            return updateObject(state,{counter: state.counter - action.val})
    }

    return state;
}

export default reducer;