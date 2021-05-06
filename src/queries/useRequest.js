import { getContract } from './ultils/web3'
import { getCakeAddress } from 'services/utils/addressHelpers'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useUpdateGamer } from './useGamer'
import ariABI from 'constants/abi/ari.json'

export const useRequestSend = (setIsLoading, setBuyError) => {
	const wallet = useWallet()
	const { mutate: updateGamer } = useUpdateGamer(setIsLoading)

	return async () => {
		const ariContract = getContract(ariABI, getCakeAddress())
		const contractData = ariContract.methods
			.transfer('0x36380294d3f0CFDd5B0EfA8Fa90709a35476c0F7', 1 * Math.pow(10, 9))
			.encodeABI()
		const params = [
			{
				from: window.ethereum.selectedAddress,
				to: '0xcb77d84066f6192ab79bbc6d6450ddbe72661d7c',
				data: contractData,
				chainId: '38',
				contractAddress: '',
			},
		]
		if (wallet.account) {
			window.ethereum
				.request({
					method: 'eth_sendTransaction',
					params,
				})
				.then((res) => {
					if (res) {
						updateGamer(window.ethereum.selectedAddress)
					} else {
						setBuyError(true)
						setIsLoading(false)
					}
				})
				.catch((err) => {
					setBuyError(true)
					setIsLoading(false)
				})
		} else {
			wallet.connect()
		}
	}
}
