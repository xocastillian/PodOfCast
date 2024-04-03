import React, { FC } from 'react'

import styles from './OurSponsor.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import OurSponsorSwiper from '../ourSponsorSwiper/OurSponsorSwiper'

const OurSponsor: FC = () => {
	return (
		<section className={styles.ourSponsor}>
			<div className={styles.ourSponsor__intro}>
				<SectionsIntro title='Our Sponsor' text='Our current official sponsor' />
			</div>
			<div className={styles.ourSponsor__swiper}>
				<OurSponsorSwiper />
			</div>
		</section>
	)
}

export default OurSponsor
