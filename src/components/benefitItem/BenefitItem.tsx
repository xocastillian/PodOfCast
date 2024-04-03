import React, { FC } from 'react'

import styles from './BenefitItem.module.scss'
import Image from 'next/image'

interface BenefitItemProps {
	img: string
	title: string
	text: string
}

const BenefitItem: FC<BenefitItemProps> = ({ img, text, title }) => {
	return (
		<div className={styles.item}>
			<img src={img} alt='' />
			<h3 className={styles.item__title}>{title}</h3>
			<p className={styles.item__text}>{text}</p>
		</div>
	)
}

export default BenefitItem
