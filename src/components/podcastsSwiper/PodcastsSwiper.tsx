import React, { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import { podcasts } from '@/data/podcasts/podcasts'
import PodcastDemoCard from '../podcastDemoCard/PodcastDemoCard'

import styles from './PodcastsSwiper.module.scss'

const PodcastsSwiper: FC = () => {
	return (
		<div className={styles.podcasts}>
			<Swiper
				spaceBetween={20}
				slidesPerView={2}
				centeredSlides={true}
				initialSlide={2}
				navigation={false}
				breakpoints={{
					1440: {
						slidesPerView: 5,
					},
					1366: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2,
					},
				}}
			>
				{podcasts.map(podcast => (
					<SwiperSlide key={podcast.id}>
						<PodcastDemoCard props={podcast} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default PodcastsSwiper
