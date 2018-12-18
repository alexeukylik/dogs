export const actionsConstants = {
    DELETE_DOG_BASKET: 'DELETE_DOG_BASKET',
    SET_DOG_BASKET: 'SET_DOG_BASKET',
};

export const deleteDog = dog => ({
    type: 'DELETE_DOG_BASKET',
    dog
});

export const addBasketDog = (dog) => ({
    type: 'SET_DOG_BASKET',
    dog 
});
