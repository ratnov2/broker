import Image from 'next/image'
import { EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import img2 from '@/assets/images/hero-banner-home-eventtrader.jpeg'
import img1 from '@/assets/images/hero-banner-home-interest.jpeg'

import style from './Slider.module.scss'

//import './slider.css'

const Slider = () => {
	return (
		<div className={style.swiper}>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className='-z-1'
			>
				<SwiperSlide className='relative'>
					{/* <img src={img1} /> */}
					<div className=''>
						<Image width={2560} height={560} src={img1} alt='' />
						<div className='absolute top-0 '>
							<p className=''>wfekwefklwef nwj nfjewn jwfjw ee</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image width={2560} height={560} src={img2} alt='' />
					<div className='absolute top-0 '>
						<p className=''>wfekwefklwef n333333wj nfjewn jwfjw ee</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image width={2560} height={560} src={img1} alt='' />
					<div className='absolute top-0 '>
						<p className=''>wfekwefklwejewn jwfjw ee</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image width={2560} height={560} src={img2} alt='' />
					<div className='absolute top-0 '>
						<p className=''>wfekwefklwef nwj nfjewn jwfwef3232jw ee</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
export default Slider
