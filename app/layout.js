import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata = {
	title: 'Mulčerji KBR',
	description: 'Daljinsko vodeni mulčerji za košnjo trave',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
