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
					<h2>UNIQUE OPTION TRADING STRATEGY</h2>
					<p>
						The Strategy is based on neutral trading approach. I do
						not try to determine where exact stock going to move
						next day, I choose stock that going to show the most
						move in the nearest future. Such situation on the market
						are connected to news, economic events and historic
						volatility of exact options. When all conditions are got
						into consideration, options combinations have good
						opportunity to generate profit. Basic condition for
						making any other step in the Strategy – is the reducing
						risk for the combination. The strategy gives you
						opportunity to get profit on both directions of the
						market – Bear and Bull. You not going to afraid of
						crisis downs in the market, instead – you are going to
						gain profits on it. You are not going to be tied to
						analytical forecasts that are not very precise and
						accurate.
					</p>
				</div>
			</div>
		</>
	)
}
export default AboutPerson
