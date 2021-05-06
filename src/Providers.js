import React from 'react'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { DataContext } from 'contexts/DataContext'
import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import getRpcUrl from 'services/utils/getRpcUrl'
import { REACT_APP_CHAIN_ID } from 'constants/constants'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
const Providers = ({ children }) => {
	const rpcUrl = getRpcUrl()
	const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)
	const [isOpenOverlay, setIsOpenOverlay] = React.useState(false)
	const [isOpenSelectTokenFrom, setIsOpenSelectTokenFrom] = React.useState(false)
	const [isOpenSelectTokenTo, setIsOpenSelectTokenTo] = React.useState(false)
	const [isOpenOverlayTrans, setIsOpenOverlayTrans] = React.useState(false)
	const [aggregator, setAggregator] = React.useState([])
	const [isOpenConnectWallet, setIsOpenConnectWallet] = React.useState(false)
	const [isOpenDetailWallet, setIsOpenDetailWallet] = React.useState(false)
	const [isOpenFlappyBird, setIsOpenFlappyBird] = React.useState(false)
	return (
		<UseWalletProvider
			chainId={parseInt(REACT_APP_CHAIN_ID)}
			connectors={{
				walletconnect: { rpcUrl },
				bsc,
			}}
		>
			<QueryClientProvider client={queryClient}>
				<RefreshContextProvider>
					<DataContext.Provider
						value={{
							isOpenOverlayTrans,
							setIsOpenOverlayTrans,
							isOpenSidebar,
							setIsOpenSidebar,
							isOpenOverlay,
							setIsOpenOverlay,
							isOpenSelectTokenFrom,
							setIsOpenSelectTokenFrom,
							isOpenSelectTokenTo,
							setIsOpenSelectTokenTo,
							aggregator,
							setAggregator,
							isOpenConnectWallet,
							setIsOpenConnectWallet,
							isOpenDetailWallet,
							setIsOpenDetailWallet,
							isOpenFlappyBird,
							setIsOpenFlappyBird,
						}}
					>
						{children}
					</DataContext.Provider>
				</RefreshContextProvider>
			</QueryClientProvider>
		</UseWalletProvider>
	)
}

export default Providers
