'use client';
import React, { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import './section-models.css';

const SectionModelsNew = () => {
	const imgMain = '/images/7_nobg.jpg';

	const sbModels = [
		{
			sanityKey: 'km55poceni',
			modelName: 'Mulčer KM-55',
			nav: 'KM 55 (A)',
			modelType: 'Goseničar',
			motor: '9 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1,500 m2 v eni uri',
			dimenzije: '940 / 930 / 550',
			maxKosnja: '40°',
			teza: '134kg (+/- 3%)',
			image: '/images/mulčer_55_goseničar.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 55, je odlična izbira za manj zahtevna opravila in za uporabnike, ki vzdržujejo manjše površine. Zaradi svoje okretnosti in daljinskega vodenja je idealna za manj dostopne in razgibane terene.',
			descriptionDown:
				'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
		},
		{
			sanityKey: 'km55drag',
			modelName: 'Mulčer KM-55',
			nav: 'KM 55 (B)',
			modelType: 'Goseničar',
			motor: '9 konjskih moči',
			domet: 'Do 200m',
			kosnja: 'Daljinsko nastavljiva višina',
			povrsina: 'Do 1,500 m2 v eni uri',
			dimenzije: '940 / 940 / 560',
			maxKosnja: '40°',
			teza: '134kg (+/- 3%)',
			image: '/images/mulcer_km55_mod.jpg',
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica na kolesa združuje vse ključne karakteristike modela KM 55 na gosenice. Razlika je v podvozju, namesto gosenic ima ta model štirikolesni pogon (4x4), ki omogoča okretnost, večjo hitrost na ravnini in odličen oprijem tudi na bolj razgibanih terenih.',
			descriptionDown:
				'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
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
			descriptionUp:
				'KM55X-24V je najsodobnejša in najbolje opremljena kosilnica v naši ponudbi s širino košnje 55 cm. Opremljena je z na novo zasnovanim 24-voltnim sistemom, brezkrtačni motorji pa zagotavljajo izjemno moč, učinkovitost in zanesljivo delovanje tudi pri zahtevnejši košnji. Kosilnica uporablja napredno elektroniko, ki izboljšuje zanesljivost delovanja. Vgrajena avtomatska zaščita in 24-voltni sistem zmanjšujeta segrevanje komponent ter podaljšujeta življenjsko dobo naprave',
			descriptionDown:
				'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
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
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 80 je model namenjen zahtevnejšim uporabnikom. V primerjavi z našo klasično 55 cm kosilnico nudi širšo delovno širino, večjo učinkovitost in hitrejše pokrivanje večjih površin.',
			descriptionDown:
				'Širina košnje je 80 cm, kar omogoča učinkovito košnjo površin večjih nad 2000 m². Kosilnica brez težav deluje na strmih terenih z naklonom nad 45°. Zahvaljujoč zmogljivemu 452 ccm3 motorju s 16 konjskimi močmi (11,8 kW), zlahka opravi z visoko, gosto ter tudi olesenelo travo.',
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
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 100 je močnejši brat modela KM 80. Enaka kakovost, a širši rez za večje delovne izzive. Napreden model za profesionalno uporabo, kjer je ključna učinkovitost pri obdelavi večjih površin.',
			descriptionDown:
				'Širina košnje je 100 cm. Opremljena je z zmogljivim 452 ccm3 motorjem, ki razvije kar 16 konjskih moči (11,8 kW) – dovolj za košnjo tudi zelo visoke, goste in olesenele trave. Napredni 4-taktni motor zagotavlja zanesljivo delovanje, pri čemer avtomatsko polnjenje baterije prek alternatorja skrbi za nemoteno delo na terenu. S porabo goriva približno 1,5 litra na uro je daljinsko vodena mulčerska kosilnica KM 100 idealna izbira za površine nad 3000 m² ter za delo na strmih naklonih nad 45°. Zmogljiv, trpežen in zanesljiv stroj za profesionalno rabo.',
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
			image: '/images/km100y.jpg',
			descriptionUp:
				'Mulčerska kosilnica z Y-noži je zasnovana za zahtevnejše terene, kjer brez težav obvladuje veje, grmičevje in olesenelo travo. Kljub svoji robustnosti pa omogoča tudi zelo natančno in estetsko košnjo klasične trate. Poganja jo zmogljiv dizelski motor 500 ccm (model 195F), ki razvije kar 15 konjskih moči. Poleg moči ga odlikuje tudi izjemen navor, kar je pri delu na zahtevnih terenih ključnega pomena. Gre za najnovejši model za leto 2026, ki prinaša številne izboljšave: posodobljeno elektroniko, izboljšan sistem hlajenja komponent, elektronski dvig in spust kosišča, dodatno zaščitene vrteče komponente za maksimalno varnost',
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
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 110 predstavlja najmočnejši model v naši ponudbi. Zasnovan je za obvladovanje velikih površin in najzahtevnejših terenov. Njegova izredna moč, vzdržljivost in stabilnost ga postavljajo v vrh ponudbe profesionalnih daljinsko vodenih mulčerjev.',
			descriptionDown:
				'Širina košnje znaša impresivnih 110 cm. Poganja ga robusten 608 cm³ motor, ki razvije kar 22 konjskih moči (16,2 kW) – dovolj moči za brezkompromisno delo na najzahtevnejših terenih. Brez težav premaguje naklone nad 45° in v eni uri pokosi preko 3000 m² površine. Na voljo je v dveh različicah: z največjo hitrostjo 5 km/h ali okrepljenim modelom, ki doseže do 7 km/h. Sistem košnje temelji na dveh rotacijskih oseh s štirimi noži, kar zagotavlja natančno mulčenje goste in visoke vegetacije. Profesionalnost in maksimalna učinkovitost zagotovljena!',
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
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica KM 110 predstavlja najmočnejši model v naši ponudbi. Zasnovan je za obvladovanje velikih površin in najzahtevnejših terenov. Njegova izredna moč, vzdržljivost in stabilnost ga postavljajo v vrh ponudbe profesionalnih daljinsko vodenih mulčerjev.',
			descriptionDown:
				'Širina košnje znaša impresivnih 110 cm. Poganja ga robusten 608 cm³ motor, ki razvije kar 22 konjskih moči (16,2 kW) – dovolj moči za brezkompromisno delo na najzahtevnejših terenih. Brez težav premaguje naklone nad 45° in v eni uri pokosi preko 3000 m² površine. Na voljo je v dveh različicah: z največjo hitrostjo 5 km/h ali okrepljenim modelom, ki doseže do 7 km/h. Sistem košnje temelji na dveh rotacijskih oseh s štirimi noži, kar zagotavlja natančno mulčenje goste in visoke vegetacije. Profesionalnost in maksimalna učinkovitost zagotovljena!',
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
			image: '/images/km120.jpg',
			descriptionUp:
				'Mulčerska kosilnica z Y-noži je zasnovana za zahtevnejše terene, kjer brez težav obvladuje veje, grmičevje in olesenelo travo. Kljub svoji robustnosti pa omogoča tudi zelo natančno in estetsko košnjo klasične trate. Poganja jo zmogljiv dizelski motor 500 ccm (model 195F), ki razvije kar 15 konjskih moči. Poleg moči ga odlikuje tudi izjemen navor, kar je pri delu na zahtevnih terenih ključnega pomena. Gre za najnovejši model za leto 2026, ki prinaša številne izboljšave: posodobljeno elektroniko, izboljšan sistem hlajenja komponent, elektronski dvig in spust kosišča, dodatno zaščitene vrteče komponente za maksimalno varnost',

			descriptionDown:
				'Širina košnje je 100 cm. Opremljena je z zmogljivim 452 ccm3 motorjem, ki razvije kar 16 konjskih moči (11,8 kW) – dovolj za košnjo tudi zelo visoke, goste in olesenele trave. Napredni 4-taktni motor zagotavlja zanesljivo delovanje, pri čemer avtomatsko polnjenje baterije prek alternatorja skrbi za nemoteno delo na terenu. S porabo goriva približno 1,5 litra na uro je daljinsko vodena mulčerska kosilnica KM 100 idealna izbira za površine nad 3000 m² ter za delo na strmih naklonih nad 45°. Zmogljiv, trpežen in zanesljiv stroj za profesionalno rabo.',
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
			descriptionUp:
				'Daljinsko vodena mulčerska kosilnica na kolesa združuje vse ključne karakteristike modela KM 55 na gosenice. Razlika je v podvozju, namesto gosenic ima ta model štirikolesni pogon (4x4), ki omogoča okretnost, večjo hitrost na ravnini in odličen oprijem tudi na bolj razgibanih terenih.',
			descriptionDown:
				'Širina košnje je 55 cm, kar omogoča učinkovito košnjo površin do 2000 m².Kljub manjšim dimenzijam se lahko pohvali z zanesljivim 224 ccm3 bencinskim motorjem, ki razvije 9 KM (6,62 kW) moči, kar je več kot dovolj za učinkovito mulčenje srednje visoke trave. Kosilnica je opremljena z alternatorjem za samodejno polnjenje baterije med delovanjem. Njena poraba je izredno nizka in znaša približno 0,8 litra na uro.',
		},
	];

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [itemTitle, setItemTitle] = useState(0);
	// Map of sanityKey → price, populated once on mount
	const [priceMap, setPriceMap] = useState({});

	const selectedModel = sbModels[selectedIndex];
	const currentPrice = priceMap[selectedModel.sanityKey];

	useEffect(() => {
		const fetchPrices = async () => {
			const query = `*[_type == 'Modeli']{ title, price }`;
			const data = await client.fetch(query);
			// Build a lookup object: { km55poceni: '2,890', km80: '5,450', ... }
			const map = Object.fromEntries(
				data.map((item) => [item.title, item.price]),
			);
			setPriceMap(map);
		};
		fetchPrices();
	}, []);

	const PriceDisplay = ({ sanityKey }) => {
		const price = priceMap[sanityKey];
		return (
			<div className='sb-models-price-box'>
				<div className='sb-models-price'>
					<h3>
						{price ? (
							`${price} €`
						) : (
							<img src='/images/mulcer_load.gif' alt='loading' />
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

	const ModelCard = ({ model }) => (
		<div className='sb-section-models-item'>
			<div className='sb-section-models-item-image'>
				<div className='sb-section-models-item-title'>
					<h1>{model.modelName}</h1>
					<h1>{model.modelType}</h1>
				</div>
				<div
					className='sb-section-models-item-image-image'
					style={{ backgroundImage: `url(${model.image})` }}
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

			{/* Main model card + price */}
			<div className='sb-section-models-box'>
				<ModelCard model={selectedModel} />
				<PriceDisplay sanityKey={selectedModel.sanityKey} />
			</div>

			{/* Description tabs */}
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
					Opomba: Pridržujemo si pravico do spremembe cen
				</p>
			</div>
		</div>
	);
};

export default SectionModelsNew;
