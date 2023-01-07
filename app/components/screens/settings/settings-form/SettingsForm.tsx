import packageJson from '../../../../../package.json'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Select from '@/ui/select/Select'
import Switch from '@/ui/switch/Switch'

import styles from './SettingsForm.module.scss'
import { SettingsInputs } from './settings.data'
import { ISettings, ISettingsForm } from './settings.interface'

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

const SettingsForm: FC<ISettingsForm> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors = undefined }
	} = useForm<ISettings>({
		defaultValues: SettingsInputs
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
				<div
					id='left'
					className='flex mt-10 w-1/4 flex-col border-r-[1px] border-gray'
				>
					<div className='flex w-full'>
						<div className='flex flex-col space-y-2 col-span-1'>
							<label className='text-gray font-thin'>Notification</label>
							<Switch
								key={'xl'}
								dimension={'xl'}
								{...register('notificationOn')}
							/>
						</div>
					</div>
					<div className='flex w-full mt-20'>
						<div className='flex flex-col space-y-2 col-span-1'>
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
					</div>
					<div className='flex w-full mt-16 pt-2'>
						<div className='flex flex-col space-y-2 col-span-1'>
							<label className='text-gray font-thin'>Face ID Login</label>
							<Switch key={'xl'} dimension={'xl'} {...register('useFaceID')} />
						</div>
					</div>
					<div className='flex w-full  mt-16 pt-2'>
						<div className='flex flex-col space-y-2 col-span-1'>
							<label className='text-gray font-thin'>
								Ligth Mode / Dark Mode
							</label>
							<Switch key={'xl'} dimension={'xl'} {...register('lightMode')} />
						</div>
					</div>
				</div>
				<div
					id='right'
					className='grid grid-cols-2 gap-8 bg-white p-10 rounded-3xl w-3/4'
				>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>ID</label>
						<input
							{...register('name')}
							className={styles['settings-input']}
							type={'text'}
							placeholder={'Name'}
						/>
						{errors && <p>Name is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Phone</label>
						<input
							{...register('phoneNumber')}
							className={styles['settings-input']}
							type={'tel'}
							placeholder={'Phone number'}
						/>
						{errors && <p>Phone is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Pin</label>
						<input
							{...register('pin')}
							className={styles['settings-input']}
							type={'password'}
							placeholder={'Phone number'}
						/>
						{errors && <p>Pin is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Password</label>
						<input
							{...register('password')}
							className={styles['settings-input']}
							type={'password'}
							placeholder={'Phone number'}
						/>
						{errors && <p>Password is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Address</label>
						<textarea
							{...register('address')}
							className={'rounded-3xl border border-gray px-4 py-3'}
							placeholder={'Address'}
							rows={5}
						/>
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>App Version</label>
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
