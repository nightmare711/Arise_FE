import { getContract, getWeb3 } from './ultils/web3'
import { getCakeAddress } from 'services/utils/addressHelpers'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useUpdateGamer } from './useGamer'
import ariABI from 'constants/abi/ari.json'

export const useRequestSend = () => {
	const wallet = useWallet()
	const { mutate: updateGamer } = useUpdateGamer()

	return async () => {
		const web3 = await getWeb3()
		const ariContract = getContract(ariABI, getCakeAddress())
		const contractData = ariContract.methods
			.transfer('0x36380294d3f0CFDd5B0EfA8Fa90709a35476c0F7', 1)
			.encodeABI()
		const params = [
			{
				from: window.ethereum.selectedAddress,
				to: '0xa861f33d8ac80b64c1b8c7b4c99599474b79888a',
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
					}
				})
		} else {
			wallet.connect()
		}
	}
}
