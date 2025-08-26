import { Facebook, Instagram, Youtube } from 'lucide-react';
import '../components/header.css';
import './leanpay.css';
import React from 'react';
import Link from 'next/link';

const page = () => {
	return (
		<>
			<div className='sb-header-wrapper'>
				<nav
					className='navbar'
					style={{
						borderBottom: '1px solid rgba(17, 24, 39, 0.1) ',
					}}
				>
					<ul className='left'>
						<li style={{ color: 'black' }}>Modeli</li>
						<li style={{ color: 'black' }}>Storitve</li>
						<li style={{ color: 'black' }}>Kontakt</li>
					</ul>
					<ul className='center'>
						<Link href='/'>
							<img src='/images/logo_mulcer.png' alt='' />
						</Link>
					</ul>
					<ul className='right'>
						<li>
							<Facebook strokeWidth={1} stroke={'black'} size={26} />
						</li>
						<li>
							<Instagram strokeWidth={1} stroke={'black'} size={26} />
						</li>
						<li>
							<Youtube strokeWidth={1} stroke={'black'} size={30} />
						</li>
					</ul>
				</nav>
			</div>
			<section
				class='sb-section-main'
				style={{ backgroundColor: 'white', marginTop: '0px' }}
			>
				<section className='sb-leanpay'>
					<div className='sb-leanpay-title'>
						<h1>Leanpay- Enostavni obročni nakupi</h1>
					</div>
					<div className='sb-leanpay-banner'></div>
					<div className='sb-leanpay-text'>
						<p>
							{' '}
							Z Leanpay lahko svoje izdelke ali storitve plačaš enostavno na
							obroke. Vse kar potrebuješ je mobilni telefon in osebni dokument.
							Ves postopek traja <b>le nekaj minut</b>
						</p>

						<ul className='leanpay-list'>
							<h2>Zakaj plačevati na obroke z Leanpay?</h2>
							<li>Hipnaodločitev o odobritvi nakupa s samo nekaj podatki.</li>
							<li>
								Brezdokumentacije, brez obiska banke, brez skritih stroškov.
							</li>
							<li>Plačila na obroke do 5.000 € in do 48 obrokov na spletu.</li>
							<li>Preglednadplačili preko Moj Leanpay spletne aplikacije.</li>
							<li>Fleksibilnost, sam izbereš znesek in število obrokov.</li>
						</ul>
						<Link
							target='_blank'
							href='https://app.leanpay.si/vendor/pre-qualified?vendor=gruntmaster)'
						>
							<div className='leanpay-button'>
								<h3>Preveri svoj limit</h3>
							</div>
						</Link>
						<div className='leanpay-youtube'>
							<iframe
								src='https://www.youtube.com/embed/WcK3jffI834'
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
							></iframe>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default page;
