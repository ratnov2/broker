import { FC } from 'react'

import OverViewItem from './OverViewItem'

const OverView: FC = () => {
	return (
		<div style={overviewDivStyle}>
			<OverViewItem name={'Invoice Sent'} amount={1234} link={''} icon={'#6160DC'} compare={2.01} period={'than last month'} />
			<OverViewItem name={'Paid Invoice'} amount={932} link={''} icon={'#54C5EB'} compare={-2.01} period={'than last month'} />
			<OverViewItem name={'Pending Invoice'} amount={1256} link={''} icon={'#FFB74A'} compare={2.01} period={'than last month'} />
			<OverViewItem name={'Unpaid Invoice'} amount={1932} link={''} icon={'#FF4A55'} compare={-2.01} period={'than last month'} />
		</div>
	)
}

export default OverView

const overviewDivStyle = {
	display: 'flex',
	justifyContent: 'space-between'
}
