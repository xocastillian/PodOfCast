import React, { FC } from 'react'

import styles from './Quote.module.scss'
import Image from 'next/image'

import marks from '@/img/icons/“.svg'


interface QuoteProps {
	text: string
	autor: string
	autorAvatar: string
	autorWorkplace?: string
	autorRole?: string
}

const Quote: FC<QuoteProps> = ({ text, autor, autorAvatar, autorRole, autorWorkplace }) => {
	return (
		<blockquote className={styles.quote}>
			<Image src={marks} alt='' />
			<p className={styles.quote__text}>{text}</p>
			<div className={styles.quote__autor}>
				<Image src={autorAvatar} height={48} width={48} alt='' />
				<span className={styles.autor__name}>{autor},</span>
				{autorWorkplace && <Image src={autorWorkplace} alt='' height={16} width={16} />}
				{autorRole && <span className={styles.autor__autorRole}>{autorRole}</span>}
			</div>
		</blockquote>
	)
}

export default Quote
