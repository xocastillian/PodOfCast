'use client'

import React, { FC } from 'react'

import styles from './GetInTouchForm.module.scss'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import ActionBtn from '../UI/buttons/ActionBtn'

interface Form {
	name: string
	email: string
	phone: string
	subject: string
	message: string
}

const GetInTouchForm: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Form>()

	const submit: SubmitHandler<Form> = data => {
		alert('Success')
		reset()
	}

	const error: SubmitErrorHandler<Form> = data => {
		// alert('Error')
	}

	const className: string = `${styles.inputs__input} ${errors.name ? styles.error : ''}`

	return (
		<form action='#' className={styles.getInTouchForm} onSubmit={handleSubmit(submit, error)}>
			<div className={styles.getInTouch__inputs}>
				<div className={styles.inputs__block}>
					<label htmlFor='name' className={styles.inputs__label}>
						Full name <span style={{ color: '#cd4631' }}>*</span>
					</label>
					<input id='name' type='text' {...register('name', { required: true })} className={className} />
				</div>

				<div className={styles.inputs__block}>
					<label htmlFor='email' className={styles.inputs__label}>
						Email <span style={{ color: '#cd4631' }}>*</span>
					</label>
					<input id='email' type='email' {...register('email', { required: true })} className={className} />
				</div>

				<div className={styles.inputs__block}>
					<label htmlFor='phone' className={styles.inputs__label}>
						Phone <span style={{ color: '#cd4631' }}>*</span>
					</label>
					<input id='phone' type='tel' {...register('phone', { required: true })} className={className} />
				</div>

				<div className={styles.inputs__block}>
					<label htmlFor='subject' className={styles.inputs__label}>
						Subject <span style={{ color: '#cd4631' }}>*</span>
					</label>
					<input id='subject' type='text' {...register('subject', { required: true })} className={className} />
				</div>
			</div>
			<div className={styles.inputs__block}>
				<label htmlFor='message' className={styles.inputs__label}>
					Message
				</label>
				<textarea id='message' cols={30} rows={7} {...register('message', { required: false })} className={styles.inputs__textarea}></textarea>
			</div>
			<div className={styles.getInTouchForm__btn}>
				<button type='submit'>
					<ActionBtn mode='filled' text='SEND MESSAGE' />
				</button>
			</div>
		</form>
	)
}

export default GetInTouchForm
