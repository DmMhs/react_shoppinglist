import React from 'react';
import './shopInput.css';

export default class ShopInput extends React.Component {
    constructor(props) {
    super(props);

    this.state = {value: 'coffe,', value2: '10', selectedValue: 'kg'};

    this.handleChange = this.handleChange.bind(this);
	this.handleAmount = this.handleAmount.bind(this);
	this.handleSelect = this.handleSelect.bind(this);
    this.addProduct = this.addProduct.bind(this);
		
	this.helper();
    }
	//передаєм текст продукту
    handleChange(e) {
        this.setState({
			value: e.target.value
		});
    }
	//передаєм кількість продукту 
   	handleAmount(event) {
        this.setState({
			value2: event.target.value
		});
    }
	//передаєм одиниці виміру
	handleSelect(event){
		this.setState({
			selectedValue: event.target.value
		});
	}
	//добавляєм продукт(кнопка)
    addProduct(product, amount, measure) {
    if(product.length > 0){
        this.props.addProduct(product, amount, measure);
        this.setState({value: '... ,'});
		this.setState({value2: '0'});
		this.setState({selectedValue: ''});
    }
    }

helper() {
	setInterval(()=> {
		console.log('Product text is - ' + this.state.selectedValue)
	}, 10000);
}
    render() {
    return (
            <div>
                <input type='text' value={this.state.value} onChange={this.handleChange} className='input1' required />
                <span style={{fontSize: '1.2rem', marginLeft: '20px', marginRight: '20px'}}>+</span>  
                <input type='text' value={this.state.value2} onChange={this.handleAmount} className='input2' required/>
                <select value={this.state.selectedValue} style={{fontSize: '1rem'}}onChange={this.handleSelect}  required>
                    <option value=""> </option>
					<option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
					<option value="ml">ml</option>
                    <option value="l">l</option>
                    <option value="pcs">pcs</option>
               </select>
                <button className='btn btn-primary' onClick={() => this.addProduct(this.state.value, this.state.value2, this.state.selectedValue)}>add</button>
            </div>
        );
    }
}
