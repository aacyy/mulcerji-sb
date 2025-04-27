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
			<Swiper
				autoplay={true}
				pagination={pagination}
				breakpoints={{
					400: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					700: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					1200: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
				}}
				loop={true}
				grabCursor={true}
				modules={[Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<div class='card-inner'>
						<div
							class='card-front'
							style={{
								backgroundImage: 'url(/images/mulcer_one.jpg)',
							}}
						>
							<div className='km-swiper-slide-text'>
								<div>1</div>
								<h1>Mulčer KM-55</h1>
							</div>
							<CircleEllipsis strokeWidth={2} color='white' size={64} />
						</div>
						<div class='card-back'>
							<div className='card-back-text'>
								<div className='card-back-text-title'>
									<h2>Mulčer KM-55</h2>
									<div className='card-back-price'>
										<h4>Goseničar</h4>
									</div>
									<p>
										Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
										uporabnike, ki imajo površino košnje do 2000m2.
									</p>
								</div>
								<div className='card-back-text-content'>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>2 hitrosti elektro-motorjev</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Maximalen domet daljinskega vodenja nad 200m</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
								</div>
							</div>
							<div className='card-back-call'>
								<h4>Za več informacij nas pokličite.</h4>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='card-inner'>
						<div
							class='card-front'
							style={{
								backgroundImage: 'url(/images/mulcer_two.jpg)',
							}}
						>
							<div className='km-swiper-slide-text'>
								<div>2</div>
								<h1>Mulčer dominator</h1>
							</div>
							<CircleEllipsis strokeWidth={2} color='white' size={64} />
						</div>
						<div class='card-back'>
							<div className='card-back-text'>
								<div className='card-back-text-title'>
									<h2>Mulčer KM-55</h2>
									<div className='card-back-price'>
										<h4>Goseničar</h4>
									</div>
									<p>
										Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
										uporabnike, ki imajo površino košnje do 2000m2.
									</p>
								</div>
								<div className='card-back-text-content'>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>2 hitrosti elektro-motorjev</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Maximalen domet daljinskega vodenja nad 200m</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
								</div>
							</div>
							<div className='card-back-call'>
								<h4>Za več informacij nas pokličite.</h4>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='card-inner'>
						<div
							class='card-front'
							style={{
								backgroundImage: 'url(/images/mulcer_three.jpg)',
							}}
						>
							<div className='km-swiper-slide-text'>
								<div>3</div>
								<h1>Mulčer masturbator</h1>
							</div>
							<CircleEllipsis strokeWidth={2} color='white' size={64} />
						</div>
						<div class='card-back'>
							<div className='card-back-text'>
								<div className='card-back-text-title'>
									<h2>Mulčer KM-55</h2>
									<div className='card-back-price'>
										<h4>Goseničar</h4>
									</div>
									<p>
										Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
										uporabnike, ki imajo površino košnje do 2000m2.
									</p>
								</div>
								<div className='card-back-text-content'>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>2 hitrosti elektro-motorjev</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Maximalen domet daljinskega vodenja nad 200m</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
								</div>
							</div>
							<div className='card-back-call'>
								<h4>Za več informacij nas pokličite.</h4>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='card-inner'>
						<div
							class='card-front'
							style={{
								backgroundImage: 'url(/images/mulcer_four.jpg)',
							}}
						>
							<div className='km-swiper-slide-text'>
								<div>4</div>
								<h1>Mulčer terminator</h1>
							</div>
							<CircleEllipsis strokeWidth={2} color='white' size={64} />
						</div>
						<div class='card-back'>
							<div className='card-back-text'>
								<div className='card-back-text-title'>
									<h2>Mulčer KM-55</h2>
									<div className='card-back-price'>
										<h4>Goseničar</h4>
									</div>
									<p>
										Daljinsko vodena kosilnica za manj zahtevne uporabnike oz.
										uporabnike, ki imajo površino košnje do 2000m2.
									</p>
								</div>
								<div className='card-back-text-content'>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>2 hitrosti elektro-motorjev</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Maximalen domet daljinskega vodenja nad 200m</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
									<div className='card-back-text-content-item'>
										<div className='card-back-text-icon'>
											<CircleSmall color='#d80000' />
										</div>
										<div className='card-back-text-item-text'>
											<p>Visoko zmogljiv 224 ccm bencinski agregat 9hp</p>
										</div>
									</div>
								</div>
							</div>
							<div className='card-back-call'>
								<h4>Za več informacij nas pokličite.</h4>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default SectionFour;
