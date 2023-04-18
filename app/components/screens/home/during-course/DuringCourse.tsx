import Image from 'next/image'
import { Element } from 'react-scroll'

import style from './DuringCourse.module.scss'

const DuringCourse = () => {
	return (
		<>
			<Element name='About_Person' className='element'></Element>
			<div className={style.aboutPerson}>
				<div>
					<h2>UNIQUE OPTION TRADING STRATEGY</h2>
					<div>
						<p>
							During long time of learning different strategies
							from simplest debit and credit spreads to more
							complicated like Butterfly and Condor, I developed
							tactic that I follow till today. Briefly all these
							basics include 4 Rules that I always follow:
						</p>{' '}
						<ul className='my-3'>
							<li className='ml-4 my-1'>
								1. You should be in neutral position at the very
								beginning and always need to balance your
								positions to neutral condition.
							</li>
							<li className='ml-4 my-1'>
								2. Use all potential for all time of
								combination.
							</li>
							<li className='ml-4 my-1'>3. Do not use MARGIN.</li>
							<li className='ml-4 my-1'>
								4. Option combinations should consist of
								positions with limited loss and unlimited
								profit.
							</li>
						</ul>
						<p>
							Among all existing strategies in American option
							market there are only two corresponds to these rules
							– Straddle and Strangle. It was basis for building
							my own strategy. The last step I had - is how to
							determine the most potential stocks (options) at
							exact point of time. Based on huge statistics of
							fluctuation of the prices for different stocks, I
							determined that profit directly connected to premium
							price vs fluctuation of the price during one time
							period (month). Expansion of the price shows
							volatility of the option and directly influence on
							premium. Based on that I developed my own technical
							analyse based on historical volatility of the
							stock's prices. Today, based on my own software I
							can review any stock traded on American stock market
							and choose the one that has the maximum potential of
							expansion of the price in the nearest future.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default DuringCourse
