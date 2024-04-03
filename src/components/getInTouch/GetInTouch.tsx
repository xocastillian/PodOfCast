import React, { FC } from 'react'

import styles from './GetInTouch.module.scss'
import SectionsIntro from '../sectionsIntro/SectionsIntro'
import GetInTouchForm from '../getInTouchForm/GetInTouchForm'

const GetInTouch: FC = () => {
	return (
		<section className={styles.getInTouch}>
			<div className='container'>
				<div className={styles.getInTouch__intro}>
					<SectionsIntro title='Get in touch' text='Send your message to us' />
				</div>
				<div className={styles.getInTouch__form}>
					<GetInTouchForm />
				</div>
			</div>
		</section>
	)
}

export default GetInTouch
