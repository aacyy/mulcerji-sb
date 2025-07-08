import React from 'react';
import './section-three.css';
import { Webhook, Radar, Pyramid, Gamepad } from 'lucide-react';
const SectionThree = () => {
	return (
		<div className='km-numbers'>
			<div className='km-numbers-wrapper'>
				<div className='km-numbers-item'>
					<div className='km-number-item-bg'>01</div>

					<div className='km-text-mid'>
						<Webhook strokeWidth={1} size={100} />
					</div>
					<div className='km-text-down'>
						<h2>Rezila iz titana</h2>
					</div>
				</div>
				<div className='km-numbers-item'>
					<div className='km-number-item-bg'>02</div>

					<div className='km-text-mid'>
						<Radar strokeWidth={1} size={100} />
					</div>
					<div className='km-text-down'>
						<h2>Izredno natančni</h2>
					</div>
				</div>
				<div className='km-numbers-item'>
					<div className='km-number-item-bg'>03</div>

					<div className='km-text-mid'>
						<Pyramid strokeWidth={1} size={100} />
					</div>
					<div className='km-text-down'>
						<h2>Primerni za vse naklone</h2>
					</div>
				</div>
				<div className='km-numbers-item'>
					<div className='km-number-item-bg'>04</div>

					<div className='km-text-mid'>
						<Gamepad strokeWidth={1} size={100} />
					</div>
					<div className='km-text-down'>
						<h2>Fleksibilnost nastavitev</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
