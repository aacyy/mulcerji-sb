import React from 'react';
import './section-one.css';

const SectionOne = ({ refref }) => {
	return (
		<>
			<div className='sb-section-one-content'>
				<img src='/images/logo_white.png' alt='' />
				<div className='sb-section-one-title'>
					<h3>01</h3>
					<h3>Mulčerji</h3>
				</div>
				<div className='sb-section-one-subtitle'>
					<h1>Mulčer</h1>
					<h1>na daljinsko vodenje</h1>
				</div>
				<div className='sb-section-one-sum'>
					<h4>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
						assumenda.
					</h4>
				</div>
				<div className='sb-section-one-text'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sit?
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
						repellendus.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi
						officiis et suscipit alias neque iusto nesciunt voluptatum
						consequatur fuga?
					</p>
				</div>
			</div>
			<div className='sb-section-one-img'></div>
		</>
	);
};

export default SectionOne;
