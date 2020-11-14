import React from 'react';
//this is a class based component whereas our App() is a functional component
class CartItem extends React.Component{
  render(){
    return (
      <div className='cart-item'>
        <div className='left-block'>
        <img style={styles.image}/>
        </div>
        <div className='right-block'>
          <div style={{ fontSize:25}}>Phone</div>
          <div style={{ fontSize:25, color:'#777'}}> Rs 23000</div>
          <div style={{ fontSize:25, color:'#777'}}>Qty: 1</div>
          <div className='cart-item-actions'>
          {/* Buttons */}

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