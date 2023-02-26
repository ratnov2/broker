import Image from 'next/image'
import { Element } from 'react-scroll'

import broker from '@/assets/images/broker_mark.jpeg'

import style from './AboutPerson.module.scss'

const AboutPerson = () => {
	return (
		<>
			<Element name='About_Person' className='element'></Element>
			<div className={style.aboutPerson}>
				<div>
					<h2>ABOUT MARK</h2>
					<p>
						Mark Kushnir is active trader with over 15 years
						experience exactly in Option trading. He traded Options
						15 years ago, when option trading looked pretty
						different. He, as many traders, lost a lot of money
						during the first period of trading. And the main and
						most important idea for the Strategy became SAFETY of
						the DEPOSIT. So - th e main idea, that Mark was keeping
						in mind for about two years, while he was developing his
						strategy was to develop the Strategy that allow you to
						keep you money as safe as possible. Offcouse you should
						understand that it is impossible to 100% safe at stock
						market. No matter what you trade - futures, stocks, etfs
						or options. The Strategy that has been developed by Mark
						allow you to reduce risk with every step that you do. It
						allows you to know upfront the price points that gonna
						be reached and total amount of cash that you gonna spend
						for the combination. You don't need to predict where
						market goes, it is all about historical data and right
						calculations based on Strategy.
					</p>
				</div>
			</div>
		</>
	)
}
export default AboutPerson
