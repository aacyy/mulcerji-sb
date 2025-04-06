import React from 'react';
import './header.css';
import { Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='left'>
				<li>Preglejte modele</li>
				<li>Tehnične lastnosti</li>
				<li>Kontaktirajte nas</li>
			</ul>
			<ul className='center'>
				<img src='/images/logo_white.png' alt='' />
			</ul>
			<ul className='right'>
				<li>
					<Facebook strokeWidth={1.5} />
				</li>
				<li>
					<Instagram strokeWidth={1.5} />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
