import {actionsConstants} from '../actions/actionSearchDog'

const initialState = '';

export default (state=initialState, action) => {
    switch (action.type) {
        case actionsConstants.SEARCH_DOG: 
            const newState = action.payload.dogs.filter(e => e.title.includes(action.payload.dogName));
                return {newState, 'InputVale': action.payload.dogName};  

        default: return state;
    }
};