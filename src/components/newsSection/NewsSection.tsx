import React, { FC } from 'react'

import styles from './NewsSection.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import ActionBtn from '../UI/buttons/ActionBtn'
import Link from 'next/link'
import Article from '../article/Article'
import { setupYourOwnPodcast, doodleArtwork, motherNatureTakingOver, howtoBeProductive } from '../../data/articles/articles'

const NewsSection: FC = () => {
	const articles: IAtricle[] = [setupYourOwnPodcast, doodleArtwork, motherNatureTakingOver, howtoBeProductive]
	const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	const displayedArticles = sortedArticles.slice(0, 2)

	return (
		<section className={styles.news}>
			<div className='container'>
				<div className={styles.news__intro}>
					<SectionsIntro title='Article and News' text='News, tips, tricks and more' />
				</div>
				<div className={styles.news__list}>
					{displayedArticles.map(article => (
						<div key={article.id} className={styles.news__item}>
							<Article props={article} />
						</div>
					))}
				</div>
				<div className={styles.news__link}>
					<Link href={'/blog'}>
						<ActionBtn mode='filled' text='BROWSE ALL' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default NewsSection
