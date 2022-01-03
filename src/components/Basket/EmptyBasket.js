import React, { Component } from 'react'
import FooterBasket from './FooterBasket'
import emptyBasket from './if cart empty.svg'

export class EmptyBasket extends Component {
    render() {
        return (
            <div>
            <figure className='d-flex justify-content-center mt-5 empty-basket ms-3'>
                <img src={emptyBasket} alt="" />
            </figure>
            <FooterBasket/>
            </div>

        )
    }
}

export default EmptyBasket
