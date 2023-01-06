import { BsArrowRightShort } from 'react-icons/bs'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import Avatar from '@/ui/Avatar'

import { recipients } from '@/screens/balance/top/balance.data'

const RecipientsSlider = () => {
	return (
		<div className={'mb-7'}>
			<h3 className={'balance-card__subtitle'}>Recent Recipient</h3>

			<Swiper
				spaceBetween={28}
				slidesPerView={6}
				className={'max-w-full !pr-[75px] relative'}
				modules={[Navigation]}
			>
				{recipients.map(recipient => (
					<SwiperSlide key={recipient.id}>
						<div className={'flex items-center flex-col'}>
							<Avatar
								size={'70px'}
								img={recipient.img}
								name={recipient.name}
							/>
							<p>{recipient.name}</p>
						</div>
					</SwiperSlide>
				))}

				<button className={'recipient-btn'}>
					<BsArrowRightShort
						className={'text-[#6160DC] w-[26px] h-[26px]'}
					/>
				</button>
			</Swiper>
		</div>
	)
}
export default RecipientsSlider
