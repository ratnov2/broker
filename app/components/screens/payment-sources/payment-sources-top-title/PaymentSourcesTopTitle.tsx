import { FC } from 'react'

import styles from './PaymentSourcesTopTitle.module.scss'
import FilterOption from './filter-option/FilterOption'
import NewContact from './new-contact/NewContact'

const PaymentSourceTitle: FC = ({}) => {
	return (
		<div className='flex justify-between items-center mb-4 mt-8 flex-wrap'>
			<h1 className={styles.title}>Payment Sources</h1>
			<div className='flex justify-between mb-4'>
				<FilterOption />
				<NewContact />
			</div>
		</div>
	)
}

export default PaymentSourceTitle
