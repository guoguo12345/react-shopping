"use strict";
import React from 'react';
class FashList1 extends React.Component {
	getFashionList1() {
		fetch("/rest/fashList1").then((response) => {
		  return response.json();
		}).then((data) => {
		//  console.log(data.list);
		  this.setState({fashionList1:data.list});	 
		//  console.log(this.state.fashionList1);
		}).catch((e) => {
		  console.log("Oops, error");
		});
	}
	constructor() {
		super();
		this.state = {fashionList1: []};
		this.getFashionList1();
	}
	render() {
		let fashionList1 = this.state.fashionList1.map((item,index) => {
			return (
					<a key={index}>
						<img src={item.img}/>
						<i>{item.desc}</i>
					</a>
				
			)
			
		});
		return (
			<div className="fashList1">
				{fashionList1}
			</div>
		)
	}
}
export default FashList1;
