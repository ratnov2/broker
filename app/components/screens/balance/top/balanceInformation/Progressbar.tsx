import { FC } from 'react'

import { IProgressBar } from '@/screens/balance/top/interfaces/balanceStats.interface'

const containerStyles = {
	height: 16,
	width: '100%',
	backgroundColor: '#e0e0de',
	borderRadius: 50
}

const Progressbar: FC<IProgressBar> = ({ bgColor, completed }) => {
	const fillerStyles = {
		height: '100%',
		width: `${completed}%`,
		backgroundColor: bgColor,
		borderRadius: 'inherit',
		textAlign: 'right'
	}

	return (
		<div className={'mt-9'} style={containerStyles}>
			<div style={fillerStyles}></div>
		</div>
	)
}

export default Progressbar
