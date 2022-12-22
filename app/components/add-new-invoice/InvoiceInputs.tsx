const InvoiceInputs = () => {
	return (
		<div className='flex justify-between mb-8'>
			<div>
				<span className='text-gray text-xs text-right'>INVOICE NO</span>
				<div className='mt-4 border py-5 px-7 w-[300px] rounded-[40px]'>
					#INV-0001234
				</div>
			</div>
			<div>
				<span className='text-gray text-xs text-right'>
					AMOUNT (USD)
				</span>
				<div className='mt-4 border py-5 px-7 w-[300px] rounded-[40px] border-purple'>
					5,000.00
				</div>
			</div>
		</div>
	)
}

export default InvoiceInputs
