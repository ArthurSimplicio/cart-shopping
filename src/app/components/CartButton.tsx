"use client"
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useContext} from 'react'
import AppContext from '../context/AppContext'
import CartItem from './CartItem'

const CartButton = () => {
  const {cartItems, isCartVisible, setIsCartVisible}:any = useContext(AppContext)
  return (
    <button type="button" onClick={() => setIsCartVisible(!isCartVisible)} className='relative ml-5 text-gray-[#ddd] text-2xl cursor-pointer'>
        <AiOutlineShoppingCart />
        {cartItems.length > 0 && <span className='absolute bg-red-600 w-4 h-4 top-0 left-0 text-white text-xs font-semibold rounded-2xl flex items-center justify-center'>{cartItems.length}</span>}
    </button>
  )
}

export default CartButton