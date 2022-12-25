import {
	IBalanceInputs,
	ICard,
	IRecipients,
	IStats
} from '@/screens/balance/interfaces/balanceStats.interface'

export const stats: IStats[] = [
	{
		id: 1,
		title: 'Working Hard',
		currentNum: 500,
		maxNum: 1000,
		percents: 50,
		color: '#6160DC'
	},
	{
		id: 2,
		title: 'Working Hard',
		currentNum: 750,
		maxNum: 1000,
		percents: 75,
		color: '#54C5EB'
	},
	{
		id: 3,
		title: 'Working Hard',
		currentNum: 625,
		maxNum: 1000,
		percents: 62,
		color: '#FFB74A'
	},
	{
		id: 4,
		title: 'Working Hard',
		currentNum: 250,
		maxNum: 1000,
		percents: 25,
		color: '#FF4A55'
	}
]

export const card: ICard = {
	number: '2134 3241 5315 1511',
	name: 'Rara Avis',
	expireDate: '03/21'
}

export const recipients: IRecipients[] = [
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

export const balanceInputs: IBalanceInputs[] = [
	{
		title: 'Recipient',
		placeholder: 'Insert recipient',
		type: 'text'
	},
	{
		title: 'Amount',
		placeholder: '0.00',
		type: 'number'
	}
]
