import React from 'react';
import './index.css'

import Logo from '../../assets/logo.png'
import Image from 'react-bootstrap/Image'
import { FiShoppingCart as Cart } from 'react-icons/fi'

export default function Home() {
  return (
    <div className='Container'>
      <nav className='nav-container'>
        <Image className='ImageLogo' src={Logo} alt='Vianna Music Store' roundedCircle />

        <ul className='nav-list'>
          <li>Home</li>
          <li>Sobre</li>
        </ul>

        <ul className="nav-cart">
          <Cart className='cart' />
          <li>0</li>
        </ul>
      </nav>
    </div>
  )
}