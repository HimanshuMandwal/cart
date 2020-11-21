import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products :[],
      loading: true,
    };
    this.db = firebase.firestore(); //as we are going to use this many places so we take a shorthand for that as this.db  .
  }
  componentDidMount(){
    this.db
    .collection('products')
    .onSnapshot((spashot)=>{
      spashot.docs.map((doc)=>{
        console.log(doc.data());
      });

      const products = spashot.docs.map((doc)=>{
         const data=doc.data();
         data['id'] = doc.id;
         return data;
      });
      this.setState({
          products,
          loading: false,
        }
      )
    });
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty+=1;
    // this.setState({
    //   products //this is sorthand for the products : products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);//this will give the reference of that particular
    docRef.update({
      qty:products[index].qty+1,
    }).then(()=>{
      console.log('Doc Updated successfully');
    }).catch((error)=>{
      console.log('Error :',error);
    })

  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // if(products[index].qty>0)
    // products[index].qty-=1;
    // this.setState({
    //   products //this is sorthand for the products : products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);//this will give the reference of that particular
   if(products[index].qty == 0){
     return ;
   }
    docRef.update({
      qty:products[index].qty-1,
    }).then(()=>{
      console.log('Doc Updated successfully');
    }).catch((error)=>{
      console.log('Error :',error);
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item)=> item.id!==id);
    this.setState({
      products: items
    })
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product)=>{
      count+=product.qty;
    });
    return count;
  }
  getTotalPrice = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product)=>{
      count+=(product.price*product.qty);
    });
    return count;
  }
  addProduct = () => {
    this.db.collection('products').add({
      title: 'Washing Machine',
      price:123124,
      qty: 2,
      img: '',
    }).then((docRef) =>{
      console.log('Product is added',docRef);
    }).catch((error) => {
      console.log('Error',error);
    });
  }
  render(){
  return (
    <div className="App">
      <Navbar
        count = {this.getCartCount()}
      />
      <button onClick={this.addProduct} style={{padding: 20 , fontSize: 20}}>Add a Product</button>
      <Cart
        products = {this.state.products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
      />
      {this.state.loading && <h1>Loading Products ...</h1>}
      <div style={{fontSize: 20, padding:10}}>TOTAL : {this.getTotalPrice()}</div>

    </div>
  );
  }
}

export default App;
