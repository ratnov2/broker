import { IOperations } from "@/shared/types/bank-accounts.interface"
import { AxiosResponse } from "axios"
import {UseMutationResult} from 'react-query'

export interface PropsCardActions{
	accountNumber:string
}

export type TypesActionsData = {
	className: string
	title: string
	description: string
	arrowDirection: 'left' | 'right'
}[]

