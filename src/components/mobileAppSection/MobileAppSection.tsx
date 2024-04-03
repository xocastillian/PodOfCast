import React, { FC } from 'react'

import styles from './MobileAppSection.module.scss'
import Image from 'next/image'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import ActionBtn from '../UI/buttons/ActionBtn'
import Link from 'next/link'

import gp from '@/img/icons/google podcast mini-b.svg'
import sf from '@/img/icons/spotymini-b.svg'
import yt from '@/img/icons/youtube mini-b.svg'

import mobile1 from '@/img/illustrations/mobile1.png'
import mobile2 from '@/img/illustrations/mobile2.png'

const MobileAppSection: FC = () => {
	return (
		<section className={styles.mobileApp}>
			<div className='container'>
				<span className={styles.beta}>BETA</span>
				<div className={styles.mobileApp__intro}>
					<SectionsIntro title='Available now Pod of Cast App' text='We just launched our podcast app!' />
				</div>
				<div className={styles.mobileApp__link}>
					<Link href={'#'}>
						<ActionBtn mode='filled' text='DOWNLOAD NOW' />
					</Link>
				</div>
				<div className={styles.mobileApp__available}>
					<p className={styles.available__text}>Content also available on:</p>
					<div className={styles.available__links}>
						<Link href={'https://podcasts.google.com/'} target='_blank'>
							<Image src={gp} alt='' />
						</Link>
						<Link href={'https://spotify.com/'} target='_blank'>
							<Image src={sf} alt='' />
						</Link>
						<Link href={'https://youtube.com/'} target='_blank'>
							<Image src={yt} alt='' />
						</Link>
					</div>
				</div>
			</div>
			<Image src={mobile1} alt='mobile1' className={styles.mobile1} />
			<Image src={mobile2} alt='mobile1' className={styles.mobile2} />
		</section>
	)
}

export default MobileAppSection
