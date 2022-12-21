import axios from 'axios';
import { useQuery } from 'react-query';



import { ITransaction } from '@/screens/transactions/transaction-history/rows/transaction-history.interface';


export const useTransactions = (currentPage: number) => {
	const { isLoading: isLoadingTransactions, data: transactions } = useQuery(
		'transactions',
		() =>
			axios.get<ITransaction[]>(
				'https://63a0724d24d74f9fe8387afc.mockapi.io/api/transactions'
			),
		{
			select: ({ data }) => data //.slice(currentPage, 5)
		}
	)

	return {
		isLoadingTransactions,
		transactions
	}
}