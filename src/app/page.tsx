import Image from 'next/image'
import Header from './components/Header'
import Products from './components/Products'
import Provider from './context/Provider'
import Cart from './components/Cart'

export default function Home() {
  return (
    <main className="absolute w-full h-screen ">
      <Provider>
        <Header />
        <Products />
        <Cart />
      </Provider>

    </main>
  )
}
