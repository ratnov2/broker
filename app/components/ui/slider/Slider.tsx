import Image from 'next/image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import img2 from '@/assets/images/hero-banner-home-eventtrader.jpeg'
import img1 from '@/assets/images/hero-banner-home-interest.jpeg'

import Button from '../button/Button'

import style from './Slider.module.scss'

//import './slider.css'

const Slider = () => {
	return (
		<div className={style.swiper}>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				pagination={{
					clickable: true
				}}
				autoplay={{
					delay: 25000,
					disableOnInteraction: false
				}}
				modules={[EffectFade, Pagination, Autoplay]}
				className='-z-1'
			>
				<SwiperSlide className='relative'>
					<Image width={2560} height={560} src={img1} alt='' />
					<div className='absolute top-10 w-[100%]'>
						<div className='w-[1200px] m-auto'>
							<p className='text-4xl font-bold w-[560px]'>
								Learn how to trade safe and stable with unique
								option trading strategy
							</p>
							<Button className='bg-[rgb(205,0,28)] text-white px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>Learn more</Button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image width={2560} height={560} src={img2} alt='' />
					<div className='absolute top-10 w-[100%]'>
						<div className=' w-[1200px] m-auto font-bold'>
							<p className='text-4xl font-bold w-[560px]'>
								Experienced Trader with over 15 years developed
								this strategy
							</p>
							<Button className='bg-[rgb(205,0,28)] text-white px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>Learn more</Button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image width={2560} height={560} src={img1} alt='' />
					<div className='absolute top-10 w-[100%]'>
						<div className=' w-[1200px] m-auto font-bold'>
							<p className='text-3xl font-bold w-[560px]'>
								This course will help you understand how options
								work and how to be safe in a fast changing
								trading environment
							</p>
							<Button className='bg-[rgb(205,0,28)] text-white px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>Learn more</Button>
						</div>
					</div>
				</SwiperSlide>
				
			</Swiper>
		</div>
	)
}
export default Slider
