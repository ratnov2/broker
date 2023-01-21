import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/ui/button/Button'

import styles from './SettingsForm.module.scss'
import LeftSideSettings from './left-side-settings/LeftSideSettings'
import RightSideSettings from './right-side-settings/RightSideSettings'
import { ISettings, ISettingsForm } from './settings.interface'
import { UserService } from '@/services/user/user.service'

const SettingsForm: FC<ISettingsForm> = ({ onSubmit, data }) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue
	} = useForm<ISettings>({
		defaultValues: data
	})

	useQuery(['useUserProfile'], UserService.getProfile, {
		onSuccess: data => {
			setValue('email', data.email)
			setValue('name', data.name)
			setValue('address', data.address)
			setValue('avatarPath', data.avatarPath)
		}
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
			<div className='flex flex-row'>
				<div className='w-1/4 text-xl font-bold text-black '>Preference</div>
				<div className='w-3/4 pl-10 text-xl font-bold text-black '>Account</div>
			</div>
			<div className='flex'>
				<LeftSideSettings register={register} />
				<RightSideSettings
					register={register}
					errors={errors}
					control={control}
				/>
			</div>
			<div className='flex justify-end'>
				<Button
					variant='primary'
					size={'lg'}
					type='submit'
					className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[20%]'
				>
					Save Settings
				</Button>
			</div>
			{/* <div className='flex justify-end'>
				<input
					type='submit'
					value='Save Settings'
					className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[20%]'
				/>
			</div> */}
		</form>
	)
}

export default SettingsForm
