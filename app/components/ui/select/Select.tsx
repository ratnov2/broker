import { FC, forwardRef, useId } from 'react'
import ReactSelect from 'react-select'

import { selectClassNames } from '@/ui/select/select.class-names'
import { ISelect, ISelectOption } from '@/ui/select/select.interface'

const Select: FC<ISelect<ISelectOption, boolean>> = forwardRef(
	({
		variant = 'primary',
		color = 'purple',
		size = 'sm',
		classNames = selectClassNames(variant, color, size),
		...rest
	}, ref:any) => {
		return (
			<ReactSelect
				ref={ref}
				classNames={classNames}
				instanceId={useId()}
				{...rest}
				// menuIsOpen={true} // needed for inspect in browser
			/>
		)
	}
)

export default Select
