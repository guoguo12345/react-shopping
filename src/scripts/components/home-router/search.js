"use strict";
import React from "react";
class Search extends React.Component{
	render() {
		return (
			<div className="search">
				<a><i className="iconfont icon-sousuo"></i></a>
				<a><input type='text' placeholder="百搭斜挎包" /></a>
				<a><i className="iconfont icon-saoyisao"></i></a>
				<a><i className="iconfont icon-comments"></i></a>
			</div>
		)
	}
};
export default Search;