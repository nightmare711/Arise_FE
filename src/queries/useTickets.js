import { useState, useEffect } from 'react'
import useRefresh from './useRefresh'
import BigNumber from 'bignumber.js'

export const useTotalRewards = () => {
	const [rewards, setRewards] = useState(new BigNumber(0))
	const lotteryContract = useLottery()
	const { fastRefresh } = useRefresh()

	useEffect(() => {
		const fetchBalance = async () => {
			const res = await getTotalRewards(lotteryContract)
			setRewards(new BigNumber(res))
		}

		if (lotteryContract) {
			fetchBalance()
		}
	}, [lotteryContract, fastRefresh])

	return rewards
}
