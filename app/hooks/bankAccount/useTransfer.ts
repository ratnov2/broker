import { useMutation } from '@tanstack/react-query'

import { BankAccountService } from '@/services/bankAccount/bankAccount.service'

export const useTransfer = (
	fromAccountId: string,
	toAccountId: string,
	amount: number
) => {
	const { data } = useMutation(
		['useTransfer'],
		({ fromAccountId, toAccountId, amount }: any) =>
			BankAccountService.transfer(fromAccountId, toAccountId, amount),
		{
			onSuccess: () => {
				alert('success!')
			}
		}
	)

	return { data }
}
