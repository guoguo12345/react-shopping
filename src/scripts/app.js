'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import "../styles/app.scss";
import App from './components/home-router/app.jsx';

import Home from './components/home-router/home.jsx';
import Buy from './components/buy-router/buy.jsx';
import News from './components/news-router/news.jsx';
import ShoppingCar from './components/shoppingcar-router/shoppingcar.jsx';
import My from './components/my-router/my.jsx';
import Fashion from './components/buy-router/navRouter/fashion.jsx';
import Coat from './components/buy-router/navRouter/coat.jsx';
import FreeLogin from './components/my-router/freeLogin.jsx';
import Cart from './components/my-router/cart.jsx';
var app = document.getElementById("app");
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="home" component={Home}></Route>
			<Route path="buy" component={Buy}>
				<IndexRoute component={Fashion}></IndexRoute>
				<Route path="fashion" component={Fashion}></Route>
				<Route path="coat" component={Coat}></Route>
			</Route>
			<Route path="news" component={News}></Route>
			<Route path="shoppingcar" component={ShoppingCar}></Route>
			<Route path="my" component={My}></Route>
		</Route>
		<Route path="/freeLogin" component={FreeLogin}></Route>
		<Route path="/cart" component={Cart}></Route>
	</Router>
),app);

if (module.hot) {
  module.hot.accept();
}
