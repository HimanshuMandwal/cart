import React from 'react';
//this is a class based component whereas our App() is a functional component
class CartItem extends React.Component{
  constructor(){
    super();
    this.state={
      price : 2000,
      title: 'phone',
      Qty : 1,
      img: ''
    };
  }
  render(){
    const { price,title,Qty,img } = this.state;//here we have used object destructuring
    return (
      <div className='cart-item'>
        <div className='left-block'>
        <img style={styles.image} />
        </div>
        <div className='right-block'>
    <div style={{ fontSize:25}}>{title}</div>
    <div style={{ fontSize:25, color:'#777'}}> Rs {price}</div>
    <div style={{ fontSize:25, color:'#777'}}>Qty: {Qty}</div>
          <div className='cart-item-actions'>
          {/* Buttons */}
          <img alt='increase' className='action-icons' src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg"/>
          <img alt='decrease' className='action-icons' src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg"/>
          <img alt='delete' className='action-icons' src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"/>
          </div>
        </div>
      </div>
    )
  }

}

const styles ={
   image :{
     height:110,
     width:110,
     borderRadious:4,
     background: '#ccc'
   }
}

export default CartItem;