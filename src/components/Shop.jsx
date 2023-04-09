import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utils/fakeDB';
import { CartContext, ProductContext } from '../App';

const Shop = () => {
    // const productData = useLoaderData()

    const products = useContext(ProductContext);
    console.log(products);
    const [cart, setCart] = useContext(CartContext);

    // Cart btn handler
    const handleAddToCart = (product) =>{
        let newCart = [];
        const exists = cart.find(existingProduct => existingProduct.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    
    // console.log(productData);
    return (
        <div className='my-container product-container'>
            {
                products.map(product => <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                     />)
            }
        </div>
    );
};

export default Shop;