import React, { FC } from 'react'

import styles from './Partners.module.scss'
import { partners } from '@/data/partners/partners'
import Link from 'next/link'
import Image from 'next/image'

const Partners: FC = () => {
	return (
		<div className={styles.partners}>
			<h2 className={styles.partners__title}>Supported by:</h2>
			<div className={styles.partners__list}>
				{partners.map(partner => (
					<Link href={partner.link} key={partner.id} target='_blank'>
						<Image src={partner.img} alt='' />
					</Link>
				))}
			</div>
		</div>
	)
}

export default Partners
