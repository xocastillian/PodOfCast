import React, { FC } from 'react'
import { navLinks } from '@/config/navLinks'
import { partners } from '@/data/partners/partners'

import styles from './Footer.module.scss'
import Logo from '../logo/Logo'
import Link from 'next/link'
import Image from 'next/image'

import tt from '@/img/icons/tiktok.svg'
import inst from '@/img/icons/instagram.svg'

import as from '@/img/icons/app_store.svg'
import gp from '@/img/icons/google_play.svg'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__head}>
					<div className={styles.head__intro}>
						<div className={styles.intro__logo}>
							<Logo />
							<span className={styles.copyDate}>©2021.</span>
						</div>
						<p className={styles.intro__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<div className={styles.intro__socials}>
							<Link href={'https://instagram.com/'} target='_blank'>
								<Image src={inst} alt='' />
							</Link>
							<Link href={'https://tiktok.com/'} target='_blank'>
								<Image src={tt} alt='' />
							</Link>
						</div>
					</div>
					<div className={styles.head__links}>
						{navLinks.map(link => (
							<Link href={link.href} key={link.id} className={styles.links__item}>
								{link.title}
							</Link>
						))}
					</div>
					<div className={styles.head__platforms}>
						<span className={styles.platforms__text}>Listen to episodes on your fav platform:</span>
						<div className={styles.platforms__items}>
							{partners.map(link => (
								<Link href={link.link} key={link.id}>
									<Image alt='' src={link.img} />
								</Link>
							))}
						</div>
						<div className={styles.platforms__available}>
							<span className={styles.available__text}>App available on:</span>
							<div className={styles.available__links}>
								<Link href={'https://www.apple.com/app-store/'} target='_blank'>
									<Image src={as} alt='' />
								</Link>
								<Link href={'https://play.google.com/store/'} target='_blank'>
									<Image src={gp} alt='' />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footer__foot}>
					<div className={styles.foot__copy}>
						©2022. All Rights Reserved. <span className={styles.copy__naming}>Pod of Cast</span>
					</div>
					<div className={styles.foot__privacy}>
						<Link href={'#'} className={styles.privacy__link}>
							Terms
						</Link>
						•
						<Link href={'#'} className={styles.privacy__link}>
							Privacy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
