import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IBalanceInput } from '@/screens/balance/top/interfaces/balanceStats.interface'

const BalanceInput: FC<IBalanceInput> = ({ title, placeholder, type }) => {
	const { register } = useForm()

	return (
		<div className={'mb-7'}>
			<h3 className={'balance-card__subtitle'}>{title}</h3>

			<input
				className={
					'rounded-full bg-[#F5F5F5] h-[60px] flex items-center text-[#8E8EA1] pl-7 w-full focus:outline-none'
				}
				{...register('exampleRequired', { required: true })}
				placeholder={placeholder}
				type={type}
				min='1'
			/>
		</div>
	)
}

export default BalanceInput
