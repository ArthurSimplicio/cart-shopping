'use client'
import React, {useContext} from 'react'
import CartItem from './CartItem'
import AppContext from '../context/AppContext'
import formatCurrency from '../utils/formatCurrency'

const Cart = () => {
  const {cartItems, isCartVisible}:any = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc:{}|string|number, item:{}|string|number|any) =>  item.price + acc, 0)
  return (
    <section className={`fixed w-full max-w-[330px] flex flex-col justify-between bg-white h-screen top-0 right-0 pt-24 px-5 pb-5 cart ${isCartVisible ? 'cart--active': ''}`}>
      <div className='cart-items flex-grow overflow-auto'>
        {cartItems.map((cartItem:string|any) => <CartItem key={cartItem.id} data={cartItem}/>)}
      </div>

      <div className='text-3xl font-medium  pt-9 px-0 pb-4 border-t border-solid border-[#ddd]'>{formatCurrency(totalPrice,  'BRL')}</div>   
    </section>
  )
}

export default Cart
 