import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
    <div className='navBar'>
        <h1>Shopping App</h1>
        <nav>
          <ul>
            <li>
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className= "link" to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link className= 'link' to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>         
    </div>
    )
}

export default Nav;