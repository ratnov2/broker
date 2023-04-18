import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Element } from 'react-scroll'

import courseImg from '@/assets/images/course_mark.jpeg'

import style from './AboutCourse.module.scss'
import { PropsAboutCourse } from './about-course.interface'

const AboutCourse: FC<PropsAboutCourse> = ({ customStyle }) => {
	return (
		<>
			<Element name='About_Course' className='element'></Element>
			<div className={cn(style.AboutCourse, customStyle)}>
				<div>
					<h2>
						Individual option trading course in Theory and Practice
					</h2>
					<h6>
						Full trading course that is offered, does not have
						analogs. In full course that includes theoretical and
						practical part (you trade on your own account with
						supervision) you have opportunity in individual training
						learn my over 20 years PRACTICAL experience in trading
						options. In 3 weeks of theory plus 4 month of practice
						you will learn how to earn 10-20% per months without
						putting your deposit under the risk. In this 4 months
						real time trading learning experience you will learn how
						to have stable income with risks of loosing your money
						in all possible markets. As usually during 4 month you
						can see up, down and flat. You also will save time and
						money. You also will save 10 years, that I spent,
						developing this strategy and 300k that I lost, using
						different schemes of work that actually didn't work.
						Welcome to the course, that is UNIQUE, SAFE and
						developed for mid range investor and trader.
						<p className='mt-5'>
							Fees and Conditions Fees for the Course is 1500USD,
							that paid in three parts at the beginning of each
							week.
						</p>
					</h6>
				</div>
				<Image
					width={900}
					height={600}
					alt='trending-technology'
					src={courseImg}
				/>
			</div>
		</>
	)
}
export default AboutCourse
