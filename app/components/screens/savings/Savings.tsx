import { FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import SavingsForm from '@/screens/savings/form/SavingsForm'
import { savingsData } from '@/screens/savings/savings.data'
import { ISavingsData } from '@/screens/savings/savings.interface'
import SavingsTable from '@/screens/savings/table/SavingsTable'

const Savings: FC = () => {
	let [data, setData] = useState(savingsData)
	const [state, setState] = useState(1)

	function onFormChange(newSavingsData: ISavingsData) {
		savingsData.push(newSavingsData)

		setState([...data, newSavingsData])

		console.log(data)
	}

	useEffect(() => {
		console.log(123)
	}, [data])

	return (
		<Layout title='Savings'>
			<div className='flex justify-left items-center mt-5 mb-5'>
				<h1 className='text-4xl font-bold'>Savings</h1>
			</div>
			<div className='flex justify-between h-screen'>
				<SavingsTable
					perPage={3}
					activePage={1}
					savingsData={data}
				></SavingsTable>
				<SavingsForm
					onFormChange={onFormChange}
					savingsData={savingsData}
					key={state}
				></SavingsForm>
			</div>
		</Layout>
	)
}

export default Savings
