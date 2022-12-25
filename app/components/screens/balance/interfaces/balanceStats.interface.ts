export interface IProgressBar {
	bgcolor: string
	completed: number
}

export interface IBalanceInputs {
	title: string
	placeholder: string
	type: string
}

export interface ICard {
	number: string
	name: string
	expireDate: string
}

export interface IStats {
	id: number
	title: string
	currentNum: number
	maxNum: number
	percents: number
	color: string
}

export interface IRecipients {
	id: number
	name: string
	img: string
}
