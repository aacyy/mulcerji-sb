'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import './section-five.css';

export default function SectionFiveCarousel({ images }) {
	if (!images?.length) {
		return <p>Ni slik.</p>;
	}

	return (
		<Carousel className='w-full sb-carousel' opts={{ align: 'start' }}>
			<CarouselContent className='-ml-2'>
				{images.map((item) => (
					<CarouselItem
						className='pl-2 md:basis-1/2 lg:basis-1/4'
						key={item._id}
					>
						<div className='aspect-square p-1'>
							<Image
								src={item.imageUrl}
								alt='Galerija'
								width={600}
								height={600}
								className='size-full rounded-xl object-cover'
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className='cursor-pointer' />
			<CarouselNext className='cursor-pointer' />
		</Carousel>
	);
}
