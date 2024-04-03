import React, { FC } from 'react'

import styles from './HostCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface HostCardProps {
	img: string
	text: string
	props: IHost
}

const HostCard: FC<HostCardProps> = ({ props, img, text }) => {
	return (
		<div className={styles.hostCard}>
			<div className={styles.hostcard__img}>
				<Image className={styles.img__item} src={img} alt='' width={259} height={488} />
			</div>
			<div className={styles.hostcard__descr}>
				<div className={styles.descr__info}>
					<span className={styles.info__name}>{props.name}</span>
					<p className={styles.info__text}>{text}</p>
					<div className={styles.info__socials}>
						follow me:
						<div className={styles.socials__links}>
							<Link className={styles.links__item} href={props.links.instLink!.link} target='_blank'>
								<Image alt='' src={props.links.instLink?.img!} height={20} width={20} />
							</Link>
							<Link className={styles.links__item} href={props.links.ttLink!.link} target='_blank'>
								<Image alt='' src={props.links.ttLink?.img!} height={20} width={20} />
							</Link>
							<Link className={styles.links__item} href={props.links.twLink!.link} target='_blank'>
								<Image alt='' src={props.links.twLink?.img!} height={20} width={20} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HostCard
