import Image from 'next/image'
import { Dispatch, FC, SetStateAction, useRef } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { Navigation, Pagination, Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import Avatar from '@/ui/Avatar'

import { IUserContact } from '@/shared/types/users.types'

interface IRecentRecipients {
	slidesPerView: number | 'auto' | undefined
	userContacts?: IUserContact[]
	isLoading: boolean
	setSelectedRecipientId: Dispatch<SetStateAction<Number | undefined>>
}

const RecipientsSwiper: FC<IRecentRecipients> = ({
	userContacts,
	slidesPerView,
	isLoading,
	setSelectedRecipientId
}) => {
	const swiperRef = useRef<SwiperType>()

	return (
		<div className={'mb-7'}>
			<h3 className={'mb-7 font-bold text-2xl'}>Recent Recipient</h3>

			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className={'relative'}>
					<Swiper
						spaceBetween={7}
						slidesPerView={slidesPerView}
						className={'!mr-16'}
						modules={[Pagination, Navigation]}
						onBeforeInit={swiper => {
							swiperRef.current = swiper
						}}
						centeredSlides={true}
						loop={true}
					>
						{userContacts &&
							userContacts.map(recipient => (
								<SwiperSlide key={recipient.id}>
									<div
										onClick={() => setSelectedRecipientId(recipient.id)}
										className={'cursor-pointer flex items-center flex-col'}
										data-id={recipient.id}
									>
										<Avatar
											size={70}
											avatarPath={recipient.avatarPath}
											name={recipient.name.split(' ')[0]}
										/>
										<p className={'pointer-events-none'}>
											{recipient.name.split(' ')[0]}
										</p>
									</div>
								</SwiperSlide>
							))}
					</Swiper>
					<button
						className={'recipient-right-btn'}
						onClick={() => {
							swiperRef.current?.slideNext()
						}}
					>
						<BsArrowRightShort
							className={'text-[#6160DC] transition-all w-[26px] h-[26px]'}
						/>
					</button>
				</div>
			)}
		</div>
	)
}
export default RecipientsSwiper
