import { FC } from 'react'
import {
	AiOutlineCheckCircle,
	AiOutlineExclamationCircle,
	AiOutlineFileUnknown,
	AiOutlineHistory,
	AiOutlineQuestionCircle
} from 'react-icons/ai'

interface IRoundedIcon {
	overviewInvoiceType: string
}

const getStyle = {
	alignSelf: 'center',
	width: '68px',
	height: '68px',
	padding: '16px',
	borderRadius: '50px',
	color: 'white'
}

const RoundedIcon: FC<IRoundedIcon> = ({ overviewInvoiceType }) => {
	return (
		<div>
			{overviewInvoiceType === 'Invoice Sent' ? (
				<AiOutlineHistory
					style={{
						...getStyle,
						backgroundColor: '#6160dc'
					}}
				/>
			) : overviewInvoiceType === 'Paid Invoice' ? (
				<AiOutlineCheckCircle
					style={{
						...getStyle,
						backgroundColor: '#54C5EB'
					}}
				/>
			) : overviewInvoiceType === 'Pending Invoice' ? (
				<AiOutlineQuestionCircle
					style={{
						...getStyle,
						backgroundColor: 'orange'
					}}
				/>
			) : overviewInvoiceType === 'Unpaid Invoice' ? (
				<AiOutlineExclamationCircle
					style={{
						...getStyle,
						backgroundColor: 'red'
					}}
				/>
			) : (
				<AiOutlineFileUnknown
					style={{
						...getStyle,
						backgroundColor: 'gray'
					}}
				/>
			)}
		</div>
	)
}

export default RoundedIcon
