/* eslint-disable default-case */
import * as actionType from '../actions/actionType';
import updateObject from '../utility';

const intialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, { results: updatedArray })
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) })
        case actionType.DELETE_RESULT:
            return deleteResult(state, action);
        case actionType.ZERO_RESULT:
            return updateObject(state, { results: [0] })
    }
    return state;
}

export default reducer;