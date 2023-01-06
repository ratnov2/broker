import { NewService } from "@/services/test/test.service"
import { useQuery } from "@tanstack/react-query"

export const useTest = () => {
	const {data} = useQuery(['h5321'], NewService.newFunc)

	return {data}
}