import {
	containerStyles,
	fillerStyles
} from '@/screens/balance/top/balanceInformation/ProgressbarStyle'
import { IProgressBar } from '@/screens/balance/top/interfaces/balanceTop.interface'

const progressBar: IProgressBar = {
	bgColor: '#6160DC',
	percents: 53
}

const Progressbar = () => {
	return (
		<div className={'mt-9'} style={containerStyles}>
			<div style={fillerStyles(progressBar.percents, progressBar.bgColor)} />
		</div>
	)
}

export default Progressbar
