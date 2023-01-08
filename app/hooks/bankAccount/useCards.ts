import { useQuery } from '@tanstack/react-query'

import { BankAccountService } from '@/services/bankAccount/bankAccount.service'

export const useCards = () => {
	const { data } = useQuery(['getCards'], BankAccountService.getCards)

	return { data }
}
