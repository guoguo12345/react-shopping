"use strict";
import React from 'react';
class FashList2 extends React.Component {
	getFashionList2() {
		fetch("/rest/fashList2").then((response) => {
		  return response.json();
		}).then((data) => {
		//  console.log(data.list);
		  this.setState({fashionList2:data.list});	 
		//  console.log(this.state.fashionList2);
		}).catch((e) => {
		  console.log("Oops, error");
		});
	}
	constructor() {
		super();
		this.state = {fashionList2: []};
		this.getFashionList2();
	}
	render() {
	//	console.log(this.state.fashionList2);
		let fashionList2 = this.state.fashionList2.map((item,index) => {
			return (
					<a key={index}>
						<img src={item.img}/>
						<i>{item.title}</i>
						<b>{item.price}</b>
					</a>
			)	
		});
		return (
			<div className="fashList2">
				<div className="nav">
					<a>综合</a>
					<a>销量</a>
					<a>新品</a>
				</div>
				<div className="goodsList">
					{fashionList2}
				</div>
			</div>
		)
	}
}
export default FashList2;
