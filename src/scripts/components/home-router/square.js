"use strict";
import React from 'react';
export default React.createClass({
	componentDidMount() {
		 var swiper = new Swiper('.squareLunbo', {
	        slidesPerView: 3.7,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true
	    });
	    
	},
	componentWillMount() {
		
	},
	render() {
		console.log(this.props.lunboArr);
		var lunboArr = this.props.lunboArr;
		var dataList = lunboArr.map((item,index) => {
			return (
				<div className="itemOuter" key={index}>
					<a><img src="http://s10.mogucdn.com/p2/170215/1954_7d81h01el0e9h1fgib5gk7kk2kl9j_750x376.jpg_400x9999.v1c7E.70.webp" /></a>
					<div className="swiper-container squareLunbo">
				        <div className="swiper-wrapper">
				            <div className="swiper-slide">
				            	<a className="item">
				        		<img src="http://s2.mogucdn.com/p2/160928/163213319_10b3bbgia8fb5ea0gilai9dgjk38h_640x960.jpg_100x100.v1cAC.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				            </div>
				            <div className="swiper-slide"><a className="item">
				        		<img src="http://s2.mogucdn.com/p2/160928/163213319_10b3bbgia8fb5ea0gilai9dgjk38h_640x960.jpg_100x100.v1cAC.70.webp" />
				        		<i>回暖春日装</i>
				        	</a></div>
				            <div className="swiper-slide"><a className="item">
				        		<img src="http://s2.mogucdn.com/p2/160928/163213319_10b3bbgia8fb5ea0gilai9dgjk38h_640x960.jpg_100x100.v1cAC.70.webp" />
				        		<i>回暖春日装</i>
				        	</a></div>
				            <div className="swiper-slide">Slide 4</div>
				            <div className="swiper-slide">Slide 5</div>
				            <div className="swiper-slide">Slide 6</div>
				            <div className="swiper-slide">Slide 7</div>
				            <div className="swiper-slide">Slide 8</div>
				            <div className="swiper-slide">Slide 9</div>
				            <div className="swiper-slide">Slide 10</div>
				        </div>			   
				    </div>
				</div>
			)
		});
		return (
			<div className="square">
				<div className="itemOuter">
					<a><img src="http://s10.mogucdn.com/p2/170215/1954_7d81h01el0e9h1fgib5gk7kk2kl9j_750x376.jpg_400x9999.v1c7E.70.webp" /></a>
					<div className="swiper-container squareLunbo">
				        <div className="swiper-wrapper">
				            <div className="swiper-slide">
				            	<a className="item">
				        		<img src="http://s2.mogucdn.com/p2/160928/163213319_10b3bbgia8fb5ea0gilai9dgjk38h_640x960.jpg_100x100.v1cAC.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				            </div>
				            <div className="swiper-slide"><a className="item">
				        		<img src="http://s2.mogucdn.com/p2/160928/163213319_10b3bbgia8fb5ea0gilai9dgjk38h_640x960.jpg_100x100.v1cAC.70.webp" />
				        		<i>回暖春日装</i>
				        	</a></div>
				            <div className="swiper-slide"><a className="item">
				        		<img src="http://s2.mogucdn.com/p2/160928/163213319_10b3bbgia8fb5ea0gilai9dgjk38h_640x960.jpg_100x100.v1cAC.70.webp" />
				        		<i>回暖春日装</i>
				        	</a></div>
				            <div className="swiper-slide">Slide 4</div>
				            <div className="swiper-slide">Slide 5</div>
				            <div className="swiper-slide">Slide 6</div>
				            <div className="swiper-slide">Slide 7</div>
				            <div className="swiper-slide">Slide 8</div>
				            <div className="swiper-slide">Slide 9</div>
				            <div className="swiper-slide">Slide 10</div>
				        </div>			   
				    </div>
				</div>
			</div>
		)
	}
})
	

