import axios from 'axios'
import { useQuery } from 'react-query'

import { ITransfer } from './transfer-history/transfer.interface'

export const useBalance = (currentPage: number) => {
	const { isLoading, data: transfers } = useQuery(
		'transferHistory',
		() =>
			axios.get<ITransfer[]>(
				'https://639b978b31877e43d68f9e9e.mockapi.io/transfers'
			),
		{
			select: ({ data }) => data
		}
	)

	return { isLoading, transfers }
}
