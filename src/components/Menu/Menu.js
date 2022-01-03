import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div className="card" onClick={this.props.onAdd}>
            <img src= {this.props.product.image} alt={this.props.product.name}/>
            <h3>{this.props.product.name}</h3>
            <h3>IDR {this.props.product.price}</h3>
            </div>
        )
    }
}

export default Menu
