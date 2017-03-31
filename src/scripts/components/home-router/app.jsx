"use strict";
import React from 'react';
import {Link} from 'react-router';
export default React.createClass({
	render() {
		return(
			<div className='app'>
				<div className="content">
					{this.props.children}
				</div>
				<div className='footer'>
					<Link to='/home'>
						<i className="iconfont">&#xe62d;</i>
						<b>首页</b>
					</Link>
					<Link to='/buy'>
						<i className="iconfont">&#xe608;</i>
						<b>买买买</b>
					</Link>
					<Link to='/news'>
						<i className="iconfont">&#xe611;</i>
						<b>动态</b>
					</Link>
					<Link to='/shoppingcar'>
						<i className="iconfont">&#xe837;</i>
						<b>购物车</b>
					</Link>
					<Link to='/my'>
						<i className="iconfont">&#xe609;</i>
						<b>我的</b>
					</Link>
				</div>
			</div>
		)
	}
});