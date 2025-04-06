import { Facebook, Instagram, Mail, Smartphone } from 'lucide-react';
import './footer.css';
import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className='sb-footer-container'>
				<div className='sb-footer-up'>
					<div className='sb-footer-up-items'>
						<div className='sb-footer-up-item'>
							<div className='sb-footer-up-item-title'>
								<h2>Naši modeli</h2>
							</div>
							<ul>
								<li>Model 1</li>
								<li>Model 2</li>
								<li>Model 3</li>
								<li>Model 4</li>
							</ul>
						</div>
						<div className='sb-footer-up-item'>
							<div className='sb-footer-up-item-title'>
								<h2>Naše storitve</h2>
							</div>
							<ul>
								<li>Storitev 1</li>
								<li>Storitev 2</li>
								<li>Storitev 3</li>
							</ul>
						</div>
						<div className='sb-footer-up-item'>
							<div className='sb-footer-up-item-title'>
								<h2>Pogoji poslovanja</h2>
							</div>
							<ul>
								<li>Ne povemo</li>
								<li>EU zakonodaja</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='sb-footer-mid'>
					<div className='sb-footer-mid-items'>
						<div className='sb-footer-mid-item'>
							<h2>Kontaktirajte nas</h2>
						</div>
						<div className='sb-footer-mid-item-two'>
							<Mail size={24} strokeWidth={1.5} />
							<div className='sb-footer-mid-item-two-text'>
								<div>
									{' '}
									<h2>info@kuser-mont.com</h2>
								</div>
							</div>
						</div>
						<div className='sb-footer-mid-item-two'>
							<Smartphone size={24} strokeWidth={1.5} />
							<div className='sb-footer-mid-item-two-text'>
								<div>
									{' '}
									<h2>+386 31 555 666</h2>
								</div>
							</div>
						</div>
						<div className='sb-footer-mid-item-social'>
							<Facebook />
							<Instagram />
						</div>
					</div>
				</div>
				<div className='sb-footer-low'>
					<div className='sb-footer-low-items'>
						<div className='sb-footer-low-item'>
							<img src='/images/leanpay-thumbnail.png' alt='' />
						</div>
						<div className='sb-footer-low-item'>
							<img src='/images/visa.png' alt='' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
