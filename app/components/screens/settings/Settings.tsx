import { FC } from 'react'

//import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import Layout from '@/layout/Layout'

import SettingsForm from './settings-form/SettingsForm'
import { ISettings } from './settings-form/settings.interface'

const Transactions: FC = () => {
	const onSubmit = (data: ISettings) => {
		console.log(123)
		console.log(data)
		console.log(321)
	}
	return (
		<Layout title='Settings'>
			<div className='mt-10 sm:mt-0 w-full h-screen'>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold text-black mb-4'>Settings</h1>
					<div className='flex space-x-10'>
						<div className='w-full'>
							<SettingsForm onSubmit={onSubmit} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Transactions
