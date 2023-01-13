import { FC } from 'react'

import Avatar from '@/ui/Avatar'

import { IUserContact } from '@/shared/types/user.interface'

import ContactItems from './contact-items/ContactItems'

interface IRecipientDetails {
	selectedRecipient?: IUserContact
}

const RecipientDetails: FC<IRecipientDetails> = ({ selectedRecipient }) => {
	return (
		<>
			<div>
				<div className='text-sm text-gray font-thin mb-4'>Client Details</div>
				{selectedRecipient ? (
					<div className='flex flex-col space-y-10'>
						<div className='flex border rounded-full px-5 py-4 space-x-4 min-w-[278px] max-w-[450px]'>
							<Avatar
								size={70}
								name={selectedRecipient?.name}
								avatarPath={selectedRecipient?.avatarPath}
							/>
							<div>
								<div className='text-xl font-bold'>
									{selectedRecipient?.name}
								</div>
								<div className='text-sm text-gray font-thin'>
									Great Creative Agency
								</div>
							</div>
						</div>
						<ContactItems
							title={'Address'}
							value={selectedRecipient?.address}
							type={'address'}
						/>
						<ContactItems
							title={'Email'}
							value={selectedRecipient?.email}
							type={'email'}
						/>
						<ContactItems
							title={'Telephone'}
							value={''}
							type={'phone'}
						/>
					</div>
				) : (
					<div className='text-xl text-black font-thin mb-4'>
						No selected recipient
					</div>
				)}
			</div>
		</>
	)
}

export default RecipientDetails
