import React from 'react'
import MetamaskIcon from 'assets/wallet/metamask.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { DataContext } from 'contexts/DataContext'
import './ConnectWallet.css'

export const ConnectWallet = () => {
	const data = React.useContext(DataContext)
	const wallet = useWallet()
	return (
		<div className='connect-wallet'>
			<div onClick={() => data.setIsOpenConnectWallet(false)} className='overlay'></div>
			<div className='wallet'>
				<div className='header-primary'>
					Connect to a wallet
					<FontAwesomeIcon
						className='icon'
						onClick={() => data.setIsOpenConnectWallet(false)}
						icon={faTimes}
					/>
				</div>
				<div className='list-dex'>
					<div
						onClick={async () => {
							await wallet.connect()
							data.setIsOpenConnectWallet(false)
						}}
						className='item metamask'
					>
						Metamask{' '}
						<div className='container-img'>
							<img src={MetamaskIcon} alt='Metamask Icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
