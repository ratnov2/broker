import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from './SettingsForm.module.scss'
import { SettingsInputs } from './settings.data'
import { ISettings, ISettingsForm } from './settings.interface'

const SettingsForm: FC<ISettingsForm> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ISettings>({
		defaultValues: SettingsInputs
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full gap-8 bg-white p-10 rounded-3xl '
		>
			<div className='flex'>
				<div id='left' className='flex w-1/4'></div>
				<div id='right' className='grid grid-cols-2 gap-8 bg-white p-10 rounded-3xl w-3/4'>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>ID</label>
						<input
							{...register('name')}
							className={styles['transaction-input']}
							type={'text'}
							placeholder={'Name'}
						/>
						{errors && <p>Name is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Phone</label>
						<input
							{...register('phoneNumber')}
							className={styles['transaction-input']}
							type={'tel'}
							placeholder={'Phone number'}
						/>
						{errors && <p>Phone is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Pin</label>
						<input
							{...register('pin')}
							className={styles['transaction-input']}
							type={'password'}
							placeholder={'Phone number'}
						/>
						{errors && <p>Pin is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Password</label>
						<input
							{...register('password')}
							className={styles['transaction-input']}
							type={'password'}
							placeholder={'Phone number'}
						/>
						{errors && <p>Password is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Address</label>
						<input
							{...register('address')}
							className={styles['transaction-input']}
							type={'textarea'}
							placeholder={'Address'}
						/>
						{errors && <p>Address is required</p>}
					</div>
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>App Version</label>
						<p>V2.123</p>
					</div>
				</div>
			</div>
			<div className='flex justify-end gap-2 col-span-2'>
				<div className='flex items-start space-x-2 max-w-[30%]'></div>
				<input
					type='submit'
					value='Save Settings'
					className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[40%]'
				/>
			</div>
		</form>
	)
}

export default SettingsForm
