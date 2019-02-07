import basketDog from './../reducers/basketDog';

const addBasketDog = {
    type: 'SET_DOG_BASKET',
    dog : {image: 'kjenfvle', price: 'hgrbi', title: 'kjrfnjrn'}
};

const initialState = {
    items:[]
};

describe('test', ()=> {
    it('reducer basket dog', ()=>{
        expect(basketDog(initialState, addBasketDog)).toEqual(
            {"items": [{"image": "kjenfvle", "price": "hgrbi", "title": "kjrfnjrn"}]}
            )
    })
});
