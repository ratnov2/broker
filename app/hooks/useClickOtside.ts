import { useEffect, useRef, useState } from 'react'

type PopupClickOutside = MouseEvent & {
	path: Node[]
}

export const useClickOutside = () => {
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

	return { menuRef, isActive, setIsActive }
}
