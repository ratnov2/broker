import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useUserContacts } from '@/hooks/user/useUserContacts'

import BottomTransfer from '@/screens/balance/top/BalanceTransfer/BottomTransfer'
import RecipientsSlider from '@/screens/balance/top/BalanceTransfer/RecipientsSlider'
import { ITransferForm } from '@/screens/balance/top/BalanceTransfer/transferForm.intreface'
import { BankAccountService } from '@/services/bankAccount/bankAccount.service'
import { IUserContact } from '@/services/user/userProfile.interface'

const BalanceTransfer: FC = () => {
	const { mutateAsync } = useMutation(
		['transfer money'],
		(data: any) => BankAccountService.transfer(data),
		{
			onSuccess: () => {
				alert('success')
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

	const { data: userContactsData } = useUserContacts()
	let userContacts = [] as IUserContact[]
	if (userContactsData) {
		userContacts = userContactsData
	}

	return (
		<div className='balance-card'>
			<h2 className={'text-xl font-bold mb-7'}>Transfer money</h2>

			<RecipientsSlider userContacts={userContacts} />

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
