import Image from 'next/image'
import { FC } from 'react'

import styles from './Recipient.module.scss'

interface IRecipient {
	avatar: string
	name: string
	company: string
}

const Recipient: FC<IRecipient> = ({ avatar, name, company }) => {
	return (
		<>
			<div className={styles.recipient}>
				{avatar ? (
					<Image
						alt={name}
						src={avatar}
						width={80}
						height={80}
						draggable={false}
						style={{ borderRadius: '50px' }}
					/>
				) : (
					<div className='w-20 h-20 bg-gray rounded-[50%]'></div>
				)}
				<div className='flex-col'>
					<p>{name}</p>
					<span>{company}</span>
				</div>
			</div>
		</>
	)
}

export default Recipient
