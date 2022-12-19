import { IOverviewInvoice } from "./overview-invoices.interface";

export const overviewFakeData: IOverviewInvoice[] = [
	{
		_id: 1,
		overviewType: 'Invoice Sent',
		amount: 1234.0,
		compare: 2.01
	},
	{
		_id: 2,
		overviewType: 'Paid Invoice',
		amount: 932.0,
		compare: -2.01
	},
	{
		_id: 3,
		overviewType: 'Pending Invoice',
		amount: 1256.0,
		compare: 2.01
	},
	{
		_id: 4,
		overviewType: 'Unpaid Invoice',
		amount: 1932.0,
		compare: -2.01
	}
]
