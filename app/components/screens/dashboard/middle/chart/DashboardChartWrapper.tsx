import { FC, PropsWithChildren } from 'react'

const DashboardChartWrapper: FC<PropsWithChildren<unknown>> = ({
	children
}) => {
	return <div className='bg-white p-8 rounded-[40px]'>{children}</div>
}

export default DashboardChartWrapper
