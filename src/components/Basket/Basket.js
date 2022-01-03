import React, { Component } from 'react'
import EmptyBasket from './EmptyBasket'
import CartItems from './CartItems'
import './Basket.css'

class Basket extends Component {

    render() {
        return (
            <div className='w-25 h-100'>
                    {this.props.cart.length === 0 ? <EmptyBasket/> : 
                    <CartItems qtyUpdateMinus = {this.props.qtyUpdateMinus} 
                    qtyUpdatePlus={this.props.qtyUpdatePlus} 
                    cart={this.props.cart} 
                    removeCartItem={this.props.removeCartItem} 
                    cancelAllCartItems = {this.props.cancelAllCartItems}
                    />
}

            </div>
        )
    }
}

export default Basket