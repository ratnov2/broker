import Image from 'next/image'

import trendingImg from '@/assets/images/home-tech-full.jpeg'

import style from './BrokerSecurity.module.scss'
import { BrokerSecurityData } from './broker-security.data'

const BrokerSecurity = () => {
	return (
		<div className={style.brokerSecurity}>
			<div>
				<h2>A Broker You Can Trust</h2>
				<p>
					When placing your money with a broker, you need to make sure
					your broker is secure and can endure through good and bad
					times. Our strong capital position, conservative balance
					sheet and automated risk controls are designed to protect
					IBKR and our clients from large trading losses.
				</p>
				<div className={style.elements}>
					{BrokerSecurityData.map((el, key) => (
						<div key={key}>
							<h5>{el.head}</h5>
							<p>{el.title}</p>
						</div>
					))}
				</div>
			</div>
			<Image
				width={900}
				height={600}
				alt='trending-technology'
				src={trendingImg}
			/>
		</div>
	)
}
export default BrokerSecurity
