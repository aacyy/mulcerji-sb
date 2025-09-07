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
						<ul className='leanpay-list'>
							<h2>Kaj potrebuješ za uspešen nakup na obroke z Leanpay?</h2>
							<li>osebni dokument Republike Slovenije</li>
							<li>mobilni telefon</li>
							<li>davčno številko</li>
							<li>
								številko svojega transakcijskega računa, iz katerega plačuješ
								obroke
							</li>
							<li>
								poznati višino svojih rednih mesečnih prilivov in izdatkov
							</li>
						</ul>
						<ol className='leanpay-list'>
							<h2> Kako plačaš z Leanpay v spletni trgovini?</h2>
							<li>
								V spletni trgovini izbereš želen izdelek in slediš korakom.
							</li>
							<li>Pri koraku “Načini plačila” izbereš Leanpay.</li>
							<li>
								Klikneš na gumb "oddaj naročilo" in nato izbereš število
								obrokov.
							</li>
							<li>
								Vneseš svoje osebne podatke in nato prejmeš takojšnjo odločitev
								o odobritvi plačila.
							</li>
							<li>
								Mesečno poravnaš obveznosti s pomočjo trajnika brez obiska
								banke.
							</li>
						</ol>
						<br></br>
						<br></br>
						<div className='sb-leanpay-text'>
							<h2>
								{' '}
								Ali ahko žepred obiskom poslovalnice preveriš, če bi dobil limit
								pri Leanpay?
							</h2>

							<p>
								{' '}
								Seveda, to lahko opraviš digitalno preko postopka{' '}
								<a
									href='https://app.leanpay.si/vendor/pre-qualified?vendor=www.gruntmaster.si'
									target='_blank'
								>
									Preveri svoj limit
								</a>
								, ki traja le nekaj minut in ne zahteva nobene dokumentacije, le
								vnos nekaj podatkov v spletni obrazec.
								<br></br>
								<br></br>
								Na tak način se tudi registriraš v Leanpay in ko boš trgovini
								prosil prodajalca za ponudbo bo dovolj, da mu poveš samo svojo
								telefonsko številko in predložiš osebni dokument.
								<br></br>
								<br></br>
								Več o tem lahko{' '}
								<a
									href='https://help.leanpay.com/sl/knowledge/kako-lahko-vnaprej-preverim-ali-bi-dobil-limit-pri-leanpay-kaj-pomeni-gumb-preveri-svoj-limit'
									target='_blank'
								>
									prebereš tukaj
								</a>
							</p>
							<br></br>
							<br></br>
							<h2> Koliko te stane nakup na obroke z Leanpay?</h2>

							<p>
								Pri Leanpay ni drobnega tiska in skritih stroškov. Vse lahko
								dobro preveriš preden se odločiš za možnost, ki ti najbolj
								ustreza.
								<br></br>
								<br></br>
								Uporabi naš{' '}
								<a
									href='https://calculator.leanpay-features.com/calculator/index.html'
									target='_blank'
								>
									kalkulator
								</a>{' '}
								za informativni izračun mesečnih obrokov
								<br></br>
								<br></br>
								Celotno ponudbo z izračuni lahko vidiš{' '}
								<a
									href='https://drive.google.com/file/d/1qkVJVwVSmCrbAIj75W9TeovdX4MJXRVq/view'
									target='_blank'
								></a>{' '}
								tukaj.
								<br></br>
								<br></br>
								Vprimerih posebnih promocij so lahko ponudbe drugačne.
								<br></br>
								<br></br>
							</p>
							<h2> Kaj pa ko zaključiš nakup?</h2>
							<p>
								Na{' '}
								<a href='https://app.leanpay.si/' target='_blank'>
									Moj Leanpay
								</a>{' '}
								spletni aplikaciji pa lahko spremljaš svoja plačila, bodoče
								nakupe in novosti. Dostop pridobiš s prvim zaključenim nakupom
								ali z zaključenim postopkom{' '}
								<a
									href='https://app.leanpay.si/vendor/pre-qualified?vendor=www.gruntmaster.si'
									target='_blank'
								>
									Preveri svoj limit
								</a>
							</p>
							<br></br>
							<br></br>
							<h2> Imaš dodatna vprašanja?</h2>
							<p>
								Vsa pogosto zastavljena vprašanja najdeš na{' '}
								<a
									target='_blank'
									href='https://help.leanpay.com/sl/knowledge/za-kupce'
								>
									{' '}
									Leanpay spletni strani
								</a>
							</p>
						</div>
						<br></br>
					</div>
				</section>
			</section>
		</>
	);
};

export default page;
