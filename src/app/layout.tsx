import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'
import './styles/reset.scss'
import './styles/globals.scss'
import Header from '@/components/header/Header'
import MobileAppSection from '@/components/mobileAppSection/MobileAppSection'
import Footer from '@/components/footer/Footer'

const montserratAlternates = Montserrat_Alternates({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata: Metadata = {
	title: 'Pod Of Cast',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={montserratAlternates.className}>
				<Header />
				{children}
				<MobileAppSection />
				<Footer />
			</body>
		</html>
	)
}
