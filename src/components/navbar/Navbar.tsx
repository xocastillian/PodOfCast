import React, { FC } from 'react'

import styles from './Navbar.module.scss'
import Link from 'next/link'
import { navLinks } from '@/config/navLinks'
import ActionBtn from '../UI/buttons/ActionBtn'
import { subscribeLink } from '@/config/subscribeLink'

const Navbar: FC = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__list}>
				{navLinks.map(link => (
					<li className={styles.list__item} key={link.id}>
						<Link href={link.href} className={styles.item__link}>
							{link.title}
						</Link>
					</li>
				))}
				<div className={styles.navbar__actions}>
					<Link href='/#recent_episodes' className={styles.actions__item}>
						<ActionBtn mode='outlined' text='RECENT EPISODES' />
					</Link>
					<Link href={subscribeLink.url} target='_blank' className={styles.actions__item}>
						<ActionBtn mode='filled' text='SUBSCRIBE' />
					</Link>
				</div>
			</ul>
		</nav>
	)
}

export default Navbar
