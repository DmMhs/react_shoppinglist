import React from 'react';
import './productItem.css';

export default class ProductItem extends React.Component {
 
    removeProduct(id){
        this.props.removeProduct(id);
    }
    render() {
        return (
        <div className='productWrapper'>
			{this.props.product.text}	 {this.props.product.amount} {this.props.product.measure} 

			<button className='removeProduct' onClick={(e)=>this.removeProduct(this.props.id)}>X</button>
        </div>
        );
    }
}