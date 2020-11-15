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
    // this.testing();
  }
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
  // testing(){
  //   const promise = new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //     resolve('Done');
  //     },5000);
  //   });
  //   //here setState acts like syncronous call here
  //   promise.then(()=>{
  //     this.setState({Qty:this.state.Qty+10});
  //     this.setState({Qty:this.state.Qty+10});//heree this testing call will increase the QTy by 30
  //     this.setState({Qty:this.state.Qty+10});
  //     console.log('this_state',this.state);
  //   })

  // }
  render(){
    console.log('render')
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