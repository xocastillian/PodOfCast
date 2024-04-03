import React, { FC } from 'react'

import styles from './InspiredItem.module.scss'
import Image from 'next/image'

interface InspiredItemProps {
	img: string
	text: string
}

const InspiredItem: FC<InspiredItemProps> = ({ img, text }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__img}>
				<Image src={img} alt='' />
			</div>
			<p className={styles.item__text}>{text}</p>
		</div>
	)
}

export default InspiredItem
