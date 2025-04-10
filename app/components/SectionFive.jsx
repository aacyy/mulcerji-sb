'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { CircleEllipsis, Quote } from 'lucide-react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './section-five.css';
import 'swiper/css/autoplay';
const SectionFive = () => {
	return (
		<div className='sb-section-five'>
			<div class='sb-section-five-title'>
				<div class='sb-section-one-title'>
					<h3>05</h3>
					<h3>Izkušnje uporabnikov</h3>
				</div>
			</div>
			<div className='sb-section-five-items'>
				<div className='sb-quote sb-quote-one'>
					<Quote size={64} color='#d80000' strokeWidth={1} />
				</div>
				<Swiper
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={Pagination}
					breakpoints={{
						400: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						600: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						700: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						1200: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
					}}
					loop={true}
					grabCursor={true}
					modules={[Autoplay]}
					className='mySwiper'
				>
					<SwiperSlide>
						<div className='sb-section-five-item'>
							<div class='quote-box'>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
									libero repellat atque vel odit minus autem labore repellendus.
									Expedita, eaque.
								</p>
							</div>
							<div className='quote-name'>
								<p>Benda</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='sb-section-five-item'>
							<div class='quote-box'>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eveniet, labore.
								</p>
							</div>
							<div className='quote-name'>
								<p>Robi</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='sb-section-five-item'>
							<div class='quote-box'>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div className='quote-name'>
								<p>Matic</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className='sb-quote sb-quote-two'>
					<Quote size={64} strokeWidth={1} color='#d80000' />
				</div>
			</div>
		</div>
	);
};

export default SectionFive;
