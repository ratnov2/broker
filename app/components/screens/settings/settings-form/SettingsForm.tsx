import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Select from '@/ui/select/Select'
import Switch from '@/ui/switch/Switch'

import packageJson from '../../../../../package.json'

import InputField from './inputField/InputField'
import styles from './settings-form.module.scss'
import { ISettings, ISettingsForm } from './settings.interface'
import UploadField from './uploadField/UploadField'
import { UserService } from '@/services/user/user.service'

const selectOptions = [
	{
		label: 'English',
		value: 'en'
	},
	{
		label: 'Українська',
		value: 'ua'
	},
	{
		label: 'Русский',
		value: 'ru'
	}
]

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
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full gap-8 bg-white p-10 rounded-3xl '
		>
			<div className='flex flex-row'>
				<div className='w-1/4 text-xl font-bold text-black '>Preference</div>
				<div className='w-3/4 pl-10 text-xl font-bold text-black '>Account</div>
			</div>
			<div className='flex'>
				<div className={styles.leftContainer}>
					<div className='flex w-full flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Notification</label>
						<Switch
							key={'xl'}
							dimension={'xl'}
							{...register('notificationOn')}
						/>
					</div>
					<div className='flex w-full flex-col space-y-2 col-span-1 mt-20 '>
						<label className='text-gray font-thin'>Language</label>
						<Select
							options={selectOptions}
							variant='secondary'
							className='w-[200px]'
							size={'xl'}
							color={'gray'}
							defaultValue={selectOptions[0]}
						/>
					</div>
					<div className='flex w-full flex-col space-y-2 col-span-1 mt-16 pt-2 '>
						<label className='text-gray font-thin'>Face ID Login</label>
						<Switch key={'xl'} dimension={'xl'} {...register('useFaceID')} />
					</div>
					<div className='flex w-full flex-col space-y-2 col-span-1  mt-16 pt-2 '>
						<label className='text-gray font-thin'>
							Ligth Mode / Dark Mode
						</label>
						<Switch key={'xl'} dimension={'xl'} {...register('lightMode')} />
					</div>
				</div>
				<div className={styles.rightContainer}>
					<InputField
						register={register}
						errors={errors}
						title={'ID'}
						fieldId={'name'}
						errorMsg={'Name is required'}
						placeholder={'Name'}
						type={'text'}
					/>
					<InputField
						register={register}
						errors={errors}
						title={'Email'}
						fieldId={'email'}
						errorMsg={'Email is required'}
						placeholder={'Email'}
						type={'email'}
					/>
					<Controller
						name='avatarPath'
						defaultValue=''
						control={control}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								placeholder='Avatar'
								error={error}
								folder='avatar'
								image={value}
								onChange={onChange}
							/>
						)}
						rules={{
							required: 'Avatar is required!'
						}}
					/>
					<InputField
						register={register}
						errors={errors}
						title={'Password'}
						fieldId={'password'}
						errorMsg={'Password is required'}
						placeholder={'Password'}
						type={'password'}
					/>
					<div className={styles.accountField}>
						<label className={styles.fieldTitle}>Address</label>
						<textarea
							{...register('address')}
							className={'rounded-3xl border border-gray px-4 py-3 font-bold'}
							placeholder={'Address'}
							rows={5}
						/>
					</div>
					<div className={styles.accountField}>
						<label className={styles.fieldTitle}>App Version</label>
						<p className='font-bold'>V{packageJson.version}</p>
					</div>
				</div>
			</div>
			<div className='flex justify-end'>
				<input
					type='submit'
					value='Save Settings'
					className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[20%]'
				/>
			</div>
		</form>
	)
}

export default SettingsForm
