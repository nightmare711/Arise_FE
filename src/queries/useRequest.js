import { getContract, getWeb3 } from './ultils/web3'
import { getCakeAddress } from 'services/utils/addressHelpers'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useUpdateGamer } from './useGamer'
import ariABI from 'constants/abi/ari.json'

const onCheckSendStatus = async (txHash, updateGamer, quantity, setIsLoading) => {
	const web3 = await getWeb3()
	web3.eth
		.getTransactionReceipt(txHash)
		.then((result) => {
			if (result) {
				if (result.status) {
					updateGamer(quantity)
				} else {
					setIsLoading(false)
				}
			} else {
				setTimeout(() => onCheckSendStatus(txHash, updateGamer, quantity), 2000)
			}
		})
		.catch((err) => console.log(err))
}

export const useRequestSend = (setIsLoading, setBuyError, setIsReceived) => {
	const wallet = useWallet()
	const { mutate: updateGamer } = useUpdateGamer(setIsLoading, setIsReceived)

	return async (quantity = 1) => {
		try {
			const ariContract = getContract(ariABI, getCakeAddress())
			const contractData = ariContract.methods
				.transfer('0x000000000000000000000000000000000000dEaD', quantity * 1 * Math.pow(10, 9))
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
							onCheckSendStatus(res, updateGamer, quantity, setIsLoading)
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
		} catch {
			setIsLoading(false)
		}
	}
}
