import { FC, useState } from 'react'
import Select from 'react-select'

import styles from './FilterOption.module.scss'

const options = [
	{
		value: 'newest',
		label: 'Newest'
	},
	{
		value: 'company-name',
		label: 'Company name'
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
				styles={{
					control: (styles) => ({
						...styles,
						cursor: 'pointer',
					})
				}}
			/>
		</div>
	)
}

export default FilterOption
