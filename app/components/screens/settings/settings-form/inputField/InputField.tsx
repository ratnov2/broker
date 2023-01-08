import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

import styles from '../settings-form.module.scss'
import { ISettings } from '../settings.interface'

interface IInputField {
	register: UseFormRegister<ISettings>
	errors?: any
	title: string
	fieldId:
		| 'notificationOn'
		| 'language'
		| 'useFaceID'
		| 'lightMode'
		| 'name'
		| 'email'
		| 'pin'
		| 'password'
		| 'address'
		| 'options'
		| 'avatarPath'
		| `options.${string}`
	errorMsg?: string
	type?: 'password' | 'email' | 'text'
	placeholder: string
}

const InputField: FC<IInputField> = ({
	register,
	errors,
	title,
	fieldId,
	errorMsg,
	type,
	placeholder
}) => {
	return (
		<div className={styles.accountField}>
			<label className={styles.fieldTitle}>{title}</label>
			<input
				{...register(`${fieldId}`, { required: `${errorMsg}` })}
				className={styles.settingsInput}
				type={type}
				placeholder={placeholder}
			/>
			{errors && <p>{errors[`${fieldId}`]?.message}</p>}
		</div>
	)
}

export default InputField
