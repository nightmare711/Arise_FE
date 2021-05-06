import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { useQuery, useMutation } from 'react-query'
import { TEST_API } from 'constants/api'
import { encrypt, decrypt } from 'services/utils/crypto'
import { AUTH } from 'constants/Secret'

export const useGetGamers = () => {
	return useQuery(['useGetGamers.name'], () => {
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
			.then((res) => {
				const result = decrypt(res.result)
				return result.sort(function (a, b) {
					return b.highest_score - a.highest_score
				})
			})
			.catch((err) => console.log(err))
	})
}
export const useUpdateGamer = (setIsLoading) => {
	const { data: gamers } = useGetGamers()
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
				.then((result) => setIsLoading(false))
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
				return setIsLoading(false)
			})
			.catch((err) => {
				return 0
			})
	})
}
export const useGetScore = () => {
	return useQuery(
		['useGetScore.name'],
		() => {
			return fetch(`${TEST_API}/admin/gamer`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					params: encrypt({
						info: AUTH,
						address: window.ethereum.selectedAddress,
						game: 'flappy-bird',
					}),
				}),
			})
				.then((res) => res.json())
				.then((result) => {
					const res = decrypt(result.result)?.highest_score
					if (res) {
						return res
					}
					return 0
				})
				.catch((err) => {
					return 0
				})
		},
		{
			refetchInterval: 3000,
		}
	)
}
export const usePlayFlappyBird = (setIsNotEnough) => {
	const data = React.useContext(DataContext)
	const { data: gamers } = useGetGamers()
	const [gamerFound, setGamerFound] = React.useState(null)

	React.useEffect(() => {
		if (gamers) {
			const gamer = gamers.find((item) => item.address === window.ethereum.selectedAddress)
			setGamerFound(gamer)
		}
	}, [gamers])
	return () => {
		if (gamerFound) {
			if (gamerFound.amount >= 1) {
				data.setIsOpenFlappyBird(true)
			} else {
				setIsNotEnough(true)
			}
		} else {
			setIsNotEnough(true)
		}
	}
}
export const useFindRank = () => {
	const { data: gamers } = useGetGamers()
	const [index, setIndex] = React.useState(0)
	React.useEffect(() => {
		try {
			if (gamers) {
				const gamer = gamers.find((gamer) => gamer.address === window.ethereum.selectedAddress)
				const indexTemp = gamers.indexOf(gamer)
				console.log(gamers, gamer)
				setIndex(indexTemp + 1)
			}
		} catch {
			return 0
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gamers, window.ethereum.selectedAddress])
	return index
}
export const onRebuy = () => {
	document.getElementById('btn-buy-turn').click()
}
export const onFilterGamers = (gamers) => {
	if (gamers) {
		if (gamers.length < 10) {
			return gamers
		} else {
			const gamersFilter = []
			for (let i = 0; i < 10; i++) {
				gamersFilter.push(gamers[i])
			}
			return gamersFilter
		}
	}
	return []
}
