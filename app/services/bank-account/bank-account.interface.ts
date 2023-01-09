export interface IBankCard {
	id: number
	createdAt: string
	updatedAt: string
	number: string
	expireDate: string
	cvc: number
	paymentSystem: string
	type: string
	bankName: string
	bankAccountId: number
}

export interface IBankUser {
	email: string
	id: number
	name: string
	avatarPath: string
	address: string
}

export interface IBankAccount {
	id: number
	createdAt: string
	updatedAt: string
	number: string
	balance: number
	userId: number
	saving?: any
	card: IBankCard
	user: IBankUser
}
