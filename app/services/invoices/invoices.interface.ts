import { IInvoiceInput } from '@/screens/add-new-invoice/fields/item-field.interface'

export interface IUpdateNewInvoiceFile {
	name: string
	size: string
	url: string
}

export interface IUpdateNewInvoice {
	invoiceId: number
	amount: number
	items: IInvoiceInput[]
	files: IUpdateNewInvoiceFile[]
	recipient: number
}
