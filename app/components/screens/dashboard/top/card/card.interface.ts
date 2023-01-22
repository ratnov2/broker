export interface IUserCard {
	id: number | string
	createdAt?: Date
	updatedAt?: Date
	number: string
	expireDate?: string
	cvc?: number
	paymentSystem?: string
	type: string
	bankName: string
	bankAccountId?: number
	balance: number
	accountNumber?: string
}
