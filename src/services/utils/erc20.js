import erc20 from 'constants/erc20.json'
import Web3 from 'web3'

export const getContract = (provider, address) => {
	try {
		const web3 = new Web3(provider)
		const contract = new web3.eth.Contract(erc20, address)
		return contract
	} catch {
		return '0'
	}
}

export const getTokenBalance = async (provider, tokenAddress, userAddress) => {
	const contract = getContract(provider, tokenAddress)
	try {
		const balance = await contract.methods.balanceOf(userAddress).call()
		return balance
	} catch (e) {
		return '0'
	}
}
