"use strict";
import React from 'react';
import {Link} from 'react-router';
import Search from "../home-router/search.js";
import LeftNav from './leftNav.js'
export default React.createClass({
	render() {
		return(
			<div className='buy'>
{/*			搜索	*/}
				<div className="header">
					<a><i className="iconfont icon-fenlei"></i><b>分类</b></a>
					<Search />
				</div>
{/*				导航及右侧*/}
				<div className="nav">
					<LeftNav />
					<div className="right">
						{this.props.children}
					</div>
				</div>
				
				
			</div>
		)
	}
});