import {actionsConstants} from '../actions/actionSetDeleteBasketDog'

const initialState = {
    items:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsConstants.SET_DOG_BASKET:
            let newState = '';
            if(state.items.length > 0){
                newState = state.items.filter((el) => {
                    return el.price === action.dog.price
                })
            };      
            if (newState && newState.length > 0) {
                return state ;
            };
            
            return {
                ...state, items: [...state.items,  action.dog]
            };

        case actionsConstants.DELETE_DOG_BASKET:
           const newStateDel = state.items.filter((el)=> el.price !== action.dog); 
            return {
                ...state, items: [...newStateDel]
            };

        default: return state;
    }
};