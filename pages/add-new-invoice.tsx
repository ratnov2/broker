import { FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import ClientContact from '@/components/add-new-invoice/ClientContact'

const AddNewInvoice: FC = () => {
	return (
		<>
			<h2 className='text-3xl font-bold mb-10'>Add New Invoice</h2>
			<div className='bg-white rounded-[40px] p-[32px]'>
				<div className='flex items-center mb-10'>
					<FiArrowLeft className='text-2xl font-bold' />
					<h3 className='text-xl font-bold ml-8'>New Invoices</h3>
				</div>
				<ClientContact />
			</div>
		</>
	)
}

export default AddNewInvoice
