import { useRouter } from 'next/router'
import { number } from 'prop-types'

import Savings from '@/screens/savings/Savings'
import savings from '@/screens/savings/Savings'
import { savingsData } from '@/screens/savings/savings.data'
import { ISavingsData } from '@/screens/savings/savings.interface'

const Saving = () => {
	const router = useRouter()
	const id = router.query.id

	const currentSaving: ISavingsData[] = savingsData.filter(
		saving => id == '' + saving.id
	)

	return <Savings saving={currentSaving[0]} />
}

export default Saving
