import { Montserrat } from 'next/font/google';
import './globals.css';
import CookieConsent from './components/CookieConsent';

export const metadata = {
	title: 'Mulčerji KBR',
	description: 'Daljinsko vodene kosilnice za košnjo trave',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
			<CookieConsent />
		</html>
	);
}
