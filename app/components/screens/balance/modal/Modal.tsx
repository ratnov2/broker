import Image from 'next/image'
import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

const Modal: FC<{
	isModalOpened: boolean
	setIsModalOpened: Dispatch<SetStateAction<boolean>>
}> = ({ isModalOpened, setIsModalOpened }) => {
	const onCloseButtonClick = () => {
		setIsModalOpened(false)
		document.querySelector('body')?.classList.remove('active')
	}

	const onModalClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.currentTarget.classList.contains('modal')) {
			onCloseButtonClick()
		}
	}

	return (
		<div
			className={`modal ${isModalOpened ? 'active' : ''}`}
			onClick={e => onModalClick(e)}
		>
			<div className='modal__main'>
				<button className='modal__close' onClick={onCloseButtonClick}>
					<IoCloseSharp className={'text-gray3 w-[30px] h-[30px]'} />
				</button>

				<h2 className='text-[28px] font-bold'>Successful Transfer!</h2>
				<Image
					width={150}
					height={150}
					src={'/images/successful.gif'}
					alt={'successful gif'}
				/>
			</div>
		</div>
	)
}
export default Modal
