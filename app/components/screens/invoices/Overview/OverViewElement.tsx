import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineCheckCircle, AiOutlineExclamationCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaCheckDouble } from 'react-icons/fa';
import { IOverViewElement } from './Overview.interface';



import styles from './Overview.module.scss';



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
					<FaCheckDouble
						style={{
							alignSelf: 'center',
							backgroundColor: '#6160DC',
							width: '75px',
							height: '75px',
							padding: '22px',
							borderRadius: '50px',
							color: 'white'
						}}
					/>
				) : overViewType === 'Paid Invoice' ? (
					<AiOutlineCheckCircle
						style={{
							alignSelf: 'center',
							backgroundColor: '#54C5EB',
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
							backgroundColor: '#FFB74A',
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
							backgroundColor: '#FF4A55',
							width: '75px',
							height: '75px',
							padding: '16px',
							borderRadius: '50px',
							color: 'white'
						}}
					/>
				) : (
					<FaCheckDouble
						style={{
							alignSelf: 'center',
							backgroundColor: 'gray',
							width: '75px',
							height: '75px',
							padding: '22px',
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
								color: '#00A389'
							}}
						/>
					) : (
						<AiFillCaretDown
							style={{
								color: '#FF4A55'
							}}
						/>
					)}
					<div style={{ float: 'left', clear: 'left' }}>
						<span
							style={{
								fontSize: '22px',
								fontWeight: 'bold',
								color: compare >= 0 ? '#00A389' : '#FF4A55'
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