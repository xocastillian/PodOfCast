'use client'

import React from 'react'

import styles from './HeroSection.module.scss'
import PageIntro from '../pageIntro/PageIntro'
import ActionBtn from '../UI/buttons/ActionBtn'
import Link from 'next/link'
import { subscribeLink } from '@/config/subscribeLink'

import Image from 'next/image'

import PodcastsSwiper from '../podcastsSwiper/PodcastsSwiper'
import Partners from '../partners/Partners'

const HeroSection = () => {
	return (
		<section className={styles.heroSection}>
			<div className='container'>
				<div className={styles.heroSection__intro}>
					<PageIntro title='Your Daily Podcast' text='We cover all kinds of categories and a weekly special guest.' />
					<Link href={subscribeLink.url} target='_blank'>
						<ActionBtn mode='filled' text='SUBSCRIBE' />
					</Link>
				</div>
			</div>
			<PodcastsSwiper />
			<div className='container'>
				<Partners />
			</div>

		</section>
	)
}

export default HeroSection
