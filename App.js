import React from 'react';
import './App.css';
import Header from './components/header';
import ShopInput from './components/shopInput';
import ProductItem from './components/productItem';

class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
          products: [
          {id: 1, text: 'milk,', amount:'2', measure:'l'},
          {id: 2, text: 'bread,', amount: '1', measure:'pcs'},
		  {id: 3, text: 'bananas,', amount: '1.5', measure:'kg'}		  
          ],
          nextId: 4
      };
      this.addProduct = this.addProduct.bind(this);
      this.removeProduct = this.removeProduct.bind(this);
		//
//		this.helper();
      }
    
	addProduct(productText, productAmount, productMeasure) {
		console.log('Fired:', productText);
    	var products = this.state.products.slice();
        products.push({id: this.state.nextId, text:productText, amount:productAmount, measure:productMeasure});
        this.setState({
           	products: products, 
            nextId: ++this.state.nextId
        });
    }
    removeProduct(id) {
        this.setState({
			products: this.state.products.filter((product, index) => product.id !== id)
		});
	}

//function to check functionality via console
//   helper() {
//       setInterval(()=>{
//           console.log()
//       }, 2000);
//   }
/////////////////////////////////////////////////

    
  render() {
    return (
        <div className="App">
        <div className="list-wrapper">
            <Header />
            <ShopInput productText='' productAmount={this.addProduct} measure={this.addProduct} addProduct={this.addProduct}/>
            <ul>
                {
                this.state.products.map((product, amount, measure) => {
                return <ProductItem product={product} key={product.id} id={product.id} amount={amount} measure={measure} removeProduct={this.removeProduct} />
                })
                }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
