import { useQuery, useMutation } from 'react-query'
import { TEST_API } from 'constants/api'
import { encrypt } from 'services/utils/crypto'
import { AUTH } from 'constants/Secret'

export const useGetGamer = () => {
	return useQuery(['useGetGamer.name'], () => {
		return fetch(`${TEST_API}/admin/gamers`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				params: encrypt({
					info: AUTH,
				}),
			}),
		})
			.then((res) => res.json())
			.then((result) => result.result)
			.catch((err) => console.log(err))
	})
}
export const useUpdateGamer = () => {
	const { data: gamers } = useGetGamer()
	return useMutation((address) => {
		const gamer = gamers.find((account) => account.address === address)
		if (gamer) {
			return fetch(`${TEST_API}/admin/gamers/details`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					params: encrypt({
						info: AUTH,
						...gamer,
						amount: gamer.amount + 1,
					}),
				}),
			})
				.then((res) => res.json())
				.then((result) => result.result)
				.catch((err) => console.log(err))
		}
		return fetch(`${TEST_API}/admin/gamers/details`, {
			headers: {
				'Content-type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				params: encrypt({
					info: AUTH,
					highest_score: 0,
					address: address,
					amount: 1,
					game: 'flappy-bird',
				}),
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result)
				return result.result
			})
			.catch((err) => {
				console.log(err)
			})
	})
}
