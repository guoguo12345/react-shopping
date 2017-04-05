"use strict";
import React from 'react';
export default React.createClass({
	componentDidMount() {
		var swiper = new Swiper('.squareLunbo', {
	        slidesPerView: 3.7,
	        paginationClickable: true,
	        spaceBetween: 10,
	        freeMode: true
	   });
	},
	render() {
		var lunboArr = this.props.lunboArr;
		var dataList = lunboArr.map((item,index) => {
			return (
				<div className="itemOuter" key={index}>
					<a><img src={item.bigImg} /></a>
					<div className="swiper-container squareLunbo">
				        <div className="swiper-wrapper">
				            <div className="swiper-slide mysli">			      
					            <a className="item">
					        		<img src={item.smImg1} />
					        		<i>{item.smPrice1}</i>
					        	</a>	
				            </div>
				            <div className="swiper-slide mysli">       
					            <a className="item">
					        		<img src={item.smImg2} />
					        		<i>回暖春日装</i>
					        	</a>    	
				            </div>
				            <div className="swiper-slide mysli">			      
					            <a className="item">
					        		<img src={item.smImg3} />
					        		<i>{item.smPrice3}</i>
					        	</a>	
				            </div>
				            <div className="swiper-slide mysli">			      
					            <a className="item">
					        		<img src={item.smImg4} />
					        		<i>{item.smPrice4}</i>
					        	</a>	
				            </div>
				            <div className="swiper-slide mysli">			      
					            <a className="item">
					        		<img src={item.smImg5} />
					        		<i>{item.smPrice5}</i>
					        	</a>	
				            </div>
				            <div className="swiper-slide mysli">			      
					            <a className="item">
					        		<img src={item.smImg6} />
					        		<i>{item.smPrice6}</i>
					        	</a>	
				            </div>
				            <div className="swiper-slide mysli">			      
					            <a className="item">
					        		<img src={item.smImg7} />
					        		<i>{item.smPrice7}</i>
					        	</a>	
				            </div>
				            <div className="swiper-slide mysli">			      
					            <a className="item">
					        		<img src={item.smImg8} />
					        		<i>{item.smPrice8}</i>
					        	</a>	
				            </div>
				        </div>			   
				    </div>
				</div>
			)
		});
		return (
			<div className="square">
				{dataList}
			</div>
		)
	}
})
	

