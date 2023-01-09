import {
	ActionMeta,
	ClassNamesConfig,
	GroupBase,
	MultiValue,
	Props,
	SingleValue
} from 'react-select'

import { ISize, ITailwindColors, IVariant } from '@/ui/ui.interface'

export interface ISelect<
	Option,
	IsMulti extends boolean,
	Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
	// here you can extend react-select interface with other custom props
	color?: ITailwindColors
	size?: ISize
	variant?: IVariant
}

export interface ISelectOption {
	value: string
	label: string
}

export type ISelectClassNames = (
	variant: IVariant,
	color: ITailwindColors,
	size: ISize
) =>
	| ClassNamesConfig<ISelectOption, boolean, GroupBase<ISelectOption>>
	| undefined

export type ISelectSingleValue = SingleValue<ISelectOption>
export type ISelectMultiValue = MultiValue<ISelectOption>

export type ISelectOnChange = (
	newValue: ISelectSingleValue | ISelectMultiValue,
	actionMeta: ActionMeta<ISelectOption>
) => void
