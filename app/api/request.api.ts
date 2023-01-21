import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { instance } from './interceptors'

export const request = async <T>(config: AxiosRequestConfig<T>) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data

	const onError = (error: AxiosError<T>) => Promise.reject(error)

	return instance(config).then(onSuccess, onError) //.catch(onError)
}
