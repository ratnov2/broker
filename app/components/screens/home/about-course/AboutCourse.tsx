import Image from 'next/image'

import courseImg from '@/assets/images/course_mark.jpeg'

import style from './AboutCourse.module.scss'
import cn from 'clsx'
import { FC } from 'react'
import { PropsAboutCourse } from './about-course.interface'

const AboutCourse:FC<PropsAboutCourse> = ({customStyle}) => {
	return (
		<div className={cn(style.AboutCourse,customStyle)}>
			<div >
				<h2>ABOUT the COURSE</h2>
				<h6>
					The course is 3 weeks long, 15 hours, 1 hour a day, Monday
					to Friday. The first week is about options basics - time and
					intrinsic values, how you determine intrinsic value, how
					time value changes during time, what Delta is and how it
					changes. What mean In the Money, Out the Money and At the
					Money. All knowledge that you are getting is very practical.
					You really learn all basics. The second week is mostly about
					the Strategy itself. How to calculate combination, how to
					understand number of contracts, what are basic rules for the
					Strategy and why. The third week is about the Software, also
					developed by Mark. It is also about how to calculate price
					points that you expect and why these calculations are
					correct. It is about how you choose the right stock at right
					time. You lean how to compare different stocks between each
					other to understand which one is better for the moment. You
					learn how to work with Software and understand and analyze
					the Data it provides.
					<p className='mt-5'>
						Fees and Conditions Fees for the Course is 1400USD, that
						paid in three parts at the beginning of each week.
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
	)
}
export default AboutCourse
