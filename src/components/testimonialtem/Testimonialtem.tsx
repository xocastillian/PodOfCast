import React, { FC } from 'react'

import styles from './Testimonialtem.module.scss'
import Image from 'next/image'

import marks from '@/img/icons/“.svg'

interface TestimonialtemProps {
	props: ITestimonial
}

const Testimonialtem: FC<TestimonialtemProps> = ({ props }) => {
	return (
		<div className={styles.item}>
			<Image src={marks} alt='' />
			<p className={styles.item__text}>{props.text}</p>
			<div className={styles.item__autor}>
				{props.autorAvatar && <Image src={props.autorAvatar} alt='' width={48} height={48} />}
				<span className={styles.autor__name}>{props.autor},</span>
				<div className={styles.autor__source}>
					<Image src={props.source.sourceLogo} alt='' width={16} height={16} />
					<span className={styles.source__name}>{props.source.source}</span>
				</div>
			</div>
		</div>
	)
}

export default Testimonialtem
