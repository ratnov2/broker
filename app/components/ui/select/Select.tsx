import cn from 'clsx'
import { FC, useId } from 'react'
import ReactSelect from 'react-select'

import { ISelect, ISelectOption } from '@/ui/select/select.interface'

import styles from './Select.module.scss'

const Select: FC<ISelect<ISelectOption, boolean>> = ({
	// classNamePrefix = 'select',
	variant = 'primary',
	color = 'purple',
	size = 'sm',
	...rest
}) => {
	return (
		<ReactSelect
			classNames={{
				control: state =>
					state.isFocused
						? cn(
								styles.control__focused,
								styles[color],
								styles[size],
								styles[variant]
						  )
						: cn(
								styles.control,
								styles[color],
								styles[size],
								styles[variant]
						  ),
				dropdownIndicator: state =>
					state.isFocused
						? cn(
								styles.dropdownIndicator__focused,
								styles[color],
								styles[variant]
						  )
						: cn(
								styles.dropdownIndicator,
								styles[color],
								styles[variant]
						  ),
				valueContainer: state =>
					cn(styles.valueContainer, styles[variant]),
				placeholder: state =>
					state.isFocused
						? cn(styles.placeholder, styles[variant])
						: cn(styles.placeholder, styles[variant]),
				singleValue: state => cn(styles.singleValue, styles[variant]),
				input: state => cn(styles.Input, styles[variant]),
				indicatorSeparator: state =>
					cn(styles.indicatorSeparator, styles[variant]),
				indicatorsContainer: state =>
					cn(styles.indicatorsContainer, styles[variant]),
				// options

				menu: state =>
					cn(
						styles.menu,
						styles[color],
						styles[size],
						styles[variant]
					),
				menuList: state => cn(styles.menuList, styles[variant]),
				option: state =>
					state.isSelected
						? cn(styles.Option__selected, styles[variant])
						: cn(styles.Option, styles[variant])
			}}
			instanceId={useId()}
			// menuIsOpen={true}
			{...rest}
		/>
	)
}

export default Select
