'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import './components/header.css';
import './globals.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Footer from './components/Footer';
import { useRef } from 'react';

import SectionImg from './components/SectionImg';
import SectionModelsNew from './components/SectionModelsNew';
import Sectionleanpay from './components/Sectionleanpay';
import { usePathname } from 'next/navigation';
import SectionGalerija from './components/SectionGalerija';

export default function Home() {
	const featuresRef = useRef(null);
	const modelsRef = useRef(null);
	const scrollToFeatures = () => {
		featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToModels = () => {
		modelsRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const pathname = usePathname();
	return (
		<>
			<div className='sb-header-wrapper'>
				<nav className={pathname == '/leanpay' ? 'navbar-leanpay' : 'navbar'}>
					<ul className='left'>
						<li onClick={scrollToModels}>Modeli</li>
						<li onClick={scrollToFeatures}>Storitve</li>
						<li>Kontakt</li>
					</ul>
					<ul className='center'>
						<img src='/images/logo_white.png' alt='' />
					</ul>
					<ul className='right'>
						<li>
							<Facebook strokeWidth={1.5} size={26} />
						</li>
						<li>
							<Instagram strokeWidth={1.5} size={26} />
						</li>
						<li>
							<Youtube strokeWidth={1.5} size={30} />
						</li>
					</ul>
				</nav>
				<Header />
			</div>
			<section class='sb-section-main'>
				<div className='sb-section-one' ref={featuresRef}>
					<SectionOne />
				</div>

				<SectionTwo />
				<SectionImg />
				<div className='sb-section-models' ref={modelsRef}>
					<Sectionleanpay />
					<SectionModelsNew />
				</div>
				<SectionGalerija />
			</section>
			<Footer />
		</>
	);
}
