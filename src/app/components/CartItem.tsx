import React from 'react'
import {BsCartDashFill} from 'react-icons/bs'
import { useContext } from 'react'
import formatCurrency from '../utils/formatCurrency'
import AppContext from '../context/AppContext'

const CartItem = ({data}:any) => {
    const {cartItems, setCartItems}:any = useContext(AppContext)
    const {id, thumbnail, title, price} = data

    const handleRemoveItem = () => {
        const updateItems = cartItems.filter((item:any) => item.id != id);
        setCartItems(updateItems)
    };

  return (
    <section className='cart-item relative flex items-start border-b border-solid border-[#ddd] pb-5 mb-5'>
        <img 
        src={thumbnail} 
        alt="product" 
        className='w-[70px]'/>
    
        <div className='pt-0 pr-9 p-0 pl-3'>
        <h3 className='text-sm font-medium mb-2'>{title}</h3>
        <h3 className=' text-2xl font-medium'>{formatCurrency(price, 'BRL')}</h3>

        <button 
        type="button"
        onClick={handleRemoveItem}
        className='absolute top-0 right-0 text-red-600 text-2xl cursor-pointer'>
            <BsCartDashFill />
        </button>
        
        </div>
    </section>
  )
}

export default CartItem