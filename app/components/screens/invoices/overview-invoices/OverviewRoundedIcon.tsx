import { FC } from 'react';
import { AiOutlineCheckCircle, AiOutlineExclamationCircle, AiOutlineFileUnknown, AiOutlineHistory, AiOutlineQuestionCircle } from 'react-icons/ai';


interface IRoundedIcon {
	overviewType: string
}

const getStyle = {
	alignSelf: 'center',
	width: '68px',
	height: '68px',
	padding: '16px',
	borderRadius: '50px',
	color: 'white'
}

const RoundedIcon: FC<IRoundedIcon> = ({ overviewType }) => {
	return (
		<div>
			{overviewType === 'sent' ? (
				<AiOutlineHistory
					style={{
						...getStyle,
						backgroundColor: '#6160dc'
					}}
				/>
			) : overviewType === 'paid' ? (
				<AiOutlineCheckCircle
					style={{
						...getStyle,
						backgroundColor: '#54C5EB'
					}}
				/>
			) : overviewType === 'pending' ? (
				<AiOutlineQuestionCircle
					style={{
						...getStyle,
						backgroundColor: 'orange'
					}}
				/>
			) : overviewType === 'unpaid' ? (
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
						backgroundColor: 'green'
					}}
				/>
			)}
		</div>
	)
}

export default RoundedIcon