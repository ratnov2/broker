import { useMutation } from '@tanstack/react-query'

import { TransactionsService } from '@/services/transactions.service'

export const useMenuActions = (itemId: number) => {
	const { mutateAsync: deleteAsync } = useMutation(
		['delete transter history item', itemId],
		() => TransactionsService.delete(itemId)
	)

	return { deleteAsync }
}
