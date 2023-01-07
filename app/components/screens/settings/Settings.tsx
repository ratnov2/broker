import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'

//import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import Layout from '@/layout/Layout'

import { ISettingInput } from '@/shared/types/users.types'

import { useUserProfile } from '@/hooks/useUserProfile'

import SettingsForm from './settings-form/SettingsForm'
import { ISettings } from './settings-form/settings.interface'
import { UserService } from '@/services/users/users.service'

const Transactions: FC = () => {
	const onSubmit = async (data: ISettings) => {
		console.log(123)
		console.log(data)
		console.log(321)
		const updateData: ISettingInput = {
			name: data.name,
			email: data.email,
			address: data.address
		}
		await UserService.updateUser(updateData)
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
