import React, { Component } from 'react'
import Basket from '../../components/Basket/Basket'
import Header from '../../components/Header/header'
import Main from '../../components/Main/Main'
import '../../index.css'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
        displayMenuModal: false,
        menu: [
          {id: '1',
          name: 'Espresso',
          price: 10000,
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg'},
          {id: '2',
          name: 'Cafe Latte',
          price: 10000,
          image: 'https://th.bing.com/th/id/R.b81627288ca568baa60e7e19021c927b?rik=jNPoug1tM7ZVhQ&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2013%2f10%2f15%2f11231637%2fwoodcap.jpg&ehk=0ZAREYW%2fS2K4tU7YBf5jEi8lCNBze%2fSxhbhB4qcWopg%3d&risl=&pid=ImgRaw&r=0'},
          {id: '3',
          name: 'Cappucino',
          price: 5000,
          image: 'https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-superJumbo.jpg'},
          {id: '4',
          name: 'Red Velvet Latte',
          price: 33000,
          image: 'https://tul.imgix.net/content/article/red-velvet-lattes.jpg?auto=format,compress&w=740&h=486&fit=crop'},
          {id: '5',
          name: 'Choco Rum',
          price: 28000,
          image: 'https://images-gmi-pmc.edge-generalmills.com/bbfe0346-0abb-4adc-b924-e58abbd39bda.jpg'},
          {id: '6',
          name: 'Black Forest',
          price: 30000,
          image: 'https://th.bing.com/th/id/OIP.WsQwga4pG6Someodp6QUywHaHa?pid=ImgDet&rs=1'},
          {id: '7',
          name: 'Chicken Katsu',
          price: 60000,
          image: 'https://dashofsavory.com/wp-content/uploads/2017/02/IMG_96531-960x638.jpg'},
          {id: '8',
          name: 'Salmon Truffle',
          price: 60000,
          image: 'https://chefsheilla.com/wp-content/uploads/2020/02/IMG_3312-copy-3.jpg'},
          {id: '9',
          name: 'Wiener Schnietzel',
          price: 69000,
          image: 'https://th.bing.com/th/id/R.a583cd43b9708a04b7c2154768c5da6f?rik=qepwz0%2f3Aamb9A&riu=http%3a%2f%2fwww.melissadarabian.net%2fsite%2fassets%2fChicken-Milanese.jpg&ehk=m1swa3L5MK5v3x3xmUW5Sxac9t0aPULiutWuyb6X%2fDg%3d&risl=&pid=ImgRaw&r=0'},
  
      ],
      cart: [],
      cartItems: 0
    }
    this.toggleAddMenu =this.toggleAddMenu.bind(this)
    this.toggleAddMenuNot = this.toggleAddMenuNot.bind(this)
}

//nampilin modal add menu
toggleAddMenu = ()=>{
  if(!this.state.displayMenuModal){
    this.setState({displayMenuModal: true})
    console.log('apakabar')
  }
}

//ngilangin modal add menu
toggleAddMenuNot = ()=>{
  if(this.state.displayMenuModal){
    this.setState({displayMenuModal: false})
  }
}

//add item to cart
onAdd = (product)=>{
  console.log(product.target.id)
  const test = this.state.menu.find(prod => prod.id === product.target.id)
  console.log(test)
  const exist = this.state.cart.find(prod => prod.id === product.target.id)
  if(exist){
    alert("Product already exists in cart")
    // this.qtyUpdatePlus(product)
  }else{
    this.setState({
      cart: [...this.state.cart, {...test, qty: 1}]
  })
    this.cartQtyPlus()

  }
  setTimeout(()=>{
    this.updateCart()},100)
}

//remove items
removeCartItem = (product)=>{
  let cartFiltered = this.state.cart.filter(item => item.id !== product.target.id)
  this.setState({
    cart: cartFiltered
  })
  setTimeout(()=>{
    this.updateCart()}, 500)
    // setTimeout(()=>{
    //   this.cartQty()}, 800)
  
}

cancelAllCartItems = ()=>{
  this.setState({
    cart: []
  })
  this.setState({
    cartItems: 0
  })
}

//cart items increment
qtyUpdatePlus = (product)=>{
  const index = this.state.cart.findIndex(item => item.id === product.target.id)
  // console.log(index)
  let cart = this.state.cart[index]
  cart.qty++
  this.updateCart()
  this.cartQtyPlus()

}

//cart items decrement
qtyUpdateMinus = (product)=>{
  const index = this.state.cart.findIndex(item => item.id === product.target.id)
  // console.log(index)
  let cart = this.state.cart[index]
  if(cart.qty <= 0){
  cart.qty = 0
}else{
  cart.qty--
  this.cartQtyMinus()
}
  this.updateCart()
  // this.cartQty()
}

//cart items qty
cartQtyPlus = () =>{
  this.setState({
    cartItems: this.state.cartItems+1
  })
  setTimeout(()=>{
    this.updateCartQty()
  }, 600)
}

cartQtyMinus = () =>{
  this.setState({
    cartItems: this.state.cartItems-1
  })
  setTimeout(()=>{
    this.updateCartQty()
  }, 600)
}


updateCartQty = () =>{
  this.setState({
    cartItems: this.state.cartItems
  })
}

onAddMenuItem = (menuNew) =>{
  this.state.menu.push(menuNew)
  this.updateMenu()
  console.log("apani")
}

updateMenu = () =>{
  this.setState({
      menu : this.state.menu
  })
}


updateCart = () =>{
  this.setState({
    cart: this.state.cart
  })
  setTimeout(()=>{
    console.log(this.state.cart)
}, 300)
}


//itemcart ambil dari cart


  render() {
        
    return (
      <div className='fluid-container g-0'>
        <Header cartQty={this.state.cartItems}></Header>
        <div className='d-flex'>
          <Main toggleAddMenu = {this.toggleAddMenu} 
          menu={this.state.menu} onAdd = {this.onAdd} 
          toggleAddMenuNot = {this.toggleAddMenuNot} 
          displayMenuModal = {this.state.displayMenuModal}
          onAddMenuItem = {this.onAddMenuItem}
          ></Main>
          <Basket  cart={this.state.cart} 
          cancelAllCartItems={this.cancelAllCartItems} 
          qtyUpdatePlus = {this.qtyUpdatePlus} 
          qtyUpdateMinus={this.qtyUpdateMinus} 
          removeCartItem={this.removeCartItem}
          ></Basket>
        </div>
      </div>
    )
  }
}

export default Home
