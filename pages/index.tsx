import Dashboard from '@/screens/dashboard/Dashboard'
import TransactionDetail from '@/screens/transaction-detail/TransactionDetail'

export default function Home() {
	//return <Dashboard />

	return <TransactionDetail {...{ clientId: '100', project: '#1', date: new Date }} />
}
