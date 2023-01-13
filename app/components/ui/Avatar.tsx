import Image from 'next/image';


const Avatar = ({
	size,
	avatarPath,
	name
}: {
	size: string
	avatarPath?: string
	name: string
}) => {
	return (
		<div
			className={'relative pointer-events-none'}
			style={{ width: size, height: size }}
		>
			{/* <Image
				className={'rounded-full object-cover'}
				fill
				src={img ? img : '/images/nophoto.png'}
				sizes={'100%'}
				alt={name}
			/> */}
			<Image
				alt={name}
				src={avatarPath? avatarPath : '/images/nophoto.png'}
				width={48}
				height={48}
				draggable={false}
				style={{ borderRadius: '50px' }}
			/>
		</div>
	)
}
export default Avatar