import React from 'react'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { DataContext } from 'contexts/DataContext'
import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import getRpcUrl from 'services/utils/getRpcUrl'
import { REACT_APP_CHAIN_ID } from 'constants/constants'

const Providers = ({ children }) => {
	const rpcUrl = getRpcUrl()
	const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)
	const [isOpenOverlay, setIsOpenOverlay] = React.useState(false)
	return (
		<UseWalletProvider
			chainId={parseInt(REACT_APP_CHAIN_ID)}
			connectors={{
				walletconnect: { rpcUrl },
				bsc,
			}}
		>
			<RefreshContextProvider>
				<DataContext.Provider
					value={{
						isOpenSidebar,
						setIsOpenSidebar,
						isOpenOverlay,
						setIsOpenOverlay,
					}}
				>
					{children}
				</DataContext.Provider>
			</RefreshContextProvider>
		</UseWalletProvider>
	)
}

export default Providers
