// add data to local storage
const addToDb = (id) => {
    let shoppingCart = {}

    // get Previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    // add Quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// get Stored Data from local storage

const getStoredData = () =>{

    let shoppingCart = {}

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

// Remove specific item from local storage
const removeItemFromDb = id =>{
    // get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// clear all elements from local Storage
const deleteShoppingCart = () => localStorage.removeItem('shopping-cart');

export {
    addToDb,
    getStoredData,
    removeItemFromDb,
    deleteShoppingCart
}