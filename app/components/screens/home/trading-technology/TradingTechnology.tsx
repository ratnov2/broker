import Image from 'next/image'

import trendingImg from '@/assets/images/home-tech-full.jpeg'

import style from './TradingTechnology.module.scss'
import { TradingTechnologyData } from './trading-technology.data'

const TradingTechnology = () => {
	return (
		<div className={style.tradingTechnology}>
			<Image
				width={900}
				height={600}
				alt='trending-technology'
				src={trendingImg}
			/>
			<div className={style.content}>
				<h2>Powerful Trading Platforms to help you succeed</h2>
				<div className={style.elements}>
					{TradingTechnologyData.map((el, key) => (
						<div className={style.element} key={key}>
							<h5>{el.head}</h5>
							<p>{el.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default TradingTechnology
