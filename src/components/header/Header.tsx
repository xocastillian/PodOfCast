'use client'

import React, { FC, useState } from 'react'
import styles from './Header.module.scss'
import Logo from '../logo/Logo'
import Navbar from '../navbar/Navbar'
import Image from 'next/image'

import burger from '@/img/icons/burger.svg'

const Header: FC = () => {
	const [showNav, setShowNav] = useState<boolean>(false)

	function handleShowNav() {
		setShowNav(!showNav)
	}

	return (
		<section className={styles.header}>
			<div className='container'>
				<header className={styles.header__header}>
					<div className={styles.header__navigation}>
						<Logo />
						{!showNav && <Navbar />}
					</div>
					<div className={styles.header__burger}>
						<button onClick={handleShowNav}>
							<Image src={burger} alt='' />
						</button>
					</div>
				</header>
			</div>
		</section>
	)
}


export default Header
