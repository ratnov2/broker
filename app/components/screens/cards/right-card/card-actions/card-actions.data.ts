export const cardActionsData: TypesActionsData = [
	{
		className: 'rounded-l-3xl bg-light-blue',
		title: 'Top Up',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		link: '/',
		arrowDirection: 'left'
	},
	{
		className: 'mr-5 rounded-r-2xl bg-purple',
		title: 'Withdraw',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		link: '/',
		arrowDirection: 'right'
	}
]

export type TypesActionsData = {
	className: string
	title: string
	description: string
	link: string
	arrowDirection: 'left' | 'right'
}[]
