import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import ToastrCustom from '@/ui/toastr/ToastrCustom'

import AuthProvider from './AuthProvider/AuthProvider'
import HeadProvider from './head-provider/HeadProvider'
import { TypeRoles } from '@/../pages/_app'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export const CheckDocumentContext = createContext<ContextDocument>({
	checkDocument: false
})

const MainProvider: FC<{ children: React.ReactNode; Component: TypeRoles }> = ({
	children,
	Component
}) => {
	const [checkDocument, setCheckDocument] = useState(false)
	function handleCheckDocument() {
		setCheckDocument(check => !check)
	}
	return (
		<HeadProvider>
			<CheckDocumentContext.Provider
				value={{ checkDocument, handleCheckDocument }}
			>
				<QueryClientProvider client={queryClient}>
					<ToastrCustom />
					<AuthProvider Component={Component}>
						{children}
					</AuthProvider>
				</QueryClientProvider>
			</CheckDocumentContext.Provider>
		</HeadProvider>
	)
}

export default MainProvider

type ContextDocument = {
	checkDocument: boolean
	handleCheckDocument?(): void
} | null
