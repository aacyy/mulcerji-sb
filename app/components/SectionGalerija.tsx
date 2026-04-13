'use client';

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanityClient';
import SectionFiveCarousel from './SectionFiveCarousel';

export default function SectionGalerija() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		async function fetchGallery() {
			const data = await client.fetch(`*[_type == "galleryImage"] {
        _id,
        "imageUrl": image.asset->url
      }`);
			setImages(data);
		}

		fetchGallery();
	}, []);

	return (
		<div className='sb-section-five'>
			<div className='sb-section-five-title'>
				<div className='sb-section-one-title'>
					<h3>05</h3>
					<h3>Galerija</h3>
				</div>
			</div>
			<div className='sb-section-five-subtitle'>
				<h3>Naše kosilnice ...</h3>
			</div>
			<div className='sb-section-five-items'>
				<SectionFiveCarousel images={images} />
			</div>
			<div className='sb-section-five-moto'>
				<h3>... za najtežje terene - brez kaplje znoja.</h3>
			</div>
		</div>
	);
}
