import React, { FC } from 'react'

import styles from './LatestPosts.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import { doodleArtwork, howtoBeProductive, motherNatureTakingOver, setupYourOwnPodcast } from '@/data/articles/articles'
import Article from '../article/Article'

const articles: IAtricle[] = [setupYourOwnPodcast, doodleArtwork, motherNatureTakingOver, howtoBeProductive]

const LatestPosts: FC = () => {
	return (
		<section className={styles.latestPosts}>
			<div className='container'>
				<div className={styles.latestPosts__intro}>
					<SectionsIntro title='Latest Posts' />
				</div>
				<div className={styles.latestPosts__list}>
					{articles.map(article => (
						<Article props={article} key={article.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LatestPosts
