import { Dispatch, SetStateAction } from 'react'

import { IUser } from '@/shared/types/users.types'

export type TypeUserState = IUser | null

export interface IContext {
	user: TypeUserState
	setUser: Dispatch<SetStateAction<TypeUserState>>
}
