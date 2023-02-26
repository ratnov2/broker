import Image from 'next/image'
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { HiOutlineMailOpen } from 'react-icons/hi'

import style from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={style.footer}>
			<h2>Contact Us</h2>
			<div>
				<div className={style.description}>
					<div className='flex mb-3'>
						<AiOutlinePhone />
						<h5 className='block ml-2'>
							Phone: <span>+1 778 980 9933</span>
						</h5>
					</div>
					<div className='flex mb-3'>
						<HiOutlineMailOpen />
						<h5 className={style.email}>
						<a href="mailto:mariaoptions3@gmail.com">Email: <span>mariaoptions3@gmail.com</span></a>
						</h5>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
