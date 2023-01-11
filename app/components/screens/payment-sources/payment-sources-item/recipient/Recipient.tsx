import Image from 'next/image'
import { FC } from 'react'

import styles from './Recipient.module.scss'

interface IRecipient {
	avatarPath: string | undefined
	name: string
	email: string
}

const Recipient: FC<IRecipient> = ({ avatarPath, name, email }) => {
	return (
		<>
			<div className={styles.recipient}>
				{avatarPath ? (
					<Image
						alt={name}
						src={avatarPath}
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
					<span>{email}</span>
				</div>
			</div>
		</>
	)
}

export default Recipient
