import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import BottomTransfer from '@/screens/balance/top/BalanceTransfer/BottomTransfer'
import RecipientsSlider from '@/screens/balance/top/BalanceTransfer/RecipientsSlider'
import { ITransferForm } from '@/screens/balance/top/BalanceTransfer/transfer-form.interface'
import { BankAccountService } from '@/services/bank-account/bank-account.service'

const BalanceTransfer: FC<{ setIsModalOpened: any }> = ({
	setIsModalOpened
}) => {
	const queryClient = useQueryClient()

	const { mutateAsync } = useMutation(
		['transfer money'],
		(data: any) => BankAccountService.transfer(data),
		{
			onSuccess: () => {
				setIsModalOpened(true)
				document.querySelector('body')?.classList.add('active')
				queryClient.invalidateQueries({ queryKey: ['getCards'] })
			},
			onError: error => {
				alert(error)
			}
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ITransferForm>()

	const onSubmit: SubmitHandler<ITransferForm> = async data => {
		data.amount = Number(data.amount)
		await mutateAsync(data)
		reset()
	}

	const [isChecked, setIsChecked] = useState(false)

	const [senderInput, setSenderInput] = useState('')
	const [recipientInput, setRecipientInput] = useState('')

	return (
		<div className='balance-card'>
			<h2 className={'text-xl font-bold mb-7'}>Transfer money</h2>

			<RecipientsSlider
				setSenderInput={setSenderInput}
				setRecipientInput={setRecipientInput}
			/>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={'mb-7'}>
					<h3 className={'balance-card__subtitle'}>From</h3>

					<input
						{...register('fromAccountId', {
							required: 'Account number is required'
						})}
						className={'balance-input'}
						placeholder={'Insert account number'}
						type={'text'}
						value={senderInput}
						onChange={e => setSenderInput(e.target.value)}
					/>
				</div>

				<div className={'mb-7'}>
					<h3 className={'balance-card__subtitle'}>Recipient</h3>

					<input
						{...register('toAccountId', {
							required: 'Account number is required'
						})}
						className={'balance-input'}
						placeholder={'Insert account number'}
						type={'text'}
						value={recipientInput}
						onChange={e => setRecipientInput(e.target.value)}
					/>
				</div>

				<div className={'mb-7'}>
					<h3 className={'balance-card__subtitle'}>Amount (usd)</h3>

					<input
						{...register('amount', { required: 'Amount is required' })}
						className={'balance-input'}
						placeholder={'0.00'}
						type={'number'}
						min='1'
					/>
				</div>
				<BottomTransfer isChecked={isChecked} setIsChecked={setIsChecked} />
			</form>
		</div>
	)
}

export default BalanceTransfer
