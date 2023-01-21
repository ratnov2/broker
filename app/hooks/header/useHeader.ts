import { useEffect, useState } from 'react'

export const useHeader = () => {
	const [classNames, setClassNames] = useState<string>('')

	const handleScroll = () => {
		if (window.pageYOffset > 0) {
			if (classNames === '') {
				setClassNames('scroll')
			}
		} else {
			if (classNames) {
				setClassNames('')
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [classNames])

	return { classNames }
}
