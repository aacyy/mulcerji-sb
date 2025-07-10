'use client';
import React, { useState } from 'react';
import './section-models.css';

const SectionModels = () => {
	const imgMain = '/images/7_nobg.jpg';
	const sbModels = [
		{
			modelName: 'Mulčer KM-55',
			modelType: 'Goseničar',
			motor: 'Bencinski - 9 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1.500 m2 v eni uri',
			dimenzije: '920 x 1030 x 630',
			maxKosnja: 'Maksimalen naklon 40°',
			teza: '143kg',
			image: '/images/mulčer_55_goseničar.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica odlična izbira za manj zahtevna opravila in za uporabnike, ki vzdržujejo površine do 2000 m². Zaradi svoje okretnosti in daljinskega vodenja je idealna za manj dostopne in razgibane terene. ',
			descriptionDown:
				'Kljub kompaktnejšim dimenzijam se lahko pohvali z zanesljivim 224 ccm bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči – več kot dovolj za učinkovito mulčenje srednje visoke trave in lažje zaraščenih površin. Kosilnica ima širino reza 55cm in je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro. ',
		},

		{
			modelName: 'Mulčer KM-80',
			modelType: 'Goseničar',
			motor: 'Bencinski - 16 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 2.000 m2 v eni uri',
			dimenzije: '1170 x 1250 x 760',
			maxKosnja: 'Maksimalen naklon 45°',
			teza: '240kg',
			image: '/images/mulčer_80.jpg',
			descriptionUp:
				'Mulčerska kosilnica KM80 je robustnejši model, namenjen zahtevnejšim uporabnikom. V primerjavi z našo klasično 55 cm kosilnico nudi širšo delovno širino, večjo učinkovitost in hitrejše pokrivanje večjih površin. Zahvaljujoč zmogljivemu 452 ccm motorju s 16 konjskimi močmi zlahka opravi z visoko, gosto ter tudi olesenelo travo. Kosilnica brez težav deluje na strmih terenih z naklonom nad 45°, obenem pa omogoča učinkovito košnjo površin, večjih od 2000 m².',
			descriptionDown:
				'Opremljena je z alternatorjem, ki skrbi za samodejno polnjenje baterije med delovanjem. Poraba goriva je približno 1,5 litra na uro, kar jo uvršča med varčne stroje v svojem razredu.',
		},
		{
			modelName: 'Mulčer KM-100',
			modelType: 'Goseničar',
			motor: 'Bencinski - 16 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3.600 m2 v eni uri',
			dimenzije: '1270 x 1450 x 760',
			maxKosnja: 'Maksimalen naklon 45°',
			teza: '265kg',
			image: '/images/mulčer_100.jpg',
			descriptionUp:
				'Mulčerska kosilnica KM100 predstavlja najmočnejši model v naši ponudbi, zasnovan za obvladovanje največjih in najzahtevnejših terenov. Z večjimi dimenzijami kot KM80 omogoča še večjo delovno širino, večjo produktivnost in učinkovitejše pokrivanje površin v krajšem času',
			descriptionDown:
				'Opremljena je z robustnim 452 ccm motorjem, ki razvije kar 16 konjskih moči – dovolj za košnjo tudi zelo visoke, goste in olesenele trave. Napredni 4-taktni motor zagotavlja zanesljivo delovanje, pri čemer avtomatsko polnjenje baterije prek alternatorja skrbi za nemoteno delo na terenu. S porabo goriva približno 1,5 litra na uro je KM100 idealna izbira za površine nad 3000 m² ter za delo na strmih naklonih nad 45°. Zmogljiv, trpežen in zanesljiv stroj za profesionalno rabo.',
		},
		{
			modelName: 'Mulčer KM-110',
			modelType: 'Goseničar',
			motor: 'Bencinski - 16 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3.600 m2 v eni uri',
			dimenzije: '1270 x 1450 x 760',
			maxKosnja: 'Maksimalen naklon 45°',
			teza: '265kg',
			image: '/images/mulčer_110.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica na kolesih s pogonom 4x4 združuje vse ključne karakteristike modela s širino reza 55 cm – zmogljiv 224 ccm bencinski motor z močjo 9 KM (6,62 kW), avtomatsko polnjenje baterije prek alternatorja in nizko porabo goriva do 0,8 litra na uro. ',
			descriptionDown:
				'Razlika je v podvozju, namesto gosenic ima ta model štirikolesni pogon (4x4), ki omogoča okretnost, večjo hitrost na ravnini in odličen oprijem tudi na bolj razgibanih terenih. Izredna hitrost košnje do 1800m2 v 1 uri. Nizka poraba goriva do 0,8l na uro. ',
		},
		{
			modelName: 'Mulčer KM-55',
			modelType: '4x4 kolesa',
			motor: 'Bencinski motor - 9 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1500 m2 v eni uri',
			dimenzije: '920 x 1030 x 630',
			maxKosnja: 'Maksimalen naklon 40°',
			teza: '133kg',
			image: '/images/mulčer_4x4.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica na kolesih s pogonom 4x4 združuje vse ključne karakteristike modela s širino reza 55 cm – zmogljiv 224 ccm bencinski motor z močjo 9 KM (6,62 kW), avtomatsko polnjenje baterije prek alternatorja in nizko porabo goriva do 0,8 litra na uro. ',
			descriptionDown:
				'Razlika je v podvozju, namesto gosenic ima ta model štirikolesni pogon (4x4), ki omogoča okretnost, večjo hitrost na ravnini in odličen oprijem tudi na bolj razgibanih terenih. Izredna hitrost košnje do 1800m2 v 1 uri. Nizka poraba goriva do 0,8l na uro. ',
		},
	];
	const [filteredData, setFilteredData] = useState({
		modelName: 'Mulčer KM-55',
		modelType: 'Goseničar',
		motor: 'Bencinski - 9 KM',
		domet: 'Do 200m',
		kosnja: 'Daljinsko nastavljiva višina',
		povrsina: 'Do 1.500 m2 v eni uri',
		dimenzije: '920 x 1030 x 630',
		maxKosnja: 'Maksimalen naklon 40°',
		teza: '143kg',
		image: '/images/mulčer_55_goseničar.jpg',
		descriptionUp:
			'Daljinsko vodena mulčerska kosilnica odlična izbira za manj zahtevna opravila in za uporabnike, ki vzdržujejo površine do 2000 m². Zaradi svoje okretnosti in daljinskega vodenja je idealna za manj dostopne in razgibane terene. ',
		descriptionDown:
			'Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči – več kot dovolj za učinkovito mulčenje srednje visoke trave in lažje zaraščenih površin. Kosilnica ima širino reza 55cm in je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro. ',
	});
	const [itemTitle, setItemTitle] = useState(0);
	const [model, setModel] = useState(0);
	const changeNav = (newItem) => {
		const newArray = sbModels[newItem];

		setFilteredData(newArray); // Set the state to the filtered array
		setModel(newItem);
	};
	const changeNavItem = (newItem) => {
		setItemTitle(newItem);
	};

	return (
		<div className='sb-section-models-container'>
			<div className='sb-section-models-nav'>
				<div
					className={
						model == 0
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(0)}
				>
					<h3>KM-55</h3>
				</div>
				<div
					className={
						model == 1
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(1)}
				>
					<h3>KM-80</h3>
				</div>
				<div
					className={
						model == 2
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(2)}
				>
					<h3>KM-100</h3>
				</div>
				<div
					className={
						model == 3
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(3)}
				>
					<h3>KM-110</h3>
				</div>
				<div
					className={
						model == 4
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(4)}
				>
					<h3>KM-4X4</h3>
				</div>
			</div>
			<div className='sb-section-models-box'>
				<div className='sb-section-models-item'>
					<div className='sb-section-models-item-image'>
						<div className='sb-section-models-item-title'>
							<h1>{filteredData.modelName}</h1>
							<h1>{filteredData.modelType}</h1>
						</div>
						<div
							className='sb-section-models-item-image-image'
							style={{
								backgroundImage: sbModels
									? `url(${filteredData.image})`
									: `url(${imgMain})`,
							}}
						></div>
					</div>
					<div className='sb-section-models-item-table'>
						<div className='sb-section-models-item-table-title'>
							<h1>Specifikacije modela</h1>
						</div>
						<table>
							<tbody>
								<tr className='tr-grey'>
									<td className='td-title'>Motor</td>
									<td>{filteredData.motor}</td>
								</tr>
								<tr className='tr-white'>
									<td className='td-title'>Domet</td>
									<td>{filteredData.domet}</td>
								</tr>
								<tr className='tr-grey'>
									<td className='td-title'>Košnja</td>
									<td>{filteredData.kosnja}</td>
								</tr>
								<tr className='tr-white'>
									<td className='td-title'>Površina</td>
									<td>{filteredData.povrsina}</td>
								</tr>
								<tr className='tr-grey'>
									<td className='td-title'>Dimenzije (mm)</td>
									<td>{filteredData.dimenzije} (D X Š X V )</td>
								</tr>
								<tr className='tr-white'>
									<td className='td-title'>Naklon</td>
									<td>{filteredData.maxKosnja}</td>
								</tr>
								<tr className='tr-grey'>
									<td className='td-title'>Teža</td>
									<td>{filteredData.teza}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='sb-section-models-description'>
				<div className='sb-section-models-description-up'>
					<div
						className={
							itemTitle == 0
								? 'sb-section-models-description-nav sb-section-models-active'
								: 'sb-section-models-description-nav'
						}
						onClick={() => changeNavItem(0)}
					>
						<h2>Predstavitev</h2>
					</div>
					<div
						className={
							itemTitle == 1
								? 'sb-section-models-description-nav sb-section-models-active'
								: 'sb-section-models-description-nav'
						}
						onClick={() => changeNavItem(1)}
					>
						<h2>Tehničen opis</h2>
					</div>
					<div
						className={
							itemTitle == 2
								? 'sb-section-models-description-nav sb-section-models-active'
								: 'sb-section-models-description-nav'
						}
						onClick={() => changeNavItem(2)}
					>
						<h2>Več o modelu</h2>
					</div>
				</div>

				<div className='sb-section-models-description-text'>
					<div className='sb-section-models-description-title'>
						<h2>
							{itemTitle == 0
								? 'Predstavitev modela'
								: itemTitle == 1
								? 'Tehničen opis modela'
								: 'Več o izbranem modelu'}
						</h2>
					</div>
					<div className='sb-section-models-description-content'>
						<p>
							{itemTitle == 0
								? filteredData.descriptionUp
								: itemTitle == 1
								? filteredData.descriptionDown
								: ''}
						</p>
						<div
							className={
								itemTitle == 2
									? 'sb-section-models-more'
									: 'sb-section-models-none'
							}
						>
							<h4>
								Če imate dodatna vprašanja o modelu, nas lahko pokličete na:
							</h4>
							<h3 className='sb-models-number'>+386 31 341 778</h3>
							<h4>ali nam pišite na:</h4>
							<div>
								<h3 className='sb-models-email'>info@gruntmaster.si</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionModels;
