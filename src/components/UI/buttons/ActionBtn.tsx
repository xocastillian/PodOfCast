import React, { FC } from 'react'

import styles from './ActionBtn.module.scss'

interface ActionBtnProps {
	mode: 'filled' | 'outlined'
	text: string
}

const ActionBtn: FC<ActionBtnProps> = ({ mode, text }) => {
	return <div className={mode === 'outlined' ? styles.actionBtnOutlined : styles.actionBtnFilled}>{text}</div>
}

export default ActionBtn
