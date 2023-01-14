export interface IUser {
	_id: string
	email: string
	password: string
	isAdmin?: boolean
	createdAt?: string
}

export interface IUserContact {
	id: number
	email: string
	name: string
	avatarPath?: string
	address?: string
}