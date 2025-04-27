'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { CircleEllipsis, CircleSmall } from 'lucide-react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './section-four.css';
import 'swiper/css/autoplay';

const SectionFour = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	};
	return (
		<>
			<div class='sb-section-four-title'>
				<div class='sb-section-one-title'>
					<h3>04</h3>
					<h3>Vsi modeli</h3>
				</div>
				<div class='sb-section-four-subtitle'>
					<h1>Napredni modeli</h1>
					<h1>mulčerjev</h1>
				</div>
			</div>
			<div className='sb-section-four-items-final'>
				<div className='sb-section-four-item'>
					<div className='sb-section-four-item-title '>
						<div className='sb-section-four-box'>1</div>
						<h1>Mulčer 505</h1>
					</div>
					<div className='sb-section-four-item-box'>
						<div className='sb-section-four-item-content'>
							<div className='sb-section-four-item-summary'>
								<p>
									Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
									uporabnike, ki imajo površino košnje do 2000m2.
								</p>
							</div>
							<div className='sb-section-four-item-list'>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
							</div>
						</div>
						<div className='sb-section-four-item-img img-one'></div>
					</div>
				</div>
				<div className='sb-section-four-item'>
					<div className='sb-section-four-item-title sb-section-four-item-title-right'>
						<h1>Mulčer 123</h1>
						<div className='sb-section-four-box'>2</div>
					</div>
					<div className='sb-section-four-item-box'>
						<div className='sb-section-four-item-img img-two'></div>
						<div className='sb-section-four-item-content'>
							<div className='sb-section-four-item-summary'>
								<p>
									Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
									uporabnike, ki imajo površino košnje do 2000m2.
								</p>
							</div>
							<div className='sb-section-four-item-list'>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='sb-section-four-item'>
					<div className='sb-section-four-item-title '>
						<div className='sb-section-four-box'>3</div>
						<h1>Mulčer 444</h1>
					</div>
					<div className='sb-section-four-item-box'>
						<div className='sb-section-four-item-content'>
							<div className='sb-section-four-item-summary'>
								<p>
									Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
									uporabnike, ki imajo površino košnje do 2000m2.
								</p>
							</div>
							<div className='sb-section-four-item-list'>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
							</div>
						</div>
						<div className='sb-section-four-item-img img-three'></div>
					</div>
				</div>
				<div className='sb-section-four-item'>
					<div className='sb-section-four-item-title sb-section-four-item-title-right'>
						<h1>Mulčer 566666</h1>
						<div className='sb-section-four-box'>4</div>
					</div>
					<div className='sb-section-four-item-box'>
						<div className='sb-section-four-item-img img-four'></div>
						<div className='sb-section-four-item-content'>
							<div className='sb-section-four-item-summary'>
								<p>
									Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
									uporabnike, ki imajo površino košnje do 2000m2.
								</p>
							</div>
							<div className='sb-section-four-item-list'>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat, a.
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
								<div className='sb-section-four-item-content-feature'>
									<div className='sb-section-four-icon'>
										<CircleSmall />
									</div>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Repellat,
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SectionFour;
