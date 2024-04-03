import React, { FC } from 'react'

import styles from './SponsorSection.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import Subscription from '../subscription/Subscription'
import { familySubscription, memberSubscription, officialSubscription } from '@/data/subscription/subscription'
import Image from 'next/image'

export const subscriptions = [memberSubscription, familySubscription, officialSubscription]

const SponsorSection: FC = () => {
	return (
		<section id='becomeSponsor' className={styles.sponsor}>
			<div className='container'>
				<div className={styles.sponsor__intro}>
					<SectionsIntro title='Become our sponsor' text='Get exclusive episodes, merch and more' />
				</div>
				<div className={styles.sponsor__list}>
					{subscriptions.map(subscription => (
						<div className={styles.list__item}>
							<Subscription props={subscription} key={subscription.id} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default SponsorSection
