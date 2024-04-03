import React, { FC } from 'react'

import styles from './InspiredSection.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import InspiredItem from '../inspiredItem/InspiredItem'

import inspired1 from '@/img/illustrations/inspired1.svg'
import inspired2 from '@/img/illustrations/inspired2.svg'

import autorAvatar from '@/img/icons/jSmith.svg'
import autorWorkplace from '@/img/icons/spotymini.svg'

import Quote from '../quote/Quote'

const InspiredSection: FC = () => {
	return (
		<section className={styles.inspired}>
			<div className='container'>
				<div className={styles.inspired__intro}>
					<SectionsIntro title='Talk. Listen. Get inspired by every minute of it.' />
				</div>
				<div className={styles.inspired__items}>
					<InspiredItem img={inspired1} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.' />
					<InspiredItem img={inspired2} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.' />
				</div>
				<Quote
					text='One of the best daily podcasts that covers every topic on Spotify.'
					autor='John Smith'
					autorRole='Social Community Manager'
					autorWorkplace={autorWorkplace}
					autorAvatar={autorAvatar}
				/>
			</div>
		</section>
	)
}

export default InspiredSection
