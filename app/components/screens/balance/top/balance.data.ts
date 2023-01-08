import {
	IBalanceInput,
	ICard,
	IRecipient,
	IStats
} from '@/screens/balance/top/interfaces/balanceTop.interface'

export const stats: IStats[] = [
	{
		id: 1,
		title: 'Working Hard',
		currentNum: 521,
		maxNum: 1000,
		percents: 52,
		color: '#6160DC'
	},
	{
		id: 2,
		title: 'Working Hard',
		currentNum: 616,
		maxNum: 1000,
		percents: 62,
		color: '#54C5EB'
	},
	{
		id: 3,
		title: 'Working Hard',
		currentNum: 840,
		maxNum: 1000,
		percents: 84,
		color: '#FFB74A'
	},
	{
		id: 4,
		title: 'Working Hard',
		currentNum: 238,
		maxNum: 1000,
		percents: 24,
		color: '#FF4A55'
	}
]

export const card: ICard = {
	number: '2134 3241 5315 1511',
	name: 'Rara Avis',
	expireDate: '03/21'
}

export const recipients: IRecipient[] = [
	{
		id: 1,
		name: 'Jordan',
		img: ''
	},
	{
		id: 2,
		name: 'Tony',
		img: ''
	},
	{
		id: 3,
		name: 'Karen',
		img: ''
	},
	{
		id: 4,
		name: 'Jordan',
		img: ''
	},
	{
		id: 5,
		name: 'Sariel',
		img: ''
	},
	{
		id: 6,
		name: 'John',
		img: ''
	},
	{
		id: 7,
		name: 'Sara',
		img: ''
	},
	{
		id: 8,
		name: 'Keyfol',
		img: ''
	},
	{
		id: 9,
		name: 'Karen',
		img: ''
	},
	{
		id: 10,
		name: 'Mishel',
		img: ''
	}
]

export const balanceInputs: IBalanceInput[] = [
	{
		title: 'Recipient',
		placeholder: 'Insert recipient',
		type: 'text'
	},
	{
		title: 'Amount (usd)',
		placeholder: '0.00',
		type: 'number'
	}
]
