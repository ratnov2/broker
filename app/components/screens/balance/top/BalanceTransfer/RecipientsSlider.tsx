import { FC } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import Avatar from '@/ui/Avatar'

import { useUserContacts } from '@/hooks/user/useUserContacts'

import { IUserContact } from '@/services/user/user-profile.interface'

const RecipientsSlider: FC<{ setSenderInput: any; setRecipientInput: any }> = ({
	setSenderInput,
	setRecipientInput
}) => {
	const { data: userContactsData } = useUserContacts()
	let userContacts = [] as IUserContact[]
	if (userContactsData) {
		userContacts = userContactsData
	}

	const onContactClick = (e: any) => {
		const filteredContact = userContacts.filter(
			contact => contact.id === Number(e.target.dataset.id)
		)

		setRecipientInput(filteredContact[0].id)
	}

	return (
		<div className={'mb-7'}>
			<h3 className={'balance-card__subtitle'}>Recent Recipient</h3>

			<Swiper
				spaceBetween={28}
				slidesPerView={4}
				className={'max-w-full !pr-[75px] relative'}
				modules={[Navigation]}
			>
				{userContacts.map(recipient => (
					<SwiperSlide key={recipient.id}>
						<div
							onClick={e => onContactClick(e)}
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
				))}

				<button className={'recipient-btn'}>
					<BsArrowRightShort
						className={'text-[#6160DC] transition-all w-[26px] h-[26px]'}
					/>
				</button>
			</Swiper>
		</div>
	)
}
export default RecipientsSlider
