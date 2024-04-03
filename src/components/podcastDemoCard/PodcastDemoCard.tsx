import React, { FC } from 'react'

import styles from './PodcastDemoCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface PodcastDemoCardProps {
	props: IPodcast
}

const PodcastDemoCard: FC<PodcastDemoCardProps> = ({ props }) => {
	return (
		<div className={styles.card}>
			<Link href={props.link} target='_blank' className={styles.card}>
				<Image src={props.img} alt='' width={373} height={373} />
			</Link>
		</div>
	)
}

export default PodcastDemoCard
