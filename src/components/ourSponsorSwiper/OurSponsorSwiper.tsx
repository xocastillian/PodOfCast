'use client'

import React, { FC } from 'react'

import styles from './OurSponsorSwiper.module.scss'
import { partners } from '@/data/partners/partners'
import OurSponsorItem from '../ourSponsorItem/OurSponsorItem'

const OurSponsorSwiper: FC = () => {
	return (
		<div className={styles.ourSponsorSwiper}>
			{partners.map(partner => (
				<OurSponsorItem props={partner} key={partner.id} />
			))}
		</div>
	)
}

export default OurSponsorSwiper
