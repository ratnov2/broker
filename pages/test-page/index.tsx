import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Transactions from './Invoices'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})
const TestPage: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Transactions />
		</QueryClientProvider>
	)
}

export default TestPage
