import { actionsConstants } from "../actions/actionServiceDogs";

export const initialState = {
    isLoading: false,
    items: [{}]
};

let price = 0;

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsConstants.SET_DOG:
            let newState = {...state, isLoading: true, items: [...state.items]};
            newState.items = action.payload.map(url => {
                let title = url.split('breeds/').pop().split('/')[0];
                price +=1;
                let  image = url;
                return { title, price, image};
            });
            price = 0;
            return newState;

        default:
            return state;
    }
};

