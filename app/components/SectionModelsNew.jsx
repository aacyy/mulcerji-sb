'use client';
import React, { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanityClient'; // for image
import './section-models.css';
import { LoaderCircleIcon } from 'lucide-react';

const SectionModelsNew = () => {
	const imgMain = '/images/7_nobg.jpg';

	const sbModels = [
		{
			sanityKey: 'km55drag',
			modelName: 'Mulčer KM-55',
			nav: 'KM 55',
			modelType: 'Goseničar',
			motor: '9 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1,500 m2 v eni uri',
			dimenzije: '940 / 940 / 560',
			maxKosnja: '40°',
			teza: '134kg (+/- 3%)',
			image: '/images/mulcer_km55_mod.jpg',
		},
		{
			sanityKey: 'km55x24v',
			modelName: 'Mulčer KM-55X-24V',
			nav: 'KM 55X-24V',
			modelType: 'Goseničar',
			motor: '9 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1,500 m2 v eni uri',
			dimenzije: '940 / 930 / 550',
			maxKosnja: '40°',
			teza: '134kg (+/- 3%)',
			image: '/images/km24v.jpg',
		},
		{
			sanityKey: 'km80',
			modelName: 'Mulčer KM-80',
			nav: 'KM 80',
			modelType: 'Goseničar',
			motor: '16 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 2,500 m2 v eni uri',
			dimenzije: '1230 / 1160 / 600',
			maxKosnja: '45°',
			teza: '258kg (+/- 3%)',
			image: '/images/mulčer_80.jpg',
		},
		{
			sanityKey: 'km100',
			modelName: 'Mulčer KM-100',
			nav: 'KM 100',
			modelType: 'Goseničar',
			motor: '16 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3,000 m2 v eni uri',
			dimenzije: '1430 / 1270 / 600',
			maxKosnja: '45°',
			teza: '280kg (+/- 3%)',
			image: '/images/mulčer_100.jpg',
		},
		{
			sanityKey: 'km100Y', // ← update to match your actual Sanity title value
			modelName: 'Mulčer KM-100 Y',
			nav: 'KM 100Y',
			modelType: 'Goseničar',
			motor: '15 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3,000 m2 v eni uri',
			dimenzije: '1560 / 1170 / 820',
			maxKosnja: '45°',
			teza: '346kg (+/- 3%)',
			image: '/images/km100y-test.jpg',
		},
		{
			sanityKey: 'km110Standard',
			modelName: 'Mulčer KM-110 S',
			nav: 'KM 110S',
			modelType: 'Goseničar',
			motor: '22 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3,000 m2 v eni uri',
			dimenzije: '1530 / 1220 / 680',
			maxKosnja: '45+°',
			teza: '406kg (+/- 3%)',
			image: '/images/mulčer_110.jpg',
		},
		{
			sanityKey: 'km110Pro',
			modelName: 'Mulčer KM-110 P',
			nav: 'KM 110P',
			modelType: 'Goseničar',
			motor: '22 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3,000 m2 v eni uri',
			dimenzije: '1530 / 1220 / 680',
			maxKosnja: '45+°',
			teza: '406kg (+/- 3%)',
			image: '/images/mulcer_110p.jpg',
		},
		{
			sanityKey: 'km120Y', // ← update to match your actual Sanity title value
			modelName: 'Mulčer KM-120 Y',
			nav: 'KM 120Y',
			modelType: 'Goseničar',
			motor: '15 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3,000 m2 v eni uri',
			dimenzije: '1560 / 1380 / 820',
			maxKosnja: '45°',
			teza: '356kg (+/- 3%)',
			image: '/images/120y-test.jpg',
		},
		{
			sanityKey: 'km4x4',
			modelName: 'Mulčer KM-55',
			nav: 'KM 4X4',
			modelType: '4x4 kolesa',
			motor: '9 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Mehansko nastavljiva višina',
			povrsina: 'Do 1800 m2 v eni uri',
			dimenzije: '840 / 990 / 450',
			maxKosnja: '40°',
			teza: '84kg (+/- 3%)',
			image: '/images/mulčer_4x4.jpg',
		},
	];

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [itemTitle, setItemTitle] = useState(0);
	// Map of sanityKey → price, populated once on mount
	const [priceMap, setPriceMap] = useState({});

	const selectedModel = sbModels[selectedIndex];
	const currentData = priceMap[selectedModel.sanityKey];

	useEffect(() => {
		const fetchPrices = async () => {
			const query = `*[_type == 'Modeli']{ title, price, image, descriptionUp, }`;
			const data = await client.fetch(query);
			// Build a lookup object: { km55poceni: '2,890', km80: '5,450', ... }
			const map = Object.fromEntries(
				data.map((item) => [
					item.title,
					{
						price: item.price,
						image: item.image,
						descriptionUp: item.descriptionUp,
						descriptionDown: item.descriptionDown,
					},
				]),
			);
			setPriceMap(map);
		};
		fetchPrices();
	}, []);

	const PriceDisplay = ({ sanityKey }) => {
		const price = priceMap[sanityKey]?.price;
		return (
			<div className='sb-models-price-box'>
				<div className='sb-models-price'>
					<h3>
						{price ? (
							`${price} €`
						) : (
							<LoaderCircleIcon className='animate-spin' />
						)}
					</h3>
					<h4>( cena z ddv )</h4>
				</div>
			</div>
		);
	};

	const SpecTable = ({ model }) => (
		<table>
			<tbody>
				<tr className='tr-grey'>
					<td className='td-title'>Moč bencinskega agregata</td>
					<td>{model.motor}</td>
				</tr>
				<tr className='tr-white'>
					<td className='td-title'>Domet daljinca</td>
					<td>{model.domet}</td>
				</tr>
				<tr className='tr-grey'>
					<td className='td-title'>Nastavljiva višina košnje</td>
					<td>{model.kosnja}</td>
				</tr>
				<tr className='tr-white'>
					<td className='td-title'>Površina košnje</td>
					<td>{model.povrsina}</td>
				</tr>
				<tr className='tr-grey'>
					<td className='td-title'>Dimenzije (mm)</td>
					<td>{model.dimenzije} (š / d / v )</td>
				</tr>
				<tr className='tr-white'>
					<td className='td-title'>Maksimalni naklon</td>
					<td>{model.maxKosnja}</td>
				</tr>
				<tr className='tr-grey'>
					<td className='td-title'>Teža stroja</td>
					<td>{model.teza}</td>
				</tr>
			</tbody>
		</table>
	);

	const ModelCard = ({ model }) => {
		const sanityImage = priceMap[model.sanityKey]?.image;
		const imgSrc = sanityImage
			? urlFor(sanityImage).width(800).url()
			: model.image;

		return (
			<div className='sb-section-models-item'>
				<div className='sb-section-models-item-image'>
					<div className='sb-section-models-item-title'>
						<h1>{model.modelName}</h1>
						<h1>{model.modelType}</h1>
					</div>
					<div
						className='sb-section-models-item-image-image'
						style={{ backgroundImage: `url(${imgSrc})` }}
					/>
				</div>
				<div className='sb-section-models-item-table'>
					<div className='sb-section-models-item-table-title'>
						<h1>Specifikacije modela</h1>
					</div>
					<SpecTable model={model} />
				</div>
			</div>
		);
	};

	return (
		<div className='sb-section-models-container'>
			{/* Nav */}
			<div className='sb-section-models-nav'>
				{sbModels.map((m, index) => (
					<div
						key={m.sanityKey}
						className={`sb-section-models-nav-item${index === selectedIndex ? ' sb-section-models-nav-item-active' : ''}`}
						onClick={() => {
							setSelectedIndex(index);
							setItemTitle(0);
						}}
					>
						<h3>{m.nav}</h3>
					</div>
				))}
			</div>

			<div className='sb-section-models-box'>
				<ModelCard model={selectedModel} />
				<PriceDisplay sanityKey={selectedModel.sanityKey} />
			</div>

			<div className='sb-section-models-description'>
				<div className='sb-section-models-description-up'>
					{['Opis modela', 'Več o modelu'].map((label, i) => (
						<div
							key={label}
							className={`sb-section-models-description-nav${itemTitle === i ? ' sb-section-models-active' : ''}`}
							onClick={() => setItemTitle(i)}
						>
							<h2>{label}</h2>
						</div>
					))}
				</div>

				<div className='sb-section-models-description-text'>
					<div className='sb-section-models-description-title'></div>
					<div className='sb-section-models-description-content'>
						{itemTitle === 0 && <p>{selectedModel.descriptionUp}</p>}

						{itemTitle === 0 && (
							<>
								{priceMap[selectedModel.sanityKey]?.descriptionUp ? (
									<PortableText
										value={priceMap[selectedModel.sanityKey].descriptionUp}
									/>
								) : (
									<p>{selectedModel.descriptionUp}</p>
								)}
							</>
						)}
						{itemTitle === 1 && (
							<div className='sb-section-models-more'>
								<h4>
									Če imate dodatna vprašanja o modelu, nas lahko pokličete na:
								</h4>
								<h3 className='sb-models-number'>+386 31 341 778</h3>
								<h4>ali nam pišite na:</h4>
								<h3 className='sb-models-email'>info@gruntmaster.si</h3>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className='sb-opomba-wrapper'>
				<p className='sb-opomba'>
					Opomba: Pridržujemo si pravico do spremembe cen.
					<br />
					Možne so napake pri vnosu podatkov. Za točne informacije nas
					pokličite.
				</p>
			</div>
		</div>
	);
};

export default SectionModelsNew;
