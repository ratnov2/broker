import { getUsersUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'

export const ReadFileService = {
	async makeRead(data:{have_read:boolean}) {
		const response = instance.put(getUsersUrl('/profile'), data)
		return response
	},

}
