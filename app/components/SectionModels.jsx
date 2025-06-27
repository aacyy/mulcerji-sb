'use client';
import React, { useState } from 'react';
import './section-models.css';

const SectionModels = () => {
	const imgMain = '/images/7_nobg.png';
	const sbModels = [
		{
			modelName: 'Model - 0',
			modelType: 'Goseničar',
			velikost: 'Model 0 tekst',
			image: '/images/7_nobg.png',
		},
		{
			modelName: 'Model - 1',
			modelType: 'Kolesar',
			velikost: 'Model 1 tekst',
			image: '/images/6.png',
		},
		{
			modelName: 'Model - 505',
			modelType: 'Goseničar',
			velikost: 'Model 1 tekst',
			image: '/images/7_nobg.png',
		},
	];
	const [filteredData, setFilteredData] = useState({
		modelName: 'Model - 0',
		modelType: 'Goseničar',
		velikost: 'Zelo visoka cena',
		image: '/images/7_nobg.png',
	});
	const [model, setModel] = useState(0);
	const changeNav = (newItem) => {
		const newArray = sbModels[newItem];

		setFilteredData(newArray); // Set the state to the filtered array
		setModel(newItem);
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
					<h3>M-0</h3>
				</div>
				<div
					className={
						model == 1
							? 'sb-section-models-nav-item sb-section-models-nav-item-active'
							: 'sb-section-models-nav-item'
					}
					onClick={() => changeNav(1)}
				>
					<h3>M-1</h3>
				</div>
				<div className='sb-section-models-nav-item'>
					<h3>M-1000</h3>
				</div>
				<div className='sb-section-models-nav-item'>
					<h3>M-1000</h3>
				</div>
				<div className='sb-section-models-nav-item'>
					<h3>M-1000</h3>
				</div>
				<div className='sb-section-models-nav-item'>
					<h3>M-1000</h3>
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
							<h1>Tehnične</h1>
							<h1>lastnosti modela</h1>
						</div>
						<table>
							<tbody>
								<tr className='tr-grey'>
									<td className='td-title'>Velikost</td>
									<td>{filteredData.velikost}</td>
								</tr>
								<tr className='tr-white'>
									<td className='td-title'>Motor</td>
									<td>{filteredData.velikost}</td>
								</tr>
								<tr className='tr-grey'>
									<td className='td-title'>Dimenzije</td>
									<td>{filteredData.velikost}</td>
								</tr>
								<tr className='tr-white'>
									<td className='td-title'>Namen</td>
									<td>{filteredData.velikost}</td>
								</tr>
								<tr className='tr-grey'>
									<td className='td-title'>Hitrost</td>
									<td>{filteredData.velikost}</td>
								</tr>
								<tr className='tr-white'>
									<td className='td-title'>Teren</td>
									<td>{filteredData.velikost}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='sb-section-models-description'>
				<h2>Opis izdelka</h2>
				<div className='sb-section-models-description-text'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus voluptate mollitia aspernatur debitis tenetur
						incidunt dicta consequatur adipisci suscipit accusamus sunt quia
						dolore error amet aperiam fugiat et, atque assumenda?
					</p>
				</div>
			</div>
		</div>
	);
};

export default SectionModels;
