import { useEffect, useState } from 'react'
import useWeb3 from './useWeb3'

export const useContract = (abi, address, contractOptions) => {
	const web3 = useWeb3()
	const [contract, setContract] = useState(new web3.eth.Contract(abi, address, contractOptions))

	useEffect(() => {
		setContract(new web3.eth.Contract(abi, address, contractOptions))
	}, [abi, address, contractOptions, web3])

	return contract
}
// export const useLottery = () => {
// 	const abi = lottery
// 	return useContract(abi, getLotteryAddress())
// }
