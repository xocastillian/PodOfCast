import React, { FC } from 'react'

import styles from './OurSponsorItem.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface OurSponsorItemProps {
	props: IPartner
}

const OurSponsorItem: FC<OurSponsorItemProps> = ({ props }) => {
	return (
		<Link href={props.link} target='_blank'>
			<div className={styles.ourSponsorItem}>
				<div className={styles.ourSponsorItem__img}>
					<Image src={props.img} alt='' />
				</div>
				<p className={styles.ourSponsor__text}>{props.text}</p>
			</div>
		</Link>
	)
}

export default OurSponsorItem
