import { FC } from 'react'

import { invoiceNumber } from '@/utils/invoice-number'

type TypeInvoiceInputs = {
	totalAmount: any
	invoiceId?: number | 'create'
}

const InvoiceInputs: FC<TypeInvoiceInputs> = ({ totalAmount, invoiceId }) => {
	return (
		<div className='flex justify-between mb-8'>
			<div>
				<span className='text-gray text-xs text-right'>INVOICE NO</span>
				<div className='mt-4 border py-5 px-7 w-[300px] rounded-[40px]'>
					{invoiceNumber(invoiceId) || <div>Loading ...</div>}
				</div>
			</div>
			<div>
				<span className='text-gray text-xs text-right'>TOTAL AMOUNT (USD)</span>
				<div className='mt-4 border py-5 px-7 w-[300px] rounded-[40px] border-purple'>
					{totalAmount}
				</div>
			</div>
		</div>
	)
}

export default InvoiceInputs
