import Image from 'next/image'

const Avatar = ({
	size,
	img,
	name
}: {
	size: string
	img: string
	name: string
}) => {
	return (
		<div className={'relative'} style={{ width: size, height: size }}>
			<Image
				className={'rounded-full object-cover'}
				fill
				src={img ? img : '/images/nophoto.png'}
				sizes={'100%'}
				alt={name}
			/>
		</div>
	)
}
export default Avatar
