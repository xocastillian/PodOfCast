import React, { FC } from 'react'
import HostCard from '../hostCard/HostCard'
import { MarquesKeith, PorterSeverus } from '@/data/podcasts/podcastHost'

import styles from './AboutHistory.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import Image from 'next/image'

import micro from '@/img/micro.png'
import PorterSeverusImg from '@/img/host1.png'
import MarquesKeithImg from '@/img/host2.png'

const AboutHistory: FC = () => {
	return (
		<section className={styles.aboutHistory}>
			<div className='container'>
				<div className={styles.aboutHistory__intro}>
					<SectionsIntro title='What our listeners say' text='Their experience throughout every platform' />
				</div>
				<div className={styles.aboutHistory__img}>
					<Image src={micro} alt='' />
				</div>
				<div className={styles.aboutHistory__history}>
					<h2 className={styles.history__title}>About and History</h2>
					<div className={styles.history__items}>
						<p className={styles.items__text}>
							Eu non <b>diam</b> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <b>elementum pulvinar</b>. <br /> <br />
							Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi <b>quis</b> commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.
						</p>
						<p className={styles.items__text}>
							Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus
							iaculis morbi. <b>Amet</b> interdum imperdiet laoreet <b>morbi</b> tincidunt fermentum, libero. Ante enim eget. <br /> <br />
							Viverra at porttitor accumsan. Orci non here
						</p>
					</div>
				</div>
				<div className={styles.aboutHistory__hosts}>
					<h2 className={styles.history__title}>Founder and Main Host</h2>
					<div className={styles.hosts__list}>
						<HostCard img={PorterSeverusImg.src} props={PorterSeverus} text='Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.' />
						<HostCard img={MarquesKeithImg.src} props={MarquesKeith} text='Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutHistory
