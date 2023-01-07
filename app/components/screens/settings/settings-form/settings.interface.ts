import { SubmitHandler } from 'react-hook-form'

export interface ISettingsForm {
	onSubmit: SubmitHandler<ISettings>
	data: ISettings
}

export interface ISettings {
	notificationOn: boolean
	language: string
	useFaceID: boolean
	lightMode: boolean
	name: string
	email: string
	pin: number
	password: string
	address: string
	options?: any
}
