import { FC } from 'react'
import {
	AiFillCaretDown,
	AiFillCaretUp,
	AiOutlineCheckCircle,
	AiOutlineExclamationCircle,
	AiOutlineFileUnknown,
	AiOutlineHistory,
	AiOutlineQuestionCircle
} from 'react-icons/ai'
import { FaCheckDouble } from 'react-icons/fa'

import styles from './Overview.module.scss'
import { IOverViewElement } from './overview.interface'

const OverViewElement: FC<{ overViewElement: IOverViewElement }> = ({
	overViewElement: { overViewType, amount, compare, period }
}) => {
	return (
		<div className={styles.divContainer}>
			<div>
				<div
					style={{
						width: '70%',
						float: 'left',
						fontSize: '22px',
						color: 'grey'
					}}
				>
					{overViewType}
				</div>
				{overViewType === 'Invoice Sent' ? (
					<AiOutlineHistory
						style={{
							alignSelf: 'center',
							backgroundColor: '#6160dc', //purple почему-то другой цвет, а не тот, что в _variables
							width: '75px',
							height: '75px',
							padding: '16px',
							borderRadius: '50px',
							color: 'white'
						}}
					/>
				) : overViewType === 'Paid Invoice' ? (
					<AiOutlineCheckCircle
						style={{
							alignSelf: 'center',
							backgroundColor: '#54C5EB', //light-blue почему-то не работает
							width: '75px',
							height: '75px',
							padding: '16px',
							borderRadius: '50px',
							color: 'white'
						}}
					/>
				) : overViewType === 'Pending Invoice' ? (
					<AiOutlineQuestionCircle
						style={{
							alignSelf: 'center',
							backgroundColor: 'orange',
							width: '75px',
							height: '75px',
							padding: '16px',
							borderRadius: '50px',
							color: 'white'
						}}
					/>
				) : overViewType === 'Unpaid Invoice' ? (
					<AiOutlineExclamationCircle
						style={{
							alignSelf: 'center',
							backgroundColor: 'red',
							width: '75px',
							height: '75px',
							padding: '16px',
							borderRadius: '50px',
							color: 'white'
						}}
					/>
				) : (
					<AiOutlineFileUnknown
						style={{
							alignSelf: 'center',
							backgroundColor: 'gray',
							width: '75px',
							height: '75px',
							padding: '16px',
							borderRadius: '50px',
							color: 'white'
						}}
					/>
				)}
				<div
					style={{
						width: '70%',
						float: 'left',
						clear: 'left',
						fontSize: '36px',
						fontWeight: 'bold'
					}}
				>
					{amount}
				</div>
			</div>
			<div style={{ width: '100%' }}>
				<div style={{ float: 'left' }}>
					{compare >= 0 ? (
						<AiFillCaretUp
							style={{
								color: 'green'
							}}
						/>
					) : (
						<AiFillCaretDown
							style={{
								color: 'red'
							}}
						/>
					)}
					<div style={{ float: 'left', clear: 'left' }}>
						<span
							style={{
								fontSize: '22px',
								fontWeight: 'bold',
								color: compare >= 0 ? 'green' : 'red'
							}}
						>
							{compare}%
						</span>
						<span style={{ fontSize: '22px', color: 'grey' }}>
							{' '}
							than last {period}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OverViewElement
