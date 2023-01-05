import { FC } from 'react'
import Select from 'react-select'

import { IFilter } from './transaction-filter.interface'

const FilterOption: FC<IFilter> = ({ options, setOrderBy, orderBy }) => {
	const getValue = () => {
		return orderBy ? options.find(o => o.value === orderBy) : ''
	}

	const onChange = (newValue: any) => {
		setOrderBy(newValue.value)
	}

	return (
		<div className={'mr-10'}>
			<Select
				classNamePrefix={'custom-select'}
				options={options}
				value={getValue()}
				onChange={onChange}
				styles={{
					control: styles => ({
						...styles,
						cursor: 'pointer'
					})
				}}
			/>
		</div>
	)
}

export default FilterOption
