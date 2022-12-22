/**
 * This is only for test purposes to show ui buttons
 */
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Button from '@/ui/button/Button'
import { IButtonSize } from '@/ui/button/button.interface'

import { tailwindColorsType } from '@/utils/tailwindColors'

const btnColors: tailwindColorsType[] = [
	'black',
	'gray',
	'green',
	'light-blue',
	// 'light-gray',
	'orange',
	'purple',
	'red'
]

const btnSizes: IButtonSize[] = ['xs', 'sm', 'base', 'lg', 'xl']

const Buttons: FC = () => {
	return (
		<Layout title='buttons'>
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<div className='w-3/4 flex flex-col'>
					<h3 className='bg-purple text-2xl p-10 pl-20 text-white font-bold'>
						Buttons
					</h3>
					{/* buttons */}
					<div className='px-14 py-20 border border-gray bg-white flex flex-col flex-wrap gap-3'>
						<div>btnType</div>
						<div className='grid grid-cols-3 gap-3'>
							<div>
								<Button btnType='primary'>Primary</Button>
							</div>
							<div>
								<Button btnType='secondary'>Secondary</Button>
							</div>
							<div>
								<Button btnType='tertiary'>Tertiary</Button>
							</div>
						</div>

						<div>btnColor?</div>
						{btnColors.map(color => (
							<div className='grid grid-cols-3 gap-3' key={color}>
								<div>
									<Button btnType='primary' btnColor={color}>
										Primary {color}
									</Button>
								</div>
								<div>
									<Button
										btnType='secondary'
										btnColor={color}
									>
										Secondary {color}
									</Button>
								</div>
								<div>
									<Button btnType='tertiary' btnColor={color}>
										Tertiary {color}
									</Button>
								</div>
							</div>
						))}

						<div>btnSize?</div>
						{btnSizes.map(size => (
							<div className='grid grid-cols-3 gap-3' key={size}>
								<div>
									<Button btnType='primary' btnSize={size}>
										Primary {size}
									</Button>
								</div>
								<div>
									<Button btnType='secondary' btnSize={size}>
										Secondary {size}
									</Button>
								</div>
								<div>
									<Button btnType='tertiary' btnSize={size}>
										Tertiary {size}
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Buttons
