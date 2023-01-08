export const getPagination = (
	itemsLimit: number,
	currentPage: number,
	itemsPerPage = 5
) => {
	const getPaginationButtons = (currentPage: number) => {
		const numberOfPages = Math.ceil((itemsLimit || 0) / itemsPerPage)

		const array = []
		for (let i = 1; i <= numberOfPages; i++) {
			array.push(i)
		}

		return currentPage === numberOfPages
			? array.slice(currentPage - 3, currentPage)
			: currentPage === 1
			? array.slice(0, currentPage + 2)
			: array.slice(currentPage - 2, currentPage + 1)
	}

	const paginationButtons = getPaginationButtons(currentPage)
	const minItemNumberPerPage = itemsPerPage * (currentPage - 1) + 1
	const maxItemNumberPerPage = itemsPerPage * currentPage

	return { paginationButtons, minItemNumberPerPage, maxItemNumberPerPage }
}
