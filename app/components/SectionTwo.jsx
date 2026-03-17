import React from 'react';
import './section-two.css';
import { Drill, MessageCircleQuestion, ShieldCheck, Truck } from 'lucide-react';

const SectionTwo = () => {
	const strokeWidth = 1.6;
	return (
		<section className='sb-section-two'>
			<div className='sb-section-two-container'>
				<div className='sb-section-two-img'>
					<img src='/images/servis_1.jpg' alt='' />
				</div>
				<div className='sb-section-two-content'>
					<div className='sb-section-two-titles'>
						<div className='sb-section-two-title'>
							<h3>02</h3>
							<h3>Storitve</h3>
						</div>
						<div className='sb-section-two-subtitle'>
							<h1>Vse storitve</h1>
							<h1>na enem mestu</h1>
						</div>
					</div>

					<div className='sb-section-two-text'>
						<p>
							Ob nakupu mulčerja vam zagotavljamo vse storitve potrebne za
							brezskrbno delovanje vaše naprave.
						</p>
						<p>V našem podjetju vam nudimo:</p>
					</div>
					<div className='sb-section-two-box'>
						<div className='sb-section-two-item'>
							<div className='sb-section-two-item-img'>
								<Drill strokeWidth={strokeWidth} size={30} />
							</div>
							<div className='sb-section-two-item-text'>
								{' '}
								<p>Servis</p>
							</div>
						</div>
						<div className='sb-section-two-item'>
							<div className='sb-section-two-item-img'>
								<ShieldCheck strokeWidth={strokeWidth} size={30} />
							</div>
							<div className='sb-section-two-item-text'>
								{' '}
								<p>Garancijo</p>
							</div>
						</div>
						<div className='sb-section-two-item'>
							<div className='sb-section-two-item-img'>
								<Truck strokeWidth={strokeWidth} size={30} />
							</div>
							<div className='sb-section-two-item-text'>
								<p>Prevoz</p>
							</div>
						</div>
						<div className='sb-section-two-item'>
							<div className='sb-section-two-item-img'>
								<MessageCircleQuestion strokeWidth={strokeWidth} size={30} />
							</div>
							<div className='sb-section-two-item-text'>
								<p>Svetovanje</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;
