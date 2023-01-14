export interface IUser {
	_id: string
	email: string
	password: string
	isAdmin?: boolean
	createdAt?: string
}

export interface IUserContact {
	id: number
	createdAt: Date
	updatedAt: Date
	email: string
	password: string
	name: string
	avatarPath: string
	address: string
	contactId: number
}

export interface IUserProfile {
	contacts: IUserContact[]
	email: string
	id: number
	name: string
	avatarPath: string
	address: string
}

