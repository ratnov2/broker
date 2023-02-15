import { log } from 'console'
import Image from 'next/image'
import {
	Element,
	Events,
	Link,
	animateScroll as scroll,
	scrollSpy,
	scroller
} from 'react-scroll'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import img2 from '@/assets/images/hero-banner-home-eventtrader.jpeg'
import img1 from '@/assets/images/hero-banner-home-interest.jpeg'
import fon1 from '@/assets/images/fone1.jpeg'
import fon2 from '@/assets/images/fone2.jpeg'
import fon3 from '@/assets/images/fone3.jpeg'
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
					delay: 6000,
					disableOnInteraction: false
				}}
				modules={[EffectFade, Pagination, Autoplay]}
				className='-z-1'
			>
				<SwiperSlide className='relative'>
					<Image width={1920} height={520} src={fon1} alt='' />
					<div className='absolute top-10 w-[100%]'>
						<div className='w-[1200px] m-auto'>
							<p className='text-4xl font-bold w-[560px]'>
								Learn how to trade safe and stable with unique
								option trading strategy
							</p>
							<Link
								activeClass='active'
								className='test1'
								to='About_Mark'
								spy={true}
								smooth={true}
								duration={500}
							>
								<Button className='bg-[rgb(205,0,28)] text-white px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>
									Learn more
								</Button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image width={1920} height={560} src={fon2} alt='' />
					<div className='absolute top-10 w-[100%]'>
						<div className=' w-[1200px] m-auto font-bold'>
							<p className='text-4xl font-bold w-[560px] text-white'>
								Experienced Trader with over 15 years developed
								this strategy
							</p>
							<Link
								activeClass='active'
								className='test1'
								to='About_Mark'
								spy={true}
								smooth={true}
								duration={500}
							>
								<Button className='bg-[rgb(255,255,255)] text-[rgb(205,0,28)] px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(212,212,212)]'>
									Learn more
								</Button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image width={1920} height={560} src={fon3} alt='' />
					<div className='absolute top-10 w-[100%]'>
						<div className=' w-[1200px] m-auto font-bold text-[#fafafa] text-'>
							<p className='text-3xl font-bold w-[560px]'>
								This course will help you understand how options
								work and how to be safe in a fast changing
								trading environment
							</p>
							<Link
								activeClass='active'
								className='test1'
								to='About_Course'
								spy={true}
								smooth={true}
								duration={500}
							>
								<Button className='bg-[rgb(205,0,28)] text-white px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>
									Learn more
								</Button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
export default Slider
