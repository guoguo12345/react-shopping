"use strict";
import React from "react";
class HotPeople extends React.Component {
	componentDidMount() {
		var mySwiper = new Swiper ('#hotLunbo', {   
	        slidesPerView: 3,
	        paginationClickable: true,
	        spaceBetween: 10,
	        freeMode: true
		})        
	}
	render() {
		return (
			<div className="hotPeople">
				<a>
					<span>红人穿搭</span>
					<i>全部  &gt;</i>
				</a>
				<div className="swiper-container" id="hotLunbo">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s2.mogucdn.com/p2/170217/33720728_3k7fg3011ge67bhjj0c71fhl1538k_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s17.mogucdn.com/p2/170201/upload_40ci13dig288715i53kgd4603b6i3_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s2.mogucdn.com/p2/170217/33720728_23akidei6lgabec5b4fgd3dhf921d_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s2.mogucdn.com/p2/170215/33720728_334205jligdeh391i05hc4930fhl3_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s18.mogucdn.com/p2/170208/upload_07e0353f18kd743a61g6leg0h3kcc_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s17.mogucdn.com/p2/170204/upload_1ffi35lbhejggh8kl6d71fk1k6k3a_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s2.mogucdn.com/p2/170218/33720728_53h7e18h6c53aegli135b2ac5g11f_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s16.mogucdn.com/p2/170210/upload_264i8f055ajk0c1f4b8ec4h06109g_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				        <div className="swiper-slide">
				        	<a className="hotitem">
				        		<img src="http://s2.mogucdn.com/p2/170217/33720728_44d5hj081g70g0idghli207bek1j1_302x604.jpg_300x9999.v1c7E.70.webp" />
				        		<i>回暖春日装</i>
				        	</a>
				        </div>
				    </div>				        			
				</div>
			
			</div>
			
		)
	}
}
export default HotPeople;