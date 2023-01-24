import cn from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

import styles from './Actions.module.scss'

type PopupClickOutside = MouseEvent & {
	path: Node[]
}

const Menu: FC = () => {
	const menuRef = useRef<HTMLDivElement>(null)
	const [isActive, setIsActive] = useState<boolean>(false)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as PopupClickOutside

			if (menuRef.current && !_event.path?.includes(menuRef.current)) {
				setIsActive(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)

		return () =>
			document.body.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div ref={menuRef} className={styles.menu}>
			<button
				onClick={() => {
					setIsActive(!isActive)
				}}
				className={cn(isActive && 'rotate-90')}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<div
				onClick={e => {
					const _element = e?.target as HTMLDivElement
					setIsActive(false)
					alert(
						_element.innerHTML === 'Delete'
							? _element.innerHTML + 'd'
							: _element.innerHTML + 'ed'
					)
				}}
				className={cn(
					styles.popup,
					isActive ? 'scale-100' : 'scale-0 opacity-0'
				)}
			>
				<button>View</button>
				<button>Repeat</button>
				<button>Support</button>
			</div>
		</div>
	)
}

export default Menu
