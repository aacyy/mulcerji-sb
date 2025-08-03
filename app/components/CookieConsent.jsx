'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './cookie.css';

export default function CookieConsent() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const cookieConsent = Cookies.get('cookie_consent');
		if (!cookieConsent) {
			setVisible(true);
		}
	}, []);

	const acceptCookies = () => {
		Cookies.set('cookie_consent', 'true', { expires: 365 });
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className='sb-cookie'>
			<p>
				Ta spletna stran uporablja piškotke za izboljšanje uporabniške izkušnje.
				Z nadaljnjo uporabo spletne strani soglašate z uporabo piškotkov..
			</p>
			<button onClick={acceptCookies} className='sb-cookie-button'>
				Razumem
			</button>
		</div>
	);
}
