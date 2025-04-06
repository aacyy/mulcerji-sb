import React from 'react';

const Header = () => {
	return (
		<section className='sb-header'>
			<div className='sb-header-background'></div>
			<div className='sb-header-mid'>
				<div className='sb-header-mid-text'>
					<h1>Daljinsko vodeni mulčerji</h1>
					<h4>+386 555 666</h4>
					<h4>mulcerji@kuser-mont.com</h4>
				</div>
				<div className='sb-header-mid-buttons'>
					<button>Preglejte</button>
					<button>Pokličite nas</button>
				</div>
			</div>
			<div className='sb-header-low'>
				<h2>Optimizirani mulčerji za košenje trave</h2>
			</div>
		</section>
	);
};

export default Header;
