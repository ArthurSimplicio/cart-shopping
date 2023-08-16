"use client"
import React, {useState, useContext} from 'react'
import {BsSearch} from 'react-icons/bs'
import fetchProducts from '../api/fetchProducts'
import AppContext from '../context/AppContext'


export const SearchBar = () => {
    const [search, setSearch] = useState("")
    const {setProducts, setLoading}:any = useContext(AppContext)

    const handleSearch = async (event:any) => {
        event.preventDefault()
        setLoading(true)
        const products = await fetchProducts(search)
        setProducts(products);
        setLoading(false)
        setSearch('')
        
    }
    return (
        <form onSubmit={handleSearch} className=' w-full flex justify-between bg-white max-w-[500px] shadow gap-3 pr-3'>
            <input className=' w-full p-[13px] flex-grow-0 text-xs font-medium outline-none border-r border-gray-[#ddd] '
            type="search" 
            value={search}
            placeholder="Search products" 
            onChange={({target}) => setSearch(target.value)}
            required />
            <button type='submit' className='flex justify-center items-center text-base text-gray-700 border-none'><BsSearch /> </button>
            
        </form>
    )
}
export default SearchBar
