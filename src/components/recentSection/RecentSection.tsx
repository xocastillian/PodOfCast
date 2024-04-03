import React, { FC } from 'react'

import styles from './RecentSection.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import { podcasts } from '@/data/podcasts/podcasts'
import EpisodeCard from '../episodeCard/EpisodeCard'
import Link from 'next/link'
import ActionBtn from '../UI/buttons/ActionBtn'

const RecentSection: FC = () => {
	return (
		<section id='recent_episodes' className={styles.recent}>
			<div className='container'>
				<div className={styles.recent__intro}>
					<SectionsIntro title='Recent Episodes' text='Available on your favorite platform' />
				</div>
				<div className={styles.recent__list}>
					{podcasts.map(podcast => (
						<EpisodeCard props={podcast} key={podcast.id} />
					))}
				</div>
				<div className={styles.recent__all}>
					<Link href={'/episodes'}>
						<ActionBtn mode='filled' text='BROWSE ALL EPISODES' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default RecentSection
