import { combineReducers } from 'redux';
import dogs from './serviceDogs';
import search from './searchDog';
import basketDog from './basketDog';
import dog from './showDog';

export default combineReducers({
    dogs,
    dog,
    search, 
    basketDog,
});