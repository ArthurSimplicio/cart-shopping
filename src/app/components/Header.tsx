import React from 'react'
import SearchBar from './SearchBar'
import CartButton from './CartButton'


export const Header = () => {
    return (
        <header className='fixed w-full h-auto bg-emerald-400 z-[1]'>
            <div className='p-5 flex justify-between'>
                <SearchBar />  
                <CartButton />     
            </div>
        </header>
    )
}
export default Header