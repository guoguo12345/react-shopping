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
					<Link to='/home' className="active">
						<i className="iconfont icon-shouye"></i>
						<b>首页</b>
					</Link>
					<Link to='/buy'>
						<i className="iconfont icon-shouye-maimaimai"></i>
						<b>买买买</b>
					</Link>
					<Link to='/news'>
						<i className="iconfont icon-dongtai"></i>
						<b>动态</b>
					</Link>
					<Link to='/shoppingcar'>
						<i className="iconfont icon-gouwuche"></i>
						<b>购物车</b>
					</Link>
					<Link to='/my'>
						<i className="iconfont icon-wode"></i>
						<b>我的</b>
					</Link>
				</div>
			</div>
		)
	},
	componentDidMount() {
		var _link = document.querySelector(".app .footer").children;
		for(var i=0;i<_link.length;i++) {
			_link[i].onclick = function() {		
				for(var j=0;j<_link.length;j++) {
					_link[j].className="";
				}
				this.className = 'active';
			}
		}
	}
});