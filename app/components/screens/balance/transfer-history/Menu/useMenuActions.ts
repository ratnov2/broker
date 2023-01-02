import { useMutation } from '@tanstack/react-query'

import { instance } from '@/api/interceptors'

export const useMenuActions = () => {
	const { mutateAsync: deleteAsync } = useMutation(
		['delete transter history item'],
		(itemId: number) =>
			instance.delete(
				`https://red-project-bank-app.herokuapp.com/api/transactions/${itemId}`
			)
	)

	return { deleteAsync }
}
