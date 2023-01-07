import { FC } from 'react'

const BottomTransfer: FC<{ isChecked: boolean; setIsChecked: any }> = ({
	isChecked,
	setIsChecked
}) => {
	return (
		<div className={'flex items-center justify-between mt-2'}>
			<div>
				<label
					className={'getCards text-sm text-[#8E8EA1] cursor-pointer'}
					htmlFor='card-checkbox'
				>
					<input
						className={'getCards card-checkbox'}
						id={'card-checkbox'}
						type='checkbox'
						checked={isChecked}
						onChange={() => setIsChecked(!isChecked)}
					/>
					I accept privacy policy
				</label>
			</div>

			<button
				className={`${
					isChecked ? '' : 'disabledBtn'
				} rounded-full bg-[#6160DC] py-[19px] text-white font-semibold w-1/2 h-[60px] flex items-center justify-center`}
			>
				Transfer
			</button>
		</div>
	)
}
export default BottomTransfer
