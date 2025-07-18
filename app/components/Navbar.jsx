import React from 'react';
import './header.css';
import { Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='left'>
				<li>Preglejte modele</li>
				<li>Storitve</li>
				<li>Kontaktirajte nas</li>
			</ul>
			<ul className='center'></ul>
			<ul className='right'>
				<li>
					<Facebook strokeWidth={3} />
				</li>
				<li>
					<Instagram strokeWidth={1.5} />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
