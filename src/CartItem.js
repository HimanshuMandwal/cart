import React from 'react';
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
  //when we deal with array element and want to perform same opertions on each element
  //let say we want to add 5 to each array element we can use arr.map((element)=>{return element+5})
  increaseQuantity = () => {
  this.setState((prevState)=>{
    return{
      Qty: prevState.Qty+1,
    }
  });
  }
  decreaseQuantity = () => {
    this.setState((prevState)=>{
      if(prevState.Qty>0)
      {
        return {
          Qty: prevState.Qty-1,
        }
      }
    })
  }
  render(){
    const { price,title,Qty,img } = this.state;
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