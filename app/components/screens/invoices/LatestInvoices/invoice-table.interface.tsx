export interface ITableItem {
	_Id: string
	items: string[]
	//invoiceDate: Date
	//status: string
	//recipientFullName: string
	//recipientAvatar: string
	//serviceName: string
}

export interface ILatestInvoiceTableItem {
	tableItem: ITableItem
	printHandler: () => void
}