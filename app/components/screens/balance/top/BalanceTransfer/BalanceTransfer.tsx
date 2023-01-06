import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import BalanceInput from '@/screens/balance/top/BalanceTransfer/BalanceInput'
import BottomTransfer from '@/screens/balance/top/BalanceTransfer/BottomTransfer'
import RecipientsSlider from '@/screens/balance/top/BalanceTransfer/RecipientsSlider'
import { balanceInputs } from '@/screens/balance/top/balance.data'

type Inputs = {
	example: string
	exampleRequired: string
}

const BalanceTransfer: FC = () => {
	const {
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

	const [isChecked, setIsChecked] = useState(false)
	const [currentBtn, setCurrentBtn] = useState()

	const onBtnClick = (btn: any) => {
		// @ts-ignore
		currentBtn && currentBtn.classList.remove('active')
		btn.target.classList.add('active')

		setCurrentBtn(btn.target)
	}

	return (
		<div className='balance-card'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className={'text-xl font-bold mb-7'}>Transfer money</h2>

				<RecipientsSlider />

				{balanceInputs.map(balanceInput => (
					<BalanceInput
						key={balanceInput.title}
						title={balanceInput.title}
						placeholder={balanceInput.placeholder}
						type={balanceInput.type}
					/>
				))}

				<BottomTransfer
					isChecked={isChecked}
					setIsChecked={setIsChecked}
				/>
			</form>
		</div>
	)
}

export default BalanceTransfer
