import type { AppProps } from 'next/app'
import 'react-loading-skeleton/dist/skeleton.css'

import '@/assets/styles/globals.scss'

import MainProvider from '@/api/providers/MainProvider'

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean }

export interface TypeComponentAuthFields {
	Component: TypeRoles
}

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
