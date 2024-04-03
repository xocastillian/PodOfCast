import React, { FC } from 'react'

import styles from './AboutHeroSection.module.scss'
import Link from 'next/link'
import ActionBtn from '../UI/buttons/ActionBtn'
import { subscribeLink } from '@/config/subscribeLink'
import AmountCard from '../amountCard/AmountCard'
import { members } from '@/data/community/members'
import { subscribers } from '@/data/community/subscribers'

const AboutHeroSection: FC = (): JSX.Element => {
	return (
		<section className={styles.aboutHeroSection}>
			<div className='container'>
				<div className={styles.aboutHeroSection__intro}>
					<h1 className={styles.intro__title}>
						About <br />
						<span className={styles.title__accent}>Pod of Cast</span>
					</h1>
					<p className={styles.intro__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
				</div>
				<div className={styles.aboutHeroSection__actions}>
					<Link href='/#becomeSponsor' target='_blank'>
						<ActionBtn mode='outlined' text='BECOME SPONSOR' />
					</Link>
					<Link href={subscribeLink.url} target='_blank'>
						<ActionBtn mode='filled' text='SUBSCRIBE' />
					</Link>
				</div>
				<div className={styles.aboutHeroSection__amountOfUsers}>
					<AmountCard amount={members.length} users='Community Members' />
					<AmountCard amount={subscribers.length} users='Podcast Subscribers' />
				</div>
			</div>
		</section>
	)
}

export default AboutHeroSection
