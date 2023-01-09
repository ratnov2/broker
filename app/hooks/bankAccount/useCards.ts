import { useQuery } from '@tanstack/react-query'

import { BankAccountService } from '@/services/bank-account/bank-account.service'

export const useCards = () => {
	const { data } = useQuery(['getCards'], BankAccountService.getCards)

	return { data }
}
