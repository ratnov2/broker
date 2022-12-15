import Layout from '@/layout/Layout'

export default function Transactions() {
	return (
		<Layout title='Transactions'>
			<div className="mt-10 sm:mt-0 w-full h-screen">
				<div className="flex flex-col">
					<div className="px-4 mb-4 md:col-span-1 sm:px-0">
						<h1 className="text-2xl font-bold text-black">Add New Transaction</h1>
					</div>
					<div className="flex flex-row w-full">
						<form action="#" method="POST" className='bg-white px-6 py-7 overflow-hidden shadow rounded-xl w-3/5'>
							<h3 className="mb-4 block text-xl font-bold">Transaction</h3>
							<div className="rounded-md">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="transcationNumber" className="block text-sm text-gray-500">
											Transcation Number
										</label>
										<input
											type="text"
											name="transcationNumber"
											id="transcationNumber"
											autoComplete="transcationNumber"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="date" className="block text-sm text-gray-700">
											Date
										</label>
										<input
											type="date"
											name="date"
											id="date"
											autoComplete="date"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="recipient" className="block text-sm text-gray-500">
											Recipient
										</label>
										<input
											type="text"
											name="recipient"
											id="recipient"
											autoComplete="recipient"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="email" className="block text-sm text-gray-700">
											Email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="amount" className="block text-sm text-gray-500">
											Amount
										</label>
										<input
											type="text"
											name="amount"
											id="amount"
											autoComplete="amount"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="services" className="block text-sm text-gray-700">
											Services
										</label>
										<input
											type="services"
											name="services"
											id="services"
											autoComplete="services"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="dueDate" className="block text-sm text-gray-500">
											Due Date
										</label>
										<input
											type="date"
											name="dueDate"
											id="dueDate"
											autoComplete="dueDate"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="pincode" className="block text-sm text-gray-700">
											Pin
										</label>
										<input
											type="password"
											name="pincode"
											id="pincode"
											autoComplete="pincode"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
							</div>
						</form>

						<div className='ml-10 bg-white px-4 py-5 overflow-hidden shadow rounded-xl w-2/5'>

						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

