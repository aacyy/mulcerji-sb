import React from 'react';
import './section-two.css';
import { Drill, MessageCircleQuestion, ShieldCheck, Truck } from 'lucide-react';

const SectionTwo = () => {
	return (
		<section className='sb-section-two'>
			<div className='sb-section-two-img'>
				<div className='sb-section-two-img-first'></div>
				<div className='sb-section-two-img-second'></div>
			</div>
			<div className='sb-section-two-content'>
				<div className='sb-section-two-title'>
					<h3>02</h3>
					<h3>Storitve</h3>
				</div>
				<div className='sb-section-two-subtitle'>
					<h1>Ob nakupu mulčerja</h1>
					<h1>vam zagotovimo</h1>
				</div>
				<div className='sb-section-two-box'>
					<div className='sb-section-two-item'>
						<div className='sb-section-two-item-img'>
							<Drill strokeWidth={1.2} size={35} />
						</div>
						<div className='sb-section-two-item-text'>
							{' '}
							<p>Servis</p>
						</div>
					</div>
					<div className='sb-section-two-item'>
						<div className='sb-section-two-item-img'>
							<ShieldCheck strokeWidth={1.2} size={35} />
						</div>
						<div className='sb-section-two-item-text'>
							{' '}
							<p>Garancija</p>
						</div>
					</div>
					<div className='sb-section-two-item'>
						<div className='sb-section-two-item-img'>
							<Truck strokeWidth={1.2} size={35} />
						</div>
						<div className='sb-section-two-item-text'>
							<p>Prevoz</p>
						</div>
					</div>
					<div className='sb-section-two-item'>
						<div className='sb-section-two-item-img'>
							<MessageCircleQuestion strokeWidth={1.2} size={35} />
						</div>
						<div className='sb-section-two-item-text'>
							<p>Svetovanje</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;
