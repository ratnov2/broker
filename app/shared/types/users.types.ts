export interface IUser {
	id: string
	email: string
	name: string
	password: string
	isAdmin?: boolean
	createdAt?: string
	avatarPath?: string
	address?: string
	contacts?: IUserContact[]
}

export interface IUserContact {
	id: string
	createdAt: string
	updatedAt: string
	email: string
	name: string
	avatarPath?: string
	address?: string
}
