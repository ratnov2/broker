import { SubmitHandler } from 'react-hook-form'

export interface ISettingsForm {
	onSubmit: SubmitHandler<ISettings>
}

export interface ISettings {
	notificationOn: boolean
	language: string
	useFaceID: boolean
	lightMode: boolean
	name: string
	phoneNumber: string
	pin: number
	password: string
	address: string
}
