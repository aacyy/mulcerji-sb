'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Facebook, Instagram } from 'lucide-react';
import './components/header.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Footer from './components/Footer';
import { useRef } from 'react';

export default function Home() {
	const featuresRef = useRef(null);
	const modelsRef = useRef(null);
	const scrollToFeatures = () => {
		featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToModels = () => {
		modelsRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<nav className='navbar'>
				<ul className='left'>
					<li onClick={scrollToModels}>Preglejte modele</li>
					<li onClick={scrollToFeatures}>Tehnične lastnosti</li>
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
			<Header />
			<section class='sb-section-main'>
				<div className='sb-section-one' ref={featuresRef}>
					<SectionOne />
				</div>

				<SectionTwo />
				<SectionThree />
				<div className='sb-section-four' ref={modelsRef}>
					<SectionFour />
				</div>
			</section>
			<Footer />
		</>
	);
}
