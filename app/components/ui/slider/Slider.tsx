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

import Button from '../button/Button'

import style from './Slider.module.scss'
import { SliderData } from './slider.data'

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
				{SliderData.map(el => (
					<SwiperSlide>
						<Image width={1920} height={520} src={el.img} alt='' />
						<div className='absolute top-10 w-[100%]'>
							<div className='mx-5 xl:w-[1200px] xl:m-auto'>
								<p className={el.styleDescription}>
									{el.description}
								</p>
								<Link
									activeClass='active'
									className='test1'
									to={el.link}
									spy={true}
									smooth={true}
									duration={500}
								>
									<Button className={el.buttonStyle}>
										Learn more
									</Button>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
export default Slider
