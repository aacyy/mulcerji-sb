'use client';
import React, { useState } from 'react';
import './section-models.css';

const SectionModels = () => {
	const imgMain = '/images/7_nobg.jpg';
	const sbModels = [
		{
			modelName: 'Mulčer KM-55',
			modelType: 'Goseničar',
			price: '2,890',
			motor: 'Bencinski - 9 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1,500 m2 v eni uri',
			dimenzije: '920 x 1030 x 630',
			maxKosnja: 'Maksimalen naklon 40°',
			teza: '143kg',
			image: '/images/mulčer_55_goseničar.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 55, je odlična izbira za manj zahtevna opravila in za uporabnike, ki vzdržujejo manjše površine. Zaradi svoje okretnosti in daljinskega vodenja je idealna za manj dostopne in razgibane terene. ',
			descriptionDown:
				'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
		},

		{
			modelName: 'Mulčer KM-80',
			modelType: 'Goseničar',
			price: '5,250',
			motor: 'Bencinski - 16 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 2,000 m2 v eni uri',
			dimenzije: '1170 x 1250 x 760',
			maxKosnja: 'Maksimalen naklon 45°',
			teza: '240kg',
			image: '/images/mulčer_80.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 80 je model namenjen zahtevnejšim uporabnikom. V primerjavi z našo klasično 55 cm kosilnico nudi širšo delovno širino, večjo učinkovitost in hitrejše pokrivanje večjih površin. ',
			descriptionDown:
				'Širina košnje je 80 cm, kar omogoča učinkovito košnjo površin večjih nad 2000 m². Kosilnica brez težav deluje na strmih terenih z naklonom nad 45°. Zahvaljujoč zmogljivemu 452 ccm3 motorju s 16 konjskimi močmi (11,8 kW), zlahka opravi z visoko, gosto ter tudi olesenelo travo.',
		},
		{
			modelName: 'Mulčer KM-100 ',
			modelType: 'Goseničar',
			price: '5,590',
			motor: 'Bencinski - 16 KM ',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 3,600 m2 v eni uri',
			dimenzije: '1270 x 1450 x 760',
			maxKosnja: 'Maksimalen naklon 45°',
			teza: '265kg',
			image: '/images/mulčer_100.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 100 je močnejši brat modela KM 80. Enaka kakovost, a širši rez za večje delovne izzive. Napreden model za profesionalno uporabo, kjer je ključna učinkovitost pri obdelavi večjih površin.',
			descriptionDown:
				'Širina košnje je 100 cm. Opremljena je z zmogljivim 452 ccm3 motorjem, ki razvije kar 16 konjskih moči (11,8 kW) – dovolj za košnjo tudi zelo visoke, goste in olesenele trave. Napredni 4-taktni motor zagotavlja zanesljivo delovanje, pri čemer avtomatsko polnjenje baterije prek alternatorja skrbi za nemoteno delo na terenu. S porabo goriva približno 1,5 litra na uro je daljinsko vodena mulčerska kosilnica KM 100 idealna izbira za površine nad 3000 m² ter za delo na strmih naklonih nad 45°. Zmogljiv, trpežen in zanesljiv stroj za profesionalno rabo.',
		},
		{
			modelName: 'Mulčer KM-110 S',
			modelType: 'Goseničar',
			price: '7,690',
			motor: 'Bencinski - 16 KM (5km/h)',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Nad 3,000 m2 v eni uri',
			dimenzije: '1270 x 1450 x 760',
			maxKosnja: 'Maksimalen naklon 45°',
			teza: '265kg',
			image: '/images/mulčer_110.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 110 predstavlja najmočnejši model v naši ponudbi. Zasnovan je za obvladovanje velikih površin in najzahtevnejših terenov. Njegova izredna moč, vzdržljivost in stabilnost ga postavljajo v vrh ponudbe profesionalnih daljinsko vodenih mulčerjev. ',
			descriptionDown:
				'Širina košnje znaša impresivnih 110 cm. Poganja ga robusten 608 cm³ motor, ki razvije kar 22 konjskih moči (16,2 kW) – dovolj moči za brezkompromisno delo na najzahtevnejših terenih. Brez težav premaguje naklone nad 45° in v eni uri pokosi preko 3000 m² površine. Na voljo je v dveh različicah: z največjo hitrostjo 5 km/h ali okrepljenim modelom, ki doseže do 7 km/h. Sistem košnje temelji na dveh rotacijskih oseh s štirimi noži, kar zagotavlja natančno mulčenje goste in visoke vegetacije. Profesionalnost in maksimalna učinkovitost zagotovljena!',
		},
		{
			modelName: 'Mulčer KM-110 P',
			modelType: 'Goseničar',
			price: '7,890',
			motor: 'Bencinski - 22 KM (7km/h)',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Nad 3,000 m2 v eni uri',
			dimenzije: '1270 x 1450 x 760',
			maxKosnja: 'Maksimalen naklon 45°',
			teza: '330kg',
			image: '/images/mulcer_110p.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 110 predstavlja najmočnejši model v naši ponudbi. Zasnovan je za obvladovanje velikih površin in najzahtevnejših terenov. Njegova izredna moč, vzdržljivost in stabilnost ga postavljajo v vrh ponudbe profesionalnih daljinsko vodenih mulčerjev. ',
			descriptionDown:
				'Širina košnje znaša impresivnih 110 cm. Poganja ga robusten 608 cm³ motor, ki razvije kar 22 konjskih moči (16,2 kW) – dovolj moči za brezkompromisno delo na najzahtevnejših terenih. Brez težav premaguje naklone nad 45° in v eni uri pokosi preko 3000 m² površine. Na voljo je v dveh različicah: z največjo hitrostjo 5 km/h ali okrepljenim modelom, ki doseže do 7 km/h. Sistem košnje temelji na dveh rotacijskih oseh s štirimi noži, kar zagotavlja natančno mulčenje goste in visoke vegetacije. Profesionalnost in maksimalna učinkovitost zagotovljena!',
		},
		{
			modelName: 'Mulčer KM-55',
			modelType: '4x4 kolesa',
			price: '2,690',
			motor: 'Bencinski motor - 9 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1500 m2 v eni uri',
			dimenzije: '920 x 1030 x 630',
			maxKosnja: 'Maksimalen naklon 40°',
			teza: '133kg',
			image: '/images/mulčer_4x4.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica na kolesa združuje vse ključne karakteristike modela KM 55 na gosenice. Razlika je v podvozju, namesto gosenic ima ta model štirikolesni pogon (4x4), ki omogoča okretnost, večjo hitrost na ravnini in odličen oprijem tudi na bolj razgibanih terenih. ',
			descriptionDown:
				'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
		},
		{
			modelName: 'Mulčer KM-55',
			modelType: 'Goseničar',
			price: '3,290',
			motor: 'Bencinski motor - 9 KM',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1500 m2 v eni uri',
			dimenzije: '920 x 1030 x 630',
			maxKosnja: 'Maksimalen naklon 40°',
			teza: '133kg',
			image: '/images/mulčer_4x4.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica na kolesa združuje vse ključne karakteristike modela KM 55 na gosenice. Razlika je v podvozju, namesto gosenic ima ta model štirikolesni pogon (4x4), ki omogoča okretnost, večjo hitrost na ravnini in odličen oprijem tudi na bolj razgibanih terenih. ',
			descriptionDown:
				'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
		},
	];
	const [filteredData, setFilteredData] = useState({
		modelName: 'Mulčer KM-55',
		modelType: 'Goseničar',
		price: '2,890',
		motor: 'Bencinski - 9 KM',
		domet: 'Do 200m',
		kosnja: 'Daljinsko nastavljiva višina',
		povrsina: 'Do 1,500 m2 v eni uri',
		dimenzije: '920 x 1030 x 630',
		maxKosnja: 'Maksimalen naklon 40°',
		teza: '143kg',
		image: '/images/mulčer_55_goseničar.jpg',
		descriptionUp:
			'Daljinsko vodena mulčerska kosilnica KM 55, je odlična izbira za manj zahtevna opravila in za uporabnike, ki vzdržujejo manjše površine. Zaradi svoje okretnosti in daljinskega vodenja je idealna za manj dostopne in razgibane terene. ',
		descriptionDown:
			'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
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
					<h3>KM-110S</h3>
				</div>
				<div
					className={
						model == 4
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(4)}
				>
					<h3>KM-110P</h3>
				</div>
				<div
					className={
						model == 5
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(5)}
				>
					<h3>KM-4X4</h3>
				</div>
			</div>
			<div className='sb-section-models-box'>
				<div className='sb-section-models-item'>
					<div className='sb-section-models-item-image'>
						<div className='sb-section-models-item-title'>
							<h1>{filteredData.modelName} </h1>
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
				<div className='sb-models-price-box'>
					<div className='sb-models-price'>
						{' '}
						<h3>{filteredData.price} &#8364;</h3>
						<h4>( cena z ddv )</h4>
					</div>
				</div>
				{model === 0  && (
	<div className='sb-section-models-box'>
		<div className='sb-section-models-item'>
			<div className='sb-section-models-item-image'>
				<div className='sb-section-models-item-title'>
					<h1>{sbModels[6].modelName}</h1>
					<h1>{sbModels[6].modelType}</h1>
				</div>
				<div
					className='sb-section-models-item-image-image'
					style={{
						backgroundImage: sbModels
							? `url(${sbModels[6].image})`
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
							<td>{sbModels[6].motor}</td>
						</tr>
						<tr className='tr-white'>
							<td className='td-title'>Domet</td>
							<td>{sbModels[6].domet}</td>
						</tr>
						<tr className='tr-grey'>
							<td className='td-title'>Košnja</td>
							<td>{sbModels[6].kosnja}</td>
						</tr>
						<tr className='tr-white'>
							<td className='td-title'>Površina</td>
							<td>{sbModels[6].povrsina}</td>
						</tr>
						<tr className='tr-grey'>
							<td className='td-title'>Dimenzije (mm)</td>
							<td>{sbModels[6].dimenzije} (D X Š X V )</td>
						</tr>
						<tr className='tr-white'>
							<td className='td-title'>Naklon</td>
							<td>{sbModels[6].maxKosnja}</td>
						</tr>
						<tr className='tr-grey'>
							<td className='td-title'>Teža</td>
							<td>{sbModels[6].teza}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div className='sb-models-price-box'>
			<div className='sb-models-price'>
				<h3>{sbModels[6].price} &#8364;</h3>
				<h4>( cena z ddv )</h4>
			</div>
		</div>
	</div>
)}
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
