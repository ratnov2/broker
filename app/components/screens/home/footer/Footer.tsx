import Image from 'next/image'
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { HiOutlineMailOpen } from 'react-icons/hi'

import contactImg from '@/assets/images/office.svg'

import style from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={style.footer}>
			<h2>Contact Us</h2>
			<div>
				<div className={style.description}>
					<div className={style.svg1}>
						<AiOutlineHome />
					</div>
					<h3>Office Location</h3>
					<div className='flex mb-3'>
						<BsFillGeoAltFill />
						<p className='block ml-2'>
							201-2010 E 48th Ave, Vancouver, BC V5P 1R8
						</p>
					</div>
					<div className='flex mb-3'>
						<AiOutlinePhone />
						<h5 className='block ml-2'>
							Phone: <span>778-709-6853</span>
						</h5>
					</div>
					<div className='flex mb-3'>
						<HiOutlineMailOpen />
						<h5 className={style.email}>
						<a href="mailto:mnicolsrealty@gmail.com">Email: <span>mnicolsrealty@gmail.com</span></a>
						</h5>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
