import {combineReducers} from 'redux'
import { addToCartReducer } from './cartReducer'
import { getAllProductsReducer, productTopRateReducer, getProductByIdReducer } from './productReducer'
import { userLoginReducer, registerReducer } from './userReducer'


export const rootReducer = combineReducers({
    getAllProductsReducer,
    getProductByIdReducer,
    addToCartReducer,
    userLoginReducer,
    registerReducer,
    productTopRateReducer
})