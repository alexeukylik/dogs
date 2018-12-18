export const actionsConstants = {
    SEARCH_DOG : 'SEARCH_DOG',
};

export const setSearch = (dogName, dogs) => {
    return {
        type: 'SEARCH_DOG',
        payload: {
            dogName, 
            dogs,
        }
    }
};