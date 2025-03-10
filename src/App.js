import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Nav from './Components/Nav';
import Shopping from './Components/Shopping';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    console.log("Item to add:", item); // Debugging

    let addItem = products.find(product => product.title === item.title);

    if (!addItem) {
        console.error("Item not found in products:", item);
        return;
    }

    setCart(prevCart => [...prevCart, addItem]);
};


const removeItem = (item) => {
 let removeItem = cart.filter(product => product.title !== item.title)
  setCart(removeItem)
}


  useEffect(() => {
    const getData = async  () => {
      const response = await fetch("https://fakestoreapi.com/products"


      )

      const result = await response.json()
      setProducts(result)
      console.log(result)
    }

    getData()

  }, [])
  return (
    <>
    <div className="App">
      <Nav />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/shopping" element = {<Shopping
        product = {products}
        addToCart = {addToCart}
        />} />

        <Route path = "/cart" element = {<Cart 
        cart = {cart}
        removeItem = {removeItem}
        />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
