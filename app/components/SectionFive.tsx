'use client';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import './section-five.css';

const images = [
	'https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg',
	'https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg',
	'https://www.fffuel.co/images/dddepth-preview/dddepth-029.jpg',
	'https://www.fffuel.co/images/dddepth-preview/dddepth-038.jpg',
	'https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg',
];

const SectionFive = () => {
	return (
		<div className='sb-section-five'>
			<div className='sb-section-five-title'>
				<div className='sb-section-one-title'>
					<h3>05</h3>
					<h3>Galerija</h3>
				</div>
			</div>
			<div className='sb-section-five-subtitle'>
				<h3>Naši mulčerji ...</h3>
			</div>
			<div className='sb-section-five-items'>
				<Carousel className='w-fu max-w-sm' opts={{ align: 'start' }}>
					<CarouselContent className='-ml-2'>
						{images.map((image) => (
							<CarouselItem
								className='pl-2 md:basis-1/2 lg:basis-1/3'
								key={image}
							>
								<div className='aspect-square p-1'>
									<img
										alt='gallery image'
										className='size-full rounded-xl object-cover'
										src={image}
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<div className='sb-section-five-moto'>
				<h3>... za najtežje terene - brez kaplje znoja.</h3>
			</div>
		</div>
	);
};

export default SectionFive;
