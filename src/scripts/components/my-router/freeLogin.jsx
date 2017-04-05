"use strict";
import React from 'react';
import {Link} from 'react-router';
export default React.createClass({
	goBack() {
		window.history.go(-1);
	},
	render() {
		return (
			<div className="freeLogin">		
				<div className="back">
					<a className="iconfont icon-back" onClick={this.goBack}></a>
					<h1>免密登录</h1>
					<Link className="iconfont icon-cart" to="/cart"></Link>
				</div>
				<ul className="formUl">
					<li>国家与地区</li>
					<li><span>中国 </span> + <span> 86</span><Link className="iconfont icon-more"></Link></li>
					<li>你的手机号码是?</li>
					<li><input type="text" placeholder="输入手机号码" /></li>
					<li>验证码</li>
					<li><input type="password" placeholder="输入验证码" /><a>发送验证码</a></li>
					<li><Link>登录</Link></li>
				</ul>
			</div>
		)	
	}
});

