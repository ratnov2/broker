import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import Button from '../button/Button'

import { PropsModal } from './Modal.interface'
import style from './Modal.module.scss'

const Modal: FC<PropsModal> = ({ show, onClose, children, title }) => {
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	const handleCloseClick = (e: any) => {
		e.preventDefault()
		onClose()
	}

	const modalContent = show ? (
		<div className={style.modal}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<div className={style.modalHeader}>
					<h4 className={style.modalTitle}>{title}</h4>
				</div>
				<div className={style.modalBody}>{children}</div>
				<div className={style.modalFooter}>
					<Button
						color='red'
						onClick={handleCloseClick}
						className={style.close}
					>
						Close
					</Button>
					<Button onClick={handleCloseClick} className={style.make}>
						make a {title}
					</Button>
				</div>
			</div>
		</div>
	) : null

	if (isBrowser) {
		return createPortal(
			modalContent,
			//@ts-ignore
			document.getElementById('__next')
		)
	} else {
		return null
	}
}

// const StyledModalBody = styled.div`
//   padding-top: 10px;
// `;

// const StyledModalHeader = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   font-size: 25px;
// `;

// const StyledModal = styled.div`
//   background: white;
//   width: 500px;
//   height: 600px;
//   border-radius: 15px;
//   padding: 15px;
// `;
// const StyledModalOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

export default Modal
