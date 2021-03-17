import { RefreshContextProvider } from 'contexts/RefreshContext'
import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import getRpcUrl from 'services/utils/getRpcUrl'
import { REACT_APP_CHAIN_ID } from 'constants/constants'

const Providers = ({ children }) => {
	const rpcUrl = getRpcUrl()
	return (
		<UseWalletProvider
			chainId={parseInt(REACT_APP_CHAIN_ID)}
			connectors={{
				walletconnect: { rpcUrl },
				bsc,
			}}
		>
			<RefreshContextProvider>{children}</RefreshContextProvider>
		</UseWalletProvider>
	)
}

export default Providers
