import React, { FC } from 'react'

import styles from './BlogHero.module.scss'

const BlogHero: FC = () => {
	return (
		<section className={styles.blogHero}>
			<div className='container'>
				<h1 className={styles.blogHero__title}>
					Article <br /> and <span className={styles.title__accent}>News</span>
				</h1>
				<p className={styles.blogHero__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
			</div>
		</section>
	)
}

export default BlogHero
