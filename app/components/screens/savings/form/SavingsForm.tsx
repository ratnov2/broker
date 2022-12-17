import { func } from 'prop-types'
import { FC, useState } from 'react'

import SavingsButton from '@/screens/savings/button/SavingsButton'
import styles from '@/screens/savings/form/SavingsForm.module.scss'
import SavingsInput from '@/screens/savings/input/SavingsInput'
import { savingsData } from '@/screens/savings/savings.data'
import { ISavingsData } from '@/screens/savings/savings.interface'
import { backgrounds } from '@/screens/savings/table/savingsTable.data'

interface ISavingForm {
	onFormChange: any
	savingsData: ISavingsData[]
}

const SavingsForm: FC<ISavingForm> = ({ onFormChange, savingsData }) => {
	const [newSaving, setNewSaving] = useState<ISavingsData>({
		id: 1,
		name: '',
		amount: 123,
		topUp: 123,
		purpose: 123,
		color: '',
		backgroundColor: ''
	})

	function updateNewSaving(event: any) {
		const inputName = event.target.dataset.name
		let updatedValue = {}

		if (inputName === 'Name') {
			updatedValue = { name: event.target.value }
		} else if (inputName === 'Saving Target') {
			updatedValue = { amount: parseInt(event.target.value) }
		} else if (inputName === 'Saving Purpose') {
			updatedValue = { purpose: parseInt(event.target.value) }
		} else if (inputName === 'First Top-Up') {
			updatedValue = { topUp: parseInt(event.target.value) }
		}

		setNewSaving(newSaving => ({
			...newSaving,
			...updatedValue
		}))
	}

	function addNewSaving(event: any) {
		const countSaving = savingsData.length

		const id = countSaving + 1 + Math.random() * 1000

		const updatedValue = {
			color: '#6160DC',
			backgroundColor: backgrounds[0],
			id: Math.floor(id)
		}

		setNewSaving(newSaving => {
			return Object.assign(newSaving, updatedValue)
		})
		updateNewSaving(event)
		onFormChange(newSaving)
	}

	return (
		<div className='flex w-1/4 box-border'>
			<div className={styles.wrapper}>
				<form className={styles.form}>
					<div className=' w-full justify-center items-center '>
						<h2 className='font-bold'>New saving</h2>
					</div>
					<SavingsInput
						label={'Name'}
						placeholder={'Name'}
						type={'text'}
						value={''}
						onInputChange={updateNewSaving}
					></SavingsInput>
					<SavingsInput
						label={'Saving Target'}
						placeholder={'1000'}
						type={'text'}
						value={''}
						onInputChange={updateNewSaving}
					></SavingsInput>
					<SavingsInput
						label={'Saving Purpose'}
						placeholder={'1000'}
						type={'text'}
						value={''}
						onInputChange={updateNewSaving}
					></SavingsInput>
					<SavingsInput
						label={'First Top-Up'}
						placeholder={'1000'}
						type={'text'}
						value={''}
						onInputChange={updateNewSaving}
					></SavingsInput>

					<SavingsButton
						name='formButton'
						onButtonClick={addNewSaving}
						color={'#6160dc'}
						text={'Add'}
						height={'50px'}
						width={'100%'}
					></SavingsButton>
				</form>
			</div>
		</div>
	)
}

export default SavingsForm
