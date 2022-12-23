import { any } from 'prop-types'
import { FC, MouseEventHandler, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import SavingsForm from '@/screens/savings/form/SavingsForm'
import { savingsData } from '@/screens/savings/savings.data'
import { ISavingsData } from '@/screens/savings/savings.interface'
import SavingsTable from '@/screens/savings/table/SavingsTable'

interface ISavingForm {
	saving?: ISavingsData
}

const Savings: FC<ISavingForm> = ({ saving }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [data, setData] = useState(savingsData)
	const [currentFilterOption, serCurrentFilterOption] = useState('newest')

	function onFormChange(newSavingsData: ISavingsData) {
		//savingsData.push(newSavingsData)
		setData(prev => [...prev, newSavingsData])
	}

	function deleteItem(event: any, index: number) {
		setData(data.filter((v, i) => i !== index))
	}

	const onChange = (newValue: any) => {
		serCurrentFilterOption(newValue.value)
	}

	return (
		<Layout title='Savings'>
			<div className='flex justify-left items-center mt-5 mb-5'>
				<h1 className='text-4xl font-bold'>Savings</h1>
			</div>
			<div className='flex justify-between h-screen relative'>
				<SavingsTable
					deleteItem={deleteItem}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					savingsData={data}
				></SavingsTable>
				<SavingsForm
					onFormChange={onFormChange}
					savingData={saving}
				></SavingsForm>
			</div>
		</Layout>
	)
}

export default Savings
