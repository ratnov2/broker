import axios from 'axios'
import { useQuery } from 'react-query'

import { IPaymentContact } from '@/screens/payment-sources/payment-sources-item/payment-sources-item.interface'

export const usePaymentSources = (orderOption: string) => {
	const { isLoading: isLoadingPaymentSources, data: paymentSources } =
		useQuery(
			'payment-sources',
			() =>
				axios.get<IPaymentContact[]>(
					'https://63a0724d24d74f9fe8387afc.mockapi.io/api/payment-sources'
				),
			{
				select: ({ data }) => data //.slice(currentPage, 5)
			}
		)

	return {
		isLoadingPaymentSources,
		paymentSources
	}
}
