import Image from 'next/image'

const AttachFile = () => {
	return (
		<>
			<h2 className='mb-11 text-xl font-bold mb-16'>Attach File</h2>
			<div>
				<div className='flex bg-light-gray w-[337px] border border-dashed p-3.5 rounded-[40px]'>
					<div className='bg-[#6160DC] w-12 h-12 rounded-full p-3 mr-4'>
						<label
							htmlFor='upload-photo'
							className='cursor-pointer'
						>
							<Image
								src='/images/Upload.svg'
								width={30}
								height={30}
								alt='address'
							/>
						</label>
						<input
							className='opacity-0 absolute z-10'
							type='file'
							name='photo'
							id='upload-photo'
						/>
					</div>
					<div>
						<h3 className='font-semibold'>Upload Files</h3>
						<span className='text-gray text-sm'>
							PDF, DOC, PPT, JPG, PNG
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default AttachFile
