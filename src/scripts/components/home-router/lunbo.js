"use strict";
import React from 'react';
class Lunbo extends React.Component {
	componentDidMount() {
		var mySwiper = new Swiper ('#home-lunbo', {
		    loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    autoplay : 2000
	  })        
	}
	render() {
		return (
//			 轮播图1   	
			<div className="banner">
				<div className="swiper-container" id="home-lunbo">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide">
				        	<a href=""><img src="images/170321_702hb643b998fh8kakag8hcd5654j_778x440.jpg_900x9999.v1c7E.70.webp" /></a>
				        </div>
				        <div className="swiper-slide">
				        	<a href=""><img src="images/170323_86ebeh96844k0i66kie2fld17d461_778x440.jpg_900x9999.v1c7E.70.webp" /></a>
				        </div>
				        <div className="swiper-slide">
				        	<a href=""><img src="images/170324_5bc18gf21c8g2c4hh6h4894lfbkkh_778x440.jpg_900x9999.v1c7E.70.webp" /></a>
				        </div>
				    </div>
				    {/* 如果需要分页器 */}
				    <div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
};
export default Lunbo;
