"use strict";
import React from 'react';
import {Link} from 'react-router';
import Lunbo from './lunbo.js';
import Sort from './sort.js';
import HotPeople from './hotpeople.js';
import Square from './square.js';
import Search from './search.js';
export default React.createClass({
	getInitialState() {
		return {
			lunboArr: [],
		}
	},
	componentDidMount() {
		this.getData();
	},
	getData() {
		fetch('./mock/lunbo.json').then((response) => {
			return response.json();
		}).then((data) => {
		//	console.log(data);
			this.setState({lunboArr: data}); 
		}).catch((e) => {
			console.log('Oops,error');
		});
	},
	render() {
		return (
// 			首页			
			<div className='home'>
{/* 			搜索			*/}	
				<Search />
{/* 			轮播			*/}		
				<Lunbo />	
{/*				分类 			*/}	
				<Sort />
{/*				红人穿搭		*/}	
				<HotPeople />
{/*				多个版块的轮播图	*/}
				<Square lunboArr={this.state.lunboArr} />
			</div>
		)
	}
});