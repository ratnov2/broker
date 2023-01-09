export interface IProgressBar {
	bgColor: string
	percents: number
}

export interface ICard {
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

export interface IBalanceStats {
	title: string
	currentNum: number
	maxNum: number
	percents: number
	color: string
}
