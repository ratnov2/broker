import Image from 'next/image'

import style from './AwardWinning.module.scss'
import { AwardWinningData } from './award-winning.data'

const AwardWinning = () => {
	return (
		<div className={style.awardWinning}>
			<h2>AWARD WINNING PLATFORM & SERVICES</h2>
			<div className={style.container}>
				{AwardWinningData.map((el, key) => (
					<div key={key} className={style.element}>
						<div className={style.img}>
							<Image
								width={160}
								height={240}
								alt='award'
								src={el.img}
							/>
						</div>
						<p>{el.title}</p>
					</div>
				))}
			</div>
		</div>
	)
}
export default AwardWinning
