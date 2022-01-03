import React, { Component, Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import menuicon from './menuIcon.svg'
import search from './magnifying-glass.svg'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <>
            <header className='d-flex'>
                <div className='main-header w-75 bg-white shadow-sm'>
                    <div className="wrapper-main-header w-100 d-flex justify-content-between ms-2">
                        <img src={menuicon} alt="" />
                        <h3>Food Items</h3>
                        <img className='me-3' src={search} alt="" />
                    </div>
                </div>
                <div className="basket-header w-25 bg-white shadow-sm d-flex justify-content-center align-items-center">
                    <h3>Cart</h3>
                    <h4 className='cart-qty ms-3 mt-1'>{this.props.cartQty}</h4>
                    </div>
            </header>
            </>
        )
    }
}

export default Header
