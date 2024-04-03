'use client'

import React, { FC } from 'react'

import styles from './TestimonialsSwiper.module.scss'
import 'swiper/swiper-bundle.css'

import { testimonals } from '@/data/testimonials/testimonals'
import Testimonialtem from '../testimonialtem/Testimonialtem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

const TestimonialsSwiper: FC = () => {
	return (
		<div className={styles.testimonials__list}>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				centeredSlides={true}
				initialSlide={2}
				navigation={false}
				modules={[Scrollbar]}
				scrollbar={{
					hide: true,
				}}
				breakpoints={{
					1600: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 2,
					},
					480: {
						slidesPerView: 2,
					},
				}}
			>
				{testimonals.map(testimonal => (
					<SwiperSlide key={testimonal.id}>
						<Testimonialtem props={testimonal} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default TestimonialsSwiper
