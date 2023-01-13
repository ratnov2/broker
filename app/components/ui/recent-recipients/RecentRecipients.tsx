import { FC } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import Avatar from '@/ui/Avatar'

import { IUserContact } from '@/shared/types/user.interface'

interface IRecentRecipients {
	slidesPerView: number
	userContacts?: IUserContact[]
	isLoading: boolean
}

const RecentRecipients: FC<IRecentRecipients> = ({
	userContacts,
	slidesPerView,
	isLoading
}) => {
	//const userContacts = useUserContacts()
	// let userContacts = [] as IUserContact[]
	// if (userContactsData) {
	// 	userContacts = userContactsData
	// }

	// const onContactClick = (e: any) => {
	// 	const filteredContact = userContacts.filter(
	// 		contact => contact.id === Number(e.target.dataset.id)
	// 	)

	// 	const { data: userBankAccount } = useBankAccount(filteredContact[0].id)
	// 	changeAddress(userBankAccount?.number)
	// }

	return (
		<div className={'mb-7'}>
			<h3 className={'balance-card__subtitle'}>Recent Recipient</h3>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<Swiper
					spaceBetween={12}
					slidesPerView={slidesPerView}
					className={'max-w-full !pr-[75px] relative'}
					modules={[Navigation]}
				>
					{userContacts &&
						userContacts.map(
							recipient => (
								console.log(recipient.avatarPath),
								(
									<SwiperSlide key={recipient.id}>
										<div
											// onClick={e => onContactClick(e)}
											className={'cursor-pointer flex items-center flex-col'}
											data-id={recipient.id}
										>
											<Avatar
												size={'70px'}
												img={recipient.avatarPath}
												name={recipient.name}
											/>
											<p className={'pointer-events-none'}>{recipient.name}</p>
										</div>
									</SwiperSlide>
								)
							)
						)}
					<button className={'recipient-btn'}>
						<BsArrowRightShort
							className={'text-[#6160DC] transition-all w-[26px] h-[26px]'}
						/>
					</button>
				</Swiper>
			)}
		</div>
	)
}
export default RecentRecipients
