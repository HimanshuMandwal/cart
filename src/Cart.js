import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
  constructor(){
    super();
    this.state={
      products :[
        {
          price : 2000,
          title: 'Watch',
          qty : 10,
          img: ''
        },
        {
          price : 10000,
          title: 'phone',
          qty : 1,
          img: ''
        },
        {
          price : 20000,
          title: 'laptop',
          qty : 3,
          img: ''
        },
      ]
    };

  }
  render(){
    const { products } = this.state;
    return(
      <div className='cart'>
        {products.map((product)=> {
          return  < CartItem
                    product={product}
                    key={product.id}
                  />
        })}
      </div>
    )
  }
}

export default Cart;