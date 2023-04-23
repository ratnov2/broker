import dynamic from 'next/dynamic'
import { Dispatch, FC, MouseEvent, SetStateAction, useRef } from 'react'
import ReactDOM from 'react-dom'

import style from './Portal.module.scss'

const Portal: FC<IPortal> = ({ children, setIsPortal }) => {
	const ref = useRef(null)
	const closePortal = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
	) => {
		setIsPortal(false)
	}
	if (document) {
		return ReactDOM.createPortal(
			<div className={style.portal} onClick={e => closePortal(e)}>
				<div className={style.share} />
				<div
					className={style.content}
					ref={ref}
					onClick={e => e.stopPropagation()}
				>
					{children}
				</div>
			</div>,
			document.getElementById('__next') as Element
		)
	}
	return null
}

export default Portal

interface IPortal {
	children: React.ReactNode
	setIsPortal: Dispatch<SetStateAction<boolean>>
}
