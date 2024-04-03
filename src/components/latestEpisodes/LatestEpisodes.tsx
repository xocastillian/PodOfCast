import React, { FC } from 'react'

import styles from './LatestEpisodes.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import { podcasts } from '@/data/podcasts/podcasts'
import EpisodeCard from '../episodeCard/EpisodeCard'

const LatestEpisodes: FC = () => {
	return (
		<section className={styles.latestEpisodes}>
			<div className='container'>
				<div className={styles.latestEpisodes__intro}>
					<SectionsIntro title='Latest Episode' />
				</div>
				<div className={styles.latestEpisodes__list}>
					{podcasts.map(podcast => (
						<EpisodeCard props={podcast} key={podcast.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LatestEpisodes
