import { useQuery } from 'react-query'

export const usePrice = () => {
	return useQuery(
		['usePrice.name'],
		async () => {
			return fetch('https://frozen-fortress-07569.herokuapp.com/price')
				.then((res) => res.json())
				.then((result) => result)
				.catch((err) => console.log(err))
		},
		{
			refetchInterval: 100000,
		}
	)
}
