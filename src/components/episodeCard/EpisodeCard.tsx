'use client'

import React, { FC } from 'react'

import styles from './EpisodeCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { MarquesKeith, PorterSeverus } from '@/data/podcasts/podcastHost'

interface EpisodeCardProps {
	props: IPodcast
}

const hosts: IHost[] = [MarquesKeith, PorterSeverus]

const EpisodeCard: FC<EpisodeCardProps> = ({ props }) => {
	return (
		<div className={styles.episode}>
			<Link href={props.link} target='_blank'>
				<div className={styles.episode__info}>
					<Image src={props.img} alt='' height={166} width={166} />
					<div className={styles.info__descr}>
						<div className={styles.descr__intro}>
							<span className={styles.intro__epsNum}>Eps. {props.id}</span>
							<h4 className={styles.intro__title}>{props.title}</h4>
						</div>
						<p className={styles.info__text}>{props.descr}</p>
					</div>
				</div>
				<div className={styles.episode__addInfo}>
					<div className={styles.addInfo__categories}>
						{props.categories.map(category => (
							<div className={styles.categories__item} key={category.id}>
								{category.category}
							</div>
						))}
					</div>
					<div className={styles.addInfo__hosts}>
						Hosted by:
						<div className={styles.hosts__img}>
							{hosts.map(host => (
								<Image src={host.img!} alt='' height={26} width={26} key={host.id} />
							))}
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default EpisodeCard
