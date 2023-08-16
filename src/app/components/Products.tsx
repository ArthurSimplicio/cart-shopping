'use client'
import React, { useEffect, useContext } from 'react';
import fetchProducts from '../api/fetchProducts';
import ProductCard from './ProductCard';
import Loading from './Loading';
import AppContext from '../context/AppContext';

const Products = () => {
    
    const {products, setProducts, loading, setLoading}:any = useContext(AppContext)

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
            setLoading(false)
    
        })
        
    },[setLoading, setProducts])
    console.log(products);
    return (
        (loading && <Loading />) || (<section className='container pt-[120px] px-5 pb-12 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5'>
        {products.map((product:any) => <ProductCard key={product.id} data={product}/>)}
    </section>
    )
        
    )
}

export default Products