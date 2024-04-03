import React, { FC } from 'react'

import styles from './EpisodeFullCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ActionBtn from '../UI/buttons/ActionBtn'
import { subscribeLink } from '@/config/subscribeLink'
import { MarquesKeith, PorterSeverus } from '@/data/podcasts/podcastHost'

interface EpisodeFullCardProps {
	props: IPodcast
}

const hosts: IHost[] = [MarquesKeith, PorterSeverus]

const EpisodeFullCard: FC<EpisodeFullCardProps> = ({ props: episode }) => (
	<section className={styles.episodeFullCard}>
		<div className='container'>
			<div className={styles.episodeFullCard__info}>
				<Image alt={episode.title} src={episode.img} width={472} height={472} className={styles.info__episodeImg} />
				<div className={styles.info__descr}>
					<span className={styles.descr__num}>Episode {episode.id}</span>
					<h1 className={styles.descr__title}>{episode.title}</h1>
					<p className={styles.descr__text}>{episode.text}</p>
					<div className={styles.descr__host}>
						<div className={styles.host__item}>
							{hosts.map(host => (
								<div className={styles.item__host} key={host.id}>
									<Image src={host.img!} alt={host.name} />
									<span className={styles.host__name}>{host.name}</span>
								</div>
							))}
						</div>
						<span className={styles.host__date}>{episode.date}</span>
					</div>
					<div className={styles.info__actions}>
						<Link href={subscribeLink.url} target='_blank'>
							<ActionBtn mode='filled' text='SUBSCRIBE' />
						</Link>
						<Link href={episode.link} target='_blank'>
							<ActionBtn mode='outlined' text='LISTEN NOW (46 min)' />
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.episodeFullCard__tags}>
				Tags:
				<div className={styles.tags__items}>
					{episode.categories.map(category => (
						<span className={styles.items__item} key={category.id}>
							{category.category}
						</span>
					))}
				</div>
			</div>
		</div>
	</section>
)

export default EpisodeFullCard
