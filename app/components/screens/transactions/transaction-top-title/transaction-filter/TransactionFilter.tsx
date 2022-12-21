import { FC, useState } from 'react'
import Select from 'react-select'

import styles from './FilterOption.module.scss'

const options = [
	{
		value: 'newest',
		label: 'Newest'
	},
	{
		value: 'amount-up',
		label: 'Amount up'
	},
	{
		value: 'amount-down',
		label: 'Amount down'
	}
]

const FilterOption: FC = ({}) => {
	const [currentFilterOption, serCurrentFilterOption] = useState('newest')
	const getValue = () => {
		return currentFilterOption
			? options.find(o => o.value === currentFilterOption)
			: ''
	}

	const onChange = (newValue: any) => {
		serCurrentFilterOption(newValue.value)
	}

	return (
			<div className={'mr-10'}>
				<Select
					classNamePrefix={'custom-select'}
					options={options}
					value={getValue()}
					onChange={onChange}
				/>
			</div>
	)
}

export default FilterOption
