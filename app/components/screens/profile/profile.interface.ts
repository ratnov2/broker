interface IUserContacts {
	name: string
	class: string
}

interface IUserMessages {
	name: string
	text: string
	time: string
	value: number
}

export interface IUserCard {
	userName: string
	role: string
	address: string
	email: string
	phone: number
	totalContacts: number
	userContacts: IUserContacts[]
	userMessages: IUserMessages[]
}
