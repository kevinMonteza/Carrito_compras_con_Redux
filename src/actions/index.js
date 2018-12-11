const addProduct = product => {
       return {
            type: "ADD_TO_CART",
            product 
       };    
};

const removeToCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product
      }
}

export {addProduct, removeToCart};