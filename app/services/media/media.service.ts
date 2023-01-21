import { fileUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'

export interface IFileResponse {
	name: string
	size: string
	url: string
}

export const MediaService = {
	async uploadFile(file: File) {
		const formData = new FormData()

		formData.append('file', file)
		return instance.post<IFileResponse>(fileUrl, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			params: {
				folder: 'avatar'
			}
		})
	}
}
