import { FC } from 'react'
import { BsCheckLg } from 'react-icons/bs'

const BottomTransfer: FC<{ isChecked: boolean; setIsChecked: any }> = ({
	isChecked,
	setIsChecked
}) => {
	return (
		<div className={'flex items-center justify-between mt-2'}>
			<div>
				<label
					className={'text-sm text-[#8E8EA1] cursor-pointer flex items-center'}
					htmlFor='card-checkbox'
				>
					<input
						className={'card-checkbox'}
						id={'card-checkbox'}
						type='checkbox'
						checked={isChecked}
						onChange={() => setIsChecked(!isChecked)}
					/>
					<div
						className={`w-[20px] h-[20px] bg-[#f5f5f5] mr-[11px] flex items-center justify-center rounded-[4px] ${
							isChecked ? 'bg-[#54c5eb]' : ''
						}`}
					>
						{isChecked && <BsCheckLg className={'text-white'} />}
					</div>
					<span>I accept privacy policy</span>
				</label>
			</div>

			<button
				className={`${
					isChecked ? '' : 'disabledBtn'
				} rounded-full bg-[#6160DC] hover:bg-[#4140e3] transition-all py-[19px] text-white font-semibold w-1/2 h-[60px] flex items-center justify-center`}
				disabled={!isChecked}
			>
				Transfer
			</button>
		</div>
	)
}
export default BottomTransfer
