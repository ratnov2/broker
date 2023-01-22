import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {
	SubmitHandler,
	useFieldArray,
	useForm,
	useWatch
} from 'react-hook-form'
import { FiArrowLeft } from 'react-icons/fi'

import Layout from '@/layout/Layout'

import Button from '@/ui/button/Button'

import { useUpdateInvoice } from '@/hooks/invoices/useUpdateInvoice'
import { useUploadFiles } from '@/hooks/media/useUploadFile'
import { useNewInvoice } from '@/hooks/useNewInvoice'

import AttachFile from '@/screens/add-new-invoice/AttachFile'
import ClientContact from '@/screens/add-new-invoice/ClientContact'
import InvoiceInputs from '@/screens/add-new-invoice/InvoiceInputs'
import ItemsDescription from '@/screens/add-new-invoice/ItemsDescription'
import { IInvoiceInput } from '@/screens/add-new-invoice/fields/item-field.interface'
import SelectClient from '@/screens/add-new-invoice/select-client/SelectClient'

export type TypeFormInputs = {
	items: IInvoiceInput[]
}

const AddNewInvoice: FC = () => {
	const { invoiceId, setInvoiceId } = useNewInvoice()

	const { updateInvoice, isLoading, users, currentUser, setCurrentUser } =
		useUpdateInvoice()

	const {
		files,
		uploadFiles,
		removeFile,
		isLoading: isFilesLoading,
		setFiles
	} = useUploadFiles()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		control,
		reset
	} = useForm<TypeFormInputs>({
		mode: 'onChange',
		defaultValues: {
			items: [{ name: undefined, duration: 10, rate: 0, amount: 0 }]
		}
	})

	const { fields, append, remove } = useFieldArray({
		name: 'items',
		control
	})

	const formValues = useWatch({
		name: 'items',
		control
	})

	const total = formValues.reduce(
		(acc, current) => acc + (current.amount || 0),
		0
	)

	const onSubmit: SubmitHandler<TypeFormInputs> = data => {
		if (invoiceId && invoiceId !== 'create') {
			updateInvoice({
				amount: total,
				invoiceId,
				recipient: currentUser.id,
				items: data.items,
				files
			})
			setInvoiceId('create')
			reset()
			setFiles([])
		}
	}

	return (
		<>
			<Layout title='add-new-invoice'>
				<h2 className='text-3xl font-bold mb-10'>Add New Invoice</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='bg-white rounded-[40px] p-[32px]'>
						<div className='flex items-center mb-10'>
							<Link href='/invoices'>
								<FiArrowLeft className='text-2xl font-bold' />
							</Link>
							<h3 className='text-xl font-bold ml-8'>New Invoices</h3>
						</div>

						{users ? (
							<div className='flex'>
								<div className='w-2/5'>
									<SelectClient
										users={users}
										currentUser={currentUser}
										setCurrentUser={setCurrentUser}
									/>
									<ClientContact currentUser={currentUser} />
								</div>
								<div className='w-3/5'>
									<InvoiceInputs totalAmount={total} invoiceId={invoiceId} />
									<ItemsDescription
										formState={formState}
										register={registerInput}
										fields={fields}
										remove={remove}
									/>
									<div className='flex justify-end'>
										<Button
											type='button'
											size='lg'
											onClick={() =>
												append({
													name: undefined,
													duration: 10,
													rate: 0,
													amount: 0
												})
											}
										>
											Add Another Item
										</Button>
									</div>
									<AttachFile
										files={files}
										isLoading={isFilesLoading}
										uploadFiles={uploadFiles}
										removeFile={removeFile}
									/>
									<div className='flex mt-16'>
										<button
											disabled={isLoading || isFilesLoading}
											className={cn(
												'bg-purple py-3.5 px-10 mr-4 rounded-[40px] flex items-center text-white',
												(isLoading || isFilesLoading) && 'opacity-70'
											)}
										>
											<span className='font-semibold mr-3'>Send Invoice</span>
											<Image
												src='/images/Send.svg'
												width={26}
												height={22}
												alt='address'
											/>
										</button>
										<div className='border py-3.5 px-10 rounded-[40px] border-gray text-purple font-semibold'>
											Save to Draft
										</div>
									</div>
								</div>
							</div>
						) : (
							<div>Loading ...</div>
						)}
					</div>
				</form>
			</Layout>
		</>
	)
}

export default AddNewInvoice
