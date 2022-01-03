import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import Add from '../Main/add.svg'
import './Basket.css'
import FooterBasket from './FooterBasket'

export class CartItems extends Component {
    render() {
        const subtotalPrice = this.props.cart.reduce((total, product) => total + product.qty * product.price, 0);
        const tax = subtotalPrice * 10 / 100
        const grandTotal = tax + subtotalPrice

        return (
            <div>
                <div className='cart-items-wrapper'>
                {this.props.cart.map((item)=>
                (
                    <div className='order-items' key = {item.id}>
                    <img id={item.id} src= {item.image} onClick={this.props.removeCartItem} alt="" />
                        <div className="order-items-middle">
                            <h4>{item.name}</h4>
                            <div className="order-items-middle-lower" > 
                                <button id = {item.id} className="minus-item order-button" onClick={this.props.qtyUpdateMinus}>
                                    -
                                </button>
                                <div className="qty-order order-button" >{item.qty}</div>
                                <button className="plus-item order-button" id = {item.id} onClick={this.props.qtyUpdatePlus}>
                                    +
                                </button>
                                </div>
                            </div>
                            <h4>{item.price}</h4>
                    </div>
                ))}
                </div>

                <FooterBasket cancelAllCartItems = {this.props.cancelAllCartItems} 
                subtotalPrice={subtotalPrice}
                tax={tax}
                grandTotal={grandTotal}
                cart={this.props.cart}
                />
            </div>
          )  }
}

export default CartItems
