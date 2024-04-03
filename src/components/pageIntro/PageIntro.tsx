
import React, { FC } from 'react'

import styles from './PageIntro.module.scss'

interface PageIntroProps {
	title: string
	text: string
}

const PageIntro: FC<PageIntroProps> = ({ title, text }) => {
	return (
		<div className={styles.pageIntro}>
			<h1 className={styles.pageIntro__title}>
				{title}
			</h1>
			<p className={styles.pageIntro__text}>{text}</p>
		</div>
	)
}

export default PageIntro
