import { FC } from 'react'

import OutcomeCategories from '@/screens/dashboard/middle/outcome-categories/OutcomeCategories'
import Overview from '@/screens/dashboard/middle/overview/Overview'

const MiddleDashboard: FC = () => {
	return (
		<div className='grid grid-cols-2 gap-x-10'>
			<Overview />
			<OutcomeCategories />
		</div>
	)
}

export default MiddleDashboard
