import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import logo from '@/img/icons/logo.svg'

const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<Image src={logo} alt='logo' width={74} height={74} />
		</Link>
	)
}

export default Logo
