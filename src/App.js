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

  }
  componentDidMount(){
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((spashot)=>{
    //   spashot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   });

    //   const products = spashot.docs.map((doc)=>{
    //      const data=doc.data();//this is just the data inside each doc
    //      data['id'] = doc.id;//this will get the unique id for each doc
    //      return data;
    //   });
    //   this.setState({
    //       products,
    //       loading: false,
    //     }
    //   )
    // });
    firebase
    .firestore()
    .collection('products')
    .onSnapshot((spashot)=>{ //this method is used to automatically called when there is any change in firebase DB this is like a listner to the react APP
      spashot.docs.map((doc)=>{
        console.log(doc.data());
      });

      const products = spashot.docs.map((doc)=>{
         const data=doc.data();//this is just the data inside each doc
         data['id'] = doc.id;//this will get the unique id for each doc
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
    console.log('please increase the quantity');
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty+=1;
    this.setState({
      products //this is sorthand for the products : products
    })

  };
  handleDecreaseQuantity = (product) => {
    console.log('please increase the quantity');
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty>0)
    products[index].qty-=1;
    this.setState({
      products //this is sorthand for the products : products
    })

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
  render(){
    //this count works fine without the need of the setstate because when we press onIncreaseQty then only
    //the value of count is changed and at that time the handleIncQty use setstate which re-render whole of our app
  return (
    <div className="App">
      <Navbar
        count = {this.getCartCount()}
      />
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
