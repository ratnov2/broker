import { useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

import { useClickOutside } from '@/hooks/useClickOtside'

import styles from './Menu.module.scss'
import { useMenuActions } from './useMenuActions'

const Menu: FC<{ transferId: number }> = ({ transferId }) => {
	const { menuRef, isActive, setIsActive } = useClickOutside()

	const { deleteAsync } = useMenuActions(transferId)
	const queryClient = useQueryClient()

	return (
		<div ref={menuRef} className={styles.menu}>
			<button
				onClick={() => {
					setIsActive(!isActive)
				}}
				className={cn(isActive && 'rotate-90')}
			>
				<span />
				<span />
				<span />
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
						await deleteAsync()
						queryClient.refetchQueries(['get transfer history'])
					}}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Menu
