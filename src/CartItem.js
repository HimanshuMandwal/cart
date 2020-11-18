import React from 'react';
class CartItem extends React.Component{
  constructor(){
    super();
    this.state={
      price : 2000,
      title: 'phone',
      qty : 1,
      img: ''
    };

  }
  increaseQuantity = () => {
  this.setState((prevState)=>{
    return{
      qty: prevState.qty+1,
    }
  });
  }
  decreaseQuantity = () => {
    this.setState((prevState)=>{
      if(prevState.qty>0)
      {
        return {
          qty: prevState.qty-1,
        }
      }
    })
  }
  render(){
    const { price,title,qty,img } = this.props.product;
    console.log('this.props',this.props);
    return (
      <div className='cart-item'>
        <div className='left-block'>
        <img style={styles.image} />
        </div>
        <div className='right-block'>
    <div style={{ fontSize:25}}>{title}</div>
    <div style={{ fontSize:25, color:'#777'}}> Rs {price}</div>
    <div style={{ fontSize:25, color:'#777'}}>Qty: {qty}</div>
          <div className='cart-item-actions'>
          {/* Buttons */}
          <img alt='increase' className='action-icons' src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg" onClick={this.increaseQuantity}/>
          <img alt='decrease' className='action-icons' src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg" onClick={this.decreaseQuantity}/>
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