import {actionsConstants} from '../actions/actionShowDog'

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsConstants.DOG_ITEM:
        const currentDog = +action.dog.dogItem.split('detail/').pop().split('"')[0];
                return  {...state, ...action.dog.arrayDogs[currentDog-1] };
    
        default: return state;
    }
}