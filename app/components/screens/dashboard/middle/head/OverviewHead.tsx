import { FC } from 'react'
import styles from './OverviewHead.module.scss'

type OverviewHeadProps = {
	title: string
	timeLaps?: 'Day' | 'Week' | 'month' | 'year'
}

const OverviewHead: FC<OverviewHeadProps> = ({ title, timeLaps }) => {
	return (
		<div>
			<div className={styles.head}>
				{/* title */}
				<div>{title}</div>
				{/* time laps */}
				{timeLaps && (
					<div className={styles['time-laps']}>
						{/* comparison */}
						<div>
							<span>{`This ${timeLaps}`}</span>
							<span>{`Last ${timeLaps}`}</span>
						</div>
						{/* selector */}
						<div>{timeLaps}</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default OverviewHead
