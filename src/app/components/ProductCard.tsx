import React, {useContext} from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs';
import formatCurrency from '../utils/formatCurrency';
import AppContext from '../context/AppContext';


const ProductCard = ({data}:any) => {
    const {title, thumbnail, price} = data;
    const {cartItems, setCartItems}:any = useContext(AppContext)

    const handleAddCart = () =>  setCartItems([ ...cartItems, data])

    return (
        <section className=' product-cart relative m-0 m-auto w-full max-w-[300px] bg-white flex flex-col cursor-pointer hover:shadow-md'>
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt='product' className='w-full' />
            <div className='p-5 border-t border-solid border-[#ddd]'>
                <h2 className='font-normal text-3xl mb-2'>{formatCurrency(price, 'BRL')}</h2>
                <h2 className='font-medium  text-base text-gray-500 leading-6'>{title}</h2>
            </div>
            <button type="button" onClick={handleAddCart} className='button-cart absolute hidden justify-center items-center top-0 right-0 w-11 h-11 mx-4 my-3 text-2xl text-[#0c5dd6] bg-[#FDFDFD]  rounded-[50px] '><BsFillCartPlusFill /></button>
        </section>
    )
}

export default ProductCard
