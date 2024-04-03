import React, { FC } from 'react'

import styles from './SectionsIntro.module.scss'

interface SectionsIntroProps {
	title: string
	text?: string
}

const SectionsIntro: FC<SectionsIntroProps> = ({ title, text }) => {
	return (
		<div className={styles.intro}>
			<h1 className={styles.intro__title}>{title}</h1>
			<p className={styles.intro__text}>{text}</p>
		</div>
	)
}

export default SectionsIntro
