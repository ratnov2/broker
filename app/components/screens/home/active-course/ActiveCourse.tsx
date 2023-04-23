import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import {  useState } from 'react'

import Button from '@/ui/button/Button'


import practiceImg from '@/assets/images/practice.png'
import theoryImg from '@/assets/images/theory.png'


import style from './ActiveCourse.module.scss'

const DynamicPortal = dynamic(() => import('@/ui/portal/Portal'), {
	ssr: false
})

const ActiveCourse = () => {
	const [isPortal, setIsPortal] = useState(false)
	const [check, setCheck] = useState(false)
	return (
		<div className={style.activeCourse}>
			<div className={style.theory}>
				<div className={style.img}>
					<Image src={theoryImg} alt='theory' />
				</div>
				{isPortal && (
					<div className={style.theoryPortal}>
						<DynamicPortal setIsPortal={setIsPortal}>
							<>
								<h2 className={style.theoryPortalH2}>Theory</h2>
								<h3 className={style.theoryPortalH3}>
									Перед регистрацией вам нужно ознакомиться
									с&#160;
									<a
										href='https://server.option-trading.ca/uploads/tutoring_contract.docx'
										download
									>
										документом
									</a>
								</h3>
								<div>
									<input
										type='checkbox'
										checked={check}
										onChange={() => setCheck(!check)}
									/>
									<span className={style.theoryPortalSpan}>Ознакомлен</span>
								</div>
								<Link href='register'>
									<Button
										className={`mr-4 white text-red border-[1px] px-5 py-1 text-lg font-light transition-all duration-200 hover:border-[rgb(205,0,28)] hover:text-[rgb(205,0,28)]`}
									>
										Log In
									</Button>
								</Link>
							</>
						</DynamicPortal>
					</div>
				)}
				<button onClick={() => setIsPortal(!isPortal)}>Theory</button>
			</div>
			<div className={style.practice}>
				<div className={style.img}>
					<Image src={practiceImg} alt='practice' />
				</div>
				<button>Practice</button>
			</div>
		</div>
	)
}
export default ActiveCourse
