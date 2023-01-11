import { useQuery } from '@tanstack/react-query'

import { BankAccountService } from '@/services/bank-account/bank-account.service'

export const useBankAccount = (id: number) => {
	const { data } = useQuery(['useBankAccount'], () =>
		BankAccountService.getBankAccount(id)
	)

	return { data }
}
