"use strict";
import React from 'react';
import {Link} from 'react-router';
import FashList1 from './fashion/fashList1.js';
import FashList2 from './fashion/fashList2.js';
export default React.createClass({
	render() {
		return (
			<div className="fashion">
				<FashList1 />
				<FashList2 />
				
			</div>
		)
	}
});