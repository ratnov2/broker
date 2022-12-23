import { FC } from 'react'

import { IButtonItem } from '@/screens/savings/button/savingsButton.interface'

const SavingsButton: FC<IButtonItem> = ({
	name,
	color,
	text,
	height,
	width,
	onButtonClick
}) => {
	return (
		<button
			type='button'
			className='inline-block px-6 py-2.5 bg-blue-600
                text-white font-medium text-xs leading-tight uppercase rounded-3xl
                shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                transition duration-150 ease-in-out'
			style={{ backgroundColor: color, width, height }}
			onClick={onButtonClick}
			data-name={name}
		>
			{text}
		</button>
	)
}

export default SavingsButton
