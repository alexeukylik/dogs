import {service} from '../service/service'

export const actionsConstants = {
    SET_DOG : 'SET_DOG',
};

export const getDogs = (dogs) => {
    return {
        type: actionsConstants.SET_DOG,
        payload: dogs
    }
};

export const getDogsThunk = () => (dispatch) => {
    service.getDogs()
    .then((data)=>dispatch(getDogs(data)))
};