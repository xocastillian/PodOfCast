import React, { FC } from 'react'

import styles from './BenefitsSection.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import BenefitItem from '../benefitItem/BenefitItem'

import wave from '@/img/illustrations/benefits/wave.png'
import stars from '@/img/illustrations/benefits/stars.png'
import face from '@/img/illustrations/benefits/face.png'
import faces from '@/img/illustrations/benefits/faces.png'
import fire from '@/img/illustrations/benefits/fire.png'
import star from '@/img/illustrations/benefits/Star.png'
import Link from 'next/link'
import ActionBtn from '../UI/buttons/ActionBtn'

const BenefitsSection: FC = () => {
	return (
		<section className={styles.benefits}>
			<div className='container'>
				<div className={styles.benefits__intro}>
					<SectionsIntro title='Membership benefits' text='Become our sponsor and get all benefits' />
				</div>
				<div className={styles.benefits__list}>
					<BenefitItem img={wave.src} title='Topic by Request' text='Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.' />
					<BenefitItem img={stars.src} title='Exclusive Content' text='Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.' />
					<BenefitItem img={face.src} title='Join the Community' text='Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.' />
					<BenefitItem img={faces.src} title='Livestreaming Access' text='Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.' />
					<BenefitItem img={fire.src} title='Exclusive Episodes & Merch' text='Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.' />
					<BenefitItem img={star.src} title='And much more!' text='Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.' />
				</div>
				<div className={styles.benefits__link}>
					<Link href={'#becomeSponsor'}>
						<ActionBtn mode='filled' text='SEE PRICING' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default BenefitsSection
