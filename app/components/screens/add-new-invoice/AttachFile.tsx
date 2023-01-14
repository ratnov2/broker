import Image from 'next/image'
import { FC } from 'react'

import { API_UPLOADS_URL } from '@/config/api.config'

import { IUploadFiles } from '@/hooks/media/useUploadFile'

const AttachFile: FC<IUploadFiles> = ({
	files,
	uploadFiles,
	removeFile,
	isLoading
}) => {
	return (
		<>
			<h2 className='mb-11 text-xl font-bold'>Attach File</h2>
			<div className='flex gap-8 items-start'>
				<label
					htmlFor='upload-photo'
					className='relative flex bg-light-gray w-[337px] border border-dashed p-3.5 rounded-[40px] cursor-pointer'
				>
					<input
						onChange={uploadFiles}
						multiple={true}
						className='opacity-0 absolute -z-10 top-0 left-0 right-0 bottom-0'
						type='file'
						name='photo'
						id='upload-photo'
					/>
					<div className='bg-[#6160DC] w-12 h-12 rounded-full p-3 mr-4'>
						<div className='cursor-pointer'>
							<Image
								src='/images/Upload.svg'
								width={30}
								height={30}
								alt='address'
							/>
						</div>
					</div>
					<div>
						<h3 className='font-semibold'>Upload Files</h3>
						<span className='text-gray text-sm'>PDF, DOC, PPT, JPG, PNG</span>
					</div>
				</label>
				<div className='flex flex-col gap-2 self-center'>
					{files.length > 0 ? (
						<span className='text-gray text-sm leading-none'>
							Uploaded files (click on file to see)&#8595;
						</span>
					) : (
						<span className='text-gray text-sm leading-none'>
							There are no files
						</span>
					)}
					{files.length > 0 && (
						<div className='flex flex-col gap-2'>
							{files.map((file, index) => (
								<div
									className='flex gap-4 items-center'
									key={file.url + file.name + index}
								>
									<a
										href={API_UPLOADS_URL + file.url}
										target='_blank'
										className='text-purple hover:underline cursor-pointer leading-none'
									>
										{file.name}
									</a>
									<button
										onClick={() => removeFile(file)}
										className='text-gray text-base leading-none'
									>
										x
									</button>
								</div>
							))}
						</div>
					)}
					{isLoading && <div>Loading ...</div>}
				</div>
			</div>
		</>
	)
}

export default AttachFile
