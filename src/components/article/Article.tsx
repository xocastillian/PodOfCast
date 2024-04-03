import React, { FC } from 'react'

import styles from './Article.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleProps {
	props: IAtricle
}

const Article: FC<ArticleProps> = ({ props }) => {
	return (
		<Link href={props.link}>
			<article className={styles.atricle}>
				<div className={styles.article__img}>
					<Image src={props.img} alt='' width={538} height={320} />
				</div>
				<div className={styles.atricle__descr}>
					<span className={styles.descr__mainCategory}>{props.mainCategory.category}</span>
					<h4 className={styles.descr__title}>{props.title}</h4>
					<p className={styles.descr__text}>{props.text}</p>
				</div>
				<div className={styles.atricle__categories}>
					<div className={styles.categories__list}>
						{props.categories.map(category => (
							<span className={styles.list__item} key={category.id}>
								{category.category}
							</span>
						))}
					</div>
					<span className={styles.date}>{props.date}</span>
				</div>
			</article>
		</Link>
	)
}

export default Article
