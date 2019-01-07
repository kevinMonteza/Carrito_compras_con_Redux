import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.concat(action.product)
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.product.id)
            }; 
        case "LIST_PRODUCTS":
            return{
                ...state,
                products: action.products
            }
        default: return state;

    }
}
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
    export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, thunk));