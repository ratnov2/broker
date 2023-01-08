import { FC } from 'react'

import {
	containerStyles,
	fillerStyles
} from '@/screens/balance/top/balanceInformation/ProgressbarStyle'
import { IProgressBar } from '@/screens/balance/top/interfaces/balanceTop.interface'

const Progressbar: FC<IProgressBar> = ({ bgColor, percents }) => {
	return (
		<div className={'mt-9'} style={containerStyles}>
			<div style={fillerStyles(percents, bgColor)} />
		</div>
	)
}

export default Progressbar
