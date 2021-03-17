import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import cakeABI from 'constants/abi/cake.json'
import { getCakeAddress } from 'services/utils/addressHelpers'
import { getTokenBalance } from 'services/utils/erc20'
import { getContract } from './ultils/web3'
import useRefresh from './useRefresh'

export const useTokenBalance = (tokenAddress) => {
	const [balance, setBalance] = React.useState(new BigNumber(0))
	const { account, ethereum } = useWallet()
	React.useEffect(() => {
		const fetchBalance = async () => {
			const res = await getTokenBalance('test', 'test', account)
			setBalance(new BigNumber(res))
		}
		if (account && ethereum) {
			fetchBalance()
		}
	}, [account, ethereum, tokenAddress])

	return balance
}
export const useTotalSupply = () => {
	const [totalSupply, setTotalSupply] = React.useState(new BigNumber(0))
	const { slowRefresh } = useRefresh()
	React.useEffect(() => {
		console.log('test refresh')
		async function fetchTotalSupply() {
			const cakeContract = getContract(cakeABI, getCakeAddress())
			const supply = await cakeContract.methods.totalSupply().call()
			setTotalSupply(new BigNumber(supply))
		}

		fetchTotalSupply()
	}, [slowRefresh])

	return totalSupply
}
export const useBurnedBalance = (tokenAddress) => {
	const [balance, setBalance] = React.useState(new BigNumber(0))
	const { account, ethereum } = useWallet()

	React.useEffect(() => {
		const fetchBalance = async () => {
			const res = await getTokenBalance(
				ethereum,
				tokenAddress,
				'0x000000000000000000000000000000000000dEaD'
			)
			setBalance(new BigNumber(res))
		}

		if (account && ethereum) {
			fetchBalance()
		}
	}, [account, ethereum, tokenAddress])

	return balance
}
