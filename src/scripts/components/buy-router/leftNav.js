"use strict";
import React from 'react';
import {Link} from 'react-router';
class LeftNav extends React.Component {
	render() {
		return (	
				<div className="navLeft">
					<Link className="active" to="/buy/fashion">正在流行</Link>
					<Link to="/buy/coat">上衣</Link>
					<Link to="/buy/fashion">裤子</Link>
					<Link to="/buy/coat">裙子</Link>
					<Link to="/buy/fashion">女鞋</Link>
					<Link to="/buy/coat">包包</Link>
					<Link to="/buy/fashion">运动</Link>
					<Link to="/buy/coat">配饰</Link>
					<Link to="/buy/fashion">美妆</Link>
					<Link to="/buy/coat">上衣</Link>
					<Link to="/buy/fashion">女鞋</Link>
					<Link to="/buy/coat">包包</Link>
					<Link to="/buy/fashion">运动</Link>
					<Link to="/buy/coat">配饰</Link>
					<Link to="/buy/fashion">美妆</Link>
					<Link to="/buy/coat">上衣</Link>
					<Link to="/buy/fashion">女鞋</Link>
					<Link to="/buy/coat">包包</Link>
					<Link to="/buy/fashion">运动</Link>
					<Link to="/buy/coat">配饰</Link>
					<Link to="/buy/fashion">美妆</Link>
					<Link to="/buy/coat">上衣</Link>
				</div>
		)
	}
	componentDidMount() {
	//	console.log(1);
		var _navlink = document.querySelector(".buy .nav .navLeft").children;
		console.log(_navlink);
		for(var i=0;i<_navlink.length;i++) {	
			_navlink[i].onclick = function() {		
				for(var j=0;j<_navlink.length;j++) {
					_navlink[j].className="";
				}
				this.className = 'active';
			}
		}
		
	}
}
export default LeftNav;
