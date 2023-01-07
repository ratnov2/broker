/**
 * This is only for test purposes to show ui buttons
 */
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Button from '@/ui/button/Button'
import { fontSizes, tailwindColors } from '@/ui/ui.data'

import { getKeys } from '@/utils/object'

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
						<div>
							<span className='font-bold'>Default Button</span>{' '}
							without props ( default values are -&gt;{' '}
							<span className='font-bold'>
								variant? = 'primary', color? = 'purple', size? =
								'sm' ){' '}
							</span>
						</div>
						<div>
							<Button>Primary purple sm</Button>
						</div>

						<div className='font-bold'>variant?</div>
						<div className='grid grid-cols-3 gap-3'>
							<div>
								<Button>Primary</Button>
							</div>
							<div>
								<Button variant='secondary'>Secondary</Button>
							</div>
							<div>
								<Button variant='tertiary'>Tertiary</Button>
							</div>
						</div>

						<div className='font-bold'>color?</div>
						{getKeys(tailwindColors).map(color => (
							<div className='grid grid-cols-3 gap-3' key={color}>
								<div>
									<Button variant='primary' color={color}>
										Primary {color}
									</Button>
								</div>
								<div>
									<Button variant='secondary' color={color}>
										Secondary {color}
									</Button>
								</div>
								<div>
									<Button variant='tertiary' color={color}>
										Tertiary {color}
									</Button>
								</div>
							</div>
						))}

						<div className='font-bold'>size?</div>
						{getKeys(fontSizes).map(size => (
							<div className='grid grid-cols-3 gap-3' key={size}>
								<div>
									<Button variant='primary' size={size}>
										Primary {size}
									</Button>
								</div>
								<div>
									<Button variant='secondary' size={size}>
										Secondary {size}
									</Button>
								</div>
								<div>
									<Button variant='tertiary' size={size}>
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
