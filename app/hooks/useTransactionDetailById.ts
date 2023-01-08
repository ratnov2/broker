import { useQuery } from '@tanstack/react-query'
import { TransactionService } from '@/services/transaction-detail.service'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'

export const useTransactionById = (id: string) => {
	const { isLoading, data } = useQuery(
		['transaction detail', id],
		() => TransactionService.getById(id),
		{
			onError: (error: any) => {
				alert(error.message)
			},
			select: ({ data }): ITransactionDetail => data,
			enabled: !!id,
		}
	)

	return { isLoading, data }
}
