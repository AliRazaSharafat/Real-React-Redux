const updateObject=(oldState,updateValues)=>{
    return{
        ...oldState,
        ...updateValues
    }
}

export default updateObject;