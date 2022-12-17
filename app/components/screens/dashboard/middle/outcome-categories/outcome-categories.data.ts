import { categoriesDataType } from '@/screens/dashboard/middle/outcome-categories/outcome-categories.interface'

export const categoriesData: categoriesDataType[] = [
	{
		_id: 1,
		name: 'Monthly Need',
		data: 27,
		transactions: 763,
		color: 'purple'
	},
	{
		_id: 2,
		name: 'Groceries',
		data: 11,
		transactions: 321,
		color: 'black'
	},
	{
		_id: 3,
		name: 'Subscribing',
		data: 22,
		transactions: 69,
		color: 'light-blue'
	},
	{
		_id: 4,
		name: 'Tax',
		data: 15,
		transactions: 154,
		color: 'orange'
	},
	{
		_id: 5,
		name: 'Others',
		data: 25,
		transactions: 696,
		color: 'red'
	}
]
