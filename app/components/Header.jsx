'use client';
import React, { useState } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	return (
		<section className='sb-header'>
			<div className='sb-header-background'></div>
			{isOpen && (
				<div className='yt-modal-overlay' onClick={closeModal}>
					<div
						className='yt-modal-content'
						onClick={(e) => e.stopPropagation()}
					>
						<iframe
							className='yt-iframe'
							src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
							title='YouTube video'
							frameBorder='0'
							allow='autoplay; encrypted-media'
							allowFullScreen
						></iframe>
						<button className='yt-close-button' onClick={closeModal}>
							✕
						</button>
					</div>
				</div>
			)}

			<div className='sb-header-mid'>
				<div className='sb-header-mid-logo'>
					<img src='/images/logo_white.png' alt='' />
				</div>
				<div className='sb-header-mid-text'>
					<h1>Daljinsko vodeni mulčerji</h1>
					<h4>+386 31 341 778</h4>
					<h4>info@gruntmaster.si</h4>
				</div>
				<div className='sb-header-mid-buttons'>
					<button onClick={openModal}>Poglejte posnetek </button>
				</div>
			</div>
			<div className='sb-header-low'>
				<h2>Optimizirani mulčerji za košnjo trave</h2>
			</div>
		</section>
	);
};

export default Header;
