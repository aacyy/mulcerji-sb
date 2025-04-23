import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata = {
	title: 'Mulcerji KBR',
	description: 'Daljinsko vodeni mulčerji',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
