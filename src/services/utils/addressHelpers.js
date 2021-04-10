import addresses from 'constants/contracts'
import { REACT_APP_CHAIN_ID } from 'constants/constants'

export const getCakeAddress = () => {
	return addresses.ari[REACT_APP_CHAIN_ID]
}
