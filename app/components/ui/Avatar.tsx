import Image from 'next/image';


const Avatar = ({
	size,
	avatarPath,
	name
}: {
	size: number
	avatarPath?: string
	name?: string
}) => {
	return (
		<div
			className={'relative pointer-events-none'}
			style={{ width: size, height: size }}
		>
			<Image
				alt={name? name : 'NoName'}
				src={avatarPath? avatarPath : '/images/avatar-empty.png'}
				width={size}
				height={size}
				draggable={false}
				style={{ borderRadius: '50px' }}
			/>
		</div>
	)
}
export default Avatar