import { IUserProfile } from '@/shared/types/user.interface';



import { API_UPLOADS_URL } from '@/config/api.config';


export const avatarPath = (profile: IUserProfile | undefined): string => {
	let path = '/images/avatar-empty.png'
	const avatarPath = profile?.avatarPath ? profile.avatarPath : '/images/avatar-empty.png'
	if (avatarPath && avatarPath.includes('/uploads')) {
		path = API_UPLOADS_URL + avatarPath
	}
	if (avatarPath && avatarPath.includes('http')) {
		path = avatarPath
	}
	return path
}