import Image from 'next/image'
import { AiOutlineCheck } from 'react-icons/ai'

import imgLowCost from '@/assets/images/home-low-cost.jpeg'

import style from './LowCost.module.scss'

const LowCost = () => {
	return (
		<div className={style.lowCost}>
			<Image width={470} height={370} alt='low-cost' src={imgLowCost} />
			<div className={style.content}>
				<h2>Experience the Lowest Costs in the Industry2</h2>
				<ul>
					<li>
						<AiOutlineCheck />
						Low commissions starting at $04 with no added spreads,
						ticket charges, platform fees, or account minimums.
					</li>
					<li>
						<AiOutlineCheck />
						IB SmartRoutingSM helps support best execution by
						searching for the best available prices for stocks,
						options and combinations across exchanges and dark
						pools.
					</li>
					<li>
						<AiOutlineCheck />
						Margin rates up to 50% lower than the industry.6
					</li>
					<li>
						<AiOutlineCheck />
						Earn interest of up to USD 4.08% on uninvested cash.1
					</li>
					<li>
						<AiOutlineCheck />
						Earn extra income on your lendable shares
					</li>
				</ul>
			</div>
		</div>
	)
}
export default LowCost
