import React, { FC } from 'react'

import styles from './Subscription.module.scss'
import ActionBtn from '../UI/buttons/ActionBtn'
import Link from 'next/link'

interface SubscriptionProps {
	props: ISubscription
	popular?: boolean
}

const Subscription: FC<SubscriptionProps> = ({ props, popular }) => {
	return (
		<div className={`${styles.subscription} ${popular ? styles.popular : ''}`}>
			<div className={styles.subscription__info}>
				<div className={styles.info}>
					<h4 className={styles.info__title}>{props.subscription}</h4>
					<p className={styles.info__text}>{props.description}</p>
				</div>
				<div className={styles.info__pricing}>
					<Link href={props.link} target='_blank'>
						<ActionBtn mode='filled' text='SUBSCRIBE' />
					</Link>
					<p className={styles.pricing__price}>
						<span className={styles.price}>{props.pricePerMonth}</span>
						<br />
						<span className={styles.period}>/month</span>
					</p>
				</div>
			</div>
			<div className={styles.subscription__includes}>
				<span className={styles.includes__title}>What’s included:</span>
				<ul className={styles.includes__list}>
					{props.availability.map((item, index) => (
						<li className={styles.list__item} key={index}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Subscription
