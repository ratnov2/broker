/**
 * This is only for test purposes to show ui buttons
 */
import { ChangeEventHandler, FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import Button from '@/ui/button/Button'
import { IButtonSize } from '@/ui/button/button.interface'
import Field from '@/ui/field/Field'

import { tailwindColorsType } from '@/utils/tailwindColors'

const colors: tailwindColorsType[] = [
	'black',
	'gray',
	'green',
	'light-blue',
	// 'light-gray',
	'orange',
	'purple',
	'red'
]

const sizes: IButtonSize[] = ['xs', 'sm', 'base', 'lg', 'xl']

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
						{colors.map(color => (
							<div className='grid grid-cols-4 gap-3' key={color}>
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
								<div className='flex items-center'>
									<Field
										key={color}
										type='checkbox'
										color={color}
										withText={true}
									/>
								</div>
							</div>
						))}

						<div className='font-bold'>size?</div>
						{sizes.map(size => (
							<div className='grid grid-cols-4 gap-3' key={size}>
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
								<div className='flex items-center'>
									<Field
										key={size}
										type='checkbox'
										dimension={size}
										withText={true}
									/>
								</div>
							</div>
						))}
					</div>
					{/* checkbox */}
					<h3 className='bg-purple text-2xl p-10 pl-20 text-white font-bold'>
						Checkbox
					</h3>
					<div className='px-14 py-20 border border-gray bg-white flex flex-col flex-wrap gap-3'>
						<Field type='checkbox' />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Buttons
