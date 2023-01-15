import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

import Select from '@/ui/select/Select'
import Switch from '@/ui/switch/Switch'

import { ISettings } from '../settings.interface'

import styles from './LeftSideSettings.module.scss'

interface ILeftSideSettings {
	register: UseFormRegister<ISettings>
}

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

const LeftSideSettings: FC<ILeftSideSettings> = ({ register }) => {
	return (
		<div className={styles.leftContainer}>
			<div className='flex w-full flex-col space-y-2 col-span-1'>
				<label className='text-gray font-thin'>Notification</label>
				<Switch key={'xl'} dimension={'xl'} {...register('notificationOn')} />
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
			<div className={styles.switchContainer}>
				<label>Face ID Login</label>
				<Switch key={'xl'} dimension={'xl'} {...register('useFaceID')} />
			</div>
			<div className={styles.switchContainer}>
				<label>Ligth Mode / Dark Mode</label>
				<Switch key={'xl'} dimension={'xl'} {...register('lightMode')} />
			</div>
		</div>
	)
}

export default LeftSideSettings
