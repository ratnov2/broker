import { useQuery } from '@tanstack/react-query'

import { BankAccountService } from '@/services/bank-account/bank-account.service'

export const useUserCards = () => {
	const { data } = useQuery(['getUserCards'], BankAccountService.getUserCards)
	return { data }
}
