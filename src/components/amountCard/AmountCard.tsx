import React, { FC } from 'react'

import styles from './AmountCard.module.scss'

interface AmountCardProps {
	amount: number
	users: string
}

const AmountCard: FC<AmountCardProps> = ({ amount, users }) => {
	return (
		<div className={styles.amountCard}>
			<span className={styles.amountCard__amount}>{amount}</span>
			<span className={styles.amountCard__whos}>{users}</span>
		</div>
	)
}

export default AmountCard
