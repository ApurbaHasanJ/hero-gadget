import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utils/fakeDB';

const Shop = () => {
    const productData = useLoaderData()

    // Cart btn handler
    const handleAddToCart = (id) =>{
        addToDb(id)
    }
    // console.log(productData);
    return (
        <div className='my-container product-container'>
            {
                productData.map(product => <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                     />)
            }
        </div>
    );
};

export default Shop;