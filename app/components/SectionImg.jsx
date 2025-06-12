import React from 'react';
import './section-img.css';
import { Container } from 'lucide-react';
import { Webhook, Radar, Pyramid, Gamepad } from 'lucide-react';

const SectionImg = () => {
	return (
		<section class='section-img'>
			<section class='section-img-container'>
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
				<div className='sb-section-img-content'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
						voluptatem enim dignissimos earum porro doloremque fuga amet illum
						nobis iusto nam, culpa nisi, voluptas error rerum, similique tempora
						reprehenderit odit!
					</p>
				</div>
				<div className='sb-section-img-icons'>
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
									<h2>Izredno natančen</h2>
								</div>
							</div>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>03</div>

								<div className='km-text-mid'>
									<Pyramid strokeWidth={1} size={100} />
								</div>
								<div className='km-text-down'>
									<h2>Primeren za vse naklone</h2>
								</div>
							</div>
							<div className='km-numbers-item'>
								<div className='km-number-item-bg'>04</div>

								<div className='km-text-mid'>
									<Gamepad strokeWidth={1} size={100} />
								</div>
								<div className='km-text-down'>
									<h2>Daljinsko upravljanje</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='section-img-image'>
					<img src='/images/mulcer-img.png' alt='' />
				</div>
			</section>
		</section>
	);
};

export default SectionImg;
