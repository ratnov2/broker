import cn from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

import styles from './Menu.module.scss'
import { useMenuActions } from './useMenuActions'

type PopupClickOutside = MouseEvent & {
	path: Node[]
}

interface IMenuProps {
	transferId: number
	refetchTransfers: () => void
}

const Menu: FC<IMenuProps> = ({ transferId, refetchTransfers }) => {
	const menuRef = useRef<HTMLDivElement>(null)
	const [isActive, setIsActive] = useState<boolean>(false)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as PopupClickOutside

			if (menuRef.current && !_event.path.includes(menuRef.current)) {
				setIsActive(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)

		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	const { deleteAsync } = useMenuActions()

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
				onClick={() => setIsActive(false)}
				className={cn(
					styles.popup,
					isActive ? 'scale-100' : 'scale-0 opacity-0'
				)}
			>
				<button
					onClick={async () => {
						await deleteAsync(transferId)
						refetchTransfers()
					}}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Menu
