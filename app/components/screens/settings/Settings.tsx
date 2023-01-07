import { FC, useState } from 'react'

//import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import Layout from '@/layout/Layout'

import { useUserProfile } from '@/hooks/useUserProfile'

import SettingsForm from './settings-form/SettingsForm'
import { ISettings } from './settings-form/settings.interface'

const Transactions: FC = () => {
	const onSubmit = (data: ISettings) => {
		console.log(123)
		console.log(data)
		console.log(321)
	}

	const { data } = useUserProfile()

	const SettingsInputs: ISettings = {
		notificationOn: true,
		language: 'English',
		useFaceID: false,
		lightMode: true,
		name: data?.name || '',
		email: data?.email || '',
		pin: 1234,
		password: '123456',
		address: data?.address || ''
	}
	const [settingsData] = useState<ISettings>(SettingsInputs)

	return (
		<Layout title='Settings'>
			<div className='mt-10 sm:mt-0 w-full h-screen flex flex-col'>
				<h1 className='text-2xl font-bold text-black mb-4'>Settings</h1>
				<div className='flex space-x-10 w-full'>
					<SettingsForm onSubmit={onSubmit} data={settingsData} />
				</div>
			</div>
		</Layout>
	)
}
export default Transactions
