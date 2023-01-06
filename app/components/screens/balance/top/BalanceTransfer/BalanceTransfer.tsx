import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BsArrowRightShort } from 'react-icons/bs'

import Avatar from '@/ui/Avatar'

import BalanceInput from '@/screens/balance/top/BalanceTransfer/BalanceInput'
import { balanceInputs, recipients } from '@/screens/balance/top/balance.data'

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

	const onCheckboxClick = () => {
		setIsChecked(!isChecked)
	}

	return (
		<div className='balance-card'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className={'text-xl font-bold mb-7'}>
					Transfer & Send Invoice
				</h2>

				<div className={'mb-7'}>
					<h3 className={'balance-card__subtitle'}>
						Recent Recipient
					</h3>

					<div className={'flex items-center gap-3 max-w-fit'}>
						<div
							className={
								'flex items-center overflow-x-hidden max-w-sm gap-5 flex-grow'
							}
						>
							{recipients.map(recipient => (
								<div
									className={'flex items-center flex-col'}
									key={recipient.id}
								>
									<Avatar
										size={'70px'}
										img={recipient.img}
										name={recipient.name}
									/>
									<p>{recipient.name}</p>
								</div>
							))}
						</div>

						<button
							className={
								'ml-5 w-[60px] h-[60px] rounded-full bg-[#F5F5F5] flex items-center justify-center'
							}
						>
							<BsArrowRightShort
								className={'text-[#6160DC] w-[26px] h-[26px]'}
							/>
						</button>
					</div>
				</div>

				{balanceInputs.map(balanceInput => (
					<BalanceInput
						key={balanceInput.title}
						title={balanceInput.title}
						placeholder={balanceInput.placeholder}
						type={balanceInput.type}
					/>
				))}

				<div className={'flex items-center justify-between mt-2'}>
					<div>
						<input
							className={'test card-checkbox'}
							id={'card-checkbox'}
							type='checkbox'
							checked={isChecked}
						/>
						<label
							onClick={onCheckboxClick}
							className={'test text-sm text-[#8E8EA1]'}
							htmlFor='card-checkbox'
						>
							I accept privacy policy
						</label>
					</div>

					<button
						className={`${
							isChecked ? '' : 'disabledBtn'
						} rounded-full bg-[#6160DC] py-[19px] text-white font-semibold w-1/2 h-[60px] flex items-center justify-center`}
					>
						Transfer
					</button>
				</div>
			</form>
		</div>
	)
}

export default BalanceTransfer
