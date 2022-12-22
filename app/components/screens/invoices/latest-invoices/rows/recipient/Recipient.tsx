import Image from 'next/image';
import { FC} from 'react';

import styles from './Recipient.module.scss';


interface IRecipient {
	avatar: string
	name: string
	email: string
}

const Recipient: FC<IRecipient> = ({
	avatar,
	name,
	email,
}) => {
	return (
		<>
			<div className={styles.recipient}>
				{avatar ? (
					<Image
						alt={name}
						src={avatar}
						width={48}
						height={48}
						draggable={false}
						style={{ borderRadius: '50px' }}
					/>
				) : (
					<div className='w-12 h-12 bg-gray rounded-[50%]'></div>
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