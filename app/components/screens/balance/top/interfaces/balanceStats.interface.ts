export interface IProgressBar {
	bgColor: string
	percents: number
}

export interface IBalanceInput {
	title: string
	placeholder: string
	type: string
}

export interface ICard {
	number: string
	name: string
	expireDate: string
}

export interface ICardNew {
	id: number
	createdAt: Date
	updatedAt: Date
	number: string
	expireDate: string
	cvc: number
	paymentSystem: string
	type: string
	bankName: string
	bankAccountId: number
	balance: number
	accountNumber: string
}

export interface IStats {
	id: number
	title: string
	currentNum: number
	maxNum: number
	percents: number
	color: string
}

export interface IRecipient {
	id: number
	name: string
	img: string
}

export interface IBalanceStats {
	title: string
	currentNum: number
	maxNum: number
	percents: number
	color: string
}
