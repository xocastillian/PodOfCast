import React, { FC } from 'react'

import styles from './Testimonials.module.scss'

import SectionsIntro from '../sectionsIntro/SectionsIntro'
import TestimonialsSwiper from '../testimonialsSwiper/TestimonialsSwiper'
import Image from 'next/image'


const Testimonials: FC = () => {
	return (
		<section className={styles.testimonials}>
			<div className='container'>
				<div className={styles.testimonials__intro}>
					<SectionsIntro title='What our listeners say' text='Their experience throughout every platform' />
				</div>
			</div>
			<TestimonialsSwiper />
		</section>
	)
}

export default Testimonials
