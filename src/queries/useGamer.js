import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { AUTH_API_1 } from 'constants/api'
import { encrypt, decrypt } from 'services/utils/crypto'
import { AUTH } from 'constants/Secret'

export const useGetGamers = () => {
	return useQuery(['useGetGamers.name'], () => {
		return fetch(`${AUTH_API_1}/admin/gamers`, {
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
	return useMutation((quantity) => {
		try {
			if (gamers) {
				const gamer = gamers.find((account) => account.address === window.ethereum.selectedAddress)
				if (gamer) {
					return fetch(`${AUTH_API_1}/admin/gamers/details`, {
						method: 'POST',
						headers: {
							'Content-type': 'application/json',
						},
						body: JSON.stringify({
							params: encrypt({
								info: AUTH,
								...gamer,
								amount: gamer.amount + 1 * quantity,
							}),
						}),
					})
						.then((res) => res.json())
						.then((result) => setIsLoading(false))
						.catch((err) => console.log(err))
				}
				return fetch(`${AUTH_API_1}/admin/gamers/details`, {
					headers: {
						'Content-type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify({
						params: encrypt({
							info: AUTH,
							highest_score: 0,
							address: window.ethereum.selectedAddress,
							amount: 1 * quantity,
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
			}
		} catch {}
	})
}
export const useGetScore = () => {
	return useQuery(
		['useGetScore.name'],
		() => {
			return fetch(`${AUTH_API_1}/admin/gamer`, {
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
					const res = decrypt(result.result)
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
export const useCheckAccount = () => {
	const { data: gamers } = useGetGamers()
	const [gamerFound, setGamerFound] = React.useState(null)
	React.useEffect(() => {
		try {
			if (gamers) {
				const gamer = gamers.find((item) => item.address === window.ethereum.selectedAddress)
				setGamerFound(gamer)
			}
		} catch {
			console.log('Something went wrong')
		}
	}, [gamers])
	if (gamerFound) {
		if (gamerFound.amount >= 1) {
			return true
		}
		return false
	}
	return false
}
export const usePlayFlappyBird = (setIsNotEnough) => {
	const { data: gamers } = useGetGamers()
	const [gamerFound, setGamerFound] = React.useState(null)

	React.useEffect(() => {
		try {
			if (gamers) {
				const gamer = gamers.find((item) => item.address === window.ethereum.selectedAddress)
				setGamerFound(gamer)
			}
		} catch {
			console.log('something went wrong')
		}
	}, [gamers])
	return () => {
		try {
			if (gamerFound) {
				if (gamerFound.amount >= 1) {
					window.open('/ari-bird/game', '_self')
				} else {
					setIsNotEnough(true)
				}
			} else {
				setIsNotEnough(true)
			}
		} catch {}
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
	try {
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
	} catch {
		return []
	}
	return []
}
