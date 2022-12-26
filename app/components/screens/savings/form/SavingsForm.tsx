import { func } from 'prop-types'
import { FC, MouseEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import SavingsButton from '@/screens/savings/button/SavingsButton'
import styles from '@/screens/savings/form/SavingsForm.module.scss'
import SavingsInput from '@/screens/savings/input/SavingsInput'
import { savingsData } from '@/screens/savings/savings.data'
import { ISavingsData } from '@/screens/savings/savings.interface'
import { backgrounds } from '@/screens/savings/table/savingsTable.data'

interface ISavingForm {
	onFormChange: any
	savingData?: ISavingsData
}

const SavingsForm: FC<ISavingForm> = ({ onFormChange, savingData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ISavingsData>({ defaultValues: savingData, mode: 'onChange' })

	const onSubmit: SubmitHandler<ISavingsData> = data => {
		const id = Math.random() * 100000

		const updatedValue = {
			color: '#6160DC',
			backgroundColor: backgrounds[0],
			id: Math.floor(id)
		}

		const saving = Object.assign(data, updatedValue)

		onFormChange(saving)
		reset()
	}
	return (
		<div className='flex w-1/4 box-border'>
			<div className={styles.wrapper}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className=' w-full justify-center items-center '>
						<h2 className='font-bold'>New saving</h2>
					</div>

					<SavingsInput
						label={'Name'}
						name={'name'}
						placeholder={'Name'}
						type={'text'}
						register={register('name', {
							required: 'Name is required field',
							pattern: {
								value: /[a-z]{1,15}/,
								message: 'Please enter valid name'
							}
						})}
						errors={errors}
					/>

					<SavingsInput
						label={'Saving purpose'}
						name={'purpose'}
						placeholder={'1000'}
						type={'text'}
						register={register('purpose', {
							required: 'Purpose is required field',
							pattern: {
								value: /[0-9]{1,25}/,
								message: 'Please enter valid purpose. Purpose must be a number'
							}
						})}
						errors={errors}
					/>

					<SavingsInput
						label={'Saving target'}
						name={'target'}
						placeholder={'1000'}
						type={'text'}
						register={register('target', {
							required: 'Target is required field',
							pattern: {
								value: /[0-9]{1,25}/,
								message: 'Please enter valid target. Target must be a number'
							}
						})}
						errors={errors}
					/>
					<SavingsInput
						label={'First Top-Up'}
						name={'topUp'}
						placeholder={'1000'}
						type={'text'}
						register={register('topUp', {
							required: 'Top-Up is required field. Top-Up must be a number',
							pattern: {
								value: /[0-9]{1,25}/,
								message: 'Please enter valid top-up'
							}
						})}
						errors={errors}
					/>

					<button
						type='submit'
						className='inline-block px-6 py-2.5 bg-blue-600
						text-white font-medium text-xs leading-tight uppercase rounded-3xl
						shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
						focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
						transition duration-150 ease-in-out'
						style={{
							backgroundColor: '#6160dc',
							width: '100%',
							height: '50px'
						}}
					>
						Add
					</button>
				</form>
			</div>
		</div>
	)
}

export default SavingsForm
