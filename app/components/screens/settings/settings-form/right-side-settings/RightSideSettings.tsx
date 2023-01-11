import { FC } from 'react'
import {
	Control,
	Controller,
	FieldErrorsImpl,
	UseFormRegister
} from 'react-hook-form'

import InputField from '@/ui/inputField/InputField'
import UploadField from '@/ui/uploadField/UploadField'

import packageJson from '../../../../../../package.json'
import { ISettings } from '../settings.interface'

import styles from './RightSideSettings.module.scss'

interface IRightSideSettings {
	register: UseFormRegister<ISettings>
	errors: Partial<FieldErrorsImpl<ISettings>>
	control: Control<ISettings, any>
}

const RightSideSettings: FC<IRightSideSettings> = ({
	register,
	errors,
	control
}) => {
	return (
		<div className={styles.rightContainer}>
			<InputField
				register={register}
				errors={errors}
				title={'Name'}
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
				title={'Password (not realized)'}
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
	)
}

export default RightSideSettings
