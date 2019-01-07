import conexion from '../servicios/index';

const loadProducts = () => { 
    return async dispatch => {
         let products;
         products = await conexion();
         console.log(products);
        dispatch({ 
             type: "LIST_PRODUCTS", 
             products }) 
        } 
    };

const addProduct = product => {
       return {
            type: "ADD_TO_CART",
            product 
       };    
};

const removeFromCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product
      }
}

export {addProduct, removeFromCart, loadProducts};