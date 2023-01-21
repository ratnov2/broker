import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { ChangeEvent, useState } from 'react'

import { IFileResponse, MediaService } from '@/services/media/media.service'

export const useUploadFiles = () => {
	const [files, setFiles] = useState<IFileResponse[]>([])

	const { mutateAsync, isLoading } = useMutation<
		AxiosResponse<IFileResponse>,
		AxiosError,
		File
	>(['upload file'], formaData => MediaService.uploadFile(formaData))

	const uploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files) {
			const _files = e.currentTarget.files
			const promisesToMap = []
			for (let i = 0; i < _files.length; i++) {
				promisesToMap.push(_files[i])
			}

			const uploadPromises = promisesToMap.map(file => mutateAsync(file))

			Promise.all(uploadPromises).then(files => {
				setFiles(prev => [...prev, ...files.map(file => file.data)])
			})
		}
	}

	const removeFile = (file: IFileResponse) => {
		setFiles(prev => prev.filter(_file => _file !== file))
	}

	return { uploadFiles, files, removeFile, isLoading, setFiles }
}

export interface IUploadFiles {
	files: IFileResponse[]
	uploadFiles: (e: ChangeEvent<HTMLInputElement>) => void
	removeFile: (file: IFileResponse) => void
	isLoading: boolean
}
