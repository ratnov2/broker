import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { IconType } from 'react-icons';



import styles from '../Sidebar.module.scss';


interface iOverViewItem {
	name: string
	amount: number
	link: string
	icon: string
	compare: number
	period: string
}

const OverViewItem: FC <iOverViewItem> = ({name,amount,link,icon,compare,period}) => {
	return (
		<div style={divContainer}>
			<div>
				<div className='div3' style={{ width: '70%', float: 'left' }}>
					<text style={{ fontSize: '22px', color: 'grey' }}>
						{name}
					</text>
				</div>
				<div
					className='div5'
					style={{
						width: '75px',
						height: '75px',
						float: 'right',
						backgroundColor: icon,
						borderRadius: '50px'
					}}
				></div>
				<div
					className='div4'
					style={{ width: '70%', float: 'left', clear: 'left' }}
				>
					<text style={{ fontSize: '36px', fontWeight: 'bold' }}>
						{amount}
					</text>
				</div>
			</div>
			<div className='div6' style={{ width: '100%' }}>
				<div className='div7' style={{ float: 'left' }}>
					<div
						className='div8'
						style={{
							width: '15px',
							height: '15px',
							backgroundColor: compare >= 0 ? '#00A389' : '#FF4A55'
						}}
					></div>
					<div
						className='div9'
						style={{ float: 'left', clear: 'left' }}
					>
						<text
							style={{
								fontSize: '22px',
								fontWeight: 'bold',
								color: compare >= 0 ? '#00A389' : '#FF4A55'
							}}
						>
							{compare}%
						</text>
						<text style={{ fontSize: '22px', color: 'grey' }}>
							{' '}
							{period}
						</text>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OverViewItem

const divContainer = {
	padding: '20px',
	borderRadius: 40,
	backgroundColor: 'white',
	width: '350px'
}