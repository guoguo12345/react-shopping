"use strict";
import React from 'react';
import {Link} from 'react-router';
class Login extends React.Component {
	//返回上一页
	goBack() {
		window.history.go(-1);
	}
	render() {
		return (
			<div className="login">
				<div className="back">
					<a className="iconfont icon-back" onClick={this.goBack}></a>
					<h1>登录</h1>
					<a>忘记密码</a>
				</div>
				<ul className="formUl">
					<li>账号</li>
					<li><input type="text" placeholder="输入用户名/邮箱/手机号" /></li>
					<li>密码</li>
					<li><input type="password" placeholder="输入密码" /></li>
					<li><Link>登录</Link></li>
					<li><Link to="/freeLogin">免密登录</Link><Link>注册账号</Link></li>
				</ul>
			</div>
		)
	}
}
export default Login;
