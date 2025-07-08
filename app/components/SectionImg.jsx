import React from 'react';
import './section-img.css';
import {
	Container,
	Settings2,
	SlidersHorizontal,
	UserCheck,
} from 'lucide-react';
import { Webhook, Radar, Pyramid, Gamepad } from 'lucide-react';

const SectionImg = () => {
	return (
		<section class='section-img'>
			<div class='section-img-container'>
				<div className='sb-section-img-title-container'>
					<div className='sb-section-img-title'>
						<h3>03</h3>
						<h3>Tehnične lastnosti</h3>
					</div>
					<div className='sb-section-img-subtitle'>
						<h1>Prilagodljivost</h1>
						<h1>terenu in okolici</h1>
					</div>
				</div>

				<div className='sb-section-img-icons'>
					<div className='km-numbers'>
						<div className='km-numbers-wrapper'>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>1</div>
								<div className='km-numbers-container'>
									<div className='km-text-mid'>
										<Webhook strokeWidth={1.5} size={45} />
									</div>
									<div className='km-text-down'>
										<h2>Rezila iz titana</h2>
									</div>
								</div>
							</div>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>2</div>
								<div className='km-numbers-container'>
									<div className='km-text-mid'>
										<Radar strokeWidth={1.5} size={45} />
									</div>
									<div className='km-text-down'>
										<h2>Izredno natančen</h2>
									</div>
								</div>
							</div>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>3</div>
								<div className='km-numbers-container'>
									<div className='km-text-mid'>
										<Pyramid strokeWidth={1.5} size={45} />
									</div>
									<div className='km-text-down'>
										<h2>Primeren za vse naklone</h2>
									</div>
								</div>
							</div>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>4</div>
								<div className='km-numbers-container'>
									<div className='km-text-mid'>
										<Gamepad strokeWidth={1.5} size={45} />
									</div>
									<div className='km-text-down'>
										<h2>Daljinsko upravljanje</h2>
									</div>
								</div>
							</div>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>5</div>
								<div className='km-numbers-container'>
									<div className='km-text-mid'>
										<Settings2 strokeWidth={1.5} size={45} />
									</div>
									<div className='km-text-down'>
										<h2>Fleksibilnost nastavitev</h2>
									</div>
								</div>
							</div>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>6</div>
								<div className='km-numbers-container'>
									<div className='km-text-mid'>
										<UserCheck strokeWidth={1.5} size={45} />
									</div>
									<div className='km-text-down'>
										<h2>Enostavna uporaba</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionImg;
