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
					<h3>Galerija</h3>
				</div>
			</div>
			<div className='sb-section-five-subtitle'>
				<h3>Naši mulčerji ...</h3>
			</div>
			<div className='sb-section-five-items'>
				<div className='sb-section-five-item one'></div>
				<div className='sb-section-five-item two'></div>
				<div className='sb-section-five-item three'></div>
				<div className='sb-section-five-item four'></div>
			</div>
			<div className='sb-section-five-moto'>
				<h3>... za najtežje terene - brez kaplje znoja.</h3>
			</div>
		</div>
	);
};

export default SectionFive;
