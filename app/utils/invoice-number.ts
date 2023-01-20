export const invoiceNumber = (invoiceId?: number | 'create') => {
	if (invoiceId && invoiceId !== 'create') {
		return `#INV-000${invoiceId}`
	}
	return null
}
