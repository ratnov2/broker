export interface IUserContacts {
	id: number
	createdAt: string
	updatedAt: string
	email: string
	password: string
	name: string
	avatarPath: string
	address: string
	contactId: number
}

export interface IUserProfile {
	contacts: IUserContacts[]
	email: string
	id: number
	name: string
	avatarPath: string
	address: string
}

export interface IUserContact {
	email: string
	id: number
	name: string
	avatarPath: string
	address: string
}
