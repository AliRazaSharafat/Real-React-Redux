import * as actionType from './actionType';

export const saveResult = (res) => {
    return {
        type: actionType.STORE_RESULT,
        result: res
    }
}

export const storeResult = res => {
    return (dispatch,getState) => {
        //getState approach is used for easiness if we change state in actionCreator like here
        //and in reducer. We should change state in reducer if we want.
        setTimeout(() => {
            // const oldCounter=getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }

}

export const deleteResult = resElId => {
    return {
        type: actionType.DELETE_RESULT,
        resultElId: resElId
    }
}

export const zeroResult = count => {
    return {
        type: actionType.ZERO_RESULT,
        counter: count
    }
}