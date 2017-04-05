"use strict";
import React from 'react';
import {Link} from 'react-router';
export default React.createClass({
	goBack() {
		window.history.go(-1);
	},
	render() {
		return (	
			<div className="cart">
				<div className="back">
					<a className="iconfont icon-back" onClick={this.goBack}></a>
					<h1>购物车</h1>
					<Link className="iconfont icon-xiaoxizhongxin" to="/cart"></Link>
				</div>
			</div>
		)
	}
});
