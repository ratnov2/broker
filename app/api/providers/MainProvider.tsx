import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
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

const MainProvider: FC<{ children: React.ReactNode; Component: TypeRoles }> = ({
	children,
	Component
}) => {
	return (
		<HeadProvider>
			<QueryClientProvider client={queryClient}>
				<ToastrCustom />
				<AuthProvider Component={Component}>{children}</AuthProvider>
			</QueryClientProvider>
		</HeadProvider>
	)
}

export default MainProvider
