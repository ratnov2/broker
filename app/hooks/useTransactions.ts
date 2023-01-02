import { TransactionService } from '@/services/transactions/transactions.service';
import { useQuery } from 'react-query';

export const useTransactions = (currentPage: number) => {
	const { isLoading: isLoadingTransactions, data: transactions } = useQuery(
		'transactions',
		() => TransactionService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return {
		isLoadingTransactions,
		transactions
	}
}